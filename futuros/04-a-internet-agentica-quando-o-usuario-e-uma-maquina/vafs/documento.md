---
tema: "A internet agêntica: quando o usuário é uma máquina"
slug: a-internet-agentica-quando-o-usuario-e-uma-maquina
autor_login: vafs
zona_de_interesse: Agentes
data: 2026-09-11
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 16
tecnologias_citadas: [Model Context Protocol, llms.txt, Web Bot Auth, HTTP 402, pay-per-crawl, x402, RSL (Really Simple Licensing), Content Signals, Markdown for Agents, Agent Readiness score, Not Human Search, robots.txt, Agentic Commerce Protocol, AP2, Composio, Open Finance Brasil, Pix]
fontes: 15
confianca: media
experimento: "Dois leitores, um site — o mesmo conteúdo publicado em página e em superfície de máquina, com porta que cobra, assina e registra"
skill_usada: futurizacao-vafs
publico_ok: false
---

## 1. Resumo

A web foi construída para olhos. Está sendo reequipada para programas, e a reequipagem já
saiu do papel: a Cloudflare mede a "prontidão agêntica" dos 200 mil domínios mais visitados
desde abril de 2026, cobra por requisição de máquina com HTTP 402 desde julho de 2025, e a
partir de 15 de setembro de 2026 bloqueia por padrão, em domínios novos, crawlers de treino e
de agente em páginas com anúncio. O que este mapa sustenta é que a mudança não é de interface,
é de **unidade de publicação**: o objeto que um site coloca no ar deixa de ser um documento
renderizado e passa a ser uma capacidade chamável, com preço e identidade na porta. Disso
derivam três rupturas — o site publica capacidade e não página; o ranking passa a medir
chamabilidade e não relevância; e o acesso automatizado vira contrato explícito, matando o
`robots.txt` como instrumento de governança. O mapa também registra o que a evidência **não**
sustenta: o `llms.txt`, tratado como peça central da web agêntica, está em 10,13% dos domínios
e nenhum grande provedor confirma lê-lo; o x402 tem infraestrutura de bilhões e US$ 28 mil de
volume diário, metade dele artificial; e o tráfego agêntico caiu 4,3% em maio de 2026 enquanto
a taxa de bloqueio subia. A curva não é monotônica, e este mapa aposta que a reorganização
acontece pela camada de admissão e cobrança — não pela camada de formato.

## 2. O tema

O tema é a **web como plataforma sendo reprojetada para leitores que não são pessoas**. Não é
sobre agentes serem capazes (isso é pergunta de modelo), nem sobre agentes pagarem (isso é o
tema 5 da disciplina), nem sobre distinguir agente de humano por segurança (tema 2). É sobre o
que acontece com o **lado do publicador** quando o visitante principal de uma página é um
programa: o que se publica, em que formato, para quem se otimiza, e quem paga a conta.

A fronteira importa porque os três temas usam os mesmos artefatos por razões diferentes. O
`Web Bot Auth` aparece no tema 2 como mecanismo de detecção; aqui ele aparece porque **muda a
regra de admissão a um site**, e uma web em que a porta pergunta quem você é antes de servir é
outra web. O `HTTP 402` aparece no tema 5 como trilho de pagamento; aqui aparece porque
**cria preço público onde não havia preço**, e um preço muda o que vale a pena publicar.

Por que isto merece um mapa de futuro e não um levantamento de estado da arte: porque o
estado da arte é chato e curto. Hoje, quase nada disso está implantado — 3,9% de negociação de
conteúdo em Markdown, menos de 15 sites com MCP Server Card entre os 200 mil maiores. Um
levantamento diria "ainda não aconteceu" e encerraria. O que é interessante aqui é
estritamente derivativo: **se** a unidade de publicação mudar, uma cadeia longa de coisas que
hoje parecem naturais — a métrica de audiência, o ofício de SEO, a página gratuita financiada
por anúncio, a ideia de "visitar um site" — perde o apoio. É exatamente o formato de pergunta
que uma roda dos futuros responde e um relatório de mercado não.

Onde encosta em mídia e interação: em três lugares diretos. **Interface** — desenhar para um
leitor sem olho é uma categoria de design que não tem vocabulário nem crítica estabelecida.
**Audiência** — a métrica que sustenta o financiamento de mídia (a visita) deixa de ter
referente único. **Narrativa** — conteúdo pago por requisição de máquina tem incentivo
estrutural para ser denso e sem prosa, e prosa é o que mídia faz.

## 3. Onde isso está hoje

### O que já existe, funciona e é maduro

`robots.txt` está em 78% dos 200 mil domínios mais visitados, medido pela Cloudflare em abril
de 2026 — e a própria Cloudflare observa que a maioria dessas regras mira buscadores, não
agentes. APIs REST documentadas, OpenAPI, SDKs e scraping são a forma padrão de uma máquina
consumir um site há mais de uma década. Dados estruturados via Schema.org idem. **Nada disso
entra como disrupção-raiz** (ver o registro do teste na seção 12); entra aqui, como o chão de
onde o resto parte.

O Model Context Protocol, dentro do fluxo de desenvolvimento, também já é maduro nesse sentido
restrito: é a opção padrão para conectar um assistente de código a ferramentas. A
especificação de 28 de julho de 2026 reescreveu o protocolo como *stateless* — derrubou o
handshake `initialize`/`initialized` e os IDs de sessão, moveu método e nome de ferramenta
para cabeçalhos HTTP (`Mcp-Method`, `Mcp-Name`) para que gateways roteiem sem ler o corpo
JSON, e adicionou `ttlMs`/`cacheScope` em listas de ferramentas. Essa é a assinatura técnica
de um protocolo saindo do laptop e indo para trás de balanceador de carga — isto é, de
protocolo de plugin para protocolo de infraestrutura pública.

### O que existe e ainda não funciona

A **camada de publicação para máquina é minúscula e medida**. Em 17 de abril de 2026 a
Cloudflare lançou o *Agent Readiness score* — quatro dimensões (descoberta, conteúdo, controle
de acesso de bot, capacidades) — e publicou o levantamento nos 200 mil domínios mais visitados:
apenas **4%** declaram preferência de uso de IA via Content Signals, **3,9%** suportam
negociação de conteúdo em Markdown, e **menos de 15 sites** expõem MCP Server Card ou API
Catalog. Não é adoção incipiente; é praticamente zero, com régua já instalada.

O `llms.txt` é o caso mais instrutivo, e vai na direção contrária do que a descrição do tema
supõe. Estudo da SE Ranking sobre cerca de 300 mil domínios encontrou **10,13%** de adoção — e,
contra a intuição, adoção *menor* entre sites de alto tráfego (8,27%) que entre os de tráfego
médio (10,54%). Nenhum grande provedor confirma consumir o arquivo em produção: Google declara
explicitamente que nenhum sistema de Busca o lê, Perplexity e OpenAI documentam apenas
`robots.txt`, e a Anthropic o referencia para fluxo de documentação de desenvolvedor, não para
citação. O achado mais duro é estatístico: no modelo da SE Ranking, **remover a variável
`llms.txt` melhorou a acurácia da predição de citação** — o arquivo entra como ruído, não como
sinal.

O **pagamento por requisição** está na mesma condição: trilho pronto, demanda ausente. A
Cloudflare lançou o *pay per crawl* em 1º de julho de 2025, com cabeçalhos `crawler-price` e
`crawler-charged` na resposta e `crawler-max-price`/`crawler-exact-price` no pedido, e
autenticação por Web Bot Auth (par de chaves Ed25519, chave pública em JWK, assinatura de
mensagem HTTP em cada requisição). Em 23 de setembro de 2025 anunciou com a Coinbase a x402
Foundation, integrando x402 ao Agents SDK e a servidores MCP. Mas em março de 2026 o x402
processava cerca de **US$ 28 mil por dia** em ~131 mil transações (ticket médio ~US$ 0,20)
contra um ecossistema avaliado em ~US$ 7 bilhões — e a Artemis estima que **metade das
transações observadas é artificial** (auto-negociação e *wash trading*). O contraste de ordem
de grandeza é o dado, não a nota de rodapé.

### Quem está construindo, e o que já mudou de fato

O ator que mais move a agulha não é fabricante de agente: é **infraestrutura de rede**. Em 1º
de julho de 2026 a Cloudflare parou de tratar "IA" como categoria única e passou a classificar
por comportamento declarado — **Search** (coleta e indexa para responder depois), **Agent**
(age em tempo real em nome de alguém), **Training** (coleta para treinar ou ajustar modelo) —
e definiu que, **a partir de 15 de setembro de 2026**, domínios novos e clientes do plano
gratuito passam a bloquear *Training* e *Agent* por padrão em páginas que exibem anúncio,
mantendo *Search* liberado. Isto é uma mudança de default, não um produto: decide a economia
de uma camada inteira sem que nenhum publicador tenha que agir.

