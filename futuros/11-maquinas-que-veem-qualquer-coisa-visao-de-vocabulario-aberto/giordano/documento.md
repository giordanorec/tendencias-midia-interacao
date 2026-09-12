---
tema: "Máquinas que veem qualquer coisa: visão de vocabulário aberto"
slug: maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto
autor_login: grec
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-11
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 18
efeitos_ordem_2: 26
efeitos_ordem_3: 17
tecnologias_citadas: [SAM 3, SAM 3.1, SAM 2, SAM 3D, SA-Co, SA-FARI, SAM3Count, Segment Anything Playground, DINOv3, DINOv2, Grounding DINO, Grounded-Segment-Anything, GLIP, OWL-ViT, OWLv2, Florence-2, RF-DETR, YOLOE-26, YOLO26, YOLO-World, YOLOX, supervision, Moondream 3, Moondream 2, Photon, Qwen3-VL, Qwen2.5-VL, PaliGemma, LAVIS, Donut, Nougat, DeepSeek-OCR, DeepSeek-OCR 2, olmOCR, RolmOCR, PaddleOCR, EasyOCR, LaTeX-OCR, CVAT, Label Studio, Roboflow Auto Label, Labelbox, NVIDIA VSS, NVIDIA Cosmos, NVIDIA Nemotron, NVIDIA Metropolis, LandingLens, Cognex OneVision, Keyence IV3, Linker Vision, Smart Sampa, Muralha Paulista, Google Ask Photos, Apple Enhanced Visual Search, OSWorld 2.0, Skyvern, SlowFast, insightface, LVIS, SHEEP, ORTHOS, llama.cpp, Ray-Ban Meta, Oakley Meta, Ray-Ban Display, Be My Eyes]
fontes: 28
confianca: media
experimento: "O vocabulário que acusa — a turma escreve frases de busca sobre o mesmo vídeo de espaço público e vê, lado a lado, quem cada frase seleciona"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Por trinta anos um sistema de visão só enxergava o que alguém tinha rotulado antes. Isso deixou
de valer entre novembro de 2025 e setembro de 2026: o SAM 3 saiu em 19/11/2025 segmentando e
rastreando por frase em vez de por classe, com 47,0 de máscara AP em LVIS sem treino específico
contra 38,5 do melhor anterior, 65,0 de cgF1 no SA-Co contra 34,3 do OWLv2 — 88% do limite
inferior humano estimado — e 30 ms por imagem com mais de cem objetos numa H200; o SAM 3.1, em
27/03/2026, dobrou a vazão de vídeo de 16 para 32 quadros por segundo numa H100. No mesmo
intervalo a capacidade desceu a pilha inteira: entrou na linha YOLO (YOLOE-26, 40,6 AP em LVIS
por prompt de texto, agosto de 2026), em modelo de 2B de parâmetros ativos que roda na borda
(Moondream 3), em peso Apache-2.0 com OCR em 32 idiomas (Qwen3-VL) e virou o padrão de
rotulagem automática do Roboflow. Este mapa argumenta que a ruptura não está na acurácia, e sim
em quatro deslocamentos com dono: **a classe deixa de ser decidida no treino e passa a ser
decidida na pergunta**; **o documento deixa de ser convertido em texto e passa a ser lido como
imagem**; **a câmera deixa de ter uma lista de alvos e passa a ter uma pergunta**; e **a imagem
parada deixa de ser arquivo opaco e vira base consultável**. Atravessa os quatro o mesmo achado,
e é ele que interessa a quem projeta mídia e interação: o objeto que passa a ser auditável,
disputado e regulado não é mais o banco de dados — é **a consulta**. Toda a moldura jurídica de
imagem no Brasil e na Europa foi construída sobre o cadastro prévio (o banco de faces, o dado
biométrico, o consentimento de coleta), e uma busca por "homem de camisa vermelha com mochila
preta" não cria cadastro nenhum, não é dado biométrico e não está proibida em lugar algum. Até
2031 a disputa não será sobre o que a máquina consegue ver; será sobre quem pode perguntar, com
que palavra, e quem guarda o registro da pergunta.

## 2. O tema

**O objeto.** A percepção aberta: detectar, segmentar, contar, rastrear e entender por
**conceito expresso em linguagem**, não por classe fixada em tempo de treino. Inclui o caso
extremo em que o "conceito" é a página inteira de um documento — compreensão sem OCR — e o caso
em que a imagem consultada é uma tela de computador.

O recorte exclui deliberadamente três vizinhanças. **Reconstruir o espaço em três dimensões é o
tema 10** e não entra aqui, nem quando o mesmo laboratório publica as duas coisas no mesmo dia
(o SAM 3D saiu junto do SAM 3, e este mapa só usa o SAM 3). **O robô que usa a visão para agir é
o tema 9**; aqui o sistema vê e responde, não vê e move. E **a geração de imagem** não é o
objeto: a direção é a inversa, da imagem para a estrutura.

**Onde encosta em mídia e interação.** Em quatro lugares, e nenhum deles é "a imagem fica mais
bonita".

Primeiro, no **pipeline de produção**. Fazer visão computacional sempre foi: definir a classe,
coletar imagens, pagar anotação, treinar, avaliar, repetir. A anotação era o custo e o ativo. A
partir do momento em que a frase substitui o rótulo, o ciclo encolhe de semanas para horas — e o
que sobra de valioso não é mais o dado rotulado, é o conjunto de teste.

Segundo, na **interface**. Se o agente de software lê a tela como imagem — e lê: no OSWorld 2.0
todos os modelos avaliados operam por captura de tela, com orçamento de 500 passos —, então
quem desenha interface passa a ter dois públicos com necessidades opostas. Isso é trabalho de
projeto, não de infraestrutura.

Terceiro, no **consentimento e na prova**. Fotografar tem cem anos de regra social; ser
*encontrado por descrição* num acervo de vídeo não tem nenhuma. A diferença é de natureza: o
reconhecimento facial precisa de um banco de faces, que é um objeto que se regula, se audita e
se proíbe. A busca por conceito não precisa de banco nenhum.

Quarto — e é por isso que merece um mapa de futuro em vez de um levantamento de estado da arte
—, porque **o efeito interessante não está no eixo técnico**. O estado da arte se descreve numa
tabela de AP; o que não se descreve numa tabela é que o mesmo recurso que permite a uma bióloga
contar iguanas em dez mil vídeos de armadilha fotográfica permite a uma central de segurança
filtrar pessoas por aparência sem produzir um único registro nominal. Os dois usos rodam o mesmo
modelo, com o mesmo peso aberto, mudando a frase. Um levantamento de estado da arte trata isso
como nota de rodapé ética. Um mapa de futuro trata como o eixo.

## 3. Onde isso está hoje

Âncora feita em 11/09/2026 com acesso à web; 28 fontes abertas e lidas, listadas na seção 11.

### 3.1 O que já existe e funciona

**Segmentação por conceito, aberta e medida.** O SAM 3 foi publicado em 19/11/2025 pelo Meta
Superintelligence Labs. O que ele faz é *promptable concept segmentation*: recebe uma frase
nominal curta ("yellow school bus"), um exemplo em imagem, ou os dois, e devolve máscara e
identidade de **todas** as instâncias — não de uma, como o SAM 1 e o SAM 2. A arquitetura tem um
detector de imagem e um rastreador de vídeo com memória compartilhando um mesmo tronco, e separa
reconhecimento de localização numa *presence head*. Os números que a documentação da Ultralytics
consolida: **65,0 de cgF1 no SA-Co/Gold contra 34,3 do OWLv2**; **47,0 de máscara AP em LVIS sem
treino específico, contra 38,5 do melhor anterior**; **88% do limite inferior humano estimado**
(65,0 contra 74,2); **30 ms por imagem com mais de 100 objetos detectados numa H200**. O
benchmark SA-Co/Gold tem 214 mil frases únicas em 126 mil imagens e vídeos, "50× mais conceitos"
que os anteriores; o conjunto de treino chega a 4 milhões de rótulos de conceito.

**E já está em produto.** Em 27/03/2026 o Meta publicou o **SAM 3.1**, que multiplexa até 16
objetos numa única passagem e "dobra a velocidade de processamento para vídeos com número médio
de objetos, de 16 para 32 quadros por segundo numa única H100". O anúncio de novembro já dizia
onde o modelo ia parar: efeitos no **Edits** (o app de vídeo do Instagram), o **View in Room** do
**Facebook Marketplace**, e experiências no Meta AI e no Vibes. E existe o **Segment Anything
Playground**, com modelos prontos de pixelar rostos, placas e telas.

**A capacidade desceu a pilha inteira em menos de um ano.** É este o sinal de maturação, mais que
o AP:

| Camada | Artefato | Data | O que muda |
|---|---|---|---|
| Fundacional aberto | SAM 3 / SAM 3.1 | 11/2025, 03/2026 | conceito como interface |
| Sem rótulo nenhum | DINOv3, 1,7 bilhão de imagens, ViT de 7B | 2025 | primeira vez que auto-supervisão bate supervisão fraca em sondagem |
| Tempo real na borda | YOLOE-26 / YOLO26 | 08/2026 | 40,6 AP em LVIS por texto, "velocidade quase idêntica" ao fechado |
| Pequeno e local | Moondream 3 (9B, 2B ativos) e Moondream 2 0.5B (375 MiB em int4) | 2025–2026 | apontar, detectar e contar sem servidor |
| Peso permissivo | Qwen3-VL, Apache-2.0, OCR em 32 idiomas | 09–11/2025 | grounding 2D por coordenada relativa, agente de GUI |
| Ferramenta de quem trabalha | Roboflow Auto Label | 03/2026 | "de uma semana de rotulagem para minutos" |

**Documento entendido como imagem.** O **DeepSeek-OCR** saiu em 20/10/2025 sob licença MIT, com a
tese de *contexts optical compression* — tratar a página como pixel sai mais barato em token que
tratá-la como texto — e ~2.500 tokens/s de concorrência numa A100-40G; o **DeepSeek-OCR 2** foi
anunciado em 27/01/2026. A linhagem começa no `donut` (2021) e no Nougat; hoje o mesmo trabalho é
feito por VLM de propósito geral.

**Vigilância por descrição, em cidade, agora.** O *blueprint* de **Video Search and
Summarization** da NVIDIA (18/05/2025) monta agentes de análise de vídeo com VLM e RAG, resumindo
"100× mais rápido que assistir" — uma hora de vídeo em menos de um minuto de texto. O caso citado
é a **Linker Vision** em Kaohsiung, Taiwan: **de 30 mil câmeras municipais para mais de 50 mil em
2026**, com "redução de até 80% no tempo de resposta a incidentes", narrando eventos urbanos
complexos como alagamento e acidente.

**Contagem e ecologia.** Em 24/11/2025 o Meta e o Conservation X Labs lançaram o **SA-FARI**: mais
de 10 mil vídeos de armadilha fotográfica, mais de 100 espécies, com caixa e máscara para cada
animal em cada quadro e identidade preservada no tempo. A frase do Alex Dehgan, cofundador do
CXL, é o que interessa: "pela primeira vez teremos a capacidade de automatizar a descrição e o
monitoramento do comportamento animal".

**Inspeção industrial.** O mercado de inspeção visual por IA foi de US$ 32,66 bilhões em 2025 para
mais de US$ 40 bilhões em 2026 (22,88% ao ano até 2035, segundo a compilação do IIoT World de
24/08/2026, que é fonte de média confiabilidade). O número que importa aqui não é o mercado, é o
**salto de 65,0% para 85,1% em adaptação zero-shot a linha de produto nunca vista** — exatamente
a promessa do vocabulário aberto — e o fato de **58% das implantações serem inteiramente na
borda**, o que é a restrição econômica da coisa toda.

**Acessibilidade.** O Be My Eyes roda nos óculos Ray-Ban Meta e Oakley Meta por comando de voz
("Hey Meta, Be My Eyes"), em 21 mercados, e o Meta AI tem um modo de "respostas detalhadas" que
descreve o ambiente. Segundo a página do próprio Meta, os óculos descrevem o entorno, leem texto
e identificam objetos sem uso das mãos.

**Acervo pessoal consultável.** A **Enhanced Visual Search** da Apple roda um modelo local que
gera um *embedding* da foto, cifra e compara contra um índice global de pontos de referência com
criptografia homomórfica, relay OHTTP e privacidade diferencial — a partir do iOS 18, iPadOS 18 e
macOS Sequoia. O Google Photos tem o **Ask Photos**, com alternância entre busca com IA e busca
clássica.

**A tela como imagem.** No **OSWorld 2.0** (28/06/2026), 108 tarefas longas de computador, todos
os modelos operam por captura de tela; o melhor deles, Claude Opus 4.8 com raciocínio máximo,
completa **20,6% das tarefas** com 54,8% de pontuação parcial, contra uma mediana humana de cerca
de 1,6 hora por tarefa.

### 3.2 O que existe e ainda não funciona

- **Conceito subjetivo.** Os 12 pontos que separam o SAM 3 do limite humano (65,0 contra 74,2)
  estão, segundo a própria documentação, em conceitos subjetivos. "Caixa vermelha" funciona;
  "pessoa suspeita" não tem referente estável — e é exatamente o que um comprador de segurança
  vai querer digitar.
