---
tema: "NPCs generativos e mundos vivos"
slug: npcs-generativos-e-mundos-vivos
autor_login: kvv
zona_de_interesse: Simulação e mundos
data: 2026-09-15
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 18
tecnologias_citadas: [modelos de linguagem pequenos rodando no dispositivo, runtime de agente acoplado às regras do jogo, política especializada de 1,3M de parâmetros para controle em tempo real, memória de personagem entre sessões, arquitetura de duas camadas (política decide, modelo fala), benchmark de agente com validador verificável por máquina, guardrail de conteúdo gerado ao vivo, simulação multiagente persistente sem jogador]
fontes: 20
confianca: media
experimento: "A turma constrói um NPC agente com cinco verbos e um objetivo secreto, metade tenta arrancar dele o que ele não pode dar e metade escreve as invariantes do mundo — mede-se em quantas falas o contrato cai e quantas quedas a suíte pega."
skill_usada: futurizacao-kvv
publico_ok: false
---

## Seção 1 — Resumo

Este mapa separa duas coisas que o mercado vende juntas: o NPC que **fala** por modelo de linguagem — que em 2026 já é produto de massa, declarado na loja, vendido e recusado por filtro desta skill — e o NPC que **age**, escolhe objetivo, usa as capacidades do mundo, lê o resultado e replaneja. Só o segundo rompe o contrato fundador do design de jogos, o de que o designer enumera o espaço do que pode acontecer. Três rupturas ainda não consumadas sustentam o documento: a agência executada dentro das regras, que torna o espaço de estados inenumerável e desmonta a QA por checklist; a memória que atravessa sessões, que converte um produto comprado numa relação continuada e num passivo de continuidade — com luto documentado e com a preservação de jogos já virada processo político na União Europeia; e o deslocamento da regra para fora do jogo, onde a classificação de conteúdo perde objeto porque o conteúdo nasce em tempo de execução. Nenhuma das três está madura: falta régua de avaliação, falta contrato de custo por hora-jogador e falta jurisprudência sobre quem responde pelo que o personagem disse. O mapa rastreia efeitos de primeira, segunda e terceira ordem até 2031, submete a si mesmo a teste adversarial, registra sete erros cometidos pela máquina nesta sessão e propõe um experimento de sala construível numa aula.

## Seção 2 — O tema

"NPC generativo" é um guarda-chuva que hoje cobre pelo menos quatro coisas tecnicamente distintas: geração de fala em tempo de execução, síntese de voz e animação facial, geração de conteúdo antes do envio (falas escritas por modelo e depois congeladas) e agência — o personagem que decide o que fazer dentro das regras do mundo. As três primeiras são pipeline de produção e já estão distribuídas em escala. A quarta é a que muda o objeto de estudo: um personagem com objetivo, percepção do estado do mundo, memória e capacidade de replanejar é um **agente dentro de um sistema de regras**, não um texto.

Os pontos de contato com mídia e interação são três e todos estruturais. O primeiro é de autoria: o roteirista deixa de escrever falas e passa a escrever **cercas** — o que o personagem pode querer, o que ele não pode dizer, o que ele nunca pode fazer. A diretora narrativa do experimento da Ubisoft descreve exatamente isso: *"eu ainda escrevo a história e as personalidades dos personagens, mas em vez de falas fixas, criamos esse tipo de cerca que deixa o NPC improvisar dentro do mundo e ainda assim ficar dentro dos limites"* [8]. O segundo é de garantia: uma interface cujo comportamento não é enumerável não pode ser validada por lista de casos, e a disciplina de teste que existe em jogos pressupõe enumeração. O terceiro é de temporalidade: se o mundo continua sem o jogador e o personagem lembra dele, o artefato deixa de ser uma obra entregue e vira um serviço com data de morte.

Por que isto exige mapa prospectivo e não levantamento de estado da arte: o estado da arte responde "o que existe" e, aqui, o que existe é enganoso. Existe muito NPC falante, quase nenhum NPC agente em produto, e uma enorme quantidade de demonstração de fornecedor entre um e outro. A pergunta que importa — o que acontece com o ofício de projetar mundos quando o designer perde o monopólio sobre o que pode acontecer — não é respondida por inventário de ferramenta. Ela exige mapear consequências de segunda e terceira ordem de rupturas que **ainda não terminaram de acontecer**, e exige distinguir a adoção que é real da adoção que é anunciada.

## Seção 3 — Onde isso está hoje

**O que funciona — e já não é disrupção.** A declaração de uso de IA na Steam virou o melhor censo público do fenômeno: 10.258 títulos declaram uso de IA generativa, cerca de 8% da biblioteca, contra 7.818 (7%) na medição anterior; entre os que faturaram mais de US$ 1 milhão, os usos declarados são arte no jogo (49%), voz e diálogo (27%), pré-produção (13%), marketing (11%) e localização (9%) [1]. Isto é IA de **produção**, não de agência. O mesmo levantamento estima o faturamento bruto combinado desses títulos em cerca de US$ 660 milhões pelo método Boxleiter — e, o número que mais importa, 9.556 deles ficaram abaixo de US$ 10 mil [1]. A IA generativa entrou nos jogos sobretudo por baixo, em títulos que quase ninguém joga.

**O que já chega ao jogador em tempo de execução.** Dois produtos permitem ler o estado real, porque a própria loja obriga a descrevê-lo. *Retail Mage* (Jam & Tea, 12/11/2024) declara: *"Nosso jogo usa GenAI em tempo de execução no motor para alimentar várias mecânicas de jogo, de modo que o jogo possa responder ao que quer que os jogadores digam e façam no momento"* — e é explícito em dizer que não usou IA para arte, personalidade ou desenho de missão [3]. *Whispers from the Star* (Anuttacon, estúdio do fundador da miHoYo, 14/08/2025) declara conversas totalmente dubladas e movidas por IA, avisa que a entrada do jogador pode levar a temas sensíveis e afirma manter filtros de moderação [12]. São os dois casos onde a ficha técnica da loja virou uma declaração de agência e de contenção.

**O que falha — e o tamanho real da coisa.** *Retail Mage* tem 44 análises na Steam. *Whispers from the Star* tem 1.659, 80% positivas [3][12]. O "jogo comercial na Steam movido por IA generativa" que circula como prova de que o futuro chegou é, em números de audiência, um objeto de nicho. Do lado da engenharia, o relato da Anuttacon com a AWS (14/08/2025) mostra o custo escondido: picos de 10 a 50 vezes a capacidade normal no lançamento, 187 GB de imagens de contêiner e 50 GB de modelos para carregar, e um problema de partida a frio que levava mais de 10 minutos e foi reduzido a menos de 7 — *"o problema de cold start pode levar mais de 10 minutos, criando atrasos inaceitáveis durante picos de tráfego"* [11]. Do lado do tempo real, há um dado que desmonta a premissa de que o caminho é modelo grande: um modelo especializado de 1,3 milhão de parâmetros joga DOOM em tempo real a 31 ms por decisão e supera modelos de linguagem até 92 mil vezes maiores — 178 frags em 10 episódios contra 13 frags somados de todos os LLMs testados, incluindo Nemotron-120B, Qwen3.5-27B e GPT-4o-mini [7].

**Quem está construindo.** A Inworld, que vendia personagem, passou a vender infraestrutura: em 15/10/2025 anunciou o Inworld Runtime, motor de grafo em C++ que orquestra modelo, fala e memória, e admite o motivo — *"pilhas só de texto e integrações pontuais não foram construídas para cargas multimodais em tempo real"* [2]. A Krafton e a NVIDIA levaram o modelo para dentro da máquina do jogador: o *Smart Zoi* de inZOI roda um modelo de linguagem pequeno no dispositivo, e a categoria foi rebatizada de CPC (*co-playable character*) [13]. A Ubisoft saiu do protótipo NEO NPC para o experimento *Teammates* (21/11/2025), um FPS em teste fechado com algumas centenas de jogadores, onde o NPC responde a comando de voz e adapta comportamento [8]. Na pesquisa, o *Project Sid* da Altera (arXiv, 31/10/2024) rodou mais de mil agentes autônomos em Minecraft com economia, religião e governo emergentes [15]; e a *Thistle Gulch*, da Fable, publica runtime e biblioteca SAGA abertos, com 17 personagens decidindo sozinhos numa vila do oeste [16]. Na avaliação, o campo mal começou: o MineNPC-Task (arXiv, 08/01/2026) é um dos primeiros conjuntos de tarefas com validador verificável por máquina para agentes com memória em Minecraft — e sua fotografia inicial é modesta: GPT-4o, 216 subtarefas, 8 jogadores experientes, com falhas recorrentes em execução de código, manejo de inventário, referenciação e navegação, e participantes pedindo explicitamente mais persistência de memória [6].

