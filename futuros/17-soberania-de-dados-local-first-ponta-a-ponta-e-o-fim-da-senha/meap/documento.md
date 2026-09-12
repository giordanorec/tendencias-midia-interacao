---
tema: "Soberania de dados: local-first, ponta-a-ponta e o fim da senha"
slug: soberania-de-dados-local-first-ponta-a-ponta-e-o-fim-da-senha
autor_login: meap
zona_de_interesse: "Pessoas e dados"
data: 2026-09-11
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: "global, com nota sobre o Brasil"
disrupcoes_raiz: 3
efeitos_ordem_1: 12
efeitos_ordem_2: 17
efeitos_ordem_3: 11
tecnologias_citadas: [local-first software, CRDT, Automerge, Beelay, Yjs, Keyhive, PGlite, ElectricSQL, PowerSync, Zero, WebAuthn, FIDO2, passkeys, CXP, CXF, criptografia ponta-a-ponta, criptografia no cliente, criptografia homomórfica, self-hosting]
fontes: 14
confianca: media
experimento: "O teste da porta dos fundos: auditar, em 20 apps que a turma realmente usa, onde termina o caminho de recuperação (caixa de e-mail? suporte humano? nada?), se dá para apagar a senha, se a passkey sobrevive à perda do aparelho e se o dado sai num formato que outro programa abre — e, em paralelo, construir uma página que cifra no navegador e sincroniza por um relay burro, para medir na prática o que quebra quando o servidor não lê."
skill_usada: futurization-meap
publico_ok: false
---

# Soberania de dados: local-first, ponta-a-ponta e o fim da senha

## 1. Resumo

A narrativa corrente diz que três rupturas convergentes — o dado que mora no aparelho, o servidor que não consegue ler, e a senha que acaba — desmontam o modelo em que a empresa é dona do seu dado, da sua conta e da sua identidade. A primeira coisa que a triagem de maturidade fez neste mapa foi derrubar um terço dessa frase. Em abril de 2026, 75% das pessoas pesquisadas pela FIDO Alliance já tinham habilitado uma passkey em pelo menos uma conta e 49% a usam regularmente quando disponível; há cerca de 5 bilhões de passkeys em uso. Pela régua da própria disciplina, isso não é emergente: é maduro. A passkey já aconteceu.

O que **não** aconteceu — e é aí que está a ruptura — é a remoção do plano B. No mesmo levantamento, 82% das organizações dizem que o objetivo final é ficar sem senha e apenas 28% chegaram lá; 57% ainda dependem de autenticação phishável como método principal. A senha não foi substituída: foi empurrada para o rodapé, onde vive o fluxo de recuperação. E o fluxo de recuperação quase sempre termina na caixa de e-mail, o que significa que o modelo de ameaça mudou menos do que a tela de login.

O mapa que se segue trata, portanto, de três disrupções deslocadas em relação ao enunciado do tema. Primeira: **o servidor cego fora da mensageria** — criptografia no cliente como arquitetura padrão de aplicativo comum, não só de mensageiro, o que apaga busca, recomendação, moderação proativa e treino do lado do servidor. Segunda: **a conta sem plano B** — não a passkey, que já chegou, mas a remoção do caminho de exceção, que arrasta suporte, perda de aparelho e herança digital. Terceira: **o dado que sincroniza em vez de morar no servidor** — e aqui a evidência de 2026 é ambígua de um jeito que importa: no mesmo ano em que a Local-First Conf triplicou de tamanho, o motor de sincronização mais visível do ecossistema foi comprado por uma empresa de nuvem, para servir agentes de IA.

Para quem projeta mídia e interação, o resultado prático não é "as plataformas perdem poder". É mais estreito e mais acionável: aparecem duas peças de interface que hoje não existem em lugar nenhum — **a fronteira do dado** (o que sai daqui e o que fica) e **o estado de convergência** (o que já é seu, o que ainda não chegou no outro lado) — e some uma certeza que sustentava todo o desenho de fluxo de exceção: a de que sempre haverá um e-mail para salvar quem se perdeu.

## 2. O tema

**Soberania de dados**, no recorte deste mapa, é a arquitetura de dado e identidade **da pessoa**: onde o dado reside fisicamente, quem consegue lê-lo, e o que prova que a conta é sua. São três camadas técnicas distintas que o discurso costuma juntar:

- **Local-first** é uma escolha de *residência*: o dado mora no dispositivo e sincroniza, em vez de morar no servidor e ser exibido. O termo foi cunhado em abril de 2019 por Martin Kleppmann, Adam Wiggins, Peter van Hardenberg e Mark McGranaghan, no ensaio do Ink & Switch, com sete ideais explícitos — entre eles "the network is optional", "the long now" e "you retain ultimate ownership and control".
- **Ponta-a-ponta** é uma escolha de *legibilidade*: o servidor guarda bytes que não consegue decifrar. Isso é maduro em mensageria e emergente em tudo o mais.
- **Passkey/WebAuthn** é uma escolha de *prova*: a autenticação é criptográfica, feita pelo aparelho, sem segredo compartilhado com o servidor.

As três são independentes. Existe app local-first sem criptografia (a maioria dos editores de texto com sincronia). Existe E2E sem local-first (o mensageiro, que cifra mas não te dá o arquivo). Existe passkey sobre um servidor que lê tudo (o caso comum hoje). O tema só vira um tema quando as três aparecem juntas — e a evidência de 2026 mostra que juntar as três é exatamente a parte que ainda não está pronta.

**Onde isso encosta em mídia e interação.** Em três lugares concretos, nenhum deles abstrato. Primeiro, no **estado**: interface local-first não tem "carregando", tem "divergente" — e ninguém ensinou ninguém a desenhar isso. Segundo, no **fluxo de exceção**: perder o aparelho, morrer, ser hackeado, mudar de gerenciador — toda a engenharia de produto de recuperação foi construída em cima de um segredo memorizável e de uma caixa de e-mail, e as duas coisas estão sendo retiradas. Terceiro, na **funcionalidade que depende de ler**: busca, recomendação, resumo, moderação. Se o servidor é cego, essas quatro ou migram para o cliente com um orçamento de memória e bateria, ou saem do produto.

**Por que merece mapa de futuro.** Porque a mudança não é de grau. Um produto que não consegue ler o dado do usuário não é o mesmo produto com uma camada a mais de segurança: é um produto com menos funcionalidades, outro modelo de receita, outro desenho de suporte e outra relação jurídica com o Estado. E porque o vetor de mudança aqui **não é técnico** — a criptografia no cliente é trivial há anos. É regulatório, econômico e de suporte. Mapa de futuro serve exatamente para casos assim, em que a tecnologia está pronta e o que decide é outra coisa.

## 3. Onde isso está hoje

**A passkey passou da maioria inicial. Isso é um fato de 2026, e ele reordena o mapa inteiro.**

O relatório da FIDO Alliance publicado em 7 de maio de 2026, baseado em dois estudos da Sapio Research feitos em abril de 2026 (11 mil consumidores em dez países, margem de ±0,9%; 1.400 decisores em organizações com 500+ funcionários, margem de ±2,6%), traz: **cerca de 5 bilhões de passkeys em uso no mundo**, **90% de conhecimento** do termo, **75% com pelo menos uma passkey habilitada** e **49% usando regularmente** quando disponível. Do lado corporativo, **68% das organizações implantaram ou estão implantando** passkeys para login de funcionários.

Pela regra de ouro da triagem de maturidade — se a tecnologia aparece em mais de 50% dos dispositivos ou serviços do público-alvo, ela é madura —, a passkey **não pode entrar neste mapa como disrupção-raiz**. Ela entra aqui, na seção de contexto presente. É importante dizer isso com todas as letras porque o enunciado do tema a coloca como uma das três rupturas convergentes, e a evidência de 2026 desmente.

**O que continua sem acontecer é a remoção da senha, não a chegada da passkey.**

No mesmo levantamento: **82% das organizações dizem que o objetivo final é ficar sem senha, e só 28% chegaram lá**; **57% ainda dependem de autenticação phishável** como método principal de login de funcionário; 24% dizem estar esperando a tecnologia amadurecer. Do lado do consumidor, 33% receberam notificação de comprometimento ou vazamento no último ano e 47% dizem que provavelmente abandonam uma compra ou um login quando não lembram a senha.

Há ainda um número que este mapa usa como alerta e não como conforto: **89% das organizações se dizem confiantes em restaurar o acesso de quem perde a passkey**. Confiança declarada em processo raramente exercido é o tipo de indicador que envelhece mal — e é exatamente o processo que a seção 4.2 identifica como o ponto que quebra.

A Microsoft anunciou em **1º de maio de 2025** (2 de maio, segundo outro veículo; ver fonte 13) que todas as contas novas nascem sem senha — "New users will have several passwordless options for signing into their account and they'll never need to enroll a password" —, mas a frase seguinte do mesmo anúncio é a que descreve o mundo real: "Existing users can visit their account settings to delete their password". Ou seja: para quem já tem conta, apagar a senha é uma ação voluntária, escondida numa tela de configuração.

