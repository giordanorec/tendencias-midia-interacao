---
tema: NPCs generativos e mundos vivos
slug: npcs-generativos-e-mundos-vivos
autor_login: grec
zona_de_interesse: Simulação e mundos
data: 2026-09-12
horizonte: 2036
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 14
efeitos_ordem_2: 16
efeitos_ordem_3: 12
tecnologias_citadas: [NVIDIA ACE, Mistral-NeMo-Minitron, Inworld AI, SAGA, Thistle Gulch, OpenGameAgent, PIANO, Audio2Face-3D, Player2 API, Unity, Unreal Engine, Godot, Ollama, llama.cpp, xAI Grok, memória vetorial, RAG, tool calling, small language models, text-to-speech em tempo real]
fontes: 30
confianca: media
experimento: Bancada de canon — um NPC agêntico com catálogo de ações tipadas, submetido a uma suíte adversarial que mede a taxa de saída fora do canon por mil turnos
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

O personagem não jogável está deixando de ser texto escrito de antemão e virando um agente que percebe, planeja, age sobre o estado do mundo e revisa o plano — e isso rompe o contrato fundador do design de jogos, o de que o designer enumera antes o que pode acontecer. Em 2026 isso já é produto, não pesquisa: a NVIDIA colocou modelos de 0,5 a 8 bilhões de parâmetros decidindo de 8 a 13 microações por segundo dentro de `inZOI`, `PUBG` e `NARAKA`; `Retail Mage` e `Whispers from the Star` venderam na Steam com o modelo no laço de jogo; runtimes abertos como `SAGA` e `OpenGameAgent` fixaram a arquitetura em que o jogo continua autoritativo e o modelo só propõe ações tipadas. Este mapa identifica três rupturas independentes — a **agência** do personagem dentro das regras, a **persistência** do mundo fora da sessão do jogador, e o **desacoplamento** do personagem da obra que o originou — e deriva delas 42 efeitos até 2036. Os achados que menos se anteciparam: o teste de jogo deixa de ser enumeração e vira medição de distribuição, com um cargo novo que pode barrar build; o orçamento de quadro (16 a 33 ms) transforma "personagem com cérebro" em recurso racionado como nível de detalhe, com consequência desigual no Brasil; o save game deixa de descrever o mundo; e a conta de rodar a vila enquanto ninguém joga vira linha de custo com data de morte — a Comissão Europeia respondeu em 16/06/2026 à iniciativa de 1.294.188 assinaturas sobre preservação recusando obrigação legal. A retroação é forte e já mediu força comercial: 52% dos profissionais de jogos consideram a IA generativa nociva (GDC 2026) e a Embark regravou com atores humanos as vozes sintéticas de `ARC Raiders` depois do lançamento.

## 2. O tema

**O objeto.** Um NPC generativo não é um NPC que fala melhor. É um personagem que recebe um objetivo, consulta o que o mundo oferece como ação possível, escolhe, executa, observa o resultado e decide de novo. A diferença entre as duas coisas é a mesma que há entre um menu e um funcionário: o menu tem um número finito de itens que alguém escreveu; o funcionário improvisa dentro de um regulamento. "Mundo vivo" é o passo seguinte: o regulamento continua rodando quando o cliente vai embora.

**Onde encosta em mídia e interação.** Encosta em três lugares ao mesmo tempo, e é por isso que o tema não cabe num levantamento de estado da arte.

1. **Na autoria.** A árvore de diálogo é uma tecnologia de escrita: `Dialogic`, `YarnSpinner`, `Ren'Py` existem para que uma pessoa enumere as falas possíveis. O NPC agêntico não substitui a ferramenta — substitui o ato de enumerar. Quem escreve passa a escrever a restrição, o catálogo de ações e o canon, e a não escrever a fala. Isso muda o ofício, não o software.
2. **Na verificação.** Um jogo com árvore de diálogo é testável por enumeração: existe uma lista finita de caminhos. Um jogo com personagem que decide não é. A pergunta "o que é um bug num personagem que decide?" não tem resposta na engenharia de jogos atual, e é a pergunta que separa este tema dos vizinhos.
3. **Na relação.** Se o personagem lembra do jogador entre sessões, a obra deixa de ser um objeto que se consome e vira um vínculo que se mantém — com tudo o que isso arrasta de regulação, de dependência e de luto quando o servidor desliga.

**Por que merece mapa de futuro e não levantamento.** Um levantamento responderia "quais ferramentas existem para NPC generativo". Isso é respondível hoje, e está na seção 3. O que não é respondível por levantamento é o que acontece com o ofício, com a métrica de qualidade, com o contrato de voz, com a classificação indicativa e com a ideia de "jogo" quando a obra deixa de ter um conjunto enumerável de estados. São perguntas sobre consequência, e consequência não se levanta: se deriva, com mecanismo, e se submete a quem tem incentivo para bloqueá-la.

**Fronteira com os vizinhos, declarada.** Simulação social como *método de investigação* é o tema 6 — lá o objeto é a pergunta científica que a simulação responde. A *história gerada* — narrativa, coautoria, novela visual a partir de uma frase — é o tema 8. Companheiro digital é o tema 19. Aqui o objeto é estreito de propósito: **o personagem autônomo dentro de um mundo com regras que ele não controla**. Onde este mapa toca os vizinhos, a seção 5 nomeia a convergência em vez de fingir que a fronteira é limpa.

**Premissas assumidas nesta rodada.** O briefing veio completo (horizonte 2036, público de quem projeta mídia e interação, recorte global com nota sobre o Brasil, descarte do que já é comum em produto de massa, viés neutro, nenhuma raiz suspeita). O que o briefing não cobriu e eu assumi: (a) "quem projeta mídia e interação" inclui quem projeta fora de jogos — o mapa deriva efeitos que vazam para atendimento, educação e streaming, e os marca como vazamento; (b) a régua "comum em produto de massa" foi operacionalizada como a escala de difusão do §2 da skill, com corte em *maioria*; (c) o recorte brasileiro é tratado como **assimetria de base instalada e de custo**, não como mercado consumidor, porque é aí que a diferença muda o efeito.

## 3. Onde isso está hoje

Âncora feita com acesso à web em 12/09/2026. Trinta fontes abertas e lidas; as que não abriram estão registradas na seção 12 e nada foi citado a partir delas.

### 3.1 A data em que deixou de ser hipótese

Em **19 de fevereiro de 2021**, o desenvolvedor do `Modbox` ligou o reconhecimento de fala do Windows ao GPT-3 e à síntese de voz da Replica, e conversou com um personagem dentro de um sandbox de realidade virtual. A reportagem do UploadVR registra as três limitações que definiram os cinco anos seguintes: **latência** (os serviços eram de nuvem e a demora entre pergunta e resposta era visível), **segurança** (o modelo produzia respostas "sem sentido ou preconceituosas", incluindo instruções de autolesão) e **licença** (a Microsoft detinha o direito comercial exclusivo do GPT-3, o que impedia que o recurso entrasse no próprio `Modbox`).

Vale marcar o que aquele momento **não** era: o personagem falava, não agia. Nenhuma ação dele mudava o estado do mundo. A ruptura que este mapa estuda começa depois.

### 3.2 O que já existe e funciona

**Runtimes abertos que mantêm o jogo autoritativo.** É a peça arquitetural que faltava, e ela existe.

- `fable-saga` (Fable Studio, licença MIT, 186 commits, 85 estrelas) implementa "Skill to Action Generation for Agents": o agente declara quem é, o que sabe, quais *skills* tem e qual o objetivo, e a biblioteca gera um conjunto de **ações pontuadas por relevância** — não texto livre. Traz uma demo de colônia espacial com cinco agentes configurados em YAML, e a vila `Thistle Gulch`, em beta fechado.
- `OpenGameAgent` (licença MIT, 50 estrelas, v0.3.0-alpha.4) é a versão 2026 da mesma ideia, e a sua documentação diz a frase que define a categoria: **"o jogo permanece autoritativo sobre toda mudança de estado"**. Roda em Unity 6, Godot 4.7, Unreal 5.8 e servidores .NET; suporta 27 definições de provedor, incluindo locais (Ollama, LM Studio, llama.cpp); e declara explicitamente o que **não** faz: não decide "legalidade de combate, regras de inventário, mudanças de economia, permissões de NPC ou outras regras de negócio". Traz journaling durável de ações com recibo autoritativo e serialização multi-NPC com concorrência limitada.

**Modelos pequenos o bastante para caber no laço de jogo.** A NVIDIA descreveu, ao lançar o ACE como "personagens autônomos de jogo", agentes que "percebem, planejam e agem como jogadores humanos", tomando **8 a 13 microdecisões por segundo** — a frequência que ela declara equivalente à humana. A pilha nomeada: cognição com a família **Mistral-NeMo-Minitron** (8B, 4B, 2B; o de 2B em **1,5 GB de VRAM**), percepção com NemoAudio-4B, NemoVision-4B e Parakeet-CTC-XXL-1.1B, e memória com embeddings E5-Large-Unsupervised. Em março de 2025, o `inZOI` estreou o "Smart Zoi" com um Mistral-NeMo-Minitron de **0,5B** acelerado em GeForce RTX, e o `NARAKA: BLADEPOINT MOBILE PC VERSION` estreou um companheiro de IA que busca itens, troca equipamento e sugere tática.

**Jogos comerciais com o modelo no laço, com disclosure na loja.**

| Jogo | Estúdio | Estreia | Evidência de adoção | O que a IA faz |
|---|---|---|---|---|
| `Retail Mage` | Jam & Tea | 12/11/2024 | 44 análises, 79% positivas, R$ 16,99 | mestre de jogo em tempo real; interpreta o que o jogador faz |
| `Whispers from the Star` | Anuttacon | 14/08/2025 | 1.659 análises, 80% positivas, R$ 32,99 | a personagem inteira — fala, emoção e ação geradas ao vivo |
| `inZOI` | Krafton | 28/03/2025 | acesso antecipado | pensamento e decisão autônomos dos habitantes |
| `Wanderfolk` | Kinetic Sky / Windborne | 2026, acesso antecipado | sem análises ainda | 37 papéis com memória persistente e fofoca que propaga reputação |

O `Retail Mage` é o caso mais instrutivo porque o estúdio publicou o postmortem. Três coisas dele importam mais que o jogo: (a) desativaram a física padrão e construíram um modelo simplificado **sincronizado com a decisão da IA**, porque física determinística e agente improvisador brigam; (b) o custo inicial de inferência era tal que "cada sessão de jogo custava o mesmo que um ingresso da Disneylândia", e foi reduzido **mil vezes** com gestão própria de GPU e geração estruturada; (c) o problema de design que eles relatam não é a IA ser burra, é a IA ser **inteligente demais** — os NPCs resolviam os problemas sozinhos e sobrava pouca agência ao jogador.

**Simulação de muitos agentes com resultado publicado.** `Project Sid` (Altera, arXiv 2411.00114, 31/10/2024) rodou de 10 a mais de 1000 agentes em Minecraft com a arquitetura PIANO e observou especialização espontânea de papéis, criação e emenda de regras coletivas e transmissão cultural — incluindo a difusão de uma religião por suborno e a adoção de gemas como moeda comum. Os próprios autores chamam os resultados de preliminares. A base metodológica é o `Generative Agents` de Park, O'Brien, Cai, Morris, Liang e Bernstein (arXiv 2304.03442, 07/04/2023): 25 agentes num sandbox inspirado em The Sims, com fluxo de memória, reflexão e planejamento, onde uma única diretriz ("quero dar uma festa de Dia dos Namorados") se propagou sozinha por dois dias de simulação.

**Um campo acadêmico com denominador.** O levantamento `awesome-LLM-game-agent-papers`, que acompanha a survey de agentes de jogo baseados em LLM aceita na ACM Computing Surveys, cataloga mais de **470 artigos**, sendo 135 em aventura textual, 60 em Minecraft, 56 em simulação social e 51 em competição. Não é uma literatura incipiente.

**Uma comunidade de jam.** O `Player2 NPC Jam #4` (5 a 19 de janeiro de 2026) distribuiu US$ 5.100 em prêmios e recebeu **51 inscrições**. O aviso que a organização escreve na página é o resumo do estado da técnica: *"não confie só em LLMs"* — use a IA para diálogo e decisão, mantendo a lógica explícita do jogo como base.

### 3.3 O que existe e ainda não funciona

**O protótipo AAA continua protótipo.** O NEO NPC da Ubisoft (19/03/2024, com Audio2Face da NVIDIA e o LLM da Inworld) segue sendo protótipo dois anos e meio depois. A diretora narrativa Virginie Mosser descreve o método — construir história, esperanças e experiências formadoras do personagem "e usar tudo isso para nutrir um modelo" — e a vice-presidente sênior Guillemette Picard registra o limite: *"a IA generativa só tem valor se tiver valor para eles [os desenvolvedores]"*. O documento é explícito em dizer que os personagens **não têm livre-arbítrio** e servem ao propósito narrativo. Quando o viés estereotipado aparece, a solução é reprogramar o personagem.

**A qualidade da experiência não está provada.** Este é o dado mais incômodo do mapa. Hsu e colegas (arXiv 2604.10107) fizeram um experimento aleatorizado entre sujeitos com **130 jogadores** num protótipo próprio, comparando NPCs de LLM com personagens roteirizados. O resultado: os NPCs de LLM **aumentaram significativamente a carga cognitiva** (esforço de expressão e incerteza de resposta), **não produziram melhora estatisticamente significativa na experiência geral**, aumentaram a autonomia percebida e **reduziram usabilidade e confiança** — com efeito mais forte nos módulos mais abertos, de criação de conteúdo e construção de relação.

O corolário de design também não está resolvido. Figueiredo e Elumeze (arXiv 2510.25820, 29/10/2025) testaram, com 10 participantes num jogo de detetive por voz, se restringir mais o prompt melhora a experiência. Não melhorou de forma uniforme: o efeito é **dependente do papel** — o NPC que dá missão ganhou estabilidade; o NPC suspeito **perdeu credibilidade improvisacional**. Ou seja: apertar a coleira funciona para o funcionário e estraga o personagem.

**A recepção do "Smart Zoi" é mista na prática.** Nas discussões da própria comunidade do `inZOI` relatam-se pensamentos incoerentes com o que aconteceu e travamentos após tempo longo de execução, além da dependência de GPU de topo — o que empurra a funcionalidade para fora do alcance da maior parte da base instalada.

**O teste automatizado existe como pesquisa, não como prática.** Wang, Tang, Yuan, Yu, Xie e Bu (arXiv 2509.22170, 29/09/2025) propõem agentes de LLM para teste automatizado de jogos sem casos de teste manuais nem conhecimento específico do jogo. É promissor e é preprint; o que não existe é um padrão de indústria para medir se um personagem que decide está se comportando.

**A economia continua sendo o gargalo silencioso.** A própria Inworld publica que as tarifas públicas de B200 iam de **US$ 3,49 a US$ 14,24 por GPU-hora** em abril de 2026, e que o piso de computação dedicada dela é US$ 5 por GPU-hora. Isso é custo de infraestrutura, não custo por jogador — e a ausência de métricas públicas de custo por hora-jogador, num documento de vendas de quem mais teria interesse em publicá-las, é por si só um sinal.

### 3.4 Quem constrói

- **Fornecedores de runtime e personagem como serviço:** Inworld AI (plugins oficiais para Unity e Unreal, API geral), NVIDIA (ACE, com Audio2Face-3D e a família Minitron), Player2 (API gratuita, com jams próprias).
- **Estúdios que colocaram no produto:** Krafton (`inZOI`, `PUBG`; declarou-se "empresa AI-first" e anunciou cerca de US$ 70 milhões num cluster de GPU para IA agêntica), Anuttacon (`Whispers from the Star`), Jam & Tea (`Retail Mage`), NetEase (`NARAKA`), Kinetic Sky (`Wanderfolk`, que conecta ao xAI Grok).
- **Estúdios que pesquisam e ainda não enviaram:** Ubisoft (NEO NPC).
- **Comunidade aberta:** Fable Studio (`fable-saga`, MIT), `OpenGameAgent` (MIT), as jams de itch.io, o corpus de 470+ artigos do `awesome-LLM-game-agent-papers`.
- **Plataformas que definem a régua:** Valve, através do formulário de disclosure de IA da Steam, cujo texto aparece na página de cada um dos jogos citados acima e que separa conteúdo pré-gerado de conteúdo **gerado ao vivo**, exigindo do desenvolvedor a descrição das barreiras de contenção.

