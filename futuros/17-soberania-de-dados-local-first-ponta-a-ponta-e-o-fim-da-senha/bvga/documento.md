---
tema: "Soberania de dados: local-first, ponta-a-ponta e o fim da senha"
slug: soberania-de-dados-local-first-ponta-a-ponta-e-o-fim-da-senha
autor_login: bvga
zona_de_interesse: "Pessoas e dados"
data: 2026-09-17
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 8
efeitos_ordem_2: 8
efeitos_ordem_3: 8
tecnologias_citadas: [WebAuthn, passkeys, FIDO2, CXP, CXF, CRDT, Automerge, Beelay, Keyhive, Yjs, PGlite, "Digital Credentials API", OpenID4VP, mdoc, mDL, "EUDI Wallet", "criptografia ponta-a-ponta", "criptografia no cliente", "sync engine", PowerSync, ElectricSQL, "Trusted Execution Environment", "confidential computing", "Private Cloud Compute", self-hosting]
fontes: 16
confianca: media
experimento: "Caderno Cego"
skill_usada: futurizacao-bvga
publico_ok: false
---

## 1. Resumo

O tema chega embrulhado numa frase que não se sustenta: "o fim da senha". A senha acabando é a parte **madura** desta história, não a parte disruptiva. Em 25 de agosto de 2026 o WebAuthn Level 3 virou Recomendação do W3C; a FIDO Alliance informa 5 bilhões de passkeys em uso e 75% das pessoas com pelo menos uma passkey ativada. Pela régua desta disciplina — e pelo critério que o próprio recorte definiu (adoção além da maioria inicial) —, passkey é **antecedente maduro**. Quem projeta mídia e interação já não decide se usa; decide o que fazer com o que sobrou de fora: a recuperação, a herança, o suporte.

O que ainda rompe está em três lugares mais discretos:

1. **O servidor cego por padrão** — não a criptografia em si, que é velha, mas a arquitetura em que uma aplicação *colaborativa, com times, papéis e permissões* funciona sem que o servidor leia nada. Essa peça — controle de acesso criptográfico em cima de CRDT — ainda é pré-alfa: o Keyhive, do Ink & Switch, traz em letras maiúsculas "DO NOT use this release in production applications".
2. **A credencial que se muda de casa** — CXP/CXF, o par de especificações que permite exportar passkeys de um cofre para outro sem que ninguém no meio leia. O CXF já é padrão proposto e a Apple embarcou transferência no mesmo dispositivo; o CXP, que é a parte que atravessa ecossistemas, ainda é *Working Draft* com aviso explícito de que não serve de base para implementação.
3. **A credencial verificável apresentada pelo aparelho** — a Digital Credentials API, ligada por baixo às carteiras de identidade estatais, que troca "criar conta" por "provar um atributo". Está no Chrome desde a versão 141, e a União Europeia tem prazo legal de 24 de dezembro de 2026 para a carteira existir em todo Estado-membro.

A roda que sai daí não é a roda que o entusiasmo esperava. A soberania de dados, levada a sério, **retira do produto a matéria-prima com que ele se corrige**: sem log de conteúdo, sem A/B test sobre o que a pessoa escreveu, sem personalização de servidor. E há um contrassinal grande demais para se varrer para debaixo do tapete: em 2025 a Apple desligou o Advanced Data Protection no Reino Unido em vez de abrir uma porta, e em setembro de 2026 ainda não o religou. Criptografia ponta-a-ponta não é só um problema de engenharia — é um problema com jurisdição.

Confiança geral do mapa: **média**. As três raízes têm evidência documental verificável de existência e de estágio; a cadeia causal de segunda e terceira ordem é, em boa parte, hipótese com mecanismo declarado — e está marcada como tal.

## 2. O tema

**A entrevista aconteceu antes da análise.** Os parâmetros foram fixados na abertura desta rodada e confirmados aqui antes de qualquer pesquisa:

| Campo | Valor |
|---|---|
| Tema | Soberania de dados: local-first, ponta-a-ponta e o fim da senha (tema 17 de 19; família "Pessoas e dados") |
| Horizonte | 2031 |
| Público | Quem projeta mídia e interação |
| Recorte geográfico | Global, com uma nota sobre o Brasil |
| Descartes | O que já é comum em produto de massa (régua da disciplina). Nenhuma outra exclusão. Ideias genéricas que serviriam a qualquer tema também ficam de fora |
| Viés desejado | Neutro; nenhuma disrupção suspeita a priori — descobrir |
| Critério de mudança de ideia | Evidência de adoção além da maioria inicial (Rogers), ou de que a tecnologia apenas melhora o que existe sem romper nada |
| Profundidade | Três ordens |
| Modo | A partir de uma inovação/tema, não de um setor |

Não houve contradição entre os campos. Houve uma consequência imediata e incômoda do critério de mudança de ideia, que este mapa aceita: **ele derruba a peça mais famosa do tema**. Se 75% das pessoas já ativaram uma passkey e 90% sabem o que é, a autenticação sem senha passou da maioria inicial. Ela entra no mapa como infraestrutura, não como centro.

O objeto aqui, seguindo a fronteira que a disciplina traçou, é **a arquitetura de dado e identidade da pessoa**. O modelo de IA rodando localmente é o tema 16; identidade de agentes é o tema 2. A IA aparece neste mapa apenas como força que *pressiona* a arquitetura — e ela pressiona no sentido contrário ao da soberania, o que é a parte mais interessante da história.

Uma distinção que percorre o documento inteiro, porque quase toda confusão sobre este tema nasce dela:

- **"o dado é seu"** na acepção comercial — exportar um ZIP, apagar a conta, portabilidade da LGPD/GDPR. Maduro, regulado, resolvido no papel.
- **"o servidor não consegue ler"** na acepção arquitetural — o operador é tecnicamente incapaz de entregar o conteúdo, a ninguém, nem sob ordem judicial. É outra coisa, e é dela que este mapa trata.

## 3. Onde isso está hoje

### O que já é maduro

**Autenticação criptográfica pelo aparelho.** O WebAuthn Level 3 foi publicado como **W3C Recommendation em 25 de agosto de 2026** — o estágio final do processo do W3C, com compromisso de licenciamento livre de royalties dos membros do grupo de trabalho. Do lado da adoção, a FIDO Alliance divulgou em 7 de maio de 2026 (World Passkey Day) a estimativa de **5 bilhões de passkeys em uso** e, com base em pesquisa da Sapio Research com 11 mil consumidores em dez países, **90% de conhecimento, 75% com ao menos uma passkey ativada e 49% de uso regular quando disponível**. Do lado corporativo, 68% das organizações declaram ter implantado ou estar implantando passkeys para funcionários.

Três ressalvas sobre esses números, porque eles são a espinha dorsal da classificação:

- A fonte é a própria FIDO Alliance, **parte interessada** na difusão do padrão. A pesquisa foi conduzida por terceiro (Sapio) e a metodologia é declarada — mas não há triangulação independente do número de 5 bilhões, que é explicitamente uma *estimativa*.
- **Ativar não é usar.** O salto de 75% (ativou) para 49% (usa regularmente) é grande, e a diferença é exatamente a senha continuando viva como alternativa.
- O próprio levantamento mostra que **57% das organizações ainda usam métodos suscetíveis a phishing** como login primário de funcionário. "Fim da senha" é slogan; o dado descreve convivência.

