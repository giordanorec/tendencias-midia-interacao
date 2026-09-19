---
tema: Contenção, segurança e identidade de agentes autônomos
slug: contencao-seguranca-e-identidade-de-agentes-autonomos
autor_login: jlsn
zona_de_interesse: Sistemas de Informação
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: Global, com nota sobre o Brasil
disrupcoes_raiz: 3
efeitos_ordem_1: 5
efeitos_ordem_2: 8
efeitos_ordem_3: 8
tecnologias_citadas: ["prompt injection", "agent sandbox", "MicroVM (Firecracker)", "isolamento WebAssembly", "gVisor", "Web Bot Auth", "HTTP Message Signatures", "HTTP 402 / pay per crawl", "Decentralized Identifiers (DID)", "Verifiable Credentials (W3C VC)", "OAuth 2.1 / Authorization Code Grant", "OpenID CIBA", "SPIFFE / WIMSE", "mTLS e atestação de hardware", "Model Context Protocol (MCP)", "A2A", "autorização baseada em capacidades", "fingerprinting comportamental de agentes", "OWASP Top 10 for Agentic Applications", "CAPTCHA"]
fontes: 9
confianca: media
experimento: Portaria de Agentes — um site que negocia com quem bate à porta
skill_usada: futurizacao-jlsn
publico_ok: false
---

## 1. Resumo

Agentes ganharam mãos: executam comandos, navegam, chamam APIs. Com isso viraram atores no mundo — e o mundo só sabe autenticar pessoas. Três rupturas estão em curso ao mesmo tempo. A primeira é a identidade: o agente deixa de ser processo anônimo do usuário e passa a ser principal de segurança, com credencial própria, delegação explícita e trilha de auditoria. A segunda é a porta: a web passa a distinguir humano de agente na requisição, e a distinguir para cobrar, limitar ou barrar. A terceira é a contenção barata: isolar uma tarefa inteira fica tão barato que o descarte do ambiente substitui o desfazer. Para quem projeta interação, o efeito combinado é que a tela de login vira painel de mandatos, a página vira também endpoint negociado, e o consentimento deixa de ser um clique e vira um contrato com escopo, prazo e teto. O risco que ninguém está desenhando é a borda: quem depende de automação para acessar a web pode ser apanhado na malha que existe para barrar agente.

## 2. O tema

O objeto aqui não é o agente que escreve código, nem a avaliação do que ele fez. É a máquina que age em nome de alguém e o conjunto de mecanismos que a contém e a identifica: sandbox, guardrail, detector, credencial, autorização por capacidade, trilha de auditoria.

Isso encosta em mídia e interação em três pontos duros. Primeiro, o consentimento: quando um agente age por mim, a interface de permissão tem de expressar escopo, prazo e limite — e nenhuma convenção de UI atual faz isso bem. Segundo, o acesso: se sites passam a responder diferente conforme quem bate à porta, a "página" deixa de ser o artefato único e passa a ter uma contraparte para máquina. Terceiro, a prova: a trilha do que o agente fez é, ela própria, um objeto de mídia — algo que se assiste, se compartilha e eventualmente se leva a juízo.

Merece um mapa porque o vetor não é o de sempre. A segurança costuma ser uma camada invisível atrás do produto. Aqui ela sobe para a superfície: vira tela, vira preço, vira recusa visível, vira identidade de um ator não-humano com reputação.

## 3. Onde isso está hoje

**O que existe e funciona.** A camada de detecção e negociação na porta já está em produção. A Cloudflare implementou o `pay per crawl`, em que o site responde HTTP 402 a um crawler, declara preço por página e só entrega com cobrança confirmada; o crawler se autentica por chaves Ed25519 publicadas como JWK e assina cada requisição com HTTP Message Signatures (`signature-agent`, `signature-input`, `signature`), no desenho do Web Bot Auth — inclusive assinando os headers de preço, para que o valor não possa ser adulterado no caminho [1]. A operação de classificação de tráfego de IA por finalidade (busca, treino, agente) está documentada e em evolução contínua [9]. Detecção comportamental de agentes de navegação também já é resultado publicado: o FP-Agent distingue agentes de IA de usuários humanos por padrões de interação — tempo de digitação, movimento de ponteiro, sequência de ações — e discute abertamente a corrida com técnicas de evasão [7].

