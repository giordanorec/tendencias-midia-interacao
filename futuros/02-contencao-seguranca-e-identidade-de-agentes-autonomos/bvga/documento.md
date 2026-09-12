---
tema: Contenção, segurança e identidade de agentes autônomos
slug: contencao-seguranca-e-identidade-de-agentes-autonomos
autor_login: bvga
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 10
efeitos_ordem_3: 10
tecnologias_citadas: [Web Bot Auth, RFC 9421 HTTP Message Signatures, OAuth 2.1, RFC 8707 Resource Indicators, Model Context Protocol, AuthZEN AARP, AuthZEN COAZ, Agent Auth Protocol, Agent Payments Protocol (AP2), Verifiable Digital Credentials, DIDs, passkeys, World ID, CaMeL, Progent, FIDES, FORGE, SOPGuard, Firecracker microVM, E2B, agentOS (WebAssembly/V8 isolates), Open Finance, Pix, CAPTCHA, bot management]
fontes: 26
confianca: media
experimento: Portaria
skill_usada: futurizacao-bvga
publico_ok: false
---

## 1. Resumo

Entre 2025 e 2026 três coisas aconteceram ao mesmo tempo. O tráfego automatizado passou a ser
maioria da web (53% em 2025 pela medição da Imperva; 57,5% do tráfego HTML pela medição da
Cloudflare em junho de 2026). A injeção de prompt continuou em primeiro lugar no OWASP Top 10
para LLM pelo terceiro ano seguido, sem correção conhecida. E o Nono Circuito norte-americano
decidiu, em 4 de agosto de 2026, que quem "acessa" um site por meio de um agente é o usuário, não
a empresa que fabricou o agente — retirando da lei de acesso não autorizado o papel de fronteira
técnica.

O efeito combinado é que a fronteira voltou a ser de engenharia. Este mapa sustenta que três
capacidades emergentes, e não os produtos que as embalam, organizam o futuro do tema até 2031:

1. **identidade criptográfica do agente como principal de primeira classe** — a chave, e não o
   endereço nem a aparência do navegador, passa a decidir o que se abre;
2. **mandato verificável** — a intenção humana vira um objeto assinado, com escopo, valor e
   prazo, verificável depois do fato;
3. **contenção determinística fora do modelo** — a política de segurança sai do prompt e vira
   perímetro executável, partindo da premissa de que o agente será enganado.

Para quem projeta mídia e interação, a consequência prática não é de segurança: é de forma. Se o
que o agente pode alcançar passa a ser decidido fora dele, o produto precisa desenhar mandato,
perímetro e atribuição como elementos visíveis da interface — como hoje se desenha login, estado
offline e cadeado de HTTPS.

Uma correção ao enunciado que motivou este trabalho: a evidência disponível **não** sustenta a
hipótese de que o agente ganhe responsabilidade jurídica própria. Ela aponta o contrário (§7).

## 2. O tema

**Recorte.** Contenção, segurança e identidade de agentes autônomos: tudo o que trata o agente
como *principal* de segurança — algo que precisa de identidade, permissão, isolamento e trilha de
auditoria próprios. Fica de fora o ofício de programar com agentes, a avaliação de se o agente
acertou, e a identidade *humana* sem terceiros (passkeys), exceto quando ela reaparece como
insumo de delegação.

**A entrevista.** A skill exige entrevista antes da análise. Ela ocorreu de forma assíncrona: o
solicitante entregou as respostas junto com o pedido e declarou que não haveria interlocutor para
perguntas de seguimento. Parâmetros confirmados:

| Campo | Valor |
|---|---|
| tema | contenção, segurança e identidade de agentes autônomos |
| horizonte | 2031 |
| público | quem projeta mídia e interação |
| recorte geográfico | global, com uma nota sobre o Brasil |
| descartes | o que já é comum em produto de massa |
| viés desejado | neutro |
| profundidade | três ordens |
| modo | a partir de uma inovação/tema, não de um setor |

**Contradição encontrada na entrevista, e como foi resolvida.** "Recorte global" e "nota sobre o
Brasil" convivem sem conflito, mas "descartar o que já é comum em produto de massa" colide com
parte do material que a turma trouxe: bot management, CAPTCHA e OAuth humano são produto de massa.
Resolvi mantendo-os apenas como **antecedentes maduros** — eles aparecem para explicar o que está
sendo rompido, nunca como raiz.

**O que me faria mudar de ideia**, declarado antes da pesquisa: evidência de que a adoção já
passou da maioria inicial, ou de que estas capacidades apenas melhoram o que já existe sem romper
nada. O primeiro critério quase foi acionado (§7).

## 3. Onde isso está hoje

**O que é maduro** (infraestrutura e antecedente, não raiz):

- *Bot management e detecção*. Mercado formado, com fornecedores estabelecidos e métricas de
  produto: a hCaptcha reporta reduções de 70–90% em volume de ataque em 2026. É engenharia
  conhecida, não incerteza fundamental.
- *Isolamento por hipervisor*. Firecracker e derivados sustentam produção há anos; a E2B vende
  sandbox por segundo ($0,000014 por vCPU-s e $0,0000045 por GiB-s, ou cerca de US$ 0,166/hora na
  configuração padrão de 2 vCPU e 4 GiB). Isolar já é commodity.
- *OAuth 2.0 / OIDC para humanos*. Onipresente — e é justamente aí que está o problema: foi
  desenhado para um humano diante de uma tela.

**O que é emergente:**

- *Web Bot Auth*. Assinatura de requisição por RFC 9421, chave Ed25519 por agente, cabeçalho
  `Signature-Agent`, diretório JWKS. Verificado em produção na borda (Cloudflare o incorporou ao
  programa de bots verificados e criou a classe "signed agents" em 28/08/2025, com ChatGPT Agent,
  Goose, Browserbase e Anchor Browser entre os primeiros). Ao mesmo tempo, o documento de
  arquitetura que li está **expirado e sem status formal no processo IETF**, substituído por outro
  rascunho — a prática correu na frente da norma.
- *Autorização com chain de delegação*. O rascunho `draft-klrc-aiagent-auth-03` (6/7/2026),
  adotado pelo grupo WIMSE, com autores de AWS, OpenAI, Okta, Ping e Zscaler, consolida WIMSE,
  OAuth 2.0 e SPIFFE em vez de propor protocolo novo. A OpenID Foundation aprovou, em 15/06/2026,
  dois rascunhos do AuthZEN: AARP (pré-requisitos de aprovação) e COAZ (autorização de ferramenta
  MCP). O NIST abriu, em 17/02/2026, a AI Agent Standards Initiative, com identidade e
  autenticação de agente como um de três pilares.
