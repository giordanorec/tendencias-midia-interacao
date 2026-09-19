---
tema: "A internet agêntica: quando o usuário é uma máquina"
slug: a-internet-agentica-quando-o-usuario-e-uma-maquina
autor_login: jlsn
zona_de_interesse: Sistemas de Informação
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: Global, com nota sobre o Brasil
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 12
tecnologias_citadas: ["Model Context Protocol", "WebMCP (document.modelContext)", "llms.txt", "HTTP 402 Payment Required", "Cloudflare pay-per-crawl", "x402", "Web Bot Auth", "RFC 9421 HTTP Message Signatures", "robots.txt", "OpenAPI", "ai-plugin.json", "Schema.org", "Cloudflare AI Crawl Control", "Not Human Search"]
fontes: 9
confianca: media
experimento: Duas portas, um endereço
skill_usada: futurizacao-jlsn
publico_ok: false
---

## 1. Resumo

A web foi desenhada para olhos. Está sendo reequipada para programas: `llms.txt` como sumário legível por máquina, WebMCP expondo o site como conjunto de ferramentas chamáveis, Web Bot Auth dando identidade criptográfica a quem rasteja e HTTP 402 transformando acesso de robô em transação. Três rupturas se combinam — o site publica capacidade em vez de página; o acesso de máquina vira preço por requisição; e a porta passa a decidir quem entra. Delas decorrem seis efeitos de primeira ordem que atingem diretamente quem projeta mídia e interação: a interface se desdobra em dois artefatos, o SEO se converte em disputa por prontidão agêntica, a publicidade perde inventário na fatia agêntica do tráfego e a "visita" deixa de ser a unidade de audiência. Até 2031 o risco central não é a web fechar — é ela se partir em duas, uma barata e comoditizada para quem navega à mão e outra cara, assinada e negociada para quem tem agente. A confiança do mapa é média: a camada de protocolo já existe e é mensurável, mas a adoção real ainda é minoritária (5,61% do top 10 mil em junho de 2026).

## 2. O tema

A internet agêntica é a reorganização da web em torno de um visitante que não tem olhos. Não se trata de automação de navegação — isso existe há duas décadas como scraping — mas de o próprio site passar a publicar, deliberadamente, uma superfície feita para ser consumida por programa: um sumário em Markdown (`llms.txt`), um contrato de ferramentas (MCP, WebMCP), uma identidade verificável para o cliente automatizado (Web Bot Auth) e um preço para o acesso dele (HTTP 402).

Onde isso encosta em mídia e interação: em tudo o que a disciplina chama de superfície. Se o principal visitante de uma página é um programa, a hierarquia visual não medeia mais a decisão; o funil não é percorrido; a impressão publicitária não acontece; a jornada desenhada é atalhada. O que o projetista controla deixa de ser o layout e passa a ser o vocabulário de ações que o site declara — e a descrição em linguagem natural de cada uma delas. Isso desloca o objeto da profissão sem extinguir a profissão.

Merece um mapa porque o movimento é simultâneo em três camadas independentes que costumam andar separadas: a camada de publicação (o que o site expõe), a camada de identidade (quem pode pedir) e a camada econômica (quanto custa pedir). Quando as três se movem juntas em menos de dois anos, o resultado não é uma melhoria de eficiência — é uma mudança de quem é o público.

## 3. Onde isso está hoje

**O que existe e funciona.**

A camada de protocolo saiu do papel. O WebMCP é um rascunho do W3C Web Machine Learning Community Group, mantido por editores da Microsoft e do Google, que propõe `document.modelContext` — uma API pela qual o desenvolvedor registra funções JavaScript ou elementos `<form>` como "ferramentas" com descrição em linguagem natural e esquema de entrada, em vez de deixar o agente tirar print da tela e adivinhar onde clicar. O repositório está marcado como experimental e tem 4,1 mil estrelas e 121 issues abertas, o que descreve bem o estágio: consenso de direção, não de detalhe.

A camada de identidade também. O Web Bot Auth define que o cliente automatizado assine cada requisição HTTP com chave privada Ed25519 e publique a pública num diretório do próprio domínio; o servidor confere. A Cloudflare já opera isso em produção, exigindo três cabeçalhos — `Signature-Input` com a tag `web-bot-auth`, `Signature` e `Signature-Agent` apontando para o diretório de chaves. É o fim técnico do User-Agent como declaração de fé.

A camada econômica é a mais concreta. O pay-per-crawl da Cloudflare responde HTTP 402 com cabeçalho `crawler-price`; o rastreador que aceita repete o pedido com `crawler-exact-price` e recebe 200 com `crawler-charged`. A autenticação é o próprio Web Bot Auth, e a Cloudflare atua como merchant of record. O publisher configura por rastreador: permitir de graça, cobrar ou bloquear.

