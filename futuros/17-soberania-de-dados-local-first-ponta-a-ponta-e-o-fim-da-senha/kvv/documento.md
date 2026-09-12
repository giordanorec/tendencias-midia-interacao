---
tema: "Soberania de dados: local-first, ponta-a-ponta e o fim da senha"
slug: soberania-de-dados-local-first-ponta-a-ponta-e-o-fim-da-senha
autor_login: kvv
zona_de_interesse: Pessoas e dados
data: 2026-09-15
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 18
tecnologias_citadas: [CRDT, Automerge 3.0, Beelay, Keyhive, BeeKEM, passkeys, WebAuthn/FIDO2, CXP/CXF, PGlite, Postgres em WASM, sync engines, criptografia ponta-a-ponta com chaves causais, EUDI Wallet, credenciais verificáveis, enclaves atestados (Private AI Compute, Private Cloud Compute), criptografia pós-quântica (ML-KEM), recuperação social de chaves]
fontes: 19
confianca: media
experimento: A turma monta um acervo compartilhado cujo servidor é cego e depois tenta resolver perda de aparelho, expulsão de participante e herança — medindo em quanto tempo reinventa um intermediário.
skill_usada: futurizacao-kvv
publico_ok: false
---

## Seção 1 — Resumo

Este mapa trata a soberania de dados não como conjunto de recursos de privacidade, mas como troca de arquitetura: o dado deixa de morar no servidor, o servidor deixa de conseguir ler o que guarda, e a conta deixa de ser um registro no banco de dados de um terceiro. Das três rupturas anunciadas pelo tema, uma já não é ruptura: em maio de 2026 a FIDO Alliance reporta cinco bilhões de passkeys em uso e 75% das pessoas com pelo menos uma habilitada — é maioria, e o dono da conta continua sendo a plataforma. Seguem em aberto o servidor cego como padrão de aplicativo pessoal, a autorização criptográfica sem intermediário e a inversão pela qual a computação vai ao dado. Nenhuma está resolvida: a peça técnica central é pré-alfa desde março de 2025, e em agosto de 2026 o principal fornecedor de sincronização local-first foi comprado por uma empresa de dados para IA e desligou sua nuvem. Horizonte 2031, público de quem projeta mídia e interação, e a pergunta que organiza o documento é o que um produto passa a não poder fazer quando o servidor não pode ler.

## Seção 2 — O tema

Soberania de dados, neste recorte, é uma afirmação sobre **onde está a fonte da verdade** e **quem detém a chave**. O ensaio que nomeou o campo — *Local-first software: you own your data, in spite of the cloud*, de Martin Kleppmann, Adam Wiggins, Peter van Hardenberg e Mark McGranaghan, publicado pelo Ink & Switch em abril de 2019 — enuncia sete ideais, entre os quais "a rede é opcional", "o longo agora", "segurança e privacidade por padrão" e "você retém propriedade e controle definitivos". O ensaio é explícito em dizer que nenhuma tecnologia existente satisfazia os sete: aplicativos web falham em offline, longevidade e controle; sincronizadores de arquivo falham em colaboração em tempo real. O tema, portanto, nasce como diagnóstico de uma lacuna, não como descrição de um produto.

Os pontos de contato com mídia e interação são três, e nenhum é periférico. **Primeiro, a latência e o estado.** Um aplicativo cuja verdade está no aparelho não tem carregamento: a interação deixa de ser pedido-resposta e passa a ser edição local com reconciliação posterior, o que muda o vocabulário de feedback — não há mais "salvando", há convergência. **Segundo, a colaboração.** Se dois aparelhos editam o mesmo documento sem servidor árbitro, o conflito deixa de ser erro a ser evitado e passa a ser estado a ser representado na interface; é problema de design, não de banco de dados. **Terceiro, e o mais desconfortável para quem projeta produto: a cegueira do servidor retira substrato de funções que hoje se consideram parte do produto** — busca global, recomendação, moderação, telemetria, personalização, suporte que "olha a conta do cliente". Projetar sobre servidor cego é projetar sabendo que certas telas não podem existir.

Por que isto exige mapa prospectivo e não levantamento de estado da arte. Um levantamento documentaria o que já funciona — e o que já funciona é, em boa medida, maduro: mensageria ponta-a-ponta por padrão, cofres de senha sincronizados, autenticação por biometria do aparelho, contêiner para auto-hospedar. Um levantamento diria que a soberania de dados "já existe", e estaria errado pelo motivo mais banal: existe como recurso, não como arquitetura. A pergunta prospectiva é outra e não se responde com inventário: **o que acontece com o desenho de interação, com o modelo de receita e com a governança quando a cegueira do servidor deixa de ser exceção de nicho e passa a ser pressuposto de plataforma?** Essa pergunta tem cronologia incerta, depende de peças que ainda não existem em produção e de decisões jurídicas em curso — três das quais estavam pendentes no momento da redação. É o desenho típico de um mapa de futuro: não há resposta a consultar, há trajetórias a mapear e falsear.

## Seção 3 — Onde isso está hoje

**A passkey venceu como método de login — e é exatamente por isso que não é mais a fronteira.** O relatório da FIDO Alliance divulgado em 7 de maio de 2026 estima cinco bilhões de passkeys em uso no mundo; no levantamento com 11 mil consumidores em dez países, 90% conhecem a tecnologia, 75% habilitaram pelo menos uma e 49% usam quando disponível. Entre 1.400 tomadores de decisão corporativos, 68% implantaram ou estão implantando passkeys para acesso de funcionários, mas apenas 28% chegaram a operar sem senha de fato, e 57% ainda dependem de métodos suscetíveis a phishing no login primário. O relatório também registra o benefício operacional concreto: 35% relatam menos tíquetes de redefinição de senha. Duas ausências dizem mais que os números: o documento não apresenta solução para perda de aparelho, recuperação e portabilidade de conta — e 24% das organizações que não migraram dizem estar esperando "amadurecimento de tecnologia e padrões". Ou seja: a criptografia do login está resolvida; a **titularidade** da conta, não. A passkey substituiu a senha sem mexer em quem é dono do registro.

**O que funciona no lado local-first é a camada de dados, e ela amadureceu rápido e recentemente.** O Automerge 3.0, lançado em julho de 2025, reescreveu a biblioteca para operar sobre a representação comprimida em tempo de execução: o consumo de memória caiu mais de dez vezes — o exemplo do próprio anúncio é *Moby Dick* passando de 700 MB na versão 2 para 1,3 MB na versão 3, com um documento cujo tempo de carga caiu de 17 horas para 9 segundos. Isso importa porque o CRDT deixou de ser luxo de protótipo. Em 1º de fevereiro de 2026 o FOSDEM dedicou uma trilha inteira ao assunto — "Local-First, sync engines, CRDTs", 22 sessões, com a frase de abertura "you own your data, in spite of the cloud" — reunindo Yjs, Automerge, ElectricSQL, Jazz, NextGraph, Willow e Seed Hypermedia. O campo tem comunidade, ferramentas e vocabulário próprios.

**O que falha é a camada de autorização e a economia.** O Keyhive, projeto do Ink & Switch para controle de acesso local-first, é o candidato sério a resolver o problema que nenhum CRDT resolve: quem pode ler e escrever, como se revoga acesso sem coordenação central, e como um servidor sincroniza o que não pode decifrar. Ele traz um CRDT de gestão de grupos com revogação sem coordenação, o BeeKEM — acordo de chave de grupo contínuo tolerante a divergência concorrente — e o Beelay, camada de sincronização de conteúdo cifrado que o servidor não decifra. O código é **pré-alfa desde março de 2025, com aviso explícito contra uso em produção**, e a própria documentação lista em aberto o comportamento da revogação sob partição, a tensão entre sigilo futuro e tolerância à concorrência, o desempenho quando o servidor não vê texto claro e ataques de bifurcação cruzada. Do lado econômico, o sinal é mais duro: em 11 de agosto de 2026 a Electric — criadora do PGlite, um Postgres completo em WebAssembly rodando no navegador ou no aparelho — anunciou que está se juntando à Databricks para levar "Postgres em WASM para sandboxes de agentes de IA", com a Electric Cloud sendo desligada e os clientes migrando ou auto-hospedando. A infraestrutura de local-first sobreviveu; o negócio de local-first como serviço ao usuário final, não — e o reposicionamento é para servir **agentes**, não pessoas.

**Quem constrói produto para o usuário final ainda opera em escala de nicho.** O `budgero`, escolha nº 1 da varredura de inspiração da turma, é o caso exemplar: declara cifragem no dispositivo antes de qualquer sincronização ("só você e as pessoas com quem você compartilha podem ler"), código aberto sob AGPL-3.0, auto-hospedagem gratuita e nuvem a US$ 4 por mês. Não divulga número de usuários. Seu anúncio no Hacker News tinha, quando consultado, **1 ponto e 1 comentário**. Essa distância entre a solidez da proposta e a ausência de eco é o dado mais honesto desta seção: a arquitetura existe, a demanda de massa não está demonstrada.