- *Mandato verificável*. O AP2 usa credenciais digitais verificáveis para provar que um humano
  autorizou uma compra específica; a FIDO Alliance criou, em 28/04/2026, um grupo técnico de
  autenticação agêntica (CVS Health, Google, OpenAI) e outro de pagamentos (Mastercard, Visa),
  recebendo AP2 e o Verifiable Intent da Mastercard como contribuições.
- *Contenção determinística*. CaMeL, Progent, FIDES, RTBAS e FORGE põem a política fora do
  modelo. O MCP já exige `resource` (RFC 8707) e validação de audiência, para que um servidor não
  aceite token emitido para outro — o problema clássico do *confused deputy*, agora entre máquinas.

**O que é experimental:**

- *Garantia de resistência a injeção*. O CaMeL resolve 77% das tarefas do AgentDojo com segurança
  demonstrável, contra 84% do sistema sem defesa — o custo é visível. A avaliação adaptativa de
  25/06/2026 mostra defesas fora do modelo se sustentando melhor que detectores, mas conclui que
  "a robustez contra um atacante adaptativo sério e otimizado ainda é não comprovada", e lembra
  que doze defesas publicadas, quase todas relatando sucesso de ataque perto de zero, foram
  quebradas acima de 90% sob ataque adaptativo.
- *Isolamento barato por tarefa*. O agentOS declara cold start de 4,8 ms, ~22 MB por instância e
  custo 254× menor que sandboxes, usando WebAssembly e isolates V8. São números do fabricante,
  sem replicação independente que eu tenha conseguido abrir.

**O estado do problema.** A injeção de prompt permanece LLM01 no OWASP Top 10 para LLM de 2026
(publicado em 3–4/08/2026), agora com ranking pesado por milhares de incidentes reais, e
"excessive agency" saltou de sexto para terceiro. Um estudo da Universidade de Washington
(junho/2026) mostrou que navegadores agênticos violam a same-origin policy — a regra que sustenta
a segurança da web desde os anos 1990 — inclusive em uso benigno, e propôs um mecanismo de
reforço (SOPGuard). Ou seja: a camada de contenção que a web tinha não sobreviveu à chegada de um
ator que lê a tela e age nela.

**Heurística do Hype Cycle.** Identidade de agente está entre o gatilho e o pico de expectativa:
muito anúncio, padrão ainda não adotado formalmente, implantação real em poucas bordas grandes.
Contenção determinística está mais para o vale: já se sabe que custa utilidade.

**Nota sobre o Brasil.** No Febraban Tech 2026 (25/08/2026), executivos de Banco do Brasil, Caixa,
Bradesco, Itaú e Santander trataram identidade de agente como camada a construir, nos moldes do
que Pix e Open Finance foram. A pergunta que a VP do BB formulou é a pergunta deste mapa: "O que
aquele agente pode fazer por aquele cliente naquele momento? Qual transação? E o limite? Qual o
valor?" O Brasil chega a esse ponto com uma peça que quase ninguém tem: consentimento reutilizável
e revogável já em produção no Open Finance. Ao mesmo tempo, o PL 2338/2023 segue sem votação na
Câmara, e o país discute agentes sem marco legal de IA — descrição que não pude confirmar em fonte
primária aberta, por bloqueio de acesso (§8).

## 4. As disrupções-raiz

### D1 — Identidade criptográfica do agente como principal de primeira classe

| Campo | Conteúdo |
|---|---|
| candidato | O agente passa a ter chave, registro, ciclo de vida e trilha próprios, distintos do humano e da conta de serviço |
| maturidade | emergente |
| potencial_de_ruptura | alto |
| o_que_rompe | (a) quem pode consumir a web: o acesso deixa de ser propriedade do endereço e passa a ser da chave; (b) cadeia de valor: acesso vira item precificável por identidade (HTTP 402); (c) distribuição de poder: quem mantém o diretório decide quais agentes existem |
| por_que_agora | Composição do tráfego virou (53% automatizado em 2025; 57,5% do HTML em jun/2026); a decisão do Nono Circuito retirou da CFAA o papel de fronteira; a borda já verifica assinatura em produção |
| o_que_falta | Revogação (o rascunho a trata só como resposta a comprometimento, sem protocolo); cadeia de delegação (a assinatura prova o agente, não o consentimento de quem o mandou); adoção formal — o grupo não tinha documento adotado em agosto de 2026 |
| evidencias | draft-meunier-web-bot-auth-architecture; blog de signed agents da Cloudflare; draft-klrc-aiagent-auth-03 (WIMSE); NIST AI Agent Standards Initiative; Agent Auth Protocol v1.0-draft |
| veredito | **aceita** |

### D2 — Mandato verificável: a intenção humana vira objeto assinado

| Campo | Conteúdo |
|---|---|
| candidato | Autorização deixa de ser evento de sessão e passa a ser credencial com escopo, valor, prazo e verificabilidade posterior |
| maturidade | emergente |
| potencial_de_ruptura | alto |
| o_que_rompe | (a) forma dominante de interação: o "permitir?" deixa de ser modal e vira artefato editável e auditável; (b) papel dos intermediários: bancos e redes viram emissores e verificadores de mandato; (c) normas de prova: a discussão sobre o que foi autorizado passa a ter objeto material |
| por_que_agora | FIDO cria grupos de autenticação agêntica e pagamentos em 28/04/2026 recebendo AP2 e Verifiable Intent; AuthZEN aprova AARP em 15/06/2026; MCP torna obrigatório amarrar token a destino; bancos brasileiros tratam o tema como obra a começar |
| o_que_falta | Portabilidade e revogação entre plataformas; prova de que o mandato corresponde à intenção real e não a um clique induzido; desenho de interface para editar permissão antes do fato |
| evidencias | ap2-protocol.org; anúncio da FIDO Alliance; post da OpenID Foundation; especificação de autorização do MCP; Agent Auth Protocol (restrições por argumento, ex.: limite de US$ 1.000); reportagem do Febraban Tech 2026 |
| veredito | **aceita** |

### D3 — Contenção determinística fora do modelo

