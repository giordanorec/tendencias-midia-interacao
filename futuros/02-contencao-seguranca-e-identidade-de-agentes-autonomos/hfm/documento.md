---
tema: Contenção, segurança e identidade de agentes autônomos
slug: contencao-seguranca-e-identidade-de-agentes-autonomos
autor_login: hfm
zona_de_interesse: Agentes
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 12
efeitos_ordem_3: 16
tecnologias_citadas: [Web Bot Auth, HTTP Message Signatures (RFC 9421), OAuth 2.0, WIMSE, MCP, MCP-I/KYA-OS, DIDs, Verifiable Credentials, Firecracker, gVisor, E2B, WebAssembly, AgentDojo, Progent, CaMeL, FIDES, BrowseSafe, CAPTCHA/Turnstile, HTTP 402, OWASP Top 10 for LLM Applications]
fontes: 17
confianca: media
experimento: Portaria de agentes — um site que exige credencial assinada de quem não é humano, e mede quem ele barra por engano
skill_usada: futurizacao-hfm
publico_ok: false
---

## 1. Resumo

Um agente que executa comandos, navega e chama APIs é um ator no mundo, e o mundo foi construído
para atores que são pessoas ou servidores — não para algo no meio. Três rupturas correm juntas até
2031. A primeira: o agente deixa de ser um recurso do usuário e vira um *principal* de segurança,
com identidade, credencial, delegação e trilha de auditoria próprias — há rascunho de IETF tratando
agente como workload (março de 2026), iniciativa formal do NIST desde fevereiro de 2026, e uma
camada de identidade verificável (MCP-I, hoje apresentada como KYA-OS) doada à Decentralized
Identity Foundation. A segunda: a injeção de prompt não é um bug a ser corrigido e sim uma
propriedade arquitetural — instrução e dado dividem o mesmo canal —, o que empurra a defesa para
fora do modelo, em sandbox por tarefa e autorização determinística antes da chamada de ferramenta;
a Anthropic reporta 1% de sucesso de ataque no Opus 4.5 e diz explicitamente que 1% ainda é risco
material. A terceira: a web passa a discriminar tráfego pela natureza do ator — bots já são 53% do
tráfego (Imperva, 2026) e a infraestrutura aprendeu a verificar agentes por assinatura
criptográfica, cobrar deles em HTTP 402 e bloqueá-los. Os efeitos que mais interessam a quem projeta
interação não estão na criptografia: estão no consentimento (autorizar tarefa, não aplicativo), na
exclusão (quem depende de agente para acessar é barrado junto com o abuso) e na emergência de uma
web de duas camadas, uma legível por máquina e outra voltada a pessoas.

## 2. O tema

O objeto aqui é **conter e identificar a máquina que age** — não o ofício de programar com agentes
(tema 1), não avaliar se o agente acertou (tema 3), não a identidade humana sem terceiros (tema 17).

O que mudou é simples de enunciar e difícil de absorver: até 2023 um modelo de linguagem produzia
texto, e o pior desfecho de uma resposta ruim era uma resposta ruim. Desde que o agente ganhou mãos
— shell, navegador, chamada de API, cartão de crédito —, cada nova mão é uma superfície de ataque
nova, e o desfecho de uma resposta ruim é um arquivo apagado, um segredo exfiltrado, uma compra
feita. Isso obriga a infraestrutura da web a responder uma pergunta que ela nunca precisou
responder: *quem é você, e quem autorizou você a fazer isso?*

Por que isso é assunto de mídia e interação, e não só de segurança da informação. Três razões.

**Porque a permissão virou interface.** A caixa de diálogo "este app quer acessar seus contatos" foi
projetada para um mundo de aplicativos estáveis, instalados uma vez. Um agente não é estável: ele
decide, em tempo de execução, qual ferramenta chamar. Autorizar um agente é autorizar uma
*intenção*, não um binário — e ninguém sabe ainda como se desenha essa tela. Este é o problema de
design mais consequente da década, e ele está sendo resolvido hoje, mal, por engenheiros de
autenticação.

**Porque a distinção humano/máquina passou a ter efeito material.** Quando um site consegue provar
criptograficamente que quem está pedindo é um agente, ele pode cobrar diferente, servir conteúdo
diferente ou recusar. Isso é uma decisão de produto com consequência de cidadania: pessoa com
deficiência, pessoa que não lê o idioma do site, pessoa com baixo letramento digital — todas
dependem de intermediação por máquina, e a mesma trava que barra o abuso barra a delegação legítima.

**Porque a autonomia prometida está sendo negociada para baixo, em silêncio.** Todo produto agêntico
que encontra injeção de prompt no mundo real recua para "confirme antes de agir". O recuo é
apresentado como recurso de segurança; funcionalmente, é a transferência do risco residual para o
usuário, via um clique que ele vai dar sem ler. Quem projeta interação é quem decide se essa
confirmação é informação ou ritual.

Merece mapa de futuro, e não levantamento de estado da arte, porque a pergunta central não é "que
ferramentas existem" — existem dezenas, e o levantamento envelhece em três meses. A pergunta é o que
acontece com a web, com o consentimento e com o acesso quando a identidade da máquina se tornar
infraestrutura assumida. Essa cadeia causal ainda não aconteceu, e é onde as decisões de projeto
ainda estão em aberto.

## 3. Onde isso está hoje

### 3.1 O tráfego já é majoritariamente não-humano

O Bad Bot Report 2026 da Imperva registra que **bots respondem por 53% do tráfego web**, contra 47%
humano, e que **27% dos ataques automatizados miram APIs** em vez de interfaces de usuário. O
relatório é de fornecedor de mitigação de bots — tem interesse comercial no número —, mas a direção
é convergente com o que operadores de rede relatam. A conclusão que a Imperva tira é reveladora do
momento: a recomendação deixa de ser "detecção de bots" e passa a ser "controle de automação",
tratando interação de máquina como realidade operacional, não como anomalia a eliminar.

O ponto não é o número exato. É que a premissa implícita de todo produto digital — "do outro lado há
uma pessoa" — deixou de valer para a maioria das requisições, e ninguém reprojetou nada em cima
disso.

### 3.2 A identidade de agente saiu do laboratório e entrou nos organismos de padrão

Quatro sinais institucionais, todos de 2026, todos verificados:

- **IETF.** O rascunho `draft-klrc-aiagent-auth-00` (2 de março de 2026, informacional) propõe não
  criar protocolo novo: tratar o agente como *workload*, com identificador WIMSE, credenciais de vida
  curta (X.509 ou JWT), mTLS ou HTTP Message Signatures para prova de posse de chave, e OAuth 2.0
  como moldura de delegação — incluindo o caso em que o agente age *em nome de* um usuário e o caso
  em que ele age por si. Acrescenta observabilidade via OpenID Shared Signals (RISC/CAEP) e log de
  auditoria que registra ação, autoridade delegada e mudança de autorização.
- **NIST.** A AI Agent Standards Initiative foi lançada em 17 de fevereiro de 2026 pelo Center for AI
  Standards and Innovation; o NCCoE publicou paper conceitual propondo adaptar identidade e
  autorização existentes para agentes, em quatro eixos: identificação (distinguir agente de humano),
  autorização (estender OAuth 2.0 e controle por política tratando o agente como principal digital
  novo), delegação de acesso (ligar identidade do usuário ao agente sem escalada de privilégio) e
  registro (atribuir ação específica a agente específico, para auditoria e perícia). Os entregáveis
  concretos — overlays de controle SP 800-53 para sistemas de um agente e de múltiplos agentes —
  **ainda não têm data de publicação**.
- **Decentralized Identity Foundation.** Em março de 2026 a Vouched doou o framework MCP-I ao DIF,
  sob o Trusted AI Agents Working Group. A especificação dá ao agente identidade verificável via DID
  e Verifiable Credentials, com credenciais de delegação que transferem autoridade de um principal
  humano para o agente, e verificação contínua a cada ação em vez de uma vez por sessão.
- **Infraestrutura de borda.** A Cloudflare introduziu, em 28 de agosto de 2025, a categoria de
  *signed agents*: distinta de "bots verificados", exige que o agente seja dirigido por um usuário
  final (não por uma empresa), que a infraestrutura assine as requisições HTTP via Web Bot Auth, e
  que cumpra a política de agentes assinados. O mecanismo é RFC 9421 (HTTP Message Signatures): o
  agente assina a requisição, o site busca a chave pública em
  `/.well-known/http-message-signatures-directory` no domínio declarado no cabeçalho
  `Signature-Agent`, verifica a assinatura e confere o carimbo de tempo. Isso encerra o regime em que
  identificação de crawler era uma string de User-Agent que qualquer um podia escrever.

### 3.3 A monetização diferencial já existe como produto