**O direito está se movendo em dois sentidos opostos, e isso é estrutural, não conjuntural.** A favor: o Regulamento (UE) 2024/1183, de 11 de abril de 2024, instituiu o arcabouço da Carteira de Identidade Digital Europeia, e a orientação oficial da Comissão é que cada Estado-membro ofereça ao menos uma versão da carteira, construída sobre especificações comuns, **até 2026** — com atos de implementação publicados em lotes em maio e julho de 2025 e o quadro de referência de arquitetura na versão 2.0. Contra: no Reino Unido, a Apple desativou a Proteção Avançada de Dados para usuários locais em fevereiro de 2025 após uma ordem secreta do governo; a exigência mundial foi retirada em agosto de 2025 sob pressão diplomática, um novo aviso de capacidade técnica restrito ao Reino Unido foi emitido em outubro de 2025, e em agosto de 2026 a Apple entrou com nova contestação no Investigatory Powers Tribunal — sem decisão, e sem o recurso restaurado. Na União Europeia, o regime temporário de varredura voluntária ("Chat Control 1.0") foi prorrogado até 3 de abril de 2028 depois que o Parlamento, em 9 de julho de 2026, não alcançou a maioria absoluta necessária para rejeitá-lo — 314 votos contra os 360 exigidos —, com uma emenda excluindo comunicações cifradas ponta-a-ponta cujo efeito prático permanece disputado, enquanto o regulamento permanente segue em trílogo. O acompanhamento público do processo por Patrick Breyer, consultado em 12 de setembro de 2026, ainda descrevia o quinto trílogo como previsto e a adoção como esperada para julho de 2026 — sinal de que o próprio registro do processo não acompanha o processo.

**A interoperabilidade obrigatória chegou, e é pequena.** Em novembro de 2025, cumprindo o Digital Markets Act, o WhatsApp habilitou conversas com serviços de terceiros na Europa, exigindo dos parceiros o mesmo nível de cifragem ponta-a-ponta, com adesão opcional e desligável a qualquer momento. Os dois primeiros parceiros são BirdyChat e Haiket; grupos com usuários externos só quando os parceiros suportarem. Obrigação cumprida, ecossistema inexistente.

**No Brasil, a adoção veio pelo Estado e pela ponta do login, não pela arquitetura.** Em fevereiro de 2026 o aplicativo gov.br passou a oferecer acesso por passkey, usando o desbloqueio nativo do aparelho — digital ou reconhecimento facial do sistema operacional — em vez da prova facial própria do aplicativo, exigindo Android 9+ ou iOS 16+, bloqueio de tela seguro e conta de nível prata ou ouro para a validação inicial. É a mesma assimetria observada no plano global, em versão mais aguda: a autenticação criptográfica local chega a dezenas de milhões de pessoas, enquanto a titularidade do dado permanece integralmente no servidor da União. Não há, no momento da redação, equivalente brasileiro do debate europeu sobre varredura no cliente, nem regulamentação específica do direito de portabilidade do art. 18 da LGPD que o torne executável na prática — **premissa assumida e declarada, por ausência de fonte aberta consultada**, não por verificação exaustiva.

**E há um contracaminho crescendo mais rápido que o local-first.** Em 11 de novembro de 2025 o Google anunciou o Private AI Compute: processamento de dados pessoais em enclave atestado — Titanium Intelligence Enclave em TPU, SEV-SNP da AMD em CPU —, arquitetura conceitualmente análoga ao Private Cloud Compute da Apple. A auditoria da NCC Group resumiu o limite da promessa em uma frase que vale como epígrafe deste mapa: mantém os dados da sessão "a salvo de todos, exceto do Google". Não é cifragem ponta-a-ponta nem processamento no dispositivo; é confiança verificável em um terceiro. E é o caminho que resolve o problema que o local-first não resolve — rodar modelo grande sobre dado pessoal.

## Seção 4 — As disrupções-raiz

**Filtro anti-tecnologia madura, aplicado formalmente.** Foram **recusadas** como maduras ou meramente incrementais, e por isso não figuram como disrupções-raiz:

- **Passkeys / WebAuthn como método de autenticação.** Recusada com base em dado: cinco bilhões em uso, 75% de habilitação, 49% de uso regular (FIDO, maio de 2026). Pela régua de difusão de Rogers, isto atravessou a maioria inicial. Além disso — e este é o argumento decisivo — a passkey **não rompe nada estruturalmente**: melhora a resistência a phishing e reduz tíquetes de suporte, mas o par de chaves é registrado *na* parte confiante, que continua sendo dona da conta. É otimização de credencial dentro do modelo existente. A ruptura não está no login; está em *quem detém o registro*, e isso é a Disrupção 2.
- **Cifragem ponta-a-ponta em mensageria.** Padrão de facto há uma década, exigida até de parceiros de interoperabilidade pelo DMA. Madura.
- **Backup cifrado, HTTPS/TLS, segundo fator por SMS ou autenticador, login federado com Google/Apple, cofre de senhas sincronizado, cache offline, sincronização de arquivos.** Todos amplamente adotados em produto de massa; caem na régua da disciplina.
- **Auto-hospedagem de aplicativo monolítico em contêiner.** Prática consolidada, com comunidade estável e teto conhecido; não cria comportamento novo nem ecossistema novo — reposiciona o mesmo software em outro servidor.
- **"IA que resume seus dados localmente" como disrupção deste tema.** Recusada por dois motivos: é aceleração de tarefa existente, e o modelo rodando no dispositivo é objeto do tema 16. Aqui só entra como *consequência* na arquitetura de permissão (Disrupção 3).

As três disrupções abaixo foram aceitas porque rompem a lógica vigente, ainda não se concretizaram em produção e dependem de peças identificáveis que faltam.

### Disrupção 1 — O servidor cego como padrão de aplicativo pessoal (e não de mensageria)

*O que rompe:* a equação que sustenta praticamente todo software pessoal em operação — o servidor é a fonte da verdade, lê tudo o que guarda, e é *por ler* que ele consegue oferecer busca, recomendação, relatório, suporte, telemetria e moderação. Na arquitetura de servidor cego, o dado autoritativo é o do aparelho; o servidor sincroniza pacotes cifrados que não consegue abrir e cuja estrutura não conhece. O que rompe não é a privacidade — é a **localização da inteligência do produto**. Toda função que dependia de ver o acervo tem de migrar para o cliente ou desaparecer. E a cegueira não é um modo de operação opcional: é uma restrição que reescreve o backlog.

*Por que agora, e não há cinco anos:* em 2021 a peça de dados era caríssima. O Automerge 3.0, de julho de 2025, derrubou o consumo de memória em mais de dez vezes (o caso citado pelo projeto vai de 700 MB para 1,3 MB), e o PGlite colocou um Postgres completo em WebAssembly dentro da aba do navegador — o cliente ganhou banco de dados de verdade. O campo passou de ensaio (2019) a trilha de conferência de infraestrutura com 22 sessões (FOSDEM, fevereiro de 2026). E existe, pela primeira vez, um desenho sério de sincronização de conteúdo cifrado — o Beelay — no qual o servidor sincroniza sem decifrar.

*O que falta para se concretizar:* **(a)** busca e agregação sobre dado cifrado com desempenho aceitável — a própria documentação do Keyhive lista como aberto o custo de operar quando o servidor não vê texto claro; **(b)** um modelo de receita para um servidor que não pode extrair valor do que guarda, e o sinal de 2026 é contrário: a Electric Cloud foi desligada e a tecnologia foi para sandbox de agente; **(c)** a camada de autorização em produção — sem ela, "servidor cego" só funciona para acervo de uma pessoa só, e a colaboração é justamente o que faz o software valer; **(d)** ferramentas de depuração e suporte que funcionem sem que ninguém possa olhar o dado do cliente, hoje inexistentes como categoria.

### Disrupção 2 — Autorização sem intermediário: a conta deixa de ser registro de terceiro e passa a ser capacidade criptográfica portável

*O que rompe:* o pressuposto de que existir num serviço é ter uma linha em um banco de dados de alguém, e que provar quem você é exige um provedor de identidade no meio. Na arquitetura de capacidades, permissão é uma **cadeia de delegações assinadas** — ler, escrever, administrar — que converge entre réplicas, sobrevive à partição de rede e admite revogação sem coordenação central. A conta deixa de ser o lugar onde você está cadastrado e passa a ser o conjunto de chaves e atestações que você porta. Isso rompe, de um lado, o pedágio do "entrar com Google"; de outro, e mais fundo, rompe a **assimetria de suporte**: sem provedor, não há ninguém do outro lado do balcão com poder de restaurar seu acesso.

*Por que agora, e não há cinco anos:* três peças chegaram juntas. **Uma social:** cinco bilhões de passkeys tornaram o gesto de autenticar com o próprio aparelho cotidiano — inclusive no gov.br desde fevereiro de 2026 —, o que constrói o hábito sobre o qual uma identidade portável pode assentar. **Uma técnica:** o Keyhive/BeeKEM ofereceu um desenho de gestão de grupo e chave que tolera divergência concorrente, com prova formal de segurança publicada, coisa que não existia em 2021. **Uma jurídica:** o Regulamento (UE) 2024/1183 põe prazo — carteira disponível em todos os Estados-membros até 2026 — e o CXP/CXF, com o formato em rascunho de revisão desde março de 2025 e o protocolo mirando padronização em 2026, começa a quebrar o aprisionamento da credencial no cofre de quem a criou, com transferência cifrada ponta-a-ponta via HPKE.