- **Alucinação, e sem detector confiável dela.** O **SHROOM-Visions 2026** (EMNLP/UncertaiNLP)
  pediu a 27 equipes, em 600+ submissões e quatro idiomas, que marcassem os trechos alucinados
  de respostas condicionadas a imagem, em cinco categorias — invenção, mischaracterização,
  problema de OCR, erro de contagem, outros. Os melhores sistemas ficaram em **0,58 de
  correlação em nível de caractere e 0,51 de IoU**; a maioria abaixo de 0,4, **nenhum acima de
  0,6 em qualquer métrica**. Ou seja: sabemos que o modelo inventa e ainda não sabemos apontar
  onde.
- **Transferência de domínio.** "Do Open-Vocabulary Detectors Transfer to Aerial Imagery?"
  (Tsourveloudis, 02/02/2026) existe justamente porque a resposta não é óbvia; não consegui
  extrair os números do PDF (ver seção 8).
- **Modo sem prompt.** O YOLOE-26 cai de 40,6 AP (texto) para **31,1 AP** quando tem de decidir
  sozinho o vocabulário. A máquina vê o que se pede; sem pedido, vê pior.
- **Latência real de ponta a ponta.** Os 30 ms da H200 convivem, na mesma página da Ultralytics,
  com **2.921 ms por imagem** numa RTX PRO 6000 em processamento por imagem. São medições de
  coisas diferentes e não consegui reconciliá-las (seção 8).

### 3.3 Quem constrói

**Meta FAIR / Superintelligence Labs** (SAM, DINO, SA-Co, SA-FARI) — define a fronteira e a
licença. **Alibaba Qwen** (Qwen3-VL, Apache-2.0) — ocupa a faixa de licença permissiva. **DeepSeek**
(OCR, MIT) — a tese do documento como pixel. **IDEA Research** (Grounding DINO) e **Roboflow**
(Auto Label, RF-DETR, `supervision`) — a camada de ferramenta. **Ultralytics** (YOLO26, YOLOE-26)
— a camada de borda. **Moondream** — o pequeno e local. **NVIDIA** (VSS, Cosmos, Nemotron,
Metropolis) — a plataforma de vídeo. **Cognex** (US$ 994 milhões de receita em 2025) e **Keyence**
(US$ 7,16 bilhões) — os incumbentes de inspeção, que estão absorvendo a capacidade em vez de
serem deslocados por ela. E, do lado de quem compra em escala pública: **prefeituras** (Smart
Sampa), **operadores de transporte** e **integradores de câmera**.

### 3.4 Números de adoção

| O quê | Número | Data | Fonte |
|---|---|---|---|
| Conceitos únicos no treino do SAM 3 | 4 milhões | 11/2025 | arXiv 2511.16719 |
| Frases no benchmark SA-Co/Gold | 214 mil, em 126 mil imagens/vídeos | 11/2025 | Ultralytics |
| Vazão de vídeo, SAM 3.1, uma H100 | 16 → 32 fps | 03/2026 | blog Meta |
| Câmeras municipais com busca semântica (Kaohsiung) | 30 mil → +50 mil | 2025 → 2026 | NVIDIA |
| Mercado de inspeção visual por IA | US$ 32,66 bi → +US$ 40 bi | 2025 → 2026 | IIoT World |
| Vídeos anotados no SA-FARI | +10 mil, +100 espécies | 11/2025 | Meta / CXL |
| Tarefas de computador resolvidas por agente que só vê a tela | 20,6% | 06/2026 | OSWorld 2.0 |
| Artigos aceitos em CVPR/ICLR/NeurIPS medidos em levantamento | 26.104 (2023–2025) | 10/2025 | arXiv 2510.09586 |

**Sem número encontrado** para três coisas que eu queria: quantos artigos de *open-vocabulary*
por ano (o levantamento de 26 mil artigos mede a virada para VLM, não esse recorte); quanto
encolheu o mercado de anotação manual; e quantos postos de digitação/conferência foram fechados
no Brasil. Registrado na seção 12 em vez de estimado.

### 3.5 Nota sobre o Brasil

O Brasil não é espectador deste tema — é um dos maiores laboratórios de campo do mundo, pelo
lado da vigilância.

**Smart Sampa.** Em operação desde setembro de 2024. Em 14/04/2026: **50 mil câmeras na cidade,
20 mil com reconhecimento facial, 30 mil privadas integradas**, **3 mil foragidos presos** no
total (418 só em 2026) e 202 desaparecidos localizados. O Relatório de Transparência da
Prefeitura, cobrindo 21/11/2024 a 21/05/2025, reporta 1.153 prisões de foragidos, 31.323 câmeras
integradas, **99,5% de índice de assertividade**, 82 pessoas conduzidas e liberadas (53 por falta
de baixa de mandado, 6 por inconsistência cadastral, **23 por reconhecimento facial**), e a frase
do prefeito Ricardo Nunes: "não tivemos nenhuma pessoa presa por erro ou falha do Smart Sampa".

**A outra contagem.** O Núcleo Jornalismo (21/08/2026), a partir de dados de LAI e da nota
técnica do Lapin, do Instituto Peregum e da Rede Liberdade, chega a **211 pessoas conduzidas e
liberadas entre 21/11/2024 e 22/11/2025 — 141 por mandado não baixado e 59 por inconsistência do
reconhecimento facial**. Encontrou **4 processos com sentença**: duas indenizações de **R$ 5 mil**
por dano moral concedidas, duas negadas. **Três das quatro vítimas são negras.** As duas
indenizações somadas equivalem a **0,0041% do orçamento do Smart Sampa em 2026** (R$ 240,6
milhões).

**Sem efeito medido sobre o crime.** O CESeC (04/08/2025, coordenação de pesquisa de Thallita
Lima) aplicou diferença-em-diferenças comparando São Paulo a cidades do estado sem o programa:
furtos com leve aumento sem significância estatística, homicídios e assaltos estáveis, prisões em
flagrante e por mandado sem mudança relevante. A Prefeitura respondeu apontando falhas de
metodologia.

**A moldura legal está sendo escrita agora, e ela fala de biometria.** O PL 2338/2023 foi
aprovado pelo Senado em 10/12/2024 e está na Câmara; a votação foi adiada para 2026. Classifica
reconhecimento facial como risco excessivo e abre exceções tão amplas — investigação criminal,
flagrante, desaparecidos, recaptura de foragidos — que, na leitura da Coalizão Direitos na Rede,
"tende a afrouxar as regras". Em paralelo, o **PL 1828/2023** (dep. Rodrigo Gambale), aprovado na
Comissão de Segurança Pública, foi à pauta do plenário em 17/06/2026 autorizando câmeras com
reconhecimento facial em estações de metrô, terminais, ônibus, vias e repartições em todo o país.

**Nenhum dos dois textos fala de busca por descrição.** É esse o buraco que este mapa persegue.

## 4. As disrupções-raiz

Quatro raízes, cada uma submetida às quatro perguntas do critério de maturidade. Antes delas, o
que foi **recusado** — porque a recusa registrada vale mais que a raiz aceita.

### 4.0 As recusas (candidatos que não entram como raiz)

- **Classificação de imagem e detecção com classes fixas.** Recusado como raiz: adoção em
  maioria desde ~2018. É o substrato, não a ruptura. Tratado como contexto na seção 3.
- **OCR tradicional.** Recusado como raiz: maioria há mais de uma década; `PaddleOCR` e
  `EasyOCR` são infraestrutura. O que entra é a leitura **sem** OCR, que é outra coisa.
- **Reconhecimento facial.** Esta é a recusa importante. *Candidato recusado como raiz: adoção
  em maioria no Brasil desde 2024 (Smart Sampa em operação desde setembro de 2024, 20 mil
  câmeras com a tecnologia, 3 mil prisões).* Não rompe mais nada — está regulado, litigado,
  medido e disputado. Entra no mapa em dois papéis: como **contexto** (seção 3.5) e como **a
  moldura jurídica que o vocabulário aberto vai contornar**, que é o mecanismo central da raiz
  R3.
- **SAM 1 e SAM 2 (segmentar por clique).** Recusado: é melhoria sustentadora do trabalho de
  anotação — faz a mesma coisa, mais rápido. Vira efeito, não raiz.
- **VLM generalista que descreve uma imagem em prosa.** Recusado: adoção em maioria desde 2024, e
  a descrição em prosa não muda o pipeline de ninguém. O que muda é a **saída localizada** —
  máscara, caixa, coordenada — que é o que as raízes abaixo exploram.
- **SAM 3D e reconstrução.** Fora do recorte: é o tema 10.

### 4.1 R1 — A classe deixa de ser decidida no treino e passa a ser decidida na pergunta

**O que rompe.** Rompe o ciclo que organizou a indústria de visão computacional inteira: definir
classe → coletar imagens → pagar anotação → treinar → avaliar. Rompe o dataset rotulado como
ativo de barreira competitiva. Rompe o modelo de negócio de plataforma de anotação cobrada por
objeto desenhado. E rompe a unidade de planejamento: "quanto tempo leva para detectar X" deixa
de ser uma pergunta de semanas.

**Por que agora, e não há cinco anos.** Três pré-condições que só existem juntas desde o fim de
2025: (a) um modelo que devolve **todas** as instâncias de um conceito, com identidade, e não
uma máscara por clique — a *presence head* do SAM 3 é literalmente a separação entre reconhecer
e localizar; (b) um conjunto de treino com 4 milhões de conceitos, incluindo negativos difíceis,
que é o que faz o modelo saber dizer "não tem" — sem isso, vocabulário aberto vira gerador de
falso positivo; (c) a descida para a borda no mesmo ano, que é o que transforma capacidade em
produto (YOLOE-26 "sem custo extra de inferência" ao reparametrizar de volta para o caminho YOLO
padrão).

**Onde está na difusão.** **Adoção precoce**, e subindo depressa: é o padrão de rotulagem
automática do Roboflow, está integrado na Ultralytics, está em produto de consumo do Meta. Não é
maioria: a maior parte do que roda em produção no mundo ainda é detector fechado treinado em
dataset próprio.

**O que ainda falta acontecer.** Custo por quadro cair uma ordem de grandeza; uma resposta ao
conceito subjetivo (os 12 pontos de distância do humano); um detector de alucinação que funcione
(nenhum sistema do SHROOM-Visions passou de 0,6); e resolver a licença — os pesos do SAM 3 exigem
aprovação de acesso, o que não é o mesmo que aberto.

**Quem bloqueia, captura ou redireciona.** As plataformas de anotação e os fornecedores de dado
rotulado (Labelbox, Scale AI, CVAT, Label Studio), que têm incentivo direto para reposicionar o
produto em revisão e avaliação — e conseguem, porque a avaliação é exatamente o que o vocabulário
aberto **não** resolve. E o próprio Meta, que controla a licença do modelo que definiu o campo.

### 4.2 R2 — O documento deixa de ser convertido em texto e passa a ser lido como imagem

**O que rompe.** Rompe o pipeline OCR → detecção de layout → parser → regra de negócio, que é o
miolo de toda a indústria de processamento documental. Rompe o **formulário** como forma
canônica de coletar dado estruturado — se a máquina lê o papel amassado, o campo com rótulo deixa
de ser necessário. E rompe a natureza do erro: o erro do OCR era caractere trocado, detectável
por dicionário e por dígito verificador; o erro do modelo é **campo plausível inventado**, que
passa em qualquer validação sintática.

**Por que agora.** O `donut` provou o conceito em 2021 e não pegou, porque exigia treinar por
domínio. O que mudou: (a) VLM generalista com OCR robusto em 32 idiomas e peso Apache-2.0
(Qwen3-VL, out/2025), o que elimina o treino por domínio; (b) a tese econômica da compressão
óptica de contexto (DeepSeek-OCR, MIT, out/2025) — a página como pixel custa menos token que a
página como texto, o que inverte o argumento de custo que sustentava o OCR; (c) o *grounding*
por coordenada, que é o que permite dizer de onde veio a resposta.

**Onde está na difusão.** **Produto de nicho passando a adoção precoce.** Existe mercado
(processamento inteligente de documento), existem fornecedores, existe caso em produção — e
existe barreira dura em tudo que é auditado.

**O que ainda falta acontecer.** Uma forma padronizada de **prova de leitura**: recorte da
imagem, coordenada e confiança por campo, aceita por auditor e por regulador. Sem isso o
OCR-free entra só onde ninguém confere.

**Quem bloqueia.** Auditoria e contabilidade, e os órgãos que exigem rastreabilidade
caractere-a-caractere (Receita, Banco Central, tribunais). Não por conservadorismo: porque a
responsabilidade por um número errado tem dono, e "o modelo leu assim" não é defesa.

### 4.3 R3 — A câmera deixa de ter uma lista de alvos e passa a ter uma pergunta

**O que rompe.** Rompe a arquitetura jurídica inteira da vigilância por imagem, que foi
construída sobre **o cadastro**: o banco de faces, o dado biométrico, a base de comparação. O
Artigo 5º do AI Act europeu proíbe categorização biométrica por características sensíveis,
reconhecimento de emoção em trabalho e escola, raspagem não direcionada de faces e identificação
biométrica remota em tempo real. O PL 2338 brasileiro segue o mesmo desenho. **Todos os quatro
proibidos pressupõem biometria.** Uma consulta por "pessoa de moletom cinza carregando mochila
preta perto do portão 3, entre 22h e 2h" não produz identificação biométrica, não cria banco de
faces, não infere emoção declaradamente — e recupera pessoas.

