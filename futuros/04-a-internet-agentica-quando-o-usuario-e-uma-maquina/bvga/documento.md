---
tema: A internet agêntica — quando o usuário é uma máquina
slug: a-internet-agentica-quando-o-usuario-e-uma-maquina
autor_login: bvga
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 9
efeitos_ordem_3: 9
tecnologias_citadas: [Model Context Protocol, llms.txt, Web Bot Auth, HTTP 402, x402, pay-per-crawl, Content Signals, Agent Readiness Score, WebMCP, Agent2Agent, Agentic Commerce Protocol, AP2, OpenAPI, robots.txt, Markdown content negotiation]
fontes: 19
confianca: media
experimento: A porta e o preço
skill_usada: futurizacao-bvga
publico_ok: false
---

## 1. Resumo

**A web já é majoritariamente lida por máquinas, mas quase nada nela foi reescrito para máquinas.** Esses dois fatos, medidos pela mesma empresa e no mesmo semestre, são o eixo deste mapa. A Cloudflare afirma que menos da metade das requisições de página HTML na sua rede vem de uma pessoa; e a mesma Cloudflare, ao auditar os 200 mil domínios mais visitados, encontrou Content Signals em 4% deles, negociação de conteúdo em Markdown em 3,9%, e **menos de 15 sites** com MCP Server Card ou catálogo de API.

Essa distância é a informação mais importante que a pesquisa produziu. Ela derruba a leitura fácil de que "a web está sendo reorganizada para agentes". O que está acontecendo é mais estreito e mais interessante: **a camada de protocolo para máquinas foi construída e está pronta; o que não foi construído é o motivo econômico para um site usá-la.**

O mapa aceita três disrupções-raiz, todas condicionais. **R1 — o acesso de máquina passa a ser cobrado por requisição**, com o HTTP 402 saindo de placeholder para mecanismo em produção. **R2 — o acesso passa a ser condicionado à identidade criptográfica do agente**, e "público" deixa de ser o default de uma página. **R3 — o site publica capacidade em vez de página**, e o artefato de projeto do designer deixa de ser a tela.

O Model Context Protocol, que o enunciado do tema trata como o gatilho, foi **rebaixado a antecedente maduro**: mais de 10.000 servidores públicos, adoção por ChatGPT, Gemini, Copilot e Cursor, e governança transferida à Linux Foundation em dezembro de 2025. Isso é ecossistema estabelecido, não ruptura por acontecer. A ruptura está no que o MCP tornou barato — e que ainda não aconteceu.

A análise deriva 24 efeitos em três ordens. As consequências de terceira ordem têm confiança baixa quase sem exceção: melhor protocolo não decide quem paga, quem é reconhecido como agente legítimo, nem o que acontece com quem não tem agente. Há um contrassinal forte contra o mapa inteiro: quando a porta fecha, o agente não desiste — ele se disfarça de navegador. O experimento proposto mede exatamente isso.

**Resultado prático para quem projeta mídia e interação:** pare de tratar "versão para agentes" como um problema de exportação de dados. É um problema de projeto — que ações a marca expõe, com que palavras, a que preço, e o que acontece quando a resposta dada à máquina diverge da dada à pessoa.

## 2. O tema

A entrevista exigida pela seção 0 da skill foi respondida em bloco, antes da pesquisa, no briefing desta rodada. **Não houve interlocutor humano disponível para perguntas de seguimento** — registro isso como limitação de método, não como cumprimento pleno do procedimento. Os parâmetros recebidos:

| Parâmetro | Delimitação |
|---|---|
| Tema | A web como plataforma sendo reprojetada para máquinas: camada de protocolo e de descoberta feita para agentes |
| Horizonte | 2031 |
| Público | Quem projeta mídia e interação |
| Geografia | Global, com nota sobre o Brasil |
| Fora do escopo | O que já é comum em produto de massa — APIs REST documentadas, SDKs, scraping, SEO clássico, chatbot que responde pergunta |
| Fora do escopo (vizinhos) | Detecção e identidade de agente pelo ângulo de segurança (tema 2); comércio e pagamento por agentes como fim em si (tema 5) |
| Postura | Neutra — sem disrupção suspeitada de antemão |
| Profundidade | Três ordens causais |
| Modo | A partir de uma inovação/tema, não de um setor |

Duas delimitações de vocabulário, porque o tema é feito de palavras escorregadias.

**"Internet agêntica"** aqui não significa "IA que usa a internet". Significa a hipótese de que a infraestrutura pública da web — descoberta, acesso, cobrança, identidade — seja reprojetada tendo o programa, e não o olho, como destinatário. Um assistente que lê uma página HTML comum não configura isso; ele usa a web humana. A ruptura só existe se o **site** mudar.

**"Usuário é uma máquina"** não implica ausência de pessoa. Implica que a pessoa deixou de ser quem emite a requisição, quem vê a página e quem decide o que ler. As três coisas podem se separar — e o mapa trata cada separação como um efeito distinto.

A fronteira com os vizinhos foi respeitada assim: onde a identidade de agente aparece (R2), o objeto é **o que a origem serve**, não como o defensor detecta o invasor. Onde o pagamento aparece (R1), o objeto é **quem paga pelo conteúdo que alimenta o agente**, não a arquitetura do meio de pagamento.

Data de corte da pesquisa: 12 de setembro de 2026. Os anos nos efeitos são janelas analíticas para testar hipóteses, não previsões de lançamento. `autor_login: bvga` segue o identificador da skill; não é verificação de identidade.

## 3. Onde isso está hoje

### O que já está medido

**Máquinas já são a maioria do tráfego de página.** A Cloudflare escreve, na sua própria página de produto sobre otimização para motores de resposta, que "menos da metade de todas as requisições de página HTML vêm hoje de um humano". É a afirmação de uma empresa interessada, medida na sua própria rede — mas é a mesma rede de onde vêm quase todos os números públicos sobre este assunto, e ela declara o método.

**A troca é assimétrica e a própria Cloudflare declara a ressalva.** No estudo de crawl-to-refer publicado no Radar, a razão medida para a Anthropic na semana de 19 a 26 de junho de 2025 foi de **70.900 requisições de HTML para cada 1 referência devolvida**; a Mistral apareceu em 0,1:1, no outro extremo. A metodologia divide requisições de user agents da plataforma por requisições cujo header `Referer` continha um hostname dela. A Cloudflare adverte: tráfego vindo de aplicativos nativos não carrega `Referer`, logo **as razões podem estar superestimadas, e por quanto é incerto**. Cito o número porque li o método junto; ele mede uma tendência, não um valor.

**Os editores já precificaram o impacto.** O relatório do Reuters Institute *Journalism, Media, and Technology Trends and Predictions 2026*, com 280 executivos de 51 países respondendo entre 18/11 e 20/12/2025, registra expectativa de **queda de cerca de 43% nas referências de busca em três anos**, e **75%** esperando impacto grande ou muito grande de ferramentas agênticas. O relatório formula a pergunta que interessa a este tema com precisão: *"se um navegador de IA resume automaticamente um conteúdo em nome de um usuário, isso conta como uma visita humana?"* Apenas 20% esperam receita substancial de licenciamento de IA; 20% esperam zero.

### A camada de protocolo: construída