E já existe ranking novo nascendo. O Not Human Search indexa e pontua sites de 0 a 100 em sete sinais de prontidão agêntica, com pesos declarados: `llms.txt` (25), `ai-plugin.json` (20), OpenAPI (20), API estruturada (15), servidor MCP (10), regras de bot no `robots.txt` (5) e Schema.org (5). No momento da consulta o índice reportava 5.342 sites e score médio 38 — número que, por si, já diz que a web não está pronta.

**O que existe e não funciona.**

A adoção. O levantamento mais rigoroso que se abre sobre `llms.txt` mede 5,61% do top 10 mil sites com arquivo válido em junho de 2026 — 421 de 7.504 rastreados —, partindo de 1,04% em julho de 2025. É crescimento de cinco vezes em doze meses sobre uma base ínfima: extrapolado para o top 1 milhão, dá cerca de 39 mil sites. Qualquer leitura que trate `llms.txt` como padrão consolidado está errada.

A padronização também claudica. O rascunho de arquitetura do Web Bot Auth na IETF (`draft-meunier-web-bot-auth-architecture-05`, de 2 de março de 2026) está **expirado** desde 3 de setembro de 2026 e declara não ter standing formal no processo de padronização — foi substituído por um rascunho focado no protocolo. Isso não significa abandono; significa que estamos diante de trabalho em curso, e não de norma.

E o desequilíbrio econômico que motiva tudo isso é documentado, ainda que com números de fontes secundárias que convém tratar com reserva: relações crawl-to-refer de 23.951:1 para o ClaudeBot no primeiro trimestre de 2026, 1.276:1 para o GPTBot, 111:1 para o PerplexityBot, contra 4,9:1 do Google. O relatório State of the Internet da Akamai, citado pela imprensa brasileira de e-commerce, estima que chatbots geram cerca de 96% menos tráfego de referência que buscadores tradicionais e que só 1% dos usuários clica nas fontes indicadas.

**Quem está construindo.** Anthropic (MCP), Google e Microsoft (WebMCP, no W3C), Cloudflare (pay-per-crawl, AI Crawl Control, Web Bot Auth com Google), a IETF (grupo de trabalho de Web Bot Auth), e uma periferia de projetos de índice e catálogo — Not Human Search entre eles — apostando que descoberta para máquina será um mercado.

**Nota sobre o Brasil.** O material disponível é de imprensa especializada replicando estudo global; não se abriu nenhum levantamento com recorte brasileiro de adoção de `llms.txt`, de bloqueio de rastreadores de IA ou de acordos de licenciamento com veículos nacionais. Trate a ausência como lacuna de evidência, não como ausência de fenômeno — a infraestrutura em uso no Brasil é majoritariamente a mesma (Cloudflare, Google), o que significa que a política de acesso é importada junto com o CDN.

## 4. As disrupções-raiz

### D1 — O site deixa de publicar página e passa a publicar capacidade

**O que rompe.** O modelo mental de que publicar na web é dispor conteúdo numa superfície visual e deixar que o visitante o interprete. Com WebMCP e MCP, o site declara o que sabe fazer, com que parâmetros, em linguagem natural — e inverte o controle: não é o agente que adivinha a interface, é o site que enumera o possível. A página passa a ser um dos renderizadores da capacidade, não a capacidade.

**Por que agora e não há cinco anos.** Porque só agora existe um consumidor capaz de ler descrição em linguagem natural e decidir. APIs REST documentadas existem desde sempre; o que faltava era um cliente que não precisasse de integração prévia. O MCP virou conector universal em menos de dois anos e o WebMCP levou isso para dentro do navegador, com editores de Google e Microsoft num rascunho do W3C.

**O que falta acontecer.** Estabilização da API (o repositório ainda está marcado como experimental, com 121 issues abertas), suporte em mais de um motor de navegador, e — o mais difícil — uma razão comercial para o site declarar capacidade em vez de esconder. Hoje quem publica `llms.txt` são sobretudo produtos de API cujo público já é máquina; o comércio e a mídia não têm o mesmo incentivo.

### D2 — O acesso de máquina vira transação precificada por requisição

**O que rompe.** O contrato implícito da web aberta: rastrear é grátis, e o rastreador paga em tráfego de volta. As relações crawl-to-refer publicadas mostram que esse pagamento deixou de existir na prática — milhares de páginas lidas por cada visita devolvida. O 402 reescreve o contrato: acesso é mercadoria, com preço em cabeçalho HTTP e liquidação por terceiro.

**Por que agora.** Porque só agora há como saber **quem** está pedindo. Cobrar exige identificar, e identificar exigia o Web Bot Auth. `robots.txt` é pedido educado sem verificação; assinatura Ed25519 é fato verificável. Os dois nasceram juntos por necessidade: o pay-per-crawl da Cloudflare usa o Web Bot Auth como autenticação.

**O que falta acontecer.** Liquidação sem depender de um único merchant of record — hoje o arranjo concentra a intermediação numa empresa —, e descoberta de preço que não seja tabela fixa por domínio. Também falta o outro lado: o agente precisa ter orçamento e política de gasto, e isso ainda é raro fora de demonstração.

### D3 — A porta passa a decidir quem entra, e a web se bifurca