**Por que agora.** (a) O SAM 3.1 tornou o rastreamento por conceito quase tempo real (32 fps numa
H100 para número médio de objetos); (b) o *blueprint* VSS empacotou busca semântica em vídeo como
arquitetura de referência, com caso municipal em escala de dezenas de milhares de câmeras; (c) o
parque de câmeras já está instalado e pago — em São Paulo são 50 mil —, de modo que a capacidade
nova não exige investimento de infraestrutura, só de GPU e software.

**Onde está na difusão.** **Produto de nicho entrando em adoção precoce.** Kaohsiung é caso
real; o resto é piloto e catálogo de fornecedor.

**O que ainda falta acontecer.** Custo de GPU por stream cair; um caso público em que a busca por
descrição — e não por face — seja o objeto da controvérsia; e alguém decidir se a consulta é
tratamento de dado pessoal.

**Quem bloqueia.** No Brasil, o Ministério Público, o Idec e a rede de organizações de direito
digital, que já ganharam no eixo biométrico (a condenação da ViaQuatro em 2018 e a suspensão do
sistema do Metrô em 2022 são precedentes vivos) e terão de reconstruir a tese num eixo onde não
há dado biométrico para apontar. E o custo: a conta de inferência é o freio mais eficaz que
existe hoje.

### 4.4 R4 — A imagem parada deixa de ser arquivo opaco e vira base consultável

**O que rompe.** Rompe a **privacidade por obscuridade**, que é o regime de fato de quase todo o
acervo de imagem do mundo: a informação está ali, mas ninguém vai olhar, porque olhar custa
tempo humano. Rompe também a fronteira entre "documento" e "interface" — a tela é uma imagem, e
um agente que lê pixel não precisa de API.

**Por que agora.** (a) Extração de característica sem rótulo em qualidade de produção (DINOv3,
1,7 bilhão de imagens, primeira vez que auto-supervisão supera supervisão fraca em sondagem), o
que torna indexável qualquer acervo sem taxonomia prévia; (b) busca sobre acervo pessoal já
embarcada e ligada por padrão em sistema operacional (Enhanced Visual Search a partir do iOS 18,
com criptografia homomórfica — a Apple resolveu o problema de privacidade da *transmissão*, não o
de a imagem virar consultável); (c) agentes que operam exclusivamente por captura de tela
(OSWorld 2.0).

**Onde está na difusão.** **Adoção precoce no acervo pessoal** (está no telefone de todo mundo,
mas pouca gente usa como base de dados); **laboratório/demo pública** no acervo institucional.

**O que ainda falta acontecer.** O custo de indexar retroativamente um acervo grande cair até o
ponto em que arquivos, jornais e empresas médias possam fazê-lo; e uma decisão — de tribunal ou
de regulador — sobre se o índice é um dado autônomo em relação à imagem que ele descreve.

**Quem bloqueia.** Apple e Google, que preferem indexação no dispositivo e têm incentivo
reputacional para limitar a consulta de terceiros; e a litigância de privacidade, que tem
precedente pronto (BIPA nos EUA, LGPD aqui).

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A classe deixa de ser decidida no treino e passa a ser decidida na pergunta
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Equipes de visão entregam detector novo em dias, sem coletar nem rotular dataset"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O ativo de valor deixa de ser o dataset rotulado e passa a ser o conjunto de avaliação"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Contratos de fornecimento de visão passam a especificar taxa de falso positivo por conceito, não acurácia média"
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Plataformas de anotação movem a receita de desenhar caixa para revisar, avaliar e arbitrar discordância"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "O trabalho de anotação distribuída encolhe em volume e sobe em exigência, concentrando a renda em menos pessoas"
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "Contar e rastrear por descrição vira função de prateleira em vídeo, sem treino por espécie ou por objeto"
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Monitoramento ecológico e agrícola troca amostragem manual por censo contínuo, e o gargalo passa a ser bateria e enlace"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Órgãos ambientais passam a aceitar contagem automatizada em licenciamento e abrem disputa sobre quem homologa o modelo"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Inspeção industrial deixa de esperar amostra de defeito e sobe linha nova com o defeito descrito em texto"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "O inspetor humano deixa de olhar peça e passa a escrever e manter o texto que define o defeito"
            sinal: medio
            prazo: 2029
            confianca: media
          - id: e3.2
            ordem: 2
            efeito: "A auditoria de qualidade passa a exigir o histórico de versões do prompt junto do lote produzido"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "Normas setoriais de qualidade como a IATF 16949 ganham cláusula de rastreabilidade de prompt equivalente à de calibração de instrumento"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "O custo de inferência por quadro impede a substituição do detector fixo, e o vocabulário aberto se instala na fábrica de modelo, não na operação"
        sinal: medio
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Firma-se o trabalho em duas camadas, com o modelo aberto rotulando e o modelo pequeno rodando, e destilar vira a competência central de quem faz visão"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "A vantagem competitiva migra do dado proprietário para a escolha do vocabulário e do conjunto de teste, que não se protegem por barreira técnica"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "A licença vira o gargalo, e quem não obtém aprovação de acesso aos pesos escolhe entre depender do fornecedor e usar modelo pior"
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Uma segunda linhagem de modelos de vocabulário aberto sob licença permissiva ocupa a faixa que a licença restrita deixou vaga"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Compras públicas brasileiras que exigem execução local acabam puxando modelo de peso permissivo de origem chinesa por ausência de alternativa ocidental"
                sinal: fraco
                prazo: 2030
                confianca: baixa

  - disrupcao: O documento deixa de ser convertido em texto e passa a ser lido como imagem
    efeitos:
      - id: e6
        ordem: 1
        efeito: "O pipeline de OCR, layout e parser desaparece do meio, e integrar documento vira uma chamada de modelo"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "O erro muda de natureza, de caractere trocado detectável por dicionário para campo plausível inventado que passa em toda validação sintática"
            sinal: medio
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Setores auditados mantêm o OCR determinístico como testemunha ao lado do modelo, e o custo do processo sobe em vez de cair"
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "A conferência humana migra de ler o campo para julgar o caso duvidoso, e a métrica do time vira taxa de encaminhamento"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "O cargo de digitador e conferente some do organograma do BPO documental brasileiro e reaparece como analista de exceção, com quadro menor"
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "O formulário deixa de ser a forma canônica de coletar dado estruturado, e foto de papel e captura de tela viram entrada de primeira classe"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Serviços públicos e de crédito no Brasil passam a oferecer mande a foto como caminho principal, e o abandono no cadastro cai"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "O PDF perde a função de formato de entrega e fica restrito a arquivamento e assinatura, porque o que circula é a imagem"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "Quem projeta interação passa a desenhar a tela de correção do que a máquina leu como tela principal do fluxo, não como exceção"
            sinal: medio
            prazo: 2028
            confianca: media
      - id: e8
        ordem: 1
        efeito: "A imagem vira formato de compressão de contexto, e guarda-se a página como pixel porque sai mais barato em token que o texto"
        sinal: fraco
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Memórias de agente passam a guardar página renderizada em vez de texto extraído, e a busca textual sobre o acervo deixa de funcionar como antes"
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e9
        ordem: 1
        efeito: "A exigência de dizer de que pixel saiu cada número segura a adoção onde há auditoria, e a leitura sem OCR entra primeiro onde ninguém confere"
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "Uma camada de prova de leitura, com recorte da imagem, coordenada e confiança por campo, vira requisito de contrato"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "O grounding espacial vira a diferença comercial entre modelos de documento, acima da acurácia bruta"
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: A câmera deixa de ter uma lista de alvos e passa a ter uma pergunta
    efeitos:
      - id: e10
        ordem: 1
        efeito: "Busca em vídeo por descrição em linguagem natural vira função padrão do sistema de câmeras, não recurso avançado"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "O vigilante deixa de assistir parede de monitores e passa a escrever consultas e triar alertas"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: "A vigilância privada encolhe em posto fixo e cresce em central remota, concentrando o emprego em menos endereços e mais turnos"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: "O acervo de vídeo que hoje se descarta por custo de revisão passa a ser consultado retroativamente, e a câmera não guardou deixa de ser resposta"
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e11
        ordem: 1
        efeito: "A vigilância por descrição escapa da moldura jurídica escrita para biometria, porque camisa vermelha e mochila preta não são dado biométrico"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "O litígio brasileiro sobre câmera muda de eixo, do consentimento para coleta biométrica para a finalidade e a proporcionalidade da consulta"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: "A ANPD passa a ser cobrada por registro de consultas e não por registro de bancos de face, e descobre não ter instrumento para isso"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: "Categorias proibidas na Europa, como inferir etnia ou emoção, voltam pela porta da descrição livre sem que o sistema declare que as infere"
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e12
        ordem: 1
        efeito: "O perfilamento por aparência substitui o perfilamento por identidade, e o erro deixa de ter vítima identificável"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: "A reparação individual deixa de funcionar como freio, porque não existe registro de quem foi filtrado e não abordado"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: "Organizações de direitos digitais trocam o processo individual pela exigência de auditoria de consultas, e a disputa vira sobre o log"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: "Cidades e varejo passam a comprar pergunta por mês em vez de câmera instalada, e a conta de GPU vira medida de política de segurança"
        sinal: fraco
        prazo: 2029
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: "Prefeituras médias sem GPU nem contrato de nuvem ficam com câmera que grava e não consulta, ampliando a distância entre capital e interior"
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e14
        ordem: 1
        efeito: "A evidência de que câmera não reduz crime desloca o argumento de venda da prevenção para a elucidação"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: "O indicador de sucesso do programa muda de crime evitado para foragido localizado e caso apoiado, que são contáveis e não dependem de dissuasão"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: "O debate público perde o eixo da eficácia e vira disputa sobre qual número contar, deslocando a decisão do mérito para a comunicação"
                sinal: fraco
                prazo: 2030
                confianca: baixa

  - disrupcao: A imagem parada deixa de ser arquivo opaco e vira base consultável
    efeitos:
      - id: e15
        ordem: 1
        efeito: "O acervo pessoal de imagem passa a responder pergunta, e o que estava guardado passa a estar disponível"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: "A privacidade por obscuridade acaba dentro de casa, e o comprovante, a senha na tela e o remédio ao fundo viram resultado de busca"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: "Apagar a foto deixa de bastar porque o índice sobrevive ao arquivo, e o direito ao esquecimento passa a se aplicar ao embedding"
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e15.2
            ordem: 2
            efeito: "Divórcio, processo trabalhista e investigação passam a pedir a consulta ao acervo em vez do acervo, e a produção de prova muda de objeto"
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e16
        ordem: 1
        efeito: "A tela vira imagem legível por máquina, e o agente opera software olhando pixel em vez de chamar API"
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: "Quem projeta interface passa a ter dois públicos com necessidades opostas, o humano que quer densidade e o agente que quer rótulo explícito e estado visível"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: "Surge um custo declarado de legibilidade para máquina no projeto de produto, e a acessibilidade vira argumento econômico antes de ser argumento moral"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e16.2
            ordem: 2
            efeito: "A captura de tela vira o formato de integração de quem não tem API, e o raspar visual escapa de termos de uso escritos para requisição HTTP"
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e17
        ordem: 1
        efeito: "Descrever o mundo para quem não enxerga sai do celular e vai para os óculos, com descrição contínua em vez de sob demanda"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e17.1
            ordem: 2
            efeito: "A descrição deixa de ser serviço e vira camada consultável, e a pessoa cega passa a perguntar onde está o objeto em vez de receber a cena inteira"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e17.1.1
                ordem: 3
                efeito: "O Brasil fica fora da primeira janela por ausência de lançamento e de idioma, e a acessibilidade por óculos chega por importação individual antes de política pública"
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e18
        ordem: 1
        efeito: "A indexação retroativa de acervo grande não acontece por custo, e a consulta fica restrita ao que é recente ou ao que alguém paga para indexar"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e18.1
            ordem: 2
            efeito: "Arquivos públicos, museus e jornais brasileiros ficam com acervo não consultável enquanto plataformas consultam o delas, aumentando a assimetria de quem pode perguntar ao passado"
            sinal: fraco
            prazo: 2030
            confianca: baixa