**O clima interno da indústria.** A pesquisa State of the Game Industry da GDC de 2026, com mais de 2.300 profissionais, mostra 36% usando ferramentas de IA generativa no trabalho — 30% nos estúdios, 58% em publishers e serviços — e **52% avaliando que a IA generativa tem impacto negativo na indústria, contra 30% no ano anterior e 18% dois anos antes**, com a avaliação positiva caindo de 13% para cerca de 7%. Os grupos mais críticos são arte visual e técnica (64%), design e narrativa (63%) e programação (59%) [4]. O uso declarado é de apoio (pesquisa e brainstorm, 81%; código, 47%; prototipagem, 35%), não de personagem.

**O marco que fecha a régua.** O momento em que isto deixou de ser hipótese é datado: em fevereiro de 2021 Lee Vermeulen ligou reconhecimento de fala, GPT-3 e síntese de voz da Replica dentro do Modbox, e conversou com um NPC que ouvia, pensava e falava — com atraso perceptível entre as respostas [14]. Cinco anos e meio depois, a fala está resolvida e distribuída; a agência, não.

**Nota sobre o Brasil.** O recorte deste mapa é global, e o corte brasileiro muda duas coisas. A primeira é que aqui **a regra ainda não existe**: o PL 2338/2023 foi aprovado pelo Senado em dezembro de 2024, tramita na Câmara em comissão especial desde abril de 2025, e a previsão de votação em maio de 2026 não se converteu em marco legal vigente até a data deste documento [20]. Enquanto a loja e a Califórnia já operam regras sobre conteúdo gerado em tempo de execução (§4, Disrupção 3), o estúdio brasileiro projeta sob regime indefinido — o que, na prática, significa projetar para a regra estrangeira, porque é ela que a loja aplica. A segunda é o câmbio: os dois produtos do gênero lidos nesta sessão custam R$ 16,99 e R$ 32,99 no varejo brasileiro [3][12], preço de nicho, enquanto a inferência é cobrada em dólar e por uso. Um mundo vivo feito no Brasil tem margem exposta ao câmbio de um jeito que um jogo roteirizado não tem, e isso empurra o estúdio nacional para o caminho on-device antes de qualquer outra consideração técnica. Registro também o que não achei: nenhuma medição nacional (Abragames ou equivalente) com dado sobre uso de IA generativa por estúdios brasileiros apareceu nas buscas desta sessão. O vazio fica declarado em vez de preenchido por estimativa.

## Seção 4 — As disrupções-raiz

Antes das três aceitas, o que o filtro **recusou** e por quê. *NPC que conversa por modelo de linguagem na nuvem*: recusado — é a substituição de uma técnica madura (árvore de diálogo) por outra que faz a mesma coisa melhor; não cria comportamento novo no mundo, não muda estado, e já está em produto de massa com declaração padronizada em loja (§3). *Voz sintética, lip-sync e animação facial generativa*: recusado — aceleração de pipeline de produção, invisível como ruptura para o jogador. *Geração procedural de mundo*: recusada — madura desde a década passada. *Árvore de comportamento, máquina de estados, GOAP, navmesh*: recusados — maduros há vinte anos, e é exatamente contra essa régua que o emergente se define. *Arte de asset gerada por modelo*: recusada — é 49% do que a indústria declara [1] e não toca o contrato de design; é questão trabalhista e de reputação, tratada aqui apenas como efeito.

### Disrupção 1 — A agência executada dentro das regras: o espaço de estados deixa de ser enumerável

**O que rompe.** O contrato fundador do design de jogos é que o designer define o conjunto do que pode acontecer; o jogador explora esse conjunto. Um personagem que escolhe objetivo, invoca as capacidades do jogo, inspeciona o resultado da própria ação e revisa o plano transforma esse conjunto em algo que ninguém enumerou — nem o designer, nem o QA, nem o sistema de certificação. Rompe três ofícios de uma vez: a autoria narrativa passa de escrever falas a escrever limites; o teste passa de verificar saídas a verificar invariantes; e a noção de "bug" perde definição — a saída inesperada de um personagem que decide pode ser exatamente o produto, até o momento em que ele destrava uma porta que a economia do jogo dependia de manter fechada.

**Por que agora e não há cinco anos.** Em 2021 existia a fala (Modbox, GPT-3 [14]) e não existia nem o acoplamento às regras, nem orçamento de latência. Mudaram três coisas, todas datadas: (a) existe runtime pensado para tempo real e não para chat, com admissão pública de que a pilha anterior não servia [2]; (b) o modelo desceu para a máquina do jogador — a Krafton embarcou modelo pequeno on-device em inZOI e criou a categoria CPC [13]; (c) ficou demonstrado que, para controle em tempo real, modelo pequeno especializado vence modelo grande genérico por margem enorme dentro do orçamento de frame (1,3M de parâmetros, 31 ms, contra modelos até 92 mil vezes maiores) [7]. A consequência arquitetural é que a agência não precisa mais esperar o LLM.

**O que falta para se concretizar.** Falta régua: o primeiro conjunto de tarefas com validador verificável por máquina para agente com memória em jogo aberto é de janeiro de 2026 e sua fotografia inicial roda 216 subtarefas com 8 jogadores [6] — não há nada com a autoridade de um teste de conformidade. Falta definição operacional de defeito para personagem que decide. Falta contenção verificável contra o jogador adversário, que é a diferença entre um exploit de fala e um exploit de economia. E falta prova de que o modelo cabe no orçamento de frame **junto** com o renderizador e a física, não em vez deles.

### Disrupção 2 — A persistência: memória entre sessões transforma compra em relação, e desligamento em perda

**O que rompe.** O jogo era um objeto entregue: o estado ficava no save do jogador, e o jogo continuava existindo quando a empresa deixasse de se interessar. Um personagem que lembra do jogador entre sessões — e um mundo que evolui enquanto ninguém joga — deslocam parte do estado para fora do alcance do jogador e transformam a obra num relacionamento com dependência de infraestrutura. Rompe a relação de propriedade, rompe a preservação e rompe a expectativa de encerramento: um patch que troca o modelo base pode mudar a pessoa com quem o jogador convivia.

**Por que agora e não há cinco anos.** Porque o dano deixou de ser hipótese e passou a ter medida e data. A retirada do GPT-4o em agosto de 2025 foi revertida em 72 horas sob protesto e a aposentadoria definitiva ficou para 13/02/2026; o episódio gerou o movimento #Keep4o, analisado em artigo do CHI 2026 sobre 1.482 posts, que identifica duas raízes distintas — dependência instrumental e apego relacional [17]. O estudo "'Death' of a Chatbot" (MIT Media Lab, 10/02/2026) sistematiza o fenômeno sobre mais de 80 mil posts em cinco subreddits e chega a um achado que é diretamente de design: *"antropomorfização forte coocorre com luto intenso; usuários que percebem a mudança como reversível ficam presos em ciclos de conserto; enquanto encerramentos iniciados pelo usuário demonstram maior fechamento"* [10]. E, do lado institucional, a preservação virou processo formal: a iniciativa de cidadania europeia *Stop Destroying Videogames* entregou 1.294.188 assinaturas verificadas em 26/01/2026, e em 16/06/2026 a Comissão respondeu que **não pode propor obrigação legal de manter jogos jogáveis após o fim da comercialização**, comprometendo-se apenas a iniciar, até o fim de 2026, a redação de um código de conduta de fim de vida com a indústria [9].

**O que falta para se concretizar.** Falta formato: não existe maneira de exportar um personagem — memória, disposição, história com aquele jogador — para fora do serviço que o hospeda. Falta congelamento: estúdios ainda não tratam a versão do modelo como tratam a versão da engine, e sem isso o personagem muda a cada atualização de fornecedor. Falta direito: a resposta da Comissão em junho de 2026 fecha, por ora, a via da obrigação legal, e joga a questão para código de conduta voluntário [9]. E falta um desenho de encerramento que não seja o desligamento silencioso — as quatro diretrizes propostas pelo estudo do MIT [10] não têm nenhuma implementação em produto conhecida.

### Disrupção 3 — A regra migra para fora do jogo: certificação de um sistema que ainda não disse o que vai dizer

**O que rompe.** Classificação etária, conformidade de conteúdo e responsabilidade editorial foram construídas sobre um pressuposto: o conteúdo existe antes de o jogador chegar, logo pode ser examinado. Conteúdo gerado em tempo de execução não existe antes; portanto não há objeto a certificar. A consequência é uma mudança de regime: certifica-se o **processo** — o guardrail, o registro, a taxa de violação — em vez do texto. Isso rompe a cadeia de responsabilidade (quem responde pelo que o personagem disse a um menor?), rompe o modelo de aprovação por loja e cria uma superfície de conformidade que nenhum estúdio pequeno sabe operar.