| Campo | Conteúdo |
|---|---|
| candidato | A política de segurança sai do prompt e vira monitor de referência, rótulo de proveniência e perímetro descartável em torno de cada tarefa |
| maturidade | experimental (subcategoria de emergente) |
| potencial_de_ruptura | alto |
| o_que_rompe | (a) arquitetura de produto: o que o agente alcança é decidido fora dele; (b) papel profissional: segurança de agente vira engenharia de sistemas verificável, não persuasão do modelo; (c) custo marginal: isolar por tarefa fica barato o bastante para virar default |
| por_que_agora | LLM01 inalterado pelo terceiro ano; doze defesas publicadas quebradas acima de 90% sob ataque adaptativo; 4 de 7 navegadores agênticos com violação de same-origin; OWASP recebe um padrão de controle de agente voltado a imposição em tempo de execução (set/2026) |
| o_que_falta | Prova contra atacante adaptativo sério; fechar a conta de utilidade (77% contra 84% no AgentDojo); padronizar o que significa "contido" para que possa ser exigido em compra |
| evidencias | arXiv 2606.26479; arXiv 2506.08837; arXiv 2606.14027 (SOPGuard); OWASP Top 10 2026 e Agent Control Standard; preços da E2B; agentOS |
| veredito | **aceita** |

### Candidatos recusados

- **Detecção de agente / CAPTCHA / bot management** — maduro. Mercado formado, fornecedores
  estabelecidos, métrica de produto. Entra como antecedente e como contrassinal, nunca como raiz.
- **Pagamento agêntico como disrupção autônoma** — é aplicação de D2, não capacidade distinta. O
  que rompe é o mandato, não o trilho de pagamento.
- **"Agente ganha personalidade jurídica"** — hipótese descartada por evidência contrária (§7).
- **Sistema operacional por agente em WebAssembly** — rebaixado a sinal fraco: números só do
  fabricante, produto em desenvolvimento ativo.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Identidade criptográfica do agente como principal de primeira classe
    efeitos:
      - id: e1
        ordem: 1
        efeito: A web passa a responder de forma diferente a requisições assinadas e não assinadas, e o acesso deixa de ser propriedade do endereço para ser propriedade da chave.
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Diretórios e registros de chaves passam a decidir, na prática, quais agentes existem na web, concentrando em poucas infraestruturas de borda um poder de cartório.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O modo degradado para agente sem credencial vira estado de primeira classe no projeto de interface, como hoje é o estado offline.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O acesso passa a ser precificado por identidade, com resposta 402 e limite por agente virando parte corriqueira do contrato entre máquinas.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Parte do conteúdo público se reorganiza em duas versões, uma humana monetizada por atenção e outra de máquina monetizada por chamada.
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Identidade não humana entra no inventário corporativo com os mesmos ritos de uma conta de funcionário, incluindo emissão, rotação e desligamento.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A revogação de chave vira ato administrativo cotidiano e o agente órfão com credencial válida se torna uma classe reconhecida de incidente.
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Produtos passam a exibir ao usuário final quem agiu, com nome do agente, dono e mandato, tornando a atribuição um elemento visual padrão.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Encontros entre agentes de donos diferentes exigem negociação de credenciais entre partes sem relação prévia, e a confiança entre domínios vira problema de produto.
        sinal: medio
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Formam-se federações setoriais de reconhecimento mútuo e a interoperabilidade entre agentes passa a ser exceção negociada, não comportamento padrão.
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A reputação de um agente vira ativo econômico portável dentro da federação e perdido fora dela.
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: Mandato verificável, a intenção humana como objeto assinado com escopo, valor e prazo
    efeitos:
      - id: e4
        ordem: 1
        efeito: O consentimento deixa de ser um clique dentro de uma sessão e passa a ser um artefato verificável depois do fato.
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O desenho de interface migra da pergunta de autorização no momento do ato para a edição prévia de um envelope de permissões e a leitura posterior do rastro.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Surge um gênero de interface doméstica ainda inexistente, o painel de mandatos, onde a pessoa vê e corta o que suas máquinas podem fazer em seu nome.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A autorização deixa de responder apenas sim ou não e passa a responder ainda não e o que falta, tornando a aprovação humana um insumo assíncrono da política.
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: A interrupção humana vira recurso escasso e medido, e o número de confirmações por tarefa entra na disputa comercial entre produtos.
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Instituições reguladas constroem autenticação de agente sobre trilhos de consentimento já existentes, em vez de criar cadastro próprio de agentes.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: No Brasil o consentimento do Open Finance vira o mandato de fato dos agentes financeiros, e a régua da autorização passa por infraestrutura pública e não por fornecedor privado.
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O desenho brasileiro de consentimento reutilizável passa a ser citado como referência em discussões internacionais de delegação agêntica.
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: Contenção determinística fora do modelo, com a política virando perímetro executável
    efeitos:
      - id: e6
        ordem: 1
        efeito: O alcance do agente passa a ser decidido por um monitor externo a ele, e a premissa de projeto vira que o agente será enganado em algum momento.
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O custo de utilidade fica explícito e nasce uma régua de projeto entre tarefa confinável e tarefa que exige humano, separando o que lê dado não confiável do que age sobre dado sensível.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O perímetro vira argumento de venda visível ao usuário, no mesmo lugar em que hoje se anuncia criptografia ponta a ponta.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: O isolamento por tarefa fica barato o bastante para ser o padrão, e o descarte do ambiente passa a fazer parte do desenho da interação.
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Com a sessão descartável, o que persiste vira escolha explícita do usuário em vez de subproduto da arquitetura, mudando a noção de memória do produto.
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Evidência de contenção vira exigência de compra corporativa, deslocando a segurança de agente do discurso sobre o modelo para a engenharia verificável do entorno.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Contratos e apólices passam a exigir prova de perímetro, e a trilha de auditoria do agente vira peça probatória.
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: O ônus da prova em disputas migra para quem guarda o registro, e quem não registra mandato e ação perde a discussão por ausência de rastro.
                sinal: fraco
                prazo: 2033
                confianca: baixa
