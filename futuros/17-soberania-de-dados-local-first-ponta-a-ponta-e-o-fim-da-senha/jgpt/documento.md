---
tema: "Soberania de dados: local-first, ponta-a-ponta e o fim da senha"
slug: soberania-de-dados-local-first-ponta-a-ponta-e-o-fim-da-senha
autor_login: jgpt
zona_de_interesse: "Pessoas e dados"
data: 2026-09-18
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 7
efeitos_ordem_2: 13
efeitos_ordem_3: 13
tecnologias_citadas: [local-first, CRDT, Automerge, Yjs, Loro, sync engine, Zero (Rocicorp), ElectricSQL, PowerSync, TanStack DB, SQLite WASM, OPFS, criptografia ponta-a-ponta, criptografia no cliente, zero-knowledge, passkeys, WebAuthn, FIDO2, self-hosting, Docker, WebGPU, LLM on-device, Private Cloud Compute, p2panda, Radicle, NextGraph]
fontes: 10
confianca: media
experimento: "Um caderno de campo da turma que roda no navegador, guarda tudo em SQLite local, sincroniza cifrado entre celulares por um relay que não consegue ler nada e entra por passkey — para medir o que quebra quando o servidor fica cego e a senha some."
skill_usada: futurizacao-jgpt
publico_ok: false
---

## 1. Resumo

A arquitetura do software pessoal está trocando de eixo em três frentes ao mesmo tempo: o dado passa a morar no aparelho e sincronizar (local-first), o servidor passa a não conseguir ler o que guarda (ponta-a-ponta) e a credencial passa a ser uma chave criptográfica do próprio aparelho (passkeys). Em 2026 essas três frentes deixaram de ser pesquisa: a FIDO Alliance relata 5 bilhões de passkeys em uso e 75% das pessoas com pelo menos uma conta configurada; o FOSDEM abriu uma sala inteira de local-first com 23 palestras; e os motores de sincronia viraram produto de prateleira, com o Zero da Rocicorp chegando a 1.0 em junho. O que ainda não aconteceu — e é onde mora a disrupção — é o deslocamento de poder que isso implica: se o servidor não lê, o negócio que vivia de ler precisa mudar de lugar; se a conta é do aparelho, o intermediário de identidade muda de função; se a chave define a jurisdição, "nuvem soberana" quer dizer outra coisa. Este mapa parte dessas quatro rupturas e vai até 2031, com atenção específica ao que muda para quem projeta interação: a recuperação de conta vira o pior problema de design da década, o conflito de edição vira material de interface, e o roteador que decide se o dado sobe ou fica vira o componente mais político do sistema.

## 2. O tema

O objeto aqui é a **arquitetura de dado e identidade da pessoa** — não o modelo de IA que roda no aparelho (tema 16), não a identidade de agentes (tema 2). Três rupturas convergentes: **local-first**, em que a cópia no dispositivo é a primária e o servidor é um par na replicação, e não o guardião; **ponta-a-ponta**, em que a cifragem acontece no cliente e o servidor guarda bytes que não consegue interpretar; e **passkeys**, em que a autenticação é uma prova criptográfica feita pelo aparelho, sem segredo compartilhado trafegando.

Isso encosta em mídia e interação em pontos muito concretos, e não apenas em segurança. Primeiro, porque o **estado de espera deixa de existir**: o ensaio original do Ink & Switch abre a lista de ideais com "no spinners", e uma interface sem espera não é a mesma interface mais rápida — é outro repertório de affordances. Segundo, porque **o conflito passa a ser conteúdo**: quando duas cópias divergem e reconciliam, alguém tem de desenhar como isso aparece na tela, e histórico/versão/track changes deixam de ser recurso de nicho. Terceiro, porque **a conta muda de dono** — e a conta é a peça mais antiga e menos redesenhada da interação digital de consumo.

Merece um mapa de futuro, e não um estado-da-arte, porque a parte tecnicamente resolvida já está resolvida e a parte interessante é a de segunda e terceira ordem: quem sustenta um produto cujo servidor não lê o conteúdo, quem atende quem perdeu o aparelho, e o que sobra do intermediário quando a credencial é local.

## 3. Onde isso está hoje

**O que já existe e funciona.**

*Passkeys.* A FIDO Alliance, no World Passkey Day de 2026, relata cerca de **5 bilhões de passkeys em uso**, **90% de reconhecimento do termo**, **75% das pessoas com passkey habilitada em pelo menos uma conta** e **49% usando regularmente quando disponível** — de dois estudos da Sapio Research conduzidos em abril de 2026 (11.000 consumidores em dez países, margem ±0,9 p.p.; 1.400 decisores de organizações com 500+ funcionários, ±2,6 p.p.) [1]. No lado corporativo: **68%** implantaram ou estão implantando passkeys para funcionários, **82%** declaram o passwordless pleno como meta, mas só **28%** chegaram lá e **57%** ainda usam método sujeito a phishing como via principal [1]. O número que mais importa para este mapa é o do atrito: **16%** das organizações que não completaram a transição apontam a **recuperação de acesso** como barreira [1].

*Local-first e motores de sincronia.* A ideia tem endereço e data: o ensaio "Local-first software", de Martin Kleppmann, Adam Wiggins, Peter van Hardenberg e Mark McGranaghan, publicado pelo Ink & Switch em **abril de 2019**, com sete ideais (sem espera, multi-dispositivo, rede opcional, colaboração, "the long now", privacidade por padrão, controle do usuário) e o Automerge como prova de conceito [2]. Sete anos depois, a coisa virou infraestrutura: o FOSDEM 2026 teve uma **devroom própria de local-first com 23 palestras**, incluindo Yjs em produção (wiki colaborativa do Plane), Automerge + Keyhive, ElectricSQL dentro do TanStack DB, NextGraph ("E2EE sync engine"), Radicle, p2panda, Loro no SQLRooms e — sintomaticamente — uma sessão sobre **padrões de UX para um mundo com rede opcional** [3]. O Zero, da Rocicorp, chegou à **versão 1.0 em junho de 2026**, após quase dois anos, mais de 50 releases e milhares de commits, disputando o campo com ElectricSQL, InstantDB, PowerSync e Convex [4].

*Self-hosting.* Deixou de ser só hobby: pesquisa do CISPA estima que **cerca de 8,5% da população dos EUA** hospeda ao menos um serviço exposto à internet; o r/selfhosted passa de **790 mil membros**; e **98,3%** dos respondentes da pesquisa de 2025 daquela comunidade usam contêineres [6].