**O que existe e não funciona.** A contenção. O prompt injection segue sem solução de fundo, porque o modelo trata prompt de sistema, pedido do usuário e texto recuperado de fonte externa como um fluxo único de tokens — não há mecanismo confiável de fronteira de privilégio dentro do fluxo. É o que a leitura do OWASP sobre aplicações agênticas registra: a injeção é a junta universal que conecta a maioria dos incidentes, mapeando-se a seis das dez categorias. E as defesas herdadas do mundo humano falham de um jeito específico: a allow-list *facilita* a exploração, porque os comandos de que o atacante precisa já estão aprovados (CVE-2026-22708, no Cursor: um comando na lista, como `git branch`, entrega payload arbitrário), e houve caso em que a própria saída do agente redefiniu a fronteira do seu sandbox (CVE-2025-59532). No mesmo material, o incidente de cadeia de suprimentos de março de 2026: um backdoor no LiteLLM — gateway de modelo usado por CrewAI, DSPy e GraphRAG — ficou três horas no PyPI e foi baixado cerca de 47 mil vezes [2].

**Quem está construindo.** A identidade de agente está sendo disputada em três frentes ao mesmo tempo. Na padronização formal, um Internet-Draft do IETF (março de 2026) propõe não inventar protocolo novo: compor WIMSE, OAuth 2.0 e SPIFFE, com identidade emitida por atestação (hardware, integridade de software, plataforma) e credencial de vida curta ligada ao identificador — e, para operação sensível, confirmação fora de banda do humano via OpenID CIBA [4]. Na academia, um levantamento de abril de 2026 mapeia o estado dos padrões e conclui que a pergunta central segue aberta: quem emite — autoridade certificadora central, ledger distribuído, consórcio de indústria ou Estado [3]. E há a linha de identidade descentralizada, com DIDs, credenciais verificáveis do W3C e registro auditável ligando ação a responsável [6]. Na contenção, a pesquisa migrou do sandbox genérico para o sandbox do *navegador*: o ceLLMate restringe o agente por política de browser, filtragem de DOM antes da página chegar ao modelo, bloqueio de ação e permissão por papel — modelo mental emprestado do sistema operacional móvel [5].

**Nota sobre o Brasil.** O PL 2338/2023 foi aprovado no plenário do Senado em dezembro de 2024 e remetido à Câmara em 17 de março de 2025, onde segue em revisão [8]. Ele trata de responsabilidade por sistema de IA e de arranjo de fiscalização, mas a pergunta específica deste tema — identidade do agente como ator, e não só responsabilidade do fornecedor — não está endereçada. Na prática, se a identidade de agente for emitida por fabricante estrangeiro, o Brasil chega ao debate como consumidor de um registro alheio.

## 4. As disrupções-raiz

### 4.1 O agente vira principal de segurança

**O que rompe.** O modelo mental de que todo ator autenticado é uma pessoa, e de que o software age *como* ela. A partir do momento em que o agente tem credencial própria, o log deixa de dizer "usuário X fez" e passa a dizer "agente A, agindo por X sob mandato M, fez". Isso quebra autenticação, autorização, auditoria e o desenho de consentimento de uma vez só.

**Por que agora e não há cinco anos.** Porque há cinco anos o software automatizado não escolhia. Um script tinha caminho fixo; a credencial do dono bastava. O agente escolhe o próximo passo em função de texto que alguém pode ter plantado — e é por isso que a permissão não pode mais ser herdada inteira do humano. A composição técnica também só amadureceu agora: SPIFFE e atestação em produção, OAuth com fluxo de delegação, credencial de vida curta como prática corrente [4].

**O que falta acontecer.** Convergência em quem emite [3] e, sobretudo, revogação que funcione entre organizações. Hoje cada plataforma revoga o que emitiu; não há mecanismo de "esse agente está comprometido" que atravesse fronteiras.

### 4.2 A porta passa a distinguir, e a negociar