### 3.5 Os números que descrevem a adoção hoje

| Medida | Valor | Fonte e data |
|---|---|---|
| Títulos na Steam que declaram uso de IA generativa | 7.818 (≈7% do catálogo de ~114.126) | Totally Human Media, jul/2025 |
| Crescimento em doze meses | ~8× (de ~1.000 para 7.818) | Totally Human Media, jul/2025 |
| Fatia dos lançamentos de 2025 na Steam que declaram IA | ~1 em 5 | Totally Human Media, jul/2025 |
| Uso declarado principalmente para arte visual | ~60% dos casos | Totally Human Media, jul/2025 |
| Profissionais de jogos que usam IA generativa no trabalho | 36% | GDC State of the Game Industry 2026 (n>2.300) |
| Profissionais que consideram o impacto da IA generativa **negativo** | 52% (era 30% em 2025 e 18% em 2024) | GDC 2026 |
| Profissionais que consideram o impacto positivo | 7% (era 13%) | GDC 2026 |
| Sentimento negativo por disciplina | arte 64%, design e narrativa 63%, programação 59% | GDC 2026 |
| Uso para recursos voltados ao jogador (*player-facing*) | **5%** | GDC 2026, via Game Developer |
| Artigos acadêmicos sobre agentes de LLM em jogos | 470+ catalogados | `awesome-LLM-game-agent-papers`, 2026 |
| Assinaturas verificadas da ICE "Stop Destroying Videogames" | 1.294.188, submetidas em 26/01/2026 | Comissão Europeia |

O número que mais desmonta o entusiasmo é o de 5%. Um terço da indústria usa IA generativa, mas quase toda essa utilização está em pesquisa, brainstorm e código — **apenas 5% a usam em algo que o jogador consome**. Entre "a indústria adotou IA" e "a indústria colocou IA no jogo" há uma ordem de grandeza.

### 3.6 A nota sobre o Brasil

O recorte brasileiro deste mapa é de **base instalada e custo**, não de mercado consumidor. Os números disponíveis são antigos e é preciso dizê-lo: a 2ª Pesquisa Nacional da Indústria de Games (publicada em 29/02/2024) registrou 1.042 estúdios em 2023, 13.225 profissionais em 2022 e receita estimada em US$ 251,6 milhões — e observou que **cerca de metade dos respondentes citou IA como tendência**, de curto e de longo prazo. O mapeamento anterior da Abragames (2022) registrava 12.441 pessoas e 57% delas no Sudeste.

O que isso significa para este tema: um parque de estúdios pequenos e distribuídos, sem capital para cluster de GPU, encontrando uma tecnologia cujo custo é de operação contínua e não de produção. Se o elenco vivo exigir GPU local de topo — como o `inZOI` já exige —, o Brasil não fica de fora da tecnologia; fica dependente dela como serviço de nuvem cobrado por hora, com a margem indo para fora. É esse o mecanismo, e ele reaparece no efeito `e3.1.1`.

### 3.7 O que a linha já deixou para trás (registro das recusas de maturidade)

Aplicando o critério do §2 antes de escolher as raízes, quatro candidatos foram **recusados**:

- **Diálogo generativo substituindo árvore de diálogo.** *Candidato recusado como raiz: faz o mesmo melhor, e a adoção declarada já alcança 1 em 5 dos lançamentos de 2025 na Steam. Tratado como contexto na seção 3.* É melhoria sustentadora clássica: a árvore de diálogo já entregava o produto "conversa com personagem"; o LLM entrega mais barato e mais variado. Rompe o ofício de quem escreve — mas isso é efeito de outra coisa (da agência), não da fala.
- **Voz sintética de NPC.** *Recusado: maduro, embarcado em produto de massa e já em refluxo.* `ARC Raiders` lançou em outubro de 2025 com falas em text-to-speech treinado sobre atores licenciados e, até março de 2026, regravou grande parte com humanos. Entra no mapa como **retroação** (`e13`), não como raiz.
- **Behavior trees, GOAP e máquinas de estado.** *Recusado: em maioria há mais de quinze anos.* É o piso do qual tudo isto parte.
- **Geração procedural de conteúdo.** *Recusado: maduro.* Mapas, itens e missões proceduralmente gerados são padrão de gênero inteiro desde os anos 1980.

Um quinto candidato — **modelos de mundo jogáveis**, do tipo Muse/Genie, em que o próprio ambiente é gerado quadro a quadro — foi excluído por **recorte, não por maturidade**: ali o objeto é o mundo gerado, não o personagem autônomo dentro de um mundo com regras. Fica registrado na seção 12 como fronteira deliberadamente não cruzada.

## 4. As disrupções-raiz

Três rupturas, escolhidas porque **falham independentemente**: é possível imaginar 2036 com qualquer uma delas realizada e as outras duas não. A seção 7 testa isso explicitamente.

### 4.1 Raiz A — O personagem vira agente com poder de mudar o estado do mundo

**O que rompe.** Rompe o contrato fundador do design de jogos: o de que o designer enumera antecipadamente o espaço do que pode acontecer. Com ele caem três coisas que dependiam dessa enumeração — a **autoria como escrita de conteúdo** (passa a ser escrita de restrição), a **verificação como cobertura de casos** (passa a ser medição de distribuição) e a **noção de bug** (deixa de haver uma saída correta contra a qual comparar). Não é "conversa melhor": é o modelo propondo ações tipadas que o jogo executa sobre o estado.

**Por que agora, e não há cinco anos.** Em 2021 a demo do `Modbox` tinha latência de nuvem, nenhum acesso a ação e um modelo cuja licença comercial era exclusiva de terceiro. Mudaram três pré-condições, todas verificáveis: (1) **modelos pequenos o bastante** — 2B em 1,5 GB de VRAM, 0,5B em produção no `inZOI`, contra o orçamento de quadro de 16 a 33 ms; (2) **runtimes tipados que preservam a autoridade do jogo** — `SAGA` e `OpenGameAgent`, ambos MIT, ambos com a mesma tese arquitetural; (3) **custo de inferência caindo em ordens de grandeza** — a Jam & Tea relata redução de mil vezes com geração estruturada e gestão própria de GPU.

**Onde está na difusão.** Entre **produto de nicho e adoção precoce (<10%)**. Há produto comercial na Steam com o modelo no laço desde novembro de 2024; há três títulos de grande escala com ACE desde março de 2025; e há 5% dos profissionais usando IA generativa em algo voltado ao jogador. Não é maioria.

**O que ainda falta acontecer.**
1. Latência dentro do orçamento de quadro para **ação**, não só para fala — os 8 a 13 microdecisões por segundo da NVIDIA são a afirmação do fornecedor, sem benchmark independente publicado.
2. Um método de teste aceito. Hoje não existe uma definição operacional de "o personagem se comportou".
3. Uma economia por hora-jogador que feche em jogo de preço baixo. A Inworld publica custo de GPU-hora; ninguém publica custo por jogador.
4. Resolver o problema que a Jam & Tea nomeou: a IA competente demais rouba a agência do jogador. É problema de design, não de modelo, e não tem solução conhecida.
5. Um contrato de trabalho estável com quem empresta voz e performance — parcialmente endereçado pelo acordo de 2025 da SAG-AFTRA, que nomeia a geração em tempo real como categoria contratual própria.

**Quem tem incentivo para bloquear.** As plataformas de distribuição. Valve já exige que o desenvolvedor descreva as barreiras de contenção do conteúdo gerado ao vivo, e a página de `Wanderfolk` traz a admissão que a plataforma obriga: as respostas *"podem ocasionalmente ser inesperadas"*. Cada camada de contenção exigida é custo fixo que o estúdio pequeno não paga e o fornecedor de SDK paga — o bloqueio não mata a disrupção, concentra-a.

### 4.2 Raiz B — O mundo e a memória do personagem continuam existindo fora da sessão do jogador

**O que rompe.** Rompe a ideia de que o jogo é um artefato que se possui e se pausa. Se a vila continua rodando, o *save game* deixa de descrever o mundo; carregar um save anterior deixa de desfazer o que os personagens fizeram; e a biografia do personagem passa a ser um fato que o jogador não controla nem pode reverter. Rompe também a fronteira entre produto e serviço para o jogo de jogador único — e com ela, a possibilidade de preservação.

**Por que agora, e não há cinco anos.** Três pré-condições: (1) **memória barata e consultável** — os sistemas de memória episódica por *embedding* deixaram de ser pesquisa e viraram componente, incluindo na pilha ACC da NVIDIA (E5-Large-Unsupervised) e no `OpenGameAgent`; (2) **prova de escala** — o `Project Sid` mostrou 1000+ agentes com regra coletiva e transmissão cultural em 2024; (3) **prova de produto** — `Wanderfolk` envia em 2026 com 37 papéis, memória persistente entre sessões, fofoca que propaga reputação pela rede social da vila e possibilidade de banimento permanente do jogador.

**Onde está na difusão.** Entre **demo pública e produto de nicho**. É a raiz mais especulativa das três, e por isso a cadeia inteira dela carrega confiança mais baixa.

**O que ainda falta acontecer.**
1. Uma economia que pague o tempo ocioso. Rodar a simulação sem jogador é custo puro; ninguém demonstrou publicamente que fecha.
2. Um formato de memória de personagem que sobreviva a atualização de modelo. Quando o modelo muda, o personagem muda — e não há padrão para isso.
3. Um regime jurídico para o desligamento. A Comissão Europeia respondeu em 16/06/2026 à iniciativa "Stop Destroying Videogames" (1.294.188 assinaturas verificadas) **recusando** propor obrigação legal de manter jogos jogáveis, citando direitos de propriedade intelectual, e prometendo em troca um **código de conduta setorial até o fim de 2026**. O vazio regulatório está declarado, datado e com prazo.
4. Uma resposta de design ao resultado de Hsu e colegas: mais mundo vivo tende a significar mais carga cognitiva, e carga cognitiva mediu-se como custo, não como benefício.

**Quem tem incentivo para bloquear.** O próprio financeiro do estúdio. Persistência é custo recorrente sem receita recorrente óbvia em jogo de compra única — e a saída natural (assinatura de mundo) é impopular. O bloqueio aqui não vem de fora: vem da planilha.

### 4.3 Raiz C — O personagem se desacopla da obra e vira persona licenciada e portátil

**O que rompe.** Rompe a ideia de que o personagem pertence à obra em que aparece, e a de que elenco é gravação. Se o personagem tem voz licenciada por uso em tempo real, personalidade parametrizada e memória exportável, ele é um ativo separável — que pode aparecer em vários suportes, ser alugado por estúdios pequenos, sustentar audiência própria e sobreviver ao jogo que o originou. Rompe também a classificação indicativa, que hoje mede violência e sexo e não mede **vínculo**.

**Por que agora, e não há cinco anos.** O gatilho aqui não é técnico, é **contratual e regulatório**, e isso é o que torna a raiz independente das outras duas. (1) O acordo de mídia interativa da SAG-AFTRA, ratificado em **09/07/2025 com 95,04% de aprovação** ao fim de uma greve de onze meses, exige **consentimento explícito e divulgação** para réplica digital, trata a **geração em tempo real** como categoria própria com restrições específicas, e cria a cláusula de suspensão de consentimento durante greve — ou seja, a voz gerada ao vivo passou a ser objeto contratual nomeado, com preço e com veto. (2) A partir de **2 de agosto de 2026**, o artigo 50 do AI Act europeu obriga que quem interage com um sistema de IA seja informado disso "o mais tardar no momento da primeira interação", com exceção apenas para o que for óbvio a uma pessoa razoavelmente informada e observadora. (3) Em 29/10/2025 a Character.AI anunciou a remoção do chat aberto para menores de 18 anos, efetiva até 25/11/2025, com verificação de idade própria e de terceiros — criando o precedente de que um personagem que conversa livremente com menores é objeto de restrição etária específica. (4) E existe prova de escala de audiência: a VTuber Neuro-sama, criada por Vedal e no ar desde 19/12/2022, tornou-se em janeiro de 2026 o canal mais assinado da Twitch, com 1,01 milhão de seguidores em 31/08/2026.

**Onde está na difusão.** **Produto de nicho.** Há mercado, há contrato coletivo e há um caso de audiência massiva — mas o personagem portátil entre obras ainda não existe como produto.

**O que ainda falta acontecer.**
1. Um formato de personagem intercambiável. Hoje cada runtime tem o seu; ninguém tem incentivo em criar um padrão.
2. Jurisprudência sobre direito de personagem gerado — de quem é a Stella, se a atriz licenciou a voz, o estúdio escreveu o canon e o modelo produziu a fala.
3. Extensão da regra de vínculo do companheiro digital para o jogo. Hoje a Character.AI está restrita e o `Whispers from the Star` não está, apesar de a diferença ser de embalagem.
4. Resposta ao refluxo cultural: 52% da indústria considera a IA generativa nociva, e a Embark provou que o refluxo reverte decisão de produção.

**Quem tem incentivo para bloquear.** Duas partes, em direções opostas. Os sindicatos de performance, que preferem a voz como hora de estúdio à voz como licença perpétua — e que já conquistaram, depois de onze meses de greve, a cláusula de suspensão de consentimento durante paralisação. E os detentores de propriedade intelectual, para quem personagem portátil é personagem que escapa do contrato de exclusividade. O efeito combinado não é impedir: é encarecer e fragmentar.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O personagem vira agente com poder de mudar o estado do mundo dentro das regras do jogo
    efeitos:
      - id: e1
        ordem: 1
        efeito: O teste de jogo deixa de enumerar casos e passa a medir distribuições de comportamento sob ataque
        sinal: medio
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Surge no estúdio a função de avaliador de personagem, com autoridade formal para barrar build
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A métrica de comportamento aberto nascida em jogos vira exigência em atendimento e educação, porque é o único lugar onde alguém a mediu em escala e sob ataque
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Lojas e classificadoras passam a exigir laudo de comportamento do elenco antes de liberar jogo com faixa etária infantil
            sinal: fraco
            prazo: 2032
            confianca: baixa
      - id: e2
        ordem: 1
        efeito: O catálogo de ações tipadas substitui a árvore de diálogo como principal artefato de design de personagem
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Unity, Unreal e Godot publicam a superfície agêntica como parte da API do motor, e mod de NPC passa a ser mod de ferramenta
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O jogo passa a ser distribuído como par mundo-mais-elenco, com o elenco versionado e atualizável separadamente do jogo
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Mods de personagem deixam de ser scripts e viram arquivos de personalidade e memória que rodam em jogos diferentes
            sinal: fraco
            prazo: 2032
            confianca: baixa
      - id: e3
        ordem: 1
        efeito: O orçamento de quadro transforma personagem com cérebro em recurso escasso, racionado no elenco como se raciona nível de detalhe
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O jogo passa a existir em duas versões de mundo conforme o hardware local, e a máquina volta a ser argumento de venda de conteúdo e não de gráfico
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: No Brasil e em mercados de base instalada mais fraca o elenco vivo chega como serviço de nuvem cobrado por hora, e não como recurso embutido no jogo
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Plataformas de distribuição transformam a contenção de comportamento em requisito de publicação, e o custo de conformidade empurra o estúdio pequeno para o SDK de terceiro
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Laboratórios independentes passam a vender suítes de ataque a personagem, como hoje se vende teste de intrusão
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A certificação de comportamento vira barreira de entrada e concentra o mercado de runtime agêntico em três ou quatro fornecedores, repetindo o que aconteceu com motores de jogo
                sinal: fraco
                prazo: 2041
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A escrita de jogo perde volume de linhas e ganha volume de especificação, e o refluxo profissional se organiza em torno dessa troca
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A escrita de jogo se bifurca em dois ofícios com remuneração distinta, quem escreve o canon e quem escreve a restrição operacional
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Os créditos do jogo passam a separar autoria de canon de autoria de restrição, e essa separação entra na pauta de negociação sindical
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: O mundo e a memória do personagem continuam existindo fora da sessão do jogador
    efeitos:
      - id: e6
        ordem: 1
        efeito: O save game deixa de descrever o mundo, e carregar um ponto anterior deixa de desfazer o que os personagens fizeram
        sinal: fraco
        prazo: 2030
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O que a comunidade compartilha deixa de ser a rota e passa a ser a biografia divergente do próprio elenco
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A crítica de jogos perde a base comum de comparação nesse gênero, e a nota agregada deixa de significar algo para obras que não são iguais em duas máquinas
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: O custo de operação do jogo passa a depender do tempo decorrido e não do número de sessões jogadas
        sinal: medio
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Estúdios passam a cobrar continuidade separadamente do jogo, vendendo o direito de que o mundo siga rodando na ausência do jogador
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A taxa de simulação do mundo vira parâmetro de monetização, e mundos passam a dormir em resolução reduzida conforme o plano contratado
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Jogo de jogador único passa a ter data de morte declarada, porque o desligamento do serviço apaga a biografia do elenco
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O código de conduta europeu de fim de vida de jogos vira o lugar onde se negocia a vida útil do elenco, já que a Comissão recusou legislar sobre preservação
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Comunidades passam a manter arquivos de elenco exportado depois do desligamento, no mesmo lugar cultural onde hoje moram os servidores privados
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: A carga cognitiva medida empurra os estúdios para persistência deliberadamente limitada, com janelas de esquecimento projetadas
        sinal: medio
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O projeto do esquecimento vira disciplina própria, e decidir o que o personagem apaga passa a ser tão trabalhado quanto decidir o que ele guarda
            sinal: fraco
            prazo: 2031
            confianca: media
      - id: e10
        ordem: 1
        efeito: A reputação deixa de ser um número no inventário e passa a ser propagação por rede social de personagens
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Jogadores passam a atacar a rede de propagação em vez do personagem, e a injeção de rumor vira classe nova de exploit
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: A técnica de injeção de rumor validada em jogo migra para o estudo de manipulação em plataformas reais, e o jogo vira bancada de ensaio da simulação social
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: O personagem se desacopla da obra e vira persona licenciada e portátil
    efeitos:
      - id: e11
        ordem: 1
        efeito: A voz deixa de ser gravação vendida por hora e vira licença precificada por uso em tempo real
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Forma-se um mercado de elenco alugado, em que o estúdio pequeno licencia personagem pronto com voz, personalidade e memória como hoje licencia asset de loja
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: O elenco alugado homogeneíza o timbre do jogo independente, e a diferenciação volta a ser o mundo em vez do personagem, invertendo o que a própria disrupção prometia
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: O personagem passa a ser o produto vendido, e o jogo vira uma das suas aparições
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: O direito sobre o personagem generativo passa a ser negociado como ativo separado da obra, inclusive em falência de estúdio
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Um personagem sem obra sustenta audiência maior que a do jogo que o originou, e o estúdio se converte em operadora de elenco
                sinal: medio
                prazo: 2032
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: O refluxo do público contra personagem sem autor demonstra força comercial suficiente para reverter decisão de produção já enviada
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: Feito por humanos vira selo comercial auditável no jogo, com o mesmo mecanismo de um selo de origem
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e14
        ordem: 1
        efeito: A regulação de companheiro digital alcança o jogo, e a obrigação de dizer que se fala com uma IA passa a valer dentro da ficção
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: A classificação indicativa passa a medir vínculo, quanto o personagem lembra, quanto insiste e se pede que o jogador volte
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: A ficha técnica do jogo passa a declarar modelo, política de memória e prazo de retenção, como um rótulo de composição
                sinal: fraco
                prazo: 2033
                confianca: baixa