**MCP.** A especificação 2025-06-18 define JSON-RPC 2.0, conexões com estado, negociação de capacidades, e três primitivas de servidor — Resources, Prompts, Tools. Em 9 de dezembro de 2025 a Anthropic doou o protocolo à **Agentic AI Foundation**, fundo dirigido sob a Linux Foundation, co-fundado com Block e OpenAI e apoiado por Google, Microsoft, AWS, Cloudflare e Bloomberg; a Linux Foundation informa 8 membros Platinum, 18 Gold e 21 Silver, e **mais de 10.000 servidores MCP publicados**. O registro oficial de servidores, porém, seguia em *preview* na documentação que abri, com congelamento de API v0.1 — ecossistema grande, catálogo canônico ainda imaturo.

**402 e cobrança por máquina.** O pay-per-crawl da Cloudflare responde HTTP 402 com um header `crawler-price`; o crawler pode reenviar com `crawler-exact-price` ou antecipar com `crawler-max-price`. Está descrito como **"nosso primeiro experimento nessa área", em beta privado**, com preço único e fixo por domínio, sem precificação por página, exigindo registro de crawlers com chaves Ed25519 e assinatura HTTP, e com a Cloudflare como intermediária de pagamento. O AI Crawl Control, GA em 27/08/2025, permite responder 402 em vez de 403 — mas apenas em planos pagos.

**x402.** O site oficial declara, com data de atualização de 25/08/2026, **75,41 milhões de transações e US$ 24,24 milhões de volume nos últimos 30 dias**, operação sobre EVM, Solana e extensível a meios tradicionais, com stablecoins como mecanismo primário, e menciona o lançamento operacional de uma x402 Foundation na Linux Foundation. É documentação de quem promove o protocolo e **não declara nenhuma limitação** — trato o número como ordem de grandeza declarada, não como auditoria.

**Identidade de agente.** O `draft-meunier-web-bot-auth-architecture-05`, de 2 de março de 2026, assinado por Thibault Meunier (Cloudflare) e Sandor Major (Google), propõe assinar cada requisição com chave privada do provedor, substituindo listas de IP e User-Agent — que, nas palavras do documento, podem ser falsificados e não escalam. É **Internet-Draft individual, sem adoção por working group da IETF**, e já foi sucedido por outro draft. No W3C, o AI Agent Protocol Community Group existe desde 8 de maio de 2025 com 273 participantes — e a própria página avisa que hospedar um Community Group **não implica endosso** e que o grupo não tem força normativa.

### A camada de descoberta: construída e quase deserta

O **Agent Readiness Score** da Cloudflare, anunciado em 17 de abril de 2026 e disponível em `isitagentready.com`, avalia quatro dimensões — Discoverability (robots.txt, sitemap, Link Headers/RFC 8288), Content (Markdown para agentes), Bot Access Control (Content Signals, regras de bot de IA, Web Bot Auth) e Capabilities (Agent Skills, catálogo de API, descoberta OAuth, MCP Server Card, WebMCP) — e verifica ainda padrões de comércio (x402, Agentic Commerce Protocol) que não contam pontos. Ao rodá-lo sobre os 200 mil domínios mais visitados, a Cloudflare achou:

| Sinal | Adoção nos 200 mil domínios mais visitados |
|---|---|
| robots.txt | 78% |
| Content Signals (preferência declarada de uso por IA) | 4% |
| Negociação de conteúdo em Markdown | 3,9% |
| MCP Server Card + catálogo de API (RFC 9727) | **menos de 15 sites** |

A conclusão da própria empresa sobre o quanto a web está pronta para agentes: *"not very"*.

**O llms.txt não venceu.** A proposta de Jeremy Howard, publicada em 3/09/2024 e revisada em 10/08/2026, nunca foi aprovada por órgão de padronização — é proposta comunitária em repositório aberto. E o maior distribuidor de tráfego a recusou explicitamente: a documentação do Google Search sobre recursos de IA, atualizada em 10/12/2025, afirma que *"você não precisa criar novos arquivos legíveis por máquina, arquivos de texto de IA ou marcação para aparecer nesses recursos"*.

**O ranking novo é minúsculo.** O Not Human Search, citado no enunciado do tema como "o PageRank da era dos agentes", mostrava **5.319 sites indexados e pontuação média 38** quando abri a página em 12/09/2026, mantido por uma organização chamada Foundry. É um instrumento real; não é ainda um mercado.

### O contrassinal decisivo

A Columbia Journalism Review testou, em 30/10/2025, Atlas (OpenAI), Comet (Perplexity) e o modo Copilot do Edge. Os navegadores agênticos recuperaram um artigo de nove mil palavras exclusivo para assinantes da *MIT Technology Review* — que as interfaces padrão do ChatGPT e da Perplexity não conseguiam acessar, porque a publicação bloqueara os crawlers das empresas. Para o site, conclui a reportagem, **o agente do Atlas era indistinguível de uma pessoa usando Chrome**. Paywalls de sobreposição, que escondem por CSS um texto já carregado, são transparentes para o agente.

Isto significa que **o regime de porta e preço governa apenas o tráfego que quer ser governado**. É a limitação mais séria de R1 e R2, e o mapa a trata como tal.

### Nota sobre o Brasil

O Brasil aparece na pesquisa por dois lados. Pelo comércio — no Super Bots Experience 2026 (18 e 19 de agosto, São Paulo), Fred Succi, VP de produtos e inovação da Visa do Brasil, afirmou que os sites de e-commerce não estão preparados e que será preciso criar versões dedicadas a agentes, porque *"os sites trazem imagens piscando para chamar a atenção do olho humano. Essas coisas são distrações para o robô"*. E pela infraestrutura: Pix e Open Finance dão ao país trilhos transacionais padronizados e ininterruptos que a maior parte do mundo não tem — o que desloca a fricção brasileira do **pagamento** (resolvida) para a **publicação** (não resolvida). É uma hipótese com base em declaração de executivo e em infraestrutura conhecida; não encontrei medição pública de prontidão agêntica de sites brasileiros, e registro isso como lacuna.

## 4. As disrupções-raiz

### Fichas dos candidatos

**Candidato A — Model Context Protocol como conector universal**

- `maturidade`: **maduro**
- `potencial_de_ruptura`: médio (já exercido, não futuro)
- `o_que_rompe`: rompia a integração ponto-a-ponto entre aplicação de IA e ferramenta; isso já ocorreu
- `por_que_agora`: não se aplica — o "agora" foi 2025
- `o_que_falta`: nada estrutural; falta maturidade de catálogo e de segurança, que são problemas de engenharia conhecidos
- `evidencias`: spec 2025-06-18 estável; +10.000 servidores publicados; adoção por ChatGPT, Gemini, Copilot, Cursor, VS Code; governança na Linux Foundation desde 09/12/2025 com 47 organizações-membro
- `veredito`: **rebaixado a antecedente maduro e tecnologia habilitadora.** Um protocolo com fundação própria, oito patrocinadores Platinum e dez mil implementações não é uma capacidade emergente. Tratá-lo como disrupção-raiz seria exatamente o erro que a seção 2.3 da skill proíbe.

**Candidato B — llms.txt e a página escrita para o modelo**

