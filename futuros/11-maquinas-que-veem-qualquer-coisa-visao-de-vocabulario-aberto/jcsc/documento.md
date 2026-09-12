---
tema: "Máquinas que veem qualquer coisa: visão de vocabulário aberto"
slug: maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto
autor_login: jcsc
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-12
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 11
efeitos_ordem_3: 11
tecnologias_citadas: [SAM 3, SAM 3.1, SA-Co, SAM 2, DINOv3, DINOv2, Grounding DINO, YOLO-World, YOLOE-26, NanoOWL, NanoSAM, EfficientViT-SAM, RF-DETR, Moondream 3, Photon, FastVLM, SmolVLM, Donut, PaddleOCR, EasyOCR, GLM-OCR, DocTR, PaliGemma 2, Florence-2, Skyvern, CVAT, Label Studio, Meta Ray-Ban Display, Be My Eyes, Smart Sampa]
fontes: 17
confianca: media
experimento: "Provador de conceitos — bancada em que a turma escreve o prompt de percepção e vê, ao vivo, o que a câmera passa a enxergar e onde ela erra"
skill_usada: futurizacao-jcsc
publico_ok: false
---

## 1. Resumo

Por trinta anos, um sistema de visão só via o que alguém rotulou antes: a lista de classes era o
limite do mundo. Isso deixou de valer. Com SAM 3 (Meta, nov/2025; atualizado para SAM 3.1 em
mar/2026), a segmentação passou a aceitar **conceito** como prompt — um substantivo curto, uma
imagem-exemplo — e devolve todas as instâncias, em imagem e em vídeo, com ~30 ms por imagem com
mais de 100 objetos numa H200. DINOv3 (ago/2025) mostrou que um backbone congelado, treinado sem
rótulo nenhum em 1,7 bilhão de imagens, bate soluções especializadas em tarefas densas. E a
compreensão de documento sem OCR trocou o pipeline de cinco etapas por uma passagem só. Este mapa
sustenta que a ruptura não está em ver melhor: está em **quem escreve o que a máquina deve ver**.
A tarefa migra de rotular exemplos para redigir conceitos — e a fronteira do conceito ("suspeito",
"bagunça", "fila") passa a ser decidida em texto, por quem projeta, sem passar por dataset, comitê
ou revisão. Três efeitos estruturais aparecem até 2031: a anotação manual sobrevive como perícia de
exceção e não como linha de produção; o formulário perde a função de ser a interface de coleta; e o
que sobe de uma câmera deixa de ser a imagem e passa a ser o predicado extraído dela — fora do
alcance de quem só regula imagem.

## 2. O tema

### O que é

Visão de vocabulário aberto é a família de sistemas que **detecta, segmenta e entende por descrição
em linguagem**, em vez de por lista fechada de classes. Quatro capacidades distintas caem sob esse
guarda-chuva, e vale separá-las porque amadurecem em ritmos diferentes:

1. **Segmentação promptável por conceito** — "segmente todo *ônibus escolar amarelo*" devolve máscara
   e identidade para cada instância (SAM 3, chamada de *Promptable Concept Segmentation*, PCS).
2. **Detecção de vocabulário aberto** — caixa por frase nominal, sem treino (Grounding DINO,
   YOLO-World, YOLOE-26, NanoOWL).
3. **Características visuais sem rótulo** — um backbone auto-supervisionado que serve a qualquer
   tarefa a jusante sem fine-tuning (DINOv2/DINOv3).
4. **Compreensão de documento sem OCR** — a imagem do documento entra inteira e sai estrutura, sem
   a etapa de reconhecer caracteres antes (linhagem Donut → VLMs de documento).

### Onde encosta em mídia e interação

Em três lugares, e os três são de projeto, não de infraestrutura.

**Primeiro, na especificação.** Quando o que a câmera vê é definido por um texto curto, a decisão
sobre a percepção sai da equipe de dados e entra no mesmo lugar onde se escreve microcopy: quem
redige o prompt está desenhando o comportamento do sistema. Isso é design de interação, com todas as
consequências que a palavra carrega — inclusive a de que ninguém revisa uma string.

**Segundo, na acessibilidade.** Descrever o mundo para quem não vê deixou de ser um serviço humano
sob demanda (a lógica original do Be My Eyes, com voluntário na outra ponta) e virou uma função do
dispositivo, contínua e sem interlocutor. Isso muda a relação: de pedir ajuda a consultar.

**Terceiro, na captura.** Óculos com câmera já são produto de varejo. O que está em jogo agora não é
filmar — é o campo de visão ser rotulado continuamente e subir como *metadado*, não como imagem.

### Por que merece mapa de futuro e não estado da arte

Porque a parte técnica já está resolvida o suficiente para não ser mais a pergunta interessante. O
que não está resolvido é social e jurídico: quem escreve o conceito, quem audita o conceito escrito,
o que acontece com o consentimento quando a captura deixa de ter um gesto visível, e o que sobra de
"privado" numa foto quando toda foto é legível por máquina. Um levantamento de estado da arte
responderia "qual modelo é melhor em LVIS". A pergunta que importa é outra: **o que acontece com um
mundo em que descrever é o mesmo que detectar.**

### A entrevista (Etapa 1 da skill), registrada

A skill `futurizacao-jcsc` proíbe gerar qualquer conteúdo antes da entrevista. Ela foi feita; as
cinco perguntas e as respostas recebidas estão reproduzidas na íntegra na seção 12. Em resumo:

| Pergunta | Resposta recebida |
|---|---|
| 1. Horizonte temporal | **2031** |
| 2. Público-alvo | **Quem projeta mídia e interação** |
| 3. Recorte geográfico | **Global, com uma nota sobre o Brasil** |
| 4. Descartes explícitos | **O que já é comum em produto de massa** (a régua da disciplina). Nenhuma outra exclusão |
| 5. Viés desejado | **Neutro** |

Nenhuma pergunta foi respondida com "tanto faz" ou pulada. Duas instruções adicionais foram dadas
fora do roteiro das cinco perguntas e ficam registradas porque condicionam o mapa: profundidade de
três ordens (que é o padrão da skill de qualquer forma), e modo "a partir de uma inovação/tema", não
a partir de um setor. Também foi declarado o critério de refutação do solicitante — *o que o faria
mudar de ideia*: evidência de que a adoção já passou da maioria inicial de Rogers, ou de que a
tecnologia não rompe nada, só melhora o que existe. Esse critério é retomado na seção 7, e ele é o
ponto mais desconfortável deste mapa: **parte da tecnologia aqui já passou dessa linha** (ver §4.5).

## 3. Onde isso está hoje

### O que já existe e funciona

**Segmentação por conceito, em produção.** SAM 3 foi submetido ao arXiv em 20/11/2025 (revisão em
28/03/2026), liderado por Nicolas Carion com 37 coautores, e apresenta a *Promptable Concept
Segmentation*: o prompt é uma frase nominal curta, ou uma imagem-exemplo, ou os dois, e a saída são
máscaras **e identidades** para todas as instâncias que casam. O paper reporta que o modelo "dobra a
acurácia dos sistemas existentes" em PCS de imagem e de vídeo [1]. O dataset por trás, SA-Co, tem
mais de 4 milhões de rótulos de conceito únicos, incluindo negativos difíceis [1]; a documentação de
terceiros reporta ≈5,2 M imagens, 52,5 K vídeos e ≈1,4 bilhão de máscaras.

O que tira isso do laboratório é o anúncio de 27/03/2026, junto com o SAM 3.1: os números de
velocidade (30 ms para uma imagem com mais de 100 objetos detectados numa H200; throughput de vídeo
subindo de 16 para 32 FPS numa H100; rastreio de até 16 objetos numa única passagem) e, sobretudo,
os produtos — **Instagram Edits** (efeitos aplicados a uma pessoa ou objeto específico dentro do
vídeo), **Facebook Marketplace** ("View in Room"), e o Segment Anything Playground [2]. Usuários
preferem a saída do SAM 3 à do baseline mais forte na proporção de aproximadamente 3 para 1 [2].

**Características visuais sem rótulo nenhum.** DINOv3 (14/08/2025) foi treinado com 1,7 bilhão de
imagens e 7 bilhões de parâmetros — 12× o dataset e 7× o modelo do DINOv2 — e a alegação central é a
que interessa aqui: **um único backbone congelado supera soluções especializadas** em detecção e
segmentação semântica, sem fine-tuning [3]. O exemplo aplicado que a Meta publica é do World
Resources Institute: erro médio na medição de altura de dossel no Quênia caindo de 4,1 m para 1,2 m
[3]. Licença comercial, pesos abertos, variantes destiladas (ViT-B/L, ConvNeXt) para diferentes
orçamentos de inferência [3].

**Vocabulário aberto rodando na borda, em tempo real.** Um estudo publicado em 21/10/2025 mediu a
combinação detector aberto + segmentador num Jetson AGX Orin 64 GB: NanoOWL (patch32) +
EfficientViT-SAM-L0 chegou a **47,51 FPS (21 ms) com 84,64 % de mIoU** [4]. O mesmo estudo mostra o
trade-off que ninguém contorna: NanoOWL é ~2,65× mais rápido que YOLO-World, mas só aceita frase
nominal; YOLO-World aceita sentença complexa e cai para 26,68 FPS no melhor caso [4]. E registra uma
falha dura: EfficientViT-SAM colapsou (mIoU = 0) sob otimização FP16 agressiva, enquanto NanoSAM se
manteve estável [4].

