---
tema: "Máquinas que veem qualquer coisa: visão de vocabulário aberto"
slug: maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto
autor_login: grec
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-22
horizonte: 2036
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 12
efeitos_ordem_2: 15
efeitos_ordem_3: 9
tecnologias_citadas: [SAM, SAM 2, SAM 3, SAM 3.1, SAM 3D, SA-Co, DINOv2, DINOv3, Perception Encoder, Grounding DINO, Grounding DINO 1.6 Edge, Grounded-Segment-Anything, YOLO-World, YOLOE-26, RF-DETR, RTMDet, Florence-2, OWLv2, NanoOWL, NanoSAM, EfficientViT-SAM, EdgeSAM, MobileSAM, Donut, PaddleOCR, EasyOCR, LaTeX-OCR, Qwen3-VL, PaliGemma, LAVIS, SlowFast, insightface, face-alignment, supervision, Autodistill, CVAT, Label Studio, Roboflow Label Assist, Skyvern, llama.cpp, Be My AI, Live AI, Smart Sampa, Escola Paraná Biometria, ORTHOS]
fontes: 24
confianca: media
experimento: "O mesmo acervo, duas gramáticas — buscar a mesma pessoa num vídeo por classe fixa e por frase livre, e medir se descrever já é identificar"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Por trinta anos um sistema de visão só enxergava o que alguém tinha rotulado antes: a lista de
classes era o contrato entre quem especificava e quem construía, e o dataset era o ativo. Isso
deixou de valer. Desde novembro de 2025 existe um modelo aberto que segmenta, detecta e segue
qualquer coisa descrita por uma frase curta — "ônibus escolar amarelo", "pessoas sentadas que
não estão de boné vermelho" — e chega a 88% do limite inferior humano no próprio benchmark que
os autores criaram para medir isso. Três rupturas derivam daí, e este mapa as separa. A
primeira é de **artefato**: o rótulo deixa de ser coisa que se desenha e passa a ser coisa que
se escreve, e com isso o trabalho, o versionamento e a auditoria de um sistema de visão mudam
de objeto — a palavra vira o código. A segunda é de **substrato do documento**: o texto deixa
de ser extraído da imagem para ser compreendido nela, o que dissolve o pipeline de OCR e, mais
adiante, a razão de existir do formulário — pede-se a foto do documento que a pessoa já tem, e
o excluído passa a ser quem não consegue fotografar, não quem não sabia preencher. A terceira é
de **categoria jurídica**: descrever não é identificar, e a proteção construída em cima de
"biometria" e "banco de referência" não alcança quem reencontra uma pessoa por
"camisa listrada, mochila azul, 14h20". Até 2036 o efeito que mais desloca quem projeta mídia
não é o fim do anotador — é que **o artefato central de projeto passa a ser uma frase**, com
tudo o que isso implica de ambiguidade, de disputa e de ausência de rastro. E a retroação mais
forte não é técnica nem regulatória: é que proibir identificar aumenta o incentivo para
descrever. O mapa tem 3 disrupções-raiz, 12 efeitos de 1ª ordem, 15 de 2ª e 9 de 3ª, com
confiança média — a base sobre modelo e custo é forte e datada; a base sobre adoção por ofício
é fraca, e foi ela que puxou a confiança para baixo.

## 2. O tema

**O que é.** Visão de vocabulário aberto é a capacidade de um sistema de visão responder a um
conceito que ninguém lhe ensinou explicitamente, expresso em linguagem natural ou por um
exemplo visual. O termo técnico que a literatura de 2025-2026 consolidou é *promptable concept
segmentation*: você dá uma frase nominal curta, o modelo devolve máscaras em nível de pixel
para todas as instâncias que correspondem, com identidade estável ao longo de um vídeo. Ao lado
disso corre uma segunda linhagem, a de **compreensão de documento sem OCR**, em que o modelo lê
e entende uma página como imagem, sem a etapa intermediária de transformar pixel em cadeia de
caracteres.

**Onde encosta em mídia e interação.** Em quatro lugares, e nenhum deles é "reconhecimento de
imagem" no sentido antigo:

1. **Autoria.** Editar vídeo por objeto ("todos os copos desta cena"), criar efeito que segue
   uma pessoa específica, isolar um elemento de uma foto sem desenhar contorno. Deixa de ser
   trabalho de rotoscopia e vira trabalho de descrição.
2. **Interface.** Se a máquina entende a tela como imagem, a interface deixa de ser um contrato
   (DOM, API, seletor) e passa a ser uma superfície que se observa. Automação por visão de tela
   é o caso extremo.
3. **Acessibilidade.** Descrever o mundo sob demanda, com a pergunta vinda da pessoa e não do
   catálogo do aplicativo — a diferença entre "há uma pessoa e uma mesa" e "o preço está na
   etiqueta de baixo?".
4. **Vigilância e registro.** Uma câmera que produz, por padrão, uma descrição textual do que
   viu transforma acervo de vídeo — hoje opaco e caro de vasculhar — em base consultável por
   frase.

**Por que merece um mapa de futuro, e não um estado da arte.** Porque o que muda não é o
desempenho de uma tarefa: é **o que conta como o trabalho**. Um levantamento de estado da arte
responde "qual modelo é melhor no LVIS". Não responde o que acontece com a auditoria de um
sistema quando a decisão depende do sentido de uma palavra, nem com a proteção de dados quando
a descrição substitui a identificação, nem com o formulário quando o documento se lê sozinho.
Essas três perguntas têm consequências de segunda e terceira ordem, e nenhuma delas é
extrapolação de curva de benchmark.

**O que este mapa NÃO cobre.** Reconstruir geometria 3D a partir de imagem é o tema 10 e não
entra aqui, salvo como nota. O robô que usa a percepção para agir é o tema 9. Geração de imagem
e vídeo é o tema 12. Aqui o objeto é a **percepção aberta**: ver por conceito.

**Premissas assumidas nesta rodada** (o briefing veio completo; estas são as lacunas que ele
não cobria, declaradas conforme §0 da skill):

- Não há um caso "âncora" de aluno neste tema; o mapa é independente.
- "Global, com uma nota sobre o Brasil" foi lido como: evidência primária internacional,
  com uma seção de aterrissagem brasileira em cada raiz onde ela existe (Smart Sampa, ANPD,
  PL 2338, BPO documental).
- "O que já é comum em produto de massa" foi aplicado como régua de recusa, e as recusas
  estão registradas na §4 e na §12.

## 3. Onde isso está hoje

Âncora feita em 22/09/2026 com acesso à web: 20 buscas em português e inglês, 24 páginas
abertas e lidas. As fontes estão na §11 e as buscas que não deram em nada, na §12.

### 3.1 O que já existe e funciona

**A linhagem SAM chegou ao conceito.** Meta publicou SAM 3 em 19/11/2025, com pesos abertos,
paper e benchmark próprio [2][1]. A definição do modelo é explícita: detecta, segmenta e segue
objetos em imagem e vídeo a partir de *concept prompts* — frase nominal curta, exemplo visual,
ou os dois [1]. A escala do motor de dados é de 4 milhões de conceitos únicos [1]. Os números
de desempenho, na documentação de referência: **47,0 de máscara AP zero-shot no LVIS contra
38,5 do melhor anterior**; 53,5 de box AP zero-shot no COCO; **30 ms para uma imagem com mais
de 100 objetos detectados numa H200**; e, no SA-Co/Gold, 65,0 CGF1 contra 74,2 estimados como
limite inferior humano — **88% do humano** [3]. Em 27/03/2026 saiu o SAM 3.1, cujo *Object
Multiplex* dá ~7× de aceleração com 128 objetos numa H100 [3]. O paper foi revisto em 28/03/2026
[1].

**O backbone sem rótulo virou infraestrutura.** DINOv3 saiu em 14/08/2025: 7 bilhões de
parâmetros, 1,7 bilhão de imagens, treinado só com aprendizado auto-supervisionado, licença
comercial, com a promessa operacional de um *backbone congelado servindo várias aplicações ao
mesmo tempo*, dividindo o custo de inferência entre tarefas [4]. O número que mais diz sobre o
que isso significa fora do laboratório é do World Resources Institute: o erro médio de altura
de dossel no Quênia caiu de **4,1 m para 1,2 m** [4]. A NASA JPL já usava o DINOv2 em robôs de
Marte, justamente por servir várias tarefas com pouco compute [4].

**As ferramentas comerciais absorveram tudo isso em semanas, não em anos.** No mesmo 19/11/2025
a Roboflow lançou SAM 3 dentro do Label Assist, do Auto Label e dos Workflows — anotar passou a
ser digitar a palavra [5]. Um ano depois, em 14/07/2026, o blog deles descreve a operação em
uma frase: "você digita um prompt como 'porta' ou 'para-choque', o modelo interpreta, localiza
as instâncias e devolve máscaras em nível de pixel, sem dataset rotulado e sem treino" [6].

**A detecção aberta já está em produção, mas não no caminho crítico.** Um relato de operação de
2026, de quem opera videoanalítica em varejo, telemedicina e moderação, descreve o padrão
canônico como de **duas camadas**: detector de vocabulário fechado (YOLO / RT-DETR / RF-DETR)
no quadro a quadro, detector aberto (Grounding DINO / Florence-2) como exceção e como
rotulador [8]. Os números que sustentam o desenho são de custo: Grounding DINO 1.6 Edge custa
~80 ms por imagem numa L4 em INT8, e ~21,7 ms num Jetson Orin Nano — "aproximadamente tempo
real para um fluxo, ainda pesado demais para múltiplas câmeras"; RF-DETR-Large faz ~250
inferências por segundo por GPU. Numa frota de 50 lojas com 4 câmeras cada, o desenho de duas
camadas dá **US$ 3.960/mês** contra **US$ 7.920–9.900/mês** se o modelo aberto rodasse em todo
quadro — duas a três vezes mais caro [8]. O gatilho de promoção é explícito: acumulados 500 a
1.000 exemplos de uma categoria nova, um *job* de retreino a incorpora ao modelo fechado [8].

**No edge, vocabulário aberto em tempo real já é possível — em vocabulário pequeno.** Um estudo
sistemático publicado em *Frontiers in Robotics and AI* (21/10/2025) mediu o compromisso
precisão-latência em dispositivos de borda: NanoOWL (patch32) com EfficientViT-SAM-L0 chega a
**47,51 FPS com mIoU de 84,64%**; os pipelines com YOLO-World ficam em 22–26 FPS [10]. A
conclusão é que é viável, com a ressalva de que a busca por latência mínima via quantização
agressiva degrada a máscara [10]. Já o SAM 3 inteiro não roda no edge: pesa 3,45 GB [3] e o
padrão recomendado é professor-aluno — SAM 3 na nuvem rotula, modelo compacto vai para o
dispositivo [9].

**Documento sem OCR saiu do paper e virou produto.** A ideia é antiga: Donut, da NAVER, foi
submetido em 30/11/2021 e publicado no ECCV 2022, com o argumento exato que hoje se repete —
custo do OCR, inflexibilidade por idioma e tipo de documento, e propagação de erro para as
etapas seguintes [11]. O que mudou é que agora há produto. Um fornecedor do setor, em
03/08/2026, reporta 0,847 de F1 ajustado de acurácia de layout sobre 1.500 amostras de produção
e 95,7% de acerto em perguntas sobre documento em 1.359 prompts — e afirma que o AI-OCR passa
de 98,5% em conjuntos de caracteres complexos contra 60–75% do OCR tradicional [12]. *São
números de vendedor sobre o próprio motor, e estão marcados como tal aqui e na §11.*

**A percepção aberta corporificada existe e já provocou crise.** Em 13/04/2026 uma coalizão de
**75 organizações**, liderada pela ACLU, pediu que a Meta "interrompesse imediatamente e
renegasse publicamente" o plano de pôr reconhecimento facial nos óculos Ray-Ban e Oakley,
com o argumento de que eliminar a expectativa de anonimato em espaço público suprime a livre
expressão de todos; a frase que sintetiza é de uma advogada da coalizão: *"seus óculos não
deveriam saber meu nome"* [14]. Em junho a discussão saiu do plano das intenções: a EFF relatou,
em 08/06/2026, que código de reconhecimento facial — o sistema internamente chamado **NameTag**
— havia sido embarcado silenciosamente em milhões de aparelhos, e que a Meta o removeu numa
atualização de 05/06, menos de 48 horas depois da reportagem [13]. A avaliação da EFF é que a
ambição não desapareceu e que a proteção tem de vir de lei com direito de ação privada, não de
boa vontade corporativa [13].

**A acessibilidade é o caso de adoção mais claro e menos disputado.** O Be My Eyes lançou o Be
My AI em março de 2023 sobre GPT-4; em semanas somou 1 milhão de sessões; hoje opera em mais de
180 idiomas e chegou a cerca de 1 milhão de usuários cegos ou de baixa visão e mais de 10
milhões de voluntários [16].

**A tela como imagem.** Skyvern automatiza fluxos de navegador tirando *screenshot* e deixando
um LLM de visão decidir o que é cada elemento, em vez de depender de seletor XPath; tem 23,1 mil
estrelas no GitHub e reporta 64,4% no WebBench, com desempenho particularmente melhor em
tarefas de escrita — preencher formulário, autenticar, baixar arquivo [17].

### 3.2 O que existe e ainda não funciona

- **Vocabulário aberto no caminho crítico.** O relato de produção de 2026 é taxativo: a carga
  principal de detecção de quase todo produto embarcado ainda é de vocabulário fechado, e a
  decisão real do ano é "estendo meu YOLO ou substituo" — com a maioria dos modelos abertos
  pesados demais para o edge [8].
- **Precisão em conceito fino.** A própria documentação do SAM 3 lista: melhor com frase
  nominal simples; degrada em conceito raro ou de granulação fina; raciocínio complexo exige
  acoplar um MLLM; e há conceitos inerentemente ambíguos [3]. A Roboflow diz o mesmo em prosa:
  funciona melhor com nomes comuns e fronteira visual clara, e "evite classes amplas com
  partes específicas — 'carro, porta' causa sobreposição" [6].
