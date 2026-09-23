---
tema: "Soberania de dados: local-first, ponta-a-ponta e o fim da senha"
slug: soberania-de-dados-local-first-ponta-a-ponta-e-o-fim-da-senha
autor_login: grec
zona_de_interesse: Pessoas e dados
data: 2026-09-22
horizonte: 2041
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 15
efeitos_ordem_2: 23
efeitos_ordem_3: 23
tecnologias_citadas: [passkeys, WebAuthn, FIDO2, CTAP, COSE, Credential Exchange Protocol (CXP), Credential Exchange Format (CXF), HPKE, iCloud Keychain, Google Password Manager, Security Domain Secret, Legacy Contact, Recovery Contacts, Advanced Data Protection, Private Cloud Compute, WhatsApp Private Processing, TEE, Confidential Virtual Machines, OHTTP, iMessage PQ3, Signal PQXDH, Signal SPQR (Triple Ratchet), ML-KEM, ML-DSA, SLH-DSA, Merkle Tree Certificates, Shor, CRDT, Automerge, Yjs, Loro, Keyhive, BeeKEM, Beelay, Zero, Replicache, SQLite, IndexedDB, AT Protocol, DID PLC, PDS, Solid, Athumi, EUDI Wallet, France Identité, eIDAS 2.0, Data Act, CNSA 2.0, gov.br, Jornada Sem Redirecionamento (JSR), FIDO Server, Pix, Open Finance, budgero, kostos, accountant24, TaxHacker, rotki, "@simplewebauthn", argon2, Shamir Secret Sharing]
fontes: 35
confianca: media
experimento: "O cofre com prazo de validade — app de finanças da turma, local-first no navegador, login só por passkey, sincronia cifrada por relé cego, com três provas em sala: perder o aparelho, herdar a conta de um colega e um Q-Day simulado que abre só o que foi cifrado sem camada pós-quântica"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Em 2041 a passkey já é contexto, não novidade: em 2026, 75% das pessoas pesquisadas pela FIDO em dez países já a tinham ativado em alguma conta [2], e o gov.br adotou a chave de acesso em fevereiro de 2026 [8]. O que ainda rompe é o que vem atrás, em quatro frentes. **Conta como chave:** sem senha, a volta da conta sai do provedor para aparelhos, pessoas de confiança e carteiras de identidade, e a central de recuperação vira o alvo de ataque. **Servidor cego:** a cifra ponta-a-ponta chega ao backup, ao documento e à IA em enclave auditável, e o Estado responde trocando o alvo do servidor para o aparelho. **Local-first:** o original do dado passa a morar no aparelho e o servidor vira relé, o que faz o software sobreviver ao fornecedor mas torna a perda do aparelho definitiva. **Cifra com prazo de validade:** a janela de 2041 coincide com a estimativa de especialistas de 51% a 70% de chance de um computador quântico capaz de quebrar a criptografia atual em quinze anos [24]; tudo o que foi cifrado sem camada pós-quântica — inclusive o que os servidores cegos guardam — vira segredo com data de expiração, e toda passkey de curva elíptica terá de ser reemitida. Para quem projeta mídia e interação, o trabalho sai da tela de login e vai para o desenho da perda, da herança, da prova de quem se é e do tempo que um segredo dura.

## 2. O tema

**O que é.** Três rupturas na arquitetura do software pessoal que, juntas, tiram da empresa a posse do dado, da conta e da identidade: **local-first** (o original mora no aparelho e sincroniza; o servidor deixa de ser a fonte da verdade), **ponta-a-ponta** (quem guarda o dado não consegue lê-lo) e **o fim da senha** (autenticação por chave criptográfica guardada no aparelho, sem segredo compartilhado com o site). Num horizonte de quinze anos entra uma quarta, que as três pressupõem sem dizer: a de que a cifra de hoje continuará valendo amanhã.

**Onde encosta em mídia e interação.** Em cinco pontos: (1) **recuperação e herança** viram tela, fluxo e serviço a projetar, porque o provedor deixa de conseguir "devolver" a conta; (2) a **interface da confiança** — cadeado, estado da sincronia, conflito entre versões, atestado do enclave, "este dado saiu do aparelho" — vira elemento de design com consequência; (3) **personalização, atendimento e moderação**, que dependem de o servidor ler, mudam de lugar; (4) **portabilidade** da credencial, da audiência e do histórico muda o poder de negociação de quem produz conteúdo; (5) o **tempo** entra no desenho: o que deve ser guardado para sempre e o que deve ser mantido secreto para sempre deixam de ser a mesma coisa.

**Por que mapa, e não estado da arte.** Os componentes técnicos existem e estão padronizados (WebAuthn, CXP, MLS, CRDTs, ML-KEM). O que não está decidido é quem absorve o custo do que o servidor deixa de fazer — atendimento, recuperação, moderação, investigação policial, personalização, migração criptográfica. São decisões de segunda e terceira ordem, com atores que têm incentivo para bloquear.

**Premissas da rodada (briefing).** Horizonte 2041; público: quem projeta mídia e interação; recorte global com nota sobre o Brasil; viés neutro; descartado de início o que já é comum em produto de massa (régua da disciplina); ideias óbvias fora: as que servem para qualquer tema. Falseador declarado: evidência de que a adoção já passou da maioria inicial, ou de que a tecnologia só melhora o que existe. **Esse falseador disparou duas vezes na âncora**: na passkey como opção de login (seção 3) e na troca de chaves pós-quântica no tráfego web — mais de 65% do tráfego humano que passa pela Cloudflare já usa acordo de chave pós-quântico [26]. As duas foram recusadas como raiz (seção 4). Fronteiras mantidas: o modelo de IA rodando localmente é o tema 16; a identidade de agentes é o tema 2. Aqui o objeto é a arquitetura de dado e identidade **da pessoa**.

## 3. Onde isso está hoje

### O que já existe e funciona

- **Passkeys em maioria como opção.** Relatório FIDO 2026: 90% de conhecimento (75% em 2025), 75% com passkey ativada em pelo menos uma conta, 40% na maior parte dos apps, 49% usam sempre ou quase sempre que podem; 68% das organizações implantando e 28% sem senha na maior parte da força de trabalho; 47% dos consumidores abandonam compra quando esquecem a senha [2].
- **Recuperação que não passa pela senha.** 89% das organizações dizem conseguir restaurar o acesso de um funcionário que perdeu a passkey — 51% por recuperação administrativa, 42% por recurso de plataforma ou nuvem, 41% com várias credenciais por pessoa [2]. A Apple tem contato de legado: chave dividida entre a Apple (pacote cifrado) e o beneficiário (chave AES impressa ou em QR), liberada só com certidão de óbito; o contato de legado **não** recebe o chaveiro — senhas, dados de pagamento e passkeys ficam fora [5].
- **Portabilidade da credencial.** CXF (formato) e CXP (protocolo, com HPKE ponta-a-ponta) na FIDO; a Apple já faz transferência no mesmo aparelho no iOS/macOS 26; contribuem Google, Microsoft, 1Password, Bitwarden, Dashlane; o site em que a pessoa entra não participa da transferência [6].
- **Carteira de identidade no aparelho.** Todo Estado-membro da UE precisa oferecer uma EUDI Wallet até dezembro de 2026; bancos e grandes plataformas terão de aceitá-la um ano depois; a França tem a France Identité em produção; menos de um terço dos países cumpre o critério de prontidão; na Alemanha, cerca de 115 organizações testaram 150 casos de uso no *sandbox* e o gargalo é a adesão de quem aceita; o onboarding por vídeo custa 70–100 euros por cliente, contra 3–8 euros pela carteira (números de um fornecedor de passkeys, [7]).
- **IA sobre dado pessoal sem o provedor ler.** Apple Private Cloud Compute (junho de 2024): computação sem estado, sem acesso privilegiado em execução, não-direcionabilidade e transparência verificável por pesquisadores [15]. WhatsApp Private Processing (abril de 2025): máquinas virtuais confidenciais, OHTTP por relé de terceiro, compromisso de publicar imagens e código de atestação [14].
- **Mensagem cifrada que já resiste ao computador quântico.** iMessage PQ3 (fevereiro de 2024) define "nível 3": troca de chave pós-quântica no início e rechaveamento pós-quântico contínuo; a motivação declarada é o ataque "colete agora, decifre depois" [28]. O Signal fez PQXDH e, em outubro de 2025, o Triple Ratchet com SPQR, que combina a curva elíptica com ML-KEM ao longo de toda a conversa [27].
- **Local-first como engenharia disponível.** Ensaio de Kleppmann, Wiggins, van Hardenberg e McGranaghan (Ink & Switch, abril de 2019), com sete ideais, de "sem spinner" a "você mantém a posse e o controle", e o alerta de que, sem os servidores, o software fechado deixa de rodar mesmo que o dado seja exportado [1]. Em abril de 2026: Yjs ~920 mil downloads semanais no npm, Automerge ~85 mil, Loro ~12 mil [18]. A Ink & Switch desenvolve o Keyhive — controle de acesso para dado local-first, com acordo de chave de grupo concorrente (BeeKEM) e sincronia de conteúdo cifrado que o servidor não decifra (Beelay) [20]; o repositório tem 248 estrelas e atividade em 22/09/2026 [35].
- **Conta de rede social que muda de servidor.** No AT Protocol, a conta migra de PDS exportando o repositório (CAR), os blobs e as preferências; há "migração adversarial" quando o servidor antigo não colabora; a recuperação da identidade tem janela de 72 horas [16]. O Bluesky tinha 41,4 milhões de contas registradas em dezembro de 2025 e cerca de 4,5 milhões de usuários ativos por dia em janeiro de 2026 [17].
- **Dado pessoal em cofre público.** A Athumi, empresa pública de Flandres, opera uma plataforma de cofres Solid "pronta para produção"; os casos de uso descritos na página (dados de carreira, mudança de endereço, energia, saúde) são possíveis aplicações, sem número de cofres ativos [21].
- **Direito de levar o dado.** O Data Act da UE vale desde 12/09/2025: usuário acessa e compartilha com terceiros o dado gerado por produto conectado; produto novo tem de ser projetado para o compartilhamento; há regras para trocar de provedor de nuvem [22].
- **Brasil.** O gov.br passou a oferecer entrada por passkey em fevereiro de 2026 (exige Android 9+ ou iOS 16+ e conta prata ou ouro; a reportagem não diz se a senha continua como alternativa nem como fica a recuperação) [8]. A Jornada Sem Redirecionamento do Pix é obrigatória desde janeiro de 2026 e exige FIDO Server para autenticar por biometria [9]. O celular respondeu por 78% das 240,8 bilhões de transações bancárias de 2025 [10].
- **Os sinais da turma, conferidos em 22/09/2026.** `budgero` ("local-first, self-hostable, end-to-end encrypted", 21 estrelas) [30]; `kostos` ("no accounts, end-to-end encrypted, works offline, self-hostable", 43) [31]; `accountant24` (agente de IA de código aberto para finanças pessoais, 54) [32]; `TaxHacker` (contabilidade com IA *self-hosted*, 6.715) [33]; `rotki` (portfólio e contabilidade com privacidade, 4.029) [34].