**O que rompe.** A premissa de que a mesma URL devolve a mesma coisa a todo mundo — base do arquivamento, da checagem por terceiros e da própria norma antifraude que chama cloaking de engano. Com identidade de agente na entrada, servir conteúdo diferente por identidade deixa de ser fraude e vira arquitetura.

**Por que agora.** Porque a infraestrutura de borda — Cloudflare, Akamai, AWS, Vercel — já classifica tráfego automatizado em escala e agora passa a classificá-lo *por operador e por finalidade*, não por ser bot ou não. A separação entre rastreador de busca e rastreador de treino é a primeira taxonomia comercial dessa bifurcação.

**O que falta acontecer.** Que o lado humano da bifurcação sinta a diferença. Enquanto a versão para pessoa continuar completa, a bifurcação é invisível e indolor. O mapa abaixo aposta que ela deixa de ser indolor quando a versão agêntica passa a ser a melhor — mais rápida, mais fresca, mais barata de consumir.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O site deixa de publicar página e passa a publicar capacidade
    efeitos:
      - id: e1
        ordem: 1
        efeito: Sites passam a manter uma superfície de capacidades declaradas ao lado do HTML, e a página deixa de ser a unidade de publicação.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O design de interface se desdobra em dois artefatos — a tela para a pessoa e o contrato de ferramentas para a máquina — e surge a função de projetista de superfície agêntica.
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O design perde o monopólio da tela como lugar da decisão e passa a disputar o vocabulário de ações que o agente enxerga.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O SEO se cinde em otimização para agente, e o ranking passa a medir prontidão declarada em vez de autoridade de link.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Auditoria de prontidão agêntica vira serviço com selo público, e o score entra como cláusula em contrato de agência.
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A conversão deixa de depender do funil visual, porque o agente executa a ação declarada sem percorrer a jornada desenhada.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A publicidade display perde inventário na fatia agêntica do tráfego, porque não há impressão a servir a quem não tem olhos.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A persuasão migra para dentro da descrição da ferramenta e do dado estruturado, e a redação dessa descrição vira objeto de disputa comercial e de regulação por engano.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Marcas passam a competir por serem a ferramenta escolhida pelo agente, e não a página clicada pela pessoa.
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: A lealdade de marca se desloca para o operador do agente, que herda a relação que era do site.
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: O acesso de máquina vira transação precificada por requisição
    efeitos:
      - id: e3
        ordem: 1
        efeito: Acesso automatizado vira linha de receita cotada por requisição, com 402 e assinatura criptográfica no lugar do pedido educado do robots.txt.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Publishers deixam de vender atenção e passam a vender leitura, cotando o conteúdo por acesso de agente.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Forma-se um mercado de contexto com preço variável por frescor e exclusividade, no qual o arquivo antigo se comoditiza e a apuração recente vira ativo caro.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Agentes passam a operar com orçamento, e o custo de consultar cada fonte entra explicitamente no plano de execução.
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: A qualidade da resposta passa a depender de quanto o usuário pode gastar, instalando uma desigualdade epistêmica precificada.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Identidade criptográfica de agente vira condição de entrada, e o tráfego automatizado anônimo é expulso da web comercial.
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Consolida-se um conjunto pequeno de operadores de agente com chave reconhecida, e entrar nessa lista vira barreira de entrada de mercado.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A política de acesso de dois ou três intermediários passa a valer mais que qualquer regulação nacional de plataforma, porque define o que é descobrível.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Agentes pessoais e de código aberto ficam do lado de fora das portas assinadas, salvo quando delegam a um operador credenciado.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Ter agente credenciado vira condição prática de acesso pleno, e quem navega à mão passa a receber uma web mais pobre e mais lenta.
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: A porta passa a decidir quem entra, e a web se bifurca
    efeitos:
      - id: e5
        ordem: 1
        efeito: A mesma URL passa a devolver respostas diferentes conforme quem pede — pessoa, agente assinado ou agente anônimo.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A verificabilidade pública do conteúdo cai, porque o que o agente leu deixa de ser o que o leitor vê.
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O arquivamento da web deixa de ser registro suficiente e passa a exigir captura com credencial de agente para ter valor probatório.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Servir conteúdo distinto por identidade deixa de ser fraude e vira arquitetura legítima, esvaziando a norma de conteúdo único.
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Disputas jurídicas passam a exigir prova de qual versão foi servida a quem, e o log de negociação de acesso vira peça de processo.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: A noção de visitar um site se esvazia, porque a sessão acontece no agente e o site vira back-end.
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A métrica de audiência migra de visita para chamada de ferramenta, e a analítica de produto se reescreve inteira.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O mercado publicitário perde a moeda comum da impressão e migra para resultado atribuível, concentrando poder em quem controla a medição.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A web aberta se preserva como camada de dado barato e comoditizado, enquanto o valor sobe para a camada de protocolo negociada.
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: O navegador perde a centralidade de lugar da web, e estar na internet deixa de significar ter um site.
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**O que o bloco YAML não consegue dizer.**

