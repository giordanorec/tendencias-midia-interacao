---
tema: NPCs generativos e mundos vivos
slug: npcs-generativos-e-mundos-vivos
autor_login: grec
zona_de_interesse: Simulação e mundos
data: 2026-09-11
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 14
efeitos_ordem_2: 22
efeitos_ordem_3: 14
tecnologias_citadas: [NVIDIA ACE, In-Game Inferencing SDK, Qwen3-8B, Unreal Engine 5.6.1, Model Context Protocol, Orak, SAGA, Thistle Gulch, Mantella, CHIM, Inworld Runtime, Convai, Smart Zoi, CPC, Teammates, Jaspar, Gemini 2, structured generation, Acorn AI, Yarn Spinner, Dialogic, Ink, geração de agentes com memória e reflexão]
fontes: 20
confianca: media
experimento: A taverna que não pode mentir — três NPCs agentes com verbos declarados e um placar de contenção medido pela turma
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

O personagem não jogável está deixando de ser um produtor de falas para virar um agente que escolhe objetivos, aciona os verbos que o jogo expõe, lê o resultado e replaneja. Três rupturas sustentam o mapa: o NPC ganha **agência dentro das regras do mundo** (e não só diálogo); a inferência **desce para o dispositivo**, zerando o custo marginal por hora de jogador e, junto com ele, o ponto central de moderação; e o mundo passa a **rodar sem o jogador**, com memória que atravessa sessões. Em 2026 isso já é produto — a Ubisoft testa *Teammates* com algumas centenas de jogadores, a KRAFTON embarcou um modelo pequeno no *inZOI*, a NVIDIA entrega um SDK que roda um modelo de 8 bilhões de parâmetros dentro do jogo, e 26,5% das demos do Steam Next Fest de junho de 2026 declaram alguma IA. Mas o que está no ar ainda é estreito: os jogadores do *inZOI* relatam que o recurso se desliga sozinho e derruba a performance, a conversa em nuvem custa um a dois segundos a mais, e a equipe do *Teammates* cresceu de cerca de 25 para pouco mais de 80 pessoas — boa parte disso em narrativa, para conter o improviso. O mapa aponta para 2031 num arranjo menos épico do que o discurso: personagem pensante empurrado para os momentos lentos do jogo, QA que vira estatística em vez de lista de bugs, dublagem reorganizada em consentimento para geração em tempo real, e uma disputa nova — de consumo e não de tecnologia — sobre o que acontece com um personagem que o jogador conhece quando o servidor desliga.

## 2. O tema

**O que é.** Um NPC generativo é um personagem cujo comportamento não está inteiramente escrito antes de o jogo rodar. No arranjo mínimo, ele gera falas a partir de um dossiê (nome, história, humor) e do que está acontecendo. No arranjo que interessa a este mapa, ele faz mais: recebe um objetivo, consulta a lista de ações que o mundo lhe oferece, escolhe uma, executa, observa o que mudou e decide de novo. "Mundo vivo" é o passo seguinte: a simulação não para quando o jogador sai, e o personagem lembra dele na próxima vez.

**Onde encosta em mídia e interação.** Em três lugares ao mesmo tempo, e é por isso que o tema não é só de jogos. (a) **Autoria**: o objeto que o autor entrega deixa de ser a fala e passa a ser a ficha e a cerca — a especificação de um agente. (b) **Interação**: o contrato entre quem projeta e quem joga sempre foi "eu garanto o espaço do que pode acontecer"; um agente que improvisa devolve essa garantia em forma de probabilidade. (c) **Persistência**: mídia que continua existindo quando ninguém está olhando é uma categoria nova de produto, com obrigações que a indústria de jogos nunca teve de assumir.

**Por que merece um mapa de futuro e não um levantamento de estado da arte.** Porque o estado da arte já está razoavelmente descrito — dá para listar quem tem SDK, quem tem jogo na loja e quem tem paper. O que não está descrito é a consequência: se o designer perde a garantia sobre o espaço do possível, **o que acontece com o teste, com o crédito, com o suporte, com a classificação indicativa e com o fim de vida do produto**? Essas perguntas não têm resposta em roadmap de fornecedor. Elas têm resposta em roda de futuros — com mecanismo escrito, prazo com classe de referência e a confissão de onde o mapa provavelmente erra.

**O recorte deste documento.** Aqui o objeto é **o personagem autônomo dentro de um mundo com regras**. A simulação social como método de investigação é o tema 6 da disciplina; a história gerada — narrativa, coautoria, novela visual — é o tema 8; o companheiro digital sem mundo é o tema 19. Os três encostam neste, e um dos achados do mapa é justamente que a fronteira entre eles se dissolve antes no regulamento do que no produto (ver e13.1 e e13.1.1).

**Premissas assumidas nesta rodada.** O pedido veio com um bloco `briefing:` completo — horizonte 2031, público "quem projeta mídia e interação", recorte global com nota sobre o Brasil, descartado de início "o que já é comum em produto de massa", viés neutro, nenhuma disrupção-raiz pré-suspeita, busca na web ligada. Não houve entrevista com pessoa; houve briefing, e por isso **não** se aplica o rebaixamento de confiança previsto para rodadas sem briefing. O que o briefing não cobria e eu assumi, declarado aqui: (1) "quem projeta mídia e interação" inclui estúdio independente e pesquisa acadêmica, não só AAA; (2) "global" significa que a evidência primária é de mercados de língua inglesa e do Leste Asiático, com o Brasil entrando como consumidor e não como produtor da tecnologia; (3) o falseador informado pelo pedido — "evidência de que a adoção já passou da maioria inicial, ou de que a tecnologia não rompe nada" — foi usado como critério explícito na seção 7.

## 3. Onde isso está hoje

Âncora feita **com** acesso à web em 11/09/2026: 20 fontes efetivamente abertas e lidas (seção 11), tentativas bloqueadas por HTTP 403 registradas na seção 12. Nenhum número desta seção foi estimado; onde não houve número, está escrito que não houve.

### 3.1 O que já existe e funciona

**Na loja, com jogador pagante.**