**Criptografia ponta-a-ponta em mensageria e backup.** Disponível em produto de massa há anos. O que esse tema tem de vivo não é a capacidade, é a **jurisdição** — ver contrassinais abaixo.

**CRDTs em produção.** Yjs e Automerge sustentam edição colaborativa em produtos reais. O Automerge 3, anunciado em julho de 2025, é o marco que destrava o uso sério: o consumo de memória ao colar *Moby Dick* num documento caiu de cerca de 700 MB (Automerge 2) para cerca de 1,3 MB, com ganho geral declarado acima de 10×. Isso é engenharia resolvida, não incerteza fundamental.

### O que está emergente

**Controle de acesso sem servidor de confiança.** É aqui que a arquitetura ainda não fecha. O Ink & Switch desenvolve o **Keyhive** — capacidades convergentes, gerenciamento causal de chaves e um protocolo de sincronização (**Beelay**) capaz de sincronizar cargas cifradas ponta a ponta que o servidor não decifra. O objetivo declarado é ter "auth local-first eficiente preservando a experiência de Google Docs, Dropbox, GitHub e Discord". O estado é pré-alfa, de março de 2025, sem auditoria de segurança e com APIs instáveis; o próprio repositório diz para não usar em produção. O ensaio fundador de 2019 (Kleppmann, Wiggins, van Hardenberg, McGranaghan) já apontava identidade e permissões como problema em aberto — sete anos depois, continua sendo o gargalo.

**Portabilidade da credencial.** O **CXF** (formato) e o **CXP** (protocolo de transferência, com HPKE protegendo a credencial em trânsito) são o par que resolve o aprisionamento no cofre. O rascunho público do CXP de outubro de 2024 carrega a advertência: *"This is a Working Draft Specification and is not intended to be a basis for any implementations as the Specification may change."* A Apple já embarcou transferência baseada em CXF **no mesmo dispositivo**; a parte que atravessa ecossistemas depende da finalização do CXP.

**Apresentação de credencial verificável pelo navegador.** A **Digital Credentials API** está habilitada por padrão desde o **Chrome 141** (outubro de 2025) e no iOS 26; permite divulgação seletiva — provar maioridade sem revelar a data de nascimento — com suporte a OpenID4VP e ISO 18013-7. A emissão pela API é mais recente e mais restrita (*origin trial*, Android). Do lado regulatório, o Regulamento (UE) 2024/1183 fixa **24 de dezembro de 2026** como prazo para toda pessoa poder requisitar sua carteira e para a administração pública aceitá-la, estendendo a obrigação ao setor privado regulado — bancos, telecomunicações, energia, transporte, saúde, seguros, educação — em **24 de dezembro de 2027**.

### Os contrassinais, que são fortes

**A criptografia tem endereço legal.** Em fevereiro de 2025 a Apple desligou o Advanced Data Protection no Reino Unido; a página oficial de suporte, atualizada em 22 de setembro de 2025, afirma que a empresa "não pode mais oferecer o Advanced Data Protection no Reino Unido a novos usuários". Em agosto de 2026 a Apple entrou com nova ação no tribunal britânico; em setembro de 2026 a situação prática dos usuários do Reino Unido não mudou. Ou seja: a capacidade técnica existe e está desligada por decisão de Estado — o exato oposto de uma trajetória tecnológica autônoma.

**A varredura de mensagens voltou.** Em 10 de julho de 2026 o Parlamento Europeu reviveu o regime de varredura voluntária de CSAM até 2028, num procedimento em que **mais parlamentares presentes votaram contra do que a favor** e ainda assim a medida passou, porque a maioria absoluta exigida conta os ausentes como favoráveis. O texto atual exclui plataformas cifradas; a versão permanente, ainda em trílogo, é a que discute obrigar varredura inclusive em comunicação cifrada ponta a ponta.

**O sync engine está sendo comprado.** Em 11 de agosto de 2026 a Electric anunciou que se junta à Databricks — o código aberto continua aberto (Postgres Sync, PGlite, TanStack DB), mas o **Electric Cloud está sendo encerrado** e a justificativa declarada é servir *sandboxes de agentes de IA* e centralizar de volta no Lakebase. A infraestrutura que a comunidade local-first estava usando foi absorvida por uma empresa de dados centralizados, para um caso de uso que não é o do usuário soberano.

**A IA puxa na direção contrária.** Meredith Whittaker, presidente do Signal, disse à *Fortune* em novembro de 2025 que a integração de agentes no nível do sistema operacional é feita "de maneiras muito imprudentes e insensíveis à cibersegurança", e que um agente precisaria de acesso aos contatos e mensagens do Signal — "esse acesso é um vetor de ataque". A resposta da indústria a essa tensão não tem sido o local-first: tem sido **computação confidencial** — enclaves com atestação em CPU e GPU, com o Private Cloud Compute da Apple se expandindo para GPUs NVIDIA no Google Cloud. É uma terceira via que promete o resultado da soberania (ninguém lê seu dado) **sem** entregar a arquitetura (o dado continua indo para o datacenter).

### Nota sobre o Brasil

O Brasil aparece neste tema por dois caminhos. O primeiro é a autenticação: a imprensa brasileira noticiou em fevereiro de 2026 que o aplicativo gov.br passou a aceitar passkey, dispensando senha e reconhecimento facial a cada acesso, com requisito de conta prata ou ouro. **Essa afirmação não foi confirmada em fonte oficial nesta pesquisa** — o FAQ de acesso.gov.br consultado hoje descreve o fluxo por QR code e verificação em duas etapas, e não menciona chave de acesso; as matérias não citam anúncio oficial. Fica registrado como alegação de imprensa não triangulada, e não como fato.

O segundo caminho é a proteção do dado: a LGPD classifica dado biométrico como sensível, e a ANPD colocou o tema de biometria na agenda regulatória do biênio 2025/2026. Não há, até onde esta pesquisa alcançou, movimento regulatório brasileiro que **exija** arquitetura local-first ou ponta-a-ponta — que é o wildcard descrito na seção 6.

## 4. As disrupções-raiz

### Candidato A — Autenticação criptográfica pelo aparelho (passkeys/WebAuthn)

- **candidato:** substituição da senha por credencial criptográfica ligada ao dispositivo
- **maturidade:** **maduro**
- **potencial_de_ruptura:** médio
- **o_que_rompe:** o banco de senhas como ativo e como superfície de ataque; o phishing de credencial reutilizável
- **por_que_agora:** já aconteceu — WebAuthn L3 é Recomendação W3C desde 25/08/2026; 5 bi de passkeys; 75% com ao menos uma ativada
- **o_que_falta:** nada para existir; falta apenas substituição completa, que é problema de cauda longa e de recuperação
- **evidencias:** W3C (fonte 3), FIDO Alliance (fonte 1)
- **veredito:** **REBAIXADO A ANTECEDENTE MADURO.** Falha em maturidade e, pelo critério declarado na entrevista, passou da maioria inicial. É a infraestrutura sobre a qual as raízes B e C operam, não uma raiz.

### Raiz 1 — Servidor cego por padrão em aplicação colaborativa

