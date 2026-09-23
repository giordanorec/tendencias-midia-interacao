---
tema: "Soberania de dados: local-first, ponta-a-ponta e o fim da senha"
slug: soberania-de-dados-local-first-ponta-a-ponta-e-o-fim-da-senha
autor_login: grec
zona_de_interesse: Pessoas e dados
data: 2026-09-22
horizonte: 2046
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 15
efeitos_ordem_2: 24
efeitos_ordem_3: 24
tecnologias_citadas: [passkeys, WebAuthn, FIDO2, CTAP-HID, Security Domain Secret, Google Password Manager, iCloud Keychain, Legacy Contact, Recovery Contacts, Inactive Account Manager, Advanced Data Protection, Credential Exchange Protocol (CXP), Credential Exchange Format (CXF), HPKE, EUDI Wallet, France Identité, gov.br, Private Cloud Compute, WhatsApp Private Processing, TEE, Confidential Virtual Machine, OHTTP, Signal PQXDH, Signal SPQR (Triple Ratchet), ML-KEM, ML-DSA, Merkle Tree Certificates, ECDLP-256, P-256, CRDT, Automerge, automerge-repo, Keyhive, BeeKEM, Beelay, Zero, PowerSync, ElectricSQL, AT Protocol, PDS, budgero, kostos, accountant24, TaxHacker, rotki, "@simplewebauthn", better-auth, argon2, Shamir Secret Sharing]
fontes: 33
confianca: media
experimento: "O cofre que envelhece — arquivo familiar local-first no navegador, login só por passkey, sincronia cifrada por relé cego, guardiões com quórum e etiqueta herdável/morre-comigo em cada dado, testado em sala com quatro provas: perder o aparelho, morrer, envelhecer (delegação gradual) e trocar a cifra para pós-quântica"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Em 2046 a passkey é contexto, não novidade: já em 2026, 75% dos consumidores pesquisados pela FIDO em dez países a tinham ativado em alguma conta [2], e o gov.br a adotou em fevereiro de 2026 [8]. O que rompe, num horizonte de vinte anos, é o que vem atrás, em quatro frentes. **A conta vira chave:** sem senha, a volta da conta sai do provedor e passa para aparelhos, guardiões e carteiras estatais — e, em 2046, o caso dominante de perda de acesso deixa de ser o aparelho esquecido e passa a ser a morte e o envelhecimento da primeira geração que viveu sem senha. **Servidor cego:** a cifra ponta-a-ponta sai da mensagem e chega ao backup, ao documento e à IA que roda em enclave auditável; o Estado responde trocando o alvo do servidor para o aparelho. **Local-first:** o original do dado mora no aparelho e o servidor vira relé, o que faz o software sobreviver ao fornecedor, mas fragmenta o arquivo de uma vida em réplicas pessoais que nenhum historiador consegue abrir. **Cifra com prazo de validade:** especialistas dão 51% a 70% de chance de um computador quântico capaz de quebrar a criptografia atual até cerca de 2041 [20]; tudo o que foi cifrado e copiado sem camada pós-quântica passa a ter data de abertura, e toda passkey de curva elíptica terá de ser reemitida. Para quem projeta mídia e interação, o trabalho sai da tela de login e vai para o desenho da perda, da herança, da delegação na velhice e do tempo que um segredo dura.

## 2. O tema

**O que é.** Três rupturas na arquitetura do software pessoal que, juntas, tiram da empresa a posse do dado, da conta e da identidade: **local-first** (o original mora no aparelho e sincroniza; o servidor deixa de ser a fonte da verdade), **ponta-a-ponta** (quem guarda o dado não consegue lê-lo) e **o fim da senha** (autenticação por chave criptográfica guardada no aparelho, sem segredo compartilhado com o site). Num horizonte de vinte anos entra uma quarta, que as três pressupõem sem dizer: a de que a cifra de hoje continuará valendo amanhã.

**Por que 2046 muda o mapa em relação a horizontes curtos.** Vinte anos é o tempo de uma geração envelhecer. Quem ativou passkeys aos 50 anos em 2026 terá 70 em 2046. O mapa, por isso, dá mais peso a três objetos que num horizonte de cinco anos são marginais: **morte e herança**, **declínio cognitivo e delegação**, e **arquivo de longa duração** (o que acontece com vinte anos de dado cifrado quando a cifra envelhece). O estudo de Öhman e Watson (Oxford, 2019) projetou que os perfis de pessoas mortas no Facebook podem superar os de vivos por volta de 2070 [6]; a pergunta deste mapa é o que acontece com esse arquivo quando ele não está mais num servidor que alguém consegue ler.

**Onde encosta em mídia e interação.** (1) **Recuperação, herança e delegação** viram tela, fluxo e serviço a projetar, porque o provedor deixa de conseguir "devolver" a conta; (2) a **interface da confiança** — estado da sincronia, conflito entre versões, atestado do enclave, validade da cifra — vira elemento de design com consequência; (3) **personalização, atendimento e moderação**, que dependem de o servidor ler, mudam de lugar; (4) **arquivo e memória**: o álbum de família, o diário, a conversa guardada passam a ser objetos criptográficos com dono, prazo e herdeiro; (5) **desigualdade de proteção**: quem tem aparelho novo, chave física e guardiões competentes fica mais protegido que quem não tem.

**Por que mapa de futuro e não estado da arte.** Os componentes existem; o que não existe é a sociedade que funciona com eles como padrão. As consequências de segunda e terceira ordem — quem vira intermediário no lugar da plataforma, o que acontece com o arquivo histórico, como se herda uma chave — não se leem em nenhum produto de hoje.

**Fronteira com os vizinhos.** O *modelo* rodando localmente é o tema 16; aqui a IA aparece só como quem opera sobre o dado sem tirá-lo de casa (`e9.2`, `e5`). Identidade de *agentes* é o tema 2. Aqui o objeto é a arquitetura de dado e identidade da pessoa.

## 3. Onde isso está hoje

*Âncora feita com busca na web em 22/09/2026 (cerca de 25 buscas e aberturas; lista na seção 12.3).*

### O que já existe e funciona

- **Passkeys em escala.** Relatório FIDO 2026 (Sapio Research, abril de 2026; 11.000 consumidores e 1.400 decisores em dez países): 90% conhecem passkeys, 75% ativaram em pelo menos uma conta, 40% ativam na maioria dos apps, 49% as ativam "sempre que possível ou na maior parte das vezes"; 68% das organizações estão implantando para funcionários, 30% como método principal; 47% dos consumidores dizem que abandonam compra ou login quando esquecem a senha [2]. O comunicado da própria FIDO fala em 5 bilhões de passkeys em uso (página aberta, mas que recusa o verificador automático; ver 12.4).
- **No Brasil:** o app gov.br aceita chave de acesso desde fevereiro de 2026, com Android 9 ou iOS 16 em diante, bloqueio de tela ativo e conta nível prata ou ouro [8]. Nenhum número de uso foi encontrado.
- **Herança parcial:** o Contato de Legado da Apple usa chave dividida (a Apple guarda um pacote cifrado, o beneficiário guarda a chave AES) e exige certidão de óbito — mas **não abre o Chaveiro do iCloud**, onde moram as passkeys [4]. Google tem o Gerenciador de Contas Inativas; nos EUA, a lei RUFADAA dá prioridade a essas ferramentas das plataformas [5].
- **Cifra ponta-a-ponta além da mensagem:** Apple Private Cloud Compute (junho de 2024) com cinco requisitos — computação sem estado sobre dado pessoal, garantias executáveis, sem acesso privilegiado, não-direcionabilidade e transparência verificável [14]; WhatsApp Private Processing (abril de 2025) com TEE, máquina virtual confidencial, OHTTP e opcionalidade [15].
- **Cifra pós-quântica em mensagem e tráfego:** Signal PQXDH (aperto de mão) e SPQR/Triple Ratchet (outubro de 2025), justificados explicitamente pelo ataque "colete agora, decifre depois" [16]; mais de 65% do tráfego humano da Cloudflare já usa acordo de chave pós-quântico (abril de 2026) [18].
- **Local-first com código em produção:** Automerge 3.3 e automerge-repo 2.6 (julho de 2026), com usuários como Backstitch (colaboração em projetos Godot) e Braid (rastreador de tarefas para agentes) [24]; na turma, `budgero` ("local-first, self-hostable, end-to-end encrypted", 21 estrelas) [26] e `kostos` ("no accounts, end-to-end encrypted, works offline, self-hostable", 43 estrelas) [27].
- **IA sobre dado financeiro sem nuvem:** `TaxHacker` (contabilidade com IA self-hosted, 6.715 estrelas) [29], `rotki` (portfólio com privacidade, 4.029 estrelas) [30], `accountant24` (agente de finanças pessoais, 54 estrelas) [28].
- **Identidade portátil numa rede social:** AT Protocol permite migrar conta entre servidores de dados pessoais, inclusive migração adversarial com chave de rotação controlada pela pessoa quando o servidor antigo não coopera [22].

### O que existe e ainda não funciona

- **Portabilidade de passkey entre plataformas.** CXF (formato) chegou a Review Draft em março de 2025; CXP (protocolo, com HPKE) seguia como rascunho de trabalho; a Apple já faz transferência entre apps no mesmo aparelho no iOS/macOS 26 [9]. Troca entre plataformas diferentes ainda depende do CXP.
- **Sincronia local-first cifrada.** Keyhive (controle de acesso local-first com BeeKEM, e o protocolo Beelay, que sincroniza carga cifrada que o servidor não consegue ler) é projeto de pesquisa 2024–2026; a página não declara prontidão para produção [23]; o blog do Automerge de julho de 2026 relata refatoração do automerge-repo para suportar cifra ponta-a-ponta e publicação do artigo do BeeKEM [24].
- **Segurança da passkey sincronizada.** Unit 42 (03/08/2026) mostrou três ataques ao Google Password Manager no Chrome/Windows; o mais grave extrai o Security Domain Secret — um segredo de 32 bytes que cifra todas as passkeys sincronizadas da conta — e **não há mecanismo de rotação nem revogação** do SDS. Todos exigem malware prévio no aparelho [3].
- **Carteira de identidade europeia.** Todo Estado-membro deve oferecer uma até dezembro de 2026; menos de um terço estava pronto segundo o observatório do Politecnico di Milano; na Alemanha, a sandbox tinha 115 organizações e cerca de 150 casos de uso, e "a adesão de quem aceita a carteira é o gargalo real" [10].
- **Passkey pós-quântica.** Não basta trocar o algoritmo: atestação, protocolo de PIN/verificação (hoje ECDH), tamanho de chave e limite de mensagem do CTAP-HID precisam mudar; "não vai acontecer por uma atualização de protocolo" e não há cronograma [21].
- **Herança no Brasil.** O PL 4/2025 (reforma do Código Civil) cria o "patrimônio digital", separa o que é herdável (valor econômico: milhas, cripto, perfis monetizados) do que não é (fotos, vídeos, áudios, mensagens), proíbe o acesso de herdeiros a mensagens privadas e cria o "inventariante digital"; em março de 2026 estava em comissão no Senado [7].