```

### O que o bloco não diz — mecanismos, classes de referência e cruzamentos

O bloco lista efeitos. Ele não carrega o **mecanismo** (`porque o pai faz X`) nem a **classe de
referência** que justifica cada ano. Vão aqui, por raiz, e depois os cruzamentos.

#### R1 — a classe decidida na pergunta

**e1** *(equipes entregam detector em dias)* — porque o passo que consumia semanas era coletar e
rotular, e o Auto Label do Roboflow (12/03/2026) faz o primeiro passe com Florence-2 e treina
RF-DETR em cima, transformando "uma semana de rotulagem em minutos". Sinal **forte**: três
artefatos verificáveis hoje — o fluxo do Roboflow, a integração do SAM 3 na Ultralytics, e o
YOLOE-26 com prompt de texto. **Classe de referência**: SAM 1 saiu em abril de 2023 e virou
padrão de pré-rotulagem em plataforma de anotação em cerca de dois anos; o SAM 3 saiu em
novembro de 2025 com uma cadeia de ferramentas já pronta para recebê-lo, o que encurta, não
alonga. Daí 2027 e não 2026: o que existe hoje é a ferramenta, não a prática corrente.

**e1.1** *(o ativo vira o conjunto de avaliação)* — porque, removido o custo de produzir rótulo
de treino, o que continua caro e não automatizável é decidir se o resultado está certo, e é
justamente aí que o modelo é pior: 12 pontos abaixo do humano em conceito subjetivo. **e1.1.1**
segue porque, se o gargalo é avaliação, o contrato precisa falar a língua da avaliação; acurácia
média não diz nada quando o vocabulário é aberto — não existe denominador fixo de classes.

**e1.2** *(plataformas de anotação mudam de receita)* — porque cobrar por objeto desenhado deixa
de fazer sentido quando o desenho é grátis; a receita migra para o que sobra. Note que este
efeito é a **captura** da disrupção pelo incumbente, não a morte dele: a Roboflow é hoje a
principal distribuidora do vocabulário aberto, e o Meta fez parceria com ela para ajuste fino do
SAM 3. **e1.2.1** é o efeito sobre quem perde: o trabalho distribuído de anotação, que sustenta
renda em vários países, encolhe em volume e sobe em exigência. Está em **2032, fora do horizonte
do mapa**, e está declarado como tal — a cadeia de terceirização é lenta e os contratos são
longos.

**e2** *(contar por descrição)* — porque contar sempre exigiu um detector por objeto contável, e
o SA-FARI mostra a alternativa: 10 mil vídeos, 100+ espécies, máscara e identidade por quadro.
Sinal **medio** e não forte: há um conjunto de dados e uma declaração de intenção, não uma
prática instalada de censo. **Classe de referência**: armadilha fotográfica levou ~15 anos para
ir de equipamento de pesquisa a instrumento de rotina; a análise é a etapa que agora colapsa,
não a coleta. **e2.1.1** é a consequência institucional, e o mecanismo é específico: o órgão
ambiental não aceita número sem instrumento homologado, e não existe homologação de modelo.

**e3** *(inspeção sem amostra de defeito)* — porque o custo de entrada da inspeção automatizada
sempre foi ter exemplos do defeito, e o defeito é, por definição, raro; a adaptação zero-shot
saindo de 65,0% para 85,1% muda o cálculo de quem sobe linha nova. **Classe de referência**:
Cognex e Keyence levaram cerca de uma década para levar aprendizado profundo do catálogo ao
chão de fábrica; a diferença aqui é que os dois já embarcaram a capacidade nos produtos deles
(OneVision, IV3), o que encurta para 2–3 anos. **e3.2** e **e3.2.1** são o efeito de governança:
se o que define o defeito é uma frase, a frase entra no dossiê de qualidade do mesmo jeito que
entra o certificado de calibração do paquímetro. Mantive **confiança baixa** na norma: norma
setorial muda em ciclos de cinco a sete anos.

**e4** *(o custo trava a substituição — a retroação de R1)* — porque 30 ms numa H200 é rápido
para um laboratório e caro para mil câmeras, e porque o YOLOE-26 explicitamente reparametriza a
capacidade aberta de volta para o caminho YOLO padrão "sem pagar custo extra de inferência".
Sinal **medio** e confiança **alta**: é o padrão que a ferramenta já implementa. **e4.1** é o
formato que isso assume — duas camadas — e **e4.1.1** é a consequência incômoda: se qualquer um
pode destilar, a barreira competitiva some, e sobra a escolha do vocabulário e do teste, que são
conhecimento tácito e não se patenteiam.

**e5** *(a licença vira gargalo)* — porque os pesos do SAM 3 exigem aprovação de acesso, e uma
empresa que não a obtém não tem plano B de mesma qualidade. **e5.1**: a resposta de mercado é
uma linhagem permissiva, e ela já existe (Qwen3-VL em Apache-2.0, Moondream com licença
permissiva). **e5.1.1** é o efeito geopolítico com mecanismo brasileiro concreto: exigência de
execução local em compra pública + ausência de modelo ocidental permissivo de mesma capacidade
= modelo chinês por descarte, não por escolha.

#### R2 — o documento lido como imagem

**e6** *(o pipeline some)* — porque o pipeline existia para transformar pixel em caractere e
caractere em campo, e o modelo faz os dois saltos de uma vez. Sinal **forte**: DeepSeek-OCR em
MIT, DeepSeek-OCR 2 em janeiro de 2026, Qwen3-VL com OCR em 32 idiomas e Apache-2.0. **Classe de
referência**: a nota fiscal eletrônica no Brasil foi de piloto (2006) a obrigatória (2010) em
quatro anos — mas por imposição regulatória, não por adoção espontânea; sem imposição, o ciclo é
mais longo, e por isso 2027 vale para o pipeline técnico e 2029 para o formulário (e7).

**e6.1** *(o erro muda de natureza)* — confiança **alta**, e é o único efeito de 2ª ordem com
confiança alta no mapa inteiro. O motivo é que não se trata de previsão: é uma propriedade do
método. O OCR errava caractere, e caractere errado quebra dígito verificador; o modelo erra
campo inteiro de forma coerente. O SHROOM-Visions mede exatamente isso e mostra que ninguém
detecta bem — nenhum sistema acima de 0,6. **e6.1.1** é a contradição registrada: em setor
auditado, manter as duas leituras custa mais que manter uma.

**e6.2.1** *(o cargo some do organograma)* — este é o efeito que a skill proíbe em forma
genérica ("mudanças no mercado de trabalho"), e por isso ele carrega nome e mecanismo: o cargo é
**digitador/conferente em BPO documental**, o mecanismo é que a taxa de encaminhamento de
exceção (e6.2) vira a métrica do time, e uma métrica de exceção dimensiona equipe pela
exceção, não pelo volume. **Sem número encontrado** para o tamanho desse contingente no Brasil
(seção 12).

**e7.2** *(a tela de correção vira a tela principal)* — é o efeito mais diretamente acionável
para o público deste mapa. Mecanismo: se o modelo lê tudo e erra de forma plausível, o momento
de projeto que decide a qualidade do produto deixa de ser a coleta e passa a ser a
**confirmação** — mostrar o que se leu, de onde se leu, e deixar corrigir sem refazer.

**e8** *(a imagem como compressão de contexto)* — sinal **fraco**, um repositório e uma tese; mas
o mecanismo é econômico e verificável: se a página em pixel custa menos token que a página em
texto, o incentivo se inverte. **e8.1** é a consequência perversa: acervo guardado como imagem
não responde a `grep`.

**e9** *(a rastreabilidade segura a adoção — retroação de R2)* — porque a responsabilidade por um
número tem dono, e o dono precisa mostrar a origem. **e9.1** é a forma que a resposta assume, e
**e9.1.1** é a consequência de mercado: quando todo mundo lê bem, o que diferencia é provar de
onde leu.

#### R3 — a câmera com uma pergunta

**e10** *(busca por descrição vira padrão)* — porque o *blueprint* VSS empacotou a arquitetura e
o caso de Kaohsiung dá a escala (30 mil → 50+ mil câmeras, −80% no tempo de resposta). Sinal
**forte**: arquitetura de referência publicada, caso municipal, produto de fornecedor.
**Classe de referência**: o reconhecimento facial em segurança pública no Brasil levou cerca de
cinco anos da demonstração de Carnaval (2019) à operação em escala municipal (Smart Sampa,
setembro de 2024). A busca semântica parte de um parque de câmeras **já instalado**, o que
elimina a etapa mais lenta; daí 2027 e não 2029.

**e10.2** *(o acervo passa a ser consultado retroativamente)* — mecanismo: o vídeo é descartado
porque revisar custa hora humana; quando revisar custa consulta, guardar passa a valer a pena, e
o custo de armazenamento vira decisão de política.

**e11** *(escapa da moldura biométrica)* — é o efeito central do mapa e merece o mecanismo por
extenso. As quatro proibições visuais do Artigo 5º do AI Act (categorização biométrica por
característica sensível, reconhecimento de emoção em trabalho e escola, raspagem não direcionada
de face, identificação biométrica remota em tempo real) e o desenho equivalente do PL 2338
**definem o objeto regulado pelo dado usado** — o dado biométrico. Uma consulta por vestuário,
postura, objeto carregado e horário não usa dado biométrico. Confiança **media** e não alta
porque há um caminho pelo qual o efeito não se realiza: um tribunal pode decidir que a
finalidade — individualizar uma pessoa — é o que define o tratamento, independentemente do dado
de entrada. É exatamente o que **e11.1** descreve.

**e11.2** *(as categorias proibidas voltam pela descrição)* — mecanismo: o AI Act proíbe o
sistema que **declara** inferir etnia ou emoção; um sistema que aceita qualquer frase pode
receber uma frase que seleciona por aparência sem nunca nomear a categoria. Não é evasão
deliberada; é a proibição escrita sobre a declaração, não sobre o efeito.

**e12** *(perfilamento por aparência, erro sem vítima identificável)* — o mecanismo é o que os
números do Smart Sampa deixam ver por contraste. Hoje, quando o sistema erra, existe uma pessoa
conduzida à delegacia, com nome, que processa e ganha R$ 5 mil. Quando o filtro é "pessoa de
moletom cinza", o falso positivo que **não** vira abordagem não deixa rastro, e os 211 conduzidos
do levantamento do Núcleo não teriam como ser contados. **e12.1** e **e12.1.1** seguem disso: sem
vítima contável, a reparação individual para de funcionar como freio, e a única alavanca que
sobra é o log.

**e13** *(comprar pergunta por mês)* — sinal **fraco**, é inferência a partir da estrutura de
custo (GPU por stream) e do modelo de venda do VSS; por isso confiança **media** e não alta.
**e13.1** é o efeito distributivo brasileiro: a capital tem contrato de nuvem, o interior tem
gravador.

**e14** *(a evidência de ineficácia desloca o argumento — retroação de R3)* — mecanismo: o estudo
do CESeC não achou efeito sobre crime; quem defende o programa precisa de um número que exista.
**e14.1** mostra que a troca **já aconteceu**: o Relatório de Transparência da Prefeitura conta
foragidos presos (1.153), desaparecidos localizados (68) e casos apoiados (275) — todos
contáveis, nenhum dependente de dissuasão. Sinal **medio** para o indicador virar padrão, mas o
artefato existe. **e14.1.1** é a consequência sobre o debate.

#### R4 — a imagem parada como base

**e15** *(o acervo responde pergunta)* — sinal **forte**: está embarcado em sistema operacional
(Enhanced Visual Search a partir do iOS 18, Ask Photos no Google Photos). **Classe de
referência**: a busca por rosto no acervo pessoal levou cerca de três anos do lançamento ao uso
corrente; a busca por conceito parte de uma base instalada muito maior. **e15.1** é o efeito
doméstico, e o mecanismo é que a obscuridade era a proteção: o comprovante no fundo da foto
sempre esteve legível, só não era achável.

**e15.1.1** *(o índice sobrevive ao arquivo)* — em **2033, fora do horizonte**, declarado. O
mecanismo é técnico e o efeito é jurídico: o *embedding* é um objeto derivado que não é a
imagem, e nenhuma lei brasileira ou europeia trata dele como categoria própria.

**e16** *(a tela como imagem)* — sinal **forte** (todos os modelos do OSWorld 2.0 operam por
captura de tela), confiança **media**, porque 20,6% de sucesso em tarefa longa é muito pouco para
sustentar o efeito na escala descrita. **e16.1** é o efeito de projeto — dois públicos —, e
**e16.1.1** é o achado que interessa a quem projeta: rótulo explícito, estado visível e ordem de
leitura sempre foram pedidos de acessibilidade e sempre perderam a disputa por espaço na tela;
quando o agente precisa deles para funcionar, o pedido ganha um argumento econômico.

**e17** *(a descrição migra para os óculos)* — sinal **forte**: o Be My Eyes roda por voz nos
Ray-Ban e Oakley Meta, em 21 mercados, com modo de resposta detalhada. **Classe de referência**:
os óculos do Meta saíram de 2 milhões de unidades somando 2023 e 2024 para mais de 7 milhões em
2025 — crescimento de cerca de 3,5× ao ano, comparável ao do fone sem fio e muito acima do
headset de RV, que em dez anos não chegou a 10% de adoção. Por isso 2028 e não 2031. *(Este
número veio de reportagem que não abriu para verificação direta — ver seção 8.)* **e17.1.1** é a
nota brasileira: o dispositivo não lança aqui na primeira janela, e a descrição em português
chega depois.

**e18** *(a indexação retroativa não acontece — retroação de R4)* — mecanismo: indexar acervo
exige passar cada item por um modelo, e o custo é proporcional ao tamanho do acervo, não ao uso.
**e18.1** é o efeito sobre quem perde: acervo público brasileiro sem orçamento de inferência
fica ilegível para máquina enquanto o acervo privado é consultável.

#### Cruzamentos

**Convergência — o achado do mapa.** Três ramos de raízes diferentes chegam ao mesmo efeito de
2ª ordem, por caminhos que não se tocam:

- **e9.1** (R2): a prova de leitura — recorte, coordenada e confiança por campo — vira requisito
  de contrato.
- **e12.1 → e12.1.1** (R3): sem vítima identificável, a única alavanca que sobra é exigir
  auditoria das consultas.
- **e15.2** (R4): a produção de prova passa a pedir a consulta ao acervo, não o acervo.

Os três dizem a mesma coisa: **o objeto que se audita deixa de ser o banco de dados e passa a
ser a pergunta.** Toda a engenharia de conformidade de dado — inventário de base, mapeamento de
tratamento, relatório de impacto — foi construída para inventariar *o que está guardado*. Num
regime de vocabulário aberto não há o que inventariar: a base é a mesma imagem de sempre, e o
que muda é quem perguntou o quê, quando. Não existe hoje, nem na LGPD nem no AI Act, obrigação
de registrar consulta.

**Convergência secundária — a economia da inferência.** **e4** (R1, o custo trava a substituição)
e **e13** (R3, comprar pergunta por mês) e **e18** (R4, a indexação não acontece) são o mesmo
fato econômico visto de três lugares: a unidade de custo da visão deixou de ser o rótulo e
passou a ser o token visual. Quem tem GPU pergunta; quem não tem, guarda.

**Retroalimentação.** **e14.1** reforça R3 num ciclo fechado: o programa troca o indicador por
um que a máquina sabe produzir em volume (foragido localizado, caso apoiado); o indicador novo
justifica mais consulta; mais consulta produz mais do indicador. O ciclo não passa por eficácia
em momento nenhum, e é por isso que o estudo do CESeC não o interrompe.

**Contradição 1.** **e6** (o pipeline determinístico some) × **e6.1.1** (setores auditados mantêm
o OCR determinístico como testemunha, e o custo sobe). Os dois não podem valer no mesmo lugar. O
que decide: se a prova de leitura de **e9.1** for aceita por auditor e regulador como
equivalente à extração determinística, vale e6; se não for, vale e6.1.1 e o ganho de custo
desaparece justamente onde o volume é maior.

**Contradição 2.** **e15** (o acervo pessoal responde pergunta) × **e18** (a indexação retroativa
não acontece por custo). Convivem hoje por um motivo específico: a Apple e o Google indexam
*incrementalmente*, foto a foto, no dispositivo do usuário, e quem paga a conta é a bateria de
quem tirou a foto. O que decide entre os dois no caso institucional é se alguém encontra o
equivalente disso para acervo parado — indexação amortizada — ou se continua sendo um custo de
projeto com pedido de verba.

#### Cobertura STEEP e quem perde

- **Social**: e12, e15.1, e17, e10.1.
- **Tecnológico**: e1, e4, e6, e8, e16.
- **Econômico**: e1.2, e5, e13, e6.2, e18.
- **Ecológico**: e2.1 e e2.1.1 (monitoramento e licenciamento). **A categoria ficou fina**, e
  registro isso em vez de forçar: o consumo energético da inferência contínua em vídeo é o
  efeito ecológico óbvio, mas não encontrei fonte que o dimensionasse para este caso, então ele
  aparece só como restrição econômica em e4 e e13 — o que é, reconhecidamente, um jeito de não
  olhar para ele.
- **Político**: e11, e11.1, e14, e5.1.1, e13.1.

**Quem perde**, nomeado: anotadores de dado distribuído (e1.2.1); digitadores e conferentes de
BPO documental (e6.2.1); vigilantes de posto fixo (e10.1.1); pessoas negras selecionadas por
aparência, que hoje são 3 das 4 vítimas com sentença no levantamento do Núcleo (e12); empresas
pequenas sem aprovação de acesso a peso de modelo (e5); prefeituras sem orçamento de GPU
(e13.1); arquivos, museus e jornais brasileiros (e18.1); e, em e6.1.1, quem paga o processo em
setor auditado, que sai mais caro.

## 6. Sinais fracos e wildcards

### Sinais fracos

**1. O modo sem prompt.** O YOLOE-26 tem um modo em que decide sozinho o vocabulário, e cai de
40,6 para 31,1 AP. É quase nada hoje — uma linha numa tabela. Se crescer, muda o mapa inteiro,
porque o eixo deste documento é que **alguém escreve a frase**. Um sistema que rotula o campo de
visão sem que ninguém peça nada não tem consulta para auditar, e a convergência da seção 5
desaba. *Sinal observável de que está crescendo*: o modo sem prompt passar dos 40 AP em LVIS,
ou aparecer como padrão (e não opção) em produto de câmera.

**2. Visão computacional aplicada à reação emocional, não à cena.** O `ORTHOS`, levantado pela
turma, é uma extensão que simula e visualiza resposta emocional a manchetes, com base em modelo
do Meta. É a fronteira entre ver e sentir, e ela está do lado errado da linha na Europa: o
Artigo 5º(1)(f) do AI Act proíbe inferir emoção em trabalho e escola. *O que mudaria*: se a
inferência de reação — não de emoção declarada — virar recurso de produto de mídia, a proibição
europeia fica sem objeto, porque o sistema não diz que infere emoção; diz que prevê engajamento.
*Sinal observável*: um produto de mídia vender otimização por reação prevista, medida em rosto ou
em corpo, sem usar a palavra emoção.

**3. Vocabulário aberto em imagem aérea e de sensoriamento.** Existe literatura específica
perguntando se os detectores abertos transferem para imagem aérea ("Do Open-Vocabulary Detectors
Transfer to Aerial Imagery?", 02/02/2026), o que só se pergunta quando alguém quer usar. O
comprador óbvio é defesa, e é o maior comprador de visão do mundo. Não abri fonte que mostrasse
contrato de vocabulário aberto para essa finalidade — o que achei foi contrato de contra-drone
com visão computacional genérica — e por isso este item fica como sinal fraco, **declarado como
inferência**, não como fato. *Sinal observável*: edital ou contrato que especifique detecção por
descrição em texto, e não por catálogo de alvos.

**4. Compressão óptica como formato de memória.** Guardar a página como pixel porque sai mais
barato em token (DeepSeek-OCR) é hoje um argumento de engenharia de um repositório. Se virar
prática, o acervo digital do mundo deixa de ser texto pesquisável e volta a ser imagem — uma
regressão de trinta anos em recuperação de informação, adotada por economia. *Sinal observável*:
um sistema de memória de agente de uso amplo documentando que armazena página renderizada.

**5. A licença que não é aberta.** Chamar de aberto um modelo cujos pesos exigem aprovação de
acesso é uma prática nova e ainda pouco contestada. *Sinal observável*: uma negativa de acesso
documentada publicamente, ou um fork que se apresente explicitamente como "o SAM sem pedido de
licença".

### Wildcards

**W1 — Rotulagem contínua do campo de visão em óculos de consumo, sem nuvem.** *Mecanismo*: um
modelo de vocabulário aberto rodando a 30 quadros por segundo no próprio óculos, com autonomia
de meio dia, rotulando tudo o que a pessoa olha. *Por que é improvável até 2031*: o SAM 3.1
entrega 32 fps numa H100; o Moondream 2 0.5B ocupa 375 MiB em int4 e roda em hardware modesto,
mas não faz rastreamento contínuo por conceito em vídeo. Falta cerca de três ordens de grandeza
em eficiência energética, e os óculos atuais têm de 4 a 9 horas de bateria fazendo muito menos.
*O que faria com o mapa*: funde R3 e R4 numa só raiz — cada pessoa vira uma câmera consultável, e
o parque de câmeras deixa de ser o objeto da política pública. *Sinal precoce*: anúncio de
detecção aberta rodando no SoC do óculos, com número de miliwatts, sem enviar quadro para
servidor.

**W2 — Um tribunal superior equipara consulta por descrição a tratamento de dado pessoal.**
*Mecanismo*: a tese existe e é simples — se a finalidade é individualizar uma pessoa, o
tratamento existe, qualquer que seja o dado de entrada; a jurisprudência brasileira de câmera
(ViaQuatro, 2018; suspensão do sistema do Metrô de SP, 2022) já decidiu no eixo do dado
biométrico e teria de dar um passo além. *Por que é improvável*: exige que alguém litigue sobre
uma consulta, e consulta não deixa rastro que dê para pedir em juízo — é preciso ganhar o log
antes de ganhar o mérito. *O que faria com o mapa*: congela R3 no Brasil e antecipa e12.1.1 em
cinco anos. *Sinal precoce*: uma ação civil pública que peça **registro de consultas**, e não
proibição de reconhecimento facial.

**W3 — Vazamento de índice com inversão de embedding.** *Mecanismo*: um acervo de *embeddings*
de fotos pessoais vaza, e se demonstra que dá para reconstruir aproximações reconhecíveis das
imagens a partir dos vetores. *Por que é improvável*: os desenhos atuais cifram (criptografia
homomórfica, relay OHTTP), e a inversão de *embedding* moderno produz, em geral, semelhança
semântica e não identidade. *O que faria com o mapa*: mata R4 pelo lado regulatório e cria, do
nada, a categoria jurídica "índice derivado de imagem", que hoje não existe em lugar nenhum — o
que, ironicamente, é o que **e15.1.1** prevê para 2033 por um caminho lento. *Sinal precoce*: um
artigo com reconstrução reconhecível a partir de vetores DINOv3 ou CLIP, avaliada por pessoas e
não por métrica.

## 7. Contra o próprio mapa

Esta seção é o relato da bateria aplicada ao mapa já pronto, e as alterações que ela produziu
estão em 7.8 — com o valor antes e o valor depois.

### 7.1 Pré-mortem — é 2031 e este mapa se mostrou errado. Por quê?

**Razão 1 — o custo não caiu, e o vocabulário aberto nunca saiu da fábrica.** O cenário mais
provável de erro: em 2031 o vocabulário aberto é uma ferramenta de laboratório e de pipeline de
rotulagem, e tudo que roda em produção continua sendo detector fechado destilado. A vigilância
por descrição existe em três cidades ricas e em nenhum lugar mais. *Atinge*: R3 inteira, e o
grau de e13. Já está representado em e4, que é a retroação de R1 — mas eu o subestimei na R3, e
por isso rebaixei e13.

**Razão 2 — a alucinação não se resolveu, e o documento sem OCR ficou barrado.** Os números do
SHROOM-Visions (nenhum sistema acima de 0,6) não melhoram o suficiente; auditores exigem o
determinístico; a leitura por modelo fica no que não é auditado, que é a minoria do volume.
*Atinge*: R2, sobretudo e6 e e7. Mantive e6 com confiança alta porque o pipeline técnico já
está trocado em quem não audita, mas rebaixei e8.

**Razão 3 — a categoria dissolve.** Em 2031 ninguém fala mais em "visão de vocabulário aberto",
do mesmo jeito que ninguém fala mais em "busca semântica": virou um recurso dentro dos modelos
generalistas, sem atores próprios, sem benchmark próprio, sem mercado próprio. O mapa descreve
uma categoria que deixou de existir enquanto os efeitos aconteciam por outro nome. *Atinge* as
quatro raízes igualmente — e é a razão mais provável das três, porque já está acontecendo: o
Qwen3-VL faz detecção aberta, OCR e agente de GUI no mesmo modelo.

### 7.2 Extrapolação linear

Três efeitos eram "mais do mesmo, maior" e tiveram de ganhar mecanismo ou perder posição:

- **e10.2** (consultar o acervo retroativamente) era só "mais vídeo guardado". Ganhou o
  mecanismo de inversão de custo (revisar deixa de custar hora humana), e ficou.
- **"Toda imagem vira dado estruturado por padrão"** era um efeito de 1ª ordem na primeira
  versão. Não tem ator e não tem mecanismo — é a tese do mapa disfarçada de efeito. **Removido**,
  e o que sobrou dele está partido entre e15 (o que de fato acontece, no acervo pessoal) e e18 (o
  que de fato não acontece, no acervo institucional). Está na seção 12.
- **e16** (o agente opera por pixel) é extrapolação do OSWorld 2.0, e 20,6% de sucesso não
  sustenta a escala descrita. Rebaixado.

### 7.3 Velocidade de adoção

Confrontei cada prazo de efeito com sinal fraco contra a classe de referência da seção 5:

- **e1**: 2026 → **2027**. A classe (SAM 1, abril de 2023 → padrão de pré-rotulagem em ~2 anos)
  não permite que a prática esteja corrente no ano seguinte ao lançamento do SAM 3, mesmo com a
  ferramenta pronta.
- **e10**: 2026 → **2027**. A classe brasileira (Carnaval 2019 → Smart Sampa setembro de 2024, ~5
  anos) puxaria para 2030; o parque instalado corta a etapa mais lenta, mas não corta tudo.
- **e2.1.1** (licenciamento ambiental) e **e3.2.1** (norma setorial): mantidos em 2031, que já é o
  limite do horizonte, porque ciclo de norma é de cinco a sete anos e o relógio começa depois do
  efeito pai.
- **e1.2.1**: 2030 → **2032**, fora do horizonte e declarado. Contrato de terceirização de
  anotação é plurianual e a cadeia tem inércia.
- **e15.1.1**: 2031 → **2033**, fora do horizonte e declarado. Categoria jurídica nova não nasce
  em cinco anos sem um caso.

### 7.4 A raiz que não acontece

- **Se R1 não acontece** (a classe continua sendo decidida no treino): caem e1 a e5 e seus
  descendentes, mas R2, R3 e R4 sobrevivem — porque documento, vídeo e acervo estão sendo
  atacados por VLM generalista, não por detector aberto. Sobra a metade do mapa.
- **Se R2 não acontece**: cai o ramo do documento e nada mais. É a raiz mais isolada, e também a
  mais próxima de estar decidida.
- **Se R3 não acontece** (a moldura biométrica se estende à consulta por descrição, via W2): cai
  e10 a e14, e **e12.1.1 se inverte** — a auditoria de consulta acontece por lei e não por
  necessidade. O mapa não fica vazio; fica com outro final.
- **Se R4 não acontece**: caem e15 a e18. Mas e16 (a tela como imagem) sobrevive por conta
  própria, porque depende de agente, não de acervo — o que é um sinal de que **e16 talvez esteja
  pendurado na raiz errada**. Considerei movê-lo para uma quinta raiz e não movi: a quinta raiz
  seria "a interface vira imagem", que é meio caminho para o tema 1 e para o tema 4. Registrado
  como escolha discutível.

Nenhuma raiz é disfarce de outra: as quatro sobrevivem sozinhas, e nenhuma delas, sozinha,
sustenta o mapa inteiro.

### 7.5 Suposições escondidas

1. **Que peso aberto continua aberto.** Se Meta e Alibaba fecharem, R1 vira "adoção precoce
   travada" e e5 cresce em importância.
2. **Que o modelo chinês continua disponível no Brasil.** e5.1.1 assume ausência de restrição
   geopolítica à importação de peso.
3. **Que GPU e energia continuam disponíveis ao preço atual.** Todo o mapa assume isso; e4, e13 e
   e18 já são o que acontece se não for.
4. **Que as plataformas continuam permitindo captura de tela.** e16.2 morre se o sistema
   operacional bloquear leitura de tela por processo não autorizado — o que é tecnicamente
   trivial e comercialmente tentador.
5. **Que a LGPD continua vigente e a ANPD continua funcional.** e11.1 e e11.1.1 dependem disso.
6. **Que a régua da disciplina ("se é comum em produto de massa, é maduro") continua separando o
   que interessa.** Se o vocabulário aberto virar recurso de massa em dois anos — o que a razão 3
   do pré-mortem descreve —, o mapa inteiro vira descrição do presente.

### 7.6 Viés do autor

Dois, nomeados.

**O primeiro é o achado.** A convergência "o objeto auditado passa a ser a consulta" é elegante,
e eu gosto dela. Efeito colateral: dei a ela três ramos convergentes e uma seção própria, quando
a evidência de dois deles (e12.1.1 e e15.2) é inferência pura, sem artefato. Se o achado
estivesse errado, o mapa não teria como perceber — nenhum efeito do mapa o contradiz. Isso é um
defeito de construção, não uma virtude.

**O segundo é o peso do Brasil.** Escolhi a vigilância brasileira como âncora de R3 porque os
dados públicos são bons e a história é vívida. Mas o maior comprador mundial de detecção por
descrição provavelmente é defesa, e o mapa não tem um efeito sequer sobre uso militar — só um
sinal fraco declarado como inferência. Essa omissão é escolha de conforto, e está registrada.

### 7.7 Calibração

Após as alterações: ordem 1 — 8 alta, 10 media, 0 baixa. Ordem 2 — 1 alta, 20 media, 5 baixa.
Ordem 3 — 0 alta, 0 media, 17 baixa. A distribuição cai com a ordem, como tem que cair. A única
confiança alta na 2ª ordem é **e6.1**, e a justificativa está na seção 5: não é previsão de
adoção, é propriedade do método.

### 7.8 Registro de alterações

A bateria derrubou coisa em todas as quatro raízes. Por `id`, com antes e depois:

- **e1**: `prazo` 2026 → 2027, porque a classe de referência (SAM 1 → padrão de pré-rotulagem,
  ~2 anos) não comporta prática corrente no ano seguinte ao lançamento.
- **e1.2.1**: `prazo` 2030 → 2032 (fora do horizonte, declarado), porque contrato de anotação
  terceirizada é plurianual.
- **"Cursos e formações de visão computacional reorganizam o currículo em torno de prompt"**:
  **removido** — é efeito genérico proibido pela própria skill, serve para qualquer tema, e eu o
  escrevi mesmo assim. Vai para a seção 12.
- **"Surge a profissão de curador de vocabulário visual"**: **removido** pelo mesmo motivo. O que
  sobrou de útil dele está dentro de e3.1, com ator nomeado (o inspetor de fábrica) e mecanismo.
- **e8**: `sinal` medio → fraco e `confianca` alta → media, porque a base é um repositório e uma
  tese de engenharia, não uma prática observada.
- **e6.2.1**: reescrito. Antes era "a profissão de digitação desaparece" — genérico e sem
  mecanismo. Agora nomeia o cargo, o setor (BPO documental brasileiro) e o mecanismo (a métrica
  de exceção dimensiona a equipe).
- **"O PDF morre"**: **removido** como efeito de 1ª ordem — extrapolação linear sem mecanismo.
  Reescrito como **e7.1.1** (o PDF perde a função de entrega e fica em arquivamento e
  assinatura), na 3ª ordem, com confiança baixa.
- **e10**: `prazo` 2026 → 2027, pela classe de referência brasileira.
- **e13**: `confianca` alta → media, porque o mecanismo é inferência sobre estrutura de custo, e
  a razão 1 do pré-mortem ataca exatamente este ponto.
- **"Reguladores criam uma categoria nova de vigilância semântica"**: **removido** — genérico e
  proibido; substituído por **e11.1** e **e11.1.1**, que nomeiam o ator (ANPD), o objeto (registro
  de consultas) e o mecanismo (não há instrumento para isso).
- **e16**: `confianca` alta → media, porque 20,6% de sucesso no OSWorld 2.0 não sustenta a escala
  descrita.
- **e15.1.1**: `prazo` 2031 → 2033 (fora do horizonte, declarado).
- **"Toda imagem vira dado estruturado por padrão"**: **removido** como efeito de 1ª ordem — é a
  tese do mapa, não um efeito; partido entre e15 e e18.

Cinco efeitos removidos, sete rebaixados ou adiados, um reescrito. A bateria derrubou pelo menos
um por raiz.

## 8. O que a máquina errou

Sou eu a máquina. Sete itens específicos desta rodada, com o motivo da desconfiança.

1. **Datei o SAM 3 em 2026 na primeira passada.** O lançamento é de **19/11/2025**; o que é de
   2026 é o **SAM 3.1** (27/03/2026). Percebi ao abrir o blog do Meta e ver duas datas para o que
   eu tratava como um artefato só. É o erro típico de quem monta cronologia a partir de resultado
   de busca, onde tudo parece recente.
2. **Quase somei recortes diferentes do Smart Sampa.** O Relatório de Transparência da Prefeitura
   conta **82 conduzidos, 23 por reconhecimento facial**, em seis meses (21/11/2024 a 21/05/2025);
   o levantamento do Núcleo conta **211 conduzidos, 59 por reconhecimento facial**, em doze meses
   (21/11/2024 a 22/11/2025). São janelas diferentes da mesma série, e eu ia apresentá-las como
   duas medições do mesmo período. Mantive as duas, com as datas explícitas.
3. **Os dois números de latência do SAM 3 não se reconciliam, e eu não sei qual vale.** A mesma
   página da Ultralytics traz **30 ms por imagem com mais de 100 objetos numa H200** e **2.921 ms
   por imagem numa RTX PRO 6000**. São medições de coisas diferentes — provavelmente modelo puro
   contra pipeline completo — e eu não achei a definição de nenhuma das duas. Citei ambas
   declarando o problema, em vez de escolher a que favorecia o argumento.
4. **O tamanho do mercado de inspeção visual (US$ 32,66 bi → US$ 40 bi, 22,88% ao ano) veio de
   página de conteúdo comercial**, o IIoT World, que não cita o relatório de origem. Os números
   de acurácia da mesma página (99,2% da máquina, 87% do humano caindo para 70% após quatro
   horas) têm cara de material de venda. Usei só o que era estrutural para o argumento — o salto
   de 65,0% para 85,1% em zero-shot — e marquei a fonte como média-baixa.
5. **"GPT-6 Astra virou o modelo padrão de auto-rotulagem do Roboflow em setembro de 2026"
   apareceu num resultado de busca e eu não consegui confirmar.** O post do Roboflow que abri
   (12/03/2026) fala de Florence-2 e RF-DETR, não de Astra. Não usei a informação no corpo do
   mapa; se ela estiver certa, reforça e1 — e o fato de eu não conseguir confirmá-la é o motivo
   de e1 ter ficado em 2027 e não em 2026.
6. **O número de óculos vendidos (2 milhões somando 2023 e 2024 → mais de 7 milhões em 2025) está
   na prosa da seção 5 como classe de referência, e a reportagem da CNBC não abriu** (HTTP 403).
   Não entrou na seção 11 e não deveria sustentar nada sozinho; sustenta apenas a ordem de
   grandeza do crescimento em e17.
7. **Não consegui extrair os resultados do artigo sobre transferência para imagem aérea**
   (arXiv 2601.22164): o PDF abriu, os fluxos comprimidos não. Cito o artigo pela existência da
   pergunta, não por nenhum número — e isso é uma citação mais fraca do que parece na lista de
   fontes.

Um oitavo, de natureza diferente: **a licença do SAM 3 ("os pesos exigem aprovação de acesso")
eu tirei da documentação da Ultralytics, não do card oficial do modelo.** É a base de e5, que é
um efeito de 1ª ordem inteiro. Deveria ter aberto a fonte primária.

## 9. Três cenários para 2031

**Provável.** Em 2031 ninguém chama isso de "vocabulário aberto" — virou o jeito normal de
pedir qualquer coisa a um modelo, e detectar por frase é um parâmetro, não um produto. O
trabalho de visão se organizou em duas camadas: modelo grande escreve os rótulos, modelo pequeno
roda na borda, e a competência valorizada é destilar e testar. O documento sem OCR ganhou o
mundo não-auditado — cadastro, atendimento, triagem — e perdeu o auditado, onde convivem duas
leituras e o custo subiu. Nas cidades, a busca por descrição em vídeo é recurso padrão do
sistema de câmeras, comprada por assinatura, e ninguém registra as consultas porque nenhuma lei
manda. O debate público continua girando em torno de reconhecimento facial, que é o que a lei
nomeia, enquanto a maior parte da seleção de pessoas já acontece por descrição. *Sinal precoce
de que estamos aqui*: um edital municipal brasileiro que compre "busca semântica em vídeo" sem
mencionar biometria — e passe sem controvérsia.

**Desejável.** Em 2031 o registro de consulta é obrigatório e auditável, do mesmo jeito que o
log de acesso a prontuário é hoje: quem perguntou, o que perguntou, com que finalidade, e por
quanto tempo o resultado fica guardado. Não foi conquistado por proibição, e sim porque a
exigência veio primeiro do lado comercial — a "prova de leitura" de e9.1, que nasceu da
necessidade de auditar documento, virou padrão técnico e depois se estendeu à consulta de vídeo.
O efeito colateral bom: o mesmo mecanismo que prova de onde a máquina leu um número prova quem
pediu para a máquina procurar uma pessoa. Para chegar aqui teria sido preciso que alguém — ANPD,
tribunal de contas, um comprador público grande — exigisse o log **antes** do escândalo, e não
depois. *Sinal precoce*: um contrato público que especifique retenção e auditoria de consultas
como cláusula técnica, não como promessa de conduta.

**Indesejável.** Em 2031 a seleção por aparência é rotina e invisível. O sistema não identifica
ninguém — é só um filtro — e por isso não há dado biométrico, não há banco, não há relatório de
impacto e não há vítima com nome para processar. Os erros existem na mesma proporção de sempre,
mas deixaram de ser contáveis: quem foi filtrado e não abordado nunca soube, e quem foi abordado
não tem como saber por qual frase. Os R$ 5 mil de dano moral que duas pessoas ganharam em 2026
foram o último caso em que houve um dano que se pudesse apontar. *Sinal precoce*: uma central de
monitoramento divulgando resultado por "alertas gerados" e recusando informar quantas consultas
foram feitas, alegando segredo operacional.

## 10. O experimento

**O que é.** *O vocabulário que acusa*. Uma página só, com um vídeo de espaço público de uns dois
minutos — gravado no CIn, com aviso e consentimento de quem aparece — e uma caixa de texto. Cada
pessoa da turma escreve uma frase de busca. O sistema roda detecção por vocabulário aberto sobre
o vídeo e devolve, lado a lado: quantas pessoas a frase selecionou, quais, e o mesmo resultado
para as frases dos colegas. Três painéis fixos comparam frases deliberadamente próximas —
"pessoa com mochila" / "pessoa com mochila preta" / "pessoa suspeita" — e um painel mostra o que
acontece quando a mesma frase roda duas vezes, ou em dois modelos diferentes (SAM 3 via
Playground, Moondream local, YOLOE-26).

**Que pergunta sobre o futuro ele ajuda a responder.** A pergunta de R3, que é a mais decisiva
do mapa: *o que acontece com a vigilância quando o alvo é definido por frase e não por
cadastro?* Em particular, as três subperguntas que decidem entre o cenário desejável e o
indesejável — uma frase subjetiva seleciona quem? seleciona de forma estável? e quem olha o
resultado consegue dizer por que aquela pessoa entrou?

**Que tecnologia emergente usa, e por que não dá com a madura.** Usa detecção e segmentação por
vocabulário aberto com saída localizada. Não dá para fazer com detector de classe fixa pela
razão mais simples possível: **não existe a classe "pessoa suspeita"**. Um YOLO treinado em COCO
responde "pessoa" a todas, e o experimento perde o objeto. É justamente a capacidade de aceitar
qualquer frase — inclusive uma frase que não descreve nada de objetivo — que se quer examinar.

**O que a turma faz ao testar em sala.** Cada um escreve três frases: uma objetiva, uma
ambígua, uma que descreva um julgamento. Roda. Anota quantas pessoas foram selecionadas e
quantas vezes o resultado mudou entre execuções. Depois, de olhos no resultado do colega, tenta
adivinhar qual frase produziu aquele conjunto — é esse o momento que costuma virar a discussão,
porque o conjunto quase nunca deixa ver a frase. Fecha com uma medida simples no quadro:
concordância entre execuções, por tipo de frase.

**O que seria um resultado que me faria mudar de ideia.** Se as frases subjetivas produzirem
seleção **instável** — conjuntos diferentes a cada execução, baixa concordância entre modelos,
sem padrão discernível —, então o risco que este mapa descreve está errado de alvo: não seria
discriminação sistemática por descrição, seria ruído, e ruído não sustenta um programa de
vigilância porque não sobrevive a uma auditoria trivial. Nesse caso R3 perde a força e e12
precisa ser reescrito — o perfilamento por aparência não substitui o perfilamento por
identidade, porque não funciona bem o bastante. O contrário também vale: se as frases subjetivas
produzirem conjuntos **estáveis e enviesados de forma consistente**, então a parte mais
incômoda do mapa está confirmada com evidência feita em sala, por quinze pessoas, numa tarde.

## 11. Fontes

Vinte e oito fontes abertas e lidas em 11/09/2026. Nenhuma citada de memória. O que não abriu
está declarado nas seções 8 e 12, e não entra nesta lista.

1. `https://ai.meta.com/research/publications/sam-3-segment-anything-with-concepts/` — página da
   publicação do SAM 3 no Meta AI Research. Sustenta a data (19/11/2025), a autoria (Meta AI
   Research, Nicolas Carion, Laura Gustafson, Yuan-Ting Hu e mais de 30 pesquisadores), a
   definição de *promptable concept segmentation*, o ganho de 2× e os 4 milhões de rótulos de
   conceito. **Confiabilidade: alta** — fonte primária, mas é o laboratório falando do próprio
   trabalho.
