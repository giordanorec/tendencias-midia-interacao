---
tema: "Soberania de dados: local-first, ponta-a-ponta e o fim da senha"
slug: soberania-de-dados-local-first-ponta-a-ponta-e-o-fim-da-senha
autor_login: grec
zona_de_interesse: Pessoas e dados
data: 2026-09-22
horizonte: 2036
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 15
efeitos_ordem_2: 22
efeitos_ordem_3: 22
tecnologias_citadas: [passkeys, WebAuthn, FIDO2, Credential Exchange Protocol (CXP), Credential Exchange Format (CXF), HPKE, iCloud Keychain, Google Password Manager, Security Domain Secret, Windows Hello for Business, Recovery Contacts, Advanced Data Protection, iMessage, RCS Universal Profile 3.0, Messaging Layer Security (MLS), Signal, WhatsApp Private Processing, TEE, Confidential Virtual Machines, OHTTP, CRDT, Automerge, Yjs, Loro, LiveStore, ElectricSQL, Corrosion, SQLite, AT Protocol, DID PLC, PDS, goat, PDS MOOver, EUDI Wallet, eIDAS 2.0, FIDO Server, Jornada Sem Redirecionamento (JSR), Pix, Open Finance, budgero, kostos, accountant24, TaxHacker, wilson, mailquill, argon2, "@simplewebauthn", Rodauth, better-auth, Asterex, Shamir Secret Sharing]
fontes: 23
confianca: media
experimento: "O cofre sem porta dos fundos — um app de finanças da turma, local-first (CRDT no navegador), com login só por passkey e sincronia cifrada por um relé que não lê, testado em sala com três simulações: perder o aparelho, recuperar pela ajuda de colegas e herdar a conta de alguém"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Até 2036, a passkey não é mais novidade — em 2026, 75% das pessoas pesquisadas pela FIDO em dez países já a ativaram em alguma conta, e por isso ela entra aqui como contexto, não como raiz. O que ainda rompe é o que vem atrás dela, em quatro frentes. Primeira: a conta deixa de ter senha como caminho de volta, e a recuperação — hoje um link por e-mail — passa a depender de aparelho, de pessoa de confiança e de verificação de rosto e documento, que vira o novo alvo de golpe. Segunda: a cifragem ponta-a-ponta sai da mensagem e chega ao backup, ao documento e à IA em enclave, e o Estado responde trocando o alvo do servidor para o aparelho (o Reino Unido já tirou a proteção avançada do iCloud de novos usuários). Terceira: o dado local-first passa a morar no aparelho e o servidor vira relé de sincronia, o que faz o software sobreviver ao fornecedor, mas torna a perda do aparelho definitiva. Quarta: identidade e credencial passam a sair com a pessoa — passkeys que migram cifradas entre ecossistemas, contas de rede social que mudam de servidor, carteiras de identidade no celular. Para quem projeta mídia e interação, o trabalho se desloca da tela de login para o desenho da perda, da herança e da prova de quem se é.

## 2. O tema

**O que é.** Três rupturas na arquitetura do software pessoal que, juntas, tiram da empresa a posse do dado, da conta e da identidade: **local-first** (o original mora no aparelho e sincroniza; o servidor não é a fonte da verdade), **ponta-a-ponta** (quem guarda o dado não consegue lê-lo) e **o fim da senha** (autenticação por chave criptográfica guardada no aparelho, sem segredo compartilhado com o site).

**Onde encosta em mídia e interação.** Em quatro pontos: (1) a **recuperação e a herança** viram tela, fluxo e serviço a projetar, porque o provedor deixa de conseguir "devolver" a conta; (2) a **interface da confiança** — cadeado, estado de sincronia, conflito de edição, "o dado saiu do aparelho" — vira elemento de design com consequência; (3) a **personalização e a moderação**, que dependem de o servidor ler, mudam de lugar; (4) a **portabilidade** da audiência, do histórico e da credencial muda o poder de negociação de quem produz conteúdo.

**Por que mapa, e não estado da arte.** Porque o componente técnico já existe e está padronizado (WebAuthn, CXP, MLS, CRDTs); o que não está decidido é quem absorve o custo do que o servidor deixa de fazer — atendimento, recuperação, moderação, investigação policial, personalização. Essas são decisões de segunda e terceira ordem, com atores que têm incentivo para bloquear.

**Premissas da rodada (briefing).** Horizonte 2036; público: quem projeta mídia e interação; recorte global com nota sobre o Brasil; viés neutro; descartado de início o que já é comum em produto de massa (régua da disciplina). Falseador declarado pelo autor: evidência de que a adoção já passou da maioria inicial, ou de que a tecnologia só melhora o que existe. **Esse falseador disparou na âncora**: a passkey como opção de login está em maioria nos países pesquisados pela FIDO (seção 3), e foi recusada como raiz (seção 4). A fronteira com os vizinhos foi mantida: o modelo rodando localmente é o tema 16; identidade de agentes é o tema 2.

## 3. Onde isso está hoje

### O que já existe e funciona

- **Passkeys em escala.** A FIDO Alliance estima 5 bilhões de passkeys em uso (maio de 2026; página da FIDO lida, mas bloqueia o verificador — ver 12.4). O levantamento, feito pela Sapio Research em abril de 2026 com 11 mil consumidores em dez países (EUA, Reino Unido, França, Alemanha, Austrália, Singapura, Japão, Coreia do Sul, China e Índia), dá 90% de conhecimento, **75% com passkey ativada em ao menos uma conta** e 49% que a usam sempre ou quase sempre que podem [2]. Nas empresas, 68% estão implantando para funcionários e 28% dizem estar sem senha na maior parte da força de trabalho [2].
- **Contas sem senha por padrão.** A Microsoft tornou toda conta nova *passwordless* por padrão em maio de 2025; o usuário antigo pode apagar a senha à mão. A empresa relatou quase um milhão de passkeys registradas por dia, taxa de sucesso de login de ~98% com passkey (cerca de três vezes a da senha) e ~7 mil ataques a senha por segundo em 2024 [3].
- **Recuperação por pessoas.** O Google oferece *Recovery Contacts*: até dez pessoas de confiança que ajudam a confirmar a identidade sem acesso à conta [15].
- **Portabilidade de passkey.** A FIDO publicou o CXF (formato) e o CXP (protocolo, com HPKE ponta-a-ponta); Apple implementou a transferência no mesmo aparelho no iOS/macOS 26, e contribuem Google, Microsoft, 1Password, Bitwarden e Dashlane. Passkeys com contador escondido não são transferíveis, e o site (relying party) não participa da migração [4].
- **Ponta-a-ponta além do mensageiro.** RCS cifrado ponta-a-ponta entre iPhone e Android, sobre MLS (GSMA Universal Profile 3.0), em beta desde 12/05/2026, dependente de operadora dos dois lados; metadados continuam coletados e o backup na nuvem pode ficar sem cifra [10].
- **IA sobre dado cifrado sem o provedor ler.** O WhatsApp Private Processing (anunciado em 29/04/2025) processa resumos e sugestões em máquinas virtuais confidenciais (TEE), com OHTTP por relé de terceiro para esconder o IP e compromisso de publicar as imagens binárias e o código de atestação; a Meta afirma que nem ela nem o WhatsApp conseguem acessar as mensagens [7].
- **Local-first como engenharia disponível.** O ensaio de Kleppmann, Wiggins, van Hardenberg e McGranaghan (Ink & Switch, abril de 2019) define sete ideais — de "sem spinner" a "posse e controle do usuário" — e aposta em CRDTs [1]. Em 2026, Yjs tem ~920 mil downloads semanais no npm, Automerge ~85 mil e Loro ~12 mil (abril de 2026) [14]. O boletim Local-First News de janeiro de 2026 registra LiveStore (event sourcing sobre SQLite), Corrosion (Fly.io, SQLite com CRDT), apps como Asterex (gerenciador de senhas com conhecimento zero e armazenamento no aparelho) e a migração de desenvolvedores de Firebase/Supabase para alternativas [18].
- **Identidade de rede social que muda de servidor.** No AT Protocol (Bluesky), a conta migra de PDS exportando o repositório (arquivo CAR), os blobs e atualizando o DID PLC; há "migração adversarial" para quando o servidor antigo não colabora, e uma janela de 72 h para recuperação da identidade se a chave se perder [12].
- **Brasil — FIDO por exigência do regulador.** A Jornada Sem Redirecionamento (JSR) do Pix, obrigatória desde janeiro de 2026 para as instituições participantes, exige FIDO Server para vincular o aparelho e autenticar por biometria no momento do pagamento [17]. O celular é o canal de 78% das 240,8 bilhões de transações bancárias de 2025 [16].
- **Os sinais da turma.** Existem e estão ativos em 22/09/2026: `budgero` ("local-first, self-hostable, end-to-end encrypted", 21 estrelas) [20], `kostos` ("no accounts, end-to-end encrypted, works offline, self-hostable", 43 estrelas) [21], `accountant24` (agente de IA para finanças pessoais, 54 estrelas) [22]. Como escala de comparação, `TaxHacker` (contabilidade com IA *self-hosted*) tem 6.715 estrelas [23].

### O que existe e ainda não funciona