*O que falta para se concretizar:* **(a)** recuperação — o relatório da FIDO de 2026 é eloquente pelo silêncio, e a recomendação prática do setor ainda é "cadastre duas credenciais", o que transfere o problema ao usuário; **(b)** herança e incapacidade: sem provedor, a morte do titular é matematicamente indistinguível de uma chave perdida, e nenhuma pilha em uso hoje tem resposta de primeira classe; **(c)** revogação sob partição, ainda listada como problema aberto no Keyhive; **(d)** um padrão de política legível que permita a um humano entender que acesso concedeu — o Keyhive é um CRDT de grupos, não uma interface; **(e)** o pé no chão da difusão: o CXP importa e exporta credencial, mas a titularidade da *conta* continua na parte confiante — sem uma segunda metade jurídica, portabilidade de chave não é portabilidade de identidade.

### Disrupção 3 — A computação vai ao dado: portabilidade deixa de ser cópia e consentimento deixa de ser texto

*O que rompe:* o modelo vigente de exercer direito sobre dado pessoal — exportar um arquivo e entregá-lo a outro serviço — e o modelo vigente de consentimento, que é declaração de finalidade em prosa, verificada por auditoria documental. A ruptura é inverter quem se move: em vez de o acervo viajar para onde está a computação, a computação chega ao acervo com uma **capacidade delegada, escopada, revogável e auditável no ponto do dado**. Consentimento passa a ser objeto executável, não cláusula; portabilidade passa a ser mudança de custódia com histórico, não cópia de arquivo. Isso rompe também o desenho de interação: a tela de permissão deixa de ser um obstáculo de instalação e passa a ser o principal instrumento de poder do usuário — e, por isso mesmo, o principal alvo de manipulação.

*Por que agora, e não há cinco anos:* porque agora existe um consumidor voraz de acervo pessoal que não existia em 2021. A descrição de Meredith Whittaker no SXSW, em 7 de março de 2025, é a formulação mais exata do problema: um agente precisaria operar "com algo que se parece com permissão de root, acessando cada um desses bancos de dados", "provavelmente em texto claro, porque não há modelo para fazer isso de forma cifrada", e ameaça "a barreira hematoencefálica entre a camada de aplicação e a camada de sistema operacional". A pressão por acesso ao acervo passou de comercial a arquitetural. Ao mesmo tempo, apareceu o vocabulário técnico de "prove que você não copiou": enclaves atestados em produção desde 2024-2025 (Private Cloud Compute, Private AI Compute) tornaram a *atestação* uma peça negociável — e o CXP provou que credencial pode trafegar cifrada entre custódias.

*O que falta para se concretizar:* **(a)** uma linguagem de política que seja simultaneamente executável e compreensível — hoje não existe nem como rascunho de padrão; **(b)** auditoria do lado de quem cede, isto é, o registro local de quem leu o quê e quando, hoje ausente de praticamente todo aplicativo; **(c)** a distinção regulatória entre "local" e "atestado", que está sendo decidida a favor do segundo: a auditoria da NCC Group deixa claro que o enclave mantém o dado a salvo "de todos, exceto do Google", e se isso for aceito como conformidade, a disrupção é absorvida sem que o dado saia do datacenter; **(d)** a definição de quem assina o pedido do agente e sob qual limite — problema de identidade de agente, que é o tema 2, e cuja ausência de solução travará esta disrupção mesmo que o resto funcione.

## Seção 5 — A roda dos futuros

```yaml
roda_dos_futuros:
  - id: e1
    efeito: "Servidor de sincronização vira commodity paga: o preço do software pessoal desloca-se de acesso ao dado para armazenamento e retenção"
    sinal: moderado
    prazo: "2027-2030"
    confianca: media
    filhos:
      - id: e1.1
        efeito: "Assinaturas de aplicativo pessoal passam a cobrar por sincronização e histórico, não por funcionalidade"
        sinal: moderado
        prazo: "2027-2029"
        confianca: media
        filhos:
          - id: e1.1.1
            efeito: "Surge mercado de relays cegos intercambiáveis, com preço por GB-mês e troca de provedor sem migração de dados"
            sinal: fraco
            prazo: "2029-2031"
            confianca: baixa
          - id: e1.1.2
            efeito: "Nuvens grandes vendem 'sincronização cega' como primitiva gerenciada, sem poder ler o conteúdo que hospedam"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
      - id: e1.2
        efeito: "Fornecedores de local-first fecham ou são adquiridos, e a promessa de longevidade é testada no próprio fornecedor"
        sinal: forte
        prazo: "2026-2028"
        confianca: alta
        filhos:
          - id: e1.2.1
            efeito: "Contrato de software pessoal passa a incluir saída técnica explícita: formato aberto, dump local e servidor substituível"
            sinal: fraco
            prazo: "2028-2031"
            confianca: baixa

  - id: e2
    efeito: "A camada de produto migra para o cliente: o que não roda no dispositivo deixa de existir no produto"
    sinal: moderado
    prazo: "2027-2031"
    confianca: media
    filhos:
      - id: e2.1
        efeito: "Busca, ranking e recomendação tornam-se locais e idiossincráticos; o resultado deixa de ser comparável entre pessoas"
        sinal: fraco
        prazo: "2028-2031"
        confianca: baixa
        filhos:
          - id: e2.1.1
            efeito: "Métrica de produto deixa de ser observável por padrão: teste A/B e funil passam a depender de telemetria concedida"
            sinal: moderado
            prazo: "2028-2030"
            confianca: media
          - id: e2.1.2
            efeito: "Aparecem 'analytics de consentimento': agregação com garantia estatística sem coleta de evento individual"
            sinal: fraco
            prazo: "2030-2032"
            confianca: baixa
      - id: e2.2
        efeito: "Moderação e segurança de conteúdo perdem o servidor como ponto de inspeção e recuam para o cliente ou para a denúncia"
        sinal: moderado
        prazo: "2027-2031"
        confianca: media
        filhos:
          - id: e2.2.1
            efeito: "Varredura no cliente retorna à pauta legislativa como 'única alternativa técnica' ao servidor cego"
            sinal: moderado
            prazo: "2026-2028"
            confianca: media

  - id: e3
    efeito: "O desenho da recuperação substitui o desenho do login: 'perdi a chave' torna-se o fluxo mais importante do produto"
    sinal: forte
    prazo: "2027-2030"
    confianca: media
    filhos:
      - id: e3.1
        efeito: "Recuperação social e custódia distribuída (guardiões, fragmentos de chave) entram no repertório padrão de interação"
        sinal: moderado
        prazo: "2028-2031"
        confianca: media
        filhos:
          - id: e3.1.1
            efeito: "Bancos, cartórios e operadoras passam a vender custódia de chave como serviço regulado — o intermediário volta pela porta da recuperação"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
          - id: e3.1.2
            efeito: "A fila de suporte muda de natureza: menos redefinição de senha, mais perícia de identidade e negociação de exceção"
            sinal: moderado
            prazo: "2027-2030"
            confianca: media
      - id: e3.2
        efeito: "Herança digital deixa de ser política de plataforma e passa a ser problema de criptografia somado a direito sucessório"
        sinal: fraco
        prazo: "2028-2032"
        confianca: baixa
        filhos:
          - id: e3.2.1
            efeito: "Surge o 'testamento de chaves' com liberação temporizada, e com ele a primeira disputa judicial sobre sua validade"
            sinal: fraco
            prazo: "2030-2033"
            confianca: baixa

  - id: e4
    efeito: "A identidade se desagrega em provas portáveis e o 'entrar com X' perde a posição de pedágio"
    sinal: moderado
    prazo: "2027-2031"
    confianca: media
    filhos:
      - id: e4.1
        efeito: "Carteiras estatais e credenciais verificáveis competem com o provedor de identidade privado na hora de provar atributo"
        sinal: moderado
        prazo: "2026-2029"
        confianca: media
        filhos:
          - id: e4.1.1
            efeito: "Verificação de idade, renda e vínculo passa a ser atestação de atributo sem revelar o documento inteiro"
            sinal: moderado
            prazo: "2027-2030"
            confianca: media
          - id: e4.1.2
            efeito: "O Estado torna-se o maior fornecedor de identidade digital cotidiana, criando ponto único de falha e de coerção"
            sinal: moderado
            prazo: "2027-2031"
            confianca: media
      - id: e4.2
        efeito: "Credencial portável (CXP/CXF) corrói o aprisionamento no cofre e cria mercado de migração de identidade"
        sinal: moderado
        prazo: "2026-2029"
        confianca: media
        filhos:
          - id: e4.2.1
            efeito: "Exportar identidade torna-se vetor de ataque e de coerção: transferência de credencial sob pressão, em fronteira ou em violência doméstica"
            sinal: fraco
            prazo: "2028-2031"
            confianca: baixa

  - id: e5
    efeito: "Consentimento deixa de ser texto e vira permissão executável, escopada, revogável e auditável no ponto do dado"
    sinal: fraco
    prazo: "2028-2032"
    confianca: baixa
    filhos:
      - id: e5.1
        efeito: "Interfaces de permissão por acervo, período e finalidade substituem a política de privacidade como peça central de design"
        sinal: fraco
        prazo: "2028-2031"
        confianca: baixa
        filhos:
          - id: e5.1.1
            efeito: "Fadiga de permissão torna-se o padrão manipulativo dominante: concessão ampla obtida por cansaço, não por engano"
            sinal: moderado
            prazo: "2028-2031"
            confianca: media
          - id: e5.1.2
            efeito: "Auditoria pessoal de acesso — quem leu o quê, quando, sob qual delegação — torna-se tela padrão de aplicativo"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
      - id: e5.2
        efeito: "Reguladores passam a exigir prova técnica de não-cópia, e não apenas declaração de finalidade"
        sinal: fraco
        prazo: "2030-2033"
        confianca: baixa
        filhos:
          - id: e5.2.1
            efeito: "Atestação de enclave é aceita como prova suficiente, e 'privado' no direito deixa de coincidir com 'local' na arquitetura"
            sinal: moderado
            prazo: "2027-2030"
            confianca: media

  - id: e6
    efeito: "O acervo pessoal ganha porta programável: agentes de terceiros negociam acesso em vez de receber cópia"
    sinal: fraco
    prazo: "2029-2032"
    confianca: baixa
    filhos:
      - id: e6.1
        efeito: "Consolida-se o papel de guardião do acervo no dispositivo — um serviço local que media, registra e limita pedidos de agentes"
        sinal: fraco
        prazo: "2029-2032"
        confianca: baixa
        filhos:
          - id: e6.1.1
            efeito: "A infraestrutura local-first é recrutada para o sandbox do agente, não para a soberania da pessoa"
            sinal: moderado
            prazo: "2026-2029"
            confianca: media
          - id: e6.1.2
            efeito: "Disputa sobre quem assina o pedido do agente: em nome de quem ele age, com que limite e quem responde pelo excesso"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
      - id: e6.2
        efeito: "Portabilidade deixa de ser exportação de arquivo e passa a ser transferência de custódia com histórico preservado"
        sinal: fraco
        prazo: "2030-2033"
        confianca: baixa
        filhos:
          - id: e6.2.1
            efeito: "A migração entre serviços passa a carregar o grafo de permissões, e não apenas os dados"
            sinal: fraco
            prazo: "2031-2034"
            confianca: baixa
```