Primeiro: os três ramos não são independentes, e a árvore finge que são. D2 (pagamento) só funciona porque D3 (identidade) existe — literalmente: o pay-per-crawl da Cloudflare autentica por Web Bot Auth. E D1 (capacidade declarada) tem incentivo econômico justamente porque D2 cria uma forma de cobrar por ela. Numa roda, isso apareceria como reentrância; num YAML hierárquico, some.

Segundo: os prazos são ordenações, não datas. O que o mapa afirma com alguma segurança é a **ordem** — identidade antes de preço, preço antes de bifurcação econômica, bifurcação econômica antes de mudança cultural na ideia de "site". Se a adoção for duas vezes mais lenta, toda a coluna de prazo desliza junta e o mapa continua válido; o que o invalidaria é a ordem trocar.

Terceiro: há uma assimetria de sinal que o campo `sinal` isolado não comunica. Os efeitos de primeira ordem ligados a **infraestrutura** (e3, e4) têm sinal forte e já são observáveis em produção. Os ligados a **prática de projeto** (e1, e2) têm sinal médio a fraco — e são exatamente os que interessam ao público desta análise. Ou seja: o que já está acontecendo é a plataforma; o que ainda não aconteceu é a profissão reagir. Essa defasagem é a janela de decisão de quem lê.

Quarto: a roda descreve um mundo em que a bifurcação se aprofunda. Ela não representa bem o cenário em que a web agêntica simplesmente **absorve** a humana — isto é, em que a interface conversacional vence e o site deixa de ser bifurcado porque deixa de ser visitado por gente. Esse desfecho está insinuado em e6.2.1, mas ele é qualitativamente outro mapa, não um galho deste.

## 6. Sinais fracos e wildcards

**Sinais fracos.**

1. *O score de prontidão agêntica como ranking público.* Um índice independente que pontua sites de 0 a 100 com pesos declarados — 25 pontos para `llms.txt`, 10 para MCP — é o embrião de um PageRank para máquinas. O que o torna sinal fraco e não moda: os pesos são arbitrários e auditáveis, o que convida à otimização. A média 38 num índice que só aceita sites com ao menos um sinal forte diz que até os interessados estão mal preparados.

2. *O `llms.txt` empurrado por plataforma, não por escolha.* Quando a adoção salta num segmento porque o provedor de e-commerce publicou o arquivo por padrão em todas as lojas, o número de adoção deixa de medir intenção e passa a medir concentração de plataforma. É o mesmo mecanismo pelo qual HTTPS virou universal — e vale prestar atenção porque significa que a web agêntica pode ser ligada por decreto de três ou quatro fornecedores de infraestrutura.

3. *A auditoria de navegação agêntica entrando na ferramenta de qualidade web.* No momento em que verificar prontidão para agente entra na mesma lista que acessibilidade e estabilidade de layout, a prontidão agêntica deixa de ser diferencial e vira higiene — e, como acessibilidade, provavelmente vira higiene mal cumprida.

4. *O rascunho de arquitetura expirado na IETF.* Um documento que expira e é substituído por outro focado em protocolo é sinal fraco de que a discussão saiu do "por que" e foi para o "como" — mas também de que ninguém garantiu ainda a governança do "quem credencia".

**Wildcards.**

*O wildcard principal (baixa probabilidade, alto impacto): um agente amplamente usado passa a comprar acesso e a ocultar a fonte.* Se o operador do agente paga pelo conteúdo via 402, ele adquire justificativa comercial para **não** citar o publisher — já pagou. A citação deixa de ser a moeda e o pagamento a substitui. O efeito é a extinção silenciosa do link como instituição cultural da web: não por bloqueio, mas por quitação. Impacto alto porque desmonta simultaneamente a atribuição jornalística, o rastro de proveniência e o próprio mecanismo pelo qual um site pequeno se torna conhecido.

*Wildcard secundário, o da própria disciplina: um grande portal bloquear todos os agentes e a audiência não notar.* Ele é mais provável do que parece e é interessante pelo motivo oposto ao que se imagina — se ninguém nota, a tese de que os agentes são o novo público está errada, e metade deste mapa cai.

*Wildcard invertido: um regulador exigir paridade de conteúdo entre a versão humana e a agêntica.* Uma norma de "mesma URL, mesmo conteúdo" mataria D3 no berço e transformaria a bifurcação num problema de conformidade. Baixíssima probabilidade até 2031, mas alto impacto porque reverteria o ramo inteiro de e5.

## 7. Contra o próprio mapa

**Qual efeito é apenas extrapolação linear do presente.** O ramo e3.1 → e3.1.1, o "mercado de contexto com preço por frescor". Ele pega um mecanismo que existe hoje em forma primitiva — preço fixo por domínio configurado na borda — e projeta sobre ele toda a maquinaria de um mercado financeiro, com cotação variável e diferenciação por exclusividade. Isso é extrapolar a curva sem perguntar se há demanda para essa granularidade. A hipótese mais chata e mais provável é que o pagamento por acesso de máquina se acomode em contratos de licenciamento anuais entre poucos atores grandes, exatamente como já ocorre, e que o 402 fique restrito à cauda longa. Nesse caso, o ramo inteiro é sofisticação decorativa sobre um fenômeno que se resolveu por advogado, não por protocolo.

