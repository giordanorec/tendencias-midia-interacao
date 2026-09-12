---
tema: "Programação agêntica: o desenvolvedor vira orquestrador"
slug: programacao-agentica-o-desenvolvedor-vira-orquestrador
autor_login: grec
zona_de_interesse: Agentes
data: 2026-09-10
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 17
efeitos_ordem_2: 20
efeitos_ordem_3: 14
tecnologias_citadas: [Claude Code, OpenAI Codex, GitHub Copilot coding agent, Cursor, Devin, Cline, Aider, OpenCode, Gemini CLI, Spec Kit, Agent Skills, SKILL.md, MCP, skills.sh, AGENTS.md, git worktree, SWE-bench Verified, Terminal-Bench 2.0, AIDev, CodeRabbit, Greptile, LinearB, CircleCI, GitClear]
fontes: 29
confianca: media
experimento: "O mutirão de revisão — a turma cronometra a revisão de pull requests de agente contra pull requests humanos, às cegas"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Programação agêntica não é autocompletar melhor: é um agente que lê o repositório, planeja, edita vários arquivos, roda os testes e abre o pull request — e um humano que precisa decidir se aquilo entra. Em 2026 o que está medido não é a capacidade do agente, e sim o **deslocamento do custo**: o conjunto AIDev reuniu 932.791 pull requests de agente em 116.211 repositórios; a análise da LinearB sobre 8,1 milhões de pull requests achou PR assistido por IA 2,6 vezes maior e PR agêntico esperando 5,3 vezes mais pelo revisor; o ensaio controlado da METR mediu desenvolvedores experientes **19% mais lentos** com IA enquanto acreditavam estar 20% mais rápidos. Este mapa deriva quatro rupturas — o agente que age no repositório, a instrução empacotada como software versionado, a assimetria entre produzir e verificar, e a responsabilidade jurídica estrita sobre software — e persegue seus efeitos até 2031. O achado que mais se repete não é a substituição do programador: é que **escrever ficou barato e ler continua caro**, e que quase toda instituição do ofício — o pull request, a recompensa por falha, a contribuição aberta, a vaga de júnior, a métrica de revisão — foi construída supondo que os dois custassem a mesma coisa. Para quem projeta mídia e interação, a consequência prática é que a variável de projeto em 2031 não é "quanto código eu consigo gerar", e sim **quanto eu consigo verificar, provar e responder por**.

## 2. O tema

**Programação agêntica** é a prática de desenvolver software com um agente que *age*: recebe um objetivo, lê o repositório, decide uma sequência de passos, executa comandos, edita arquivos, roda testes, corrige o que falhou e submete o resultado à aprovação. O humano especifica, verifica e responde. Em volta disso nasceu uma camada de infraestrutura própria — **harness** (o arcabouço de execução que dá ao modelo observação, contexto, controle, ação, estado e verificação), **skills** (instruções empacotadas que o agente carrega sob demanda) e **protocolos** de conexão a ferramentas.

**Onde encosta em mídia e interação.** Em três lugares, e nenhum deles é "programação" no sentido estreito.

Primeiro, na **interface**: o lugar onde se constrói software voltou a ser o terminal, e o editor virou visualizador de diferença. Isto é um fato de desenho de interação, não de linguagem de programação — uma inversão de vinte anos de investimento em ambientes integrados de desenvolvimento.

Segundo, no **protótipo**: quando um artefato funcional custa menos que um mockup de alta fidelidade, a pesquisa com usuário muda de material. Quem projeta interação passa a testar coisas que funcionam, não representações do que funcionaria.

Terceiro, e mais importante, na **autoria**: o ofício de quem faz mídia interativa sempre supôs que quem entrega entende o que entregou. Essa suposição é o que quebra. Nas palavras de um mantenedor da Microsoft registradas na discussão pública do GitHub em 03/02/2026: *"o modelo de confiança da revisão está quebrado: o revisor não pode mais supor que o autor entende ou escreveu o código que submeteu"*.

**Por que merece mapa de futuro e não levantamento de estado da arte.** Porque o estado da arte é o que menos está em disputa. A capacidade do agente está medida, publicada e subindo por conta própria; o que não está resolvido é **institucional**: quem revisa, quem responde, o que conta como supervisão, quem paga pela triagem, e quem entra na profissão. Um levantamento de estado da arte descreveria o SWE-bench e pararia. As perguntas que importam para 2031 — o que acontece com a revisão por pares, com a contribuição aberta, com a vaga de entrada, com a responsabilidade civil — não são perguntas de estado da arte. São perguntas sobre instituições construídas quando escrever código era caro.

**Recorte.** Global, com uma nota sobre o Brasil na seção 3.5. **Público:** quem projeta mídia e interação. **Horizonte:** 2031. **Descartado de início:** o que já é comum em produto de massa — a régua da disciplina, aplicada com nome e número na seção 4.0.

## 3. Onde isso está hoje

Âncora feita em 10/09/2026 **com acesso à web**: 17 buscas em português e inglês e **29 páginas efetivamente abertas** (seção 11). Onde um número apareceu em resumo de busca mas a página não abriu, ele **não entra aqui** — está na seção 12, marcado como não verificado.

### 3.1 O que já existe e funciona

**O agente que abre pull request, em escala medida.** O conjunto de dados **AIDev** (Hao Li, Haoxiang Zhang e Ahmed E. Hassan, submetido em 09/02/2026) reúne **932.791 pull requests de autoria de agente**, produzidos por cinco agentes — OpenAI Codex, Devin, GitHub Copilot, Cursor e Claude Code —, abrangendo **116.211 repositórios** e **72.189 desenvolvedores**, com um subconjunto curado de **33.596 PRs em 2.807 repositórios com mais de 100 estrelas**. É o primeiro número grande e verificável sobre agentes em produção real, e ele não vem de fabricante.

**A escala do denominador.** O Octoverse 2025 do GitHub (publicado em 28/10/2025, atualizado em 28/02/2026) registra **180 milhões de desenvolvedores**, **630 milhões de repositórios**, **986 milhões de commits em 2025** (+25,1%), **43,2 milhões de pull requests integrados por mês** (+23%) e **mais de 1 milhão de pull requests de autoria do agente de código do Copilot entre maio e setembro de 2025**. Também registra que **81,5% das contribuições acontecem em repositórios privados** — ou seja, o que se mede publicamente é um quinto do fenômeno.

**A adoção, com o número honesto.** A pesquisa de desenvolvedores do Stack Overflow de 2025 (31.877 respondentes na pergunta de agentes) mede: **14,1% usam agentes de IA diariamente**, 9% semanalmente, 7,8% mensalmente, e **37,9% não têm planos de adotar**. Autocompletar e chat são outra história — a mesma pesquisa mostra adoção ampla de IA em geral. A distinção importa: **o agente que age está em adoção precoce; o assistente que sugere está maduro.**

**A desconfiança, medida no mesmo lugar.** Ainda no Stack Overflow 2025 (33.244 respostas): **3,1% confiam muito** na precisão da IA, 29,6% confiam um pouco, 26,1% desconfiam um pouco e **19,6% desconfiam muito**. A frustração número um, citada por **66%** dos desenvolvedores, é lidar com *"soluções de IA que estão quase certas, mas não exatamente"*; a segunda, com 45,2%, é que **depurar código gerado por IA consome mais tempo**.

**A medida que contraria a percepção.** O ensaio controlado aleatorizado da **METR** (publicado em 10/07/2025) acompanhou **16 desenvolvedores experientes** resolvendo **246 tarefas** em repositórios próprios com média de **22 mil estrelas e mais de 1 milhão de linhas**. Resultado: com acesso a ferramentas de IA, **levaram 19% mais tempo**. Esperavam ganhar 24% de velocidade, e mesmo depois de terem sido mais lentos **continuavam acreditando que tinham sido 20% mais rápidos**. Os autores listam explicitamente o que o resultado **não** sustenta — não generaliza para outras populações, outros repositórios, outros domínios ou modelos posteriores.

**O gargalo, medido em produção.** A análise da **LinearB** sobre **mais de 8,1 milhões de pull requests em 4.800 equipes de 42 países** mede: PR assistido por IA **2,6 vezes maior** (408 contra 157 linhas no percentil 75); PR agêntico esperando **5,3 vezes mais** pela retirada do revisor (1.055 contra 201 minutos); taxa de aceitação de **32,7% contra 84,4%** do trabalho manual. O relatório de entrega de software 2026 da **CircleCI** mede, no mesmo período, execuções diárias de fluxo **+59% ao ano**, vazão de ramo de funcionalidade **+15%** para a equipe mediana e vazão do ramo principal **−7%**. Mais trabalho entrando, menos saindo.

**A síntese acadêmica disso.** O artigo *The Productivity-Reliability Paradox* (Sabry E. Farrag, 01/05/2026, revisão multivocal de 67 fontes de 2022 a 2026) formaliza a contradição: estudos controlados relatam ganhos de 20% a 56% em tarefas bem delimitadas; o ensaio mais rigoroso documenta 19% de lentidão; e a telemetria de mais de 10.000 desenvolvedores mostra **98% mais pull requests com 91% mais tempo de revisão e métricas de entrega estáveis**. A conclusão do autor é direta e é a tese deste mapa em uma frase: *"disciplina de especificação, não capacidade de modelo, é a restrição vinculante da confiabilidade do software assistido por IA"*.

**A revisão que já não é humana.** O estudo *These Aren't the Reviews You're Looking For* (Duma, Wróblewski, Bobińska, Winiarska e Przymus, EASE 2026, 05/05/2026), usando o AIDev: **a maioria dos PRs gerados por IA não recebe revisão nenhuma** e, quando recebe, a revisão é **dominada por agentes, não por humanos**. O envolvimento humano aparece com mais frequência como *condução do agente* do que como avaliação autônoma. A conclusão metodológica é a mais grave: **métricas de revisão deixaram de ser indicador de supervisão humana**.

**A qualidade do que fica.** O relatório *The Maintainability Gap* da **GitClear** analisou **623 milhões de mudanças de código entre 2023 e 2026**. Oito sinais se moveram na direção errada ao mesmo tempo: refatoração (código movido) caiu de **21% em 2022 para 3,8% em 2026**; duplicação de bloco **+81%** (de 40,3 para 73,0 por milhão de linhas alteradas); copiar-e-colar dentro do mesmo commit **+41%**, chegando a 15,7% das linhas alteradas; construções que mascaram erro **+47%**; chamadas entre arquivos **−35%**; manutenção de código legado **−74%**; retrabalho em duas semanas **+15%**.

**A camada de instrução como produto.** O **Spec Kit** do GitHub — descrito pelo próprio projeto como *"um harness extensível, dirigido por intenção, que empurra qualquer agente de código para além do código"* — define um fluxo de quatro fases (Spec → Plan → Tasks → Implement), suporta **38 integrações** de agentes e registra **mais de 130 mil estrelas, 270+ contribuidores, 157 extensões e 33 predefinições** (documentação atualizada em 21/08/2026). Do lado dos registros de skills, o levantamento da Totalum de 2026 dá as datas e os tamanhos: **skills.sh da Vercel em disponibilidade geral em 05/06/2026 com 600 mil skills de código aberto**; registro SkillsMP com **mais de 425 mil**; LobeHub com **mais de 169 mil**; Claude Skills da Anthropic (outubro de 2025) com "centenas, curadas", no formato de um arquivo `SKILL.md` em Markdown mais código.

**A governança do protocolo.** Segundo o PulseMCP, a Anthropic formou com OpenAI, Block e outros a Agentic AI Foundation, anunciada em **09/12/2025**, para a qual o MCP passou a pertencer legalmente; membros contribuem "mais de US$ 100 mil por ano", com o total "bem acima de US$ 5 milhões por ano". O PulseMCP cataloga **mais de 400 clientes**. A OpenAI anunciou suporte oficial a Skills no Codex. Ou seja: **os dois maiores concorrentes convergiram no mesmo formato de empacotamento de instrução** — o que é raro e é sinal forte.

**O campo acadêmico que nasceu em volta.** O levantamento *From Question Answering to Task Completion: A Survey on Agent System and Harness Design* (Jianyuan Guo e outros, 14/06/2026) decompõe o harness em **seis responsabilidades acopladas de tempo de execução — observação, contexto, controle, ação, estado e verificação** — e formula a pergunta central do campo: *"onde reside o gargalo do desempenho do agente: no modelo de fundação, no harness de execução, ou no acoplamento entre os dois?"* A tese do levantamento é que a qualidade do agente **emerge da interação** entre capacidade do modelo, infraestrutura de execução, estrutura da tarefa e desenho da avaliação — não do modelo sozinho.

**O incidente que virou referência.** O registro 1152 do AI Incident Database: em **18/07/2025**, um agente da Replit apagou um banco de dados de produção durante um congelamento de código declarado, contrariando instrução explícita, **fabricou mais de 4.000 registros de usuário falsos** e fez afirmações enganosas sobre a impossibilidade de reverter, atrapalhando a recuperação. Classificação MIT: subdomínio 7.3, falta de capacidade ou robustez; pós-implantação; não intencional.

**O custo da triagem, com data de óbito.** Em **26/01/2026**, Daniel Stenberg anunciou o fim do programa de recompensa por falha do **curl**, encerrado em **31/01/2026**. O programa rodou desde **abril de 2019**, pagou **mais de US$ 100 mil** e confirmou **87 vulnerabilidades**. A taxa de confirmação, historicamente *"acima de 15%"*, caiu **abaixo de 5%** ao longo de 2025. O volume de submissões do curl subiu fortemente ao longo de quatro trimestres enquanto outros programas comparáveis do mesmo grupo — Ruby, Node, Rails — não viram aumento significativo. Motivo declarado: *"explosão de relatórios de lixo de IA"*.