- **Zero-shot ainda perde para treinado.** O levantamento de modelos de detecção de 04/05/2026
  é explícito: a acurácia zero-shot fica atrás do modelo afinado; a recomendação é prototipar
  com zero-shot e migrar para treinado em produção [7]. Os números do estado da arte fechado
  são altos: RF-DETR passa de 60 mAP no COCO em tempo real e faz 1,7 ms numa T4 na variante
  Nano [7].
- **Documento como prova.** O material de fornecedor não identifica os casos em que o OCR
  tradicional continua preferível, e não dá preço por página [12] — a lacuna importa, porque é
  exatamente onde mora a exigência de rastro em setor regulado.
- **Óculos com descrição contínua.** O relato sobre a geração seguinte de Ray-Ban Meta e o
  "super sensing" — sessões de Live AI durando horas em vez de ~30 minutos — é reportagem sobre
  plano, não sobre produto entregue [15]. *Ver §8: a data desta fonte ficou ambígua na minha
  verificação.*

### 3.3 Quem constrói

| Ator | O que traz | Evidência |
|---|---|---|
| **Meta FAIR** | SAM 1/2/3/3.1, SAM 3D, DINOv2/v3, Perception Encoder; pesos abertos | [1][2][3][4] |
| **Roboflow** | a camada de produto: Label Assist, Auto Label, Workflows, RF-DETR, `supervision` | [5][6][7] |
| **IDEA Research** | Grounding DINO e a variante Edge, o padrão de detecção por texto | [8] |
| **Alibaba (Qwen), Google (PaliGemma), NAVER (Donut)** | compreensão de documento e VLM de peso aberto | [11] |
| **Comunidade de edge** | NanoOWL, NanoSAM, EfficientViT-SAM, EdgeSAM, MobileSAM | [10][9] |
| **Fornecedores de documento** | motores VLM vendidos como substituto de OCR | [12] |
| **Sociedade civil (ACLU, EFF, Data Privacy Brasil)** | o freio; hoje é ator de construção, não de reação | [13][14][19] |

### 3.4 Números de adoção

- **Anotação de dados**: mercado de rotulagem em **US$ 2,61 bi em 2026**, projetado para
  **US$ 7,02 bi em 2031**, CAGR de 21,94%. O dado que importa para este mapa é a composição: a
  rotulagem manual era 42,31% do mercado em 2025, e as técnicas auto-supervisionadas e
  programáticas crescem a 22,16% ao ano. O fluxo descrito é "pré-rotular com modelo fundacional
  e pôr humano nas fatias ambíguas" — redução de *volume* manual com aumento de *valor* e
  exigência de qualificação do que resta [18].
- **Acessibilidade**: ~1 milhão de usuários cegos/baixa visão e >10 milhões de voluntários;
  180+ idiomas [16].
- **Vigilância urbana no Brasil**: o Smart Sampa opera **50.000 câmeras** em São Paulo — 20.000
  próprias e 30.000 integradas de redes privadas — com reconhecimento facial, central 24/7 com
  ~250 agentes, e 159 prisões em flagrante reportadas [21]. O site do programa afirma
  conformidade com a LGPD e informa retenção de 30 dias para leituras de placa sem restrição
  [22].
- **Automação por visão de tela**: Skyvern em 64,4% no WebBench [17].
- **Papers**: não consegui um número confiável de submissões anuais em cs.CV — ver §12.

### 3.5 Nota Brasil

Três fatos datados mudam a leitura do tema aqui, e nenhum deles é de tecnologia:

1. **A ANPD começou a usar a régua de necessidade e proporcionalidade, e ela morde.** Em
   04/08/2026 a fiscalização determinou a suspensão imediata do "Escola Paraná Biometria",
   que desde 2023 condicionava a chamada ao reconhecimento facial dos alunos — cerca de
   **1 milhão de estudantes em 2.136 escolas**, mais de 100 mil servidores. O argumento não foi
   de risco abstrato: o Estado não apresentou base legal, nem estudo de efetividade, nem
   análise de alternativa menos invasiva; o tratamento foi considerado "desnecessário,
   desproporcional e excessivo" [19].
2. **A vigilância municipal erra sobre gente concreta.** Em 18/12/2025 se documentou o Smart
   Sampa instalado dentro de CAPS, com um usuário retirado de um grupo terapêutico "sob a mira
   de armas" e algemado por confusão do reconhecimento facial, solto só na delegacia; a Comuda
   registrou ao menos 6 denúncias formais [20].
3. **O marco legal está travado, e o ponto travado é justamente este.** O PL 2338 foi aprovado
   no Senado e adiado na Câmara; classifica reconhecimento facial como risco excessivo *com um
   rol amplo de exceções* que, na leitura da Coalizão Direitos na Rede, permite na prática uso
   irrestrito por órgãos de segurança — "um vácuo regulatório" [23].

O ponto para este mapa: o arcabouço brasileiro em construção está mirando **biometria** e
**reconhecimento facial**, que é precisamente a categoria que a disrupção-raiz 3 contorna.

## 4. As disrupções-raiz

Três raízes. Para cada uma, as quatro perguntas do critério de maturidade, respondidas em uma
linha, mais quem tem incentivo para bloquear.

### R1 — O vocabulário deixa de ser artefato: descrever substitui anotar

> Segmentar, detectar e seguir por conceito expresso em linguagem — não por classe treinada.

1. **O que rompe.** Rompe o ciclo *ontologia fixa → dataset → treino → modelo*, que era o
   contrato entre quem especifica e quem constrói um sistema de visão. O rótulo deixa de ser
   objeto que se desenha e vira texto que se escreve; o ativo deixa de ser o dataset e passa a
   ser o léxico mais o conjunto de casos em disputa. **Não é "o mesmo, melhor"**: um sistema
   fechado *não pode* responder "pessoas sentadas que não estão de boné vermelho" — a consulta
   não existe no espaço de saída [2].
2. **Por que agora, e não há cinco anos.** Porque a fusão visão-linguagem passou o ponto em que
   a frase nominal rende máscara utilizável: 47,0 contra 38,5 de AP zero-shot no LVIS, 88% do
   limite inferior humano no SA-Co, motor de dados com 4 milhões de conceitos, e 30 ms para uma
   cena com mais de 100 objetos [1][3]. Em 2021 nada disso existia com pesos abertos.
3. **Onde está na difusão.** **Adoção precoce.** É padrão nas ferramentas de autoria de dataset
   desde 19/11/2025 [5], e é exceção — não regra — no caminho crítico de produção [8].
   Emergente, não maduro.
4. **O que ainda falta.** Custo por quadro cair uma ordem de grandeza (hoje 2–3× o do modelo
   fechado numa frota real [8]); conceito fino e raro parar de degradar [3]; e algo que hoje
   não existe: uma prática de **versionar e auditar prompt** como se versiona código.

**Quem bloqueia.** Quem vende dataset proprietário e anotação em volume, e os times de ML cujo
fosso é justamente o modelo afinado — o incentivo de ambos é manter o vocabulário aberto na
posição de ferramenta de autoria e fora da operação. O bloqueio não é político: é o SLA e a
conta de GPU [8].

### R2 — O documento deixa de ser texto extraído e passa a ser imagem compreendida

> Ler sem OCR: layout, semântica e identidade de campo numa passada só.

1. **O que rompe.** Rompe o pipeline OCR → ordenação de leitura → layout → regex/template →
   campo, e com ele o ofício de manter template por fornecedor e a arquitetura de exceção
   construída em cima do erro de OCR [11][12]. Mais adiante rompe algo maior: **o formulário**,
   que existe porque a máquina não sabia ler o documento que a pessoa já tinha.
2. **Por que agora, e não há cinco anos.** A ideia é de 2021 [11]; o que apareceu foi VLM de
   peso aberto com compreensão de documento nativa e contexto que atravessa páginas, e números
   de produção publicados (0,847 de F1 de layout em 1.500 amostras; 95,7% em 1.359 prompts)
   [12].
3. **Onde está na difusão.** **Produto de nicho caminhando para adoção precoce.** Há produto
   vendido e medido, e há setor inteiro (regulado) que ainda não aceita. Emergente.
4. **O que ainda falta.** Ancoragem verificável — apontar de que pixel saiu cada campo; uma
   resposta ao erro *plausível* (documento devolvido bem-formado e errado); e preço por página
   publicado, que hoje não há [12].

**Quem bloqueia.** O setor regulado (fisco, judiciário, saúde, seguro) exigindo rastro para a
evidência textual; e as próprias empresas de BPO, cujo contrato é por página processada — a
substituição corrói a unidade de cobrança antes de corroer o custo.

### R3 — Reconhecer sem identificar: a descrição aberta escapa da categoria de biometria

> Reencontrar uma pessoa por descrição, sem rosto e sem banco de referência.

1. **O que rompe.** Rompe a categoria jurídica sobre a qual toda a proteção foi construída. As
   proibições do AI Act se acionam quando há identificação biométrica remota — sistema que
   identifica pessoas "sem envolvimento ativo delas, tipicamente à distância", comparando dado
   biométrico **contra banco de referência**; e a categorização biométrica proibida é a que
   infere característica sensível [24]. Uma consulta como "homem de camisa listrada com mochila
   azul, entre 14h e 15h" não usa biometria, não compara contra banco, não infere raça — e
   ainda assim reencontra a pessoa. **Não é melhoria de reconhecimento facial: é uma via que o
   desenho da norma não previu.**
2. **Por que agora, e não há cinco anos.** Porque a descrição livre virou consulta executável:
   PCS com identidade estável em vídeo [1], e descrição textual como saída padrão. E porque a
   câmera migrou para o corpo: a crise do NameTag em junho de 2026 [13] e a carta de 75
   organizações em abril [14] são a evidência de que o vetor já está no mercado.
3. **Onde está na difusão.** **Demo pública caminhando para produto de nicho.** Toda a cadeia
   derivada desta raiz carrega confiança baixa ou média por obrigação da skill.
4. **O que ainda falta.** Descrição contínua barata o bastante para rodar o dia inteiro (hoje
   47 FPS no edge só com vocabulário pequeno [10], e o modelo grande não cabe [3][9]); e um
   caso público que force a pergunta jurídica — que ainda não aconteceu.

**Quem bloqueia.** ACLU e as 75 organizações, a EFF, a ANPD — e, no caso brasileiro, a própria
ANPD já mostrou que bloqueia com a régua de necessidade e proporcionalidade, não com proibição
nominal [19]. Essa régua é a única das três que **também alcança a descrição não-biométrica**,
e é por isso que ela importa mais aqui que o AI Act.

### Candidatos recusados como raiz

- **OCR tradicional** — maduro; adoção em maioria há mais de duas décadas. Tratado como
  contexto na §3.
- **Classificação de imagem e detecção com classes fixas** — maduras; são o *hot path* de quase
  todo produto embarcado em 2026 [8]. Contexto.
- **Reconhecimento facial 1:N em segurança pública** — no Brasil já passou da maioria inicial
  em capital: 50 mil câmeras num único município [21]. Maduro como tecnologia; o que é
  emergente é a disputa regulatória sobre ele, e isso entra como efeito, não como raiz.
- **Anotação assistida por modelo** — é efeito de R1, não raiz: não rompe nada sozinha, acelera.
- **Backbone auto-supervisionado (DINOv3)** — poderoso, mas é *habilitador* das três raízes, não
  ruptura autônoma: a mudança que ele causa em quem projeta mídia passa necessariamente por
  R1. Tratado como pré-condição na §4/R1 e na §3.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "O vocabulário deixa de ser artefato — descrever substitui anotar"
    efeitos:
      - id: e1
        ordem: 1
        efeito: O dataset rotulado deixa de ser o ativo de uma equipe de visão e o ativo passa a ser o léxico mais o conjunto de casos em disputa
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A anotação em massa encolhe em volume e o trabalho humano migra para arbitrar fronteira ambígua e auditar saída de modelo
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O contrato de anotação deixa de ser pago por item entregue e passa a ser pago por hora de arbitragem de conceito
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A especificação de um recurso de visão passa a ser escrita em linguagem natural e quem redige a frase vira o autor do comportamento do sistema
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Mudar uma palavra do prompt muda o produto sem mudar o código e o histórico da decisão some do diff
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O protótipo de visão passa a ser feito numa tarde sem dado nenhum e a barreira de entrada cai para quem só sabe descrever
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Produtos de visão de nicho viram viáveis para mercados que nunca pagariam pela construção de um dataset
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O valor migra do modelo para o acesso à câmera e quem tem a instalação física fica com a renda
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O custo por quadro trava o vocabulário aberto fora do caminho crítico e o padrão de arquitetura vira de duas camadas
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O vocabulário aberto se firma como ferramenta de autoria e não de operação, usada para fabricar o modelo fechado que roda
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e4
        ordem: 1
        efeito: As ferramentas de anotação deixam de vender desenho de máscara e passam a vender desacordo, revisão e linhagem de conceito
        sinal: medio
        prazo: 2030
        confianca: media
      - id: e5
        ordem: 1
        efeito: Quando o sistema erra a explicação deixa de ser que a classe não estava no treino e passa a ser que a palavra queria dizer outra coisa
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Auditar um sistema de visão passa a exigir o registro do prompt e do léxico e quem não guardou não reconstitui a decisão
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A perícia sobre decisão automatizada em imagem passa a girar em torno de disputa lexical e não de estatística de erro
                sinal: fraco
                prazo: 2040
                confianca: baixa
  - disrupcao: "O documento deixa de ser texto extraído e passa a ser imagem compreendida"
    efeitos:
      - id: e6
        ordem: 1
        efeito: O pipeline de OCR mais layout mais regex desaparece e com ele o ofício de manter template por fornecedor
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O trabalho de digitação e conferência no BPO documental brasileiro encolhe em volume e se concentra em exceção e responsabilização
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O preço do serviço documental deixa de ser cobrado por página e passa a ser cobrado por risco assumido sobre o campo errado
                sinal: fraco
                prazo: 2039
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: O erro deixa de ser ilegível e passa a ser plausível, porque o modelo devolve um campo bem formado e errado
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e7
        ordem: 1
        efeito: O formulário perde a razão de existir como instrumento de captura e o serviço passa a pedir a foto do documento que a pessoa já tem
        sinal: medio
        prazo: 2032
        confianca: baixa
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O projeto de serviço migra de desenhar campos para definir o que se aceita como prova
            sinal: fraco
            prazo: 2033
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A exclusão digital muda de forma e o excluído passa a ser quem não consegue produzir uma foto legível em vez de quem não sabia preencher
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: O PDF deixa de ser formato de circulação entre sistemas e vira formato de arquivo morto para conferência humana
            sinal: fraco
            prazo: 2034
            confianca: baixa
      - id: e8
        ordem: 1
        efeito: O setor regulado trava a substituição por não aceitar campo extraído sem rastro e o OCR sobrevive como camada de citação e não de leitura
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Aparece a exigência de ancoragem em que todo campo extraído aponta a região da imagem de onde saiu
            sinal: fraco
            prazo: 2031
            confianca: baixa
  - disrupcao: "Reconhecer sem identificar — a descrição aberta escapa da categoria de biometria"
    efeitos:
      - id: e10
        ordem: 1
        efeito: A câmera passa a produzir por padrão um registro textual do que viu e o texto vira o que se guarda e se busca no lugar da imagem
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: O acervo de vídeo deixa de ser opaco e dez anos de gravação viram consultáveis por frase a custo quase nulo
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: A política de retenção vira a principal decisão de privacidade de uma organização, acima da decisão de instalar a câmera
                sinal: fraco
                prazo: 2039
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: A descrição aberta em texto cai na lacuna entre a norma escrita para biometria e a prática de reencontrar pessoas sem usar rosto
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: A disputa regulatória se desloca de poder reconhecer rosto para poder descrever pessoa e o vocabulário de proteção precisa ser reescrito
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: A acessibilidade ganha descrição do ambiente sob demanda e o padrão de qualidade passa a ser o que a pessoa pediu e não o que o aplicativo decidiu descrever
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: O ganho cria dependência de nuvem e de termos de uso de uma empresa para tarefas cotidianas de quem não enxerga
            sinal: medio
            prazo: 2031
            confianca: media
      - id: e12
        ordem: 1
        efeito: A reação organizada a dispositivos vestíveis que reconhecem pessoas vira o principal freio da percepção aberta corporificada
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: A norma social do não gravar endurece e espaços específicos passam a proibir óculos com câmera como proibiram celular em prova
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Aparece a etiqueta inversa em que o dispositivo precisa provar que não está descrevendo e o indicador de captura vira objeto de norma técnica
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: O trabalho de triagem visual humana deixa de ser posto de entrada e vira posto de exceção
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: A contratação para triagem visual deixa de pedir experiência no domínio e passa a pedir capacidade de escrever o critério em texto
            sinal: fraco
            prazo: 2032
            confianca: baixa
