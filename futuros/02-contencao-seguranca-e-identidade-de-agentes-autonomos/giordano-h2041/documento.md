---
tema: Contenção, segurança e identidade de agentes autônomos
slug: contencao-seguranca-e-identidade-de-agentes-autonomos
autor_login: grec
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2041
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 18
efeitos_ordem_2: 35
efeitos_ordem_3: 37
tecnologias_citadas: [Microsoft Entra Agent ID, Okta Cross App Access, MCP-I/KYA-OS, Model Context Protocol, Agent2Agent, AP2 Agent Payments Protocol, x402, Web Bot Auth, HTTP Message Signatures, Ed25519, HTTP 402, Cloudflare AI Crawl Control, BotBase, World ID, AgentKit, Firecracker, E2B, gVisor, WebAssembly, WASI, V8 Isolates, OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, EU AI Act Artigo 50, LGPD, gov.br]
fontes: 16
confianca: media
experimento: Portaria de agente — um mesmo site que responde de três formas (humano, agente identificado, agente anônimo) e registra a cadeia de delegação de quem entrou
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Agentes de software deixaram de conversar e passaram a agir — e o mundo digital não tinha lugar
para um ator que não é pessoa nem aplicação. Entre 2025 e 2026 apareceram, quase ao mesmo tempo,
as três peças de resposta: **identidade própria para o agente** (Entra Agent ID em disponibilidade
geral, Okta Cross App Access adotada como extensão do MCP, MCP-I doada à Decentralized Identity
Foundation), **distinção de humano e agente na porta da rede** (Cloudflare separando tráfego em
Search, Agent e Training, com bloqueio por padrão a partir de 15/09/2026; Web Bot Auth assinando
requisições com Ed25519) e **isolamento barato por tarefa** (microVM em 125–150 ms, WebAssembly em
menos de 1 ms com capacidade negada por padrão). Ao mesmo tempo, a injeção de prompt continua em
primeiro lugar no OWASP Top 10 de 2026 — agora com dados de 7.714 incidentes — porque o defeito é
arquitetural: instrução e dado dividem o mesmo canal. Deste conjunto derivam quatro rupturas e uma
tese: **até 2041 a pergunta de segurança deixa de ser "como impedir o ato" e passa a ser "quem
responde por ele"**. Para quem projeta mídia e interação, isso significa interface que exibe
procedência de ação, consentimento que vira mandato assinado com teto e validade, publicação que se
parte em três (humano, agente licenciado, recusa) e um preço novo para a presença humana ao vivo —
a única que a delegação não alcança. O mapa também registra quem perde: quem depende de automação
como tecnologia assistiva, os sites pequenos sem infraestrutura de verificação, e o anonimato de
publicação.

## 2. O tema

**O que é.** Um agente que executa comando, navega e chama API é um ator no mundo. Ele abre
arquivo, publica, compra, responde e-mail, roda código. O conjunto de práticas que trata esse ator
como sujeito de segurança — dar-lhe identidade, permissão, isolamento e trilha de auditoria
próprios — é o objeto deste mapa. Não é a segurança *do modelo* (alinhamento, jailbreak de
conteúdo) nem o ofício de programar com agentes: é a **contenção e a identificação da máquina que
age**.

**Onde encosta em mídia e interação.** Em quatro pontos concretos, todos de projeto:

1. **A interface de autorização.** Quando um agente age em nome de alguém, alguém precisa ter dito
   até onde. A tela em que isso se diz é um objeto de design que ainda não existe em forma estável
   — o checkbox de consentimento não dá conta de "compre se cair abaixo de R$ 400, até domingo".
2. **A procedência da ação.** Um comentário, uma edição, um envio: a interface hoje diz *quando*
   aconteceu e *quem* estava logado. Vai precisar dizer *o que* agiu.
3. **A porta de entrada do conteúdo.** Se o servidor distingue humano de agente, publicar deixa de
   ser um ato único. Isso redefine o que é uma página.
4. **A confiança como material.** Se qualquer interação pode ter sido delegada, a audiência
   desconta valor de tudo — inclusive do que é humano. Formatos que provam presença ganham prêmio.

**Por que merece mapa de futuro e não levantamento de estado da arte.** Porque as peças já existem
e são verificáveis (seção 3), mas o que elas produzem juntas não está escrito em lugar nenhum: um
regime de identidade, atribuição e responsabilidade para atores não humanos. Um levantamento
listaria as ferramentas; o mapa pergunta o que acontece com a mídia quando o leitor pode ser uma
máquina com conta própria, e com a interação quando a pessoa precisa escrever o limite do que
autoriza.

**Premissas assumidas nesta rodada** (o briefing veio completo; estas são as escolhas que ele não
cobriu, declaradas em vez de escondidas):

```text
horizonte: 2041 (15 anos — janela longa, que permite efeito de 3ª ordem não trivial)
publico: quem projeta mídia e interação
recorte: global, com nota sobre o Brasil
descartado: o que já é comum em produto de massa (régua da disciplina)
raiz suspeita pelo autor: nenhuma — descoberta pelo mapa
vies: neutro
falseador declarado: adoção já passada da maioria inicial (Rogers), ou tecnologia que só
                     melhora o existente sem romper nada
premissas minhas, não do briefing:
  - a web pública continua sendo o principal canal de acesso a conteúdo em 2041
  - não há colapso de oferta de computação (energia, chip) que torne agente inviável
  - modelos capazes continuam disponíveis a custo decrescente
  - o Brasil segue o padrão regulatório europeu com atraso de 3 a 6 anos
```

## 3. Onde isso está hoje

Âncora feita **com** acesso à web em 12/09/2026: doze buscas em português e inglês, dezesseis
páginas abertas e lidas (seção 11). Nada aqui é citado de memória.

### 3.1 O que já existe e funciona

**Identidade de agente saiu do papel em 2026.** A Microsoft documenta, no Entra Agent ID, três
modos de operação de um agente — em nome de um usuário (*on-behalf-of*), autônomo com service
principal próprio, e com **conta de usuário própria** (um agente com caixa postal). Os fluxos
interativos são explicitamente proibidos: todo agente é cliente confidencial, e toda autenticação
passa por troca programática de token com Federated Identity Credentials. Não é promessa: é
documentação de produto, atualizada em 13/08/2026, com aviso de que segredo de cliente não deve ser
usado em produção [F3].

**Pagamento de agente já tem protocolo com mandato assinado.** O AP2 do Google, anunciado em
16/09/2025 com mais de 60 organizações (Adyen, Amex, Coinbase, Mastercard, PayPal, Worldpay), define
dois objetos que interessam diretamente a quem projeta interação: o **Intent Mandate** (o que a
pessoa autorizou, com condições, assinado antes de o agente agir) e o **Cart Mandate** (o registro
imutável do que exatamente será pago). Os dois são credenciais verificáveis e formam uma cadeia de
não-repúdio: intenção → carrinho → pagamento [F8].

**A rede já distingue tipos de tráfego não humano.** A Cloudflare passou a classificar bots em
**Search** (indexa para responder depois), **Agent** (age em tempo real em nome de uma pessoa) e
**Training**. Desde 01/07/2026 a gestão separada está disponível para todos os clientes, e a partir
de **15/09/2026** — três dias depois desta rodada — Training e Agent passam a ser **bloqueados por
padrão** em páginas com anúncio, enquanto Search segue liberado [F2]. O mecanismo de cobrança já
existe: o *pay per crawl*, anunciado em 01/07/2025, usa o código HTTP **402 Payment Required** e
exige que o rastreador prove identidade com par de chaves **Ed25519** e assinatura HTTP nos
cabeçalhos `signature-agent`, `signature-input` e `signature` [F1].

**Prova de humanidade virou infraestrutura vendável.** Em 17/04/2026 a World anunciou o "full-stack
proof of human", com quase **18 milhões de pessoas** verificadas em Orb, em **160 países**, e —
este é o ponto — posicionou a combinação com o AgentKit como forma de "provar que um humano único e
verificado está por trás de cada agente" [F7].

**Injeção de prompt segue sem solução arquitetural, e agora com dado.** O OWASP Top 10 para
aplicações de LLM de 2026, publicado em 12/08/2026, manteve injeção de prompt em **1º lugar** e
promoveu **excessive agency de 6º para 3º**. Foi a primeira edição em que dado de incidente entrou
no ranking: **7.714 incidentes** analisados de bases públicas, **6.639** com detalhe suficiente para
classificar — com peso de 25% contra 75% do voto da comunidade [F6].

**Isolamento barato é medível.** Contêiner com gVisor: 1–5 s de partida a frio, 50–200 MB de
sobrecarga. MicroVM Firecracker (base do E2B e do AWS Lambda): **125–150 ms**, 128 MB+. V8 Isolates:
menos de 1 ms, 2–10 MB. WebAssembly com WASI: menos de 1 ms, **menos de 1–5 MB**, e o detalhe que
importa — **modelo de capacidade negado por padrão**: um componente começa sem acesso a arquivo,
rede, variável de ambiente ou relógio; cada capacidade é concedida explicitamente pelo hospedeiro
[F16].

### 3.2 O que existe e ainda não funciona

- **Web Bot Auth não é padrão.** O draft de arquitetura (`draft-meunier-web-bot-auth-architecture-05`,
  Thibault Meunier e Sandor Major) está **expirado e arquivado, sem qualquer estado formal na IETF**,
  substituído por `draft-meunier-webbotauth-httpsig-protocol` [F4]. A implementação de fato existe
  (Cloudflare), o padrão não.
- **Detecção de agente ainda é frágil e já é objeto de pesquisa ofensiva.** O trabalho *On the
  Internet, Nobody Knows You're an LLM Bot* (30/06/2026) testa fingerprinting em três camadas — HTTP,
  handshake TLS e navegador — contra ChatGPT Agent, Claude for Chrome, Skyvern, BrowserUse e outros,
  contra CAPTCHA e Bot Fight Mode [F9]. Não consegui extrair as taxas de acerto do PDF (declarado na
  seção 8); o que o trabalho estabelece é que o problema é tratável, não resolvido.
- **Pagamento de agente tem protocolo e quase nenhum uso em fiat.** O AP2 tem coalizão grande e
  adoção incipiente; o uso real concentra-se no ramo cripto (x402).
- **Seguro para ato de agente existe como mercado, não como padrão.** Há entrantes dedicados em
  meados de 2026 e apólices que cobrem "erros de agente autônomo, incluindo alucinações, ações não
  autorizadas e decisões falhas", distinguindo-se de E&O tradicional. Os critérios de subscrição —
  arquitetura do agente, log de auditoria, taxa de erro — **não são publicados**, e é exatamente isso
  que torna o efeito interessante e incerto [F15].
- **Transparência regulatória é menos do que parece.** O Artigo 50 do EU AI Act entrou em aplicação
  em **02/08/2026** e obriga a informar a pessoa de que ela interage com um sistema de IA — mas,
  lido no texto, **não** exige revelar a identidade de quem opera o sistema [F14]. A atribuição não
  está regulada; só o aviso está.

### 3.3 Quem constrói

| Ator | O que traz | Interesse |
|---|---|---|
| Microsoft (Entra Agent ID) | identidade de agente no diretório corporativo, três modos de operação | vender o diretório como ponto de controle |
| Okta | Cross App Access adotada como extensão de autorização do MCP; Agent SSO | idem, no mercado independente |
| Cloudflare | classificação Search/Agent/Training, pay per crawl, Web Bot Auth, BotBase | ser a portaria da web |
| Google + 60 parceiros de pagamento | AP2, mandatos assinados, extensão x402 | liquidar transação de agente |
| World / Tools for Humanity | prova de humanidade com 18 mi de verificados, integração com AgentKit | ser o emissor da unicidade humana |
| OWASP GenAI Security Project | Top 10 para LLM e para aplicações agênticas, com dado de incidente | norma de fato antes da norma pública |
| DIF (MCP-I / KYA-OS) | identidade descentralizada de agente com DID e credencial verificável | alternativa aberta aos diretórios |
| Comunidade de sandbox (E2B, Firecracker, WASI) | isolamento por tarefa a custo decrescente | infraestrutura |

### 3.4 Que número descreve a adoção hoje

- **7.714 incidentes** analisados na edição 2026 do OWASP Top 10 para LLM; **6.639** classificáveis
  [F6].
