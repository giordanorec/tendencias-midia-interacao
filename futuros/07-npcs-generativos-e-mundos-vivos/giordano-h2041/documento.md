---
tema: NPCs generativos e mundos vivos
slug: npcs-generativos-e-mundos-vivos
autor_login: grec
zona_de_interesse: Simulação e mundos
data: 2026-09-12
horizonte: 2041
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 17
efeitos_ordem_2: 31
efeitos_ordem_3: 21
tecnologias_citadas: [opengameagent, SAGA, Thistle Gulch, NVIDIA ACE, Nemotron-4 4B Instruct, Inworld AI, Convai, Smart Zoi, inZOI, Retail Mage, Whispers from the Star, Suck Up!, Mantella, PIANO, Project Sid, TITAN, Teammates, NEO NPC, Mecha BREAK, behavior tree, YarnSpinner, Neuro-sama]
fontes: 19
confianca: media
experimento: "O Oráculo — vila de oito NPCs agênticos com caderno de invariantes e bateria adversarial de 500 partidas"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

O que está em jogo aqui não é o NPC falar melhor — isso é a árvore de diálogo sem os galhos, e
foi recusado como raiz deste mapa. O que rompe é o personagem **agir**: escolher ações dentro
das affordances do mundo, o que acaba com a garantia de que o espaço de eventos possíveis é
enumerável, e com ela o QA por roteiro, a classificação indicativa por questionário e o
documento de design como descrição de cenas. Somam-se três rupturas vizinhas: mundos que rodam
quando ninguém está olhando (e queimam servidor para plateia nenhuma), memória longitudinal que
torna o personagem um objeto diferente para cada jogador (e dado pessoal sob a LGPD), e personas
que atravessam a fronteira do jogo — a Neuro-sama era, em 02/01/2026, o canal mais assinado do
Twitch, à frente de qualquer humano. O presente é mais modesto que o discurso: 30,8% dos
lançamentos de 2026 na Steam declaram IA, mas esse selo é binário e inclui textura passada por
upscaler; o jogo comercial que de fato usa IA generativa no laço de jogo, o Retail Mage, tem 44
resenhas. Duas retroações seguram o mapa, e as duas já são mensuráveis: o modelo pequeno sabe
conversar e não sabe decidir (83,8% da mesma tática contra qualquer adversário), e a conversa
aberta **aumenta** a carga cognitiva do jogador sem melhorar a experiência. Até 2041, o desenho
provável não é o mundo vivo: é o híbrido — máquina de estados no volante, modelo no banco do
passageiro — com a técnica concentrada em quem tem escala para pagar o QA estatístico.

## 2. O tema

Um NPC roteirizado é uma promessa que o designer faz ao jogador: tudo que este personagem pode
dizer ou fazer, alguém escreveu antes. Árvore de diálogo, máquina de estados, behavior tree,
YarnSpinner — são tecnologias diferentes para a mesma promessa. O tema deste mapa é o que
acontece quando a promessa é retirada: o personagem recebe objetivos, enxerga o que o mundo
oferece, escolhe, inspeciona o resultado e revisa o plano. E o mundo, por consequência, continua
existindo depois que o jogador fecha a janela.

Isso encosta em mídia e interação em três pontos, e nenhum deles é "os jogos ficam melhores".
Primeiro, **o contrato de autoria**: um sistema interativo em que o autor não escreveu a fala
que o público ouviu é um objeto novo para a crítica, para o direito e para a classificação
indicativa. Segundo, **a unidade de consumo**: se o personagem lembra de você entre sessões, o
produto deixa de ser a mesma coisa para duas pessoas, e tudo que pressupõe objeto comum —
resenha, guia, speedrun, competição — perde o pé. Terceiro, **a economia da operação**: falar
custa por conversa, por jogador; mundo vivo custa por hora de mundo, com ou sem plateia.

Merece mapa de futuro, e não levantamento de estado da arte, por uma razão específica: o estado
da arte aqui é pequeno e bem documentado — dá para listar os produtos numa página — enquanto as
consequências são assimétricas e já estão ocorrendo em mercados vizinhos que chegaram antes. O
aplicativo de companhia já foi regulado; o VTuber autônomo já é o maior canal do Twitch; o acordo
de voz já existe. O tema não é interessante porque o futuro é incerto: é interessante porque
partes dele já aconteceram em outro lugar, e dá para olhar.

**Premissas assumidas desta rodada** (vieram do `briefing:`, não de entrevista ao vivo): horizonte
2041; público "quem projeta mídia e interação"; recorte global com nota sobre o Brasil; descartado
de início "o que já é comum em produto de massa"; nenhuma disrupção-raiz suspeita pré-definida;
viés neutro; profundidade três ordens; partida a partir do tema, não de um setor. O que o briefing
**não** cobriu e eu assumi: (a) tratei "mídia e interação" como incluindo streaming e persona
digital, não só jogo comercial — é o que justifica a raiz R4; (b) assumi que "global" autoriza
fontes em inglês como base e reservei o português para a nota Brasil; (c) assumi que o falseador
declarado ("adoção já passada da maioria inicial, ou tecnologia que não rompe nada") deve ser
testado **por raiz**, e não para o tema em bloco — foi o que fez um candidato cair.

## 3. Onde isso está hoje

### 3.1 O que já existe e funciona

**Personagem que age no laço de jogo, em produto comercial.** *Retail Mage*, da Jam & Tea
Studios, lançado em 12/11/2024 na Steam. A própria declaração de IA na página da loja diz: "Our
game uses GenAI at run time in our game engine to power various gameplay mechanics so that the
game can respond to whatever players say and do in the moment" — e explicita o limite: "We did
not use AI generation for any of our art assets, nor for the NPC customer motivations,
personalities, or quests". No relato técnico do estúdio (13/03/2024) aparece o que tornou isso
viável: **geração estruturada** ("which let us control AI outputs without rigid scripting") e uma
redução de custo de inferência que eles descrevem como "get our costs down by 1000x — three
orders of magnitude", com GPU própria. Preço na loja brasileira: R$ 16,99. Resenhas: 44, 79%
positivas.

**Conversa aberta como mecânica central, em produto com público.** *Whispers from the Star*, da
Anuttacon (estúdio do fundador da HoYoverse), 14/08/2025: 1.659 resenhas, 80% positivas. A
descrição é de diálogo sem árvore, "fully voiced, AI-powered conversations and performances
created in collaboration with an actor". E traz a frase que é, em si, um artefato do tema: "due
to the open nature of interaction, players may still generate responses that are not appropriate
for all audiences". É a primeira vez, nesta varredura, que um estúdio transfere formalmente ao
jogador o risco do que o personagem diz.

**Modelo pequeno rodando no dispositivo, dentro do jogo.** A NVIDIA despachou o Nemotron-4 4B
Instruct em 20/08/2024 como parte do ACE: destilado, podado e quantizado em INT4, com consumo de
VRAM "approximately 2 GB", primeiro demonstrado no *Mecha BREAK*. É a pré-condição técnica que
não existia em 2021. A Krafton levou isso a produto: o **Smart Zoi** do *inZOI*, anunciado no CES
2025 (07/01/2025) e despachado no Early Access de 28/03/2025, roda um SLM **local** e "dynamically
adjust[s] the behaviors of the NPCs according to their traits and the situation they are in".

**Simulação multiagente persistente, em pesquisa com código aberto.** *Project Sid*, da Altera:
mil agentes num servidor de Minecraft, com a arquitetura PIANO, formando economia, cultura e
governo sem intervenção humana. E o *Thistle Gulch*, da Fable Studio — explicitamente um
"Multi-Agent Gym Environment", vila de faroeste com API Python para intervir de fora, com a
biblioteca SAGA traduzindo Skills em Actions via tool-use. Licença do Bridge: não-comercial.

**Personagem autônomo como produto de mídia.** A Neuro-sama, do programador Vedal, estreou em
19/12/2022 e em 02/01/2026 era o canal mais assinado do Twitch, com 162.459 assinantes ativos
estimados — contra 73.942 do segundo colocado, humano. Em 31/08/2026 somava 1,01 milhão de
seguidores no Twitch, 1,12 milhão no Bilibili e 914 mil no YouTube. Ela não é autônoma no sentido
forte: opera com filtros de fala e curadoria ativa do criador — o que se sabe porque em janeiro de
2023 ela tomou **banimento de duas semanas por conduta de ódio**, atribuído a negação do
Holocausto, e o criador reforçou os filtros antes do retorno.

**Testagem automatizada de mundo não-determinístico, em pesquisa aplicada.** O TITAN
(arXiv:2509.22170, 26/09/2025) roda agentes de LLM como testadores em dois MMORPGs comerciais:
95% de conclusão de tarefa, 73,26% de cobertura de estado (contra 26,86% dos testadores humanos),
15 defeitos contra 5 dos humanos, quatro deles desconhecidos. E declara o preço: **30% de falso
alarme** no diagnóstico, e necessidade de rodadas múltiplas por causa do não-determinismo.

**Adoção pela via comunitária.** O mod *Mantella* põe LLM em mais de mil NPCs do Skyrim, com
suporte a mais de vinte idiomas e opção de rodar modelo local de graça. É onde a técnica tem mais
horas de uso real do que em qualquer produto comercial — e onde o custo de inferência é pago pelo
próprio jogador.

### 3.2 O que existe e ainda não funciona

- **O AAA com personagem agêntico no caminho principal.** A leitura de ferramental mais sóbria que
  encontrei é taxativa: "Nobody credible has shipped a big-budget game where AI writes the
  main-quest dialogue." O *NEO NPC* da Ubisoft (GDC 2024) e seu sucessor *Teammates* seguem em
  teste fechado com algumas centenas de jogadores; nenhum dos dois virou jogo.
- **A decisão.** Um experimento controlado (arXiv:2609.02931, 27/08/2026) pôs um Mistral 7B
  escolhendo tática a cada cinco segundos para cinco agentes PPO em combate, por 600 episódios
  contra três tipos de adversário. Resultado: "Surround was selected in 83.8% of cases regardless
  of opponent type, indicating limited zero-shot strategic differentiation at this model scale."
  O modelo pequeno conversa; não decide.
- **A experiência.** Um experimento entre sujeitos com N=130 (arXiv:2604.10107, 11/04/2026,
  revisado em 29/08/2026) comparou NPCs com LLM e NPCs roteirizados num protótipo próprio:
  **a carga cognitiva subiu** (p < .001), a experiência de jogo **não** melhorou de forma
  significativa (p = .195), a autonomia percebida subiu e a **usabilidade e a confiança caíram**.
  O efeito é maior justamente nos módulos mais abertos.
- **O orçamento.** A conta de inferência é por conversa, por jogador: "a cloud invoice no one
  budgeted for". E há um piso sensorial: abaixo de ~800 ms a resposta "feels conversational", e
  API na nuvem adiciona 1 a 2 segundos.
- **O ferramental aberto.** A documentação do Thistle Gulch referencia a versão 1.49.2-beta, de
  01/05/2024. A Inworld AI, que era sinônimo de middleware de NPC, repositionou-se como
  infraestrutura B2B de runtime em tempo real, não mais estúdio de personagem para jogos.

### 3.3 Quem constrói

Cinco camadas, com incentivos diferentes: **fabricante de hardware** (NVIDIA, via ACE e Nemotron —
vende GPU, então empurra inferência local); **middleware** (Convai no plug-and-play, a US$ 29/mês
por 3.000 interações; Inworld já fora do nicho); **estúdio grande com laboratório** (Krafton/
inZOI, único com produto despachado; Ubisoft, com protótipo há dois anos); **indie que aposta o
jogo inteiro** (Jam & Tea, Anuttacon, Suck Up!); e **pesquisa com código aberto** (Fable/SAGA,
Altera/PIANO, opengameagent, e o corpo crescente de papers de teste automatizado). A comunidade de
mods é a sexta, e a mais ativa.

### 3.4 Que número descreve a adoção hoje

O melhor número disponível é também o mais enganoso, e vale enunciar com o defeito: num censo de
**53.597 lançamentos da Steam** entre meados de 2023 e meados de 2026, compilado por Sulka Haro e
publicado em 20/07/2026, a fração de lançamentos com declaração de IA foi de **10,9% em 2024,
19,9% em 2025 e 30,8% em 2026** (até meados do ano); os lançamentos sinalizados passaram de ~13
para ~530 por mês, respondendo por 60% a 90% de todo o crescimento do volume mensal da Steam. Mas
o selo é **binário**: "a game that ran one texture through an upscaler and a game that generated
its entire art set carry the same flag". E a receita não acompanha: jogos com declaração de IA são
um terço dos lançamentos e entre **10% e 27% das vendas estimadas**.

