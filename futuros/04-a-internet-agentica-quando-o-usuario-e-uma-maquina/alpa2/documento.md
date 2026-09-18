---
tema: "A internet agêntica: quando o usuário é uma máquina"
slug: a-internet-agentica-quando-o-usuario-e-uma-maquina
autor_login: alpa2
zona_de_interesse: Agentes
data: 2026-09-17
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 9
efeitos_ordem_2: 18
efeitos_ordem_3: 14
tecnologias_citadas: [WebMCP, "navigator.modelContext", Model Context Protocol, "llms.txt", Web Bot Auth, "RFC 9421", x402, "HTTP 402", pay-per-crawl, "AI Crawl Control", robots.txt, OpenAPI, "Schema.org", "Not Human Search", "navegador agêntico", "Claude for Chrome", Comet, "ChatGPT Atlas", "Agent2Agent", "MCP registry", "Pix agêntico", "Open Finance"]
fontes: 8
confianca: media
experimento: "Publicar o mesmo conteúdo em duas portas — página para olho e ferramenta declarada para agente — e medir, por seis semanas, quem entra por onde, quanto custa manter as duas e onde as duas divergem."
skill_usada: futurizacao-alpa2
publico_ok: false
---

## 1. Resumo

A web está ganhando uma segunda porta. Não uma versão simplificada da primeira: uma porta com
gramática própria — ferramenta declarada em vez de página renderizada, identidade criptográfica
em vez de `User-Agent` declarado na palavra, preço por requisição em vez de acesso gratuito
trocado por audiência. Três coisas estão se movendo ao mesmo tempo, e é a coincidência delas
que faz o tema ser de agora e não de 2023: o navegador começou a oferecer uma API para o site
declarar o que sabe fazer (WebMCP, draft W3C de fevereiro de 2026, implementação em Chrome
Canary atrás de flag); a infraestrutura de borda começou a cobrar e a assinar o tráfego de
máquina (pay-per-crawl em beta fechado, Web Bot Auth com grupo de trabalho no IETF, x402 com
75,41 milhões de transações nos últimos trinta dias); e nasceu uma descoberta que ordena sites
por capacidade executável, não por relevância de texto.

Mas o levantamento também derrubou a parte mais citada do tema. **O `llms.txt` não é a
disrupção — é o contraexemplo.** Num estudo de 137.210 domínios em maio de 2026, 97% dos
arquivos publicados não receberam uma única requisição no mês, e o Google declarou que o
ignora por completo. Publicar um arquivo não abre porta nenhuma; o que abre porta é protocolo
executável, identidade e preço. Essa correção reorganizou o mapa inteiro (seção 8).

O horizonte é 2031, e a leitura honesta é a de um sistema novo crescendo ao lado do antigo, não
substituindo-o: navegadores agênticos somam menos de 3% de participação, e o produto que tentou
fazer o agente *ser* o navegador (ChatGPT Atlas) foi descontinuado em agosto de 2026, enquanto
os que penduraram o agente em cima do que as pessoas já usavam cresceram. Para quem projeta
mídia e interação, a consequência prática não é "a interface vai acabar". É que passam a existir
**dois artefatos a projetar**, com dois públicos incomparáveis, e a decisão mais consequente do
projeto deixa de ser o layout para ser *quais ações o site autoriza, para quem, e a que preço*.

## 2. O tema

**Objeto.** A web como plataforma sendo reprojetada para ser consumida por programas. Não o
agente em si, não o pagamento por agente, não a detecção de bot — esses são temas vizinhos.
Aqui o objeto é a **camada de protocolo e de descoberta** que o site passa a oferecer quando o
visitante principal não tem olhos.

**Horizonte.** 2031.

**Público.** Quem projeta mídia e interação — designers de interação, front-end, produto,
editorial e quem decide o que um site publica e para quem.

**Recorte.** Global, com uma nota sobre o Brasil ao fim da seção 3 e um efeito de 3ª ordem
ancorado nele (`e9.1.1`).

**Régua de corte da disciplina.** Fica fora o que já é comum em produto de massa. Por essa
régua caem, de saída: API REST documentada, OpenAPI, SDK, scraping, resumo por IA em página de
busca. Nenhuma outra exclusão foi declarada.

**Suposições adotadas por falta de entrevista.** Esta rodada correu sem interlocutor humano
disponível para as perguntas do Passo 1. Os itens 1 e 2 (horizonte e recorte) vinham dados. Os
demais foram assumidos assim, e a suposição está declarada de novo na seção 7:

| Item do Passo 1 | O que foi assumido |
|---|---|
| 3 — descartes | Só a régua da disciplina; nenhuma exclusão adicional |
| 4 — viés | Neutro, sem preferência declarada |
| 5 — palpite de disrupção | Nenhum; levantar do zero |
| Profundidade | Três ordens, conforme o formato |
| Ponto de partida | A partir do tema/inovação, não de um setor |

**O que faria este mapa ser descartado.** Foi declarado como critério de mudança de ideia:
evidência de que a adoção já passou da maioria inicial de Rogers (o que tornaria o tema maduro,
não emergente), ou evidência de que a tecnologia só melhora o que existe sem romper nada. A
seção 7 responde às duas com o que o levantamento achou — e a resposta não é limpa em nenhuma
das direções.

## 3. Onde isso está hoje

### O que já existe e funciona

**MCP deixou de ser aposta e virou infraestrutura.** Lançado pela Anthropic em 25 de novembro
de 2024, foi adotado pela OpenAI em março de 2025 e pelo Google DeepMind em abril de 2025, e
doado em dezembro de 2025 à Agentic AI Foundation, fundo dirigido sob a Linux Foundation
co-fundado por Anthropic, Block e OpenAI. Em meados de 2026: mais de 10 mil servidores MCP em
produção e SDKs com mais de 97 milhões de downloads mensais. Em 28 de julho de 2026 o protocolo
passou por revisão que o tornou sem estado na camada de protocolo. **Isto é contexto, não
disrupção-raiz** — ver o teste na seção 4.

**Cobrança de máquina já existe, em duas formas.** O `pay-per-crawl` da Cloudflare responde
`HTTP 402 Payment Required` com preço quando o crawler não apresenta intenção de pagamento no
cabeçalho, e `HTTP 200` quando apresenta; a Cloudflare figura como *merchant of record*, e o
preço é definido por zona pelo dono do site. **Está em beta fechado.** Em paralelo, o x402 —
protocolo aberto operado pela x402 Foundation, com lançamento operacional anunciado pela Linux
Foundation — declara no próprio site 75,41 milhões de transações e US$ 24,24 milhões de volume
nos últimos trinta dias, com 94.060 compradores e 22.000 vendedores, e lista Cloudflare, AWS,
Stripe e Vercel entre quem o usa.

**Identidade de agente saiu do papel antes de ser padrão.** O Web Bot Auth usa HTTP Message
Signatures (RFC 9421) para o agente provar identidade a cada requisição; há grupo de trabalho
formal no IETF, e a Cloudflare anunciou *signed agents* em 28 de agosto de 2025 com um primeiro
lote que inclui o ChatGPT agent, o Goose (Block), Browserbase e Anchor Browser. O dono do site
passa a poder tratar "agentes assinados" como um grupo nas regras de segurança. Suporte também
em AWS WAF, Vercel, Shopify e Akamai.

**A economia da troca antiga já quebrou.** Tráfego de crawler ligado a IA foi 52% do total de
requisições de crawler em junho de 2026, contra 22% na primavera de 2025, com razão
crawl-para-referral entre 118:1 e quase 50.000:1 nos principais bots. A partir de 15 de
setembro de 2026 a configuração padrão da Cloudflare bloqueia crawlers de uso misto em páginas
com anúncio. Do lado do publisher: referência do Google caindo 38% ano a ano no início de 2026,
cerca de 60% das buscas globais sem clique, e executivos de notícia esperando queda de mais de
40% em três anos.

### O que existe mas não pegou

**`llms.txt`.** É o item mais citado do tema e o que menos se sustenta. Ahrefs analisou 137.210
domínios em maio de 2026: 28% publicavam arquivo válido (a própria amostra é enviesada para
sites conscientes de SEO, então o número é teto), e **97% desses arquivos não receberam
requisição alguma no mês**. Dos pedidos que houve, 96% eram de bot, e a maior fatia identificável
não era IA nenhuma: ferramenta de auditoria de SEO (21,7%), crawler geral (13,1%), perfilamento
de tecnologia (11,6%). Bot de retrieval de IA — justamente o destinatário imaginado — fez 1,1%.
O agente que mais busca o arquivo é o Claude Code, o que sugere que ele serve documentação para
desenvolvedor, não descoberta para IA. E nenhum bot de IA pediu o arquivo em site que não o
tinha: agentes não o procuram, só o buscam quando apontados. O Google foi explícito — Gary
Illyes disse que não há suporte nem plano, a documentação de junho de 2026 diz que o arquivo não
tem efeito, e John Mueller o comparou à meta tag *keywords*, argumentando que o formato é
intrinsecamente pouco confiável porque deixa o dono do site *afirmar* sobre o próprio conteúdo.

**Navegador agêntico como produto.** ChatGPT Atlas foi descontinuado em 9 de agosto de 2026, e
a OpenAI moveu a capacidade agêntica para dentro do app e para uma extensão de Chrome. O
conjunto de navegadores de IA soma menos de 3% de participação. O que cresceu foi o agente
pendurado no navegador existente: Claude for Chrome de ~40 mil para mais de 10 milhões de
instalações entre dezembro de 2025 e junho de 2026; Comet no Android em 19 de agosto de 2026 e
integrado ao Samsung Internet. A barreira não é só de mercado: o NCSC britânico e o Gartner
consideram navegador agêntico risco alto demais para adoção organizacional, e injeção de prompt
via conteúdo de página é vulnerabilidade documentada.

**Descoberta agêntica em escala.** O Not Human Search existe, funciona, pontua sites de 0 a 100
em sete sinais de prontidão (`llms.txt`, OpenAPI, MCP, Schema.org e outros) e expõe a si mesmo
como servidor MCP em `https://nothumansearch.ai/mcp`. Mas o índice, aberto em 17/09/2026,
declarava **5.339 sites indexados, com média de prontidão 38**. É uma prova de conceito, não um
PageRank.

