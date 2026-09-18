---
tema: "Mídia sintética controlável: vídeo e imagem"
slug: midia-sintetica-controlavel-video-e-imagem
autor_login: yrv
zona_de_interesse: "Percepção e mídia sintética"
data: 2026-09-17
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 11
tecnologias_citadas: [Runway Aleph, Gen-4 Aleph, Runway Aleph 2.0, Runway Edit Studio, Runway Gen-4.5, ComfyUI, FLUX.2, "FLUX.2 [pro]", "FLUX.2 [flex]", "FLUX.2 [dev]", "FLUX.2 [klein]", FLUX.1, LTX-2.5, LTX-2.3, LTX-2 Trainer, ControlNet, IC-LoRA, Union Control, Wan 2.2, HunyuanVideo, Diffusers, Hugging Face, Gemma 4, Mistral-3, VAR, Visual Autoregressive Modeling, M-VAR, FVAR, DiT, Nano Banana, Nano Banana Pro, Nano Banana 2, Gemini 3 Pro, Google Flow, Project Genie, Genie 3, Matrix-Game 3.0, Odyssey, Veo 3.1, Sora 2, Kling 2.6, Kling 3.0, "Kling 3.0 Omni", Seedance 2.0, Higgsfield Soul Cinema, Higgsfield Soul Cast, Pika, Pikaffects, Luma Dream Machine, Midjourney, Stable Diffusion 3.5, Automatic1111, InvokeAI, Magnific, Graphite, Pixel Composer, Pixelmash, EbSynth, EbSynth 2, Cavalry, Rive, Rive State Machine, Rive Data Binding, Lottie, Figma Motion, Weavy, Adobe Firefly, Firefly Video Model, Firefly Video Editor, Adobe Premiere 26.2, Adobe Premiere 26.5, Generative Extend, Object Mask, After Effects 26.2, Object Matte, Color Mode, Frame.io Drive, Remotion, satori, C2PA, Content Credentials, "C2PA 2.3", CMAF, Sony PXW-Z300, Leica SL3-S, Nikon Z6 III, Google Pixel 10, Samsung Galaxy S25, Cloudflare, "AI Act art. 50", "Código de Prática de Transparência de Conteúdo Gerado por IA", "PL 2338/2023", "Guia CONAR 2026", "FRE 901", "proposta de FRE 707", "proposta de FRE 901(c)", Nebius, CoreWeave]
fontes: 24
confianca: media
experimento: "A oficina da razão 64:1 — a turma reproduz um mesmo plano de dez segundos por quatro caminhos de controle (prompt puro, quadro-chave âncora, grafo com condicionamento estrutural, e propagação não-generativa por quadro pintado), registrando para cada um quantas tentativas foram precisas até o resultado ser aceito por um terceiro que não participou da geração; mede-se não a qualidade, e sim o custo de dirigir — e onde cada caminho deixa de responder ao que se pede"
skill_usada: futurizacao-yrv
publico_ok: false
---

## 1. Resumo

Gerar vídeo por prompt deixou de ser o problema. O problema virou **dirigir**. A medida disso não
é uma opinião: para montar os primeiros 25 minutos de `Hell Grind` — longa de 95 minutos, quinze
pessoas, catorze dias, **US$ 500 mil, dos quais cerca de US$ 400 mil em compute** —, a equipe rodou
**16.181 gerações para ficar com 253 planos**, uma razão de aproximadamente **64 para 1**, com
prompts de cerca de **3.000 palavras cada**. Geração abundante e barata não produz uma peça; produz
um monte de material que ninguém pediu. O que separa mídia sintética de mídia sintética
*profissional* é a existência de um lugar onde se diz **onde**, **quando** e **sob que regra**.

Três coisas datadas mostram que esse lugar está sendo construído, e que ele **não é o prompt**. Em
**21 de maio de 2026** a Runway lançou o **Aleph 2.0**: edição in-context de material filmado, com
propagação do mesmo ajuste por **até 10 cortes** e **até 5 imagens-âncora** posicionadas com
precisão de **0,01 segundo** — o antecessor, Gen-4 Aleph, de julho de 2025, foi depreciado em **30
de julho de 2026**. Em **24 de abril de 2026** a **ComfyUI**, que é um grafo de nós e não uma caixa
de texto, levantou **US$ 30 milhões a uma avaliação de US$ 500 milhões**, com **4 milhões de
usuários** e com "ComfyUI artist or engineer" já aparecendo como **título de vaga**; seu CEO,
Yoland Yan, resume por que: *"se você pensa na sua solução típica baseada em prompt, tipo Midjourney
ou ChatGPT, você pede uma coisa, e ela chega a [apenas] 60% – 80% do caminho"*. E em **fevereiro de
2026** a Canva comprou a **Cavalry** — motion design procedural por nós, em que se definem regras em
vez de animar elementos — e liberou a versão Pro **de graça** para pessoas físicas.

Este mapa **recusa** três coisas que costumam entrar na mesma prateleira, e diz por quê. Recusa a
**geração de imagem por prompt**: o Nano Banana 2 virou o modelo **padrão** de imagem no aplicativo
Gemini e também no Flow, e a pesquisa da Envato com **1.780 profissionais criativos** mostra quase
metade usando IA **diariamente**; isso é caminho de instalação padrão, preço estável e falha
documentada — é **maduro**. Recusa a **IA dentro da ilha de edição**: o Generative Extend do Premiere
está disponível de 360p a 4K UHD e o Object Mask ganhou modos Sharp/Smooth com controle de nitidez;
isso acelera rotoscopia e extensão de plano, tarefas que já se faziam — é o **H2−** que faz o
presente durar mais. E recusa a tese de que **arquitetura autoregressiva já substituiu difusão**: o
VAR levou o melhor artigo do NeurIPS 2024, e dois anos depois o que está em produção — FLUX.2,
LTX-2.5, Aleph — segue difusão. Isso é sinal fraco, não raiz.

O que sobra, e é o objeto deste mapa, são **três rupturas**: o material filmado deixou de ser dado
fixo e virou superfície editável por instrução; o **grafo** substituiu o prompt como interface
profissional e virou o ativo que se entrega; e a peça animada deixou de ser arquivo renderizado para
virar **programa que responde a evento**. As três empurram na mesma direção — a autoria migra da
execução para a **especificação** — e cobram o mesmo preço: um vídeo que se dirige é um vídeo que
não prova nada, e a infraestrutura de procedência que deveria compensar isso cobre **menos de 1% das
imagens e vídeos de notícia publicados no mundo**.

## 2. O tema

**O objeto.** A imagem em movimento como mídia sintética **dirigível**. Não a existência da geração
— isso está resolvido —, mas a existência de um *ponto de controle*: uma região do quadro, um
quadro-chave que se propaga, uma regra de onde sai a animação, um nó num grafo, um estado que
responde a evento. É a diferença entre pedir e especificar.

**Por que isto é mídia e interação, e não computação gráfica.** Porque o ponto de controle é uma
**interface**, e escolher qual delas existe decide quem consegue trabalhar. Uma caixa de texto
admite quem sabe escrever; um grafo de nós admite quem sabe pensar em pipeline; uma máquina de
estados admite quem pensa em produto. Cada uma dessas escolhas redistribui o ofício — e, na terceira
delas, apaga a fronteira entre "a peça" e "a interface", porque o mesmo arquivo Rive roda em web,
iOS, Android e Unity e **responde** em vez de tocar.

**Por que um mapa de futuro e não um levantamento de estado da arte.** Um levantamento responderia
"quais modelos existem e quanto cada um marca em qual benchmark", e essa resposta tem validade de
seis semanas — o ciclo medido aqui é literalmente esse: Aleph em julho de 2025, Aleph 2.0 em maio de
2026, Aleph 1 depreciado em julho de 2026. O que **não** tem validade de seis semanas são as
perguntas que o controle abre e que não são técnicas: se a pós-produção pode alterar o que foi
filmado sem refilmar, o que o contrato de elenco passa a autorizar? Se o entregável é o grafo e não
a peça, quem é o autor? Se o vídeo é barato e dirigível, o que sobra do vídeo como registro — numa
pesquisa do Federal Judicial Center divulgada em **25 de março de 2026**, apenas **15 de 931 juízes
federais americanos** (cerca de 2%) já tinham visto alguém contestar uma prova audiovisual como
deepfake, e **82% dos 914 sem experiência** exigiriam uma demonstração inicial antes de sequer
prosseguir. Nenhuma dessas perguntas se responde comparando modelos.

**A fronteira, explícita.** Este mapa **não trata**: da *história* gerada e da coautoria narrativa
(tema 8); de *som* e *voz* sintéticos (tema 13) — ainda que os modelos já gerem áudio sincronizado,
o que é tratado aqui apenas como fato do presente; de design procedural sem IA como campo próprio
(tema 14) — a Cavalry e o Graphite entram aqui **porque** o controle por regra passou a competir com
o controle por prompt, não como capítulo de design generativo; de reconstrução 3D e renderização
neural (tema 10); e de percepção/visão de vocabulário aberto (tema 11), que é o lado de *ler* a
imagem, não o de *fazer*.

**O que ficou de fora por decisão de recorte, e não por desinteresse.** O que já é comum em produto
de massa. A régua da disciplina — *muda o que é possível fazer, ou só faz mais rápido o que já se
fazia?* — é a peneira, e a Fase 2 abaixo aplica-a item a item, dizendo em qual teste cada coisa
reprovou.

## 3. Onde isso está hoje

Esta seção é a âncora. Tudo aqui é presente verificado, com data. Nada aqui vira efeito na seção 5 —
efeito que já acontece não é efeito, é estado da arte, e vai para cá.

### 3.1 O que já é maduro (substrato, e não raiz)

**Geração de imagem por prompt.** O Nano Banana 2 tornou-se o modelo **padrão** de geração de imagem
no aplicativo Gemini (modos Fast, Thinking e Pro) e também no Flow, a ferramenta de vídeo do Google.
A pesquisa *Beyond Adoption: The State of AI in Creative Work*, da Envato, publicada em **12 de
novembro de 2025** com **1.780 profissionais criativos** em escala global, mede quase metade usando
IA **diariamente** — 54% entre a geração Z, 65% entre desenvolvedores web, 58% entre criadores de
conteúdo e artistas 3D — e registra que **58% já usaram IA em trabalho de cliente sem dizer nada ao
cliente**, com apenas 31% sempre revelando. O relatório resume a mudança: dezoito meses antes a IA
generativa era "novidade"; agora é tratada como **infraestrutura**. Isso é o platô, não a borda.

**Geração de vídeo por prompt, em produto de massa.** O estudo da Kapwing publicado em **9 de junho
de 2026**, que revisou **10.742 vídeos do TikTok** em 20 categorias mais 500 vídeos do feed de uma
conta nova, encontrou **59% dos vídeos servidos à página "For You" de uma conta nova classificados
como AI slop**, contra **21% no YouTube Shorts** — e **57,4% na categoria infantil**. O próprio
estudo declara os limites: a Kapwing vende edição de vídeo e tem interesse comercial em conteúdo
humano, a classificação é manual e subjetiva, e a coleta encerrou em maio de 2026. Ainda assim: um
formato cuja produção sintética domina o feed de recomendação **não é emergente**.

**IA dentro da ilha de edição.** Em **15 de abril de 2026** a Adobe anunciou disponibilidade geral do
Firefly Video Editor, do After Effects 26.2 com **Object Matte** (criação de máscara por clique,
pincel de seleção rápida, Refine Edge para cabelo) e do Premiere 26.2; o **Color Mode** entrou em
beta público com GA "mais tarde em 2026". Na versão de **setembro de 2026** (Premiere 26.5) o
**Generative Extend** suporta de **360p a 4K UHD**, qualquer proporção e material entrelaçado ou de
pixel não quadrado. A Adobe também integrou modelos de terceiros ao Firefly — **Kling 3.0** e
**Kling 3.0 Omni**, este último descrito como voltado a "controle profissional, consistência de
personagem e especificação de plano". Preço estável, instalação padrão, modos de falha documentados:
maduro.

**Prompt de 3.000 palavras e engenharia de acerto.** Vale registrar como **presente**, e não como
efeito futuro: a equipe de `Hell Grind` já escreveu física explícita dentro do prompt para combater
o aspecto "flutuante e superiluminado" típico do vídeo generativo — expressões como *"no floating
props"* e prefixos de luz natural —, com prompts de cerca de 3.000 palavras e saída de ~15 segundos
por tentativa. A profissionalização do ato de dirigir a geração **já aconteceu**; ela não é uma
previsão.

### 3.2 O que já existe e funciona na borda do controle

**Edição in-context de material filmado.** A Runway apresentou o **Aleph** em **25 de julho de 2025**
como *"um modelo de vídeo in-context de estado da arte, estabelecendo uma nova fronteira para geração
visual multitarefa"*, capaz de adicionar, remover e transformar objetos, **gerar qualquer ângulo de
uma cena**, e modificar estilo e iluminação — disponível para todos os usuários pagos. O **Aleph
2.0**, de **21 de maio de 2026**, junto com o **Edit Studio**: clipes de 2 a 30 segundos, de 480p a
1080p, propagação da mesma edição por **até 10 cortes ou mudanças de cena** sem repetir plano a
plano, e **até 5 imagens-âncora de quadro-chave** com precisão de **0,01 segundo**. O Edit Studio
introduz uma pré-visualização **em imagem estática** antes de comprometer o render de vídeo — o
reconhecimento explícito de que a iteração é o custo. Cerca de 150 créditos por 10 segundos. O
Gen-4 Aleph foi anunciado como depreciado em **30 de julho de 2026**.

**Controle estrutural sobre pesos abertos.** O **FLUX.2**, da Black Forest Labs, saiu em **25 de
novembro de 2025** em quatro variantes — `pro`, `flex`, `dev` (32 bilhões de parâmetros, pesos
abertos no Hugging Face) e `klein` (Apache 2.0) —, com **condicionamento por até 10 imagens de
referência simultâneas** para consistência de personagem, produto e estilo, edição a até 4 MP, e um
parâmetro explícito de *steps* na variante `flex` para negociar tipografia e detalhe contra latência.
O **LTX-2.5**, noticiado em **21 de agosto de 2026**, é um transformador de difusão de fluxo duplo
assimétrico com **22 bilhões de parâmetros** e pesos abertos, vídeo e áudio em fluxos independentes
ligados por atenção cruzada bidirecional, codificador de texto Gemma 4 de 12 bilhões, saída de 720p
a **4K HDR**, clipes de 6 a 20 segundos, checkpoint destilado em **oito passos**, quantização FP8
reduzindo memória em até 40% e execução local **a partir de 16 GB de VRAM**, com integração oficial
em ComfyUI e Diffusers. É sobre essa base que roda o controle estrutural propriamente dito: **IC-LoRA
Union Control** com condicionamento por **profundidade, aresta (Canny) e pose** num único adaptador
sobre o LTX-2.3-22B — camada que, segundo a própria documentação da fabricante, não está disponível
no Wan 2.2 nem no HunyuanVideo.

**O campo acadêmico reorganizou-se em torno do controle.** O survey *Controllable Video Generation:
A Survey* (arXiv 2507.16869), de Yue Ma e outros 21 autores, submetido em **22 de julho de 2025** e
revisado em **19 de janeiro de 2026**, abre justamente aí: *"a maioria dos modelos fundacionais
existentes é projetada para geração de texto-para-vídeo, onde prompts de texto sozinhos são
frequentemente insuficientes para expressar requisitos de usuário complexos, multimodais e de granularidade
fina"*. E organiza a literatura **por tipo de sinal de controle** — condição única, múltiplas
condições, controle universal. Quando um campo passa a se catalogar pela forma de dirigir, e não pela
qualidade do resultado, isso é um dado sobre onde está a fronteira.