**Qual efeito assume velocidade de adoção irreal.** O ramo e1, e com ele tudo o que depende de "sites passam a publicar capacidade". O dado que se abriu é inequívoco: 5,61% do top 10 mil com `llms.txt` válido em junho de 2026, vindos de 1,04% um ano antes. Cinco vezes em doze meses parece explosivo, mas sobre uma base dessas ainda são 421 sites. E o próprio dado mostra que a medição **estabilizou** em 5,61% em maio e junho de 2026 — dois meses seguidos sem crescimento. Colocar e1 em 2028 assume que essa estabilização é pausa e não teto, e que o WebMCP resolve a adoção que o `llms.txt` não resolveu, quando WebMCP exige muito mais trabalho do desenvolvedor: escrever `llms.txt` é publicar um Markdown; registrar ferramentas é reescrever a camada de ação da aplicação. Se a adoção de `llms.txt` empacou em 5%, a de WebMCP tem pouca razão para ser maior. O mapa provavelmente atrasa e1 em dois a três anos.

**Qual disrupção-raiz pode não se concretizar e derrubar o mapa inteiro.** D3, a bifurcação. E ela pode falhar pelo motivo menos dramático possível: **os sites não têm interesse em servir conteúdo diferente por identidade.** Manter duas versões da mesma informação é custo puro, e a maioria das organizações mal mantém uma. Se D3 não se concretiza, D1 vira otimização técnica menor (um arquivo a mais no diretório raiz) e D2 vira uma linha de custo de infraestrutura negociada entre a Cloudflare e a OpenAI, sem consequência para quem projeta. O mapa inteiro desaba para "APIs ficaram mais fáceis de descobrir" — que é exatamente o tipo de coisa que a etapa (b) desta skill recusaria como incremental. Vale dizer com todas as letras: **a disrupção deste mapa depende de a web querer se partir**, e não há evidência de que ela queira; há evidência de que a borda tornou isso possível.

**Qual foi o viés da análise.** Três, declarados.

*Viés de infraestrutura.* As fontes que se abriram são desproporcionalmente de quem vende infraestrutura de borda — a Cloudflare aparece em três das nove. Quem vende a portaria tem interesse em descrever a web como um lugar que precisa de portaria. Não significa que os números estejam errados; significa que o **enquadramento** do problema como "controle de acesso" é parte do produto.

*Viés de otimismo protocolar.* O mapa trata protocolo como o vetor principal de mudança porque protocolo é o que está documentado e legível. É uma versão do viés do poste: procura-se onde há luz. A mudança pode vir majoritariamente de mudança de hábito — pessoas simplesmente parando de abrir sites — e nesse caso nenhum dos protocolos aqui citados é causa, só consequência.

*Viés de fonte secundária nos números econômicos.* As relações crawl-to-refer e o "96% menos tráfego" vêm de relatórios comerciais repassados por blogs e imprensa especializada, não de dados primários abertos. Foram usados porque são o que existe, e estão sinalizados como tais, mas nenhuma conclusão deste mapa deveria depender da precisão desses valores — só da ordem de grandeza, que é consistente entre fontes independentes.

*Uma última autocrítica, sobre o formato.* Esta skill produz árvores, e árvores forçam causalidade unidirecional. Efeitos de terceira ordem que realimentam a disrupção-raiz — por exemplo, e4.2.1 ("ter agente vira condição de acesso") realimentando e1 ao criar demanda por sites agent-ready — são invisíveis no YAML. O mapa é, por construção, mais linear do que o fenômeno.

## 8. O que a máquina errou

<!-- Seção reservada ao usuário. Preencher após leitura crítica. -->

## 9. Três cenários para 2031

* **Provável — a web de duas velocidades, sem que ninguém a tenha decidido.** A camada de identidade se consolida (é a que tem sinal mais forte hoje) e a de pagamento vira norma para a cauda longa, enquanto os grandes resolvem por contrato. A camada de capacidade declarada permanece minoritária: talvez 20% a 30% dos sites relevantes, concentrados em produto de software e comércio grande, empurrados por plataforma mais do que por escolha. O efeito para quem projeta é real mas parcial: analytics se reescreve, publicidade display perde uma fatia mensurável, e surge um papel novo de escrever descrição de ferramenta. A web aberta não morre — ela se torna a camada barata, e o mundo aprende a conviver com isso como aprendeu a conviver com paywall.

