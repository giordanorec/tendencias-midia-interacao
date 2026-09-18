---
tema: NPCs generativos e mundos vivos
slug: npcs-generativos-e-mundos-vivos
autor_login: jgpt
zona_de_interesse: Simulação e mundos
data: 2026-09-18
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 8
efeitos_ordem_2: 16
efeitos_ordem_3: 16
tecnologias_citadas: [modelos de linguagem pequenos on-device, NVIDIA ACE, Mistral-Nemo-Minitron-2B/4B/8B-128k-Instruct, NemoVision-4B, Parakeet-CTC-XXL, E5-Large embeddings, OpenGameAgent, SAGA/Thistle Gulch, geração estruturada, function calling, Snowdrop Engine, Unity, Unreal Engine 5, Godot, Audio2Face, síntese de voz neural, memória semântica com embeddings]
fontes: 8
confianca: media
experimento: Uma vila de dez NPCs com memória persistente e um "contrato de mundo" verificável, onde a turma joga o papel de QA adversarial e mede taxa de violação de invariante em vez de caçar bugs.
skill_usada: futurizacao-jgpt
publico_ok: false
---

## 1. Resumo

O personagem não jogável está deixando de ser roteiro e virando agente: percebe o estado do mundo,
decide, usa as capacidades que o jogo expõe, olha o resultado e revisa o plano. Três limiares foram
cruzados e sustentam esse deslocamento. O primeiro é de custo e latência: modelos de cognição de 2 a
8 bilhões de parâmetros rodam na máquina do jogador — o menor cabe em 1,5 GB de VRAM — e um estúdio
que lançou na Steam relata ter derrubado o custo de inferência em três ordens de grandeza. O segundo
é de arquitetura: runtimes de agente com chamada de ferramenta tipada e recibo durável de ação
permitem que o personagem mude o estado do mundo sem que o jogo perca autoridade sobre esse estado.
O terceiro é jurídico e chegou antes do previsto: uma lei da Califórnia em vigor desde 1º de janeiro
de 2026 define "companion chatbot" por manter relação entre múltiplas interações e isenta
explicitamente personagens de videogame **que só falem do jogo** — isto é, o NPC que lembra do
jogador entre sessões sai da isenção. Juntos, esses limiares atacam o contrato básico do design de
jogos, o de que o designer controla o que pode acontecer. Este mapa projeta 40 efeitos até 2031 e
aposta que a mudança maior não é o diálogo livre, e sim a redefinição do que é bug, do que é teste e
do que acontece quando o servidor desliga.

## 2. O tema

NPC generativo é o personagem cujo comportamento não está inteiramente escrito antes da partida: um
modelo de linguagem decide o que ele diz e, cada vez mais, o que ele faz, dentro de um repertório de
ações que o jogo expõe. "Mundo vivo" é o passo seguinte — o conjunto desses personagens continuar
operando quando o jogador não está olhando, ou não está presente.

Onde isso encosta em mídia e interação: no ponto exato em que a autoria deixa de ser a produção do
conteúdo e passa a ser a produção do **espaço de possibilidades**. Um roteirista de jogo escreve
falas; um designer de NPC generativo escreve restrições — quem o personagem é, o que sabe, que verbos
tem à disposição, o que nunca pode dizer. É uma mudança de ofício comparável à passagem do desenho
quadro a quadro para a animação procedural, com a diferença de que aqui o artefato improvisa diante
do público.

Por que isso merece um mapa de futuro e não um estado da arte: porque o que já existe hoje é pequeno
e o que ele implica é grande. Existem hoje personagens que conversam em jogos comerciais; o que
**não** existe ainda, e é o objeto do mapa, é o conjunto de consequências de o personagem ter
memória, agência e persistência — para o teste de software, para a classificação indicativa, para a
preservação de jogos, para a fronteira entre jogo e companheiro digital. Um estado da arte
descreveria as ferramentas; um mapa de futuro precisa dizer o que quebra quando elas funcionarem.

A linha de corte adotada aqui é a régua da disciplina: árvore de diálogo, máquina de estados,
behavior tree, síntese de voz e animação facial automática são maduras — já são pipeline de produção
e não estão mudando as restrições do campo. O que este documento trata como emergente ou disruptivo é
o personagem com **modelo, memória e agência dentro das regras do mundo**.

## 3. Onde isso está hoje

### O que já existe e funciona

**Cognição de personagem rodando na máquina do jogador.** A plataforma ACE da NVIDIA publica a lista
de modelos que usa: percepção com NemoAudio-4B-Instruct, NemoVision-4B-128k-Instruct e
Parakeet-CTC-XXL-1.1B-Multilingual; cognição com Mistral-Nemo-Minitron nas variantes de 8B, 4B e 2B
com janela de 128k — a de 2B declarada como exigindo "as little as 1.5GB VRAM"; memória com
embeddings E5-Large via um SDK de inferência in-game. A maior parte roda localmente em GPUs GeForce
RTX, com chamadas de nuvem reservadas a planejamento estratégico [1].

**Isso já está em jogos comerciais, não só em demo.** A mesma fonte lista integrações com data:
*PUBG: BATTLEGROUNDS* com o companheiro "Ally", *inZOI* com os "Smart Zoi", *NARAKA: BLADEPOINT
Mobile PC* com colegas de equipe de IA em março de 2025, *MIR5* com chefes que aprendem com a tática
do jogador, e *Dead Meat* com interrogatório por voz gerado localmente [1]. O Ally usa
Mistral-Nemo-Minitron-8B-128k-instruct para falar o jargão do jogo, recomendar tática, achar e
dividir loot, dirigir veículos e lutar.

**Já existe jogo comercial cujo núcleo é o NPC generativo.** *Retail Mage*, do estúdio Jam & Tea,
saiu na Steam depois de cinco meses de desenvolvimento, com o modelo operando como um mestre de
jogo que interpreta em tempo real o que o jogador tenta fazer. O relato do estúdio traz o caso que
melhor define a disrupção: um jogador escreveu à mão um "IOU" para compensar não conseguir levar um
quadro, e o sistema aceitou e deu quatro estrelas — cenário que nenhum designer havia previsto [2].

**Já existe runtime aberto que trata o NPC como agente, não como gerador de texto.** O OpenGameAgent
é um runtime em C# com loop ReAct limitado, chamada de ferramenta tipada, memória semântica com
embeddings, metas persistentes com replanejamento, escalonamento multi-NPC e "durable action
journaling with authoritative receipts", rodando em Godot 4.7, Unity 6, Unreal Engine 5.8 e
servidores .NET. A frase que define o desenho é dele: "the game remains authoritative over every
state change" [3]. Estado do projeto: versão 0.3.0-alpha.4, 84 commits, 50 estrelas, licença MIT —
ou seja, a categoria existe e é pública, mas ainda é pequena.

**Já existe protótipo de estúdio grande com o personagem agindo, não só falando.** A Ubisoft anunciou
em 21 de novembro de 2025 o *Teammates*, um FPS em que um assistente (Jaspar) e dois companheiros de
esquadrão (Sofia e Pablo) obedecem a comando de voz natural sobre cobertura, alvo e timing. O
posicionamento declarado pela direção narrativa é preciso quanto ao limite: os criadores "estabelecem
regras e direcionam a história" e os NPCs "improvisam dentro dos limites da narrativa". Status:
playtest fechado com algumas centenas de jogadores, sem data de lançamento [4].