**O grafo como interface profissional.** A ComfyUI nasceu como projeto aberto em 2023 e, em **24 de
abril de 2026**, levantou **US$ 30 milhões** liderados pela Craft Ventures (com Pace Capital,
Chemistry e TruArrow) a **US$ 500 milhões** de avaliação, somando US$ 47 milhões com a Série A de
US$ 19 milhões do fim de 2024. Mais de **4 milhões de usuários**; uso declarado em efeitos visuais,
animação, publicidade e design industrial; e a frase que interessa a este mapa, do CEO Yoland Yan:
*"você não consegue transmitir facilmente essa mensagem na caixa de prompt [de um modelo
fundacional]"*. E também: *"num mundo em que AI slop vai estar em toda parte, a versão Comfy da
abordagem com humano no circuito vai ganhar a maior parte dos olhos no fim"*. Concorrente principal
citado: a Weavy, comprada pela Figma em 2025.

**Controle sem IA, que continua sendo o mais controlável.** O **EbSynth 2**, da Secret Weapons,
lançado em **6 de outubro de 2025** em navegador, propaga a aparência de um único quadro pintado à
mão para o restante do plano — e faz isso, nas palavras da reportagem, *"sem usar IA para propagar
as alterações ao longo do plano"*: é **síntese de textura**, que preserva o conteúdo do quadro-chave
**no nível do pixel**. Grátis até 720p; US$ 20/mês para 4K e sequências PNG. Registrar isto é
importante porque desmonta a equação preguiçosa *controle = melhor modelo*: a ferramenta mais
controlável para rotoscopia estilizada, hoje, não é generativa.

**Motion design procedural e animação com estado.** A **Cavalry** — aplicação desktop de animação 2D
procedural e orientada a dados, em que se conectam nós funcionais para construir sistemas de
animação, com duplicadores, contexto de índice, ruído, osciladores e comportamentos de deslocamento —
foi **comprada pela Canva em fevereiro de 2026**, e a versão Pro tornou-se **gratuita para pessoas
físicas** (licenças de time e enterprise seguem pagas). O cofundador Ian Waters resume o desenho:
*"A Cavalry é baseada em nós? Sim. Porém você não vai precisar usar um grafo de nós para usar a
Cavalry."* A **Rive** define State Machine como *"uma forma visual de conectar animações e definir a
lógica que dirige as transições"*, com estados ligados por transições e conectados à lógica por
**Data Binding** — animação que não toca, e sim **responde** a evento e a dado, com o mesmo arquivo
em múltiplos runtimes. A Rive levantou US$ 10 milhões de Série A (Two Sigma Ventures, janeiro de
2023) sobre US$ 4 milhões de seed (a16z), tinha 76 funcionários em julho de 2026, e lista Google,
Samsung, Philips, WHOOP, Duolingo, Sonos e Atlassian entre quem usa.

**Geração jogável em tempo real.** O Google começou a liberar o **Project Genie** em **29 de janeiro
de 2026**; o Genie 3 gera mundos jogáveis a **720p e 24 fps** com minutos de coerência; o
Matrix-Game 3.0 é descrito como modelo de mundo interativo em streaming com memória de longo
horizonte; a Odyssey transmite a **40 ms por quadro** — contra os 41,6 ms que 24 fps exigem. Isso é
presente, ainda que em bolsão.

### 3.3 O que existe e não funciona

**A procedência.** O C2PA tem infraestrutura e não tem cobertura. Levantamento de **3 de março de
2026**: o Pixel 10 assina todas as fotos por padrão via Titan M2 e Tensor G5; a Leica SL3-S foi a
primeira a embarcar C2PA (janeiro de 2025); a Nikon Z6 III adicionou por firmware (agosto de 2025) e
**suspendeu após uma vulnerabilidade**; o Galaxy S25 assina **apenas** imagens editadas por IA, não
capturas normais; a Sony PXW-Z300 foi anunciada na IBC 2025 como a primeira filmadora com assinatura
C2PA nativa; a Cloudflare foi a primeira grande CDN a implementar (fevereiro de 2025); a versão
**C2PA 2.3**, de dezembro de 2025, estendeu a procedência a transmissão ao vivo por assinatura de
segmentos CMAF. Contra tudo isso: as plataformas **removem metadados** no upload, na transcodificação
e na recodificação; **menos de 1% das imagens ou vídeos de notícia publicados no mundo** carregam
metadado C2PA; o engajamento do usuário com as credenciais, quando elas existem, é *"muito baixo"*;
e o padrão **registra o que foi declarado no momento da assinatura — é procedência, não detecção**. A
maioria das câmeras sequer carimba data criptograficamente verificada.

**A regulação, que chegou ao calendário antes de chegar à prática.** O **artigo 50 do AI Act** é
aplicável desde **2 de agosto de 2026**: saídas de IA generativa precisam ser marcadas em formato
legível por máquina e detectáveis como artificiais, e quem implanta precisa revelar deepfakes — com
multa de até € 15 milhões ou 3% do faturamento global. O **Código de Prática de Transparência de
Conteúdo Gerado por IA** teve primeiro rascunho em **17 de dezembro de 2025**, segundo em **3 de
março de 2026** e versão final em **10 de junho de 2026**; a adesão é **voluntária**, e cerca de
**190 empresas** haviam assinado até o fim de julho de 2026. Quem não assina precisa demonstrar
conformidade por outros meios, avaliados caso a caso.

**A prova em vídeo.** O survey do Federal Judicial Center divulgado em **25 de março de 2026**, com
**931 juízes federais respondendo** (taxa de 45%): **15** já tinham visto alguém contestar prova
audiovisual como deepfake — e, entre esses 15, dois terços tinham visto **uma única** contestação em
2024-2025. Dos 914 sem experiência, **745 (82%)** exigiriam demonstração inicial; 42% aceitariam
prova mínima (declaração juramentada, prova técnica, corroboração), 35% exigiriam argumento razoável
de boa-fé, 3% perícia, 3% depoimento sob juramento, **4% inverteriam o ônus para quem apresenta a
prova**, e 6% dependeria do caso. O Comitê Consultivo de Regras de Prova considerou a proposta de
**Regra 707** (prova gerada por máquina) e de **Regra 901(c)** (prova contestada como gerada ou
manipulada por IA) e, na reunião de **maio de 2026, não avançou nenhuma das duas**. Em resumo: o
sistema probatório **ainda não sentiu o golpe**, e as regras para quando sentir não existem.

### 3.4 O Brasil

O **PL 2338/2023** foi aprovado pelo Senado em dezembro de 2024 e está na Câmara. Em dezembro de 2025
a votação estava prevista para fevereiro de 2026; foi para a Comissão Especial em **19 de maio de
2026**, com plenário previsto para 27 de maio, e ainda precisa voltar ao Senado. Os impasses
registrados são exatamente os que este mapa toca: **uso de obras protegidas em treinamento** e
tratamento de conteúdo sintético — com o calendário eleitoral de 2026 pressionando de fora.

No mercado, o dado brasileiro mais concreto anda no sentido oposto ao europeu: o **Guia de Marketing
e Publicidade por Influenciadores Digitais do CONAR**, publicado em **13 de maio de 2026**,
**não impõe** obrigação de informar ao consumidor que um conteúdo publicitário foi gerado ou editado
por IA — o documento declara explicitamente não tratar de *"diretrizes ou deveres novos sobre
disclosure do uso de IA na produção de conteúdo"*. O que ele faz é manter a **responsabilidade
solidária** de anunciante, agência e influenciador pela veracidade e conformidade do que for
produzido com auxílio de IA. A consequência prática: no Brasil, quem responde não é quem gerou, é
quem assinou — e isso é uma razão contratual forte para que exista um fornecedor identificável,
mesmo quando a produção é sintética.

### 3.5 O ofício, e quem está apanhando

O estudo da CVL Economics — **publicado em 2024**, e portanto uma projeção, não uma medição —
estimava mais de **100 mil postos em risco até 2026** dentro dos 550 mil de cinema, TV e animação nos
EUA, com cerca de **33% dos executivos** prevendo deslocamento de modeladores 3D, 25% de designers
gráficos e 15% de storyboarders, ilustradores e animadores. O que o registro sindical acrescenta é a
palavra exata: Sam Tung, storyboarder, sobre a pauta de negociação, disse que ela *"vai girar em
torno de controle — controle sobre quando e como produtos de IA são implantados no nosso ofício"*.
Mark Patch, organizador de VFX: *"estamos sendo ameaçados de substituição por ferramentas que não
estão qualificadas para nos substituir"*.

No festival, a fratura apareceu em público: no fecho de Annecy 2026 (**29 de junho de 2026**), a
estreia mundial de *Danse Macabre*, de Hisko Hulsing, que usou IA generativa para imitar as próprias
pinturas, recebeu **vaias e gritos** da plateia, com resposta dura do diretor artístico Marcel Jean.
A leitura da cobertura é precisa e vale reter: *"o debate passou a ser menos sobre se a IA merece
existir e mais sobre qual deve ser a resposta da indústria a ela"*.

E o caso que a imprensa contou errado, e que este mapa conta certo: **`Hell Grind`** — 95 minutos,
ação/fantasia, direção de Aitore Zholdaskali, produção da Higgsfield AI com Soul Cinema e Soul Cast
mais o Seedance 2.0, 15 pessoas, 14 dias, Almaty, compute na Nebius e na CoreWeave — **não estreou no
Festival de Cannes**. Exibiu no Cinéma Olympia, sala comercial, e em eventos do Marché du Film em
**16 e 21 de maio de 2026**; Cannes contestou publicamente a caracterização de estreia em festival.
A crítica ao trailer foi dura ("mais uma demo técnica do que um filme"). O número que sobrevive à
controvérsia é o da seção 1: **16.181 gerações para 253 planos**.

## 4. As disrupções-raiz

### 4.0 A triagem que precede esta seção

A Fase 2 da skill roda cinco testes em ordem — T1 régua (muda o que é possível, ou só a velocidade?),
T2 substituição (sem isto, mudaria o **objetivo** ou só custo e prazo?), T3 "por que agora" com sinal
datado dos últimos 24 meses, T4 precondição faltante nomeável, T5 rotina (instalação padrão, preço
estável, falhas documentadas ⇒ **maduro**). Uma reprovação em T1, ou uma aprovação em T5, encerra.

**MADURO — recusado, e o teste que reprovou cada um:**

- **Geração de imagem por prompt** — aprova **T5**: modelo padrão do aplicativo Gemini e do Flow,
  preço estável, metade dos profissionais criativos usando diariamente. Substrato, não raiz.
- **Geração de vídeo por prompt a partir de texto** — aprova **T5**: 59% do feed inicial do TikTok.
  Um formato que domina a recomendação de uma plataforma de massa não é emergente.
- **IA generativa dentro da NLE** (Generative Extend, Object Mask, Object Matte) — reprova **T1** e
  **T2**: sem elas, um time competente não muda o objetivo; aceita mais custo e prazo em rotoscopia,
  paint e extensão de plano. É **H2−** clássico: faz o presente durar mais.
- **Motion graphics em timeline** (After Effects) — reprova **T1**. É o **H1** deste tema.
- **Upscaling e restauração** (Magnific e congêneres) — reprova **T1**: velocidade e custo.
- **Geração de áudio sincronizado no mesmo modelo** — reprova **T1** *neste mapa*, por recorte: é o
  tema 13. Entra como fato do presente (LTX-2.5, Veo, Sora).

**EMERGENTE que sobrou — passa T1, T3 e T4:**

- Edição **in-context** de material filmado com âncoras de quadro-chave (Aleph 2.0).
- **Controle estrutural** sobre pesos abertos (IC-LoRA/ControlNet de profundidade, pose, aresta e
  trajetória; grafo como interface).
- **Animação como máquina de estados** que responde a evento e a dado (Rive, Cavalry, Graphite).
- **Arquiteturas não-difusão** (VAR e descendentes) — passa T1 e T3, **falha na porta de entrada**:
  não consigo nomear a competência que ela torna sem valor nem por onde entra no mercado, porque ela
  serve ao **mesmo** cliente do incumbente com o mesmo produto. É **sustentação**, não disrupção.
  Vai para a seção 6.
- **Procedência criptográfica** (C2PA) — passa T3 (Código final em 10/06/2026; art. 50 desde
  02/08/2026), mas é **condição de contorno**, não motor: ela reage à mídia sintética, não a produz.
  Entra como efeito e como força contrária, não como raiz.
- **Propagação não-generativa por quadro pintado** (EbSynth 2) — passa T1 e T3, **reprova T4**: não
  consigo nomear o que falta acontecer; a técnica já chegou. É estado da arte de controle, e entra na
  seção 3.

**DISRUPTIVO — emergente mais a competência que deixa de valer e a porta de entrada, nomeadas.** São
as três raízes abaixo. As três estão em **H2+**: transição que abre caminho, e não escora o presente.

---

### 4.1 Raiz 1 — O material filmado deixa de ser dado fixo e vira superfície editável por instrução

**O que rompe.** O pressuposto de que **a captação encerra o que existe**. Durante um século a
pós-produção trabalhou sobre um conjunto fechado: o que está no negativo, no cartão, no arquivo. A
edição in-context abre esse conjunto — gerar um ângulo que não foi filmado, remover um elemento
mantendo o movimento e a continuidade, mudar a luz de um plano já rodado. O que perde valor não é o
ofício de VFX inteiro: é a **execução manual da alteração quadro a quadro** — rotoscopia, paint,
cleanup, matchmove feito para substituir um elemento —, que era a maior parte das horas faturadas e
a porta de entrada de quem começava na área.

**Por que agora, e não há cinco anos.** Sinal datado, e é uma linhagem de produto, não uma demo:
Aleph em **25 de julho de 2025**, disponível a todos os pagantes e na API em **1 de agosto de 2025**;
Aleph 2.0 em **21 de maio de 2026**, com propagação por **até 10 cortes** e **5 imagens-âncora a
0,01 s** de precisão; Gen-4 Aleph **depreciado em 30 de julho de 2026**. Um ciclo de depreciação de
doze meses é a assinatura de software em produção, não de pesquisa. Há cinco anos o equivalente eram
plugins que tratavam um plano de cada vez; o que não existia era **propagar a mesma instrução por
uma sequência com cortes**, que é onde mora a diferença entre efeito e edição. Some-se o Edit Studio,
que pré-visualiza **em imagem** antes de render de vídeo: o produto reconhece que o gargalo é a
iteração.

**O que ainda falta acontecer.** Duas coisas nomeáveis. **(a)** O custo por tentativa cair pelo menos
uma ordem de magnitude — o número do `Hell Grind`, **16.181 gerações para 253 planos**, é o preço
atual de dirigir, e ele não fecha para produção contínua. **(b)** Consistência de personagem,
cenário e luz **além da dezena de segundos**: o Aleph 2.0 para em 30 segundos e 10 cortes; o LTX-2.5,
em 20 segundos. Enquanto o limite for esse, a unidade de trabalho continua sendo o plano, e não a
sequência — e o ofício que se dissolve é o de executar, não o de montar.

---

### 4.2 Raiz 2 — O grafo substitui o prompt como interface profissional, e vira o ativo entregue

**O que rompe.** A ideia de que mídia sintética é um **pedido a um serviço**. Quando o controle mora
num grafo de nós versionado, com condicionamento estrutural por profundidade, pose e aresta, o que se
produz não é uma peça: é um **procedimento reexecutável**. Perde valor a competência de **escrever
prompt** — que era, em 2024 e 2025, o que se vendia como habilidade nova — e perde valor o **serviço
fechado por assinatura**, porque o mesmo controle roda localmente sobre pesos abertos a partir de 16
GB de VRAM. A frase do CEO da ComfyUI é o enunciado exato da ruptura: o prompt chega a 60–80% do
caminho, e *"você não consegue transmitir facilmente essa mensagem na caixa de prompt"*.