### O relógio pós-quântico

| Marco | Data | Fonte |
|---|---|---|
| RSA-2048 e P-256 depreciados para sistemas novos (NIST) | 2030 | [19] |
| Algoritmos vulneráveis ao quântico eliminados (NIST) | 2035 | [19] |
| NSA CNSA 2.0: sistemas operacionais, apps e nuvem exclusivos | 2033 | [19] |
| UE: infraestrutura crítica pós-quântica em alto risco | fim de 2030 | [19] |
| Meta própria do Google para migração | 2029 | [17] |
| Cloudflare: segurança pós-quântica em todos os produtos | 2029 | [18] |
| Chance de computador quântico criptograficamente relevante em 10 anos | 28–49% | [20] |
| Idem em 15 anos (≈2041) | 51–70% | [20] |

Dois fatos de 2026 encurtaram o relógio: o Google estimou que quebrar ECDLP-256 exige menos de 1.200 qubits lógicos (com 90 milhões de portas Toffoli), cerca de vinte vezes menos qubits físicos que estimativas anteriores, e provou o resultado com prova de conhecimento zero sem publicar o circuito [17]; e a Cloudflare cita a Oratomic, para quem P-256 cairia com cerca de 10 mil qubits em computador de átomos neutros [18]. O relatório GRI não dá número para 20 anos [20]; o mapa **assume** que em 2046 a probabilidade é maior que a de 15 anos, o que é inferência, não dado.

### Quem constrói

1. **Plataformas de sistema operacional** (Apple, Google, Microsoft): chaveiros sincronizados, enclaves de IA, portabilidade CXF [4][9][14].
2. **FIDO Alliance** e gerenciadores independentes (1Password, Bitwarden, Dashlane) no padrão de troca de credenciais [9].
3. **Laboratório e comunidade local-first:** Ink & Switch (ensaio de 2019, Keyhive, Automerge) [1][23][24]; motores de sincronia comerciais (Zero, PowerSync, ElectricSQL) discutidos no Hacker News [25].
4. **Mensageiros cifrados:** Signal, Meta/WhatsApp [15][16].
5. **Estados e reguladores:** Comissão Europeia (EUDI, Chat Control), Reino Unido (ordem que levou a Apple a retirar o ADP), NIST/NSA, STF e Senado no Brasil [7][10][11][12][13][19].
6. **Desenvolvedores independentes** do material da turma: budgero, kostos, accountant24, TaxHacker, rotki [26]–[30], sobre bibliotecas como `@simplewebauthn` (2.352 estrelas) [32] e better-auth (30.058 estrelas) [33].

### Números de adoção

| O quê | Número | Fonte |
|---|---|---|
| Consumidores com passkey em ≥1 conta | 75% (dez países, abril de 2026) | [2] |
| Consumidores que ativam passkey sempre ou quase sempre | 49% | [2] |
| Tráfego humano da Cloudflare com acordo pós-quântico | >65% (abril de 2026) | [18] |
| Estados da UE prontos para a carteira de dezembro de 2026 | menos de um terço | [10] |
| Usuários de apps local-first | sem número encontrado | — |
| Usuários de gov.br com chave de acesso | sem número encontrado | [8] |
| Estrelas no GitHub (22/09/2026) | budgero 21 · kostos 43 · accountant24 54 · rotki 4.029 · TaxHacker 6.715 · keyhive 248 | [26]–[31] |

### O ambiente político

- **Reino Unido:** a Apple deixou de oferecer o ADP a novos usuários; dez categorias (backup, Drive, Fotos, Notas etc.) voltam à proteção padrão, enquanto Chaveiro, Saúde, iMessage e FaceTime seguem cifrados [11].
- **União Europeia:** o Parlamento votou em abril de 2026 contra prolongar a derrogação que permitia varredura voluntária; em atualização de agosto, a varredura voltou a ser permitida até 03/04/2028 com salvaguardas, e o regulamento permanente segue em negociação, com foco deslocado para verificação de idade [12].
- **Brasil:** no STF, os relatores da ADI 5527 (Rosa Weber) e da ADPF 403 (Fachin) votaram que a cifra é "essencial para a proteção da coletividade" e contra bloqueio de app para forçar ordem judicial; o julgamento não tinha decisão final nas fontes abertas [13].

## 4. As disrupções-raiz

### Candidatos recusados como raiz (critério §2)

- **Passkey como método de login.** Recusado: 75% com ≥1 conta e 49% de uso habitual em dez países [2], e adoção pelo principal serviço público do Brasil [8]. Está entre adoção precoce avançada e maioria; já se faz com o que é comum em produto de massa. Tratado como contexto; o que ainda rompe é a **custódia** da conta (d1).
- **Cifra ponta-a-ponta em mensagem.** Recusado: padrão em WhatsApp, Signal e iMessage; é maioria. Contexto.
- **Acordo de chave pós-quântico no TLS.** Recusado: mais de 65% do tráfego humano de uma grande CDN [18]. Contexto; a raiz d4 é o que **não** está protegido (o arquivo já copiado e a chave de identidade).
- **"Login com Google", 2FA por SMS, backup cifrado com chave do provedor, HTTPS.** Maduros, pela régua da disciplina.

### d1 — A conta vira chave: a identidade passa a morar no aparelho e na carteira da pessoa, e o provedor deixa de ser o caminho de volta

1. **O que rompe.** A suposição de que o provedor sempre consegue devolver a conta ("esqueci minha senha") e de que a identidade online é um cadastro no servidor de alguém. Com a chave no aparelho, recuperar, herdar e delegar passam a depender do que a pessoa montou antes de perder o acesso.
2. **Por que agora.** Passkeys viraram padrão nos sistemas operacionais e chegaram a 75% de ativação [2]; carteiras de identidade estatais têm prazo legal na UE [10] e o gov.br aceitou a chave [8]; o contato de legado com chave dividida existe [4] — há cinco anos nada disso estava em produção de massa.
3. **Onde está na difusão.** Login: adoção precoce avançada/maioria (recusado acima). Recuperação e herança por guardiões/carteira: **produto de nicho a adoção precoce** — emergente.
4. **O que falta.** Portabilidade entre plataformas (CXP) [9]; rotação/revogação do segredo mestre da sincronia [3]; herança que abra o chaveiro [4]; regra jurídica de herança digital no Brasil [7]; carteiras estatais aceitas por serviços privados [10]; um desenho de delegação para quem envelhece (nenhuma fonte encontrada).

### d2 — O servidor cego: a cifra ponta-a-ponta sai da mensagem e chega ao backup, ao documento e à IA, e quem guarda o dado deixa de poder lê-lo

1. **O que rompe.** O modelo em que o servidor lê o dado para personalizar, moderar, atender e anunciar. Rompe também a suposição de que "processar na nuvem" implica "a empresa vê".
2. **Por que agora.** A IA generativa criou demanda para processar dado pessoal fora do aparelho, e duas plataformas responderam com enclaves auditáveis em vez de servidores comuns [14][15]; o custo político ficou visível (ADP retirado no Reino Unido [11]).
3. **Onde está na difusão.** Mensagem: maioria (recusado). Backup e documento cifrados por padrão, IA em enclave: **adoção precoce** em duas plataformas, nicho no resto.
4. **O que falta.** Verificação independente real do que roda no enclave [14]; resposta estável dos Estados (UE, Reino Unido, STF) [11][12][13]; moderação que funcione sem ler o conteúdo; modelo de negócio que não dependa do dado lido.

### d3 — Local-first: o original do dado passa a morar no aparelho e o servidor vira relé de sincronia

1. **O que rompe.** A suposição de que o software é um serviço que para quando a empresa para ("The Long Now": o trabalho deve continuar acessível "mesmo depois que a empresa que produziu o software deixar de existir") [1]; e a de que o servidor é a fonte da verdade.
2. **Por que agora.** CRDTs viáveis no navegador (Automerge 3) e motores de sincronia comerciais [24][25]; controle de acesso sem servidor saindo do laboratório [23]; desenvolvedores independentes publicando apps completos local-first com cifra [26][27].
3. **Onde está na difusão.** **Produto de nicho.** Sete anos depois do ensaio de 2019, sem número de usuários encontrado; a discussão técnica mais popular encontrada ainda debate migração de esquema e conflito [25].
4. **O que falta.** Controle de acesso e sincronia cifrada prontos para produção [23][24]; migração de esquema com cliente offline por muito tempo [25]; ferramentas para o dev médio; réplica doméstica confiável; um incentivo econômico para empresas que hoje cobram pela nuvem.

### d4 — Cifra com prazo de validade: o computador quântico transforma o dado guardado sem camada pós-quântica em segredo que expira, e a chave de identidade do aparelho terá de ser trocada