**Modelos pequenos com grounding.** Moondream anunciou o Photon em 25/03/2026: mais de 60 inferências
por segundo numa H100, 2× a inferência de modelos de tamanho similar em vLLM, com foco declarado em
defeito de manufatura, análise de vídeo de broadcast, inventário de varejo e moderação em tempo real
[5]. Gratuito desde 08/06/2026 [5]. Na mesma faixa: FastVLM (Apple), SmolVLM, MiniCPM-V.

**Documento sem OCR, em serviço financeiro.** O argumento de que o VLM substitui o OCR tradicional já
é argumento comercial: um fornecedor da área (Extend) publica, em ago/2026, que o OCR tradicional
fica em 60–75 % de acurácia em documentos complexos e que sistemas com VLM passam de 98,5 %,
listando adoção em serviços financeiros, crédito imobiliário, saúde e logística [6]. **Estes números
são de fornecedor e devem ser lidos como tal** — ver seção 11.

**Óculos com câmera como produto de varejo.** A linha Ray-Ban Meta está na segunda geração desde
out/2023; Oakley Meta HSTN despachou em 26/08/2025; o Ray-Ban Display foi revelado no Connect 2025
com display integrado e pulseira neural; e em 23/06/2026 a Meta lançou, com a EssilorLuxottica, um
modelo a US$ 299 [7]. O aparelho descreve o ambiente, lê texto em voz alta por OCR e dá direções —
capacidades explicitamente associadas a uso por pessoas com deficiência visual [7], e a parceria com
o Be My Eyes transferiu a chamada de vídeo em primeira pessoa do celular para os óculos.

### O que existe e não funciona

**O caminho de produção ainda passa por treinar.** Este é o contrapeso mais importante do mapa
inteiro, e vem de quem vende ferramenta de visão. O guia de modelos da Roboflow de 15/07/2026 diz,
sem meio-termo: modelos prontos servem para "prototipagem rápida, experimentação zero-shot e
detecção de objetos comuns", mas "aplicações em produção comumente exigem um modelo ajustado em
imagens coletadas do ambiente real de operação" [8]. O fluxo recomendado mantém o humano: auto-label,
**revisar e corrigir**, treinar, avaliar, coletar os casos difíceis [8]. O artigo específico sobre
SAM 3 é igualmente explícito sobre a precisão: funciona melhor com nomes de peça comuns e fronteiras
visuais claras, e "para casos complexos, as máscaras geradas podem ser revisadas e corrigidas para
criar um dataset rotulado para fine-tuning" [9]. A recomendação prática ali é quase cômica de tão
reveladora: use termos simples — "farol" funciona melhor que "farol dianteiro danificado" [9].

**O modelo de conceito não cabe na borda.** SAM 3 tem ~840 M de parâmetros (~3,4 GB) e permanece um
modelo de escala de servidor, sem variantes menores [9]. Quem quer vocabulário aberto em tempo real
num dispositivo usa outra família (NanoOWL, Moondream, FastVLM) e aceita a queda [4].

**A perícia acumulada não transfere.** Um artigo de 04/12/2025 (Sapkota, Roumeliotis, Karkee) sustenta
que há descontinuidade entre SAM2 e SAM3: a experiência construída com prompt espacial (ponto,
caixa, máscara) não transfere para o paradigma multimodal dirigido por conceito [10]. É análise
conceitual, sem números — e está citada aqui como hipótese, não como medida.

**O mercado de rotulagem não encolheu.** A Mordor Intelligence (relatório atualizado em 11/09/2026)
põe o mercado de data labeling em **US$ 2,61 bi em 2026** rumo a **US$ 7,02 bi em 2031** (CAGR
21,94 %) [11]. A rotulagem manual era 42,31 % do valor em 2025 e a automação cresce a 22,16 % ao ano
— mas o relatório é direto: os reguladores exigem auditabilidade, o que empurra os fornecedores a
**manter supervisão humana nas verticais de alto risco** [11]. A leitura honesta é que os modelos de
fundação estão **reestruturando** a anotação, não a eliminando.

### Quem está construindo

Meta FAIR (SAM 1/2/3, DINOv2/v3, e o hardware de captura), IDEA Research (Grounding DINO), Google
(PaliGemma 2, Florence-2 na prática de mercado), Roboflow (RF-DETR, distribuição e tooling),
Ultralytics (YOLO26/YOLOE-26), NAVER (Donut), Moondream/Apple/HuggingFace na faixa pequena, e a
camada de anotação que o vocabulário aberto deveria dispensar e não dispensou (CVAT, Label Studio,
Scale AI — esta última comprada pela Meta por US$ 15 bi em jun/2025, segundo análise de mercado
citada em busca e **não confirmada por fonte aberta nesta rodada**).

### A nota sobre o Brasil

Duas coisas, e as duas apontam na mesma direção: no Brasil, a percepção por máquina já é política
pública antes de ser produto, e a moldura legal ainda não fechou.

**O marco legal está parado entre as casas.** O PL 2338/2023 foi aprovado pelo Plenário do Senado e
**remetido à Câmara dos Deputados em 17/03/2025** [12]. Em setembro de 2026 ainda não há lei; a
votação foi sucessivamente adiada. O texto do Senado classifica reconhecimento facial como risco
excessivo com uma lista larga de exceções para segurança pública — e é exatamente essa lista o ponto
de disputa.

**A implantação, essa, não esperou.** O Smart Sampa opera com 50 mil câmeras em São Paulo. Entre
nov/2024 e nov/2025, **211 pessoas foram abordadas, levadas a delegacia e liberadas**: 67 % (141) por
mandado não baixado e 28 % (59) por inconsistência no reconhecimento facial [13]. A reportagem
localiza quatro ações judiciais: dois autores receberam R$ 5 mil de indenização cada; num terceiro
caso o TJSP classificou três horas dentro de uma viatura a 35 °C como "mero aborrecimento"; e um
quarto, estrangeiro e sem mandado algum, foi parado duas vezes na mesma semana, com divergência de
cor de pele, data de nascimento e filiação [13].

O ponto para este mapa: tudo isso ainda é reconhecimento facial **de lista fechada** — comparar rosto
com banco de procurados. Vocabulário aberto é outra coisa, e pior: dispensa o banco. A pergunta que
o caso brasileiro coloca no mapa é o que acontece com a reparação judicial quando a acusação não
nasce de uma foto comparada com um cadastro, e sim de uma **frase** que alguém escreveu num campo de
configuração.

## 4. As disrupções-raiz

### 4.1 D1 — A lista de classes deixa de ser o limite do mundo

**O que rompe.** Rompe o acoplamento, que durava desde o ImageNet, entre *o que o sistema enxerga* e
*o que alguém rotulou antes*. Não é uma melhoria de acurácia: é a remoção de uma etapa do processo.
Antes, "detectar carrinho de bebê abandonado" exigia um projeto — coletar, rotular, treinar, avaliar,
implantar, e repetir a cada classe nova. Agora exige uma frase. O gargalo migra de **dados** para
**redação**.

**Por que agora e não há cinco anos.** Três coisas convergiram. (a) A escala de conceito: SA-Co com
mais de 4 M de rótulos de conceito únicos e negativos difíceis deu à PCS o que o ImageNet deu à
classificação [1]. (b) A representação sem rótulo: DINOv3 mostrou que um backbone congelado treinado
em 1,7 B de imagens sem supervisão bate especialistas em tarefas densas [3] — ou seja, a parte cara
deixou de ser específica da tarefa. (c) A latência caiu para dentro do orçamento interativo: 30 ms
por imagem com 100+ objetos em servidor [2], 21 ms em Jetson na configuração enxuta [4].

**O que ainda falta.** Que o modelo de conceito caiba onde a câmera está: SAM 3 é modelo de servidor,
~3,4 GB, sem variante pequena [9]. Que a cauda longa funcione: a orientação prática é usar termos
simples e comuns [9], o que é outra forma de dizer que a promessa "qualquer coisa" ainda não vale
para qualquer coisa. E que o fluxo de produção pare de destilar para modelo treinado — hoje ele não
para [8].

### 4.2 D2 — O documento deixa de precisar ser lido para ser entendido

**O que rompe.** Rompe a cadeia OCR → ordem de leitura → layout → regex/template → validação, e com
ela rompe o *template por fornecedor*: a peça de software que precisava ser mantida à mão toda vez
que um emissor mudava o cabeçalho da nota. Os modos de falha do pipeline clássico são bem
catalogados: matchers por coordenada fixa falham em silêncio quando o formato muda; manuscrito sai
ilegível; coluna adjacente é concatenada e transforma tabela em string incoerente; contexto reseta a
cada página [6]. Um VLM de documento não resolve isso melhor — ele **não tem essas etapas**.

**Por que agora.** Porque a alegação saiu do paper e entrou no contrato: há fornecedores publicando
acurácia de campo em produção e nomeando clientes em serviços financeiros, crédito imobiliário,
saúde e logística [6]. E porque o ferramental de OCR migrou junto: as recomendações de OCR de 2026 já
são modelos de linhagem VLM (GLM-OCR) ao lado dos clássicos (DocTR) [8].

**O que ainda falta.** Rastreabilidade. O pipeline antigo era feio mas auditável: cada campo extraído
tinha uma caixa delimitadora, uma confiança de caractere e uma origem no pixel. O VLM devolve o
número sem dizer de onde ele veio — e um número sem origem é um problema em qualquer processo que
possa ser contestado (imposto, crédito, seguro, perícia). Falta também o custo por página em volume,
e falta a resposta sobre alucinação em campo numérico, que a fonte de fornecedor simplesmente não
discute [6].