**Por onde entra.** Pelos dois lados que a definição exige. **Mercado novo:** o cargo "ComfyUI artist
or engineer" não existia — é um profissional que não era cliente de ninguém e passou a ser; são 4
milhões de usuários e mais de 3.000 pacotes de nós comunitários. **Baixa do mercado:** o estúdio
pequeno e o freelancer que nunca assinariam contrato de nuvem corporativa rodam LTX-2.5 quantizado em
FP8 numa máquina de 16 GB, e FLUX.2 `dev` de 32 bilhões de parâmetros sob Apache 2.0.

**Por que agora, e não há cinco anos.** **24 de abril de 2026**: US$ 30 milhões a US$ 500 milhões de
avaliação para um projeto que é, literalmente, um editor de grafo. **25 de novembro de 2025**:
FLUX.2 com condicionamento por até 10 referências e parâmetro explícito de *steps*. **21 de agosto de
2026**: LTX-2.5 com pesos abertos, oito passos, 16 GB, IC-LoRA Union Control de Canny, profundidade e
pose. **19 de janeiro de 2026**: o survey de referência do campo revisado, catalogando a literatura
**por sinal de controle**. Há cinco anos a interface de referência era uma caixa de texto com um
seletor de proporção; ControlNet ainda não existia como categoria de produto, e não havia pesos
abertos de vídeo de porte executáveis em máquina de mesa.

**O que ainda falta acontecer.** Um **formato portátil de grafo**. Hoje o JSON de fluxo da ComfyUI
não roda em outro motor, e o IC-LoRA da LTX não se aplica ao Wan 2.2 nem ao HunyuanVideo — o ativo
que o estúdio acumula está preso ao motor em que foi escrito. Falta também **reprodutibilidade
determinística**: sem semente, versão de nó e versão de peso fixadas, o "procedimento reexecutável"
não é reexecutável, e sem isso ele não serve como entregável contratual.

---

### 4.3 Raiz 3 — A peça animada deixa de ser arquivo renderizado e vira programa que responde a evento

**O que rompe.** A **fronteira entre vídeo e interface**, e com ela a natureza do entregável. Um MP4
ou um Lottie é uma sequência: toca igual sempre. Uma máquina de estados Rive com data binding é um
programa: recebe evento e dado do aplicativo e decide o que mostrar, no mesmo binário, em web, iOS,
Android e Unity. A Cavalry é a versão sem IA do mesmo movimento — em vez de animar cada elemento, se
definem regras (duplicadores, osciladores, ruído, comportamentos) e a animação **sai** da estrutura.
O que perde valor é a competência de **executar a animação** — animar elemento por elemento numa
timeline —, que é exatamente o que a formação em motion design ensina primeiro.

**Por onde entra.** **Baixa do mercado:** produto digital que nunca teve orçamento de motion designer
— a Cavalry Pro, com rigs procedurais, render em tempo real, ferramentas orientadas a dados e física,
ficou **gratuita para pessoas físicas** depois da compra pela Canva em **fevereiro de 2026**.
**Mercado novo:** a interface de produto como território de animação, que não era cliente de produtora
— Duolingo, WHOOP, Sonos, Atlassian não contratavam motion graphics de cinema, contratam runtime.

**Por que agora, e não há cinco anos.** **Fevereiro de 2026**: a Canva compra a Cavalry e zera o preço
da ferramenta procedural — quando o dono de um mercado de massa compra a ferramenta de nicho e a
distribui de graça, ele está movendo o piso, não vendendo software. Em paralelo, o mesmo vetor pelo
lado generativo: **29 de janeiro de 2026**, o Google começa a liberar o Project Genie; o Genie 3
mantém mundo jogável a 24 fps e 720p por minutos; a Odyssey transmite a 40 ms por quadro. Há cinco
anos, animação com estado era um nicho de ferramenta única sem distribuição de massa, e geração em
tempo real era inexistente fora de laboratório.

**O que ainda falta acontecer.** Um **formato aberto de animação-com-estado**. Hoje cada runtime é
proprietário: o arquivo Rive precisa do runtime Rive, e não há equivalente do que o SVG fez pelo
vetor ou o Lottie fez pela animação linear. Enquanto isso não existir, o entregável não é portátil, e
quem compra fica preso ao fornecedor — o que trava a entrada em produção séria. Falta também um
**modelo de custo** para geração em tempo real em escala de audiência: 40 ms por quadro por
espectador é uma conta muito diferente de servir um arquivo de um CDN.

## 5. A roda dos futuros

Método: **Futures Wheel** (Jerome C. Glenn, 1971). A regra de parada não é de Glenn — a literatura
não traz nenhuma — e é minha, declarada: **expando um nó apenas se o filho mudar de ATOR ou de
MECANISMO em relação ao pai**, e paro o galho na segunda ordem quando o filho é o pai em outro
volume, quando exige duas precondições não validadas ao mesmo tempo, quando já é verdade hoje, ou
quando só faz sentido com duas raízes. Os efeitos abaixo são os que **sobreviveram** à Fase 5; os
mortos estão na seção 12, com o `id` original e a prova que os matou.

```yaml
roda:
  - disrupcao: O material filmado deixa de ser dado fixo e vira superfície editável por instrução
    efeitos:
      - id: e1
        ordem: 1
        efeito: A pós-produção deixa de corrigir o que foi filmado e passa a decidir o que poderia ter sido filmado, e o corte final passa a conter planos que nunca foram capturados
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O contrato de produção passa a especificar o que pode ser alterado depois, e a autorização de imagem de elenco e de locação vira cláusula sobre geração e não sobre captação
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A formação em audiovisual separa direção de captação de direção de alteração, e o crédito de tela ganha uma linha que hoje não existe
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O orçamento de produção migra de diária de equipe para conta de compute, tornando-se previsível no total e incontrolável na iteração
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e2
        ordem: 1
        efeito: O vídeo perde o estatuto de registro por padrão, e a pergunta sobre uma peça deixa de ser se ela foi manipulada e passa a ser quem assina a cadeia
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O custo de provar autenticidade desloca-se de quem contesta para quem apresenta, e o tribunal passa a exigir cadeia de custódia de quem junta o vídeo aos autos
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O acervo audiovisual anterior à assinatura criptográfica torna-se uma classe probatória à parte, com peso menor que o material nascido assinado
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A plataforma vira o ponto onde a cadeia de procedência quebra e, por isso, o ponto onde a regulação incide, em vez do gerador
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: A procedência deixa de viver como metadado dentro do arquivo e passa a viver em registro externo consultável, com o arquivo funcionando como ponteiro
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: O grafo substitui o prompt como interface profissional e vira o ativo entregue
    efeitos:
      - id: e3
        ordem: 1
        efeito: O prompt deixa de ser a interface profissional e vira um nó dentro de um grafo versionado, e o que se entrega ao cliente passa a ser o pipeline e não a peça
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O estúdio passa a vender reprodutibilidade em vez de peça única, e o cliente corporativo compra o sistema que gera mil variações em vez do filme que gera uma
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A marca com sistema de geração próprio contrata agência para manter o grafo, como se contrata manutenção de software, e não para produzir campanha
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: O sigilo do material bruto, e não o preço, passa a ser a razão de rodar geração na própria máquina, colocando o jurídico dentro da decisão de ferramenta
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: A cadeia de fornecimento de mídia passa a ser auditada como cadeia de software, com licença de modelo e procedência do dado de treino no mesmo documento de entrega
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Abre-se uma disputa por um formato portátil de grafo de geração, porque o pipeline virou o ativo e hoje ele não sai do motor em que foi escrito
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Quem controlar o formato do grafo captura a renda que hoje está no modelo, repetindo o deslocamento que levou valor do codec para o container
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O modelo generativo vira peça intercambiável dentro do grafo, e a diferenciação de mercado migra para os nós de controle
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Edital e concurso de audiovisual passam a exigir o grafo junto com a peça, como prova de autoria e de método
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: A autoria passa a ser atribuída a quem escreveu o sistema e não a quem operou a geração, numa configuração que a lei de direito autoral vigente não comporta
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: A peça animada deixa de ser arquivo renderizado e vira programa que responde a evento
    efeitos:
      - id: e5
        ordem: 1
        efeito: A peça animada entregue deixa de ser arquivo e passa a ser runtime, com o mesmo binário respondendo a evento em web, aplicativo e jogo
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O motion designer passa a ser contratado por quem mantém o produto e não por quem faz a campanha, entrando no ciclo de release de software
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A formação em animação se reorganiza em torno de lógica de estado e de dado, e o portfólio deixa de ser reel para virar demonstração executável
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: A distinção entre peça publicitária e componente de interface perde consequência orçamentária, porque a mesma pessoa entrega as duas no mesmo formato
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: O vídeo como formato de entrega perde lugar dentro de produto digital e sobrevive onde há transmissão linear ou sala escura
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Regra e estado passam a dirigir também a geração, e o que o grafo faz com o quadro a máquina de estados passa a fazer com o tempo
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Aparece uma categoria de peça que não é vídeo nem jogo, gerada na hora e dirigida por regra, diferente a cada exibição
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A medição de audiência perde o objeto, porque não há uma peça a medir e sim a distribuição das peças que foram exibidas
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Arquivamento e preservação passam a ter de guardar o sistema e não a saída, transformando memória audiovisual em problema de execução de software antigo
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Obra audiovisual que não pode mais ser executada é dada como perdida ainda com todos os seus arquivos intactos
                sinal: fraco
                prazo: 2034
                confianca: baixa
```

### 5.1 O que o bloco não consegue dizer

**A roda é árvore, e este tema é grafo.** Três coisas importantes só existem em prosa.

**Convergência entre raízes 2 e 3 — o efeito que precisa das duas e por isso ficou fora da árvore.**
Se o entregável do vídeo é um grafo (raiz 2) e o entregável da animação é um runtime (raiz 3), então
existe um objeto único que ninguém está construindo ainda: **um artefato que é, ao mesmo tempo,
procedimento de geração e máquina de estados** — uma peça que se **gera** de acordo com o dado do
momento e se **comporta** de acordo com o evento. O ComfyUI é grafo sem estado; a Rive é estado sem
geração. O primeiro que juntar os dois define a categoria. Este é o cruzamento que mais me interessa
quando os mapas da turma forem processados juntos: ele encosta no tema 7 (mundos vivos) pelo lado do
comportamento e no tema 14 (procedural) pelo lado da regra, e não é nem um nem outro.

**As raízes 1 e 2 se anulam parcialmente, e a árvore soma.** Quem lê os galhos de e1 e de e3 soma
"o estúdio fica menor" com "o estúdio vende sistema". Mas há tensão: a edição in-context puxa a
produção para o **serviço fechado** (Aleph roda na Runway, cobra crédito, não tem peso aberto), e o
controle estrutural puxa para o **motor local** (LTX-2.5, FLUX.2 `dev`). São duas economias
incompatíveis disputando o mesmo profissional. A roda não tem notação para isso. Se o serviço fechado
vencer, e3.2 morre inteiro e e4 vira irrelevante; se o motor local vencer, e1.2 muda de sinal, porque
o compute deixa de ser conta de terceiro.

**Retroalimentação que a árvore não representa: o slop realimenta a demanda por controle.** Os 59% do
feed inicial do TikTok não são só um efeito da geração barata — são o **motivo econômico** de existir
a ComfyUI a US$ 500 milhões, na leitura do próprio CEO: num mundo em que o slop está em toda parte,
quem tem humano no circuito fica com a atenção. Isso é um laço de reforço: quanto mais geração
indiscriminada, mais valor no controle, mais investimento em controle, mais geração possível. A roda
desenha uma seta; aqui há um ciclo.

**Onde o Brasil entra e sai do desenho.** Os galhos e2.1, e2.2 e e3.2 são fortemente europeus e
americanos: dependem do art. 50 do AI Act e das regras de prova federais. No Brasil, o mesmo galho
tem outra forma — o Guia CONAR de 13/05/2026 **não** exige disclosure, mas mantém responsabilidade
solidária. O efeito equivalente brasileiro não é "rotule o conteúdo": é "**tenha um fornecedor a
quem responsabilizar**". Isso empurra o mercado brasileiro na direção do grafo versionado e auditável
(e3, e4.2) por razão **contratual**, e não regulatória — o que é um caminho diferente para o mesmo
lugar, e provavelmente mais lento, porque contrato não tem multa de 3% do faturamento global.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — a arquitetura que pode virar o jogo e não virou (VAR).** O *Visual Autoregressive
Modeling*, de Keyu Tian, Yi Jiang, Zehuan Yuan, Bingyue Peng e Liwei Wang, submetido em **3 de abril
de 2024**, redefine a geração como predição de **próxima escala** em vez de próximo token em varredura
raster, e leva o FID no ImageNet 256×256 de **18,65 para 1,73**, o Inception Score de **80,4 para
350,2**, com inferência cerca de **20× mais rápida** — e, o que mais importa, exibe **leis de escala
em lei de potência** com correlação linear de cerca de **−0,998**, do tipo observado em modelos de
linguagem. Melhor artigo do NeurIPS 2024. **Dois anos e meio depois, o que está em produção segue
difusão.** O que faria isto mudar o mapa: se um modelo de ponta comercial de **vídeo** passar a ser
autoregressivo por escala, a geração deixa de ser um processo de remoção de ruído (opaco, difícil de
interromper) e vira um processo **por passos inspecionáveis** — e aí o controle deixa de ser um
adaptador pendurado por fora (ControlNet, IC-LoRA) e passa a ser intervenção no meio da geração. Isso
tornaria a raiz 2 muito mais forte e muito mais rápida.

**Sinal fraco 2 — o mercado de autenticidade certificada, que foi rebaixado a sinal justamente aqui.**
Este era um efeito candidato e não sobreviveu à Fase 5 (ver seção 12, `e2.3`). Fica como sinal porque
a infraestrutura existe e a cobertura não: C2PA 2.3 com assinatura de segmentos CMAF para ao vivo,
conformidade com registro público desde meados de 2025, e **menos de 1% das imagens e vídeos de
notícia** carregando o metadado. O que faria virar efeito: uma **agência de notícias grande recusar
material não assinado**, ou uma seguradora precificar sinistro com base em procedência. Nenhum dos
dois aconteceu.

**Sinal fraco 3 — o formato aberto de animação-com-estado.** Não existe. Se um consórcio publicar um
equivalente do Lottie para animação que responde a evento, o galho e5 acelera dois ou três anos de
uma vez; enquanto não existir, ele fica preso à velocidade de adoção de um runtime proprietário.

**Sinal fraco 4 — a queda do custo de compute como variável escondida.** Todo o galho e1.2 é uma
função do preço do token de vídeo. O `Hell Grind` gastou **80% de US$ 500 mil** em compute; o LTX-2.5
destilado roda em **oito passos** e cabe em 16 GB. Se a destilação continuar nesse ritmo, a conta de
compute sai do orçamento e o efeito e1.2 perde o objeto — não porque eu errei, mas porque a variável
que o sustenta desapareceu.

**Sinal fraco 5 — a plateia que vaia.** As vaias a *Danse Macabre* em Annecy 2026 e a reação do
público a peças publicitárias percebidas como sintéticas são, hoje, ruído cultural. Mas se a
rejeição virar **preço** — campanha que performa pior por ser reconhecida como sintética —, a raiz 1
e a raiz 2 continuam valendo e o *uso* delas inverte: o controle passa a servir para fazer a mídia
sintética **parecer não sintética**, e não para dirigi-la melhor. É a mesma tecnologia com o sinal
econômico trocado.