- **candidato:** arquitetura em que dado colaborativo com times, papéis e permissões sincroniza cifrado, sem que o servidor leia conteúdo nem arbitre acesso
- **maturidade:** **emergente/experimental**
- **potencial_de_ruptura:** **alto**
- **o_que_rompe:** (a) o modelo de negócio que extrai valor do dado legível no servidor; (b) a arquitetura de produto SaaS, em que o servidor é o lugar onde a verdade mora; (c) a moderação e a personalização como funções do operador; (d) a relação de poder entre operador e usuário na guarda do trabalho
- **por_que_agora:** o CRDT deixou de ser caro (Automerge 3, jul/2025, >10× menos memória); a peça que faltava — controle de acesso criptográfico com sincronização cega — saiu do papel e virou código público (Keyhive/Beelay, mar/2025); e o custo de confiar no operador ficou visível quando um Estado conseguiu desligar a criptografia de um produto inteiro (Apple/Reino Unido)
- **o_que_falta:** auditoria de segurança do controle de acesso local-first; um modelo de receita que sobreviva à cegueira; e resposta de produto para revogação, moderação e recuperação — nenhuma delas resolvida pelo ensaio de 2019, que já as listava como problemas em aberto
- **evidencias:** fontes 2, 8, 11, 5
- **veredito:** **ACEITA.** Emergente, ruptura alta em pelo menos quatro dimensões, "por que agora" documentado, condição pendente clara.

### Raiz 2 — Portabilidade criptográfica da credencial (CXP/CXF)

- **candidato:** mover o conjunto de credenciais de uma pessoa entre cofres e ecossistemas, cifrado ponta a ponta, sem que o provedor de origem ou destino leia
- **maturidade:** **emergente**
- **potencial_de_ruptura:** **alto**
- **o_que_rompe:** o aprisionamento por identidade — o custo de troca que hoje sustenta a posição de Apple, Google, Microsoft e dos gerenciadores de senha; e a assimetria em que quem guarda a chave decide se você continua entrando
- **por_que_agora:** o CXF chegou a padrão proposto e a Apple embarcou transferência no mesmo dispositivo no iOS/macOS 26, com CXP mirando padronização em 2026; ao mesmo tempo, a concentração criada pelas passkeys sincronizadas ficou mensurável — a literatura acadêmica mostra que "a segurança das passkeys sincronizadas está concentrada principalmente no provedor da passkey" (Büttner e Gruschka, ICISSP 2025)
- **o_que_falta:** o CXP sair de *Working Draft* — o documento público diz literalmente que não deve servir de base para implementação — e ser adotado pelas plataformas para transferência **entre** dispositivos e ecossistemas, que hoje não existe
- **evidencias:** fontes 13, 14, 4
- **veredito:** **ACEITA.** Emergente, alta ruptura em cadeia de valor e distribuição de poder, condição pendente explícita e datável.

### Raiz 3 — Credencial verificável apresentada pelo aparelho

- **candidato:** o site pede um atributo provado criptograficamente (maioridade, residência, vínculo) em vez de pedir cadastro; a carteira no aparelho responde com divulgação seletiva
- **maturidade:** **emergente**
- **potencial_de_ruptura:** **alto**
- **o_que_rompe:** a conta como unidade de relação entre pessoa e serviço; o provedor de identidade terceiro ("login com Google") como árbitro; o formulário de cadastro como a primeira tela de todo produto digital; e a equação da publicidade baseada em identificador persistente
- **por_que_agora:** a API está habilitada por padrão no Chrome 141 e no iOS 26, com divulgação seletiva e suporte a ZKP previstos; e há um prazo legal forçando oferta em escala continental — 24/12/2026 para o setor público europeu, 24/12/2027 para o privado regulado
- **o_que_falta:** emissão (não só apresentação) fora de *origin trial* e fora do Android; carteiras além da Google Wallet em produção; e — o ponto que decide se isso liberta ou aprisiona — regra efetiva de minimização que impeça o verificador de pedir mais do que precisa
- **evidencias:** fontes 6, 16
- **veredito:** **ACEITA.** Emergente, alta ruptura, "por que agora" com data legal, condição pendente clara.

### Candidato B — Inferência cega (IA útil sobre dado que o operador não lê)

- **candidato:** IA operando sobre dado pessoal sem que o provedor de infraestrutura ou do modelo veja a entrada, via execução local ou enclave com atestação
- **maturidade:** emergente
- **potencial_de_ruptura:** alto
- **o_que_rompe:** a premissa de que dado precisa sair de casa para ser útil
- **veredito:** **REBAIXADO A TECNOLOGIA HABILITADORA E FRONTEIRA DE TEMA.** O modelo rodando no dispositivo é o tema 16 desta disciplina. Aqui ele entra como condição: sem inferência cega, a raiz 1 fica sem resposta para "e a IA?", e o mercado escolhe computação confidencial em datacenter — que preserva a promessa e descarta a arquitetura. Aparece como sinal e como wildcard na seção 6.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "Servidor cego por padrão em aplicação colaborativa (local-first + E2E com controle de acesso criptográfico)"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O servidor deixa de ser o lugar onde o produto sabe as coisas e vira transporte de blocos cifrados; o diferencial de produto migra inteiro para o cliente"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "A cobrança se desloca de acesso ao dado para garantia de continuidade: assina-se sincronização, capacidade e durabilidade, não o lugar onde o trabalho mora"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Provedor de sincronização vira commodity intercambiável e trocar de fornecedor deixa de ser migração de dados, virando troca de endereço"
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "A moderação perde o ponto de observação central e se parte em duas: denúncia feita pelo cliente com prova criptográfica, ou ausência deliberada de moderação"
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Cegueira arquitetural vira objeto de licenciamento: exige-se do operador capacidade de saber o que transporta como condição de operar em certas jurisdições"
                sinal: medio
                prazo: 2032
                confianca: media
      - id: e2
        ordem: 1
        efeito: "O encerramento de um serviço deixa de apagar o trabalho de quem o usava, porque o acervo já está no aparelho e o formato é aberto"
        sinal: fraco
        prazo: 2030
        confianca: media
      - id: e3
        ordem: 1
        efeito: "O time de produto fica sem telemetria de conteúdo e passa a decidir com medição no dispositivo, com consentimento explícito, ou sem medição nenhuma"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "A pesquisa com gente volta a disputar orçamento com o experimento remoto, porque o experimento remoto perde a variável que media"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "O teste A/B perde o posto de árbitro final de decisão de design em produtos cegos, e o repertório de método volta a ser plural por necessidade, não por convicção"
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: "Portabilidade criptográfica da credencial entre cofres e ecossistemas (CXP/CXF)"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "Mudar de cofre de credenciais deixa de ser reconstrução conta a conta e passa a ser uma transferência cifrada de minutos"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Portabilidade de credencial entra na pauta de interoperabilidade obrigatória, ao lado de portabilidade de dado, como remédio concorrencial"
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Onde moram as chaves de uma pessoa vira item comparável de consumo, com propaganda, resenha e troca sazonal, como plano de telefonia"
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "O provedor de passkey se torna camada concorrencial visível e, ao mesmo tempo, ponto único de falha reconhecido de quem depende dele"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Fraude e ataque migram do roubo de senha para o momento da exportação e para o atendimento humano que autoriza exceções"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "O suporte ao cliente vira superfície de segurança regulada, com registro, auditoria e limite formal para o override humano"
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: "Credencial verificável apresentada pelo aparelho, com divulgação seletiva (Digital Credentials API + carteiras estatais)"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "O cadastro deixa de ser formulário e vira apresentação de atributo: o serviço pede o que precisa provar, não a identidade inteira"
        sinal: fraco
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "O primeiro minuto de uso de um produto digital deixa de ser gasto em preenchimento, e o abandono no cadastro sai da lista dos gargalos principais de aquisição"
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Telas de conta, perfil e recuperação encolhem e migram para o sistema operacional, saindo do escopo de design de cada produto"
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "Provar um atributo deixa de exigir conta, e a figura do visitante anônimo porém verificado passa a ser desenhável em produto"
        sinal: fraco
        prazo: 2030
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Serviços que monetizam o histórico precisam produzir valor sem identificador persistente, ou convencer a pessoa a criar conta apesar de não precisar"
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "A medição publicitária se desloca para agregação atestada no dispositivo, ou a publicidade se recolhe de vez para dentro de plataformas fechadas que ainda identificam"
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "O provedor de login social perde a posição de árbitro da identidade na web, e a carteira do sistema operacional e a do Estado ocupam o vácuo"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Pedir prova de identidade fica barato demais, e a verificação passa a ser exigida por padrão em lugares onde antes não se exigia nada"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "A web se parte entre zonas com prova de atributo obrigatória e zonas sem, e navegar sem provar nada vira condição sinalizada, não o padrão"
                sinal: medio
                prazo: 2032
                confianca: media