Em 1º de julho de 2025 a Cloudflare anunciou *pay per crawl*, em beta privado: o publicador define
preço, o crawler recebe **HTTP 402 Payment Required** com a tarifa e pode repetir a requisição
declarando intenção de pagar — ou declarar a intenção preventivamente. O texto da própria empresa é
explícito sobre a ambição: agentes com orçamento negociando acesso a recursos digitais de forma
programática.

Ou seja: a peça técnica que permite cobrar mais de um agente do que de uma pessoa **já está
implantada em produção na maior camada de borda da web**, antes que exista qualquer discussão
pública sobre quem deve ser barrado por ela.

### 3.4 A injeção de prompt: o que está resolvido e o que não está

Estado maduro: nada. Estado real, com números:

- A Anthropic publicou em 24 de novembro de 2025 sua abordagem (treino por reforço contra injeções
  simuladas, classificadores sobre conteúdo não confiável, red teaming humano contínuo) e reporta
  **1% de taxa de sucesso de ataque** para o Claude Opus 4.5 contra um atacante Best-of-N interno com
  100 tentativas por ambiente. A frase que importa é deles: *"uma taxa de 1% — ainda que melhora
  significativa — representa risco material. Nenhum agente de navegador é imune a injeção de
  prompt."*
- O BrowseSafe (arXiv:2511.20597, v2 de 12 de agosto de 2026, Zhang, Tenenholtz, Polley, Ma, Yarats e
  Li) mede a detecção em conteúdo web realista: 14.719 amostras anotadas, 11 tipos de ataque, 9
  estratégias de injeção, 5 estilos linguísticos, extraídas de dados de produção de agentes de
  navegador. Achados: elementos distratores realistas derrubam a acurácia de 90,5% para 81,3%;
  **manipulação de conteúdo *visível* escapa à detecção com quase o dobro da frequência da injeção
  oculta** (69–75% contra 87–92% de acurácia); ataques multilíngues caem a 76,0% de acurácia
  balanceada. O detector proposto chega a F1 0,904 com latência abaixo de 1s, acima de modelos de
  fronteira.
- A avaliação adaptativa de defesas *out-of-band* (arXiv:2606.26479) é o contraponto necessário. Ela
  mostra Progent reduzindo o sucesso de ataque no AgentDojo de 25,8% para 4,2% com Qwen2.5-7B, e um
  ataque adaptativo próprio chegando a apenas 2,6% — mas os próprios autores chamam isso de *"um
  ponto de dado de pequena escala, em um modelo fraco, com um único template de ataque caixa-preta"*,
  e alertam que todas as defesas out-of-band foram validadas só em benchmark estático, exatamente o
  que fez as defesas in-band parecerem eficazes até que ataques adaptativos as quebrassem com 90%+ de
  sucesso.
- No ecossistema de agentes de programação (arXiv:2601.17548, Maloyan e Namiot, janeiro de 2026): mais
  de 85% dos ataques identificados comprometem ao menos uma plataforma grande; ataques adaptativos
  contornam defesas publicadas a 78–93%; skills e ferramentas são classificadas como subprotegidas —
  descrições maliciosas de ferramentas MCP, arquivos de regra em repositório, comentário em código
  como vetor. O paper avalia plataformas com severidades distintas (Cursor crítico por
  auto-aprovação e MCP não isolado; Claude Code baixo por confirmação obrigatória e MCP isolado), o
  que sugere que a diferença não está no modelo e sim na *arquitetura de permissão do produto*.

### 3.5 O isolamento: o que existe e o que custa

Três camadas em uso: contêiner (namespace + cgroup, ~500ms de partida, só serve para código
confiável), gVisor (kernel em espaço de usuário interceptando syscalls, ~100ms), microVM
Firecracker/E2B (kernel dedicado por carga, ~150ms, com snapshot-restore em 5–30ms). O estudo
comparativo de segurança de sandboxes de código para IA (arXiv:2606.08433, Andronchik e Lokhmakov, 9
de junho de 2026) avalia cinco produtos por superfície de ataque, vazamento, empilhabilidade,
histórico de CVE, cadência de correção e resistência a fuzzing — é a primeira tentativa que
encontrei de comparar essas escolhas com método, em vez de por alegação de fornecedor.

A direção da pesquisa é clara: mover a decisão de segurança para *antes* da ação. "Before the Tool
Call" (arXiv:2603.20953, Uchi Uchibeke, 24 de março de 2026) propõe autorização determinística
pré-execução, por política em vez de guardrail probabilístico, com tratamento sistemático de negação.
"Same-Origin Policy for Agentic Browsers" (arXiv:2606.14027, Wang, Chen, Li, Song e Gong, 1º de julho
de 2026) recupera a política de mesma origem — a peça que tornou o navegador habitável nos anos 1990
— e a reescreve para restringir com que sites um agente pode interagir dentro de uma mesma tarefa.

### 3.6 O que a régua da disciplina deixa de fora

Maduro, e portanto fora da raiz: firewall, antivírus, WAF, OAuth para humano, TLS, contêiner,
CAPTCHA como categoria. O que fica é tudo que trata o agente como principal de segurança — identidade
própria, permissão própria, isolamento por tarefa, auditoria atribuível ao agente e não só à conta.

### 3.7 O estado do consenso normativo: nenhum

O survey de identidade de IA (arXiv:2604.23280, Otsuka, Toyoda e Leung, 28 de abril de 2026) percorre
EU AI Act, GDPR, eIDAS 2024, NIST, OpenID Connect, C2PA, Zero Trust, OWASP, IMDA, a lei japonesa e a
regulação chinesa, e conclui pela fragmentação: falta verificação padronizada para distinguir humano
de não-humano, falta interoperabilidade entre setores, falta alinhamento entre jurisdições, falta
infraestrutura técnica consistente. Não há, em setembro de 2026, um padrão vencedor — há uma corrida.

**Nota sobre o Brasil.** O PL 2338/2023, marco legal da IA, foi aprovado pelo Plenário do Senado e
remetido à Câmara dos Deputados em 17 de março de 2025 (Ofício SF nº 235); a tramitação no Senado
está encerrada e o texto aguarda revisão na Câmara. Ele prevê comunicação obrigatória de incidentes
graves de segurança à autoridade competente — incluindo risco à vida, interrupção de infraestrutura
crítica e dano patrimonial ou ambiental grave — e mantém a responsabilidade civil em relação de
consumo sob o Código de Defesa do Consumidor (Lei 8.078/1990). Isso significa que, no Brasil, o dano
causado por agente em contexto de consumo já tem um endereço jurídico definido — o fornecedor — o que
enfraquece, aqui, a hipótese de personalidade jurídica do agente e fortalece a de cadeia de
delegação. A ANPD incluiu IA e tecnologias emergentes como um dos quatro eixos de fiscalização do
biênio 2026–2027.

## 4. As disrupções-raiz

### D1 — O agente vira principal de segurança, com identidade e delegação próprias

**O que rompe.** A premissa de que todo ator autenticado é ou uma pessoa (OAuth, senha, passkey) ou
um serviço estático (chave de API, certificado). O agente é um terceiro tipo: age *em nome de* uma
pessoa, decide em tempo de execução, e precisa ser distinguível tanto dela quanto de outro agente da
mesma pessoa. Isso quebra o modelo de conta: hoje, quando um agente faz algo, o log diz o nome do
usuário.

**Por que agora e não há cinco anos.** Porque só em 2025–2026 o agente passou a *fazer* coisas com
consequência externa — comprar, publicar, apagar. Enquanto ele só sugeria texto, a identidade do
usuário bastava. Além disso, a peça técnica ficou pronta: RFC 9421 padronizou assinatura de mensagem
HTTP, OAuth 2.0 amadureceu a delegação, DIDs e VCs saíram do nicho. O rascunho da IETF é explícito ao
dizer que não precisa de protocolo novo — precisa de composição.

**O que ainda falta.** Falta o emissor. Não está decidido quem assina o agente: o fabricante do
modelo, a plataforma que o hospeda, o empregador, o próprio usuário. Falta também o entregável do
NIST (overlays SP 800-53), sem data. E falta a questão que ninguém formulou direito: o que acontece
quando o agente de uma pessoa encontra o agente de outra — não há hoje protocolo de encontro entre
principais não-humanos com interesses opostos.

### D2 — A fronteira instrução/dado não fecha, e a defesa migra para fora do modelo

**O que rompe.** A expectativa, herdada de sessenta anos de segurança de software, de que toda classe
de vulnerabilidade acaba ganhando sua correção estrutural — o *prepared statement* que encerrou SQL
injection. Aqui não existe o equivalente: instrução e dado dividem um único canal, a janela de
contexto, e toda mitigação reduz probabilidade sem chegar a zero. O que rompe é a própria ideia de
"corrigir": passa-se a projetar assumindo comprometimento.

