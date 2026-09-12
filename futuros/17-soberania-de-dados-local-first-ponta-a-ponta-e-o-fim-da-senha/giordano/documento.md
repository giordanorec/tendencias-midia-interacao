---
tema: "Soberania de dados: local-first, ponta-a-ponta e o fim da senha"
slug: soberania-de-dados-local-first-ponta-a-ponta-e-o-fim-da-senha
autor_login: grec
zona_de_interesse: Pessoas e dados
data: 2026-09-11
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 16
efeitos_ordem_2: 28
efeitos_ordem_3: 14
tecnologias_citadas: [WebAuthn, FIDO2, passkeys, Credential Exchange Format (CXF), Credential Exchange Protocol (CXP), iCloud Keychain, Google Password Manager, Automerge, Yjs, Loro, Zero (Rocicorp), ElectricSQL, PowerSync, TanStack DB, Jazz, Convex, SQLite, OPFS, CRDT, Keyhive, BeeKEM, Patchwork, Signal Protocol, MLS, Advanced Data Protection, Private Cloud Compute, client-side scanning, EUDI Wallet, eIDAS 2.0, gov.br, Open Finance Brasil, divulgação seletiva, prova de conhecimento zero]
fontes: 15
confianca: media
experimento: Caderno cego — um app colaborativo sem senha e sem servidor que leia, com a busca implementada duas vezes (cega e não-cega) e uma prova de recuperação cronometrada em sala
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Três rupturas de arquitetura — o dado que mora no dispositivo e sincroniza (local-first), o
servidor que não consegue ler o que guarda (ponta-a-ponta) e a conta que não tem senha nenhuma
para esquecer (passkeys) — são frequentemente narradas como um único movimento de devolução de
poder ao usuário. Este mapa sustenta que elas não estão andando juntas, e que duas delas estão
andando para trás. A autenticação por passkey já é maioria (5 bilhões de credenciais, 48% dos
cem maiores sites), mas a dependência que ela remove do site é reinstalada no chaveiro do
sistema operacional: o fim da senha é, por enquanto, a consolidação da Apple e do Google como
provedores de identidade sem botão. O sync engine amadureceu de verdade em 2026 (Zero 1.0,
Automerge 3.0) e vai redesenhar a interface — o spinner some, o conflito aparece —, mas ainda
não resolveu como se cobra por um dado que não está preso. E a cifra ponta-a-ponta em dado de
aplicação recuou: o Instagram desligou o E2E dos DMs em 8 de maio de 2026 alegando baixa adoção,
e a Apple retirou a Proteção Avançada de Dados do Reino Unido. Sobre tudo isso avança uma quarta
ruptura que quase ninguém conta na mesma história: a carteira de identidade emitida pelo Estado,
com prazo legal de 24 de dezembro de 2026 na União Europeia e um equivalente brasileiro já em
operação no gov.br. Até 2031, a pergunta não é se a soberania de dados acontece, e sim de quem
ela é: do indivíduo, do fabricante do aparelho ou do Estado. Para quem projeta mídia e interação,
as três respostas produzem telas diferentes.

## 2. O tema

O objeto aqui é a **arquitetura de dado e de identidade da pessoa** — onde a informação mora,
quem consegue lê-la e o que prova que alguém é quem diz ser. Não é um produto, não é um modelo e
não é um agente. É a camada abaixo de tudo isso, que normalmente ninguém projeta porque já veio
decidida: o dado mora no servidor, a empresa lê, e a pessoa prova quem é com um segredo que a
empresa também guarda.

Isso encosta em mídia e interação em três pontos concretos e não metafóricos. Primeiro, **a tela
de login** é o momento mais visitado de qualquer produto, e ela está deixando de ser desenhada
por quem faz o produto para ser desenhada pelo sistema operacional. Segundo, **a espera** — o
spinner, o skeleton, o pull-to-refresh — é um vocabulário visual inteiro construído em torno da
latência de rede, e o local-first o torna desnecessário, substituindo-o por um problema de
interação que quase ninguém sabe desenhar: mostrar que a versão do outro chegou. Terceiro,
**a personalização e a moderação** são funções de produto que dependem de o servidor ler o dado;
quando ele não lê, as duas têm de ser reprojetadas ou abandonadas.

Merece mapa de futuro, e não levantamento de estado da arte, porque o estado da arte aqui é
**contraditório**: no mesmo ano de 2026 a FIDO Alliance declara os passkeys em uso corrente e a
Meta desliga a criptografia do Instagram; a Ink & Switch formaliza criptografia de grupo para
software local-first e o Reino Unido processa a Apple para ler o iCloud; a União Europeia obriga
cada Estado a emitir uma carteira de identidade digital e ao mesmo tempo negocia um regulamento
que só funciona se alguém olhar dentro das mensagens. Um levantamento registra essas coisas lado
a lado. Um mapa tem de dizer para onde a contradição empurra — e admitir onde ela não resolve.

**Premissas assumidas nesta rodada** (do bloco `briefing:`, §0 da skill, sem entrevista ao vivo):
horizonte 2031; público de quem projeta mídia e interação; recorte global com nota sobre o
Brasil; descartado de início o que já é comum em produto de massa; nenhuma disrupção-raiz
pré-suspeita; viés neutro; ideias óbvias (as que serviriam para qualquer tema) excluídas; o
falseador declarado pelo autor é *evidência de que a adoção já passou da maioria inicial de
Rogers, ou de que a tecnologia não rompe nada e só melhora o que existe*. O briefing cobriu os
sete itens da entrevista, então não há rebaixamento de confiança por pular a §0.

## 3. Onde isso está hoje

### O que já existe e funciona

**Passkeys são realidade corrente, não promessa.** A FIDO Alliance estima 5 bilhões de passkeys
em uso no mundo, com 90% de consciência entre consumidores, 75% tendo habilitado em ao menos uma
conta e 49% usando sempre que disponível; 68% das organizações estão implantando para o próprio
quadro de pessoal. Os dados vêm de dois estudos da Sapio Research em abril de 2026 (11.000
consumidores em dez países, margem de ±0,9 p.p.; 1.400 decisores, ±2,6 p.p.). Do lado da oferta,
48% dos cem maiores sites do mundo oferecem passkey — mais que o dobro de 2022. Os ganhos
medidos são grandes: 93% de sucesso de login contra 63% da senha, 8,5 segundos contra 31,2, e
81% de redução em chamados de suporte relacionados a login. A Microsoft reportou 98% contra 32%.
*(Fontes 7 e, indiretamente, o comunicado da FIDO — ver §8 sobre o problema dessa cadeia.)*

**Colaboração por CRDT é infraestrutura instalada.** Yjs roda em torno de 920 mil downloads
semanais e sustenta editores colaborativos comerciais; Automerge chegou à versão 3.0 no fim de
2025, com formato colunar que reduziu o tamanho dos documentos em 40–60%. O ensaio que nomeou o
campo — *Local-first software: you own your data, in spite of the cloud*, de Martin Kleppmann,
Adam Wiggins, Peter van Hardenberg e Mark McGranaghan — é de **abril de 2019**, e já enunciava
os sete ideais que o campo persegue até hoje: sem spinners; o trabalho não preso a um dispositivo;
a rede é opcional; colaboração sem atrito; o *Long Now*; segurança e privacidade por padrão; e
propriedade final do usuário.

**O sync engine virou categoria comercial em 2026.** O Zero, da Rocicorp, chegou à 1.0 em 8 de
junho de 2026 depois de quase dois anos, mais de 50 lançamentos e milhares de commits; concorre
com ElectricSQL, InstantDB, PowerSync e Convex, e a própria cobertura aponta Jazz para quem quer
arranjo de fato descentralizado e ponta-a-ponta. A Local-First Conf teve sua terceira edição em
Berlim, de 12 a 14 de julho de 2026, no Festsaal Kreuzberg, com o tema *user empowerment in an
age of fluid software* — organizada por gente da Ink & Switch, da Electric e de estúdios
independentes, com Martin Kleppmann, Steve Ruiz, Paul Frazee e Seph Gentle entre os palestrantes.

**Serviços cifrados têm escala de dezenas de milhões**, não de bilhões: o Signal opera na faixa
de 70 a 100 milhões de usuários mensais. É grande, e é duas ordens de grandeza abaixo das
plataformas de mídia.

**A identidade estatal digital está em rollout com prazo legal.** O EUDI Wallet tem prazo de
dezembro de 2026 para que cada Estado-membro ofereça uma carteira certificada (Regulamento UE
2024/1183). A Dinamarca colocou o AltID em produção em **3 de junho de 2026**; França, Alemanha
e Suíça têm sandbox público; outros treze países anunciaram sem sandbox; e a Comissão já disse
publicamente que o lançamento será escalonado, não simultâneo.

### O que existe e ainda não funciona

**A cifra ponta-a-ponta em dado de aplicação está recuando, não avançando.** Em **8 de maio de
2026** a Meta removeu a criptografia ponta-a-ponta dos DMs do Instagram — um recurso opcional
desde 2023 —, alegando que pouca gente optava por ele. A cobertura registra que a própria Meta
minou a adoção: nunca ligou por padrão, nunca avisou os usuários, exigia ativação conversa a
conversa e nunca liberou para todos. WhatsApp e Messenger seguem cifrados *por ora*. No Reino
Unido, a Proteção Avançada de Dados do iCloud está indisponível para novos usuários desde 2025
por exigência do governo; Apple mantém iMessage e FaceTime cifrados e 15 categorias de dado
cifradas por padrão, mas Backup, Drive, Fotos, Notas, Lembretes, favoritos do Safari, Atalhos,
Memorandos de Voz, Wallet e Freeform ficaram de fora naquele país.

**A auto-hospedagem é menor do que o discurso sugere.** A única medida com método declarado que
encontrei é o estudo de Gröber, Lenau, Weil, Groben, Schilling e Krombholz (CISPA / Universidade
do Sarre), no 33º USENIX Security Symposium (agosto de 2024): pesquisa representativa no Prolific
com n = 1.505 estimando **limite superior de 8,4%** de auto-hospedeiros privados na população dos
EUA, em cinco casos de uso (comunicação, armazenamento de arquivo, gerenciador de senha
sincronizado, sites e casa conectada). Sites são o caso mais comum. E há um achado que atrapalha
a narrativa deste tema: **auto-hospedeiros não são mais sensíveis à privacidade que a população
geral** — o que os distingue é habilidade de administração de TI, formação técnica, afinidade
com tecnologia e identidade de *maker*.

