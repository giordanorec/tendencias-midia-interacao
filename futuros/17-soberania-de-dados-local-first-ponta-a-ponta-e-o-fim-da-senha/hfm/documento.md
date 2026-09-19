---
tema: "Soberania de dados: local-first, ponta-a-ponta e o fim da senha"
slug: soberania-de-dados-local-first-ponta-a-ponta-e-o-fim-da-senha
autor_login: hfm
zona_de_interesse: Pessoas e dados
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 11
efeitos_ordem_3: 21
tecnologias_citadas: [local-first software, CRDT, Automerge, Yjs, Beelay, Keyhive, BeeKEM, sedimentree, sync engine, PowerSync, Zero, ElectricSQL, PGlite, SQLite, WebAuthn, FIDO2, passkey, CXP, CXF, criptografia ponta-a-ponta, criptografia no cliente, zero-knowledge, self-hosting, EUDI Wallet, gov.br, Open Finance, WebGPU, WebLLM, WebAssembly, Apple Foundation Models, Gemini Nano, budgero, kostos, Signal, Proton]
fontes: 17
confianca: media
experimento: "Servidor cego — um app de anotação financeira em que o servidor demonstra, na própria interface, que não consegue ler o que guarda, e um painel que mostra tudo o que ele ainda consegue inferir mesmo cego"
skill_usada: futurizacao-hfm
publico_ok: false
---

## 1. Resumo

Três rupturas convergem na arquitetura do software pessoal: o dado passa a morar no dispositivo
e sincronizar (local-first), o servidor deixa de conseguir ler o que guarda (ponta-a-ponta), e a
senha é substituída por uma prova criptográfica feita pelo próprio aparelho (passkeys). As três
têm âncora verificável em 2026 — WebAuthn Nível 3 virou Recomendação do W3C em 25/08/2026, a
FIDO Alliance relata 5 bilhões de passkeys em uso, o Automerge 3 derrubou o consumo de memória
do CRDT em mais de 10×, e o gov.br passou a aceitar chave de acesso. Mas elas não rompem no
mesmo passo: passkey é hoje uma tecnologia de adoção larga e experiência mal resolvida; local-first
e ponta-a-ponta ainda vivem em projetos de dezenas de estrelas no GitHub e em bibliotecas de
controle de acesso em pré-alfa. O efeito mais provável até 2031 não é a pessoa virar dona da
própria conta: é o intermediário **mudar de lugar** — do provedor que guardava o dado para o
chaveiro que guarda a chave, e do servidor de aplicação para o punhado de fornecedores de motor
de sincronia. Para quem projeta mídia e interação, o trabalho novo aparece exatamente nas beiradas
que a arquitetura não resolve: recuperação de conta, conta compartilhada, herança digital, estado
de sincronia e conflito visíveis na tela.

## 2. O tema

O objeto aqui é **a arquitetura de dado e de identidade da pessoa** — onde o dado dela mora, quem
consegue lê-lo, e como ela prova que é ela. Não é o modelo de IA rodando localmente (tema 16), nem
a identidade de agentes autônomos (tema 2). É a camada embaixo dos dois.

Três movimentos, historicamente separados, passaram a se apoiar mutuamente:

- **Local-first**: o dado primário é a cópia no dispositivo; o servidor é réplica e transporte. O
  termo vem do ensaio de Kleppmann, Wiggins, van Hardenberg e McGranaghan (Ink & Switch, abril de
  2019), com sete ideais — sem espera, multidispositivo, rede opcional, colaboração, longevidade,
  privacidade, controle do usuário [1].
- **Ponta-a-ponta / conhecimento zero**: a cifra acontece no cliente; o servidor guarda bytes que
  não consegue interpretar.
- **Passkeys / WebAuthn**: a autenticação vira um par de chaves no aparelho, sem segredo
  compartilhado e sem necessidade de um provedor de identidade terceiro.

Por que isso merece um mapa de futuro e não um levantamento de estado da arte: porque as três
mudam **relações**, não desempenho. Se o servidor não lê o dado, o modelo de negócio que vive de
ler o dado perde a matéria-prima; a moderação de conteúdo perde o conteúdo; o suporte perde a
capacidade de restaurar. Se a senha acaba, "esqueci minha senha" — o fluxo mais usado de toda a
internet de consumo — precisa ser reinventado, e com ele a conta de casal, a conta da microempresa
e a herança digital. Nenhuma dessas consequências é técnica; todas são de desenho de interação e
de arranjo institucional. É isso que uma roda dos futuros tem a dizer e um estado da arte não tem.

Onde encosta em mídia e interação: no vocabulário visual. Aplicativo cuja verdade é local e
sincroniza precisa **mostrar** estado de sincronia, divergência, histórico e conflito — algo que
hoje só existe em ferramenta de programador. E precisa mostrar autenticação sem o apoio conceitual
da senha, que era ruim mas era compreendida.

## 3. Onde isso está hoje

### Passkeys: adoção larga, experiência mal resolvida

O lado da identidade é o mais maduro dos três, e por margem grande.

- **WebAuthn Nível 3 virou Recomendação do W3C em 25 de agosto de 2026**, sem mudanças
  substantivas desde o Candidate Recommendation de 26/05/2026. A versão formaliza credenciais
  sincronizadas entre dispositivos, credenciais descobríveis do lado do cliente, `getClientCapabilities()`
  e métodos de sinalização (`signalUnknownCredential()`, `signalAllAcceptedCredentials()`) [6].
- A especificação **delega deliberadamente a recuperação de conta** à parte confiante: "all of
  these are handled on the server side and do not need support from the API specified here" [6].
  Ou seja: o padrão resolve o login e deixa o problema difícil de fora.
- A FIDO Alliance, no Dia Mundial da Passkey de 2026, relata **5 bilhões de passkeys em uso**,
  90% de consciência, 75% com pelo menos uma passkey ativada, **49% usando regularmente quando
  disponível**, e 68% das organizações com passkey implantada ou em implantação; 82% declaram o
  sem-senha total como objetivo e **28% chegaram lá**. Metodologia: Sapio Research, abril de 2026,
  11.000 consumidores em dez países e 1.400 decisores de empresas com 500+ funcionários [4].
- **Portabilidade** saiu do papel: as especificações de Credential Exchange da FIDO (CXF para o
  formato, CXP para o transporte cifrado) existem e estão publicadas [5]; segundo a cobertura
  secundária, Apple embarcou transferência baseada em CXF no iOS/macOS 26 e o Android passou a
  suportar CXP via Google Play Services.
- **No Brasil**, o gov.br — que atende mais de 170 milhões de pessoas — passou a oferecer chave
  de acesso a partir da atualização de app de janeiro de 2026, dispensando senha e o reconhecimento
  facial repetido a cada login. *(Isto está apoiado apenas em imprensa secundária; não consegui
  abrir uma página oficial que o confirme — ver seção 8.)*

E, contra tudo isso, o sinal social é abertamente hostil. O item mais votado sobre passkeys no
Hacker News desde 2025 é a tese de que "passkeys foram inventadas por engenheiros sem nenhuma
compreensão do cérebro do consumidor" — 577 pontos e **784 comentários**, em 22/07/2026 [11][12].
Lendo a discussão, as queixas se repetem e são todas de desenho, não de criptografia: não se sabe
se a passkey funciona em todo lugar; perder o aparelho pode significar tranca permanente; quem
guarda a chave privada é a Apple ou o Google, o que troca um intermediário por outro; e **conta
compartilhada simplesmente não tem caminho** — "como eu e minha esposa usamos a Amazon com
passkeys?" [11]. Há dois outros itens de alta ressonância na mesma direção: "Don't use passkeys
for encrypting user data" (280 pts, 244 comentários, 28/02/2026) e "Yep, Passkeys Still Have
Problems" (192 pts, 213 comentários, 17/12/2025) [12].

**Classificação: maduro na capacidade, emergente no uso cotidiano, disruptivo apenas onde elimina
o provedor de identidade terceiro.**

### Local-first: a engenharia destravou, o produto não

- O gargalo clássico do CRDT era memória e histórico ilimitado [1][2]. **Automerge 3.0 (julho de
  2025)** atacou exatamente isso com compressão em tempo de execução dos metadados de histórico:
  colar Moby Dick num documento consumia 700 MB no Automerge 2 e passou a consumir **1,3 MB** —
  redução de mais de 10× no uso geral de memória, mesmo formato de arquivo, compatibilidade quase
  completa [3].
- **PGlite — Postgres compilado para WebAssembly — passou de 10 milhões de downloads semanais em
  25/06/2026** [17]. É o número de adoção mais forte que encontrei em todo o levantamento, e é do
  lado do *banco no cliente*, não do produto para pessoa.
- **Em 11/08/2026 a Electric anunciou que está entrando para a Databricks**, juntando-se ao time do
  Neon "para fazer do Lakebase a melhor plataforma para construir apps e agentes", com a promessa de
  que "tudo o que abrimos continua aberto" [17]. É o primeiro grande evento de consolidação da
  categoria — e é revelador que o motivo declarado seja **agente**, não pessoa.
- O controle de acesso, que o ensaio de 2019 listava como problema em aberto [1], virou projeto
  concreto: **Keyhive**, do Ink & Switch, com o **BeeKEM** (acordo contínuo de chave de grupo,
  tolerante a concorrência, com sigilo futuro e segurança pós-comprometimento sem servidor central)
  e o **Beelay** (protocolo de sincronia que move cargas cifradas que o servidor não decifra) [7].
  A maturidade, porém, está declarada em letras garrafais: **pré-alfa, "DO NOT use this release in
  production applications"**, sem auditoria de segurança à época da publicação — a análise formal
  acadêmica do BeeKEM só ficou pronta em julho de 2026 [7]. Problemas em aberto assumidos: ataques
  de bifurcação cruzada, desvio de relógio entre pares, e **vínculo de identidade deliberadamente
  não resolvido** [7].