**Por que agora.** Porque os números pararam de melhorar linearmente e a assimetria ficou visível: as
defesas out-of-band entregam reduções expressivas em benchmark estático, e a literatura adaptativa
mostra que a mesma aparência de eficácia precedeu a quebra das defesas anteriores a 90%+. O achado do
BrowseSafe de que ataque *visível* escapa mais que ataque oculto é particularmente corrosivo: ele
inverte a intuição de que o problema é texto escondido, e sugere que a detecção aprendeu a caçar a
forma errada.

**O que ainda falta.** Falta o custo do isolamento por tarefa cair o suficiente para virar padrão —
os 5–30ms de snapshot-restore do Firecracker e as propostas de isolamento WebAssembly apontam nessa
direção, mas não vi evidência aberta que sustente as reduções de ordem de magnitude alegadas por
fornecedores. E falta a resposta à pergunta que "Same-Origin Policy for Agentic Browsers" coloca: uma
política de contenção só funciona se alguém a escrever, e não está decidido quem escreve — o
fabricante, o site, ou o usuário.

### D3 — A web passa a discriminar tráfego pela natureza do ator

**O que rompe.** O princípio de indiferença da web: o servidor responde a uma requisição HTTP sem
saber nem precisar saber o que há do outro lado. Esse princípio já estava erodido por detecção
comportamental e CAPTCHA, mas era estatístico e falível. A assinatura criptográfica o encerra: com
Web Bot Auth, o site *sabe*, e o que ele sabe é acionável — tarifa, cota, bloqueio, conteúdo
diferente.

**Por que agora.** Porque os três elementos convergiram no mesmo biênio: o volume (bots são maioria
do tráfego), o mecanismo (RFC 9421 implantado na borda, com programas de agente assinado) e o
incentivo econômico (HTTP 402 em produto, com publicadores querendo cobrar de quem treina e de quem
lê por procuração).

**O que ainda falta.** Falta a decisão política, que está sendo tomada por padrão técnico: o que fazer
com o agente *não* assinado. Se o default for bloquear, o agente pequeno, o script pessoal, o
pesquisador e a ferramenta de acessibilidade morrem junto com o abuso. Falta também a contrapartida
legal: em nenhuma jurisdição está escrito que barrar o agente de alguém pode equivaler a barrar a
pessoa.

**O que deliberadamente NÃO entrou como raiz.** Detecção de bot por comportamento, CAPTCHA, WAF,
antivírus, criptografia de transporte, contêiner: maduros. "IA para detectar IA": é melhoria de
método dentro de D3, não ruptura. Personalidade jurídica do agente: não é disrupção observável hoje —
é efeito de terceira ordem, e está na roda como tal.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O agente vira principal de segurança, com identidade, credencial e delegação próprias
    efeitos:
      - id: e1
        ordem: 1
        efeito: Toda ação de agente passa a carregar credencial verificável distinta da credencial do usuário que a delegou
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Painéis de administração de identidade passam a listar agentes ao lado de pessoas, com ciclo de vida, expiração e revogação próprios
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A governança corporativa incorpora a população de agentes como categoria auditável em relatório de conformidade
                sinal: medio
                prazo: 2031
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: A formação em design e em segurança passa a tratar o não-humano como usuário legítimo a ser projetado, e não como abuso a ser filtrado
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Fabricantes de modelo, plataformas e empregadores disputam quem tem o direito de assinar o agente
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Forma-se um oligopólio de atestação em que trocar de fabricante custa a reputação acumulada do agente
                sinal: medio
                prazo: 2032
                confianca: baixa
              - id: e1.2.2
                ordem: 3
                efeito: Surge pressão regulatória por portabilidade de identidade de agente, análoga à portabilidade numérica em telefonia
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A interface de consentimento deixa de autorizar um aplicativo e passa a autorizar um escopo por tarefa, com prazo e limite de gasto
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O desenho de permissão vira superfície de produto disputada, com atrito medido como métrica de conversão
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A fadiga de autorização repete o destino do banner de cookie e o aceite indiscriminado vira o padrão de fato
                sinal: medio
                prazo: 2031
                confianca: media
          - id: e2.2
            ordem: 2
            efeito: Seguradoras e auditorias passam a exigir trilha de delegação legível para cobrir dano causado por agente
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: A responsabilidade civil se organiza em torno da cadeia de delegação e não da autoria do ato
                sinal: medio
                prazo: 2032
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Agentes de pessoas diferentes passam a se encontrar em transações e precisam provar um ao outro quem representam
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Nasce um mercado de reputação de agente portável entre plataformas
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A reputação da máquina passa a condicionar o acesso da pessoa, criando um escore de segunda ordem sem devido processo
                sinal: medio
                prazo: 2033
                confianca: baixa
  - disrupcao: A fronteira entre instrução e dado não fecha, e a defesa migra do modelo para a contenção externa
    efeitos:
      - id: e4
        ordem: 1
        efeito: A defesa migra de ensinar o modelo a resistir para impedir a ação fora do modelo, por política determinística
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A unidade de isolamento encolhe de máquina para sessão e de sessão para tarefa
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Ser descartável vira propriedade esperada do ambiente de execução, como a aba anônima foi para o navegador
                sinal: medio
                prazo: 2031
                confianca: media
              - id: e4.1.2
                ordem: 3
                efeito: O custo energético e financeiro do isolamento por tarefa vira critério explícito de projeto de produto
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A autorização pré-ação antes de cada chamada de ferramenta vira camada padrão de plataforma, não recurso diferencial
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Escrever política de capacidade se torna competência de projeto de interação e não apenas de segurança da informação
                sinal: medio
                prazo: 2032
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Conteúdo público passa a ser tratado como entrada hostil por padrão em qualquer produto que tenha agente
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Publicar deixa de ser neutro e páginas passam a ser classificadas por risco de injeção antes de serem lidas por agente
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Emerge um selo de conteúdo seguro para agente que privilegia grandes publicadores e penaliza a web pequena
                sinal: medio
                prazo: 2032
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: A promessa de autonomia recua comercialmente e produtos voltam a exigir confirmação humana em ações irreversíveis
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: A confirmação humana vira ritual esvaziado e o consentimento informado perde sentido prático em escala
                sinal: medio
                prazo: 2031
                confianca: media
  - disrupcao: A web passa a discriminar tráfego pela natureza do ator, com verificação criptográfica na borda
    efeitos:
      - id: e6
        ordem: 1
        efeito: Sites passam a saber criptograficamente que quem pede é um agente e de quem ele é
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O acesso passa a ser precificado pela natureza do ator, com tarifa e cota diferentes para agente
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Forma-se uma web de duas camadas, uma barata e legível por máquina e outra cara e voltada a pessoas
                sinal: medio
                prazo: 2032
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Quem depende de agente para acessar por deficiência, idioma ou letramento é barrado junto com o abuso
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Acessibilidade passa a incluir o direito de delegar a uma máquina, e isso entra em norma técnica e em litígio
                sinal: medio
                prazo: 2032
                confianca: baixa
              - id: e6.2.2
                ordem: 3
                efeito: Nasce um mercado cinzento de parecer humano, espelhando o mercado de resolução terceirizada de CAPTCHA
                sinal: medio
                prazo: 2031
                confianca: media
      - id: e7
        ordem: 1
        efeito: A distinção entre humano e agente vira dado de projeto tão básico quanto o tamanho de tela
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Interfaces passam a ter duas saídas para a mesma informação, uma para o olho humano e outra para consumo de agente
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: O design visual perde centralidade relativa e a especificação semântica volta a ser o artefato disputado
                sinal: medio
                prazo: 2033
                confianca: baixa