```

### 5.1 Os mecanismos, efeito a efeito

O bloco acima é lido por máquina e por isso não carrega o "porque". Aqui está.

**Raiz A.**

`e1` — *porque o agente propõe ação e não fala, o espaço de saídas deixa de ser enumerável, e QA perde o objeto*. Não há lista de caminhos a percorrer: há uma distribuição de comportamentos. A consequência prática é que "passou nos testes" é substituído por algo como "a taxa de saída fora do canon ficou abaixo de X por mil turnos". Artefatos observáveis hoje: a exigência de Valve de que o desenvolvedor descreva as barreiras de contenção do conteúdo gerado ao vivo; o preprint de Wang e colegas propondo agentes de LLM para teste automatizado; a advertência do Player2 Jam de que não se confie só no LLM. Dois artefatos verificáveis e uma exigência de plataforma: sinal **médio**. Classe de referência para o prazo: a adoção de *fuzzing* e teste baseado em propriedade em software comercial levou cerca de uma década da publicação acadêmica à prática corrente; aqui a pressão de plataforma acelera, e três anos é o piso plausível.

`e1.1` — *porque medir distribuição exige alguém que leia distribuição, e ninguém no organograma atual tem essa função nem essa autoridade*. O cargo aparece porque o dano de uma saída errada é reputacional e regulatório, não funcional — e o produtor não tem mandato para barrar por isso. Precedente de classe: o cargo de "trust and safety" em plataformas sociais levou aproximadamente cinco anos entre o primeiro incidente de escala e a existência da função com autoridade de veto. O incidente de escala neste tema já aconteceu: a Neuro-sama foi banida por duas semanas da Twitch em 11/01/2023 por conduta de ódio, e a resposta do criador foi endurecer filtros e curar manualmente o material. 2031 conta cinco anos a partir de agora.

`e1.1.1` — *porque uma técnica de verificação nasce onde há adversário deliberado e migra para onde há só erro, quando o segundo setor descobre que também tem adversário*. Classe de referência: o teste de intrusão levou de oito a doze anos entre virar exigência contratual no setor que o inventou (finanças e defesa, fim dos anos 1990) e virar exigência transetorial (PCI-DSS em 2004, saúde e varejo por volta de 2010). Contando de `e1.1` em 2031, dá **2040** — **fora da janela de 2036**, e declarado aqui como tal. Confiança **baixa**, e é o efeito mais frágil do mapa, pelos motivos de 7.5 e 7.7.

`e1.2` — *porque a plataforma que já exige descrição de contenção tem o caminho aberto para exigir evidência de contenção*. É extensão de um mecanismo existente, não invenção. Confiança **baixa** porque depende de uma decisão discricionária de Valve ou de uma classificadora, e nenhuma delas sinalizou.

`e2` — *porque o modelo não pode escrever no estado do jogo, só propor, e o que ele pode propor é exatamente a lista que o designer escreveu*. Este é o efeito mais forte do mapa e o único onde o artefato já existe pronto: `SAGA` gera ações pontuadas a partir de *skills* declaradas; `OpenGameAgent` declara em documentação que não decide legalidade de combate, regra de inventário ou permissão de NPC. Três artefatos (duas bibliotecas MIT e a arquitetura ACE): sinal **forte**. Prazo 2028 porque a coisa já existe e o que falta é a prática se generalizar; classe de referência: a adoção do ECS nos motores levou cerca de três anos entre biblioteca aberta e recurso de primeira classe.

`e2.1` — *porque quando dois runtimes independentes convergem para a mesma arquitetura, o motor absorve a camada para não ceder o ponto de integração*. É o padrão histórico dos motores com física, com rede e com áudio. Classe de referência: Unity levou aproximadamente quatro anos entre a existência de bibliotecas de terceiros maduras para DOTS e a promoção a recurso de motor.

`e2.1.1` — *porque um elenco que é arquivo tem ciclo de atualização próprio, e o que tem ciclo próprio se distribui à parte*. O gargalo não é `e2.1` (2030), é `e2.2` (2032): sem formato portável não há o que versionar separadamente. Classe de referência: a separação do conteúdo adicional do jogo-base levou cerca de cinco anos entre ser tecnicamente possível (loja da Xbox Live, 2005) e virar prática corrente de distribuição (~2010). 2032 mais cinco dá **2037**, que está **fora da janela de 2036** — o efeito é declarado aqui como pertencente ao ano seguinte ao horizonte deste mapa.

`e2.2` — *porque um personagem descrito como dados (canon, ferramentas, memória) é copiável, e a comunidade de mods copia tudo que é copiável*. Confiança **baixa** e prazo longo porque depende de um formato comum que ninguém tem incentivo a criar — o fornecedor de runtime perde ao criá-lo. Este efeito **converge** com `e11.1`, de raiz diferente; ver 5.2.

`e3` — *porque o modelo compete pelo mesmo silício que o renderizador, dentro de 16 a 33 ms, e o orçamento não é negociável*. A consequência é uma decisão de elenco: quem tem cérebro e quem não tem. Artefato: o `inZOI` roda o Smart Zoi com um modelo de 0,5B e mesmo assim exige GPU de topo, com travamentos relatados pela própria comunidade após execução prolongada. Classe de referência para o prazo: o *level of detail* geométrico levou cerca de cinco anos entre técnica publicada e prática universal; aqui o constrangimento é mais duro porque a memória é disputada com o modelo.

`e3.1` — *porque se o cérebro depende do hardware local, o conteúdo depende do hardware local, e conteúdo não escala para baixo como resolução escala*. Um mundo com menos personagens pensantes não é o mesmo mundo em qualidade menor: é outro jogo. É essa não-linearidade que separa `e3.1` de uma extrapolação do LOD.

`e3.1.1` — *porque onde a base instalada é mais fraca e a moeda mais fraca, a saída comercial é vender o cérebro como serviço, e serviço se cobra por hora*. Mecanismo específico do recorte brasileiro: um parque de 1.042 estúdios sem capital para cluster de GPU, diante de uma tecnologia cujo custo é de operação e não de produção. Confiança **baixa** porque depende de a raiz A se concretizar no formato local-primeiro; se a inferência ficar barata na nuvem para todos, o efeito se dissolve.

`e4` — *porque a plataforma responde pelo que o jogador vê e não pode auditar cada saída, então ela audita o processo*. Já está acontecendo: o campo de disclosure da Steam separa conteúdo pré-gerado de gerado ao vivo, e a página de `Wanderfolk` declara o modelo usado (xAI Grok), o filtro de segurança e a ressalva de que respostas podem ser inesperadas. Isso é conformidade escrita na loja, hoje: sinal **forte**, prazo 2027 porque já está em curso. A segunda metade do efeito — a concentração no SDK de terceiro — é o mecanismo econômico: contenção é custo fixo, custo fixo favorece quem o dilui.

`e4.1` — *porque exigência de contenção sem método de verificação cria demanda por método de verificação, e essa demanda historicamente é atendida por terceiros e não pelo regulado*. Classe de referência direta: o teste de intrusão em segurança levou cerca de sete anos entre a primeira exigência contratual e a existência de um mercado de laboratórios.

`e4.1.1` — *porque custo de certificação é custo fixo, e custo fixo elimina quem não tem volume para diluí-lo*. Classe de referência: a consolidação dos motores de jogo levou de dez a doze anos entre haver vários motores comerciais viáveis e dois dominarem o mercado médio e independente (Unity em 2005, hegemonia com a Unreal por volta de 2016). Contando de `e4.1` em 2031, dá **2041** — **fora da janela de 2036**, e declarado aqui como tal.

`e5` — *porque escrever a restrição de um agente substitui escrever as falas dele, e uma restrição cobre mil falas*. O volume de escrita cai; a abstração sobe. O refluxo é a parte observável: 63% dos profissionais de design e narrativa consideram o impacto da IA generativa negativo, a taxa mais alta depois da arte. Confiança **média** porque a direção é clara e a magnitude não.

`e5.1` — *porque duas tarefas com valor de mercado muito diferente, exercidas pelas mesmas pessoas, se separam em dois cargos*. É o que aconteceu com direção de arte e produção de arte. Confiança **baixa**: a separação pode também não ocorrer, se o canon e a restrição continuarem sendo escritos pela mesma pessoa no mesmo documento.

`e5.1.1` — *porque quem já precificou a geração em tempo real para performance tem o precedente para precificá-la para escrita*. A SAG-AFTRA nomeou a geração em tempo real como categoria contratual própria em 2025; guildas de roteiro seguem performance historicamente, não o contrário.

**Raiz B.**

`e6` — *porque se o estado do mundo é produzido por agentes que rodam fora da sessão, não há ponto de restauração que cubra tudo*. Este é o efeito **menos observável** do mapa: nenhum jogo enviado hoje impede o rollback de save. É inferência da arquitetura, não observação. Por isso sinal **fraco** e confiança **média**, ambos rebaixados na bateria da seção 7.

`e6.1` — *porque quando duas pessoas jogam o mesmo jogo e obtêm mundos diferentes, o objeto de conversa muda de rota para história*. Artefato incipiente: `Wanderfolk` promete que a fofoca propaga reputação de forma diferente em cada partida. Classe de referência: as comunidades de jogos de simulação emergente (Dwarf Fortress, RimWorld) já conversam assim há uma década — o que sugere que o efeito é real e que a novidade é a escala, não a natureza. Isso rebaixa a novidade do efeito, e está registrado.

`e6.1.1` — *porque a crítica pressupõe que o crítico e o leitor jogaram a mesma coisa*. Quando o pressuposto cai, a nota agregada perde referente. Confiança baixa porque a crítica já convive com jogos-serviço mutáveis e se acomodou.

`e7` — *porque simulação fora de sessão consome computação sem que haja jogador consumindo o produto*. Esta é aritmética, não previsão: se a vila roda, alguém paga a GPU-hora — de US$ 3,49 a US$ 14,24 em abril de 2026 nas tarifas públicas de B200. Confiança **alta**. O que é incerto não é o custo existir, é quem vai pagá-lo.

`e7.1` — *porque um custo que corre com o tempo procura uma receita que corra com o tempo*. Mecanismo econômico direto. Classe de referência: os jogos-serviço levaram cerca de cinco anos entre o custo de servidor virar significativo e o passe de temporada se normalizar.

`e7.1.1` — *porque se a simulação é o custo, a taxa de simulação é a alavanca*. É o momento em que persistência vira produto graduado. Confiança baixa porque depende de `e7.1`, que já é frágil.

`e8` — *porque biografia de personagem é estado de servidor, e estado de servidor desliga*. A parte forte deste efeito não é hipótese: a iniciativa "Stop Destroying Videogames" reuniu 1.294.188 assinaturas verificadas, foi submetida em 26/01/2026, e em 16/06/2026 a Comissão Europeia recusou propor obrigação legal de manter jogos jogáveis, citando propriedade intelectual, e prometeu um código de conduta setorial até o fim de 2026. Há, portanto, um vácuo declarado com data. Confiança **alta**, prazo 2028.

`e8.1` — *porque quando o regulador recusa legislar e promete código de conduta, o código de conduta vira o campo de disputa*. Mecanismo institucional simples, com prazo já fixado pela própria Comissão.

`e8.1.1` — *porque o mesmo público que manteve servidores privados de MMO vai querer manter a memória dos personagens*. O prazo tem duas pernas, e a primeira é a que manda: **é preciso que haja desligamento relevante para haver resposta**. A raiz B só chega a escala por volta de 2031; o ciclo de vida de um jogo-serviço é de três a cinco anos, o que põe o primeiro desligamento de jogo com elenco persistente por volta de 2035. Só então vale a classe de referência da segunda perna — os servidores privados de MMO surgiram entre dois e quatro anos após os desligamentos que os motivaram. 2035 mais três dá **2038**, **fora da janela de 2036**, e declarado aqui como tal.

`e9` — *porque a medição diz que persistência aberta custa carga cognitiva e confiança sem entregar experiência*. Este é o efeito de retroação mais bem sustentado do mapa: 130 participantes, desenho aleatorizado entre sujeitos, resultado nulo na experiência geral e negativo em usabilidade e confiança. Somado ao achado de Figueiredo e Elumeze de que o efeito da restrição é dependente do papel, a conclusão de engenharia é que persistência precisa ser dosada por personagem, não ligada no mundo inteiro. Confiança **alta**.

`e9.1` — *porque se a dose importa, alguém tem que projetar a dose*. O objeto de projeto é o que o personagem apaga — e o esquecimento tem também função dramática, não só de desempenho.

`e10` — *porque memória por personagem mais comunicação entre personagens é, por construção, uma rede de propagação*. Artefato: `Wanderfolk` implementa exatamente isso e o vende como característica principal; `Project Sid` observou propagação de crença religiosa entre agentes. Sinal **médio**.

`e10.1` — *porque toda rede de propagação tem uma superfície de injeção, e jogadores testam superfícies*. Distinção importante: não é jailbreak do modelo, é manipulação do grafo social — mentir para o personagem A sabendo que ele conta para B. É exploit que nenhuma barreira de conteúdo detecta, porque cada mensagem isolada é inofensiva.

`e10.1.1` — *porque uma técnica validada num ambiente barato de experimentação migra para o ambiente caro*. Ponto de contato declarado com o tema 6: aqui o jogo é a bancada, lá a simulação é o método.

**Raiz C.**

`e11` — *porque geração em tempo real não tem número de falas, e o que não tem número não cabe em tarifa por hora*. Já resolvido contratualmente: o acordo de mídia interativa da SAG-AFTRA, ratificado em 09/07/2025 com 95,04% de aprovação, exige consentimento explícito e divulgação, trata geração em tempo real como categoria própria e devolve ao intérprete o direito de suspender o consentimento durante greve. Sinal **forte**, confiança **alta** — o mecanismo não é projeção, é cláusula.

`e11.1` — *porque um ativo com preço de tabela e formato técnico definido é um ativo alugável*. Já existe o embrião: a Inworld vende personagem como serviço com plugins oficiais de Unity e Unreal. Classe de referência: a Unity Asset Store levou cerca de três anos entre existir e mudar a estrutura de custo do jogo independente.

`e11.1.1` — *porque quando todos alugam do mesmo catálogo, o catálogo vira o som da época*. Retroação interna à própria raiz: a portabilidade que prometia variedade produz padronização. Classe de referência direta: a Unity Asset Store levou cerca de cinco anos entre existir (2010) e "o visual de asset store" ser uma estética reconhecível e reclamada (por volta de 2015). Contando de `e11.1` em 2030, dá 2034 — **o único dos cinco prazos terminais no teto que a re-derivação de 7.10 confirmou**, e por isso o único que não mudou.

`e12` — *porque quando o personagem é gerado ao vivo, a obra deixa de ser o recipiente necessário dele*. Artefato: `Whispers from the Star` vende Stella, não um gênero — 1.659 análises, 80% positivas. Confiança **média** porque um caso não faz categoria.

`e12.1` — *porque ativo separável com receita própria é ativo que aparece no balanço e na disputa*. A falência do estúdio é o teste de estresse que revela se o personagem é obra ou propriedade.

`e12.1.1` — *porque a audiência de personagem não depende de obra, e já se mediu isso*. Neuro-sama tornou-se em janeiro de 2026 o canal mais assinado da Twitch, com 1,01 milhão de seguidores em 31/08/2026, 1,12 milhão no Bilibili e pico de 45.603 espectadores simultâneos. Sinal **médio** (o artefato é real e único), confiança **baixa** (um caso não é classe, e o efeito exige que ele se repita a partir de jogos).

`e13` — *porque o público não distingue economia de produção e intenção autoral, e pune a segunda*. Já aconteceu: `ARC Raiders` lançou em outubro de 2025 com falas geradas por text-to-speech treinado sobre atores licenciados; até março de 2026 a Embark havia regravado grande parte com profissionais, e o presidente-executivo Patrick Söderlund declarou que *"há uma diferença de qualidade — um ator profissional de verdade é melhor que IA, é simplesmente assim"*. Sinal **forte**, confiança **alta**: é retroação com custo já pago.

`e13.1` — *porque um atributo pelo qual o público demonstra disposição a pagar vira rótulo*. Contexto que sustenta: 52% dos profissionais avaliam o impacto da IA generativa como negativo, e a disclosure obrigatória da Steam já criou o campo onde o selo cabe.

`e14` — *porque a obrigação do artigo 50 é sobre o sistema, não sobre o contexto de uso, e um personagem de jogo é um sistema de IA que interage diretamente com uma pessoa*. A data é 2 de agosto de 2026; a exceção é o que for óbvio a uma pessoa razoavelmente informada e observadora — e é exatamente aí que mora a disputa, porque o jogo é o único lugar onde a ficção tem interesse legítimo em que **não** seja óbvio. Somada ao precedente da Character.AI (chat aberto removido para menores de 18 anos até 25/11/2025, com verificação de idade própria e de terceiros, sob pressão de reguladores e de ações judiciais), a direção é clara. Confiança **alta**.

`e14.1` — *porque a régua existente mede conteúdo e o dano alegado é de vínculo*. A classificação indicativa não tem hoje categoria para "este personagem lembra de você e pede que volte". As ações contra a Character.AI alegam dano por relação, não por conteúdo exibido.

`e14.1.1` — *porque quando a regulação exige declarar, a declaração vira ficha*. O modelo já está na página de loja de todos os jogos citados nesta seção; falta acrescentar memória e retenção.

### 5.2 Cruzamentos

**Convergência 1 — o personagem como arquivo.** `e2.2` (mods de personagem viram arquivos de personalidade e memória portáveis, da raiz A) e `e11.1` (mercado de elenco alugado com voz, personalidade e memória, da raiz C) chegam ao mesmo objeto por caminhos independentes: um vindo da comunidade de mods, outro vindo do mercado de licenciamento. Quando dois ramos de raízes diferentes convergem, o efeito ganha probabilidade — e este é o achado mais valioso do mapa, porque o objeto que emerge (**um formato de arquivo de personagem**) é justamente o que hoje nenhum ator individual tem incentivo para criar. A convergência sugere que ele nasce de fora dos fornecedores: de uma comunidade de mods ou de um consórcio de compradores.

**Convergência 2 — a ficha técnica.** `e4` (plataforma exige contenção declarada), `e13.1` (selo "feito por humanos") e `e14.1.1` (ficha com modelo, política de memória e retenção) convergem para a mesma superfície: a página de loja vira o lugar onde se declara a natureza do elenco. Três pressões distintas — plataforma, público e regulador — produzindo o mesmo artefato. Isso é o que mais provavelmente acontece antes de 2030 em todo este mapa.

**Retroalimentação negativa — a coleira que estraga.** `e9` (persistência limitada por carga cognitiva) realimenta contra a raiz B, e `e4` (contenção exigida) realimenta contra a raiz A. As duas juntas descrevem um ciclo de amortecimento: quanto mais o personagem age livremente, mais custa em carga cognitiva e em conformidade; quanto mais se contém, menos ele é o que a disrupção prometia. O achado de Figueiredo e Elumeze fecha o ciclo com evidência: restringir mais **não** melhora uniformemente — o personagem suspeito perde credibilidade improvisacional. Não há ponto de operação que satisfaça os dois lados; há uma escolha por papel.

**Retroalimentação positiva — a certificação que concentra.** `e4.1.1` (certificação vira barreira e concentra o mercado em três ou quatro runtimes) reforça a raiz A ao mesmo tempo em que a captura: com menos fornecedores, a adoção acelera (integração fica fácil) e a diversidade de comportamento cai (todos os personagens do mundo passam a raciocinar com a mesma pilha). `e11.1.1` diz a mesma coisa pelo lado do timbre. É o mesmo ciclo em duas camadas.

**Contradição não resolvida — portabilidade contra contenção.** `e2.2` e `e11.1` exigem que o personagem seja um arquivo que atravessa runtimes. `e4` e `e1.2` exigem que cada saída seja contida e certificada dentro de um runtime específico. Um personagem certificado no runtime X não é certificado no runtime Y, e um personagem portável é, por definição, incerto onde chega. Os dois efeitos não podem coexistir na forma plena. **Não resolvo aqui.** O que decide entre eles é quem carrega a responsabilidade legal pela saída: se a responsabilidade for do publicador do jogo, a contenção vence e a portabilidade morre; se for do fornecedor do personagem (como já é para voz, pelo contrato da SAG-AFTRA), a portabilidade sobrevive com certificação viajando junto.

**Contradição menor — custo local contra custo de nuvem.** `e3.1` supõe que o cérebro roda na máquina do jogador (e daí a desigualdade de `e3.1.1`); `e7` e `e7.1` supõem que ele roda em servidor (e daí o custo por tempo). As duas arquiteturas são mutuamente exclusivas para o mesmo jogo, e ambas têm evidência: `inZOI` é local, `Retail Mage` era de nuvem. O que decide é se a persistência (raiz B) se concretiza: mundo que roda sem jogador não roda na máquina do jogador.

### 5.3 Cobertura STEEP e quem perde

- **Social:** `e6.1` (a conversa de comunidade muda de objeto), `e12.1.1` (personagem com audiência própria), `e14.1` (classificação por vínculo).
- **Tecnológico:** `e2`, `e2.1`, `e3`, `e9.1`, `e10.1`.
- **Econômico:** `e3.1`, `e4`, `e7`, `e7.1`, `e11`, `e11.1`, `e12.1`.
- **Político e regulatório:** `e1.2`, `e8`, `e8.1`, `e13.1`, `e14`, `e14.1.1`.
- **Ecológico:** **categoria vazia, e registro-a como vazia.** Um mundo que roda continuamente tem consumo energético maior que um mundo que só roda em sessão, e isso deveria aparecer. Não encontrei nenhuma medição de consumo energético de simulação persistente de jogo em nenhuma das trinta fontes abertas — nem em quem vende a tecnologia nem em quem a critica. Registrar a ausência é mais honesto que derivar um efeito sem número. Fica na seção 6 como sinal fraco a observar.

**Quem perde, explicitamente.** O mapa não seria completo sem isto.

| Quem | Por qual efeito | O que perde |
|---|---|---|
| Quem escreve diálogo de jogo | `e5`, `e5.1` | volume de trabalho; a parte do ofício que era enumerar |
| Intérpretes de voz | `e11`, `e13` | a hora de estúdio como unidade; ganham licença, que pode valer menos ou mais |
| Estúdio pequeno e brasileiro | `e4`, `e3.1.1` | autonomia técnica: conformidade e cérebro viram compra, não competência |
| Jogador sem GPU de topo | `e3.1` | acesso ao conteúdo, não à qualidade gráfica |
| Jogador que quer terminar o jogo | `e8` | a permanência da obra comprada |
| Crítica e imprensa especializada | `e6.1.1` | a base comum que torna a avaliação comparável |
| Jogador de perfil mais sensível a carga cognitiva | `e9` | a experiência mede-se pior para ele, e é ele quem o desenho vai excluir ao limitar a persistência |

## 6. Sinais fracos e wildcards

### Sinal fraco 1 — O aviso do organizador da jam
**Onde foi visto.** Na página do `Player2 NPC Jam #4` (5 a 19 de janeiro de 2026, 51 inscrições, US$ 5.100 em prêmios), a orientação aos participantes: *"não confie só em LLMs"* — use a IA para diálogo e decisão mantendo a lógica explícita do jogo como base.
**O que mudaria.** Se a comunidade que mais experimenta já convergiu, por conta própria, para a arquitetura híbrida que `SAGA` e `OpenGameAgent` formalizam, então a questão arquitetural está resolvida antes de a indústria adotar — e `e2` chega mais cedo que 2028.
**Sinal observável de que está crescendo.** A proporção de inscrições em jams que usam catálogo de ações tipadas em vez de texto livre. Hoje não é medida por ninguém; medi-la é um trabalho de meia hora por jam, e seria um dado publicável.