Do lado do licenciamento, em 10 de setembro de 2025 nasceu o **RSL (Really Simple Licensing)**
— protocolo aberto derivado do RSS que embute termos de licença e royalty no próprio
`robots.txt` — com Reddit, Yahoo, People Inc., Ziff Davis, O'Reilly, Medium, wikiHow, Quora,
Fastly e Raptive, além de uma entidade de gestão coletiva (RSL Collective). O RSL prevê
explicitamente *pay-per-crawl* e *pay-per-inference*, e é essa segunda modalidade que rompe
com o modelo de tráfego: cobra pelo uso do conteúdo **na resposta**, não pelo acesso a ele.

Do lado da identidade, o `Web Bot Auth` é uma proposta no IETF (Thibault Meunier, Cloudflare;
Sandor Major, Google) para que agentes assinem criptograficamente suas requisições. Vale
registrar o estado real: a versão 05 da arquitetura, de 2 de março de 2026, é submissão
individual, "sem status formal no processo de padronização do IETF", e já foi substituída por
outro rascunho. A camada de identidade da web agêntica hoje **é a implementação de um
fornecedor**, não um padrão.

Do lado da descoberta, existe o embrião de um ranking novo. O **Not Human Search** indexa —
medido em 11/09/2026, no próprio site — **5.315 sites**, pontuados de 0 a 100 em sinais como
`llms.txt`, `ai-plugin.json`, OpenAPI, Schema.org e presença de servidor MCP, com **média 38**.
Declara que o rank orgânico é por prontidão e nunca por pagamento. É o PageRank da era agêntica
em estado de protótipo — e é significativo que a Cloudflare tenha lançado a sua própria régua
equivalente meses depois.

### O tráfego, que é o que decide

Quase 80% do rastreamento de bots de IA era para **treino**, com ação em nome de usuário e
finalidade não declarada somando menos de 5% (Cloudflare, agosto de 2025). As razões
rastreio-por-referência medidas na mesma época eram brutais: Anthropic 50.000:1, OpenAI 887:1,
Perplexity 118:1 no agregado — e bem melhores em Notícias (2.500:1, 152:1, 32,7:1), porque
leitor de notícia clica para conferir. Em 2026 essas razões caíram uma ordem de grandeza (ver
a divergência registrada na seção 8), mas a assimetria estrutural permanece: quem opera treino
consome muito e devolve pouco, porque a superfície de consumo não tem link para devolver.

E o agente que navega recuou. Em maio de 2026 o tráfego agêntico total **caiu 4,3%** frente a
abril, com Comet em 47% de participação (−6,8% em volume absoluto), Atlas em 20,3% (−9,2%) e a
extensão do Claude para Chrome subindo para 18,6%; a taxa de bloqueio subiu de 8,2% para quase
9%. A OpenAI anunciou a aposentadoria do Atlas em 9 de julho de 2026, com o navegador autônomo
parando em 9 de agosto. Qualquer mapa que trate a navegação agêntica como curva ascendente
limpa está ignorando o dado disponível.

### A nota sobre o Brasil

O Brasil não aparece nos levantamentos de prontidão agêntica nem nas medições de tráfego de
agente por país que consegui abrir. Aparece, e de forma relevante, pelo **outro lado do
problema**: o país tem trilho de pagamento contínuo (Pix) e camada de dados consentida
padronizada (Open Finance Brasil), com suporte transacional a Pix imediato, agendado e
automático. Em análise publicada em 11 de setembro de 2026, a própria Associação Open Finance
Brasil coloca o limite com precisão: o arcabouço atual sustenta apenas "graus iniciais e
intermediários de autonomia", porque **a representação da autoridade do agente** — identidade,
mandato, delegação, responsabilização — continua em aberto. É uma inversão interessante do
quadro global: aqui o pagamento agêntico chega antes do conteúdo agêntico.

## 4. As disrupções-raiz

Cada candidata abaixo passou pelos três testes da skill, por escrito. As rejeitadas — e são
mais numerosas que as aceitas — estão registradas na seção 12 com o motivo.

### D1 — O site publica capacidade, não página

**O que rompe.** A unidade de publicação. Desde 1993 o que um site coloca no ar é um documento
para ser renderizado; o resto (API, feed, sitemap) é acessório. A ruptura é a superfície de
máquina virar a **canônica** onde o tráfego agêntico é maior — o site publica um conjunto de
capacidades chamáveis e verifica-se que a página é uma renderização entre outras, não a coisa.

**Teste 1 (madura?).** Não. 3,9% dos 200 mil maiores domínios fazem negociação de conteúdo em
Markdown; menos de 15 expõem MCP Server Card. Não é padrão em nenhum fluxo em escala do lado
do publicador.

**Teste 2 (emergente?).** Sim. Existe fora do laboratório: a especificação MCP de 28/07/2026
foi reescrita para operar atrás de balanceador de carga, os quatro SDKs Tier 1 acompanham, e
Composio, ACI.dev e Klavis são negócios construídos sobre agregação de ferramentas. A curva de
capacidade sobe; a adoção é *early adopter*.

**Teste 3 (disruptiva?).** Sim, e dá para nomear o perdedor. Deixa de fazer sentido: **a
página como unidade de medida de audiência** (e, com ela, a impressão publicitária); **o layout
como lugar onde se decide o que o leitor vê primeiro**; e **a integração ponto a ponto** como
categoria de projeto — se toda capacidade é publicada uma vez e composta por quem chama, o
trabalho de construir um conector por parceiro perde a razão de existir. Não é "fica mais
barato integrar": é um tipo de entregável que some.

**Por que agora e não há cinco anos.** Em 2021 não havia consumidor genérico de capacidade:
uma API só era útil para quem escrevesse código contra ela. O que mudou foi o consumidor —
um modelo que lê a descrição da ferramenta e decide chamá-la sem que ninguém programe a
chamada. Isso torna barato publicar para um chamador desconhecido, o que antes era
irracional.

**O que ainda falta.** Um motivo econômico. Hoje publicar superfície de máquina custa e não
paga — é por isso que a adoção está em 3,9%. Falta que a chamada de máquina seja
**mensurável e faturável** (o que D3 endereça) ou que a invisibilidade agêntica passe a doer
o bastante (o que D2 endereça). D1 sozinha não se sustenta, e isso é uma fragilidade do mapa,
não um detalhe.

### D2 — A descoberta e o ranking deixam de ser feitos para humanos

**O que rompe.** O critério de ordenação da web. O PageRank ordena documentos por relevância
inferida para uma pergunta humana. A régua que está nascendo ordena sites por **chamabilidade**
— se tem contrato declarado, se o conteúdo é negociável em formato de máquina, se há
capacidade exposta, se a política de bot é legível. São dois eixos diferentes, e o segundo é
verificável por sonda automática, não estimado por modelo.

**Teste 1 (madura?).** Não. As duas réguas existentes são recentes e minúsculas: o Agent
Readiness da Cloudflare é de 17/04/2026 e o próprio levantamento que a acompanha mostra que
quase ninguém pontua; o Not Human Search indexa 5.315 sites com média 38/100.

**Teste 2 (emergente?).** Sim. Está em produção (a pontuação da Cloudflare entrou no URL
Scanner e no Radar), há tooling comercial em volta, e a indústria de busca já nomeou a
disciplina correspondente (AEO). Não é padrão em nenhum fluxo em escala.

**Teste 3 (disruptiva?).** Sim. Deixa de fazer sentido **a página de resultados** como
artefato, quando o consumidor da ordenação nunca a vê; e deixa de fazer sentido **o produto
da agência de SEO de conteúdo** — texto otimizado para um leitor que agora é um parser. O ator
nomeável ameaçado é a cadeia de otimização editorial. Atenção ao contra-argumento, que é
forte: pode ser só melhoria, "SEO com outros sinais". O que faz passar no teste é o
deslocamento de **quem** publica a régua: na era da busca, quem media (Google) não era quem
transportava (a CDN). Agora é o mesmo ator.

**Por que agora.** Porque o intermediário virou default. A queda de referência de busca — cerca
de 60% das buscas sem clique, e queda relatada de 38% no tráfego de referência do Google para
publicadores — significa que, para uma fatia crescente de consultas, o ranking já não é lido
por gente. Uma régua feita para leitores humanos ordenando para leitores que não existem mais
é o que cria o vácuo.

**O que ainda falta.** Que alguma régua vire consenso. Hoje há várias (Cloudflare, Not Human
Search, meia dúzia de checadores comerciais) sem acordo sobre o que pontuar — e o `llms.txt`,
o sinal que todas medem, é o que a evidência mostra ser inerte. Uma régua que pontua
principalmente ruído não vira PageRank.

### D3 — O acesso de máquina vira contrato explícito: preço e identidade na porta

**O que rompe.** O pedido HTTP anônimo e gratuito por default, e com ele o `robots.txt` como
mecanismo de governança. Um arquivo de texto que pede educadamente não sustenta cobrança nem
contrato; assinatura criptográfica e resposta 402 sustentam. A ruptura é a porta passar a
perguntar **quem é você, para que, e a que preço** antes de servir bytes.