**A passkey também não é à prova de tudo, e 2026 foi o ano em que isso ficou público.**

Em **5 de agosto de 2026**, no Black Hat USA, o pesquisador Michael Grafnetter (SpecterOps) apresentou o *Pass-the-Passkey*: uma família de mais de vinte técnicas contra Windows 11, Microsoft Entra ID, navegadores e gerenciadores de credencial. O caso mais direto virou **CVE-2026-34348**: o serviço de log de eventos do Windows gravava material de chave relacionado à passkey em texto claro, legível por qualquer usuário autenticado sem privilégio na máquina; a Microsoft corrigiu no pacote de 14 de julho de 2026 truncando o campo de assinatura para seis bytes. Em paralelo, a Unit 42 demonstrou recuperação de chaves privadas de passkeys sincronizadas pelo Google Password Manager no Chrome em Windows, e Dirk-jan Mollema mostrou processos de baixo privilégio assinando desafios WebAuthn do Entra sem novo PIN ou biometria. A frase que sintetiza: **"None cracked the math."** Nenhum quebrou a criptografia — todos entraram pelos controles em volta.

**A portabilidade da credencial saiu do papel, mas é recente.**

O **Credential Exchange Format (CXF)** virou Proposed Standard da FIDO Alliance em agosto de 2025; o **Credential Exchange Protocol (CXP)**, que cifra a transferência com HPKE, mirava padronização no início de 2026. A Apple embarcou transferência de credencial no mesmo dispositivo baseada em CXF no iOS e macOS 26; o Android passou a suportar o protocolo via Google Play Services 26.21 em diante. Antes disso, trocar de gerenciador significava exportar um CSV em texto claro. É uma mudança real e tem menos de um ano de estrada.

**O local-first tem comunidade, tem motor, e teve em 2026 o seu primeiro grande sinal de ambiguidade.**

A **Local-First Conf 2026** aconteceu em Berlim, de 12 a 14 de julho, com o tema declarado "user empowerment in an age of fluid software", em escala de duas a três vezes a das edições anteriores. O Automerge se descreve hoje como "a local-first sync engine for multiplayer apps that works offline, prevents conflicts, and runs fast", com armazenamento colunar comprimido e sincronia sobre qualquer transporte — "if you can transfer bytes, you can sync documents".

E em **11 de agosto de 2026** a Electric (ElectricSQL) anunciou que estava sendo comprada pela **Databricks**. O número que a Databricks publicou é o que mais importa aqui: **o PGlite passou de 1 milhão para 13 milhões de downloads semanais em doze meses**. O motivo declarado da compra não é soberania do usuário — é dar a cada agente de IA o seu próprio Postgres em sandbox, com o motor de sincronização levando o estado distribuído de volta para o Lakebase central. O mesmo ferramental, o vetor oposto.

**O elo que falta — E2E sobre CRDT — existe como pesquisa, e a própria pesquisa avisa para não usar.**

O projeto **Keyhive** (antes chamado Beehive), do Ink & Switch, é a tentativa mais séria de resolver o problema real: como fazer controle de acesso e criptografia ponta-a-ponta num mundo sem servidor central, onde "access control must travel with the data itself and work without a central guard". São três camadas — capacidades convergentes, um CRDT de gestão de grupo com **revogação sem coordenação**, e E2E com chaves causais e segurança pós-comprometimento — mais um protocolo de sincronia novo, o **Beelay**, que sincroniza cargas cifradas que o servidor não decifra. O status, porém, é explícito: código pré-alpha desde março de 2025, com aviso de "DO NOT use this release in production applications", APIs instáveis e sem auditoria de segurança; a formalização de segurança contra ataques de fork cruzado foi concluída por colaboradores acadêmicos em julho de 2026. Ou seja: a peça que junta "local-first" com "ponta-a-ponta" é, em setembro de 2026, uma pesquisa que ainda não pode ir a produto.

**O que decide não é a criptografia: é o tribunal.**

O Reino Unido emitiu à Apple, em fevereiro de 2025, um Technical Capability Notice sob o Investigatory Powers Act exigindo acesso a dados cifrados do iCloud. A Apple retirou o Advanced Data Protection do Reino Unido em vez de cumprir. Depois de pressão diplomática dos Estados Unidos, o governo britânico recuou da exigência mundial e emitiu uma nova ordem **limitada a usuários do Reino Unido** — e é essa que a Apple está contestando: em **agosto de 2026** a empresa entrou com uma nova reclamação no Investigatory Powers Tribunal, questionando a autoridade do governo para emitir tais notificações. A questão segue indecidida.

Na União Europeia, a regulação CSA ("Chat Control") continua em trilogo. O mandato do Parlamento **exclui os serviços cifrados ponta-a-ponta do escopo**; o mandato do Conselho, na redação de 2025, **não os exclui**, exigindo varredura do lado do cliente; a proposta original da Comissão obrigava a "scan messages on every smartphone (client-side scanning)". A varredura obrigatória foi removida do rascunho dos governos no fim de 2025, mas a crítica registrada no rastreador que consultei é que o texto "remains deeply flawed", por deixar a varredura a critério do provedor. (Ver a seção 8: há uma votação de julho de 2026 amplamente citada em fontes secundárias que eu **não consegui confirmar** em fonte primária.)

**O Brasil: a passkey chegou ao governo federal, mas não por onde se diz que chegou.**

A imprensa popular brasileira publicou, em fevereiro de 2026, que o aplicativo gov.br passou a permitir login sem senha por passkey para mais de 170 milhões de brasileiros. **A página oficial de Segurança da Conta do Governo Digital não menciona passkey nem chave de acesso**: descreve login com CPF e senha mais código gerado no aplicativo, e trata de verificação em duas etapas. A página oficial da Conta gov.br, que referencia a Portaria SGD/MGI nº 11229 de 12 de dezembro de 2025, descreve os níveis bronze, prata e ouro e **também não menciona passkey**.

O que existe, verificado em fonte oficial, é mais estreito e mais interessante: o **SIAFI, do Tesouro Nacional, aceita acesso por Passkey** desde as mudanças implantadas em **novembro de 2024** — mas apenas para perfis de consulta (AUDITOR, BT, CONEXEC, EXTRATOR, SRF, TCU, TESCONGER, TESCUSTO, TESPAGEF, COMUNICA, CONFOP), e com a ressalva de que "Caso o usuário já tenha certificado digital aceito pelo Siafi, poderá acessar por certificado e não precisará criar a Passkey". Isto é: no Estado brasileiro a autenticação sem senha entrou primeiro por um sistema especialista de servidor público, como alternativa ao certificado digital — não pela porta do cidadão.

**E o self-hosting continua sendo sinal, não escala.** O r/selfhosted tem por volta de 725 a 790 mil inscritos em 2026, dependendo da medição. É uma comunidade grande para uma comunidade técnica e um número irrelevante para qualquer afirmação sobre comportamento de massa.

## 4. As disrupções-raiz

Antes das três, o registro do que foi **descartado na triagem** e por quê:

| Tecnologia | Classificação | Destino |
|---|---|---|
| HTTPS/TLS, backup cifrado, 2FA por SMS, login federado ("entrar com Google") | Madura | Contexto (seção 3) |
| E2E em mensageria (Signal, WhatsApp, iMessage) | Madura | Contexto — padrão desde 2016 |
| Gerenciador de senhas | Madura | Contexto |
| **Passkey / WebAuthn / FIDO2 como credencial** | **Madura** | **Descartada como raiz** — 75% habilitaram, 49% usam regularmente, ~5 bi em uso |
| Yjs em editor colaborativo | Madura no nicho | Contexto |
| CRDT para app comum (Automerge, Loro) | Emergente | Entra em D3 |
| Motor de sincronização gerenciado (PowerSync, Zero, PGlite) | Emergente | Entra em D3 |
| CXP/CXF (portabilidade de credencial) | Emergente | Entra em D2 |
| E2E + controle de acesso sobre CRDT (Keyhive/Beelay) | Emergente | Entra em D1 e D3 |
| Criptografia homomórfica em produto | Emergente, nicho estreito | Entra em D1 (efeito de 2ª ordem) |
| Self-hosting como prática de consumo | Emergente | Sinal fraco (seção 6) |
| **Remoção do caminho de recuperação** | **Disruptiva** | **D2** |
| **Servidor cego fora da mensageria** | **Disruptiva** | **D1** |
| **Dado que sincroniza, com armazenamento do usuário** | **Disruptiva** | **D3** |

### 4.1. O servidor cego fora da mensageria