**O que o bloco não exprime.** Três coisas, e são as que mais importam para quem projeta.

A primeira é que a roda tem um **atrator escondido**, e ele é o retorno do intermediário. Os nós `e3.1.1`, `e5.2.1` e `e6.1.1` não são efeitos colaterais dispersos: são três instâncias do mesmo movimento. O banco que custodia sua chave, o enclave que prova que não copiou, o provedor de nuvem que hospeda o sandbox do agente — todos reinstalam um terceiro confiável no exato ponto onde a arquitetura pretendia eliminá-lo. A cegueira do servidor não elimina a necessidade de confiança; ela **realoca** essa necessidade para a recuperação, a atestação e a mediação. Um mapa que só lesse as folhas veria dispersão; lidas juntas, elas desenham uma convergência.

A segunda é que os prazos do bloco são **condicionais a uma única dependência**, e o formato YAML esconde isso. Quase tudo em `e2`, `e5` e `e6` pressupõe autorização criptográfica funcionando em produção — isto é, pressupõe o Keyhive ou equivalente saindo do pré-alfa de março de 2025. Se essa peça atrasar cinco anos, o bloco não desliza: ele desaba, porque servidor cego sem autorização só serve para acervo de uma pessoa, e software pessoal de uma pessoa só é um mercado muito menor do que o mapa supõe. Há um nó crítico, não um leque de independentes.

A terceira é o **sinal de sentido invertido**. `e1.2` é o único item com confiança alta, e ele é uma má notícia para a tese: quem fechou em 2026 foi a nuvem de um fornecedor de local-first, e a tecnologia foi comprada para servir agentes de IA. Ou seja, o efeito de primeira ordem mais bem evidenciado deste mapa é a fragilidade econômica da própria disrupção que o mapa rastreia. Isso não invalida a roda — mas obriga a ler `e1.1.1` e `e1.1.2` como hipóteses, não como continuação natural.

## Seção 6 — Sinais fracos e wildcards

**Sinais fracos observados.**

1. **O Show HN de 1 ponto.** O produto escolhido como nº 1 pela varredura de inspiração da turma — local-first, cifrado ponta-a-ponta, auto-hospedável, código aberto — teve 1 ponto e 1 comentário no fórum que é o próprio público-alvo dele. O sinal fraco aqui não é técnico; é de demanda.
2. **Trilha própria no FOSDEM com 22 sessões, em 1º de fevereiro de 2026.** Campo com comunidade e agenda, sete anos depois do ensaio fundador. Maturação de infraestrutura, não de mercado.
3. **Prova formal de segurança para o BeeKEM publicada em veículo acadêmico, com o código ainda pré-alfa.** O rigor chegou antes do produto — padrão típico de tecnologia que vai demorar e depois durar.
4. **BirdyChat e Haiket como únicos parceiros da interoperabilidade do WhatsApp.** Obrigação regulatória cumprida com ecossistema vazio: a abertura existe juridicamente e não existe socialmente.
5. **A passkey no gov.br.** O primeiro contato de massa do brasileiro com autenticação criptográfica local vem do Estado, e não de produto privado — o que inverte a ordem de difusão suposta pelo tema.
6. **A frase da auditoria da NCC Group** — dado a salvo "de todos, exceto do Google" — como formulação já *aceitável* de privacidade em 2026. Sinal de que o léxico está sendo capturado antes da arquitetura.
7. **O relógio da NIST.** O relatório NIST IR 8547 (rascunho inicial) marca algoritmos de 112 bits de força — RSA-2048, ECDSA P-256 — como **depreciados após 2030 e proibidos após 2035**, com a meta federal de migração em 2035 fixada pelo NSM-10. Isto atravessa o horizonte de 2031 deste mapa.

**Wildcards.**

- **Wildcard principal — a chave é sua, logo a migração é sua.** Se a colheita-agora-decifra-depois se confirmar como prática ativa e a depreciação de 2030 pegar o acervo local-first no meio do caminho, a pessoa soberana descobre que herdou uma obrigação de engenharia: rotacionar a criptografia de anos de histórico cifrado sob chaves que ninguém mais tem. No modelo de servidor que lê, essa migração é feita pelo fornecedor, silenciosamente, e o usuário nunca soube. No modelo de servidor cego, **não há quem faça por você**. Baixa probabilidade de se tornar visível antes de 2031; impacto altíssimo, porque transforma o argumento de venda do local-first ("seu dado dura para sempre") em seu oposto, e ainda por cima num registro técnico que nenhum usuário final consegue avaliar.
- **Wildcard regulatório inverso.** Uma lei que obrigue local-first ou cifragem ponta-a-ponta por padrão para dado sensível — saúde, financeiro, infantil — em um mercado grande. Colocaria a arquitetura em produção por decreto, saltando a etapa de demanda que hoje não existe, e reorganizaria o mapa inteiro em três anos em vez de dez.
- **Wildcard de confiança.** Comprometimento em larga escala de um cofre sincronizado de credenciais (iCloud Keychain, Google Password Manager ou equivalente). Com cinco bilhões de passkeys, a chave sincronizada é hoje infraestrutura sistêmica; um evento desses empurraria o mercado para credencial vinculada ao aparelho, tornaria a recuperação ainda mais dura e daria à custódia regulada (`e3.1.1`) um argumento definitivo.
- **Wildcard jurisdicional.** Decisão do Investigatory Powers Tribunal favorável ao governo britânico, obrigando capacidade técnica de acesso em serviço cifrado. Criaria mercado cindido por fronteira — o mesmo aplicativo com arquiteturas diferentes por país — e converteria "soberania de dados" de escolha de produto em questão de geografia.
- **Wildcard de fechamento.** Apple e Google recuarem no CXP depois de abri-lo, ou abri-lo apenas entre pares homologados. A portabilidade da credencial é, hoje, uma concessão voluntária de dois atores; se ela fechar, `e4.2` morre e o "fim da senha" consolida-se como a mais eficiente forma de aprisionamento já implantada em escala global.

## Seção 7 — Contra o próprio mapa (teste adversarial)

**Extrapolação linear.** O erro mais grave que este mapa esteve a ponto de cometer foi transferir a curva de uma coisa para outra: a passkey foi adotada em massa, logo a arquitetura de soberania será adotada em massa. Não se sustenta. A passkey foi empurrada pelos sistemas operacionais, não pedida pelos usuários, e foi adotada porque **não exigiu nada de ninguém** — nem mudança de modelo de negócio, nem perda de função, nem transferência de titularidade. As três disrupções deste mapa exigem exatamente o que a passkey não exigiu: que o fornecedor renuncie a ler o dado, que o produto perca funções que hoje vende, e que o usuário assuma responsabilidades que hoje terceiriza. Curvas de adoção de coisas indolores não predizem curvas de adoção de coisas custosas. Onde este mapa herdou prazos da difusão de passkeys, os prazos estão provavelmente cedo demais.