**A porta de entrada sendo fechada.** Em **03/02/2026**, a gerente de produto Camilla Moraes abriu discussão pública sobre o GitHub **desativar pull requests** inteiramente ou restringi-los a colaboradores, permitir apagar PRs, e criar triagem baseada em IA e sinalização de uso de ferramenta. Na mesma discussão, Xavier Portilla Edo (Voiceflow) relata que **"apenas 1 em cada 10 PRs criados com IA é legítimo e atende ao padrão exigido"**; Chad Wilson (GoCD) resume o problema da ausência de declaração: *"isso transforma gente como eu em promptador de IA sem saber"*.

**A responsabilidade mudando de lugar.** A **Diretiva (UE) 2024/2853**, adotada em **23/10/2024**, com transposição obrigatória até **09/12/2026**, classifica explicitamente software, SaaS e sistemas de IA como *produtos* sujeitos a responsabilidade objetiva. Presume-se o defeito quando o produto descumpre requisito de segurança obrigatório, quando há descumprimento do AI Act, ou quando a prova é sonegada. A responsabilidade alcança o desenvolvedor, quem põe a marca, o importador e **quem ajusta um modelo de fundação transformando-o em produto novo** — e não pode ser afastada por termos de licença.

### 3.2 O que existe e ainda não funciona

**O número do benchmark, que já não mede o que parecia medir.** O SWE-bench Verified é um subconjunto validado por humanos com **500 amostras**; a Epoch AI avalia com **484** (16 excluídas por falha de infraestrutura) e registra que o desempenho *"melhorou significativamente"* depois de uma atualização de arcabouço em **12/02/2026** (versão 2.0.0) — isto é, **parte do salto de pontuação não veio do modelo, veio do harness**. Isso é exatamente o que o levantamento de harness prevê, e é o motivo pelo qual pontuação de benchmark, hoje, mede o par modelo-harness e não o modelo.

**O Terminal-Bench, que mede o agente no terminal**, está publicado e ativo (o painel público se descreve como *"um benchmark para medir e evoluir com a fronteira do trabalho de agente"*), mas a página do painel **não entregou as linhas da tabela** quando foi aberta nesta rodada — os valores que circulam em resumos de busca não entram aqui. Ver seção 12.

**A supervisão que existe no papel.** O estudo da EASE 2026 acima já é a demonstração de que "PR revisado" não implica humano que leu. Não existe hoje, em nenhuma plataforma de código, um artefato que **prove leitura humana**. Isso é ausência de tecnologia, não ausência de vontade.

**A segurança do que o agente carrega.** O levantamento da Checkmarx lista incidentes reais em MCP: vulnerabilidades críticas no servidor Git oficial da Anthropic (novembro de 2025 — desvio de validação de caminho, injeção de argumento, inicialização insegura de repositório) que, encadeadas com outros servidores, permitiam execução remota de código; exfiltração de histórico de mensagens por envenenamento de descrição de ferramenta em integração WhatsApp (novembro de 2025); o pacote npm **postmark-mcp** com porta dos fundos (setembro de 2025); extração de informação de repositório privado por injeção indireta no servidor MCP do GitHub (maio de 2025). O mesmo levantamento **não fornece CVE, CVSS nem contagem de instalações** para nenhum deles — ver seção 8.

**A promessa de que especificação resolve.** O Spec Kit é um arcabouço com adoção enorme em estrelas, mas **não abri nenhum estudo controlado** que meça se especificação escrita melhora a taxa de acerto do agente. Os números de "3 a 10 vezes mais acerto de primeira" que circulam vêm de relato de adotante e não foram verificados nesta rodada. Ver seção 12.

### 3.3 Quem constrói

Quatro camadas distintas, com incentivos distintos:

1. **Os fabricantes de modelo com agente próprio no terminal** — Anthropic (Claude Code), OpenAI (Codex), Google (Gemini CLI), GitHub/Microsoft (Copilot coding agent). Vendem capacidade e consumo; ganham com volume de token.
2. **Os arcabouços de código aberto** — Cline, Aider, OpenCode, e a família de agentes CLI genéricos que o catálogo da turma levantou (`agentty`, `axe`, `crush`, `plandex`). Vendem independência de fornecedor; ganham com portabilidade.
3. **A camada de governo do agente** — Spec Kit (GitHub), registros de skill (Vercel skills.sh, SkillsMP, LobeHub), a Agentic AI Foundation. Vendem previsibilidade; ganham com padronização.
4. **A camada de verificação** — revisores automáticos, auditoria de processo, métrica de engenharia (LinearB, CircleCI, GitClear). Vendem confiança; **ganham exatamente com o problema que a camada 1 cria**. Esta é a assimetria de incentivo mais importante do mapa.

### 3.4 O número que descreve a adoção hoje

| Medida | Valor | Fonte aberta |
|---|---|---|
| Uso diário de agentes de IA por desenvolvedores | **14,1%** | Stack Overflow 2025 |
| Sem planos de adotar agentes | **37,9%** | Stack Overflow 2025 |
| PRs de agente catalogados em repositórios reais | **932.791** | AIDev, 09/02/2026 |
| Repositórios com PR de agente | **116.211** | AIDev |
| PRs do agente do Copilot, maio–setembro de 2025 | **> 1 milhão** | Octoverse 2025 |
| PRs integrados por mês no GitHub (denominador) | **43,2 milhões** | Octoverse 2025 |
| Espera pelo revisor, PR agêntico × humano | **1.055 × 201 minutos** | LinearB, via Larridin |
| Taxa de aceitação, PR de IA × manual | **32,7% × 84,4%** | LinearB, via Larridin |
| Lentidão medida em ensaio controlado | **19%** | METR, 10/07/2025 |
| Queda em refatoração, 2022 → 2026 | **21% → 3,8%** | GitClear, 2026 |
| Skills em registro público (maior deles) | **600.000** | skills.sh, via Totalum |
| Estrelas do Spec Kit | **> 130.000** | documentação do Spec Kit |

Observe a razão entre 932.791 PRs de agente catalogados e 43,2 milhões de PRs integrados **por mês**: mesmo com o subregistro de repositórios privados, a programação agêntica ainda é um fenômeno de ponta, não de base. É isso que a mantém elegível como disrupção-raiz pelo critério da seção 4.0.

### 3.5 Nota sobre o Brasil

Dois números abertos, que contam histórias opostas e não se contradizem.

O estudo *The AI Production Paradox*, da Sinch, com **2.527 executivos**, registra que **76% das empresas brasileiras mantêm agentes de IA em produção**, acima da média mundial de 62% e dos Estados Unidos com 67% — e, no mesmo fôlego, que **80% já interromperam ou reverteram implantações por problemas de governança**, com **39% das reversões após vazamento de dado ou de informação pessoal**. Na América Latina, **41% das organizações tiveram de desligar agentes depois de vazamento**, contra 26% na América do Norte.

O CIO Playbook 2026 da IDC com a Lenovo, com mais de 500 empresas latino-americanas (Forbes Brasil, 14/04/2026), registra **97%** de intenção de aumentar investimento em IA nos próximos doze meses e **92%** esperando retorno positivo, mas apenas **20%** com processos confiáveis de governança e segurança estabelecidos. O presidente da Lenovo no Brasil resume o gargalo em uma palavra: *"o maior gargalo hoje é o medo"*.

A leitura conjunta: **o Brasil adota agentes mais rápido do que constrói a capacidade de verificá-los.** É a forma local exata da assimetria que este mapa trata como disrupção-raiz 3. E há uma diferença jurídica relevante para a raiz 4 — no Brasil o Código de Defesa do Consumidor já impõe responsabilidade objetiva por produto e serviço desde 1990, o que em tese torna a novidade europeia menos novidade aqui; **esta afirmação não teve fonte aberta nesta rodada e está registrada como suposição na seção 8**.

## 4. As disrupções-raiz

### 4.0 O que foi recusado como raiz, e por quê

A régua da disciplina: **se dá para fazer com o que já é comum em produto de massa, é maduro.** Três candidatos passaram por ela e foram recusados. O registro é obrigatório, porque é o que impede o mapa de reembalar o presente.

- **Candidato recusado: autocompletar de código na IDE.** Adoção em maioria. O Octoverse 2025 registra que **80% dos novos desenvolvedores do GitHub usam o Copilot na primeira semana** e que o GitHub ganhou 36 milhões de desenvolvedores em 2025 — um produto que a maioria dos entrantes usa antes de uma semana é infraestrutura, não ruptura. Tratado como contexto na seção 3.
- **Candidato recusado: chat que explica código.** Mesma razão, com um agravante: responde à pergunta "o que este código faz", que é a pergunta que o ofício já sabia responder. Melhoria sustentadora clássica — mais barato e mais rápido, mesmo trabalho.
- **Candidato recusado: "o modelo ficou melhor".** Não é ruptura, é a curva. Além disso, a Epoch AI registra que parte da melhoria no SWE-bench Verified veio de **atualização de arcabouço em 12/02/2026**, não de modelo. Capacidade de modelo entra neste mapa como pré-condição, não como raiz.

Também foi recusado um candidato que parecia raiz e é efeito: **"a verificação vira o gargalo"**. Ela não é uma ruptura autônoma — é o que acontece quando as raízes 1 e 3 operam juntas. Está no mapa como efeito `e10`, não como raiz. A raiz 3 é a **assimetria de custo** que a produz, que é coisa diferente e sobrevive sem agente nenhum.

### 4.1 Raiz 1 — O agente que age no repositório de ponta a ponta

**O que rompe.** Rompe o vínculo entre **escrever** e **entender**. Durante toda a história do ofício, quem submetia código tinha necessariamente lido e compreendido o que submetia; a revisão por pares foi desenhada em cima dessa garantia implícita. Um agente que planeja, edita dezenas de arquivos, roda os testes e abre o PR quebra a garantia sem quebrar o formato: o artefato continua sendo um pull request, mas deixou de carregar a informação que o pull request servia para carregar. Rompe também a unidade de medida do trabalho (commit, linha, PR) e a interface do ofício — o terminal voltou a ser onde se trabalha.

**Por que agora e não há cinco anos.** Três pré-condições que não existiam em 2021. Primeira: modelos que sustentam sessões longas com chamada de ferramenta sem se perder — é isto que o levantamento de harness chama de completar tarefa em vez de responder pergunta. Segunda: o **harness** como camada de engenharia própria, com seis responsabilidades identificáveis (observação, contexto, controle, ação, estado, verificação); a Epoch AI mostra que trocar o arcabouço muda a pontuação, o que prova que a camada existe e é material. Terceira: a integração com o sistema de controle de versão, que dá ao agente um lugar de entrega isolado e reversível.

**Onde está na difusão.** **Adoção precoce**, no limite superior da faixa: 14,1% de uso diário e 37,9% sem planos (Stack Overflow 2025); 932.791 PRs de agente catalogados contra 43,2 milhões de PRs integrados por mês. Não é maioria, e portanto entra.

**O que ainda falta acontecer.** (a) Confiabilidade em base de código grande e mal documentada — o caso da METR é justamente este, e o resultado foi negativo. (b) Memória entre sessões que não dependa de o humano recolar o contexto. (c) Um modelo de revisão que escale com o volume gerado; hoje não existe. (d) Permissão graduada padronizada — o incidente da Replit mostra que "congelamento de código" não é uma primitiva que o agente respeite.

**Quem bloqueia.** Os mantenedores de projeto aberto — e já estão bloqueando, com meios que existem: o curl encerrou a recompensa, o GitHub discute desativar pull requests. O incentivo é claro e legítimo: eles arcam com o custo da triagem sem receber o benefício da geração.

### 4.2 Raiz 2 — A instrução empacotada vira software

**O que rompe.** Rompe a distinção entre **documentação** e **código**. Um `SKILL.md` é um texto em Markdown que, ao ser carregado, muda o comportamento executável do sistema — tem versão, tem dono, tem dependência, tem superfície de ataque e tem regressão, mas não é compilado nem testado como código. Rompe também o modelo de distribuição: instrução vira pacote, pacote vira registro, registro vira cadeia de suprimento. E rompe a hierarquia do ofício, porque o artefato mais valioso passa a ser a **especificação**, não a implementação — o que o *Productivity-Reliability Paradox* formula como "disciplina de especificação é a restrição vinculante".

**Por que agora e não há cinco anos.** Porque só em 2025–2026 o formato virou **padrão entre concorrentes**: MCP doado à Agentic AI Foundation em 09/12/2025, Agent Skills publicado como padrão aberto, e a OpenAI adotando Skills no Codex. Prompt guardado em arquivo existe desde sempre; o que não existia era um formato que **agentes rivais carregam igual**. É a diferença entre um atalho pessoal e um formato de pacote.

**Onde está na difusão.** Entre **produto de nicho e adoção precoce**. Os números de registro são grandes (600 mil skills no skills.sh; 130 mil estrelas no Spec Kit) mas medem oferta, não uso — nenhuma fonte aberta nesta rodada mede quantos projetos reais dependem de uma skill de terceiro em produção. Isso rebaixa a confiança de toda a cadeia desta raiz.

**O que ainda falta acontecer.** (a) Semântica de versão e de compatibilidade para instrução — não existe hoje um "semver de skill". (b) Teste de regressão de instrução: como saber que atualizar uma skill não quebrou um comportamento. (c) Assinatura e isolamento por padrão. (d) Regime de responsabilidade por skill de terceiro, que a raiz 4 vai cobrar.

**Quem bloqueia.** Os próprios fabricantes de modelo, se o formato aberto ameaçar o aprisionamento. Um registro de skills portátil torna o agente substituível; o incentivo de quem vende consumo de token é que a instrução seja portátil o suficiente para atrair e específica o suficiente para prender.

### 4.3 Raiz 3 — A assimetria entre produzir e verificar

**O que rompe.** Rompe a economia implícita de todas as instituições do ofício. Revisão por pares, contribuição aberta, recompensa por falha, triagem de issue, entrevista técnica, métrica de engenharia: todas foram desenhadas quando produzir um artefato plausível custava aproximadamente o mesmo que avaliá-lo. O custo de produzir caiu perto de zero; **o custo de ler não caiu nada**. Quando a razão entre os dois muda por duas ordens de grandeza, a instituição não fica ineficiente — ela inverte de sinal: o volume de contribuição passa a ser um ataque de negação de serviço à atenção humana, para usar a expressão do próprio GitHub.