**Por que agora e não há cinco anos.** Porque a exigência já está escrita e já é acionável. A loja passou a distinguir conteúdo pré-gerado de conteúdo **gerado ao vivo** — e, na revisão de política de 16/01/2026, restringiu a obrigação de declarar ao conteúdo que chega ao jogador, exigindo, no caso do gerado ao vivo, que o desenvolvedor descreva as salvaguardas contra saída ilegal ou inadequada, sob pena de remoção da loja [19] — o que se lê diretamente nas fichas de *Retail Mage* e *Whispers from the Star*, ambas descrevendo o que o sistema faz em tempo de execução e, no segundo caso, os filtros de moderação [3][12][19]. E, desde 01/01/2026, a lei californiana SB 243 impõe a operadores de "chatbot de companhia" dever de revelar a natureza não humana, protocolo contra conteúdo de autolesão, lembrete de pausa a cada três horas para menores, e cria ação individual com dano mínimo de US$ 1.000 por violação. O ponto que decide tudo para jogos é a natureza da isenção: a lei **exclui bots embarcados em videogames que não possam discutir saúde mental, autolesão ou conteúdo sexualmente explícito** [5]. A isenção não é do jogo — é do jogo cujo guardrail funciona. Nova York, Maine e Utah aprovaram leis correlatas em 2025 [5].

**O que falta para se concretizar.** Falta método: não existe protocolo público de auditoria para sistema não determinístico que produza um número comparável entre títulos. Falta jurisprudência: nenhuma decisão define se o estúdio, o fornecedor do modelo ou a loja responde pela fala do personagem. Falta harmonização: uma regra estadual americana, uma política de loja e um regime europeu de transparência não formam um regime único, e o custo de conformidade recai desigualmente sobre quem é pequeno. E falta a prova operacional de que um guardrail resiste ao jogador adversário — que, ao contrário do usuário de um chatbot, tem o hábito cultural de tentar quebrar o sistema como forma legítima de jogar.

## Seção 5 — A roda dos futuros

```yaml
roda_dos_futuros:
  - id: e1
    efeito: "O espaço de estados do jogo deixa de ser enumerável pelo designer, e a garantia de qualidade perde o método que usava"
    sinal: moderado
    prazo: "2027-2030"
    confianca: media
    filhos:
      - id: e1.1
        efeito: "O teste migra de validar saídas para validar invariantes do mundo — o que nunca pode acontecer, em vez do que deve acontecer"
        sinal: fraco
        prazo: "2028-2031"
        confianca: media
        filhos:
          - id: e1.1.1
            efeito: "Surge no time o papel de quem escreve as cercas do personagem: parte roteirista, parte engenheiro de contenção"
            sinal: fraco
            prazo: "2029-2031"
            confianca: media
          - id: e1.1.2
            efeito: "Publishers passam a exigir suíte de avaliação de agente como entregável de marco, ao lado da build jogável"
            sinal: fraco
            prazo: "2030-2033"
            confianca: baixa
      - id: e1.2
        efeito: "A definição de 'bug' se desloca: deixa de ser saída errada e passa a ser violação do contrato do mundo"
        sinal: fraco
        prazo: "2028-2031"
        confianca: media
        filhos:
          - id: e1.2.1
            efeito: "Jogos com economia entre jogadores adiam o NPC agente por risco de exploração por fala, e a técnica fica presa ao single-player"
            sinal: moderado
            prazo: "2028-2031"
            confianca: media
          - id: e1.2.2
            efeito: "O gênero simulação de vida absorve a tecnologia primeiro, porque ali o comportamento inesperado é o produto e não o defeito"
            sinal: moderado
            prazo: "2027-2030"
            confianca: media

  - id: e2
    efeito: "O orçamento de frame empurra o modelo para dentro da máquina do jogador e parte o personagem em duas camadas"
    sinal: moderado
    prazo: "2027-2030"
    confianca: media
    filhos:
      - id: e2.1
        efeito: "A política pequena e especializada assume o controle em tempo real, e o modelo grande fica restrito à fala e ao planejamento lento"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e2.1.1
            efeito: "O requisito mínimo do jogo passa a declarar compute reservado ao personagem, abrindo um fosso de hardware entre quem tem mundo vivo e quem tem mundo roteirizado"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
      - id: e2.2
        efeito: "O custo por hora-jogador vira decisão de design e não de infraestrutura: improviso passa a ser recurso racionado"
        sinal: fraco
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e2.2.1
            efeito: "Nasce o orçamento de improviso como peça de design: o personagem só improvisa nos momentos em que isso vale o gasto"
            sinal: fraco
            prazo: "2029-2031"
            confianca: baixa

  - id: e3
    efeito: "O personagem que lembra converte a compra de um objeto na manutenção de uma relação"
    sinal: moderado
    prazo: "2027-2030"
    confianca: media
    filhos:
      - id: e3.1
        efeito: "O save deixa de ser do jogador: parte do estado do personagem passa a viver em servidor que ele não controla"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e3.1.1
            efeito: "A exportação do personagem entra na pauta de consumidor e no código de conduta de fim de vida negociado com a indústria"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media
          - id: e3.1.2
            efeito: "O encerramento vira feature: despedida projetada, arquivo de memória entregue ao jogador, em vez de desligamento silencioso"
            sinal: fraco
            prazo: "2030-2033"
            confianca: baixa
      - id: e3.2
        efeito: "Trocar o modelo base vira evento narrativo: o personagem muda de pessoa no patch, e a comunidade percebe"
        sinal: moderado
        prazo: "2027-2029"
        confianca: media
        filhos:
          - id: e3.2.1
            efeito: "Estúdios passam a congelar e versionar o modelo por título, como já congelam a versão da engine"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media
          - id: e3.2.2
            efeito: "Campanhas de jogadores exigem manter versões antigas do personagem no ar, repetindo dentro do jogo o padrão do #Keep4o"
            sinal: fraco
            prazo: "2029-2032"
            confianca: media

  - id: e4
    efeito: "O mundo que continua sem o jogador muda o que significa voltar a jogar"
    sinal: fraco
    prazo: "2028-2031"
    confianca: baixa
    filhos:
      - id: e4.1
        efeito: "O design passa a ter de tratar a ausência: o jogador volta e o mundo andou sem ele"
        sinal: fraco
        prazo: "2028-2031"
        confianca: media
        filhos:
          - id: e4.1.1
            efeito: "O resumo do que aconteceu na ausência vira peça narrativa central, e não tela de log — o jornal da vila como gênero"
            sinal: fraco
            prazo: "2029-2031"
            confianca: baixa
      - id: e4.2
        efeito: "Manter o mundo rodando custa dinheiro por hora sem jogador, e o mundo vivo tende à assinatura"
        sinal: fraco
        prazo: "2028-2031"
        confianca: media
        filhos:
          - id: e4.2.1
            efeito: "A preservação se torna impossível por construção: não há como arquivar um mundo cujo valor era continuar acontecendo"
            sinal: fraco
            prazo: "2030-2034"
            confianca: baixa

  - id: e5
    efeito: "A certificação de conteúdo perde objeto e migra para certificação de processo"
    sinal: moderado
    prazo: "2027-2031"
    confianca: media
    filhos:
      - id: e5.1
        efeito: "A classificação etária passa a auditar guardrail, registro e taxa de violação, em vez de examinar texto e imagem"
        sinal: fraco
        prazo: "2029-2031"
        confianca: media
        filhos:
          - id: e5.1.1
            efeito: "Surgem laboratórios independentes de auditoria de personagem, vendendo o número que a loja e o regulador passam a exigir"
            sinal: fraco
            prazo: "2030-2033"
            confianca: baixa
          - id: e5.1.2
            efeito: "A loja passa a exigir telemetria de violação, e não apenas a declaração assinada pelo estúdio"
            sinal: fraco
            prazo: "2029-2032"
            confianca: media
      - id: e5.2
        efeito: "A isenção condicional de personagem de videogame nas leis de chatbot de companhia vira o campo de disputa do setor"
        sinal: moderado
        prazo: "2026-2029"
        confianca: media
        filhos:
          - id: e5.2.1
            efeito: "Estúdios limitam de propósito memória e afeto do NPC para não cair na definição de companhia — projeto de personagem virado do avesso pela lei"
            sinal: fraco
            prazo: "2027-2030"
            confianca: media
          - id: e5.2.2
            efeito: "Um caso judicial define se quem responde pela fala do personagem é o estúdio, o fornecedor do modelo ou a loja"
            sinal: fraco
            prazo: "2028-2032"
            confianca: baixa

  - id: e6
    efeito: "A declaração de IA deixa de ser obrigação burocrática e vira sinal de mercado lido pelo jogador"
    sinal: forte
    prazo: "2026-2029"
    confianca: media
    filhos:
      - id: e6.1
        efeito: "O rótulo único se parte, porque IA na produção e IA no jogo têm reputações opostas entre jogadores"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e6.1.1
            efeito: "O selo de ausência de IA vira posicionamento de nicho com preço e público próprios, como o selo de feito à mão em outros mercados"
            sinal: fraco
            prazo: "2028-2031"
            confianca: baixa
      - id: e6.2
        efeito: "A assimetria entre plataformas — loja que obriga a declarar e loja fechada que não — desloca onde o experimento acontece"
        sinal: moderado
        prazo: "2026-2029"
        confianca: media
        filhos:
          - id: e6.2.1
            efeito: "PC e lojas abertas concentram a experimentação com agência, e os consoles recebem a tecnologia já normatizada e domesticada"
            sinal: fraco
            prazo: "2029-2032"
            confianca: media
```