### 4.3 D3 — A captura deixa de ser um evento e vira um estado

**O que rompe.** Rompe o regime de consentimento inteiro, que é construído sobre um gesto observável:
alguém levanta o aparelho, uma luz acende, um obturador soa. Se a percepção é contínua e o que sobe
é o predicado ("havia três pessoas, uma de uniforme, discutindo") em vez do quadro, então a pergunta
"você está me filmando?" deixa de ser a pergunta certa — e continua sendo a única que a lei sabe
fazer.

**Por que agora.** Porque as três pontas encostaram no mesmo ano. (a) O hardware virou varejo comum,
com um modelo a US$ 299 em jun/2026 [7]. (b) A percepção aberta roda na borda a 47 FPS [4]. (c) A
intenção está documentada: em jun/2026 pesquisadores identificaram no app companheiro dos óculos
código de reconhecimento facial não ativado, internamente chamado **NameTag**, incluindo o gatilho
de alerta "pessoa reconhecida" e os modelos e bancos para detectar, digitalizar e armazenar
assinaturas biométricas; o EFF Threat Lab verificou por análise estática, e a Meta removeu tudo numa
atualização em ~48 h, em 05/06/2026 [14]. E em 09/07/2026 o *Financial Times* descreveu protótipos
("Aperol", "Bellini", mirando fim de 2026/início de 2027) com captura de áudio contínua e uma foto a
cada poucos segundos; sem plano de acender o LED de captura; e com uma arquitetura proposta que
**não armazena a foto nem o áudio — extrai metadado e sobe só isso** [15].

**O que ainda falta.** Falta a lei alcançar o predicado: a moldura europeia proíbe identificação
biométrica remota em tempo real desde 02/02/2025, mas o ajuste de 2026 tratou de adiar obrigações de
alto risco (Anexo III para 02/12/2027; Anexo I para 02/08/2028) e a nova proibição introduzida no
Art. 5º mirou imagem íntima não consensual e CSAM — **não** vigilância visual [16]. Falta bateria e
térmica para "sempre ligado" de verdade. E falta o recuo social ser testado: até aqui ele foi rápido
e eficaz (remoção em 48 h [14]; banimento de óculos inteligentes em tribunais de Nova York em
jul/2026 e na Inglaterra e País de Gales em ago/2026 [7]).

### 4.4 Candidatos cogitados e **descartados pelo critério de maturidade**

O critério da skill: *recuse, trate como presente e não como futuro, qualquer tecnologia que já seja
padrão de mercado consolidado — amplamente adotada pelos líderes do setor E sem debate técnico real
e atual sobre sua substituição no horizonte considerado.* Aplicado candidato a candidato:

| Candidato | Veredito | Por quê |
|---|---|---|
| Classificação de imagem com classes fixas (ResNet/ViT supervisionado) | **Descartado — maduro** | Padrão desde 2015; o debate atual é sobre backbone, não sobre o paradigma. DINOv3 aparece em 2026 como recomendação de **classificação** ao lado de ViT e ResNet [8] — isto é, foi absorvido pelo incumbente |
| Detecção de objeto com classes fixas (linhagem YOLO) | **Descartado — maduro** | É o que roda em produção, por recomendação explícita de quem vende a ferramenta [8] |
| OCR tradicional (Tesseract, PaddleOCR, EasyOCR) | **Descartado como disrupção — maduro** | Consolidado há duas décadas. Porém: aqui o critério tem um segundo gume — existe debate real e atual sobre sua substituição [6][8], e é esse debate, não o OCR, que vira a disrupção D2 |
| Reconhecimento facial 1:N em segurança pública | **Descartado — é presente, não futuro** | 50 mil câmeras em uma só cidade brasileira, 211 abordagens indevidas em 12 meses e jurisprudência se formando [13]. Isso não é um mapa de futuro, é um relatório de operação. Entra no mapa como *contexto* e como *efeito*, nunca como raiz |
| Embeddings faciais e alinhamento de face (insightface, face-alignment) | **Descartado — maduro** | Componente comoditizado |
| Segmentação promptável **geométrica** (SAM 1/2: clique, caixa, máscara) | **Descartado — maduro** | Virou função padrão de ferramenta de anotação em ~2 anos. A ruptura está no salto para conceito, e há quem sustente que a perícia de um paradigma nem transfere para o outro [10] |
| Anotação manual assistida (CVAT, Label Studio) | **Descartado — maduro, e teimosamente vivo** | O tema da disciplina sugere que o vocabulário aberto tende a dispensar essas ferramentas. A evidência de 2026 diz o contrário: mercado em US$ 2,61 bi crescendo a 21,94 % ao ano, com supervisão humana empurrada pela exigência regulatória de auditabilidade [11] |
| Características visuais auto-supervisionadas (DINOv2/v3) | **Não descartado — absorvido em D1** | Não é disrupção separada: é o substrato que torna D1 barato. Sem rótulo, sem fine-tuning, backbone congelado batendo especialista [3] |
| Compreensão de vídeo por ação (SlowFast) | **Descartado — fora de escopo** | Cai no tema 9 (agente corporificado) pela fronteira declarada da disciplina |

### 4.5 O desconforto: parte disto já passou da maioria inicial

O solicitante declarou que mudaria de ideia diante de "evidência de que a adoção já passou da maioria
inicial (Rogers)". Essa evidência existe e está neste documento: SAM 3 está em **Instagram Edits** e
no **Facebook Marketplace** [2] — produtos de massa, exatamente o que a régua da disciplina manda
descartar. A resposta honesta não é ignorar isso, é separar as camadas:

- **A capacidade dentro de um produto fechado (massa).** O usuário do Instagram aplica um efeito a
  "aquela pessoa" sem saber que existe PCS. Isso está do lado maduro da régua e **não** é tratado
  como disrupção aqui.
- **A capacidade como interface exposta a quem projeta (emergente).** Escrever o conceito e receber
  a percepção — decidir, em texto, o que o sistema passa a ver. Isso está em prototipagem e
  pré-rotulagem, com o fluxo de produção ainda destilando para modelo treinado [8][9]. É aqui que o
  mapa opera.

Em vocabulário de Três Horizontes (que o `ESTUDO.md` do autor traz como método adicional): a
segmentação por clique é H1 em declínio de adequação; o vocabulário aberto exposto a quem projeta é
H2 — e o H2 tem dois destinos possíveis, virar H3 ou ser **cooptado pelo H1**. Instagram Edits é
literalmente o H1 cooptando o H2. Este mapa aposta que a exposição da interface sobrevive à
cooptação; se não sobreviver, a seção 7 diz o que cai junto.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A lista de classes deixa de ser o limite do mundo — detectar e segmentar por conceito escrito
    efeitos:
      - id: e1
        ordem: 1
        efeito: Especificar o que uma câmera deve ver vira trabalho de redação, e não de rotulagem
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O dataset rotulado à mão deixa de ser o ponto de partida e vira instrumento de correção da cauda longa
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A anotação sobrevive como perícia de exceção e auditoria, não como linha de produção
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Busca em acervo audiovisual passa a aceitar descrição livre no lugar de etiqueta cadastrada
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O vocabulário controlado de acervos deixa de servir para indexar e passa a servir para disputar sentido
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Inspeção, contagem e triagem visual deixam de exigir um projeto de aprendizado de máquina por caso
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O fornecedor vertical de visão computacional perde a barreira de entrada que era o dataset proprietário
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O valor migra do modelo para o acesso à câmera e para o contrato de operação
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O erro muda de natureza, de classe ausente no modelo para conceito lido de outro jeito
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Normas técnicas e contratos passam a especificar o texto do prompt como requisito auditável
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O documento deixa de precisar ser lido caractere a caractere para ser entendido
    efeitos:
      - id: e3
        ordem: 1
        efeito: A extração de campo deixa de depender de template por fornecedor e de manutenção de regra
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O trabalho de digitação e conferência encolhe para o tratamento de exceção e contestação
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O formulário perde a função de interface padrão de coleta e o padrão passa a ser mandar o documento como ele é
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Surge exigência de rastreabilidade do pixel ao campo, porque o valor extraído perdeu a origem visível
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Documentos passam a nascer com camada legível por máquina assinada na origem, para não depender de quem os lê
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Captura de tela e PDF viram entrada de primeira classe em produto, no lugar de integração formal
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A interface gráfica vira superfície de automação por visão, operada por agente que lê a tela
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A ausência de API deixa de proteger um sistema e a disputa por acesso migra do plano técnico para o jurídico
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A captura visual deixa de ser um evento perceptível e vira um estado contínuo que sobe como predicado
    efeitos:
      - id: e5
        ordem: 1
        efeito: Acessibilidade ganha descrição contínua do ambiente sob demanda, sem depender de um interlocutor humano
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A norma de acessibilidade se estende do site para o espaço físico, cobrando como o ambiente é descrito por máquina
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Quem projeta ambiente passa a projetar também a descrição dele, como hoje projeta sinalização
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: O consentimento deixa de ter um gesto observável no qual se ancorar
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A disputa migra de estão me filmando para o que pode ser inferido a meu respeito
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Espaços passam a declarar política de percepção como hoje declaram política de imagem e de fumo
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: O que trafega deixa de ser a imagem e passa a ser o predicado extraído dela, fora do alcance de quem regula imagem
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: A regulação passa a mirar a inferência permitida e não o sensor instalado
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: A vigilância instalada troca a lista de procurados pela descrição de aparência e de comportamento
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O erro deixa de ser reconhecer a pessoa errada e passa a ser descrever a pessoa certa de um jeito que a incrimina
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A reparação judicial passa a depender do registro do prompt e não da fotografia comparada
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não consegue dizer