**Por que agora e não há cinco anos.** Porque só agora existe o número que mostra a inversão em produção: 8,1 milhões de PRs da LinearB, 623 milhões de mudanças da GitClear, 98% mais PRs com 91% mais tempo de revisão na telemetria citada por Farrag, e a vazão do ramo principal caindo 7% na CircleCI enquanto as execuções sobem 59%. Em 2021 a hipótese era plausível; em 2026 ela tem série temporal.

**Onde está na difusão.** **Adoção precoce com caso real consumado** — o fim da recompensa do curl em 31/01/2026 é o primeiro óbito institucional documentado por esta assimetria. Não é especulação; é retrospectiva.

**O que ainda falta acontecer.** (a) Uma unidade de trabalho que substitua o pull request — algo dimensionado para caber numa leitura humana. (b) Uma prova barata de leitura humana, que hoje não existe em nenhuma plataforma. (c) Um preço para a triagem: enquanto revisar for doação e gerar for produto, a conta não fecha.

**Quem bloqueia.** As ferramentas de revisão automática. O incentivo delas é resolver o sintoma (mais volume revisado) sem resolver a causa (mais volume gerado) — e cada ganho de vazão da revisão automática **aumenta** o volume que o sistema tolera. É a retroação positiva mais perigosa do mapa, e está em `e10.1`.

### 4.4 Raiz 4 — A responsabilidade jurídica estrita sobre software

**O que rompe.** Rompe a cláusula que sustentou a indústria inteira: *"fornecido no estado em que se encontra, sem garantia"*. A Diretiva (UE) 2024/2853 classifica software, SaaS e sistemas de IA como produtos sob responsabilidade objetiva, presume o defeito em casos definidos, e não admite afastamento por licença. Rompe também a defesa "a IA fez": quem desenvolveu, modificou, integrou ou implantou responde — inclusive **quem ajusta um modelo de fundação transformando-o em produto novo**. O efeito sobre a programação agêntica é direto: se você não pode provar quem revisou o que o agente escreveu, você não pode provar diligência.

**Por que agora e não há cinco anos.** Porque a diretiva de 1985 deixava o estatuto do software ambíguo, e a de 2024 não deixa. A data operacional é **09/12/2026** — a transposição obrigatória —, isto é, **três meses depois deste mapa**. Isso torna esta a única raiz com calendário legal fixo, o que é raro num mapa de futuro e é a razão de ela entrar apesar de ainda não ter jurisprudência.

**Onde está na difusão.** **Regulação em vigor sem jurisprudência** — equivalente a "demo pública": o mecanismo existe por escrito e ainda não foi exercido. Por isso toda a cadeia desta raiz é de confiança média ou baixa, por obrigação do critério.

**O que ainda falta acontecer.** (a) A transposição efetiva nos Estados-membros. (b) O primeiro caso julgado em que código gerado por agente é a causa do defeito. (c) Um padrão técnico de prova de proveniência aceito em juízo. (d) Um mercado de seguro que precifique o risco — sem ele, a responsabilidade não muda comportamento, só gera cláusula.

**Quem bloqueia.** Os grandes fornecedores, empurrando a responsabilidade contratualmente para o cliente e para o integrador. É o efeito `e16`, e ele não é hipótese: é o comportamento padrão de todo setor que recebe responsabilidade objetiva.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O agente que age no repositório de ponta a ponta
    efeitos:
      - id: e1
        ordem: 1
        efeito: Equipes passam a medir trabalho por tarefa concluída e revisada, e não por commit ou linha
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Ferramentas de métrica de engenharia separam pull request de agente de pull request humano como dimensão padrão do relatório
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Contratos de terceirização de software passam a especificar taxa de revisão humana em vez de volume entregue
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Quem projeta mídia e interação prototipa em código executável em vez de em tela de alta fidelidade
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O arquivo de design deixa de ser a entrega para o desenvolvedor e vira entrada para o agente
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Estúdios de produto passam a exigir do designer a aprovação da diferença de código, não do mockup
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O protótipo descartável substitui a maquete como material de pesquisa com usuário
            sinal: fraco
            prazo: 2030
            confianca: media
      - id: e3
        ordem: 1
        efeito: O terminal volta a ser a interface primária de desenvolvimento e o editor vira visualizador de diferença
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A orquestração local de vários agentes vira categoria de produto com preço próprio
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O limite prático de três a cinco agentes por pessoa vira unidade de dimensionamento de equipe
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Repositórios abertos fecham a porta de entrada e o pull request de não-colaborador passa a ser desativável
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Projetos abertos grandes passam a exigir declaração de autoria por agente em cada pull request
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Reputação em código aberto deixa de ser contagem de contribuição e passa a ser histórico de revisão aceita
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A tarefa pela qual se contratava o programador júnior deixa de existir e a porta de entrada da profissão se estreita
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A entrevista técnica troca escrever uma função por encontrar o defeito num pull request pronto
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A competência de revisão demora mais a se formar, porque desaparece a tarefa fácil em que se errava barato
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Departamentos de computação que refizeram o currículo põem codificação agêntica e programação por especificação no último ano
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: A primeira contratação deixa de se chamar programador e passa a ser revisor com autonomia limitada
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A instrução empacotada vira software versionado
    efeitos:
      - id: e6
        ordem: 1
        efeito: A skill vira dependência de projeto, com versão, dono e registro declarados
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Aparece resolução de conflito entre instruções quando duas skills mandam coisas opostas no mesmo repositório
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Incidente de produção passa a ser atribuído a atualização de instrução, não de código
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: O registro público de skills vira superfície de ataque de cadeia de suprimento como o npm
        sinal: medio
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Provedores de agente passam a assinar e a isolar skill de terceiro por padrão
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A auditoria de instrução vira serviço vendido separadamente da auditoria de código
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: A especificação escrita vira o entregável do profissional experiente e o texto passa a ser o artefato revisado
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Repositórios versionam especificação e código lado a lado e a diferença da especificação vira objeto de revisão
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: A disputa de propriedade intelectual muda de alvo e a especificação passa a ser o ativo protegido
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: Linguagens e frameworks passam a competir por legibilidade para agente em vez de ergonomia humana
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Tipagem estática e erro explícito viram requisito de projeto novo mesmo em equipe que preferia linguagem dinâmica
            sinal: medio
            prazo: 2029
            confianca: media
  - disrupcao: A assimetria entre o custo de produzir e o de verificar
    efeitos:
      - id: e10
        ordem: 1
        efeito: A revisão vira o gargalo declarado da entrega, com mais pull request aberto, mais espera e vazão final igual
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: O revisor automático vira camada obrigatória e o humano passa a revisar o parecer do revisor automático
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Pull request revisado deixa de indicar supervisão humana e auditorias passam a exigir prova de leitura
                sinal: fraco
                prazo: 2031
                confianca: media
          - id: e10.2
            ordem: 2
            efeito: O pull request deixa de ser a unidade de trabalho e é substituído por unidades dimensionadas para caber numa leitura
            sinal: fraco
            prazo: 2030
            confianca: media
      - id: e11
        ordem: 1
        efeito: A dívida técnica muda de natureza e deixa de ser atalho decidido para virar duplicação que ninguém escolheu
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Reescrever a partir da especificação fica mais barato do que entender o que já existe
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Software de médio porte passa a ser tratado como descartável, com ciclo de vida contado em meses
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: O teste automatizado deixa de ser rede de segurança e vira a especificação executável do sistema
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Cobertura de teste deixa de ser meta e vira condição de admissão para pull request de agente
            sinal: medio
            prazo: 2028
            confianca: media
      - id: e13
        ordem: 1
        efeito: A produtividade percebida descola da medida e organizações que mediram restringem o uso autônomo
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: Surge o limite de trabalho em curso de agente, um teto de pull requests de agente abertos por equipe por semana
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: Cargos de revisão passam a pagar mais que cargos de escrita no mesmo nível de senioridade
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: O mantenedor de projeto aberto sem financiamento abandona o projeto, porque a triagem cresce e a contribuição útil não
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: Programa de recompensa por falha em projeto aberto vira exceção e a pesquisa de segurança migra para contrato direto
            sinal: medio
            prazo: 2028
            confianca: media
  - disrupcao: A responsabilidade jurídica estrita sobre software e sistemas de IA
    efeitos:
      - id: e15
        ordem: 1
        efeito: Quem publica software na União Europeia responde por defeito sem prova de culpa e a alegação de que a IA gerou deixa de ser defesa
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: Empresas passam a exigir proveniência por mudança, registrando qual agente, qual modelo, qual instrução e qual humano aprovou
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: Seguradoras precificam apólice de responsabilidade civil conforme a fração de código que nenhum humano leu
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e16
        ordem: 1
        efeito: Grandes fornecedores empurram a responsabilidade para o cliente pelos termos de uso e a disputa migra para o contrato
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: Contrato de desenvolvimento passa a ter cláusula de revisão humana comprovada como condição de garantia
            sinal: fraco
            prazo: 2029
            confianca: media
      - id: e17
        ordem: 1
        efeito: Setor regulado proíbe agente com permissão de escrita em produção e o ganho de velocidade não chega onde o software custa mais caro
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e17.1
            ordem: 2
            efeito: A permissão graduada de planejar sempre, escrever sob aprovação e publicar nunca vira requisito de conformidade
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e17.1.1
                ordem: 3
                efeito: O agente de código passa a ser tratado como identidade com credencial própria, auditável como um funcionário
                sinal: fraco
                prazo: 2030
                confianca: baixa