*Interoperabilidade obrigatória com E2EE preservada.* A Meta anunciou os **third-party chats** do WhatsApp na Europa, sob a DMA: adesão opcional pelo usuário, primeiros parceiros **BirdyChat** e **Haiket**, e a exigência de que o app terceiro use **o mesmo nível de E2EE do WhatsApp**; grupos com usuários externos ainda não [7]. É o primeiro caso em escala de regulação que abre a plataforma **sem** abrir o conteúdo.

**O que existe e não funciona (ou não anda).**

- *A recuperação sem senha.* Não há, em 2026, um padrão bom. As saídas em uso são o passkey sincronizado no keychain da Apple/Google (que resolve o aparelho perdido criando dependência do provedor) ou fallback por e-mail/SMS/call-center — que é exatamente onde o ataque se desloca. Os 16% de barreira relatados pelas organizações [1] são o sintoma, não a exceção.
- *A promessa de "sem conflito".* O CRDT garante convergência **estrutural**, não semântica: merges limpos podem violar invariantes de negócio (o exemplo clássico é o agendamento duplo), e ainda há custo de migração de schema em milhares de dispositivos, fragmentação de ferramentas sem padrão web de sincronia, 1–5 s de sincronização inicial, ~400 KB de SQLite WASM no bundle e comportamento irregular de OPFS no Safari [8]. O próprio Zero 1.0 carrega **718 KB descompactados (232 KB gzip)** de bundle, só suporta Postgres e não faz SSR [4].
- *A lei.* O Conselho da UE aprovou, em **26 de novembro de 2025**, uma versão do Chat Control que retirou a varredura obrigatória e a quebra da criptografia ponta-a-ponta, mantendo varredura voluntária e introduzindo verificação de idade obrigatória; o texto seguiu para trílogo com o Parlamento [5]. O desdobramento de 2026 (ver seção 8) não consegui verificar em fonte aberta nesta sessão.

**Quem está construindo.** Ink & Switch e Automerge; Yjs e o ecossistema de editores (Tiptap, BlockNote, Prosemirror); Rocicorp (Zero), ElectricSQL, PowerSync, InstantDB, Convex; Loro; Jazz; NextGraph, p2panda, Radicle, Willow, Seed Hypermedia, OrbitDB/IPFS [3]; FIDO Alliance com Apple, Google e Microsoft do lado da credencial [1]; e, no Brasil, um ambiente regulatório que se institucionalizou com a **Lei 15.352/2026, publicada em 25 de fevereiro de 2026**, que estrutura a ANPD como autarquia de natureza especial com mais autonomia técnica, administrativa e financeira e cria carreira própria de fiscalização [9].

*Leitura de maturidade (Hype Cycle só como diagnóstico, nunca como prazo):* o que li sobre passkeys é majoritariamente **cobertura de adoção** — números de uso, barreiras, custo de suporte — e não de demonstração. O que li sobre sync engines é **misto**: há produção real (Linear, Figma, Notion via Yjs) e há muito material comparativo de blog, típico de pico de expectativa. O que li sobre IA local sobre dado pessoal é ainda majoritariamente **cobertura de anúncio**.

## 4. As disrupções-raiz

Quatro candidatas passaram no teste "o que isso rompe, e por que agora e não há cinco anos?". Uma candidata forte foi **rejeitada** e está na seção 6.

### 4.1 O motor de sincronia vira dependência de prateleira

**O que rompe.** Até aqui, construir um aplicativo que funcionasse offline, sincronizasse entre aparelhos e reconciliasse edições concorrentes era projeto de pesquisa: exigia equipe dedicada e meses. O limiar cruzado é de **custo de engenharia**, não de capacidade: virou `npm install`.

**Por que agora e não há cinco anos.** Em 2019 o Automerge era protótipo dentro de um ensaio [2]. Em 2026 há Zero 1.0 estável [4], ElectricSQL integrado ao TanStack DB, PowerSync pronto para produção [8], e uma devroom inteira de FOSDEM tratando disso como engenharia corrente, com palestra sobre *padrões de UX* — sinal de que o problema deixou de ser "isso funciona?" e passou a ser "como isso se apresenta?" [3].

**O que falta.** Padrão web de sincronia (hoje cada motor é uma ilha [8]); resposta para invariantes semânticas; e ferramenta de migração de schema em frota. Enquanto isso não existir, local-first segue sendo escolha de categoria (colaborativo/produtividade), não default de todo produto.

### 4.2 A credencial sem intermediário de identidade

**O que rompe.** Não é "a senha acabar" — é a conta deixar de precisar de um terceiro. A prova de identidade passa a ser feita pelo aparelho contra o serviço, sem segredo compartilhado e sem federação obrigatória. O que se remove é uma **dependência de intermediação**, não um campo de formulário.

**Por que agora e não há cinco anos.** WebAuthn existia em 2021; o que não existia era suporte nativo nos três sistemas operacionais com sincronização de chaveiro, o que transformou passkey de dispositivo de segurança em conveniência de massa. O resultado é medido: 5 bilhões de passkeys, 75% de pessoas com ao menos uma, 68% das empresas em implantação [1].

**O que falta.** Recuperação. Sem senha não há "esqueci minha senha", e as saídas atuais ou recriam a dependência do provedor (chaveiro sincronizado) ou recriam o elo fraco (e-mail/SMS/atendente) [1]. Também falta resposta para herança digital e para a morte do titular. **Nota de honestidade:** a parte da credencial que já passou da maioria inicial (o passkey como widget de login) foi tratada aqui como madura; a raiz aceita é o que ela **desmonta** — a intermediação —, que ainda não aconteceu.

### 4.3 O servidor cego por padrão

**O que rompe.** Guardar dado legível passa de ativo a passivo. A restrição removida é dupla: a criptografia no cliente ficou trivial de implementar, e — mais importante — a exigência jurídica de legibilidade parou de avançar no maior bloco regulatório do mundo. O Conselho da UE retirou, em novembro de 2025, tanto a varredura obrigatória quanto a quebra de E2EE do texto do Chat Control [5], e a DMA obriga a interoperar **mantendo** o mesmo nível de ponta-a-ponta [7].

**Por que agora e não há cinco anos.** Há cinco anos a aposta racional de um produto novo era guardar tudo legível: era mais barato, dava personalização e parecia juridicamente mais seguro. Em 2026 o cálculo inverteu de lado: vazamento é caro, a ANPD brasileira tem estrutura e poder de fiscalização própria [9], e a interoperabilidade regulada chega com E2EE embutida [7].

**O que falta.** Um modelo de receita que funcione sem ler o conteúdo, e uma resposta técnica e política para moderação. Enquanto o financiamento do software de consumo depender de leitura, "servidor cego" fica restrito a quem cobra assinatura.