**Velocidade de adoção irreal.** O bloco da Seção 5 põe efeitos de segunda ordem em 2028-2031 sobre um substrato que era pré-alfa em março de 2025, com aviso escrito contra uso em produção. A referência histórica honesta é o próprio campo: do ensaio de abril de 2019 à trilha de FOSDEM foram quase sete anos, e ao fim deles não há nenhum produto de consumo em escala. Software de infraestrutura com implicação criptográfica tende a levar de oito a doze anos entre desenho e uso comum. Aplicando essa régua, `e5` e `e6` deveriam estar na década de 2030, não em 2031 — e vários nós de confiança "baixa" mereceriam, com rigor, ser marcados apenas como possíveis. Segunda distorção de velocidade, na direção oposta: o mapa pode estar **lento** em `e2.2.1` e `e5.2.1`, porque legislação de varredura e aceitação de enclave como prova já estão em movimento e podem se consolidar antes de qualquer disrupção arquitetural.

**Falha da disrupção — o cenário em que este mapa está simplesmente errado.** O caminho vencedor até 2031 pode não ser o servidor cego, e sim o **terceiro confiável verificável**: enclave atestado, auditoria pública, relatório de transparência. Ele resolve o que o local-first não resolve — rodar modelo grande sobre dado pessoal, que é o que as pessoas de fato querem em 2026 —, é vendido pelas duas empresas que controlam os sistemas operacionais, e satisfaz o regulador com ferramentas que o regulador já sabe usar. Nesse mundo, "soberania de dados" não desaparece: vira **selo**. A frase da NCC Group deixa de ser crítica e passa a ser especificação. E há uma evidência de 2026 apontando para lá com força desagradável: a principal empresa de sincronização local-first foi comprada por uma plataforma de dados para IA, desligou sua nuvem e foi realocada para servir sandbox de agente. A infraestrutura da soberania da pessoa foi absorvida pela infraestrutura da autonomia da máquina. Se essa for a tendência dominante, este mapa descreveu com precisão uma tecnologia que perdeu.

**Viés pessoal do autor.** O tema chegou por uma varredura de inspiração de finanças pessoais com privacidade, ligada a um projeto real no qual o autor removeu o provedor de identidade terceiro do próprio produto. Quem já pagou o custo de engenharia de uma escolha arquitetural tem interesse legítimo, e por isso mesmo enviesado, em enxergá-la como tendência em vez de nicho. Dois agravantes metodológicos: o corpus de inspiração é GitHub e Hacker News, população autosselecionada de pessoas que auto-hospedam — o equivalente a estimar a popularidade de bicicletas entrevistando ciclistas; e a régua da disciplina (excluir o que já é comum em produto de massa) tem efeito colateral de empurrar a análise sistematicamente para o que é raro, o que pode ser confundido com emergente. Rarissimidade e emergência não são a mesma coisa: parte do que este mapa chama de sinal fraco pode ser simplesmente **nicho estável**.

**Viés do avaliador.** Registro também o meu: arquiteturas elegantes com prova formal são persuasivas para quem lê especificação, e esse gosto estético não é evidência de adoção. O sinal mais sólido de todo o documento — confiança alta — é uma má notícia para a tese central. Um mapa em que o dado mais firme contraria o argumento principal deve ser lido com desconto explícito, e é por isso que o campo `confianca` do cabeçalho é `media` e não mais.

## Seção 8 — O que a máquina errou

1. **Tratei passkeys como disrupção-raiz no primeiro rascunho.** A estrutura inicial trazia "o fim da senha" como uma das três rupturas, seguindo o enunciado do tema. Ao abrir o relatório da FIDO Alliance de maio de 2026 — cinco bilhões de passkeys, 75% de habilitação, 49% de uso regular —, ficou claro que se trata de tecnologia que atravessou a maioria inicial. Corrigido: a passkey foi movida para o filtro de recusa da Seção 4, com justificativa formal, e a ruptura foi reformulada em torno da *titularidade* da conta, não do método de login.
2. **Atribuí ao `budgero` recursos de IA com modelo local.** Um resumo de busca afirmava que o produto tinha "recursos experimentais de IA, incluindo integração com LLM local, categorização automática e leitura de recibos, tudo rodando privadamente no dispositivo". Ao abrir a página inicial do produto, **nenhuma menção a IA** aparece. A afirmação foi removida do texto. O que restou é o que a página sustenta: cifragem no dispositivo, AGPL-3.0, auto-hospedagem, US$ 4 por mês, sem número de usuários divulgado. Detectado por regra simples: nenhuma afirmação entra no texto a partir de resumo de busca sem que a fonte tenha sido aberta.
3. **Usei uma fonte desatualizada como se fosse estado atual.** A página de acompanhamento do Chat Control de Patrick Breyer, aberta em 12 de setembro de 2026, ainda descrevia o quinto trílogo de 29 de junho como "previsto" e a adoção como esperada para julho. Corrigido: o desfecho de julho de 2026 foi ancorado em cobertura jornalística, a confiança do item foi rebaixada a média, e a própria defasagem da fonte foi registrada na Seção 3 como sinal.
4. **Escrevi que a Proteção Avançada de Dados havia sido restaurada no Reino Unido.** Não há fonte para isso. O que há é uma segunda contestação da Apple no Investigatory Powers Tribunal em agosto de 2026, contra um aviso reescrito de outubro de 2025, restrito ao Reino Unido, sem decisão e sem o recurso de volta. Corrigido para a cronologia verificável.
5. **Tentei citar o ensaio fundador pela página errada.** A primeira tentativa foi a página de projeto do Ink & Switch, que não contém os sete ideais. Em vez de completar de memória — que é exatamente onde nascem as citações falsas —, fui ao ensaio, confirmei autoria (Kleppmann, Wiggins, van Hardenberg, McGranaghan) e data (abril de 2019), e só então citei.
6. **Uma fonte não abriu e não foi citada.** A reportagem da CNBC sobre a ação da Apple retornou HTTP 403. Não entrou na Seção 11; foi substituída por veículo efetivamente aberto. O mesmo critério excluiu meia dúzia de blogs de fornecedor de autenticação que apareceram em busca sobre recuperação de passkey e não foram consultados.
7. **Resisti a quantificar o que não tem denominador.** Em dois pontos o rascunho pedia um número — "quantos aplicativos local-first com cifragem ponta-a-ponta existem em produção" e "qual a fatia de mercado da auto-hospedagem". Não há fonte consultada para nenhum dos dois. Em vez de estimar com aparência de autoridade, o texto registra a ausência do dado. O único número de adoção robusto deste mapa é sobre passkeys — e é justamente o número que derruba uma das três disrupções anunciadas.
8. **Confundi projeto com produto ao ler o programa do FOSDEM.** O primeiro rascunho tratava Jazz, NextGraph, Willow e Seed Hypermedia como produtos com base instalada. O programa de conferência sustenta que existem, que têm autores e que foram apresentados — nada sobre adoção. O texto foi ajustado para dizer o que a fonte sustenta.

## Seção 9 — Três cenários para 2031

**Provável — a soberania como camada fina sobre a mesma pilha.** O dado da maioria das pessoas continua no servidor de alguém, e o "privado" que elas encontram é o enclave atestado: o processamento acontece em hardware isolado, há relatório de auditoria, e a frase de referência do mercado é uma variação de "a salvo de todos, exceto de nós". A senha praticamente desapareceu do consumo — a passkey é o normal, o gov.br entra com biometria do aparelho, e a credencial já se move entre cofres por CXP, o que resolveu o aprisionamento do gerenciador sem mexer em quem é dono da conta. O local-first é real e pequeno: vive em ferramentas de nota, editores colaborativos e um punhado de aplicativos de finanças pessoais, todos com base de usuários na casa dos milhares, sustentados por assinatura de sincronização. A camada de autorização sem intermediário saiu do pré-alfa e funciona, mas quase ninguém a usa em produto de consumo, porque a recuperação continua sendo o pior fluxo de qualquer aplicativo que a adote. Quem projeta mídia e interação encontra a soberania de dados sobretudo como requisito de conformidade — uma tela de permissão mais granular, um registro de acesso, um botão de exportação que funciona — e não como restrição arquitetural. A frase que define o cenário é que o servidor continua enxergando; só passou a assinar um laudo dizendo que fechou os olhos.