```

**O que a estrutura não captura bem.** Três coisas, e vale dizê-las antes que a árvore pareça mais limpa do que o assunto é.

A primeira é que a roda **não representa realimentação**. O efeito `e8.1` (pedir identidade fica barato, então se pede sempre) é, na prática, a força que mata `e7` (o visitante verificado sem conta). Eles brigam entre si e estão desenhados como galhos paralelos que nunca se tocam. Num diagrama honesto haveria uma seta de volta, e ela seria a mais importante do mapa: **a mesma infraestrutura que permite provar pouco permite exigir sempre**, e quem decide qual das duas acontece não é a tecnologia, é quem tem poder de fazer a pergunta.

A segunda é que os três centros não são independentes. A raiz 3 (credencial verificável) enfraquece a raiz 2 (portabilidade de credencial) se a carteira estatal virar o depósito único: portabilidade entre cofres importa menos quando o cofre que conta é o do Estado. A roda os trata como se não se falassem.

A terceira é que **ordem causal não é cronologia**, e aqui isso é visível: `e5` (provedor de passkey como ponto único de falha) tem prazo 2028 e é de primeira ordem, enquanto `e1.2.1` (cegueira como objeto de licenciamento) é de terceira ordem e tem prazo 2032 — mas `e1.2.1` pode chegar antes, porque depende de um voto parlamentar e não de adoção de mercado. O Chat Control mostra que essa ordem pode inverter num único dia de sessão.

## 6. Sinais fracos e wildcards

### Sinais fracos

1. **O aviso em caixa alta do Keyhive.** Um laboratório que defende local-first há sete anos publica o controle de acesso e diz "não use em produção". É sinal fraco em duas direções ao mesmo tempo: a peça que faltava existe, e ela ainda não está pronta. Quem projetar em cima dela em 2027 está apostando, não implementando.
2. **A Apple embarcar CXF só no mesmo dispositivo.** Transferir credenciais entre aplicativos do mesmo aparelho é o passo que não ameaça ninguém. O passo que ameaça — atravessar ecossistemas — depende do CXP, que segue em rascunho. A assimetria entre os dois passos é o sinal.
3. **A emissão da Digital Credentials API estar em *origin trial* e só no Android.** Apresentar credencial (o site pede, você mostra) avançou rápido; emitir (a carteira recebe) avançou devagar. Quem controla a emissão controla o ecossistema — e é justamente aí que o padrão está mais atrasado.
4. **O destino do Electric.** Um dos motores de sincronização da comunidade local-first foi absorvido por uma empresa de dados centralizados, com a nuvem encerrada e a justificativa declarada sendo agentes de IA. Não é sinal de que local-first morreu; é sinal de **para onde o dinheiro está redirecionando a mesma tecnologia**.
5. **A passkey no gov.br.** Se confirmado em fonte oficial — hoje não está —, seria o sinal mais relevante do recorte brasileiro: um Estado com dezenas de milhões de contas normalizando autenticação sem senha para a população inteira, inclusive para quem nunca ouviu falar de FIDO.

Nenhum desses é produto líder de mercado, e nenhum é a manchete do tema. É o que os qualifica.

### Wildcards

**Wildcard principal — a lei que obriga a cegueira.** Uma jurisdição relevante decide que dado de saúde, financeiro ou de criança **só pode** ser tratado em arquitetura cifrada ponta a ponta com chave sob controle do titular. Baixa probabilidade: nenhum movimento nesse sentido foi encontrado nesta pesquisa, nem na Europa, nem no Brasil, e a direção dominante é a oposta. Impacto alto e imediato: a raiz 1 deixa de depender de convencimento de mercado e vira requisito de compliance, o que resolve de uma vez o problema que ela não sabe resolver sozinha — o modelo de receita. `e1.1` e `e1.1.1` passariam de confiança baixa a média em um ano.

**Wildcard simétrico — a lei que proíbe a cegueira.** O Chat Control 2.0 sai do trílogo obrigando detecção em comunicação cifrada ponta a ponta, ou o tribunal britânico valida a ordem contra a Apple. Impacto: `e1.2.1` deixa de ser terceira ordem e vira o fato central do mapa; a raiz 1 se recolhe a nichos de self-hosting e software livre, e a soberania de dados vira posição política em vez de opção de arquitetura. **Este é o wildcard mais provável dos três**, o que já diz algo desconfortável sobre o tema.

**Wildcard de confiança — o cofre que falha.** Um provedor grande de passkeys sincronizadas sofre comprometimento ou indisponibilidade prolongada e milhões de pessoas ficam sem acesso às próprias contas ao mesmo tempo. A literatura já aponta que a segurança das passkeys sincronizadas se concentra no provedor; o evento apenas tornaria isso visível para o público. Impacto duplo e contraditório: acelera a raiz 2 (portabilidade vira exigência de consumo) e desacelera a substituição da senha (a senha volta como rede de segurança, "só por garantia").

## 7. Contra o próprio mapa

**1. Qual efeito é apenas extrapolação linear do presente?** `e6.1` — "o abandono no cadastro sai da lista de gargalos". É a transposição direta de uma métrica de hoje para um mundo em que o funil pode nem existir na forma atual. O gargalo de aquisição em 2031 pode simplesmente ser outro, e o mapa está projetando a preocupação de 2026 sobre um contexto que mudou. **Rebaixado para sinal fraco e confiança baixa.** Um efeito foi **cortado inteiro** por este mesmo motivo — ver anexo, caminho causal 1.

**2. Qual efeito assume adoção rápida demais?** `e1` — o servidor virar transporte de blocos cifrados até 2029. Comparação histórica que desmonta a pressa: o HTTPS levou cerca de duas décadas entre padronização e ubiquidade, e mesmo assim só virou padrão quando um ator com poder de distribuição (o navegador) passou a punir quem não adotava. O local-first com servidor cego **não tem o equivalente dessa punição** — nenhum navegador marca como inseguro um SaaS que lê o seu dado. Sem esse mecanismo, 2029 é otimista; e a peça central ainda está pré-alfa.

**3. Qual disrupção-raiz pode simplesmente não acontecer?** A raiz 1. É a única cuja tecnologia central não tem auditoria de segurança, não tem produto em produção e não tem modelo de receita demonstrado. E tem um substituto pronto e mais confortável: **computação confidencial**. Se enclave com atestação entregar "ninguém lê seu dado" com a comodidade do SaaS, a pressão social por servidor cego se dissolve — o consumidor não distingue as duas promessas, e a segunda não exige que ninguém reescreva a arquitetura.

**4. O que quebra na roda se essa disrupção falhar?** Cai o galho inteiro de `e1` e `e3`: seis dos vinte e quatro efeitos. Sobrevive tudo que depende das raízes 2 e 3, que têm padrão publicado e prazo legal empurrando. Ou seja: **a parte do mapa ligada à identidade é bem mais robusta que a parte ligada ao dado.** Isso é um achado, não um detalhe — e inverte a ênfase habitual das conversas sobre este tema.

**5. Que contrassinais existem?** Quatro, todos documentados na seção 3, e todos apontando contra: Apple/Reino Unido (criptografia desligada por ordem de Estado, sem reversão em dezoito meses); Chat Control revivido em julho de 2026; Electric absorvida pela Databricks com a nuvem encerrada; e a IA agêntica exigindo acesso amplo justamente ao que a criptografia protege. Não encontrei contrassinal de porte equivalente na direção contrária — nenhum regulador relevante exigindo local-first ou ponta-a-ponta.

**6. Que barreiras foram subestimadas?** A **recuperação**. O levantamento da FIDO indica que recuperação de acesso é barreira para 16% das organizações que ainda não são totalmente passwordless — e esse é o mundo corporativo, com TI e processo. Para uma pessoa comum, com servidor cego, perder o aparelho é perder o acervo, sem 0800 que resolva. A pergunta de primeira ordem do tema — "e a herança digital?" — não tem resposta de produto em nenhuma das três raízes. Quem projetar isso vai descobrir que a parte difícil não é cifrar: é o dia em que alguém morre.

**7. Que ator teria incentivo para bloquear, capturar ou redirecionar?** Três, com estratégias diferentes. **Estados**, bloqueando — já em curso, com resultado. **Provedores de nuvem e de dados**, capturando: a Databricks comprando a Electric para servir agentes é literalmente isso, e o sinal é forte porque não é hipótese. **Fabricantes de plataforma**, redirecionando: Apple, Google e Microsoft têm incentivo para que a soberania aconteça *dentro* das carteiras deles — daí ser mais fácil embarcar CXF no mesmo dispositivo que CXP entre ecossistemas.

**8. Qual viés entrou na seleção?** Dois, declarados. **Primeiro**: o tema foi trazido à turma junto com uma varredura de projetos de finanças pessoais com privacidade e com um projeto real de aluno que removeu o provedor de identidade terceiro. Isso cria um viés de amostragem — o repertório consultado é o de quem já escolheu esse caminho, e projetos self-hosted de nicho aparecem superrepresentados em relação ao peso que têm no mercado. Compensei buscando deliberadamente contrassinal e ator com incentivo contrário, e o resultado foi um mapa mais pessimista que o tema de partida. **Segundo**: viés do próprio modelo. Documentação técnica de padrão é abundante, bem indexada e fácil de citar; evidência de **não-adoção** é rara, difusa e quase nunca publicada. Isso empurra qualquer pesquisa deste tipo na direção do otimismo tecnológico. As fontes 5, 7, 12 e 15 entraram no mapa para corrigir isso, e foram buscadas de propósito.

## 8. O que a máquina errou

Erros efetivamente detectados nesta execução, com a correção aplicada:

**1. Tratei "o fim da senha" como disrupção-raiz na primeira formulação.** Era o centro óbvio do tema e a manchete do enunciado. Caiu ao verificar duas fontes: WebAuthn Level 3 é Recomendação W3C desde 25/08/2026 (padrão final, não emergente) e 75% das pessoas já ativaram uma passkey. Pela regra 2.3 da skill, maturidade `maduro` desqualifica candidato a raiz; pelo critério declarado na entrevista, adoção além da maioria inicial derruba a hipótese. Rebaixado a antecedente maduro, registrado como candidato A na seção 4.

**2. Aceitei alegação de imprensa brasileira como fato.** A afirmação "o gov.br adotou passkeys" apareceu em três veículos e eu a tratei como estabelecida. Ao buscar confirmação primária, o FAQ oficial de acesso.gov.br descreve QR code e verificação em duas etapas e **não menciona chave de acesso**; nenhuma das matérias cita anúncio oficial. Corrigido: a alegação está marcada como não triangulada na seção 3 e como sinal fraco condicional na seção 6. Não foi promovida a evidência.

**3. Divergência de data sobre o Automerge 3.** Um material secundário datava o lançamento como "final de 2025"; o anúncio no site do projeto é de **julho de 2025**. Adotada a data da fonte primária. O mesmo material trazia número de melhoria ("40-60% menor") que não bate com o que o anúncio primário afirma (redução de memória acima de 10×, de ~700 MB para ~1,3 MB no caso do *Moby Dick*) — são medidas de coisas diferentes, e usei apenas a do anúncio, nomeando o caso medido.

**4. Fonte interessada sem triangulação plena.** Os números de adoção de passkeys vêm da FIDO Alliance, que promove o padrão. A pesquisa foi executada por terceiro (Sapio Research, abril de 2026, margem declarada) e a metodologia está publicada, o que é melhor que a média — mas o número de 5 bilhões é estimativa da própria entidade e **não encontrei fonte independente que o reproduzisse**. A limitação está sinalizada na seção 3 e na 11. Não descartei o dado; mudei o peso que ele carrega.

**5. Um link primário quebrado que quase virou citação torta.** A URL mais divulgada do ensaio do Ink & Switch (`/local-first/`) responde com redirecionamento e corpo vazio; o conteúdo está em `/essay/local-first/`. Citei o endereço que efetivamente abriu. Registro porque é a forma mais banal de uma fonte "lida" não ter sido lida.

Não fabriquei erro adicional para parecer mais crítico. Os cinco acima foram detectados durante a execução, e os dois primeiros mudaram a estrutura do mapa.

## 9. Três cenários para 2031

### Provável — a soberania virou recurso, não arquitetura

É 2031. A senha sumiu do cotidiano de quem tem aparelho recente e continua firme em todo o resto — sistema legado, atendimento por telefone, quem trocou de celular e não conseguiu recuperar. A carteira digital funciona: na Europa é obrigatória desde 2027 para banco, seguro e saúde, e o resto do mundo copiou o formato porque era mais barato copiar que inventar. Provar idade ficou trivial — e, por isso mesmo, **se pede prova de idade em todo lugar**, inclusive onde não fazia falta nenhuma; navegar sem se identificar virou uma escolha que se faz conscientemente, com atrito, como usar dinheiro em espécie.

O servidor cego existe e é uma linha de produto, não uma mudança de era: aplicativos de nota, de saúde e de finanças anunciam "criptografado ponta a ponta" como anunciam "sem anúncios". Por baixo, quase todos rodam em enclave com atestação, em datacenter de três empresas — a promessa foi entregue, a arquitetura não. Os mecanismos que levaram aqui: prazo regulatório na identidade (que funciona), ausência de qualquer obrigação equivalente no dado (que não funciona), e a compra sistemática dos motores de sincronização por empresas de dados centralizados, que continuaram depois da Electric.

Para quem projeta: a tela de cadastro encolheu, a tela de recuperação cresceu, e a pergunta de design mais difícil do ano é quanto pedir quando pedir é barato.

### Desejável — a cegueira ficou boa de usar

É 2031. Entre 2027 e 2029 três coisas foram construídas — nenhuma delas automática. Primeira: o controle de acesso local-first passou por auditoria pública de segurança e virou biblioteca estável, com semântica de convite, papel e revogação que um time de produto consegue usar sem criptógrafo na equipe. Segunda: **a recuperação virou problema de design, não de criptografia** — herança digital, contato de confiança, custódia repartida entre pessoas e não entre empresas viraram padrão de interface, com nome e ícone reconhecíveis, do mesmo jeito que o cadeado do HTTPS virou. Terceira: a portabilidade de credencial saiu do rascunho e entrou em remédio concorrencial, então trocar de cofre é tão banal quanto portar número de telefone.

A consequência que ninguém antecipou: com o servidor cego, o time de produto perdeu o painel de métricas de conteúdo e teve que voltar a falar com gente. Pesquisa qualitativa deixou de ser a primeira linha cortada no orçamento, porque virou a única linha que enxerga.

Condições que precisaram ser construídas — e que em 2026 não existiam: auditoria financiada de software local-first; um padrão aberto de recuperação social; e pelo menos uma jurisdição relevante exigindo cifra sob controle do titular para dado sensível, que foi o que fez a conta fechar para quem paga a fatura.

### Indesejável — a chave é do sistema operacional

É 2031. O Chat Control 2.0 saiu do trílogo obrigando detecção em conteúdo cifrado, e a ordem britânica contra a Apple foi validada. A criptografia ponta-a-ponta sobreviveu como categoria jurídica, com varredura no cliente antes de cifrar — o que significa que não sobreviveu. A carteira do sistema operacional virou o lugar onde a identidade mora, o CXP nunca saiu de rascunho porque ninguém com poder de mercado precisava dele, e migrar de ecossistema significa **perder a identidade digital inteira**, não só as fotos. O aprisionamento não foi vendido: foi presenteado, embrulhado como segurança, e é real.

Local-first continua existindo, do jeito que o software livre de desktop continuou existindo: como nicho competente, orgulhoso e irrelevante em escala.

O sinal precoce que teria antecipado isso está em duas datas de 2026, e nenhuma das duas foi manchete: **10 de julho**, quando o Parlamento Europeu aprovou a varredura com mais votos contrários que favoráveis entre os presentes, e **11 de agosto**, quando o motor de sincronização da comunidade local-first foi comprado por uma empresa de lakehouse para servir agentes de IA. Quem estivesse olhando, viu o poder se mover — nos dois casos — na direção contrária à do mapa.

## 10. O experimento

### Caderno Cego

**O que é.** Um aplicativo de anotação financeira pessoal, colaborativo entre no máximo três pessoas (um casal, uma república, uma dupla de sócios), construído local-first sobre Automerge 3 com sincronização cega via Beelay/Keyhive em estado pré-alfa, autenticação só por passkey, sem senha e sem provedor de identidade terceiro. O servidor é operado pela própria equipe do experimento e é **tecnicamente incapaz** de ler qualquer conteúdo. Roda por seis semanas com cerca de 12 participantes em 5 grupos.

**Pergunta de futuro que testa.** Uma equipe de produto consegue operar e melhorar um produto cujo servidor não lê nada — e onde o custo dessa cegueira aparece primeiro: no design, na operação ou na segurança? É a pergunta que decide se os efeitos `e1`, `e3` e `e3.1` da roda têm mecanismo ou são desejo.

**Tecnologia emergente usada.** Controle de acesso criptográfico local-first (Keyhive/Beelay) — o item que a seção 4 classificou como o gargalo real da raiz 1, e que é a única peça deste experimento sem equivalente maduro.

**Por que uma solução madura não responderia à mesma pergunta.** Um aplicativo com backup criptografado, HTTPS e "login com Google" responde "sim, dá para operar" — porque o servidor continua lendo tudo quando precisa. A pergunta só tem valor quando o operador é **incapaz**, não apenas cortês: é a incapacidade que produz o problema de moderação, o problema de métrica e o problema de recuperação ao mesmo tempo. Com backup cifrado no servidor do fornecedor, nada disso aparece.

**O que os participantes farão.** Uso normal por seis semanas, com três eventos provocados e agendados: (a) na semana 2, cada grupo adiciona e depois **revoga** o acesso de um terceiro, e relata o que entendeu que aconteceu com o histórico; (b) na semana 4, um participante por grupo simula **perda do aparelho** e tenta recuperar o acervo pelos meios que o produto oferecer; (c) na semana 5, cada grupo tenta **exportar tudo** e abrir em outra ferramenta.

**Métrica e observação.** Quatro medidas, três delas obtidas sem ler conteúdo algum:

1. **Recuperações fracassadas** — quantos dos 5 eventos de perda de aparelho terminam com acervo irrecuperável. É a métrica principal.
2. **Decisões de design sustentadas por telemetria cega** — quantas decisões a equipe consegue tomar em seis semanas usando só sinal estrutural (frequência de sincronização, tamanho de documento, conflito de merge, latência) sem nunca ver conteúdo. Meta declarada antes de começar: **três**.
3. **Distância entre o modelo mental e a criptografia** — no evento de revogação, quantos participantes acreditam que o revogado perdeu acesso ao histórico anterior (o esquema do Keyhive concede acesso por histórico de documento; a intuição de quase todo mundo diz o contrário). Medido por entrevista, não por questionário.
4. **Abandono** — quantos param de usar, e em que semana.

**Hipótese falsificável.** *O custo do servidor cego aparece primeiro na operação (recuperação e suporte), não no design: a equipe sustenta decisões de produto com telemetria cega, mas não sustenta a promessa de continuidade quando alguém perde o aparelho.*

**Qual resultado me faria mudar de ideia.** Se as 5 recuperações forem bem-sucedidas com os meios que o próprio produto oferece, e mesmo assim a equipe **não** conseguir as três decisões de design com telemetria cega, a hipótese se inverte: o gargalo do servidor cego é epistêmico, não operacional — e aí `e3.1` sobe de confiança baixa para média, enquanto a seção 7 fica errada ao apontar a recuperação como a barreira subestimada. Se as duas coisas derem certo, o experimento derruba a própria premissa de que cegueira custa caro, e a raiz 1 merece mais confiança do que este mapa lhe deu.

## 11. Fontes

Somente fontes efetivamente abertas e lidas durante esta execução, em 17/09/2026.

1. **FIDO Alliance — "Five Billion Passkeys: FIDO Alliance Reports Mainstream Global Usage on World Passkey Day 2026"** — `https://fidoalliance.org/fido-alliance-reports-accelerating-global-passkey-adoption-on-world-passkey-day-2026/` — sustenta os números de adoção: 5 bi de passkeys (estimativa), 90% de conhecimento, 75% com ao menos uma ativada, 49% de uso regular, 68% de organizações implantando, 57% ainda em métodos suscetíveis a phishing, recuperação como barreira para 16%. Pesquisa Sapio Research, abril/2026, 11.000 consumidores e 1.400 decisores em dez países. *Confiabilidade: média-alta em metodologia declarada, mas é parte interessada na difusão do padrão e o número-manchete é estimativa própria não triangulada.*
2. **Ink & Switch — "Local-first software: you own your data, in spite of the cloud"** (Kleppmann, Wiggins, van Hardenberg, McGranaghan, abril/2019) — `https://www.inkandswitch.com/essay/local-first/` — sustenta os sete ideais, a formulação do problema e o registro de que identidade, permissões, P2P e modelo de negócio eram problemas em aberto. *Confiabilidade: alta como fonte fundadora e declaração de escopo; é ensaio de posição, não evidência de adoção.*
3. **W3C — "Web Authentication: An API for accessing Public Key Credentials — Level 3", W3C Recommendation, 25/08/2026** — `https://www.w3.org/TR/webauthn-3/` — sustenta a classificação de passkeys como capacidade madura: estágio final do processo do W3C, com licenciamento livre de royalties. *Confiabilidade: alta, fonte primária normativa.*
4. **Büttner, A.; Gruschka, N. — "Device-Bound vs. Synced Credentials: A Comparative Evaluation of Passkey Authentication" (ICISSP 2025), arXiv:2501.07380** — `https://arxiv.org/abs/2501.07380` — sustenta que a segurança das passkeys sincronizadas se concentra no provedor, e o trade-off entre disponibilidade e isolamento. *Confiabilidade: alta, acadêmica revisada, aplicando framework estabelecido (Bonneau et al.).*
5. **Apple Support — "Apple can no longer offer Advanced Data Protection in the United Kingdom to new users"** (publicado em 22/09/2025) — `https://support.apple.com/en-us/122234` — sustenta o contrassinal jurisdicional: a criptografia foi desligada por decisão de Estado, com transição forçada para quem já a usava. *Confiabilidade: alta, declaração oficial da empresa afetada.*
6. **Chrome for Developers — "Digital Credentials API: Secure and private identity on the web"** (03/10/2025) — `https://developer.chrome.com/blog/digital-credentials-api-shipped` — sustenta a habilitação por padrão a partir do Chrome 141, suporte no iOS 26, divulgação seletiva e ZKP, OpenID4VP e ISO 18013-7, Google Wallet ativa e outras a caminho. *Confiabilidade: média-alta — documentação primária do implementador, logo parte interessada na adoção.*
7. **Electric — "Electric is joining Databricks"** (11/08/2026) — `https://electric.ax/blog/2026/08/11/electric-joining-databricks` — sustenta a captura da infraestrutura local-first: código aberto permanece aberto, Electric Cloud encerrada, justificativa declarada em agentes de IA e Lakebase. *Confiabilidade: alta como fato societário, é o anúncio da própria empresa.*
8. **Automerge — "Automerge 3"** (julho/2025) — `https://automerge.org/blog/automerge-3/` — sustenta que o custo de memória do CRDT deixou de ser impeditivo: de ~700 MB para ~1,3 MB no caso medido, ganho declarado acima de 10×. *Confiabilidade: média-alta — números do próprio projeto, com caso de teste nomeado e reprodutível.*
9. **acesso.gov.br — FAQ da Conta gov.br, "Como acessar conta gov.br com aplicativo gov.br"** — `https://acesso.gov.br/faq/_perguntasdafaq/comoacessarcontaaplicativogovbr.html` — usada como **evidência negativa**: a documentação oficial consultada descreve QR code e verificação em duas etapas e não menciona chave de acesso/passkey. *Confiabilidade: alta como fonte oficial; ausência em FAQ não prova ausência do recurso, apenas impede confirmação.*
10. **FDR — "Gov.br não vai mais pedir senha de acesso"** (12/02/2026) — `https://fdr.com.br/2026/02/12/govbr-nao-vai-mais-pedir-senha-de-acesso-saiba-como-fazer-login-de-forma-mais-rapida/` — alegação de que o app gov.br adotou passkeys, opcional, para contas prata e ouro. *Confiabilidade: baixa — imprensa sem citação de anúncio oficial, não triangulada. Citada como alegação, nunca como fato.*
11. **Ink & Switch — "Keyhive: Local-first access control" (lab notebook)** — `https://www.inkandswitch.com/keyhive/notebook/` — sustenta o estado da peça que falta: capacidades convergentes, gerenciamento causal de chaves, sincronização Beelay de cargas que o servidor não decifra, e o aviso explícito de não usar em produção (pré-alfa de março/2025, sem auditoria). *Confiabilidade: alta, documentação primária do laboratório que desenvolve.*
12. **Fortune — "AI agents are an existential threat to secure messaging, Signal's president Whittaker says"** (27/11/2025) — `https://fortune.com/2025/11/27/ai-agents-are-an-existential-threat-to-secure-messaging-signals-president-whittaker-says` — sustenta a tensão entre IA agêntica e criptografia, com citação direta de Whittaker em entrevista à margem do Slush, em Helsinque. *Confiabilidade: média-alta — imprensa de reputação com citação direta; é declaração de posição de uma parte interessada, não medição.*
13. **FIDO Alliance — "Credential Exchange Specifications"** — `https://fidoalliance.org/specifications-credential-exchange-specifications/` — sustenta a existência e a finalidade do par CXF/CXP: formato padrão para transferir credenciais de um gerenciador, seguro por padrão. *Confiabilidade: alta quanto à finalidade; a página é sumária e não traz estágio nem data — daí a fonte 14.*
14. **FIDO Alliance — "Credential Exchange Protocol", Working Draft de 03/10/2024** — `https://fidoalliance.org/specs/cx/cxp-v1.0-wd-20241003.html` — sustenta o estágio da raiz 2, com o aviso literal de que é rascunho e não se destina a servir de base para implementação, sem posição oficial da aliança. *Confiabilidade: alta, documento normativo primário — inclusive quanto ao seu próprio inacabamento.*
15. **The Record — "Europe revives law allowing big tech to scan for CSAM"** (10/07/2026) — `https://therecord.media/chat-control-2-csam-scans-european-parliament-passage` — sustenta o contrassinal regulatório: varredura voluntária revivida até 2028, aprovada com mais presentes contra do que a favor por efeito da maioria absoluta que conta ausentes como sim; criptografadas excluídas no texto atual, em disputa na versão permanente. *Confiabilidade: média-alta — imprensa especializada em segurança; os números de votação convêm conferir no registro do Parlamento antes de citar em peça pública.*
16. **EADTrust — "December 2026 deadline: EUDI Wallet"** — `https://www.eadtrust.eu/en/blog/december-2026-deadline-eudi-wallet/` — sustenta os prazos do Regulamento (UE) 2024/1183: 24/12/2026 para direito de requisitar a carteira e aceitação pela administração pública, 24/12/2027 para o setor privado regulado (bancos, telecomunicações, energia, transporte, saúde, seguros, educação), com política de minimização de dados. *Confiabilidade: média — prestador de serviço de confiança comentando regulação, portanto parte interessada; as datas são verificáveis no texto do regulamento e convém citá-lo diretamente em peça final.*