```

### O que o bloco não consegue dizer

**A roda separa três disrupções que, no mundo, são a mesma coisa vista de ângulos diferentes.** D1
(identidade) existe em boa medida *porque* D2 (a injeção não fecha) tornou impossível confiar no
comportamento do agente — se o modelo fosse confiável, bastaria a identidade do usuário. E D3
(discriminação de tráfego) só é implementável porque D1 entregou o mecanismo de assinatura. A
estrutura em árvore força uma separação que a causalidade real não tem: e6 é tanto filho de D3 quanto
de e1.

**Há um cruzamento que a árvore esconde e que é o achado mais importante deste mapa.** Os efeitos
e2.1.1 (fadiga de autorização) e e5.2.1 (confirmação vira ritual) são o mesmo fenômeno chegando por
dois caminhos independentes — pela identidade e pela contenção. Quando duas cadeias causais distintas
convergem para o mesmo desfecho, a confiança nesse desfecho deveria ser maior do que a de cada ramo
isolado. Registrei ambos com confiança `media` em vez de `alta` porque a evidência é analógica (o
banner de cookie, o diálogo de permissão de app), não medida; mas se eu tivesse que apostar em um
único efeito deste mapa, seria neste.

**Os prazos são o elemento mais frágil de tudo.** Eles saem de três âncoras: o rascunho da IETF
expira em setembro de 2026 e, se virar trabalho de grupo, entrega em 2–3 anos; o NIST não tem data
para os overlays; a Cloudflare já está em produção. Para efeitos de primeira ordem ancorados em
produto existente usei 2028; para tudo de terceira ordem, 2031–2033 é chute educado, e a `confianca:
baixa` ali é literal.

**Uma cadeia foi interrompida por falta de evidência.** Tentei derivar de e3.1 (reputação de agente)
um ramo sobre seguro paramétrico para atos de agente — apólice que paga automaticamente quando a
trilha de delegação prova o ato. Não encontrei nenhum produto, piloto ou paper aberto que sustentasse
a cadeia. Está registrado no anexo como caminho abandonado, não na roda.

## 6. Sinais fracos e wildcards

### Sinais fracos

**O ataque visível escapa mais que o oculto.** O achado do BrowseSafe — manipulação de conteúdo
visível evade detecção a quase o dobro da taxa da injeção escondida (69–75% contra 87–92%) — é um
sinal pequeno com implicação grande: significa que a defesa aprendeu a caçar *esteganografia* quando
o ataque eficaz é *retórica*. Se isso se confirmar, a fronteira entre "página persuasiva" e "ataque"
deixa de ser técnica e vira editorial — e passa a ser problema de quem escreve e projeta conteúdo,
não de quem escreve filtro.

**A especificação que muda de nome no meio do caminho.** O MCP-I, doado ao DIF em março de 2026,
aparece em setembro de 2026 no seu próprio site institucional como **KYA-OS** ("Know Your Agent —
Operating System"), agnóstico de protocolo, tendo o MCP apenas como primeira integração. Rebatismo
com ampliação de escopo, a seis meses da doação, em um padrão que ainda não tem adoção medida: é
sinal de campo em disputa, não de convergência. O acrônimo escolhido — decalcado de *Know Your
Customer*, a regulação bancária antilavagem — diz para onde essas pessoas acham que isso vai.

**A recomendação da Imperva de trocar "detecção de bot" por "controle de automação".** Vindo de um
fornecedor cujo produto histórico é detecção, é uma concessão de que o modelo adversarial acabou. A
frase é de marketing; a mudança de categoria que ela admite, não.

**A política de mesma origem sendo redescoberta.** Que pesquisadores de segurança em 2026 voltem a
uma peça de 1995 para conter agentes sugere que a resposta não virá de IA para vigiar IA, e sim de
compartimentação clássica. Se esse caminho prevalecer, o agente do futuro será menos capaz e mais
previsível do que o de hoje — o oposto da trajetória prometida.

**O NCCoE listando "identificação" como eixo separado de "autorização".** Tecnicamente redundante —
autorizar já pressupõe identificar. A separação só faz sentido se o objetivo de política for permitir
que se *saiba* que há um agente, independentemente de ele ter permissão. Isso é um requisito de
divulgação, não de segurança, e é o embrião da obrigação de o agente se declarar.

### Wildcards

**O primeiro processo contra um agente, e não contra seu dono.** Baixa probabilidade e alto impacto:
uma ação judicial em que o polo passivo seja a identidade do agente — porque a cadeia de delegação se
provou circular, ou porque o agente operou com credencial emitida por terceiro que ninguém controla.
Não é previsão: no Brasil, a competência do CDC sobre relação de consumo torna esse desfecho
*menos* provável, porque já há um responsável definido. Mas em jurisdição sem essa âncora, o impacto
de um único precedente seria desproporcional — ele criaria, por via judicial, algo próximo de
personalidade limitada para software.

**Um incidente de escala em que o vetor seja a credencial e não o modelo.** Comprometimento do emissor
de identidade de agentes de uma plataforma grande: todos os agentes assinados por ela passam a ser
confiáveis e maliciosos ao mesmo tempo. O efeito imediato seria a revogação em massa e a paralisia de
um segmento inteiro da web agêntica — e o efeito duradouro seria matar a centralização de atestação
antes que ela se consolide, empurrando o campo para DIDs. Probabilidade baixa; impacto invertendo a
direção de D1.

**A proibição regulatória de discriminação por natureza do ator.** Uma jurisdição decide que barrar o
agente de uma pessoa equivale a barrar a pessoa, e proíbe tarifa diferencial para acesso delegado. Se
acontecer, D3 inteira é reescrita: a assinatura continua existindo, mas para auditoria, não para
portaria. Tratei como wildcard e não como cenário porque não há hoje nenhum anteprojeto nesse sentido
que eu tenha conseguido abrir.

## 7. Contra o próprio mapa

**Extrapolação linear do presente: e6.1 e a precificação diferencial.** Eu vi um produto em beta
privado (pay per crawl, julho de 2025) e projetei dele um regime tarifário geral para 2029. Isso é
exatamente o erro de tomar existência por adoção. O HTTP 402 está no RFC desde 1997 e nunca pegou; o
fato de a Cloudflare tê-lo revivido não garante que publicadores queiram, que agentes paguem, ou que
a fricção de cobrança microtransacional se resolva. Se eu tivesse que rebaixar um efeito, seria este
— e de fato ele saiu com `confianca: media` e o filho de terceira ordem com `baixa`.

**Velocidade de adoção sem caso comparável: e1 em 2028.** Afirmar que *toda* ação de agente carregará
credencial própria em dois anos pressupõe uma velocidade de adoção de padrão de identidade que a
história não oferece. OAuth 2.0 levou cerca de uma década do rascunho à ubiquidade; passkeys, mais de
cinco anos e ainda não chegaram; DNSSEC, vinte e cinco anos e nunca chegou. O que sustenta o prazo
curto aqui é que a peça criptográfica (RFC 9421) já está implantada na borda por um ator que atende
fatia enorme da web, o que dispensa adoção distribuída — mas isso desloca o risco: passa a depender
de decisão comercial de poucas empresas, o que é uma hipótese diferente e mais frágil. **Reformulei
mentalmente e mantive 2028 apenas para o caso restrito de agentes que atravessam a borda da web
pública; para tráfego interno corporativo, o prazo honesto é 2030+, e isso não está no bloco YAML.**
Registro a imprecisão em vez de fingir que não existe.

**Disrupção que pode não se concretizar: D1, se um emissor único vencer cedo.** Todo o mapa de D1
pressupõe pluralidade de emissores e disputa. Se um único ator — um fabricante de modelo dominante,
ou a própria camada de borda — se tornar o emissor de fato em 2027, os efeitos e1.2, e1.2.1, e1.2.2 e
e3.1 evaporam: não há disputa, não há portabilidade, não há reputação transferível, porque tudo é
interno a uma plataforma. O mapa restante (D2 e D3) sobrevive, mas perde a parte mais interessante. O
sinal precoce disso seria a Web Bot Auth deixar de aceitar chaves autoemitidas.

**Disrupção que pode não se concretizar: D2, se aparecer o equivalente ao prepared statement.** Eu
tratei a inseparabilidade instrução/dado como arquitetural e, portanto, permanente. É a afirmação
mais forte deste documento e a que tem o maior custo se estiver errada. Se uma arquitetura de modelo
com canais tipados e separados em nível de atenção resolver isso — e há pesquisa nessa direção que eu
**não** consegui abrir e portanto não citei —, então D2 desaba, o isolamento por tarefa vira
desperdício, e D1 e D3 perdem metade da sua justificativa. Avalio como pouco provável até 2031, mas a
base dessa avaliação é a ausência de resultado publicado, o que é evidência fraca.

**Fonte, número ou autoria que pode estar errado.** Quatro pontos concretos: (a) o número de 53% da
Imperva vem de fornecedor de mitigação de bots, que tem interesse em um número alto, e a metodologia
não é auditável externamente — usei-o como ordem de grandeza, não como medida; (b) as taxas de
sucesso de ataque da Anthropic são de avaliação *interna*, com atacante próprio, e não são
comparáveis entre fabricantes; (c) a redução 25,8% → 4,2% do Progent vem de um modelo pequeno
(Qwen2.5-7B) e os próprios autores pedem que não seja generalizada — se ela aparecer em algum lugar
como "as defesas out-of-band reduzem ataques em 6×", a citação estará errada, e a fonte é justamente
o paper que alerta contra isso; (d) o número "85%+ dos ataques comprometem ao menos uma plataforma
grande" tem um denominador não declarado e a formulação "ao menos uma" o torna quase trivialmente
verdadeiro — é mais fraco do que parece.

**Que viés meu entrou aqui.** Três. O primeiro: escolhi trabalhar com fontes em inglês, de
instituições do Norte, e o resultado é um mapa em que a regulação aparece como EU AI Act e NIST, e o
Brasil vira nota de rodapé — quando, para quem projeta produto aqui, o CDC é provavelmente mais
determinante para o desfecho de responsabilidade do que qualquer padrão da IETF. O segundo: o tema
tem uma narrativa sedutora ("o agente vira sujeito de direito") que puxa toda a análise para a
terceira ordem jurídica, que é a parte mais especulativa; tive de cortar material nessa direção e
ainda assim sobrou mais do que a evidência sustenta. O terceiro, e o mais difícil de corrigir: este
documento foi produzido *por* um agente, sobre contenção de agentes. Há um viés estrutural em tratar
"identidade e permissão para agentes" como o desfecho natural, em vez de tratar "menos autonomia" ou
"não usar agente para isso" como opções igualmente plausíveis. A hipótese de que o mercado
simplesmente recue — que agentes com mãos fiquem restritos a ambientes fechados e a web volte a ser
lida por gente — aparece no mapa apenas como e5.2, com peso pequeno. Provavelmente deveria ter mais.

## 8. O que a máquina errou

**Afirmou que existe uma edição 2026 do OWASP Top 10 for LLM Applications e citou o ranking dela.** A
busca retornou, de forma consistente e em vários veículos, que "prompt injection e divulgação de
informação sensível ocupam os dois primeiros lugares, excessive agency saltou de 6º para 3º, unbounded
consumption de 10º para 6º, e system prompt leakage foi renomeado para hidden context exposure". Ao
abrir a página oficial do projeto, o que está publicado é a edição **2025**, com excessive agency em
6º e system prompt leakage em 7º. Duas tentativas de abrir os artigos secundários que sustentavam a
versão 2026 retornaram HTTP 403. **Desconfiei porque o ranking descrito era específico demais para
não estar na fonte primária** — quando um resumo tem mais detalhe que o documento original acessível,
o resumo é que está sob suspeita. Consequência: retirei todo o ranking 2026 do corpo do documento e
mantive apenas o que a página oficial sustenta. Não afirmo que a edição 2026 não exista; afirmo que
não a li, e o que não foi lido não entra.

**Chamou de MCP-I algo que o site institucional chama de KYA-OS.** Ao abrir
`modelcontextprotocol-identity.io/introduction` esperando a especificação MCP-I, o conteúdo se
apresenta como KYA-OS, "Know Your Agent — Operating System", agnóstico de protocolo, com o MCP como
primeira integração. Um agente menos atento teria escrito "MCP-I define DIDs e VCs para agentes" e
passado adiante — a substância bate, os mecanismos são os mesmos. O que não bate é o nome e o escopo,
e isso importa: num campo onde tudo é rascunho, escrever o nome errado de uma especificação torna a
afirmação inverificável. Transformei o erro em sinal fraco (seção 6), porque o rebatismo é
informação.

**Produziu prazos redondos e alinhados.** A primeira versão da roda tinha quase todos os efeitos de
primeira ordem em 2028, os de segunda em 2030 e os de terceira em 2032. Prazos assim não saem de
análise, saem de gerar uma tabela bonita. **O sinal de desconfiança foi a regularidade:** cadeias
causais reais não têm passo constante. Reescrevi para 2028–2030 / 2029–2031 / 2031–2033 com variação
por ramo, e ainda assim os prazos de terceira ordem são, honestamente, ornamentais — a `confianca:
baixa` que os acompanha é a informação real, e o ano é convenção de formato.

**Escorregou de "existe ferramenta" para "ferramenta funciona", uma vez.** Ao ler sobre isolamento
WebAssembly com alegação de ser "92 vezes mais rápido que uma frota de microVMs", a primeira redação
tratou isso como evidência de que o isolamento por tarefa ficaria barato. É alegação de fornecedor,
sem benchmark independente aberto, comparando coisas que podem não ser comparáveis (tempo de partida
a frio? throughput? custo por tarefa?). Retirei o número e mantive apenas a direção qualitativa, com
o dado verificável que existe: os 5–30ms de snapshot-restore do Firecracker.

**Uma coisa que a máquina *não* errou e que eu esperava que errasse.** Conferi os DOIs e IDs de arXiv
citados abrindo cada um: todos existem e os títulos batem com os autores atribuídos. A taxa habitual
de identificador fabricado por LLM não apareceu aqui — provavelmente porque cada fonte foi aberta
antes de ser citada, e não recuperada da memória do modelo. O procedimento é o que evita o erro, não
a boa-fé.

## 9. Três cenários para 2031

**Provável.** Em 2031 o agente tem conta. Não porque um padrão venceu, mas porque três ou quatro
plataformas grandes implementaram variações compatíveis o bastante da mesma ideia — identificador
próprio, credencial de vida curta, delegação registrada — e a camada de borda passou a exigi-la para
atravessar. O log corporativo distingue o que a pessoa fez do que o agente dela fez, e isso é
considerado progresso, com razão. A injeção de prompt não foi resolvida e ninguém mais promete
resolver: virou risco gerenciado, como fraude em cartão — há uma taxa aceita, há seguro, há um número
que ninguém publica. Toda ação irreversível pede confirmação humana, e a confirmação é dada sem
leitura, em massa, como se aceitam termos de uso. A web tem duas portas: pela da frente entram
pessoas e agentes assinados, e há tarifa; pela dos fundos, quem não tem assinatura enfrenta desafio,
limite de taxa ou bloqueio. Ninguém decidiu isso; foi o default de configuração.

**Desejável.** Em 2031 a delegação a uma máquina é entendida como extensão da agência da pessoa, e
não como suspeita. A credencial do agente carrega, além de quem o autorizou, *para quê* e *até
quando* — e barrar um agente exige a mesma justificativa que barrar uma pessoa, com recurso e
resposta. A interface de permissão parou de perguntar "permitir?" e passou a mostrar o que vai
acontecer, com limite de gasto e prazo visíveis, porque alguém tratou isso como problema de design e
não de segurança. O isolamento por tarefa ficou barato o suficiente para ser default silencioso, e a
contenção deixou de ser recurso premium. Para chegar aqui foi preciso, concretamente: que os eixos do
NCCoE virassem overlays publicados com requisito explícito de não-discriminação de acesso delegado;
que uma norma de acessibilidade tratasse a delegação a agente como caminho legítimo, do mesmo modo
que tratou o leitor de tela; e que a atestação permanecesse plural, com chave autoemitida continuando
válida para agente pequeno.

**Indesejável.** Em 2031 a identidade do agente virou infraestrutura de exclusão. Emitir credencial
custa, aceitar chave autoemitida virou risco reputacional, e o resultado é que só agente de grande
plataforma atravessa. Quem depende de intermediação por máquina — pessoa com deficiência, pessoa que
não lê o idioma do site, pessoa que automatizou a própria burocracia — passa pela porta dos fundos, e
paga. Um mercado de "parecer humano" floresce, exatamente como floresceu o de resolver CAPTCHA, e o
efeito é que a portaria não para o abuso e só para quem não pode pagar para contorná-la. A reputação
do agente contamina o acesso da pessoa, sem que exista processo para contestar. O sinal precoce disso
é um só, e é observável agora: **o dia em que uma plataforma grande passar a rejeitar por padrão o
agente sem assinatura, em vez de apenas classificá-lo.** Não é a assinatura que produz o desfecho
ruim — é o default aplicado a quem não a tem.

## 10. O experimento

**O que é.** *Portaria de agentes* — um site pequeno, de verdade, com conteúdo de verdade, que trata
humano e agente de forma diferente na entrada, e registra tudo. Três camadas: (1) verificação de
assinatura ao estilo Web Bot Auth — lê o cabeçalho `Signature-Agent`, busca a chave pública no
diretório `/.well-known/` do domínio declarado, valida a assinatura e o carimbo de tempo; (2) uma
política de portaria configurável em quatro posições — passa livre, passa com cota, exige pagamento
simbólico (HTTP 402), bloqueia; (3) um painel que mostra, em tempo real, quem entrou, quem foi barrado
e **por qual regra**. Uma quarta peça é o que dá sentido ao resto: um conjunto de visitantes de teste
que inclui, deliberadamente, agentes legítimos sem assinatura — um script pessoal, uma ferramenta de
leitura assistida, um leitor de tela automatizado, um agente de pesquisa acadêmica.

**Que pergunta sobre o futuro ele ajuda a responder.** Não "dá para verificar agente?" — dá, o
mecanismo existe. A pergunta é: **quando você liga a portaria, quem você barra sem querer?** É a
pergunta de e6.2, o efeito que eu marquei como `sinal: forte` e que não tem nenhuma medição pública
que eu tenha encontrado. Uma segunda pergunta, de design: existe alguma configuração de portaria que
distinga abuso de delegação legítima, ou as duas são indistinguíveis por construção? Se forem, isso é
um achado, e é um achado ruim para o cenário desejável.

**Que tecnologia emergente ele usa e por que não dá com tecnologia madura.** Usa HTTP Message
Signatures (RFC 9421) aplicadas à identificação de agente, o diretório `.well-known` de chaves, o
cabeçalho `Signature-Agent` e o fluxo de HTTP 402 com declaração de intenção de pagamento. Com
tecnologia madura — CAPTCHA, detecção comportamental, faixa de IP, reverse DNS — não dá, e o motivo é
o ponto do experimento: essas técnicas são *estatísticas e falíveis*, e portanto erram nas duas
direções o tempo todo. A assinatura criptográfica não erra: ela responde sim ou não com certeza. É
justamente essa certeza que torna a decisão de portaria uma decisão de política, e não um problema de
detecção — e é isso que o experimento expõe. Com CAPTCHA, o barramento do leitor de tela é um bug;
com assinatura, é uma escolha.

**O que a turma vai fazer quando testar isso em sala.** Cada pessoa recebe um papel — dono do site,
agente assinado de plataforma grande, agente pessoal sem assinatura, pessoa usando leitor de tela
automatizado, pesquisador raspando dados, atacante — e o dono do site configura a portaria sem saber
quem é quem. Roda-se por dez minutos; o painel mostra o resultado. Depois inverte-se: quem foi barrado
passa a configurar. A discussão que interessa vem do painel, não da configuração: quantos falsos
barramentos o grupo aceitou para parar o atacante, e se alguém percebeu que aceitou. Em seguida, um
segundo turno: o agente sem assinatura tenta *parecer* assinado, e a turma decide se isso é fraude ou
autodefesa.

**O que seria um resultado que me faria mudar de ideia.** Duas coisas. Primeira: se alguma
configuração de portaria conseguir barrar o atacante **sem** barrar nenhum dos agentes legítimos
não assinados — e de forma reprodutível, não por sorte da rodada —, então e6.2 está errado, o
barramento colateral não é estrutural mas de projeto, e todo o ramo do cenário indesejável perde
força. Segunda, na direção oposta: se a turma na posição de dono do site escolher, de forma
consistente, a configuração permissiva mesmo depois de ser atacada — porque barrar dá trabalho, gera
suporte e perde visita —, então D3 está superestimada: a discriminação de tráfego não se consolida
por falta de vontade de quem teria de operá-la, e o futuro é bem mais parecido com o presente do que
este mapa sugere.

## 11. Fontes

Todas abertas e lidas. Duas tentativas de leitura retornaram HTTP 403 e estão registradas como
descartadas no anexo, não aqui.

1. **IETF — AI Agent Authentication and Authorization**, `draft-klrc-aiagent-auth-00`, 2 de março de
   2026. `https://www.ietf.org/archive/id/draft-klrc-aiagent-auth-00.html`
   Sustenta: a proposta de tratar agente como workload com identificador WIMSE, credenciais de vida
   curta, mTLS/HTTP Message Signatures e OAuth 2.0 como moldura de delegação; observabilidade via
   OpenID Shared Signals; log atribuível. Confiabilidade: alta como registro do que foi proposto,
   baixa como previsão — é rascunho informacional individual, com expiração em setembro de 2026, não
   documento de grupo de trabalho.