**Teste 1 (madura?).** Não. O *pay per crawl* existe desde 01/07/2025 e a rede emite mais de 1
bilhão de 402 por dia — mas emitir cobrança não é ser pago: o x402, o trilho correspondente,
move US$ 28 mil/dia, metade artificial. O Web Bot Auth é rascunho individual sem status formal
no IETF.

**Teste 2 (emergente?).** Sim, e é a mais bem sustentada das três. Está em produção numa rede
que atende fatia grande da web; a x402 Foundation reúne Coinbase, Cloudflare, Google e Visa; o
RSL tem adotantes nomeados desde 10/09/2025; e há uma data marcada — 15/09/2026 — em que o
default muda para milhões de domínios.

**Teste 3 (disruptiva?).** Sim, e é a ruptura mais funda das três. Deixa de fazer sentido **o
acordo implícito da web aberta**: conteúdo de graça em troca de atenção. Quando o leitor é uma
máquina que não vê anúncio, não forma marca e não volta, a atenção deixa de ter referente — e
a página gratuita financiada por publicidade perde a razão de existir na forma atual. Perdedor
nomeável: o publicador financiado por display, e o `robots.txt` como instituição.

**Por que agora.** Porque a assimetria virou número público. Enquanto rastreio e referência
andavam próximos, o acordo se sustentava sozinho. Razões da ordem de 50.000:1 tornam o acordo
indefensável — e foi a medição, mais que a tecnologia, que destravou a cobrança.

**O que ainda falta.** Duas coisas, e nenhuma é técnica. Primeiro, **demanda**: um preço sem
comprador é uma placa, e hoje é isso que o x402 é. Segundo, **identidade com padrão de
verdade**: enquanto Web Bot Auth for implementação de um fornecedor, "identidade de agente"
significa "registrado na Cloudflare", o que é uma resposta comercial para um problema de
infraestrutura pública.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O site publica capacidade, não página
    efeitos:
      - id: e1
        ordem: 1
        efeito: O site passa a manter duas superfícies do mesmo conteúdo, uma renderizada para pessoas e uma estruturada para máquinas, e a de máquina vira a canônica onde o tráfego agêntico é maior
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O custo de manter duas superfícies empurra a redação para um formato-fonte único, e o CMS deixa de gerenciar páginas para gerenciar fatos
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O desenho de página se estreita para os casos em que a experiência é o produto, e o resto do design migra para desenho de esquema e de contrato
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: O ensino de design de interação incorpora a interface que não é vista, uma categoria sem vocabulário nem crítica estabelecida hoje
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A métrica de audiência se parte em duas moedas incomparáveis, visita humana e chamada de máquina, porque uma chamada pode servir a mil pessoas ou a nenhuma
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A auditoria de circulação precisa de uma unidade nova de pessoa alcançada por intermédio, e sem ela o inventário publicitário passa a ser negociado por estimativa
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.2.2
                ordem: 3
                efeito: Contratos de conteúdo passam a ser precificados por uso a jusante em vez de por entrega, o que exige do comprador uma declaração de uso que ele não tem incentivo para dar
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Quem construía um conector por parceiro passa a publicar uma superfície só e deixar o agente compor, e integração deixa de ser projeto para virar configuração
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O valor competitivo migra da posse da integração para a posse do dado e da permissão, e quem detinha a cola entre sistemas perde posição
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Surge um mercado de intermediários de permissão que respondem se um agente pode agir em nome de alguém, e esse intermediário vira o ponto de captura de renda da cadeia
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Como a superfície de máquina é executável e não apenas legível, a descrição de uma ferramenta vira vetor de ataque e passa a exigir o mesmo rigor de revisão que código
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Publicar capacidade passa a exigir certificação de terceiro, e sites sem condição de pagar auditoria ficam fora do índice agêntico por custo e não por mérito
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A descoberta e o ranking deixam de ser feitos para humanos
    efeitos:
      - id: e3
        ordem: 1
        efeito: Nasce um ranking cujo critério é capacidade de ser chamado e não relevância para uma pergunta, e quem o publica é quem opera a infraestrutura e não quem opera a busca
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A indústria de SEO se bifurca entre otimizar para ser citado na resposta e fazer engenharia de interface de máquina, e a segunda metade é trabalho de desenvolvedor e não de redator
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A agência de marketing digital de porte médio cujo produto era conteúdo otimizado se funde com consultoria de integração ou desaparece
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Quem opera a rede passa a ser ao mesmo tempo o medidor, o porteiro e o cobrador da prontidão agêntica, acúmulo de papéis que a era da busca mantinha separados
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Reguladores de concorrência passam a tratar prontidão agêntica como mercado relevante, e a discussão de neutralidade sai da rede e vai para a camada de descoberta
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e3.2.2
                ordem: 3
                efeito: Um site fora das grandes CDNs vira invisível para agentes por omissão, não bloqueado mas não pontuado, e a web aberta perde alcance sem que ninguém tenha decidido excluí-la
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: O clique deixa de ser o evento que fecha a jornada e vira evento de verificação, com a pessoa indo ao site para conferir o que o agente disse e não para descobrir
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A página passa a ser projetada para provar e não para persuadir, com procedência, data e diferença em relação ao resumo do agente ocupando o lugar do argumento de venda
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Emerge um gênero editorial de página de verificação, escrita para quem chega já convencido e quer checar, competindo por orçamento com a página institucional
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Marcas passam a comprar presença dentro da resposta do agente em vez de espaço na página, e a negociação publicitária se desloca do site para o fabricante do agente
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: A separação entre conteúdo e publicidade deixa de ser visível porque não há superfície onde marcá-la, e a regulação passa a exigir declaração no protocolo em vez de no layout
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O acesso de máquina vira contrato explícito, com preço e identidade na porta
    efeitos:
      - id: e5
        ordem: 1
        efeito: O robots.txt deixa de ser o instrumento de governança do rastreamento porque um pedido educado não sustenta cobrança nem contrato, e o que sustenta é assinatura criptográfica com resposta 402
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O acesso automatizado passa a ser categorizado por finalidade declarada e a mentira sobre finalidade vira o principal ilícito do setor, não o acesso em si
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Auditoria de finalidade vira exigência contratual e depois regulatória, e surge o registro de uso a jusante como equivalente da rastreabilidade de cadeia de suprimentos
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Agente sem identidade verificável perde acesso à parte útil da web, o que concentra a capacidade de agir por máquina em quem consegue emitir e sustentar identidade
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Operar por agente credenciado passa a dar preço, disponibilidade e resposta que a navegação manual não alcança, e a assimetria deixa de ser de informação para ser de admissão
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e5.2.2
                ordem: 3
                efeito: Serviço público e conteúdo cívico precisam decidir por lei se atendem agentes de graça, e o acesso da máquina ao Estado vira política pública em vez de configuração de servidor
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Um preço por requisição passa a existir como número público para conteúdo que antes só tinha preço em contrato fechado, criando referência de mercado onde não havia nenhuma
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Pequenos produtores só conseguem cobrar coletivamente e a negociação migra para entidades de gestão coletiva, refazendo em poucos anos o arranjo que a música levou um século para montar
            sinal: medio
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A gestão coletiva de licenciamento de texto vira ator de poder comparável ao das editoras, com repasse opaco e distribuição por proxy de uso
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Conteúdo pago por requisição tende a ser produzido para consumo de máquina, denso e estruturado, e a prosa perde espaço onde a máquina é quem paga
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: A escrita para leitor humano vira linha separada e justificada à parte no orçamento editorial, deixando de ser o padrão para virar a exceção que precisa de defesa
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não consegue dizer

Três coisas importantes ficam de fora da estrutura YAML.

**Primeira: as três disrupções não são independentes, e o bloco as apresenta em paralelo.**
D1 não se sustenta sozinha — ninguém publica superfície de máquina por amor à engenharia. Ela
depende de D3 fornecer a razão econômica (chamada mensurável e faturável) ou de D2 fornecer a
punição (invisibilidade agêntica que dói). Se D3 falhar, D1 vira um caso de nicho de
documentação técnica, e metade dos efeitos de segunda ordem de e1 caem junto. A dependência é
assimétrica: D3 funciona sem D1, D1 não funciona sem D3.

**Segunda: os prazos são estimativas com precisão falsa.** Um `prazo: 2029` aqui significa "na
segunda metade da janela", não "em 2029". Mantive por exigência de formato. Onde o ano importa
de verdade é em um lugar só: 15 de setembro de 2026, que é data marcada e não estimativa.

**Terceira: o `sinal: forte` de e2 e e2.2 vem de evidência de natureza diferente do resto.**
São os dois únicos efeitos ancorados em coisa já medida e reproduzível (SDKs baixados em massa;
benchmark acadêmico com taxa de sucesso de ataque). Os demais "sinais" são leitura de
movimento de mercado, que é mais frágil. Um leitor apressado vai tratar `forte` como categoria
homogênea; não é.

## 6. Sinais fracos e wildcards

### Sinais fracos que mudariam o mapa

