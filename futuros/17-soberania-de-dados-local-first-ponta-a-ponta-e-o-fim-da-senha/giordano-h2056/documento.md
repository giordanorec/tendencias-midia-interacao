---
tema: "Soberania de dados: local-first, ponta-a-ponta e o fim da senha"
slug: soberania-de-dados-local-first-ponta-a-ponta-e-o-fim-da-senha
autor_login: grec
zona_de_interesse: Pessoas e dados
data: 2026-09-22
horizonte: 2056
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 15
efeitos_ordem_2: 21
efeitos_ordem_3: 21
tecnologias_citadas: [passkeys, WebAuthn, FIDO2, Credential Exchange Protocol (CXP), Credential Exchange Format (CXF), HPKE, Recovery Contacts, Legacy Contact, Inactive Account Manager, Advanced Data Protection, EUDI Wallet, gov.br, AT Protocol, PDS, DID PLC, RCS Universal Profile 3.0, MLS (RFC 9420), Signal SPQR, Triple Ratchet, ML-KEM, ML-DSA, COSE, P-256, Ed25519, Private Cloud Compute, WhatsApp Private Processing, TEE, AMD SEV-SNP, OHTTP, CRDT, Automerge, automerge-repo-keyhive (ARK), Keyhive, BeeKEM, Beelay, Yjs, hledger, Ollama, accountant24, wilson, TaxHacker, budgero, kostos, "@simplewebauthn", better-auth, argon2, Shamir Secret Sharing]
fontes: 30
confianca: media
experimento: "Trinta anos em quarenta minutos — um livro-caixa familiar local-first no navegador, com login só por passkey, sincronia cifrada por relé cego e guardiões de recuperação, que a turma atravessa em seis eventos simulados de 2026 a 2056: troca de ecossistema, perda do aparelho, briga e revogação, ordem judicial, morte do titular e reemissão pós-quântica"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Em 2026 a passkey já não é o que rompe: a FIDO estima 5 bilhões delas em uso e 75% dos consumidores pesquisados em dez países ativaram ao menos uma [1]. Ela entra aqui como contexto. Para 2056, trinta anos à frente, o mapa segue quatro rupturas que vêm depois dela. **A conta sem guardião:** a identidade vira chave que a pessoa carrega, move entre ecossistemas e deixa de herança; o balcão do "esqueci minha senha" dá lugar a guardiões, e o Estado disputa esse lugar com carteiras oficiais. **O servidor cego:** a cifra sai da mensagem e chega ao backup, ao documento e à IA que roda em enclave auditável; a publicidade perde o conteúdo e se refugia no metadado; o Estado troca o alvo do servidor para o aparelho. **Local-first:** o original mora no aparelho e o servidor vira relé; o software passa a sobreviver ao fornecedor, e a pessoa vira a única guardiã de trinta anos do próprio arquivo. **Cifra com prazo de validade:** especialistas dão de 51% a 70% de chance de um computador quântico capaz de quebrar a criptografia atual em quinze anos [6]; tudo o que foi cifrado sem camada pós-quântica ganha data provável de abertura, e toda passkey de curva elíptica terá de ser reemitida. O trabalho de quem projeta sai da tela de login e vai para o desenho da perda, da revogação, da herança e do tempo que um segredo dura.

## 2. O tema

**O que é.** Três rupturas na arquitetura do software pessoal que, juntas, tiram da empresa a posse do dado, da conta e da identidade: **local-first** (a cópia do aparelho é a original e sincroniza; o servidor deixa de ser a fonte da verdade [2]), **ponta-a-ponta** (quem guarda o dado não consegue lê-lo) e **o fim da senha** (autenticação por par de chaves guardado no aparelho, sem segredo compartilhado com o site). Num horizonte de trinta anos, entra uma quarta, que as três pressupõem sem dizer: que a cifra de hoje continuará valendo depois.

**Onde encosta em mídia e interação.** Cada uma das três rupturas apaga uma tela conhecida e cria outra que ainda não tem padrão: a recuperação de conta sem provedor, a colaboração sem servidor-árbitro (com versões divergentes e revogação), o consentimento para IA que roda sobre dado cifrado, o destino póstumo de cada dado, a "validade" de um segredo. São problemas de desenho de interação antes de serem problemas de engenharia: a criptografia já existe; o que falta é o gesto que uma pessoa comum entende.

**Por que um mapa de futuro, e não um estado da arte.** O estado da arte mostra adoção rápida da passkey e adoção lenta do local-first. O que interessa num horizonte de 2056 é o que só aparece com tempo: a primeira geração que viveu sem senha envelhece e morre; o arquivo pessoal de trinta anos precisa continuar abrindo; a cifra de 2026 encontra o computador quântico. O estudo de Öhman e Watson (Oxford) projetou entre 1,4 e 4,9 bilhões de perfis de mortos só no Facebook até 2100 [16]. A pergunta deste mapa é o que acontece com esse arquivo quando nenhum servidor consegue lê-lo — nem para entregá-lo à família.

**Premissas da rodada (briefing, sem entrevista).** Horizonte 2056; público: quem projeta mídia e interação; recorte global com nota sobre o Brasil; descartado de início: o que já é comum em produto de massa; nenhuma raiz suspeita; viés neutro; ideias óbvias a excluir: as que servem para qualquer tema. **Falseador declarado pelo autor:** evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia só melhora o que existe. O falseador foi aplicado e derrubou a passkey como raiz (seção 4). Profundidade: três ordens.

## 3. Onde isso está hoje

*Âncora feita com busca na web em 22/09/2026: 30 fontes abertas, listadas na seção 11.*

### 3.1 O que já existe e funciona

- **Passkeys em escala.** Relatório *State of Passkeys 2026* da FIDO Alliance (Sapio Research, abril de 2026; 11.000 consumidores em dez países): 90% conhecem, 75% ativaram em ao menos uma conta, 49% usam regularmente quando disponível; 5 bilhões de passkeys em uso; 68% das organizações (1.400 decisores) implantando para funcionários, mas só 28% totalmente sem senha e 57% ainda com métodos phishable como primário [1]. O relatório não trata de recuperação nem de perda de conta [1].
- **Brasil.** O app gov.br passou a aceitar passkey no lugar de senha e de reconhecimento facial dedicado, em fevereiro de 2026 [10].
- **Recuperação sem senha, feita pelo provedor.** Google lançou *Recovery Contacts* em outubro de 2025: pessoas de confiança confirmam um código para quem perdeu senha ou o aparelho da passkey; elas não ganham acesso à conta [19]. A Apple tem *Legacy Contact*, mas ele **não inclui** passkeys, senhas do iCloud Keychain nem dados de pagamento [15].
- **Portabilidade de credenciais.** CXF (formato) e CXP (protocolo, com HPKE) na FIDO; Apple entregou transferência no mesmo aparelho baseada em CXF no iOS/macOS 26; a portabilidade real depende de cada fornecedor implementar [14].
- **Cifra de ponta a ponta entre ecossistemas.** Em 11/05/2026, Apple e Google iniciaram em beta o RCS cifrado entre iPhone e Android, ligado por padrão, sobre MLS (Universal Profile 3.0) [7]. A EFF registra as lacunas: dependência de operadora, metadado ainda coletado, backup em nuvem cifrado só com Advanced Data Protection no iOS [25].
- **Pós-quântico já em produção em mensageria.** Signal anunciou em 02/10/2025 o SPQR (Triple Ratchet), híbrido com ML-KEM, motivado explicitamente por "gravar hoje, decifrar depois"; a chave de encapsulamento do ML-KEM tem 1.184 bytes contra 32 da curva elíptica [8].
- **IA sobre dado cifrado em enclave.** Apple Private Cloud Compute (junho de 2024), com cinco requisitos — computação sem estado, garantias aplicáveis, sem acesso privilegiado, não-direcionamento, transparência verificável com log de medições [24]. WhatsApp Private Processing (abril de 2025), sobre TEE, opcional, com OHTTP [29]. A auditoria da Trail of Bits (abril de 2026) achou 28 problemas, 8 de alta severidade, antes do lançamento: "todo insumo não medido... pode virar vulnerabilidade" [9].
- **CRDTs em produção.** Yjs: 6,1 milhões de downloads semanais no npm (15–21/09/2026) [30], com Proton Docs, Nextcloud, JupyterLab, Evernote entre usuários listados [28]. Bibliotecas de identidade no navegador também são massivas: `@simplewebauthn/server` 3,4 milhões/semana, `better-auth` 6,1 milhões, `argon2` 1,6 milhão [30].
- **Portabilidade por lei.** O Data Act europeu vale desde 12/09/2025; a partir de 12/01/2027 provedores não podem cobrar taxa de troca ou de saída [17].

### 3.2 O que existe e ainda não funciona (ou funciona só para quem sabe)

- **Local-first com posse de verdade.** Automerge, a biblioteca ligada ao ensaio fundador de 2019 [2], tem 63 mil downloads semanais — cerca de 1% do Yjs [30]. O Keyhive (Ink & Switch, 2024–2026) ainda é projeto de pesquisa: controle de acesso e cifra de ponta a ponta para dado local-first, com um mecanismo de acordo de chave de grupo concorrente (BeeKEM); o próprio projeto admite que distribuir chaves a membros concorrentes com eficiência "é um desafio" [3]. Em agosto de 2026 a API do ARK (`automerge-repo-keyhive`) ganhou documentação e um demo TodoMVC; há um protótipo com ATProto/Bluesky [4].
- **Identidade portátil sem provedor.** O AT Protocol permite levar a conta para outro PDS mantendo o DID, mas a própria documentação avisa: a migração "é potencialmente destrutiva... você pode ficar permanentemente sem acesso, e a Bluesky não poderá ajudar a recuperar" [18].
- **Carteira de identidade estatal.** Prazo europeu: 24/12/2026. Em setembro de 2026, 24 dos 27 Estados-membros não tinham carteira; a Itália é o único caso em escala (~8 milhões de usuários/mês); o piloto holandês teve 57 usuários; a Comissão reabriu regras de divulgação seletiva, não-rastreabilidade e cegueira do emissor [11].
- **CXP entre plataformas.** Ainda em rascunho em 2025, com padronização prevista para o início de 2026 [14].
- **Passkey pós-quântica.** Passkeys atuais usam P-256 ou Ed25519, vulneráveis ao algoritmo de Shor; a IANA incluiu algoritmos pós-quânticos no registro COSE em abril de 2025, mas autenticadores pós-quânticos ainda não chegaram [27].
- **Agente de IA local sobre finanças.** `accountant24`: dados em texto plano (hledger) na máquina, histórico em git, modelos locais via Ollama; 54 estrelas no GitHub [13]. É um sinal, não um mercado.