**O que quebra.** Quebra a premissa silenciosa sobre a qual foi construído praticamente todo software pessoal em nuvem desde 2006: a de que o servidor pode ler o conteúdo. Dessa premissa dependem quatro coisas que o usuário considera parte do produto — busca global no histórico, recomendação, resumo automático, moderação proativa — e três que a empresa considera parte do negócio: treinar modelo, vender publicidade por perfil, e responder a ordem judicial entregando conteúdo. Quando a cifra é feita no cliente e a chave nunca sobe, nenhuma das sete continua funcionando do mesmo jeito. Note que isto **não** é o mesmo que E2E em mensageiro: no mensageiro, ninguém esperava busca semântica no histórico do interlocutor. Em um app de finanças, de notas ou de saúde, essas funções *são* o produto.

**Por que agora.** Três razões datadas. (a) A criptografia no cliente ficou trivial — WebCrypto em toda parte, bibliotecas maduras, custo de CPU irrelevante. (b) O custo da confiança em terceiro ficou visível e precificável: a Apple preferiu **retirar** o Advanced Data Protection do Reino Unido a implementar acesso, e em agosto de 2026 foi ao Investigatory Powers Tribunal contestar a nova ordem — "não conseguimos ler" virou posição jurídica defensável e cara de manter, mas defensável. (c) A peça que faltava tecnicamente — controle de acesso e revogação num mundo sem servidor central — deixou de ser hipótese e virou projeto com desenho publicado (Keyhive, Beelay).

**O que ainda falta.** Falta a peça (c) sair do pré-alpha: o próprio Ink & Switch avisa para não usar em produção, as APIs são instáveis e não houve auditoria de segurança; a questão de escala — dezenas de milhares de documentos, milhões de leitores, milhares de escritores — segue em teste. Falta busca de qualidade sobre dado cifrado a custo aceitável: a criptografia homomórfica funciona em consulta pequena e estruturada, como o Live Caller ID, e não em busca semântica sobre anos de histórico. E falta, sobretudo, uma resposta econômica: nenhuma empresa grande tem incentivo para ficar cega enquanto a receita depende de enxergar.

### 4.2. A conta sem plano B

**O que quebra.** Não quebra o login — esse já mudou, e a evidência da seção 3 mostra que mudou para a maioria. Quebra o **fluxo de exceção**, que é a parte do produto que ninguém desenha com carinho e todo mundo usa no pior dia: esqueci, perdi o aparelho, troquei de celular, fui hackeado, morri. Esse fluxo hoje termina, em quase todo serviço, na caixa de e-mail — o que significa que a caixa de e-mail é a credencial-mestra, independentemente do que protege a conta. Retirar o plano B sem construir outro transfere o ponto único de falha da memória da pessoa para o desbloqueio do aparelho e para a conta de plataforma que sincroniza a chave. E cria um caso que o modelo anterior não tinha: a conta **irrecuperável por desenho**.

**Por que agora.** Porque o caminho já está sendo fechado, não porque poderia ser. A Microsoft criou contas sem senha por padrão desde maio de 2025 e oferece apagar a senha às existentes. O CXP/CXF tornou a credencial portátil entre cofres a partir de 2025-2026, o que remove a última desculpa técnica para manter a senha como âncora. E a herança digital já bateu no muro de forma documentada: o Legacy Contact da Apple dá ao contato designado acesso a "photos, messages, notes, files, device backups, and more", mas exclui explicitamente "data stored in your iCloud Keychain (payment information, passwords, and passkeys)". A passkey do falecido não é herdável. Isso é desenho, não bug.

**O que ainda falta.** Falta um mecanismo de recuperação que não seja nem a caixa de e-mail nem o suporte humano da plataforma — recuperação social, cópia em hardware, custódia designada com prazo de inatividade — em forma que uma pessoa comum consiga usar sem entender criptografia. Falta a conformidade parar de aceitar "resistente a phishing" como resposta: o Pass-the-Passkey mostrou mais de vinte técnicas que não quebram a matemática e entram pelos controles em volta, e a inscrição e a recuperação estão entre esses controles. E falta, no Brasil especificamente, qualquer previsão legal clara sobre acesso póstumo a credencial criptográfica.

### 4.3. O dado que sincroniza em vez de morar no servidor

**O que quebra.** Quebra o cativeiro como mecanismo de retenção. Quando o dado mora num arquivo do usuário e o app é uma janela sobre ele, sair do produto deixa de custar uma exportação em CSV e um fim de semana. Quebra também, do lado de dentro, o modelo operacional: não existe mais "o estado do sistema" no servidor para depurar; existem N aparelhos com N estados que convergem. E quebra o vocabulário da interface — o spinner, que é a representação visual de "o servidor sabe e você não", perde o referente.

**Por que agora.** O ferramental saiu do laboratório e entrou no fluxo normal de desenvolvimento: PGlite de 1 para 13 milhões de downloads semanais em doze meses, PowerSync adotado por times corporativos, Zero e Electric disputando experiência de desenvolvimento, Automerge com armazenamento colunar e sincronia sobre qualquer transporte. A comunidade tem evento próprio em escala de duas a três vezes a do ano anterior. O custo de construir local-first, que em 2019 era proibitivo, hoje é uma decisão de arquitetura como outra qualquer.

**O que ainda falta.** Falta o motivo econômico: nenhuma empresa entrega voluntariamente o dado que a retém, e a evidência de 2026 aponta para o lado contrário — a Electric foi comprada por uma empresa de nuvem para acelerar **agentes**, não para libertar usuários. Falta um "armazenamento do usuário" padronizado que muitos apps compartilhem, sem o qual local-first significa apenas "cada app tem a sua cópia local", o que não é soberania, é duplicação. E falta o casamento com 4.1: sincronizar localmente sem cifrar ponta-a-ponta entrega ao servidor tudo o que ele tinha antes, com passos a mais.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "O servidor cego fora da mensageria"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Funcionalidade que dependia de ler o conteúdo — busca global, recomendação, resumo e moderação proativa — é reimplementada no cliente ou sai do produto."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "A busca vira orçamento de dispositivo, porque o índice inteiro precisa caber e ser mantido no aparelho, e o produto passa a declarar limite de histórico pesquisável."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Quanto do próprio passado um app consegue encontrar vira atributo comparável de produto, como armazenamento, e aparece na tela de planos."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "A moderação migra do conteúdo para o metadado e para a denúncia do destinatário, que passa a anexar a prova porque o servidor não a tem."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "O desenho da denúncia vira peça central da interface de produto social, com fluxo próprio de coleta de prova pelo usuário, e deixa de ser item escondido de menu."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "Não conseguir ler vira argumento jurídico e comercial explícito, anunciado como característica e usado como defesa diante de ordem judicial."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Governos deslocam a exigência do servidor para o dispositivo, e a disputa deixa de ser sobre quebrar a cifra e passa a ser sobre inspecionar antes de cifrar."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "O sistema operacional, e não o aplicativo, vira o ponto de captura regulado, e escolher plataforma passa a ser escolher jurisdição."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Provedores de nuvem passam a vender cegueira como camada contratada, com chave do cliente e servidor que só guarda bytes, para atender jurisdições que a exigem."
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e3
        ordem: 1
        efeito: "O modelo de receita baseado em ler o dado é empurrado para assinatura, e o preço do software pessoal sobe para quem quer o servidor cego."
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Cresce a faixa de aplicativos que cobram por sincronização e armazenamento em vez de por funcionalidade, vendendo transporte em lugar de leitura."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Publicidade contextual calculada no cliente, sobre o que está na tela agora, volta a crescer contra a publicidade por perfil acumulado no servidor."
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "A IA que atua sobre dado pessoal passa a ter de rodar no cliente ou sobre cifra, sob pena de a promessa de privacidade cair por terra."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Recursos de IA passam a ter dois modos declarados, neste aparelho e no servidor, e a escolha vira configuração visível em vez de nota de rodapé."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "O design de interação ganha um objeto novo, a fronteira do dado, que é a peça de interface encarregada de mostrar o que sai e o que fica."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Computação sobre cifra sai do nicho de consulta telefônica e entra em busca e recomendação, com custo que só se paga em consulta pequena e estruturada."
            sinal: medio
            prazo: 2031
            confianca: baixa

  - disrupcao: "A conta sem plano B"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "O ponto único de falha migra da senha memorizada para o desbloqueio do aparelho e para a conta de plataforma que sincroniza a chave."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O suporte troca esqueci minha senha por prova de identidade, com documento, vídeo ou atendimento presencial, e o custo por chamado sobe."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Verificação de identidade vira serviço comprado de terceiro, e o intermediário que a passkey tirou da autenticação reaparece na recuperação."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "Recuperação social e cópia da chave em hardware saem do nicho de criptomoeda e aparecem em produto de consumo comum."
            sinal: medio
            prazo: 2030
            confianca: baixa
      - id: e6
        ordem: 1
        efeito: "A herança digital vira problema jurídico concreto, porque a chave não é herdável por desenho e a família encontra uma porta que não abre."
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Surge o acesso póstumo como recurso de produto, com designação prévia de pessoa e prazo de inatividade antes da liberação."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Inventário passa a listar designação de acesso digital como item padrão, e cartórios e bancos brasileiros passam a pedir o comprovante."
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "Com transferência cifrada de credencial entre cofres, o gerenciador deixa de ser prisão e trocar de fornecedor deixa de exigir exportar texto claro."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "O gerenciador de credenciais vira categoria de escolha explícita no sistema operacional, na mesma prateleira do navegador padrão."
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e8
        ordem: 1
        efeito: "O ataque se desloca do phishing da senha para o roubo da asserção assinada e para os fluxos de inscrição e de recuperação."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Resistente a phishing deixa de bastar como exigência de conformidade, e a auditoria passa a examinar o caminho de recuperação."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "A formação em segurança de produto muda de objeto e passa a estudar o desenho do fluxo de exceção, não o da autenticação."
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "O dado que sincroniza em vez de morar no servidor"
    efeitos:
      - id: e9
        ordem: 1
        efeito: "O aplicativo deixa de ser onde o dado mora e vira janela sobre o dado, e o modo offline deixa de ser degradação para virar estado normal."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "O spinner sai do vocabulário de interface e em seu lugar entra o indicador de convergência, que mostra o que já é seu e o que ainda não chegou ao outro lado."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "O ensino de design de interação troca estados de carregamento por estados de convergência como unidade básica do repertório."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: "Conflito de edição vira assunto de produto e não de banco de dados, porque alguém precisa desenhar o que aparece quando duas versões suas discordam."
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e10
        ordem: 1
        efeito: "A portabilidade deixa de ser botão de exportar e vira propriedade do formato, porque o dado já está num arquivo que outro programa abre."
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "Trocar de aplicativo fica barato, e a retenção passa a depender de qualidade percebida em vez de custo de saída."
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: "Surgem aplicativos pequenos e especializados operando sobre a mesma base de dado pessoal, o inverso da suíte integrada."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: "O custo de infraestrutura cai porque o servidor vira retransmissor de bytes cifrados, e o custo de suporte sobe porque cada aparelho é um estado diferente."
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "Depurar deixa de ser ler o log do servidor, porque não existe log de conteúdo, e a telemetria passa a ser desenhada para não enxergar."
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e12
        ordem: 1
        efeito: "O ecossistema de sincronização se consolida e é absorvido pela nuvem, e o motor local-first vira recurso de plataforma central."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: "Local-first passa a significar duas coisas distintas, soberania do usuário e latência zero para quem desenvolve, e a segunda é a que vende."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: "O rótulo perde poder de distinguir produto, e quem quer soberania passa a exigir a prova técnica de quem detém a chave em vez do rótulo."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**O que o YAML não diz.**

