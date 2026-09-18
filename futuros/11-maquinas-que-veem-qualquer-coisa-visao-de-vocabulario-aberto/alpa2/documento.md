---
tema: "Máquinas que veem qualquer coisa: visão de vocabulário aberto"
slug: maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto
autor_login: alpa2
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-17
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 11
efeitos_ordem_3: 11
tecnologias_citadas: [SAM 3, SAM 3.1, SAM 2, DINOv2, DINOv3, Grounding DINO, Grounded-SAM, YOLO-World, YOLOE, CLIP, SigLIP, Donut, PaliGemma, Qwen-VL, RF-DETR, PaddleOCR, CVAT, Label Studio, Meta Aria Gen 2, Meta Ray-Ban Display, Be My Eyes, Eagle Eye Smart Video Search, Coram AI, llama.cpp]
fontes: 9
confianca: media
experimento: "Um contador de conceitos por frase: a mesma cena, cinco redações do mesmo conceito, e a medida de quanto o resultado muda só porque a frase mudou."
skill_usada: futurizacao-alpa2
publico_ok: false
---

## 1. Resumo

Um sistema de visão computacional, por trinta anos, só reconhecia aquilo que alguém tinha
pagado para ensinar. A lista de classes era o produto: mudá-la custava coletar imagens,
contratar anotadores, retreinar e reavaliar. Essa amarra se soltou. Modelos de segmentação e
detecção de **vocabulário aberto** aceitam, em tempo de execução, uma frase curta — "painel
solar", "ônibus escolar amarelo", "guarda-chuva listrado" — e devolvem todas as instâncias
daquilo na imagem ou no vídeo. Em paralelo, a compreensão de documento deixou de passar por
OCR: o documento é lido como imagem, com layout e semântica no mesmo passo.

O deslocamento não é de desempenho, é de **onde mora a especificação**. Antes ela morava no
dataset, era cara, lenta e ficava com o engenheiro. Agora mora numa frase, é barata, instantânea
e fica com quem usa. Isso rebaixa uma barreira de custo que organizava um mercado inteiro
(anotação, integradores de visão, fornecedores de analítico de vídeo) e levanta um problema
novo: se o rótulo é texto de usuário, então o erro de percepção vira **erro de redação** — e
ninguém sabe ainda quem responde por ele.

Este mapa aponta para 2031 três disrupções-raiz: (1) a segmentação e detecção por conceito em
linguagem natural; (2) a leitura de documento sem OCR; (3) a percepção aberta contínua e
corporificada — óculos que rotulam o campo de visão em fluxo. Delas derivam 29 efeitos em três
ordens. O efeito que mais interessa a quem projeta mídia e interação não é a câmera que
enxerga mais: é que **o vocabulário passa a ser a interface**, e escrever bem o que a máquina
deve ver vira uma competência de projeto, disputada entre designer, especialista de domínio e
engenheiro.

A leitura pessimista tem dado empírico do lado dela: o gargalo de memória em dispositivo
(50–90 GB/s contra 2–3 TB/s de data center) e o tamanho dos modelos de conceito (escala de
servidor, ~3,4 GB) mantêm o vocabulário aberto na nuvem por mais tempo do que o entusiasmo
sugere; e o mercado de vigilância já vende "busca em linguagem natural" sobre catálogos
rigorosamente fechados — cor de roupa, tipo de veículo, gênero. A confiança geral deste mapa é
**média**, e cai para baixa em toda a terceira ordem, como manda o método.

---

## 2. O tema

**O que é.** Visão de vocabulário aberto é a família de modelos que aceita, na hora do uso, uma
descrição em linguagem natural (ou um exemplar visual) e localiza aquilo — em vez de ser
treinada de antemão numa lista fixa de classes. Tecnicamente, é a fusão entre representação
visual robusta (modelos fundacionais de visão, treinados sem rótulo) e um espaço semântico
compartilhado com texto (a linhagem CLIP/SigLIP). A tarefa que a Meta batizou de *Promptable
Concept Segmentation* (PCS) é a formulação mais nítida: dada uma frase nominal curta, segmentar
**todas** as instâncias daquele conceito, com identidade preservada ao longo de um vídeo.

**O que não é.** Não é classificação de imagem, não é detecção com classes fixas, não é OCR
tradicional — tudo isso é maduro, roda em produto de massa há anos e, pela régua da disciplina,
fica fora da seção de disrupções. Também não é reconstrução 3D (tema 10) nem robô que usa a
visão para agir (tema 9). Aqui o objeto é a **percepção aberta**: ver por conceito.

**Por que isso é um tema de mídia e interação, e não de engenharia de visão.** Porque muda a
natureza do controle. Quando a especificação do que a máquina vê é um dataset, ela é um artefato
técnico: versionada, auditável, cara de mudar, invisível para o usuário. Quando é uma frase, ela
é um artefato **linguístico**: barata, ambígua, contestável, e — o que mais importa — escrita
por qualquer um. Toda a tradição de projeto de interação sabe o que acontece quando a
especificação passa a ser texto livre digitado por gente: aparece variação, aparece
desentendimento, aparecem convenções, aparece disputa sobre o significado das palavras. É esse
o terreno novo.

**Recorte declarado.** Horizonte 2031. Público: quem projeta mídia e interação. Recorte global,
com uma nota sobre o Brasil na seção 3 e nos efeitos de segunda ordem ligados a vigilância e
regulação. Descartado de início, por régua da disciplina: o que já é comum em produto de massa.
Nenhuma outra exclusão foi declarada. Viés pedido: neutro.

---

## 3. Onde isso está hoje

*(estado do levantamento: setembro de 2026)*

### O que já existe e funciona

**Segmentação por conceito.** O SAM 3 (Meta) é o caso de referência: aceita frase nominal curta
ou exemplar de imagem e devolve máscaras e identidades únicas para **todas** as instâncias
correspondentes, em imagem e em vídeo, com rastreamento entre quadros. O artigo foi submetido em
20 de novembro de 2025, com versão revisada em 28 de março de 2026. Os números publicados: CGF1
de 65,0 no benchmark SA-Co/Gold, descrito como 88% do piso estimado de desempenho humano; 47,0
de Mask AP em LVIS *zero-shot* contra 38,5 do melhor anterior (+22,1%); 60,1 de J&F em MOSEv2
(+25,5% sobre o SAM 2.1). O dataset de treino, SA-Co, tem ~5,2 milhões de imagens, 52,5 mil
vídeos, mais de 4 milhões de frases nominais únicas e cerca de 1,4 bilhão de máscaras.

Uma peça de arquitetura merece nota, porque é ela que torna o vocabulário aberto utilizável e
não só demonstrável: a *presence head*, um módulo que decide primeiro **se o conceito existe na
cena**, antes de tentar localizá-lo. O problema clássico do detector de vocabulário aberto não é
achar o que está lá — é não alucinar o que não está. Separar "existe?" de "onde?" é uma resposta
de engenharia a um problema que, em última instância, é semântico.

**A atualização de 2026.** O SAM 3.1, anunciado em 27 de março de 2026, introduziu multiplexação
de objetos: rastreia até 16 objetos num único passe, dobrando a taxa de 16 para 32 fps numa GPU
H100, com latência de ~30 ms para imagens com mais de 100 objetos detectados. A Meta cita uso em
produto — efeitos no Instagram Edits, "View in Room" no Facebook Marketplace — e em vídeo
egocêntrico dos óculos Aria Gen 2.

**Detecção aberta em tempo real.** A linhagem GLIP → OWL-ViT → Grounding DINO provou que a coisa
funciona, ao custo de ser cara. A resposta do lado prático foi trazer o vocabulário aberto para
a arquitetura barata: YOLO-World e, mais recentemente, YOLOE, colocam comportamento de
vocabulário aberto dentro do fluxo YOLO. A diferença de custo entre as duas famílias é de mais
de uma ordem de grandeza.