**Desejável — a cegueira como pressuposto, e a recuperação como peça de primeira classe.** O servidor cego é uma opção normal na prateleira de infraestrutura: relays intercambiáveis cobram por armazenamento, e trocar de provedor é mudar um endereço, não migrar dados. A autorização criptográfica está em produção e revogar acesso a um acervo compartilhado é uma operação corriqueira que funciona mesmo offline. O que distingue este cenário do anterior não é a criptografia — é que o problema difícil foi enfrentado em vez de terceirizado: recuperação por guardiões, custódia fragmentada e liberação temporizada para herança fazem parte do repertório de design que qualquer pessoa que projeta interação sabe usar, do mesmo jeito que hoje sabe fazer um fluxo de cadastro. A tela de permissão substituiu a política de privacidade como peça central, é granular por acervo, período e finalidade, e vem acompanhada de um registro auditável de quem leu o quê — inclusive quando quem leu foi um agente. Os órgãos de proteção de dados aprenderam a exigir prova técnica de não-cópia, e "local" e "atestado" são categorias distintas no direito, com consequências distintas. O ponto de tensão permanece e é honesto: a fadiga de permissão virou o padrão manipulativo dominante, e o mercado de custódia de chave reintroduziu intermediários — só que agora regulados, plurais e substituíveis, o que é uma vitória modesta e verdadeira.

**Indesejável — o pior de cada mundo.** A senha acabou e a conta continua sendo de outro. A passkey se consolidou como a forma mais eficiente de aprisionamento já implantada em escala: a credencial está no cofre da plataforma, o CXP nunca saiu do estágio de concessão voluntária entre pares homologados, e sair de um ecossistema custa mais do que em 2026. Quem perde o aparelho e não tem segundo fator cadastrado descobre que a recuperação depende de perícia de identidade num balcão que não existe; quem morre leva o acervo. A cegueira do servidor foi usada como argumento pela direção oposta: como não se pode inspecionar no servidor, legislou-se a varredura no cliente, e o aparelho — o único lugar que era soberano — passou a ser o ponto de inspeção. O local-first sobreviveu como infraestrutura de sandbox de agente: a mesma tecnologia que prometia que o dado moraria com a pessoa passou a garantir que cada agente tenha seu banco de dados local e rápido, sincronizado com o datacenter de quem o opera. O agente tem root no acervo porque não houve modelo para lhe dar menos, e a barreira entre aplicação e sistema operacional desapareceu. A soberania de dados existe em 2031 como palavra em material de marketing e como cláusula em contrato, e a pergunta "quem pode ler isto?" voltou a não ter resposta técnica — só uma resposta jurídica, que varia por país e muda por sentença.

## Seção 10 — O experimento

**O que é.** *O Cofre Cego* — uma oficina de 90 minutos com um artefato mínimo construível hoje: um acervo compartilhado de três a cinco pessoas (uma planilha de gastos de uma festa, uma lista de tarefas de um trabalho em grupo), implementado com um CRDT (Automerge ou Yjs) no navegador, cifrado no cliente com chave simétrica combinada fora de banda, sincronizando por um relay deliberadamente burro — um WebSocket que só reenvia bytes. Uma máquina da sala é o servidor, e o professor opera nela com acesso total ao disco e ao tráfego. O artefato é pequeno de propósito: não é sobre construir um produto, é sobre **operar as três crises**. Depois de todos os grupos terem seu acervo funcionando e o professor ter demonstrado, ao vivo, que o servidor só vê bytes opacos, a oficina roda três eventos, cronometrados: **(1) perda** — um integrante entrega o aparelho ao professor e não volta a tê-lo, sem cópia da chave; **(2) expulsão** — o grupo precisa remover um integrante do acervo compartilhado de modo que ele não leia o que for escrito depois, sabendo que ele tem uma cópia local de tudo e pode estar offline; **(3) sucessão** — um integrante fica indisponível e o grupo precisa acessar algo que só ele escreveu.

**Pergunta sobre o futuro.** Quando o servidor não pode ler, *para onde vai a confiança*? A hipótese a testar é a do atrator da Seção 5: a de que a turma, para resolver perda, expulsão e sucessão, **reinventará um intermediário** — um colega guardião, uma cópia de chave com o monitor, um envelope no armário, uma senha combinada — e que fará isso em minutos, não em semanas, e em geral sem perceber que está desfazendo o que acabou de construir.

**Tecnologia emergente usada.** CRDT em produção (Automerge 3.0 ou Yjs) no navegador; cifragem no cliente com WebCrypto; sincronização por relay cego (o papel que o Beelay desempenha no desenho do Ink & Switch, aqui simulado); registro de passkey via WebAuthn numa página de brinquedo, para que o evento de perda atinja também a credencial e não só a chave de dados; e, opcionalmente, PGlite para os grupos que quiserem consultar o acervo localmente e sentir a diferença entre "buscar no servidor" e "buscar em casa".

**Atividade da turma.** Em três fases. **Construir** (35 min): em grupos, colocar o acervo para sincronizar e provar, olhando o log do relay, que o servidor não lê. **Quebrar** (30 min): os três eventos, cronometrados, com uma regra dura — nenhum grupo pode alterar o código durante esta fase, só combinar procedimentos; o que valer, vale como desenho de interação e não como engenharia. **Decantar** (25 min): cada grupo escreve, numa folha, o intermediário que acabou criando, com nome, poder e o que aconteceria se ele traísse ou desaparecesse; as folhas são coladas na parede e comparadas. O registro objetivo da oficina é um pequeno conjunto de números: tempo até o primeiro grupo ficar irrecuperavelmente sem acesso; quantos grupos resolveram a expulsão sem trocar a chave de todo mundo; quantos criaram um custodiante humano; e quantos, no caso da sucessão, optaram por não recuperar.

**Resultado de mudança de ideia.** O experimento falseia a tese principal do mapa se a turma resolver os três eventos **sem** criar intermediário — por exemplo, com custódia distribuída combinada de antemão, aceitando desde o início que soberania é rotina de manutenção e não propriedade. Se isso acontecer em mais da metade dos grupos, o atrator descrito na Seção 5 é um artefato do meu raciocínio, não uma propriedade da arquitetura, e os nós `e3.1.1`, `e5.2.1` e `e6.1.1` precisam ser rebaixados. Falseia a tese em sentido oposto — e de modo mais interessante — se a turma, uma vez tendo sentido o custo de perder acesso, **preferir explicitamente o servidor que lê**: nesse caso o cenário provável da Seção 9 deixa de ser inércia de mercado e passa a ser escolha informada, o que muda inteiramente o que se deve projetar. O que o experimento *não* testa, e é preciso dizer: nada sobre disposição a pagar, nada sobre escala, e nada sobre o que acontece quando o adversário não é o professor da disciplina.

## Seção 11 — Fontes