E o mais importante: o sinal social sobre local-first é de **frustração**. O texto "Why haven't
local-first apps become popular?" (22/09/2025) juntou 505 pontos e **485 comentários** no Hacker
News [12], e a resposta do autor é uma só: sincronizar é difícil — ordenação não confiável entre
dispositivos e conflito de escrita concorrente; "a maioria só enfileira mudanças localmente e
empurra quando a rede volta (spoiler: isso não funciona de verdade)" [10]. Some-se a isso os
limites que a própria literatura reconhece: CRDT pode produzir resultado tecnicamente consistente
e semanticamente inesperado, migração de esquema entre versões de cliente é difícil, e o
armazenamento do navegador pode simplesmente **despejar o dado local** [2].

**Classificação: emergente. Disruptivo em potencial, ainda não em efeito observável.**

### Ponta-a-ponta fora da mensageria: existe, e não fecha a conta

O obstáculo não é criptográfico, é econômico e regulatório.

- **Econômico**: a Signal projeta cerca de **50 milhões de dólares por ano** de custo operacional,
  financiada por doação, e afirma explicitamente que "a incapacidade de monetizar dado cifrado é
  uma das razões pelas quais a criptografia ponta-a-ponta forte não foi amplamente implantada na
  indústria comercial" [15]. Este é o núcleo da pergunta de segunda ordem do tema, dito pela parte
  interessada e sem rodeio.
- **Regulatório, e em disputa aberta**: em fevereiro de 2025 o Home Office britânico emitiu uma
  Technical Capability Notice sob a Investigatory Powers Act 2016 exigindo da Apple capacidade de
  acesso a todo dado no iCloud; a Apple retirou o Advanced Data Protection para novos usuários do
  Reino Unido. O Reino Unido retirou a notificação original em outubro de 2025 e emitiu outra,
  mirando "usuários britânicos"; o recurso original da Apple foi descartado por mudança de
  circunstâncias; a Privacy International, a Liberty e dois requerentes individuais seguem com
  ação no Investigatory Powers Tribunal, com queixa emendada em fevereiro de 2026 e **audiência
  substantiva marcada para dezembro de 2026** [8]. Ou seja: dezoito meses depois, a situação
  prática do usuário britânico não mudou e a questão de legalidade segue indecidida.
- Do outro lado, a regulação empurra na direção contrária: o **Data Act** da UE entrou em vigor em
  11/01/2024 e passou a ser aplicável em **12/09/2025**, criando direito de acesso ao dado gerado
  por produtos conectados e mecanismo de troca efetiva entre provedores de serviço de dados [9]. E
  o **eIDAS 2** (Regulamento (UE) 2024/1183, em vigor desde 20/05/2024) obriga cada Estado-membro a
  oferecer **pelo menos uma carteira de identidade digital até 2026**, com divulgação seletiva de
  atributos e interoperabilidade transfronteiriça [10-EUDI].

### O ecossistema que a turma varreu: soberania de dado pessoal é hoje um nicho de dezenas de estrelas

Verifiquei pela API do GitHub os dois projetos de referência da varredura:

- `tombadilo-bombadilo/budgero` — "Local-first, self-hostable, end-to-end encrypted ZBB app":
  **21 estrelas**, último push em 17/09/2026 [14].
- `shynewt/kostos` — "Split bills with friends… No accounts, end-to-end encrypted, works offline,
  self-hostable": **43 estrelas**, último push em 13/06/2026 [14].

Isto é evidência, não anedota: a camada de *produto* dessa arquitetura vive em ordens de grandeza
de dezenas de estrelas, enquanto a camada de *infraestrutura* já está em dez milhões de downloads
semanais [17]. A infraestrutura chegou antes do produto — e é esse descompasso que o mapa precisa
explicar.

### A ligação com o tema 16

O que torna o servidor cego economicamente suportável é a IA rodar no cliente. A base técnica
existe: **WebGPU habilitado por padrão em Chrome, Edge, Firefox e Safari** em meados de 2026, e o
**WebLLM** relatando **até 80% do desempenho nativo** no mesmo dispositivo, com API no estilo
OpenAI, para inferência inteiramente no navegador (Ruan, Chen et al., arXiv, dezembro de 2024,
revisado em 13/04/2026) [16]. O limite é memória: modelos abaixo de ~3B parâmetros são o terreno
viável do navegador hoje. `accountant24` e `wilson`, da varredura da turma, são exatamente esse
casamento — IA sobre dado financeiro sem o dado sair da máquina.

## 4. As disrupções-raiz

Três. Tecnologia madura não entra: backup cifrado, HTTPS, 2FA por SMS e "entrar com o Google" ficam
na seção 3 como estado atual.

### D1 — O servidor cego: a cifra no cliente sai da mensageria e vira arquitetura de aplicativo

**O que rompe.** Enquanto a cifra ponta-a-ponta ficou restrita a mensagem, ela era uma escolha de
produto dentro de um modelo intacto. Quando ela passa a valer para o acervo — finanças, notas,
saúde, arquivos —, o servidor deixa de ser **o lugar onde o produto acontece** e vira transporte.
Cai junto tudo o que dependia de o servidor entender o conteúdo: busca do lado do servidor,
personalização, analytics de conteúdo, moderação, recuperação pelo suporte e treino de modelo sobre
o acervo do usuário.

**Por que agora e não há cinco anos.** Três coisas mudaram. A cripto no cliente ficou trivial de
embarcar. O controle de acesso descentralizado — o problema que o ensaio de 2019 listava como não
resolvido [1] — virou projeto concreto com BeeKEM e Beelay, e ganhou análise formal acadêmica em
julho de 2026 [7]. E a IA no cliente ficou viável [16], o que devolve à aplicação cega a capacidade
de "entender" o acervo sem o servidor.

**O que ainda falta.** Keyhive é pré-alfa e não auditado [7]. Vínculo de identidade continua fora
do escopo por desenho [7]. Busca federada sobre acervo cifrado, entre dispositivos, segue sem
resposta boa. E ninguém demonstrou que dá para sustentar operação de escala sem monetizar o dado
— a Signal responde com doação e 50 milhões por ano [15], o que não é um modelo replicável.

### D2 — O dado que mora no dispositivo: local-first deixa de ser manifesto e vira infraestrutura comprada

**O que rompe.** A relação de dependência. No modelo de nuvem, encerrar o serviço apaga o acervo e
o "exportar meus dados" é um evento raro e degradado. No local-first, o arquivo já está na máquina
e a exportação é o estado permanente. Rompe também o ofício: sincronia deixa de ser algo que cada
equipe escreve mal e vira componente que se compra.

**Por que agora e não há cinco anos.** O custo caiu de forma medível. Automerge 3 cortou memória
em mais de 10× e resolveu o problema de documento com histórico longo [3]. PGlite pôs Postgres
dentro do navegador e chegou a 10 milhões de downloads semanais [17]. WebGPU e SQLite embarcado
fecharam a pilha do lado do cliente [16]. E há evento de mercado: a Databricks comprou a Electric
em 11/08/2026 [17].

**O que ainda falta.** Duas coisas, e são grandes. **Sincronizar continua difícil** — ordenação
não confiável, conflito concorrente, e o padrão ingênuo de enfileirar-e-empurrar não funciona [10];
a isso somam-se migração de esquema entre versões de cliente e despejo de armazenamento pelo
navegador [2]. E falta modelo de negócio: assinatura sem servidor caro é uma conta que poucos
produtos fecharam.

⚠️ **Ressalva importante, e é a mais desconfortável deste mapa.** O motivo declarado da aquisição da
Electric é **agente**, não pessoa: dar a cada agente de IA seu próprio Postgres local, sincronizando
de volta para o Lakebase [17]. O capital que está financiando a infraestrutura local-first hoje não
está comprando soberania do usuário — está comprando latência para agente. Isso muda o mapa, e o
mapa registra.

### D3 — A senha acaba: a identidade migra do provedor para o aparelho

**O que rompe.** A senha era um segredo compartilhado entre pessoa e serviço, e por isso o
"entrar com o Google" existia: alguém tinha que guardar e verificar o segredo em nome de todo
mundo. Com WebAuthn, o serviço guarda apenas uma chave pública e a prova é feita pelo aparelho —
**o provedor de identidade terceiro deixa de ser tecnicamente necessário**. Isso é uma ruptura de
papel, não uma melhoria de segurança.

**Por que agora e não há cinco anos.** WebAuthn Nível 3 é Recomendação do W3C desde 25/08/2026
[6]; a escala existe (5 bilhões de passkeys; 49% de uso regular entre quem tem) [4]; a portabilidade
entre gerenciadores saiu do CSV em texto plano para um formato e um protocolo cifrado (CXF/CXP)
[5]; e o Estado entrou no trilho — gov.br com chave de acesso, e a obrigação do eIDAS 2 de cada
Estado-membro europeu oferecer uma carteira digital até 2026 [10-EUDI].

**O que ainda falta — e é onde o desenho de interação tem trabalho.** Quatro buracos, todos
documentados no sinal social [11] e um deles admitido pela própria especificação [6]:

1. **Recuperação.** O W3C delega explicitamente ao serviço [6]. Não há padrão. O que aparece no
   lugar é recuperação social, código de resgate e prova de identidade documental — e cada um
   desses é um vetor de fraude novo.
2. **Conta compartilhada.** Passkey é individual por construção. Casal, família e microempresa
   não têm caminho suportado [11].
3. **Herança digital.** Ninguém herda uma chave presa ao Secure Enclave de um aparelho que ficou
   sem dono.