### Quem está construindo

Anthropic (MCP, Agent Skills, Claude for Chrome), OpenAI (ChatGPT agent, MCP em março de 2025),
Google e Microsoft (WebMCP, co-desenvolvido; e Google como o ator que *recusa* o `llms.txt`),
Cloudflare (AI Crawl Control, pay-per-crawl, Web Bot Auth, signed agents), Coinbase e a x402
Foundation, Linux Foundation / Agentic AI Foundation (governança de MCP e x402), IETF
(WebBotAuth WG), W3C (WebMCP), AWS, Vercel, Shopify, Akamai (adoção de Web Bot Auth), Salesforce
(4,5 milhões de chamadas MCP até maio de 2026), Stack Overflow (pay-per-crawl com a Cloudflare),
e projetos pequenos como o Not Human Search.

### Nota sobre o Brasil

O Brasil aparece no tema por um ângulo que o recorte global não dá: aqui a porta de máquina
nasceu primeiro no pagamento, não na publicação. O Iniciador lançou o que descreve como o
primeiro MCP de pagamentos agênticos via Pix, sobre a infraestrutura de Open Finance. Bancos
projetam R$ 3 bilhões em IA no ano, e uma pesquisa citada no setor indica 76% de brasileiros com
intenção de usar IA para comprar, contra 44% nos Estados Unidos. Falta o regime jurídico: não há
regra específica de responsabilização para transação autônoma, e o Banco Central ainda não
definiu regulamentação. O efeito para este tema é assimétrico e vale registrar: **um país pode
ter alta disposição de uso e trilho de pagamento pronto e, ao mesmo tempo, uma web local com
prontidão agêntica muito baixa** — o que concentra o valor em quem opera o trilho, não em quem
publica. Esta nota vem de fonte de imprensa setorial consultada por resumo de busca, não aberta
na íntegra; está marcada como tal na seção 11.

## 4. As disrupções-raiz

Três candidatos passaram nos três testes do critério. Quatro foram rejeitados, e as rejeições
importam mais que as aprovações — estão logo abaixo.

---

### D1 — O site declara ferramentas chamáveis, e não páginas para olhar

> `WebMCP` / `navigator.modelContext`

**O que rompe.** Muda quem pode agir sobre um site e o que o site precisa dizer sobre si.
Até aqui, o agente inferia a capacidade de uma página: lia DOM, clicava, tentava. Com uma API
de declaração, o site *afirma* o que sabe fazer, em esquema JSON tipado, e o agente chama como
chamaria função. Não é a mesma coisa mais rápida: é a inversão de quem descreve a capacidade.
O site deixa de ser um documento que se interpreta e passa a ser um **contrato que se executa**
— e passa a poder recusar, condicionar e versionar esse contrato. Ganho de eficiência de token
da ordem de 89% em relação à interação por captura de tela é consequência, não a mudança.

**Por que agora, e não há cinco anos.** Três razões concretas, todas de 2026: o draft W3C subiu
em 10 de fevereiro de 2026, co-desenvolvido por Google e Microsoft, e o Chrome 146 Canary trouxe
a primeira implementação atrás de flag; existe agora um precedente de governança que não existia
— o MCP saiu das mãos de um fabricante para uma fundação neutra em dezembro de 2025, o que
tornou plausível para um site investir numa porta de máquina sem apostar numa empresa; e há
demanda comprovada do outro lado (mais de 10 mil servidores MCP em produção, agentes com dezenas
de milhões de instalações). Há cinco anos não havia nem consumidor nem padrão.

**O que ainda falta.** Muito, e é o que o mantém como emergente: nenhum navegador estável
implementa — o rollout estável estava previsto para o quarto trimestre de 2026, e a estimativa
de baseline entre navegadores é de 18 a 24 meses; não há corpo relevante de sites com
ferramentas declaradas; e falta resolver o problema que hoje é bloqueante, não acessório —
conteúdo de terceiro capaz de acionar ferramenta com a credencial de quem navega (injeção de
prompt), o que fez NCSC e Gartner recomendarem contra uso organizacional. Uma porta de máquina
que ninguém confia o bastante para abrir em empresa não é porta ainda.

---

### D2 — O acesso de máquina passa a ser assinado e precificado por requisição

> `Web Bot Auth` (RFC 9421) + `HTTP 402` / `pay-per-crawl` + `x402`

**O que rompe.** O contrato implícito que sustentou a web aberta por trinta anos — você me lê
de graça e me devolve audiência — e o mecanismo pelo qual esse contrato era administrado: um
arquivo de texto que pedia por favor. `robots.txt` não verifica nada e não cobra nada; depende
de o visitante dizer a verdade sobre quem é. O que muda é que a porta passa a **verificar
identidade por chave criptográfica a cada requisição** e a **negociar preço dentro do próprio
ciclo de requisição**, entre máquinas, sem conta, sem login e sem humano aprovando. Isso muda
quem pode ler a web e sob que condição: deixa de ser questão de etiqueta e passa a ser questão
de credencial e de crédito.

**Por que agora, e não há cinco anos.** Porque a troca antiga quebrou de forma mensurável e a
alternativa técnica ficou pronta ao mesmo tempo. Quebrou: crawler de IA passou de 22% para 52%
das requisições de crawler entre a primavera de 2025 e junho de 2026, com razão
crawl-para-referral chegando a quase 50.000:1 — ou seja, o lado do publisher parou de receber a
contrapartida que justificava o acesso gratuito. Ficou pronta: o Web Bot Auth foi para produção
em Cloudflare, Anthropic e OpenAI em sincronia antes de ser padrão, com WG no IETF e suporte em
AWS WAF, Vercel, Shopify e Akamai; o x402 processa dezenas de milhões de transações por mês; e
a Cloudflare passou a bloquear por padrão, a partir de 15 de setembro de 2026, crawler de uso
misto em página com anúncio. Há cinco anos nada disso tinha volume nem urgência.

**O que ainda falta.** O `pay-per-crawl` está em **beta fechado** — o que significa que a peça
central, o preço por acesso de máquina em escala, ainda não é um mercado. Falta a evolução
anunciada de cobrar por *uso* (quando o conteúdo gera valor) em vez de por *fetch*, que é o que
tornaria a cobrança defensável. Falta padrão de identidade que funcione fora do perímetro de uma
CDN — hoje quem decide quem é agente legítimo é, na prática, quem opera a borda. E falta alguém
resolver o que acontece com o agente pequeno, sem chave publicada em registro reconhecido.

---

### D3 — A descoberta passa a ordenar capacidade executável, não documento

> prontidão agêntica como ranking; `Not Human Search`, registries de MCP, busca agent-first

**O que rompe.** O objeto indexado. Vinte e cinco anos de descoberta na web indexaram
documentos e ordenaram por relevância de texto e por reputação de link. O que começa a existir
indexa **ferramentas** e ordena por *o que o site deixa fazer* — se tem esquema, se tem
endpoint, se tem servidor MCP, se responde de forma estruturada. Isso rompe o que se otimiza:
sai a atenção do leitor, entra a contratabilidade da máquina. E rompe quem decide: o critério de
ordenação deixa de ser inferido do comportamento humano agregado e passa a ser **declarado e
auditável em sete sinais** — algo bem mais fácil de gamificar que PageRank.

**Por que agora, e não há cinco anos.** Porque só agora existe o que indexar. Não havia, em
2021, corpo de capacidade declarada: hoje há mais de 10 mil servidores MCP em produção, registry
oficial, e um mercado de APIs de busca construídas para agente (não para pessoa) porque agente
faz centenas de consultas por sessão e prefere extração estruturada a snippet relevante.

**O que ainda falta.** Escala, e não é pouca coisa. O índice mais citado do tema tinha, aberto
em 17/09/2026, **5.339 sites e média de prontidão 38 em 100**. Nenhum agente de mercado usa um
índice de prontidão agêntica como fonte primária de descoberta — eles continuam usando busca
convencional e MCP configurado à mão. Falta também alguém para auditar o score, já que ele se
apoia em sinais que o próprio site publica sobre si. É exatamente o vício que Mueller aponta no
`llms.txt`, agora com ranking em cima.

---

### As quatro rejeições — e por que elas importam

| Candidato | Teste que falhou | Para onde foi |
|---|---|---|
| **MCP** como disrupção-raiz | Teste 3. "O que falta para se concretizar?" → nada: 10 mil servidores em produção, 97M de downloads mensais de SDK, governança em fundação neutra, adotado pelos três maiores fabricantes. É **infraestrutura adotada**, não emergente. | Seção 3 |
| **`llms.txt`** | Teste 1, e feio. "O que isso rompe?" → nada verificável: 97% dos arquivos não são lidos, bot de retrieval de IA faz 1,1% dos pedidos, o Google ignora por declaração explícita. Não é maduro — é **inerte**. | Seções 3 e 8 |
| **API REST / OpenAPI / SDK / scraping** | Teste 1. É mais rápido e mais barato fazer o que já se fazia. Maduro pela régua da disciplina. | Seção 3 |
| **Resumo por IA na página de busca** | Teste 3. Já é produto de massa: ~60% das buscas sem clique. O *efeito* dele sobre a economia do publisher é premissa deste mapa, não disrupção dele. | Seção 3, como âncora |