### 4.4 IA útil sobre dado que não sai do aparelho

**O que rompe.** A troca "ou você entrega o dado ao modelo, ou não tem IA" deixa de ser obrigatória. O objeto aqui não é o modelo (tema 16), é o **dado**: o acervo pessoal vira contexto sem virar upload.

**Por que agora e não há cinco anos.** Porque a decisão deixou de ser implícita e virou arquitetura declarada em produto de massa. A Apple documenta, em fonte primária, o desenho em duas camadas: processa no aparelho o que couber e, quando a requisição exige modelo maior, cifra e envia ao **Private Cloud Compute** — com cinco garantias declaradas, entre elas que o dado não fica disponível nem para funcionários com acesso administrativo, que não existem interfaces privilegiadas de contorno, e que **toda build de produção do PCC é publicada para pesquisa de segurança** em log criptográfico [10]. Há cinco anos essa escolha não era feita nem publicada: o dado subia e pronto.

**O que falta.** Auditabilidade do **roteamento**, que é coisa diferente de auditabilidade do servidor. A Apple abre a build do PCC à inspeção [10], mas o critério que decide *esta* requisição sobe ou não sobe continua fechado. Sem log legível de "o que subiu e por quê", a garantia protege o que chegou lá e não responde por que chegou.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "O motor de sincronia vira dependência de prateleira"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O tempo de resposta deixa de depender da rede e o indicador de carregamento some das ações de rotina."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Offline deixa de ser modo degradado e vira estado normal da interface; o conflito de edição passa a ser material visível de design, não erro."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Salvar e publicar se separam, e a linha do tempo do documento vira conteúdo exibível em produtos de mídia."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O backend de produtos de conteúdo encolhe para replicação e autorização, e o time de produto se organiza em torno do esquema de dados em vez da API."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Surge um mercado de hospedagem de sincronia neutra, em que trocar de aplicativo não implica trocar de dado."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O dado do usuário passa a existir em cópia completa no aparelho dele, e o servidor assume papel de relay e cache."
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Perda, roubo e backup de aparelho migram do problema da empresa para o problema da pessoa, e o suporte muda de assunto."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Custódia de chave e de acervo pessoal vira categoria de produto de consumo, vendida por bancos, operadoras e seguradoras."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Exportar deixa de ser funcionalidade e vira estado permanente, esvaziando o sentido prático da portabilidade como direito requerido."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "A retenção de usuário passa a depender da qualidade da interação, porque o custo de troca dentro de uma mesma família de formato cai para perto de zero."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "A credencial sem intermediário de identidade"
    efeitos:
      - id: e3
        ordem: 1
        efeito: "O login vira gesto do aparelho e a tela de senha desaparece dos fluxos de produtos novos."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "O funil de cadastro encolhe e a fricção se desloca da autenticação para o consentimento e a verificação de atributos."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "O primeiro uso vira o único momento de negociação de dados entre pessoa e produto, e concentra a disputa de design e de regulação."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "A recuperação de conta vira o ponto mais caro e mais frágil do sistema, e o alvo preferencial de ataque."
            sinal: forte
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "Recuperação assistida por terceiros de confiança, bancos ou cartórios digitais vira serviço regulado, com desenho de interação próprio."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "O botão de entrar com provedor terceiro perde sua vantagem prática, porque a conveniência que ele vendia passa a vir do sistema operacional."
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O provedor de identidade migra de ponto de login para ponto de sincronização de chaves, e a dependência muda de lugar em vez de desaparecer."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "O chaveiro do sistema operacional se torna a camada de identidade mais concentrada em uso e entra na pauta antitruste."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Produtos pequenos passam a oferecer conta própria sem pagar o custo de integrar identidade de terceiros."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "A conta deixa de ser ativo da plataforma e passa a ser propriedade ligada ao aparelho, tornando herança digital e morte do titular requisitos de produto."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "O servidor cego por padrão"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "Guardar conteúdo legível deixa de ser vantagem competitiva e passa a ser passivo de risco e de custo regulatório."
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O modelo de receita baseado em ler o conteúdo se desloca para metadados, sinais de comportamento e assinatura."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Metadado vira o principal campo de disputa regulatória da década, por ser a única coisa que o servidor cego ainda enxerga."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "A moderação se desloca para o cliente, via classificação no aparelho e denúncia com prova criptográfica anexada pelo próprio usuário."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Quem escreve o classificador que roda no aparelho exerce poder de polícia sem foro definido, e isso vira objeto de litígio."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "A jurisdição efetiva do dado passa a ser decidida pela custódia da chave e não pela localização do servidor."
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "A ideia de nuvem soberana se reformula: hospedar no país importa menos do que provar quem detém a chave."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Editais e contratos públicos de saúde e educação passam a especificar custódia de chave em vez de localização física de servidor."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "IA útil sobre dado que não sai do aparelho"
    efeitos:
      - id: e7
        ordem: 1
        efeito: "O contexto do modelo passa a ser o acervo local da pessoa, consultado sem upload."
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "A qualidade da IA pessoal passa a depender do acervo que cada um tem no aparelho, criando desigualdade entre quem acumulou histórico organizado e quem não acumulou."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Organizar o próprio acervo vira competência valorizada e gera um gênero de produto de curadoria pessoal assistida."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "O roteador que decide se a requisição roda no aparelho ou escala para a nuvem vira o componente mais sensível politicamente do sistema."
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "Log legível e auditável do roteamento vira exigência primeiro de consumidor e depois de regulador."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**O que o bloco não diz sozinho.**

Primeiro: as quatro raízes **não são independentes**, e a roda, por ser árvore, finge que são. O nó `e2.1` (perda de aparelho vira problema da pessoa) e o nó `e3.2` (recuperação vira o ponto frágil) são, na prática, **o mesmo problema visto de dois lados**: o dia em que o celular cai na água, some ao mesmo tempo a cópia primária do dado e a credencial. Quem projetar recuperação em 2029 vai projetar as duas coisas juntas ou nenhuma.

Segundo: há um efeito em que duas subárvores se **contradizem**. `e2.2.1` diz que o custo de troca cai; `e4.1.1` diz que o chaveiro do sistema operacional vira a camada mais concentrada que já existiu. As duas podem ser verdade ao mesmo tempo — liberdade no nível do dado, concentração no nível da chave —, e essa combinação é o cenário mais provável da seção 9. Soberania de dado sem soberania de chave é mudança de senhorio, não emancipação.

Terceiro: os prazos de 1ª ordem são os únicos em que tenho confiança razoável, porque estão ancorados em adoção medida [1][3][4]. Tudo em 2031 neste mapa é derivação causal plausível, não previsão — e a seção 7 explica quais dessas derivações eu mesmo não compraria.