**O que rompe.** A premissa de que a web é isotrópica — que a mesma URL entrega a mesma coisa a quem pedir. Com assinatura na requisição, preço declarado e bloqueio por finalidade, a resposta passa a depender de *quem* é o requisitante e *para que* [1][9]. E quando a assinatura falta, entra a inferência comportamental, que erra em ambas as direções [7].

**Por que agora.** Porque o tráfego de agente virou custo e virou receita perdida ao mesmo tempo. Houve um preço, um código de status e uma parte com poder de porta suficiente para impor a convenção — o que faltava não era a ideia de 402, que existe desde sempre, mas alguém com escala para cobrar.

**O que falta acontecer.** Que o pagamento saia do beta e que a classificação de finalidade não colapse em "tudo é agente" [1][9]. E falta a contraparte da acessibilidade: nenhuma das propostas de porta resolve o caso do usuário que precisa de automação para usar a web.

### 4.3 Contenção fica barata a ponto de virar descartável

**O que rompe.** A ideia de que isolar é caro e portanto excepcional. Se um mundo de execução por tarefa custa quase nada — MicroVM leve, isolamento WebAssembly, sandbox de navegador por política e filtragem de DOM [5] —, o isolamento deixa de ser feature de segurança e vira *unidade de interação*: cada tentativa em seu próprio mundo, descartável.

**Por que agora.** Porque a granularidade mudou. Contêiner isolava serviço; agora é preciso isolar tarefa, e tarefas duram segundos. O custo de partida do ambiente virou o gargalo, e é exatamente ele que caiu.

**O que falta acontecer.** Que o isolamento não seja contornável a partir de dentro — e o CVE-2025-59532 mostra que ainda é [2]. Enquanto a saída do agente puder redefinir a própria fronteira, o mundo descartável é ilusão de contenção.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O agente vira principal de segurança, com identidade e mandato próprios
    efeitos:
      - id: e1
        ordem: 1
        efeito: Toda ação de agente passa a carregar credencial de vida curta ligada a um humano delegante, e o log registra o par agente-mandante
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A tela de login é substituída por um painel de mandatos revogáveis, com escopo, prazo e teto de valor
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Ler permissões concedidas vira hábito cotidiano e ocupa o lugar que os termos de uso nunca conseguiram ocupar
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Surge reputação portátil de agente, importada por uma plataforma na primeira visita como histórico de conformidade
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Reputação de agente vira ativo com preço, seguro e mercado secundário de credenciais com ficha limpa
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Fabricantes de modelo, empregadores e federações disputam quem emite a identidade do agente, e o emissor vira ponto de controle
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Aparecem agentes sem documento, barrados de serviços essenciais por não terem emissor reconhecido
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Reguladores criam categoria intermediária entre ferramenta e pessoa, com responsabilidade solidária do delegante e registro obrigatório
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A porta da web passa a distinguir humano de agente, e a negociar com ele
    efeitos:
      - id: e3
        ordem: 1
        efeito: Sites respondem de forma diferente a humano e a agente, variando preço, limite de uso, formato e recusa
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Consolida-se uma web dupla, com a página feita para o olho humano e um endpoint contratual feito para o agente pagante
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O ofício de desenhar interface se parte em dois, entre quem desenha para pessoa e quem desenha o contrato que a máquina lê
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Cresce um mercado de parecer humano, com evasão de fingerprint vendida como serviço, no mesmo ritmo do mercado de detecção
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Quem depende de automação para acessar a web é apanhado na malha antiagente e passa a precisar de isenção regulada
                sinal: medio
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Publicadores passam a cobrar acesso de agente por página, com preço declarado na própria resposta HTTP
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O custo de uma resposta passa a incluir pedágio de conteúdo, e o agente negocia orçamento com o usuário antes de ler
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Surge o plano de dados do agente, uma franquia mensal de leitura paga vendida no formato de pacote de celular
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: Contenção por tarefa fica barata a ponto de o ambiente virar descartável
    efeitos:
      - id: e5
        ordem: 1
        efeito: Isolar cada tarefa em seu próprio mundo vira o padrão de execução, não a exceção cara
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O desfazer deixa de ser um comando e vira propriedade do ambiente, porque se descarta o mundo em vez de reverter a ação
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A interação com agentes passa a ser ramificada por padrão, e o usuário compara três execuções paralelas em vez de aprovar um passo por vez
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: A trilha de execução do agente vira artefato de mídia assistível, com replay e marcação do ponto em que algo saiu do previsto
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: O replay de execução é aceito como prova em litígio e em sinistro, e o formato do registro vira padrão disputado
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