### 3.3 Quem constrói

Plataformas de sistema operacional (Apple, Google, Microsoft) e gerenciadores de credenciais (1Password, Bitwarden, Dashlane) na FIDO [14]; laboratórios independentes e comunidade aberta (Ink & Switch, Automerge, Yjs) [3][4][28]; mensageria cifrada (Signal, Meta/WhatsApp) [8][29]; Estados emissores de identidade (UE, Brasil via gov.br) [10][11]; e, do outro lado, Estados que pressionam a cifra: o Reino Unido, cuja ordem levou a Apple a retirar o ADP para novos usuários britânicos [5]; o Conselho da UE, com o Chat Control [12]; e, no Brasil, a ANPD, que em agosto de 2026 citou pela primeira vez a cifra de ponta a ponta como obstáculo à moderação, no caso do Discord [22], enquanto a ADI 5527 (bloqueio do WhatsApp e cifra) segue no STF desde 2020 com dois votos a favor da cifra [23].

### 3.4 Números de adoção

| O quê | Número | Fonte |
|---|---|---|
| Passkeys em uso | 5 bilhões (estimativa FIDO) | [1] |
| Consumidores com ao menos uma passkey | 75% (10 países) | [1] |
| Uso regular de passkey | 49% | [1] |
| Empresas totalmente sem senha | 28% | [1] |
| Yjs, downloads/semana | 6.123.679 | [30] |
| Automerge, downloads/semana | 62.827 | [30] |
| EUDI Wallet em escala | 1 de 27 países (Itália, ~8 mi/mês) | [11] |
| Self-hosting pessoal (PDS, servidores domésticos) | sem número encontrado | — |
| Usuários do gov.br com passkey | sem número encontrado | [10] |

## 4. As disrupções-raiz

### Candidatos recusados (critério do §2)

- **Passkey como raiz — recusada.** Adoção em maioria desde 2026 nos dez países pesquisados (75% ativaram, 49% usam regularmente [1]); dá para fazer com o que já é comum em produto de massa. É exatamente o falseador do briefing. Tratada como contexto na seção 3.
- **Cifra ponta-a-ponta de mensagens — recusada.** Padrão em mensageria de massa; o RCS cifrado entre iPhone e Android em 2026 [7] completa a maioria. Tratada como contexto.
- **HTTPS, 2FA por SMS, "login com Google", backup cifrado genérico — recusados.** Maduros, conforme o próprio enunciado do tema.
- **IA rodando no aparelho — deslocada.** É o tema 16. Entra aqui só como efeito da raiz 2 (a IA que roda sobre dado que o servidor não lê).

### Raiz 1 — A conta sem guardião: a identidade vira chave que a pessoa carrega, move e deixa de herança

1. **O que rompe.** A suposição de que, no limite, o provedor é o dono da conta e pode devolvê-la — o balcão do "esqueci minha senha", o suporte que reseta, o juiz que manda o provedor entregar. Com a chave no aparelho e portátil entre ecossistemas, não há segredo no servidor para resetar nem para entregar.
2. **Por que agora.** A passkey em maioria [1] fez da custódia de chave pelo usuário um hábito de massa; CXF/CXP tornam a chave portátil entre fornecedores [14]; o AT Protocol já separa identidade (DID) de servidor [18]; Estados emitem identidade em carteira no aparelho [10][11]. Há cinco anos, a passkey sincronizada não existia em escala.
3. **Onde está na difusão.** `produto de nicho` → `adoção precoce`: recuperação social existe (Recovery Contacts [19]), portabilidade existe no mesmo aparelho [14], migração de identidade existe com aviso de perda permanente [18].
4. **O que falta.** CXP entre plataformas implantado por todos; um padrão de recuperação social que não dependa do próprio provedor; herança de passkey (hoje fora do Legacy Contact [15]); reconhecimento jurídico da chave como bem; carteiras estatais com não-rastreabilidade [11].

### Raiz 2 — O servidor cego: quem guarda não consegue ler — nem para anunciar, nem para moderar, nem para treinar

1. **O que rompe.** O modelo em que o provedor lê o conteúdo para personalizar, anunciar, moderar e treinar modelos. Com cifra em backup, documento e IA em enclave, a matéria-prima do negócio baseado em dado sai do alcance de quem hospeda.
2. **Por que agora.** A cifra saiu da mensagem para o ecossistema (RCS/MLS por padrão entre plataformas, 2026 [7]); IA em enclave com transparência verificável ficou produto (PCC 2024 [24], WhatsApp 2025 [29]); o custo de o provedor ler ficou visível (banimentos automáticos por falsos positivos, 2021 e 2026 [20][21]).
3. **Onde está na difusão.** Mensagem: maduro (recusado). Backup, documento e IA sobre dado cifrado: `adoção precoce` — ADP é opcional e ausente no Reino Unido [5]; backups de RCS não cifrados por padrão [25].
4. **O que falta.** Cifra de backup por padrão; cifra ou mistura de metadado; auditoria independente de enclave em regime contínuo (a de 2026 achou 28 falhas [9]); resolução jurídica da varredura no cliente (UE, Reino Unido, Brasil [5][12][22][23]).

### Raiz 3 — Local-first: o original mora no aparelho; o servidor vira relé

1. **O que rompe.** O SaaS como custodiante — o software que só abre enquanto o fornecedor existe e a assinatura está paga. Com CRDT e relé cego, o fornecedor vira encanamento, e o encerramento do serviço deixa de apagar o trabalho (o ideal "Long Now" do ensaio de 2019 [2]).
2. **Por que agora.** CRDTs amadureceram como biblioteca (Yjs em escala [28][30]); o controle de acesso e a cifra para dado local-first saíram do papel como pesquisa com API (Keyhive/ARK [3][4]); a lei passou a exigir portabilidade e a proibir taxa de saída [17].
3. **Onde está na difusão.** `produto de nicho`. A sincronia é madura; a **posse** não: o Automerge tem ~1% dos downloads do Yjs [30], e o uso de Yjs é, em boa parte, colaboração mediada por servidor da empresa.
4. **O que falta.** Revogação de acesso compreensível sem árbitro central [3]; modelo de negócio que pague relé e backup; formatos de sincronia estáveis por décadas (a API do Automerge ainda muda entre versões [4]); interface para versões divergentes.

### Raiz 4 — Cifra com prazo de validade: a transição pós-quântica dentro de uma vida