Primeiro, uma declaração obrigatória: dois efeitos de 3ª ordem têm prazo **além do horizonte de 2031** — `e3.1.1` (publicidade contextual no cliente, 2032) e `e6.1.1` (inventário com designação de acesso digital, 2032). Mantive os dois porque o mecanismo causal é nomeável e porque ambos dependem de ciclo institucional lento — regulação publicitária e prática cartorial não se movem em quatro anos. Todos os efeitos de 1ª e 2ª ordem cabem dentro do horizonte.

Segundo, os prazos aqui são **estimativas de quando o efeito se torna observável em produto de mercado**, não de quando ele se completa. `e9` marcado em 2028 não quer dizer que em 2028 todo app é local-first; quer dizer que em 2028 é normal encontrar produtos comerciais em que offline não é aviso de erro.

Terceiro, as três raízes não são independentes, e a dependência tem direção. **D3 sem D1 não é soberania** — dado que sincroniza em texto claro entrega ao servidor tudo o que ele já tinha. **D1 sem D3** é possível e já existe (o mensageiro cifrado que não te dá o arquivo). **D2 é a mais independente das três** e, não por acaso, a que tem os prazos mais curtos: `e8` em 2027 é o único efeito que já está acontecendo enquanto este mapa é escrito, com o Pass-the-Passkey apresentado em agosto de 2026.

Quarto, o efeito com maior discrepância entre sinal e confiança é `e12` — sinal forte, confiança alta, e ainda assim o que mais contraria o enunciado do tema. Ele descreve o ecossistema local-first sendo absorvido pela nuvem em vez de a substituir. É o único efeito de 1ª ordem do mapa cuja evidência é um fato consumado e datado (11 de agosto de 2026), e não uma projeção.

Quinto, o que **não** está na roda por decisão explícita: não há nenhum efeito do tipo "as plataformas perdem o papel de intermediário". A terceira pergunta de 3ª ordem do enunciado do tema — se cada pessoa é dona da sua conta sem intermediário, o que acontece com as plataformas? — foi respondida pelo mapa de um jeito que a pergunta não previa: o intermediário não desaparece, **muda de lugar**. Sai da autenticação (`e7`) e reaparece na recuperação (`e5.1.1`) e no motor de sincronização (`e12`).

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — a revogação sem coordenação.** A peça mais obscura do Keyhive é a que decide se a coisa toda funciona: um CRDT de gestão de grupo com revogação que não exige coordenação, e uma resposta para "o que fazer com operações honestas que dependem causalmente de conteúdo descoberto como malicioso depois". Enquanto isso não tiver auditoria de segurança, todo produto que se anuncia como local-first **e** ponta-a-ponta está usando solução caseira. Se esta peça vier a público resolvida e auditada antes de 2029, D1 e D3 se juntam e o mapa inteiro acelera. Se não vier, os dois seguem como trilhas separadas até 2031.

**Sinal fraco 2 — o PGlite servindo agente, não pessoa.** O crescimento de 1 para 13 milhões de downloads semanais em doze meses não veio de gente querendo soberania: veio de desenvolvedor querendo banco embutido rápido, e o comprador foi uma empresa de nuvem que quer dar um Postgres a cada agente de IA. É o sinal mais contraintuitivo deste mapa: **a infraestrutura da soberania está sendo financiada pela demanda de autonomia das máquinas, não das pessoas.** Se o ferramental amadurecer por esse caminho, ele chega pronto — mas com defaults desenhados para agente em sandbox, não para pessoa com herança e divórcio.

**Sinal fraco 3 — o caminho brasileiro pelo sistema especialista.** A passkey entrou no Estado brasileiro pelo SIAFI, para perfis de consulta, como alternativa ao certificado digital — não pela conta gov.br do cidadão. Isso sugere um padrão de adoção que o discurso global não prevê: em países com infraestrutura de certificado digital estabelecida (ICP-Brasil, e-CPF), a passkey compete primeiro com o **certificado**, não com a senha. Vale observar se a conta gov.br adota passkey antes de 2029; se adotar, é o maior evento isolado de adoção de autenticação criptográfica da história do Brasil, e se não adotar, o país fica fora da curva descrita pela FIDO.

**Sinal fraco 4 — a telemetria que não pode ver.** Quando o servidor é cego, o time de produto perde a analítica de conteúdo e fica só com a de evento. Já existe vocabulário técnico para isso (privacidade diferencial, agregação), mas quase nenhum vocabulário de **prática**: como uma equipe decide o que construir sem olhar o que as pessoas escrevem. É um problema de método de trabalho disfarçado de problema de engenharia.

**Wildcard A — a obrigação legal de local-first ou E2E para dado sensível.** É o wildcard que o enunciado do tema sugere, e o mapa não o coloca como efeito porque a evidência de 2026 aponta na direção oposta: a disputa regulatória em curso (Reino Unido contra a Apple, CSA na União Europeia) é sobre **garantir acesso**, não sobre obrigar cegueira. Se alguma jurisdição relevante inverter isso — obrigar cifra no cliente para dado de saúde ou financeiro —, `e2.2` (nuvem vendendo cegueira como camada) deixa de ser efeito de 2ª ordem e vira mercado imediato.

**Wildcard B — o comprometimento em massa de um cofre sincronizado.** Se um gerenciador grande — de plataforma ou independente — tiver chaves privadas de passkeys extraídas em escala, a consequência não é voltar para a senha: é o fim da passkey **sincronizada** como default, e o retorno da credencial presa ao dispositivo, com todo o custo de recuperação que isso traz. A Unit 42 já demonstrou o caminho em laboratório em 2026. Este é o wildcard com maior razão entre impacto e improbabilidade no mapa.

**Wildcard C — a inversão do sentido de "local".** Se o assistente pessoal de IA virar a interface principal do software pessoal, "dado local" pode significar dado local **para o agente**, num sandbox na nuvem do fornecedor do agente, e não no aparelho da pessoa. Seria a captura semântica completa: o vocabulário da soberania aplicado à sua negação. O anúncio da Databricks, lido de perto, já usa "edge devices" e "agent sandboxes" na mesma frase.

**Wildcard D — a morte de um serviço grande com dados cifrados.** O argumento do "long now" do ensaio de 2019 nunca foi testado em escala. O primeiro encerramento de um serviço E2E com milhões de usuários em que as pessoas descobrem que o backup cifrado não abre sem a chave será mais didático, para o público geral, do que uma década de advocacy.

## 7. Contra o próprio mapa