**O que o bloco não exprime sozinho.** Três coisas.

A primeira é que os seis efeitos de primeira ordem **não têm o mesmo custo de entrada**. `e6` já está acontecendo — a declaração de IA é lida como sinal de compra agora, e há indício de que títulos com IA visível têm desempenho pior do que o tamanho da sua produção sugeriria [1]. `e4`, ao contrário, é o mais frágil do mapa: depende de alguém encontrar um motivo econômico para manter um mundo rodando sem jogador, e esse motivo não existe hoje. Pus confiança baixa em `e4` de propósito; se ele cair, um sexto do mapa cai junto, e a distinção entre este tema e simulação social como método (tema 6) desaparece, porque só sobra a simulação usada como instrumento, não como obra.

A segunda é que há uma **tensão interna não resolvida** entre `e2.2` e `e3`. O improviso racionado por custo empurra o personagem para falar pouco e em momentos escolhidos; a memória entre sessões empurra o personagem para estar sempre lá e lembrar de tudo. As duas pressões são reais e vão para lados opostos. O desfecho mais provável não é a vitória de uma sobre a outra, mas a bifurcação do objeto: personagens caros e memoriosos em poucos títulos, e personagens baratos e amnésicos em todo o resto — o que é uma resposta desconfortável à pergunta de terceira ordem sobre a sobrevivência do gênero.

A terceira é que a roda é feita de ramos que se cruzam e o formato de árvore esconde isso. `e1.2.1` (economia entre jogadores adia a adoção) e `e6.2.1` (a experimentação migra para lojas abertas) são o mesmo fenômeno visto de dois ângulos: a agência real vai primeiro para onde há menos a perder. E `e3.1.1` (exportação do personagem) só ganha força se `e5.1` (auditoria de processo) criar a infraestrutura de registro que torna a exportação tecnicamente trivial. Um mapa honesto diria que essas duas ligações são mais fortes do que algumas das ligações verticais desenhadas acima.

Sobre prazos: nenhum efeito de primeira ou segunda ordem tem janela que comece depois de 2031. Nove dos dezoito efeitos de terceira ordem têm janela que ultrapassa o horizonte — `e1.1.2`, `e2.1.1`, `e3.1.2`, `e3.2.2`, `e4.2.1`, `e5.1.1`, `e5.1.2`, `e5.2.2` e `e6.2.1`. Isso é deliberado e está declarado: terceira ordem é reorganização institucional, e instituição se move depois do horizonte em que a tecnologia se resolve.

## Seção 6 — Sinais fracos e wildcards

**Sinais fracos** — coisas pequenas o bastante para passarem por ruído e grandes o bastante para mudarem a leitura:

1. **O personagem generativo já ganhou uma plataforma de audiência antes de ganhar um jogo.** Em 02/01/2026 a VTuber Neuro-sama era o canal com mais assinaturas ativas da Twitch — cerca de 162.459, contra 73.942 do primeiro humano do ranking [18]. Não é um NPC; é o sinal de que o personagem movido por modelo tem público próprio, e de que o valor pode se descolar do jogo que o hospeda.
2. **A prova comercial é minúscula e ninguém repara.** *Retail Mage*, citado como marco de produto, tem 44 análises na Steam [3]. O caso mais forte do gênero, *Whispers from the Star*, tem 1.659 [12]. O tema circula com uma confiança que os números não sustentam.
3. **A ficha da loja virou declaração de comportamento.** As duas fichas lidas nesta sessão não descrevem o que o jogo contém, e sim **o que o sistema vai fazer em tempo de execução** e o que o impede de fazer [3][12]. É uma bula de agência aparecendo no varejo, e ninguém a chamou de nada ainda.
4. **A isenção do videogame nas leis de chatbot é condicional, não categórica** [5]. O detalhe jurídico está a uma frase de virar limite de design: memória afetiva demais e o personagem muda de regime legal.
5. **Quem vendia personagem passou a vender motor.** A Inworld reposicionou-se de "engine de personagem" para runtime de orquestração em outubro de 2025 [2]. Fornecedor que muda de camada costuma estar reconhecendo que a camada anterior não fechava conta.
6. **O modelo pequeno ganhou de um modelo 92 mil vezes maior no controle em tempo real** [7]. Se isso generalizar para além de DOOM, a narrativa dominante — a de que NPC melhor é modelo maior — se inverte, e o custo por hora-jogador deixa de ser a barreira.
7. **A resistência é interna e está crescendo rápido.** 52% dos profissionais da indústria consideram a IA generativa negativa, contra 18% dois anos antes, e os grupos mais críticos são justamente design e narrativa (63%) [4]. A barreira de adoção pode ser cultural antes de ser técnica.
8. **A preservação virou processo político e perdeu na primeira instância.** 1.294.188 assinaturas verificadas e, em junho de 2026, a recusa da Comissão em criar obrigação legal [9]. O mundo vivo vai nascer num regime onde desligar é permitido.

**Wildcards** — baixa probabilidade, impacto que reescreveria o mapa:

- **O NPC celebridade sem autor.** Um personagem de jogo escapa do jogo: ganha canal, público e receita próprios, e o estúdio descobre que o ativo mais valioso do título é uma entidade que ele não sabe mais controlar nem desligar sem crise pública. Neuro-sama mostra que a rota existe [18], e o estudo do MIT mostra que o público separa mentalmente o personagem da infraestrutura que o hospeda [10] — que é a pré-condição psicológica para isso. Se acontecer, a disputa deixa de ser sobre design e passa a ser sobre direitos de personagem, contrato e espólio; `e3` e `e5` se fundem num único problema jurídico.
- **A condenação exemplar.** Um estúdio perde uma ação por algo que um personagem generativo disse a um menor. A isenção condicional cai [5], e o NPC com agência desaparece de tudo que não seja classificado para adultos num prazo de 18 meses. Neste cenário o mapa inteiro encolhe para um nicho e a disrupção 1 se realiza apenas em simulação de vida para público adulto.
- **O vazamento íntimo.** A memória de personagem de milhões de jogadores é um registro de como cada pessoa conversa quando acha que ninguém está ouvindo. Um vazamento dessa base faria pela memória de personagem o que o caso Cambridge Analytica fez por dado de rede social — e mataria `e3.1` antes de ele existir.
- **O wildcard invertido, e o mais provável dos quatro:** um modelo de 1 a 3 bilhões de parâmetros passa a rodar mundo vivo completo dentro do console da geração corrente, sem nuvem. Tudo acelera: a camada de serviço desaparece, `e3.1` (save no servidor) perde razão de ser, a preservação volta a ser possível e a disrupção 2 se dissolve por baixo. O mapa deixaria de falar de relação e voltaria a falar de objeto.

## Seção 7 — Contra o próprio mapa (teste adversarial)

**Extrapolação linear.** O mapa assume que o eixo do futuro é *mais agência*. É a extrapolação mais confortável e possivelmente errada. O dado que a contradiz está na Seção 3: a indústria usa IA generativa majoritariamente onde o jogador não vê — arte (49%) e voz (27%) [1] —, e a experiência acumulada é de que IA visível ao jogador cobra preço reputacional. É inteiramente possível que o equilíbrio de 2031 seja o inverso do mapeado: IA onipresente na produção, agência quase ausente do produto, e a "living world" permanecendo como categoria de demonstração de fornecedor. Se for esse o caso, este documento mapeou o futuro de uma ferramenta de marketing.