**A recuperação de conta continua sendo o ponto fraco do passwordless.** Passkey sincronizada
volta sozinha no aparelho novo; passkey presa ao dispositivo morre com ele, e a saída é entrar
por outro método — que quase sempre é a senha, o e-mail ou o SMS que se queria eliminar. E a
herança digital não tem solução padronizada: apresentar certidão de óbito à Apple ou ao Google
não abre a conta, e a arquitetura de conhecimento zero de um gerenciador de senhas impede o
próprio fornecedor de ajudar.

### Quem constrói

- **Ink & Switch** — laboratório de pesquisa que nomeou o campo em 2019 e hoje trabalha em
  Patchwork (controle de versão para aplicações), Automerge e **Keyhive/BeeKEM**, a camada de
  criptografia de grupo para local-first, ainda em formalização.
- **Rocicorp, Electric, PowerSync, InstantDB, Convex, Jazz** — a camada comercial de sync engine.
- **FIDO Alliance com Apple, Google, Microsoft, 1Password, Bitwarden e Dashlane** — os padrões
  CXF (Proposed Standard em agosto de 2025) e CXP, que tornam a credencial exportável entre
  provedores; já em iOS 26 e no Google Play Services 26.21.
- **Comissão Europeia e os Estados-membros** — o EUDI Wallet.
- **Governo brasileiro (Governo Digital, Serpro) e a estrutura do Open Finance Brasil** — o
  modelo brasileiro, que é outro (ver abaixo).
- **Do outro lado da mesa: Meta, Home Office britânico, Ofcom e o Conselho da UE** — os atores
  com incentivo para que o servidor continue enxergando.

### O número que descreve a adoção hoje

Não existe um só, e a divergência entre eles *é* o achado. Passkeys: 5 bilhões de credenciais,
48% do top-100 — **maioria**. Sync engine local-first: Zero 1.0 com dois anos de
desenvolvimento e concorrentes ainda em disputa de padrão — **produto de nicho**.
Auto-hospedagem: 8,4% como limite superior nos EUA — **adoção precoce**. Cifra ponta-a-ponta em
dado de aplicação: um caso de remoção em plataforma de centena de milhões de usuários e uma
retirada por país — **em recuo**. Identidade estatal: um país em produção, prazo legal para 27 —
**mandato, não mercado**.

### Nota sobre o Brasil

O Brasil resolveu a mesma questão por outro desenho, e vale marcar porque é o desenho que o
aluno brasileiro vai encontrar no trabalho. Aqui a soberania de dados chegou **por regulação e
por centro, não por arquitetura e por borda**: o login único gov.br é obrigação desde o Decreto
8.936/2016 e a página oficial do Governo Digital descreve reconhecimento facial, validação
biométrica e autenticação multifator como meios de elevar o nível da conta. A portabilidade de
dado pessoal é direito do titular pelo art. 18, V da LGPD, com formato estruturado e legível por
máquina. E o Open Finance Brasil registrava **208,79 milhões de consentimentos ativos em 31 de
julho de 2026** no painel oficial, contra 62 milhões em janeiro de 2025 — uma máquina de
portabilidade de dado em escala continental que não é local-first, não é ponta-a-ponta e não
dispensa intermediário: é API regulada entre instituições supervisionadas.

**Registro de recusa (§2 da skill).** Candidato *"login por passkey como opção"* recusado como
disrupção-raiz: 5 bilhões de credenciais, 90% de consciência, 48% do top-100 e 68% das
organizações implantando colocam isso em **maioria** — é maduro, e fica aqui na seção 3 como
contexto. Candidato *"colaboração em tempo real por CRDT"* também recusado: Yjs em ~920 mil
downloads semanais sustentando editores comerciais é maioria no seu nicho, e resolve
colaboração, não propriedade. Candidato *"criptografia ponta-a-ponta de mensagem"* recusado:
WhatsApp por padrão desde 2016 é maioria absoluta. Candidato *"backup cifrado, HTTPS, 2FA por
SMS, login com Google"* recusado sem discussão, pela régua da disciplina. O que sobra como raiz
é sempre a **remoção de alguma coisa que hoje é dada como necessária** — o fallback de senha, o
servidor como dono do estado, a legibilidade do dado pelo fornecedor, o intermediário privado de
identidade.

## 4. As disrupções-raiz

### R1 — A conta sem fallback: autenticação que não guarda segredo compartilhado

**O que rompe.** Rompe o fluxo "esqueci minha senha" e, com ele, o papel do suporte como caminho
legítimo de acesso. Rompe também a economia do vazamento: um banco de dados roubado deixa de
conter material de autenticação, porque o servidor só guarda chave pública. E rompe a suposição
de que existe sempre uma rota de recuperação operada por humano. Note que o que rompe **não** é
"logar com biometria" — isso é melhoria sustentadora, mais rápida e mais segura. O que rompe é
**tirar a senha de vez**, sem rede de baixo.

**Por que agora, e não há cinco anos.** Três pré-condições só se juntaram recentemente:
WebAuthn disponível em todos os sistemas operacionais e navegadores relevantes; a **sincronização
da credencial pelo chaveiro do SO**, que resolveu o problema que matava o FIDO antigo (perdeu a
chave, perdeu a conta); e, desde agosto de 2025, o **CXF/CXP**, que torna a credencial
exportável entre provedores — já implementado em iOS 26 e no Google Play Services 26.21.

**Onde está na difusão.** Entre **produto de nicho e adoção precoce**. Apenas 28% das
organizações se dizem totalmente sem senha, e 87% ainda usam senha na autenticação voltada ao
cliente. Emergente.

**O que ainda falta acontecer.** Recuperação que não caia num canal fraco (e-mail, SMS); um
mecanismo de sucessão para quando a pessoa morre; um caminho para quem não tem aparelho com
hardware de atestação; e jurisprudência sobre quem responde quando a única credencial se perde.

**Quem bloqueia, e o efeito disso.** **Apple e Google.** A passkey sincronizada vive no chaveiro
delas; nenhuma das duas tem incentivo para que a exportação seja fácil de achar, ainda que o
padrão exista. Efeito gerado: `e4` — o fim da senha realoca a dependência em vez de eliminá-la.

### R2 — O sync engine: o dado mora no cliente e o servidor vira relay

**O que rompe.** Rompe o modelo requisição-resposta cliente→servidor→banco como caminho normal
do dado, e com ele a suposição de que sair do produto significa perder o trabalho. Rompe a
relação entre assinatura e acesso: se a cópia canônica está no aparelho, cancelar não apaga.
E rompe a ideia de que o fornecedor precisa estar vivo para o software funcionar — o quinto
ideal do ensaio de 2019, o *Long Now*.

**Por que agora, e não há cinco anos.** O desempenho deixou de ser objeção: Automerge 3.0 com
formato colunar reduziu documentos em 40–60%; os motores maduraram a ponto de a 1.0 do Zero sair
depois de dois anos de endurecimento em produção; SQLite no navegador com OPFS deu ao cliente um
banco de verdade; e, decisivo, **a categoria comercial se formou** — Electric, PowerSync,
InstantDB, Convex, Jazz disputando o mesmo lugar, com conferência própria em terceira edição.

**Onde está na difusão.** **Produto de nicho**, caminhando para adoção precoce. O uso de CRDT
para colaboração é maioria; o uso de CRDT para *propriedade* é nicho.

**O que ainda falta acontecer.** Autorização parcial sobre dado sincronizado (hoje, sincronizar
tende ao tudo-ou-nada); busca e agregação que exigiriam o servidor; migração de esquema numa base
distribuída por milhares de aparelhos; e um modelo de cobrança que sobreviva ao fim do
aprisionamento.

**Quem bloqueia, e o efeito disso.** **A área financeira do próprio fornecedor de SaaS**, cujo
previsível de receita depende do custo de sair, e o time de dados, que perde o funil de eventos.
Efeitos gerados: `e6.2` (reconstituir o lock-in numa camada acima do dado) e `e8` (o clique que
nunca chega ao servidor não vira linha de tabela).

### R3 — O servidor cego: cifra ponta-a-ponta em dado de aplicação, não só em mensagem

**O que rompe.** Rompe o modelo de negócio que lê o conteúdo para personalizar e vender; rompe a
moderação feita no servidor; rompe o backup operado pelo fornecedor; e rompe a utilidade da ordem
judicial dirigida a quem hospeda. É a mais radical das quatro e a única que custa receita direta
a quem a adotaria.

**Por que agora, e não há cinco anos.** A criptografia no cliente ficou trivial de implementar
(WebCrypto, libsodium compilado para WASM), e a peça que faltava — criptografia de **grupo**
para dado local-first, com entrada e saída de membro — está sendo formalizada agora no Keyhive /
BeeKEM da Ink & Switch. Além disso, o custo da confiança em terceiro ficou visível de um jeito
que não estava: encerramentos de serviço, vazamentos e, em 2025, o vazamento de cerca de 70 mil
imagens de documento num fornecedor de verificação de idade do Discord.

**Onde está na difusão.** **Demo pública / produto de nicho — e com sinal de recuo.** Instagram
desligou em 8 de maio de 2026; Apple retirou a Proteção Avançada de Dados do Reino Unido. Toda
a cadeia derivada desta raiz carrega confiança média ou baixa, por obrigação da §2 da skill.

**O que ainda falta acontecer.** Busca e inferência sobre dado cifrado a custo aceitável de
bateria e memória; recuperação de chave sem custódia; e alguma forma de atender a remoção
obrigatória de conteúdo (Take It Down Act, CSAR) sem enxergar o conteúdo.