**Erro provável 1 — subestimar a inércia do e-mail.** O mapa trata o fim do fallback por e-mail como processo em curso. É possível que ele simplesmente não aconteça: o e-mail é gratuito para o provedor de serviço, funciona, e o custo do seu fracasso é distribuído entre os usuários em vez de concentrado na empresa. Se em 2031 a caixa de e-mail continuar sendo a credencial-mestra universal, D2 inteira desanda, e os efeitos `e5`, `e5.1`, `e5.1.1`, `e6` e `e6.1` viram descrição de um nicho. A honestidade exige registrar que **o cenário mais provável para D2 é a coexistência indefinida**, como aconteceu com todas as tecnologias de entrada da história da computação.

**Erro provável 2 — confundir viabilidade técnica com adoção.** A criptografia no cliente é trivial há uma década e não foi adotada em app comum. O mapa argumenta que agora muda porque o custo jurídico e reputacional subiu. Esse argumento pode estar errado do mesmo jeito que esteve errado em 2018, em 2021 e em 2024. A cada vazamento grande, alguém escreve que agora vai mudar; não mudou. A diferença que aponto — decisões judiciais concretas, empresas retirando produto de um país inteiro — pode ser apenas o mesmo ruído com manchete melhor.

**Erro provável 3 — viés de fonte.** Boa parte da evidência sobre local-first vem de dentro do movimento local-first: Ink & Switch, Automerge, Local-First Conf. São fontes técnicas sérias e **partes interessadas**. O número de participação da conferência, em especial, é autodeclarado por um participante. Quando um movimento cresce de dentro, o crescimento é real e o significado é inflacionado. Contra isso, o mapa usa a Databricks — que não tem interesse nenhum em promover soberania do usuário — como testemunha hostil para o número do PGlite.

**Erro provável 4 — o viés que o enunciado carrega e o mapa pode ter herdado.** O texto do tema afirma que as três rupturas "desmontam o modelo em que a empresa é dona do seu dado". Esse é um enunciado com posição. A triagem derrubou uma das três (a passkey já é maduro) e a roda inverteu a conclusão da terceira pergunta (o intermediário muda de lugar, não some). Mas efeitos como `e10.1` — trocar de app fica barato, a retenção passa a depender de qualidade — confirmam confortavelmente a tese original e não têm evidência forte por trás. Ele ficou no mapa com confiança **baixa** por isso, e deve ser o primeiro a cair numa revisão.

**Erro provável 5 — otimismo de prazo no Keyhive.** O mapa trata a maturação do E2E sobre CRDT como plausível dentro do horizonte. Pesquisa de sistemas distribuídos com garantias criptográficas tem histórico de levar de oito a quinze anos do desenho publicado ao produto auditado. O aviso de "não use em produção" está lá desde março de 2025 e continua lá.

**Erro provável 6 — recorte geográfico.** Os números da FIDO cobrem dez países; nenhum é latino-americano. O mapa aplica ao mundo um dado colhido em Estados Unidos, Reino Unido, França, Alemanha, Austrália, Singapura, Japão, Coreia do Sul, China e Índia. A nota brasileira que consegui construir é institucional (SIAFI, gov.br) e não tem nenhum dado de comportamento de usuário. **Não sei a taxa de adoção de passkey no Brasil** e não encontrei fonte que soubesse.

## 8. O que a máquina errou

**Erro 1 — a passkey como disrupção-raiz, herdada do enunciado.** Na primeira passada, montei as três raízes copiando a estrutura do enunciado do tema: local-first, ponta-a-ponta, passkeys. A Fase 2 matou a terceira com o dado da própria FIDO — 75% já habilitaram, 49% usam regularmente, cerca de 5 bilhões em circulação. Pela regra de ouro, isso é maduro, e tecnologia madura entra em contexto, não em raiz. Precisei refazer a disrupção como **remoção do plano B** em vez de **chegada da passkey**. Se eu tivesse aceitado o enunciado, o mapa inteiro estaria mapeando um futuro que já é presente.

**Erro 2 — o gov.br sem senha para 170 milhões de brasileiros.** A busca devolveu, com alta confiança e em vários veículos brasileiros de fevereiro de 2026, que o aplicativo gov.br havia adotado passkey e dispensado senha e reconhecimento facial. Fui à fonte oficial. A página de Segurança da Conta do Governo Digital **não menciona passkey**: descreve CPF, senha e código do aplicativo. A página da Conta gov.br, que cita a Portaria SGD/MGI nº 11229 de dezembro de 2025, **também não menciona**. O que é verificável é o SIAFI, do Tesouro, com passkey para perfis de consulta desde novembro de 2024. A afirmação que eu ia usar teria sido o erro mais grave do documento, porque é o único dado brasileiro de escala e teria sustentado sozinho a seção do Brasil.

**Erro 3 — a votação do Chat Control de 9 de julho de 2026.** Os resultados de busca me deram um relato específico, numérico e coerente: 314 votos contra, 276 a favor, 17 abstenções, 361 necessários para bloquear, emendas que excluem o E2E aprovadas. É exatamente o formato de informação que a máquina inventa bem. Fui ao rastreador primário que acompanho (Patrick Breyer), e ele está atualizado até **junho de 2026**, descrevendo trilogo em curso com quinta e última negociação marcada para 29 de junho — sem menção à votação de julho. Não consegui confirmar em fonte primária. Registrei a divergência na seção 3 em vez de usar o número. Pode ser que a votação tenha ocorrido e o rastreador esteja desatualizado; não é isso que se verifica, é o contrário.

**Erro 4 — o anúncio que sumiu no redirecionamento.** Tentei o post oficial em `electric-sql.com`; recebi 301 para `electric.ax`; o destino devolveu 404. Por dois minutos, a conclusão razoável era que o anúncio não existia. Ele existe, e está no blog da Databricks. Lição operacional: cadeia de redirecionamento depois de mudança de marca produz um falso negativo que se parece com desmentido.

**Erro 5 — Beehive e Keyhive como dois projetos.** A busca inicial por "Beehive" devolveu uma página do Ink & Switch que voltou vazia, e material antigo que descreve o projeto sob esse nome. O projeto atual chama-se **Keyhive**; Beehive é o nome anterior, e o protocolo de sincronia associado é o **Beelay**. Um mapa desatento citaria dois projetos de E2E para CRDT onde existe um, e concluiria que o campo está mais povoado do que está.

**Erro 6 — o número que não estava no texto.** Um resumo de busca atribuiu ao anúncio da Microsoft a informação de que "quase um milhão de passkeys são criadas por dia". Abri o artigo do BleepingComputer que a busca citava: o número **não está lá**. Ele circula, provavelmente é verdadeiro e provavelmente vem de outro lugar. Não entrou no documento. É o padrão clássico descrito no meu DUVIDAS.md: número redondo e plausível, sem fonte específica quando se pergunta qual.

**Padrão comum aos seis.** Cinco dos seis erros são de **procedência**, não de raciocínio: o modelo conecta coisas que aparecem juntas no texto (gov.br + passkey, Microsoft + número de passkeys, Chat Control + votação com placar) e apresenta a conexão com a mesma confiança com que apresenta o que leu. O único erro de raciocínio é o primeiro — e esse veio de aceitar o enunciado da tarefa como se fosse evidência.

## 9. Três cenários para 2031

### 9.1. Provável

A senha não acabou. O que acabou foi a senha como **primeira** tela: em 2031, a maioria dos serviços grandes abre com passkey e guarda a senha no rodapé, junto com o link de recuperação que continua terminando na caixa de e-mail. A FIDO comemorou a marca dos 10 bilhões de credenciais e os relatórios corporativos continuaram mostrando que a maioria das organizações não removeu o método phishável — a distância entre 82% que queriam e os que conseguiram encolheu, mas não fechou. O deslocamento do ataque, que já era visível em 2026, se consumou: phishing de credencial virou coisa de sistema legado, e o esforço migrou para o fluxo de inscrição, para o roubo de asserção em máquina comprometida e para o atendimento humano de recuperação — que virou o alvo mais caro e mais atacado do setor.

Do lado do dado, o local-first venceu como **arquitetura de desenvolvimento** e perdeu como movimento político. Os motores de sincronização foram absorvidos pelas grandes plataformas de dado entre 2026 e 2029, e em 2031 é normal que um app grande seja local-first por dentro — offline funciona, a interface é instantânea, não há spinner — e continue sendo um app em que a empresa lê tudo. O termo "local-first" apareceu em material de marketing de fornecedores de nuvem com o sentido de latência, não de propriedade. Quem queria soberania passou a fazer a pergunta técnica em vez de ler o rótulo: quem tem a chave.

A cegueira do servidor avançou em dois nichos e parou. Saúde e finanças, empurrados por regulação e por seguro contra incidente, adotaram cifra no cliente em produtos novos. O resto do software pessoal não adotou, porque o produto piora e ninguém sabe vender "este app encontra menos coisas do que o concorrente". A peça de pesquisa que juntaria local-first e ponta-a-ponta saiu do pré-alpha em 2029, foi auditada em 2030, e está em três produtos.