- **~18 milhões** de pessoas com humanidade verificada em Orb, em **160 países**, abr/2026 [F7].
- **53 projetos agênticos** acompanhados pelo *State of AI Surveyor* da OWASP, dos quais **28 são
  agentes de código**; repositórios com mais alertas de segurança: n8n (57), Claude Code (22),
  AutoGPT (15), Dify (13), Roo-Code (11). Sete projetos publicam versão diariamente ou mais rápido.
  Um backdoor no LiteLLM no PyPI teve **quase 47 mil downloads em três horas** em março de 2026.
  Apenas **37%** das organizações têm política para detectar IA-sombra (dado IBM citado no relatório).
  A OWASP mapeia injeção de prompt em **6 das 10** categorias do seu Top 10 agêntico, e acompanha
  **42 instrumentos regulatórios em 10 jurisdições**, com janelas de notificação de incidente entre
  4 e 72 horas [F5].
- **Mais de 60 organizações** no AP2 [F8].
- **Razão identidades não-humanas por humanas:** aqui há dispersão grande e nenhum número que eu
  tenha aberto na fonte primária. As buscas devolveram 80:1 (GitGuardian e KPMG), 109:1 (Palo Alto,
  contra 82:1 no ano anterior) e 45:1 (Cloud Security Alliance). **Não abri nenhum desses
  relatórios**, então trato o intervalo como indicação de ordem de grandeza, não como dado — e a
  divergência de 45 a 109 já diz que a metodologia não é comparável.

### 3.5 Nota sobre o Brasil

O Brasil entra neste mapa por três portas, todas verificadas. Primeira: o **PL 2338/2023** foi
aprovado no Senado em 10/12/2024 e tramita na Câmara em 2026; nas buscas, ele aparece atribuindo
reparação integral ao responsável **independentemente do grau de autonomia do sistema** — ou seja,
fecha por decreto a pergunta que este mapa abre. Não abri o texto do projeto (declarado na seção 8),
então trato isso como sinal, não como fato. Segunda: a **ANPD**, elevada a agência reguladora, é
apontada como quem definirá parâmetros de uso responsável de agentes sob a LGPD, com menção
explícita a **prevenção contra injeção de prompt** entre as dimensões [F13]. Terceira: a discussão
brasileira sobre identidade própria de agente já está publicada em veículo técnico — em 08/09/2026,
quatro dias antes desta rodada — nos termos corretos: menor privilégio, credencial de curta duração,
delegação verificável e auditoria como arquitetura básica, e não como recurso avançado [F12]. O
lado fraco: o texto não traz nenhum número, e o mercado brasileiro de identidade para agente ainda é
revenda de produto estrangeiro.

**Candidatos recusados como raiz** (por maturidade — regra da §2):

- *Candidato "sandbox e virtualização" recusado como raiz: adoção em maioria desde os anos 2000;
  tratado como contexto na seção 3.* O que entra como raiz não é isolar, é isolar **por ação a custo
  desprezível** (raiz 3).
- *Candidato "OAuth e federação de identidade" recusado como raiz: adoção em maioria desde ~2014;
  tratado como contexto.* O que entra é a **delegação encadeada e verificável** com credencial
  efêmera (raiz 1).
- *Candidato "detecção de bot / CAPTCHA" recusado como raiz: adoção em maioria há mais de uma
  década.* O que entra é a rede **distinguir e precificar** categorias de não humano (raiz 2).
- *Candidato "MCP como protocolo" recusado como raiz: é encanamento, não ruptura* — o que ele muda
  de ordem é a superfície de ferramenta, e isso pertence ao tema 1 da disciplina.

## 4. As disrupções-raiz

### Raiz 1 — O agente vira principal de segurança: identidade, escopo e trilha próprios

**O que rompe.** Rompe a suposição de que toda ação num sistema é atribuível a uma pessoa logada ou
a uma aplicação estática. Log de auditoria, tela de consentimento, modelo de preço por assento e
desenho de conta foram todos construídos sobre essa suposição, e nenhum sobrevive a um ator
intermediário que age sozinho, em rajada, e cria sub-agentes.

**Por que agora e não há cinco anos.** Porque só em 2025–2026 apareceram simultaneamente: o agente
com permissão real de escrita (não só leitura), o protocolo de delegação encadeada em produto de
diretório (Entra Agent ID em disponibilidade geral, abr/2026), a extensão de autorização adotada
pelo MCP (Okta Cross App Access, ago/2026) e o mandato assinado para ato econômico (AP2, set/2025).
Em 2021 havia service account e chave de API — não havia cadeia verificável de quem autorizou o quê.

**Onde está na difusão.** Entre **produto de nicho** e **adoção precoce (<10%)**. É produto geral
disponível em dois grandes diretórios, com implantação concentrada em empresa grande. Emergente.

**O que ainda falta acontecer.** (a) Interoperabilidade entre emissores — hoje a identidade do
agente é do fabricante do diretório, não do agente; (b) formato comum de trilha de delegação que
sobreviva ao salto entre organizações; (c) custo de emissão e revogação compatível com agente
efêmero; (d) alguma norma que diga o que acontece quando a cadeia está incompleta.

**Quem bloqueia, e com que incentivo.** Os fabricantes de diretório. Identidade de agente
interoperável destrói a trava de fornecedor que identidade de agente proprietária cria. O efeito
disso está em `e1.3.1`: a disputa pelo formato de trilha.

### Raiz 2 — A rede distingue humano de agente na porta, e cobra diferente

**O que rompe.** Rompe a regra fundadora da web: um endereço, uma resposta, para qualquer cliente.
Quando o servidor classifica o cliente em humano, agente identificado e agente anônimo — e cobra
preços diferentes ou recusa — "publicar" deixa de ser um ato único e vira uma política. Isso rompe o
modelo de negócio da mídia aberta e o próprio conceito de página.

**Por que agora.** Porque a verificação criptográfica ficou barata (Ed25519, assinatura HTTP) e a
motivação econômica apareceu: o tráfego de agente consome sem ver anúncio. A Cloudflare passou a
separar Agent de Search e a bloquear Agent por padrão em páginas com anúncio a partir de
15/09/2026 [F2]. Há cinco anos o bot era spam ou rastreador de busca: só havia duas categorias e
uma delas era bem-vinda por interesse próprio.

**Onde está na difusão.** **Adoção precoce**, com uma ressalva honesta: a mudança de padrão está
concentrada num único provedor de infraestrutura, e eu **não abri número aberto sobre a fatia de
web que ele atende** — sem número, trato a abrangência como alta mas não medida. Emergente.

**O que ainda falta.** (a) O Web Bot Auth virar padrão de fato — hoje o draft está expirado [F4];
(b) mecanismo de pagamento que funcione fora do circuito cripto; (c) resolução do falso positivo:
humano barrado por parecer máquina; (d) decisão sobre automação assistiva.

**Quem bloqueia.** Os fabricantes de modelo e de agente, que perdem acesso a conteúdo. O incentivo é
evadir a detecção, e o efeito está em `e7` e `e7.1`.

### Raiz 3 — O isolamento por tarefa fica desprezivelmente barato

**O que rompe.** Rompe o ambiente de execução persistente. Quando subir e destruir um mundo custa
menos de um milissegundo e menos de 5 MB [F16], o padrão se inverte: em vez de um ambiente confiável
com defesas em volta, passa a haver um mundo descartável por **ação**, sem nenhuma capacidade
concedida por omissão. Não é "virtualização melhor": é a inversão do que é o padrão, e ela muda o
desenho de produto — desfazer, ramificar, testar em produção e rodar localmente deixam de ser caros.

**Por que agora.** Porque três curvas se cruzaram: snapshot de microVM tornou a partida a frio
irrelevante (125–150 ms), o modelo de capacidade do WASI tornou a permissão explícita por
construção, e o agente criou a demanda — milhões de execuções curtas de código não confiável por dia.

**Onde está na difusão.** **Produto de nicho**, e é a raiz mais frágil deste mapa. Existe produto
maduro (E2B, Firecracker) mas o uso está restrito a plataformas de agente. Confiança rebaixada em
toda a cadeia.

**O que ainda falta.** (a) Ferramentaria de desenvolvimento que trate estado descartável como
primitivo, não como recurso de infraestrutura; (b) resposta ao problema que o isolamento **não**
resolve — a credencial válida dentro do mundo isolado; (c) prova de que o custo energético do
descarte em massa se sustenta.

**Quem bloqueia.** Os fornecedores de segurança de endpoint e de contêiner, cujo produto perde
objeto. O efeito está em `e11.4`.

### Raiz 4 — A injeção de prompt vira risco residual permanente, e a resposta migra de prevenir para atribuir e ressarcir

**O que rompe.** Rompe a expectativa, que é cultural antes de ser técnica, de que software se
conserta. Instrução e dado dividem o mesmo canal e não existe equivalente da consulta
parametrizada; a OWASP mantém injeção em 1º lugar por isso, e a mapeia em 6 das 10 categorias do
Top 10 agêntico [F5][F6]. Se o defeito não fecha, o regime muda: de engenharia (prevenir) para
atuarial (precificar, cobrir, atribuir). Software de interação passa a ser operado como se opera
risco de crédito, e não como se opera um bug.

**Por que agora.** Porque só em 2026 três coisas coincidiram: dado de incidente em volume
(7.714 casos), o agente com permissão real, e a chegada de um mercado de transferência de risco
dedicado a ato de agente autônomo [F15]. Antes, injeção de prompt era curiosidade de laboratório
sem perda material atrás.

**Onde está na difusão.** **Adoção precoce** do lado do diagnóstico (o ranking da OWASP é norma de
fato); **produto de nicho** do lado do mercado de seguro. Emergente.

**O que ainda falta.** (a) Padrão de trilha auditável aceito por seguradora; (b) primeira
jurisprudência relevante sobre ato de agente; (c) que o custo do prêmio fique abaixo do valor gerado
pelo agente — se não ficar, a adoção trava (é a retroação em `e15.3`).

**Quem bloqueia.** As próprias seguradoras, pelo caminho mais simples: excluir dano de agente das
apólices gerais e não oferecer cobertura específica a preço viável. `e15.3`.