**Quem bloqueia, e o efeito disso.** **A Meta** (removeu, e disse por quê), o **Home Office
britânico** (Apple entrou com nova contestação judicial em agosto de 2026), o **Conselho da UE**
— que retirou a varredura obrigatória do lado do cliente do seu mandato em novembro de 2025, mas
manteve varredura voluntária e estendeu o Chat Control 1.0 até abril de 2028 após a votação de 9
de julho de 2026 — e a **Ofcom**, sob o Online Safety Act. Efeitos gerados: `e10` e `e12`.

### R4 — A carteira de identidade emitida pelo Estado como trilho de login

**O que rompe.** Rompe o "entrar com Google" como infraestrutura de identidade privada e a
plataforma como cartório de fato. E rompe uma suposição do próprio campo local-first: que
soberania de dado significa soberania *do indivíduo*. Aqui a raiz de confiança não é o
dispositivo da pessoa nem uma empresa — é o Estado.

**Por que agora, e não há cinco anos.** Porque virou prazo. O eIDAS 2.0 fixa dezembro de 2026
para que cada Estado-membro ofereça ao menos uma carteira certificada, e obriga setores
regulados a aceitá-la. É um caso raro em que a adoção não é puxada por mercado.

**Onde está na difusão.** **Demo pública → produto de nicho, com mandato.** Dinamarca em
produção desde 3 de junho de 2026; França, Alemanha e Suíça com sandbox público; treze países
anunciados sem sandbox; escalonamento assumido pela Comissão.

**O que ainda falta acontecer.** Aceitação pelo setor privado fora do que a lei obriga;
divulgação seletiva de atributo funcionando na prática (provar "maior de 18" sem revelar quem é);
e não-rastreabilidade entre apresentações — sem ela, a carteira vira registro central de para
quem você se identificou.

**Quem bloqueia, e o efeito disso.** **Bancos e grandes plataformas**, que já são provedores de
identidade de fato e perdem posição; e a própria máquina administrativa dos Estados atrasados.
Efeito gerado: `e13` com prazo empurrado e confiança rebaixada (ver §7).

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "A conta sem fallback: autenticação que não guarda segredo compartilhado"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "A tela de login deixa de ser desenhada pelo produto e passa a ser pintada pelo sistema operacional"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O onboarding se reorganiza em torno do primeiro toque em vez do primeiro cadastro, e o abandono vira métrica do SO"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Forma-se um mercado de observabilidade de autenticação porque Apple e Google não expõem o funil do próprio seletor"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "A identidade visual da marca some do momento de maior atenção e o branding migra inteiro para o pós-login"
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O suporte perde o botão de reset e passa a operar verificação de identidade, virando cartório em vez de central de senha"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Engenharia social contra a mesa de ajuda substitui o phishing de credencial como principal vetor de invasão em empresa"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "A videochamada é abandonada como prova de identidade no suporte e cede lugar a prova por dispositivo previamente atestado"
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Recuperação de conta vira produto vendido à parte, com custódia social do tipo M-de-N entre contatos de confiança"
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e3
        ordem: 1
        efeito: "A herança digital deixa de ser resolvida por senha em papel e passa a exigir mecanismo técnico de sucessão"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Inventários passam a arrolar contatos legados de plataforma como bem, e o advogado de família precisa saber configurá-los"
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "A escolha de sistema operacional vira decisão sucessória da família inteira, reforçando o aprisionamento que a passkey prometia quebrar"
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "O fim da senha realoca a dependência para o chaveiro do sistema operacional, e Apple e Google viram o provedor de identidade que o botão de login já era"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O padrão de exportação de credencial vira campo de disputa regulatória e reguladores de concorrência passam a exigir portabilidade funcional, não declarada"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Gerenciadores de credencial independentes deixam de ser utilitário de segurança e passam a ser infraestrutura pessoal de identidade"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Quem não tem aparelho com hardware de atestação é empurrado de volta ao canal presencial, e a exclusão digital muda de não-saber-usar para não-ter-dispositivo-elegível"
            sinal: medio
            prazo: 2029
            confianca: media
  - disrupcao: "O sync engine: o dado mora no cliente e o servidor vira relay"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "O estado de carregamento sai da interface e o vocabulário visual da espera perde função"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O designer de interação passa a projetar o conflito em vez da espera, e a pergunta de UX vira como mostrar que a versão do outro chegou depois da sua"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "A história de edição vira elemento de primeira classe na tela em vez de painel escondido, porque o CRDT já a carrega de graça"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "A métrica de qualidade migra de tempo até o primeiro byte para tempo até a convergência, e as ferramentas de observabilidade web não medem isso"
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e6
        ordem: 1
        efeito: "O SaaS perde o aprisionamento de dados e passa a cobrar por sincronização, computação e garantia em vez de cobrar por acesso ao dado do próprio cliente"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "O cancelamento deixa de ser catastrófico e vira sazonal, e a receita recorrente perde a previsibilidade que a sustenta"
            sinal: fraco
            prazo: 2031
            confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Fornecedores reconstituem o aprisionamento numa camada acima do dado, movendo o valor para inferência, índice global e integração"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "O dado volta a sair do dispositivo por escolha do usuário para alimentar funções de IA que não cabem no aparelho, e a soberania vira uma chave que quase ninguém mantém ligada"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "O formato de arquivo volta a importar e a unidade de troca deixa de ser a API para voltar a ser o documento, agora com histórico embutido"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Produtos concorrentes passam a interoperar por leitura do mesmo documento sem acordo comercial, e o que exigia parceria vira consequência da biblioteca escolhida"
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "A escolha entre Yjs, Automerge e Loro vira decisão de ecossistema comparável à escolha de formato de imagem nos anos 1990, com um vencedor levando quase tudo"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "O time de dados perde o registro central de comportamento porque o clique que nunca chega ao servidor não vira linha de tabela"
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Pesquisa de produto volta a depender de método declarado como entrevista e teste moderado, porque a telemetria passiva ficou incompleta"
            sinal: fraco
            prazo: 2031
            confianca: baixa
  - disrupcao: "O servidor cego: cifra ponta-a-ponta em dado de aplicação, não só em mensagem"
    efeitos:
      - id: e9
        ordem: 1
        efeito: "A moderação migra do servidor para o dispositivo e para a denúncia, e a plataforma passa a moderar o que lhe é mostrado em vez do que guarda"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "O desenho do fluxo de denúncia vira infraestrutura crítica de segurança em vez de item escondido no menu de contexto"
            sinal: medio
            prazo: 2029
            confianca: media
          - id: e9.2
            ordem: 2
            efeito: "Metadado substitui conteúdo como matéria-prima de detecção e de publicidade, e a cifra não cobre justamente o que mais identifica"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: "A pressão regulatória se desloca da cifra para o grafo social, e a disputa do fim da década é sobre retenção de metadado em vez de porta dos fundos"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: "Plataformas com receita de publicidade desligam a cifra opcional alegando baixa adoção, e o ponta-a-ponta se consolida como característica de nicho ou de produto pago em vez de padrão da web"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "Privacidade vira estrato de mercado e a desigualdade de privacidade passa a ser mensurável por faixa de renda"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: "A ANPD trata privacidade paga como prática abusiva de consumo, e a discussão sai da segurança da informação e entra no direito do consumidor"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: "O padrão de fábrica vira o único vetor que importa, e quem quiser ponta-a-ponta terá de impor sem opção de ativar ou não terá"
            sinal: medio
            prazo: 2028
            confianca: media
      - id: e11
        ordem: 1
        efeito: "Busca e inferência sobre dado cifrado viram a fronteira técnica cara, e o produto precisa escolher entre ser cego e ser útil"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "A arquitetura híbrida vira padrão de fato e soberania passa a significar auditabilidade do enclave em vez de o dado não sair"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: "O vocabulário público de privacidade desloca-se de onde o dado está para quem consegue provar o que fez com ele, e a prova por atestação remota vira argumento de marketing incompreensível para o usuário"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: "Finanças pessoais e saúde são o primeiro nicho em que servidor cego e IA local fecham a conta, porque o dado é sensível e o corpus é pequeno"
            sinal: medio
            prazo: 2028
            confianca: media
      - id: e12
        ordem: 1
        efeito: "O Estado responde à cegueira do servidor deslocando a exigência para o dispositivo e para a porta de entrada"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: "A verificação de idade cria um novo ponto central de dado de identidade, exatamente o que a arquitetura queria eliminar"
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: "Prova de atributo com divulgação seletiva sai do artigo acadêmico e vira requisito escrito em edital de compra pública"
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: "Serviços cifrados passam a sair de jurisdições em vez de cumprir, e a disponibilidade de um aplicativo passa a depender do país"
            sinal: medio
            prazo: 2029
            confianca: media
  - disrupcao: "A carteira de identidade emitida pelo Estado como trilho de login"
    efeitos:
      - id: e13
        ordem: 1
        efeito: "O botão de entrar com Google ganha um concorrente que não é empresa, e o provedor de identidade privado perde a posição de intermediário obrigatório em serviço regulado"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: "O padrão visual de entrar-com fragmenta-se por país e produtos globais passam a precisar de uma tela de login localizada por jurisdição"
            sinal: fraco
            prazo: 2030
            confianca: baixa
          - id: e13.2
            ordem: 2
            efeito: "Projetar exatamente o que será revelado numa divulgação seletiva vira trabalho de design de interação e deixa de ser tarefa do jurídico"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e13.2.1
                ordem: 3
                efeito: "A fadiga de consentimento migra do aviso de cookie para a carteira e o usuário passa a aprovar divulgações sem ler, repetindo o que fez com cookies"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: "A soberania muda de dono e a pessoa deixa de depender de uma empresa para depender do Estado, reescrevendo o mapa de quem pode desligar sua identidade"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: "Comunidades que desconfiam do Estado adotam identidade autossoberana não estatal como contracultura técnica, e o campo se parte entre carteira oficial e chave própria"
            sinal: fraco
            prazo: 2031
            confianca: baixa
          - id: e14.2
            ordem: 2
            efeito: "O rastro deixado a cada apresentação da carteira reintroduz a vigilância que a arquitetura prometia eliminar, a menos que a não-rastreabilidade vire obrigação legal"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e14.2.1
                ordem: 3
                efeito: "A confiança na carteira estatal passa a variar com o governo de turno e a adoção vira função da estabilidade política em vez da qualidade técnica"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e15
        ordem: 1
        efeito: "O Brasil consolida um desenho próprio de soberania de dados, centralizado no Estado e portável por regulação, em vez de local-first"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: "Produtos brasileiros implementam soberania como conformidade com a ANPD em formato legível por máquina, e não como arquitetura no cliente"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: "O Brasil exporta o modelo de portabilidade por mandato para outros países do Sul global e a disputa internacional passa a ser entre dois desenhos de soberania, arquitetura contra regulação"
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e15.2
            ordem: 2
            efeito: "A exclusão por dispositivo vira questão de política pública porque um login que exige hardware de atestação nega serviço a quem tem celular antigo"
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e16
        ordem: 1
        efeito: "Provar identidade fica barato e o anonimato passa a ser a exceção que se pede em vez do padrão que se tem"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: "Espaços de fala anônima perdem população por atrito de entrada e a pesquisa sobre temas estigmatizados perde sua principal fonte"
            sinal: fraco
            prazo: 2031
            confianca: baixa