A rejeição do MCP é a aplicação direta da lição registrada em `DUVIDAS.md`: uma tecnologia pode
ser recente, importante, bem documentada e *ainda assim* não ser disrupção-raiz, porque
"recente" e "emergente" não são a mesma coisa. Se o teste 3 não fosse respondido por escrito, o
MCP entraria — soa como deveria entrar.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "D1 — O site declara ferramentas chamáveis (WebMCP / navigator.modelContext), e não páginas para olhar"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Sites publicam um contrato de capacidade — ferramentas com esquema tipado — ao lado do HTML, e passam a versioná-lo com o rigor com que se versiona API."
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "A equipe de front-end assume a autoria de um segundo produto, a superfície de ferramentas, com testes, telemetria e ciclo de depreciação próprios."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Consolida-se um papel de projetista de interação máquina-a-máquina, com formação e critério de qualidade distintos dos do designer de interface."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O layout deixa de ser o artefato central negociado em produto, e a discussão migra para quais ações o site autoriza, para quem e sob que condição."
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "O ensino de design de interação se reparte em duas trilhas — experiência percebida e contrato de capacidade — e o portfólio deixa de ser suficiente como prova de competência."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O funil encurta: o agente chama a ação declarada e salta as telas intermediárias que sustentavam upsell, consentimento e publicidade."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "O inventário de display do publisher perde impressões sem perder o custo de produzir o conteúdo que atraiu a chamada."
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "O patrocínio migra para dentro da resposta do agente, e a disputa regulatória sobre publicidade passa a ter como objeto a divulgação em saída de modelo, não o banner."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Padrões escuros de interface perdem eficácia porque o agente não lê a tela, e reaparecem como viés na descrição da ferramenta declarada."
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "A auditoria de consentimento deixa de examinar telas e passa a examinar esquemas e registros de chamada, o que exige perícia técnica que os órgãos de defesa do consumidor hoje não têm."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "A injeção de prompt vira classe de risco de primeira linha, porque conteúdo de terceiro passa a poder acionar ferramenta com a credencial de quem navega."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Sites passam a estratificar o que declaram: ferramenta de leitura fica aberta ao agente, ferramenta que move dinheiro ou dado fica atrás de confirmação humana explícita."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Firma-se uma distinção jurídica entre ação autorizada pelo usuário e ação induzida por conteúdo de terceiro, e com ela uma repartição de responsabilidade entre site, fabricante de agente e pessoa."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "Grandes organizações proíbem o navegador agêntico no parque corporativo antes de liberá-lo, invertendo a ordem usual em que a ferramenta de consumo entra na empresa pela porta de trás."
            sinal: medio
            prazo: 2027
            confianca: media

  - disrupcao: "D2 — O acesso de máquina passa a ser assinado e precificado por requisição (Web Bot Auth + HTTP 402 / pay-per-crawl + x402)"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "O robots.txt como pedido de gentileza é substituído por identidade criptográfica verificada a cada requisição e por resposta 402 com preço."
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Agente sem chave publicada em registro reconhecido perde acesso a uma fatia crescente da web, independentemente da intenção com que acessa."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "A barreira de entrada para operar um agente deixa de ser técnica e passa a ser reputacional, o que favorece o fabricante grande e encolhe o espaço do agente feito por uma pessoa."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Redes de borda e registries de chave tornam-se o ponto onde de fato se decide quem pode ler a web, papel que nenhum padrão aberto lhes atribuiu."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "A governança do acesso à web desloca-se de padrão aberto para contrato privado de infraestrutura, e o debate sobre neutralidade ressurge com um objeto novo — o direito de leitura por máquina."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "O mesmo conteúdo passa a ter dois preços: zero para o olho humano e um valor por requisição para a máquina."
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Publishers sem escala para negociar licença própria adotam o preço de tabela do intermediário e aceitam a precificação que ele definir."
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Forma-se um mercado secundário em que o valor de um acervo depende de quem já o licenciou, e não do que ele contém."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "O cálculo editorial se inverte na margem: passa a valer a pena publicar o que a máquina paga para ler, não o que o humano clica."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Gêneros de referência — tabela, especificação, série histórica, verbete — voltam a ser economicamente viáveis, enquanto o artigo escrito para retenção perde a função que justificava seu formato."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "A medição de audiência se parte em duas contabilidades incomparáveis, visita humana e chamada de máquina, e nenhuma das duas descreve sozinha o alcance de uma publicação."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Contratos de mídia e de assinatura precisam redefinir o que conta como leitor, e a auditoria de circulação passa a exigir separação por tipo de agente."
            sinal: medio
            prazo: 2029
            confianca: media
          - id: e6.2
            ordem: 2
            efeito: "O paywall migra da sessão para a requisição, e a assinatura mensal perde a exclusividade como forma de cobrar por conteúdo."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "A relação econômica entre leitor e publicação deixa de ser filiação e passa a ser consumo medido, com efeito sobre a própria ideia de público de um veículo."
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "D3 — A descoberta passa a ordenar capacidade executável, não documento (prontidão agêntica como ranking)"
    efeitos:
      - id: e7
        ordem: 1
        efeito: "Existe um ranking paralelo que ordena sites pelo que eles deixam fazer, e não pela relevância do texto que publicam."
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Nasce uma indústria de otimização para agente — medir prontidão, subir score, vender auditoria — com os mesmos incentivos de manipulação que o SEO teve."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "O ciclo do SEO se repete em escala comprimida — declaração inflada, contramedida, suspeita generalizada — e a disputa passa a ser sobre quem tem legitimidade para auditar o índice."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "A posição num índice agêntico vira ativo negociável, e o acesso preferencial de um agente a um site aparece como cláusula comercial e não como resultado de mérito."
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e8
        ordem: 1
        efeito: "O que se publica passa a ser escolhido pela chamabilidade: esquema, tabela e endpoint ganham prioridade de pauta sobre narrativa."
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Redação e design passam a produzir duas saídas do mesmo trabalho, com custo de manutenção dobrado e risco permanente de divergência entre elas."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "A divergência entre a versão humana e a versão de máquina do mesmo fato torna-se problema editorial próprio, e a redação passa a precisar de uma fonte canônica única da qual as duas derivam."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: "Sites que só têm narrativa ficam invisíveis para o agente sem estarem bloqueados: invisibilidade por omissão, que ninguém decidiu e que não aparece em nenhum relatório."
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e9
        ordem: 1
        efeito: "A visita deixa de ser a unidade de análise da web, e o site deixa de ser destino para tornar-se fornecedor de capacidade dentro da experiência de um terceiro."
        sinal: fraco
        prazo: 2030
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "Quem não tem agente passa a ver uma web mais pobre que a de quem tem, porque o investimento de quem publica vai para a porta de máquina."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "Abre-se uma desigualdade de acesso mediada por assinatura de agente, sobreposta à desigualdade de banda que já existe — e no Brasil ela incide primeiro sobre quem navega por plano móvel limitado, num país onde a disposição de usar IA para comprar é alta mas a prontidão agêntica da web local é baixa."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: "A identidade de marca perde a superfície onde era construída, a página, e precisa se afirmar dentro da resposta de um intermediário que ela não controla."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: "A disputa por atenção é substituída pela disputa por ser a ferramenta escolhida por padrão, e o default de um agente passa a valer mais que qualquer campanha."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não diz

**Os três ramos brigam entre si, e a briga é o achado.** D1 quer abrir a porta; D2 quer cobrar
por ela e verificar quem entra; D3 quer classificar quem abriu. Não são camadas empilhadas — são
interesses opostos de atores diferentes na mesma requisição. Um site que declara ferramentas
(D1) fica mais fácil de consumir e portanto mais barato de extrair, o que aumenta a pressão para
precificar (D2); mas precificar por requisição penaliza justamente o agente que faz centenas de
chamadas por sessão, que é o padrão de uso que D1 habilita. **A abertura e o pedágio crescem um
contra o outro.** O desfecho provável não é um vencer: é uma web com preço e identidade na porta
e capacidade declarada atrás dela, acessível a poucos agentes credenciados — o que é quase o
oposto do que a palavra "aberta" sugeria quando D1 começou.

**A 3ª ordem da publicidade é o efeito de que menos se fala e que mexe com mais dinheiro.**
`e2.1` já tem sinal forte — a queda de referência de 38% e as 60% de buscas sem clique são a
medida dela. Mas `e2.1.1` — patrocínio dentro da resposta do agente — desloca o objeto da
regulação publicitária de um espaço visível e auditável (o banner, com seu selo) para a saída de
um modelo, onde não há hoje nem padrão de divulgação nem forma prática de fiscalizar. Coloquei
confiança baixa porque o mecanismo é incerto, não porque o impacto seja pequeno.

**`e6` é o efeito mais seguro do mapa e o menos interessante de contar.** Sinal forte, prazo
2027, confiança alta: a métrica *já* se partiu, e o problema já é operacional para quem vende
mídia. Está aqui porque é âncora — se este efeito falhar, o mapa inteiro está errado desde a
premissa.

**O efeito que mais me incomoda é `e8.2`, invisibilidade por omissão.** Todos os outros têm
alguém decidindo algo. Esse não: ninguém bloqueia, ninguém cobra, ninguém proíbe — o site apenas
deixa de ser encontrável por uma classe de visitante cuja ausência não aparece em relatório
nenhum, porque o que não foi buscado não gera linha de log. É o único efeito do mapa que é
invisível para quem o sofre, e por isso o mais difícil de corrigir a tempo.

**Nada aqui vale igual em todo lugar.** Os prazos foram escritos com o eixo Estados
Unidos–Europa em mente, porque é lá que estão os atores de infraestrutura. Uma web menor, em
português, com prontidão agêntica baixa, pode receber D2 (a borda é a mesma, global, e a decisão
de bloquear é tomada em outro fuso) muito antes de receber D1 — ou seja, **pagar o pedágio antes
de ganhar a porta**. Esse é o cenário indesejável da seção 9, e não está no bloco YAML porque
não é um efeito: é uma assimetria de ordem de chegada.

## 6. Sinais fracos e wildcards

**Sinais fracos**

1. **O Claude Code é o que mais busca `llms.txt`.** Num estudo em que bot de retrieval de IA faz
   1,1% dos pedidos, o agente de programação aparece na frente de todos os bots de busca. O
   sinal: a porta de máquina pode estar nascendo como infraestrutura de *desenvolvimento*, não
   de consumo — quem lê máquina-a-máquina hoje é quem constrói, não quem navega.
2. **12% do tráfego de `llms.txt` é de ferramenta estudando o próprio arquivo** — validadores,
   scanners, pesquisa de injeção de prompt. Um ecossistema que se auto-observa mais do que é
   observado é um ecossistema pré-adoção, e essa proporção é um termômetro barato de quando a
   coisa virar real.
3. **O que morreu foi o agente-como-navegador, não o agente.** Atlas descontinuado em agosto de
   2026; Claude for Chrome de 40 mil a 10 milhões de instalações em seis meses. A porta de
   máquina vai ser negociada *dentro* do navegador que a pessoa já tem, o que dá a Google e
   Microsoft — donos de WebMCP — um poder de pauta que nenhum padrão aberto lhes deu.