**Características sem rótulo.** A linhagem DINO (Meta) treina representação visual sem nenhuma
anotação humana; o DINOv3 amplia o modelo em ~6× e os dados em ~12× em relação ao DINOv2, e é
descrito como o primeiro modelo auto-supervisionado a superar os fracamente supervisionados numa
faixa ampla de tarefas de sondagem. *(Este parágrafo vem de busca, não de leitura direta da
fonte primária — ver seção 8.)*

**Documento sem OCR.** A leitura de documento como imagem, sem etapa de reconhecimento de
caractere, saiu do laboratório (Donut, da NAVER, é o marco de origem citado pela turma) e virou
oferta comercial em 2026. A promessa é dispensar o encadeamento OCR → regex → casador de
template, lendo layout e semântica num passo só.

**Busca em acervo por descrição.** Produtos de vídeo-vigilância já vendem busca por linguagem
natural. A documentação do Smart Video Search da Eagle Eye Networks descreve consultas "da mesma
forma que você busca na web", em oito idiomas incluindo português.

**Percepção contínua em óculos.** Em maio de 2026 a Meta anunciou um pacote de acessibilidade
para seus óculos de IA: chamada em grupo com o Be My Eyes, gestão de chamadas por voz, legendas
em tempo real no Ray-Ban Display, e o *Meta Wearables Device Access Toolkit*, que abre a câmera
a aplicativos de terceiros — citando OOrion (localizar objetos e ler texto para pessoas cegas) e
Aira (intérpretes visuais treinados). O discurso da empresa mira "1 bilhão de pessoas com
deficiência".

### O que existe mas não pegou — ou pegou torto

**A "linguagem natural" que não é aberta.** É a divergência mais instrutiva do levantamento. A
documentação do Eagle Eye, lida na íntegra, revela que as consultas suportadas se resolvem em
três catálogos **fechados**: pessoas (cor da peça superior, cor da inferior, classificação de
gênero), veículos (tipo, marca, cor) e objetos (mochila, bolsa, mala, bicicleta). Isso não é
vocabulário aberto — é vocabulário fechado com uma camada de linguagem natural por cima. Para o
comprador, a diferença é invisível; para o mapa, é decisiva, porque significa que **a adoção
declarada é maior que a adoção real**.

**Vocabulário aberto no dispositivo.** Não chegou. O SAM 3 é explicitamente "modelo de escala de
servidor": ~3,45 GB, com uma medição de referência de ~2.921 ms por imagem em GPU comum contra
os ~30 ms citados em H200 — três ordens de grandeza de diferença conforme o ferro. O gargalo de
2026, segundo a literatura de inferência em borda, deixou de ser TOPS e passou a ser **banda de
memória**: 50–90 GB/s em celular contra 2–3 TB/s em GPU de data center, uma distância de 30–50×
que domina a taxa real; e a RAM efetivamente disponível costuma ficar abaixo de 4 GB depois do
sistema operacional. NPUs móveis já entregam 38–45 TOPS (Snapdragon 8 Elite, Exynos 2600), mas
quem manda é a banda.

**A anotação que ia acabar.** Não acabou. O mercado de rotulagem de dados segue crescendo
(projeções na casa de US$ 2,6 bi em 2026 para ~US$ 7 bi em 2031, ~22% ao ano, segundo relatório
de mercado visto em busca — número de fornecedor, tratar com reserva). O que mudou foi o
conteúdo do trabalho: pré-rotulagem automática e humano revisando, em vez de humano começando do
zero. Isso é migração de função, não extinção — e o mapa foi corrigido por causa disso (seção 7).

### Quem está construindo

Meta FAIR (SAM, DINO, Aria, óculos); IDEA Research (Grounding DINO); Roboflow (ferramental,
auto-rotulagem, RF-DETR, divulgação técnica); Google (PaliGemma); Alibaba (Qwen-VL); NAVER
(Donut); Ultralytics (YOLO/YOLOE, empacotamento para produção); o ecossistema Hugging Face; e,
no lado de produto, a camada de vigilância (Eagle Eye, Coram) e a camada de documento (a
categoria de "IDP" — processamento inteligente de documento — repovoada por VLM).

### Nota sobre o Brasil

Dois fatos delimitam o terreno brasileiro, e eles puxam em sentidos opostos.

O primeiro é regulatório. O PL 2338/2023 foi aprovado no Senado em dezembro de 2024 e, em
dezembro de 2025, teve a votação na Câmara adiada para fevereiro de 2026. O texto classifica
reconhecimento facial como risco excessivo, mas com exceções amplas para segurança pública e
persecução penal — o que a sociedade civil descreve como "um vácuo regulatório sem salvaguardas
efetivas", num sistema "reconhecidamente falho, sobretudo para pessoas negras e mulheres
negras". Compare-se com a União Europeia, onde a proibição de identificação biométrica remota em
tempo real em espaço público para fins de aplicação da lei está em vigor desde 2 de fevereiro de
2025, com multas de até € 35 milhões ou 7% do faturamento global, e com o prazo de agosto de
2026 para conformidade plena dos sistemas de alto risco.

O segundo é operacional. O Smart Sampa, em São Paulo, é o caso concreto de visão em escala
municipal: em abril de 2025 um homem de 80 anos foi confundido com um procurado e ficou 10 horas
detido a partir de alerta falso de câmera instalada numa unidade básica de saúde.

A relevância disso para **este** tema é precisa e vale sublinhar, porque é fácil errar: o debate
brasileiro está todo formulado em torno de reconhecimento **facial** — um vocabulário fechado de
identidades. A visão de vocabulário aberto não identifica quem é; descreve o que há. E
justamente por isso **escapa da moldura regulatória que está sendo escrita**. Procurar por
"pessoa com mochila vermelha perto da escola" não é reconhecimento facial, não aciona o artigo
de risco excessivo, e faz vigilância fina do mesmo jeito.

---

## 4. As disrupções-raiz

Cada candidata passou pelos três testes do Passo 2. Registro abaixo o teste, não só o resultado.

### D1 — Segmentação e detecção por conceito, especificadas em linguagem natural no momento do uso

**O que rompe.** Rompe a dependência entre "poder ver X" e "ter pagado para aprender X". Muda
quem pode fazer: até 2024, criar um detector novo exigia coleta, anotação, treino e avaliação —
semanas e orçamento. Hoje exige uma frase. Isso não é "mais rápido e mais barato" dentro do mesmo
arranjo; é a transferência da especificação do engenheiro para o usuário, em tempo de execução.
**Passa no teste 1.**

**Por que agora, e não há cinco anos.** Três limiares concretos, todos datados. (a) Escala de
supervisão conceitual: o SA-Co com >4 milhões de frases nominais e ~1,4 bilhão de máscaras não
existia. (b) Qualidade cruzando o limiar de utilidade: 88% do piso humano estimado em segmentação
por conceito, +22% de Mask AP zero-shot em LVIS — antes disso, demonstração; a partir daí,
ferramenta. (c) Custo por quadro caindo para faixa de produção: 30 ms por imagem com 100+
objetos, 32 fps com 16 objetos num passe (SAM 3.1, março de 2026). **Passa no teste 2.**

**O que ainda falta.** Falta caber no dispositivo (modelo de servidor, ~3,45 GB, contra <4 GB de
RAM efetiva no celular e banda de memória 30–50× menor). Falta lidar com expressão longa — a
documentação é explícita: o modelo serve a *frases nominais simples*; expressões longas exigem
acoplar um modelo multimodal maior. Falta desempenho em conceito raro ou de granularidade fina.
E falta o principal, que não é técnico: falta um regime de responsabilidade para quando a frase
estiver mal escrita. **Passa no teste 3 — é emergente, não madura.**

### D2 — Compreensão de documento sem OCR: o documento lido como imagem, layout e semântica no mesmo passo

**O que rompe.** Rompe o pressuposto de que "extrair dado de documento" é um encadeamento de
etapas frágeis, cada uma com seu erro, casadas a um *template* por formato. Muda o que passa a ser
possível: extrair estrutura de um documento que **ninguém previu** — uma foto torta de uma nota
fiscal de um fornecedor novo, um formulário manuscrito, um laudo com tabela e carimbo. E muda
quem precisa de quem: some a etapa de "cadastrar o layout". **Passa no teste 1.**