## 6. Sinais fracos e wildcards

**Candidata rejeitada como raiz (fica no radar).** *Identidade descentralizada verificável (DID/VC, carteiras de credencial).* Tem tudo para ser disrupção — remove o intermediário de atributos, não só o de login —, mas não passou no teste do "por que agora": o que encontrei é cobertura de piloto e de especificação, sem número de adoção comparável aos 5 bilhões de passkeys [1]. É **emergente**, não disruptiva. Se um bloco regulatório grande tornar a carteira obrigatória para um serviço de massa, ela vira raiz — e destrona parte da subárvore `e3`.

**Também rejeitada, por maturidade.** Backup cifrado, HTTPS, segundo fator por SMS e "entrar com Google" são piso, não disrupção — é a régua da disciplina, e ela corta aqui com folga. O passkey **como widget de login** também: com 75% de pessoas já com uma habilitada [1], isso passou da maioria inicial e não é mais o que rompe.

**Sinais fracos que vale vigiar.**
- A palestra de **UX para um mundo com rede opcional** no FOSDEM [3] é um sinal social forte: quando uma comunidade de infraestrutura começa a discutir interface, a tecnologia saiu do laboratório.
- **Radicle e Seed Hypermedia** [3]: colaboração de código e publicação sem plataforma no meio. Se isso pegar em um nicho profissional, é ensaio geral do `e1.2.1`.
- **P2P de verdade voltando** (js-libp2p, IPFS, OrbitDB, Willow, p2panda [3]) depois de uma década de descrédito.
- O r/selfhosted em **790 mil membros** com 98,3% usando contêiner [6]: a base de pessoas capaz de hospedar o próprio relay existe e é maior do que se supõe.

**Wildcards (baixa probabilidade, alto impacto).**
1. **Lei que obriga local-first ou E2EE por padrão para dado sensível.** Baixa probabilidade no horizonte, mas o vetor existe: a ANPD ganhou estrutura e carreira própria de fiscalização em 2026 [9], e a UE já obriga interoperar mantendo E2EE [7]. Se sair uma norma setorial (saúde, educação infantil) exigindo custódia de chave pelo titular, toda a subárvore `e5`/`e6` acelera de uma vez e o mercado brasileiro vira laboratório involuntário.
2. **O contrário: um caso criminal grave atribuído publicamente a serviço cego**, seguido de obrigação de varredura no cliente. Mataria `e5` e transformaria `e5.2.1` de terceira ordem em primeira — o classificador no aparelho deixaria de ser opção de design e viraria requisito legal. O trílogo do CSAR é o lugar onde isso se decide [5].
3. **Quebra prática de uma primitiva criptográfica** (ou apenas o anúncio crível de uma), obrigando migração de toda a base instalada de passkeys e de arquivos cifrados em repouso. Improvável; catastrófico; e o tipo de evento que a roda não sabe representar.

## 7. Contra o próprio mapa

**Extrapolação linear.** `e1` ("o indicador de carregamento some das ações de rotina") é o presente com mais volume: Figma, Linear e Notion já fazem isso. Não é descontinuidade, é a curva continuando — e por isso é o único efeito com `confianca: alta` que eu defenderia em banca, justamente por não ser ousado. O caso oposto é `e1.2` (backend encolhe para replicação e autorização): isso **não** é extrapolação, é reversão de uma tendência de 15 anos de engordar o servidor — e é exatamente por isso que merece menos confiança do que lhe dei. Rebaixei de alta para media ao escrever esta seção.

**Velocidade de adoção nunca vista.** Dois efeitos pressupõem pressa:
- `e5.1` (o modelo de receita se desloca em 2030). O caso comparável que contradiz: o HTTPS, que tinha custo quase nulo de adoção e mesmo assim levou cerca de uma década para virar default de web. Mudar arquitetura de receita é muito mais caro do que mudar certificado. Mantive `media` com desconforto; se eu tivesse de apostar, o deslocamento acontece **em produtos novos** e quase não acontece nos incumbentes até depois do horizonte.
- `e4` (o botão de login social perder vantagem em 2029). O caso comparável: o Facebook Login continuou dominando anos depois de existirem alternativas melhores, porque a inércia de integração é enorme. Rebaixei para `media` e o prazo real pode ser 2033.
- Já `e3` tem o oposto do problema: passkeys estão adotando **mais rápido** do que qualquer mudança de autenticação anterior [1]. Aqui o risco do mapa é ser lento demais.

**E se a disrupção não vingar?**
- *Se 4.1 (sync engine de prateleira) não vingar* — por fragmentação, por ausência de padrão web, ou porque a complexidade de invariante semântica [8] afugenta as equipes —, a subárvore `e1`/`e2` inteira cai, e local-first fica confinado a editores colaborativos, como já está. É o cenário que eu considero mais provável entre os fracassos, porque o gargalo não é técnico, é de padronização, e padronização depende de acordo entre concorrentes.
- *Se 4.2 (credencial sem intermediário) não vingar* — o mais provável é a vitória do **meio-termo**: passkeys em massa **dentro** dos chaveiros da Apple e da Google. Nesse caso `e3` acontece integralmente e `e4` se inverte: o intermediário não some, ele muda de camada e fica mais forte. Toda a subárvore `e4.2` (produto pequeno com conta própria) morre.
- *Se 4.3 (servidor cego) não vingar* — e o trílogo do CSAR terminar exigindo varredura no cliente para serviços E2EE [5] —, `e5` e `e6` viram o contrário de si mesmos: a criptografia continua, mas a cegueira acaba, e a arquitetura passa a servir de vitrine em vez de garantia.
- *Se 4.4 (IA sobre dado local) não vingar* — por a diferença de qualidade entre modelo local e modelo de fronteira continuar grande demais —, `e7` desaba inteira e o dado sensível sobe assim mesmo, com verniz de privacidade. Continua sendo a raiz que eu cortaria primeiro: o primário que a sustenta [10] é documentação de **um fornecedor sobre o próprio produto**, descrevendo garantias que ele mesmo define, e uma arquitetura anunciada não é uma arquitetura adotada.

**Viés do autor.** A skill manda perguntar ao autor, e não inventar por ele. **Não pude perguntar**: esta rodada foi executada sem interlocutor humano, com respostas pré-definidas, e nelas o viés declarado é "neutro" e a disrupção suspeita é "nenhuma — descubra". Registro então o que consigo observar em vez de supor: o tema chegou a esta skill acompanhado de um levantamento em que o próprio aluno **removeu o provedor de identidade terceiro do seu produto** e escolheu ferramentas de passkey e de criptografia como destaque. Quem já pagou o custo de tirar o intermediário tende a achar que o resto do mundo vai pagar também. A pergunta que ficou sem resposta e precisa ser feita ao autor antes da entrega é: *o mapa está otimista porque a evidência é forte, ou porque a decisão já foi tomada no seu projeto?* Meu palpite, olhando os prazos que eu mesmo escrevi, é que `e4.2` e `e6.1` estão contaminados por esse otimismo.