```

### O que o bloco não consegue dizer

**Os mecanismos, um a um.** `e1` acontece porque a mediação condicional do WebAuthn entrega o
seletor de credencial ao sistema operacional: o produto pede, o SO desenha. `e2` acontece porque,
sem segredo compartilhado, não há o que resetar — resta provar quem é a pessoa, que é serviço
caro e de julgamento; os 81% de redução em chamados de login medidos pela FIDO não significam
suporte mais barato, significam que **os chamados que sobram são os difíceis**. `e4` acontece
porque os 5 bilhões de passkeys moram majoritariamente em dois chaveiros, e perder a conta do
chaveiro é perder tudo de uma vez — a dependência não sumiu, mudou de endereço. `e5` acontece
porque a leitura vem do banco local e a latência de rede sai do caminho da renderização: é
literalmente o primeiro ideal do ensaio de 2019. `e10` acontece porque cifra opcional tem adoção
baixa **por construção** — e a baixa adoção vira a justificativa para removê-la, como a Meta
escreveu. `e12` acontece porque, quando o servidor não lê, as duas únicas superfícies que sobram
são o cliente e a porta de entrada; daí varredura do lado do cliente e verificação de idade
serem a mesma resposta a duas perguntas diferentes. `e15` acontece porque a portabilidade
brasileira já tem trilho, tem regulador e tem 208,79 milhões de consentimentos rodando — não
precisa de arquitetura nova para existir.

**As classes de referência usadas nos prazos** (§3, regra 5 da skill):

| Referência | O que levou | Onde apliquei |
|---|---|---|
| MFA de consumo: disponível em 2011, maioria das contas Google só em 2021, e por auto-inscrição | ~10 anos, e só com imposição | `e2`, `e4.2` — a remoção do fallback não é decisão do usuário, é decisão do fornecedor; por isso 2029, não 2027 |
| WhatsApp ponta-a-ponta por padrão em abril de 2016: ~1 bilhão de pessoas num dia, sem opt-in | instantâneo quando é padrão de fábrica | `e10.2` — E2E só escala quando imposto; o Instagram 2023–2026 é o contraexemplo que confirma |
| HTTPS: autoridade certificadora gratuita em 2016, Chrome marcando HTTP como inseguro em 2018, >90% das páginas por volta de 2021 | ~5 anos do gatilho à maioria | `e11.1` — mas com ressalva: HTTPS não custava receita a ninguém, e servidor cego custa |
| Colaboração em nuvem: Google Docs 2007, padrão de trabalho por volta de 2012 | ~5 anos | `e5`, `e7` — o sync engine está em 2026 onde o Docs estava em 2008 |
| Pix (nov/2020) e Open Finance Brasil (2021 → 208,79 mi de consentimentos em jul/2026) | ~3 a 5 anos, com mandato regulatório | `e13`, `e15` — adoção empurrada por lei tem outra curva, mais rápida e mais desigual |
| Realidade virtual de consumo: mais de dez anos e ainda não | pode simplesmente não chegar | o teto de ceticismo aplicado a `e14.1` e `e16.1` |

**Onde o STEEP ficou vazio.** Social: `e2.1`, `e3`, `e10.1`, `e16.1`. Tecnológico: quase tudo.
Econômico: `e6`, `e6.1`, `e6.2`, `e10.1`. Político: `e12`, `e13`, `e14`, `e15`. **Ecológico:
vazio, e registro que ficou vazio.** Tentei e não consegui derivar um efeito ambiental específico
desta raiz que não fosse genérico — mover computação do centro de dados para bilhões de aparelhos
tem efeito energético real, mas eu não achei número que dissesse o sinal, e sem número seria
invenção. Fica como lacuna declarada.

**Quem perde, nomeado.** Pessoa sem aparelho recente (`e4.2`, `e15.2`, e é a mesma pessoa nas
duas — ver §4 de cruzamentos); herdeiro sem caminho técnico (`e3`); mesa de ajuda, que ganha
trabalho mais difícil com menos volume (`e2`); time de dados e pesquisa de produto (`e8`, `e8.1`);
quem depende de fala anônima (`e16.1`); quem não pode pagar por privacidade (`e10.1`); e o
provedor de identidade privado (`e13`), que é o único dessa lista que perde poder em vez de
perder acesso.

## 6. Sinais fracos e wildcards

### Sinais fracos

**1. Keyhive / BeeKEM.** A Ink & Switch está formalizando a segurança da camada de criptografia
de grupo para software local-first. Hoje é item de newsletter de laboratório. *O que mudaria:*
é a peça que falta para `e7` e `e11.2` — sem criptografia de grupo com entrada e saída de membro,
local-first cifrado não passa de app de uma pessoa só. *Sinal observável de crescimento:* uma
biblioteca CRDT de uso corrente (Yjs ou Automerge) embarcar controle de acesso cifrado como
padrão de uma versão maior, não como exemplo.

**2. O sync engine como dependência padrão de framework.** Zero chegou à 1.0 em junho de 2026 e
TanStack DB disputa o mesmo espaço. *O que mudaria:* levaria `e5` de "produtos que escolheram
isso" para "produtos que receberam isso de graça". *Sinal observável:* um meta-framework de
grande adoção documentar um sync engine como o caminho padrão de dados — não como integração
possível, mas como o que o `create-app` gera.

**3. IA de finanças pessoais rodando inteiramente na máquina.** É o casamento deste tema com o
tema 16, e a varredura da turma já o encontrou: ferramentas de contabilidade auto-hospedadas,
agentes financeiros local-first, contadores de IA que guardam tudo em SQLite local. *O que
mudaria:* validaria `e11.2` e falsearia `e6.2.1`. *Sinal observável:* uma dessas ferramentas
chegar a uma loja de aplicativos de grande porte, ou ser adotada por uma instituição financeira
regulada como cliente oficial.

**4. Exportação de credencial que funciona de verdade.** CXF é Proposed Standard desde agosto de
2025 e o suporte chegou a iOS 26 e ao Play Services 26.21. *O que mudaria:* é a única coisa que
impede `e4` de ser permanente. *Sinal observável:* um número público de credenciais efetivamente
migradas de chaveiro de SO para gerenciador independente — hoje ninguém publica isso, e a
ausência do número já é informação.

**5. O recuo do ponta-a-ponta como padrão de indústria.** Um caso é caso; dois é tendência.
*Sinal observável:* um segundo serviço de centena de milhões de usuários desligar cifra opcional
até 2027, com a mesma justificativa de baixa adoção.

**6. Auto-hospedeiro não é ativista de privacidade.** O achado do estudo do CISPA — quem
auto-hospeda não é mais sensível à privacidade que a média, e sim mais habilidoso tecnicamente —
é um sinal fraco *contrário* à narrativa deste tema inteiro. *O que mudaria:* se ele se
confirmar em outras populações, a soberania de dados não é um movimento de valores buscando
ferramenta, é um hobby técnico procurando justificativa — e o mapa perde a força social que
`e10.1` e `e14.1` assumem.

### Wildcards

**W1 — Uma lei que obrigue ponta-a-ponta ou local-first por padrão em dado sensível.**
*Mecanismo:* um vazamento de escala nacional envolvendo dado de saúde ou o acervo de documentos
de identidade acumulado pelas obrigações de verificação de idade produz reação legislativa que
inverte o ônus — quem guarda em claro responde objetivamente pelo dano, sem discussão de culpa.
O precedente existe em pequena escala: em 2025 um fornecedor de verificação de idade do Discord
vazou cerca de 70 mil imagens de documento. *Por que é improvável:* o vento regulatório de 2026
sopra exatamente no sentido contrário — CSAR em trílogo, Chat Control 1.0 estendido até abril de
2028, Online Safety Act em execução, Home Office britânico litigando contra a Apple. *O que faz
com o mapa:* inverte `e10` e tira R3 do recuo; `e11` deixa de ser escolha e vira restrição de
projeto. *Sinal precoce:* um projeto de lei nacional que cite "criptografia ponta-a-ponta" como
**obrigação** e não como risco.

**W2 — Quebra prática da atestação de dispositivo.** *Mecanismo:* uma falha de classe no enclave
seguro de um dos dois grandes fabricantes permite extrair ou forjar credenciais sincronizadas.
A passkey não tem fallback por desenho: se a raiz de confiança cai, não existe "trocar a senha",
porque não há senha. *Por que é improvável:* esse hardware é auditado há mais de uma década e a
superfície é pequena. *O que faz com o mapa:* mata R1 e traz a senha de volta como camada de
recuperação, num movimento que nenhuma das curvas de adoção prevê. *Sinal precoce:* um CVE
crítico em atestação com prova de conceito pública, ou uma atualização de emergência que force
re-registro de credencial em escala.

**W3 — Uma ordem judicial que atinja a sincronização de credencial, e não o backup.**
*Mecanismo:* é o mesmo instrumento que retirou a Proteção Avançada de Dados do Reino Unido —
uma notificação de capacidade técnica —, apontado para o chaveiro em vez do iCloud. *Por que é
improvável:* o custo político de deixar um país inteiro sem login seria muito maior que o de
deixá-lo sem backup cifrado. *O que faz com o mapa:* 5 bilhões de credenciais viram presas ao
dispositivo de um dia para o outro naquela jurisdição, e `e2`, `e3` e `e4.2` chegam todos juntos
e antes do prazo. *Sinal precoce:* uma notificação de capacidade técnica que mencione
*credential sync* em vez de *backup*.

## 7. Contra o próprio mapa

Este é o passo de bateria da §6 da skill, feito por escrito sobre o mapa já pronto. O registro
de alterações no fim da seção é auditável: traz o `id`, o valor antes e o valor depois.

### 7.1 Pré-mortem — é 2031 e este mapa se mostrou errado. Por quê?

**Razão 1: porque nada disso saiu do nicho técnico, e a maioria das pessoas continuou em
2031 exatamente onde estava em 2026** — dado no servidor de alguém, lido por alguém, com senha e
código por SMS. O indício mais forte disso já está no mapa e vem da melhor fonte que abri: o
estudo do CISPA mostra 8,4% como *limite superior* de auto-hospedagem nos EUA e, pior para a
tese, mostra que quem auto-hospeda **não é mais sensível à privacidade** que a média. Se a
motivação é habilidade técnica e não valor, não há por que esperar difusão para fora de quem tem
a habilidade. *Aponta para:* R2 inteiro, e para `e6`, que assume um mercado querendo pagar por
sincronização.

**Razão 2: porque confundi padrão técnico com mudança de poder.** Passkey substituiu a senha e
não mudou nada da relação: o mesmo número pequeno de empresas continua mediando. Se em 2031 o
resultado for "a mesma internet, com login mais rápido", este mapa terá descrito uma melhoria
sustentadora de 200 páginas. *Aponta para:* `e1` e `e4` — e note que `e4` já **é** a formulação
dessa crítica dentro do mapa, o que é a razão de ele ter confiança alta.

**Razão 3: porque a IA comprou a soberania de volta com conveniência.** A troca mais provável de
todas: a pessoa entrega o dado porque o assistente é bom demais para recusar. Isso não exige
nenhuma decisão consciente, nenhuma lei e nenhum recuo público — exige só um botão bem
posicionado. *Aponta para:* `e6.2.1` e `e11.1`, que descrevem exatamente isso.

### 7.2 Extrapolação linear

`e5` ("o estado de carregamento sai da interface") é o efeito mais linear do mapa: é "mais rápido,
sempre" — o mesmo argumento de cache local que se faz desde o AJAX. A não-linearidade que o
salva, e que precisei escrever para mantê-lo, é que o desaparecimento da espera **não** devolve
uma interface sem problema: ele troca um problema resolvido (mostrar que está carregando, com
vinte anos de vocabulário visual acumulado) por um problema sem vocabulário nenhum (mostrar que
a versão do outro chegou depois da sua). É `e5.1`, e é onde está o trabalho de quem projeta.
Sem essa passagem, `e5` viraria contexto da seção 3.

`e9.1` ("o fluxo de denúncia vira infraestrutura crítica") também é linear — denúncia já é
importante hoje. Mantive porque o mecanismo muda de natureza: hoje a denúncia é *complemento* da
varredura do servidor; com servidor cego ela é o **único** canal, e um canal único tem
requisitos de desenho que um complemento não tem.

### 7.3 Velocidade de adoção

Confrontei cada prazo de efeito com sinal fraco contra a classe de referência da §5. Dois não
sobreviveram na forma original:

- `e2` supunha 2028 com confiança alta. A referência de MFA de consumo é dura: de disponível
  (2011) a maioria das contas (2021) foram dez anos, e só com auto-inscrição forçada. A remoção
  do fallback é uma decisão de fornecedor, não de usuário, e 28% de organizações totalmente sem
  senha em 2026 não chegam a 2028 com o suporte reconfigurado. Empurrei para 2029 e rebaixei.
- `e13` supunha 2028 com confiança alta por causa do prazo legal de dezembro de 2026. Mas prazo
  legal não é adoção: a própria Comissão admitiu lançamento escalonado, e o levantamento de julho
  de 2026 mostra **um** país em produção contra treze apenas anunciados. Empurrei para 2029 e
  rebaixei para média.

### 7.4 A raiz que não acontece

- **Se R1 não acontece** (a senha não some, o passkey vira só mais um segundo fator): caem `e1`
  a `e4` e seus filhos — 4 de 1ª, 7 de 2ª, 4 de 3ª. R2, R3 e R4 ficam de pé, porque nenhum
  depende do fim da senha. Teste passa.
- **Se R2 não acontece** (o sync engine continua nicho e o dado segue no servidor): caem `e5` a
  `e8`. R1 e R4 são indiferentes. R3 fica **mais forte**, curiosamente: sem dado no cliente, a
  única privacidade possível é cifrar no servidor. Teste passa.
- **Se R3 não acontece** — e este é o cenário mais provável dos quatro, porque já está
  acontecendo: caem `e9` a `e11`, mas **`e12` sobrevive inteiro**, porque a verificação de idade
  e a varredura no cliente não dependem de haver cifra: dependem de haver vontade regulatória, e
  ela existe independentemente. Isso me obrigou a verificar o parentesco de `e12`: ele não deriva
  logicamente de R3 e sim da mesma pressão política que R3 enfrenta. Mantive sob R3 porque o
  mecanismo escrito (*quando o servidor não lê, sobra o cliente e a porta*) é específico — mas
  registro a fragilidade do laço.
- **Se R4 não acontece** (as carteiras atrasam e viram documento de viagem eletrônico): caem
  `e13`, `e14`, `e16`. **`e15` sobrevive**, porque o gov.br e o Open Finance já existem sem o
  eIDAS. Teste passa, com a mesma ressalva do parentesco.

Nenhuma raiz é as outras disfarçada. A que chega mais perto de ser dependente é R4, que se apoia
em R1 para a parte de autenticação — mas rompe outra coisa (o intermediário), com outro ator (o
Estado), então fica.

### 7.5 Teste da causa solta

Rodado sobre os efeitos de 2ª e 3ª ordem. Três não passaram e foram **removidos** para a §12:

- *"Cursos de design reorganizam o currículo em torno de local-first"* — é um dos efeitos
  proibidos pela §3 da skill, serve para qualquer tema, e aconteceria por dez outros motivos.
- *"Surge a profissão de arquiteto de soberania de dados"* — idem, e sem o nome de uma
  profissão real e do mecanismo que a cria, é enredo.
- *"Aumenta a preocupação da sociedade com privacidade"* — não tem sujeito, não tem mecanismo, e
  a melhor fonte que abri sugere o contrário (auto-hospedeiros não são mais sensíveis à
  privacidade que a média).

E um efeito foi **reparentado**: `e10` estava como filho de `e12` na primeira versão, como se o
recuo das plataformas fosse consequência da pressão regulatória. Não é: o sinal (8 de maio de
2026) é anterior e a justificativa declarada pela Meta foi comercial — baixa adoção —, não legal.
Promovi para 1ª ordem sob R3.

### 7.6 Suposições escondidas

Listo as que o mapa assume sem ter dito, cada uma um wildcard em potencial:

1. **Que Apple e Google continuam permitindo.** Todo o mapa de R1 e boa parte de R2 rodam dentro
   de APIs que duas empresas controlam e podem restringir. Nenhuma cláusula do mapa sobrevive a
   uma mudança de política de loja.
2. **Que o padrão aberto continua aberto.** CXF/CXP existe; nada garante que a implementação
   permaneça completa. Um padrão implementado pela metade é indistinguível, para o usuário, de
   padrão inexistente.
3. **Que a energia e a memória do dispositivo são grátis.** Índice de busca no cliente, cifra e
   histórico de CRDT custam bateria e armazenamento — e esse custo recai desproporcionalmente
   sobre aparelhos baratos, que é o oposto da distribuição de quem precisa de privacidade.
4. **Que "soberania" é um valor que as pessoas têm.** Já tratada acima; é a suposição mais frágil
   do documento.
5. **Que o Brasil continua com ANPD atuante.** `e10.1.1` e `e15.1` assumem regulador com agenda
   própria e capacidade de execução.

### 7.7 Viés do autor

Dois, nomeados. Primeiro: **gosto do local-first** — é o tipo de arquitetura que resolve um
problema real com elegância, e isso me faz superestimar sua difusão. O contrapeso que precisei
impor foi dar a `e10` (o recuo do ponta-a-ponta) sinal **forte** e confiança **alta**, mais do
que qualquer efeito acelerador do mapa. É desconfortável, e é o dado. Segundo: **desconfio do
Estado como raiz de confiança**, o que poderia me levar a inflar R4 como ameaça. Corrigi
tratando R4 pelo mesmo critério das outras — e o resultado é que ela tem a curva de adoção mais
previsível das quatro, porque tem prazo legal, e a curva mais desigual, porque depende de 27
administrações.

### 7.8 Calibração

Confiança alta: 6 na 1ª ordem, 1 na 2ª, 0 na 3ª. Confiança baixa: 1 na 1ª, 10 na 2ª, 14 na 3ª.
A distribuição cai com a ordem, como a §3 exige. A única alta na 2ª ordem é `e12.1` (o dado de
identidade acumulado pela verificação de idade), e ela se sustenta em fato consumado — obrigação
em vigor desde julho de 2025 e um vazamento de cerca de 70 mil documentos já ocorrido.

### 7.9 Registro de alterações — antes → depois

- `e2`: prazo 2028 → **2029**; confianca alta → **media**. Porque a classe de referência do MFA
  de consumo mostra dez anos até a maioria, e a remoção do fallback depende de decisão de
  fornecedor.
- `e3.1.1`: prazo 2031 → **2033**. Porque depende de `e3.1` (prática cartorária e forense), que
  já está no limite do horizonte. **Fica fora da janela do mapa**, e declaro.
- `e6`: prazo 2029 → **2030**; confianca alta → **media**. Porque não achei nenhum caso em escala
  de cobrança por sincronização sobre dado não aprisionado — só nichos.
- `e8`: sinal medio → **fraco**; confianca media → **baixa**. Porque é inferência arquitetural,
  não observação: não abri nenhum caso de time de dados reclamando de perda de telemetria por
  local-first.
- `e9`: prazo 2028 → **2029**. Porque moderação sem conteúdo é problema de produto além de
  problema técnico, e o ciclo de reprojeto de um fluxo de denúncia em plataforma grande é longo.
- `e10`: **promovido de 2ª ordem (filho de `e12`) para 1ª ordem sob R3**, com o parentesco
  corrigido — a causa declarada foi comercial, não regulatória.
- `e11`: confianca alta → **media**. Porque a fronteira de busca sobre dado cifrado é cara e não
  tem prazo confiável; a saída híbrida (`e11.1`) pode absorvê-la inteira.
- `e13`: prazo 2028 → **2029**; confianca alta → **media**. Porque um país em produção em julho
  de 2026 e escalonamento admitido pela Comissão não sustentam 2028.
- `e15.1.1`: prazo 2031 → **2032**. Porque exportar modelo institucional é mais lento que
  exportar tecnologia. **Fica fora da janela do mapa**, e declaro.
- `e16`: sinal forte → **medio**. Porque a obrigação de verificação de idade vale hoje para
  conteúdo adulto em jurisdições específicas, não para a web.
- **Removidos** (vão para a §12): "cursos de design reorganizam o currículo"; "surge a profissão
  de arquiteto de soberania de dados"; "aumenta a preocupação da sociedade com privacidade".

Cota da §6 cumprida: R1 rebaixou `e2` e `e3.1.1`; R2 rebaixou `e6` e `e8`; R3 rebaixou `e9`,
`e11` e reparentou `e10`; R4 rebaixou `e13`, `e15.1.1` e `e16`. A bateria derrubou coisa em todas
as quatro raízes.

## 8. O que a máquina errou

Eu sou a máquina. Sobre o meu próprio trabalho nesta rodada:

1. **Afirmei que o gov.br adotou passkey em 2026 e a fonte não sustenta isso.** A afirmação veio
   de reportagens de fdr.com.br e uai.com.br, portais de notícia popular sem autoridade técnica.
   Fui verificar na página oficial do Governo Digital sobre a Conta gov.br e **ela não menciona
   passkey, chave de acesso nem autenticação sem senha** — fala de reconhecimento facial,
   validação biométrica e autenticação multifator, que são outra coisa. Biometria local que
   desbloqueia o aplicativo **não é** WebAuthn. Removi a afirmação do corpo do mapa; `e15`
   mantém confiança alta apoiado nos outros dois pilares (login único por decreto e Open Finance
   em escala), não neste.
2. **"5 bilhões de passkeys" é o vendedor contando a própria adoção, e é redondo demais.** A FIDO
   Alliance existe institucionalmente para promover passkeys, e o número é apresentado como
   *estimativa*, sem método publicado — diferente das pesquisas Sapio que acompanham o
   comunicado, essas sim com n e margem de erro. Usei o número porque é o único que existe, mas
   ele não tem o mesmo estatuto dos outros.
3. **A cadeia de citação do "48% do top-100" tem um elo que não abri.** O número aparece no blog
   da Descope atribuído à FIDO; a página da FIDO que abri traz outros números e **não traz este**.
   Ou seja: estou citando um fornecedor de autenticação citando uma aliança de autenticação. É
   plausível e não é verificado.
4. **Errei o número da auto-hospedagem na primeira passagem.** Escrevi "827 mil membros no
   r/selfhosted" a partir de resultado de busca, e ao conferir achei duas medidas divergentes
   (827 mil e 724.594 em 2 de agosto de 2026), nenhuma do Reddit. Descartei a métrica inteira —
   contagem de membros de fórum não mede adoção — e troquei pelo estudo do CISPA na USENIX
   Security 2024, que baixei e li. Mas mesmo aí há discrepância: o resumo de busca e o blog da
   Collabora dizem **8,5%**, e o próprio artigo diz **limite superior de 8,4%**. Usei 8,4%, do
   original.
5. **Generalizei de n=1 no caso do Instagram.** Escrevi, na primeira versão, que "o ponta-a-ponta
   está recuando". É um caso, num produto em que a cifra nunca foi padrão de fábrica — e a
   própria matéria diz que a Meta sabotou a adoção que depois usou como justificativa. Reescrevi
   como "um caso forte de recuo", e transformei "um segundo caso até 2027" em sinal fraco
   observável na §6, que é o lugar honesto disso.
6. **Duas fontes primárias me recusaram acesso e eu quase citei de memória.** O comunicado da
   FIDO e o PDF da USENIX devolveram 403 à ferramenta de leitura. No caso da USENIX consegui
   baixar por outro caminho e li o artigo. No caso da FIDO, a página abriu pela ferramenta de
   navegação mas bloqueia requisição automatizada — por isso ela **não está na §11** (onde só
   entra link que responde ao verificador) e está registrada na §12. Se eu não tivesse checado,
   teria entregue uma seção de fontes com link quebrado e a aparência de rigor.
7. **A tabela de classes de referência tem uma data que eu não verifiquei nesta rodada.** "HTTPS
   acima de 90% das páginas por volta de 2021" e "maioria das contas Google com verificação em
   duas etapas em 2021" vieram do meu conhecimento prévio, não de fonte aberta aqui. Estão na
   prosa como referência de ordem de grandeza e devem ser tratadas assim — se alguém usar esses
   anos como dado, estará usando memória de modelo de linguagem.

## 9. Três cenários para 2031

**Provável — "a soberania é uma configuração".** Em 2031 a senha praticamente sumiu da vida
cotidiana em serviço grande, e ninguém sente falta. O login é um toque, e é o sistema operacional
quem o desenha: produtos globais têm três variantes de tela de entrada, uma por regime de
identidade. Aplicativos novos nascem com sync engine por padrão, então o carregamento sumiu e no
lugar dele há um indicador discreto de "há uma versão mais nova" que cada produto resolveu de um
jeito diferente. A cifra ponta-a-ponta ficou onde já estava — mensageria — e não atravessou para
dado de aplicação, exceto em finanças pessoais e saúde, onde virou requisito de conformidade.
As funções mais úteis dos produtos rodam sobre dado que saiu do aparelho, com consentimento, para
um enclave atestado; a opção de manter tudo local existe, está a três telas de distância e é
usada por uma minoria com formação técnica. O Brasil chegou aqui por outro caminho: gov.br para
identidade, Open Finance para portabilidade, ANPD para o resto — e quase nenhuma aplicação
local-first nascida no país. *Sinal precoce de que estamos neste cenário:* um meta-framework de
grande adoção documentar sync engine como padrão **no mesmo ano** em que um segundo serviço de
massa desliga cifra opcional.

**Desejável — "o servidor cego ficou barato".** Em 2031 a criptografia de grupo para software
local-first virou biblioteca resolvida, e cifrar deixou de ser decisão de arquitetura para virar
padrão de fábrica de duas ou três bibliotecas que todo mundo usa — do jeito que HTTPS virou.
Busca e inferência sobre dado do usuário rodam no aparelho para o corriqueiro e, para o difícil,
num enclave que o próprio usuário pode auditar, com prova pública do que foi executado. A
exportação de credencial funciona: dá para sair do chaveiro do fabricante em três toques, e os
gerenciadores independentes viraram categoria de infraestrutura pessoal. A recuperação de conta
foi resolvida socialmente — contatos de confiança, quórum, prazo de espera — e a sucessão digital
entrou no inventário como qualquer bem. A verificação de idade acontece por prova de atributo:
o site sabe que você é maior, não sabe quem você é. *O que teria de ser feito para chegar aqui:*
a criptografia de grupo sair do laboratório antes de 2028; um regulador de concorrência tratar
exportação de credencial como obrigação funcional e não declarada; e alguma jurisdição
relevante escrever divulgação não-rastreável como requisito, não como recomendação. *Sinal
precoce:* uma biblioteca CRDT de grande uso lançar controle de acesso cifrado como padrão.

**Indesejável — "cada camada trocou de dono, nenhuma trocou de natureza".** Em 2031 a senha
acabou e a dependência dobrou: a credencial mora no chaveiro de duas empresas, a identidade mora
na carteira do Estado, e quem perde o acesso a qualquer uma das duas perde a vida digital inteira
sem ter a quem recorrer — não existe suporte, porque não existe o que resetar. A verificação de
idade acumulou o maior depósito de documentos de identidade da história, e já vazou mais de uma
vez. Privacidade virou linha de assinatura: quem paga tem servidor cego, quem não paga é lido, e
a diferença é medível por renda. O ponta-a-ponta sobreviveu em aplicativos de dezenas de milhões
de usuários e não entrou nos de bilhões. E o dado voltou todo para o servidor — não por imposição,
por conveniência: o assistente é bom demais quando enxerga tudo. *O sinal precoce deste cenário,
e ele já está piscando:* a distância entre o discurso de soberania e o número de gente que a
exerce continuar crescendo — 5 bilhões de passkeys de um lado, 8,4% de auto-hospedagem do outro,
e uma plataforma de centena de milhões desligando a cifra sem custo reputacional mensurável.

## 10. O experimento

**O que é.** *Caderno cego* — um caderno colaborativo para duas a quatro pessoas com três
restrições duras: (1) **nenhuma senha**, autenticação só por WebAuthn, sem qualquer rota
alternativa de recuperação além das que o próprio sistema oferecer; (2) **o servidor não lê nada**
— o conteúdo trafega e repousa cifrado, e o servidor só conhece identificadores opacos e
carimbos de tempo; (3) **o estado mora no cliente**, em CRDT (Automerge ou Yjs), de modo que o
caderno funcione em avião. Sobre essa base, uma única funcionalidade é implementada **duas
vezes**: a busca de texto entre os participantes, numa versão cega (índice construído e
consultado no cliente) e numa versão convencional (índice no servidor, que lê). As duas ficam
atrás de uma chave que o avaliador vira sem avisar o usuário.

**Que pergunta sobre o futuro ele ajuda a responder.** Duas, e as duas são de primeira ordem no
briefing deste tema. A primeira: **quanto custa a cegueira do servidor?** — em latência, em
bateria, em tamanho de aplicativo, em linhas de código e em tempo de quem constrói. A segunda:
**o usuário percebe?** Se ninguém distingue a versão cega da convencional num teste às cegas,
então `e10` (plataformas desligam a cifra) é uma escolha puramente econômica, sem custo de
produto, e todo o argumento de que privacidade compete com utilidade cai. Se todo mundo distingue,
o argumento se sustenta e o mapa está certo pelo motivo certo.

**A segunda metade: a prova de recuperação.** Cada dupla da turma tem de recuperar o acesso do
colega que "perdeu o celular" — o aparelho é confiscado no início da sessão —, usando só o que o
sistema oferecer. Cronometrado, com o caminho registrado. É a resposta empírica à primeira
pergunta do briefing: *se a senha acaba, o que acontece com quem perde o aparelho?* Minha aposta
é que a maioria das duplas ou não consegue, ou consegue por um caminho que reintroduz um segredo
compartilhado — e descobrir isso na pele vale mais que qualquer slide sobre passkeys.

**Que tecnologia emergente usa, e por que não dá com a madura.** Usa WebAuthn **sem fallback**
(a parte emergente; passkey com senha de reserva é maduro e não tem pergunta) e CRDT com
criptografia no cliente (emergente; CRDT sem cifra é maduro e roda em produto comercial). Com
tecnologia madura — senha, servidor que lê, banco no servidor — as duas funcionalidades são
triviais, a busca leva vinte linhas, a recuperação leva um e-mail, e não sobra pergunta nenhuma
para investigar. O experimento **só existe** porque as duas restrições são recentes.

**O que a turma faz ao testar em sala.** Três rodadas de vinte minutos. Rodada 1: todos escrevem
no mesmo caderno, com dois aparelhos em modo avião — observa-se o que aparece na tela quando eles
voltam, e cada pessoa anota o momento em que ficou em dúvida sobre qual versão do texto está
vendo (é o material de `e5.1`, projetar o conflito). Rodada 2: busca às cegas, A/B, com medição
de tempo e uma pergunta só no fim — "qual das duas estava mais lenta?". Rodada 3: a recuperação
cronometrada. Fecha com a comparação entre o que cada um **achou** que custava privacidade e o
que ela custou de fato nos números coletados.

**O resultado que me faria mudar de ideia.** Se a versão cega da busca for indistinguível da
convencional — em tempo percebido, em bateria e em esforço de implementação —, então a premissa
central de R3 e de `e11` está errada: o servidor cego não cobra preço de produto, cobra preço de
modelo de negócio, e são coisas diferentes que eu tratei juntas. Nesse caso `e10` deixa de ser
"plataformas escolhem utilidade" e vira "plataformas escolhem receita", `e11` perde a razão de
existir, e o mapa precisa ser refeito com uma raiz a menos e um conflito de interesse a mais.
E se, ao contrário, **todas** as duplas recuperarem o acesso rapidamente e sem reintroduzir
segredo, então `e2`, `e2.2` e `e3` estão superestimados e a §7 foi frouxa com eles.

## 11. Fontes

Todas abertas nesta rodada, em 11 de setembro de 2026. As que respondem a requisição automatizada
estão aqui; a que não responde está registrada na §12.

1. `https://www.inkandswitch.com/essay/local-first/` — Kleppmann, Wiggins, van Hardenberg e
   McGranaghan, *Local-first software: you own your data, in spite of the cloud*, abril de 2019.
   Sustenta a origem do campo, os sete ideais (inclusive "no spinners" e o *Long Now*) e a
   admissão dos próprios autores de que construir isso ainda é difícil. **Confiabilidade alta:**
   é a fonte primária que nomeou o objeto, assinada, datada e com os protótipos descritos.