**O default de 15 de setembro de 2026.** Uma mudança de configuração padrão, para domínios
novos e clientes gratuitos, decidindo se páginas com anúncio servem agentes. Não é lei, não é
padrão, não passou por consulta pública — é o campo "default" de um formulário. Se esse
mecanismo se mostrar eficaz, a governança da web agêntica se decide em painéis de controle de
meia dúzia de empresas, e nenhum dos fóruns onde se espera que essa discussão aconteça
participa.

**O recuo do navegador agêntico.** Tráfego agêntico caindo 4,3% em maio de 2026, Atlas
aposentado em julho, Instant Checkout da ChatGPT descontinuado em março de 2026 depois de cerca
de uma dúzia de lojistas Shopify. A leitura mais simples é que o agente que *navega como
pessoa* é um beco, e que o caminho é o agente que *chama capacidade* — o que reforça D1. A
leitura oposta, igualmente disponível, é que agente nenhum funciona ainda. Não sei distinguir
as duas com o dado que tenho, e isso é um buraco no mapa.

**A `pay-per-inference` do RSL.** Cobrar pelo uso do conteúdo **na resposta**, e não pelo
acesso a ele, é conceitualmente outra coisa: exige que o comprador declare o que fez a
jusante. Se essa modalidade pegar, ela arrasta consigo um regime de auditoria que hoje não
existe em lugar nenhum da web. Quase ninguém está olhando para ela.

**O `llms.txt` como caso de fracasso documentado.** Um formato com dez por cento de adoção,
gerado por plugin, lido por quase ninguém, e cuja remoção *melhora* um modelo de predição de
citação. É o exemplo mais limpo que encontrei de artefato que existe porque é fácil de
produzir, não porque alguém do outro lado precisa dele. Serve de alerta para tudo o mais
neste mapa.

### Wildcards

**Um grande portal bloqueia todos os agentes e a audiência não nota.** Baixa probabilidade,
impacto alto e imediato: se o teste for feito publicamente e o resultado for "não mudou nada",
o poder de barganha vira do avesso — não é o publicador que precisa do agente, é o agente que
precisa do publicador. D3 acelera, D1 murcha, e o preço por requisição sobe uma ordem de
grandeza.

**Uma decisão judicial trata a leitura por máquina como reprodução.** Se a leitura de uma
página por um crawler for equiparada a cópia, o 402 deixa de ser preço e vira multa. Toda a
arquitetura de cobrança voluntária construída por Cloudflare, x402 e RSL passa a operar sob
regime de responsabilidade, não de mercado, e a resposta racional de quem publica passa a ser
bloquear por precaução.

**Um incidente público e caro de *tool poisoning*.** O MCPTox mostra que o vetor é real e o
material está no lugar: 45 servidores MCP reais, 353 ferramentas, taxa de sucesso de ataque de
72,8% contra o modelo mais vulnerável entre os 20 testados. Um incidente de escala visível
empurra as empresas de volta para servidores privados em lista de permissão, e a "web agêntica"
vira uma intranet de agentes — o que mata D2 inteira, porque não há o que ranquear numa rede
fechada.

**O Brasil chega ao comércio agêntico antes de ter conteúdo agêntico.** Pix e Open Finance
resolvem a metade do problema que o mundo não resolveu (pagar), enquanto a metade que o mundo
está resolvendo (publicar para máquina) aqui nem começou a ser medida. O desfecho estranho e
plausível é um mercado onde agentes **transacionam** bem e **leem** mal, otimizado por
integração bancária direta em vez de por web aberta.

**Ninguém compra.** O wildcard mais desconfortável é o cenário nulo: o x402 continua em
US$ 28 mil por dia em 2031, o pay-per-crawl segue emitindo um bilhão de 402 que ninguém paga,
e a web agêntica permanece uma camada de infraestrutura impecável sem economia em cima dela.
Não é improvável — é literalmente o estado medido hoje, projetado adiante.

## 7. Contra o próprio mapa

### Qual efeito é só extrapolação linear do presente

**e4** — "o clique vira evento de verificação". A queda de clique já está em curso e medida
(cerca de 60% das buscas sem clique, queda relatada de 38% no tráfego de referência do Google
para publicadores). Dizer que ela continua não é futurização, é régua. Por isso a confiança foi
rebaixada de `alta` para `media` na auditoria da fase 4, apesar do `sinal: forte` — sinal forte
e confiança média, aqui, significa exatamente "o movimento é inegável, o efeito é banal". O que
seria futurização de verdade é a **inversão de função** da página (e4.1), e essa está em
`fraco`/`baixa`, onde deve estar.

**e1.2** também merece a ressalva: a fragmentação de métrica de audiência é um processo que a
mídia digital já viveu duas vezes (impressão *versus* visualização, visualização *versus*
tempo de atenção). O efeito é real, mas o mapa o apresenta como novidade quando é recorrência.

### Qual efeito assume velocidade de adoção sem precedente

**e6.1** — a migração para gestão coletiva de licenciamento até 2029. Não há caso comparável em
que uma estrutura de direitos coletivos tenha se estabelecido em quatro ou cinco anos. O ECAD
brasileiro levou décadas; a ASCAP nasceu em 1914 e a disputa sobre repasse continua aberta um
século depois. O RSL Collective existe desde setembro de 2025 e tem adotantes nomeados, mas
"adotante que assinou o anúncio" e "entidade que arrecada e distribui" são coisas distintas por
uma margem enorme de trabalho institucional. A confiança de e6.1 foi rebaixada de `media` para
`baixa` por esta razão, e o efeito continua no mapa porque o mecanismo é narrável — o que ele
não tem é precedente de prazo.

**e5.2** tem um problema parecido em menor grau: assume que identidade verificável de agente
vira condição de acesso até 2029, com base numa proposta que hoje **não tem status formal no
IETF** e já foi substituída por outro rascunho. Padrão de identidade na internet costuma levar
mais de uma década do rascunho ao uso majoritário.

### Qual disrupção pode simplesmente não se concretizar

**D1, e é a mais frágil das três.** Se os modelos continuarem melhorando em ler a página
renderizada — ou os pixels dela — a razão para publicar uma segunda superfície desaparece. O
argumento "é mais barato em tokens" enfraquece a cada queda de preço de inferência, e o preço
de inferência só cai. Nesse caso, D1 fica restrita a documentação técnica e a APIs que já
existiam, e o mapa perde `e1` inteiro com seus seis descendentes — isto é, um terço dos efeitos.
O que sobra ainda é um mapa: D2 e D3 não dependem de D1. Mas seria um mapa sobre **cobrança e
admissão**, não sobre reprojeto da publicação — e aí o título do tema estaria errado.

Há um segundo modo de falha, menos discutido: **D3 se concretiza como bloqueio, não como
mercado.** É o desfecho para o qual os números apontam hoje (um bilhão de 402 por dia contra
US$ 28 mil de volume). Uma web que fecha a porta sem conseguir cobrar não é a web agêntica do
mapa; é a web de sempre, com menos acesso.

### Que viés entrou aqui

O viés pedido foi neutro, e a declaração honesta é que ele não foi alcançado em dois pontos
específicos.

**Viés de fonte.** Seis das quinze fontes lidas são da Cloudflare. A Cloudflare é ao mesmo
tempo o principal medidor, o principal vendedor e o principal beneficiário da tese de que a web
precisa de porteiro e caixa. Ela publica o número **e** o produto que o número justifica. Não
encontrei medição independente de prontidão agêntica em escala comparável — e essa ausência, em
vez de me deixar cético, me deixou dependente. É a fraqueza mais séria deste documento.

**Viés de infraestrutura sobre uso.** O mapa privilegia sistematicamente o que é fácil de medir
(cabeçalhos, arquivos, rascunhos de protocolo, taxas de bloqueio) sobre o que decide o desfecho
(se alguém quer isso). Uma roda construída a partir de protocolos vai concluir que protocolos
importam. Um mapa construído a partir de entrevistas com publicadores e leitores provavelmente
concluiria outra coisa, e não tenho como saber o quê.

**Viés de tema.** O tema foi atribuído, não escolhido — o que remove o viés de afeto que a
skill pergunta. Entra outro no lugar, porém: a descrição do tema chegou com termos, entidades e
perguntas já definidas (`llms.txt`, MCP, Not Human Search, x402, "AEO"), e essa lista funcionou
como pauta de busca. A prova está na seção 8: só descobri que o `llms.txt` é inerte porque fui
verificar um item **que a pauta me entregou como relevante**. O que a pauta não listou, eu não
procurei — e não sei o que é.

## 8. O que a máquina errou

### 1. Número certo, data errada, ordem de grandeza fora

Ao montar a seção 3 eu ia escrever que a razão rastreio-por-referência da Anthropic é de
**70.900:1**, como fato do presente. O número existe e é real — mas ao abrir o post original da
Cloudflare vi que ele se refere ao período de **19 a 26 de junho de 2025**, num texto publicado
em 1º de julho de 2025. Buscas por dados de 2026 devolvem valores uma ordem de grandeza
menores para o mesmo crawler (por volta de 2.237:1). Escrever "hoje a Anthropic rastreia 70.900
páginas para cada referência" seria falso por um fator de trinta, com uma fonte impecável
citada ao lado. Corrigi datando explicitamente cada número no texto.

