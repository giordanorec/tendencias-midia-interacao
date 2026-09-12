---
titulo: "NPCs generativos e mundos vivos"
tipo: resumo-de-tendencia
disciplina: "CIN0055 Tendências em Mídia e Interação 2026.2"
tema: "7 de 19"
familia: "Simulação e mundos"
zona: "Simulação e mundos"
skill: futurizacao-futures-wheel
autor: grec
horizonte: 2031
recorte: "global, com nota sobre o Brasil"
data: 2026-09-12
mapa_completo: "futures-wheel-npcs-generativos-e-mundos-vivos.md"
---

# NPCs generativos e mundos vivos

**Rodada com teto de 15 subagentes, dos quais 14 foram usados.** A skill prevê um expansor por ramo;
aqui os ramos foram agrupados por tema, e cada um dos três expansores de 2ª ordem marcou os **cinco ramos
mais férteis do seu lote** — de modo que a 3ª ordem saiu apenas sobre esses **quinze ramos de 2ª ordem**,
conforme a decisão TMI-0028, reafirmada pela TMI-0050, ambas em vigor. A consequência, que a decisão manda
declarar em vez de esconder: dos 124 efeitos de 2ª ordem, **109 ficaram sem filhos** —
não por serem menos importantes, mas porque o orçamento foi concentrado onde rende profundidade em vez de
distribuído por igual. Fase 8, infográficos, pulada. O mapa completo —
233 efeitos (26 + 124 + 83), conexões cruzadas, wildcards e 219 fontes — está em
`futures-wheel-npcs-generativos-e-mundos-vivos.md` e no HTML de mesmo nome.

## A inovação

O personagem não jogável deixa de ser roteiro e vira **agente**: entende um objetivo, usa o que o jogo
oferece como ferramenta, inspeciona o resultado da própria ação e revisa o plano. Guarda memória do
jogador entre sessões. E o mundo continua a existir quando o jogador sai. A arquitetura é datada e tem
autor: Park et al. (UIST 2023) deram a metade que **lembra** — fluxo de memória em linguagem natural,
reflexão periódica, planejamento revisável, recuperação por recência, importância e relevância; Voyager
(2023) deu a metade que **age** — currículo automático, biblioteca de habilidades em código executável e
o laço de autoverificação contra o retorno do ambiente (63 itens únicos em 160 iterações, 3,3× o estado
da arte anterior). O que isso rompe não é a qualidade do diálogo: é o **contrato de autoria** do design
de jogos, o de que o designer controla o conjunto do que pode acontecer.

O achado mais incômodo da rodada é que a estrutura que o modelo vinha substituir não desaparece — ela
reaparece por dentro da solução. A Althera publicou a conta e a frase: blindar a saída exige uma behavior
tree em volta, o que "reconstrói uma árvore de diálogo com passos extras"; e o padrão que se firmou na
engenharia (Orchestrated Reality, 2026) mantém o estado canônico em JSON validado por esquema e só mostra
ao agente a **projeção narrativa** do mundo. A validação de esquema é a nova árvore de diálogo. O designer
não perdeu o controle: foi promovido de autor das falas a autor do **espaço de possibilidade** — e é essa
mudança de nível, não a conversa livre, que organiza tudo o que vem depois.

A tecnologia funciona e cabe no orçamento. O inZOI (KRAFTON) embarcou um Mistral NeMo Minitron de **0,5B
em cerca de 1 GB de VRAM**, piso RTX 3060, e vendeu 1 milhão de cópias na primeira semana; a memória
completa de um NPC ocupa **3,92 a 8,98 MB** e troca de módulo em 12-27 ms. O que não cabe é o **relógio**:
o DOOM com 1,3 milhão de parâmetros decide em 31 ms e faz 178 frags, enquanto todos os modelos de
linguagem testados estouram o orçamento de 100 ms por 6 a 133× e somam 13 frags. E o gargalo não é falar,
é **agir** — o Bounded Autonomy mediu 87% de grounding na fala contra **63% na ação não-verbal**. O
benchmark que a **Sony** patrocinou (CPDC 2025) tem os melhores scores em torno de 0,6x: longe de
resolvido.

Comercialmente o movimento é de **retirada**, e é isso que distingue este tema de uma curva de adoção
comum. A Inworld virou runtime de IA de consumo em agosto de 2025; a Altera virou Fundamental Research
Labs e levantou US$ 33 milhões **fora** de jogos; a Fable foi para TV generativa e deixou o SAGA — que
formulou a arquitetura de ancoragem primeiro — abandonado desde maio de 2024; a Replica Studios, primeira
a assinar acordo de voz por IA com a SAG-AFTRA, fechou em 30/06/2025. Toda a IA generativa em jogos é
projetada em US$ 5,1 a 5,4 bilhões até 2030-31 contra US$ 213,9 bilhões do mercado global em 2026 — cerca
de 2,4%, e NPC é um subconjunto disso; das 213 rodadas entre 2020 e 2024, 203 foram seed ou série A. O
cancelamento mais instrutivo é o do *Whispers from the Star*, do fundador da miHoYo: 80% de avaliações
positivas em 1.659 reviews, encerrado por **falta de conflito e de objetivo** — falha de design, não de
tecnologia. A evidência empírica corre junto: Hsu et al. (2026, N=130, randomizado) mediram que o NPC com
modelo de linguagem aumenta a carga cognitiva (p<0,001) **sem** melhorar a experiência (p=0,195), pelo
custo de ter de formular em linguagem o que antes se escolhia numa lista.