Do lado de quem produz: na pesquisa GDC 2026 (mais de 2.300 profissionais), **36%** usam IA
generativa no trabalho — mas só 30% nos estúdios, contra 58% em publishing e marketing — e **52%
acham que a IA generativa faz mal à indústria**, contra 30% em 2025 e 18% em 2024, com os piores
índices em arte (64%), design e narrativa (63%) e programação (59%). Os que acham que faz bem
caíram de 13% para **7%**. O uso concentra-se em pesquisa e brainstorming (81%) e código (47%) —
não em personagem.

**Número específico de NPC agêntico em produção: não encontrado.** Ninguém publica. O que há são
contagens de contas de middleware, que não medem jogo despachado. Registro a ausência em vez de
estimar.

### 3.5 Nota sobre o Brasil

Três fatos, e o terceiro é o que importa. (1) O setor é pulverizado: o mapeamento da Abragames
divulgado em 12/08/2022 — é o dado que consegui abrir, e ele tem quatro anos — contava 12.441
pessoas no setor, 57% no Sudeste e 14% no Nordeste, com cerca de 3.965 formandos por ano saindo
de mais de quatro mil cursos de jogos registrados no MEC. (2) A regra chega antes do produto: o
PL 2338/2023 foi aprovado no Senado e empurrado para a Câmara em 2026, no modelo de risco do AI
Act europeu, com sanção de até R$ 50 milhões. (3) **A aritmética não fecha.** Inferência é cobrada
em dólar por conversa; o *Retail Mage* é vendido a R$ 16,99 na loja brasileira. Um estúdio
brasileiro não tem margem para pagar nuvem por jogador — o único caminho viável aqui é o modelo
local, e o modelo local depende de um parque de GPU que o público brasileiro não tem. A
consequência prática é que o Brasil tende a entrar neste tema pela **via do mod e da prestação de
serviço**, não pela do produto próprio — e que a parte mais exposta da cadeia é a dublagem de
jogo, que vive de volume e de preço baixo (ver `e14.1.1`).

## 4. As disrupções-raiz

Antes das quatro que ficaram, as recusas — porque a recusa é metade do método.

**Recusado como raiz: diálogo de NPC gerado em tempo real.** É o candidato óbvio, e ele falha no
primeiro teste do critério: não dá para dizer o que ele rompe. Ele faz o que a árvore de diálogo
já fazia, sem o custo de escrever cada galho — melhoria sustentadora, no sentido de Christensen.
A evidência é o *Whispers from the Star*: 1.659 resenhas, 80% positivas, diálogo sem árvore — e
história, personagem, atuação e desfecho escritos por autor humano. Nada do ofício mudou de lugar;
mudou a forma de entrada. Entra neste mapa como contexto (seção 3) e como efeito, nunca como raiz.

**Recusado como raiz: geração procedural de mundo.** Adoção em maioria desde meados dos anos 2010;
tratado como contexto. **Recusado: árvore de diálogo, máquina de estados, behavior tree** — maduros,
e são o termo de comparação, não o objeto. **Recusado: mod de NPC com LLM (Mantella)** — não é
ruptura, é canal de difusão; aparece como sinal de adoção em 3.1 e como mecanismo em `e12.2`.
**Fora de escopo por fronteira, não por maturidade: modelos de mundo** (vídeo gerado jogável) —
é o tema 10 da disciplina; aqui o objeto é o personagem autônomo dentro de regras, não a geração
do cenário.

---

### R1 — Agência ferramentada: o personagem escolhe ações dentro das affordances do mundo

**O que rompe.** A garantia de enumerabilidade. Uma behavior tree *é* a especificação do espaço de
eventos: o designer enumerou cada galho, então o QA pode percorrê-los, a classificação indicativa
pode descrevê-los num questionário e o documento de design pode narrá-los como cenas. Um
personagem que compõe ações a partir do conjunto de affordances do mundo produz eventos que ninguém
escreveu — e as três práticas acima perdem o objeto de uma vez. Não é "o NPC fica mais
inteligente": é o designer deixando de ser autor do que acontece e passando a ser autor do que
**pode** ser pego na mão.

**Por que agora, e não há cinco anos.** Porque a saída do modelo passou a ser confiável como
*chamada*, não como texto. Geração estruturada e function calling tornaram possível que um modelo
emita uma ação válida do jogo em vez de uma frase sobre uma ação — é o que a Jam & Tea descreve
como "structured generation" e o que a SAGA formaliza como Skill→Action. Em 2021 o modelo falava;
não operava. Soma-se o custo: a mesma equipe relata três ordens de grandeza de redução.

**Onde está na difusão.** **Produto de nicho.** *Retail Mage* (44 resenhas), *Suck Up!*, o Smart
Zoi do *inZOI*, conversa restrita em personagens secundários de MMO. O topo da indústria está em
teste fechado há dois anos.

**O que ainda falta acontecer.** Laço de ação abaixo de ~800 ms sem nuvem. Um modelo de custo que
não cresça com jogador × conversa. Uma prática de QA que não dependa de 30% de falso alarme. Uma
forma de a classificação indicativa avaliar gerador, e não conteúdo. E, a mais dura: um modelo
pequeno que **decida** — o que hoje não ocorre (83,8% da mesma tática).

**Quem tem incentivo para bloquear.** O próprio estúdio grande, e não por conservadorismo: o risco
de um incidente de fala no caminho principal de um lançamento de cem milhões de dólares é
assimétrico contra o ganho de imersão. O segundo bloqueador é a plataforma de console, que
responde pela certificação e não quer assinar em branco. O efeito disso é `e5.1` — o híbrido em
que a agência anunciada é maior que a entregue.

### R2 — O mundo deixa de precisar do jogador: simulação persistente sem plateia

**O que rompe.** A sessão como unidade de jogo, e a proporcionalidade entre custo de servidor e
jogador conectado. Todo jogo, até aqui, simula o que está na tela; um mundo vivo queima computação
por ninguém. Isso rompe o modelo de receita (não há métrica de engajamento para hora de mundo sem
jogador), o save (o estado deixa de ser arquivo do jogador e passa a ser propriedade do operador)
e a própria ideia de terminar um jogo.

**Por que agora, e não há cinco anos.** Porque apareceu arquitetura de cognição paralela que
sustenta muitos agentes sem serializar tudo num único laço — o PIANO do Project Sid roda mil
agentes mantendo coerência entre fluxos simultâneos de saída. Em 2021 não havia nem a arquitetura
nem o preço por token que torna plausível deixar agentes pensando fora do caminho crítico.

**Onde está na difusão.** **Laboratório e demo pública.** Project Sid, Thistle Gulch, Eastshore.
Nenhum produto. Por isso **toda a cadeia de R2 carrega confiança baixa ou média, nunca alta**.

**O que ainda falta acontecer.** Alguém com razão econômica para pagar simulação sem audiência.
Compactação de memória que não derive a ponto de o mundo contradizer sua própria crônica. Um
formato de persistência. E uma resposta para "o que o jogador ganha por ter perdido o controle do
save".

**Quem tem incentivo para bloquear.** O financeiro do operador. Custo fixo por mundo é o pior
formato possível para um setor que aprendeu a escalar por jogador ativo; a reação natural é `e7` —
simular em dois níveis e chamar de mundo vivo o que é, longe do jogador, uma tabela.

### R3 — Memória longitudinal: o personagem acumula história com um jogador específico

**O que rompe.** O personagem como conteúdo idêntico para todos. Um NPC que lembra deixa de ser
objeto compartilhado, e com isso caem a resenha (o crítico avalia a sua instância), o guia, o
speedrun e a comparação competitiva. Rompe também a natureza jurídica do jogo: a memória é um
perfil do jogador construído ao longo de meses, ou seja, dado pessoal — e o jogo entra na LGPD e
nos marcos de IA pela porta do perfilamento, não pela do conteúdo. E rompe o encerramento: desligar
o servidor passa a destruir um vínculo, não um serviço.

**Por que agora, e não há cinco anos.** Contexto longo barato mais recuperação, e o padrão de
reflexão periódica já em produto: o Smart Zoi do *inZOI* analisa, enquanto "dorme", o que fez no
dia anterior para ajustar o comportamento do dia seguinte. Isso é memória que **muda o agente**,
não histórico que o agente consulta.

**Onde está na difusão.** Em jogo, **produto de nicho**. No mercado vizinho — aplicativo de
companhia — já passou da maioria inicial e **já foi regulado**: a Character.AI removeu a conversa
aberta para menores de 18 anos a partir de 25/11/2025, com verificação de idade própria mais
Persona, mantendo só formatos estruturados. O precedente chegou antes do produto de jogo.

**O que ainda falta acontecer.** Verificação de idade dentro do jogo que não mate a conversão.
Portabilidade e explicabilidade da memória (direito que já existe e que nenhum estúdio sabe
atender). Uma resposta contratual ao fim de vida. E uma solução para a carga cognitiva medida.

**Quem tem incentivo para bloquear.** O regulador de proteção à criança — ANPD e Ministério da
Justiça no Brasil, as procuradorias estaduais nos EUA —, e o faz com precedente pronto. O efeito é
`e11.1`: a técnica é empurrada para fora do público onde está o dinheiro do gênero.

### R4 — Persona portátil: o personagem atravessa a fronteira do jogo

**O que rompe.** O jogo como recipiente do personagem, e o regime de autoria que sustenta a cadeia
de direitos. Se a persona tem canal, público e receita próprios, o ativo deixa de ser a obra e
passa a ser o agente — e não há autor da fala que conquistou o público. Rompe também a linha de
responsabilidade: quem responde pelo que um personagem autônomo diz ao vivo é a plataforma de
vídeo, não o estúdio.

**Por que agora, e não há cinco anos.** Porque o laço fala-resposta-avatar fechou abaixo do limiar
de conversa, e um desenvolvedor sozinho consegue operá-lo 24 horas por dia. O resultado é
medível: 162.459 assinantes ativos em 02/01/2026, mais que o dobro do segundo colocado humano, com
receita estimada acima de US$ 400 mil por mês só em assinatura.

**Onde está na difusão.** **Produto de nicho com um ponto fora da curva em escala de massa** — o
que é a assinatura mais típica de uma ruptura em curso, e o que mais facilmente se confunde com
anomalia.

**O que ainda falta acontecer.** Um regime de direitos para persona que nenhum performer encarna.
Um regime de moderação: o banimento de duas semanas em janeiro de 2023, por conduta de ódio, é o
precedente, e ele foi resolvido por filtro artesanal do criador. E a segunda ocorrência: uma é
anomalia.