### 2. Divergência que não consegui resolver, e por isso ficou fora

No mesmo post primário, a Mistral aparece em **0,1:1** — entre as menos extrativas. Fontes
secundárias de 2026 a colocam como **a mais extrativa da web**, em 3.389:1. É uma inversão
completa. Não consegui abrir uma fonte primária de 2026 que a confirmasse, e por isso **nenhum
dos dois números entrou no corpo do documento**. Fica aqui porque o registro da dúvida vale
mais que a escolha arbitrária entre dois números incompatíveis.

### 3. A premissa do tema que a evidência derrubou

A descrição do tema apresenta `llms.txt` como peça da reorganização em curso — "`llms.txt` em
vez de página". Eu ia aceitar isso e tratá-lo como parte da disrupção-raiz D1. Ao verificar,
achei o oposto: 10,13% de adoção em ~300 mil domínios, Google declarando explicitamente que
não o lê, nenhum grande provedor confirmando consumo em produção, e o modelo da SE Ranking
**melhorando** quando a variável é removida. O `llms.txt` foi **rejeitado** pelo teste da fase
2 e está registrado como tal na seção 12. Não é erro de alucinação; é erro de aceitar a
premissa do enunciado sem checar — que é o modo de falha mais provável quando o pedido já vem
com a lista de termos pronta.

### 4. Três números para a mesma coisa

Sobre o Not Human Search circulam três magnitudes: a descrição do tema diz "9.000+ ferramentas
e APIs"; o repositório no GitHub anuncia "8.000+ indexed sites"; o próprio site, aberto em
11/09/2026, mostra **5.315 sites** e média 38/100. Nenhuma das três é obviamente errada — podem
ser contagens de coisas diferentes em momentos diferentes. Usei a do site, por ser a única que
abri diretamente, e registro as outras duas. Um número que se repete em três lugares com três
valores é um número que ninguém conferiu.

### 5. Média inventável que não entrou

Uma fonte secundária atribui ao benchmark MCPTox uma "taxa média de sucesso de ataque de
36,5%". Ao abrir o PDF, não consegui extrair a média (o texto comprimido não rendeu o número);
o resumo no arXiv confirma **45 servidores MCP reais, 353 ferramentas, 1.312 casos maliciosos,
20 agentes LLM e 72,8% para o o1-mini**. Mantive apenas o que a fonte primária sustenta e
descartei a média. É o tipo de número redondo e específico que passa despercebido justamente
porque soa medido.

### 6. Fonte que não abriu, e por isso não existe

Duas páginas retornaram HTTP 403 e **não foram lidas**: o documento de segurança sobre MCP
hospedado em `media.defense.gov` (que teria sido a única fonte governamental do conjunto) e o
relatório *State of Agentic Traffic* da HUMAN Security. Os números de tráfego agêntico de maio
de 2026 que uso no documento vêm de uma reportagem que cita esse relatório, não do relatório —
e isso está dito na seção 11. Nenhuma das duas conta como fonte.

## 9. Três cenários para 2031

### Provável — "a web pedagiada e mal medida"

Em 2031 a web se dividiu, mas não em duas webs: em duas **portas** do mesmo prédio. A maioria
dos sites grandes ainda publica uma página só; o que mudou é que a porta agora pergunta quem
está batendo. Categorização por finalidade virou norma de fato porque foi entregue como default
por quem opera a rede, e a partir daí não teve volta. O pagamento por requisição funciona, mas
concentrado: umas poucas centenas de publicadores grandes fecharam acordos de valor alto, e o
preço por requisição do resto continua sendo uma placa que ninguém lê. Publicar superfície de
máquina é prática comum em documentação técnica, comércio e serviços financeiros — onde a
chamada rende dinheiro direto — e rara em tudo o mais. O SEO se partiu em dois ofícios, e a
metade técnica paga melhor. A métrica de audiência nunca se resolveu: convive-se com dois
números que não somam, e o mercado publicitário aprendeu a negociar por estimativa, como sempre
soube fazer quando perdeu a medição. A web aberta não morreu; ficou mais pobre e menos
encontrável, sobretudo fora das grandes CDNs, e quase ninguém notou porque o que se perdeu foi
alcance de sites que já eram pouco visitados.

### Desejável — "a porta é pública"

Em 2031 a identidade de agente é padrão real — saiu do rascunho individual e virou RFC, com
mais de uma implementação independente e verificação que não depende de estar registrado em
nenhuma empresa específica. A declaração de finalidade é auditável, e mentir sobre ela tem
consequência jurídica nomeada, não apenas contratual. O preço por requisição virou referência
pública comparável, o que permitiu que produtores pequenos se agrupassem e negociassem com
poder real, sem que a gestão coletiva repetisse a opacidade de repasse que a música arrastou o
século inteiro. O acesso cívico — serviço público, dado governamental, arquivo, biblioteca —
foi decidido por lei como gratuito e irrestrito para máquina, o que preservou um piso comum de
conhecimento fora do regime de pedágio. E a superfície de máquina virou obrigação de
acessibilidade, não privilégio de quem paga CDN: publicar de forma legível por programa passou
a ser tratado como se trata hoje texto alternativo em imagem. O que teria sido preciso para
chegar aqui: que a padronização de identidade saísse do controle de um fornecedor **antes** de
o default virar hábito — isto é, antes de setembro de 2026, o que já não aconteceu. O caminho
que resta é mais lento: recuperar por regulação o que não foi feito por padrão.

### Indesejável — "a web fechada que não conseguiu cobrar"

Em 2031 o bloqueio venceu e a cobrança não. A cadeia é direta: a demanda por conteúdo pago por
requisição nunca apareceu, os agentes passaram a trabalhar quase só sobre conteúdo licenciado
em contrato fechado entre poucas empresas, e os publicadores que não estavam nessa mesa
descobriram que fechar a porta era a única ação disponível. Resultado: o conteúdo que alimenta
os agentes vem de um punhado de fontes contratadas, e o restante da web ficou fora — não
censurado, apenas não lido. Ter agente virou estrato: quem opera por um agente credenciado
consegue preço, disponibilidade e atendimento que a navegação manual não alcança, e a
desigualdade deixou de ser de informação (que era corrigível lendo mais) para ser de admissão
(que não é corrigível por esforço). A escrita para leitor humano virou linha de orçamento que
precisa se justificar. **Os sinais precoces são três, todos observáveis antes de 2028:** taxa
de bloqueio de tráfego agêntico subindo enquanto o volume pago segue estagnado; acordos de
licenciamento bilaterais exclusivos sendo anunciados no lugar de adoção de protocolo aberto; e
a razão entre 402 emitidos e 402 efetivamente pagos continuando na ordem de grandeza em que
está hoje. Se os três estiverem presentes juntos, este é o cenário em curso.

## 10. O experimento

### O que é

**"Dois leitores, um site."** Um site pequeno e real — não maquete — publicado em duas
superfícies simultâneas do mesmo conteúdo, com a porta instrumentada:

1. **Superfície humana:** páginas HTML normais, com um anúncio (pode ser falso, mas tem que
   ocupar espaço e ser contabilizado), uma assinatura de autoria, uma data e uma correção
   publicada depois da primeira versão.
2. **Superfície de máquina:** negociação de conteúdo (`Accept: text/markdown`) devolvendo o
   mesmo conteúdo em formato estruturado, mais um servidor MCP mínimo expondo duas ou três
   capacidades chamáveis sobre o mesmo acervo.
3. **A porta:** um middleware que classifica cada requisição por finalidade declarada, exige
   assinatura de mensagem HTTP no estilo Web Bot Auth para conceder a superfície de máquina,
   devolve **402** com `crawler-price` para quem não apresentar intenção de pagamento, e
   **registra tudo**: quem pediu, o quê, com que assinatura, quanto custaria, e o que foi
   efetivamente entregue.

O produto do experimento não é o site — é o **log**, e um painel que mostre, lado a lado, o que
cada tipo de leitor viu, pagou e deixou de ver.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta central de D1, que é a disrupção mais frágil deste mapa: **a superfície de máquina
entrega alguma coisa que a página renderizada não entrega?** Se um agente cumpre a mesma tarefa
com a mesma qualidade lendo o HTML, então publicar duas superfícies é custo sem retorno, D1 não
se sustenta, e um terço da roda cai junto.

E uma pergunta de mídia que só aparece quando se mede: **o que o leitor de máquina
sistematicamente não vê?** O anúncio, a assinatura de autoria, a data, a correção. Essas quatro
coisas são o aparato de responsabilização do jornalismo, e a hipótese testável é que nenhuma
delas sobrevive à travessia para a superfície de máquina.

### Que tecnologia emergente usa, e por que não dá com tecnologia madura

Usa quatro coisas que só existem agora: **MCP** como forma de expor capacidade a um chamador
desconhecido; **negociação de conteúdo em Markdown para agentes**; **HTTP Message Signatures no
padrão Web Bot Auth** para identificar o chamador; e **402 com cabeçalhos de preço** para
precificar na porta.

