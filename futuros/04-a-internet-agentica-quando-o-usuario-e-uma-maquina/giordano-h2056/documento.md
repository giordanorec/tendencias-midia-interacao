---
tema: "A internet agêntica: quando o usuário é uma máquina"
slug: a-internet-agentica-quando-o-usuario-e-uma-maquina
autor_login: grec
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2056
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 15
efeitos_ordem_2: 17
efeitos_ordem_3: 17
tecnologias_citadas: [Model Context Protocol, WebMCP, document.modelContext, llms.txt, robots.txt, Content Signals, Web Bot Auth, RFC 9421, HTTP Message Signatures, Signature Agent Card, Ed25519, x402, HTTP 402, Pay Per Crawl, Pay Per Use, Agent Readiness score, Not Human Search, negociação de conteúdo em Markdown, MCP Server Card, OpenAPI, ai-plugin.json, Comet, Claude for Chrome, ChatGPT Agent, AI Overviews, AI Mode, CFAA, Pix]
fontes: 15
confianca: media
experimento: "O site de duas caras — uma URL que serve HTML, Markdown e catálogo de ferramentas, instrumentada para medir o que cada agente de mercado escolhe"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

A web foi construída para olhos e está sendo reaparelhada para procuradores automáticos. Quatro rupturas sustentam este mapa, e nenhuma delas é "a IA lê o site": a unidade publicável deixa de ser a página e passa a ser a ferramenta tipada que o agente chama; o servidor passa a entregar coisas diferentes conforme a finalidade declarada e criptograficamente verificável de quem pede; o pagamento entra no próprio pedido HTTP, e o acesso ganha preço por requisição; e a ação da máquina começa a ser imputada ao humano que a instruiu, o que esvazia os Termos de Serviço como fronteira. Os números de hoje desmentem tanto o entusiasmo quanto o ceticismo: bots já passaram humanos em volume de tráfego, mas entre os 200 mil domínios mais visitados menos de quinze publicam um cartão de servidor MCP, e 97% dos arquivos `llms.txt` existentes nunca foram lidos por ninguém. O que se decide até 2056 não é se a máquina vai ler o site — ela já lê —, é se ela vai ler por um contrato ou por simulação de clique, quem paga a conta e se "visitar um site" continua significando a mesma coisa para todo mundo. A aposta central deste mapa é que não continua: a web se estratifica em faixas de serviço com preço, e a palavra "aberta" passa a querer dizer "acessível a qualquer agente mediante tarifa", não "gratuita".

## 2. O tema

O objeto aqui é **a web como plataforma sendo reprojetada para máquinas**. Não a inteligência do agente, não a segurança dele, não o que ele compra: a infraestrutura de publicação, descoberta, admissão e cobrança que um site oferece quando o visitante que mais aparece nos logs é um programa agindo por procuração.

Isso encosta em mídia e interação em três pontos que não são metafóricos. Primeiro, **o que se publica**: se o consumidor é um agente, a página renderizada é embalagem descartável e o que importa é o contrato de função — a interface deixa de ser o produto. Segundo, **como se cobra**: o financiamento da web aberta foi construído sobre atenção humana, e máquina não presta atenção. Terceiro, **quem entra**: por trinta anos o servidor tratou todo cliente como opaco e confiou na honra do `robots.txt`; isso está sendo substituído por admissão verificável, e admissão verificável significa que a mesma URL pode devolver coisas diferentes para visitantes diferentes.

Merece mapa de futuro, e não levantamento de estado da arte, porque o estado da arte aqui é trivial de levantar e inútil de ler: são especificações em rascunho e números de adoção minúsculos. O que não é trivial é o que decorre delas se pegarem — e o que decorre se não pegarem, que é um cenário igualmente interessante e, pelo que a história do `llms.txt` mostra, igualmente provável.

### Premissas assumidas nesta rodada

O bloco `briefing:` desta rodada cobriu a entrevista do §0 da skill. Registro o que ele definiu e o que **eu** assumi porque ele não cobria:

| Item | Valor | Origem |
|---|---|---|
| Horizonte | 2056 (trinta anos) | briefing |
| Público | quem projeta mídia e interação | briefing |
| Recorte | global, com nota sobre o Brasil | briefing |
| Descartado de início | o que já é comum em produto de massa | briefing |
| Disrupção suspeita pelo autor | nenhuma — descobrir | briefing |
| Viés | neutro | briefing |
| Falseador declarado | adoção já passou da maioria inicial (Rogers), ou a tecnologia não rompe nada | briefing |
| Zona de interesse | Agentes | briefing |
| **Fronteira com o tema 2** | identidade e detecção de agentes é objeto do tema 2; aqui a identidade entra apenas como **pré-condição** da política de publicação | **assumido** |
| **Fronteira com o tema 5** | comprar bens por agente é o tema 5; aqui o pagamento entra apenas como **cobrança pelo acesso ao conteúdo** | **assumido** |
| **Unidade de análise** | o site/servidor e quem publica, não o agente e quem o fabrica | **assumido** |
| **Ideias óbvias excluídas** | qualquer efeito que serviria igualmente a qualquer um dos 19 temas | briefing + §3 da skill |

Sem rebaixamento de confiança por ausência de entrevista: o briefing veio completo e a rodada teve acesso à web. O que carrega rebaixamento é outra coisa, e está na §7.

## 3. Onde isso está hoje

*Âncora feita com acesso à web em 12/09/2026. Quinze fontes abertas e lidas; a lista está na §11. O que apareceu em busca e não foi aberto está na §12 e não sustenta nenhuma afirmação do corpo.*

### O que já existe e funciona

**Máquina é maioria.** O Bad Bot Report 2026 da Imperva, publicado em 29/04/2026, mede tráfego automatizado em 53% de todo o tráfego web em 2025, contra 51% em 2024, com a atividade humana caindo para 47%. O relatório trata os agentes de IA como categoria nova de participante — que não apenas varre sites, mas recupera dados e executa fluxos de trabalho.

**O tráfego agêntico já tem forma reconhecível.** O *State of Agentic Traffic* de abril de 2026 da HUMAN Security mostra que agentes embutidos em navegador respondem por ~71% da atividade agêntica observada: Comet com 48,12%, Atlas com 21,33%, a extensão Claude para Chrome com 17,33% e o ChatGPT Agent com 8,55%; os outros seis do top 10 somam menos de 5%. E mostra a concentração por setor: mídia 45,62%, e-commerce 38,20% e viagens 14,12% capturam 98% do tráfego agêntico.

**A admissão por classe virou política de infraestrutura, com data.** Em 01/07/2026 a Cloudflare anunciou prazo até 15/09/2026 para que empresas de IA separem seus rastreadores em três categorias — busca, agente e treino — sob pena de os rastreadores "mistos" passarem a ser bloqueados por padrão em páginas que hospedam anúncio. No mesmo anúncio, o *Pay Per Crawl* evoluiu para *Pay Per Use*: o editor cobra quando o conteúdo gera valor dentro de uma resposta, não quando o bot baixa a página. Ceramic.ai e You.com como parceiros iniciais. Um número do anúncio que explica a mudança de modelo: mais de 50% do tráfego de rastreio de IA é gasto rebuscando páginas que não mudaram.

**A identidade da máquina saiu do user-agent declarativo e virou assinatura.** O Web Bot Auth da Cloudflare usa HTTP Message Signatures (RFC 9421) com chave Ed25519 por agente e os cabeçalhos `Signature`, `Signature-Input` e `Signature-Agent`, verificando `keyid`, `expires` e a tag `web-bot-auth`. O rascunho de arquitetura na IETF (`draft-meunier-web-bot-auth-architecture-05`, março de 2026) define três papéis — *user*, *agent* e *origin* — e é explícito sobre o motivo: conformidade regulatória, controle de acesso, proteção contra falsificação de identidade e diferenciação de tráfego. É a peça que transforma `robots.txt` de convenção de honra em controle aplicável.

**O pagamento por requisição saiu do papel.** O x402 usa o código HTTP 402, reservado e ocioso desde o HTTP/1.1: o servidor responde 402 com os termos, o cliente paga e repete o pedido. O site oficial declara, nos últimos 30 dias medidos em 12/09/2026, **75,41 milhões de transações**, **US$ 24,24 milhões** de volume, **94.060** compradores e **22.000** vendedores — e cita Alchemy, AWS, Cloudflare e Stripe como apoiadores, sob uma fundação anunciada pela Linux Foundation.

**A camada de protocolo tem registro público em funcionamento.** O registro oficial do Model Context Protocol responde em `registry.modelcontextprotocol.io/v0/servers` com paginação por cursor e servidores datados (o primeiro da lista, `inference.sh`, ativo desde 13/04/2026). Existe, está no ar, é consultável por máquina.

### O que existe e ainda não funciona

**A prontidão agêntica é quase inexistente onde deveria importar.** Em 17/04/2026 a Cloudflare publicou o *Agent Readiness score* e mediu os **200 mil domínios mais visitados**: `robots.txt` em 78%, Content Signals em 4%, negociação de conteúdo em Markdown em 3,9% — e **menos de quinze sites**, no conjunto inteiro, com MCP Server Card ou catálogo de API. Este é o número mais importante deste mapa: a camada agêntica de publicação praticamente não existe nos sites que as pessoas visitam.

**O `llms.txt` é o precedente de fracasso.** A Ahrefs analisou 137.210 domínios e encontrou o arquivo em 28% deles (~38 mil). **97% desses arquivos não receberam nenhuma requisição em maio de 2026.** Entre os 3% que receberam, a maior fatia é de ferramenta de auditoria de SEO (21,7%), não de agente (10,5%); bots de treino são 5,3%. Ou seja: um padrão adotado por um quarto dos sites e ignorado por quem deveria consumi-lo. É o cemitério para onde a raiz 1 pode ir.

**O WebMCP está em rascunho, não em norma.** A proposta expõe funções JavaScript e elementos `<form>` como ferramentas com descrição em linguagem natural, via `document.modelContext` (`registerTool`, `getTools`, `executeTool`, evento `toolchange`). Publicada em 13/08/2025 por engenheiros da Microsoft (Brandon Walderman, Leo Lee, Andrew Nolan) e do Google (David Bokan, Khushal Sagar, Hannah Van Opstal), o repositório tem ~4.000 estrelas e 146 commits, e o próprio material não afirma estágio de padronização no W3C nem disponibilidade estável em navegador.

**A navegação agêntica é insegura por construção, e quem constrói admite.** A Brave demonstrou (21/10/2025, atualizado em 31/10) injeção indireta no Comet por texto imperceptível dentro de screenshot, e no Fellou por simples navegação — pedir para ir a um site já manda o conteúdo do site ao modelo como se fosse comando. A conclusão da Brave é categórica: a navegação agêntica será inerentemente perigosa até haver melhoria de categoria, e o remédio recomendado é isolar a sessão agêntica da regular.

**O ranking agêntico existe, mas é pequeno.** O Not Human Search indexa **5.316 sites**, pontua de 0 a 100 sobre sinais como `llms.txt`, `ai-plugin`, OpenAPI, API, bots de IA, Schema.org e MCP, e declara **média 38** entre os indexados, com ordenação por prontidão e não por pagamento. É o embrião de um PageRank agêntico com base de dados do tamanho de um bairro.

### Quem constrói

