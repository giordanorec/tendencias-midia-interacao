---
tema: Contenção, segurança e identidade de agentes autônomos
slug: contencao-seguranca-e-identidade-de-agentes-autonomos
autor_login: jcsc
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 5
efeitos_ordem_2: 9
efeitos_ordem_3: 9
tecnologias_citadas: [Web Bot Auth, RFC 9421 HTTP Message Signatures, Ed25519, Agent Auth Protocol, Cross App Access, Model Context Protocol, WIMSE, Microsoft Entra Agent ID, Okta Agent SSO, Firecracker, gVisor, Kata Containers, WebAssembly/WASI, AgentDojo, Progent, CaMeL, World ID, AgentKit, AP2, Visa Trusted Agent Protocol, Mastercard Agent Pay, Pix, Open Finance]
fontes: 17
confianca: media
experimento: "A Portaria — uma página que trata humano, agente identificado e agente anônimo de três formas diferentes, e a turma tenta atravessar"
skill_usada: futurizacao-jcsc
publico_ok: false
---

## 1. Resumo

Entre 2026 e 2031, o agente autônomo deixa de ser um programa que fala em nome de alguém e passa a ser um **principal de segurança** — algo que tem identidade própria, chave criptográfica, escopo de permissão, prazo de validade e trilha de auditoria. Três rupturas puxam isso ao mesmo tempo: a identidade de agente virando protocolo (Web Bot Auth sobre RFC 9421, Agent Auth Protocol, Cross App Access adotado pelo MCP, Entra Agent ID); a contenção migrando do modelo para a arquitetura ao redor dele, depois que o setor aceitou publicamente que o modelo **será** enganado (OWASP 2026: "pare de tentar construir um modelo que não possa ser enganado"); e a web se partindo em duas leituras — a humana e a de agente — com porta, preço e prova de humanidade separando as duas, agora que bots já respondem por 57,5% do tráfego HTML. Para quem projeta mídia e interação isso não é assunto de infraestrutura: o consentimento deixa de ser um botão e vira política escrita; a conta pessoal deixa de ser "um usuário" e vira "um usuário e sua frota"; e a mesma porta que barra o scraper barra quem depende de agente para acessar. O mapa é cético quanto à convergência: há hoje pelo menos cinco esquemas concorrentes de identidade de agente, e a história de padrões de identidade é de uma década, não de dois anos.

## 2. O tema

**Contenção, segurança e identidade de agentes autônomos** é o conjunto de mecanismos que tratam o agente de IA como um ator com o qual é preciso negociar: isolá-lo (sandbox, microVM, WebAssembly), limitá-lo (autorização baseada em capacidades, política determinística antes da chamada de ferramenta), identificá-lo (assinatura criptográfica na requisição, credencial de agente, registro de delegação) e responsabilizá-lo (trilha, auditoria, seguro, litígio).

Isso encosta em mídia e interação num ponto preciso: **a interface de permissão**. Durante vinte anos o consentimento digital foi um diálogo modal — "este aplicativo quer acessar sua câmera". Um agente que roda por horas, encadeia dezenas de chamadas e age enquanto a pessoa dorme quebra esse formato: não dá para pedir confirmação a cada passo, e não dá para não pedir. O que nasce no lugar é objeto de design de interação, não de segurança apenas. Do outro lado da mesma moeda está a porta: sites que passam a distinguir humano de agente redesenham quem entra, por quanto, e com qual versão do conteúdo — o que muda a forma da página, o modelo de receita do veículo e a acessibilidade de quem navega assistido.

Merece mapa de futuro, e não levantamento de estado da arte, porque o objeto ainda não estabilizou: há protocolo concorrente em toda camada, o incumbente (OAuth para humanos, container para código) está sob pressão real, e as consequências sociais de terceira ordem — responsabilidade jurídica, reputação portável, exclusão por não-humanidade presumida — já têm sinal, mas não têm forma.

### A entrevista (Etapa 1 da skill)

A skill exige a entrevista antes de qualquer geração, e ela foi feita. Esta rodada, porém, é automatizada: **não havia usuário humano presente para responder**. As respostas abaixo foram fornecidas de antemão pelo operador da rodada (o professor da disciplina), no enunciado que invocou a skill, e estão reproduzidas literalmente na seção 12. Registro isso aqui porque a skill manda registrar explicitamente qualquer resposta ausente ou não dada pelo próprio autor — e o caso "respondido por terceiro em nome do autor" é mais forte que "tanto faz": afeta o mapa inteiro.

1. **Horizonte temporal:** 2031.
2. **Público-alvo:** quem projeta mídia e interação.
3. **Recorte geográfico:** global, com uma nota sobre o Brasil.
4. **Descartes explícitos:** o que já é comum em produto de massa (a régua da disciplina). Nenhuma outra exclusão. Pediu-se também excluir "ideias óbvias que serviriam para qualquer tema".
5. **Viés desejado:** neutro.

Perguntas adicionais respondidas no mesmo enunciado, fora das cinco da skill: profundidade de três ordens, modo "a partir de um tema/inovação" (não de um setor), nenhuma disrupção suspeita de antemão ("descubra"), e o critério declarado de mudança de ideia — *evidência de que a adoção já passou da maioria inicial de Rogers, ou de que a tecnologia não rompe nada e só melhora o que existe*. Esse último item foi usado como segundo filtro na Etapa 2, somado ao critério de maturidade da própria skill.

## 3. Onde isso está hoje

**O tráfego já virou.** Em 3 de junho de 2026, dados do Cloudflare Radar divulgados pelo CEO Matthew Prince marcaram a primeira vez em que requisições automatizadas passaram as humanas: 57,5% do tráfego HTML contra 42,5%. O mesmo material atribui a um relatório da HUMAN Security de 2026 um crescimento de 7.851% em um ano no tráfego especificamente **agêntico** — agentes que agem em nome de uma pessoa, distintos dos crawlers clássicos. A razão entre páginas rastreadas e referências devolvidas explicita o desequilíbrio econômico: cerca de 23.951 páginas por referência no caso do ClaudeBot, 111 na Perplexity, 4,9 na Busca do Google.

**A identidade de agente já é protocolo, mas não é um protocolo.** A Cloudflare anunciou o Web Bot Auth em maio de 2025 e, em 28 de agosto de 2025, publicou a categoria de *signed agents*: agentes que assinam suas requisições HTTP com Ed25519 sobre o RFC 9421 (HTTP Message Signatures) e publicam a chave pública num diretório `.well-known`, de modo que o site **verifica** em vez de inferir. Os primeiros parceiros classificados assim foram o ChatGPT agent (OpenAI), o Goose (Block), Browserbase, Anchor Browser e o Browser Rendering da própria Cloudflare. Em paralelo, correm: o Agent Auth Protocol (v1.0-draft, mantido pela Better Auth), com keypair Ed25519 por agente, capacidades como unidade de autorização, JWT de agente com validade de até 60 segundos e descoberta em `GET /.well-known/agent-configuration`; o draft IETF `draft-klrc-aiagent-auth-03` (6 de julho de 2026, grupo WIMSE, com autores da Microsoft, Okta/Auth0, Zscaler, Ping e Aaron Parecki), que explicitamente **não** cria protocolo novo — descreve como aplicar WIMSE/SPIFFE, X.509, JWT curto e OAuth 2.0 a agentes; e o Cross App Access (XAA), extensão OAuth desenhada pela Okta e adotada como extensão oficial de autorização gerenciada pela empresa no Model Context Protocol, com o Agent SSO da Okta em disponibilidade geral em 24 de agosto de 2026 e o Microsoft Entra Agent ID em GA desde abril de 2026.