### O que existe e ainda não funciona

- **O chaveiro sincronizado tem ponto único.** Unit 42, 03/08/2026: três ataques ao Google Password Manager no Chrome para Windows; no mais grave, o *Security Domain Secret* — a chave mestra de todas as passkeys sincronizadas da conta — é extraído da memória, e não pode ser rotacionado nem revogado. Todos exigem malware prévio. Recomendação central: endurecer os fluxos de recuperação e de reinscrição de aparelho [3].
- **A central de atendimento é a porta.** O grupo Scattered Spider entra ligando para a central, fingindo ser funcionário ("troquei de celular", "o autenticador não funciona") e pedindo redefinição de senha e transferência de MFA; foi a entrada do ataque à Marks & Spencer em abril de 2025 [4].
- **Passkey pós-quântica não existe na prática.** A FIDO estuda extensões; os obstáculos vão além de trocar o algoritmo: cadeias de atestação em X.509 com curva elíptica, protocolo de PIN baseado em ECDH, chaves e assinaturas maiores para autenticadores com pouca memória, limites de tamanho de mensagem no CTAP-HID; não há cronograma [29].
- **Local-first tem custo de engenharia visível.** Na discussão "Linear sent me down a local-first rabbit hole" (Hacker News, 467 pontos, 218 comentários, agosto de 2025), os argumentos contra são concretos: tamanho do dado, conflito, autorização separada das consultas, migração de esquema com cliente offline por meses [19].
- **A carteira sem quem a aceite** (Alemanha, [7]) e a **migração de identidade descentralizada** que pode trancar a pessoa para fora, com limites de envio de blobs e servidores que exigem convite ou telefone [16].

### O relógio pós-quântico

| Marco | Data | Fonte |
|---|---|---|
| NIST: RSA-2048 e ECC P-256 obsoletos para sistemas novos | 2030 | [23] |
| NIST: algoritmos vulneráveis ao quântico retirados | 2035 | [23] |
| NSA CNSA 2.0: sistemas operacionais, aplicações e nuvem só com algoritmos novos | 2033 | [23] |
| UE: infraestrutura crítica migrada nos casos de alto risco / risco médio | fim de 2030 / fim de 2035 | [23] |
| Cloudflare: todos os serviços pós-quânticos, inclusive autenticação | 2029 | [26] |
| Google: circuito para quebrar ECDLP-256 com <1.200–1.450 qubits lógicos, <500 mil qubits físicos, "alguns minutos" | 31/03/2026 | [25] |
| Especialistas (26): chance de computador quântico criptograficamente relevante em 10 anos / 15 anos | 28–49% / 51–70% | [24] |

A Cloudflare antecipou a própria meta para 2029 citando duas estimativas de 2026: a do Google, que usou uma prova de conhecimento zero para validar o resultado sem publicar o circuito, e a da Oratomic, de 10 mil qubits em átomos neutros para quebrar P-256 [26] (a da Oratomic só li como citada pela Cloudflare).

### Quem constrói

FIDO Alliance, Apple, Google e Microsoft na autenticação; 1Password, Bitwarden e Dashlane na portabilidade; Apple, Meta e Signal na cifra e na IA em enclave; Ink & Switch, comunidades de Yjs, Automerge e Loro e empresas de motor de sincronia no local-first; Bluesky no AT Protocol; Comissão Europeia, Estados-membros e Athumi na identidade e no cofre público; NIST, NSA, Cloudflare e Google na migração pós-quântica; Banco Central do Brasil (JSR) e governo federal (gov.br). Com incentivo para frear: Home Office britânico, Conselho da UE, forças policiais, e grupos de fraude que vivem da recuperação de conta.

### Números de adoção

| O quê | Número | Fonte |
|---|---|---|
| Consumidores com passkey em ≥1 conta (10 países) | 75% | [2] |
| Empresas sem senha na maior parte da força de trabalho | 28% | [2] |
| Tráfego humano na Cloudflare com acordo de chave pós-quântico | >65% (abril de 2026) | [26] |
| Yjs / Automerge / Loro, downloads semanais | ~920 mil / ~85 mil / ~12 mil | [18] |
| Contas Bluesky / ativos por dia | 41,4 mi (12/2025) / ~4,5 mi (01/2026) | [17] |
| Estados da UE prontos para a EUDI Wallet | menos de 1/3 | [7] |
| Transações bancárias por celular no Brasil (2025) | 78% de 240,8 bi | [10] |
| Usuários de apps local-first de consumo | sem número encontrado | — |
| Contas em PDS próprio no AT Protocol | sem número encontrado | — |
| Passkeys com algoritmo pós-quântico em produção | sem número encontrado (nenhum caso achado) | — |
| Cofres Solid ativos em Flandres | sem número encontrado | [21] |

### O ambiente político

- **Reino Unido.** A Apple deixou de oferecer Advanced Data Protection a novos usuários britânicos: dez categorias (backup, Drive, Fotos, Notas etc.) perdem a cifra ponta-a-ponta; iMessage, FaceTime e 15 categorias padrão, incluindo o chaveiro, continuam cifradas [11].
- **União Europeia.** O Parlamento votou em abril de 2026 contra prorrogar a derrogação que permitia varredura voluntária; depois, por manobra processual, a varredura foi autorizada até 03/04/2028; no regulamento permanente, a varredura obrigatória de conteúdo cifrado foi abandonada pelos Estados, mas continuam "medidas de mitigação de risco", como verificação de idade [12].
- **Brasil.** ADI 5527 e ADPF 403 (bloqueios do WhatsApp em 2015–2016): os relatores Rosa Weber e Edson Fachin votaram para afastar interpretação do Marco Civil que obrigue a entregar conteúdo cifrado; os dois rejeitam criar vulnerabilidade excepcional [13]; o julgamento foi interrompido por pedido de vista de Alexandre de Moraes (IP.rec, lido — ver 12.4). Em 22/09/2026 não achei decisão final.

## 4. As disrupções-raiz

**Recusas pelo critério de maturidade (§2).**
- *Candidato "passkeys como forma de login" recusado como raiz: 75% dos consumidores em dez países já ativaram em ≥1 conta em 2026 [2]; o gov.br oferece desde fevereiro de 2026 [8]. Tratado como contexto na seção 3.*
- *Candidato "acordo de chave pós-quântico no TLS" recusado como raiz: maioria do tráfego humano na Cloudflare desde 2025–2026 [26]. Contexto; o que entra como raiz (d4) é o dado **guardado** e a **chave de identidade**, onde a migração não começou.*
- *Candidato "cifra ponta-a-ponta em mensageiro" recusado: maioria (WhatsApp, iMessage, Signal); contexto.*
- *Candidatos "backup cifrado opcional", "HTTPS", "2FA por SMS", "login com Google" recusados: maduros, pela régua do tema.*
- *Candidato "CRDT como biblioteca" recusado: é componente, não ruptura; entra como pré-condição de d3.*
- *Candidato "cofre pessoal de dados (Solid) como raiz própria" recusado por ora: demonstração pública sem número de uso [21]; tratado como sinal fraco (seção 6) e como variante de d3.*

### d1 — A conta vira chave: sem senha, a identidade passa a morar no aparelho e na carteira da pessoa, e o provedor deixa de ser o caminho de volta

1. **O que rompe.** O "esqueci minha senha" como recuperação universal, barata e automática, e a suposição de que o provedor sempre consegue devolver a conta. Rompe também o "entrar com Google" como prova de identidade, quando a carteira do Estado faz o mesmo apresentando só o atributo pedido.
2. **Por que agora.** Passkey sincronizada nos três sistemas e em maioria como opção [2]; contatos de recuperação e de legado [5]; portabilidade de credencial padronizada [6]; prazo legal da carteira europeia [7]; gov.br e Pix com FIDO no Brasil [8][9]. Há cinco anos não havia base instalada para tirar a senha sem deixar gente de fora.
3. **Onde está na difusão.** Adoção precoce para conta **sem** nenhuma senha (sem número de consumo encontrado; 28% das empresas na força de trabalho [2]); produto de nicho para carteira de identidade fora da França; demo pública para passkey sem caminho de volta por senha.
4. **O que falta.** Serviços apagarem a senha das contas antigas; recuperação que não volte ao SMS nem à central de atendimento; resposta para quem tem um aparelho só ou compartilhado; herança que inclua o chaveiro [5]; quem aceite a carteira [7].

### d2 — O servidor cego: a cifra ponta-a-ponta sai da mensagem e chega ao backup, ao documento e à IA, e quem guarda o dado deixa de poder lê-lo

1. **O que rompe.** O modelo em que o servidor lê o que guarda — para personalizar, anunciar, moderar, atender o cliente e cumprir ordem judicial.
2. **Por que agora.** Computação confidencial em produção para IA sobre dado pessoal [14][15]; a pressão contrária aberta (Reino Unido [11], UE [12]) mostra que o tema passou de técnico a político.
3. **Onde está na difusão.** Adoção precoce para backup cifrado opcional (o ADP é *opt-in*); produto de nicho para IA em enclave; laboratório para moderação e atendimento sem leitura.
4. **O que falta.** Backup cifrado por padrão nos dois grandes sistemas; auditoria independente de enclave que funcione fora do laboratório do fabricante; resolução jurídica (STF [13], regulamento europeu [12], Online Safety Act).

### d3 — Local-first: o original do dado passa a morar no aparelho e o servidor vira relé de sincronia

1. **O que rompe.** O SaaS em que cancelar a assinatura ou a empresa fechar significa perder o trabalho [1]; a retenção por posse do dado; o suporte que resolve tudo no banco do servidor; o backend como lugar da regra de negócio.
2. **Por que agora.** CRDTs rápidos e com ecossistema (Yjs ~920 mil downloads semanais [18]); SQLite no cliente como banco da aplicação; controle de acesso e cifra para dado local-first em código aberto (Keyhive [20]). A ideia é de 2019 [1]; mudou o ferramental.
3. **Onde está na difusão.** Produto de nicho (budgero, kostos [30][31]); em empresas, apps de sincronia local como o Linear, que carregam o espaço de trabalho no navegador [19] — mas ali o servidor continua sendo a fonte da verdade, o que é *offline-first*, não soberania.
4. **O que falta.** Um app de massa em que o original more no aparelho; modelo de negócio de sincronia que pague a conta; resposta para a perda do aparelho; migração de esquema para clientes que ficam meses offline [19].