**A cadeia continuaria, e o corte em três níveis é arbitrário.** A skill fixa três níveis — decisão
de formato, não do método; o Futures Wheel de Glenn não tem critério de parada formal. Onde a
continuação seria mais óbvia: de `e6.2.1` (regular a inferência, não o sensor) sairia um quarto nível
sobre o que acontece com a pesquisa aberta quando a *capacidade* de inferir vira o objeto regulado —
e isso encosta em licenciamento de modelo, que é outro tema. De `e3.1.1` (o formulário deixa de ser a
interface) sairia um quarto nível sobre o que acontece com a *acessibilidade de formulário*, que é
hoje um dos poucos lugares onde a web é auditável: um campo com rótulo é legível por leitor de tela;
uma foto de papel não é. Isso é um efeito de quarta ordem genuinamente preocupante e ele **não** está
no YAML.

**As três disrupções não são independentes, e o YAML as separa.** D3 depende de D1 (é a percepção
aberta que torna o predicado interessante) e se alimenta de D2 (ler uma placa, um crachá, um recibo
no campo de visão é compreensão de documento sem OCR aplicada ao mundo). Os efeitos `e6.2` e `e3.2`
são, no fundo, o mesmo problema — o dado perdeu a origem — visto de dois lados. Um infográfico gerado
do YAML vai desenhar três rodas separadas, e elas não são.

**Os prazos são ordenações, não datas.** Nenhum número aqui vem de série histórica. Ler "2029" como
"depois de 2028 e antes de 2030" é o uso correto; ler como previsão é erro de quem lê e de quem
escreveu sem avisar — este é o aviso.

**O sinal "forte" não quer dizer "grande".** Quer dizer que hoje já existe evidência observável dele.
`e5` é forte e pequeno; `e6` é médio-forte e enorme.

## 6. Sinais fracos e wildcards

**1. Segmentação *sem* vocabulário.** Há uma linha de trabalho que vai de "vocabulário aberto" para
**vocabulário livre**: em vez de o humano fornecer o conceito, o sistema propõe o próprio vocabulário
para a cena. Se isso amadurecer, a premissa central deste mapa — que a fronteira do conceito é
decidida por quem escreve — se inverte: a fronteira passa a ser decidida por quem treinou. É o sinal
fraco com maior poder de destruir o mapa, e aparece apenas como literatura, sem produto (registrado
como busca no anexo; não abri o paper, então não entra nas fontes).

**2. Percepção aplicada a reação, não a objeto.** A varredura da turma trouxe o `ORTHOS` — extensão
que simula e visualiza resposta emocional a manchetes. A fronteira entre *ver* e *inferir estado
interno* é exatamente onde a regulação europeia já traçou linha: reconhecimento de emoção em trabalho
e educação está entre as práticas proibidas desde 02/02/2025. O sinal fraco não é técnico, é de
contorno: sistemas que inferem afeto sem se chamarem "reconhecimento de emoção".

**3. O recuo social funcionando.** É sinal fraco porque contraria a direção do mapa: código de
reconhecimento facial removido em 48 h após exposição pública [14]; óculos banidos de tribunais em
duas jurisdições em dois meses [7]. Se esse padrão se repetir três ou quatro vezes, D3 não se
concretiza — vira uma capacidade tecnicamente pronta e socialmente interditada, como o Google Glass
foi em 2013. A diferença material entre 2013 e 2026 é que os óculos de agora já se venderam a US$
299 num produto de moda [7], e não é possível banir o que já está no rosto de milhões.

**4. O prompt como peça processual.** Sinal fraco de segunda ordem: no Brasil, a reparação por
abordagem indevida hoje se apoia em mandado e em foto [13]. Em um sistema de vocabulário aberto, o
documento equivalente é o texto de configuração. A primeira decisão judicial que exigir o log de
prompts de um sistema de videomonitoramento muda o custo de operá-lo — e nenhuma das arquiteturas em
uso hoje guarda esse log com garantia de integridade.

### Wildcards (baixa probabilidade, alto impacto)

**W1 — Modelo de conceito rodando a 30 FPS em óculos de consumo, com rotulagem contínua do campo de
visão.** É o wildcard sugerido pela própria descrição do tema, e o estado atual permite medir quão
longe ele está: 47,5 FPS com 84,6 % de mIoU exigem um Jetson AGX Orin de 64 GB [4] — uma placa de
dezenas de watts, não uma haste de óculos; e o modelo de conceito de referência é de escala de
servidor [9]. Se isso couber no envelope térmico de um óculos antes de 2031, **todos** os efeitos de
D3 antecipam em dois ou três anos e os de `e7` deixam de depender de câmera instalada pelo Estado:
passam a depender de quem está andando na rua.

**W2 — Uma corte trata o predicado como dado pessoal, e não a imagem.** Se um tribunal decidir que
"havia uma pessoa com determinada característica neste local" é dado pessoal independentemente de a
foto ter sido descartada, a arquitetura de "não armazenar a imagem, subir só o metadado" [15] deixa
de ser proteção e vira agravante. Isso inverteria o incentivo de projeto inteiro — e hoje o incentivo
corre na direção oposta.

**W3 — Um vazamento de índice semântico.** Não de fotos: de descrições. Um acervo de predicados
("quem esteve onde, com quem, fazendo o quê") derivado de câmeras de consumo, vazado. O impacto
público de um vazamento de *texto* sobre pessoas é diferente do de um vazamento de imagens, e
ninguém testou ainda qual é pior.

## 7. Contra o próprio mapa

Esta seção é o registro da Etapa 4 da skill (autocrítica obrigatória). Os rebaixamentos abaixo foram
aplicados **ao YAML da seção 5** — os valores que aparecem lá já são os rebaixados; os originais
estão registrados aqui para que a autocrítica seja auditável.

### Rebaixamentos aplicados

| Efeito | Era | Virou | Por quê |
|---|---|---|---|
| `e6` — o consentimento perde o gesto observável | **alta** | **media** | Supunha que a trajetória "sempre ligado, sem LED" segue sem atrito. A evidência de 2026 mostra atrito forte e rápido: código removido em 48 h sob pressão pública [14]; banimentos em tribunais de duas jurisdições em dois meses [7]; e o próprio produto descrito no FT é protótipo não confirmado [15]. Prazo também empurrado de 2028 para 2029 |
| `e3` — fim do template por fornecedor | **alta** | **media** | Os números que sustentavam "alta" são de **fornecedor** [6], e a mesma fonte não discute alucinação, custo por página nem latência. Um efeito de confiança alta não pode se apoiar em fonte com interesse comercial direto no resultado |
| `e2.1` — fornecedor vertical perde a barreira do dataset | **media** | **baixa** | Contradito por duas evidências independentes: a recomendação de que produção exige modelo ajustado ao ambiente real [8], e um mercado de rotulagem crescendo a 21,94 % ao ano com supervisão humana empurrada por exigência regulatória [11]. Se o dado ainda é ativo estratégico, a barreira não caiu — mudou de lugar |

### Qual efeito é só extrapolação linear do presente

**`e5` (acessibilidade com descrição contínua) e `e1.2` (busca em acervo por descrição).** Nenhum dos
dois pressupõe ruptura: ambos são a curva atual seguindo em frente. Os óculos já descrevem ambiente e
leem texto em voz alta [7]; a parceria com o Be My Eyes já transferiu a câmera do celular para o
rosto. `e5` está no mapa com confiança alta justamente porque é extrapolação — e isso é uma fraqueza
disfarçada de força: um mapa de futuro que acerta o que já está acontecendo não acertou nada.
Mantive `e5` como alta e declaro aqui que ela vale pouco.

### Qual efeito assume velocidade de adoção sem precedente

**`e3.1` (o trabalho de digitação e conferência encolhe para exceção) até 2030.** Não conheço caso
comparável em que uma camada inteira de trabalho administrativo tenha encolhido em quatro anos por
substituição técnica. O precedente mais próximo — a digitalização de processos — levou décadas e
ainda não terminou. Três forças contrárias que o efeito ignora: (a) contrato e norma, que obrigam
conferência humana onde há auditabilidade em jogo — a mesma força que segura o mercado de rotulagem
[11]; (b) responsabilidade, porque um erro de extração num processo tributário tem dono; (c) o
próprio custo de inferência por página em volume de milhões, que nenhuma das fontes abertas aqui
quantifica. Se eu tivesse que rebaixar um quarto efeito, seria este — mantive `media` porque o
efeito está escrito como "encolhe para exceção", não como "desaparece", e essa formulação é defensável.

### Qual disrupção pode simplesmente não se concretizar

**D3.** É a que depende de menos coisas técnicas e de mais coisas sociais, e as sociais estão
correndo contra. Todo o material sobre "super sensing" é protótipo não confirmado pela empresa [15];
o código de reconhecimento facial foi retirado [14]; e há jurisdições banindo o dispositivo em
recintos específicos [7]. Se D3 não se concretizar, caem sete efeitos (`e6`, `e6.1`, `e6.1.1`,
`e6.2`, `e6.2.1` e, parcialmente, `e7.1` e `e7.1.1`) — quase um terço do mapa. O que **não** cai: D1
e D2 são independentes de óculos e continuam de pé inteiras. E o wildcard W1 diz o contrário: se a
percepção de conceito couber no envelope de um óculos, D3 não só se concretiza como se antecipa.