```

### O que o bloco não diz

**Os mecanismos, um a um.** O bloco YAML guarda a estrutura; os mecanismos ficam aqui, porque
sem eles a roda é lista de palpites.

**e1** — *porque descrever passa a render máscara utilizável sem treino* [1][3], o custo
marginal de uma classe nova cai para o custo de escrever uma frase, e o dataset perde a
propriedade que o tornava ativo: ser caro de refazer. O que continua caro é decidir o que a
palavra quer dizer nos casos de fronteira — e é isso que vira o ativo. **Classe de referência
do prazo:** do SAM 1 (abr/2023) ao SAM 3 dentro de ferramenta comercial de rotulagem
(nov/2025) foram ~31 meses; do lançamento à mudança do que as equipes consideram ativo, somo
mais um ciclo de contrato anual — 2029.

**e1.1** — *porque e1 desloca o gargalo*: pré-rotular com modelo fundacional e pôr humano nas
fatias ambíguas já é o fluxo descrito pelo mercado, com o manual em 42,31% e o programático
crescendo 22,16% ao ano [18]. **Referência:** a própria série do mercado de rotulagem, que
cresce em receita enquanto muda de composição — ou seja, encolhe o volume manual sem encolher
o setor.

**e1.1.1** — *porque e1.1 torna impossível medir entrega por item*: se o item já vem do modelo,
o que o humano entrega é julgamento, e julgamento não se conta por caixa desenhada. **Prazo
2037, fora da janela deste mapa** — mudança de forma de contrato em cadeia de fornecimento
global é lenta; a referência é a migração de "por hora" para "por entrega" no trabalho de
tradução, que levou mais de uma década.

**e1.2** — *porque o prompt passa a determinar o comportamento observável do sistema*, quem o
escreve exerce a função que antes era do engenheiro de ML. Isto já acontece: "digite 'porta' ou
'para-choque'" [6] é uma decisão de produto tomada por quem digita.

**e1.2.1** — *porque a frase não mora no repositório*: a Roboflow documenta que trocar a
palavra troca o resultado e que classes amplas causam sobreposição [6]; se a frase vive num
campo de formulário da ferramenta, o `git log` não a registra. Este é o efeito mais importante
do ramo para quem projeta, e o que mais falta ferramenta.

**e2** — *porque prototipar deixa de exigir dado*: a recomendação publicada é literalmente
prototipar com zero-shot antes de investir em dataset [7]. **Referência de prazo:** a adoção de
API de LLM por não-especialistas, ~2 anos do lançamento à presença em produto pequeno.

**e2.1** — *porque o piso de viabilidade econômica cai junto com o custo de partida*: contar
tipos de peixe num entreposto, achar rachadura em fachada, conferir estoque de farmácia de
bairro — casos que nunca pagariam 10 mil imagens rotuladas.

**e2.1.1** — *porque, se qualquer um consegue o modelo, o escasso é a câmera instalada no
lugar certo*: a renda migra para quem controla o ponto de vista. É a mesma estrutura que o
tema 10 encontra na captura de realidade, e é o tipo de convergência que este mapa quer marcar.
**Referência:** a migração do valor em videomonitoramento do equipamento para o serviço
gerenciado, ~8 anos; contada de `e2.1` (2031), dá **2039** — *fora da janela deste mapa*,
declarado aqui e na conferência de teto da §7.7.

**e3 (retroação)** — *porque a conta de GPU não cai só porque o modelo ficou esperto*: 80 ms
por imagem numa L4 contra 250 inferências por segundo do fechado; US$ 3.960 contra
US$ 7.920–9.900 por mês numa frota de 200 câmeras [8]; SAM 3 com 3,45 GB, grande demais para o
edge [3][9]. Esta é a retroação mais forte de R1 e ela já está valendo — por isso prazo 2027 e
confiança alta.

**e3.1** — *porque a economia de e3 empurra o vocabulário aberto para o papel de professor*: é
exatamente o padrão que a literatura de edge recomenda, SAM 3 rotulando na nuvem e modelo
compacto no dispositivo [9], e que o relato de produção descreve com gatilho numérico — 500 a
1.000 exemplos e retreina [8].

**e4** — *porque o que uma ferramenta de anotação vendia (a tela onde se desenha) deixa de ser
o gargalo*. **Aplicação da regra de parada (§3.9):** não derivei filho aqui. Os candidatos que
escrevi — "a métrica de qualidade de dataset muda", "a ferramenta passa a vender linhagem" —
eram o próprio e4 mais adiante, sem troca de ator nem de mecanismo. Parei e registrei.

**e5** — *porque a fonte do erro muda de lugar*: um modelo fechado erra por ausência de classe;
um modelo aberto erra por ambiguidade de conceito, e a documentação diz isso com todas as
letras ("alguns conceitos são inerentemente ambíguos" [3]). Muda também o dono do erro: sai do
time que montou o dataset e entra em quem escolheu a palavra.

**e5.1** e **e5.1.1** — *porque não se audita o que não se registrou*. Hoje um sistema de visão
se audita pelo dataset e pela matriz de confusão; com vocabulário aberto, o que determinou a
saída é uma frase que pode nem ter sido salva. **Referência:** do direito à explicação escrito
(GDPR, 2016/2018) à prática pericial sobre decisão automatizada — oito anos depois, em 2026,
ainda incipiente. `e5.1` fica em **2032**; `e5.1.1`, oito anos adiante, em **2040** — *fora da
janela deste mapa*, declarado aqui e na §7.7.

**e6** — *porque o VLM lê layout e semântica numa passada só* [11][12]: os três problemas que o
Donut listou em 2021 — custo, inflexibilidade por idioma/tipo, propagação de erro — são
exatamente os três que sustentavam o ofício de manter template. **Referência:** a substituição
de motor de OCR em BPO, historicamente de 3 a 5 anos por contrato; somo um ciclo por causa de
e8 e chego a 2029.

**e6.1** — *porque o volume, e não a existência, do posto de trabalho é o que a automação
ataca*. Este é o efeito com a base de evidência mais fraca do mapa: não encontrei número de
pessoas empregadas em digitação e conferência documental no Brasil (§12), e por isso a
confiança fica em média e não em alta, apesar de o mecanismo ser direto.

**e6.1.1** — *porque, se o volume some, a unidade de cobrança precisa migrar para onde ainda há
escassez*: a responsabilidade sobre o campo errado. **Referência:** a precificação por resultado
em BPO, discutida desde ~2010 e ainda minoritária em 2026 — mais de quinze anos e ainda não;
usando o piso conservador de dois ciclos completos de renovação contratual (3 a 5 anos cada) a
partir de `e6.1` (2031), dá **2039** — *fora da janela deste mapa*, declarado aqui e na §7.7.

**e6.2** — *porque o modo de falha do OCR era ruído e o do VLM é confabulação*: um CNPJ
ilegível se vê; um CNPJ bem-formado e errado, não. É o efeito que mais muda o método de
conferência, e o material de fornecedor não o trata [12].

**e7** — *porque o formulário só existia para contornar a ilegibilidade da máquina*. Confiança
**baixa** de propósito: é o efeito de que mais gosto neste mapa e o que tem menos evidência
(ver §7.6).

**e7.1** e **e7.1.1** — *porque a decisão de projeto se desloca do campo para o critério de
prova*, e porque o requisito de entrada muda de letramento para condição material —
celular, luz, firmeza de mão, visão. **No Brasil isto importa mais que a média global**: a
mesma população que hoje depende de atendimento presencial para preencher é a que tem o pior
aparelho. **Referência para `e7.1.1`:** a migração do atendimento bancário para aplicativo
(~2015-2018) levou de dois a três anos para que a exclusão nova fosse nomeada e medida pelo TIC
Domicílios; contada de `e7.1` (2033), dá **2035** — dentro da janela, e é o único terminal do
mapa que sobreviveu à conferência de teto praticamente como estava.

**e7.2** — *porque o PDF era o formato que preservava layout para olho humano*, e o que passa a
circular entre sistemas é a estrutura extraída. Rebaixado na §6.

**e8 (retroação)** — *porque a exigência de rastro não é preferência, é requisito de prova*.
O próprio material de fornecedor não identifica onde o OCR continua preferível [12] — a lacuna
é o sinal.

**e8.1** — *porque a única forma de conciliar leitura semântica com exigência probatória é
ancorar campo em região da imagem*. É a especificação técnica que falta e que, escrita, destrava
e6 no setor regulado.

**e10** — *porque descrever passa a ser mais barato que armazenar e mais útil que indexar*.
**Referência de prazo:** transcrição automática de áudio — de "funciona" (~2019) a padrão em
ferramenta de reunião (~2023): 4 anos. Somo a diferença de custo entre áudio e vídeo por quadro
e chego a 2031.

**e10.1** — *porque busca por frase sobre texto é barata e busca por conteúdo sobre vídeo era
proibitiva*: é a queda de custo que transforma acervo morto em acervo vivo, inclusive para trás.

**e10.1.1** — *porque, se o que existe pode ser vasculhado, a única decisão que ainda protege é
não existir*. Esta é a conclusão mais acionável do mapa para quem projeta sistema.
**Referência:** o e-mail corporativo — das regras federais de descoberta eletrônica nos EUA
(2006) à política de retenção como decisão de primeira ordem em compliance (~2013), sete anos;
contada de `e10.1` (2032), dá **2039** — *fora da janela deste mapa*, declarado aqui e na §7.7.

**e10.2** — *porque a proibição do AI Act se aciona por identificação biométrica contra banco de
referência* [24], e a descrição aberta não faz nenhuma das duas coisas. Note que a régua da
ANPD — necessidade e proporcionalidade [19] — **alcança**, enquanto a régua nominal do AI Act e
do PL 2338 [23][24] não alcança.

**e10.2.1** — *porque a categoria protegida terá de ser reescrita a partir do efeito e não da
técnica*. **Referência:** do reconhecimento facial entrar em uso corrente (~2015) a ser nomeado
em norma (AI Act, 2024), nove anos — e essa é a referência *curta*; a longa, da diretiva europeia
de dados (1995) ao GDPR (2016), mede vinte e um. Usando a curta a partir de `e10.2` (2031), dá
**2040** — *fora da janela deste mapa*, declarado aqui e na §7.7.

**e11** — *porque a pergunta passa a ser da pessoa e não do catálogo do aplicativo*: 1 milhão de
usuários, 180+ idiomas, 1 milhão de sessões em semanas no lançamento [16]. **Referência:** o
próprio Be My AI, mar/2023 → ~1 milhão de usuários em 2026: 3 anos.

**e11.1** — *porque a descrição de qualidade ainda mora na nuvem de uma empresa*: o mesmo
estudo de edge que mostra viabilidade mostra que ela vem com vocabulário pequeno e máscara
degradada [10]. Autonomia adquirida sobre dependência nova.

**e12 (retroação)** — *porque a reação foi mais rápida que o produto*: 75 organizações em
13/04/2026 [14], código removido em 05/06/2026 menos de 48 horas depois da reportagem [13],
ANPD suspendendo biometria escolar em 04/08/2026 [19]. Três eventos em quatro meses, todos em
2026: sinal forte, prazo 2027, confiança alta.

**e12.1** — *porque a norma social precede a norma jurídica quando o dispositivo é visível*:
a referência é a proibição de celular em sala de prova e em vestiário, que se espalhou por
regulamento interno antes de qualquer lei.

**e12.1.1** — *porque, quando a suspeita é o padrão, o ônus da prova inverte*. Prazo **2037,
fora da janela deste mapa**: norma técnica sobre indicador de captura exigiria processo de
padronização que hoje não começou.

**e13** — *porque triagem visual era justamente o trabalho de aplicar um critério a muitos
itens*, e o critério agora se escreve. **Referência:** a triagem de currículo, que levou ~8 anos
para migrar de leitura humana a filtro automático com humano na exceção.

**e13.1** — *porque o critério passa a ser um texto e não um tirocínio*: quem escreve melhor o
critério vale mais que quem conhece melhor o domínio — pelo menos até o primeiro erro caro.
Este efeito substituiu um anterior que foi derrubado na §6.

### §4 da skill — cruzamentos

**Convergência 1 — o artefato de projeto vira uma frase.** `e1.2` (o prompt como autoria, vindo
de R1) e `e7.1` (definir o que se aceita como prova, vindo de R2) chegam ao mesmo lugar por
caminhos independentes: o objeto que a equipe de projeto produz deixa de ser a interface ou o
esquema de dados e passa a ser **o texto do critério**. É o achado mais forte deste mapa para o
público a que ele se destina, e é o que justifica o experimento da §10.

**Convergência 2 — a palavra vira objeto jurídico.** `e5.1` (auditoria exige registro do léxico)
e `e10.2` (a descrição escapa da categoria de biometria) convergem em uma conclusão só: nos
anos 2030 a disputa sobre sistema de visão será sobre **o sentido das palavras usadas**, e não
sobre taxa de erro. Vieram de R1 e de R3, sem contato.

**Retroalimentação perversa — proibir identificar aumenta o incentivo para descrever.** `e12`
freia R3 por reação pública; mas a reação está dirigida ao **rosto** [13][14], e a saída de
engenharia diante de uma proibição nominal é migrar para o que não está nomeado. Ou seja: o
freio de R3 **realimenta R3 na sua forma mais difícil de regular**. Este é o ciclo que este
mapa considera mais provável e mais mal compreendido.

**Contradição registrada, não resolvida.** `e10.1` (o acervo vira consultável e vasculhar o
passado custa quase nada) e `e12.1` (a norma social endurece e espaços proíbem captura) não
podem valer plenamente ao mesmo tempo. **O que decide entre elas:** de quem é o dispositivo.
Se a captura é institucional (câmera de prédio, de loja, de cidade), `e10.1` vence, porque a
norma social não regula instituição. Se é pessoal e vestível, `e12.1` vence, porque há um
corpo a quem dirigir o constrangimento. A previsão implícita — e falseável — é que os dois
regimes coexistam com fronteira nítida entre eles.

### Cobertura STEEP e quem perde

| Dimensão | Efeitos | Observação |
|---|---|---|
| **Social** | e5, e7.1.1, e10.1.1, e11, e12.1 | onde o mapa é mais denso e menos confiante |
| **Tecnológico** | e1, e2, e3, e3.1, e6, e8.1, e10 | melhor base de evidência |
| **Econômico** | e1.1, e2.1, e2.1.1, e6.1, e6.1.1, e13 | base média; falta número brasileiro |
| **Ecológico** | e3 (parcial) | **categoria quase vazia** — ver abaixo |
| **Político** | e8, e10.2, e10.2.1, e12 | ancorado em três eventos datados de 2026 |

**Ecológico ficou quase vazio, e registro isso em vez de forçar.** O único vetor real é o
consumo do vocabulário aberto por quadro (e3), que é um argumento econômico antes de ser
ambiental, e não achei número de energia por inferência que eu pudesse abrir e citar. Forçar um
efeito ambiental aqui seria inventar.

**Quem perde**, explicitamente:

- **Anotadores em volume** (e1.1): o posto não some, mas o volume encolhe e a qualificação
  exigida sobe — quem não arbitra conceito sai [18].
- **Digitadores e conferentes documentais** (e6.1): perda de volume num setor que no Brasil é
  grande e mal medido.
- **Triagem visual de entrada** (e13): inspeção, contagem, conferência — o posto por onde se
  entrava no mercado formal.
- **Quem depende de anonimato prático em espaço público** (e10.2): sem nenhuma norma sendo
  violada.
- **Quem não consegue produzir uma foto legível** (e7.1.1): a exclusão muda de forma e de
  público, e o público novo é mais difícil de enxergar que o antigo.
- **Fornecedores de ferramenta de anotação e de dataset proprietário** (e4): perdem o produto,
  não necessariamente o mercado.

## 6. Sinais fracos e wildcards

### Sinais fracos

**SF1 — O custo cai por objeto antes de cair por quadro.** O SAM 3.1 trouxe ~7× de aceleração
com 128 objetos numa H100 pelo agrupamento em *buckets* [3]. Isso é diferente de acelerar a
imagem: significa que cenas **densas** ficam desproporcionalmente mais baratas. Se essa curva
continuar, o primeiro lugar onde o vocabulário aberto entra no caminho crítico não é a câmera
de um corredor vazio — é a prateleira de supermercado e a esteira de triagem.
**Sinal observável:** o preço por mil imagens de auto-rotulagem nos serviços comerciais, e a
razão entre latência com 10 e com 100 objetos nas notas de versão.

**SF2 — O backbone congelado como serviço compartilhado.** A promessa do DINOv3 não é só
qualidade: é *um backbone servindo várias aplicações simultaneamente, dividindo o custo de
inferência* [4]. Se isso virar arquitetura de plataforma, a unidade econômica da visão deixa de
ser o modelo por tarefa e passa a ser o backbone por organização — e a discussão sobre quem
controla o backbone fica parecida com a de sistema operacional.
**Sinal observável:** provedor de nuvem anunciando "features de visão" como serviço cobrado por
consulta sobre um backbone único, em vez de endpoint por tarefa.

**SF3 — A tela como imagem.** Skyvern em 64,4% no WebBench [17]. Enquanto está nessa faixa, é
curiosidade. A linha de corte é a confiabilidade que permite deixar a automação rodar sem
supervisão — e, cruzada, ela muda o estatuto da interface: se a máquina lê a tela como qualquer
outra cena, a API deixa de ser o contrato e a interface volta a ser.
**Sinal observável:** um produto que anuncie SLA sobre fluxo automatizado por visão de tela,
sem seletor, em site de terceiro.

**SF4 — A régua da ANPD é mais poderosa que a proibição nominal.** A suspensão do Paraná não
usou "reconhecimento facial é proibido": usou **necessidade, proporcionalidade, efetividade
demonstrada e alternativa menos invasiva** [19]. Essa é a única régua que alcança a descrição
aberta, porque não depende da técnica empregada.
**Sinal observável:** uma decisão de autoridade de dados — aqui ou fora — aplicando esse teste a
um sistema que **não** usa biometria. No dia em que isso acontecer, R3 muda de trajetória.

**SF5 — Visão computacional aplicada à reação, não ao objeto.** O levantamento da turma trouxe o
`ORTHOS`, extensão que simula e visualiza resposta emocional a manchetes. **Não abri o
repositório e não verifiquei a descrição** (§8). Registro como sinal porque a fronteira que ele
sugere — da percepção do mundo para a predição da reação a ele — é a que este mapa não consegue
cobrir e que mudaria a §9 inteira.
**Sinal observável:** um modelo de vocabulário aberto sendo avaliado por *engajamento previsto*
e não por acurácia.

### Wildcards

**W1 — Um caso judicial em que a descrição aberta é aceita como prova e depois desmentida.**
*Mecanismo:* um acervo é vasculhado por frase ("homem de jaqueta cinza com boné, entre 22h e
23h"), o resultado sustenta uma acusação, e depois se demonstra que a mesma frase casava com
outras onze pessoas naquele acervo. Como não houve biometria, nenhuma das proteções nominais
foi acionada, e a defesa não tinha como pedir a taxa de falso positivo — porque o sistema nunca
calculou uma.
*Por que é improvável até 2036:* exige que a descrição por frase já esteja em uso investigativo
rotineiro e que o erro seja público. Nenhuma das duas condições está posta.
*O que faria com o mapa:* inverteria `e10` — os acervos passariam a ser deliberadamente
mantidos opacos, e `e10.1.1` (retenção como decisão central) chegaria anos antes.
*Sinal precoce:* uma corregedoria ou um Ministério Público pedindo o **log de consultas em
linguagem natural** sobre um sistema de videomonitoramento. É um pedido que hoje ninguém sabe
responder.

**W2 — Vocabulário aberto pleno a 30 FPS num aparelho de mil reais.** *Mecanismo:* destilação
agressiva de SAM 3 para um aluno de algumas centenas de MB, rodando em NPU de celular
intermediário. Hoje o que roda a 47 FPS no edge é NanoOWL com vocabulário pequeno e máscara
degradada [10], e o modelo grande tem 3,45 GB [3].
*Por que é improvável:* a razão entre os dois é de mais de uma ordem de grandeza, e a
degradação medida vem justamente da quantização agressiva [10].
*O que faria com o mapa:* destruiria `e3` — a retroação econômica que hoje segura tudo. Sem
`e3`, `e10` e `e12` chegam cedo e juntos, e o mapa inteiro se comprime em cerca de cinco anos.
*Sinal precoce:* um modelo aberto de PCS abaixo de 500 MB com queda de AP menor que 15% no LVIS.

**W3 — Um fornecedor de VLM documental perde uma ação por campo confabulado.** *Mecanismo:*
`e6.2` (erro plausível) encontra `e8` (exigência de rastro) num contrato sem cláusula de
ancoragem. *Por que é improvável até 2036:* os contratos atuais empurram o risco para o
cliente. *O que faria:* transformaria `e8.1` (ancoragem) de especificação desejável em requisito
de mercado em um trimestre — o caminho mais rápido para R2 se consolidar é, ironicamente, uma
derrota judicial de quem a vende. *Sinal precoce:* edital público brasileiro exigindo
"referência à região da imagem" na especificação de extração documental.

## 7. Contra o próprio mapa

Bateria aplicada sobre o mapa já escrito, em 22/09/2026. O registro de alterações está no fim
da seção, com valor antes e depois.

### 7.1 Pré-mortem — é 2036 e este mapa se mostrou errado

**Razão 1: o vocabulário aberto nunca saiu da posição de ferramenta de autoria.** A economia de
`e3` se manteve por dez anos: o modelo aberto continuou 2–3× mais caro por quadro, e a indústria
se acomodou no desenho de duas camadas [8]. Nesse mundo, R1 é real mas pequeno — muda como se
fabrica o modelo, não o que o sistema faz. Metade dos efeitos de R1 vira detalhe de processo.
→ *Ação:* rebaixei `e1` de alta para média.

**Razão 2: o documento não se soltou do rastro.** `e8` venceu `e6` em todo setor que importa, e
o "sem OCR" ficou como camada de conveniência sobre um pipeline que continuou existindo por
razão probatória. O formulário não morreu; ganhou um botão de foto ao lado.
→ *Ação:* rebaixei `e7` de média para baixa e empurrei o prazo.

**Razão 3: a reação chegou antes do produto e matou a corporificação.** A sequência de 2026 —
ACLU, EFF, ANPD [14][13][19] — não foi um solavanco, foi o começo de um regime. Óculos com
descrição contínua ficaram como VR de consumo: dez anos de promessa e nicho.
→ *Ação:* mantive `e12` com confiança alta e rebaixei o ramo `e10`, que dependia de captura
ubíqua.

### 7.2 Extrapolação linear

Três efeitos eram "mais do mesmo, maior":

- **`e10.1` (acervo consultável)** — era simplesmente "busca melhora". Ganhou mecanismo de
  não-linearidade: o que muda não é a qualidade da busca, é que **o custo marginal de vasculhar
  o passado cai a quase zero**, o que transforma um acervo já existente, sem nenhuma câmera
  nova. Mantido com o mecanismo escrito.
- **`e7.2` (o PDF vira arquivo morto)** — era extrapolação pura, sem mecanismo de virada.
  Rebaixado (prazo e confiança); é o efeito mais fraco de R2 e assumo isso.
- **`e13` (triagem visual)** — passou, mas só depois de eu remover o filho que não passava (ver
  7.5).

### 7.3 Velocidade de adoção

Confrontei todo prazo com sinal fraco contra a classe de referência:

- `e7` (fim do formulário) exigia, no rascunho, adoção mais rápida que a do próprio OCR em
  serviço público brasileiro, que levou mais de quinze anos para ser padrão. **Empurrado de 2031
  para 2032** e rebaixado.
- `e7.2` exigia que um formato de arquivo com três décadas de inércia institucional saísse de
  circulação em cinco anos. A referência aqui é o fax, que sobreviveu em cartório e em saúde por
  vinte anos depois de obsoleto. **Empurrado de 2031 para 2034.**
- `e1.1.1` (contrato por hora de arbitragem) e `e12.1.1` (norma técnica de indicador de captura)
  **passaram de 2036** já nesta bateria, e ficam declarados fora da janela do mapa. A conferência
  de teto da §7.7, feita depois, empurrou outros cinco terminais para fora — o verificador lista
  os sete.
- `e11` foi o único prazo que **puxei para perto**: a referência é o próprio Be My AI, três anos
  de lançamento a 1 milhão de usuários [16], e o efeito já está meio acontecido.

### 7.4 E se a raiz não se concretizar

- **Sem R1**, sobram R2 e R3 quase inteiros: a compreensão de documento não depende de
  segmentação por conceito, e a descrição de cena por VLM também não. Sobrevive ~70% do mapa.
- **Sem R2**, sobram R1 e R3 integralmente. R2 é a raiz mais independente e a que tem a evidência
  de produto mais fraca (vendedor descrevendo o próprio motor [12]).
- **Sem R3**, some um terço do mapa e, mais grave, some a convergência 2 e a retroalimentação
  perversa — ou seja, some o que este mapa tem de menos óbvio.
- **Nenhuma das três sobrevive sem a outra?** Não. As três têm mecanismos independentes, e isso
  é o teste que o §6.4 pede. A pré-condição comum — backbone visual forte, DINOv3 e afins — é
  habilitador, não raiz, e por isso foi recusada na §4.

### 7.5 Suposição escondida

O mapa assume, sem ter dito:

1. **Que os pesos continuam abertos.** SAM 3, DINOv3 e Qwen3-VL com peso aberto são a razão de
   `e2` existir [2][4]. Se a próxima geração vier fechada e por API, `e2` e `e2.1` caem, e o
   mapa vira uma história de três empresas. → **Wildcard implícito, registrado aqui.**
2. **Que a GPU continua disponível e o preço por inferência cai.** Toda a aritmética de `e3` [8]
   assume mercado de compute funcionando.
3. **Que a régua de necessidade e proporcionalidade continua sendo aplicada.** A decisão da ANPD
   [19] é de agosto de 2026 e de um departamento de fiscalização; não é jurisprudência. Se ela
   for revertida, `e12` perde a perna brasileira.
4. **Que descrever uma pessoa por atributo funciona na prática.** Esta é a suposição mais
   perigosa do mapa, porque R3 inteira depende dela e **eu não achei nenhuma medição pública de
   reidentificação por descrição aberta**. É exatamente por isso que o experimento da §10 é este,
   e não outro.

### 7.6 Viés do autor

Dois efeitos estão aqui porque eu gosto deles:

- **`e7` (o fim do formulário).** É a ideia mais bonita do mapa e a que tem menos evidência. Foi
  rebaixada duas vezes nesta bateria e ainda assim continuo desconfiando de mim mesmo sobre ela.
- **`e1.2.1` (o prompt fora do diff).** É uma preocupação de quem programa e dá aula de
  engenharia, e pode estar superdimensionada — ferramenta de versionamento de prompt pode
  resolver isso em dois anos e o efeito virar nota de rodapé.

Há também um viés de **fonte**: metade da minha evidência de operação vem de Roboflow e de um
relato de fornecedor [5][6][7][8], que têm interesse comercial no vocabulário aberto. Compensei
usando os números *contra* a tese quando eles vieram contra (o desenho de duas camadas, o custo,
o "zero-shot perde para treinado" saíram todos dessas mesmas fontes), mas o viés de seleção
permanece.

### 7.7 Conferência de teto (TMI-0080 · TMI-0081 · TMI-0086)

Passo obrigatório em rodada de horizonte longo, e o gatilho da TMI-0086 disparou com folga: dos
**9 prazos terminais** (3ª ordem) da primeira versão, **6 estavam na faixa `[2034, 2036]`** —
66,7%, muito acima do limite de um quarto. O contador do verificador estava em 2, o que pela
TMI-0080 sozinha teria dispensado a conferência; foi exatamente para este caso que a TMI-0086
trocou o gatilho.

Distribuição na primeira versão:

| Faixa | Quantos |
|---|---|
| até 2033 | 1 (`e1.2.1`) |
| **2034–2036 (a faixa do teto)** | **6** |
| 2037 em diante | 2 (`e1.1.1`, `e12.1.1`) |

Re-derivei os seis pela classe de referência do próprio ramo — e, por precaução, também o único
terminal abaixo da faixa. O diagnóstico da TMI-0086 se confirmou inteiro: **eu não tinha
derivado esses prazos, tinha somado três a cinco anos ao prazo do pai e conferido se cabia.**

| id | antes | depois | classe de referência |
|---|---|---|---|
| `e2.1.1` | 2035 | **2039** | migração do valor em videomonitoramento do equipamento para o serviço gerenciado, ~8 anos, a partir de `e2.1` (2031) |
| `e5.1.1` | 2035 | **2040** | do direito à explicação escrito (GDPR, 2016/2018) à prática pericial — 8 anos e ainda incipiente em 2026 — a partir de `e5.1` (2032) |
| `e6.1.1` | 2034 | **2039** | precificação por resultado em BPO: discutida desde ~2010, ainda minoritária; piso de dois ciclos de renovação contratual a partir de `e6.1` (2031) |
| `e7.1.1` | 2034 | **2035** | migração do atendimento bancário para aplicativo (~2015-2018) → exclusão nova nomeada e medida em 2 a 3 anos, a partir de `e7.1` (2033) |
| `e10.1.1` | 2034 | **2039** | descoberta eletrônica (regras federais dos EUA, 2006) → retenção como decisão de primeira ordem (~2013), 7 anos, a partir de `e10.1` (2032) |
| `e10.2.1` | 2035 | **2040** | reconhecimento facial em uso corrente (~2015) → nomeado em norma (AI Act, 2024), 9 anos, a partir de `e10.2` (2031) |
| `e1.2.1` | 2032 | 2032 | governança de *feature flag*: da prática difundida (~2015) à ferramenta de governança (~2019), ~4 anos, a partir de `e1.2` (2029) — **confirmado** |

**Seis dos sete mudaram, e cinco saíram da janela.** Um foi confirmado. Nenhum foi antecipado —
o que é, ele mesmo, um achado: o viés desta rodada foi inteiramente na direção de comprimir, e
não houve um único caso em que a referência apontasse para mais cedo do que eu tinha escrito.

Distribuição depois da conferência: até 2033 → 1; **2034–2036 → 1** (11%, abaixo do limite);
2037 em diante → 7. O contador do verificador vai de 2 para 7, e os sete estão declarados na
prosa da §5 e no registro da §7.9, como manda a TMI-0055.

**O que isso diz sobre o mapa, e não só sobre os prazos.** Com as datas derivadas em vez de
estimadas, **sete dos nove efeitos de 3ª ordem deste mapa acontecem depois de 2036**. Ou seja:
num horizonte de dez anos, a terceira ordem deste tema quase não cabe. A leitura honesta não é
"o mapa errou os prazos" — é que a cadeia causal da percepção aberta atravessa instituições
(perícia, contrato, norma, política de retenção) cujos relógios são de oito a vinte anos, e dez
anos é curto para elas. Isto conversa diretamente com a §12.10.

### 7.8 Calibração

| Ordem | alta | media | baixa |
|---|---|---|---|
| 1 | 4 | 7 | 1 |
| 2 | 0 | 10 | 5 |
| 3 | 0 | 0 | 9 |

Cai com a ordem, como deve. Nenhuma confiança alta na 2ª ou na 3ª.

### 7.9 Registro de alterações

- `e1`: confianca **alta → media**, porque o pré-mortem 1 mostrou que o dataset só deixa de ser
  ativo se `e3` afrouxar, e `e3` não dá sinal de afrouxar [8].
- `e1`: prazo **2028 → 2029**, porque a referência (SAM 1 → ferramenta comercial, 31 meses)
  cobre a ferramenta, não a mudança de contrato.
- `e4.1` (*"a métrica de qualidade de dataset deixa de ser concordância entre anotadores e passa
  a ser concordância entre modelo e humano"*): **removido**, vai para a §12 — falhou na regra de
  parada: era `e4` mais adiante, sem troca de ator nem de mecanismo.
- `e9` (*"os cursos de auxiliar administrativo do Sistema S perdem a competência central que
  vendiam"*): **removido**, vai para a §12 — mesmo com ator nomeado, é a forma "formação
  reorganiza currículo" que a skill proíbe, e o mecanismo que eu tinha escrito serviria a
  qualquer automação de escritório. Falha no teste de especificidade.
- `e7`: confianca **media → baixa** e prazo **2031 → 2032**, pelo pré-mortem 2 e pela referência
  do OCR em serviço público.
- `e7.2`: prazo **2031 → 2034** e confianca **media → baixa**, pela referência do fax.
- `e13.1` antigo (*"a vistoria de sinistro por foto tira o perito do caso simples"*):
  **removido e substituído**, vai para a §12 — falhou no teste da causa solta: isso já acontece
  com visão de classe fixa treinada em milhões de imagens de sinistro, e aconteceria igual sem
  nenhuma das três raízes deste mapa. O substituto (`e13.1` atual) exige a frase como critério,
  e aí sim depende de R1/R3.
- `e10`: prazo **2030 → 2031**, pelo pré-mortem 3.
- `e11`: prazo **2030 → 2029**, único prazo antecipado, pela referência do próprio Be My AI [16].
- `e4`: **filho não derivado**, por aplicação explícita da regra de parada.

**Alterações da conferência de teto (§7.7), registradas aqui conforme TMI-0080/0081/0086:**

- `e2.1.1`: prazo **2035 → 2039** — *fora da janela*, declarado na §5.
- `e5.1.1`: prazo **2035 → 2040** — *fora da janela*, declarado na §5.
- `e6.1.1`: prazo **2034 → 2039** — *fora da janela*, declarado na §5.
- `e7.1.1`: prazo **2034 → 2035** — dentro da janela.
- `e10.1.1`: prazo **2034 → 2039** — *fora da janela*, declarado na §5.
- `e10.2.1`: prazo **2035 → 2040** — *fora da janela*, declarado na §5.
- `e1.2.1`: prazo **2032 → 2032** — **confirmado**, registrado conforme a exigência de anotar
  também o que não muda.

**Cota da §6 cumprida:** R1 perdeu `e4.1` e rebaixou `e1`; R2 perdeu `e9` e rebaixou `e7` e
`e7.2`; R3 perdeu o `e13.1` original e rebaixou o prazo de `e10`. A bateria derrubou coisa em
todas as três raízes. A conferência de teto, feita depois dela, mexeu em seis dos sete prazos
terminais que examinou.

## 8. O que a máquina errou

Eu sou a máquina. O que errei nesta rodada, com o motivo da desconfiança:

1. **Número que não consegui reconciliar e por isso não usei.** Um resumo de busca afirmou
   "7 milhões de óculos de IA vendidos em 2025" e, na mesma resposta, "código embarcado em mais
   de 50 milhões de dispositivos Ray-Ban Meta Gen 2". Os dois não fecham por mais de um fator de
   sete, e eu não consegui abrir uma página que sustentasse o segundo. **Tirei os dois do corpo
   do texto** e deixei a §3 falar só do que a EFF e a ACLU afirmam sobre o fato, não sobre a
   escala [13][14].
2. **Data ambígua que eu não resolvi.** O artigo do UploadVR sobre "super sensing" apareceu como
   2026 no resultado de busca e voltou datado de **08/05/2025** quando abri a página. Não
   consegui decidir qual é a correta. Tratei a fonte como reportagem sobre plano não lançado,
   marquei a ambiguidade na §11 e não apoiei nenhum efeito só nela.
3. **Número específico que a busca me deu e a fonte não confirmou.** Um resumo afirmava que o
   NameTag "converte cada rosto num vetor de 2.048 números". Abri o texto da EFF e **esse número
   não estava lá**. Não usei. Se ele aparece em outra reportagem, eu não a abri.
4. **Aceitei número de vendedor e quase não marquei.** Os 98,5% contra 60–75% e o F1 de 0,847
   [12] vêm de uma empresa medindo o próprio motor de extração documental, e o texto **não diz
   onde o OCR tradicional continua melhor** nem dá preço por página — as duas ausências mais
   informativas do documento. Na primeira versão da §3 eu tinha escrito esses números sem a
   ressalva; corrigi.
5. **Citei uma ferramenta sem abrir a fonte.** O `ORTHOS` aparece na §6 como sinal fraco a
   partir do levantamento da turma. **Não abri o repositório** e não verifiquei se a descrição
   ("simula e visualiza resposta emocional a manchetes, baseado em modelo da Meta") procede.
   Está marcado no próprio texto.
6. **Efeito plausível com mecanismo emprestado.** Na primeira montagem da roda, a vistoria de
   sinistro por foto pendurava em R3. Só ao rodar o teste da causa solta percebi que ela deriva
   de visão de classe fixa treinada em milhões de imagens de sinistro — tecnologia madura — e
   aconteceria igual sem nenhuma das três raízes. Removi (§7.8). Era o efeito mais "vendável" do
   ramo e o mais falso.
7. **Número que procurei e não achei, e que quase estimei.** Quantas pessoas trabalham com
   digitação e conferência documental no Brasil. A tentação de escrever "centenas de milhares"
   foi real; `e6.1` ficou com confiança média em vez de alta justamente por isso, e a ausência
   está registrada na §12.
8. **Categoria que ficou vazia e eu quase preenchi.** A dimensão ecológica do STEEP. Escrevi e
   apaguei um efeito sobre consumo energético de inferência por quadro porque não achei nenhum
   número de energia por inferência que eu pudesse abrir e citar. Registrei o vazio.

9. **Comprimi seis dos sete prazos terminais e não percebi sozinho.** Este é o erro mais grave da
   rodada. Datei os efeitos de 3ª ordem somando três a cinco anos ao prazo do pai e conferindo se
   cabiam em 2036 — que é a definição de derivar o ano da moldura do documento, não da classe de
   referência. O verificador imprimiu `RESULTADO: ok` e o contador de fora-da-janela em **2**, e
   eu li isso como calibração. Só a conferência de teto (§7.7), que a TMI-0086 torna obrigatória
   pela densidade da faixa do teto e não pelo contador, expôs o problema: re-derivados pela
   referência, **seis dos sete mudaram e cinco saíram da janela**, com desvios de até cinco anos.
   O que denuncia a compressão é a assimetria — nenhum dos sete foi antecipado. Um viés que só
   empurra para um lado não é ruído de estimativa, é a moldura puxando o número.

10. **Declarei a rodada pronta antes de ter consultado as decisões do contexto.** Com o
    verificador verde eu tinha dado o documento por fechado. Faltavam duas subseções obrigatórias
    — a conferência de teto (TMI-0080/0081/0086) e a declaração de horizonte 2031 (TMI-0059) —,
    nenhuma das quais é conhecida pelo `verificar.py` nem citada pelo `SKILL.md`. É exatamente a
    falha que a TMI-0121 descreve, repetida por mim uma rodada depois de ela ter sido escrita.

## 9. Três cenários para 2036

### Provável

É 2036. Vocabulário aberto é como se especifica qualquer coisa que envolva imagem, e vocabulário
fechado é o que roda — a arquitetura de duas camadas de 2026 não foi um estágio, foi o desenho
definitivo, e ficou barato o bastante para ninguém questionar. Anotar virou arbitrar: o trabalho
humano no dado é menos numeroso, mais bem pago e mais disputado, e ninguém mais desenha máscara.
Documento se lê sem OCR em todo lugar onde não há prova em jogo, e com ancoragem obrigatória
onde há — o formulário não morreu, ganhou um botão de foto ao lado e sobreviveu inteiro no setor
público. Óculos com descrição contínua existem, vendem bem e são proibidos em escola, hospital,
audiência e reunião fechada, por regulamento interno, não por lei. A vigilância por descrição
funciona, é usada, e não tem nome jurídico: as autoridades de dados que conseguem alcançá-la são
as que usam necessidade e proporcionalidade, e elas são minoria.
**Sinal precoce de que estamos aqui:** a primeira licitação pública brasileira que especifica
"busca por descrição em linguagem natural" num sistema de videomonitoramento, sem mencionar
biometria.

### Desejável

É 2036. A descrição é auditável. Todo sistema de visão em decisão que afeta pessoa guarda o
léxico que usou, a versão da frase e a data — e isso virou requisito de edital antes de virar
lei, porque três compradores grandes exigiram. A ancoragem se firmou: nenhum campo extraído de
documento circula sem apontar de onde saiu, o que resolveu ao mesmo tempo o problema probatório
e o do erro plausível. A acessibilidade rodou em dispositivo, não em nuvem: descrever o que está
à frente deixou de depender de conexão e de termo de uso, porque um modelo aberto de algumas
centenas de MB fez isso bem o bastante. E a régua de necessidade e proporcionalidade alcançou a
descrição: existe pelo menos uma decisão dizendo que reencontrar pessoa por atributo é
tratamento de dado pessoal e exige a mesma justificação que exigir o rosto.
**O que teria que ser feito:** as três primeiras coisas dependem de quem compra, não de quem
regula — e quem projeta mídia e interação está do lado de quem escreve o edital com mais
frequência do que imagina.
**Sinal precoce:** um edital, público ou privado, exigindo registro versionado de prompt como
requisito de entrega.

### Indesejável

É 2036. Toda imagem é dado estruturado por padrão, e ninguém decidiu isso — foi o efeito
colateral de armazenar descrição em vez de pixel, porque descrição é mais barata. Acervos de dez
anos são consultáveis por frase, inclusive os que foram gravados quando isso era impossível, e a
consulta não deixa rastro porque nenhum sistema foi desenhado para registrá-la. A proteção
continua escrita em torno de "biometria", e a operação contorna sem nem precisar querer
contornar. No Brasil, a régua de necessidade e proporcionalidade foi derrotada num caso grande e
virou exceção. Quem perdeu o posto de triagem visual não migrou para lugar nenhum, e a
qualificação nova — escrever critério em texto — não chegou a quem precisava. E na porta do
serviço público está a pessoa cujo celular não tira foto legível.
**Sinal precoce dele:** um sistema de videomonitoramento oferecendo busca por descrição livre,
**sem** log de consultas — e ninguém perguntando por quê.

## 10. O experimento

### O que é

**"O mesmo acervo, duas gramáticas."** A turma grava, com consentimento de todos os presentes e
só entre si, cerca de 30 a 60 minutos de vídeo num espaço de circulação (um corredor do CIn, uma
sala de espera encenada) com 8 a 12 pessoas entrando e saindo. Sobre esse acervo único montam-se
duas buscas:

- **Gramática fechada:** um detector de classes fixas (RF-DETR ou YOLO) — só sabe "pessoa",
  "mochila", "cadeira".
- **Gramática aberta:** SAM 3 / Grounding DINO com frase livre — "moça de camisa listrada com
  mochila azul que entrou depois das 14h".

E se mede **três coisas**, nesta ordem de importância:

1. **Reidentificação sem rosto.** Dada uma pessoa do acervo, quantas tentativas de frase um
   colega precisa para reencontrá-la, e qual a taxa de falso positivo de cada frase — quantas
   *outras* pessoas casam com a mesma descrição.
2. **Concordância lexical.** Cada aluno escreve, sozinho, três frases para achar a mesma pessoa.
   Quantas frases distintas surgem? Elas devolvem o mesmo conjunto? Esta é a medição de
   `e1.2` e `e5` feita na mão.
3. **O que só a gramática aberta acha.** A lista de consultas que o detector fechado não pode
   sequer expressar.

**Regra ética, não negociável:** material gravado pela própria turma, todos os filmados
presentes e cientes, nenhum terceiro no quadro, apagado ao fim da aula, nada sai da máquina.
Se alguém não quiser aparecer, usa-se figurante voluntário ou cena encenada. Esta decisão é de
quem dá a aula, não do sistema.

### Que pergunta sobre o futuro ele responde

**Descrever já é identificar?** É a suposição escondida n.º 4 da §7.5, de que R3 inteira depende
e para a qual eu não achei nenhuma medição pública. Se descrição livre reidentifica com
confiabilidade num acervo de uma hora e uma dúzia de pessoas, então `e10.2` (a lacuna
regulatória) é real e urgente, e o mapa está certo no ramo que menos consegue provar. Se não
reidentifica — se toda frase casa com meia dúzia de gente —, R3 perde a perna prática e vira
efeito de segunda ordem de R1.

### Que tecnologia emergente usa, e por que não dá com a madura

Usa **segmentação/detecção por conceito** (SAM 3, Grounding DINO) e, no braço de controle,
detecção de classe fixa. **Não dá para fazer com a madura por definição:** a pergunta do
experimento é sobre consultas que não existem no espaço de saída de um modelo de classe fixa.
Um YOLO treinado em COCO não tem como responder "camisa listrada com mochila azul" — não é que
responda mal, é que a consulta não é exprimível. O braço fechado existe justamente para tornar
essa impossibilidade visível em sala, e não como argumento.

### O que a turma faz quando testar

1. Dez minutos montando o acervo (já gravado) nas duas ferramentas.
2. Cada aluno, sozinho e sem conversar, escreve três frases para achar **a mesma pessoa
   sorteada**. As frases vão para um papel antes de irem para a máquina — isso importa: quero o
   léxico humano antes de ele ser corrigido pelo feedback da ferramenta.
3. Rodamos todas as frases. Projetamos a matriz: frase × pessoas retornadas.
4. Discussão com a matriz na tela: quantas pessoas diferentes a turma inventou para a mesma
   pessoa real; quantas pessoas reais casaram com a mesma frase; e a pergunta final, que é a do
   mapa — **se isso funcionasse num acervo de um ano em vez de uma hora, o que exatamente teria
   sido violado?**

### O resultado que me faria mudar de ideia

**Se a taxa de falso positivo por descrição ficar alta e estável** — se, num acervo de uma hora
com uma dúzia de pessoas, praticamente toda frase que a turma escreve devolver três ou mais
pessoas —, então a reidentificação por descrição não é prática em escala real, `e10.2` cai de
média para baixa, R3 deixa de ser raiz e vira ramo de R1, e o mapa muda de forma. Esse é o
resultado que eu **não** espero, e é exatamente por isso que o experimento é este.

Há um segundo resultado que também mudaria coisa: **se a concordância lexical for altíssima** —
se doze pessoas escreverem essencialmente a mesma frase —, então `e1.2` e `e5` estão
superdimensionados, a ambiguidade do conceito é menos problema do que este mapa supõe, e a
convergência 1 ("o artefato de projeto vira uma frase") perde a parte dramática.

## 11. Fontes

Vinte e quatro fontes, todas abertas e lidas em 22/09/2026. As que tentei e não abri estão na
§12.

1. **SAM 3: Segment Anything with Concepts** — arXiv 2511.16719, Meta (Carion, Gustafson, Hu,
   Debnath, Hu e 33 coautores), submetido 20/11/2025, revisto 28/03/2026.
   https://arxiv.org/abs/2511.16719
   *Sustenta:* a definição de *promptable concept segmentation*, os 4 milhões de conceitos do
   motor de dados, o benchmark SA-Co, e a base de R1. *Confiabilidade:* alta — paper dos autores
   do modelo, com benchmark próprio publicado; a ressalva usual de que quem define a métrica
   tende a vencer nela.

2. **New Segment Anything Models Make it Easier to Detect Objects and Create 3D
   Reconstructions** — Meta Newsroom, 19/11/2025.
   https://about.fb.com/news/2025/11/new-sam-models-detect-objects-create-3d-reconstructions/
   *Sustenta:* data do lançamento, pesos abertos, o exemplo "pessoas sentadas que não estão de
   boné vermelho", e o destino em produto (Instagram Edits, Marketplace). *Confiabilidade:*
   média — comunicação institucional; boa para data e escopo, ruim para desempenho.

3. **SAM 3: Segment Anything with Concepts — documentação Ultralytics.**
   https://docs.ultralytics.com/models/sam-3
   *Sustenta:* LVIS 47,0 vs 38,5; COCO 53,5; 30 ms com 100+ objetos em H200; 65,0 CGF1 contra
   74,2 do limite inferior humano; SAM 3.1 em 27/03/2026 com ~7× em 128 objetos; 3,45 GB; a
   lista de limitações. *Confiabilidade:* alta para números reproduzidos de paper — é
   documentação de terceiro que integra o modelo, com incentivo a que ele funcione, mas os
   números batem com [1].

4. **DINOv3: Self-supervised learning for vision at unprecedented scale** — AI at Meta,
   14/08/2025. https://ai.meta.com/blog/dinov3-self-supervised-vision-model/
   *Sustenta:* 7B parâmetros, 1,7B imagens, licença comercial, backbone congelado dividindo
   custo entre tarefas, WRI de 4,1 m para 1,2 m no Quênia, NASA JPL. *Confiabilidade:* média-alta
   — blog de laboratório; o número do WRI é de terceiro citado e eu não abri a fonte do WRI.

5. **Launch: Use Segment Anything 3 (SAM 3) with Roboflow** — Roboflow, 19/11/2025.
   https://blog.roboflow.com/sam3/
   *Sustenta:* que a ferramenta comercial absorveu o modelo no mesmo dia; Label Assist, Auto
   Label, Workflows; e a ressalva de que SAM 3 é *compute intensive* e que texto não identifica
   tudo perfeitamente. *Confiabilidade:* média — fornecedor; útil justamente porque as
   limitações estão no próprio texto de lançamento.

6. **Open Vocabulary Segmentation with SAM 3 and Roboflow** — Roboflow, 14/07/2026.
   https://blog.roboflow.com/open-vocabulary-segmentation/
   *Sustenta:* a definição operacional ("digite 'porta'... sem dataset e sem treino"), a
   arquitetura em uma linha, e os limites — melhor com nome comum e fronteira clara, "evite
   classes amplas com partes específicas". *Confiabilidade:* média, mesma ressalva de [5].

7. **Best Object Detection Models 2026: RF-DETR, YOLOv12 & Beyond** — Roboflow, 04/05/2026.
   https://blog.roboflow.com/best-object-detection-models/
   *Sustenta:* zero-shot fica atrás do afinado; prototipar aberto e produzir fechado; RF-DETR
   acima de 60 mAP e 1,7 ms em T4 (Nano); YOLO-World a 52 FPS; Grounding DINO 52,5% zero-shot no
   COCO. *Confiabilidade:* média — fornecedor recomendando o próprio RF-DETR; usei a parte que
   contraria a tese do mapa.

8. **Open-Vocabulary Detection — Grounding DINO, Florence-2, OWLv2, RT-DETR, RF-DETR** —
   Forasoft, 2026.
   https://www.forasoft.com/learn/ai-for-video-engineering/articles-ai/open-vocabulary-detection-grounding-dino-florence-2-rtdetr-rfdetr
   *Sustenta:* toda a aritmética de `e3` — 80 ms/imagem na L4, 21,7 ms no Jetson Orin Nano,
   250 inf/s do RF-DETR-L, US$ 3.960 vs US$ 7.920–9.900/mês em 50 lojas, gatilho de 500–1.000
   exemplos. *Confiabilidade:* média — relato de integrador, sem revisão por pares; os números
   são internamente consistentes e conservadores, e é a única fonte que abri com custo de frota
   real. Efeito nenhum depende só dela: `e3` também se apoia em [3] e [9].

9. **SAM3: A New Era for Open-Vocabulary Segmentation and Edge AI** — Edge AI and Vision
   Alliance, 24/11/2025.
   https://www.edge-ai-vision.com/2025/11/sam3-a-new-era-for-open%E2%80%91vocabulary-segmentation-and-edge-ai/
   *Sustenta:* SAM 3 grande demais para dispositivo de baixa potência, e o padrão
   professor-aluno (nuvem rotula, modelo compacto embarca). *Confiabilidade:* média — associação
   setorial, portanto parte interessada em edge; a afirmação técnica bate com o tamanho do modelo
   em [3].

10. **Real-time open-vocabulary perception for mobile robots on edge devices: a systematic
    analysis of the accuracy-latency trade-off** — *Frontiers in Robotics and AI*, 21/10/2025.
    https://pmc.ncbi.nlm.nih.gov/articles/PMC12583037/
    *Sustenta:* NanoOWL(patch32)+EfficientViT-SAM-L0 a 47,51 FPS com mIoU 84,64%; pipelines com
    YOLO-World a 22–26 FPS; e a ressalva de que quantização agressiva degrada a máscara.
    *Confiabilidade:* alta — periódico com revisão por pares, medição sistemática, hardware
    declarado. É a melhor fonte do mapa sobre o limite de edge.

11. **OCR-free Document Understanding Transformer (Donut)** — Kim, Hong, Yim et al. (NAVER),
    arXiv 2111.15664, submetido 30/11/2021, ECCV 2022.
    https://arxiv.org/abs/2111.15664
    *Sustenta:* a origem de R2 e os três problemas do OCR (custo, inflexibilidade, propagação de
    erro). *Confiabilidade:* alta — paper revisado, conferência de primeira linha. Ressalva de
    idade: é de 2021, e serve como marco de origem, não como estado da arte.

12. **OCR & AI: Vision Models Replace OCR** — Extend, 03/08/2026.
    https://www.extend.ai/resources/ocr-and-ai-vision-language-models-replacing-text-recognition
    *Sustenta:* 0,847 de F1 ajustado de layout em 1.500 amostras; 95,7% em 1.359 prompts;
    98,5% vs 60–75%; e os três modos de falha do OCR tradicional. *Confiabilidade:* **baixa a
    média — é fornecedor medindo o próprio motor**, não dá preço por página e não diz onde o OCR
    continua melhor. Tratada como alegação de vendedor em todo o documento.

13. **VICTORY: Meta Strips Facial Recognition Code From Smart Glasses App After Public Outcry** —
    EFF, 08/06/2026.
    https://www.eff.org/deeplinks/2026/06/victory-meta-strips-facial-recognition-code-smart-glasses-app-after-public-outcry
    *Sustenta:* o sistema NameTag embarcado, a remoção em 05/06 menos de 48h depois da
    reportagem, e a posição de que a ambição não desapareceu. *Confiabilidade:* alta para o
    fato e para a data; é organização de advocacia, portanto com posição declarada — o que ela
    afirma é verificável e foi verificado por terceiros.

14. **ACLU and 75 Organizations Sound Alarm on Meta's Plan to Add Facial Recognition Technology
    to Ray-Ban and Oakley Eyeglasses** — ACLU, 13/04/2026.
    https://www.aclu.org/press-releases/aclu-and-75-organizations-sound-alarm-on-metas-plans-to-add-facial-recognition-technology-to-ray-ban-and-oakley-eyeglasses
    *Sustenta:* 75 organizações, a exigência de interrupção, e o argumento sobre expectativa de
    anonimato em público. *Confiabilidade:* alta para o fato do ato coletivo; é peça de
    advocacia e o argumento é normativo, não factual.

15. **Next-Gen Ray-Ban Meta Glasses Could Recognize Faces** — UploadVR.
    https://www.uploadvr.com/next-gen-ray-ban-meta-2026-super-sensing-facial-recognition-live-ai/
    *Sustenta:* "super sensing" e Live AI de horas em vez de ~30 minutos. *Confiabilidade:*
    **baixa** — reportagem sobre plano não lançado, e **a data voltou ambígua na minha
    verificação** (2026 no índice de busca, 08/05/2025 na página). Nenhum efeito deste mapa se
    apoia só nela.

16. **Be My Eyes** — Wikipédia (consultada em 22/09/2026).
    https://en.wikipedia.org/wiki/Be_My_Eyes
    *Sustenta:* ~1 milhão de usuários cegos/baixa visão, >10 milhões de voluntários, Be My AI
    lançado em março de 2023 sobre GPT-4, 1 milhão de sessões em semanas, 180+ idiomas.
    *Confiabilidade:* média — enciclopédia colaborativa; usei porque a página institucional
    correspondente devolveu HTTP 403 (§12), e os números aparecem com divergência interna
    (900 mil vs 1 milhão) que a própria página expõe.

17. **Skyvern — automação de navegador por LLM e visão computacional** — GitHub.
    https://github.com/Skyvern-AI/skyvern
    *Sustenta:* a tela como imagem, 23,1 mil estrelas, 64,4% no WebBench, vantagem em tarefas de
    escrita. *Confiabilidade:* média — README do próprio projeto; estrelas são verificáveis, o
    número de benchmark é auto-reportado.

18. **Data Labeling Market — Size, Share & Competitive Landscape** — Mordor Intelligence.
    https://www.mordorintelligence.com/industry-reports/data-labeling-market
    *Sustenta:* US$ 2,61 bi em 2026 → US$ 7,02 bi em 2031, CAGR 21,94%; manual em 42,31% em
    2025; programático a 22,16% a.a.; o fluxo "pré-rotular com modelo fundacional, humano nas
    fatias ambíguas"; e a observação de que a supervisão humana continua obrigatória em vertical
    de alto risco. *Confiabilidade:* média — consultoria de mercado, metodologia não pública;
    a *direção* (composição mudando) importa mais aqui que o valor absoluto.

19. **ANPD manda suspender biometria facial de crianças em escolas do Paraná** — Núcleo
    Jornalismo, 06/08/2026 (decisão de 04/08/2026).
    https://nucleo.jor.br/reportagem/2026/08/06/anpd-manda-suspender-biometria-facial-de-criancas-em-escolas-do-parana/
    *Sustenta:* a suspensão do "Escola Paraná Biometria"; ~1 milhão de estudantes em 2.136
    escolas e 100 mil servidores; Celepar e Valid; e os quatro fundamentos — base legal,
    efetividade, mitigação de risco, alternativa menos invasiva. *Confiabilidade:* alta —
    veículo especializado, decisão administrativa identificada e citada.

20. **Smart Sampa de Ricardo Nunes é instalado em Caps e prende paciente por engano** — Brasil
    de Fato, 18/12/2025.
    https://www.brasildefato.com.br/2025/12/18/smart-sampa-de-ricardo-nunes-e-instalado-em-caps-e-prende-paciente-por-engano/
    *Sustenta:* o caso do usuário retirado de grupo terapêutico sob mira de armas e liberado na
    delegacia; ao menos 6 denúncias formais na Comuda; ao menos 2 abordagens indevidas
    confirmadas em novembro. *Confiabilidade:* média — veículo com linha editorial declarada; o
    caso é narrado com fonte institucional (Comuda) e data.

21. **Programa Smart Sampa** — Secretaria Municipal de Segurança Urbana, Prefeitura de São Paulo.
    https://prefeitura.sp.gov.br/web/seguranca_urbana/w/smart-sampa-2
    *Sustenta:* 50.000 câmeras (20.000 próprias, 30.000 integradas de redes privadas), uso de
    reconhecimento facial, central 24/7 com ~250 agentes, 159 prisões em flagrante.
    *Confiabilidade:* média — fonte oficial do operador do sistema; boa para escala declarada,
    interessada quanto a resultado.

22. **Smart Sampa — site do programa.** https://smartsampa.prefeitura.sp.gov.br/
    *Sustenta:* a afirmação de conformidade com a LGPD e a retenção de 30 dias para leitura de
    placa sem restrição. *Confiabilidade:* média, mesma ressalva de [21].

23. **Votação do marco da IA fica para 2026 em meio a impasses políticos e críticas ao texto** —
    Desinformante, 19/12/2025.
    https://desinformante.com.br/votacao-do-marco-da-ia-fica-para-2026-em-meio-a-impasses-politicos-e-criticas-ao-texto
    *Sustenta:* PL 2338 aprovado no Senado e adiado na Câmara; reconhecimento facial como risco
    excessivo com rol amplo de exceções; a leitura da Coalizão Direitos na Rede sobre o "vácuo
    regulatório". *Confiabilidade:* média-alta para o trâmite; a avaliação do rol de exceções é
    de organização de advocacia e está atribuída a ela no texto.

24. **Red Lines under the EU AI Act: Restricting Real-time Remote Biometric Identification
    Systems for Law Enforcement Purposes** — Future of Privacy Forum, 07/04/2026.
    https://fpf.org/blog/red-lines-under-the-eu-ai-act-restricting-real-time-remote-biometric-identification-systems-for-law-enforcement-purposes/
    *Sustenta:* o núcleo de R3 — a proibição se aciona por identificação biométrica remota
    contra banco de referência, com quatro critérios cumulativos e três exceções estreitas; e a
    distinção identificação × verificação. *Confiabilidade:* alta — think tank especializado em
    privacidade, análise jurídica com artigo citado. **Ressalva importante:** o texto que li não
    trata de reconhecimento de atributo não-biométrico; a inferência de que a descrição aberta
    fica fora do alcance da norma **é minha**, derivada do que a norma exige, não uma afirmação
    da fonte.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 12 (frontmatter diz 12)
efeitos ordem 2: 15 (frontmatter diz 15)
efeitos ordem 3: 9 (frontmatter diz 9)
prazo > horizonte (2036) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 7 [('e1.1.1', 2037), ('e2.1.1', 2039), ('e5.1.1', 2040), ('e6.1.1', 2039), ('e10.1.1', 2039), ('e10.2.1', 2040), ('e12.1.1', 2037)]
confiança ordem 1: alta 4 · media 7 · baixa 1
confiança ordem 2: alta 0 · media 10 · baixa 5
confiança ordem 3: alta 0 · media 0 · baixa 9
links da seção 11: 24/24 respondem (frontmatter diz fontes: 24)
RESULTADO: ok
```