2. `https://arxiv.org/abs/2511.16719` — o artigo do SAM 3. Sustenta o resumo integral, a
   arquitetura (detector de imagem + rastreador com memória, tronco compartilhado, *presence
   head*), a submissão em 20/11/2025 e a revisão em 28/03/2026. **Confiabilidade: alta** —
   preprint com código e pesos abertos.
3. `https://docs.ultralytics.com/models/sam-3/` — documentação da Ultralytics. Sustenta **todos
   os números comparativos** que uso: 65,0 de cgF1 contra 34,3 do OWLv2, 47,0 de máscara AP em
   LVIS contra 38,5, 88% do limite inferior humano (65,0 contra 74,2), 214 mil frases em 126 mil
   imagens, 30 ms com 100+ objetos na H200, 2.921 ms na RTX PRO 6000, e a exigência de aprovação
   de acesso aos pesos. **Confiabilidade: média-alta** — terceiro reproduzindo o artigo; os dois
   números de latência não são reconciliáveis pela página (seção 8, item 3).
4. `https://ai.meta.com/blog/segment-anything-model-3/` — anúncio do SAM 3.1 (27/03/2026).
   Sustenta a multiplexação de até 16 objetos por passagem, o salto de 16 para 32 fps numa H100,
   os 30 ms na H200, e a lista de produtos (Edits, Meta AI, Vibes, Marketplace).
   **Confiabilidade: alta** para os fatos técnicos; é anúncio, então os prazos de produto são
   intenção.