**Por que agora.** Porque o VLM lê layout e semântica conjuntamente num passo, o que só passou a
funcionar bem quando os modelos multimodais ficaram bons em ancoragem visual; e porque em 2026 a
oferta virou comercial, com fornecedores publicando benchmarks de layout e de perguntas sobre
documento. **Passa no teste 2, com uma ressalva importante:** a evidência de qualidade disponível
é majoritariamente de fornecedor, autorreferente (benchmark próprio, validação própria, sem
comparação com sistemas concorrentes nem verificação de terceiro). Aceito a disrupção, marco a
evidência como fraca — e volto a isso na seção 7.

**O que ainda falta.** Falta auditabilidade: um OCR ruim produz lixo ilegível, um VLM ruim produz
um número **plausível e errado**, o que é pior. Falta custo por página competitivo em volume alto.
Falta o mecanismo de citação visual (mostrar a região da imagem que sustenta cada campo) virar
padrão e não diferencial. **Passa no teste 3.**

### D3 — Percepção aberta contínua e corporificada: o campo de visão como fluxo consultável

**O que rompe.** Rompe a estrutura de **ato** que a captura de imagem sempre teve. Fotografar e
filmar são atos discretos, com começo, fim e — socialmente — um gesto visível que avisa os outros.
Percepção contínua com rotulagem por conceito elimina o gesto e elimina o recorte: não há uma
foto, há um fluxo; não há um assunto, há tudo o que estiver no campo de visão, rotulável a
posteriori por qualquer frase que se resolva escrever depois. **Passa no teste 1.**

**Por que agora.** Porque as três pernas se encontraram em 2026: o modelo de conceito em tempo
real (SAM 3.1, 32 fps, 16 objetos por passe), o hardware egocêntrico em campo (Aria Gen 2 na
pesquisa, Ray-Ban Display no consumo) e — o que costuma passar batido — **um caso de uso
legítimo e socialmente aprovado que paga a conta**: acessibilidade. O pacote de maio de 2026
(Be My Eyes por voz, OOrion, Aira, toolkit aberto a terceiros) é o que justifica publicamente uma
câmera sempre ligada no rosto das pessoas. **Passa no teste 2.**

**O que ainda falta.** Falta rodar localmente (hoje o conceito vive no servidor, e é isso que
transforma percepção contínua em transmissão contínua). Falta bateria. Falta escala de adoção —
óculos com IA ainda são nicho, e este é o ponto mais frágil de todo o mapa. E falta qualquer
figura jurídica para o consentimento de quem é filmado sem ser o usuário. **Passa no teste 3.**

### Candidatas rejeitadas

- **"Modelos fundacionais de visão" (SAM 1/2, DINOv2) como disrupção.** Rejeitada no teste 1:
  segmentar melhor com clique ou caixa é melhoria — ótima, mas melhoria — de um fluxo que já
  existia. Entra na seção 3 como contexto, não na 4. O salto está em trocar o clique pelo conceito.
- **OCR de 80 idiomas, detecção com classes fixas, classificação de imagem.** Rejeitadas no teste
  3: já estão em produção e em uso comum. Maduras.
- **Auto-rotulagem de datasets.** Rejeitada como raiz: é consequência direta de D1, e está no mapa
  como efeito de primeira ordem (e1), não como disrupção própria.
- **"Visão computacional aplicada à reação emocional" (ORTHOS).** Não vira raiz: não encontrei
  evidência de limiar cruzado, e inferência de estado afetivo é território de alegação frágil.
  Fica como sinal fraco na seção 6, que é o lugar honesto dela.

---

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "Segmentação e detecção por conceito, especificadas em linguagem natural no momento do uso"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Rotular deixa de ser pré-requisito para começar um projeto de visão, e o protótipo passa a nascer de uma frase."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O trabalho de anotação migra de produzir rótulo para auditar rótulo de máquina e definir o léxico do domínio."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Escrever o vocabulário de um domínio vira competência disputada entre designer, especialista e engenheiro, sem dono estabelecido."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O custo de entrada de um sistema de visão sob medida cai ao alcance de uma loja, de uma prefeitura pequena e de um trabalho de disciplina."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "A vigilância deixa de ser privilégio de quem tem orçamento e vira capacidade difusa, inclusive entre pares e dentro de casa."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "A interface de um sistema de visão passa a ser um campo de texto, e o erro de percepção vira erro de redação."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Surge um artefato novo de projeto: o prompt de percepção, versionado, testado contra casos difíceis e revisado como código."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Perícia e litígio passam a examinar a frase usada na consulta, e não o dataset de treino, para atribuir responsabilidade por um erro de visão."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Fornecedores vendem linguagem natural sobre catálogos fechados, e o comprador perde a capacidade de distinguir vocabulário aberto de fachada."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "Forma-se demanda por um teste público de abertura — provar que o sistema responde a um conceito que ninguém pôs na lista."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Acervos de imagem e vídeo tornam-se consultáveis por descrição, sem catalogação prévia."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "O que foi gravado por acaso passa a ser recuperável, e o arquivo morto vira base de dados ativa sem que ninguém tenha decidido isso."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "O prazo de retenção de imagem torna-se a variável decisiva de privacidade, mais determinante que a proibição de reconhecimento facial."
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "Compreensão de documento sem OCR: o documento lido como imagem, layout e semântica no mesmo passo"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "A extração de dado de documento deixa de exigir um template por formato, e o formato desconhecido passa a ser caso normal."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O formulário estruturado perde função como instrumento de coleta, porque qualquer registro existente serve de entrada."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "O desenho de serviços troca preencher campo por mostrar o que você tem, e o ônus de estruturar a informação passa do cidadão para a instituição."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "O trabalho de digitação e conferência se concentra em exceção e amostragem, em vez de percorrer todo o volume."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "A função de digitador é substituída pela de auditor de extração, com responsabilidade formal sobre o número que a máquina leu."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "O erro de leitura deixa de ser ilegível e passa a ser plausível: a máquina devolve um valor coerente em vez de falhar visivelmente."
        sinal: medio
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Sistemas passam a exigir citação visual: a região da imagem que sustenta cada campo extraído vira parte obrigatória da saída."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Mostrar de onde tirou torna-se requisito regulatório em finanças e saúde, e não apenas boa prática de produto."
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "Percepção aberta contínua e corporificada: o campo de visão como fluxo consultável"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "Descrever o mundo em tempo real para quem não enxerga deixa de depender da disponibilidade de um voluntário humano."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "A acessibilidade se desloca de adaptar interfaces para traduzir o ambiente físico continuamente."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "A norma de acessibilidade migra do edifício e do site para o que a máquina consegue descrever, transferindo a fornecedores de IA um papel antes público."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "O campo de visão de quem usa óculos vira fluxo consultável, e gravar deixa de ser um ato deliberado e visível."
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "O consentimento de terceiros filmados torna-se impraticável de obter, e a regra migra do ato de captar para o que pode ser feito com o dado."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Etiqueta social e contrato de trabalho passam a governar a percepção maquínica nos espaços que a lei não alcança: casa, sala de aula, mesa de reunião."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "Aparecem espaços declaradamente opacos à leitura de máquina, anunciados como diferencial, à maneira do silêncio em biblioteca."
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "A opacidade à máquina se estratifica por renda, e estar num lugar onde não se é lido vira bem de consumo."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o YAML não diz

**A tensão central do mapa é entre e1 e e2.2.** Um diz que a especificação se democratiza; o
outro, que o mercado vende a aparência dela. Não são alternativas — devem conviver, e provavelmente
o segundo será mais visível que o primeiro até 2029, porque o fornecedor de vigilância tem
incentivo forte para embalar catálogo fechado como linguagem natural (é mais barato, mais
previsível, mais fácil de garantir em contrato) e nenhum incentivo para explicitar a diferença. Se
eu tivesse que apontar o efeito mais subestimado deste mapa, seria e2.2.1: a necessidade de um
**teste de abertura**. Hoje não existe maneira simples de um comprador verificar se o sistema que
comprou responde a um conceito que ninguém previu. É exatamente o tipo de lacuna que costuma virar
norma técnica — e é o que o experimento da seção 10 tenta prototipar.