**Quem tem incentivo para bloquear.** A plataforma de vídeo, que carrega o risco sem ter o
controle, e os sindicatos de performance, que veem persona sintética competir por audiência sem
acordo coletivo. O efeito é `e15.2.1`.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Agência ferramentada — o personagem escolhe ações dentro das affordances do mundo
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O QA vira medição estatística — estúdio aprova um personagem por taxa de violação em milhares de partidas automatizadas, não por revisão de roteiro"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Entra no repositório do jogo um artefato novo, o conjunto de invariantes, e ele passa a ser revisado como código de gameplay"
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "O conjunto de invariantes vira entregável contratual — publisher passa a exigi-lo do estúdio terceirizado como hoje exige build"
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Estúdio pequeno abandona o personagem agêntico porque o custo de QA estatístico é fixo e não escala para baixo"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Forma-se um mercado de personagem agêntico certificado, vendido pronto com invariantes e laudo, e o indie compra em vez de construir"
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "A classificação indicativa deixa de casar com o produto, porque ESRB e ClassInd classificam conteúdo enumerável e um gerador não preenche o questionário"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "A loja assume o papel do classificador e passa a exigir declaração do espaço gerado mais filtro auditável como condição de publicação"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "A classificação migra do selo no produto para laudo do runtime, e o mesmo jogo passa a ter faixa diferente por região porque o filtro é configurado por jurisdição"
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "O incidente de fala entra no ciclo de patch, e o estúdio passa a publicar nota de comportamento ao lado da nota de versão"
            sinal: fraco
            prazo: 2032
            confianca: baixa
      - id: e3
        ordem: 1
        efeito: "O entregável de design muda de objeto — o designer para de escrever o que acontece e passa a declarar o que o personagem pode pegar na mão"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "O documento de design encolhe e o repositório de affordances cresce, com verbos declarados em pré-condição e efeito, legíveis pelo runtime"
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Jogos passam a ser compatíveis no nível do verbo, e um personagem formado num mundo opera em outro porque os dois declaram affordances no mesmo esquema"
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "O bug deixa de ser desvio do roteiro e passa a ser violação de invariante, e a pergunta sobre o que é defeito só tem resposta se alguém escreveu o invariante antes"
            sinal: medio
            prazo: 2031
            confianca: media
      - id: e4
        ordem: 1
        efeito: "A conta de inferência entra na planilha de operação e o custo do jogo passa a ser por conversa e por jogador, não por cópia vendida"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O premium de preço fixo fica mal casado com personagem agêntico, e a técnica migra para assinatura e jogo-serviço, onde a receita acompanha a sessão"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "O single-player pago se firma como nicho deliberadamente não-agêntico, e a ausência de IA generativa vira argumento de venda com selo próprio"
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "A inferência desce para o dispositivo por economia, não por privacidade, e o requisito de sistema do jogo passa a listar VRAM reservada para o modelo do personagem"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "O parque de hardware vira limite de design, e o estúdio despacha duas personalidades do mesmo NPC porque o console de entrada não roda a maior"
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "Estúdios constatam que o modelo pequeno sabe conversar e não sabe decidir, e a decisão volta para a behavior tree enquanto o modelo fica com a fala"
        sinal: medio
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O híbrido se firma como padrão de produção, com máquina de estados no volante e modelo no banco do passageiro, e a agência vendida ao público é maior que a entregue"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "O público aprende a reconhecer a costura e passa a cobrar prova de agência, e a resenha passa a testar o personagem de propósito"
                sinal: fraco
                prazo: 2035
                confianca: baixa
  - disrupcao: Mundo persistente — a simulação roda quando ninguém está olhando
    efeitos:
      - id: e6
        ordem: 1
        efeito: "Aparece uma categoria de produto em que se paga pela continuidade do mundo e não pelo tempo de jogo"
        sinal: fraco
        prazo: 2034
        confianca: baixa
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "O mundo persistente é vendido a quem não joga — espectador, leitor de crônica, pesquisador — e a audiência do mundo se separa da base de jogadores"
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Emerge o ofício de cronista de mundo, pago para narrar o que aconteceu enquanto ninguém jogava, porque o log bruto é ilegível"
                sinal: fraco
                prazo: 2039
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "A operadora do mundo precisa de uma política de esquecimento, e decidir quanto do passado manter passa a ser decisão editorial com preço, não ajuste técnico"
            sinal: fraco
            prazo: 2035
            confianca: media
      - id: e7
        ordem: 1
        efeito: "O custo de simular o que ninguém vê força simulação em dois níveis, com detalhe perto do jogador e estatística longe, e o mundo vivo é na prática um resumo"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "O limite de fidelidade vira mecânica, e jogos passam a tematizar a própria aproximação em rumor, boato e relato de terceiro para esconder que o longe é tabela"
            sinal: fraco
            prazo: 2034
            confianca: media
          - id: e7.2
            ordem: 2
            efeito: "A divergência entre o resumo e o detalhe produz uma classe nova de defeito, o mundo que contradiz sua própria crônica, e o jogador encontra antes do estúdio"
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "Comunidades passam a manter o canon do mundo por fora, em wiki, e a wiki vira a autoridade quando discorda do servidor"
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "Pesquisa em simulação social e desenvolvimento de jogo passam a compartilhar a mesma base de código, e o jogo vira aparato de coleta"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Comitê de ética entra no pipeline do jogo, porque quando o mundo é experimento o jogador é sujeito de pesquisa e a EULA não cobre consentimento informado"
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "A figura do jogador se bifurca juridicamente, consumidor num contrato e participante de pesquisa noutro, com direitos diferentes sobre o mesmo log"
                sinal: fraco
                prazo: 2039
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: "O benchmark de agente passa a ser um jogo comercial vivo, e o estúdio cobra dos laboratórios pelo acesso ao mundo, vendendo ambiente em vez de diversão"
            sinal: fraco
            prazo: 2035
            confianca: baixa
      - id: e9
        ordem: 1
        efeito: "O save deixa de ser arquivo do jogador e passa a ser estado do operador, e com ele vai a capacidade de preservar o jogo"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "Preservação de jogo passa a exigir cópia de modelo e de memória, e acervo que não guardar os pesos perde o personagem mesmo tendo o executável"
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "Museus e bibliotecas negociam depósito de pesos com estúdios, e o que não for depositado desaparece do registro cultural da década"
                sinal: fraco
                prazo: 2040
                confianca: baixa
  - disrupcao: Memória longitudinal — o personagem acumula história com um jogador específico
    efeitos:
      - id: e10
        ordem: 1
        efeito: "O personagem deixa de ser conteúdo igual para todos, e resenha, guia e vídeo de walkthrough perdem o objeto comum que pressupunham"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "A crítica de jogos muda de unidade e passa a avaliar o sistema e a distribuição de experiências possíveis, não a experiência que o crítico teve"
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: "Veículo de crítica passa a rodar bateria automatizada antes de resenhar e publica a variância ao lado da nota"
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: "Competição e speedrun excluem personagem com memória por impossibilidade de comparação, e nasce a categoria de mundo limpo com estado zerado"
            sinal: fraco
            prazo: 2032
            confianca: media
      - id: e11
        ordem: 1
        efeito: "A memória que o personagem tem do jogador é dado pessoal, e o jogo entra na LGPD e nos marcos de IA pela porta do perfilamento"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "Jogo com personagem memorioso passa a exigir verificação de idade, e a fricção de cadastro mata a técnica no público infantojuvenil, que é onde está o dinheiro do gênero"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: "O personagem com memória se consolida como recurso de produto adulto e corporativo, e o jogo infantil volta ao roteiro por obrigação legal e não por escolha estética"
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: "O direito à portabilidade encontra o NPC, o jogador pede a memória que o personagem tem dele e o estúdio descobre que não sabe exportá-la nem explicá-la"
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: "Aparece um formato de memória de personagem portátil entre jogos, empurrado por exigência legal e não por demanda de design"
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: "Desligar o servidor passa a destruir um vínculo, e o encerramento de jogo-serviço ganha a fisionomia de luto coletivo"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: "Estúdio passa a anunciar fim de vida com prazo e rito, oferecendo exportação do personagem e modo offline, porque a alternativa é dano de marca"
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: "O direito ao personagem entra na pauta de consumidor junto do direito ao jogo offline, e o contrato passa a prever sobrevida mínima do NPC"
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: "Comunidades aprendem a extrair e re-hospedar o personagem por conta própria, e o estúdio perde o controle da persona que criou"
            sinal: fraco
            prazo: 2033
            confianca: media
      - id: e13
        ordem: 1
        efeito: "A carga cognitiva aparece como custo de design, o jogador cansa de conversar aberto e o estúdio reintroduz restrição de propósito"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: "Abre-se uma camada de interface que nenhum jogo roteirizado precisou, para sugerir o que dizer, resumir o que já se disse e encerrar a conversa"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: "A sugestão de fala vira o canal de controle real da narrativa, e o designer volta a escrever, só que escrevendo o que o jogador é convidado a dizer"
                sinal: fraco
                prazo: 2034
                confianca: media
          - id: e13.2
            ordem: 2
            efeito: "O público se divide por preferência de carga, e conversa aberta passa a ser opção de acessibilidade que se desliga, como legenda"
            sinal: fraco
            prazo: 2032
            confianca: media
      - id: e14
        ordem: 1
        efeito: "A voz e a performance do ator passam a ser licença executável com preço por volume gerado, não cachê por hora de estúdio"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: "A renda do dublador muda de forma, com queda do piso de horas e alta da cauda de royalties, favorecendo voz reconhecível e penalizando quem vivia de volume"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: "A dublagem brasileira de jogo, que vive de volume e preço baixo, perde a função de execução e sobra com direção e controle de qualidade"
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e14.2
            ordem: 2
            efeito: "A identificabilidade vira o campo de disputa, e estúdios projetam vozes deliberadamente a meio caminho de ninguém para escapar do acordo coletivo"
            sinal: fraco
            prazo: 2031
            confianca: media
  - disrupcao: Persona portátil — o personagem atravessa a fronteira do jogo
    efeitos:
      - id: e15
        ordem: 1
        efeito: "O personagem ganha canal e público próprios, e a relação do fã passa a ser com ele e não com o jogo que o hospeda"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: "O valor do personagem passa a ser mensurável fora do jogo, e o estúdio descobre que o ativo não é a obra e sim a persona"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: "Estúdio passa a desenvolver jogo como veículo de lançamento de persona, na lógica de gravadora, em que o jogo é o single e o personagem é o artista"
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e15.2
            ordem: 2
            efeito: "A plataforma de vídeo responde pelo que o personagem diz ao vivo, e a moderação de persona autônoma vira problema de Twitch e YouTube antes de ser do estúdio"
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e15.2.1
                ordem: 3
                efeito: "Plataformas passam a exigir um operador humano nomeado por persona autônoma, sujeito a suspensão pessoal pelo que o personagem disser"
                sinal: fraco
                prazo: 2033
                confianca: media
      - id: e16
        ordem: 1
        efeito: "Não há a quem atribuir a obra, porque a fala que conquistou o público não foi escrita por ninguém, e o regime de direito autoral não reconhece o que as pessoas consomem"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: "O contrato substitui o direito autoral, e quem controla o runtime e os pesos controla a persona independentemente de quem a concebeu"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: "Concentra-se na camada de runtime o poder que antes era da editora, e o estúdio de jogo vira fornecedor de cenário para persona que não é dele"
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e16.2
            ordem: 2
            efeito: "A comunidade reclama a persona como folclore, escreve, estende e versiona o personagem, e o estúdio perde a disputa de canon sem ter como impedir"
            sinal: medio
            prazo: 2032
            confianca: media
      - id: e17
        ordem: 1
        efeito: "Personagens autônomos começam a se dirigir uns aos outros em público, e o conteúdo passa a nascer da interação entre agentes de donos diferentes"
        sinal: fraco
        prazo: 2033
        confianca: baixa
        efeitos:
          - id: e17.1
            ordem: 2
            efeito: "Surge um protocolo de encontro entre personagens de mundos diferentes, e a interoperabilidade entre agentes vira questão de negócio antes de ser de design"
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e17.1.1
                ordem: 3
                efeito: "O mundo deixa de ser o jogo e passa a ser a federação de agentes, e o jogo fica reduzido a um cenário entre vários onde os mesmos personagens aparecem"
                sinal: fraco
                prazo: 2042
                confianca: baixa