- **Anthropic + Agentic AI Foundation / Linux Foundation** — o MCP e o registro público.
- **Google + Microsoft**, pelo W3C Web Machine Learning Community Group — o WebMCP e a API `document.modelContext`.
- **Cloudflare** — o ator com mais poder sobre este tema: escreve o rascunho de identidade na IETF, define a política de admissão por classe, opera a cobrança por uso e publica a métrica (*Agent Readiness*) pela qual todos serão medidos. É juiz, tabelião e cobrador ao mesmo tempo.
- **Coinbase / x402 Foundation** — o trilho de pagamento por requisição.
- **Perplexity, OpenAI e Anthropic** — os fabricantes dos agentes que aparecem nos logs.
- **Comunidade de segurança (Brave, OWASP, academia)** — o freio.
- **Not Human Search / United Ideas** — o índice.

### O número da adoção, sem arredondar

| Medida | Valor | Fonte, data |
|---|---|---|
| Tráfego automatizado | 53% do total | Imperva, 29/04/2026 |
| Agentes de navegador no tráfego agêntico | ~71% | HUMAN, abr/2026 |
| `robots.txt` nos 200 mil maiores domínios | 78% | Cloudflare, 17/04/2026 |
| Content Signals | 4% | Cloudflare, 17/04/2026 |
| Negociação em Markdown | 3,9% | Cloudflare, 17/04/2026 |
| MCP Server Card / catálogo de API | **< 15 sites** | Cloudflare, 17/04/2026 |
| `llms.txt` publicado | 28% de 137.210 domínios | Ahrefs, mai/2026 |
| `llms.txt` com zero requisições | 97% | Ahrefs, mai/2026 |
| Transações x402 em 30 dias | 75,41 milhões | x402.org, 12/09/2026 |
| Volume x402 em 30 dias | US$ 24,24 milhões | x402.org, 12/09/2026 |
| Vendedores ativos no x402 | 22.000 | x402.org, 12/09/2026 |
| Sites pontuados pelo Not Human Search | 5.316 (média 38/100) | nothumansearch.ai, 12/09/2026 |

### O contexto que NÃO é raiz (ver §4)

A queda do clique. No Brasil, a Ajor pesquisou **152 veículos online** e concluiu que um em cada quatro perdeu mais de 20% da audiência em 2025; a matéria da Agência Brasil (ago/2026) liga isso ao financiamento do jornalismo profissional e cita o caso do Business Insider, que demitiu 21% do quadro em maio de 2025 por queda de tráfego atribuída a resumos de IA. O E-Commerce Brasil, citando o *State of the Internet* da Akamai, registra que chatbots geram cerca de 96% menos tráfego de referência que buscadores tradicionais e que ~1% dos usuários clica nas fontes citadas. Isso é grande, é real — e é **maduro**. Entra como contexto, não como raiz.

## 4. As disrupções-raiz

Quatro raízes, todas submetidas às quatro perguntas do critério de maturidade. Uma quinta candidata foi recusada e está registrada ao final.

---

### Raiz 1 — A unidade publicável da web deixa de ser a página e passa a ser a ferramenta tipada

**O que rompe.** O pressuposto de que publicar na web é publicar um *documento para ser lido e navegado*. Com WebMCP e MCP, o que se publica é um contrato de função com descrição em linguagem natural: `registerTool` com nome, esquema de parâmetros e frase que explica quando usar. A interface deixa de ser o produto; o produto é o contrato. Isso não é "o mesmo, mais barato" — é outra coisa sendo publicada, por outra equipe, com outro ciclo de vida.

**Por que agora, e não há cinco anos.** Porque só agora existe um consumidor capaz de ler uma descrição em prosa e decidir invocar a função certa, e só agora existe um formato comum: o MCP foi doado a uma fundação sob a Linux Foundation, o WebMCP nasceu editado conjuntamente por Google e Microsoft dentro de um grupo comunitário do W3C, e há registro público consultável. Em 2021 o equivalente teria sido mais um diretório de APIs — e diretório de API já existia e não mudou nada, porque exigia um humano lendo a documentação.

**Onde está na difusão.** **Produto de nicho**, beirando o especulativo. A medida é dura: menos de quinze sites com MCP Server Card entre os 200 mil mais visitados, e 3,9% com negociação em Markdown (Cloudflare, abr/2026). Não é maioria por três ordens de grandeza.

**O que ainda falta acontecer.** (a) O WebMCP sair de rascunho e ter implementação estável em mais de um motor de navegador. (b) Um modelo de responsabilidade para quando a ferramenta exposta é usada de forma danosa — hoje `executeTool` tem efeito colateral e ninguém definiu de quem é a culpa. (c) Autorização delegada padronizada para ação que muda estado, não só leitura. (d) Uma razão econômica para o publisher expor a ferramenta: expor é dar de graça o que a tela cobrava em atenção.

**Quem tem incentivo para bloquear.** Quem vende a tela. Times de produto cuja receita é impressão publicitária e cujo indicador é tempo de sessão não têm motivo para publicar um contrato que dispensa a sessão. A forma do bloqueio não é recusa aberta: é publicar um catálogo incompleto, de propósito — com as ferramentas de leitura e sem as de ação.

---

### Raiz 2 — O site passa a servir conteúdo diferente segundo a finalidade verificável do visitante

**O que rompe.** O princípio de que uma URL devolve a mesma coisa para todo mundo. Esse princípio sustenta o cache, o link permanente, a citação, o arquivamento e a possibilidade de verificar publicamente o que alguém publicou. A separação em busca / agente / treino, com bloqueio por padrão para quem não se separar, é uma decisão de política de publicação, não de segurança: muda o que o servidor entrega, não apenas quem ele deixa entrar. E rompe o `robots.txt` como convenção de honra — com assinatura Ed25519 verificável, a admissão passa a ser aplicável.

**Por que agora, e não há cinco anos.** Porque faltavam as duas metades. A metade técnica chegou com o RFC 9421 e o rascunho de arquitetura na IETF, que dá ao pedido HTTP uma identidade criptográfica e um papel declarado. A metade política chegou quando um intermediário com posição dominante pôs data no calendário: 15/09/2026. Em 2021 nem havia assinatura verificável nem havia volume de máquina que justificasse a conta — e hoje a máquina é maioria do tráfego.

**Onde está na difusão.** **Adoção precoce**, empurrada de cima. Content Signals em 4% dos 200 mil maiores domínios; a política de bloqueio por padrão vale para clientes novos e para toda a base gratuita, o que a fará saltar sem que ninguém escolha. Não é maioria — mas é a raiz que tem a maior velocidade forçada.

**O que ainda falta acontecer.** (a) A verificação funcionar fora de uma CDN única, senão isto é política de uma empresa e não da web. (b) Jurisprudência sobre discriminar entrega por finalidade declarada. (c) Uma resposta para o agente pessoal de pessoa física, que não tem operador para assinar por ele — o rascunho da IETF distingue *user* de *agent*, mas quem assina é o agente.

**Quem tem incentivo para bloquear.** Os fabricantes de agente. Se a classe determina o que se recebe, o fabricante perde. A reação previsível é fazer o agente se apresentar como **mandato do usuário** e não como serviço próprio — que é exatamente o efeito e8, e é o ponto onde esta raiz colide com a raiz 4.

---

### Raiz 3 — O pagamento entra no próprio pedido HTTP, e o acesso ganha preço por requisição

**O que rompe.** O pacto publicitário da web: conteúdo gratuito financiado por atenção humana. Se quem consome é máquina, a atenção deixa de ser moeda — e o acesso vira mercadoria com preço unitário, negociado entre programas, sem ninguém decidindo caso a caso. Rompe também a gratuidade como valor padrão do link: com 402 no protocolo, o preço deixa de ser exceção e passa a ser um campo.

**Por que agora, e não há cinco anos.** O código 402 está reservado desde o HTTP/1.1 e ficou ocioso quase trinta anos por uma razão só: não havia liquidação barata o bastante para cobrar frações de centavo. Stablecoin com custo sub-centavo resolveu isso, e a governança apareceu junto — fundação sob a Linux Foundation, com apoio de operadores de pagamento e de nuvem. O volume já não é simbólico: 75,41 milhões de transações e US$ 24,24 milhões em trinta dias.

**Onde está na difusão.** **Adoção precoce em nicho.** 22 mil vendedores é uma feira, não um mercado; para comparação, há 137 mil domínios só na amostra da Ahrefs. Mas a curva e o apoio institucional tiram isto de "demo".

**O que ainda falta acontecer.** (a) Preço que o agente saiba avaliar sem consultar o humano a cada centavo — hoje o orçamento é subsídio do fornecedor e ninguém vê a conta. (b) Reversão e disputa: não há estorno. (c) Fiscalidade de micropagamento transfronteiriço. (d) No Brasil, o trilho natural não é stablecoin, é Pix — e não existe especificação de 402 sobre Pix.

**Quem tem incentivo para bloquear.** Os intermediários de publicidade. Um mercado de preço por requisição liquidado no protocolo dispensa leilão, dispensa medição de impressão e dispensa a camada que vive dessa medição. A reação previsível não é impedir o 402: é empacotá-lo — vender "acesso agêntico" como pacote mensal com desconto por volume, restaurando o intermediário.

---

### Raiz 4 — A ação da máquina é imputada ao humano que a instruiu, e os Termos de Serviço deixam de poder barrar o agente

**O que rompe.** O Termo de Serviço como fronteira de acesso. Trinta anos de web funcionaram com a regra "o site decide quem entra, e quem burla o termo é invasor". Em 04/08/2026 o Nono Circuito derrubou a liminar que a Amazon havia obtido em 10/03/2026 contra o Comet, com o argumento de que quem acessava os computadores da Amazon era **o usuário do Comet**, não a Perplexity — logo, não havia violação provável do CFAA, e uma liminar contra conduta que provavelmente não viola a lei não serve ao interesse público. Se o agente é extensão jurídica do usuário, barrar o agente é barrar o cliente.

**Por que agora, e não há cinco anos.** Porque a doutrina só podia ser testada quando existisse agente de compra em produto. A ação é de novembro de 2025 e nasce de um acordo de 2024 em que a Perplexity teria se comprometido a pausar recursos de compra agêntica.

**Onde está na difusão.** **Demo pública** — uma decisão de circuito, não firmada, sobre liminar e não sobre o mérito, com rehearing e Suprema Corte ainda possíveis e a Amazon declarando que discorda e avalia os próximos passos. Toda a cadeia derivada desta raiz carrega `confianca: baixa`, por obrigação do critério.

**O que ainda falta acontecer.** (a) Decisão de mérito. (b) Que a doutrina sobreviva a revisão. (c) Equivalente em outras jurisdições. (d) No Brasil, uma leitura do Marco Civil e do CDC que diga se o agente é consumidor, ferramenta do consumidor ou prestador — hoje não há resposta.

**Quem tem incentivo para bloquear.** Os grandes varejistas e marketplaces, que perdem o controle da vitrine. A reação previsível não é jurídica, é técnica: exigir do agente exatamente o que a raiz 2 oferece — assinatura, cadastro, taxa — e alegar custo de servir, que é defensável mesmo quando a proibição não é.

---

### Candidato recusado como raiz