**e2 é o efeito que mais interessa a quem projeta interação, e é o mais difícil de ver.** "Erro de
percepção vira erro de redação" parece uma frase de efeito, mas tem consequência operacional
imediata: significa que a qualidade do sistema passa a depender de um artefato que ninguém
versiona, ninguém testa e ninguém revisa — a frase. O paralelo histórico é a consulta SQL antes de
haver disciplina de banco de dados: um texto curto, escrito por qualquer um, com poder
desproporcional sobre o resultado, e sem nenhuma prática de engenharia em volta. Levou-se uma
década para inventar essa disciplina. Aqui ela ainda não começou.

**e3.1.1 contradiz a intuição regulatória corrente, e é deliberado.** Enquanto o debate — no Brasil
e na Europa — se organiza em torno de proibir reconhecimento facial, o vocabulário aberto faz
vigilância fina sem identificar ninguém. "Pessoa de jaleco saindo pela porta dos fundos depois das
22h" não é dado biométrico, não aciona o artigo de risco excessivo, e é operacionalmente mais útil
que um nome. Se esse efeito estiver certo, a variável que de fato protege deixa de ser *quem pode
ser reconhecido* e passa a ser *por quanto tempo a imagem existe*. Nenhuma das duas propostas
legislativas examinadas trata retenção como eixo central.

**A cadeia D3 é a mais frágil, e a fragilidade está na base, não nas pontas.** Todo o ramo e7
depende de óculos com IA atingirem adoção relevante — o que é hipótese, não fato. Se os óculos
ficarem em nicho até 2031, e7, e7.1, e7.1.1, e7.2 e e7.2.1 (cinco dos 29 efeitos) não acontecem, e
o ramo e6, sustentado por acessibilidade, se mantém de pé sozinho — em escala menor e mais lenta.
Assumi explicitamente que nicho não é zero: acessibilidade é um caso de uso com adoção alta dentro
de uma população pequena, o que basta para e6 e não basta para e7.

**Onde parei de ramificar, e por quê.** Cortei três ramos por deixarem de ser específicos:
"a educação muda", "as relações de trabalho se transformam" e "a noção de privacidade se
redefine". São ausências de análise disfarçadas de terceira ordem. Ficaram na seção 12.

---

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — a *presence head* como figura conceitual.** O módulo que decide se o conceito
existe antes de procurá-lo é, fora do contexto técnico, uma formalização de algo interessante: a
separação entre "isto existe?" e "onde está?". Sistemas de percepção que reportam ausência com
confiança são raros, e o valor social disso — dizer "não há ninguém aqui" e ser levado a sério — é
maior do que o valor de mais uma detecção. Se essa separação virar padrão de interface (e não só de
arquitetura), muda a conversa sobre falso positivo.

**Sinal fraco 2 — visão computacional aplicada a estado afetivo.** O ORTHOS, levantado pela turma,
simula e visualiza resposta emocional a manchetes. É a fronteira entre *ver* e *atribuir sentir*.
Não achei evidência de maturidade, e a literatura de inferência afetiva é contestada; mas registro
porque, se vocabulário aberto passar a aceitar conceitos afetivos ("pessoa parecendo confusa"), o
mesmo aparato de detecção herda — sem aviso e sem discussão — todas as alegações frágeis da
psicologia inferencial. Vale notar que a UE já classifica categorização biométrica para inferir
características protegidas como prática proibida; conceito em texto livre é uma porta lateral para
o mesmo efeito.

**Sinal fraco 3 — a auto-rotulagem que fecha o ciclo.** O padrão que a Roboflow descreve — usar o
modelo de conceito para rotular e treinar um modelo pequeno especializado — significa que o
vocabulário aberto pode ser um **compilador**: escreve-se a especificação em linguagem natural uma
vez, e ela é compilada num detector fechado, rápido e barato. Se esse fluxo se consolidar, o
vocabulário aberto some do produto final e vira ferramenta de autor. É a hipótese que mais
ameaça a narrativa de "câmera que entende qualquer coisa" — e a mais provável tecnicamente, dados
os números de custo.

**Sinal fraco 4 — o vocabulário como ativo disputado.** Se a frase é a especificação, então o
conjunto de frases que funcionam bem num domínio (perícia médica, inspeção elétrica, varejo) é
propriedade valiosa. Ainda não há mercado disso. Há precedente: bibliotecas de consultas,
taxonomias comerciais, vocabulários controlados em biblioteconomia.

**Wildcard (baixa probabilidade, alto impacto) — vocabulário aberto local, gratuito e vitalício
num óculos de 200 dólares.** Um modelo de conceito que caiba em <2 GB e rode a 30 fps num NPU
móvel, sem nuvem. A probabilidade é baixa porque o gargalo declarado é banda de memória, e banda
não obedece a lei de Moore como computação obedece. Mas o impacto inverte o mapa inteiro: sem
nuvem, some o registro central, some o custo por consulta, some o ponto de fiscalização — e some
também o argumento comercial de todos os fornecedores de analítico de vídeo. Nesse mundo, e7.1
("a regra migra para o que se faz com o dado") deixa de funcionar, porque não há dado circulando
para regular: há só uma pessoa que sabe. Regular percepção privada é um problema sem solução
conhecida.

**Wildcard negativo — o processo judicial que descobre o prompt.** Um caso emblemático em que uma
detenção, uma demissão ou uma negativa de seguro é rastreada até uma frase mal escrita por um
funcionário qualquer, e não até um algoritmo. O impacto seria de enquadramento: a discussão
pública sobre viés de IA está toda montada sobre dados de treino e modelos opacos. Um caso assim
mostraria que o ponto de falha migrou para um texto de dez palavras que ninguém revisou — e nenhuma
das propostas regulatórias examinadas prevê isso.

---

## 7. Contra o próprio mapa

### 7.1 Qual efeito é só extrapolação linear do presente?

**e1.2 e e1.2.1 são os mais extrapolados.** "O custo cai, logo todo mundo terá visão sob medida"
estica uma curva de custo de inferência e ignora que o custo de *inferência* nunca foi o único
gargalo de adoção. Uma prefeitura pequena não deixou de ter visão computacional por falta de
modelo: deixou por falta de câmera, de rede, de manutenção, de pessoa para operar e de processo
para agir sobre o resultado. Reduzir o custo do modelo a zero não resolve nada disso. Revisei a
confiança de e1.2 para média e mantive e1.2.1 em baixa; se fosse refazer, cortaria o prazo de
e1.2.1 para depois de 2031.

**e3 também tem componente linear.** "Busca por descrição em acervo" assume que indexar vídeo com
modelo de conceito é economicamente viável em escala de acervo. A 30 ms por imagem em H200, um ano
de uma única câmera a 10 fps custa muito mais que armazenar o vídeo. O efeito é real, mas provável
apenas sob amostragem esparsa ou indexação sob demanda — não sob indexação total. Essa nuance não
cabe na linha do YAML e por isso está aqui.

### 7.2 Qual efeito assume velocidade de adoção sem precedente comparável?

**e7 e todo o seu ramo.** Assumi que óculos com IA saem do nicho até 2029. O caso comparável mais
próximo é o do smartphone com câmera: de 2000 (primeiro aparelho comercial) a 2007 (iPhone) e daí a
2012 para ubiquidade — algo entre 7 e 12 anos até a mudança de norma social sobre fotografar em
público. Contando o Ray-Ban Meta de 2023 como marco equivalente, o mesmo ritmo põe a norma social
em 2030–2035, não em 2029. **Revisei o prazo de e7 de 2028 para 2029 e rebaixei sua confiança de
alta para média** por causa dessa comparação; e7.2 e e7.2.1 foram para sinal fraco, 2031, no limite
do horizonte, e só continuam no mapa porque o enunciado da disciplina pede o wildcard de óculos.

**e6 tem precedente melhor e por isso sustento a confiança alta.** Tecnologia assistiva tem história
de adoção rápida dentro de população pequena quando resolve um problema diário — leitor de tela,
GPS por voz. A integração Be My Eyes por comando de voz já está anunciada e em mercados múltiplos.