Há um segundo risco, mais sutil, em D1: **cooptação em vez de ruptura** (§4.5). Se o vocabulário
aberto só existir dentro de produto fechado — o efeito do Instagram, o "View in Room" do Marketplace
[2] — sem nunca ser exposto como interface a quem projeta, então isto não é uma disrupção, é uma
melhoria de feature, e o solicitante teria razão em aplicar seu próprio critério de refutação: "a
tecnologia não rompe nada, só melhora o que existe". A evidência a favor da exposição é que os pesos
estão abertos e a licença é comercial [3]; a evidência contra é que o caminho de produção recomendado
ainda termina em modelo treinado e fechado [8].

### Que viés entrou aqui

Três, e são nomeáveis.

**Viés de fonte.** Nove das dezessete fontes são da Meta, da Roboflow ou de fornecedores de
documento — isto é, de quem ganha dinheiro com a tese deste mapa. As fontes independentes (o estudo
de borda [4], a reportagem do Núcleo [13], o EFF [14], o tramitar do PL [12]) são justamente as que
mais puxaram as confianças para baixo. Um mapa com a proporção invertida seria mais cético.

**Viés de zona de interesse.** A zona declarada do autor é "percepção e mídia sintética", e a
entrevista pediu viés neutro. Um mapa neutro de verdade daria mais peso à hipótese chata: a de que
2031 chega e a maior parte da visão em produção continua sendo detector treinado com classe fixa,
com o vocabulário aberto ocupando o nicho de prototipagem e pré-rotulagem que ele já ocupa hoje [8].
Essa hipótese está no cenário provável da seção 9, mas não está espalhada pelo YAML — no YAML, ela
aparece uma vez só, em `e1.1`.

**Viés de saliência no recorte brasileiro.** O caso Smart Sampa é vívido, documentado e comovente
[13] — e é sobre **lista fechada**, não sobre vocabulário aberto. Usá-lo como âncora do recorte
brasileiro empurra o leitor a transferir a indignação de uma tecnologia para outra. Declarei a
diferença no texto (§3), mas o efeito retórico permanece e o leitor deve descontá-lo.

## 8. O que a máquina errou

Erros reais cometidos nesta rodada, com o motivo da desconfiança:

**1. Confundi as datas da linhagem SAM 3 na primeira passagem.** Tratei SAM 3 como lançamento de
2026, porque foi assim que apareceu no post da Meta que abri primeiro — que é, na verdade, o anúncio
do **SAM 3.1**, de 27/03/2026 [2]. O arXiv corrige: v1 submetida em 20/11/2025, revisão em 28/03/2026
[1]. Percebi ao cruzar as duas fontes e notar que o post falava em "incrível adoção do SAM 3" no
passado — um modelo lançado na mesma data não teria adoção a celebrar.

**2. Quase citei um número de preço e data de óculos vindo de blog de baixa qualidade.** Uma busca
devolveu "à venda em junho de 2026 por US$ 299" a partir de páginas de review sem autoria
identificável. Só usei o dado depois de confirmá-lo na Wikipedia (lançamento de 23/06/2026, US$ 299,
com a EssilorLuxottica) [7]. E **não** cito o preço do Ray-Ban Display, que aparece em texto de
terceiros mas que não confirmei em fonte aberta nesta rodada.

**3. Busquei por `olmOCR` e `Qwen3-VL` e a busca declarou explicitamente não ter encontrado
informação sobre eles.** Ambos estavam no meu rascunho de "modelos a citar" por conhecimento prévio.
Retirei os dois do documento em vez de afirmá-los sem fonte aberta. O mesmo vale para `Qwen-VL` e
`PaliGemma`, que a descrição do tema menciona: só cito PaliGemma 2 e Florence-2 onde eles aparecem
numa lista que abri [8].

**4. Não consegui verificar o número da regulação europeia.** Um resultado de busca atribuía o adiamento
das obrigações de alto risco à "Regulation (EU) 2026/1744, publicada no Jornal Oficial em 24/07/2026
e em vigor em 27/07/2026". Abri uma análise jurídica para confirmar: ela confirma as **datas de
adiamento** (Anexo III para 02/12/2027; Anexo I para 02/08/2028) e a nova proibição sobre imagem
íntima não consensual e CSAM, mas **não menciona esse número de regulação** [16]. Portanto: as datas
entram no documento; o número da regulação, não. Fica registrado como não verificado.

**5. Uma tentativa de acesso falhou e o dado foi descartado.** A busca sugeria que o Digital Omnibus
teria introduzido "novas proibições" possivelmente relevantes para vigilância visual. A página que
sustentaria isso devolveu HTTP 403. A fonte que consegui abrir mostra que a nova proibição do Art. 5º
é sobre "nudifiers" e CSAM, **não** sobre vigilância [16] — ou seja, a hipótese que a busca sugeria
estava errada, e se eu tivesse citado o snippet sem abrir a fonte, teria escrito uma afirmação falsa
no mapa.

**6. Um número de mercado ficou de fora por não ter fonte aberta.** "Meta comprou a Scale AI por US$
15 bi em jun/2025" apareceu em análise de mercado via busca. Não abri fonte primária. Ele aparece no
texto (§3) **marcado como não confirmado**, e não sustenta nenhum efeito do YAML.

**7. Erro de processo, não de fato.** A skill (`SKILL.md`, Etapa 4) manda derrubar os próprios efeitos
de confiança alta, mas **não** manda conferir se os prazos do YAML cabem dentro do horizonte pedido —
que é exatamente a falha que o `DUVIDAS.md` do autor documenta da rodada anterior (prazos 2031/2032
num mapa de horizonte 2030). Fiz a conferência assim mesmo: todos os 29 prazos deste YAML são ≤ 2031,
o horizonte pedido. Registro que esta checagem **não** está na skill; ela veio do `DUVIDAS.md` e é a
correção que o autor já havia identificado e ainda não incorporou ao `SKILL.md`.

## 9. Três cenários para 2031

**Provável.** Em 2031, descrever virou uma forma legítima de programar percepção, mas não a
dominante. Quem precisa de precisão continua treinando: o fluxo padrão é prompt de conceito para
descobrir e pré-rotular, modelo treinado para operar — exatamente o que a ferramenta recomendava em
2026, com menos fricção. A anotação não morreu; encolheu de linha de produção para perícia, e a
palavra "anotador" foi substituída por "revisor de casos difíceis" sem que o número de pessoas caísse
tanto quanto se previu, porque a exigência de auditabilidade em setor regulado segurou o piso.
Documento sem OCR virou o padrão em back-office financeiro e continua proibido, na prática, onde a
extração precisa ser contestável — e a briga por rastreabilidade pixel-a-campo produziu um formato
intermediário: o documento que nasce com camada assinada, para não depender de quem o lê. Os óculos
se venderam bem e a percepção contínua não se generalizou: acendeu o LED, restringiu-se a ambientes
privados e a uma função de acessibilidade que ninguém contesta. A vigilância pública brasileira
seguiu operando com lista fechada, com uma lei de IA já aprovada mas com o rol de exceções para
segurança pública praticamente intacto.

**Desejável.** Em 2031, o prompt de percepção é um artefato de projeto com o mesmo estatuto de um
contrato de API: versionado, revisado, testado contra casos adversariais e **registrado**. Houve um
caso judicial fundador — alguém exigiu o log de prompts de um sistema de videomonitoramento e o
obteve — e desde então guardar a frase que define o que a máquina procura passou a ser tão obrigatório
quanto guardar o log de acesso. A acessibilidade colheu o melhor do ciclo: descrição de ambiente sob
demanda virou função de sistema operacional, gratuita, local, sem enviar nada para servidor; e a
norma de acessibilidade se estendeu ao espaço físico, com estabelecimentos publicando como querem ser
descritos. O documento sem OCR entregou rastreabilidade: todo campo extraído aponta para a região da
imagem de onde saiu, e o formulário sobreviveu onde ele é bom — como estrutura acessível a leitor de
tela. Para chegar aqui foi preciso: que a exigência de log tivesse vindo de tribunal e não de
autorregulação; que os modelos pequenos de borda tivessem ficado bons o bastante para tirar a
inferência do servidor; e que alguém tivesse escrito a norma de rastreabilidade antes de o primeiro
escândalo de extração errada acontecer.

**Indesejável.** Em 2031, a percepção contínua se normalizou sem que nenhuma das perguntas tenha sido
respondida. O que sobe do dispositivo é predicado, não imagem — e por isso nada disso é "gravação",
tecnicamente, o que basta para escapar de toda a moldura legal construída em torno de captura de
imagem. Existem índices semânticos de pessoas em espaços públicos, montados por agregação de
predicados, e eles não são ilegais em lugar nenhum porque a lei ainda regula o sensor. No Brasil, o
sistema de videomonitoramento trocou a lista de procurados por descrição de comportamento, e o erro
mudou de natureza: não é mais "confundiram meu rosto com o de outro", é "o sistema me descreveu como
alguém em atitude suspeita" — uma acusação sem contraparte, porque não há fotografia comparada para
contestar, só uma frase escrita meses antes por alguém que já saiu da empresa. O sinal precoce deste
cenário é preciso e observável desde já: **é o dia em que um produto de captura contínua chegar ao
mercado sem indicador luminoso de captura e isso não render uma semana de notícia.** Foi exatamente o
que se desenhava em jul/2026 [15]; em jun/2026 a reação pública ainda funcionava [14]. O sinal é a
reação parar de vir.