1. **O que rompe.** A suposição, embutida nas outras três raízes, de que "cifrado" é "privado para sempre" e de que a chave emitida hoje vale enquanto o aparelho existir. Com probabilidade estimada entre 51% e 70% de um computador quântico criptograficamente relevante em quinze anos [6], todo dado cifrado copiado agora sem camada pós-quântica tem data provável de abertura [26], e toda passkey de curva elíptica terá de ser trocada [27].
2. **Por que agora.** O relatório de 2025 do Global Risk Institute traz as estimativas mais altas da série para dez anos (28% a 49%) [6]; Signal já migrou [8]; o COSE já tem algoritmos pós-quânticos registrados [27]. Há cinco anos o tema era de governo e banco; agora é de mensageiro de massa.
3. **Onde está na difusão.** Mensageria: `adoção precoce` (Signal [8]). Autenticação e arquivos pessoais: `laboratório` — por isso, `confianca: baixa` obrigatória em boa parte desta cadeia.
4. **O que falta.** Autenticadores pós-quânticos; reemissão em massa de credenciais; recifragem de arquivos pessoais guardados localmente (que, na raiz 3, são responsabilidade da pessoa); e o próprio computador quântico — que pode não chegar dentro do horizonte (seção 7).

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "A conta sem guardião: a identidade vira chave que a pessoa carrega, move e deixa de herança"
    efeitos:
      - id: e1
        ordem: 1
        efeito: O balcão do "esqueci minha senha" é substituído por rituais de recuperação com guardiões, aparelhos de reserva e códigos impressos que a própria pessoa precisa montar antes de precisar
        sinal: forte
        prazo: 2032
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Quem tem poucos laços fortes (idosos que moram sós, migrantes recentes) perde a conta com mais frequência, e o desenho da recuperação vira questão de equidade medida por serviços públicos
            sinal: fraco
            prazo: 2040
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Serviços públicos como o gov.br passam a oferecer um guardião institucional (cartório, agência de atendimento) como contato de recuperação padrão, reintroduzindo pelo Estado o intermediário que a passkey tinha tirado do provedor
                sinal: fraco
                prazo: 2046
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O golpe migra da senha para o guardião, e a engenharia social passa a mirar os contatos de recuperação e o momento da troca de aparelho
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Recuperar conta passa a incluir uma espera obrigatória de dias, e a demora deliberada vira padrão de interface aceito como preço da resistência a golpe
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Credenciais passam de um ecossistema para outro por protocolo cifrado, e trocar de iPhone para Android deixa de custar a identidade digital
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O gerenciador de credenciais vira o cofre da vida digital, guardando chaves, documentos e instruções de herança, e passa a ser disputado entre fabricantes de sistema operacional, gerenciadores independentes e Estados
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Quem guarda o cofre de chaves passa a ser regulado como custodiante com dever de continuidade por décadas, o que empurra esse mercado de volta para poucos custodiantes grandes
                sinal: fraco
                prazo: 2048
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A morte do titular vira o principal caso de perda de acesso, e a herança digital passa a ser desenhada no cadastro em vez de descoberta no luto
        sinal: medio
        prazo: 2040
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Sistemas operacionais passam a pedir uma etiqueta de destino póstumo por dado (passa aos herdeiros, morre comigo, abre em tantos anos), e escolher o destino vira gesto comum de interface
            sinal: fraco
            prazo: 2045
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Arquivos pessoais da geração 2020-2050 chegam ao futuro com lacunas deliberadas marcadas como morre comigo, e historiadores e famílias passam a trabalhar com memória seletiva por desenho
                sinal: fraco
                prazo: 2056
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Inventários passam a tratar a chave privada como bem, e o juiz deixa de ter a quem ordenar a entrega do acervo, porque nenhum provedor detém a chave
            sinal: fraco
            prazo: 2042
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: A perícia de extração do aparelho do falecido vira serviço padrão de inventário, e o aparelho físico do morto passa a valer mais que a conta
                sinal: fraco
                prazo: 2048
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Estados ocupam o lugar vago do guardião emitindo identidade como carteira oficial no aparelho, e a conta sem provedor vira conta com o Estado como emissor
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A disputa se desloca para as propriedades técnicas da carteira (divulgação seletiva, não-rastreabilidade, cegueira do emissor), e quem desenha a interface decide o quanto o cidadão vê do que está revelando a cada verificação
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Onde a carteira oficial é rastreável, prova de idade e de identidade vira pré-condição de acesso a boa parte da web, e o anonimato passa a exigir escolha ativa e custo
                sinal: fraco
                prazo: 2045
                confianca: baixa
  - disrupcao: "O servidor cego: quem guarda o dado não consegue lê-lo, nem para anunciar, nem para moderar, nem para treinar"
    efeitos:
      - id: e5
        ordem: 1
        efeito: A personalização que depende de ler o conteúdo perde a matéria-prima nos serviços cifrados, e a publicidade dirigida se refugia no metadado e no que o usuário declara
        sinal: medio
        prazo: 2036
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O metadado (quem, quando, com que frequência) vira o ativo disputado, e o passo técnico e regulatório seguinte é cifrar ou misturar o metadado por relés
            sinal: medio
            prazo: 2040
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O anúncio dirigido rende tão pouco em serviços cegos que eles passam a cobrar assinatura, e privacidade vira faixa de preço, com quem não paga ficando no serviço que lê
                sinal: fraco
                prazo: 2048
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: A IA que a pessoa quer usar sobre o próprio dado cifrado roda no aparelho ou em enclave com atestado remoto verificável, e o atestado vira requisito de produto
        sinal: forte
        prazo: 2032
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A confiança passa do contrato para a auditoria, e as firmas que medem enclaves e os logs de transparência viram o novo ponto único de falha
            sinal: medio
            prazo: 2038
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Uma falha de enclave em escala mostra que o servidor não era cego e reabre a preferência por processar só no aparelho, mesmo com modelo pior
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Agentes de IA locais passam a operar finanças, impostos e documentos domésticos sem enviar o dado, e o contador da família vira software que mora na casa
            sinal: medio
            prazo: 2040
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Bancos e fisco perdem a visão agregada que hoje obtêm por agregadores e passam a pedir ao agente do cidadão relatórios assinados em vez de dados brutos
                sinal: fraco
                prazo: 2050
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: O Estado troca o alvo do servidor para o aparelho, com varredura antes da cifra e ordens secretas a fabricantes, e a disputa sobre cifra vira disputa sobre o sistema operacional
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: A mesma conta passa a ter proteções diferentes conforme o país de residência, e onde a pessoa mora vira configuração de segurança
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Quem tem recursos passa a domiciliar as próprias chaves em jurisdições protetoras, e a privacidade forte vira privilégio de quem pode escolher jurisdição
                sinal: fraco
                prazo: 2050
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: No Brasil, o desfecho da ADI 5527 e a postura da ANPD definem se o país segue o modelo britânico ou o europeu, e a moderação em plataformas cifradas passa a depender de denúncia do participante e de sinal no aparelho
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A moderação de grupos cifrados passa a ser feita pelos próprios participantes com ferramentas no cliente, e o administrador de grupo vira papel com responsabilidade legal
                sinal: fraco
                prazo: 2045
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: A varredura central de acervos (hash e IA sobre fotos na nuvem) perde alcance nos acervos cifrados, e com ela somem tanto os banimentos por falso positivo quanto as detecções verdadeiras que ela fazia
        sinal: medio
        prazo: 2038
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O argumento de venda da cifra passa a ser que o provedor não pode expulsar a pessoa da própria memória, e o banimento automático de conta vira razão de mercado para o servidor cego
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Contratos de serviço passam a separar acesso ao serviço de acesso ao próprio acervo, e banir alguém deixa de poder tirar-lhe o arquivo
                sinal: fraco
                prazo: 2046
                confianca: baixa
  - disrupcao: "Local-first: o original mora no aparelho e o servidor vira relé"
    efeitos:
      - id: e9
        ordem: 1
        efeito: Aplicativos passam a abrir o arquivo depois que o fornecedor fecha, e o encerramento de um serviço deixa de apagar o trabalho de quem o usava
        sinal: medio
        prazo: 2038
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: A receita desliza da assinatura como condição de acesso para a cobrança por sincronia, relé e backup, e a empresa passa a vender o encanamento em vez da posse
            sinal: fraco
            prazo: 2042
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: O relé cego vira utilidade comoditizada como o DNS, e plataformas que viviam de reter o dado perdem essa trava e passam a competir só por interface e comunidade
                sinal: fraco
                prazo: 2050
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: A colaboração passa a ser desenhada em torno da divergência, com interfaces que mostram versões concorrentes, histórico e fusão em vez de um estado único ditado pelo servidor
        sinal: medio
        prazo: 2036
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Revogar acesso vira operação social difícil, porque tirar alguém de um documento não apaga o que ele já sincronizou, e o desenho do sair do grupo (ex-sócio, ex-cônjuge) ganha peso
            sinal: medio
            prazo: 2040
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: O direito ao apagamento da LGPD e do GDPR fica inexequível em dado replicado e cifrado, e o regulador redefine o dever como parar de re-sincronizar em vez de apagar
                sinal: fraco
                prazo: 2050
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: A pessoa vira a única guardiã de décadas do próprio arquivo, e backup, migração de formato e integridade deixam de ser problema do provedor
        sinal: medio
        prazo: 2040
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: A perda por falha doméstica (aparelho quebrado, disco morto, chave esquecida) substitui o vazamento em massa como forma principal de dano, e esse dano fica invisível às estatísticas
            sinal: fraco
            prazo: 2045
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Seguradoras e bibliotecas públicas passam a oferecer custódia cifrada de uma terceira réplica, criando um serviço de preservação doméstica de longo prazo
                sinal: fraco
                prazo: 2052
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: Arquivos gravados em formatos de sincronia de 2030 precisam abrir em 2056, e a estabilidade do formato de sincronia vira questão de patrimônio, como foi o PDF/A
            sinal: fraco
            prazo: 2050
            confianca: baixa
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: Arquivos nacionais passam a exigir formato de sincronia aberto e especificado para acervos doados, e bibliotecas sem especificação estável ficam fora do patrimônio
                sinal: fraco
                prazo: 2055
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: Plataformas com incentivo a manter o dado no servidor respondem com motores de sincronia proprietários que dão a velocidade do local-first sem a posse, esvaziando a ruptura
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Offline vira atributo de interface e não de propriedade, e a regulação de portabilidade passa a ser o único mecanismo que separa a sensação de posse da posse
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: A UE exige exportação em formato de sincronia utilizável, não só um arquivo de despejo, e o local-first entra pela porta da portabilidade obrigatória
                sinal: fraco
                prazo: 2045
                confianca: baixa
  - disrupcao: "Cifra com prazo de validade: a transição pós-quântica dentro de uma vida"
    efeitos:
      - id: e13
        ordem: 1
        efeito: Toda passkey e todo par de chaves de curva elíptica emitido até a transição precisa ser reemitido, e o mundo refaz a migração de credenciais pela segunda vez em duas décadas
        sinal: medio
        prazo: 2042
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: Contas de quem não faz a reemissão (mortos, idosos, aparelhos esquecidos na gaveta) ficam com chaves fracas, e a herança digital não resolvida passa a ter risco de invasão
            sinal: fraco
            prazo: 2048
            confianca: baixa
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: Provedores passam a congelar por padrão as contas que não migraram de cifra até um prazo, criando uma segunda onda de perda de acesso, agora por política criptográfica e não por esquecimento
                sinal: fraco
                prazo: 2052
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: Dado cifrado e copiado hoje sem camada pós-quântica ganha data provável de abertura, e cifrado deixa de significar privado para sempre
        sinal: medio
        prazo: 2045
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: Interfaces passam a informar a validade da confidencialidade de cada dado, e a pessoa escolhe cifra mais pesada para o que precisa durar
            sinal: fraco
            prazo: 2045
            confianca: baixa
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: Documentos sensíveis ganham vida útil programada, com o sistema apagando ou recifrando no vencimento, e esquecer vira função agendada
                sinal: fraco
                prazo: 2052
                confianca: baixa
          - id: e14.2
            ordem: 2
            efeito: Comunicações de 2010 a 2030 gravadas por terceiros começam a ser decifradas, e o passado cifrado vira fonte de escândalo e de história
            sinal: fraco
            prazo: 2050
            confianca: baixa
            efeitos:
              - id: e14.2.1
                ordem: 3
                efeito: Jornalistas e fontes passam a assumir que toda comunicação digital será legível em vinte anos e voltam a canais efêmeros por desenho, como o encontro presencial
                sinal: fraco
                prazo: 2055
                confianca: baixa
      - id: e15
        ordem: 1
        efeito: O custo da transição, com chaves dezenas de vezes maiores e reemissão em massa, freia o local-first em aparelhos baratos e redes de baixa banda, onde a descentralização seria mais útil
        sinal: medio
        prazo: 2040
        confianca: media
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: Só os fabricantes de sistema operacional conseguem fazer a migração pós-quântica silenciosa para bilhões de aparelhos, o que reforça a centralização que a raiz 1 desmontava
            sinal: medio
            prazo: 2044
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: Aparelhos fora do ciclo de atualização, comuns no Brasil, ficam criptograficamente obsoletos, e a exclusão digital ganha uma camada de segurança em que aparelho velho significa cifra velha
                sinal: fraco
                prazo: 2048
                confianca: baixa