**Nota de honestidade sobre a independência das raízes.** As raízes 1 e 4 compartilham tronco: as
duas descrevem o deslocamento da segurança do *ato* para o *responsável*. A raiz 1 descreve o
mecanismo (identidade e delegação), a raiz 4 descreve o regime (atribuição e ressarcimento). Elas
não são independentes, e a §7.4 testa o que sobra se uma delas não acontecer.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O agente vira principal de segurança, com identidade, escopo e trilha próprios
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Todo sistema que o agente toca passa a ter um segundo tipo de conta, a do agente, distinta da conta da pessoa e da chave de aplicação"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "A interface de mídia passa a exibir qual agente agiu, e não apenas quem estava logado"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Procedência maquínica ocupa em feed, documento e comentário o lugar que o carimbo de hora ocupa hoje, e vira objeto de design com ícone, cor e filtro"
                sinal: fraco
                prazo: 2036
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: "Métricas de audiência se bifurcam em alcance humano e alcance delegado, e contratos de publicidade passam a comprar apenas o primeiro"
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Credencial efêmera por tarefa substitui a chave de API longa nas integrações de mídia, em CMS, DAM e ad server"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "O incidente típico deixa de ser segredo vazado e passa a ser delegação excessiva concedida corretamente, em que o ataque usa permissão legítima"
                sinal: fraco
                prazo: 2035
                confianca: media
          - id: e1.3
            ordem: 2
            efeito: "A gravação da cadeia pessoa para agente para sub-agente vira cláusula de compra em software corporativo de mídia"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: "Um formato comum de trilha de ação de agente é disputado entre fornecedores de identidade, e quem perde a disputa vira integração de segunda classe"
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O consentimento deixa de ser um clique e vira um mandato assinado, com escopo, teto e validade"
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "O desenho de interação ganha um objeto novo, a tela em que a pessoa escreve o limite do que o agente pode fazer sem perguntar"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Escrever o mandato vira competência de usuário comum e entra no onboarding de produto de consumo, como a senha entrou nos anos 1990"
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Comércio e assinatura passam a liquidar contra mandato verificável em vez de contra sessão logada, e o carrinho deixa de ser uma tela"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "O ponto de conversão migra da vitrine para a negociação entre agentes, e o investimento em design de vitrine se desloca para design de oferta legível por máquina"
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e2.3
            ordem: 2
            efeito: "Quando o mandato é ambíguo a perda cai sobre quem assinou, e bancos e plataformas passam a recusar estorno de compra feita por agente com mandato válido"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e2.3.1
                ordem: 3
                efeito: "Escrever mandato apertado vira habilidade de proteção financeira, e desigualdade de letramento vira desigualdade de prejuízo"
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Emitir e revogar identidade para agentes efêmeros vira custo operacional de primeira ordem, e a razão entre identidades não humanas e humanas deixa de ser métrica de relatório e vira item de orçamento"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Para escapar do custo, equipes voltam a compartilhar uma identidade entre muitos agentes, recriando a conta genérica que a identidade própria existia para eliminar"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Auditorias passam a reprovar arquiteturas de agente por indistinguibilidade, e parte das empresas desliga frotas inteiras por não conseguir dizer quem fez o quê"
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "Fornecedores passam a cobrar por identidade ativa, e o preço do software de mídia migra de assento humano para ação verificada"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "A categoria plano pessoal desaparece do meio da tabela de preços das ferramentas de criação, que se parte entre gratuito limitado e consumo medido"
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "Trabalhadores medidos por volume de ação em sistema, como moderação, atendimento, tráfego pago e edição de catálogo, passam a ser medidos pela qualidade do mandato que escrevem"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Surge dentro de redações e estúdios a função de quem define e revisa os limites dos agentes, que responde pelo escopo e não pelo texto do prompt"
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Acordo coletivo e contrato de trabalho passam a tratar da atribuição do ato do agente ao trabalhador que o autorizou"
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "Órgãos públicos precisam decidir se aceitam agente como requerente, e o balcão digital ganha uma porta com regra própria"
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "No Brasil a integração de identidade de agente ao ecossistema gov.br vira questão prática de política pública, porque negar agente nega acesso a quem depende dele"
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Serviço público passa a oferecer uma via legível por máquina, e a fila deixa de ser a medida de acesso, realocando a desigualdade para quem tem o agente melhor"
                sinal: fraco
                prazo: 2040
                confianca: baixa
  - disrupcao: A rede distingue humano de agente na porta, e cobra diferente
    efeitos:
      - id: e6
        ordem: 1
        efeito: "Acesso a conteúdo deixa de ser uniforme, e o mesmo endereço devolve coisas diferentes para humano, para agente identificado e para agente anônimo"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Publicar deixa de ser um ato e vira três, a versão para leitura humana, a versão licenciada para agente e a recusa"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Redações passam a manter duas linhas editoriais com custos separados, e a versão para máquina deixa de ser derivada da humana"
                sinal: fraco
                prazo: 2036
                confianca: baixa
              - id: e6.1.2
                ordem: 3
                efeito: "O design de página perde parte da função de retenção porque o leitor delegado não vê a página, e o investimento migra para a estrutura do dado"
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Micropagamento por acesso volta a funcionar, não entre pessoas e sites mas entre agentes e sites, com preço por requisição"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "Existe um preço público de mercado para um acesso de agente, e ele vira referência em contrato de licenciamento de conteúdo"
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e6.3
            ordem: 2
            efeito: "Sites pequenos sem infraestrutura de verificação ficam fora do circuito pago e só aparecem no que for gratuito por padrão"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.3.1
                ordem: 3
                efeito: "A web independente se concentra em agregadores que fazem a verificação por ela, repetindo a dependência de plataforma que a web aberta prometia dissolver"
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "Instala-se uma corrida entre detectar agente e parecer humano, com fingerprinting multicamada de um lado e evasão do outro"
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Serviços de acesso humanizado viram mercado cinzento comercializado abertamente, como o mercado de proxy residencial é hoje"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "A evasão é criminalizada em alguma jurisdição grande, e a mesma técnica passa a ser crime num país e serviço de acessibilidade em outro"
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "O custo do falso positivo, o humano barrado por parecer máquina, obriga plataformas a afrouxar a detecção e a linha fica deliberadamente borrada"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "Acessibilidade entra formalmente no desenho antibot, e bloquear automação vira decisão sujeita à mesma revisão que bloquear leitor de tela"
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "Pessoas que dependem de automação como tecnologia assistiva perdem acesso quando o bloqueio de agente é ligado por padrão"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Litígio de acessibilidade passa a tratar bloqueio de agente como barreira, e a defesa de que é antifraude deixa de bastar"
            sinal: fraco
            prazo: 2035
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "Surge a figura do agente assistivo certificado, com credencial que atravessa o bloqueio, e com ela a disputa sobre quem certifica"
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: "Prova de humanidade vira insumo de produto, e o site deixa de perguntar se você é robô para perguntar que humano responde por este agente"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "Biometria de unicidade vira infraestrutura de mídia social, e conta sem humano verificado por trás vira categoria à parte do feed"
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "Reputação passa a ser transferível entre plataformas por prova criptográfica, e começar do zero numa rede nova deixa de existir para quem já tem histórico"
                sinal: fraco
                prazo: 2039
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: "A concentração da prova de humanidade em poucos emissores vira risco sistêmico declarado, e reguladores europeus e brasileiros restringem o uso obrigatório de biometria"
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: "Um esquema público de prova de humanidade ligado à identidade estatal compete com o privado, e a escolha entre os dois vira questão política de mídia"
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: "O tráfego de agente passa a ser a maior parte do tráfego de leitura, e o custo de servir máquina vira linha de orçamento e argumento de recusa"
        sinal: fraco
        prazo: 2033
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "Sites passam a servir agentes por um caminho barato de dado estruturado e cache agressivo, não por generosidade mas porque renderizar página para máquina é desperdício medido"
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: "O HTML deixa de ser o formato primário de distribuição de notícia, e a página vira a apresentação secundária de um feed de dados licenciado"
                sinal: fraco
                prazo: 2041
                confianca: baixa
  - disrupcao: O isolamento por tarefa fica desprezivelmente barato
    efeitos:
      - id: e11
        ordem: 1
        efeito: "O ambiente de execução do agente passa a ser descartável por ação, e não persistente por sessão"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "Desfazer deixa de ser uma pilha de comandos e vira restauração de estado, porque o produto guarda o mundo e não a ação"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: "Ferramentas de criação oferecem ramificação de estado como recurso de interface, e a pessoa explora cinco versões do projeto ao mesmo tempo, cada uma no seu mundo"
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: "Testar em produção deixa de ser tabu em mídia, e campanhas, layouts e edições rodam em réplicas isoladas do sistema real"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: "O ciclo de decisão editorial encurta para o tempo de uma simulação, e a redação passa a decidir pauta com contrafactual medido"
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e11.3
            ordem: 2
            efeito: "Isolamento barato produz ilusão de segurança, porque o agente contido continua com credencial válida e rede aberta, e o incidente migra do sistema de arquivos para a API"
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e11.3.1
                ordem: 3
                efeito: "A métrica de segurança de agente deixa de ser se ele escapou da sandbox e passa a ser que chamadas legítimas ele fez que não devia, e a observabilidade de rede vira o controle principal"
                sinal: medio
                prazo: 2033
                confianca: media
          - id: e11.4
            ordem: 2
            efeito: "Fornecedores de segurança de endpoint perdem objeto, porque não há endpoint persistente para proteger quando o mundo dura segundos"
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e11.4.1
                ordem: 3
                efeito: "O orçamento de segurança corporativa migra de proteger máquina para governar identidade e observar tráfego, e a categoria endpoint se funde à de identidade"
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: "Rodar o agente na máquina da pessoa volta a ser viável, porque o isolamento não exige mais um datacenter"
        sinal: fraco
        prazo: 2033
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: "Produtos de mídia passam a oferecer modo local por privacidade, e a diferença de preço entre local e nuvem vira argumento de venda"
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: "Parte do processamento criativo sai da nuvem e o custo marginal de criar cai a zero para quem tem hardware, realocando vantagem para quem pode comprar máquina"
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: "A unidade de cobrança da computação muda de tempo de máquina para tarefa isolada concluída"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: "O custo de um agente fica previsível o bastante para entrar em orçamento de projeto, e agência passa a orçar tarefas de agente como orça hora de pessoa"
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: "Proposta comercial de agência passa a ter linha de custo maquínico auditável, e o cliente compara fornecedores por eficiência de agente"
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: "O desperdício do isolamento, subir e destruir milhões de mundos por dia, vira alvo de crítica ambiental mensurável"
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: "Provedores passam a publicar custo energético por tarefa de agente, e clientes corporativos usam o número para limitar frotas"
            sinal: fraco
            prazo: 2037
            confianca: baixa
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: "Eficiência por tarefa vira critério de compra acima de latência, e a arquitetura mais isolada perde para a mais barata em contextos de baixo risco"
                sinal: fraco
                prazo: 2041
                confianca: baixa
  - disrupcao: A injeção de prompt vira risco residual permanente, e a resposta migra de prevenir para atribuir e ressarcir
    efeitos:
      - id: e15
        ordem: 1
        efeito: "Segurança de agente passa a ser tratada como risco atuarial e não como defeito a corrigir, com cobertura, prêmio e franquia para ato de agente"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: "O critério de subscrição da seguradora vira na prática o primeiro padrão técnico obrigatório de operação de agente, antes de qualquer norma pública"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: "Quem não consegue provar trilha de auditoria fica sem cobertura, e agente sem identidade própria vira inviável comercialmente em setor regulado"
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e15.2
            ordem: 2
            efeito: "Estúdios, agências e veículos pequenos que usam agente sem trilha ficam fora de contrato corporativo por não passarem na diligência prévia"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e15.2.1
                ordem: 3
                efeito: "Produtoras pequenas passam a contratar a trilha de auditoria como serviço de terceiro, e a conformidade vira custo fixo de entrada no mercado corporativo"
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e15.3
            ordem: 2
            efeito: "Seguradoras excluem dano de agente autônomo das apólices gerais e o custo do risco volta inteiro para quem opera, travando a adoção em setores de margem baixa"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e15.3.1
                ordem: 3
                efeito: "Parte do mercado de mídia recua para automação determinística de regra e script, onde o risco é precificável, e agente fica restrito ao que é reversível"
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e16
        ordem: 1
        efeito: "O desenho de interação passa a assumir que todo conteúdo que o agente lê é hostil, e a confirmação vira elemento permanente da interface em vez de fricção a remover"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: "A experiência de uso se divide entre ações reversíveis que o agente faz sozinho e irreversíveis que a pessoa confirma, e essa divisão vira decisão de produto declarada"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: "A categoria irreversível encolhe por pressão comercial, tudo que puder ser desfeito é desfeito para tirar a confirmação do caminho, e o risco migra para o que não se desfaz, que é reputação e publicação"
                sinal: fraco
                prazo: 2035
                confianca: media
          - id: e16.2
            ordem: 2
            efeito: "Conteúdo publicado passa a ser desenhado para ser lido por agente adversário, e veículos testam as próprias páginas contra injeção como hoje testam contra SEO negativo"
            sinal: fraco
            prazo: 2033
            confianca: baixa
            efeitos:
              - id: e16.2.1
                ordem: 3
                efeito: "Nasce a prática de higiene editorial para máquina, sobre o que a página não pode conter porque outro agente vai obedecer, e ela entra no manual de redação"
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e17
        ordem: 1
        efeito: "Atribuir o ato ao responsável vira o problema central, e não impedir o ato"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e17.1
            ordem: 2
            efeito: "Tribunais passam a decidir quem responde pelo ato do agente com base na cadeia de delegação registrada, e a ausência de registro é interpretada contra o operador"
            sinal: fraco
            prazo: 2035
            confianca: baixa
            efeitos:
              - id: e17.1.1
                ordem: 3
                efeito: "O primeiro processo em que a parte é identificada pelo agente e não pela pessoa força a definição de um ponto de imputação, que continua humano mas passa a ser nomeado antes do ato"
                sinal: fraco
                prazo: 2043
                confianca: baixa
          - id: e17.2
            ordem: 2
            efeito: "Plataformas de mídia passam a exigir identificação do operador por trás do agente para permitir publicação, e o anonimato de publicação passa a custar alcance"
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e17.2.1
                ordem: 3
                efeito: "O anonimato na publicação sobrevive apenas em circuitos que aceitam o risco, e a imprensa que protege fonte precisa manter deliberadamente um caminho sem agente"
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e18
        ordem: 1
        efeito: "A desconfiança se generaliza e o público passa a descontar o valor de qualquer interação que possa ter sido delegada, inclusive as que não foram"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e18.1
            ordem: 2
            efeito: "Provas de presença humana ao vivo, presencial e sincrônica ganham prêmio de preço em mídia, porque são as únicas que a delegação não alcança"
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e18.1.1
                ordem: 3
                efeito: "O ao vivo deixa de ser um gênero e vira uma marca de autenticidade aplicável a todos os gêneros, inclusive aos gravados"
                sinal: fraco
                prazo: 2039
                confianca: baixa
          - id: e18.2
            ordem: 2
            efeito: "Marcas e veículos passam a declarar publicamente o que foi feito por agente, não por exigência legal mas porque esconder passa a sair mais caro quando se descobre"
            sinal: fraco
            prazo: 2033
            confianca: baixa
            efeitos:
              - id: e18.2.1
                ordem: 3
                efeito: "A declaração vira ruído quando todos declaram, e o diferencial se desloca para quem consegue provar o contrário, ou seja, provar ausência de delegação"
                sinal: fraco
                prazo: 2038
                confianca: baixa