5. `https://about.fb.com/news/2025/11/new-sam-models-detect-objects-create-3d-reconstructions/` —
   anúncio institucional de 19/11/2025. Sustenta os casos de uso nomeados (Edits, View in Room
   no Marketplace), a abertura dos pesos e do benchmark, e a parceria com a Roboflow para ajuste
   fino. **Confiabilidade: alta** para o que a empresa afirma fazer; sem números.
6. `https://ai.meta.com/blog/segment-anything-conservation-x-wildlife-monitoring/` — SA-FARI
   (24/11/2025). Sustenta os 10 mil+ vídeos, 100+ espécies, caixa e máscara por quadro com
   identidade preservada, e a frase de Alex Dehgan sobre automatizar a descrição do
   comportamento animal. **Confiabilidade: alta** — anúncio conjunto com a organização parceira.
7. `https://ai.meta.com/dinov3/` — página do DINOv3. Sustenta 1,7 bilhão de imagens, modelos de
   7B de parâmetros, e a afirmação de que pela primeira vez auto-supervisão supera supervisão
   fraca numa faixa ampla de tarefas de sondagem. **Confiabilidade: alta** para o que afirma;
   não traz data nem licença na página, o que registro.
8. `https://github.com/QwenLM/Qwen3-VL` — repositório oficial. Sustenta as datas por variante
   (23/09/2025 a 27/11/2025), a licença Apache-2.0, o OCR em 32 idiomas, o *grounding* 2D por
   coordenada relativa e as capacidades de agente de GUI. **Confiabilidade: alta** — primária; os
   números de benchmark estão em imagem e não pude lê-los.