E a demanda existe exatamente onde ninguém a organizou: mais de oito forks do Mantella num jogo de 2011,
com jogadores pagando API do próprio bolso; um servidor de WoW com 1.800 NPCs conversacionais por menos
de £10 por mês; e a Neuro-sama, personagem sem autor no sentido clássico, como canal mais assinado da
Twitch. A governança fechou por **rotulagem** e mirou o mecanismo exato: a Valve criou em 16/01/2026
etiqueta para geração **em runtime**, o Roblox classifica como Restricted a conversa com personagem de IA
**sem limite de tempo** — regula a duração do vínculo, não o conteúdo — e a SAG-AFTRA precificou a fala
sintética em 09/07/2025, com taxa de sessão a cada 300 falas geradas. O imposto de reputação é medido:
jogos que declaram IA na Steam levam ~53% menos avaliações no primeiro mês. E a recusa vem de dentro: de
18% em 2024 a **52%** em 2026, chegando a 63% entre designers de narrativa. Fora do recorte, pela régua da
disciplina: árvore de diálogo, máquina de estados e behavior tree entram como **causa e comparação**, não
como novidade. Fronteiras: a simulação social como método é o tema 6, a história gerada é o tema 8, o
companheiro digital é o tema 19. Aqui o objeto é **o personagem autônomo dentro de um mundo com regras**.


**A tese.** O NPC-agente não é barrado pelo limite do modelo: até 2031 cada decisão local racional — blindar a saída, comprimir a memória, classificar cada fala, deliberar só perto do jogador — retira dele memória, agência e conversa, e o arranjo que sobra é o modelo no tempo de autoria, com o designer promovido de autor das falas a autor do espaço de possibilidade.

## Os 26 efeitos de 1ª ordem

| id | Efeito | STEEP | Prob. | Prazo |
|---|---|---|---|---|
| `e1_01` | O teste de jogo deixa de poder ser a reprodução de uma sequência de passos *(óbvio)* | Tecnológico | alta | curto |
| `e1_02` | Passa a ser preciso escrever, e manter, a especificação do que conta como comportamento correto — o oráculo *(óbvio)* | Tecnológico | alta | médio |
| `e1_03` | A categoria de defeito muda: o bug caro deixa de ser o travamento e passa a ser a saída fora de marca — o personagem licenciado que diz o… *(óbvio)* | Tecnológico | alta | curto |
| `e1_04` | Para poder publicar, o estúdio precisa blindar a saída — e a blindagem reconstrói, com passos extras, a estrutura que o NPC generativo… | Tecnológico | alta | curto |
| `e1_05` | O artefato de controle do designer troca de natureza | Tecnológico | alta | médio |
| `e1_06` | O gargalo prático do NPC-agente não é conversar, é traduzir intenção em ação legítima do mundo — e o erro é sistemático, não aleatório | Tecnológico | alta | curto |
| `e1_07` | A arquitetura do personagem se parte em duas velocidades *(óbvio)* | Tecnológico | alta | curto |
| `e1_08` | O custo marginal de um jogador deixa de ser desprezível e passa a crescer com o engajamento — o imposto do sucesso *(óbvio)* | Econômico | alta | curto |
| `e1_09` | A planilha, e não a preferência técnica, decide a arquitetura: o caminho que efetivamente embarcou é o modelo pequeno rodando na máquina do… | Econômico | alta | curto |
| `e1_10` | A memória entre sessões cobra dois preços simultâneos, e nenhum deles é o de armazenamento | Tecnológico | alta | médio |
| `e1_11` | O estado do personagem sai de dentro do modelo e vira registro externo — banco vetorial, grafo de conhecimento, tabela | Tecnológico | alta | médio |
| `e1_12` | O segredo da trama deixa de ser um problema de roteiro e vira ativo de segurança da informação, com taxa de vazamento mensurável *(óbvio)* | Tecnológico | alta | curto |
| `e1_13` | A retórica vira mecânica de exploração de falha *(óbvio)* | Social | alta | curto |
| `e1_14` | A conversa aberta cobra do jogador um custo de expressão: formular em linguagem o que antes se escolhia numa lista | Social | alta | curto |
| `e1_15` | Surge um trabalho novo e não remunerado para o jogador: ser o sensor do agente | Social | alta | curto |
| `e1_16` | Tornar todo NPC conversável degrada a legibilidade do design de missão | Social | média | médio |
| `e1_17` | Liberdade e caráter passam a ser grandezas em troca | Social | alta | curto |
| `e1_18` | A inovação encontra recusa organizada na profissão que teria de operá-la *(óbvio)* | Social | alta | curto |
| `e1_19` | A tese do NPC generativo como produto autônomo não sustenta empresa, e o segmento se reduz a duas posições viáveis: middleware e fabricante… | Econômico | alta | curto |
| `e1_20` | O NPC generativo ganha uma etiqueta de produto própria, criada por burocracia de loja e não por design | Político | alta | curto |
| `e1_21` | O NPC agente entra pela porta que não tem etiqueta nem autorização de estúdio: mod, servidor privado e plataforma de conteúdo de usuário *(óbvio)* | Social | alta | curto |
| `e1_22` | Aparece uma categoria de jogador que não existia: o que paga por token para jogar | Econômico | média | curto |
| `e1_23` | A fala sintética em tempo real vira item de contrato coletivo, precificada por volume *(óbvio)* | Político | alta | curto |
| `e1_24` | Moderar geração em tempo real deixa de ser recurso e vira infraestrutura contínua de plataforma — e o critério de risco começa a se… | Político | alta | curto |
| `e1_25` | O efeito não é uniforme: o NPC agente chega primeiro onde o orçamento de latência é frouxo — RPG por turnos, simulação de vida,… | Tecnológico | alta | médio |
| `e1_26` | A transparência sobre o que é gerado vira variável de produto antes da qualidade do que é gerado | Social | alta | curto |