O bloco YAML mente por omissão em dois pontos.

O primeiro é que ele desenha três disrupções separadas, e elas não são. A identidade do agente só tem valor prático porque a porta passou a perguntar; e a porta só consegue perguntar porque alguém emite credencial verificável. São dois lados da mesma moeda, e o efeito e3.2 — o mercado de parecer humano — é filho dos dois, não de um. Quem for construir a partir desta roda deve ler e1 e e3 como um par.

O segundo é o sentido de "sinal forte". Forte, aqui, significa que já há artefato em produção ou publicação revisável apontando naquela direção, não que o efeito seja bom nem que seja inevitável. O e3 está marcado como forte e prazo 2027 porque a resposta diferenciada por tipo de requisitante já está em operação hoje [1][9] — a novidade não é a existência, é a normalização.

Há ainda um efeito que não coube em lugar nenhum porque atravessa os três ramos: a negociação vira gênero de interface. Pedir permissão, declarar preço, recusar com motivo e propor alternativa são, todos, atos de fala que hoje aparecem como código de status ou modal genérico. Se o horizonte se confirmar, alguém vai ter de desenhar isso como conversa — e é a oportunidade mais concreta deste mapa para quem trabalha com mídia e interação.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — o consentimento fora de banda.** O Internet-Draft do IETF recomenda, para operação sensível, confirmar com o humano por um canal separado, sem expor credencial ao agente [4]. Isso é uma decisão de interação disfarçada de decisão de protocolo: implica que existirá um segundo dispositivo, ou um segundo aplicativo, cuja única função é dizer sim ou não ao que a máquina quer fazer. É o embrião de um aparelho novo.

**Sinal fraco 2 — a filtragem de DOM.** No ceLLMate, a página é editada antes de chegar ao modelo: elementos perigosos são removidos ou redigidos [5]. Se isso virar padrão, então existe, para cada página, uma segunda versão dela que só o agente vê — e que o autor da página não controla. A questão editorial que isso abre é séria e ninguém a está tratando como editorial.

**Sinal fraco 3 — a assinatura do preço.** No Web Bot Auth, o header de preço entra nos componentes assinados justamente para que não possa ser alterado no caminho [1]. É pequeno e técnico, e é o primeiro caso de um valor monetário virando parte da identidade criptográfica de uma requisição de leitura.

**Wildcard — a ação contra o agente, não contra o dono.** Baixa probabilidade, alto impacto: um processo em que o polo passivo seja o agente, identificado por sua credencial, e não a pessoa ou empresa que o operou. Não precisa vencer para mudar tudo. Basta ser admitido: no instante em que um tribunal aceita a credencial de agente como suficiente para individualizar a conduta, todo o desenho de emissão de identidade (4.1) deixa de ser questão de engenharia e vira questão de direito — e o emissor da credencial vira parte interessada em qualquer litígio.

**Wildcard menor — o colapso da detecção.** Se a evasão comportamental ficar barata e boa [7], sites podem abandonar a distinção e passar a exigir credencial assinada de *todo mundo*, humano incluído. O efeito colateral seria a morte do acesso anônimo à web por via lateral: não por decisão política, mas por falência de um detector.

## 7. Contra o próprio mapa

**Qual efeito é apenas extrapolação linear do presente.** O e4 e seu ramo. Pagamento por acesso de agente é o presente esticado: existe o mecanismo, existe o preço, existe o beta [1]. Dizer que em 2028 haverá cobrança por página e em 2031 um pacote mensal é projetar a curva do que já está montado — não é descobrir nada. O e4.1.1, o "plano de dados do agente", é a parte mais fraca do mapa inteiro: ele apenas importa uma metáfora de telecomunicações e a cola num problema que talvez tenha outra economia.