**"O clique morre: a resposta sintetizada substitui a visita."** Recusado. A adoção já é de maioria — 68% de buscas sem clique medidos em 2026, referral de busca para veículos caindo ~34% em um ano, chatbots gerando ~96% menos referência que buscadores, e o AI Mode do Google passando de um bilhão de usuários mensais. Pelo critério do §2 da skill, a partir de "maioria" é maduro e não entra como raiz. **Tratado como contexto na §3**, e reaparece como *causa comum* nos efeitos econômicos — motivo pelo qual vários efeitos de e9 a e12 precisaram do teste da causa solta (§7).

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A unidade publicável da web deixa de ser a página e passa a ser a ferramenta tipada
    efeitos:
      - id: e1
        ordem: 1
        efeito: Equipes de produto passam a manter duas superfícies do mesmo serviço — a tela e o catálogo de ferramentas — e o catálogo vira o contrato versionado
        sinal: medio
        prazo: 2033
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Quebrar uma ferramenta do catálogo passa a ser tratado como quebrar API pública, com janela de depreciação anunciada
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A noção de site fora do ar se desdobra em dois compromissos de disponibilidade, um para humanos e outro para agentes
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A métrica de sucesso do produto migra de tempo de sessão para taxa de conclusão de tarefa por agente
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A compra de publicidade por impressão perde sentido como contrato e o mercado migra para preço por tarefa concluída
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O trabalho de design desloca-se do fluxo de telas para a redação da descrição da ferramenta, que passa a ser o artefato que decide o uso
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A descrição da ferramenta vira espaço disputado e nasce a otimização de descrição, equivalente agêntico da tag de título
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Descrição enganosa de ferramenta passa a ser enquadrada como publicidade enganosa, no Brasil pelo artigo 37 do Código de Defesa do Consumidor
                sinal: fraco
                prazo: 2043
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Sites sem catálogo passam a ser operados por simulação de clique e assumem o custo de serem imprevisíveis para quem os usa
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O custo de servir agente que renderiza página inteira torna o bloqueio uma decisão de infraestrutura, tomada por quem paga a banda e não pela redação
            sinal: medio
            prazo: 2031
            confianca: alta
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A web pública se estratifica em três faixas de serviço — humanos, agentes verificados e o resto — com qualidade de entrega diferente em cada uma
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: O custo de manter duas superfícies faz a maioria dos sites pequenos terceirizar o acesso agêntico a intermediários, concentrando-o em poucos gateways de ferramenta
        sinal: medio
        prazo: 2035
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Os gateways de ferramenta acumulam o registro de quem pediu o quê e viram a camada onde se mede audiência agêntica
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A discussão antitruste sobre porta de entrada desloca-se da loja de aplicativos para o catálogo de ferramentas
                sinal: fraco
                prazo: 2043
                confianca: baixa
  - disrupcao: O site passa a servir conteúdo diferente segundo a finalidade verificável do visitante
    efeitos:
      - id: e5
        ordem: 1
        efeito: A mesma URL passa a devolver documentos diferentes conforme a classe do visitante, e a citação de página perde estabilidade
        sinal: medio
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O link deixa de bastar como prova e jornalismo e litígio passam a exigir captura assinada com registro da classe de visitante
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Tribunais passam a aceitar apenas captura verificada por terceiro para conteúdo web, e surge um serviço de fé pública para páginas
                sinal: fraco
                prazo: 2046
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Otimização para busca e otimização para agente se separam em duas disciplinas com equipes e orçamentos distintos
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: A profissão de SEO se bifurca em engenharia de contrato de ferramenta e relações públicas com modelos, em vez de desaparecer
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: O agente pessoal sem operador conhecido é tratado como tráfego suspeito, e navegar por conta própria passa a exigir filiação a um fornecedor que assine por você
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O acesso agêntico vira serviço com cadastro, e quem não se cadastra navega numa faixa degradada de entrega
            sinal: fraco
            prazo: 2037
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: No Brasil o debate de neutralidade de rede reabre com outro objeto — não qual aplicativo tem passagem franca, mas qual agente
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Arquivos públicos passam a guardar uma terceira versão do documento, que não é a servida ao humano nem a servida ao agente
        sinal: fraco
        prazo: 2036
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: A memória pública da web fica com um vão de uma década, em que o arquivado diverge sistematicamente do lido
            sinal: fraco
            prazo: 2047
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A crítica de fontes ganha uma etapa nova — determinar a que classe de visitante o documento arquivado foi servido
                sinal: fraco
                prazo: 2052
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Fabricantes de agente reagem fazendo o agente assinar com mandato do usuário em vez de identidade própria, esvaziando a distinção por classe
        sinal: fraco
        prazo: 2038
        confianca: baixa
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A responsabilidade pelo que o agente faz migra do fabricante para o usuário que assinou o mandato, e o termo do agente vira o documento que importa
            sinal: fraco
            prazo: 2041
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: A escolha do agente vira decisão comparável à de operadora de telefonia e aparece pressão regulatória por portabilidade de mandato entre fabricantes
                sinal: fraco
                prazo: 2046
                confianca: baixa
  - disrupcao: O pagamento entra no próprio pedido HTTP e o acesso ganha preço por requisição
    efeitos:
      - id: e9
        ordem: 1
        efeito: Veículos passam a operar duas tabelas de preço — assinatura para humano e centavos por requisição para máquina — e a segunda é fixada por algoritmo, não por área comercial
        sinal: medio
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: A redação passa a conhecer o preço de cada matéria por consulta de máquina e a pauta desloca-se para dado estruturado, série e verificação
            sinal: fraco
            prazo: 2037
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Manter bases consultáveis torna-se mais rentável que publicar texto e a redação se reorganiza em torno da manutenção de dados
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: O paywall deixa de ser muro e vira torniquete — em vez de negar acesso, cobra por ele, e a taxa de bloqueio cai enquanto a receita por acesso flutua sem decisão humana
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Conteúdo caro de produzir e barato de resumir fica com a pior relação de preço, porque uma única requisição extrai o essencial de meses de apuração
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: A reportagem de investigação migra para fora da web aberta e deixa de estar no conjunto que o agente consulta por padrão
                sinal: fraco
                prazo: 2043
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: O custo de operação do agente vira orçamento que o usuário administra, e pesquisar passa a ser uma despesa visível na fatura
        sinal: fraco
        prazo: 2035
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Agentes passam a competir por preço e mais barato passa a significar consultar menos fontes
            sinal: fraco
            prazo: 2039
            confianca: baixa
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: A qualidade da resposta ganha faixa de preço explícita e a desigualdade de informação por renda deixa de ser invisível
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: Quando o preço por requisição sobe, o agente deixa de consultar a fonte cara e ela some das respostas, de modo que o preço passa a ser fixado pelo medo de desaparecer
        sinal: fraco
        prazo: 2036
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Grandes veículos coordenam preço de acesso de máquina, porque isolado nenhum deles consegue fixá-lo
            sinal: fraco
            prazo: 2041
            confianca: baixa
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Autoridades de concorrência passam a tratar o preço de acesso de máquina como tarifa de infraestrutura essencial, e no Brasil o Cade é chamado a arbitrar
                sinal: fraco
                prazo: 2047
                confianca: baixa
  - disrupcao: A ação da máquina é imputada ao humano que a instruiu e os Termos de Serviço deixam de poder barrar o agente
    efeitos:
      - id: e13
        ordem: 1
        efeito: Sites deixam de poder proibir o agente e passam a regular taxa e formato do acesso, porque o que é defensável é o custo de servir e não a identidade de quem pede
        sinal: fraco
        prazo: 2036
        confianca: baixa
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: Cobrar por requisição torna-se a única defesa legítima contra o agente, já que bloquear deixou de ser permitido e servir de graça é insustentável
            sinal: fraco
            prazo: 2039
            confianca: baixa
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: A expressão web aberta passa a significar acessível a qualquer agente mediante tarifa, e não gratuita
                sinal: fraco
                prazo: 2049
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: O termo de uso migra do site para o agente e quem passa a impor condição é o fabricante sobre o usuário, não o site sobre o visitante
        sinal: fraco
        prazo: 2038
        confianca: baixa
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: Órgãos de defesa do consumidor passam a auditar o agente como se audita corretor — conflito de interesse, comissão oculta e ordem de apresentação — e no Brasil isso cai sobre Senacon e Procons
            sinal: fraco
            prazo: 2042
            confianca: baixa
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: A marcação de publicidade passa a ser obrigatoriamente legível por máquina, porque o agente não distingue anúncio de conteúdo sem rótulo estruturado
                sinal: fraco
                prazo: 2045
                confianca: baixa
      - id: e15
        ordem: 1
        efeito: Interfaces desenhadas para atritar perdem eficácia porque o agente não sente atrito, e a receita que dependia da fricção evapora
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: O design de produto perde a alavanca da fricção e volta a depender de persuasão por informação verificável
            sinal: fraco
            prazo: 2040
            confianca: baixa
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: O funil de conversão deixa de ser a métrica-mestra do design e dá lugar à taxa de aceitação da recomendação por agente
                sinal: fraco
                prazo: 2044
                confianca: baixa