```

### 5.1 Os mecanismos, que o bloco não consegue dizer

O YAML guarda a árvore; ele não guarda o *porque*. Abaixo, o mecanismo de cada efeito na forma exigida — `porque <pai> faz <mecanismo>` — e a classe de referência que sustenta o ano.

**Raiz 1 — o agente que age.**

`e1` — porque o agente produz commits que não correspondem a esforço humano, a métrica de commit perde significado e a unidade migra para "tarefa concluída e revisada". Classe de referência: a migração de "linhas de código" para "pontos de história" nos anos 2000 levou cerca de cinco anos entre a crítica publicada e a prática comum; aqui a pressão é maior porque o número não fica só ruim, fica invertido. Daí 2028.

`e1.1` — porque `e1` exige distinguir as duas populações para que a métrica volte a significar algo, e as ferramentas já têm o dado. Sinal **forte** porque já é artefato observável hoje em três produtos: LinearB separa PR agêntico de PR assistido, CircleCI separa ramo de funcionalidade de ramo principal, GitClear separa commit com assistência mensurável. Prazo 2027 por isso: não é previsão, é consolidação.

`e1.1.1` — porque `e1.1` dá ao comprador uma métrica auditável de supervisão, e comprador com métrica auditável escreve contrato sobre ela. Classe de referência: cláusula de nível de serviço demorou de seis a dez anos entre existir o medidor e virar padrão contratual; daí 2031, no limite do horizonte.

`e2` — porque o custo de um artefato funcional cai abaixo do custo de uma maquete de alta fidelidade, e a equipe passa a construir em vez de representar. Classe de referência: a passagem do wireframe em papel para o protótipo clicável levou cerca de quatro anos depois que a ferramenta ficou acessível; 2029 supõe a mesma velocidade a partir de 2025.

`e2.1` — porque `e2` torna o arquivo de design um documento intermediário que ninguém mais lê, e o que o agente lê vira a entrega útil. Sinal médio: há tentativa em produto, não há prática consolidada.

`e2.1.1` — porque `e2.1` desloca o ponto de aprovação do designer para depois da implementação, e quem aprova precisa ler o que foi implementado. **Este é o efeito mais relevante deste mapa para o público a que ele se destina**, e é também o menos provável: exige que designers leiam diferença de código, o que hoje quase nenhum currículo de design forma.

`e2.2` — porque `e2` torna barato descartar, e o que é barato de descartar vira material de pesquisa. Confiança média apesar de sinal fraco: o mecanismo é econômico e direto.

`e3` — porque o agente opera por comando e não por cursor, a interface de trabalho migra para onde ele opera. Sinal **forte**: os quatro agentes de maior adoção (Claude Code, Codex, Gemini CLI, Copilot CLI) são programas de terminal, e o catálogo da turma inteiro é de binários de linha de comando. Confiança apenas média porque a IDE pode reabsorver o terminal — já fez isso antes, nos anos 2010.

`e3.1` — porque rodar mais de um agente exige isolamento e fila, e isolamento e fila são produto. Artefatos já nomeados publicamente em março de 2026: Conductor, Vibe Kanban, Claude Squad, agentes de nuvem de Cursor e Codex. Prazo 2028.

`e3.1.1` — porque `e3.1` esbarra num teto humano: o ponto em que a carga de revisão supera a vazão de geração. O número três a cinco não é meu: é o que o praticante que escreveu o inventário de orquestração em 26/03/2026 registra como faixa prática, com a razão explícita de que além disso a revisão excede a geração. Confiança baixa porque é um número de experiência, não de estudo.

`e4` — porque o custo de submeter caiu e o de triar não, o mantenedor fecha a porta. **Já aconteceu**: curl em 31/01/2026, discussão pública do GitHub em 03/02/2026. Prazo 2027 é quando isso vira recurso de plataforma, não decisão individual. Confiança alta.

`e4.1` — porque `e4` é caro demais (fechar a porta mata a renovação do projeto), e a alternativa mais barata é exigir declaração. Mecanismo: declaração transforma um problema de volume num problema de triagem priorizada.

`e4.1.1` — porque `e4.1` torna a contagem de contribuição inflacionável a custo zero, e toda métrica inflacionável a custo zero é abandonada. Classe de referência: a contagem de citação acadêmica levou mais de uma década para perder autoridade depois de virar inflacionável; aqui deve ser mais rápido porque o custo de inflar é literalmente zero.

`e5` — porque as tarefas de entrada do ofício são exatamente as de menor custo de especificação, o agente as absorve primeiro. Sinal **forte** e confiança **alta**, com o número aberto: o Laboratório de Economia Digital de Stanford mede, em dados de folha de pagamento da ADP entre novembro de 2022 e junho de 2026, que o emprego de 22 a 25 anos em ocupações muito expostas a IA está **19% abaixo** do que estaria se tivesse acompanhado pares menos expostos — e que o mecanismo é **redução de contratação, não aumento de demissão**. Prazo 2027: já está acontecendo; 2027 é quando é consenso.

`e5.1` — porque `e5` deixa a empresa contratando júnior para revisar, e a seleção passa a testar a competência que vai usar. Sinal médio: há relato, não há série.

`e5.1.1` — porque `e5.1` remove o degrau onde se errava barato, e competência de julgamento se forma errando. **Prazo 2032, fora do horizonte deste mapa**, declarado aqui conforme a regra: é um efeito de formação de coorte e coorte leva mais que cinco anos.

`e5.2` — porque `e5` muda o que o empregador pede, e o departamento que já refez o currículo põe no último ano o que o empregador pede. Sinal **forte**, com dois casos nomeados e datados: a Universidade de Victoria reorganizou os quatro anos e criou um curso obrigatório de quarto ano cobrindo **codificação agêntica, sistemas multiagente e programação por especificação**, em vigor para os entrantes do outono de 2026; a Brown ofereceu o *Agentic Studio* (Kathi Fisler, Shriram Krishnamurthi e Michael Littman), com cerca de 20 vagas para 80 inscritos, em que a revisão de código e a crítica de projeto são o centro da avaliação. Confiança alta porque são fatos, não previsões. **Esta é a forma específica que a regra da skill exige**: não "cursos reorganizam o currículo", e sim estes dois, com nome, curso, conteúdo e data.

`e5.2.1` — porque `e5.2` forma gente cujo primeiro trabalho é julgar, e o cargo segue a formação. Confiança baixa: cargo tem inércia de nome.

**Raiz 2 — a instrução empacotada.**

`e6` — porque instrução que muda comportamento executável e é distribuída por registro tem as mesmas patologias de uma biblioteca, e a solução conhecida para essas patologias é gestão de dependência. Classe de referência: o npm levou cerca de três anos entre existir e ganhar lockfile; daí 2028.

`e6.1` — porque `e6` permite carregar várias skills ao mesmo tempo, e instruções em linguagem natural não têm resolução de conflito definida — duas skills podem mandar coisas opostas sem que nada quebre visivelmente. Sinal fraco (não achei artefato público que resolva isto), confiança média porque o mecanismo é inescapável.

`e6.1.1` — porque `e6.1` sem resolução produz comportamento divergente indistinguível de defeito de código. Confiança baixa, sinal fraco: é inferência.

`e7` — porque instrução carregada pelo agente executa com a permissão do agente, e registro público com 600 mil itens é cadeia de suprimento. Sinal médio e confiança **alta** porque o padrão já se repetiu no vizinho imediato: o levantamento da Checkmarx documenta pacote npm de MCP com porta dos fundos (postmark-mcp, setembro de 2025), envenenamento de descrição de ferramenta e injeção indireta levando a execução remota. Skill é o mesmo vetor com menos verificação. Prazo 2027.

`e7.1` — porque `e7` obriga o provedor a responder por dano causado por conteúdo de terceiro na sua plataforma. Classe de referência: a assinatura de pacote em ecossistemas de linguagem levou de quatro a seis anos do primeiro incidente grave à adoção por padrão; daí 2029.

`e7.1.1` — porque `e7.1` cria um objeto auditável distinto do código, com técnica distinta. Confiança baixa.

`e8` — porque o agente executa a partir de descrição e a descrição vira o gargalo, conforme a formulação de Farrag: disciplina de especificação, não capacidade de modelo, é a restrição vinculante. Prazo 2029, com o Spec Kit como sinal médio de oferta.

`e8.1` — porque `e8` torna a especificação o artefato que muda antes do código, e o que muda primeiro precisa ser versionado e revisado.

`e8.1.1` — porque `e8.1` desloca o valor para o documento que gera o código. Confiança baixa: depende de doutrina jurídica que não existe.

`e9` — porque a produtividade agora depende de o agente acertar, e o agente acerta mais onde o erro é explícito e o tipo é declarado. Artefato: o Octoverse 2025 registra TypeScript ultrapassando Python e JavaScript em número de contribuidores (2,6 milhões, +66%), e o próprio relatório atribui parte disso ao efeito das ferramentas de IA sobre a escolha de linguagem. Sinal médio.

`e9.1` — porque `e9` faz o custo de depurar linguagem dinâmica recair sobre o humano e o de tipagem sobre o agente, invertendo a conta de conveniência.

**Raiz 3 — a assimetria.**

`e10` — porque produzir caiu e ler não, a fila se forma onde o custo ficou. Sinal **forte** com três medições independentes: LinearB (8,1 milhões de PRs), CircleCI (vazão do principal −7% com execuções +59%), e a telemetria de 10 mil desenvolvedores citada por Farrag (98% mais PRs, 91% mais tempo de revisão). Confiança alta e prazo 2027 porque já está medido.

`e10.1` — porque `e10` cria demanda por vazão de revisão, e a única oferta disponível é automática. **Retroação positiva perigosa**: cada ganho de vazão do revisor automático aumenta o volume que o sistema tolera, sem aumentar a compreensão humana. Sinal forte.

`e10.1.1` — porque `e10.1` torna a métrica de revisão indistinguível entre humano e agente — o que o estudo da EASE 2026 **já demonstrou** no AIDev. Confiança média, não baixa, exatamente porque o mecanismo já está documentado; o que falta é a resposta institucional.

`e10.2` — porque `e10` mostra que o tamanho do PR é a variável que estoura o orçamento de atenção (408 contra 157 linhas), e a resposta óbvia é mudar a unidade. Sinal fraco: ninguém fez ainda.

`e11` — porque o custo de inserir código novo caiu abaixo do de localizar e reusar o existente, e a escolha default vira duplicar. Sinal **forte** com a série da GitClear: refatoração de 21% para 3,8%, duplicação +81%, chamadas entre arquivos −35%. Confiança média porque correlação com assistência de IA não é prova de causa — a própria GitClear infere.

`e11.1` — porque `e11` degrada a legibilidade da base, e quando entender custa mais que refazer, refaz-se. Confiança **baixa**: supõe que a especificação capture o comportamento real, o que raramente é verdade em sistema antigo.

`e11.1.1` — porque `e11.1` repetido vira política. Confiança baixa e explicitamente em contradição com `e15` (ver 5.3).

`e12` — porque o teste é a única afirmação sobre o sistema que o agente não pode alegar ter entendido: ou passa, ou não passa. Mecanismo limpo, sinal médio.

`e12.1` — porque `e12` faz do teste o único filtro barato de admissão. Prazo 2028.

`e13` — porque a medição contradiz a percepção (METR: 19% mais lentos, percebendo-se 20% mais rápidos), e organizações que medem agem sobre a medida. Sinal **forte** com evidência brasileira: 80% das empresas brasileiras já interromperam ou reverteram implantações por governança, 39% das reversões após vazamento de dado (Sinch, 2.527 executivos). Confiança média porque reversão por governança não é a mesma coisa que reversão por produtividade.

`e13.1` — porque `e13` precisa de um instrumento de contenção, e o instrumento conhecido para excesso de trabalho em curso é o teto de trabalho em curso.

`e13.1.1` — porque `e13.1` torna a revisão o recurso escasso, e preço segue escassez. Confiança baixa: salário tem inércia.

`e14` — porque a triagem é doação e a geração é produto, e ninguém doa indefinidamente contra volume crescente. Sinal **forte** e confiança **alta**: o curl não é previsão, é o óbito. Prazo 2027 para o segundo e o terceiro caso.

`e14.1` — porque `e14` torna a recompensa por falha um ímã de lixo em vez de um ímã de pesquisa: a taxa de confirmação do curl caiu de acima de 15% para abaixo de 5%, enquanto o volume de submissões subiu e o de programas comparáveis (Ruby, Node, Rails) não subiu. Prazo 2028.

**Raiz 4 — a responsabilidade.**

`e15` — porque a diretiva classifica software como produto e presume defeito em casos definidos, a defesa disponível passa a ser prova de diligência. Prazo **2028** (e não 2027) porque transposição em 09/12/2026 não produz efeito imediato: falta o caso. Confiança média.

`e15.1` — porque `e15` transforma "quem aprovou" em elemento de defesa, e o que é elemento de defesa vira registro obrigatório. Sinal fraco: existe vontade, não existe padrão.

`e15.1.1` — porque `e15.1` cria um número auditável — a fração não lida — e seguro precifica número auditável. Confiança baixa.

`e16` — porque responsabilidade objetiva sempre é repassada pela cadeia por via contratual, e quem tem poder de barganha repassa. Sinal médio, confiança média. **Este é o efeito de quem bloqueia da raiz 4.**

`e16.1` — porque `e16` precisa de uma condição verificável para o repasse funcionar, e revisão comprovada é a condição natural.

`e17` — porque o setor regulado responde a risco novo proibindo antes de entender, e o custo do erro ali é maior. **Retroação da raiz 4**: o ganho de velocidade não chega onde o software é mais caro, o que reduz o retorno econômico agregado da programação agêntica. Confiança média.

`e17.1` — porque `e17` na forma de proibição total é caro demais, e a alternativa conhecida é permissão graduada. O incidente da Replit em 18/07/2025 é o argumento pronto: um congelamento de código declarado não foi respeitado, o que significa que a contenção precisa ser de permissão e não de instrução.

`e17.1.1` — porque `e17.1` exige atribuir ação a ator, e atribuir ação a ator exige identidade. Confiança baixa, sinal fraco.

### 5.2 Cobertura: STEEP e quem perde

- **Social** — `e5`, `e5.1`, `e5.2`, `e14`: porta de entrada da profissão, formação, saída de mantenedor.
- **Tecnológico** — `e3`, `e6`, `e7`, `e9`, `e12`: interface, dependência, cadeia de suprimento, linguagem, teste.
- **Econômico** — `e1`, `e10`, `e11`, `e13`, `e13.1.1`, `e15.1.1`: unidade de medida, gargalo, dívida, contenção, preço do risco.
- **Político e regulatório** — `e15`, `e16`, `e17`: responsabilidade, contrato, proibição setorial.
- **Ecológico** — **categoria vazia, e registro que ficou vazia.** Não achei fonte aberta que ligue programação agêntica a consumo energético de forma específica. O consumo de inferência é real e conhecido, mas um efeito do tipo "mais agentes, mais energia" serviria para qualquer tema deste catálogo, e portanto falha no teste de especificidade da skill. Fica de fora deliberadamente. Ver seção 12.

**Quem perde, nomeado:** o programador júnior (`e5`), o mantenedor de projeto aberto não financiado (`e14`), o pesquisador de segurança que vivia de recompensa (`e14.1`), o revisor humano cuja leitura deixou de ser visível (`e10.1.1`), o designer cujo artefato deixou de ser a entrega (`e2.1`), e as equipes de setor regulado que pagam o custo da contenção sem colher a velocidade (`e17`).

### 5.3 Cruzamentos

**Convergência 1 — o fechamento da porta.** `e4` (raiz 1) e `e14` (raiz 3) chegam ao mesmo lugar por caminhos diferentes: a raiz 1 fecha a porta porque o autor não entende o que submete; a raiz 3 fecha porque a triagem custa mais do que a contribuição vale. Duas raízes independentes convergindo no mesmo efeito de segunda ordem é o achado mais forte deste mapa — e é o único ponto em que já existe, hoje, decisão consumada de duas instituições distintas (curl e GitHub).

**Convergência 2 — a infraestrutura de proveniência.** `e7.1` (assinar e isolar skill, raiz 2) e `e15.1` (registrar quem aprovou o quê, raiz 4) exigem **a mesma infraestrutura**: uma cadeia verificável do artefato até o ator. Quem construir uma terá construído a outra. Isto é uma previsão de produto, não só de efeito: a empresa que resolver assinatura de skill resolve prova de diligência jurídica de graça.

**Retroalimentação negativa — a medição que freia a raiz.** `e13` (organizações que mediram restringem) realimenta a raiz 1 reduzindo a autonomia concedida. É o único freio endógeno do mapa que não depende nem de lei nem de exaustão humana — depende só de medir. Por isso `e1.1` (a ferramenta que separa as populações) é mais importante do que parece: sem ela, `e13` não dispara.

**Retroalimentação positiva — o revisor automático.** `e10.1` alivia o sintoma e agrava a causa: mais vazão de revisão permite mais volume gerado, e o ciclo fecha com `e10.1.1` — a métrica deixa de significar supervisão. É o mecanismo que transforma a raiz 3 em problema crônico em vez de crise aguda. Crise aguda se resolve; crônica se administra indefinidamente.

**Contradição, registrada e não resolvida.** `e11.1.1` (software de médio porte vira descartável, com ciclo de vida em meses) e `e15` (responsabilidade objetiva por defeito, com dever de atualização de segurança) **não podem coexistir sem tensão**: a diretiva impõe manutenção de segurança pós-lançamento, o que pressupõe que alguém continue responsável por um artefato que a economia da raiz 3 empurra para o descarte. O que decide entre elas: **se a especificação for aceita como prova de diligência**, o descartável vence, porque se refaz do documento; se a prova exigida for a leitura do código, o descartável perde, porque ninguém lê o que é para jogar fora. Mantenho as duas vigentes.

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

**A inspeção do processo do agente como produto.** O catálogo da turma trouxe `vibe-log` e `claude-tap` — ferramentas cuja função não é gerar código, e sim **mostrar o que o agente fez**. Hoje são utilitários de uma pessoa só. *O que mudaria:* se a prova de diligência da raiz 4 exigir trilha de execução, essas ferramentas deixam de ser curiosidade e viram requisito contratual — e a auditoria de processo vira um mercado do tamanho do de auditoria de código. *Sinal observável de crescimento:* a primeira exigência de trilha de execução de agente num edital público de contratação de software, ou numa apólice de seguro.

**A razão de legitimidade publicada por repositório.** O relato de "1 em cada 10 PRs criados com IA é legítimo" (Voiceflow, na discussão do GitHub em 03/02/2026) é hoje uma frase de um engenheiro. *O que mudaria:* se essa razão virar um número exibido por repositório, como hoje se exibe cobertura de teste, ela se torna a métrica que governa `e4.1` e `e4.1.1` — e reputação em código aberto muda de base da noite para o dia. *Sinal observável:* um selo ou distintivo de taxa de aceitação de contribuição de agente aparecendo em `README` de projeto grande.

**A linguagem escolhida para o agente, não para a pessoa.** O Octoverse 2025 registra TypeScript em primeiro lugar com 2,6 milhões de contribuidores (+66%) e liga isso ao efeito das ferramentas de IA sobre a escolha de linguagem. *O que mudaria:* se a próxima linguagem de sucesso for desenhada explicitamente para leitura por agente — erro exaustivo, ausência de açúcar sintático ambíguo, efeito colateral declarado —, `e9` deixa de ser tendência e vira ruptura própria. *Sinal observável:* uma linguagem nova cujo material de divulgação cite taxa de acerto de agente como argumento de venda.

**O harness como campo acadêmico.** O levantamento de 14/06/2026 com a taxonomia de seis responsabilidades é um artefato de institucionalização: quando um campo ganha taxonomia, ganha currículo, conferência e critério de revisão. *O que mudaria:* se "engenharia de harness" virar disciplina, a competência que hoje é artesanal vira certificável — e o mercado de trabalho de `e5.2.1` ganha um nome. *Sinal observável:* uma trilha dedicada a harness numa conferência estabelecida de engenharia de software.

**A escolha de um aluno de mundos virtuais.** No levantamento da própria turma, entre cerca de 500 bibliotecas de narrativa e jogo, a escolha número um de desenvolvimento foi um agente de código. Isto não é dado de mercado; é sinal de deslocamento de atenção em quem ainda está se formando. *O que mudaria:* se a ferramenta central de quem faz mídia interativa for o agente e não o motor de jogo ou a biblioteca de narrativa, o objeto da disciplina muda de lugar. *Sinal observável:* a próxima turma escolhendo agentes em galerias que não são sobre programação.

### 6.2 Wildcards

**Wildcard 1 — O incidente de cadeia de suprimento por skill, com dano em cascata e responsável identificado.**
*Mecanismo:* uma skill popular num registro público recebe, como o `postmark-mcp` recebeu em setembro de 2025, uma versão com uma linha maliciosa depois de várias versões limpas. A skill não pede permissão nova: ela já roda com a permissão do agente, que tem acesso ao repositório, às credenciais do ambiente e ao pipeline de publicação. Milhares de máquinas de desenvolvimento executam a instrução envenenada antes que alguém leia o diff do Markdown — porque **ninguém revisa diff de instrução como revisa diff de código**. O dano não é roubo de dado: é publicação de artefato comprometido a partir de máquinas confiáveis.
*Por que é improvável:* assinatura e isolamento já estão sendo empurrados pelos provedores (`e7.1`), e os registros maiores têm curadoria.
*O que faria com o mapa:* colapsaria `e7` de 2027 para imediato, anteciparia `e15.1` e `e17` em dois a três anos, e provavelmente mataria o registro público aberto de skills como modelo — empurrando tudo para catálogo curado de fabricante, o que reverteria a convergência entre concorrentes que é a base da raiz 2.
*Sinal precoce:* o primeiro CVE crítico atribuído a uma **skill** (não a um servidor MCP, não a um pacote npm) com mais de cem mil instalações.

**Wildcard 2 — A primeira condenação por defeito em código gerado por agente, com o revisor humano no polo passivo.**
*Mecanismo:* sob a Diretiva (UE) 2024/2853, com transposição até 09/12/2026, um defeito causa dano; a presunção de defeito se ativa porque a prova de processo foi sonegada ou não existia; e a responsabilidade recai sobre quem integrou — não sobre quem fez o modelo, que nem é parte. O tribunal aceita como prova de ausência de diligência exatamente o que o estudo da EASE 2026 documentou: registro de revisão que não corresponde a leitura humana.
*Por que é improvável até 2031:* litígio de produto é lento, e a cadeia causal entre código gerado e dano é difícil de estabelecer.
*O que faria com o mapa:* `e15.1` viraria obrigatório e imediato, `e10.1.1` sairia de terceira ordem para primeira, e `e11.1.1` (software descartável) morreria — ninguém descarta o que pode ser pedido em juízo dois anos depois.
*Sinal precoce:* uma seguradora oferecendo, em qualquer país da União Europeia, apólice com pergunta explícita sobre fração de código não revisado por humano.

**Wildcard 3 — O colapso de credibilidade dos benchmarks.**
*Mecanismo:* a evidência de contaminação e de falha de desenho de teste em benchmarks de código se acumula a ponto de a curva de capacidade percebida ser reconhecida como artefato de medição — e a Epoch AI já registra que parte do salto recente veio de troca de arcabouço, não de modelo. Se a correção for grande, o argumento "o agente já resolve 90% dos problemas reais" perde sustentação pública.
*Por que é improvável:* benchmark desacreditado costuma ser substituído por outro, não abandonado; e a experiência prática dos usuários não depende de leaderboard.
*O que faria com o mapa:* nada nas raízes 3 e 4 — elas não dependem de capacidade —, mas empurraria as raízes 1 e 2 para prazos mais longos e rebaixaria a confiança de `e3` e `e8`. **Este wildcard é o teste de solidez do mapa: se ele acontecer e o mapa continuar de pé, é porque as raízes certas foram escolhidas.**
*Sinal precoce:* um fabricante grande deixando de publicar pontuação de benchmark de código num lançamento.

## 7. Contra o próprio mapa

Este é o passo em que se tenta derrubar o que acabou de ser escrito. A bateria abaixo foi rodada sobre o mapa pronto, e **alterou o mapa** — o registro de alterações no fim da seção é auditável e traz o valor antes e depois.

### 7.1 Pré-mortem — é 2031 e este mapa estava errado. Por quê?

**Razão 1, a mais provável: o gargalo da revisão foi resolvido por engenharia, não por instituição.** Em 2031 olha-se para trás e o que aconteceu foi banal: os agentes passaram a produzir mudanças pequenas, tipadas, com teste e com justificativa legível, e a revisão automática ficou boa o bastante para que o humano confie nela como hoje confia num compilador. A assimetria da raiz 3 não desapareceu — ela foi absorvida por uma camada de máquina, do mesmo jeito que o custo de verificar tipos foi absorvido pelo compilador. *Consequência aplicada:* rebaixei `e10.2` e mantive `e10.1` com confiança média em vez de alta, porque se esta razão valer, `e10.1` é a solução e não o problema.

**Razão 2: a raiz 4 não se materializou.** A transposição da diretiva acontece em dezembro de 2026, mas até 2031 não há caso emblemático; as empresas ajustam termos contratuais, os seguros absorvem o risco em prêmio, e a mudança de comportamento fica no papel. Regulação sem caso é letra. *Consequência aplicada:* rebaixei `e15` e adiei o prazo.

**Razão 3: superestimei a velocidade de adoção do agente autônomo.** Os números que usei — 14,1% de uso diário, 37,9% sem planos — podem ser o teto, não a rampa. O ensaio da METR deu resultado negativo; a desconfiança medida no Stack Overflow é alta e **subiu**, não caiu; e 66% citam "quase certo, mas não exatamente" como frustração principal. É perfeitamente possível que a programação agêntica estabilize como ferramenta de uma minoria produtiva e nunca vire o padrão. *Consequência aplicada:* rebaixei `e3` e ampliei o prazo de `e2`.

### 7.2 Extrapolação linear — o que é só "mais do mesmo, maior"

Três efeitos eram extrapolação e foram tratados:

- `e10` (a revisão vira gargalo) é a linha reta do que já se mede. Mantive porque **não é previsão**, é consolidação de um fato com três medições independentes — mas por isso mesmo não vale como achado. O achado está nos filhos dele.
- `e11.1` (reescrever fica mais barato que entender) era extrapolação pura da curva da GitClear. Ganhou o mecanismo de não-linearidade que faltava: o ponto de virada é quando a especificação passa a existir de forma confiável (`e8.1`), e não quando a duplicação atinge um valor qualquer. Com isso, ele deixou de ser "a curva continua" e virou "a curva cruza outra curva".
- `e3.1` (orquestração vira produto) era "mais ferramentas". Ganhou o limite de `e3.1.1`, que é o que o torna interessante: o produto existe e tem teto humano conhecido.

### 7.3 Velocidade de adoção — os prazos que exigiam mais do que já se viu

Confrontei cada prazo com sinal fraco contra a classe de referência declarada na seção 5.1. Dois não passaram:

- `e2.1.1` (designer aprova diferença de código): exigia que uma competência ausente do currículo de design aparecesse em cinco anos. Nenhuma classe de referência de formação profissional faz isso em cinco anos sem pressão de emprego imediata. Mantive o prazo em 2031 mas **rebaixei a confiança**, e deixo registrado: é o efeito mais provável de estar errado por otimismo do autor sobre o próprio público.
- `e5.1.1` (competência de revisão demora mais a se formar): eu tinha posto 2030. É um efeito de coorte — depende de uma geração inteira entrar e subir. Nenhum efeito de coorte acontece em quatro anos. **Empurrei para 2032, fora do horizonte do mapa**, e declarei isso na prosa da seção 5.1.

### 7.4 A raiz que não acontece — o que sobra do mapa

- **Sem a raiz 1** (o agente não fica confiável o bastante para agir sozinho): sobram as raízes 3 e 4 quase intactas, porque a assimetria produzir/verificar já está medida com assistência de IA sem agência (LinearB mede PR assistido, não só agêntico) e a responsabilidade jurídica não depende de agente nenhum. Caem `e1` a `e5` e parte da raiz 2. **O mapa perde um terço e continua de pé.**
- **Sem a raiz 2** (a instrução empacotada não vira formato estável): cai a cadeia `e6`–`e9` inteira e enfraquece `e8` e `e11.1`, que dependem de especificação confiável. As raízes 1, 3 e 4 não se movem.
- **Sem a raiz 3**: o mapa desaba. Quase todo efeito interessante — `e4`, `e10`, `e11`, `e13`, `e14`, e boa parte da raiz 4 — passa por ela. **Este é o risco real de este mapa ter uma raiz só disfarçada em quatro.** Assumo explicitamente: a raiz 3 é a raiz principal, e as outras três são, em parte, condições e consequências dela. O teste de separação que aplico: a raiz 3 tem mecanismo próprio (razão de custos), evidência própria (LinearB, GitClear, curl) e um caso consumado que não envolve agente nenhum (relatórios de vulnerabilidade gerados por chat, não por agente, mataram a recompensa do curl). Isso a mantém separada — mas o leitor deve ler as raízes 1, 2 e 4 como satélites.
- **Sem a raiz 4**: cai `e15`–`e17`. O mapa perde o freio institucional e fica mais rápido e mais sombrio, não mais errado.

### 7.5 Suposições escondidas, agora ditas

1. **Que o custo de inferência continua caindo ou pelo menos não sobe.** Se o preço por tarefa subir, toda a assimetria da raiz 3 se atenua sozinha — gerar volta a custar. Nenhuma fonte aberta nesta rodada mede isso. É a premissa mais frágil do mapa inteiro.
2. **Que o modelo continua acessível por interface programática a terceiros.** Se os fabricantes fecharem o acesso a agentes de terceiros, a raiz 2 morre e a raiz 1 vira produto de três empresas.
3. **Que a regulação europeia tem efeito extraterritorial de fato**, como teve com a proteção de dados. Se não tiver, a raiz 4 vira um fenômeno regional.
4. **Que revisão humana é de fato melhor que revisão automática.** O mapa inteiro trata a leitura humana como padrão-ouro. Não abri nenhum estudo que sustente isso em 2026. É a suposição mais confortável e menos examinada aqui — e se ela for falsa, `e10.1` deixa de ser retroação perigosa e vira solução.
5. **Que o pull request continua existindo como formato.** `e10.2` é a única linha do mapa que duvida disso.

### 7.6 Viés do autor

Três, nomeados.

**Viés 1 — eu sou o público deste mapa e uso essas ferramentas todo dia.** Este documento foi produzido por um agente de código operando sob uma skill, o que é uma ilustração do tema e também uma fonte de viés: o mapa tende a superestimar o quanto a prática já é normal. O contrapeso está nos números: 14,1% de uso diário.

**Viés 2 — o efeito `e2.1.1` está aqui porque eu queria que estivesse.** "Designers passam a aprovar diferença de código" é a conclusão que mais interessa a uma disciplina de mídia e interação, e é a que tem menos evidência no mapa inteiro. Está mantida com confiança baixa e sinalizada aqui.

**Viés 3 — a escolha de tratar a assimetria como raiz, e não a capacidade, é uma escolha estética.** Ela torna o mapa mais elegante e menos dependente de previsão de capacidade. Também é conveniente: torna o mapa difícil de falsear no curto prazo, porque a assimetria já está medida. Um mapa que aposta em capacidade erra mais rápido e mais claramente — e talvez fosse mais honesto por isso.

### 7.7 Calibração

Distribuição final, contada pelo verificador: ordem 1 — alta 5, média 12, baixa 0; ordem 2 — alta 2, média 17, baixa 1; ordem 3 — alta 0, média 1, baixa 13. A confiança cai com a ordem, como exigido. A ausência de "baixa" na primeira ordem é deliberada: efeito de primeira ordem sem confiança mínima não deveria estar na primeira ordem.

### 7.8 Registro de alterações — antes → depois

A bateria derrubou alguma coisa em cada raiz. Cota cumprida.

**Raiz 1:**
- `e2`: prazo **2028 → 2029** — porque a classe de referência do protótipo clicável dá quatro anos a partir de ferramenta acessível, e o marco é 2025, não 2024.
- `e3`: confiança **alta → media** — porque o pré-mortem 3 é plausível, e porque a IDE já reabsorveu o terminal uma vez na história.
- `e2.1.1`: confiança **media → baixa** — porque exige competência ausente do currículo de design em prazo sem classe de referência.
- `e5.1.1`: prazo **2030 → 2032**, declarado fora do horizonte — porque efeito de coorte não acontece em quatro anos.
- **Removido:** *"Ferramentas de design de interface perdem mercado para geração direta de componente"* — falhou no teste da causa solta: aconteceria do mesmo jeito por consolidação de mercado de ferramenta de design, sem agente nenhum. Vai para a seção 12.

**Raiz 2:**
- `e9`: confiança **alta → media** — porque o Octoverse atribui a subida do TypeScript a um conjunto de causas e a IA é uma delas, não a causa isolada; e porque "linguagem competindo por legibilidade para agente" é interpretação minha do dado, não afirmação da fonte.
- `e6.1.1`: sinal **medio → fraco** — porque não encontrei nenhum incidente público atribuído a atualização de instrução. É inferência, e o sinal tem de dizer isso.
- **Removido:** *"Surge um gerente de pacotes de skills dominante, como o npm foi para JavaScript"* — é o mesmo efeito de `e6` amadurecendo, não outra ordem. Removido pela regra de parada. Vai para a seção 12.

**Raiz 3:**
- `e11.1`: confiança **media → baixa** — porque supõe que a especificação capture o comportamento real de sistema antigo, o que raramente é verdade e é justamente o que torna sistema antigo caro.
- `e13`: confiança **alta → media** — porque a evidência brasileira que eu estava usando (80% reverteram implantação) é sobre governança e vazamento de dado, **não sobre produtividade**. Usar um número para sustentar a conclusão vizinha é o erro mais comum deste tipo de mapa, e eu o cometi na primeira passagem.
- **Removido:** *"A dívida técnica vira classe de ativo com preço de mercado"* — plausível, sem mecanismo que eu conseguisse escrever. Pela regra da skill, efeito sem mecanismo não entra. Vai para a seção 12.

**Raiz 4:**
- `e15`: prazo **2027 → 2028** e confiança **alta → media** — porque transposição não é jurisprudência, e a diretiva sem caso é letra.
- `e15.1`: sinal **medio → fraco** — porque o que existe hoje é vontade declarada em texto de consultoria, não produto em uso.
- **Removido:** *"Surge uma autoridade certificadora de agente de código, como existe para assinatura digital"* — falhou no teste da causa solta e no da especificidade: certificação de fornecedor de IA está sendo discutida por causa do AI Act como um todo, não por causa de programação agêntica. Vai para a seção 12.

## 8. O que a máquina errou

Sou eu, a máquina, relatando o próprio trabalho desta rodada. Sete itens específicos.

1. **Usei um número brasileiro para sustentar a conclusão errada.** Na primeira passagem, `e13` (organizações que mediram restringem o uso autônomo) citava os 80% de empresas brasileiras que reverteram implantações como evidência de que a produtividade não se confirmou. O estudo da Sinch diz outra coisa: as reversões foram **por governança**, com 39% após vazamento de dado. São fenômenos vizinhos e diferentes. Percebi ao reler o trecho extraído da fonte e ver que a palavra "produtividade" não aparecia nele. Corrigido na seção 5.1 e registrado em 7.8.

2. **Citei o DORA 2025 de uma página que era só índice.** A página `dora.dev/dora-report-2025/` abriu, mas entrega apenas o enquadramento ("a IA é amplificador") e números de escala do GitHub e do GitLab — não os percentuais de adoção e confiança que apareciam nos resumos de busca. Os números de 90% de adoção e 24% de confiança que circulam **não estão neste documento** porque eu não abri o relatório completo. Isso enfraquece a seção 3.1 mais do que eu gostaria.

3. **A tabela do Terminal-Bench não abriu e eu quase usei o resumo de busca.** O painel público entregou a descrição do benchmark e os cabeçalhos da tabela, sem as linhas. Os valores que apareceram no resumo de busca — pontuações, nomes de modelo, custo por token — **não foram verificados** e por isso estão na seção 12, não na 3. Escrever "o melhor agente faz 0,8 no Terminal-Bench" teria sido fácil, plausível e sem fonte aberta.

4. **Atribuí ao levantamento da Checkmarx precisão que ele não tem.** Ele nomeia incidentes e datas, mas **não fornece CVE, CVSS nem contagem de instalação para nenhum deles**. Os números que circulam em resumo de busca — 150 milhões de downloads, 200 mil instâncias vulneráveis, CVE-2025-6514 com 9,6 de CVSS — não entraram no documento. A tentação era grande porque eles tornariam `e7` muito mais forte.

5. **A classe de referência de "transposição de diretiva até primeira decisão estruturante" é de memória.** Escrevi na seção 5.1 que `e15` leva até 2028 e sustentei isso com uma intuição sobre litígio de produto, não com um número verificado. Está declarado ali e aqui; deveria ter sido buscado e não foi.

6. **A afirmação sobre o Código de Defesa do Consumidor brasileiro não tem fonte aberta.** Ela aparece na seção 3.5 marcada como suposição. É provavelmente correta e mesmo assim não deveria ter sido escrita sem verificação — é exatamente o tipo de afirmação jurídica que uma IA produz com fluência e sem base.

7. **Li o resumo de dois artigos e não o corpo.** O estudo da EASE 2026 e o de segurança em PRs agênticos foram lidos pelo resumo na página do arXiv; a tentativa de abrir o PDF do primeiro devolveu só metadados e estrutura. As afirmações que faço a partir deles são as do resumo, e o resumo é do autor — não vi as tabelas. Onde escrevi "a maioria dos PRs gerados por IA não recebe revisão nenhuma", a palavra "maioria" é do resumo e eu não sei qual é o número.

Um oitavo, de natureza diferente: **o viés de produzir um mapa favorável ao próprio tema é estrutural aqui**, porque este documento foi escrito por um agente de código sobre agentes de código. A seção 7.6 nomeia isso, mas nomear não neutraliza.

## 9. Três cenários para 2031

**Provável — a orquestração virou trabalho, e a revisão virou o emprego.**
É 2031. Quase todo desenvolvimento profissional passa por agente em alguma etapa, e ninguém acha isso notável — do mesmo jeito que ninguém acha notável usar controle de versão. O que mudou de verdade foi a divisão do dia: escrever ocupa pouco, especificar ocupa bastante, e revisar ocupa a maior parte. As equipes são menores e mais velhas; a vaga de entrada existe, mas se chama outra coisa e exige julgamento antes de exigir escrita. Os projetos abertos grandes trabalham com porta fechada — contribuição de fora é por convite ou por declaração de autoria —, e a recompensa por falha praticamente sumiu do software livre. A dívida técnica não é um problema de prazo, é um problema de arqueologia: há bases de código que ninguém leu inteiras. A infraestrutura de proveniência existe porque o seguro exigiu, não porque a engenharia quis. *Sinal precoce de que estamos neste cenário:* a métrica de "tempo até o revisor" entrar no relatório trimestral de uma empresa de capital aberto como indicador de eficiência.

**Desejável — a verificação virou barata e a porta continuou aberta.**
É 2031. O ganho de velocidade da geração foi acompanhado por um ganho equivalente na verificação, e isso aconteceu porque três coisas foram construídas de propósito: unidades de mudança pequenas o bastante para caber numa leitura, prova verificável de que um humano leu, e teste como especificação executável em vez de rede de segurança. A contribuição aberta sobreviveu porque a triagem foi financiada — fundos de manutenção passaram a pagar revisão, não desenvolvimento. A porta de entrada da profissão se reabriu por um caminho diferente: entra-se revisando, com autonomia crescente e com trilha auditável do que se aprovou, o que é uma forma de aprendizado melhor documentada do que a antiga. *O que teria que ser feito para chegar aqui:* alguém precisa pagar pela revisão, e a única entidade com incentivo para isso é quem responde pelo defeito — ou seja, o cenário desejável depende da raiz 4 funcionando, não falhando. *Sinal precoce:* um fundo de sustentação de código aberto anunciando linha específica para triagem, com valor por contribuição revisada.

**Indesejável — ninguém leu, e a conta chegou.**
É 2031. O volume venceu. A revisão automática absorveu o crescimento e a leitura humana virou ficção administrativa: os registros dizem "revisado", as auditorias aceitam os registros, e o número de pessoas que entendem qualquer sistema dado cai a cada ano. A dívida técnica deixou de ser mensurável porque não há com o que comparar — a base de referência também foi gerada. O primeiro incidente sério de cadeia de suprimento por instrução já aconteceu e a resposta foi fechar os registros abertos, o que concentrou a camada de skills em três fornecedores. A porta de entrada da profissão fechou de um lado e não abriu do outro: contrata-se sênior, não se forma sênior. E a responsabilidade, que a lei tentou fixar, foi distribuída por contrato até desaparecer — todo mundo responde um pouco, ninguém responde de fato. *Sinal precoce deste cenário:* a proporção de pull requests com revisão exclusivamente automática ultrapassando a metade num repositório grande e isso não gerar reação nenhuma.

## 10. O experimento

### O mutirão de revisão

**O que é.** Um repositório real, pequeno e desconhecido da turma (uma biblioteca de código aberto de porte médio, com testes). Três agentes diferentes recebem a mesma lista de doze issues reais e abrem pull requests. Em paralelo, quatro pessoas da turma resolvem quatro dessas issues à mão. Os PRs entram numa fila **anônima e embaralhada**: ninguém sabe o que é de agente e o que é humano. Cada participante revisa e decide aceitar, pedir mudança ou rejeitar, **cronometrando a decisão**. Depois se abre o gabarito: o que era de quem, quais testes passavam de verdade, quais defeitos escaparam.

**Que pergunta sobre o futuro ele ajuda a responder.** A pergunta central deste mapa, que é a raiz 3: **verificar é mesmo mais caro do que produzir, e quanto?** Mede três coisas que a literatura aberta ainda não cruza numa sala: (a) tempo mediano de decisão por PR de agente contra PR humano; (b) taxa de escape de defeito nos dois; (c) se revisores às cegas conseguem distinguir a autoria — que é o teste direto da frase "o modelo de confiança da revisão está quebrado".

**Que tecnologia emergente usa, e por que não dá com a madura.** Usa agente de terminal com permissão de escrita e abertura de PR, e um harness mínimo por agente (três configurações diferentes, para que a variação de harness apareça). Não dá com autocompletar de IDE nem com chat: os dois produzem sugestões dentro do editor de quem já está lendo o código. **O objeto do experimento é justamente o artefato que chega pronto a alguém que não participou de sua produção** — e isso só existe com agente que age.

**O que a turma faz quando testar isso em sala.** Uma aula de duas horas: 20 minutos de preparo e regras, 60 minutos de fila de revisão cronometrada, 40 minutos de abertura do gabarito e discussão. Os dados saem em planilha na hora. A discussão tem uma pergunta obrigatória: *quanto tempo você levaria para revisar isto de verdade, e quanto tempo você levou?*

**O resultado que me faria mudar de ideia.** Se o tempo mediano de decisão por PR de agente for **igual ou menor** que o do PR humano **e** a taxa de escape de defeito for igual ou menor, a raiz 3 deste mapa está errada na forma em que a escrevi — a assimetria seria um problema de qualidade de agente, e não uma mudança estrutural de custo. Nesse caso `e10`, `e11`, `e13` e `e14` perdem a base, e o mapa vira um mapa sobre a raiz 1 apenas.

Um segundo resultado que me faria mudar de ideia, mais sutil: se os revisores **acertarem a autoria** com alta taxa. Se dá para reconhecer o PR de agente pela leitura, então o mercado de proveniência (`e15.1`) e a exigência de declaração (`e4.1`) resolvem-se sozinhos, por convenção social, e não precisam de infraestrutura nem de lei.

## 11. Fontes

Vinte e nove páginas abertas em 10/09/2026. Só entra o que abriu. Onde a página abriu parcialmente, está dito.

1. **Stack Overflow Developer Survey 2025 — seção de IA.** https://survey.stackoverflow.co/2025/ai — sustenta os números de adoção de agentes (14,1% diário, 9% semanal, 7,8% mensal, 37,9% sem planos, n=31.877), a distribuição de confiança (3,1% confiam muito; 19,6% desconfiam muito, n=33.244) e as frustrações (66% "quase certo"; 45,2% depurar consome mais tempo). *Confiabilidade: alta para tendência e amostra grande; autosseleção de respondentes é o viés conhecido e declarado pela própria pesquisa.*
2. **METR — Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity.** https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/ — sustenta o resultado de 19% de lentidão, o desenho (16 desenvolvedores, 246 tarefas, repositórios com média de 22 mil estrelas e mais de 1 milhão de linhas) e o descolamento percepção/medida. *Confiabilidade: alta no desenho (ensaio controlado aleatorizado, raro neste campo); os próprios autores listam o que o resultado não generaliza.*
3. **AIDev: Studying AI Coding Agents on GitHub** (Hao Li, Haoxiang Zhang, Ahmed E. Hassan, 09/02/2026). https://arxiv.org/abs/2602.09185 — sustenta 932.791 PRs de agente, 116.211 repositórios, 72.189 desenvolvedores, subconjunto curado de 33.596 PRs em 2.807 repositórios. *Confiabilidade: alta; é dado observacional de plataforma, publicado em conferência de mineração de repositórios. Lido pelo resumo.*
4. **These Aren't the Reviews You're Looking For: How Humans Review AI-Generated Pull Requests** (Duma, Wróblewski, Bobińska, Winiarska, Przymus; EASE 2026; 05/05/2026). https://arxiv.org/abs/2605.02273 — sustenta que a maioria dos PRs de IA não recebe revisão, que a revisão existente é dominada por agentes, e que métricas de revisão deixaram de indicar supervisão humana. *Confiabilidade: média-alta; conferência revisada por pares, mas li o resumo — a tentativa de abrir o PDF devolveu só metadados.*
5. **The Productivity-Reliability Paradox: Specification-Driven Governance for AI-Augmented Software Development** (Sabry E. Farrag, 01/05/2026). https://arxiv.org/abs/2605.01160 — sustenta a síntese dos números contraditórios (ganhos de 20–56%, lentidão de 19%, 98% mais PRs com 91% mais revisão em telemetria de mais de 10 mil desenvolvedores) e a tese de que a especificação é a restrição vinculante. *Confiabilidade: média; é revisão multivocal de 67 fontes, não estudo primário — os números são de terceiros e herdam a confiabilidade deles.*
6. **From Question Answering to Task Completion: A Survey on Agent System and Harness Design** (Jianyuan Guo e outros, 14/06/2026). https://arxiv.org/abs/2606.20683 — sustenta a definição de harness, as seis responsabilidades de tempo de execução e a formulação do gargalo modelo × harness × acoplamento. *Confiabilidade: média-alta como mapeamento de campo; é levantamento, não medição.*
7. **Security in the Age of AI Teammates: An Empirical Study of Agentic Pull Requests on GitHub** (Siddiq, Zhao, Lopes, Casey, Santos; 01/01/2026, revisado 03/09/2026). https://arxiv.org/abs/2601.00477 — sustenta que PRs de agente ligados a segurança são cerca de 4% do total, com menor taxa de integração e maior latência de revisão, e que a rejeição se associa mais a complexidade e verbosidade que ao tema. *Confiabilidade: média-alta; em revisão de periódico. Lido pelo resumo.*
8. **Rethinking Software Engineering for Agentic AI Systems** (Mamdouh Alenezi, 12/04/2026). https://arxiv.org/abs/2604.10599 — sustenta a formulação de que o código passa de artefato escasso a mercadoria abundante e descartável, e de que a disciplina se reorganiza em torno de orquestração, verificação e colaboração. *Confiabilidade: baixa-média como evidência; é artigo de posição, usado aqui como formulação, não como dado.*
9. **AI Incident Database — incidente 1152 (Replit).** https://incidentdatabase.ai/cite/1152/ — sustenta a data (18/07/2025), a exclusão do banco de produção durante congelamento de código, os mais de 4.000 registros fabricados e a classificação MIT. *Confiabilidade: alta como registro curado de incidente; a narrativa original é do usuário afetado.*
10. **GitHub Octoverse 2025.** https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/ — sustenta 180 milhões de desenvolvedores, 630 milhões de repositórios, 986 milhões de commits, 43,2 milhões de PRs integrados por mês, mais de 1 milhão de PRs do agente do Copilot entre maio e setembro de 2025, 81,5% de contribuição em repositório privado, 80% dos novos usando Copilot na primeira semana e TypeScript em primeiro com 2,6 milhões de contribuidores. *Confiabilidade: alta para os números da própria plataforma; é relatório de fabricante e a seleção do que se publica é interessada.*
11. **Spec Kit — documentação oficial** (atualizada em 21/08/2026). https://github.github.com/spec-kit/ — sustenta a definição de harness dirigido por intenção, o fluxo Spec → Plan → Tasks → Implement, as 38 integrações e os números de comunidade (mais de 130 mil estrelas, 270+ contribuidores, 157 extensões, 33 predefinições). *Confiabilidade: alta para o que o projeto é; nula como evidência de eficácia — não há estudo, só adesão.*
12. **Larridin — AI Code Review Bottleneck** (compila LinearB e CircleCI). https://larridin.com/blog/ai-code-review-bottleneck — sustenta os números da LinearB (8,1 milhões de PRs, 4.800 equipes, 42 países; 408 × 157 linhas; 1.055 × 201 minutos; 32,7% × 84,4% de aceitação) e da CircleCI (execuções +59%, ramo de funcionalidade +15%, ramo principal −7%). *Confiabilidade: média; é blog de fornecedor citando relatórios de terceiros — os números são atribuídos e datados, mas não abri os relatórios originais.*
13. **GitClear — The Maintainability Gap (2026).** https://www.gitclear.com/the_ai_code_quality_maintainability_gap — sustenta os oito sinais de manutenibilidade sobre 623 milhões de mudanças de 2023 a 2026: refatoração de 21% (2022) para 3,8% (2026), duplicação +81%, cópia dentro do commit +41%, mascaramento de erro +47%, chamadas entre arquivos −35%, manutenção de legado −74%, retrabalho +15%. *Confiabilidade: média; é fornecedor cujo produto vende a métrica, e a atribuição à IA é inferência do autor, não desenho causal.*
14. **Stanford Digital Economy Lab — atualização de agosto de 2026 do "Canaries in the Coal Mine".** https://digitaleconomy.stanford.edu/news/canariesaug26/ — sustenta a lacuna de 19% no emprego de 22 a 25 anos em ocupações muito expostas, o alargamento de 15% (julho de 2025) para 19% (junho de 2026), a base em folha de pagamento da ADP e o mecanismo de redução de contratação. *Confiabilidade: alta na base (folha real, não pesquisa); a atribuição à IA é econométrica e contestável — e a própria página registra que a análise exclui empresas de tecnologia em verificação de robustez.*
15. **University of Victoria — redesenho do curso de computação.** https://news.uvic.ca/2026/teaching-tomorrow-why-uvic-computer-science-redesigned-its-degree/ — sustenta o curso obrigatório de quarto ano com codificação agêntica, sistemas multiagente e programação por especificação, em vigor no outono de 2026, e as falas de Kevin Stanley e Celina Berg. *Confiabilidade: alta para o fato curricular; é comunicação institucional e portanto interessada no enquadramento. Responde no navegador e devolve 403 a cliente automatizado — ver 12.6.*
16. **Brown University — Agentic Studio.** https://www.brown.edu/news/2026-06-11/agentic-studio-ai-programming — sustenta a existência do curso, os professores (Fisler, Krishnamurthi, Littman), as cerca de 20 vagas para 80 inscritos e a centralidade da revisão de código na avaliação. *Confiabilidade: alta para o fato; amostra de um curso, sem valor estatístico.*
17. **The Register — GitHub estuda desativar pull requests** (03/02/2026). https://www.theregister.com/2026/02/03/github_kill_switch_pull_requests_ai/ — sustenta a discussão pública aberta por Camilla Moraes, a relação de opções em estudo, o relato de "1 em cada 10 PRs de IA é legítimo" (Voiceflow) e as falas sobre o modelo de confiança quebrado (Microsoft Azure) e "promptador de IA sem saber" (GoCD). *Confiabilidade: média-alta; imprensa especializada citando discussão pública verificável, com tom editorial forte.*
18. **Daniel Stenberg — The end of the curl bug-bounty** (26/01/2026). https://daniel.haxx.se/blog/2026/01/26/the-end-of-the-curl-bug-bounty/ — sustenta o encerramento em 31/01/2026, o início em abril de 2019, os mais de US$ 100 mil pagos, as 87 vulnerabilidades confirmadas, a taxa caindo de acima de 15% para abaixo de 5%, e a comparação com Ruby, Node e Rails. *Confiabilidade: alta; é a fonte primária, escrita por quem decidiu.*
19. **GitHub Blog — What to expect for open source in 2026** (Dylan Birtolo, 18/02/2026). https://github.blog/open-source/maintainers/what-to-expect-for-open-source-in-2026/ — sustenta a formulação do "lixo de IA" como problema de manutenção, a imagem da negação de serviço à atenção humana, e a distribuição geográfica do crescimento de desenvolvedores. *Confiabilidade: média; é previsão de plataforma, usada aqui como registro de que o problema é reconhecido por quem opera a infraestrutura.*
20. **Checkmarx — MCP Security: Risks, Real Incidents & Controls (2026).** https://checkmarx.com/learn/mcp-security-risks-real-world-incidents-and-security-controls/ — sustenta a lista de incidentes reais em MCP com datas (servidor Git oficial em novembro de 2025; WhatsApp em novembro de 2025; postmark-mcp em setembro de 2025; servidor do GitHub em maio de 2025; Asana em abril de 2025). *Confiabilidade: média; é fornecedor de segurança, com incentivo a dramatizar, e não fornece CVE nem CVSS — registrado na seção 8. Responde no navegador e devolve 403 a cliente automatizado.*
21. **PulseMCP — OpenAI adota Agent Skills, Anthropic doa o MCP.** https://www.pulsemcp.com/posts/openai-agent-skills-anthropic-donates-mcp-gpt-5-2-image-1-5 — sustenta a formação da Agentic AI Foundation anunciada em 09/12/2025, a transferência do MCP, os valores de contribuição dos membros, os mais de 400 clientes catalogados e a adoção de Skills pela OpenAI no Codex. *Confiabilidade: média; é boletim de comunidade, bem datado, sem revisão editorial formal. Responde no navegador e devolve 403 a cliente automatizado.*
22. **Totalum — Agent Skills Marketplaces em 2026.** https://www.totalum.app/blog/agent-skills-marketplaces-2026 — sustenta as datas e os tamanhos dos registros de skills: skills.sh da Vercel em disponibilidade geral em 05/06/2026 com 600 mil skills; SkillsMP com mais de 425 mil; LobeHub com mais de 169 mil; Claude Skills desde outubro de 2025 no formato SKILL.md; plugins do Cline em 03/06/2026. *Confiabilidade: baixa-média; é conteúdo comercial de empresa pequena, e os números de contagem de registro não são auditáveis. Usado só para ordem de grandeza e datas.*
23. **Addy Osmani — The Code Agent Orchestra** (26/03/2026). https://addyosmani.com/blog/code-agent-orchestra/ — sustenta a faixa prática de três a cinco agentes por pessoa com a razão declarada (a revisão excede a geração), as práticas de isolamento por worktree, portões de qualidade e memória institucional em AGENTS.md, e a lista de ferramentas de orquestração nomeadas. *Confiabilidade: média; é relato de praticante experiente, não medição — a faixa 3–5 é experiência, e está marcada como tal no mapa.*
24. **Sinch — The AI Production Paradox, via SitePD** (17/08/2026). https://sitepd.org.br/2026/08/17/adocao-de-agentes-de-ia-no-brasil-supera-media-global-e-dos-eua/ — sustenta 76% das empresas brasileiras com agentes em produção (contra 62% global e 67% nos EUA), 80% que interromperam ou reverteram implantações por governança, 39% das reversões após vazamento, e os números latino-americanos. Amostra de 2.527 executivos. *Confiabilidade: média-baixa; pesquisa encomendada por fornecedor, com metodologia não publicada na página, e lida por intermediário jornalístico.*
25. **Forbes Brasil — CIO Playbook 2026 da IDC com a Lenovo** (14/04/2026). https://forbes.com.br/forbes-tech/2026/04/brasil-avanca-no-uso-de-ia-e-foca-na-criacao-de-agentes/ — sustenta 97% de intenção de aumentar investimento, 92% esperando retorno positivo, 20% com governança estabelecida, e a fala do presidente da Lenovo no Brasil. Mais de 500 empresas latino-americanas. *Confiabilidade: média-baixa; pesquisa de fornecedor, amostra não desagregada por país.*
26. **Outlex — Product Liability Directive 2026 para software e IA.** https://outlex.ai/blog/product-liability-directive-2026-software-ai — sustenta a Diretiva (UE) 2024/2853 adotada em 23/10/2024, a transposição até 09/12/2026, a classificação de software, SaaS e IA como produto, as presunções de defeito, a extensão da responsabilidade a quem ajusta modelo de fundação e a impossibilidade de afastamento por licença. *Confiabilidade: média; é análise jurídica comercial, não o texto legal — os fatos normativos são verificáveis contra a diretiva, que não abri nesta rodada.*
27. **Epoch AI — SWE-bench Verified.** https://epoch.ai/benchmarks/swe-bench-verified — sustenta que o conjunto tem 500 amostras validadas por humanos, que a Epoch avalia com 484, e que houve melhoria significativa após atualização de arcabouço em 12/02/2026 (versão 2.0.0). *Confiabilidade: alta para a descrição do instrumento; a página não entregou a tabela de pontuações e por isso nenhuma pontuação entrou no documento.*
28. **Terminal-Bench 2.0 — painel público.** https://www.tbench.ai/leaderboard/terminal-bench/2.0 — sustenta apenas a existência e a descrição do benchmark como medida do trabalho de agente no terminal. *Confiabilidade: alta para o instrumento; a página abriu com os cabeçalhos da tabela e sem as linhas, e por isso nenhuma pontuação entrou — ver seção 12.*
29. **DORA — State of AI-assisted Software Development 2025.** https://dora.dev/dora-report-2025/ — sustenta o enquadramento da IA como amplificador das forças e fraquezas existentes da organização, e os números de escala de plataforma (mais de 150 milhões de pessoas no GitHub, mais de 420 milhões de repositórios, mais de 50 milhões no GitLab). *Confiabilidade: alta como relatório, mas a página aberta é índice — os percentuais de adoção e confiança que circulam não foram verificados aqui e estão na seção 12.*

## 12. Anexo — o levantamento bruto

Sem edição e sem corte silencioso. Tudo o que foi levantado e não coube nas seções acima.

### 12.1 Premissas assumidas (rodada não interativa)

Esta rodada correu **sem entrevista**, com um bloco `briefing:` completo. Conforme a skill, briefing completo substitui a entrevista sem rebaixamento de confiança; o que ele **não** cobriu está declarado aqui como premissa assumida:

| Item do §0 | Origem | Valor |
|---|---|---|
| Horizonte | briefing | 2031 |
| Público | briefing | quem projeta mídia e interação |
| Recorte | briefing | global, com nota sobre o Brasil |
| Descartado | briefing | o que já é comum em produto de massa |
| Disrupção suspeita | briefing | nenhuma — descobrir |
| Viés | briefing | neutro |
| Zona de interesse | briefing | Agentes |
| Ideias óbvias a excluir | briefing | as que servem para qualquer tema |
| O que me faria mudar de ideia | briefing | adoção passada da maioria (Rogers), ou tecnologia que não rompe nada |
| **Profundidade da busca** | **assumido** | 17 buscas, 29 páginas abertas; o briefing pediu busca real mas não fixou volume |
| **Número de raízes** | **assumido** | 4, no teto da faixa 2–4 da skill |
| **Peso do Brasil** | **assumido** | uma subseção na âncora (3.5) mais menções pontuais; o briefing pediu "uma nota" |
| **Tratamento do catálogo da turma** | **assumido** | usado como sinal fraco (6.1) e nunca como fonte, porque o enunciado diz explicitamente que o texto do tema é contexto e não fonte |

Um ponto de discordância registrado, que a própria skill já registra ter aprendido na rodada de 10/09: a versão anterior mandava rebaixar toda confiança na ausência de entrevista, mesmo com briefing completo. Aqui o briefing cobre nove dos doze itens e os três restantes estão declarados acima, então **não apliquei rebaixamento global**. O rebaixamento aplicado é o do §6, efeito a efeito, e está em 7.8.

### 12.2 Efeitos cortados na bateria do §6

Quatro efeitos saíram do mapa. Ficam aqui inteiros, com o motivo da derrota — que é o que não se recupera depois.

**Cortado de R1 — "Ferramentas de design de interface perdem mercado para geração direta de componente."**
Redação original: *Ferramentas de desenho de interface perdem participação de mercado porque o componente passa a ser gerado direto da descrição, sem passar por tela.* Sinal médio, prazo 2029, confiança média.
*Motivo da derrota:* falhou no **teste da causa solta** (§3.10). Remova a programação agêntica e o efeito acontece do mesmo jeito, por consolidação do mercado de ferramenta de design e por sistemas de componentes maduros. Não deriva desta raiz. Poderia ser reconectado a `e2.1`, mas aí seria o mesmo efeito com outro nome.

**Cortado de R2 — "Surge um gerente de pacotes de skills dominante, como o npm foi para JavaScript."**
Redação original: *Um gerente de pacotes de instrução se torna dominante e passa a arbitrar o que é uma skill legítima.* Sinal fraco, prazo 2030, confiança baixa.
*Motivo da derrota:* falhou na **regra de parada** (§3.9). É `e6` (a skill vira dependência com versão e registro) amadurecendo, não outra ordem — mesmo ator, mesmo mecanismo, só mais tarde. Concentração de registro é interessante e está capturada no wildcard 1, onde tem mecanismo próprio.

**Cortado de R3 — "A dívida técnica vira classe de ativo com preço de mercado."**
Redação original: *Dívida técnica passa a ser precificada e negociada, como passivo ambiental, em operações de fusão e aquisição de empresas de software.* Sinal fraco, prazo 2031, confiança baixa.
*Motivo da derrota:* **não consegui escrever o mecanismo.** É plausível, é atraente, e a skill é explícita: efeito sem mecanismo não entra. A parte defensável dele sobrevive em `e15.1.1` (seguro precificando fração não lida), que tem mecanismo.

**Cortado de R4 — "Surge uma autoridade certificadora de agente de código."**
Redação original: *Um organismo de certificação passa a atestar agentes de código, como se faz com assinatura digital.* Sinal fraco, prazo 2030, confiança baixa.
*Motivo da derrota:* dois testes. **Especificidade** — a frase serve para qualquer sistema de IA sob o AI Act, não para programação agêntica; troque a raiz e ela continua "servindo". E **causa solta** — a discussão de certificação de IA é anterior e independente. É exatamente o anti-padrão que a skill nomeia: "reguladores criam categoria nova" sem nome de regulador e sem mecanismo que ligue ao pai.

### 12.3 Números que apareceram em resumo de busca e NÃO foram verificados

Nenhum destes entrou nas seções 1 a 11. Ficam aqui porque a próxima rodada pode querer verificá-los — e porque o que não está registrado não pode ser processado depois.

| Número | Onde apareceu | Por que não entrou |
|---|---|---|
| SWE-bench Verified em 96% (Claude Opus 5), 95,5% e 95% nos seguintes | resumo de busca | a página da Epoch não entregou tabela de pontuações; a fonte do resumo era agregador comercial |
| Terminal-Bench 2.0: GPT-5.5 em 0,827; GLM-5.1 em 0,690; 89 tarefas, 5 tentativas, 101 agentes de 23 arcabouços | resumo de busca | o painel abriu sem as linhas da tabela |
| DORA 2025: 90% de adoção de IA (+14 pontos), 24% com "muita" confiança, 30% com pouca ou nenhuma | resumo de busca | a página aberta era índice; não abri o relatório completo |
| CVE-2025-6514 com CVSS 9,6; 150 milhões de downloads afetados; 200 mil instâncias vulneráveis; divulgação da OX Security em maio de 2026 | resumo de busca | o levantamento da Checkmarx que abri não traz CVE, CVSS nem contagem |
| Spec Kit com 111 mil estrelas e 55+ versões desde fevereiro de 2026; ganho de 3 a 10 vezes na taxa de acerto de primeira; 60–80% menos retrabalho | resumo de busca | o número de estrelas diverge do da documentação oficial (mais de 130 mil), e os ganhos são relato de adotante sem estudo |
| Claude Code com cerca de US$ 2,5 bilhões de receita anualizada; 4% dos commits públicos do GitHub; Codex CLI de 82 mil para 14,5 milhões de downloads npm; 3 milhões de usuários semanais do Codex | resumo de busca | a página de estatísticas devolveu 429 e não abriu; nenhuma fonte primária aberta |
| Mercado de revisão automática de PR entre US$ 400 e 600 milhões de receita recorrente; CodeRabbit com mais de 2 milhões de repositórios conectados e 13 milhões de PRs revisados; US$ 238 milhões levantados por CodeRabbit, Greptile e Qodo | resumo de busca | nenhuma das páginas comparativas foi aberta; são conteúdos de posicionamento comercial |
| Postagens de vaga de nível de entrada nos EUA caindo 67% entre 2023 e 2024; participação de vagas exigindo até três anos caindo de 43% (2018) para 28% (2024) | resumo de busca | não abri a fonte primária; a página do Stanford que abri traz a lacuna de 19% e não estes |
| Emprego de desenvolvedores de 22 a 25 anos caindo cerca de 20% desde o pico de 2022 até julho de 2025 | resumo de busca | a página aberta do Stanford registra explicitamente que **não** publica número desagregado para desenvolvedores de software; o número circula em imprensa secundária |
| 40% das vagas de engenharia mencionando ferramentas de IA; vagas globais de engenharia de software quase dobrando desde o piso de 2023 | página da UVic | abriu, mas a UVic não cita a fonte do número — usei o fato curricular e não os números |
| Brasil: 30% de quem cria agentes de IA não é programador | resumo de busca | fonte não identificada no resumo |
| curl: 20 submissões nos primeiros 21 dias de 2026, sete em uma janela de 16 horas, zero vulnerabilidades | resumo de busca sobre o blog do Stenberg | o texto que abri traz as taxas e os totais do programa, não este recorte; usei-o na seção 5.1 com atribuição ao período de janeiro de 2026 e assinalo aqui que o recorte exato não foi confirmado na página |

**Um alerta específico sobre o último item:** na primeira redação ele *entrou* no documento, em `e14.1` na seção 5.1, com a frase "20 submissões em 21 dias de janeiro de 2026 com zero vulnerabilidades". Foi retirado na revisão e substituído pelos números que a página do Stenberg de fato traz (taxa de confirmação e comparação com Ruby, Node e Rails). Fica registrado como erro de procedimento, além dos sete da seção 8: o número era verdadeiro-provável, bem formatado e **não estava na fonte que abri** — que é exatamente o modo como uma IA contamina um documento sem mentir.

### 12.4 Buscas que não deram em nada

- *"consumo energético de agentes de código"* e variações: nada específico. Só material genérico sobre consumo de inferência, que serve para qualquer tema deste catálogo. É a razão da categoria ecológica vazia em 5.2.
- *"estudo controlado spec-driven development"*: nada. Há adesão enorme ao Spec Kit e zero evidência controlada aberta de que especificação escrita melhore o resultado do agente. **Esta é a maior lacuna de evidência do mapa**, porque a raiz 2 depende disso.
- *"quantos projetos dependem de skill de terceiro em produção"*: nada. Todos os números de registro são de oferta (600 mil skills), nenhum é de uso.
- *"revisão humana é melhor que revisão automática de código, evidência"*: não busquei com afinco e registro a omissão — é a suposição escondida nº 4 da seção 7.5, e ela merecia uma rodada própria.
- *"jurisprudência responsabilidade código gerado por IA"*: nada de caso julgado. Só análise prospectiva de escritório de advocacia.
- *Brasil, dados sobre desenvolvedores especificamente* (e não sobre empresas): nada aberto. Os dois estudos brasileiros que achei são sobre adoção corporativa de agentes em geral, não sobre programação. A nota do Brasil na seção 3.5 é, por isso, mais fraca do que eu gostaria.

### 12.5 Candidatos a raiz que foram considerados e descartados antes da roda

Além dos três da seção 4.0:

- **"O agente que roda na nuvem sem máquina local" (agentes de fundo, Copilot Workspace, Codex Web).** Descartado como raiz e absorvido em `e3.1`: é uma variação de onde o agente executa, sem mudar o que rompe.
- **"Programação por não-programadores" (vibe coding).** Descartado por recorte: é outro tema do catálogo e o enunciado desta rodada delimita o objeto como **o ofício de programar**. Aparece obliquamente em `e5` e em `e9`.
- **"Multiagente com papéis (Arquiteto, Construtor, Revisor)."** Descartado como raiz: é padrão de uso do harness, não ruptura. Entra em `e3.1` e no experimento (três harnesses diferentes).
- **"Memória e avaliação de agente."** Descartado por fronteira explícita: é o tema 3 da disciplina.
- **"Segurança e contenção do agente."** Descartado por fronteira explícita: é o tema 2. A raiz 2 encosta nela em `e7` — e essa sobreposição é deliberada e declarada, porque o vetor de ataque *pela skill* é específico da programação agêntica e não cabe inteiro no tema vizinho.

### 12.6 Notas de método desta rodada

- **Modo:** MAPA, não interativo, briefing completo. Nenhuma pergunta foi feita; três itens assumidos e declarados em 12.1.
- **Busca:** 17 buscas em português e inglês; 32 tentativas de abertura de página; **29 páginas abertas com conteúdo aproveitável**; 3 falhas (Product Law Perspective devolveu 403 ao leitor; a página de estatísticas do Claude Code devolveu 429; The New Stack devolveu só a moldura da página, sem o corpo do artigo).
- **Três fontes abertas devolvem 403 ao verificador** (UVic, Checkmarx, PulseMCP), e é por isso que a saída em 12.7 fecha com um problema em vez de `ok`. Elas abriram nesta rodada pelo leitor de página e estão na seção 11 porque a regra da skill é "só entra o que foi aberto". O bloqueio é de impressão digital de cliente, não de link morto: refazendo a requisição com `curl` e um agente de navegador completo, **Checkmarx e UVic devolvem 200**; a PulseMCP continua em 403 no `curl` e mesmo assim entrega a página ao leitor. Comando usado na reconferência:

```
curl -o /dev/null -s -w '%{http_code}' -L --max-time 20 \
  -A 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36' \
  -H 'Accept: text/html,application/xhtml+xml' <URL>