- `maturidade`: emergente, com trajetória negativa
- `potencial_de_ruptura`: **baixo**
- `o_que_rompe`: nada que se tenha demonstrado; a leitura de HTML comum não foi substituída
- `evidencias`: proposta sem órgão de padronização; Google declarando por escrito que não é necessário; 3,9% de negociação em Markdown nos 200 mil maiores domínios
- `veredito`: **rebaixado a sinal**, e sinal de fraqueza. Serve ao mapa como evidência de que publicar para máquina sem contrapartida econômica não pega.

**Candidato C — Prontidão agêntica como ranking e métrica (Agent Readiness Score, Not Human Search, AEO)**

- `maturidade`: emergente
- `potencial_de_ruptura`: médio
- `o_que_rompe`: rompeu o objeto da otimização — de posição em lista para probabilidade de citação
- `o_que_falta`: **evidência de que a pontuação determine acesso, citação ou receita.** O Google, maior distribuidor, diz que não usa os sinais que a pontuação mede
- `veredito`: **rebaixado a sinal forte, não raiz.** É um instrumento de medida que chegou antes do fenômeno que mede. Isso é digno de nota e não é disrupção.

**Candidato D — Cobrança por requisição de máquina**

- `maturidade`: **emergente**
- `potencial_de_ruptura`: **alto** — altera cadeia de valor, custo marginal de acesso, quem pode consumir e o papel dos intermediários
- `o_que_rompe`: o pacto implícito da web aberta, em que servir uma página era grátis porque o leitor eventualmente devolvia atenção ou clique. Com 70.900:1 de um lado e 43% de queda esperada de referências do outro, a contrapartida sumiu
- `por_que_agora`: o 402 saiu do papel — Cloudflare com `crawler-price` em produto, x402 declarando volume de oito dígitos em 30 dias e fundação na Linux Foundation, e quatro protocolos de pagamento agêntico concorrendo
- `o_que_falta`: descoberta de preço (o pay-per-crawl tem preço único por domínio), liquidação sem intermediário único, e um agente que aceite pagar em vez de contornar
- `veredito`: **ACEITA — R1**

**Candidato E — Acesso condicionado à identidade criptográfica do agente**

- `maturidade`: **emergente**, com componentes experimentais
- `potencial_de_ruptura`: **alto** — altera quem pode consumir, a barreira de acesso, a governança e a distribuição de poder
- `o_que_rompe`: a presunção de que uma URL pública responde igual a qualquer requisitante. Web Bot Auth permite à origem servir conteúdos diferentes conforme a assinatura
- `por_que_agora`: draft-05 de março de 2026 assinado por Cloudflare e Google em conjunto; Web Bot Auth entrou como item pontuável num produto de infraestrutura em abril de 2026; Content Signals existe como declaração legível por máquina
- `o_que_falta`: adoção pela origem (4%), adoção por working group da IETF (não houve), e resposta ao contorno documentado pela CJR
- `veredito`: **ACEITA — R2**, com confiança rebaixada pelo contrassinal

**Candidato F — O site publica capacidade, não página**

- `maturidade`: **experimental**
- `potencial_de_ruptura`: **alto** — altera a forma dominante de interação, quem produz, a arquitetura de produto e o papel do profissional de design
- `o_que_rompe`: a página como unidade de publicação e a tela como artefato de projeto. Se o que a marca expõe é um repertório de ações nomeadas e descritas, o design passa a ser redação de capacidade
- `por_que_agora`: os slots existem e foram padronizados num checklist de infraestrutura — Agent Skills, catálogo de API por RFC 9727, MCP Server Card, WebMCP, agent cards A2A; e há pressão de mercado declarada (Visa Brasil)
- `o_que_falta`: **quase tudo em adoção** — menos de 15 sites entre os 200 mil maiores; e um modelo de receita para a ação, já que a página monetizada por display deixa de ser vista
- `veredito`: **ACEITA — R3**, com confiança baixa e prazos longos

### As três raízes

**R1 — O acesso de máquina passa a ser cobrado por requisição.** O HTTP 402, reservado e nunca implementado na especificação original, torna-se o mecanismo pelo qual uma origem diferencia o leitor que paga do que não paga — e o leitor que paga é um programa.

**R2 — O acesso passa a ser condicionado à identidade criptográfica do agente.** "Público" deixa de ser o estado default de uma página: a origem responde conforme quem assina, e não conforme quem pede.

**R3 — O site publica capacidade em vez de página.** A unidade que uma organização expõe à web deixa de ser um documento para ser um repertório de ações declaradas, nomeadas e descritas para consumo por programa.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: R1 — O acesso de máquina passa a ser cobrado por requisição (HTTP 402 em produção)
    efeitos:
      - id: e1
        ordem: 1
        efeito: Publicar deixa de ser decisão editorial binária e vira decisão de tarifação, com preço zero para o navegador humano e preço positivo para o agente identificado.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Surge uma função nova entre redação e produto — quem define o preço por classe de conteúdo e mede a elasticidade do agente a esse preço.
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A métrica editorial desloca-se de audiência para receita por requisição de máquina, e conteúdo que pessoas leem pouco mas agentes consultam muito passa a receber investimento.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Publicadores pequenos delegam a tarifação à CDN, porque preço único por domínio é a única opção que cabe na sua operação.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A CDN torna-se câmara de compensação da informação e ponto único de captura — quem negocia com ela define o preço de acesso a uma fatia grande da web.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Aplicações agênticas passam a ter orçamento por tarefa, e o custo de ler uma fonte entra no projeto da interação em vez de ficar na conta de infraestrutura.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O agente deixa de ler tudo e passa a preferir fontes gratuitas ou baratas, introduzindo um viés de custo na resposta entregue à pessoa.
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Procedência vira elemento obrigatório de interface — de onde veio, quem pagou e o que ficou de fora deixam de ser rodapé e passam a ser parte do desenho da resposta.
                sinal: fraco
                prazo: 2030
                confianca: baixa
  - disrupcao: R2 — O acesso passa a ser condicionado à identidade criptográfica do agente
    efeitos:
      - id: e3
        ordem: 1
        efeito: Público deixa de ser o estado default de uma página, e a mesma URL passa a devolver conteúdos diferentes conforme o requisitante assine ou não.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Abre-se uma assimetria entre agentes de grandes fabricantes, que têm chave reconhecida, e agentes pessoais ou institucionais pequenos, que não conseguem ser reconhecidos.
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Automação pessoal passa a depender de credencial emitida por terceiro, e a barreira para programar contra a web sobe para pesquisadores, estudantes e software assistivo caseiro.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Quem quer ser lido sem assinar nem pagar migra para o navegador agêntico, que se apresenta ao site como pessoa, e a fronteira entre crawler e navegador se apaga.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: A verificação criptográfica passa a governar só o tráfego cooperativo, e a disputa real migra para detecção comportamental dentro da sessão do navegador.
                sinal: medio
                prazo: 2030
                confianca: media
      - id: e4
        ordem: 1
        efeito: Arquivamento, acessibilidade e pesquisa acadêmica caem no mesmo regime de porta e passam a precisar de autorização explícita para ler a web.
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Cresce pressão por uma faixa de acesso isenta para arquivo, acessibilidade e pesquisa, desenhada dentro do protocolo em vez de dentro da lei.
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O registro de quem conta como agente legítimo vira infraestrutura de política pública e alvo de disputa regulatória entre jurisdições.
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: R3 — O site publica capacidade em vez de página
    efeitos:
      - id: e5
        ordem: 1
        efeito: O artefato de projeto deixa de ser apenas a tela e passa a incluir o repertório de ações que a organização expõe a um agente.
        sinal: fraco
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Nomear, descrever e delimitar cada ação torna-se trabalho de design com consequência direta sobre o que o agente faz em nome de alguém.
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A descrição da ferramenta vira simultaneamente superfície de persuasão e superfície de ataque — quem descreve melhor é escolhido, quem descreve mal é explorado.
                sinal: medio
                prazo: 2029
                confianca: media
          - id: e5.2
            ordem: 2
            efeito: A publicidade dentro da página perde função quando quem lê é programa, e o ponto de monetização migra da impressão para a ação concluída.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Conteúdo gratuito sustentado por display encolhe ou vira isca de transação, e o que permanece aberto é o que serve para ser citado.
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Passam a conviver duas versões do mesmo serviço — a que pessoas veem e a que agentes consomem — e mantê-las coerentes vira problema de engenharia e de governança.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Divergências entre as duas versões em preço, disponibilidade ou condição deixam de ser bug e viram questão de direito do consumidor.
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Exige-se prova de equivalência entre o que se responde à máquina e o que se responde à pessoa, criando um tipo novo de auditoria de interface.
                sinal: fraco
                prazo: 2033
                confianca: baixa