1. **O que rompe.** A suposição, que d1–d3 fazem sem dizer, de que "cifrado" significa "secreto para sempre". Vinte anos de backup e mensagem cifrados com curva elíptica, já copiados por quem quisesse copiar, passam a ter data de abertura; e toda passkey P-256 precisa de reemissão.
2. **Por que agora.** Padrões pós-quânticos (ML-KEM, ML-DSA) exigidos pela NSA [19]; prazos de depreciação do NIST (2030/2035) [19]; estimativas de 2026 que baixaram o custo de quebrar P-256 [17][18]; especialistas dão mais de 50% de chance em 15 anos [20]. Há cinco anos nem os padrões nem as estimativas existiam.
3. **Onde está na difusão.** No tráfego, maioria (recusado). Em identidade (passkey pós-quântica) e em arquivo cifrado em repouso: **laboratório a demo** — especulativo, `confianca: baixa` obrigatória nos ramos que dependem só dele.
4. **O que falta.** Passkey pós-quântica padronizada, com atestação e CTAP revistos [21]; recifragem de acervos antigos; o próprio computador quântico (cuja data é incerta [20]).

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "A conta vira chave: a identidade mora no aparelho e na carteira da pessoa, e o provedor deixa de ser o caminho de volta"
    efeitos:
      - id: e1
        ordem: 1
        efeito: A recuperação de conta sai do "esqueci minha senha" do provedor e passa a ser uma rede de guardiões — outros aparelhos, contatos de recuperação e carteira estatal — que a própria pessoa monta antes de precisar
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O fluxo de reinscrição e a central de atendimento viram o principal alvo de tomada de conta, porque são o único ponto onde a chave ainda pode ser reemitida sem o aparelho
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Bancos e governos passam a exigir presença física ou credencial da carteira estatal para reemitir uma passkey, e a agência e o cartório voltam a ser ponto de identidade digital
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A escolha e o teste periódico dos guardiões viram fluxo de produto desenhado, com lembrete de revisão como o de exame anual, porque guardião escolhido em 2026 pode estar morto, brigado ou sem aparelho em 2040
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Perder acesso passa a ser disputa entre guardiões — divórcio, briga de herdeiros — e o produto precisa trazer regra de quórum e de desempate escrita, que vira cláusula de acordo de separação
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A morte de quem não configurou herança tranca o dado para sempre, porque o contato de legado não abre o chaveiro e a passkey não tem procedimento de certidão de óbito
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A herança digital vira requisito de produto — no Brasil, o PL 4/2025 separa patrimônio econômico herdável de conteúdo privado inacessível, e o app precisa saber a diferença entre os dois para cumprir a lei
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Cada dado passa a nascer com uma etiqueta "herdável" ou "morre comigo" escolhida pelo titular, e essa etiqueta vira campo de esquema padrão em bibliotecas local-first
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A geração que adotou passkeys em massa por volta de 2026 chega aos 70–80 anos, e o declínio cognitivo antes da morte vira caso frequente de perda de acesso — a pessoa está viva, mas não consegue mais operar a própria chave
            sinal: fraco
            prazo: 2044
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Sistemas operacionais ganham delegação gradual de credenciais — um familiar passa a operar a chave do idoso com registro auditável no aparelho — e a curatela judicial passa a ter um equivalente técnico
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Carteiras de identidade estatais (EUDI, gov.br) viram o provedor de identidade de última instância em serviços regulados, deslocando o "login com Google" e a verificação por selfie e documento
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O custo de abrir conta em banco e fintech cai de dezenas de euros para poucos euros por cliente, e a carteira vira porta de entrada obrigatória desses serviços
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O Estado passa a poder saber cada vez que a pessoa se identifica num serviço privado, a menos que a carteira use divulgação seletiva e prova de conhecimento zero, e o desenho técnico da carteira vira disputa política aberta
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Quem não tem aparelho compatível ou documento de nível alto — idoso com celular antigo, migrante sem papéis, pessoa sem teto — perde acesso a serviços que antes aceitavam senha
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: O atendimento sem aparelho passa a ser exigido por lei em serviço público e auditado como requisito de acessibilidade, com balcão humano que emite credencial temporária
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Os donos do chaveiro sincronizado viram o novo intermediário da identidade, porque a passkey sincronizada depende da conta Apple, Google ou Microsoft — a promessa de "sem intermediário" troca de intermediário
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A portabilidade de credenciais entre plataformas (CXP) vira pauta de defesa da concorrência, e o chaveiro passa a ser tratado por reguladores como infraestrutura de guardião de acesso
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Gerenciadores de credenciais independentes passam a ser regulados como custodiantes, com exigência de seguro por perda de chave, como já acontece com custódia de ativos
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Um único segredo mestre por conta concentra o risco, e um ataque ao fluxo de recuperação de uma plataforma compromete de uma vez todas as passkeys da pessoa
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Serviços de alto risco passam a exigir passkey presa ao aparelho ou chave física, e surgem dois níveis de proteção — quem tem chave física e quem depende do chaveiro na nuvem
                sinal: fraco
                prazo: 2036
                confianca: baixa
  - disrupcao: "O servidor cego: a cifra ponta-a-ponta sai da mensagem e chega ao backup, ao documento e à IA, e quem guarda o dado deixa de poder lê-lo"
    efeitos:
      - id: e5
        ordem: 1
        efeito: A IA que lê dado pessoal passa a rodar em enclave com atestado público, e "o servidor processou mas não viu" vira promessa que pesquisadores conseguem conferir
        sinal: forte
        prazo: 2030
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O atestado do enclave vira elemento de interface — o app mostra que código rodou onde — e o designer precisa traduzir auditoria criptográfica em sinal que uma pessoa leiga entenda
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Uma falha num modelo de TEE de um fabricante derruba de uma vez a confiança de vários produtos que dependiam dele, e os auditores de transparência ganham poder de certificadora
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: A personalização deixa de usar perfil guardado no servidor e passa a ser calculada no aparelho ou no enclave, e o anúncio segmentado por histórico perde a matéria-prima nos produtos cegos
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Produtos cegos migram de receita por anúncio para assinatura ou para leilão no aparelho, em que o aparelho escolhe o anúncio sem revelar o perfil, e o corretor de dado de terceiros perde margem
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Estados respondem ao servidor cego mudando o alvo — varredura no aparelho, verificação de idade no sistema operacional, retirada da cifra de backup como no Reino Unido
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A proteção passa a depender do país — o mesmo app cifra o backup num lugar e não no outro — e quem cruza fronteira ou migra muda de nível de proteção sem perceber
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Jornalistas, ONGs e empresas passam a registrar contas em jurisdições de cifra forte como prática de rotina, e aparecem "paraísos de cifra" com a mesma lógica dos paraísos fiscais
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: No Brasil, enquanto o STF não conclui a ADI 5527 e a ADPF 403, operadores evitam oferecer backup cifrado por padrão no país para não arriscar ordem de bloqueio
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Se prevalecerem os votos dos relatores, a cifra ganha proteção constitucional explícita e o Brasil passa a ser o mercado da região onde oferecer servidor cego tem menor risco jurídico
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: A moderação sai do servidor, que não lê, e passa para metadado e para a denúncia do próprio usuário, que entrega o trecho denunciado à plataforma
        sinal: fraco
        prazo: 2032
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O metadado — quem fala com quem e quando — vira o dado disputado, e relés cegos ao metadado (OHTTP) entram como camada seguinte enquanto Estados passam a pedir retenção de metadado
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Os poucos operadores de relé cego viram infraestrutura crítica sem modelo de receita próprio, e a privacidade de metadado passa a depender de dois ou três contratos
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: O atendimento ao cliente perde a capacidade de "ver a conta" para ajudar, e o suporte passa a exigir que a própria pessoa conceda acesso temporário ao dado
        sinal: fraco
        prazo: 2033
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O golpe migra da quebra técnica para induzir a pessoa a conceder essa chave temporária a um falso atendente
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Sistemas operacionais passam a impor espera obrigatória de horas e confirmação de um guardião antes de conceder acesso total a terceiro, trocando conveniência por segurança
                sinal: fraco
                prazo: 2038
                confianca: baixa
  - disrupcao: "Local-first: o original do dado passa a morar no aparelho e o servidor vira relé de sincronia"
    efeitos:
      - id: e9
        ordem: 1
        efeito: Apps pequenos de finanças, notas e saúde passam a nascer local-first e self-hostable, porque o dev deixa de pagar e operar o banco de dados de cada usuário
        sinal: forte
        prazo: 2030
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O fim de uma empresa deixa de levar o dado junto, porque o app continua funcionando no aparelho depois que o fornecedor fecha
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Encerrar um serviço passa a exigir, por contrato ou por regra de consumidor, a entrega de um modo que funcione sem servidor
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: Agentes de IA locais operam sobre o dado financeiro sem tirá-lo de casa, e contador e consultor passam a receber o relatório calculado na máquina do cliente em vez do extrato bruto
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: O cliente entrega ao profissional uma visão derivada com prova do que o agente calculou, e o sigilo profissional passa a ser garantido por técnica, não por confiança no escritório
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: A perda do aparelho sem réplica vira perda definitiva do dado, porque o servidor não guarda mais cópia legível, e "onde está sua outra cópia" entra no desenho do produto
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Casas passam a ter um nó doméstico — roteador, TV, caixa de armazenamento — como réplica cifrada permanente, e o eletrodoméstico vira guardião do arquivo da família
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Enchente, incêndio ou mudança destroem arquivos familiares inteiros guardados no nó doméstico, repetindo a perda das caixas de fotos, e seguradoras passam a oferecer cobertura de arquivo
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: O arquivo de uma vida — fotos, mensagens, diários — passa a existir espalhado em réplicas cifradas pessoais, e o historiador perde o acesso centralizado que as plataformas ofereciam
        sinal: medio
        prazo: 2040
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Arquivos públicos e museus passam a negociar doação de chaves em vez de caixas, e a doação de acervo pessoal vira doação criptográfica com cláusula de abertura em data futura
            sinal: fraco
            prazo: 2044
            confianca: baixa
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: A cápsula do tempo criptográfica — dado cifrado para abrir só em data marcada — vira gênero de mídia familiar e institucional
                sinal: fraco
                prazo: 2050
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: Empresas cuja receita vem da assinatura de nuvem vendem "modo offline" que continua dependendo do servidor para contas e permissões, e local-first vira rótulo de marketing sem os ideais
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Enquanto o controle de acesso sem servidor não amadurece, apps colaborativos local-first voltam a um servidor central de permissões, que reconcentra o poder
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Se o controle de acesso distribuído amadurecer, o papel de administrador vira capacidade delegada entre pessoas, e equipes pequenas passam a organizar autoridade sem um dono do servidor
                sinal: fraco
                prazo: 2040
                confianca: baixa
  - disrupcao: "Cifra com prazo de validade: o computador quântico transforma o dado guardado sem camada pós-quântica em segredo que expira, e a chave de identidade do aparelho terá de ser trocada"
    efeitos:
      - id: e13
        ordem: 1
        efeito: Todo dado cifrado sem camada pós-quântica e já copiado passa a ter data de abertura, e os backups que os servidores cegos guardaram com curva elíptica viram arquivos a abrir
        sinal: medio
        prazo: 2040
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: A exposição retroativa atinge mensagens e backups das décadas de 2010 e 2020 — fontes jornalísticas, dissidentes, conversas íntimas — que ressurgem vinte ou trinta anos depois
            sinal: fraco
            prazo: 2044
            confianca: baixa
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: Tribunais criam doutrina sobre conteúdo obtido por decifração tardia, e publicar mensagem decifrada por obsolescência da cifra passa a ser tratado como vazamento
                sinal: fraco
                prazo: 2048
                confianca: baixa
          - id: e13.2
            ordem: 2
            efeito: Produtos passam a mostrar a validade de cada cifra e a oferecer recifragem de acervos antigos, e migrar o arquivo pessoal vira manutenção periódica como fazer backup
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e13.2.1
                ordem: 3
                efeito: O arquivo de quem morreu e de apps extintos fica exposto primeiro, porque ninguém o recifra, e a herança digital ganha prazo de urgência
                sinal: fraco
                prazo: 2045
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: Toda passkey de curva elíptica terá de ser reemitida em algoritmo pós-quântico, e a primeira troca de chave de identidade da população inteira acontece como migração silenciosa ou como onda de reinscrição
        sinal: medio
        prazo: 2036
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: Chaves físicas antigas sem memória ou banda para assinaturas pós-quânticas viram lixo eletrônico, e quem investiu na proteção mais forte é quem mais perde na migração
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: Bancos e governos subsidiam a troca de chaves físicas como fizeram com cartões com chip, e a chave física passa a ser emitida pelo banco, não comprada pela pessoa
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e14.2
            ordem: 2
            efeito: A reemissão em massa reabre a porta do ataque de reinscrição, porque cada troca de chave é um fluxo de recuperação, e a tomada de conta tem pico durante a migração
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e14.2.1
                ordem: 3
                efeito: Plataformas que migram a chave dentro do chaveiro sincronizado sem o usuário fazer nada ganham vantagem sobre chaves presas ao aparelho, o que reforça a concentração do e4
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e15
        ordem: 1
        efeito: O custo da cifra pós-quântica — chaves e assinaturas maiores, limites do CTAP-HID — atrasa aparelhos baratos e embarcados, e a proteção forte chega antes a quem tem aparelho caro
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: No Brasil e no Sul global, celulares usados por muitos anos ficam com cifra clássica, e a desigualdade de proteção passa a seguir a desigualdade de renda
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: Bancos passam a bloquear aparelhos sem suporte pós-quântico em serviços financeiros, forçando a troca de celular como aconteceu no desligamento de redes antigas
                sinal: fraco
                prazo: 2042
                confianca: baixa