A herança digital virou o problema visível que este mapa previu, mas menor: as plataformas grandes adicionaram designação de acesso póstumo entre 2028 e 2030, o Brasil ainda não tem regra clara, e quem morre sem ter configurado nada deixa contas efetivamente lacradas. Virou assunto de coluna de jornal, não de lei.

### 9.2. Desejável

O que mudou o rumo não foi a criptografia: foi a recuperação. Entre 2027 e 2029, o setor aceitou que "passwordless" com recuperação frágil é cosmético, e a conformidade passou a auditar **o caminho de exceção** com o mesmo rigor com que auditava o de autenticação. Disso nasceu a única invenção de interface realmente nova do período: a **recuperação distribuída legível** — designar três pessoas, ou duas pessoas e um cofre físico, num fluxo que uma pessoa de 70 anos completa sozinha em quatro minutos. Ela apareceu primeiro em produto de consumo em 2029 e virou padrão de sistema operacional em 2031, o que permitiu a serviços removerem de fato a senha sem abandonar ninguém.

O E2E sobre CRDT foi auditado e publicado como padrão aberto, e a consequência interessante não foi a privacidade — foi a **modularidade**. Com dado pessoal cifrado num formato que muitos programas abrem, apareceu o ecossistema de aplicativos pequenos que este mapa registrou como `e10.1.1`: em vez de uma suíte que faz tudo mal, cinco ferramentas especializadas sobre a mesma base. Foi a realização mais próxima do ideal de 2019 sobre propriedade que se viu, e ela veio pelo formato, não pela ideologia.

A fronteira do dado virou componente padrão de interface, com desenho reconhecível e comportamento previsível — o equivalente, para privacidade, do que o cadeado do HTTPS foi para transporte. Não porque as empresas quiseram, mas porque a IA embarcada forçou: quando todo app passou a ter um modo "neste aparelho" e um modo "no servidor", alguém teve que desenhar a chave que troca entre os dois, e essa peça acabou virando o lugar onde o usuário entende o que está acontecendo com o que é dele.

No Brasil, a conta gov.br adotou chave de acesso em 2029, com recuperação pelo aplicativo e por atendimento presencial nos Correios — e o efeito colateral foi maior que o efeito principal: a passkey virou, para dezenas de milhões de pessoas, a primeira experiência de credencial criptográfica, e os bancos seguiram atrás em dois anos.

### 9.3. Indesejável

Em 2029 um gerenciador grande teve chaves privadas de passkeys sincronizadas extraídas em escala — o caminho que a Unit 42 havia demonstrado em laboratório três anos antes. A resposta do setor não foi melhorar a sincronia: foi recuar. Passkey sincronizada virou suspeita, credencial presa ao dispositivo voltou a ser recomendação de segurança, e o custo disso caiu inteiro sobre quem perde aparelho, quem troca de telefone e quem tem um aparelho só. A taxa de conta irrecuperável subiu o suficiente para virar estatística de atendimento, e a resposta a ela foi a pior possível: o retorno triunfal da verificação de identidade por documento e selfie, agora comprada de um punhado de fornecedores. O intermediário que a passkey havia tirado da autenticação voltou, mais concentrado, com o rosto e o documento de todo mundo.

Em paralelo, "local-first" completou a captura semântica. Em 2031 o termo significa, no uso corrente da indústria, que o dado vive perto do **agente** — num sandbox na nuvem do fornecedor do assistente, com sincronia contínua para o lakehouse dele. É literalmente mais centralizado do que o modelo que o termo foi criado para criticar em 2019, e usa o mesmo vocabulário. O ensaio original virou citação de abertura de apresentação comercial.

E a cegueira do servidor, em vez de proteger, virou ponto de captura no sistema operacional. A disputa regulatória que em 2026 ainda era sobre o servidor terminou onde `e2.1.1` previu: como a plataforma não podia ler o conteúdo depois de cifrado, a obrigação recaiu sobre o aparelho, antes da cifra. O resultado é que o E2E continua tecnicamente intacto e não protege mais nada relevante, porque a inspeção acontece um passo antes — e a escolha de sistema operacional virou escolha de regime de vigilância, feita por quem compra o celular mais barato disponível.

## 10. O experimento

**O teste da porta dos fundos.** O experimento tem duas metades que se respondem: uma de auditoria, que qualquer pessoa da turma roda sem escrever código, e uma de construção, que mede na pele o que a auditoria só observa de fora.

**Metade 1 — auditar onde termina a exceção.** Escolher 20 serviços que a turma realmente usa (dois bancos, um app de transporte, duas redes sociais, o gov.br, o e-mail, a universidade, um serviço de streaming, uma loja, etc.) e, para cada um, responder cinco perguntas com **evidência de tela**, não de memória:

1. **Dá para apagar a senha?** Existe, nas configurações, ação que remove o segredo memorizável — ou a passkey foi adicionada *ao lado* dele?
2. **Onde termina "esqueci"?** Seguir o fluxo de recuperação até o fim e anotar o último elo: caixa de e-mail, SMS, atendimento humano, documento, agência física, ou nada.
3. **A credencial sobrevive à perda do aparelho?** A passkey é sincronizada pela plataforma ou está presa ao dispositivo? O serviço avisa isso em algum lugar?
4. **A credencial sai?** O gerenciador em uso exporta para outro cofre por transferência cifrada (CXF/CXP) ou ainda só por CSV em texto claro?
5. **O dado sai em formato que outro programa abre?** Não "existe botão de exportar", mas: o arquivo exportado abre em outro software sem trabalho de conversão?

A saída é uma matriz 20 × 5 da própria sala. A hipótese a testar é dura e falseável: **a coluna 2 termina na caixa de e-mail na maioria dos casos, inclusive nos serviços que anunciam login sem senha.** Se a hipótese cair, a disrupção 4.2 deste mapa cai junto — e é exatamente para isso que serve o experimento.

**Metade 2 — construir um servidor cego e descobrir o que quebra.** Uma página só, sem framework: campo de texto, cifra no navegador com WebCrypto usando chave derivada de uma frase, e envio dos bytes cifrados para o relay mais burro possível (um arquivo estático, um bucket, um endpoint que só guarda blob). Depois, **implementar busca** sobre o que foi guardado. É aqui que está a aula: não dá, do lado do servidor, e do lado do cliente é preciso baixar tudo, decifrar tudo e indexar tudo — e então dá para medir. Quanto tempo leva a primeira abertura com 10, 100 e 1.000 anotações? Quanta memória o índice ocupa? A partir de quantos itens o celular mais fraco da sala desiste?

E então a segunda medição, que é a que ninguém faz: **abrir num segundo aparelho e editar nos dois ao mesmo tempo, offline.** Sem CRDT, uma das versões morre. Com uma biblioteca de CRDT, as duas convergem — e aparece na tela um resultado que ninguém desenhou e que precisa ser desenhado. Esse é o momento em que `e9.1` e `e9.2` deste mapa deixam de ser previsão e viram um problema de interface na frente do aluno.

**Por que este experimento e não outro.** Porque as duas metades atacam os dois pontos em que este mapa é mais frágil e mais verificável: a metade 1 testa empiricamente a afirmação central da seção 4.2 (que o plano B não foi removido, só escondido), e a metade 2 produz, em uma tarde, os dois números que a seção 5 estima sem medir — o teto do índice no cliente e o custo de convergência. Ambos rodam com navegador, e o custo é zero.

## 11. Fontes

1. `https://www.descope.com/blog/post/2026-fido-report` — sustenta, de forma independente do emissor, os números centrais do relatório da FIDO Alliance de 2026: 90% de conhecimento (contra 75% em 2025), 75% habilitaram passkey em pelo menos uma conta, 49% habilitam "whenever possible" ou "most of the time", 68% das organizações implantando ou pilotando, 30% com passkey como método principal de login de funcionário, 57% ainda em senha ou mecanismo phishável, 82% com passwordless como objetivo contra 28% que chegaram lá, 33% de consumidores com comprometimento no ano, 47% que abandonam compra por senha esquecida, e 89% de organizações confiantes em restaurar acesso após perda de passkey. — **Confiabilidade: média-alta para os números, com viés comercial.** É análise secundária feita por fornecedor de autenticação, e por isso mesmo serve de conferência cruzada: repete os números do relatório sem ser quem os coletou. **O comunicado primário da FIDO Alliance (em fidoalliance.org, aberto diretamente nesta rodada — é dele que vêm os 5 bilhões de passkeys, a metodologia da Sapio Research e as margens de erro) devolve 403 a cliente automatizado**; o endereço completo está na seção 12.4. Vale a ressalva de sempre: a FIDO Alliance existe para promover a tecnologia que mede, e usei os números dela contra a tese que ela promove — para classificar a passkey como madura e removê-la das raízes.