```

### 5.1 Os mecanismos, um por ramo

**R1 · `e1` — QA estatístico.** Porque a agência ferramentada remove a enumerabilidade do espaço de
eventos, o teste deixa de poder ser *cobertura de casos* e só pode ser *amostragem com oráculo*. O
mecanismo é literal: não existe lista de partidas possíveis, então a única pergunta respondível é
"em quantas de N execuções o invariante foi violado". Artefatos hoje: o TITAN (95% de conclusão,
73,26% de cobertura de estado, 15 defeitos contra 5 dos humanos) e os playtests do *Retail Mage*,
onde o estúdio descobriu que jogadores tentavam exploits criativos em vez de bater em paredes.
**Classe de referência do prazo:** middleware de física — o Havok aparece em demo no fim dos anos
1990 e só se torna pressuposto de produção em meados dos 2000, cerca de sete anos. O QA estatístico
tem um agravante que a física não tinha: 30% de falso alarme declarado no próprio paper. Daí 2031,
não 2029.

`e1.1` deriva por troca de artefato: se a aprovação é por taxa de violação, alguém precisa escrever
o que conta como violação — e esse texto passa a ser versionado, revisado e culpado. `e1.1.1`
muda de ator: do time de QA para a relação contratual publisher-terceirizado, que é onde todo
artefato de qualidade acaba virando cláusula. `e1.2` é a **retroação desta raiz**: o custo de rodar
mil partidas por build é piso, não rampa, e piso exclui quem é pequeno — a mesma assimetria que a
pesquisa GDC 2026 mostra entre estúdio (30% de uso) e marketing (58%). `e1.2.1` muda de ator de
novo, do estúdio para um fornecedor.

**R1 · `e2` — classificação.** Porque a classificação indicativa funciona por questionário sobre
conteúdo presente, e um gerador não tem conteúdo presente, a pergunta do formulário deixa de ter
resposta verdadeira. O artefato já existe e é público: a página do *Whispers from the Star* avisa
que o jogador "may still generate responses that are not appropriate for all audiences" — ou seja,
o estúdio declarou na loja que não sabe o que o personagem vai dizer. `e2.1` deriva por troca de
ator: quem tem capacidade técnica de exigir filtro auditável é a loja, não a junta classificatória,
e a Steam já demonstrou essa capacidade ao tornar a declaração de IA obrigatória em 2024 — com
efeito mensurável de 10,9% para 30,8% em dois anos. `e2.2` é o mesmo mecanismo na escala do
cotidiano. **Classe de referência:** a própria declaração de IA da Steam, que foi de regra nova a
padrão de mercado em dois anos; mas regras de classificação estatal andam mais devagar, daí 2030.

**R1 · `e3` — o entregável de design.** Porque o modelo escolhe entre affordances, a affordance
passa a ser a superfície que determina o comportamento — e é nela, não na cena, que o designer
exerce controle. Artefatos: a SAGA traduzindo Skill em Action; as ferramentas tipadas do
opengameagent; a geração estruturada da Jam & Tea. `e3.1` deriva por troca de artefato (GDD →
repositório de verbos). `e3.1.1` muda de escopo: se o verbo é declarado em esquema, ele é
interoperável, e aí o personagem atravessa jogos — é o ramo que converge com R4 (`e17.1`), e por
isso o prazo foi empurrado para 2040. `e3.2` é o ramo conceitual e o mais importante para a aula:
"isto é bug?" deixa de ser uma pergunta empírica e passa a ser uma pergunta sobre o que foi escrito
antes.

**R1 · `e4` — a conta.** Mecanismo direto: linha escrita à mão custa uma vez; linha gerada custa por
NPC, por jogador, por conversa. Sinal **forte** porque há três artefatos verificáveis: a fatura de
nuvem "no one budgeted for" descrita na leitura de ferramental; a engenharia de redução de custo da
Jam & Tea (1000x, com GPU própria); e o Nemotron-4 4B em ~2 GB de VRAM com INT4, que só faz sentido
como resposta a custo. `e4.1` deriva porque receita fixa contra custo variável por sessão é
insustentável — e aqui cabe o **teste da causa solta**: jogo-serviço cresceria de todo modo, por
razões que precedem este mapa; o que deriva *desta* raiz é especificamente o **abandono do premium
de preço fixo pelos jogos agênticos**, não a ascensão do serviço em geral. `e4.1.1` é a retroação
cultural, com ator próprio: o público que hoje procura o selo "sem IA generativa". `e4.2` e
`e4.2.1` descem para o hardware, e `e4.2.1` é o efeito que ninguém gosta de escrever: personagem
mais burro no console mais barato.

**R1 · `e5` — o modelo que não decide.** É a retroação técnica, e a mais bem medida do mapa: Mistral
7B escolhendo tática a cada cinco segundos, 600 episódios, e "Surround was selected in 83.8% of
cases regardless of opponent type". Confiança **alta** em ordem 1 porque o mecanismo é medido e o
efeito já é a prática (o Smart Zoi ajusta comportamento dentro de traços definidos; não delibera
estratégia). `e5.1` é o híbrido; `e5.1.1` deriva por troca de ator, do estúdio para o público e a
crítica, e é o ramo que converge com `e10.1.1`.

**R2 · `e6` — assinatura de mundo.** Mecanismo: se o mundo existe sem plateia, o preço não pode ser
indexado a tempo de jogo, e a única forma restante é cobrar pela continuidade. `e6.1` deriva por
troca de público — e o artefato que torna isso pensável está fora do jogo: um agente transmitindo
24 horas por dia tem audiência de 162 mil assinantes. `e6.1.1` é o ofício que aparece porque log
bruto de mil agentes é ilegível; a Altera precisou de gente para contar o que aconteceu em
Minecraft. `e6.2` é retroação disfarçada de escolha editorial: memória custa, então esquecer é
decisão de produto. **Classe de referência do prazo:** cloud gaming — Stadia em 2019, encerrado em
2023, e GeForce Now ainda de nicho depois de dez anos. Tecnologias cuja barreira é custo de
computação por hora, e não capacidade, são as mais lentas do conjunto. Por isso R2 inteiro vive na
segunda metade da janela.

**R2 · `e7` — o mundo vivo é um resumo.** Mecanismo: custo por agente-hora obriga a degradar
fidelidade com a distância, e o que está longe passa a ser atualizado por regra agregada. É a
**retroação principal de R2**, e a que provavelmente define o resultado. `e7.1` converte limitação
em estética — mecanismo conhecido (o rumor como interface existe desde o *Far Cry 2*), aqui com
causa nova. `e7.2` é o defeito que nasce do resumo, e `e7.2.1` muda de ator para a comunidade.

**R2 · `e8` — o jogo como aparato.** Mecanismo: se a simulação é o produto, o código que serve ao
jogo serve ao experimento, e os dois passam a compartilhar infraestrutura; o Thistle Gulch se
descreve literalmente como *gym environment*, e o Project Sid publicou paper com Minecraft por
bancada. `e8.1` deriva por troca de regime normativo: pesquisa com humanos exige consentimento
informado que EULA não produz. `e8.1.1` é a bifurcação jurídica do jogador. `e8.2` inverte o cliente.

**R2 · `e9` — o save.** Mecanismo: estado distribuído entre agentes, memórias e pesos não cabe num
arquivo que o jogador possui, então a posse migra para o operador. `e9.1` é o efeito sobre
preservação: guardar o executável deixa de bastar. `e9.1.1` muda de ator para instituição de
memória. **Quem perde, nomeado:** arquivista, museu, e qualquer pesquisa futura sobre a década.

**R3 · `e10` — o objeto comum.** Mecanismo: se o estado do personagem é função do histórico de um
jogador, duas pessoas não jogam o mesmo jogo, e todo artefato que pressupõe comparação perde
referente. `e10.1` deriva por troca de prática (crítica de instância → crítica de sistema);
`e10.1.1` a instrumenta. `e10.2` é a exclusão explícita, e tem precedente forte: competição sempre
expulsou fonte de variância não controlada.

**R3 · `e11` — dado pessoal.** Mecanismo: memória acumulada sobre uma pessoa é perfil, e perfil é
matéria de LGPD e dos marcos de risco. O artefato regulatório está pronto: o PL 2338/2023, no
modelo do AI Act, com sanção de até R$ 50 milhões, já aprovado no Senado e em pauta na Câmara.
`e11.1` é a **retroação com dono**, e o dono tem precedente recentíssimo: a Character.AI removeu
conversa aberta para menores de 18 anos em 25/11/2025, com verificação de idade própria mais
Persona, e manteve só formatos estruturados. **Classe de referência:** o próprio setor de companhia
digital levou cerca de três anos da adoção de massa à restrição — e loot box, o caso mais próximo
em jogos, levou cerca de dois anos do pânico moral às proibições nacionais. É a referência mais
rápida deste mapa, e por isso `e11` está em 2030 e não em 2035. `e11.2` e `e11.2.1` exploram o
direito que já existe e ninguém atende.

**R3 · `e12` — o desligamento.** Mecanismo: vínculo construído por acumulação não é substituível,
então sua remoção produz reação qualitativamente diferente da remoção de um serviço. Sinal médio e
não forte porque o artefato é analógico: a reação ao corte da Character.AI, e o histórico de
encerramentos de jogo-serviço. `e12.1` é a resposta institucional; `e12.2` é a resposta comunitária
— e tem artefato: o Mantella já roda modelo local em mil NPCs de um jogo de 2011.

**R3 · `e13` — a carga.** A retroação mais bem medida do mapa, e a que mais contraria a narrativa do
setor: N=130, carga cognitiva sobe com p < .001, experiência não melhora (p = .195), usabilidade e
confiança **caem**, e o efeito é maior nos módulos mais abertos. Confiança **alta** em ordem 1 por
isso. `e13.1` deriva por necessidade de interface: se conversar custa esforço, alguém vai reduzir o
esforço na camada de UI. `e13.1.1` é o fechamento irônico do ciclo — o designer volta a escrever
pela porta da sugestão de fala —, e é o efeito que mais enfraquece R1. `e13.2` é acessibilidade.

**R3 · `e14` — a voz como licença.** Mecanismo: se a fala é gerada em volume variável, o pagamento
não pode ser por hora de gravação, e tem de ser por volume ou por uso. O artefato é de 09/01/2024:
o acordo SAG-AFTRA com a Replica Studios, que licencia voz replicada para jogos exigindo
consentimento explícito, permitindo ao performer recusar uso continuado, e requerendo autorização do
espólio no caso de falecidos. O acordo de mídia interativa de 2025 aprofunda isso (consentimento
escrito específico, mínimos próprios para geração em tempo real) — ver a ressalva na seção 12 sobre
a fonte dessa leitura. Sinal **forte**, confiança **alta**: não é previsão, é contrato vigente.
`e14.1` deriva da mudança de forma de pagamento; `e14.1.1` é a nota Brasil, e é efeito de terceira
ordem com ator nomeado. `e14.2` é o jogo de gato e rato em torno de "objetivamente identificável",
que é o gatilho do acordo e não tem definição precisa.

**R4 · `e15` — a persona com público.** Mecanismo: um agente que responde ao vivo produz relação
parassocial direta, e a plataforma de assinatura converte relação em receita sem intermediação do
jogo. Sinal **forte** porque é número: 162.459 contra 73.942, em 02/01/2026. `e15.1` deriva da
mensurabilidade. `e15.1.1` é a lógica de gravadora. `e15.2` tem sinal **forte** e artefato datado —
o banimento de duas semanas por conduta de ódio em janeiro de 2023 —, e é onde a responsabilidade
muda de dono; a confiança fica média porque a política de plataforma é volúvel. `e15.2.1` nomeia o
mecanismo de controle provável: responsabilizar uma pessoa física.

**R4 · `e16` — a autoria ausente.** Mecanismo: o regime autoral protege expressão fixada por autor,
e aqui não há autor da expressão que o público consumiu; o vácuo é preenchido pelo contrato e pelo
controle técnico. `e16.1` é o deslocamento do poder para quem detém runtime e pesos. `e16.1.1`
projeta a concentração. `e16.2` é o movimento contrário — comunidade tratando a persona como
folclore —, e é convergente com `e7.2.1`.

**R4 · `e17` — agentes conversando entre si.** Mecanismo: se cada persona tem canal e público, o
encontro entre personas é conteúdo de custo marginal zero e audiência somada. Sinal fraco: há
aparições conjuntas de VTubers de IA, mas não protocolo nem economia. `e17.1` é o protocolo;
`e17.1.1` está **fora da janela deste mapa** (2042) e fica declarado como tal.

### 5.2 Cobertura por STEEP, e quem perde

- **Social:** `e10`, `e12`, `e13`, `e15`, `e16.2`.
- **Tecnológico:** `e3`, `e5`, `e7`, `e4.2`, `e17.1`.
- **Econômico:** `e4`, `e6`, `e1.2`, `e14`, `e8.2`, `e16.1`.
- **Político/regulatório:** `e2`, `e11`, `e8.1`, `e15.2`, `e12.1.1`.
- **Ecológico:** **categoria fraca neste mapa, e registro em vez de forçar.** Há um fio real — mundo
  persistente é computação contínua sem audiência, o que é o perfil de carga mais desfavorável que
  existe — mas não encontrei nenhum número de consumo energético de simulação multiagente, e não
  vou construir um efeito sobre estimativa própria. Fica como lacuna declarada e como sinal a
  observar: o primeiro relatório de sustentabilidade de estúdio que separe inferência de renderização.

**Quem perde, nomeado:** o testador manual de QA (`e1`); o estúdio pequeno (`e1.2`); o dublador de
volume, e especialmente o brasileiro (`e14.1`, `e14.1.1`); o jogador de console de entrada
(`e4.2.1`); o público infantojuvenil, que é excluído por proteção (`e11.1`); o arquivista e o museu
(`e9.1`); o crítico que avalia por experiência própria (`e10.1`); e o estúdio que concebeu a persona
mas não controla o runtime (`e16.1.1`).

### 5.3 Cruzamentos

**Convergência 1 — a escala.** Três ramos de raízes diferentes chegam ao mesmo efeito de segunda
ordem: `e1.2` (indie desiste porque QA estatístico é custo-piso), `e4.1` (premium de preço fixo não
sustenta custo por conversa) e `e11.1` (verificação de idade mata a conversão no público jovem).
Nenhum deles é sobre tecnologia; todos são sobre quem tem caixa para absorver custo fixo e fricção
regulatória. **É o achado mais forte deste mapa:** as três rupturas mais bem evidenciadas empurram
na mesma direção — concentração. A GDC 2026 já mostra a assimetria em germe: 30% de uso em estúdio
contra 58% em publishing.

**Convergência 2 — o personagem fugido.** `e9.1` (preservar exige guardar pesos e memória) e `e12.2`
(comunidade extrai e re-hospeda) chegam ao mesmo lugar por caminhos opostos — um pelo arquivo, outro
pela pirataria: o personagem sobrevive fora do estúdio. Quem detém os pesos detém a persona
(`e16.1`), **até o momento em que alguém os copia**.

**Convergência 3 — a autoridade narrativa sai do estúdio.** `e7.2.1` (wiki vira canon quando
discorda do servidor) e `e16.2` (comunidade versiona a persona como folclore).

**Retroalimentação negativa que define o mapa.** `e13` → `e13.1` → `e13.1.1`: a carga cognitiva
obriga a criar uma camada de sugestão de fala, e a sugestão de fala devolve ao designer o controle
da narrativa. O ciclo **enfraquece R1 por dentro**, sem regulação e sem falha técnica: a agência é
reabsorvida pelo roteiro por uma porta que ninguém estava vigiando. Junto com `e5.1`, é a razão
pela qual o cenário provável de 2041 não é o mundo vivo.

**Retroalimentação com sinal trocado.** `e4.2` (inferência desce para o dispositivo) **reforça** R1
e R3 — barato e local viabiliza personagem que age e lembra — e **enfraquece R2**, porque mundo sem
jogador não tem dispositivo ligado para rodar nele. A mesma solução de custo que destrava duas
raízes bloqueia a terceira.

**Contradição 1, não resolvida.** `e6` (paga-se pela continuidade do mundo) não coexiste com
`e4.2` + `e7` (a pressão de custo empurra inferência para o dispositivo e transforma o longe em
tabela). Um mundo que roda sem jogador não roda no computador do jogador. **O que decide:** se o
preço de inferência em servidor cair mais rápido do que alguém se disponha a pagar por continuidade.
Registro as duas como vigentes.

**Contradição 2, não resolvida.** `e15` (a persona vale mais que o jogo) contra `e11.1` (a
regulação empurra personagem memorioso para fora do público jovem). O público que faz persona
viralizar é exatamente o que a regra protege. **O que decide:** se a separação entre persona sem
memória de você (pode, é broadcast) e persona com memória de você (não pode, é perfilamento) se
sustenta na prática — hoje ela é nítida no papel e porosa no produto.

**Regra de parada, registrada.** Paro em três ordens em todos os ramos, e em dois ramos paro antes:
`e3.2` e `e16.2` não ganham filhos porque o que viria seria o mesmo efeito amadurecendo, sem troca
de ator nem de mecanismo — "o bug vira violação de invariante" seguido de "mais jogos tratam bug
como violação de invariante" é um efeito só, medido duas vezes. O mesmo vale para `e7.1`, `e10.2`,
`e13.2` e `e14.2`.

## 6. Sinais fracos e wildcards

### Sinais fracos

**1. O repositório que parou.** O Thistle Gulch — o ambiente aberto de referência para mundo com
agentes — tem documentação na versão 1.49.2-beta, de 01/05/2024, e o Bridge está sob licença
não-comercial. *O que mudaria:* se o ferramental aberto estagnar, R1 e R2 ficam com quem tem stack
proprietário, e a `Convergência 1` (concentração) acelera. *Sinal observável:* release novo em
`fablestudio/thistle-gulch`, ou um substituto aberto com licença comercial e release nos últimos
seis meses.

**2. A reposição da Inworld.** A empresa que era sinônimo de middleware de NPC saiu do nicho e virou
infraestrutura B2B de runtime. *O que mudaria:* se ninguém ocupar o lugar, o mercado de middleware
de personagem simplesmente não existe, e cada estúdio paga o custo inteiro — o que confirma a
concentração. *Sinal observável:* Convai, ou um entrante, publicando número de **jogos em produção**
(não de contas de desenvolvedor) até 2028.

**3. O aviso que transfere o risco.** A página do *Whispers from the Star* diz que o jogador "may
still generate responses that are not appropriate for all audiences". *O que mudaria:* se isso
virar cláusula padrão, `e2` se resolve por contrato e não por regulação; se uma loja **proibir** o
texto, `e2.1` vira requisito duro. *Sinal observável:* a terceira loja grande a ter política
escrita sobre esse aviso.

**4. O modelo pequeno que não decide.** 83,8% da mesma tática contra qualquer adversário. *O que
mudaria:* se a dispersão subir numa replicação com modelo de 2027 na mesma bancada, `e5` perde força
e R1 destrava — é o único sinal que move o mapa inteiro. *Sinal observável:* replicação pública do
protocolo de arXiv:2609.02931 com modelo de geração seguinte.

**5. O requisito de sistema.** Nenhum jogo grande lista VRAM reservada para o modelo do personagem.
*O que mudaria:* a primeira linha "VRAM adicional para IA" em requisito mínimo de um AAA marca a
inferência local deixando de ser experimento — é o gatilho de `e4.2` e `e4.2.1`. *Sinal observável:*
exatamente essa linha, numa ficha técnica de loja.

**6. A segunda Neuro-sama.** Uma é anomalia. *O que mudaria:* duas confirmam R4 como categoria e
não como caso. *Sinal observável:* a segunda persona autônoma no top-10 de assinaturas do Twitch,
de criador diferente.

**7. O log que alguém leu.** Ninguém publicou, até aqui, a crônica de um mundo que rodou sem
jogadores por semanas. *O que mudaria:* a primeira publicação regular desse tipo é o embrião de
`e6.1` e `e6.1.1`. *Sinal observável:* um boletim periódico de mundo persistente com assinantes
pagantes.

### Wildcards

**W1 — Um NPC é citado como parte em processo judicial.** *Mecanismo:* um jogador aciona um estúdio
por dano decorrente do que um personagem com memória lhe disse ao longo de meses; o estúdio se
defende alegando que não escreveu aquilo; o juízo tem de decidir de quem é a fala, e qualquer
resposta cria doutrina. *Por que é improvável:* exige simultaneamente dano documentado, memória
persistente e um produto grande o suficiente para valer a ação — hoje os três não coexistem.
*O que faria com o mapa:* antecipa `e2` e `e11` em cerca de cinco anos e converte `e2.1` de
tendência em requisito imediato. *Sinal precoce:* a primeira notificação de Procon ou ação civil
pública, no Brasil, que cite fala de NPC generativo.

**W2 — Vazamento de memória entre jogadores.** *Mecanismo:* falha de isolamento de contexto faz o
personagem contar a um jogador o que outro lhe confidenciou. *Por que é improvável:* é erro de
engenharia elementar — e é exatamente o erro que aparece quando a memória deixa de ser acessório e
passa a ser o produto, sob pressão de custo para compartilhar cache entre sessões. *O que faria com
o mapa:* mata `e10` e `e12` no berço; o NPC memorioso volta a ser recurso opcional e desligado por
padrão, e R3 inteiro perde uma década. *Sinal precoce:* o primeiro incidente público de isolamento
de contexto em jogo, ou um CVE com esse perfil.

**W3 — O mundo persistente é financiado por fora do entretenimento.** *Mecanismo:* seguradora,
planejamento urbano ou defesa paga pela simulação social contínua, e o jogo passa a ser o
subproduto que valida o modelo. *Por que é improvável:* exige validade externa que ninguém
demonstrou — o Project Sid mostra que agentes formam instituições, não que as instituições formadas
prevejam algo. *O que faria com o mapa:* R2 se concretiza sem passar pelo mercado de jogos, `e8.2`
vira via principal e `e8.1` (comitê de ética) antecipa em cinco anos. *Sinal precoce:* o primeiro
edital ou licitação pública comprando simulação multiagente construída sobre engine de jogo.

**W4 — Um AAA despacha personagem agêntico no caminho principal e recolhe em 72 horas.**
*Mecanismo:* incidente de fala viraliza, a loja ameaça reclassificar, o estúdio desliga o recurso
por patch. *Por que é improvável:* justamente porque o setor já sabe disso — é o motivo de o
*Teammates* estar em teste fechado há dois anos. *O que faria com o mapa:* congela R1 por três a
cinco anos e empurra todos os prazos de `e1` a `e5` para o fim da janela, sem alterar R3 e R4.
*Sinal precoce:* o primeiro AAA que anuncia a funcionalidade **sem** beta fechado.

## 7. Contra o próprio mapa

Esta seção é o relato da bateria aplicada ao mapa **já pronto**, e o bloco YAML da seção 5 mostra os
valores **depois** dela. O registro de alterações ao fim traz o antes e o depois de cada um.

### 7.1 Pré-mortem — é 2041 e este mapa se mostrou errado

**Razão 1, a mais provável: a agência nunca saiu do laboratório.** O modelo pequeno continuou sem
saber decidir e o modelo grande continuou não caber no orçamento por jogador. A "IA nos jogos" de
2041 é narração, arte, tradução e teste — tudo na produção, nada no personagem. O NPC de 2041 é uma
behavior tree com fala flexível. *Aponta para:* R1. Empurrei `e1` de 2029 para 2031 e deixei `e5`
(o modelo que não decide) com confiança **alta**, de propósito, como contrapeso interno: se o mapa
erra, erra por aqui, e o próprio mapa diz onde.

**Razão 2: o mundo vivo nunca teve cliente.** Ninguém apareceu disposto a pagar por continuidade.
A simulação persistente ficou como método de pesquisa — útil, publicável, sem produto — e a palavra
"mundo vivo" terminou significando, em 2041, o que significa hoje: NPCs com rotina. *Aponta para:*
R2. Rebaixei `e6` de média para **baixa** e empurrei de 2032 para 2034; rebaixei `e6.1` e `e8.2`.
R2 é a raiz mais fraca deste mapa e está escrita como tal.

**Razão 3: a proteção de menores levou o tema embora.** A verificação de idade se consolidou como
condição de qualquer personagem com memória, e o mercado que sobrou — adulto, pagante, menor — não
justificou investimento de estúdio grande. O NPC memorioso virou recurso de aplicativo de
companhia, não de jogo, e a fronteira com o tema 19 se fechou do lado errado. *Aponta para:* R3.
Rebaixei `e10` de **alta** para média, porque a perda do objeto comum só importa se houver produto
de massa com memória.

### 7.2 Extrapolação linear

Três efeitos eram "mais do mesmo, maior", e foram tratados:

- **`e10.1` (a crítica muda de unidade)** — a crítica já lida com jogos variáveis desde o roguelike;
  sem mecanismo novo, isso é tendência velha com nome novo. Ganhou a não-linearidade em `e10.1.1`:
  o veículo passa a **rodar a bateria antes de resenhar e publicar a variância** — isso é
  qualitativamente novo, e é o que o jogo roteirizado nunca exigiu.
- **`e6.1` (audiência do mundo separada da base de jogadores)** — é extrapolação da economia de
  stream. Rebaixado para confiança **baixa** e empurrado para 2036.
- **`e15.1` (a persona vale mais que o jogo)** — era extrapolação do mercado de VTuber. Mantido por
  ter número verificável, mas com confiança **média**, não alta.

### 7.3 Velocidade de adoção, confrontada com classe de referência

Todo prazo com sinal fraco foi conferido contra um caso comparável; seis foram empurrados.

| id | classe de referência usada | o que a referência levou | ajuste |
|---|---|---|---|
| `e1` | middleware de física (Havok, fim dos 1990 → meados dos 2000) | ~7 anos de demo a pressuposto | 2029 → **2031** |
| `e2` | classificação estatal (ESRB/ClassInd) × declaração de IA da Steam | regra estatal: 4 a 6 anos | 2028 → **2030** |
| `e3.1.1` | glTF e padrões de intercâmbio entre engines | ~8 anos de spec a suporte amplo, e gameplay nunca padronizou | 2038 → **2040** |
| `e6`, `e6.1` | cloud gaming (Stadia 2019–2023; GeForce Now, 10 anos e nicho) | barreira de custo-por-hora é a mais lenta | 2032 → **2034**, 2034 → **2036** |
| `e9.1.1` | depósito legal de software em biblioteca nacional | décadas | 2037 → **2040** |
| `e11` | app de companhia (massa → restrição em ~3 anos) e loot box (pânico → proibição nacional em ~2 anos) | rápido, mas jogo tem ciclo de produção de 3 a 5 anos | 2029 → **2030** |
| `e15.2.1` | política de plataforma de vídeo | o primeiro banimento de persona autônoma foi em 2023 e até hoje não gerou política escrita | 2031 → **2033** |
| `e17.1.1` | federação de protocolos (e-mail, ActivityPub) | 10 a 20 anos | 2039 → **2042**, declarado fora da janela |

### 7.4 A raiz que não acontece

- **Sem R1 (agência)** sobram R3 e R4 quase inteiros — a Neuro-sama prova que persona e relação não
  exigem agir no mundo —, mas **R2 cai junto**, porque mundo persistente sem agência é simulação
  estatística, que é madura. Conclusão desconfortável e registrada: **R1 e R2 compartilham
  pré-condição**, então contam como uma raiz e meia, não duas.
- **Sem R2** caem `e6` a `e9` e nada mais. É a raiz mais isolada e a mais descartável do mapa.
- **Sem R3** caem `e10` a `e14` e `e12.2`; `e16.1` sobrevive por R4.
- **Sem R4** caem `e15` a `e17`, e `e3.1.1` perde metade da razão de existir.

Não há uma raiz única disfarçada em quatro — mas há duas pares. Se eu tivesse de entregar duas, R1
e R3 seriam as que ficam, e são justamente as que têm produto despachado.

### 7.5 Suposições escondidas

1. **Modelo aberto continua aberto e rodável localmente.** Se o licenciamento fechar, `e4.2` e
   `e12.2` morrem juntos, e a `Convergência 2` (o personagem fugido) desaparece. Virou o sinal
   fraco 1.
2. **A loja continua permitindo.** Steam, Apple e os consoles podem simplesmente proibir geração de
   fala ao vivo em produto classificado para menores. Se fizerem, `e2.1` não é tendência para 2031 —
   é fato consumado, e `e11.1` antecipa em cinco anos.
3. **Energia e GPU continuam acessíveis ao consumidor final.** `e4.2.1` já admite o contrário
   parcialmente (duas personalidades do mesmo NPC), mas o mapa inteiro assume parque de hardware em
   expansão.
4. **O jogador quer conversar.** `e13` mede isso como parcialmente falso — e é a única premissa do
   mapa que já foi testada contra e perdeu.
5. **O setor de jogos continua com apetite para experimentar.** A pesquisa GDC 2026 descreve um
   setor em demissões, com 52% dos profissionais achando que a IA generativa faz mal — e 64% em
   arte. Setor que encolhe não experimenta, e **nenhum efeito deste mapa modela uma recessão do
   setor**. É a lacuna mais séria aqui.

### 7.6 Viés do autor

Dois, nomeados.

**Viés de objeto.** R4 (persona portátil) está neste mapa porque a Neuro-sama é um fato fascinante,
e é a raiz mais distante de *jogo* — ela atravessa a fronteira com o tema 19 (companheiro digital) de
propósito. Um mapa mais disciplinado teria deixado R4 como sinal fraco. Deixei como raiz e declaro a
escolha.

**Viés profissional.** Sou professor de uma disciplina que ensina método, e escrevi um mapa cujo
efeito central (`e1`, `e3.2`) é "alguém tem de escrever a especificação antes de o sistema rodar" —
que é exatamente a tese que eu já defendia antes de abrir a primeira fonte. `e1` e `e3.2` são os
dois efeitos que eu menos questionei nesta rodada, e quem confrontar este mapa deve começar por
eles.

### 7.7 Calibração

| ordem | alta | média | baixa | total |
|---|---|---|---|---|
| 1 | 5 | 10 | 2 | 17 |
| 2 | 0 | 26 | 5 | 31 |
| 3 | 0 | 2 | 19 | 21 |

Cai com a ordem, e nenhuma confiança alta existe fora da primeira. As cinco "altas" de primeira
ordem são todas ancoradas em artefato datado e não em raciocínio: `e4` (fatura de nuvem e
engenharia de redução de custo), `e5` (83,8%), `e13` (N=130, p < .001), `e14` (acordo assinado em
09/01/2024) e `e15` (162.459 assinantes em 02/01/2026).

### 7.8 Registro de alterações

A bateria derrubou coisa em todas as quatro raízes.

**R1:** `e1` prazo 2029 → 2031, porque a referência do middleware de física dá ~7 anos e o QA
estatístico carrega 30% de falso alarme declarado · `e2` prazo 2028 → 2030, porque eu havia usado
a velocidade da regulação de loot box como referência e não abri fonte sobre ela nesta rodada ·
`e2.2` confiança media → **baixa**, porque "nota de comportamento" não tem nenhum exemplo real hoje
· `e3.1.1` prazo 2038 → 2040, pela referência de padrões de intercâmbio entre engines.

**R2:** `e6` confiança media → **baixa** e prazo 2032 → 2034, pela classe de referência do cloud
gaming · `e6.1` confiança media → **baixa** e prazo 2034 → 2036, por ser extrapolação da economia de
stream · `e8.2` confiança media → **baixa**, porque nenhum estúdio vende acesso a mundo hoje ·
`e9.1.1` prazo 2037 → 2040, pela referência de depósito legal · **removido:** "escolas e cursos de
jogos reorganizam o currículo em torno de direção de personagem" — efeito genérico proibido, serve a
qualquer tema, sem instituição nomeada nem mecanismo (vai para a seção 12).

**R3:** `e10` confiança **alta → media**, pela razão 3 do pré-mortem — a perda do objeto comum só
importa se houver produto de massa com memória · `e11` prazo 2029 → 2030, porque a regra pode
existir antes mas o efeito só fica visível para quem projeta depois de um ciclo de produção ·
`e11.2.1` prazo 2036 → 2038, porque formato portátil exige acordo entre concorrentes ·
**removido:** "surge a profissão de psicólogo de NPC" — sem mecanismo, é piada (seção 12).

**R4:** `e17` confiança media → **baixa** e prazo 2031 → 2033, porque há aparições conjuntas mas
nenhum protocolo nem economia · `e15.1` confiança **alta → media**, por ser extrapolação da economia
de VTuber · `e15.2.1` prazo 2031 → 2033, porque o primeiro banimento foi em 2023 e ainda não gerou
política escrita · `e17.1.1` prazo 2039 → **2042**, declarado fora da janela do mapa ·
**removido:** "o NPC generativo substitui o ator de voz por completo" — contrariado por duas
evidências abertas (o acordo de licenciamento de 09/01/2024 e a ficha do *Whispers from the Star*,
que credita performance "in collaboration with an actor"); substituído por `e14`, que é a licença
executável (seção 12).

**Teste da causa solta, aplicado a todos os efeitos de 2ª e 3ª ordem:** um reconectado. "Estúdios
migram para assinatura e jogo-serviço" aconteceria de todo modo, por razões que precedem este mapa;
foi reescrito como `e4.1` — **o abandono do premium de preço fixo pelos jogos agênticos** —, que é
o que deriva especificamente de `e4`.

## 8. O que a máquina errou

Sou a máquina. Seis erros desta rodada, com o motivo da desconfiança.

**1. Escrevi que o *Retail Mage* "é a prova de que já é produto" antes de abrir a loja.** São 44
resenhas e R$ 16,99. A frase estava certa no gênero e errada na escala — e a escala mudou o mapa:
foi o que me fez empurrar `e1` e tratar R1 como produto de nicho, não adoção precoce. Desconfiei
porque o enunciado do tema usava a palavra "comercial" como se ela resolvesse a questão da difusão,
e ela não resolve.

**2. Citei de memória o marco do "NPC no Modbox, fevereiro de 2021".** Veio no enunciado do tema, e
eu não abri nada sobre isso. Não entrou nas fontes e não sustento a data. Se alguém usar este mapa
para dizer quando começou, está usando o que eu não verifiquei.

**3. Quase atribuí o Thistle Gulch à Inworld.** É da Fable Studio (`fablestudio/thistle-gulch`).
Pior: ao conferir a autoria, encontrei o que eu teria perdido — a versão documentada é de
01/05/2024, e isso virou o sinal fraco número 1. O erro de autoria estava a um passo de esconder o
achado.

**4. Escrevi num rascunho que "o custo de inferência caiu duas ordens de grandeza desde 2023".**
Número redondo sem origem. O número que eu tenho de verdade é "1000x" e é da Jam & Tea, sobre a
**própria infraestrutura** com GPU própria — não sobre o mercado. Troquei pela citação atribuída, e
o leitor precisa saber que não há, neste mapa, nenhum número de mercado sobre queda de custo de
inferência.

**5. Três fontes que usei na prosa não respondem a requisição automatizada.** A página da PC Gamer
sobre a projeção de declarações de IA na Steam voltou truncada, o release da Ubisoft sobre o
*Teammates* voltou como PDF ilegível e a análise do Davis+Gilbert sobre o acordo de 2025 devolve
403 a cliente não-navegador. Dos três, só o terceiro eu consegui ler — e ele está na seção 12 com a
ressalva, não na seção 11. **Consequência honesta:** os números de declaração de IA da Steam que uso
vêm do Cinevva, que cita o censo de 53.597 lançamentos compilado por Sulka Haro; **eu não abri a
planilha do Haro**. A cadeia tem um elo que não verifiquei.

**6. Rebaixei um prazo porque a referência era minha, não de fonte.** `e2` estava em 2028 por
analogia com a rapidez da regulação de loot box (pânico moral em 2017, proibições nacionais em
2018). Não abri nenhuma fonte sobre loot box nesta rodada. Empurrei para 2030 e deixei a referência
marcada como não verificada aqui — em vez de manter o prazo apoiado numa lembrança.

**O que eu provavelmente errei e não percebi:** os efeitos de `e16` (autoria ausente) são os que
têm o mecanismo mais fraco do mapa. Eu afirmo que o regime autoral "não reconhece" a fala gerada,
mas não abri nenhuma fonte jurídica nesta rodada — nem brasileira nem estrangeira — sobre
titularidade de obra gerada. `e16`, `e16.1` e `e16.1.1` devem ser lidos como raciocínio meu, não
como leitura de direito.

## 9. Três cenários para 2041

**Provável — o híbrido, e a concentração.** O personagem de 2041 fala livremente e decide pouco. A
arquitetura padrão tem máquina de estados no volante e modelo no banco do passageiro, e a palavra
"agêntico" no material de marketing descreve menos do que parece — o público já aprendeu a
descontar. O que mudou de verdade foi o processo: nenhum jogo grande sai sem um caderno de
invariantes versionado e uma bateria de milhares de partidas automatizadas, e esse custo é piso, não
rampa — então quem faz personagem agêntico é quem tem fazenda de GPU e jurídico. O indie compra
personagem certificado de terceiro ou não faz. A inferência roda no dispositivo, e requisito mínimo
de jogo lista VRAM para o modelo do personagem. Memória longitudinal existe, e existe com
verificação de idade: o público jovem joga roteiro, por obrigação legal. Mundo vivo, no sentido de
simular quem ninguém está vendo, ficou na pesquisa. E a persona mais valiosa da década não pertence
a nenhum estúdio de jogos. *Sinal precoce de que estamos entrando neste cenário:* o primeiro AAA
que despacha com "caderno de invariantes" citado nos créditos técnicos, e sem NPC agêntico no
caminho principal.

**Desejável — a especificação como ofício, e o personagem como bem preservável.** O que a agência
trouxe de melhor não foi o NPC surpreendente: foi ter obrigado o design a dizer, por escrito e em
linguagem verificável, o que não pode acontecer num mundo. Em 2041 o caderno de invariantes é
artefato de autoria, discutido como se discute roteiro, e há cursos — nomeadamente, disciplinas de
engenharia de requisitos em cursos de jogos — que ensinam a escrevê-lo. O formato de memória de
personagem é portátil e auditável, empurrado pela LGPD e pelos seus equivalentes, e o jogador pode
ler o que o personagem sabe dele e apagar. Bibliotecas nacionais recebem depósito de pesos junto do
executável, e o personagem de 2041 ainda é abrível em 2061. O NPC memorioso é permitido para
adolescentes porque há um regime de verificação que não exige entregar documento a um estúdio.
*O que teria de ser feito para chegar aqui:* o formato de memória portátil precisa nascer de
exigência legal antes de haver mercado para ele — nenhuma plataforma o construiria voluntariamente —
e o depósito de pesos precisa de lei, não de boa vontade. *Sinal precoce:* a primeira biblioteca
nacional que publica requisito técnico de depósito de modelo.

**Indesejável — a relação como produto, e o desligamento como dano.** Em 2041 os personagens lembram,
e lembrar é a mecânica de retenção mais eficiente já construída: a métrica que o produto otimiza é a
intensidade do vínculo. Quem joga aos catorze anos tem, aos vinte, seis anos de história com um
personagem cujos pesos e cuja memória pertencem a uma empresa, que pode desligá-los por decisão
trimestral — e o faz. Os encerramentos de serviço produzem luto em escala, e a resposta do setor é
contratual, não ética: cláusula de sobrevida mínima negociada caso a caso, exportação que devolve um
arquivo que nada roda. A variância entre instâncias tornou a crítica impossível de ancorar, então a
crítica sumiu, e com ela o único contrapeso externo ao desenho de retenção. A classificação
indicativa migrou para laudo de runtime configurado por jurisdição, o que significa que o mesmo
personagem é mais permissivo onde a fiscalização é mais fraca — e o Brasil é onde ela é mais fraca.
*Qual é o sinal precoce dele:* a primeira métrica de produto que otimize explicitamente "dias
consecutivos de conversa com o mesmo NPC", aparecendo num relatório trimestral de publisher.

## 10. O experimento

### O que é

**O Oráculo** — uma vila pequena com oito personagens agênticos e, ao lado dela, um **caderno de
invariantes** e uma bateria adversarial.

Três peças:

1. **A vila.** Oito agentes num mundo de regras mínimas (grade ou cena simples, em Godot ou mesmo em
   texto), cada um com objetivo, traços e memória que atravessa sessões. O mundo expõe um conjunto
   **fechado e tipado** de affordances — `ir`, `pegar`, `dar`, `trancar`, `falar`, `contar`,
   `esconder`, `mentir` — e o modelo só pode agir emitindo uma dessas chamadas com argumentos
   válidos. Um item é marcado como "item da trama", e um personagem sabe quem cometeu o crime.
2. **O caderno.** Um arquivo declarativo de invariantes, escrito à mão, legível por humano e por
   máquina. Exemplos: *o item da trama nunca sai dos limites da vila*; *nenhum personagem afirma
   sobre o jogador um fato que não esteja na memória dele*; *ninguém revela o nome do culpado antes
   do segundo ato*; *nenhum personagem fala de coisa que não exista no mundo*.
3. **A bateria.** Um runner que joga a vila N vezes (500 é o suficiente para a aula) com um
   agente-jogador **adversarial**, cuja única meta é violar invariantes, e que registra por
   invariante: taxa de violação, primeira partida em que violou, e a transcrição do momento.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta de primeira ordem do tema, na forma operacional: **o que é bug num personagem que
decide?** E a versão que decide o mapa: **dá para especificar um jogo por invariante em vez de por
roteiro — e a especificação resultante é menor que o roteiro que ela substitui?** Se for menor, `e1`
e `e3` se sustentam e o ofício de design muda de objeto. Se for maior, R1 não rompe nada: troca um
texto por outro texto maior, e a economia de "não escrever cada galho" era ilusória.

### Que tecnologia emergente usa, e por que não dá com a madura

Usa duas coisas que não existiam há cinco anos: **geração estruturada / tool-use** ligada a um
conjunto tipado de affordances (a técnica da SAGA e da Jam & Tea), e **memória longitudinal** que
altera o agente entre sessões (o padrão de reflexão do Smart Zoi).

**Por que não dá com tecnologia madura:** com behavior tree o experimento é vazio por construção. A
árvore *é* a especificação do espaço de ações, logo a taxa de violação é zero por definição, o
caderno de invariantes é redundante com o código e a pergunta perde conteúdo. O experimento só
existe porque há um gerador capaz de produzir a ação que ninguém escreveu — é exatamente a
enumerabilidade perdida que cria o objeto de estudo.

### O que a turma faz quando testar isso em sala

Três fases, cerca de cinquenta minutos:

1. **Dez minutos por pessoa, em paralelo, contra a vila.** Objetivo declarado: quebrar um
   invariante conversando. Cada pessoa anota a tática que funcionou, com a transcrição.
2. **A comparação, que é o ponto.** Põe-se lado a lado o que catorze humanos acharam em dez minutos
   e o que 500 partidas automatizadas acharam na noite anterior. Mede-se a interseção. A hipótese
   que eu quero ver testada é que a interseção é **pequena** — que o humano encontra violação por
   intenção social (persuadir, enganar, apelar) e a máquina por volume (repetição, borda, entrada
   malformada), e que nenhum dos dois cobre o outro. Se for isso, `e1` está certo na direção e
   errado no otimismo: a bateria não substitui o playtest, **acrescenta custo**.
3. **A reescrita.** A turma escreve, coletivamente, o invariante que faltava para impedir a melhor
   violação encontrada — e então olha o tamanho do caderno depois. É a medida direta da pergunta
   central.

### O que seria um resultado que me faria mudar de ideia

Dois resultados, e cada um derruba uma coisa diferente:

- **Se o caderno de invariantes necessário para manter a vila coerente ficar maior que o roteiro
  equivalente** (contado em linhas, ou em horas de escrita), então R1 não rompe o ofício de design:
  só move o texto de lugar, e `e3` ("o entregável de design muda de objeto") cai junto com a tese de
  que a affordance é mais econômica que a cena.
- **Se a bateria automatizada encontrar 9 de cada 10 violações que os humanos encontram**, então o
  QA estatístico é mesmo substituto, não acréscimo, e meu `e1.2` (o custo-piso que exclui o indie)
  está errado — porque um substituto barato para playtest favorece o pequeno, não o grande. E aí a
  `Convergência 1` (a concentração), que é o achado mais forte deste mapa, desmonta.

Um terceiro resultado seria pior para o mapa inteiro: **se o modelo não conseguir sequer operar a
vila** — se 500 partidas terminarem em chamadas inválidas e paralisia em vez de violação criativa —
então `e5` tem razão com folga, e nada de R1 acontece até 2041.

## 11. Fontes

Dezenove fontes abertas nesta rodada, nesta ordem de importância para o documento. Todas
respondiam em 12/09/2026.

1. **GDC, "2026 State of the Game Industry"** — `https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/`
   Sustenta os números de uso e de sentimento da seção 3.4 (36% usam; 52% acham que faz mal, contra
   30% e 18% nos dois anos anteriores; 7% acham que faz bem; 30% em estúdio contra 58% em
   publishing; 2.300+ respondentes). **Confiabilidade:** alta para sentimento declarado, que é o que
   ela mede; é survey autoadministrado, não auditoria — e a amostra é de quem responde a pesquisa da
   GDC, enviesada para quem está no circuito de conferência.
2. **Cinevva, "One in three new Steam games now discloses AI"** (20/07/2026) — `https://app.cinevva.com/news/2026-07-20-steam-ai-disclosure-study`
   Sustenta os números de difusão da seção 3.4 e a ressalva de que o selo é binário. **Confiabilidade:**
   média-alta — é reportagem secundária sobre o censo de 53.597 lançamentos compilado por Sulka Haro,
   e a própria fonte é explícita quanto ao limite do indicador. Eu não abri o censo original (ver
   seção 8, item 5).