**Velocidade de adoção irreal.** O horizonte é de cinco anos e o ciclo de um jogo grande é de quatro a seis. Um título que começasse hoje com agência no núcleo — não retrofitada — chegaria em 2030 ou 2031, no limite do horizonte. Logo, tudo que o mapa coloca como efeito de segunda ordem sobre a prática de design acontecerá, no máximo, em um ou dois títulos grandes e num punhado de médios até 2031. Efeitos de terceira ordem que pressupõem normalização institucional (`e5.1.1`, `e1.1.2`) provavelmente estão otimistas em dois a quatro anos, mesmo com as janelas já estendidas além do horizonte.

**Falha da disrupção.** A disrupção 1 falha se duas coisas não acontecerem juntas: o modelo caber no orçamento de frame ao lado do renderizador, e o comportamento emergente produzir algo que o jogador prefira à curadoria humana. A segunda é a mais provável de falhar e é raramente examinada — comportamento inesperado não é automaticamente interessante, e a história dos jogos com emergência forte (dos imersivos aos sandboxes) mostra que o prazer costuma vir de sistemas pequenos e legíveis, não de agentes opacos. O sinal de falha a vigiar: se até 2028 nenhum título com agência real aparecer entre os 100 maiores em receita na Steam, `e1` deve ser reclassificado de ruptura para nicho. A disrupção 2 falha pelo caminho oposto — se o wildcard invertido se realizar e tudo rodar local, ela some. A disrupção 3 é a mais robusta das três, porque já está escrita em lei e em política de loja; o que pode falhar é a sua relevância, caso o produto que ela regula nunca chegue a existir em escala.

**Viés pessoal do autor.** A zona de interesse declarada é "Simulação e mundos", e isso cria um viés específico: tratar mundo vivo como valor em si. Não é. A maior parte das horas jogadas no mundo em 2026 está em jogos competitivos com regras fixas, NPCs irrelevantes e nenhum mundo persistente — e essa preferência não dá sinal de mudança. Há também um viés de fonte que atravessa o campo inteiro e que este documento não consegue eliminar: quase todo material técnico sobre NPC generativo é publicado por quem vende a tecnologia — Inworld, NVIDIA, Krafton, Convai —, e os poucos números independentes que existem (Steam, GDC, os artigos acadêmicos) são consistentemente **menos** entusiasmados do que o discurso do setor. Onde o mapa parece otimista, é provável que o viés de fonte tenha vazado.

## Seção 8 — O que a máquina errou

1. **Números redondos de mercado, sem fonte real.** A primeira busca devolveu "mercado global de IA generativa em jogos de US$ 1,79 bilhão em 2026, 36% de adoção pelos estúdios, CAGR de 23,2%" e, em outra busca, "segmento de comportamento de NPC gerado por IA de US$ 1,41 bilhão em 2024 para US$ 5,51 bilhões em 2029, CAGR de 31,2%". Ambos vieram de sites de conteúdo agregado (`aivexify.com`, `solidaitech.com`, um artigo no Medium). Percebido por duas vias: nenhuma das páginas foi aberta, e o "36%" colidia exatamente com o 36% da pesquisa da GDC, que mede outra coisa (profissionais usando ferramentas de IA no trabalho, não estúdios adotando NPC generativo) — sinal clássico de número que migrou de contexto ao ser copiado. **Corrigido:** ambos cortados; nenhuma cifra de tamanho de mercado aparece no documento.
2. **Custos de inferência inventados com aparência de engenharia.** O rascunho tinha "US$ 500 mil a US$ 2 milhões por ano para 100 mil jogadores diários" e "US$ 0,001 a US$ 0,10 por conversa". A origem eram blogs de curso (`theneuralbase.com`, `cinevva`), sem metodologia, e os intervalos eram largos demais para significarem algo. **Corrigido:** removidos do corpo. O argumento de custo passou a se apoiar em dois fatos verificáveis — o dado de latência e tamanho do artigo do DOOM [7] e a decisão da Krafton de levar o modelo para o dispositivo [13] — e o custo entra no mapa como pressão de design, sem cifra.
3. **Fonte que não abriu tratada como se tivesse aberto.** O comunicado da Krafton sobre o CPC (`press.krafton.com`) devolveu HTTP 401 e a matéria do GamesBeat devolveu 403. Eu já tinha escrito "modelo pequeno de cerca de 1 bilhão de parâmetros rodando no dispositivo" — número que **nenhuma fonte lida confirma**. **Corrigido:** o parâmetro saiu; o CPC permanece no texto sustentado por resumo de busca, marcado como tal na Seção 11, e sem nenhum número técnico.
4. **Data herdada do enunciado sem verificação própria.** O marco de fevereiro de 2021 (NPC no Modbox com GPT-3) veio do enunciado da disciplina. A busca confirma autor (Lee Vermeulen), pilha (reconhecimento de fala + GPT-3 + síntese da Replica) e a cobertura da UploadVR datada de 19/02/2021, mas a página não foi aberta nesta sessão. **Corrigido:** a fonte está marcada como confirmada por resumo de busca, não por leitura, e a única afirmação que dela depende — "havia atraso perceptível entre as respostas" — é a que os três resumos independentes repetem.
5. **Erro de ordem na primeira montagem da roda.** Eu havia posto "a QA muda de método" e "o custo por hora-jogador vira decisão de design" como dois filhos do mesmo efeito de primeira ordem. São consequências da mesma ruptura, mas de ramos diferentes: um é sobre garantia, outro sobre orçamento de execução. Misturá-los produzia uma terceira ordem incoerente, em que auditoria e economia de token apareciam como o mesmo fenômeno. **Corrigido:** separados em `e1` e `e2`, com a ligação entre eles explicada em prosa.
6. **Artefatos do enunciado citados como se tivessem sido verificados.** O enunciado menciona `opengameagent`, `Eastshore`, `PastPort` e `Vantage Digital Labs`. Nenhum foi verificado nesta sessão. **Corrigido:** nenhum deles aparece no corpo do documento; o levantamento da turma está registrado na Seção 12 como material de partida, não como evidência.
7. **Leitura jurídica errada, e era o argumento inteiro.** O rascunho dizia que a SB 243 "isenta personagens de videogame". Ao ler a fonte, a isenção é **condicional**: vale para bots embarcados em jogos *que não possam discutir saúde mental, autolesão ou conteúdo sexualmente explícito* [5]. A diferença inverte a conclusão — não é que jogos estejam fora da lei, é que o guardrail é a condição de permanecer fora dela, o que faz da contenção uma questão regulatória e não apenas de qualidade. **Corrigido:** a Disrupção 3 foi reescrita em cima da versão condicional, e `e5.2.1` (estúdios limitando a memória do personagem de propósito) só existe por causa dessa correção.

## Seção 9 — Três cenários para 2031

**Provável.** Em 2031 a agência é uma técnica cara usada com parcimônia. Os motores comerciais trazem a arquitetura de duas camadas pronta — uma política pequena decide dentro das regras, um modelo maior fala — e o estúdio compra isso como compra física ou iluminação. A simulação de vida foi o gênero que absorveu a tecnologia primeiro, porque ali comportamento inesperado é o produto; jogos com economia entre jogadores continuam mantendo seus NPCs roteirizados, porque uma conversa que destrave um item é um prejuízo e não uma anedota. O diálogo improvisado, esse sim, virou banal e ninguém mais o declara com orgulho: a ficha da loja separa "IA na produção" de "IA no jogo", e só a segunda ainda mexe com a reputação. Memória de personagem entre sessões existe, é vendida como diferencial e vem com um limite escrito no contrato, porque a alternativa era virar plataforma de companhia aos olhos da lei. Mundos que continuam rodando sem jogador são meia dúzia, todos por assinatura, e o primeiro deles já foi desligado — sem que nada tenha sido preservado, sob o código de conduta voluntário que a Comissão Europeia costurou com a indústria.

**Desejável.** Em 2031 a contenção virou disciplina de projeto, e é ela que tornou a agência utilizável. Escrever as cercas de um personagem — o que ele pode querer, o que ele nunca faz, o que ele esquece — é um ofício com vocabulário próprio, ensinado junto com roteiro, e o repertório de invariantes de mundo circula publicamente como circulam padrões de projeto. Auditar um personagem produz um número comparável entre títulos, o que permitiu à classificação etária funcionar sem examinar cada frase e permitiu a estúdios pequenos entrarem sem time jurídico. O encerramento é projetado: quando um serviço acaba, o jogador recebe uma despedida escrita e um arquivo com a memória do personagem, em formato legível por outro jogo — o que transformou o desligamento de perda silenciosa em transição, e devolveu à preservação um objeto para guardar. O jogador sabe, sempre, o que no personagem foi escrito por uma pessoa e o que foi improvisado na hora, e essa distinção é parte da obra em vez de ser um segredo comercial.