**Wildcard A — um longa feito por uma pessoa entra na seleção oficial de um festival de primeira
linha.** Probabilidade baixa até 2031; impacto alto. O que temos hoje é o *quase*: `Hell Grind`, 95
minutos, **15 pessoas**, exibido em Cannes **fora** do festival, com Cannes contestando publicamente
a caracterização de estreia. A distância entre "15 pessoas num evento de mercado" e "1 pessoa na
Competição" é menor do que parecia em 2024 e maior do que o marketing sugere: o obstáculo não é
técnico, é a razão 64:1 e a seleção curatorial. Se acontecer, o efeito imediato não é sobre produção
— é sobre **legitimação**, e ele destrava e1.1.1 (crédito de tela) anos antes do previsto.

**Wildcard B — um modelo de ponta é retirado do mercado por decisão judicial de direito autoral.**
As disputas seguem abertas. Se um modelo amplamente usado em pipeline profissional sair do ar por
liminar, o efeito não é "todo mundo para": é **migração forçada para pesos abertos e locais**, o que
acelera violentamente a raiz 2 e mata e1 na versão serviço-fechado. Um evento adverso à tecnologia
fortaleceria o ramo mais disruptivo dela.

**Wildcard C — uma plataforma de massa passa a exigir procedência para monetizar.** Não para rotular:
para **pagar**. Se o pagamento a criadores ficar condicionado a cadeia assinada, o C2PA sai de <1%
para dezenas de por cento em um ou dois trimestres, e e2.1, e2.2 e e2.2.1 antecipam-se todos. É o
único caminho plausível que vi para a procedência escapar da armadilha de "todo mundo apoia e
ninguém usa".

**Wildcard D — inversão de valor: a peça não dirigível vira o produto de luxo.** Se o controle fino
se tornar trivial e universal, o que escasseia é o **acidente**. Cinema em película, imperfeição de
captação e prova de não-intervenção viram categoria premium, e a indústria de autenticidade nasce
pelo lado do **gosto**, não pelo da regulação — mercado que o mapa inteiro não previu porque o mapa
inteiro assume que controle é valor.

## 7. Contra o próprio mapa

Esta seção é o resultado da bateria adversarial da Fase 5, aplicada à roda inteira, prova por prova,
citando `id`. **A bateria derrubou sete efeitos e rebaixou três**; os mortos estão na seção 12. O que
sobrou abaixo é o que ela **não** conseguiu matar, e onde eu continuo achando que o mapa está errado.

### 7.1 P1 — extrapolação linear: qual efeito é só o presente em outro volume

**`e1.2` é o mais frágil por este teste.** "O orçamento migra de diária para compute" descreve uma
troca de rubrica, não uma mudança de ator: quem decide o orçamento continua sendo quem já decidia, e
o mecanismo — alguém aprovando um custo — é o mesmo. Ele sobreviveu por uma diferença estreita: a
**previsibilidade** inverte. Diária de equipe é cara e previsível; compute é barato por unidade e
imprevisível no total, porque a razão geração/plano não é conhecida de antemão. Isso muda o
comportamento de quem aprova, e não só o valor. Se eu estiver errado sobre essa inversão, `e1.2` cai
e leva junto a única justificativa que o galho tinha para existir.

**`e5.2` foi rebaixado por este teste** — "a distinção entre peça publicitária e componente de
interface perde consequência orçamentária" é quase "mais convergência". Ficou como `sinal: fraco` e
`confianca: baixa`, e admito que é o efeito mais próximo de ser cortado entre os que sobreviveram.

### 7.2 P2 — velocidade de adoção: qual efeito assume ritmo que nunca se viu

**`e3` é o efeito com prazo mais agressivo do mapa** (2028, `confianca: alta`), e é onde eu mais posso
estar errado. Ele assume que o grafo substitui o prompt como interface profissional em dois anos. O
caso histórico que uso para sustentar é a **composição por nós**: o Nuke deslocou o Shake e a
composição em camadas no cinema ao longo dos anos 2000, e a estrutura do argumento é a mesma — quem
é pago pelo acerto prefere o grafo, quem é pago pela ideia prefere a camada. Mas aquela transição
levou **quase uma década**, e eu estou apostando em dois anos. A defesa é que a base instalada já
existe (4 milhões de usuários, cargo com nome próprio, US$ 500 milhões de avaliação), o que não era
verdade no início da transição do compositing. A acusação é que 4 milhões de usuários de uma
ferramenta gratuita não são 4 milhões de profissionais, e a ComfyUI não publica quantos pagam.
**Se `e3` estiver errado no prazo, todo o ramo da raiz 2 desliza junto** — `e3.1`, `e3.2`, `e4` e
descendentes —, porque os prazos são monotônicos a partir dele.

**`e2.1` foi rebaixado a `confianca: baixa` por este teste.** O deslocamento do ônus da prova é uma
mudança de regime probatório, e regimes probatórios mudam em décadas, não em quatro anos. A evidência
de hoje é explicitamente contrária à velocidade que eu suponho: **apenas 2% dos juízes federais
americanos** já viram uma contestação de deepfake, e o comitê de regras **não avançou** nem a Regra
707 nem a 901(c) em maio de 2026. Mantive o efeito porque 4% dos juízes já dizem que inverteriam o
ônus — mas com a confiança no chão.

### 7.3 P3 — já aconteceu: qual efeito já é verdade hoje

Este teste matou dois candidatos (`e1.3` e `e1.2.1`, seção 12) e é o que mais deve ser usado contra
este mapa por quem o corrigir. O tema tem uma armadilha específica: **a maior parte do que parece
futuro em mídia sintética já aconteceu em algum bolsão**, e a diferença entre "efeito de 2029" e
"coisa que a Higgsfield fez em maio de 2026 com quinze pessoas" é só escala. Minha defesa é que
bolsão não é efeito — mas o leitor tem razão de desconfiar de qualquer linha da seção 5 que já tenha
um exemplo em produção. Duas que estão mais expostas: `e3.1` (vender reprodutibilidade em vez de
peça) já é o modelo de negócio de agências de performance que produzem variações em lote; e `e5`
(entregável vira runtime) já é a prática de quem usa Rive em produto hoje — o que sustenta o efeito é
que isso **saia** do nicho de produto digital e vire norma de entrega, não que passe a existir.

### 7.4 P4 — força contrária: quem perde, e o que essa pessoa pode fazer

**Nomeadas, com o que cada uma pode fazer:**

- **Os sindicatos de animação e VFX**, que declararam a pauta exatamente nos termos deste mapa —
  *"controle sobre quando e como produtos de IA são implantados no nosso ofício"*. O que podem fazer:
  transformar cláusula de contrato coletivo em restrição de pipeline. Isso não impede a tecnologia;
  atrasa `e1` e `e1.1` em produção sindicalizada, e empurra o trabalho para fora dela.
- **O incumbente de software** — a Adobe. O Generative Extend e o Object Matte são H2−, e a Adobe tem
  o canal de distribuição que a ComfyUI não tem. Ela pode absorver o controle fino dentro da NLE e
  matar `e3` pela conveniência: se o grafo virar um painel do Premiere, o pipeline deixa de ser ativo
  do estúdio. A integração de Kling 3.0 e Kling 3.0 Omni ao Firefly, em abril de 2026, é exatamente
  esse movimento — o incumbente comprando o motor de terceiros e mantendo a interface.
- **A plataforma**, que perde se a procedência funcionar, porque a cadeia quebra no ponto dela.
  Remover metadado na transcodificação não é sabotagem: é o caminho técnico mais barato, e ninguém
  tem incentivo para mudá-lo. É esta força que matou `e2.3`.
- **A plateia.** Vaias em Annecy, rejeição a peça publicitária percebida como sintética, e o próprio
  vocabulário — "slop" foi palavra do ano de três dicionários em dezembro de 2025. Uma força
  contrária cultural não impede produção; ela **reprecifica** o resultado, e isso pode inverter o uso
  das três raízes (ver sinal fraco 5).
- **A inércia probatória.** A mais subestimada, e a que sustenta o rebaixamento de `e2.1`.

**Onde eu NÃO modelei força contrária, e deveria:** em `e4` e `e4.1`. Não nomeei quem perde com um
formato portátil de grafo — e quem perde é óbvio: a própria ComfyUI, cujo valor de US$ 500 milhões
depende de o grafo **não** ser portátil. Um efeito que depende da boa vontade de quem ele prejudica é
um efeito mal construído. Deixei-o com `confianca: media` no pai e `baixa` nos filhos, mas o correto
provavelmente seria matá-lo, e não tive coragem.

### 7.5 P5 — precondição única: qual galho inteiro pende de uma aposta só

**O galho da raiz 2 inteiro pende do custo de inferência local continuar caindo.** `e3.2`, `e3.2.1`,
`e4`, `e4.1`, `e4.1.1`, `e4.2` e `e4.2.1` — sete efeitos — assumem que rodar geração de vídeo
controlada numa máquina de mesa continua viável. O sinal de hoje é bom (LTX-2.5 destilado em oito
passos, FP8, 16 GB de VRAM). Mas se a fronteira de qualidade migrar para modelos que não cabem em
hardware de consumo — e a história dos modelos de linguagem sugere que a fronteira sempre migra para
cima —, o motor local vira o equivalente do MP3 de 128 kbps: presente, aceitável, irrelevante para
quem é pago. **Se essa precondição cair, sete efeitos morrem juntos**, e o que sobra da raiz 2 é
apenas `e3` na versão serviço-fechado, que é uma disrupção bem menor.

Uma segunda precondição única, menor: `e6.1`, `e6.1.1` e parte de `e5` dependem de existir um
**modelo de custo** para runtime e geração em tempo real servidos a audiência de massa. 40 ms por
quadro por espectador não é a economia de um CDN, e ninguém publicou como isso fecha.

### 7.6 P6 — as quatro camadas (CLA): o que sobrevive abaixo da manchete

**Litania:** "IA agora edita vídeo real"; "um estúdio de uma pessoa"; "o fim da pós-produção".
**Causas sistêmicas:** o que realmente mudou foi o **custo marginal de tentar** — não o de produzir.
A geração é barata; dirigir é caro; e todo o mercado descrito neste mapa (ComfyUI, Edit Studio,
âncoras de quadro-chave, IC-LoRA) existe para reduzir a razão entre tentativas e resultados aceitos.
Se o leitor guardar uma frase deste documento, que seja esta: **a indústria do controle é a indústria
de baixar a razão 64:1.**
**Visão de mundo:** este mapa assume, do começo ao fim, que **controle é valor** — que uma peça
dirigida vale mais que uma peça sorteada, e que o profissional é quem consegue especificar. Isso é
uma escolha de valor, não um fato. Ela é verdadeira num regime em que a peça é encomendada por
alguém com intenção. Não é verdadeira num regime em que a peça é **selecionada por desempenho**:
se o critério de sucesso é o que retém atenção, gerar mil e medir é estratégia dominante, e o
controle fino vira custo desnecessário. **Os 59% do feed do TikTok são exatamente esse segundo
regime funcionando.** Se ele prevalecer, praticamente todo o mapa troca de sinal sem que um único
fato mude: `e3` continua verdadeiro como fato (o grafo existe) e falso como tendência (ninguém
precisa dele), `e1` vira nicho de cinema, e a raiz 3 sobrevive por razão puramente técnica.
**Mito/metáfora:** a história por baixo é *o artista como maestro* — alguém que não toca nenhum
instrumento e comanda todos. É uma metáfora bonita e provavelmente errada: o maestro pressupõe uma
orquestra que executa com fidelidade, e a razão 64:1 descreve um conjunto que **não** executa o que
se pede. A metáfora mais honesta para 2026 seria *o artista como pescador* — lança muitas vezes,
guarda o que presta. Todo este mapa é a aposta de que a pesca vira regência até 2031. Pode não virar.

### 7.7 Qual disrupção pode simplesmente não se concretizar

**A raiz 3 é a que tem mais chance de não acontecer** — e é, por coincidência, a que eu acho mais
interessante, o que é motivo para desconfiar dela. Ela depende de um formato aberto que não existe,
de uma mudança de cultura de entrega numa profissão inteira, e de um sinal econômico (a Canva zerando
o preço da Cavalry) que tem uma leitura alternativa banal: a Canva compra ferramentas o tempo todo e
distribui de graça para alimentar o próprio produto; isso pode dizer mais sobre a estratégia da Canva
do que sobre o futuro do motion design. Se a raiz 3 não se concretizar, o mapa perde `e5`, `e6` e
sete descendentes — **treze dos vinte e nove efeitos** —, e o que sobra é um mapa sobre produção
audiovisual, não sobre mídia e interação. Seria um mapa menor e mais seguro.

**A raiz 1 é a que tem mais chance de se concretizar e importar menos do que eu disse**, se o limite
de 30 segundos e 10 cortes não subir: nesse caso ela é uma ferramenta de plano, não de obra, e o
efeito real é sobre publicidade curta e conteúdo social — exatamente onde o slop já está.

### 7.8 O viés que entrou aqui

**Escolhi este tema por gostar dele, e isso aparece.** Trabalho pensando em ferramenta e em
interface, e este mapa trata o problema do controle como se fosse o problema central da mídia
sintética. É uma escolha de quem projeta ferramenta. Alguém que trabalha com distribuição diria que o
problema central é o feed; alguém que trabalha com direito diria que é o treino; alguém que trabalha
com trabalho diria que é o emprego. As três leituras cabem nos mesmos fatos.

**Segundo viés, mais específico: eu prefiro grafo a prompt, e isso é estético antes de ser
analítico.** A frase do CEO da ComfyUI que citei três vezes neste documento é a frase de alguém que
precisa que o grafo vença — ele levantou US$ 30 milhões com base nisso. Eu a usei porque ela diz bem
o que eu já achava, e isso é a definição de evidência conveniente. O contraponto honesto: a história
das interfaces criativas é, em quase todos os casos, a história da **caixa de texto vencendo o
painel de controle** — foi assim com a busca, com a planilha e com a própria geração de imagem. A
aposta deste mapa é contra esse histórico.

**Terceiro viés, de fonte.** Metade das fontes desta rodada são de fabricante ou de imprensa
especializada que vive do setor. Não existe um levantamento independente e auditado de adoção de
mídia sintética controlável; o mais próximo é a pesquisa da Envato — que é de uma empresa que vende
ativos criativos — e o estudo da Kapwing — que é de uma empresa que vende edição de vídeo e declara
o próprio conflito de interesse. Todos os números deste mapa devem ser lidos com esse desconto.

### 7.9 O falsificador declarado, e o que ele fez com o mapa

O recorte declarou como falsificador: *evidência de que a adoção já passou da maioria inicial
(Rogers), ou de que a tecnologia não rompe nada — só melhora o que existe.*

**Ele disparou, e sobre o alvo certo.** A pesquisa da Envato (metade dos criativos usando IA
diariamente, IA tratada como "infraestrutura") e o estudo da Kapwing (59% do feed inicial) são
evidência de que **a geração por prompt passou da maioria inicial**. Por isso ela foi recusada na
Fase 2 e está na seção 3, não na 4. O mapa não morreu porque o alvo do falsificador não é o objeto
do mapa: **gerar é maduro; dirigir não é.** Mas a distinção entre os dois é fina, e é exatamente aí
que este mapa deve ser atacado primeiro — se alguém mostrar que o controle fino também já passou da
maioria inicial (por exemplo, que o uso de ControlNet/IC-LoRA é rotina na maioria das produções
comerciais, e não em nicho), então a raiz 2 é madura e o mapa perde o meio.

## 8. O que a máquina errou

Anotei os erros no momento em que apareceram, e o que os tornou detectáveis. Nenhum foi pego por
releitura atenta; todos por **atrito externo** — duas fontes discordando, um resumo sem o dado, uma
data que não batia com a outra.

