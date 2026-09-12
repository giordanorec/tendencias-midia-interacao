---
titulo: "Agentes corporificados, IA física e modelos de mundo"
tipo: resumo-de-tendencia
disciplina: "CIN0055 Tendências em Mídia e Interação 2026.2"
tema: "9 de 19"
familia: "Simulação e mundos"
zona: "Simulação e mundos"
skill: futurizacao-futures-wheel
autor: grec
horizonte: 2031
recorte: "global, com nota sobre o Brasil"
data: 2026-09-12
mapa_completo: "futures-wheel-agentes-corporificados-ia-fisica-e-modelos-de-mundo.md"
---

# Agentes corporificados, IA física e modelos de mundo

**Rodada com teto de 15 subagentes, dos quais 14 foram usados.** A skill prevê um expansor por ramo;
aqui os ramos foram agrupados por tema, e cada um dos três expansores de 2ª ordem marcou os **cinco ramos
mais férteis do seu lote** — de modo que a 3ª ordem saiu apenas sobre esses **quinze ramos de 2ª ordem**,
conforme a decisão TMI-0028, reafirmada pela TMI-0050, ambas em vigor. A consequência, que a decisão manda
declarar em vez de esconder: dos 83 efeitos de 2ª ordem, **68 ficaram sem filhos** —
não por serem menos importantes, mas porque o orçamento foi concentrado onde rende profundidade em vez de
distribuído por igual. Fase 8, infográficos, pulada. O mapa completo —
179 efeitos (34 + 83 + 62), conexões cruzadas, wildcards e 315 fontes
(85 abertas por inteiro) — está em `futures-wheel-agentes-corporificados-ia-fisica-e-modelos-de-mundo.md` e no HTML de mesmo nome.

## A inovação

A IA sai da tela e ganha corpo — robô, drone, carro —, e o lugar onde ela aprende deixa de ser um simulador
escrito à mão para ser **um mundo que outro modelo gera**. Três elos que em 2026 passaram a ser o mesmo
objeto: o **modelo de mundo gerativo** (o Cosmos 3 da NVIDIA, omnimodal, gera texto, imagem, vídeo, áudio
**e ação** do mesmo tronco, e foi o melhor policy model no RoboArena; o Genie 3 do DeepMind gera mundo
jogável a 720p; o Marble da World Labs exporta ativo 3D editável); a **política VLA** que atravessa corpos
(π0 e openpi, GR00T N1.7 com tags de corpo explícitas); e o **agente generalista** (o SIMA 2 usa o Gemini
para gerar a própria tarefa e a própria recompensa num ambiente que nunca viu). Embaixo, a física virou bem
comum: o Newton — motor em GPU sobre NVIDIA Warp — foi doado por Disney Research, DeepMind e NVIDIA à Linux
Foundation e chegou à 1.0 no GTC 2026. Três concorrentes diretos mantendo um motor comum sob fundação neutra
é o sinal de que ninguém espera mais ganhar dinheiro vendendo integração de contato rígido. **O valor migrou
para cima, para o modelo.**

O que rompe não é o robô ficar melhor — é **o mundo virar o produto**. Quem gera o ambiente escolhe o que o
agente vai considerar normal, e essa escolha não é auditável por quem opera o robô. A aritmética que empurra
isso é de custo, não de estética: há cerca de 500 mil horas de dado de treino de alta qualidade contra 100
milhões de horas necessárias; a hora de teleoperação custa US$ 50-200 e a hora de simulação, frações de
centavo. O GR00T N1 traduziu 88 horas de teleoperação real em 6.500 horas equivalentes de simulação —
geradas em 11 horas — mais 827 horas de trajetórias neurais, a 105 mil horas-GPU. A troca é **custo de
teleoperação por custo de datacenter**, e é ela que decide quem pode treinar um corpo.

O teto está medido, e por grupos independentes. O escore perceptual de um modelo de mundo correlaciona
r=0,825 com julgamento humano, r=0,600 com síntese de dados e apenas **r=0,360 com planejamento de ação**
(WorldArena, 14 modelos, 2.500 vídeos, 70 anotadores): beleza de predição e utilidade para agir são coisas
diferentes, e o ranking que o mercado exibe é o da primeira. Pior: o mundo gerado é sistematicamente
**otimista**. No MiraBench, um gerador que conclui 92,0% das tarefas preserva só 12,8% das falhas — ele não
sabe mostrar o robô errando —, e pós-treinar em dados só-de-sucesso, que é o default da indústria, **piora**
justamente esse número. E escalar não resolve: subir o Wan de 1,3B para 14B parâmetros piorou a consistência
de estado, de 0,66 para 0,62. A avaliação que deveria arbitrar está contestada — o vencedor do BEHAVIOR-1K
Challenge fez **26%** de q-score contando sucesso parcial, e uma auditoria de junho de 2026 encontrou
vazamento de dado em LIBERO, CALVIN, SimplerEnv, RoboCasa e RoboTwin.

