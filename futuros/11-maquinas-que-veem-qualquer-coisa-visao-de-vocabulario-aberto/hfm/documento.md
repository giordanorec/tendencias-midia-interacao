---
tema: "Máquinas que veem qualquer coisa: visão de vocabulário aberto"
slug: maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto
autor_login: hfm
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 11
efeitos_ordem_3: 11
tecnologias_citadas:
  - SAM 3
  - SAM 3.1
  - SAM 2
  - SA-Co
  - DINOv3
  - DINOv2
  - OpenWorldSAM
  - PicoSAM3
  - PicoSAM2
  - Sony IMX500
  - Qwen3-VL
  - Qwen2.5-VL
  - Donut
  - Grounding DINO
  - PaliGemma
  - CLIP
  - LVIS
  - MOSEv2
  - Ray-Ban Meta
  - Meta Ray-Ban Display
  - Oakley Meta
  - Meta Aria
  - Be My Eyes
  - Smart Sampa
  - CVAT
  - Label Studio
fontes: 18
confianca: media
experimento: "Caçador de conceitos — buscador de vocabulário aberto sobre o acervo de imagens da própria turma, com registro do que cada frase recupera"
skill_usada: futurizacao-hfm
publico_ok: false
---

## 1. Resumo

Por décadas um sistema de visão só enxergava o que tinha sido treinado para enxergar: alguém
definia as classes, alguém anotava os exemplos, e o modelo ficava preso a esse vocabulário. Em
novembro de 2025 o SAM 3 tornou pública a inversão — segmentar e detectar **todas as instâncias
de um conceito descrito em texto**, dobrando a acurácia dos sistemas anteriores no benchmark
SA-Co e subindo o LVIS zero-shot de 38,5 para 47,0 de AP de máscara. Ao lado disso, modelos
visão-linguagem de peso aberto passaram a **compreender documento sem OCR**, tratando a página
como objeto visual e devolvendo estrutura em uma passada. Este mapa parte de três rupturas —
vocabulário aberto, documento-como-imagem e percepção descendo para o sensor — e deriva efeitos
até 2031. A cadeia mais consequente não é a de produtividade: é a de que **a busca por descrição
contorna a categoria jurídica pela qual se regula a vigilância**. A lei europeia proíbe
identificação biométrica remota e raspagem de rostos; nenhuma delas cobre "encontre uma pessoa
de jaqueta vermelha carregando uma sacola listrada", que não é biometria e funciona sem banco de
rostos. A confiança do mapa é média: as capacidades estão documentadas, a velocidade de adoção
no dispositivo não está.

## 2. O tema

**Visão de vocabulário aberto** é a capacidade de um sistema de visão computacional localizar,
segmentar ou descrever aquilo que é pedido em linguagem, sem que a categoria tenha sido definida
antes do treino. Tecnicamente, é o encontro de três linhagens: modelos fundacionais de visão que
aprendem representação densa sem rótulo (DINOv2, DINOv3), segmentadores promptáveis (a família
SAM) e o alinhamento visão-linguagem que deixa uma frase virar consulta espacial (CLIP, Grounding
DINO, e agora a interface de conceitos do SAM 3).

Onde isso encosta em mídia e interação: em três lugares, todos de projeto.