```

### O que o bloco não diz

**Mecanismos, um por ramo.** O bloco lista efeitos; os mecanismos estão aqui.

- `e1` acontece **porque** a identidade própria (raiz 1) obriga o sistema a ter um registro para um
  ator que não é pessoa nem aplicação — e um registro desse tipo é, operacionalmente, uma conta.
  `e1.1` decorre **porque** ter duas contas distintas na mesma ação torna a atribuição ambígua na
  interface, e interface ambígua sobre autoria é defeito de produto: alguém vai preencher esse campo.
- `e2` acontece **porque** um mandato assinado com escopo e validade (AP2) é a única forma de
  autorizar uma ação que vai acontecer quando você não estiver presente — e o clique não carrega
  escopo. `e2.3` decorre **porque** cadeia de não-repúdio serve, por definição, para negar
  contestação: quem assinou, assinou.
- `e6` acontece **porque** classificar o cliente (raiz 2) é pré-condição para cobrar dele, e cobrar
  dele é a resposta econômica ao tráfego que consome sem ver anúncio. `e6.1.2` decorre **porque** o
  leitor delegado não é retido: ele extrai e vai embora, e retenção é a função que o design de
  página exerce.
- `e11` acontece **porque** o custo de criar e destruir um mundo caiu abaixo do custo de confiar em
  um mundo compartilhado (menos de 1 ms e menos de 5 MB no WASI, contra 1–5 s de contêiner). `e11.1`
  decorre **porque** quando o estado inteiro é barato de copiar, guardar o estado passa a ser mais
  simples que reconstruir a ação inversa.
- `e15` acontece **porque** um defeito que não fecha e produz perda material é, por definição, um
  risco segurável — e não um bug em aberto. `e15.1` decorre **porque** a seguradora precisa medir
  para precificar, e a única forma de medir é impor requisito de arquitetura e log.
- `e18` acontece **porque** o público não consegue distinguir delegado de não delegado a custo
  razoável, e diante de incerteza de autoria o comportamento observado é descontar o valor médio.

**Classe de referência usada nos prazos.** Três referências, declaradas:

1. **HTTPS universal** — do "funciona e é gratuito" (Let's Encrypt, 2016) ao padrão de fato com
   marcação de inseguro no navegador: cerca de **4 anos**, com um empurrão de um único ator de
   infraestrutura. É a referência dos efeitos em que um ponto de estrangulamento decide sozinho:
   `e1`, `e6`, `e16` — daí os prazos em 2029–2031.
2. **Autenticação de dois fatores em serviço de consumo** — do disponível (≈2011) ao obrigatório em
   massa (≈2021): **cerca de 10 anos**, porque depende de mudança de comportamento de usuário e não
   só de infraestrutura. É a referência de `e2.1`, `e9.1` e `e2.1.1` — daí os prazos entre 2031 e 2037.
3. **Micropagamento na web** — disponível desde os anos 1990, **nunca adotado** em três décadas. É a
   referência de contraste: por isso `e6.2` está em 2032 e não em 2029, apesar de o mecanismo
   (HTTP 402 + assinatura) já existir. O que muda em relação ao fracasso histórico é que a fricção do
   micropagamento era **cognitiva e humana**; entre máquinas ela não existe. Esse é o argumento que
   sustenta o prazo, e ele é falseável: se em 2030 o volume de pagamento agente-para-site fora do
   circuito cripto ainda for irrelevante, `e6.2` estava errado.

**Efeitos declarados fora da janela do mapa.** Dois efeitos de 3ª ordem têm prazo maior que 2041 e
estão aqui deliberadamente, com a declaração exigida: `e9.2.1` (esquema público de prova de
humanidade competindo com o privado, **2044**) e `e17.1.1` (primeiro processo em que a parte é
identificada pelo agente, **2043**). Os dois dependem de ciclo legislativo ou judicial completo, e
nenhuma referência de adoção tecnológica ajuda a encurtá-los. Eles estão no mapa porque são o que a
cadeia causal produz; não estão dentro do horizonte porque seria desonesto colocá-los lá.

**Regra de parada — onde deliberadamente não derivei um nível a mais.** Em `e13.1.1` (custo maquínico
auditável em proposta de agência) o filho natural seria "agências competem por eficiência de agente".
Isso é o pai mais adiante, sem troca de ator nem de mecanismo — é o mesmo efeito amadurecendo, e por
isso parei. O mesmo vale para `e3.2.1`: o próximo passo seria "preços continuam caindo", que não é
outra ordem.

### Cruzamentos

**Convergência 1 — a trilha de auditoria como objeto disputado.** `e1.3.1` (raiz 1: fornecedores de
identidade disputam o formato de trilha) e `e15.1` (raiz 4: o critério de subscrição da seguradora
vira padrão de fato) chegam ao mesmo lugar por caminhos que não se veem: **quem define o formato do
registro de ação de agente define o mercado**. Este é o achado mais forte do mapa, e ele tem uma
consequência prática imediata para quem projeta: o log de ação de agente não é detalhe de
implementação, é superfície de produto. Vale notar quem chega primeiro — a seguradora tem incentivo e
pressa; o consórcio técnico tem processo e lentidão.

**Convergência 2 — a interface da procedência.** `e1.1` (raiz 1: exibir qual agente agiu) e `e18.2`
(raiz 4: declarar publicamente o que foi feito por agente) convergem para o mesmo elemento de
interface por motivos opostos — um por obrigação de auditoria, outro por cálculo reputacional. Quando
duas pressões independentes pedem o mesmo componente, ele costuma ser construído.

**Convergência 3 — mundos paralelos e conteúdo hostil.** `e11.2` (raiz 3: testar em produção em
réplica isolada) e `e16.2` (raiz 4: testar a própria página contra injeção) convergem para a mesma
prática operacional: a redação passa a ter um ambiente onde roda o adversário. A raiz 3 torna isso
barato; a raiz 4 torna isso necessário.

**Retroalimentação negativa 1.** `e3.1` → identidade compartilhada por custo → destrói a atribuição
que a raiz 1 produz → enfraquece `e15.1` (sem trilha não há subscrição) → aumenta o prêmio do seguro
→ aumenta o incentivo para investir em identidade. O ciclo se fecha, e o que decide o equilíbrio é
o preço relativo entre governar identidade e pagar o risco. Isso é mensurável, e é o que eu
observaria para saber em que cenário estamos.

**Retroalimentação negativa 2.** `e7.2` → custo do falso positivo → detecção afrouxa → a distinção
humano/agente (raiz 2) perde eficácia → o valor de bloquear cai → o modelo de cobrança por acesso de
agente (`e6.2`) fica sem dente. A raiz 2 pode se estrangular sozinha, e o estrangulador é a
acessibilidade — não a regulação.

**Retroalimentação positiva.** `e18` (desconfiança generalizada) → aumenta o valor de provar quem
agiu → reforça a raiz 1. É o único ciclo de reforço do mapa, e ele é mediado por sentimento público,
que é a variável menos previsível aqui.

**Contradição 1, não resolvida.** `e9.1` diz que a biometria de unicidade vira infraestrutura de
mídia social; `e9.2` diz que reguladores restringem o uso obrigatório de biometria. Não podem
coexistir na mesma jurisdição. O que decide entre as duas é **se a prova de humanidade pode ser feita
sem biometria com garantia equivalente de unicidade** — hoje não pode, e é aí que eu olharia. O
resultado provável é fragmentação geográfica, não vitória de um dos dois: o mapa então se parte em
duas webs, e `e9.2.1` é a versão estatal dessa partição.

**Contradição 2, não resolvida.** `e6` (a rede distingue e cobra) e `e8` (quem depende de automação
assistiva perde acesso) descrevem a mesma decisão vista de dois lados, e não há solução técnica
neutra: uma credencial que atravessa o bloqueio para o agente assistivo (`e8.1.1`) é, do ponto de
vista do detector, exatamente o que a evasão comercial (`e7.1`) quer comprar. Registro as duas e o
que decide: **quem tem autoridade para certificar** um agente como assistivo. Nenhum ator plausível
está posicionado para isso hoje.

**Cobertura STEEP, com a categoria vazia declarada.**

| Dimensão | Onde aparece |
|---|---|
| Social | `e8` (acessibilidade), `e18` (desconfiança), `e4` (medida do trabalho) |
| Tecnológico | `e1`, `e6`, `e11`, `e16` |
| Econômico | `e3`, `e6.2`, `e13`, `e15` (preço, cobrança, risco) |
| Ecológico | `e14` (custo energético do descarte em massa) — **é a dimensão mais rala do mapa**, sustentada por inferência e não por caso; declarado |
| Político | `e5` (balcão público), `e9.2`, `e17` (imputação) |

**Quem perde, explicitamente:** `e6.3` (sites pequenos), `e8` (quem usa automação assistiva), `e11.4`
(segurança de endpoint), `e15.2` (produtoras pequenas), `e17.2.1` (anonimato de publicação e proteção
de fonte), `e3.2.1` (quem pagava plano pessoal), `e12.1.1` (quem não pode comprar hardware).

## 6. Sinais fracos e wildcards

### Sinal fraco 1 — O agente com conta de usuário própria, não com service principal

**Onde foi visto.** Na documentação do Entra Agent ID, entre os três modos de operação, há um que é
diferente dos outros dois: "agentes operando em nome próprio usando **user principals** criados
especificamente para aquele agente (por exemplo, agentes com caixa postal própria)" [F3]. Está escrito
como detalhe de configuração.

**O que mudaria.** Um agente com principal **de usuário** é um colega, não uma ferramenta. Ele aparece
no diretório da empresa, recebe e-mail, entra em lista de distribuição, tem gestor. Isso reorganiza a
interface de todo produto de trabalho colaborativo — o seletor de pessoas, a menção, a atribuição de
tarefa — e reabre a pergunta trabalhista de `e4.1.1` bem antes de 2039.

**Sinal observável de que está crescendo.** Ferramentas de colaboração (chat corporativo, suíte de
documentos, gestor de tarefas) passarem a listar agentes no mesmo seletor de pessoas, sem separador
visual. Se aparecer separador, a categoria se manteve; se não aparecer, ela se dissolveu.

### Sinal fraco 2 — O draft expirado que já é infraestrutura

**Onde foi visto.** `draft-meunier-web-bot-auth-architecture-05` está **expirado e sem estado formal
na IETF** [F4] — e ao mesmo tempo é o mecanismo pelo qual a Cloudflare autentica rastreadores em
produção [F1].

**O que mudaria.** Se a identidade de agente na web se consolidar por implantação e não por padrão, o
emissor da identidade é um ator privado, e a portaria da web fica com o dono do direito de assinar.
Isso muda quem decide o que é um agente legítimo — e é a diferença entre um regime com recurso e um
regime sem.

**Sinal observável.** O draft sair de expirado e entrar em grupo de trabalho da IETF (ou não, em 18
meses). É um evento datável e binário.

### Sinal fraco 3 — A acessibilidade descoberta pelo lado errado

**Onde foi visto.** Um relato pessoal, de 07/04/2026, de alguém com perda progressiva de visão que
usava automação de navegador para publicar no próprio blog e foi bloqueado por uma atualização
antibot da plataforma [F11]. Sem dado, sem caso judicial, sem estatística: um relato.

**O que mudaria.** Se relatos assim viram jurisprudência, bloquear agente passa a ser regulado como
barreira de acessibilidade, e toda a economia da raiz 2 muda de forma — `e7.2` e `e8.1` deixam de ser
inferência. Se não virarem, o custo fica difuso e invisível, que é o desfecho mais provável e o pior.

**Sinal observável.** A primeira ação judicial de acessibilidade em que o objeto seja bloqueio de
automação, e não ausência de texto alternativo ou contraste.

### Sinal fraco 4 — O agente que lê a página como adversário

**Onde foi visto.** A pesquisa de fingerprinting multicamada [F9] e a proposta de "web agent-first"
com **camadas semânticas separadas** para humano e para máquina [F10] descrevem, sem se citarem, o
mesmo futuro por lados opostos: uma quer detectar o agente, a outra quer servi-lo bem.

**O que mudaria.** Se a camada para máquina for construída, `e6.1` e `e10.1` chegam antes e mais
completos: não uma versão derivada, mas um produto separado — e a redação precisa de dois times.

**Sinal observável.** Um veículo grande publicar uma especificação própria de acesso para agentes,
com preço, e não apenas um `robots.txt` com regra nova.

### Wildcard 1 — Uma injeção de prompt em cadeia de suprimento atinge frotas de agente simultaneamente

**Mecanismo.** Uma biblioteca amplamente usada por agentes recebe conteúdo comprometido; todo agente
que a lê executa a instrução embutida. Não é hipótese livre: um backdoor no LiteLLM no PyPI teve
**quase 47 mil downloads em três horas** em março de 2026 [F5], e 28 dos 53 projetos agênticos
acompanhados são agentes de código com acesso a arquivo e API [F5]. Junte-se a isso a observação de
que a exploração exige três propriedades simultâneas — acesso a dado privado, exposição a conteúdo
não confiável e canal de saída — e os agentes de código têm as três.

**Por que é improvável.** Porque exige coincidência de janela: a dependência comprometida precisa ser
lida por muitos agentes antes da detecção, e o tempo de resposta dos mantenedores tem sido de horas.

**O que faria com o mapa.** Antecipa a raiz 4 em cinco anos e inverte seu sinal: em vez de regime
atuarial gradual, moratória. `e15.3` (exclusão em apólice) vira imediato, `e16.1` (confirmação
permanente) vira obrigatório por regulação, e a adoção de agente em mídia recua por três a cinco
anos. Os prazos de 2029–2033 deste mapa saltariam para depois de 2035.

**Sinal precoce.** Um incidente de mesma natureza com contenção parcial — em que a instrução
maliciosa chegou a executar em mais de uma organização antes da detecção.

### Wildcard 2 — O emissor de prova de humanidade é comprometido ou capturado

**Mecanismo.** Prova de humanidade concentra-se em poucos emissores, e um deles — com quase 18 milhões
de verificados em 160 países [F7] — tem sua base de identificadores comprometida, ou é adquirido por
uma plataforma de mídia.

**Por que é improvável.** O desenho técnico usa hash de íris e prova de conhecimento zero justamente
para que o vazamento não produza identificação. A captura por aquisição é o vetor mais plausível dos
dois.

**O que faria com o mapa.** Destrói `e9` inteiro e move a prova de humanidade para o Estado
(`e9.2.1`) — antecipando-a de 2044 para dentro do horizonte. A mídia social passaria a depender de
identidade estatal para distinguir conta humana de conta de agente, com tudo o que isso implica para
imprensa e dissidência.

**Sinal precoce.** Um emissor de prova de humanidade ser adquirido por empresa cuja receita principal
seja publicidade.

### Wildcard 3 — Um modelo de execução com separação real entre instrução e dado

**Mecanismo.** Aparece uma arquitetura em que instrução e conteúdo trafegam em canais efetivamente
separados — o equivalente da consulta parametrizada que a OWASP diz não existir. Não é inconcebível:
é o tipo de problema que uma mudança de arquitetura de modelo pode resolver, e há linha de pesquisa
ativa em defesas fora de banda e atribuição causal de invocação de ferramenta.

**Por que é improvável.** Porque a fusão de instrução e dado é o que dá ao modelo a capacidade de
seguir instrução em linguagem natural — separar os canais pode custar exatamente a propriedade que se
quer.

**O que faria com o mapa.** Mata a raiz 4 e esvazia metade da raiz 1: sem risco residual permanente, a
identidade do agente volta a ser problema de engenharia de acesso, não regime de responsabilidade.
`e15`, `e17` e `e18` caem. O mapa perderia cerca de um quarto dos efeitos — este é o teste da §7.4
aplicado à raiz mais estrutural.

**Sinal precoce.** Um fabricante de modelo publicar taxa de sucesso de injeção próxima de zero em
avaliação **de terceiro**, com o conjunto de testes aberto — e não em avaliação própria.

## 7. Contra o próprio mapa

Esta seção foi escrita **depois** do mapa pronto, e o mapa foi alterado pelo resultado. O registro
auditável de alterações está no fim da seção.

### 7.1 Pré-mortem — é 2041 e este mapa se mostrou errado. Por quê?

**Razão 1: nada disso saiu do ambiente corporativo.** Identidade de agente, trilha de delegação e
mandato assinado permaneceram como recurso de diretório empresarial, invisível para quem projeta
mídia de consumo — exatamente como o SAML ficou. O mapa confundiu "existe em produto de diretório"
com "chega à interface". **Aponta para `e1.1` e `e2.1`**, que são justamente os efeitos que atravessam
do corporativo para o consumo.

**Razão 2: a distinção humano/agente não se sustentou.** A detecção não venceu a evasão, o falso
positivo custou caro demais, e sites voltaram a servir todo mundo igual, cobrando de quem quisesse
pagar por conveniência e não por identidade. **Aponta para a raiz 2 inteira**, e especialmente para
`e6` — que está com confiança alta.

**Razão 3: o agente não chegou lá.** A capacidade de agir de forma confiável em ambiente aberto não
melhorou o suficiente, o uso ficou restrito a tarefas de baixo risco em domínios fechados, e a
infraestrutura de contenção foi construída para um volume que não veio. **Aponta para todas as
raízes**, e é o risco que este mapa não consegue mitigar por dentro — ele é sobre a resposta ao
agente, não sobre o agente.

### 7.2 Extrapolação linear — o que é só "mais do mesmo, maior"

- **`e3`** (custo de identidade vira item de orçamento) era extrapolação pura: mais agentes, mais
  identidades, mais custo. Recebeu mecanismo de não-linearidade — a **inversão** em `e3.1`, em que o
  custo produz o retorno à conta compartilhada, que é o oposto do que a curva sugere — e por isso
  permaneceu.
- **`e10`** (tráfego de agente vira maioria) continua sendo extrapolação: é a mesma curva do tráfego
  de bot, maior. Foi **rebaixado** (ver registro), e a parte não linear está no filho `e10.1`, em que
  o custo energético inverte a política de servir.
- **`e13`** (cobrança por tarefa em vez de por tempo) é a mesma coisa que já aconteceu com serverless,
  aplicada a outro objeto. Mantive porque o ator muda (agência de mídia, não engenharia), mas com
  confiança média e sem pretensão de originalidade.

### 7.3 Velocidade de adoção — prazos confrontados com a referência

- **`e6.2`** (micropagamento entre agentes e sites) tinha prazo 2029 na primeira versão. Confrontado
  com a classe de referência do micropagamento na web — trinta anos de fracasso —, foi **empurrado
  para 2032**. O argumento de que a fricção era humana e não técnica sustenta que ele aconteça; não
  sustenta que aconteça rápido.
- **`e9.1`** (biometria de unicidade como infraestrutura de mídia social) tinha 2031. A referência
  correta é a do 2FA — cerca de dez anos do disponível ao obrigatório, porque depende de comportamento
  —, e não a do HTTPS. **Empurrado para 2034.**
- **`e12`** (agente rodando localmente) tem sinal fraco e prazo 2033. A classe de referência aqui é
  ruim: o software local perdeu para a nuvem em todas as categorias nos últimos vinte anos. Mantido
  com confiança média e sinal fraco, mas é o candidato mais provável a estar errado por otimismo
  técnico.

### 7.4 A raiz que não acontece

- **Se a raiz 1 não acontecer** (identidade de agente não passa de recurso corporativo): caem `e1`,
  `e2`, `e3`, `e4` e `e5`, com seus 20 descendentes. Sobra a raiz 2 inteira (a rede pode distinguir
  agente sem que o agente tenha identidade própria — basta distinguir a categoria), sobra a raiz 3
  inteira, e a raiz 4 sobrevive mutilada: há risco, mas não há a quem atribuir, o que na verdade
  **agrava** `e18` (desconfiança). O mapa encolhe mas não desmorona.
- **Se a raiz 2 não acontecer** (a web continua uniforme): caem `e6` a `e10`. Sobra tudo o mais, e
  `e18` sobrevive por outro caminho. É a raiz mais removível.
- **Se a raiz 3 não acontecer** (isolamento não barateia): caem `e11` a `e14`. O resto do mapa fica
  intacto — sinal de que esta raiz é a mais periférica, e é coerente com ela ser a mais frágil no
  critério de maturidade.
- **Se a raiz 4 não acontecer** (injeção é resolvida): caem `e15` a `e18`, e a raiz 1 perde metade da
  força — porque a identidade do agente vira controle de acesso comum e não regime de
  responsabilidade. **Este é o achado desconfortável do teste:** as raízes 1 e 4 não são independentes,
  como a nota ao fim da seção 4 já declarava. Elas não são a mesma raiz disfarçada (a raiz 1 tem
  efeitos econômicos e de interface que sobrevivem sem a raiz 4), mas compartilham tronco, e o mapa
  seria mais honesto com **três raízes e meia** do que com quatro. Registro em vez de reescrever,
  porque separar mecanismo de regime é a distinção que o mapa usa para pensar.

### 7.5 Suposições escondidas, agora escritas

1. **A web pública continua sendo o canal principal.** Se o acesso a conteúdo migrar para dentro de
   assistentes fechados com acordos bilaterais, a raiz 2 inteira perde objeto — não há porta para
   vigiar, porque não há porta.
2. **A energia e a computação continuam baratas.** `e11` e `e14` dependem disso em direções opostas.
3. **Os fabricantes de modelo continuam permitindo agentes com permissão ampla.** Basta que um ou dois
   restrinjam por responsabilidade civil para a curva mudar — e isso é decisão de empresa, não de
   tecnologia.
4. **O regime de responsabilidade continua sendo humano.** Todo o mapa assume que no fim há uma pessoa
   ou empresa imputável. Se alguma jurisdição criar personalidade jurídica para agente, `e17` muda de
   natureza e vira outro mapa. Aliás, o Brasil parece caminhar para o oposto — reparação integral pelo
   responsável, independentemente da autonomia do sistema.
5. **A capacidade dos agentes continua melhorando.** Suposição de fundo, e a mais forte de todas.

### 7.6 Viés do autor

Dois, nomeados. Primeiro: **viés de infraestrutura**. Este mapa gosta de identidade, protocolo e
trilha de auditoria, porque são objetos legíveis e datáveis. O resultado é que o ramo social —
`e18`, a desconfiança generalizada — está menos desenvolvido do que merece, apesar de ser o efeito
com maior impacto sobre mídia. Segundo: **viés de resposta institucional**. Escolhi como raízes as
*respostas* ao problema (identidade, porta, isolamento, seguro) e não o problema (o agente que erra).
Isso torna o mapa mais ordenado do que o mundo provavelmente será, porque supõe que as respostas
chegam. Um mapa escrito com viés oposto colocaria como raiz "o agente age errado em escala e ninguém
contém a tempo", e teria menos protocolo e mais dano.

Há ainda um viés de seleção nas fontes que declaro: **oito das dezesseis fontes são de empresas que
vendem a solução que descrevem** (Cloudflare ×2, Microsoft, Google, World, Cosmonic, ReversingLabs,
Traversaal). Fonte de fornecedor documenta bem o que existe e é péssima para dizer quanto é usado.

### 7.7 Calibração

Distribuição por ordem depois das alterações: **1ª ordem** — alta 5, média 13, baixa 0. **2ª ordem** —
alta 0, média 27, baixa 8. **3ª ordem** — alta 0, média 3, baixa 34. A confiança cai
monotonicamente com a ordem, como deve. As cinco confianças altas de 1ª ordem (`e1`, `e2`, `e6`,
`e7`, `e16`) são todas efeitos cujo artefato já existe e está datado na seção 3 — não são apostas,
são constatações com prazo. As três médias de 3ª ordem (`e1.2.1`, `e11.3.1`, `e16.1.1`) são casos em
que o mecanismo é curto e o sinal já aparece hoje.

### 7.8 Registro de alterações — o que a bateria derrubou

| id | antes | depois | porquê |
|---|---|---|---|
| `e6.2` | prazo 2029 | **prazo 2032** | classe de referência do micropagamento (30 anos de fracasso) não sustenta 3 anos (raiz 2) |
| `e9.1` | prazo 2031 | **prazo 2034** | referência errada: é 2FA (~10 anos), não HTTPS (~4) (raiz 2) |
| `e9.2` | confiança media | **confiança baixa** | inferência regulatória sem caso concreto aberto (raiz 2) |
| `e10` | confiança alta | **confiança media** | extrapolação linear da curva de tráfego de bot, sem mecanismo não linear no próprio efeito (raiz 2) |
| `e5.1` | confiança media | **confiança baixa** | nenhuma fonte aberta mostra gov.br tratando de identidade de agente; é inferência (raiz 1) |
| `e16.2` | confiança media | **confiança baixa** | "veículos testam a própria página contra injeção" não tem um só caso observado (raiz 4) |
| `e17.1` | confiança media | **confiança baixa** | o Artigo 50 do EU AI Act, lido na fonte, **não** exige identificar o operador; a base regulatória que eu supunha não existe (raiz 4) |
| `e18.2` | confiança media | **confiança baixa** | declaração voluntária de uso de agente é desejo do autor mais que sinal observado (raiz 4) |
| `e12.1` | confiança media | **confiança baixa** | software local perdeu para a nuvem em vinte anos de referência (raiz 3) |
| `e14.1` | confiança media | **confiança baixa** | nenhum provedor publica custo energético por tarefa hoje (raiz 3) |
| — | efeito "cursos de design reorganizam o currículo em torno de agentes" | **removido** | efeito proibido pela §3: serve para qualquer tema, sem ator nem mecanismo específico (ver seção 12) |
| — | efeito "surge a profissão de auditor de agentes" | **removido** | idem; o que sobrou dele com ator e mecanismo é `e4.1`, dentro da redação (ver seção 12) |
| — | efeito "reguladores criam uma categoria jurídica nova para agentes" | **removido** | idem; substituído por `e17.1`, que nomeia tribunal e mecanismo (ver seção 12) |

Cota cumprida: **pelo menos um efeito rebaixado ou removido por raiz** — raiz 1 (`e5.1`), raiz 2
(`e6.2`, `e9.1`, `e9.2`, `e10`), raiz 3 (`e12.1`, `e14.1`), raiz 4 (`e16.2`, `e17.1`, `e18.2`), mais
três remoções transversais. A bateria derrubou treze itens.

## 8. O que a máquina errou

Sou eu a máquina. O que eu errei nesta rodada, com o motivo da desconfiança em cada caso:

1. **Repeti uma leitura errada do EU AI Act até abrir o texto.** O resumo do buscador afirmava que o
   Artigo 50 obriga o agente a revelar "a identidade da pessoa física ou jurídica em nome de quem
   está agindo". Isso teria sido a peça regulatória central da raiz 4. Ao abrir o artigo [F14], o
   texto obriga apenas a informar que se trata de um sistema de IA. **A obrigação de identificar o
   operador não existe.** Eu tinha escrito dois efeitos apoiados nela; um foi rebaixado (`e17.1`) e a
   afirmação foi corrigida na seção 3.2. Desconfiei porque a frase do resumo era boa demais para o
   meu argumento.
2. **Citei uma razão de identidades não humanas por humanas sem abrir nenhum relatório.** As buscas
   devolveram 80:1, 109:1, 45:1 e 96:1 para o mesmo ano. Números que divergem por fator de 2,4 não
   medem a mesma coisa. **Não usei nenhum deles como dado** e registrei a dispersão na seção 3.4, mas
   o impulso inicial foi escolher o mais citado (80:1) e seguir — que é exatamente como um número
   inventado entra num documento.
3. **Atribuí à fonte errada a exclusão de danos de IA em apólices gerais.** O resumo de busca dizia
   que em 01/01/2026 a ISO e a Verisk lançaram endossos de exclusão retirando danos de IA generativa
   das apólices de responsabilidade civil geral. Fui abrir a página que supostamente sustentava isso
   [F15] e ela **não menciona** nem a ISO, nem a Verisk, nem a data. É uma afirmação plausível, com
   data precisa, sem fonte aberta: exatamente o perfil de uma alucinação de resumo. Não a usei, e
   `e15.3` está sustentado apenas pela descrição genérica de exclusões que a fonte de fato traz.
4. **Não consegui extrair os resultados quantitativos do artigo de fingerprinting.** O PDF [F9]
   retornou legível nos metadados e comprimido no corpo; eu tenho os autores, a data, os alvos
   testados e o método em três camadas, mas **não tenho as taxas de detecção**. Escrevi isso na seção
   3.2 em vez de estimar. Se eu tivesse escrito "acima de 90%", teria soado bem e seria invenção.
5. **Não abri o texto do PL 2338/2023.** A caracterização de que ele atribui reparação integral ao
   responsável independentemente do grau de autonomia vem de resumo de busca, não do projeto. Marquei
   como sinal na seção 3.5, e a premissa 4 da seção 7.5 depende disso — é a parte mais frágil da nota
   sobre o Brasil.
6. **Uma fonte brasileira caiu e eu não substituí.** A reportagem do iMasters sobre o alerta do GitLab
   quanto a sandbox de agente vazando pela rede retornou HTTP 429 [seção 12]. O efeito `e11.3` está
   sustentado por raciocínio e pelos números de isolamento [F16], não por aquele caso — que era o
   único caso concreto que eu tinha para ele, e cujo sinal `forte` fica, por isso, pior justificado do
   que eu gostaria.
7. **Datas de anúncio que eu quase escrevi com o ano errado.** O *pay per crawl* foi anunciado em
   **01/07/2025** e as novas opções de tráfego de IA em **01/07/2026** — um ano exato de distância,
   mesma data. Eu escrevi 2026 para os dois na primeira passagem. Só percebi porque a página do pay
   per crawl traz o `datePublished` [F1]. Coincidência de calendário é um bom lugar para errar.

## 9. Três cenários para 2041

### Provável — a portaria

É 2041. Todo sistema corporativo tem duas listas: pessoas e agentes. O agente entra com credencial
própria, válida por minutos, com escopo escrito num mandato que alguém assinou — e a interface mostra
qual agente fez o quê, com um ícone que ninguém mais estranha. Publicar virou três decisões: a página
para gente, o feed licenciado para máquina, e a recusa. Os veículos grandes têm dois times e duas
receitas; os pequenos entraram em agregadores que fazem a verificação por eles, o que resolveu o
acesso e recriou a dependência de plataforma. A injeção de prompt continua sem solução, e ninguém
mais espera que tenha: opera-se com franquia, prêmio e trilha de auditoria, e o critério da
seguradora é o padrão técnico que vale. Quem usa automação como tecnologia assistiva convive com um
purgatório de exceções — a credencial de agente assistivo existe, mas a autoridade certificadora é
disputada e o processo é lento. O trabalho de quem projeta mídia mudou menos do que se temia e mais
do que se percebe: metade do esforço foi para o que a máquina lê.

**Sinal precoce de que estamos entrando neste cenário:** uma ferramenta de colaboração de uso amplo
exibir, na linha de autoria, o agente ao lado da pessoa — sem separador, como parte do registro
normal.

### Desejável — a procedência legível

É 2041. A identidade do agente é portátil: emitida por quem o opera, verificável por qualquer um,
sem que um fornecedor de diretório seja dono da chave. O Web Bot Auth virou padrão da IETF em 2029, e
o preço de acesso de agente é público e comparável — pequenos veículos vendem o mesmo acesso que os
grandes, com o mesmo mecanismo. O mandato é um objeto de interface que as pessoas entendem: o
onboarding de qualquer produto de consumo ensina a escrever um limite, e escrever limite virou
alfabetização digital como senha foi nos anos 1990. Automação assistiva tem credencial certificada por
autoridade pública, e bloquear agente passa pela mesma revisão que bloquear leitor de tela. A
procedência de ação é visível por padrão em todo lugar — o que não eliminou a desconfiança, mas a
tornou específica: em vez de desconfiar de tudo, desconfia-se do que não tem cadeia.

**O que teria que ser feito:** tirar o draft do limbo e transformá-lo em padrão com governança
multilateral; criar autoridade certificadora de agente assistivo com estatuto público; e, no Brasil,
integrar identidade de agente ao gov.br antes de o balcão digital começar a recusar por omissão.

**Sinal precoce:** o `draft-meunier-webbotauth-httpsig-protocol` ser adotado por um grupo de trabalho
da IETF, com mais de um implementador independente.

### Indesejável — a web em duas portas e ninguém com a chave

É 2041. A distinção entre humano e agente foi construída, mas a autoridade para operá-la ficou com
dois ou três provedores de infraestrutura e um emissor privado de prova de humanidade. Acessar
conteúdo depende de quem assina sua identidade, e quem assina é uma empresa sem obrigação de recurso
— não há para quem apelar de uma classificação errada. O mercado de "parecer humano" é maior que o de
detecção e é ilegal em metade das jurisdições, o que significa que quem depende dele para acessar
serviço público está infringindo a lei ao usar tecnologia assistiva. Publicar de forma anônima custa
alcance a ponto de inviabilizar, e a imprensa que protege fonte mantém um caminho paralelo, mais caro
e mais lento. A desconfiança se generalizou: audiência desconta valor de tudo, inclusive do que é
humano, e o único formato que escapa é presença ao vivo — o que concentra atenção em quem pode pagar
por ela.

**Sinal precoce dele:** a primeira classificação errada em massa — uma categoria inteira de clientes
legítimos barrada por engano — sem canal de recurso público, e resolvida por relação comercial entre
as empresas envolvidas.

## 10. O experimento

### O que é

**A Portaria de Agente.** Um site único, publicado, que responde de três formas ao mesmo endereço:

1. **Humano** — a página normal.
2. **Agente identificado** — o cliente assina a requisição com par de chaves Ed25519, no formato do
   Web Bot Auth (`signature-agent`, `signature-input`, `signature`), e recebe uma versão estruturada
   do conteúdo, completa.
3. **Agente anônimo** — recebe **HTTP 402** com um preço e um resumo curto, e nada mais.

Acoplado a isso, três peças pequenas: (a) um **agente-cliente** que a turma roda no próprio
computador, com identidade emitida por quem o roda; (b) uma **tela de mandato** em que a pessoa
escreve o limite — o que o agente pode fazer, até quanto, até quando — e assina; (c) um **painel de
procedência** que mostra, para tudo o que aconteceu no site, a cadeia pessoa → agente → ação, e o que
o site decidiu em cada requisição e por quê.

### Que pergunta sobre o futuro ele ajuda a responder

Três, todas do mapa e todas respondíveis em uma aula:

- **A distinção é praticável?** Quanto custa, em linhas de código e em latência, separar humano de
  agente identificado de agente anônimo. Se for barato, `e6` acontece; se for caro, a raiz 2 fica
  restrita a quem tem infraestrutura, e `e6.3` (o pequeno fica fora) é o efeito dominante.
- **Alguém consegue escrever um mandato?** A tela de mandato é o objeto de interface que `e2.1`
  prevê, e ninguém sabe como ela deve ser. Quando a turma escrever mandatos e depois for surpreendida
  pelo que o agente fez dentro deles, aparece o material de design que não existe hoje.
- **A procedência é legível?** O painel mostra a cadeia. A pergunta é se uma pessoa olha aquilo e
  entende quem fez o quê — porque `e1.1` depende disso ser possível.

### Que tecnologia emergente usa, e por que não dá com a madura

Usa **assinatura HTTP com Ed25519 no formato Web Bot Auth** (emergente: draft expirado, implantado em
produção por um provedor), **HTTP 402** (código maduro, uso emergente — praticamente inexistente até
o *pay per crawl*), **mandato assinado como credencial verificável** (emergente, do AP2) e um agente
com **isolamento por tarefa** (emergente na forma barata: WASI com capacidade negada por padrão).

Com tecnologia madura não dá porque o maduro resolve outro problema. `robots.txt` é declaração de
intenção sem verificação: qualquer um diz que é quem quiser. CAPTCHA prova que há um humano **agora**,
e não diz nada sobre a cadeia de delegação — é a pergunta errada. OAuth com chave de API prova que
**a aplicação** tem permissão, e some com a distinção entre quem autorizou e quem agiu, que é
justamente o objeto. Cada uma das três maduras resolve um pedaço e apaga a pergunta do mapa.

### O que a turma vai fazer quando testar isso em sala

Em quatro etapas, com resultado medido:

1. **Cada pessoa emite a própria identidade de agente** e faz o agente buscar uma informação
   específica no site. Mede-se: quantos conseguem, e em quanto tempo.
2. **Cada pessoa escreve um mandato** para uma tarefa com limite ("assine este conteúdo por até
   X, só até sexta"). Depois roda o agente. Mede-se: **quantos mandatos permitem algo que a pessoa não
   queria permitir** — é o número que interessa, e minha aposta é que passa da metade.
3. **Metade da turma vira adversário**: publica no site conteúdo com instrução embutida, tentando
   fazer o agente de outra pessoa agir fora do mandato. Mede-se: quantas tentativas funcionam, e
   quantas são barradas pelo mandato em vez de pelo modelo.
4. **Todos olham o painel de procedência** de uma sessão que não é a sua e tentam responder, sem
   ajuda: quem fez isso, autorizado por quem, e dentro de que limite. Mede-se: taxa de acerto.

### O que seria um resultado que me faria mudar de ideia

- **Se a etapa 2 der quase zero** — se as pessoas escreverem mandatos apertados de primeira, sem
  treino — então `e2.1` e `e2.1.1` estão errados: a tela de mandato não é um problema de design, é
  uma tela comum, e a parte mais interessante do mapa em interação se dissolve.
- **Se a etapa 4 der alta taxa de acerto** com o painel cru, sem trabalho de design, então `e1.1`
  não é um efeito: a procedência é legível por construção e não vira objeto de projeto.
- **Se a etapa 3 mostrar que o mandato não barra nada** — que tudo que a pessoa quis impedir passou
  do mesmo jeito — então a raiz 1 não resolve o que promete, e a raiz 4 é o mapa inteiro: não há
  contenção, só atribuição depois do dano. O mapa teria que ser reescrito com uma raiz e um regime
  muito mais pessimista.
- **Se a etapa 1 for trivial para todo mundo** — identidade de agente emitida e aceita em minutos, sem
  fricção — então a difusão está mais adiantada do que a seção 4 supõe, e todos os prazos de 1ª ordem
  precisam ser puxados para antes de 2029.

## 11. Fontes

Dezesseis fontes, todas abertas e lidas em 12/09/2026. Nenhuma foi citada de memória. As três buscas
que não deram em fonte utilizável estão na seção 12.

1. **[F1] Cloudflare — "Introducing pay per crawl"** · `https://blog.cloudflare.com/introducing-pay-per-crawl/`
   Sustenta: o mecanismo de cobrança por acesso de rastreador (HTTP 402), a exigência de par de chaves
   Ed25519 e assinatura HTTP (`signature-agent`, `signature-input`, `signature`), e a data de anúncio
   (01/07/2025). Confiabilidade: documentação primária do fornecedor que implementou — excelente para
   o mecanismo, interessada quanto ao mérito; não traz preço praticado.