**1. A data tirada da revisão, apresentada como a data do trabalho.** O resumo de busca afirmou que o
survey *Controllable Video Generation* foi "publicado no arXiv em janeiro de 2026". Ao abrir a página
do arXiv: **submetido em 22 de julho de 2025**, última revisão em **19 de janeiro de 2026**. É a
mesma espécie de erro que já tinha me custado caro na rodada anterior (1971 virou 1972) e a mesma
mecânica: existem duas datas na página, e o resumo pegou a mais recente por ser a mais recente. *O
que disparou a desconfiança:* o número do arXiv. Um identificador que começa com `2507` é de julho de
2025 por construção, e ele estava impresso ao lado da afirmação "janeiro de 2026". A forma do dado
denunciou o dado.

**2. O estudo de 2024 apresentado como retrato de 2026 — e com um número que não é o do estudo.** O
resumo de busca disse: *"um estudo da CVL Economics constatou que cerca de 118.500 empregos... — cerca
de 21,4% da força de trabalho do setor — devem ser consolidados, substituídos ou eliminados pela IA
generativa até 2026"*, sem data. Ao abrir a reportagem que descreve o estudo: ela é de **8 de abril
de 2024**, e o número que traz é **"mais de 100 mil postos em risco até 2026"** dentro de 550 mil.
Dois problemas empilhados: (a) uma **projeção de 2024 sobre 2026** lida como **medição de 2026**, o
que é o erro mais perigoso num mapa de futuro, porque converte aposta alheia em fato meu; e (b) dois
números diferentes — 118.500 e "100 mil+" — atribuídos ao mesmo estudo. *Como percebi:* fui abrir a
fonte para citar a frase, e a frase do resumo não estava lá. Escrevi no documento com a data de
publicação colada ao número, que é a única forma de a leitura ficar honesta.

**3. O lançamento anunciado como feito, quando a própria fabricante dizia "em breve".** O resumo de
busca afirmou que em **15 de janeiro de 2026** a Black Forest Labs lançou a família FLUX.2 `klein`. A
página da própria empresa, aberta em seguida, diz sobre a mesma variante: **"Coming soon"**,
Apache 2.0, em beta. *Como percebi:* conflito direto entre fonte secundária e primária sobre o mesmo
objeto. Mantive no documento apenas o que a página do fabricante sustenta, e não usei a data de
janeiro em lugar nenhum.

**4. O recorte da amostra trocado, mudando o que a estatística quer dizer.** Um resumo disse que o
estudo da Kapwing "revisou manualmente mais de 10.700 vídeos" e encontrou "59% de AI slop". Ao abrir
o relatório: foram **10.742 vídeos em 20 categorias** de páginas de tag **mais 500 vídeos do feed de
uma conta nova** — e os **59% são da amostra do feed**, não dos 10.742. A diferença não é detalhe: "o
TikTok é 59% slop" e "o feed inicial de uma conta nova recebe 59% de slop" são afirmações
completamente diferentes, e a segunda é sobre **recomendação**, que é o que importa aqui. *Como
percebi:* os números não fechavam — 10.742 vídeos manualmente revisados por uma empresa pequena já é
muito; 10.742 revisados **e** categorizados **e** servidos a uma conta nova era implausível.

**5. A estreia em Cannes que não foi em Cannes, com dois números de duração.** Três fontes disseram
que `Hell Grind` "estreou em Cannes". A Wikipédia diz: 21 de maio de 2026, Cannes, **"exibido num
evento de indústria, não no festival oficial"**. O CineD, de 28 de maio de 2026, vai além: o festival
declarou oficialmente que o filme **não fez parte da programação**, exibiu no Cinéma Olympia e em
eventos do Marché nos dias 16 e 21, e **Cannes contestou publicamente** a cobertura do Wall Street
Journal que o caracterizou como estreia em festival. Além disso, a duração aparece como **95 minutos**
em duas fontes e **80 minutos** em um resumo de busca. *Como percebi:* eu ia usar o caso como
wildcard parcialmente realizado, e um wildcard sobre legitimação depende inteiramente de **onde** a
peça foi exibida — a diferença entre seleção oficial e sala alugada é o wildcard inteiro. Fui
verificar por isso, não por desconfiança genérica.

**6. O que eu não consegui verificar, e digo em vez de fingir.** A data de **21 de maio de 2026** do
Aleph 2.0 e as especificações (30 segundos, 10 cortes, 5 âncoras a 0,01 s, Edit Studio, depreciação
do Gen-4 Aleph em 30 de julho de 2026) vêm de **fonte secundária** que declara citar o anúncio oficial
da Runway. A página de pesquisa da Runway que consegui abrir é a do **Aleph original, de 25 de julho
de 2025** — essa sim, primária. **Não consegui apurar** a página oficial do Aleph 2.0 nesta sessão.
Todo o restante do documento trata as especificações do 2.0 como reportadas, não como confirmadas.

**7. Duas fontes que não abriram, e que por isso não estão na seção 11.** A VFX Voice
(`vfxvoice.com`, retrato do setor entrando em 2026) devolveu **HTTP 403**, e a Variety (10 conclusões
de Annecy 2026) devolveu **HTTP 402 — Payment Required** depois de redirecionar para um domínio de
paywall. Substituí a segunda pela cobertura do Cartoon Brew, que abriu. A primeira não tem
substituto: **o retrato do setor de VFX em 2026 entra neste mapa apenas pelo lado sindical e pelo
festival**, e essa é uma lacuna real da seção 3.5.

**8. O caso que não foi erro, e é o mais instrutivo.** Escrevi de memória, e por dentro com a mesma
confiança de tudo o mais, que "o Nuke deslocou o Shake e a composição em camadas no cinema ao longo
dos anos 2000" — argumento que sustenta o caso histórico comparável de `e3`, e portanto sustenta a
única `confianca: alta` do mapa. **Não verifiquei essa afirmação nesta sessão.** Ela é, até onde sei,
verdadeira; mas a sensação de sabê-la é indistinguível da sensação que acompanhou os itens 1 a 5
acima. Deixo registrado aqui em vez de na seção 11, porque **fonte que não abri não entra na seção
11** — e um argumento que sustenta a confiança mais alta do documento não deveria repousar sobre
memória não conferida.

## 9. Três cenários para 2031

### Provável — "o controle virou software, e o resto virou volume"

Em 2031 há duas mídias sintéticas, e elas quase não se falam. Uma é o volume: o feed, a peça de
performance, o vídeo que existe para ser medido e substituído — gerada por prompt, em escala, sem que
ninguém revise quadro. É a continuação direta dos 59% de 2026, e ninguém no mercado a chama mais de
IA: chama de conteúdo. A outra é a mídia dirigida, e ela virou **software**: o entregável de uma
produção é um repositório com grafo versionado, pesos fixados, sementes registradas e as máquinas de
estado das peças que respondem. O cargo que a ComfyUI inventou em 2026 é um cargo normal, e existe um
segundo, mais raro e mais caro, de quem reduz a razão entre tentativas e planos aceitos. A edição
in-context é rotina em publicidade e em série de TV, e continua difícil em cinema, porque o limite de
consistência subiu de 30 segundos para alguns minutos, e não para uma obra. Os sindicatos
conquistaram cláusula de implantação, e ela vale onde há sindicato — o trabalho migrou para onde não
há. O formato portátil de grafo **não** apareceu; cada motor tem o seu, e migrar de fornecedor custa
como migrar de banco de dados. A procedência assinada existe, funciona tecnicamente, e cobre uma
fração do que circula, porque nada obrigou a plataforma a parar de remover metadado. No Brasil, o
marco legal passou, e a prática do mercado continua sendo a responsabilidade solidária do CONAR: o
que se exige não é rótulo, é fornecedor com CNPJ.

### Desejável — "o grafo virou formato, e a procedência virou pagamento"

Em 2031 duas coisas aconteceram que não eram inevitáveis. A primeira: um consórcio — não uma empresa —
publicou um **formato aberto de procedimento de geração**, com semente, versão de nó, versão de peso
e sinais de controle declarados, e ele roda em mais de um motor. Isso transformou o pipeline num
ativo que a produtora **possui** em vez de alugar, e permitiu que edital público, tribunal e cliente
corporativo exigissem o grafo junto com a peça: autoria e método passaram a ser verificáveis, e não
declarados. A segunda: uma plataforma de massa condicionou **monetização** a cadeia de procedência
assinada. Não foi por virtude — foi porque o custo de moderar slop ficou maior que o custo de exigir
assinatura. A cobertura de C2PA saiu de menos de 1% para a maior parte do que é pago, e o efeito
colateral foi o que ninguém previu: o arquivo passou a valer mais quando **declara** que é sintético
e diz como, do que quando finge que não é.

Para chegar lá foi preciso o que ainda não existe hoje: um grupo com poder de compra — federação de
emissoras, agência de notícias grande, ou órgão público — **recusando material sem procedência e sem
grafo**, e aguentando o custo disso por dois ou três anos. Padrão não nasce de comitê; nasce de
alguém grande o bastante para dizer não.

### Indesejável — "o controle existe e serve para esconder"

Em 2031 todas as três raízes se concretizaram, e o sinal econômico está trocado. A rejeição do
público a mídia percebida como sintética virou preço mensurável — campanha reconhecida como gerada
performa pior —, e por isso o controle fino, que nasceu para dirigir, é usado majoritariamente para
**parecer não dirigido**: a física explícita no prompt, o grão adicionado, o defeito de lente
simulado, a imperfeição calculada. A procedência assinada existe e se tornou o contrário do que
prometia: como ela registra **o que foi declarado no momento da assinatura**, e não o que é verdade,
a cadeia limpa passou a ser um produto que se compra. Quem tem dinheiro tem procedência; quem não
tem, tem suspeita. No tribunal, a assimetria consolidou-se antes de qualquer regra: contestar um
vídeo exige perícia cara, e o resultado prático é que **prova em vídeo passou a favorecer quem pode
pagar pelos dois lados** — pela cadeia e pela contestação da cadeia alheia. A formação em audiovisual
não se reorganizou; ela encolheu, porque a porta de entrada do ofício, que era executar, sumiu, e a
porta nova, que é especificar, exige experiência que ninguém mais tem onde adquirir.

**O sinal precoce deste cenário, e ele é observável desde já:** o dia em que um produto de controle
fino for anunciado com a promessa explícita de tornar a saída **indistinguível de captação real** —
não "mais bonita", não "mais controlável": indistinguível. O vocabulário de marketing muda antes do
uso. Um segundo sinal, mais discreto: serviços que **vendem** credenciais de procedência em vez de
apenas emiti-las.

## 10. O experimento

### O que é

**A oficina da razão 64:1.** Uma sala, um plano de **dez segundos** definido por escrito antes de
qualquer geração (ação, enquadramento, luz, um elemento que precisa aparecer e um que não pode
aparecer), e **quatro caminhos de controle** rodando em paralelo sobre o mesmo pedido:

1. **Prompt puro** — descrição em texto, sem imagem, sem âncora.
2. **Quadro-chave âncora** — gerar primeiro a imagem do primeiro quadro, e usá-la como âncora de
   imagem-para-vídeo.
3. **Grafo com condicionamento estrutural** — ComfyUI com controle por profundidade ou pose sobre um
   modelo de pesos abertos, rodando local.
4. **Propagação não-generativa** — um quadro pintado ou fotografado à mão, propagado por síntese de
   textura (EbSynth 2), sobre um vídeo de referência filmado ali mesmo com celular.

A medida **não é qualidade**. É o **número de tentativas até o resultado ser aceito por um terceiro**
que não participou da geração e só recebeu a especificação escrita. Cada tentativa é registrada:
número, o que se mudou, e por que foi rejeitada. O produto da oficina é uma tabela de quatro colunas
com a razão tentativas/aceite de cada caminho, mais o registro de **onde** cada caminho deixou de
responder ao que se pedia.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta da raiz 2, que é a pergunta da qual o mapa inteiro depende: **o controle estrutural reduz
de fato a razão entre tentativas e aceites, ou apenas move o esforço para outro lugar?** O número
16.181 para 253 é o único dado duro que encontrei sobre o custo de dirigir, e ele vem de uma única
produção, sem controle e sem comparação. A oficina produz o controle que falta: o mesmo pedido, quatro
interfaces, o mesmo juiz. Se o grafo não baixar a razão, `e3` está errado — e com ele sete efeitos.

Responde também a uma pergunta de método que a disciplina vai usar em outros temas: **a régua
"muda o que é possível ou só a velocidade?" é aplicável empiricamente?** Aqui ela vira medida: o
caminho 1 e o caminho 2 diferem em velocidade; o 3 e o 4 diferem em **o que se consegue especificar**.
Se o terceiro caminho aceitar pedidos que o primeiro não aceita de jeito nenhum — "este elemento
exatamente nesta posição, nestes quadros" —, a régua tem um lado observável.

### Que tecnologia emergente ele usa, e por que não dá com tecnologia madura

Usa exatamente o que a Fase 2 classificou como emergente: **condicionamento estrutural** (ControlNet /
IC-LoRA de profundidade e pose) sobre **pesos abertos** rodando local (LTX-2.5 ou FLUX.2 `dev` via
ComfyUI), e **propagação por quadro-chave não-generativa** (EbSynth 2). Os caminhos 1 e 2 são a
tecnologia madura, e estão ali de propósito: são o **grupo de controle**. Sem eles não há comparação,
e sem comparação a oficina vira demonstração.

Não dá para fazer só com tecnologia madura porque a pergunta é sobre **especificabilidade**, não
sobre resultado. Um aplicativo de geração por prompt não tem onde receber "esta pose, neste quadro" —
não é que ele faça pior: ele não tem a entrada. É essa ausência de entrada que o experimento expõe, e
é ela que a seção 4.2 chama de ruptura.

### O que a turma vai fazer quando testar isso em sala

- **Antes de qualquer geração**, a turma escreve a especificação do plano de dez segundos — em grupo,
  por escrito, e **sem ver nenhuma ferramenta**. Isso é deliberado: a especificação precisa existir
  antes e independentemente da interface, ou cada caminho acaba pedindo o que sabe entregar.
- Divide-se em quatro bancadas, uma por caminho. Cada bancada tem um **escriba** que não mexe na
  ferramenta e cujo único trabalho é registrar cada tentativa e o motivo da rejeição.
- Duas pessoas ficam de fora das quatro bancadas e são os **juízes**: recebem só a especificação e os
  resultados sem saber de que caminho vieram, e dizem aceito ou rejeitado, com o motivo.
- No fim, as quatro razões vão para o quadro, junto com a lista de **pedidos que cada caminho não
  conseguiu sequer receber**. Essa segunda lista é a mais interessante, e é a que responde à régua.
- Quinze minutos finais sobre a pergunta que a oficina não mede: **quanto do esforço migrou da
  geração para a escrita da especificação?** Se o grafo baixar a razão mas triplicar o tempo de
  preparação, a raiz 2 continua verdadeira e o efeito `e3` muda de forma — o pipeline vira o ativo,
  mas o custo não cai, só muda de lugar.

### O que seria um resultado que me faria mudar de ideia

**O resultado que derruba este mapa:** o caminho 1 (prompt puro) empatar ou vencer os caminhos 3 e 4
na razão tentativas/aceite, **e** os juízes não conseguirem apontar nenhum pedido da especificação
que só o caminho 3 ou 4 conseguiu atender. Se isso acontecer, o controle fino não está reduzindo o
custo de dirigir nem ampliando o que se pode pedir — é preferência de quem gosta de painel, e a raiz
2 é uma disrupção inventada por quem projeta ferramentas, que é exatamente o viés que declarei na
seção 7.8.

**O resultado que me faria mudar de ideia sem derrubar o mapa:** o caminho 4 — o não-generativo —
vencer os outros três. Isso não mataria nenhuma raiz, mas trocaria a tese: o que está em disputa não
seria "controle sobre geração", e sim "geração versus controle", com a segunda ganhando por enquanto.
Nesse caso a seção 4 precisaria de uma quarta raiz que eu recusei na Fase 2 por reprovar em T4 — e eu
teria recusado errado.