### d4 — Cifra com prazo de validade: o computador quântico transforma o dado guardado sem camada pós-quântica em segredo que expira, e a chave de identidade do aparelho terá de ser trocada

1. **O que rompe.** A suposição de que "cifrado = seguro para sempre", que sustenta d2 (o servidor cego só é cego enquanto a cifra resistir) e d1 (a passkey é um par de chaves P-256 [29]). Rompe também a ideia de que um acervo pode ser cifrado uma vez e esquecido: o que foi copiado ontem pode ser lido amanhã [27][28].
2. **Por que agora.** Padrões ML-KEM, ML-DSA e SLH-DSA publicados em 2024; prazos de retirada em 2030 e 2035 [23]; estimativa de recurso para quebrar ECDLP-256 caindo cerca de vinte vezes em qubits físicos em 2026 [25]; especialistas dando 51–70% de chance em quinze anos [24] — exatamente a janela deste mapa. Há cinco anos não havia padrão nem estimativa que coubesse em 2041.
3. **Onde está na difusão.** Maioria no tráfego (recusado acima); adoção precoce em mensageiros (iMessage, Signal [27][28]); laboratório para passkeys [29]; sem caso encontrado de recifragem de acervo pessoal já guardado.
4. **O que falta.** Assinatura pós-quântica no WebAuthn e nos autenticadores; recifragem de backups e arquivos que já estão com terceiros; atestação e cadeias de certificado migradas [29]; e — o item decisivo — que o computador quântico relevante apareça dentro da janela. Se não aparecer, d4 vira custo de migração sem ruptura (seção 7).

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "A conta vira chave: sem senha, a identidade passa a morar no aparelho e na carteira da pessoa, e o provedor deixa de ser o caminho de volta"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O esqueci-minha-senha é substituído por recuperação via segundo aparelho, contatos de confiança ou prova de documento pela carteira, e a recuperação passa a ser a interface crítica da conta"
        sinal: forte
        prazo: 2030
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "A central de recuperação vira o principal vetor de invasão, e o golpe migra do phishing de senha para a ligação ao atendimento com voz e rosto sintéticos"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Bancos e serviços públicos passam a exigir comparecimento a balcão credenciado — agência, cartório, posto de atendimento — para devolver conta sem senha, porque a presença física vira a prova que a mídia sintética não imita"
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Quem tem um só aparelho, compartilhado ou de pré-pago, fica com conta de segunda classe, porque a recuperação pressupõe segundo aparelho ou rede de pessoas de confiança cadastradas"
            sinal: fraco
            prazo: 2033
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Programas de inclusão digital passam a medir se a pessoa tem caminho de volta para a conta, e não só se tem acesso, e o gov.br passa a emitir credencial de recuperação em ponto físico como serviço universal"
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O chaveiro sincronizado do sistema operacional vira ponto único de falha da vida digital, porque uma chave mestra que não se rotaciona protege todas as passkeys da pessoa"
        sinal: medio
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Reguladores de consumidor e de concorrência passam a exigir exportação de credenciais em formato padrão como direito, porque o chaveiro vira a principal trava para trocar de ecossistema"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Trocar de marca de celular deixa de custar as credenciais, e o aprisionamento migra para a memória acumulada do assistente pessoal, que não tem formato de exportação"
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Famílias com certidão de óbito e contato de legado recebem fotos e arquivos mas não o chaveiro, e perdem o acesso a contas bancárias, de governo e de rede social de quem morreu"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "O espólio digital ganha procedimento próprio no inventário, com a chave de legado guardada junto ao testamento e custodiada por cartório ou inventariante"
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Provar quem se é deixa de significar entregar o documento inteiro, porque a carteira no aparelho apresenta só o atributo pedido — maior de idade, residente, titular da conta"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "A verificação de identidade cai de dezenas de euros por cliente para poucos euros e passa a ser pedida por padrão em loja, serviço de mídia e plataforma de conteúdo"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "O acesso anônimo deixa de ser o padrão em serviços de mídia regulados e vira modo que se escolhe e se justifica, porque verificar a idade passou a custar quase nada"
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "O Estado passa a ser o provedor de identidade que antes era o login de plataforma, e bancos e grandes plataformas obrigados a aceitar a carteira viram o gargalo da adoção"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "O entrar-com-Google perde a função de prova de identidade e fica como conveniência, e as plataformas perdem o grafo de login entre sites como matéria-prima de publicidade"
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "Serviços mantêm senha ou código por SMS escondidos como caminho de volta por anos, porque atender quem perdeu o aparelho custa mais que o ganho de segurança, e a senha acaba na tela mas não no banco de dados"
        sinal: medio
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Forçar a conta a cair no caminho de volta — reinscrição de aparelho, SMS, senha antiga — vira a técnica padrão contra contas com passkey"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Regras de ressarcimento de fraude passam a atribuir o prejuízo à instituição que manteve caminho de volta por SMS ou senha em conta que se dizia sem senha"
                sinal: fraco
                prazo: 2035
                confianca: baixa
  - disrupcao: "O servidor cego: a cifra ponta-a-ponta sai da mensagem e chega ao backup, ao documento e à IA, e quem guarda o dado deixa de poder lê-lo"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "Recursos de IA sobre dado pessoal passam a rodar em enclave auditável, e o nem-nós-lemos vira alegação técnica verificada por terceiros em vez de promessa de política de privacidade"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Logs de transparência e pesquisadores independentes passam a fazer parte da cadeia de confiança do produto, e o atestado do enclave aparece na interface como estado verificável"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "A quebra de um enclave muito usado expõe de uma vez o dado de milhões de pessoas, e o desenho de produto volta a preferir o processamento no próprio aparelho"
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "A personalização por perfil comportamental montado no servidor perde matéria-prima nos serviços cifrados, e a publicidade neles migra para contexto e para o que a pessoa declara"
            sinal: fraco
            prazo: 2037
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Pessoas passam a ceder a anunciantes um perfil calculado no próprio aparelho, em troca de desconto, sem que o dado bruto saia"
                sinal: fraco
                prazo: 2041
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "Governos respondem ao servidor cego trocando o alvo do servidor para o aparelho, com varredura no cliente, verificação de idade no sistema e ordens contra recursos de cifra"
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
                efeito: "Pessoas e empresas passam a escolher a jurisdição da conta como decisão de segurança, e conta registrada em país de sigilo forte vira produto vendido à classe média"
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "O julgamento das ADI 5527 e ADPF 403 no STF passa a decidir se apps que guardam dado cifrado sem poder lê-lo podem operar no Brasil sem risco de bloqueio"
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "Apps brasileiros de saúde e finanças se dividem entre os que adotam cifra ponta-a-ponta e os que mantêm a leitura para cumprir ordem judicial, e a escolha vira atributo de marca"
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "A moderação em espaços cifrados passa a depender de denúncia feita pelo participante, com o trecho revelado pelo próprio aplicativo, porque o servidor não vê o conteúdo"
        sinal: fraco
        prazo: 2032
        confianca: baixa
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Plataformas de comunidade que adotam cifra escolhem entre limitar o tamanho dos grupos e manter um modo aberto não cifrado para o público"
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "O tamanho máximo de grupo cifrado vira parâmetro negociado entre reguladores e plataformas, como hoje se negocia a faixa etária"
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "O atendimento ao cliente deixa de poder ver a conta, e o suporte de serviço cifrado passa a pedir que a pessoa compartilhe, do próprio aparelho, um recorte do dado com prazo"
        sinal: fraco
        prazo: 2032
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Centrais de atendimento terceirizadas perdem a função de consultar o cadastro e passam a guiar a pessoa pelo próprio aparelho, com menos resolução por ligação"
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "Compartilhar a tela com o suporte vira o vetor de golpe dominante, porque passa a ser o único modo legítimo de um atendente ver o dado"
                sinal: fraco
                prazo: 2038
                confianca: baixa
  - disrupcao: "Local-first: o original do dado passa a morar no aparelho e o servidor vira relé de sincronia"
    efeitos:
      - id: e9
        ordem: 1
        efeito: "Ferramentas de criação e de finanças pessoais passam a ser vendidas como software que continua funcionando se a empresa fechar, e sobreviver ao fornecedor vira argumento de venda"
        sinal: forte
        prazo: 2033
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "A assinatura desloca-se de acesso ao dado para serviço de sincronia e backup, e o preço cai em direção ao custo do relé, porque o servidor não guarda o original"
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "A sincronia vira serviço intercambiável, oferecido por provedores de relé independentes do app, como hoje se escolhe provedor de e-mail"
                sinal: fraco
                prazo: 2039
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: "O conflito entre versões editadas em aparelhos diferentes vira estado visível da interface, com as duas versões lado a lado, porque o CRDT funde o dado mas não decide a intenção"
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: "O histórico ramificado, hoje restrito ao código, chega a documentos, planilhas e peças de mídia de uso comum, e a versão passa a ser objeto que se mostra, se nomeia e se discute"
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: "Agentes de IA que operam sobre finanças e documentos da pessoa passam a rodar sobre a cópia local do dado, sem enviá-lo ao provedor do aplicativo"
        sinal: forte
        prazo: 2031
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "Bancos e fintechs perdem a exclusividade da categorização e da análise do extrato, porque a análise passa a acontecer no aparelho a partir do extrato exportado"
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: "O Open Finance brasileiro sofre pressão para entregar o dado à própria pessoa, no aparelho dela, e não só a instituições autorizadas"
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: "Quem perde o aparelho sem sincronia configurada perde o dado de verdade, e o não-temos-acesso deixa de ser falha do suporte e passa a ser propriedade do produto"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "Apps local-first passam a oferecer cópia no servidor com chave em custódia do fornecedor como opção padrão, e a maioria das pessoas a escolhe"
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: "A custódia de chave de recuperação vira serviço regulado, oferecido por bancos, cartórios ou empresas públicas de dados, com as regras de uma custódia de valores"
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: "A regra de negócio, a permissão e a migração de esquema saem do servidor e passam para o cliente, e o ofício de backend passa a ser o de desenhar protocolo de sincronia"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: "Aplicativos passam a ler formatos de dado com anos de idade, porque clientes ficam meses offline, e manter compatibilidade com versões antigas vira custo permanente de produto"
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: "A interface passa a mostrar a idade do dado como informação de primeira classe — sincronizado há três dias, editado em outro aparelho — e o design de mídia passa a lidar com conteúdo que chega atrasado"
                sinal: fraco
                prazo: 2039
                confianca: baixa
  - disrupcao: "Cifra com prazo de validade: o computador quântico transforma o dado guardado sem camada pós-quântica em segredo que expira, e a chave de identidade do aparelho terá de ser trocada"
    efeitos:
      - id: e13
        ordem: 1
        efeito: "Serviços que guardam dado cifrado passam a recifrar acervos inteiros com algoritmo pós-quântico, e o backup ponta-a-ponta ganha data de validade declarada"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: "Tráfego e backups cifrados só com curva elíptica, copiados entre 2010 e 2030, tornam-se legíveis para quem os guardou, e o passado cifrado vira vazamento retroativo"
            sinal: fraco
            prazo: 2040
            confianca: baixa
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: "Fontes jornalísticas, ativistas e dissidentes de 2015 a 2030 ficam expostos retroativamente, e apagar cópias antigas antes da quebra vira pedido formal a provedores"
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e13.2
            ordem: 2
            efeito: "Apagar passa a proteger mais que cifrar, e mensagens e backups com prazo de destruição passam a ser oferecidos como defesa contra a quebra futura"
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e13.2.1
                ordem: 3
                efeito: "O arquivo pessoal perene — fotos, cartas, diários — entra em conflito com a destruição programada, e o design passa a separar guardar-para-sempre de manter-secreto-para-sempre"
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: "Toda passkey de curva elíptica tem de ser reemitida, porque não há como converter a chave antiga em pós-quântica, e bilhões de credenciais passam por nova inscrição"
        sinal: medio
        prazo: 2036
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: "A reinscrição em massa vira a maior janela de ataque à recuperação de conta já vista, porque cada reemissão repete o fluxo que a central de atendimento já não protege"
            sinal: fraco
            prazo: 2037
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: "Chaves físicas sem firmware atualizável viram descarte em massa, e o recolhimento de autenticadores obsoletos entra na política de resíduos eletrônicos"
                sinal: fraco
                prazo: 2039
                confianca: baixa
          - id: e14.2
            ordem: 2
            efeito: "Aparelhos sem capacidade de assinatura pós-quântica ficam fora de bancos e governo, e a vida útil do celular passa a ser ditada pela criptografia"
            sinal: fraco
            prazo: 2037
            confianca: media
            efeitos:
              - id: e14.2.1
                ordem: 3
                efeito: "O celular usado e recondicionado perde valor como porta de entrada para o banco no Brasil, e quem só compra usado perde acesso a serviço financeiro"
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e15
        ordem: 1
        efeito: "Prazos de migração pós-quântica e exigência de inventário criptográfico chegam a quem guarda dado pessoal, e apps pequenos, self-hosted e local-first arcam com um custo que os grandes diluem"
        sinal: medio
        prazo: 2033
        confianca: baixa
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: "Autores de apps pequenos delegam toda a criptografia a poucas bibliotecas mantidas, e a soberania do dado passa a depender de meia dúzia de pacotes"
            sinal: fraco
            prazo: 2035
            confianca: baixa
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: "Uma falha numa biblioteca pós-quântica muito usada atinge de uma vez milhares de apps soberanos, e a descentralização do dado convive com monocultura da cifra"
                sinal: fraco
                prazo: 2038
                confianca: baixa