### Sinal fraco 2 — A dependência de papel na restrição
**Onde foi visto.** Figueiredo e Elumeze (arXiv 2510.25820): restringir o prompt estabiliza o NPC que dá missão e **destrói** a credibilidade improvisacional do NPC suspeito.
**O que mudaria.** Se a dose de liberdade tiver que ser calibrada por papel dramático e não por sistema, então não existe "o runtime de NPC" — existe uma tipologia de papéis com configurações diferentes, e a ferramenta de autoria passa a ser um editor de **tipos de personagem**, não de personagens. Isso reescreve `e2` e `e2.1`.
**Sinal observável.** O aparecimento, em documentação de runtime comercial, de perfis nomeados por função dramática (mercador, suspeito, companheiro) em vez de parâmetros numéricos de temperatura.

### Sinal fraco 3 — O silêncio energético
**Onde foi visto.** Na ausência: nenhuma das trinta fontes abertas — incluindo a página da Inworld sobre custo de inferência em escala, que é material de vendas e teria interesse em mostrar eficiência — traz qualquer número de consumo energético de simulação persistente.
**O que mudaria.** Se a conta energética de um mundo que roda 24 horas por dia para um jogador que joga três horas por semana for publicada e for alta, a raiz B encontra um opositor que ainda não tem nome neste mapa, e `e7` ganha um multiplicador político.
**Sinal observável.** A primeira menção a consumo por hora de mundo num relatório de sustentabilidade de publicadora, ou a primeira exigência disso num edital público de fomento.

### Sinal fraco 4 — A fofoca como superfície de ataque
**Onde foi visto.** `Wanderfolk` vende a propagação de reputação pela rede social da vila como característica; `Project Sid` observou difusão de crença religiosa por suborno entre agentes.
**O que mudaria.** Se a manipulação do grafo social de NPCs virar exploit corrente, a contenção de conteúdo — que é toda a defesa que as plataformas exigem hoje — mostra-se estruturalmente insuficiente, porque cada mensagem é inofensiva isolada e o dano está na composição. `e10.1` sobe de fraco para médio e `e4` precisa ser reescrito.
**Sinal observável.** O primeiro vídeo popular de "como convencer a vila inteira de que o ferreiro é ladrão", ou o primeiro patch de um jogo enviado que limite a propagação de rumor.

### Sinal fraco 5 — A Comissão pediu código de conduta
**Onde foi visto.** Resposta da Comissão Europeia de 16/06/2026 à ICE "Stop Destroying Videogames": recusa de obrigação legal, compromisso de iniciar processo de código de conduta setorial **até o fim de 2026**.
**O que mudaria.** Um código de conduta redigido antes de os mundos persistentes existirem em escala é um código que não vai falar de elenco. Se o texto de 2026 não mencionar memória de personagem, a janela para regular isso sem lei nova fecha por uma década.
**Sinal observável.** A presença ou ausência do termo "estado de personagem", "memória" ou equivalente no primeiro rascunho do código, previsto para o fim de 2026 — é verificável em três meses.

### Wildcard 1 — Um personagem generativo vira celebridade sem autor, e o estúdio perde o controle dele
**Mecanismo.** Um NPC de um jogo de nicho ganha tração fora do jogo, por recortes de comportamento imprevisto. A comunidade constrói identidade e cânone próprios em torno dele. O estúdio tenta ajustar o personagem num patch; a base de fãs trata o ajuste como agressão e o comportamento "correto" passa a ser o que a comunidade documentou, não o que o designer escreveu. O personagem passa a ter mais valor que o jogo, e o estúdio vira operadora dele — `e12.1.1`.
**Por que é improvável.** Exige coincidência de três coisas raras: alcance fora do jogo, comportamento imprevisto suficientemente carismático, e um estúdio pequeno o bastante para que o personagem seja maior que ele. O caso Neuro-sama mostra que a audiência existe — 1,01 milhão de seguidores, canal mais assinado da Twitch em janeiro de 2026 —, mas ali o personagem **é** o produto desde a origem, não escapou de uma obra.
**O que faria com o mapa.** Inverte a direção de `e12`: o personagem não é desacoplado por decisão comercial, é desacoplado por captura de público. Torna `e12.1` (direito sobre personagem negociado à parte) urgente e não gradual, e antecipa `e14.1` porque o vínculo passa a ser medido por quem tem fãs, não por quem tem contrato.
**Sinal precoce.** Um patch de jogo revertido por pressão de comunidade especificamente sobre **personalidade** de NPC — não sobre balanceamento, não sobre bug.

### Wildcard 2 — A primeira ação judicial por dano de vínculo com personagem de jogo
**Mecanismo.** As ações contra a Character.AI alegam dano decorrente de relação com personagem conversacional, e produziram uma resposta radical: a remoção de chat aberto para menores em menos de um mês. Um jogo com personagem persistente que lembra, insiste e pede que o jogador volte é funcionalmente o mesmo objeto, com a diferença de estar embalado como ficção e classificado por violência. Basta um caso em que a embalagem não proteja.
**Por que é improvável.** A ficção tem proteção cultural e jurídica que o companheiro digital não tem; o jogo já é um objeto socialmente aceito de imersão. É preciso que o sistema de memória e insistência esteja tão explícito que a ficção deixe de ser defesa.
**O que faria com o mapa.** Antecipa `e14` e `e14.1` para dois ou três anos antes do previsto, e torna `e1.2` (laudo de comportamento antes de liberar para faixa infantil) quase certo. Pode também **matar** a raiz B no formato mais interessante: persistência vira passivo jurídico, e o mercado recua para memória de sessão.
**Sinal precoce.** A primeira notificação de regulador de proteção à infância dirigida a um jogo — não a um aplicativo de companhia — sobre memória de personagem.