2. `https://support.apple.com/en-us/102631` — sustenta que a passkey não é herdável por desenho: o Legacy Contact acessa "photos, messages, notes, files, device backups, and more" e **não** acessa "data stored in your iCloud Keychain (payment information, passwords, and passkeys)". — **Confiabilidade: máxima.** Documentação normativa do próprio fabricante sobre o próprio produto.

3. `https://www.inkandswitch.com/keyhive/notebook/` — sustenta o estado do E2E sobre CRDT: as três camadas do Keyhive, a revogação sem coordenação, o protocolo Beelay, o código pré-alpha desde março de 2025 com aviso de "DO NOT use this release in production applications", APIs instáveis, ausência de auditoria, e a formalização de segurança concluída em julho de 2026. — **Confiabilidade: alta e autocrítica.** Caderno de laboratório aberto, que declara as próprias limitações — o tipo de fonte que raramente exagera o próprio estágio.

4. `https://www.inkandswitch.com/essay/local-first/` — sustenta a definição e os sete ideais do local-first, a autoria (Martin Kleppmann, Adam Wiggins, Peter van Hardenberg, Mark McGranaghan) e a data (abril de 2019; Onward! em outubro de 2019). — **Confiabilidade: máxima como fonte do conceito.** É o texto que cunhou o termo; é fonte primária para o que o termo significa, não para o estado do mercado.

5. `https://www.databricks.com/blog/electric-joins-databricks-bring-wasm-postgres-ai-agent-sandboxes` — sustenta a aquisição da Electric pela Databricks em 11 de agosto de 2026, o crescimento do PGlite de 1 para 13 milhões de downloads semanais em doze meses, e o propósito declarado (Postgres para sandbox de agente, sincronizando de volta para o Lakebase). — **Confiabilidade: alta para o fato e para o número; é anúncio corporativo.** Vale como **testemunha hostil**: quem publica não tem interesse em promover soberania do usuário, o que torna o número de adoção mais confiável, e o enquadramento ("agent sandboxes") mais revelador.

6. `https://thehackernews.com/2026/08/new-passkey-attacks-can-recover-synced.html` — sustenta o Pass-the-Passkey (Michael Grafnetter, SpecterOps, Black Hat USA, 5 de agosto de 2026), a CVE-2026-34348 e a correção de 14 de julho de 2026, os ataques da Unit 42 contra passkeys sincronizadas no Google Password Manager, a pesquisa de Dirk-jan Mollema sobre Windows Hello, e a frase "None cracked the math". — **Confiabilidade: média-alta.** Veículo especializado, secundário em relação à apresentação original, mas com CVE e nomes verificáveis; os fatos duros (número de CVE, data do patch) são checáveis fora dele.

7. `https://www.patrick-breyer.de/en/posts/chat-control/` — sustenta o estado do regulamento CSA na União Europeia: trilogo em curso, mandato do Parlamento excluindo serviços E2E ("End-to-end encrypted messenger services are excluded from the scope"), mandato do Conselho não excluindo, proposta original com varredura no cliente, remoção da varredura obrigatória do rascunho dos governos no fim de 2025. — **Confiabilidade: média, com viés explícito e útil.** Rastreador mantido por um ativista e ex-eurodeputado militantemente contrário à proposta; é a fonte mais completa e datada disponível publicamente, e é parcial. **Atenção: atualizada até junho de 2026** — é por causa dessa lacuna que não uso a votação de julho citada em fontes secundárias (ver seção 8).

8. `https://www.macrumors.com/2026/08/03/apple-legal-challenge-against-uk-demand/` — sustenta que a Apple entrou com nova reclamação no Investigatory Powers Tribunal em agosto de 2026, que o governo britânico recuou da exigência mundial após atrito com Washington e emitiu novo TCN limitado ao Reino Unido, e que tais notificações podem forçar acesso "even when that data is encrypted". — **Confiabilidade: média.** Veículo de tecnologia secundário reportando sobre documento judicial que não é público; a estrutura dos fatos é consistente com múltiplos veículos, os detalhes não são verificáveis na origem.

9. `https://www.gov.br/tesouronacional/pt-br/siafi/como-acessar/acesso_por_passkey` — sustenta o único caso verificado de passkey no governo federal brasileiro: acesso ao SIAFI por Passkey, restrito a perfis de consulta nomeados, implantado nas mudanças de novembro de 2024, como alternativa ao certificado digital. — **Confiabilidade: máxima.** Documentação operacional oficial do Tesouro Nacional.

10. `https://www.gov.br/governodigital/pt-br/identidade/conta-gov-br/seguranca-da-conta` — sustenta, **por ausência**, que a conta gov.br do cidadão não oferece passkey: a página descreve CPF, senha e código do aplicativo, e trata de verificação em duas etapas. — **Confiabilidade: alta para o que afirma; média para a inferência.** Ausência em página oficial é evidência fraca em geral, mas forte aqui: é exatamente a página onde o recurso estaria documentado se existisse. Foi o que me fez descartar a manchete da imprensa popular (seção 8).

11. `https://www.gov.br/governodigital/pt-br/identidade/conta-gov-br` — sustenta os níveis bronze, prata e ouro da conta gov.br, a referência à Portaria SGD/MGI nº 11229 de 12 de dezembro de 2025, e a segunda ausência de menção a passkey. — **Confiabilidade: alta.** Mesma ressalva da anterior sobre argumento por ausência.

12. `https://www.localfirstconf.com/` — sustenta as datas (12 a 14 de julho de 2026), o local (Berlim) e o tema declarado ("user empowerment in an age of fluid software"). — **Confiabilidade: alta para o factual, nula para escala.** O site é fonte primária do evento; o dado de crescimento de duas a três vezes que aparece na seção 3 vem de relato de participante e está marcado como tal na seção 7.

13. `https://securityaffairs.com/177339/security/microsoft-sets-all-new-accounts-passwordless-by-default.html` — sustenta o anúncio da Microsoft, com as duas frases que importam: "New users will have several passwordless options for signing into their account and they'll never need to enroll a password" e "Existing users can visit their account settings to delete their password". — **Confiabilidade: alta para as citações, média para a data.** Veículo especializado citando o anúncio diretamente; registra **1º de maio de 2025**, enquanto o BleepingComputer (também aberto nesta rodada, e também bloqueado a cliente automatizado — ver 12.4) registra **2 de maio de 2025**. Divergência de um dia, irrelevante para o argumento e registrada por honestidade. Nenhum dos dois sustenta o "quase um milhão de passkeys por dia" que circula atribuído ao anúncio (seção 8).

14. `https://automerge.org/` — sustenta a descrição atual do Automerge como motor de sincronização local-first, o armazenamento colunar comprimido e a indiferença ao transporte ("if you can transfer bytes, you can sync documents"), além da ausência de menção a E2E na página inicial — coerente com o fato de que essa peça está no Keyhive e ainda é pesquisa. — **Confiabilidade: alta para o que a biblioteca é e faz; é material do próprio projeto.**

**Fontes consultadas e NÃO usadas, com motivo:** veículos brasileiros de fevereiro de 2026 sobre passkey no gov.br (contraditos pelas fontes 10 e 11); blogs secundários sobre a votação do Chat Control de julho de 2026 (não confirmados pela fonte 7); levantamentos de mercado sobre tamanho do setor de self-hosting em 2034 (projeção sem metodologia publicada); contagens divergentes de inscritos do r/selfhosted (usadas apenas como faixa, com a divergência declarada).

## 12. Anexo — o levantamento bruto

### 12.1. Fase 1 — entrevista de enquadramento

A skill exige entrevista antes de qualquer produção. Esta rodada não teve interlocutor humano disponível; as respostas foram fornecidas junto com a tarefa, e estão registradas aqui literalmente, como contrato:

| # | Pergunta | Resposta |
|---|---|---|
| 1 | Tema exato | "Soberania de dados: local-first, ponta-a-ponta e o fim da senha" (tema 17 de 19 da disciplina) |
| 2 | Recorte | Tecnologia e infraestrutura, com braço regulatório |
| 3 | Horizonte | 2031 |
| 4 | Para quem | Quem projeta mídia e interação |
| 5 | Escopo geográfico | Global, com nota sobre o Brasil |
| 6 | Já descartado | O que já é comum em produto de massa (a régua da disciplina). Nenhuma outra exclusão |
| 7 | Viés desejado | Neutro |
| 8 | O que já se sabe / o que mudaria de ideia | Nenhuma disrupção suspeita a priori. Mudaria de ideia com evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia não rompe nada |

**Consequência direta da resposta 8 sobre este mapa:** a condição declarada ali — "evidência de que a adoção já passou da maioria inicial" — foi **satisfeita durante a Fase 2, para uma das três tecnologias do próprio enunciado**. Com 75% de habilitação e 49% de uso regular, a passkey passou. O mapa mudou de ideia conforme o contrato.

### 12.2. Fase 2 — triagem completa, incluindo o que não chegou à seção 4