## 10. O experimento

### O que é

**Provador de conceitos** — uma bancada de sala de aula onde a câmera do notebook (ou do celular) é
apontada para a turma e cada pessoa escreve, num campo de texto, **o conceito que a máquina deve
enxergar**. A saída aparece ao vivo: caixas e máscaras sobre o vídeo, com a frase que as produziu em
cima. Três modos:

1. **Modo concreto** — conceitos com fronteira física clara: "garrafa", "mochila", "cadeira vazia".
   Serve de linha de base: aqui o sistema quase sempre acerta.
2. **Modo disputado** — conceitos cuja fronteira é decidida por quem escreve, não pelo mundo:
   "bagunça", "fila", "pessoa distraída", "alguém que não está prestando atenção", "aglomeração".
   É o coração do experimento.
3. **Modo cego** — cada pessoa escreve três conceitos num papel, os papéis são trocados, e cada um
   roda o conceito de outra pessoa sem saber o que ela quis dizer. Depois compara-se a intenção
   declarada com o que a máquina marcou.

Um segundo painel, opcional, faz a versão documental: aponta-se a câmera para um documento qualquer
(um comprovante, um crachá, um cartaz) e o sistema devolve estrutura, sem OCR. Serve para a turma ver
que o número extraído **não vem com endereço** — não dá para apontar de onde na imagem ele saiu.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta central do mapa: **quando descrever passa a ser o mesmo que detectar, quem decide onde
termina o conceito?** O experimento transforma isso de tese em medida. O modo cego mede a distância
entre o que alguém quis dizer e o que a máquina entendeu — que é, em escala, a distância entre a
intenção de quem configura um sistema de percepção e o comportamento que ele terá em campo.

E uma pergunta secundária, do lado do design: um prompt de percepção é um artefato de projeto? Se a
turma descobrir que pequenas variações de redação ("pessoa suspeita" × "pessoa em atitude suspeita" ×
"alguém agindo de forma estranha") produzem conjuntos de detecções radicalmente diferentes sobre a
mesma cena, a resposta é sim — e daí decorre `e2.2.1` (o prompt como requisito auditável) inteiro.

### Que tecnologia emergente ele usa, e por que não dá com tecnologia madura

Usa segmentação/detecção de vocabulário aberto: SAM 3 via API ou Playground para o modo de conceito;
YOLO-World ou NanoOWL/Moondream para a versão local em tempo real; um VLM de documento para o painel
opcional.

**Não dá com tecnologia madura, e essa é a única razão de o experimento existir.** Um detector de
classes fixas (YOLO treinado) simplesmente **não aceita a entrada**: não há como pedir "bagunça" a um
modelo cujo vocabulário é uma lista de 80 substantivos decidida em 2014. O experimento inteiro
depende de o sistema aceitar uma frase que ninguém previu — e a coisa interessante que ele produz é
precisamente o **erro** nessa frase, que em tecnologia madura não é erro, é impossibilidade.

### O que a turma faz quando testar isso em sala

1. Cada pessoa roda três conceitos do modo concreto e anota a taxa de acerto por impressão. (5 min —
   serve para calibrar a expectativa para cima.)
2. Cada pessoa roda três conceitos do modo disputado sobre a mesma cena — a própria sala — e **anota
   o falso positivo mais constrangedor**. Não a taxa: o caso. (15 min.)
3. Rodada cega: troca de papéis, execução do conceito alheio, comparação com a intenção declarada.
   Registra-se, por par, se a máquina fez o que a pessoa **queria** ou o que ela **escreveu**.
   (20 min.)
4. Discussão com o registro na mesa: quais conceitos tiveram convergência alta entre intenção e
   resultado, e o que eles têm em comum. A hipótese a testar é que conceitos com fronteira física
   convergem e conceitos com fronteira normativa não. (15 min.)
5. Painel documental: extrair três campos de um documento trazido por alguém e tentar apontar, na
   imagem, de onde veio cada número. (10 min.)

### O que seria um resultado que me faria mudar de ideia

**Se os erros do modo disputado forem estáveis e previsíveis** — isto é, se "bagunça" marcar
consistentemente as mesmas coisas para pessoas diferentes, e se a rodada cega mostrar alta
convergência entre intenção e resultado mesmo em conceito normativo — então a tese de que a fronteira
do conceito é decidida por quem escreve **enfraquece muito**. Quereria dizer que a fronteira já está
decidida no modelo, herdada do corpus de treino, e que o prompt é só uma chave de acesso a uma
categoria pré-existente. Nesse caso `e2.2.1` (auditar o prompt) perde o sentido — não adianta auditar
a frase se a decisão está no peso — e a coisa a auditar passa a ser o modelo, o que é um mapa
completamente diferente e, aliás, um mapa em que o wildcard 1 da seção 6 (vocabulário livre) está
certo e eu estou errado.

**Segundo resultado que me faria mudar de ideia:** se a latência local for tão ruim a ponto de o
experimento só rodar via API de servidor. Isso confirmaria, na prática de sala de aula, o que a
literatura de borda já sugere [4][9] — e empurraria todo o bloco D3 para depois de 2031.

## 11. Fontes

Todas as fontes abaixo foram abertas nesta rodada. O que apareceu apenas em resultado de busca e não
foi aberto está identificado como tal no texto e **não** figura nesta lista.

1. `https://arxiv.org/abs/2511.16719` — **SAM 3: Segment Anything with Concepts** (Carion et al., 37
   coautores; v1 20/11/2025, revisão 28/03/2026). Sustenta: a definição de *Promptable Concept
   Segmentation*, o dataset SA-Co com >4 M conceitos únicos, e a alegação de dobrar a acurácia em
   PCS. *Confiabilidade:* alta para o método e os benchmarks; é preprint dos próprios autores do
   modelo, logo os números comparativos são auto-reportados.
2. `https://ai.meta.com/blog/segment-anything-model-3/` — **anúncio SAM 3.1**, Meta AI, 27/03/2026.
   Sustenta: 30 ms/imagem com 100+ objetos em H200, 16→32 FPS de vídeo em H100, rastreio de 16
   objetos por passagem, preferência de usuário ~3:1, e os produtos (Instagram Edits, Marketplace,
   Playground). *Confiabilidade:* alta para o que a empresa fez, baixa como avaliação independente —
   é material de divulgação do fabricante.
3. `https://ai.meta.com/blog/dinov3-self-supervised-vision-model/` — **DINOv3**, Meta AI, 14/08/2025.
   Sustenta: 1,7 B imagens, 7 B parâmetros, backbone congelado superando especialistas, caso do World
   Resources Institute (4,1 m → 1,2 m), licença comercial e variantes destiladas. *Confiabilidade:*
   mesma ressalva do item 2.
4. `https://pmc.ncbi.nlm.nih.gov/articles/PMC12583037/` — **Real-time open-vocabulary perception for
   mobile robots on edge devices**, 21/10/2025. Sustenta: 47,51 FPS / 21 ms / 84,64 % mIoU com
   NanoOWL+EfficientViT-SAM-L0 em Jetson AGX Orin 64 GB; NanoOWL ~2,65× mais rápido que YOLO-World;
   colapso do EfficientViT-SAM em FP16. *Confiabilidade:* alta — é a fonte mais independente e mais
   quantitativa do conjunto, com hardware e precisão declarados.
5. `https://moondream.ai/blog/photon-real-time-vision-ai-is-finally-here` — **Photon**, Moondream,
   25/03/2026 (gratuito desde 08/06/2026). Sustenta: >60 inferências/s em H100, 2× vLLM, casos de uso
   em tempo real. *Confiabilidade:* média — fabricante, benchmarks próprios.
6. `https://www.extend.ai/resources/ocr-and-ai-vision-language-models-replacing-text-recognition` —
   **OCR & AI: Vision Models Replace OCR**, Extend, ago/2026. Sustenta: catálogo dos modos de falha
   do OCR clássico (coordenada fixa, manuscrito, ordem de leitura, contexto entre páginas, deriva de
   template) e os números 60–75 % × >98,5 %. *Confiabilidade:* **baixa para os números, média para os
   modos de falha.** É fornecedor descrevendo o produto próprio; a página não discute alucinação,
   custo nem latência. Por causa disso, `e3` foi rebaixado de alta para media (§7).
7. `https://en.wikipedia.org/wiki/Meta_smart_glasses` — **Meta smart glasses**, consultada em
   12/09/2026. Sustenta: cronologia das gerações, lançamento de 23/06/2026 a US$ 299 com a
   EssilorLuxottica, funções de descrição de ambiente e leitura de texto, e os banimentos em
   tribunais (Nova York, jul/2026; Inglaterra e País de Gales, ago/2026). *Confiabilidade:* média —
   terciária, mas com cronologia densa e verificável; usada só para fatos datados, nunca para
   interpretação.
8. `https://blog.roboflow.com/best-computer-vision-models/` — **Best Computer Vision Models in
   2026**, Roboflow, 15/07/2026. Sustenta: o contraponto central do mapa — zero-shot para
   prototipagem e pré-rotulagem, produção exige modelo ajustado ao ambiente real — e a lista de
   modelos por tarefa em 2026. *Confiabilidade:* média-alta. É fornecedor, mas o interesse comercial
   aqui puxa **contra** a tese do documento, o que aumenta o peso do testemunho.