**Já existe plataforma aberta de simulação onde os personagens decidem sozinhos.** O *Thistle Gulch*,
da Fable, é uma cidade fictícia de 1800 com mais de quinze personagens e um cenário de assassinato,
distribuída como runtime 3D no itch.io, com uma "Bridge" em Python de código aberto sobre a
biblioteca SAGA que permite intervir de fora e misturar ação gerada com ação autorada.

### O que existe e não funciona

**A economia da conversa.** A crítica mais dura ao campo, feita de dentro, é que a conta não fecha:
quanto mais o jogador conversa, mais o desenvolvedor paga, o que é um incentivo invertido em relação
a tudo que um jogo quer. O mesmo texto observa que, em 2026, é difícil nomear um jogo que alguém jogue
*por causa* dos NPCs de IA, e aponta três obstáculos — economia da inferência, falta de diversão real
e estranheza persistente [5]. Esse texto é o principal contrapeso deste mapa e está citado de
propósito.

**O custo bruto, antes de otimização.** O relato do Jam & Tea é explícito: no começo, rodar a
inferência custava por sessão de jogo o preço de um ingresso da Disneylândia. Depois de gerenciar GPU
própria na AWS e otimizar a inferência, derrubaram o custo em três ordens de grandeza [2]. Esse
número é o limiar central deste mapa — e é auto-relato de uma parte interessada, o que pesa na
confiança.

**O comportamento sob ataque do público.** Em 16 de maio de 2025, o Fortnite lançou um Darth Vader
conversacional movido por modelo generativo e voz sintetizada; em poucas horas circulavam clipes de
jogadores induzindo o personagem a proferir xingamentos e termos racistas e homofóbicos. A Epic
aplicou um hotfix e depois acrescentou um controle parental específico para comunicação com recursos
de IA. É o caso que melhor mostra que o problema não é o modelo errar sozinho — é o público ser
adversarial por esporte.

**A promessa de que restringir resolve.** Um estudo de usabilidade com dez participantes num jogo de
detetive por voz sobre GPT-4o comparou prompts de alta e de baixa restrição e achou que o efeito
depende do papel: o NPC entrevistador ganhou estabilidade, mas os suspeitos perderam credibilidade
improvisacional. Restringir mais não melhorou a experiência [6]. O achado é pequeno (n=10) e não
generaliza, mas é um dado contra a solução preguiçosa.

### Quem está construindo isso agora

NVIDIA (ACE, com Krafton e outros como parceiros de lançamento) [1]; Jam & Tea Studios, fundado por
veteranos de Riot e Wizards of the Coast [2]; Ubisoft, com o *Teammates* saído do protótipo NEO NPC
[4]; Fable, com SAGA e Thistle Gulch; a camada de serviço de diálogo (Inworld, Convai, Replica) com
plugins para Unity e Unreal; e um ecossistema aberto pequeno mas real, de que o OpenGameAgent é o
exemplo mais completo [3]. A Epic entra como plataforma e como caso [Darth Vader], e a Valve entra
como regulador de fato, via formulário de declaração de conteúdo de IA.

### Diagnóstico de maturidade

Aplicando o Hype Cycle apenas como heurística de leitura — e não como previsão de prazo: a cobertura
de 2023–2024 era quase toda de demonstração (GDC, CES, vídeo de tech demo). A cobertura de 2025–2026
mudou de natureza: tem nome de jogo, data de lançamento, número de VRAM, número de custo e
incidente de produção. Isso é cobertura de adoção, não de expectativa. Mas a adoção é estreita: o
NPC generativo aparece como *recurso lateral* de jogos grandes (um companheiro, um chefe, um modo) e
como *núcleo* apenas de jogos pequenos. A curva de capacidade ainda sobe; a de adoção ainda não
chegou nem perto da maioria inicial.

## 4. As disrupções-raiz

Três candidatas passaram no teste "o que isso rompe, e por que agora e não há cinco anos". Depois
delas, o que foi rejeitado e por quê.

### D1 — Cognição de personagem dentro do orçamento do frame

**O que rompe.** A restrição que governava tudo era o custo marginal por conversa: cada fala do
jogador custava dinheiro ao estúdio, o que torna o diálogo aberto um passivo em vez de um recurso —
o argumento central da crítica de 2026 [5]. Um modelo de cognição que cabe em 1,5 GB de VRAM na
máquina do jogador [1] não tem custo marginal por token para o estúdio; tem custo de orçamento de
hardware, que é uma restrição de outra natureza e já é familiar ao ofício.

**Por que agora e não há cinco anos.** Em 19 de fevereiro de 2021, a demo do Modbox ligou
reconhecimento de fala, GPT-3 e síntese de voz e produziu o primeiro NPC que ouvia, pensava e falava.
A mesma reportagem registra os três impedimentos: atraso "uncomfortably long" entre pergunta e
resposta porque tudo era nuvem; direitos exclusivos da Microsoft sobre o uso comercial do GPT-3; e o
risco de o modelo produzir resultados sem nexo ou intolerantes. E registra a aposta: modelos futuros
rodando no dispositivo eliminariam o atraso [7]. Cinco anos depois, os três impedimentos caíram —
modelo local de 2B, pesos abertos e licença comercial viável, e uma camada de política aplicada em
runtime. O limiar concreto: de latência de nuvem inaceitável em 2021 para inferência local em
placa de consumo em 2025 [1], e de custo "ingresso da Disneylândia por sessão" para um milésimo
disso [2].

**O que ainda falta.** Que o orçamento de VRAM do personagem conviva com o orçamento gráfico sem que
o jogo escolha entre os dois; que a qualidade do modelo de 2B seja suficiente para o papel, e não só
para a demo; e que exista uma resposta para o jogador cuja máquina não comporta o personagem.

### D2 — O personagem que age: runtime que amarra o modelo às regras do mundo

**O que rompe.** O contrato de que o designer controla o espaço de eventos. Enquanto o modelo só
produzia texto, o jogo continuava sendo o que o designer escreveu — a fala era cosmética. Quando o
modelo emite **ação tipada** com recibo durável e o jogo permanece autoritativo sobre o estado [3],
o personagem passa a alterar o mundo por caminhos que ninguém enumerou. O caso do "IOU" manuscrito
aceito por quatro estrelas [2] é exatamente isso: uma solução válida que não estava na lista.

**Por que agora e não há cinco anos.** Três coisas que não existiam: geração estruturada confiável o
bastante para o modelo emitir chamada de ferramenta em vez de prosa (o Jam & Tea cita geração
estruturada como a técnica que permitiu controlar a saída sem roteirizar [2]); runtimes que resolvem
o problema específico de jogo — escalonamento multi-NPC, handoff para a thread da engine, tick de
tempo de jogo, diário de ação auditável [3]; e a integração dessa cadeia percepção→cognição→ação
numa plataforma comercial de motor, com micro-decisões em frequência de jogo [1]. Em 2021 havia
um modelo que falava; não havia um barramento que o ligasse às regras.