Classificações feitas e não aproveitadas na tabela resumida da seção 4:

- **Signal Protocol / Double Ratchet** — maduro (2013, padrão de fato). Contexto.
- **Zero-knowledge proof para identidade** — emergente, mas pertence ao tema 2 (identidade de agentes) e a credenciais verificáveis, fora do recorte. Descartado por fronteira.
- **Argon2, @simplewebauthn, webauthn-p256, fido2-lib, Rodauth, better-auth, iron-session, jose, otplib** (entrega de desenvolvimento citada no enunciado) — **ferramental maduro de implementação**, não tecnologia disruptiva. São a evidência de que a barreira técnica caiu, e é assim que aparecem no mapa (razão (a) do "por que agora" em 4.1 e 4.2). Nenhum entra como raiz.
- **budgero, kostos, fintrack, Atlas, happy-balance, finvo, BeeCount, rotki, mailquill** (varredura de inspiração do enunciado) — **instâncias**, não tecnologias. Evidência de que a arquitetura já é escolhida por projetos pequenos; sem dado de adoção, não sustentam afirmação sobre mercado. Não entraram no corpo do documento por falta de fonte verificável sobre uso real.
- **TaxHacker, accountant24, wilson** (IA local sobre dado financeiro) — é o cruzamento com o tema 16 e entra no mapa como `e4` e seus filhos, não como raiz própria: o que roda localmente ali é o **modelo**, que é objeto do tema 16.
- **Termly (E2E para controlar o agente)** — emergente, sem fonte verificável encontrada. Descartado por falta de evidência.
- **Nextcloud, Proton, Tresorit, Cryptomator** — maduros no nicho de armazenamento cifrado. Contexto.

### 12.3. Fase 5 — rodada adversarial, item a item

Quatro testes aplicados a todos os efeitos gerados. Resultado consolidado: **4 descartados, 1 reconectado, 3 reescritos, 4 mantidos com ressalva.**

**Descartados (4):**

| Efeito gerado | Teste que reprovou | Motivo |
|---|---|---|
| "As plataformas centralizadas perdem o papel de intermediário e a web se descentraliza" | Causa solta + vacuidade | Não nomeia mecanismo. É o "muda a sociedade" do ESTUDO.md, com roupa técnica. A pergunta que o originou foi respondida de outro jeito (o intermediário muda de lugar: `e5.1.1` e `e12`) |
| "A publicidade baseada em perfil acaba" | Adoção acelerada | Nenhum precedente histórico de modelo de receita dominante desaparecer em cinco anos por mudança de arquitetura. Virou `e3.1.1`, muito mais fraco e além do horizonte |
| "O self-hosting vira prática comum de consumo" | Adoção acelerada | 725 a 790 mil inscritos numa comunidade técnica é irrelevante para afirmação sobre massa. Rebaixado a contexto na seção 3 |
| "A senha desaparece até 2031" | Extrapolação linear + precedente | O mesmo erro do QWERTY documentado no meu DUVIDAS.md. Nenhuma tecnologia de entrada ou de autenticação desapareceu por substituição rápida. Substituído pelo reconhecimento explícito da coexistência (cenário 9.1) |

**Reconectado (1):**

- "Com E2E, o vazamento de dado pessoal despenca no Brasil" — **causa solta**. Removida a raiz D1, o efeito continua acontecendo por outro motivo, e o dado da ANPD explica por quê: os incidentes mais reportados são roubo de credencial e engenharia social, seguidos de ransomware. Isso é problema de **D2** (autenticação), não de D1 (legibilidade do servidor). Reconectado — e depois absorvido por `e8`, que já descreve o deslocamento do ataque.

**Reescritos (3):**

| Versão original | Versão final | Por quê |
|---|---|---|
| "Passkeys eliminam o phishing" | `e8` — "O ataque se desloca do phishing da senha para o roubo da asserção assinada e para os fluxos de inscrição e de recuperação" | Refutado por evidência direta de 2026 (Pass-the-Passkey, mais de 20 técnicas, CVE-2026-34348) |
| "O modelo de negócio baseado em dado acaba" | `e3` — "é empurrado para assinatura, e o preço do software pessoal sobe" | O original era adoção acelerada e pensamento desejoso; o reescrito nomeia o mecanismo e o custo para o usuário |
| "Local-first substitui o software em nuvem" | `e12` + `e12.1` — o ecossistema é absorvido pela nuvem e o termo se bifurca | Invertido pela evidência de 11 de agosto de 2026. Foi a maior mudança de direção do mapa |

**Mantidos com ressalva (4):**

| Efeito | Teste que acendeu a luz | Por que ficou |
|---|---|---|
| `e10.1` — trocar de app fica barato, retenção passa a depender de qualidade | **Viés do usuário** | Confirma confortavelmente a tese do enunciado e tem a evidência mais fraca do mapa. Ficou com confiança **baixa** e está nomeado na seção 7 como o primeiro a cair |
| `e9.1` — o spinner sai, entra o indicador de convergência | Extrapolação linear | É quase mecânico a partir de `e9`, o que o torna forte e pouco informativo. Ficou por ser o efeito mais diretamente acionável para o público deste mapa |
| `e5.2` — recuperação social em produto de consumo | Adoção acelerada | Tentativas anteriores no mundo cripto fracassaram em usabilidade. Ficou com confiança **baixa** |
| `e2.2` — nuvem vendendo cegueira como camada contratada | Causa solta | Poderia derivar só de exigência de residência de dado, sem nenhum E2E. Ficou porque a variante específica descrita (chave do cliente, servidor que só guarda bytes) exige a arquitetura de D1 |

**A pergunta final da Fase 5** — "o usuário quer rodar novamente alguma disrupção?" — não teve interlocutor. Resposta assumida e declarada: **não**, com uma exceção registrada. A disrupção 4.3 foi de fato re-derivada uma vez, depois que a evidência da aquisição da Electric apareceu e inverteu o sentido de `e12`; a primeira versão da árvore de D3 terminava em descentralização e a segunda termina em consolidação.

### 12.4. Buscas que falharam ou não renderam

- `electric-sql.com/blog/2026/08/11/...` → 301 para `electric.ax` → **404**. O anúncio foi encontrado no blog da Databricks.
- `inkandswitch.com/beehive/notebook/` → página retornou **vazia**. O conteúdo está em `inkandswitch.com/keyhive/notebook/`.
- Busca por página oficial do gov.br anunciando passkey na conta do cidadão → **nada**. As duas páginas oficiais encontradas descrevem senha e verificação em duas etapas.
- Busca por taxa de adoção de passkey **no Brasil** → **nada**. Nenhum dado de comportamento de usuário brasileiro foi localizado. Declarado como lacuna na seção 7.
- Busca por análise do impacto do E2E sobre **modelo de negócio** (não sobre funcionalidade) → só material comercial de fornecedores de produto cifrado. A afirmação de `e3` é derivada, não documentada — daí a confiança **media** num efeito de 1ª ordem, exceção no mapa.
- Busca por confirmação primária da votação do Chat Control de 9 de julho de 2026 → **não confirmada** (seção 8).
- **Duas páginas foram abertas e lidas nesta rodada, mas devolvem HTTP 403 a cliente automatizado** (proteção antirrobô), o que as inviabiliza como link verificável na seção 11. São elas: `https://fidoalliance.org/fido-alliance-reports-accelerating-global-passkey-adoption-on-world-passkey-day-2026/` — comunicado primário da FIDO Alliance de 7 de maio de 2026, origem dos 5 bilhões de passkeys em uso e da metodologia (Sapio Research, abril de 2026, 11.000 consumidores em dez países com margem de ±0,9%, e 1.400 decisores em organizações de 500+ funcionários com margem de ±2,6%) — e `https://www.bleepingcomputer.com/news/microsoft/microsoft-makes-all-new-accounts-passwordless-by-default/`, sobre o anúncio da Microsoft. Ambas foram substituídas na seção 11 por fontes que confirmam os mesmos números e respondem a requisição comum. **Nenhuma afirmação deste documento depende exclusivamente das duas**, com uma exceção declarada: o número de **5 bilhões de passkeys em uso** aparece só na primeira.

### 12.5. Contagens declaradas

- Disrupções-raiz: **3** (de 4 candidatas; a quarta — "a passkey como credencial" — foi descartada pela triagem de maturidade)
- Efeitos de 1ª ordem: **12** (4 por disrupção; o limite da skill é 5)
- Efeitos de 2ª ordem: **17**
- Efeitos de 3ª ordem: **11**
- Ramos com profundidade 3: **11** (mínimo exigido pela skill: 3)
- Efeitos com prazo além do horizonte: **2**, ambos de 3ª ordem, declarados na prosa da seção 5
- Efeitos descartados na Fase 5: **4**; reconectados: **1**; reescritos: **3**; mantidos com ressalva: **4**
- Fontes abertas e verificadas: **14**. Fontes descartadas por contradição ou falta de metodologia: **4 grupos**, listados ao fim da seção 11