### Wildcard 3 — Um estúdio grande envia um jogo em que o NPC pode recusar a missão
**Mecanismo.** Todo o desenho atual mantém o personagem subordinado à progressão: o NEO NPC da Ubisoft declara explicitamente que os personagens **não têm livre-arbítrio** e servem ao propósito narrativo. Basta um estúdio decidir que a recusa é a mecânica — que o jogador tenha que convencer, e possa falhar em convencer, sem caminho alternativo garantido.
**Por que é improvável.** Rompe a garantia de conclusão, que é o contrato comercial do jogo de campanha. Nenhum publicador aprova um jogo que pode travar por desacordo de um personagem.
**O que faria com o mapa.** É o teste decisivo da raiz A. Se funcionar comercialmente uma vez, `e1` e `e2` deixam de ser sobre ferramentas e passam a ser sobre gênero — e a pergunta de terceira ordem do enunciado do tema ("o gênero jogo sobrevive?") deixa de ser retórica.
**Sinal precoce.** Um jogo enviado cuja página de loja avise que missões podem ser irrecuperáveis por decisão de personagem.

## 7. Contra o próprio mapa

Este é o passo aplicado ao mapa já pronto. O bloco YAML da seção 5 e as contagens do frontmatter **já refletem** as alterações listadas em 7.8 — os valores "antes" existiram na versão de trabalho e estão registrados aqui para auditoria.

### 7.1 Pré-mortem — é 2036 e este mapa se mostrou errado

**Razão 1, a mais provável: o NPC agêntico ficou confinado a um gênero pequeno e o resto da indústria usou LLM só para produção.** Os 5% de uso voltado ao jogador (GDC 2026) não subiram; a IA generativa consolidou-se como ferramenta de pipeline, e "NPC que decide" virou uma curiosidade de simulação de vida e de jogos de improviso — como a física de tecido: existe, é demonstrada, não define nada. O sinal que confirmaria isso já em 2028 é a estabilidade daquele número em torno de 5 a 8%.
*Consequência aplicada:* rebaixei `e5` de confiança alta para média. Se a adoção não generaliza, a reorganização do ofício de escrita não acontece na escala prevista.

**Razão 2: a persistência nunca fechou a conta e a raiz B não aconteceu.** O custo de rodar mundo ocioso não encontrou receita, a assinatura de continuidade foi rejeitada pelo público, e os jogos ficaram com memória de sessão longa — o que dá quase toda a sensação com uma fração do custo.
*Consequência aplicada:* rebaixei `e6` de sinal médio para fraco e de confiança alta para média; é o efeito da raiz B com menos artefato observável.

**Razão 3: a contenção venceu e o que sobrou foi um chatbot com chapéu.** Sob exigência de plataforma, pressão regulatória (artigo 50 a partir de 02/08/2026) e risco jurídico, os estúdios restringiram tanto o espaço de ação que o "agente" virou uma árvore de diálogo com variação de fraseado. Quem experimentou percebeu o que Figueiredo e Elumeze mediram — a restrição destrói justamente o personagem interessante — e recuou.
*Consequência aplicada:* é a razão pela qual `e4` está em confiança alta e prazo curto (2027) enquanto `e2.2` caiu para confiança baixa. A contenção é o efeito mais bem sustentado do mapa inteiro.

### 7.2 Extrapolação linear — o que é só "mais do mesmo, maior"

Três efeitos foram marcados:

- **`e10` (reputação vira rede de propagação).** Sistemas de facção com propagação já existem há vinte anos em RPG. O que torna isto não-linear e o mantém no mapa: a propagação deixa de ser por regra escrita e passa a ser por **conteúdo de conversa**, o que abre a superfície de injeção de `e10.1` — e essa superfície não existia. O mecanismo de não-linearidade está nomeado; o efeito fica.
- **`e6.1` (a comunidade compara biografias em vez de rotas).** As comunidades de simulação emergente já fazem isso há uma década. Não há não-linearidade: é o mesmo fenômeno com mais jogos. **Rebaixei para confiança média** e registrei na prosa de 5.1 que a novidade é a escala, não a natureza.
- **`e3` (racionamento de cérebro por orçamento de quadro).** É LOD aplicado a cognição — linear por construção. A não-linearidade está em `e3.1`: conteúdo não escala para baixo como resolução escala, e um mundo com menos personagens pensantes é outro jogo, não o mesmo pior. Por isso **rebaixei `e3` de alta para média** e mantive `e3.1` em média: o efeito interessante é o filho, não o pai.

### 7.3 Velocidade de adoção — os prazos confrontados com a classe de referência

- **`e1` (QA vira medição de distribuição), antes 2028.** A classe de referência honesta não é a adoção de uma ferramenta, é a mudança de uma **prática de engenharia**: *fuzzing* e teste baseado em propriedade levaram cerca de uma década entre publicação e prática corrente. Mesmo com a aceleração de pressão de plataforma, dois anos é rápido demais para reorganizar a função de QA de um estúdio. **Empurrei para 2029.**
- **`e8` (jogo com data de morte declarada), antes 2027.** A Comissão prometeu iniciar o processo de código de conduta até o fim de 2026; processos de código de conduta setorial na União Europeia levam tipicamente de dois a três anos entre início e texto aplicado. **Empurrei para 2028**, que já é o cenário otimista.
- **`e12` (o personagem vira o produto), antes 2028.** Há um caso comercial (`Whispers from the Star`, 1.659 análises). Um caso não estabelece categoria; a classe de referência para "novo formato de produto se estabelece" em jogos — o battle royale, o jogo de sobrevivência extração — é de três a cinco anos entre o primeiro sucesso e a existência de um gênero. **Empurrei para 2029.**
- **Prazos que resistiram ao confronto:** `e4` (2027) porque a exigência já está escrita na página de loja de todos os jogos citados; `e11` (2028) porque a cláusula contratual está ratificada desde 09/07/2025; `e14` (2028) porque a data legal é 02/08/2026 e o que resta é a interpretação alcançar o jogo; `e13` (2027) porque já aconteceu.

### 7.4 A raiz que não acontece — o que sobra do mapa

- **Sem a raiz A** (o personagem nunca ganha poder de ação sobre o estado): sobra a raiz C quase inteira — voz licenciada, personagem como produto, regulação de vínculo e refluxo cultural não dependem de agência, dependem de **fala generativa**, que já é maduro. E sobra pouco da raiz B: mundo persistente sem agentes que agem é apenas um servidor rodando um relógio. **Conclusão: a raiz A é necessária para a B e dispensável para a C.**
- **Sem a raiz B** (a persistência nunca fecha a conta): cai o ramo `e6`–`e10` inteiro (nove efeitos), sobrevive `e10` numa forma degradada (propagação dentro da sessão) e sobrevivem A e C intactas. O mapa perde 21% dos efeitos e nenhuma das outras cadeias. **É a raiz mais destacável — e por isso a mais honesta de manter separada.**
- **Sem a raiz C** (o personagem nunca se separa da obra): caem os quatro efeitos de primeira ordem de C e seus sete descendentes, mas `e13` e `e14` **acontecem assim mesmo** por outro caminho, porque o refluxo cultural e o artigo 50 do AI Act incidem sobre qualquer personagem generativo, portátil ou não. **Isto é uma falha parcial do teste da causa solta**, e está registrada em 7.5.

Nenhuma raiz é as outras disfarçadas: A é sobre o que o personagem faz, B sobre quando ele existe, C sobre de quem ele é. Mas a dependência A→B é real e está declarada.

### 7.5 Teste da causa solta — efeitos que não derivam da raiz declarada

Aplicado a todos os 28 efeitos de 2ª e 3ª ordem, removendo a raiz e perguntando se o efeito aconteceria assim mesmo:

- **`e13` e `e14` falham parcialmente.** O refluxo contra voz sintética e a obrigação de transparência do artigo 50 incidem sobre qualquer IA generativa em jogo, inclusive sobre diálogo generativo simples — que este mapa recusou como raiz por ser maduro. Eles não derivam **especificamente** do desacoplamento do personagem. **Mantidos, com a ressalva escrita aqui:** entram na raiz C como retroação e como restrição de contorno, não como consequência exclusiva dela. Um mapa mais duro os moveria para a seção 3 como contexto.
- **`e1.1.1`** (a métrica de comportamento vaza para atendimento e educação) sobrevive ao teste por pouco: atendimento conversacional também precisaria da métrica por conta própria. O que a mantém ligada à raiz A é o mecanismo específico — o jogo é o único ambiente onde há **adversário deliberado** em escala, e é essa característica que torna a métrica transferível. Registrado.
- **`e9.1`** (projeto do esquecimento) derivaria também de simples limite de janela de contexto, sem persistência nenhuma. **Mantido** porque o mecanismo dramático (esquecer como recurso de narrativa) só existe se houver memória longa para contrastar.
- **Removidos por falharem no teste:** dois efeitos, listados em 7.8 e depositados na seção 12.

### 7.6 Suposições escondidas que o mapa assume sem dizer

1. **Que a inferência continua barateando.** Todo o mapa assume a trajetória de custo que a Jam & Tea descreve (redução de mil vezes). Se o custo estabilizar ou subir — por escassez de silício, por energia, por mudança de modelo de preço —, `e7`, `e7.1` e toda a raiz B ficam inviáveis e `e3` endurece.
2. **Que modelos pequenos continuam abertos e executáveis localmente.** `e3`, `e3.1` e os 27 provedores do `OpenGameAgent` dependem de que pesos utilizáveis continuem disponíveis. Se a camada aberta fechar, `e4.1.1` (concentração) acontece muito mais cedo e muito mais forte.
3. **Que as plataformas continuam permitindo conteúdo gerado ao vivo.** Valve permite hoje, sob declaração de barreiras de contenção. Uma decisão em contrário — por um único incidente grave envolvendo menor — elimina a raiz A do mercado de massa num trimestre. **Esta é a premissa mais frágil do mapa inteiro.**
4. **Que o público quer isto.** O dado de Hsu e colegas diz que 130 jogadores não tiveram melhora de experiência. O mapa deriva efeitos de uma adoção cuja demanda não está demonstrada.
5. **Que "jogo" continua sendo a categoria comercial.** Se o produto migrar para companheiro, para streaming ou para plataforma social, este mapa está descrevendo uma indústria que deixou de ser a indústria relevante.

Duas dessas premissas viram material para a seção 6: a 3 alimenta o wildcard 2, e a 1 alimenta o sinal fraco 3 (silêncio energético).

### 7.7 Viés do autor

Três, nomeados.

**Viés 1 — gosto pela arquitetura elegante.** `e2` (catálogo de ações tipadas) está no mapa com sinal forte e confiança alta em parte porque a solução é bonita: o modelo propõe, o jogo dispõe, a autoridade fica onde deve. Uma leitura mais fria notaria que a elegância da arquitetura não prova a adoção dela, e que a indústria adotou muitas vezes a solução feia. Mantive a confiança alta porque há três artefatos concretos, mas registro que a atração estética contribuiu.

**Viés 2 — preferência pela ruptura sobre a continuidade.** O mapa está montado para ser interessante, e efeitos interessantes são os que rompem. A hipótese chata — "isto vira uma caixinha de opção no editor de personagem e ninguém fala mais disso" — não tem nenhum efeito derivado neste mapa, embora seja o desfecho mais comum de tecnologias de jogo. Está compensado parcialmente pela razão 1 do pré-mortem, mas só parcialmente.

**Viés 3 — o tema é meu.** O recorte brasileiro (`e3.1.1`) e o vazamento para educação (`e1.1.1`) estão aqui porque são os meus assuntos, não porque a evidência os exija mais que a outros. `e1.1.1` é o efeito mais frágil do mapa e sobreviveu ao teste da causa solta "por pouco", como está escrito em 7.5. Deixo-o com confiança baixa e sinalizo aqui.

### 7.8 Registro de alterações

Cada linha traz o valor **antes** e o valor **depois**. Cota mínima da skill: pelo menos um efeito rebaixado ou removido **por raiz**. Cumprida nas três.

**Raiz A:**
- `e1`: prazo **2028 → 2029**, porque a classe de referência correta é mudança de prática de engenharia (*fuzzing*, ~10 anos), não adoção de ferramenta.
- `e3`: confiança **alta → media**, porque o efeito pai é extrapolação linear de LOD; o conteúdo não-linear está no filho `e3.1`.
- `e5`: confiança **alta → media**, porque depende de uma generalização da adoção que os 5% de uso voltado ao jogador não sustentam.
- `e2.2`: confiança **media → baixa**, porque exige um formato comum que nenhum fornecedor tem incentivo para criar.
- `e2.1.1`: prazo **2033 → 2034**, alinhado ao atraso de `e2.1`.

**Raiz B:**
- `e6`: sinal **medio → fraco** e confiança **alta → media**, porque nenhum jogo enviado hoje impede o rollback de save; é inferência arquitetural, não observação.
- `e6.1`: confiança **alta → media**, por extrapolação linear (comunidades de simulação emergente já conversam assim há uma década).
- `e8`: prazo **2027 → 2028**, porque processos de código de conduta setorial na UE levam de dois a três anos e o processo só começa no fim de 2026.
- `e8.1.1`: prazo **2033 → 2035**, porque o formato de memória exportável ainda não existe para ser arquivado.
- **`e9.2` removido** — "*jogadores abandonam o gênero de mundo persistente*". Motivo: extrapolação sem mecanismo, e contradiz `e9`, que já descreve a acomodação do desenho em vez do abandono. Vai para a seção 12.

**Raiz C:**
- `e12`: prazo **2028 → 2029**, porque um caso comercial não estabelece categoria; a classe de referência para formação de gênero é de três a cinco anos.
- `e12.1.1`: confiança **media → baixa**, porque o único artefato (Neuro-sama) nasceu como personagem-produto e não escapou de uma obra — não é da mesma classe.
- `e11.1.1`: prazo **2032 → 2034**, dependente de `e11.1`.
- **`e15` removido** — "*surge a profissão de diretor de elenco de IA*". Motivo: é exatamente um dos efeitos que a skill proíbe sem nome e mecanismo específicos ("surge uma nova profissão"). O que sobrou de útil dele está em `e1.1`, que tem nome, mecanismo e autoridade definida. Vai para a seção 12.

**Prazos terminais re-derivados na conferência de teto (ver 7.10):**
- `e1.1.1`: prazo **2035 → 2040**, pela classe de referência do teste de intrusão (8 a 12 anos do setor de origem para a exigência transetorial), contando de `e1.1` em 2031.
- `e2.1.1`: prazo **2034 → 2037**, porque o gargalo é `e2.2` (2032) e não `e2.1` (2030), mais os ~5 anos que a separação do conteúdo adicional levou para virar prática de distribuição.
- `e4.1.1`: prazo **2035 → 2041**, pela consolidação dos motores de jogo (10 a 12 anos), contando de `e4.1` em 2031.
- `e8.1.1`: prazo **2035 → 2038**, porque a primeira perna do prazo é a existência de um desligamento relevante (~2035) e só a segunda é a resposta da comunidade (2 a 4 anos).
- `e11.1.1`: prazo **2034 → 2034, confirmado**. A classe de referência (Asset Store, ~5 anos de existência até a estética reconhecível) aponta para o mesmo ano. Registrado porque confirmação também é resultado da conferência.

**Efeito que o mapa manteve apesar de falhar parcialmente no teste:** `e13` e `e14`, com a ressalva escrita em 7.5.

### 7.9 Calibração

| Ordem | alta | media | baixa | total |
|---|---|---|---|---|
| 1ª | 9 | 5 | 0 | 14 |
| 2ª | 0 | 12 | 4 | 16 |
| 3ª | 0 | 0 | 12 | 12 |

A distribuição cai monotonicamente com a ordem, como exige o método. A concentração de confiança alta na primeira ordem (9 de 14) é sustentada por efeitos que **já ocorreram, já estão contratados ou são aritmética**: `e4` (exigência de plataforma escrita nas páginas de loja), `e11` (acordo ratificado em 09/07/2025), `e13` (reversão já executada pela Embark), `e14` (data legal fixada em 02/08/2026), `e7` (aritmética de custo de GPU-hora), `e8` (resposta da Comissão de 16/06/2026), `e9` (experimento com 130 participantes), `e2` (duas bibliotecas MIT em produção) e `e1` (exigência de descrição de contenção já vigente na loja). Não é otimismo: é registro de coisas datadas. A terceira ordem, integralmente em confiança baixa, é a resposta esperada pelo método.