O eixo que escala é o **ambiente**, não a demonstração: a lei de potência mede número de ambientes e de
objetos, não número de demos, e o π0.5 confirma ao igualar, com 104 localidades, um modelo treinado nas
próprias casas de teste. Isso desloca o ativo de quem tem robô para **quem tem acesso a lugares** — e a
lugares que alguém escolheu. Por baixo da palavra "autônomo" há trabalho humano reorganizado por geografia:
sessenta pilotos em Manila operam 300 lojas em Tóquio a US$ 250-315 por mês, um para cinquenta robôs; a
Waymo mantém cerca de 70 agentes remotos para 3.000 carros; a 1X declara que o NEO doméstico de US$ 20 mil é
**60-70% autônomo**, o que significa um funcionário de capacete VR olhando pela câmera dentro da sala do
cliente. Existe um mercado global do gesto humano cotado por região — de US$ 2,60 a US$ 48 a hora, em mais
de 50 países — que ainda não foi nomeado como mercado.

O capital chegou antes do produto: US$ 18,8 bilhões de venture capital em robótica até junho de 2026, contra
US$ 15 bi em todo 2025, com as maiores cifras em quem vende o cérebro (Skild a US$ 14 bi) e não em quem opera
frota. As projeções não convergem, e o espalhamento é o dado mais honesto do levantamento: para 2035, Goldman
modela 1,4 milhão de humanoides por ano e a Citi modela 13,3 milhões — dez vezes de dispersão entre casas que
leem os mesmos fatos —, enquanto a receita declarada pelas empresas de humanoide em 2025 ficou **abaixo de
US$ 1 bilhão**. O corpo ficou barato e o cérebro não: o Unitree G1 sai por US$ 13.500 e é **não-programável**
(o SDK só vem no EDU, de US$ 43.900 a US$ 73.900), e a Morgan Stanley projeta a lista de materiais **subir**
cerca de 15% até 2030, porque a computação embarcada cresce mais rápido do que cai o custo por FLOP: a curva
do humanoide não é a curva do smartphone. Rodney Brooks, o único que audita publicamente as próprias
previsões datadas, sustenta que "destreza implantável permanecerá patética além de 2036" — e alerta para a
**deriva de definição**: como "self-driving" mudou de sentido, "humanoide" passará a incluir rodas.

E há o achado que fixa a forma de todo produto do período: **não existe rota de verificação formal** para a
classe de modelo que está entrando nos corpos. Os certificados de controle não passam de 6 ou 7 dimensões de
estado, a enumeração exata é #P-difícil, e transformers — a arquitetura de toda política moderna —
permanecem em larga medida não endereçados. A garantia migra para um **supervisor de runtime que rejeita
ação**, e "o supervisor bloqueou" vira evento normal de interface. Enquanto isso o calendário jurídico chega
**antes** da destreza: exclusão-padrão de IA generativa em apólices de responsabilidade civil desde
01/01/2026, responsabilidade objetiva da UE em 09/12/2026, ISO 10218 revista em 2025 **sem tratar de IA nem
de comportamento não determinístico**, e as normas de humanoide sem gaiola datadas para 2027-2028.

Fora do recorte, pela régua da disciplina: ROS e ROS 2, planejamento de trajetória (OMPL, MoveIt 2), SLAM e
navegação visual-inercial entram como linha de base, não como novidade. Fronteiras: a simulação de
**sociedades** é o tema 6, capturar o mundo real em 3D é o tema 10, ver e segmentar qualquer coisa é o tema
11. Aqui o objeto é **o agente com corpo e o mundo em que ele aprende**.

**A tese.** Até 2031, a IA corporificada será governada por instrumentos antigos de outros domínios — norma de ergonomia, autorização de rádio, lei de publicidade urbana, acreditação de certificadora —, e não por marco legal de inteligência artificial; e como nenhum desses instrumentos alcança o comportamento aprendido da máquina, a interface será, durante todo o período, a única barreira de segurança que de fato existe.

## Os 34 efeitos de 1ª ordem