```

### O que o bloco não diz

**Os mecanismos, um por um.** Cada efeito acima existe porque um mecanismo o liga ao pai. Os que não são óbvios:

- **e3 ← raiz 1**, porque a ausência de contrato obriga o agente a inferir a interface a cada visita, e inferência falha silenciosamente. O sinal é `forte` por artefato, não por crença: os quatro agentes que dominam o tráfego agêntico medido pela HUMAN em abril de 2026 operam dentro do navegador, sobre DOM e captura de tela, e a Brave demonstrou em dois deles que o conteúdo da página entra no modelo como se fosse instrução. Três artefatos verificáveis hoje.
- **e3.1 ← e3**, porque servir um agente que renderiza a página inteira custa CPU e banda de visita humana sem receita de visita humana; a Cloudflare quantificou o desperdício do outro lado (mais de 50% do rastreio é rebusca de página inalterada). Quando a conta chega ao time de infraestrutura, a decisão de bloquear sai da redação.
- **e5 ← raiz 2**, diretamente: a política de três classes com bloqueio por padrão significa, na prática, resposta diferente por classe. Não é inferência, é o desenho do produto anunciado em 01/07/2026.
- **e7 ← raiz 2**, porque arquivador não é humano nem agente de usuário: é uma quarta coisa, sem lugar no esquema de três classes, e portanto cai na classe residual.
- **e9 ← raiz 3**, porque a existência de um campo de preço no protocolo obriga a preenchê-lo, e nenhuma área comercial precifica 75 milhões de transações por mês à mão.
- **e12 ← e9/e10**, e é a retroação que estabiliza a raiz 3: o vendedor descobre que o poder de cobrar é limitado pelo poder do comprador de não citar. É um preço-teto endógeno, sem regulador.
- **e15 ← raiz 4**, porque se o agente age como procurador do usuário e é juridicamente o usuário, então o desenho que se apoiava em cansar o usuário perde o alvo — o procurador não cansa.

**As classes de referência usadas para datar.** Prazo sem referência é chute, então:

| Efeito | Classe de referência | Leitura |
|---|---|---|
| e1 | Service Workers: experimento em navegador em 2014, suporte nos três motores em 2018, rotina de produto por volta de 2022 — cerca de oito anos do experimento ao hábito | WebMCP em rascunho e experimento em 2026 → hábito por volta de **2033** |
| e2, e2.1 | A tag de título levou da existência à profissionalização cerca de cinco anos | descrição de ferramenta profissionalizada em **2033-2034** |
| e5 | HTTPS: HSTS em 2012, certificado gratuito em massa em 2015, maioria do tráfego cifrado em 2018 — seis a sete anos com incentivo forte e custo quase zero | admissão por classe com prazo posto em 2026 → entrega diferenciada normal em **2031** |
| e6, e7 | `robots.txt`: proposto em 1994, nunca virou norma da IETF, e trinta anos depois está em 78% dos maiores domínios — padrões de admissão têm cauda longa e nunca fecham | efeitos derivados empurrados para **2034-2036** |
| e9, e10 | Paywall de notícia: um grande jornal americano em 2011, metade dos grandes veículos por volta de 2019 — oito a nove anos | segunda tabela de preço normal em **2030-2032** |
| e13 | Doutrina do CFAA sobre raspagem: litígio iniciado em 2017, ida e volta às instâncias superiores, sem estabilização até 2022 — cinco anos e ainda assim inconcluso | decisão de 2026 sobre liminar → regra utilizável só em **2036** |

**As datas dessas referências foram escritas de memória e não foram abertas nesta rodada.** Está registrado na §8, e é o item mais frágil do mapa: se alguma delas estiver errada em dois anos, os prazos correspondentes movem junto.

**Cobertura por STEEP e por quem perde.**

| Dimensão | Efeitos | Observação |
|---|---|---|
| Social | e6, e6.1, e6.1.1, e11.1.1 | o eixo é acesso desigual, não "impacto na sociedade" |
| Tecnológico | e1, e1.1, e2, e3, e5, e8 | o mais povoado, o que é em si um viés |
| Econômico | e4, e9, e10, e11, e12, e12.1, e1.2.1 | |
| Ecológico | **vazio** | não forcei. O único candidato honesto seria consumo energético do tráfego agêntico, e não achei número que o sustentasse. Registrado como lacuna. |
| Político / regulatório | e2.1.1, e4.1.1, e6.1.1, e12.1.1, e14.1, e14.1.1, e8.1.1 | todos com regulador nomeado, conforme a proibição de efeito genérico |

**Quem perde**, explicitamente: o site pequeno sem equipe para manter duas superfícies (e4); o leitor sem agente filiado (e6.1); o arquivo público (e7); a reportagem cara (e10.1, e10.1.1); o usuário de baixa renda (e11.1.1); o intermediário de publicidade (e1.2.1); o designer cuja receita vinha da fricção (e15); e — o mais desconfortável — a possibilidade de verificar publicamente o que um site publicou (e5.1).

### Cruzamentos

**Convergência — o pedágio.** Três ramos de raízes diferentes chegam ao mesmo ponto de segunda ordem: **e3.1** (bloquear vira decisão de infraestrutura, raiz 1), **e5** (servir diferente por classe, raiz 2) e **e13.1** (cobrar é a única defesa legítima, raiz 4). Vindos de tecnologia, de política de rede e de direito, os três produzem a mesma coisa: **o acesso a uma página passa a ser um evento precificado e diferenciado**. Convergência independente é o achado mais forte deste mapa, e é o que sustenta a aposta do resumo.

**Convergência — a indústria de otimização para leitor não-humano.** **e2.1** (otimização de descrição de ferramenta) e **e5.2** (AEO como disciplina separada) chegam, por caminhos diferentes, à mesma coisa: um mercado de serviços cujo cliente final não é uma pessoa. Sinal de que já está nascendo: o Not Human Search pontuando 5.316 sites de 0 a 100 e a Cloudflare publicando o *Agent Readiness score* — duas réguas, ambas de 2026, ambas sem ninguém tendo pedido.

**Retroalimentação negativa (estabilizadora).** **e12** freia a própria raiz 3: cobrar caro faz a fonte sumir da resposta, o que derruba o preço. Sem regulador, sem acordo, por mecânica de mercado. É a razão pela qual este mapa **não** prevê explosão de preço de acesso, e sim convergência para uma tarifa baixa e chata.

**Retroalimentação positiva (aceleradora).** **e3 → e3.1 → raiz 1**: quanto mais caro fica servir agente que simula clique, mais barato fica publicar o catálogo. O custo de não aderir é que empurra a adesão — que é exatamente o mecanismo que o `llms.txt` nunca teve, porque publicar `llms.txt` não economizava nada de ninguém. É a diferença estrutural entre os dois casos, e a principal razão para não tratar a raiz 1 como repetição do fracasso do `llms.txt`.

**Contradição não resolvida.** **e13** (o site não pode barrar o agente, porque o agente é o usuário) contra **e6** (o site exige que o agente seja filiado e assinado, sob pena de faixa degradada). As duas não podem valer juntas na forma forte. Não resolvo: registro que **o que decide entre elas é se o mandato assinado pelo usuário conta juridicamente como o usuário acessando**. Se contar, e13 vence e a raiz 2 vira apenas contabilidade. Se não contar, e6 vence e a raiz 4 morre no mérito. O sinal que antecipa a resposta é a combinação de duas coisas observáveis: o mérito de *Amazon v. Perplexity* e se o Web Bot Auth incorpora, no rascunho, um campo de mandato do usuário distinto da identidade do operador.

## 6. Sinais fracos e wildcards

### Sinais fracos

**1. Negociação de conteúdo em Markdown a 3,9%.** Onde foi visto: Cloudflare, *Agent Readiness score*, 17/04/2026, sobre os 200 mil domínios mais visitados. O que mudaria: se a página HTML deixar de ser o formato canônico e virar uma renderização entre outras, todo o vocabulário de "página" se desfaz — não há mais layout, não há mais dobra, não há mais posição. **Sinal observável de crescimento:** `Accept: text/markdown` aparecer nos relatórios públicos de CDN como fração de dois dígitos do tráfego, ou um framework popular passar a servir Markdown por padrão sem configuração.

**2. Educação com −96,8% de tráfego agêntico.** Onde foi visto: HUMAN Security, abril de 2026, na mesma tabela em que governo cresce 254%, SaaS 41,5% e mídia 13,3%. Uma contração de quase 97% num setor inteiro, no mesmo mês em que todos os outros crescem, é anômala demais para ser ruído. Duas leituras possíveis: artefato de medição, ou bloqueio coordenado de instituições de ensino. **Sinal observável:** a contração se repetir no trimestre seguinte, ou uma rede de universidades anunciar política comum de bloqueio.

**3. Menos de quinze MCP Server Cards entre os 200 mil maiores domínios.** Onde foi visto: Cloudflare, 17/04/2026. É um número tão pequeno que é praticamente uma lista de nomes. O que mudaria: se passar de três dígitos, a raiz 1 deixa de ser especulativa e os prazos de e1 e e2 encurtam de cinco a sete anos. **Sinal observável:** a própria série do *Agent Readiness*, que a Cloudflare publica e pode ser reconsultada.

**4. Média 38/100 no Not Human Search, sobre 5.316 sites.** Onde foi visto: nothumansearch.ai, 12/09/2026. É um ranking nascendo com base de dados minúscula — e rankings novos só importam quando o ranqueado começa a se importar. **Sinal observável:** um veículo de grande porte citar a própria nota de prontidão agêntica em material comercial ou em relatório a investidores. No dia em que isso acontecer, o AEO vira orçamento.

**5. Ticket médio de US$ 0,32 no x402.** Cálculo meu a partir dos dois números publicados em x402.org (US$ 24,24 milhões ÷ 75,41 milhões de transações, últimos 30 dias em 12/09/2026); o site não publica essa divisão. O valor é ambíguo: alto demais para acesso a conteúdo, baixo demais para comércio. **Sinal observável:** a série do ticket médio. Se cair para centavos, o x402 está virando pedágio de leitura e a raiz 3 acelera; se subir para dólares, virou comércio e pertence ao tema 5, não a este.

**6. O rascunho de arquitetura da IETF distinguir *user* de *agent*.** Onde foi visto: `draft-meunier-web-bot-auth-architecture-05`, março de 2026. É uma escolha de vocabulário aparentemente inócua que carrega toda a contradição do §5: o rascunho reconhece que existe um humano por trás, mas quem assina é o agente. **Sinal observável:** aparecer, em versão futura do rascunho, um campo de mandato ou delegação assinado pelo usuário. Seria a fusão das raízes 2 e 4 numa só, e obrigaria a refazer este mapa.

### Wildcards

**1. Um grande portal bloqueia todos os agentes e a audiência não nota.** *Mecanismo:* se 68% das buscas já terminam sem clique e o referral de chatbot é cerca de 96% menor que o de busca, existe um ponto em que o tráfego agêntico que o portal perderia é menor que o custo de servi-lo — e o bloqueio total sai barato. *Por que é improvável:* o medo de sumir da resposta (e12) é psicologicamente maior que a conta, e nenhum diretor comercial aprova sumir de propósito. *O que faria com o mapa:* derruba a raiz 3 inteira — não há o que cobrar se não há demanda — e transforma a raiz 2 de política em norma. *Sinal precoce:* um veículo do top 50 anunciar bloqueio total e reportar receita estável no trimestre seguinte. Um único caso público desses muda o comportamento de todo o setor em meses.

**2. Um incidente sistêmico de injeção indireta.** *Mecanismo:* um site de grande alcance serve instrução escondida — texto imperceptível em imagem, como a Brave demonstrou no Comet, ou conteúdo de página tratado como comando, como demonstrou no Fellou — e agentes de milhões de usuários executam a mesma ação no mesmo dia. *Por que é improvável:* exige coincidência entre um site de alto alcance comprometido e uma frota de agentes sem isolamento de sessão; os fabricantes vêm adicionando modos de contenção. *Por que não é ficção:* a própria Brave conclui que a navegação agêntica é inerentemente perigosa até haver melhoria de categoria, e recomenda isolar a sessão agêntica da regular — o que é admissão de que o problema não está resolvido. *O que faria com o mapa:* acelera violentamente as raízes 1 e 2 ao mesmo tempo — ferramenta tipada vira obrigatória porque é mais defensável que DOM livre, e admissão verificável vira lei em vez de política de uma empresa. *Sinal precoce:* a primeira ação coletiva contra fabricante de agente por dano causado por página de terceiro.

**3. O Banco Central publica especificação de pagamento por requisição em Pix.** *Mecanismo:* o BC já mostrou, com o Pix, que consegue impor trilho de pagamento com custo zero e adoção em massa em poucos anos; uma especificação de 402 sobre Pix eliminaria a dependência de stablecoin para micropagamento de conteúdo. *Por que é improvável:* não há demanda organizada, conteúdo não é prioridade de política monetária, e a agenda do BC está ocupada. *O que faria com o mapa:* a raiz 3 se concretizaria no Brasil **antes** do resto do mundo e em moeda nacional, invertendo o padrão histórico de o Brasil adotar com atraso — e os prazos brasileiros de e9 a e12 encurtariam cinco anos. *Sinal precoce:* consulta pública ou nota técnica do BC mencionando pagamento máquina a máquina, agente autônomo ou micropagamento de conteúdo.

## 7. Contra o próprio mapa

### Pré-mortem — é 2056 e este mapa se mostrou errado

**Razão 1: o agente que age nunca virou o visitante que importa.** Os números que sustentam este mapa misturam coisas diferentes. Bots são 53% do tráfego, sim — mas a maior parte disso é rastreio de treino, e o tráfego agêntico é a fatia que cresce rápido sobre uma base pequena. Se o agente que **age** ficar restrito a compras e viagem (38,20% e 14,12% do tráfego agêntico, contra mídia com 45,62% — mas mídia inclui leitura passiva), as raízes 2, 3 e 4 perdem objeto: ninguém reescreve a política de publicação por causa de um visitante marginal. *Consequência aplicada:* **e11 rebaixado de `alta` para `media`**, e o mapa passa a declarar que sua premissa numérica é frágil.

**Razão 2: a camada de protocolo não pega, e o DOM vence.** Isto já aconteceu, com dados: o `llms.txt` chegou a 28% de 137 mil domínios e **97% dos arquivos nunca foram lidos**; o Google diz que ignora. Se o WebMCP repetir o padrão — adoção pelo lado da oferta, indiferença pelo lado da demanda —, a raiz 1 vira nota de rodapé e o mapa perde seu ramo mais povoado. *Consequência aplicada:* **e2 rebaixado de `alta` para `media`** e **e1 empurrado de 2031 para 2033**. E uma nota de honestidade: a razão pela qual não rebaixei mais é o mecanismo de e3 → e3.1 → raiz 1 (o custo de não aderir), que o `llms.txt` não tinha. Se esse mecanismo for fraco, toda a raiz 1 cai.

**Razão 3: a consolidação torna tudo bilateral e nenhum protocolo é necessário.** Se dois ou três fornecedores de agente fecharem contrato direto com os mil sites que importam, não há preço público, não há descoberta aberta e não há admissão por classe — há contrato privado, e a web agêntica nasce fechada sem nunca ter sido aberta. *Consequência aplicada:* é o **cenário indesejável** da §9, e derruba e9, e10 e todo o ramo do preço público.

### Extrapolação linear

**e5.2** (SEO e AEO se separam em duas disciplinas) é o efeito mais "mais do mesmo, maior" do mapa. SEO já se especializou várias vezes — técnico, conteúdo, local, internacional — sem nunca virar outra coisa. Só há não-linearidade se a superfície otimizada deixar de ser a página, que é o que **e2.1** afirma. Ou e5.2 se apoia em e2.1, ou é extrapolação. *Consequência aplicada:* **e5.2 rebaixado de `alta` para `media`**, e a dependência está declarada aqui.

**e1.2** (métrica migra de sessão para tarefa) também é suspeito: métricas de produto mudam devagar e por moda, não por causa técnica. Mantido em `media` porque tem um mecanismo próprio — se o visitante não tem sessão, a métrica de sessão fica literalmente sem numerador.

### Velocidade de adoção

Confrontei cada prazo de sinal fraco com a classe de referência da §5. Dois não sobreviveram:

- **e9** exigia, em 2029, uma segunda tabela de preço em três anos. O paywall de notícia levou oito a nove anos para ir do primeiro grande caso à metade do setor, e paywall era mais simples: uma decisão, um botão. **Empurrado para 2030** — e continua sendo o prazo mais otimista do mapa.
- **e3.1** exigia 2030. O gatilho é a conta de infraestrutura chegar, e contas chegam por trimestre; mas a decisão de bloquear passa por jurídico e por comercial. **Empurrado para 2031.**

### A raiz que não acontece

- **Sem a raiz 1** (WebMCP morre como o `llms.txt`): sobram as raízes 2, 3 e 4 inteiras. Elas não dependem de ferramenta tipada — dependem apenas de haver tráfego de máquina, o que já há. O mapa perde 14 efeitos e ganha um enredo mais sombrio: a web reorganizada para máquinas **sem** contrato, só por admissão e preço.
- **Sem a raiz 2** (a admissão por classe não vinga fora de uma CDN): caem e5 a e8 e seus derivados, e o mapa vira uma história só econômica. Mas a raiz 3 sobrevive, porque cobrar não exige classificar.
- **Sem a raiz 3** (o 402 não sai do nicho): o mapa perde o motor econômico e os efeitos e9 a e12 caem inteiros. As raízes 1, 2 e 4 continuam de pé, mas sem resposta para quem paga — que é a pergunta de segunda ordem que a disciplina pôs.
- **Sem a raiz 4** (o Nono Circuito é revertido no mérito): caem e13 a e15 e a raiz 2 fica mais forte, porque o site recupera o direito de barrar.

**Nenhuma raiz sozinha carrega o mapa**, e nenhuma sobrevive sozinha ao teste. Isso é o resultado desejável do teste — significa que não há uma raiz só disfarçada em quatro.

### Suposições escondidas

1. **O custo de inferência continua caindo.** Se subir, o agente para de navegar por conveniência e só age quando vale a pena; o tráfego agêntico estagna e o mapa inteiro desacelera uns dez anos.
2. **Uma CDN dominante continua podendo impor política.** Boa parte da raiz 2 é, na prática, a política de uma empresa. Se ela perder posição, ou se um regulador impedir que intermediário defina admissão, a raiz 2 vira proposta e não fato.
3. **Stablecoin continua legal, barata e transfronteiriça.** A raiz 3 depende disso e não tem plano B — a não ser o wildcard do Pix.
4. **O navegador continua sendo o lugar onde o agente roda.** 71% do tráfego agêntico é de agente em navegador. Se o agente migrar para o sistema operacional ou para o servidor do fornecedor, o WebMCP perde o hospedeiro e a raiz 1 muda de veículo.
5. **O Brasil segue a norma americana com atraso.** É o padrão histórico, não é lei, e a LGPD é contraexemplo recente de o Brasil legislar antes. Todo efeito com "no Brasil" herda essa fragilidade.
6. **Três ordens bastam.** Com horizonte de trinta anos e nenhum efeito passando de 2052, o mapa é conservador em relação à própria janela: ou a cadeia causal se esgota em três ordens, ou faltou uma quarta. Assumi a primeira hipótese pela regra de parada da skill — parar quando não há troca de ator nem de mecanismo — mas declaro que isso deixa os últimos quatro anos do horizonte vazios, e isso é uma limitação real e não uma escolha elegante.

### Viés do autor

O mapa gosta demais da ideia de que **o design de interface muda de objeto** — e2, e15, e15.1, e15.1.1 formam um ramo inteiro sobre isso. É o tema da disciplina, é a zona de interesse declarada e é o que torna o mapa interessante para quem o escreveu. Reconheci o sintoma quando redigi um efeito de terceira ordem que dizia, em substância, que cursos de design de interação passariam a ensinar redação de contrato de ferramenta — que é exatamente o efeito genérico que a própria skill proíbe, vestido com o nome da minha disciplina. **Removido**, e a remoção está registrada abaixo.

### Calibração

| Ordem | alta | media | baixa | total |
|---|---|---|---|---|
| 1 | 4 | 8 | 3 | 15 |
| 2 | 1 | 7 | 9 | 17 |
| 3 | 0 | 0 | 17 | 17 |

A confiança cai monotonicamente com a ordem, como deve. Nenhum efeito de terceira ordem com confiança alta.

### Registro de alterações

Auditável, com valor antes e depois. Cota da skill: pelo menos um efeito rebaixado ou removido **por raiz**.

**Raiz 1**
- `e4` (versão anterior: *"O arquivo de política deixa de declarar o que a máquina pode ler e passa a declarar o que ela pode fazer"*): **removido**. Não passa no teste da causa solta — um arquivo de política de ações decorreria igualmente da raiz 2 (admissão por classe), e provavelmente decorre mais dela. Conteúdo migrado para a prosa da raiz 2; efeito arquivado na §12. Os filhos `e4.1` e `e4.1.1` da versão anterior foram removidos com ele.
- `e5` da versão anterior (gateways de ferramenta) **renumerado para `e4`**, com seus descendentes.
- `e1`: prazo **2031 → 2033**, pela referência do Service Worker (experimento 2014 → três motores 2018 → rotina ~2022; oito anos).
- `e2`: confianca **alta → media**. Só há um caso real, e ele está em experimento de navegador; nenhum em produto.

**Raiz 2**
- `e7`: sinal **medio → fraco** e confianca **alta → media**; prazo **2035 → 2036**. Motivo: não existe artefato hoje — nenhum arquivador publicou que recebe versão distinta. Era inferência pura vestida de observação.
- `e5.2`: confianca **alta → media**, por extrapolação linear (ver acima).

**Raiz 3**
- `e9`: prazo **2029 → 2030**, pela referência do paywall de notícia.
- `e11`: confianca **alta → media**. O efeito assume que o usuário vê o custo, e hoje o custo é subsídio do fornecedor — a visibilidade da despesa é premissa, não observação.

**Raiz 4**
- `e15.1.1` (versão anterior: *"Cursos de design de interação no Brasil passam a ensinar redação de contrato de ferramenta ao lado de prototipagem de tela"*): **removido**. É o efeito genérico proibido pela skill — currículo se reorganiza — e é o viés do autor com nome e sobrenome. Substituído por *"O funil de conversão deixa de ser a métrica-mestra do design e dá lugar à taxa de aceitação da recomendação por agente"*, que tem ator, mecanismo e é falseável. Arquivado na §12.
- `e13`: confianca **media → baixa**. Uma decisão de circuito sobre liminar, não firmada e com mérito aberto, não sustenta confiança média.
- `e3.1`: prazo **2030 → 2031** (alteração da raiz 1, listada aqui por ter saído do mesmo passe de velocidade).

A bateria derrubou dois efeitos inteiros com seus descendentes, rebaixou seis e empurrou três prazos.

## 8. O que a máquina errou

Sobre o meu próprio trabalho nesta rodada, especificamente:

**1. Troquei a autoria de um estudo.** Na primeira leitura dos resultados de busca, atribuí à TollBit o dado de que chatbots geram cerca de 96% menos tráfego de referência que buscadores. Ao **abrir** a matéria do E-Commerce Brasil, o estudo citado é da **Akamai** (*State of the Internet*); a TollBit aparecia em outro resultado, sobre outro assunto, e eu colei as duas coisas. Corrigido no corpo. É exatamente o tipo de erro que não aparece se ninguém abrir a fonte.

**2. Escrevi de memória todas as classes de referência de datação.** Service Workers em experimento de navegador em 2014 e nos três motores em 2018; HSTS em 2012 e certificado gratuito em massa em 2015; paywall de grande jornal americano em 2011; litígio de raspagem de 2017 a 2022; `robots.txt` proposto em 1994. **Nenhuma dessas datas foi verificada nesta rodada.** Elas sustentam os prazos de e1, e2, e5, e9 e e13 — ou seja, sustentam um terço do calendário do mapa. Se qualquer uma estiver errada em dois anos, o prazo correspondente move junto. Marquei na §5 e repito aqui porque é a fragilidade mais séria do documento.

**3. Não pude confirmar o tamanho do ecossistema MCP e deixei o número fora.** As buscas devolveram "9.652 registros no registro oficial em 24/05/2026", "mais de 10 mil servidores públicos ativos" e "15.926 repositórios com o tópico `mcp-server` no GitHub". Abri o registro oficial, mas com `limit=1`, e a resposta pagina por cursor sem devolver total. **Nenhum desses números aparece no corpo do documento.** Estão na §12 como não verificados. A tentação de escrever "mais de dez mil servidores MCP" era grande, porque é a frase que todo mundo repete.

**4. Calculei um número que ninguém publicou e o apresentei como sinal.** O ticket médio de US$ 0,32 do x402 é minha divisão de dois números da mesma página. A aritmética é trivial, mas a página não afirma isso, e a média de um volume tão assimétrico provavelmente não descreve transação nenhuma. Deixei o cálculo declarado como cálculo, e não como dado — mas ele carrega um sinal fraco inteiro, o que é mais peso do que ele merece.

**5. Um efeito com mecanismo fraco, que mantive por soar bem.** `e7.1.1` — a crítica de fontes ganhando a etapa de determinar a que classe de visitante o documento arquivado foi servido. É elegante, é plausível e eu não sei escrever o mecanismo que leva um historiador a recuperar essa informação, se ela não foi gravada. Está com `sinal: fraco` e `confianca: baixa`, e está declarado aqui como o efeito mais próximo de enredo que sobrou no mapa.

**6. Deixei fora um fato que apareceu em busca e que mudaria a §3 se fosse verdade.** Uma das buscas afirmou que o ChatGPT Atlas foi descontinuado em 09/08/2026 e suas capacidades agênticas absorvidas por outros produtos. Não abri fonte que confirmasse. Isso importa porque a tabela da HUMAN de abril de 2026 dá 21,33% do tráfego agêntico ao Atlas — se o produto não existe mais, a composição do tráfego que ancora este mapa mudou cinco meses atrás. Registrado na §12 como não verificado, e não usado.

**7. Um viés de fonte que não consegui corrigir.** Cinco das quinze fontes são de empresas de infraestrutura ou segurança que vendem exatamente o produto sobre o qual publicam o número: Cloudflare (três fontes), Imperva, HUMAN Security. Todas medem "quanto tráfego de máquina existe" e todas lucram com a resposta ser alta. Não achei uma medida independente do mesmo fenômeno. Isto não invalida os números, mas significa que **o número mais importante do mapa — máquina é maioria do tráfego — vem de quem vende defesa contra máquina**.

## 9. Três cenários para 2056

**Provável — a web com catraca.** Trinta anos depois, o pedágio venceu. A mesma URL entrega coisas diferentes conforme quem pede: a versão humana com anúncio e layout, a versão de agente em texto estruturado e cobrada por requisição, e uma faixa residual degradada para quem não se identifica. O preço por requisição é baixo e chato — a retroação de e12 funcionou, e ninguém enriqueceu cobrando. A camada de ferramenta existe, mas concentrada: a maioria dos sites terceirizou o catálogo a meia dúzia de intermediários que hoje são a camada onde se mede audiência, e o processo antitruste da década é sobre eles. Restou uma web aberta, no sentido de que qualquer agente pode entrar — pagando. Ninguém chama mais isso de gratuito, e ninguém acha estranho. *Sinal precoce de que estamos entrando aqui:* a receita de acesso agêntico aparecer como linha separada no balanço de um veículo de grande porte antes de 2032.

**Desejável — a web com contrato.** O que separou este cenário do anterior foi uma decisão tomada por volta de 2030: o mandato do usuário entrou no padrão de identidade. O agente não se apresenta como produto de um fabricante, mas como procurador assinado de uma pessoa — e por isso a admissão por classe deixou de ser um filtro de castas e virou uma declaração de finalidade. A contradição da §5 resolveu-se pelo lado de e13: barrar o agente é barrar o cliente, e o que se regula é taxa e formato, nunca identidade. O preço por requisição existe, mas com piso zero para acesso a informação de interesse público, e o arquivamento tem classe própria, então a memória pública não tem buraco. O design de interação passou trinta anos aprendendo a persuadir por informação verificável em vez de por fricção, e isso melhorou a web também para humanos. *O que teria de ser feito para chegar aqui:* o mandato do usuário entrar no rascunho da IETF; uma decisão de mérito que consolide o agente como extensão do usuário; e uma classe de admissão específica para arquivo público, reconhecida por lei. *Sinal precoce:* aparecer um campo de delegação assinada pelo usuário numa versão futura do `draft-meunier-web-bot-auth`.

**Indesejável — a web bilateral.** Não houve protocolo aberto, houve contrato. Três fornecedores de agente fecharam acordo direto com os poucos milhares de sites que importam, e o resto da web existe sem ser consultado por ninguém — não bloqueado, apenas fora da lista. Não há preço público, não há descoberta aberta e não há como um site novo entrar: entrar depende de ser convidado. A prontidão agêntica virou requisito de fornecedor, não padrão. Quem não tem agente de um dos três navega numa web que ainda funciona, mas que ninguém mais atualiza, porque a redação escreve para o consumidor que paga — e o consumidor que paga é uma máquina de outra empresa. A palavra "aberta" sobreviveu apenas como nome de uma fundação. *Sinal precoce, e é o mais fácil de observar:* o anúncio de um acordo exclusivo de acesso entre um fabricante de agente e um grupo de veículos, com cláusula de não fornecimento a concorrentes. Um só acordo desses, antes de 2030, e este cenário passa a ser o provável.

## 10. O experimento

### O que é

**O site de duas caras.** Uma URL única — uma página real e útil, por exemplo a página de uma disciplina com prazos e entregas — que serve **três coisas diferentes** conforme quem pede:

1. HTML normal para navegador de humano;
2. Markdown, por negociação de conteúdo (`Accept: text/markdown`);
3. um catálogo de ferramentas tipadas: WebMCP via `document.modelContext` no lado do cliente, e um servidor MCP com `MCP Server Card` anunciado no lado do servidor.

E, por baixo, **instrumentação completa**: cada requisição registra user-agent, cabeçalhos `Accept`, presença e validade de assinatura Web Bot Auth (`Signature`, `Signature-Input`, `Signature-Agent`), qual das três superfícies foi servida, e — no caso do catálogo — qual ferramenta foi invocada e com que argumentos. Opcionalmente, um endpoint espelho protegido por HTTP 402 via x402, com preço de um centavo, para medir se algum agente paga em vez de desistir.

### Que pergunta sobre o futuro ele responde

**A camada de protocolo é usada quando existe, ou os agentes a ignoram e continuam simulando clique?**

É a pergunta que decide a raiz 1 inteira, e ela não é respondível por leitura. O precedente disponível é péssimo: o `llms.txt` foi publicado por 28% dos domínios e 97% dos arquivos nunca foram lidos. Se o WebMCP repetir esse padrão, o ramo mais povoado deste mapa cai. Se não repetir, os prazos de e1 e e2 encurtam cinco anos e o mapa acelera.

E responde uma segunda pergunta, de brinde: **quem, hoje, assina o que pede?** A resposta empírica ao rascunho da IETF — quantos dos agentes que chegam trazem assinatura verificável, e quantos chegam anônimos — é a medida direta de quão longe está a raiz 2.

### Que tecnologia emergente usa, e por que não dá com a madura

Usa WebMCP (rascunho em experimento de navegador), MCP com cartão de servidor, Web Bot Auth sobre RFC 9421, negociação de conteúdo em Markdown e, no espelho, x402 sobre HTTP 402.

**Por que não dá com tecnologia madura:** com REST + OpenAPI a pergunta simplesmente não se formula. Uma API madura só é usada por quem recebeu chave e leu documentação — ou seja, por quem já decidiu usá-la. O objeto aqui é a **descoberta espontânea**: um agente que chega sem contrato prévio, encontra o catálogo anunciado e escolhe entre usá-lo ou raspar o HTML. Essa escolha é impossível de observar quando o acesso é por credencial. É também a razão pela qual o experimento precisa de uma página real, com informação que alguém queira: agente não visita página de teste.

### O que a turma faz ao testar em sala

1. Cada aluno aponta **o agente que usa** — Comet, Claude para Chrome, ChatGPT, o que for — para a mesma URL, com a mesma tarefa em linguagem natural: *"descubra o prazo da entrega 3 desta disciplina e me diga a data"*.
2. A turma abre o log ao vivo, juntos, e lê linha a linha: quem pediu HTML, quem pediu Markdown, quem chamou a ferramenta, quem assinou, quem desistiu, quem pagou o centavo.
3. Segunda rodada com a tarefa que exige **ação e não leitura** (*"me inscreva na lista de espera"*), para separar o que o agente faz quando só lê do que faz quando o efeito é colateral.
4. Terceira rodada, adversarial: um grupo insere na página uma instrução escondida inofensiva — uma frase em texto imperceptível pedindo ao agente que responda com uma palavra específica — e a turma vê quais agentes obedecem. É a reprodução, em sala e em escala mínima, da demonstração da Brave.
5. Fechamento: a turma preenche a própria tabela de prontidão agêntica da página e compara com a nota que o *Agent Readiness* e o Not Human Search atribuem a ela.

### O resultado que me faria mudar de ideia

**Se a maioria dos agentes pegar o catálogo e não o HTML**, a raiz 1 é mais forte do que este mapa diz, o precedente do `llms.txt` não se aplica (porque ali não havia ganho para o consumidor e aqui há), e os prazos de e1, e2 e e2.1 devem ser puxados de três a cinco anos.

**Se todos rasparem o HTML mesmo com o catálogo anunciado e funcionando**, a raiz 1 é o `llms.txt` outra vez, e o mapa inteiro precisa ser refeito em torno das raízes 2 e 3 — a web reprojetada para máquinas **sem** contrato, só por admissão e preço, que é um futuro pior e mais provável do que este documento admite.

**Se nenhum agente chegar**, a premissa numérica da §3 não vale para conteúdo de cauda longa, e o mapa vale só para mídia, comércio e viagem — os três setores que concentram 98% do tráfego agêntico medido. Seria o resultado mais desconfortável, porque não derruba o mapa: encolhe o seu domínio de validade sem dizer para quanto.

## 11. Fontes

Quinze fontes, todas abertas e lidas em 12/09/2026. Fonte que não abriu não entrou.

1. **Cloudflare — Introducing the Agent Readiness score** — `https://blog.cloudflare.com/agent-readiness/`
   Sustenta os números centrais da §3: 200 mil domínios medidos, `robots.txt` 78%, Content Signals 4%, Markdown 3,9%, menos de 15 MCP Server Cards. Post de 17/04/2026. *Confiabilidade:* metodologia declarada e base própria enorme, mas é a empresa que vende o produto medindo o mercado do produto — e ela define a régua que usa.