**A contenção mudou de premissa.** O OWASP Top 10 para aplicações LLM de 2026, publicado em 3 de agosto de 2026, manteve *prompt injection* e vazamento de informação sensível nas duas primeiras posições, promoveu *Excessive Agency* de sexto para terceiro lugar e renomeou *System Prompt Leakage* para *Hidden Context Exposure*. Pela primeira vez a lista incorporou dados de incidentes reais — 6.639, com peso de 25% contra 75% de votação de especialistas. A frase que resume a virada, na cobertura da Help Net Security de 6 de agosto de 2026: *"pare de tentar construir um modelo que não possa ser enganado; construa o sistema ao redor dele, para que quando o modelo for enganado — e será — nada de importante quebre."* O relatório *State of Agentic AI Security and Governance* 2.01 do mesmo projeto registra que a edição anterior catalogava ameaças plausíveis e a atual documenta CVEs e relatórios de incidente em quase toda categoria: 28 dos 53 projetos agênticos rastreados são agentes de codificação; o n8n acumula 57 avisos de segurança, o Claude Code 22, o AutoGPT 15; apenas 37% das organizações têm política para detectar IA sombra.

**Os incidentes deixaram de ser teóricos.** EchoLeak (CVE-2025-32711, CVSS 9.3) exfiltrou dados do Microsoft 365 Copilot com um único e-mail, sem clique da vítima. O ShareLeak no Copilot Studio (CVE-2026-21520, CVSS 7.5) foi descoberto em 24 de novembro de 2025, confirmado pela Microsoft em 5 de dezembro, corrigido em 15 de janeiro de 2026 e divulgado em 15 de abril — e o padrão se repetiu no Agentforce da Salesforce (PipeLeak), sem CVE atribuído até a publicação. O diagnóstico é arquitetural, não de patch: o modelo não distingue instrução confiável de dado não confiável, e vira *confused deputy* a mando do atacante. Duas regras de projeto circulam como resposta: a **trifecta letal** de Simon Willison (dado privado + conteúdo não confiável + canal de saída = ferramenta de exfiltração) e a **Agents Rule of Two** da Meta (sem aprovação humana, um agente satisfaz no máximo dois dos três).

**O isolamento ficou barato, mas não grátis.** Firecracker sobe uma microVM com kernel próprio em cerca de 125 ms, com menos de 5 MiB de overhead por VM, e escala a até 150 VMs por segundo por host; gVisor intercepta syscalls em espaço de usuário com 10–30% de custo em E/S; Kata fica em torno de 200 ms; container comum compartilha kernel e não serve para código não confiável. A recomendação corrente para agente executando código não confiável é microVM ou Kata. Do lado da política, defesas fora do modelo (CaMeL, FIDES, Progent, RTBAS, FORGE) já mostram números: num teste do Progent sobre o AgentDojo com Qwen2.5-7B, a taxa de sucesso de ataque caiu de 25,8% para 4,2% — mas os próprios autores do estudo (25 de junho de 2026) advertem que **todas** essas defesas são validadas apenas em benchmarks estáticos, e que o ataque adaptativo otimizado permanece em aberto.

**A prova de humanidade entrou no circuito.** Em 17 de abril de 2026 o World anunciou o novo World ID "full-stack proof of human", com cerca de 18 milhões de pessoas verificadas em Orb em 160 países, *nullifiers* de uso único e uma camada de execução privada distribuída; e, antes disso, em 17 de março de 2026, o AgentKit em parceria com a Coinbase, que permite a um humano verificado **estender sua prova de humanidade ao próprio agente** — a plataforma pergunta "há um humano real por trás deste agente?" e recebe um sim com prova de conhecimento zero, sem saber quem.

**Comércio agêntico amarra identidade a dinheiro.** AP2 (Google, aberto, sobre W3C Verifiable Credentials), Mastercard Agent Pay (tokens agênticos) e Visa Trusted Agent Protocol (Verified Agent ID emitido pela Visa mais registro de consentimento assinado pelo emissor) usam identidade de agente como pré-requisito de pagamento, e o Web Bot Auth aparece como camada de autenticação sob os esquemas das bandeiras.

**Nota sobre o Brasil.** O país entra por dois trilhos distintos. No de pagamentos, os testes já são reais: o Banco do Brasil fez transação com a Visa em ambiente de produção controlado; Itaú, Santander, Dock e Pomelo participam dos testes da Mastercard desde março; a fintech Iniciador lançou um MCP de pagamentos agênticos sobre Pix. O Banco Central ainda não se pronunciou formalmente, e a expectativa relatada é de consulta pública em dois a três meses. O contraste de disposição é grande — 76% dos brasileiros declaram intenção de usar IA para comprar, contra 44% nos EUA, enquanto apenas 23% dizem confiar em IA generativa para transacionar em seu nome. No trilho regulatório, o PL 2338/2023 (marco legal da IA), aprovado no Senado em dezembro de 2024, aguarda votação na Câmara, e o desenho em discussão **não** trata agentes como sujeitos de direito: distribui responsabilidade civil entre os elos da cadeia. A ANPD incluiu IA e tecnologias emergentes entre os quatro eixos de fiscalização do biênio 2026-2027.

## 4. As disrupções-raiz

### Disrupção-raiz 1 — O agente vira principal de segurança: identidade própria, capacidade e prazo

**O que rompe.** Toda a infraestrutura de identidade da web pressupõe duas classes: pessoa (OAuth, senha, passkey) e serviço (chave de API, certificado, conta de serviço). O agente não é nenhuma das duas: age em nome de alguém, mas decide sozinho; é efêmero como um processo, mas atravessa sistemas como uma pessoa. Dar-lhe identidade própria rompe o modelo de delegação da web — a pergunta deixa de ser "quem é você?" e passa a ser "quem te mandou, até onde, por quanto tempo, e como provo isso depois".

**Por que agora e não há cinco anos.** Porque só em 2025-2026 o agente ganhou mãos: navega, preenche, compra, executa. Antes, a superfície era um chat. O gatilho mensurável é a inversão de tráfego de junho de 2026 e a chegada dos esquemas de pagamento — no momento em que um agente move dinheiro, o problema deixa de ser abuso de banda e vira liquidação financeira, com um emissor exigindo saber quem assinou.

**O que ainda falta.** Convergência. Hoje coexistem Web Bot Auth (borda da rede, quem bate na porta), Agent Auth Protocol (aplicação, capacidades), Cross App Access/MCP (empresa, agente entre SaaS), WIMSE/`draft-klrc-aiagent-auth` (carga de trabalho, IETF), Entra Agent ID e Okta Agent SSO (diretório corporativo) e os Verified Agent ID das bandeiras. Falta também o elo fraco apontado por quem acompanha a área: agentes sem dono declarado e sem data de validade, escopos de permissão "aspiracionais" que ninguém estreita de fato, e identidade de sessão que se perde quando passa por um intermediador de credenciais.

### Disrupção-raiz 2 — A contenção sai do modelo e vira arquitetura

**O que rompe.** A premissa de que segurança de IA se faz treinando o modelo para recusar. O setor passou a afirmar publicamente o contrário: o modelo será enganado, e o projeto deve garantir que, quando isso acontecer, nada importante quebre. Isso desloca o controle para fora: isolamento por tarefa, autorização determinística antes da chamada de ferramenta, política declarada fora do prompt, trilha de execução. Rompe porque inverte a responsabilidade — o alinhamento vira mitigação, não garantia — e porque mata uma classe inteira de funcionalidade vendida como conveniência (o agente que lê sua caixa de entrada, tem acesso aos seus dados e pode mandar mensagens para fora é, pela trifecta letal, uma ferramenta de exfiltração esperando um e-mail).

**Por que agora e não há cinco anos.** Duas condições se encontraram. Primeira: a evidência empírica acumulou o bastante para sair do plano da hipótese — CVEs com CVSS acima de 9 em produtos de massa, e uma lista OWASP que pela primeira vez pesa 6.639 incidentes reais. Segunda: o isolamento ficou barato. Uma microVM que sobe em ~125 ms com <5 MiB de overhead torna economicamente viável descartar o mundo inteiro depois de cada tarefa, o que era impensável quando a unidade de isolamento era uma VM de minutos.