4. **Quem guarda o chaveiro.** Hoje, Apple e Google [11]. A senha era ruim, mas era portátil por
   ser memorizável. A passkey é melhor e é, na prática, custodiada.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O servidor cego — cifra no cliente vira arquitetura padrão de aplicativo de dado pessoal
    efeitos:
      - id: e1
        ordem: 1
        efeito: Produto de dado pessoal passa a nascer com cifra no cliente e o servidor é tratado como transporte
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Empresa que vivia de ler o dado do usuário perde a matéria-prima e desloca a receita para assinatura e armazenamento
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Grátis em troca de dado deixa de ser o preço padrão do software pessoal e a expectativa de pagar por software volta a ser normal em parte do mercado
                sinal: fraco
                prazo: 2033
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: Criptografia aplicada entra no currículo de computação como disciplina de produto e não apenas de segurança
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Moderação e suporte perdem acesso ao conteúdo e migram para metadado, denúncia do usuário e verificação executada no cliente
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O Estado responde à cegueira do servidor exigindo varredura no dispositivo e a disputa pública muda de cifrar ou não cifrar para quem manda no seu aparelho
                sinal: forte
                prazo: 2031
                confianca: media
              - id: e1.2.2
                ordem: 3
                efeito: Plataforma cifrada passa a ser julgada pela qualidade do seu processo de denúncia e não pela sua capacidade de ver conteúdo
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A IA passa a operar sobre o acervo pessoal sem que o dado saia do aparelho
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O assistente pessoal deixa de ser recurso embutido na plataforma e vira camada que a pessoa instala sobre o próprio acervo
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O valor de um produto migra da posse do acervo para a qualidade do modelo e da interface que operam sobre ele
                sinal: medio
                prazo: 2032
                confianca: baixa
              - id: e2.1.2
                ordem: 3
                efeito: Desigualdade de hardware vira desigualdade de privacidade porque quem tem aparelho fraco continua pagando com dado
                sinal: medio
                prazo: 2032
                confianca: baixa
  - disrupcao: O dado que mora no dispositivo — local-first deixa de ser manifesto e vira infraestrutura comprada
    efeitos:
      - id: e3
        ordem: 1
        efeito: Aplicativo colaborativo passa a responder sem rede e a sincronia vira componente comprado em vez de escrito por cada equipe
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O motor de sincronia se consolida em poucos fornecedores e o local-first reintroduz dependência um andar abaixo
            sinal: forte
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Soberania de dado vira promessa de camada de aplicação sustentada por um oligopólio de infraestrutura
                sinal: medio
                prazo: 2032
                confianca: baixa
              - id: e3.1.2
                ordem: 3
                efeito: A prioridade de roadmap da sincronia passa a ser ditada pela demanda de agentes de IA e não pela de pessoas
                sinal: medio
                prazo: 2031
                confianca: media
          - id: e3.2
            ordem: 2
            efeito: Encerramento de serviço deixa de apagar o acervo e exportar dado deixa de ser evento para virar estado permanente
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: O direito de portabilidade se desloca de obrigação regulatória para propriedade técnica do próprio arquivo
                sinal: fraco
                prazo: 2033
                confianca: baixa
              - id: e3.2.2
                ordem: 3
                efeito: Preservação digital pessoal e herança de acervo viram problema explícito de design de interface
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: A interface passa a ter de exibir estado de sincronia, histórico e conflito como parte do vocabulário visual comum
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Forma-se um repertório de interface para versão, divergência e reconciliação fora do nicho de ferramenta de programador
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Alfabetização em versionamento e reconciliação entra no letramento digital comum
                sinal: fraco
                prazo: 2034
                confianca: baixa
              - id: e4.1.2
                ordem: 3
                efeito: Conflito de edição vira acontecimento narrado na interface e não erro escondido pelo sistema
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: O suporte técnico muda de restaurar do servidor para reconciliar réplicas e o custo de atendimento sobe antes de cair
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Empresas pequenas desistem do local-first por custo de suporte e o padrão fica restrito a produto de nicho e a ferramenta profissional
                sinal: medio
                prazo: 2032
                confianca: baixa
  - disrupcao: A senha acaba — a identidade migra do provedor de identidade para o aparelho
    efeitos:
      - id: e5
        ordem: 1
        efeito: Autenticação deixa de ser algo que a pessoa sabe e passa a ser algo que o aparelho prova
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O fluxo esqueci minha senha é substituído por recuperação social, código de resgate e prova documental, e essa recuperação vira o novo elo fraco
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A fraude migra do phishing de senha para a engenharia social do atendimento de recuperação
                sinal: forte
                prazo: 2030
                confianca: media
              - id: e5.1.2
                ordem: 3
                efeito: Perder o aparelho passa a ser um evento de exclusão civil onde o serviço público adota chave de acesso sem alternativa equivalente
                sinal: medio
                prazo: 2031
                confianca: media
          - id: e5.2
            ordem: 2
            efeito: Conta compartilhada de casal, família e microempresa perde caminho suportado e obriga o desenho a inventar a conta plural
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Herança digital vira requisito de produto e de norma em vez de gentileza opcional do fornecedor
                sinal: fraco
                prazo: 2032
                confianca: baixa
              - id: e5.2.2
                ordem: 3
                efeito: Surge uma categoria de interface para identidade compartilhada com papéis e limites, distinta da conta corporativa
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: O provedor de identidade terceiro deixa de ser tecnicamente necessário para entrar em um serviço
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Quem guarda o chaveiro assume o papel de intermediário que a senha perdeu
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A disputa por soberania se desloca de quem guarda o meu dado para quem guarda a minha chave
                sinal: medio
                prazo: 2031
                confianca: media
              - id: e6.1.2
                ordem: 3
                efeito: Portabilidade de credencial vira exigência regulatória de concorrência e não apenas conveniência de usuário
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A carteira de identidade digital do Estado ocupa a ranhura deixada pelo provedor privado e disputa esse lugar
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: A identidade online passa a ter um trilho estatal por padrão, com ganho de portabilidade e risco de rastreabilidade
                sinal: medio
                prazo: 2032
                confianca: baixa
              - id: e6.2.2
                ordem: 3
                efeito: Manter pseudonimato online fica mais caro onde a carteira estatal vira condição de acesso a serviço comum
                sinal: medio
                prazo: 2032
                confianca: baixa