1. **Ink & Switch — *Local-first software: you own your data, in spite of the cloud*** (Martin Kleppmann, Adam Wiggins, Peter van Hardenberg, Mark McGranaghan, abril de 2019). `https://www.inkandswitch.com/essay/local-first/` — Sustenta a definição do campo, os sete ideais e a afirmação de que nenhuma tecnologia existente os satisfazia, usada na Seção 2. Confiabilidade: **alta** (fonte primária e canônica do conceito).
2. **Ink & Switch — Keyhive (caderno de projeto).** `https://www.inkandswitch.com/keyhive/notebook/` — Sustenta a Disrupção 2 e o "o que falta" das Disrupções 1 e 2: capacidades delegadas, CRDT de gestão de grupo, BeeKEM, Beelay, código pré-alfa desde março de 2025 com aviso contra uso em produção, e a lista de problemas abertos (revogação sob partição, desempenho com servidor cego, bifurcação cruzada). Confiabilidade: **alta** (primária; é o próprio projeto declarando seus limites).
3. **Automerge — *Automerge 3.0*** (julho de 2025). `https://automerge.org/blog/automerge-3/` — Sustenta a viabilidade recente do CRDT: queda de mais de 10× no uso de memória, 700 MB → 1,3 MB no exemplo do *Moby Dick*, carga de 17 horas → 9 segundos. Confiabilidade: **alta** (primária; números do próprio projeto, verificáveis).
4. **FOSDEM 2026 — trilha *Local-First, sync engines, CRDTs*** (1º de fevereiro de 2026). `https://archive.fosdem.org/2026/schedule/track/local-first/` — Sustenta a existência de comunidade e agenda: descrição da trilha, 22 sessões, projetos Yjs, Automerge+Keyhive, ElectricSQL, Jazz, NextGraph, Willow, Seed Hypermedia. Confiabilidade: **alta** para existência dos projetos e do evento; **nada** sobre adoção — limite registrado na Seção 8.
5. **FIDO Alliance — *Five Billion Passkeys: FIDO Alliance Reports Mainstream Global Usage on World Passkey Day 2026*** (7 de maio de 2026). `https://fidoalliance.org/fido-alliance-reports-accelerating-global-passkey-adoption-on-world-passkey-day-2026/` — Sustenta a recusa da passkey como disrupção-raiz (5 bi em uso; 90% de conhecimento, 75% de habilitação, 49% de uso regular em 11 mil consumidores de 10 países), o dado corporativo (68% implantando, 28% sem senha de fato, 57% ainda em métodos suscetíveis a phishing, 35% com menos tíquetes de redefinição) e a ausência de resposta para recuperação e portabilidade. Confiabilidade: **alta** quanto ao conteúdo declarado; leia-se com desconto de parte interessada — é o consórcio da tecnologia medindo a adoção da própria tecnologia.
6. **Corbado — *WebAuthn Credential Exchange Protocol (CXP) & Format (CXF)*.** `https://www.corbado.com/blog/credential-exchange-protocol-cxp-credential-exchange-format-cxf` — Sustenta o estado do padrão de portabilidade de credencial: CXF em rascunho de revisão desde março de 2025, CXP mirando padronização em 2026, transporte cifrado com HPKE, contribuição de Apple, Google, Microsoft, 1Password, Bitwarden e Dashlane, e o diagnóstico de aprisionamento no provedor. Confiabilidade: **média** (blog de fornecedor de autenticação; usado só para estado de padrão, não para adoção).
7. **Electric — *Electric is joining Databricks*** (11 de agosto de 2026). `https://electric.ax/blog/2026/08/11/electric-joining-databricks` — Sustenta o efeito `e1.2` e o argumento adversarial mais forte da Seção 7: a mudança de enquadramento de sincronização para aplicativos rumo a coordenação de agentes, a permanência do código aberto (Postgres Sync, PGlite, TanStack DB, Durable Streams) e o desligamento da Electric Cloud. Confiabilidade: **alta** (anúncio primário da própria empresa).
8. **The Register — *Google touts Private AI Compute for cloud confidentiality*** (12 de novembro de 2025). `https://www.theregister.com/2025/11/12/google_touts_private_ai_compute/` — Sustenta o contracaminho do enclave atestado: TEE em TPU (Titanium Intelligence Enclave) e AMD SEV-SNP, analogia com o Private Cloud Compute da Apple, e a conclusão da auditoria da NCC Group de que os dados ficam a salvo "de todos, exceto do Google". Confiabilidade: **alta** (veículo técnico com histórico, e cita auditoria de terceiro).
9. **TechCrunch — *Signal President Meredith Whittaker calls out agentic AI as having 'profound' security and privacy issues*** (7 de março de 2025, SXSW). `https://techcrunch.com/2025/03/07/signal-president-meredith-whittaker-calls-out-agentic-ai-as-having-profound-security-and-privacy-issues/` — Sustenta o "por que agora" da Disrupção 3: permissão equivalente a root, "provavelmente em texto claro, porque não há modelo para fazer isso de forma cifrada", limite do processamento no dispositivo e a "barreira hematoencefálica" entre aplicação e sistema operacional. Confiabilidade: **alta** para as citações; é opinião fundamentada de parte interessada, não medição.
10. **TechCrunch — *Apple challenges UK government's latest demand for iCloud backdoor*** (3 de agosto de 2026). `https://techcrunch.com/2026/08/03/apple-challenges-uk-governments-latest-demand-for-icloud-backdoor-report/` — Sustenta a cronologia do caso britânico: ordem secreta em fevereiro de 2025, desativação da Proteção Avançada de Dados para o Reino Unido, retirada da exigência mundial em agosto de 2025, novo aviso de capacidade técnica em outubro de 2025, contestação no Investigatory Powers Tribunal em agosto de 2026. Confiabilidade: **média-alta** (reportagem sobre processo sigiloso; a Apple não comentou).
11. **Euronews — *Why Chat Control 1.0 is the EU's most Orwellian law yet*** (10 de julho de 2026). `https://www.euronews.com/next/2026/07/10/chat-control-10-passed-the-european-parliament-through-the-back-door` — Sustenta o desfecho de julho de 2026: 314 votos pela rejeição contra os 360 exigidos, vigência até 3 de abril de 2028, emenda de exclusão do que é cifrado ponta-a-ponta com efeito prático disputado. Confiabilidade: **média** (peça jornalística com carga editorial explícita; usada para os fatos processuais, não para a avaliação).
12. **Patrick Breyer — *Chat Control: The EU's CSAM scanner proposal*** (consultado em 12 de setembro de 2026). `https://www.patrick-breyer.de/en/posts/chat-control/` — Sustenta a exclusão da cifragem ponta-a-ponta nos mandatos do Parlamento e do Conselho e o calendário dos trílogos; **e sustenta, involuntariamente, o sinal fraco da defasagem**: em setembro de 2026 ainda descrevia junho como previsto. Confiabilidade: **média** (acompanhamento militante, historicamente preciso quanto a procedimento, aqui comprovadamente desatualizado).
13. **Meta Newsroom — *Messaging Interoperability: WhatsApp enables third-party chats for users in Europe*** (novembro de 2025). `https://about.fb.com/news/2025/11/messaging-interoperability-whatsapp-enables-third-party-chats-for-users-in-europe/` — Sustenta o sinal fraco da interoperabilidade obrigatória: BirdyChat e Haiket como primeiros parceiros, exigência do mesmo nível de cifragem ponta-a-ponta, adesão opcional e desligável, grupos pendentes, escopo europeu, e o DMA como motor. Confiabilidade: **média** (declaração de parte obrigada a cumprir a norma que descreve).
14. **NIST IR 8547 (rascunho inicial) — *Transition to Post-Quantum Cryptography Standards*** (novembro de 2024). `https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf` — Sustenta o wildcard principal: força de 112 bits (RSA-2048, ECDSA P-256) "depreciada após 2030, proibida após 2035", e a meta de 2035 do NSM-10 para sistemas federais. Confiabilidade: **alta** (documento normativo primário; rascunho, e o texto o identifica como tal).
15. **Comissão Europeia — *EU Digital Identity Wallet Home*** (Digital Building Blocks). `https://ec.europa.eu/digital-building-blocks/sites/display/EUDIGITALIDENTITYWALLET/EU+Digital+Identity+Wallet+Home` — Sustenta o prazo da carteira: ao menos uma versão por Estado-membro, sobre especificações comuns, até 2026; atos de implementação em maio e julho de 2025; quadro de arquitetura na versão 2.0. Confiabilidade: **alta** (fonte oficial).
16. **EUR-Lex — Regulamento (UE) 2024/1183, de 11 de abril de 2024.** `https://eur-lex.europa.eu/eli/reg/2024/1183/oj` — Sustenta a base legal da carteira e a atribuição aos Estados-membros. Confiabilidade: **alta** (texto legal). Ressalva registrada: o artigo com os prazos não apareceu na parte efetivamente recuperada, e por isso o prazo de 2026 está ancorado na fonte 15, não nesta.
17. **UAI — *Nova atualização do Gov.br não vai mais pedir reconhecimento facial nem senha para acessar o aplicativo*** (19 de fevereiro de 2026). `https://www.uai.com.br/economia/2026/02/19/nova-atualizacao-do-gov-br-nao-vai-mais-pedir-reconhecimento-facial-nem-senha-para-acessar-o-aplicativo/` — Sustenta a nota sobre o Brasil: passkey no aplicativo gov.br, desbloqueio nativo do aparelho em lugar da prova facial própria, requisitos de Android 9+/iOS 16+, bloqueio de tela seguro e conta prata ou ouro. Confiabilidade: **média** (imprensa generalista; não foi possível confirmar em comunicado oficial na consulta feita).
18. **Budgero — página inicial.** `https://budgero.app/` — Sustenta o retrato do produto de nicho: cifragem no dispositivo antes da sincronização, código aberto AGPL-3.0, auto-hospedagem gratuita, nuvem a US$ 4/mês, ausência de número de usuários divulgado — e, por omissão, a correção do erro nº 2 da Seção 8. Confiabilidade: **média** (material do próprio fornecedor; usado para o que ele declara, não para o que ele alcança).
19. **Hacker News — *Show HN: Budgero – a privacy-first budgeting app*.** `https://news.ycombinator.com/item?id=45268970` — Sustenta o sinal fraco de demanda: 1 ponto e 1 comentário, no fórum que é o público-alvo natural do produto. Confiabilidade: **média** (métrica social ruidosa — um Show HN pode afundar por horário de publicação; serve como sinal, não como medição de demanda).

**Consultado e deliberadamente não citado:** reportagem da CNBC de 4 de agosto de 2026 sobre a ação da Apple (HTTP 403, não aberta); página de projeto do Ink & Switch sobre local-first (não contém os sete ideais); blogs de fornecedores de autenticação sobre recuperação de passkey (Authsignal, MojoAuth, Corbado FAQ, ToolsMint e outros), que apareceram em busca e não foram abertos — o argumento sobre recuperação está sustentado apenas pelo que a fonte 5 mostra e pelo que ela silencia.

## Seção 12 — Anexo: o levantamento bruto

### 12.1 Etapa 1 — Entrevista prévia de recorte

A skill exige entrevista com bloqueio absoluto antes da Etapa 2. Nesta rodada a execução é automatizada e não há interlocutor disponível para responder em tempo real; as respostas foram fornecidas de antemão junto com o acionamento, e são reproduzidas abaixo sem edição. **Registro do desvio:** o bloqueio da Etapa 1 não foi cumprido como interrupção — foi cumprido como leitura de respostas pré-fornecidas. Nenhuma resposta foi presumida ou inventada; onde a entrevista não cobria algo (o caso brasileiro da LGPD, por exemplo), o texto declara a premissa como assumida.