**e4.2.1 (fim do digitador) não tem precedente comparável que eu tenha encontrado.** Automações
anteriores de trabalho de escritório (planilha, ERP) deslocaram função ao longo de décadas, não de
anos, e quase sempre criaram camada de conferência em vez de eliminá-la. Mantive o efeito, marcado
como "não encontrei precedente comparável" para a velocidade suposta.

### 7.3 Qual disrupção-raiz pode simplesmente não se concretizar — e o que sobra?

**D3 é a mais provável de não se concretizar**, e a razão é banal: óculos podem não vender. Se
isso acontecer, o mapa perde 5 dos 29 efeitos (ramo e7). D1 e D2 seguem intactas, porque não
dependem de hardware novo — dependem de servidor, que já existe. O mapa não desmorona; encolhe.

**D2 pode se concretizar torto.** A evidência de qualidade disponível hoje é de fornecedor e
autorreferente: benchmark próprio, validação própria, sem comparação com concorrentes nem
verificação independente. Números como "99%+ de acurácia em notas fiscais de qualquer fornecedor"
são exatamente o tipo de alegação que costuma não sobreviver a auditoria de terceiro. Se a precisão
real em produção for, digamos, 90%, D2 não morre — mas e4.2 (conferência amostral) se inverte, e a
conferência **aumenta** em vez de diminuir, porque erro plausível (e5) é mais caro de achar que
erro visível. Esse é o cenário indesejável da seção 9.

**D1 é a mais sólida das três**, porque tem número de terceiro (benchmarks públicos, LVIS, MOSEv2),
modelo aberto e verificável, e uso já embarcado em produto de massa. Se eu tivesse que apostar em
uma só, seria nela.

### 7.4 Efeitos descartados ou revisados neste exercício

Registro explícito, porque a skill exige e porque é o que se perde quando só se lê a versão final:

1. **DESCARTADO — "o PDF deixa de existir até 2030".** Efeito bonito, insustentável. O PDF não
   existe por ser legível por máquina; existe por ser um contrato de aparência fixa e por estar
   incrustado em fluxo jurídico e de arquivo. Leitura sem OCR não toca em nenhuma dessas razões.
2. **REVISADO — "a profissão de anotador de dados acaba"** → virou e1.1, *migração* de produzir
   para auditar. Motivo da revisão: o mercado de rotulagem está crescendo, não encolhendo, e o
   padrão observado é pré-rotulagem automática com revisão humana. Extinção era conclusão
   confortável, não conclusão apoiada.
3. **DESCARTADO — "CVAT e Label Studio desaparecem".** O enunciado da disciplina sugere que o
   vocabulário aberto "dispensa" as ferramentas de anotação. Provavelmente não: ele muda o que se
   faz nelas. Ferramenta de revisão de rótulo de máquina é ferramenta de anotação com outro nome.
4. **REVISADO — prazo e confiança de e7** (ver 7.2).
5. **DESCARTADO — "toda imagem vira dado estruturado por padrão".** Era a formulação da terceira
   ordem no enunciado, e não sobrevive à economia: indexar tudo custa mais que guardar tudo. O que
   sobrevive é a versão mais fraca e mais inquietante — e3.1, *qualquer imagem guardada pode vir a
   ser estruturada depois, quando alguém tiver o motivo*. A diferença entre "é" e "pode vir a ser" é
   toda a diferença prática.
6. **CORTADOS por falta de especificidade** — "a educação muda", "o trabalho se transforma", "a
   privacidade se redefine". Ver seção 12.

### 7.5 Que viés entrou aqui

**Declarado pelo usuário:** viés neutro, sem preferência. Descarte declarado: apenas o que já é
comum em produto de massa (régua da disciplina). Critério de mudança de ideia declarado: evidência
de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia só melhora o que
existe sem romper nada.

**Assumido pela skill, por ausência de interlocutor.** Esta rodada foi executada sem usuário para
responder à entrevista do Passo 1. Os itens 1 e 2 (horizonte e recorte) vieram prontos no despacho,
o que satisfaz a condição de saída. Para os demais, assumi: (a) "levantar a disrupção do zero", sem
palpite prévio; (b) nenhuma exclusão temática além da régua; (c) neutralidade. Nenhuma pergunta
foi devolvida, por instrução explícita.

**Vieses que reconheço no resultado, e que o leitor deve descontar:**

- **Viés de fonte Meta.** Duas das três disrupções se apoiam fortemente em material da Meta (SAM,
  DINO, óculos, Be My Eyes). Números de benchmark da própria empresa que treinou o modelo são
  números de parte interessada, mesmo quando o modelo é aberto. Os únicos contrapesos que consegui
  foram documentação de terceiros que empacota o mesmo modelo — o que não é independência plena.
- **Viés de disponibilidade anglófona.** O levantamento é quase todo em inglês e norte-americano. A
  nota sobre o Brasil vem de duas fontes, e não encontrei evidência de adoção de vocabulário aberto
  em produto brasileiro. Ausência de evidência aqui é, muito provavelmente, ausência de busca.
- **Viés de novidade.** Um mapa de tendência premia o que rompe e subestima o que continua igual.
  O desfecho mais provável para qualquer tecnologia é ser absorvida sem drama pela infraestrutura
  existente — e esse desfecho está sub-representado aqui, como está em quase todo exercício desse
  gênero.
- **Viés do recorte do enunciado.** O tema chegou com bibliografia, entidades e termos já
  selecionados. Trabalhar dentro dessa lista é eficiente e é também uma forma de herdar o
  enquadramento de quem a escreveu. Não saí muito dela.

---

## 8. O que a máquina errou

Registro dos tropeços desta execução, com o motivo da desconfiança — não só a correção.

**1. Data do SAM 3, contradita entre duas leituras.** Ao ler o blog da Meta, o resumo devolveu
"SAM 3 apresentado em março de 2025" e, no mesmo parágrafo, "SAM 3.1, atualização de março de
2026". A página do arXiv, lida em seguida, registra submissão em **20 de novembro de 2025**. Um
modelo não é apresentado oito meses antes do artigo em contexto de lançamento aberto — a
inconsistência interna denunciou o erro antes de qualquer verificação. Adotei a data do arXiv e
descartei a do resumo. Desconfiança: sumarização de página dinâmica confunde data de post com data
de produto com frequência alta.

**2. Contagem de parâmetros do SAM 3, divergente entre fontes.** Uma fonte técnica registra
"~840M parâmetros, ~3,4 GB"; outra, "473,6M parâmetros, 3,45 GB". As duas não podem estar certas —
473M parâmetros não ocupam 3,45 GB em precisão comum, e 840M tampouco fecham exatamente. Não
consegui resolver com as fontes que abri. **Não usei nenhuma das duas contagens no corpo do
documento**; usei só o tamanho em disco (~3,45 GB), que as duas fontes confirmam, e que é o número
que interessa ao argumento (não cabe em celular). Registro a divergência em vez de escolher a mais
conveniente.

**3. Latência do SAM 3, duas ordens de grandeza de distância.** "30 ms por imagem" e "2.921 ms por
imagem" aparecem lado a lado na mesma tabela de uma das fontes. A tentação é citar o número bonito.
São medições em hardware diferente (H200 contra GPU de referência genérica), e a diferença é o
argumento inteiro sobre custo de implantação — por isso os dois números estão no texto, com o ferro
declarado ao lado de cada um. Citar só os 30 ms teria sido tecnicamente verdadeiro e
substantivamente enganoso.

**4. Alegação de fornecedor quase aceita como evidência.** Os números de leitura sem OCR ("60-75%"
para OCR tradicional, "98,5%", "99%+ em notas fiscais") vêm de material de uma empresa que vende
exatamente esse produto, validado contra benchmark da própria empresa, sem comparação com
concorrentes e sem terceiro. A leitura crítica da página deixou isso explícito. Em vez de citar os
números, rebaixei a evidência de D2 e transformei a fragilidade em item de 7.3 e no cenário
indesejável. Desconfiança: qualquer número de acurácia acima de 98% publicado por quem vende a
solução deve ser tratado como alegação de marketing até prova em contrário.