**O que ainda falta.** Prova de que as defesas fora do modelo resistem a ataque adaptativo, e não apenas a benchmark estático — é exatamente a ressalva que os autores do estudo de junho de 2026 fazem sobre CaMeL, FIDES, Progent, RTBAS e FORGE. Falta também a linguagem de política: hoje quem escreve a regra do guardião é engenheiro de segurança; para virar padrão de produto, isso precisa caber numa interface.

### Disrupção-raiz 3 — A web se parte: leitura humana, leitura de agente, e uma porta entre elas

**O que rompe.** O contrato implícito da web aberta — uma página, um conteúdo, qualquer cliente. Quando bots são a maioria do tráfego e a razão entre rastreio e referência chega a 23.951 para 1, o veículo que vive de audiência humana não tem como manter a porta aberta do mesmo jeito. A resposta que se desenha não é bloqueio simples, é **discriminação por identidade**: humano passa; agente identificado e signatário passa, talvez pagando; agente anônimo não passa. Isso rompe o design de produto (duas interfaces, duas métricas), o modelo de receita (atenção × acesso) e o pressuposto de acesso universal.

**Por que agora e não há cinco anos.** Porque a verificação ficou possível. Bloquear por *user-agent* sempre foi teatro — a string é declarada pelo cliente. Assinatura Ed25519 com chave publicada muda a natureza da decisão: verificar em vez de inferir. E porque a prova de humanidade saiu do laboratório: 18 milhões de pessoas verificadas, e um mecanismo para o humano emprestar sua humanidade ao agente.

**O que ainda falta.** O lado de quem fica fora. A mesma estrutura que barra o raspador barra o agente de quem navega assistido, e a literatura de acessibilidade já registra o paradoxo: a estrutura semântica que agentes exigem é quase exatamente a que usuários de leitor de tela pedem há décadas e não receberam, mas a versão que está sendo construída para máquina (documentação achatada em texto corrido, `llms.txt`) descarta justamente a navegação — hierarquia de títulos, regiões de marco, texto de link descritivo — de que o leitor de tela depende. Entre julho de 2025 e janeiro de 2026, o número de sites bloqueando ativamente crawlers de IA foi cerca de sete vezes o dos que bloqueiam crawlers de busca tradicionais.

### Candidatos considerados e descartados por maturidade

O critério da skill — recusar o que já é padrão de mercado consolidado, amplamente adotado pelos líderes **e** sem debate técnico real sobre substituição no horizonte — eliminou, nesta rodada: **OAuth 2.0/2.1 com PKCE** e **JWT** (são o substrato que os esquemas de agente estendem, não o que rompe); **mTLS e PKI X.509** (idem, aparecem no draft IETF como peça reaproveitada); **TLS**, **WAF**, **rate limiting** e **RBAC** (infraestrutura estabelecida); **CAPTCHA** (maduro e, pior, já vencido — não rompe nada porque está sendo desmontado, não construído); **`robots.txt`** (convenção antiga, sem força, cujo debate atual é justamente substituí-la por assinatura); **containers Docker** (padrão consolidado; o que é emergente é a microVM por tarefa, não o contêiner); **filtros de moderação embutidos no modelo** (padrão em todo produto de massa desde 2023); e o **Model Context Protocol em si** (em setembro de 2026 já é substrato comum de produto — o emergente é a camada de autorização empresarial que se pendurou nele, o Cross App Access, não o MCP). Aplicando o segundo filtro pedido no enunciado — "só melhora o que existe, não rompe" — descartei ainda **EDR/antivírus com assinatura para IA**, **DLP clássico** e **gateways de API com política estática**: melhoram o incumbente sem mudar quem manda.

Registro um descarte de fronteira, porque ele quase entrou: **passkeys/WebAuthn**. É emergente pelo critério da skill, e foi disrupção-raiz aceita na rodada de teste desta mesma skill (tema de autenticação sem terceiros). Aqui foi descartado por **escopo, não por maturidade**: trata de identidade humana, que é o tema 17 da disciplina, e o objeto deste mapa é a máquina que age. Ele reaparece de lado em `e5`, como âncora da prova de humanidade que o agente herda.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O agente vira principal de segurança, com identidade criptográfica, capacidades e prazo próprios
    efeitos:
      - id: e1
        ordem: 1
        efeito: Toda requisição de agente passa a carregar identidade verificável e a cadeia de delegação que a autoriza
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O consentimento deixa de ser um diálogo modal e vira um cofre de permissões concedidas a agentes, com escopo e validade visíveis
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A conta pessoal deixa de representar um usuário e passa a representar um usuário mais a frota de delegados que agem por ele
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A trilha de execução do agente vira exigência contratual e regulatória em setores supervisionados, antes de virar boa prática geral
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Seguradoras precificam risco de automação lendo a trilha de chamadas de ferramenta do agente, e a apólice passa a condicionar quais ações ele pode executar sozinho
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Sites e APIs passam a discriminar por identidade de agente, escolhendo entre barrar, tarifar ou privilegiar cada categoria de cliente
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Forma-se um mercado de parecer humano, com evasão de detecção vendida como recurso e reputação de agente comprada em vez de construída
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Quem depende de agente por necessidade de acessibilidade fica do lado errado da porta, e a exclusão vira matéria de litígio antes de virar matéria de norma
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Produtos passam a manter duas interfaces do mesmo serviço, uma para pessoa e outra contratada, versionada e paga para agente
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O design de produto se divide em duas disciplinas com métricas incompatíveis, conversão de pessoa e taxa de conclusão de tarefa de agente
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A contenção sai do modelo e vira arquitetura, sob a premissa de que o modelo será enganado
    efeitos:
      - id: e3
        ordem: 1
        efeito: O isolamento por tarefa, com mundo descartável a cada execução, vira o padrão de qualquer agente que toca código ou dado real
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O custo de desfazer cai o bastante para a interação com agente virar exploratória, com ramificação, descarte e comparação de tentativas paralelas
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A unidade de trabalho criativo deixa de ser o arquivo e passa a ser o ramo de execução, e ferramentas de mídia passam a versionar mundos inteiros em vez de documentos
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A autorização determinística antes da ação substitui o pedido de confirmação ao usuário como padrão de interação com agentes
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Escrever a política do próprio guardião vira alfabetização digital comum, no lugar de clicar em permitir
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: A trifecta letal vira regra de projeto explícita, e funcionalidades que combinam dado privado, conteúdo não confiável e canal de saída deixam de ser vendidas sem supervisão
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Produtos de mídia e produtividade perdem conveniências já lançadas ou as reempacotam sob aprovação humana obrigatória, e a regressão é sentida como defeito pelo usuário
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A supervisão humana obrigatória vira trabalho remunerado de baixa qualificação, e nasce uma camada de operadores que aprovam ações de agente em escala
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A web se parte em leitura humana e leitura de agente, com uma porta que cobra, barra ou privilegia
    efeitos:
      - id: e5
        ordem: 1
        efeito: A prova de humanidade vira credencial cotidiana em plataformas de conteúdo, comércio e serviço público
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O agente deixa de ser anônimo e passa a herdar a humanidade verificada do dono, trocando identidade própria por identidade emprestada
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A reputação do agente e a da pessoa se fundem, um erro do delegado mancha o histórico do delegante, e surge demanda por portabilidade e por falência reputacional
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Conteúdo e serviço passam a ter preço diferente conforme quem consome, pessoa, agente identificado ou agente anônimo
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: A economia da atenção se descola da economia do acesso, e veículos de mídia passam a ter duas receitas com incentivos opostos sobre o mesmo conteúdo
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

Em prosa, quatro coisas que o bloco não diz.

**A cadeia continuaria.** O corte em três ordens é do formato, não do fenômeno. `e5.1.1` (reputação fundida) puxa naturalmente um quarto nível — mercado secundário de identidades limpas, herança de reputação entre agentes, arbitragem de jurisdição — e `e1.2.1` (seguro por trilha) puxa outro: se a apólice condiciona o que o agente pode fazer, **a seguradora vira reguladora de fato**, definindo por contrato privado o limite de autonomia que a lei ainda não definiu. Registro os dois como continuações plausíveis, e paro aqui, conforme o critério de parada da skill.