4. **A Cloudflare anunciou evolução de *pay-per-crawl* para *pay-per-use*** — cobrar quando o
   conteúdo gera valor, não quando o bot busca. Mudança de vocabulário pequena, consequência
   enorme: exige que a borda observe o que o modelo faz depois de ler, o que é telemetria de uso
   de conteúdo dentro de um sistema de terceiro.
5. **Pontuação de prontidão média 38 em 100 num índice de 5.339 sites.** Não é sinal de adoção:
   é a medida de quanto falta. Vale acompanhar como série temporal — é o indicador mais direto
   que existe hoje para dizer se D3 sai do papel.
6. **O Brasil colocou a porta de máquina primeiro no pagamento** (MCP de Pix agêntico sobre Open
   Finance) e não na publicação. Ordem de chegada invertida em relação ao eixo global.

**Wildcards**

- **W1 — Um grande portal bloqueia todos os agentes e a audiência não nota.** Baixa
  probabilidade de virar política declarada, altíssimo impacto se acontecer e for medido: seria a
  prova pública de que a porta de máquina ainda não vale nada, e congelaria investimento em D1 e
  D3 por uns dois anos. Hoje o dado que mais se aproxima é o inverso disso (crawl-to-referral de
  50.000:1 sugere que o tráfego de máquina *não* devolve audiência), o que torna o bloqueio
  racional e o teste possível.
- **W2 — Uma injeção de prompt causa dano financeiro em escala através de ferramenta declarada,
  e um regulador responde exigindo confirmação humana para qualquer ação de agente.** Isso não
  atrasaria D1: mataria a parte executável dela e deixaria só leitura estruturada — a web
  reprojetada para máquina *ler*, nunca para máquina *agir*. É o wildcard de maior impacto do
  mapa, e o único com precedente técnico já documentado.
- **W3 — Os três maiores fabricantes de agente combinam um formato próprio de porta de máquina e
  ignoram o W3C.** Tecnicamente trivial (já fazem isso com Web Bot Auth, em produção antes de
  ser padrão), politicamente plausível, e o efeito seria substituir um padrão aberto por três
  portas privadas — com o site tendo de implementar as três, ou escolher para quem existe.
- **W4 — O contrário de tudo: o navegador passa a *gerar* a superfície de ferramenta a partir do
  DOM, bem o bastante para que declarar deixe de valer a pena.** Se a inferência automática
  ficar boa, D1 perde a razão econômica — ninguém mantém à mão o que a plataforma deduz de graça
  — e o tema inteiro desaba para "scraping bom", que é melhoria incremental e não entraria neste
  mapa. Probabilidade baixa, impacto total.

## 7. Contra o próprio mapa

### 7.1 Que efeito é só extrapolação linear do presente

**`e2.1` e `e6`, e assumo.** Os dois pegam curvas que já existem — queda de 38% na referência do
Google, 60% de buscas sem clique, crawler de IA de 22% para 52% — e as esticam. O problema é que
essas curvas têm um teto que não estou modelando: a queda de referência não pode passar de 100%,
e a fatia de crawler de IA não pode crescer indefinidamente sem que o custo de inferência a
limite. Pior: os 43% de queda em três anos que citei são **expectativa autodeclarada de
executivos de notícia**, não medição. Expectativa de setor pressionado é notoriamente
pessimista, e eu a usei como se fosse projeção. Mantive `e6` com confiança alta porque a
bifurcação da métrica já é fato operacional, mas **revisei `e5.2` de confiança média para baixa**
justamente por depender dessa extrapolação: a ideia de que a pauta se inverte em favor do que a
máquina paga só se sustenta se o preço de máquina virar receita relevante, e hoje ele está em
beta fechado.

**`e7.1` é extrapolação de analogia, que é pior que extrapolação de curva.** "Vai repetir o
SEO" é confortável e pode estar errado por um motivo específico: SEO cresceu porque o ranking
era opaco e havia margem para adivinhar. Um score de prontidão agêntica é *público e
verificável em sete sinais* — não há o que adivinhar, só o que implementar. Isso pode produzir
uma indústria de conformidade chata, não uma indústria de manipulação. Baixei a confiança de
`e7.1.1` e reescrevi o efeito para falar de disputa por legitimidade de auditoria, que é o que
sobra se a manipulação não vier.

### 7.2 Que efeito assume velocidade de adoção sem precedente comparável

**`e1` em 2028 é o mais exposto.** Ele assume que sites publicam contrato de capacidade
versionado em cerca de dois anos. O caso comparável mais próximo é **HTTPS**: levou cerca de uma
década para ir de minoria a padrão, e só acelerou quando houve (a) certificado gratuito
automatizado e (b) o navegador punindo quem não adotasse com um selo de "não seguro". WebMCP não
tem nenhum dos dois hoje. Um segundo comparável, **Schema.org**, é ainda menos animador: treze
anos, adoção parcial, e concentrada em quem tinha incentivo de busca. Se WebMCP seguir Schema.org
em vez de HTTPS, `e1` é 2033, não 2028, e tudo que depende dele desloca junto. **Mantive 2028
mas rebaixei o que vem abaixo**, e é por isso que `e1.2` está com sinal fraco apesar de derivar
de um efeito de confiança alta.

**`e4` em 2028 tem precedente melhor, e isso é o dado mais interessante desta seção.** Web Bot
Auth foi para produção em Cloudflare, Anthropic e OpenAI *antes* de ser padrão, e tem suporte em
AWS WAF, Vercel, Shopify e Akamai. O comparável é **HSTS/TLS na borda**: quando a adoção depende
de meia dúzia de operadores de infraestrutura e não de milhões de donos de site, ela é rápida.
Isso me obriga a uma conclusão que eu não tinha ao começar: **D2 é mais provável e mais rápida
que D1**, ao contrário da ordem em que o tema costuma ser contado. A porta de máquina vai ser
fechada e tarifada antes de ser construída.

**`e3.2`** (empresa proibir antes de liberar) não precisa de precedente: já está acontecendo,
com NCSC e Gartner recomendando contra. É o único efeito do mapa que já ocorreu e que datei no
passado recente.

### 7.3 Que disrupção-raiz pode simplesmente não se concretizar

**D3 é a mais frágil, e por larga margem.** Os números não sustentam um ranking nascendo:
5.339 sites, prontidão média 38, nenhum agente de mercado usando índice de prontidão como fonte
primária de descoberta. E existe um caminho inteiramente plausível em que D3 nunca acontece:
os agentes continuam descobrindo por busca convencional e por MCP configurado à mão, e a
"prontidão agêntica" vira mais uma métrica de painel de SEO — exatamente o destino do `llms.txt`.
O paralelo é desconfortável porque o `llms.txt` é um dos sete sinais que o score mede: **um
ranking construído sobre sinais que ninguém lê tem um problema de fundação**. Se D3 cair, caem
`e7`, `e7.1`, `e7.1.1`, `e7.2`, `e8`, `e8.1`, `e8.1.1` e `e8.2` — oito efeitos, e o mapa perde
justamente o ramo que mais fala com quem projeta.

**Se D3 cair, D1 e D2 se sustentam?** Sim, e de forma independente. D2 não precisa de descoberta
nenhuma: precisa de borda, chave e preço, e as três existem. D1 não precisa de ranking: precisa
de navegador, e o navegador é de quem escreveu o draft. O que se perde sem D3 não é a mecânica —
é o *mercado*. Sem descoberta por capacidade, quem decide qual ferramenta o agente chama é o
fabricante do agente, por default configurado. Isso não desmonta o mapa: **desloca-o para pior**,
porque troca um ranking público e gamificável por uma escolha privada e não auditável. `e9.2.1`
já dizia isso; a queda de D3 o promoveria de efeito distante a mecanismo central.

**D1 pode não se concretizar como *ação*.** Ver W2: basta um incidente sério de injeção de
prompt com dano financeiro para que a parte executável de D1 seja restringida a leitura. Nesse
mundo, a web é reprojetada para a máquina *ler* — e aí o mapa converge para D2 puro, uma web de
conteúdo estruturado, tarifado e assinado, sem ação de máquina. É um futuro mais próximo do
presente do que o mapa sugere.

**D2 é a que menos depende de acreditar em alguma coisa.** Se ela também não se concretizar, não
sobra mapa: sobra a web atual com resumo de IA em cima, que é o que a régua da disciplina
classifica como maduro.

### 7.4 Que viés entrou aqui

**Viés declarado:** neutro, sem preferência. Mas neutro não foi o resultado, e vale dizer onde.

**1. Viés de fonte de infraestrutura.** Metade do levantamento é Cloudflare — blog, documentação,
dados de crawler — e a Cloudflare é *parte interessada*: vende exatamente a solução que os dados
dela justificam. A razão crawl-para-referral de 50.000:1 e a fatia de 52% de crawler de IA vêm
de quem lucra com o pedágio. Não achei medição independente equivalente, e isso é limitação
séria do mapa, não detalhe. Onde o dado da Cloudflare sustenta um efeito, a confiança deveria
ser menor do que a que registrei.

**2. Viés de fonte secundária.** Muita coisa aqui — WebMCP, números de MCP, queda de referência,
o parágrafo do Brasil — entrou por resumo de busca ou por análise de terceiro, não por
especificação aberta. Abri oito fontes na íntegra; o resto está marcado na seção 11 e deveria
ser lido como indício, não como fato verificado. Não abri o draft W3C do WebMCP, o que é uma
falha, dado que D1 depende dele.

**3. Viés de novidade, e é o mais provável de ter distorcido o mapa.** Todo o incentivo do
exercício empurra para achar que a coisa vai acontecer — um mapa que conclui "não muda nada" não
parece trabalho. A evidência mais forte que encontrei aponta para o outro lado: 97% de arquivos
não lidos, menos de 3% de participação de navegador de IA, o produto mais ambicioso do setor
descontinuado, prontidão média 38. **Se eu estivesse otimizando por honestidade e não por
utilidade, a confiança global deste mapa seria baixa, não média.** Escolhi média porque D2 tem
adoção real de infraestrutura e sustentaria o mapa sozinha; registro que a escolha é discutível.