**5. "Busca em linguagem natural" quase virou evidência de vocabulário aberto em produção.** O
primeiro impulso foi tratar os produtos de vídeo-vigilância com busca por texto como prova de
adoção. Ler a documentação mostrou o contrário: os atributos suportados são um catálogo fechado e
curto. A frase de marketing e a capacidade técnica divergem, e a divergência virou o efeito e2.2 —
um dos mais úteis do mapa. É o exemplo do porquê da regra "só cite o que abriu": a busca sugeria
adoção; a leitura mostrou fachada.

**6. Números de mercado de rotulagem, usados com ressalva explícita.** As cifras de tamanho do
mercado (US$ 2,61 bi em 2026 → US$ 7,02 bi em 2031) aparecem em material de consultoria e de
fornecedores de rotulagem — parte interessada em que o mercado pareça grande. Aparecem no texto
com a ressalva, porque sustentam um ponto contrário ao entusiasmo (a anotação não acabou) e não a
favor. Uso assimétrico, declarado.

**7. DINOv3 entrou sem leitura de fonte primária.** O parágrafo sobre DINOv3 vem de resultados de
busca, não de página aberta. Está marcado no corpo do texto. Não sustenta nenhum efeito do mapa;
serve de contexto. Se fosse sustentar, teria que ser lido.

**8. Tentação de inflar a terceira ordem.** Três efeitos foram escritos inicialmente com confiança
"média" na terceira ordem, e todos foram rebaixados para "baixa". O método é explícito: confiança
baixa na terceira ordem é a resposta esperada. A tentação existe porque um mapa com confianças
altas parece mais competente — e é exatamente por isso que o registro fica aqui.

---

## 9. Três cenários para 2031

### Provável — "o compilador de percepção"

É 2031. O vocabulário aberto venceu como **ferramenta de autor** e perdeu como interface de
produto. Quase ninguém roda um modelo de conceito em produção: roda-se uma vez, na bancada, para
gerar rótulos e treinar um detector pequeno e barato que vai para o campo. A frase virou código-
fonte; o detector fechado, o binário. Existe uma prática de escrever, versionar e testar prompts de
percepção, com repositórios internos e revisão por pares — informal, sem nome consagrado, feita por
um cargo híbrido que em algumas empresas responde ao design e em outras à engenharia (e1.1.1 se
resolveu por acomodação, não por decisão).

Documento sem OCR é padrão em fluxo novo e conviveu com o antigo no fluxo legado — nenhuma
instituição grande trocou o que já funcionava. Formulários continuam existindo, porque servem
também para outra coisa que a leitura de documento não substitui: obrigar quem preenche a
declarar. Digitadores não sumiram; foram reclassificados como conferentes e são menos.

Óculos com IA são realidade consolidada para acessibilidade e nicho para o resto — perto do
smartphone de 2005, não do de 2012. Vigilância municipal usa busca por descrição em acervo, sem
que isso tenha entrado em nenhum debate público, porque tecnicamente não é reconhecimento facial e
juridicamente não é nada. O Brasil aprovou seu marco de IA; ele trata de biometria e não menciona
consulta por conceito. Ninguém percebeu a lacuna ainda.

### Desejável — "a frase auditável"

Mesmo cenário técnico, com uma diferença institucional. Entre 2027 e 2029 um caso público — uma
detenção indevida, ou uma negativa de benefício — foi rastreado até uma frase de consulta mal
escrita, e não até um modelo opaco. O caso deslocou a conversa. A partir dali, três coisas se
firmaram: (a) **registro obrigatório da consulta** em sistemas de percepção que produzam
consequência sobre pessoas — qual frase, quem escreveu, quando, com que resultado; (b) **citação
visual obrigatória** em extração de documento nos setores regulados, com a região da imagem que
sustenta cada campo (e5.1.1 se concretizou); (c) um **teste público de abertura de vocabulário**,
usado em compra pública, que obriga o fornecedor a demonstrar resposta a conceitos fora de qualquer
lista (e2.2.1).

Nada disso é utópico nem exige tecnologia que não exista: são três requisitos de registro. O que
foi preciso acontecer para chegar aqui: alguém ter construído, cedo, ferramenta de medir
divergência entre frases — porque a auditoria de prompt só é possível quando se sabe demonstrar que
duas redações do mesmo conceito produzem resultados diferentes. É precisamente o que o experimento
da seção 10 tenta fazer, e é por isso que ele é o experimento certo para este mapa.

Ganho colateral: acessibilidade deixou de ser adaptação e virou tradução contínua do ambiente, com
norma técnica própria, sem que a régua do que é acessível tivesse sido inteiramente entregue a três
empresas (e6.1.1 se realizou pela metade — a melhor metade).

### Indesejável — "a confiança sem fundo"

Mesmo cenário técnico, sem nenhuma das três firmezas. Leitura de documento sem OCR foi implantada
em larga escala com base em alegação de fornecedor, e o erro plausível (e5) fez o que erro plausível
faz: passou. Em 2029 descobriu-se que uma fatia pequena e persistente de valores extraídos —
números coerentes, no campo certo, simplesmente errados — vinha alimentando decisões de crédito e
de prontuário havia três anos, sem rastro de qual região da imagem os originou. Como a conferência
amostral tinha sido reduzida por causa da acurácia prometida, ninguém olhava. A resposta foi
restaurar conferência integral: o custo de operação voltou ao de 2024, agora somado ao da licença.

Do lado da percepção, a busca por descrição em acervo se generalizou justamente por estar fora da
moldura regulatória: não identifica ninguém, logo não é biometria, logo não é nada. Retenção
continuou indefinida porque nunca foi o eixo do debate (e3.1.1 não aconteceu). O acervo de câmeras
de 2026 permanece consultável em 2031 por qualquer frase que alguém resolva escrever, e a
capacidade de fazer a pergunta, barateada, chegou também a quem não é Estado (e1.2.1 pelo pior
caminho).

**O sinal precoce deste cenário, e é observável já em 2027:** a primeira compra pública de grande
porte de "busca por linguagem natural" em vídeo-vigilância cujo edital **não exija demonstração de
resposta a conceito fora de lista**, e cujo contrato não fixe prazo de retenção. Se esse edital sair
sem contestação, o cenário indesejável já começou — e ele começa por documento contratual, não por
ruptura tecnológica.

---

## 10. O experimento

### O que é

**"A mesma coisa, cinco frases"** — uma página web de uma tela que recebe (a) uma imagem ou um
trecho curto de vídeo e (b) até cinco redações diferentes do *mesmo* conceito, e devolve, lado a
lado, o que cada frase encontrou: número de instâncias, máscaras sobrepostas na imagem e as
divergências entre as redações (o que a frase A viu e a B não). Uma tela, sem cadastro, sem
treino, sem rótulo.

Exemplos de conjunto de frases para a mesma cena de um corredor de faculdade:
`pessoa com mochila` · `estudante carregando mochila` · `alguém com bolsa nas costas` ·
`mochila` · `pessoa carregando algo nas costas`.

A saída interessante não é a detecção. É a **matriz de divergência**: quantas instâncias cada frase
achou, quantas todas concordaram, quantas apareceram em uma só. Um número por par de frases, e um
número geral de concordância da cena.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta central deste mapa, que é a de e2 e e2.2: **o vocabulário aberto é realmente aberto, ou
apenas transfere a rigidez do dataset para a redação da frase?**

Se as cinco redações convergirem, o efeito e2 ("erro de percepção vira erro de redação") é fraco: o
modelo entende o conceito, não a formulação, e o risco de prompt é menor que o texto sugere. Se
divergirem muito, e2 é forte, e2.1 (prompt versionado e testado) deixa de ser especulação e vira
necessidade imediata de engenharia, e o cenário desejável da seção 9 ganha o instrumento que lhe
faltava. Em qualquer dos casos, a resposta é **medida**, não argumentada — e é barata de obter.