**As três disrupções brigam entre si.** A 1 quer que o agente tenha identidade própria; a 3 quer que ele empreste a de um humano. São soluções opostas para o mesmo problema de confiança, e o resultado provável não é a vitória de uma, é a coexistência ruim: o agente carrega ao mesmo tempo um identificador de fabricante, uma delegação do usuário e uma prova de que há gente por trás — três credenciais para atravessar uma porta, cada uma emitida por quem tem interesse diferente no que acontece depois.

**O efeito mais desconfortável do mapa é `e2.1.1`.** Ele não decorre de má intenção de ninguém: decorre de a porta funcionar. Quanto melhor a verificação de agente, mais caro fica ser um agente legítimo não credenciado — e o agente de acessibilidade de uma pessoa, rodando na máquina dela, é exatamente isso.

**Os prazos estão todos dentro de 2031.** Foi escolha deliberada, e é preciso dizer o que ela custa: alguns efeitos de terceira ordem — sobretudo `e1.2.1`, `e5.1.1` e `e3.1.1` — provavelmente só se **consolidam** depois do horizonte pedido. O que datei em 2031 é o momento em que o sinal fica observável, não o momento em que o efeito está maduro. A rodada de teste desta mesma skill errou exatamente aqui, no sentido inverso (ver seção 8).

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — o agente com CNPJ.** O Agent Auth Protocol dá ao agente keypair, ciclo de vida e capacidades próprias; o Verified Agent ID da Visa dá a ele um identificador emitido por uma instituição financeira. Nenhum dos dois chama isso de personalidade, e o desenho brasileiro do PL 2338 nega explicitamente que agentes sejam sujeitos de direito. Mas "entidade com identificador emitido por terceiro, escopo de atuação declarado e trilha auditável" é a descrição funcional de uma pessoa jurídica. O sinal fraco é a distância curta entre a infraestrutura já construída e a figura jurídica que ninguém quer criar.

**Sinal fraco 2 — a inversão do CAPTCHA.** Todo o aparato de verificação foi construído para provar que há um humano. Com prova de humanidade transferível ao agente e assinatura criptográfica do agente, o teste mais barato passa a ser o inverso: provar que **não** há humano — que o cliente é a máquina declarada, no escopo declarado. Quando o caminho fácil for o do agente credenciado e o difícil for o do humano sem credencial, a hierarquia de acesso da web se inverte silenciosamente.

**Sinal fraco 3 — a regressão como recurso.** `e4.1` prevê perda de funcionalidade por decisão de segurança. Já há forma embrionária disso quando um fornecedor corrige uma injeção e a exfiltração continua possível por outro caminho, levando o produto a restringir o que o agente pode alcançar. Se isso virar padrão, o setor vai precisar de vocabulário de marketing para vender menos capacidade como mais segurança — e quem projeta interação vai ter que desenhar a explicação dessa perda.

**Wildcard 1 (baixa probabilidade, alto impacto) — o primeiro processo contra o agente, não contra o dono.** Hoje a doutrina caminha na direção contrária: a legislação da Califórnia que entrou em vigor em 2026 impede que o réu alegue que "a IA agiu sozinha" como defesa, e a análise jurídica corrente é que a responsabilidade corre para a empresa e suas pessoas. O wildcard é uma jurisdição — provavelmente pequena, buscando atrair operação de agentes — criar uma figura de responsabilidade limitada para o agente, com capital próprio e seguro obrigatório. Isso transformaria `e1.2.1` de nota de rodapé em eixo do mapa, e mudaria a pergunta de design de "como peço permissão" para "com quem estou contratando".

**Wildcard 2 — um incidente de escala nacional causado por agente credenciado.** A cadeia já existe: assinatura verificável dá **mais** acesso ao agente, não menos, e a comprometida de uma chave de fabricante entrega um passe verificado a um atacante. Um evento assim, num sistema de pagamento instantâneo, produziria a regulação de agentes de uma vez — e provavelmente na forma mais dura: autorização prévia por ação, com limite de valor e carência.

**Wildcard 3 — a convergência acontecer rápido.** O mapa aposta em fragmentação. Se AP2, Web Bot Auth e Cross App Access convergirem num único perfil interoperável até 2028 — por pressão dos emissores de cartão, que têm poder de barganha e pressa —, os efeitos de segunda ordem chegam dois a três anos antes do que está datado aqui, e `e2.2` (interface dupla) passa a ser piso de mercado em vez de diferencial.

## 7. Contra o próprio mapa

Esta seção é a Etapa 4 da skill. Ela é auditável: cada rebaixamento traz o valor original.

**Rebaixamento 1 — `e1`, de `alta` para `media`.** Gerado com confiança alta por ter sinal forte e infraestrutura já em produção (Cloudflare, Okta, Microsoft, bandeiras). Derrubado pelo teste "assume taxa de adoção sem precedente observável": padrões de identidade levam uma década, não dois anos — SAML, OAuth 2.0 e OIDC levaram esse tempo, e nenhum deles tinha cinco esquemas concorrentes com modelos de negócio conflitantes disputando a mesma camada. Há força contrária concreta: o interesse do fabricante de agente é ser reconhecido; o interesse do site é cobrar; o interesse do emissor é liquidar. Rebaixado.

**Rebaixamento 2 — `e3`, de `alta` para `media`.** Gerado com confiança alta porque os números de isolamento são reais e favoráveis (~125 ms, <5 MiB). Derrubado por custo: `<5 MiB` é o overhead do monitor de máquina virtual, não o custo total de uma sessão de agente com dependências, imagem e estado; um mundo descartável por tarefa multiplica armazenamento e tráfego de preparação. Quem roda agente em escala tem incentivo econômico direto para reaproveitar ambiente — e reaproveitar é exatamente o que quebra a garantia. Rebaixado.

**Rebaixamento 3 — `e4`, de `forte`/`alta` para `medio`/`media`.** Gerado com sinal forte por causa da adesão discursiva ao princípio da trifecta letal e à Rule of Two. Derrubado porque **discurso não é prática medida**: não encontrei evidência de que algum produto de massa tenha removido funcionalidade por essa regra; o que encontrei foi o padrão inverso — corrigir a injeção específica e manter a arquitetura. Rebaixado em sinal e em confiança.

**Qual efeito é só extrapolação linear do presente.** `e2` (discriminação por identidade de agente). Ele é, honestamente, o presente com mais um ano: a Cloudflare já bloqueia por padrão, já cobra por rastreio, já classifica agente assinado. Chamá-lo de efeito de primeira ordem é quase trapaça — mantive porque o que **não** é extrapolação é a consequência de segunda ordem (interface dupla, mercado de evasão), e sem o elo de primeira a cadeia não fecha.

**Qual disrupção pode simplesmente não se concretizar.** A 3, na forma prevista. Se os esquemas de pagamento absorverem a verificação de agente — o agente se identifica ao emissor, e o site confia no emissor —, a porta deixa de ser uma decisão de cada site e vira uma decisão de quatro ou cinco intermediários financeiros. Nesse mundo, `e5.2` (preço por tipo de cliente) some, `e2.1` (mercado de parecer humano) encolhe, e o mapa perde um terço. O sinal precoce disso seria a Visa ou a Mastercard publicarem um perfil de verificação de agente que sites não-comerciais adotem por conveniência.

**Onde o mapa pode estar simplesmente errado de premissa.** Assumi que "identidade de agente" e "prova de humanidade" são respostas concorrentes ao mesmo problema. Pode ser que sejam camadas complementares sem tensão nenhuma, e aí a leitura de `e5.1` como "identidade emprestada em vez de própria" perde sentido — vira só "as duas coisas juntas", sem o conflito que sustenta `e5.1.1`.

**Que viés entrou aqui.** Dois, e nenhum deles é gosto pelo tema.