**Qual efeito assume velocidade de adoção irreal.** O e1.1, o painel de mandatos substituindo a tela de login em 2029. Substituir mecanismo de autenticação em escala leva mais de uma década — o login com senha sobreviveu a três gerações de sucessores anunciados, e o próprio levantamento de padrões de identidade de agente registra que a categoria não convergiu [3]. O mais provável é que o painel de mandatos exista em 2029 como recurso avançado de duas ou três plataformas grandes, e continue ausente do resto da web em 2031. O prazo do e1.1 deveria ser lido como "primeiro produto relevante", não como "prática comum".

**Qual disrupção-raiz pode não se concretizar e derrubar o mapa inteiro.** A 4.1 — o agente como principal de segurança com identidade própria. Há um caminho inteiramente plausível em que ela não acontece: o agente permanece um processo do usuário, autenticado com a credencial dele, contido apenas por escopo de token e limite de uso, e tudo que este mapa chama de "identidade de agente" se resolve como mais um campo de claim dentro do OAuth existente. Nesse mundo, não há emissor disputado, não há reputação portátil, não há categoria jurídica nova — e os ramos e1.2, e2 e o wildcard do processo judicial caem juntos. A evidência que apontaria para esse desfecho já existe e é incômoda: o próprio draft do IETF insiste em *não* criar protocolo novo, e sim compor o que já há [4]. Se a resposta da indústria for "isto é um caso de uso do OAuth", a disrupção-raiz vira feature.

**Qual foi o viés da análise.** Dois, admitidos. O primeiro é viés de fonte: a evidência mais sólida e mais fácil de abrir veio de quem tem interesse comercial em que o problema exista — a infraestrutura de porta é vendida por quem escreve sobre a porta [1][9]. Isso empurra o mapa a superestimar o ramo da distinção e da cobrança. O segundo é viés de recorte: o público definido é quem projeta mídia e interação, então os efeitos foram puxados para onde viram tela, gesto e consentimento. Um mapa feito para quem opera infraestrutura teria dado muito mais peso à revogação entre organizações e à cadeia de suprimentos — o incidente do LiteLLM [2] é, em impacto real medido, maior que qualquer coisa nos ramos de interface deste mapa, e aqui ele aparece só como contexto.

## 8. O que a máquina errou

<!-- Preencher após a leitura crítica. -->

## 9. Três cenários para 2031

* **Provável:** convivem dois regimes. Plataformas grandes exigem agente assinado, com credencial de vida curta e mandato explícito, e cobram ou limitam por finalidade; o resto da web segue com detecção comportamental imperfeita e CAPTCHA. Não há emissor único: fabricante de modelo, empregador e federação setorial emitem credenciais que não se reconhecem entre si. O painel de mandatos existe e é bom em três produtos, e ausente em todos os outros. O prompt injection segue não resolvido no fundo e contido na borda, por isolamento descartável e filtragem de entrada.

* **Desejável:** a identidade do agente é sempre derivada e revogável, nunca autônoma — ela só existe amarrada a um humano ou organização responsável, e a revogação atravessa fronteiras organizacionais em minutos. A distinção humano-agente na porta é declarativa e honesta, não inferida por comportamento, o que remove o incentivo ao mercado de parecer humano e, de quebra, tira da frente o CAPTCHA. Existe isenção explícita e auditável para acesso assistido, de modo que quem depende de automação não seja tratado como abuso. **O que precisa ser feito para chegar lá:** três coisas concretas. Revogação federada como requisito de padrão, não como recurso de fornecedor. Um perfil de acesso assistido definido junto com quem usa tecnologia assistiva, e não sobre eles. E o consentimento fora de banda desenhado por gente de interação [4], antes que congele no formato de um modal.

* **Indesejável:** a credencial de agente vira documento de fato, emitido por dois ou três fabricantes de modelo, e sem ela não se acessa serviço essencial. A web se fecha por cima: o acesso anônimo desaparece não por lei, mas porque a detecção falhou e a exigência de assinatura foi estendida a todo requisitante. Acessibilidade vira exceção que se pede caso a caso, com prova de deficiência. **Sinal precoce:** o dia em que um serviço público — banco, saúde, matrícula — passar a exigir credencial de agente emitida por um fornecedor privado específico para atendimento automatizado. Esse é o momento de reagir; depois dele o custo de troca já terá sido pago por todo mundo.