| id | Efeito | STEEP | Prob. | Prazo |
|---|---|---|---|---|
| `e1_01` | O aprendizado do corpo robótico sai do mundo real e passa a acontecer dentro de máquinas *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_02` | O eixo que escala deixa de ser a demonstração e passa a ser o AMBIENTE, o que redefine quem tem ativo de dado | Tecnológico | alta | até 2028 |
| `e1_03` | Surge um mercado global do gesto humano, com cotação por região e sem nome *(óbvio)* | Econômico | alta | até 2028 |
| `e1_04` | Nasce uma ocupação — instrutor de corpo de máquina — que se autodenominou antes de existir em qualquer classificação oficial de trabalho | Social | alta | até 2028 |
| `e1_05` | A autonomia corporificada que chega ao público é, em boa parte, trabalho humano reorganizado geograficamente *(óbvio)* | Social | alta | até 2028 |
| `e1_06` | A casa vira superfície de coleta com atuador *(óbvio)* | Social | alta | até 2028 |
| `e1_07` | Geração de vídeo e controle de robô deixam de ser duas indústrias e passam a ser o mesmo modelo | Tecnológico | alta | até 2028 |
| `e1_08` | O custo marginal do cenário navegável cai a quase zero e o custo passa a ser COERÊNCIA no tempo *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_09` | O ranking de beleza e o ranking de utilidade se separam, e o mercado de modelo de mundo se bifurca em dois | Tecnológico | alta | 2028-2031 |
| `e1_10` | O mundo gerado é sistematicamente OTIMISTA — não apenas impreciso, enviesado a favor do sucesso | Tecnológico | alta | até 2028 |
| `e1_11` | Avaliar deixa de ser uma etapa e vira infraestrutura cara, centralizada e disputada | Político | alta | 2028-2031 |
| `e1_12` | O vídeo de demonstração perde valor probatório dentro da própria especialidade | Social | alta | até 2028 |
| `e1_13` | Não há rota de verificação formal para a classe de modelo que está entrando nos corpos, e a garantia migra para uma camada de runtime | Tecnológico | alta | 2028-2031 |
| `e1_14` | O calendário jurídico e atuarial chega ANTES da destreza | Político | alta | até 2028 |
| `e1_15` | Abre-se uma classe de acidente cuja perícia não encontra código para abrir: a falha pode estar na física alucinada pelo modelo de mundo | Político | média | 2028-2031 |
| `e1_16` | O capital chega antes da receita, e em escala de infraestrutura *(óbvio)* | Econômico | alta | até 2028 |
| `e1_17` | O corpo fica barato e o cérebro fica caro — e o preço final pode não cair como a narrativa promete | Econômico | média | 2028-2031 |
| `e1_18` | A forma do corpo se revela escolha de design, não destino — e o corpo que já funciona em escala não é humanoide | Econômico | alta | 2028-2031 |
| `e1_19` | O corpo que mais cresce voa, é da polícia, e ninguém votou nele | Político | alta | até 2028 |
| `e1_20` | O robô de calçada vira uma pessoa jurídica nova, e a disputa deixa de ser robô contra humano para ser estado contra cidade | Político | alta | até 2028 |
| `e1_21` | A reação social ao corpo da máquina em espaço público já é rotina, e desenha uma geografia de cobaia *(óbvio)* | Social | alta | até 2028 |
| `e1_22` | A esquiva social entra no repertório de comportamento da máquina: já existe robô comercial cuja política inclui prever o abuso e fugir… | Social | média | 2028-2031 |
| `e1_23` | Comunicar INTENÇÃO — e não percepção — vira o problema central de interface, e a sinalização mal calibrada é pior que a ausência dela | Tecnológico | alta | até 2028 |
| `e1_24` | A instrução em linguagem natural vira a interface operacional do espaço de trabalho — e a redação do comando vira engenharia de… *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_25` | A cidade ganha uma camada semântica escrita para máquinas lerem, e ela está sendo redigida por especificação técnica sem nenhum designer de… | Tecnológico | média | até 2028 |
| `e1_26` | A frota corporificada vira rede de sensores urbanos em tempo real, e o subproduto começa a valer mais que o serviço | Econômico | média | até 2028 |
| `e1_27` | Automatizar o espaço de trabalho aumenta a lesão no corpo humano que continua ali | Social | alta | até 2028 |
| `e1_28` | A pilha inteira do aprendizado corporificado se concentra num fornecedor, e com ela um viés de simulação que ninguém detecta por comparação | Econômico | alta | até 2028 |
| `e1_29` | Ao mesmo tempo, a barreira de entrada para EXPERIMENTAR desaba para a faixa de centenas de dólares *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_30` | O Brasil entra nesta onda como tomador de modelos treinados em ruas, casas e fábricas que não são as nossas *(óbvio)* | Econômico | alta | 2028-2031 |
| `e1_31` | A corporificação brasileira em escala já existe, mas está no campo e no subsolo, longe de qualquer câmera | Econômico | alta | até 2028 |
| `e1_32` | O Brasil forma competência de alto nível em robótica corporificada e a exporta, sem participar da faixa emergente | Social | alta | até 2028 |
| `e1_33` | O acervo de vídeo gravado por pessoas comuns vira insumo industrial de treino de corpo — sem contrato e, na maioria dos casos, sem… | Social | alta | até 2028 |
| `e1_34` | O aprendizado corporificado adquire uma pegada computacional que ninguém está contabilizando | Ecológico | baixa | 2028-2031 |

Três grupos organizam a leitura, e foram eles que definiram os lotes de expansão. **O mundo como produto** (`e1_01`, `e1_02`, `e1_07` a `e1_13`, `e1_15`, `e1_28`, `e1_34`): o aprendizado migra para dentro da máquina por duas a três ordens de grandeza; o que escala é o ambiente e não a demonstração, o que muda quem detém o ativo; vídeo generativo e controle de robô deixam de ser duas indústrias e passam a ser o mesmo modelo; o custo do cenário navegável cai a quase zero e o gargalo vira **coerência no tempo**; o ranking de beleza e o de utilidade se separam; o mundo gerado é otimista por curadoria e o remédio corrente agrava; avaliar deixa de ser etapa e vira infraestrutura cara e disputada; o vídeo de demonstração perde valor probatório dentro da própria especialidade; não há verificação formal e a garantia migra para runtime; abre-se uma classe de acidente cuja perícia não encontra código para abrir; a pilha inteira se concentra num fornecedor, e com ela um viés de simulação que ninguém detecta por comparação; e a pegada computacional não está sendo contabilizada por ninguém. **O trabalho e a economia do corpo** (`e1_03` a `e1_05`, `e1_16` a `e1_18`, `e1_27`, `e1_29`, `e1_30`, `e1_32`, `e1_33`): nasce um mercado global do gesto cotado por região e sem nome; nasce uma ocupação que se autodenominou antes de existir em qualquer classificação oficial; a autonomia que chega ao público é trabalho humano reorganizado geograficamente; o capital chega antes da receita e em escala de infraestrutura; o corpo fica barato e o cérebro caro, com a lista de materiais podendo subir; a forma do corpo se revela escolha de projeto e o que funciona em escala não é humanoide; automatizar o galpão **aumenta** a lesão no corpo humano que continua ali; a barreira para experimentar desaba para centenas de dólares; o acervo de vídeo de pessoas comuns vira insumo industrial sem contrato; e o Brasil entra como tomador, formando competência de alto nível e exportando-a sem participar da faixa emergente. **O corpo no espaço** (`e1_06`, `e1_14`, `e1_19` a `e1_26`, `e1_31`): a casa vira superfície de coleta com atuador; o calendário jurídico e atuarial chega antes da destreza; o corpo que mais cresce voa, é da polícia e ninguém votou nele; o robô de calçada vira pessoa jurídica nova e a disputa passa a ser estado contra cidade; a reação social já é rotina e desenha uma geografia de cobaia; a esquiva social entra no repertório da máquina; **comunicar intenção** — e não percepção — vira o problema central de interface, com sinalização mal calibrada sendo pior que a ausência dela; a instrução em linguagem natural vira a interface operacional do espaço de trabalho; a cidade ganha uma camada semântica escrita para máquinas por especificação técnica, sem nenhum designer de interação na sala; a frota vira rede de sensores urbanos e o subproduto começa a valer mais que o serviço; e a corporificação brasileira em escala já existe, mas está no campo e no subsolo.