Primeiro, o **viés de fonte**: quem publica sobre identidade de agente hoje é, em maioria, quem vende identidade de agente. Cloudflare, Okta, Better Auth, World, Visa e Mastercard são fontes interessadas, e os números de adoção que elas divulgam são exatamente os números que as favorecem. Compensei parcialmente com as fontes independentes (OWASP, IETF, arXiv, imprensa especializada), mas o mapa inteiro está inclinado para o lado de quem constrói a solução — inclusive porque **a resistência a essa infraestrutura quase não tem quem a publique**.

Segundo, o viés do próprio pedido: a entrevista foi respondida por terceiro, não pelo autor da skill (seção 2). O recorte "quem projeta mídia e interação" e o horizonte 2031 vieram prontos, e isso empurrou o mapa para efeitos de interface e economia de acesso, em detrimento de efeitos internos de engenharia — supply chain de servidores MCP, por exemplo, aparece nas fontes com CVE crítico e ficou de fora da roda por escolha de recorte, não por irrelevância.

**O que me faria mudar de ideia**, conforme declarado na entrevista: evidência de que a adoção já passou da maioria inicial de Rogers — o que, para identidade de agente, significaria um perfil único interoperável aceito pelos três maiores fabricantes de agente **e** pelos três maiores intermediários de tráfego, com número público de requisições assinadas. Não existe hoje: o que existe é uma lista de cinco parceiros iniciais de um programa de uma empresa. E evidência de que a tecnologia não rompe nada: seria o caso se identidade de agente virasse apenas mais um cabeçalho HTTP administrado pelos mesmos provedores de identidade de hoje, sem nova figura de delegação — possível, e é o que o draft do IETF, ao reaproveitar deliberadamente OAuth e X.509 em vez de criar protocolo novo, torna mais provável do que eu gostaria de admitir.

## 8. O que a máquina errou

**Erro 1 — atribuição de caso que a fonte primária não confirma.** Um resultado de busca afirmava que "no outono de 2025 a Amazon detectou o navegador Comet, da Perplexity, entrando em contas de clientes e comprando; quando a Amazon bloqueou, a Perplexity atualizou o navegador para evadir a detecção". O caso é perfeito para `e2.1` (mercado de parecer humano) e eu o teria usado nominalmente. Ao abrir a análise da Baker McKenzie, ela descreve apenas "um caso de teste inicial em que um grande marketplace processou um desenvolvedor de agente de IA", **sem nomear as partes**. Ou seja: o resumo de busca era mais específico do que a fonte que consegui abrir. Mantive a ideia no mapa, retirei os nomes, e registro aqui a diferença — é exatamente o tipo de detalhe que passa batido porque soa plausível.

**Erro 2 — confusão entre dois números com o mesmo "150".** Uma fonte secundária dizia que o Firecracker "sobe uma microVM em menos de 150 ms"; outra, que ele faz "até 150 VMs por segundo por host". Escrevi a primeira versão desta seção 3 tratando os dois como o mesmo fato. São coisas diferentes — latência de arranque e vazão de criação — e o número exato de boot na fonte que abri é ~125 ms. Corrigido antes de fechar o documento, mas o erro é instrutivo: dois números coincidentes em algarismo são a forma mais fácil de uma cadeia de citação se corromper.

**Erro 3 — fonte oficial que não sustenta o que eu ia atribuir a ela.** A página oficial do OWASP GenAI sobre o Top 10 de 2026 **não lista** as dez categorias nem detalha a metodologia no que está publicado em HTML; o detalhamento (6.639 incidentes, peso 75/25, mudanças de posição, renomeação de *System Prompt Leakage*) vem da cobertura da Help Net Security, que é imprensa especializada, não a fonte primária. Não abri o PDF do relatório. Todos esses números, portanto, estão neste documento com **uma camada de intermediação**, e não como leitura direta do OWASP.

**Erro 4 — PDF que não rendeu.** Tentei usar o artigo "Towards an Agent-First Web: Redesigning the Web for AI Agents" (arXiv 2606.19116) como sustentação para a disrupção 3. A extração do PDF devolveu título, autores e data, mas nenhum conteúdo legível sobre identidade, bloqueio ou economia. Não citei nada dele além do que consegui ler, e ele está na seção 11 com essa ressalva explícita — em vez de virar uma referência que decora o argumento sem sustentá-lo.

**Erro 5 — datas de disponibilidade geral não verificadas na origem.** "Okta Agent SSO em GA em 24 de agosto de 2026" e "Microsoft Entra Agent ID em GA desde abril de 2026" vêm de um blog de terceiro (startwithidentity) e de resumo de busca. Não abri o anúncio da Okta nem o da Microsoft. São plausíveis e coerentes com o resto, mas estão aqui como **fonte secundária não confirmada na origem**, e é assim que aparecem na seção 11.

**Erro 6, que é da skill e não desta rodada.** O `DUVIDAS.md` do autor registra que, na rodada de teste, quatro efeitos de terceira ordem receberam prazo além do horizonte pedido, sem aviso. O `SKILL.md` **não** foi corrigido para checar isso — o autor decidiu manter a skill fiel ao que aconteceu. Executei a skill como ela está, e a checagem não é etapa dela; por escolha minha, mantive todos os prazos dentro de 2031 e declarei em prosa, na seção 5, quais efeitos provavelmente só se consolidam depois. Registro para que fique claro o que veio da skill e o que veio de quem a executou.

## 9. Três cenários para 2031

**Provável.** Chegamos a 2031 com três credenciais empilhadas e nenhuma vencedora. O agente que abre uma página carrega assinatura de fabricante na borda da rede, token de delegação do usuário na aplicação e, em serviço financeiro, uma prova de que há gente por trás. Ninguém unificou porque ninguém quis: cada camada é receita de alguém. O usuário comum não vê nada disso, a não ser numa tela nova que se tornou rotina — o painel onde ele concede, revoga e vê o que seus delegados fizeram, herdeiro direto da tela de permissões do celular e tão pouco lido quanto ela. Sites grandes têm duas versões: a página e o contrato de acesso para agente, com preço. Sites pequenos não têm nada e são raspados como sempre foram. O isolamento por tarefa virou invisível — ninguém fala em microVM, do mesmo jeito que ninguém fala em TLS. A trifecta letal virou lista de verificação de conformidade, cumprida no papel, e continuam saindo CVEs de exfiltração por agente todo trimestre, agora tratados como rotina e não como escândalo. No Brasil, pagamento agêntico sobre Pix está regulado, com limite de valor e carência, e o marco legal da IA — aprovado em algum momento entre 2026 e 2028 — confirmou que agente não é sujeito de direito, deixando a responsabilidade na cadeia.

**Desejável.** A porta existe, e existe com contrapartida. O mesmo esforço que tornou a web legível por agente tornou-a navegável por leitor de tela, porque em algum momento entre 2027 e 2029 alguém notou que estava construindo duas vezes a mesma estrutura semântica e que só uma delas tinha trinta anos de norma por trás. Credencial de agente é gratuita e emitida por qualquer um, não só por três fabricantes: o agente que roda na máquina de uma pessoa se identifica com a mesma força técnica de um que roda numa nuvem bilionária, e a porta decide por escopo declarado, não por quem assina. A permissão virou legível: existe uma linguagem de política simples o bastante para caber numa interface e forte o bastante para ser aplicada fora do modelo, e escrevê-la é tão comum quanto configurar uma regra de caixa de entrada. Para chegar aqui foi preciso uma coisa concreta e nada garantida: que o perfil de verificação de agente fosse padronizado em corpo aberto — IETF, W3C — antes de ser padronizado de fato por quem controla a borda da rede.

**Indesejável.** A verificação funcionou bem demais, e virou credenciamento. Quatro entidades decidem quais agentes existem; ser um agente não credenciado é ser tratado como ataque. O mercado de parecer humano é grande, profissional e legal em algumas jurisdições, e quem o usa não é o fraudador — é o desenvolvedor independente, o pesquisador e a pessoa cega cujo agente de navegação não tem fabricante para assiná-lo. Reputação de agente e de pessoa se fundiram: um agente que errou deixa marca no histórico do dono, sem processo, sem recurso e sem prazo de esquecimento, porque ninguém regulou o que nunca foi declarado como cadastro. Do outro lado, a contenção não acompanhou: como a credencial passou a valer como confiança, o agente verificado recebe **mais** acesso e menos isolamento, e a primeira comprometida séria de chave de fabricante distribui um passe legítimo a um atacante em escala nacional. O sinal precoce deste cenário é específico e observável desde já: **o dia em que uma plataforma relevante passar a exigir que o agente seja de fabricante reconhecido, e não apenas que seja identificável.** Emissão fechada é a diferença entre uma porta e um clube.