## 10. O experimento

**Portaria de Agentes — um site que negocia com quem bate à porta.**

**A pergunta que responde.** O que acontece com a experiência de uso quando a página deixa de ser isotrópica? Especificamente: como se comunica, para um humano, que ele está sendo tratado como agente por engano — e o que ele pode fazer a respeito?

**O que se constrói.** Um site pequeno de três páginas com um porteiro na frente. O porteiro decide, a cada requisição, em qual de quatro faixas o requisitante cai: humano provável, agente declarado (assinou a requisição), agente inferido (não assinou, mas o comportamento denuncia) e indefinido. Cada faixa recebe resposta diferente: conteúdo integral, conteúdo com preço declarado e HTTP 402, conteúdo reduzido, e um fluxo de contestação. É o desenho de [1] e [9] em miniatura, com a inferência comportamental de [7] no lugar em que a assinatura falta.

**Tecnologia.** Um servidor mínimo (Node ou Python) implementando 402 com header de preço; assinatura Ed25519 no cliente-agente, no formato de HTTP Message Signatures; heurística de comportamento no cliente (tempo entre eventos, trajetória de ponteiro, ordem de foco) enviada como sinal; e um agente de navegador qualquer, do mercado ou caseiro, como o visitante não-humano. O custo é uma tarde.

**O que a turma faz em sala.** Três rodadas, com a turma dividida. Rodada 1: metade navega como humano, metade solta agentes; mede-se falso positivo e falso negativo do porteiro. Rodada 2: quem estava com agente tenta parecer humano, e quem estava como humano tenta *provar* que é humano depois de ter sido barrado — é aqui que o experimento entrega o que interessa, porque o fluxo de contestação é uma peça de interação que ninguém desenhou ainda. Rodada 3: entra a restrição de acessibilidade — um subgrupo navega apenas por teclado, com leitor de tela ou com automação assistiva, e verifica-se em que faixa o porteiro os coloca.

**Qual resultado mudaria a ideia.** Duas medidas derrubariam partes do mapa. Se, na rodada 3, o navegador por teclado e a automação assistiva caírem consistentemente na faixa de agente inferido, o efeito e3.2.1 sobe de terceira ordem para problema imediato de projeto — e deixa de ser especulação de 2031. Se, ao contrário, a faixa "agente declarado" for a maioria do tráfego não-humano já no experimento, porque assinar é simplesmente mais fácil do que fingir, então o ramo do mercado de parecer humano (e3.2) enfraquece e o mapa deve ser reescrito em torno da economia da cobrança, não da corrida de detecção.

## 11. Fontes