2. `https://www.inkandswitch.com/` — site do laboratório. Sustenta a existência atual de
   Patchwork, Automerge e Keyhive/BeeKEM, e a formulação de que centralizar o dado no servidor
   retira agência do usuário. **Confiabilidade alta para o que o laboratório faz, e é parte
   interessada** no sucesso do campo — usei para fato, não para avaliação.
3. `https://www.localfirstconf.com/` — Local-First Conf 2026. Sustenta datas (12 a 14 de julho de
   2026, Berlim, Festsaal Kreuzberg), tema da edição, organizadores e palestrantes, e o fato de
   ser a terceira edição. **Confiabilidade alta para fato verificável** (é o site do próprio
   evento); nula como medida de adoção.
4. `https://www.infoq.com/news/2026/06/zero-version-1/` — Zero 1.0, 8 de junho de 2026. Sustenta
   a data, a arquitetura do zero-cache, os dois anos de desenvolvimento e a lista de concorrentes
   (ElectricSQL, InstantDB, PowerSync, Convex, com Jazz para arranjo descentralizado).
   **Confiabilidade média-alta:** veículo técnico editorializado, mas a informação é factual e
   datada.
5. `https://www.usenix.org/system/files/usenixsecurity24-grober-private-clouds.pdf` — Gröber,
   Lenau, Weil, Groben, Schilling e Krombholz (CISPA / Universidade do Sarre), *Towards Privacy
   and Security in Private Clouds*, 33º USENIX Security Symposium, agosto de 2024. Sustenta o
   limite superior de 8,4% de auto-hospedagem nos EUA (n = 1.505), os cinco casos de uso, e o
   achado que contraria a narrativa do tema: auto-hospedeiros não são mais sensíveis à
   privacidade que a população geral. **Confiabilidade alta:** artigo revisado por pares, com
   método e amostra declarados. É a melhor fonte deste documento.