## 10. O experimento

**O que é.** *A Portaria* — uma página web única, feita para ser atravessada em sala, que trata três classes de visitante de três formas diferentes e mostra, na própria tela, por que decidiu o que decidiu.

- **Humano** (sem assinatura, com sinais de navegador): recebe a página inteira.
- **Agente identificado** (requisição com assinatura HTTP no modelo do Web Bot Auth — chave Ed25519 publicada num `.well-known` do próprio aluno — ou com um JWT de capacidade no modelo do Agent Auth Protocol): recebe uma versão estruturada, com um preço simbólico por requisição e um teto de chamadas.
- **Agente anônimo** (declara-se agente, ou é detectado como tal, sem assinatura verificável): recebe a porta fechada, com a razão explicitada.

Um painel ao vivo mostra, para cada tentativa: o que a portaria viu, o que ela inferiu, o que ela verificou, e o que decidiu. É esse painel — e não o bloqueio — que é o objeto de design.

**Que pergunta sobre o futuro ele ajuda a responder.** Três, todas de primeira e segunda ordem do mapa: (a) `e2` — é possível, hoje, com esforço de uma tarde, distinguir agente verificado de agente anônimo de forma que não seja teatro? (b) `e2.1` — quanto custa **parecer humano**? A turma vai medir isso diretamente: quantos minutos leva para um aluno fazer seu agente atravessar a portaria sem se declarar. (c) `e2.1.1` — quem fica de fora? A turma vai descobrir que o agente mais fácil de barrar é o de quem não tem fabricante para assiná-lo.

**Que tecnologia emergente ele usa, e por que não dá com tecnologia madura.** Assinatura de mensagem HTTP (RFC 9421) com chave publicada e verificação do lado do servidor, e/ou um JWT de capacidade de vida curta no formato do Agent Auth Protocol. Com tecnologia madura não dá: a alternativa madura é olhar a string de *user-agent*, o endereço IP e o CAPTCHA — os três **declarados ou inferidos**, nenhum verificado. É exatamente essa a diferença que o experimento existe para tornar tangível: a portaria madura pode ser vencida escrevendo uma palavra diferente num cabeçalho; a portaria emergente exige uma chave privada. Um aluno vai provar isso em dois minutos na primeira e falhar na segunda — e essa assimetria, sentida na mão, é a aula.

**O que a turma faz quando testar isso em sala.** Cada pessoa chega com o agente que já usa (assistente de navegador, agente de linha de comando, script). Rodada 1: atravessar de qualquer jeito. Rodada 2: atravessar **identificado**, gerando o par de chaves e publicando a chave pública. Rodada 3, a que interessa: cada um escreve, em uma frase, a regra que colocaria na portaria se fosse dono do site — e as regras da turma são aplicadas de verdade, uma a uma, com todo mundo tentando entrar de novo. A discussão sai sozinha quando a regra de alguém barra o agente de outra pessoa por um motivo que ninguém tinha previsto.

**O que seria um resultado que me faria mudar de ideia.** Se, na rodada 2, a maioria da turma conseguir se identificar em menos de dez minutos com ferramenta de prateleira, então a fricção de credenciamento é baixa, o efeito `e2.1` (mercado de parecer humano) perde força — porque ninguém paga para evadir o que é fácil cumprir —, e a disrupção 3 caminha para o cenário desejável, não para o indesejável. Se, ao contrário, ninguém conseguir sem ajuda, o custo de ser um agente legítimo não-corporativo é a variável central do mapa, e `e2.1.1` sobe de sinal fraco para médio.

## 11. Fontes

Todas as fontes abaixo foram **abertas e lidas** nesta rodada. Buscas cujos resultados não foram abertos não viraram fonte — o que elas sugeriram e não foi confirmado está na seção 12.

1. Cloudflare — "The age of agents: cryptographically recognizing agent traffic" · `https://blog.cloudflare.com/signed-agents/` — sustenta: Web Bot Auth, RFC 9421, assinatura Ed25519, `.well-known`, data de anúncio (maio/2025) e a lista de parceiros iniciais (ChatGPT agent, Goose, Browserbase, Anchor Browser). Confiabilidade **média-alta**: é fonte primária sobre o próprio produto, portanto exata nos fatos técnicos e interessada na leitura de que o problema se resolve com o produto dela.

2. IETF — `draft-klrc-aiagent-auth-03`, "AI Agent Authentication and Authorization" · `https://datatracker.ietf.org/doc/draft-klrc-aiagent-auth/` — sustenta: a existência de esforço de padronização em curso (grupo WIMSE), a data (6/7/2026), os autores, e a tese central de reaproveitar OAuth 2.0, WIMSE/SPIFFE e X.509 em vez de criar protocolo novo. Confiabilidade **alta** para o que o documento propõe, **nenhuma** para adoção — um draft não é um padrão, e a maioria morre.

3. OWASP GenAI Security Project — "OWASP GenAI LLM Top 10 2026" · `https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/` — sustenta: a existência e a data da edição 2026 (3/8/2026) e o mapeamento para o Top 10 agêntico. Confiabilidade **alta**, utilidade **baixa**: a página não lista as categorias nem a metodologia (ver seção 8, erro 3).

4. Help Net Security — "OWASP 2026 LLM Top 10: 'The model will be fooled'" (6/8/2026) · `https://www.helpnetsecurity.com/2026/08/06/owasp-2026-llm-top-10-released/` — sustenta: mudanças de posição (Excessive Agency para 3º), renomeação para *Hidden Context Exposure*, os 6.639 incidentes e o peso 75/25, e a citação-chave sobre construir o sistema ao redor do modelo. Confiabilidade **média-alta**: imprensa especializada confiável, mas é **intermediação** do documento primário, que não foi lido.

5. Help Net Security — "Prompt injection still drives most agentic AI security failures in production" (11/6/2026) · `https://www.helpnetsecurity.com/2026/06/11/owasp-prompt-injection-ai-security-failures/` — sustenta: o relatório *State of Agentic AI Security and Governance* 2.01, os números por projeto (28/53 agentes de codificação; n8n 57 avisos, Claude Code 22, AutoGPT 15), os 37% com política contra IA sombra, a trifecta letal e a Rule of Two, e as falhas de cadeia de suprimentos (CVE-2025-6514 em servidor MCP; backdoor em LiteLLM). Confiabilidade **média-alta**, mesma ressalva de intermediação.

6. VentureBeat — "Microsoft patched a Copilot Studio prompt injection. The data exfiltrated anyway" · `https://venturebeat.com/security/microsoft-salesforce-copilot-agentforce-prompt-injection-cve-agent-remediation-playbook` — sustenta: ShareLeak (CVE-2026-21520, CVSS 7.5) com a linha do tempo completa (descoberta 24/11/2025, confirmação 5/12/2025, patch 15/1/2026, divulgação 15/4/2026), PipeLeak no Agentforce sem CVE, e as citações de especialistas sobre *confused deputy* e segurança em tempo de execução. Confiabilidade **média-alta**: reportagem com fontes nomeadas, sendo que a descobridora (Capsule Security) vende a solução que o texto recomenda.

7. arXiv 2606.26479 — "Adaptive Evaluation of Out-of-Band Defenses Against Prompt Injection in LLM Agents" (25/6/2026) · `https://arxiv.org/abs/2606.26479` — sustenta: a lista de defesas fora do modelo (CaMeL, FIDES, Progent, RTBAS, FORGE), os números do Progent sobre AgentDojo com Qwen2.5-7B (25,8% → 4,2%; 2,6% com ataque adaptativo artesanal) e, sobretudo, a **ressalva dos próprios autores** de que todas são validadas só em benchmark estático. Confiabilidade **alta** e uso deliberado: é a fonte que enfraquece o otimismo do mapa, não a que o reforça.