**O que me faria mudar de ideia** (critério declarado no recorte): evidência de que a adoção já passou da maioria inicial ou de que a tecnologia só melhora o que existe. Aplicando com honestidade, **isso já aconteceu com uma das minhas raízes** — os 75% de pessoas com passkey habilitada [1] são maioria por qualquer régua de Rogers. Foi por isso que a raiz 4.2 foi reescrita para ser a **desintermediação**, e não o passkey. Se o mesmo argumento for aplicado com rigor ao Yjs (920 mil downloads semanais, segundo levantamento de busca não verificado), a raiz 4.1 corre risco parecido.

## 8. O que a máquina errou

**O erro que quase entrou no documento.** Ao levantar o estado do Chat Control, a busca me devolveu, em resumo, uma narrativa muito específica e muito convincente: votação no Parlamento Europeu em **9 de julho de 2026**, 314 votos contra, 276 a favor, 17 abstenções, faltando 361 para bloquear, e o "Chat Control 1.0" entrando em vigor no mesmo dia excluindo expressamente serviços com E2EE. Números ímpares, data precisa, aritmética coerente — tudo que faz uma alegação parecer verificada. Eu ia usar isso como a evidência principal da raiz 4.3. Ao abrir a única fonte que consegui carregar de fato [5], o que está documentado é **outra coisa e de outra data**: a posição do **Conselho** da UE de **26 de novembro de 2025**, retirando a varredura obrigatória e a quebra de criptografia, com o trílogo ainda por vir. Pode ser que a votação de julho de 2026 tenha acontecido; eu não a verifiquei, e por isso ela **não** está na seção 3 nem na 11. O aprendizado é desconfortável: a informação com mais dígitos foi a menos verificada.

**Discrepância numérica que não resolvi.** Sobre o tamanho do r/selfhosted, o resumo de busca disse **553 mil** membros e a página que abri diz **mais de 790 mil** [6]. Usei o número da fonte lida e registro aqui que os dois circulam. Isso importa porque é exatamente o tipo de número redondo que se propaga sem origem.

**Fonte que eu apresentaria como lida e não estava.** A primeira tentativa de abrir o ensaio do Ink & Switch voltou vazia; se eu não tivesse insistido na URL correta, teria escrito a seção 2 "de memória" sobre os sete ideais — e provavelmente acertado, o que é pior, porque teria produzido um acerto sem fonte.

**Raiz que quase entrou sem lastro — e o que a skill me mandou fazer de errado.** A raiz 4.4 (IA sobre dado local) foi escrita, na primeira versão deste documento, apoiada só em resumo de busca, com uma ressalva no corpo do texto dizendo "não pude abrir esta fonte". A Etapa 1 da própria `futurizacao-jgpt` autoriza isso por escrito: manda marcar a fonte como "não verificado — usuário precisa confirmar antes de entregar". Só que a **checagem da Etapa 5 da mesma skill** proíbe exatamente o resultado disso ("nenhum link na seção 11 é de fonte não verificada de fato"). A skill se contradiz — e a ressalva declarada é pior que inútil, porque dá aparência de rigor sem o custo dele. Corrigi abrindo o primário: a documentação da própria Apple sobre o Private Cloud Compute [10], que sustenta o desenho em duas camadas. O que **não** consegui reancorar saiu do corpo do texto: a alegação sobre inferência no navegador via WebGPU para modelos abaixo de 3B ficou só no Anexo, como busca não aberta. Registro o conflito interno da skill aqui porque ele é achado sobre o objeto avaliado, não sobre o tema.

**Limitação de processo.** A Etapa 0 da skill é uma entrevista bloqueante. Nesta rodada não houve entrevistado: as respostas vieram pré-definidas no pedido. Segui a skill e registrei as respostas no Anexo, mas a entrevista real — em que o aluno é confrontado sobre o próprio recorte — não aconteceu, e a pergunta de viés da Etapa 4 ficou sem resposta. Isto é uma limitação conhecida deste documento.

## 9. Três cenários para 2031

**Provável — a soberania mudou de andar.** Em 2031 quase todo aplicativo de produtividade e de notas nasceu local-first: o dado está no aparelho, a espera sumiu das ações de rotina e o histórico de versões virou parte da interface. A senha desapareceu dos produtos novos, e quase ninguém sente falta. Mas a chave que destrava tudo isso mora no chaveiro de duas empresas, e quem tenta sair delas descobre que exportar o dado é trivial e mudar de chaveiro não é. O servidor de muitos serviços realmente não lê mais o conteúdo — e a publicidade se mudou, sem alarde, para o metadado, que ninguém regulou a tempo. O balanço honesto de 2031 é este: as pessoas ganharam controle sobre os arquivos e perderam de vista onde ficou o controle sobre a identidade.

**Desejável — a chave também é sua.** Em 2031 existe um formato de sincronia padronizado que nenhuma empresa é dona, do mesmo modo que ninguém é dono do HTTP, e trocar de aplicativo dentro de uma família de formato virou operação de dois toques. A recuperação de conta deixou de ser o elo fraco porque foi desenhada como serviço público-privado auditável, com pessoas de confiança e instituições no papel de fiança — e foi desenhada por gente de interação, não só por gente de segurança. O chaveiro do sistema operacional é exportável e substituível por obrigação regulatória. Para chegar aqui, três coisas tiveram de ser feitas entre 2026 e 2029: um grupo de trabalho web fechou um padrão de sincronia antes de o mercado consolidar em dois fornecedores; a portabilidade deixou de ser tratada como exportação de arquivo e passou a ser tratada como portabilidade de **chave**; e alguém pagou a conta de desenhar recuperação de conta como problema de interação social, e não como formulário.

**Indesejável — a cegueira de fachada.** Em 2031 tudo é anunciado como ponta-a-ponta e quase nada é. Depois de um caso criminal grave, a varredura no aparelho virou exigência legal em dois blocos regulatórios; o conteúdo continua cifrado em trânsito e é inspecionado antes de sair, por um classificador que ninguém fora do fornecedor auditou. A pessoa perdeu as duas pontas: o servidor não lê, mas o aparelho conta. A IA pessoal, que roda "localmente", consulta o acervo inteiro e envia à nuvem o que o roteador — fechado — julgar complexo. **O sinal precoce disto já está visível hoje:** produtos que anunciam privacidade sem publicar o que sobe, quando sobe e para onde, e que respondem a pedidos de log de roteamento com uma página de marketing em vez de um documento técnico. Quando essa resposta virar norma da indústria, este cenário já começou.