2. **[F2] Cloudflare — "Your site, your rules: new AI traffic options for all customers"** · `https://blog.cloudflare.com/content-independence-day-ai-options/`
   Sustenta: as categorias Search, Agent e Training com as definições literais, o lançamento em
   01/07/2026 e o bloqueio por padrão de Training e Agent em páginas com anúncio a partir de
   15/09/2026. Confiabilidade: primária e datada; é a fonte central da raiz 2. Não traz volume de
   tráfego.

3. **[F3] Microsoft Learn — "Authentication protocols in agents — Microsoft Entra Agent ID"** · `https://learn.microsoft.com/en-us/entra/agent-id/agent-oauth-protocols`
   Sustenta: os três modos de operação do agente (on-behalf-of, autônomo, e com conta de usuário
   própria), a proibição de fluxo interativo, o uso de Federated Identity Credentials e a
   recomendação contra segredo de cliente em produção. Atualizada em 13/08/2026. Confiabilidade:
   documentação técnica primária — alta para o que o produto faz, nula para adoção.

4. **[F4] IETF Datatracker — `draft-meunier-web-bot-auth-architecture`** · `https://datatracker.ietf.org/doc/draft-meunier-web-bot-auth-architecture/`
   Sustenta: o estado real do Web Bot Auth — versão 05, atualizada em 02/03/2026, **expirada e
   arquivada, sem estado formal na IETF**, autores Thibault Meunier e Sandor Major, substituída por
   `draft-meunier-webbotauth-httpsig-protocol`. Confiabilidade: registro oficial da IETF; é a fonte
   mais confiável do documento sobre estado de padronização.