- **O chaveiro sincronizado tem um ponto único.** Em agosto de 2026, a Unit 42 mostrou três ataques ao Google Password Manager no Chrome, incluindo a extração do *Security Domain Secret* (32 bytes) que decifra todas as passkeys sincronizadas; não há como rotacionar nem revogar essa chave. Todos exigem malware prévio no aparelho [9]. No mesmo mês, SpecterOps (CVE-2026-34348) e Dirk-jan Mollema mostraram uso de chave do Windows Hello for Business por malware em sessão aberta [8].
- **A senha continua como porta dos fundos.** 57% das organizações ainda usam método *phishable* como login primário (FIDO 2026, página bloqueada — ver 12.4); 47% dos consumidores abandonam compra quando esquecem a senha [2].
- **Carteira de identidade europeia.** Todo Estado-membro precisa oferecer uma EUDI Wallet até dezembro de 2026, mas menos de um terço cumpre o critério de prontidão; na Alemanha, o gargalo é a adesão de quem aceita (≈115 organizações testando ≈150 casos no *sandbox*) [13].
- **Migração de identidade descentralizada é arriscada.** A documentação do AT Protocol avisa que a migração pode trancar a pessoa para fora sem que a Bluesky consiga ajudar [12].

### Quem constrói

FIDO Alliance e os três donos de sistema (Apple, Google, Microsoft) na autenticação; gerenciadores independentes (Bitwarden, Dashlane, 1Password) na portabilidade; Meta e Signal na cifragem de comunicação; Ink & Switch, a comunidade de Yjs/Automerge e empresas de motor de sincronia no local-first; Bluesky no AT Protocol; Comissão Europeia e Estados-membros na carteira; Banco Central do Brasil na JSR. Do outro lado, com incentivo para frear: Home Office britânico, Conselho da UE, forças policiais.

### Números de adoção

| O quê | Número | Fonte |
|---|---|---|
| Passkeys em uso | 5 bilhões (estimativa FIDO, 05/2026) | página FIDO (12.4) |
| Consumidores com passkey em ≥1 conta | 75% (10 países) | [2] |
| Empresas sem senha na maior parte da força de trabalho | 28% | [2] |
| Passkeys novas por dia na Microsoft | quase 1 milhão | [3] |
| Yjs / Automerge / Loro, downloads semanais | ~920 mil / ~85 mil / ~12 mil | [14] |
| Estados da UE prontos para a EUDI Wallet | menos de 1/3 | [13] |
| Transações bancárias por celular no Brasil (2025) | 78% de 240,8 bi | [16] |
| Usuários de apps local-first de consumo | sem número encontrado | — |
| Contas Bluesky em PDS próprio | sem número encontrado | — |

### O ambiente político

- **Reino Unido.** A Apple deixou de oferecer Advanced Data Protection a novos usuários britânicos; dez categorias (backup, Drive, Fotos, Notas etc.) perdem a cifra ponta-a-ponta, enquanto iMessage, FaceTime e 15 categorias padrão continuam cifradas [5]. O Signal repetiu que sai do Reino Unido e da Suécia antes de enfraquecer a cifra [19].
- **União Europeia.** O "Chat Control 1.0" foi reinstituído em 23/07/2026 até 03/04/2028, permitindo varredura voluntária em comunicação *não* cifrada, com exclusão explícita da ponta-a-ponta; o regulamento permanente segue travado, com negociação prevista para setembro de 2026 [6].
- **Brasil.** No STF, a ADI 5527 e a ADPF 403 (bloqueios do WhatsApp de 2015–2016) têm votos dos relatores Rosa Weber e Edson Fachin, de 2020, afastando interpretação do Marco Civil que obrigue a entregar conteúdo cifrado ponta-a-ponta; o julgamento está suspenso desde o pedido de vista de Alexandre de Moraes (IP.rec, lido — ver 12.4). O ITS Rio sustentou no processo que a cifra torna o acesso tecnicamente impossível até para o provedor [11].

## 4. As disrupções-raiz

**Recusas pelo critério de maturidade (§2).**
- *Candidato "passkeys como forma de login" recusado como raiz: adoção em maioria nos dez países da FIDO desde 2026 (75% ativaram em ao menos uma conta) [2]; tratado como contexto na seção 3.* É aqui que o falseador do briefing disparou.
- *Candidato "cifra ponta-a-ponta em mensageiro" recusado: maioria desde o WhatsApp (padrão desde 2016, memória — ver seção 8) e iMessage; contexto.*
- *Candidatos "backup cifrado", "HTTPS", "2FA por SMS", "login com Google" recusados: maduros, conforme a régua do tema.*
- *Candidato "CRDT como biblioteca" recusado como raiz: é componente, não ruptura; entra como pré-condição de d3.*

### d1 — A senha deixa de existir como caminho de volta, e a recuperação da conta sai do e-mail de redefinição para o aparelho, as pessoas de confiança e a prova de rosto e documento

1. **O que rompe.** O "esqueci minha senha" como recuperação universal, barata e automática — e com ele a suposição de que o provedor sempre consegue devolver a conta. A passkey como *opção* é madura; a conta **sem** senha nenhuma, em que a volta depende de outra coisa, não é.
2. **Por que agora.** Passkey sincronizada nos três sistemas, conta nova sem senha por padrão na Microsoft desde 2025 [3], contatos de recuperação no Google [15] e 28% das empresas já sem senha na maior parte da força de trabalho [2]. Há cinco anos não havia base instalada para tirar a senha sem deixar gente de fora.
3. **Onde está na difusão.** Adoção precoce (<10% das contas de consumo sem senha nenhuma; sem número encontrado para consumo, inferido dos 57% de empresas ainda com método *phishable* primário).
4. **O que falta.** Serviços apagarem a senha das contas antigas; um padrão de recuperação que não volte ao SMS; resposta para quem tem um aparelho só ou compartilhado; resposta para herança.

### d2 — O servidor cego: a cifra ponta-a-ponta sai da mensagem e chega ao backup, ao documento e à IA, e quem guarda o dado deixa de poder lê-lo

1. **O que rompe.** O modelo em que o servidor lê o que guarda — para personalizar, anunciar, moderar e atender ordem judicial. Mensageiro cifrado é maduro; **backup, arquivo e IA** cifrados por padrão, não.
2. **Por que agora.** MLS padronizado e em uso entre iPhone e Android [10]; computação confidencial (TEE, CVM) usada em produção para IA sobre mensagem cifrada [7]; e a pressão contrária explícita (Reino Unido [5], UE [6]) mostra que o tema passou de técnico a político.
3. **Onde está na difusão.** Adoção precoce para backup cifrado opcional (ADP é *opt-in*); produto de nicho para IA em enclave; demo pública para moderação sem leitura.
4. **O que falta.** Backup cifrado **por padrão** nos dois grandes sistemas; auditoria independente de enclave funcionando na prática; resolução jurídica (STF no Brasil, CSAR na UE, Online Safety Act no Reino Unido).

### d3 — Local-first: o dado passa a morar no aparelho e o servidor vira relé de sincronia, em vez de fonte da verdade

1. **O que rompe.** O SaaS em que "cancelar a assinatura" ou "a empresa fechou" significa perder o trabalho; a retenção por posse do dado; o suporte que resolve tudo no banco do servidor.
2. **Por que agora.** CRDTs maduros e rápidos (Yjs com ~920 mil downloads semanais [14]), motores de sincronia sobre SQLite [18], e o custo visível de depender de terceiro. O ensaio é de 2019 [1]; o que mudou foi o ferramental, não a ideia.
3. **Onde está na difusão.** Produto de nicho (apps como budgero, kostos, Asterex; nenhum número de usuário de consumo encontrado).
4. **O que falta.** Um app de massa em que o original more no aparelho; modelo de negócio de sincronia que pague a conta; resposta para a perda do aparelho sem cópia no servidor.

### d4 — A identidade e a credencial passam a sair com a pessoa: passkeys que migram, contas que mudam de servidor, carteira de identidade no aparelho