* **Desejável — a bifurcação existe e é simétrica.** O site publica capacidade **e** página a partir da mesma fonte, o agente paga quando consome e cita quando responde, e a identidade de agente é federada o bastante para que um agente pessoal ou de código aberto consiga se credenciar sem intermediário. Para chegar lá é preciso, concretamente: (1) que o trabalho de identidade saia de rascunho expirado e vire norma IETF com governança de credenciamento aberta, e não lista curada por um provedor de borda; (2) que a liquidação de pagamento tenha mais de um merchant of record, porque um só reproduz na camada de protocolo a concentração que a web já tem na camada de anúncio; (3) que a capacidade declarada seja gerada a partir do mesmo código que gera a interface, para que manter as duas versões não seja custo dobrado — este é o requisito técnico decisivo e o que o WebMCP, ao usar elementos `<form>` existentes, começa a endereçar; e (4) que citação seja obrigação contratual do pagamento, e não alternativa a ele.

* **Indesejável — a portaria vira o produto.** Identidade e pagamento se consolidam sem que a camada de capacidade se democratize. Três operadores de agente detêm as chaves reconhecidas, negociam acesso em bloco com os cem maiores publishers, e tudo o que está fora desse arranjo fica invisível — não bloqueado, apenas não descoberto. Quem navega à mão recebe uma versão degradada; quem escreve software sem credencial não alcança nada. **O sinal precoce a vigiar:** o momento em que um índice de prontidão agêntica passar a aceitar pagamento para elevar posição, ou em que um provedor de borda passar a exigir credencial dele próprio — e não uma chave pública em domínio do operador — para que um agente seja verificado. O primeiro é a captura do ranking; o segundo é a captura do registro civil da web. Qualquer um dos dois acontecendo antes de 2029 torna este cenário o provável.

## 10. O experimento

**Nome: Duas portas, um endereço.**

**A pergunta que responde.** Um site pode servir humano e agente a partir de uma fonte só, sem manter duas verdades — e quanto custa isso, em trabalho e em coerência? É a pergunta que decide entre o cenário desejável e o indesejável, e é pequena o bastante para caber numa aula.

**O que se constrói hoje.** Um site de uma página só — pode ser o próprio site da disciplina — com três superfícies geradas do mesmo arquivo de conteúdo:
1. o HTML de sempre;
2. um `/llms.txt` com o sumário em Markdown;
3. um endpoint que expõe duas ou três ações como ferramentas (por exemplo "listar temas", "buscar mapa por tema"), seja por WebMCP com `document.modelContext.registerTool()` no navegador, seja por um servidor MCP mínimo, seja — na versão mais barata — por um `openapi.json` servido estaticamente.

Depois se instrumenta a entrada: um middleware que registra, por requisição, se veio cabeçalho `Signature-Agent`, qual o `User-Agent` declarado, e qual das três superfícies foi consumida. Em cima disso, um botão que responde 402 com `crawler-price` para requisições não assinadas — sem cobrar de verdade, só para medir quantas repetem o pedido aceitando o preço.

**Tecnologia.** `llms.txt` (um Markdown), OpenAPI ou WebMCP, um servidor HTTP qualquer com middleware, e o pontuador público de prontidão agêntica como medida externa — pontuar o domínio antes e depois e comparar os sete sinais.

**O que a turma faria em sala.** Três rodadas de vinte minutos.
*Rodada 1 — o teste do espelho:* cada aluno pede a um agente (o assistente que usa) que responda três perguntas factuais sobre o site. Registra-se: quantas respostas conferem com o HTML, e a resposta cita a fonte? Essa é a linha de base.
*Rodada 2 — a porta fechada:* liga-se o 402 para não assinados e repete-se a rodada 1. Mede-se o que quebra e quem repete o pedido.
*Rodada 3 — a divergência deliberada:* muda-se **um** fato no `llms.txt` sem mudar o HTML, e repete-se a rodada 1. É o experimento que interessa, porque mede em minutos quanto esforço custa manter duas verdades coerentes e quanto tempo leva até a incoerência aparecer para alguém.

**Que resultado mudaria minha ideia.** Dois, em direções opostas.

Se na rodada 3 a divergência **não for detectada por ninguém** — nem por agente, nem por aluno lendo a página — então o custo de manter duas versões incoerentes é zero e não há freio para a bifurcação. Isso reforça o cenário indesejável e me faria subir a confiança de D3 de média para alta.

Se na rodada 1 os agentes responderem bem **sem** consumir nenhuma das superfícies agênticas — lendo só o HTML, como fazem hoje — então a premissa central deste mapa está errada. O agente não precisa que a web se reorganize para ele; ele lê a web feita para gente e se vira. Nesse caso D1 é incremental, não disruptivo, e a etapa (b) desta skill deveria ter recusado o tema. É o resultado que mais me faria mudar de ideia, e é o mais fácil de obter — o que diz algo sobre a fragilidade do mapa.

## 11. Fontes