## 12. Anexo — o levantamento bruto

### Candidatos avaliados e descartados

| Candidato | Maturidade | Ruptura | Veredito e motivo |
|---|---|---|---|
| Passkeys / fim da senha | maduro | médio | Antecedente maduro. W3C Recommendation + 75% de ativação derrubam a candidatura pela regra 2.3 e pelo critério da entrevista |
| Criptografia ponta-a-ponta em mensageria | maduro | — | Antecedente. Comum em produto de massa; excluído pela régua da disciplina |
| Backup criptografado, HTTPS, 2FA, login social | maduro | baixo | Excluídos pela régua da disciplina, conforme o enunciado do tema |
| CRDT como tecnologia | maduro para edição colaborativa | médio | Tecnologia habilitadora, não raiz. Roda em Yjs/Automerge em produto real; o que é emergente é o **controle de acesso** em cima dele, não a convergência |
| Self-hosting | maduro | baixo | Prática existente há décadas. Muda quem paga a conta, não a arquitetura de confiança |
| Inferência cega / IA sobre dado que o operador não lê | emergente | alto | Rebaixado a habilitador + fronteira de tema (16). Entra como wildcard e como condição da raiz 1 |
| Computação confidencial em datacenter | emergente-maduro | alto | **Hipótese alternativa forte, não raiz deste tema.** Entrega a promessa da soberania sem a arquitetura; tratada na seção 7 como o que pode matar a raiz 1 |
| Carteira estatal de identidade como produto | emergente | alto | Absorvida pela raiz 3, da qual é o motor regulatório — não é capacidade independente |
| Herança digital / custódia repartida | experimental | médio | Não promovido: não encontrei padrão, especificação nem produto em escala. Aparece como lacuna na seção 7 e no cenário desejável |
| Identidade de agentes autônomos | emergente | alto | Fora de escopo: é o tema 2 da disciplina |
| Modelo local no dispositivo | emergente | alto | Fora de escopo: é o tema 16 |