## Os 5 mais impactantes

*O porquê aparece aqui abreviado; o texto integral e a cadeia de efeitos estão no mapa completo.*

1. **`e1_13` — Não há verificação formal para a política que está entrando nos corpos.** É o efeito que fixa a forma de todo produto corporificado do período. O survey de verificação de políticas de RL registra que os métodos alcançam MLPs pequenos, CNNs e Neural-ODEs, que os certificados de controle não passam de 6 ou 7 dimensões de estado, e que transformers — a arquitetura de toda política VLA em uso — permanecem em larga medida não endereçados.

2. **`e1_10` — O mundo gerado é sistematicamente otimista, e o remédio corrente agrava o problema.** 92,0% de conclusão de tarefa contra 12,8% de preservação de falha no DreamDojo-GR1-14B, com o achado que fecha o argumento: pós-treinar em dados só-de-sucesso melhora o número nominal e PIORA a capacidade de prever o acidente. O viés entra pela curadoria, não pela arquitetura, de modo que escalar não corrige.

3. **`e1_02` — O eixo que escala é o ambiente, não a demonstração.** Uma única medição reorganiza quem detém o ativo: lei de potência com número de ambientes e de objetos, não com número de demonstrações, confirmada pelo π0.5, que iguala com 104 localidades um modelo treinado nas casas de teste. A partir daí, comprar hora de teleoperador deixa de resolver e comprar acesso a lugares passa a resolver — o que produz cláusula de captura em contrato de imóvel (e2_A03), converte cenografia em variável de desempenho (e2_A04) e transforma a distribuição geográfica do capital em distribuição geográfica de competência motora (e2_A05).

4. **`e2_A19` — A prova migra do vídeo público para o log de custódia privada.** É o único item que seis caminhos independentes, movidos por atores com interesses incompatíveis — seguradora, autor de ação, regulador europeu, prefeitura, sindicato e polícia —, produzem sozinhos. Quando a convergência é entre adversários, ela não depende de nenhum deles vencer.

5. **`e1_28` — Um fornecedor detém silício, simulador, física, modelo de mundo, modelo de fundação e o corpo de referência.** O risco não é comercial, é epistêmico. Se todo mundo treina no mesmo solver, os erros do solver viram propriedade compartilhada e invisível do campo — e não existe um segundo motor de contato com adoção comparável para servir de linha de base (e2_A24, e3_T2_04).

**O padrão por trás dos cinco.** Nenhum deles é sobre o robô ficar mais capaz — todos são sobre **quem escreve a régua**. E a régua que vai valer não está sendo escrita por marco legal de inteligência artificial: está sendo encontrada em instrumentos antigos de outros domínios, escritos para outra coisa e que alcançam este objeto por descrição genérica. A norma de ergonomia de teleatendimento de 2007 fixa quantos robôs cabem num operador porque exige contingente para as pausas (`e3_T2_19`, `e3_T2_29`); a autorização de rádio decide quem pode importar um corpo (`e2_B12`, `e3_T1_18`); a lei de publicidade urbana de 2006 apaga a segunda receita da frota (`e3_T2_24`); a regra de caixa-preta automotiva de 2015 define quem guarda a prova (`e3_T1_06`); a acreditação de certificadora decide quem atesta que um mundo sintético era representativo (`e3_T1_01`). É por isso que a cascata **se juridifica com a profundidade** — o eixo Político vai de 15% na 1ª ordem a 30% na 2ª e 48% na 3ª, enquanto o Tecnológico desce de 32% para 8%: quanto mais longe da inovação, menos o efeito é uma capacidade e mais ele é uma **regra**. Para quem projeta mídia e interação a consequência é direta e desconfortável. Como não existe verificação formal para a política que está entrando nos corpos, e como nenhum dos instrumentos acima alcança o **comportamento aprendido** da máquina, a interface deixa de ser a camada de acabamento e passa a ser, durante todo o horizonte, a única barreira de segurança que de fato existe: o que o corpo comunica antes de agir, como ele avisa que o supervisor bloqueou, se o usuário sabe que há um humano do outro lado, e o que o operador remoto consegue ver (`e1_13`, `e1_23`, `e2_C03`). Não é uma tese sobre importância da interface — é uma constatação sobre ausência de alternativa.