1. **O que rompe.** O aprisionamento por identidade: trocar de ecossistema custa as credenciais, sair de uma rede social custa a audiência, provar quem se é custa entregar o documento inteiro a cada loja.
2. **Por que agora.** CXP/CXF publicados e implementados por Apple e Android [4]; migração de conta no AT Protocol fora de beta [12]; prazo legal da EUDI Wallet em dezembro de 2026 [13]; JSR com FIDO obrigatória no Pix desde janeiro de 2026 [17].
3. **Onde está na difusão.** Produto de nicho (migração atproto, CXP entre gerenciadores) a adoção precoce (carteira de identidade onde já há app de governo).
4. **O que falta.** Gerenciadores e sites aceitando CXP de ponta a ponta; quem aceita a carteira (o gargalo alemão [13]); migração de identidade descentralizada que não tranque a pessoa para fora [12].

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "A senha deixa de existir como caminho de volta, e a recuperação da conta sai do e-mail de redefinição para o aparelho, as pessoas de confiança e a prova de rosto e documento"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O fluxo esqueci-minha-senha é substituído por recuperação via segundo aparelho, contatos de confiança ou prova de rosto e documento, e a recuperação vira a parte mais cara do cadastro"
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Serviços passam a exigir, no cadastro, um segundo aparelho ou uma pessoa de confiança antes de liberar a conta, e quem tem um celular só fica numa conta de segunda classe"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "O celular compartilhado da família vira problema de projeto, porque a conta de uma pessoa fica presa ao rosto ou à digital de outra"
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "A verificação de rosto e documento vira a porta dos fundos de toda conta sem senha, e o golpe migra do phishing de senha para o atendimento de recuperação"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Serviços críticos adotam recuperação lenta, com dias de espera e aviso a todos os aparelhos, como defesa contra rosto e voz sintéticos no fluxo de recuperação"
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O chaveiro sincronizado do sistema operacional vira ponto único de falha de toda a vida digital da pessoa"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "A suspensão de uma conta Apple ou Google passa a cortar o acesso a todos os serviços onde a pessoa entra por passkey sincronizada, e o bloqueio de plataforma vira sanção em cascata"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Órgãos de defesa do consumidor passam a tratar a suspensão da conta de chaveiro como corte de serviço essencial e a exigir a entrega das credenciais em formato de exportação"
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Atacantes deixam de roubar senhas e passam a usar, por malware, a sessão já verificada no próprio aparelho da vítima"
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "Bancos passam a exigir atestado de integridade do aparelho antes de aceitar a passkey, e aparelhos antigos, com root ou de sistema livre ficam fora dos serviços críticos"
                sinal: fraco
                prazo: 2032
                confianca: media
      - id: e3
        ordem: 1
        efeito: "A herança digital deixa de passar pela senha anotada no papel e passa a depender de contato de legado registrado em vida em cada plataforma"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Famílias perdem fotos e documentos de quem morreu sem contato de legado, porque sem senha e com cifra ponta-a-ponta não há segredo a herdar nem provedor capaz de abrir"
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Advogados de inventário e cartórios passam a oferecer custódia de chave de recuperação, com a chave física guardada junto ao testamento"
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "Serviços mantêm senha ou código por SMS como caminho de volta escondido por anos, porque o atendimento de quem perdeu o aparelho custa mais que o ganho de segurança, e a senha acaba só na tela"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Forçar o fluxo de login para o caminho de volta com senha ou SMS vira a técnica padrão de ataque contra contas com passkey"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Seguradoras de risco cibernético passam a exigir, para cobrir empresas, que contas de administrador não tenham nenhum caminho de volta por senha"
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: "O servidor cego: a cifra ponta-a-ponta sai da mensagem e chega ao backup, ao documento e à IA, e quem guarda o dado deixa de poder lê-lo"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "Recursos de IA sobre dado pessoal passam a rodar em enclave auditável na nuvem, e o nem-nós-lemos vira alegação técnica verificada por terceiros, não promessa de política de privacidade"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "A atestação remota do enclave aparece na interface como estado verificável, e pesquisadores independentes passam a fazer parte da cadeia de confiança do produto"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "A quebra de um enclave muito usado expõe de uma vez o dado de milhões de pessoas, e o desenho volta a preferir o processamento no próprio aparelho"
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "A personalização por perfil comportamental montado no servidor perde a matéria-prima nos serviços cifrados, e a publicidade neles migra para contexto e para o que a pessoa declara"
            sinal: fraco
            prazo: 2033
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Pessoas passam a ceder a anunciantes um perfil calculado no próprio aparelho, em troca de desconto, sem que o dado bruto saia"
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "Governos respondem ao servidor cego trocando o alvo do servidor para o aparelho, com varredura no cliente, verificação de idade no sistema e ordens secretas contra recursos de cifra"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "A cifra do backup passa a variar por país, e o mesmo aparelho protege mais ou menos o dado conforme a região da conta"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Pessoas e empresas passam a escolher a jurisdição da conta e do provedor como decisão de segurança, e a conta de dado em país de sigilo forte vira produto de classe média"
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Mensageiros cifrados saem de mercados inteiros em vez de ceder, e a disponibilidade de cifra ponta-a-ponta vira mapa geopolítico"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "O julgamento pendente no STF sobre bloqueio e cifra passa a decidir se o Brasil segue o modelo britânico de acesso ao aparelho ou o de sigilo técnico dos votos de 2020"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "A moderação em espaços cifrados passa a depender de denúncia feita pelo participante, com o trecho revelado pelo próprio cliente, porque o servidor não vê o conteúdo"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Plataformas de comunidade que adotam cifra ponta-a-ponta escolhem entre limitar o tamanho dos grupos e manter um modo aberto não cifrado para o público"
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "O tamanho máximo de grupo cifrado vira parâmetro negociado entre reguladores e plataformas, como hoje se negocia faixa etária"
                sinal: fraco
                prazo: 2034
                confianca: baixa
  - disrupcao: "Local-first: o dado passa a morar no aparelho e o servidor vira relé de sincronia, em vez de fonte da verdade"
    efeitos:
      - id: e8
        ordem: 1
        efeito: "Ferramentas de criação e de finanças pessoais passam a ser vendidas como software que continua funcionando se a empresa fechar, e sobreviver ao fornecedor vira argumento de venda"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "A assinatura desloca-se de acesso ao dado para serviço de sincronia e backup, e o preço cai em direção ao custo do relé, porque o servidor não guarda o original"
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "A sincronia vira serviço intercambiável, oferecido por provedores de relé independentes do app, e o app deixa de escolher onde o dado sincroniza"
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: "O conflito de edição entre aparelhos vira estado visível da interface, com duas versões lado a lado, porque o CRDT funde o dado mas não decide a intenção"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: "O histórico ramificado herdado do código chega a documentos, planilhas e peças de mídia de uso comum, e a versão passa a ser objeto que se mostra e se discute"
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: "Agentes de IA que operam sobre finanças e documentos da pessoa passam a rodar sobre a cópia local do dado, sem enviá-lo ao provedor do app"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "Bancos e fintechs perdem a exclusividade da categorização e da análise do extrato, porque a análise passa a acontecer no aparelho a partir do extrato exportado"
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "O Open Finance brasileiro sofre pressão para entregar o dado à própria pessoa, no aparelho dela, e não só a instituições autorizadas"
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: "Quem perde o aparelho sem sincronia configurada perde o dado de verdade, e o não-temos-acesso deixa de ser falha do suporte e passa a ser propriedade do produto"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "Apps local-first voltam a oferecer cópia no servidor com chave em custódia do fornecedor como opção padrão, porque atender a perda de dado custa mais que a promessa de soberania"
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: "Local-first vira rótulo de marketing em apps que guardam o original no servidor, e aparecem testes independentes do tipo funciona-com-o-servidor-desligado"
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: "Plataformas de SaaS colaborativo perdem o dado acumulado no servidor como barreira de saída, porque o documento sai inteiro, com histórico, em formato aberto"
        sinal: fraco
        prazo: 2032
        confianca: baixa
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "Incumbentes de SaaS adotam motor de sincronia local mas mantêm o formato fechado, capturando a velocidade do local-first sem a portabilidade"
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: "A disputa por portabilidade passa de baixe-seu-dado para abra-seu-formato, e autoridades de concorrência passam a tratar formato de sincronia como interoperabilidade exigível"
                sinal: fraco
                prazo: 2035
                confianca: baixa
  - disrupcao: "A identidade e a credencial passam a sair com a pessoa: passkeys que migram entre ecossistemas, contas que mudam de servidor, carteira de identidade no aparelho"
    efeitos:
      - id: e12
        ordem: 1
        efeito: "Trocar de ecossistema ou de gerenciador deixa de custar as credenciais, porque as passkeys migram cifradas pelo protocolo de troca da FIDO"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: "Gerenciadores de credenciais independentes voltam a competir com o chaveiro do sistema, porque a saída deixou de ser porta trancada"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: "A custódia de credenciais vira atividade regulada como conta de pagamento, com portabilidade obrigatória análoga à portabilidade numérica do telefone"
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: "O entrar-com-Google-ou-Apple perde a função de identidade e fica só com a de conveniência, porque cada site passa a ter sua própria passkey sem intermediário"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: "Provedores de identidade respondem empacotando a passkey no próprio chaveiro e no login federado, e o intermediário se desloca do login para a sincronia da chave"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: "O poder de encerrar a identidade de alguém migra de cada site para quem sincroniza a chave, e a sanção de plataforma ganha alcance de exílio digital"
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: "Redes sociais em protocolo de identidade portátil deixam a pessoa levar seguidores e histórico para outro servidor, e sair de uma rede deixa de zerar a audiência"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: "Criadores de conteúdo passam a negociar com plataformas a partir da audiência que carregam, e a plataforma compete por hospedagem e moderação, não pela posse do grafo social"
            sinal: fraco
            prazo: 2033
            confianca: baixa
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: "A moderação vira camada contratável separada da hospedagem, e a pessoa escolhe o moderador como escolhe um filtro"
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e14.2
            ordem: 2
            efeito: "Perder a chave de rotação da identidade descentralizada passa a significar perder a identidade inteira, sem instância de apelação, e a custódia da chave volta aos provedores"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e14.2.1
                ordem: 3
                efeito: "Hospedeiros de identidade que guardam a chave pela pessoa viram o novo intermediário de fato, reproduzindo a plataforma com outro nome"
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e15
        ordem: 1
        efeito: "A carteira de identidade no aparelho põe credencial de Estado e de banco sob a mesma chave do celular, com divulgação seletiva do atributo em vez do documento inteiro"
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: "Interfaces de verificação passam a pedir o atributo, como maior-de-18, em vez da foto do documento, e a coleta de cópia de documento por lojas perde a justificativa"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: "A verificação de idade obrigatória passa a ser atendida por atestado do aparelho, e o conflito entre idade e cifra se desloca para quem emite o atestado"
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e15.2
            ordem: 2
            efeito: "A carteira esbarra em quem aceita, e sem integração dos serviços ela existe no celular e quase ninguém a pede, fazendo os prazos legais escorregarem"
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e15.2.1
                ordem: 3
                efeito: "Dentro da janela, a carteira fica restrita a Estado e banco, e os usos de mídia e interação, como ingresso, diploma e idade em plataforma, ficam para depois de 2036"
                sinal: fraco
                prazo: 2036
                confianca: baixa