Não dá para fazer com REST + chave de API, que é o maduro equivalente, por três razões
concretas. Uma API REST **não tem preço na porta**: o preço está no contrato que se assina
antes, fora do protocolo. Não tem **declaração de finalidade**: a chave diz quem é, nunca para
que veio, e é exatamente a finalidade que a Cloudflare passou a categorizar em julho de 2026.
E pressupõe **integração prévia** — alguém programou aquela chamada —, o que dissolve a
pergunta que interessa, porque a pergunta é o que acontece quando o chamador é desconhecido e
decide sozinho.

### O que a turma faz quando testar isso em sala

Cada pessoa aponta um agente diferente (Claude, ChatGPT, Gemini, um agente local, uma extensão
de navegador) para o mesmo site, com a **mesma tarefa**: por exemplo, "descubra qual é a versão
corrigida desta informação e diga quem assina". Enquanto isso, o painel projeta o log ao vivo.

Mede-se, para cada agente: se chegou a pedir a superfície de máquina ou só leu o HTML; se
assinou a requisição ou foi anônimo; quantas requisições fez e quanto teria pago; se viu a
correção; se atribuiu a autoria certa; e o que respondeu de errado. A discussão que isso abre
em sala é sobre mídia, não sobre protocolo: um agente que acerta a informação e erra a
procedência é útil ou é perigoso? Quem responde pelo erro — quem publicou, quem intermediou,
ou quem perguntou?

### O que seria um resultado que me faria mudar de ideia

Três resultados derrubam partes do mapa, e todos são possíveis nesta montagem.

- **Se os agentes cumprirem a tarefa igualmente bem contra o HTML puro**, ignorando a superfície
  de máquina ou tratando-a como equivalente, D1 está errada e deve sair como disrupção-raiz.
  Este é o resultado que eu mais espero encontrar, e o que mais me faria reescrever.
- **Se nenhum agente assinar a requisição** e todos contornarem a porta ou desistirem, então a
  camada de identidade não está em uso real, e `e5` precisa ser adiado de 2029 para além do
  horizonte — ou reescrito como bloqueio, não como contrato.
- **Se os agentes virem a correção e atribuírem a autoria corretamente**, a hipótese de que a
  superfície de máquina descarta o aparato de responsabilização é falsa, e `e4.1` e `e6.2`
  perdem o mecanismo.

## 11. Fontes

Quinze fontes abertas e lidas entre 10 e 11 de setembro de 2026. Duas outras foram tentadas e
retornaram HTTP 403 — estão registradas na seção 12 e **não** contam aqui.

1. **Cloudflare — "Introducing pay per crawl"** (1º/07/2025).
   `https://blog.cloudflare.com/introducing-pay-per-crawl/`
   Sustenta: mecânica do 402, cabeçalhos `crawler-price`, `crawler-charged`,
   `crawler-max-price`, `crawler-exact-price`, e a exigência de Web Bot Auth (Ed25519 + JWK +
   HTTP Message Signatures). Confiabilidade: fonte primária do fornecedor que implementou —
   precisa sobre o próprio produto, interessada sobre a tese.

2. **Cloudflare — "Your site, your rules: new AI traffic options for all customers"**
   (1º/07/2026). `https://blog.cloudflare.com/content-independence-day-ai-options/`
   Sustenta: as três categorias (Search, Agent, Training) e o default de 15/09/2026 bloqueando
   Training e Agent em páginas com anúncio para domínios novos e plano gratuito. Confiabilidade:
   primária e verificável — é anúncio de mudança de produto com data.

3. **Cloudflare — "Introducing the Agent Readiness score"** (17/04/2026).
   `https://blog.cloudflare.com/agent-readiness/`
   Sustenta: os números de adoção nos 200 mil domínios mais visitados — 78% com `robots.txt`,
   4% com Content Signals, 3,9% com negociação em Markdown, menos de 15 com MCP Server Card — e
   as quatro dimensões da pontuação. Confiabilidade: é a medição mais ampla que encontrei; é
   também do ator que vende a solução para o problema que a medição revela.

4. **Cloudflare — "The crawl before the fall… of referrals"** (1º/07/2025).
   `https://blog.cloudflare.com/ai-search-crawl-refer-ratio-on-radar/`
   Sustenta: as razões rastreio-por-referência de 19 a 26/06/2025 (Anthropic 70.900:1;
   Mistral 0,1:1). Confiabilidade: primária e datada — foi justamente abri-la que corrigiu o
   erro descrito na seção 8.

5. **Cloudflare — "A deeper look at AI crawlers: breaking down traffic by purpose and
   industry"** (28/08/2025). `https://blog.cloudflare.com/ai-crawler-traffic-by-purpose-and-industry/`
   Sustenta: ~80% do rastreio de IA para treino, menos de 5% para ação de usuário e finalidade
   não declarada; razões por setor (Notícias 2.500:1 Anthropic, 152:1 OpenAI, 32,7:1
   Perplexity). Confiabilidade: primária, com recorte setorial que nenhuma outra fonte ofereceu.

6. **Cloudflare — "Launching the x402 Foundation with Coinbase"** (23/09/2025).
   `https://blog.cloudflare.com/x402/`
   Sustenta: criação da fundação, integração de x402 ao Agents SDK e a servidores MCP, e a
   afirmação de mais de um bilhão de respostas 402 por dia na rede. Confiabilidade: primária;
   o "um bilhão de 402" é dado da própria rede e não distingue 402 de pagamento de 402 de
   recusa — usei com essa ressalva explícita.

7. **Model Context Protocol — "The 2026-07-28 Specification"**.
   `https://blog.modelcontextprotocol.io/posts/2026-07-28/`
   Sustenta: a virada para protocolo *stateless*, remoção do handshake e dos IDs de sessão,
   roteamento por cabeçalho (`Mcp-Method`, `Mcp-Name`), cache com `ttlMs`/`cacheScope`,
   endurecimento de autorização, e suporte nos SDKs Tier 1. Confiabilidade: primária e
   normativa — é a especificação.

8. **IETF — `draft-meunier-web-bot-auth-architecture-05`** (02/03/2026).
   `https://datatracker.ietf.org/doc/html/draft-meunier-web-bot-auth-architecture`
   Sustenta: a arquitetura de assinatura, os autores (Thibault Meunier, Cloudflare; Sandor
   Major, Google) e — crucial — o status: submissão individual, **sem status formal no processo
   de padronização**, já substituída. Confiabilidade: primária; é o documento que desmente a
   leitura de que "existe um padrão de identidade de agente".

9. **arXiv:2508.14925 — "MCPTox: A Benchmark for Tool Poisoning Attack on Real-World MCP
   Servers"** (22/08/2025). `https://arxiv.org/abs/2508.14925`
   Sustenta: 45 servidores MCP reais, 353 ferramentas, 1.312 casos maliciosos, 20 agentes LLM,
   72,8% de sucesso contra o o1-mini. Confiabilidade: pré-print acadêmico com método descrito e
   números no resumo; foi a versão `abs` que permitiu confirmar os valores que o PDF não rendeu.