## 10. O experimento

**O que é.** Um **caderno de campo da turma** que roda no navegador: cada aluno abre a página no celular, entra com **passkey** (sem conta, sem e-mail, sem senha), escreve notas sobre as apresentações da disciplina, e as notas sincronizam entre os aparelhos da turma por um relay cifrado hospedado por um dos alunos. O relay guarda os bytes e **não consegue ler nada**. Tudo persiste em SQLite no aparelho; se a internet cair no meio da aula — e no CIn ela cai —, a escrita continua e reconcilia depois.

**Que pergunta sobre o futuro ele responde.** Não "isso é possível?" (é), mas as três que a roda não resolve no papel: **(a)** quando duas pessoas editam a mesma nota e o merge converge estruturalmente mas erra semanticamente, o que aparece na tela e a pessoa entende? **(b)** o que acontece de verdade quando um aluno troca de celular no meio do semestre — quanto tempo leva, quem ele precisa procurar, e ele consegue sozinho? **(c)** alguém confia no relay sabendo que ele é cego, ou a desconfiança é sobre o **colega que hospeda**, e não sobre a criptografia? A pergunta (c) é a que mais me interessa, porque é social e nenhuma especificação responde.

**Tecnologia emergente que usa, e por que não dá com tecnologia madura.** Yjs ou Automerge para o estado replicado, SQLite WASM com OPFS para persistência, WebAuthn para a entrada, um relay cifrado self-hosted (qualquer VPS ou um mini PC na casa de alguém). Com tecnologia madura — Google Docs, formulário, planilha compartilhada — o experimento **não responde nenhuma das três perguntas**: não haveria merge para observar, a recuperação seria a do Google, e a confiança seria na plataforma, não no colega. O ponto do experimento é precisamente remover o intermediário para ver o que ele estava segurando.

**O que a turma faria em sala.** Três rodadas de 15 minutos. (1) Todos escrevem ao mesmo tempo na mesma nota, com o Wi-Fi ligado e desligado alternadamente, e cada um anota o que achou que aconteceu com o texto. (2) Sorteio de dois alunos que "perdem o celular" — apagam o passkey na frente de todos — e tentam voltar, cronometrado, sem ajuda de quem construiu. (3) Votação aberta: o relay fica hospedado com quem? Alguém aceita hospedar? Alguém se recusa a usar sabendo quem hospeda?

**O que mudaria a opinião do autor.** Se, na rodada (2), a recuperação levar menos de dois minutos e ninguém ficar de fora, a raiz 4.2 deste mapa está pessimista e `e3.2` não é o ponto frágil que afirmei. Se, na rodada (3), a turma recusar o relay do colega e preferir um servidor de empresa que lê tudo, então `e5` está errado pela base — a cegueira do servidor não é um valor que as pessoas queiram pagar para ter, e sim um argumento de engenheiro.

## 11. Fontes

Só entram aqui documentos que foram de fato abertos e cujo conteúdo li nesta sessão. As buscas que não resultaram em página aberta estão no Anexo, não aqui.

1. **FIDO Alliance — "Five Billion Passkeys: FIDO Alliance Reports Mainstream Global Usage on World Passkey Day 2026"** · `https://fidoalliance.org/fido-alliance-reports-accelerating-global-passkey-adoption-on-world-passkey-day-2026/` — Sustenta todos os números de adoção de passkeys da seção 3, a barreira de recuperação (16%) e o argumento da seção 7 de que esta raiz é a de adoção mais rápida. *Confiabilidade:* fonte primária da pesquisa, com metodologia e margem de erro declaradas (Sapio Research, abril/2026) — mas é uma entidade **interessada** na adoção da tecnologia que mede; os números de percepção ("awareness") merecem mais desconto que os de implantação.
2. **Ink & Switch — "Local-first software: You own your data, in spite of the cloud"** (Kleppmann, Wiggins, van Hardenberg, McGranaghan, abril/2019) · `https://www.inkandswitch.com/essay/local-first/` — Sustenta a definição de local-first, os sete ideais e o "no spinners" da seção 2. *Confiabilidade:* documento fundador do campo, citado por praticamente toda a literatura posterior; é ensaio de posição, não estudo empírico.
3. **FOSDEM 2026 — trilha Local-First (programação arquivada)** · `https://archive.fosdem.org/2026/schedule/track/local-first/` — Sustenta a lista de projetos vivos (Yjs, Automerge+Keyhive, ElectricSQL, NextGraph, Loro, Radicle, p2panda, Willow, Seed Hypermedia) e o sinal da palestra de UX. *Confiabilidade:* alta para existência e nomes — é a grade oficial de uma conferência; não diz nada sobre adoção real fora dela.
4. **InfoQ — "Zero Reaches 1.0, Marking the First Stable Release of Rocicorp's Web Sync Engine"** (junho/2026) · `https://www.infoq.com/news/2026/06/zero-version-1/` — Sustenta a maturação dos motores de sincronia e, importante, as **limitações** (bundle de 718 KB, só Postgres, sem SSR). *Confiabilidade:* veículo técnico com histórico editorial; reporta tanto o anúncio quanto a crítica da comunidade, o que reduz o risco de release-parroting.
5. **Tuta — análise da posição do Conselho da UE sobre Chat Control** · `https://tuta.com/blog/chat-control-criticism` — Sustenta a afirmação de que, em **26/11/2025**, o Conselho retirou varredura obrigatória e quebra de E2EE, mantendo varredura voluntária e introduzindo verificação de idade, com trílogo pendente. *Confiabilidade:* **parte interessada** — é um provedor de e-mail cifrado, ativista no tema; usei apenas o fato processual (data e conteúdo da posição), não a interpretação. A alegação sobre a votação de julho/2026 **não foi verificada** e por isso não está no documento.
6. **DreamHost — "Self-Hosting in 2026: Is the Revolution Finally Here?"** · `https://www.dreamhost.com/blog/self-hosting/` — Sustenta os dados de self-hosting: CISPA (8,5% da população dos EUA), r/selfhosted (790 mil), contêineres (98,3%). *Confiabilidade:* **média-baixa** — é blog de empresa de hospedagem, com interesse no tema; os números são de terceiros e não pude abrir o estudo do CISPA. Trate como ordem de grandeza.
7. **Meta Newsroom — "Messaging Interoperability: WhatsApp enables third-party chats for users in Europe"** · `https://about.fb.com/news/2025/11/messaging-interoperability-whatsapp-enables-third-party-chats-for-users-in-europe/` — Sustenta o caso de interoperabilidade obrigatória **com** E2EE preservada (BirdyChat, Haiket, adesão opcional, grupos ainda não). *Confiabilidade:* fonte primária para o que a empresa se comprometeu a fazer; não é evidência de que funcione bem nem de que as pessoas usem.
8. **Smashing Magazine — "The Architecture Of Local-First Web Development"** (maio/2026) · `https://www.smashingmagazine.com/2026/05/architecture-local-first-web-development/` — Sustenta a seção "o que não funciona": conflito semântico versus estrutural, migração de schema em frota, fragmentação sem padrão web, 1–5 s de sincronia inicial, ~400 KB do SQLite WASM, OPFS no Safari. *Confiabilidade:* publicação técnica editada, com posição explicitamente cética sobre quando **não** usar local-first — o que a torna útil justamente como contrapeso.
9. **Macher Tecnologia — análise da Lei nº 15.352/2026 (ANPD)** · `https://www.machertecnologia.com.br/lgpd-anpd-lei-15352-2026/` — Sustenta a nota sobre o Brasil: lei publicada em **25/02/2026**, ANPD como autarquia de natureza especial com mais autonomia e carreira própria de fiscalização. *Confiabilidade:* **média** — é conteúdo de empresa de tecnologia comentando legislação; a existência e a data da lei são verificáveis contra o Diário Oficial, o que **não fiz nesta sessão**; a página explicitamente não trata de criptografia nem de soberania de dados, então nada além disso foi extraído dela.
10. **Apple Security Research — "Private Cloud Compute: A new frontier for AI privacy in the cloud"** · `https://security.apple.com/blog/private-cloud-compute/` — Sustenta a raiz 4.4: o desenho em duas camadas (processa no aparelho o que couber, cifra e escala o resto), as cinco garantias declaradas e a publicação das builds de produção para pesquisa de segurança. *Confiabilidade:* fonte **primária e interessada** — é o fornecedor descrevendo o próprio produto e definindo os critérios pelos quais quer ser julgado. Vale como prova de que a arquitetura existe e foi assumida publicamente; **não** vale como prova de que funciona como anunciado nem de que está em uso.