6. `https://www.collaboraonline.com/blog/openmatters010/` — Collabora Online sobre o mesmo
   estudo. Sustenta a repercussão e a citação de 8,5%. **Confiabilidade baixa como número** —
   diverge do original em 0,1 p.p. e é blog de empresa com interesse em auto-hospedagem; está
   aqui como registro da discrepância citada na §8.
7. `https://www.descope.com/blog/post/passkey-trends` — Descope, tendências de passkey.
   Sustenta 48% do top-100, 93% contra 63% de taxa de sucesso, 8,5 s contra 31,2 s, 81% de
   redução em chamados de login e os números da Microsoft. **Confiabilidade média:** fornecedor
   de autenticação compilando dados da FIDO; parte interessada, e um elo da cadeia (a origem do
   "48%") eu não consegui verificar no primário.
8. `https://www.macrumors.com/2026/05/08/instagram-end-to-end-encryption/` — remoção do
   ponta-a-ponta dos DMs do Instagram em 8 de maio de 2026. Sustenta a data, a justificativa da
   Meta ("very few people were opting in"), a observação de que a própria Meta minou a adoção, e
   que WhatsApp e Messenger seguem cifrados. **Confiabilidade média-alta** para fato datado;
   veículo especializado com histórico de correção.
9. `https://www.euronews.com/next/2026/05/08/instagram-is-dropping-end-to-end-encrypted-chats-this-is-what-is-changing` —
   o mesmo fato por veículo jornalístico europeu. Sustenta a confirmação independente e
   acrescenta a reação favorável de organizações de proteção à infância. **Confiabilidade alta:**
   veículo de notícia com padrão editorial, e serve de segunda fonte para o fato central do `e10`.