### Caminhos causais cortados

1. **"Local-first acaba com o aprisionamento de plataforma"** → cortado por falta de mecanismo. Se A (dado no aparelho em formato aberto) acontece, B (fim do aprisionamento) **não** se torna mais provável de forma direta: o aprisionamento contemporâneo está na rede de pessoas, no fluxo de trabalho e na identidade, não no arquivo. O ensaio de 2019 é explícito ao dizer que controle de acesso descentralizado é problema em aberto. Sobrou o fragmento defensável, que virou `e2`: o encerramento do serviço deixa de apagar o trabalho.
2. **"Servidor cego → fim da publicidade dirigida"** → cortado. A publicidade não vive no servidor do aplicativo de notas; vive em plataformas que continuarão lendo o que hospedam. A parte com mecanismo real está em `e7.1` e `e7.1.1`, ligada à ausência de identificador persistente, não à cegueira do servidor.
3. **"Fim da senha → queda de fraude"** → cortado como efeito de raiz. Há deslocamento, não queda: `e5.1` registra a migração do ataque para a exportação e para o atendimento humano. Tratar como redução líquida exigiria dado longitudinal de incidente que esta pesquisa não encontrou.
4. **"Passkey → exclusão digital de quem tem aparelho antigo"** → não cortado, mas **não promovido** a efeito por falta de evidência dimensionável. É consequência plausível e socialmente relevante; sem base de aparelhos por faixa de renda com sistema abaixo de Android 9 / iOS 16, seria número inventado. Registrado aqui como lacuna de pesquisa prioritária para o recorte brasileiro.
5. **"Regulação obriga local-first"** → rebaixado de efeito a wildcard. Nenhum movimento nessa direção foi encontrado; a direção dominante é a oposta. Manter como efeito seria confundir previsão com desejo.