```

### 5.1 Os mecanismos, raiz por raiz

**Raiz 1 — a conta sem guardião.**

- **e1** porque a passkey em maioria [1] elimina o segredo que o provedor resetava; o provedor responde com recuperação social (Recovery Contacts, outubro de 2025 [19]), e a AT Protocol exige chave de rotação guardada pelo usuário [18]. Sinal forte: três artefatos (Google [19], Apple Legacy Contact [15], documentação PDS [18]). **Classe de referência para o prazo:** a própria passkey, do padrão à maioria em cerca de sete anos com empurrão das plataformas (ver seção 8, item sobre a data de partida); a recuperação social está hoje no ponto em que a passkey sincronizada estava perto de 2022, daí 2032.
- **e1.1** porque o mecanismo de e1 transfere a prova de identidade para a rede de relações da pessoa: Recovery Contacts pede alguém que confirme um código [19]. Quem não tem essa rede fica sem o recurso. Teste da causa solta: sem a raiz, o provedor resetaria; a desigualdade vem da mudança de quem prova.
- **e1.1.1** porque o Estado que já adotou passkey (gov.br [10]) tem de atender quem não tem guardião; o caminho natural é pôr uma instituição no papel. Troca de ator (Estado, cartório). No Brasil, os cartórios já fazem prova de vida e reconhecimento de firma — a analogia é inferência do mapa, não fonte.
- **e1.2** porque, se o guardião é a chave-mestra, o atacante mira o guardião; é o deslocamento clássico do alvo. Sinal fraco: não achei caso documentado.
- **e1.2.1** porque a resposta de produto a golpes de recuperação é o atraso (tempo para o titular legítimo reagir). Troca de mecanismo (tempo como defesa).
- **e2** porque CXF/CXP transportam passkeys cifradas por HPKE entre fornecedores [14]; a Apple já entregou a transferência no mesmo aparelho, e a Dashlane no Android em fevereiro de 2026 (fonte da Dashlane não aberta; ver seção 12). Classe de referência: o MLS, do RFC (2023) ao padrão entre iPhone e Android (2026), cerca de três anos com duas plataformas empurrando [7]; daí 2030.
- **e2.1** porque, se a credencial é portátil, o valor sai de "onde está a conta" para "quem guarda o cofre"; gerenciadores já oferecem armazenamento de legado [15]. Troca de ator.
- **e2.1.1** porque um cofre com a vida de alguém por décadas atrai regulação de custódia (continuidade, auditoria), e o custo regulatório favorece os grandes. Retroação: freia a própria raiz.
- **e3** porque a passkey remove o segredo que a família anotava no caderno, e o Legacy Contact da Apple exclui passkeys [15]; o guia britânico de herança recomenda não resetar o aparelho do falecido porque é ele, e não a conta, que ainda abre as coisas [15]. Numa população que envelhece, quem ativou passkeys aos 50 em 2026 terá 80 em 2056; a projeção de Öhman e Watson [16] dá a escala. **Classe de referência:** a curva de mortos no Facebook — mais de 500 milhões de perfis de mortos até 2060, segundo a mesma projeção [16] — daí 2040 para o efeito ficar visível ao público do mapa.
- **e3.1** porque, se não há provedor que decida, a decisão tem de ser tomada pelo titular antes; a interface é o único lugar onde isso cabe. Troca de ator (sistema operacional como notário de vontade).
- **e3.1.1** porque o que foi marcado "morre comigo" num sistema cego é de fato irrecuperável — ao contrário de hoje, em que o provedor ainda guarda. Troca de ator (historiador, família).
- **e3.2** porque a ordem judicial hoje vai ao provedor; sem chave no provedor, não há destinatário. Troca de mecanismo (do mandado ao bem).
- **e3.2.1** porque o aparelho passa a ser o único portador da chave. Regra de parada: a partir daqui o efeito é e3.2 "mais adiante", por isso para no terceiro nível.
- **e4** porque o vazio deixado pelo provedor é ocupado por quem tem legitimidade para emitir identidade: a UE fixou prazo para a carteira [11] e o gov.br adotou passkey [10]. **Quem bloqueia a raiz 1:** o Estado emissor, com incentivo a ser o novo guardião. Classe de referência: a própria EUDI — com prazo legal, 24 de 27 países atrasam ao menos um ano, e o piloto holandês teve 57 usuários [11]; por isso 2032 e não 2027.
- **e4.1** porque a Comissão já reabriu as regras de divulgação seletiva, não-rastreabilidade e cegueira do emissor [11]; a disputa é técnica e passa pela tela de consentimento de cada verificação.
- **e4.1.1** porque uma carteira rastreável barateia a exigência de identidade; o que é barato de exigir tende a ser exigido. Troca de ator (sites e plataformas que exigem idade).

**Raiz 2 — o servidor cego.**

- **e5** porque o anúncio dirigido usa conteúdo; com conteúdo cifrado, restam metadado e declaração. A EFF registra que no RCS cifrado o metadado continua coletado [25], e o RCS de empresa ficou fora da cifra [7] — é para lá que o valor migra. Classe de referência: o RCS cifrado, cerca de três anos do padrão ao default [7]; mas a publicidade é mais lenta que a mensageria, então 2036.
- **e5.1** porque, se o metadado é o ativo, é ele que passa a ser protegido: o Private Processing do WhatsApp já roteia por OHTTP para esconder o IP do próprio operador [29].
- **e5.1.1** porque, sem conteúdo nem metadado, o anúncio rende menos e a assinatura cobre a diferença. Teste de especificidade: a frase depende do servidor cego; em serviço que lê, não haveria pressão.
- **e6** porque a IA útil precisa ler o dado, e o servidor cego proíbe a leitura; a saída é o enclave auditável ou o aparelho. Sinal forte: PCC [24], Private Processing [29], auditoria da Trail of Bits [9]. Alta confiança na 1ª ordem porque já é produto de duas das maiores plataformas.
- **e6.1** porque a garantia do enclave depende de medição correta: 28 falhas, 8 graves, numa auditoria pré-lançamento [9]. Quem mede vira o ponto de confiança. Troca de ator (auditor).
- **e6.1.1** porque uma falha de medição em escala anularia a promessa de e6. Retroação.
- **e6.2** porque, com o dado em casa e o modelo local, o agente pode operar sobre ele sem sair (accountant24: hledger, git, Ollama [13]); convergência com o tema 16. Classe de referência: o próprio local-first, sete anos do ensaio [2] ao nicho — daí 2040, e não 2034 (seção 7).
- **e6.2.1** porque bancos e fisco hoje leem via agregadores; se o dado mora num agente local, o pedido tem de ser feito ao agente. Troca de ator.
- **e7** porque o servidor cego tira do Estado o acesso que ele tinha no servidor, e ele o procura no aparelho: o Reino Unido emitiu ordem à Apple, que retirou o ADP para novos usuários britânicos e contestou a ordem em 2026 [5]; o Parlamento Europeu votou o Chat Control em 09/07/2026, com emendas excluindo serviços cifrados e negociação do regulamento permanente em aberto [12]; a ANPD citou a cifra como obstáculo à moderação [22]. **Quem bloqueia a raiz 2:** o Estado investigador. Sinal forte: três jurisdições.
- **e7.1** porque a Apple já oferece proteção diferente conforme o país (15 categorias cifradas por padrão no Reino Unido, sem o ADP [5]).
- **e7.1.1** porque, se jurisdição é configuração, quem pode escolhe. Troca de ator (pessoas com recursos, jurisdições que competem).
- **e7.2** porque a ADI 5527 está no STF desde 2020 com dois votos contra o enfraquecimento da cifra [23], e a ANPD agiu no sentido oposto em 2026 [22]; o país tem as duas posições dentro do Estado. Nota sobre o Brasil do recorte.
- **e7.2.1** porque, sem leitura no servidor, a moderação só pode vir de quem está no grupo. Troca de ator (administrador de grupo).
- **e8** porque a varredura de fotos na nuvem só funciona se o provedor lê: o caso do pai banido pelo Google em 2021 por fotos médicas do filho, mantido mesmo depois de a polícia afastar o crime [20], e a onda de falsos positivos de fevereiro de 2026, com efeito em cascata sobre banco, trabalho e câmeras de casa [21], são o custo; a detecção verdadeira que se perde é o benefício que o Chat Control tenta preservar [12]. O efeito lista os dois lados.
- **e8.1** porque o dano de [20][21] é perder o arquivo inteiro; um servidor que não lê não pode expulsar ninguém do próprio acervo.
- **e8.1.1** porque o Data Act já obriga a transferência em 30 dias e proíbe taxa de saída [17]; o passo seguinte é separar banimento de acesso ao acervo. Teste da causa solta: parte do efeito poderia vir só da regulação de portabilidade; ele fica aqui porque é o servidor cego que torna a separação tecnicamente natural. Confiança baixa por isso.

**Raiz 3 — local-first.**

- **e9** porque o ideal "Long Now" [2] torna o arquivo legível sem o fornecedor; o relé move ciphertext sem ler [4]. Classe de referência: o ensaio é de 2019 e em 2026 o Automerge tem ~1% dos downloads do Yjs [30] — sete anos e ainda nicho. Arquitetura sem empurrão de plataforma anda mais devagar que passkey; daí 2038.
- **e9.1** porque, se a posse não depende do fornecedor, a assinatura como condição de acesso perde força, e o que resta cobrar é o serviço de sincronia e backup.
- **e9.1.1** porque relé cego é serviço sem diferenciação de conteúdo. Troca de ator (plataformas intermediárias perdem a trava).
- **e10** porque, sem árbitro central, o CRDT preserva edições concorrentes; a interface precisa mostrá-las. Keyhive e o demo TodoMVC com acesso por documento [4] são os primeiros artefatos. Contraponto: o Linear usa arquitetura sequenciada por servidor (busca, não aberta; ver seção 12).
- **e10.1** porque o Keyhive precisa de acordo de chave de grupo concorrente para revogar, e o próprio projeto diz que é difícil [3]; o que já foi sincronizado não volta. Troca de mecanismo (do apagar ao cortar a sincronia futura).
- **e10.1.1** porque o dever de apagar pressupõe um controlador que apaga; em réplica cifrada distribuída não há. Troca de ator (ANPD, autoridades europeias).
- **e11** porque o local-first tira o backup do provedor e o põe no usuário; o accountant24 já sugere "empurrar para um repositório privado" como backup [13], e a migração de PDS pode trancar a pessoa para sempre [18].
- **e11.1** porque o dano deixa de ser concentrado (um vazamento, notícia) e fica disperso (mil discos). Troca de mecanismo.
- **e11.1.1** porque instituições de guarda longa (seguradora, biblioteca) já existem e podem guardar ciphertext sem ler. Troca de ator.
- **e11.2** porque o formato de sincronia muda: a versão 0.11.0 do Automerge retirou tipos da API pública [4]. Um arquivo de 2030 aberto em 2056 atravessa muitas mudanças dessas. Classe de referência: o PDF, que precisou de uma variante de arquivamento; sem fonte aberta nesta rodada (seção 8).
- **e11.2.1** porque arquivos nacionais precisam de formato especificado para aceitar acervo. Prazo 2055, dentro do horizonte.
- **e12** porque plataformas SaaS querem a experiência sem abrir mão da retenção; Yjs, a biblioteca mais usada, aparece majoritariamente em colaboração mediada por servidor [28][30]. **Quem bloqueia a raiz 3:** o SaaS com receita de retenção. Sinal forte e confiança alta: já é o estado de 2026.
- **e12.1** porque, se a sensação de offline não traz posse, só a lei separa: o Data Act [17].
- **e12.1.1** porque a portabilidade por "dump" já se mostrou insuficiente — a própria revista da nuvem nota que a lei proíbe a taxa, mas não desfaz o aprisionamento de formato [17]. Troca de mecanismo.

**Raiz 4 — cifra com prazo de validade.**

- **e13** porque passkeys usam P-256 ou Ed25519 [27], quebráveis por Shor; o COSE já registra algoritmos pós-quânticos [27]. **Classe de referência:** a própria migração para a passkey (cerca de sete anos com empurrão das plataformas); somada ao início provável da ameaça por volta de 2041 [6], 2042 é o ano em que a reemissão estaria visível.
- **e13.1** porque a reemissão exige um titular vivo e ativo; contas de mortos e aparelhos parados não migram. Convergência com e3.
- **e13.1.1** porque o provedor, diante de contas com chave fraca, prefere congelar. Retroação.
- **e14** porque o "gravar hoje, decifrar depois" é o motivo declarado do SPQR [8][26]; com 51% a 70% em quinze anos [6], parte do que foi cifrado antes da transição fica legível dentro do horizonte.
- **e14.1** porque, se o segredo tem prazo, a interface pode dizê-lo. Troca de mecanismo (do "cifrado sim/não" à duração).
- **e14.2** porque o dado de longa vida sensível — diplomático, saúde — é o alvo clássico do HNDL [26].
- **e15** porque as chaves pós-quânticas são dezenas de vezes maiores (1.184 bytes contra 32 [8]) e o Signal precisou de codificação por apagamento para caber nas mensagens [8]; relés de baixa banda e aparelhos antigos pagam mais. **Quem bloqueia a raiz 4 (e as outras):** a física do tamanho de chave, apropriada pelos fabricantes.
- **e15.1** porque migrações silenciosas exigem controle do ciclo de atualização — o Signal fez a sua sem ação do usuário [8], e a Apple entregou CXF no sistema [14]. Retroação sobre a raiz 1.
- **e15.1.1** porque no Brasil parte grande dos aparelhos Android sai do ciclo de atualização; é inferência do mapa, sem número aberto nesta rodada.

### 5.2 Cruzamentos

**Convergências (o achado mais valioso).**

1. **A morte encontra a cifra.** e3 (a morte vira o principal caso de perda), e13.1 (contas de mortos não reemitem a chave) e e11 (a pessoa é a única guardiã do arquivo) chegam ao mesmo ponto por três raízes: em 2056, o arquivo de uma pessoa morta pode estar ao mesmo tempo inacessível à família (raiz 1), ilegível ao provedor (raiz 2), guardado só num aparelho (raiz 3) e com cifra fraca para quem quiser forçar (raiz 4). Para quem projeta, o objeto de desenho é o mesmo: a vontade do titular sobre o destino do dado, registrada em vida.
2. **O Estado como novo guardião.** e1.1.1 (guardião institucional), e4 (carteira oficial) e e7 (varredura no aparelho) são três caminhos pelos quais o Estado reocupa o lugar que o provedor perdeu. No Brasil, o gov.br é o mesmo ator nos três.
3. **Centralização pela porta dos fundos.** e12 (motores de sincronia proprietários), e15.1 (só os fabricantes migram a cifra) e e2.1.1 (custódia regulada) empurram de volta para poucos atores. As raízes descentralizam a posse; os efeitos de segunda ordem recentralizam a infraestrutura.

**Retroalimentação.**

- e8.1 (banimento automático como argumento de venda) → reforça a raiz 2: cada caso como [20][21] aumenta a demanda por servidor cego.
- e6.1.1 (falha de enclave) → enfraquece e6 e reforça a raiz 3: a resposta a uma falha de enclave é processar em casa.
- e13.1.1 (congelamento por política criptográfica) → enfraquece a raiz 1: a pessoa perde a conta por uma decisão do provedor, que era o que a raiz queria impedir.

**Contradições.**

- **e9 × e12.** Ou o software passa a sobreviver ao fornecedor, ou o fornecedor oferece a mesma experiência sem entregar a posse. As duas coisas coexistem por segmento, mas não como regra geral. O que decide: se a portabilidade obrigatória (e12.1.1) exige formato de sincronia utilizável.
- **e1 × e4.** A conta sem guardião e a conta com o Estado como emissor. O que decide: a não-rastreabilidade da carteira (e4.1). Se ela for garantida, as duas convivem; se não, e4 absorve e1.
- **e7.2, dois desfechos.** O Brasil pode seguir o STF [23] ou a ANPD [22]. O mapa não resolve; o sinal é o julgamento da ADI 5527.

### 5.3 Cobertura STEEP e quem perde

- **Social:** e1.1, e3, e3.1.1, e7.2.1, e14.2.1. **Tecnológico:** e2, e6, e10, e11.2, e13, e15. **Econômico:** e5, e5.1.1, e9.1, e11.1.1, e12. **Ecológico:** vazio. A única ligação encontrada seria o custo energético de enclaves e de chaves maiores, sem fonte nem mecanismo que o tornem específico deste tema; fica registrado como vazio. **Político:** e4, e7, e7.1, e7.2, e10.1.1, e12.1.1.
- **Quem perde:** quem não tem rede de guardiões (e1.1); famílias de falecidos (e3); vítimas de conteúdo abusivo cuja detecção dependia da varredura central (e8); o suporte de conta das plataformas (e1); anunciantes que dependem de conteúdo (e5); SaaS de retenção (e9); quem tem aparelho velho (e15.1.1); quem escreveu em 2020 achando que era secreto para sempre (e14.2).

## 6. Sinais fracos e wildcards

### Sinais fracos

| Sinal | Onde foi visto | O que mudaria | Sinal observável de crescimento |
|---|---|---|---|
| Agente de IA local sobre finanças pessoais | `accountant24`, 54 estrelas, hledger + git + Ollama [13]; `wilson` e `TaxHacker` na varredura da turma (não abertos) | Aceleraria e6.2 e e6.2.1: o dado financeiro deixaria de passar por agregador | Um banco ou fisco que aceite relatório assinado por agente local em vez de extrato |
| Keyhive com ATProto | Protótipo citado no boletim do Automerge de agosto de 2026 [4] | Juntaria identidade portátil (raiz 1) e local-first cifrado (raiz 3) numa mesma pilha | Um cliente de rede social que guarde postagens privadas cifradas por Keyhive no PDS |
| A ANPD cita cifra como obstáculo à moderação | Caso Discord, agosto de 2026 [22] | Empurraria o Brasil para o lado britânico em e7.2 | Nova decisão da ANPD ou projeto de lei que cite a cifra de ponta a ponta |
| Carteira estatal com uso quase nulo | Piloto holandês com 57 usuários [11] | Enfraqueceria e4: o Estado não ocuparia o lugar do guardião tão cedo | Uso mensal de carteiras fora da Itália acima de 10% da população |
| Volta ao PDS da Bluesky permitida | Busca; página não aberta (redirecionamento) | Migração de identidade deixa de ser caminho sem volta, reduzindo o medo de e1 | Número de contas em PDS próprio divulgado pela Bluesky |

### Wildcards

1. **Lei que obrigue cifra de ponta a ponta ou local-first por padrão para dado sensível (saúde, finanças).**
   - *Mecanismo:* um vazamento de prontuários em escala nacional leva um legislador a exigir que o provedor não consiga ler dado de saúde, invertendo o ônus: ler vira exceção justificada.
   - *Por que é improvável:* a direção regulatória em 2026 é a oposta (Reino Unido [5], Conselho da UE [12], ANPD [22]).
   - *O que faria com o mapa:* e5, e6 e e8 ganhariam uma ordem de grandeza de velocidade; e7 perderia força.
   - *Sinal precoce:* um projeto de lei de saúde digital com a expressão "o operador não deve ter acesso ao conteúdo".
2. **Falha de enclave em escala antes de 2035.** Hoje é e6.1.1; como wildcard, a versão forte: a quebra de uma família de TEE (SEV-SNP, GPU confidencial) expõe anos de pedidos de IA "privados". *Mecanismo:* a auditoria de 2026 já achou insumos não medidos [9]. *Improvável porque* há auditoria e log de transparência [24]. *Efeito:* e6 cai para confiança baixa, e a raiz 3 acelera. *Sinal:* CVE com impacto em atestado de TEE de nuvem.
3. **O computador quântico não chega dentro do horizonte.** *Mecanismo:* barreiras de engenharia na correção de erros mantêm a escala abaixo do necessário até 2056. *Improvável porque* os especialistas dão 51% a 70% em quinze anos [6]. *Efeito:* a raiz 4 inteira vira preparação sem ameaça; sobram e13 e e15 como custo sem benefício visível — e o argumento de e14 fica disponível para o Estado e o mercado usarem como pretexto. *Sinal:* o relatório anual do Global Risk Institute baixando a estimativa de dez anos [6].
4. **Proibição de cifra sem depósito de chave num grande bloco.** *Mecanismo:* depois de um atentado planejado por mensageiro cifrado, um bloco exige chave em depósito para todo serviço com mais de N usuários. *Improvável porque* os mesmos fabricantes já recusaram publicamente [5]. *Efeito:* e7.1 e e7.1.1 viram o centro do mapa. *Sinal:* uma ordem como a britânica tornada pública e mantida em tribunal.

## 7. Contra o próprio mapa

### 7.1 Pré-mortem: é 2056 e este mapa estava errado. Por quê?

1. **A passkey sincronizada virou só uma senha melhor, e a conta continuou do provedor.** A passkey chegou à maioria [1] justamente porque Apple e Google a sincronizam e a recuperam. A conta "sem guardião" pode nunca acontecer para a maioria: o provedor continua sendo o guardião, agora com Recovery Contacts [19]. → e1 continua forte, porque é o provedor que o executa, mas e3.2 ("o juiz não tem a quem ordenar") pressupõe que o provedor não detém a chave, o que, com passkey sincronizada, é falso para a maioria. **Alteração:** e3.2 confianca alta → media.
2. **Local-first ficou nicho para sempre.** Sete anos depois do ensaio, a posse ainda é nicho [30]. Sem um empurrão de plataforma como o que a passkey teve, a raiz 3 pode não sair do nicho em trinta anos. → **Alteração:** e9 confianca alta → media; e11 prazo 2036 → 2040.
3. **A ameaça quântica chegou tarde, ou nunca.** A estimativa é de especialistas, com 26 respondentes [6]. → **Alteração:** e14 prazo 2041 → 2045 e e13.1 confianca media → baixa.

### 7.2 Extrapolação linear

- **"Pessoas deixam de pagar assinatura porque o software é delas"** (ex-e9.2) era só e9 "mais adiante", sem mecanismo novo. **Removido**, vai para a seção 12.
- **e5** ("a publicidade perde a matéria-prima") estava escrito como declínio linear. Ganhou o mecanismo não linear de migração para o metadado (e5.1), e a confiança caiu: **e5 confianca alta → media.**
- **e2** (portabilidade) é extrapolação do CXF, mas tem mecanismo novo (protocolo cifrado entre fornecedores) e troca de ator em e2.1. Mantido.

### 7.3 Velocidade de adoção

- **e6.2** (agentes locais sobre finanças) estava em 2034, com sinal de 54 estrelas [13]. A referência é o local-first: sete anos do ensaio ao nicho. **Alteração:** prazo 2034 → 2040 (+6 anos).
- **e4** (carteira estatal) estava em 2028, confiando no prazo legal. A referência é a própria EUDI: 24 de 27 países vão atrasar, e um piloto teve 57 usuários [11]. **Alteração:** prazo 2028 → 2032 (+4).
- **e3** (a morte como principal caso de perda) estava em 2034. A referência é demográfica: a coorte que adotou passkey adulta em 2022–2026 ainda não morre em massa em 2034. **Alteração:** prazo 2034 → 2040 (+6).
- **e11.2** (formato de sincronia como patrimônio) estava em 2040 com confiança média; a referência (o PDF) não foi aberta nesta rodada. **Alteração:** prazo 2040 → 2050, confianca media → baixa.

### 7.4 A raiz que não acontece

- **Sem a raiz 1** (a conta continua do provedor): sobram e2 (portabilidade, que o provedor pode oferecer), e4 (o Estado ainda emite carteira) e toda a raiz 2. O mapa perde e1.1, e3.2 e e1.1.1. Sobra bastante; não é raiz disfarçada.
- **Sem a raiz 2** (os provedores continuam lendo): a raiz 3 ainda funciona (o dado mora em casa), e a raiz 4 também (cifra local envelhece). Somem e5, e6.1, e8. Sobra bastante.
- **Sem a raiz 3** (local-first não sai do nicho): e11 e e10 somem; a raiz 2 continua dando o servidor cego com dado na nuvem. É a raiz mais frágil: parte de e9 e e11 depende também da raiz 2 (relé cego). Registro: **as raízes 2 e 3 compartilham o relé cego como mecanismo**, e o mapa poderia tê-las fundido; foram mantidas separadas porque rompem coisas diferentes (leitura × posse).
- **Sem a raiz 4** (sem quântico até 2056): ver wildcard 3. Sobra o custo (e15) sem o benefício.

### 7.5 Suposições escondidas

1. **Os fabricantes de sistema operacional continuam permitindo gerenciadores de credenciais de terceiros e apps de sincronia fora da loja.** Se não, e2 e e9 caem. → vira premissa declarada; nenhum efeito removido.
2. **A energia e o hardware de aparelho continuam baratos o bastante para rodar IA local** (convergência com o tema 16). Se não, e6.2 cai.
3. **Os padrões seguem abertos** (FIDO, IETF MLS, Automerge). Um padrão capturado vira o wildcard 4 por outra via.
4. **A pessoa quer a posse.** O mapa assume demanda por soberania; o dado de 2026 mostra demanda por conveniência (49% usam passkey quando disponível [1], não porque é soberana). Essa suposição sustenta a raiz 3 e está marcada como a mais frágil.

### 7.6 Viés do autor

O tema foi escolhido a partir de uma varredura da turma cheia de projetos locais e auto-hospedados (budgero, kostos, finvo). Isso puxa o mapa para a raiz 3 e para e6.2, cujo sinal (54 estrelas [13]) é fraco. **e6.2 está aqui em boa parte porque o tema é simpático ao autor.** A mesma simpatia explica o destaque dado a e8 (banimentos) e o tamanho menor dado ao lado de quem perde com o servidor cego (vítimas de abuso cuja detecção dependia da varredura) — incluído em e8, mas sem efeito próprio.

### 7.7 Calibração

Contagem depois das alterações: 1ª ordem — alta 4, média 11, baixa 0; 2ª ordem — alta 0, média 17, baixa 4; 3ª ordem — alta 0, média 0, baixa 21. A confiança cai com a ordem. O sinal cai com a ordem, mas não pela posição: os quatro "forte" da 1ª ordem têm três artefatos ou mais nomeados na prosa (e1, e6, e7, e12); os da 2ª com "medio" têm um ou dois.

### 7.8 Registro de alterações

| id | antes | depois | motivo |
|---|---|---|---|
| e3 | prazo 2034 | prazo 2040 | coorte da passkey não morre em massa antes; referência demográfica [16] |
| e3.2 | confianca alta | confianca media | passkey sincronizada deixa a chave com o provedor para a maioria (pré-mortem 1) |
| e4 | prazo 2028 | prazo 2032 | EUDI: 24 de 27 países atrasam, piloto com 57 usuários [11] |
| e1.1.1 | confianca media | confianca baixa | nenhum artefato de guardião institucional encontrado |
| e5 | confianca alta | confianca media | extrapolação linear; ganhou mecanismo pelo metadado |
| e6.2 | prazo 2034 | prazo 2040 | referência do local-first (sete anos, ainda nicho) [2][30] |
| e9 | confianca alta | confianca media | pré-mortem 2 |
| e9.2 | "pessoas deixam de pagar assinatura" | removido (seção 12) | é e9 mais adiante, sem mecanismo novo |
| e11 | prazo 2036 | prazo 2040 | pré-mortem 2 |
| e11.2 | prazo 2040, confianca media | prazo 2050, confianca baixa | referência (PDF/A) não aberta |
| e13.1 | confianca media | confianca baixa | pré-mortem 3 |
| e14 | prazo 2041 | prazo 2045 | 51–70% em quinze anos não é certeza; +4 anos para a decifração de acervos gravados |
| e2.2 | "Big Tech vira notário das credenciais" | removido (seção 12) | duplicava e2.1 (regra de parada) |

Cota por raiz: raiz 1 — e3, e3.2, e4, e1.1.1 alterados; raiz 2 — e5, e6.2; raiz 3 — e9, e9.2, e11, e11.2; raiz 4 — e13.1, e14. Cumprida.

## 8. O que a máquina errou

1. **Data de partida da classe de referência da passkey.** Usei "cerca de sete anos do padrão à maioria", com início no WebAuthn como recomendação W3C em 2019. Essa data é de memória: não abri a página da W3C nesta rodada. Os prazos de e1 e e13 dependem dela. Se o ponto de partida for 2022 (passkey sincronizada), a referência cai para cerca de quatro anos, e e13 poderia vir antes.
2. **O Chat Control teve relatos conflitantes.** Um resumo de busca (Pillitteri, não aberto) dizia que o Chat Control 1.0 "continua válido até 2028"; a página aberta (Hive Security [12]) diz que a derrogação expirou em 03/04/2026 e que a prorrogação depende do Conselho. Usei a página aberta. A diferença mostra que a mesma votação foi descrita de dois jeitos incompatíveis, e a fonte usada é um blog, não o Parlamento.
3. **Número desatualizado na fonte primária.** A página do Yjs diz "mais de 900 mil downloads semanais" [28]; a API do npm deu 6,1 milhões na semana de 15 a 21/09/2026 [30]. Usei a API. Se eu tivesse citado só a página do projeto, o número estaria errado por um fator de seis.
4. **Autoria possivelmente trocada.** Há dois repositórios `accountant24` (ckemper67 e machulav). Abri o de machulav [13]; o de ckemper67 aparece como fork nos resultados de busca. Não verifiquei qual é o original.
5. **Fonte substituta.** O artigo da Security Boulevard sobre passkey pós-quântica deu 403; abri o texto no blog do autor (guptadeepak.com [27]). A previsão de "padrões de passkey pós-quântica em dois a três anos" é opinião de fornecedor de autenticação, não de órgão de padronização.
6. **Nomes da turma não abertos.** `wilson`, `TaxHacker`, `budgero`, `kostos`, `finvo` vêm do enunciado da disciplina, não de fonte aberta nesta rodada. Estão em `tecnologias_citadas` porque aparecem no texto, mas nenhum efeito depende deles como evidência.
7. **Analogias sem fonte.** O cartório como guardião (e1.1.1), o PDF/A como referência de formato (e11.2) e "aparelhos Android fora do ciclo de atualização, comuns no Brasil" (e15.1.1) são inferências. Não abri número de aparelhos desatualizados no Brasil. Os três efeitos estão com confiança baixa ou tiveram a confiança rebaixada.
8. **Mecanismo plausível, mas fraco.** e5.1.1 (privacidade vira faixa de preço) soa inevitável e tem mecanismo econômico razoável, mas nenhum artefato de 2026 mostra serviço cego cobrando por não ler. Pode ser só uma boa frase.

## 9. Três cenários para 2056

**Provável — a posse é da pessoa, a infraestrutura é de poucos.** Em 2056 ninguém mais digita senha, e quase ninguém entende de onde vem a própria chave. A passkey foi reemitida uma vez, na transição pós-quântica dos anos 2040, de forma silenciosa, por Apple, Google e um punhado de fabricantes chineses; quem tinha aparelho fora do ciclo de atualização perdeu contas. O servidor não lê as mensagens nem os backups da maioria, mas lê o metadado, e a publicidade vive dele. A IA pessoal roda num enclave auditado ou no aparelho. Local-first é o padrão em ferramentas profissionais e em arquivos familiares de quem se importa, e continua minoria no resto: a maioria usa sincronia proprietária que parece offline. Cada país tem um regime de cifra diferente, e a proteção de uma conta depende de onde a pessoa mora. O caso mais comum de perda de acesso é a morte, e os sistemas operacionais pedem, no cadastro, o destino póstumo de cada pasta. *Sinal precoce:* CXP entre plataformas implantado por Apple e Google até 2028, e Recovery Contacts copiado pela Apple.

**Desejável — a posse é da pessoa, e a pessoa não está sozinha.** Em 2056 o arquivo de uma vida é local, cifrado e legível por décadas, porque o formato de sincronia foi padronizado e depositado em arquivos nacionais. Recuperar a conta é um ritual com guardiões escolhidos e uma instituição pública de reserva para quem não tem rede, com espera deliberada contra golpe. As carteiras de identidade estatais são não-rastreáveis por lei e por construção. A moderação de grupos cifrados é comunitária, com ferramentas no cliente e responsabilidade clara do administrador. A transição pós-quântica foi feita cedo, com cifra híbrida desde os anos 2020, e o passado cifrado permaneceu fechado. Para chegar aqui, seria preciso: padronizar formato de sincronia e herança de chave antes de 2035; fixar a não-rastreabilidade na EUDI e em equivalentes; e, no Brasil, decidir a ADI 5527 a favor da cifra e dar ao gov.br um papel de guardião de reserva, não de leitor. *Sinal precoce:* uma norma de arquivo nacional que aceite acervo em formato CRDT especificado.

**Indesejável — a chave é da pessoa, o acesso é do Estado, e o erro é dela.** Em 2056 a cifra é forte no servidor e inútil no aparelho: todo sistema operacional varre o conteúdo antes de cifrar, por lei, em quase todos os grandes blocos. A identidade é a carteira oficial, rastreável, exigida para ler notícia e para postar. A conta sem provedor significou, na prática, que quando a pessoa perde o aparelho não há quem ajude — e os mais pobres, os mais velhos e os que moram sós perdem mais. Acervos de mortos ficaram trancados para as famílias e, com a cifra de 2020 quebrada, abertos para quem os gravou. A privacidade forte existe, mas é um serviço pago em jurisdição distante. *Sinal precoce:* aprovação de varredura no cliente obrigatória para serviços cifrados na UE ou no Reino Unido antes de 2030, ou decisão do STF que permita bloqueio por impossibilidade técnica de entregar conteúdo.

## 10. O experimento

**O que é.** *Trinta anos em quarenta minutos.* Um livro-caixa familiar local-first que roda no navegador (inspirado em budgero, kostos e accountant24 da varredura da turma): o dado mora no IndexedDB do aparelho, em documento Automerge; o login é só por passkey (`@simplewebauthn`); a sincronia passa por um relé que só vê ciphertext (automerge-repo com Keyhive/ARK [4], ou, na falta dele, cifra no cliente com a chave derivada localmente); a recuperação é por guardiões com divisão de segredo (Shamir, 2 de 3). Cada pasta do livro-caixa tem uma etiqueta de destino póstumo (passa / morre comigo / abre em N anos). A turma atravessa, em duplas, seis eventos que um "relógio" do experimento dispara, de 2026 a 2056:

1. **2029 — troca de ecossistema:** migrar a passkey para outro gerenciador (CXF, onde houver; senão, reemissão).
2. **2033 — perda do aparelho:** recuperar a conta só com os guardiões (outros colegas).
3. **2038 — briga:** revogar o acesso do sócio ao livro-caixa comum, e verificar o que ele ainda tem.
4. **2042 — ordem judicial:** um colega no papel de juiz pede o extrato; o relé só tem ciphertext.
5. **2047 — morte do titular:** o herdeiro tenta abrir o que foi marcado "passa" e o que foi marcado "morre comigo".
6. **2051 — reemissão pós-quântica:** o sistema pede troca de chave; quem não faz, tem a conta congelada (e13.1.1).

**Que pergunta sobre o futuro ele ajuda a responder.** As rituais de recuperação, revogação e herança que a conta sem guardião exige (e1, e3.1, e10.1) são executáveis por pessoas comuns, sem suporte, no tempo de uma aula? E onde elas falham: no guardião, na revogação ou na herança?

**Que tecnologia emergente usa, e por que não dá com a madura.** Passkey como único fator, CRDT com cifra e controle de acesso local-first (Keyhive/ARK, em pesquisa [3][4]) e recuperação por divisão de segredo. Com a tecnologia madura — login com Google e banco no servidor — os seis eventos se resolvem com "fale com o suporte", que é exatamente a suposição que o mapa diz que se rompe. O experimento só pergunta alguma coisa se o suporte não existir.

**O que a turma faz ao testar em sala.** Duplas com três guardiões cada (outros colegas); cronômetro por evento; registro de onde cada dupla travou e do que ficou irrecuperável; no evento 3, contagem do que o sócio revogado ainda consegue ler offline; no evento 5, contagem do que o herdeiro conseguiu abrir contra o que o titular pretendia. Ao fim, a turma compara os números com e1.1, e3.1 e e10.1.

**O resultado que faria mudar de ideia.**
- Se **80% ou mais das duplas** completarem a recuperação por guardiões (evento 2) e a herança (evento 5) sem ajuda e em menos de cinco minutos cada, e1.1 (desigualdade de recuperação) e e3 (a morte como principal caso de perda) perdem força: rebaixo e1.1 para confiança baixa e empurro e3 para depois de 2045.
- Se, no evento 3, a turma **não perceber** que o sócio revogado mantém o que já sincronizou, e10.1 sobe de confiança, e o experimento vira evidência de que a revogação sem árbitro precisa de interface própria.
- Se o evento 4 terminar com o "juiz" obtendo o dado pelo aparelho de um guardião, e3.2 cai: o juiz não fica sem destinatário, só muda de destinatário.

## 11. Fontes

1. FIDO Alliance — *FIDO Alliance Reports Accelerating Global Passkey Adoption on World Passkey Day 2026* (release da Business Wire, 06/05/2026, reproduzido no Yahoo Finance). https://finance.yahoo.com/sectors/technology/articles/fido-alliance-reports-accelerating-global-130000169.html — A página original no site da FIDO foi aberta nesta rodada, mas responde 403 a scripts; o endereço dela está na seção 12.3. Sustenta: 5 bi de passkeys, 75%/49%/90%, 28% das empresas sem senha, método Sapio. Confiabilidade: alta nos números da pesquisa; a FIDO tem interesse em mostrar adoção.
2. Kleppmann, Wiggins, van Hardenberg, McGranaghan — *Local-first software* (Ink & Switch, 2019). https://www.inkandswitch.com/essay/local-first/ — Sustenta: os sete ideais, incluindo "Long Now" e posse. Confiabilidade: alta como texto fundador; é manifesto, não medição.
3. Ink & Switch — *Keyhive*. https://www.inkandswitch.com/project/keyhive/ — Sustenta: controle de acesso e cifra para local-first, BeeKEM, estado de pesquisa 2024–2026, dificuldade de distribuir chaves. Confiabilidade: alta (fonte primária do laboratório).
4. Automerge — *This Month in Automerge: August '26*. https://automerge.org/blog/2026-august/ — Sustenta: Automerge 3.4.1/0.11.0, mudança de API, documentação do ARK, demo TodoMVC, protótipo com ATProto. Confiabilidade: alta (projeto).
5. Apple — *Apple can no longer offer Advanced Data Protection in the United Kingdom to new users*. https://support.apple.com/en-us/122234 — Sustenta: retirada do ADP no Reino Unido, 15 categorias cifradas por padrão, iMessage e FaceTime cifrados. Confiabilidade: alta (primária).
6. Global Risk Institute — *Quantum Threat Timeline Report 2025* (publicado em 09/03/2026). https://globalriskinstitute.org/publication/quantum-threat-timeline-report-2025b/ — Sustenta: 28–49% em dez anos, 51–70% em quinze, 26 especialistas. Confiabilidade: média-alta; amostra pequena de especialistas.
7. Apple Newsroom — *End-to-end encrypted RCS messaging begins rolling out today in beta* (11/05/2026). https://www.apple.com/newsroom/2026/05/end-to-end-encrypted-rcs-messaging-begins-rolling-out-today-in-beta/ — Sustenta: RCS cifrado por padrão entre iPhone e Android. Confiabilidade: alta (primária).
8. Signal — *Signal Protocol and Post-Quantum Ratchets* (02/10/2025). https://signal.org/blog/spqr/ — Sustenta: SPQR, Triple Ratchet, ML-KEM, tamanhos de chave, motivação HNDL, rollout silencioso. Confiabilidade: alta (primária).
9. Trail of Bits — *What we learned about TEE security from auditing WhatsApp's Private Inference* (07/04/2026). https://blog.trailofbits.com/2026/04/07/what-we-learned-about-tee-security-from-auditing-whatsapps-private-inference/ — Sustenta: 28 achados, 8 graves, lição sobre insumos não medidos. Confiabilidade: alta (auditor independente contratado).
10. UAI — *Nova atualização do Gov.br não vai mais pedir reconhecimento facial nem senha* (19/02/2026). https://www.uai.com.br/economia/2026/02/19/nova-atualizacao-do-gov-br-nao-vai-mais-pedir-reconhecimento-facial-nem-senha-para-acessar-o-aplicativo/ — Sustenta: passkey no gov.br. Confiabilidade: média (imprensa regional; sem número de usuários).
11. Brussels Signal — *EU digital identity wallet stalls in 24 member states as Brussels reopens its privacy rulebook* (09/2026). https://brusselssignal.eu/2026/09/eu-digital-identity-wallet-stalls-in-24-member-states-as-brussels-reopens-its-privacy-rulebook/ — Sustenta: 24 de 27 atrasados, Itália ~8 mi/mês, piloto holandês com 57 usuários, disputas de privacidade. Confiabilidade: média (veículo com linha editorial própria; números a confirmar em fonte oficial).
12. Hive Security — *EU Chat Control 2026: The Vote That Passed and Failed at the Same Time*. https://hivesecurity.gitlab.io/blog/eu-chat-control-2026-vote-against-majority/ — Sustenta: votação de 09/07/2026, emendas excluindo cifra, estado do regulamento permanente. Confiabilidade: média-baixa (blog; relatos conflitantes, ver seção 8).
13. machulav — *accountant24* (GitHub). https://github.com/machulav/accountant24 — Sustenta: agente local de finanças, hledger, git, Ollama, 54 estrelas. Confiabilidade: alta como artefato; autoria original não verificada.
14. Corbado — *WebAuthn Credential Exchange Protocol (CXP) & Format (CXF)*. https://www.corbado.com/blog/credential-exchange-protocol-cxp-credential-exchange-format-cxf — Sustenta: estado de CXF/CXP, HPKE, Apple iOS 26, implementadores. Confiabilidade: média (fornecedor de passkeys).
15. Passage — *What to do with passkeys and biometric logins after someone dies*. https://getpassage.co.uk/blog/post/what-to-do-with-passkeys-and-biometric-logins-after-someone-dies — Sustenta: Legacy Contact exclui passkeys; aparelho como portador; Google Inactive Account Manager. Confiabilidade: média (serviço comercial de herança digital).
16. Öhman & Watson — *Are the Dead Taking Over Facebook?* (Big Data & Society, 2019). https://arxiv.org/abs/1811.03416 — Sustenta: 1,4–4,9 bi de perfis de mortos até 2100. Confiabilidade: alta (revisada por pares; projeção com premissas declaradas).
17. Cloudmagazin — *EU Data Act makes cloud portability mandatory* (15/07/2026). https://www.cloudmagazin.com/en/2026/07/15/eu-data-act-makes-cloud-portability-mandatory — Sustenta: fim das taxas de troca em 12/01/2027, limites da portabilidade por formato. Confiabilidade: média (revista especializada).
18. Bluesky — *ACCOUNT_MIGRATION.md* (repositório pds). https://github.com/bluesky-social/pds/blob/main/ACCOUNT_MIGRATION.md — Sustenta: o que migra, chave de rotação, aviso de perda permanente. Confiabilidade: alta (primária).
19. 9to5Google — *Google Accounts now support setting up Recovery Contacts* (15/10/2025). https://9to5google.com/2025/10/15/google-account-recovery-contacts/ — Sustenta: recuperação social para passkey perdida. Confiabilidade: média-alta (imprensa especializada, relata anúncio oficial).
20. 9to5Google — *Google locked parent's account over medical photos of their child* (22/08/2022). https://9to5google.com/2022/08/22/google-locked-account-medical-photo-story/ — Sustenta: banimento por falso positivo, conta não restabelecida. Confiabilidade: média-alta (relata reportagem do NYT).
21. PiunikaWeb — *Google Photos users hit by wave of false CSAM account bans* (03/02/2026). https://piunikaweb.com/2026/02/03/google-photos-false-csam-flags-users-locked-out/ — Sustenta: onda de 2026, efeito em cascata sobre serviços ligados. Confiabilidade: baixa-média (agregador de relatos de usuários; sem número total).
22. CNN Brasil — *Discord: ANPD cria precedente perigoso sobre criptografia, diz especialista* (13/08/2026). https://www.cnnbrasil.com.br/politica/discord-anpd-cria-precedente-perigoso-sobre-criptografia-diz-especialista/ — Sustenta: ANPD cita cifra ponta a ponta como obstáculo à moderação. Confiabilidade: média-alta (imprensa nacional, com especialista nomeado).
23. Conjur — *Privacidade codificada: STF, Reino Unido e guerra silenciosa contra criptografia* (12/05/2025). https://www.conjur.com.br/2025-mai-12/privacidade-codificada-stf-reino-unido-e-guerra-silenciosa-contra-criptografia/ — Sustenta: ADI 5527 desde 2020, votos de Rosa Weber e Fachin. Confiabilidade: média-alta (imprensa jurídica; artigo de opinião).
24. Apple Security Research — *Private Cloud Compute: A new frontier for AI privacy in the cloud* (10/06/2024). https://security.apple.com/blog/private-cloud-compute/ — Sustenta: cinco requisitos, log de transparência. Confiabilidade: alta como descrição do desenho; é o fabricante.
25. EFF — *Victory! End-to-End Encrypted RCS Comes to Apple and Android Chats* (12/05/2026). https://www.eff.org/deeplinks/2026/05/victory-end-end-encrypted-rcs-comes-apple-and-android-chats — Sustenta: lacunas de metadado, operadora e backup. Confiabilidade: alta (organização de direitos digitais; posição declarada).
26. Wikipedia — *Harvest now, decrypt later*. https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later — Sustenta: definição e dados de longa vida sensíveis. Confiabilidade: média (enciclopédia; usada só para definição).
27. Deepak Gupta — *Post-Quantum Cryptography for Authentication: The Enterprise Migration Guide 2026*. https://guptadeepak.com/post-quantum-cryptography-for-authentication-the-enterprise-migration-guide-2026/ — Sustenta: P-256/Ed25519 vulneráveis a Shor; COSE com algoritmos PQ em abril de 2025. Confiabilidade: média (fornecedor de autenticação; previsões são opinião).
28. Yjs — página do projeto. https://yjs.dev/ — Sustenta: lista de usuários (Proton Docs, Nextcloud, JupyterLab, Evernote). Confiabilidade: média (autodeclaração; número de downloads desatualizado).
29. Meta Engineering — *Building Private Processing for AI tools on WhatsApp* (29/04/2025). https://engineering.fb.com/2025/04/29/security/whatsapp-private-processing-ai-tools/ — Sustenta: TEE, OHTTP, opcionalidade. Confiabilidade: alta como desenho declarado; é o fabricante.
30. npm — API de downloads, semana de 15 a 21/09/2026. https://api.npmjs.org/downloads/point/last-week/yjs · https://api.npmjs.org/downloads/point/last-week/@automerge/automerge · https://api.npmjs.org/downloads/point/last-week/@simplewebauthn/server · https://api.npmjs.org/downloads/point/last-week/better-auth · https://api.npmjs.org/downloads/point/last-week/argon2 — Sustenta: Yjs 6.123.679; Automerge 62.827; @simplewebauthn/server 3.354.029; better-auth 6.065.548; argon2 1.582.960. Confiabilidade: alta como contagem; download não é usuário (CI e dependências transitivas inflam).

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

Comando: `python3 futurizacao-giordano/references/verificar.py tendencia-soberania-de-dados-local-first-ponta-a-ponta-e-o-fim-da-senha.md --links` (22/09/2026, segunda execução; a primeira acusou 33/34 links porque a página da FIDO responde 403 a scripts, e a fonte 1 foi trocada pela reprodução do mesmo release — ver 12.3).

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 15 (frontmatter diz 15)
efeitos ordem 2: 21 (frontmatter diz 21)
efeitos ordem 3: 21 (frontmatter diz 21)
prazo > horizonte (2056) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 4 · media 11 · baixa 0
confiança ordem 2: alta 0 · media 17 · baixa 4
confiança ordem 3: alta 0 · media 0 · baixa 21
links da seção 11: 34/34 respondem (frontmatter diz fontes: 30)
RESULTADO: ok
```