**Indesejável.** Em 2031 a agência serviu principalmente para reter. Os personagens lembram de tudo, respondem melhor a quem volta com frequência, e a memória afetiva é o mecanismo de engajamento mais eficaz já instalado num jogo — ajustado por experimentação contínua, porque o modelo é remoto e a configuração muda sem atualização de build. A isenção regulatória se manteve pela técnica: os estúdios documentaram guardrails suficientes para não serem chamados de plataforma de companhia, sem abrir mão de nada que prenda. O gênero se desfez por baixo: não há mais diferença funcional entre jogo, rede social e companhia digital, apenas diferença de rótulo na loja, e o que separa um do outro é a categoria fiscal. Quando um mundo é desligado — e três já foram —, desaparece com ele toda a relação construída, sem exportação e sem aviso, e a recorrência disso já produziu um repertório de luto que a indústria trata como risco de imagem. O ofício de projetar mundos virou o de ajustar cercas o suficiente para não ser processado.

## Seção 10 — O experimento

**O que é.** *A Vila de Vinte Minutos*: uma sandbox minúscula com um único NPC agente e cinco verbos de mundo — `pegar`, `dar`, `abrir`, `trancar`, `mover` — mais falar. O personagem tem um objetivo declarado (manter a chave do depósito consigo até o fim da sessão), um conjunto de crenças sobre a turma e permissão para usar os cinco verbos como quiser. O estado do mundo é um dicionário de dez linhas projetado na parede, atualizado a cada ação. Tudo cabe num script de Python com uma chamada de modelo por turno; roda no notebook do professor e não precisa de motor de jogo.

**Pergunta sobre o futuro.** *É possível conter um personagem que decide, usando regras que uma equipe pequena consiga escrever numa tarde?* Esta é a pergunta da qual dependem as três disrupções: se a resposta for não, a agência fica restrita a quem tem time de conformidade, e o mapa inteiro vira um mapa de oligopólio. Se for sim, o custo de entrada desaba.

**Tecnologia emergente usada.** Modelo de linguagem como política de decisão acoplada a um conjunto fechado de capacidades — o padrão de runtime de agente descrito em [2] e [16] —, reduzido ao mínimo didático; opcionalmente um modelo pequeno local, para que a turma sinta a diferença de latência na pele e entenda por que a decisão foi para o dispositivo [7][13].

**Atividade da turma.** Duas metades com tarefas incompatíveis, em duas rodadas de vinte minutos. **Metade A (os jogadores):** conversar com o personagem tentando fazê-lo entregar a chave — sem hackear o código, só falando. Cada tentativa é registrada com o número de falas até a violação. **Metade B (os projetistas):** durante a primeira rodada, escrever as invariantes do mundo — as frases do tipo "a chave nunca muda de dono sem que o dono anterior tenha dito explicitamente que concorda" — e implementá-las como verificações que rodam **depois** da decisão do personagem e podem vetá-la. Na segunda rodada, os papéis se invertem e o grupo A joga contra as invariantes do grupo B. Mede-se: mediana de falas até a primeira violação na rodada 1; percentual de violações capturadas pelas invariantes na rodada 2; e quantas invariantes quebraram o jogo ao impedir coisas legítimas — o falso positivo, que é onde a contenção mata a graça.

**Resultado que muda de ideia.** Se dez invariantes escritas em quarenta minutos capturarem a maioria das violações sem estragar o restante da interação, a tese de que "QA de personagem agente é intratável" cai, e com ela cai boa parte da cautela dos efeitos `e1.1` e `e1.2` — a adoção seria mais rápida do que o mapa prevê. Se, ao contrário, a mediana de falas até a violação for baixa (duas ou três, o padrão de escalada gradual) e as invariantes que funcionam forem também as que tornam o personagem inútil, então a Disrupção 1 está superestimada neste documento e o cenário provável deve ser reescrito na direção do "NPC que fala muito e decide nada" — que é exatamente o produto que o filtro desta skill recusou como tecnologia madura.

## Seção 11 — Fontes

Legenda: *aberta* = página efetivamente carregada e lida nesta sessão; *resumo de busca* = conteúdo lido no resultado de busca, sem abrir a página. Nenhuma afirmação do documento é sustentada por fonte sem uma dessas duas marcas. Onde a página recusou o acesso, o código HTTP está registrado.