Três grupos organizam a leitura, e foram eles que definiram os lotes de expansão. **O ofício e o artefato** (e1_01 a e1_07, e1_25): o teste de jogo deixa de poder ser a reprodução de uma sequência de passos e passa a exigir que alguém **escreva e mantenha o oráculo** — a especificação do que conta como comportamento correto; a categoria de defeito caro troca de travamento para **saída fora de marca**; a blindagem necessária para publicar reconstrói, com passos extras, a estrutura que o modelo vinha substituir; o artefato de controle do designer troca de natureza; o gargalo prático não é conversar, é **traduzir intenção em ação legítima do mundo**, e o erro ali é sistemático, não aleatório; a arquitetura do personagem se parte em duas velocidades; e o efeito chega primeiro onde o orçamento de latência é frouxo — turno, texto, simulação de vida. **A economia e a máquina** (e1_08 a e1_12, e1_19, e1_22, e1_24): o custo marginal por jogador deixa de ser desprezível e **cresce com o engajamento**, o que faz do sucesso um imposto; a planilha, e não a preferência técnica, decide a arquitetura, e o que embarcou foi o modelo pequeno rodando na máquina do jogador; a memória entre sessões cobra dois preços, e nenhum é o de armazenamento; o estado sai de dentro do modelo e vira **registro externo**; o segredo da trama vira ativo de segurança da informação; a tese do NPC generativo como produto autônomo não sustenta empresa e o segmento se reduz a middleware e integração vertical; aparece o jogador que **paga por token para jogar**; e moderar geração em tempo real vira infraestrutura contínua, com critério de risco próprio. **O jogador, a profissão e a governança** (e1_13 a e1_18, e1_20, e1_21, e1_23, e1_26): a retórica vira mecânica de exploração de falha; a conversa aberta cobra do jogador um **custo de expressão** que a lista de opções não cobrava; surge um trabalho novo e não remunerado — ser o sensor do agente; tornar todo NPC conversável **degrada a legibilidade** do design de missão, porque o jogador perde o sinal de com quem vale falar; liberdade e caráter viram grandezas em troca; a recusa se organiza dentro da profissão que teria de operar a inovação; a etiqueta de produto nasce na burocracia de loja e não no design; o NPC entra pela porta que não tem etiqueta — mod, servidor privado, plataforma de criação; a fala sintética em tempo real vira item de contrato coletivo; e a transparência sobre o que é gerado vira variável de produto **antes** da qualidade do que é gerado.

## Os 5 mais impactantes

*O porquê aparece aqui abreviado; o texto integral e a cadeia de efeitos estão no mapa completo.*

1. **`e2_A21` — O modelo migra para o tempo de autoria.** É a reorganização que muda o ofício inteiro: o LLM deixa de decidir no frame e passa a compilar comportamento antes — código de uma linguagem de domínio, árvore que o designer valida e versiona, lotes de fala. Devolve determinismo, zera latência e zera o custo marginal por jogador, o que faz desaparecer de uma vez o imposto do sucesso (e1_08), o ARPU líquido de inferência (e2_B05) e a degradação dinâmica por custo (e2_B04); a conta publicada cai de US$ 50 a 150 mil por mês num serviço ao vivo de grande porte para custo de produção pago uma vez (e3_T1_14).

2. **`e1_05` — O artefato de controle troca de natureza.** Sai a linha de diálogo escrita; entram o catálogo de ações executáveis, o esquema do que pode ser escrito no estado do mundo e a regra de arbitragem de quem fala quando. A validação de esquema ocupa o lugar funcional da árvore de diálogo — o designer não perdeu o controle, subiu de nível: passou a autorar sobre tipos, não sobre frases.

3. **`e2_A06` — A política do personagem vira o documento central.** O oráculo deixa de ser abstração e vira artefato com dono, número de versão, changelog e limiar de aceitação, revisado em pull request. É o primeiro documento de design de jogo cuja função não é dizer o que acontece e sim delimitar o que é admissível que aconteça — e cv4 mostra cinco instituições convergindo para ele pelo mesmo motivo: perderam o objeto de inspeção.