```

### O que a estrutura não captura

**A roda finge que as três raízes são independentes, e elas não são.** R1 depende de R2: não se cobra de quem não se identifica. R3 depende de R1: ninguém reescreve o site para máquina sem motivo econômico, e a cobrança é o motivo mais concreto disponível. Se representássemos essas dependências, o mapa seria um grafo com ciclos, e a numeração hierárquica cairia. A árvore é uma simplificação declarada.

**Os efeitos de R2 e R3 se contradizem parcialmente.** `e3.2` (o agente vira navegador indistinguível) mina `e6` (o site mantém duas versões): se o agente se disfarça de pessoa, a versão para máquina não é consumida por quem ela deveria servir. A roda permite escrever os dois; só a prosa permite dizer que um come o outro.

**A roda não representa quem não tem agente.** Todos os efeitos foram derivados do ponto de vista de quem publica ou de quem opera um agente. A terceira pergunta do enunciado — o que acontece com o acesso de quem não tem agente — só aparece obliquamente em `e3.1.1`, e apenas para quem programa. Para quem só lê, não consegui derivar um efeito com mecanismo claro; registro a lacuna em vez de preenchê-la com plausibilidade.

**Os prazos não obedecem às ordens, de propósito.** `e5.1.1` tem prazo 2029 e é de terceira ordem; `e4` tem prazo 2030 e é de primeira. Ordem mede distância causal.

## 6. Sinais fracos e wildcards

### Sinais fracos

**O instrumento chegou antes do fenômeno.** A Cloudflare lançou uma pontuação de prontidão agêntica em abril de 2026 e, ao aplicá-la aos 200 mil maiores domínios, encontrou menos de 15 com MCP Server Card. Medir algo que quase ninguém faz, e transformá-lo em item de dashboard de infraestrutura, é como uma categoria nasce. Vale notar o inverso também: é como uma categoria nasce **e morre**, se a métrica nunca encontrar o que medir.

**Um ranking com 5.319 entradas.** O Not Human Search indexa uma fração desprezível da web e pontua com média 38. Um diretório desse tamanho não distribui tráfego. Ele importa como sintoma: alguém achou que valia a pena construir o PageRank dos agentes antes de existir demanda por ele.

**Content Signals em 4%.** Uma forma legível por máquina de declarar "pode treinar / pode responder / pode arquivar" existe e quase ninguém usa. É o sinal mais barato de adotar do checklist inteiro, e mesmo assim 96% não adotaram. Isso mede vontade, não capacidade.

**A descrição de ferramenta como vulnerabilidade.** O artigo de Huang, Huang, Tran e Milani Fard (arXiv, 23/03/2026) modela ameaças ao MCP por STRIDE e DREAD e identifica *tool poisoning* — instrução maliciosa embutida nos metadados da ferramenta — como a vulnerabilidade de cliente mais prevalente e impactante, em sete clientes testados. O que um designer chama de microcópia é, aqui, vetor de execução.

**Pix e Open Finance como trilho pronto no Brasil.** Um país que resolveu liquidação instantânea e dados financeiros padronizados chega a R1 sem a fricção que trava o resto do mundo. Não medi isso; registro como hipótese testável.

### Wildcards

**Wildcard 1 — Os agentes param de navegar.** A OpenAI descontinuou o navegador Atlas menos de um ano após o lançamento, migrando a capacidade agêntica para dentro do ChatGPT. Se a leitura da web pública for substituída por acordos de licenciamento em massa e índices proprietários, **a prontidão agêntica de um site passa a ser irrelevante**: não adianta abrir a porta se ninguém bate. Isto quebraria R3 inteiro e esvaziaria R1, deixando de pé apenas R2 — e mesmo R2 reduzido a uma questão de bloqueio, não de tarifação. É o cenário em que este tema deixa de ser um tema.

**Wildcard 2 — Servir conteúdo diferente a agente e a pessoa é declarado ilegal.** Baixa probabilidade no horizonte, alto impacto. Um tribunal ou agência de consumo decide que preço ou condição divergentes entre a versão-humana e a versão-máquina configuram prática enganosa. `e6.1.1` passaria de terceira ordem a requisito de conformidade em meses, e a bifurcação seria proibida antes de acontecer. No Brasil, o artigo 20 da LGPD — direito de revisão de decisão automatizada — é uma porta de entrada plausível para essa discussão, ainda que a norma trate de decisão sobre o titular, e não de diferenciação de conteúdo. Registro a distância entre a norma e o uso que faço dela.

## 7. Contra o próprio mapa

**1. Qual efeito é apenas extrapolação linear do presente?**
`e1.1` e `e1.1.1` — a função de precificação de conteúdo e a métrica de receita por requisição. São a transposição direta do rev-ops de publicidade digital para um novo tipo de comprador. A extrapolação supõe que uma indústria que levou vinte anos para montar ad-ops monte o equivalente em cinco, para um mercado cuja receita total hoje é: pay-per-crawl em beta privado com preço único por domínio, e 20% dos editores esperando **zero** receita de licenciamento de IA. Rebaixei `e1.1` e `e1.1.1` para confiança baixa.

**2. Qual efeito assume adoção rápida demais?**
`e6` — a convivência de duas versões do serviço, com prazo 2028. O caso histórico comparável é o **site móvel separado**: entre o m.dot e a consolidação em responsive passaram-se cerca de dez anos, e o desfecho não foi a manutenção de duas versões — foi a desistência de mantê-las. A hipótese do "site para agentes" é estruturalmente o m.dot de novo, e o m.dot perdeu. Mantive `e6` com prazo 2028 porque há pressão declarada de mercado, mas mantive a confiança em média e registro que o precedente aponta para o lado contrário.

**3. Qual disrupção-raiz pode simplesmente não acontecer?**
**R3, a mais provável de falhar.** Menos de 15 sites entre 200 mil. Não é adoção inicial baixa — é ausência de adoção. E há uma razão estrutural, não apenas inércia: o agente já consegue ler HTML. Publicar uma segunda versão é custo puro sem retorno visível, e o maior distribuidor de tráfego declarou por escrito que não usa esses arquivos. R3 só acontece se R1 acontecer antes e criar a contrapartida.

**4. O que quebra na roda se R3 falhar?**
Caem `e5`, `e5.1`, `e5.2`, `e6` e os cinco efeitos derivados — dez dos 24. Sobram R1 e R2, e o mapa vira algo bem mais modesto e provavelmente mais correto: **a web não é reprojetada para máquinas; ela apenas passa a cobrar e a verificar quem entra, continuando a servir o mesmo HTML de sempre.** Essa é, honestamente, a leitura mais defensável da evidência que reuni.

**5. Que contrassinais existem?**
Quatro, todos fortes. (a) O Google recusou explicitamente o formato machine-readable. (b) A adoção dos sinais que sustentam R3 é de 3,9% e <15 sites. (c) A CJR demonstrou que navegadores agênticos contornam bloqueio e paywall sendo indistinguíveis de pessoas — a porta só funciona para quem quer passar por ela. (d) A OpenAI matou o próprio navegador agêntico, o que sugere que nem o formato de consumo está estável.

**6. Que barreiras foram subestimadas?**
A **descoberta de preço**. Um mercado precisa que o comprador saiba o que está comprando antes de pagar; o pay-per-crawl oferece um preço único por domínio, sem diferenciação por página, e o agente não sabe se o artigo vale o valor pedido até tê-lo lido. Subestimei também a **concentração**: a quase totalidade dos números deste mapa vem de uma empresa que é, simultaneamente, quem mede, quem intermedia o pagamento e quem vende a pontuação de prontidão. E subestimei a **fragmentação dos protocolos de pagamento** — x402, ACP, AP2 e MPP disputando o mesmo lugar é sinal de mercado imaturo, não de padrão emergindo.

**7. Que ator teria incentivo para bloquear, capturar ou redirecionar a mudança?**
O **Google**, e ele já agiu: recusar llms.txt preserva o arranjo em que o crawler que treina e o crawler que indexa são o mesmo, e em que nenhum sinal controlado pelo publicador altera o resultado — John Mueller comparou o formato à meta tag keywords, justamente pelo motivo de ser declarado por quem tem interesse. Do outro lado, a **Cloudflare** tem incentivo para acelerar: cada camada nova — 402, Web Bot Auth, Agent Readiness, AEO — é produto dela. Não é acusação; é a razão pela qual triangular aqui é difícil, e por que sinalizo a limitação em quase toda afirmação da seção 3.

**8. Que viés entrou na seleção do tema e dos efeitos?**
Dois. **Viés de fonte instrumentada**: a web agêntica é medida quase só por quem vende infraestrutura para ela, e a evidência disponível superestima a importância do que é mensurável em rede de CDN. **Viés de protocolo**: por ser um tema de especificações, a pesquisa achou facilmente drafts, RFCs e blogs de engenharia, e quase nada sobre pessoas — não encontrei nenhum estudo de uso, nenhuma medição de comportamento de leitor, nada sobre quem não tem agente. O mapa, por isso, fala muito de tubos e pouco de gente. Para um tema cujo público é quem projeta interação, isso é uma falha de cobertura, não um detalhe.

## 8. O que a máquina errou

Erros efetivamente detectados e corrigidos durante esta rodada.

**1. Tratei o MCP como disrupção-raiz na primeira passagem.** O enunciado do tema apresenta o MCP como o gatilho ("virou o conector universal em menos de dois anos"), e a formulação induz a colocá-lo no centro da roda. Ao aplicar o classificador, ele falha em maturidade: dez mil servidores públicos, adoção pelos quatro maiores assistentes, fundação própria na Linux Foundation com 47 membros. Foi rebaixado a antecedente maduro. Sem esse rebaixamento, o mapa inteiro teria centrado numa capacidade já exercida.

**2. Números conflitantes de crawl-to-refer entre fontes que li e fontes que não li.** As buscas retornaram 38.000:1, 20.583:1 e 4.580:1 para a Anthropic, em snippets de páginas que não abri. O blog da Cloudflare, que abri, informa 70.900:1 para a semana de 19–26/06/2025. Usei apenas o número lido, com a ressalva metodológica que a própria Cloudflare declara. A divergência entre versões secundárias é, por si, motivo para não tratar nenhuma delas como fato.

**3. Contagem do Not Human Search.** Os resultados de busca informavam "8.600+" e "9.000+" sites indexados — este último número consta inclusive do enunciado do tema. Ao abrir a página em 12/09/2026, li **5.319**. Mantive o valor lido e registro a divergência; não sei se o índice encolheu ou se os números maiores eram de material promocional.

**4. Um número que descartei por não ter aberto a fonte.** "Mais de um bilhão de respostas HTTP 402 por dia na rede da Cloudflare" apareceu em resultado de busca. É exatamente o tipo de número que sustentaria R1 com força — e por isso mesmo não o uso: não abri a fonte. O mesmo vale para "57,5% do tráfego HTML vindo de bots"; substituí pela formulação que li na página da própria Cloudflare ("menos da metade das requisições de página HTML vêm de um humano"), que diz menos e está verificada.

**5. Data errada do draft Web Bot Auth.** Um resultado de busca datava o `draft-05` em 03/09/2026. O datatracker, aberto, informa **2 de março de 2026**. Usei o lido.

**6. Fonte corporativa sem contraditório.** A página do x402 apresenta 75,41 milhões de transações e US$ 24,24 milhões em 30 dias e **não declara nenhuma limitação**. É documentação de quem promove o protocolo, sem auditoria independente que eu tenha encontrado. Marquei como confiabilidade baixa na seção 11 e não construí nenhum efeito que dependa desse volume.

**7. Uma fonte que não consegui abrir e por isso não usei.** A versão revisada por pares do artigo sobre ameaças ao MCP, no periódico *Journal of Cybersecurity and Privacy* (MDPI), retornou HTTP 403. Cito o preprint no arXiv, cujo resumo li, e declaro que **não verifiquei os achados quantitativos** — o resumo não os apresenta. Igualmente inacessíveis: o repositório do MCP Registry no GitHub e a matéria do Search Engine Land sobre a proporção de bots, ambos 403; e a página de imprensa da x402 Foundation na Linux Foundation, 404.

**Um erro que procurei e não encontrei:** não identifiquei, nesta rodada, nenhuma citação fabricada, autoria trocada ou produto anunciado tratado como disponível. Todas as URLs da seção 11 foram abertas.

## 9. Três cenários para 2031

### Provável — "A web não mudou; o porteiro mudou"

Em 2031, quem abre um site vê a mesma coisa que via em 2026. Quem chega como programa, não. A camada que se consolidou não foi a de publicação — foi a de **controle de entrada**: a maioria dos sites grandes exige assinatura de agente ou responde 402, e a decisão é tomada no painel da CDN, não na redação. A prontidão agêntica virou uma linha num relatório mensal que o time de infraestrutura olha e o time de produto não.

R3 não aconteceu em escala. Escrever uma segunda versão do serviço nunca se pagou, e os agentes continuaram lendo HTML — cada vez mais através de navegadores que se apresentam como pessoas, o que empurrou a disputa para dentro da sessão, como `e3.2.1` previu. O mercado de licenciamento existe e é pequeno: concentrado em algumas dezenas de publicadores grandes, intermediado por dois ou três atores, e irrelevante para todo o resto. Os 20% de editores que em 2025 esperavam zero receita de IA estavam certos.

Para quem projeta mídia e interação, mudou uma coisa concreta: **a pergunta "quem está vendo isto" deixou de ter resposta única**, e a procedência virou elemento de tela.

### Desejável — "Duas portas, e as duas abertas"

Em 2031 existe um regime de acesso com faixas declaradas, e ele funciona porque foi construído em protocolo e não em contrato. Um site diz, de forma legível por máquina, o que é livre, o que custa e quanto — com preço por classe de conteúdo, não por domínio. Há mais de um facilitador de liquidação, e trocar de facilitador não exige trocar de CDN. Arquivo, acessibilidade e pesquisa têm faixa isenta reconhecida por default, e o registro de agentes legítimos é operado por uma fundação multiparte, não por uma empresa.

**As condições que precisaram ser construídas**, e que não estavam dadas em 2026: descoberta de preço por recurso, e não por domínio; pelo menos três intermediários de liquidação em concorrência real; isenção para arquivo e acessibilidade escrita na especificação antes de ser exigida por lei; e — a mais difícil — um working group da IETF adotando de fato o Web Bot Auth, em vez de três empresas implementando um draft individual em conjunto. Nenhuma dessas quatro condições estava a caminho em setembro de 2026.

O ganho para quem projeta: expor capacidade passou a ter retorno, então passou a ser projetado. Descrição de ferramenta virou disciplina, com convenções e crítica, como a microcópia virou nos anos 2010.

### Indesejável — "A web de duas portas, e a segunda tem dono"

Em 2031, ser lido por um agente exige credencial que um punhado de empresas emite, e ser pago por isso exige passar pela câmara de compensação de uma delas. `e1.2.1` aconteceu inteiro. Um publicador independente tem três opções: aceitar o preço único do intermediário, bloquear tudo e desaparecer das respostas, ou abrir de graça. A maioria abre de graça, porque desaparecer é pior.

Do outro lado, quem não é grande o bastante para ter chave reconhecida perdeu acesso programático à web: o script do pesquisador, o leitor de tela feito sob medida, o projeto de aluno que raspava dados públicos para uma monografia. `e3.1.1` deixou de ser efeito de terceira ordem e virou condição de entrada. A web continua "aberta" no sentido de que qualquer pessoa pode ler uma página — e fechada no sentido de que ninguém pode mais escrever um programa que a leia sem permissão de um terceiro.

**O sinal precoce que poderia ter antecipado isso, e que já estava visível em 2026:** o *draft* que define como um agente prova quem é foi escrito em conjunto por duas empresas que controlam, respectivamente, a maior fatia de CDN e o maior distribuidor de tráfego da web — e, dezoito meses depois de publicado, seguia como Internet-Draft individual, sem adoção por working group. Um padrão de identidade que nunca passa por processo aberto de padronização não vira padrão: vira o cadastro de alguém.

## 10. O experimento

### A porta e o preço

**O que é.** Um site real de conteúdo — pode ser o site da disciplina, ou um blog com tráfego modesto e real — instrumentado com três variantes servidas simultaneamente em subdomínios equivalentes, com o mesmo conteúdo, durante oito a doze semanas:

- **Variante A (aberta):** nenhuma restrição. É o controle.
- **Variante B (porta):** exige Web Bot Auth para servir o texto integral. Requisição de agente não assinado recebe 402 com `crawler-price` declarado e um resumo curto em vez do texto.
- **Variante C (capacidade):** aberta, mas com a camada machine-readable completa — `llms.txt`, negociação de conteúdo em Markdown, catálogo de API por RFC 9727, Content Signals e um servidor MCP mínimo expondo duas ferramentas (`buscar` e `ler`).

**A pergunta de futuro que testa.** *Quando a origem fecha a porta e declara um preço, o agente coopera ou se disfarça?* E, em paralelo: *publicar para máquina aumenta a chance de ser citado, ou é custo sem retorno?*

**Tecnologia emergente usada.** Web Bot Auth (assinatura HTTP por chave do provedor), HTTP 402 com `crawler-price`, Content Signals, servidor MCP, negociação de conteúdo em Markdown.

**Por que uma solução madura não responderia à mesma pergunta.** `robots.txt` mais análise de log responde "quem diz que é bot"; não responde "quem é bot e não diz". A pergunta central do experimento — migração de crawler declarado para navegador agêntico indistinguível — só é observável quando existe uma porta que distingue assinado de não-assinado e uma variante aberta para comparar. Nenhum instrumento maduro produz esse contraste.

**O que os participantes fazem.** Duas frentes. **Automática:** os agentes comerciais que já visitam o site são os sujeitos — não se pede nada a eles, observa-se. **Humana:** entre 15 e 25 estudantes ou profissionais recebem a mesma tarefa de pesquisa ("descubra X neste site e me diga de onde veio"), executada com assistente de IA à escolha, uma vez por variante, em ordem sorteada. Registra-se qual variante o assistente conseguiu usar, quanto demorou e se a pessoa soube dizer de onde veio a informação.

**Métrica/observação.**
1. **Taxa de cooperação:** % das requisições de agente que assinam quando B exige assinatura.
2. **Taxa de evasão:** % do tráfego de agente que, após B fechar, reaparece com user-agent de navegador e padrão comportamental de agente (sem carregar recursos secundários, sem eventos de entrada, sequência de leitura linear).
3. **Taxa de pagamento:** % dos 402 que retornam com `crawler-exact-price`.
4. **Retorno da camada de capacidade:** diferença de citação de C contra A em consultas idênticas a três assistentes, medida semanalmente.
5. **Custo:** horas de implementação e manutenção por variante.

**Qual resultado me faria mudar de ideia.** Duas condições de falsificação, declaradas antes:

- **Se a taxa de evasão (2) superar 40%**, então R2 é falsa como escrita: o regime de identidade não bifurca a web, apenas produz camuflagem — e este tema é absorvido pelo tema 2 (detecção comportamental). Abandono a leitura de "web aberta versus web fechada" e reescrevo o mapa em torno de indistinguibilidade.
- **Se a diferença de citação (4) entre C e A ficar dentro do ruído por oito semanas**, então R3 está morta no horizonte e eu a rebaixo a hipótese descartada. Se, ao contrário, C for citada de forma consistentemente maior que A, tenho a contrapartida econômica cuja ausência é hoje o principal argumento contra R3 — e aí é o ceticismo deste mapa que precisa ser revisto.

Um resultado nulo em ambas é informativo e provável. O experimento foi desenhado para poder dar errado.

## 11. Fontes

1. **Model Context Protocol — Specification 2025-06-18.** https://modelcontextprotocol.io/specification/2025-06-18 — Sustenta a arquitetura do MCP (JSON-RPC 2.0, hosts/clients/servers, Resources/Prompts/Tools) e seus princípios declarados de consentimento e segurança. *Confiabilidade alta: fonte primária normativa, ainda que mantida por parte interessada.*

2. **llms.txt — A proposal to standardise on using an /llms.txt file.** https://llmstxt.org/ — Sustenta autoria (Jeremy Howard), data de publicação (03/09/2024), revisão v2 (10/08/2026), formato e ausência de aprovação por órgão de padronização. *Confiabilidade alta para o que a proposta é; nula como evidência de adoção.*

3. **Cloudflare — Introducing pay-per-crawl.** https://blog.cloudflare.com/introducing-pay-per-crawl/ — Sustenta o mecanismo 402 com `crawler-price`/`crawler-exact-price`/`crawler-max-price`, o status de beta privado, o preço único por domínio e a Cloudflare como intermediária. *Confiabilidade média: fonte primária de parte diretamente interessada no produto.*

4. **Cloudflare Developers — AI Crawl Control launch (changelog, 27/08/2025).** https://developers.cloudflare.com/changelog/2025-08-27-ai-crawl-control-launch — Sustenta a disponibilidade geral, a origem no antigo "AI Audit" e a resposta 402 restrita a planos pagos. *Confiabilidade alta para fato de produto.*

5. **Cloudflare — The crawl before the fall… of referrals.** https://blog.cloudflare.com/ai-search-crawl-refer-ratio-on-radar/ — Sustenta a razão de 70.900:1 para a Anthropic (19–26/06/2025), 0,1:1 para a Mistral, a metodologia de cálculo e a ressalva sobre `Referer` ausente em apps nativos. *Confiabilidade média-alta: método declarado e ressalva explícita, mas medido e publicado por parte interessada.*

6. **Cloudflare — Introducing the Agent Readiness score (17/04/2026).** https://blog.cloudflare.com/agent-readiness/ — Sustenta as quatro dimensões da pontuação e, sobretudo, os dados de adoção nos 200 mil domínios mais visitados: 78% robots.txt, 4% Content Signals, 3,9% Markdown, <15 sites com MCP Server Card. *Confiabilidade média-alta: é a medição mais ampla que encontrei, feita por quem vende a solução para o problema que ela revela.*

7. **Cloudflare — From ranking to recommended: get your site ready for the age of AI agents.** https://blog.cloudflare.com/aeo/ — Sustenta a afirmação de que menos da metade das requisições de página HTML vem de humanos, e a lista de recursos agent-native (OAuth discovery, MCP, A2A, Web Bot Auth, WebMCP). *Confiabilidade média: página de produto; a afirmação de tráfego não vem acompanhada de método nessa página.*

8. **Cloudflare — Building the agentic cloud: everything we launched during Agents Week 2026.** https://blog.cloudflare.com/agents-week-in-review/ — Sustenta que Agent Readiness e redirecionamento de crawlers verificados foram lançados como produto em abril de 2026. *Confiabilidade alta para fato de produto.*

9. **IETF — draft-meunier-web-bot-auth-architecture-05 (02/03/2026).** https://datatracker.ietf.org/doc/html/draft-meunier-web-bot-auth-architecture — Sustenta autoria (Meunier/Cloudflare, Major/Google), a arquitetura de assinatura por chave do provedor, o status de **Internet-Draft individual sem adoção por WG** e as considerações de privacidade e replay. *Confiabilidade alta: documento primário com status declarado.*

10. **Google Search Central — AI features and your website (atualizado em 10/12/2025).** https://developers.google.com/search/docs/appearance/ai-features — Sustenta a frase "You don't need to create new machine readable files, AI text files, or markup to appear in these features". *Confiabilidade alta: declaração oficial do maior distribuidor de tráfego, contrassinal central deste mapa.*

11. **MCP Blog — MCP joins the Agentic AI Foundation (09/12/2025).** https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/ — Sustenta a doação à Linux Foundation, os co-fundadores, os apoiadores e o número de 10.000 servidores ativos. *Confiabilidade média-alta: primária, de parte interessada.*

12. **Linux Foundation — Formation of the Agentic AI Foundation (09/12/2025).** https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation — Sustenta os três projetos fundadores, a composição de membros (8 Platinum, 18 Gold, 21 Silver) e os +10.000 servidores MCP publicados. *Confiabilidade alta para fatos de governança.*

13. **x402 — site oficial do protocolo (dados de 25/08/2026).** https://www.x402.org/ — Sustenta o mecanismo (402 + stablecoin + facilitador), o suporte multi-chain e os volumes declarados de 75,41 milhões de transações e US$ 24,24 milhões em 30 dias. *Confiabilidade baixa para os números: fonte promocional, sem auditoria independente localizada e sem declaração de limitações. Não construí efeito algum sobre esses valores.*

14. **W3C — AI Agent Protocol Community Group.** https://www.w3.org/community/agentprotocol — Sustenta a criação em 08/05/2025, os 273 participantes, os três documentos em elaboração e o aviso de que hospedar um CG **não implica endosso** nem força normativa. *Confiabilidade alta.*

15. **Huang, C.; Huang, X.; Tran, N. P.; Milani Fard, A. — Model Context Protocol Threat Modeling and Analyzing Vulnerabilities to Prompt Injection with Tool Poisoning. arXiv:2603.22489 (23/03/2026).** https://arxiv.org/abs/2603.22489 — Sustenta que *tool poisoning* é apontado como a vulnerabilidade de cliente mais prevalente e impactante, em sete clientes MCP analisados por STRIDE/DREAD. *Confiabilidade média: li o resumo, não o texto integral; a versão em periódico revisado por pares retornou 403 e os achados quantitativos não foram verificados.*

16. **Columbia Journalism Review — How AI Browsers Sneak Past Blockers and Paywalls (30/10/2025).** https://www.cjr.org/analysis/how-ai-browsers-sneak-past-blockers-and-paywalls.php — Sustenta o contrassinal central: Atlas e Comet recuperaram artigo exclusivo de assinantes da *MIT Technology Review* que as interfaces padrão não acessavam, e o agente do Atlas é indistinguível de uma pessoa usando Chrome. *Confiabilidade alta: veículo de análise independente, com experimento descrito.*

17. **Reuters Institute for the Study of Journalism — Journalism, Media, and Technology Trends and Predictions 2026.** https://reutersinstitute.politics.ox.ac.uk/journalism-media-and-technology-trends-and-predictions-2026 — Sustenta a amostra (280 executivos, 51 países, 18/11–20/12/2025), a expectativa de ~43% de queda em referências de busca, os 75% que esperam impacto grande de ferramentas agênticas, e a formulação do problema de medição diante de navegadores agênticos. *Confiabilidade alta para as expectativas do setor; é pesquisa de opinião de executivos, não medição de fato.*

18. **Not Human Search.** https://nothumansearch.ai/ — Sustenta a existência do ranking por prontidão agêntica e sua escala real em 12/09/2026: 5.319 sites indexados, pontuação média 38. *Confiabilidade média: dados autodeclarados pelo próprio serviço, divergentes de números maiores que circulam em material secundário.*

19. **MobileTime — Comércio agêntico exigirá sites para agentes (13/08/2026).** https://www.mobiletime.com.br/noticias/13/08/2026/comercio-agentico-sites/ — Sustenta a declaração de Fred Succi, VP de produtos e inovação da Visa do Brasil, no Super Bots Experience 2026, sobre a necessidade de versões de site dedicadas a agentes. *Confiabilidade baixa-média: imprensa especializada reportando declaração de executivo interessado; é evidência de discurso de mercado, não de capacidade ou de adoção.*

## 12. Anexo — o levantamento bruto

### Candidatos descartados e rebaixados

| Candidato | Maturidade | Ruptura | Veredito |
|---|---|---|---|
| Model Context Protocol | maduro | média (já exercida) | Antecedente maduro / habilitadora |
| llms.txt | emergente, trajetória negativa | baixa | Sinal (de fraqueza) |
| Agent Readiness Score / Not Human Search / AEO | emergente | média | Sinal forte, não raiz |
| MCP Registry | experimental (preview, API freeze v0.1) | baixa | Habilitadora |
| Agent2Agent (A2A) | emergente | não avaliada | Fora do escopo — comunicação entre agentes, não web como plataforma |
| ACP / AP2 / MPP | emergente | alta, mas do tema 5 | Fora do escopo por fronteira declarada |
| Navegador agêntico como formato de produto | emergente e instável | média | Contrassinal e wildcard (Atlas descontinuado) |
| Detecção comportamental de agente dentro da sessão | emergente | alta | Fora do escopo — tema 2 |
| Cobrança por requisição (pay-per-crawl + x402) | emergente | **alta** | **R1** |
| Identidade criptográfica como condição de acesso | emergente/experimental | **alta** | **R2** |
| Site publica capacidade, não página | **experimental** | **alta** | **R3** |

### Arestas causais cortadas

- **"402 em escala → volta do micropagamento para leitores humanos."** Cortada. Não consegui completar "se o agente paga por requisição, o humano volta a pagar por artigo porque ______". São mercados diferentes: o agente não tem fricção de decisão, o humano tem, e foi essa fricção que matou o micropagamento nos anos 2000. Sem mecanismo, sem aresta.
- **"Web agêntica → fim do design visual."** Cortada por ser extrapolação retórica. A pessoa continua vendo a resposta em algum lugar; o que muda é onde e quem a compõe, o que já está coberto por `e2.1.1`.
- **"Prontidão agêntica alta → mais receita."** Cortada por falta de evidência. Nenhuma fonte lida liga pontuação a receita. A hipótese está no experimento, como métrica 4, não no mapa.
- **"MCP em toda parte → agentes deixam de navegar."** Cortada como aresta e promovida a wildcard 1, porque a evidência (descontinuação do Atlas) aponta para instabilidade de formato, não para substituição por MCP.
- **"Bifurcação da web → exclusão de quem não tem agente."** Tentada e não completada com mecanismo. Quem não tem agente continua abrindo a página no navegador, e nada na evidência sugere que a versão humana some. Registrada como lacuna do mapa na seção 5, em vez de efeito inventado.

### Buscas sem resultado ou com acesso negado

- **`Foil` (detecção de agentes), citado no enunciado do tema:** não localizei fonte primária nem documentação. Não entrou no mapa.
- **`https://www.linuxfoundation.org/press/linux-foundation-launches-x402-foundation`:** HTTP 404. A existência da x402 Foundation consta apenas da página do próprio x402 e de material secundário; não a trato como fato verificado.
- **`https://github.com/modelcontextprotocol/registry`:** HTTP 403 na primeira tentativa; obtive os dados por segunda via da mesma documentação.
- **MDPI, *Journal of Cybersecurity and Privacy* 6(3):84:** HTTP 403. Usei o preprint no arXiv, com a limitação declarada.
- **Search Engine Land (proporção bots × humanos):** HTTP 403. Substituí pela afirmação equivalente e mais conservadora da página da Cloudflare.
- **`radar.cloudflare.com/ai-insights`:** HTTP 403. Números agregados atuais do Radar não foram verificados em primeira mão.
- **Medição de prontidão agêntica de sites brasileiros:** nenhuma encontrada. A nota sobre o Brasil apoia-se em declaração de executivo e em infraestrutura conhecida (Pix, Open Finance), não em medição.
- **Estudos de uso com pessoas sobre navegação agêntica:** nenhum encontrado. É a maior lacuna de cobertura desta rodada e a razão do viés declarado na resposta 8 da seção 7.