1. https://blog.cloudflare.com/introducing-pay-per-crawl/ — Sustenta o mecanismo de negociação na porta: HTTP 402 com preço por página, autenticação do crawler por chave Ed25519 publicada como JWK, HTTP Message Signatures nos headers `signature-agent`/`signature-input`/`signature`, e assinatura do próprio header de preço. Confiabilidade alta para o mecanismo, com ressalva de interesse: é documentação do fornecedor que vende a solução, e o recurso está em beta privado.
2. https://www.helpnetsecurity.com/2026/06/11/owasp-prompt-injection-ai-security-failures/ — Sustenta o diagnóstico de que a contenção falha: prompt injection como junta universal de incidentes, mapeada a seis das dez categorias do OWASP Top 10 for Agentic Applications; CVE-2026-22708 (allow-list contornada no Cursor), CVE-2025-59532 (saída do agente redefinindo a fronteira do sandbox) e o comprometimento do LiteLLM no PyPI, com cerca de 47 mil downloads em três horas. Confiabilidade média-alta: veículo jornalístico especializado reportando levantamento do OWASP; os CVEs devem ser conferidos na fonte primária antes de citação acadêmica.
3. https://arxiv.org/pdf/2604.23280 — *AI Identity: Standards, Gaps, and Research Directions for AI Agents*, Otsuka, Toyoda e Leung, 28/04/2026. Sustenta que a categoria não convergiu e que a pergunta "quem emite" segue aberta entre autoridade central, ledger distribuído, consórcio e Estado. Confiabilidade média: preprint não revisado por pares, mas é levantamento e não alegação empírica.
4. https://www.ietf.org/archive/id/draft-klrc-aiagent-auth-00.html — Internet-Draft de 02/03/2026 sobre autenticação e autorização de agentes. Sustenta o desenho concreto: composição de WIMSE, OAuth 2.0 e SPIFFE em vez de protocolo novo; identidade por atestação; credencial de vida curta; Authorization Code Grant para delegação e OpenID CIBA para confirmação fora de banda. Confiabilidade média: draft informacional, trabalho em andamento, com expiração em 03/09/2026 — é sinal de direção, não norma.
5. https://arxiv.org/pdf/2512.12594 — *ceLLMate: Sandboxing Browser AI Agents*, Meng, Feng, Shumailov e Fernandes, versão de 05/03/2026. Sustenta o sandbox de navegador: política de browser, filtragem de DOM antes de a página chegar ao agente, bloqueio de ação e permissão por papel no modelo de sistema operacional móvel. Confiabilidade média: preprint, com autoria reconhecida na área de segurança de ML.
6. https://arxiv.org/pdf/2512.17538 — *Binding Agent ID*, Lin, Zhang, Liao, Tao e Wang, 22/12/2025. Sustenta a linha de identidade descentralizada: DIDs, credenciais verificáveis do W3C, registro auditável ligando ação a responsável, com MCP e A2A na camada de interoperação. Confiabilidade média-baixa para adoção: preprint que propõe arquitetura, sem implantação em escala demonstrada.
7. https://arxiv.org/pdf/2605.01247 — *FP-Agent: Fingerprinting AI Browsing Agents*, Wang, Shafiq e Vekaria, 05/05/2026. Sustenta a detecção comportamental de agentes de navegação por padrões de interação e a discussão explícita de evasão e de agentes que tentam parecer humanos. Confiabilidade média: preprint; os números de acurácia devem ser lidos no artigo antes de qualquer citação quantitativa.
8. https://www25.senado.leg.br/web/atividade/materias/-/materia/157233 — Ficha do PL 2338/2023 no Senado. Sustenta a nota sobre o Brasil: ementa "Dispõe sobre o uso da Inteligência Artificial", aprovação em plenário e remessa à Câmara dos Deputados em 17/03/2025, tramitação encerrada no Senado. Confiabilidade alta: fonte primária oficial.
9. https://developers.cloudflare.com/ai-crawl-control/features/manage-ai-crawlers/ — Documentação operacional de gestão de crawlers de IA, atualizada em 28/07/2026. Sustenta que a classificação e o controle de tráfego de agentes por finalidade são prática corrente e em evolução. Confiabilidade alta para o que o produto faz, e nula para tendência de mercado: é documentação de fornecedor.

## 12. Anexo — o levantamento bruto

### A entrevista

A skill exige, na etapa (a), cinco perguntas antes de qualquer geração. Esta execução correu sem humano disponível para responder; as respostas abaixo foram fornecidas de antemão, junto com o pedido, e foram tratadas como se dadas na entrevista.

1. **Horizonte de tempo.** 2031.
2. **Público-alvo.** Quem projeta mídia e interação.
3. **Recorte geográfico.** Global, com uma nota sobre o Brasil.
4. **Fora do escopo.** O que já é comum em produto de massa — a régua da disciplina. Nenhuma outra exclusão. Também foram excluídas, por instrução, as ideias genéricas que serviriam a qualquer tema.
5. **Viés desejado.** Neutro. Nenhuma disrupção suspeita indicada de antemão: a instrução foi descobrir.

Instrução adicional registrada: o que mudaria de ideia seria evidência de que a adoção já passou da maioria inicial na curva de Rogers, ou de que a tecnologia não rompe nada — apenas melhora o que existe.

### A etapa (b) — filtro de maturidade