```

### O que o bloco não diz: os mecanismos

**d1 — a conta vira chave.**
- `e1` porque, sem segredo compartilhado com o site, o provedor não tem o que "resetar"; a volta passa a depender de réplicas e pessoas indicadas antes [4]. Sinal forte: contatos de recuperação e de legado da Apple [4], Gerenciador de Contas Inativas do Google [5], passkey do gov.br [8]. Classe de referência: passkeys foram de anúncio conjunto das plataformas (2022, de memória) a 75% com ≥1 conta em 2026 [2] — quatro anos quando o sistema operacional empurra; a recuperação por guardiões pega carona nessa curva, daí 2030.
- `e1.1` porque o ataque vai para onde ainda há reemissão: o ataque "Silver" da Unit 42 registra uma nova chave de verificação na conta ao explorar o fluxo de reinscrição [3]. Mecanismo novo em relação ao pai: troca de ator (o atacante), não mais a pessoa.
- `e1.1.1` porque, se o fluxo remoto é o alvo, o único canal que um atacante não automatiza é a presença física; o gov.br já condiciona a chave ao nível prata/ouro [8], que em parte vem de validação presencial ou bancária.
- `e1.2` porque guardião é relação humana com prazo de validade; em vinte anos, guardiões morrem, mudam de aparelho ou deixam de falar com o titular. Não há fonte sobre revisão periódica de guardiões — é inferência (sinal fraco).
- `e1.2.1` porque quórum de guardiões (Shamir ou equivalente) transforma desacordo familiar em impasse técnico; é a troca de mecanismo de "falha técnica" para "disputa".
- `e2` porque a documentação da Apple diz literalmente que a chave de legado "não abrange a informação necessária para decifrar o Chaveiro do iCloud" [4]. Sinal forte: é o comportamento documentado de hoje.
- `e2.1` porque o PL 4/2025 proíbe o acesso de herdeiros a mensagens privadas mas manda transmitir o patrimônio econômico [7]: com dado cifrado ponta-a-ponta, só o app (ou o titular, em vida) sabe classificar; o "inventariante digital" do projeto precisa de uma interface para trabalhar.
- `e2.1.1` porque a classificação só é barata se feita na criação; retroativa, exige abrir tudo, o que a própria lei proíbe.
- `e2.2` porque a demografia é certa (quem tinha 50–60 anos em 2026 terá 70–80 em 2046) e a passkey liga o acesso à biometria e ao PIN do aparelho, que dependem de memória e coordenação. Não há fonte sobre incidência — por isso sinal fraco e confiança baixa (ver seção 7).
- `e2.2.1` porque a curatela jurídica existe, mas não tem equivalente técnico: o juiz nomeia o curador, e o curador não consegue usar a chave. Troca de ator: do herdeiro (morte) para o curador (vida).
- `e3` porque a carteira estatal resolve o problema que o provedor privado deixou de resolver: provar quem é a pessoa depois que ela perde tudo. Classe de referência: EUDI tem obrigação legal para dezembro de 2026, e menos de um terço dos Estados estava pronto [10] — regulação acelera, mas o gargalo é quem aceita.
- `e3.1` porque o custo de abertura por carteira foi estimado em 3–8 euros contra 70–100 euros do processo atual [10] (número de fornecedor citando terceiros).
- `e3.1.1` porque cada apresentação da carteira pode gerar registro no emissor, a menos que o desenho impeça; troca de ator: o Estado passa a observar a vida privada.
- `e3.2` porque os requisitos técnicos do gov.br (Android 9+, iOS 16+, nível prata/ouro) [8] excluem, por construção, quem não os tem.
- `e3.2.1` porque, se a credencial vira condição de acesso a direito, o balcão sem aparelho deixa de ser cortesia e vira obrigação.
- `e4` porque a passkey sincronizada é cifrada por um segredo mestre guardado na conta da plataforma [3]; sem essa conta, não há sincronia. Sinal forte, 2028: já é assim.
- `e4.1` porque o CXF/CXP é justamente o mecanismo de saída, e o que falta é o protocolo entre plataformas [9]; quando uma saída técnica existe e não é implementada, vira pauta de concorrência.
- `e4.1.1` porque custódia de chave é custódia de ativo quando a chave abre o patrimônio; inferência, sinal fraco.
- `e4.2` porque a Unit 42 constatou que o SDS não tem rotação nem revogação [3]: comprometido uma vez, compromete tudo, inclusive passkeys futuras.
- `e4.2.1` porque a resposta de quem tem mais a perder é tirar a chave da sincronia; o custo e a complexidade da chave física separam quem pode.

**d2 — o servidor cego.**
- `e5` porque os dois maiores sistemas de IA em mensageiro/aparelho escolheram enclave com transparência verificável [14][15]. Confiança media, não alta: a verificação depende de pesquisadores de fato auditarem, e o mapa não achou auditoria independente publicada.
- `e5.1` porque "não vimos seu dado" só vale se o usuário puder conferir; a Apple coloca a verificabilidade como requisito [14], mas o público leigo não lê atestado.
- `e5.1.1` porque vários produtos dependem de poucos fabricantes de TEE; a falha de um é correlacionada.
- `e5.2` porque perfil guardado no servidor é o que alimenta anúncio segmentado; se o servidor não o tem, a personalização tem de ir para o aparelho. Sinal fraco: nenhuma fonte aberta mostra anúncio calculado no aparelho em produção.
- `e5.2.1` porque, sem perfil no servidor, o valor do dado de terceiros cai.
- `e6` porque o Reino Unido obteve a retirada do ADP [11] e a UE manteve a varredura voluntária até 2028 e deslocou o regulamento permanente para verificação de idade [12]: o alvo muda para onde o dado ainda está legível — o aparelho.
- `e6.1` porque a Apple mantém o ADP em outros países e o retirou em um [11].
- `e6.1.1` porque a escolha de jurisdição já é prática para dinheiro; o mecanismo é o mesmo com outra matéria.
- `e6.2` porque o julgamento sem decisão final [13] deixa aberta a possibilidade de bloqueio; sinal fraco: nenhuma fonte aberta mostra operador evitando cifra no Brasil por isso. Confiança baixa.
- `e6.2.1` porque os votos dos relatores [13] tornariam a cifra um direito, e não uma tolerância.
- `e7` porque o servidor cego não tem o conteúdo; a única via de conteúdo é o próprio participante. Rebaixado a sinal fraco (seção 7).
- `e7.1` porque, sem conteúdo, o metadado é o que sobra; o Private Processing já usa OHTTP de terceiros justamente para ocultá-lo [15].
- `e7.1.1` porque o relé de terceiros é operado por poucos e não tem receita do usuário.
- `e8` porque o suporte de hoje depende de ver a conta; com cifra ponta-a-ponta, só o titular pode mostrar.
- `e8.1` porque a engenharia social sempre ataca o elo que ainda depende de decisão humana.
- `e8.1.1` porque atraso e confirmação por terceiro são as defesas conhecidas contra golpe em tempo real.

**d3 — local-first.**
- `e9` porque o custo de servidor por usuário é o que impede o dev solo de oferecer app com dado sensível; com o dado no aparelho, o servidor é só relé. Sinal forte por existência (budgero, kostos, rotki, TaxHacker [26][27][29][30]), mas confiança media: estrelas não são adoção.
- `e9.1` porque é o ideal "The Long Now" [1]: se o original está no aparelho, o fim do fornecedor não apaga o trabalho.
- `e9.1.1` porque, quando a continuidade técnica é possível, a falta dela passa a ser escolha da empresa — e escolha pode ser regulada.
- `e9.2` porque accountant24 e TaxHacker [28][29] mostram o agente rodando onde o dado está; o profissional deixa de ser quem guarda o dado e passa a ser quem interpreta o resultado.
- `e9.2.1` porque, se o cálculo é local, o que sai é o resultado — e o resultado pode levar prova.
- `e10` porque sem cópia legível no servidor não há "restaurar da nuvem"; o HN registra a preocupação com perda de dado em conflitos [25].
- `e10.1` porque a réplica precisa estar ligada o tempo todo, e o aparelho doméstico já está.
- `e10.1.1` porque concentrar a réplica num lugar físico reintroduz o risco físico.
- `e11` porque o arquivo pessoal deixa de estar num servidor legível; Öhman e Watson alertam que controlar o arquivo dos mortos das plataformas é "controlar nossa história" e que o acesso não deve ficar com uma única empresa [6] — o local-first resolve o monopólio e cria a fragmentação.
- `e11.1` porque a única forma de preservar arquivo cifrado é receber a chave.
- `e11.1.1` porque a cifra com abertura programada é a versão técnica da cláusula de sigilo por prazo que arquivos já usam. Prazo 2050: **fora da janela do mapa**, declarado.
- `e12` porque a retenção do usuário pelo servidor é o modelo de receita; oferecer offline sem ceder o controle de conta é a captura mais barata. Quem bloqueia d3: empresas de SaaS por assinatura de nuvem.
- `e12.1` porque Keyhive ainda é pesquisa e a sincronia cifrada do Automerge estava em refatoração em julho de 2026 [23][24].
- `e12.1.1` porque capacidade delegada (BeeKEM, capacidades convergentes [23]) dispensa o dono do servidor.

**d4 — cifra com prazo de validade.**
- `e13` porque "colete agora, decifre depois" é a ameaça declarada pelo Signal para justificar o SPQR [16]; o que foi copiado com curva elíptica abre quando a curva cai [17][18][20]. Prazo 2040: entre a estimativa de 15 anos do GRI [20] e as metas de migração 2029–2035 [17][18][19].
- `e13.1` porque o alvo do colete-agora são justamente as mensagens de valor duradouro.
- `e13.1.1` porque a lei trata vazamento por invasão, não por obsolescência; a lacuna gera litígio. Prazo 2048: **fora da janela**, declarado.
- `e13.2` porque o dado em repouso não se protege sozinho; alguém precisa recifrar.
- `e13.2.1` porque o dado sem dono ativo é o que ninguém recifra.
- `e14` porque NIST deprecia P-256 em 2030 e elimina algoritmos vulneráveis em 2035 [19], e a passkey de hoje usa essas curvas; a FIDO precisa rever atestação, PIN/UV e CTAP [21]. Classe de referência: o próprio cronograma NIST prevê cinco anos entre depreciação e proibição [19]; 2036 assume que a população acompanha com um ano de atraso.
- `e14.1` porque o CTAP-HID tem limites de tamanho de mensagem que assinaturas pós-quânticas podem estourar [21].
- `e14.1.1` porque o emissor que exige a chave arca com a troca, como ocorreu com cartão com chip (analogia de memória, não aberta).
- `e14.2` porque reinscrição é o fluxo atacado em `e1.1` [3].
- `e14.2.1` porque a migração invisível só é possível para quem controla a sincronia.
- `e15` porque chaves e assinaturas maiores exigem mais memória e banda [21]. Quem bloqueia d4: fabricantes de hardware barato e de chave física, que preferem adiar a revisão.
- `e15.1` porque o ciclo de troca de celular é mais longo onde a renda é menor (inferência sem número; sinal fraco).
- `e15.1.1` porque o banco é quem assume o risco da fraude e tem incentivo para impor o requisito.

### Regra de parada

- "Mais serviços aceitam passkey" não é filho de `e1`: é o pai mais adiante (contexto).
- "Mais países retiram o ADP" é `e6.1` mais adiante, não terceira ordem.
- "Mais apps local-first de finanças" é `e9` mais adiante.
- Em `e7`, só um filho: o próximo nível ("moderadores humanos passam a ler denúncias") não troca de ator nem de mecanismo em relação à moderação de hoje.
- Em `e10`, `e11`, `e12` e `e15`, só um filho de segunda ordem: os candidatos a segundo filho repetiam o pai (ver 12.5).

### Cruzamentos (§4)

**Convergência 1 — o fluxo de reinscrição é o ponto fraco de três raízes.** `e1.1` (d1: a central vira alvo), `e8.1` (d2: o golpe da chave temporária) e `e14.2` (d4: a reemissão em massa) chegam ao mesmo efeito de segunda ordem — o momento em que uma chave é reemitida ou concedida é onde o ataque se concentra. É o achado mais valioso do mapa para quem projeta: o desenho da recuperação e da migração decide a segurança, mais que a criptografia.

**Convergência 2 — morte e obsolescência se encontram.** `e2` (d1: a morte tranca o dado), `e11` (d3: o arquivo se fragmenta) e `e13.2.1` (d4: o arquivo de quem morreu é o primeiro a ficar exposto) mostram o mesmo objeto por dois lados opostos: o dado de quem morreu tende a ficar **inacessível para quem deveria abrir e aberto para quem não deveria**. É específico do horizonte de 20 anos: em cinco anos, nem a morte em massa de usuários de passkey nem o computador quântico estão na janela.

**Convergência 3 — concentração volta pela porta da conveniência.** `e4` (chaveiro sincronizado), `e12.1` (servidor de permissões) e `e14.2.1` (migração invisível) reconcentram poder em quem controla a sincronia.

**Retroalimentação.**
- Reforça: `e2.1.1` (etiqueta herdável) e `e11.1` (doação de chaves) dão ao local-first a peça que falta para ser aceitável a famílias e instituições, reforçando d3.
- Enfraquece: `e6` (Estado muda o alvo para o aparelho) e `e3.1.1` (carteira que rastreia) podem esvaziar d1 e d2 — a soberania do dado muda de lugar, não se completa.
- Enfraquece: `e13` mostra que o servidor cego de hoje pode ser o vazamento de amanhã; se isso ficar visível antes de 2040, a confiança em d2 cai.

**Contradição.**
1. `e2.1` (a lei protege a privacidade do morto e proíbe acesso a mensagens) × `e11.1` (arquivos pedem as chaves para preservar a história). O que decide: se a lei brasileira aprovada mantiver a proibição de acesso às mensagens [7], a doação de chaves só vale com consentimento em vida.
2. `e4.2.1` (chave presa ao aparelho para alto risco) × `e14.2.1` (a chave presa perde na migração). O que decide: se a FIDO resolver a migração de chave física [21] antes de 2035.

### Cobertura STEEP e quem perde

- **Social:** `e1.2.1`, `e2.2`, `e3.2`, `e11`, `e13.1`. **Tecnológico:** `e1`, `e5`, `e9`, `e10`, `e14`. **Econômico:** `e3.1`, `e5.2`, `e9.2`, `e12`, `e14.1`. **Ecológico:** `e14.1` (lixo eletrônico de chaves), `e15.1.1` (troca forçada de celular) — cobertura fraca, registrada. **Político:** `e3.1.1`, `e6`, `e6.2`, `e4.1`.
- **Quem perde:** idosos e curatelados (`e2.2`), quem não tem aparelho ou documento (`e3.2`), herdeiros (`e2`), historiadores e arquivos (`e11`), fontes jornalísticas antigas (`e13.1`), quem comprou chave física (`e14.1`), usuários de celular barato (`e15.1`), corretores de dado (`e5.2.1`), centrais de atendimento como canal de ajuda (`e8`).

## 6. Sinais fracos e wildcards

### Sinais fracos

1. **IA de finanças que não sai da máquina** — accountant24 (54 estrelas) [28], TaxHacker (6.715) [29]. Mudaria: `e9.2` sobe de sinal. Sinal observável: um escritório de contabilidade anunciar que aceita "relatório do agente do cliente" em vez de extrato.
2. **Controle de acesso sem servidor** — Keyhive/BeeKEM, artigo publicado e automerge-repo refatorado para cifra [23][24]. Mudaria: `e12.1` cai e `e12.1.1` sobe. Observável: um app com mais de um milhão de usuários anunciar sincronia via Beelay ou equivalente.
3. **Herança como objeto de lei no Brasil** — PL 4/2025 com "inventariante digital" [7]. Mudaria: `e2.1` e `e2.1.1` sobem. Observável: aprovação no plenário do Senado com o artigo sobre mensagens privadas intacto.
4. **Migração adversarial de conta** — AT Protocol permite sair de um servidor que não coopera usando chave de rotação própria [22]. Mudaria: a identidade social passa a ter o mesmo modelo de d1. Observável: outra rede grande adotar chave de rotação controlada pelo usuário.
5. **Estimativas de quebra de P-256 caindo em série** [17][18]. Mudaria: d4 antecipa, `e13` vai de 2040 para meados da década de 2030. Observável: nova estimativa abaixo de 1.000 qubits lógicos ou demonstração pública de fatoração em escala relevante.
6. **Desconhecimento das ferramentas de herança** — a busca trouxe um estudo da Carnegie Mellon (abril de 2026) em que quase nenhum idoso conhecia o Contato de Legado ou o Gerenciador de Contas Inativas; **não aberto**, só visto no resumo da busca (12.4). Se confirmado, reforça `e2` e `e2.2`.

### Wildcards

1. **Q-Day anunciado de surpresa (antes de 2032).** Mecanismo: um Estado ou laboratório demonstra quebra de P-256 antes da migração das passkeys e dos backups. Improvável porque as estimativas centrais estão em 10–15 anos [20]. Faria com o mapa: `e13`, `e14` e `e14.2` viram eventos de um ano, não de uma década; a reinscrição em massa acontece sob ataque. Sinal precoce: governos acelerando prazos do CNSA 2.0 ou do NIST [19] sem explicação pública.
2. **Lei que obriga local-first ou E2E por padrão para dado sensível (saúde, finanças).** Mecanismo: após vazamento de grande escala, um regulador (UE ou ANPD, que em 2026 virou agência com orçamento próprio, segundo resumo de busca não aberto) exige que o fornecedor não consiga ler o dado. Improvável porque o movimento regulatório dominante é o oposto [11][12]. Faria: d2 e d3 saltam de nicho para maioria em setores regulados; `e12` desaparece. Sinal precoce: norma setorial citando "o controlador não deve ter acesso ao conteúdo".
3. **Falha em massa do segredo mestre de uma plataforma.** Mecanismo: o ataque "Golden" da Unit 42 [3] ou equivalente explorado em escala; como o SDS não tem revogação, milhões de pessoas precisam reemitir tudo. Improvável porque exige malware prévio em muitos aparelhos. Faria: `e4.2.1` vira regra em meses; a confiança no chaveiro sincronizado cai. Sinal precoce: CVE atribuída a extração de SDS explorada em campo.
4. **Colapso da carteira estatal por falha de privacidade.** Mecanismo: descobre-se que uma carteira nacional registra cada apresentação. Improvável porque o desenho europeu prevê divulgação seletiva. Faria: `e3` recua e `e3.1.1` vira pauta pública. Sinal precoce: auditoria independente publicada sobre logs do emissor.

## 7. Contra o próprio mapa

### Pré-mortem: é 2046 e este mapa estava errado. Por quê?

1. **A sincronia da plataforma venceu tudo.** O chaveiro sincronizado, a IA em enclave e o backup "cifrado" das três plataformas resolveram recuperação, herança e migração pós-quântica de forma invisível; d1 e d3 nunca saíram do nicho porque a conveniência do intermediário foi suficiente. Aponta para `e1`, `e9`, `e10`. Consequência: `e9` rebaixado de alta para media; `e4` mantido em alta (é o cenário que este pré-mortem descreve).
2. **O computador quântico não chegou.** Em 2046 a estimativa ainda está "a quinze anos". Aponta para d4 inteira. Consequência: `e13` empurrado de 2036 para 2040; `e14` mantido em 2036 porque a reemissão é imposta pelo cronograma do NIST [19], não pelo quântico — ou seja, ela acontece mesmo que o quântico não venha.
3. **A delegação na velhice foi resolvida por procuração em papel e pelo celular desbloqueado entregue ao filho.** O mapa superestimou a formalização técnica. Aponta para `e2.2` e `e2.2.1`. Consequência: `e2.2` rebaixado de media para baixa.

### Extrapolação linear

- `e9` ("apps pequenos nascem local-first") é o presente mais adiante; o que o salva de virar contexto é o mecanismo não-linear em `e9.1`: quando a primeira grande empresa fecha e o app continua funcionando, a expectativa do consumidor muda de patamar.
- `e6.1` ("proteção depende do país") é extrapolação do caso do Reino Unido [11]; mantido com confiança media, sem terceira ordem com confiança acima de baixa.
- `e3.1` (custo de onboarding cai) é extrapolação de uma estimativa de fornecedor [10]; prazo empurrado (abaixo).

### Velocidade de adoção

- `e3.1`: prazo 2029 → 2031. A EUDI tinha menos de um terço dos Estados prontos e a Alemanha só terá a carteira pública em 2027 [10]; a classe de referência (regulação com prazo legal) mostra atraso de ao menos dois anos.
- `e5.2`: prazo 2032 → 2036. Nenhum produto aberto mostra personalização no aparelho substituindo perfil no servidor; exigir isso em seis anos seria mais rápido que a própria cifra de mensagem, que levou anos de padrão a maioria.
- `e11`: prazo 2036 → 2040. Depende de local-first chegar a uma fração relevante dos arquivos pessoais; d3 levou sete anos (2019 → 2026) sem sair do nicho [1][24][25].
- `e13`: prazo 2036 → 2040 (ver pré-mortem 2).

### A raiz que não acontece

- **Sem d1:** sobra d2 e d3 quase intactos; `e2` (morte tranca o dado) continua, porque o dado cifrado tranca mesmo com senha. O mapa não depende só de d1.
- **Sem d2:** `e5`–`e8` somem; d3 perde a sincronia cifrada, mas `e9` e `e10` continuam. Sem d2, `e13` perde metade da razão (sem servidor cego guardando backup cifrado, sobra a mensagem).
- **Sem d3:** `e9`–`e12` somem; `e11` (arquivo fragmentado) vira improvável. d1, d2 e d4 continuam.
- **Sem d4 (sem quântico):** `e13` e seus filhos somem; `e14` continua por imposição do NIST [19]; `e15` continua em forma menor.
- Conclusão: o mapa não é uma raiz só disfarçada; a dependência mais forte é d2 → d4 (o servidor cego é o arquivo que o quântico abre).

### Suposições escondidas

1. **As plataformas continuam permitindo apps de terceiros com cifra própria.** Se o sistema operacional fechar o acesso a armazenamento cifrado por terceiros, d3 cai. Vira wildcard implícito.
2. **O Estado brasileiro mantém o gov.br como porta única.** Se a identidade for fragmentada, `e3` perde força no Brasil.
3. **Energia e hardware para réplica doméstica continuam baratos.** `e10.1` assume isso.
4. **Os padrões pós-quânticos atuais (ML-KEM, ML-DSA) não são quebrados por matemática clássica.** Se forem, d4 recomeça do zero — novo wildcard, não incluído na roda.
5. **A lei continua distinguindo "herdável" de "privado".** O PL 4/2025 faz isso [7]; se o texto final mudar, `e2.1` muda.

### Viés do autor

- A zona "Pessoas e dados" e o material da turma (finanças com privacidade) puxam o mapa para o lado de quem ganha com a soberania. `e9` e `e9.2` estão aqui em parte porque a turma os trouxe; foram mantidos com confiança media, não alta.
- O horizonte longo puxa para temas de morte e arquivo, que são atraentes como narrativa; `e11.1` e `e11.1.1` ficaram com confiança baixa por isso.
- O autor tende a ver a regulação estatal como ameaça à cifra; o mapa tenta equilibrar com `e3.2.1` e o wildcard 2 (regulação a favor).

### Calibração

Contagem antes da bateria: ordem 1 — alta 5 · media 10 · baixa 0; ordem 2 — alta 0 · media 21 · baixa 3; ordem 3 — alta 0 · media 0 · baixa 24. Depois (a do bloco): ordem 1 — alta 4 · media 11 · baixa 0; ordem 2 — alta 0 · media 17 · baixa 7; ordem 3 — alta 0 · media 0 · baixa 24. A distribuição cai com a ordem: alta só na 1ª ordem (4 de 15, os efeitos com caso documentado hoje: `e1`, `e2`, `e4`, `e6`), nenhuma alta na 2ª e toda a 3ª em baixa. As mudanças de ordem 2 são `e2.2`, `e5.2`, `e6.2` e `e15.1` (media → baixa); a de ordem 1 é `e9` (alta → media). *(O verificador da seção 12.1 confere os números "depois".)*

### Registro de alterações

| id | campo | antes | depois | por quê |
|---|---|---|---|---|
| e9 | confianca | alta | media | pré-mortem 1: estrelas no GitHub são existência, não adoção [26]–[30] |
| e2.2 | confianca | media | baixa | pré-mortem 3: demografia certa, dominância do caso sem nenhuma fonte |
| e3.1 | prazo | 2029 | 2031 | EUDI com menos de um terço pronto; Alemanha só em 2027 [10] |
| e5.2 | prazo | 2032 | 2036 | nenhum caso de personalização no aparelho substituindo perfil |
| e5.2 | confianca | media | baixa | idem |
| e7 | sinal | medio | fraco | nenhuma fonte aberta sobre denúncia com trecho em mensageiro cifrado |
| e11 | prazo | 2036 | 2040 | d3 sete anos sem sair do nicho |
| e13 | prazo | 2036 | 2040 | pré-mortem 2 e estimativa de 15 anos do GRI [20] |
| e15.1 | confianca | media | baixa | sem número sobre ciclo de troca de celular no Brasil |
| e6.2 | confianca | media | baixa | nenhuma fonte mostra operador evitando cifra por causa do STF |
| e8.2 | — | "contadores perdem clientes para agentes locais" | removido (12.5) | teste da causa solta: aconteceria com IA na nuvem |
| e6.3 | — | "verificação de idade no sistema operacional vira padrão global" | removido (12.5) | não depende do servidor cego; é tema de regulação de conteúdo |
| e1.3 | — | "surge a profissão de designer de recuperação" | removido (12.5) | efeito proibido sem nome e mecanismo; conteúdo absorvido em `e1.2` |

Cota por raiz: d1 (`e2.2`, `e3.1`, `e1.3` removido), d2 (`e5.2`, `e7`, `e6.2`, `e6.3` removido), d3 (`e9`, `e11`, `e8.2` removido — estava sob d3 na primeira versão), d4 (`e13`, `e15.1`). Cumprida.

## 8. O que a máquina errou

1. **O número "5 bilhões de passkeys".** Aparece no comunicado da FIDO, que abri, mas que recusa o verificador automático (403). O resumo da Descope, que responde, **não** traz esse número — a ferramenta de leitura disse explicitamente que ele não está lá. Mantive o número na seção 3 atribuído ao comunicado, com a ressalva; ele não sustenta nenhum efeito.
2. **Datas de memória nas classes de referência.** "Passkeys anunciadas em conjunto em 2022" e "cartão com chip" (em `e14.1.1`) vêm de memória; não abri fonte. Estão marcadas no texto. A classe de referência de `e1` se apoia na primeira data.
3. **O relatório do GRI não dá número para 20 anos.** Uma leitura apressada extrapolaria "51–70% em 15 anos" para "mais de 70% em 2046". Não fiz isso no texto, mas a raiz d4 inteira assume que a probabilidade continua subindo depois de 15 anos — isso é inferência declarada na seção 3.
4. **Estudo da Carnegie Mellon sobre idosos e ferramentas de herança.** Apareceu no resumo da busca com detalhes (abril de 2026, listas de senha na gaveta) que soam plausíveis demais para usar sem abrir. Não usei como fato; está como sinal fraco 6, marcado como não aberto.
5. **Discussão de HN sobre sync engines (item 47317254).** Abri e tinha 1 ponto e 3 comentários — o resumo da busca a apresentava como discussão relevante. Troquei pela discussão de 2025 (467 pontos, 218 comentários) [25]. Um resumo de busca que infla a relevância de uma fonte é um erro que passaria se eu não abrisse.
6. **Status do ADP no Reino Unido.** O resumo da busca dizia que "o Reino Unido retirou o pedido" e que "a Apple entrou com nova ação em agosto de 2026"; nenhuma das duas afirmações foi confirmada por página aberta. Usei só o que a página da Apple diz [11].
7. **`e2.2` soa convincente e não tem fonte.** O efeito de declínio cognitivo é forte como narrativa e fraco como evidência: não achei nenhum dado sobre perda de acesso por idade. Ficou com sinal fraco e confiança baixa.
8. **Custo de onboarding 70–100 € → 3–8 €.** Número de fornecedor (Corbado) citando terceiros [10]; redondo o bastante para desconfiar. Usado só em `e3.1`, com a ressalva.

## 9. Três cenários para 2046

**Provável.** Em 2046 quase ninguém digita senha, e quase ninguém é dono da própria chave: as passkeys foram reemitidas em algoritmo pós-quântico entre 2032 e 2038, de forma silenciosa, por dentro dos chaveiros das três plataformas, que se tornaram o intermediário de identidade de que o tema prometia se livrar. Serviços regulados aceitam a carteira estatal; o gov.br é a porta de quase tudo no Brasil, e há balcão para quem não tem aparelho. Os servidores de IA dessas plataformas rodam em enclave auditável, e o anúncio segmentado ainda existe fora deles. Local-first é comum em apps de nicho e em ferramentas profissionais, raro no consumo de massa. O problema social visível é o da geração que envelhece: famílias lidam com idosos que não conseguem mais operar a chave e com mortos cujo arquivo ficou trancado, porque poucos configuraram herança. Mensagens da década de 2010 copiadas por Estados começam a ser abertas, e uma ou duas revelações públicas acontecem. **Sinal precoce:** a migração pós-quântica de passkeys ser anunciada pelas plataformas antes de a FIDO fechar o padrão de chave física [21].

**Desejável.** Em 2046 a pessoa escolhe onde a chave mora e consegue levá-la entre plataformas, porque o CXP virou regra de concorrência. Todo app sério nasce com guardiões, delegação gradual e etiqueta herdável/morre-comigo; a lei brasileira de herança digital foi aprovada e a interface do inventariante existe. O arquivo de uma vida mora em réplicas cifradas da família e, por escolha em vida, parte dele é doada com chave a arquivos públicos com abertura programada. Tudo o que importava foi recifrado antes do quântico. Para chegar lá: padronizar portabilidade e herança do chaveiro até 2030; tornar a recifragem de acervos uma função do sistema operacional; concluir o julgamento do STF a favor da cifra; e financiar controle de acesso local-first aberto. **Sinal precoce:** um app de consumo com mais de dez milhões de usuários lançar herança com quórum de guardiões e etiqueta por dado.

**Indesejável.** Em 2046 a cifra existe, mas o Estado lê no aparelho: varredura no cliente e verificação de idade no sistema operacional viraram padrão em vários blocos, e a carteira estatal registra cada identificação. O chaveiro de uma plataforma sofreu comprometimento em massa sem revogação, e milhões de pessoas perderam contas de uma vez. O quântico chegou antes da recifragem, e o arquivo cifrado de mortos e de apps extintos foi aberto. A proteção forte ficou para quem tem aparelho caro e chave física; celulares baratos ficaram anos em cifra clássica. **Sinal precoce:** o regulamento europeu permanente aprovar exigência técnica sobre o aparelho, ou uma CVE de extração de segredo mestre de chaveiro sincronizado explorada em campo [3][12].

## 10. O experimento

**O que é.** *O cofre que envelhece*: um app web de arquivo e finanças da família, local-first no navegador (Automerge ou SQLite no cliente), login só por passkey (`@simplewebauthn` [32]), sincronia cifrada por um relé que não lê (o servidor guarda só blobs cifrados), recuperação por quórum de guardiões (divisão de segredo de Shamir, com a chave de backup derivada por `argon2`), e uma etiqueta obrigatória em cada item: **herdável** ou **morre comigo**. Um painel mostra a "validade" de cada cifra (clássica ou híbrida pós-quântica) e oferece recifragem.

**Que pergunta responde.** Pessoas comuns conseguem montar e manter, sem ajuda, a estrutura de guardiões, herança e delegação de que d1 e d3 dependem? E o que decidem quando têm de classificar o próprio dado entre herdável e privado (`e2.1.1`)?

**Tecnologia emergente usada, e por que não dá com a madura.** Passkeys sem senha de fallback, CRDT local-first, sincronia cega e recuperação por quórum. Com a tecnologia madura (login com Google, backup na nuvem legível), o provedor resolve recuperação e herança por trás — exatamente o que o experimento quer tirar do caminho para ver o que a pessoa faz sozinha.

**O que a turma faz em sala.** Duplas, cada uma com dois aparelhos e dois colegas como guardiões. Quatro provas:
1. **Perder o aparelho:** apagar o navegador e recuperar só com os guardiões.
2. **Morrer:** um colega "morre"; o herdeiro tenta abrir o que é herdável e não deve conseguir abrir o resto.
3. **Envelhecer:** o titular passa a ter "limitação" (não pode digitar PIN); um familiar ativa delegação gradual.
4. **Trocar a cifra:** simular o Q-Day — o que foi cifrado só com curva clássica abre para a turma; o que foi recifrado não.
Mede-se: tempo até recuperar, número de pedidos de ajuda, fração de itens marcados herdável, quantos guardiões a pessoa escolhe e por quê.

**O resultado que faria mudar de ideia.** Se mais da metade das duplas não recuperar a conta em dez minutos sem ajuda, ou se a maioria preferir "deixar a plataforma cuidar" quando oferecida a opção, `e1`, `e1.2` e `e2.1.1` caem de confiança e o cenário provável (intermediário renovado) ganha peso. Se, ao contrário, a turma recuperar com facilidade e marcar menos de 20% dos itens como herdáveis, `e11.1` (doação de chaves a arquivos) fica ainda menos provável e a contradição 1 se resolve a favor da privacidade.

## 11. Fontes

1. https://www.inkandswitch.com/essay/local-first/ — Kleppmann, Wiggins, van Hardenberg, McGranaghan, "Local-first software" (Onward! 2019, abril de 2019): sete ideais, "The Long Now". Sustenta d3, `e9.1`, classe de referência de d3. Confiabilidade alta: texto fundador, lido na fonte.
2. https://www.descope.com/blog/post/2026-fido-report — resumo do relatório FIDO 2026: 90%, 75%, 40%, 49%, 68%/30%/28%, 89%, 47%. Sustenta a recusa da passkey como raiz, `e1`. Confiabilidade média: fornecedor resumindo pesquisa encomendada pela FIDO (Sapio Research).
3. https://unit42.paloaltonetworks.com/passwordless-authentication-security-risks/ — Unit 42, "Pass the Passkey" (03/08/2026): três ataques, SDS sem rotação nem revogação, malware prévio. Sustenta `e1.1`, `e4`, `e4.2`, `e14.2`, wildcard 3. Confiabilidade alta: pesquisa técnica primária.
4. https://support.apple.com/guide/security/legacy-contact-security-secebf027fb8/web — Apple Platform Security: contato de legado, chave dividida, certidão de óbito, Chaveiro excluído. Sustenta `e1`, `e2`. Confiabilidade alta: documentação primária.
5. https://en.wikipedia.org/wiki/Digital_inheritance — RUFADAA, ferramentas das plataformas, direitos de uso intransferíveis. Sustenta `e1`, `e2`. Confiabilidade média: enciclopédia; dado de adoção da RUFADAA desatualizado ("47 estados em 2021").
6. https://www.sciencedaily.com/releases/2019/04/190427104813.htm — Öhman e Watson (Oxford, Big Data & Society, 2019): mortos podem superar vivos no Facebook até 2070; "controlar este arquivo é controlar nossa história". Sustenta seção 2, `e11`. Confiabilidade média-alta: release da universidade sobre artigo revisado por pares; projeção com premissas declaradas.
7. https://www12.senado.leg.br/noticias/infomaterias/2026/03/rede-social-selfies-e-milhas-aereas-na-partilha-novo-codigo-civil-delimita-heranca-digital — Agência Senado (março de 2026): PL 4/2025, patrimônio digital, mensagens privadas inacessíveis, inventariante digital. Sustenta `e2.1`, contradição 1, sinal fraco 3. Confiabilidade alta sobre o texto do projeto; o projeto não é lei.
8. https://www.uai.com.br/economia/2026/02/19/nova-atualizacao-do-gov-br-nao-vai-mais-pedir-reconhecimento-facial-nem-senha-para-acessar-o-aplicativo/ — gov.br com passkey (19/02/2026), requisitos. Sustenta nota Brasil, `e1`, `e1.1.1`, `e3.2`. Confiabilidade média: imprensa regional, sem dado de uso.
9. https://www.corbado.com/blog/credential-exchange-protocol-cxp-credential-exchange-format-cxf — CXF/CXP, HPKE, implementação Apple, contribuidores. Sustenta `e4.1`. Confiabilidade média: blog de fornecedor.
10. https://www.corbado.com/blog/eudi-wallet-2026-deadline-rollout-eic-2026 — EUDI: prazo, menos de um terço prontos, sandbox alemã, custo 70–100 × 3–8 euros. Sustenta `e3`, `e3.1`, ajuste de prazo. Confiabilidade média: fornecedor citando terceiros.
11. https://support.apple.com/en-us/122234 — Apple: ADP indisponível para novos usuários no Reino Unido; categorias que perdem e mantêm cifra. Sustenta `e6`, `e6.1`. Confiabilidade alta: fonte primária.
12. https://www.eff.org/deeplinks/2026/04/eu-parliament-blocks-mass-scanning-our-chats-whats-next — EFF (07/04/2026, atualizado em 05/08/2026): votação, varredura até 03/04/2028, regulamento permanente. Sustenta `e6`. Confiabilidade média: organização com posição declarada.
13. https://isoc.org.br/noticia/policy-brief-criptografia-em-juizo-consideracoes-sobre-julgamento-da-adi-5527-e-da-adpf-403-pelo-stf — ISOC Brasil (policy brief de 26/05/2025, notícia de 19/10/2025): votos de Rosa Weber e Fachin. Sustenta `e6.2`, `e6.2.1`. Confiabilidade média: organização com posição declarada; não informa decisão final.
14. https://security.apple.com/blog/private-cloud-compute/ — Apple: Private Cloud Compute (10/06/2024), cinco requisitos. Sustenta d2, `e5`, `e5.1`. Confiabilidade média: fonte primária com interesse.
15. https://engineering.fb.com/2025/04/29/security/whatsapp-private-processing-ai-tools/ — Meta: Private Processing (TEE, CVM, OHTTP, transparência, opcionalidade). Sustenta d2, `e5`, `e7.1`. Confiabilidade média: fonte primária com interesse.
16. https://signal.org/blog/spqr/ — Signal (02/10/2025): SPQR, Triple Ratchet, "colete agora, decifre depois". Sustenta d4, `e13`. Confiabilidade alta: fonte primária.
17. https://research.google/blog/safeguarding-cryptocurrency-by-disclosing-quantum-vulnerabilities-responsibly/ — Google: ECDLP-256 com <1.200 qubits lógicos, prova de conhecimento zero, meta de 2029. Sustenta d4, sinal fraco 5. Confiabilidade alta: fonte primária.
18. https://blog.cloudflare.com/post-quantum-roadmap/ — Cloudflare (07/04/2026): >65% do tráfego humano pós-quântico, roteiro de autenticação até 2029, estimativa da Oratomic. Sustenta recusa do PQ no TLS, d4. Confiabilidade alta para o próprio tráfego.
19. https://thequantuminsider.com/2026/05/08/post-quantum-migration-timelines-government-industry-impact/ — prazos NIST (2030/2035), NSA CNSA 2.0, UE. Sustenta d4, `e14`, tabela do relógio. Confiabilidade média: imprensa especializada; bate com o documento do NIST visto na busca.
20. https://globalriskinstitute.org/publication/quantum-threat-timeline-report-2025b/ — Mosca e Piani, Quantum Threat Timeline Report 2025 (09/03/2026): 26 especialistas, 28–49% em 10 anos, 51–70% em 15. Sustenta d4, `e13`, wildcard 1. Confiabilidade média-alta: série anual de referência, amostra pequena.
21. https://www.biometricupdate.com/202609/passkeys-in-the-post-quantum-era-why-fido-needs-more-than-new-algorithms — Thiers (Swissbit), 16/09/2026: atestação, PIN/UV, tamanho de chave, CTAP-HID, sem cronograma. Sustenta d4, `e14`, `e14.1`, `e15`. Confiabilidade média: artigo de fabricante em veículo setorial.
22. https://atproto.com/guides/account-migration — AT Protocol: migração, migração adversarial, chaves de rotação. Sustenta sinal fraco 4. Confiabilidade alta: documentação oficial.
23. https://www.inkandswitch.com/project/keyhive/ — Keyhive, BeeKEM, Beelay (2024–2026). Sustenta d3, `e12.1`, `e12.1.1`. Confiabilidade alta: laboratório autor.
24. https://automerge.org/blog/2026-july/ — Automerge (julho de 2026): versões 3.3, automerge-repo 2.6, refatoração para cifra, artigo do BeeKEM, usuários. Sustenta d3, `e12.1`, sinal fraco 2. Confiabilidade alta como relato do projeto.
25. https://news.ycombinator.com/item?id=44833834 — "Linear sent me down a local-first rabbit hole" (08/08/2025, 467 pontos, 218 comentários). Sustenta d3 (o que falta), `e10`. Confiabilidade média como termômetro social; baixa como evidência técnica.
26. https://github.com/tombadilo-bombadilo/budgero — budgero, 21 estrelas (22/09/2026). Sustenta `e9`. Confiabilidade alta como existência; nula como adoção.
27. https://github.com/shynewt/kostos — kostos, 43 estrelas. Sustenta `e9`. Mesma ressalva.
28. https://github.com/machulav/accountant24 — accountant24, 54 estrelas. Sustenta `e9.2`, sinal fraco 1. Mesma ressalva.
29. https://github.com/vas3k/TaxHacker — TaxHacker, 6.715 estrelas. Sustenta `e9`, `e9.2`. Confiabilidade alta como existência.
30. https://github.com/rotki/rotki — rotki, 4.029 estrelas. Sustenta `e9`. Confiabilidade alta como existência.
31. https://github.com/inkandswitch/keyhive — repositório do Keyhive, 248 estrelas, atividade em 22/09/2026. Sustenta sinal fraco 2. Confiabilidade alta como existência.
32. https://github.com/MasterKale/SimpleWebAuthn — `@simplewebauthn`, 2.352 estrelas. Sustenta o experimento. Confiabilidade alta como existência.
33. https://github.com/better-auth/better-auth — better-auth, 30.058 estrelas. Sustenta "quem constrói" e o substrato do experimento. Confiabilidade alta como existência.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

Comando: `python3 futurizacao-giordano/references/verificar.py tendencia-soberania-de-dados-local-first-ponta-a-ponta-e-o-fim-da-senha.md --links` (22/09/2026).

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 15 (frontmatter diz 15)
efeitos ordem 2: 24 (frontmatter diz 24)
efeitos ordem 3: 24 (frontmatter diz 24)
prazo > horizonte (2046) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 2 [('e11.1.1', 2050), ('e13.1.1', 2048)]
confiança ordem 1: alta 4 · media 11 · baixa 0
confiança ordem 2: alta 0 · media 17 · baixa 7
confiança ordem 3: alta 0 · media 0 · baixa 24
links da seção 11: 33/33 respondem (frontmatter diz fontes: 33)
RESULTADO: ok
```