```

### O que o bloco não diz

**As três disrupções não correm no mesmo relógio, e a roda esconde isso.** D3 já está acontecendo
em escala (5 bilhões de passkeys, WebAuthn Nível 3 recomendado) e seus efeitos de primeira ordem
têm prazo 2028 e confiança alta. D1 e D2 estão em pré-alfa e em nicho de dezenas de estrelas, e
seus efeitos de primeira ordem já saem com confiança média. Ler os três ramos como se tivessem o
mesmo peso é o erro mais fácil de cometer diante deste bloco.

**O ramo D2 tem um efeito que é quase uma contradição interna.** `e3.1` diz que o local-first
reintroduz dependência um andar abaixo, e `e3.1.2` diz que a agenda da sincronia passa a ser
ditada por agente de IA. Os dois nascem da mesma evidência — a aquisição da Electric pela
Databricks, motivada por agente [17] — e apontam para uma conclusão desagradável: **é possível
que a infraestrutura local-first se consolide sem que a soberania do usuário avance um passo.**

**A cadeia de moderação foi interrompida.** Eu queria derivar de `e1.2.1` um quarto nível sobre o
que acontece com a liberdade de expressão quando a varredura migra para o aparelho. Parei na
terceira ordem porque é o limite da disciplina, e porque a evidência disponível sobre o estado
legislativo europeu nesse ponto é toda secundária (ver seção 8) — não seria honesto ramificar a
partir dela.

**Nenhum efeito deste mapa diz "a pessoa vira dona do próprio dado".** Isso é deliberado. Os
efeitos dizem onde o intermediário se muda, quanto custa o deslocamento e quem paga. A soberania,
como estado alcançado, não aparece em nenhum nó — porque não achei evidência que a sustentasse.

## 6. Sinais fracos e wildcards

### Sinais fracos

1. **IA operando sobre dado financeiro sem sair da máquina.** `accountant24` e `wilson` (da
   varredura da turma) e `TaxHacker` são o casamento do tema 17 com o 16. Hoje são projetos
   minúsculos. Se um deles virar produto de massa, `e2` acelera e `e1.1` deixa de ser hipótese —
   porque terá demonstrado que dá para entregar o valor sem coletar o dado.
2. **Vínculo de identidade declarado fora de escopo.** O Keyhive assume, por desenho, que não
   resolve verificação de usuário (e-mail, social) [7]. É uma frase de nota de rodapé que contém
   um problema inteiro: sistema sem servidor central e sem vínculo de identidade não sabe dizer se
   a chave que pede acesso é da pessoa certa. Quem resolver isso sem reintroduzir um intermediário
   destrava D1 e D2 de uma vez.
3. **Consolidação motivada por agente, não por pessoa.** Ver seção 4, D2. É fraco porque é um
   evento só; é importante porque define quem financia a infraestrutura.
4. **Despejo de armazenamento pelo navegador.** O relato de que o Safari pode limpar IndexedDB
   após sete dias de inatividade [2] é detalhe técnico obscuro que, se generalizado, inviabiliza
   local-first na web e empurra a arquitetura toda para app nativo — mudando quem controla a
   distribuição.
5. **Recuperação como produto.** Se recuperação de conta virar serviço vendido por terceiros
   (recuperação social como infraestrutura), `e5.1.1` vira `e5.1` e um mercado inteiro nasce no
   ponto mais frágil do sistema.
6. **Herança e portabilidade de credencial na regulação.** CXF/CXP existem [5] por pressão de
   interoperabilidade entre gerenciadores; ainda não por lei. O dia em que um regulador de
   concorrência citar CXP é o dia em que `e6.1.2` vira tendência.

### Wildcards

**W1 — Uma jurisdição grande obriga varredura no cliente para todo serviço de comunicação, e o
cumprimento se generaliza por precaução.** *Baixa probabilidade, impacto altíssimo.* Se acontecer,
a cifra ponta-a-ponta continua arquitetonicamente intacta e fica praticamente esvaziada: a
inspeção acontece antes da cifra, no aparelho da pessoa. A consequência é perversa e é o que
torna este um wildcard e não uma previsão: **D1 se concretiza tecnicamente e fracassa no propósito**
— o servidor fica cego e o aparelho vira o ponto de vigilância. Há tensão real em torno disso: a
disputa Apple × Reino Unido segue sem decisão e com audiência marcada para dezembro de 2026 [8].
Não é previsão. É o cenário que mudaria o mapa inteiro se virasse regra geral.

**W2 — Uma falha em massa de recuperação de passkey num serviço público de grande escala.**
*Baixa probabilidade, impacto alto.* Um incidente em que centenas de milhares de pessoas percam
acesso a serviço essencial por perda de aparelho. Efeito: `e5.1.2` vira notícia, a regulação
passa a exigir caminho alternativo obrigatório, e o sem-senha total é adiado por uma década. O
gov.br, com mais de 170 milhões de pessoas, é o tipo de escala em que isso seria visível.

**W3 — Um grande fornecedor de nuvem de consumo adota ponta-a-ponta por padrão para o acervo
inteiro e continua crescendo.** *Baixa probabilidade, impacto alto.* Quebraria a premissa da
Signal de que dado cifrado não se monetiza [15] e faria `e1.1` saltar de média para alta confiança
em dois anos. É o wildcard otimista, e é o menos provável dos três — precisaria de um ator com
receita não dependente de publicidade e disposto a perder a alavanca da personalização.

## 7. Contra o próprio mapa

### Qual efeito é só extrapolação linear do presente

`e4` e `e4.1` — a ideia de que a interface vai precisar de um vocabulário visual para sincronia e
conflito. Isso é extrapolação de um requisito técnico para um requisito de produto, e a história
do software sugere o contrário: **a indústria tem gasto quarenta anos escondendo conflito do
usuário, não mostrando.** Git é a prova de que é possível ter reconciliação poderosa e interface
inacessível ao não-especialista, e nada garante que a segunda venha atrás da primeira. A resposta
mais provável do mercado a conflito de merge não é uma interface nova; é uma heurística que
escolhe um lado em silêncio. Rebaixei `e4.1` para sinal fraco e mantive `e4.1.1` em confiança baixa
com prazo 2034 por isso.

### Qual efeito assume velocidade de adoção sem caso comparável

`e1` — cifra no cliente virando padrão de produto de dado pessoal até 2029. Não há caso comparável.
A cifra ponta-a-ponta levou cerca de dez anos para ir de Signal a WhatsApp **num único domínio**
(mensagem), com pressão de reputação após 2013 e sem custo funcional relevante — mensagem não
precisa que o servidor leia. Em finanças, saúde e produtividade o custo funcional é alto: busca,
relatório, integração e recuperação dependem de o servidor entender o conteúdo. Presumir três anos
para uma transição mais difícil que uma que levou dez é otimismo. **Mantive `e1` com sinal médio e
confiança média, mas o prazo 2029 é a datação mais frágil deste mapa** — 2033 seria mais defensável.

### Qual disrupção pode simplesmente não se concretizar

**D2, local-first.** É a mais vulnerável das três e a evidência contrária é forte. O obstáculo
apontado pelo item de maior ressonância sobre o assunto não é hype nem falta de vontade: é que
sincronizar é genuinamente difícil, com ordenação não confiável e conflito concorrente sem solução
geral [10]. A isso somam-se migração de esquema e despejo de armazenamento [2]. E o financiamento
disponível está mirando agente, não pessoa [17].

Se D2 não se concretizar, **cai todo o ramo `e3`–`e4` e as sete folhas abaixo dele** — mais de um
terço do mapa. Sobra um futuro perfeitamente coerente e bem menos interessante: dado continua no
servidor, mas cifrado (D1 parcial, no modelo de cofre), e a senha acaba (D3). Ou seja: privacidade
sim, soberania não. **Esse é, com sinceridade, o cenário provável — e é o que escrevi na seção 9.**

### Qual efeito depende de uma disrupção que pode não acontecer

`e2.1.1` (o valor migra do acervo para o modelo e a interface) depende de a IA no cliente ficar
boa o suficiente. A restrição hoje é dura: modelos acima de ~3B parâmetros não cabem
confortavelmente no navegador, e WebLLM reporta **até** 80% do nativo — teto, não média [16]. Se a
distância entre modelo local e modelo de fronteira se mantiver ou aumentar, a pessoa continua
entregando o dado em troca de capacidade, e `e2.1.2` (desigualdade de hardware virando
desigualdade de privacidade) deixa de ser efeito de terceira ordem para virar a descrição do
presente.

### O viés que entrou aqui

Três, e o primeiro é o pior:

1. **Viés de fonte.** Quase toda a literatura de local-first vem de Ink & Switch, Automerge e do
   ecossistema de fornecedores de sincronia — gente que ganha com a tese. Compensei parcialmente
   puxando o sinal social crítico [10][11][12], mas a assimetria permanece: não encontrei literatura
   acadêmica independente avaliando adoção de local-first, e não a procurei em base indexada.
2. **Viés do pedido.** O tema chegou descrito como "a disrupção-raiz" e com um projeto real do
   aluno por trás (remoção do provedor de identidade terceiro). A moldura já vinha inclinada a
   favor. Tentei corrigir escolhendo, como âncora de realidade, dois números desconfortáveis: as
   21 e 43 estrelas de budgero e kostos [14], e os 49% de uso regular de passkey entre quem a tem
   [4].
3. **Viés de seleção do social.** Hacker News é enviesado para desenvolvedor anglófono e
   auto-hospedagem. Ele é bom para detectar frustração técnica e péssimo para medir adoção de
   consumidor. Usei-o só para a primeira função.

### A régua da disciplina, aplicada com honestidade

O critério de exclusão era descartar o que já é comum em produto de massa. **Passkey está
perigosamente perto de falhar nesse teste**: 90% de consciência e 75% com ao menos uma ativada [4]
é adoção larga. O que me fez mantê-la é que ela não passou da maioria inicial no que *importa* —
49% usam regularmente, 28% das empresas chegaram ao sem-senha total [4], e a experiência de
recuperação, compartilhamento e herança não existe. É a **capacidade** que é madura; a **prática**
é emergente, e a **ruptura de papel** (eliminar o provedor de identidade terceiro) mal começou.

## 8. O que a máquina errou

Cinco itens concretos deste trabalho.

**1. O primeiro link do ensaio fundador não existe.** Busquei `inkandswitch.com/local-first/` —
a URL que aparece citada em vários lugares e que a IA produziu por padrão — e voltou página vazia.
A URL que responde é `inkandswitch.com/essay/local-first/`. Desconfiei porque o modelo devolveu
"o conteúdo parece vazio" em vez de erro: página vazia com HTTP 200 é sintoma de rota que mudou,
não de fonte inexistente. Se eu tivesse aceitado o resumo de memória, teria citado a fonte mais
importante do documento sem ter aberto.

**2. O número do Signal estava datado e eu quase o atualizei sozinho.** O texto da Signal projeta
50 milhões de dólares anuais "até 2025", com 33 milhões medidos em novembro de 2023 [15]. A
tentação — e a IA ofereceu isso — era escrever "a Signal gasta 50 milhões por ano". Não é o que a
fonte diz: é uma projeção feita em 2023 para 2025, lida em 2026. Mantive a palavra "projeta" e a
data. Número redondo com verbo no presente é a assinatura típica da coisa inventada.

**3. A adoção do gov.br não tem fonte primária neste documento, e eu deixei isso escrito.** A
busca devolveu meia dúzia de portais de notícia (fdr.com.br, UAI) descrevendo a atualização de
janeiro de 2026 com chave de acesso. Tentei `acesso.gov.br` (redireciona) e
`servicos.acesso.gov.br` (devolveu só "Portal Logado", sem conteúdo útil). **Não confirmei em
fonte oficial.** Marquei a afirmação com ressalva na seção 3 em vez de apagá-la, porque a nota
sobre o Brasil foi pedida — mas ela não sustenta nenhum efeito da roda sozinha.

**4. O estado legislativo do Chat Control veio inteiro de fonte secundária de qualidade ruim, e
por isso saiu do mapa.** A busca devolveu datas muito específicas e mutuamente inconsistentes
("expirou em 4 de abril de 2026", "restabelecido em 9 de julho de 2026", "314 de 361 MEPs"),
quase todas em blogs de advocacy (fightchatcontrol.eu, stateofsurveillance.org, closednetwork.io).
Tentei confirmar no Parlamento Europeu (legislative train: HTTP 500) e no Conselho (HTTP 403) e
**não consegui abrir nenhuma fonte institucional**. Precisão numérica alta vinda só de fonte
militante é exatamente o padrão que deveria acender o alarme. Resultado: nenhum número sobre Chat
Control entrou neste documento, a tensão regulatória sobre cifra está ancorada apenas no caso
Apple × Reino Unido [8], que tem fonte de litigante identificável e datas verificáveis, e a cadeia
`e1.2.1` parou na terceira ordem por isso (ver seção 5).

**5. A aquisição da Electric quase entrou como fato de terceira mão.** A busca devolveu o resumo
pronto — Databricks, 11/08/2026, PGlite, agentes. Fui ao blog da própria empresa e descobri que a
URL antiga (`electric-sql.com`) redireciona para `electric.ax`, e que o post do dia 25/06/2026
traz o número que acabou sendo o melhor indicador de adoção de todo o levantamento (10 milhões de
downloads semanais do PGlite) — que nenhuma das buscas tinha me mostrado [17]. Lição: o resumo de
busca entrega a manchete e esconde o dado.

**Item que continua em aberto:** não consegui número oficial de consentimentos ativos do Open
Finance para 2026. O que tenho é de setembro de 2025 e refere-se a 2024 [13]. Preferi citar com a
data explícita a citar um número mais recente sem fonte aberta.

## 9. Três cenários para 2031

### Provável — privacidade sim, soberania não

Chegamos a 2031 com a senha praticamente extinta no consumo e no trabalho, e com a cifra
ponta-a-ponta virando padrão de mercado em categorias sensíveis. E com o intermediário intacto,
só que mudado de endereço. Entrar é fácil e não tem senha, mas a chave que prova quem você é mora
no chaveiro da Apple, do Google ou do gerenciador que você escolheu — e sair de um chaveiro ainda
é uma operação que assusta, mesmo com CXP funcionando. O acervo está cifrado, e isso é real: o
provedor não lê. Mas ele continua sendo dele o lugar onde o acervo mora, no modelo de cofre, e
não no seu dispositivo. Local-first ganhou o andar de baixo — quase todo app responsivo de 2031
tem SQLite ou Postgres embarcado e um motor de sincronia comprado de um de três ou quatro
fornecedores, todos dentro de plataformas maiores — e perdeu o andar de cima: a promessa de que o
usuário seria dono do arquivo nunca virou recurso de produto porque nenhum modelo de negócio
pagava por ela. O que a arquitetura entregou de fato foi latência baixa e funcionamento offline,
que é muito, e é outra coisa. E o custo de tudo isso ficou concentrado num lugar só: recuperação
de conta virou a superfície de ataque mais rentável da internet, e o atendimento humano que a
opera é o ponto onde a criptografia acaba.

### Desejável — a soberania vira recurso visível, e não promessa de manifesto

Em 2031 dá para explicar a uma pessoa, na interface e em uma frase, onde o dado dela está e quem
consegue lê-lo — porque isso virou elemento de interface, como o cadeado do HTTPS virou nos anos
2010. Três coisas tiveram de acontecer para chegar aqui, e nenhuma delas foi inevitável. Primeiro,
o controle de acesso ponta-a-ponta saiu do pré-alfa: Keyhive ou equivalente passou por auditoria
independente e virou dependência normal, o que tirou dos times a escolha entre "cifrado" e
"compartilhável" [7]. Segundo, alguém resolveu recuperação e conta compartilhada com desenho, não
com exceção — recuperação social e conta plural viraram padrões de interface reconhecíveis, com
nome, ícone e comportamento previsível, e a herança digital entrou nos requisitos de produto em
vez de depender da boa vontade do fornecedor. Terceiro, e mais difícil: a regulação de portabilidade
deixou de exigir um botão de exportar e passou a exigir **formato lido por outro programa**, o que
converteu o direito de portabilidade de obrigação burocrática em propriedade técnica do arquivo
[9]. O sinal de que estamos nesse caminho é modesto e mensurável: um produto de massa, não um
projeto de 40 estrelas, entregando busca e assistente sobre acervo cifrado com IA no cliente, e
crescendo com isso.

### Indesejável — o aparelho vira o ponto de vigilância e a chave vira a coleira

Em 2031 o servidor de fato não lê mais nada, e isso não protege ninguém. A resposta do Estado à
cegueira do servidor foi deslocar a inspeção para antes da cifra, no dispositivo, e o cumprimento
se generalizou por precaução muito além das jurisdições que o exigiram — porque é mais barato
enviar um binário só para o mundo inteiro. A cifra ponta-a-ponta continua arquitetonicamente
intacta e funcionalmente esvaziada. Ao mesmo tempo, a identidade terminou de se concentrar: entrar
em qualquer lugar exige a carteira estatal ou o chaveiro de uma das duas plataformas de sistema
operacional, e as duas coisas se tornaram a mesma na prática, porque a carteira do Estado mora no
aparelho da plataforma. Pseudonimato virou privilégio de especialista. Perder o aparelho virou
perder o acesso ao banco, ao serviço público e ao histórico médico ao mesmo tempo, e a recuperação
custa uma ida presencial. O acervo, esse sim, está seguro — de todo mundo, inclusive de você.

**Sinal precoce deste cenário, e é o que se deve vigiar:** o momento em que uma obrigação de
verificação no cliente — varredura de conteúdo ou verificação de idade — for aplicada a serviço
cifrado e cumprida globalmente por padrão, em vez de por jurisdição. A partir daí, a discussão
pública deixa de ser sobre cifrar e passa a ser sobre quem manda no seu aparelho — e esse é o
efeito `e1.2.1` deste mapa, com sinal forte e prazo 2031.

## 10. O experimento

### O que é

**Servidor cego** — um aplicativo de anotação financeira pessoal, de escopo mínimo (lançar
despesa, categorizar, ver o mês), com três características e uma tela extra:

1. **O dado é cifrado no cliente.** A chave deriva de uma passkey ou de uma frase-semente; o
   servidor recebe e devolve blobs opacos.
2. **A entrada é por passkey, sem provedor de identidade terceiro.** WebAuthn direto, sem "entrar
   com o Google".
3. **A verdade é local.** SQLite (ou PGlite) no navegador, com sincronia para o servidor cego.
4. **A tela extra é o experimento de verdade: o Painel do Servidor.** Uma visão que mostra,
   em tempo real e lado a lado, **exatamente o que o servidor guardou** (os bytes cifrados, que
   ninguém lê) e **exatamente o que o servidor ainda consegue inferir mesmo sem ler**: quantos
   registros existem, de que tamanho, em que horários você mexeu, de que IP, com que frequência,
   quantos dispositivos, quando você parou de usar por três semanas.

O item 4 é o que faz este experimento valer uma aula. Os itens 1 a 3 demonstram a arquitetura; o
item 4 demonstra o **limite** dela, que é a parte que quase nunca se mostra.

### Que pergunta sobre o futuro ele ajuda a responder

Duas, e as duas são de segunda ordem na roda:

- **`e1.1` e `e1.2`** — se o servidor não lê o dado, o que sobra para ele fazer? A resposta,
  visível no painel, é: metadado. E metadado é muito. O experimento testa se, diante do painel,
  a pessoa ainda chama aquilo de "soberania".
- **`e5.1` e `e5.2`** — o que acontece quando a pessoa perde o aparelho, e o que acontece quando
  duas pessoas querem a mesma conta. O experimento deixa esses dois caminhos deliberadamente
  quebrados na primeira versão, e a turma é convidada a projetá-los.

### Que tecnologia emergente ele usa, e por que não dá com tecnologia madura

- **WebAuthn como fonte de material criptográfico, não só de login.** Isso é emergente e é
  reconhecidamente problemático — há discussão de alta ressonância argumentando explicitamente que
  não se deve usar passkey para cifrar dado de usuário (280 pontos, 244 comentários, 28/02/2026)
  [12]. **O experimento vai bater nesse problema, e é para bater.** É onde a arquitetura deste
  tema ainda não tem resposta.
- **Banco embarcado no navegador com sincronia** (PGlite/SQLite + motor de sincronia) [17]. Com
  tecnologia madura, o caminho seria backend com banco no servidor e sessão por cookie — e aí não
  há nada para observar: o servidor lê tudo e o experimento não existe.
- Backup cifrado, HTTPS e "entrar com o Google" resolveriam o produto e **destruiriam a pergunta**.
  É precisamente por isso que a régua da disciplina os exclui.

### O que a turma vai fazer quando testar isso em sala

Quatro momentos, nesta ordem:

1. **Cadastrar-se e lançar cinco despesas.** Cronometrar o cadastro por passkey e contar quantas
   pessoas travam. (Hipótese: uma parte não-trivial trava, e trava na etapa de escolher onde
   guardar a chave.)
2. **Abrir o Painel do Servidor** e listar, em grupo, o que dá para inferir sobre alguém só com
   aquilo. Escrever a lista no quadro.
3. **Quebrar de propósito.** Cada pessoa entrega o celular a quem está à direita e tenta entrar na
   própria conta pelo aparelho de outra pessoa. Depois, duas pessoas tentam usar a mesma conta ao
   mesmo tempo. Registrar o que a interface diz — e o que ela deixa de dizer.
4. **Editar offline em dois dispositivos** e reconectar os dois ao mesmo tempo, com conflito
   proposital no mesmo registro. Observar o que a interface mostra: ela narra o conflito ou o
   resolve em silêncio? (Liga com `e4.1` e `e4.1.2`.)

### O que seria um resultado que me faria mudar de ideia

Três resultados, e cada um derruba uma parte diferente do mapa:

- **Se a turma, depois de ver o Painel do Servidor, avaliar que o metadado exposto é irrelevante
  para a sua privacidade** — então `e1.1` está superestimado: a cegueira do servidor entrega mais
  do que eu supus e o modelo de negócio baseado em dado tem menos a perder do que escrevi.
- **Se ninguém travar no cadastro por passkey e o compartilhamento não incomodar ninguém** — então
  a seção 3 está inclinada pelo viés do Hacker News, `e5.1` e `e5.2` estão superdimensionados, e a
  fricção que estruturou todo o ramo D3 é queixa de desenvolvedor, não de pessoa.
- **Se a interface de conflito for compreendida sem explicação** — então `e4.1` merece subir de
  sinal fraco para médio e eu estava errado ao concordar com a crítica que eu mesmo fiz na seção 7.

## 11. Fontes

Dezessete fontes, todas abertas e lidas durante este trabalho, em 18/09/2026. Fontes que não
abriram estão registradas na seção 12 e não sustentam nenhuma afirmação deste documento.

1. **Kleppmann, M.; Wiggins, A.; van Hardenberg, P.; McGranaghan, M. — "Local-first software: you
   own your data, in spite of the cloud"** (Ink & Switch, abril de 2019).
   `https://www.inkandswitch.com/essay/local-first/`
   Sustenta: a definição de local-first, os sete ideais, e — o que mais importa aqui — a lista de
   problemas em aberto que os próprios autores declararam (escalabilidade de CRDT, controle de
   acesso sem servidor, interface para histórico e conflito, imaturidade para produção).
   Confiabilidade: alta. Fonte primária, dos autores do termo, apresentada no Onward! da ACM
   SIGPLAN. Tem viés de advocacia: é um manifesto, e declara-se como tal.