**O resultado que confirmaria o mapa e que eu considero o mais provável:** razões muito diferentes
entre caminhos, com o caminho 3 vencendo em número de tentativas e **perdendo** em tempo total,
porque a preparação do grafo come o que a precisão economiza. Seria a confirmação de `e3` na forma
menos empolgante possível — o pipeline vira o ativo porque **custa caro montar**, e não porque é
mágico. Ativo caro de montar é exatamente o tipo de coisa que se vende.

## 11. Fontes

Vinte e quatro fontes, todas **abertas nesta sessão** (17/09/2026). Fonte que eu não abri não está
aqui — inclusive as que eu gostaria de ter usado e que devolveram erro, que estão registradas na
seção 8 e na 12. Todos os links foram testados com `curl -L`: **23 respondem 200**; a de número 6
(Envato) responde 200 pelo navegador e **403 ao `curl`** por bloqueio anti-robô — está listada porque
eu a li, e o fato está declarado.

**Primárias (documento do próprio emissor)**

1. **Runway — "Introducing Runway Aleph"** · `https://runway.com/research/introducing-runway-aleph`
   25/07/2025. Sustenta a definição de edição in-context e a lista de capacidades da raiz 1:
   *"a state-of-the-art in-context video model"*, adicionar/remover/transformar objetos, gerar
   qualquer ângulo, mudar estilo e luz. **Alta confiabilidade** para o que a empresa afirma sobre o
   próprio produto; nenhuma para verificar se o produto entrega.
2. **Black Forest Labs — "FLUX.2: Frontier Visual Intelligence"** · `https://bfl.ai/blog/flux-2`
   25/11/2025. Sustenta as variantes (`pro`/`flex`/`dev` 32 B/`klein`), o condicionamento por até 10
   referências, edição a 4 MP, o parâmetro explícito de *steps*, e a licença Apache 2.0 do `dev`.
   **Alta** para especificação e licença; declara `klein` como *"coming soon"*, o que contradiz fonte
   secundária (ver seção 8, item 3). Não traz benchmark numérico.
3. **Comissão Europeia — "Code of Practice on Transparency of AI-generated Content"**
   `https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content`
   Sustenta o calendário do art. 50: rascunhos em 17/12/2025 e 03/03/2026, código final em
   10/06/2026, aplicabilidade em 02/08/2026, adesão **voluntária**, ~190 signatárias até o fim de
   julho de 2026, e a divisão entre obrigação de marcação (provedor) e de rotulagem (implantador).
   **Alta** — é o regulador falando do próprio instrumento.
4. **Rive — documentação, "State Machine Overview"** · `https://rive.app/docs/editor/state-machine`
   Sustenta a definição da raiz 3: *"uma forma visual de conectar animações e definir a lógica que
   dirige as transições"*, com estados, transições e Data Binding. **Alta** para a definição;
   a página aberta **não** detalha runtimes nem entradas, o que é uma lacuna real da minha leitura.
5. **Adobe — "Adobe extends leadership in video…"**
   `https://blog.adobe.com/en/publish/2026/04/15/adobe-extends-leadership-video-unleashing-new-ai-powered-creation-firefly-reinventing-color-editors-in-premiere`
   15/04/2026. Sustenta o que entrou em GA (Firefly Video Editor, After Effects 26.2 com Object
   Matte, Premiere 26.2), o Color Mode em beta, e a integração de **Kling 3.0** e **Kling 3.0 Omni**
   ao Firefly. **Alta** para anúncio de produto; é peça de comunicação, então o que ela chama de
   liderança eu leio como disponibilidade.
6. **Adobe — "What's New in Adobe Premiere 26.5 (September 2026)"**
   `https://community.adobe.com/announcements-727/what-s-new-in-adobe-premiere-26-5-september-2026-1641187`
   10/09/2026. Sustenta o argumento de maturidade do H2−: Generative Extend de **360p a 4K UHD**,
   qualquer proporção, entrelaçado e pixel não quadrado; Object Mask com modos **Sharp/Smooth** e
   controle de nitidez sem re-tracking; e a Generative Media Tool na timeline. **Alta** — nota de
   versão.

**Acadêmicas**

7. **Ma, Y. et al. — "Controllable Video Generation: A Survey"** (arXiv 2507.16869)
   `https://arxiv.org/abs/2507.16869` · submetido 22/07/2025, revisado 19/01/2026, 22 autores.
   Sustenta a afirmação central da seção 2 e 3.2: prompts de texto sozinhos são *"frequentemente
   insuficientes para expressar requisitos de usuário complexos, multimodais e de granularidade
   fina"*, e o campo se organiza **por tipo de sinal de controle**. **Alta** como retrato do estado
   da literatura; é survey, então não valida nenhum método individual, e não informa o número de
   trabalhos revisados na página aberta.
8. **Tian, K.; Jiang, Y.; Yuan, Z.; Peng, B.; Wang, L. — "Visual Autoregressive Modeling: Scalable
   Image Generation via Next-Scale Prediction"** (arXiv 2404.02905) · `https://arxiv.org/abs/2404.02905`
   03/04/2024 (v1), rev. 10/06/2024. Melhor artigo do NeurIPS 2024. Sustenta o sinal fraco 1: FID de
   18,65 → **1,73**, IS de 80,4 → **350,2**, ~**20×** de inferência, e leis de potência com
   correlação de ~**−0,998**. **Alta** para os números declarados; como todo paper de geração, os
   números são do próprio autor no próprio benchmark.

**Jornalísticas e de imprensa especializada**

9. **TechCrunch — "ComfyUI hits $500M valuation as creators seek more control over AI-generated
   media"** · `https://techcrunch.com/2026/04/24/comfyui-hits-500m-valuation-as-creators-seek-more-control-over-ai-generated-media/`
   24/04/2026. **A fonte mais importante deste mapa.** Sustenta a raiz 2 inteira: US$ 30 mi a US$ 500
   mi (Craft Ventures, Pace, Chemistry, TruArrow), 4 milhões de usuários, US$ 19 mi de Série A no fim
   de 2024, o cargo *"ComfyUI artist or engineer"*, o uso em VFX/animação/publicidade/design
   industrial, a Weavy comprada pela Figma em 2025, e as três frases de Yoland Yan (60–80%, a caixa
   de prompt, o AI slop). **Alta** para os fatos de rodada; as frases são do CEO da empresa
   financiada — é parte interessada, e eu as uso sabendo disso (declarado na seção 7.8).
10. **CineD — "Hell Grind: The 95-Minute AI Feature Cannes 2026 Says It Never Screened"**
    `https://www.cined.com/hell-grind-the-95-minute-ai-feature-cannes-2026-says-it-never-screened/`
    28/05/2026. Sustenta o número que abre este documento — **16.181 gerações para 253 planos** nos
    primeiros 25 minutos —, os prompts de ~3.000 palavras, ~15 s por tentativa, US$ 500 mil com
    ~US$ 400 mil de compute, 15 pessoas, 14 dias, Almaty, Nebius e CoreWeave, a física escrita no
    prompt (*"no floating props"*), e a desmentida de Cannes. **Alta** — é a única fonte que dá o
    denominador, e é a que corrige a narrativa das demais.
11. **Wikipedia — "Hell Grind"** · `https://en.wikipedia.org/wiki/Hell_Grind`
    Sustenta direção (Aitore Zholdaskali, corroteiro de Adilkhan Yerzhanov), ferramentas (Higgsfield
    Soul Cinema, Soul Cast, Seedance 2.0), 95 minutos, e a nota de que foi *"exibido num evento de
    indústria, não no festival oficial"*. **Média** — enciclopédia colaborativa, usada aqui só para
    ficha técnica, e apenas onde o CineD corrobora.
12. **Cartoon Brew — "Hope, AI, And Indies: The Contradictions That Defined Annecy 2026"**
    `https://www.cartoonbrew.com/festivals/annecy-2026-festival-wrap-263908.html` · 29/06/2026.
    Sustenta a força contrária cultural: vaias e gritos na estreia de *Danse Macabre*, de Hisko
    Hulsing, a resposta do diretor artístico Marcel Jean, os dois campos da indústria, e a frase que
    resume o estado do debate. **Alta** dentro do nicho — é a publicação de referência do setor de
    animação, e estava na sala.
13. **CG Channel — "EbSynth 2 can turn video into animation without using AI"**
    `https://www.cgchannel.com/2025/10/ebsynth-2-can-turn-video-into-animation-without-using-ai/`
    06/10/2025. Sustenta o contraexemplo mais útil do mapa: propagação por **síntese de textura**,
    preservando o quadro-chave **no nível do pixel**, *"sem usar IA para propagar as alterações"*;
    Secret Weapons; grátis até 720p, US$ 20/mês para 4K. **Alta** — publicação técnica do setor, com
    descrição de mecanismo e não só de resultado.
14. **Open Source For You — "LTX-2.5 Brings Open-Weight Video Generation"**
    `https://www.opensourceforu.com/2026/08/ltx-2-5-brings-open-weight-video-generation/` · 21/08/2026.
    Sustenta a viabilidade local da raiz 2: 22 B de parâmetros, fluxo duplo assimétrico vídeo+áudio,
    Gemma 4 de 12 B como codificador de texto, 720p a 4K HDR, 6–20 s, destilado em **oito passos**,
    FP8 com −40% de memória, **a partir de 16 GB de VRAM**, ComfyUI e Diffusers, LTX-2 Trainer.
    **Média-alta** — imprensa técnica reportando especificação de fabricante; os números são do
    fabricante.
15. **3DArt — "Cavalry Pro Is Now Completely Free – The After Effects Alternative Rides In"**
    `https://www.3dart.it/en/cavalry-pro-is-now-completely-free-the-after-effects-alternative-rides-in/`
    17/04/2026. Sustenta o sinal datado da raiz 3: aquisição pela **Canva em fevereiro de 2026**, Pro
    gratuito para pessoas físicas (rigs procedurais, render em tempo real, ferramentas orientadas a
    dados, física), enterprise/educação seguem pagos, e a frase de Ian Waters sobre o grafo de nós.
    **Média** — blog especializado; o fato da aquisição é público e corroborado por outras buscas,
    mas não abri o comunicado da Canva.
16. **Pexo — "What Is Runway Aleph 2.0? In-Context Video Editing Model Explained"**
    `https://pexo.ai/blog/what-is-runway-aleph-2-0-6791`
    Sustenta as especificações do Aleph 2.0: lançamento em **21/05/2026** com o Edit Studio, 2–30 s,
    480p–1080p, **até 10 cortes**, **até 5 imagens-âncora a 0,01 s**, ~150 créditos por 10 s,
    pré-visualização em imagem, e depreciação do Gen-4 Aleph em **30/07/2026**. **Baixa-média, e
    declarada como tal** — é fonte secundária que afirma citar o anúncio oficial da Runway, e eu
    **não consegui abrir esse anúncio** (seção 8, item 6). Tudo o que este documento diz sobre o
    Aleph 2.0 é reportado, não confirmado na origem.

**Pesquisa de mercado e levantamentos (com conflito de interesse declarado pelos próprios)**

17. **Kapwing — "The TikTok AI Slop Report"** · `https://www.kapwing.com/resources/the-tiktok-ai-slop-report/`
    09/06/2026. Sustenta o regime de volume: **10.742 vídeos** em 20 categorias + 500 do feed de uma
    conta nova; **59%** do feed inicial classificado como AI slop, **21%** no YouTube Shorts,
    **57,4%** em conteúdo infantil; Ciência e Educação 35,0%, Saúde 33,8%, História 33,5%; Fitness,
    Música e Moda abaixo de 2%. **Média** — a própria Kapwing declara: vende edição de vídeo, a
    classificação é manual e subjetiva, e a coleta encerrou em maio de 2026. Usei pelos números e
    pela transparência do método, não pela neutralidade.
18. **Envato — "Beyond Adoption: The State of AI in Creative Work"**
    `https://elements.envato.com/learn/ai-trend-report` · 12/11/2025, **1.780 profissionais
    criativos**, global. Sustenta a maturidade da geração por prompt: quase metade usando IA
    diariamente (Z 54%, millennials 47%, X 45%; dev web 65%, marketing 60%, criadores e 3D 58%,
    design gráfico e ilustração 40%), **58% já usaram IA em trabalho de cliente sem contar**, 31%
    sempre revelam, e a IA descrita como *"infraestrutura"*. **Média** — empresa que vende ativos
    criativos; amostra autosselecionada da própria base. Responde 200 no navegador e **403 ao
    `curl`**.
19. **Deloitte — "Gen AI video disruption" (TMT Predictions 2026)**
    `https://www.deloitte.com/us/en/insights/industry/technology/technology-media-and-telecom-predictions/2026/gen-ai-video-disruption.html`
    18/11/2025. Sustenta o enquadramento regulatório e o dado de publicidade citado pela própria
    Deloitte (relatório do IAB de 2025: quase **90% dos anunciantes** usando IA generativa em anúncio
    em vídeo), além da previsão de resposta regulatória nos EUA. **Média-alta** para o enquadramento;
    **não** traz número de custo de produção, ao contrário do que um resumo de busca sugeria.

**Jurídicas e regulatórias**

20. **Esquire Deposition Solutions — "Federal Judges Set Bar for Deepfake Evidence Challenges"**
    `https://www.esquiresolutions.com/federal-judges-set-bar-for-deepfake-evidence-challenges/`
    07/05/2026, sobre survey do **Federal Judicial Center de 25/03/2026**. Sustenta a inércia
    probatória que rebaixou `e2.1`: **931 juízes** respondendo (45%), **15** com experiência de
    contestação, **745 de 914 (82%)** exigindo demonstração inicial, a distribuição do que aceitariam
    (42% prova mínima, 35% argumento de boa-fé, 3% perícia, 3% depoimento, **4% inversão de ônus**,
    6% depende), e a não-progressão das Regras 707 e 901(c) em maio de 2026. **Alta** — reporta
    survey oficial do braço de pesquisa do Judiciário federal americano, com n e taxa de resposta.
21. **Migalhas — "Guia Conar 2026: o que todo influenciador precisa saber agora"**
    `https://www.migalhas.com.br/depeso/456124/guia-conar-2026-o-que-todo-influenciador-precisa-saber-agora`
    Sustenta o recorte brasileiro: guia publicado em **13/05/2026**, aplicação integral do CBAP
    independentemente da tecnologia, **ausência** de obrigação de informar uso de IA — o documento
    declara não tratar de *"diretrizes ou deveres novos sobre disclosure do uso de IA na produção de
    conteúdo"* —, e a responsabilidade solidária de anunciante e agência. **Alta** para o conteúdo do
    guia; é artigo de opinião jurídica, e a recomendação de fazer disclosure mesmo assim é da autora,
    não do CONAR. *(Uma segunda apuração dava 12/05 como data de publicação; adotei 13/05, que é a da
    fonte que abri.)*
22. **O Desinformante — "Votação do marco da IA fica para 2026…"**
    `https://desinformante.com.br/votacao-do-marco-da-ia-fica-para-2026-em-meio-a-impasses-politicos-e-criticas-ao-texto`
    19/12/2025. Sustenta o estado do **PL 2338/2023**: aprovado no Senado, parado na Câmara,
    adiamento, e os pontos de impasse — **uso de obras protegidas em treinamento**, classificação de
    risco e reconhecimento facial. **Média-alta** — veículo especializado em desinformação e política
    de plataformas; a previsão de fevereiro de 2026 que ele registra **não se cumpriu**, o que é ele
    próprio um dado sobre o ritmo.

**Setoriais**