5. **[F5] Help Net Security — "Prompt injection still drives most agentic AI security failures in production" (11/06/2026)** · `https://www.helpnetsecurity.com/2026/06/11/owasp-prompt-injection-ai-security-failures/`
   Sustenta: os números do *State of AI Surveyor* da OWASP — 53 projetos agênticos, 28 de código,
   alertas por repositório (n8n 57, Claude Code 22, AutoGPT 15, Dify 13, Roo-Code 11), o backdoor do
   LiteLLM com quase 47 mil downloads em três horas em março de 2026, injeção mapeada em 6 das 10
   categorias do Top 10 agêntico, 42 instrumentos regulatórios em 10 jurisdições, e 37% de
   organizações com política de IA-sombra (dado IBM). Confiabilidade: veículo especializado relatando
   fonte primária identificada; boa, com a ressalva de ser leitura de segunda mão do relatório OWASP.

6. **[F6] ReversingLabs — "OWASP Top 10 for LLM Apps 2026: Excessive agency risk on the rise"** · `https://www.reversinglabs.com/blog/owasp-top-10-for-llm-apps-excessive-agency`
   Sustenta: a publicação do Top 10 de 2026 em 12/08/2026, injeção em 1º, excessive agency subindo de
   6º para 3º, e a metodologia — 7.714 incidentes analisados, 6.639 classificáveis, com peso de 25%
   contra 75% do voto da comunidade. Confiabilidade: blog de fornecedor de segurança relatando
   documento público; média-alta para os fatos do ranking, interessada na moldura.