## Wildcards

12 cenários de baixa probabilidade e alto impacto — 4 de oportunidade, 4 de risco, 4 ambíguos. Seis dos doze não dependem de nenhum evento exógeno: são combinações de efeitos já existentes, separadas do cenário central apenas por sincronia.

- **w1 · O erro de Ariane: o acidente cuja causa está no mundo, e o mundo foi apagado** (risco). Entre 2029 e 2031, unidades de três fabricantes diferentes começam a produzir o mesmo modo de falha num mesmo tipo de situação de contato — uma pegada que solta quando a superfície é mais escorregadia do que a política jamais viu.
- **w2 · O ímã: o corpo barato vira o insumo escasso, e sobra só simulação** (risco). Em 10/11/2026 termina a suspensão do Aviso 61 do MOFCOM, e o regime de licença chinês sobre terras-raras e ímãs sinterizados volta com a regra de conteúdo mínimo estendida a produtos fabricados fora da China.
- **w3 · O worm que anda: a atualização que se propaga de corpo em corpo** (risco). Uma vulnerabilidade em rádio de curto alcance permite tomada de controle com privilégio de root e é WORMÁVEL — um corpo infectado varre o alcance, encontra outros corpos da mesma família e os compromete sem intervenção humana.
- **w4 · Nintendo contra o mundo: a briga de propriedade intelectual do entretenimento decide o substrato de treino do robô** (ambíguo). O Project Genie foi aberto a assinantes em 29/01/2026 e, nos primeiros dias, usuários publicaram mundos jogáveis com personagens e cenários reconhecíveis de franquias vivas — um deles, demonstrado pela imprensa especializada, muito próximo….
- **w5 · A liga: o humanoide vira formato de entretenimento antes de virar trabalhador, e a teleoperação vira gênero** (oportunidade). Em novembro de 2026 duas ligas concorrentes de combate entre humanoides fazem turnê por cinco cidades americanas, com ingressos na faixa de US$ 60 a 80 e corpos pilotados remotamente por operadores humanos — exatamente o regime de controle….
- **w6 · O dono do dado é a casa: o Data Act europeu vira cooperativa de dado corporal** (oportunidade). Desde 12/09/2025, qualquer usuário de um produto conectado na União Europeia pode exigir acesso aos dados que o produto gera e exigir que eles sejam compartilhados com um terceiro de sua escolha; desde 12/09/2026, produtos colocados no….
- **w7 · A greve do gesto: o corpus se torna juridicamente onerado depois de pronto** (ambíguo). A ocupação foi reconhecida oficialmente em 09/09/2026, com exame, registro, empregador e turno — e o registro que torna o trabalhador contável também o torna organizável.
- **w8 · A correção chega em 2027, e quem a aciona é a seguradora** (ambíguo). A correção não começa com um relatório de analista: começa com um sinistro negado.
- **w9 · Um vídeo, seis meses: o acidente doméstico filmado por quem não tinha botão** (ambíguo). Um humanoide doméstico em sessão de teleoperação atinge uma pessoa dentro de uma casa.
- **w10 · O Brasil escreve a primeira regra do mundo sobre quantos robôs cabem num humano** (oportunidade). Entre 2028 e 2031 o Brasil vira praça de teleoperação nearshore para o mercado americano — não por política industrial, mas pela mesma aritmética que levou a assistência remota da Waymo às Filipinas: parque de BPO instalado, fuso de uma a….
- **w11 · O contraexemplo vira padrão: o Brasil como bancada adversa do mundo** (oportunidade). O que a acreditação de mundo sintético torna escasso não é o ambiente bonito — é o ambiente que FALHA do jeito certo, e ninguém tem um.
- **w12 · O corpo subsidiado: dar a máquina de graça para ficar com o mundo dela** (risco). Um ator com capital de escala de datacenter faz a conta que ninguém fez em voz alta: o robô custa cerca de US$ 20 mil e o ativo que a lei de escala diz ser escasso é acesso a ambientes diferentes.

O que os 12 revelam em conjunto está em `json/wildcards.json` e na nota completa.

## Nota Brasil

Lidos isoladamente, os 53 efeitos brasileiros parecem uma lista de ausências. Lidos juntos, formam outra coisa e mais precisa: **o Brasil é o lugar onde as premissas embutidas dos sistemas falham** — e falham de um jeito mensurável, documentado por norma e por censo, não por impressão. A cozinha com diâmetro livre de 1,50 m e o sanitário de 90 cm do Código de Obras de São Paulo contra um π0.5 treinado em cerca de cem ambientes de outra envoltória (`e3_T2_09`). **18,8% dos moradores com endereço em via de calçada livre de obstáculo e 15,7% em via sem calçada nenhuma** (Censo 2022), contra uma gramática de intenção por projeção no chão que exige piso plano e pouca luz (`e3_T2_20`) — e cujo substituto com norma pronta, o som, foi escrito para carro a 20 km/h e não alcança um corpo a 6 km/h (`e3_T2_21`). Instrução de chão de fábrica em português contra políticas condicionadas por texto em inglês (`e2_C19`). Mosaico português que é patrimônio e ruído de sensor ao mesmo tempo (`e2_C23`). Isso não é atraso: é um conjunto de **contraexemplos que o campo internacional não tem e precisaria ter** — e é a matéria-prima do único wildcard positivo genuinamente brasileiro no terreno técnico (`w11`).