Nota: são 34 links para 30 fontes porque a fonte 30 (API do npm) reúne cinco endereços.

### 12.2 Premissas assumidas (o que o briefing não cobria)

- Data da rodada: 22/09/2026, pelo relógio da máquina.
- "Maioria" para efeito do critério do §2 foi lida sobre os dez países da pesquisa FIDO [1]; não há número global nem brasileiro. Aplicar a régua a esses dez países pode superestimar a maturidade no Brasil.
- Profundidade de três ordens; cenários sem viés, com um de cada lado.
- `publico_ok: false` (padrão do formato).

### 12.3 Buscas feitas (em inglês e português) e o que deram

1. `FIDO Alliance passkey adoption 2026 report consumers` → relatório de 2026 [1]. Página original aberta via WebFetch: `fidoalliance.org/fido-alliance-reports-accelerating-global-passkey-adoption-on-world-passkey-day-2026/`. Ela responde 403 ao `verificar.py` (urllib), então a seção 11 usa a reprodução do mesmo release no Yahoo Finance, aberta e conferida número a número.
2. `local-first software 2026 Automerge Keyhive sync server` → Keyhive [3], Automerge [4].
3. `Credential Exchange Protocol FIDO passkey portability 2026` → Corbado [14]; Dashlane e 1Password não abertos.
4. `UK Apple Advanced Data Protection withdrawn encryption backdoor 2026` → Apple [5]; 9to5Mac (17/09/2026) e CNBC (04/08/2026) sobre a segunda contestação, não abertos.
5. `EU chat control client-side scanning 2026 regulation status` → Hive Security [12]; Pillitteri, Breyer, fightchatcontrol não abertos (relato conflitante, seção 8).
6. `quantum threat timeline report 2025 expert survey` → GRI [6].
7. `gov.br passkey chave de acesso 2026` → UAI [10]; página do Tesouro (SIAFI com passkey) não aberta.
8. `EUDI wallet 2026 member states deadline launch December` → Brussels Signal [11].
9. `Signal SPQR triple ratchet post-quantum 2025` → Signal [8].
10. `Apple Private Cloud Compute verifiable transparency security research` → Apple [24]; o resultado "PCC moves to Google Cloud" (privatemode.ai) não foi aberto e não é usado.
11. `passkeys digital legacy death inheritance recovery problem research` → Passage [15]; Vault12 e AdvisorGuide não abertos.
12. `Bluesky AT Protocol PDS self-hosting account migration users 2026` → ACCOUNT_MIGRATION.md [18]; o post sobre federação de self-hosters redirecionou para bsky.network e não foi aberto.
13. `RCS end-to-end encryption MLS Apple Google iPhone Android 2026` → Apple [7], EFF [25].
14. `EU Data Act September 2025 cloud switching portability` → Cloudmagazin [17].
15. `github accountant24 local-first AI agent finance` → [13].
16. `Meta WhatsApp Private Processing TEE AI encrypted messages` → Meta [29], Trail of Bits [9].
17. `"harvest now decrypt later" passkeys ECDSA P-256 post-quantum WebAuthn ML-DSA` → Wikipedia [26]; Security Boulevard deu 403; aberto o espelho [27].
18. `Öhman Watson dead Facebook profiles outnumber living 2070 study` → arXiv [16].
19. `Google account disabled false positive CSAM father photo` → 9to5Google [20], PiunikaWeb [21].
20. `ANPD LGPD criptografia ponta a ponta 2026 Brasil STF WhatsApp bloqueio` → CNN Brasil [22], Conjur [23]; a notícia do portal do STF falhou por certificado ("unable to verify the first certificate") e não entra; a nota sobre "75 fiscalizações da ANPD 2026–2027" veio de um post do TabNews não aberto e não é usada.
21. `Yjs npm weekly downloads local-first adoption 2026 Linear Figma sync engine` → yjs.dev [28]; afirmações sobre o motor de sincronia do Linear e do Figma vieram de resumos de busca não abertos: usadas só como contraponto, sem citação.
22. `Recovery Contacts Google account 2025 passkey recovery trusted contacts` → [19].
23. Consulta direta à API do npm para cinco pacotes → [30].