### Buscas sem resultado útil

- Fonte oficial do governo brasileiro sobre passkeys no gov.br: **não encontrada**. Consultados o FAQ de acesso.gov.br e o roteiro de integração do Login Único; ambos silentes sobre chave de acesso.
- Verificação independente do número de 5 bilhões de passkeys: **não encontrada**. Todos os veículos localizados citam a própria FIDO Alliance.
- Evidência de produto em produção usando Keyhive/Beelay: **não encontrada** — coerente com o aviso de pré-alfa do próprio projeto.
- Movimento regulatório, em qualquer jurisdição, exigindo arquitetura local-first ou chave sob controle do titular para dado sensível: **não encontrado**.
- Estudo longitudinal de incidente comparando fraude antes e depois da adoção de passkeys em escala: **não encontrado** nesta execução.

### Classificações de maturidade aplicadas

- **Maduro:** WebAuthn/passkeys; E2E em mensageria; CRDT para edição colaborativa; backup cifrado; self-hosting; HTTPS.
- **Emergente:** controle de acesso local-first (Keyhive/Beelay); CXP/CXF; Digital Credentials API (apresentação); carteiras EUDI; computação confidencial para inferência.
- **Experimental:** emissão de credencial via DC API (origin trial, Android); custódia repartida e herança digital; moderação com prova criptográfica pelo cliente.