**A IA física brasileira em escala não está atrasada; está em outro lugar.** Mais de 35 mil drones agrícolas em operação contra cerca de 7.800 registrados na ANAC, 72 equipamentos autônomos da Vale em quatro estados com mais de 300 empregados envolvidos, o ROSI com a UFRJ desde 2017, teleoperação a centenas de quilômetros, um centro de controle de drone em Franca a 400 km da operação em Barueri — contra **três** robôs Ada do iFood dentro de shopping (`e1_31`, `e2_B26`, `e2_C27`, `e3_T2_18`). A corporificação brasileira não é menor que a do Norte: é **invisível**, porque acontece onde não há público para vê-la. A consequência é desconfortável para o currículo: o usuário brasileiro típico de sistema corporificado não é consumidor, é supervisor industrial, e o que o país compra é painel de frota, hierarquia de alarme, protocolo de passagem de controle, turno e fadiga (`cv8`).

**Onde se supõe vazio regulatório, há instrumento antigo já testado — e em pelo menos um ponto o país está à frente.** O Anexo II da NR-17, escrito em 2007 para teleatendimento, limita a seis horas diárias o tempo em atividade efetiva, obriga pausas computadas como trabalho e **exige contingente suficiente para que todos possam fruí-las** — frase que converte a proporção robôs-por-piloto numa variável de folha de pagamento (`e3_T2_19`, `e3_T2_29`). A Alemanha precisou de uma portaria específica para fixar 1:1 em condução remota (`e3_T2_27`) e os EUA seguem no terreno contratual; o instrumento genérico brasileiro já existe, contra 1:50 em Manila. A Lei Cidade Limpa (14.223/2006) alcança o robô publicitário por descrição genérica escrita há vinte anos (`e3_T2_24`). A homologação da Anatel é a contraparte funcional da FCC e já foi endurecida em 2026 (`e3_T1_18`). No Brasil, **a regra que vai morder já existe e está em outro domínio**; o trabalho é encontrá-la e aplicá-la, não escrevê-la.

E o tema já entrou no debate público brasileiro por uma porta que ninguém estava olhando. Não foi pelo humanoide: foi pelo dossiê de 46 páginas da Heinrich Böll sobre pulverização de agrotóxico por drone, de março de 2026, e pela apuração que identificou **228 comunidades afetadas no Maranhão, 94% dos casos associados a drones** (`e3_T2_17`). O vocabulário público já formado é deriva química, comunidade rural atingida e ausência de fiscalização — não conveniência doméstica. Quem for projetar a chegada do corpo à rua brasileira vai encontrar esse vocabulário já pronto, e não um público neutro.

## O que me faria mudar de ideia

- Aparecer uma linha de receita de robótica nos resultados trimestrais da NVIDIA. Hoje são US$ 89,0 bilhões de Data Center e nenhuma linha de robótica (e1_28): a IA física é posicionamento acoplado a outro negócio. Onde observar: o release trimestral e o 10-Q. Direção: se a linha aparece, a adoção passou do estágio narrativo e o negócio passa a ser cobrado por si.
- Um cliente industrial — não um fabricante — publicar uptime, tempo de ciclo, taxa de sucesso e ROI de uma operação com mais de 50 humanoides. O caso mais citado do planeta são 2 robôs e ~1.250 horas em 11 meses, sem nenhum desses números (e1_18, e2_B15).
- Um segundo motor de contato em GPU adotado como linha de base declarada por um laboratório de porte. Hoje não existe, e é por isso que a monocultura de movimento é indetectável por comparação (e2_A24, e3_T2_04).
- O primeiro sinistro negado com base em 'IA como fator contribuinte' num dano corporificado, sob os endossos-padrão da ISO vigentes desde 01/01/2026. Onde observar: Insurance Journal, decisões de tribunal estadual americano, e a proporção de apólices comerciais renovadas em 2027 com e sem o endosso.
- Uma taxa de preservação de falha aparecer como cláusula contratual de compra de ambiente de treino fora da aviação e da saúde. Onde observar: editais e RFPs de treinamento corporativo em VR, num mercado estimado em ~US$ 633 bi em 2026 (e3_T2_06).
- A primeira acreditação concedida com escopo de ambiente sintético por um organismo nacional. Hoje a escada L0–L4 existe em um preprint de 08/07/2026 e em nenhum diretório (e2_A16, e3_T1_01).
- Uma cidade brasileira entrar no Smart Curb Collaborative ou publicar cadastro de calçada no esquema OpenSidewalks. Hoje não há nenhuma, enquanto o TDEI já hospeda mais de 5.600 conjuntos validados (e2_C21, e2_C23).
- A publicação das taxas de rejeição por estágio e por origem geográfica no funil de curadoria de dado de robô. Hoje a rejeição é silenciosa e não notificada (e3_T2_13, e3_T2_16, sv3).
- A Anatel estender a robô móvel importado a exigência que já aplicou a drone em 2026 (invoice de compra, selos separados, cadastro obrigatório sem isenção de peso). Onde observar: atos e resoluções da Anatel e o SISANT. Direção: fecha, por decisão administrativa e sem debate público, a janela em que um laboratório brasileiro compra um corpo que uma universidade americana talvez não possa comprar (e2_B12, e3_T1_16, e3_T1_18).
- Qualquer resultado publicado mostrando que a política que transfere entre corpos supera o modelo específico do corpo EM REGIME DE DADO ABUNDANTE. Hoje os autores do Open X-Embodiment reportam o resultado contrário nesse regime e declaram não ter critério para prever quando a transferência é positiva. Onde observar: as seções de resultado negativo dos sucessores do Open X-Embodiment, do π0 e do GR00T. Direção: é a tese central do campo; se ela se confirmar, a disrupção é real e a forma do corpo vira livre — se não, a transferência continua sendo um recurso de regime de pouco dado.
- O 'humanoide' passar a incluir oficialmente corpos com rodas e múltiplos braços nas séries setoriais. Onde observar: as séries da IFR, os relatórios de Goldman, Citi e Morgan Stanley, e a taxonomia declarada em cada um.

