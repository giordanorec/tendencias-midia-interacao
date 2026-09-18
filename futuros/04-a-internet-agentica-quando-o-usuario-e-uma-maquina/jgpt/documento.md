---
tema: "A internet agêntica: quando o usuário é uma máquina"
slug: a-internet-agentica-quando-o-usuario-e-uma-maquina
autor_login: jgpt
zona_de_interesse: Agentes
data: 2026-09-18
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 11
efeitos_ordem_2: 21
efeitos_ordem_3: 21
tecnologias_citadas: [Model Context Protocol, llms.txt, x402, HTTP 402, Web Bot Auth, HTTP Message Signatures, pay-per-crawl, Pay Per Use, NLWeb, Not Human Search, robots.txt, OpenAPI, ai-plugin.json, Schema.org, Comet, ChatGPT Atlas, Gemini Agent, Chrome Auto Browse, Open Finance, Pix, MCP Apps]
fontes: 11
confianca: media
experimento: "Um site-espelho instrumentado que serve versão humana e versão agêntica da mesma página e mede, lado a lado, quem lê o quê, quanto custa e o que o agente repete de volta."
skill_usada: futurizacao-jgpt
publico_ok: false
---

## 1. Resumo

A web está sendo reorganizada para um leitor que não tem olhos. Em junho de 2026 o tráfego HTML
medido pela Cloudflare já era 57,5% de bots contra 42,5% de humanos; em 15 de setembro de 2026 a
mesma empresa inverteu o default e passou a bloquear crawlers de treino e de agente em páginas com
anúncio. Do outro lado, o Model Context Protocol saiu de 100 mil para 97 milhões de downloads
mensais de SDK em dezesseis meses e teve o núcleo reescrito como protocolo sem estado, derrubando o
custo de expor capacidade a uma máquina. Este mapa aceita quatro disrupções-raiz — o protocolo de
capacidade, a porta paga, a inversão demográfica do tráfego e o agente embutido no navegador
incumbente — e deriva delas 53 efeitos até 2031. O que ele sugere não é a morte da página, e sim a
perda da *visita* como unidade: um conteúdo cuja versão canônica é estruturada, uma publicidade
que migra para dentro da resposta, e uma negociação de acesso que passa a acontecer na borda, entre
três ou quatro empresas de infraestrutura, longe de quem publica. O padrão mais falado do tema,
`llms.txt`, foi **rejeitado** como disrupção: tem 10,13% de adoção e quase nenhum uso real.

## 2. O tema

A internet agêntica é a hipótese de que o principal consumidor de uma página deixou de ser uma
pessoa. Não no sentido antigo — crawlers de busca existem desde 1994 —, mas no sentido de que o
programa que lê a página está **agindo em nome de alguém**: comparando, decidindo, comprando,
resumindo, e frequentemente entregando ao humano só a conclusão.

Isso encosta em mídia e interação em três pontos que não são opcionais para quem projeta:

1. **A superfície.** Se o leitor é um programa, a superfície que importa não é o layout, é a
   descrição da capacidade — o nome da ferramenta, o parâmetro, o esquema. Design de interface passa
   a disputar espaço com design de contrato.
2. **O financiamento.** O modelo de negócio da web aberta é impressão de anúncio contra atenção
   humana. Agente não vê anúncio, e a razão entre páginas rastreadas e visitas devolvidas já é de
   ordens de grandeza (ClaudeBot em 23.951 páginas por referência no primeiro trimestre de 2026,
   contra 4,9 do Google).
3. **O acesso.** Quando a resposta a "quem pode ler isto" deixa de ser "qualquer um" e vira uma
   política de borda com preço, a web aberta muda de natureza sem que nenhuma lei tenha mudado.

Merece mapa de futuro e não estado-da-arte porque as três coisas estão **em movimento simultâneo e
em direções opostas**: enquanto a camada de protocolo se abre (MCP, NLWeb), a camada de acesso se
fecha (default da Cloudflare, Web Bot Auth). Um estado-da-arte descreveria as duas; só um mapa de
efeitos mostra o que acontece quando elas se cruzam.

**Recorte declarado.** Horizonte 2031. Público: quem projeta mídia e interação. Recorte global, com
uma nota sobre o Brasil. Descartado de início, pela régua da disciplina: o que já é comum em produto
de massa. Identidade e detecção de agente entram aqui só como **habilitador** (é objeto do tema 2);
comércio e checkout agêntico entram só como **consequência** (é objeto do tema 5). O objeto aqui é a
web como plataforma sendo reprojetada para máquinas.

## 3. Onde isso está hoje

**O que já existe e funciona.**

- **MCP como conector de fato.** 97 milhões de downloads mensais de SDK em março de 2026, contra
  100 mil no lançamento — dezesseis meses para uma escala que o React levou cerca de três anos para
  atingir [2]. A especificação candidata de 28/07/2026 remove o handshake de `initialize` e o header
  `Mcp-Session-Id`, tornando o núcleo *stateless*: qualquer requisição pode cair em qualquer
  instância, e roteamento sticky deixa de ser necessário [3]. Extensões ganham governança formal, com
  MCP Apps (UI HTML servida pelo servidor) e Tasks como as duas primeiras oficiais [3].
- **Bloqueio e cobrança na borda.** Em 15/09/2026 a Cloudflare passou a bloquear por padrão crawlers
  de treino e de agente em páginas com anúncio, para clientes novos, sites novos de clientes antigos
  e toda a base gratuita; o Pay Per Crawl virou **Pay Per Use**, em que o publisher é pago quando o
  conteúdo aparece na resposta, não quando o bot busca a página [1]. Justificativa declarada: mais da
  metade do tráfego de crawler rebaixa páginas que não mudaram [1][10].
- **Pagamento por requisição.** O x402 opera o código 402 que a especificação original do HTTP
  deixou reservado e nunca implementou: o servidor responde 402 com termos, o cliente assina uma
  autorização de transferência e repete a requisição; na Base, a ida e volta fecha em três a quatro
  segundos, sem conta e sem aprovação humana [pesquisa de busca, não aberto — ver §8].
- **Identidade de agente em produção antes da norma.** Web Bot Auth continua *individual
  Internet-Draft*, não adotado por grupo de trabalho do IETF em agosto de 2026 — e mesmo assim já
  roda em Cloudflare, AWS, Akamai e Vercel [busca; ver §8].
- **O agente dentro do navegador que a pessoa já usa.** O ChatGPT Atlas foi descontinuado em 2026, com
  as capacidades redistribuídas para o app de desktop do ChatGPT, uma extensão de Chrome e um
  navegador remoto na nuvem da OpenAI; a razão declarada foi que "o navegador é uma funcionalidade,
  não o destino" [9]. O Project Mariner foi dobrado no Gemini Agent e no Chrome Auto Browse, e o
  Copilot Mode foi absorvido pelo Edge [busca; ver §8]. Sobrou o Comet como único produto autônomo
  entre os grandes.

**O que existe e não funciona.**