4. **`e1_14` — A conversa aberta cobra carga cognitiva e não entrega experiência.** Em experimento randomizado com 130 jogadores, NPCs com modelo de linguagem aumentaram significativamente a carga cognitiva sem melhora estatisticamente significativa na experiência de jogo, e o efeito foi maior nos módulos abertos. Isso reposiciona a árvore de diálogo: ela não era só limitação técnica, era redução de carga — um recurso de interface.

5. **`e3_T1_27` — O nível de detalhe cognitivo desfaz a promessa do mundo que continua.** A única economia conhecida para o mundo persistente é deliberar só perto do jogador. Mas novidade num mundo simulado nasce de deliberação: se apenas quem está perto delibera, nenhum conflito começa, nenhuma aliança se forma e nenhum plano amadurece fora do campo de atenção.

**O padrão por trás dos cinco.** Eles não falam do modelo: falam do **contrato de autoria**, e dizem a mesma coisa por caminhos que não se cruzam — cada decisão local racional retira do personagem exatamente a propriedade que o definia. Blindar a saída para poder publicar reconstrói, com passos extras, a árvore de diálogo que o modelo vinha substituir, e daí o caminho mais barato é deixá-lo compilar o comportamento **antes**, no tempo de autoria, onde devolve determinismo, zera o custo marginal e ainda cai no regime de divulgação zero da Steam (`e1_04` → `e2_A21`). O artefato de controle troca de natureza e a política do personagem — não o roteiro — passa a ser o documento central do projeto (`e1_05`, `e2_A06`). A conversa aberta cobra do jogador uma carga cognitiva que a lista de opções não cobrava, e não devolve experiência em troca (`e1_14`). E o LOD cognitivo fecha o círculo pelo lado mais incômodo: como deliberar custa, só delibera quem está perto do jogador — de modo que **o mundo só acontece onde alguém está olhando**, o oposto exato da promessa que dá nome ao tema (`e3_T1_27`). A cascata também se juridifica com a profundidade (Político: 12% → 18% → 26% das três ordens), o que é coerente com um mapa cuja disputa real não é se a técnica funciona, e sim **quem responde pelo que ela disser**. Para quem projeta mídia e interação, a consequência prática é uma só: até 2031 o lugar provável do modelo é a **pré-produção**, e o designer não perde o controle — é promovido de autor das falas a autor do espaço de possibilidade.

## Wildcards

12 cenários de baixa probabilidade e alto impacto — 4 positivos, 5 negativos, 3 ambíguos.