2. **"Local-first software" — Wikipedia.**
   `https://en.wikipedia.org/wiki/Local-first_software`
   Sustenta: as críticas consolidadas (resultado semanticamente inesperado do CRDT, migração de
   esquema entre versões de cliente, despejo de IndexedDB pelo navegador) e a menção a Linear e
   Anytype.
   Confiabilidade: média. Terciária. Usei-a só para localizar críticas e para o sinal fraco nº 4,
   nunca como única base de um efeito.

3. **"Automerge 3.0" — blog do Automerge** (julho de 2025).
   `https://automerge.org/blog/automerge-3/`
   Sustenta: a queda de consumo de memória de 700 MB para 1,3 MB no caso do Moby Dick, o ganho
   geral acima de 10×, e a compatibilidade de formato com a versão 2.
   Confiabilidade: alta para o fato técnico (é o release oficial do projeto), com a ressalva de
   que o benchmark é escolhido pelo próprio fornecedor.

4. **FIDO Alliance — "Five Billion Passkeys: FIDO Alliance Reports Mainstream Global Usage on World
   Passkey Day 2026"** (maio de 2026).
   `https://fidoalliance.org/fido-alliance-reports-accelerating-global-passkey-adoption-on-world-passkey-day-2026/`
   Sustenta: 5 bilhões de passkeys; 90% de consciência; 75% com ao menos uma ativada; 49% de uso
   regular; 68% das organizações implantando; 82% com meta de sem-senha total e 28% tendo chegado
   lá; 33% de consumidores com comprometimento de conta no ano; 57% das organizações ainda com
   método suscetível a phishing. Metodologia declarada (Sapio Research, abril de 2026, n=11.000 e
   n=1.400, margens de ±0,9 e ±2,6 p.p.).
   Confiabilidade: média-alta para os números de pesquisa, **baixa para a interpretação**. É a
   associação que promove a tecnologia divulgando pesquisa encomendada por ela. A metodologia é
   declarada, o que é bom; o enquadramento ("mainstream") é interessado. Foi por isso que usei os
   49% e os 28%, e não a manchete.