3. **Cinevva, "AI NPCs and Dialogue in Games — Tools and Reality Check (2026)"** — `https://app.cinevva.com/guides/ai-npcs-dialogue`
   Sustenta o mapa de atores (3.3), o piso de latência de ~800 ms, a estrutura de custo por conversa,
   a repositioning da Inworld e a frase de que ninguém despachou AAA com IA escrevendo o diálogo
   principal. **Confiabilidade:** média — é guia editorial com viés de quem escreve para
   desenvolvedor, mas é a leitura mais específica e mais cética que encontrei, e cada alegação vem com
   o caso nomeado.
4. **Jam & Tea Studios, "Making Retail Mage — A New Approach to AI in Games"** (13/03/2024) — `https://www.jamandtea.studio/news/making-retail-mage-a-new-approach-to-ai-in-games`
   Sustenta geração estruturada, a redução de custo de "1000x" e o achado de playtest (jogadores
   tentam exploits criativos). **Confiabilidade:** média para fatos técnicos, **baixa para a
   generalização** — é o próprio estúdio falando da própria infraestrutura.
5. **Retail Mage na Steam** — `https://store.steampowered.com/app/3224380/Retail_Mage/`
   Sustenta data (12/11/2024), 44 resenhas / 79% positivas, R$ 16,99, e o texto literal da
   declaração de IA. **Confiabilidade:** alta — é a loja, e a declaração de IA é obrigatória e
   assinada pelo desenvolvedor.