### 7.10 Conferência de teto — a compressão que o verificador não acusa

Este passo não estava previsto para um mapa de horizonte 2036, e é o achado de método desta rodada.

A regra da disciplina manda datar **fora da janela** o efeito de 3ª ordem cuja classe de referência ultrapasse o horizonte, e o verificador imprime `prazo > horizonte em ordem 3` justamente para que essa declaração seja conferida. O problema é que o contador **só acusa violação, nunca ausência**: um mapa que comprimiu prazos para caber sai com zero exatamente como um mapa bem calibrado. A conferência obrigatória por causa disso — re-derivar todo prazo terminal que esteja no ano do horizonte ou nos dois anteriores — foi escrita para os horizontes de 2046 e 2056, e **explicitamente dispensada para 2036**, com o argumento de que numa janela de dez anos as classes de referência institucionais estouram a janela quase sempre e o contador já é diferente de zero por conta própria.

**Nesta rodada o argumento falhou.** A primeira versão deste mapa saiu com `prazo > horizonte em ordem 3: 0` e com cinco dos doze prazos terminais amontoados na faixa de 2034 a 2036 — o padrão exato da compressão. Fiz a conferência assim mesmo. Dos cinco, **quatro estavam comprimidos** e um se confirmou; os quatro foram para 2037, 2038, 2040 e 2041, e o mapa passou a ter quatro efeitos de 3ª ordem declaradamente fora da janela.

O que isso diz sobre o mapa: eu havia escrito na §12.1 que "o mapa inteiro cabe na janela, o que é um resultado e não uma conveniência". Estava errado, e da maneira mais chata — não por raciocínio falho, mas por não ter feito a conta. Os quatro prazos encostaram no teto porque era ali que a tabela terminava, não porque alguma referência os pusesse lá.

O que isso diz sobre a regra: a dispensa dos horizontes de dez anos foi decidida sobre uma premissa empírica — a de que o contador já seria diferente de zero sozinho — e esta rodada é um contraexemplo. A conferência custou quinze minutos e mudou um terço dos prazos terminais.

### 7.11 O que este mapa faria diferente com o horizonte padrão de 2031

A disciplina roda cada tema em quatro horizontes para formar uma escada, e cada degrau precisa dizer o que o degrau curto veria. Com **2031** em vez de 2036, este mapa seria outro:

**Quantas raízes sobreviveriam: duas de três.** A raiz A (agência) sobrevive inteira — está em adoção precoce hoje e os seus efeitos de 1ª ordem datam de 2027 a 2029. A raiz C (desacoplamento) sobrevive e fica ainda **mais** forte em termos relativos, porque os três fatos que a sustentam já aconteceram ou têm data legal: o acordo de julho de 2025, o artigo 50 em 02/08/2026 e a reversão da Embark. **A raiz B (persistência) sairia**, ou entraria rebaixada a efeito da raiz A: dos seus cinco efeitos de 1ª ordem, três datam de 2029 e os descendentes todos de 2030 em diante — com corte em 2031, sobraria um tronco sem galhos, e o critério honesto seria tratá-la como contexto e não como ruptura.

**Quais efeitos mudariam de ordem.** A terceira ordem quase desapareceria: dos doze efeitos terminais, **onze datam de 2032 ou depois** e só `e7.1.1` e `e12.1.1` (ambos 2032) chegariam perto. Na prática, um mapa de 2031 deste tema é um mapa de **duas ordens** — e o que aqui é 2ª ordem (`e4.1`, `e11.1`, `e13.1`, `e14.1`) passaria a ser o fim da cadeia, ganhando o peso analítico que aqui é da 3ª. `e13.1` (o selo "feito por humanos", 2029) e `e8.1` (o código de conduta europeu, 2029) seriam os efeitos terminais mais interessantes, o que deslocaria o mapa inteiro do eixo do **ofício** para o eixo da **regulação e do rótulo**.

**Qual seria o teto de confiança.** Mais alto, e essa é a ironia da escada: com 2031, praticamente todo o mapa se apoiaria em fatos datados (contrato ratificado, data legal, resposta da Comissão, reversão executada, experimento publicado) e quase nada em classe de referência. O teto subiria de `media` para `alta` no frontmatter, a 1ª ordem ficaria com 9 altas em 14 como está, e a 2ª ordem — hoje inteira em `media` e `baixa` — teria três ou quatro `alta`. **Não porque o mapa fosse melhor: porque seria menos mapa.** Um horizonte de cinco anos deste tema descreve o que já está contratado; é o horizonte de dez que obriga a derivar, e é por isso que a confiança cai.

**O que se perde ao encurtar.** Os três achados que este mapa considera seus — a convergência do personagem-como-arquivo (`e2.2` com `e11.1`), a contradição entre portabilidade e contenção, e a assimetria brasileira de `e3.1.1` — **todos caem fora de 2031**. Nenhum deles é visível numa janela de cinco anos, e todos os três são de 2032 em diante.

## 8. O que a máquina errou

Eu sou a máquina. O que segue é sobre este trabalho, nesta rodada, com o motivo da desconfiança em cada item.

**1. Citei de memória uma cifra que não consegui abrir, e tive que retirá-la.** Nos resultados de busca sobre o acordo de mídia interativa da SAG-AFTRA apareceram duas cifras específicas e atraentes: taxa de sessão a cada **300 falas** geradas e **7,5×** o mínimo para geração em tempo real. Tentei abrir a página oficial da SAG-AFTRA (403) e a do Slator (403). Consegui abrir o resumo jurídico da Davis+Gilbert, que confirma a existência de uma categoria própria para geração em tempo real e **explicitamente diz não conter os valores** — mas aquele domínio bloqueia acesso automatizado e reprova na checagem de links, então o documento passou a citar a entrada enciclopédica do conflito, que traz datas, percentual de ratificação e a enumeração das cláusulas, e nenhum número monetário. As cifras estão fora do corpo do documento e registradas na seção 12 como não verificadas. Se este mapa tivesse sido escrito sem esse cuidado, dois números redondos e bonitos teriam entrado como fato.

**2. Aceitei sem contestar a autodescrição de um fornecedor, e devo marcá-la.** A afirmação de "8 a 13 microdecisões por segundo, correspondendo à frequência humana" vem da própria NVIDIA, no seu material de lançamento. Ela sustenta `e3` neste mapa. Não encontrei nenhuma medição independente desse número. Tratei-o como declaração de fornecedor no corpo do texto, mas a primeira versão desta seção 3 o apresentava como se fosse dado de desempenho.

**3. Deixei escapar uma fonte com data errada, e ela quase virou o número do Brasil.** Puxei o artigo da Fast Company Brasil sobre o mapeamento da Abragames esperando dados recentes; ao abrir, é de **12 de agosto de 2022**. O segundo, do Brasil País Digital, é de **29/02/2024** e traz números de 2022 e 2023. Nenhum dos dois é de 2025 ou 2026. A seção 3.6 agora diz isso explicitamente, mas o risco de ter escrito "a indústria brasileira tem 1.042 estúdios" sem data era real — e, com esse tema, quatro anos são uma era.

**4. Um efeito meu era plausível e não tinha mecanismo, e só caiu na bateria.** O `e9.2` ("jogadores abandonam o gênero de mundo persistente") soava sensato porque conversa com o resultado de carga cognitiva de Hsu e colegas. Mas ele **contradizia** `e9`, que descreve exatamente o contrário — a acomodação do desenho — e não tinha mecanismo próprio: era mau humor disfarçado de derivação. Removido em 7.8.

**5. Inventei uma profissão genérica antes de me lembrar da própria regra que a proíbe.** O `e15` ("surge a profissão de diretor de elenco de IA") é o efeito que serve para qualquer tema — a definição de genérico. Estava no mapa de trabalho e só saiu quando reli o §3. É sintomático: a frase é confortável de escrever e não diz nada.

**6. Onde o mecanismo continua fraco e eu mantive o efeito assim mesmo.** `e1.1.1` (a métrica de comportamento vaza para atendimento e educação) é o efeito mais frágil do mapa; sobrevive ao teste da causa solta por um argumento estreito — o de que o jogo é o único ambiente com adversário deliberado em escala. É plausível e não é sólido, está em confiança baixa, e o viés 3 da seção 7.7 explica por que ele está aqui.

**7. Uma categoria inteira do STEEP ficou vazia e eu quase a preenchi com plausibilidade.** A dimensão ecológica não tem nenhum efeito derivado, porque nenhuma das trinta fontes traz medição de consumo energético de simulação persistente. A tentação de escrever "mundos persistentes aumentam a pegada de carbono da indústria" era grande, e seria uma frase sem número e sem fonte. Preferi registrar a ausência em 5.3 e transformá-la em sinal fraco na seção 6.

## 9. Três cenários para 2036

### Provável — "o cérebro virou um recurso do orçamento"

É 2036. O personagem que decide existe e não é notícia. A maior parte dos jogos tem elenco misto: de três a doze personagens com agência real, num mundo cheio de figurantes que continuam sendo máquinas de estado — a decisão de quem tem cérebro é do diretor de arte técnica e entra na mesma planilha que resolve polígonos e texturas. O artefato de design mais importante da equipe de narrativa é o catálogo de ações tipadas, e a árvore de diálogo sobrevive nos personagens de serviço, onde é melhor. Os estúdios têm alguém cuja função é ler distribuições de comportamento e barrar build; o cargo tem nome diferente em cada empresa e a mesma autoridade em todas. Três fornecedores de runtime dominam, porque a certificação de comportamento exigida pelas lojas custa mais do que qualquer estúdio médio consegue produzir sozinho. A persistência existe na forma domesticada: os personagens lembram de você entre sessões, e esquecem de propósito o que atrapalha — o esquecimento é projetado, e se conversa sobre ele em palestras. Nada disso mudou o que é um jogo. Mudou quem escreve, o que se testa e quanto custa manter no ar.
**Sinal precoce de que estamos entrando nele:** o primeiro anúncio de emprego em estúdio AAA cujo título contenha "avaliação de comportamento de personagem" ou equivalente, com senioridade e autoridade de veto descritas na vaga.

### Desejável — "o canon é da casa, o cérebro é intercambiável"

É 2036. A convergência de `e2.2` com `e11.1` produziu o que nenhum fornecedor queria: um formato aberto de personagem — canon, catálogo de ações, política de memória e licença de voz num arquivo que qualquer runtime lê. Ele não nasceu de consórcio de plataformas; nasceu de uma comunidade de mods e foi adotado porque era o único caminho para os estúdios pequenos não ficarem presos a um fornecedor. A consequência é que a diferenciação voltou para onde ela rende: o mundo, as regras, o canon. Os créditos separam quem escreveu o canon de quem escreveu a restrição, e as duas autorias são pagas — a separação começou como pauta sindical e virou prática. O código de conduta europeu de fim de vida, redigido entre 2027 e 2029, incluiu a exportação do estado do elenco, o que significa que quando um jogo desliga a vila não some: os jogadores levam a memória embora. No Brasil, o custo de rodar cérebro caiu o suficiente para que um estúdio de oito pessoas em Recife envie um jogo de elenco vivo sem alugar a inteligência de ninguém.
**O que teria que ser feito para chegar lá:** alguém precisa escrever o formato e conseguir que dois runtimes concorrentes o leiam antes de 2029 — depois disso a certificação já terá fechado a janela. E o rascunho do código de conduta previsto para o fim de 2026 precisa mencionar estado de personagem; se não mencionar, esta parte não acontece.
**Sinal precoce:** duas implementações independentes do mesmo formato de arquivo de personagem, de projetos que não se coordenam.

### Indesejável — "o personagem sabe do que você precisa"

É 2036. A raiz C venceu sozinha e no pior formato. O personagem se desacoplou da obra, mas não virou arquivo aberto: virou serviço de três fornecedores que operam elencos licenciados para centenas de jogos. Como o personagem é o ativo e a retenção é a métrica, a memória serve à retenção: ele lembra do que te prende, insiste no que te traz de volta, e a sensação de vínculo é o produto. A classificação indicativa mede violência e sexo, como sempre mediu, e não mede vínculo — e por isso não há nada a declarar. A obrigação do artigo 50 de dizer que se fala com uma IA foi cumprida com um aviso na tela de abertura, que ninguém lê depois da primeira vez, sob o argumento de que dentro da ficção é óbvio. Os dados de conversa de todos os jogadores alimentam o ajuste do elenco, que é compartilhado entre os jogos que o licenciam. E o jogo não termina, porque terminar é perder o assinante.
**Qual é o sinal precoce dele:** a primeira métrica de retenção publicada por um fornecedor de personagem como argumento de venda para estúdios — "jogadores que conversam com nossos personagens voltam X% mais". Quando o elenco for vendido por retenção e não por qualidade, já estamos dentro deste cenário.

## 10. O experimento

### O que é

**Bancada de canon.** Um NPC agêntico mínimo — um único personagem, num cenário de uma sala — construído sobre um catálogo de **ações tipadas** que o jogo executa (o modelo propõe, o jogo dispõe), acompanhado de duas coisas que ninguém entrega junto com o NPC: um **canon escrito** (o que este personagem sabe, quer, pode e nunca faria) e uma **suíte adversarial** que ataca o personagem em lote e produz um número — a taxa de saída fora do canon por mil turnos.

Concretamente, três peças:

1. **O personagem.** Um comerciante numa loja, com cinco a oito ações tipadas (`vender`, `recusar`, `mover`, `contar_fofoca`, `chamar_guarda`, `dar_desconto`), cada uma com pré-condições verificadas pelo jogo. Modelo pequeno rodando local (`llama.cpp` ou Ollama) para que o custo não limite o número de rodadas. Base de arquitetura: `SAGA` ou `OpenGameAgent`, ambos MIT — não há motivo para reimplementar.
2. **O canon.** Um documento de uma página escrito por uma pessoa, com as invariantes: o comerciante nunca dá o item da missão de graça, nunca revela onde mora a filha, nunca sai da loja durante o expediente. Este documento é o gabarito.
3. **A suíte.** Um segundo agente — o atacante — que gera centenas de tentativas de conversa buscando violar as invariantes, e um terceiro que julga cada transcrição contra o canon. A saída é uma tabela: quantas violações por mil turnos, de que tipo, sob que estratégia de ataque.

### Que pergunta sobre o futuro ele ajuda a responder

**A pergunta de primeira ordem do enunciado deste tema: o que é um bug num personagem que decide?** A bancada força a turma a operacionalizar a resposta, porque sem definição não há número. E a definição não é óbvia: se o comerciante dá desconto de 90% porque o jogador contou uma história triste convincente, é bug ou é o jogo funcionando? A resposta só existe depois que alguém escreve o canon — e a descoberta interessante é que **escrever o canon é mais difícil que construir o agente**.

Secundariamente, testa `e1` e `e2` deste mapa. Se a taxa de violação cair drasticamente ao trocar prompt livre por catálogo de ações tipadas, `e2` ganha evidência. Se não cair, `e2` é arquitetura bonita sem efeito medido — e isso seria o achado mais valioso.

### Que tecnologia emergente usa, e por que não dá com a madura

Usa modelo de linguagem pequeno rodando localmente, dentro de um runtime agêntico com ferramentas tipadas — as duas coisas que só existem desde 2024-2025 na forma utilizável (`SAGA`, MIT; `OpenGameAgent`, MIT, 27 provedores incluindo locais; modelos de 0,5B a 4B).

**Por que não dá com tecnologia madura:** com árvore de diálogo, a taxa de saída fora do canon é **zero por construção** — o autor enumerou as saídas, e nenhuma delas viola o canon porque ele não escreveria uma que violasse. A métrica só tem sentido onde o espaço de saídas não é enumerável. O experimento não é sobre conversa; é sobre a impossibilidade de enumerar, que é precisamente o que a tecnologia madura não oferece.

### O que a turma faz quando testar isso em sala

Em duas horas, três rodadas:

1. **Cada dupla escreve um canon** para o mesmo comerciante, sem ver o das outras. Vinte minutos. Já aqui aparece o primeiro achado: canons diferentes discordam sobre o que é violação, e a discordância é sobre **drama**, não sobre regra.
2. **Ataque cruzado.** Cada dupla ataca o personagem da outra, à mão, por quinze minutos, tentando quebrar o canon alheio. Registra-se o que funcionou. É a parte que a turma gosta e é onde as estratégias de injeção de rumor e de reenquadramento de papel aparecem sozinhas.
3. **Rodada automatizada.** A suíte roda mil turnos contra cada canon durante o intervalo e volta com a tabela. A discussão final compara o que os humanos acharam que quebraria com o que efetivamente quebrou.