## Bibliografia essencial

Seleção das fontes que sustentam os efeitos citados acima. A lista completa (315 fontes, 85 delas marcadas como abertas por inteiro pela própria frente que as leu) está no mapa completo.

- WorldArena — 14 modelos, 2.500 vídeos, 50 tarefas, 70 anotadores: escore perceptual correlaciona r=0,825 com julgamento humano e apenas r=0,360 com planejamento de ação. É a medida que separa beleza de utilidade — `https://arxiv.org/abs/2602.03050`
- MiraBench — o gerador que conclui 92,0% das tarefas preserva 12,8% das falhas, e pós-treinar em dados só-de-sucesso PIORA esse número: o mundo gerado não sabe mostrar o robô errando — `https://arxiv.org/abs/2606.02234`
- Open X-Embodiment / RT-X — 1M+ trajetórias, 22 corpos, 527 habilidades: ganho de 50% em domínios de dado pequeno, e o resultado NEGATIVO em domínios de dado grande, com os autores declarando que não existe critério para prever quando a transferência ajuda — `https://arxiv.org/abs/2310.08864`
- Lin et al. — a lei de potência que mede número de AMBIENTES e de objetos, não número de demonstrações (40 mil demos, 15 mil rollouts reais). Fonte única que carrega cerca de um quinto desta árvore — `https://arxiv.org/abs/2410.18647`
- π0.5 / Physical Intelligence — 104 localidades igualam um modelo treinado nas próprias casas de teste; 97,6% do treino não vem do robô usado — `https://arxiv.org/abs/2504.16054`
- NVIDIA GR00T N1 — a pirâmide de dados que fixa a escala da migração: 88 h de teleoperação real, 827 h de trajetórias neurais e 6.500 h equivalentes de simulação geradas em 11 h, a ~105 mil horas-GPU L40 — `https://arxiv.org/abs/2503.14734`
- NVIDIA Cosmos — world foundation models sob OpenMDW-1.1: o mesmo tronco emite pixel e ângulo de junta, e foi o melhor policy model no RoboArena — `https://www.nvidia.com/en-us/ai/cosmos/`
- Google DeepMind — Genie 3: mundo 3D interativo gerado a partir de texto, 720p, 20-24 fps, consistência de poucos minutos e sem representação 3D explícita — `https://deepmind.google/discover/blog/genie-3-a-new-frontier-for-world-models/`
- Google DeepMind — SIMA 2: o agente generalista que usa o Gemini para gerar a própria tarefa e a própria recompensa num ambiente que nunca viu, e que declara as mesmas limitações do Genie — memória curta, horizonte curto, controle de baixo nível não resolvido — `https://deepmind.google/discover/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/`
- Newton — motor de física em GPU sobre NVIDIA Warp e OpenUSD, doado por Disney Research, Google DeepMind e NVIDIA à Linux Foundation; 1.0 no GTC 2026, com MuJoCo Warp de backend. O objeto da vulnerabilidade sistêmica principal deste mapa — `https://github.com/newton-physics/newton`
- openpi / Physical Intelligence — π0, π0-FAST e π0.5 sob Apache 2.0, com inferência numa RTX 4090: a política VLA aberta que estabelece a linha de base do campo — `https://github.com/Physical-Intelligence/openpi`
- LeRobot / Hugging Face — a pilha aberta de robótica com SO-100/SO-101 a US$ 100-220 em kit: é aqui que a barreira de entrada para EXPERIMENTAR desaba, e é o insumo do ramo de escola e coletivo como produtores de corpus — `https://github.com/huggingface/lerobot`
- BEHAVIOR-1K Challenge — o vencedor com 26% de q-score, contando sucesso parcial: o melhor resultado público em tarefa doméstica — `https://behavior.stanford.edu/challenge/`
- Rodney Brooks — Predictions Scorecard: o único autor que audita publicamente as próprias previsões datadas, com 'destreza implantável permanecerá patética além de 2036' e o alerta sobre deriva de definição ('humanoide' passará a incluir rodas, como 'self-driving' mudou de sentido) — `https://rodneybrooks.com/predictions-scorecard-2026-january-01/`
- Ken Goldberg — 'Good old-fashioned engineering can close the 100,000-year data gap in robotics' (Science Robotics, 27/08/2025): 100.000 anos de texto contra o que existe em dado de robô, e a afirmação de que para destreza a simulação não parece funcionar — ataque direto onde o setor mais investe — `https://www.science.org/doi/10.1126/scirobotics.adt4229`
- Waymo Safety Impact — 220,6 milhões de milhas rodadas com 94% menos colisões com feridos graves: o único caso de IA física em escala com número auditável — `https://waymo.com/safety/impact/`
- IFR — World Robotics: a série que mede densidade de robôs por 10 mil trabalhadores, e que não cita o Brasil; o corpo que já funciona em escala não é humanoide — `https://ifr.org/worldrobotics/`
- Crunchbase News — US$ 18,8 bilhões de venture capital em robótica até junho de 2026, contra US$ 15 bi em todo 2025, com as maiores cifras em quem vende o cérebro e não em quem opera frota — `https://news.crunchbase.com/venture/robotics-startup-funding-record-2026/`
- Rest of World — os pilotos de Manila: sessenta jovens operando robôs em mais de 300 lojas japonesas a US$ 250-315 por mês, um piloto para cinquenta robôs. O mercado global do gesto humano, cotado por região e ainda sem nome — `https://restofworld.org/2025/telepresence-robot-workers-philippines-japan/`
- 1X Technologies — NEO: a própria empresa declara 60-70% de autonomia no robô doméstico de US$ 20 mil, com teleoperação por funcionário de capacete VR dentro da sala do cliente. O achado mais relevante deste mapa para uma disciplina de interação — `https://www.1x.tech/neo`
- ISO 10218:2025 — a revisão maior da norma de segurança de robô industrial que NÃO trata de IA nem de comportamento não determinístico: o vazio normativo exatamente onde o comportamento é aprendido — `https://www.iso.org/standard/73933.html`
- Diretiva (UE) 2024/2853 — responsabilidade por produto com transposição em 09/12/2026, classificando software e IA como produto: o calendário jurídico chegando antes da destreza — `https://eur-lex.europa.eu/eli/dir/2024/2853/oj`
- StVFernLV (Alemanha, vigente desde 01/12/2025) — o condutor remoto não pode conduzir mais de um veículo ao mesmo tempo, tem de estar no país, com formação específica, e a licença é do SISTEMA (veículo mais central de controle). A resposta europeia à pergunta da proporção, e ela é um — `https://www.gesetze-im-internet.de/stvfernlv/`
- NR-17, Anexo II (Brasil, 2007) — escrito para teleatendimento: seis horas diárias em atividade efetiva, pausas computadas como trabalho e contingente suficiente para que todos possam fruí-las. É o caminho mais curto para a primeira regra do mundo sobre quantos robôs cabem num operador — `https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadoras/normas-regulamentadoras-vigentes/norma-regulamentadora-no-17-ergonomia`
- Lei Cidade Limpa — Lei municipal 14.223/2006 de São Paulo: proíbe anúncio em veículos 'e similares' por descrição genérica escrita há vinte anos, e apaga a segunda receita que faz a conta da frota americana fechar — `https://legislacao.prefeitura.sp.gov.br/leis/lei-14223-de-26-de-setembro-de-2006`
- IBGE, Censo 2022 — 18,8% dos moradores com endereço em via de calçada livre de obstáculo e 15,7% em via sem calçada nenhuma: a gramática de intenção por projeção no chão é inaplicável por física em mais de quatro quintos dos endereços brasileiros — `https://www.ibge.gov.br/estatisticas/sociais/populacao/22827-censo-demografico-2022.html`
- ANAC — RBAC nº 100 (Resolução 805/2026), em vigor desde 16/06/2026: reorganiza a regulação de drone por categoria de risco. É regulação de segurança aérea, não de autonomia, privacidade ou trabalho — `https://www.anac.gov.br/assuntos/legislacao/legislacao-1/rbha-e-rbac/rbac/rbac-100`
- Heinrich Böll Stiftung — dossiê sobre pulverização de agrotóxico por drone no Brasil (março de 2026): a porta pela qual a IA física entrou no debate público brasileiro, com 228 comunidades afetadas no Maranhão e 94% dos casos associados a drones — `https://br.boell.org/pt-br/drones-agrotoxicos`
- RobôCIn / CIn-UFPE — VSSS-RL e rSoccer: sim-to-real por adaptação de domínio (arXiv:2008.12624), 4º lugar entre 21 na LARC 2019, e primeiro lugar entre os estrangeiros na competição de humanoides de Pequim em agosto de 2026. A competência brasileira existe e é de casa — e não está na faixa emergente — `https://arxiv.org/abs/2008.12624`
- ILIA 2025 (CEPAL/CENIA) — a América Latina responde por 1,56% do gasto global em IA: a região como tomadora de modelos de mundo treinados em ruas que não são as nossas — `https://indicelatam.cl/`

---

*Mapa completo: `futures-wheel-agentes-corporificados-ia-fisica-e-modelos-de-mundo.md` (nota Obsidian) e `futures-wheel-agentes-corporificados-ia-fisica-e-modelos-de-mundo.html` (diagrama navegável). Contrato da rodada em `CONTRATO.md`; histórico de execução em `log.txt`; JSONs intermediários em `json/`.*