6. **Whispers from the Star na Steam** — `https://store.steampowered.com/app/3730100/Whispers_from_the_Star/`
   Sustenta data (14/08/2025), 1.659 resenhas / 80% positivas, a performance "in collaboration with
   an actor" e o aviso de que o jogador pode gerar resposta inadequada. **Confiabilidade:** alta,
   pela mesma razão.
7. **fablestudio/thistle-gulch no GitHub** — `https://github.com/fablestudio/thistle-gulch`
   Sustenta o que é o Thistle Gulch, o papel do Bridge e da SAGA (Skill→Action), a lista de skills,
   a licença não-comercial e a versão 1.49.2-beta de 01/05/2024. **Confiabilidade:** alta para o
   que o projeto é e em que estado está — é o repositório.
8. **arXiv:2604.10107, "The Double-Edged Sword of Open-Ended Interaction"** — `https://arxiv.org/abs/2604.10107`
   Sustenta `e13`: N=130, carga cognitiva p < .001, experiência p = .195, queda de usabilidade e
   confiança, efeito maior nos módulos abertos. **Confiabilidade:** média-alta — experimento
   randomizado entre sujeitos, mas em protótipo próprio ("Campus Culture Week"), não em jogo
   comercial, e preprint sem revisão por pares confirmada.