1. https://caseyrb.com/blog/state-of-llms-txt-adoption/ - Medição própria sobre dados do HTTP Archive: 5,61% do top 10 mil sites com `llms.txt` válido em junho de 2026 (421 de 7.504), contra 1,04% em julho de 2025, com estabilização em maio e junho. Confiabilidade alta para o número, por ser metodologia declarada sobre fonte pública e auditável; é a evidência que mais contradiz o entusiasmo do próprio tema, e por isso foi usada como âncora da autocrítica.
2. https://blog.cloudflare.com/introducing-pay-per-crawl/ - Documentação primária do mecanismo de pagamento por rastreio: HTTP 402 com `crawler-price`, resposta 200 com `crawler-charged`, cabeçalhos `crawler-max-price` e `crawler-exact-price`, autenticação por Web Bot Auth com Ed25519 e a Cloudflare como merchant of record. Confiabilidade alta para o funcionamento técnico (é o fornecedor descrevendo o próprio produto), baixa para qualquer avaliação de mérito — viés comercial declarado na seção 7.
3. https://datatracker.ietf.org/doc/html/draft-meunier-web-bot-auth-architecture - Rascunho de arquitetura do Web Bot Auth na IETF, versão 05 de 2 de março de 2026, **expirado em 3 de setembro de 2026** e substituído por rascunho de protocolo. Sustenta tanto o mecanismo (assinatura assimétrica, `keyid` por thumbprint JWK, HMAC proibido) quanto a ressalva de maturidade. Confiabilidade alta e autodeclarada: o próprio documento afirma não ter standing formal no processo de padronização.
4. https://developers.cloudflare.com/bots/reference/bot-verification/web-bot-auth/ - Documentação de implementação em produção: cabeçalhos `Signature-Input` com tag `web-bot-auth`, `Signature` e `Signature-Agent`, chaves Ed25519 em diretório do próprio operador. Confiabilidade alta para o fato de que a identidade de agente já opera fora do papel — que é o que sustenta o sinal "forte" de e4.
5. https://github.com/webmachinelearning/webmcp - Repositório do WebMCP no W3C Web Machine Learning Community Group: API `document.modelContext` com `registerTool()`, `getTools()` e `executeTool()`, API declarativa a partir de `<form>`, editores de Microsoft e Google, marcado como experimental, 4,1 mil estrelas e 121 issues abertas. Confiabilidade alta para o desenho técnico e para o estágio; é fonte primária e o próprio repositório declara o caráter experimental.
6. https://github.com/unitedideas/nothumansearch - Índice e pontuador de prontidão agêntica, com os sete sinais e pesos explícitos (llms.txt 25, ai-plugin.json 20, OpenAPI 20, API 15, MCP 10, robots.txt 5, Schema.org 5). Confiabilidade média: é projeto independente e pequeno, e os pesos são escolha dos autores, não consenso — o que é justamente o motivo de ele figurar como sinal fraco e não como evidência de mercado.
7. https://nothumansearch.ai/ - O índice em operação no momento da consulta: 5.342 sites indexados e score médio 38. Confiabilidade média pelo mesmo motivo da fonte 6; o valor aqui é o número bruto, que serve como limite superior grosseiro de quantos sites se declaram prontos para agente.
8. https://www.digitalapplied.com/blog/ai-crawler-bot-traffic-statistics-2026-data-reference - Compilação com procedência datada das relações crawl-to-refer (ClaudeBot 23.951:1 no 1º trimestre de 2026, GPTBot 1.276:1, PerplexityBot 111:1, Google 4,9:1) e da participação de rastreadores de IA no tráfego de bots verificados. Confiabilidade média: é agregador de terceiros citando Cloudflare Radar, Imperva e outros, não dado primário. Usado apenas pela ordem de grandeza, conforme declarado na seção 7.
9. https://www.ecommercebrasil.com.br/noticias/buscas-via-ia-cortam-mais-de-95-do-trafego-para-sites-mostra-estudo - Imprensa especializada brasileira repercutindo o relatório State of the Internet da Akamai: chatbots gerando cerca de 96% menos tráfego de referência que buscadores tradicionais, 1% de cliques nas fontes citadas, mídia concentrando 13% do tráfego automatizado global. Confiabilidade baixa a média: é cobertura secundária de relatório comercial, e — relevante para o recorte — **não traz dado com corte brasileiro**, o que sustenta a declaração de lacuna na seção 3.

## 12. Anexo — o levantamento bruto

**Registro da entrevista (etapa a).** As cinco perguntas obrigatórias foram feitas e respondidas no pacote de abertura desta rodada, sem usuário disponível para diálogo. Respostas recebidas, na ordem:

1. *Horizonte de tempo:* 2031.
2. *Público-alvo:* quem projeta mídia e interação.
3. *Recorte geográfico:* global, com uma nota sobre o Brasil.
4. *Fora do escopo:* o que já é comum em produto de massa (régua da disciplina). Nenhuma outra exclusão. Ideias óbvias que serviriam para qualquer tema foram excluídas por instrução explícita.
5. *Viés desejado:* neutro. Nenhuma disrupção suspeita indicada — instrução de descobrir.

Parâmetros adicionais informados fora das cinco perguntas: profundidade de três ordens; modo de análise a partir de uma inovação/tema, não de um setor; zona de interesse do autor declarada como "Agentes"; critério de mudança de ideia declarado pelo solicitante como (i) evidência de que a adoção já passou da maioria inicial na curva de Rogers ou (ii) evidência de que a tecnologia não rompe nada, apenas melhora o existente.