```

### O que o bloco não diz: os mecanismos

**d1 — a conta vira chave.**
- `e1`: porque a passkey elimina o segredo que o site podia redefinir, a volta da conta passa a exigir outra prova — outro aparelho, outra pessoa ou um documento. Artefatos: contato de legado e de recuperação da Apple [5], 51%/42%/41% de métodos de recuperação nas empresas [2], gov.br com passkey [8] — sinal forte. Prazo 2030 pela classe de referência "passkey": do WebAuthn como recomendação W3C (2019, memória — ver seção 8) a 75% com ≥1 conta em 2026 [2], cerca de sete anos; a recuperação sem senha como padrão é o passo seguinte e mais lento.
- `e1.1`: porque, sem senha, a única porta que um humano ainda abre é a central, o atacante vai para lá — é o que o Scattered Spider já faz com MFA [4] e o que a Unit 42 recomenda endurecer [3]. `e1.1.1`: porque voz e rosto remotos passam a ser imitáveis, a presença física vira a prova escassa; no Brasil, a rede de agências, cartórios e postos já existe. Mecanismo meu, sem caso.
- `e1.2`: porque a recuperação pressupõe redundância (segundo aparelho, pessoas cadastradas), quem não tem redundância fica sem volta. `e1.2.1`: porque o gov.br já é a porta dos serviços públicos e adotou passkey [8], a exclusão aparece primeiro para ele.
- `e2`: porque o *Security Domain Secret* protege todas as passkeys e não se rotaciona [3]. Confiança alta: é propriedade do desenho, não previsão. `e2.1`: porque o chaveiro trava a troca de ecossistema, a portabilidade vira pauta de regulador — o CXP existe [6] e o Data Act já trata de trocar de provedor de nuvem [22]. `e2.1.1`: troca de ator (do chaveiro para o assistente); mecanismo meu. `e2.2`: porque o contato de legado da Apple exclui o chaveiro [5], quem herda recebe fotos e não as contas. `e2.2.1`: porque a chave de legado é um código a guardar fora do aparelho [5], ela vai para o lugar onde já se guarda o que é de herança.
- `e3`: porque a carteira apresenta atributo em vez de documento, provar idade não exige mais mostrar nome e número [7]. `e3.1`: porque o custo cai de 70–100 para 3–8 euros [7], verificar passa a compensar em qualquer serviço. `e3.1.1` é **retroação**: a identidade soberana barateia a identificação e, com isso, encolhe o anonimato — contradição registrada na seção de cruzamentos. `e3.2`: porque bancos e grandes plataformas serão obrigados a aceitar a carteira um ano após dezembro de 2026 [7], o Estado entra no lugar do login de plataforma; o gargalo alemão é quem aceita. `e3.2.1`: troca de ator (da plataforma para o anunciante).
- `e4` é a **retroação com dono** de d1: quem bloqueia é o próprio provedor, porque o atendimento de quem perdeu o aparelho custa caro; 51% das empresas recuperam por via administrativa [2]. `e4.1`: a Silver Pass-ta-key força a reinscrição do aparelho para registrar uma chave do atacante [3]. `e4.1.1`: mecanismo meu; no Brasil, regras de devolução de valores do Pix existem (memória, não aberta — ver seção 8).

**d2 — o servidor cego.**
- `e5`: porque o enclave com transparência verificável [15] e o Private Processing [14] tornam checável a alegação de não-leitura. Classe de referência: "HTTPS por padrão", de opcional a maioria das páginas em cerca de cinco anos depois de ficar gratuito (memória — seção 8). `e5.1`: porque o fabricante publica medições e ambiente de pesquisa [15], o pesquisador independente passa a fazer parte do produto. `e5.1.1`: porque a concentração de muitos usuários num enclave cria alvo único; retroação sobre d2.
- `e5.2`: porque o servidor não lê o conteúdo, o perfil comportamental perde matéria-prima — mas os metadados continuam fora da cifra, e por isso o prazo foi empurrado (seção 7). `e5.2.1`: troca de ator (a pessoa vende o perfil); prazo no limite do horizonte.
- `e6` é **quem bloqueia** d2: Reino Unido [11], UE [12], STF [13] — três artefatos, sinal forte. `e6.1`: o ADP britânico é o caso [11]. `e6.1.1`: mecanismo meu. `e6.2`: porque os votos de 2020 afastam a obrigação de entregar conteúdo cifrado [13], a decisão final define o risco de operar. `e6.2.1`: troca de ator (das plataformas globais para os apps nacionais).
- `e7`: porque o servidor não vê, só quem está na conversa pode denunciar. Não abri documentação do mecanismo de revelação (seção 8), por isso o sinal caiu para fraco. `e7.1` e `e7.1.1`: grupos grandes funcionam como espaço público; o regulador quer vê-los.
- `e8`: porque o atendente não consegue abrir o cadastro, o suporte precisa do consentimento ativo da pessoa. Quem perde: centrais terceirizadas (`e8.1`). `e8.1.1` liga-se a `e1.1`: a tela compartilhada vira o novo canal de golpe.

**d3 — local-first.**
- `e9`: porque o original fica no aparelho, o fechamento da empresa não apaga o trabalho [1]. Sinal forte pela regra (três artefatos: budgero, kostos, Keyhive [30][31][20]), mas os três são de nicho — o sinal mede existência, não escala. Classe de referência: o próprio local-first, sete anos (2019–2026) sem número de consumo encontrado; daí o prazo 2033.
- `e9.1`: porque o servidor só retransmite, o custo marginal cai. `e9.1.1`: troca de ator (provedor de relé independente). `e9.2`: porque a fusão automática não decide intenção, o conflito precisa de tela [19]. `e9.2.1`: classe de referência "controle de versão distribuído", que levou cerca de uma década para virar padrão no código (memória).
- `e10`: porque o dado já está no aparelho, o agente o lê ali — accountant24, TaxHacker, rotki [32][33][34]. A fronteira com o tema 16 foi mantida: o objeto é o dado, não o modelo. `e10.1`: troca de ator (o banco perde a análise). `e10.1.1`: nota Brasil.
- `e11`: porque não há cópia legível no servidor, não há o que devolver; a documentação do AT Protocol avisa que a migração pode trancar a pessoa para fora [16]. `e11.1` é a **retroação** de d3: a maioria prefere rede de segurança a soberania; `e11.1.1`: troca de ator (custodiante regulado; a Athumi mostra um formato público possível [21]).
- `e12`: porque a lógica roda onde o dado está, o servidor perde a regra [19][20]. **Quem bloqueia d3**: empresas de SaaS cuja receita vem da posse do dado e da retenção; e o próprio custo de engenharia, apontado na discussão de 2025 [19].

**d4 — cifra com prazo de validade.**
- `e13`: porque o dado copiado hoje pode ser lido depois da quebra [27][28], quem guarda acervo cifrado precisa recifrar antes. Nenhum caso encontrado de recifragem de acervo pessoal; sinal médio pelos protocolos de mensagem, que tratam só do que é transmitido daqui em diante.
- `e13.1`: prazo 2040 pela estimativa de 51–70% em quinze anos, medida em 2025–2026 [24], e pela redução de recursos de 2026 [25]. `e13.1.1` passa do horizonte (2042): fora da janela do mapa, mantido porque é o efeito de maior dano humano.
- `e13.2`: porque um dado apagado não pode ser decifrado depois, a destruição programada vira defesa. `e13.2.1`: contradição com o arquivo perene; troca de ator (família, arquivista).
- `e14`: porque a passkey é um par de chaves P-256 sem conversão possível, a migração exige nova inscrição; os obstáculos de autenticador e atestação estão em [29]. Classe de referência: retirada do SHA-1 dos navegadores, cerca de seis anos entre a obsolescência formal e a remoção (memória — seção 8); com NIST retirando em 2035 [23], 2036 é o primeiro ano plausível de massa.
- `e14.1` liga d4 a d1: cada reemissão é um fluxo de recuperação. `e14.2`: porque assinatura pós-quântica é maior e mais pesada [29], hardware antigo fica fora; `e14.2.1`: nota Brasil, onde o mercado de usados é grande (sem número aberto).
- `e15` é a **retroação e quem bloqueia** de d4 contra d1–d3: a migração é cara, e o custo pesa mais em quem é pequeno — os prazos da UE, NIST e NSA [23] são desenhados para infraestrutura grande. Quem perde: o self-hosted e o local-first independente.

### Regra de parada

Nenhum ramo passou da terceira ordem. Quatro filhos candidatos foram cortados por serem o pai "mais adiante" (seção 12.5): "centrais de senha encolhem" (é `e1` amadurecendo), "mais países tiram o ADP" (é `e6.1`), "mais apps local-first de finanças" (é `e9`), "mais mensageiros adotam PQ" (é contexto, recusado como raiz).

### Cruzamentos (§4)

- **Convergência 1 — a recuperação é o ponto onde tudo se encontra.** `e1.1` (d1), `e8.1.1` (d2), `e11` (d3) e `e14.1` (d4) chegam ao mesmo efeito de segunda ordem: o momento em que a pessoa perde o acesso e alguém precisa decidir se ela é quem diz ser. É o achado principal do mapa. Para quem projeta interação, é a tela mais importante de 2041 e a que menos recebe desenho hoje.
- **Convergência 2 — o custodiante volta.** `e2.2.1` (cartório com chave de legado), `e11.1.1` (custódia regulada) e `e1.1.1` (balcão físico) indicam que a soberania da pessoa não elimina o intermediário: ela troca a plataforma por um custodiante de outro tipo, regulado e muitas vezes público.
- **Retroalimentação — d4 enfraquece d2.** O servidor cego guarda texto cifrado; se a cifra expira (`e13.1`), guardar dado cifrado de terceiros vira passivo, e o incentivo passa a ser guardar menos (`e13.2`) — o que reforça d3 (o original no aparelho) e enfraquece o modelo de backup cifrado na nuvem.
- **Retroalimentação — d1 reforça e6.** A carteira de identidade barateia a verificação (`e3.1`), o que dá ao Estado o instrumento para verificação de idade no sistema (`e6`), que é justamente a resposta ao servidor cego.
- **Contradição 1 — soberania e anonimato.** `e3` (identidade possuída pela pessoa) e `e3.1.1` (fim do acesso anônimo como padrão) não se sustentam juntos como "mais controle". Decide entre eles se a carteira permite prova de atributo sem vínculo entre usos; não verifiquei essa propriedade na EUDI (seção 8).
- **Contradição 2 — apagar e guardar.** `e13.2` (destruição programada) e `e9` (software que sobrevive ao fornecedor, "The Long Now" [1]) puxam em sentidos opostos. Decide entre eles o tipo de dado: comunicação tende a `e13.2`, obra e arquivo a `e9`.

### Cobertura STEEP e quem perde

- **Social:** `e1.2`, `e2.2`, `e3.1.1`, `e13.1.1`. **Tecnológico:** `e5`, `e9.2`, `e12`, `e14`. **Econômico:** `e9.1`, `e10.1`, `e8.1`, `e15`. **Ecológico:** `e14.1.1` (descarte de autenticadores) e `e14.2` (vida útil do celular) — categoria fraca, registrada assim. **Político:** `e6`, `e6.2`, `e3.2`.
- **Quem perde:** pessoas com um só aparelho (`e1.2`), herdeiros (`e2.2`), centrais terceirizadas (`e8.1`), anunciantes por perfil (`e5.2`), bancos na análise do extrato (`e10.1`), apps pequenos na migração pós-quântica (`e15`), fontes e dissidentes do passado (`e13.1.1`), compradores de celular usado (`e14.2.1`).

## 6. Sinais fracos e wildcards

### Sinais fracos

1. **IA de finanças que não sai da máquina** (`accountant24` 54 estrelas [32], `TaxHacker` 6.715 [33], `rotki` 4.029 [34]). **O que mudaria:** `e10` e `e10.1` ganhariam prazo mais cedo. **Sinal observável:** um banco ou app de massa oferecendo análise de extrato que roda no aparelho, com a frase "o dado não sai do seu celular" no material de venda.
2. **Controle de acesso para dado local-first** (Keyhive, 248 estrelas, código pré-alfa [20][35]). Sem ele, local-first colaborativo e cifrado é inviável; com ele, `e12` e `e9.1.1` ficam técnicos, não especulativos. **Sinal observável:** Automerge publicando o Beelay como protocolo estável, ou um app com mais de cem mil usuários usando Keyhive.
3. **Cofre pessoal operado por empresa pública** (Athumi/Solid em Flandres [21]). Se crescer, é um formato em que o custodiante de `e11.1.1` é o Estado. **Sinal observável:** número público de cofres ativos acima de 10% da população de Flandres.
4. **Migração adversarial no AT Protocol** [16]: a primeira forma documentada de levar a identidade contra a vontade do servidor. **Sinal observável:** um caso público de criador com grande audiência migrando em conflito com o servidor.
5. **Prova de conhecimento zero para criptoanálise** [25]: o Google validou a estimativa sem publicar o circuito. Se virar prática, o público deixa de saber quanto falta para a quebra — o prazo de `e13.1` fica menos observável. **Sinal observável:** outra estimativa relevante publicada só com prova, sem circuito. (Na busca apareceu que a Trail of Bits teria forjado uma prova explorando falhas no código do Google; não abri — seção 12.4.)
6. **Passkey pelo regulador financeiro no Brasil** (JSR [9], gov.br [8]). O Brasil pode chegar ao fim da senha pelo pagamento e pelo governo, não pelo login de plataforma. **Sinal observável:** o Banco Central estendendo a exigência FIDO ao acesso ao app bancário.

### Wildcards

1. **Computador quântico relevante antes de 2032, e sem anúncio.** *Mecanismo:* as estimativas de 2026 reduziram os recursos necessários em uma ordem de grandeza [25][26]; um ator estatal chega antes e não publica. *Por que é improvável:* especialistas davam 28–49% em dez anos [24], e o hardware atual está longe de 500 mil qubits físicos. *O que faria com o mapa:* `e13.1` vira 2032, `e14` vira emergência, e d2 perde a base: todo acervo cifrado só com curva elíptica fica exposto antes de ser recifrado. *Sinal precoce:* uma agência de governo antecipando seu prazo de migração sem justificar.
2. **Lei que obriga ponta-a-ponta ou local-first por padrão para dado sensível.** *Mecanismo:* depois de um vazamento de saúde ou financeiro em massa, um legislador (ANPD, via LGPD, ou a UE) transforma "o servidor não deve conseguir ler" em exigência. *Por que é improvável:* vai contra a pressão de varredura (`e6`) e contra o modelo de dado das plataformas. *O que faria:* d2 e d3 saltam para maioria em setores regulados; `e11.1.1` vira obrigatório. *Sinal precoce:* um regulador de saúde exigindo cifra no cliente em prontuário.
3. **Proibição da cifra ponta-a-ponta num grande mercado.** *Mecanismo:* o caminho britânico [11] generaliza e um país grande proíbe backup e mensageiro que o provedor não possa abrir. *Por que é improvável:* os mensageiros ameaçam sair e a pressão comercial é forte; o STF tem votos em sentido oposto [13]. *O que faria:* `e6.2.1` e `e6.1.1` viram regra, e o mapa se divide em dois mundos. *Sinal precoce:* um mensageiro de massa saindo de um país.
4. **Comprometimento em massa de um chaveiro sincronizado.** *Mecanismo:* o ataque ao *Security Domain Secret* [3] em escala, via malware distribuído. *Por que é improvável:* exige malware em cada aparelho. *O que faria:* inverteria d1 (volta da senha como segundo fator) e aceleraria `e2.1`. *Sinal precoce:* exploração do ataque em circulação.

## 7. Contra o próprio mapa

### Pré-mortem: é 2041 e este mapa estava errado. Por quê?

1. **O computador quântico não chegou.** A faixa de 51–70% em quinze anos [24] também significa 30–49% de não chegar. Sem ele, d4 é só custo de migração, feita em silêncio pelos grandes, sem ruptura para a pessoa. Aponta para `e13.1`, `e13.2`, `e15`. **Alteração:** `e13.1` prazo 2038 → 2040; `e15` confiança media → baixa.
2. **A passkey venceu e nada mais mudou.** A senha saiu da tela, o provedor ficou com a chave, a recuperação voltou ao e-mail com código e à central, e ninguém percebeu diferença. Aponta para `e1`, `e1.2`, `e4`. **Alteração:** `e1.2` confiança media → baixa (não achei medição de exclusão); `e4` mantido em alta, porque é exatamente este cenário.
3. **O servidor ficou cego só para o conteúdo.** Metadados continuam fora da cifra, e personalização, anúncio e moderação sobreviveram com eles. Aponta para `e5.2`, `e7`. **Alteração:** `e5.2` prazo 2035 → 2037; `e7` sinal medio → fraco e confiança media → baixa, porque não abri fonte sobre denúncia em mensageiro cifrado.

### Extrapolação linear

- `e9` ("mais software que sobrevive ao fornecedor") é o presente maior. Ganha não-linearidade só se `e11.1` (custódia) resolver a perda do aparelho; senão, fica nicho. **Alteração:** `e9` prazo 2031 → 2033.
- `e6.1` (cifra variando por país) é extrapolação do caso britânico. Mantido com confiança média porque o mecanismo (ordem legal contra recurso de cifra) é replicável, mas registrado aqui.

### Velocidade de adoção

- `e14` exigia, no rascunho, reemissão em massa em 2033. A retirada do SHA-1 levou cerca de seis anos entre obsolescência e remoção (memória); com o NIST retirando os algoritmos em 2035 [23] e sem passkey pós-quântica em produção [29], 2033 era mais rápido que a referência. **Alteração:** `e14` prazo 2033 → 2036 (três anos).
- `e3` (carteira em 2029) depende de quem aceita, e o gargalo alemão [7] sugere lentidão; mantido porque bancos e grandes plataformas terão obrigação legal a partir de 2027 [7], e a classe de referência regulatória (Pix, adoção de massa em poucos anos por obrigação do Banco Central — memória) é mais rápida que a de mercado.

### A raiz que não acontece

- **Sem d1** (a senha continua como caminho de volta): sobram d2, d3 e d4 inteiros; perde-se `e1`–`e3`. O mapa não depende só de d1.
- **Sem d2** (backup e IA continuam legíveis pelo servidor): sobram d1 e d3; d4 perde metade do peso (`e13` vale menos se o acervo não é cifrado). Há dependência parcial d4→d2, declarada.
- **Sem d3** (local-first fica em nicho): sobram d1, d2 e d4; perde-se a convergência 2 em parte.
- **Sem d4** (sem computador quântico): sobram d1–d3 intactos; `e14` ainda acontece por obrigação de norma [23], mais devagar. O mapa não é uma raiz disfarçada em quatro.

### Suposições escondidas

1. **A cifra continua legal nos grandes mercados.** Se quebrar, vira o wildcard 3 e o cenário indesejável.
2. **Os donos de sistema continuam permitindo gerenciadores de terceiros como provedores de passkey.** Se não, `e2.1` perde força e `e2` domina.
3. **O aparelho pessoal é individual.** No Brasil de celular compartilhado, não é para todos (`e1.2`).
4. **As fontes da FIDO não inflam a adoção.** O levantamento é encomendado pela própria aliança [2] e não inclui o Brasil.
5. **Os algoritmos pós-quânticos de 2024 não caem.** Se ML-KEM ou ML-DSA forem quebrados por criptoanálise clássica, d4 vira de novo corrida — wildcard não listado, registrado aqui.
6. **Há energia e silício para recifrar acervos.** Assumido sem verificação.

### Viés do autor

O tema e a zona "Pessoas e dados" favorecem a leitura de que a soberania da pessoa é desejável e inevitável. `e9`, `e10` e `e5.2.1` estão aqui em parte porque o autor gosta do desfecho; por isso `e11.1` (a maioria escolhe custódia) foi mantida com confiança média, acima da de `e9.1`. Outro viés: d4 foi promovida a raiz nesta rodada porque o horizonte de 2041 coincide com a janela das estimativas — é uma escolha que o horizonte sustenta, mas que transfere para o mapa a incerteza de uma única pesquisa de 26 especialistas [24].

### Calibração

Distribuição final (saída do verificador na seção 12.1): ordem 1 — alta 3, media 10, baixa 2; ordem 2 — alta 0, media 14, baixa 9; ordem 3 — alta 0, media 0, baixa 23. A confiança cai com a ordem.

### Registro de alterações

- `e1.1`: sinal forte → medio, porque só dois artefatos foram abertos [3][4].
- `e1.2`: confianca media → baixa, porque não achei medição de exclusão por falta de segundo aparelho.
- `e3.1.1`: prazo 2036 → 2038, porque a obrigação de aceitar a carteira só começa em 2027 [7] e a verificação de idade por atributo depende dela.
- `e5.2`: prazo 2035 → 2037, porque os metadados continuam alimentando o perfil (pré-mortem 3).
- `e7`: sinal medio → fraco; confianca media → baixa, porque não abri fonte sobre o mecanismo de denúncia.
- `e9`: prazo 2031 → 2033, porque local-first ficou sete anos sem número de consumo.
- `e12.1`: confianca media → baixa, porque a única evidência é uma discussão de fórum [19].
- `e13.1`: prazo 2038 → 2040, porque a faixa de 51–70% é para quinze anos a partir de 2025–2026 [24].
- `e14`: prazo 2033 → 2036, pela referência do SHA-1 e pelo prazo do NIST [23].
- `e15`: confianca media → baixa, porque depende do pré-mortem 1.
- **Removido** `e10.2` ("contadores humanos perdem clientes para agentes locais"): falha no teste da causa solta — aconteceria igual com IA em nuvem; vai para a seção 12.5.
- **Removido** `e6.3` ("verificação de idade no sistema operacional vira padrão global"): é o tema da identidade e da regulação de conteúdo, não depende do servidor cego; vai para a seção 12.5.

Cota por raiz: d1 (`e1.1`, `e1.2`, `e3.1.1`), d2 (`e5.2`, `e7`, remoção de `e6.3`), d3 (`e9`, `e12.1`, remoção de `e10.2`), d4 (`e13.1`, `e14`, `e15`) — cumprida.

## 8. O que a máquina errou

1. **Quase repeti o mapa de 2036.** Existe uma rodada deste mesmo tema com horizonte 2036 na pasta vizinha. Li-a antes de pesquisar, para não repeti-la às cegas, e a primeira versão da roda saiu com as mesmas três raízes e o pós-quântico só como wildcard. A promoção de d4 a raiz veio só depois de abrir a pesquisa do Global Risk Institute [24] e ver que 2041 cai dentro da janela de quinze anos. Vários efeitos de d1–d3 continuam próximos dos de 2036 (`e2`, `e4`, `e5`, `e6`, `e7`, `e9`, `e10`, `e11`); o confronto entre as duas rodadas deve levar isso em conta — a convergência entre elas não é independente.
2. **Classes de referência de memória.** "WebAuthn recomendação W3C em 2019", "SHA-1 retirado dos navegadores cerca de seis anos após a obsolescência", "HTTPS de opcional a maioria em cerca de cinco anos", "Pix com adoção de massa em poucos anos", "controle de versão distribuído levou uma década" e "regras de devolução de valores do Pix" são memória minha, não estão em nenhuma fonte aberta nesta rodada. Usei-as só como referência de velocidade, nunca como fato de efeito.
3. **Números de fornecedor.** O custo de 70–100 euros contra 3–8 euros por verificação vem de um fornecedor de passkeys citando terceiros [7]; a adoção de passkeys vem de pesquisa encomendada pela FIDO [2]. Os dois têm interesse no resultado.
4. **Oratomic citada de segunda mão.** A estimativa de 10 mil qubits para P-256 está no blog da Cloudflare [26]; não abri o trabalho original. O número do Google (<500 mil qubits físicos) vem da fonte primária [25].
5. **O resumidor devolveu datas contraditórias do Bluesky.** A página [17] traz "40,2 milhões em novembro de 2024" e "25,9 milhões em dezembro de 2024" na mesma tabela; a busca dizia "46 milhões em agosto de 2026". Usei só o dado atribuído ao relatório de transparência da própria Bluesky (41,4 milhões em dezembro de 2025) e o de ativos por dia; o resto descartei.
6. **Mecanismos meus, sem caso.** `e1.1.1` (balcão físico), `e2.1.1` (aprisionamento pelo assistente), `e4.1.1` (ressarcimento), `e6.1.1` (jurisdição), `e7.1.1` (tamanho de grupo), `e8.1.1` (tela compartilhada), `e13.1.1` (pedido de apagamento), `e14.1.1` (descarte de chaves) e `e15.1.1` (monocultura da cifra) são inferências sem nenhum artefato. Todas estão com sinal fraco e confiança baixa por isso.
7. **Propriedade da carteira não verificada.** A contradição 1 depende de a EUDI Wallet permitir prova de atributo sem vínculo entre usos. Não abri a especificação; a afirmação de que ela "apresenta só o atributo pedido" (`e3`) é o desenho declarado do projeto, não uma propriedade que conferi.
8. **Sinal "forte" que mede existência.** Pela regra da skill, três repositórios nomeados dão sinal forte a `e9` e `e10`. Os repositórios têm de 21 a 6.715 estrelas; a regra mede se há caso, não se há escala, e o leitor pode ler "forte" como adoção. Deixei a regra valer e registrei aqui.

## 9. Três cenários para 2041

**Provável.** Em 2041, quase ninguém digita senha, e quase ninguém percebe que isso mudou alguma coisa. A passkey é sincronizada pelo chaveiro do sistema, e a volta da conta passa por outro aparelho, por uma pessoa cadastrada ou por uma prova de documento na carteira do Estado — e, nos casos difíceis, por uma ida à agência. As mensagens e os backups dos dois grandes sistemas são cifrados, mas a proteção varia por país, e os metadados continuam alimentando anúncio. A migração pós-quântica aconteceu em silêncio nos grandes provedores, com uma rodada de reinscrição de passkeys entre 2035 e 2038 que abriu uma temporada de golpes de recuperação. Local-first é a arquitetura de ferramentas de criação e de um nicho de finanças pessoais; a maioria escolhe custódia de chave pelo fornecedor. **Sinal precoce:** um grande provedor anunciando recuperação de conta por atendimento presencial ou por carteira de identidade como padrão.

**Desejável.** Em 2041, a pessoa tem o original do próprio dado no aparelho, sincronizado por um relé que ela escolhe e que não lê o conteúdo; a chave de recuperação está com duas pessoas de confiança e com um custodiante regulado; o espólio digital tem procedimento no inventário e inclui o chaveiro. Os acervos cifrados foram recifrados com algoritmo pós-quântico antes da quebra, e mensagens que não precisam durar têm prazo de destruição. A carteira de identidade apresenta atributo sem permitir cruzar os usos. **O que teria de ser feito:** exportação de credenciais como direito (`e2.1`), herança do chaveiro, custódia de chave regulada (`e11.1.1`), decisão do STF pelo sigilo técnico (`e6.2`), bibliotecas pós-quânticas mantidas com financiamento público para apps pequenos (contra `e15`). **Sinal precoce:** um regulador exigindo exportação de passkeys entre ecossistemas.

**Indesejável.** Em 2041, a conta sem senha ficou presa ao chaveiro de dois fornecedores, e ser suspenso por um deles corta banco, governo e rede social de uma vez. A cifra ponta-a-ponta foi retirada de backups em vários países, e a varredura roda no aparelho. O computador quântico apareceu antes da recifragem, e mensagens de 2015–2030 copiadas em trânsito foram lidas. Quem tem um só celular, usado, sem segundo aparelho e sem gente cadastrada, entra no banco por um caminho de segunda classe ou não entra. Os apps local-first pequenos sumiram na migração criptográfica. **Sinal precoce:** a primeira suspensão de conta de chaveiro, noticiada, que tire de alguém o acesso ao banco e ao governo ao mesmo tempo.

## 10. O experimento

**O que é.** *O cofre com prazo de validade.* Um app de finanças pessoais da turma, no navegador: dado local-first (CRDT em IndexedDB), login só por passkey (biblioteca de WebAuthn no servidor, como `@simplewebauthn`, que está no substrato da turma), sincronia por um relé que só retransmite blocos cifrados, recuperação por divisão de segredo entre colegas (Shamir, dois de três), contato de legado com chave impressa, e uma opção de cifra "clássica" ou "híbrida pós-quântica" por registro.

**Que pergunta responde.** Quando a empresa não consegue devolver a conta e o segredo tem prazo, o que as pessoas escolhem — e conseguem executar — na hora da perda? A recuperação é a convergência central do mapa (seção 5); o experimento põe essa tela na mão de quem vai desenhá-la.

**Tecnologia emergente, e por que não dá com a madura.** Passkey sem senha de reserva, CRDT sem servidor como fonte da verdade, relé cego e cifra híbrida pós-quântica (ML-KEM combinado com curva elíptica, como no Signal [27]). Com a tecnologia madura — login com senha, banco no servidor, "esqueci minha senha" por e-mail — a perda nunca é real: o provedor sempre devolve. Só a arquitetura emergente torna a perda definitiva, e por isso testável. As bibliotecas exatas (implementação de ML-KEM em JavaScript, derivação de chave a partir da passkey) ficam para verificar na construção; não abri a documentação delas nesta rodada.

**O que a turma faz em sala.** Três provas, cerca de quinze minutos cada. (1) **Perder o aparelho:** cada pessoa apaga o armazenamento do navegador e tenta recuperar a conta pelos colegas que escolheu; mede-se tempo e taxa de sucesso. (2) **Herdar:** uma pessoa é declarada "falecida"; a herdeira usa a chave de legado impressa; descobre-se o que ela recebe e o que fica fora (o análogo do chaveiro [5]). (3) **Q-Day simulado:** o professor publica a chave privada clássica do relé — equivalente a uma quebra; registros cifrados só com a camada clássica ficam legíveis, os híbridos não. Antes de cada prova, cada pessoa escolhe: recuperação por colegas ou por custódia do "fornecedor" (o professor), e cifra clássica ou híbrida, sabendo que a híbrida é mais lenta.

**O resultado que me faria mudar de ideia.** Se mais de 70% escolherem a custódia do fornecedor depois de entender a troca, a retroação `e11.1` domina e d3 fica em nicho em 2041 — rebaixaria `e9` e `e9.1`. Se a recuperação por colegas falhar para mais da metade, ou levar mais de dez minutos, `e1` e `e1.1` estão subestimados em custo e o provável é a senha escondida de `e4`. Se ninguém escolher a cifra híbrida quando ela custa algum atraso, `e13` depende só dos provedores grandes, e `e15` sobe de confiança.

## 11. Fontes

1. https://www.inkandswitch.com/essay/local-first/ — Kleppmann, Wiggins, van Hardenberg, McGranaghan, "Local-first software" (Ink & Switch, abril de 2019): sete ideais, CRDTs, o software que deixa de rodar sem o servidor. Sustenta d3, `e9`, a contradição 2. Confiabilidade alta: texto fundador, lido na fonte.
2. https://www.descope.com/blog/post/2026-fido-report — Resumo do relatório FIDO 2026: 90% de conhecimento, 75% com ≥1 conta, 40%, 49%, 68%/30%/28% em empresas, 89%/51%/42%/41% em recuperação, 47% de abandono de compra. Sustenta a recusa da passkey como raiz, `e1`, `e4`. Confiabilidade média: resumo de fornecedor sobre pesquisa encomendada pela FIDO.
3. https://unit42.paloaltonetworks.com/passwordless-authentication-security-risks/ — Unit 42, "Pass the Passkey" (03/08/2026): três ataques, SDS sem rotação nem revogação, malware prévio, recomendação de endurecer recuperação e reinscrição. Sustenta `e2`, `e1.1`, `e4.1`, wildcard 4. Confiabilidade alta: pesquisa técnica primária.
4. https://www.infosecurity-magazine.com/blogs/scattered-spider-retailers/ — Scattered Spider e a central de atendimento; Marks & Spencer, abril de 2025 (15/09/2026). Sustenta `e1.1`. Confiabilidade média: blog de revista setorial, cita a CISA.
5. https://support.apple.com/guide/security/legacy-contact-security-secebf027fb8/web — Apple Platform Security: contato de legado, chave dividida, certidão de óbito, chaveiro excluído. Sustenta `e1`, `e2.2`, `e2.2.1`, o experimento. Confiabilidade alta: documentação primária.
6. https://www.corbado.com/blog/credential-exchange-protocol-cxp-credential-exchange-format-cxf — CXP/CXF, HPKE, estado dos rascunhos, implementação da Apple, contribuidores, o site não participa. Sustenta `e2.1`. Confiabilidade média: blog de fornecedor, consistente com a FIDO.
7. https://www.corbado.com/blog/eudi-wallet-2026-deadline-rollout-eic-2026 — EUDI Wallet: prazo de dezembro de 2026, menos de um terço prontos, sandbox alemão (115 organizações, 150 casos), gargalo de quem aceita, custo 70–100 × 3–8 euros, obrigação de aceitar. Sustenta `e3`, `e3.1`, `e3.2`. Confiabilidade média: fornecedor citando terceiros.
8. https://www.uai.com.br/economia/2026/02/19/nova-atualizacao-do-gov-br-nao-vai-mais-pedir-reconhecimento-facial-nem-senha-para-acessar-o-aplicativo/ — gov.br com passkey (19/02/2026), requisitos. Sustenta nota Brasil, `e1`, `e1.2.1`. Confiabilidade média: imprensa regional, sem dado de uso.
9. https://www.sensedia.com.br/post/fique-por-dentro-da-obrigatoriedade-da-jsr-no-open-finance-em-2026 — JSR obrigatória desde janeiro de 2026, FIDO Server, biometria. Sustenta nota Brasil, sinal fraco 6. Confiabilidade média: fornecedor de Open Finance.
10. https://portal.febraban.org.br/noticia/4469/pt-br/ — Pesquisa Febraban de Tecnologia Bancária 2026: 240,8 bi de transações em 2025, 78% pelo celular. Sustenta nota Brasil. Confiabilidade alta: entidade setorial.
11. https://support.apple.com/en-us/122234 — Apple: ADP indisponível para novos usuários no Reino Unido; categorias que perdem e que mantêm a cifra. Sustenta `e6`, `e6.1`, wildcard 3. Confiabilidade alta: fonte primária.
12. https://www.eff.org/deeplinks/2026/04/eu-parliament-blocks-mass-scanning-our-chats-whats-next — EFF sobre a votação de abril de 2026, a volta da varredura até 03/04/2028, o regulamento permanente. Sustenta `e6`. Confiabilidade média: organização de defesa com posição declarada.
13. https://isoc.org.br/noticia/policy-brief-criptografia-em-juizo-consideracoes-sobre-julgamento-da-adi-5527-e-da-adpf-403-pelo-stf — ISOC Brasil, *policy brief* sobre ADI 5527/ADPF 403 (lançado em 26/05/2025, notícia de 19/10/2025): votos de Rosa Weber e Fachin contra vulnerabilidade excepcional e contra bloqueio para forçar ordem judicial; não diz se o julgamento terminou. Sustenta `e6.2`, nota Brasil. Confiabilidade média: organização com posição declarada. A vista de Alexandre de Moraes vem do IP.rec (12.4).
14. https://engineering.fb.com/2025/04/29/security/whatsapp-private-processing-ai-tools/ — Meta: Private Processing (TEE, CVM, OHTTP, transparência verificável). Sustenta d2, `e5`. Confiabilidade média: fonte primária com interesse.
15. https://security.apple.com/blog/private-cloud-compute/ — Apple: Private Cloud Compute (10/06/2024), cinco requisitos. Sustenta `e5`, `e5.1`. Confiabilidade média: fonte primária com interesse.
16. https://atproto.com/guides/account-migration — AT Protocol: migração (CAR, blobs, preferências), migração adversarial, janela de 72 h, limites. Sustenta `e11`, sinal fraco 4. Confiabilidade alta: documentação oficial.
17. https://proxidize.com/blog/bluesky-user-count-2026/ — contagem de contas e ativos do Bluesky. Sustenta a tabela de adoção (só o dado atribuído ao relatório de transparência). Confiabilidade baixa: agregador com dados contraditórios (seção 8).
18. https://www.pkgpulse.com/guides/yjs-vs-automerge-vs-loro-crdt-libraries-2026 — downloads semanais de Yjs, Automerge e Loro (12/04/2026). Sustenta d3. Confiabilidade média: agregador de estatística do npm.
19. https://news.ycombinator.com/item?id=44833834 — "Linear sent me down a local-first rabbit hole" (08/08/2025, 467 pontos, 218 comentários). Sustenta `e9.2`, `e12`, `e12.1`, quem bloqueia d3. Confiabilidade média como termômetro social; baixa como evidência técnica.
20. https://www.inkandswitch.com/project/keyhive/ — Keyhive: controle de acesso local-first, BeeKEM, Beelay (2024–2026). Sustenta d3, `e12`, sinal fraco 2. Confiabilidade alta: laboratório autor.
21. https://athumi.eu/en/technologies/solid — Athumi: cofres Solid em Flandres, casos de uso possíveis, sem número de uso. Sustenta sinal fraco 3, `e11.1.1`. Confiabilidade média: operador público falando de si.
22. https://digital-strategy.ec.europa.eu/en/policies/data-act — Comissão Europeia: Data Act, aplicação em 12/09/2025, acesso e compartilhamento, troca de nuvem, projeto para compartilhamento. Sustenta `e2.1`. Confiabilidade alta: fonte oficial.
23. https://thequantuminsider.com/2026/05/08/post-quantum-migration-timelines-government-industry-impact/ — prazos NIST (2030/2035), NSA CNSA 2.0 (2027–2035), UE (2026/2030/2035). Sustenta d4, `e14`, `e15`, tabela do relógio. Confiabilidade média: imprensa especializada; os prazos batem com o documento do NIST achado na busca.
24. https://globalriskinstitute.org/publication/quantum-threat-timeline-report-2025b/ — Mosca e Piani, Quantum Threat Timeline Report 2025 (09/03/2026): 26 especialistas, 28–49% em 10 anos, 51–70% em 15 anos. Sustenta d4, `e13.1`, wildcard 1. Confiabilidade média-alta: série anual de referência, amostra pequena.
25. https://research.google/blog/safeguarding-cryptocurrency-by-disclosing-quantum-vulnerabilities-responsibly/ — Google (31/03/2026): ECDLP-256 com <1.200/<1.450 qubits lógicos, <500 mil físicos, prova de conhecimento zero, meta de 2029. Sustenta d4, sinal fraco 5, wildcard 1. Confiabilidade alta: fonte primária.
26. https://blog.cloudflare.com/post-quantum-roadmap/ — Cloudflare (07/04/2026): >65% do tráfego humano com acordo de chave pós-quântico, meta de 2029, estimativas do Google e da Oratomic. Sustenta a recusa do PQ no TLS, d4. Confiabilidade alta para o próprio tráfego.
27. https://signal.org/blog/spqr/ — Signal (02/10/2025): SPQR, Triple Ratchet, "colete agora, decifre depois", PQXDH. Sustenta d4, `e13`, o experimento. Confiabilidade alta: fonte primária.
28. https://security.apple.com/blog/imessage-pq3/ — Apple (21/02/2024): PQ3, níveis 0–3 de segurança de mensagem. Sustenta d4, `e13`. Confiabilidade média-alta: fonte primária com interesse.
29. https://www.biometricupdate.com/202609/passkeys-in-the-post-quantum-era-why-fido-needs-more-than-new-algorithms — Thiers (Swissbit), 16/09/2026: atestação, PIN/UV por ECDH, tamanho de chave, CTAP-HID, sem cronograma. Sustenta d4, `e14`, `e14.2`. Confiabilidade média: artigo de fabricante em veículo setorial.
30. https://github.com/tombadilo-bombadilo/budgero — budgero, 21 estrelas (22/09/2026). Sinal da turma; sustenta `e9`. Confiabilidade alta como existência; nula como adoção.
31. https://github.com/shynewt/kostos — kostos, 43 estrelas. Sustenta `e9`. Mesma ressalva.
32. https://github.com/machulav/accountant24 — accountant24, 54 estrelas. Sustenta `e10`, sinal fraco 1. Mesma ressalva.
33. https://github.com/vas3k/TaxHacker — TaxHacker, 6.715 estrelas. Sustenta `e10`. Confiabilidade alta como existência.
34. https://github.com/rotki/rotki — rotki, 4.029 estrelas. Sustenta `e10`. Confiabilidade alta como existência.
35. https://github.com/inkandswitch/keyhive — repositório do Keyhive, 248 estrelas, atividade em 22/09/2026. Sustenta sinal fraco 2. Confiabilidade alta como existência.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

Comando: `python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py tendencia-soberania-de-dados-local-first-ponta-a-ponta-e-o-fim-da-senha.md --links`, rodado em 22/09/2026, depois de trocar a fonte 13 (a primeira execução deu 34/35 links: o IP.rec recusa o verificador; ver 12.4).

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 15 (frontmatter diz 15)
efeitos ordem 2: 23 (frontmatter diz 23)
efeitos ordem 3: 23 (frontmatter diz 23)
prazo > horizonte (2041) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 1 [('e13.1.1', 2042)]
confiança ordem 1: alta 3 · media 10 · baixa 2
confiança ordem 2: alta 0 · media 14 · baixa 9
confiança ordem 3: alta 0 · media 0 · baixa 23
links da seção 11: 35/35 respondem (frontmatter diz fontes: 35)
RESULTADO: ok
```