Os dois efeitos de 3ª ordem além do horizonte (`e11.1.1`, 2050; `e13.1.1`, 2048) estão declarados na seção 5 como fora da janela do mapa.

### 12.2 Premissas assumidas e o que o briefing não cobria

- O briefing cobriu horizonte (2046), público, recorte (global com nota Brasil), descarte (o que já é comum em produto de massa), viés (neutro), raiz suspeita (nenhuma), falseador (adoção além da maioria inicial, ou tecnologia que só melhora o que existe) e profundidade (três ordens). Por isso **não houve rebaixamento** de confiança por falta de entrevista.
- **Não coberto e assumido:** (a) o que conta como "Brasil" na nota — tratado nos efeitos `e3.2`, `e6.2`, `e6.2.1`, `e15.1` e na seção 3; (b) se o autor quer o mapa independente da rodada de 2041 do mesmo tema — assumi que sim: a rodada de 2041 foi lida **só** para evitar repetir buscas mortas (lista de fontes e buscas), não a roda; a roda foi escrita do zero para o horizonte de 20 anos, com ênfase nova em envelhecimento, arquivo e doação de chaves; (c) a probabilidade de computador quântico em 20 anos — assumida maior que a de 15 anos, sem número (seção 3).
- **Aplicação do falseador:** passkey como login foi recusada como raiz exatamente pelo primeiro critério (75%/49% [2]); cifra de mensagem e acordo pós-quântico no TLS, pelo mesmo motivo.