**Nota sobre o campo `zona_de_interesse`.** O gabarito de saída desta skill fixa o valor `Sistemas de Informação` como literal, fora de colchetes. O pacote de abertura informou "Agentes" como zona do autor. Diante da instrução de executar a skill exatamente como escrita, o literal do gabarito foi mantido no frontmatter, e a divergência fica registrada aqui.

**Registro da etapa (b) — filtro de maturidade.** Veredito: **disruptivo, execução autorizada.**

O critério da skill separa madura (infraestrutura consolidada e mercado estabelecido), incremental (melhora processo existente) e disruptiva (rompe paradigma, cria ou destrói mercado). A avaliação item a item:

*O que foi classificado como maduro e descartado do mapa:* API REST documentada, SDK, scraping, robots.txt como convenção e SEO clássico. São infraestrutura consolidada com mercado estabelecido; tratá-los seria descrever o presente.

*O que foi examinado e classificado como incremental:* a geração de `llms.txt` por ferramenta de build, e a otimização de conteúdo para aparecer em resposta de IA. São melhorias de processos de publicação e de marketing existentes, e por isso não viraram disrupção-raiz — aparecem como efeitos (e1.2), que é o lugar certo.

*O que sustenta a classificação de disruptivo:* o ponto de ruptura não é nenhuma tecnologia isolada, e sim a mudança de **quem é o destinatário da publicação**. Quando o site declara capacidade em vez de dispor conteúdo (D1), quando acesso de leitura vira transação precificada por requisição (D2) e quando a resposta passa a depender da identidade de quem pede (D3), três modelos mentais estabelecidos quebram simultaneamente: a página como unidade de publicação, o rastreio gratuito como contrato tácito da web aberta, e a URL como endereço de um conteúdo único. O paralelo do critério é exato: assim como a fotografia digital não foi um filme químico melhor, a superfície agêntica não é um site melhor — ela cria um mercado (descoberta e acesso para máquina, com ranking e preço próprios) e ameaça outro (publicidade por impressão e tráfego de referência).

*Teste contra o critério de mudança de ideia informado pelo solicitante:* (i) a adoção **não** passou da maioria inicial — 5,61% do top 10 mil em junho de 2026 situa o fenômeno entre inovadores e adotantes iniciais na curva de Rogers, bem abaixo do abismo; (ii) a tecnologia **não** é apenas melhoria do existente, pelos motivos acima. Nenhum dos dois gatilhos de recusa foi acionado. Execução autorizada.

**Caminhos abandonados durante a análise.**

*Ramo de identidade e segurança de agente, abandonado por fronteira.* Autenticação, detecção de agente hostil e as consequências de segurança do Web Bot Auth pertencem ao tema 2 da disciplina. O Web Bot Auth foi mantido aqui apenas na função de **pré-requisito econômico** — não se cobra de quem não se identifica —, e nenhum efeito de segurança foi derivado.

*Ramo de pagamento e comércio por agente, abandonado por fronteira.* Carteira de agente, comércio autônomo e liquidação em stablecoin pertencem ao tema 5. O 402 e o pay-per-crawl foram mantidos porque o objeto aqui é o **acesso à publicação**, não a compra de bem ou serviço. O protocolo x402 aparece na lista de tecnologias por completude do vocabulário, mas nenhum efeito foi construído sobre ele — a evidência que se abriu sobre seu uso em liquidação é de fonte secundária e não foi considerada suficiente.

*Ramo de qualidade de conteúdo e alucinação, abandonado por irrelevância ao recorte.* Se o agente lê errado ou resume mal é problema de modelo, não de arquitetura da web. Não entra.

*Quarta disrupção-raiz descartada: "o agente vira o novo navegador".* Chegou a ser formulada como D4 e foi fundida em e6, porque não passa no próprio critério da etapa (b) — é deslocamento de interface de usuário, e a disrupção correspondente (a conversa como superfície) pertence a outro tema. Manteve-se apenas o efeito terminal em e6.2.1.

*Dado procurado e não encontrado.* Levantamento de adoção de `llms.txt`, de bloqueio de rastreadores de IA ou de acordos de licenciamento com recorte brasileiro. Cinco buscas, nenhuma fonte primária com corte nacional. A nota sobre o Brasil na seção 3 declara a lacuna em vez de preenchê-la por inferência — e essa é a maior fragilidade do recorte geográfico pedido na entrevista.

**Reconciliação numérica do frontmatter.** Contagem conferida contra o bloco YAML da seção 5, item a item: disrupções-raiz = 3 (três chaves `disrupcao`); efeitos de 1ª ordem = 6 (e1, e2, e3, e4, e5, e6); efeitos de 2ª ordem = 12 (dois por efeito de 1ª ordem); efeitos de 3ª ordem = 12 (um por efeito de 2ª ordem). Fontes = 9, todas abertas e verificadas com resposta HTTP 200 na data deste documento. Nenhuma fonte citada sem leitura.