O único efeito de terceira ordem fora do horizonte (`e13.1.1`, 2042) está declarado na prosa da seção 5.

### 12.2 Premissas assumidas e o que o briefing não cobria

- O briefing é completo (horizonte, público, recorte, descartes, viés, falseador, profundidade, zona, login); por isso não houve rebaixamento de confiança por falta de entrevista.
- **Pedido repetido em três linhas (encerramento da entrevista, §0):** mapa MAPA de "Soberania de dados: local-first, ponta-a-ponta e o fim da senha", horizonte 2041, para quem projeta mídia e interação, global com nota sobre o Brasil; fora o que já é massa e o genérico; falseador: adoção já em maioria ou só melhoria.
- **Assumido:** a nota Brasil está dentro das seções 3, 6 e 9 e nos efeitos `e1.1.1`, `e1.2.1`, `e6.2`, `e6.2.1`, `e10.1.1`, `e14.2.1`, sem seção própria.
- **Assumido:** "o que já é comum em produto de massa" inclui passkey como opção de login e acordo de chave pós-quântico no TLS — decisões tomadas a partir dos números [2][26], não do briefing.
- **Assumido:** fronteira com o tema 16 mantida cortando daqui a IA local em si; `e5` e `e10` tratam do **dado** sobre o qual a IA roda. Fronteira com o tema 2 mantida: nenhum efeito trata de identidade de agente.
- **Assumido:** a rodada de 2036 do mesmo tema foi lida antes da pesquisa, como referência do que já existe; os números e fontes foram reabertos nesta rodada, e os que não reabri não entram.
- Horizonte 2041: um efeito de terceira ordem passa do horizonte (`e13.1.1`, 2042) e está declarado na prosa; `e5.2.1` fica no limite (2041).