2. **OWASP — Top 10 for LLM Applications (edição 2025)**. `https://genai.owasp.org/llm-top-10/`
   Sustenta: prompt injection em 1º, excessive agency em 6º, system prompt leakage em 7º; existência
   da Agentic Security Initiative como frente separada. Confiabilidade: alta, é a fonte primária do
   consórcio. Ressalva importante: **é a edição 2025**; ver seção 8 sobre a edição 2026 que a busca
   afirmava existir e que não consegui abrir.

3. **Otsuka, Toyoda e Leung — AI Identity: Standards, Gaps, and Research Directions for AI Agents**,
   arXiv:2604.23280v1, 28 de abril de 2026. `https://arxiv.org/pdf/2604.23280`
   Sustenta: o mapeamento da fragmentação normativa (EU AI Act, GDPR, eIDAS 2024, NIST, OpenID
   Connect, C2PA, Zero Trust, OWASP, IMDA, Japão, China) e as quatro lacunas — verificação
   padronizada humano/não-humano, interoperabilidade entre setores, alinhamento entre jurisdições,
   infraestrutura técnica consistente. Confiabilidade: média-alta; é survey, não resultado
   experimental, e preprint sem revisão por pares indicada.

4. **Cloud Security Alliance — research note sobre a iniciativa de padrões de agentes do NIST**.
   `https://labs.cloudsecurityalliance.org/research/csa-research-note-nist-ai-agent-standards-federal-framework/`
   Sustenta: lançamento da AI Agent Standards Initiative em 17 de fevereiro de 2026; os quatro eixos
   do paper conceitual do NCCoE (identificação, autorização, delegação de acesso, registro); ausência
   de data para os overlays SP 800-53. Confiabilidade: média — é leitura secundária de documento do
   NIST feita por associação do setor; usei para o que ela relata factualmente, não para as
   interpretações.