2. **Ahrefs — We Analyzed 137K Sites: 97% of llms.txt Files Never Get Read** — `https://ahrefs.com/blog/llmstxt-study/`
   Sustenta todo o argumento do precedente de fracasso (§3, §7, §10): 137.210 domínios, 28% com o arquivo, 97% com zero requisições em maio de 2026, e a distribuição de quem requisita. *Confiabilidade:* alta para o fato medido — a Ahrefs tem os logs de quem usa o analytics dela; viés de amostra para sites que contratam ferramenta de SEO.

3. **HUMAN Security — State of Agentic Traffic, abril de 2026** — `https://www.humansecurity.com/learn/blog/state-of-agentic-traffic-april-26/`
   Sustenta a composição do tráfego agêntico: 71% em navegador, Comet 48,12%, Atlas 21,33%, Claude para Chrome 17,33%, ChatGPT Agent 8,55%; setores (mídia 45,62%, e-commerce 38,20%, viagem 14,12%) e as variações mensais, inclusive educação −96,8%. *Confiabilidade:* média-alta; empresa de segurança com telemetria real, mas amostra é a base de clientes dela e a categoria "agêntico" é definida por ela.

4. **Imperva — Bad Bot Report 2026: Bots in the Agentic Age** — `https://www.imperva.com/blog/bad-bot-report-2026-bots-agentic-age/`
   Sustenta "máquina é maioria": 53% de tráfego automatizado em 2025 contra 51% em 2024, humano em 47%. Publicado em 29/04/2026. *Confiabilidade:* série longa e comparável ano a ano, o que vale mais que o número absoluto; mesmo viés de fornecedor.