### 12.3 Buscas feitas (22/09/2026)

1. "NIST IR 8547 deprecate RSA ECC 2030 disallow 2035 post-quantum transition" — PDF do NIST listado (não aberto); aberto Quantum Insider [23].
2. "Signal SPQR sparse post-quantum ratchet triple ratchet 2025" — aberto o blog do Signal [27].
3. "Cloudflare post-quantum encrypted share of traffic 2026" — aberto o roteiro da Cloudflare [26]; a busca citava "DNSSEC pós-quântico em setembro de 2026" num site de terceiros (shattered.io), não aberto nem usado.
4. "post-quantum passkeys WebAuthn ML-DSA FIDO Alliance" — aberto Biometric Update [29]; a busca citava inclusão de algoritmos PQ no registro COSE da IANA em 24/04/2025 e um trabalho no arXiv ("The Qey", 2510.21353) — não abertos, não usados como fato.
5. "quantum threat timeline report 2025 Global Risk Institute ..." — aberto [24]; o resumo da busca citava "92% acima de 50% em vinte anos", que a página aberta não confirmou — não usado.
6. "EU Data Act data portability applicable September 2025 ..." — Alston & Bird aberto mas retorna 403 ao verificador (12.4); substituído pela página da Comissão [22].
7. "Google quantum algorithm elliptic curve break zero-knowledge proof 2026 ..." — aberto o blog do Google [25].
8. "local-first software 2026 adoption conference Automerge 3 sync engine production apps" — resultados de blogs agregadores (Automerge 3.0 em maio de 2025 com memória ~10× menor; Local-First Conf 2026 em Berlim); não abertos, não usados.
9. "Solid pods Flanders Athumi data utility company citizens 2026" — aberta a página da Athumi [21]; a busca citava "6,5 milhões de cidadãos" e "SolidLab, 14 milhões de euros, 2022–2026" (página da Inrupt, não aberta) — não usados.
10. "gov.br passkey chave de acesso login sem senha 2026" — aberto UAI [8].
11. "Apple Legacy Contact digital legacy access key encrypted data after death" — aberta a documentação de segurança da Apple [5].
12. "EUDI wallet December 2026 deadline member states readiness" — aberto Corbado [7].
13. "help desk social engineering account recovery attack Scattered Spider ..." — aberto Infosecurity [4]; a busca citava "£300 milhões de prejuízo à M&S" e "voz clonada por IA na central" (trustsphere.ai) — não abertos, não usados como fato.
14. "Unit 42 pass the passkey Security Domain Secret ..." — aberto Unit 42 [3].
15. "Chat Control 2026 Council EU regulation ..." — aberto EFF [12]; a busca citava um trílogo em 29/09/2026 (thecybersecguru.com) — não aberto.
16. "STF criptografia WhatsApp ADI 5527 ADPF 403 julgamento 2026" — aberto IP.rec [13]; a busca citava retomada em 11/12/2024 (Ayres Britto), não aberta; nenhuma decisão final encontrada.
17. "Apple iMessage PQ3 post-quantum level 3 security" — aberto o blog da Apple [28].
18. "Hacker News local-first sync engine 2026 ..." — aberta a discussão [19].
19. "Ink & Switch Keyhive ..." — aberta a página do projeto [20].
20. "ANPD regulamentação portabilidade de dados LGPD 2026" — resumo da busca citava a Resolução CD/ANPD nº 19/2024 (JSON e CSV como formatos) e a Lei 15.352/2026; **nenhum aberto**, nada usado.
21. "Apple Private Cloud Compute verifiable transparency ..." — aberto o blog da Apple [15].
22. "Bluesky users count self-hosted PDS number 2026" — aberto Proxidize [17]; nenhum número de PDS próprios.
23. "Yjs Automerge Loro weekly downloads 2026 ..." — aberto PkgPulse [18].
24. GitHub via `gh api repos/...`: budgero, kostos, accountant24, TaxHacker, rotki, keyhive, bluesky-social/pds (2.620 estrelas; não citado).