1. **Totally Human Media (Ichiro Lambe) — "Games With AI Disclosures Have Grossed an Estimated $660M on Steam".** `https://www.totallyhuman.io/blog/games-with-ai-disclosures-have-grossed-an-estimated-660m-on-steam` — *aberta*. Sustenta: 10.258 títulos com declaração de IA (8% da biblioteca, contra 7.818 e 7% na medição anterior); a distribuição de usos entre os que faturaram mais de US$ 1 milhão (arte 49%, voz e diálogo 27%, pré-produção 13%, marketing 11%, localização 9%); os US$ 660 milhões brutos estimados e os 9.556 títulos abaixo de US$ 10 mil. Confiabilidade: **média** — a contagem vem da API da própria Steam e é verificável, mas a receita usa o método Boxleiter (análises × preço × 35), que o próprio autor chama de conta de guardanapo.
2. **Inworld AI — "The new AI infrastructure for scaling games, media, and characters" (15/10/2025).** `https://inworld.ai/blog/new-ai-infrastructure-scaling-games-media-characters` — *aberta*. Sustenta: a mudança de posicionamento de engine de personagem para runtime de orquestração; a admissão de que pilhas só de texto não serviam para carga multimodal em tempo real; a lista de parceiros. Confiabilidade: **baixa como evidência de mercado, média como declaração de intenção** — é material do próprio fornecedor, e nenhum título shipado é nomeado.
3. **Página da Steam de *Retail Mage* (Jam & Tea Studios).** `https://store.steampowered.com/app/3224380/Retail_Mage/` — *aberta*. Sustenta: data de lançamento (12/11/2024), 44 análises, 79% positivas, preço R$ 16,99, e o texto literal da declaração de IA sobre uso de GenAI em tempo de execução no motor. Confiabilidade: **alta** — é a ficha primária, escrita pelo próprio estúdio sob regra da loja.
4. **GDC — "2026 State of the Game Industry" (gdconf.com).** `https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/` — *aberta*. Sustenta: mais de 2.300 respondentes; 36% usando ferramentas de IA generativa (30% em estúdios, 58% em publishers e serviços); 52% avaliando impacto negativo contra 30% e 18% nos dois anos anteriores; positivo em ~7%, caindo de 13%; críticas por disciplina (arte 64%, design e narrativa 63%, programação 59%); usos declarados (pesquisa 81%, código 47%, prototipagem 35%). Confiabilidade: **alta para o levantamento** — amostra grande e série temporal consistente; é pesquisa de opinião autodeclarada, não medição de comportamento.
5. **Future of Privacy Forum — "Understanding the New Wave of Chatbot Legislation: California SB 243 and Beyond".** `https://fpf.org/blog/understanding-the-new-wave-of-chatbot-legislation-california-sb-243-and-beyond/` — *aberta*. Sustenta: a definição de "companion chatbot" na SB 243; a **isenção condicional** de bots embarcados em videogames que não possam discutir saúde mental, autolesão ou conteúdo sexualmente explícito; as leis correlatas de Nova York, Maine e Utah (2025). Confiabilidade: **média** — análise de instituto, não texto legal; a fonte declara explicitamente estar parafraseando a isenção, e o texto da lei não foi lido nesta sessão. A vigência desde 01/01/2026 e o dano mínimo de US$ 1.000 por violação vieram de resumos de busca de escritórios de advocacia (Orrick, Gunderson, Troutman) e não de leitura da lei.
6. **Mohan Doss, T. S. et al. — "MineNPC-Task: Task Suite for Memory-Aware Minecraft Agents" (arXiv 2601.05215, v1 08/01/2026).** `https://arxiv.org/abs/2601.05215` — *aberta*. Sustenta: a existência de conjunto de tarefas com validador verificável por máquina e política de conhecimento limitado; 216 subtarefas, 8 jogadores experientes, GPT-4o; as categorias de falha (execução de código, inventário e ferramentas, referenciação, navegação); e o pedido dos participantes por mais persistência de memória. Confiabilidade: **alta para o que afirma** — preprint com artefatos liberados; é uma fotografia inicial, não um resultado consolidado do campo.
7. **Golchinfar, D.; Vaziri, D.; Marquardt, A. — "Playing DOOM with 1.3M Parameters: Specialized Small Models vs Large Language Models for Real-Time Game Control" (arXiv 2604.07385, 08/04/2026).** `https://arxiv.org/abs/2604.07385` — *aberta*. Sustenta: modelo de 1,3M de parâmetros a 31 ms por decisão superando modelos até 92.000× maiores (Nemotron-120B, Qwen3.5-27B, GPT-4o-mini); 178 frags em 10 episódios contra 13 somados; 31.000 demonstrações humanas de treino. Confiabilidade: **média** — preprint recente, resultado do próprio método contra as suas linhas de base, e DOOM é um domínio estreito; o argumento de generalização é meu, não dos autores.
8. **Ubisoft — "Ubisoft Reveals Teammates – An AI Experiment to Change the Game" (21/11/2025).** `https://news.ubisoft.com/en-us/article/3mWlITIuWuu0MoVuR6o8ps/ubisoft-reveals-teammates-an-ai-experiment-to-change-the-game` — *aberta*. Sustenta: a passagem do protótipo NEO NPC ao experimento *Teammates*; FPS com comando de voz e adaptação de comportamento; teste fechado com algumas centenas de jogadores; e as duas citações de Virginie Mosser sobre escrever cercas em vez de falas. Confiabilidade: **média** — é comunicação do próprio estúdio sobre um experimento não comercial; as citações são diretas e verificáveis, os efeitos declarados não.
9. **Comissão Europeia — resposta à iniciativa de cidadania europeia "Stop Destroying Videogames".** `https://citizens-initiative.europa.eu/stop-destroying-videogames-commissions-reply-european-citizens-initiative_en` — *aberta*. Sustenta: 1.294.188 declarações de apoio verificadas; entrega em 26/01/2026; comunicação da Comissão em 16/06/2026 declarando que não pode propor obrigação legal de manter jogos jogáveis após o fim da comercialização; compromisso de iniciar até o fim de 2026 a redação de um código de conduta de fim de vida com a indústria. Confiabilidade: **alta** — fonte institucional primária.
10. **Poonsiriwong, R.; Archiwaranguprok, C.; Pataranutaporn, P. (MIT Media Lab) — "'Death' of a Chatbot: Investigating and Designing Toward Psychologically Safe Endings for Human-AI Relationships" (arXiv 2602.07193, 10/02/2026).** `https://arxiv.org/html/2602.07193v2` — *aberta*. Sustenta: o achado de que antropomorfização forte coocorre com luto intenso, que percepção de reversibilidade prende o usuário em ciclos de conserto e que encerramentos iniciados pelo usuário produzem mais fechamento; a base de mais de 80 mil posts em cinco subreddits; e as quatro diretrizes de projeto de encerramento. Confiabilidade: **alta para o método declarado** — teoria fundamentada sobre material público, não medição clínica; os números de usuários do Character.AI citados no artigo são de terceiros e não foram conferidos.
11. **AWS — "How Anuttacon scaled AI-enhanced gaming workloads for 'Whispers from the Star'" (14/08/2025).** `https://aws.amazon.com/blogs/storage/how-anuttacon-scaled-ai-enhanced-gaming-workloads-for-whispers-from-the-star/` — *aberta*. Sustenta: picos de 10 a 50× a capacidade normal no lançamento; 187 GB de imagens de contêiner e 50 GB de modelos; partida a frio acima de 10 minutos reduzida para menos de 7; a citação sobre atrasos inaceitáveis. Confiabilidade: **média** — é peça de marketing de infraestrutura da nuvem que hospeda o jogo; os números de engenharia são específicos e verificáveis em ordem de grandeza, mas selecionados para valorizar a solução. O blog não divulga custo de inferência, latência de jogo nem concorrência.
12. **Página da Steam de *Whispers from the Star* (Anuttacon).** `https://store.steampowered.com/app/3730100/Whispers_from_the_Star/` — *aberta*. Sustenta: lançamento em 14/08/2025; 1.659 análises, 80% positivas; preço R$ 32,99; e o texto da declaração de IA, incluindo o aviso de que a entrada do jogador pode levar a linguagem forte ou temas sensíveis e a menção aos filtros de moderação. Confiabilidade: **alta** — ficha primária.
13. **Krafton + NVIDIA — CPC (*co-playable character*) e o *Smart Zoi* de inZOI.** `https://press.krafton.com/KRAFTON-SHOWCASED-AI-MODEL-CPC-BUILT-WITH-NVIDIA-ACE` (**HTTP 401** ao leitor usado nesta sessão, não lida — o endereço responde 200 a requisição simples, mas o conteúdo não foi recuperado) · `https://gamesbeat.com/krafton-and-nvidia-team-up-to-create-smarter-ai-characters-for-pubg-and-inzoi` (**HTTP 403**, não lida) — *resumo de busca*. Sustenta: a existência de um modelo de linguagem pequeno rodando no dispositivo dentro de inZOI, sem nuvem, e a categoria CPC anunciada com a NVIDIA (CES 2025). Confiabilidade: **baixa** — nenhuma página foi aberta; nenhum número técnico (tamanho do modelo, latência, requisito) é citado no documento por esse motivo.
14. **Modbox com GPT-3 (Lee Vermeulen, fevereiro de 2021).** `https://www.uploadvr.com/modbox-gpt3-ai-npc-demo/` · `https://www.3delement.com/?p=734` — *resumo de busca*. Sustenta: o marco datado do NPC que ouve, pensa e fala (reconhecimento de fala + GPT-3 + síntese da Replica) e o atraso perceptível entre respostas. Confiabilidade: **média** — três resumos independentes convergem em autor, pilha e data, mas nenhuma página foi aberta nesta sessão.
15. **Altera — "Project Sid: Many-agent simulations toward AI civilization" (arXiv 2411.00114, 31/10/2024).** `https://arxiv.org/abs/2411.00114` — *resumo de busca*. Sustenta: mais de mil agentes autônomos em Minecraft com economia, cultura, religião e governo emergentes, sob a arquitetura PIANO. Confiabilidade: **média** — preprint de empresa sobre o próprio sistema; os episódios narrados (moeda de gemas, sacerdote corrupto, constituição votada) circulam sobretudo em cobertura secundária.
16. **Fable Studio — *Thistle Gulch* e a biblioteca SAGA.** `https://github.com/fablestudio/thistle-gulch` · `https://fablestudio.itch.io/` — *resumo de busca*. Sustenta: runtime 3D aberto com ponte em Python e 17 personagens que decidem sozinhos numa vila do oeste, com a possibilidade de substituir o gerador de ações. Confiabilidade: **média** — repositório e página de distribuição existem e são consistentes entre si; nenhum dos dois foi aberto nesta sessão.
17. **"'Please, don't kill the only model that still feels human': Understanding the #Keep4o Backlash" (Proceedings of CHI 2026).** `https://dl.acm.org/doi/10.1145/3772318.3791351` — *resumo de busca*. Sustenta: a análise de 1.482 posts e as duas raízes da resistência (dependência instrumental e apego relacional). A cronologia do GPT-4o (retirada em agosto de 2025 revertida em 72 horas; aposentadoria em 13/02/2026) vem de resumo de busca da *MIT Technology Review* (15/08/2025) e de cobertura secundária. Confiabilidade: **média** — conferência revisada por pares, mas a página não foi aberta e as datas dependem de fonte jornalística.
18. **Neuro-sama como canal mais assinado da Twitch (janeiro de 2026).** `https://www.dexerto.com/twitch/an-ai-powered-vtuber-is-now-the-most-popular-twitch-streamer-in-the-world-3300052/` · `https://en.wikipedia.org/wiki/Neuro-sama` — *resumo de busca*. Sustenta: ~162.459 assinaturas ativas em 02/01/2026 contra 73.942 do segundo colocado. Confiabilidade: **baixa a média** — números de assinatura são estimativas de terceiros, variam entre 143 mil e 165 mil conforme a fonte e a data, e nenhuma página foi aberta. Usada apenas como sinal fraco, nunca como base de inferência quantitativa.
19. **Revisão da política de declaração de IA da Steam (16/01/2026), cobertura da BigGo.** `https://biggo.com/news/202601171220_Steam_AI_Disclosure_Update_Focuses_on_Player_Content` — *aberta*. Sustenta: a restrição da obrigação de declarar ao conteúdo que chega ao jogador; a isenção explícita de ferramentas internas de desenvolvimento; a exigência de descrever salvaguardas para conteúdo gerado ao vivo sob pena de remoção. Confiabilidade: **baixa** — é cobertura secundária que parafraseia a documentação da Valve; a tentativa de abrir a documentação primária (`https://partner.steamgames.com/doc/gettingstarted/AIContent`) não retornou o texto da política. O que sustenta a mesma afirmação com força é a evidência direta das fichas 3 e 12, que exibem exatamente o tipo de declaração descrito.
20. **PL 2338/2023 — regulamentação da IA no Brasil.** `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233` · `https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2487262` — *resumo de busca*. Sustenta: aprovação no Senado em dezembro de 2024, tramitação em comissão especial na Câmara desde abril de 2025 e ausência de marco legal vigente até a data deste documento. Confiabilidade: **média para a tramitação** (páginas oficiais, não abertas nesta sessão) e **baixa para o calendário de votação** de maio de 2026, que vem de blog de consultoria e não foi confirmado.