| Pergunta da skill | Resposta recebida |
|---|---|
| 1. Tema da análise | "Soberania de dados: local-first, ponta-a-ponta e o fim da senha" (tema 17 de 19 da disciplina; família "Pessoas e dados") |
| 2. Horizonte temporal | 2031 |
| 3. Público-alvo | Quem projeta mídia e interação |
| 4. Recorte geográfico | Global, com uma nota sobre o Brasil |
| 5. Premissas descartadas e viés | Descartado de início: o que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão. Disrupção suspeita: nenhuma — descubra. Viés: neutro. Ideias óbvias a excluir: as que servem para qualquer tema. |
| 6. Tecnologias/vetores de interesse | Nenhum vetor imposto; profundidade de três ordens; modo "a partir de uma inovação/tema, não de um setor" |

Instruções operacionais adicionais recebidas, reproduzidas: *"O que me faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia não rompe nada (só melhora o que existe)."* · *"Busca na web: use WebSearch e WebFetch de verdade; só cite o que abriu. Não invente fontes."* · *"Não faça perguntas de volta. Não pare para pedir confirmação. Se algo não estiver definido, assuma e declare."* · Login do autor: `kvv`. Skill: `futurizacao-kvv`. Zona de interesse: "Pessoas e dados".

**Consequência direta do critério de mudança de ideia.** O critério foi acionado no meio da execução, e contra o enunciado do tema. A evidência da fonte 5 mostra a passkey **passada da maioria inicial** (75% de habilitação, 49% de uso regular, 5 bilhões em uso) e mostra também que ela **não rompe nada estruturalmente** — o registro continua na parte confiante. Os dois gatilhos combinados, num mesmo objeto. A passkey foi então retirada das disrupções-raiz e movida para o filtro de recusa, com o "fim da senha" reenquadrado como *mudança de titularidade da conta*, não como mudança de método de login. Este é o único ponto em que o mapa contraria o enunciado do tema, e é por exigência explícita da instrução recebida.

### 12.2 Etapa 2 — Filtro anti-tecnologia madura: rodadas descartadas

**Rodada A (descartada na íntegra).** Primeira tentativa de disrupções, colada do enunciado do tema: (1) local-first; (2) ponta-a-ponta; (3) passkeys. Descartada por três motivos. *Passkeys*: maduro, por dado (ver 12.1). *Ponta-a-ponta*: maduro em mensageria desde meados da década de 2010, exigido até de parceiros de interoperabilidade pelo DMA (fonte 13) — só é emergente quando aplicado a **aplicativo de acervo pessoal com servidor cego**, e nesse caso o objeto é a arquitetura, não a cifragem. *Local-first*: o rótulo é amplo demais para ser disrupção; contém desde cache offline (maduro) até autorização por capacidade (pré-alfa). Reformulado em três eixos que se distinguem por **onde a ruptura dói**: fonte da verdade e cegueira (D1), titularidade e autorização (D2), permissão e direção do movimento da computação (D3).

**Rodada B (descartada).** Versão em que a terceira disrupção era "IA local sobre acervo privado". Descartada por invasão de escopo: o modelo rodando no dispositivo é o tema 16, e a fronteira está declarada no enunciado. Reaproveitada apenas como *consequência*: a IA entra como o consumidor voraz de acervo que torna a permissão executável necessária (D3, `e6`).

**Rodada C (descartada).** Versão em que a segunda disrupção era "identidade autossoberana / DIDs e credenciais verificáveis". Descartada por dois motivos: parte do vocabulário arrasta uma década de promessas não cumpridas, e a peça com evidência de movimento real em 2026 não é o DID e sim a combinação de capacidade criptográfica (fonte 2) com credencial portável (fonte 6) e carteira com prazo legal (fontes 15 e 16). Reformulada como "a conta deixa de ser registro de terceiro".

**Recusas formais registradas** (Seção 4): passkeys/WebAuthn como método; cifragem ponta-a-ponta em mensageria; backup cifrado; HTTPS/TLS; segundo fator por SMS ou autenticador; login federado; cofre de senhas sincronizado; cache offline; sincronização de arquivos; auto-hospedagem de monolito em contêiner; "IA que resume seus dados localmente".

### 12.3 Efeitos gerados e cortados da roda

Cortados por serem genéricos — servem a qualquer tema e por isso foram excluídos por instrução explícita da entrevista:

- "Aumenta a preocupação das pessoas com privacidade."
- "Empresas passam a usar privacidade como diferencial de marketing."
- "Surgem novas startups no setor."
- "A regulação tenta acompanhar a tecnologia e fica atrás."
- "Profissionais precisam se atualizar; surgem novas formações."
- "Cresce a desigualdade entre quem tem e quem não tem acesso à tecnologia."

Cortados por pertencerem a temas vizinhos: "modelos pequenos ficam bons o suficiente para rodar no celular" (tema 16); "agentes ganham identidade própria e credencial de máquina" (tema 2); "navegador vira plataforma de aplicação pesada" (tema 15).

Cortados por serem passo de execução e não efeito: "bibliotecas de CRDT ganham mais contribuidores"; "documentação melhora"; "aparecem mais tutoriais".

Cortados por duplicação, após fusão: "o servidor não pode fazer busca" e "a busca migra para o cliente" → fundidos em `e2.1`; "suporte não consegue ver a conta do cliente" e "muda a fila de suporte" → fundidos em `e3.1.2`.

Mantido apesar de incômodo, e a razão: `e6.1.1` ("a infraestrutura local-first é recrutada para o sandbox do agente") contraria a tese do mapa e tem a melhor evidência de todas (fonte 7). Manter um efeito que enfraquece o próprio argumento é o teste mínimo de honestidade da roda.

### 12.4 Log das iterações

1. Leitura de `SKILL.md`, `DUVIDAS.md` e da estrutura de `TESTE.md` em `.../skill-professor/turma/kvv/`, para fixar formato de saída e o padrão de autoauditoria que a própria skill documenta (o exemplo de "número redondo sem fonte" do `DUVIDAS.md` orientou o critério da Seção 8, item 7).
2. Registro das respostas da entrevista pré-fornecidas (12.1) e da forma como o bloqueio da Etapa 1 foi cumprido.
3. Busca: adoção de passkeys 2026 → relatório da FIDO aberto → **gatilho de mudança de ideia acionado**; rodada A descartada.
4. Busca: estado do local-first e de motores de sincronização em 2026 → trilha do FOSDEM 2026 aberta; vários blogs de qualidade desconhecida deixados de fora.
5. Busca: Keyhive/Beehive → caderno do Ink & Switch aberto → pré-alfa e problemas abertos confirmados; base do "o que falta" das Disrupções 1 e 2.
6. Busca e abertura: Automerge 3.0 (números de memória e carga).
7. Busca: regulação de cifragem na UE → Euronews e página de Breyer abertas; **defasagem da segunda detectada e convertida em sinal fraco**.
8. Busca: Reino Unido / Proteção Avançada de Dados → CNBC retornou 403, não citada; TechCrunch aberta; **correção da afirmação errada sobre restauração do recurso**.
9. Busca: portabilidade de credencial → Corbado aberta (CXP/CXF, HPKE, estado do rascunho).
10. Busca: Brasil → passkey no gov.br (fevereiro de 2026) aberta; ausência de fonte sobre regulamentação do art. 18 da LGPD registrada como premissa declarada.
11. Busca: contracaminho do enclave → The Register aberta; frase da NCC Group adotada como epígrafe do argumento adversarial.
12. Busca: agentes e acesso ao acervo → TechCrunch/SXSW aberta (citações de Whittaker).
13. Busca: motores de sincronização e mercado → anúncio da Electric aberto → `e1.2` passa a ser o único nó de confiança alta, **contra** a tese do mapa.
14. Busca: pós-quântico → PDF do NIST IR 8547 baixado e lido localmente (a leitura via navegação falhou; o texto foi extraído do arquivo) → "depreciado após 2030, proibido após 2035" confirmado textualmente; base do wildcard principal.
15. Busca: carteira de identidade europeia → páginas da Comissão e do EUR-Lex abertas; prazo ancorado na fonte 15, com a limitação da 16 registrada.
16. Busca: produto de nicho → página do Budgero e discussão no Hacker News abertas → **correção do erro sobre "IA com LLM local"** e obtenção do sinal fraco de demanda (1 ponto, 1 comentário).
17. Montagem da roda: 6 efeitos de primeira ordem (2 por disrupção), 12 de segunda, 18 de terceira (seis nós com dois filhos, seis com um), com identificadores únicos, e `sinal`/`prazo`/`confianca` atribuídos item a item.
18. Teste adversarial escrito **depois** da roda e aplicado de volta a ela: resultado prático foi o rebaixamento de confiança em `e5` e `e6` e a nota explícita de que `e2.2.1` e `e5.2.1` podem estar lentos, não rápidos.
19. Reconciliação final: conferência de que os números do cabeçalho batem com o bloco YAML (3/6/12/18), que as 19 fontes da Seção 11 são todas fontes efetivamente abertas, e que nenhuma afirmação quantitativa do texto carece de fonte listada.