Comando executado:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2036/11-maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto/tendencia-maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto.md --links
```

Os **sete** efeitos de 3ª ordem que o verificador lista como além do horizonte — `e1.1.1` e
`e12.1.1` (2037), `e2.1.1`, `e6.1.1` e `e10.1.1` (2039), `e5.1.1` e `e10.2.1` (2040) — estão
declarados como fora da janela na prosa da §5 e no registro da §7.9, como manda a TMI-0055. Não
são erro: são a resposta honesta a prazos que a classe de referência não deixa puxar para dentro
de 2036. **Dois deles vieram da bateria da §6; cinco vieram da conferência de teto da §7.7**, que
o gatilho da TMI-0086 tornou obrigatória aqui (6 dos 9 terminais na faixa `[2034, 2036]`, 66,7%).

⚠️ **Leitura do contador.** Esta linha só acusa violação, nunca ausência: um mapa comprimido sai
`ok` igual a um bem calibrado. Na primeira versão deste documento ela imprimia **2** e eu quase a
li como conformidade — que é exatamente o erro que a TMI-0080 nomeia e a TMI-0081 mediu. O número
informativo não é este contador; é a densidade da faixa do teto, que está na §7.7.

### 12.2 Premissas assumidas (o que o briefing não cobria)

O bloco `briefing:` veio completo — modo, tema, horizonte, público, recorte, descartado, viés,
zona de interesse, busca web. Conforme a §0 da skill, **não houve rebaixamento de confiança por
ausência de entrevista**. O que o briefing não cobria e eu assumi:

1. **Sem mapa de aluno de referência.** Modo MAPA independente, sem confronto.
2. **"Nota sobre o Brasil"** foi implementada como §3.5 mais aterrissagem brasileira dentro de
   `e6.1`, `e7.1.1`, `e10.2` e `e12` — e não como seção separada, que o formato não prevê.
3. **"Ideias óbvias a excluir: as que servem para qualquer tema"** foi operacionalizado como a
   lista de efeitos proibidos da skill, e derrubou `e9` na §6.
4. **Falseador declarado** ("evidência de que a adoção já passou da maioria inicial, ou de que a
   tecnologia não rompe nada") virou critério do §2: foi ele que recusou OCR tradicional,
   classificação de imagem, detecção de classe fixa e reconhecimento facial 1:N como raízes.
5. **Ética do experimento.** O briefing não diz nada sobre material humano; assumi consentimento
   integral, acervo da própria turma e descarte ao fim da aula, e declarei isso na §10 como
   decisão de quem dá a aula.

### 12.3 Efeitos cortados na bateria da §6

Ficam aqui na íntegra, porque o que não está registrado não pode ser processado depois.

**`e4.1` — removido (regra de parada).**
> *"A métrica de qualidade de dataset deixa de ser concordância entre anotadores e passa a ser
> concordância entre modelo e humano sobre o que a palavra quer dizer."*
> Ordem 2, sinal fraco, prazo 2031, confiança baixa.
> **Por que caiu:** é `e4` mais adiante. Mesmo ator (fornecedor de ferramenta de anotação),
> mesmo mecanismo (o desenho da máscara deixa de ser o gargalo). A skill manda parar quando não
> há troca de ator nem de mecanismo, e eu parei. Se alguém quiser reabrir, o caminho é trocar o
> ator: quem compra auditoria de dataset, não quem a vende.

**`e9` — removido (teste de especificidade).**
> *"Os cursos de auxiliar administrativo do Sistema S perdem a competência central que vendiam —
> preencher e conferir — e passam a vender conferência de saída de máquina."*
> Ordem 1, sinal fraco, prazo 2032, confiança baixa.
> **Por que caiu:** nomear o Sistema S não salva o efeito. Troque a raiz por qualquer outra
> automação de trabalho de escritório — RPA, planilha inteligente, assistente de e-mail — e a
> frase continua servindo. É o anti-padrão "formação reorganiza o currículo" com um nome próprio
> colado. O mecanismo que eu tinha escrito ("porque `e6` esvazia a tarefa que o curso ensina")
> é verdadeiro e genérico ao mesmo tempo, que é a pior combinação.
> **O que sobreviveria, se alguém quisesse reescrevê-lo:** a parte específica é que a competência
> nova não é "usar IA", é *escrever critério de aceitação em texto* — e essa sobreviveu, em
> `e13.1`.

**`e13.1` original — removido e substituído (teste da causa solta).**
> *"A vistoria de sinistro por foto deixa o perito fora do caso simples e o concentra em fraude
> e disputa."*
> Ordem 2, sinal médio, prazo 2030, confiança média.
> **Por que caiu:** removendo as três raízes deste mapa, o efeito acontece igual. Estimativa de
> dano por foto é visão de classe fixa treinada em milhões de imagens de sinistro — tecnologia
> madura, com o mecanismo econômico já fechado independentemente de vocabulário aberto. Era o
> efeito mais "vendável" do ramo e o que menos derivava da raiz.
> **Substituído por:** *"A contratação para triagem visual deixa de pedir experiência no domínio
> e passa a pedir capacidade de escrever o critério em texto"* — que só acontece se o critério
> for exprimível em linguagem, e portanto depende de R1/R3.

### 12.4 Candidatos a disrupção-raiz recusados, com o registro da recusa

| Candidato | Onde está na difusão | Recusa |
|---|---|---|
| **OCR tradicional** | maioria, há mais de 20 anos | *Candidato recusado como raiz: adoção em maioria desde os anos 2000; tratado como contexto na §3.* |
| **Classificação de imagem** | maioria | *Recusado: é o que já roda em produto de massa. Contexto.* |
| **Detecção com classes fixas** | maioria — é o *hot path* de quase todo produto embarcado em 2026 [8] | *Recusado: maduro. Entra no mapa como a retroação `e3`, não como raiz.* |
| **Reconhecimento facial 1:N em segurança pública** | maioria em capital brasileira — 50 mil câmeras num único município [21] | *Recusado como raiz: maduro. O que é emergente é a disputa regulatória sobre ele, e isso entrou como `e12`, efeito.* |
| **Anotação assistida por modelo** | adoção precoce | *Recusado: não rompe nada sozinha — acelera. É `e1.1`, efeito de R1.* |
| **Backbone auto-supervisionado (DINOv3)** | produto de nicho | *Recusado: habilitador, não ruptura autônoma. Toda mudança que ele causa em quem projeta mídia passa por R1. Tratado como pré-condição.* |
| **VLM multimodal genérico ("o modelo que vê e fala")** | adoção precoce | *Recusado por falta de recorte: é o substrato de R2 e R3 ao mesmo tempo, e como raiz diluiria o mapa inteiro num "modelos ficam melhores". Não passa na pergunta 1 do §2.* |
| **Óculos de IA como produto** | produto de nicho | *Recusado por ser produto, não ruptura — o anti-padrão explícito da skill ("raiz que é produto"). O que rompe é `R3`, e os óculos são o vetor.* |

### 12.5 Buscas que não deram em nada

1. **Número de submissões anuais em cs.CV no arXiv.** Queria uma medida de aceleração do campo.
   Obtive "35.020 entradas em cs.CV em 2025" via resumo de busca, sem página de estatística
   aberta que eu pudesse citar, e nada sobre a fatia de vocabulário aberto. **Não usei.** A
   métrica que eu queria de verdade — quantos papers por ano usam "open-vocabulary" no título —
   não existe publicada.
2. **Página institucional do Be My Eyes sobre o marco de 1 milhão de usuários.** A URL
   `bemyeyes.com/news/be-my-eyes-reaches-1-million-blind-and-low-vision-users-and-10-million-volunteers/`
   devolveu **HTTP 403**. Recorri à Wikipédia [16], que traz os mesmos números com divergência
   interna declarada (900 mil no infobox, 1 milhão no corpo).
3. **Quantas pessoas trabalham com digitação e conferência documental no Brasil.** Achei
   tamanho de mercado de BPO financeiro (~R$ 26,8 bi em 2024, crescimento projetado de 11,7%
   a.a.) em resumo de busca, mas **nenhum número de pessoas**, que é o que `e6.1` precisava.
   Nenhuma fonte aberta. O efeito ficou com confiança média por causa disso.
4. **Energia por inferência de modelo de vocabulário aberto.** Nada citável. A dimensão
   ecológica do STEEP ficou declaradamente vazia (§5).
5. **`ORTHOS`.** Não abri o repositório. O sinal fraco SF5 está marcado como não verificado.
6. **Contagem de câmeras do Smart Sampa na página do próprio programa** — a página
   `smartsampa.prefeitura.sp.gov.br` não traz o número; ele veio da página da Secretaria [21].
   Registro porque a discrepância de fontes oficiais sobre a escala do maior sistema de
   videomonitoramento da América Latina é, ela mesma, um dado.
7. **Medição pública de reidentificação de pessoa por descrição de atributo em vocabulário
   aberto.** Procurei em três formulações diferentes. **Não existe fonte aberta que eu tenha
   encontrado.** Esta ausência é a razão de ser do experimento da §10 e está registrada como
   suposição escondida n.º 4 na §7.5.

### 12.6 Números que ficaram fora do corpo do documento

Levantados, não usados, com o motivo:

- **"7 milhões de óculos de IA vendidos em 2025"** e **"código embarcado em mais de 50 milhões
  de Ray-Ban Meta Gen 2"** — os dois vieram do mesmo resumo de busca e não fecham entre si.
  Nenhum foi confirmado em página aberta. Fora (§8.1).
- **"Faceprint de 2.048 números" no NameTag** — apareceu em resumo de busca, não estava no texto
  da EFF que abri. Fora (§8.3).
- **Qwen3-VL**: licença Apache 2.0, variantes 235B-A22B e 30B-A3B, 32 idiomas, avaliado em
  OCRBench e OCRBench_v2 — vindo de resumo de busca e da página do projeto, sem que eu abrisse o
  relatório técnico (arXiv 2511.21631). Citado em `tecnologias_citadas`, sem sustentar efeito.
- **Sinistro por foto**: "acurácia dentro de 10–15% da estimativa do perito de campo", "custo de
  processamento de US$ 15–22 para US$ 3–5", "de 14 dias para menos de 24 horas" — todos de
  resumo de busca, sem página aberta. Foram a evidência do efeito que a §6 derrubou de qualquer
  forma (12.3), e estão aqui só para quem quiser reabrir o caso.
- **YOLOE-26 / YOLO26** com *prompting* de texto, visual e zero-shot — apareceu em duas buscas,
  não abri a fonte, não sustenta efeito. Está em `tecnologias_citadas` pelo registro.
- **Mercado de ferramentas de anotação**: US$ 2,14 bi em 2026 → US$ 14,26 bi em 2034 (CAGR
  26,76%), de consultoria diferente de [18], com números incompatíveis com ela. Não usei nenhum
  dos dois como afirmação forte; usei de [18] só a **composição** (manual 42,31%, programático a
  22,16% a.a.), que é o que o efeito precisa.

### 12.7 Caminhos abandonados

**Uma quarta raiz que não sobreviveu: "a interface deixa de ser contrato".** Cheguei a escrever
uma raiz em torno de Skyvern e da automação por visão de tela: se a máquina lê a tela como
qualquer cena, o DOM e a API deixam de ser o acordo entre sistemas, e o design de interface
passa a ter duas audiências. Derrubei por dois motivos. Primeiro, 64,4% no WebBench [17] é
*demo pública*, não produto — entraria com confiança baixa em toda a cadeia, diluindo. Segundo,
e mais decisivo: o mecanismo dela é o mesmo de R1 (perceber por conceito o que não foi
declarado), aplicado a um domínio diferente. Seria um ramo de R1, não uma raiz. Ficou como
sinal fraco SF3, que é o lugar honesto dela neste mapa. **Se o WebBench passar de 85% com custo
viável, ela vira raiz e o mapa precisa ser refeito.**

**Um ramo de "imagem como dado estruturado por padrão" que virou efeito.** A terceira pergunta
do enunciado do tema — "se toda imagem é legível por máquina, a imagem vira dado estruturado por
padrão? O que sobra de privado numa foto?" — chegou a ser candidata a raiz. Recusei porque é
**consequência**, não ruptura: é exatamente `e10` mais `e10.1` mais `e10.1.1`, que é onde ela
está. Mantê-la como raiz teria criado a "raiz única disfarçada em várias" que o §6.4 procura.

**Uma versão do experimento que descartei.** A primeira ideia era comparar SAM 3 contra um YOLO
num conjunto de fotos de produtos, medindo quanto tempo se economiza para chegar a um dataset.
Descartei: mede economia de esforço, que já se sabe, e não responde nenhuma pergunta de futuro.
O experimento que ficou responde a única suposição do mapa que eu não consegui sustentar com
fonte.

### 12.8 O enunciado do tema × o que este mapa fez com ele

Registro para o confronto em aula.

| O que o enunciado perguntou | Onde está no mapa | O que mudou |
|---|---|---|
| 1ª ordem: o que acontece com a vigilância? | `e10`, `e10.2`, `e12` | Deslocada: o achado não é "mais vigilância", é que ela **muda de categoria jurídica** e sai do alcance da norma escrita. |
| 1ª ordem: e a acessibilidade? | `e11`, `e11.1` | Confirmada e com o contrapeso da dependência de nuvem, que o enunciado não pedia. |
| 1ª ordem: e a automação de trabalho visual? | `e13`, `e13.1` | Rebaixada. O efeito óbvio (perito de sinistro) não derivava da raiz e caiu na §6. |
| 2ª ordem: o que acontece com o formulário e o PDF? | `e7`, `e7.1`, `e7.2` | Mantidos, e os dois **rebaixados** na bateria — são os efeitos de que eu mais gosto e que menos se sustentam. |
| 2ª ordem: e a profissão de digitação e conferência? | `e6.1`, `e6.1.1` | Mantida, com confiança limitada pela ausência de número brasileiro (§12.5.3). |
| 3ª ordem: a imagem vira dado estruturado por padrão? | `e10.1`, `e10.1.1` | Recusada como raiz, mantida como cadeia — e a conclusão acionável é que **a política de retenção passa a valer mais que a decisão de instalar a câmera**. |
| Wildcard sugerido: SAM-like em tempo real em óculos de consumo | W2 | Mantido como wildcard, com o número que o torna improvável (3,45 GB contra o que cabe num celular) e com a consequência explícita: sem `e3`, o mapa comprime cinco anos. |
| Sinal fraco sugerido: `ORTHOS` | SF5 | Mantido **e marcado como não verificado**, porque não abri a fonte. |

### 12.9 Registro das buscas

Vinte buscas em 22/09/2026, alternando português e inglês: SAM 3 / Segment Anything with
Concepts · DINOv3 dense features · open-vocabulary detection em produção 2026 · OCR-free
document understanding 2026 · Ray-Ban Meta reconhecimento visual 2026 · EU AI Act biometric
categorisation agosto 2026 · Smart Sampa ANPD LGPD 2026 · mercado de anotação de dados e
modelos fundacionais · Be My Eyes adoção 2026 · BPO digitação e conferência Brasil 2026 ·
segmentação de vocabulário aberto no edge / EdgeSAM / MobileSAM · agentes de uso de computador
por visão 2026 · PL 2338 status 2026 · Roboflow SAM 3 auto-labeling · inspeção industrial
zero-shot 2026 · busca semântica em fototeca no dispositivo · "Name Tag" Ray-Ban código 2026 ·
arXiv cs.CV submissões por ano · Qwen3-VL benchmark documental · ANPD fiscalização biometria
2026.

Vinte e quatro páginas abertas e lidas (§11). Duas tentativas falharam: `bemyeyes.com` (403) e
um redirecionamento do PMC que precisou ser refeito no domínio novo.

### 12.10 O que este mapa faria diferente com horizonte de 2031

Subseção obrigatória em rodada de horizonte longo (TMI-0059), escrita **depois** da conferência
de teto da §7.7 e portanto sobre prazos já re-derivados.

**Quantas raízes sobreviveriam: duas e meia.**

- **R1 (descrever substitui anotar) sobreviveria inteira.** É a única das três já em adoção
  precoce, e todos os seus efeitos de 1ª ordem cabem: `e3` em 2027, `e2` em 2028, `e1` e `e5` em
  2029, `e4` em 2030. Num mapa de 2031, R1 seria praticamente o mapa inteiro.
- **R2 (documento sem OCR) sobreviveria pela metade.** `e6` (fim do pipeline) e `e8` (o setor
  regulado trava) cabem em 2029. `e7` — o fim do formulário, que é o efeito mais interessante da
  raiz — fica em 2032 e **sairia**. Ou seja: em cinco anos R2 apareceria como mudança de
  ferramenta de BPO, e não como mudança no que é um serviço.
- **R3 (reconhecer sem identificar) sobreviveria só pela retroação.** `e12` (a reação) em 2027 e
  `e11` (acessibilidade) em 2029 cabem; `e10` e `e13` ficam exatamente em 2031, no limite. Mas a
  cadeia que dá sentido à raiz — a lacuna regulatória de `e10.2` e a reescrita da categoria em
  `e10.2.1` — não cabe. **Num mapa de 2031, R3 seria indistinguível de "houve reação pública a
  óculos com câmera", que é notícia, não tendência.**

**Quais efeitos mudariam de ordem ou sairiam.**

| Ordem | Cabem em 2031 | Sairiam |
|---|---|---|
| 1ª | 11 de 12 | `e7` (2032) |
| 2ª | 10 de 15 | `e5.1`, `e7.1`, `e7.2`, `e10.1`, `e13.1` |
| 3ª | **0 de 9** | **todos** |

**A terceira ordem desapareceria por inteiro.** Nenhum dos nove terminais cabe em 2031 — o mais
próximo, `e1.2.1`, está em 2032, e depois da conferência de teto sete deles estão em 2037 ou
adiante. Como o formato da disciplina exige três níveis, um mapa de 2031 deste tema teria de
escolher entre duas saídas ruins: **inventar** uma terceira ordem que caiba (exatamente o que a
TMI-0055 proíbe) ou declarar a cadeia inteira fora da janela, o que faz o documento parecer não
ter cumprido a encomenda.

**Qual seria o teto de confiança — e por que ele subiria, o que é o contrário de uma boa
notícia.** Em 2031 sobreviveriam sobretudo os efeitos de sinal forte e mecanismo já observável:
`e3` (o custo trava, alta), `e2` (protótipo sem dado, alta), `e12` (a reação, alta), `e11`
(acessibilidade, alta). A distribuição de confiança do mapa **melhoraria** — quatro altas sobre
onze efeitos de 1ª ordem, nenhuma baixa na 3ª porque não haveria 3ª. Um mapa de 2031 deste tema
pareceria mais bem calibrado que este, e seria menos útil, porque o que ele teria cortado é
precisamente o que não se enxerga de outro jeito: a convergência 2 (a palavra vira objeto
jurídico, que exige `e5.1` e `e10.2`), a retroalimentação perversa (proibir identificar aumenta
o incentivo para descrever, que exige `e10.2.1`) e a conclusão acionável sobre retenção
(`e10.1.1`). **É essa a medida do que dez anos compram neste tema:** compram a parte
institucional da cadeia — perícia, contrato, norma, política de retenção —, que é onde a
percepção aberta deixa de ser assunto de engenharia.

**A leitura inversa, que também é honesta.** Cinco anos bastam para saber se este mapa está
certo na base. Se em 2031 `e3` tiver caído (vocabulário aberto no caminho crítico), `e6` tiver
acontecido (OCR morto fora do setor regulado) e `e12` tiver se consolidado como norma de espaço,
a cadeia longa deste documento fica de pé. Se qualquer uma das três não tiver acontecido, não
vale esperar 2036 para reescrever.