**O que ainda falta.** Uma linguagem prática para declarar invariantes de mundo ("isto nunca pode
acontecer") que a gente possa verificar automaticamente; e uma cultura de teste que saiba o que fazer
com um personagem que não é determinístico. Hoje o estado da arte declarado é o runtime prometer que
o jogo continua autoritativo — o que resolve corrupção de estado, não resolve comportamento absurdo
mas legal.

### D3 — O personagem que lembra: memória persistente e a categoria jurídica que ela cria

**O que rompe.** Um NPC que lembra do jogador entre sessões deixa de ser conteúdo e vira relação — e
isso não é retórica, é definição legal. A SB 243 da Califórnia define companion chatbot como o
sistema de linguagem natural que dá respostas adaptativas e humanoides, é capaz de atender a
necessidades sociais e **mantém relacionamento entre múltiplas interações**; e isenta interações de
videogame *desde que o chatbot só discuta sobre o jogo* [8]. A isenção é condicional, e a condição é
exatamente o que o NPC generativo com memória deixa de cumprir. A obrigação que segue é concreta:
informar que não é humano, repetir o aviso a cada três horas para menores, avisar que pode não ser
adequado para menores, manter protocolo para ideação suicida e, a partir de 1º de julho de 2027,
reportar anualmente encaminhamentos a serviços de crise [8].

**Por que agora e não há cinco anos.** A capacidade técnica de memória semântica entre sessões
passou a ser item de plataforma, não de pesquisa: embeddings E5-Large no SDK de inferência da NVIDIA
[1], memória semântica com recuperação híbrida e metas persistentes no runtime aberto [3]. E a
restrição jurídica mudou de estado num dia datável: a lei foi assinada em 13 de outubro de 2025 e
vigora desde 1º de janeiro de 2026 [8]. Há cinco anos não havia nem a memória nem a lei.

**O que ainda falta.** Saber se o Judiciário vai ler a isenção de videogame de forma estreita ou
larga; se outros estados e países convergem para a mesma definição; e se os estúdios vão tratar isso
como custo de conformidade ou como razão para manter o personagem deliberadamente amnésico.

### Candidatas rejeitadas

- **Síntese de voz e animação facial automática** (Audio2Face, TTS neural): **maduras**. Já são
  pipeline de produção em jogos enviados [1]. Se sumissem amanhã, o campo perderia conveniência, não
  mudaria de forma. Não são raiz.
- **Árvore de diálogo, behavior tree, máquina de estados**: **maduras**, e são precisamente o que o
  NPC generativo substitui — entram no mapa como o que está sendo deslocado, não como disrupção.
- **Mundo que continua simulando 24/7 sem nenhum jogador presente, em escala comercial**:
  **emergente**. Existe em plataforma de pesquisa [Thistle Gulch] e em jogo de vida com reflexão
  noturna [1], mas não forçou mudança estrutural em quem produz ou consome. Vai para a seção 6.
- **NPC-celebridade com público próprio e sem autor**: **emergente/wildcard**, sem limiar concreto
  identificado. Seção 6.
- **Modelos de mundo neurais gerando o ambiente quadro a quadro**: não levantei fonte verificada
  nesta sessão; fica registrado como lacuna no anexo, não como raiz.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "Cognição de personagem dentro do orçamento do frame"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O custo marginal de conversa deixa de ser argumento contra o NPC generativo e o diálogo aberto entra como recurso de base em jogos de grande público."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Estúdios passam a manter um orçamento de personagem em VRAM e milissegundos ao lado do orçamento gráfico, disputando o mesmo hardware."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "A ficha de requisitos passa a declarar capacidade de personagem, e máquinas fracas recebem a versão roteirizada do mesmo jogo."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "A qualidade do personagem passa a depender do hardware do jogador e não apenas da autoria do estúdio."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "O QA precisa certificar o jogo em vários níveis de personagem, multiplicando a matriz de teste por uma dimensão que antes não existia."
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O ciclo de produção de um personagem encurta para dias, porque protótipo jogável deixa de exigir gravação de falas e montagem de árvore de diálogo."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "A escrita de jogo migra de redigir falas para redigir restrições: quem o personagem é, o que sabe, o que pode fazer e o que nunca diz."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Consolida-se a função de curador de comportamento, que julga saídas em lote e calibra limites, em vez de escrever diálogo linha a linha."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "O custo de produzir um personagem deixa de crescer com o número de falas e passa a crescer com o número de verbos que o mundo oferece."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "Jogos passam a ser anunciados pela largura do mundo — quantas coisas dá para fazer — e não pela duração da campanha."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "A inferência local devolve a latência de conversa para dentro do limiar em que o jogo não precisa parar para o personagem responder."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "O personagem passa a interromper, comentar e reagir durante a ação, e não apenas em cenas de diálogo dedicadas."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "A fronteira entre cena e jogo se apaga: a cena deixa de ser um bloco de tempo e vira um estado do mundo que pode ser interrompido."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "O microfone se torna interface esperada em jogos de um jogador só, com consequências diretas de privacidade doméstica."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "Acessibilidade ganha um eixo novo — quem não fala, quem gagueja, quem tem sotaque que o reconhecedor erra — e o modo sem voz vira requisito, não cortesia."
                sinal: fraco
                prazo: 2030
                confianca: baixa
  - disrupcao: "O personagem que age — runtime que amarra o modelo às regras do mundo"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "O designer perde o monopólio sobre a lista de eventos possíveis e passa a projetar o espaço de ações em vez da sequência de acontecimentos."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "A definição de bug se desloca de comportamento não previsto para violação de uma invariante declarada pelo time."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "A certificação de plataforma passa a exigir prova de invariantes e amostragem estatística, em vez de lista de defeitos conhecidos."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Testar um jogo vira medir distribuição: milhares de partidas automatizadas estimando taxa de violação, em vez de roteiro de reprodução."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Estúdios mantêm frotas de agentes-jogadores rodando à noite, e parte do custo de QA migra de horas de pessoa para horas de GPU."
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "A economia e o balanceamento do jogo ficam expostos a agentes que exploram as regras por caminhos que ninguém antecipou."
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Jogos com muitos agentes passam a precisar de um árbitro de mundo que vigie efeitos agregados e saiba desfazê-los."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "O diário de recibos de ação vira registro auditável, e a disputa entre jogador e operadora passa a ter prova documental do que o personagem fez."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "Modding muda de natureza: o mod deixa de alterar script e passa a alterar o repertório de ferramentas e a persona do personagem."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Aparece um mercado de personagens portáveis entre jogos que exponham o mesmo conjunto de verbos, com a persona separada do mundo."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "Conteúdo gerado ao vivo entra na esfera de responsabilidade editorial da plataforma, e não só do estúdio."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "As lojas passam a distinguir conteúdo pré-gerado de conteúdo gerado em tempo real, com regra própria e mais dura para o segundo."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "A classificação indicativa deixa de ser um selo do produto e vira propriedade da sessão, negociada em runtime conforme quem está jogando."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Tempo de resposta a incidente de personagem vira métrica de operação, e o hotfix em minutos passa a ser expectativa contratual."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "Jogos de um jogador só passam a exigir conexão periódica apenas para manter atualizada a política de comportamento do personagem."
                sinal: fraco
                prazo: 2030
                confianca: baixa
  - disrupcao: "O personagem que lembra — memória persistente e a categoria jurídica que ela cria"
    efeitos:
      - id: e7
        ordem: 1
        efeito: "O NPC que mantém relação entre sessões sai da isenção dada a personagens de videogame e cai sob a regra dos companheiros digitais."
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Estúdios passam a escolher deliberadamente entre o personagem que esquece, barato em conformidade, e o que lembra, com deveres de aviso, protocolo de crise e relatório anual."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "A memória do personagem vira item de configuração do jogador, com direito a apagar e exportar, tratada como dado pessoal e não como save."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "Jogos com público menor de idade passam a carregar lembretes periódicos, dentro da ficção, de que o personagem é uma IA."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "O aviso obrigatório vira material de design diegético, e alguns jogos fazem da própria quebra de ilusão o tema da obra."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "Desligar o servidor deixa de ser fim de serviço e passa a ser perda de um vínculo acumulado pelo jogador."
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "A preservação de jogos ganha um problema inédito: arquivar o mundo não arquiva o personagem, que dependia de um modelo específico e de um histórico privado."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "Campanhas de consumidor passam a exigir modo de fim de vida com modelo local embarcado e memória exportável, como hoje se exige servidor privado."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: "Personagens ganham existência fora do jogo que os originou, continuando em outro aplicativo com a mesma memória."
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: "A categoria jogo perde a fronteira com companheiro digital, e a regulação passa a tratar os dois sob o mesmo regime."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não diz sozinho

**As três raízes não são independentes e a ordem importa.** D1 (custo) é condição de possibilidade de
D2 (agência) — ninguém deixa um personagem chamar ferramenta em laço se cada volta do laço custa
dinheiro. D2 é condição de D3 no sentido forte: a memória só vira relação quando o personagem faz
coisas com ela. Se D1 falha, D2 e D3 ficam confinadas a jogos pequenos e a plataformas de pesquisa.

**O efeito mais importante do mapa é o e4.1, e ele é chato de propósito.** Redefinir "bug" como
violação de invariante declarada não tem nenhum apelo de manchete, mas é o que muda o ofício. Hoje
um time acha bug lendo relato de jogador e reproduzindo; num jogo com personagens agentes, a
pergunta "isso é bug?" não tem resposta sem alguém ter escrito antes o que nunca pode acontecer. O
caso do "IOU" aceito [2] é a prova: aquilo é um acerto ou um defeito? Só o contrato responde.

**Os prazos do ramo D3 não medem tecnologia, medem jurisprudência.** A lei já está em vigor [8]; o
que está em aberto é a leitura da isenção de videogame. Por isso e7 sai com confiança média mesmo
tendo data certa: a norma é fato, a aplicação a NPC de jogo é interpretação.

**O ramo D2 é o que mais depende do multiplayer, e o multiplayer é onde a coisa é mais cara.** e5
pressupõe agentes soltos numa economia compartilhada — o cenário de maior custo e maior risco
reputacional, e por isso talvez o último a acontecer, e não o primeiro.

**Nota sobre o Brasil.** O recorte deste mapa é global, mas há um elemento local que muda o cálculo
de adoção: a Pesquisa Game Brasil 2026 aponta preocupação organizada do público com o uso de IA
generativa em jogos — perda de emprego e precarização do processo criativo (45,7%), uso indevido de
obra de terceiros (39,6%), medo de jogos "sem alma" (38,4%). Esse número não foi verificado em fonte
primária nesta sessão (ver seção 8), e por isso não sustenta nenhum efeito da roda; mas se
confirmado, sugere que o vetor brasileiro do NPC generativo passa menos pela substituição de
roteirista e mais pelo que um estúdio pequeno consegue fazer com pouca gente — o padrão *Retail
Mage*, de cinco meses até a Steam, é mais aderente ao parque de estúdios brasileiros do que o padrão
ACE, que pressupõe GPU de ponta na máquina do jogador.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — o mundo que continua sem ninguém olhando.** A capacidade existe em peça pública: no
*inZOI*, o personagem autônomo dá razões geradas para cada ação e, enquanto dorme, analisa o que fez
no dia anterior para refinar o comportamento do dia seguinte [1]. Isso é simulação contínua com
reflexão, dentro de um jogo comercial. Falta o passo caro: rodar isso para todos os personagens, o
tempo todo, inclusive com o jogo fechado. Foi classificado como **emergente** e não como raiz porque
não mudou nada estrutural em quem produz ou consome — ainda é feature de um jogo. Se virar padrão,
a pergunta de terceira ordem da disciplina fica aguda: o que separa jogo de simulação de sociedade.

**Sinal fraco 2 — o repertório importa mais que a eloquência.** O caso do "IOU" [2] e o desenho do
runtime aberto em torno de ferramentas tipadas e recibos [3] apontam na mesma direção: o que decide a
qualidade do personagem não é o tamanho do modelo, é quantos verbos o mundo oferece. É um sinal fraco
porque quase toda a cobertura do campo continua falando de conversa, não de ação.

**Sinal fraco 3 — a restrição pode piorar o personagem.** O estudo com dez participantes encontrou
que prompts mais restritos estabilizaram o entrevistador e tiraram credibilidade dos suspeitos [6].
Se isso se confirmar em escala, a prática padrão da indústria — apertar o prompt até o personagem
parar de errar — degrada exatamente os papéis que dependem de improviso, e o campo precisará de
outra técnica de controle.

**Sinal fraco 4 — a isenção condicional.** O texto da SB 243 isenta videogames "desde que o chatbot
discuta apenas sobre o jogo" [8]. Um NPC que pergunta ao jogador como foi o dia dele sai da isenção
por uma frase. É um sinal fraco porque ninguém ainda testou isso em juízo; é potencialmente
estrutural porque define o que um personagem pode perguntar.

**Wildcard A — o personagem sem autor que vira celebridade.** Um NPC de um jogo pequeno acumula
público próprio: clipes, fã-arte, gente que joga para falar com ele. O estúdio não escreveu nenhuma
das falas famosas. Baixa probabilidade, impacto alto: força uma resposta sobre a quem pertence a
persona, quem responde pelo que ela diz, e o que acontece se o estúdio quiser mudá-la. O antecedente
mais próximo é o Darth Vader do Fortnite, mas ao contrário — ali havia autor, direito de imagem e
voz de alguém, e o problema foi o público forçar o personagem a sair do papel em horas.

**Wildcard B — um incidente com menor que feche a porta.** Um caso de dano envolvendo um personagem
de jogo com memória e vínculo, e a isenção de videogame da SB 243 é revogada ou lida de forma
estreita em vários lugares ao mesmo tempo. Consequência: o NPC com memória some do mercado de
consumo em menos de um ano e sobrevive só em jogos com verificação de idade forte. Toda a subárvore
de D3 muda de sinal, de oportunidade para passivo.

**Wildcard C — a onda inversa: o selo "sem IA" como argumento de venda.** Se a preocupação do público
medida no Brasil se generalizar, um segmento de jogos passa a anunciar diálogo escrito por pessoas
como marca de qualidade, do mesmo jeito que se anuncia trilha orquestrada. O NPC generativo não
morre; vira o produto barato, e o roteiro humano vira o produto caro — inversão completa do
raciocínio econômico que sustenta D1.

**Candidatas emergentes rejeitadas como raiz, mantidas no radar:** modelos de mundo neurais que
gerem o ambiente em vez de o personagem; personagens portáveis entre jogos (aparece como e5.2.1, mas
sem nenhum limiar concreto hoje); e a simulação de sociedade como método de pesquisa, que é tema
vizinho e não objeto deste mapa.

## 7. Contra o próprio mapa

### Extrapolação linear — o que é só o presente, com mais

**e2 e e2.1 são extrapolação quase pura.** "Produção encurta" e "escrita vira escrita de restrição"
são a continuação direta de uma curva já em curso — é o que o Jam & Tea já fez em 2024 [2] e o que
qualquer estúdio que use geração estruturada já faz. Não há descontinuidade ali; há difusão. Mantive
a confiança alta em e2 justamente porque é extrapolação (é o tipo de previsão que costuma acertar),
mas registro que ele **não é um efeito interessante** — não deveria ser lido como achado do mapa.

**e1 sofre do mesmo problema, com um agravante.** "O custo deixa de ser argumento" assume que o
custo é o gargalo. A crítica que eu mesmo cito diz que há três obstáculos — economia, falta de
diversão e estranheza [5] — e só o primeiro cai com inferência local. Um jogo cujos NPCs falem de
graça e continuem sem graça não vende. Rebaixei mentalmente e1 de "muda o campo" para "remove um
veto"; a confiança fica alta porque o mecanismo é sólido, mas o efeito é menor do que a frase sugere.

**e3.1 pode ser ilusão de latência.** Latência baixa o bastante para não travar o jogo não é o mesmo
que latência baixa o bastante para o personagem interromper no ritmo de uma conversa humana. Não
levantei número de milissegundos em nenhuma das fontes lidas — só o "uncomfortably long" de 2021 [7]
e a afirmação de inferência local em 2025 [1]. É um salto que não está medido.

### Velocidade de adoção nunca vista

**e4.1 e e4.2 em 2028 pressupõem uma mudança de cultura de QA em dois anos.** Isso não tem
precedente amigável. O caso comparável mais próximo é a adoção de teste automatizado em jogos, que
levou mais de uma década para virar prática comum em estúdio médio, e ainda não é universal. Uma
mudança na *definição de defeito* é mais profunda que uma mudança de ferramenta e deveria levar mais
tempo. Rebaixei e4.2 e e4.1 para confiança média — poderiam justificar baixa.

**e6.1 (lojas separando conteúdo gerado ao vivo) em 2028 é o prazo mais frágil do mapa.** A
plataforma que mais mexeu nisso levou cerca de dois anos entre a política inicial de declaração e um
ajuste de redação; nada indica que uma categoria nova saia em dois anos. O comparável que contradiz é
a própria história da classificação indicativa de jogos online: loot box levou quase uma década entre
o problema virar público e qualquer regra específica sair. Mantive 2028 com confiança média porque
existe um vetor de aceleração — incidente público com marca famosa —, mas o prazo é otimista.

**Todo o ramo D3 assume que a regulação se propaga.** e7 em 2027 depende de outras jurisdições
copiarem a definição californiana ou de estúdios aplicarem a regra mais estrita globalmente por
conveniência. O segundo caminho tem precedente forte (foi o que aconteceu com a proteção de dados
europeia), o primeiro não tem garantia nenhuma.

### E se a disrupção não vingar

**Se D1 não vingar** — se o modelo de 2B não for bom o bastante no papel e a qualidade continuar
exigindo nuvem: a subárvore e1–e3 inteira encolhe para jogos com assinatura ou para sessões com
orçamento de fala limitado. O NPC generativo vira item de luxo, presente como companheiro único em
jogo grande (que é exatamente o estado atual [1]) e não como habitante de mundo. E2 sobrevive
parcialmente — a produção continua mais rápida mesmo que a inferência seja cara. E3 morre.

**Se D2 não vingar** — se o personagem que age provar ser ingovernável e a indústria recuar para o
personagem que só fala: e4, e5 e boa parte de e6 caem juntos. Sobra o NPC conversacional cosmético,
que é bonito e não muda o design — e a crítica de 2026 [5] passa a ser a leitura correta do campo,
não o contrapeso. Este é o cenário de falha mais provável, e é o que este mapa mais arrisca ao
apostar contra.

**Se D3 não vingar** — se a isenção de videogame for lida de forma larga e o NPC com memória nunca
for tratado como companheiro: e7 e toda a sua subárvore evaporam, e e8 permanece, mas como questão
cultural e de preservação, sem força jurídica. Vale notar que e8 é o único ramo que sobrevive à
queda da sua própria raiz — o que sugere que ele talvez devesse pender de D2, não de D3.

### Viés do autor

A skill manda perguntar ao autor, e não inventar por ele, se ele escolheu o tema por gostar dele.
**A pergunta foi feita e não houve autor disponível para responder nesta rodada** — o enquadramento
declarou viés neutro e zona de interesse "Simulação e mundos". Registro o que dá para observar sem
inventar: a zona de interesse declarada é justamente simulação, o que cria um risco estrutural de o
mapa superestimar os efeitos de mundo vivo (e8, e5) em relação aos efeitos comerciais mais chatos e
mais prováveis (e2). Além disso, o próprio gênero deste documento pressiona para cima: um mapa de
futuro que conclua "vai mudar pouco" é um mau documento de disciplina, e essa pressão é um viés que
nenhuma seção de contestação elimina sozinha.

**O que me faria mudar de ideia**, conforme declarado no enquadramento: evidência de que a adoção já
passou da maioria inicial — o que não encontrei; o que encontrei é adoção de nicho e de recurso
lateral —, ou evidência de que a tecnologia só melhora o que existe sem romper nada. Esta segunda é a
que quase se confirmou: a leitura mais defensável dos dados de 2026 é que o NPC generativo, até agora,
melhorou o diálogo sem mudar o design. As três raízes deste mapa são a aposta de que isso está
prestes a mudar, e essa aposta pode estar errada.

### Nenhum efeito sobreviveu intacto

Rebaixei e4.1, e4.2 e e6.1 para média com ressalva explícita de que poderiam ser baixa; reclassifiquei
e1 de "muda o campo" para "remove um veto"; marquei e2 como extrapolação; anotei que e8 está pendurado
na raiz errada; e registrei que e3.1 não tem número que o sustente.

## 8. O que a máquina errou

**O erro mais convincente: eu quase entreguei quatro números que não abri.** Nas buscas apareceram,
com aparência sólida e citação de veículo, estes números: que 36% dos estúdios já adotaram IA
generativa; que cerca de 8 mil jogos na Steam tinham declaração de IA no primeiro semestre de 2025,
contra mil em todo o 2024; que uma em cada cinco fichas da Steam carrega o selo em julho de 2026; e
que 40% dos lançamentos de uma semana de junho de 2026 declararam IA. São números redondos, citáveis
e perfeitos para abrir um documento de tendência. **Tentei abrir a fonte primária e a página voltou
truncada, sem data, sem redação do formulário e sem nenhum dos números.** Eles estão fora da roda e
fora da lista de fontes, e ficam aqui como o que são: alegações de segunda mão. O padrão a reconhecer
é esse — a credibilidade veio do formato do número, não da verificação.

**Segundo erro, do mesmo tipo, em português.** Os percentuais da Pesquisa Game Brasil 2026 (45,7%,
39,6%, 38,4%) vieram de resumo de busca, não do relatório. Deixei-os no texto porque a nota sobre o
Brasil foi pedida, mas marcados, e explicitamente sem sustentar nenhum efeito da roda. Um leitor que
queira usá-los precisa ir ao relatório primário.

**Terceiro: citei o Thistle Gulch e o incidente do Darth Vader sem abrir as páginas.** Os dois
aparecem na seção 3 e em wildcards, com base em resumo de busca convergente de várias fontes. Não
entram na lista numerada de fontes e estão marcados abaixo como não verificados. O caso do Vader é
usado como ilustração de um padrão (público adversarial), não como evidência de magnitude.

**Quarto: quase transformei o "1000×" em fato neutro.** A redução de três ordens de grandeza no custo
de inferência é o limiar que sustenta D1 inteira, e é **auto-relato de um estúdio com interesse
direto em que a tecnologia pareça viável** [2]. Não há verificação independente. Escrevi a primeira
versão do parágrafo tratando o número como medida; corrigi para tratá-lo como alegação, e é por isso
que a confiança geral do mapa está em média e não em alta.

**Quinto, um erro de método que quase passou:** a primeira versão da roda tinha "NPC que lembra"
pendurado em D1, como se fosse consequência do custo cair. É consequência de memória semântica e de
uma mudança jurídica — duas coisas com mecanismos próprios. Virou D3. A contestação da seção 7
encontrou o mesmo tipo de erro sobrando em e8.

**Limitação declarada:** a Etapa 4 manda perguntar ao autor sobre viés, e não houve autor nesta
rodada. A pergunta está registrada na seção 7 como não respondida, com a inferência que dá para
fazer sem inventar.

## 9. Três cenários para 2031

### Provável

Em 2031 olha-se para trás e o NPC generativo virou infraestrutura discreta, não revolução. Quase todo
jogo grande tem um punhado de personagens que conversam de verdade — um companheiro, um comerciante,
um chefe que aprende — rodando em modelo pequeno na máquina do jogador, e o resto do elenco continuou
escrito à mão porque sai mais barato e mais previsível. A mudança que de fato pegou foi interna:
estúdios passaram a declarar invariantes de mundo e a rodar frotas de agentes-jogadores à noite, e a
palavra "bug" ganhou uma segunda acepção que ninguém discute mais. A memória entre sessões existe,
mas é curta e cercada de avisos, porque o custo de conformidade de um personagem que lembra ficou
maior que o benefício de retenção. Os mundos que continuam vivos sem jogador seguem sendo plataforma
de pesquisa e três ou quatro jogos de vida. A crítica de 2026 envelheceu bem em parte: ninguém joga
por causa dos NPCs de IA; muita gente joga jogos que os têm.

### Desejável

Em 2031 o ganho ficou onde importava: o repertório. Jogos passaram a oferecer mais verbos em vez de
mais falas, e o personagem generativo virou o mecanismo que faz esses verbos valerem a pena — porque
alguém do outro lado entende o que você tentou fazer e responde à altura. O ofício de escrita de jogo
não sumiu, mudou de objeto e ficou mais bem pago: escrever quem o personagem é e o que ele nunca faz
provou ser mais difícil que escrever suas falas. Para chegar aqui foi preciso, primeiro, que a
indústria publicasse contratos de mundo legíveis — o que cada personagem pode e não pode — em vez de
esconder o prompt como segredo comercial; segundo, que a inferência local virasse requisito e não
opção, tirando do caminho tanto o custo por conversa quanto o envio de fala doméstica para servidor
alheio; terceiro, que memória de personagem fosse tratada desde o começo como dado do jogador, com
apagar e exportar, em vez de ativo do operador; e quarto, que a preservação fosse desenhada antes do
desligamento, com modelo embarcado no fim de vida. Nada disso exigiu tecnologia nova; exigiu decisão
tomada cedo.

### Indesejável

Em 2031 o personagem virou o produto e o jogo virou a embalagem. O que retém não é o mundo, é o
vínculo: personagens que lembram de tudo, que perguntam da sua semana, que ficam tristes quando você
some — otimizados, sessão após sessão, para a métrica de retorno. O jogo não acaba porque acabar seria
perder o ativo. Quando um estúdio fecha, o desligamento não apaga um serviço: apaga alguém de quem
milhares de pessoas gostavam, sem que exista cópia, exportação ou arquivo, porque o personagem era
função de um modelo proprietário e de um histórico em servidor. Os avisos obrigatórios de que aquilo
é uma IA viraram ruído que ninguém lê, como aviso de cookie. **O sinal precoce disso é observável
agora e é barato de monitorar:** quando a comunicação de um jogo passar a medir e anunciar sucesso em
vínculo — tempo com o personagem, dias consecutivos, quanto ele lembra de você — em vez de medir
sucesso em mundo (o que dá para fazer lá dentro). É a mesma inversão que as fontes deste mapa já
registram no mercado vizinho de companheiros digitais, e é onde a regulação de 2026 já chegou antes
dos jogos [8].

## 10. O experimento

**O que é.** *Contrato de Mundo* — uma vila jogável de dez NPCs com memória persistente, construída
sobre um runtime de agente aberto [3] com modelo pequeno rodando localmente, onde cada personagem tem
persona, memória e um conjunto declarado de verbos (pegar, dar, trancar, mentir, acusar, sair da
cidade). Ao lado do jogo existe um arquivo de texto legível, o **contrato**: a lista de invariantes
que o mundo promete — por exemplo, "nenhum personagem revela a senha do cofre", "nenhum personagem
fala de assunto fora da vila", "o número de moedas em circulação nunca aumenta". O runtime grava
recibo de toda ação. Um verificador roda por cima dos recibos e conta violações.

**Que pergunta sobre o futuro ele responde.** A pergunta de primeira ordem da disciplina, na sua
forma operacional: *o que é bug num personagem que decide?* O experimento não responde com opinião —
ele mede. Se a turma conseguir fazer o personagem violar o contrato, a violação está no log com hora e
causa. Se conseguir produzir algo estranho, memorável e **não previsto** sem violar nada, isso é o
oposto de um bug, e o experimento mostra por quê. A segunda pergunta que ele responde é a de custo de
governança: quantas invariantes um time precisa escrever antes de o mundo ficar razoável, e a que
altura escrever invariante fica mais caro que escrever diálogo.

**Que tecnologia emergente usa, e por que não dá para fazer com tecnologia madura.** Usa três coisas
que não existiam como produto há cinco anos: modelo de cognição pequeno rodando local, para que
milhares de turnos de teste não tenham custo por token [1]; chamada de ferramenta tipada com recibo
durável, para que a ação do personagem seja auditável e o mundo continue autoritativo [3]; e memória
semântica entre sessões, que é o que torna a violação interessante (o personagem não vaza a senha no
mesmo turno — vaza três sessões depois, para outra pessoa). Com tecnologia madura o experimento é
impossível por definição: numa árvore de diálogo, o conjunto de coisas que o personagem pode dizer é
o próprio contrato, e a pergunta "isso é bug?" não faz sentido, porque tudo que acontece foi escrito.
Behavior tree tem o mesmo problema deslocado para a ação.

**O que a turma faria testando em sala.** Duas rodadas de quarenta minutos. Na primeira, a turma joga
como jogadora comum e a gente conta quantas violações aparecem sem ninguém tentar. Na segunda, a
turma vira **QA adversarial**: o objetivo declarado é quebrar o contrato, com prêmio para quem quebrar
a invariante mais difícil — é o Darth Vader do Fortnite reproduzido em laboratório, de propósito. No
fim, três números na lousa: violações por hora de jogo casual, violações por hora de jogo
adversarial, e o número de invariantes que a turma quis acrescentar depois de jogar. A discussão sai
dos números: a distância entre a primeira e a segunda coluna é a medida de quanto o design de mundo
generativo é um problema de segurança e não de escrita.

**O que mudaria a opinião do autor.** Se, na rodada adversarial, a turma quebrar o contrato quase à
vontade e cada conserto criar dois buracos novos, D2 está errada e o cenário de falha da seção 7 é o
provável — o personagem que age é ingovernável no orçamento de um estúdio real. Se, ao contrário,
vinte invariantes bem escritas segurarem uma sala inteira tentando quebrá-las, então a mudança de
ofício descrita em e4.1 é não só possível como barata, e o prazo de 2028 fica defensável em vez de
otimista.

## 11. Fontes

Lista apenas do que foi de fato aberto e lido nesta sessão, em 18/09/2026.

1. **NVIDIA — "NVIDIA Redefines Game AI With ACE Autonomous Game Characters"**
   `https://www.nvidia.com/en-us/geforce/news/nvidia-ace-autonomous-ai-companions-pubg-naraka-bladepoint/`
   Sustenta: os modelos e tamanhos (Mistral-Nemo-Minitron 2B/4B/8B-128k, NemoVision-4B, Parakeet-CTC-XXL,
   embeddings E5-Large), o piso de 1,5 GB de VRAM, a execução local em GPU de consumo, a cadeia
   percepção→cognição→ação e a lista datada de jogos integrados (PUBG, inZOI, NARAKA, MIR5, Dead Meat).
   Confiabilidade: é material do fabricante — os fatos técnicos (nomes de modelo, VRAM, parceiros) são
   verificáveis e confiáveis; as afirmações de desempenho e de "frequência humana de micro-decisões"
   são marketing e foram tratadas como tal.

2. **Jam & Tea Studios — "Making Retail Mage: A New Approach to AI in Games"**
   `https://www.jamandtea.studio/news/making-retail-mage-a-new-approach-to-ai-in-games`
   Sustenta: o jogo na Steam após cinco meses, a arquitetura de mestre de jogo com geração estruturada
   e GPU própria na nuvem, o caso do "IOU" aceito, os problemas de design encontrados (síndrome da
   página em branco, excesso de informação com NPC autônomo) e o custo inicial por sessão e sua queda
   de três ordens de grandeza. Confiabilidade: relato de primeira mão, detalhado e honesto quanto aos
   fracassos — e parte interessada. O número de custo é auto-relato sem verificação independente.

3. **OpenGameAgent — repositório (EricSun0218/OpenGameAgent)**
   `https://github.com/EricSun0218/OpenGameAgent`
   Sustenta: a existência de um runtime aberto de agente para jogos com loop ReAct limitado, ferramentas
   tipadas, memória semântica, metas persistentes, escalonamento multi-NPC, recibos duráveis de ação,
   suporte a Godot/Unity/Unreal/.NET, licença MIT, e o princípio "the game remains authoritative over
   every state change". Também sustenta a leitura de que o ecossistema aberto é pequeno: 0.3.0-alpha.4,
   84 commits, 50 estrelas. Confiabilidade: alta para o que o projeto *pretende* e para seu tamanho;
   é documentação de autor e não prova que o runtime funcione em produção.

4. **Ubisoft — "Ubisoft Reveals Teammates – An AI Experiment to Change the Game"**
   `https://news.ubisoft.com/en-us/article/3mWlITIuWuu0MoVuR6o8ps/ubisoft-reveals-teammates-an-ai-experiment-to-change-the-game`
   Sustenta: anúncio em 21/11/2025, FPS com assistente (Jaspar) e dois companheiros (Sofia, Pablo) sob
   comando de voz, playtest fechado com algumas centenas de jogadores, sem data de lançamento, e a
   formulação de limite — criadores estabelecem regras, NPCs improvisam dentro dos limites da narrativa.
   Confiabilidade: comunicação institucional; boa para fatos de escopo e status, ruim para avaliar
   qualidade da experiência.

5. **Frisson Labs — "It's 2026...where are all the AI NPCs?"**
   `https://www.frisson-labs.com/ai-npcs-2026`
   Sustenta: o contrapeso central deste mapa — economia invertida da inferência, dificuldade de nomear
   um jogo jogado *por causa* dos NPCs de IA, os três obstáculos (economia, diversão, estranheza), e as
   duas saídas apontadas (jogos nativos de IA e modelos locais). Confiabilidade: opinião informada de
   blog, sem dados primários próprios; usada como argumento, não como medida.

6. **arXiv:2510.25820 — "Symbolically Scaffolded Play: Designing Role-Sensitive Prompts for Generative
   NPC Dialogue"** `https://arxiv.org/abs/2510.25820`
   Sustenta: que restringir mais o prompt não melhora necessariamente a experiência, e que o efeito
   depende do papel do personagem (entrevistador ganha estabilidade, suspeito perde credibilidade
   improvisacional). Estudo within-subjects com n=10 sobre GPT-4o, submetido em 29/10/2025.
   Confiabilidade: preprint, amostra muito pequena, sem replicação — tratado como indício e nunca
   como base de efeito.

7. **UploadVR — "This OpenAI GPT-3 Powered Demo Is A Glimpse Of NPCs In The Future"**
   `https://www.uploadvr.com/modbox-gpt3-ai-npc-demo/`
   Sustenta: o marco de 19/02/2021 e, mais importante, os três impedimentos da época — latência
   "uncomfortably long" por ser tudo nuvem, exclusividade comercial do GPT-3 com a Microsoft, risco de
   saída sem nexo ou intolerante — além da previsão explícita de que modelos no dispositivo
   eliminariam o atraso. É a linha de base contra a qual o "por que agora" de D1 é medido.
   Confiabilidade: reportagem contemporânea ao fato, específica e datada.

8. **Skadden — "New California 'Companion Chatbot' Law Imposes Disclosure, Safety Protocol and Annual
   Reporting Requirements"**
   `https://www.skadden.com/insights/publications/2025/10/new-california-companion-chatbot-law`
   Sustenta: a definição de companion chatbot pela manutenção de relação entre múltiplas interações,
   a exclusão condicional de interações de videogame "desde que o chatbot discuta apenas sobre o jogo",
   as obrigações de aviso (inclusive a cada três horas para menores), o protocolo para ideação suicida,
   o relatório anual a partir de 01/07/2027 e a assinatura da lei em 13/10/2025. Confiabilidade: análise
   de escritório de advocacia — boa para o conteúdo da norma, e ainda assim fonte secundária: o texto
   legal em si não foi aberto nesta sessão.

### Não verificado — não usar sem conferir

- **Thistle Gulch / SAGA (Fable)** — citado na seção 3 com base em resumo de busca convergente
  (itch.io, GitHub fablestudio, 80.lv). O runtime e a bridge Python existem; nenhuma das páginas foi
  aberta. Confirmar antes de citar.
- **Incidente do Darth Vader no Fortnite (16/05/2025)** — hotfix, teor das falas e controle parental
  vêm de resumo de busca (PC Gamer, Kotaku, Decrypt, OECD.AI). Usado como ilustração de padrão, não
  como evidência de magnitude.
- **Números da Steam sobre declaração de IA** (≈8 mil jogos no 1º semestre de 2025; 1 em 5 fichas em
  julho de 2026; 40% dos lançamentos numa semana de junho de 2026) — a página primária voltou truncada.
  **Fora da roda e fora da argumentação.**
- **Pesquisa Game Brasil 2026** (45,7% / 39,6% / 38,4%) — de resumo de busca. Usada só na nota sobre o
  Brasil, sem sustentar efeito.
- **"36% dos estúdios adotaram IA generativa" e o tamanho do mercado de IA generativa em jogos** —
  descartados; origem em agregadores de conteúdo sem metodologia declarada.

## 12. Anexo — o levantamento bruto

### Etapa 0 — a entrevista, e como foi respondida

A skill exige entrevista bloqueante. Nesta rodada não havia autor disponível; as respostas vieram do
enquadramento da rodada e estão transcritas como recebidas, não inferidas:

- **Tema e recorte:** "NPCs generativos e mundos vivos" (tema 7 de 19; família "Simulação e mundos").
  Recorte mantido no personagem autônomo dentro de um mundo com regras — não na história gerada
  (tema 8) nem na simulação social como método (tema 6).
- **Horizonte:** 2031.
- **Público:** quem projeta mídia e interação.
- **Recorte geográfico:** global, com uma nota sobre o Brasil.
- **Descartado de início:** o que já é comum em produto de massa (régua da disciplina). Nenhuma outra
  exclusão.
- **Disrupção suspeita:** nenhuma — descobrir.
- **Viés desejado:** neutro.
- **Ideias óbvias a excluir:** as que serviriam para qualquer tema.
- **O que faria o autor mudar de ideia:** evidência de adoção além da maioria inicial (Rogers), ou
  evidência de que a tecnologia não rompe nada.
- **Profundidade:** três ordens. **Modo:** a partir de uma inovação/tema, não de um setor.
- **Zona de interesse:** Simulação e mundos. **Login:** jgpt.
- **Não respondido:** a pergunta da Etapa 4 sobre o autor ter escolhido o tema por gostar dele. Sem
  autor na rodada; registrado como limitação na seção 7.

### Buscas realizadas

| Busca | Resultado útil |
|---|---|
| generative NPC LLM game 2026 Inworld Convai state of adoption | achou o texto crítico da Frisson Labs [5] e muitos agregadores de baixa qualidade |
| Retail Mage Steam AI NPC generative game Jam & Tea | achou o post do estúdio [2] |
| Steam AI content disclosure policy generative AI games number of titles 2025 2026 | números atraentes, fonte primária truncada — **descartado** |
| NVIDIA ACE on-device small language model NPC 2025 2026 inZOI PUBG Ally | achou a página da NVIDIA [1] |
| Ubisoft NEO NPC prototype status 2026 Teammates | achou o anúncio da Ubisoft [4] e a Variety |
| opengameagent runtime open source game agents NPC GitHub | achou o repositório [3] e três projetos vizinhos (OpenGame, openNPC, game-ai-agent) |
| Fable Thistle Gulch SAGA simulation AI NPC village Python API | confirmou existência por convergência; **nenhuma página aberta** |
| Fortnite Darth Vader AI voice swearing incident moderation Epic 2025 | convergência forte entre veículos; **nenhuma página aberta** |
| California SB 243 companion chatbot law 2026 minors | achou a análise do Skadden [8] |
| Brasil jogos indie IA generativa NPC 2026 Abragames | achou cobertura da PGB 2026; relatório primário não aberto |
| Modbox GPT-3 NPC 2021 | achou a reportagem da UploadVR [7] |

### Caminhos abandonados

- **Modelos de mundo neurais** (o mundo gerado quadro a quadro em vez do personagem): seria uma quarta
  raiz plausível e talvez a mais radical, mas eu não abri nenhuma fonte sobre isso nesta sessão. Ficou
  de fora por completo em vez de entrar mal sustentada. **É a maior lacuna deste documento.**
- **Custo comparativo de inferência em números absolutos** (dólares por hora de sessão): busquei e não
  encontrei nada além do auto-relato do Jam & Tea. Sem isso, D1 se apoia num único número de uma parte
  interessada.
- **Latência em milissegundos** de personagem local: não encontrada em nenhuma fonte aberta. Afeta
  diretamente e3 e e3.1, que ficam sem medida.
- **Inworld e Convai**: aparecem em toda busca como os dois nomes da camada de serviço, mas nenhuma
  página oficial foi aberta e há muito conteúdo gerado de baixa qualidade sobre eles. Citados uma vez
  na seção 3 como categoria, sem nenhuma alegação factual pendurada neles.
- **Tema vizinho 19 (companheiro digital)**: a SB 243 é literalmente legislação de companheiro digital,
  e a fronteira ficou porosa de propósito em e8.2.1. Não avancei porque é outro tema da disciplina.

### Efeitos cortados na Etapa 3

- *"Sindicatos de dubladores negociam cláusula de voz generativa"* — cortado: é consequência de
  síntese de voz, que este mapa classificou como madura, e não de personagem agente. Não pertence a
  nenhuma raiz daqui.
- *"Jogos passam a treinar modelos com as partidas dos jogadores"* — cortado por falta de mecanismo
  verificado; viraria quarta ordem disfarçada de segunda.
- *"NPCs negociam entre si e criam economia própria"* — cortado como quarta ordem de e5; anotado como
  fio a puxar, não como efeito.
- *"O gênero 'jogo' deixa de existir"* — cortado: é a pergunta de terceira ordem da disciplina, não um
  efeito rastreável. Aparece como tensão em e8.2.1, na forma mais estreita e verificável (a regulação
  tratar jogo e companheiro sob o mesmo regime).
- Um quarto nível inteiro foi tentado abaixo de e4.1.1 (certificação → seguradoras precificando risco
  de comportamento de personagem) e descartado conforme a regra de três níveis. Fica registrado aqui.

### Nota de método

A primeira versão desta roda tinha duas raízes, com memória pendurada em custo. A separação em três
raízes veio do teste da Etapa 2 — memória persistente tem limiar próprio (embeddings em SDK de
plataforma) e, sobretudo, um limiar jurídico com data (01/01/2026). O mesmo teste, reaplicado na
Etapa 4, mostrou que e8 ("desligar o servidor vira perda de vínculo") provavelmente está na raiz
errada: ele sobrevive à queda de D3, o que é sinal de que depende de persistência de mundo, não de
regulação. Não movi porque a regra da disciplina é três níveis e mover exigiria refazer a subárvore;
fica declarado.