- **`llms.txt`.** 10,13% de adoção num estudo de 300 mil domínios; entre os cinquenta domínios mais
  citados por IA, **um** tinha o arquivo. Um monitoramento de mais de 500 milhões de eventos de bot
  em janela de 90 dias encontrou apenas algumas centenas de requisições a `/llms.txt`; GPTBot,
  ClaudeBot, PerplexityBot, OAI-SearchBot e Google-Extended preferem o HTML. Nenhuma empresa grande
  de IA se comprometeu publicamente a ler o arquivo em produção, e cerca de 40% dos arquivos
  publicados são default gerado por plugin [4]. É o caso raro de padrão com alta menção e uso
  próximo de zero.
- **Navegador agêntico como produto.** Três dos quatro grandes desistiram do formato em 2026 [9].
- **O índice para agentes.** O Not Human Search existe, funciona e pontua sites de 0 a 100 em sete
  sinais (`llms.txt` 25 pontos, `ai-plugin.json` 20, OpenAPI 20, API estruturada 15, MCP 10,
  regras de IA no `robots.txt` 5, Schema.org 5) — mas a home mostra **5.340 sites indexados** e
  **score médio 38** [5]. É um ranking nascendo, não um ranking instalado.

**Quem está construindo.** Anthropic e a Linux Foundation (MCP), Cloudflare (default de borda, Pay
Per Use, Web Bot Auth), Microsoft (NLWeb, com TripAdvisor e O'Reilly como adotantes citados),
Coinbase (x402), OpenAI e Google (agente por dentro do navegador), Composio/ACI.dev/Klavis
(agregação de ferramentas), Not Human Search (descoberta). Na academia, um grupo com Seth Lazar e
Noam Kolt argumenta que o gargalo já não é técnico: plataformas não conseguem distinguir bot
malicioso de agente autorizado por um usuário, e por isso degradam ou bloqueiam os dois — falta
"infraestrutura normativa", não código [8].

**Diagnóstico de hype (Gartner só como heurística, nunca como previsão de prazo).** Cobertura de
demonstração: NLWeb, x402, AX como disciplina, `llms.txt`. Cobertura de adoção medida: MCP,
bloqueio na borda, tráfego de bot acima de 50%, agente dentro do navegador. A separação importa: as
quatro raízes aceitas na §4 saem todas da segunda coluna.

**Nota sobre o Brasil.** O país entra por um trilho que os outros não têm. Em 21/05/2026 a Iniciador
lançou o que descreve como o primeiro MCP de pagamentos agênticos via Pix: o agente propõe, o usuário
confere e autoriza por biometria, o Pix liquida em segundos — sem cartão tokenizado e sem
stablecoin. O Pix é citado como 44% do checkout online brasileiro em 2026, com o Open Finance
crescendo 59% em volume [6]. Consequência para este mapa: se a camada de pagamento por agente no
Brasil é bancária, autenticada e com autorização humana por transação, o modelo "agente paga sozinho
por requisição" (x402) tem aqui um concorrente institucional, e a bifurcação da web pode se dar por
regra de banco central, não por default de CDN.

## 4. As disrupções-raiz

Quatro candidatas passaram no teste **"o que isso rompe, e por que agora e não há cinco anos?"**.
As rejeitadas estão na §6 e no anexo.

### D1 — O protocolo de capacidade: expor função a uma máquina fica quase de graça

**O que rompe.** A restrição N×M da integração. Até 2024, tornar um sistema utilizável por outro
exigia API documentada para humanos, SDK, e um projeto por par. O MCP substitui isso por uma
descrição que o agente lê em tempo de execução.

**Por que agora.** Dois limiares concretos e datados. (a) Escala: 97 milhões de downloads mensais em
março de 2026 contra 100 mil no lançamento, e 41% das organizações de software pesquisadas com
servidores MCP em produção limitada ou ampla [2]. (b) Custo operacional: a especificação de
28/07/2026 tornou o núcleo *stateless*, eliminando sessão fixa e store compartilhado — servir agentes
em escala passa a caber atrás de um round-robin simples [3]. Há cinco anos, o equivalente exigia
infraestrutura dedicada e contrato bilateral.

**O que falta.** Autorização e confiança: o RC endurece OAuth 2.0/OIDC justamente porque a parte
frágil é quem pode chamar o quê [3]. E falta curadoria: dez mil ou dezessete mil servidores indexados
(a contagem diverge por registro [2]) é um problema de descoberta, não uma solução.

### D2 — A porta paga: o GET gratuito deixa de ser o default

**O que rompe.** O contrato implícito da web — "eu te dou a página, você me manda gente" —, que já
não fecha: 23.951 páginas rastreadas por visita devolvida no caso do ClaudeBot no primeiro trimestre
de 2026, 1.276 do GPTBot, 111 do PerplexityBot, contra 4,9 do Google [7].

**Por que agora.** Uma data e um trilho. A data: 15/09/2026, quando o default da maior CDN do mundo
passou a **bloquear** treino e agente em páginas com anúncio [1]. O trilho: o x402 tornou operável um
código de status que a web reservou em 1997 e nunca usou, com liquidação em segundos e sem conta —
cobrar por leitura unitária deixou de exigir cadastro, fatura e gateway. Somem-se 416 bilhões de
requisições bloqueadas em cinco meses de 2025 [7] e fica claro que a infraestrutura de recusa já
existia; o que faltava era o de-para entre recusa e preço.

**O que falta.** Medição confiável de "apareceu na resposta" — o Pay Per Use começou com dois
parceiros [1] — e uma resposta ao problema que a academia levantou: bloqueio indiscriminado atinge o
agente que um usuário legítimo delegou [8].

### D3 — A inversão demográfica: o leitor majoritário da web não é humano

**O que rompe.** A premissa de que publicar é ser visto. Se a maioria das requisições HTML vem de
programas, a página deixa de ser um artefato de atenção e vira um artefato de extração.

**Por que agora.** O cruzamento do limiar é medido e datado: 57,5% de bots contra 42,5% de humanos
em requisições HTML (Cloudflare Radar, 03/06/2026); 20,3% do tráfego de bot verificado são crawlers
de IA, mais 6,5% de bots de busca por IA; o propósito declarado desse tráfego se divide em 51,8%
treino, 35,7% misto e 9,3% só busca [7]. Há cinco anos, bot era ruído de fundo; agora é o público.

**O que falta.** Instrumentação. Quase nenhum analytics de mercado separa leitor humano de leitor
de máquina como duas audiências com valor diferente — e enquanto não separar, ninguém consegue
precificar nenhuma das duas.

### D4 — O agente embutido: adoção sem ato de instalação

**O que rompe.** A barreira de adoção. Enquanto agente era um navegador novo, a difusão dependia de
alguém trocar de navegador. Ao virar funcionalidade do Chrome, do Edge e do app do ChatGPT, a base
agêntica cresce por atualização, não por decisão.

**Por que agora.** 2026 foi o ano em que o formato "produto separado" foi abandonado pelos três
maiores: Atlas descontinuado com as capacidades redistribuídas para o app e uma extensão de Chrome
[9], Mariner dobrado no Gemini Agent e no Chrome Auto Browse, Copilot Mode absorvido pelo Edge
[busca; ver §8]. A frase da OpenAI — "o navegador é uma funcionalidade, não o destino" [9] — é a
declaração do limiar.

**O que falta.** A régua de quando o agente pode agir sozinho, e o que acontece quando ele chega com
a sessão autenticada do próprio usuário. Aí o bloqueio na borda (D2) colide de frente com o agente
embutido (D4): o site está bloqueando o próprio cliente logado.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "D1 — O protocolo de capacidade (MCP): expor função a uma máquina fica quase de graça"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Integrar uma capacidade a um agente deixa de ser projeto de engenharia e vira ato de publicação."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O site institucional deixa de ser o ponto único de presença digital: a organização publica também um endpoint de capacidade."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "A presença digital passa a ser auditada por score de prontidão agêntica, e não por posição em ranking de busca."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O catálogo de ferramentas ocupa a função que o diretório e o buscador tiveram: é onde o agente descobre o que existe."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Entrar no catálogo vira ato comercial, com taxa de listagem e disputa paga por posição no índice consultado por agentes."
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "A interface gráfica perde a exclusividade de expor uma função e passa a disputar com a descrição da ferramenta."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Equipes de produto tratam a descrição de ferramenta como peça de design, com teste A/B de nome, parâmetro e mensagem de erro."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Consolida-se o papel de designer de superfície agêntica, com métrica própria: taxa de chamada correta na primeira tentativa."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Funções que só existiam como fluxo de telas são reescritas como operações atômicas chamáveis fora de ordem."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "Produtos perdem o poder de conduzir o usuário por uma narrativa, e onboarding, upsell e educação embutida somem do caminho."
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "O núcleo sem estado derruba o custo de operar servidor de capacidade em escala horizontal."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Servir agentes entra no plano básico de hospedagem, sem infraestrutura dedicada."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Prontidão agêntica vira padrão de fábrica de CMS e construtores de site, deixando de ser escolha editorial consciente."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "Com servidores abundantes, o gargalo deixa de ser a existência da capacidade e passa a ser a curadoria de qual usar."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "Agentes convergem para poucos agregadores confiáveis, e a intermediação se concentra como se concentrou na busca."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "D2 — A porta paga: bloqueio por default na borda e pagamento por requisição"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "O GET gratuito deixa de ser o comportamento padrão da web para clientes identificados como máquina."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Acesso de máquina passa a ser negociado por contrato bilateral ou por preço unitário de requisição."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Forma-se um mercado de conteúdo legível por máquina com cotação variável por frescor, exclusividade e taxa de citação."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "A borda decide quem lê a web, e a política efetiva de acesso deixa de estar com quem publica."
            sinal: medio
            prazo: 2027
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "A mudança de default de três ou quatro provedores de infraestrutura passa a valer mais que a política declarada de milhões de sites."
                sinal: medio
                prazo: 2029
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "Publishers trocam a métrica de audiência: da visita recebida para a citação usada em resposta."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "A redação passa a produzir para ser citada, e não para ser clicada."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Formatos pouco citáveis — ensaio longo, reportagem imersiva, interativo — perdem verba mesmo com leitura humana intacta."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "O rastreamento de citação vira infraestrutura obrigatória e cria dependência de quem faz a medição."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Auditoria independente de citação vira exigência contratual, como foi a auditoria de circulação na imprensa impressa."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "Micropagamento entre máquinas torna viável cobrar por leitura unitária sem cadastro nem fatura."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Conteúdos e APIs de cauda longa, inviáveis por assinatura, recuperam modelo de receita."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Surge uma web de nicho paga por uso, invisível para humanos e alcançável apenas por agente."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Operar um agente passa a ter custo variável mensurável por tarefa, e não apenas assinatura fixa."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "A desigualdade de acesso deixa de ser ter ou não ter agente e passa a ser quanto orçamento por consulta cada um tem."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "D3 — A inversão demográfica: o leitor majoritário da web não é humano"
    efeitos:
      - id: e7
        ordem: 1
        efeito: "O principal leitor de uma página é um programa, e a métrica de sucesso descola da atenção humana."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Publicidade baseada em impressão perde lastro exatamente nas páginas mais lidas por máquina."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "O inventário publicitário migra para dentro da resposta do agente, e a disputa passa a ser por posição em resposta, não por espaço em página."
                sinal: medio
                prazo: 2030
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "O design visual vira camada opcional de um conteúdo cuja versão canônica é estruturada."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "Sites mantêm duas árvores de conteúdo com custo dobrado de manutenção, e a versão humana envelhece primeiro."
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "A medição de audiência se parte em dois públicos com relatórios e preços distintos: humano e de máquina."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Contratos de mídia passam a exigir declaração da proporção entre leitura humana e leitura de agente."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "Audiência humana verificada vira selo pago, e a verificação custa mais que o inventário barato que ela certifica."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: "A fraude publicitária migra da simulação de humano para a simulação de agente legítimo."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: "Assinatura criptográfica de agente vira pré-requisito comercial, e tráfego não assinado é tratado como sem valor."
                sinal: medio
                prazo: 2030
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: "Marcação semântica e dados estruturados deixam de ser dever de acessibilidade e viram requisito comercial, porque são o que o agente lê."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "O investimento em HTML semântico cresce por razão econômica, não por razão ética ou legal."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "Usuários de leitor de tela colhem a melhoria como efeito colateral, e a pauta de acessibilidade perde argumento próprio ao ser absorvida pela pauta de agentes."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "D4 — O agente embutido: adoção sem ato de instalação"
    efeitos:
      - id: e10
        ordem: 1
        efeito: "O agente deixa de exigir instalação e passa a vir junto com o navegador e o aplicativo que a pessoa já usa."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "A base agêntica cresce por atualização de software, mais rápido que a disposição de qualquer site a se adaptar a ela."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: "Sites recebem agentes portando sessão humana autenticada, e bloquear o agente passa a significar bloquear o próprio cliente."
                sinal: medio
                prazo: 2029
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: "Quem controla o navegador controla a camada onde agente e site negociam acesso."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: "A regra sobre quais sites o agente pode operar vira política de plataforma, fora do alcance do publisher e do próprio usuário."
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: "A visita perde função como unidade de medida: uma tarefa atravessa vários sites sem render página vista a nenhum deles."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "A jornada de leitura e de compra deixa de ser observável pelo site individual."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: "Marcas perdem a relação direta com o público e passam a depender de como o agente as descreve para ele."
                sinal: medio
                prazo: 2030
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: "Visitar um site deixa de ser um gesto corriqueiro no vocabulário de quem entra na internet agora."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: "A web aberta continua existindo tecnicamente, mas o acesso direto a ela vira prática de nicho, como o feed RSS depois das redes sociais."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**O que o bloco não diz sozinho.**

Primeiro: **as quatro raízes não são independentes, e duas delas se contradizem em campo.** D2 fecha
a porta ao agente; D4 faz o agente chegar por dentro, com a sessão do usuário. O efeito `e10.1.1` é o
ponto exato da colisão, e é dele que sai a pergunta prática de 2028: *bloquear máquina* deixa de ser
uma política técnica e vira uma política de atendimento ao cliente. A literatura já nomeou isso como
falta de infraestrutura normativa [8] — e o mapa mostra por que a solução não pode ser puramente
técnica: nenhum cabeçalho distingue "agente que veio te espremer" de "agente que sua leitora
delegou".

Segundo: **a árvore de D3 é a que mexe com quem projeta mídia.** `e7.1.1` (o anúncio migra para
dentro da resposta) e `e11.1.1` (a marca passa a depender de como o agente a descreve) descrevem a
mesma perda por dois caminhos: o intermediário deixa de ser um canal e vira um narrador. Design de
interface continua existindo; o que encolhe é o **espaço onde ele decide alguma coisa**.

Terceiro: **`e9.1.1` é o efeito mais desconfortável do mapa e o mais provável.** Acessibilidade
ganha investimento — por motivo errado. Se o argumento econômico é o agente, então quando o agente
aprender a ler layout visual sem ajuda (o que já faz), o investimento some, e a pauta volta ao ponto
de partida com um argumento a menos.

Quarto: **o que este bloco deliberadamente não tem.** Nenhum efeito de quarta ordem, por regra do
formato. Os fios que ficaram puxando — soberania de índice agêntico por país, litígio sobre bloqueio
de agente delegado como restrição de concorrência, o agente que negocia preço de acesso em nome do
leitor — foram para a §6 e para o anexo.

## 6. Sinais fracos e wildcards

**Candidatas rejeitadas como raiz, mantidas no radar.**

- **`llms.txt`.** Emergente que talvez nunca emerja. 10,13% de adoção, 97% dos arquivos sem uma
  única requisição no mês estudado, nenhum compromisso público de leitura em produção por grande
  fabricante, 40% gerados por plugin [4]. Falha o teste de limiar: não há custo que caiu nem
  capacidade que apareceu — há um arquivo que quase ninguém lê. Fica no radar porque é barato e,
  se um fabricante grande anunciar leitura em produção, vira infraestrutura da noite para o dia.
- **NLWeb.** Toda instância pode agir como servidor MCP, expondo `/ask` e `/mcp` sobre Schema.org,
  RSS e sitemap. Adotantes citados: TripAdvisor, O'Reilly. Ainda é cobertura de demonstração.
- **Not Human Search.** 5.340 sites, score médio 38, sete sinais ponderados [5]. É o PageRank da era
  dos agentes em escala de protótipo — e o fato de o score dar 25 pontos ao `llms.txt`, o sinal com
  menor uso comprovado, sugere que a régua foi desenhada pelo discurso e não pelo comportamento
  medido dos crawlers.
- **Web Bot Auth.** Em produção antes de ser norma. Não entra como raiz por fronteira com o tema 2.
- **MCP Apps.** A extensão que deixa o servidor devolver HTML renderizado ao agente [3]. É o começo
  de uma interface gráfica que a *ferramenta* controla, dentro do chat — o inverso de tudo o que
  este mapa descreve. Se pegar, a interface volta, mas hospedada por quem serve a capacidade.

**Wildcards.**

1. **O portal que fecha e ninguém nota** (baixa probabilidade, alto impacto). Um grande portal
   bloqueia todo agente, a audiência humana não cai, e a notícia vira que *não faz diferença*. Isso
   destruiria a tese de poder de barganha dos publishers e congelaria o Pay Per Use. Sinal precoce:
   publishers descrevendo agente como "um problema de 3%" — já dito em 2026 [10].
2. **O agente aprende a não precisar de nada disso.** Se ler pixel e operar interface humana ficar
   mais barato que negociar protocolo, toda a camada agent-ready (`llms.txt`, OpenAPI, MCP para
   conteúdo) vira investimento perdido, e a web "para máquinas" some por irrelevância — não por
   fracasso. A retirada dos navegadores agênticos como produto autônomo [9] é ambígua aqui: pode
   significar consolidação, pode significar que a navegação visual já basta.
3. **Regulação de agente delegado.** Uma corte decide que bloquear o agente de um usuário autenticado
   é restringir o usuário, e não o bot. A tese jurídica já está escrita [8]. Inverteria D2 inteira em
   um ano.
4. **Bifurcação por jurisdição, não por protocolo.** No Brasil, o trilho agêntico de pagamento nasce
   bancário e com biometria por transação [6]. Se o Banco Central tratar agente como iniciador
   regulado, o país pode ter uma web agêntica *autorizada*, incompatível com o modelo de agente
   anônimo pagando por requisição — e a incompatibilidade vira barreira comercial.

## 7. Contra o próprio mapa

**1. Extrapolação linear — qual efeito é só o presente, só que mais.**
`e5.1` ("a redação produz para ser citada") é continuação direta de uma curva que já roda desde a
chegada dos resumos de IA na busca; não há descontinuidade, só mais do mesmo. Rebaixado de
`confianca: alta` para `media` na revisão. `e9.1` também é linear: dados estruturados crescem há
quinze anos. O efeito genuinamente descontínuo dessa subárvore é `e9.1.1`, e ele é o menos
confiável.
Pior caso de linearidade: `e4.1.1`, o "mercado de conteúdo legível por máquina com cotação". Isso
assume que um mercado com preço se forma porque a cobrança ficou tecnicamente possível — e mercados
de conteúdo com preço unitário fracassaram repetidas vezes (micropagamento de notícia, 2009–2015).
Mantido em `confianca: baixa` por isso, não por incerteza de prazo.

**2. Velocidade de adoção nunca vista.**
O mapa herda do MCP um ritmo excepcional: dezesseis meses para uma escala que o React levou cerca de
três anos para atingir [2]. Usar esse ritmo como régua para os *outros* efeitos é o erro mais
provável aqui. Downloads de SDK medem curiosidade de desenvolvedor, não adoção de infraestrutura
por publisher. O contraexemplo está dentro do próprio tema: HTTPS por default, comparável em escopo
ao que D2 propõe, levou cerca de uma década do Let's Encrypt (2016) à quase universalidade — e teve
gratuidade, pressão de navegador e benefício direto de SEO a favor, nenhum dos quais existe aqui.
Por isso nenhum efeito de 2ª ordem foi datado antes de 2028 e nenhum de 3ª antes de 2029.
Efeito específico sob suspeita: `e3.1.1` (prontidão agêntica como padrão de fábrica de CMS até 2030).
Comparável: suporte a AMP em CMS, que foi rápido justamente porque o Google condicionou visibilidade
— sem uma condicionante equivalente, 2030 é otimista.

**3. Se a disrupção não vingar — o que acontece com cada subárvore.**

- **D1 não vinga** (MCP vira mais um padrão entre três, ou é substituído por navegação visual):
  `e1`–`e3` e seus 12 descendentes caem quase inteiros. Sobrevive `e2.1` em forma mais fraca — a
  descrição de capacidade continua importando para *qualquer* protocolo. Probabilidade de não
  vingar: baixa, é a raiz mais sustentada por dado medido.
- **D2 não vinga** (o bloqueio na borda recua, por pressão antitruste, por contrato com grandes
  fabricantes ou por irrelevância comercial): `e4`–`e6` e 12 descendentes caem. Sobrevive `e5`, pois
  a mudança de métrica de visita para citação já está em curso por outro motivo. Probabilidade de não
  vingar: **média-alta** — é a raiz mais frágil do mapa, porque depende de comportamento de
  negociação, não de capacidade técnica, e o wildcard 1 mata a tese inteira.
- **D3 não vinga** (a medição está errada; separar bot de humano por requisição HTML superestima; o
  tráfego de máquina não se converte em perda de receita): `e7`–`e9` e 9 descendentes caem. É a raiz
  cuja evidência mais depende de *uma* fonte de medição (Cloudflare Radar), o que é um problema de
  método reconhecido aqui: a mesma empresa que mede é a que vende a solução.
- **D4 não vinga** (agentes embutidos permanecem pouco usados, como aconteceu com assistentes de voz
  em navegador): `e10`–`e11` e 8 descendentes caem. Sobrevive `e11.1` parcialmente, por efeito de
  chat, não de navegador.

**4. Viés do autor.**
A skill manda perguntar ao autor, não supor. **Não houve autor disponível nesta rodada** (execução
não interativa), então a pergunta fica registrada e não respondida: *o tema foi escolhido por gosto,
e isso está inflando o otimismo?* O que dá para declarar sem inventar: a zona de interesse declarada
é "Agentes", o que é, por construção, um viés de seleção — quem escolhe a zona dos agentes tende a
achar que agentes explicam o mundo. O viés pedido foi "neutro", e a marca desse pedido está em duas
decisões visíveis: `llms.txt` foi rejeitado apesar de ser o emblema do tema, e D2 recebeu a avaliação
mais pessimista de todas apesar de ser a narrativa mais vendida. Se houvesse viés otimista solto,
seria o inverso.

**Sobrevivência à contestação.** Duas confianças rebaixadas (`e5.1`, `e4.1.1`), um prazo revisto
(`e3.1.1` mantido mas marcado como otimista) e uma raiz declarada frágil (D2). O mapa não saiu
intacto.

## 8. O que a máquina errou

**1. Quase adotei `llms.txt` como disrupção-raiz — e ele é o contrário disso.** O enunciado do tema
abre com "`llms.txt` em vez de página", o que enquadra o arquivo como a mudança central. A primeira
versão do mapa o tratava como raiz de uma árvore inteira. Só ao abrir o dado [4] o quadro virou:
10,13% de adoção, quase nenhuma requisição, um único dos cinquenta domínios mais citados por IA.
O erro era plausível porque vinha do enunciado, e a correção só apareceu porque a Etapa 1 exige
ancorar no presente com fonte antes de derivar efeito. Isto é exatamente o mecanismo que a
disciplina está testando: sem o dado, a árvore de terceira ordem de `llms.txt` teria saído bonita e
inteiramente ficcional.

**2. Citei números que não abri.** Três afirmações do §3 vêm de resumo de busca, não de página
aberta, e estão marcadas no texto: (a) os detalhes do ciclo de quatro passos do x402 e a liquidação
em três a quatro segundos na Base; (b) o estado dos drafts de Web Bot Auth no IETF em agosto de 2026
e o uso em produção por Cloudflare, AWS, Akamai e Vercel; (c) o destino do Project Mariner e do
Copilot Mode. **Não verificado — precisam de confirmação antes de entrega final.** Nenhuma delas
sustenta sozinha uma disrupção-raiz; a raiz D4 se apoia no TechCrunch [9], que foi aberto.

**3. Uma fonte recusou a leitura e eu quase usei mesmo assim.** O relatório *State of Agentic
Traffic* (HUMAN Security, julho de 2026) apareceu na busca com números atraentes — Comet com 47,6%
do tráfego agêntico em junho de 2026, mídia ultrapassando e-commerce com 43,5%. A página devolveu
**HTTP 403**. Esses números **não entraram** em nenhuma seção do mapa nem na lista de fontes. Fica o
registro porque a tentação foi real: eram os únicos dados de distribuição de agente por produto.

**4. Uma contagem que não bate, e que ninguém notaria.** O enunciado da disciplina descreve o Not
Human Search como indexando "9.000+ ferramentas e APIs"; o README do projeto no GitHub diz "8.000+
sites"; a home, aberta em 18/09/2026, mostra **5.340** [5]. Três números para a mesma coisa. Ou o
índice encolheu, ou os materiais promocionais correm à frente do índice. Adotei o número da home
por ser o único que li na fonte primária, e sinalizo a divergência em vez de escolher o maior.

**5. Um viés de fonte que atravessa o mapa inteiro.** Boa parte das evidências quantitativas de D2 e
D3 — participação de bot no tráfego, razão crawl-por-referência, propósito do crawler, requisições
bloqueadas — vem da **Cloudflare**, direta ou indiretamente [1][7][10]. A Cloudflare é, ao mesmo
tempo, a maior fonte de medição e a vendedora do produto que a medição justifica. Não há aqui uma
segunda medição independente em escala comparável, e isso deveria rebaixar a confiança de D3 mais do
que rebaixei.

## 9. Três cenários para 2031

**Provável.** Em 2031 a web não se partiu em duas; ela ganhou uma segunda pele. Quase todo site
grande passou a servir, sem alarde, uma versão estruturada de si mesmo — não por convicção, mas
porque veio ligada por padrão no CMS. O MCP virou encanamento invisível, como o DNS: ninguém
comemora, todo mundo depende. A cobrança por acesso de máquina existiu, mas se concentrou em algumas
dezenas de acordos bilaterais entre grandes fabricantes e grandes editoras; o mercado aberto de
preço por requisição nunca chegou à cauda longa, e os sites pequenos ficaram com a pior combinação
possível — rastreados de graça, sem tráfego de volta e sem poder de negociar. A publicidade de
display não morreu: encolheu para os espaços onde ainda há olhos, e o dinheiro novo foi para dentro
da resposta do agente, num mercado de citação com três compradores. "Visitar um site" ainda é uma
frase compreensível, mas já soa como "consultar a enciclopédia": correta, um pouco datada.

**Desejável.** Em 2031 existe uma distinção que em 2026 não existia: agente *delegado* e agente
*extrativo* são coisas diferentes, e a diferença é legível na requisição. Isso não foi conquistado
por um padrão técnico sozinho — exigiu que o desenho normativo andasse junto do protocolo: uma
adoção real de assinatura de agente em grupo de trabalho aberto, e não em acordo entre quatro
empresas de infraestrutura; uma regra que trata bloquear o agente de um usuário autenticado como
bloquear o usuário; uma medição de tráfego de máquina feita por quem não vende a solução; e uma
contrapartida de acesso que vale para o site pequeno, não só para quem tem advogado. Para chegar
aqui, foi preciso que quem projeta mídia parasse de tratar a camada agêntica como assunto de
infraestrutura e a tratasse como assunto de design: quem escreve a descrição de uma capacidade está
escrevendo a interface, e essa peça passou a ter dono, teste e revisão. O ganho colateral foi o mais
concreto: a web ficou mais semântica para todo mundo, inclusive para quem usa leitor de tela.

**Indesejável.** Em 2031 ler a web sem intermediário virou privilégio. A porta fechou por default e
abriu por contrato; quem negocia acesso são quatro fabricantes de agente e três provedores de borda,
e o resto do mundo lê o que eles resolveram sintetizar. A audiência humana dos sites que restaram
não caiu o bastante para ninguém reagir — foi essa a armadilha: a perda não apareceu no gráfico de
tráfego, apareceu na perda lenta da capacidade de chegar a alguém. Publicidade migrou para dentro
das respostas e reconstituiu, em dois anos, o mesmo mercado de posição paga que a busca levou vinte
para construir, agora sem inspeção possível: ninguém vê o anúncio que não recebeu. Quem não paga o
agente lê uma web mais lenta, mais bloqueada e mais pobre que a de 2026. **O sinal precoce disso já
está publicado:** em 2026, executivos de publishers chamavam o agente de "um problema de 3%" e
diziam ter "problemas de 10% com que se preocupar" [10]. O cenário indesejável não começa com uma
decisão ruim; começa com uma proporção pequena demais para merecer decisão.

## 10. O experimento

**O que é.** Um **site-espelho instrumentado**: uma página real de conteúdo publicada em duas
versões servidas na mesma URL, negociadas por cabeçalho e por identidade do cliente — a versão
humana (HTML completo, com anúncio simulado e layout) e a versão agêntica (Markdown estruturado
mais um servidor MCP mínimo com duas ou três ferramentas de consulta ao mesmo conteúdo). Em volta,
três instrumentos: um log que classifica cada requisição (humano, crawler declarado, agente
embutido com sessão de usuário), um medidor de custo por leitura, e um *harness* que faz agentes
comerciais executarem a mesma tarefa de leitura pelas duas portas.

**Que pergunta sobre o futuro ele responde.** A pergunta de 1ª ordem que sustenta metade deste mapa:
**o agente lê a porta que foi feita para ele, ou lê o HTML mesmo assim?** O dado disponível [4] diz
que ele ignora `llms.txt`; ninguém testou isso de forma controlada com um site que oferece a porta
*boa* — MCP, não só um arquivo de texto. E uma segunda: **o que o agente devolve ao humano difere
conforme a porta?** Se a resposta gerada a partir da versão estruturada for melhor, existe argumento
econômico para manter duas árvores (`e7.2`); se for igual, `e7.2.1` (custo dobrado, versão humana
envelhecendo) vira o cenário realista.

**Que tecnologia emergente usa, e por que não dá com tecnologia madura.** Usa MCP com o núcleo sem
estado [3], negociação de acesso por identidade de agente e, opcionalmente, um endpoint com resposta
402 para medir a reação dos agentes a uma cobrança. Não dá para fazer com API REST e analytics
clássico porque o objeto do teste **é a diferença entre duas superfícies de leitura para o mesmo
conteúdo** — analytics maduro não distingue agente delegado de crawler, e uma API REST não é uma
porta que um agente comercial descobre sozinho em tempo de execução. É justamente a descoberta em
runtime que está sendo medida.

**O que a turma faria testando em sala.** Cada dupla assume um papel: uma publica (escolhe o que vai
na versão agêntica e o que fica de fora), outra opera o agente (tarefa definida: "ache o preço, o
prazo e a ressalva"), outra é o leitor humano fazendo a mesma tarefa com cronômetro. Mede-se: tempo,
número de requisições, custo, e — o mais interessante para mídia — **o que se perde na tradução**:
que parte do texto o agente nunca repete de volta ao humano. Uma rodada seguinte liga o bloqueio por
default e a resposta 402, e a turma observa o que o agente faz quando a porta fecha: desiste, tenta
o HTML, ou paga.

**O que mudaria a opinião do autor.** Foi declarado no recorte e vale como critério de refutação
deste mapa inteiro: (a) evidência de que a adoção já passou da maioria inicial na curva de Rogers —
aí não é tendência emergente, é campo maduro e o mapa está atrasado; (b) evidência de que a
tecnologia não rompe nada, só melhora o que existe — se o agente lê o HTML humano igualmente bem e a
economia da página não muda, então "internet agêntica" é um nome novo para crawler antigo, e as
quatro raízes caem juntas. O experimento acima é desenhado para produzir exatamente esses dois
sinais.

## 11. Fontes

Lista apenas do que foi **de fato aberto e lido** nesta sessão, em 18/09/2026.

1. **TechCrunch — "Cloudflare's new policy pushes AI companies to pay for publishers' content"** (01/07/2026)
   `https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/`
   Sustenta: o default de bloqueio de 15/09/2026, o escopo (clientes novos, sites novos, base
   gratuita), a transição de Pay Per Crawl para Pay Per Use, e o dado de que mais de 50% do tráfego
   de crawler rebusca páginas inalteradas. Confiabilidade: alta como registro do anúncio; os números
   citados são da própria Cloudflare, parte interessada.

2. **Digital Applied — "MCP Adoption Statistics 2026"** (via resultado de busca com números
   atribuídos e datados)
   `https://www.digitalapplied.com/blog/mcp-adoption-statistics-2026-model-context-protocol`
   Sustenta: 97 milhões de downloads mensais de SDK, comparação com o React, 41% das organizações
   pesquisadas com MCP em produção, divergência de contagem de servidores entre registros.
   Confiabilidade: média — é agregador secundário; os números remetem a Anthropic, Nerq, Stacklok e
   ao registro oficial, e deveriam ser reconferidos na fonte primária antes de citação acadêmica.

3. **Blog do Model Context Protocol — "The 2026-07-28 MCP Specification Release Candidate"** (28/07/2026)
   `https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/`
   Sustenta: núcleo sem estado (remoção de `initialize` e `Mcp-Session-Id`), framework de extensões
   com MCP Apps e Tasks, endurecimento de OAuth 2.0/OIDC, política de ciclo de vida com 12 meses
   entre depreciação e remoção. Confiabilidade: alta — fonte primária da especificação.

4. **GeoJacker — "llms.txt: What the 2026 Data Actually Shows"**
   `https://geojacker.com/llms-txt`
   Sustenta: 10,13% de adoção em 300 mil domínios (SE Ranking), apenas 1 dos 50 domínios mais
   citados por IA com o arquivo, poucas centenas de requisições a `/llms.txt` em 500 milhões de
   eventos de bot em 90 dias (Limy.ai), ~40% de arquivos gerados por plugin (Web Almanac 2025).
   Confiabilidade: média-alta — compila estudos de terceiros identificados e datados; a leitura
   crítica é do próprio autor.

5. **Not Human Search — home** (aberta em 18/09/2026)
   `https://nothumansearch.ai/`
   Sustenta: 5.340 sites indexados, score médio 38, os sete sinais de prontidão agêntica e a
   afirmação de que o rank orgânico não é pago. Confiabilidade: alta para o que é (autodescrição de
   um serviço em operação), nula como medida do estado da web.

6. **Let's Money — "Iniciador lança o primeiro MCP de pagamentos agênticos via Pix"** (21/05/2026)
   `https://www.letsmoney.com.br/pagamentos/iniciador-lanca-o-primeiro-mcp-de-pagamentos-agenticos-via-pix/`
   Sustenta: a nota sobre o Brasil — MCP de Pix com autorização biométrica por transação, Pix em 44%
   do checkout online, Open Finance +59% em volume, parceiros citados. Confiabilidade: média —
   cobertura de lançamento, números fornecidos pela empresa.

7. **Digital Applied — "AI Crawler & Bot Traffic Statistics 2026: Key Data"**
   `https://www.digitalapplied.com/blog/ai-crawler-bot-traffic-statistics-2026-data-reference`
   Sustenta: 57,5% bots contra 42,5% humanos em requisições HTML (Cloudflare Radar, 03/06/2026);
   20,3% de crawlers de IA e 6,5% de bots de busca por IA no tráfego verificado; razões
   crawl-por-referência (ClaudeBot 23.951:1, GPTBot 1.276:1, Perplexity 111:1, Google 4,9:1); 416
   bilhões de requisições bloqueadas em cinco meses; divisão de propósito 51,8% treino / 35,7% misto
   / 9,3% busca. Confiabilidade: média — compilação com fonte e data por linha, e ressalva explícita
   do próprio autor de que tráfego de app nativo sem `Referer` pode exagerar as razões. **A
   dependência de Cloudflare como origem quase única está anotada na §8.**

8. **arXiv 2606.10711 — "The Agentic Web Requires New Normative Infrastructure"**, Pattison, Boulos,
   Kolt, Li, Piccardi e Lazar (submetido 09/06/2026, revisado 15/07/2026)
   `https://arxiv.org/abs/2606.10711`
   Sustenta: o argumento de que o obstáculo é normativo e não técnico; plataformas não distinguem
   bot malicioso de agente delegado e degradam os dois de forma encoberta. Confiabilidade: alta como
   posição argumentada de pesquisadores identificados; é ensaio normativo, não estudo empírico.

9. **TechCrunch — "OpenAI is shutting down Atlas, but its AI browser ambitions are still growing"**
   (09/07/2026)
   `https://techcrunch.com/2026/07/09/openai-is-shutting-down-atlas-but-its-ai-browser-ambitions-are-still-growing/`
   Sustenta: o encerramento do Atlas, a redistribuição para app de desktop, extensão de Chrome e
   navegador remoto na nuvem, e a formulação "o navegador é uma funcionalidade, não o destino".
   Confiabilidade: alta. Ressalva: o artigo não traz a data exata do desligamento nem números de uso.

10. **Digiday — "No playbook, just pressure: Publishers eye the rise of agentic browsers"**
    `https://digiday.com/media/no-playbook-just-pressure-publishers-eye-the-rise-of-agentic-browsers/`
    Sustenta: o "problema de 3%", a ausência de manual entre publishers, a migração de ad stack para
    server-side via Trusted Server (IAB), e a fala de Anthony Katsur sobre "cavalo de Troia".
    Confiabilidade: alta para captar postura do setor; não traz dado quantitativo de perda.

11. **Cientistas Digitais — "15 de setembro: o dia em que parte da web fecha a porta para os robôs de IA"**
    `https://cientistasdigitais.com/tecnologia-e-inovacao/15-de-setembro-o-dia-em-que-parte-da-web-fecha-a-porta-para-os-robos-de-ia`
    Sustenta: leitura em português da mudança de default e o dado de que, com resumo de IA na busca,
    o clique em resultado tradicional cai para 8% das buscas, metade da taxa sem resumo.
    Confiabilidade: média — veículo secundário; **conferido que não traz recorte brasileiro**, ao
    contrário do que o título sugeria.

**Citadas na busca e NÃO abertas — não verificadas:** x402.org e cobertura do x402 (ciclo de quatro
passos, três a quatro segundos na Base); drafts `draft-meunier-*` de Web Bot Auth no IETF Datatracker
e a afirmação de uso em produção por Cloudflare/AWS/Akamai/Vercel; Wikipedia e cobertura sobre
Project Mariner e Copilot Mode; HUMAN Security, *State of Agentic Traffic* (HTTP 403 na tentativa de
leitura); agentexperience.ax (aberto, mas conceitual — nada quantitativo aproveitado). Nenhuma delas
sustenta sozinha uma disrupção-raiz.

## 12. Anexo — o levantamento bruto

### 12.1 Etapa 0 — a entrevista, como foi respondida

Execução não interativa: não havia autor disponível para responder. As respostas abaixo foram
fornecidas junto com a tarefa e tratadas como resposta de entrevista; nenhuma foi inventada em
silêncio, e as lacunas estão declaradas.

- **Tema e recorte:** "A internet agêntica: quando o usuário é uma máquina". Tema 4 de 19 da
  disciplina, família "Agentes". Sem recorte mais estreito pedido.
- **Descartado de início:** o que já é comum em produto de massa (régua da disciplina). Nenhuma
  outra exclusão. Fronteiras de vizinhança respeitadas por conta própria: identidade/detecção de
  agente é tema 2 e entra só como habilitador; comércio agêntico é tema 5 e entra só como
  consequência.
- **Horizonte:** 2031.
- **Público:** quem projeta mídia e interação.
- **Recorte geográfico:** global, com nota sobre o Brasil.
- **Viés desejado:** neutro.
- **Zona de interesse:** Agentes. **Login:** jgpt. **Skill:** futurizacao-jgpt.
- **Disrupção suspeita a priori:** nenhuma — instrução explícita de descobrir.
- **Critério de mudança de opinião:** adoção além da maioria inicial (Rogers), ou tecnologia que só
  melhora o existente sem romper restrição.
- **Perguntas da Etapa 4 que ficaram SEM resposta:** a pergunta de viés do autor (§7, item 4). A
  skill proíbe inventar a resposta pelo usuário; fica registrada como limitação conhecida deste
  documento.

### 12.2 Etapa 2 — o teste de maturidade aplicado a cada candidata

| Candidata | Veredito | Limiar concreto / motivo |
|---|---|---|
| Model Context Protocol | **Disruptiva (D1)** | 100 mil → 97 mi downloads/mês em 16 meses; núcleo sem estado em 28/07/2026 derruba custo de operação horizontal |
| Bloqueio por default na borda + Pay Per Use | **Disruptiva (D2)** | 15/09/2026, default invertido na maior CDN; razão crawl/referência de 23.951:1 torna o contrato antigo insustentável |
| Bots > humanos no tráfego HTML | **Disruptiva (D3)** | 57,5% / 42,5% medido em 03/06/2026 — o limiar de 50% foi cruzado e é datável |
| Agente embutido no navegador incumbente | **Disruptiva (D4)** | Em 2026 os três maiores abandonaram o navegador agêntico como produto e embutiram a função; adoção deixa de exigir instalação |
| `llms.txt` | **Rejeitada** (emergente que talvez nunca emerja) | 10,13% de adoção, ~0 requisições, nenhum compromisso de leitura em produção; nenhum limiar identificável |
| x402 / HTTP 402 | **Rejeitada como raiz; entra como mecanismo dentro de D2** | Funciona, mas não há evidência aberta de uso em escala; sozinho não inverte nada — quem inverteu foi o default da borda |
| Web Bot Auth / assinatura de agente | **Rejeitada por fronteira (tema 2)** | Habilitador de D2 e D3; entra como mecanismo em `e8.2.1` |
| NLWeb | **Emergente** | Adotantes citados, mas cobertura de demonstração; nenhum limiar de custo ou capacidade |
| Not Human Search / índice agêntico | **Emergente** | 5.340 sites e score médio 38: ranking nascendo, não instalado |
| AX como disciplina de design | **Emergente** | Discurso consolidado (sites, guias, previsão de "agent search engine optimization"), prática não medida |
| APIs REST, SDKs, scraping, Schema.org, `robots.txt`, SEO clássico | **Maduras — rejeitadas** | Se sumissem amanhã, o campo não voltaria a cinco anos atrás; são piso, não disrupção |
| MCP Apps (UI servida pelo servidor) | **Emergente, com potencial de inverter o mapa** | Devolve interface gráfica ao jogo, hospedada por quem serve a capacidade; sem adoção medida |
| Pix agêntico / Open Finance (Brasil) | **Emergente regional** | Lançamento de 21/05/2026, trilho institucional distinto; vira wildcard 4 |

### 12.3 Efeitos cortados, e por quê

- **"Agentes negociam preço de acesso em nome do leitor."** Cortado: seria 4ª ordem a partir de
  `e4.1.1`, e o formato trava em três níveis. Virou insumo do wildcard 3.
- **"Soberania de índice agêntico nacional."** Cortado por ser extrapolação geopolítica sem
  mecanismo rastreável no material lido. Restou como sombra no wildcard 4.
- **"O agente escreve o site."** Geração de páginas por agente para consumo de agente — ouroboros
  de conteúdo. Cortado: pertence mais ao tema de conteúdo sintético que à web como plataforma.
- **"Fim do domínio como unidade de identidade."** Cortado por especulação livre: nada no
  levantamento aponta mecanismo de erosão do DNS.
- **"Publicidade dentro do MCP (ferramenta patrocinada)."** Mantido em forma reduzida dentro de
  `e1.2.1` (taxa de listagem). A versão forte — anúncio embutido em resultado de ferramenta — foi
  cortada por falta de qualquer sinal no material lido.
- **Terceiro efeito de 2ª ordem em D3/`e9`.** `e9` ficou com apenas um filho, deliberadamente: as
  outras derivações que apareceram ("acessibilidade vira exigência de compra pública por causa de
  agente") não tinham mecanismo identificável e teriam inflado a contagem sem sustentação.

### 12.4 Buscas realizadas, incluindo as que não renderam

Buscas (WebSearch): adoção de `llms.txt` em 2026; pay-per-crawl e bloqueio por default da Cloudflare;
estatísticas de adoção de MCP; x402 e HTTP 402 para pagamento por requisição; Web Bot Auth no IETF;
tráfego de navegador agêntico e queda de referência para publishers; Not Human Search e score de
prontidão; Brasil — bloqueio de crawler, Pix e pagamento agêntico; NLWeb; AEO / *agent experience* /
depreciação de UI; descontinuação do Atlas e destino do Mariner.

Leituras (WebFetch) bem-sucedidas: as onze da §11.
Leitura recusada: HUMAN Security, *State of Agentic Traffic — July 2026* → **HTTP 403**.
Leitura aberta mas sem rendimento quantitativo: `agentexperience.ax/concepts/getting-started/` —
define AX ("desenho e otimização de ambientes digitais para que agentes operem neles"), cita Netlify,
Clerk, Neon e Convex como exemplos, não nomeia organização responsável e não traz prática
prescritiva. Serviu para classificar AX como emergente, nada além disso.

Buscas que não renderam o que se procurava: nenhuma fonte primária brasileira sobre **bloqueio de
crawler por publishers brasileiros** foi encontrada — o que existe em português é cobertura da
decisão global da Cloudflare. A nota sobre o Brasil, portanto, se apoia no trilho de **pagamento**
(Pix/Open Finance), não no de acesso, e essa assimetria é uma lacuna real deste mapa, não uma
escolha.

### 12.5 Números levantados e não usados no corpo do texto

Guardados aqui porque podem servir a outro recorte, e porque a §12 não resume:

- Adobe Analytics, 1º trimestre de 2026, varejo nos EUA: referência de IA crescendo 393% ano a ano,
  com conversão 42% melhor, receita por visita 37% maior e tempo no site 48% maior que canais
  não-IA [7]. Não usado porque é comércio (tema 5) e porque contradiz parcialmente a narrativa de
  perda — merece confronto num mapa sobre comércio agêntico.
- Participação de bots nomeados nas requisições HTTP de bot de IA, maio de 2026: Googlebot 27,26%,
  GPTBot 11,48%, ClaudeBot 9,73% [7].
- `robots.txt`, 1º trimestre de 2026, crawlers mais bloqueados: GPTBot 5,52% das regras DISALLOW,
  CCBot 5,08%, ClaudeBot 4,88%, Google-Extended 4,44%, Bytespider 4,23% [7].
- Mais de 2,5 milhões de sites bloqueando bots de treino em agosto de 2025 [7].
- Similarweb: 267,4 milhões de referências de plataformas de IA nos EUA em outubro de 2025 caindo
  para 226,8 milhões em janeiro de 2026 (−15%) — **não verificado**, veio de resumo de busca.
- Queda de referência de busca em dois anos: 60% para publishers pequenos, 47% médios, 22% grandes —
  **não verificado**, veio de resumo de busca.
- Razão do ClaudeBot melhorando de 23.951:1 para 11.122:1 entre o 1º trimestre e a semana de
  25/05–01/06/2026 [7] — o dado de melhora foi omitido do corpo por brevidade, e a omissão favorecia
  a tese do mapa. Fica registrado aqui por honestidade: a razão está caindo.

### 12.6 Conferência de formato

`grep -c "^## " tendencia-a-internet-agentica-quando-o-usuario-e-uma-maquina.md` deve devolver **12**.
Frontmatter com todos os campos, sem nulo indevido. Bloco `roda:` com quatro disrupções, três níveis
exatos, `sinal`, `prazo` e `confianca` preenchidos em todos os 53 efeitos (11 + 21 + 21), ids
hierárquicos e únicos de `e1` a `e11.2.1`, todos redigidos como frase afirmativa. Seção 11 lista
apenas fontes de fato abertas; o que não foi aberto está marcado como não verificado na §8 e no fim
da §11.