```

### Os mecanismos, efeito a efeito

**d1 — a senha deixa de ser o caminho de volta.**

- `e1` porque d1 remove o segredo que o provedor sabia redefinir, e toda conta precisa de algum caminho de volta; o que sobra (outro aparelho, pessoa, rosto e documento) é mais caro de operar que um e-mail automático. Artefatos: Microsoft sem senha por padrão [3], Recovery Contacts do Google [15], 89% das empresas dizendo ter processo de restauração (FIDO via Descope [2]). Três artefatos → forte. Classe de referência: passkey sincronizada (2022, memória — ver seção 8) até 75% com passkey em ≥1 conta (2026) [2], ~4 anos; tirar a senha é mais lento que acrescentar a passkey, então 2029, não 2027.
- `e1.1` porque `e1` torna a recuperação dependente de um segundo fator físico ou social, e o serviço que não quer atendimento caro passa a exigi-lo antes. Quem tem um aparelho só é o ator que troca. Sinal: o Google permite até dez contatos [15]; nenhum serviço encontrado *exige* — médio.
- `e1.1.1` porque `e1.1` presume uma pessoa por aparelho; em famílias que dividem celular, a biometria cadastrada pode ser de outro membro. Troca o ator (família de renda baixa). Sem artefato — fraco.
- `e1.2` porque `e1` faz da recuperação o único caminho que não exige o aparelho, e atacante vai para onde a barreira é menor. A Unit 42 aponta a recuperação e o re-registro como superfície sensível [9]. Médio.
- `e1.2.1` porque `e1.2` tende a ser atacado com rosto e voz sintéticos (liga ao tema 13); a defesa que não depende de detectar o sintético é o tempo — esperar dias e avisar todos os aparelhos. Mecanismo meu, sem caso — fraco.
- `e2` porque d1, ao mover todas as credenciais para o chaveiro sincronizado, concentra nele o que antes estava espalhado em senhas diferentes. Artefatos: *Golden Pass-ta-key* e a SDS sem rotação [9], CVE-2026-34348 e Windows Hello [8]. Forte; confiança alta porque o mecanismo é direto.
- `e2.1` porque `e2` amarra o acesso a centenas de sites à conta do dono do sistema; suspender essa conta passa a cortar tudo. Médio: o mecanismo é documentado (sincronização [4][9]), mas não achei caso de suspensão em cascata relatado.
- `e2.1.1` porque `e2.1` cria dano ao consumidor que não é de um serviço, é de todos; no Brasil, o ator seria Procon/Senacon, que já trata corte de serviço essencial. O remédio usaria a CXP [4]. Fraco.
- `e2.2` porque d1 tira o que se roubava (a senha) e sobra a sessão já verificada no aparelho. Três equipes em agosto de 2026 [8][9]. Forte; confiança média porque o antivírus de sistema pode fechar parte disso.
- `e2.2.1` porque `e2.2` faz o banco desconfiar do aparelho, não da pessoa; a resposta é exigir atestado de integridade. A JSR já vincula aparelho por FIDO Server [17]. Fraco (nenhum banco exigindo atestado encontrado nesta rodada); confiança média porque o mecanismo é o mesmo que a JSR já usa.
- `e3` porque d1 some com a senha anotada que servia de herança informal. Artefatos: Recovery Contacts [15]; recursos de acesso de emergência em gerenciadores apareceram na busca, mas não abri a página (seção 12.4). Médio.
- `e3.1` porque `e3` só protege quem se cadastrou em vida, e d2 impede o provedor de abrir o resto. Convergência d1 × d2 (ver Cruzamentos). Fraco.
- `e3.1.1` porque `e3.1` cria demanda por guardar uma chave física fora do aparelho, e o ofício que já guarda documento de sucessão é o do inventário. Fraco.
- `e4` (retroação) porque o custo de atendimento de `e1` é alto e certo, e o ganho de segurança é difuso. 57% das empresas ainda com login primário *phishable* (FIDO, 12.4); a Microsoft só remove a senha de contas antigas se a pessoa pedir [3]. Forte; confiança alta.
- `e4.1` porque `e4` deixa a porta velha aberta, e o atacante força o fluxo até ela. Médio (discutido em guias de recuperação encontrados na busca; a fonte aberta que sustenta é a Unit 42 sobre recuperação [9]).
- `e4.1.1` porque `e4.1` vira sinistro, e quem paga o sinistro impõe condição. Fraco.

**Quem bloqueia d1:** as operadoras e intermediários de SMS perdem o código de verificação; mais importante, Apple e Google capturam a mudança (`e2`, `e13.1`): a senha acaba, mas a chave passa a morar no chaveiro deles.

**d2 — o servidor cego.**

- `e5` porque d2 impede o servidor de ler o dado que o recurso de IA precisa; a saída encontrada é processar em enclave que o próprio provedor não abre. Artefato aberto: WhatsApp Private Processing [7]. O Private Cloud Compute da Apple é do mesmo tipo, mas não o abri nesta rodada (está no mapa do tema 16). Médio.
- `e5.1` porque `e5` só vale se alguém de fora conferir; a Meta promete publicar binários e código de atestação e ampliar o *bug bounty* [7]. Médio.
- `e5.1.1` (retroação) porque `e5` concentra num tipo de hardware a confiança de muitos; uma falha nele é em massa. Fraco.
- `e5.2` porque d2 tira do servidor o conteúdo de onde saía o perfil. Fraco; confiança baixa (ver pré-mortem 2: metadados continuam coletados [10]).
- `e5.2.1` porque `e5.2` deixa o anunciante sem perfil, e o único lugar onde ele pode ser calculado é o aparelho. Fraco; prazo no limite da janela.
- `e6` (retroação) porque d2 torna inútil a ordem ao servidor, e o Estado passa a mirar o aparelho. Artefatos: ADP retirado no Reino Unido [5]; Conselho da UE com varredura voluntária e verificação de idade [6]; plano britânico de triagem no aparelho e ameaça do Signal [19]. Forte; alta.
- `e6.1` porque `e6` produz ordens nacionais e as empresas respondem por país. Artefato: as dez categorias que perdem cifra para novos usuários britânicos [5]. Um caso só → médio.
- `e6.1.1` porque `e6.1` torna a região da conta uma variável de segurança. Fraco.
- `e6.2` porque `e6` pode exigir o que o mensageiro não consegue fazer sem abandonar o próprio produto; a resposta declarada do Signal é sair [19]. Médio (declarações, nenhuma saída consumada).
- `e6.2.1` porque `e6.2` e `e6` pressionam o caso brasileiro que está suspenso com votos a favor do sigilo técnico (IP.rec, 12.4; ITS Rio [11]). Troca o ator (STF). Fraco.
- `e7` porque d2 tira do servidor a visão do conteúdo; a única fonte de sinal passa a ser quem está no grupo. Médio (o botão de denúncia de mensageiros cifrados existe, mas não abri documentação — seção 8).
- `e7.1` porque `e7` escala mal: denúncia funciona em grupo pequeno. Fraco.
- `e7.1.1` porque `e7.1` torna o tamanho do grupo a única alavanca que o regulador consegue negociar sem quebrar a cifra. Fraco.

**Quem bloqueia d2:** Home Office britânico e Conselho da UE (`e6`); também quem vive de perfil comportamental (`e5.2`), que tem incentivo para manter os metadados fora da cifra.

**d3 — local-first.**

- `e8` porque d3 põe o original no aparelho; o software continua abrindo o arquivo mesmo sem servidor. É o ideal 5 do ensaio (preservação de longo prazo) [1]. Artefatos: budgero [20], kostos [21], Asterex e Trilium no Local-First News [18]. Médio: todos de nicho.
- `e8.1` porque `e8` tira do servidor o que justificava cobrar pela posse; sobra cobrar pela sincronia. Fraco.
- `e8.1.1` porque `e8.1` faz do relé algo genérico, que qualquer um pode prover. Fraco.
- `e8.2` porque d3 junta edições feitas sem rede, e o CRDT funde sem saber o que cada um queria. A Local-First Conf 2026 teve Steve Ruiz (tldraw) entre os palestrantes (busca; não abri a página da conferência). Médio pelos ecossistemas Yjs/Automerge [14].
- `e8.2.1` porque `e8.2` expõe a versão ao usuário comum. Fraco.
- `e9` porque d3 deixa a cópia completa do dado no aparelho, e o agente (modelo local — tema 16) pode trabalhar sobre ela. Artefatos: accountant24 [22], TaxHacker [23]; `wilson` e `mailquill` são da varredura da turma e não os encontrei por nome no GitHub (seção 12.4). Dois abertos → médio.
- `e9.1` porque `e9` faz a análise sair do banco. Fraco; baixa.
- `e9.1.1` porque `e9.1` expõe que o Open Finance entrega dado a instituições, não à pessoa. Fraco.
- `e10` porque d3 tira do servidor a cópia que o suporte usava para recuperar. A documentação atproto avisa sobre o risco de trancamento sem ajuda possível [12]. Médio.
- `e10.1` (retroação) porque `e10` gera atendimento caro e má reputação. Fraco.
- `e10.1.1` porque `e10.1` dilui o termo. Fraco.
- `e11` porque d3 põe o documento completo, com histórico, do lado do usuário. Fraco; baixa (nenhum incumbente mostrou perda).
- `e11.1` (quem bloqueia) porque `e11` ameaça a retenção, e o incumbente adota a técnica sem abrir o formato. A busca mencionou CRDT no CloudKit da Apple, sem página aberta. Fraco.
- `e11.1.1` porque `e11.1` desloca o aprisionamento para o formato. Fraco.

**d4 — identidade e credencial portáteis.**

- `e12` porque d4, com CXP/CXF, cifra a exportação e a importação entre provedores [4]. Artefatos: especificação, iOS/macOS 26, Android via Play Services, Dashlane importando por CXP (busca). Forte; alta.
- `e12.1` porque `e12` baixa o custo de sair do chaveiro do sistema. Médio.
- `e12.1.1` porque `e12.1` torna a credencial um ativo custodiado. Referência brasileira: portabilidade numérica (memória — seção 8). Fraco.
- `e13` porque d4 dá a cada site passkey própria sem precisar de um provedor que ateste a identidade. É o que o aluno fez no projeto dele ao remover o provedor terceiro (varredura da turma). Médio.
- `e13.1` (quem bloqueia) porque `e13` tira dos provedores o login federado, e eles respondem ocupando a sincronia; o Google promove passkey, chaveiro e "Sign in with Google" na mesma peça [15]. Médio.
- `e13.1.1` porque `e13.1` e `e2.1` convergem (ver Cruzamentos). Fraco.
- `e14` porque d4, no AT Protocol, separa identidade (DID) de servidor (PDS), e a conta migra com repositório e blobs [12]. Médio.
- `e14.1` porque `e14` dá ao criador uma audiência que não fica para trás. Fraco; baixa. Classe de referência: portabilidade de conta no fediverso, anos sem efeito comercial visível (memória — seção 8).
- `e14.1.1` porque `e14.1` separa o que a plataforma vendia junto. Fraco.
- `e14.2` (retroação) porque `e14` põe a identidade numa chave; perder a chave é perder tudo, com janela de 72 h [12]. Médio.
- `e14.2.1` porque `e14.2` faz as pessoas entregarem a chave a quem hospeda. Fraco.
- `e15` porque d4 junta credencial de Estado (EUDI [13]) e de banco (JSR/FIDO [17]) no mesmo aparelho. Forte (EUDI, sandbox alemão, JSR obrigatória); média porque os prazos escorregam.
- `e15.1` porque `e15` permite provar o atributo sem mostrar o documento; o custo de verificação cai de €70–100 para €3–8 por cliente (estimativa citada pela Corbado [13]). Médio.
- `e15.1.1` porque `e15.1` e `e6` convergem: a lei de idade que ameaça a cifra pode ser atendida sem ler conteúdo. Fraco.
- `e15.2` (retroação) porque `e15` depende de quem aceita, e esse é o gargalo medido [13]. Forte; média.
- `e15.2.1` porque `e15.2` limita a carteira aos atores obrigados. Fraco; prazo no limite.

### Regra de parada

Nenhum ramo foi para além da terceira ordem. Três filhos candidatos foram cortados por serem o pai mais adiante (seção 12.5): "centrais de atendimento de senha encolhem" (é `e1` amadurecendo), "mais países tiram o ADP" (é `e6.1` amadurecendo), "mais apps local-first de finanças" (é `e8` amadurecendo).

### Cobertura STEEP e quem perde

- **Social:** `e1.1`, `e1.1.1`, `e3`, `e3.1`, `e10`, `e14.1`.
- **Tecnológico:** `e2`, `e2.2`, `e5`, `e8.2`, `e12`.
- **Econômico:** `e5.2`, `e8.1`, `e9.1`, `e11`, `e12.1`, `e14.1`.
- **Ecológico:** **vazio.** Não encontrei mecanismo específico; a replicação local do dado em vários aparelhos gasta armazenamento, mas nada que distinga esta raiz de qualquer sincronia. Registrado como vazio.
- **Político:** `e6`, `e6.1`, `e6.2`, `e6.2.1`, `e7.1.1`, `e15`, `e15.1.1`.
- **Quem perde:** quem tem um celular só ou dividido (`e1.1`, `e1.1.1`); famílias de quem morre sem contato de legado (`e3.1`); quem perde o aparelho em app local-first (`e10`); usuários de aparelho antigo ou de sistema livre (`e2.2.1`); cidadãos britânicos e de países com ordem semelhante (`e6.1`); SaaS que retém por posse do dado (`e11`); provedores de login federado (`e13`); anunciantes de perfil comportamental (`e5.2`); bancos que vivem da análise do extrato (`e9.1`).

### Cruzamentos

- **Convergência 1 — a herança fica sem porta (d1 × d2).** `e3` (sem senha anotada) e o servidor cego (d2) chegam juntos a `e3.1`: sem segredo a herdar e sem provedor capaz de abrir. Nenhuma das duas raízes sozinha produz a perda; juntas, produzem. É o achado mais concreto do mapa para quem projeta interação: a herança precisa ser desenhada em vida.
- **Convergência 2 — o exílio digital (d1 × d4).** `e2.1` (suspensão em cascata pelo chaveiro) e `e13.1.1` (a sincronia da chave como novo intermediário) chegam ao mesmo lugar: quem controla a sincronia controla a existência da pessoa em centenas de serviços. A portabilidade de `e12` é o contrapeso; a disputa entre os dois decide quem ganha d4.
- **Convergência 3 — a idade sem leitura (d2 × d4).** `e6` (Estado mirando o aparelho) e `e15.1` (atributo em vez de documento) chegam a `e15.1.1`: a verificação de idade pode ser atendida sem quebrar a cifra, se a carteira existir.
- **Retroalimentação.** `e10` → `e10.1` → cópia em custódia do fornecedor → enfraquece d3. `e14.2` → `e14.2.1` → hospedeiro que guarda a chave → enfraquece d4. `e2` → `e2.2` → atestado de integridade (`e2.2.1`) → aparelhos fora → reforça o poder dos donos de sistema, que é o oposto do que o tema promete. O mapa tem mais ciclos que freiam as raízes do que ciclos que as reforçam; o único reforço claro é `e5.1.1` → "voltar a processar no aparelho" → reforça d3 (e o tema 16).
- **Contradição.** `e12` (credencial sai com a pessoa) e `e13.1` (provedor ocupa a sincronia) não se sustentam juntos em sua forma forte. O que decide: se sites e gerenciadores implementam CXP de ponta a ponta e se o padrão continua sem participação do site [4]. Não resolvi; os dois ficam.
- **Contradição 2.** `e6.1.1` (conta em jurisdição de sigilo forte como produto) e `e15` (identidade de Estado no aparelho) puxam em direções opostas: um afasta a conta do Estado, o outro a amarra a ele. O que decide: se a carteira vira pré-requisito para abrir conta de dado.

## 6. Sinais fracos e wildcards

### Sinais fracos

1. **IA de finanças que não sai da máquina** (`accountant24`, 54 estrelas [22]; `TaxHacker`, 6.715 estrelas [23]). É o casamento dos temas 16 e 17. **O que mudaria:** `e9` e `e9.1` ganhariam sinal forte e prazo mais cedo. **Sinal observável:** um banco ou fintech de grande porte oferecendo exportação do extrato em formato pensado para agente local, ou um app desse tipo passando de 10 mil estrelas.
2. **Apps "sem conta"** (`kostos`: sem conta, cifrado, offline [21]; `budgero` [20]). Se o padrão "não há conta, há arquivo e chave" crescer, d1 e d3 se fundem: não há recuperação porque não há conta. **Sinal observável:** um app de consumo com mais de um milhão de usuários sem cadastro por e-mail.
3. **Migração adversarial no AT Protocol** [12]. É a primeira forma documentada de levar a identidade de uma rede mesmo contra a vontade do servidor. **Sinal observável:** um caso público de criador com grande audiência migrando de PDS em conflito com o hospedeiro.
4. **FIDO por exigência de regulador financeiro** (JSR no Pix [17]). O Brasil pode chegar ao "fim da senha" pelo pagamento, não pelo login. **Sinal observável:** o Banco Central estendendo exigência FIDO ao acesso ao app, não só ao pagamento.

### Wildcards

1. **Lei que obriga local-first ou ponta-a-ponta por padrão para dado sensível.** *Mecanismo:* depois de um vazamento de saúde ou financeiro em escala, um legislador (a ANPD no Brasil, via regulamentação da LGPD, ou a UE) transforma "o servidor não deve conseguir ler" em exigência de segurança. *Por que é improvável:* vai contra `e6` e contra o interesse policial, que hoje dá o tom (Reino Unido [5], UE [6]). *O que faria com o mapa:* d2 e d3 pulariam para adoção em maioria nos setores regulados; `e10` e `e3.1` ficariam urgentes. *Sinal precoce:* um projeto de lei ou resolução citando cifra no cliente como requisito, não como boa prática.
2. **Quebra da curva P-256 antes de 2036.** *Mecanismo:* passkeys e boa parte da cifra em uso dependem de criptografia de curva elíptica; um avanço em computação quântica ou em criptoanálise invalidaria as chaves. *Por que é improvável:* nenhuma estimativa aberta nesta rodada põe isso dentro da janela. *O que faria:* d1 e d4 teriam de ser refeitas com migração de chaves em massa; o dado cifrado armazenado hoje (d2) ficaria exposto retroativamente. *Sinal precoce:* NIST ou FIDO fixando data para chaves pós-quânticas em WebAuthn.
3. **Comprometimento em massa de um chaveiro sincronizado.** *Mecanismo:* o ataque *Golden Pass-ta-key* [9] em escala — a SDS não rotaciona. *Por que é improvável:* exige malware em cada aparelho. *O que faria:* inverteria d1 (volta da senha como segundo fator) e aceleraria `e12.1` (fuga para gerenciadores independentes). *Sinal precoce:* campanha de malware documentada mirando o processo do Chrome em larga escala.

## 7. Contra o próprio mapa

### Pré-mortem: é 2036 e o mapa errou. Por quê?

1. **A passkey venceu e nada mais mudou.** A senha acabou na tela, o provedor ficou com a chave, a recuperação voltou ao e-mail com código, e ninguém percebeu diferença. Aponta para `e1` e `e13`. **Alteração:** `e13` confiança alta → media, sinal forte → medio (o Google promove login federado junto com passkey [15]).
2. **O servidor cego ficou cego só para o conteúdo.** Metadados continuam fora da cifra [10], e personalização e anúncio sobreviveram com eles. Aponta para `e5.2`. **Alteração:** `e5.2` confianca media → baixa.
3. **Local-first ficou para desenvolvedor.** Sete anos depois do ensaio [1], não achei número de usuários de consumo; a biblioteca mais usada é de edição colaborativa, não de soberania [14]. Aponta para `e8`, `e11`. **Alteração:** `e8` prazo 2029 → 2030; `e11` confianca media → baixa.

### Extrapolação linear

- `e2.2` ("atacante usa a sessão do aparelho") é o roubo de sessão de hoje, maior. A não-linearidade está em d1: quando não há senha para roubar, a sessão vira o único alvo. Mantido.
- `e12.1` (gerenciadores independentes voltam a competir) pode ser só o mercado de gerenciadores crescendo. O mecanismo não-linear é a porta que abre com a CXP [4]. Mantido, com confiança média.
- `e15` pode ser só a digitalização de documento, que já existe em apps de governo. O que a separa é a divulgação seletiva; mantido, mas o prazo de `e15.2` reflete o atraso medido [13].

### Velocidade de adoção

- `e1.2.1` (recuperação lenta contra rosto sintético): sinal fraco, depende de `e1.2` se consolidar. **Alteração:** prazo 2031 → 2033.
- `e7` (moderação por denúncia): depende de comunidades grandes adotarem cifra, o que nenhuma fonte aberta mostra. Classe de referência: RCS cifrado levou 14 meses do padrão (março de 2025) ao beta (maio de 2026) [10], e isso com dois fabricantes decididos. **Alteração:** prazo 2029 → 2031.
- `e14.1` (criadores negociando pela audiência portátil): a classe de referência do fediverso (portabilidade existente há anos sem efeito comercial visível — memória, seção 8) é mais honesta que a do smartphone. **Alteração:** prazo 2031 → 2033.
- `e9.1`: nenhum banco perdeu nada ainda. **Alteração:** confianca media → baixa.

### A raiz que não acontece

- **Se d1 não acontece** (a senha fica como fallback indefinidamente, `e4` domina): sobram d2 (o servidor cego não depende de passkey), d3 e d4 (CXP continua valendo, com senha ou sem). O mapa perde `e1`, `e1.1`, `e3`.
- **Se d2 não acontece** (a pressão de `e6` vence): d1 e d4 continuam; d3 perde o motivo de privacidade e fica com o de resiliência. Convergência 1 e 3 desaparecem.
- **Se d3 não acontece** (local-first fica em nicho): d1, d2 e d4 continuam; o mapa perde `e8`–`e11` e o casamento com o tema 16 fica só em `e5`.
- **Se d4 não acontece** (CXP sem adesão, carteira sem quem aceite): `e2` e `e13.1` ficam sem contrapeso; o fim da senha vira concentração nos donos de sistema.

Nenhuma raiz leva o mapa inteiro; não é uma raiz só disfarçada.

### Suposições escondidas

1. **A cifra continua legal nos grandes mercados.** Quebrada, vira o cenário indesejável e o fim de d2.
2. **Os donos de sistema continuam permitindo gerenciadores de terceiros** como provedores de passkey. Se não, `e12.1` morre e `e13.1` domina.
3. **O aparelho pessoal continua individual.** No Brasil de celular compartilhado, isso não vale para todos (`e1.1.1`).
4. **As fontes da FIDO não inflam a adoção.** O levantamento é encomendado pela própria aliança [2]; os países não incluem o Brasil. Se o número estiver inflado, a recusa de "passkey" como raiz fica menos firme — mas o que o mapa trata como raiz (a remoção da senha) continua emergente de qualquer modo.
5. **Metadados continuam fora da cifra** [10]. Se deixarem de ficar, `e5.2` e `e7` mudam de sinal.

### Viés do autor

A zona "Pessoas e dados" e a simpatia pelo software livre puxam para d3 e d4. `e8.1.1` (sincronia como serviço intercambiável) e `e14.1.1` (moderação contratável) estão aqui em parte porque o autor os acha desejáveis; ficaram com sinal fraco e confiança baixa. Há também um viés contra os donos de sistema na leitura de `e2`, `e13.1` e `e13.1.1`; o contrapeso é `e12` (a portabilidade que eles mesmos implementaram [4]).

### Calibração

Confiança por ordem, depois das alterações (conferida pelo verificador na seção 12): ordem 1 — alta 4, média 10, baixa 1; ordem 2 — alta 0, média 19, baixa 3; ordem 3 — alta 0, média 1, baixa 21. Cai com a ordem.

### Registro de alterações

| id | antes | depois | por quê |
|---|---|---|---|
| e13 | sinal forte, confianca alta | sinal medio, confianca media | pré-mortem 1; o Google promove login federado junto com passkey [15] |
| e1.2.1 | prazo 2031 | prazo 2033 | velocidade: depende de `e1.2` consolidar |
| e1.3 | "Centrais de atendimento de senha encolhem" | removido (seção 12.5) | regra de parada: é `e1` amadurecendo |
| e5 | sinal forte | sinal medio | só um artefato aberto nesta rodada [7]; PCC não foi aberto |
| e5.2 | confianca media | confianca baixa | pré-mortem 2; metadados fora da cifra [10] |
| e7 | prazo 2029 | prazo 2031 | referência RCS: 14 meses do padrão ao beta [10] |
| e6.1 | confianca alta | confianca media | um caso só (Reino Unido) [5] |
| e8 | prazo 2029 | prazo 2030 | pré-mortem 3 |
| e11 | confianca media | confianca baixa | pré-mortem 3; nenhum incumbente mostrou perda |
| e9.1 | confianca media | confianca baixa | nenhum caso de banco perdendo análise |
| e8.3 | "Desenvolvedores trocam Firebase por motor de sincronia local" | removido (seção 12.5) | melhoria sustentadora; teste da causa solta (troca de fornecedor por custo acontece sem d3) |
| e14.1 | prazo 2031 | prazo 2033 | referência do fediverso |
| e15 | confianca alta | confianca media | menos de 1/3 dos Estados prontos [13] |

Cota por raiz: d1 — `e1.2.1`, `e1.3` removido; d2 — `e5`, `e5.2`, `e6.1`, `e7`; d3 — `e8`, `e11`, `e9.1`, `e8.3` removido; d4 — `e13`, `e14.1`, `e15`. Cumprida.

## 8. O que a máquina errou

1. **A recusa quase não aconteceu.** O rascunho inicial tinha "passkeys substituem a senha" como raiz d1, copiando a descrição do tema. Só ao montar a tabela de adoção o número da FIDO (75% em ≥1 conta [2]) bateu no falseador do briefing. A raiz foi reescrita para o que ainda é emergente — a remoção da senha como caminho de volta. Se o leitor achar que d1 ainda é "passkey disfarçada", o teste é `e4`: ele diz que a remoção pode não acontecer.
2. **O "5 bilhões" só está numa página que o verificador não abre.** A página da FIDO e o release em Business Wire/Morningstar bloqueiam acesso automático; a Descope [2] confirma os percentuais mas não o número de passkeys. O número ficou no texto com a indicação, e a página lida está na seção 12.4.
3. **Datas citadas de memória.** "WhatsApp cifrado por padrão desde 2016", "passkey sincronizada desde 2022", "portabilidade numérica no Brasil" e "fediverso sem efeito comercial" são memória minha, não estão em nenhuma fonte aberta. Usei-as só como classe de referência e marquei cada uso.
4. **A data da página da Apple.** O resumidor devolveu "22/09/2025" como data da página de suporte sobre o ADP [5]; a retirada foi anunciada em fevereiro de 2025 (a matéria do State of Surveillance [19] dá fevereiro). Não usei data da página; usei só o conteúdo.
5. **`wilson` e `mailquill` não foram achados.** A busca por "wilson" no GitHub devolveu projetos homônimos sem relação. Não citei esses dois como fonte; ficaram como material da turma (12.7).
6. **Mecanismos meus sem caso.** `e1.2.1` (recuperação lenta), `e3.1.1` (custódia de chave no inventário), `e6.1.1` (conta em jurisdição forte), `e7.1.1` (tamanho de grupo como política) e `e12.1.1` (custódia regulada) são inferências plausíveis sem nenhum artefato. Todas com sinal fraco e confiança baixa.
7. **O botão de denúncia em mensageiro cifrado** (`e7`) é conhecimento geral meu; não abri documentação que diga como o trecho denunciado é revelado. O sinal de `e7` ficou médio por isso, não forte.
8. **Fonte encomendada.** O levantamento de adoção é da própria FIDO [2]; o de custo de verificação da carteira (€70–100 → €3–8) é de um fornecedor de passkeys citando terceiros [13]. Os dois têm interesse no resultado.

## 9. Três cenários para 2036

**Provável.** Em 2036, quase ninguém digita senha, e quase toda conta ainda tem uma, escondida. A passkey mora no chaveiro da Apple, do Google ou da Microsoft, migra entre eles pela CXP, e a recuperação virou um fluxo de rosto, documento e espera de alguns dias nos serviços críticos. O golpe mudou de endereço: foi da senha para o atendimento de recuperação e para o malware que usa a sessão aberta. A cifra ponta-a-ponta cobre mensagem e, em boa parte do mundo, backup; em alguns países, não — o mesmo iPhone protege menos no Reino Unido. Local-first é padrão em ferramentas de criação e de finanças de nicho, e a sincronia virou assinatura barata. A carteira de identidade europeia existe e é usada para banco e governo; para mídia e interação, pouco. No Brasil, o fim da senha chegou pelo Pix antes do login. **Sinal precoce:** as grandes plataformas anunciando "sem senha" sem nunca apagar o fluxo de redefinição por e-mail.

**Desejável.** Em 2036, a recuperação e a herança são desenhadas no cadastro: cada pessoa escolhe dois contatos de confiança e um contato de legado, com linguagem que a avó entende, e a chave de recuperação física cabe na pasta do testamento. O backup é cifrado por padrão em todo lugar, e o STF, ao encerrar o julgamento, fixou que o provedor não pode ser obrigado a entregar o que não consegue ler. Credenciais saem com a pessoa, e o chaveiro do sistema compete com gerenciadores independentes. Agentes de IA trabalham sobre o dado financeiro no aparelho. **O que teria de ser feito:** CXP implementada de ponta a ponta; um padrão aberto de recuperação social que não volte ao SMS; regra de consumidor tratando suspensão de chaveiro como corte essencial. **Sinal precoce:** um grande serviço brasileiro apagando a senha de contas antigas e publicando a taxa de recuperação bem-sucedida.

**Indesejável.** Em 2036, o fim da senha concentrou a identidade de bilhões em três chaveiros, e a suspensão de uma conta de sistema tira a pessoa de centenas de serviços de uma vez. O Estado desistiu de ler o servidor e passou a ler o aparelho: triagem de imagem no sistema, atestado de idade vinculado à identidade, e cifra de backup disponível só em alguns países. Quem tem celular antigo ou compartilhado ficou de fora dos serviços críticos. Local-first virou rótulo; os apps voltaram a guardar o original no servidor "para sua segurança". **Sinal precoce:** a primeira ordem judicial, em qualquer país grande, obrigando o dono do sistema a instalar varredura no aparelho, e não no servidor.

## 10. O experimento

**O que é.** *O cofre sem porta dos fundos.* Um app web de finanças pessoais (ou de divisão de contas, na linha de `kostos`) em que: o dado vive no navegador num documento CRDT (Yjs ou Automerge) sobre IndexedDB; o login é só por passkey (WebAuthn, com `@simplewebauthn`), sem senha e sem e-mail; a sincronia entre aparelhos passa por um relé que só vê bytes cifrados; e a recuperação é social — a chave de recuperação é dividida por Shamir em três partes, entregues a três colegas, e duas bastam.

**Que pergunta responde.** Quando o provedor não consegue devolver a conta, as pessoas conseguem desenhar e entender a própria recuperação? E qual é o custo, em tempo e em erro, de trocar o "esqueci minha senha" por pessoas de confiança? Testa `e1`, `e1.1`, `e3`, `e3.1` e `e10`.

**Que tecnologia emergente usa, e por que não dá com a madura.** Passkey como único fator (sem fallback de senha), CRDT local-first e cifra no cliente com relé cego. Com o maduro — login com Google, banco no servidor, redefinição por e-mail — a pergunta desaparece: o provedor sempre devolve a conta.

**O que a turma faz em sala.** Três rodadas de dez minutos, em trios. (1) **Perda:** cada um usa o app no celular e no notebook; na metade, o celular "é roubado" (desliga-se o aparelho). Mede-se quem recupera e em quanto tempo. (2) **Recuperação social:** a pessoa pede aos dois colegas que liberem suas partes; mede-se o tempo e os erros, e se algum colega liberou a parte para a pessoa errada (um aluno tenta se passar por outro). (3) **Herança:** um aluno "morre"; os outros tentam abrir o cofre dele com o que ele deixou. Ao fim, cada um escolhe entre manter a recuperação social ou trocar por "o fornecedor guarda uma cópia da chave".

**O resultado que me faria mudar de ideia.** Se mais da metade da turma não recuperar na rodada 1, **ou** se a maioria escolher a custódia pelo fornecedor ao fim, então `e4` e `e10.1` (as retroações) dominam o mapa: o fim da senha e o local-first voltam para o provedor, e d1 e d3 perdem uma ordem cada. Se, ao contrário, a turma recuperar em menos de cinco minutos e preferir a recuperação social, `e1.1` sobe de confiança e o prazo de `e1` recua para 2028.

## 11. Fontes

1. https://www.inkandswitch.com/essay/local-first/ — Kleppmann, Wiggins, van Hardenberg, McGranaghan, "Local-first software" (Ink & Switch, 2019): os sete ideais, CRDTs, crítica da posse do dado pela nuvem. Sustenta d3 e `e8`. Confiabilidade alta: texto fundador, autores identificados.
2. https://www.descope.com/blog/post/2026-fido-report — Resumo do relatório FIDO 2026 (90% de conhecimento, 75% com passkey em ≥1 conta, 49% uso frequente, 68%/28% em empresas, 89% com processo de restauração, 47% abandonam compra). Sustenta a recusa de passkey como raiz e `e1`, `e4`. Confiabilidade média: fornecedor de autenticação resumindo levantamento encomendado pela própria FIDO.
3. https://www.techmonitor.ai/cybersecurity/microsoft-makes-new-accounts-passwordless/ — Microsoft sem senha por padrão em contas novas (maio de 2025), ~1 milhão de passkeys/dia, ~98% de sucesso, ~7 mil ataques a senha por segundo. Sustenta d1, `e1`, `e4`. Confiabilidade média-alta: imprensa especializada reproduzindo números da empresa.
4. https://www.corbado.com/blog/credential-exchange-protocol-cxp-credential-exchange-format-cxf — CXP/CXF: formato, HPKE, estado dos rascunhos, implementação da Apple no iOS/macOS 26, contribuidores, limitação (contador; site não participa). Sustenta d4, `e12`, `e2.1.1`. Confiabilidade média: fornecedor de passkeys, técnico e datado.
5. https://support.apple.com/en-us/122234 — Apple: ADP indisponível para novos usuários no Reino Unido; dez categorias perdem cifra, iMessage/FaceTime e 15 categorias continuam cifradas. Sustenta `e6`, `e6.1`. Confiabilidade alta: fonte primária.
6. https://euperspectives.eu/2026/07/eu-countries-approve-temporary-chat-control-1-0/ — Chat Control 1.0 aprovado em 23/07/2026 até 03/04/2028, exclusão explícita da cifra ponta-a-ponta, regulamento permanente travado. Sustenta `e6`. Confiabilidade média: portal de notícias europeu.
7. https://engineering.fb.com/2025/04/29/security/whatsapp-private-processing-ai-tools/ — Meta: Private Processing (TEE, CVM, OHTTP, não-direcionabilidade, transparência verificável), 29/04/2025. Sustenta d2, `e5`, `e5.1`. Confiabilidade média: fonte primária, com interesse na alegação.
8. https://thehackernews.com/2026/08/new-passkey-attacks-can-recover-synced.html — Três equipes (SpecterOps/CVE-2026-34348, Unit 42, Mollema), agosto de 2026; pré-condição de malware. Sustenta `e2`, `e2.2`. Confiabilidade média-alta: imprensa de segurança com referências às pesquisas.
9. https://unit42.paloaltonetworks.com/passwordless-authentication-security-risks/ — Unit 42, "Pass the Passkey" (03/08/2026): três ataques, SDS sem rotação nem revogação, recuperação como superfície sensível. Sustenta `e2`, `e1.2`, `e4.1`, wildcard 3. Confiabilidade alta: pesquisa primária.
10. https://www.eff.org/deeplinks/2026/05/victory-end-end-encrypted-rcs-comes-apple-and-android-chats — EFF: RCS cifrado com MLS em beta (12/05/2026), dependência de operadora, metadados coletados, backup. Sustenta d2, `e5.2`, classe de referência de `e7`. Confiabilidade alta, com viés declarado pró-cifra.
11. https://itsrio.org/pt/publicacoes/sustentacao-no-julgamento-dos-casos-de-bloqueio-de-whatsapp-no-stf/ — ITS Rio: sustentação na ADI 5527/ADPF 403 sobre cifra e bloqueio. Sustenta a nota Brasil e `e6.2.1`. Confiabilidade média: parte interessada no processo, fonte primária da própria posição.
12. https://atproto.com/guides/account-migration — AT Protocol: migração de conta (CAR, blobs, DID PLC), migração adversarial, janela de 72 h. Sustenta `e10`, `e14`, `e14.2`. Confiabilidade alta: documentação oficial.
13. https://www.corbado.com/blog/eudi-wallet-2026-deadline-rollout-eic-2026 — EUDI Wallet: prazo de dezembro de 2026, menos de 1/3 prontos (Politecnico di Milano), sandbox alemão, gargalo em quem aceita, custo de verificação. Sustenta `e15`, `e15.1`, `e15.2`. Confiabilidade média: fornecedor com interesse; cita terceiros.
14. https://www.pkgpulse.com/guides/yjs-vs-automerge-vs-loro-crdt-libraries-2026 — Downloads semanais de Yjs, Automerge e Loro (abril de 2026). Sustenta d3 e a tabela de adoção. Confiabilidade média: agregador de estatística de npm; números aproximados.
15. https://blog.google/innovation-and-ai/technology/safety-security/world-password-day-2026/ — Google: passkeys, Recovery Contacts (até dez), Sign in with Google e Password Manager na mesma peça. Sustenta `e1`, `e3`, `e13.1`. Confiabilidade alta como fonte primária do que o Google oferece.
16. https://portal.febraban.org.br/noticia/4469/pt-br/ — Pesquisa Febraban de Tecnologia Bancária 2026: 240,8 bi de transações em 2025, 78% por celular. Sustenta a nota Brasil. Confiabilidade alta: entidade setorial com a Deloitte.
17. https://www.sensedia.com.br/post/fique-por-dentro-da-obrigatoriedade-da-jsr-no-open-finance-em-2026 — JSR obrigatória desde janeiro de 2026, FIDO Server para vínculo de aparelho e biometria. Sustenta a nota Brasil, `e2.2.1`, `e15`. Confiabilidade média: fornecedor de integração.
18. https://www.localfirstnews.com/2026-01-15/ — Boletim Local-First News (15/01/2026): LiveStore, Corrosion, Asterex, Trilium, saída de Firebase/Supabase. Sustenta d3, `e8`. Confiabilidade média: curadoria comunitária.
19. https://stateofsurveillance.org/news/uk-sweden-encryption-backdoor-signal-2026/ — Signal ameaça sair do Reino Unido e da Suécia; linha do tempo do ADP e do Ofcom. Sustenta `e6`, `e6.2`. Confiabilidade média-baixa: site militante; citações do Signal conferem com a cobertura da Bloomberg que não abriu.
20. https://github.com/tombadilo-bombadilo/budgero — budgero, "local-first, self-hostable, end-to-end encrypted", 21 estrelas (22/09/2026). Sinal da turma; sustenta `e8`. Confiabilidade alta como existência; nula como adoção.
21. https://github.com/shynewt/kostos — kostos, "no accounts, end-to-end encrypted, works offline, self-hostable", 43 estrelas. Sustenta `e8`, sinal fraco 2. Mesma ressalva.
22. https://github.com/machulav/accountant24 — agente de IA de código aberto para finanças pessoais, 54 estrelas. Sustenta `e9`, sinal fraco 1. Mesma ressalva.
23. https://github.com/vas3k/TaxHacker — contabilidade com IA *self-hosted*, 6.715 estrelas. Sustenta `e9` e serve de escala. Confiabilidade alta como existência.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

Comando: `python3 futurizacao-giordano/references/verificar.py tendencia-soberania-de-dados-local-first-ponta-a-ponta-e-o-fim-da-senha.md --links`, rodado em 22/09/2026.

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 15 (frontmatter diz 15)
efeitos ordem 2: 22 (frontmatter diz 22)
efeitos ordem 3: 22 (frontmatter diz 22)
prazo > horizonte (2036) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 4 · media 10 · baixa 1
confiança ordem 2: alta 0 · media 19 · baixa 3
confiança ordem 3: alta 0 · media 1 · baixa 21
links da seção 11: 23/23 respondem (frontmatter diz fontes: 23)
RESULTADO: ok
```