```

**O que a estrutura não captura bem.** Três coisas.

Primeiro, a roda separa o que na prática é uma coisa só: identidade (D1) sem mandato (D2) é um
crachá sem procuração, e mandato sem contenção (D3) é uma procuração entregue a quem pode ser
convencido por qualquer página que leia. As três raízes se sustentam mutuamente, e a árvore,
por ser árvore, esconde isso. Os efeitos e1.2, e4.2 e e6.1 são, provavelmente, faces do mesmo
fenômeno — o acesso virando negociação explícita entre máquinas.

Segundo, a roda não representa realimentação. Detecção e disfarce se perseguem: cada avanço no
reconhecimento do agente cria incentivo para escondê-lo, e cada disfarce eficaz corrói o valor da
declaração voluntária. Isso é ciclo, não cascata.

Terceiro, os prazos não são cronologia da roda: e6.1.1 tem prazo 2030 e é de terceira ordem,
enquanto e3 é de primeira ordem com prazo 2030. Ordem aqui mede distância causal.

## 6. Sinais fracos e wildcards

**Sinais fracos**

1. *Restrição por argumento dentro da credencial.* A especificação do Agent Auth Protocol permite
   que a concessão limite valores de argumento — por exemplo, transferências até US$ 1.000 — e
   exige que o JWT do agente expire em 60 segundos. É autorização baseada em capacidade saindo do
   paper e entrando em SDK. Pequeno, localizado, ainda sem adoção demonstrada.
2. *A resposta "ainda não".* O AARP trata a aprovação humana como pré-requisito coletável, não
   como interrupção. Se pegar, muda o gênero da interface de permissão.
3. *Prova de humanidade encostando em agente.* O anúncio do World ID de 17/04/2026 inclui base
   de protocolo para "human-backed AI": "à medida que agentes de IA agem em nome de pessoas reais,
   a capacidade de provar que um humano único e verificado está por trás de cada agente se torna
   crítica". O sinal não é o agente parecendo humano — é o agente carregando prova de que um
   humano o respalda. São 18 milhões de verificações declaradas pela própria operadora.
4. *Isolamento barato demais para ser exceção.* O agentOS declara 4,8 ms de cold start e 254× de
   redução de custo contra sandboxes, com WebAssembly e isolates V8. Se o número se confirmar fora
   do fabricante, "um mundo por tarefa" deixa de ser luxo.
5. *402 saindo do limbo.* Um código HTTP que passou trinta anos reservado virou mecanismo de
   negociação de acesso na borda.

**Wildcards**

- **W1 — Comprometimento de um diretório de chaves de agentes.** Baixa probabilidade, alto
  impacto. O rascunho que li não define protocolo de revogação: recomenda "rotação rápida de
  chaves" e omite a operação. Se o cartório cair, a web precisa decidir em horas se volta a
  confiar em heurística ou fecha a porta para todo agente. Quebraria e1.1 e e1.2 de uma vez e
  empurraria o mapa para o ramo da detecção adversarial.
- **W2 — Uma jurisdição cria registro com responsabilidade limitada para agentes.** Algo como uma
  pessoa jurídica funcional, com capital mínimo e seguro obrigatório. Contradiz o achado do red
  team (§7) e ressuscitaria e3.1.1 com muito mais força: reputação transferível passaria a ter
  lastro jurídico, não só comercial.
- **W3 — Uma defesa determinística resiste publicamente a ataque adaptativo sério.** Se a conta de
  utilidade fechar, e6.1 evapora: some a régua entre tarefa confinável e não confinável, e a
  contenção deixa de moldar o que o produto pode oferecer. É o wildcard que mais alegra e mais
  desorganiza este mapa.

## 7. Contra o próprio mapa

**1. Qual efeito é apenas extrapolação linear?** e1.2.1 (conteúdo se partindo em versão humana e
versão de máquina). É o presente da Cloudflare esticado: existe 402, existe cobrança por crawl,
logo existiria bifurcação editorial. Falta mecanismo que explique por que um veículo manteria
duas produções em vez de uma só com controle de acesso. **Rebaixado** para confiança baixa e
sinal fraco.

**2. Qual efeito assume adoção rápida demais?** e4.1.1, o painel doméstico de mandatos. O
paralelo histórico é desfavorável: gerenciador de permissões de app em celular existe desde 2015,
é gratuito, está pré-instalado — e a maioria das pessoas nunca o abre. Um painel de mandatos tende
a existir e não ser usado. Mantive o efeito, mas com prazo alargado e confiança baixa; o valor
dele está em ser auditável por terceiros, não em ser consultado pelo dono.

**3. Qual disrupção-raiz pode simplesmente não acontecer?** D1. Há um caminho inteiro em que
identidade de agente não se generaliza: basta que as duas ou três maiores bordas resolvam o
problema internamente, por acordo bilateral com os cinco maiores fabricantes de agente. Aí não
nasce padrão — nasce lista de convidados. O sinal de que isso está acontecendo já existe: em
agosto de 2026 o grupo de trabalho não tinha nenhum documento adotado, enquanto a verificação já
rodava em produção.

**4. O que quebra se D1 falhar?** e1, e2 e e3 inteiros, com seus descendentes — onze dos
vinte e sete efeitos. D2 sobreviveria em ambiente fechado (banco, plataforma de pagamento), e D3
sobreviveria intacta, porque contenção não depende de identidade pública: depende de o
desenvolvedor não confiar no próprio agente.

**5. Contrassinais.** (a) A decisão do Nono Circuito enfraquece o argumento de que o agente é um
ator distinto: para a CFAA, ele é ferramenta do usuário, e "a Perplexity não se comunica
diretamente com os servidores da Amazon". (b) A defesa que mais funciona hoje é a antiga —
detecção estatística — e ela é madura, barata e vendida. (c) Fricção mata automação: se declarar
identidade custa mais lento e mais caro, a economia empurra para o disfarce. (d) O número mais
relevante para adoção não se moveu: injeção de prompt segue em primeiro lugar pelo terceiro ano.

**6. Barreiras subestimadas.** Revogação em escala, que nenhum rascunho aberto resolve.
Interoperabilidade entre federações setoriais, que historicamente leva década. E a barreira
econômica óbvia: identidade forte de agente aumenta o custo por requisição num mercado cuja
promessa é reduzir custo por tarefa.

**7. Quem tem incentivo para bloquear ou capturar.** Redes de distribuição de conteúdo e grandes
plataformas têm incentivo para capturar — um registro de agentes é posição de rendimento. Os
fabricantes de modelo têm incentivo para que a identidade seja do fabricante e não do usuário, o
que amarra a portabilidade. E quem vive de detectar bots tem incentivo para que a identidade
declarada nunca baste.

**8. Viés do pesquisador e do modelo.** Três, declarados. Primeiro, viés de fonte: quase toda
evidência de adoção real vem de quem vende o produto (Cloudflare, hCaptcha, Imperva, E2B, Rivet,
World). Marquei essas afirmações como interessadas em §11 e evitei que sustentassem sozinhas
qualquer efeito de primeira ordem. Segundo, viés de literatura: papers de segurança publicam
ataques que funcionam e defesas que funcionam, raramente sistemas que ficaram só um pouco menos
ruins. Terceiro, viés de linguagem: a expressão "identidade de agente" convida a imaginar sujeito
onde há chave — e foi exatamente esse convite que produziu o erro seguinte.

**Contestação frontal a uma premissa do enunciado.** A pergunta de terceira ordem proposta pela
disciplina — "se o agente responde por atos com sua própria identidade, ele tem responsabilidade
jurídica, seguro, reputação transferível?" — pressupõe o que a evidência nega. A responsabilidade
corre para a empresa e para as pessoas por trás do agente; a Califórnia proibiu expressamente a
defesa de que "a IA causou o dano autonomamente"; e a primeira decisão de apelação sobre agentes
tratou o agente como ferramenta do usuário. **Cortei** do mapa o efeito "agente adquire
personalidade jurídica" e o substituí por e7.1.1, que é o que a evidência sustenta: a disputa
migra para quem guarda o registro. A reputação transferível sobrevive, mas rebaixada a efeito de
terceira ordem, confiança baixa, e como ativo comercial dentro de federação — não como estatuto.

## 8. O que a máquina errou

Erros detectados e corrigidos durante este trabalho:

1. **Padrão que não é padrão.** Eu ia escrever que Web Bot Auth é "um padrão IETF". Ao abrir o
   documento, ele está **expirado**, substituído por outro rascunho, e "não tem status formal no
   processo IETF" — apesar de estar em produção em várias bordas. Corrigido em §3 e §4: prática à
   frente da norma.
2. **Data deslocada.** A busca apresentou o anúncio de signed agents da Cloudflare em contexto de
   2026; o post é de 28/08/2025. Mantida a data do post.
3. **Fonte não lida quase virou citação.** Tentei sustentar a nota sobre o Brasil na Resolução CNJ
   nº 615/2025 e num artigo da ConJur; ambos retornaram HTTP 403. Não entraram em §11 e a
   afirmação correspondente foi marcada como não verificada em §3.
4. **Extração falha tratada como leitura.** O PDF do acórdão do Nono Circuito abriu, mas o texto
   não foi extraído de forma útil. As citações da decisão vêm do alerta do escritório Cooley, que
   é fonte secundária qualificada; a limitação está declarada em §11.
5. **Maduro quase virou raiz.** Cheguei a tratar "detecção de agente" como disrupção porque está
   em toda parte e parece nova. É mercado formado com fornecedores estabelecidos e métrica de
   produto: rebaixado a antecedente.
6. **Número de fabricante quase virou fato.** Os índices do agentOS (92× de cold start, 254× de
   custo) e o volume de respostas 402 relatado pela Cloudflare não têm replicação independente que
   eu tenha conseguido abrir. Ficaram como sinal fraco e afirmação interessada, não como base de
   efeito.
7. **Pergunta do enunciado aceita sem exame.** Escrevi um primeiro rascunho de terceira ordem com
   "agente com responsabilidade jurídica própria" porque a pergunta da disciplina o sugeria. A
   evidência aponta o contrário (§7). Efeito cortado.

Nenhum destes é erro de "fonte inexistente" ou autoria trocada — verifiquei autoria e data em
cada documento aberto. Os erros que apareceram foram de classificação e de confiança excessiva
em resumo de busca, que é onde este processo de fato falha.

## 9. Três cenários para 2031

**Provável — a portaria desigual.**
Em 2031 a web funciona em dois regimes. Nas propriedades grandes, requisição assinada é rotina: o
agente apresenta chave, o site consulta o diretório, concede escopo e registra. Fora delas — a
maior parte dos sites do mundo — nada disso existe, e o agente continua parecendo um navegador
esquisito, sendo barrado por heurística de vinte anos atrás. A identidade de agente virou
infraestrutura de quem tem borda contratada, não propriedade da web. O mandato pegou nos domínios
regulados, onde havia trilho anterior — no Brasil, sobre o consentimento do Open Finance — e não
pegou no resto. A contenção virou prática corrente de engenharia, e a régua entre tarefa
confinável e tarefa que exige humano já organiza roadmap de produto. Ninguém chama isso de
revolução; virou como o cadeado do navegador, algo que só se nota quando falta.

**Desejável — delegação legível.**
Mesmo quadro técnico, outra distribuição. O que precisou ser construído: revogação que funciona
entre organizações, um perfil mínimo interoperável de mandato adotado por mais de uma federação,
e — a condição menos técnica e mais decisiva — a obrigação de que o acesso via agente declarado
não seja pior que o acesso humano para quem depende dele. Em 2031 uma pessoa que usa leitor de
tela e delega compras ao seu agente atravessa o site com menos atrito do que tinha em 2026, porque
o mandato assinado substituiu o CAPTCHA em vez de se somar a ele. A atribuição é visível: dá para
ver quem agiu, sob que mandato, e desfazer. Os painéis de mandato quase ninguém abre — mas
auditores, procons e jornalistas abrem, e é isso que os faz funcionar.

**Indesejável — o pedágio e o disfarce.**
A identidade de agente foi capturada por quem opera o diretório. Existir na web passa a exigir
estar numa lista, e estar na lista tem preço e condições. O efeito imediato não é sobre agentes
poderosos — é sobre os pequenos: o agente doméstico, o script de uma ONG, o leitor automatizado de
quem não enxerga. Nasce o mercado de parecer humano, com fornecedores, preço e assinatura mensal,
e ele é usado tanto por fraude quanto por gente comum sem alternativa. Acessibilidade vira função
de crédito. **O sinal precoce que teria antecipado isso** já estava visível em 2026, e este mapa o
registrou sem lhe dar peso suficiente: a verificação rodando em produção na borda enquanto o grupo
de padronização não tinha um único documento adotado. Sempre que a operação corre anos à frente da
norma, quem opera escreve a norma.

Os três cenários diferem em mecanismo, não em otimismo: o primeiro é decidido por custo de
implantação, o segundo por uma obrigação de não-degradação, o terceiro pela economia de um
registro central.

## 10. O experimento

**Nome: Portaria.**

**O que é.** Um mesmo serviço web real — agendar uma consulta, com login e confirmação — servido
sob três regimes de porta, sorteados por participante:

- **A.** porta atual: CAPTCHA e detecção por heurística, sem canal para o agente se declarar;
- **B.** porta assinada: o agente pode apresentar identidade por assinatura HTTP (RFC 9421, no
  desenho do Web Bot Auth) e recebe escopo amplo, sem desafio;
- **C.** porta com mandato: além da identidade, o agente apresenta um mandato com escopo e limite
  (por exemplo, "agendar, nunca cancelar; até uma consulta por semana"), e a porta responde "ainda
  não, falta aprovação" quando o pedido excede o mandato, no padrão do AARP.

Tudo é construível hoje com peças abertas: verificação de assinatura RFC 9421, um diretório JWKS
de brinquedo, e um fluxo de capacidade no formato do Agent Auth Protocol.

**Pergunta de futuro que testa.** Quando declarar a identidade do agente tem vantagem concreta,
as pessoas declaram ou disfarçam? E o acesso via agente declarado melhora ou piora para quem
depende dele?

**Tecnologia emergente usada.** Assinatura de agente, autorização por capacidade com restrição de
argumento e autorização com pré-requisito ("ainda não").

**Por que uma solução madura não responde.** CAPTCHA e bot management respondem "consigo
bloquear?". Não respondem o que as pessoas escolhem quando declarar tem preço e vantagem, nem o
que acontece com quem não tem escolha. Essa é a pergunta que decide entre o cenário desejável e o
indesejável.

**O que os participantes fazem.** De 24 a 30 pessoas, com **cota obrigatória de pelo menos um
terço de pessoas que já usam tecnologia assistiva ou dependem de automação para navegar**, sem o
que o experimento mede só conveniência. Cada uma executa a mesma tarefa três vezes, uma por
regime, com ordem contrabalançada, usando um agente fornecido. Em uma rodada final, a pessoa
escolhe entre duas portas: declarar e aceitar limite, ou não declarar e enfrentar desafio.

**Métrica.** (1) taxa de conclusão e tempo por regime; (2) número de interrupções humanas por
tarefa; (3) escolha na rodada final; (4) diferença de (1) entre o grupo com tecnologia assistiva e
os demais — a métrica que mais importa; (5) registro do que a pessoa entendeu que autorizou,
comparado ao mandato efetivamente assinado (é aqui que se mede se o mandato é legível ou só
juridicamente válido).

**Hipótese falsificável.** *Quando declarar rende acesso melhor, a maioria declara, e a vantagem
é maior para quem depende de agente.*

**O que me faria mudar de ideia.** Três resultados derrubam a tese: (a) a maioria escolhe não
declarar mesmo com vantagem medida — então a identidade voluntária não se sustenta e o futuro é o
ramo adversarial; (b) a diferença de conclusão entre regimes é estatisticamente indistinguível —
então a porta não é o gargalo e este mapa superestima D1; (c) o grupo com tecnologia assistiva vai
pior no regime C do que no A — então o mandato, mesmo tecnicamente correto, está reproduzindo
como fricção aquilo que prometia remover, e o cenário indesejável já começou.

## 11. Fontes

Todas abertas e lidas em 12/09/2026. A anotação entre parênteses indica confiabilidade e, quando
aplicável, interesse comercial declarado.

1. https://datatracker.ietf.org/doc/html/draft-meunier-web-bot-auth-architecture — arquitetura do
   Web Bot Auth: RFC 9421, Ed25519, cabeçalho `Signature-Agent`, diretório JWKS; declara que a
   assinatura não prova consentimento do usuário e não define protocolo de revogação; versão 05,
   março de 2026, **expirada e substituída**. (Alta para o mecanismo; confirma ausência de status
   formal.)
2. https://datatracker.ietf.org/doc/draft-klrc-aiagent-auth/ — `draft-klrc-aiagent-auth-03`,
   06/07/2026, adotado pelo WG WIMSE; autores de Defakto, AWS, Zscaler, Ping, OpenAI e Okta;
   consolida WIMSE, OAuth 2.0 e SPIFFE em vez de criar protocolo novo. (Alta.)
3. https://openid.net/openid-foundation-advances-authorization-for-the-agent-era-with-new-authzen-working-group-drafts/
   — aprovação, em 15/06/2026, dos rascunhos AARP e COAZ; a autorização passa a poder responder
   "ainda não, e eis o que falta". (Alta, fonte da própria fundação.)
4. https://www.nist.gov/news-events/news/2026/02/announcing-ai-agent-standards-initiative-interoperable-and-secure
   — anúncio de 17/02/2026 da AI Agent Standards Initiative e seus três pilares, com identidade e
   segurança de agente como um deles. (Alta, órgão público.)
5. https://genai.owasp.org/2026/09/01/owasp-genai-security-project-unveils-2026-top-10-for-llm-applications-new-agent-control-standard-and-sponsors-as-community-tops-30000-members/
   — Top 10 2026, "excessive agency" em terceiro, ranking pesado por incidentes reais, doação do
   Agent Control Standard voltado a imposição em tempo de execução; comunidade acima de 30 mil.
   (Média-alta; é comunicação do próprio projeto.)
6. https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/ — página do recurso; confirma
   publicação em 03/08/2026 e o mapeamento para NIST, MITRE ATLAS e CWE. **A lista item a item não
   está na página**; não a reproduzi. (Média, leitura parcial.)
7. https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/ — confirma a
   existência e a data (09/12/2025) do Top 10 para aplicações agênticas; o conteúdo dos dez itens
   não está na página. (Baixa-média, leitura parcial — usada só para datar.)
8. https://modelcontextprotocol.io/specification/draft/basic/authorization — OAuth 2.1, RFC 8707
   obrigatório, validação de audiência, `MUST NOT accept or transit any other tokens`, tratamento
   de confused deputy e fluxo de step-up. (Alta, especificação primária.)
9. https://agentauthprotocol.com/specification/v1.0-draft — identidade por par de chaves Ed25519,
   registro com estado `pending`/`active`, capacidades com restrição de argumento (ex.: limite de
   US$ 1.000), JWT de agente expirando em 60 segundos. (Média; rascunho mantido por um fornecedor
   — Better Auth — e sem adoção demonstrada.)
10. https://fidoalliance.org/fido-alliance-to-develop-standards-for-trusted-ai-agent-interactions/
    — 28/04/2026: grupos de autenticação agêntica (CVS Health, Google, OpenAI) e de pagamentos
    (Mastercard, Visa); AP2 e Verifiable Intent como contribuições; a autenticação atual "foi
    projetada para interação direta humana, não para ações delegadas". (Alta para o fato
    institucional.)
11. https://ap2-protocol.org/ — mandatos como credenciais digitais verificáveis, fases aberta e
    fechada, trilha de auditoria; mantido pelo Google, em padronização na FIDO; v0.2, adoção
    inicial. (Média-alta; interessada.)
12. https://blog.cloudflare.com/signed-agents/ — 28/08/2025: classe "signed agents", distinção
    entre bot verificado (uma entidade, tarefa repetitiva) e agente dirigido por usuário; primeiros
    signatários ChatGPT Agent, Goose, Browserbase, Anchor Browser. (Média; fornecedor interessado,
    mas é a fonte do próprio fato.)
13. https://blog.cloudflare.com/introducing-ai-crawl-control/ — 28/08/2025: bloqueio seletivo e
    resposta 402 com mensagem de licenciamento; afirma mais de um bilhão de respostas 402 por dia
    entre clientes. (Baixa-média para o número: fornecedor, sem triangulação possível.)
14. https://www.imperva.com/blog/bad-bot-report-2026-bots-agentic-age/ — 29/04/2026: 53% de
    tráfego automatizado em 2025 contra 51% em 2024, 47% humano; 27% dos ataques contra APIs; 24%
    dos ataques no setor financeiro. (Média-alta; fornecedor de segurança, metodologia própria.)
15. https://www.hcaptcha.com/blog/hcaptcha-captchas-are-highly-effective-against-bots-and-agents-in-2026
    — 23/02/2026: reduções de 70–90% em volume de ataque; "saber que é um agente é o primeiro
    passo"; política de bloquear, desafiar ou restringir fica com o site. (Baixa-média; material
    comercial — usada como evidência de maturidade de mercado, não de capacidade.)
16. https://arxiv.org/pdf/2604.23280 — Otsuka, Toyoda e Leung, *AI Identity: Standards, Gaps, and
    Research Directions for AI Agents*, 28/04/2026: fragmentação entre regimes regulatórios e
    ausência de especificação técnica unificada para entidades não humanas. (Alta; preprint não
    revisado por pares.)
17. https://arxiv.org/abs/2506.08837 — Beurer-Kellner, Buesser, Creţu, Debenedetti e outros,
    *Design Patterns for Securing LLM Agents against Prompt Injections*, junho de 2025: padrões
    com resistência demonstrável e discussão explícita do trade-off com utilidade. (Alta.)
18. https://arxiv.org/html/2606.26479v1 — Narisetty e outros (LaunchSafe Research), *Adaptive
    Evaluation of Out-of-Band Defenses Against Prompt Injection in LLM Agents*, 25/06/2026: contra
    o Progent, 25,8% de sucesso sem defesa, 4,2% com defesa e 2,6% sob ataque adaptativo manual;
    relata que doze defesas publicadas foram quebradas acima de 90%; conclui que a robustez contra
    atacante adaptativo sério "ainda é não comprovada". (Média-alta; preprint, autores ligados a
    empresa do setor.)
19. https://arxiv.org/abs/2606.14027 — Wang, Chen, Li, Song e Gong, *Same-Origin Policy for
    Agentic Browsers*, junho de 2026: navegadores agênticos violam a same-origin policy em uso
    benigno e sob ataque; propõem o SOPBench e o SOPGuard. O número "4 de 7 navegadores" e a prova
    de conceito contra o ChatGPT Atlas vêm do release da Universidade de Washington relatado na
    imprensa, não do abstract que abri. (Alta para a tese; média para os números.)
20. https://e2b.dev/pricing — preço de sandbox: US$ 0,000014 por vCPU-s e US$ 0,0000045 por
    GiB-s; padrão de 2 vCPU e 4 GiB; planos de US$ 0 a US$ 1.150 com 20 a 1.100 sandboxes
    concorrentes. (Alta para preço; a página não descreve o isolamento.)
21. https://rivet.dev/agentos/ — agentOS: WebAssembly e isolates V8, cold start declarado de
    4,8 ms, ~22 MB por instância, custo 254× menor que sandboxes, comparado contra E2B e Daytona.
    (Baixa; números do fabricante, sem replicação independente — tratado como sinal fraco.)
22. https://world.org/blog/announcements/world-id-full-stack-proof-of-human — 17/04/2026: "full
    stack proof of human", cerca de 18 milhões de verificações, 160 países, e base de protocolo
    para "human-backed AI" — provar que um humano verificado está por trás de cada agente.
    (Baixa-média; operadora interessada, número não auditável por mim.)
23. https://www.cooley.com/news/insight/2026/2026-08-06-ninth-circuit-rules-on-ai-agent-access-to-third-party-websites-under-cfaa
    — 04/08/2026, *Amazon.com Services v. Perplexity AI*: o Nono Circuito anulou a liminar; foi o
    usuário quem "acessou" os computadores da Amazon; "a Perplexity não se comunica diretamente
    com os servidores da Amazon"; a corte deixou abertos termos de uso e responsabilidade civil.
    (Alta; escritório de advocacia, leitura secundária de decisão pública.)
24. https://cdn.ca9.uscourts.gov/datastore/opinions/2026/08/04/26-1444.pdf — o acórdão. **Aberto,
    mas sem extração útil de texto**; não extraí citação literal daqui e me apoiei no item 23.
    Registrado por honestidade de procedimento. (Primária, leitura falha.)
25. https://www.bakermckenzie.com/en/insight/publications/2026/06/united-states-legal-accountability-for-ai-agents
    — Jonathan Tam, 01/07/2026: agentes não têm personalidade jurídica; a responsabilidade corre
    para a empresa e suas pessoas; lei californiana veda a defesa de que a IA causou o dano
    autonomamente; E-SIGN Act atribui o ato do agente eletrônico à pessoa vinculada. (Alta para a
    doutrina; jurisdição dos EUA apenas.)
26. https://finsidersbrasil.com.br/tecnologia-para-fintechs/bancos-terao-de-criar-nova-estrutura-para-autenticar-agentes-de-ia/
    — 25/08/2026, Febraban Tech 2026: executivos de BB, Caixa, Bradesco, Itaú e Santander sobre
    identidade e limite de agentes; "O que aquele agente pode fazer por aquele cliente naquele
    momento? Qual transação? E o limite? Qual o valor?" (Média; imprensa especializada, usada como
    evidência de intenção declarada, não de capacidade implantada.)

**Limitação declarada.** A afirmação de que o Open Finance e o Pix funcionam hoje como trilho de
consentimento para agentes no Brasil aparece em §3 e §5 apoiada apenas no item 26 e em resultados
de busca que não consegui abrir. É a afirmação mais frágil deste mapa e a que mais precisa de
triangulação — de preferência em documento do Banco Central, que não abri.

## 12. Anexo — o levantamento bruto

**Entrevista, como ocorreu.** Assíncrona, com respostas entregues junto ao pedido e declaração
explícita de que não haveria interlocutor. Isso viola o espírito da regra de parada da skill —
que existe para impedir análise sem intenção declarada — mas satisfaz seu requisito material:
todos os seis campos obrigatórios vieram preenchidos. Não houve pergunta de seguimento possível;
onde faltou definição, assumi e declarei (por exemplo: "quem projeta mídia e interação" foi lido
como designer de produto e de interface, não como pesquisador de segurança).

**Candidatos levantados e o que aconteceu com cada um.**

| Candidato | Maturidade | Ruptura | Veredito |
|---|---|---|---|
| Identidade criptográfica de agente | emergente | alto | **raiz D1** |
| Mandato verificável de intenção | emergente | alto | **raiz D2** |
| Contenção determinística fora do modelo | experimental | alto | **raiz D3** |
| Detecção de agente / CAPTCHA / bot management | maduro | médio | antecedente |
| Isolamento por hipervisor (Firecracker, microVM) | maduro | médio | tecnologia habilitadora |
| OAuth/OIDC humano, passkeys | maduro | baixo (aqui) | antecedente; é o tema 17 |
| Pagamento agêntico (AP2, Agent Pay, x402) | emergente | médio | aplicação de D2 |
| SO por agente em WebAssembly (agentOS) | experimental | indeterminado | sinal fraco |
| Prova de humanidade (World ID e similares) | emergente | médio | sinal fraco, lado humano do mesmo eixo |
| Personalidade jurídica do agente | inexistente | — | hipótese descartada |
| Observabilidade e avaliação de agente | emergente | alto | fora de escopo — é o tema 3 |
| Interceptação de tráfego de agente (claude-tap e afins) | experimental | baixo | ferramenta, não capacidade estrutural |

**Caminhos causais cortados.**

- *"Sites cobram mais de agentes que de humanos, como regra"* — cortado. Extrapolação linear do
  pay-per-crawl; não achei mecanismo que explique por que um site cobraria do agente do próprio
  cliente que já paga assinatura.
- *"Nasce um mercado de parecer humano"* — não eliminado, mas **rebaixado**: saiu da roda e virou
  o cenário indesejável. Razão: só se materializa se a porta assinada virar condição de acesso
  ampla, o que é exatamente o que este mapa considera incerto.
- *"O agente vira réu"* — cortado, ver §7.
- *"CAPTCHA desaparece até 2031"* — cortado. Solucionadores automáticos derrubaram a eficácia,
  mas o mercado continua vendendo e reportando resultado; tecnologia que morre demora mais do que
  o argumento sugere.
- *"Agentes passam a se recusar a agir sem mandato, por política do fabricante"* — não incluí:
  plausível, sem evidência aberta.

**Contrassinais registrados e não usados no corpo.**

- Nenhum documento adotado no grupo de trabalho de Web Bot Auth até agosto de 2026, contra
  verificação já em produção — o mesmo fato serve de sinal para D1 e de contrassinal para a tese
  de padronização.
- O tema do Nono Circuito corta nos dois sentidos: enfraquece o agente como ator jurídico (§7) e,
  ao mesmo tempo, empurra sites para soluções técnicas e contratuais, o que reforça D1.
- A mesma pesquisa que mostra defesas fora do modelo funcionando melhor é a que alerta que seu
  próprio ataque adaptativo foi fraco — evidência a favor e contra no mesmo parágrafo.

**Buscas que não deram resultado utilizável.**

- Resolução CNJ nº 615/2025 e artigo da ConJur sobre governança de IA agêntica: HTTP 403 nos dois.
  Sem citação.
- Documento do Banco Central ou da Febraban sobre autenticação de agentes: não localizei fonte
  primária aberta; ficou a reportagem.
- Lista item a item do OWASP Top 10 2026 e do Top 10 agêntico: só no PDF, que não abri; reproduzi
  apenas o que estava nas páginas.
- Replicação independente dos números do agentOS e do volume de respostas 402: não encontrada.
- Dados de tráfego agêntico do Brasil especificamente: não encontrados. Todos os números de
  composição de tráfego citados são globais.

**Classificações de maturidade — critério aplicado.** Usei os critérios da própria skill:
disponibilidade comercial repetível, presença em múltiplos produtos ou padrão estável, problemas
de engenharia conhecidos em vez de incerteza fundamental, e uso real além de demonstração.
Atenção especial ao erro documentado em `DUVIDAS.md` do autor da skill: disponibilidade comercial
e padronização **não** equivalem a maturidade operacional. Foi por esse critério que Web Bot Auth
ficou como emergente, apesar de estar em produção em bordas grandes — está disponível e é
padronizável, mas a operação (revogação, delegação, interoperabilidade) não está demonstrada.

**Three Horizons, como cheque temporal.**
H1, o sistema dominante: acesso por heurística e desafio, permissão como clique de sessão, agente
sem identidade própria, segurança por instrução no prompt. H2, a transição: assinatura em produção
sem padrão adotado, mandato nos domínios regulados, contenção determinística com custo de
utilidade visível, disputa sobre quem opera o registro. H3, a lógica possível: acesso como
negociação explícita entre principais identificados, com mandato legível e perímetro declarado. O
cheque temporal importa porque a maior parte do que este mapa descreve é H2 — e H2 é justamente
onde as coisas falham, se estabilizam pela metade ou reforçam H1 em vez de superá-lo.

**Observações que não entraram no mapa.**

- A palavra "identidade" está fazendo trabalho demais: em Web Bot Auth ela quer dizer *chave do
  fabricante do agente*; no Agent Auth Protocol, *par de chaves por instância*; no AP2, *credencial
  de mandato*; no World ID, *humano por trás*. São quatro coisas diferentes com um nome só, e boa
  parte da confusão pública sobre o tema vem daí.
- O tema tem um problema de nomenclatura simétrico: "agente" designa tanto um processo de dez
  linhas quanto um sistema que opera por horas sem supervisão. Nenhum dos padrões que li
  diferencia os dois, e a diferença é o que decide o risco.
- Para quem projeta interação, a pergunta mais produtiva que encontrei neste levantamento não é
  "como identificar o agente" — é "o que a pessoa entendeu que autorizou". Não achei nenhuma
  fonte aberta medindo isso. É a lacuna que o experimento da §10 tenta ocupar.