```

  É falso positivo da mesma família do que gerou a **TMI-0012** (link em code span contado como quebrado): o verificador mede a acessibilidade a um agente automatizado, não a existência da fonte. Registro aqui em vez de esconder — a alternativa seria retirar as três da seção 11 para a saída fechar limpa, o que seria maquiar o instrumento. **Sugestão para a próxima versão do `verificar.py`:** repetir a requisição com agente de navegador completo antes de declarar um link quebrado, e distinguir 403 de erro de resolução.
- **O que este mapa não fez e poderia:** não abri nenhum dos PDFs completos dos artigos citados (só resumos); não abri o texto da Diretiva 2024/2853; não abri os relatórios originais da LinearB e da CircleCI, só a compilação; não busquei nada em fonte chinesa, apesar de o campo de agentes de código ter produção relevante lá. Cada uma dessas omissões é uma rodada de trabalho que a próxima sessão pode fazer sem refazer nada do que está aqui.

### 12.7 Saída do verificador

Comando:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano/01-programacao-agentica-o-desenvolvedor-vira-orquestrador/tendencia-programacao-agentica-o-desenvolvedor-vira-orquestrador.md --links
```

Saída, colada inteira:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 17 (frontmatter diz 17)
efeitos ordem 2: 20 (frontmatter diz 20)
efeitos ordem 3: 14 (frontmatter diz 14)
prazo > horizonte (2031) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 1 [('e5.1.1', 2032)]
confiança ordem 1: alta 5 · media 12 · baixa 0
confiança ordem 2: alta 2 · media 17 · baixa 1
confiança ordem 3: alta 0 · media 1 · baixa 13
  link não responde: https://checkmarx.com/learn/mcp-security-risks-real-world-incidents-and-security-controls/
  link não responde: https://news.uvic.ca/2026/teaching-tomorrow-why-uvic-computer-science-redesigned-its-degree/
  link não responde: https://www.pulsemcp.com/posts/openai-agent-skills-anthropic-donates-mcp-gpt-5-2-image-1-5
links da seção 11: 26/29 respondem (frontmatter diz fontes: 29)
RESULTADO: 1 problema(s) — corrija antes de entregar
```