9. `https://moondream.ai/models` — catálogo de modelos Moondream. Sustenta o Moondream 3 (9B
   totais, 2B ativos, 32K de contexto, apontar/detectar/segmentar/OCR) e o Moondream 2 0.5B com
   375 MiB em int4. **Confiabilidade: média-alta** — página de produto, números de desempenho são
   alegação do fornecedor.
10. `https://pyimagesearch.com/2026/08/24/yolo26-open-vocabulary-object-detection-with-yoloe-26/`
    — YOLOE-26 (24/08/2026). Sustenta os 40,6 AP por texto, 38,5 visual e 31,1 sem prompt em LVIS
    minival, e a reparametrização de volta ao caminho YOLO "sem custo extra de inferência".
    **Confiabilidade: média-alta** — publicação técnica de terceiro, reproduzindo documentação.
11. `https://blog.roboflow.com/zero-shot-auto-labeling-with-vlms/` — rotulagem automática
    (12/03/2026). Sustenta o fluxo Florence-2 → RF-DETR, a frase "de uma semana de rotulagem para
    minutos" e o enquadramento de "primeiro passe" com revisão humana. **Confiabilidade: média** —
    é fornecedor descrevendo o próprio produto; não traz número de acurácia nem de custo.
12. `https://github.com/deepseek-ai/DeepSeek-OCR` — repositório. Sustenta a data (20/10/2025), a
    licença MIT, a tese de compressão óptica de contexto, ~2.500 tokens/s numa A100-40G e o
    anúncio do DeepSeek-OCR 2 em 27/01/2026. **Confiabilidade: alta** — primária; as taxas de
    compressão específicas não estavam no conteúdo que li.
13. `https://arxiv.org/abs/2510.09586` — levantamento de 26.104 artigos de CVPR, ICLR e NeurIPS
    (2023–2025). Sustenta a virada de percepção clássica para VLM e raciocínio multimodal.
    **Confiabilidade: alta** para a tendência; **não** sustenta contagem de artigos de
    *open-vocabulary*, que é o que eu queria e não achei.
14. `https://arxiv.org/html/2608.25662v1` — SHROOM-Visions 2026. Sustenta as 27 equipes, 600+
    submissões, quatro idiomas, as cinco categorias de alucinação, e os melhores resultados
    (0,58 de correlação em caractere, 0,51 de IoU, maioria abaixo de 0,4, nenhum acima de 0,6).
    **Confiabilidade: alta** — relatório de tarefa compartilhada, com ressalva explícita dos
    próprios autores sobre incerteza de ranqueamento.
15. `https://arxiv.org/html/2606.29537v1` — OSWorld 2.0 (28/06/2026). Sustenta as 108 tarefas, a
    observação exclusivamente por captura de tela, o orçamento de 500 passos, os 20,6% do melhor
    modelo com 54,8% parcial, e a mediana humana de ~1,6 hora por tarefa. **Confiabilidade: alta**
    — benchmark acadêmico com metodologia descrita.
16. `https://arxiv.org/pdf/2601.22164` — "Do Open-Vocabulary Detectors Transfer to Aerial
    Imagery?", Christos Tsourveloudis, 02/02/2026. Sustenta **apenas** a existência da pergunta e
    da linha de avaliação em imagem aérea. **Confiabilidade: alta** como artigo, **baixa como
    citação minha** — não consegui extrair os números (seção 8, item 7).
17. `https://blogs.nvidia.com/blog/ai-blueprint-video-search-and-summarization/` — *blueprint* VSS
    (18/05/2025). Sustenta o resumo 100× mais rápido que assistir, o caso da Linker Vision em
    Kaohsiung (30 mil câmeras → mais de 50 mil em 2026, redução de até 80% no tempo de resposta) e
    a lista de adotantes. **Confiabilidade: média-alta** — fornecedor, e os números do cliente são
    relatados por ele.
18. `https://www.iiot-world.com/smart-manufacturing/ai-vision-quality-manufacturing-2026/` —
    inspeção visual por IA (24/08/2026). Sustenta o salto de 65,0% para 85,1% em adaptação
    zero-shot, os 58% de implantações totalmente na borda, e os nomes (Cognex OneVision, Keyence
    IV3, YOLO-World, LandingLens). **Confiabilidade: média-baixa** — conteúdo comercial sem citar
    os estudos de origem; usei só o que é estrutural ao argumento (seção 8, item 4).
19. `https://support.apple.com/en-ae/122033` — Enhanced Visual Search. Sustenta o modelo local
    que gera *embedding*, a criptografia homomórfica, a privacidade diferencial, o relay OHTTP e
    a disponibilidade a partir do iOS 18, iPadOS 18 e macOS Sequoia. **Confiabilidade: alta** —
    documentação do fabricante; não diz se vem ligado por padrão, o que registro.
20. `https://www.meta.com/ai-glasses/blind-visually-impaired/` — acessibilidade nos óculos Meta.
    Sustenta a descrição do ambiente, o modo de respostas detalhadas, a integração do Be My Eyes
    por voz e os 21 mercados. **Confiabilidade: média-alta** — página de produto, sem datas de
    lançamento por país.
21. `https://artificialintelligenceact.eu/article/5/` — Artigo 5º do AI Act. Sustenta as quatro
    proibições visuais e a aplicabilidade desde 02/02/2025, com a redação literal.
    **Confiabilidade: alta** — texto legal reproduzido; é compilação não oficial, e o Jornal
    Oficial é a fonte última.
22. `https://www.dataprivacybr.org/camara-pode-votar-a-qualquer-momento-projeto-que-transforma-o-brasil-em-estado-de-vigilancia-facial/`
    — sobre o PL 1828/2023 (17/06/2026). Sustenta a autoria (dep. Rodrigo Gambale), o escopo
    (metrô, terminais, ônibus, vias, repartições), a aprovação na Comissão de Segurança Pública e
    a ida ao plenário. **Confiabilidade: média-alta** — organização de advocacy, parte
    interessada, mas os fatos processuais são verificáveis.
23. `https://desinformante.com.br/votacao-do-marco-da-ia-fica-para-2026-em-meio-a-impasses-politicos-e-criticas-ao-texto`
    — PL 2338 (19/12/2025). Sustenta o adiamento para 2026 e a crítica da Coalizão Direitos na
    Rede sobre o afrouxamento por exceções. **Confiabilidade: média-alta** — jornalismo
    especializado com posição declarada.
24. `https://nucleo.jor.br/reportagem/2026/08/21/vitimas-de-falhas-do-smart-sampa-buscam-indenizacao-na-justica/`
    — 21/08/2026. Sustenta as 211 conduções entre 21/11/2024 e 22/11/2025 (141 por mandado, 59 por
    inconsistência facial), os 4 processos com sentença, as duas indenizações de R$ 5 mil, e que
    três das quatro vítimas são negras. **Confiabilidade: alta** — jornalismo de dados com fonte
    documental (LAI) declarada.
25. `https://www.brasildefato.com.br/2026/02/04/smart-sampa-mais-de-80-pessoas-foram-levadas-para-delegacias-por-inconsistencia-do-reconhecimento-facial/`
    — 04/02/2026. Sustenta o recorte de seis meses (1.246 abordadas, 82 conduzidas, 23 por
    reconhecimento facial) e a nota técnica de Lapin, Instituto Peregum e Rede Liberdade.
    **Confiabilidade: média-alta** — veículo com linha editorial marcada, mas os números vêm de
    documento citado.