23. **SoftwareSeni — "C2PA Adoption in 2026: Hardware, Platforms and Verification Reality"**
    `https://www.softwareseni.com/c2pa-adoption-in-2026-hardware-platforms-and-verification-reality/`
    03/03/2026. Sustenta a seção 3.3 inteira: Pixel 10 assinando por padrão, Leica SL3-S (jan/2025),
    Nikon Z6 III adicionando e **suspendendo** por vulnerabilidade (ago/2025), Galaxy S25 assinando
    só edição por IA, Sony PXW-Z300 na IBC 2025, Cloudflare (fev/2025), **C2PA 2.3** de dez/2025 com
    CMAF ao vivo, o programa de conformidade de meados de 2025 — e os limites: remoção de metadado na
    transcodificação, **menos de 1% das imagens ou vídeos de notícia** com C2PA, engajamento do
    usuário *"muito baixo"*, e a frase que define o padrão: ele *"registra o que foi declarado no
    momento da assinatura — é procedência, não detecção"*. **Média** — consultoria de software
    escrevendo panorama; as afirmações datadas são verificáveis uma a uma, a de "<1%" não tem a
    origem indicada na página e é o número mais importante dela, o que é um problema.
24. **Context / Thomson Reuters Foundation — "Hollywood animation, VFX unions fight AI job cut
    threat"** · `https://www.context.news/ai/hollywood-animation-vfx-unions-fight-ai-job-cut-threat`
    **08/04/2024** — e a data é o ponto. Sustenta o estudo da CVL Economics como **projeção de 2024**:
    **mais de 100 mil postos em risco até 2026** em 550 mil, 75% dos executivos já tendo eliminado,
    reduzido ou consolidado postos, ~33% prevendo deslocamento de modeladores 3D, 25% de designers
    gráficos, 15% de storyboarders/ilustradores/animadores; as falas de **Sam Tung** (*"vai girar em
    torno de controle"*) e **Mark Patch**. **Média-alta** como reportagem; **baixa** como retrato de
    2026, porque é de 2024 — e foi exatamente aí que a máquina errou (seção 8, item 2).

## 12. Anexo — o levantamento bruto

Sem edição e sem limite. Tudo o que foi levantado e não coube acima: a entrevista, o recorte fechado,
a triagem completa da Fase 2, os efeitos que morreram com o `id` original e a prova que os matou, as
rodadas descartadas, os caminhos abandonados, as buscas que não deram em nada, e a autochecagem.

### 12.1 A Fase 1 — a entrevista, como ela correu

A skill é bloqueante na Fase 1: as nove perguntas saem **de uma vez**, numeradas, em uma única
mensagem, e nada se produz antes de o recorte estar fechado e confirmado. Nesta rodada não havia
interlocutor humano disponível para responder em tempo real; as respostas vieram no próprio pedido,
por escrito e antes de qualquer execução, o que cumpre a função da fase (fechar horizonte, público,
região, exclusões e falsificador antes de rodar) mas **não cumpre o echo-back com confirmação
explícita**, que a skill exige e que eu registro aqui como não cumprido. As perguntas, e o que
recebi:

1. **TEMA E FRONTEIRA** — "Mídia sintética controlável: vídeo e imagem". Fronteira derivada do bloco
   da disciplina: **não é** a história gerada (tema 8), **não é** som e voz (tema 13), **não é**
   design procedural puro sem IA como campo (tema 14). Acrescentei dois cortes meus, declarados na
   seção 2: **não é** reconstrução 3D e renderização neural (tema 10), e **não é** percepção /
   vocabulário aberto (tema 11) — o lado de *ler* a imagem, que foi o tema da rodada anterior desta
   mesma skill.
2. **HORIZONTE** — 2031.
3. **RECORTE GEOGRÁFICO** — global, com nota sobre o Brasil (seção 3.4 e 5.1).
4. **PARA QUEM** — quem projeta mídia e interação.
5. **O QUE JÁ ESTÁ DESCARTADO** — o que já é comum em produto de massa (a régua da disciplina);
   nenhuma outra exclusão. É a exclusão mais consequente do recorte: ela é o que obriga a Fase 2 a
   recusar geração por prompt, que é o que 90% das conversas sobre este tema tratam.
6. **VIÉS** — neutro.
7. **O QUE ME FARIA MUDAR DE IDEIA** — evidência de que a adoção já passou da maioria inicial
   (Rogers), ou de que a tecnologia não rompe nada (só melhora o que existe). Tratado na seção 7.9.
8. **QUANTAS DISRUPÇÕES-RAIZ** — o pedido especificou "profundidade: três ordens" e não o número de
   raízes. **Suposição minha: 3**, declarada. Cheguei a ter quatro candidatas (a quarta era
   arquitetura não-difusão) e a Fase 2 a rebaixou a sinal fraco, o que fez a suposição coincidir com
   o resultado.
9. **EU POSSO NAVEGAR?** — sim, com WebSearch e WebFetch, e com a instrução explícita de só citar o
   que abrisse. Portanto a **Regra F3 não se aplica**: a seção 3 e a 11 não saem marcadas como não
   verificadas, e a `confianca` do frontmatter não foi forçada a `baixa` por falta de navegação. Ela
   é `media` por mérito, e pelos motivos da seção 7.

**Perguntas condicionais (máximo uma segunda rodada, e só nos casos previstos).** Duas se
aplicariam, e as duas eu resolvi sozinho por não haver interlocutor — ambas declaradas:

- *A fronteira colide com um vizinho.* Colide com o tema 11 em "visão", com o 14 em "procedural" e
  com o 7 em "mundo jogável". Resolvi assim: o objeto aqui é **fazer** imagem em movimento
  dirigível; a Cavalry e o Graphite entram porque o controle por regra disputa com o controle por
  prompt, e não como capítulo de design generativo; o Genie e o Matrix-Game entram só como sinal do
  mesmo vetor, na seção 3.2 e em `e6`, e não como raiz.
- *Horizonte coerente com o tema?* Cinco anos para software de mídia é longo — o ciclo medido aqui é
  de doze meses (Aleph → Aleph 2.0 → depreciação). A consequência prática foi concentrar a primeira
  ordem em 2028–2029, bem dentro do horizonte, e aceitar que a terceira ordem (2032–2034) o
  ultrapasse, como a calibração da Fase 4 permite.

### 12.2 O recorte fechado (bloco emitido antes de rodar)

```
RECORTE FECHADO — confirme antes de eu rodar
  tema ................ Mídia sintética controlável: a imagem em movimento como mídia dirigível
  não é ............... história gerada (8) · som e voz (13) · procedural sem IA como campo (14)
                        · reconstrução 3D e renderização neural (10) · percepção/vocabulário
                        aberto (11)
  horizonte ........... 2031
  região .............. global, com nota sobre o Brasil
  público ............. quem projeta mídia e interação
  descartado .......... o que já é comum em produto de massa (régua da disciplina)
  viés ................ neutro
  falsificador ........ adoção já além da maioria inicial (Rogers), ou tecnologia que só
                        melhora o existente
  raízes .............. 3
  navegação ........... sim (WebSearch + WebFetch; só citar o que abrir)
  SUPOSIÇÕES MINHAS ... (a) número de raízes = 3, não especificado no pedido;
                        (b) dois cortes de fronteira acrescentados por mim (temas 10 e 11);
                        (c) echo-back sem confirmação humana — não houve interlocutor
Confirma, ou corrige algum campo?
```

### 12.3 A Fase 2 completa — a tabela de triagem, item a item

Cada candidata passou pelos cinco testes na ordem. Uma reprovação em T1, ou uma aprovação em T5,
encerra.

| Candidata | T1 régua | T2 substituição | T3 por que agora | T4 precondição | T5 rotina | Veredicto | Horizonte |
|---|---|---|---|---|---|---|---|
| Geração de imagem por prompt | passa | reprova | passa | reprova | **aprova** | **MADURO** | H1 |
| Geração de vídeo por prompt (texto puro) | passa | reprova | passa | reprova | **aprova** | **MADURO** | H1 |
| Generative Extend / Object Mask / Object Matte | **reprova** | — | — | — | — | **MADURO** | **H2−** |
| Motion graphics em timeline (After Effects) | **reprova** | — | — | — | — | **MADURO** | H1 |
| Upscaling / restauração (Magnific e afins) | **reprova** | — | — | — | — | **MADURO** | H2− |
| Áudio sincronizado no mesmo modelo | reprova *(por recorte)* | — | — | — | — | fora do tema | — |
| Edição in-context com âncoras (Aleph 2.0) | passa | passa | passa | passa | não | **DISRUPTIVO** | **H2+** |
| Controle estrutural sobre pesos abertos | passa | passa | passa | passa | não | **DISRUPTIVO** | **H2+** |
| Animação como máquina de estados | passa | passa | passa | passa | não | **DISRUPTIVO** | **H2+** |
| Arquitetura não-difusão (VAR) | passa | passa | passa | passa | não | **EMERGENTE**, não disruptivo | H3 |
| Procedência criptográfica (C2PA) | passa | passa | passa | passa | não | **EMERGENTE**, condição de contorno | H2+ |
| Propagação não-generativa (EbSynth 2) | passa | passa | passa | **reprova** | não | **EMERGENTE**, já chegou | H2+ |
| Geração jogável em tempo real (Genie) | passa | passa | passa | passa | não | **EMERGENTE**, é tema 7 | H3 |

**Os dois vereditos que mais custaram, e o raciocínio inteiro:**

**Por que o VAR não virou raiz.** Ele passa em T1 com folga: predição por próxima escala não é o
mesmo processo que remoção de ruído, e as leis de potência com correlação de −0,998 sugerem um
regime de escalonamento que a difusão não tem. Passa em T3 (melhor artigo do NeurIPS 2024) e em T4
(falta um modelo de ponta comercial construído sobre isso). **Onde ele falha é na porta de entrada**,
que a definição de disruptivo exige nomear: ele não entra pela baixa do mercado (não atende cliente
que o incumbente despreza — atende o mesmo cliente, com o mesmo produto, melhor e mais rápido) nem
por mercado novo (não cria não-clientes). Pela régua de Christensen, isso é **sustentação**. E a
evidência empírica sustenta o veredicto: dois anos e meio depois do prêmio, FLUX.2, LTX-2.5 e Aleph
seguem difusão. Foi para a seção 6 como sinal fraco 1, com o gatilho declarado — um modelo comercial
de **vídeo** autoregressivo por escala.

**Por que o EbSynth 2 não virou raiz, apesar de ser a coisa mais controlável do levantamento.** Ele
reprova em **T4**: não consigo nomear o que ainda falta acontecer. A técnica está pronta, roda em
navegador, custa US$ 20/mês, e não depende de nenhuma precondição futura. Tecnologia sem precondição
faltante não tem futuro a mapear — tem uso. Ficou na seção 3.2 como estado da arte, e virou o
**caminho 4 do experimento**, onde ele é o grupo de controle mais interessante: se o não-generativo
vencer a razão tentativas/aceite, a tese do mapa muda de forma (seção 10).

### 12.4 Os efeitos que a Fase 5 matou

Sete mortos, com o `id` original e a prova que os matou. Nada desaparece em silêncio.

**`e1.3` — "Um estúdio de uma pessoa produz o que exigia trinta, e a produção audiovisual deixa de
ser indústria de equipe."**
Morto por **P3 (já aconteceu)** e por **P1 (extrapolação linear)**. P3: `Hell Grind` foi feito por
**15 pessoas em 14 dias**, e isso é maio de 2026, não 2029 — é presente, e foi para a seção 3.5. P1:
como enunciado, é o presente em outro volume — menos gente fazendo a mesma coisa, mesmo ator, mesmo
mecanismo. Não há ator novo. O que sobrou dele é honesto e menor: `e1.2`, sobre a **rubrica** do
orçamento, que muda o comportamento de quem aprova.

**`e1.2.1` — "Surge a figura contratada para reduzir a razão geração/plano, paga por acerto na
primeira tentativa e não por hora."**
Morto por **P3**. Já existe, com dois nomes: os prompts de **3.000 palavras com física explícita** do
`Hell Grind` e o cargo **"ComfyUI artist or engineer"** que a TechCrunch registra em vagas. Foi para
a seção 3.1. Consequência estrutural: `e1.2` ficou **sem filho** e o galho para na segunda ordem, o
que a minha regra de parada permite explicitamente.

**`e2.3` — "Nasce um mercado de autenticidade certificada como serviço pago, e verificar procedência
vira linha de receita."**
Morto por **P4 (força contrária)**. Quem perde com procedência funcionando é a **plataforma**, porque
a cadeia quebra exatamente no ponto dela — remoção de metadado no upload, na transcodificação e na
recodificação não é sabotagem, é o caminho técnico mais barato, e ninguém tem incentivo para mudá-lo.
Eu não tinha modelado essa força. Os números fecham contra o efeito: **menos de 1% das imagens e
vídeos de notícia** carregam C2PA, o engajamento do usuário com as credenciais é "muito baixo", e o
padrão **registra declaração, não detecta manipulação**. Rebaixado a sinal fraco 2 na seção 6, com o
gatilho que o ressuscitaria: uma agência de notícias grande recusando material não assinado, ou uma
plataforma condicionando **monetização** a cadeia assinada (wildcard C).

**`e3.3` — "A publicidade deixa de contratar produtora e passa a produzir internamente."**
Morto por **P2 (velocidade de adoção)** e por **P4**. P2: não há caso histórico comparável de
substituição de fornecedor nessa velocidade; adoção de ferramenta (83%, 63%, escolha o número) **não
é** internalização de função — é o erro de leitura mais comum das pesquisas de adoção. P4: no Brasil
o Guia CONAR de 13/05/2026 mantém **responsabilidade solidária** de anunciante e agência, o que é
razão contratual direta para manter um fornecedor identificável e assegurável; na Europa o art. 50
cria obrigação de marcação cujo descumprimento custa até 3% do faturamento global, e ninguém
internaliza risco desse porte para economizar produção. O efeito sobrevivente e mais fraco é `e3.1`:
o que muda é **o que se compra da produtora** (sistema em vez de peça), não se ela existe.

**`e4.3` — "A geração por difusão é substituída por arquitetura autoregressiva até 2031."**
Morto por **P5 (precondição única)** e por **P6 (camada)**. P5: o galho inteiro penderia de uma só
aposta arquitetural, e se ela falhasse morreriam todos os descendentes juntos. P6: o efeito é
verdadeiro **só na litania** — "GPT vence difusão" é uma manchete excelente e uma afirmação sobre
benchmark de ImageNet em 2024; abaixo dela, a causa sistêmica (por que uma arquitetura vence em
produção) aponta para ecossistema de ferramentas, adaptadores de controle e pesos abertos, e todos
eles estão construídos sobre difusão. Virou sinal fraco 1.

**`e5.3` — "Todo vídeo vira interativo."**
Morto por **P1** e por **P6**. P1: é "mais interatividade" — nenhum ator novo, nenhum mecanismo novo,
e a frase é enunciável como intensificação do presente. P6: pura litania; abaixo dela não há
mecanismo que explique por que alguém pagaria para tornar interativo um vídeo cuja função é ser
assistido. O que sobreviveu é o recorte estreito e defensável: `e5.2.1` — dentro de **produto
digital**, o vídeo como formato de entrega perde lugar; fora dele (transmissão linear, sala escura),
não perde. Este era o candidato a efeito mais bonito do mapa, e é por isso que ele tinha de morrer.

**`e6.3` — "O cinema incorpora geração em tempo real na sala, e a sessão passa a ser única."**
Morto por **P4** e por falta de **T3**. P4: exibidor, distribuidor, contrato de janela e sindicato de
projeção não foram modelados, e todos perdem. Sem sinal datado dos últimos 24 meses de qualquer
exibidor testando isso — busquei e não achei (12.7). Efeito bonito, zero evidência.

**Rebaixamentos (três), que também contam como dano:**

- **`e2.1`** — de `confianca: media` para **`baixa`**, por **P2**. Motivo na seção 7.2: 2% dos juízes,
  regras 707 e 901(c) paradas, e regime probatório mudando em décadas.
- **`e5.2`** — de `sinal: medio` para **`fraco`** e de `media` para **`baixa`**, por **P1**: é quase
  "mais convergência".
- **`e4.1`** — mantido, mas com a confissão registrada em 7.4: **eu não modelei quem perde**, e quem
  perde é a própria ComfyUI, cuja avaliação depende de o grafo **não** ser portátil. Pela P4 estrita
  ele deveria ter morrido. Ficou com `confianca: baixa` e a falha declarada, o que é uma solução
  intermediária que eu não considero satisfatória.

**Cota mínima de dano — verificação:** raiz 1 perdeu `e1.3` e `e1.2.1` e teve `e2.1` rebaixado; raiz 2
perdeu `e3.3` e `e4.3`; raiz 3 perdeu `e5.3` e `e6.3` e teve `e5.2` rebaixado. **Pelo menos um efeito
eliminado por raiz: cumprido nas três.** A bateria derrubou coisa, e derrubou o que doía — `e1.3` e
`e5.3` eram as duas frases mais citáveis do rascunho.

### 12.5 A rodada descartada — o mapa que eu escrevi primeiro e joguei fora

O primeiro recorte que montei tinha as raízes assim:

1. Vídeo generativo atinge qualidade de produção.
2. O custo de produção audiovisual desaba.
3. A distinção entre real e sintético desaparece.

**As três reprovam.** A primeira e a segunda reprovam em **T1**: descrevem velocidade e custo de algo
que já se fazia — filmar e editar —, e são exatamente o H2− que a Three Horizons existe para nomear.
A terceira reprova em **T3 e T4**: "desaparece a distinção" não tem sinal datado (é uma tendência
narrada desde 2019) nem precondição nomeável, e é uma litania clássica — sobrevive como manchete e
morre quando se pergunta pelo mecanismo. Rodar a roda sobre essas três teria produzido um mapa
coerente, plausível e inteiramente inútil: ele teria derivado consequências corretas de um centro
maduro, que é o erro que a Fase 2 existe para impedir.

O recorte que ficou nasceu de uma frase do bloco da disciplina — *"a mídia sintética está deixando de
ser loteria e virando instrumento"* — cruzada com um número que eu não esperava encontrar: **64:1**.
Foi o número que reorganizou o mapa, porque ele transforma "controle" de adjetivo em medida.

### 12.6 Caminhos abandonados

- **Mapear por ferramenta.** Cheguei a esboçar uma raiz por família de ferramenta (Pika/região,
  EbSynth/quadro-chave, Cavalry/regra, ComfyUI/grafo, Rive/estado), seguindo a amostra do professor.
  Abandonado: vira lista de tecnologias, não mapa — e o próprio limite da skill ("mais de 4 raízes
  vira lista") é sobre isso. As famílias viraram **evidência** das três raízes, e não raízes.
- **Tratar C2PA como quarta raiz.** Abandonado porque procedência **reage** à mídia sintética; não a
  produz. Uma raiz tem de ser motor. Virou condição de contorno, força contrária (P4) e o galho `e2`.
- **Usar o Hype Cycle para posicionar o tema.** Abandonado por razão registrada no meu `ESTUDO.md`:
  a curva não é validada empiricamente (Steinert & Leifer 2010; Dedehayir & Steinert 2016; Mullany
  revisando 200+ tecnologias de 2000 a 2016, com um quinto obsoleto antes do mainstream). Ela serve
  para perguntar "isto está inflado?" e não serve para prazo — e prazo é metade do que a roda pede.
  Onde ela **teria** ajudado: a geração por prompt em 2026 tem todos os sinais de pico seguido de
  desilusão, e "slop" como palavra do ano de três dicionários em dezembro de 2025 é o vocabulário
  típico do vale. Isso está incorporado ao raciocínio, sem o método ser citado como prova.
- **Quadrante Mágico.** Descartado por definição: mede fornecedor em mercado já definido, e
  tecnologia emergente o bastante para merecer uma roda não tem quadrante.
- **Buscar o mercado brasileiro de produção audiovisual com números.** Tentei e desisti: as buscas
  devolveram consultoria de SEO e nenhum levantamento setorial aberto com metodologia. A nota
  brasileira ficou restrita ao que consegui abrir — CONAR e PL 2338 —, o que é pouco e está
  declarado como lacuna.

### 12.7 Buscas que não deram em nada

- **Exibidor de cinema testando geração em tempo real em sala.** Nada. Foi o que matou `e6.3`.
- **Página oficial do Runway Aleph 2.0.** A busca devolve terceiros; a página de pesquisa da Runway
  que abre é a do Aleph original (25/07/2025). **Não consegui apurar** o anúncio primário do 2.0.
- **VFX Voice — "Entering 2026, VFX/Animation Industry Balances Uncertainty and Opportunity"**:
  **HTTP 403**. Era a fonte que daria o retrato setorial de 2026 com falas de estúdio; não tem
  substituto no material que reuni.
- **Variety — "Annecy 2026: 10 Takeaways"**: redireciona para domínio de paywall e devolve
  **HTTP 402 – Payment Required**. Substituída pelo Cartoon Brew.
- **Adobe helpx — visão geral do Generative Extend**: **HTTP 403**. Substituída pela nota de versão
  do Premiere 26.5 na comunidade Adobe, que traz o mesmo dado de resolução.
- **Número de usuários pagantes da ComfyUI.** Não publicado. É a fragilidade central de `e3`
  (seção 7.2): 4 milhões de usuários de ferramenta gratuita não são 4 milhões de profissionais.
- **Levantamento independente e auditado de adoção de controle fino** (ControlNet/IC-LoRA em produção
  comercial). Não existe, até onde busquei. É exatamente o dado que falsificaria ou confirmaria a
  raiz 2, e é por isso que o experimento da seção 10 mede o que mede.
- **Dados de emprego em animação e VFX no Brasil.** Nada aberto e metodologicamente utilizável.

### 12.8 Material levantado que não coube nas seções acima

- **Kling 2.6 Pro** replica movimento humano por vídeo de referência; **Veo 3.1** aceita primeiro e
  último quadro como chaves com interpolação; **Sora 2** vai a 15 s contra os 8 s do Veo; quatro dos
  seis grandes modelos geram áudio sincronizado nativamente. Tudo isso reforça a tese do controle —
  o fluxo dominante é **gerar o quadro-chave primeiro e animar depois** —, e nada disso entrou no
  corpo porque veio de comparativos de blog que eu não abri, e a regra é não citar o que não abri.
- **Pika** (os efeitos por região do quadro da amostra do professor) aparece nas buscas com ~16
  milhões de usuários e avaliação de ~US$ 900 milhões, com Pikaffects como sistema de efeitos
  pré-definidos. Não abri fonte primária e por isso não está no corpo — mas registro a leitura: o
  Pikaffects é controle **por catálogo** (escolher "derreter"), que é o oposto do controle por sinal
  estrutural; é a versão de consumo da mesma ideia, e é o que a raiz 2 recusa.
- **Weavy comprada pela Figma em 2025** e **Figma Motion** em 2026 apontam para o mesmo movimento do
  lado da ferramenta de design: o incumbente de interface entrando no controle de movimento. Isso
  torna a força contrária de 7.4 (o incumbente absorvendo o controle) mais forte do que o texto
  sugere.
- **Números de mercado que eu vi e não usei:** animação+VFX avaliados em ~US$ 220 bi em 2026 com CAGR
  de 11,86% até 2031 (Mordor); VFX puro em ~US$ 27,6 bi (Research Nester); animação global em ~US$ 450
  bi crescendo 6–7%; perda de 6.700 postos no setor de cinema e som do condado de Los Angeles no ano
  até maio de 2026. **Nenhum deles entrou no corpo** porque vieram de agregadores de estatística sem
  metodologia aberta, e porque o padrão "mercado cresce, emprego não" é exatamente o tipo de
  afirmação que soa verdadeira e que eu não consigo verificar. Registro aqui para que outra pessoa
  possa rastrear.
- **Odyssey a 40 ms/quadro** contra os 41,6 ms que 24 fps exigem: a métrica mais elegante que
  encontrei sobre jogabilidade de modelo generativo. Está na seção 3.2; não virou efeito porque é
  tema 7.
- **Deloitte/IAB: quase 90% dos anunciantes usando IA generativa em anúncio em vídeo.** Usado na
  seção 11 (fonte 19) e deliberadamente **não** usado como evidência de efeito, porque "usar IA
  generativa em algum ponto do processo" é a afirmação mais elástica de todo este levantamento.

### 12.9 Notas de método desta rodada

- **A regra de parada é minha, e foi usada três vezes.** A literatura da Futures Wheel não traz
  critério de parada — Glenn descreve anéis concêntricos e não diz quantos. Expandi um nó só quando o
  filho mudava de **ator** ou de **mecanismo**. Parei o galho na segunda ordem em `e1.2` (o filho já
  era presente), e mantive fora da árvore, como nota de convergência em prosa (5.1), o efeito que só
  existe com **duas raízes** — o artefato que é ao mesmo tempo grafo de geração e máquina de estados.
- **Three Horizons entrou na Fase 2 e não na roda**, porque a roda não tem noção de maturidade:
  ela deriva consequências de qualquer coisa posta no centro, inclusive de tecnologia madura. O H2−
  é o nome preciso do erro que a régua da disciplina persegue, e foi onde caiu o Generative Extend.
- **CLA entrou na Fase 5 e não na roda**, e produziu o achado mais importante da seção 7: o mapa
  inteiro repousa sobre "controle é valor", e os 59% do feed do TikTok são a evidência de que existe
  um regime concorrente — selecionar por desempenho em vez de especificar — em que o mapa troca de
  sinal sem que um fato mude.
- **Nenhum dos três métodos atribui probabilidade, nenhum é validado empiricamente, e nenhum impede
  um mapa internamente coerente de estar inteiramente errado.** Os `prazo` deste documento são
  apostas, e estão escritos como apostas.
- **Autoria dos métodos**, conferida no meu `ESTUDO.md` e não recitada de memória: Futures Wheel,
  **Jerome C. Glenn, 1971** (1972 é a entrada na literatura, não a invenção). Three Horizons, 2006,
  **Hodgson, Curry, Leicester, Sharpe, Lyon e Fazey** — seis autores, não dois. Causal Layered
  Analysis, **Sohail Inayatullah, 1998**, *Futures* 30(8):815–829. Emergente: **Rotolo, Hicks &
  Martin (2015)**, *Research Policy* 44(10):1827–1843. Disruptivo: **Bower & Christensen (HBR,
  jan–fev 1995)**, *The Innovator's Dilemma* (1997) e a correção em **Christensen, Raynor & McDonald
  (HBR, dez 2015, pp. 44–53)**. Efeitos de 1ª/2ª/3ª ordem: **sem origem canônica**, e isso é dito de
  propósito, porque é o item mais fácil de "citar" com fonte inventada.

### 12.10 As quatro perguntas do teste cruzado, respondidas sobre esta rodada

1. **Fez perguntas antes de rodar?** **Sim, com uma ressalva.** Fase 1, seção 12.1: as nove perguntas
   foram emitidas de uma vez e o bloco `RECORTE FECHADO` está em 12.2 com as suposições listadas. A
   ressalva, declarada e não escondida: **não houve confirmação explícita de um interlocutor**, e a
   skill exige echo-back confirmado. Nada foi produzido antes do recorte estar fechado por escrito.
2. **Separou novidade de comum, e recusou o comum?** **Sim.** Fase 2, seção 4.0 e tabela em 12.3.
   Recusados com o teste nomeado: geração de imagem por prompt (**T5**), geração de vídeo por prompt
   (**T5**), Generative Extend / Object Mask / Object Matte (**T1**, e classificado **H2−**), motion
   graphics em timeline (**T1**), upscaling (**T1**). Além disso, dois **emergentes** foram recusados
   como raiz por não serem disruptivos: VAR (sem porta de entrada nomeável) e EbSynth 2 (**T4**).
3. **Duvidou do próprio resultado?** **Sim.** Fase 5, seção 7, com as seis provas aplicadas citando
   `id`. Cota de dano cumprida nas três raízes: mortos `e1.3`, `e1.2.1`, `e2.3`, `e3.3`, `e4.3`,
   `e5.3` e `e6.3` (seção 12.4), e rebaixados `e2.1`, `e5.2` e a confissão sobre `e4.1`. A seção 7.4
   registra uma falha que eu **não** corrigi (não modelei quem perde em `e4`), em vez de escondê-la.
4. **Saiu no formato?** **Sim**, com a autochecagem rodada e o resultado colado abaixo em 12.11 —
   `grep -c "^## "` imprimindo 12, frontmatter com os 18 campos, bloco `roda:` como YAML válido, `id`
   hierárquico, três níveis, prazos monotônicos, nenhuma pergunta como efeito, contadores conferidos
   contra a árvore **depois** dos cortes, e a cota de humildade na terceira ordem.

### 12.11 Autochecagem — comando e saída

Rodado em 17/09/2026, sobre a versão final do arquivo, **depois** dos cortes da Fase 5.

```
$ grep -c "^## " tendencia-midia-sintetica-controlavel-video-e-imagem.md
12

$ python3 autocheck.py tendencia-midia-sintetica-controlavel-video-e-imagem.md
faltam: nada
disrupcoes na roda: 3 (frontmatter diz 3 )
efeitos por ordem: {1: 6, 2: 12, 3: 11}
ordem 3 com confianca alta: 0 (cota: no maximo 1)
contadores batem: True
ids unicos: 29
```

O script verifica: os 18 campos obrigatórios do frontmatter; o bloco `roda:` como YAML válido; a
`ordem` declarada coincidindo com a profundidade real; nenhum `efeito` terminando em interrogação;
`sinal` e `confianca` dentro dos valores permitidos; `prazo` monotônico ao longo de cada galho
(`prazo(e1) ≤ prazo(e1.1) ≤ prazo(e1.1.1)`); a cota de humildade (no máximo **um** efeito de ordem 3
com `confianca: alta` — saiu **zero**); e os contadores do frontmatter batendo com a árvore. Os 29
`id` são únicos e correspondem a 6 + 12 + 11 efeitos.

**Conferido à mão, porque o script não pega:** os links da seção 11 foram testados com
`curl -L --max-time 15`; **23 dos 24 respondem 200**, e o único que não responde ao `curl` (Envato,
403 por bloqueio anti-robô) foi aberto e lido nesta sessão, com o fato declarado na própria seção 11.
`fontes: 24` no frontmatter é o número de fontes que eu de fato abri — não o de resultados de busca
que vi. Das fontes citadas, **seis são primárias** (Runway, Black Forest Labs, Comissão Europeia,
Rive, e duas da Adobe) e **duas são acadêmicas** (arXiv). As três que eu **queria** e não consegui
abrir (VFX Voice 403, Variety 402, Adobe helpx 403) estão nomeadas na seção 8 e na 12.7, com o
código de erro, em vez de figurarem na lista como se tivessem sido lidas.

**Verificações que eu gostaria de ter e não tenho, ditas aqui para não parecerem esquecimento:** não
existe checagem automática de que um `efeito` é afirmação e não pergunta disfarçada ("o mercado
passará a exigir…" é afirmação; "e se o mercado exigir?" não é, e o script só pega o ponto de
interrogação); não existe checagem de que `sinal: forte` corresponde mesmo a dois artefatos
verificáveis e independentes — isso eu conferi um a um, à mão, e é onde um revisor deve me cobrar
primeiro; e não existe checagem de que a seção 12 registra **todos** os efeitos cortados, porque os
cortados não estão no YAML. A garantia aqui é só a minha palavra, e ela vale o que valem os sete
`id` mortos listados em 12.4.