### 12.2 Premissas assumidas e o que o briefing não cobria

- O briefing é completo (horizonte, público, recorte, descartes, viés, falseador, profundidade); por isso não houve rebaixamento de confiança por falta de entrevista.
- **Assumido:** a nota Brasil é tratada dentro das seções 3, 4 e 9 e em `e2.2.1`, `e6.2.1`, `e9.1.1`, em vez de uma seção à parte.
- **Assumido:** "o que já é comum em produto de massa" inclui passkey como opção de login — decisão tomada a partir do dado da FIDO, não do briefing.
- **Assumido:** a fronteira com o tema 16 foi mantida cortando daqui a IA local em si; `e5` e `e9` tratam do **dado** sobre o qual a IA roda.
- Horizonte 2036: dois efeitos de terceira ordem chegam exatamente a 2036 (`e5.2.1`, `e15.2.1`), no limite da janela; nenhum passa.

### 12.3 Buscas feitas (22/09/2026)

1. "FIDO Alliance passkey adoption statistics 2026" — relatório de maio de 2026; abertos FIDO (bloqueia verificador) e Descope.
2. "Credential Exchange Protocol passkey export import 2026" — CXP/CXF; aberto Corbado.
3. "local-first software 2026 Automerge Ink & Switch sync engine" — ensaio, Local-First News; abertos.
4. "Apple Advanced Data Protection UK withdrawn encryption order 2026" — segunda ação da Apple no IPT (agosto de 2026, 9to5Mac/CNBC — não abertos); aberta a página de suporte da Apple.
5. "EU Chat Control CSAM regulation Council 2026 ..." — abertos Euronews (bloqueia verificador) e EU Perspectives.
6. "WhatsApp Private Processing Meta AI ..." — aberto o blog de engenharia da Meta.
7. "passkeys Brasil bancos gov.br chave de acesso 2026" — nada específico de bancos brasileiros; gov.br: 75,4% dos acessos com login e senha e 22,5% com certificado digital (Pronova — não aberto, não usado).
8. "passkey account recovery lost device problem synced passkeys attack 2026" — abertos The Hacker News e Unit 42.
9. "Microsoft new accounts passwordless by default ..." — abertos BleepingComputer (bloqueia verificador) e TechMonitor.
10. "Bluesky account migration PDS self-hosted number 2026 atproto" — nenhum número de contas em PDS próprio; aberta a documentação.
11. "EUDI wallet 2026 deadline ..." — aberto Corbado.
12. "Google Password Manager recovery contacts passkeys digital legacy 2026" — aberto o blog do Google.
13. "STF WhatsApp bloqueio criptografia ADPF 403 julgamento" — portal do STF retornou 403; abertos IP.rec (bloqueia verificador) e ITS Rio.
14. "RCS end-to-end encryption iPhone Android MLS 2026 rollout" — aberto EFF.
15. "Yjs npm weekly downloads local-first adoption numbers" — aberto PkgPulse.
16. "Nubank Itaú passkey login sem senha Brasil" — nada de fonte primária; Olhar Digital aberto sem dado brasileiro.
17. "Pesquisa Febraban Tecnologia Bancária 2026 biometria ..." — aberto o portal da Febraban (o texto aberto não detalha prioridades de segurança; o resumo da busca citava MFA 88%, biometria comportamental 60% — não usados).
18. "Pix por aproximação Jornada Sem Redirecionamento FIDO Banco Central Open Finance" — aberto Sensedia.
19. "Signal leave country age verification encryption law 2026 Whittaker" — Bloomberg retornou 403; aberto State of Surveillance.
20. GitHub (via `gh search repos`): budgero, accountant24, kostos, TaxHacker encontrados; "wilson" sem correspondência.