9. `https://blog.roboflow.com/what-is-sam3/` — **SAM 3**, Roboflow. Sustenta: ~840 M parâmetros /
   ~3,4 GB, escala de servidor, ausência de variantes menores, ~30 ms em H200, e a orientação prática
   sobre termos simples. *Confiabilidade:* média-alta, pelo mesmo motivo do item 8.
10. `https://arxiv.org/abs/2512.06032` — **The SAM2-to-SAM3 Gap** (Sapkota, Roumeliotis, Karkee,
    04/12/2025). Sustenta: a hipótese de que a perícia em prompt espacial não transfere para o
    paradigma de conceito. *Confiabilidade:* baixa-média como evidência — é análise conceitual,
    preprint, sem números; citada no texto **como hipótese**, jamais como medida.
11. `https://www.mordorintelligence.com/industry-reports/data-labeling-market` — **Data Labeling
    Market**, Mordor Intelligence, atualizado 11/09/2026. Sustenta: US$ 2,61 bi (2026) → US$ 7,02 bi
    (2031), CAGR 21,94 %, manual em 42,31 % do valor em 2025, automação a 22,16 % a.a., e a
    persistência da supervisão humana por exigência regulatória. *Confiabilidade:* média — consultoria
    de mercado com metodologia não publicada; usada para **direção** (a anotação não encolheu), não
    para o valor absoluto.
12. `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233` — **PL 2338/2023**, Senado
    Federal. Sustenta: aprovação em Plenário e remessa à Câmara em 17/03/2025; ementa. *Confiabilidade:*
    alta — fonte primária oficial de tramitação.
13. `https://nucleo.jor.br/reportagem/2026/08/21/vitimas-de-falhas-do-smart-sampa-buscam-indenizacao-na-justica/`
    — **Vítimas de falhas do Smart Sampa buscam indenização na Justiça**, Núcleo Jornalismo,
    21/08/2026. Sustenta: 211 pessoas abordadas e liberadas entre nov/2024 e nov/2025 (67 % mandado
    não baixado, 28 % inconsistência de reconhecimento facial), quatro ações judiciais com desfechos
    e valores. *Confiabilidade:* alta — jornalismo especializado com casos individuados e números
    atribuídos.
14. `https://www.eff.org/deeplinks/2026/06/victory-meta-strips-facial-recognition-code-smart-glasses-app-after-public-outcry`
    — **EFF**, jun/2026. Sustenta: o código NameTag no app companheiro, a verificação por análise
    estática do EFF Threat Lab a partir da reportagem da WIRED (~04-05/06/2026), a remoção em
    atualização de 05/06/2026, e a recusa da empresa em esclarecer planos futuros. *Confiabilidade:*
    alta para o achado técnico (verificação independente declarada); a organização é parte
    interessada no debate, o que afeta a ênfase, não o fato.
15. `https://vr.org/articles/meta-privacy-led-tamper-update-super-sensing-glasses-2026` — **VR.org**,
    2026, reportando o *Financial Times* de 09/07/2026. Sustenta: protótipos "Aperol" e "Bellini"
    (fim de 2026/início de 2027), captura de áudio contínua com foto a cada poucos segundos, ausência
    de plano de acender o LED, e a arquitetura que não armazena o bruto e sobe só metadado.
    *Confiabilidade:* **baixa-média — é fonte secundária de fonte única, sobre protótipo não
    confirmado pela empresa.** Por isso `e6` está em confiança média e não alta (§7).
16. `https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/`
    — **Gibson Dunn**, sobre o Digital Omnibus on AI. Sustenta: adiamento do Anexo III para
    02/12/2027 e do Anexo I para 02/08/2028; nova proibição do Art. 5º sobre imagem íntima não
    consensual e CSAM; e a **ausência** de novas proibições biométricas ou de vigilância visual.
    *Confiabilidade:* alta para o conteúdo normativo (escritório de advocacia analisando texto legal);
    **não** confirma o número "Regulation (EU) 2026/1744" que a busca sugeria — ver §8, item 4.
17. `https://blog.roboflow.com/open-vocabulary-segmentation/` — **Open Vocabulary Segmentation with
    SAM 3 and Roboflow**. Sustenta: o caso de inspeção veicular, o fluxo de prompt sem dataset, a
    ressalva de precisão e a recomendação de revisar-e-corrigir as máscaras para gerar dataset de
    fine-tuning. *Confiabilidade:* média-alta; fornecedor, contraponto explícito à própria tese
    comercial.

### Fontes consultadas em busca e NÃO abertas (não sustentam nada neste documento)

Registradas por honestidade de processo: Ultralytics (docs SAM 3), Voxel51/FiftyOne, PyImageSearch
(YOLOE-26), arXiv 2502.11891 (*From Open-Vocabulary to Vocabulary-Free Semantic Segmentation*), arXiv
2604.19648 (CoCo-SAM3), arXiv 2512.04585 (SAM3-I), Technavio e Coherent (mercado de anotação),
Prefeitura de SP (relatório de transparência do Smart Sampa), Coalizão Direitos na Rede
(posicionamento sobre o PL 2338), Senator Markey (carta à Meta sobre FRT em óculos), LearnOpenCV
(VLM na borda), Apple ML Research (FastVLM). Uma tentativa de acesso falhou com HTTP 403
(globalpolicywatch.com sobre o AI Act) — ver §8, item 5.

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista, na íntegra (Etapa 1 da skill)

**Perguntas feitas, na ordem da `SKILL.md`:**

1. Horizonte temporal: para que ano projetar os efeitos?
2. Público-alvo: quem vai ler/usar este mapa?
3. Recorte geográfico: mercado global, ou região específica?
4. Descartes explícitos: algo que já se sabe que o mapa NÃO deve cobrir?
5. Viés desejado: mapa otimista, pessimista, ou neutro/cético?

**Respostas recebidas, literais:**

- Tema: "Máquinas que veem qualquer coisa: visão de vocabulário aberto" (tema 11 de 19 da
  disciplina; família "Percepção e mídia sintética").
- Horizonte: 2031. Público: quem projeta mídia e interação. Recorte: global, com uma nota sobre o
  Brasil.
- Descartado de início: o que já é comum em produto de massa (a régua da disciplina); nenhuma outra
  exclusão.
- Disrupção suspeita: nenhuma — descubra. Viés: neutro. Ideias óbvias a excluir: as que servem para
  qualquer tema.
- O que me faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers) ou
  de que a tecnologia não rompe nada (só melhora o que existe).
- Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
- Zona de interesse do autor: "Percepção e mídia sintética". Login do autor: jcsc. Skill usada:
  futurizacao-jcsc.
- Busca na web: use WebSearch e WebFetch de verdade; só cite o que abriu. Não invente fontes.
- Não faça perguntas de volta. Não pare para pedir confirmação. Se algo não estiver definido, assuma
  e declare.

**Nada foi respondido com "tanto faz".** Duas condições adicionais (profundidade e modo) vieram fora
do roteiro das cinco perguntas e estão registradas na §2. Uma condição de processo — não fazer
perguntas de volta — foi respeitada: esta rodada não interrompeu para confirmar nada.

**Assunções declaradas, por não estarem definidas:**
- `data` do frontmatter = a data da execução (2026-09-12).
- `publico_ok` = `false`, que é o padrão do formato quando não há autorização explícita.
- `confianca` global = `media`, pelo peso de fontes de fornecedor (§7) e pela dependência de D3 em
  protótipo não confirmado.
- `experimento` = escolhido por mim, já que a entrevista não o definiu.

### 12.2 Trilha de busca completa

Buscas realizadas (WebSearch), na ordem:

1. `SAM 3 Segment Anything with Concepts Meta open-vocabulary segmentation` — produtiva. Devolveu o
   arXiv, o post da Meta, a documentação da Ultralytics, Roboflow, Voxel51, e três preprints
   derivados (SAM3-I, CoCo-SAM3, SAM2-to-SAM3 Gap). Sinal lateral interessante: existe uma pequena
   literatura **sobre** o SAM 3 menos de um ano depois do lançamento — é um indicador de que a
   comunidade tratou a mudança de paradigma como evento, não como versão.
2. `DINOv3 Meta self-supervised vision foundation model 2025 release` — produtiva.
3. `OCR-free document understanding 2026 vision language model DeepSeek-OCR olmOCR Qwen3-VL replacing
   traditional OCR pipelines` — **parcialmente falha**: a busca declarou explicitamente não ter
   encontrado informação sobre `olmOCR` nem `Qwen3-VL`. Consequência: os dois saíram do documento
   (§8, item 3).
4. `EU AI Act prohibitions real-time remote biometric identification February 2025 high-risk
   obligations August 2026 delay digital omnibus` — produtiva, mas gerou o erro documentado em §8,
   itens 4 e 5.
5. `PL 2338/2023 marco legal inteligência artificial Brasil status 2026 Câmara reconhecimento facial
   biometria` — produtiva; várias fontes secundárias divergiam sobre a data de votação na Câmara
   (dez/2025, maio/2026, "2026"), então usei apenas a tramitação oficial [12].
6. `Meta Ray-Ban Display smart glasses 2026 sales live AI describe surroundings accessibility Be My
   Eyes` — produtiva, mas com muito conteúdo de baixa qualidade (blogs de review sem autoria).
   Levou à verificação descrita em §8, item 2.