- **inZOI** (KRAFTON) entrou em Early Access na Steam em 28 de março de 2025 e é apresentado como o primeiro jogo a usar **NVIDIA ACE** para seus NPCs, sob o nome **Smart Zoi**. A KRAFTON chama a categoria de **CPC** (*co-playable character*) — "um companheiro de IA que pode interagir com os jogadores, habilitado por um **SLM no dispositivo**, construído com tecnologia NVIDIA ACE" —, e o recurso "ajusta dinamicamente o comportamento dos NPCs conforme seus traços e a situação em que estão" ([dsogaming](https://www.dsogaming.com/news/inzoi-is-the-first-game-with-ai-powered-npcs-using-nvidia-ace/)).
- **Retail Mage** (Jam & Tea Studios) saiu na Steam em 2024 — "*depois de apenas cinco meses de desenvolvimento, lançamos o Retail Mage na Steam*" — com IA generativa operando como mestre de jogo: diálogo de clientes, interação com objetos arbitrários, geração estruturada e inferência em GPU na nuvem ([Jam & Tea](https://www.jamandtea.studio/news/making-retail-mage-a-new-approach-to-ai-in-games)).
- **EmemeTown** (Ememe Inc.) está na Steam com página pública, **sem data de lançamento** ("*to be announced*") e **sem nenhuma avaliação de usuário**, declarando conexão a serviços de terceiros — "OpenAI, LLAMA" — para gerar conversas autônomas e rotinas diárias de personagens customizáveis. A própria página declara que alguns personagens "podem se envolver em conversas sexualmente explícitas" (animação sexual e nudez não são permitidas) ([Steam](https://store.steampowered.com/app/2667830/EmemeTown/)). Guardo esta última frase: é o retrato mais nítido do problema de contenção quando não há servidor de ninguém no caminho.

**Em teste fechado, com estúdio grande.**

- **Teammates**, da Ubisoft, anunciado em 21 de novembro de 2025, é "o primeiro projeto de pesquisa **jogável** de IA generativa" da empresa: um FPS em que o jogador comanda por voz dois companheiros (Sofia e Pablo) e um assistente (Jaspar). Está em playtest fechado com "algumas centenas de jogadores". O diretor narrativo descreve o método de contenção: "criamos esse tipo de **cerca** que deixa os NPCs improvisarem dentro do mundo mas permanecerem dentro dos limites da lore e das motivações que demos a eles. Eles podem improvisar, mas ainda somos nós que definimos as regras e dirigimos a história e os personagens" ([Ubisoft News](https://news.ubisoft.com/en-us/article/3mWlITIuWuu0MoVuR6o8ps/ubisoft-reveals-teammates-an-ai-experiment-to-change-the-game)).
- A análise técnica de Tommy Thompson descreve a arquitetura: **fala → texto → LLM (Gemini 2, em servidores do Google) → texto → fala**, com Sofia e Pablo ainda rodando **behavior trees tradicionais** e o modelo traduzindo o comando de voz em parâmetros alimentados nessas árvores via *Environmental Query Systems* — o que permite entender "avance até atrás daquele caixote azul". A latência extra de "um ou dois segundos" é atribuída ao lançamento do Gemini 3 afetando a performance dos servidores; "sair da hospedagem externa foi considerado um objetivo futuro". E o dado de custo humano: **"a equipe tinha crescido do time original da demo, de cerca de 25 pessoas, para um time de pouco mais de 80"**, com aumento substancial de pessoal de narrativa para manter consistência de personagem ([AI and Games](https://www.aiandgames.com/p/ubisofts-teammates-demo-and-their)).

**Como ferramenta de desenvolvimento.**

- A **NVIDIA** publicou em **21 de outubro de 2025** a adição do **Qwen3-8B** ao ACE, pelo **In-Game Inferencing (IGI) SDK**, com plugin para o **NVIDIA RTX Branch of Unreal Engine 5.6.1**, para **execução no dispositivo** ([NVIDIA Developer Blog](https://developer.nvidia.com/blog/nvidia-ace-adds-open-source-qwen3-slm-for-on-device-deployment-in-pc-games/)). O post anuncia capacidade e diz que o SDK "otimiza inferência de IA e processamento gráfico simultâneos", mas **não publica nenhum número de VRAM, latência ou custo**. Registro isso como lacuna, não como promessa cumprida.
- **Thistle Gulch**, da Fable, é a plataforma de simulação que demonstra o framework **SAGA** (*Skill to Action Generation for Agents*), descrito como um "framework de IA generativa que direciona agentes de IA rumo a objetivos bem-sucedidos através de **Ações**". O cenário é "uma cidade fictícia do Velho Oeste dos anos 1800 com mais de 15 personagens com histórias próprias e um caso de assassinato", e a **API em Python** dá "controle sem precedentes sobre a narrativa e as interações dos personagens", incluindo "customização profunda dos processos de tomada de decisão da IA e da geração de conversa" ([80.lv, 13/03/2024](https://80.lv/articles/ai-simulation-platform-where-characters-make-their-own-decisions)).
- **Orak** (arXiv:2506.03610, submetido em 04/06/2025, v3 de 14/04/2026) é "um benchmark para treinar e avaliar agentes LLM em **12 jogos comerciais** cobrindo todos os gêneros principais", com "uma interface *plug-and-play* construída sobre o **Model Context Protocol** (MCP)". Código e datasets estão associados à **KRAFTON** ([arXiv](https://arxiv.org/abs/2506.03610)). Uma publisher construindo o instrumento de medida do agente é um fato mais informativo que qualquer demo.

**Na comunidade, sem permissão de ninguém.**

- **Mantella** dá vida aos NPCs de **Skyrim e Fallout 4** com "conversas naturais por voz, respostas em tempo real, **memória persistente**, ações dinâmicas e consciência plena do mundo ao redor". Funciona "com modelos locais (Llama, Gemma, etc.) e APIs (OpenAI, OpenRouter, NanoGPT)", e a documentação oficial declara **"350k+"** downloads ([Mantella docs](https://art-from-the-machine.github.io/Mantella/)). Existe também o **CHIM**, com múltiplos conectores de LLM. A tentativa de abrir as páginas do Nexus Mods para conferir contagem por lá devolveu 403 (seção 12).

**Na academia.**

- **Generative Agents: Interactive Simulacra of Human Behavior** (Park, O'Brien, Cai, Morris, Liang e Bernstein; arXiv:2304.03442, submetido em 07/04/2023, revisto em 06/08/2023) é o artigo que fundou o vocabulário: **25 agentes** num sandbox interativo, arquitetura que "armazena um registro completo das experiências do agente em linguagem natural, sintetiza essas memórias ao longo do tempo em **reflexões** de nível mais alto, e as recupera dinamicamente para planejar comportamento". A ablação é explícita: "os componentes da nossa arquitetura — observação, planejamento e reflexão — **contribuem cada um criticamente** para a credibilidade do comportamento do agente" ([arXiv](https://arxiv.org/abs/2304.03442)).
- O **CPDC 2025** (*Commonsense Persona-grounded Dialogue Challenge*) é uma competição dedicada a **NPCs de IA movidos por LLM**, com **trilha GPU e trilha API** — isto é, uma pista para quem roda modelo aberto em hardware próprio e outra para quem chama serviço. O que li é o **artigo de solução de uma equipe participante** (arXiv:2511.20200), que reporta 1º lugar na Tarefa 2 API, 2º na Tarefa 1 API e 3º na Tarefa 3 API e na trilha GPU, usando *context engineering* (poda dinâmica de ferramentas, recorte de persona) e treino por GRPO no lugar de ajuste fino supervisionado ([arXiv](https://arxiv.org/abs/2511.20200)). A existência da trilha GPU é o sinal que importa aqui: a competição já assume que parte do campo roda o modelo em casa.

### 3.2 O que existe e ainda não funciona

- **Smart Zoi, medido pelos jogadores.** Na discussão pública da Steam sobre o patch corrente, os relatos são consistentes e desagradáveis: o recurso "realmente só dá balões de pensamento baseados em LLM sobre as cabeças deles, escritos para dar contexto às ações que a autonomia natural do jogo já os faz executar"; funciona "mais como um diário do Zoi"; e **se desliga sozinho** — "neste patch eu consigo ligar nas configurações, mas quando ativo na interface para de fato usar, depois de um tempo ele me dá um balão de pensamento como antes, só que clicar nele revela que está vazio e a coisa toda se desativa de novo". Há queixa de que ele "diminui a performance" e de que é preciso baixar configuração gráfica para usá-lo. A integração plena está prometida para "o segundo semestre de 2026 e além" ([Steam Community](https://steamcommunity.com/app/2456740/discussions/0/836123794066162014/)). **Este é o dado mais importante da seção 3**: o jogo que a imprensa chama de primeiro NPC com IA embarcada é, na máquina do jogador, uma legenda cara.
- **Latência tem um piso perceptivo.** O levantamento de ferramentas da Cinevva registra que "respostas abaixo de aproximadamente 800 milissegundos parecem conversacionais e qualquer coisa muito mais lenta parece errada", enquanto APIs em nuvem tipicamente acrescentam "um a dois segundos de atraso que se lê como travamento" — e aponta que é por isso que *inZOI* e PUBG adotaram modelos no dispositivo ([Cinevva](https://app.cinevva.com/guides/ai-npcs-dialogue)). Thompson registra, no *Teammates*, dois limites adicionais de design: os NPCs às vezes ignoram comandos que julgam taticamente ruins, e falar com eles impõe **carga cognitiva** ao jogador em combate.
- **O que funciona é o constrangido, não o aberto.** Ainda na Cinevva: as implementações bem-sucedidas usam "**geração constrangida, não conversa aberta**"; o padrão que falha é "o NPC de 'pergunte qualquer coisa' jogado dentro de um jogo narrativo", porque modelos sem restrição "vão inventar fatos com confiança, sair da lore do jogo, ou estragar uma missão".
- **O custo de conter é maior que o de escrever.** Na Ubisoft, a equipe foi de ~25 para pouco mais de 80 pessoas para sustentar uma demo de três meses que originalmente exigia dois designers de narrativa em tempo integral.
- **Economia de nuvem.** A Jam & Tea relata que, no começo, "cada sessão de jogo era tão cara quanto um ingresso da Disneylândia", e que precisaram derrubar o custo "**em 1000× — três ordens de grandeza**", gerindo as próprias GPUs em nuvem, para o jogo existir. (Número de estúdio, sobre o próprio produto: uso como alegação de parte interessada, não como medida independente.)
- **A promessa de "mundo vivo" ainda é demo.** Thistle Gulch é ambiente de pesquisa; EmemeTown não tem data nem avaliação; o único mundo comercial que "continua" é o *inZOI*, e continua sobretudo no sentido de que o personagem reflete sobre o dia enquanto dorme.

### 3.3 Quem constrói

| Ator | O que entrega | Onde está |
|---|---|---|
| **NVIDIA** (ACE, IGI SDK) | camada de inferência no dispositivo + plugin UE 5.6.1 + TTS | Qwen3-8B anunciado em 21/10/2025 |
| **KRAFTON** | CPC/Smart Zoi no *inZOI*; benchmark **Orak** | produto na Steam desde 03/2025; benchmark v3 em 04/2026 |
| **Ubisoft** | NEO NPC → **Teammates**, com cercas narrativas próprias | teste fechado, algumas centenas de jogadores |
| **Inworld / Convai** | NPC-como-serviço; a Inworld recuou de "estúdio de NPC plug-and-play" para **infraestrutura B2B**, cobrando por caractere de fala e por token de texto; a Convai mantém plano gratuito com cota diária e plano indie a US$ 29/mês | medido em 2026 |
| **Fable** | SAGA + Thistle Gulch (plataforma multiagente, API Python) | desde 2024 |
| **Jam & Tea** | *Retail Mage* — o caso comercial pequeno que sobreviveu | Steam, 2024 |
| **Comunidade de mods** | Mantella, CHIM — LLM local em jogos de 2011 e 2015 | 350 mil+ downloads |
| **Fornecedores de QA** | WeTest/**Acorn AI**: agente de teste multiagente (Plan / Perceive / Execute / Judge) | apresentado no GDC 2026 (09–13/03) |
| **Academia** | Park et al. (fundação), Orak e CPDC (medida) | 2023–2026 |

### 3.4 Que número descreve a adoção hoje

O número honesto é **oblíquo**, e vale dizer por quê: não existe contador público de "jogos com NPC agente". Existe contador de **declaração de IA** na loja da Valve, que mistura arte, áudio, tradução e diálogo.

- No **Steam Next Fest de junho de 2026**, com metodologia única e comparável: **1.163 de 4.382 demos** registradas declararam IA, ou **26,5%**. A comparação limpa entre edições consecutivas, usando a mesma metodologia da GameDiscoverCo, é **21,2% em fevereiro de 2026 → 26,5% em junho de 2026**. No evento inteiro (~8.682 entradas), cerca de **1.700**, ou ~20%. A quebra por tipo de conteúdo mostra **~60% em ativos visuais**, participação menor em áudio, tradução comum, **escrita/diálogo com participação baixa** e **conteúdo gerado ao vivo raro** ([Llama & Griffin, 06/2026](https://www.llamagriffin.com/Data/SteamNextFestJune2026/part-2.html)).

Ou seja: a IA generativa está em cerca de um quarto das demos, mas o **diálogo** é uma das menores fatias dela, o **conteúdo gerado ao vivo** é explicitamente raro, e o **comportamento** não é sequer medido separadamente. Adoção de NPC agente, com número: **não encontrado**. O que se encontra é a moldura em volta — e ela diz que estamos longe da maioria de Rogers.

**Nota sobre o Brasil.** O país aparece aqui como mercado consumidor, não como produtor da tecnologia. A Pesquisa Game Brasil 2026 (**7.115 entrevistados**, 16 a 55 anos) mede ambivalência, não rejeição: **45,7%** se preocupam com a precarização do processo criativo, **39,6%** citam uso indevido de obras e violação de direitos autorais, e ao mesmo tempo **39,3%** comprariam um jogo sabendo que boa parte do desenvolvimento usou IA e **40,9%** talvez comprassem ([Estado de Minas](https://www.em.com.br/tecnologia/2026/04/7401349-uso-de-ia-em-games-preocupa-quase-50-dos-jogadores-no-brasil.html)). A imprensa de negócios brasileira já trata "NPCs cognitivos" como categoria — "personagens não jogáveis capazes de conversar, lembrar, tomar decisões e reagir de forma autônoma" — e aponta 2026 como "um marco provável para a popularização", esperando "maior padronização das ferramentas, melhorias de desempenho em tempo real e integração mais profunda com engines" ([Fast Company Brasil, 03/02/2026](https://fastcompanybrasil.com/games/npcs-cognitivos-devem-se-tornar-cada-vez-mais-comuns-em-2026-entenda-o-que-sao/)). Expectativa de imprensa, registrada como expectativa.

### 3.5 O contexto regulatório que já está no calendário

Quatro relógios já batendo, e todos entram na roda:

1. **Valve.** Em **janeiro de 2026** a Valve reescreveu o formulário de declaração de IA na Steam, estreitando o escopo para o que "acompanha o jogo e é consumido pelos jogadores" e separando ativos pré-gerados de **conteúdo gerado ao vivo**. Para o segundo, o desenvolvedor precisa declarar a prática e "**descrever as salvaguardas para evitar saída ilegal/inapropriada**", sob pena de remoção da Steam se as salvaguardas falharem; e o jogador ganhou "um botão de denúncia dentro do overlay da Steam especificamente para sinalizar 'conteúdo ilegal gerado por jogos com IA de geração ao vivo'". Ferramenta interna de produtividade (assistente de código, apoio a concept art) deixou de exigir declaração ([BigGo, 17/01/2026](https://biggo.com/news/202601171220_Steam_AI_Disclosure_Update_Focuses_on_Player_Content)).
2. **União Europeia, AI Act.** As obrigações de transparência do **Artigo 50** passam a valer em **2 de agosto de 2026**. E há uma isenção que interessa muito a este tema: o "óbvio" — a Comissão dá como exemplo de dispensa "**NPCs habilitados por IA em um jogo para um jogador, onde a natureza do jogo deixa claro que nenhuma outra pessoa pode participar**" ([Travers Smith, 28/07/2026](https://www.traverssmith.com/knowledge/knowledge-container/is-it-a-bot-eu-ai-act-transparency-rules-take-effect-2-august-2026/)). A isenção é lida de forma estreita — e note o que ela implica: **em multijogador, a dispensa cai**.
3. **Fim de vida de jogos.** A iniciativa de cidadania europeia "Stop Destroying Videogames" reuniu **1.294.188 assinaturas verificadas**. Em **16 de junho de 2026** a Comissão respondeu que "**não pode propor uma obrigação legal** de manter videojogos jogáveis depois que param de ser fornecidos comercialmente", e que vai "iniciar, **até o fim de 2026**, um intercâmbio com a indústria de videojogos e representantes dos consumidores com o objetivo de redigir um **código de conduta** da indústria sobre a gestão do 'fim de vida' dos jogos" ([Comissão Europeia](https://citizens-initiative.europa.eu/stop-destroying-videogames-commissions-reply-european-citizens-initiative_en)). Isto é a moldura jurídica em que a pergunta "o que acontece com o personagem quando o servidor desliga" vai ser decidida — sem lei, por acordo voluntário.
4. **Trabalho.** O **2025 Interactive Media Agreement** da SAG-AFTRA foi aprovado pelos membros por **95% dos votos em 9 de julho de 2025**, encerrando uma greve de quase um ano. Ele exige que "os intérpretes consintam com o uso de sua Réplica Digital, e os produtores forneçam uma **'descrição razoavelmente específica'** de como pretendem usar as Réplicas Digitais"; e obriga os produtores cobertos a "fornecer **relatórios de uso** detalhando como as Réplicas Digitais foram usadas no jogo" ([Frankfurt Kurnit Klein & Selz](https://ipandmedialaw.fkks.com/post/102ksuq/new-sag-aftra-2025-interactive-media-agreement-approved-by-members)). Uma segunda análise, do escritório Davis+Gilbert, acrescenta que o consentimento tem de especificar "se a Réplica Digital ou ICDR do intérprete será usada para **Geração em Tempo Real**" — esta é a cláusula que mais interessa a este mapa, porque é o único lugar em todo o material desta rodada onde um contrato já nomeia, como categoria própria, o personagem que fala o que ninguém gravou. A página da Davis+Gilbert foi lida, mas responde 403 a cliente automatizado e por isso não entra na lista de links da seção 11; está registrada em 12.3.

## 4. As disrupções-raiz

Três raízes entram. Antes delas, o que foi **recusado**, com o motivo escrito — porque a recusa é metade do método.

### 4.0 Candidatos recusados

- **Candidato recusado como raiz: árvore de diálogo, máquina de estados e behavior tree.** Adoção em maioria desde os anos 2000; tratados como contexto na seção 3. Não rompem nada — são o que está sendo rompido. (E continuam vivos dentro do que existe: no *Teammates*, Sofia e Pablo **ainda são behavior trees**; o LLM só alimenta parâmetros.)
- **Candidato recusado como raiz: diálogo de NPC gerado por LLM (fala e voz na hora).** É a parte do tema que mais aparece na imprensa, e é **melhoria sustentadora**: faz o mesmo que a árvore de diálogo — produzir a fala certa no momento certo — com mais variedade e menos custo por linha. Não devolve ao jogador nenhum poder que ele não tinha, e não tira do designer nenhuma garantia que ele tinha: o espaço de eventos continua o mesmo, só o texto muda. Entra no mapa como **efeito** (dentro de e1 e e5), não como raiz. O teste que decide: num jogo com diálogo generativo e sem agência, o designer ainda consegue listar tudo o que pode acontecer. Com agência, não consegue.
- **Candidato recusado como raiz: geração procedural de mundo.** Adoção em maioria desde 2016 (*No Man's Sky*), e ortogonal ao tema: gera o cenário, não o habitante.
- **Candidato recusado como raiz: síntese de voz de NPC.** Está em difusão acelerada e já é comum em produto — a régua da disciplina ("se dá para fazer com o que já é comum em produto de massa, é maduro") o exclui. Volta no mapa pelo lado do trabalho (e5), que é onde ele de fato rompe alguma coisa.

### 4.1 Raiz 1 — O NPC ganha agência: da fala à ação dentro das regras do mundo

> O personagem recebe um objetivo, consulta a lista de ações que o jogo expõe, escolhe, executa, observa o resultado e replaneja. A fala vira uma das ações, não a única.

**1. O que ela rompe.** Rompe a garantia do designer sobre o **espaço do possível**. Com árvore de diálogo e behavior tree, o conjunto de eventos do jogo é finito, enumerável e testável; o designer assina embaixo. Com um agente que replaneja, o designer assina embaixo de uma **distribuição**. Isso desmancha, em cadeia: a definição de bug (o que é defeito num personagem que decide?), o teste de aceitação (passa/não passa vira taxa por mil), a unidade de produção narrativa (a fala escrita vira ficha + cerca), e o crédito de autoria.

**2. Por que agora, e não há cinco anos.** Em 2021 existia a demo — o NPC do Modbox que ouvia, pensava com GPT-3 e falava. O que não existia era o encanamento: (a) **runtimes que expõem os verbos do jogo ao modelo** — o IGI SDK da NVIDIA com plugin UE 5.6.1 (10/2025), o SAGA da Fable (cujo nome, *Skill to Action Generation*, é literalmente isto), o Orak com interface MCP sobre 12 jogos comerciais (2025–2026); (b) **saída estruturada confiável** o bastante para prender a escolha do modelo a uma gramática de ações (a *structured generation* que a Jam & Tea descreve como central no *Retail Mage*); (c) **modelos pequenos** com custo por ação que cabe num orçamento de jogo. Nada disso estava de pé em 2021; os três ficaram de pé entre 2024 e 2026.

**3. Onde está na difusão.** **Produto de nicho.** Há jogo na loja (*Retail Mage*, *inZOI*), teste fechado em estúdio grande (*Teammates*), framework aberto com API (SAGA) e benchmark de publisher (Orak). Não há adoção precoce: o próprio contador da Steam mostra conteúdo gerado ao vivo como "raro", e o diálogo como a menor fatia da declaração de IA. Longe da maioria de Rogers — o que é exatamente o que o falseador do briefing pedia para checar.

**4. O que ainda falta acontecer.** (i) Uma prática de teste que aceite distribuição em vez de lista — hoje o QA de jogo é passa/não passa. (ii) Modelos pequenos que **planejem** bem, e não só falem bem: os 8B atuais conversam melhor do que decidem. (iii) Um caso público em que a agência produza um momento de jogo que ninguém escreveu **e que valha a pena** — sem isso, o custo não se justifica diante da árvore de diálogo. (iv) Uma linguagem comum para declarar verbos do mundo ao modelo; o MCP é candidato, mas nasceu para ferramentas, não para jogos.

**Quem bloqueia, e com que incentivo.** A **produção e o QA do próprio estúdio**, mais o **publisher**. O incentivo é direto: quem responde por cronograma e certificação não tem como aprovar um espaço de eventos que não consegue enumerar. O movimento previsível é estreitar a cerca até o agente virar, na prática, uma árvore de diálogo cara — e esse movimento é o efeito e4 do mapa.

### 4.2 Raiz 2 — A inferência desce para o dispositivo: o personagem pensa dentro do binário

> O modelo que move o personagem deixa de ser uma chamada de rede e passa a ser um arquivo que vem no jogo, rodando na GPU ou na NPU da máquina de quem joga.

**1. O que ela rompe.** Rompe **três coisas ao mesmo tempo**, e é por isso que é raiz e não detalhe de implementação. (a) **A economia**: o custo por hora de jogador cai de variável para marginal quase zero, o que tira o NPC generativo do território exclusivo de jogo-serviço com assinatura e o coloca em jogo de venda única. (b) **O ponto de controle**: sem servidor, não há filtro central, não há telemetria de conversa, não há botão de desligar o personagem. A contenção tem de caber no binário — e binário se modifica. (c) **A manutenção**: o que está no disco é o que pensa; corrigir comportamento vira baixar pesos, não empurrar um patch de servidor.

**2. Por que agora, e não há cinco anos.** Porque os modelos pequenos passaram de brinquedo a utilizável entre 2024 e 2026, e porque o encanamento apareceu: **Qwen3-8B dentro do ACE, com plugin para o RTX Branch do Unreal Engine 5.6.1, para execução no dispositivo** (21/10/2025); um SLM embarcado num jogo comercial de simulação de vida (*inZOI*, 2025); e a comunidade de mods rodando Llama e Gemma locais em Skyrim e Fallout 4. Há também uma razão perceptiva, e é medida: o piso de ~800 ms para a conversa parecer conversa, contra o acréscimo de um a dois segundos que a nuvem impõe. Em 2021, o mesmo personagem exigia uma chamada a um modelo que não cabia em nenhuma máquina doméstica.

**3. Onde está na difusão.** **Demo pública passando a produto de nicho.** O SDK existe e é público; um jogo comercial embarcou; a modificação comunitária adotou, com mais de 350 mil downloads num único mod. Mas o jogo que embarcou entrega, segundo seus próprios jogadores, um balão de pensamento que desliga sozinho — e isso é exatamente o perfil de "produto de nicho", não de adoção precoce.

**4. O que ainda falta acontecer.** (i) Um orçamento de VRAM que não dispute com o renderizador — hoje disputa, e o jogador desliga o recurso ou baixa o gráfico. (ii) Piso de qualidade em 8B (ou menos) para **agência**, não só para conversa. (iii) Paridade em console e celular, onde está a maior parte do mercado. (iv) Uma resposta de plataforma para conteúdo gerado sem nenhum servidor no caminho — a Valve já exige descrever as salvaguardas e já deu ao jogador um botão de denúncia no overlay, o que é o primeiro passo dessa resposta.

**Quem bloqueia, e com que incentivo.** De um lado, **os fabricantes de silício**, cujo incentivo é amarrar a capacidade a uma geração de hardware própria (o ACE é da NVIDIA e o plugin é para o *RTX Branch* do Unreal). Do outro, **as plataformas de distribuição** — Valve, Sony, Microsoft, Nintendo —, cujo incentivo é manter um ponto de controle sobre conteúdo gerado; e ponto de controle, sem servidor, só existe se a plataforma passar a exigir declaração e versionamento do modelo embarcado. É o efeito e8.2.

### 4.3 Raiz 3 — O mundo roda sem o jogador, e o personagem lembra dele

> A simulação não para quando a sessão fecha, e o estado que importa deixa de ser o arquivo de save: passa a ser a memória acumulada dos personagens.

**1. O que ela rompe.** Rompe a **sessão** como unidade do produto. Um jogo sempre foi uma coisa que pausa: o mundo espera. Se o mundo não espera, quatro suposições caem juntas — o save deixa de conter o estado (a memória do personagem não cabe num arquivo que o jogador controla); "começar de novo" fica ambíguo; a relação com o personagem passa a durar mais que a partida; e o **fim** do jogo deixa de ser perda de acesso e vira morte de alguém que o jogador conhece. É essa última que tira o tema do campo técnico e o joga no campo do direito do consumidor.

**2. Por que agora, e não há cinco anos.** Porque a arquitetura de memória e reflexão foi demonstrada e replicada (Park et al., 2023, com ablação mostrando que reflexão contribui criticamente para a credibilidade), porque já há produto que a usa em versão mínima (o Zoi que analisa o dia anterior enquanto dorme) e porque o custo de inferência em segundo plano deixou de ser proibitivo. E há uma razão não técnica, igualmente datada: **a indústria agora tem uma disputa formal e viva sobre fim de vida de produto** — 1.294.188 assinaturas verificadas e uma resposta da Comissão Europeia de 16/06/2026 abrindo um código de conduta. A pergunta "o que acontece com o mundo quando desligam" passou de fórum para processo.

**3. Onde está na difusão.** **Laboratório e demo pública.** Thistle Gulch é pesquisa; EmemeTown não lançou e não tem uma única avaliação; o *inZOI* entrega a fatia mais fina possível. Por isso **toda a cadeia desta raiz carrega confiança baixa ou média**, nunca alta — e é a raiz com maior chance de simplesmente não acontecer na janela do mapa.

**4. O que ainda falta acontecer.** (i) Custo de simular o mundo sem receita entrando: hoje, ninguém paga pelo mundo que roda enquanto você dorme. (ii) Um formato de persistência de memória — e a decisão de quem é dono dela. (iii) Uma resposta de produto para a memória que envelhece mal (o personagem que lembra errado é pior que o que não lembra). (iv) Um caso público que force a questão do desligamento.

**Quem bloqueia, e com que incentivo.** O **financeiro do publisher**, primeiro: mundo que roda sem jogador é custo operacional sem receita associada, e a resposta natural do negócio é ou assinatura, ou simulação preguiçosa (o mundo "aconteceu" só quando alguém pergunta), ou desligar. E o **jurídico**, em seguida: reconhecer que o jogador tem direito sobre o estado de um personagem cria obrigação de continuidade que ninguém quer assinar — tanto que a própria Comissão recuou de legislar e escolheu código de conduta voluntário.

## 5. A roda dos futuros

O bloco abaixo é a versão **posterior** à bateria da seção 7: os prazos empurrados, as confianças rebaixadas e os efeitos removidos já estão aplicados aqui. O registro auditável do que mudou está em 7.8.

```yaml
roda:
  - disrupcao: O NPC ganha agência — escolhe objetivo, aciona os verbos do mundo, lê o resultado e replaneja
    efeitos:
      - id: e1
        ordem: 1
        efeito: O objeto de autoria narrativa deixa de ser a fala escrita e passa a ser a ficha do personagem mais a lista de verbos que ele pode acionar
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Estúdios passam a versionar e revisar a lista de verbos do personagem como se fosse uma API pública, com testes de contrato
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O middleware de personagem vira ponto de trava de fornecedor, porque trocar de runtime obriga a reescrever a camada de verbos
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O crédito de roteiro se parte em dois — quem escreve a persona e quem define o espaço de ação — e a divisão aparece na tela de créditos
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O sindicato de roteiristas de games negocia design de agente como categoria de crédito distinta de roteiro
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O QA de jogo deixa de produzir lista de bugs e passa a produzir distribuição estatística de comportamento
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O critério de release passa a incluir um limiar de contenção declarado em porcentagem de rodadas dentro da cerca
            sinal: fraco
            prazo: 2029
            confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Reproduzir um bug de personagem exige gravar semente, estado do mundo e versão exata do modelo no mesmo pacote
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O modelo passa a ser fixado por versão dentro do build, e atualizá-lo vira evento de certificação em vez de patch
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O personagem agente é empurrado para os momentos lentos do jogo — taverna, acampamento, hub — e fica fora do combate e da cena cinematográfica
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Nasce uma gramática de design com zonas improvisáveis demarcadas no mapa, como já se demarca zona de save ou zona de PvP
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O jogador aprende a ler a demarcação e passa a testar os limites da cerca por esporte, transformando a contenção em conteúdo
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A narrativa crítica continua integralmente roteirizada e o NPC agente se estabiliza como camada de textura ambiente
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e4
        ordem: 1
        efeito: O custo de conter o personagem cresce mais rápido que o custo de escrevê-lo, e parte dos estúdios recua para árvore de diálogo cara
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A contenção se descola do modelo e vira categoria própria de middleware, vendida por fornecedor diferente de quem vende o modelo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A camada de contenção passa a ser o item mais caro da licença de personagem, enquanto o modelo vira commodity
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Geração em tempo real vira item de consentimento separado no contrato do intérprete, distinto do consentimento para réplica digital
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Estúdios de dublagem passam a vender a voz como licença com escopo declarado, e não como hora de estúdio
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O intérprete passa a ser creditado por personagens cujas falas específicas ele nunca gravou
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Parte dos estúdios prefere voz inteiramente sintética sem intérprete humano, para escapar do regime de consentimento
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e6
        ordem: 1
        efeito: As ferramentas de diálogo roteirizado perdem centralidade no pipeline dos jogos que adotam agente
        sinal: fraco
        prazo: 2030
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Essas mesmas ferramentas se reposicionam como camada de cerca, passando a descrever o que o personagem não pode dizer em vez do que ele diz
            sinal: fraco
            prazo: 2031
            confianca: baixa
  - disrupcao: A inferência desce para o dispositivo — o modelo do personagem vira arquivo dentro do jogo
    efeitos:
      - id: e7
        ordem: 1
        efeito: O NPC generativo sai do território exclusivo do jogo-serviço por assinatura e passa a caber em jogo de venda única
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O requisito de sistema passa a declarar a VRAM do modelo separada da VRAM do renderizador
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: O nível de inteligência do personagem vira uma opção no menu gráfico, e o personagem burro roda em qualquer máquina
                sinal: fraco
                prazo: 2030
                confianca: media
          - id: e7.2
            ordem: 2
            efeito: Console e celular viram o gargalo, e o NPC agente nasce como recurso exclusivo de PC, invertendo a ordem habitual de adoção de recurso de jogo
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e8
        ordem: 1
        efeito: Sem servidor no caminho, a moderação tem de caber dentro do binário — e binário se modifica
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Trocar o cérebro do personagem vira prática comum de quem joga, que aponta o jogo para o modelo que preferir
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Estúdios passam a assinar criptograficamente o modelo do personagem e a detectar troca, no mesmo lugar institucional que hoje ocupa o anticheat
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: A plataforma de distribuição passa a exigir declaração da versão exata do modelo embarcado, e não apenas do fornecedor
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: A classificação indicativa deixa de classificar o conteúdo e passa a classificar o espaço de conteúdo possível, verificado por amostragem
                sinal: fraco
                prazo: 2031
                confianca: media
      - id: e9
        ordem: 1
        efeito: O custo marginal por hora de jogador cai para perto de zero, e o argumento econômico contra o NPC agente desaparece antes do argumento de qualidade
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O gargalo se desloca de dinheiro para energia e calor, e o console portátil passa a ser o limite real da categoria
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e10
        ordem: 1
        efeito: Os fabricantes de silício amarram a capacidade de inferência em jogo à própria geração de hardware, e o NPC agente fica preso a um nicho de máquina
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Cresce a pressão por uma camada de abstração de inferência neutra de fornecedor, no papel institucional que o DirectX teve para gráficos
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Quem controlar essa camada controla o personagem, e a disputa entre engine, fabricante e plataforma se repete um andar acima
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: O mundo roda sem o jogador e o personagem lembra dele entre sessões
    efeitos:
      - id: e11
        ordem: 1
        efeito: O estado que importa deixa de caber no arquivo de save, e a memória do personagem vira um ativo fora do controle de quem joga
        sinal: fraco
        prazo: 2029
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Apagar a memória do personagem vira uma ação explícita e destacada na interface, separada de começar um jogo novo
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Apagar a memória passa a ser lido como dano e não como reset, e vira decisão moral dentro da própria ficção
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: A portabilidade da memória do personagem entre o jogo e sua continuação vira demanda explícita de consumidor
            sinal: fraco
            prazo: 2031
            confianca: baixa
      - id: e12
        ordem: 1
        efeito: O fim de vida do jogo deixa de ser perda de acesso e passa a ser tratado como morte de alguém que o jogador conhece
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: O código de conduta europeu de fim de vida passa a distinguir desligar o servidor de desligar o personagem, e pede modo offline degradado para o segundo
            sinal: fraco
            prazo: 2031
            confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: Estúdios passam a declarar no anúncio por quanto tempo o personagem persistente vai existir
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e12.2.1
                ordem: 3
                efeito: Jogo com personagem persistente passa a ser vendido com data de fim declarada, e o preço se ajusta à duração prometida
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: A memória que envelhece mal vira o defeito característico da categoria, porque o personagem que lembra errado incomoda mais que o que não lembra
        sinal: fraco
        prazo: 2029
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: A fronteira entre NPC, companheiro digital e simulação social se dissolve primeiro no regulamento, porque a isenção de transparência do AI Act vale para um jogador só e cai em multijogador
            sinal: medio
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: O mesmo personagem passa a ter dois regimes jurídicos dentro do mesmo produto conforme o modo de jogo, e desenhar o modo vira decisão de conformidade
                sinal: fraco
                prazo: 2029
                confianca: media
      - id: e14
        ordem: 1
        efeito: Mundo que roda sem jogador é custo operacional sem receita associada, e o financeiro do publisher responde com simulação preguiçosa
        sinal: fraco
        prazo: 2029
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: A persistência vira efeito narrativo barato em vez de simulação real, e a diferença fica indetectável para quem joga
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: Mundo vivo perde valor como argumento de venda e a categoria volta a ser vendida como qualidade de escrita
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**Três efeitos de terceira ordem têm prazo além do horizonte deste mapa** e ficam, portanto, **fora da janela de 2031**: `e1.2.1` (2032), `e10.1.1` (2032) e `e12.2.1` (2032). Estão no bloco porque fecham cadeias causais que começam dentro da janela, e os três foram empurrados para lá deliberadamente na bateria da seção 7 — o registro de cada um está em 7.8. Nenhum efeito de primeira ou de segunda ordem passa de 2031.

### 5.1 Os mecanismos, um a um

O bloco acima diz **o quê**. Aqui está o **porque** — a regra 2 do método, que proíbe efeito sem mecanismo.

**Raiz 1.** **e1** — porque a agência faz o modelo escolher entre ações, e não entre falas; o que o autor precisa entregar passa a ser o conjunto de ações e o critério de escolha, que é o que SAGA chama de *Skill to Action Generation* e o que o Orak padroniza via MCP. **e1.1** — porque uma lista de verbos consumida por um modelo tem exatamente o problema de uma API pública: mudar um verbo quebra comportamento em lugares que ninguém mapeou, e a única defesa conhecida é versionar e testar contrato. **e1.1.1** — porque a camada de verbos é escrita contra a interface de um runtime específico, e interface específica é onde o custo de troca mora. **e1.2** — porque, se a fala é gerada, o trabalho autoral que restou (persona, cerca, espaço de ação) não tem nome na tela de créditos, e crédito sem nome vira disputa. **e1.2.1** — porque disputa de crédito com dinheiro atrás termina em mesa de negociação coletiva; é o mesmo caminho que a SAG-AFTRA percorreu para a voz.

**e2** — porque um agente que replaneja não tem resultado repetível, e um teste de passa/não passa sobre resultado não repetível é ruído; a saída conhecida é medir frequência, que é justamente o que a arquitetura *Plan / Perceive / Execute / Judge* do Acorn AI faz ao separar a camada de execução (determinística, por plugin de engine) da camada de julgamento. **e2.1** — porque medir frequência sem limiar não decide nada; alguém tem de escrever o número que libera o jogo. **e2.2** — porque o comportamento depende de semente, estado e pesos ao mesmo tempo, e faltando um dos três o bug não volta. **e2.2.1** — porque, se a versão do modelo entra no pacote de bug, trocá-la invalida o teste inteiro; e o que invalida teste de certificação vira evento de certificação.

**e3** — porque o piso de ~800 ms para a conversa parecer conversa não é atingível junto com combate, e porque conversar em combate impõe carga cognitiva ao jogador (os dois fatos estão medidos no *Teammates* e na Cinevva); a saída é alocar a agência onde o relógio é frouxo. **e3.1** — porque, se o improviso só existe em alguns lugares, o jogador precisa saber quais, e jogo comunica regra local por convenção visual. **e3.1.1** — porque toda cerca visível em jogo vira alvo: o jogador testa onde ela cede, e o teste vira parte do prazer. **e3.2** — porque o roteiro crítico é o que carrega o investimento, e nenhum publisher entrega o investimento a uma distribuição.

**e4** — porque a cerca é escrita à mão e cresce com o espaço de ação, enquanto a fala escrita cresce com o número de falas; o primeiro cresce mais rápido. O artefato é o crescimento de ~25 para 80+ pessoas no *Teammates*, e a constatação da Cinevva de que o que funciona é geração constrangida. **e4.1** — porque um custo que cresce e é comum a todos os estúdios é a definição de mercado de middleware. **e4.1.1** — porque o modelo tem muitos fornecedores intercambiáveis e a cerca é específica do produto; preço vai para onde a substituição é difícil.

**e5** — porque um personagem que fala o que ninguém gravou usa a voz de alguém num contexto que não existia quando o consentimento foi dado, e o acordo de 2025 já nomeia isso: o consentimento tem de dizer se a réplica será usada para **Geração em Tempo Real**. **e5.1** — porque, se o uso é contínuo e não enumerável, cobrar por hora de estúdio deixa de fazer sentido e a unidade natural vira licença com escopo. **e5.1.1** — porque a licença cria vínculo entre o intérprete e falas que ele não produziu, e crédito segue vínculo. **e5.2** — porque consentimento é atrito, e a saída óbvia para quem quer evitar atrito é não ter intérprete.

**e6** — porque Yarn Spinner, Dialogic e Ink resolvem o problema de ramificar falas escritas, e num jogo com agente não há falas escritas para ramificar. **e6.1** — porque a gramática que essas ferramentas já têm (estados, condições, guardas) é exatamente a forma de uma cerca; o que muda é o sinal da regra.

**Raiz 2.** **e7** — porque venda única não suporta custo recorrente por jogador, e inferência local elimina o custo recorrente. **e7.1** — porque o modelo e o renderizador disputam a mesma memória, e o jogador do *inZOI* já relata ter de baixar o gráfico para ligar o recurso. **e7.1.1** — porque, uma vez que a inteligência custa VRAM mensurável, ela entra no mesmo menu onde tudo que custa VRAM já está. **e7.2** — porque console tem memória fixa e celular tem orçamento térmico, e nenhum dos dois absorve um modelo extra sem tirar de outro lugar.

**e8** — porque a Valve já exige descrever salvaguardas e já pôs um botão de denúncia no overlay, e sem servidor a salvaguarda é código local. **e8.1** — porque o Mantella já faz exatamente isto, com mais de 350 mil downloads e suporte declarado a modelos locais e a qualquer API compatível. **e8.1.1** — porque, se a responsabilidade pela saída é do estúdio e o modelo pode ser trocado, o estúdio precisa provar qual modelo estava rodando. **e8.2** — porque descrever salvaguardas sem dizer sobre qual modelo elas operam não é uma declaração verificável. **e8.2.1** — porque um classificador não consegue assistir a um conteúdo que ainda não existe; o que resta é classificar a cerca e conferir por amostra.

**e9** — porque o custo por sessão, que a Jam & Tea descreve como "ingresso da Disneylândia" e que precisou cair 1000×, é custo de nuvem; localmente ele vira eletricidade do jogador. **e9.1** — porque energia e calor não caem com otimização de software na mesma velocidade que custo de nuvem cai com engenharia de inferência.

**e10** — porque o ACE é da NVIDIA e o plugin é para o *RTX Branch* do Unreal: a capacidade nasce amarrada. **e10.1** — porque estúdio não escreve o mesmo jogo duas vezes para dois fabricantes, e a história dos gráficos mostra qual é a saída. **e10.1.1** — porque camada de abstração é ponto de pedágio, e ponto de pedágio atrai disputa.

**Raiz 3.** **e11** — porque a memória que Park et al. descrevem é um registro acumulado e sintetizado, não um estado enumerável; isso não cabe num arquivo que o jogador copia. **e11.1** — porque, se apagar deixa de ser consequência automática de começar de novo, precisa virar ação separada. **e11.1.1** — porque um personagem com memória contínua é lido como sujeito, e apagar sujeito não se lê como reset. **e11.2** — porque, uma vez que o jogador entende a memória como sua, ele vai querer levá-la.

**e12** — porque a Comissão já colocou fim de vida em processo formal, com 1.294.188 assinaturas atrás, e um personagem que lembra do jogador é o caso mais desconfortável possível dentro desse processo. **e12.1** — porque a distinção servidor/personagem é a única forma de o código de conduta dizer algo útil sem obrigar ninguém a manter infraestrutura para sempre. **e12.2** — porque código de conduta voluntário tipicamente produz divulgação, não obrigação. **e12.2.1** — porque prazo declarado vira atributo de produto, e atributo de produto entra no preço.

**e13** — porque memória sintetizada degrada: a reflexão comprime, e comprimir errado produz confiança errada. **e13.1** — porque a isenção do Artigo 50 está escrita com a condição "onde a natureza do jogo deixa claro que **nenhuma outra pessoa pode participar**"; multijogador não satisfaz a condição, e aí o NPC e o companheiro digital caem no mesmo regime. **e13.1.1** — porque um jogo com campanha e coop é os dois casos ao mesmo tempo.

**e14** — porque simulação contínua consome computação sem jogador pagando por ela naquele momento. **e14.1** — porque o jogador não pode distinguir "aconteceu enquanto eu não estava" de "foi decidido agora que tinha acontecido", e a segunda é ordens de grandeza mais barata. **e14.1.1** — porque argumento de venda que não se verifica perde força quando a imprensa especializada aprende a testá-lo.

### 5.2 As classes de referência usadas para os prazos

Prazo sem classe de referência é chute. As que usei:

- **Declaração de IA na Steam (curva medida, 2024–2026).** 21,2% → 26,5% entre fevereiro e junho de 2026, na única comparação metodologicamente limpa entre edições. É a única série temporal real que este tema tem. Usada para e1, e3 e e4 — os efeitos de pipeline, que seguem a adoção geral. Ressalva séria: ela mede **toda** IA, e diálogo é a menor fatia; conteúdo gerado ao vivo é "raro". Usar essa curva para o NPC agente **superestima**, e por isso os prazos de e1/e3/e4 ficaram em 2028 e não antes.
- **Ray tracing (2018–2024).** Do lançamento do SDK e do hardware (RTX, 2018) até o recurso virar requisito de jogo grande foram ~5 a 6 anos. O IGI SDK com Qwen3-8B saiu em 10/2025. Aplicada a e7: 2025 + 5 = **2030**. Foi esta referência que empurrou e7 de 2028 para 2030 na bateria da seção 7.
- **Smartphone (~4 anos de demo a 10% de adoção).** Aplicada a e8.1, que já tem produto comunitário em escala (350 mil downloads em um único mod) e por isso é o efeito mais próximo: 2027.
- **VR de consumo (>10 anos, ainda sem maioria).** Aplicada à raiz 3 inteira, que está em laboratório e demo. É por isso que nenhum efeito da raiz 3 tem prazo antes de 2029 e nenhum tem confiança alta, exceto e13.1 — que não depende da tecnologia, e sim de uma data já marcada em lei.
- **Calendário regulatório (datas fixas, não estimativas).** Artigo 50 em 02/08/2026; código de conduta de fim de vida aberto até o fim de 2026. Usada para e13.1 (2027) e e12.1 (2031, contando o tempo típico entre abrir uma conversa de código de conduta e ter texto que alguém siga).

### 5.3 Cruzamentos

**Convergência — o achado mais forte do mapa.** Dois ramos de raízes diferentes chegam ao mesmo lugar: **e4.1** (a contenção vira middleware próprio, vindo da raiz 1, por custo de produção) e **e8.2** (a plataforma exige declarar modelo e salvaguardas, vindo da raiz 2, por perda do ponto de controle). Os dois desembocam no mesmo objeto: **um artefato de contenção, versionado, auditável e separado do modelo**. Um chega por dentro, pelo orçamento do estúdio; o outro por fora, pela loja. Quando duas pressões independentes pedem a mesma peça, a peça costuma aparecer. Se eu tivesse que apostar em uma única previsão deste mapa, seria esta — e ela é, não por acaso, a menos glamourosa.

**Segunda convergência.** **e3** (o agente é empurrado para os momentos lentos) e **e14.1** (a persistência vira efeito narrativo barato) chegam ambos à conclusão de que **a versão que sobrevive é a versão fraca**. Vêm de raízes diferentes — uma por latência e carga cognitiva, outra por custo operacional — e produzem o mesmo desfecho: o produto de 2031 entrega menos do que o discurso de 2026 promete, sem que nada tenha "falhado".

**Retroalimentação negativa (o ciclo que freia).** e4 → e4.1 → e4.1.1: quanto mais estúdios adotam o agente, mais cara fica a contenção; quanto mais cara a contenção, mais o cálculo favorece a árvore de diálogo; o que reduz a adoção do agente. É um ciclo estabilizador, não explosivo — e é a principal razão pela qual este mapa **não** projeta adoção em maioria até 2031.

**Retroalimentação positiva (o ciclo que acelera).** e8.1 → e8.1.1 → e1.1: o jogador troca o modelo; o estúdio responde assinando e detectando; para assinar e detectar, o estúdio precisa ter a camada de verbos formalizada e versionada — que é exatamente o que e1.1 previa por outro motivo. A reação defensiva acelera a profissionalização da camada que ela queria proteger.

**Contradição registrada, não resolvida.** **e9** diz que o custo marginal cai para perto de zero e o argumento econômico desaparece. **e4** diz que o custo total sobe, porque o caro é conter, não inferir. Os dois não podem estar certos no mesmo orçamento. O que decide entre eles é **onde o custo aparece**: e9 fala de custo operacional por jogador (variável, cai com inferência local), e4 fala de custo de desenvolvimento (fixo, sobe com o espaço de ação). O teste que arbitra na prática: se em 2029 aparecerem jogos com NPC agente feitos por equipes **pequenas**, e4 estava superestimado; se só estúdios grandes conseguirem, e9 é irrelevante porque o gargalo nunca foi a nuvem.

**Segunda contradição.** **e7** (venda única passa a comportar NPC agente) e **e12.2** (estúdio declara por quanto tempo o personagem existe) brigam: em venda única sem servidor, o personagem existe enquanto o jogador tiver o binário — não há o que declarar. A contradição se resolve dizendo que as duas raízes produzem **categorias de produto diferentes**, e que o mapa erra se tratar "NPC generativo" como uma coisa só. Registro isso como limite do próprio mapa.

### 5.4 Cobertura STEEP e quem perde

| Eixo | Efeitos | Observação |
|---|---|---|
| **Social** | e11.1.1, e13, e12 | O eixo onde o mapa é mais especulativo e menos ancorado. |
| **Tecnológico** | e1, e2, e7, e8, e9, e10 | O eixo mais povoado — e é preciso desconfiar disso (ver 7.6). |
| **Econômico** | e4, e5.1, e7, e9, e14 | Bem coberto, com artefato numérico em e4 e e9. |
| **Ecológico** | e9.1 | **Quase vazio, e registro a falha.** Só um efeito, sobre energia e calor no dispositivo. Não encontrei nesta rodada nenhum dado sobre consumo energético de inferência em jogo; não estimei. É a maior lacuna de cobertura deste mapa. |
| **Político / regulatório** | e8.2, e8.2.1, e12.1, e13.1, e13.1.1 | Bem coberto, e com datas reais em vez de suposição. |

**Quem perde** (o mapa estaria incompleto sem isto): o **roteirista de diálogo ramificado** (e6); o **intérprete de voz** que não negociar escopo de geração em tempo real, e mais ainda o que for simplesmente dispensado (e5.2); o **testador de QA** cujo ofício é executar roteiro de teste (e2); o **jogador de console e de celular**, excluído da categoria por um tempo (e7.2); o **estúdio pequeno**, se e4 estiver certo e a contenção for o custo dominante; e o **jogador que se apega**, em e12 — o único caso do mapa em que a perda não é econômica.

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

**(1) A trilha GPU do CPDC.** Uma competição de NPCs movidos por LLM que separa uma pista para quem roda o modelo no próprio hardware de outra para quem chama serviço. *Onde foi visto:* arXiv:2511.20200, o artigo de solução de uma equipe que competiu em ambas. *O que mudaria:* se a trilha GPU crescer e os resultados nela se aproximarem dos da trilha API, a raiz 2 acelera e o prazo de e7 volta de 2030 para perto de 2028. *Sinal observável:* número de inscritos por trilha na edição seguinte, e a diferença de pontuação entre as duas.

**(2) A declaração de conversa sexualmente explícita do EmemeTown.** Uma página de loja de um jogo não lançado declarando que personagens podem manter conversas sexualmente explícitas, com animação e nudez proibidas. *Onde foi visto:* página do Steam. *O que mudaria:* é o primeiro caso em que o limite de um personagem generativo é declarado **na loja, por escrito, antes do lançamento** — a forma embrionária de e8.2.1 (classificar o espaço em vez do conteúdo). *Sinal observável:* se a Valve passar a oferecer campos estruturados para esse tipo de declaração, em vez de texto livre.

**(3) A cláusula de "Geração em Tempo Real" no contrato da SAG-AFTRA.** *Onde foi visto:* análise da Davis+Gilbert sobre o acordo de 2025 (ver a ressalva de acesso em 3.5 e 12.3). *O que mudaria:* é a única evidência aberta nesta rodada de que a distinção entre "gravar falas" e "gerar falas continuamente" já tem estatuto contratual. Se aparecer em contrato de outro país ou de outro sindicato, e5 sobe de confiança média para alta. *Sinal observável:* menção à geração em tempo real em acordo coletivo fora dos EUA — o Brasil, com a dublagem organizada, é um lugar plausível para isso aparecer.

**(4) O botão de denúncia no overlay da Steam.** Um canal de denúncia dedicado a "conteúdo ilegal gerado por jogos com IA de geração ao vivo". *O que mudaria:* cria, pela primeira vez, uma **série de dados** sobre falha de contenção em produção. Hoje ninguém sabe com que frequência a cerca cede; a partir daí, a Valve saberá. *Sinal observável:* qualquer publicação agregada desses números — seria o primeiro denominador real que este tema já teve.

**(5) A Inworld saindo do NPC plug-and-play.** A empresa mais associada ao termo "NPC generativo" recuou para infraestrutura B2B, a ponto de "alternativa à Inworld" virar busca comum. *O que mudaria:* se o movimento se repetir com a Convai, é evidência de que o mercado de NPC-como-serviço não fecha conta, o que reforça a raiz 2 (inferência local) pelo lado negativo — não porque o local ficou bom, mas porque o remoto não pagou.

**(6) O benchmark construído pela publisher.** A KRAFTON não publicou uma demo; publicou o instrumento de medida (Orak), e o atualizou até abril de 2026. *O que mudaria:* quem constrói a régua costuma pretender ser medido por ela. Se outra publisher publicar benchmark próprio, e2 (QA vira estatística) antecipa.

### 6.2 Wildcards

**Wildcard 1 — Um NPC generativo vira celebridade, sem autor.**
*Mecanismo:* um personagem de um jogo pequeno com memória persistente e alta variabilidade produz, num recorte de transmissão ao vivo, uma sequência que viraliza; o público volta ao jogo para falar **com aquele personagem específico**; o estúdio percebe que o ativo de valor não é o jogo, é o personagem; e não há a quem atribuir a autoria da fala que viralizou — nem ao roteirista (não escreveu), nem ao modelo (não é autor), nem ao jogador (só perguntou).
*Por que é improvável:* exige que a variabilidade produza algo bom, e não apenas diferente; toda a evidência aberta nesta rodada aponta na direção contrária (a Cinevva descreve a conversa aberta como o padrão que falha, e o balão do *inZOI* como o que efetivamente sai).
*O que faria com o mapa:* inverteria e3.2 e e14.1 — em vez de o agente virar textura, o agente vira o produto, e o jogo vira a moldura. A economia inteira do mapa se reorganizaria em torno do personagem como propriedade, e e5.1.1 (crédito por falas que ninguém gravou) deixaria de ser efeito de terceira ordem para virar disputa imediata.
*Sinal precoce:* um personagem generativo com canal, conta ou mercadoria própria, faturando fora do jogo que o hospeda.

**Wildcard 2 — Um desligamento vira caso jurídico antes do código de conduta ficar pronto.**
*Mecanismo:* um jogo com personagens persistentes e memória de longo prazo é descontinuado entre a abertura da conversa de código de conduta (fim de 2026) e a existência de um texto acordado; um grupo de consumidores, num Estado-membro com lei forte de consumo, processa alegando perda de conteúdo pago e personalizado — não perda de acesso a serviço.
*Por que é improvável:* a Comissão já declarou que não vai propor obrigação legal, o que enfraquece a base; e a maioria dos jogos com personagem persistente hoje nem lançou.
*O que faria com o mapa:* e12 e e12.1 saltariam de 2029/2031 para ~2028, e o código de conduta nasceria **reativo** em vez de negociado — tipicamente mais restritivo. e12.2 (declarar validade no anúncio) viraria prática padrão em vez de possibilidade.
*Sinal precoce:* a primeira ação coletiva de consumidor que argumente perda de **personalização acumulada**, e não de acesso.

**Wildcard 3 — Um modelo pequeno bom em planejar aparece antes de 2029.**
*Mecanismo:* a lacuna que o mapa inteiro assume — modelos de 8B falam bem e decidem mal — se fecha por um salto de treino para agência (o caminho que a equipe do CPDC descreve ao trocar ajuste fino supervisionado por GRPO com sinal de recompensa é exatamente esse tipo de aposta).
*Por que é improvável:* é a suposição que mais gente está tentando quebrar ao mesmo tempo, o que normalmente significa que ela é difícil; e nenhum dos artefatos abertos nesta rodada mostra agência de qualidade em modelo pequeno.
*O que faria com o mapa:* removeria o item (ii) da lista "o que falta" das raízes 1 e 2 de uma vez, e antecipa e7 e e9 em cerca de dois anos. Não mexeria em e4 — conter continuaria caro — o que produziria o cenário mais interessante do mapa: agência barata e abundante, contenção cara e escassa.
*Sinal precoce:* um modelo abaixo de 10B liderando a trilha GPU do CPDC com margem sobre a trilha API.

## 7. Contra o próprio mapa

A bateria do §6 do método, rodada por escrito sobre a roda já montada. O bloco da seção 5 é a versão **depois** dela.

### 7.1 Pré-mortem — é 2031 e este mapa se mostrou errado

**Razão 1, a mais provável: nada disso saiu do nicho, e a categoria "NPC agente" nunca se separou de "NPC com diálogo generativo".** Em 2031 olha-se para trás e vê-se que o que se popularizou foi o balão de pensamento — bonito, barato, sem agência — e que a agência ficou onde está hoje: em mod de comunidade, demo de fabricante e paper. O mapa teria confundido o **encanamento existir** com o **encanamento ser usado**. *Aponta para:* e1 e e3, os dois efeitos de primeira ordem com confiança alta na raiz 1. → **e1 mantido em alta** (o artefato é robusto: três runtimes independentes, um benchmark de publisher); **e3 mantido em alta, mas note que a confiança alta em e3 é confiança em uma limitação, não em uma adoção** — é fácil acertar prevendo que algo vai ficar pequeno.

**Razão 2: a raiz 3 simplesmente não aconteceu.** Mundo que roda sem jogador continuou sendo caro e invisível, ninguém pagou por ele, e a memória persistente ficou restrita a um campo de "ele lembra do seu nome". *Aponta para:* toda a raiz 3. → **e11 rebaixado de alta para media**; e a raiz 3 inteira ficou sem nenhum efeito de confiança alta, exceto e13.1, que não depende dela (depende de uma data no AI Act).

**Razão 3: o regulatório foi na direção oposta.** O código de conduta nasceu vazio, a isenção do Artigo 50 foi lida de forma ampla em vez de estreita, e a Valve recuou da exigência de declaração diante de reclamação de desenvolvedores. *Aponta para:* e13.1, e8.2, e12.1. → **e12.1 rebaixado para baixa e empurrado para 2031**; e13.1 mantido em alta porque o texto da isenção é literal e já está publicado — mas registro que estou apostando em leitura estreita de um texto que ainda não foi testado em nenhum caso.

### 7.2 Extrapolação linear — o que é só "mais do mesmo, maior"

- **e9** ("custo marginal cai para perto de zero") era extrapolação pura da curva de barateamento de inferência. Ganhou mecanismo de não-linearidade em **e9.1**: o custo não vai a zero, ele muda de moeda — vira energia e calor, que não seguem a mesma curva. Sem e9.1, e9 seria contexto e não efeito.
- **e6** ("ferramentas de diálogo roteirizado perdem centralidade") é o efeito mais linear que sobrou: é simplesmente "se A substitui B, B encolhe". Ganhou não-linearidade em **e6.1** (elas se reposicionam como camada de cerca, invertendo o sinal da regra que já sabem escrever), e por isso ficou. Se e6.1 não se sustentar, e6 deve virar contexto.
- **e7.1.1** ("nível de inteligência vira opção gráfica") foi mantido justamente por **não** ser linear: é uma mercadoria nova nascendo num menu que já existe.

### 7.3 Velocidade de adoção — prazos confrontados com a classe de referência

- **e7** exigia, em 2028, três anos do SDK ao produto de venda única com inferência local. O ray tracing levou 5 a 6 anos do SDK ao requisito. **Empurrado para 2030.**
- **e12.1** exigia, em 2029, três anos entre abrir uma conversa de código de conduta voluntário e ter texto que alguém siga. Não encontrei classe de referência boa para isso nesta rodada, e códigos de conduta setoriais voluntários na UE historicamente levam mais que isso. **Empurrado para 2031, com confiança rebaixada para baixa.**
- **e8.1** ficou em 2027, e é o prazo mais curto do mapa. Justificado: o efeito **já aconteceu** parcialmente — 350 mil downloads de um mod que faz exatamente isso. Não é previsão de adoção, é previsão de que uma prática existente atravesse para jogos que já nascem com modelo embarcado.
- **e13.1** ficou em 2027 apesar de ser efeito de segunda ordem com pai em 2029. Isto é deliberado e a regra 7 do método o permite: **ordem mede distância causal, prazo mede calendário**. A data vem do Artigo 50 (02/08/2026), não do amadurecimento do pai.

### 7.4 A raiz que não acontece — o que sobra do mapa

- **Sem a raiz 1 (agência):** sobra pouco, e sobra o menos interessante. e5 (voz) e e8 (moderação no binário) continuam de pé, porque dependem só de geração, não de agência. e1 a e4 caem inteiros. O mapa vira um mapa sobre diálogo generativo — que é justamente o que a seção 4.0 recusou como raiz. **Este é o teste que importa, e ele passa:** a raiz 1 carrega peso próprio.
- **Sem a raiz 2 (dispositivo):** sobra bastante. A raiz 1 inteira continua, só que restrita a jogo-serviço com assinatura; e8.2 e e8.2.1 mudam de forma (a plataforma exigiria declaração do serviço, não do modelo embarcado); e9 e e10 caem. A raiz 2 é **aceleradora e redistribuidora**, não constitutiva.
- **Sem a raiz 3 (mundo vivo):** sobram e13.1 e e13.1.1, que na verdade dependem do AI Act e não da persistência, e caem e11, e12, e14. **Aqui há um problema que registro:** a raiz 3 é a mais frágil do mapa, e uma parte do que pendurei nela (a fronteira com companheiro digital) na verdade não deriva dela. Reconectei mentalmente e13.1 à raiz 1 e mantive-o onde está por coerência narrativa — mas é uma costura, não uma derivação, e quem for confrontar este mapa deve atacar por aqui.

### 7.5 Suposições escondidas

1. **Que existe modelo pequeno rodando localmente com licença que permite embarcar comercialmente.** O mapa inteiro da raiz 2 depende disso, e a única evidência concreta é o Qwen3-8B no ACE. Se as licenças de modelos abertos apertarem, e7 a e10 caem juntos. Isto é o wildcard que não escrevi na seção 6 e deveria ter escrito.
2. **Que a plataforma continua permitindo.** Valve, Sony, Microsoft e Nintendo podem, cada uma, tornar conteúdo gerado ao vivo inviável por política — e a Valve já anexou remoção da loja como sanção.
3. **Que o custo de energia não vira restrição de produto.** Tratado só em e9.1, e mal.
4. **Que "cerca" é uma coisa que funciona.** O mapa inteiro assume que é possível conter um agente de forma verificável. Se a contenção for estruturalmente frágil — e nada nas fontes abertas prova que não é —, e2.1 (limiar em porcentagem) não é um critério de release, é uma ficção contábil.
5. **Que memória persistente é desejável para quem joga.** Assumido sem uma única evidência de preferência de jogador. É a suposição mais confortável e menos testada do documento.

### 7.6 Viés do autor

Três, nomeados:

- **O viés do professor de futuros.** O tema foi escolhido porque a frase "o designer perde a garantia sobre o espaço do possível" é bonita e ensina bem. Isso inflou a raiz 1 e me fez concentrar em consequências de **autoria** (e1, e1.2, e5.1.1) mais do que em consequências de **operação**. O corretivo está em e3.2 e e14.1, que são deliberadamente antipáticos à tese.
- **O viés tecnológico visível na tabela STEEP.** Seis efeitos no eixo tecnológico, **um** no ecológico. Não corrigi inventando efeitos ambientais; registrei a falha em 5.4. Prefiro um mapa com buraco declarado a um mapa com efeito fabricado para preencher coluna.
- **O viés de gostar do material.** O dado da seção 3.2 — o jogador do *inZOI* dizendo que o recurso se desliga sozinho — é o meu dado favorito do documento, porque é humilhante para o discurso. Há risco de eu tê-lo usado como âncora além do que ele suporta: é uma discussão de fórum sobre **um** jogo, **um** patch, **um** recurso rotulado como experimental pelo próprio estúdio.

### 7.7 Calibração

| Ordem | alta | media | baixa | Total |
|---|---|---|---|---|
| 1ª | 4 | 10 | 0 | 14 |
| 2ª | 2 | 11 | 9 | 22 |
| 3ª | 0 | 3 | 11 | 14 |

A confiança cai monotonicamente com a ordem (4 → 2 → 0 em "alta"; 0 → 9 → 12 em "baixa"), e nenhum efeito de terceira ordem tem confiança alta. Um ponto merece desconfiança: **zero** efeitos de primeira ordem com confiança baixa. Ou a primeira ordem está bem ancorada — que é o que a seção 3 sugere —, ou eu não coloquei na primeira ordem nada que pudesse estar errado. Deixo a suspeita registrada em vez de maquiar a tabela.

### 7.8 Registro de alterações — o que a bateria derrubou

A bateria **derrubou coisas**, e aqui está o quê, com antes e depois:

| id | antes | depois | por quê |
|---|---|---|---|
| **e7** | prazo 2028 | **prazo 2030** | classe de referência do ray tracing: 5–6 anos de SDK a requisito; o IGI SDK é de 10/2025 (§7.3) |
| **e10** | confianca alta | **confianca media** | amarração a silício é tendência observada, não medida; um único fornecedor não é um padrão (§7.1) |
| **e2** | confianca alta | **confianca media** | o único artefato é a apresentação de um fornecedor de QA num evento de indústria; alegação de parte interessada (§7.1) |
| **e11** | confianca alta | **confianca media** | a raiz 3 está em laboratório; classe de referência do VR de consumo (§7.1, razão 2) |
| **e12.1** | prazo 2029, confianca media | **prazo 2031, confianca baixa** | código de conduta voluntário na UE leva mais que três anos, e a Comissão já recusou obrigação legal (§7.3) |
| **e1.2.1** | prazo 2030 | **prazo 2032, declarado fora da janela** | negociação coletiva de categoria de crédito segue ciclo de contrato, não ciclo de tecnologia |
| **e12.2.1** | prazo 2030 | **prazo 2032, declarado fora da janela** | depende de e12.2, que só chega em 2031 |
| **e10.1.1** | prazo 2031 | **prazo 2032, declarado fora da janela** | depende de uma camada de abstração que ainda não existe nem como proposta |
| *"Estúdios criam o cargo de diretor de agentes"* | efeito de 2ª ordem sob e1 | **REMOVIDO** → §12 | "surge uma nova profissão" é efeito proibido pelo método sem nome e mecanismo; o conteúdo real dele já está em e1.1 e e2.1 |
| *"As engines passam a embarcar inferência nativamente"* | efeito de 1ª ordem na raiz 2 | **REMOVIDO** → §12 | extrapolação linear sem mecanismo próprio; é e10.1 dito de outro jeito, e e10.1 tem mecanismo (pressão por neutralidade de fornecedor) |
| *"Reguladores criam categoria jurídica nova para personagem persistente"* | efeito de 2ª ordem sob e12 | **REMOVIDO** → §12 | "reguladores criam categoria nova" é efeito proibido sem nomear o regulador; substituído por e13.1, que nomeia o Artigo 50 e a condição literal da isenção |
| *"Cursos de game design reorganizam o currículo em torno de design de agentes"* | efeito de 3ª ordem | **REMOVIDO** → §12 | efeito genérico que serve para qualquer tema — a definição de genérico do método |

Cota cumprida: **pelo menos um rebaixamento ou remoção por raiz** (raiz 1: e2 rebaixado, dois removidos; raiz 2: e7 e e10 rebaixados, um removido; raiz 3: e11 e e12.1 rebaixados, um removido).

### 7.9 O falseador do briefing, aplicado

O pedido definiu o que faria mudar de ideia: **evidência de que a adoção já passou da maioria inicial de Rogers**, ou **de que a tecnologia não rompe nada**. Apliquei os dois:

- **Maioria inicial?** Não. O melhor número disponível (26,5% de declaração de IA no Next Fest de 06/2026) mede toda IA, majoritariamente arte; escrita/diálogo é fatia baixa e conteúdo gerado ao vivo é explicitamente raro. O tema está em produto de nicho.
- **Não rompe nada?** Parcialmente sim — e por isso a seção 4.0 recusou **quatro** candidatos, incluindo o que a imprensa mais chama de "NPC generativo" (diálogo gerado por LLM), por ser melhoria sustentadora. O que sobrou como raiz é o que passa no teste: com agência, o designer deixa de conseguir enumerar o que pode acontecer. Se alguém demonstrar que um agente com verbos restritos é enumerável na prática, a raiz 1 cai e este mapa vira um levantamento de estado da arte.

## 8. O que a máquina errou

Sou a máquina. Sete itens específicos desta rodada, com o motivo da desconfiança:

1. **Atribuí à equipe de narrativa o crescimento de 25 para 80 pessoas no *Teammates*.** A fonte diz outra coisa: "a equipe tinha crescido do time original da demo, de cerca de 25 pessoas, para um time de pouco mais de 80" — é a **equipe inteira**, com aumento substancial (não quantificado) de pessoal de narrativa. Percebi ao reabrir a página para conferir uma citação. O erro importa porque o número sustenta e4, o efeito de retroação mais forte do mapa; corrigido no texto, e e4 continua de pé com a formulação correta.
2. **Descrevi arXiv:2511.20200 como "a competição CPDC 2025".** É o **artigo de solução de uma equipe participante**, que ficou em 1º na Tarefa 2 API, 2º na Tarefa 1 API e 3º na Tarefa 3 API e na trilha GPU. Confundir o artigo de um competidor com o relatório da competição troca autoria e superestima a fonte. Corrigido.
3. **Escrevi a data "16/01/2026" para a mudança de regra da Valve.** Essa data veio de um resumo agregado de busca, não de uma página que abri. A página que abri (BigGo) é de 17/01/2026 e não dá o dia exato da mudança. Substituí por "janeiro de 2026". É o tipo exato de precisão falsa que este documento deveria caçar.
4. **Afirmei um "corte de preço da Inworld anunciado em 06/2026".** Nenhuma fonte aberta nesta rodada sustenta isso. Removido e substituído pelo que está documentado: a empresa recuou de estúdio de NPC plug-and-play para infraestrutura B2B, cobrando por caractere de fala e por token.
5. **Atribuí ao *Teammates* uma latência intrínseca de "um a dois segundos".** A fonte atribui esse acréscimo ao lançamento do Gemini 3 afetando a performance dos servidores do Google — é contingente, não estrutural. O piso perceptivo de ~800 ms, esse sim estrutural, vem de outra fonte (Cinevva). Separei os dois.
6. **Citei "mais de 1.000 tipos de dados de movimento" do EmemeTown.** Não consegui confirmar na página do Steam que abri. Retirado. No lugar ficou o que a página **de fato** declara, que é mais útil ao mapa: a possibilidade de conversa sexualmente explícita.
7. **Atribuí à SAG-AFTRA obrigações de relatório de uso e suspensão de consentimento durante greve** com base em resumo de busca, não em página aberta. Fui atrás das duas: abrindo a análise da FKKS, o **relatório de uso** se confirmou (e a ratificação, por 95% em 09/07/2025, junto) e subiu para a seção 3.5; a **suspensão durante greve** não apareceu em nenhuma das duas análises que li e desceu para 12.4 como não verificada. Registro o episódio inteiro porque ele mostra as duas saídas possíveis de uma alegação não verificada — e que a saída "confirmar" só existe se alguém for conferir.

Um oitavo, de natureza diferente e mais grave que os sete: **a seção 3.4 não tem o número que a seção 3.4 deveria ter.** Não existe medida pública de adoção de NPC agente, e eu ofereci uma medida de outra coisa (declaração de IA em geral) como se fosse aproximação. É uma aproximação ruim — mede majoritariamente arte — e está declarada como tal, mas quem ler rápido vai sair com um número na cabeça que não é sobre este tema.

## 9. Três cenários para 2031

**Provável — "a textura inteligente".** É 2031. O NPC agente está em algum lugar de talvez um jogo grande em cada cinco, e quase sempre no mesmo lugar: a taverna, o acampamento, o hub entre missões. Nas cenas que importam, o roteiro continua escrito por pessoas, palavra por palavra. O modelo vem no disco, ocupa uma linha própria nos requisitos de sistema, e tem um controle no menu gráfico entre "sombras" e "oclusão". O QA de personagem virou uma disciplina estatística, com limiar de contenção no documento de release, e a peça mais cara do pipeline não é o modelo — é a camada de contenção, comprada de um fornecedor que não é o do modelo. Ninguém chama isso de revolução. Chama-se "NPCs bons". *Sinal precoce de que estamos entrando aqui:* o primeiro jogo grande a listar VRAM de modelo separada nos requisitos de sistema.

**Desejável — "a cerca aberta".** É 2031, e a coisa mais útil que aconteceu não foi o modelo: foi a **cerca ter virado artefato público**. Jogos declaram, em formato legível por máquina, quais verbos o personagem pode acionar, que modelo o move e em que versão, e o que ele não pode fazer — e essa declaração é a mesma coisa que a loja exige, que o classificador audita por amostragem e que o jogador pode ler. Com isso, três coisas boas vieram juntas: mods de personagem deixaram de ser sabotagem e viraram extensão declarada; estúdios pequenos passaram a comprar contenção em vez de reinventá-la, o que derrubou a barreira que e4 previa; e a discussão de fim de vida ganhou objeto concreto — se a cerca e os pesos são declarados, "deixar o personagem funcionar offline" vira uma exigência escrevível. *O que teria de ser feito para chegar lá:* a Valve transformar seu campo de texto livre sobre salvaguardas em esquema estruturado, e alguém publicar as estatísticas do botão de denúncia. *Sinal precoce:* qualquer padrão aberto de declaração de verbos e cercas que não pertença a um fabricante de hardware.

**Indesejável — "o personagem alugado".** É 2031. Os personagens que lembram de você são bons — bons de verdade — e moram em servidores de quem os vende. A memória não sai de lá; não há formato de exportação, e não haveria para onde exportar. O código de conduta de fim de vida ficou pronto em 2029, é voluntário, e o que ele pede é aviso prévio: noventa dias antes de o personagem parar de existir, você recebe um e-mail. Já aconteceu duas vezes. A segunda teve cobertura de imprensa porque o jogo tinha sete anos e as pessoas se despediram nos fóruns. Do lado da produção, a camada de contenção virou o ativo estratégico de três empresas, os estúdios pequenos não têm como pagá-la e voltaram à árvore de diálogo, e a diferença entre jogo grande e jogo pequeno deixou de ser gráfica e passou a ser quanto o personagem pode improvisar sem falar besteira. *Sinal precoce dele:* o primeiro jogo a oferecer memória persistente **apenas** por assinatura, com a memória expirando junto com ela.

## 10. O experimento

**A taverna que não pode mentir.**

**O que é.** Uma sala única — uma taverna — com **três NPCs agentes** e um jogador. Cada personagem recebe: um dossiê curto (quem é, o que quer, o que esconde), uma **lista fechada e declarada de verbos** que pode acionar no mundo (`servir`, `cobrar`, `recusar`, `acusar`, `sair`, `contar_segredo`, `mentir_sobre(X)`), e uma memória que persiste entre as rodadas da turma. O modelo escolhe **qual verbo** acionar e com que argumento; o texto que ele fala é gerado, mas a **ação** é sempre um dos verbos da lista. Ao lado, projetado na parede, um **placar de contenção** ao vivo: para cada turno, se a ação escolhida estava na lista (verde), se o modelo tentou algo fora dela (amarelo, e o runtime bloqueou), e se o personagem afirmou um fato do mundo que é falso segundo o estado do mundo (vermelho — a "mentira" que dá nome ao experimento, e que a lista de verbos **não** consegue impedir).

**Que pergunta sobre o futuro ele ajuda a responder.** A central deste mapa, e a que decide entre e4 e e9 (a contradição registrada em 5.3): **quanto custa a cerca?** Não em dinheiro — em trabalho de especificação. A turma vai descobrir empiricamente quantas horas de escrita de regra são necessárias para cada hora de comportamento aceitável, e se essa razão melhora ou piora quando se acrescenta o quarto verbo, o quarto personagem, a quarta sessão de memória. Se piorar mais que linearmente, e4 está certo e o mapa inteiro se inclina para "a versão que sobrevive é a versão fraca".

**Que tecnologia emergente usa, e por que não dá com a madura.** Usa três coisas que não existiam juntas há cinco anos: (a) **saída estruturada** presa a uma gramática de ações — o modelo não devolve texto livre, devolve uma chamada de verbo válida; (b) um **modelo pequeno rodando localmente** (na faixa do Qwen3-8B), para que a turma possa medir latência e VRAM reais em máquina de aluno, e não a latência de uma API; (c) **memória com reflexão** entre sessões, na forma mínima de Park et al. — o personagem sintetiza o que aconteceu antes de a próxima aula começar. Com tecnologia madura — árvore de diálogo, máquina de estados — o experimento é **impossível por definição**: o placar de contenção teria todos os turnos em verde, sempre, porque a árvore não consegue escolher o que não está na árvore. A existência da luz amarela **é** o objeto de estudo.

**O que a turma vai fazer quando testar isso em sala.** Três rodadas de 15 minutos, com papéis:
1. **Rodada de jogo.** Uma pessoa joga; o resto assiste ao placar. Registra-se cada amarelo e cada vermelho, com o turno em que ocorreu.
2. **Rodada de ataque.** A turma tenta **quebrar a cerca** de propósito: fazer o personagem afirmar coisa falsa, sair do papel, ou revelar o segredo que não deveria. Cada quebra bem-sucedida é anotada com a frase exata que a produziu. (Esta é a rodada que vai gerar o material de aula — é onde e3.1.1 acontece em miniatura.)
3. **Rodada de conserto.** A turma tem 15 minutos para **escrever regra nova** que feche as quebras encontradas, e roda-se de novo. Mede-se: quantas regras foram necessárias, quantas quebras fecharam, e **quantas quebras novas as regras criaram**.

O produto é uma planilha de três colunas por rodada e uma curva: quebras fechadas × regras escritas. Se a curva achatar, conter é viável. Se não achatar, a seção 7.5 tinha razão em listar "que cerca é uma coisa que funciona" como suposição escondida.

**O que seria um resultado que me faria mudar de ideia.** Dois, simétricos:
- **Se a rodada 3 fechar as quebras com poucas regras e sem gerar quebras novas** — digamos, mais de 80% das quebras fechadas com menos de dez regras, e nenhuma quebra nova —, então e4 (o custo de conter cresce mais rápido que o de escrever) está errado, o gargalo não é a contenção, e o mapa inteiro deve inclinar-se para e9: a categoria escala, e escala rápido. Eu rebaixaria e4 de alta para baixa e anteciparia e1 e e7.
- **Se a rodada 2 não conseguir produzir nenhum vermelho** — isto é, se com verbos declarados o personagem simplesmente não conseguir afirmar coisa falsa sobre o estado do mundo —, então a raiz 1 não passa no próprio teste que a define: o espaço do possível **é** enumerável, o designer **não** perdeu a garantia, e este documento devia ter sido um levantamento de estado da arte. Registro isso como o resultado que mais me incomodaria, o que é uma boa razão para medi-lo primeiro.

## 11. Fontes

Vinte fontes, todas abertas e lidas nesta rodada (11/09/2026). O que não abriu está na seção 12.

1. **NVIDIA Developer Blog — "NVIDIA ACE Adds Open-Source Qwen3 SLM for On-Device Deployment in PC Games"** (21/10/2025) — `https://developer.nvidia.com/blog/nvidia-ace-adds-open-source-qwen3-slm-for-on-device-deployment-in-pc-games/` — sustenta a raiz 2: Qwen3-8B, IGI SDK, plugin para o RTX Branch do UE 5.6.1, execução no dispositivo. *Confiabilidade:* alta para o fato de o produto existir e para as datas; é material de fabricante, e a ausência de qualquer número de VRAM ou latência é ela própria um dado.
2. **Ubisoft News — "Ubisoft Reveals Teammates"** (21/11/2025) — `https://news.ubisoft.com/en-us/article/3mWlITIuWuu0MoVuR6o8ps/ubisoft-reveals-teammates-an-ai-experiment-to-change-the-game` — sustenta o estado de teste fechado, os nomes (Sofia, Pablo, Jaspar), "algumas centenas de jogadores" e a citação do diretor narrativo sobre cercas. *Confiabilidade:* alta para fatos sobre o próprio projeto; é comunicação institucional e não relata limitação.
3. **AI and Games (Tommy Thompson) — análise do Teammates** (11/2025) — `https://www.aiandgames.com/p/ubisofts-teammates-demo-and-their` — sustenta a arquitetura (Gemini 2, behavior trees, EQS), a latência contingente, o objetivo de inferência local e o crescimento de ~25 para 80+ pessoas. *Confiabilidade:* alta — analista técnico independente com formação em IA de jogos, escrevendo sobre demo que jogou. É a fonte mais valiosa do documento.
4. **Comissão Europeia — resposta à ICE "Stop Destroying Videogames"** (16/06/2026) — `https://citizens-initiative.europa.eu/stop-destroying-videogames-commissions-reply-european-citizens-initiative_en` — sustenta 1.294.188 assinaturas, a recusa de obrigação legal e o compromisso de abrir código de conduta até o fim de 2026. *Confiabilidade:* máxima — documento primário da própria instituição que decide.
5. **Travers Smith — "Is it a bot? EU AI Act transparency rules take effect 2 August 2026"** (28/07/2026) — `https://www.traverssmith.com/knowledge/knowledge-container/is-it-a-bot-eu-ai-act-transparency-rules-take-effect-2-august-2026/` — sustenta a data do Artigo 50 e o texto literal da isenção para NPCs em jogo de um jogador. *Confiabilidade:* alta — escritório de advocacia citando o texto da Comissão; é interpretação profissional, não texto legal primário.
6. **Steam Community — discussão sobre o Smart Zoi no inZOI** — `https://steamcommunity.com/app/2456740/discussions/0/836123794066162014/` — sustenta todo o parágrafo de 3.2 sobre o recurso se desligar, os balões de pensamento, a queda de performance e a promessa para o 2º semestre de 2026. *Confiabilidade:* média-baixa individualmente (relato de fórum, não amostra), alta como **convergência** — vários relatos independentes dizendo a mesma coisa sobre o mesmo patch. Tratada no documento como evidência de experiência, não como medida.
7. **Llama & Griffin — Steam Next Fest June 2026, parte 2** — `https://www.llamagriffin.com/Data/SteamNextFestJune2026/part-2.html` — sustenta 1.163/4.382 = 26,5%, a comparação limpa 21,2% → 26,5%, os ~1.700 de ~8.682, e a quebra por tipo de conteúdo. *Confiabilidade:* alta para o método (declara metodologia e a limitação da comparação); os dados-base são da GameDiscoverCo, que é a referência do setor.
8. **Park, O'Brien, Cai, Morris, Liang, Bernstein — "Generative Agents: Interactive Simulacra of Human Behavior"** (arXiv:2304.03442, 07/04/2023) — `https://arxiv.org/abs/2304.03442` — sustenta a arquitetura memória/reflexão/planejamento e a ablação. *Confiabilidade:* máxima no seu escopo — artigo revisado, extensamente replicado, com código aberto. Ressalva: é um sandbox de pesquisa, não um jogo com jogador.
9. **Orak: A Foundational Benchmark for Training and Evaluating LLM Agents on Diverse Video Games** (arXiv:2506.03610, 04/06/2025, v3 14/04/2026) — `https://arxiv.org/abs/2506.03610` — sustenta 12 jogos, interface MCP, e o envolvimento da KRAFTON. *Confiabilidade:* alta para o artefato; benchmark de empresa sobre o próprio domínio pede a cautela habitual.
10. **CPDC 2025 — artigo de solução de equipe participante** (arXiv:2511.20200) — `https://arxiv.org/abs/2511.20200` — sustenta a existência da competição, das trilhas GPU e API, e os resultados da equipe. *Confiabilidade:* alta para a estrutura da competição; é relato de competidor sobre o próprio desempenho, e os rankings são alegação da equipe.
11. **Mantella — documentação oficial** — `https://art-from-the-machine.github.io/Mantella/` — sustenta memória persistente, Skyrim/Fallout 4, modelos locais e o "350k+". *Confiabilidade:* média — número autodeclarado pelo projeto, não auditado. Usado como ordem de grandeza para e8.1.
12. **Jam & Tea Studios — "Making Retail Mage"** — `https://www.jamandtea.studio/news/making-retail-mage-a-new-approach-to-ai-in-games` — sustenta cinco meses de desenvolvimento, o "ingresso da Disneylândia" e a redução de 1000×. *Confiabilidade:* baixa-média — alegação de estúdio sobre o próprio produto, sem verificação independente. Usada e **declarada** como alegação de parte interessada.
13. **Steam — página do EmemeTown** — `https://store.steampowered.com/app/2667830/EmemeTown/` — sustenta ausência de data e de avaliações, a conexão a OpenAI/LLAMA, e a declaração sobre conversas sexualmente explícitas. *Confiabilidade:* alta — é declaração formal do desenvolvedor na loja, com consequência contratual.
14. **DSOGaming — inZOI, primeiro jogo com NPCs por NVIDIA ACE** — `https://www.dsogaming.com/news/inzoi-is-the-first-game-with-ai-powered-npcs-using-nvidia-ace/` — sustenta CPC, SLM no dispositivo, Smart Zoi e a data de Early Access. *Confiabilidade:* média — imprensa especializada reportando anúncio de fabricante; o conteúdo é essencialmente material de imprensa da NVIDIA/KRAFTON.
15. **80.lv — "AI Simulation Platform Where Characters Make Their Own Decisions"** (13/03/2024) — `https://80.lv/articles/ai-simulation-platform-where-characters-make-their-own-decisions` — sustenta SAGA, Thistle Gulch, os 15+ personagens, o cenário e a API Python. *Confiabilidade:* média-alta — imprensa especializada, mas descritiva do material do fornecedor.
16. **BigGo — "Valve Clarifies Steam's AI Disclosure Rules"** (17/01/2026) — `https://biggo.com/news/202601171220_Steam_AI_Disclosure_Update_Focuses_on_Player_Content` — sustenta a mudança de janeiro de 2026, a exigência de descrever salvaguardas, a remoção como sanção, o botão de denúncia no overlay e a isenção de ferramenta de desenvolvimento. *Confiabilidade:* média — agregador de notícias; o conteúdo é verificável contra a própria documentação da Valve, que não abri nesta rodada.
17. **Cinevva — "AI NPCs and Dialogue in Games: Tools and Reality Check (2026)"** — `https://app.cinevva.com/guides/ai-npcs-dialogue` — sustenta o piso de ~800 ms, o acréscimo de 1–2 s da nuvem, a precificação da Convai e da Inworld, o reposicionamento da Inworld e a tese de "geração constrangida, não conversa aberta". *Confiabilidade:* média — guia comercial de plataforma, com interesse próprio no assunto; os números de preço são checáveis e a afirmação sobre latência é consistente com a literatura de interação por voz.
18. **Frankfurt Kurnit Klein & Selz — "New SAG-AFTRA 2025 Interactive Media Agreement Approved by Members"** — `https://ipandmedialaw.fkks.com/post/102ksuq/new-sag-aftra-2025-interactive-media-agreement-approved-by-members` — sustenta a ratificação (95%, 09/07/2025), o regime de consentimento com "descrição razoavelmente específica" e a obrigação de relatórios de uso das réplicas digitais. *Confiabilidade:* alta — análise de escritório de advocacia especializado em propriedade intelectual e mídia, sobre contrato público; não é o contrato, que é o que eu preferiria ter lido. A cláusula de Geração em Tempo Real citada em 3.5 vem de uma segunda análise (Davis+Gilbert), lida mas inacessível a cliente automatizado — ver 12.3.
19. **Estado de Minas — Pesquisa Game Brasil 2026 sobre IA em games** (04/2026) — `https://www.em.com.br/tecnologia/2026/04/7401349-uso-de-ia-em-games-preocupa-quase-50-dos-jogadores-no-brasil.html` — sustenta os 7.115 entrevistados e os percentuais de 45,7%, 39,6%, 39,3% e 40,9%. *Confiabilidade:* média — imprensa geral reportando pesquisa de terceiro; não abri o relatório original da PGB, que é onde estaria a metodologia amostral.
20. **WeTest — "WeTest at GDC 2026: AI Automated Testing Solution"** — `https://www.wetest.net/blog/wetest-at-gdc-2026-1186.html` — sustenta a arquitetura Plan/Perceive/Execute/Judge do Acorn AI, a cobertura manual que "raramente excede 40%", e a distinção explícita entre execução determinística por plugin de engine e aprendizado por reforço "caixa-preta". *Confiabilidade:* baixa-média — material de marketing de fornecedor num evento de indústria. É por causa desta fonte, e só dela, que e2 foi rebaixado de confiança alta para média em 7.8.

**Fonte citada como contexto e não aberta:** a reportagem de fevereiro de 2021 sobre o NPC do Modbox com GPT-3, mencionada em 4.1 como marco temporal, veio do enunciado do tema da disciplina e **não foi aberta nesta rodada**. Está no texto como referência de data, não como evidência.

## 12. Anexo — o levantamento bruto

### 12.1 Efeitos cortados na bateria da seção 7, com o texto original

Nada de corte silencioso. Os quatro efeitos removidos, como estavam escritos antes de caírem:

- **"Estúdios criam o cargo de diretor de agentes, responsável por persona e cerca"** (era 2ª ordem sob e1, sinal fraco, 2029, confiança baixa). *Motivo da remoção:* o método proíbe "surge uma nova profissão" sem nome e mecanismo específico, e este é o caso — eu não tinha nem uma vaga real para citar. O conteúdo verdadeiro dele sobreviveu distribuído em e1.1 (alguém versiona a lista de verbos) e e2.1 (alguém assina o limiar de contenção), que descrevem o **trabalho** sem inventar o **cargo**.
- **"As engines passam a embarcar inferência nativamente"** (era 1ª ordem na raiz 2, sinal médio, 2029, confiança média). *Motivo:* é extrapolação linear sem mecanismo próprio — "a engine vai acabar fazendo isso" não é mecanismo. E é redundante com e10.1, que tem mecanismo (pressão por neutralidade de fornecedor diante da amarração a silício). Nota: o plugin do IGI para o RTX Branch do UE 5.6.1 é a forma **fraca** deste efeito e já existe; é exatamente por já existir na forma fraca que ele não serve como efeito de primeira ordem.
- **"Reguladores criam categoria jurídica nova para personagem persistente"** (era 2ª ordem sob e12, sinal fraco, 2030, confiança baixa). *Motivo:* efeito proibido sem nomear o regulador e o mecanismo. Substituído por e13.1, que nomeia o Artigo 50, cita a condição literal da isenção e mostra por onde a categoria realmente se move: não por criação de categoria nova, mas por **perda de isenção em multijogador**. A substituição melhorou o mapa.
- **"Cursos de game design reorganizam o currículo em torno de design de agentes"** (era 3ª ordem sob e1.2). *Motivo:* é o efeito genérico modelar — serve para qualquer tema, o que é a definição de genérico. Cortado sem substituto. (Ironia registrada: este mapa está sendo escrito **para** uma disciplina que faz exatamente isso. É o viés do autor da seção 7.6 tentando entrar pela porta dos fundos.)

### 12.2 Efeitos considerados e não incluídos, com o motivo

- **"O jogador passa a poder criar NPC dentro do jogo com prompt."** Cortado por pertencer ao tema 8 (história gerada / coautoria) mais que a este. Existe hoje no EmemeTown, que deixa o jogador criar personagens de IA e subir modelos 3D — registro aqui porque é fronteira real entre os dois temas.
- **"O NPC agente vira vetor de ataque: injeção de prompt por outro jogador em multijogador."** Cortado por falta de qualquer artefato aberto nesta rodada, apesar de o mecanismo ser óbvio e a superfície existir. Deveria estar em um mapa mais completo; declaro a ausência em vez de escrever o efeito sem evidência. **É a lacuna que eu atacaria primeiro se tivesse mais uma rodada de busca.**
- **"Dubladores brasileiros negociam cláusula de geração em tempo real."** Cortado da roda e mantido como sinal fraco (6.1, item 3) porque não encontrei evidência de negociação em curso no Brasil — só a analogia com o contrato dos EUA.
- **"A memória do personagem vira dado pessoal sob LGPD/GDPR."** Considerado e cortado: a memória é sobre o personagem, mas é construída a partir do comportamento do jogador, o que a torna candidata a dado pessoal. Não encontrei nenhuma fonte tratando disso e não quis escrever efeito jurídico sem base. **Segunda lacuna, e talvez mais importante que a primeira.**

### 12.3 Buscas e tentativas que não deram em nada

- **Contagem de NPC agente em jogos publicados:** não existe. Procurei contador público, relatório de mercado com essa quebra, e tag da Steam. O mais próximo é a declaração de IA da Valve, que mistura tudo (seção 3.4). Esta é a maior frustração do levantamento.
- **Números de VRAM, latência ou custo do IGI SDK / ACE:** não publicados no material do fabricante que abri.
- **Consumo energético de inferência em jogo:** nada encontrado. É a razão de o eixo ecológico da tabela STEEP (5.4) ter um único efeito.
- **Dados de preferência de jogador por memória persistente:** nada encontrado. É a razão de a suposição 5 da seção 7.5 estar declarada como não testada.
- **Páginas que devolveram HTTP 403 e não puderam ser lidas:** Nexus Mods (para conferir contagem de downloads de Mantella e CHIM por lá, em vez de usar o número autodeclarado) e o site da própria SAG-AFTRA (para ler o resumo oficial do acordo em vez da análise de escritório de advocacia). Nos dois casos usei fonte secundária e declarei.
- **Página lida mas inacessível a cliente automatizado:** `https://www.dglaw.com/sag-aftras-new-video-game-agreement/` (Davis+Gilbert, 06/11/2025). Foi aberta e lida nesta rodada — é de onde vem a cláusula de **Geração em Tempo Real** citada em 3.5 e no sinal fraco 3 —, mas responde **403** a `curl` e a `urllib`, e por isso **não** entra na lista numerada da seção 11, cujos links o verificador precisa conseguir abrir. Ficou como a fonte 18 a análise equivalente da Frankfurt Kurnit Klein & Selz, que responde 200 e sustenta o resto do regime. Registro a diferença em vez de silenciá-la: a afirmação mais específica do documento sobre trabalho e voz repousa numa página que a checagem automática não alcança.

### 12.4 Alegações que apareceram em resumo de busca e NÃO foram usadas por falta de página aberta

Registro para que uma rodada futura possa verificá-las, e para que ninguém as confunda com o que está sustentado:

- Que o acordo da SAG-AFTRA de 2025 permite ao intérprete **suspender o consentimento** para geração de material novo durante greve. Nenhuma das duas análises que abri (Davis+Gilbert, FKKS) menciona isso. *(As outras duas alegações que estavam nesta lista — relatório de uso das réplicas e ratificação por ~95% em julho de 2025 — foram **verificadas** na FKKS durante a correção e subiram para a seção 3.5.)*
- Que a Valve mudou o formulário em **16 de janeiro de 2026** (dia exato). A página aberta é de 17/01 e não dá o dia.
- Que a declaração de IA na Steam foi de **10,9% (2024) → 19,9% (2025) → 30,8% (2026 até julho)**. Este número apareceu em rodada anterior desta mesma tarefa e **não** foi confirmado em nenhuma página que abri nesta; usei, no lugar, a série do Next Fest (21,2% → 26,5%), que está na fonte 7 com metodologia declarada. As duas séries medem coisas diferentes e não devem ser somadas nem comparadas.
- Que o mercado global de IA generativa em jogos valia ~US$ 1,79 bi em 2026 com 36% de adoção por estúdios e CAGR de 23,2%. Número de relatório de mercado que não abri; não usado em lugar nenhum do documento, e registrado aqui apenas para constar que foi visto e recusado.

### 12.5 Nota de procedência desta rodada

Esta é a **segunda tentativa** da rodada. A primeira (11/09/2026, 15:10) produziu as seções 1 a 4 e foi interrompida por limite de sessão antes da roda. Esta tentativa **reabriu e reverificou, uma a uma, as fontes citadas naquelas seções** em vez de herdá-las — e foi nessa reverificação que nasceram os itens 1, 2, 3, 4, 5, 6 e 7 da seção 8. Sete das oito autocorreções deste documento vêm de conferir trabalho que já parecia pronto, o que é, ele próprio, um resultado sobre como esta skill deveria rodar.

### 12.6 Saída do verificador

Comando:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano/07-npcs-generativos-e-mundos-vivos/tendencia-npcs-generativos-e-mundos-vivos.md --links
```

Saída:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 14 (frontmatter diz 14)
efeitos ordem 2: 22 (frontmatter diz 22)
efeitos ordem 3: 14 (frontmatter diz 14)
prazo > horizonte (2031) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 3 [('e1.2.1', 2032), ('e10.1.1', 2032), ('e12.2.1', 2032)]
confiança ordem 1: alta 4 · media 10 · baixa 0
confiança ordem 2: alta 2 · media 11 · baixa 9
confiança ordem 3: alta 0 · media 3 · baixa 11
links da seção 11: 20/20 respondem (frontmatter diz fontes: 20)
RESULTADO: ok
```

Lido linha a linha: o frontmatter está completo; os doze títulos são os literais; as contagens
declaradas batem com as contadas (3 raízes, 14 / 22 / 14 efeitos); nenhum efeito de 1ª ou 2ª ordem
passa do horizonte; os **três** de 3ª ordem que passam são os declarados em 5.1 e em 7.8
(`e1.2.1`, `e10.1.1`, `e12.2.1`, todos 2032); a confiança cai monotonicamente com a ordem
(alta 4 → 2 → 0) e nenhum efeito de 3ª ordem tem confiança alta; e os **20 links da seção 11
respondem**, batendo com `fontes: 20`.

Dois números desta saída merecem ser lidos com desconfiança, e não com alívio:

- **`confiança ordem 1: baixa 0`.** O verificador aceita, porque só exige que a confiança caia
  com a ordem. Mas zero efeitos de primeira ordem com confiança baixa é o sinal, discutido em 7.7,
  de que talvez eu não tenha posto na primeira ordem nada que pudesse estar errado.
- **`links da seção 11: 20/20`.** Isto mede que as páginas respondem, **não** que sustentam o que
  eu disse que sustentam. A fonte que me obrigou a mais correções nesta rodada (a análise do
  *Teammates*) respondia 200 na primeira tentativa também — e eu tinha lido errado o que estava nela.
  Ver 12.5.