26. `https://prefeitura.sp.gov.br/web/seguranca_urbana/w/relat%C3%B3rio-de-transpar%C3%AAncia-do-smart-sampa-comprova-efic%C3%A1cia-do-sistema-de-reconhecimento-facial`
    — posição oficial. Sustenta 1.153 foragidos presos, 31.323 câmeras integradas, 99,5% de
    assertividade, 68 desaparecidos localizados, 275 casos apoiados, e a frase do prefeito.
    **Confiabilidade: alta como declaração oficial, baixa como avaliação independente** — é a
    parte interessada avaliando a própria política.
27. `https://www.band.com.br/radio-bandeirantes/noticias/smart-sampa-atinge-3-mil-foragidos-presos-com-cameras-inteligentes-202604141155`
    — 14/04/2026. Sustenta os 3 mil foragidos presos no total, 418 em 2026, 50 mil câmeras (20 mil
    com reconhecimento facial, 30 mil privadas integradas) e o início em setembro de 2024.
    **Confiabilidade: média** — jornalismo reproduzindo números da prefeitura, sem verificação
    independente.
28. `https://revistasegurancaeletronica.com.br/reconhecimento-facial-do-smart-sampa-nao-reduziu-criminalidade-na-cidade-de-sp-diz-estudo/`
    — 04/08/2025. Sustenta o estudo do CESeC (coordenação de Thallita Lima), o método de
    diferença-em-diferenças, os resultados nulos sobre furto, homicídio, assalto e prisões, e a
    resposta da prefeitura. **Confiabilidade: média** — veículo do setor reproduzindo o estudo; o
    relatório original do CESeC não foi aberto nesta rodada.

## 12. Anexo — o levantamento bruto

### 12.1 O briefing, e o que ele não cobria

A rodada foi não interativa, com `briefing:` completo: modo MAPA, tema 11 de 19 (família
"Percepção e mídia sintética"), horizonte 2031, público "quem projeta mídia e interação",
recorte global com nota sobre o Brasil, descartado de início "o que já é comum em produto de
massa" (a régua da disciplina), nenhuma disrupção-raiz suspeita, viés neutro, busca na web
ligada, autor `grec`, zona de interesse "Percepção e mídia sintética". Como o briefing é
completo, **não houve rebaixamento de confiança por ausência de entrevista** — a regra do §0 da
skill só rebaixa quando não há entrevista **nem** briefing.

**O que o briefing não cobria, e eu assumi:**

1. **Profundidade em três ordens** estava no pedido; **o número de raízes não**. Assumi quatro,
   que é o teto da faixa recomendada, porque o tema tem quatro deslocamentos com atores
   distintos. Com três, R4 teria sido absorvida por R3 e o efeito sobre interface (e16)
   desapareceria.
2. **A fronteira com os temas vizinhos.** O enunciado diz que 3D é o tema 10 e robô é o tema 9,
   mas não diz o que fazer com artefatos que atravessam — o SAM 3D saiu no mesmo anúncio do SAM
   3. Assumi exclusão estrita: cito o anúncio, não uso o modelo.
3. **O que conta como "comum em produto de massa".** Assumi a régua aplicada a **função**, não a
   **produto**: reconhecimento facial é maduro mesmo que a maioria das pessoas nunca tenha
   usado, porque está instalado em escala municipal e regulado.
4. **Uso militar.** O briefing não excluiu e não incluiu; entrou como sinal fraco declarado como
   inferência, e a omissão está nomeada em 7.6 como viés.

### 12.2 Efeitos cortados na bateria do §6

Cinco removidos, com o motivo:

- **"Cursos e formações de visão computacional reorganizam o currículo em torno de prompt."**
  Genérico — a própria skill lista "cursos reorganizam o currículo" entre os efeitos proibidos
  sem ator e mecanismo. Serve para qualquer um dos 19 temas. Cortado sem substituto.
- **"Surge a profissão de curador de vocabulário visual."** Mesmo motivo ("surge uma nova
  profissão"). O que havia de aproveitável virou e3.1, com ator nomeado (o inspetor de fábrica
  que passa a escrever o texto do defeito) e mecanismo.
- **"O PDF morre."** Extrapolação linear sem mecanismo, e provavelmente falsa: formatos de
  arquivo não morrem, perdem funções. Reescrito como e7.1.1 na 3ª ordem.
- **"Reguladores criam uma categoria nova de vigilância semântica."** Genérico e proibido.
  Substituído por e11.1 e e11.1.1, que nomeiam ANPD, objeto (registro de consultas) e mecanismo
  (a agência não tem instrumento para fiscalizar consulta).
- **"Toda imagem vira dado estruturado por padrão."** É a tese do mapa escrita como se fosse
  efeito — sem ator, sem prazo defensável. Partido entre e15 (acontece no acervo pessoal) e e18
  (não acontece no institucional), que são contraditórios entre si de propósito.

Dois efeitos que **quase** entraram e não passaram no teste da causa solta (§3, regra 10):

- *"Acervos de imagem de jornal viram produto de dado licenciado para treino."* Aconteceria do
  mesmo jeito sem vocabulário aberto, por pressão de licenciamento para treino de modelo
  generativo. Não deriva desta raiz.
- *"Museus digitalizam mais."* Idem: a digitalização é dirigida por política cultural e
  financiamento, não por poder de consulta.

### 12.3 Rebaixamentos, na íntegra

Estão em 7.8, com `id`, antes e depois. Resumo numérico para conferência: **2 prazos de 1ª ordem
adiados** (e1 e e10, ambos 2026 → 2027); **3 confianças de 1ª ordem rebaixadas** (e8, e13 e e16,
todas alta → media), uma delas também no sinal (e8, medio → fraco); **2 prazos de 3ª ordem
empurrados para fora do horizonte** (e1.2.1, 2030 → 2032; e15.1.1, 2031 → 2033); **1 efeito de 3ª
ordem reescrito** (e6.2.1); **5 efeitos removidos** (listados em 12.2).

### 12.4 Buscas que não deram em nada, e fontes que não abriram

**Não deram em nada:**

- *Contagem de artigos de open-vocabulary por ano no arXiv.* O levantamento de 26 mil artigos
  (arXiv 2510.09586) mede a virada para VLM, não este recorte. **Sem número encontrado** — e a
  ausência importa, porque era o indicador mais limpo de "por que agora".
- *Encolhimento do mercado de anotação manual.* Buscas em inglês sobre declínio do setor
  devolveram só comparativos de ferramenta (Labelbox × Scale AI × Roboflow × V7) e uma
  estimativa de redução de custo de 40–60% com automação, sem fonte primária. Não usei.
- *Postos de digitação e conferência fechados no Brasil.* O CAGED de 2025 (1.279.498 postos
  criados, queda de 23,73% ante 2024) não desce ao nível de ocupação que eu precisava. **Sem
  número encontrado**; e6.2.1 ficou sem denominador e por isso com confiança baixa.
- *Contrato de defesa especificando detecção por vocabulário aberto.* Achei contrato de
  contra-drone de US$ 500 milhões com visão computacional genérica (Perennial Autonomy,
  maio/2026), que não é a mesma coisa. Virou sinal fraco declarado como inferência, não fonte.

**Abriram no navegador do modelo e recusaram a leitura automatizada (HTTP 403), por isso fora da
seção 11:** a reportagem da CNBC sobre vendas de óculos da EssilorLuxottica (11/02/2026); a
página do Idec sobre a condenação da ViaQuatro; o caso do Metrô de São Paulo na Global Freedom
of Expression da Columbia; o PDF do SAM3Count no CVPR Workshops 2026; e a página de notícias do
Be My Eyes sobre a parceria com o Meta (11/03/2026, CSUN). O que eu tirei delas aparece no texto
**declarado como não verificado** (o crescimento de vendas de óculos, na seção 5 e na seção 8,
item 6) ou foi substituído por fonte equivalente que abriu (a acessibilidade nos óculos, pela
página do próprio Meta; a jurisprudência da ViaQuatro e do Metrô, mencionada apenas como
precedente conhecido, sem número).

### 12.5 Caminhos abandonados

- **Uma quinta raiz, "a interface vira imagem".** Teria recebido e16 e e16.1/e16.2, e faz sentido
  por conta própria: agente que opera por pixel não depende de acervo nem de câmera. Não entrou
  porque atravessa o tema 1 (programação agêntica) e o tema 4 (internet agêntica), e porque
  quatro raízes já é o teto. Registrado em 7.4 como escolha discutível.
- **Tratar SAM 3 como raiz.** Seria raiz-produto, que é anti-padrão explícito da skill ("o
  ChatGPT" em vez de "modelos que rodam no dispositivo"). A raiz é o deslocamento — a classe
  decidida na pergunta —, não o modelo que a materializou primeiro.
- **Um ramo sobre geração a partir de segmentação** (Grounded-SAM detecta, segmenta e gera).
  Abandonado: a geração é outro tema, e o efeito interessante — remover pessoa de vídeo por
  frase — já está implícito no Playground do Meta, que traz modelo pronto de pixelar rosto,
  placa e tela.
- **Um ramo sobre esporte e mídia** (rastrear jogador por descrição, o caso NHL citado pela
  NVIDIA). Abandonado por falta de fonte que fosse além de menção em blog de fornecedor.
- **Quantificar o custo de inferência por câmera-hora.** Tentei e desisti: não há preço público
  de H100/H200-hora que seja comparável entre nuvens, e chutar o número faria o mapa parecer
  mais preciso do que é. O efeito (e13) ficou qualitativo, com confiança media.

### 12.6 Os artefatos da turma, e o que fiz com cada um

O enunciado do tema lista o que a varredura da turma trouxe. Nem tudo entrou; o que não entrou,
e por quê:

| Artefato | Entrou? | Onde / por que não |
|---|---|---|
| `segment-anything`, `sam2` | como contexto | recusados como raiz em 4.0 — segmentar por clique é melhoria sustentadora |
| `SAM 3` | sim | base de R1 e R3 |
| `Grounded-Segment-Anything` | parcial | citado; o ramo de geração foi abandonado (12.5) |
| `dinov2` / DINOv3 | sim | base de R4 — indexar acervo sem taxonomia prévia |
| `rf-detr` | sim | a segunda camada de e4.1 |
| `YOLOX` | não | detector fechado, maduro; substituído pelo YOLOE-26, que é o mesmo lugar da pilha com a capacidade nova |
| `supervision` | não | biblioteca de utilidade, sem efeito próprio |
| `LAVIS` | não | ferramenta de pesquisa, sem sinal de adoção em produto |
| `PaddleOCR`, `EasyOCR` | como contexto | recusados em 4.0 — OCR tradicional é maduro |
| `LaTeX-OCR` | não | caso de uso estreito; nenhum efeito derivado sobrevive ao teste de especificidade |
| `donut` | sim | origem da linhagem de R2 |
| `insightface`, `face-alignment` | como contexto | reconhecimento facial recusado como raiz em 4.0 |
| `SlowFast` | não | compreensão de vídeo por classe fixa; maduro |
| `Skyvern` | parcial | citado na conversa de R4; o efeito está em e16.2, ancorado no OSWorld 2.0, que tem número |
| `cvat`, `label-studio` | sim | e1.2 — as ferramentas que a disrupção desloca |
| `react-visual-annotator`, `ml-classifier` | não | artefatos de demonstração; sem sinal de adoção |
| `llama.cpp-ts` | parcial | a tese (visão local sem servidor) está em e4.1 e no Moondream, que tem números publicados |
| `ORTHOS` | sim | sinal fraco 2, com o gancho do Artigo 5º(1)(f) do AI Act |

### 12.7 Termos e entidades da varredura

**Termos buscados, em inglês e português:** open-vocabulary segmentation; open-vocabulary
detection; vision foundation model; SAM 3; SAM 3.1; DINOv3; vision-language model; OCR-free
document understanding; visual grounding; zero-shot vision; zero-shot anomaly detection;
open-vocabulary counting; object hallucination VLM; computer-use agents screenshots; auto-label
zero-shot; reconhecimento facial Smart Sampa; PL 2338 biometria; PL 1828 câmeras; AI Act
biometric prohibition; Enhanced Visual Search; Ask Photos; smart glasses sales; Be My Eyes
óculos; BPO documental digitação Brasil; CAGED digitador escriturário; open-vocabulary aerial
imagery defense.

**Entidades:** Meta FAIR / Superintelligence Labs, Alibaba Qwen, DeepSeek, IDEA Research,
Roboflow, Ultralytics, Moondream, NVIDIA, Linker Vision, Cognex, Keyence, LandingAI, Conservation
X Labs, Apple, Google, Prefeitura de São Paulo, CESeC, Núcleo Jornalismo, Lapin, Instituto
Peregum, Rede Liberdade, Idec, Data Privacy Brasil, Coalizão Direitos na Rede, ANPD, Comissão
Europeia.

### 12.8 Saída do verificador

Rodado em 11/09/2026 com `--links`, colado abaixo na íntegra, com os números:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 18 (frontmatter diz 18)
efeitos ordem 2: 26 (frontmatter diz 26)
efeitos ordem 3: 17 (frontmatter diz 17)
prazo > horizonte (2031) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 2 [('e1.2.1', 2032), ('e15.1.1', 2033)]
confiança ordem 1: alta 8 · media 10 · baixa 0
confiança ordem 2: alta 1 · media 20 · baixa 5
confiança ordem 3: alta 0 · media 0 · baixa 17
links da seção 11: 28/28 respondem (frontmatter diz fontes: 28)
RESULTADO: ok
```