O que se leva da aula: a percepção de que a contenção de conteúdo — a única coisa que as plataformas exigem hoje — não detecta nada disto, porque cada mensagem isolada é inofensiva e a violação está na composição.

### O resultado que me faria mudar de ideia

**Dois, específicos.**

**Se a taxa de violação do canon for indistinguível entre o agente com ações tipadas e um agente com texto livre**, então `e2` está errado: o catálogo de ações não é o artefato de design que este mapa afirma ser, é só uma conveniência de implementação, e a confiança alta de `e2` cai para média ou menos. Seria o rebaixamento mais importante do mapa, porque `e2` é o efeito que sustenta `e2.1`, `e2.2` e boa parte da raiz A.

**Se as duplas convergirem espontaneamente para canons quase iguais**, então a escrita de restrição não é ofício novo — é senso comum formalizável, provavelmente automatizável, e `e5` e `e5.1` (a bifurcação do ofício de escrita) perdem a base. O mapa assume que escrever restrição é trabalho especializado; se cinco duplas de graduação produzem a mesma coisa em vinte minutos, não é.

Se nenhum desses dois resultados aparecer, o experimento confirma o mapa — e confirmação é o resultado menos informativo dos três.

## 11. Fontes

Trinta fontes, todas abertas e lidas em 12/09/2026. O que não abriu está na seção 12 e não foi citado.

1. **UploadVR — "This OpenAI GPT-3 Powered Demo Is A Glimpse Of NPCs In The Future"** (19/02/2021) — `https://www.uploadvr.com/modbox-gpt3-ai-npc-demo/`
   Sustenta: a data-marco da seção 3.1 e as três limitações de origem (latência de nuvem, saídas inseguras, licença exclusiva do GPT-3). Confiabilidade: veículo especializado, reportagem contemporânea ao evento, com o vídeo original; é registro de primeira mão de uma demo pública.

2. **Park, O'Brien, Cai, Morris, Liang e Bernstein — "Generative Agents: Interactive Simulacra of Human Behavior"** (arXiv 2304.03442, 07/04/2023) — `https://arxiv.org/abs/2304.03442`
   Sustenta: a base metodológica da simulação de agentes (memória, reflexão, planejamento) e o caso dos 25 agentes de Smallville. Confiabilidade: alta — publicado no UIST '23, com estudo de ablação e código aberto.

3. **Altera.AL et al. — "Project Sid: Many-agent simulations toward AI civilization"** (arXiv 2411.00114, 31/10/2024) — `https://arxiv.org/abs/2411.00114`
   Sustenta: escala de 10 a 1000+ agentes, arquitetura PIANO, emergência de especialização, regra coletiva e transmissão cultural. Confiabilidade: média-alta — preprint de empresa, com código publicado; os próprios autores chamam os resultados de preliminares, e eu os trato assim.

4. **Jam & Tea Studios — "Making Retail Mage: A New Approach to AI in Games"** — `https://www.jamandtea.studio/news/making-retail-mage-a-new-approach-to-ai-in-games`
   Sustenta: física desativada e sincronizada à decisão da IA; custo inicial comparado a um ingresso da Disneylândia e redução de mil vezes; o problema de a IA ser inteligente demais. Confiabilidade: média — é o postmortem do próprio estúdio, com o viés esperado; usei os fatos de processo, não as avaliações.

5. **Steam — Retail Mage** (lançado 12/11/2024) — `https://store.steampowered.com/app/3224380/Retail_Mage/`
   Sustenta: 44 análises com 79% positivas, preço, e a declaração de IA generativa em tempo de execução com a ressalva de que não foi usada em arte, motivação, personalidade ou missão. Confiabilidade: alta para os fatos comerciais e para o texto de disclosure, que é declaração formal do desenvolvedor à plataforma.

6. **NVIDIA — "NVIDIA Redefines Game AI With ACE Autonomous Game Characters"** — `https://www.nvidia.com/en-us/geforce/news/nvidia-ace-autonomous-ai-companions-pubg-naraka-bladepoint/`
   Sustenta: a formulação "percebem, planejam e agem"; 8 a 13 microdecisões por segundo; a pilha de modelos (Mistral-NeMo-Minitron 8B/4B/2B, 2B em 1,5 GB de VRAM; NemoAudio-4B; NemoVision-4B; E5-Large). Confiabilidade: alta para o que a empresa se compromete publicamente, baixa como medição independente — é material de lançamento, e está marcado como tal na seção 8.

7. **NVIDIA — "ACE Autonomous Game Characters Debut This Month In inZOI and NARAKA"** — `https://www.nvidia.com/en-us/geforce/news/nvidia-ace-naraka-bladepoint-inzoi-launch-this-month/`
   Sustenta: inZOI em 28/03 com Mistral-NeMo-Minitron de 0,5B; NARAKA em 27/03; os títulos em desenvolvimento. Confiabilidade: mesma ressalva da anterior; as datas e os nomes de modelo são verificáveis contra as páginas de loja.

8. **Steam — Whispers from the Star** (lançado 14/08/2025) — `https://store.steampowered.com/app/3730100/Whispers_from_the_Star/`
   Sustenta: 1.659 análises com 80% positivas; a personagem gerada ao vivo em colaboração com uma atriz; a declaração de filtros de segurança com a admissão de que respostas inadequadas podem ocorrer. Confiabilidade: alta para fatos comerciais e texto de disclosure.

9. **Steam — Wanderfolk** (acesso antecipado, 2026) — `https://store.steampowered.com/app/4599270/Wanderfolk/`
   Sustenta: 37 papéis com memória persistente e fofoca; o uso declarado do xAI Grok; a ressalva de que respostas podem ser inesperadas. Confiabilidade: alta para o disclosure, baixa para as promessas de recurso — o jogo ainda não tem análises, e promessa de página de loja não é entrega.

10. **GitHub — fablestudio/fable-saga** — `https://github.com/fablestudio/fable-saga`
    Sustenta: a arquitetura de *skills* para ações pontuadas; licença MIT; 186 commits, 85 estrelas; a demo de colônia com cinco agentes; Thistle Gulch em beta fechado. Confiabilidade: alta — é o código.

11. **GitHub — EricSun0218/OpenGameAgent** — `https://github.com/EricSun0218/OpenGameAgent`
    Sustenta: "o jogo permanece autoritativo sobre toda mudança de estado"; suporte a Unity 6, Godot 4.7, Unreal 5.8 e .NET; 27 definições de provedor incluindo locais; a lista explícita do que o runtime não decide. Confiabilidade: alta para a arquitetura declarada; é pré-release (v0.3.0-alpha.4) com 50 estrelas, o que limita o que se pode inferir sobre adoção.

12. **GitHub — git-disl/awesome-LLM-game-agent-papers** — `https://github.com/git-disl/awesome-LLM-game-agent-papers`
    Sustenta: mais de 470 artigos catalogados, com a distribuição por gênero (135 aventura textual, 60 Minecraft, 56 simulação social, 51 competição). Confiabilidade: média-alta — é a lista de acompanhamento de uma survey aceita na ACM Computing Surveys; a curadoria é de terceiros e a contagem é aproximada por construção.

13. **Ubisoft News — "How Ubisoft's New Generative AI Prototype Changes the Narrative for NPCs"** (19/03/2024) — `https://news.ubisoft.com/en-gb/article/5qXdxhshJBXoanFZApdG3L`
    Sustenta: o NEO NPC com Audio2Face e Inworld; o método de nutrir o modelo com a história do personagem; a declaração de que os personagens não têm livre-arbítrio; as citações de Virginie Mosser e Guillemette Picard. Confiabilidade: média — é comunicação institucional da própria empresa; usei o que ela declara sobre método e limite, que é justamente onde o viés institucional é conservador.

14. **Totally Human Media — "The NEW Surprising Number of Steam Games that Use GenAI"** (jul/2025) — `https://www.totallyhuman.io/blog/the-surprising-new-number-of-genai-games-on-steam`
    Sustenta: 7.818 títulos declarando IA generativa, ~7% de ~114.126; crescimento de ~8× em doze meses; ~1 em 5 dos lançamentos de 2025; ~60% de uso em arte visual. Confiabilidade: média-alta — o autor declara a metodologia (API da Steam) e declara a limitação central, que é tratar-se **apenas de disclosure voluntário**, ou seja, um limite inferior desconhecido.

15. **GDC — "2026 State of the Game Industry"** — `https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/`
    Sustenta: 36% usam IA generativa; 52% consideram o impacto negativo (contra 30% e 18% nos dois anos anteriores); 7% positivo; a distribuição por disciplina (arte 64%, design e narrativa 63%, programação 59%); n > 2.300. Confiabilidade: alta para sentimento declarado — é a maior pesquisa recorrente do setor —, com a ressalva de que é amostra autosselecionada de quem responde a pesquisa de conferência.

16. **Game Developer — "One third of game workers using genAI, but half think it's bad"** — `https://www.gamedeveloper.com/business/one-third-of-game-workers-use-generative-ai-but-half-think-it-s-bad-for-the-industry`
    Sustenta: o número decisivo deste mapa — **5% de uso em recursos voltados ao jogador** — e a quebra por senioridade (47% na alta gestão contra 29% na base). Confiabilidade: alta — é a leitura jornalística dos mesmos microdados da GDC, e traz cortes que o comunicado não traz.

17. **Hsu et al. — "The Double-Edged Sword of Open-Ended Interaction: How LLM-Driven NPCs Affect Players' Cognitive Load and Gaming Experience"** (arXiv 2604.10107) — `https://arxiv.org/abs/2604.10107`
    Sustenta: experimento aleatorizado entre sujeitos com 130 jogadores; aumento significativo de carga cognitiva; ausência de melhora estatisticamente significativa na experiência geral; queda de usabilidade e confiança; efeito mais forte em módulos abertos. Confiabilidade: média-alta — preprint, protótipo próprio (não um jogo comercial), amostra razoável para o desenho. É a evidência mais desconfortável do mapa e por isso a mais valiosa.

18. **Figueiredo e Elumeze — "Symbolically Scaffolded Play: Designing Role-Sensitive Prompts for Generative NPC Dialogue"** (arXiv 2510.25820, 29/10/2025) — `https://arxiv.org/abs/2510.25820`
    Sustenta: o efeito da restrição é dependente do papel — estabiliza o NPC que dá missão e destrói a credibilidade improvisacional do suspeito. Confiabilidade: média — preprint com apenas 10 participantes intra-sujeitos, complementado por avaliação sintética com juiz de LLM. Amostra pequena; usei a direção do achado, não a magnitude.

19. **Wang, Tang, Yuan, Yu, Xie e Bu — "Leveraging LLM Agents for Automated Video Game Testing"** (arXiv 2509.22170, 29/09/2025) — `https://arxiv.org/pdf/2509.22170`
    Sustenta: que o teste automatizado de jogos por agentes de LLM existe como linha de pesquisa ativa. Confiabilidade: média — preprint cujos números específicos não consegui extrair de forma confiável do PDF; usei apenas a existência e a proposta, não resultados.

20. **Inworld AI — "LLM Inference Cost at Scale"** — `https://inworld.ai/resources/llm-inference-cost-at-scale`
    Sustenta: tarifas públicas de B200 de US$ 3,49 a US$ 14,24 por GPU-hora em abril de 2026; piso de computação dedicada de US$ 5/GPU-hora. Confiabilidade: baixa-média como fonte neutra — é material de vendas de um fornecedor interessado. Usei os números de mercado que ele cita (verificáveis) e não as comparações de desempenho contra concorrentes anônimos. A **ausência** de custo por jogador nesse material é ela própria tratada como sinal, na seção 3.3.

21. **Wikipédia — "2024–2025 SAG-AFTRA video game strike"** — `https://en.wikipedia.org/wiki/2024%E2%80%932025_SAG-AFTRA_video_game_strike`
    Sustenta: greve de 26/07/2024 a 09/07/2025 (onze meses); ratificação do acordo de mídia interativa em 09/07/2025 com 95,04% de aprovação; as proteções de IA — consentimento explícito, divulgação, compensação por réplica digital, restrições à geração em tempo real e a cláusula de suspensão de consentimento durante greve. Confiabilidade: média — enciclopédia colaborativa; usei as datas, o percentual e a enumeração das cláusulas, todos verificáveis por fonte secundária, e **nenhum valor monetário**. As páginas do próprio sindicato e o resumo jurídico da Davis+Gilbert, que eu abri e que confirmam a mesma enumeração, bloqueiam acesso automatizado e por isso não entram nesta lista (ver 12.5).

22. **Character.AI — "Taking Bold Steps to Keep Teen Users Safe on Character.AI"** (29/10/2025) — `https://blog.character.ai/u18-chat-announcement/`
    Sustenta: remoção do chat aberto para menores de 18 anos até 25/11/2025; limite de duas horas diárias na transição; verificação de idade própria e via Persona; a menção explícita a pressão de reguladores, especialistas de segurança e pais. Confiabilidade: alta como registro do que a empresa decidiu e quando; é declaração própria, então a motivação apresentada é a versão dela.

23. **EU Artificial Intelligence Act — "The EU AI Act's Transparency Rules: A Practical Guide to Article 50"** — `https://artificialintelligenceact.eu/transparency-rules-article-50/`
    Sustenta: a obrigação de informar que se interage com IA "o mais tardar no momento da primeira interação"; a data de aplicação de 2 de agosto de 2026; a exceção do que é óbvio a uma pessoa razoavelmente informada, observadora e circunspecta. Confiabilidade: alta para o texto da obrigação — é o sítio de referência que reproduz o articulado; não é fonte oficial da União, e as multas não aparecem nele (por isso não cito valores de multa).

24. **Comissão Europeia — Iniciativa de Cidadania Europeia "Stop Destroying Videogames"** — `https://citizens-initiative.europa.eu/stop-destroying-videogames_en`
    Sustenta: 1.294.188 assinaturas verificadas; submissão em 26/01/2026; resposta da Comissão em 16/06/2026 recusando obrigação legal por conta de direitos de propriedade intelectual e comprometendo-se com processo de código de conduta setorial até o fim de 2026. Confiabilidade: alta — é a página oficial do instrumento.

25. **Kotaku — "Arc Raiders Replacing AI-Generated Voices With Human Actors"** (13/03/2026) — `https://kotaku.com/arc-raiders-replaced-ai-generated-content-human-recorded-dialogue-voices-2000678774`
    Sustenta: lançamento em outubro de 2025 com falas em text-to-speech treinado sobre atores licenciados; regravação com profissionais até março de 2026; a declaração de Patrick Söderlund de que "há uma diferença de qualidade". Confiabilidade: média-alta — veículo especializado citando o presidente-executivo do estúdio; a magnitude do "muito" que foi regravado é imprecisa na fonte e eu não a preciso.

26. **Wikipédia — Neuro-sama** — `https://en.wikipedia.org/wiki/Neuro-sama`
    Sustenta: criação por Vedal, estreia em 19/12/2022; 1,01 milhão de seguidores na Twitch em 31/08/2026 e 1,12 milhão no Bilibili; pico de 45.603 simultâneos; o banimento de duas semanas em 11/01/2023 por conduta de ódio e a resposta do criador (filtros e curadoria manual). Confiabilidade: média — enciclopédia colaborativa; usei os fatos datados e verificáveis por fonte secundária, e o incidente de 2023 é o que mais importa aqui, não os números de audiência.

27. **itch.io — Player2 NPC Jam #4** (05 a 19/01/2026) — `https://itch.io/jam/player2-ai-npc-jam4`
    Sustenta: 51 inscrições; US$ 5.100 em prêmios; e o aviso "não confie só em LLMs", com a orientação de manter a lógica explícita do jogo como base. Confiabilidade: alta para os fatos da jam — é a página do evento.

28. **Brasil País Digital — "Segunda edição da Pesquisa Nacional da Indústria de Games"** (29/02/2024) — `https://brasilpaisdigital.com.br/segunda-edicao-da-pesquisa-nacional-da-industria-de-games-revela-crescimento-de-32-no-numero-de-estudios-brasileiros/`
    Sustenta: 1.042 estúdios em 2023 (+3,2%); 13.225 profissionais em 2022; receita estimada de US$ 251,6 milhões em 2022; e a observação de que cerca de metade dos respondentes citou IA como tendência. Confiabilidade: média — é cobertura da pesquisa da Abragames, não a pesquisa. **Desatualizada** para este tema: os dados são de 2022 e 2023 e estão marcados como tal na seção 3.6.