**Primeiro, a interface.** Quando o vocabulário é aberto, a caixa de texto vira o instrumento de
seleção. "Selecione o guarda-chuva vermelho listrado" é uma operação de edição, não uma consulta
de banco de dados — e já roda em produto (o SAM 3 alimenta efeitos do Instagram Edits e o "View
in Room" do Facebook Marketplace). Quem projeta ferramenta visual passa a projetar *linguagem de
seleção*, com todos os problemas de ambiguidade que isso arrasta.

**Segundo, a modalidade de entrada.** Se o documento é entendido como imagem, o formulário deixa
de ser a única forma de obter dado estruturado. Isso muda o que se pede ao usuário: menos campos,
mais foto.

**Terceiro, a assimetria de quem olha.** Óculos com câmera e assistente multimodal já são produto
de consumo em milhões de unidades. A diferença entre gravar e *entender continuamente* é a
diferença entre uma foto e um índice.

**Por que um mapa de futuro e não um estado da arte.** Um levantamento diria "o SAM 3 existe, tem
473,6 M de parâmetros, roda em 30 ms numa H200". Isso é verdade e é pouco. A pergunta que
interessa é o que acontece com a prática profissional, com o regime jurídico e com a noção de
foto privada quando o gargalo deixa de ser *o que a máquina foi ensinada a ver* e passa a ser *o
que alguém resolve perguntar*. Essa é uma pergunta de segunda e terceira ordem, e o formato do
estado da arte não a alcança.

## 3. Onde isso está hoje

### O que já existe e funciona

**Segmentação por conceito, de código e pesos abertos.** O SAM 3 foi lançado em 19 de novembro de
2025 com *promptable concept segmentation*: dada uma frase nominal curta ("ônibus escolar
amarelo") ou um exemplar de imagem, o modelo devolve máscaras com identidade única para **todas**
as instâncias. O conjunto SA-Co tem cerca de 5,2 M de imagens, 52,5 K vídeos, mais de 4 M de
frases nominais únicas. Números reportados: dobro da acurácia dos sistemas anteriores no SA-Co
(CGF1 65,0 no SA-Co/Gold), LVIS zero-shot de 38,5 → 47,0 AP de máscara (+22%), MOSEv2 J&F 60,1
(+25,5% sobre o SAM 2.1), preferência humana ~3 para 1 contra o melhor baseline, 30 ms por imagem
com 100+ objetos numa H200. A versão SAM 3.1, de 27 de março de 2026, acrescenta *multiplexing* —
até 16 objetos numa única passada, 32 fps em vídeo numa H100.

**Representação visual sem rótulo, em escala.** O DINOv3 (14 de agosto de 2025) tem 7 B de
parâmetros treinados em 1,7 B de imagens, inteiramente auto-supervisionado, com licença comercial.
O ponto operacional é o *backbone congelado*: uma única passada serve detecção, segmentação e
profundidade sem fine-tuning. Há uso fora do laboratório — o World Resources Institute reduziu o
erro médio de altura de dossel no Quênia de 4,1 m (DINOv2) para 1,2 m; o JPL da NASA usa a
linhagem em robótica marciana com pouco recurso computacional.

**Compreensão de documento sem OCR.** O Qwen3-VL (a partir de outubro de 2025, licença
Apache-2.0, de 2 B a 235 B de parâmetros) trata a página como objeto visual: OCR em 32 idiomas —
contra 10 da geração anterior —, robustez a baixa luz, borrão e inclinação, parsing de estrutura
de documento longo, *grounding* 2D e 3D, contexto nativo de 256 K expansível a 1 M. Análises de
mercado de agosto de 2026 relatam OCR tradicional entre 60% e 75% de acurácia em documentos
complexos reais, contra sistemas baseados em VLM acima de 98,5% — número de fornecedor, e portanto
a ser lido como alegação comercial, não como medição independente.

**Percepção contínua em produto de consumo.** A Meta adicionou visão multimodal ao assistente dos
óculos em 23 de abril de 2024. A linha se ampliou (Oakley Meta em 2025, Ray-Ban Display com tela
integrada em setembro de 2025, linha própria a US$ 299 em junho de 2026). Em acessibilidade há
implantação real: a Meta doou 15.000 óculos Ray-Ban Meta à Vision Ireland, cobrindo todos os
adultos cegos e com baixa visão atendidos pela entidade, com treinamento presencial e *helpdesk*
custeados. O texto que descreve o programa faz a observação econômica que interessa aqui: só é
viável porque a "economia de um produto de propósito geral" subsidia o uso assistivo.

### O que existe e não funciona

**O vocabulário aberto não é aberto por igual.** O próprio SAM 3 tem desempenho melhor com frases
nominais simples; expressões referenciais longas ou raciocínio composto exigem acoplamento a um
LLM, e o modelo tropeça em conceitos ambíguos e em categorias raras mal representadas no treino.
Uma avaliação sistemática de VLMs em oito cenários de detecção e oito de segmentação (abril de
2025) conclui que as vantagens são **distintas por cenário** — isto é, não há vencedor geral, e a
promessa de "qualquer coisa" é mais estreita que o nome sugere.

**O custo ainda prende ao servidor.** São ~473,6 M de parâmetros e 3,45 GB; a análise prática
registra que a implantação em borda é inviável sem etapas extras, e que o padrão emergente é usar
o modelo grande para *gerar rótulo* e colocar em produção um modelo pequeno supervisionado.

**Na borda, o vocabulário ainda não é aberto.** É o ponto de tensão mais honesto deste mapa. O
PicoSAM3 (submetido em 30 de janeiro de 2026, aceito em 4 de junho de 2026) roda **dentro do
sensor** Sony IMX500: 1,3–1,4 M de parâmetros, 1,31 MB quantizado em INT8, 11,82 ms por inferência
(~84 fps), 65,45% mIoU em COCO — e **só aceita prompt de região (caixa), não texto**. Ou seja:
hoje, ou se tem vocabulário aberto no servidor, ou se tem tempo real no sensor. Não os dois.

**A alucinação é um problema de pesquisa ativo, não resolvido.** Em 2026 a tarefa compartilhada
SHROOM-Visions (EMNLP) reuniu 27 equipes e mais de 600 submissões só para *detectar* alucinação
em texto condicionado a imagem, com taxonomia de cinco classes em quatro idiomas. Métodos de
sondagem chegam a 0,93 AUROC na detecção — o que confirma, ao mesmo tempo, que o fenômeno é
frequente o bastante para sustentar um campo.

### Quem está construindo

Meta FAIR (SAM, DINO, os óculos e o Aria), Alibaba (Qwen-VL), NAVER (Donut), Google (PaliGemma),
IDEA Research (Grounding DINO), e a camada de ferramental — Roboflow, Ultralytics, Voxel51 — que
transforma modelo em fluxo de trabalho. Do lado do consumo do trabalho visual: CVAT e Label
Studio, as ferramentas de anotação cuja razão de existir o vocabulário aberto começa a corroer.

### O contexto normativo, que é parte do presente e não do futuro

Desde **2 de fevereiro de 2025** o AI Act europeu proíbe, entre outras práticas: categorização
biométrica que infira raça, opinião política, religião, vida sexual ou orientação (art. 5º, 1, g);
reconhecimento de emoção em trabalho e educação (f); criação ou expansão de bancos de rostos por
raspagem não direcionada da internet ou de CFTV (e); e identificação biométrica remota em tempo
real por autoridade policial em espaço público, salvo três objetivos taxativos e com autorização
judicial prévia (h e art. 5º, 3).

No Brasil, o quadro está aberto. O PL 2338/2023 foi aprovado no Senado em dezembro de 2024 e
tramita na Câmara; a votação em plenário escorregou de 2025 para 2026. A Coalizão Direitos na Rede,
com 49 organizações, alerta que, embora o texto classifique reconhecimento facial como risco
excessivo, "o amplo rol de exceções permite, na prática, o uso irrestrito da tecnologia por órgãos
de segurança". Em paralelo, o PL 1828/2023 — que autoriza câmeras de reconhecimento facial em
metrô, trens, ônibus, vias e repartições públicas de todo o país — foi aprovado na Comissão de
Segurança Pública e entrou na pauta do Plenário para 17 de junho de 2026.

E há o caso empírico. O Smart Sampa, em São Paulo, entre 21 de novembro de 2024 e 21 de maio de
2025: 1.246 pessoas abordadas, 82 levadas a delegacia por erro do sistema e depois liberadas — 23
delas por inconsistência do próprio reconhecimento facial, 53 por mandado inexistente, 6 por erro
de cadastro. 58,9% dos registros não informam raça; entre os que informam, a maioria é de pessoas
pretas e pardas, e as abordagens se concentram na periferia e no centro. Custo operacional
declarado: R$ 9,8 milhões por mês. Este é o estado da arte da vigilância por *rosto* — a linha de
base contra a qual a vigilância por *descrição* vai ser comparada.

## 4. As disrupções-raiz

### 4.1 O vocabulário deixou de ser fixo

**O que rompe.** Rompe a sequência que organizava a área inteira: definir classes → anotar
exemplos → treinar → só então ver. Nessa sequência, o que a máquina podia enxergar era decidido
meses antes, por quem pagava a anotação. Com segmentação por conceito, o conjunto de coisas
visíveis passa a ser decidido **no momento da pergunta, por quem pergunta**. Não é um modelo
melhor; é a inversão de quem detém o vocabulário.

**Por que agora e não há cinco anos.** Três condições que não existiam juntas em 2021: (i)
representação densa aprendida sem rótulo em escala industrial — DINOv3, 7 B de parâmetros sobre
1,7 B de imagens, com backbone congelado servindo várias tarefas de uma vez; (ii) um motor de
dados capaz de produzir 4 M de rótulos conceituais únicos, incluindo negativos difíceis, que é o
que separa "achar o que combina" de "saber dizer que não há"; (iii) a decisão arquitetural de
**separar reconhecimento de localização** — a *presence head* do SAM 3 —, que é o que permite
responder "isso não está aqui" sem inventar máscara.

**O que ainda falta.** Falta o vocabulário aberto funcionar fora do servidor (ver 4.3). Falta
desempenho em conceito raro e em expressão longa sem acoplar um LLM. E falta, sobretudo, um
regime de **erro declarado**: hoje o sistema devolve máscara com a mesma cara de confiança para
"cachorro" e para "pessoa parecendo nervosa", e essas duas consultas não têm o mesmo estatuto
epistêmico nem o mesmo estatuto jurídico.

### 4.2 O documento deixou de ser texto extraído e virou imagem compreendida

**O que rompe.** Rompe o pipeline OCR → detecção de layout → regras por template, e com ele rompe
a função do **formulário**. O formulário existe para forçar a pessoa a estruturar o dado na
entrada, porque a máquina não conseguia estruturar depois. Se ela consegue, o campo obrigatório
deixa de ser necessidade técnica e passa a ser escolha de projeto — e, quando permanece, permanece
por outra razão (auditoria, responsabilização), que agora precisa ser dita em voz alta.

**Por que agora.** Porque a compreensão passou a caber num único modelo de pesos abertos e licença
permissiva: Qwen3-VL em Apache-2.0, de 2 B a 235 B, OCR em 32 idiomas, robusto a baixa luz, borrão
e inclinação, com parsing de estrutura de documento longo e contexto de 256 K a 1 M. Não é que a
capacidade seja nova em laboratório — o Donut propôs compreensão sem OCR anos antes. É que ela
deixou de exigir um time de pesquisa para ser usada.

**O que ainda falta.** Falta evidência independente: os saltos de acurácia mais citados (60–75%
para acima de 98,5%) vêm de material de fornecedor, e a mesma análise não discute limitação nem
modo de falha — o que é, por si, motivo de desconfiança. Falta regime de responsabilidade: quando
um campo é lido errado num contrato, hoje há uma pessoa que digitou; amanhã há uma passada de
modelo. E falta o caso difícil — manuscrito, documento degradado, língua com pouco recurso.

### 4.3 A percepção começou a descer para o sensor

**O que rompe.** Rompe o custo marginal de olhar. Enquanto entender uma cena custava uma chamada
de servidor, olhar continuamente era caro e, por ser caro, era raro — e por ser raro, era evento
observável. Se entender custa 11,82 ms dentro do próprio sensor, olhar deixa de ser evento e vira
**ambiente**. A câmera para de ser um aparelho que se aponta e vira uma condição do lugar.

**Por que agora.** Porque as duas pontas se moveram ao mesmo tempo. Na ponta do silício, o
PicoSAM3 cabe em menos de 8 MB de SRAM on-chip do IMX500 e roda a ~84 fps, com destilação a partir
dos modelos grandes rendendo até +14,5% de mIoU sobre treino supervisionado direto — a linhagem
grande virou professora da pequena. Na ponta do consumo, óculos com câmera e assistente multimodal
já são categoria estabelecida, com um programa que colocou 15.000 unidades numa população inteira
de usuários cegos de um país.

**O que ainda falta — e esta é a condição decisiva do mapa.** Falta o encontro. O que roda no
sensor hoje **não é** vocabulário aberto: o PicoSAM3 aceita caixa, não texto. Enquanto a frase
precisar subir para o servidor, esta disrupção é uma promessa e não um fato. É exatamente por isso
que ela entra como raiz e não como efeito: se o encontro acontecer dentro do horizonte, quase
tudo da terceira ordem muda de prazo; se não acontecer, os efeitos de 4.3 escorregam para depois
de 2031 e este mapa erra por otimismo.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "O vocabulário deixou de ser fixo — segmentar e detectar por conceito descrito em linguagem"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Anotar deixa de ser pré-requisito para ver, e vira etapa de correção do que o modelo já propôs"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "A camada de anotação se reorganiza em curadoria, auditoria e arbitragem do caso difícil"
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "A formação em visão computacional troca o ensino de treinar modelo pelo ensino de especificar conceito e medir erro"
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Fornecedores de dataset vertical perdem fosso, e o fosso migra para o acesso ao dado raro e proprietário"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "O valor econômico da imagem migra do pixel anotado para o direito de acesso ao que é raro"
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "A frase vira o instrumento de seleção em ferramentas visuais, no lugar do clique e da classe"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Projetar produto de visão passa a ser projetar vocabulário, com ontologia editável pelo próprio usuário"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "A disputa sobre que nome se dá às coisas deixa de ser semântica e vira disputa de produto e de política"
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "A falha deixa de ser classe não treinada e passa a ser conceito ambíguo, exigindo uma nova taxonomia de erro na interface"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "Normas de acessibilidade e de consumo passam a exigir declaração explícita de incerteza em descrição visual automática"
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Descrever o mundo em tempo quase real vira função corrente de produto de massa, e não recurso assistivo de nicho"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "A mediação humana sobe para o caso difícil, e o atendimento assistivo deixa de responder à pergunta trivial"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Descrever o mundo vira serviço de infraestrutura, e quem descreve passa a exercer poder editorial sobre o que existe na cena"
                sinal: medio
                prazo: 2032
                confianca: baixa
  - disrupcao: "O documento deixou de ser texto extraído e virou imagem compreendida"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "Extração estruturada deixa de exigir template por tipo de documento"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O formulário perde a função técnica de estruturar o dado na entrada e passa a existir só por razão de auditoria"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Preencher e conferir deixam de ser categorias reconhecíveis de trabalho administrativo de entrada"
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "A conferência humana migra da digitação para a arbitragem de campos de baixa confiança sinalizados pelo modelo"
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "A responsabilidade jurídica por erro de leitura precisa de doutrina nova, porque deixa de haver um digitador identificável"
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "O PDF e a captura de tela deixam de ser fim de linha e voltam a ser dado consultável"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Acervos históricos e cartoriais entram no índice sem passar por digitalização estruturada prévia"
            sinal: medio
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "O passado analógico vira ao mesmo tempo corpus de treino e material de litígio"
                sinal: fraco
                prazo: 2034
                confianca: baixa
  - disrupcao: "A percepção começou a descer para o sensor, e olhar continuamente deixa de ser caro"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "O custo marginal de entender uma cena continuamente tende a zero em dispositivo de consumo"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "A vigilância deixa de depender de banco de rostos e passa a operar por descrição de aparência e comportamento"
            sinal: forte
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "A regulação escrita sobre identidade biométrica fica defasada em relação à busca por descrição, que não identifica ninguém e mesmo assim encontra"
                sinal: medio
                prazo: 2032
                confianca: media
          - id: e6.2
            ordem: 2
            efeito: "O consentimento na captura deixa de ser sinalizável por LED e vira problema de norma social negociada em cada lugar"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "Espaços passam a negociar zonas sem descrição automática, e não apenas zonas sem câmera"
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "A fotografia deixa de ser opaca para a máquina e passa a nascer como dado estruturado"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "O acervo pessoal vira base consultável por terceiros a cada mudança de termo de uso, sem que nenhuma foto nova seja tirada"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "A privacidade de imagem passa a se definir por quem pode fazer a pergunta, e não por quem guarda o arquivo"
                sinal: medio
                prazo: 2033
                confianca: baixa
```

### O que o bloco não consegue dizer

**A cadeia e6 → e6.1 → e6.1.1 é a espinha deste mapa, e o bloco a achata.** Ela merece prosa.

A regulação existente foi escrita contra um mecanismo específico: comparar um rosto com um banco
de rostos. O art. 5º do AI Act proíbe raspagem não direcionada para formar esse banco, proíbe
identificação biométrica remota em tempo real pela polícia fora de três hipóteses, proíbe inferir
raça ou orientação a partir de biometria. Todas as proibições dependem da premissa de que o alvo é
**identificado**.

Busca por descrição não identifica. "Pessoa de jaqueta vermelha com sacola listrada, caminhando
sozinha" não é um dado biométrico, não requer banco de rostos, não infere categoria protegida — e
encontra a pessoa. É a mesma consulta que o SAM 3 responde hoje num benchmark acadêmico. A
proibição continua válida e continua não sendo violada. Esse descompasso é o efeito de terceira
ordem que eu apostaria, se tivesse que apostar num só.

Vale notar a assimetria com o Brasil, porque ela inverte o sinal. Na Europa a lei está escrita e
ficará estreita. No Brasil a lei ainda está sendo escrita — o PL 2338 na Câmara, o PL 1828
autorizando câmeras faciais em transporte e via pública — o que abre uma janela real: é possível
redigir contra o mecanismo certo antes de ele estar instalado. É improvável que isso aconteça; não
é impossível.

**Duas cadeias foram interrompidas por falta de evidência**, e registro aqui em vez de decorar a
roda com ramos que eu não sustento. (i) O efeito de terceira ordem de e5.1 sobre acervos
públicos brasileiros — não achei dado de adoção em cartório ou arquivo público que justificasse
prazo. (ii) Um ramo sobre robótica doméstica descendendo de e6: é o tema 9, e a fronteira da
disciplina manda deixar lá.

## 6. Sinais fracos e wildcards

### Sinal fraco 1 — a destilação inverteu o sentido da hierarquia

O PicoSAM3 relata até **+14,5% de mIoU** destilando dos modelos SAM grandes em comparação com
treino supervisionado direto. Lido de perto, isso diz que o modelo grande deixou de ser o produto
e virou **professor**: o artefato que vai para o campo é pequeno, barato e treinado por um modelo
que nunca sai do datacenter. Se esse padrão se firmar, o modelo fundacional some da vista do
usuário final e passa a operar como infraestrutura invisível de treino. Consequência incômoda: o
viés do professor se propaga para milhares de alunos pequenos, sem que ninguém audite o professor.

### Sinal fraco 2 — a *presence head*, ou aprender a dizer "não tem"

O SAM 3 separa arquiteturalmente reconhecimento de localização. É um detalhe técnico com
consequência epistêmica: o sistema ganha a capacidade de responder *ausência* em vez de produzir a
melhor máscara disponível. Quase nada na literatura de produto fala disso, e é provavelmente a
coisa mais importante para qualquer uso com consequência jurídica — a diferença entre "não
encontrei" e "encontrei algo parecido" é a diferença entre uma prova e um falso positivo. Os 82
conduzidos do Smart Sampa são o custo de sistemas que não sabem dizer "não tem".

### Sinal fraco 3 — a economia assistiva depende de subsídio cruzado

O programa irlandês só existe, segundo a própria descrição, porque a economia de um produto de
propósito geral banca o uso assistivo. Isso é fragilidade, não conquista: a função de descrição do
mundo para quem não enxerga passa a depender da saúde comercial de uma linha de óculos de moda. E
a mesma reportagem registra a métrica que ninguém publicou ainda — se as pessoas continuam usando
depois que o treinamento acaba.

### Sinal fraco 4 — visão computacional aplicada à reação, não à cena

O `ORTHOS`, trazido pela varredura da turma, aplica modelo visual à *resposta emocional* a
manchetes, e não ao conteúdo delas. É a fronteira entre ver e sentir. O AI Act já proíbe inferir
emoção em trabalho e educação desde fevereiro de 2025 — o que indica que o legislador viu a
direção antes do mercado. Sinal fraquíssimo em volume, alto em significado.

### Wildcard — vocabulário aberto de verdade dentro do sensor, com rótulo contínuo do campo de visão

**Não é previsão.** É o cenário que quebraria o mapa. Hoje há duas metades incompatíveis: texto no
servidor (473,6 M de parâmetros, 3,45 GB) e tempo real no sensor (1,3 M de parâmetros, caixa
apenas). Se alguém fizer a ponte — um SAM-like com prompt de texto rodando a dezenas de fps dentro
do IMX500 ou sucessor —, então todo par de óculos de consumo passa a rotular continuamente o campo
de visão de quem o usa, sem rede, sem custo por consulta e sem registro em servidor algum.

Probabilidade que atribuo até 2031: **baixa** — a lacuna é de duas ordens de grandeza em
parâmetros, e o obstáculo não é só engenharia, é o codificador de texto inteiro. Impacto: máximo.
Todos os efeitos de terceira ordem de e6 e e7 antecipam de três a cinco anos, e a regulação por
identificação biométrica torna-se, de vez, uma regulação sobre o mecanismo errado. O segundo
efeito, menos óbvio: sem servidor, não há log — a auditoria de vigilância, que hoje depende de
pedir registro a quem operou o sistema, perde o objeto.

### Anti-wildcard — o vocabulário fecha de novo

Simétrico e igualmente improvável: um acidente de alto perfil (prisão indevida derivada de busca
por descrição, num país com imprensa atenta) leva plataformas a restringir consultas a uma lista
branca de conceitos. O vocabulário aberto sobrevive na pesquisa e morre no produto, e o mapa
inteiro vira um episódio de Hype Cycle.

## 7. Contra o próprio mapa

### Qual efeito é só extrapolação linear do presente

**e4.1 e e4.1.1** — o fim do formulário. É a extrapolação mais confortável e provavelmente a mais
errada. Formulário não existe só porque a máquina não lia imagem; existe porque cria registro
auditável, distribui responsabilidade e força a pessoa a afirmar algo. Nenhuma dessas funções é
tocada por compreensão sem OCR. Rebaixei e4.1 de `forte` para `medio` e joguei o prazo de 2028
para 2030 durante a contestação; e4.1.1 ficou em `fraco`/`baixa`. Aposta razoável: em 2031 o
formulário está menor, não morto.

### Qual efeito assume velocidade de adoção sem caso comparável

**e6 e a cadeia inteira de 4.3.** Estou assumindo que a lacuna de duas ordens de grandeza entre o
modelo de conceito e o modelo de sensor se fecha, ao menos parcialmente, em cinco anos. Não tenho
caso comparável. Tenho um indício de direção — a destilação com +14,5% de mIoU — e nada mais. E há
um contra-indício que o mapa não pode ignorar: o próprio SAM 3, mais novo, **fica abaixo do estado
da arte em avaliação zero-shot** em certos benchmarks, brilhando com fine-tuning e poucos exemplos.
Isso é o oposto de "funciona em qualquer lugar sem preparo". Por isso e6 está `medio`/`media`, e
não `forte`.

### Qual disrupção pode simplesmente não se concretizar

**A 4.3.** É a mais frágil das três, e é a que sustenta cinco dos onze efeitos de terceira ordem.
Se o vocabulário aberto continuar preso ao servidor até 2031 — porque o codificador de texto não
cabe no sensor, ou porque o consumo de energia inviabiliza —, então a percepção contínua continua
sendo uma chamada de rede, com custo por consulta, com log e com ponto de auditoria. Nesse caso os
efeitos de e6 e e7 **não desaparecem; ficam governáveis**, que é diferente. O mapa não desaba: a
cadeia e6.1.1 vira um problema de contrato e não de física.

As disrupções 4.1 e 4.2, essas eu defendo. Elas já aconteceram; o que está em disputa é só o
tamanho do efeito.

### Qual fonte é fraca e eu usei mesmo assim

Os números de OCR (60–75% contra acima de 98,5%) vêm de material de fornecedor de agosto de 2026
que não discute nenhuma limitação — ausência que, sozinha, deveria desqualificar. Usei por não ter
achado comparação independente e por ser coerente com a direção reportada nos relatórios técnicos
do Qwen3-VL; marquei como alegação comercial no texto e não derivei prazo nenhum dela. Se alguém
trouxer uma avaliação independente com números menores, e4 continua de pé — a mudança de
arquitetura não depende do tamanho do salto —, mas o prazo de 2027 escorrega.

### Que viés meu entrou aqui

Dois, e são de direções opostas.

**O primeiro é de interesse.** Minha zona é percepção e mídia sintética. Escolher este tema já é
apostar que ele importa; e há um jeito confortável de escrever sobre visão de vocabulário aberto
que celebra a acessibilidade (e3, os 15.000 óculos na Irlanda) e trata a vigilância como nota de
rodapé. Tentei o contrário: a cadeia de vigilância é a mais desenvolvida do documento.

**O segundo é de sobrecorreção.** Ao evitar o tom celebratório, corro o risco de dar peso
desproporcional ao caso Smart Sampa — que é, note-se, um sistema de **reconhecimento facial**, ou
seja, exatamente a tecnologia madura que a régua da disciplina exclui e que este tema **não**
trata. Usei-o como linha de base empírica de erro institucional, não como evidência sobre
vocabulário aberto. É um uso legítimo e é também o ponto onde um leitor hostil me pegaria: estou
importando o desprestígio de uma tecnologia vizinha para colorir uma que ainda não produziu o seu
próprio caso documentado.

**E o critério que me faria mudar de ideia**, declarado de antemão: evidência de que a adoção já
passou da maioria inicial (Rogers) — o que tornaria isto estado da arte, não tendência — ou
evidência de que o vocabulário aberto só melhora o que já existia sem romper relação nenhuma.
Sobre o primeiro: não achei. Sobre o segundo: a avaliação sistemática de VLMs em dezesseis
cenários, ao concluir que as vantagens são distintas por cenário e não gerais, é o achado que mais
se aproxima de uma refutação, e foi por causa dela que a confiança global do mapa é `media` e não
`alta`.

## 8. O que a máquina errou

**1. Confundiu duas gerações de óculos e me deu uma data errada com aparência de precisão.** Numa
das buscas, o resumo afirmou que a Meta anunciou óculos "a partir de US$ 299" em **23 de junho de
2026**, enquanto outra fonte aberta — a página de enciclopédia sobre a linha — situava o modelo
de US$ 299 em junho de 2026 mas listava Ray-Ban Display em setembro de 2025 e Oakley Meta em
agosto-setembro de 2025. A desconfiança veio da forma: datas exatas para lançamentos comerciais
costumam variar entre anúncio, pré-venda e disponibilidade, e eu estava recebendo uma só data
para as três coisas. Tentei abrir a matéria original e recebi HTTP 403. **Resolução:** não usei a
data; no documento a linha do tempo dos óculos está no nível do mês e atribuída à fonte que abri.

**2. Prometeu abstract e devolveu um resumo que não continha o que eu pedi.** Ao buscar limitações
e latência no artigo do SAM 3, a máquina respondeu com a arquitetura e a nota, honesta, de que "o
trecho fornecido não inclui medições de latência nem limitações declaradas". Foi o momento em que
quase aceitei um número de latência vindo de outro lugar como se fosse do artigo. Os 30 ms em H200
que estão na seção 3 vêm do **blog da própria Meta e da análise da Roboflow**, não do artigo, e
está escrito assim.

**3. Tentou me entregar um PDF ilegível como se fosse conteúdo.** A avaliação de VLMs em detecção
e segmentação (arXiv 2504.09480) veio, na primeira tentativa, como fluxo binário comprimido, e a
resposta foi um pedido para reenviar em formato legível. Se eu tivesse citado sem ler, teria uma
fonte no documento cujo conteúdo eu não conhecia. Abri a página de abstract e só usei o que estava
lá — inclusive a limitação de que a página de abstract **não** detalha os gaps quantitativos,
declarada no texto.

**4. O erro que quase passou: transformar existência em eficácia.** Em rascunho, escrevi que o
vocabulário aberto "dispensa a anotação". Isso não está em fonte nenhuma. O que as fontes dizem é
outra coisa, e mais estreita: a pré-rotulagem assistida caiu de 9,7 s para 1,6–2,1 s por máscara
num estudo agrícola, e **36%** das equipes relatam que menos da metade do dado anotado chega à
produção — porque anotam o material errado, problema que o SAM 3 não resolve. A frase correta é a
que ficou em e1: anotar deixa de ser pré-requisito e vira correção. A diferença entre as duas
versões é a diferença entre propaganda e mapa.

**5. Nomeou uma parceria com data e conferência, e eu não consegui abrir a fonte primária.** O
resumo de busca situava o anúncio Be My Eyes + Meta em março de 2026, na 41ª conferência CSUN. A
página da própria Be My Eyes devolveu HTTP 403. **Resolução:** o programa irlandês, cuja fonte eu
abri, ficou no texto; a data da CSUN não entrou, e a Be My Eyes aparece apenas como funcionalidade
descrita pela fonte que respondeu.

## 9. Três cenários para 2031

### Provável

Em 2031 a busca por conceito é a forma normal de operar qualquer sistema visual, e ninguém mais
nota. Toda ferramenta de edição tem campo de texto para selecionar; todo sistema de inspeção
industrial é configurado por frase; a anotação sobreviveu como profissão, menor e mais bem paga,
composta de quem arbitra o caso difícil e de quem decide **o que** vale anotar — a pergunta que o
modelo não responde. O formulário encolheu sem morrer: sobreviveu onde é preciso alguém assinar
embaixo. O vocabulário aberto no sensor **não** chegou: o que roda nos óculos é um modelo pequeno
com repertório fixo, e a frase aberta ainda sobe para a nuvem. A Europa opera sob o AI Act de 2025,
que continua proibindo reconhecimento facial policial e continua não dizendo nada sobre busca por
descrição, que todo mundo faz. No Brasil, o marco legal foi aprovado com o rol de exceções que as
49 organizações denunciaram, e a expansão de câmeras seguiu o roteiro do PL 1828 — mais pontos,
mesmos erros, agora com um assistente de linguagem em cima.

### Desejável

O mesmo cenário técnico, com três diferenças que não dependem de avanço nenhum, só de escolha.

A primeira é a **incerteza declarada como padrão de interface**: todo sistema que descreve uma
cena separa o que reconheceu do que inferiu, e a *presence head* — a capacidade de dizer "não tem"
— vira requisito, não detalhe de arquitetura. A segunda é a **regulação pelo mecanismo, não pela
categoria**: a lei brasileira, escrita depois da europeia, define o ato regulado como *localizar
uma pessoa específica por características descritas*, independentemente de haver biometria, e essa
definição atravessa a distinção que hoje deixa a busca por descrição fora de qualquer regra. A
terceira é a **descrição do mundo como infraestrutura pública** — o que aconteceu na Irlanda por
doação corporativa é contratado com dinheiro público e obrigação de continuidade, de modo que a
acessibilidade de meio milhão de pessoas não dependa do trimestre de uma empresa de óculos.

O que teria que ser feito para chegar lá: a janela legislativa brasileira ainda aberta em 2026 é a
única das três que tem data. As outras duas dependem de alguém, projetando produto, decidir que
"não sei" é uma resposta que a interface deve saber dar.

### Indesejável

Em 2031 a busca por descrição é a forma corrente de localizar pessoas, e nenhuma lei a menciona.
Não houve decisão nem debate: a capacidade chegou pela porta do produto, como recurso de segurança
predial e de varejo, e cresceu porque não precisou de autorização — não há dado biométrico, não há
banco de rostos, não há nada a notificar. A consulta é uma frase, e a frase não fica registrada em
lugar nenhum obrigatório. Casos como os 82 conduzidos do Smart Sampa continuam acontecendo, mas
sem o rastro que permitiu contá-los: ali havia um sistema municipal, um relatório de transparência
e pedidos de LAI. Aqui há uma câmera privada e um prompt que ninguém guardou. As pessoas atingidas
são as mesmas de sempre — a concentração periférica e o perfil racial que os registros de São
Paulo já mostram, agora sem registro que permita mostrá-los.

**O sinal precoce**, e é um só, observável antes de 2028: o dia em que um fornecedor de segurança
privada anunciar "busca por descrição, sem reconhecimento facial" **como argumento de
conformidade** — vendendo a ausência de biometria como prova de legalidade. No instante em que
essa frase virar material de vendas, o descompasso deixou de ser hipótese e virou modelo de
negócio.

## 10. O experimento

### O que é

**Caçador de conceitos.** Uma aplicação web de tela única: de um lado, um acervo de imagens que a
própria turma contribui — o que cada um escolher tirar do rolo da câmera, com regra combinada
antes; do outro, um campo de texto. Escreve-se uma frase nominal, e o sistema devolve, em todas as
imagens do acervo, as instâncias segmentadas que correspondem, com a máscara desenhada e a
pontuação de confiança à vista. Duas coisas são registradas em log e ficam visíveis a todos: **a
frase consultada e quem consultou**.

O log é o experimento. O buscador é a isca.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta de terceira ordem do tema, e1.1.1 do bloco: *o que sobra de privado numa foto quando
toda imagem é legível por máquina?* A hipótese que o experimento testa é que a privacidade de
imagem deixou de ser propriedade do arquivo e virou função de **quem pode fazer a pergunta**. Uma
foto que você entregou de boa vontade para "uma busca por gatos" responde igualmente bem a "pessoa
usando crachá", "remédio sobre a mesa", "livro na estante". Você não entregou nada diferente. A
pergunta é que é outra.

### Que tecnologia emergente ele usa, e por que não dá com tecnologia madura

Segmentação por conceito com prompt de texto — SAM 3 ou OpenWorldSAM, com o Qwen3-VL como camada
de descrição quando a consulta for uma sentença e não um substantivo. Não dá com tecnologia madura
por definição: um detector de classes fixas só encontraria as categorias do COCO, e o experimento
inteiro depende de a turma poder digitar **qualquer** coisa, inclusive o que ninguém previu. É
precisamente o que se recusa a antecipar o vocabulário que produz o desconforto. Um classificador
maduro produziria uma demonstração; só o vocabulário aberto produz o experimento.

Limitação técnica assumida e declarada: o SAM 3 são 3,45 GB e ~30 ms por imagem em GPU de
datacenter. Roda em servidor, não no navegador. Isso é fiel ao estado real da tecnologia em 2026 —
e a lacuna, aliás, é a própria disrupção 4.3 em exposição: os alunos vão sentir a latência da rede
que o wildcard promete eliminar.

### O que a turma vai fazer quando testar em sala

Três rodadas, nesta ordem, que é a ordem do desconforto.

1. **Consultas banais**, de objeto. Todos buscam à vontade, e a sala calibra o quanto o sistema
   acerta e onde inventa.
2. **A rodada da revelação.** Cada um busca, no acervo coletivo, uma frase escolhida para achar
   algo sobre uma pessoa que não é o assunto da foto: o que ela vestia, o que estava na mesa, que
   remédio, que documento, que marca. A regra é acordada antes e qualquer um pode retirar imagens
   a qualquer momento. Registra-se: *o quanto o autor da foto previu que aquilo estava lá?*
3. **A rodada do log.** Abre-se o registro de consultas na projeção. Todos veem o que todos
   perguntaram. Discute-se uma pergunta única: se este log não existisse, o que teria mudado?

Métrica proposta, imperfeita e proposital: **taxa de surpresa** — proporção de recuperações
corretas em que o autor da imagem diz não ter percebido que aquele elemento estava ali. É uma
medida do que a máquina vê e a pessoa não.

### O que seria um resultado que me faria mudar de ideia

Duas coisas, em direções opostas.

**Se a taxa de surpresa for baixa** — se as pessoas souberem, em geral, o que suas fotos contêm —,
então a cadeia e7 → e7.1 → e7.1.1 está exagerada, a legibilidade por máquina não revela nada de
novo, e a privacidade de imagem continua sendo sobre posse do arquivo. Rebaixaria e7.1.1 de
`media` para `baixa` e abandonaria a formulação de "quem pode fazer a pergunta".

**Se a rodada do log não incomodar ninguém** — se ver o que os colegas perguntaram for indiferente
—, então a hipótese de que a consulta é o objeto a ser governado (e não a imagem) perde a
sustentação intuitiva, e o efeito e6.1.1 vira especulação jurídica sem apoio em comportamento.

E o contrário também conta: se a rodada 2 precisar ser interrompida porque alguém pediu, isso não
é falha do experimento. É o achado, e vale mais que qualquer número.

## 11. Fontes

Só entra o que foi aberto e respondeu. Três tentativas resultaram em HTTP 403 ou conteúdo
ilegível e estão registradas na seção 12, fora desta lista.

1. **Meta AI — "SAM 3.1: Faster and More Accessible Real-Time Video Detection and Tracking"** ·
   `https://ai.meta.com/blog/segment-anything-model-3/` · Sustenta: capacidades do SAM 3 e 3.1,
   prompt por texto e exemplar, 2× no SA-Co, 30 ms em H200 com 100+ objetos, 32 fps em H100 com
   multiplexing, preferência humana ~3:1, usos em Instagram Edits e Facebook Marketplace, pesos
   abertos no Hugging Face, data de 27/03/2026 para o SAM 3.1. · Confiabilidade: fonte primária do
   fabricante — autoritativa quanto ao que o modelo é, interessada quanto ao que ele vale.

2. **arXiv 2511.16719 — "SAM 3: Segment Anything with Concepts"** ·
   `https://arxiv.org/abs/2511.16719` · Sustenta: definição de *promptable concept segmentation*,
   4 M de rótulos conceituais únicos com negativos difíceis, benchmark SA-Co, dobro da acurácia,
   arquitetura com detector de imagem + rastreador com memória e *presence head* separando
   reconhecimento de localização. · Confiabilidade: artigo dos autores; alta para método,
   autorreportada para desempenho. **O abstract não traz latência nem limitações** — declarado.

3. **Ultralytics Docs — "SAM 3: Segment Anything with Concepts"** ·
   `https://docs.ultralytics.com/models/sam-3` · Sustenta: 473,6 M de parâmetros / 3,45 GB, CGF1
   65,0 no SA-Co/Gold, LVIS zero-shot 38,5 → 47,0 AP, MOSEv2 J&F 60,1 (+25,5%), limitação a frases
   nominais simples, dificuldade com conceito ambíguo e categoria rara, comparação com SAM 2. ·
   Confiabilidade: documentação de terceiro que integra o modelo — boa para números operacionais,
   com interesse comercial na integração.

4. **Roboflow — "SAM 3: Segment Anything with Concepts"** · `https://blog.roboflow.com/what-is-sam3/`
   · Sustenta: ~840 M de parâmetros e 3,4 GB na leitura deles, inviabilidade prática em borda,
   desempenho abaixo do estado da arte em zero-shot em certos benchmarks, e o padrão de usar o
   modelo grande para gerar rótulo e servir um modelo pequeno. · Confiabilidade: jornalismo técnico
   de fornecedor de ferramental; boa nas limitações, que contrariam o próprio interesse.
   **Divergência com a fonte 3 quanto ao número de parâmetros** — registrada na seção 12.

5. **Voxel51 — "What SAM 3 Means for Data Annotation"** ·
   `https://voxel51.com/blog/what-sam-3-means-for-annotation` · Sustenta: 9,7 s → 1,6–2,1 s por
   máscara em estudo agrícola, a afirmação de que o SAM 3 não diz quais imagens valia rotular, e os
   36% de equipes cujo dado anotado majoritariamente não chega à produção. · Confiabilidade: empresa
   de ferramenta de dados; alinha-se ao interesse dela sustentar que curadoria humana permanece —
   usar com esse desconto.

6. **Meta AI — "DINOv3: Self-supervised learning for vision at unprecedented scale"** ·
   `https://ai.meta.com/blog/dinov3-self-supervised-vision-model/` · Sustenta: 14/08/2025, 7 B de
   parâmetros, 1,7 B de imagens, backbone congelado servindo várias tarefas numa passada, licença
   comercial, WRI com erro de dossel de 4,1 m → 1,2 m no Quênia, JPL/NASA usando a linhagem. ·
   Confiabilidade: primária do fabricante.

7. **arXiv 2507.05427 — "OpenWorldSAM"** · `https://arxiv.org/abs/2507.05427` · Sustenta: extensão
   do SAM 2 a prompts de linguagem em nível de categoria e de sentença, 4,5 M de parâmetros
   treináveis com o resto congelado, estado da arte em segmentação semântica, de instância e
   panóptica de vocabulário aberto; v1 em 07/07/2025, v4 em 02/02/2026. · Confiabilidade: artigo
   com código público; alta para a existência da capacidade.

8. **arXiv 2603.11917 — "PicoSAM3: Real-Time In-Sensor Region-of-Interest Segmentation"** ·
   `https://arxiv.org/html/2603.11917` · Sustenta: 1,3–1,4 M de parâmetros, 1,31 MB em INT8,
   11,82 ms (~84 fps) no Sony IMX500 dentro de <8 MB de SRAM, 65,45% mIoU em COCO e 64,01% em LVIS,
   ganho de até +14,5% de mIoU por destilação, falhas em objeto transparente, oclusão severa e
   objeto sub-resolução, submissão em 30/01/2026 e aceite em 04/06/2026, **e o ponto decisivo: só
   prompt de caixa, não de texto**. · Confiabilidade: artigo aceito com números de hardware
   específicos; alta.

9. **arXiv 2504.09480 — "Vision-Language Model for Object Detection and Segmentation: A Review and
   Evaluation"** · `https://arxiv.org/abs/2504.09480` · Sustenta: avaliação em oito cenários de
   detecção e oito de segmentação, três granularidades de ajuste, e a conclusão de vantagens e
   limitações **distintas por cenário**. Submetido em 13/04/2025. · Confiabilidade: revisão
   acadêmica; a página de abstract não detalha os gaps quantitativos, e por isso nenhum número foi
   extraído dela.

10. **QwenLM/Qwen3-VL (GitHub)** · `https://github.com/qwenlm/qwen3-vl` · Sustenta: liberação a
    partir de outubro de 2025, de 2 B a 235 B (densos e MoE), licença Apache-2.0, OCR em 32 idiomas
    contra 10 antes, robustez a baixa luz/borrão/inclinação, parsing de documento longo, grounding
    2D e 3D, operação de GUI, contexto de 256 K a 1 M. · Confiabilidade: repositório oficial; alta
    para capacidade declarada e licença, autorreportada para desempenho.

11. **Extend — "OCR & AI: Vision Models Replace OCR"** (03/08/2026) ·
    `https://www.extend.ai/resources/ocr-and-ai-vision-language-models-replacing-text-recognition` ·
    Sustenta: OCR tradicional em 60–75% contra sistemas VLM acima de 98,5% em documentos complexos,
    manutenção de relação entre páginas, saída JSON com confiança por campo. · Confiabilidade:
    **baixa** — material de fornecedor que não discute limitação nem modo de falha. Usado como
    indicação de direção e explicitamente marcado como alegação comercial no corpo do documento.

12. **EU Artificial Intelligence Act — Artigo 5º, práticas proibidas** ·
    `https://artificialintelligenceact.eu/article/5/` · Sustenta: proibições de categorização
    biométrica inferindo categorias protegidas (g), reconhecimento de emoção em trabalho e educação
    (f), raspagem não direcionada de rostos da internet ou de CFTV (e), identificação biométrica
    remota em tempo real pela polícia com três objetivos taxativos e autorização judicial prévia
    (h, e art. 5º(3)); todas aplicáveis desde 02/02/2025. · Confiabilidade: alta — texto legal
    consolidado e anotado.

13. **Data Privacy Brasil — "Câmara pode votar a qualquer momento projeto que transforma o Brasil
    em Estado de vigilância facial"** ·
    `https://www.dataprivacybr.org/camara-pode-votar-a-qualquer-momento-projeto-que-transforma-o-brasil-em-estado-de-vigilancia-facial/`
    · Sustenta: escopo do PL 1828/2023 (metrô, trens, ônibus, vias e repartições públicas de todo o
    país), autoria, aprovação na Comissão de Segurança Pública, pauta do Plenário em 17/06/2026,
    ausência de transparência, de avaliação de impacto e de supervisão independente. ·
    Confiabilidade: organização de advocacy com posição declarada — precisa nos fatos processuais,
    a ser lida como parte interessada na avaliação.

14. **Brasil de Fato — "Smart Sampa: mais de 80 pessoas foram levadas para delegacias por
    inconsistência do reconhecimento facial"** (04/02/2026) ·
    `https://www.brasildefato.com.br/2026/02/04/smart-sampa-mais-de-80-pessoas-foram-levadas-para-delegacias-por-inconsistencia-do-reconhecimento-facial/`
    · Sustenta: 21/11/2024 a 21/05/2025, 1.246 abordados, 82 conduzidos e liberados (23 por
    inconsistência de reconhecimento facial, 53 por mandado inexistente, 6 por erro de cadastro),
    58,9% dos registros sem informação racial e maioria preta e parda entre os identificados,
    concentração periférica e central, R$ 9,8 milhões mensais. · Confiabilidade: jornalismo com
    linha editorial declarada, **reportando nota técnica do Lapin, Instituto Peregum e Rede
    Liberdade** baseada em relatórios de transparência e pedidos de LAI — a cadeia documental é
    verificável.

15. **VR.org — "Meta Is Handing 15,000 Camera Glasses to Ireland's Blind Adults"** ·
    `https://vr.org/articles/meta-vision-ireland-15000-ray-ban-glasses-accessibility-2026` ·
    Sustenta: 15.000 óculos doados à Vision Ireland cobrindo todos os adultos cegos e de baixa
    visão atendidos, custeio integral incluindo treinamento presencial e helpdesk, chamada de
    voluntário Be My Eyes por voz, descrição de cena e leitura de texto pelo Meta AI, preço-base de
    US$ 299, "mais de sete milhões de pares vendidos no ano passado", subsídio cruzado do produto
    de propósito geral, preocupações de privacidade da câmera e a métrica em aberto de uso
    continuado após o treinamento. · Confiabilidade: publicação especializada; o número de sete
    milhões é reportado sem fonte primária e foi usado apenas como ordem de grandeza.

16. **Wikipedia — "Ray-Ban Meta"** · `https://en.wikipedia.org/wiki/Ray-Ban_Meta` · Sustenta: linha
    do tempo (Ray-Ban Stories 09/2021; Ray-Ban Meta 10/2023; Oakley Meta 08–09/2025; Ray-Ban
    Display 09/2025; linha própria a US$ 299 em 06/2026), visão multimodal anunciada em 23/04/2024,
    ausência de números de venda no artigo, e as controvérsias de privacidade — LED de gravação
    ineficaz em pouca luz e a reportagem da BBC de janeiro de 2026 sobre filmagem sem
    consentimento. · Confiabilidade: enciclopédia colaborativa — média; usada para cronologia e
    para a existência da controvérsia, não para número.

17. **HeroHunt — "The Changing Landscape of AI Data Labeling Hiring (2026)"** ·
    `https://www.herohunt.ai/blog/the-changing-landscape-of-ai-data-labeling-hiring-2026/` · Sustenta: pré-rotulagem automática reduzindo trabalho manual em 50–80%, demissão de ~500
    anotadores generalistas na xAI em setembro de 2025 (cerca de um terço da equipe) com pivô para
    especialistas, estratificação de remuneração, e crescimento de avaliação, auditoria e supervisão
    de rotulagem. · Confiabilidade: blog de empresa de recrutamento — média; os números de demissão
    são atribuídos a reportagem de terceiros e não foram confirmados em fonte primária.

18. **Desinformante — "Votação do marco da IA fica para 2026 em meio a impasses políticos e
    críticas ao texto"** ·
    `https://desinformante.com.br/votacao-do-marco-da-ia-fica-para-2026-em-meio-a-impasses-politicos-e-criticas-ao-texto`
    · Sustenta: adiamento da votação do PL 2338/2023, nota pública da Coalizão Direitos na Rede com
    49 organizações, e o alerta de que o rol de exceções esvazia na prática a classificação de
    reconhecimento facial como risco excessivo. · Confiabilidade: jornalismo especializado em
    desinformação e políticas digitais, com posição declarada — bom para tramitação e para o
    registro da crítica organizada.

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista

A skill exige entrevista com oito campos confirmados antes de qualquer pesquisa, e exige repetir os
valores e pedir confirmação. **Nesta rodada não havia interlocutor disponível para responder** — os
parâmetros vieram pré-definidos na própria convocação. Registro isso como desvio do procedimento, e
não como procedimento cumprido. Os valores usados, todos recebidos e nenhum inferido por mim:

| Campo | Valor |
|---|---|
| tema | Máquinas que veem qualquer coisa: visão de vocabulário aberto (tema 11 de 19; família "Percepção e mídia sintética") |
| recorte | O emergente: vocabulário aberto — segmentar, detectar e entender por linguagem — e compreensão de documento como imagem |
| horizonte | 2031 |
| público | Quem projeta mídia e interação |
| região | Global, com nota sobre o Brasil |
| objetivo | Mapa de futuro para a disciplina CIN0055, com efeitos de 1ª a 3ª ordem e roda verificável |
| exclusões | O que já é comum em produto de massa (régua da disciplina); nenhuma outra |
| viés | Neutro |

Parâmetros adicionais recebidos: disrupção suspeita — nenhuma, descobrir; ideias óbvias a excluir —
as que servem para qualquer tema; critério de mudança de ideia — evidência de adoção além da
maioria inicial (Rogers) ou de que a tecnologia não rompe nada; profundidade — três ordens; modo —
a partir de uma inovação, não de um setor.

**Suposições que precisei declarar por não ter a quem perguntar:**

- Tratei "global com nota sobre o Brasil" como autorização para uma seção brasileira substantiva
  (PL 2338, PL 1828, Smart Sampa) e não uma nota de rodapé, porque a assimetria normativa entre
  Europa e Brasil é o material mais relevante que a pesquisa produziu sobre o recorte geográfico.
- Tratei "o que já é comum em produto de massa" como excluindo reconhecimento facial, OCR
  tradicional, classificação de imagem e detecção de classes fixas. O reconhecimento facial entra
  no documento **apenas** como linha de base empírica e como contraste jurídico — nunca como objeto
  do mapa. É uma leitura possivelmente generosa da régua, e assinalo.
- `publico_ok: false`, conforme o padrão da skill e do formato.

### 12.2 Consultas feitas

Buscas (WebSearch): `SAM 3 Segment Anything with Concepts Meta open vocabulary`; `DINOv3 Meta
vision foundation model 2025 2026`; `OCR-free document understanding vision language model 2026
enterprise replacing OCR`; `EU AI Act prohibited practices real-time remote biometric
identification February 2025 applicable`; `reconhecimento facial Brasil regulação PL inteligência
artificial 2026 ANPD videomonitoramento`; `Meta Ray-Ban Display smart glasses 2026 sales on-device
vision AI assistant see what you see`; `Be My Eyes AI describing world blind users 2026 Meta
glasses accessibility visual description`; `data annotation labeling industry impact foundation
models 2026 Scale AI layoffs auto-labeling jobs`; `Smart Sampa reconhecimento facial câmeras São
Paulo 2026 prisões erros`; `open-vocabulary detection limitations hallucination vision language
model benchmark 2026 failure rare concepts`; `arXiv 2026 open-vocabulary segmentation on-device
edge real-time smart glasses efficient SAM distillation`; `PL 2338 marco legal inteligência
artificial Brasil status 2026 Câmara votação`; `Qwen3-VL open weights document understanding OCR
benchmark 2026 release`.

Páginas abertas e lidas: as 18 da seção 11.

### 12.3 Fontes descartadas, e por quê

- **CNBC, "Meta announces new smart glasses starting at $299" (23/06/2026)** — HTTP 403. Era a
  fonte primária jornalística da linha de óculos de 2026. Sem ela, a cronologia ficou na fonte 16,
  em nível de mês. É o erro nº 1 da seção 8.
- **Be My Eyes, "Be My Eyes and Meta Launch New Accessibility Functions"** — HTTP 403 nas duas
  URLs (`/news/` e `/business/news/`). Continha a data de março de 2026 e a 41ª CSUN. Não citada;
  a funcionalidade entrou apenas pela fonte 15. Erro nº 5.
- **arXiv 2504.09480 em PDF** — devolvido como fluxo binário ilegível. Recuperado pela página de
  abstract, que é o que consta na fonte 9. Erro nº 3.
- **arXiv 2608.25662 (SHROOM-Visions 2026)** — apareceu em busca com dados consistentes (27
  equipes, 600+ submissões, taxonomia de cinco classes, quatro idiomas, EMNLP 2026, 0,93 AUROC),
  mas **não abri a página**. Por isso não está na seção 11. O parágrafo da seção 3 que a menciona
  está atribuído no corpo como resultado de busca, e nenhum efeito da roda depende dele.
  Se a rodada fosse refeita, esta seria a primeira página a abrir.
- **Consulta sobre ANPD e biometria (agenda regulatória 2025–2026, Mapa de Temas Prioritários
  2026–2027)** — resultados plausíveis e convergentes, nenhuma página aberta. Excluída. Teria
  reforçado a seção brasileira sem mudar efeito nenhum.
- **`sam3ai.com`, `vizuara.substack.com`, `opencv.org/dinov3`, blogs de OCR (`edenai`,
  `unstract`, `siliconflow`)** — conteúdo derivado dos anúncios primários que já abri. Não
  acrescentavam e diluiriam a lista.
- **arXiv 2512.06032 ("The SAM2-to-SAM3 Gap...")** — título muito promissor para a tese de que
  a mudança é de natureza e não de grau. Não aberto por limite de tempo. **Lacuna consciente.**
- **`arxiv.org/pdf/2511.21631` (Qwen3-VL Technical Report)** — preferi o repositório oficial, que
  traz licença e capacidades de forma verificável. O relatório traria números de benchmark de
  documento que teriam fortalecido a disrupção 4.2 contra a fraqueza da fonte 11.

### 12.4 Divergência entre fontes, não resolvida

**Tamanho do SAM 3.** A documentação da Ultralytics (fonte 3) diz **473,6 M de parâmetros / 3,45
GB**; a análise da Roboflow (fonte 4) diz **~840 M / 3,4 GB**. O tamanho em disco bate; a contagem
de parâmetros não — diferença de quase o dobro. Hipótese não verificada: uma das duas conta o
codificador de texto e a outra não, ou uma soma detector e rastreador de vídeo. **Não resolvi.**
No corpo usei 473,6 M atribuído à fonte 3 e citei a leitura da Roboflow quando o assunto era
inviabilidade em borda, onde as duas concordam. Nenhum efeito da roda depende de qual está certa —
ambas colocam o modelo a duas ordens de grandeza do que cabe num sensor.

### 12.5 Separação entre fato, inferência e hipótese

A skill exige separar os três. O mapeamento explícito:

**Fatos com fonte aberta.** Tudo em 3 e em 11: os números de benchmark do SAM 3; os 7 B/1,7 B do
DINOv3 e o erro de dossel no Quênia; os 11,82 ms e 1,31 MB do PicoSAM3 e a sua limitação a prompt
de caixa; a licença Apache-2.0 e os 32 idiomas do Qwen3-VL; as proibições do art. 5º e sua data;
os números do Smart Sampa; os 15.000 óculos irlandeses; a cronologia dos óculos; o adiamento do
PL 2338 e a pauta do PL 1828; os 9,7 s → 1,6–2,1 s e os 36% da fonte 5.

**Inferências causais argumentadas.** Que a inversão de quem detém o vocabulário (4.1) é de
natureza e não de grau. Que a compreensão sem OCR retira do formulário a função técnica e deixa
apenas a de auditoria (4.2 e e4.1). Que busca por descrição fica fora das categorias do art. 5º
(e6.1 e e6.1.1) — **esta é a inferência mais consequente do documento, e é minha**: nenhuma fonte
aberta afirma isso. Ela se apoia em ler o texto legal e comparar com a capacidade documentada, e
pode ser derrubada por um parecer jurídico que enquadre descrição de aparência como dado pessoal
sensível por outro caminho — pela LGPD, por exemplo, ou pela própria definição de tratamento para
identificação. Registro como o ponto mais frágil e mais importante.

**Hipóteses prospectivas.** Toda a terceira ordem, e é por isso que quase toda ela está em
`confianca: baixa`. Os três cenários da seção 9. O wildcard e o anti-wildcard da seção 6.

### 12.6 Efeitos removidos ou rebaixados na contestação

- **Removido: "a profissão de anotador desaparece até 2030."** Era `forte`/`alta` no rascunho. A
  fonte 5 diz o contrário — o gargalo migra, não some, porque o modelo não sabe **quais** imagens
  valia rotular; e a fonte 17 mostra o nível generalista sendo automatizado enquanto o
  especialista cresce e é mais bem pago. Substituído por e1.1, que fala em reorganização.
- **Removido: "câmeras de consumo passam a rotular continuamente o campo de visão até 2029."**
  Depende de uma ponte técnica que não existe (fonte 8: prompt de caixa, não de texto).
  Rebaixado de efeito para **wildcard** na seção 6.
- **Rebaixado: e4.1** (fim do formulário), de `forte`/2028 para `medio`/2030, pelo argumento da
  seção 7 — formulário tem funções não técnicas.
- **Rebaixado: e6**, de `forte` para `medio`, pelo contra-indício do zero-shot abaixo do estado da
  arte (fonte 4).
- **Rebaixado: e5.1** para `confianca: baixa`, por ausência de qualquer dado de adoção em arquivo
  público ou cartório.
- **Não incluído: um ramo sobre inspeção industrial e contagem automatizada.** É efeito de primeira
  ordem óbvio e verdadeiro, mas serviria para qualquer tema de automação de trabalho visual — e o
  parâmetro recebido manda excluir o que não é específico deste. Fica o registro de que existe.
- **Não incluído: robótica que age a partir da percepção aberta.** É o tema 9 da disciplina.
  Fronteira respeitada.
- **Não incluído: reconstrução 3D a partir de percepção aberta.** É o tema 10.

### 12.7 Limitações declaradas

1. **Não houve entrevista real.** Ver 12.1.
2. **Nenhum efeito de terceira ordem tem apoio empírico.** Por construção. Todos estão em `fraco`
   ou `baixa`, salvo e3.1.1, e6.1.1 e e7.1.1, marcados `medio` em sinal porque há indício de
   direção — a doação irlandesa, o descompasso do art. 5º, a legibilidade por padrão.
3. **Duas fontes centrais são de fabricante** (1 e 6) e uma é comercial fraca (11). O contrapeso
   veio das fontes 4, 8 e 9, que reportam limitação.
4. **Um dado importante ficou sem fonte aberta**: o trabalho compartilhado SHROOM-Visions. Ver 12.3.
5. **A divergência de parâmetros do SAM 3 não foi resolvida.** Ver 12.4.
6. **Não busquei em português por vocabulário aberto** — só a parte regulatória e o Smart Sampa
   foram pesquisados em português. Se existe pesquisa brasileira em segmentação de vocabulário
   aberto (e provavelmente existe, em agricultura de precisão e em saúde), este mapa não a viu.
7. **A confiança global é `media`.** As disrupções 4.1 e 4.2 sustentam-se em evidência aberta e
   verificável. A 4.3 é uma aposta declarada, e cinco dos onze efeitos de terceira ordem dependem
   dela.