10. `https://support.apple.com/en-us/122234` — Apple, indisponibilidade da Proteção Avançada de
    Dados no Reino Unido. Sustenta que novos usuários não podem ativar, quais dez categorias
    ficaram sem cifra ponta-a-ponta naquele país e quais quinze continuam cifradas por padrão.
    **Confiabilidade alta:** é a declaração da própria empresa sobre o próprio produto.
11. `https://www.numigtm.com/blog/chat-control-eu-csa-regulation-explained` — estado do CSAR /
    Chat Control. Sustenta que o Conselho retirou a varredura obrigatória do lado do cliente em
    novembro de 2025, o colapso do quinto trílogo em 29 de junho de 2026, a votação de 9 de julho
    de 2026 (314 votos, faltaram 361) e a extensão do Chat Control 1.0 até abril de 2028.
    **Confiabilidade média:** análise de empresa, não documento oficial; as datas são checáveis e
    conferem com outras coberturas que vi nos resultados de busca, mas eu não abri o registro
    legislativo.
12. `https://www.eideasy.com/blog/eu-digital-identity-wallets-july-2026` — estado do EUDI Wallet
    por país em julho de 2026. Sustenta o prazo de dezembro de 2026, o Regulamento (UE) 2024/1183,
    a Dinamarca em produção com o AltID em 3 de junho de 2026, os países com sandbox e os apenas
    anunciados. **Confiabilidade média:** fornecedor do setor de identidade acompanhando o próprio
    mercado — bem informado e interessado; usei para o mapa de status, não para juízo.
13. `https://www.gov.br/governodigital/pt-br/identidade/conta-gov-br` — página oficial da Conta
    gov.br. Sustenta os meios de autenticação descritos oficialmente (reconhecimento facial,
    validação biométrica, autenticação multifator) e, por ausência, **não** sustenta a adoção de
    passkey — que foi o que me fez retirar essa afirmação do mapa. **Confiabilidade alta:** é o
    órgão falando do próprio serviço.
14. `https://portal.febraban.org.br/noticia/4253/pt-br` — FEBRABAN, quatro anos de Open Finance.
    Sustenta 62 milhões de consentimentos em janeiro de 2025, crescimento de 44% sobre o ano
    anterior e o investimento declarado do setor. **Confiabilidade média-alta:** federação do
    setor, com interesse em mostrar sucesso, mas os números vêm do painel regulado.
15. `https://www.letsmoney.com.br/noticias/open-finance-208-milhoes-consentimentos-governanca/` —
    208,79 milhões de consentimentos ativos em 31 de julho de 2026, mais os recortes de
    consentimento único e chamadas de API de agosto de 2026, atribuídos ao painel oficial do Open
    Finance Brasil. Sustenta a escala do modelo brasileiro em `e15`. **Confiabilidade média:**
    veículo pequeno citando o painel oficial — eu não abri o painel; e a própria matéria alerta
    que consentimento ativo não é uso.

## 12. Anexo — o levantamento bruto

### 12.1 O contrato desta rodada (§0 da skill, em modo não interativo)