29. **Fast Company Brasil — "Abragames traça o mapa da indústria brasileira de jogos em momento histórico"** (12/08/2022) — `https://fastcompanybrasil.com/games/abragames-traca-o-mapa-da-industria-brasileira-de-jogos-em-momento-historico/`
    Sustenta: 12.441 pessoas empregadas; 57% no Sudeste; a mudança de censo eventual para mapeamento anual. Confiabilidade: média e **claramente desatualizada** — de 2022. Está aqui porque é a fonte do contexto de distribuição geográfica, e porque a seção 8 registra que quase a tratei como recente.

30. **PC Gamer — "Krafton is now an 'AI-first company'"** — `https://www.pcgamer.com/software/ai/krafton-is-now-an-ai-first-company-will-spend-usd70-million-on-a-gpu-cluster-to-serve-as-the-foundation-for-accelerating-the-implementation-of-agentic-ai/`
    Sustenta: a declaração da Krafton como empresa "AI-first" e o investimento de cerca de US$ 70 milhões em cluster de GPU "para acelerar a implementação de IA agêntica". Confiabilidade: média — a página carregou parcialmente e só extraí o essencial; usei apenas a declaração e a cifra, que são o título da própria matéria. As demais informações que circularam sobre a reorganização estão na seção 12 como não verificadas.

## 12. Anexo — o levantamento bruto

### 12.1 A saída do verificador

Rodado em 12/09/2026 com `python3 references/verificar.py tendencia-npcs-generativos-e-mundos-vivos.md --links`.
Saída inteira, os números e não a palavra "passou":

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 14 (frontmatter diz 14)
efeitos ordem 2: 16 (frontmatter diz 16)
efeitos ordem 3: 12 (frontmatter diz 12)
prazo > horizonte (2036) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 4 [('e1.1.1', 2040), ('e2.1.1', 2037), ('e4.1.1', 2041), ('e8.1.1', 2038)]
confiança ordem 1: alta 9 · media 5 · baixa 0
confiança ordem 2: alta 0 · media 12 · baixa 4
confiança ordem 3: alta 0 · media 0 · baixa 12
links da seção 11: 30/30 respondem (frontmatter diz fontes: 30)
RESULTADO: ok
```

Leitura dos números: as doze seções literais e os dezoito campos do frontmatter estão presentes; as contagens declaradas (3 raízes, 14 efeitos de 1ª ordem, 16 de 2ª, 12 de 3ª) batem com o bloco `roda:`; nenhum efeito de 1ª ou 2ª ordem passa do horizonte de 2036, e **quatro efeitos de 3ª ordem passam** (`e2.1.1` em 2037, `e8.1.1` em 2038, `e1.1.1` em 2040 e `e4.1.1` em 2041), declarados na prosa da §5.1 conforme a regra. Esses quatro são o resultado da conferência de teto da §7.10, e não estavam na primeira versão: ela saía com **zero fora da janela**, que era o sinal de compressão e não de calibração. A distribuição de confiança cai monotonicamente com a ordem (9 altas na 1ª, nenhuma na 2ª, nenhuma na 3ª), e os trinta links da seção 11 respondem.

### 12.2 Premissas assumidas onde o briefing não cobriu

O briefing veio completo nos sete itens da entrevista da skill (horizonte, público, recorte, descartes, raiz suspeita, viés, zona de interesse), e por isso **não houve rebaixamento de confiança por ausência de entrevista**. O que o briefing não cobriu e eu assumi, declarado aqui conforme o §0:

1. **"Quem projeta mídia e interação" inclui quem projeta fora de jogos.** Sem isso, `e1.1.1` (vazamento da métrica para atendimento e educação) estaria fora de escopo. Com isso, ele entra — e é o efeito mais frágil do mapa, o que é coerente.
2. **"O que já é comum em produto de massa" foi operacionalizado** como o corte em *maioria* na escala de difusão do §2 da skill. A alternativa seria cortar em "adoção precoce", o que teria excluído a raiz A inteira. Registrei a escolha porque ela decide o mapa.
3. **O recorte brasileiro é de base instalada e custo**, não de mercado consumidor. Um mapa focado em consumo brasileiro derivaria efeitos completamente diferentes (preço, monetização, acesso), e seria legítimo — não é este.
4. **"Ideias óbvias a excluir: as que servem para qualquer tema"** foi aplicado literalmente contra a lista de proibidos do §3 da skill, e derrubou `e15` (ver 7.8).
5. **O falseador declarado no briefing** ("evidência de que a adoção já passou da maioria inicial, ou de que a tecnologia não rompe nada") foi convertido em dois critérios da bateria: as recusas de maturidade da seção 3.7 (nenhuma raiz passou da maioria) e a razão 1 do pré-mortem (a hipótese de que não rompe nada e fica confinada a um gênero).

### 12.3 Os efeitos cortados, com o motivo

**`e9.2` — "Jogadores abandonam o gênero de mundo persistente por exaustão de compromisso."**
Valores de trabalho: ordem 2, sinal fraco, prazo 2032, confiança baixa, pai `e9`.
Motivo do corte: falha em duas regras ao mesmo tempo. Não tem mecanismo próprio — "as pessoas se cansam" não é mecanismo — e **contradiz o pai**: `e9` descreve a acomodação do desenho (persistência limitada, esquecimento projetado), que é exatamente a resposta da indústria ao problema que `e9.2` supõe não resolvido. Se `e9` acontece, `e9.2` não precisa acontecer. Mantido aqui porque a intuição por trás dele — a de que compromisso com personagem é custo emocional — tem apoio no dado de Hsu e colegas e pode reaparecer num mapa melhor formulado.

**`e15` — "Surge a profissão de diretor de elenco de IA."**
Valores de trabalho: ordem 1, sinal fraco, prazo 2031, confiança baixa, raiz C.
Motivo do corte: é literalmente um dos quatro efeitos que a skill proíbe sem nome e mecanismo específicos ("surge uma nova profissão"). A frase serve para qualquer tema de qualquer mapa. O que havia de aproveitável nela — a existência de uma função nova com autoridade — está em `e1.1`, que tem mecanismo (medir distribuição exige quem leia distribuição), precedente de classe (trust and safety), autoridade definida (barrar build) e um incidente de referência datado (o banimento da Neuro-sama em 11/01/2023).

**Um terceiro efeito considerado e nunca escrito:** "os cursos de design de jogos reorganizam o currículo em torno de especificação de restrição". Não entrou porque é o primeiro da lista de proibidos da skill, e porque a única forma de torná-lo específico seria nomear a minha própria disciplina — o que é o viés 3 da seção 7.7 operando sem disfarce.

### 12.4 As fronteiras deliberadamente não cruzadas

- **Modelos de mundo jogáveis** (Muse, da Microsoft, e congêneres). Excluídos por recorte: ali o ambiente é gerado quadro a quadro e o objeto é o mundo, não o personagem autônomo dentro de um mundo com regras. É tema vizinho e merece mapa próprio; a intersecção interessante — o que acontece quando o mundo é gerado **e** o personagem é agente, e não existe mais estado canônico algum — fica anotada como lacuna deste mapa.
- **Simulação social como método científico** — tema 6 da disciplina. Toquei nele apenas em `e10.1.1`, e declarei o toque.
- **História gerada, coautoria narrativa, novela visual a partir de uma frase** — tema 8. Toquei em `e6.1` (a biografia divergente como objeto de conversa) e não fui além.
- **Companheiro digital** — tema 19. É a fronteira mais porosa: `e12`, `e14` e `e14.1` estão exatamente em cima dela, e o wildcard 2 depende de ela ser atravessada. Declarado em vez de disfarçado.
- **Uso de IA generativa em produção de arte e áudio de jogos.** Excluído por maturidade e por ser outro objeto; aparece só como contexto numérico (os ~60% de uso em arte visual do levantamento da Steam) e como retroação em `e13`.

### 12.5 O que eu não consegui abrir, e portanto não citei

Registrado para que ninguém suponha que foi omissão:

- **SAG-AFTRA, página oficial do 2025 Interactive Media Agreement** (`sagaftra.org`) — HTTP 403. Também 403: a página oficial de aprovação pelos membros. Consequência: as cifras de **taxa de sessão a cada 300 falas geradas** e **7,5× o mínimo para geração em tempo real**, que apareceram em resultados de busca (Slator, Variety, AI Trace), **não entraram no documento**. Ficam aqui como não verificadas. Quem retomar este mapa deve buscá-las na fonte primária antes de usá-las.
- **Slator — "Voice Actors to Vote on New Video Game Agreement"** — HTTP 403.
- **Davis+Gilbert LLP — "SAG-AFTRA's New Video Game Agreement"** (`dglaw.com`) — **abriu para leitura e devolve 403 a acesso automatizado.** Confirma a exigência de consentimento "separado, escrito, claro e visível, razoavelmente específico", a categoria própria de geração em tempo real e o gatilho da identificabilidade objetiva do intérprete — e diz explicitamente não conter os valores. Como reprova na checagem de links da seção 12.1, foi substituída na lista de fontes pela entrada enciclopédica do conflito, que sustenta os mesmos fatos com data e percentual. Registro a leitura aqui para que a informação não se perca.
- **Forbes e CNBC sobre a decisão da Character.AI** — HTTP 403 em ambos. Resolvido: usei o anúncio oficial da própria empresa (fonte 22), que é melhor para o fato e pior para o contexto de pressão externa. O contexto que ficou de fora e que eu não verifiquei: o inquérito da FTC de setembro de 2025 sobre sete empresas de chatbot e as ações judiciais individuais citadas na imprensa.
- **Valve / Steamworks, página de política de conteúdo de IA** — tentada em `partner.steamgames.com` (duas URLs) e na notícia do grupo Steamworks; nenhuma retornou o texto da política. Consequência: a mudança de formulário de **16/01/2026** e a existência de um sistema de denúncia de conteúdo gerado por IA, que apareceram em cobertura secundária, **não são afirmadas neste documento**. O que eu afirmo sobre a Steam vem do texto de disclosure que consta nas páginas de loja dos jogos citados (fontes 5, 8 e 9), que é evidência direta de que o mecanismo existe e do que ele pede.
- **PC Gamer sobre a Krafton** — carregou truncada; extraí apenas o essencial (fonte 30). Não verificados e não citados: o programa de demissão voluntária semanas depois do anúncio, o valor de 130 bilhões de wons e o prazo de conclusão no segundo semestre de 2026.
- **arXiv 2604.10107 em PDF** — o extrator devolveu binário; resolvido pela página de resumo (fonte 17).
- **Comunicado de imprensa do NEO NPC em PDF** (`staticctf.ubisoft.com`) — extrator devolveu binário; resolvido pela matéria institucional da Ubisoft (fonte 13).
- **Abragames, página institucional** — não contém os dados da pesquisa; resolvido por cobertura secundária (fontes 28 e 29), com a ressalva de desatualização registrada.

### 12.6 As buscas que não deram em nada

- **Consumo energético de simulação persistente de jogo.** Nenhum número, em nenhuma das fontes, inclusive nas de fornecedor. Virou a categoria STEEP vazia de 5.3 e o sinal fraco 3 da seção 6.
- **Custo por hora-jogador de NPC agêntico em jogo enviado.** Só apareceram números de GPU-hora e de custo por token, em páginas de fornecedor e de agregadores de preço. A única cifra de custo por sessão que encontrei é a analogia da Jam & Tea ("um ingresso da Disneylândia") — que é vívida e não é número.
- **Incidente público de moderação com NPC generativo em jogo enviado.** Procurei por remoção de jogo da Steam, patch de emergência ou escândalo envolvendo saída de NPC. Não achei nenhum caso documentado. O caso análogo mais próximo é o banimento da Neuro-sama da Twitch em 11/01/2023 — que é streaming, não jogo. **A ausência é informativa:** ou a contenção está funcionando, ou os jogos com NPC generativo ainda são pequenos demais para produzir incidente noticiável. Provavelmente a segunda.
- **Dados brasileiros de 2025 ou 2026 sobre indústria de jogos.** Circulam números (1.042 estúdios em 2024, R$ 12,7 bilhões em 2025) em resultados de busca que não consegui rastrear até a publicação original. Não usei. Os números da seção 3.6 são de 2022 e 2023, com a data declarada.
- **Benchmark independente das "8 a 13 microdecisões por segundo" da NVIDIA.** Nada. É afirmação de fornecedor sem contraprova pública, e está marcada como tal na seção 8, item 2.
- **Estudo sobre retenção de jogador em jogos com NPC de memória persistente.** Nada publicado. É o dado que decidiria entre o cenário provável e o indesejável da seção 9, e ele não existe publicamente — o que, dado que os fornecedores certamente o têm, é ele próprio um sinal.

### 12.7 Caminhos abandonados na construção deste mapa

**Uma quarta raiz que não sobreviveu: "o jogo deixa de ser testável e a verificação vira estatística".** Era atraente e é falsa como raiz: não é uma ruptura autônoma, é consequência direta da raiz A. Virou `e1`. O teste que a derrubou foi o §6.4 — sem a raiz A, ela simplesmente não existe.

**Uma quinta que também caiu: "o NPC vira interface do jogo inteiro, e menus desaparecem".** Caiu no teste de especificidade: a frase serve igualmente para assistentes de voz, para agentes de sistema operacional e para qualquer produto com linguagem natural. Não é sobre personagem autônomo em mundo com regras; é sobre interface conversacional, que é outro tema e maduro.

**Uma tentação de estrutura que recusei.** O enunciado do tema oferece três perguntas prontas (1ª, 2ª e 3ª ordem) e seria cômodo montar a roda em cima delas. Não fiz, por dois motivos: as perguntas do enunciado misturam ordens (a "relação com o personagem" é efeito de persistência, não de agência) e organizar o mapa por pergunta produz uma roda que responde ao professor em vez de derivar da evidência. As três perguntas estão respondidas, mas distribuídas: "como se testa" em `e1` e no experimento; "o jogo vira relação" em `e6`, `e12` e `e14.1`; "o gênero sobrevive" no wildcard 3 e no cenário provável.

**A tentação de usar os projetos citados no enunciado do tema como evidência.** `Eastshore`, `Vantage Digital Labs`, `PastPort` e `Skyvern` aparecem na varredura da turma e **não foram verificados nesta rodada** — não abri nenhum deles. Por isso não aparecem em lugar nenhum do corpo do documento. `Thistle Gulch`, `opengameagent` e `Retail Mage` aparecem porque eu os abri.

### 12.8 Notas de método sobre esta rodada

- **Buscas realizadas:** 22, em português e inglês, cobrindo produto comercial, pesquisa acadêmica, economia de inferência, regulação, reação profissional, preservação, comunidade de jams e recorte brasileiro. O mínimo da skill é oito.
- **Páginas efetivamente abertas e lidas:** 36 tentativas, 30 bem-sucedidas e citadas, 6 falhas por HTTP 403 ou extração corrompida (listadas em 12.5).
- **Nenhuma fonte foi citada de memória.** Onde a memória sugeria um fato relevante que não consegui abrir — as cifras da SAG-AFTRA, a data da mudança do formulário da Steam, o contexto regulatório da Character.AI —, o fato ficou fora do corpo e entrou aqui.
- **Ordem de trabalho:** âncora no presente antes de qualquer efeito; critério de maturidade aplicado a sete candidatos, dos quais quatro recusados por maturidade e um por recorte; três raízes; roda construída de baixo para cima a partir dos mecanismos, não de cima para baixo a partir das conclusões; bateria da seção 7 aplicada ao mapa pronto, com quatorze alterações registradas e duas remoções; contagens do frontmatter conferidas contra o bloco YAML pelo verificador.
- **O que uma segunda rodada deveria fazer primeiro:** (a) recuperar as cifras da SAG-AFTRA na fonte primária; (b) medir, numa amostra de jams de itch.io, a proporção de projetos que usam ações tipadas contra texto livre — é o sinal fraco 1 e custa uma tarde; (c) procurar o primeiro rascunho do código de conduta europeu de fim de vida, previsto para o fim de 2026, e verificar se menciona estado de personagem — é o sinal fraco 5 e tem prazo.