10. **RSL: Really Simple Licensing — release de lançamento** (10/09/2025).
    `https://rslstandard.org/press/rsl-standard`
    Sustenta: o que é o RSL, a data, os adotantes nomeados (Reddit, Yahoo, People Inc., Ziff
    Davis, O'Reilly, Medium, wikiHow, Quora, Fastly, Raptive), a existência do RSL Collective e
    as modalidades *pay-per-crawl* e *pay-per-inference*. Confiabilidade: é release de
    lançamento — confiável sobre quem assinou, inútil sobre adoção real, e não traz nenhum
    número de uso.

11. **Not Human Search** (site aberto em 11/09/2026). `https://nothumansearch.ai/`
    Sustenta: 5.315 sites indexados, média de prontidão 38/100, os sinais pontuados e a
    declaração de que o rank orgânico não é por pagamento. Confiabilidade: fonte primária do
    próprio produto, lida ao vivo; diverge de outras duas contagens (seção 8).

12. **CoinDesk — "Coinbase-backed AI payments protocol wants to fix micropayment but demand is
    just not there yet"** (11/03/2026).
    `https://www.coindesk.com/markets/2026/03/11/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet`
    Sustenta: ~US$ 28 mil/dia em ~131 mil transações, ticket médio ~US$ 0,20, ecossistema de
    ~US$ 7 bilhões, e a estimativa da Artemis de que metade das transações é artificial.
    Confiabilidade: imprensa especializada citando análise on-chain nomeada; é a fonte mais
    contrária à tese do documento, e por isso a mais valiosa dele.

13. **OrganiKPI — "llms.txt in 2026: Adoption Data and When to Use It"**.
    `https://organikpi.com/blog/distribution/llms-txt-adoption-impact/`
    Sustenta: o estudo da SE Ranking (~300 mil domínios, 10,13% de adoção, 8,27% em sites de
    alto tráfego, 10,54% em tráfego médio), a ausência de suporte declarado por Google,
    Perplexity, OpenAI, Microsoft e Anthropic, e o achado de que remover a variável melhora a
    predição de citação. Confiabilidade: **secundária** — é compilação de estudo de terceiro,
    não o estudo. Não abri o original da SE Ranking. É a fonte mais frágil das quinze, e
    sustenta uma das conclusões mais fortes do documento; registro a tensão.

14. **PPC Land — "AI agent traffic dips in May but blocking rates keep climbing"** (04/06/2026).
    `https://ppc.land/ai-agent-traffic-dips-in-may-but-blocking-rates-keep-climbing/`
    Sustenta: queda de 4,3% no tráfego agêntico em maio de 2026; Comet 47% (−6,8%), Atlas 20,3%
    (−9,2%), extensão do Claude 18,6% (+2,6%), Genspark 2,9% (+18,2%); bloqueio de 8,2% para
    quase 9%. Confiabilidade: secundária — reportagem sobre o relatório *State of Agentic
    Traffic* da HUMAN Security, cujo original não abriu (403).

15. **Finsiders Brasil — "Open Finance e Pix formam base para agentes de IA, mas isso é só o
    começo…"** (11/09/2026).
    `https://finsidersbrasil.com.br/economia-open/open-finance-e-pix-formam-base-para-agentes-de-ia-mas-isso-e-so-o-comeco/`
    Sustenta: toda a nota sobre o Brasil — as camadas de dado e de transação do Open Finance
    Brasil, Pix imediato/agendado/automático como trilho, e o limite dos "graus iniciais e
    intermediários de autonomia" por falta de representação da autoridade do agente.
    Confiabilidade: artigo assinado pelo diretor de tecnologia da Associação Open Finance
    Brasil — fonte primária sobre o arcabouço, e parte interessada sobre o mérito dele. Não traz
    nenhum número.

## 12. Anexo — o levantamento bruto

### 12.1 Estado da entrevista (fase 1 da skill)

**Os seis pontos foram respondidos.** Não houve pulo de entrevista e, portanto, não há
rebaixamento automático de confiança por esse motivo. Registro literal do que foi recebido:

| Ponto | Resposta recebida |
|---|---|
| 1. Tema e recorte | "A internet agêntica: quando o usuário é uma máquina" — tema 4 de 19, família "Agentes". Recorte: a web como plataforma sendo reprojetada para máquinas, com fronteira explícita em relação ao tema 2 (identidade/detecção) e ao tema 5 (pagamento/comércio). |
| 2. Horizonte | 2031. |
| 3. Para quem | Quem projeta mídia e interação. |
| 4. Recorte geográfico | Global, com uma nota sobre o Brasil. |
| 5. O que já está descartado | O que já é comum em produto de massa (a régua da disciplina). Nenhuma outra exclusão. Adicionalmente: ideias óbvias que serviriam para qualquer tema. |
| 6. Viés desejado | Neutro. Declarado no documento; a seção 7 registra onde a neutralidade não foi alcançada. |

Itens extras informados e usados: profundidade de três ordens; modo "a partir de uma
inovação/tema, não de um setor"; nenhuma disrupção suspeita pré-indicada ("descubra"); e o
critério declarado de mudança de ideia — evidência de que a adoção já passou da maioria inicial
(Rogers), ou de que a tecnologia não rompe nada. **Esse critério foi aplicado e teve
consequência:** é ele que rejeitou o `llms.txt` e que rebaixou o MCP-em-IDE para madura no
nicho (ver 12.2).

**Uma condição não usual desta rodada, registrada por honestidade:** não havia interlocutor
disponível para perguntas durante a execução. As respostas acima chegaram todas de antemão, e
a instrução era assumir e declarar o que faltasse. O que faltou e foi assumido: (a) que o
"público" é leitor de mídia e interação em nível de graduação avançada, o que definiu o nível
de explicação de termos técnicos; (b) que a nota sobre o Brasil deveria ser proporcional, não
uma seção paralela; (c) que três disrupções-raiz bem separadas valiam mais que cinco
sobrepostas.

### 12.2 Registro do teste da fase 2 — tudo o que foi testado e rejeitado

O critério exige registro de **toda** tecnologia testada e rejeitada, com o motivo. São nove.

**Rejeitadas por serem maduras (falham no Teste 1):**

1. **APIs REST + OpenAPI + SDKs.** Três implantações em produção, em escala, sem apostar em
   nada sobre o futuro: trivial de citar. É a opção padrão para consumo de site por máquina há
   mais de uma década, e o que resta é ficar mais barato e mais bem documentado. Entra na seção
   3 como estado atual. Rejeitada.

2. **Scraping.** Idem, e com décadas a mais. A mudança relevante não é técnica, é de regime de
   admissão — que está capturada em D3. Rejeitada como raiz.

3. **`robots.txt`.** Maduríssima: 78% dos 200 mil maiores domínios. Aparece neste mapa não como
   disrupção, mas como **o que a disrupção D3 desaloja**. Rejeitada como raiz; central como
   objeto do efeito `e5`.

4. **Schema.org e dados estruturados.** Padrão consolidado, consumido por buscadores há anos.
   O que muda com agentes é o consumidor, não o artefato. Rejeitada.

5. **MCP dentro do fluxo de desenvolvimento** (IDEs, assistentes de código). Teste 1: já é a
   opção padrão para conectar assistente de código a ferramenta, com os SDKs em uso massivo, e
   o que resta é ficar mais barato e mais seguro. **Madura no nicho.** A disrupção que este
   mapa sustenta é outra: MCP como **superfície pública de um site**, onde a adoção é
   praticamente nula (menos de 15 sites entre 200 mil). A separação entre os dois usos é a
   decisão metodológica mais importante deste documento — sem ela, D1 seria declarada madura e
   o mapa não existiria.

**Rejeitadas por serem emergentes mas não disruptivas neste recorte (falham no Teste 3), ou por
pertencerem a tema vizinho:**

6. **Navegadores agênticos (Comet, Atlas, Claude para Chrome, Genspark).** Emergentes, com
   quota medida. Mas não mudam **o que o site publica** — leem a mesma página com outros olhos.
   No Teste 3, a única resposta possível é "fica mais fácil automatizar navegação", que é
   melhoria. Somado a isso, o sinal recuou: tráfego caindo 4,3% em maio de 2026 e Atlas
   aposentado em julho. Rejeitada como raiz; entra como sinal na seção 6.

7. **ACP (Agentic Commerce Protocol, OpenAI+Stripe) e AP2 (Google).** Emergentes e relevantes,
   mas são **o tema 5** da disciplina (pagamento e comércio por agentes). O recorte foi
   respeitado: aparecem apenas como contexto. Registro um dado que colhi e que pertence ao tema
   vizinho mas ilumina este: o Instant Checkout da ChatGPT, que estreou com o ACP, foi
   descontinuado em março de 2026 depois de cerca de uma dúzia de lojistas Shopify terem
   implementado. Fora do mapa.

8. **Agent2Agent (A2A).** Emergente, mas o objeto é comunicação **agente-agente**, não
   web-agente. Fora do recorte. Rejeitada.

9. **`llms.txt`.** O caso mais interessante, e o único que reprovou em um teste inesperado.
   **Teste 1 (madura?): não** — 10,13% de adoção. **Teste 2 (emergente?): não passa de forma
   convincente** — o teste exige "existe fora do laboratório e a adoção é de *early adopter* em
   uso real crescente". Há produção do arquivo (plugins de SEO o geram em massa), mas não há
   **uso**: nenhum grande provedor confirma consumo em produção, e o achado da SE Ranking de que
   remover a variável melhora a predição de citação indica que o arquivo é ruído no sistema.
   Adoção sem consumo do outro lado não é adoção. **Classificado como sinal fraco**, e discutido
   como tal na seção 6 — na condição específica de *artefato que existe porque é fácil de
   produzir*. Isto contradiz frontalmente a descrição do tema, e a contradição está registrada
   na seção 8.

**Nota sobre uma quase-rejeição.** `Web Bot Auth` quase caiu no Teste 2 por status: rascunho
individual, sem status formal no IETF, já substituído. Foi mantida porque o Teste 2 pergunta
por uso fora do laboratório, não por status normativo — e ela está em produção na Cloudflare,
exigida pelo *pay per crawl* e documentada pela Akamai. A fragilidade do status ficou registrada
no corpo do documento (seções 3, 4 e 7) em vez de virar exclusão.

### 12.3 Registro da auditoria da fase 4 — efeitos rebaixados, reescritos e cortados

**Rebaixados:**

- **`e4`** ("o clique vira evento de verificação"): de `confianca: alta` para `media`.
  Motivo: teste 1 da auditoria — é extrapolação linear de tendência já medida e em curso, não
  efeito de futurização. Registrado na seção 7.
- **`e6.1`** ("migração para gestão coletiva"): de `confianca: media` para `baixa`. Motivo:
  teste 2 da auditoria — não há caso comparável de estrutura de direitos coletivos estabelecida
  em quatro ou cinco anos. Registrado na seção 7.

**Reescritos por elo causal faltante (teste 3 da auditoria):**

- **`e2`** estava redigido como "a categoria de trabalho *integração* deixa de existir". Não
  passa: o passo intermediário não é narrável, porque integração não some — muda de lugar.
  Reescrito para "deixa de ser projeto e vira configuração", que tem mecanismo: a capacidade é
  publicada uma vez e composta por quem chama, então o custo por parceiro cai para perto de
  zero e o entregável deixa de ser um projeto faturável.
- **`e5.1`** estava como "finalidade declarada vira norma". Sem mecanismo: quem declara, e por
  que não mente? Reescrito para deslocar o ilícito — o que muda não é a existência da
  declaração, é a **mentira sobre ela** virar o delito relevante, o que é verificável e
  sancionável.
- **`e3.2`** estava como "a infraestrutura vira o novo Google". Analogia, não mecanismo.
  Reescrito enumerando os três papéis que se acumulam (medidor, porteiro, cobrador), que é o
  que de fato mudou em relação à era da busca.

**Cortados (fora da roda):**

- **"A web se divide em duas webs incomunicáveis."** Cortado pela regra (c): não há mecanismo
  narrável para a *incomunicabilidade*, já que a mesma origem serve as duas superfícies a partir
  do mesmo acervo. O que existe é uma porta com duas respostas, não duas redes — e isso já está
  em `e5` sem a hipérbole.
- **"O navegador deixa de existir."** Cortado por contradizer o dado disponível: o navegador
  agêntico é que recuou (Atlas aposentado em julho de 2026, tráfego agêntico caindo). Um efeito
  que a evidência corrente já desmente não entra por elegância narrativa.
- **"Sites passam a pagar agentes para serem visitados."** Cortado pela regra (c): seria
  simétrico e bonito, mas não tem nem sinal fraco que o sustente, e se aplicaria igualmente a
  qualquer disrupção de intermediação. Especulação genérica.
- **"O conteúdo gerado por IA satura a web e os agentes passam a ler só fontes credenciadas."**
  Cortado por ser efeito de **outro** tema (qualidade e proveniência de conteúdo sintético), não
  deste. Entraria em qualquer mapa da família "Agentes" — que é exatamente o critério de
  exclusão pedido na entrevista.
- **"A publicidade desaparece."** Cortado e substituído por `e4.2` (a negociação se desloca para
  o fabricante do agente), que tem mecanismo. "Desaparece" não tem.

**Nota de integridade sobre esta auditoria:** a skill exige que ela mude alguma coisa de
verdade. Mudou dois níveis de confiança, três redações e cinco cortes, sobre uma roda que
entrou na auditoria com 6/12/21 efeitos e saiu com 6/12/16.

### 12.4 Buscas que não deram em nada, e lacunas conhecidas

- **`media.defense.gov` — documento de segurança sobre MCP (junho de 2026): HTTP 403.** Teria
  sido a única fonte governamental do conjunto e a única perspectiva de segurança nacional
  sobre o protocolo. Não lida, não citada, não contada.
- **HUMAN Security — relatório *State of Agentic Traffic*: HTTP 403.** Os números de tráfego
  agêntico de maio de 2026 no documento vêm da reportagem da PPC Land sobre o relatório, não do
  relatório. Dependência de segunda mão declarada na fonte 14.
- **Razões rastreio-por-referência de 2026 em fonte primária: não encontradas.** Todas as
  ocorrências de valores de 2026 (Mistral 3.389:1, Anthropic 2.237:1, OpenAI 217:1) vieram de
  blogs de SEO que citam o Cloudflare Radar sem link rastreável para a consulta. Não abri o
  Radar diretamente. Por isso **nenhum desses números está no corpo do documento** — só a
  menção de que houve queda de uma ordem de grandeza, que é o que múltiplas fontes secundárias
  concordam.
- **Dados brasileiros de tráfego agêntico ou de prontidão agêntica: inexistentes na busca.**
  Não encontrei nenhuma medição de que fração do tráfego de sites `.br` é agêntica, nem
  pontuação de prontidão de domínios brasileiros. A nota sobre o Brasil repousa inteiramente
  sobre o trilho de pagamento (Pix, Open Finance), que é o lado do problema em que o país está
  adiantado, e **não** sobre o lado da publicação, que é o objeto deste tema. É uma assimetria
  da evidência, não uma escolha.
- **Estudo original da SE Ranking sobre `llms.txt`: não aberto.** Cheguei a ele por compilação.
  Dado o peso que a conclusão tem no documento (é o que rejeita uma das tecnologias listadas na
  descrição do tema), a fragilidade merece destaque e está registrada na fonte 13 e na seção 8.
- **Nenhuma fonte de publicador falando do próprio caso.** Não encontrei publicador
  descrevendo, com número, o que aconteceu com sua receita depois de ativar pay-per-crawl ou
  bloquear agentes. Tudo o que existe é dito por quem vende a infraestrutura ou por quem
  comenta o setor. É a lacuna mais séria do levantamento, e ela sustenta o viés de fonte
  declarado na seção 7.

### 12.5 Material colhido que não coube nas seções

**Sobre o tamanho do ecossistema MCP.** As contagens de servidores divergem por método:
~2.000 no registro oficial em março de 2026; 9.652 registros de servidor mais recentes e 28.959
registros de servidor/versão numa extração da API do registro em maio de 2026; 19.831+ indexados
pela Glama. E ~97 milhões de downloads mensais somando os SDKs Python e TypeScript. Não usei
nenhum desses números como âncora no corpo porque não abri fonte primária para eles — usei-os
apenas como apoio qualitativo à afirmação de que a curva sobe. O padrão é o mesmo do caso Not
Human Search: números grandes e incompatíveis para a mesma pergunta.

**Sobre adoção empresarial de MCP.** Um relatório de 2026 da Stacklok reporta 41% de
organizações de software pesquisadas com servidores MCP em produção limitada ou ampla. Não abri
o relatório; deixo registrado porque, se verdadeiro, é o argumento mais forte contra este mapa —
sustentaria classificar MCP como madura de forma geral, não só no nicho de desenvolvimento, e
derrubaria D1 no Teste 1. Quem for confrontar este documento deve começar por aqui.

**Sobre a chamada "AEO".** O deslocamento de SEO para AEO aparece com números fortes na
literatura de marketing (cerca de 60% de buscas sem clique, 77% em mobile; queda de 38% no
tráfego de referência do Google para publicadores; AI Overviews associadas a quedas de 18% a
64% de cliques orgânicos em consultas afetadas; marcas citadas ganhando 35% mais cliques
orgânicos que as não citadas). Usei apenas os dois primeiros, e só como contexto de `e4`, porque
a literatura de origem é comercialmente interessada de forma sistemática — quem publica o número
vende o serviço que o número justifica. Registro os demais aqui sem endossá-los.

**Sobre o x402 depois do pico.** Além do dado de março de 2026 usado no corpo: houve um pico em
fevereiro com 3,8 milhões de transações e cerca de US$ 2 milhões de volume, atribuído por
analistas on-chain a teste de infraestrutura e uso experimental. A fundação reúne Coinbase,
Cloudflare, Google e Visa; a Stripe passou a usar o protocolo para pagamentos em USDC por
agentes na Base em fevereiro de 2026; e há contagens acumuladas na casa das centenas de milhões
de transações. O contraste entre acumulado alto e volume diário baixo é consistente com
atividade de teste, não com comércio.

**Sobre segurança de MCP, além do MCPTox.** O material é abundante e convergente: múltiplas
vulnerabilidades de alta severidade divulgadas entre meados de 2025 e junho de 2026 envolvendo
IDEs que executam automaticamente servidores MCP definidos no projeto, com privilégios de
sistema do desenvolvedor e sem isolamento de processo; OWASP com verbete próprio para *MCP Tool
Poisoning*; nota de pesquisa da Cloud Security Alliance sobre a superfície de ataque; e ao menos
um incidente narrado envolvendo instrução maliciosa embutida num *ticket* de suporte lido por um
assistente conectado a um banco de dados. Usei apenas o MCPTox no corpo, por ser o único com
fonte primária aberta e números confirmados.

**Sobre `robots.txt` na era da IA.** Há indício, em levantamentos de setembro de 2026, de que
publicadores passaram a **bloquear bots de treino e permitir bots de resposta** — com
`PerplexityBot` e `ChatGPT-User` aparecendo mais em regras de permissão que de bloqueio,
presumivelmente porque devolvem tráfego. É um comportamento economicamente coerente e
consistente com D3, e teria sido bom material para `e5.1`, mas não abri a fonte. Fica como
pista para quem for continuar.

**Termos e entidades varridos que não renderam material próprio:** "machine-readable web" (só
devolve conteúdo de marketing), "AI crawler robots.txt" (redundante com o que já havia),
"agentic readiness" fora dos dois produtos já citados (uma dúzia de checadores comerciais
gratuitos, todos isca para consultoria, nenhum com metodologia publicada), Hacker News e
discussões em W3C/IETF além do rascunho do Web Bot Auth (não alcançados nesta janela — é a
varredura que eu faria primeiro numa segunda rodada).