### Contrassinais registrados

1. Google recusa explicitamente arquivos machine-readable (10/12/2025).
2. Adoção da camada de capacidade é de <15 sites em 200 mil (04/2026).
3. Content Signals em 4%, apesar de ser o item mais barato do checklist.
4. Navegadores agênticos contornam bloqueio e paywall sendo indistinguíveis de pessoas (CJR, 10/2025).
5. OpenAI descontinuou o Atlas menos de um ano após o lançamento.
6. Pay-per-crawl seguia em beta privado, com preço único por domínio, mais de um ano após o anúncio.
7. Web Bot Auth continua Internet-Draft individual, sem adoção por WG, 18 meses depois.
8. Quatro protocolos de pagamento agêntico disputando o mesmo lugar — sinal de mercado imaturo.
9. 20% dos editores esperam receita zero de licenciamento de IA (Reuters Institute).
10. O precedente histórico mais próximo de R3 — o site móvel separado — terminou em consolidação, não em duas versões.

### Hipóteses alternativas ao mapa

**H-alt 1 — "Nada disso é sobre a web; é sobre licenciamento."** O caminho dominante não seria protocolo nenhum, mas contrato bilateral entre fabricantes de modelo e grandes publicadores, com o resto da web permanecendo como está e sendo lida de graça. Compatível com 20% esperando receita zero e com a concentração de acordos já existente. Se verdadeira, R1 acontece só para quem tem advogado, e R2 e R3 não acontecem.