### 12.4 O que não abriu, ou abriu e não serviu

- `https://www.alston.com/en/insights/publications/2025/09/eu-data-act-connected-products` — lido pela ferramenta de leitura, mas responde 403 ao `curl`; conteúdo: obrigação de acesso por projeto para produtos colocados no mercado após 12/09/2026. Não entra na seção 11; o fato não foi usado no texto.
- `https://ip.rec.br/blog/criptografia-no-stf-parte-2-a-retomada-do-julgamento/` — IP.rec (25/09/2023): julgamento no plenário virtual interrompido por vista de Alexandre de Moraes. Lido, mas o site recusa o verificador automático (urllib); substituído na seção 11 pela ISOC Brasil [13]. O fato da vista, usado na seção 3, vem daqui.
- Trail of Bits, "We beat Google's zero-knowledge proof of quantum cryptanalysis" (17/04/2026) — só visto na busca; mencionado no sinal fraco 5 como não aberto.
- Documento NIST IR 8547 (PDF) — não aberto; os prazos vêm de [23].
- Nenhuma fonte aberta sobre franqueamento de mensagem (denúncia em mensageiro cifrado); por isso `e7` foi rebaixado.
- `wilson`, `finvo`, `mailquill`, `happy-balance`, `fintrack`, `Atlas`, `BeeCount` (material da turma): não procurados nesta rodada; a rodada de 2036 registrou que "wilson" não foi achado.