5. **Cloudflare — The age of agents: cryptographically recognizing agent traffic**, 28 de agosto de
   2025. `https://blog.cloudflare.com/signed-agents/`
   Sustenta: a categoria "signed agents", distinta de bots verificados; os três requisitos (dirigido
   por usuário final, assinatura via Web Bot Auth, conformidade com a política). Confiabilidade: alta
   quanto ao que a empresa implementou, baixa como avaliação de mérito — é comunicação de produto.
   Registro que ela **não** traz estatística de volume de tráfego de agentes, ao contrário do que
   resumos secundários sugeriam.

6. **Cloudflare — Introducing pay per crawl**, 1º de julho de 2025.
   `https://blog.cloudflare.com/introducing-pay-per-crawl/`
   Sustenta: o mecanismo de HTTP 402 com fluxo reativo e proativo; o estado de beta privado; a
   ambição declarada de agentes com orçamento negociando acesso programaticamente. Confiabilidade:
   alta para o mecanismo, nula para adoção — beta privado não é evidência de uso.

7. **Zhang, Tenenholtz, Polley, Ma, Yarats e Li — BrowseSafe: Understanding and Detecting Prompt
   Injection Within AI Browser Agents**, arXiv:2511.20597v2, 12 de agosto de 2026.
   `https://arxiv.org/html/2511.20597`
   Sustenta: 14.719 amostras anotadas, 11 tipos de ataque, 9 estratégias, 5 estilos; queda de 90,5%
   para 81,3% com distratores realistas; conteúdo visível evadindo a quase o dobro da taxa do oculto
   (69–75% vs 87–92%); 76,0% em ataques multilíngues; F1 0,904 com latência <1s. Confiabilidade:
   alta para a metodologia e os achados negativos; média para o desempenho do próprio detector
   proposto — autores avaliando a própria defesa.

8. **Adaptive Evaluation of Out-of-Band Defenses Against Prompt Injection in LLM Agents**,
   arXiv:2606.26479. `https://arxiv.org/abs/2606.26479`
   Sustenta: Progent no AgentDojo com Qwen2.5-7B, 25,8% → 4,2%, e ataque adaptativo próprio a 2,6%;
   a ressalva dos autores de que é ponto de dado de pequena escala em modelo fraco; o alerta de que
   defesas in-band pareceram eficazes até serem quebradas a 90%+. Confiabilidade: alta — é uma fonte
   que argumenta contra a força da própria evidência que apresenta, o que é raro e aumenta o peso.

9. **Maloyan e Namiot — Prompt Injection Attacks on Agentic Coding Assistants**, arXiv:2601.17548v1,
   janeiro de 2026. `https://arxiv.org/html/2601.17548v1`
   Sustenta: vetores (injeção direta, indireta via repositório, protocolo via definições MCP);
   85%+ dos ataques comprometendo ao menos uma plataforma grande; 78–93% de contorno por ataque
   adaptativo; a comparação de severidade entre Cursor, Copilot, Claude Code e Codex CLI. Ressalva
   registrada na seção 7: o "85%+ em ao menos uma plataforma" tem denominador não declarado e
   formulação fraca.