### 12.4 O que não abriu, ou abriu e não serviu

- **Lidas, mas bloqueiam o verificador automático** (não entram na seção 11 para não quebrar a checagem de links; o conteúdo foi usado com indicação no texto):
  - `https://fidoalliance.org/fido-alliance-reports-accelerating-global-passkey-adoption-on-world-passkey-day-2026/` — 5 bilhões de passkeys; metodologia Sapio (11 mil consumidores, 1.400 decisores, dez países, abril de 2026); 57% das organizações com login primário *phishable*.
  - `https://www.bleepingcomputer.com/news/microsoft/microsoft-makes-all-new-accounts-passwordless-by-default/` — mesmo conteúdo de [3].
  - `https://www.euronews.com/my-europe/2026/07/07/eu-to-extend-temporary-message-scanning-regime-to-detect-child-sexual-abuse-online` — Parlamento rejeitou a extensão em março de 2026 (311 × 228) antes de o Conselho reinstituí-la.
  - `https://ip.rec.br/blog/criptografia-no-stf-parte-2-a-retomada-do-julgamento/` — votos de 2020, vista de Alexandre de Moraes em 2023; o julgamento segue suspenso.
- **Não abriram:** portal do STF (403), Bloomberg (403), Morningstar/Business Wire (403 e tempo esgotado).
- **Abriu e não serviu:** Olhar Digital (30/08/2026), sem dado brasileiro.
- **Não abertos, portanto não usados:** 9to5Mac e CNBC sobre a segunda ação da Apple (agosto/setembro de 2026); páginas de acesso de emergência de gerenciadores (1Password, Proton Pass, NordPass); CloudKit com CRDT; página da Local-First Conf 2026; Mastodon/fediverso.