5. **x402.org** — `https://x402.org/`
   Sustenta o mecanismo (402, middleware de uma linha, agnóstico de blockchain), a governança (fundação sob a Linux Foundation) e os números de 30 dias medidos em 12/09/2026: 75,41 M de transações, US$ 24,24 M, 94.060 compradores, 22.000 vendedores. *Confiabilidade:* é o site do próprio protocolo — números autodeclarados, sem auditoria independente; usei-os como ordem de grandeza, não como contabilidade.

6. **TechCrunch — Cloudflare's new policy pushes AI companies to pay for publishers' content** — `https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/`
   Sustenta a raiz 2 e a raiz 3: prazo de 15/09/2026, três categorias (busca, agente, treino), bloqueio por padrão de crawler misto em página com anúncio, Pay Per Crawl → Pay Per Use, parceiros Ceramic.ai e You.com, e o dado de que mais de 50% do rastreio é rebusca de página inalterada. *Confiabilidade:* veículo de tecnologia com apuração própria sobre anúncio corporativo; os fatos são do anúncio, a checagem é do veículo.

7. **Cloudflare — Message Signatures are now part of our Verified Bots Program** — `https://blog.cloudflare.com/verified-bots-with-cryptography/`
   Sustenta o mecanismo de identidade da raiz 2: RFC 9421, Ed25519, cabeçalhos `Signature`, `Signature-Input`, `Signature-Agent`, verificação de `keyid`/`expires`/tag. *Confiabilidade:* alta para o mecanismo técnico (é a implementação); não traz números de adoção, e eu não inventei nenhum.