### 12.3 Buscas feitas (22/09/2026)

1. "FIDO Alliance passkey index 2026 adoption report" — aberto o comunicado da FIDO (403 no verificador) e o resumo da Descope [2].
2. "digital inheritance passkeys death account access problem 2026" — aberta a Wikipedia [5]; o resumo citava o estudo da Carnegie Mellon (não aberto) e escritórios de advocacia (não abertos).
3. "quantum threat timeline report 2025 Mosca Global Risk Institute" — aberto [20].
4. "local-first software 2026 Automerge sync engine production adoption" — aberto o blog do Automerge de julho de 2026 [24]; FOSDEM 2026 com trilha local-first (não aberto); blogs agregadores (não usados).
5. "gov.br chave de acesso passkey 2026 login sem senha" — aberto UAI [8].
6. "Unit 42 passkey security domain secret attack 2026" — aberto Unit 42 [3].
7. "Öhman Watson dead Facebook users outnumber living 2070" — aberto ScienceDaily [6].
8. "Credential Exchange Protocol CXP FIDO passkey portability 2026 status" — aberto Corbado [9]; resumo citava CXF como Proposed Standard em agosto de 2025 (Bitwarden, não aberto) — o texto usa só o que o Corbado diz.
9. "NIST IR 8547 deprecate RSA ECC 2030 disallowed 2035" — PDF do NIST listado, não aberto; aberto Quantum Insider [19].
10. "EUDI wallet December 2026 member states rollout readiness" — aberto Corbado [10].
11. "ANPD portabilidade de dados regulamentação 2026 LGPD" — nenhum aberto; o resumo citava Resolução CD/ANPD nº 19/2024 (JSON e CSV) e a ANPD como agência reguladora em 2026; mencionado só no wildcard 2 como não aberto.
12. "Apple Advanced Data Protection UK withdrawn 2026 update" — aberta a página da Apple [11]; afirmações do resumo sobre nova ação judicial não usadas.
13. "reforma Código Civil herança digital patrimônio digital senado 2026" — aberta a Agência Senado [7].
14. "Chat Control EU regulation 2026 vote encryption scanning" — aberto EFF [12]; resumo citava votação de 09/07/2026 (314 × 276, quórum de 361) de fontes não abertas — não usado.
15. "Ink & Switch Keyhive local-first access control BeeKEM" — aberto [23].
16. "Hacker News local-first sync engine discussion 2025 2026" — abertos o item 47317254 (1 ponto, descartado) e o 44833834 [25].
17. "passkey account recovery lost device study users locked out 2026" — só blogs de fornecedores (MojoAuth, Corbado FAQ, Authsignal); nenhum estudo com dado de usuários trancados; nada usado.
18. "STF criptografia WhatsApp ADI 5527 ADPF 403 julgamento" — aberta ISOC Brasil [13]; resumo citava retomada em 11/12/2024 (escritório Ayres Britto, não aberto).
19. Abertos sem busca própria (URLs conhecidos das fontes primárias): Apple Legacy Contact [4], Apple PCC [14], Meta Private Processing [15], Signal SPQR [16], Google quântico [17], Cloudflare [18], Biometric Update [21], AT Protocol [22].
20. GitHub via `gh api repos/...`: budgero, kostos, accountant24, TaxHacker, rotki, keyhive, SimpleWebAuthn, better-auth [26]–[33].