**Buscas que não deram em nada citável:** número de servidores pessoais auto-hospedados (r/selfhosted, PDS próprios) — nenhum número encontrado; usuários de passkey no gov.br — nenhum número; aparelhos Android fora de atualização no Brasil — não buscado nesta rodada (lacuna declarada).

### 12.4 Efeitos cortados

- **ex-e9.2 — "Pessoas deixam de pagar assinatura porque o software é delas."** Removido no §6: é e9 mais adiante.
- **ex-e2.2 — "Big Tech vira notário das credenciais."** Removido: duplicava e2.1.
- **"Surge a profissão de gestor de herança digital."** Nunca entrou: efeito proibido sem ator e mecanismo específicos; a parte com mecanismo virou e3.2.1 (perícia de aparelho no inventário).
- **"Reguladores criam lei de herança digital."** Nunca entrou pela mesma regra; a versão com ator e mecanismo está em e3.2 (o juiz sem destinatário).
- **"A moderação de conteúdo acaba."** Descartado no teste de especificidade: exagero; a versão defensável é e7.2.1 (moderação pelos participantes).
- **"Passkeys substituem totalmente senhas até 2030."** Descartado: é a raiz recusada (maduro), não efeito.
- **Efeito ecológico (custo energético de enclave e de chave pós-quântica).** Sem fonte e sem mecanismo específico; STEEP ecológico fica vazio.

### 12.5 Candidatos a raiz considerados e não usados

- **Identidade de agentes de IA** — fronteira com o tema 2; fora.
- **Modelo rodando localmente** — tema 16; entra só como convergência em e6.2.
- **Fusão das raízes 2 e 3 numa só ("relé cego")** — considerada no §6.4; mantidas separadas porque uma rompe a leitura e a outra rompe a posse.

### 12.6 Rodadas descartadas

Nenhuma rodada completa foi descartada. A primeira versão da roda tinha 4 efeitos de 1ª ordem com confiança alta e mais 3 (e3.2, e5, e9) que o §6 rebaixou; os valores anteriores estão na tabela da seção 7.8.