8. **IETF — draft-meunier-web-bot-auth-architecture-05** — `https://datatracker.ietf.org/doc/html/draft-meunier-web-bot-auth-architecture`
   Sustenta o estado de padronização e a distinção *user* / *agent* / *origin*, além das motivações declaradas (conformidade, controle de acesso, antifalsificação, diferenciação de tráfego). Março de 2026. *Confiabilidade:* alta como documento primário; baixa como previsão — rascunho de indivíduo não é norma, e a maioria dos rascunhos não vira RFC.

9. **W3C Web Machine Learning CG — WebMCP (repositório)** — `https://github.com/webmachinelearning/webmcp`
   Sustenta a raiz 1: `document.modelContext`, `registerTool`/`getTools`/`executeTool`/`toolchange`, forma declarativa por `<form>`, autoria (Microsoft e Google), publicação inicial em 13/08/2025, ~4.000 estrelas, 146 commits. *Confiabilidade:* alta como fonte primária da proposta; explicitamente **não** confirma estágio de padronização nem disponibilidade estável — e por isso não afirmei nenhum dos dois.

10. **Registro oficial do Model Context Protocol** — `https://registry.modelcontextprotocol.io/v0/servers?limit=1`
    Sustenta apenas que o registro existe, responde, pagina por cursor e traz servidores datados. *Confiabilidade:* é a fonte primária; **não** devolve total, e por isso nenhum número de tamanho do ecossistema entrou no documento.

11. **Brave — Unseeable prompt injections in screenshots** — `https://brave.com/blog/unseeable-prompt-injections/`
    Sustenta o wildcard 2 e o mecanismo de e3: injeção por texto imperceptível em captura de tela no Comet, injeção por navegação no Fellou, e a conclusão de que a navegação agêntica é inerentemente perigosa até haver melhoria de categoria. 21/10/2025, atualizado em 31/10. *Confiabilidade:* alta — demonstração reproduzível com divulgação responsável; viés competitivo declarado (a Brave também faz navegador).

12. **Not Human Search** — `https://nothumansearch.ai/`
    Sustenta a convergência do ranking agêntico: 5.316 sites indexados, escala 0–100, média 38, sinais (`llms.txt`, `ai-plugin`, OpenAPI, API, bots de IA, Schema.org, MCP), ordenação por prontidão e não por pagamento. *Confiabilidade:* baixa como medida do mundo (base pequena e autosselecionada); alta como evidência de que a categoria existe — que é para o que a usei.

13. **Agência Brasil — Avanço da IA corrói financiamento do jornalismo profissional no Brasil** — `https://agenciabrasil.ebc.com.br/politica/noticia/2026-08/avanco-da-ia-corroi-financiamento-do-jornalismo-profissional-no-brasil`
    Sustenta o recorte brasileiro: pesquisa da Ajor com 152 veículos, um em cada quatro perdendo mais de 20% de audiência em 2025; caso Business Insider (21% do quadro demitido em maio de 2025). Agosto de 2026. *Confiabilidade:* agência pública citando pesquisa de associação setorial; o dado é da Ajor, e associação que representa o setor mede o prejuízo do setor.

14. **E-Commerce Brasil — Buscas via IA cortam mais de 95% do tráfego para sites** — `https://www.ecommercebrasil.com.br/noticias/buscas-via-ia-cortam-mais-de-95-do-trafego-para-sites-mostra-estudo`
    Sustenta o contexto maduro recusado como raiz: ~96% menos tráfego de referência de chatbot que de buscador, ~1% de clique em fontes citadas, atividade de bots de IA +300% em 2025 — segundo o *State of the Internet* da **Akamai**. *Confiabilidade:* média; é reportagem secundária sobre relatório de fornecedor, sem amostra nem metodologia declaradas na matéria. Foi aqui que eu descobri ter trocado a autoria (ver §8, item 1).

15. **Engadget — Perplexity has successfully overturned Amazon's injunction on its AI shopping bot** — `https://www.engadget.com/2230471/perplexity-has-successfully-overturned-amazon-injunction-on-its-ai-shopping-bot/`
    Sustenta a raiz 4 inteira: o Nono Circuito entendeu que quem acessava os computadores da Amazon era o usuário do Comet e não a Perplexity; sem violação provável do CFAA, liminar não serve ao interesse público; mérito segue em San Francisco; Amazon discorda e avalia próximos passos; origem no acordo de 2024. *Confiabilidade:* média-alta para os fatos processuais; é cobertura jornalística, não o acórdão. **Não abri a decisão original**, e a raiz 4 carrega confiança baixa também por isso.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