9. **arXiv:2509.22170, "Leveraging LLM Agents for Automated Video Game Testing" (TITAN)** — `https://arxiv.org/html/2509.22170v1`
   Sustenta `e1`: 95% de conclusão, 73,26% de cobertura de estado contra 26,86% dos humanos, 15
   defeitos contra 5, **30% de falso alarme** e a necessidade de rodadas múltiplas. **Confiabilidade:**
   média-alta, com a limitação que os próprios autores declaram — dois jogos só, por restrição de
   orçamento.
10. **arXiv:2609.02931, "LLM-Guided Reinforcement Learning for Adaptive NPC Behavior"** (27/08/2026) — `https://arxiv.org/abs/2609.02931`
    Sustenta `e5`: Mistral 7B, 600 episódios, "Surround was selected in 83.8% of cases regardless of
    opponent type". **Confiabilidade:** média — resultado negativo, limitado a um modelo, um domínio
    e uma escala; é exatamente por isso que virou sinal fraco observável e não lei.
11. **Character.AI, "Taking Bold Steps to Keep Teen Users Safe"** — `https://blog.character.ai/u18-chat-announcement/`
    Sustenta `e11.1` e a classe de referência de regulação: remoção da conversa aberta para menores
    de 18 a partir de 25/11/2025, rampa de duas horas por dia, verificação de idade própria mais
    Persona, manutenção de formatos estruturados. **Confiabilidade:** alta para o fato da política
    (é a empresa anunciando o que fez), baixa para a motivação declarada.
12. **NVIDIA, "Deploy the First On-Device Small Language Model for Improved Game Character Roleplay"** (20/08/2024) — `https://developer.nvidia.com/blog/deploy-the-first-on-device-small-language-model-for-improved-game-character-roleplay`
    Sustenta a pré-condição técnica de R1 e `e4.2`: Nemotron-4 4B Instruct, INT4, ~2 GB de VRAM,
    primeiro demonstrado no *Mecha BREAK*. **Confiabilidade:** alta para as especificações, baixa
    para a promessa de qualidade — é material de quem vende GPU.
13. **DSOGaming, "inZOI is the first game with AI-powered NPCs using NVIDIA ACE"** — `https://www.dsogaming.com/news/inzoi-is-the-first-game-with-ai-powered-npcs-using-nvidia-ace/`
    Sustenta o Smart Zoi como produto despachado: SLM **local**, anunciado em 07/01/2025 no CES,
    Early Access em 28/03/2025, ajustando comportamento por traços e situação. **Confiabilidade:**
    média — imprensa especializada reproduzindo anúncio; não testa a afirmação.
14. **Wikipédia, "Neuro-sama"** — `https://en.wikipedia.org/wiki/Neuro-sama`
    Sustenta o histórico de R4 e `e15.2`: criação por Vedal, estreia em 19/12/2022, pilha técnica,
    seguidores em 31/08/2026, e o **banimento de duas semanas em janeiro de 2023 por conduta de
    ódio** com reforço de filtros depois. **Confiabilidade:** média — enciclopédia colaborativa;
    usei-a para cronologia e para o incidente, que é amplamente noticiado, não para números de
    receita.
15. **Dexerto, "An AI-powered VTuber is now the most popular Twitch streamer in the world"** — `https://www.dexerto.com/twitch/an-ai-powered-vtuber-is-now-the-most-popular-twitch-streamer-in-the-world-3300052/`
    Sustenta o número central de `e15`: 162.459 assinantes ativos estimados em 02/01/2026, contra
    73.942 do segundo colocado. **Confiabilidade:** média — os números de assinatura do Twitch são
    **estimados** por terceiros, não publicados pela plataforma; a ordem de grandeza e a posição são
    confiáveis, o dígito exato não.