De quebra, o mesmo aparato é o protótipo grosseiro do **teste de abertura** de e2.2.1: rode-o
contra a API de um produto comercial de busca em vídeo, com um conceito que não está em catálogo
nenhum (`pessoa com guarda-chuva fechado`, `cadeira virada`, `caixa de papelão molhada`). Se a
resposta vier vazia ou aleatória, o "aberto" era fachada — e isso se demonstra numa tarde, sem
acesso privilegiado.

### Que tecnologia emergente ele usa, e por que a madura não serve

Usa um modelo de segmentação/detecção por conceito com entrada em texto livre — a linhagem SAM 3 /
Grounding DINO / YOLOE, via qualquer endpoint hospedado ou instalação local com GPU. É emergente
pelos três testes do Passo 2 e, no caso, por um motivo trivialmente verificável: **o experimento é
logicamente impossível com tecnologia madura**. Um detector de classes fixas (YOLO clássico) não
tem como receber cinco redações diferentes — ele tem uma lista, e a lista não é texto do usuário. A
pergunta "quanto o resultado muda porque a frase mudou" só pode ser feita a um sistema em que a
frase seja a especificação. O experimento é, nesse sentido, um teste de existência da própria
disrupção.

Custo estimado: uma tarde de trabalho, uma GPU alugada por hora ou um endpoint público, e imagens
que qualquer pessoa já tem no celular. Cabe numa aula.

### O que faria quem testar mudar de ideia sobre o mapa

- **Convergência alta e estável** (concordância acima de ~90% entre redações razoáveis, em cenas
  variadas): e2 está superestimado, e2.1 provavelmente não acontece, e este mapa deu peso demais à
  redação. Revisar o ramo e2 inteiro para baixo.
- **Divergência extrema** (a mesma cena com contagens que variam por múltiplos, dependendo da
  frase): e2.1.1 — a perícia examinar a frase — sai de "efeito de terceira ordem, confiança baixa"
  para problema de curto prazo, e o prazo deve ser antecipado.
- **Divergência sistemática por atributo social** (frases equivalentes que rendem resultados
  diferentes conforme cor de pele, vestuário ou tipo de corpo das pessoas na cena): muda o mapa por
  inteiro. Significa que o viés, que se supunha morar no dataset, também mora na frase — e a
  premissa de toda a seção 9 desejável (registro da consulta basta para auditar) fica insuficiente,
  porque registrar uma frase enviesada não a torna justa.
- **O modelo responder bem a conceito raro, mas mal a conceito comum mal formulado**: seria o
  achado mais desconcertante e o mais provável de mudar como se ensina a usar a ferramenta.

---

## 11. Fontes

Listadas apenas as páginas efetivamente abertas e lidas nesta execução. Resultados de busca que não
foram abertos estão marcados como tal no corpo do texto e na seção 12, e não sustentam nenhum
efeito do mapa.

1. `https://arxiv.org/abs/2511.16719` — *SAM 3: Segment Anything with Concepts* (Meta FAIR).
   Sustenta: a definição da tarefa PCS, a escala do dataset SA-Co, as datas de submissão
   (20/11/2025) e de revisão (28/03/2026). **Confiabilidade:** fonte primária, artigo público, mas
   escrita pela equipe que treinou o modelo — números de desempenho são de parte interessada.

2. `https://docs.ultralytics.com/models/sam-3/` — documentação técnica de terceiro empacotando o
   SAM 3. Sustenta: CGF1 65,0 em SA-Co/Gold e 88% do piso humano; Mask AP 47,0 em LVIS zero-shot
   contra 38,5; J&F 60,1 em MOSEv2; tamanho de 3,45 GB; as duas medições de latência (30 ms em H200
   e 2.921 ms em GPU de referência); e as limitações declaradas (frases nominais simples, conceitos
   ambíguos, mais lento que detectores especializados). **Confiabilidade:** alta para especificação
   técnica; os números de benchmark são reproduções dos publicados pela Meta, não medições
   independentes. É também a fonte de uma das contagens de parâmetros em disputa (ver seção 8).

3. `https://blog.roboflow.com/what-is-sam3/` — análise técnica da Roboflow. Sustenta: a descrição
   da detecção de instâncias em vocabulário aberto, a caracterização do modelo como de escala de
   servidor, e o fluxo de auto-rotulagem (usar o modelo de conceito para treinar um modelo pequeno
   especializado), que fundamenta o sinal fraco 3. **Confiabilidade:** boa para leitura técnica;
   empresa com interesse comercial no ferramental em volta, não no modelo. Diverge da fonte 2 na
   contagem de parâmetros.

4. `https://ai.meta.com/blog/segment-anything-model-3/` — anúncio do SAM 3.1 (27/03/2026).
   Sustenta: multiplexação de até 16 objetos por passe, 16 → 32 fps em H100, latência de 30 ms com
   100+ objetos, e os usos citados em produto (Instagram Edits, Marketplace, Aria Gen 2).
   **Confiabilidade:** comunicação institucional; datas e números de produto úteis, alegações de
   capacidade não verificadas de forma independente. A leitura devolveu uma data inconsistente,
   descartada (seção 8).

5. `https://www.eagleeyenetworks.com` — documentação do Smart Video Search em
   `https://developer.eagleeyenetworks.com/docs/video-search`. Sustenta: o efeito e2.2. A
   documentação descreve busca "como na web" e, ao mesmo tempo, enumera catálogos fechados de
   atributos (cor de peça superior e inferior, gênero; tipo/marca/cor de veículo; mochila, bolsa,
   mala, bicicleta) e a dependência de envio de imagens-chave para a nuvem da empresa.
   **Confiabilidade:** alta para o que é — documentação técnica do próprio fornecedor, que por isso
   mesmo não maquia a lista de atributos suportados. É a fonte mais valiosa do levantamento,
   justamente por contradizer o próprio marketing.

6. `https://www.edge-ai-vision.com/2026/01/on-device-llms-in-2026-what-changed-what-matters-whats-next/`
   — análise de inferência em borda, janeiro de 2026. Sustenta: banda de memória como gargalo
   dominante (50–90 GB/s em móvel contra 2–3 TB/s em data center, 30–50×), RAM efetiva abaixo de
   4 GB após o sistema operacional, e o quadro geral de modelos pequenos em dispositivo.
   **Confiabilidade:** alta; publicação técnica de aliança setorial, com números consistentes com
   especificação de hardware pública.

7. `https://www.extend.ai/resources/ocr-and-ai-vision-language-models-replacing-text-recognition`
   — material de fornecedor de processamento de documento, 03/08/2026. Sustenta: a existência da
   oferta comercial de leitura sem OCR em 2026, e — por leitura crítica — o argumento de que a
   evidência de qualidade disponível é autorreferente. **Confiabilidade: baixa como evidência de
   desempenho**, por ser vendor com benchmark próprio, sem comparação com concorrentes e sem
   verificação de terceiro. Usada como sinal de mercado, não como medida.

8. `https://about.fb.com/news/2026/05/meta-ai-wearables-changing-the-game-for-disabled-people/`
   — anúncio de acessibilidade em óculos de IA, maio de 2026. Sustenta e6: chamada em grupo com Be
   My Eyes, gestão de chamadas por voz, legendas em tempo real no Ray-Ban Display, o Wearables
   Device Access Toolkit e os aplicativos de terceiros (OOrion, Aira). **Confiabilidade:**
   comunicação institucional com depoimentos selecionados; boa para "o que foi lançado", fraca para
   "quanto funciona" e para escala de uso.

9. `https://desinformante.com.br/votacao-do-marco-da-ia-fica-para-2026-em-meio-a-impasses-politicos-e-criticas-ao-texto`
   — reportagem de 19/12/2025 sobre o PL 2338/2023. Sustenta a nota sobre o Brasil: aprovação no
   Senado, adiamento da votação na Câmara para fevereiro de 2026, classificação de reconhecimento
   facial como risco excessivo com exceções amplas para segurança pública, e as críticas da
   sociedade civil quanto ao vácuo de salvaguardas e ao viés racial. **Confiabilidade:** veículo
   especializado em desinformação e políticas digitais, com posição editorial declarada a favor de
   salvaguardas — fatos de tramitação são verificáveis; a caracterização das críticas é reportagem
   de posição, e está atribuída como tal no texto.