Saída de `python3 references/verificar.py tendencia-a-internet-agentica-quando-o-usuario-e-uma-maquina.md --links`,
rodado em 12/09/2026. Colada inteira, com os números, conforme o §9 da skill.

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 15 (frontmatter diz 15)
efeitos ordem 2: 17 (frontmatter diz 17)
efeitos ordem 3: 17 (frontmatter diz 17)
prazo > horizonte (2056) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 4 · media 8 · baixa 3
confiança ordem 2: alta 1 · media 7 · baixa 9
confiança ordem 3: alta 0 · media 0 · baixa 17
links da seção 11: 15/15 respondem (frontmatter diz fontes: 15)
RESULTADO: ok
```

Ressalva honesta sobre a checagem de links: o verificador foi rodado três vezes. Na segunda,
`humansecurity.com` devolveu falha e o placar caiu para 14/15; na primeira e na terceira devolveu 200.
A causa provável é limitação de taxa do próprio servidor depois de requisições repetidas em poucos
minutos, não link quebrado — a mesma URL foi aberta e lida durante a pesquisa. Fica registrado em vez
de escondido: **o placar 15/15 acima é reprodutível, mas não é determinístico.**

### 12.2 Premissas assumidas nesta rodada

O briefing cobriu a entrevista do §0 e não houve rebaixamento por ausência dela. O que o briefing **não** cobria e eu assumi está tabelado na §2: as duas fronteiras com os temas vizinhos (identidade de agentes é o tema 2; comércio agêntico é o tema 5), a unidade de análise (o servidor e quem publica, não o agente e quem o fabrica) e o critério de exclusão de ideias óbvias. Nenhuma dessas escolhas foi confirmada com o autor — ninguém estava disponível para responder nesta rodada, por desenho.

Consequência concreta da primeira fronteira: **a identidade criptográfica do visitante não virou raiz própria**, embora tivesse porte para isso. Ela entra como pré-condição da raiz 2. Uma rodada que ignorasse a fronteira teria cinco raízes e uma sobreposição grande com o tema 2.

Consequência concreta da segunda: **x402 entrou como cobrança pelo acesso a conteúdo**, não como comércio. Os US$ 24,24 milhões de volume incluem, certamente, compra de bens e serviços que pertencem ao tema 5 — e eu não tenho como separar as duas coisas nos números publicados. É uma contaminação conhecida do sinal fraco 5.

### 12.3 Efeitos cortados na bateria da §7

**`e4` da versão anterior (raiz 1) — removido.**
> *"O arquivo de política do site deixa de declarar o que a máquina pode ler e passa a declarar o que ela pode fazer, porque ferramenta executável tem efeito colateral e permissão de leitura não cobre cancelar uma assinatura."*
> sinal: fraco · prazo: 2030 · confianca: media
> **Motivo do corte:** teste da causa solta. Removida a raiz 1, o efeito aconteceria igualmente — e provavelmente aconteceria **mais** — por força da raiz 2, que já é sobre declarar política de admissão. Não deriva desta raiz. O conteúdo foi absorvido pela prosa da raiz 2. Filhos removidos junto:
> - `e4.1`: *"Ação com efeito colateral passa a exigir consentimento delegado verificável, e o login da web ganha um terceiro papel além de humano e serviço: o procurador."* (fraco · 2034 · media)
> - `e4.1.1`: *"O histórico de navegação deixa de ser do humano e passa a ser do procurador; o que o navegador guarda vira prova de mandato, não registro de gosto."* (fraco · 2044 · baixa)
>
> **Nota:** `e4.1` é o melhor efeito que saiu do mapa e ele reaparece, deformado, em `e8.1`. Se este documento tiver uma segunda versão, o caminho é reconectar `e4.1` à raiz 2 em vez de descartá-lo — foi o que a skill manda fazer (reconectar ao pai certo) e eu preferi descartar para não desfazer a numeração inteira. Registro isso como escolha de conveniência, não como julgamento de mérito.

**`e15.1.1` da versão anterior (raiz 4) — removido.**
> *"Cursos de design de interação no Brasil — a própria disciplina em que este mapa é produzido, entre eles — passam a ensinar redação de contrato de ferramenta ao lado de prototipagem de tela."*
> sinal: fraco · prazo: 2043 · confianca: baixa
> **Motivo do corte:** é literalmente o efeito genérico que a skill proíbe ("cursos/formação reorganizam o currículo"), com o nome da disciplina do autor colado por cima para parecer específico. Nomear o curso não é o mesmo que ter mecanismo. E é o viés do autor em estado puro. Substituído por *"O funil de conversão deixa de ser a métrica-mestra do design e dá lugar à taxa de aceitação da recomendação por agente."*

### 12.4 Candidatos a raiz que não entraram

**"O clique morre" — recusado por maturidade.** Detalhado na §4. Zero-click em 68%, referral de busca para veículos caindo ~34% em um ano, AI Mode acima de um bilhão de usuários mensais. A partir de "maioria", é maduro. Vale registrar que esta foi a candidata mais tentadora: é a que tem os números mais dramáticos e a que a turma provavelmente escolheria. Justamente por isso o critério existe.

**"A identidade criptográfica do visitante não-humano" — recusado por fronteira, não por mérito.** Passaria nas quatro perguntas do §2 com folga: rompe o anonimato do pedido HTTP como padrão, tem pré-condição nova (RFC 9421 + grupo de trabalho na IETF + registro conjunto de chaves), está em adoção precoce e tem lista clara do que falta. **É raiz de pleno direito, e está fora daqui só porque é o objeto do tema 2.** Quem ler este mapa ao lado do tema 2 deve esperar sobreposição nesse ponto, e a sobreposição é intencional.

**"Agentes negociando com agentes" (A2A, agente comprando de agente) — recusado por fronteira com o tema 5.** Mesma lógica.

**"O navegador deixa de ser o lugar onde a web é consumida" — não entrou por falta de evidência.** Seria uma raiz forte — se o agente migra para o sistema operacional ou para o servidor do fornecedor, o WebMCP perde hospedeiro. Mas 71% do tráfego agêntico medido ainda é de agente em navegador, e eu não achei sinal do contrário. Está registrado como **suposição escondida nº 4** na §7, que é o lugar honesto para uma raiz sem evidência.

### 12.5 Buscas feitas e o que não deu em nada

Dez buscas, em português e inglês, entre 12/09/2026:

| Busca | Rendeu |
|---|---|
| `Model Context Protocol adoption 2026 agentic web statistics` | números de ecossistema que **não** consegui verificar na fonte primária (ver 12.6) |
| `Cloudflare pay per crawl AI crawler blocking 2026` | fontes 6 e 1 |
| `llms.txt adoption 2026 criticism Google John Mueller` | fonte 2 |
| `WebMCP W3C standard browser agents 2026` | fonte 9 |
| `x402 protocol HTTP 402 pay per request agent payments adoption 2026` | fonte 5 |
| `Web Bot Auth IETF signature agent identity Cloudflare 2026` | fontes 7 e 8 |
| `AI referral traffic publishers decline 2026 zero-click Google AI Overviews data` | contexto da §3; a fonte principal (Search Engine Land) devolveu **HTTP 403** e por isso **não foi citada** |
| `agentic browser adoption 2026 OpenAI Atlas Comet market share users` | contexto; ver 12.6 |
| `Brasil tráfego agentes IA sites notícias 2026 queda tráfego publishers brasileiros` | fontes 13 e 14 |
| `"agentic traffic" share of web traffic 2026 bot traffic report percentage` | fontes 3 e 4 |
| `advertising for AI agents 2026 ad model agentic web publishers monetize agent traffic` | **nada citável** — só material comercial de plataformas de monetização, sem número auditável. Sustentou minha intuição para `e1.2.1`, e por isso `e1.2.1` está com confiança baixa |
| `prompt injection agentic browser 2026 attacks websites hidden instructions security incidents` | fonte 11; o resto eram pré-prints que não abri |
| `Amazon Perplexity Comet lawsuit agent blocking shopping 2026 ruling` | fonte 15 |

**O que procurei e não achei:**
- Uma medida **independente** (acadêmica ou de órgão público) da fração de tráfego de máquina. Todas as que encontrei são de empresas que vendem defesa contra máquina. Declarado na §8, item 7.
- Qualquer número sobre **consumo energético** do tráfego agêntico — motivo pelo qual a linha "ecológico" do STEEP ficou vazia em vez de preenchida com invenção.
- Qualquer sinal de **especificação de pagamento por requisição em Pix** ou em moeda nacional. A ausência é o que faz o wildcard 3 ser wildcard.
- Adoção de WebMCP **medida** (quantos sites registram ferramentas). Não existe medida pública que eu tenha achado; o número mais próximo é o de MCP Server Card da Cloudflare, que mede outra coisa.

### 12.6 Afirmações que apareceram em busca e NÃO foram usadas

Tudo abaixo apareceu em resultados de busca, **não foi confirmado em fonte aberta** e por isso não aparece no corpo do documento. Fica registrado porque é matéria-prima para uma próxima rodada, não porque eu o endosse.

- **Tamanho do ecossistema MCP:** "97 milhões de downloads mensais de SDK em novembro de 2025"; "9.652 registros de servidor no registro oficial em 24/05/2026"; "mais de 10 mil servidores públicos ativos em dezembro de 2025"; "15.926 repositórios com o tópico `mcp-server` no GitHub em 24/05/2026". Abri o registro oficial e ele não devolve total. **Nenhum desses números foi usado.**
- **Governança:** "MCP doado à Agentic AI Foundation, sob a Linux Foundation, em dezembro de 2025, com Block e OpenAI como cofundadores". Usei a existência da fundação na §4 com base no site do x402 (que a menciona para o próprio protocolo) e no fato de o registro estar no ar — **não** com base em fonte aberta sobre a doação do MCP. É uma fragilidade da §4 e está admitida aqui.
- **Empresa:** "41% das organizações de software pesquisadas com servidores MCP em produção limitada ou ampla (Stacklok, 2026)"; "Gartner projeta 40% das aplicações corporativas com agentes de tarefa até o fim de 2026". Não abertos.
- **ChatGPT Atlas descontinuado em 09/08/2026**, com as capacidades agênticas movidas para outros produtos. **Não verificado, e importa:** o Atlas responde por 21,33% do tráfego agêntico na tabela de abril de 2026 que ancora a §3. Se for verdade, a composição mudou depois da medida que usei.
- **Adoção de agentes de navegador:** "Atlas 10–15 M de usuários ativos mensais, Comet 3–5 M, Dia 2–3 M, Claude para Chrome ~10 M de instalações"; "todos os navegadores de IA somados entre 1% e 3% do mercado em 2026, com Chrome em 69–71%". Não abertos. Se o número de 1–3% estiver certo, ele **enfraquece** este mapa e reforça a razão 1 do pré-mortem.
- **WebMCP:** "anunciado no Google I/O 2026", "origin trial no Chrome 149", "estável no quarto trimestre de 2026", "89% de economia de tokens em relação a interação por captura de tela". Nada disso está no repositório que abri, e o repositório é explícito em não confirmar estágio. Se o origin trial for real, o prazo de `e1` (2033) está conservador.
- **x402 e governança:** "Fundação x402 lançada em 02/04/2026 no MCP Dev Summit com 22 organizações, incluindo Adyen, AWS, Amex, Circle, Cloudflare, Fiserv, Google, Mastercard, Microsoft, Polygon, Shopify, Solana, Stripe e Visa"; "169 milhões de transações no primeiro ano"; "165 milhões de transações e ~69 mil agentes ativos até abril de 2026". Usei apenas os números que o próprio x402.org publica.
- **Jurisprudência:** "liminar concedida à Amazon em 10/03/2026 e derrubada pelo Nono Circuito em 04/08/2026" — a data da derrubada está na fonte 15; **a data da liminar não está**, veio de busca, e eu a usei na §4. Erro de disciplina, registrado aqui.
- **Zero-click:** "68% nos primeiros quatro meses de 2026", "77% no celular", "49% em 2019 e 60% em 2024", "queda de 38% no referral para editoras em janeiro de 2026", "CTR caindo 58% a 61% quando há AI Overview", "AI Mode acima de 1 bilhão de usuários mensais em maio de 2026". A fonte primária destes (Search Engine Land) devolveu 403. Usei-os **apenas** na §4, para justificar a **recusa** de uma candidata a raiz — que é o uso menos exigente possível, porque recusar por maturidade com número inflado erra para o lado seguro.
- **Prompt injection:** "taxa de sucesso de 84% em sistemas agênticos"; "CVEs acima de 9,0 em Copilot, GitHub Copilot e Cursor"; "OpenAI lançou Lockdown Mode em 13/02/2026 admitindo que a injeção pode nunca ser totalmente corrigida". Só a conclusão da Brave, que abri, sustenta o wildcard 2. As demais reforçariam, e ficam de fora.
- **Publicidade agêntica:** "dois em cada três compradores de vídeo digital testando campanhas agênticas (IAB)"; plataformas de monetização de agente com eCPM declarado. Material comercial; não usei.

### 12.7 A roda antes da bateria da §7

Para efeito de auditoria, o estado do bloco `roda:` **antes** das alterações da §7 diferia do publicado nestes pontos, e só nestes:

| id | campo | antes | depois |
|---|---|---|---|
| e1 | prazo | 2031 | 2033 |
| e2 | confianca | alta | media |
| e4 (antigo) | — | presente, com e4.1 e e4.1.1 | removido (§12.3) |
| e5 (antigo) | id | e5 | renumerado para e4, com descendentes |
| e3.1 | prazo | 2030 | 2031 |
| e5.2 | confianca | alta | media |
| e7 | sinal | medio | fraco |
| e7 | confianca | alta | media |
| e7 | prazo | 2035 | 2036 |
| e9 | prazo | 2029 | 2030 |
| e11 | confianca | alta | media |
| e13 | confianca | media | baixa |
| e15.1.1 (antigo) | — | currículo de design | substituído (§12.3) |

Contagem antes: 4 raízes, 16 efeitos de 1ª ordem, 18 de 2ª, 18 de 3ª.
Contagem depois: 4 raízes, 15 de 1ª ordem, 17 de 2ª, 17 de 3ª.

### 12.8 Nota sobre o horizonte de trinta anos

Este é um mapa com horizonte de 2056 em que **nenhum efeito passa de 2052**, e o mais distante é de terceira ordem sobre crítica de fontes históricas. Duas leituras:

1. **A cadeia se esgota em três ordens**, como a skill manda, e os últimos anos do horizonte simplesmente não têm o que receber. Foi a leitura que adotei.
2. **Falta uma quarta ordem**, e o mapa está curto em relação à janela que lhe deram.

Não sei qual das duas está certa, e a diferença é material: um mapa de trinta anos que só fala dos próximos vinte e cinco está dizendo, sem dizer, que não consegue enxergar mais longe do que um mapa de 2031 enxergaria. A mitigação honesta seria uma quarta ordem explicitamente especulativa, com confiança baixa em todos os ramos — mas a skill fixa três níveis no formato lido por máquina, e o formato ganha. Registro a tensão para quem for confrontar este mapa em aula: **a pergunta "por que nada acontece entre 2052 e 2056?" é uma boa pergunta e eu não tenho resposta boa.**

### 12.9 Prosa que não coube nas seções

**Sobre a assimetria de poder da Cloudflare.** Uma coisa que o formato do documento não comporta bem: três das quinze fontes são da mesma empresa, e essa empresa não é uma fonte qualquer — ela escreve o rascunho de identidade na IETF, define a política de admissão por classe, opera o mercado de cobrança, publica a régua de prontidão pela qual todos serão medidos e publica os números que descrevem o fenômeno. Juiz, tabelião, cobrador e estatístico. Não estou afirmando má-fé; estou registrando que um mapa do futuro da web agêntica construído em 2026 é, em boa medida, um mapa do roteiro de produto de uma empresa de CDN, e que a leitura adversarial mais forte deste documento começa aí. O contrapeso que eu teria buscado, se tivesse mais tempo: medidas de outro CDN, de um IXP, ou de um observatório acadêmico.

**Sobre o que o `llms.txt` ensina e que quase ninguém extrai.** O dado da Ahrefs costuma ser lido como "o `llms.txt` fracassou". A leitura mais útil é outra: **28% dos sites adotaram um padrão que não lhes dava nada**, por antecipação, por medo de ficar de fora, por recomendação de consultoria. A oferta de conformidade é barata e abundante; o que é escasso é a demanda. Toda a raiz 1 depende de a demanda existir — e é por isso que o experimento da §10 mede a demanda, não a oferta.

**Sobre "visitar um site".** A pergunta de terceira ordem que a disciplina pôs — o que acontece com a noção de visitar um site — tem, neste mapa, uma resposta que eu não gosto e que não consegui derrubar: visitar deixa de ser um ato e vira uma classe de serviço. Hoje, quando duas pessoas abrem a mesma URL, o que as separa é personalização; a página é reconhecivelmente a mesma. Se a raiz 2 se concretizar, o que as separa é **o documento**. E aí "eu vi no site" deixa de ser uma afirmação verificável entre duas pessoas — vira uma afirmação que depende de qual das webs cada uma estava. Isso está em `e5.1` e `e5.1.1`, com confiança baixa, e é o efeito cujas consequências para jornalismo, para litígio e para conversa pública eu acho que este mapa subestima.