### 12.5 Efeitos e ramos cortados

- `e10.2` "Contadores humanos perdem clientes para agentes locais" — falha no teste da causa solta (aconteceria com IA em nuvem).
- `e6.3` "Verificação de idade no sistema operacional vira padrão global" — pertence a identidade/regulação de conteúdo; não depende do servidor cego.
- "Centrais de senha encolhem" — é `e1` mais adiante (regra de parada).
- "Mais países tiram o ADP" — é `e6.1` mais adiante.
- "Mais apps local-first de finanças" — é `e9` mais adiante.
- "Mais mensageiros adotam cifra pós-quântica" — contexto, recusado como raiz.
- "Surge a profissão de designer de recuperação" — efeito proibido sem nome e mecanismo; o conteúdo está em `e1` e na convergência 1, sem a frase genérica.
- "Cursos de design passam a ensinar recuperação" — idem, efeito proibido; descartado.

### 12.6 A rodada descartada

Primeira versão da roda (antes da pesquisa pós-quântica): três raízes (d1 conta sem senha, d2 servidor cego, d3 local-first) e o pós-quântico como wildcard ("quebra da curva P-256"), como na rodada de 2036. Descartada porque, com horizonte 2041, a probabilidade estimada por especialistas passa de 50% dentro da janela [24] — um wildcard é, por definição, de baixa probabilidade; e porque a ruptura (dado guardado com prazo de validade, reemissão de toda passkey) tem pré-condição nova (padrões de 2024, estimativas de 2026) e lista de "o que falta" concreta. Uma quinta raiz candidata, "identidade portátil" (CXP, AT Protocol, EUDI), foi absorvida em d1, para não passar de quatro raízes.

### 12.7 Material da turma usado e não usado

Usado com fonte aberta: budgero, kostos, accountant24, TaxHacker, rotki (varredura de inspiração); `@simplewebauthn`, `argon2`, Shamir (no experimento). Não usado como fonte: fintrack, Atlas, happy-balance, wilson, finvo, mailquill, BeeCount, Termly, `webauthn-p256`, `fido2-lib`, `@passwordless-id/webauthn`, Rodauth, better-auth, iron-session, jose, otplib — são substrato plausível do experimento, mas não abertos nesta rodada.