### 12.4 O que não abriu, ou abriu e não serviu

- `https://fidoalliance.org/fido-alliance-reports-accelerating-global-passkey-adoption-on-world-passkey-day-2026/` — aberto pela ferramenta de leitura (5 bilhões de passkeys, 7 de maio de 2026, 11.000 consumidores e 1.400 decisores, margens de erro ±0,9 e ±2,6 p.p.), mas responde 403 ao verificador. Substituído na seção 11 pela Descope [2]; o número de 5 bilhões ficou atribuído a ele na seção 3, com ressalva.
- `https://www.businesswire.com/...` (mesmo comunicado) — tempo esgotado no verificador.
- `https://news.ycombinator.com/item?id=47317254` — "Choosing a Sync Engine for Local-First in 2026", 1 ponto, 3 comentários: irrelevante como termômetro.
- Estudo da Carnegie Mellon (abril de 2026) sobre idosos e ferramentas de herança — só no resumo da busca.
- NIST IR 8547 (PDF) — não aberto; prazos vêm de [19].
- Resolução ANPD nº 19/2024 e Lei 15.352/2026 — só no resumo da busca.
- Material da turma não procurado: fintrack, Atlas, happy-balance, wilson, finvo, mailquill, BeeCount, Termly, `webauthn-p256`, `fido2-lib`, `@passwordless-id/webauthn`, Rodauth, iron-session, jose, otplib.