5. **FIDO Alliance — Credential Exchange Specifications (CXP/CXF).**
   `https://fidoalliance.org/specifications-credential-exchange-specifications/`
   Sustenta: a existência de um formato padrão para transferência segura de credenciais entre
   gerenciadores.
   Confiabilidade: alta para a existência; **a página que abri é fina** e não trouxe número de
   versão nem data. As afirmações sobre implantação em iOS/macOS 26 e Android vêm de cobertura
   secundária que não abri — por isso aparecem no texto marcadas como "segundo a cobertura
   secundária" e não sustentam efeito na roda.

6. **W3C — "Web Authentication: An API for accessing Public Key Credentials — Level 3"**,
   Recomendação W3C de 25 de agosto de 2026.
   `https://www.w3.org/TR/webauthn-3/`
   Sustenta: a data e o status de Recomendação; credenciais sincronizadas e descobíveis;
   `getClientCapabilities()` e métodos de sinalização; e a delegação explícita da recuperação de
   conta à parte confiante.
   Confiabilidade: alta. Norma primária. É a âncora mais forte deste documento, e a única fonte
   que sustenta um efeito com confiança alta (`e5`).

7. **Ink & Switch — Keyhive (caderno do projeto).**
   `https://www.inkandswitch.com/keyhive/notebook/`
   Sustenta: o que são BeeKEM e Beelay; o estado pré-alfa com aviso explícito contra uso em
   produção e ausência de auditoria de segurança; a conclusão da análise formal acadêmica do
   BeeKEM em julho de 2026; e os problemas em aberto (bifurcação cruzada, desvio de relógio,
   vínculo de identidade fora de escopo, ausência de agilidade criptográfica).
   Confiabilidade: alta, e **notavelmente honesta** — é raro um projeto declarar os próprios
   limites com esta clareza. Viés: mesmo laboratório do ensaio de 2019.

8. **Privacy International — "PI Apple TCN Challenge".**
   `https://privacyinternational.org/legal-action/pi-apple-tcn-challenge`
   Sustenta: a TCN de fevereiro de 2025 sob a Investigatory Powers Act 2016; a retirada do Advanced
   Data Protection para novos usuários britânicos; o julgamento público de 07/04/2025 sobre
   sigilo; a ordem de gestão de caso de 23/07/2025; a retirada da notificação original em outubro
   de 2025 e a emissão de outra; a queixa emendada em fevereiro de 2026; e a audiência substantiva
   marcada para dezembro de 2026.
   Confiabilidade: média-alta para a cronologia processual (é parte no processo, então as datas e
   peças são verificáveis), **baixa para a interpretação** — é litigante com posição declarada.
   Usei datas e atos processuais, não avaliações.

9. **Comissão Europeia — Data Act (página de política).**
   `https://digital-strategy.ec.europa.eu/en/policies/data-act`
   Sustenta: entrada em vigor em 11/01/2024 e aplicabilidade desde 12/09/2025; direito de acesso a
   dado gerado por produto conectado; mecanismo de troca efetiva entre provedores de serviço de
   dados.
   Confiabilidade: alta. Fonte institucional primária. Viés: é o regulador descrevendo a própria
   norma em linguagem promocional.

10. **Comissão Europeia — EU Digital Identity Wallet (página do building block).**
    `https://ec.europa.eu/digital-building-blocks/sites/display/EUDIGITALIDENTITYWALLET/EU+Digital+Identity+Wallet+Home`
    Sustenta: o Regulamento (UE) 2024/1183 em vigor desde 20/05/2024; a obrigação de cada
    Estado-membro oferecer ao menos uma carteira até 2026; divulgação seletiva e interoperabilidade
    transfronteiriça.
    Confiabilidade: alta para a obrigação legal e as datas. Não diz nada sobre adoção real, e eu
    não afirmo nada sobre adoção real a partir dela.

11. **Bambini, M. — "Why local-first apps haven't become popular"** (22/09/2025).
    `https://marcobambini.substack.com/p/why-local-first-apps-havent-become`
    Sustenta: o diagnóstico de que o obstáculo central é a sincronia — ordenação não confiável
    entre dispositivos e conflito de escrita concorrente —, e a frase sobre enfileirar-e-empurrar
    não funcionar.
    Confiabilidade: média. Blog de um desenvolvedor, sem revisão. Vale pela ressonância (505 pontos
    e 485 comentários) e por ser evidência **contrária** à tese que este mapa poderia querer
    defender — que é exatamente o tipo de fonte que se deve procurar.

12. **Hacker News — discussão "Passkeys were invented by engineers with zero understanding of
    consumer brain"** (22/07/2026, 577 pontos, 784 comentários).
    `https://news.ycombinator.com/item?id=49007374`
    Sustenta: as queixas de usabilidade, perda de dispositivo, custódia da chave por Apple/Google,
    conta compartilhada sem caminho, e portabilidade — mais os contra-argumentos (resistência a
    phishing, recuperação via nuvem da plataforma).
    Confiabilidade: baixa individualmente, **média como sinal social**. Comentário anônimo não é
    evidência de adoção; é evidência de fricção percebida por um público técnico. Usei-a só para
    isso.

13. **Hacker News Search (API Algolia) — consultas por "local-first", "passkeys" e "self-hosted",
    limitadas a itens posteriores a 01/01/2025.**
    `https://hn.algolia.com/api/v1/search`
    Sustenta: a ressonância comparada dos itens citados na seção 3 e nos sinais fracos — entre
    eles "Why haven't local-first apps become popular?" (505 pts / 485 cmts, 22/09/2025), "Don't
    use passkeys for encrypting user data" (280 pts / 244 cmts, 28/02/2026), "Yep, Passkeys Still
    Have Problems" (192 pts / 213 cmts, 17/12/2025) e "The future is not self-hosted" (463 pts /
    448 cmts, 25/07/2025).
    Confiabilidade: alta para a **medição** (pontos e comentários são dados, não opinião), baixa
    para o que a medição significa. Ver a ressalva de viés na seção 7.

14. **GitHub REST API — busca de repositórios (`/search/repositories`).**
    `https://api.github.com/search/repositories`
    Sustenta: `tombadilo-bombadilo/budgero`, 21 estrelas, último push em 17/09/2026, descrito como
    "Local-first, self-hostable, end-to-end encrypted ZBB app"; e `shynewt/kostos`, 43 estrelas,
    último push em 13/06/2026, "No accounts, end-to-end encrypted, works offline, self-hostable".
    Confiabilidade: alta para os números (são do próprio GitHub, consultados hoje). Estrela é
    proxy fraco de adoção — mas duas ordens de grandeza de diferença em relação a downloads
    semanais de infraestrutura é diferença que nenhuma fragilidade de proxy explica.

15. **Signal — "Signal is expensive"** (blog da Signal Foundation).
    `https://signal.org/blog/signal-is-expensive/`
    Sustenta: os cerca de 33 milhões de dólares anuais medidos em novembro de 2023 e a projeção de
    cerca de 50 milhões até 2025; o financiamento por doação; e a afirmação de que a incapacidade
    de monetizar dado cifrado é uma das razões pelas quais a cifra ponta-a-ponta forte não se
    difundiu na indústria comercial.
    Confiabilidade: alta para os números próprios (é a organização publicando o próprio custo),
    **é argumento interessado** na segunda parte — mas é o argumento da parte que mais teria a
    ganhar se a tese contrária fosse verdadeira, o que o torna mais forte, não mais fraco.