8. Northflank — "How to sandbox AI agents in 2026: MicroVMs, gVisor & isolation strategies" · `https://northflank.com/blog/how-to-sandbox-ai-agents` — sustenta: comparação de isolamento e os números (~125 ms de boot e <5 MiB por microVM Firecracker, até 150 VMs/s por host; gVisor com 10–30% de custo em E/S; Kata ~200 ms). Confiabilidade **média**: os números batem com a documentação conhecida do Firecracker, mas é conteúdo de fornecedor de plataforma; não conferi contra a fonte oficial do projeto.

9. Better Auth — "Agent Auth Protocol, Specification v1.0-draft" · `https://agent-auth-protocol.com/specification` — sustenta: keypair EdDSA/Ed25519 por agente, capacidade como unidade de autorização com restrições de entrada, JWT de agente com validade de até 60 s, e descoberta em `GET /.well-known/agent-configuration`. Confiabilidade **alta** para o desenho, **baixa** para relevância: a própria especificação não declara nenhuma adoção além da implementação de quem a escreveu.

10. Start With Identity — "AI Agent Identity Standards 2026: Cross App Access, MCP, and What Is Still Missing" · `https://startwithidentity.com/blog/agent-identity-gets-a-protocol/` — sustenta: Cross App Access como extensão OAuth adotada pelo MCP, Okta Agent SSO em GA (24/8/2026), Entra Agent ID em GA, e as quatro falhas operacionais (entrada não confiável virando executável em runner com credenciais; identidade de sessão perdida em intermediário; agentes sem dono e sem validade; escopos aspiracionais). Confiabilidade **média**: blog de terceiro, não conferido contra os anúncios oficiais (ver seção 8, erro 5).

11. WorkOS — "AI agents now make up the majority of web traffic" · `https://workos.com/blog/ai-agent-web-traffic-what-developers-need-to-change` — sustenta: 57,5% × 42,5% em 3/6/2026 segundo o Cloudflare Radar, o crescimento de 7.851% do tráfego agêntico atribuído à HUMAN Security, e as razões rastreio/referência (ClaudeBot ~23.951:1, Perplexity ~111:1, Google ~4,9:1). Confiabilidade **média**: repassa números de terceiros (Cloudflare, HUMAN) que não conferi na origem, e é fornecedor de autenticação — interessado na conclusão.

12. Tech Policy Press — "The Web Is Being Made Accessible for AI, Not People" · `https://www.techpolicy.press/the-web-is-being-made-accessible-for-ai-not-people/` — sustenta: o paradoxo de acessibilidade, a divergência entre o que o agente precisa e o que o leitor de tela precisa (hierarquia de títulos, regiões de marco, texto de link descritivo), o problema do `llms.txt`, o estudo com falhas de acessibilidade em mais de 95% do primeiro milhão de sites, e o conceito de *ramping automation effect*. Confiabilidade **alta** para o argumento; é análise com posição declarada, e a adotei como contraponto ao otimismo dos fornecedores.

13. World — "World ID Full-Stack Proof of Human" (17/4/2026) · `https://world.org/blog/announcements/world-id-full-stack-proof-of-human` — sustenta: cerca de 18 milhões de pessoas verificadas em Orb em 160 países, *nullifiers* de uso único, continuidade humana, e o AgentKit dando prova de humanidade ao agente. Confiabilidade **baixa-média**: é material institucional de uma empresa com modelo de negócio controverso (verificação biométrica de íris), e os números de verificados são autodeclarados. Usada como sinal de **existência do mecanismo**, não como prova de adoção.

14. Finsiders Brasil — "Pagamentos por IA ganham força e colocam BC sob pressão" · `https://finsidersbrasil.com.br/tecnologia-para-fintechs/pagamentos-por-ia-ganham-forca-e-colocam-bc-sob-pressao/` — sustenta a nota sobre o Brasil: Banco do Brasil com Visa em produção controlada; Itaú, Santander, Dock e Pomelo nos testes da Mastercard desde março; Iniciador com MCP de pagamento agêntico sobre Pix; ausência de pronunciamento formal do BC e expectativa de consulta pública; 76% de brasileiros com intenção de comprar via IA contra 44% nos EUA, e 23% de confiança declarada. Confiabilidade **média**: imprensa setorial, e as duas pesquisas de opinião não têm ficha técnica no texto — trato os percentuais como ordem de grandeza, não como medida.

15. Baker McKenzie — "United States: Legal Accountability for AI Agents" (6/2026) · `https://www.bakermckenzie.com/en/insight/publications/2026/06/united-states-legal-accountability-for-ai-agents` — sustenta: a responsabilidade recai sobre a empresa e suas pessoas; a lei da Califórnia que impede alegar autonomia da IA como defesa; e a existência de um caso inicial de marketplace contra desenvolvedor de agente, **sem nomes**. Confiabilidade **alta** para a doutrina, e foi ela que **derrubou** uma atribuição nominal que eu teria feito (seção 8, erro 1).

16. arXiv 2606.16465 — "When Agent Automation Becomes Profitable: Quantifying and Insuring Autonomous AI Risk through Trace-Economic Underwriting" (15/6/2026; v2 em 11/8/2026) · `https://arxiv.org/abs/2606.16465` — sustenta `e1.2.1`: precificação de risco de agente a partir da trilha de uso de ferramentas, com erro médio de precificação caindo de US$ 17.700 para US$ 569, 295 de 300 rótulos aceitos em auditoria e redução de 72% no CVaR95 em 1.000 trilhas do SWE-smith. Confiabilidade **média-alta** como prova de que a ideia está formalizada e é executável; **nenhuma** como prova de que o mercado segurador a adotou.

17. arXiv 2606.19116 — "Towards an Agent-First Web: Redesigning the Web for AI Agents" (6/2026) · `https://arxiv.org/pdf/2606.19116` — **fonte aberta mas não aproveitada**: a extração devolveu título, autores (Eranga Bandara, Ross Gore, Ravi Mukkamala, Asanga Gunaratna, Safdar H. Bouk e outros) e data, sem conteúdo legível sobre identidade, bloqueio ou economia. Está listada por honestidade de percurso — sustenta apenas que o tema "redesenhar a web para agentes" é objeto de pesquisa formal em 2026, e **nada além disso**.

### Nota de verificação dos links

Rodei a checagem de links prescrita pelo formato da disciplina. Quinze dos dezessete responderam 200. Duas
recusaram o cliente automatizado: a reportagem do VentureBeat (fonte 6) devolveu **429**, e a análise da Baker
McKenzie (fonte 15) devolveu **403** — ambas haviam sido abertas e lidas normalmente antes, pelo mesmo
processo, minutos antes. Registro porque é o próprio objeto do mapa acontecendo no rodapé dele: a fonte que
explica quem responde pelos atos de um agente é uma das duas que fecham a porta para agentes. Nenhum link está
quebrado; o que há é discriminação por cliente, que é precisamente `e2`.

## 12. Anexo — o levantamento bruto

### A entrevista, literal

A skill (Etapa 1) faz cinco perguntas e espera resposta antes de gerar qualquer coisa. Nesta rodada não havia usuário: as respostas vieram no enunciado que invocou a skill, escrito pelo operador da rodada. Reproduzo o trecho literal:

> - Tema: "Contenção, segurança e identidade de agentes autônomos" (tema 2 de 19 da disciplina; família "Agentes").
> - Horizonte: 2031. Público: quem projeta mídia e interação. Recorte: global, com uma nota sobre o Brasil.
> - Descartado de início: o que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão.
> - Disrupção suspeita: nenhuma — descubra. Viés: neutro. Ideias óbvias a excluir: as que servem para qualquer tema.
> - O que me faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a
>   tecnologia não rompe nada (só melhora o que existe).
> - Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
> - Zona de interesse do autor: "Agentes". Login do autor: jcsc. Skill usada: futurizacao-jcsc.
> - Busca na web: use WebSearch e WebFetch de verdade; só cite o que abriu. Não invente fontes.
> - Não faça perguntas de volta. Não pare para pedir confirmação. Se algo não estiver definido, assuma e declare.

