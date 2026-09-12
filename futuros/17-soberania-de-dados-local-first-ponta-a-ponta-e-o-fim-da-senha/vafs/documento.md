---
tema: "Soberania de dados: local-first, ponta-a-ponta e o fim da senha"
slug: soberania-de-dados-local-first-ponta-a-ponta-e-o-fim-da-senha
autor_login: vafs
zona_de_interesse: Pessoas e dados
data: 2026-09-11
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 9
efeitos_ordem_2: 15
efeitos_ordem_3: 15
tecnologias_citadas: [local-first software, CRDT, Automerge, Yjs, Loro, PGlite, ElectricSQL, TanStack DB, Zero, Jazz, NextGraph, Keyhive, criptografia ponta-a-ponta, client-side encryption, passkeys, WebAuthn, FIDO2, Apple Advanced Data Protection, Gmail client-side encryption, Apple Private Cloud Compute, computação confidencial, atestação remota, EUDI Wallet, eIDAS 2.0, divulgação seletiva, credenciais verificáveis, conta gov.br, client-side scanning]
fontes: 13
confianca: media
experimento: "O caderno cego — bloco de notas compartilhado local-first, cifrado ponta-a-ponta e acessível só por passkey, com o servidor de sincronização aberto para inspeção em sala"
skill_usada: futurizacao-vafs
publico_ok: false
---

## 1. Resumo

Três rupturas na arquitetura do software pessoal estão convergindo: o dado deixa de morar no
servidor e passa a morar no aparelho (local-first), o servidor deixa de conseguir ler o que
guarda (ponta-a-ponta fora da mensagem) e a identidade deixa de ser emprestada por um
intermediário privado (carteira do titular, credencial presa ao dispositivo). O fim da senha,
porém, já não é a disrupção: o passkey passou da linha de maturidade — a FIDO Alliance mede
5 bilhões de passkeys em uso, 75% das pessoas com pelo menos um ativado, e a WebAuthn virou
Recomendação W3C de nível 3 em agosto de 2026. O que ainda rompe é a conta **sem credencial
recuperável pelo provedor**: quando ninguém do outro lado consegue te salvar, o suporte deixa
de ser o último recurso, a herança digital vira problema de quem não se preparou em vida, e a
interface precisa dizer coisas que hoje ela não diz. O mapa deriva 9 efeitos de primeira ordem,
15 de segunda e 15 de terceira até 2031, e aponta para um achado desconfortável: a mesma
tecnologia que sustenta a soberania do usuário está sendo absorvida para servir agentes de IA
dentro da nuvem — em agosto de 2026 a Electric, principal motor de sincronização local-first,
foi comprada pela Databricks e repontada para sandboxes de agentes. Viés declarado: neutro.

## 2. O tema

O objeto aqui não é criptografia nem autenticação isoladas — é **a arquitetura de dado e de
identidade da pessoa**. A pergunta que organiza o tema é: quem detém a cópia canônica do que
você produz, quem consegue lê-la, e quem atesta que você é você.

Por três décadas a resposta foi a mesma para as três perguntas: a empresa. O aplicativo era uma
janela para o estado do servidor; o servidor lia tudo para poder buscar, recomendar, moderar e
cobrar; e a conta era emprestada por um provedor de identidade que podia revogá-la. As três
coisas eram tão inseparáveis que viraram sinônimo de "estar na internet".

Isto encosta em mídia e interação num ponto que não é metafórico. Se o dado canônico é local,
**a espera some da interface** — e some junto o vocabulário visual construído em cima dela: o
spinner, o botão salvar, o "conectando…", o estado de erro de rede. No lugar entra um
vocabulário que quase ninguém projetou ainda: divergência, presença, versões simultâneas do
mesmo fato, e a mensagem que nenhum produto de massa precisou escrever até hoje — *ninguém pode
recuperar isto para você*. Quem projeta interface passa a ter que representar confiança, perda e
custódia, não só estado.

Merece mapa de futuro, e não levantamento de estado da arte, porque as três rupturas não estão
maduras ao mesmo tempo nem no mesmo lugar, e porque a direção delas está sendo disputada em
tribunal e em trílogo enquanto este documento é escrito. Um levantamento diria o que existe; o
mapa precisa dizer o que deixa de fazer sentido se isso escalar — e o que acontece se não
escalar.

## 3. Onde isso está hoje

### O que já é maduro (e por isso não entra na seção 4)

**Passkeys e WebAuthn.** A FIDO Alliance estimou, no World Passkey Day de 7 de maio de 2026,
**5 bilhões de passkeys em uso no mundo**; na pesquisa que acompanha o relatório (11.000
consumidores e 1.400 decisores corporativos em dez países, campo em abril de 2026, feita pela
Sapio Research), **90% conhecem passkeys, 75% já ativaram um em pelo menos uma conta e 49% usam
regularmente quando disponível**; entre organizações, 68% implantaram ou estão implantando
passkey para login de funcionário. A especificação correspondente, *Web Authentication: An API
for accessing Public Key Credentials — Level 3*, tornou-se **Recomendação W3C em 25 de agosto de
2026**. Pelos números de adoção e pelo estado da norma, isto não é mais tecnologia emergente: é
opção padrão em fluxo real, e o que resta é difusão, não mudança de natureza.

**Criptografia ponta-a-ponta em mensagem.** WhatsApp, Signal e iMessage cifram por padrão há
anos, para bilhões de pessoas. O debate europeu de 2026 confirma a maturidade pela via inversa:
em 9 de julho de 2026 o Parlamento Europeu adotou emendas **excluindo os serviços com
ponta-a-ponta do escopo** do regime de varredura de mensagens (369 e 362 votos, contra um limiar
de 361) — não se exclui do escopo aquilo que é marginal.

**Backup cifrado, HTTPS, 2FA, "login com Google".** Todos padrão. No Brasil, a verificação em
duas etapas da conta gov.br é o caso de escala local: a página oficial de segurança da conta,
lida em 11/09/2026, descreve CPF mais senha, código de acesso gerado no aplicativo gov.br e
gestão de dispositivos confiáveis.

### O que existe e ainda não é padrão

**Local-first como arquitetura.** O ensaio fundador — *Local-first software: you own your data,
in spite of the cloud*, de Martin Kleppmann, Adam Wiggins, Peter van Hardenberg e Mark
McGranaghan (Ink & Switch, abril de 2019; publicado no Onward! 2019) — enumera sete ideais, nas
palavras dos próprios autores: "No spinners: your work at your fingertips"; "Your work is not
trapped on one device"; "The network is optional"; "Seamless collaboration with your
colleagues"; "The Long Now"; "Security and privacy by default"; "You retain ultimate ownership
and control". O mesmo ensaio dizia, em 2019, que "it is not yet advisable to replace a proven
product like Firebase with an experimental project like Automerge in a production setting
today", e listava como aberto o controle de acesso: "While centralized systems rely heavily on
access control and permissions, the same concepts do not directly apply in a local-first
context."