## 12. Anexo — o levantamento bruto

### 12.1 Etapa 0 — a entrevista que não houve, e as respostas usadas no lugar

A skill exige entrevista bloqueante. Esta rodada foi executada **sem interlocutor humano**; o pedido trouxe as respostas pré-definidas, reproduzidas aqui **na íntegra**, porque é a única forma de uma sessão futura auditar de onde veio o recorte:

- Tema: "Soberania de dados: local-first, ponta-a-ponta e o fim da senha" (tema 17 de 19; família "Pessoas e dados").
- Horizonte: 2031. Público: quem projeta mídia e interação. Recorte: global, com nota sobre o Brasil.
- Descartado de início: o que já é comum em produto de massa (régua da disciplina); nenhuma outra exclusão.
- Disrupção suspeita: nenhuma — descobrir. Viés: neutro. Ideias óbvias a excluir: as que servem para qualquer tema.
- O que faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada (só melhora o que existe).
- Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
- Zona de interesse: "Pessoas e dados". Login: jgpt. Skill: futurizacao-jgpt.
- Instrução expressa de não fazer perguntas de volta e de assumir e declarar o que não estivesse definido.

**Defaults que assumi por conta própria, por não haver quem respondesse:**
- `publico_ok: false` (a skill manda `false` salvo autorização explícita; não houve).
- `confianca: media` para o mapa como um todo — justificativa: as raízes 4.1, 4.2 e 4.3 têm ancoragem documental razoável e a 4.4 não tem.
- Quatro raízes em vez de três ou cinco: as quatro que sobreviveram ao teste da Etapa 2; nenhuma cota foi fixada de antemão.
- Prazos por efeito: 2028–2029 para 1ª ordem, 2029–2030 para 2ª, 2031 (o horizonte) para toda a 3ª ordem. É uma convenção minha, não uma estimativa por efeito, e deve ser lida assim.

### 12.2 Buscas realizadas, incluindo as que não viraram fonte

Nove buscas, com o que cada uma devolveu e o que foi feito com isso:

1. `passkeys adoption 2026 statistics FIDO Alliance percentage of users` → levou à fonte [1]. Trouxe também números por indústria (fintech ~60%, ecommerce 35%, B2B SaaS 28%, mídia 18%, média cross-industry 33–38%) de um blog comercial (MojoAuth) que **não abri** — por isso não estão no corpo do documento, apesar de serem exatamente o tipo de recorte que interessaria a quem projeta mídia. Fica como pendência para o autor.
2. `local-first software CRDT adoption 2026 Automerge Yjs production` → trouxe números sedutores e **não verificados**: Yjs com ~920 mil downloads semanais e 17 mil estrelas; Automerge com ~85 mil downloads; Automerge 3.0 com formato colunar reduzindo documentos em 40–60% e merge sub-milissegundo; 600 ms para 260 mil teclas; 26K–156K operações por segundo; CRDTs em Figma, Linear, Apple Notes, Obsidian Sync, Notion. **Nada disso entrou nas seções 3 ou 11** — apenas a menção qualitativa a Figma/Linear/Notion, que é conhecimento público amplamente redundante. Se o autor quiser usar os números, precisa abrir as fontes.
3. `Chat Control EU CSAR 2026 end-to-end encryption client-side scanning decision` → origem do erro descrito na seção 8. Devolveu a narrativa da votação de 09/07/2026 (314×276×17) e do "Chat Control 1.0" excluindo E2EE. **Descartada por não verificação.**
4. `passkey account recovery problem lost device support cost 2026 criticism` → confirmou o problema qualitativamente e trouxe um caso anedótico (médico que esqueceu o celular na ambulância; hospital com override de 24 h ligado ao crachá, restauração em menos de uma hora). **Não usei** — anedota de blog de fornecedor, sem verificação. Mas é uma boa imagem para a aula, e por isso fica registrada aqui.
5. `gov.br passkey chave de acesso 2026 Brasil autenticação sem senha adoção` → indícios de que o app gov.br passou a oferecer entrada por passkey/biometria local (notícias de fevereiro/2026) e de que a verificação em duas etapas alcançou 50 milhões de pessoas. **Tentei abrir a fonte oficial (gov.br/secom) e a página voltou como conteúdo restrito, sem os dados.** Por isso a nota sobre o Brasil no documento ficou restrita à Lei 15.352/2026 [9]. **Esta é a lacuna mais relevante deste mapa para o recorte brasileiro** e a primeira coisa que eu mandaria o autor checar: se o gov.br — com dezenas de milhões de usuários e um público que não é early adopter — está de fato em passkey, o Brasil vira o caso mais interessante do mundo para a raiz 4.2, e não uma nota de rodapé.
6. `sync engine startups 2026 ElectricSQL Zero Rocicorp PowerSync funding local-first market` → levou a [4] e [8]. Trouxe a frase de James Arthur (ElectricSQL) declarando 2026 "the year of the sync engine" num meetup em abril, e a informação de que o Zero teria chegado a 1.0 em março e à 1.8.0 em meados de julho — **em conflito com [4], que diz junho para o 1.0**. Usei a data de [4], que foi a fonte aberta. Divergência não resolvida.
7. `ANPD LGPD 2026 criptografia ponta a ponta dado sensível soberania de dados Brasil decisão` → levou a [9]. Trouxe também: ANPD como agência reguladora desde 2025 com multa de até 2% do faturamento ou R$ 50 milhões; recomendação de RIPD para dado sensível em larga escala; e a distinção privacidade × soberania ("privacidade é quem acessa; soberania é onde está e sob qual jurisdição") junto da observação de que a **ausência de decisão de adequação da ANPD para os EUA** e o CLOUD Act criam zona cinzenta. Esse último ponto é o insumo direto do efeito `e6` — mas veio de blogs de consultoria que **não abri**, então o efeito está no mapa como derivação, não como fato reportado.
8. `on-device AI local data privacy 2026 Apple Intelligence WebGPU local LLM personal data assistant` → insumo inicial da raiz 4.4. Trouxe a descrição de uma arquitetura em três camadas (on-device / Private Cloud Compute / nuvem terceirizada) com um orquestrador decidindo requisição a requisição, e WebGPU viabilizando inferência no navegador para modelos abaixo de 3B. **Nenhuma dessas páginas foi aberta.** Depois de escrever a primeira versão, voltei e abri o primário da Apple [10], que sustenta as duas camadas e não menciona a terceira; a raiz foi reancorada nele. **A alegação sobre WebGPU e modelos sub-3B fica aqui e não entrou no documento** — não a verifiquei, e a ressalva "não verificado" no corpo do texto não é um estado aceitável. A camada terceira (modelo de fronteira em nuvem de terceiro) também ficou de fora pelo mesmo motivo.
9. `self-hosted adoption 2026 survey niche percentage users r/selfhosted growth` → levou a [6]. Trouxe também: mercado de self-hosting projetado de US$ 15,6 bi (2024) para US$ 85,2 bi (2034) e 86% dos CIOs planejando repatriar cargas da nuvem pública (Barclays Q4 2024). **Não usei**: projeção de mercado a dez anos é o gênero de número menos confiável que existe, e a pesquisa Barclays não foi aberta.

### 12.3 Aplicação do critério da Etapa 2, candidata por candidata

| Candidata | Veredito | Razão |
|---|---|---|
| Motor de sincronia de prateleira | **Disruptiva** (4.1) | Limiar de custo de engenharia; Zero 1.0, ElectricSQL/TanStack, devroom FOSDEM. |
| Desintermediação da identidade via passkey | **Disruptiva** (4.2) | Remove dependência de terceiro; limiar = suporte nativo nos três SOs. |
| Passkey como widget de login | **Madura — rejeitada** | 75% das pessoas já têm uma [1]; passou da maioria inicial. |
| Servidor cego por padrão | **Disruptiva** (4.3) | Limiar jurídico, não técnico: E2EE deixou de ser alvo de obrigação de leitura no Conselho da UE [5] e virou requisito na DMA [7]. |
| IA sobre dado local | **Disruptiva, com ressalva** (4.4) | Passa no teste conceitual; reprova no teste de evidência. Declarada como a mais frágil. |
| Identidade descentralizada (DID/VC) | **Emergente — seção 6** | Sem número de adoção; cobertura de piloto. |
| CRDT como técnica | **Madura — rejeitada como raiz** | Existe desde os anos 2000, em produção há anos; o que mudou foi o empacotamento, e é esse o recorte de 4.1. |
| Backup cifrado, HTTPS, 2FA por SMS, login social | **Maduras — rejeitadas** | Régua da disciplina; são piso. |
| P2P (libp2p/IPFS/Willow/p2panda) | **Emergente — seção 6** | Muita atividade de conferência, nenhuma adoção de massa observável. |
| Self-hosting | **Emergente, em crescimento — contexto** | 8,5% da população dos EUA [6] é muito para hobby e pouco para default; entrou como condição habilitadora, não como raiz. |

### 12.4 Efeitos cortados e caminhos abandonados

- **Um quarto nível de derivação** foi esboçado em duas subárvores e descartado por regra de formato. O que ele diria, e que fica aqui como material: de `e5.1.1` (metadado como campo de disputa) saía "auditoria de metadado vira profissão regulada"; de `e3.2.1` (recuperação institucional) saía "instituição que faz recuperação de conta acumula um grafo de confiança social mais completo que o de qualquer rede social" — que é, provavelmente, o efeito mais perturbador que este mapa produziu e que o formato não comporta. Recomendo ao autor levá-lo para a roda em sala.
- **Efeito descartado por ser genérico** ("as ideias óbvias que servem para qualquer tema", conforme o recorte): "surgem novas startups na área", "a regulação corre atrás da tecnologia", "empresas precisarão se adaptar", "aumenta a preocupação com privacidade". Nenhum entrou.
- **Efeito descartado por ser do tema vizinho:** tudo que derivava da qualidade do modelo rodando localmente foi cortado como tema 16, e tudo sobre credencial de agente autônomo foi cortado como tema 2. O que sobrou na raiz 4.4 é só o que trata do **dado**.
- **Ângulo não explorado por falta de fonte:** o efeito sobre **mídia sincronizada pesada** — vídeo e áudio em local-first, onde o tamanho do acervo torna a cópia completa no aparelho inviável. É um contra-argumento estrutural à raiz 4.1 que eu não consegui sustentar com evidência e que pode ser o furo mais sério do mapa. Se alguém quiser atacar este documento, começaria por aí.

### 12.5 Verificação de formato

Rodado sobre o arquivo final: `grep -c "^## " tendencia-soberania-de-dados-local-first-ponta-a-ponta-e-o-fim-da-senha.md` → resultado registrado abaixo pela sessão que gerou o arquivo. Frontmatter e bloco `roda:` validados como YAML; três níveis exatos; `sinal`, `prazo` e `confianca` preenchidos em todos os 33 efeitos.