7. **[F7] World — "World ID: Full-Stack Proof of Human" (17/04/2026)** · `https://world.org/blog/announcements/world-id-full-stack-proof-of-human`
   Sustenta: quase 18 milhões de humanidades verificadas em Orb, 160 países, e o posicionamento
   explícito de "provar que um humano verificado está por trás de cada agente" com o AgentKit.
   Confiabilidade: anúncio do próprio emissor — primária para os números que ele divulga, interessada
   por completo quanto ao mérito e sem auditoria independente citada.

8. **[F8] Google Cloud — "Announcing Agent Payments Protocol (AP2)" (16/09/2025)** · `https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol`
   Sustenta: os objetos Intent Mandate e Cart Mandate como credenciais verificáveis assinadas, a
   cadeia de não-repúdio intenção → carrinho → pagamento, a base em A2A e MCP, e os mais de 60
   parceiros nomeados. Confiabilidade: primária do proponente; alta para a especificação, nula para
   adoção.

9. **[F9] Fayolle, Bouhenniche, Pélissier, Laperdrix, Maurice, Rudametkin — "On the Internet, Nobody Knows You're an LLM Bot: Unmasking Web Agents with Multi-Layer Fingerprinting" (30/06/2026)** · `https://arxiv.org/pdf/2606.30119`
   Sustenta: que a detecção de agentes de navegação é objeto de pesquisa ativa, com fingerprinting em
   três camadas (HTTP, TLS, navegador) contra ChatGPT Agent, Claude for Chrome, Skyvern, BrowserUse e
   outros, e contra CAPTCHA e Bot Fight Mode. Confiabilidade: preprint acadêmico com autoria de grupo
   reconhecido em fingerprinting; alta para o método, **e eu não consegui extrair os resultados
   numéricos do corpo do PDF** — ver seção 8.

10. **[F10] Bandara, Gore, Mukkamala, Gunaratna et al. — "Towards an Agent-First Web: Redesigning the Web for AI Agents"** · `https://arxiv.org/pdf/2606.19116`
    Sustenta: a proposta de camadas semânticas separadas para humano e para agente, com identidade e
    autenticação próprias de sistemas autônomos e protocolos de transação dedicados, e o diagnóstico
    de falha sistemática de agentes na web feita para gente. Confiabilidade: preprint propositivo, não
    empírico; serve como sinal de direção, não como evidência de adoção.

11. **[F11] Tim Dixon — "AI Accessibility Barriers: When Tools That Help Get Blocked" (07/04/2026)** · `https://www.timdixon.net/blog/2026/04/ai-accessibility-barriers-when-tools-that-help-get-blocked/`
    Sustenta: o relato concreto de automação assistiva bloqueada por atualização antibot de uma
    plataforma de publicação, escrito por alguém com perda progressiva de visão. Confiabilidade:
    **relato pessoal, sem dado, sem caso, sem estatística** — é exatamente por isso que entra como
    sinal fraco e não como âncora.

12. **[F12] Minuto da Segurança — "Agentes de IA precisam de identidade própria?" (08/09/2026)** · `https://minutodaseguranca.blog.br/agentes-ia-identidade-propria-seguranca/`
    Sustenta: a formulação brasileira do problema — menor privilégio, credencial de curta duração,
    delegação verificável e auditoria como arquitetura básica de agente corporativo — e as referências
    a NIST NCCoE, Entra e OWASP GenAI. Confiabilidade: veículo técnico brasileiro, argumentação
    sólida, **sem nenhum número próprio**.

13. **[F13] Security Leaders — "IA agêntica coloca gestão de identidades no centro do risco cibernético em 2026" (01/06/2026), por Matheus Bracco** · `https://securityleaders.com.br/ia-agentica-coloca-gestao-de-identidades-no-centro-do-risco-cibernetico-em-2026/`
    Sustenta: a nota sobre o Brasil — a elevação da ANPD a agência reguladora, os parâmetros de uso de
    agentes sob a LGPD com menção a prevenção de injeção de prompt, e a citação ao relatório de
    tendências do Gartner para 2026. Confiabilidade: veículo setorial brasileiro; média — relata fonte
    de analista sem número próprio de incidente.

14. **[F14] EU Artificial Intelligence Act — Artigo 50** · `https://artificialintelligenceact.eu/article/50/`
    Sustenta: o texto real da obrigação de transparência (informar que se interage com um sistema de
    IA), a **ausência** de obrigação de identificar o operador, e a data de aplicação em 02/08/2026
    pelo Artigo 113. Confiabilidade: reprodução do texto legal — a fonte mais dura do documento, e a
    que corrigiu um erro meu (seção 8, item 1).

15. **[F15] Traversaal — "AI Agent Liability Insurance: What the Emerging Risk-Transfer Market Signals About Enterprise Agent Deployment"** · `https://blog.traversaal.ai/ai-agent-liability-insurance-enterprise-risk-transfer-market/`
    Sustenta: a existência do mercado de seguro para ato de agente em meados de 2026, a cobertura
    explícita de "erros de agente autônomo, incluindo alucinações, ações não autorizadas e decisões
    falhas" como distinta de E&O, e o exame de arquitetura, log de auditoria e taxa de erro na
    subscrição. Confiabilidade: **baixa-média** — é comentário de mercado, sem seguradora nomeada além
    de uma, sem prêmio, sem limite e sem sinistralidade; **e não sustenta** a afirmação sobre endossos
    da ISO/Verisk que a busca me ofereceu (seção 8, item 3).

16. **[F16] Cosmonic — "AI Sandbox: The Complete Guide to Sandboxing AI Agents in 2026" (26/05/2026)** · `https://cosmonic.com/blog/ai-sandbox-guide/`
    Sustenta: os números de isolamento — contêiner/gVisor 1–5 s e 50–200 MB; microVM Firecracker
    125–150 ms e 128 MB+; V8 Isolates <1 ms e 2–10 MB; WebAssembly/WASI <1 ms e <1–5 MB — e o modelo
    de capacidade negado por padrão do WASI. Confiabilidade: **fornecedor de WebAssembly medindo
    concorrentes** — os números de ordem de grandeza batem com o conhecido publicamente, mas a
    comparação favorece o produto de quem escreve; use como ordem de grandeza, não como benchmark.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

### 12.2 Premissas assumidas nesta rodada

O `briefing:` veio completo — tema, slug, autor, zona de interesse, horizonte, público, recorte,
descartado, raiz suspeita, viés, falseador, profundidade, modo, busca e caminho de saída. Por isso
**não houve rebaixamento de confiança por ausência de entrevista** (regra da §0 da skill, na redação
de 10/09). O que o briefing não cobria e eu assumi, declarado também na seção 2:

1. **A web pública continua sendo o principal canal de acesso a conteúdo em 2041.** Se o acesso
   migrar integralmente para assistentes fechados com acordo bilateral, a raiz 2 perde objeto.
2. **Não há colapso de oferta de computação ou energia** que torne agente economicamente inviável.
3. **Modelos capazes continuam disponíveis a custo decrescente**, de mais de um fornecedor.
4. **O Brasil segue o padrão regulatório europeu com atraso de três a seis anos.** É a premissa mais
   discutível, e foi usada apenas para datar `e5.1` e `e9.2` — dois efeitos já rebaixados.
5. **O regime de responsabilidade continua sendo humano** — não há personalidade jurídica para
   agente em nenhuma jurisdição relevante até 2041.
6. **"Ideias óbvias a excluir: as que servem para qualquer tema"** foi aplicado como regra dura, e
   produziu três remoções (12.3).

Modo de execução: **MAPA**, não interativo, sem usuário para responder. Nenhuma pergunta foi feita;
onde faltava definição, assumi e declarei — aqui e na seção 2.

### 12.3 Efeitos cortados no passo contra o próprio mapa

Os três abaixo estavam escritos na primeira versão da roda e foram **removidos** por violarem a
proibição de efeito genérico da §3 da skill — cada um deles serve para qualquer um dos 19 temas da
disciplina, o que é a definição operacional de genérico. Ficam registrados por inteiro, como manda a
regra de não haver corte silencioso:

**Cortado 1 — "Cursos de design e comunicação reorganizam o currículo em torno de agentes."**
Motivo: não tem ator (que curso?), não tem mecanismo (reorganizam por quê, pressionados por quem?) e
serve idêntico para áudio generativo, vídeo generativo, interface neural ou qualquer outro tema. O
que sobreviveria dele com ator e mecanismo — alguém dentro de uma organização passando a responder
pelo escopo dos agentes — virou `e4.1`, situado em redação e estúdio, com mecanismo de atribuição.

**Cortado 2 — "Surge a profissão de auditor de agentes."**
Motivo: "surge uma nova profissão" está na lista literal de efeitos proibidos. Sem nome, sem
empregador, sem o mecanismo que cria a vaga, é enfeite. A parte recuperável está em `e15.1` (o
critério de subscrição vira padrão) e em `e15.2.1` (produtora pequena contrata trilha de auditoria
como serviço) — nos dois casos com quem paga e por quê.

**Cortado 3 — "Reguladores criam uma categoria jurídica nova para agentes autônomos."**
Motivo: "reguladores criam categoria/lei nova" também está na lista literal. E, pior, foi
**falsificado durante a rodada**: o Artigo 50 do EU AI Act, lido no texto [F14], não cria categoria
para agente nem exige identificação de operador; e o caminho brasileiro aparente vai na direção
oposta (reparação pelo responsável, independentemente da autonomia). O que sobrou com mecanismo é
`e17.1`: tribunais decidindo com base na cadeia de delegação registrada, e ausência de registro
interpretada contra o operador. Note-se que `e17.1` também foi rebaixado para confiança baixa.

**Quase cortado, mantido com ressalva — `e10`** ("tráfego de agente vira a maior parte do tráfego de
leitura"). É extrapolação linear da curva de tráfego de bot. Foi mantido porque o filho `e10.1`
carrega a não-linearidade (o custo energético inverte a política de servir), mas o pai foi rebaixado
de confiança alta para média. Se eu tivesse de cortar mais um efeito de 1ª ordem, seria este.

### 12.4 Candidatos a disrupção-raiz recusados, com o motivo

| Candidato | Veredito | Motivo |
|---|---|---|
| Sandbox e virtualização | recusado — maduro | adoção em maioria desde os anos 2000; vira contexto na seção 3. Entra como raiz apenas o isolamento **por ação a custo desprezível** |
| OAuth e federação de identidade | recusado — maduro | maioria desde ~2014. Entra como raiz a **delegação encadeada e verificável** com credencial efêmera |
| Detecção de bot e CAPTCHA | recusado — maduro | maioria há mais de uma década. Entra como raiz a rede **distinguir e precificar** categorias de não humano |
| MCP como protocolo | recusado — não é ruptura | é encanamento de ferramenta; a ruptura de ofício que ele produz pertence ao tema 1 da disciplina |
| Multiagente / A2A | recusado — prematuro demais | está em demo pública; entraria como raiz apenas com confiança baixa em toda a cadeia, e o mapa já tem quatro raízes |
| Personalidade jurídica para agente | recusado — é wildcard, não raiz | a lista do "o que falta acontecer" contém um item que nenhum sinal atual sustenta; virou premissa 5 da §7.5 |

### 12.5 Buscas que não deram em nada, e fontes que caíram

- **`gov.br identidade digital agentes IA ANPD 2026 bots acesso serviços públicos`** — a busca
  devolveu páginas do Governo Digital sobre integração de identidade **humana** (ID gov.br) e um guia
  de IA generativa, **nenhuma tratando de identidade de agente**. Por isso `e5.1` (gov.br e identidade
  de agente) está com confiança **baixa** e marcado como inferência, e não como sinal observado.
- **iMasters — "GitLab alerta: sandbox de agente de IA só é tão segura quanto o acesso de rede"** —
  a página retornou **HTTP 429 Too Many Requests** e não foi lida. Era o único caso concreto que eu
  tinha para `e11.3`; ficou fora da seção 11 e o efeito está sustentado por raciocínio mais os
  números de isolamento [F16]. Registrado também na seção 8, item 6.
- **Razão entre identidades não humanas e humanas** — quatro buscas devolveram quatro números para o
  mesmo ano (80:1 GitGuardian e KPMG; 109:1 Palo Alto, contra 82:1 no ano anterior; 45:1 Cloud
  Security Alliance, contra 17:1 em 2023; e 96:1 num quarto veículo). **Não abri nenhum dos
  relatórios.** Nenhum entrou como dado; a dispersão está registrada na seção 3.4 como o que ela é —
  evidência de que as metodologias não são comparáveis.
- **Endossos de exclusão da ISO/Verisk de 01/01/2026** — afirmação atraente, com data precisa, que a
  fonte supostamente correspondente [F15] **não contém**. Descartada. Seção 8, item 3.
- **Texto do PL 2338/2023** — não aberto. A caracterização na seção 3.5 vem de resumo de busca e está
  marcada como sinal, não como fato.
- **Resultados quantitativos do artigo de fingerprinting [F9]** — o corpo do PDF não foi extraível.
  Método, autores, data e alvos ficaram; taxas de detecção, não.

### 12.6 Buscas realizadas nesta rodada

Doze buscas, em português e inglês, e dezesseis páginas abertas:

1. `agent identity protocol OAuth agents 2026 standard`
2. `OWASP Top 10 LLM applications prompt injection 2026 agentic`
3. `Cloudflare AI crawlers bot detection pay per crawl agents 2026`
4. `agente de IA identidade digital segurança sandbox 2026 Brasil`
5. `Web Bot Auth IETF draft HTTP message signatures bot identity standard`
6. `prompt injection real incident 2026 agent exfiltration CVE browser agent`
7. `Google AP2 agent payments protocol x402 agent commerce 2026 adoption`
8. `PL 2338 marco legal inteligência artificial Brasil 2026 agentes autônomos responsabilidade`
9. `proof of personhood World ID human verification CAPTCHA agents 2026 growth`
10. `non-human identity machine identities ratio to humans 2026 report number`
11. `accessibility bot detection blocks assistive AI agents disabled users screen reader 2026`
12. `AI agent liability insurance underwriting autonomous agent errors omissions 2026`
13. `agent sandbox microVM Firecracker WebAssembly isolation startup latency 2026 e2b`
14. `gov.br identidade digital agentes IA ANPD 2026 bots acesso serviços públicos`
15. `EU AI Act article 50 transparency disclose AI agent bot disclosure law 2026 enforcement date`

(São quinze; o mínimo da §1 é oito.)

### 12.7 Material bruto que não coube nas seções, mas foi levantado

**Incidentes de injeção de prompt citados pelas buscas e NÃO usados no corpo do mapa** — porque eu
não abri a fonte primária de nenhum deles, e uma lista de CVE de segunda mão é exatamente o tipo de
coisa que um documento de tendência não deve reproduzir como fato. Ficam aqui como pista para quem
for verificar:

- **EchoLeak**, CVE-2025-32711, CVSS 9.3 — injeção sem clique no Microsoft 365 Copilot, descoberta
  pela Aim Security em junho de 2025; um e-mail com instrução oculta faria o Copilot extrair dados de
  OneDrive, SharePoint e Teams e exfiltrá-los por domínio confiável da Microsoft.
- **Reprompt**, CVE-2026-24307 — exfiltração com um clique no Copilot Personal via parâmetro de URL,
  sem prompt digitado.
- **GitHub Copilot**, CVE-2025-53773, CVSS 9.6 — injeção em comentário de código de repositório
  público instruindo o Copilot a alterar configuração e habilitar execução sem aprovação.
- **Cursor**, CVE-2026-22708 — envenenamento do ambiente de execução do agente para que comandos em
  lista de permissão (como `git branch`) entreguem carga arbitrária.
- **Padrão comum relatado**: a exploração exige três propriedades simultâneas — acesso a dado privado,
  exposição a conteúdo não confiável e capacidade de comunicar para fora. Agente que tem as três é
  explorável. Esta formulação, se confirmada, é a régua de projeto mais útil de tudo o que foi
  levantado, e é o que sustenta `e16` e `e16.1`.

**Padrões e atores de identidade de agente citados pelas buscas, não verificados na fonte:**

- **Okta Cross App Access** — extensão do OAuth desenhada pela Okta, adotada como extensão oficial de
  autorização gerenciada por empresa do MCP; Agent SSO em disponibilidade geral em 24/08/2026.
- **MCP-I / KYA-OS** — framework doado pela Vouched à Decentralized Identity Foundation em março de
  2026, hoje sob o grupo de trabalho Trusted AI Agents, usando DIDs e credenciais verificáveis para
  verificar tanto o agente quanto o principal humano. Renomeado para "Know Your Agent OS".
- **AuthZEN (OpenID)** — autorização na era do agente, apresentado no Identiverse 2026.
- **x402** — 165 milhões de transações e 69 mil agentes ativos até o fim de abril de 2026, contra
  cerca de US$ 50 milhões de volume acumulado; adotado pelo AWS Bedrock AgentCore Payments em maio de
  2026, com Coinbase e Stripe como provedores. **Número não verificado na fonte primária** — e, se
  verdadeiro, a média por transação (cerca de US$ 0,30) é o dado mais interessante do conjunto, porque
  é ordem de grandeza compatível com `e6.2` (preço por requisição).

**Sobre a Cloudflare, levantado e não usado:** o *pay per crawl* está evoluindo para "pay per use",
em que o editor recebe quando o conteúdo aparece **na resposta** da IA, e não quando o robô busca a
página. Se confirmado, isso desloca `e6.2` de "preço por acesso" para "preço por citação", o que é um
efeito diferente e provavelmente melhor para quem publica. Não abri fonte primária disso; se fosse
confirmar, começaria pelo changelog do AI Crawl Control.

**Sobre a resposta da indústria à injeção, levantado e não usado:** há linha de pesquisa ativa em
defesas fora de banda, atribuição causal de invocação de ferramenta (AttriGuard), proxies de
interceptação para red-team de agentes de navegação (IPI-proxy) e benchmarks dinâmicos sobre
integrações SaaS (AgentRedBench). Não abri nenhum. Se algum desses funcionar bem, é o wildcard 3 da
seção 6 — e o mapa muda de forma.

### 12.8 Contrato desta rodada, para auditoria

**Objetivo:** produzir o mapa de futuro do tema 2 no horizonte 2041, no formato da disciplina, sem
interação com usuário.
**Critério de pronto:** doze seções com títulos literais; frontmatter completo; bloco `roda:` válido
com três níveis; §6 executado com registro de alterações auditável e pelo menos um rebaixamento por
raiz; seção 11 só com fontes abertas e com link que responde; saída do verificador colada na §12.
**O que não entra:** confronto adversarial (é outro modo); processamento para o site público;
alteração de qualquer outro arquivo da disciplina.

### 12.9 Saída do verificador

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 18 (frontmatter diz 18)
efeitos ordem 2: 35 (frontmatter diz 35)
efeitos ordem 3: 37 (frontmatter diz 37)
prazo > horizonte (2041) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 2 [('e9.2.1', 2044), ('e17.1.1', 2043)]
confiança ordem 1: alta 5 · media 13 · baixa 0
confiança ordem 2: alta 0 · media 27 · baixa 8
confiança ordem 3: alta 0 · media 3 · baixa 34
links da seção 11: 16/16 respondem (frontmatter diz fontes: 16)
RESULTADO: ok
```

Comando: `python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2041/02-contencao-seguranca-e-identidade-de-agentes-autonomos/tendencia-contencao-seguranca-e-identidade-de-agentes-autonomos.md --links`

**Leitura da saída, item a item** — porque "passou" não é resultado, número é:

- **18/18 campos de frontmatter** e **12/12 títulos literais**: o documento está no formato da
  disciplina, e os scripts de processamento conseguem separá-lo.
- **4 raízes, 18 efeitos de 1ª ordem, 35 de 2ª, 37 de 3ª** — 90 efeitos no total. Na primeira
  execução o verificador acusou divergência: eu havia escrito 34 e 32 no frontmatter contando à mão.
  Corrigi o **frontmatter**, não o texto, como manda a §9 da skill. É o tipo exato de erro que um
  "passou" sem números esconderia.
- **Nenhum efeito de 1ª ou 2ª ordem com prazo além de 2041.** Correto: o que passa do horizonte não
  pode ser efeito próximo.
- **Dois efeitos de 3ª ordem além do horizonte**, `e9.2.1` (2044) e `e17.1.1` (2043), **declarados**
  na prosa da seção 5, como exige a regra 8 da §3.
- **Confiança cai monotonicamente com a ordem** — alta 5/0/0, média 13/27/3, baixa 0/8/34. Nenhuma
  confiança alta na 3ª ordem, e a calibração passou sem aviso.
- **16/16 links da seção 11 respondem**, e o número bate com o campo `fontes: 16`. Nenhuma fonte de
  memória, nenhum link quebrado.