7. `Roboflow open-vocabulary detection production zero-shot replacing labeled datasets 2026` —
   **a busca mais valiosa do conjunto**, porque devolveu o contraponto: produção ainda treina.
8. `data labeling market 2026 annotation demand foundation models auto-labeling Scale AI shift` —
   produtiva; o número da aquisição da Scale AI apareceu aqui e não foi confirmado em fonte aberta.
9. `Smart Sampa reconhecimento facial 2026 balanço prisões erros câmeras São Paulo` — produtiva.
   Nota: as fontes divergem frontalmente (a Prefeitura publica "eficácia comprovada" e 99,5 % de
   acurácia; a sociedade civil e o jornalismo publicam os 211 casos). Optei pela reportagem com casos
   individuados [13] e registro aqui que a versão oficial existe e não foi aberta.
10. `Wired Meta smart glasses face recognition code 2026 "super sensing" privacy` — produtiva; levou
    ao EFF e ao relato do FT.
11. `small vision language model on-device 2026 Moondream FastVLM real-time open vocabulary edge
    inference` — produtiva; levou ao estudo de borda [4], que é a melhor fonte quantitativa do mapa.
12. `"open-vocabulary" segmentation limitations failure hallucination benchmark 2026 study long-tail
    concepts vision language model` — **pouco produtiva**. Devolveu literatura de alucinação em VLM
    (CHAIR, POPE, FIHA, FADE) e a linha de *vocabulary-free segmentation*, mas nada específico sobre
    falha em cauda longa de vocabulário aberto. A própria busca admitiu que "os resultados não contêm
    informação específica sobre conceitos de cauda longa". **Esta lacuna é relevante**: o mapa afirma,
    com base em recomendação prática de fornecedor [9], que a cauda longa é fraca — mas não achei
    medida pública disso. Fica como lacuna declarada, não como fato.

### 12.3 Candidatos a disrupção-raiz levantados e o destino de cada um

Lista completa, incluindo os que não chegaram à §4:

| Candidato levantado | Destino |
|---|---|
| Segmentação promptável por conceito (SAM 3 / PCS) | **Aceito → D1** |
| Detecção de vocabulário aberto (Grounding DINO, YOLO-World, YOLOE-26, NanoOWL) | **Aceito → D1** (mesma raiz: conceito no lugar de classe) |
| Backbone auto-supervisionado congelado (DINOv2/v3) | Absorvido em D1 como substrato |
| Compreensão de documento sem OCR (Donut → VLM) | **Aceito → D2** |
| Agente que opera interface por visão (Skyvern) | Não virou raiz; entrou como efeito `e4.1`. Motivo: é aplicação de D2 ao que está na tela, não ruptura separada |
| Percepção aberta contínua em primeira pessoa (óculos, super sensing) | **Aceito → D3** |
| Classificação de imagem com classes fixas | Descartado — maduro (§4.4) |
| Detecção com classes fixas (YOLO) | Descartado — maduro (§4.4) |
| OCR tradicional (Tesseract, PaddleOCR, EasyOCR) | Descartado como raiz — maduro; seu *debate de substituição* virou D2 (§4.4) |
| LaTeX-OCR (equação → LaTeX) | Descartado — caso particular de D2, sem ruptura própria |
| Reconhecimento facial 1:N em segurança pública | Descartado — é presente operante, não futuro (§4.4) |
| insightface / face-alignment | Descartado — maduro (§4.4) |
| SAM 1/2 (prompt geométrico) | Descartado — maduro (§4.4) |
| CVAT / Label Studio | Descartado — maduro, e contraevidência importante (§4.4) |
| SlowFast / compreensão de vídeo por ação | Descartado — fronteira com o tema 9 |
| `supervision`, `LAVIS`, `rf-detr`, `YOLOX` | Descartados — biblioteca e arquitetura, não disrupção |
| `react-visual-annotator`, `ml-classifier`, `llama.cpp-ts` | Descartados — ferramentas; `llama.cpp-ts` (visão local em Node) entrou indiretamente como evidência do movimento para a borda |
| `ORTHOS` (resposta emocional a manchete) | Descartado como raiz — virou sinal fraco (§6.2); não há fonte aberta sobre ele nesta rodada |
| Vocabulário **livre** (o sistema propõe os conceitos) | Descartado como raiz por imaturidade — virou o wildcard mais destrutivo (§6.1) |

### 12.4 Efeitos gerados e cortados

Efeitos que passaram pelo rascunho e não entraram no YAML, com o motivo:

- *"Câmeras de trânsito passam a multar por descrição de comportamento"* — cortado. É `e7` aplicado a
  um domínio; não acrescenta salto causal, só especifica.
- *"O emprego de anotador desaparece"* — cortado e substituído por `e1.1.1` (sobrevive como perícia).
  Motivo: a evidência de mercado [11] contradiz o desaparecimento, e a formulação original era exatamente
  o tipo de efeito que a Etapa 4 manda derrubar.
- *"Museus e arquivos deixam de catalogar"* — cortado. Excesso: catalogar é também decisão curatorial
  e institucional, não só indexação. Virou `e1.2.1`, mais defensável.
- *"Todo aplicativo ganha um botão de apontar a câmera e perguntar"* — cortado por ser efeito de
  produto genérico, do tipo "serve para qualquer tema" que a entrevista pediu para excluir.
- *"A IA vai substituir radiologistas"* — cortado pelo mesmo critério; além de ser afirmação com
  década de histórico de erro de previsão.
- *"Custo de inferência cai e tudo roda local"* — cortado: é premissa, não efeito, e uma premissa que
  a evidência de borda [4] mostra ser condicional a arquitetura, não automática.
- *"A imagem vira dado estruturado por padrão"* (a pergunta de 3ª ordem da descrição do tema) —
  **não** virou um efeito único, deliberadamente. Está distribuída em `e6.2`, `e6.2.1` e `e3.2`,
  porque como efeito único ela é grande demais para receber sinal, prazo e confiança sem virar
  slogan.
- *Quarto nível*: pelo menos dois desdobramentos de quarta ordem foram identificados e cortados pelo
  limite da skill; estão descritos em prosa ao fim da §5.

### 12.5 Caminhos abandonados

- **Tentei montar um Quadrante Mágico dos fornecedores de visão de vocabulário aberto** e abandonei.
  Motivo: o próprio `ESTUDO.md` do autor diz por quê — o método pressupõe um mercado já categorizado
  pela consultoria, e descreve competição dentro do status quo, não ruptura dele. Não existe categoria
  "open-vocabulary vision" com critérios de avaliação estabelecidos; montar um quadrante aqui seria
  inventar o eixo e depois posicionar empresas nele.
- **Tentei posicionar o tema no Hype Cycle** e abandonei pela crítica de validação que o mesmo
  `ESTUDO.md` registra (a Gartner nunca publicou a metodologia estatística por trás do
  posicionamento). O que sobraria seria eu desenhando uma curva a olho e chamando de método. O que
  usei no lugar, e declarei onde usei (§4.5), foi Três Horizontes — que é lente de classificação e se
  apresenta como tal.
- **Tentei quantificar o emprego em digitação e conferência no Brasil** para dar peso a `e3.1`, e não
  achei fonte aberta confiável na rodada. `e3.1` ficou sem âncora numérica, e isso está declarado na
  §7 como a fraqueza do efeito.
- **Tentei achar medida pública de desempenho de vocabulário aberto em cauda longa** (busca 12) e não
  achei. Lacuna declarada.

### 12.6 Verificação de aderência à entrevista

Conferência final, campo a campo, contra as cinco respostas:

| Item | Pedido | Entregue |
|---|---|---|
| Horizonte | 2031 | **29 de 29 prazos do YAML ≤ 2031.** Maior valor: 2031 (todos os de 3ª ordem) |
| Público | quem projeta mídia e interação | §2 e §10 escritos para essa pessoa; §4 evita jargão de treinamento de modelo onde dá |
| Recorte | global + nota Brasil | Global no corpo; nota brasileira explícita ao fim da §3, com ressalva de que o caso citado é de lista fechada |
| Descartes | o que já é comum em produto de massa | §4.4 (tabela de descartes) e §4.5 (o caso desconfortável do Instagram Edits) |
| Viés | neutro | Aplicado por rebaixamento auditável (§7): três efeitos rebaixados, dois deles por contradizerem a tese do próprio mapa |
| Excluir ideias óbvias | as que servem para qualquer tema | §12.4: três efeitos cortados exatamente por esse critério |
| Critério de refutação | adoção passou da maioria inicial, ou não rompe nada | Enfrentado de frente em §4.5 e retomado em §7 |

### 12.7 Nota de processo

Esta rodada foi executada por uma IA seguindo a `SKILL.md` de `jcsc`, sem um humano disponível para
responder à entrevista — as respostas da Etapa 1 vieram pré-fornecidas junto com a tarefa e estão
reproduzidas literalmente em §12.1. A Etapa 1 **não** foi pulada: as perguntas foram feitas e as
respostas registradas, que é o que a skill exige que seja visível. A Etapa 4 produziu três
rebaixamentos auditáveis, registrados com o valor anterior em §7. A Etapa 5 seguiu
`FORMATO-documento-tendencia.md`: frontmatter completo, 12 seções com títulos literais, bloco `roda:`
em três níveis com `id` hierárquico, `sinal`, `prazo` e `confianca` em todos os 29 efeitos.