### 12.5 Efeitos e ramos cortados

- **e8.2 "Contadores humanos perdem clientes para agentes locais"** (primeira versão, sob d3) — falha no teste da causa solta: aconteceria igual com IA em nuvem.
- **e6.3 "Verificação de idade no sistema operacional vira padrão global"** — não depende do servidor cego; pertence a regulação de conteúdo. Fica mencionado como forma de `e6`.
- **e1.3 "Surge a profissão de designer de recuperação"** — efeito proibido sem nome e mecanismo; o conteúdo foi absorvido em `e1.2`.
- **"Mais serviços aceitam passkey"**, **"mais países tiram o ADP"**, **"mais apps local-first"**, **"mais mensageiros adotam PQ"** — regra de parada (pai mais adiante) ou contexto.
- **Segundo filho de `e10`: "backup em nuvem legível volta como produto premium"** — é o contrário do pai, não um filho; registrado como possibilidade no pré-mortem 1.
- **Segundo filho de `e11`: "redes sociais descentralizadas guardam o arquivo público"** — o arquivo público não é o objeto de `e11` (que é o pessoal cifrado); cortado.
- **Segundo filho de `e15`: "IoT doméstico fica sem cifra pós-quântica"** — correto, mas é `e15` mais adiante com outro aparelho; regra de parada.
- **"Cursos de design passam a ensinar recuperação e herança"** — efeito proibido; descartado.

### 12.6 A rodada descartada

Primeira versão, antes das buscas sobre envelhecimento e arquivo: as mesmas quatro raízes, mas com d1 centrada em "portabilidade de identidade" (CXP, AT Protocol, EUDI) e sem os ramos `e2.2` e `e11`. Descartada porque, com horizonte de 20 anos, a portabilidade é o efeito menos novo (tem padrão e prazo já em 2026), enquanto morte, velhice e arquivo são os que mudam de natureza entre 2031 e 2046. A portabilidade ficou como `e4.1` e sinal fraco 4. Uma quinta raiz candidata — "o arquivo de vida autocustodiado" — foi absorvida em d3 (`e11`) e na convergência 2, para não passar de quatro raízes e porque não passa sozinha no critério "o que rompe" sem d3.

### 12.7 Material da turma usado e não usado

Usado com fonte aberta: budgero, kostos, accountant24, TaxHacker, rotki (varredura de inspiração); `@simplewebauthn` e better-auth (desenvolvimento); `argon2` e Shamir no experimento (sem fonte aberta própria — são componentes conhecidos, citados como escolha de desenho, não como evidência). Não usado como fonte: ver 12.4.