### Afirmações sem fonte aberta — especulação ou dado de busca não verificado

- **Prazos e multas do AI Act europeu** (proibição em vigor desde 02/02/2025; conformidade de alto
  risco até agosto de 2026; multas de até € 35 milhões ou 7% do faturamento): vêm de resultados de
  busca, **não de página aberta**. Consistentes entre múltiplos resultados, mas não verificados na
  fonte primária. Tratar como provável, não como confirmado.
- **Caso Smart Sampa** (homem de 80 anos detido por 10 horas em abril de 2025 após alerta falso) e
  custo mensal do consórcio: vêm de resultado de busca, não de página aberta. Tratar como relato a
  confirmar.
- **DINOv3** (6× modelo, 12× dados em relação ao DINOv2; primeiro auto-supervisionado a superar
  fracamente supervisionados em sondagem ampla): resultado de busca, sem leitura primária. Não
  sustenta efeito nenhum.
- **Tamanho do mercado de rotulagem de dados** (US$ 2,61 bi em 2026 → US$ 7,02 bi em 2031, ~22% ao
  ano): relatório de consultoria visto em busca, não aberto, e de parte interessada. Citado com
  ressalva e apenas para sustentar ponto contrário ao entusiasmo.
- **YOLOE, YOLO-World, GLIP, OWL-ViT, Grounding DINO** e a alegação de que YOLO-World é ~20× mais
  rápido que Grounding DINO com 35,4 mAP em LVIS minival: resultados de busca, não abertos. A
  existência e a linhagem das famílias são de conhecimento estabelecido; os números específicos não
  foram verificados e por isso não aparecem no corpo do documento.
- **Todos os efeitos da seção 5, todos os cenários da seção 9 e os sinais da seção 6** são
  especulação estruturada desta skill. Não há fonte para o futuro. As fontes acima sustentam a
  âncora de presente (seção 3) e os critérios da seção 4 — nada além disso.

---

## 12. Anexo — o levantamento bruto

### 12.1 Buscas executadas

| # | Consulta | Rendeu |
|---|---|---|
| 1 | `SAM 3 Segment Anything with Concepts Meta open-vocabulary segmentation` | Sim — base de D1, levou às fontes 1, 2, 3, 4 |
| 2 | `open-vocabulary detection 2026 state of the art vision language model deployment` | Parcial — linhagem GLIP/OWL-ViT/Grounding DINO, YOLO-World, YOLOE; nenhuma página aberta |
| 3 | `OCR-free document understanding 2026 VLM replacing traditional OCR enterprise adoption` | Sim — base de D2, levou à fonte 7 |
| 4 | `EU AI Act proibição reconhecimento facial tempo real biometria categorização fevereiro 2025 aplicação 2026` | Parcial — prazos e multas, sem leitura primária |
| 5 | `PL 2338 marco legal inteligência artificial Brasil status 2026 reconhecimento facial câmeras Smart Sampa` | Sim — levou à fonte 9; caso Smart Sampa não confirmado em primária |
| 6 | `DINOv3 Meta self-supervised vision foundation model release` | Fraco — só contexto, nenhuma página aberta |
| 7 | `Meta Ray-Ban Display smart glasses 2026 always-on vision AI describe surroundings accessibility blind users` | Sim — base de D3/e6, levou à fonte 8 |
| 8 | `on-device vision language model edge 2026 smartphone NPU small VLM real-time open vocabulary` | Sim — gargalo de banda, levou à fonte 6 |
| 9 | `data labeling annotation industry 2026 impact foundation models auto-labeling jobs decline` | Sim — provocou a revisão de e1.1 (de extinção para migração) |
| 10 | `natural language video search surveillance camera describe suspect text query product 2026 AI video analytics` | Sim — levou à fonte 5, que produziu o efeito e2.2 |

### 12.2 Buscas que não deram em nada de útil

- Tentativa de achar adoção de vocabulário aberto em **produto brasileiro** (varejo, inspeção,
  saúde): nada encontrado que não fosse revenda de plataforma estrangeira. Registro como lacuna do
  levantamento, provavelmente por limitação de busca em inglês.
- Tentativa de achar **avaliação independente** (não-fornecedor, não-Meta) de leitura sem OCR em
  produção: nada. É o buraco de evidência mais sério deste mapa, e é o que rebaixa a confiança de D2.
- Nada encontrado sobre **custo por quadro de indexação de acervo de vídeo** em escala real, que é o
  número que decidiria se e3 acontece por indexação total ou por amostragem. O parágrafo em prosa da
  seção 5 sobre isso é raciocínio de ordem de grandeza, não dado.

### 12.3 Efeitos cortados, com o motivo

| Efeito escrito | Destino | Motivo |
|---|---|---|
| "O PDF deixa de existir até 2030" | descartado | Confunde o que o PDF faz (fixar aparência, servir de prova) com o que ele parece fazer (guardar texto) |
| "A profissão de anotador acaba" | revisado → e1.1 | Mercado de rotulagem crescendo; padrão observado é revisão, não extinção |
| "CVAT e Label Studio desaparecem" | descartado | Ferramenta de revisão de rótulo de máquina continua sendo ferramenta de anotação |
| "Toda imagem vira dado estruturado por padrão" | revisado → e3.1 | Indexar tudo custa mais que guardar tudo; o que sobrevive é "pode vir a ser estruturada depois" |
| "A educação muda com máquinas que veem" | cortado | Não é efeito, é ausência de análise |
| "As relações de trabalho se transformam" | cortado | Idem |
| "A noção de privacidade se redefine" | cortado | Idem — e já coberto, de forma específica, por e3.1.1 e e7.1 |
| "Museus e acervos culturais viram consultáveis por conceito" | cortado por escopo | Verdadeiro e interessante, mas é caso particular de e3; ramificar ali quebraria a especificidade |
| "Robôs domésticos passam a entender pedidos vagos" | cortado por fronteira | É o tema 9 (agentes corporificados), não este |
| "Reconstrução 3D a partir de conceito" | cortado por fronteira | É o tema 10 |

### 12.4 Rodadas descartadas de disrupção-raiz

- **"Modelos fundacionais de visão" como raiz** — rejeitada no teste 1 (melhoria, não ruptura: o
  clique continua sendo clique). Uma versão anterior deste mapa tinha SAM/DINOv2 como D1, com efeitos
  sobre custo de treino; foi inteira descartada quando o teste 1 foi aplicado com rigor. É a rodada
  mais cara que se perdeu, e ela serviu: obrigou a distinguir "segmentar melhor" de "segmentar por
  conceito", que é toda a diferença entre este tema e os anteriores.
- **"Indexação semântica de acervo" como raiz própria** — rebaixada a efeito (e3), por ser
  consequência direta de D1 e não romper nada sozinha.
- **"ORTHOS / percepção afetiva" como raiz** — rebaixada a sinal fraco, por falta de qualquer
  evidência de limiar cruzado. Registro que o enunciado da disciplina a oferecia como wildcard, e a
  tentação de promovê-la a raiz existiu; o teste 2 ("por que agora, e não há cinco anos?") não teve
  resposta concreta.
- **"Auto-rotulagem" como raiz** — rebaixada a efeito de primeira ordem (e1), com o desdobramento
  interessante preservado no sinal fraco 3 (o vocabulário aberto como compilador).

### 12.5 Nota de execução

Esta rodada foi executada sem interlocutor humano disponível. A entrevista do Passo 1 teve os itens
1 (horizonte: 2031) e 2 (recorte: quem projeta mídia e interação; global com nota sobre o Brasil)
satisfeitos pelo despacho, o que cumpre a condição de saída. Os itens 3, 4 e 5 foram preenchidos com
os padrões previstos pela própria skill — "nenhum descarte declarado além da régua da disciplina",
"neutro" e "levantar do zero" — e as suposições estão declaradas na seção 7.5, conforme a skill
exige de quem pula a entrevista.

A pesquisa usou busca e leitura de páginas reais. Nenhuma fonte foi inventada. Onde não havia fonte,
a afirmação está marcada como especulação, seja no corpo do texto, seja no fim da seção 11.