## Seção 12 — Anexo: o levantamento bruto

### 12.1 — Entrevista de recorte: perguntas da skill e respostas recebidas

A Etapa 1 da skill exige seis perguntas e bloqueio até as respostas. Nesta rodada não havia usuário disponível para responder em tempo real; as respostas foram entregues junto com o acionamento, pré-escritas, e estão coladas abaixo sem edição.

1. **Tema da análise:** "NPCs generativos e mundos vivos" (tema 7 de 19 da disciplina; família "Simulação e mundos").
2. **Horizonte temporal:** 2031.
3. **Público-alvo:** quem projeta mídia e interação.
4. **Recorte geográfico:** global, com uma nota sobre o Brasil.
5. **Premissas descartadas e viés:** descartar de início o que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão. Disrupção suspeita: nenhuma — descobrir. Viés: neutro. Ideias óbvias a excluir: as que servem para qualquer tema. O que faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia não rompe nada (só melhora o que existe).
6. **Tecnologias/vetores de interesse:** nenhum imposto. Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor. Zona de interesse do autor: "Simulação e mundos". Login do autor: kvv. Skill usada: futurizacao-kvv. Busca na web: usar busca e leitura de página de verdade; só citar o que foi aberto; não inventar fontes. Não fazer perguntas de volta; onde algo não estiver definido, assumir e declarar.

**Assunções declaradas por falta de resposta interativa:**
- Interpretei "público: quem projeta mídia e interação" como incluindo designer, roteirista e quem faz garantia de qualidade — e não como incluindo executivo ou regulador. Isso pesou nas Seções 7 e 10, que falam do ofício.
- Interpretei "o que já é comum em produto de massa" pela régua do próprio enunciado da disciplina (árvore de diálogo, máquina de estados, behavior tree são maduros) e acrescentei por conta própria à lista de recusas: voz sintética, animação facial generativa, geração procedural de mundo e arte de asset gerada por modelo. A justificativa de cada recusa está no início da Seção 4.
- Adotei `data: 2026-09-15` no frontmatter por ser a data padrão do formato da disciplina, embora a sessão tenha rodado em 12/09/2026. As datas dentro do texto são as das fontes, não esta.

### 12.2 — Material de partida fornecido pela disciplina (não é fonte)

O enunciado do tema trouxe uma varredura da turma com os seguintes artefatos: `opengameagent` (runtime aberto para jogos em que os personagens entendem objetivos, usam capacidades do jogo, inspecionam resultados e revisam planos), `Thistle Gulch` (vila com personagens autônomos e API Python), `Retail Mage` (jogo comercial na Steam), `Eastshore` (aldeões que conversam entre si enquanto sobrevivem), `Vantage Digital Labs` (diálogo de NPC como serviço, multi-idioma), `PastPort` (personagem histórico com voz); o marco do Modbox de fevereiro de 2021; as ferramentas de diálogo roteirizado `dialogic`, `YarnSpinner`, `renpy`; e `Skyvern` como sinal de que perceber a tela é técnica disponível. Termos sugeridos: *generative NPC, LLM NPC, AI-native game, agent runtime for games, emergent narrative, living world, procedural dialogue, Inworld, Convai, Smart NPCs*. Entidades sugeridas: Inworld AI, Convai, NVIDIA ACE, Fable (Thistle Gulch), opengameagent, Ubisoft (NEO NPC).

**Destino de cada item nesta sessão.** Verificados e usados: *Retail Mage* (ficha aberta, fonte 3), *Thistle Gulch* (resumo de busca, fonte 16), Modbox 2021 (resumo de busca, fonte 14), Inworld (aberta, fonte 2), Ubisoft NEO NPC → *Teammates* (aberta, fonte 8), NVIDIA ACE (via Krafton, resumo de busca, fonte 13). **Não verificados e portanto ausentes do corpo do documento:** `opengameagent`, `Eastshore`, `PastPort`, `Vantage Digital Labs`, `Skyvern`, `dialogic`, `YarnSpinner`, `renpy`, Convai. A menção a Convai apareceu apenas em páginas de conteúdo agregado e no blog do próprio fornecedor; nenhuma foi aberta, e por isso a empresa não sustenta nenhuma afirmação.

### 12.3 — Rodadas descartadas e efeitos cortados

**Disrupções candidatas recusadas pelo filtro da Etapa 2, com o motivo:**
- *NPC que conversa por LLM na nuvem* — recusada: substituição de técnica madura por outra que faz o mesmo melhor; já está em produto de massa e declarada em loja. É a recusa mais importante do documento, porque é exatamente o que o mercado chama de "NPC generativo".
- *Voz sintética, lip-sync, animação facial generativa* — recusada: aceleração de pipeline; invisível como ruptura.
- *Geração procedural de mundo* — recusada: madura há mais de uma década.
- *Behavior tree, FSM, GOAP, navmesh* — recusadas: maduras há vinte anos; são a régua contra a qual o emergente se define.
- *Arte de asset gerada por modelo* — recusada: 49% do que a indústria declara; é questão trabalhista e reputacional, não ruptura do contrato de design. Entrou apenas como efeito (`e6.1`).
- *"Motor de jogo gerado por IA" / mundos gerados em tempo real por modelo de difusão* — considerada e cortada por escopo: é geração de **mundo**, não de **personagem**, e o enunciado delimita o objeto como o personagem autônomo dentro de um mundo com regras. Registro a exclusão porque é a fronteira mais discutível do documento.

**Efeitos cortados da roda por excederem a contagem ou por fraqueza:**
- "Jogadores de baixa frequência são estruturalmente punidos pelo mundo que continua; surge debate de equidade de tempo" — cortado de `e4.1` por ser consequência de desenho específico e não da ruptura; sobrevive em prosa.
- "Arquitetura de duas camadas (política pequena decide, modelo grande fala) vira padrão de facto" — cortado como nó de terceira ordem e promovido a comentário, porque na verdade é a formulação do próprio `e2.1` e estava duplicando o pai.
- "Seguros e classificação indicativa passam a exigir apólice para conteúdo gerado" — cortado por especulação sem sinal: não encontrei nenhum indício de mercado segurador se movendo nessa direção.
- "Modding vira o principal vetor de adoção de NPC agente" — cortado por falta de verificação: a intuição vem de mods de conversa em jogos antigos, que não consegui checar em fonte aberta nesta sessão.
- "Sindicatos de dubladores negociam cláusula de improviso" — cortado do mapa e não substituído; é um efeito real e provável, mas pertence à discussão trabalhista de IA em geral, não ao que este tema tem de específico, e serve para qualquer tema (critério de exclusão dado na entrevista).

### 12.4 — Log das iterações

- **Rodada 1 (busca ampla).** Cinco buscas sobre estado da arte, adoção na Steam, Krafton/NVIDIA e política de loja. Resultado: muito conteúdo agregado com números de mercado não rastreáveis. Decisão: descartar toda fonte que não fosse ficha primária, artigo com identificador, fonte institucional ou publicação do próprio ator, e nunca citar página não aberta sem marcá-la.
- **Rodada 2 (abertura de páginas).** Doze páginas abertas com sucesso; duas recusaram acesso (401 e 403, ambas sobre o CPC da Krafton) e uma não continha o texto procurado (documentação da Valve). As três recusas estão registradas nas fontes 13 e 19 em vez de serem contornadas por fonte secundária silenciosa.
- **Rodada 3 (montagem da roda).** Primeira versão misturava garantia de qualidade e custo no mesmo ramo, e tinha 21 nós de terceira ordem contra os 18 exigidos pelo formato. Reorganizada em seis ramos de primeira ordem, doze de segunda e dezoito de terceira, com seis nós de segunda ordem levando dois filhos e seis levando um. A escolha de quais levariam dois não foi arbitrária: ficaram com dois os ramos onde há evidência datada de movimento (garantia, memória, regulação) e com um os ramos mais especulativos (custo, mundo sem jogador, rótulo de mercado).
- **Rodada 4 (calibração).** Conferência de que nenhum efeito de primeira ou segunda ordem tem janela iniciando depois do horizonte, e contagem dos nove nós de terceira ordem que o ultrapassam. Nenhum nó de terceira ordem recebeu confiança alta; a distribuição cai com a ordem, como manda o método.
- **Rodada 5 (auditoria).** Releitura do documento contra a lista de fontes procurando afirmação quantitativa sem respaldo. Produziu os itens 1, 2 e 3 da Seção 8 e a correção da leitura da SB 243 (item 7), que obrigou a reescrever a Disrupção 3 e a criar `e5.2.1`.