### Contrassinais registrados

Apple/Reino Unido, com ADP desligado desde fevereiro de 2025 e sem reversão em setembro de 2026 · Chat Control revivido em 10/07/2026, com varredura autorizada até 2028 · Electric absorvida pela Databricks em 11/08/2026, nuvem encerrada, justificativa em agentes de IA · IA agêntica no nível do sistema operacional exigindo acesso ao conteúdo que a cifra protege (Whittaker, nov/2025) · 57% das organizações ainda em métodos suscetíveis a phishing como login primário, segundo o próprio levantamento da FIDO.

### Hipóteses alternativas ao mapa

**H-alt 1 — a soberania é entregue por enclave, não por arquitetura.** Computação confidencial cumpre a promessa ("ninguém lê seu dado") preservando o SaaS. É o cenário provável da seção 9 e a maior ameaça à raiz 1. Falsificável: se até 2029 os produtos que anunciam privacidade forem majoritariamente enclave-em-datacenter e não cliente-cego, a raiz 1 perdeu.

**H-alt 2 — a identidade se move antes do dado.** As raízes 2 e 3 têm padrão publicado e prazo legal; a raiz 1 não tem nem auditoria. O mapa pode estar tratando como simultâneo o que é sequencial: identidade soberana em 2027-2029, dado soberano só depois — ou nunca.

**H-alt 3 — a assimetria vence.** A mesma infraestrutura que permite provar pouco permite exigir sempre; `e8.1` engole `e7`. Quem projeta mídia e interação em 2031 não estaria decidindo *se* pede identidade, e sim resistindo à facilidade de pedir.

### Observações que não entraram no mapa

- A expressão "soberania de dados" carrega dois sentidos que se confundem o tempo todo neste tema: soberania **da pessoa** sobre o próprio dado e soberania **do Estado** sobre dado em seu território (localização, jurisdição). A segunda tem muito mais dinheiro e muito mais lei por trás. Não desenvolvi porque desviaria do recorte, mas é a ambiguidade que faz metade das discussões públicas sobre o assunto passarem uma ao lado da outra.
- O tema é atravessado por uma ironia que a roda não comporta: **o acontecimento mais concreto de 2025-2026 na soberania de dados foi uma perda** — o desligamento do ADP no Reino Unido — e não um ganho. A trajetória do tema pode ser menos uma curva de adoção e mais um cabo de guerra, e nesse caso a Futures Wheel é o instrumento errado. Registro como limitação de método, não como resultado.
- `e2` é o único efeito de primeira ordem sem derivação para segunda ordem. Não foi esquecimento: as derivações que testei ("acervo pessoal vira formato de arquivo duradouro", "surge mercado de arqueologia de dados pessoais") não passaram no teste de mecanismo — não consegui completar a frase "se A acontecer, B fica mais provável porque ___" sem inventar demanda.