### 12.5 Efeitos cortados

- `e1.3` "Centrais de atendimento de senha encolhem" — regra de parada: é `e1` amadurecendo.
- `e8.3` "Desenvolvedores trocam Firebase por motor de sincronia local" — melhoria sustentadora; teste da causa solta.
- "Mais países tiram o ADP" — `e6.1` amadurecendo.
- "Mais apps local-first de finanças" — `e8` amadurecendo.
- "Formação em segurança reorganiza o currículo" — efeito proibido sem ator (§3).
- "Surge a profissão de designer de recuperação" — efeito proibido sem ator; o conteúdo útil ficou em `e1` (recuperação vira parte cara do cadastro).
- "Reguladores criam lei de herança digital" — genérico; o que tem ator ficou em `e3.1.1` (inventário) e no wildcard 1.

### 12.6 Raízes consideradas e não usadas

- **Passkeys como forma de login** — recusada: maioria nos dez países da FIDO [2].
- **Cifra ponta-a-ponta em mensageiros** — recusada: maioria.
- **Identidade autossoberana (SSI) com blockchain** — não usada: nenhuma fonte aberta mostra adoção fora de piloto; o que é real disso entrou em d4 via EUDI e DID PLC.
- **Self-hosting doméstico** (r/selfhosted) — considerada como raiz; fundida em d3 (é a forma de entusiasta do relé de sincronia) e no tema 16 (servidor de casa).
- **Verificação de idade** — considerada; não é ruptura desta arquitetura, é força contrária. Entrou como `e6` e `e15.1.1`.

### 12.7 Material da turma usado como sinal (não como fonte)

- Varredura de finanças com privacidade de um aluno que **removeu o provedor de identidade terceiro** do próprio produto — ilustra `e13`.
- `budgero` (escolha nº 1), `kostos`, `fintrack`, `Atlas` ("passkey, criptografado em repouso"), `happy-balance`, `TaxHacker`, `accountant24`, `wilson`, `finvo`, `mailquill`, `rotki`, `BeeCount`. Conferidos no GitHub nesta rodada: budgero, kostos, accountant24, TaxHacker. Os demais não foram conferidos.
- Entrega de desenvolvimento: `argon2`, `@simplewebauthn`, `webauthn-p256`, `fido2-lib`, `@passwordless-id/webauthn`, `Rodauth`, `better-auth`, `iron-session`, `jose`, `otplib` — o substrato do experimento da seção 10. Observação: `argon2` e `otplib` são ferramentas do mundo com senha (hash de senha e código temporário); na turma, a escolha nº 1 ser `argon2` é ela mesma um sinal de `e4` — a senha continua no projeto.
- `Termly` (E2E para controlar o agente) — fronteira com o tema 2; não usado.