16. **Ruan, C. F.; Chen, T. et al. — "WebLLM: A High-Performance In-Browser LLM Inference Engine"**
    (arXiv:2412.15803, submetido em 20/12/2024, revisado em 13/04/2026).
    `https://arxiv.org/abs/2412.15803`
    Sustenta: inferência de LLM inteiramente no navegador via WebGPU e WebAssembly, com API estilo
    OpenAI, atingindo **até** 80% do desempenho nativo no mesmo dispositivo; e a alegação de
    preservação de privacidade por execução local.
    Confiabilidade: média-alta. Artigo técnico com código aberto; não passou por revisão por pares
    que eu tenha verificado. "Até 80%" é teto declarado pelos autores — tratei como teto, não como
    média.

17. **Electric — blog (`electric.ax/blog`), com os posts "Electric is joining Databricks" (11/08/2026,
    James Arthur) e "PGlite reaches 10 million weekly downloads" (25/06/2026, Sam Willis).**
    `https://electric.ax/blog`
    Sustenta: a aquisição pela Databricks, a integração ao time do Neon rumo ao Lakebase, o
    compromisso de manter aberto o que já era aberto, e os 10 milhões de downloads semanais do
    PGlite.
    Confiabilidade: alta para o anúncio (é o comunicado da própria empresa) e média para o número
    de downloads (auto-reportado; download semanal de npm é métrica inflada por CI e espelhos).
    A motivação declarada da aquisição — agentes — é a base da ressalva de D2 e do efeito `e3.1.2`.

**Sobre a nota do Brasil.** Além da fonte 13, usei uma matéria da Agência Brasil de 01/09/2025
(`https://agenciabrasil.ebc.com.br/economia/noticia/2025-09/maior-adesao-de-empresas-e-desafio-para-expansao-do-open-finance`)
com os números de consentimentos ativos de 2024 no Open Finance: 40,8 milhões de pessoas físicas
como receptoras e 37,6 milhões como transmissoras; 403,2 mil e 406,7 mil consentimentos de pessoas
jurídicas, respectivamente; e o desafio declarado de que de 50% a 60% das operações não apresentam
erro, contra os 99,5% do cartão. Agência pública, número de terceiro (Init) na parte da taxa de
erro. Como ela entra no documento apenas como contexto da nota brasileira e não sustenta nenhum
efeito da roda, não a numerei entre as dezessete âncoras — mas ela foi aberta e lida, e está
registrada aqui para que possa ser conferida.

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista

A skill exige entrevista antes de pesquisar. Esta rodada é não-interativa: não havia interlocutor
para responder. Os parâmetros foram fornecidos integralmente na mensagem de abertura e são
reproduzidos abaixo tal como recebidos, sem preenchimento por suposição minha. O único campo que
assumi foi a data (18/09/2026, do relógio da máquina).

| Campo | Valor confirmado |
|---|---|
| tema | Soberania de dados: local-first, ponta-a-ponta e o fim da senha (tema 17 de 19; família "Pessoas e dados") |
| recorte | Global, com uma nota sobre o Brasil |
| horizonte | 2031 |
| público | Quem projeta mídia e interação |
| região | global |
| objetivo | Mapa de futuro por Futures Wheel no formato da disciplina CIN0055, três ordens, a partir de uma inovação/tema (não de um setor) |
| exclusões | O que já é comum em produto de massa (régua da disciplina); ideias óbvias que serviriam para qualquer tema; nenhuma outra exclusão |
| viés desejado | neutro |
| disrupção suspeita | nenhuma indicada — descobrir |
| critério de mudança de ideia | evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada (só melhora o que existe) |
| profundidade | três ordens |
| zona de interesse | Pessoas e dados |
| autor / skill | hfm / futurizacao-hfm |

**Registro de incerteza.** Em rodada interativa eu teria feito três perguntas que não pude fazer:
(a) o mapa deve tratar identidade estatal (EUDI, gov.br) como parte do tema ou como vizinho? —
assumi **parte**, porque ela ocupa exatamente a ranhura que a passkey abre; (b) "nota sobre o
Brasil" significa uma seção própria ou observações distribuídas? — assumi **distribuídas**, por
economia de estrutura; (c) o experimento deve ser executável por um aluno sozinho? — assumi **sim**,
porque alimenta o movimento 3.

### 12.2 Consultas executadas

**Buscas (WebSearch), na ordem:**

1. `FIDO Alliance passkey adoption report 2026 state of passkeys` — produtiva; levou à fonte 4.
2. `local-first software 2026 CRDT Automerge adoption conference` — produtiva; levou às fontes 2,
   3 e 17. Trouxe também menção a Local-First Conf 2026 (Berlim, julho de 2026, com Kleppmann,
   Steve Ruiz/tldraw, Jeffrey Heer/Mosaic, Iroh, Matrix) e a um track dedicado no FOSDEM 2026 —
   **não abri nenhum dos dois e por isso não os citei no corpo**.
3. `Apple Advanced Data Protection UK Investigatory Powers 2026 encryption order outcome` —
   parcialmente produtiva; a maioria dos resultados era blog de baixa qualidade. Levou à fonte 8.
4. `EU Chat Control CSAM regulation 2026 end-to-end encryption client-side scanning status` —
   **descartada por completo**. Ver 12.4.
5. `gov.br passkey chave de acesso login sem senha 2026 Brasil` — só imprensa secundária. Ver
   seção 8, item 3.
6. `Ink & Switch Keyhive Beelay local-first access control encryption 2026` — produtiva; fonte 7.
7. `sync engine 2026 Electric SQL Zero PowerSync Jazz local-first production adoption` — resultados
   quase todos de blogs de marketing comparativo ("melhor sync engine de 2026"), gênero
   notoriamente pouco confiável. Aproveitei só o rastro da aquisição, que fui confirmar na fonte
   primária.
8. `FIDO Credential Exchange Protocol CXP passkey portability export between password managers 2026`
   — levou à fonte 5.
9. `"electric" Databricks acquisition sync engine announcement August 2026` — levou à fonte 17.
10. `ANPD LGPD portabilidade de dados regulamento 2026 Open Finance Brasil compartilhamento` —
    resultados majoritariamente de escritórios de advocacia e blogs de fintech. Aproveitei só o
    rastro da Agência Brasil.
11. `on-device LLM WebGPU browser 2026 local AI personal data privacy Apple Foundation Models Gemini Nano`
    — levou à fonte 16; trouxe também informação sobre AFM Core / Gemini Nano e sobre WebGPU
    habilitado por padrão em Chrome, Edge, Firefox e Safari em meados de 2026, esta última só em
    fonte secundária.
12. `end-to-end encryption business model advertising personalization loss 2026 zero-knowledge cloud revenue`
    — pouco produtiva em fonte, produtiva em formulação: deu-me a articulação de que cifra
    ponta-a-ponta torna busca, analytics, auditoria, IA no servidor e permissão granular
    estruturalmente difíceis. Fui buscar quem afirmasse isso com autoridade e cheguei à fonte 15.

**Consultas programáticas:**

- API do Hacker News (Algolia), três consultas com filtro `created_at_i > 1735689600`
  (01/01/2025), seis resultados cada. Fonte 13.
- API do GitHub, três consultas a `/search/repositories`. Fonte 14.

### 12.3 Fontes abertas e efetivamente usadas

As seções 3, 4, 6, 7, 9 e 10 se apoiam nas dezessete fontes numeradas na seção 11, mais a matéria
da Agência Brasil registrada ao fim daquela seção. Não há no corpo deste documento nenhuma
afirmação apoiada em fonte que eu não tenha aberto — com **duas exceções explicitamente marcadas
no texto** como vindas de cobertura secundária: a implantação de CXF/CXP em iOS/macOS 26 e Android,
e a adoção de chave de acesso pelo gov.br. Nenhuma das duas sustenta efeito na roda.

### 12.4 Fontes descartadas, e por quê

**Descartadas por qualidade (não abertas, ou abertas e rejeitadas):**

- Todo o material sobre Chat Control retornado pela busca 4: `fightchatcontrol.eu`,
  `stateofsurveillance.org`, `closednetwork.io`, `reptile.haus`, `theydidntask.com`,
  `rvntos.io`, `lantyer.com.br`. Blogs de advocacia ou de conteúdo, com datas e números muito
  precisos e mutuamente inconsistentes. Nenhum número deste conjunto entrou no documento.
- `fdr.com.br`, `uai.com.br`, `gazetasp.com.br`, `gabrieldevs.com.br` sobre o gov.br — portais de
  conteúdo. Serviram apenas para estabelecer que *houve* uma atualização com chave de acesso em
  janeiro de 2026, marcada como não confirmada em fonte oficial.
- `buildmvpfast.com`, `kanopylabs.com`, `trybuildpilot.com`, `makerstack.co`, `stribog.com`,
  `verity.salient.community`, `cssauthor.com`, `johnny.sh` — comparativos de sync engine. Gênero
  de marketing de conteúdo. Descartados por completo.
- `sitepoint.com`, `sigmabrowser.com`, `aimagicx.com`, `localaimaster.com`, `dev.to`,
  `maddevs.io` sobre LLM local — mesma razão. Fui ao artigo do arXiv.
- `morningstar.com`, `finance.yahoo.com`, `businesswire.com`, `descope.com`, `mojoauth.com`,
  `securityboulevard.com` sobre passkeys — releases e conteúdo de fornecedor. Fui ao comunicado da
  própria FIDO Alliance e à norma do W3C.
- `papermark.com`, `fast.io`, `uploadex.net`, `paperclip.com` sobre cifra e nuvem — marketing de
  fornecedor de armazenamento.
- `fourweekmba.com`, `startuphub.ai`, `businesschief.com`, `aimagazine.com`, `blocksandfiles.com`
  sobre a aquisição — fui ao blog da Electric.
- `twitter.com/nikitabier/status/2079787406300266743` — o link original do item do HN. Não abri;
  li a discussão, que é onde está o argumento.

**Tentadas e que NÃO abriram** (registro honesto de lacuna — nenhuma sustenta nada aqui):