Briefing recebido completo: modo MAPA; tema 17 de 19 da disciplina, família "Pessoas e dados";
horizonte 2031; público de quem projeta mídia e interação; recorte global com nota sobre o Brasil;
descartado de início o que já é comum em produto de massa; nenhuma disrupção-raiz pré-suspeita
(descobrir); viés neutro; ideias óbvias excluídas; falseador do autor declarado; três ordens de
profundidade; modo a partir de tema, não de setor; busca na web obrigatória e só citar o que
abriu. Como o briefing cobriu os sete itens da tabela da §0, **não** houve rebaixamento de
confiança por ausência de entrevista — conforme a nota da própria skill sobre a rodada de 10/09.

Repetição do pedido em três linhas, como a §0 exige: *mapear, até 2031 e para quem projeta mídia
e interação, o futuro da arquitetura de dado e identidade pessoal composta por local-first,
criptografia ponta-a-ponta e autenticação sem senha; recusar como raiz tudo que já é comum em
produto de massa; entregar no formato fixo da disciplina, com a bateria da §6 aplicada e a saída
do verificador colada aqui.*

### 12.2 Premissas assumidas e declaradas

Nenhuma premissa precisou ser assumida fora do briefing, com três exceções operacionais, todas
declaradas no corpo: (a) "quem projeta mídia e interação" foi lido como designer e desenvolvedor
de produto digital, não como comunicador ou publicitário; (b) a nota sobre o Brasil foi tratada
como seção da âncora e como um efeito de 1ª ordem próprio (`e15`), e não como um mapa paralelo;
(c) o horizonte 2031 foi aplicado como janela, com dois efeitos de 3ª ordem declaradamente fora
dela (`e3.1.1` em 2033, `e15.1.1` em 2032).

### 12.3 Efeitos removidos na bateria da §6

- **"Cursos e programas de formação em design reorganizam o currículo em torno de local-first."**
  Removido por ser um dos quatro efeitos explicitamente proibidos pela §3 da skill: serve para
  qualquer tema, não tem sujeito nomeado e aconteceria por dez outras causas. Para entrar,
  precisaria do nome de um curso, do mecanismo e de uma data.
- **"Surge a profissão de arquiteto de soberania de dados."** Removido pelo mesmo motivo. "Surge
  uma nova profissão" é a forma canônica do efeito genérico. Se houvesse a vaga anunciada por uma
  empresa nomeada, com descrição, seria sinal fraco — não achei.
- **"Aumenta a preocupação da sociedade com privacidade."** Removido: sem sujeito, sem mecanismo,
  e contrariado pela melhor fonte que abri (o estudo do CISPA encontra que auto-hospedeiros não
  são mais sensíveis à privacidade que a população geral).
- **"O navegador vira o sistema operacional do dado pessoal."** Cortado por outra razão — não é
  genérico, é *cedo demais*: eu não consegui escrever um mecanismo que não dependesse de
  suposição sobre a política de armazenamento persistente dos navegadores, que muda por decisão
  unilateral de fornecedor. Fica aqui como caminho abandonado, não como efeito descartado.
- **"Agentes de IA passam a ter suas próprias credenciais no mesmo trilho das pessoas."**
  Cortado por fronteira: é o tema 2 da disciplina (identidade de agentes), como o próprio
  enunciado do tema 17 delimita. Registrado aqui para quem for cruzar os dois mapas.

### 12.4 A raiz que o enunciado não nomeia

**R4 — a carteira de identidade emitida pelo Estado — não consta do enunciado do tema 17, nem do
de nenhum dos outros dezoito temas da disciplina.** Registro isso explicitamente para que quem
auditar o mapa saiba que a inclusão foi decisão desta rodada e não leitura do enunciado.

Ela entrou porque passa nos quatro testes do §2 com data e número: rompe o provedor de identidade
privado como intermediário obrigatório; a pré-condição recente é o prazo do eIDAS 2.0
(Regulamento UE 2024/1183, dezembro de 2026); está entre demo pública e produto de nicho, com um
país em produção desde 3 de junho de 2026 e escalonamento admitido pela Comissão; e falta-lhe
aceitação pelo setor privado e não-rastreabilidade entre apresentações. E entrou porque sem ela
o mapa responderia com hipótese a uma pergunta que o próprio enunciado faz — *se cada pessoa é
dona da sua conta sem intermediário, o que acontece com as plataformas que hoje são o
intermediário?* — tendo um fato disponível: o intermediário não desaparece, troca de natureza.

O motivo provável de a grade não a ter é de método, não de descuido: os enunciados foram
escritos a partir de varreduras de ferramenta e de biblioteca, e uma ruptura que se manifesta
como prazo em regulamento, aplicativo estatal ou decreto é invisível para esse instrumento.

**Custo assumido:** R4 fica sem tema correspondente na disciplina, então seus quatro efeitos de
1ª ordem não terão par no cruzamento final da turma. Devem ser lidos ali como lacuna da grade,
não como ruído desta rodada. A convenção está registrada em `TMI-0024`.

### 12.5 Reparentagens e promoções

- `e10` estava como filho de `e12` (isto é, o recuo do ponta-a-ponta como consequência da pressão
  regulatória). Promovido a 1ª ordem sob R3 porque o sinal — 8 de maio de 2026 — é anterior aos
  trílogos de 2026 e a justificativa declarada foi comercial. O teste da causa solta (§3, regra
  10) foi o que pegou.
- `e12` foi testado para reparentagem e **mantido** sob R3 com fragilidade declarada: a
  verificação de idade e a varredura no cliente aconteceriam mesmo sem cifra nenhuma, porque
  dependem de vontade regulatória. O que o prende a R3 é o mecanismo específico escrito na §5 —
  *quando o servidor não lê, sobram o cliente e a porta de entrada*. Um mapa adversarial tem
  munição legítima aqui.

### 12.6 As buscas que não deram em nada, e os becos

- **Número de usuários da conta gov.br.** Procurei na página oficial do Governo Digital e não há
  número nenhum — só descrição de funcionalidade e níveis de conta. O dado existe em notícia de
  imprensa, com valores que variam demais entre si; preferi não usar nenhum.
- **Confirmação oficial de passkey no gov.br.** Três portais de notícia popular afirmam; a fonte
  oficial não menciona. Beco registrado na §8, item 1. Se alguém achar o comunicado do Serpro ou
  do Ministério da Gestão, `e15` ganha um pilar a mais.
- **Adoção real de local-first (não de CRDT).** Não existe. Downloads semanais de Yjs medem
  colaboração, não propriedade; estrelas de GitHub não medem nada; contagem de membros de
  subreddit mede interesse. A única medida com método é o estudo do CISPA, e ela mede
  auto-hospedagem, que é vizinha e não é a mesma coisa. **Esta é a maior lacuna de evidência do
  mapa**, e ela recai justamente sobre R2.
- **Custo real da busca cifrada no cliente** (bateria, memória, tempo). Não achei medida pública
  comparável. É por isso que o experimento da §10 é o experimento que é.
- **Comunicado da FIDO Alliance sobre o Dia Mundial do Passkey de 2026:**
  `https://fidoalliance.org/fido-alliance-reports-accelerating-global-passkey-adoption-on-world-passkey-day-2026/`
  — aberto pela ferramenta de navegação, mas devolve 403 a requisição automatizada, então ficou
  fora da §11 para não entregar uma seção de fontes com link aparentemente quebrado. Dele vieram:
  5 bilhões de passkeys (estimativa), 90% de consciência, 75% com ao menos uma conta, 49% de uso
  regular, 68% de organizações implantando, 82% com passwordless como meta e **28% totalmente
  passwordless**, além da metodologia Sapio Research de abril de 2026 (11.000 consumidores em dez
  países, ±0,9 p.p.; 1.400 decisores, ±2,6 p.p.). O número de 28% é o que sustenta a classificação
  de R1 como emergente e não madura.
- **Espelhos do mesmo comunicado** (businesswire, morningstar, securityboulevard) também
  devolveram 403 à leitura, apesar de um deles responder ao verificador — não os cito por isso.

### 12.7 Leituras feitas só por resumo de busca (não entram na §11)

Registro para honestidade de método: além das quinze fontes abertas, obtive por resultado de
busca — sem abrir a página — informações sobre downloads semanais de Yjs (~920 mil), Automerge
3.0 e o formato colunar, escala do Signal (70 a 100 milhões de usuários mensais), o padrão
CXF/CXP e seu suporte em iOS 26 e Play Services 26.21, o vazamento de cerca de 70 mil imagens de
documento num fornecedor do Discord em outubro de 2025, a obrigação de *highly effective age
assurance* do Ofcom desde 25 de julho de 2025, a nova contestação judicial da Apple contra o Home
Office em agosto de 2026, e a Resolução CD/ANPD nº 19/2024 sobre formato de portabilidade. Tudo
isso está na prosa do mapa; **nada disso tem link na §11**, porque a regra da skill é que fonte
não aberta não entra. Quem for auditar este documento deve tratar esses itens como um degrau
abaixo dos quinze.

### 12.8 Saída do verificador

```
$ python3 .../futurizacao-giordano/references/verificar.py \
    tendencia-soberania-de-dados-local-first-ponta-a-ponta-e-o-fim-da-senha.md --links

frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 16 (frontmatter diz 16)
efeitos ordem 2: 28 (frontmatter diz 28)
efeitos ordem 3: 14 (frontmatter diz 14)
prazo > horizonte (2031) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 2 [('e3.1.1', 2033), ('e15.1.1', 2032)]
confiança ordem 1: alta 6 · media 9 · baixa 1
confiança ordem 2: alta 1 · media 17 · baixa 10
confiança ordem 3: alta 0 · media 0 · baixa 14
links da seção 11: 15/15 respondem (frontmatter diz fontes: 15)
RESULTADO: ok
```

Os dois efeitos de 3ª ordem que passam do horizonte estão declarados: `e3.1.1` (2033) e
`e15.1.1` (2032), ambos com a razão registrada no item 7.9. As contagens do frontmatter batem
com as reais nas quatro linhas, a calibração cai com a ordem (6 → 1 → 0 em confiança alta) e os
quinze links da §11 respondem.