**4. Viés de composição na régua de corte.** "O que já é comum em produto de massa" fica de fora,
e eu apliquei isso globalmente, com números majoritariamente dos Estados Unidos e da Europa.
Algo pode ser massa lá e emergente aqui — e o inverso também, como mostra o caso do Pix agêntico.
O recorte "global com nota sobre o Brasil" esconde esse problema mais do que o resolve.

**5. Suposições por ausência de entrevista.** Os itens 3, 4 e 5 do Passo 1 foram assumidos
(tabela na seção 2). A mais consequente é a ausência de palpite do interlocutor sobre a
disrupção central: sem isso, a escolha das três raízes é inteiramente minha, e um interlocutor
com outra hipótese teria produzido outro mapa a partir do mesmo levantamento.

### 7.5 Resposta direta ao critério de mudança de ideia

Foi declarado que o mapa deveria ser revisto se a adoção já tivesse passado da maioria inicial
de Rogers, ou se a tecnologia só melhorasse o que existe. As duas respostas são parciais, e a
segunda é a que preocupa.

**Sobre Rogers.** Depende de qual camada se mede, e a divergência é grande demais para ser
ignorada. **Do lado de quem constrói agente**, MCP passou da maioria inicial: 10 mil servidores
em produção, 97 milhões de downloads mensais de SDK, três dos maiores fabricantes adotando, e
governança em fundação neutra. Por isso ele foi rejeitado como disrupção-raiz. **Do lado de quem
publica na web**, estamos em inovadores, talvez primeiros adeptos: prontidão média 38,
`pay-per-crawl` em beta fechado, WebMCP em Canary atrás de flag. **Do lado de quem navega**,
menos de 3% e um produto morto. O mapa se sustenta porque seu objeto é a segunda camada — mas
quem usar este documento precisa saber que *a primeira já passou*, e que ela puxa as outras.

**Sobre romper ou só melhorar.** Aqui há um argumento sério contra o mapa que eu não consigo
derrubar com evidência. Pode-se dizer com honestidade que WebMCP é OpenAPI dentro do navegador,
que `pay-per-crawl` é paywall com outro código HTTP, que Web Bot Auth é `User-Agent` com
assinatura, e que prontidão agêntica é SEO com outra checklist. Se essa leitura estiver certa, o
tema é melhoria incremental e este mapa não deveria existir pela régua da disciplina. **A defesa
que sustento é uma só, e é sobre quem descreve a capacidade:** em todos os quatro casos, o que
muda de lado é a autoridade — o site declara o que sabe fazer em vez de o cliente inferir; a
porta verifica em vez de confiar na declaração; o preço é negociado dentro da requisição em vez
de no contrato; a descoberta ordena por capacidade declarada em vez de por comportamento
observado. Isso muda *quem pode fazer o quê sem pedir a ninguém*, e é por isso que passa no
teste 1. Mas registro que a contra-leitura é defensável, e que um leitor cético do exercício não
está sendo desatento ao propô-la.

## 8. O que a máquina errou

**1. `llms.txt` como disrupção-raiz — o erro central desta rodada.** Na primeira passagem, ele
entrou como disrupção-raiz, com a justificativa "rompe a ideia de que o site se publica para
olhos; por que agora: virou convenção citada em todo material sobre web agêntica". Nada disso
era inventado — o arquivo existe, a convenção é citada, há ferramenta que o mede. **O erro foi
não perguntar se alguém lê.** A busca por crítica ao formato trouxe o estudo de 137.210 domínios:
97% dos arquivos sem uma requisição em maio de 2026, bot de retrieval de IA em 1,1% dos pedidos,
zero pedidos de bot de IA para arquivos inexistentes, e a declaração do Google de que não há
suporte nem plano. Pelo teste 1 do critério, a resposta honesta a "o que isso rompe?" é **nada
verificável**. É o mesmo erro documentado em `DUVIDAS.md` numa variante nova: lá, um fato
correto foi classificado como emergente quando era maduro; aqui, uma convenção real foi
classificada como disruptiva quando é **inerte**. O vetor do erro é o mesmo — confundir
"aparece em todo lugar no discurso" com "tem efeito". Corrigido, `llms.txt` desceu para a seção
3 e virou o contraexemplo mais útil do mapa.