**H-alt 2 — "O agente nunca precisou de ajuda."** Modelos ficaram bons o suficiente em ler HTML sujo, e a camada machine-readable é solução para um problema que se resolveu sozinho. Explica a adoção de 3,9% melhor que inércia explica. Se verdadeira, R3 está morta e o Google está certo.

**H-alt 3 — "A unidade de bifurcação não é o site, é o navegador."** A separação humano/máquina não se dá na origem e sim no cliente: o navegador agêntico vira o único ponto onde se sabe quem é quem, e a disputa se resolve entre fabricantes de navegador e de sistema operacional, não entre sites e crawlers. Consistente com a CJR e com a absorção do Atlas para dentro do ChatGPT. Se verdadeira, este tema migra inteiro para o tema 2.

### Observações que não entraram no mapa final

- O `robots.txt` está em 78% dos 200 mil maiores domínios e é, de longe, o sinal mais adotado do checklist. É um arquivo de 1994. Isso diz algo sobre a velocidade real de adoção de convenção na web que nenhum dos efeitos da roda captura.
- A Cloudflare ocupa simultaneamente quatro papéis neste tema: mede o tráfego, intermedia o pagamento, emite a pontuação de prontidão e co-assina o draft de identidade. Não há, nas fontes que li, medição independente de nenhuma das quatro coisas. Isso não invalida os dados; torna toda a seção 3 dependente de um único observador, e o leitor deve saber disso.
- O enunciado do tema informa "9.000+ ferramentas e APIs" indexadas pelo Not Human Search; a página mostrava 5.319 em 12/09/2026. Reproduzir o número do enunciado sem conferir teria sido o erro mais fácil desta rodada.