10. **Andronchik e Lokhmakov — AI Code Sandboxes: A Comparative Security Study, Part 1**,
    arXiv:2606.08433v1, 9 de junho de 2026. `https://arxiv.org/pdf/2606.08433`
    Sustenta: a existência de comparação metodológica entre cinco motores de sandbox por superfície
    de ataque, vazamento, empilhabilidade, histórico de CVE, cadência de correção e fuzzing.
    Confiabilidade: média — não consegui extrair os números por produto do PDF, então uso a fonte
    apenas para a afirmação de que a comparação metodológica existe, não para resultados específicos.

11. **Uchibeke — Before the Tool Call: Deterministic Pre-Action Authorization for Autonomous AI
    Agents**, arXiv:2603.20953v1, 24 de março de 2026. `https://arxiv.org/pdf/2603.20953`
    Sustenta: a proposta de autorização determinística antes da chamada de ferramenta, por política
    em vez de guardrail probabilístico, com tratamento de negação e alinhamento declarado ao NIST.
    Confiabilidade: média — autoria única, preprint, sem avaliação quantitativa que eu tenha
    conseguido extrair. Usei como evidência de direção de pesquisa, não de eficácia.

12. **Wang, Chen, Li, Song e Gong — Same-Origin Policy for Agentic Browsers**, arXiv:2606.14027, 1º
    de julho de 2026. `https://arxiv.org/pdf/2606.14027`
    Sustenta: a proposta de transpor a política de mesma origem para restringir com que sites um
    agente interage. Confiabilidade: alta quanto à proposta e à autoria (Dawn Song e Neil Gong são
    referências estabelecidas na área); não extraí os números de avaliação do PDF e por isso não os
    cito.

13. **Anthropic — Mitigating the risk of prompt injections in browser use**, 24 de novembro de 2025.
    `https://www.anthropic.com/news/prompt-injection-defenses`
    Sustenta: as três frentes de defesa (treino por reforço, classificadores, red teaming); 1% de
    taxa de sucesso do Opus 4.5 contra atacante Best-of-N interno com 100 tentativas por ambiente; a
    afirmação explícita de que 1% ainda é risco material e de que nenhum agente de navegador é imune.
    Confiabilidade: alta para a admissão de limite (é contra o interesse comercial da empresa), baixa
    para o número em si — avaliação interna, atacante próprio, não comparável entre fabricantes.

14. **Imperva — Bad Bot Report 2026: Bots in the Agentic Age**.
    `https://www.imperva.com/blog/bad-bot-report-2026-bots-agentic-age/`
    Sustenta: 53% do tráfego web sendo bot contra 47% humano; 27% dos ataques automatizados mirando
    APIs; serviços financeiros com 24% dos ataques e 46% dos incidentes de tomada de conta; a
    recomendação de migrar de "detecção de bot" para "controle de automação". Confiabilidade: baixa a
    média — fornecedor de mitigação de bots relatando sobre o problema que vende resolver, com
    metodologia não auditável. Usado como ordem de grandeza e como sinal de mudança de categoria, não
    como medida.

15. **Smashing Magazine — The Accessibility Problem With Authentication Methods Like CAPTCHA**,
    novembro de 2025.
    `https://www.smashingmagazine.com/2025/11/accessibility-problem-authentication-methods-captcha/`
    Sustenta: CAPTCHA como item mais problemático nas pesquisas WebAIM com usuários de leitor de tela
    (2023–2024, e no topo há mais de uma década); barreiras por tipo de deficiência; aprendizado de
    máquina resolvendo CAPTCHA de texto com 97%+ de acurácia em frações de segundo, e bots resolvendo
    reCAPTCHA em 17,5s com 85% de acurácia — acima do desempenho humano; 819 milhões de horas gastas
    em 512 bilhões de sessões de reCAPTCHA v2 até 2023. Confiabilidade: média-alta; publicação
    editorial de referência na área, citando WebAIM, mas alguns números vêm de terceiros que não
    abri.

16. **Model Context Protocol — Identity / KYA-OS, página de introdução**.
    `https://modelcontextprotocol-identity.io/introduction`
    Sustenta: o framework apresentado como KYA-OS ("Know Your Agent — Operating System"), padrão
    aberto de identidade e delegação de agente, com DIDs, Verifiable Credentials e credenciais de
    delegação; agnóstico de protocolo, com MCP como primeira integração; vínculo com a Decentralized
    Identity Foundation. Confiabilidade: alta como registro do que a especificação diz de si mesma,
    nula como evidência de adoção. É também a fonte da divergência de nome discutida na seção 8.

17. **Senado Federal — Projeto de Lei nº 2338, de 2023 (marco legal da IA)**.
    `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233`
    Sustenta: aprovação pelo Plenário do Senado e remessa à Câmara dos Deputados em 17 de março de
    2025 (Ofício SF nº 235); tramitação encerrada no Senado. Confiabilidade: alta — fonte primária
    oficial. As disposições específicas sobre notificação de incidente grave e sobre manutenção da
    responsabilidade civil em relação de consumo sob o CDC vieram de leitura secundária do
    substitutivo e estão sinalizadas como tal no texto.

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista

A skill exige entrevista antes de pesquisar. Nesta rodada não havia interlocutor disponível para
responder; os parâmetros foram fornecidos integralmente na abertura da execução e tratados como
respostas confirmadas. Registro-os literalmente, porque a skill proíbe preencher lacuna com
suposição e o que houve aqui foi um preenchimento externo, não uma confirmação por rodadas:

| Campo | Valor confirmado |
|---|---|
| tema | Contenção, segurança e identidade de agentes autônomos (tema 2 de 19; família "Agentes") |
| recorte | A máquina que age como principal de segurança: identidade, permissão, isolamento e auditoria próprios do agente |
| horizonte | 2031 |
| público | Quem projeta mídia e interação |
| região | Global, com nota sobre o Brasil |
| objetivo | Mapa de futuro por roda dos futuros, três ordens, no formato da disciplina; modo "a partir de uma inovação/tema", não de um setor |
| exclusões | O que já é comum em produto de massa (régua da disciplina). Nenhuma outra. Ideias que serviriam a qualquer tema também excluídas |
| viés desejado | Neutro |
| disrupção suspeita a priori | Nenhuma — descobrir |
| critério de mudança de ideia | Evidência de que a adoção passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada e só melhora o existente |

**Incerteza registrada:** "neutro" e "equilibrado" foram tratados como equivalentes. O documento
proposto pela disciplina como contexto (transcrito na abertura) **não** foi usado como fonte — foi
usado como orientação de escopo e de vocabulário de busca, conforme instruído. Nenhuma afirmação
deste mapa se apoia nele.

**Aplicação do critério de Rogers.** Checando as três raízes contra o critério declarado: D1
(identidade de agente) está em inovadores e primeiros adotantes — rascunho de IETF, iniciativa NIST
sem entregável, especificação recém-doada e já renomeada; passa. D2 (defesa fora do modelo) está em
primeiros adotantes com adoção real em produtos de programação; passa, com margem menor. D3
(discriminação de tráfego) é a mais avançada — Web Bot Auth está em produção na borda —, mas o que
está maduro é o *mecanismo*; o *regime* (tarifa diferencial, política de portaria) está em beta
privado. Passa, com a ressalva registrada na seção 7. Nenhuma das três foi descartada por maturidade,
mas D3 é a que chegou mais perto da régua.

### 12.2 Consultas feitas

Buscas (WebSearch):
1. `agent identity authentication protocol AI agents 2026 standard`
2. `OWASP Top 10 LLM applications prompt injection agentic security 2026`
3. `Cloudflare Web Bot Auth signed agents HTTP message signatures AI crawler verification`
4. `arxiv 2026 indirect prompt injection browser agent success rate defense evaluation`
5. `bot detection blocking screen reader assistive agent accessibility disability CAPTCHA AI agent 2026`
6. `MCP-I Model Context Protocol Identity Decentralized Identity Foundation agent verifiable credentials`
7. `agent sandbox microVM Firecracker gVisor WebAssembly isolation per-agent 2026 E2B`
8. `Brasil PL 2338 lei inteligência artificial agentes autônomos responsabilidade 2026 ANPD`
9. `Anthropic OpenAI agent browser prompt injection mitigation announcement 2026 sandboxing permissions`
10. `share of web traffic from AI agents bots 2026 report percentage`

Páginas efetivamente abertas (WebFetch): as 17 da seção 11, mais as duas que falharam (12.3).

### 12.3 Fontes descartadas, e por quê

- **`aembit.io/blog/the-owasp-top-10-for-llm-applications-2026-what-changed-and-why-it-matters`** —
  HTTP 403. Era a fonte que sustentaria o ranking OWASP 2026. Não entrou.
- **`securityboulevard.com/2026/09/the-owasp-top-10-for-llm-applications-2026-...`** — HTTP 403.
  Mesma função, mesmo destino. Duas falhas independentes na mesma alegação foram o que motivou a
  verificação contra a fonte primária descrita na seção 8.