**2. MCP como disrupção-raiz.** Entrou na primeira lista por ser o item mais forte do tema.
Caiu no teste 3, aplicado por escrito: o que falta para se concretizar? Nada — produção,
governança em fundação neutra, três fabricantes, 97 milhões de downloads mensais. Isto é
infraestrutura adotada. Sem escrever a resposta, a intuição ("é novo, é de 2024, é o assunto do
momento") teria deixado passar.

**3. Número divergente sobre o tamanho do Not Human Search, e nenhuma das duas versões era
minha.** O enunciado do tema diz "9.000+ ferramentas e APIs"; a descrição do repositório diz
"8.000+ indexed sites"; o site, aberto em 17/09/2026, dizia **5.339 sites indexados, média de
prontidão 38**. Adotei o número do site por ser a fonte primária e por ser o mais recente, e
registro a divergência em vez de escolher em silêncio. A desconfiança aqui não é sobre o
projeto: é sobre **números redondos de terceiro sobre índices pequenos**, que crescem na
citação. Se eu tivesse citado "9.000+", teria repetido um número que nenhuma fonte primária
confirma.

**4. Confundi a data do `signed agents` da Cloudflare.** Ao escrever a seção 3 na primeira
passagem, datei o anúncio em 2026, por contágio com o resto do material, que é quase todo de
2026. O post, aberto na íntegra, é de **28 de agosto de 2025**. Corrigido. A desconfiança que
levou à checagem: quando todas as datas de um levantamento caem no mesmo ano, é mais provável
que eu esteja arredondando para o presente do que que o mundo tenha acontecido todo em doze
meses.

**5. Atribuí a morte do Atlas ao produto, e não ao formato.** A primeira redação dizia "o
navegador agêntico não pegou". A leitura do material corrige: o que não pegou foi **o agente
como navegador**. O agente pendurado no navegador existente cresceu de 40 mil para mais de 10
milhões de instalações em seis meses. A conclusão muda de direção: não é que a porta de máquina
não interessa; é que ela vai ser negociada dentro do navegador que a pessoa já usa — o que
concentra poder em quem escreveu o WebMCP. Errar isso teria invertido o sinal de `e1`.

**6. Superestimei a maturidade do `pay-per-crawl` em `e5`.** Escrevi o efeito dos dois preços com
confiança média, como se a cobrança de máquina fosse mercado. A documentação, aberta, diz
**beta fechado**, e o preço é por zona, não por requisição. Isso não derruba o efeito — o x402
mostra que máquina paga máquina em volume real —, mas obrigou a rebaixar `e5.2` para confiança
baixa e a separar, no texto, o que é produto disponível do que é intenção anunciada
(`pay-per-use`).

**7. Onde parei de derivar, e por quê.** Cortei três efeitos que não passaram do teste de
especificidade do Passo 5. "A web se fragmenta" — não é efeito, é a ausência de um. "A confiança
do usuário na internet diminui" — não é verificável nem específico, e serve para qualquer tema
de tecnologia, que é exatamente o tipo de ideia óbvia a excluir. "Novas profissões surgem" —
vago; virou `e1.1.1`, com nome e recorte. Os três estão no anexo.

**8. O que não consegui verificar e deixo declarado como especulação minha, não como achado.**
Todo o ramo de 3ª ordem sobre regulação (`e2.1.1`, `e2.2.1`, `e3.1.1`, `e4.2.1`) não tem fonte:
não encontrei iniciativa regulatória em curso sobre divulgação de publicidade em saída de modelo
nem sobre responsabilidade por ação induzida em agente. São derivações minhas a partir de
mecanismo, marcadas com sinal fraco e confiança baixa. Não as atribuo a ninguém.

## 9. Três cenários para 2031

### Provável — "a porta tem cadeado, fechadura e preço, e pouca coisa atrás"

2031. A parte que se concretizou é a que dependia de menos gente: a borda. Identidade
criptográfica por requisição é o normal — agente sem chave em registro reconhecido simplesmente
não lê a web comercial, e isso não foi decidido por padrão nenhum, foi decidido por três ou
quatro operadores de infraestrutura que implementaram antes de haver padrão e viraram o padrão
por consumação. Preço por acesso de máquina existe, mas não é o mercado que se imaginou: é
licença negociada entre os grandes, e tabela de intermediário para todos os outros. Quem publica
pequeno descobriu que "cobrar da máquina" na prática significa aceitar o preço que a borda
definir.

A capacidade declarada avançou menos e mais devagar que a fechadura — trajetória de Schema.org,
não de HTTPS. Existe em comércio, viagem, serviço financeiro, onde a chamada tem valor unitário
claro. Fora disso, o agente continua lendo HTML, só que agora paga para ler. Descoberta por
prontidão agêntica não virou ranking: virou aba num painel de SEO, ao lado de outras métricas que
ninguém aciona. Quem escolhe qual ferramenta o agente chama é o fabricante do agente, por default
— e essa escolha não é pública, não é auditável e não tem preço de tabela.

Para quem projeta mídia e interação, o dia a dia mudou de um jeito pouco glamouroso: duas saídas
para o mesmo trabalho, duas métricas que não se somam, e uma discussão nova e permanente sobre
quais ações o produto autoriza a quem. A interface não morreu. Ganhou uma irmã mais silenciosa e
mais barata de errar.

### Desejável — "duas portas, uma fonte, um padrão de verdade"

2031. WebMCP virou baseline entre navegadores, e a declaração de capacidade é gerada a partir da
mesma fonte canônica que gera a página — um conteúdo, duas saídas, sem divergência, porque a
divergência foi tratada como defeito de build e não como trabalho editorial extra. Isso resolveu
o problema que quase matou a ideia: manter duas verdades sobre o mesmo fato a mão.

Identidade de agente é padrão IETF fechado, com registro federado em que uma pessoa consegue
publicar chave sem pedir licença a uma empresa — foi isso que evitou que "poder operar um agente"
virasse privilégio de fabricante grande. Cobrança existe e é por uso, não por busca, com
divulgação obrigatória de quando uma resposta de agente é patrocinada. Descoberta por capacidade
é auditável por terceiro independente, e o score não se apoia só no que o site declara sobre si.

**O que teria de acontecer para chegar aqui, e nenhuma das quatro é fácil:** (a) o Google
implementar WebMCP em estável e *não* condicioná-lo ao próprio agente; (b) o WebBotAuth WG
fechar antes de a implementação privada se tornar irreversível, o que significa correr contra
um sistema que já está em produção; (c) alguém resolver injeção de prompt bem o bastante para
que ação de máquina seja liberada em ambiente organizacional — hoje NCSC e Gartner dizem o
contrário; (d) reguladores tratarem resposta de agente como espaço publicitário antes de o
patrocínio nela virar prática consolidada.

**Sinal precoce de que estamos nesta trajetória:** prontidão agêntica média subindo de 38 para
acima de 60 num índice cuja metodologia é pública, *e* auditada por quem não a opera.

### Indesejável — "o pedágio chegou primeiro, a porta não chegou"

2031. A fechadura e o preço se generalizaram; a capacidade declarada, não. O resultado é o pior
arranjo possível: a web ficou mais cara de ler para máquina sem ficar mais útil para ninguém.
Agentes voltaram a raspar HTML, agora pagando por isso, e o custo foi repassado a quem assina
agente. Três fabricantes mantêm portas privadas incompatíveis — o cenário W3 —, e um site que
queira ser chamável implementa as três ou escolhe para quem existe. Os que não implementam
nenhuma não foram bloqueados: ficaram invisíveis por omissão, e não têm como saber, porque o que
não foi buscado não gera log.

A assimetria geográfica é a parte que menos se noticiou e mais pesou. Uma web em português
pagou o pedágio — a borda é global, e a decisão de bloquear e tarifar foi tomada em outro fuso —
sem receber a porta, porque a porta depende de investimento local que não houve. A prontidão
agêntica da web local ficou onde estava, enquanto a disposição de usar agente para comprar
continuou alta. Quem capturou o valor foi quem opera o trilho de pagamento e a borda, não quem
publica.

Para as pessoas, a web se dividiu em duas qualidades de serviço, e a diferença não é de banda:
é de credencial. Quem assina agente atravessa; quem não assina navega uma web que deixou de ser
o lugar onde se investe. "Visitar um site" sobreviveu como gesto, mas perdeu a centralidade — e
o acesso à camada rápida passou a custar uma assinatura mensal.

**Sinal precoce, disponível hoje:** a razão entre sites com preço de máquina configurado e sites
com capacidade declarada. Se a primeira crescer mais rápido que a segunda por mais de dois anos
seguidos, este é o cenário em curso. Um segundo sinal, mais barato de medir: a prontidão média de
um índice agêntico **estagnada** perto de 38 enquanto o bloqueio por padrão se generaliza.

## 10. O experimento

### O que é

**Duas portas, um conteúdo, seis semanas de log.**

Pegar uma coisa pequena e real que já se publica — o cardápio de um restaurante, o catálogo de
uma biblioteca de departamento, a agenda de um espaço cultural, os horários de uma disciplina —
e publicá-la simultaneamente em duas portas, a partir de **uma fonte canônica única**:

1. **Porta humana:** a página, como sempre.
2. **Porta de máquina:** capacidade declarada — um servidor MCP mínimo com duas ou três
   ferramentas tipadas (`consultar`, `verificar_disponibilidade`, `reservar`) e, onde o
   navegador permitir, a declaração via `navigator.modelContext` atrás de flag.

Instrumentar tudo o que entra em cada porta, separando por identidade: humano, bot declarado,
agente com assinatura Web Bot Auth, agente sem identidade. E instrumentar o que ninguém mede:
**pedidos que chegam e não são atendidos** — ferramenta que o agente tentou chamar e não existe,
caminho que buscou e não achou. Essa é a medição que o `llms.txt` nunca teve e que produziu os
97%.

Depois, três coisas adicionais, todas pequenas:

- **Submeter o site a um índice de prontidão agêntica** (o Not Human Search aceita submissão) e
  registrar o score inicial, os sete sinais medidos e o que muda no score ao acrescentar cada
  sinal. É o jeito mais barato de descobrir se o score mede capacidade ou só conformidade.
- **Colocar preço numa das ferramentas** — resposta `HTTP 402` com preço, atendida por x402 em
  valor irrisório, centavos — e ver se algum agente paga sem humano no meio. É a única parte do
  experimento que testa D2, e é a que dá para fazer hoje, porque o x402 é aberto enquanto o
  `pay-per-crawl` está em beta fechado.
- **Divergir de propósito, na semana quatro.** Mudar um preço ou um horário só na página, não na
  ferramenta, e medir quanto tempo a divergência sobrevive sem ser notada, e por quem. É o teste
  de `e8.1.1`, e o mais desconfortável de rodar.

### Que pergunta sobre o futuro ele ajuda a responder

**A pergunta central do mapa: alguém entra pela segunda porta?** Não "é possível construir" —
isso já se sabe. E sim: quando existe uma porta de máquina numa coisa pequena e real, chega
tráfego de agente *não convidado*? Se chegar, D1 e D3 têm base. Se não chegar — se as ferramentas
só forem chamadas quando eu mesmo aponto um agente para elas —, então a porta de máquina em 2026
é o que o `llms.txt` foi em 2025: uma convenção que se publica e ninguém busca. Os 97% do estudo
da Ahrefs são a hipótese nula deste experimento, e ela é forte.

Três perguntas subordinadas, todas com resposta mensurável em seis semanas: o custo de manter
duas portas é marginal ou é um segundo produto (`e8.1`)? Máquina paga máquina por valor
irrisório sem humano no ciclo (`e5`)? O score de prontidão mede capacidade ou conformidade
(`e7.1`)?

### Que tecnologia emergente ele usa, e por que a madura não serve

**Usa:** servidor MCP, `navigator.modelContext` atrás de flag, verificação de Web Bot Auth por
assinatura de requisição, `HTTP 402` com liquidação por x402, submissão a índice de prontidão
agêntica.

**Por que API REST documentada não serve para o mesmo fim.** Uma API REST responde à pergunta
"dá para integrar?", e a resposta é sim desde sempre — é o teste 1 do critério: mais rápido e
mais barato fazer o que já se fazia. O que o experimento testa é outra coisa: **se a capacidade
declarada é encontrada e chamada sem integração combinada previamente**. REST exige que alguém
leia documentação, obtenha chave e escreva cliente — há um humano acordando com outro humano no
meio. Ferramenta declarada, identidade assinada e preço no ciclo da requisição existem
justamente para tirar esse acordo prévio do caminho. Só dá para medir "chegou sem ser
convidado" em cima de tecnologia que permite chegar sem ser convidado.

**E por que um paywall comum não serve para a parte do preço.** Paywall pressupõe conta, sessão
e cartão — pressupõe um humano que se cadastrou. O `HTTP 402` liquidado em stablecoin testa
exatamente a hipótese oposta: decisão de pagar dentro de um ciclo de requisição, em valor
fracionário, sem conta. Se o valor for baixo o bastante, nenhum meio de pagamento maduro
consegue processá-lo sem que a taxa engula o preço.

### O que faria quem testar mudar de ideia sobre o mapa

Quatro resultados, cada um derrubando uma parte específica:

| Resultado | O que ele derruba |
|---|---|
| Zero chamadas não convidadas em seis semanas, com o site indexado e pontuado | **D1 e D3 caem.** A porta de máquina é `llms.txt` outra vez: publica-se, ninguém busca. O mapa se reduz a D2 e o cenário indesejável sobe a provável. |
| Chegam chamadas, mas só de crawler de treino e ferramenta de auditoria — nenhum agente de usuário | D1 vira **infraestrutura de desenvolvedor**, não superfície de consumo. Confirma o sinal fraco nº 1, e `e2` (funil encurta) desloca-se de 2028 para depois de 2031. |
| Manter as duas portas custa pouco e a divergência da semana quatro é detectada em horas | `e8.1` está **superestimado**: não há segundo produto, há um build a mais. Boa notícia, e obriga a subir a confiança de `e1` — a objeção do Schema.org enfraquece se o custo marginal for baixo. |
| Um agente paga os centavos sem humano no ciclo | **D2 acelera e ultrapassa D1 com folga.** Reforça a conclusão de 7.2 que eu não esperava: a web é tarifada antes de ser construída, e o cenário indesejável ganha o sinal precoce que ele precisava. |

O experimento é barato — dois fins de semana de trabalho e algumas dezenas de centavos em
liquidação — e tem a propriedade que interessa num exercício de futuro: **ele pode me
desmentir em seis semanas**, e o resultado mais provável, pela evidência atual, é que desminta.

## 11. Fontes

### Abertas e lidas na íntegra (8)

1. **x402 — site oficial do protocolo** · `https://x402.org/`
   *Sustenta:* D2, `e4`, `e5`, e a parte do preço no experimento. Números de adoção dos últimos
   trinta dias (75,41M transações, US$ 24,24M, 94.060 compradores, 22.000 vendedores),
   governança pela x402 Foundation sob a Linux Foundation, agnosticismo de blockchain.
   *Confiabilidade:* fonte primária para o protocolo, **mas é autopublicação de números pela
   própria fundação**, sem auditoria independente à vista. Trate volume e contagem de
   participantes como declarados, não verificados.

2. **Cloudflare — "Pay Per Crawl" (documentação)** ·
   `https://developers.cloudflare.com/ai-crawl-control/features/pay-per-crawl/`
   *Sustenta:* a existência do produto e sua posição no portfólio de AI Crawl Control.
   *Confiabilidade:* documentação primária do fornecedor. Esta página é índice e tem pouco
   conteúdo substantivo — daí a leitura da subpágina abaixo.

3. **Cloudflare — "What is Pay Per Crawl?"** ·
   `https://developers.cloudflare.com/ai-crawl-control/features/pay-per-crawl/what-is-pay-per-crawl/`
   *Sustenta:* o mecanismo de D2 (`HTTP 402` com preço, `HTTP 200` com intenção de pagamento no
   cabeçalho), Cloudflare como *merchant of record*, preço por zona, precedência de WAF e Bot
   Management sobre a cobrança, e — o dado que mais corrigiu o mapa — o **estado de beta
   fechado**, que levou ao rebaixamento de `e5.2` (seção 8, item 6).
   *Confiabilidade:* primária e específica. Descreve o próprio produto do fornecedor, então é
   confiável sobre mecanismo e estado, e não é fonte neutra sobre mérito.

4. **Cloudflare — "The age of agents: cryptographically recognizing agent traffic"** ·
   `https://blog.cloudflare.com/signed-agents/`
   *Sustenta:* Web Bot Auth em produção, o primeiro lote de agentes assinados (ChatGPT agent,
   Goose/Block, Browserbase, Anchor Browser), a capacidade de o dono do site tratar agentes
   assinados como grupo nas regras de segurança, e a data **28 de agosto de 2025** — que corrigiu
   o erro de datação registrado na seção 8, item 4.
   *Confiabilidade:* primária para o que a Cloudflare implementou. **Parte interessada:** é a
   principal beneficiária do arranjo que descreve, o que está registrado como viés nº 1 em 7.4.

5. **Wikipédia — Model Context Protocol** ·
   `https://en.wikipedia.org/wiki/Model_Context_Protocol`
   *Sustenta:* a **rejeição** do MCP como disrupção-raiz (seção 4) e a linha do tempo da seção 3:
   lançamento em 25/11/2024, adoção pela OpenAI em março de 2025 e pelo Google DeepMind em abril
   de 2025, doação à Agentic AI Foundation em dezembro de 2025, mais de 10 mil servidores e 97M+
   de downloads mensais de SDK em meados de 2026, revisão de 28/07/2026, e as vulnerabilidades
   de injeção de prompt identificadas em abril de 2025 (base de `e3`).
   *Confiabilidade:* terciária, com boa densidade de datas e citações. Boa para cronologia,
   fraca para número — as métricas de adoção vêm de fontes secundárias que não abri.

6. **Ahrefs — "We Analyzed 137K Sites: 97% of llms.txt Files Never Get Read"** ·
   `https://ahrefs.com/blog/llmstxt-study/`
   *Sustenta:* **a correção central deste mapa** (seção 8, item 1) e a rejeição do `llms.txt`
   pelo teste 1. Metodologia (137.210 domínios, maio de 2026, logs de servidor, 12 categorias de
   bot, validação de Markdown), 28% de adoção declarada como teto por enviesamento da amostra,
   97% dos arquivos sem requisição, distribuição por categoria de bot, retrieval de IA em 1,1%,
   Claude Code à frente de todo bot de busca, zero pedidos de bot de IA para arquivo inexistente,
   e os 12% de tráfego de ferramenta que estuda o próprio arquivo (sinal fraco nº 2).
   *Confiabilidade:* **a melhor fonte do levantamento.** Metodologia explícita, amostra grande,
   e — o que mais importa — **declara o próprio viés de amostra** e publica um resultado contrário
   ao interesse comercial de quem vende visibilidade em busca. É secundária, e não dá para
   reproduzir sem os logs.

7. **Wikipédia — AI browser** · `https://en.wikipedia.org/wiki/AI_browser`
   *Sustenta:* a distinção entre navegador de IA e navegador agêntico, a vulnerabilidade a
   injeção de prompt via conteúdo de página (`e3`), e a recomendação contrária de NCSC e Gartner
   para adoção organizacional (`e3.2`, e a restrição do cenário desejável).
   *Confiabilidade:* terciária e, aberta em 17/09/2026, **mais atrasada que o resto do
   levantamento** — não traz a descontinuação do Atlas nem os números de instalação, que entraram
   por resumo de busca e estão marcados abaixo. Boa para conceito e risco, insuficiente para
   estado de mercado.

8. **Not Human Search** · `https://nothumansearch.ai/`
   *Sustenta:* D3 e o contorno dela. **5.339 sites indexados e prontidão média 38** em 17/09/2026,
   pontuação de 0 a 100 em sete sinais (`llms.txt`, OpenAPI, MCP, Schema.org e outros), servidor
   MCP em `https://nothumansearch.ai/mcp` com as ferramentas `search_agents`, `get_site_details`,
   `get_stats` e `submit_site`, e a autodescrição "built for agents, by agents", ligada a uma
   operação chamada the Foundry.
   *Confiabilidade:* primária para o próprio índice; projeto pequeno, sem metodologia de
   pontuação publicada que eu tenha aberto. Os números daqui **contradizem** as duas citações de
   terceiros (9.000+ e 8.000+) — divergência registrada na seção 8, item 3.

### Consultadas por resumo de busca, não abertas na íntegra — indício, não fato verificado

Declaro estas separadamente porque o Passo 9 da skill exige distinguir o que foi lido do que foi
apenas visto em resultado de busca. **Nada abaixo deve ser citado como verificado por mim.**

- **WebMCP / `navigator.modelContext`** — draft W3C de 10/02/2026, co-desenvolvimento
  Google + Microsoft, Chrome 146 Canary atrás de flag, estável previsto para o quarto trimestre
  de 2026, estimativa de baseline entre navegadores em 18–24 meses, ganho de ~89% em eficiência
  de token. Fonte: resultados de busca (dev.to, developersdigest, buildmvpfast, agentmarketcap,
  visby.ai). **Não abri o draft W3C, o que é a falha de levantamento mais séria deste mapa**,
  já que D1 depende inteiramente dele. Registrado como viés nº 2 em 7.4.
- **Web Bot Auth no IETF** — grupo de trabalho formal, RFC 9421 como base, suporte em AWS WAF,
  Vercel, Shopify e Akamai, registro aberto de chaves anunciado em fevereiro de 2026 com Amazon
  Bedrock AgentCore. Fonte: resultados de busca (stellagent, nerdleveltech, aws.amazon.com,
  datatracker.ietf.org). Não abri o draft nem as atas.
- **Economia de crawler** — 52% das requisições de crawler ligadas a IA em junho de 2026 contra
  22% na primavera de 2025; razão crawl-para-referral de 118:1 a ~50.000:1; bloqueio padrão de
  crawler de uso misto em páginas com anúncio a partir de 15/09/2026; pay-per-crawl com Stack
  Overflow; evolução anunciada para *pay-per-use*. Fonte: resultados de busca (TechCrunch,
  Stack Overflow Blog, The Register, technology.org). **Os números de origem são da Cloudflare**,
  parte interessada — viés nº 1 em 7.4.
- **Queda de tráfego e AEO** — referência do Google -38% ano a ano no início de 2026; ~60% de
  buscas sem clique; expectativa de queda de 43% em três anos declarada por executivos de
  notícia; citação em AI Overviews associada a +35% de cliques orgânicos. Fonte: resultados de
  busca (Search Engine Land, Similarweb, HubSpot, xseek). **Mistura medição com expectativa
  autodeclarada**, e eu usei as duas juntas — apontado em 7.1 como o problema metodológico da
  extrapolação de `e2.1` e `e6`.
- **Posição do Google sobre `llms.txt`** — Mueller no *Search Off the Record* e no Bluesky
  ("nenhum sistema de IA usa llms.txt hoje"), comparação com a meta tag *keywords*, Gary Illyes
  no Search Central Live confirmando ausência de suporte e de plano, documentação de junho de
  2026 declarando efeito nulo. Fonte: resultados de busca (Search Engine Journal, Search Engine
  Roundtable, shopifreaks). Não abri o podcast nem a documentação do Google. O dado quantitativo
  que sustenta a mesma conclusão **está** verificado, na fonte 6.
- **Mercado de navegador agêntico** — Atlas descontinuado em 09/08/2026 com a capacidade movida
  para o app e para extensão de Chrome; conjunto de navegadores de IA abaixo de 3% de
  participação; Claude for Chrome de ~40 mil para 10M+ de instalações entre dezembro de 2025 e
  junho de 2026; Comet no Android em 19/08/2026 e no Samsung Internet. Fonte: resultados de busca
  (searchviu, digitalapplied, thezeronet, humansecurity). Sustenta o sinal fraco nº 3 e a
  correção do item 5 da seção 8.
- **Brasil** — MCP de pagamentos agênticos via Pix pelo Iniciador sobre Open Finance; R$ 3
  bilhões de investimento bancário em IA no ano; 76% de brasileiros com intenção de usar IA para
  comprar contra 44% nos EUA; ausência de regime jurídico de responsabilização e de
  regulamentação do Banco Central. Fonte: resultados de busca (Finsiders Brasil, Celcoin,
  Capital Aberto, Vanquish). **Imprensa setorial, com os números vindos de fonte de mercado** —
  o de 76% em especial não tem metodologia à vista. Sustenta a nota da seção 3 e `e9.1.1`, os
  dois marcados como fracos.

### Especulação própria, sem fonte

Declarado aqui para que não seja confundido com achado:

- Todo o ramo de 3ª ordem sobre regulação — `e2.1.1` (divulgação de patrocínio em saída de
  modelo), `e2.2.1` (auditoria de consentimento por esquema e log), `e3.1.1` (distinção jurídica
  entre ação autorizada e ação induzida), `e4.2.1` (deslocamento da governança para contrato
  privado). Não encontrei iniciativa regulatória em curso sobre nenhum dos quatro. São
  derivações de mecanismo, com sinal fraco e confiança baixa.
- Os quatro wildcards da seção 6. W1 é o wildcard proposto pelo enunciado do tema; W2, W3 e W4
  são meus. Nenhum tem fonte, por definição.
- Os comparáveis de velocidade de adoção invocados em 7.2 — HTTPS, Schema.org, HSTS/TLS na borda
  — vêm de conhecimento geral, não de fonte aberta nesta rodada. O argumento que construo sobre
  eles ("HTTPS acelerou por certificado gratuito automatizado e por punição no navegador") é
  minha leitura, não citação.

## 12. Anexo — o levantamento bruto

### A.1 Ordem real do trabalho

1. Leitura de `SKILL.md`, `ESTUDO.md` e `DUVIDAS.md` em
   `/Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/turma/alpa2/`.
   `TESTE.md` não foi lido por inteiro — só a referência a ele em `DUVIDAS.md`. Registro a
   omissão.
2. Passo 1 (entrevista) **não pudo ser conduzido**: rodada sem interlocutor. Itens 1 e 2 vinham
   dados; 3, 4 e 5 assumidos conforme a tabela da seção 2 e declarados em 7.4, item 5, como a
   skill exige de quem "pula a entrevista".
3. Oito buscas na web, oito páginas abertas. Lista completa em A.2 e A.3.
4. Passo 2 aplicado por escrito a sete candidatos. Três aprovados, quatro rejeitados (tabela na
   seção 4). As duas rejeições que doeram — MCP e `llms.txt` — estão na seção 8.
5. Roda derivada; três efeitos cortados por falta de especificidade (A.4).
6. Passo 6 (contestação) produziu três revisões efetivas, não cosméticas: `e5.2` de média para
   baixa; `e7.1.1` reescrito de "repetição do SEO" para "disputa por legitimidade de auditoria";
   `e1` mantido em 2028 mas com o ramo abaixo rebaixado, após a objeção do Schema.org. E uma
   conclusão que inverteu a ordem do tema: **D2 antes de D1**.
7. Montagem no formato do Passo 10.

### A.2 Buscas feitas, e o que cada uma rendeu

| Consulta | Rendeu |
|---|---|
| `Model Context Protocol adoption 2026 agentic web llms.txt` | Cronologia e escala de MCP; Linux Foundation; primeira menção a WebMCP |
| `Cloudflare pay-per-crawl AI crawlers 2026` | Os números de crawler; a data de 15/09/2026; Stack Overflow; a promessa de *pay-per-use* |
| `WebMCP W3C standard browser agent 2026` | Draft de 10/02/2026, Chrome Canary, Google+Microsoft, previsão de estável — **tudo por resumo, nenhuma fonte primária aberta** |
| `x402 protocol HTTP 402 agent payments per request 2026` | Mecânica do ciclo de quatro passos; Coinbase; levou a abrir x402.org |
| `Web Bot Auth IETF signed agents Cloudflare 2026 verified bots` | WG no IETF; RFC 9421; adoção em AWS/Vercel/Shopify/Akamai; levou a abrir o blog da Cloudflare |
| `AI referral traffic decline publishers 2026 answer engine optimization AEO` | -38%, 60% zero-click, expectativa de -43%; **a mistura de medição com expectativa que 7.1 critica** |
| `llms.txt adoption criticism Google John Mueller "llms.txt" 2026` | **A busca mais produtiva da rodada.** Trouxe a posição do Google e o estudo da Ahrefs, e derrubou uma disrupção-raiz |
| `"Not Human Search" agent-ready search engine agents index APIs` | A URL do índice e a descrição do repositório (8.000+), que depois se mostrou divergente do site (5.339) |
| `Brasil agentes de IA Pix agêntico Banco Central 2026` | A nota sobre o Brasil; MCP de Pix do Iniciador; 76% vs 44%; ausência de regulamentação |
| `agentic browser adoption share 2026 Comet Atlas ChatGPT Atlas market share` | Atlas descontinuado; <3% de participação; Claude for Chrome 40k→10M; **corrigiu a leitura do item 5 da seção 8** |

**Buscas que não foram feitas e deveriam:** especificação do WebMCP no W3C (a lacuna mais séria);
drafts do WebBotAuth no datatracker do IETF; Agent2Agent do Google, que está no enunciado do
tema e ficou de fora por completo; discussões em Hacker News e no W3C/IETF, que o enunciado
sugere como fonte e que não consultei; `Foil`, `Bonnard`, `Composio`, `ACI.dev`, `Klavis` e os
servidores MCP citados pela turma (`photoshop-mcp`, `overture-mcp`, `openrouter-mcp`), que
apareceriam na seção 3 se eu tivesse orçamento de busca para eles.

### A.3 Páginas efetivamente abertas

`x402.org` · `developers.cloudflare.com/ai-crawl-control/features/pay-per-crawl/` ·
`.../what-is-pay-per-crawl/` · `blog.cloudflare.com/signed-agents/` ·
`en.wikipedia.org/wiki/Model_Context_Protocol` · `ahrefs.com/blog/llmstxt-study/` ·
`en.wikipedia.org/wiki/AI_browser` · `nothumansearch.ai/`

Uma tentativa falhou de forma útil: a página-índice do `pay-per-crawl` não tinha conteúdo
substantivo, o que obrigou a abrir a subpágina — e foi ali que apareceu o "beta fechado", que
mudou `e5.2`. Registro porque é o tipo de coisa que se perde: **o dado que mais corrigiu o mapa
veio de uma segunda tentativa depois de uma leitura frustrada.**

### A.4 Efeitos cortados, e por que

| Efeito descartado | Motivo |
|---|---|
| "A web se fragmenta em duas webs" | Não é efeito, é rótulo. Falha o teste de especificidade do Passo 5 — "tudo vai mudar" não é análise. O conteúdo sobreviveu distribuído em `e4.1`, `e8.2` e `e9.1` |
| "A confiança do usuário na internet diminui" | Não verificável, não específico, e serve para **qualquer** tema de tecnologia — exatamente a ideia óbvia que o recorte manda excluir |
| "Novas profissões surgem" | Vago. Reescrito com nome e recorte em `e1.1.1` |
| "O SEO morre" | Falso pelo próprio levantamento: citação em AI Overviews associada a +35% de cliques orgânicos. O que muda é o objeto da otimização, não a existência dela. Virou `e7.1` |
| "Agentes negociam preço entre si em leilão" | Cortado por ser tema vizinho (tema 5, pagamento e comércio por agentes), não por implausibilidade |

### A.5 Rodadas descartadas de disrupção-raiz

**Primeira lista (descartada inteira):** `llms.txt`, MCP, pay-per-crawl. Duas das três caíram no
Passo 2 — é a razão de o Passo 2 existir, e não foi confortável.

**Segunda lista (descartada parcialmente):** WebMCP, Web Bot Auth, x402, prontidão agêntica —
quatro raízes. Colapsei Web Bot Auth e x402 numa só (D2) porque derivavam efeitos quase
idênticos: as duas tratam da porta como ponto de verificação e cobrança, e separá-las produzia
duplicação de `e4` e `e5` sem ganho analítico. **Isto é uma escolha discutível**: um analista
poderia argumentar que identidade e preço são disrupções distintas, já que uma pode acontecer sem
a outra — e, de fato, identidade já está em produção enquanto preço está em beta fechado. Quem
retomar este mapa pode querer desfazer a fusão.

**Candidato que não entrou em nenhuma lista e talvez devesse:** Agent2Agent (Google) —
comunicação agente-a-agente. Ficou fora porque o objeto deste tema é a web como plataforma, e
A2A é coordenação entre agentes, não reprojeto da web. Mas se D3 falhar e a descoberta passar a
acontecer por negociação entre agentes em vez de por índice, **A2A é o que ocupa o lugar de D3** —
e aí este mapa tem um buraco onde deveria ter um ramo.

### A.6 Tensões não resolvidas, deixadas abertas de propósito

1. **D1 e D2 crescem uma contra a outra** (abertura × pedágio). O mapa registra a tensão na prosa
   da seção 5 mas **não a modela** — não há efeito que represente a interação entre os dois
   ramos, porque o formato de roda deriva em árvore e não em rede. É limitação do método, não
   esquecimento, e vale dizer que o Futures Wheel, conforme o `ESTUDO.md`, não prioriza nem julga
   os efeitos que gera.
2. **Os prazos são do eixo EUA–Europa.** Uma web em português pode receber D2 antes de D1 — pagar
   o pedágio antes de ganhar a porta. Isso está no cenário indesejável e em `e9.1.1`, mas não no
   bloco YAML, porque não é efeito: é assimetria de ordem de chegada, e o formato não tem campo
   para isso.
3. **A fronteira entre 2ª e 3ª ordem em `e4.1.1` e `e9.2.1` é discutível.** Os dois poderiam ser
   2ª ordem. Mantive em 3ª porque descrevem reorganização de quem tem poder, não consequência
   direta — mas o `ESTUDO.md` já avisa que a fronteira não é objetiva e que dois analistas podem
   discordar sobre a ordem do mesmo efeito.
4. **`e6` tem confiança alta e `e5` tem confiança média, e os dois dependem da mesma economia.**
   Se a cobrança de máquina nunca virar mercado, `e6` continua verdadeiro (a métrica já se
   partiu, independentemente de preço) e `e5` cai. Isso está certo, mas fica pouco visível no
   bloco YAML, onde os dois aparecem no mesmo ramo.

### A.7 O Three Horizons como checagem inicial

O `ESTUDO.md` propõe o Three Horizons de Bill Sharpe como checagem antes de montar a roda. Rodei,
e ela foi útil para uma coisa só — mas essa coisa mudou a leitura do mapa:

- **H1 (dominante, perdendo relevância):** a web de documento com SEO, publicidade display e
  `robots.txt` por gentileza. Perdendo relevância de forma **medida**, não suposta: -38% de
  referência, 60% de buscas sem clique.
- **H2 (transição):** o resumo de IA sobre a web antiga, e o agente que raspa DOM de página feita
  para humano. É onde está o dinheiro hoje, e é o horizonte que ninguém defende publicamente.
- **H3 (emergente):** capacidade declarada, identidade assinada, preço na requisição, descoberta
  por contratabilidade. É o objeto deste mapa.

**O que a checagem rendeu:** H2 é bem maior e mais duradouro do que o entusiasmo em torno de H3
sugere, e **H3 não está competindo com H1 — está competindo com H2**. Isso reforça o cenário
provável (a porta com cadeado e pouca coisa atrás) e é o argumento mais forte contra a pressa dos
prazos de `e1`. Se eu tivesse rodado o Three Horizons *antes* de montar a primeira lista de
disrupções-raiz, em vez de depois, provavelmente não teria colocado `llms.txt` e MCP nela — H1 e
H2 têm lugar próprio para os dois, e o teste do Passo 2 não teria precisado fazer o trabalho de
limpeza sozinho.