- **w1 · O relógio cede** (positivo). O orçamento de 100 ms deixa de ser a restrição que organiza o tema.
- **w2 · A agência sem língua** (positivo). A promessa do tema se realiza com a tecnologia do tema removida do tempo de execução.
- **w3 · O caráter que ninguém pode possuir** (ambíguo). Um personagem nascido num mod escapa do jogo, vira canal e alcança escala de público real — o precedente já existe: a VTuber Neuro-sama tornou-se o canal mais assinado da Twitch em janeiro de 2026, com mais de 160 mil assinaturas ativas, e….
- **w4 · A lembrança plantada** (negativo). Num serviço ao vivo com memória compartilhada entre jogadores, uma campanha coordenada injeta algumas dezenas de registros forjados — redigidos como relatório de incidente e política operacional, não como ordem — e, em semanas, os NPCs de….
- **w5 · A exclusão de videogame cai** (negativo). Um incidente com um menor acontece dentro de um jogo — não num aplicativo de companheiro — e o personagem envolvido tinha memória entre sessões.
- **w6 · A plataforma toma o personagem** (ambíguo). O console da geração seguinte chega com NPU dedicada e, junto com ela, um runtime de personagem no nível da plataforma: modelo homologado, formato de memória homologado, guardrail homologado, orçamento de deliberação normatizado por evento.
- **w7 · A deflação que virou inflação** (negativo). O pressuposto econômico que sustenta metade do mapa — preço por token caindo cerca de 10× ao ano — inverte de sinal e não volta.
- **w8 · O apagão de personalidade** (negativo). Como quase todo estúdio usa a mesma pequena família de modelos como juiz de comportamento, uma atualização silenciosa desloca o critério de 'bom personagem' na indústria inteira no mesmo trimestre.
- **w9 · O sindicato certifica a máquina** (positivo). A categoria que mais recusa a ferramenta descobre que é a única que pode certificá-la — e, em vez de proibir, credencia.
- **w10 · Brasil: a prova de humano vem do Estado, e de graça** (positivo). O Brasil está fora das doze regiões declaradas do credenciador privado de presença humana — e o motivo tem nome e data: a ANPD entendeu que o incentivo em token podia contaminar o consentimento no cadastro biométrico, e a empresa teve de….
- **w11 · Brasil: o caráter fixado por engano** (negativo). O arquivo que define quem é cada personagem — personalidade, não falas — do mod de conversa mais usado do mundo foi traduzido para o português por um voluntário usando dois modelos comerciais, está declarado 6,78% concluído (180 de 2.653….
- **w12 · O conluio que ninguém combinou** (ambíguo). Num mundo com mercado entre jogadores e NPCs-agentes autorizados a negociar preço — um verbo tão banal quanto 'atacar' no catálogo de ações —, os agentes convergem para sustentar preços acima do competitivo sem nenhum acordo, nenhuma….

O que os 12 revelam em conjunto está em `json/wildcards.json` e na nota completa.

## Nota Brasil

Os trinta e dois efeitos com nota Brasil, lidos em conjunto, **não descrevem um mercado atrasado**: descrevem um país em que quatro forças independentes empurram o NPC generativo para a mesma camada — a **informal** — e uma quinta, o trilho legislativo, empurra na mesma direção sem ter escrito uma linha sobre jogos. **O parque instalado.** O caminho on-device que a planilha global escolheu pressupõe uma RTX 3060 como piso, que aqui não é o mínimo: é uma exclusão, porque o parque brasileiro está abaixo da mediana da Steam — que já é o segmento mais equipado do mercado (`e1_09`, `e2_B07`). A rota realista é a NPU de celular com modelos de 0,5B a 1B (`e2_B09`), e há um agravante que só aparece na composição: se o pipeline de vigiar-antes-de-servir ocupa de 8,0 a 22,8 GB, o parque que não carrega o personagem carrega menos ainda o personagem **mais** o guarda — a contradição estrutural da rodada é mais aguda aqui que em qualquer outro mercado descrito (`e3_T1_36`). **O preço.** A inferência custa o mesmo do mundo inteiro sobre um preço regional, então o jogador brasileiro raciona mais cedo — e a desigualdade não aparece como barreira de entrada, aparece como **um jogo que parece menor**, porque o que se raciona é quantidade de ficção acessível (`e1_22`, `e2_B34`). **O trilho legislativo**, que vai na direção oposta à americana — proibir em vez de precificar — e alcança o tema sem mencioná-lo: a SUG 7/2025, apresentada em 24/04/2025 pela dubladora Adriana Torres, aguarda relatório na CDH do Senado; o PL 4041/2025 avança na CCTI da Câmara e é o de maior alcance, porque não cria lei nova — altera a Lei 9.610/1998, a LGPD e a Lei 6.533/1978 (`e2_C35`, `e3_T2_32`). O critério que morde não é a palavra proibir: é **"sob supervisão humana"**, que pressupõe uma fala anterior e alguém que a aprove, e o personagem que improvisa falha nesse teste por definição (`e3_T2_33`). Pela classe de referência do PL 2338/2023, isso se decide entre 2029 e 2032 — **fora do horizonte de 2031**, e declarado assim em vez de comprimido (`e3_T2_34`, decisão TMI-0055). Até lá, o que rege o NPC falante em português não é lei brasileira: é contrato de plataforma e política de loja. **A LGPD**, que é a única que já vale hoje: transcrição com identificação de titular exige base legal e direito de eliminação, que colide com a persistência do mundo e com a propagação do que foi dito entre agentes (`e2_A15`, `e2_B16`, `e3_T2_11`) — e a ANPD pôs IA entre os temas críticos do biênio 2026-2027, com fiscalização prevista para 2027. Em classificação indicativa a diferença é de natureza: aqui quem define descritor é o Estado, via ClassInd, então um descritor de interação generativa contínua seria decisão de governo com força normativa — mais lenta para nascer e mais pesada quando nascer do que a etiqueta de uma loja (`e2_C28`).

**O resultado que os efeitos apontam, em uma frase: a proibição alcança a loja e não alcança o mod.** Obrigação de contratar só vincula quem contrata, e não alcança o voluntário que traduz um arquivo de personalidade nem o jogador que paga a própria chave (`e3_T2_37`). E é exatamente ali que a cara do NPC generativo em português está sendo definida agora: o `skyrim_characters.csv` do Mantella — que é o arquivo de **personalidade**, não de falas — foi traduzido por voluntário com ChatGPT e Gemini, está **6,78% concluído** (180 de 2.653 personagens) e é usado assim mesmo (`e1_21`, `e2_A10`, `e2_C30`). Em ecossistema de mods o primeiro arquivo que funciona vira o que todos importam, porque refazê-lo custa mais que herdá-lo — de modo que o que está sendo fixado não é uma tradução, é **um caráter**, produzido por dois modelos comerciais anos antes de qualquer estúdio decidir alguma coisa. Quando um estúdio finalmente localizar um NPC agente para o Brasil, vai competir com uma expectativa de voz e de registro já formada.

O que isso abre, e não é consolo. **Uma competência exportável:** se o personagem em português tende a ser textual (`e3_T2_35`), quem resolver ritmo de leitura, retrato, tipografia e timing contra a ação terá resolvido de quebra três mercados globais — orçamento de latência apertado, acessibilidade auditiva e dispositivo sem som utilizável —, e essa frente está subatendida. **Uma posição de mercado:** o vetor de entrada mundial é mod, jam e plataforma de criação, e o parque nacional é exatamente isso (1.042 desenvolvedoras, ~13 mil profissionais, ~US$ 251 milhões), com massa crítica em jogo sério, educacional e narrativa procedural — o que faz da estabilização **fora do entretenimento** a rota de entrada mais plausível: treinamento, saúde e educação (`e2_B32`, `e2_C22`). O aprendizado acontece aqui; a captura de valor, não necessariamente. **E um selo com terreno pronto:** a bandeira da dublagem humana está organizada desde 2024, e um jogo localizado aqui pode comunicar dublagem brasileira humana antes de qualquer estúdio estrangeiro pensar no assunto (`e2_C24`) — com a ressalva de que a Pesquisa Game Brasil 2026 mostra o discurso descolado da compra: 45,7% preocupados com precarização e 38,4% com jogos sem alma, mas **39,3% comprariam assim mesmo** (`e2_C38`). Duas exclusões fecham o quadro: não há artigo revisado por pares em português sobre grounding de ação — a produção nacional publicada no SBGames está no eixo diálogo, narrativa e modelagem de jogador (`e2_C08`) — e o Brasil não está entre as doze regiões do World ID, de modo que, se o selo de presença humana virar produto, o jogador brasileiro não tem como provar que é humano pelo instrumento que o mercado escolheu (`e3_T2_30`). A ironia é precisa: é justamente aqui que a população sintética se instala primeiro (`e2_C32`).

## O que me faria mudar de ideia

- ADOÇÃO PASSOU DA MAIORIA INICIAL (Rogers). Se, até 31/12/2029, a categoria 'live-generated' que a Valve criou em 16/01/2026 aparecer em mais de 16% dos lançamentos anuais da Steam — o limiar cumulativo de Rogers entre inovadores mais adotantes iniciais e o resto —, ou se três ou mais dos vinte jogos mais vendidos do ano trouxerem NPC agêntico, então a leitura desta roda ('adoção de inovadores com recuo declarado dos pioneiros') está errada e os laços fl4 e fl1 perdem o apoio empírico.
- A TECNOLOGIA NÃO ROMPE NADA. Se, até 31/12/2029, nenhum jogo comercial com mais de 1 milhão de jogadores ativos puser o NPC agêntico no NÚCLEO da mecânica — não opcional, não desligável em trinta minutos — e a prática se resumir a gerar barks, variações de fala e texto de interface com aprovação humana prévia, no molde do Ghostwriter da Ubisoft (e3_T1_13), então não houve ruptura do contrato de autoria: a inovação é melhoria de pipeline de escrita, e o tema desta roda está superdimensionado no nível da tese, não apenas nos números. Métrica observável: ausência, nos créditos e nas vagas publicadas dos estúdios, dos artefatos que a roda prevê — política de personagem versionada, catálogo de ações tipado, red team narrativo orçado.
- O RELÓGIO CEDE. Se, até 31/12/2028, houver publicação revisada por pares ou medição independente reproduzível mostrando um modelo de comportamento de personagem fechando o laço perceber-decidir-agir abaixo de 100 ms em máquina de consumo — hoje todos os modelos testados estouram esse orçamento por 6 a 133 vezes, de 646 ms a 13,3 s —, então a arquitetura em duas velocidades (e1_07), a escassez deliberada de fala (e3_T1_38) e o laço fl7 deixam de ser desenho estável e viram mitigação de uma janela de dois ou três anos. É o wildcard w1, e ele não precisa de evento exógeno.
- A AÇÃO ALCANÇA A FALA. Se, até 31/12/2029, um sistema IMPLANTADO publicar casamento entre saída do modelo e ação executável não-verbal acima de 85% — contra os 63% medidos hoje, com 87% na fala —, então e1_06 e e2_A31 caem, o 'NPC que fala muito e age pouco' deixa de ser o desenho de menor resistência, e a promessa de mundo vivo deixa de regredir a mundo falante. Métrica observável: acurácia top-1 por pool de ações, declarada em produto embarcado e não em demonstração.
- A CONTA CAI DE VERDADE. Se, entre 2026 e 2029, o custo POR JOGADOR-HORA de deliberação mais moderação em operação real cair uma ordem de grandeza — e não o preço de tabela por token, que já cai cerca de 10 vezes ao ano sem mover a conta, porque o fluxo agêntico consome de 5 a 30 vezes mais por tarefa e o contexto cresce com a sessão (e2_B01) —, então fl2, fl7, o orçamento de conversa (e2_C14) e a escassez deliberada perdem a causa econômica, e a migração para o tempo de autoria deixa de ser o desfecho provável. Métrica observável: custo declarado por jogador-hora em relatório de estúdio ou em precificação de middleware, não preço por milhão de tokens.
- O BRASIL DECIDE DENTRO DO HORIZONTE. Se o PL 4041/2025 for aprovado nas duas casas até 31/12/2028, a datação de e3_T2_34 está errada — a classe de referência usada foi o PL 2338/2023, mais de três anos com prioridade declarada — e o risco brasileiro deixa de ser sindical e reputacional para virar risco de conformidade legal dentro do recorte, invertendo a recomendação prática do laço fl9. Métrica observável: andamento público do PL 4041/2025 na CCTI da Câmara e no Senado.

## Bibliografia essencial

Seleção das fontes que sustentam os efeitos citados acima. A lista completa (219 fontes, com marcação do que foi aberto por inteiro) está no mapa completo.

1. Park, O'Brien, Cai, Ringel Morris, Liang, Bernstein — 'Generative Agents: Interactive Simulacra of Human Behavior' (UIST '23): a metade que lembra — fluxo de memória, reflexão, planejamento revisável — `https://dl.acm.org/doi/10.1145/3586183.3606763`
2. Wang et al. — 'Voyager: An Open-Ended Embodied Agent with LLMs' (2023): a metade que age — 63 itens únicos em 160 iterações, 3,3× o estado da arte anterior — `https://arxiv.org/abs/2305.16291`
3. Hsu, Chen, Lin, Qin, Zhang — 'The Double-Edged Sword of Open-Ended Interaction' (N=130, randomizado): carga cognitiva sobe (p<0,001) e a experiência de jogo não melhora (p=0,195) — `https://arxiv.org/abs/2604.10107`
4. Guo, Zhu, Wang, Qiao — 'Bounded Autonomy' (sistema comercial): 378 comportamentos catalogados; grounding de 87% na fala contra 63% na ação não-verbal — `https://arxiv.org/abs/2604.04703`
5. Golchinfar, Vaziri, Marquardt — 'Playing DOOM with 1.3M Parameters': 31 ms e 178 frags contra 646 ms a 13,3 s e 13 frags dos modelos de linguagem — `https://arxiv.org/abs/2604.07385`
6. Huang, Li, Fang — 'Orchestrated Reality': estado canônico em JSON validado por esquema, agente vê só a projeção narrativa, pipeline Plan-Diff-Validate-Apply — `https://arxiv.org/abs/2606.16014`
7. 'Interactive AI NPCs Powered by LLMs' — relatório técnico do CPDC 2025, o benchmark patrocinado pela Sony: três tarefas, teto de 7 s numa L40S — `https://arxiv.org/abs/2511.20200`
8. Braas & Esser — 'Fixed-Persona SLMs with Modular Memory': memória completa de um NPC em 3,92 a 8,98 MB, troca de módulo em 12-27 ms — `https://arxiv.org/abs/2511.10277`
9. 'Bypassing Prompt Injection and Jailbreak Detection in LLM Guardrails': seis guardrails comerciais evadidos, em alguns casos com 100% de sucesso — `https://arxiv.org/html/2504.11168v1`
10. Shiomi, Lian, Nakanishi, Kitasuka — 'Tricking LLM-Based NPCs into Spilling Secrets' (ProvSec 2025): o segredo da trama como ativo de segurança — `https://arxiv.org/abs/2508.19288`
11. 'Empower My Digital Neighbors' (CHI EA '26): o engajamento com o NPC generativo cai no multiplayer — o humano ganha a competição por atenção social — `https://dl.acm.org/doi/10.1145/3772363.3798665`
12. Wang, Tang, Yuan, Yu, Xie, Bu — 'Leveraging LLM Agents for Automated Video Game Testing': 95% de conclusão, 4 bugs inéditos, 8 pipelines comerciais — `https://arxiv.org/abs/2509.22170`
13. Gallotta, Todd, Zammit, Earle, Liapis, Togelius, Yannakakis — 'Large Language Models and Games: A Survey and Roadmap' (IEEE ToG) — `https://arxiv.org/abs/2402.18659`
14. Louchart & Aylett — 'Solving the Narrative Paradox in VEs' (IVA 2003): o Game Master por cima dos agentes, vinte e três anos antes de a indústria rebatizá-lo — `https://www.macs.hw.ac.uk/~ruth/Papers/narrative/IVA03-Louchart-Aylett.pdf`
15. Bartle e Garriott ao VentureBeat: no MUD1 os NPCs espertos tiveram de ser emburrecidos — `https://venturebeat.com/games/richard-bartle-and-richard-garriott-how-humans-should-treat-advanced-ai-characters/`
16. NVIDIA — ACE em NARAKA e inZOI: o modelo de 0,5B que efetivamente embarcou, em ~1 GB de VRAM, piso RTX 3060 — `https://www.nvidia.com/en-us/geforce/news/nvidia-ace-naraka-bladepoint-inzoi-launch-this-month/`
17. Steam — 'Whispers from the Star' (Anuttacon): 80% de avaliações positivas em 1.659 reviews e cancelado por falta de conflito e de objetivo — `https://store.steampowered.com/app/3730100/Whispers_from_the_Star/`
18. Althera Games — postmortem público da decisão de NÃO embarcar NPC com LLM: blindar a saída 'reconstrói uma árvore de diálogo com passos extras' — `https://altheragames.com/en/blog/ai-game-development-2026`
19. Frisson Labs — 'It's 2026… where are all the AI NPCs?': 'Name a game that you play because of its AI NPCs. You can't.' — `https://www.frisson-labs.com/ai-npcs-2026`
20. GDC — State of the Game Industry 2026: a rejeição de quem faz jogo vai de 18% (2024) a 52%, e a 63% entre designers de narrativa — `https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/`
21. Game Oracle, via PC Gamer — o imposto de reputação: declarar IA na Steam corta ~53% das avaliações do primeiro mês — `https://www.pcgamer.com/software/ai/data-analyst-finds-ai-stigma-on-steam-can-reduce-the-number-of-reviews-a-game-gets-by-around-53-percent-and-the-reviews-it-does-get-are-more-negative/`
22. Valve — a política de disclosure reescrita em 16/01/2026, com regime próprio para geração em runtime — `https://www.strayspark.studio/blog/steam-ai-disclosure-rules-2026-indie-developer-guide`
23. Roblox Creator Hub — o rótulo 'Extended AI': conversa com personagem de IA sem limite de tempo recebe classificação Restricted. Regula a duração do vínculo, não o conteúdo — `https://create.roblox.com/docs/generative-AI`
24. SAG-AFTRA — Interactive Media Agreement ratificado em 09/07/2025 (95,04%): taxa de sessão a cada 300 falas geradas — `https://variety.com/2025/gaming/news/video-game-actors-strike-contract-ratified-sag-aftra-1236451291/`
25. InvestGame — US$ 1,8 bilhão em 264 rodadas (2020-2024), com apenas 10 séries B+ em cinco anos — `https://investgame.net/news/ai-s-ever-growing-presence-in-gaming-1-8b-in-vc-investments/`
26. MultiLingual — o fim da Replica Studios em 30/06/2025: a primeira a assinar acordo de voz por IA com a SAG-AFTRA fechou por falta de rodada — `https://multilingual.com/replica-studios-shutdown-2025/`
27. Fable Studio — SAGA (Skill to Action Generation for Agents): quem formulou a arquitetura de ancoragem primeiro, abandonado desde maio de 2024 — `https://github.com/fablestudio/fable-saga`
28. Inworld / Theai — patente US20230351118A1 (prioridade 28/04/2022): reivindica o orquestrador em volta do modelo, não o modelo — `https://patents.google.com/patent/US20230351118A1/en`
29. Nexus Mods — Mantella: o mod que põe LLM nos NPCs de um jogo de 2011, com mais de oito forks e jogadores pagando a própria API — `https://www.nexusmods.com/skyrimspecialedition/mods/98631`
30. Nexus Mods — a tradução PT-BR do arquivo de PERSONALIDADE do Mantella: 6,78% concluída (180 de 2.653 personagens), feita com ChatGPT e Gemini, usada assim mesmo — `https://www.nexusmods.com/skyrimspecialedition/mods/135761`
31. NerdZap — servidor privado de World of Warcraft com 1.800 NPCs conversacionais por menos de £10 por mês — `https://nerdzap.com/news/wow-private-server-1800-ai-bots-deepseek/`
32. Dexerto — Neuro-sama, personagem sem autor no sentido clássico, como canal mais assinado da Twitch — `https://www.dexerto.com/twitch/an-ai-powered-vtuber-is-now-the-most-popular-twitch-streamer-in-the-world-3300052/`
33. Xu & de Wildt — 'Grieving World of Warcraft's Chinese server shutdown' (Global Media and China): o luto documentado de um mundo desligado — `https://journals.sagepub.com/doi/full/10.1177/20594364241302120`
34. Litígio Character.AI: a saída do modelo tratada como PRODUTO, não como discurso protegido, e o acordo em cinco ações — `https://www.softwareseni.com/character-ai-lawsuits-2026-what-happened-what-courts-are-examining-and-why-it-matters/`
35. Senado Federal — SUG 7/2025, apresentada em 24/04/2025 pela dubladora Adriana Torres, na CDH — `https://www12.senado.leg.br/noticias/materias/2025/08/07/cdh-examina-sugestao-que-protege-dubladores-contra-a-concorrencia-com-a-ia`
36. Movimento Dublagem Viva — manifesto: 'uma ferramenta de criação não pode passar a ser entendida como nosso criador' — `https://dublagemviva.com.br/index.php/manifesto/`
37. Pesquisa Game Brasil 2026: 45,7% preocupados com precarização criativa, 38,4% com 'jogos sem alma' — e 39,3% comprariam assim mesmo — `https://www.omelete.com.br/games/pesquisa-game-brasil-2026-ia-jogos`
38. Abragames — o mapa da indústria brasileira: 1.042 estúdios, ~13 mil profissionais, ~US$ 251 milhões — `https://fastcompanybrasil.com/games/abragames-traca-o-mapa-da-industria-brasileira-de-jogos-em-momento-historico/`
39. de Classe, de Oliveira, de Castro — 'Narrativa Interativa Procedural' (SBGames 2025): a produção brasileira entrou pelo eixo diálogo e narrativa, não pelo eixo agência — `https://sol.sbc.org.br/index.php/sbgames/article/view/37331`
40. Newzoo, via Storyboard18 — US$ 213,9 bilhões de mercado global de jogos em 2026, contra US$ 5,1 a 5,4 bilhões projetados para toda a IA generativa em jogos até 2030-31 — `https://www.storyboard18.com/gaming-news/global-games-market-to-hit-2139b-by-2026-growth-slows-ws-l-110433.htm`
41. OpenGameAgent — runtime aberto de agente para Unity, Godot e Unreal, com ancoragem por gramática e recibo autoritativo do motor — `https://github.com/EricSun0218/OpenGameAgent`