Avaliação feita com o critério da skill. **Maduro** neste terreno: firewall, antivírus, WAF, OAuth para humanos, CAPTCHA. Todos com infraestrutura consolidada e mercado estabelecido. **Incremental**: aplicar qualquer um deles a tráfego de agente sem mudar o modelo de quem é o ator.

O tema não é nenhum dos dois. O que rompe o modelo mental estabelecido é tratar o agente como *principal de segurança* — entidade que precisa de identidade, permissão, isolamento e trilha próprios, e não como processo que herda a credencial de um humano. Isso destrói a premissa de que todo ator autenticado é uma pessoa, premissa sobre a qual está construída a autenticação da web inteira, e cria mercado novo (emissão de identidade de agente, negociação de acesso na porta, reputação de agente). Pela régua da disciplina, também não é comum em produto de massa: nenhum produto de consumo hoje mostra ao usuário um painel de mandatos de agente. **Veredito: disruptivo. Execução autorizada, avançou-se para (c).**

### A etapa (c) — autocrítica, antes da formatação

A roda foi gerada primeiro e depois submetida a três perguntas obrigatórias. O resultado está na seção 7. Registro do que mudou por causa dela: o ramo do pagamento (e4) foi rebaixado de `sinal: forte` para `medio` ao ser reconhecido como extrapolação linear; o prazo do e1.1 foi mantido em 2029 mas acompanhado, na seção 7, da ressalva de que se lê como "primeiro produto relevante" e não como prática comum; e a disrupção 4.1 foi explicitamente marcada como falseável, com a evidência contrária vindo da própria fonte [4].

### Caminhos abandonados

- **Entrar pelo tema 1 (o ofício de programar com agentes).** Descartado por fronteira declarada: o objeto aqui é conter e identificar a máquina que age, não o trabalho de quem a usa para programar.
- **Entrar pelo tema 3 (avaliação e observabilidade).** Descartado pela mesma razão, com uma sobra deliberada: a trilha de execução aparece no e5.2 como objeto de mídia e de prova, não como instrumento de saber se o agente acertou.
- **Entrar por identidade humana sem terceiros (passkeys, tema 17).** Descartado: é a identidade da pessoa, não a da máquina.
- **Ramo de custo computacional do isolamento.** Levantado a partir da alegação de mercado de que um isolamento em WebAssembly seria dezenas de vezes mais rápido que uma frota de MicroVMs. Abandonado como número: não se encontrou medição independente que o sustentasse, e a alegação é de fornecedor. O que sobreviveu foi a direção — isolamento por tarefa ficando barato (4.3) — sem o multiplicador.
- **Ramo de seguro paramétrico para ação de agente.** Abandonado por falta de evidência aberta; sobreviveu apenas como consequência de terceira ordem em e1.2.1 e e5.2.1.

### Assunções declaradas

- **Divergência de frontmatter.** O campo `zona_de_interesse` está preenchido como **"Sistemas de Informação"** porque é valor fixo escrito no formato de saída obrigatório da skill `futurizacao-jlsn`, e não um campo em aberto. A rodada, porém, informou a zona de interesse do autor como **"Agentes"**. Manteve-se o valor da skill, conforme a regra de que campo fixo da skill do aluno vence o parâmetro da rodada, e a divergência é declarada aqui. Quem cruzar rodada e zona de interesse deve ler esta linha antes de tratar o campo como erro.
- **`confianca: media`** no frontmatter: a camada de porta tem evidência em produção e alta confiança; a camada de identidade depende de padrões ainda não convergidos e de preprints não revisados por pares. A média é a honesta.
- **Contagens do frontmatter** conferem com a seção 5: 3 disrupções-raiz, 5 efeitos de primeira ordem, 8 de segunda, 8 de terceira, 9 fontes.
- **Todas as nove fontes foram abertas** durante a execução e responderam HTTP 200 na verificação. Nada foi citado sem leitura. Onde a leitura não sustentou o que se queria afirmar — o caso do número de acurácia do FP-Agent e o dos detalhes do PL 2338 em fonte de opinião — a afirmação foi retirada em vez de estimada.