Sete anos depois, a camada técnica virou produção e a comunidade virou institucional: o FOSDEM
2026 teve uma *devroom* inteira de Local-First, com **23 palestras em 1º de fevereiro de 2026**,
incluindo relatos de produção ("Local-First in Production: How We Built Plane's Collaborative
Wiki with Yjs"), motores de sincronização cifrados (NextGraph), controle de acesso sem servidor
("Automerge + Keyhive Design Overview", "Composing capability security and CRDTs") e uma
palestra especificamente sobre o problema de interface ("Designing for Local-First: UX Patterns
for a Network-Optional World").

O que **não** aconteceu foi a variante soberana virar padrão. O caso de agosto de 2026 é o mais
eloquente: a Electric — autora do PGlite e do motor de sincronização mais visível do campo —
anunciou em 11 de agosto de 2026 que está **entrando para a Databricks**, com o texto próprio
posicionando sincronização como camada para agentes ("Agents need realtime state and
coordination through the data layer"), a hospedagem Electric Cloud sendo encerrada, e o
código-aberto preservado ("Everything Electric has previously open sourced stays open source:
Postgres Sync, PGlite, TanStack DB, Durable Streams"). O PGlite saltou de 1 milhão para 13
milhões de downloads semanais entre agosto de 2025 e agosto de 2026 — puxado por caixas de areia
de agentes de IA, não por soberania de usuário.

**Ponta-a-ponta fora da mensagem.** É opcional, pago ou restrito. O Advanced Data Protection da
Apple é *opt-in*, e **foi retirado do Reino Unido em fevereiro de 2025** depois de um Technical
Capability Notice emitido sob a seção 253 do Investigatory Powers Act — regime que, nas palavras
da Privacy International, "is highly secretive: TCNs (and other similar notices) are not made
public, and recipients of them are under gagging orders". O Reino Unido retirou o primeiro aviso
e emitiu um segundo em outubro de 2025; a audiência substantiva da ação da PI está marcada para
**dezembro de 2026**. No e-mail, o Google levou a cifragem do lado do cliente ao Gmail móvel em
**9 de abril de 2026**, restrita a "Enterprise Plus with the Assured Controls or Assured Controls
Plus add-on" — isto é, o servidor cego existe no produto dominante, e é um item de compra
corporativa regulada, não um estado padrão.

**IA sobre dado que o provedor não lê.** Em 8 de junho de 2026 a Apple anunciou a expansão do
Private Cloud Compute para infraestrutura de terceiros — Google Cloud com GPUs NVIDIA —
mantendo os cinco requisitos declarados: "stateless computation, enforceable guarantees, no
privileged runtime access, non-targetability, and verifiable transparency", com "a
cryptographically verifiable, append-only ledger of all Google Cloud hardware" e o compromisso
de publicar os binários para inspeção. É a primeira vez que a promessa "não lemos seu dado" vem
com procedimento de verificação por terceiro em vez de política de privacidade.

**Identidade na carteira do titular.** O Regulamento (UE) 2024/1183 (eIDAS 2.0) obriga cada
Estado-membro a **oferecer pelo menos uma EUDI Wallet até 24 de dezembro de 2026**, com aceitação
obrigatória pelas administrações públicas; o setor privado regulado (bancos, telecomunicações,
energia, saúde, seguros, transporte, educação) passa a ser obrigado a aceitá-la em **24 de
dezembro de 2027**. Organizações precisam se registrar como *relying party* e obter certificados
de acesso.

### O estado no Brasil

O Brasil aparece neste mapa por três vias, e nenhuma delas é arquitetura local-first. A primeira
é a conta gov.br, que concentra identidade digital para serviço público — e que, pela fonte
oficial lida, ainda opera com senha mais segundo fator, não com credencial presa ao aparelho
(ver seção 8: a imprensa secundária afirma o contrário, e isso não se confirmou). A segunda é a
ANPD, que publicou em **24 de dezembro de 2025** o Mapa de Temas Prioritários de fiscalização
para 2026-2027 com quatro eixos — "direitos dos titulares", "proteção de crianças e adolescentes
no ambiente digital", "tratamento de dados pessoais pelo Poder Público" e "inteligência
artificial e tecnologias emergentes no contexto do tratamento de dados pessoais" —, sem menção a
criptografia ou a exigência de arquitetura. A terceira é o parque de dispositivos: uma
arquitetura que empurra armazenamento, busca e inferência para o aparelho do usuário tem um
custo de entrada que o mercado brasileiro de aparelhos de faixa média não absorve de forma
uniforme. É o ponto onde o efeito e3.1.1 deste mapa deixa de ser abstrato.

## 4. As disrupções-raiz

Quatro candidatas passaram nos três testes (madura? emergente? disruptiva?). O registro completo
das rejeitadas está na seção 12.

### D1 — O dado canônico migra do servidor para o aparelho

**O que rompe.** Se a cópia de referência do documento é a local e o servidor é transporte e
arquivo, o *backend como dono da verdade* perde a razão de existir. Com ele perdem função o
lock-in por hospedagem ("seus dados estão conosco"), a morte do dado no encerramento do serviço,
e a arquitetura requisição-resposta como forma padrão de escrever aplicativo colaborativo.

**Por que agora e não há cinco anos.** Em 2019 os próprios autores do ensaio desaconselhavam uso
em produção. Em 2026 há motores em produção declarada (Yjs em wikis colaborativas, Loro,
Automerge 3, PGlite/TanStack DB), uma *devroom* de 23 palestras no FOSDEM, e o histórico de
mudanças — o gargalo de desempenho que o ensaio de 2019 chamava de "a major area of ongoing
work" — deixou de ser bloqueador.

**O que ainda falta.** Controle de acesso sem servidor central, que continua sendo o problema
aberto nomeado em 2019 e que só agora ganha desenho (Keyhive, segurança por capacidade). E falta
um modelo de receita: o movimento de 2026 mostra que o dinheiro do campo veio de agentes de IA,
não de soberania de usuário.

### D2 — O servidor cego por padrão fora da mensagem

**O que rompe.** Se o provedor não consegue ler arquivo, e-mail e documento, perdem a razão de
existir o índice de busca do lado do servidor, a personalização baseada em conteúdo, a moderação
por leitura de conteúdo, a varredura por correspondência de hash em conteúdo cifrado e — o mais
concreto — o **fluxo de recuperação de conta pelo suporte**, que hoje é o último recurso
universal.

**Por que agora.** A cifragem no cliente ficou trivial de implementar, e ela atravessou a
fronteira do produto de nicho: está no Gmail (abril de 2026, edição corporativa), no iCloud
(opcional), e é a base do que a Apple vende como computação de IA verificável.

**O que ainda falta.** Que deixe de ser opcional, paga ou restrita a setor regulado — e que
sobreviva à disputa jurídica. O caso britânico mostra que um Estado pode remover a garantia de
uma jurisdição inteira sem que o usuário participe da decisão, e sem que o conteúdo do aviso
seja público.

### D3 — A computação passa a ir até o dado, em vez de o dado ir até a computação

**O que rompe.** Se o recurso de IA funciona sem que o dado suba, e a ausência de acesso é
**atestável** por terceiro em vez de prometida em contrato, perde a razão de existir o
intermediário que existia apenas para hospedar dado alheio — e perde força a troca implícita que
sustenta a década: *entregue o dado, receba o recurso*.

**Por que agora.** Atestação remota e computação confidencial saíram do slide: o anúncio de junho
de 2026 da Apple estende as garantias a data centers de terceiros com registro append-only
verificável e binários publicados para inspeção. É a diferença entre "confie em nós" e "verifique
você".

**O que ainda falta.** Que a atestação seja um padrão entre fornecedores, e não um dialeto de
uma empresa; e que exista quem saiba auditá-la fora do fabricante. Enquanto for verificação
oferecida pelo próprio verificado, a garantia é melhor que política de privacidade, mas não é
independente.

*Fronteira declarada:* o **modelo** rodando localmente é o tema 16. Aqui o objeto é a arquitetura
do dado — onde a computação acontece em relação a ele, e quem consegue prová-lo.

### D4 — A identidade sai do intermediário privado e vai para a carteira do titular

**O que rompe.** Se uma carteira controlada pela pessoa carrega atestações verificáveis e o
serviço é obrigado a aceitá-la, o **provedor de identidade privado como intermediário
obrigatório** ("Entrar com Google") perde a razão de existir em transação regulada — e com ele o
perfil que vinha de carona no login social.

**Por que agora.** Não é curva tecnológica, é prazo legal com data: 24 de dezembro de 2026 para
administrações públicas dos 27 Estados-membros, 24 de dezembro de 2027 para o setor privado
regulado.

**O que ainda falta.** O prazo ser cumprido. Os Estados-membros estão em faixas de prontidão
diferentes, e parte deles pretende rotular carteiras nacionais existentes como conformes — o que
cumpre a letra e adia a arquitetura.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O dado canônico migra do servidor para o aparelho (local-first)
    efeitos:
      - id: e1
        ordem: 1
        efeito: O aplicativo deixa de exibir estado do servidor e passa a exibir estado local, tornando o modo offline o comportamento normal e não a exceção
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O desenho de interface perde o vocabulário de espera (spinner, salvando, botão salvar) e precisa inventar um vocabulário de divergência entre versões
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Estar online deixa de ser estado do sistema e vira metadado social, com o usuário vendo com quem está sincronizado em vez de se está conectado
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O encerramento de um serviço deixa de apagar o trabalho do usuário, e a longevidade do arquivo vira argumento comercial verificável em vez de promessa
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Compras corporativas de software passam a exigir clausula de funcionamento sem o fornecedor, provada por leitura do arquivo, e nao apenas exportacao de dados
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O backend deixa de ser a cópia canônica e vira transporte e arquivo, o que baixa o custo de servidor e sobe o custo de sincronização
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O papel de desenvolvedor de backend de CRUD encolhe e aparece o engenheiro de sincronização, que decide política de conflito e granularidade de junção
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A verdade única deixa de ser propriedade automática do sistema e vira decisão explícita de produto, e categorias que não podem admitir duas versões do mesmo fato (contabilidade, prontuário, registro escolar) ficam fora da arquitetura
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A empresa que hospeda perde a telemetria fina de uso que hoje sustenta roadmap e cobrança por assento, porque o uso acontece no aparelho e não passa pelo servidor
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O preço do software colaborativo se desloca de assento por mês para retransmissão e armazenamento, e produtos de nicho voltam a ser viáveis com licença perpétua
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O servidor cego por padrão fora da mensagem (ponta-a-ponta no plano geral de dados)
    efeitos:
      - id: e3
        ordem: 1
        efeito: Arquivo, e-mail e documento passam a oferecer um modo em que o provedor não lê o conteúdo, e esse modo migra do produto de nicho para dentro do produto dominante
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A busca e a organização do próprio acervo migram para o cliente, e a qualidade da busca passa a depender do aparelho do usuário em vez do datacenter do fornecedor
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A capacidade do aparelho volta a ser eixo de desigualdade de acesso à própria informação, depois de duas décadas em que o servidor igualava usuários de hardware desigual
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A moderação de conteúdo perde a leitura do conteúdo e se reorganiza em torno de metadado, denúncia do destinatário e verificação de idade feita no cliente
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: A responsabilidade por conteúdo ilegal se desloca do intermediário para o dispositivo, e o sistema operacional vira o novo ponto de regulação
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: O provedor deixa de conseguir recuperar o dado do usuário, e a perda de chave passa a ser perda definitiva, sem suporte como último recurso
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Surge um mercado de custódia de chave (recuperação social, custodiante contratado, cofre familiar) que reintroduz um terceiro explícito no lugar do provedor que era terceiro implícito
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O inventário de bens passa a incluir procedimento de chave, e cartório e inventariante ganham um papel técnico que hoje não sabem exercer
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A herança digital deixa de ser resolvida por política do fornecedor e passa a exigir preparo em vida, porque a chave que abre o acervo não é transferível pelo provedor
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Instituições de memória passam a recusar acervos pessoais que chegam cifrados sem chave, e o acervo perdido por falta de chave vira categoria reconhecida de perda cultural
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A jurisdição vira propriedade do produto, e o mesmo aplicativo passa a oferecer garantias diferentes conforme o país proíba ou obrigue o servidor cego
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Onde a conta foi criada passa a determinar que garantias o usuário tem, e migrar de jurisdição vira funcionalidade anunciada em vez de efeito colateral
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Escolher provedor passa a ser escolher regime jurídico, e alguns países competem por usuários oferecendo garantia de criptografia como política industrial
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A computação vai até o dado, com ausência de acesso atestável em vez de prometida
    efeitos:
      - id: e6
        ordem: 1
        efeito: O recurso de IA deixa de exigir que o dado suba, e a frase não lemos o seu dado passa a ser verificável por atestação em vez de declarada em política de privacidade
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Privacidade deixa de ser cláusula contratual e vira especificação técnica comparável entre produtos, e aparece um mercado de auditoria de atestação
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O marketing de privacidade perde eficácia onde a atestação é pública, e a diferenciação migra de quem promete melhor para quem consegue provar
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: O assistente que lê tudo do usuário só se torna aceitável se o servidor não guardar nada, o que faz do processamento sem estado um requisito de produto e não de segurança
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: A memória de longo prazo do assistente volta para o aparelho, e o histórico acumulado deixa de ser ativo do fornecedor, derrubando a vantagem de quem guardou anos de conversa
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: O dado deixa de ser o que se entrega e passa a ser o que se empresta sob prova, e o intermediário que existia só para hospedar dado alheio perde função
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: A cegueira do servidor atinge o conteúdo mas não o metadado, e a publicidade se concentra ainda mais em com quem, quando e com que frequência, que o local-first não esconde
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: O metadado vira o ativo disputado, e a regulação escrita para proteger conteúdo pessoal descobre que estava protegendo a parte errada
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A identidade sai do intermediário privado e vai para a carteira do titular
    efeitos:
      - id: e8
        ordem: 1
        efeito: Entrar com Google deixa de ser o caminho padrão em serviço regulado, porque a lei obriga a aceitar uma carteira que o próprio titular controla
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O login deixa de carregar um perfil e passa a carregar uma afirmação mínima, e o cadastro de usuário encolhe para o que a transação exige
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: O produto perde o cadastro como fonte de dado demográfico e passa a ter de perguntar ao usuário o que antes deduzia do login social
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: A verificação de idade deixa de exigir documento e passa a ser divulgação seletiva, o que remove o argumento técnico contra exigi-la em todo lugar
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: A porta de entrada verificada vira padrão em parte da web, e navegar sem se identificar passa a ser exceção declarada em vez de estado natural
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: O provedor de identidade perde a posição de ponto único de falha e de vigilância, e o custo de trocar de plataforma cai
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O usuário passa a trocar de serviço sem perder a identidade, mas continua perdendo o grafo de vínculos, porque a carteira carrega credencial e não relação
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A disputa regulatória de portabilidade se desloca de exportar seus dados para levar seus vínculos, e o grafo social vira o objeto de política pública que o dado pessoal foi nos anos 2020
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não consegue dizer

**As quatro raízes não têm o mesmo tipo de gatilho.** D1 e D3 dependem de curva técnica e de
adoção de desenvolvedor; D4 depende de uma data em um regulamento; D2 depende do desfecho de
uma disputa judicial e de um trílogo. Misturá-las no mesmo diagrama dá a impressão falsa de que
avançam juntas. Se eu tivesse que apostar em qual delas tem prazo confiável, seria D4 — e por um
motivo que não tem nada a ver com tecnologia.

**Duas raízes empurram em sentidos opostos na mesma variável.** D2 tira do servidor a capacidade
de ler; D4 dá ao serviço um meio barato e confiável de saber quem você é. O efeito combinado não
é "mais privacidade": é uma web em que o conteúdo é ilegível e a pessoa é perfeitamente
identificável. Os efeitos e8.2.1 e e3.2.1 são o mesmo movimento visto de dois ângulos, e essa
convergência é o achado menos confortável do mapa.

**O efeito e4 é o único de primeira ordem com confiança alta e sinal forte que já é observável
hoje** — não é previsão, é descrição. A página de suporte da Apple sobre Contato de Legado diz,
literalmente, que os dados inacessíveis ao herdeiro incluem "data stored in your iCloud Keychain
(payment information, passwords, and passkeys)". A perda definitiva já existe; o que o mapa
projeta é ela deixar de ser exceção de nicho e virar comportamento padrão.

**A cadeia e2.2 → e2.2.1 é a mais frágil do bloco** e está marcada assim. Ela supõe que empresas
abram mão de telemetria por decisão de arquitetura, quando a saída óbvia é instrumentar o cliente
e mandar o evento separado do conteúdo — que é o que a maioria faz hoje.

## 6. Sinais fracos e wildcards

### Sinais fracos

**Controle de acesso sem servidor ganhou desenho.** O problema que o ensaio de 2019 deixou
aberto — permissões sem autoridade central — apareceu duas vezes na programação do FOSDEM 2026
("Automerge + Keyhive Design Overview" e "Composing capability security and CRDTs"). Enquanto
isso não fechar, local-first serve para o documento pessoal e para o time pequeno, não para a
organização com hierarquia. É o gargalo silencioso de D1.

**O vocabulário de soberania entrou na conferência de desenvolvedor.** Títulos como "Seed
Hypermedia: The Future of Digital Sovereignty", "Radicle: Local-First Code Collaboration" e
"NextGraph: E2EE sync engine" indicam que a motivação política deixou de ser subtexto. Sinal
social, não técnico — mas é o tipo de sinal que antecede escolha de stack.

**O mesmo dado lido em dois sentidos: PGlite de 1 para 13 milhões de downloads semanais em doze
meses.** Lido como adoção de local-first, é crescimento forte. Lido com o anúncio de agosto de
2026, é adoção de *banco local dentro de caixa de areia de agente de IA* — a mesma peça técnica
servindo ao oposto do propósito original. Um sinal fraco não é um sinal pequeno: é um sinal que
ainda admite duas leituras incompatíveis.

**A atestação como argumento de venda.** A Apple publicar binários e oferecer acesso a nós de
produção em modo de pesquisa via programa de recompensas é um deslocamento de gênero: de política
de privacidade para artefato auditável. Se outro fornecedor precisar responder a isso, D3 acelera.

### Wildcards

**Wildcard 1 — a lei que obriga.** Uma legislação que torne local-first ou ponta-a-ponta
obrigatório por padrão para dado sensível (saúde, financeiro, infantil). Baixa probabilidade,
impacto total: transformaria D1 e D2 de escolha de produto em requisito de conformidade e
comprimiria todos os prazos deste mapa em três a quatro anos.

**Wildcard 1-invertido — a lei que proíbe, que é a versão mais provável.** O trílogo europeu
sobre a regulação permanente de CSAM segue aberto, e a posição do Conselho preserva obrigações
de mitigação de risco amplas o bastante para pressionar serviços cifrados a mudar de protocolo.
Um Estado grande impondo varredura no cliente por lei não mata a criptografia — mata a promessa
de que o aparelho é seu. Neste caso D2 sobrevive tecnicamente e morre como garantia, e o mapa
inteiro precisa ser reescrito a partir de e3.2.

**Wildcard 2 — a perda em massa.** Um provedor de sincronização de chaves (iCloud Keychain,
Google Password Manager) trancar ou perder uma coorte de usuários, criando o primeiro ciclo
noticioso de acervos pessoais destruídos sem culpado recuperável. A reação regulatória provável
seria exigir depósito recuperável de chave — desfazendo a disrupção pelo lado de dentro, em nome
da proteção ao consumidor. É o cenário em que D2 é derrotada não por governo hostil, mas por
direito do consumidor.

**Wildcard 3 — a criptografia envelhece e não há quem a renove.** Arquivo selado no aparelho com
algoritmo de hoje, sem servidor que faça a migração criptográfica quando o algoritmo cair. A
nuvem, apesar de tudo, re-cifra o acervo inteiro sem avisar; o local-first transfere essa
obrigação para uma pessoa que não sabe que a tem.

**Wildcard 4 — o Brasil pula a fila.** Se o Banco Central estendesse ao Pix e ao Open Finance
uma credencial presa ao dispositivo com divulgação seletiva, o país teria trilho de identidade
verificável em escala antes do prazo europeu de 2027 — pela mesma via que já usou para pular a
fila em pagamento. Declaro como especulação: não encontrei nenhuma fonte apontando nessa direção,
e o registro oficial que li (gov.br, ANPD) não sugere movimento nesse sentido.

## 7. Contra o próprio mapa

### O efeito que é só extrapolação linear

**e1 e e1.1.** "Aplicativo fica local, spinner some" é a curva que Linear, Figma e Notion já
desenharam — é descrição do presente esticada, não futurização. Mantive com confiança alta
justamente porque é observável, mas é honesto dizer que este ramo contribui pouco: ele não
revela nada que quem projeta interface já não esteja fazendo. O ramo que faz trabalho de verdade
é o e4, e ele não é extrapolação de tendência técnica — é consequência de uma propriedade que já
está escrita na documentação da Apple e cujas implicações sociais ninguém exerceu em escala.

### O efeito que assume velocidade sem precedente

**e8 e toda a cadeia de D4.** Assumem que o prazo de 24 de dezembro de 2026 seja cumprido de
forma substantiva pelos 27 Estados-membros. O precedente disponível é ruim: o eIDAS original
(2014) previa reconhecimento mútuo de identidade eletrônica e levou quase uma década para ter uso
transfronteiriço relevante. A fonte que li registra que Estados-membros estão em faixas de
prontidão distintas e que parte deles pretende rerrotular carteiras nacionais existentes. Se o
prazo for cumprido no papel e não na arquitetura, e8.1 e e8.1.1 caem inteiros.

**e4.2.1** também falha aqui e está marcado: o prazo declarado (2032) ultrapassa o horizonte de
2031 deste mapa. Mantido por ser a conclusão natural de e4.2, mas assinalado como fora do
horizonte.

### A disrupção que pode não se concretizar

**D2, e é a mais exposta.** Basta um desfecho: se o Investigatory Powers Tribunal validar o
regime de Technical Capability Notices na audiência de dezembro de 2026, e se o trílogo europeu
fechar com obrigações de mitigação que alcancem serviços cifrados, o servidor cego por padrão
deixa de ser possível como produto de massa em duas das maiores jurisdições do mundo. Cairiam e3,
e3.1, e3.2, e5 e as respectivas cadeias — quase um terço do mapa. O que sobreviveria é o ramo
mais desconfortável: D4 sem D2, isto é, identidade verificável em um mundo em que o servidor
continua lendo tudo.

**D3 tem um risco diferente e menos discutido:** ela pode se concretizar tecnicamente e não
produzir soberania nenhuma. A atestação que li é oferecida pelo próprio fornecedor verificado.
Uma garantia auditável de que a Apple não lê seu dado ainda deixa a Apple sendo quem define o que
é auditado. Se D3 escalar assim, e6.1.1 se inverte: a atestação vira *melhor* marketing de
privacidade, não o fim dele.

### O viés que entrou aqui

Dois, e ambos apontam para o mesmo lado.

O primeiro é do recorte: o tema foi descrito pela disciplina a partir de um levantamento de
projetos de código aberto de finanças pessoais com privacidade — um universo autosselecionado de
pessoas que já decidiram que soberania importa. Ler o futuro do dado pessoal por essa janela
exagera sistematicamente a demanda. A evidência contrária está no próprio mapa: 49% das pessoas
usam passkey regularmente porque ele é mais **cômodo**, não porque é soberano, e o principal
motor de sincronização local-first do mercado foi comprado e repontado para servir agentes de IA
dentro da nuvem.

O segundo é meu, como máquina que escreve: "usuário dono do próprio dado" é um enquadramento
que aparece com enorme densidade no texto técnico com que fui treinada, porque é escrito por
quem constrói essas ferramentas. A literatura de quem opera suporte, de quem administra
identidade corporativa e de quem lida com usuário que perdeu o celular é muito menor e muito
menos entusiasmada. O contrapeso que consegui aplicar foi puxar o efeito e4 para o centro — a
perda definitiva — e declarar isto aqui.

O viés declarado na entrevista foi **neutro**. O resultado não é neutro: das quatro raízes, três
descrevem ganho de controle do indivíduo e só uma (D4, via e8.2) descreve perda. Se este mapa
fosse refeito com viés cético, e5, e7.1 e e8.2 seriam os troncos, e D1 seria um galho.

## 8. O que a máquina errou

**1. Passkey no gov.br: a imprensa afirma, a fonte oficial não confirma.** Ao procurar o recorte
brasileiro, a busca devolveu várias reportagens de fevereiro de 2026 (UAI, FDR e agregadores)
afirmando que o gov.br passou a usar passkeys e deixou de pedir senha e reconhecimento facial.
Era exatamente o fato de que eu precisava, e estava em mais de uma fonte — que é justamente
quando o erro passa. Antes de escrever, abri a página oficial de segurança da conta gov.br
(Governo Digital) em 11/09/2026: ela descreve CPF e senha, código de acesso gerado no aplicativo
gov.br e gestão de dispositivos confiáveis, e **não menciona passkey nem WebAuthn em nenhum
ponto**. Não é prova de que a funcionalidade não exista em outro canal — é prova de que a
afirmação não se sustenta na fonte primária que a sustentaria. A afirmação ficou fora da seção 3,
e o que entrou lá foi o que a fonte oficial diz. Repetição em várias fontes secundárias não é
verificação; é a mesma fonte contada várias vezes.

**2. Os sete ideais do local-first, na versão que circula e não é a do texto.** Eu ia listar os
sete ideais do ensaio do Ink & Switch como "Fast, Multi-device, Offline, Collaboration,
Longevity, Privacy, User control" — que é como eles aparecem resumidos em quase toda referência
secundária, inclusive no resultado de busca que me voltou primeiro. Abri o ensaio: os ideais dos
autores são frases, não rótulos ("No spinners: your work at your fingertips", "The Long Now",
"You retain ultimate ownership and control"). A diferença não é cosmética. "Longevity" é um
atributo de sistema; "The Long Now" é uma posição sobre o tempo. Citar a paráfrase como se fosse
o original é atribuir aos autores uma linguagem de especificação que eles deliberadamente não
usaram. Corrigido com citação literal na seção 3.

**3. O efeito que saiu fácil demais: "ponta-a-ponta mata a publicidade".** A primeira versão do
e7.1 dizia que o servidor cego derruba o modelo de negócio baseado em dado. É o argumento que
todo mundo repete, e foi o efeito que gerei mais rápido no mapa inteiro — o que, pela auditoria
da Fase 4, é sinal de alerta e não de acerto. O teste "o elo causal pula uma etapa?" expôs o
buraco: a maior parte da segmentação publicitária roda sobre **metadado e comportamento**, não
sobre o conteúdo da sua mensagem; cegar o conteúdo não derruba o modelo, desloca-o. Reescrevi o
efeito com o passo que faltava — e a versão reescrita é mais interessante que a original, porque
prevê concentração no metadado em vez de colapso do modelo.

**4. Eu ia colocar passkey como disrupção-raiz — o tema se chama "o fim da senha".** O teste 1 da
Fase 2, aplicado com os números da FIDO Alliance de maio de 2026 (75% com pelo menos um passkey
ativado, 49% de uso regular, 5 bilhões em circulação) e com a WebAuthn Nível 3 já como
Recomendação W3C de 25 de agosto de 2026, reprova: isso é tecnologia madura, não emergente. A
raiz teve de ser reescrita para o que de fato ainda rompe — a conta sem credencial recuperável
pelo provedor. Sem aplicar o teste por escrito, o mapa inteiro teria sido construído sobre uma
tecnologia que já passou da maioria inicial, e a seção 4 teria descrito o presente.

**5. Quase atribuí à ANPD uma exigência que ela não faz.** Ao montar o recorte brasileiro, era
tentador escrever que a ANPD está empurrando criptografia forte no eixo de fiscalização. Abri o
Mapa de Temas Prioritários 2026-2027 (publicado em 24/12/2025): os quatro eixos são direitos dos
titulares, crianças e adolescentes, Poder Público, e inteligência artificial e tecnologias
emergentes — e **criptografia não é mencionada**. O que entrou na seção 3 foi a lista literal e
a constatação da ausência, que é informativa por si: no Brasil, a pressão regulatória de 2026
está em uso de dado e em IA, não em arquitetura de dado.

## 9. Três cenários para 2031

**Provável.** Em 2031 a senha virou coisa de sistema legado e ninguém comemora — passkey é o
login e pronto. O dado, esse, continua majoritariamente no servidor: local-first venceu como
técnica de interface (o aplicativo é rápido, funciona no metrô, não tem spinner) e perdeu como
política de propriedade, porque o motor que sincroniza é o mesmo, só que apontado para a nuvem
do fornecedor. Ponta-a-ponta fora da mensagem existe, é opcional, e quem liga é quem tem motivo
— jornalista, advogado, empresa regulada. A Europa tem carteira de identidade digital funcionando
com atraso de dois anos sobre o prazo legal, e ela é usada principalmente para provar idade. No
Brasil, a conta gov.br continua sendo a identidade que importa, agora sem senha, e o dado do
cidadão segue onde sempre esteve. A mudança que as pessoas de fato sentiram na década não foi a
soberania: foi a perda. Todo mundo conhece alguém que perdeu um acervo inteiro porque o celular
foi ao chão e a chave foi junto.

**Desejável.** Em 2031 "o fornecedor não consegue ler isto" virou atributo comparável entre
produtos, do jeito que consumo de energia virou etiqueta de eletrodoméstico — e é comparável
porque a atestação foi padronizada entre fabricantes, não oferecida por cada um no seu dialeto. A
recuperação foi resolvida antes de virar tragédia: custódia distribuída entre pessoas de
confiança é uma opção de sistema operacional, explicada em linguagem que não pressupõe
criptografia, e o inventário de bens já trata chave como trata imóvel. A interface aprendeu a
falar de divergência sem assustar, e a palestra de UX para mundo sem rede de 2026 virou um
capítulo de livro-texto. Para chegar aqui foi preciso o que ainda não aconteceu: o controle de
acesso descentralizado sair do estágio de desenho, alguém resolver o financiamento de software
que não cobra por assento, e — o mais difícil — a discussão pública ter tratado recuperação de
conta como direito, e não como suporte técnico.

**Indesejável.** Em 2031 a arquitetura foi adotada e o resultado é o pior dos dois mundos. O
servidor não lê o conteúdo, mas verifica quem você é a cada porta, porque a carteira tornou a
verificação barata e a lei tornou-a obrigatória; navegar sem se identificar virou exceção que
precisa ser justificada. O conteúdo é ilegível e o metadado é completo — e a regulação, escrita
para proteger conteúdo, não alcança isso. A varredura no cliente foi aprovada em uma jurisdição
grande sob argumento de proteção infantil, e o aparelho, que ficou dono do dado, ficou também
sendo o lugar onde a inspeção acontece. A perda definitiva virou rotina desigual: quem tem
assessoria mantém a chave, quem não tem perde o acervo, e ninguém é responsável porque a
arquitetura funcionou exatamente como projetada. **O sinal precoce é específico e dá para
vigiar:** obrigação de verificação de idade estendida a serviço cifrado, aparecendo no mesmo
texto legal que preserva a criptografia — que é precisamente a combinação presente na posição do
Conselho hoje.

## 10. O experimento

### O que é

**O caderno cego** — um bloco de notas compartilhado para a turma, com três propriedades
inegociáveis e uma peça teatral obrigatória:

1. **Local-first:** o texto mora no navegador de cada pessoa (CRDT via Yjs ou Automerge), edita
   offline e converge quando reencontra a rede.
2. **Cego:** o relay de sincronização recebe e devolve bytes cifrados no cliente. A chave nasce
   no aparelho e nunca sai.
3. **Sem senha:** o acesso é por passkey (WebAuthn), sem servidor de contas, sem e-mail, sem
   "esqueci minha senha" — porque não há o que esquecer.
4. **A peça teatral:** um terminal projetado mostra, ao vivo, o que o servidor armazenou. A turma
   vê o próprio texto que acabou de digitar aparecer como ruído. Depois, uma pessoa apaga
   deliberadamente a credencial do aparelho, na frente de todo mundo, e a turma tenta recuperar
   o caderno dela.

### Que pergunta sobre o futuro ele ajuda a responder

Duas, e a segunda é a que interessa a quem projeta interação:

- **O que a interface precisa dizer que hoje ela não diz?** Não há tela padronizada para "ninguém
  pode recuperar isto", nem para "sua versão e a dela divergiram e as duas são válidas", nem para
  "este aparelho é a única cópia". O experimento produz essas telas por necessidade, não por
  exercício.
- **Quanto de soberania as pessoas querem depois de pagar o preço uma vez?** Todo dado de
  aceitação que existe hoje foi coletado *antes* de o custo aparecer.

### Que tecnologia emergente ele usa, e por que não dá com tecnologia madura

Usa CRDT para convergência sem servidor de autoridade, cifragem no cliente com chave derivada
localmente, e WebAuthn como **única** via de acesso. Com tecnologia madura dá para construir algo
parecido por fora e falso por dentro: um Google Docs com modo offline é local-first na aparência,
mas o servidor lê tudo e o suporte recupera a conta — e aí a pergunta central do experimento
(o que acontece quando ninguém pode te salvar) simplesmente não pode ser feita. O que torna a
demonstração possível não é nenhuma das três peças isoladas — todas existem —, é a recusa a
incluir a quarta que todo produto de massa inclui: o caminho de volta pelo fornecedor.

### O que a turma faz quando testar em sala

Três rodadas, cerca de 50 minutos:

1. **Escrever junto, com a rede caindo de propósito.** Metade do grupo em modo avião durante três
   minutos, todo mundo editando o mesmo parágrafo. Depois, reconectar e observar o que a
   interface *deveria* ter dito e não disse.
2. **Olhar para o servidor.** O relay projetado, os bytes cifrados, e a pergunta: isto muda a sua
   confiança, ou você só acreditaria de qualquer jeito? Voto aberto antes e depois de ver.
3. **A perda.** Apagar a passkey de um aparelho e tentar tudo. Cronometrar quanto tempo a turma
   leva para aceitar que acabou. Discutir o que **deveria** existir ali — e quem deveria operar
   esse algo.

### O que seria um resultado que me faria mudar de ideia

**O resultado que derruba boa parte da segunda ordem deste mapa:** se, depois de passar pela
rodada 3, a turma preferir a versão recuperável — isto é, se um grupo com formação técnica, sem
nenhuma pressão comercial, escolher devolver a chave ao fornecedor em troca de rede de segurança
—, então a demanda por soberania que sustenta e1.2, e2.2 e todo o ramo de e4.1 é muito mais fraca
do que este mapa supõe, e a leitura correta passa a ser a do cenário provável: local-first vence
como técnica de interface e perde como política.

**O resultado que derrubaria a primeira ordem:** se, na rodada 1, ninguém notar diferença
nenhuma entre editar local-first e editar em um documento de nuvem comum. Aí e1 não é efeito
nenhum — é descrição de algo que já aconteceu e que ninguém percebe mais, e a interface não tem
vocabulário novo a inventar porque não há fenômeno novo a nomear.

## 11. Fontes

Treze fontes abertas e lidas durante esta rodada. Nenhuma citada de memória.

1. **Ink & Switch — "Local-first software: you own your data, in spite of the cloud"** ·
   `https://www.inkandswitch.com/essay/local-first/` · Sustenta a definição de local-first, os
   sete ideais em citação literal, a autoria (Kleppmann, Wiggins, van Hardenberg, McGranaghan,
   abril de 2019, Onward! 2019) e as limitações declaradas pelos próprios autores (controle de
   acesso, desempenho, prontidão para produção). Confiabilidade alta: é a fonte primária do
   conceito, e o que citei são afirmações dos autores sobre o próprio trabalho.
2. **FIDO Alliance — "Five Billion Passkeys: FIDO Alliance Reports Mainstream Global Usage on
   World Passkey Day 2026"**, 7 de maio de 2026 ·
   `https://fidoalliance.org/fido-alliance-reports-accelerating-global-passkey-adoption-on-world-passkey-day-2026/`
   · Sustenta os números de adoção que reprovaram passkey no teste de maturidade (5 bilhões, 90%
   de conhecimento, 75% de ativação, 49% de uso regular, 68% de implantação corporativa) e a
   ficha metodológica (11.000 consumidores e 1.400 decisores, dez países, Sapio Research, abril
   de 2026, margem de ±0,9 e ±2,6 pontos). Confiabilidade média: a metodologia e a margem são
   declaradas, o que é bom, mas a entidade é o consórcio que promove a tecnologia e o total de
   5 bilhões é estimativa própria a partir de dados públicos combinados com dados internos, sem
   auditoria externa. Tratei os percentuais de pesquisa como mais confiáveis que o total estimado.
3. **W3C — "Web Authentication: An API for accessing Public Key Credentials — Level 3"**,
   Recomendação de 25 de agosto de 2026 · `https://www.w3.org/TR/webauthn-3/` · Sustenta o
   estado normativo do passwordless (Recomendação, não rascunho), que é metade do argumento de
   maturidade. Confiabilidade alta: é a norma, não um comentário sobre ela.
4. **FOSDEM 2026 — Local-First devroom**, 1º de fevereiro de 2026 ·
   `https://archive.fosdem.org/2026/schedule/track/local-first/` · Sustenta a escala e o conteúdo
   da comunidade (23 palestras), a existência de relatos de produção, e os dois sinais fracos
   (controle de acesso via Keyhive e capacidades; vocabulário de soberania). Confiabilidade alta
   para o que é: programação oficial de conferência. Mas programação é intenção declarada, não
   evidência de adoção — usei como sinal social, nunca como medida de uso.
5. **Electric — "Electric is joining Databricks"**, 11 de agosto de 2026 ·
   `https://electric.ax/blog/2026/08/11/electric-joining-databricks` · Sustenta o contra-sinal
   central do documento: o reposicionamento do motor de sincronização para agentes, o
   encerramento do Electric Cloud e a preservação do código aberto, em citação literal.
   Confiabilidade alta como declaração de intenção da própria empresa; é anúncio institucional,
   então li o que dizem que vão fazer, não o que vai acontecer.
6. **Apple Security Research — "Expanding Private Cloud Compute"**, 8 de junho de 2026 ·
   `https://security.apple.com/blog/expanding-pcc/` · Sustenta D3: os cinco requisitos em citação
   literal, o registro append-only verificável, a publicação de binários e a extensão a Google
   Cloud e NVIDIA. Confiabilidade média: é técnica e verificável em princípio (os binários são
   publicados), mas é autodeclaração do fornecedor sobre as próprias garantias — e é exatamente
   essa circularidade que aponto na seção 7.
7. **Apple Support — Contato de Legado (Legacy Contact)** · `https://support.apple.com/en-us/102631`
   · Sustenta e4 e e4.2 com a frase que importa: os dados inacessíveis ao herdeiro incluem "data
   stored in your iCloud Keychain (payment information, passwords, and passkeys)".
   Confiabilidade alta: é a documentação operacional do fornecedor sobre o próprio produto, e o
   que extraí é uma restrição que ele declara contra o próprio interesse comercial.
8. **Google Workspace Updates — "Gmail end-to-end encryption now available on mobile devices"**,
   9 de abril de 2026 ·
   `https://workspaceupdates.googleblog.com/2026/04/gmail-end-to-end-encryption-now-available-on-mobile-devices.html`
   · Sustenta que o servidor cego entrou no produto dominante e em que condição: "Enterprise Plus
   with the Assured Controls or Assured Controls Plus add-on". Confiabilidade alta para o escopo
   comercial; registro: a página **não** afirma explicitamente que o Google não consegue ler o
   conteúdo, e eu não estendi a afirmação além do que ela diz.
9. **Euronews — "European Parliament aims to exclude end-to-end chats from message-scanning
   regime"**, 9 de julho de 2026 ·
   `https://www.euronews.com/my-europe/2026/07/09/european-parliament-aims-to-exclude-end-to-end-chats-from-message-scanning-regime`
   · Sustenta a votação (369 e 362 votos, limiar de 361), a exclusão dos serviços cifrados do
   regime temporário e o estado de conflito com os Estados-membros. Confiabilidade média-alta:
   imprensa europeia de referência, com números e citação nominal da relatora; é cobertura, não
   o texto legal.
10. **Privacy International — "PI Apple TCN Challenge"** ·
    `https://privacyinternational.org/legal-action/pi-apple-tcn-challenge` · Sustenta o caso
    britânico: o regime da seção 253 do Investigatory Powers Act, o sigilo obrigatório, a
    retirada do ADP no Reino Unido, a substituição do primeiro aviso em outubro de 2025 e a
    audiência substantiva de dezembro de 2026. Confiabilidade média: é parte interessada no
    processo e escreve como litigante — mas as datas processuais e a descrição do regime legal
    são verificáveis e não dependem da interpretação dela. Usei fatos e cronologia, não a
    avaliação política.
11. **EADTrust — "EUDI Wallet: December 2026 Deadline"** ·
    `https://www.eadtrust.eu/en/blog/december-2026-deadline-eudi-wallet/` · Sustenta as datas de
    D4: 24/12/2026 para administrações públicas e 24/12/2027 para o setor privado regulado, sob o
    Regulamento (UE) 2024/1183, e a obrigação de registro como *relying party*. Confiabilidade
    média: é prestador de serviços de confiança escrevendo sobre o mercado em que atua, portanto
    parte interessada; as datas conferem com o número de regulamento citado, mas o ideal seria o
    texto oficial, que não abri nesta rodada — registro a limitação.
12. **Governo Digital (gov.br) — "Segurança da conta"** ·
    `https://www.gov.br/governodigital/pt-br/identidade/conta-gov-br/seguranca-da-conta` ·
    Sustenta o estado da autenticação no serviço público brasileiro e, por ausência, refuta a
    afirmação de que o gov.br adotou passkeys (seção 8). Confiabilidade alta como fonte primária
    do próprio sistema; ressalva honesta: ausência em uma página não é ausência no sistema
    inteiro, e é assim que está escrito na seção 8.
13. **ANPD — "ANPD publica Mapa de Temas Prioritários para o biênio 2026-2027 e atualiza Agenda
    Regulatória 2025-2026"**, 24 de dezembro de 2025 ·
    `https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-publica-mapa-de-temas-prioritarios-para-o-bienio-2026-2027-e-atualiza-agenda-regulatoria-2025-2026`
    · Sustenta os quatro eixos de fiscalização brasileiros e a ausência de criptografia entre
    eles. Confiabilidade alta: comunicação oficial do regulador sobre a própria agenda.

## 12. Anexo — o levantamento bruto

### 12.1 Estado da entrevista (Fase 1)

**Os seis pontos foram respondidos.** Nenhum ficou em aberto, e nenhum valor foi assumido pela
skill no lugar de resposta. Registro na íntegra:

1. **Tema e recorte:** "Soberania de dados: local-first, ponta-a-ponta e o fim da senha" — tema 17
   de 19 da disciplina, família "Pessoas e dados". Recorte: a arquitetura de dado e identidade da
   pessoa, distinguida do modelo rodando localmente (tema 16) e da identidade de agentes (tema 2).
2. **Horizonte:** 2031.
3. **Para quem:** quem projeta mídia e interação.
4. **Recorte geográfico:** global, com uma nota sobre o Brasil.
5. **O que já está descartado:** o que já é comum em produto de massa (a régua da disciplina).
   Nenhuma outra exclusão.
6. **Viés desejado:** neutro. Declarado no frontmatter e auditado na seção 7 — onde registro que
   o resultado não saiu neutro, e por quê.

Pontos adicionais informados no despacho e usados como restrição: nenhuma disrupção suspeitada de
antemão ("descubra"); excluir ideias óbvias que serviriam a qualquer tema; e o critério explícito
de mudança de ideia — evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a
tecnologia não rompe nada. **Este último critério foi acionado e mudou o mapa**: foi ele que
reprovou passkey como disrupção-raiz (ver 12.2 e seção 8, item 4).

**Limitação de procedimento, declarada:** esta rodada não teve interlocutor humano disponível
durante a execução. As respostas da entrevista vieram no despacho, de uma vez, e não houve como
pedir esclarecimento sobre nenhuma delas — recurso que a skill usa e que aparece exercido no
TESTE.md de referência. A regra de corte da Fase 1 não se aplica (a entrevista não foi pulada; foi
respondida), então a confiança não foi rebaixada para `baixa` por esse motivo. Mas a
impossibilidade de repergunta é parte do motivo de `confianca: media` e não `alta`.

### 12.2 Fase 2 — teste maduro / emergente / disruptivo, aplicado por escrito

| Candidato | Teste 1 (madura?) | Teste 2 (emergente?) | Teste 3 (disruptiva?) | Decisão |
|---|---|---|---|---|
| **Passkeys / WebAuthn como mecanismo de autenticação** | **Sim.** Três implantações em produção e em escala sem apostar em nada: Apple, Google e Microsoft, com passkey como caminho padrão de login; 5 bilhões em uso; 75% das pessoas com pelo menos um ativado e 49% de uso regular (FIDO, maio/2026). É opção padrão em fluxo real, e a norma virou Recomendação W3C em 25/08/2026. O que resta é difusão. | — | — | **Madura.** Rejeitada como raiz. Entra na seção 3. Foi o critério de mudança de ideia declarado na entrevista (adoção além da maioria inicial) que decidiu. |
| **A conta sem credencial recuperável pelo provedor** (passwordless sem via de volta pelo suporte) | Não. O padrão hoje é passkey **mais** senha de recuperação, e-mail e suporte. A conta sem rede de segurança é exceção. | Sim. Existe fora do laboratório — iCloud Keychain fora do Contato de Legado é um caso em produção para milhões. | Sim. Perde a razão de existir o fluxo "esqueci minha senha", e com ele o suporte como árbitro de identidade e o provedor como fiador último da conta. | **Componente de D2** (é a forma que o servidor cego assume na identidade). Sustenta e4 e toda a cadeia. |
| **Criptografia ponta-a-ponta em mensageria** | **Sim.** WhatsApp, Signal, iMessage: padrão para bilhões. A própria disputa europeia de 2026 confirma pela via inversa. | — | — | **Madura.** Rejeitada. Entra na seção 3. |
| **Ponta-a-ponta no plano geral de dados** (arquivo, e-mail, documento, backup) | Não. Apple ADP é opcional e indisponível no Reino Unido; Gmail E2EE é Enterprise Plus com complemento pago. | Sim. Está dentro dos dois produtos dominantes, crescendo, adoção de *early adopter*. | Sim. Perdem razão de existir a busca do lado do servidor, a personalização por conteúdo, a moderação por leitura e a recuperação de conta pelo fornecedor. | **Disrupção-raiz (D2).** |
| **Local-first / CRDT como arquitetura** | Não como arquitetura de soberania. O Yjs em produção resolve colaboração, não propriedade; o dado canônico segue no servidor na maioria dos casos. | Sim. Motores em produção, 23 palestras no FOSDEM 2026, PGlite de 1M para 13M de downloads semanais. | Sim. O backend como dono da verdade perde a razão de existir, e com ele o lock-in por hospedagem e a morte do dado no encerramento do serviço. | **Disrupção-raiz (D1).** |
| **Computação atestada sobre dado que o provedor não lê** | Não. O PCC é de um fornecedor, sem padrão entre concorrentes nem auditor independente. | Sim. Em produção desde 2024, expandido a terceiros em junho/2026. | Sim. Perde função o intermediário que existia só para hospedar dado alheio, e a troca "entregue o dado, receba o recurso" deixa de ser necessária. | **Disrupção-raiz (D3),** com fronteira declarada com o tema 16. |
| **Carteira de identidade do titular com atestações verificáveis (EUDI)** | Não. Prazo legal em dezembro de 2026, Estados-membros em faixas distintas de prontidão. | Sim. Carteiras nacionais em produção, pilotos em vários países, obrigação com data. | Sim. O provedor de identidade privado como intermediário obrigatório perde razão de existir em serviço regulado. | **Disrupção-raiz (D4).** |
| **Autenticação em dois fatores por SMS / TOTP** | **Sim.** 50 milhões de pessoas só na conta gov.br. | — | — | **Madura.** Rejeitada. |
| **"Entrar com Google" / OAuth social** | **Sim.** Padrão universal. | — | — | **Madura.** Rejeitada — e é justamente o ator ameaçado por D4. |
| **Backup cifrado e HTTPS** | **Sim.** Padrão desde a década passada. | — | — | **Madura.** Rejeitada; explicitamente na régua de corte da disciplina. |
| **Software auto-hospedado (*self-hosted*)** | Não é padrão. | Sim, comunidade ativa e crescente. | **Não.** Auto-hospedar troca quem opera o servidor, não a arquitetura: continua havendo um servidor que lê tudo, só que é o seu. Nenhum ator perde razão de existir — a pessoa vira o ator. | **Emergente, não disruptiva.** Rejeitada como raiz; permanece como prática de nicho e como sinal social (r/selfhosted). |
| **Argon2, jose, iron-session, otplib e afins** (a camada de desenvolvimento citada no material da disciplina) | Sim — são primitivas maduras de implementação. | — | — | **Maduras.** Rejeitadas: são como se constrói, não o que rompe. O objeto do mapa é a arquitetura, não a biblioteca. |
| **Blockchain / identidade auto-soberana ancorada em cadeia** | Não. | Discutível — mais de uma década de piloto sem virar escolha padrão em nenhum fluxo de identidade em escala. | Não avaliado: reprova no teste 2 na leitura mais rigorosa (adoção não é *early adopter* em curva ascendente; é platô longo). | **Rejeitada.** Não entrou no mapa. Registro a divergência: o EUDI resolve o mesmo problema sem cadeia, o que é em si um dado sobre qual desenho venceu. |

### 12.3 Fase 4 — auditoria, item a item

Aplicados os três testes (extrapolação linear? velocidade sem precedente? elo causal pulado?) aos
39 efeitos. Resultado:

**Cortado (1):**

- **e2.1.1, versão original** — "o currículo de desenvolvimento web se reorganiza em torno de
  replicação e resolução de conflito". Cortado por dois motivos cumulativos: falha o teste de
  velocidade (reforma curricular universitária leva mais de uma década a se consolidar, e o
  horizonte é 2031) e, principalmente, é um efeito que **serviria a qualquer disrupção
  tecnológica** — exatamente o tipo de item que a entrevista pediu para excluir. Substituído por
  um efeito específico do tema: o limite do local-first em domínios que não podem admitir duas
  versões simultâneas do mesmo fato (contabilidade, prontuário, registro escolar).

**Reescritos com o passo causal que faltava (2):**

- **e7.1** — de "o modelo de negócio baseado em dado encolhe" para "a cegueira atinge o conteúdo e
  não o metadado, e a publicidade se concentra no metadado". O original pulava a etapa de que
  segmentação roda majoritariamente sobre comportamento e metadado. Detalhe na seção 8, item 3.
- **e9.1** — de "o usuário troca de serviço sem perder identidade nem grafo" para "troca sem
  perder a identidade, mas continua perdendo o grafo". O original derivava portabilidade de
  relação a partir de portabilidade de credencial, o que é um salto: a carteira carrega
  atestação sobre a pessoa, não o conjunto de vínculos dela dentro de um serviço.

**Rebaixados para `confianca: baixa` (4):**

- **e1.1.1** (estar online como metadado social) — derivação por analogia com indicadores de
  presença já existentes, sem sinal específico observado.
- **e5.1.1** (país como regime jurídico escolhido pelo usuário) — precedente existe para pessoa
  jurídica, não para consumidor comum; o passo do corporativo para o individual não está
  demonstrado.
- **e6.1.1** (atestação pública mata o marketing de privacidade) — pode se inverter, como
  registrado na seção 7; mantido por ser derivação válida, com confiança rebaixada e a inversão
  documentada.
- **e2.2** (perda de telemetria fina) — o caminho óbvio de contorno (instrumentar o cliente e
  enviar o evento separado do conteúdo) já é prática corrente; o efeito supõe que empresas não
  o usem.

**Marcados como fora do horizonte (1):**

- **e4.2.1** — prazo 2032, além do horizonte declarado de 2031. Mantido no bloco com o prazo real
  e sinalizado na seção 7.

**Marcados como extrapolação linear, mantidos com confiança alta por serem observáveis (2):**

- **e1** e, por herança, **e1.1** — são descrição de tendência em curso mais do que futurização.
  Registrado na seção 7 como o ramo que menos trabalho faz no mapa.

**Sobreviveram sem alteração:** 29 dos 39. Dez efeitos foram cortados, reescritos, rebaixados ou
marcados — cerca de um quarto do mapa.

### 12.4 Buscas que não deram em nada, e fontes que não abri

- **Confirmação oficial de passkeys no gov.br.** Busca restrita ao domínio `gov.br` devolveu a
  agenda de governo digital, a página de FAQ da conta e a notícia da Secom sobre verificação em
  duas etapas — nenhuma menção a passkey ou WebAuthn. A página oficial de segurança da conta,
  aberta, também não menciona. Conclusão registrada na seção 8, item 1.
- **Notícia da Secom sobre 50 milhões de usuários de 2FA no gov.br (fevereiro de 2026).** Duas
  tentativas de leitura, ambas com queda de conexão (`socket hang up`). O número aparece na seção
  3 atribuído ao título da notícia tal como devolvido pela busca no domínio `gov.br`, e **não**
  entra na contagem de fontes, porque não abri a página. Se este documento for usado adiante, é o
  primeiro item a reabrir.
- **CNBC, "Apple launches fresh legal challenge against UK encrypted data access demand"
  (4 de agosto de 2026).** HTTP 403. Substituída pela página da Privacy International, que cobre
  a mesma cronologia processual em fonte que responde.
- **"Local-first AI agent" / IA local sobre dado pessoal.** A busca devolveu quase só conteúdo de
  otimização para buscador (guias de 2026 com números de latência e requisitos de VRAM sem
  metodologia nem fonte primária). Nada disso entrou no documento. O que sustenta D3 é o texto
  técnico da Apple, e apenas ele. Registro porque é informativo sobre o campo: a região onde os
  temas 16 e 17 se encontram é, hoje, a de pior qualidade de fonte pública dos assuntos que
  toquei.
- **Recuperação de conta e passkey perdido.** A busca devolveu material de fornecedores de
  autenticação, com um número atribuído a pesquisa da Forrester de 2025 sobre custo de chamado de
  redefinição de senha (US$ 97 a US$ 125). **Não usei o número em lugar nenhum** — não abri a
  pesquisa da Forrester, e número de custo citado por quem vende a solução que o elimina é
  exatamente o tipo de dado que precisa vir da fonte. O argumento de e4 se sustenta sem ele, na
  documentação da Apple.
- **Texto oficial do Regulamento (UE) 2024/1183.** Não aberto. As datas de D4 vêm de fonte
  secundária interessada (item 11 da seção 11), com a limitação declarada ali.
- **Databricks, "Electric joins Databricks to bring WASM Postgres to AI agent sandboxes".**
  Apareceu na busca e não foi aberta; preferi o anúncio do lado da Electric, que é a parte cuja
  mudança de missão interessa ao argumento. O número de downloads do PGlite (1M → 13M) vem do
  resumo de busca dessa fonte e não de leitura direta — tratei-o como indicativo, e é por isso
  que ele aparece na seção 6 (sinais fracos) e não sustenta nenhum efeito da roda.

**Nota da checagem de links (11/09/2026).** Os treze endereços da seção 11 foram verificados um
a um com `curl -L`: doze devolvem HTTP 200. O da Euronews (item 9) devolve **406** a cliente de
linha de comando — é bloqueio de agente automatizado, não link quebrado: a página foi aberta e
lida nesta rodada pela ferramenta de leitura, e responde normalmente em navegador. Registro para
que a checagem automática da disciplina não leia isso como fonte inexistente.

### 12.5 Caminhos abandonados

- **Uma quinta raiz sobre "portabilidade de grafo social" (ActivityPub, AT Protocol).** Descartada
  por reprovar no teste 3 dentro deste recorte: o objeto do tema 17 é a arquitetura de dado e
  identidade **da pessoa**, e o grafo é propriedade de um serviço, não da pessoa. O tema
  sobreviveu como efeito de terceira ordem (e9.1.1), que é o lugar certo para ele.
- **Ler o tema pela porta das finanças pessoais**, como o material da disciplina sugere (budgero,
  kostos, wilson, finvo e afins). Abandonado como estrutura, mantido como alerta de viés: é uma
  amostra autosselecionada de quem já decidiu que soberania importa, e usá-la como base de leitura
  do futuro do dado pessoal enviesa a demanda para cima. Está registrado como o primeiro viés da
  seção 7. Nenhum desses projetos entrou no documento, porque não abri o repositório de nenhum
  deles — citá-los de memória seria exatamente o erro que a seção 8 existe para pegar.
- **Um ramo sobre computação quântica e migração criptográfica.** Não sustentava cadeia de três
  ordens dentro do horizonte de 2031 sem virar ficção geral. Rebaixado a wildcard 3, que é onde
  ele cabe.