| URL | Resultado |
|---|---|
| `inkandswitch.com/local-first/` | HTTP 200 com corpo vazio — rota antiga |
| `cnbc.com/2026/08/04/apple-encrypted-data-legal-challenge-uk.html` | HTTP 403 |
| `europarl.europa.eu/legislative-train/...combating-child-sexual-abuse-online` | HTTP 500 |
| `consilium.europa.eu/en/policies/fight-against-child-sexual-abuse/` | HTTP 403 |
| `reddit.com/r/selfhosted` | bloqueado para a ferramenta; API pública também recusou |
| `bcb.gov.br/estabilidadefinanceira/openfinance` | carregou só o cabeçalho |
| `openfinancebrasil.org.br/` e `/o-que-e-open-finance/` | HTTP 403 |
| `servicos.acesso.gov.br/` | carregou só "Portal Logado" |
| `electric-sql.com/blog/2026/08/11/...` | redireciona para `electric.ax`; o caminho direto deu 404, o índice do blog abriu |
| `github.com/budgero/budgero` | HTTP 404 — o repositório é `tombadilo-bombadilo/budgero` |
| `signal.org/blog/signal-is-expensive/` (1ª tentativa, via consilium) | — a fonte 15 abriu na tentativa direta |

**Consequência metodológica das duas falhas europeias:** sem fonte institucional sobre o estado
legislativo do CSAR, o wildcard W1 está formulado como cenário condicional e não traz nenhuma data
nem número de tramitação. É menos preciso do que eu gostaria e é o preço de não inventar.

### 12.5 Separação entre fato, inferência e hipótese

Conforme o contrato da skill. Amostra do que foi classificado como cada coisa:

**Fatos observados e apoiados por fonte aberta:**
- WebAuthn Nível 3 é Recomendação do W3C desde 25/08/2026 [6].
- A especificação delega a recuperação de conta à parte confiante [6].
- 5 bilhões de passkeys; 49% de uso regular; 28% das organizações no sem-senha total [4].
- Automerge 3: 700 MB → 1,3 MB no caso Moby Dick; >10× no geral; julho de 2025 [3].
- PGlite em 10 milhões de downloads semanais em 25/06/2026 [17].
- Electric entrou para a Databricks em 11/08/2026, com motivação declarada de agentes [17].
- Keyhive é pré-alfa, sem auditoria à época da publicação; análise formal do BeeKEM em julho de
  2026; vínculo de identidade fora de escopo [7].
- budgero: 21 estrelas. kostos: 43 estrelas [14].
- Data Act aplicável desde 12/09/2025 [9]; eIDAS 2 em vigor desde 20/05/2024, com obrigação de
  carteira até 2026 [10].
- Apple retirou o ADP no Reino Unido; audiência no IPT marcada para dezembro de 2026 [8].
- Signal: ~33 milhões medidos em nov/2023, projeção de ~50 milhões para 2025 [15].
- WebLLM: até 80% do desempenho nativo [16].

**Inferências causais, argumentadas e não medidas:**
- Que a delegação da recuperação pelo W3C [6] **produz** fragmentação de fluxos de recuperação e
  concentra risco ali (base de `e5.1` e `e5.1.1`). É argumento, não observação: não medi fraude
  em atendimento de recuperação.
- Que a custódia da chave por Apple/Google [11] **desloca** o intermediário em vez de eliminá-lo
  (base de `e6.1`). Sustentada por sinal social e pela arquitetura, não por dado de mercado.
- Que a impossibilidade de monetizar dado cifrado [15] **empurra** a receita para assinatura e
  armazenamento (base de `e1.1`). A fonte afirma a causa do não-uso histórico; a direção da saída
  é minha.
- Que a consolidação de motores de sincronia [17] **reintroduz** dependência (base de `e3.1`). Um
  evento não é tendência; está marcado com sinal forte mas confiança média por isso.

**Hipóteses prospectivas, com confiança proporcional à incerteza:**
- Toda a terceira ordem, sem exceção — vinte e um efeitos, dos quais dezesseis estão em
  `confianca: baixa` e cinco em média. Os cinco em média (`e1.2.1`, `e2.1.2`, `e5.1.1`, `e5.1.2`,
  `e6.1.1`) são os que têm mecanismo causal curto e já visível.
- Os três cenários da seção 9.
- Os três wildcards.

Nenhuma afirmação deste documento diz que uma dessas arquiteturas **funciona melhor** para o
usuário em alguma medida de bem-estar, segurança efetiva ou satisfação. Existência de tecnologia
não é evidência de eficácia, e esse limite vale aqui como valeria em tema clínico.

### 12.6 Efeitos removidos ou rebaixados na contestação adversarial

Registro do que não sobreviveu, conforme a §4 da skill.

**Removidos:**

1. *"O self-hosting deixa de ser nicho de entusiasta e vira opção de consumo."* — Removido. A
   evidência disponível aponta para o contrário: o item de maior ressonância sobre o assunto
   argumenta que "the future is not self-hosted" (463 pts, 448 cmts, 25/07/2025) [13], e o público
   do próprio r/selfhosted é de entusiastas por definição. Eu estava confundindo a existência de
   software auto-hospedável com a disposição de alguém a operá-lo.
2. *"Vazamento de dado deixa de ser notícia porque não há o que vazar."* — Removido por ser falso
   como escrito: metadado vaza, e a fonte 4 registra 33% de consumidores com comprometimento de
   conta no último ano, o que é problema de credencial e não de conteúdo. O efeito sobreviveu
   transformado, no Painel do Servidor da seção 10.
3. *"A busca no servidor é substituída por busca cifrada pesquisável."* — Removido. Não encontrei
   nenhuma fonte aberta que sustentasse maturidade de cifra pesquisável em produto. Era plausível,
   soava técnico, e não tinha nada embaixo. Este é o tipo de efeito que a IA produz com mais
   facilidade e que mais merece desconfiança.
4. *"A LGPD passa a exigir local-first para dado sensível."* — Removido. É o wildcard do briefing,
   e wildcard não vira efeito da roda. Além disso, eu não abri nenhuma fonte sobre uma proposta
   nesse sentido no Brasil; afirmá-lo seria inventar tramitação.
5. *"O modelo de negócio de publicidade colapsa."* — Removido por extrapolação grosseira. A cifra
   ponta-a-ponta atinge o acervo do usuário, não o rastreamento de comportamento na web; e a
   publicidade contextual e por sinal de primeira parte não depende de ler o acervo cifrado de
   ninguém. `e1.1` ficou no lugar, com escopo muito menor e verbo mais fraco ("desloca a receita",
   não "colapsa").

**Rebaixados:**

- `e1` — prazo mantido em 2029 e **declarado como a datação mais frágil do mapa** (seção 7). Não o
  mudei para 2033 porque isso desalinharia toda a cadeia abaixo dele; deixei o erro exposto em vez
  de escondê-lo numa reordenação.
- `e4.1` — de sinal médio para **fraco**, pela crítica de que a indústria historicamente esconde
  conflito em vez de exibi-lo.
- `e4.1.1` — prazo empurrado de 2032 para **2034** e confiança mantida em baixa, pela mesma razão.
- `e3.1` — mantido em sinal forte, mas com confiança **média** e não alta: um evento de aquisição
  não estabelece consolidação.
- `e6` — de confiança alta para **média**. Tecnicamente o provedor de identidade terceiro já é
  dispensável hoje; socialmente, "entrar com o Google" é conveniência que não desaparece por ser
  desnecessária. O prazo foi para 2030.

**Cadeias interrompidas por falta de evidência (não ramificadas de propósito):**

- De `e1.2.1` (varredura no cliente) para uma quarta ordem sobre liberdade de expressão. Motivo:
  toda a evidência disponível sobre o estado legislativo europeu é secundária e de má qualidade
  (12.4). Ramificar a partir dela seria construir três níveis sobre areia.
- De `e6.2.1` (trilho estatal de identidade) para efeitos sobre participação política e
  anonimato eleitoral. Motivo: sai do escopo de mídia e interação e eu não teria como sustentá-lo.
- De `e2.1.2` (desigualdade de hardware) para efeitos sobre mercado de aparelhos no Sul Global.
  Motivo: não abri nenhuma fonte sobre distribuição de capacidade de hardware por região, e a nota
  sobre o Brasil não comporta essa carga.

### 12.7 Limitações declaradas

1. **Nenhuma fonte acadêmica revisada por pares sobre adoção de local-first ou de passkeys.** Não
   busquei em base indexada (Scopus, ACM DL, IEEE). O melhor que tenho é um artigo do arXiv sobre
   um motor de inferência [16], que não é sobre adoção. Isto é uma lacuna real e ela rebaixa a
   confiança geral do mapa para **média**.
2. **O sinal social é anglófono e de desenvolvedor.** Hacker News, GitHub. Não tenho sinal de
   usuário comum, nem de usuário brasileiro, sobre nenhum dos três movimentos.
3. **Recorte global com nota sobre o Brasil, e a nota é a parte mais fraca.** Os dois pontos
   brasileiros — gov.br e Open Finance — estão apoiados, respectivamente, em imprensa secundária e
   em número de 2024 publicado em 2025. Nenhum dos dois sustenta efeito da roda.
4. **Não há medição de eficácia em nenhuma direção.** Este mapa não afirma que arquitetura
   local-first ou ponta-a-ponta deixa alguém mais seguro, mais satisfeito ou mais livre. Afirma
   onde ela muda relações e quanto custa a mudança.
5. **A datação é a dimensão mais fraca de todo o documento.** Prazos de efeito de segunda e
   terceira ordem são estimativas argumentadas, não projeções. Eu confio na **ordem causal** dos
   efeitos; confio pouco nos anos.
6. **Vinte e quatro horas, uma sessão, sem interlocutor.** A entrevista não pôde ser feita, a
   contestação adversarial foi feita por mim contra o meu próprio texto, e não houve terceiro para
   apontar o que eu não vi. A seção 7 é o melhor que consegui fazer sozinho, e é sabidamente menos
   do que uma crítica externa faria.