- **`reversinglabs.com/blog/owasp-top-10-for-llm-apps-excessive-agency`** — não tentei abrir depois
  das duas falhas anteriores; teria a mesma função e o mesmo problema de ser terciária. Registro a
  omissão em vez de fingir que a lista de descartes é exaustiva.
- **`venturebeat.com` sobre "agente de navegador da Anthropic sequestrado 31,5% das vezes antes das
  salvaguardas"** e **`creati.ai` sobre "Opus 5 com Auto Mode levando a injeção a zero em 129
  cenários"** — não abertos. São jornalismo e agregador reportando sobre system card; o número de
  0% em particular é o tipo de afirmação que só entraria com a fonte primária na mão. Preferi ficar
  com o 1% que a própria Anthropic publica e admite ser insuficiente.
- **`rivet.dev` / agentOS, alegação de "92× mais rápido que uma frota de microVMs"** — não abri a
  fonte e, mesmo se abrisse, é alegação de fornecedor sem benchmark independente, com unidade de
  comparação não declarada. Descartada; a direção qualitativa (isolamento barato por tarefa)
  sobreviveu, ancorada no dado verificável de snapshot-restore do Firecracker.
- **`PromptTrace`, `Foil`, `claude-tap`, `arrakis`, `SWE-ReX`, `VibePod`, `cc-safety-net`,
  `securitycards`, `aislop`, `skylos`, `@better-auth/utils`** — citados no enunciado do tema. Não
  busquei nem abri nenhum. Motivo: são repositórios individuais, e o mapa precisa de evidência de
  *categoria*, não de inventário de ferramenta. Cada um deles instancia algo que este mapa já
  sustenta por fonte institucional ou acadêmica (sandbox por agente, detecção de agente, inspeção de
  tráfego, identidade de agente). Quem quiser verificar as instâncias tem a lista no enunciado; este
  documento não afirma nada sobre elas.
- **Fontes em português sobre PL 2338** (`gft.com`, `lbca.com.br`, `ialocus.com.br`,
  `confidata.com.br`, `criaai.app.br`) — não abertas individualmente. O conteúdo substantivo sobre
  notificação de incidente e CDC vem do resumo de busca sobre elas e está marcado como leitura
  secundária no texto. A única fonte brasileira aberta e citável é a página oficial do Senado.

### 12.4 Inferências, separadas do que é fato

**Fatos observados e apoiados por fonte** (não repito aqui os números; estão na seção 3 com
atribuição): a existência e as datas do rascunho IETF, da iniciativa NIST, da doação ao DIF, do
programa de agentes assinados e do pay per crawl; os números de BrowseSafe, da avaliação adaptativa,
do paper de assistentes de programação, da Anthropic, da Imperva e do WebAIM via Smashing; o estado
de tramitação do PL 2338.

**Inferências causais, argumentadas:**
- *Da existência de mecanismo para existência de regime.* Web Bot Auth + HTTP 402 + volume de bots
  implicam capacidade de discriminar e cobrar. Não implicam que se vá discriminar e cobrar — essa é
  uma inferência sobre incentivo econômico, e é a base de e6.1. Argumento: quem investe em
  implementar cobrança geralmente pretende cobrar. Contra-argumento válido: beta privado que nunca
  sai do beta é comum.
- *Da inseparabilidade instrução/dado para permanência do problema.* Se instrução e dado dividem o
  mesmo canal e não existe equivalente ao prepared statement, então toda mitigação é probabilística.
  Isso é dedutivo dado o pressuposto; o pressuposto é arquitetural e pode mudar.
- *Da assinatura criptográfica para exclusão colateral.* Se o site sabe com certeza quem é agente, e
  se agentes legítimos sem credencial existem (script pessoal, ferramenta assistiva), então qualquer
  política de barramento por ausência de credencial barra legítimos. Isso é dedutivo. O que é
  inferência é a *magnitude*, e é exatamente o que o experimento propõe medir.
- *Da fadiga de autorização.* Analogia com banner de cookie e diálogo de permissão de app. É
  inferência por caso comparável, não medição. Registrada com confiança `media` por isso.

**Hipóteses prospectivas, com confiança proporcional:** tudo que está na roda com `confianca: baixa`;
todos os efeitos de terceira ordem; os três cenários da seção 9; os wildcards da seção 6.

### 12.5 Efeitos removidos e caminhos abandonados

- **"Seguro paramétrico para atos de agente"** (seria e3.1.2 ou e2.2.2). Removido: nenhum produto,
  piloto ou paper aberto encontrado. A cadeia era plausível — trilha de delegação verificável torna
  possível apólice que paga sem perícia —, mas plausibilidade não é evidência. Foi a cadeia que a
  skill manda registrar como interrompida.
- **"Personalidade jurídica do agente"** como efeito de terceira ordem autônomo. Removido do bloco e
  rebaixado a wildcard. Motivo: no Brasil o CDC já aloca a responsabilidade ao fornecedor, o que
  torna o desfecho menos provável na jurisdição que mais importa para o público deste mapa; e em
  jurisdições sem essa âncora, não há caso concreto. Sobrou e2.2.1 (responsabilidade organizada pela
  cadeia de delegação), que é a versão sóbria da mesma ideia.
- **"IA detectando IA vira corrida armamentista"** como efeito. Removido: é a ideia que serve para
  qualquer tema de segurança, e o enunciado pedia explicitamente para excluir esse tipo. Além disso,
  o achado do BrowseSafe sobre ataque visível sugere que a corrida não é simétrica — o atacante não
  precisa esconder.
- **"Agentes formam mercados próprios e negociam entre si"** (economia de agentes). Removido do corpo
  principal: é tema adjacente, com literatura própria, e puxaria o mapa para comércio em vez de
  contenção. Sobrou apenas o vestígio necessário em e3 e e6.1.
- **Um quarto candidato a disrupção-raiz: "a observabilidade do agente vira requisito regulatório".**
  Descartado como raiz porque é consequência de D1 (sem identidade não há trilha atribuível) e porque
  a fronteira com o tema 3 da disciplina (avaliação e observabilidade) seria invadida. Vive no mapa
  como parte de e1.1 e e2.2.
- **Prazos originais** — versão 1 da roda tinha 2028/2030/2032 uniformes. Descartados pelo motivo
  descrito na seção 8.
- **Números de sandbox por produto** (latências de partida a frio de contêiner/gVisor/microVM,
  ~500ms/~100ms/~150ms) — aparecem na seção 3.5 vindos de resumo de busca sobre fontes de engenharia
  que eu **não** abri individualmente. Mantidos no texto porque são ordem de grandeza amplamente
  convergente, mas não sustentam nenhum efeito da roda, e não constam da lista de fontes.

### 12.6 Limitações declaradas

1. **Nenhuma entrevista real foi conduzida.** Os parâmetros vieram prontos. A skill prevê rodadas de
   pergunta e resposta; isso não aconteceu, e a ausência pode ter deixado passar um recorte que o
   interlocutor teria corrigido.
2. **Dezessete fontes são poucas para um tema desta largura.** Cobrem identidade, contenção,
   discriminação de tráfego e acessibilidade, mas com uma ou duas fontes por eixo. Um mapa com o
   dobro de fontes por eixo provavelmente moveria prazos e confianças.
3. **Nenhum resultado foi replicado.** Todos os números vêm de uma fonte cada. Onde há duas medindo
   a mesma coisa (Imperva e as estimativas de borda sobre tráfego de bot), os valores não são
   idênticos e as metodologias não são comparáveis.
4. **Não há fonte revisada por pares neste documento.** Os arXiv são preprints; o resto é documento
   institucional, comunicação de empresa, imprensa especializada ou fonte primária legislativa. Isso
   é característico de um campo com dezoito meses de idade, mas é uma limitação real.
5. **O recorte brasileiro é uma nota, não uma análise.** Uma única fonte primária aberta; o
   substantivo do PL veio de leitura secundária. Um mapa que quisesse orientar decisão de produto no
   Brasil precisaria ler o substitutivo e as contribuições da ANPD diretamente.
6. **Dois números centrais do debate público (o ranking OWASP 2026 e as taxas de sucesso zeradas de
   modelos recentes) ficaram de fora por inacessibilidade da fonte primária.** O mapa é, nessa
   medida, conservador: descreve um estado da defesa possivelmente melhor do que o que registrei. Se
   as taxas reportadas de 0% se confirmarem em avaliação independente e adaptativa, D2 enfraquece.
7. **Este documento foi produzido por um agente autônomo, sobre contenção de agentes autônomos.** O
   conflito de interesse epistêmico está declarado na seção 7 e não tem correção disponível dentro
   deste processo — só leitura crítica de fora.