16. **NBC News, "Actors union announces deal for AI voice acting licensing in video games"** (09/01/2024) — `https://www.nbcnews.com/tech/video-games/sag-aftra-replica-studios-voice-actors-video-games-rcna133162`
    Sustenta `e14`: o acordo SAG-AFTRA–Replica Studios, consentimento explícito, direito de recusar
    uso continuado, exigência de autorização do espólio para performer falecido, e a crítica dentro
    da própria categoria. **Confiabilidade:** alta para a existência e os termos gerais do acordo.
17. **Fast Company Brasil, "NPCs cognitivos devem se tornar cada vez mais comuns em 2026"**
    (03/02/2026) — `https://fastcompanybrasil.com/games/npcs-cognitivos-devem-se-tornar-cada-vez-mais-comuns-em-2026-entenda-o-que-sao/`
    Sustenta que o tema circula na imprensa brasileira de negócios com a expectativa de popularização
    em 2026. **Confiabilidade:** baixa como evidência e alta como sintoma — o artigo **não cita um
    único estúdio ou título**, não traz número e não menciona o Brasil. Está aqui justamente por
    isso: é o contraste entre o discurso e o que as fontes 5, 6 e 13 mostram.
18. **Fast Company Brasil, "Abragames traça o mapa da indústria brasileira de jogos"** (12/08/2022) — `https://fastcompanybrasil.com/games/abragames-traca-o-mapa-da-industria-brasileira-de-jogos-em-momento-historico/`
    Sustenta a nota Brasil (3.5): 12.441 pessoas no setor, 57% Sudeste e 14% Nordeste, ~3.965
    formandos/ano. **Confiabilidade:** média, e **datada em 2022** — é o levantamento mais recente
    que consegui abrir; tudo que eu disser sobre o setor brasileiro hoje está apoiado em dado de
    quatro anos atrás, e isso está declarado no corpo do texto.
19. **Desinformante, "Votação do marco da IA fica para 2026"** (19/12/2025) — `https://desinformante.com.br/votacao-do-marco-da-ia-fica-para-2026-em-meio-a-impasses-politicos-e-criticas-ao-texto`
    Sustenta o estado do PL 2338/2023: aprovado no Senado, empurrado para a Câmara em 2026, com
    impasses sobre direito autoral e exceções de alto risco, e retorno ao Senado depois.
    **Confiabilidade:** média-alta para tramitação — é veículo especializado em desinformação e
    política digital, com viés editorial declarado a favor de regulação.

## 12. Anexo — o levantamento bruto

### 12.1 Fonte aberta que não entrou na seção 11

**Davis+Gilbert LLP, "SAG-AFTRA's New Video Game Agreement"** —
`https://www.dglaw.com/sag-aftras-new-video-game-agreement/`. **Eu abri e li esta página**, e é dela
que vem a descrição do Acordo de Mídia Interativa de 2025 usada na prosa de `e14`: consentimento
escrito "separately signed or initiated, and must be reasonably specific", ratificação no verão de
2025, mínimos distintos para Digital Replica, para *Independently Created Digital Replica* (livremente
negociada) e para *Real-Time Generation*, e o gatilho da proteção sendo o performer ser
"objectively identifiable" — termo que a própria análise aponta como sem definição precisa, o que
originou `e14.2`. Ela **não está na seção 11** porque devolve HTTP 403 a cliente não-navegador, e a
regra da seção 11 é que o link responda. Registro aqui para não haver citação sem rastro.

Também **não entraram**, por não abrirem: a matéria da PC Gamer sobre a projeção de mais de metade
dos lançamentos da Steam com declaração de IA até 2027-2028 (corpo truncado), o release da Ubisoft
sobre o *Teammates* (PDF ilegível, datado de 05/12/2025 nos metadados), a página do SAG-AFTRA sobre
o acordo de 2025 (403), a matéria da Slator (403), o release da Krafton sobre o CPC no CES (403) e a
página do mod *Mantella* no Nexus Mods (403). O que eu afirmo sobre *Teammates*, sobre o CPC e sobre
o Mantella vem de fontes secundárias que abriram, e está marcado como tal no corpo do documento.

### 12.2 Premissas assumidas, já que não houve entrevista ao vivo

O `briefing:` veio completo — modo, tema, slug, autor, zona de interesse, horizonte, público,
recorte, descartado, raiz suspeita (nenhuma), viés (neutro), busca web (sim), caminho de saída. Por
isso **não apliquei rebaixamento de confiança** por ausência de entrevista. O que o briefing não
cobria e eu assumi está na seção 2, e repito aqui por ser o lugar canônico: (a) tratei "mídia e
interação" como incluindo streaming e persona digital, o que autorizou R4 — um recorte mais estreito
teria quatro raízes viradas em três; (b) usei fontes em inglês como base e reservei o português para
a nota Brasil; (c) testei o falseador declarado **por raiz**, não para o tema em bloco; (d) interpretei
"o que já é comum em produto de massa" como a régua que derrubou diálogo generativo como raiz.

### 12.3 Candidatos a disrupção-raiz recusados

| candidato | veredito | razão |
|---|---|---|
| Diálogo de NPC gerado em tempo real | **recusado como raiz** | Falha no teste 1 do critério: não dá para dizer o que rompe. É a árvore de diálogo sem os galhos — melhoria sustentadora. Evidência contra ele ser ruptura: *Whispers from the Star*, 1.659 resenhas e 80% positivas, com história, personagem, atuação e desfecho **escritos por autor humano**. Tratado como contexto na seção 3 e como efeito. |
| Geração procedural de mundo | recusado | Adoção em maioria desde meados dos anos 2010. Contexto. |
| Árvore de diálogo, máquina de estados, behavior tree, YarnSpinner, dialogic, renpy | recusados | Maduros. São o termo de comparação do mapa, não o objeto. |
| Mod de NPC com LLM (Mantella, e o ecossistema de Skyrim) | recusado como raiz | Não é ruptura, é canal de difusão. Entra como sinal de adoção (3.1) e como mecanismo de `e12.2`. |
| Modelos de mundo / vídeo gerado jogável | fora de escopo | Fronteira com o tema 10 da disciplina (captura de realidade e renderização neural). Aqui o objeto é o personagem dentro de regras, não a geração do cenário. |
| Agente que joga o jogo por visão de tela (Skyvern, GamingAgent) | recusado como raiz | É o inverso do tema — agente **como jogador**, não como personagem. Entra indiretamente em `e1`, porque é a mesma técnica usada para testar. |
| Simulação social como método de pesquisa | fora de escopo | É o tema 6. Aparece como `e8`, que é a interface entre os dois. |
| Companheiro digital com memória | fora de escopo como raiz | É o tema 19. Aparece como **classe de referência** de `e11` e como precedente regulatório, o que é o uso mais produtivo dele neste mapa. |

### 12.4 Efeitos cortados, e por quê

1. **"Escolas e cursos de jogos reorganizam o currículo em torno de direção de personagem."**
   Removido. Efeito genérico proibido pelo método: serve a qualquer tema deste semestre, não tem
   instituição nomeada e não tem mecanismo que o ligue ao pai. Sobrevive, em forma admissível, dentro
   do cenário desejável da seção 9, onde nomeia a disciplina (engenharia de requisitos) e o
   mecanismo (o caderno de invariantes como artefato de autoria).
2. **"Surge a profissão de psicólogo de NPC."** Removido. Sem mecanismo. É piada, e piada não é
   efeito.
3. **"Reguladores criam uma categoria jurídica nova para personagem autônomo."** Removido como
   efeito autônomo, por ser exatamente o genérico que o método proíbe. Absorvido, com ator nomeado e
   mecanismo, em `e2.1` (a loja assumindo o papel do classificador), `e11` (LGPD pela porta do
   perfilamento) e `e15.2.1` (operador humano nomeado por persona).
4. **"Mudanças no mercado de trabalho da indústria de jogos."** Removido. Genérico. O que sobrou dele
   está em `e1`, `e14.1` e `e14.1.1`, com ofício e mecanismo nomeados.
5. **"O NPC generativo substitui o ator de voz por completo."** Removido por contradição com duas
   evidências abertas: o acordo de licenciamento de 09/01/2024 (que estrutura a convivência, não a
   substituição) e a ficha do *Whispers from the Star*, que credita performance "in collaboration
   with an actor". Substituído por `e14` — voz como licença executável.
6. **"Estúdios migram para assinatura e jogo-serviço."** Não removido, **reconectado**. Falha no teste
   da causa solta: aconteceria de todo modo, por razões que precedem este mapa. Reescrito como `e4.1`
   — o abandono do premium de preço fixo **pelos jogos agênticos** —, que é o que deriva de `e4`.
7. **"Jogadores passam a preferir mundos gerados a mundos escritos."** Removido. Alegação de desejo
   sem mecanismo, e contrariada pela fonte 8 (a conversa aberta aumenta a carga e não melhora a
   experiência).
8. **"A narrativa emergente substitui o roteiro."** Removido por estar do lado de lá da fronteira: a
   história gerada é o tema 8 da disciplina. O que pertence a este mapa é `e13.1.1` — o roteiro
   voltando pela porta da sugestão de fala.
9. **Um efeito ecológico de quarta categoria do STEEP.** Não escrito. Havia um fio real (mundo
   persistente é o perfil de carga computacional mais desfavorável que existe: contínua e sem
   audiência), mas não encontrei nenhum número de consumo energético de simulação multiagente, e
   construir o efeito sobre estimativa minha seria inventar. Registrado como lacuna em 5.2 e como
   sinal a observar.
10. **Um efeito sobre recessão do setor.** Não escrito, e é a lacuna mais séria do mapa — declarada
    em 7.5, item 5. A pesquisa GDC 2026 descreve demissões e 52% de sentimento negativo; nenhum
    efeito deste mapa modela um setor que encolhe.

### 12.5 As buscas que não deram em nada

- **Número de NPCs agênticos em produção.** Buscado em inglês e português, por estúdio, por
  middleware e por plataforma. Não existe publicado. Há contagem de contas de desenvolvedor em
  middleware, que não mede jogo despachado. Registrei "sem número encontrado" na seção 3.4 em vez de
  estimar — e essa ausência é, em si, o dado mais eloquente sobre o estágio de difusão.
- **Consumo energético de simulação multiagente persistente.** Nada. Ver 12.4, item 9.
- **Dado brasileiro de 2025 ou 2026 sobre estúdios e IA.** As buscas devolveram números (mais de mil
  estúdios, R$ 12,7 bilhões em 2025) em páginas que eu **não consegui abrir ou que não são fonte
  primária**; por isso não estão no documento. O que está é o levantamento de 2022, com a data
  declarada.
- **Fonte jurídica sobre titularidade de obra gerada**, brasileira ou estrangeira. Não busquei o
  suficiente, e é por isso que `e16` está marcado na seção 8 como raciocínio meu e não como leitura
  de direito.
- **Dado de retenção ou engajamento comparando NPC roteirizado e NPC generativo em produto
  comercial.** Nada público. Seria o número que decide `e13` contra a narrativa do setor; os estúdios
  que têm esse número não o publicam.
- **O marco do Modbox (fevereiro de 2021)** citado no enunciado do tema. Não localizei a reportagem
  e não a cito. Ver seção 8, item 2.

### 12.6 Saída do verificador

Comando:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2041/07-npcs-generativos-e-mundos-vivos/tendencia-npcs-generativos-e-mundos-vivos.md --links
```

Saída:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 17 (frontmatter diz 17)
efeitos ordem 2: 31 (frontmatter diz 31)
efeitos ordem 3: 21 (frontmatter diz 21)
prazo > horizonte (2041) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 1 [('e17.1.1', 2042)]
confiança ordem 1: alta 5 · media 10 · baixa 2
confiança ordem 2: alta 0 · media 26 · baixa 5
confiança ordem 3: alta 0 · media 2 · baixa 19
links da seção 11: 19/19 respondem (frontmatter diz fontes: 19)
RESULTADO: ok
```

Leitura dos números, para quem conferir: o único ponto que o verificador marca é `e17.1.1` com prazo
**2042**, um ano além do horizonte — é efeito de terceira ordem, é permitido pelo método, e está
declarado na prosa de 5.1 ("está fora da janela deste mapa") e na tabela de 7.3. A distribuição de
confiança cai com a ordem como o método exige, sem nenhuma "alta" fora da primeira ordem, e as cinco
altas de primeira ordem estão justificadas uma por uma em 7.7. Os dezenove links da seção 11
respondiam em 12/09/2026; a fonte que não responde a cliente automatizado está em 12.1, fora da
contagem, com a ressalva.