**Nenhuma das cinco perguntas ficou sem resposta.** Nenhuma foi respondida "tanto faz". Mas todas foram respondidas por terceiro, e isso está declarado na seção 2 e cobrado na seção 7.

### As buscas efetivamente feitas

Dez consultas, nesta ordem: `agent identity protocol AI agents authentication 2026 standard OAuth`; `Web Bot Auth Cloudflare signed agents HTTP message signatures AI crawler`; `OWASP Top 10 LLM applications 2026 agentic security prompt injection benchmark`; `agent sandbox microVM WebAssembly isolation E2B Firecracker gVisor AI agent code execution 2026`; `agentic commerce protocol AP2 Visa Trusted Agent Protocol Mastercard Agent Pay 2026 adoption`; `Brasil marco legal inteligência artificial PL 2338 agentes autônomos responsabilidade 2026 ANPD`; `websites blocking AI agents accessibility disabled users assistive agent discrimination 2026`; `proof of personhood humanity verification World ID agents 2026`; `Cloudflare Radar AI agent traffic share 2026 bot traffic percentage report`; `Banco Central Pix inteligência artificial agentes pagamento 2026 regulação agentic commerce Brasil`; `prompt injection real incident 2026 AI agent data exfiltration CVE Copilot Cursor CVSS production`; `lawsuit AI agent legal liability 2026 court case autonomous agent responsibility insurance`; `"Agent Auth Protocol" better-auth agent identity capability-based authorization`.

Dessas, **17 páginas foram abertas** (seção 11). O restante dos resultados ficou como pista não confirmada.

### Pistas que apareceram em busca e NÃO foram usadas como fonte

Registro porque são o material mais tentador do levantamento — tudo plausível, nada aberto:

- **Números de benchmark de segurança agêntica** que apareceram em resumo de busca: AgentDojo (97 tarefas, 629 casos de teste), Agent Security Bench (16 ataques × 11 defesas × 10 cenários, taxa média máxima de sucesso de 84,3%), InjecAgent (1.054 casos; GPT-4 vulnerável em 24%, subindo a 47% com prompt de ataque reforçado). Não abri nenhum dos três papers. **Não estão no corpo do documento**, apesar de serem exatamente os números que dariam autoridade à seção 3.
- **EchoLeak, GitHub Copilot RCE e o ataque de cadeia Cline/OpenClaw**: o CVE-2025-32711 (CVSS 9.3) do EchoLeak entrou no corpo porque é corroborado pela reportagem que abri; o CVE-2025-53773 do GitHub Copilot (CVSS 9.6) e o incidente que teria instalado um daemon persistente em cerca de 4.000 máquinas de desenvolvedores em fevereiro de 2026 **ficaram de fora**, por virem só de resumo de busca.
- **Comércio agêntico**: AP2 (Google, anunciado em 16/9/2025, 60+ parceiros, sobre W3C Verifiable Credentials), Mastercard Agent Pay (29/4/2025, tokens agênticos, em produção em Singapura e Malásia), Visa Trusted Agent Protocol (9/2025, Verified Agent ID). Usei apenas a existência e a forma dos esquemas, que são corroboradas de outro lado; datas, contagem de parceiros e mercados em produção **não** foram conferidas em fonte aberta.
- **Regulação brasileira**: PL 2338/2023 aprovado no Senado em 10/12/2024 e parado na Câmara; agentes não são sujeitos de direito; Mapa de Temas Prioritários da ANPD 2026-2027 publicado em dezembro de 2025; PLP do Executivo criando o SIA. Vem de resumos de busca, não de fonte aberta — por isso a nota sobre o Brasil na seção 3 é curta e não cita número de artigo.
- **O caso do marketplace contra o desenvolvedor de agente** (o episódio do navegador Comet), tratado na seção 8.
- **Crosby, escritório que segura a responsabilidade profissional dos próprios agentes** (28/7/2026) e o processo de março de 2026 alegando prática não autorizada da advocacia por um chatbot: ambos reforçariam `e1.2.1` e o wildcard 1; nenhum dos dois foi aberto, e por isso aparecem no mapa apenas como categoria ("seguro", "litígio"), sem nome.
- **`rivet.dev/agentOS`**, citado no enunciado do tema como um sistema operacional virtual por agente com isolamento WebAssembly e a alegação de ser "92 vezes mais rápido que uma frota de microVMs": **não busquei nem abri**, e a alegação de desempenho não aparece em lugar nenhum deste documento. É exatamente o tipo de número de fornecedor que entraria por repetição se ninguém perguntasse a origem.

### Candidatos a disrupção-raiz descartados, e por quê

**Por maturidade** (critério da Etapa 2 da skill): OAuth 2.0/2.1 com PKCE; JWT; mTLS e PKI X.509; TLS; WAF; *rate limiting*; RBAC; CAPTCHA; `robots.txt`; containers Docker; filtros de moderação embutidos no modelo; Model Context Protocol como protocolo de ferramentas.

**Pelo segundo filtro do enunciado** ("melhora o que existe, não rompe"): EDR/antivírus com assinatura para IA; DLP clássico; gateway de API com política estática; observabilidade de LLM (que além disso é o tema 3 da disciplina).

**Por escopo, não por maturidade**: passkeys/WebAuthn e identidade descentralizada humana (tema 17); o ofício de programar com agentes (tema 1); avaliação de acerto do agente (tema 3).

**Candidato considerado e cortado por falta de sustentação**: "isolamento em WebAssembly barateia a ponto de cada tarefa rodar em seu próprio mundo", sugerido no enunciado do tema como sinal fraco. Era uma quarta disrupção-raiz plausível, e teria sido a mais interessante para mídia e interação — mas a única fonte técnica comparativa que abri **não menciona WebAssembly**, e a alegação de desempenho que circula vem do fornecedor. Cortado por não ter com o que sustentar; sobreviveu apenas como parte de `e3`, na forma genérica de "isolamento por tarefa", que é sustentada pelos números do Firecracker.

### Efeitos gerados e cortados da roda

- **"Servidores MCP maliciosos viram vetor de cadeia de suprimentos e obrigam curadoria de registro"** — tinha fonte (CVE-2025-6514, CVSS 9.6, e o backdoor do LiteLLM com 47.000 downloads). Cortado por recorte: é efeito interno de engenharia, e o público pedido é quem projeta mídia e interação. É o corte de que mais me arrependo, e está declarado na seção 7 como consequência do viés do pedido.
- **"O custo de energia e armazenamento do isolamento por tarefa vira item de sustentabilidade"** — plausível, sem número que o sustente. Cortado.
- **"Fabricantes de modelo passam a assinar a saída do agente para rastrear origem de conteúdo"** — confunde procedência de conteúdo (C2PA, marca d'água) com identidade de agente. São temas vizinhos e distintos; cortado para não contrabandear o tema da autenticidade de mídia para dentro deste mapa.
- **Um quarto nível inteiro**, esboçado e descartado pelo critério de parada da skill: mercado secundário de identidades de agente limpas; seguradora como reguladora de fato; arbitragem de jurisdição para hospedar agentes. Estão descritos em prosa na seção 5 e **não** entraram no YAML.

### Caminhos abandonados

Tentei montar a roda a partir de **quatro** disrupções-raiz, sendo a quarta "responsabilidade jurídica do agente". Abandonei: o levantamento mostra o movimento oposto — a lei está deliberadamente fechando a porta para a autonomia como excludente de responsabilidade (Califórnia) e para a personalidade jurídica do agente (desenho do PL 2338). Tratá-la como disrupção-raiz seria inventar uma ruptura que as fontes negam. Foi rebaixada a **wildcard** (seção 6), que é o lugar honesto dela neste mapa.
