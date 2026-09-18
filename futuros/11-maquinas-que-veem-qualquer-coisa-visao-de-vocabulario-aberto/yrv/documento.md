---
tema: "Máquinas que veem qualquer coisa: visão de vocabulário aberto"
slug: maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto
autor_login: yrv
zona_de_interesse: "Percepção e mídia sintética"
data: 2026-09-17
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 11
efeitos_ordem_3: 11
tecnologias_citadas: [SAM 3, SAM 3.1, SA-Co, Promptable Concept Segmentation, SAM 2, Segment Anything, DINOv3, DINOv2, YOLOE, YOLO-Worldv2, YOLO26, RF-DETR, OWLv2, OWL-ViT, Grounding DINO, Grounded-SAM, Grounded-SAM-2, Grounding DINO 1.5, GLIP, RegionCLIP, ViLD, Florence-2, LVIS, RF100-VL, Roboflow100-VL, COCO, LAE-80C, DIOR, FAIR1M, Donut, DeepSeek-OCR, DeepEncoder, DeepSeek3B-MoE-A570M, GOT-OCR2.0, MinerU2.0, MinerU2.5-Pro, PaddleOCR-VL, GLM-OCR, Mistral OCR 3, Mistral OCR 4, Qwen3-VL, Gemini 3 Pro, OmniDocBench, OlmOCRBench, MMDocBench, Meta Aria Gen 2, Machine Perception Services, Ray-Ban Meta, Meta Ray-Ban Display, Live AI, Be My AI, Be My Eyes, Seeing AI, Envision, Instagram Edits, Facebook Marketplace, Meta AI Vibes, CVAT, Label Studio, FiftyOne, Smart Sampa, Smart Sampa Cidadão, AI Act art. 5, PL 2338/2023, LGPD]
fontes: 26
confianca: media
experimento: "O dicionário que não existe — a turma escreve, às cegas e em separado, o vocabulário de conceitos de uma mesma cena real; mede-se a discordância entre as pessoas antes de qualquer máquina entrar, depois a discordância entre cada vocabulário e o que um modelo de vocabulário aberto devolve para ele, e por fim quanto a acurácia sobe quando o vocabulário é encolhido — o objetivo é localizar onde mora o erro de um sistema que vê por conceito: no modelo, na cena, ou na palavra que alguém escolheu"
skill_usada: futurizacao-yrv
publico_ok: false
---

## 1. Resumo

Por décadas um sistema de visão só reconhecia o que tinha sido treinado para reconhecer. A classe
era decidida antes do dado: alguém escolhia a taxonomia, alguém anotava, alguém treinava, e o
sistema ia para o mundo capaz de exatamente aquilo. Isso mudou — e o que mudou **não é a acurácia**.
É o momento em que a classe é decidida.

Em **19 de novembro de 2025** a Meta publicou o **SAM 3**, cuja tarefa nova tem nome próprio:
*Promptable Concept Segmentation* — dada uma frase nominal curta ("ônibus escolar amarelo"), o
modelo devolve máscara e identidade para **todas** as instâncias daquele conceito de uma vez, onde
o SAM 1 e o SAM 2 devolviam um objeto por prompt. Na avaliação SA-Co/Gold ele marca **cgF1 65,0
contra 34,3 do OWLv2** (+89,5%); na LVIS em modo zero-shot, **47,0 de mask AP contra 38,5** do
melhor anterior (+22,1%). O cartão do modelo no Hugging Face declara **75–80% do desempenho humano**
numa avaliação de **270 mil conceitos únicos**, e registra **1.966.279 downloads no último mês**. Em
**27 de março de 2026** saiu o **SAM 3.1**, que rastreia até 16 objetos numa passagem e dobra o
vídeo de 16 para 32 quadros por segundo numa H100. A linhagem sem rótulo anda junto: o **DINOv3**,
de **13 de agosto de 2025**, afirma superar o estado da arte especializado em várias tarefas **sem
nenhum ajuste fino**, com o objetivo declarado de "eliminar a necessidade de anotação manual".

Este mapa **recusa** duas coisas que o bloco da disciplina põe na mesma prateleira, e diz por quê.

**Recusa a compreensão de documento como imagem.** Ela passou. Em **24 de fevereiro de 2026** a
LlamaIndex publicou que o OmniDocBench está **saturado** — GLM-OCR a 94,6%, PaddleOCR-VL-1.5 acima
de 94%. Em **3 de agosto de 2026** o ranking da Roboflow já trazia PaddleOCR-VL-1.6 a **96,34% com
0,9 bilhão de parâmetros**. Em **23 de junho de 2026** a Mistral lançou o OCR 4 a **US$ 4 por mil
páginas** (US$ 2 em lote), depois de o OCR 3 sair a US$ 2 (US$ 1 em lote) e de a empresa declarar o
OCR como modelo **padrão** de compreensão de documento para milhões de usuários do Le Chat. Caminho
de instalação padrão, preço estável e decrescente, modos de falha documentados: pela régua da
disciplina, **isso é maduro**. Entra na seção 3 como substrato e **não vira raiz** na seção 4.

**Recusa a ideia de que vocabulário aberto substitui o modelo treinado.** O relatório *Vision AI
Trends 2026* da Roboflow, sobre **200 mil projetos**, **55 bilhões de predições por ano** e **250 mil
modelos ajustados** em circulação, diz o contrário com todas as letras: *"as empresas mais bem
sucedidas não estão dependendo de modelos gerais de IA — estão usando dados proprietários e únicos
que os modelos fundacionais nunca viram"*. E a evidência de fora do laboratório é dura: numa
avaliação de **13 de janeiro de 2026** sobre imagem aérea, os cinco melhores detectores de
vocabulário aberto desabam — **F1 de 0,276 no melhor caso (OWLv2), com 69% de falso positivo** —, e
o ganho de **15×** vem de **encolher o vocabulário de 80 para 3,2 classes**. O gargalo não é o
modelo: é a palavra.

O que sobrou, depois dessas duas recusas, são três deslocamentos.

**Primeiro: o vocabulário deixa de ser parâmetro de treino e vira parâmetro de execução.** A
competência que perde valor não é "fazer visão computacional": é **decidir a classe antes de ver o
dado** — a cadeia taxonomia → anotação → treino → implantação como pré-requisito para fazer uma
pergunta visual. E a porta de entrada é **mercado novo**: a pergunta visual de uso único, que nunca
valeu um conjunto anotado, passa a ser viável. Isso não é a mesma coisa mais rápido; é uma classe
de pergunta que não existia como produto.

**Segundo: o acervo de imagem já existente vira consultável retroativamente.** Nenhuma câmera nova
precisa ser instalada. O que muda é que a foto tirada em 2019 responde, em 2029, a uma pergunta que
ninguém tinha em 2019. E o que uma imagem permite **inferir** excede o que ela **mostra**: Tömekçe,
Vero, Staab e Vechev (NeurIPS 2024) medem modelos de visão-linguagem inferindo atributos pessoais
de imagens onde o atributo **não está diretamente representado**, com até **77,6% de acurácia**, e
observam que a acurácia escala com a capacidade geral do modelo.

**Terceiro: a percepção aberta desce para o corpo.** O Aria Gen 2 da Meta, descrito em **4 de junho
de 2025**, pesa **74–76 g** e roda odometria visual-inercial, rastreamento ocular e rastreamento de
mão **num coprocessador dentro da haste** — mas é aparelho de pesquisa, com envio a candidatos
qualificados previsto para o **segundo trimestre de 2026**. O que está no mercado são os Ray-Ban
Meta, **2 milhões de unidades vendidas até fevereiro de 2025**. Entre uma coisa e outra há um vão
de silício que este mapa **não** dá por vencido: o SAM 3 ocupa **3,45 GB**.

Os três juntos mudam a pergunta de quem projeta mídia e interação. Ela deixa de ser *o que o meu
sistema consegue reconhecer* e passa a ser **quem escreve a lista de conceitos, quem audita o que
ela quer dizer, e quem pode fazer uma pergunta nova a uma imagem que já existe**. É sobre isso que
este mapa trata.

Duas coisas que o mapa **não** afirma, e convém dizer antes. Não afirma que a adoção passou da
maioria inicial: 1,97 milhão de downloads/mês de um modelo é mercado de quem constrói, não de quem
usa, e os 250 mil modelos ajustados da Roboflow dizem que a prática dominante continua sendo treinar
para a sua classe. E não afirma que o vocabulário aberto vence por qualidade — nos números
disponíveis ele **perde** para o modelo treinado na classe do cliente, e o que ele ganha é a
pergunta que nunca teve dono.

## 2. O tema

**O que é.** Sistemas de visão cuja lista de coisas reconhecíveis **não é fixada no treino**.
Segmentar por conceito descrito em linguagem, detectar por frase nominal, localizar o referente de
uma expressão. O objeto do tema é o deslocamento do vocabulário: de dentro dos pesos para dentro da
chamada.

**O que não é — a fronteira deste mapa.** A pergunta 1 da entrevista não foi respondida com uma
fronteira; construí três cortes a partir do bloco da disciplina e declaro aqui, porque foram eles
que impediram o mapa de virar "o futuro da IA":

1. **Não é reconstruir o mundo em 3D.** Geometria e aparência a partir de sensor comum é o tema 10.
   Aqui o produto da percepção é **rótulo e recorte**, não malha nem splat.
2. **Não é o robô que age a partir do que vê.** Política de ação, corporificação e modelo de mundo
   são o tema 9. Aqui a percepção para no ponto em que vira **resposta**, não movimento.
3. **Não é geração de imagem.** O `Grounded-Segment-Anything` encadeia detecção, segmentação e
   geração; este mapa fica com as duas primeiras. Mídia sintética como produto é outro tema.

E um quarto corte, este meu, que é a recusa da Fase 2 antecipada: **não é parsing de documento.**
Página virando markdown estruturado é serviço de commodity em 2026, com preço tabelado e benchmark
saturado. Entra na seção 3 como linha de base para medir o que mudou, e não vira raiz.

**Onde passa a linha, então.** Maduro: classificação de imagem, detecção com classes fixas, OCR
tradicional, segmentação promptável por ponto e caixa (SAM 1 e 2), e — esta é a divergência deste
mapa com o bloco da disciplina — **parsing de documento por modelo de visão-linguagem**. Emergente:
**segmentar, detectar e consultar por conceito escrito**, e tudo o que decorre de o vocabulário
passar a ser escrito por alguém, em tempo de execução, sem revisão.

**Horizonte.** 2031. É prazo curto para norma e longo para modelo, e a assimetria é deliberada: a
raiz 1 já tem produto e o que se mapeia é consequência; a raiz 3 depende de silício e de lei, que
andam em anos.

**Público.** Quem projeta mídia e interação — quem decide o que um sistema pergunta a uma imagem, e
o que faz com a resposta. Não é mapa para legislador nem para investidor, embora as seções 6 e 9
toquem no que eles decidem.

**Recorte.** Global, com uma nota sobre o Brasil na seção 3. A nota não é enfeite: o Brasil opera
uma das maiores redes municipais de videomonitoramento com reconhecimento facial do mundo, tem
número público de erro dela, e discute no Congresso um texto que classifica a tecnologia como risco
excessivo e depois abre exceções que, segundo quem o critica, cobrem todos os usos correntes.

**Viés.** Neutro, conforme a resposta 6. Onde o mapa aposta contra a euforia do tema, é por causa de
número aberto nesta sessão, não por temperamento.

**Falsificador.** A resposta 7 foi explícita, e é dela que sai o desenho da seção 7: o mapa cai se
aparecer evidência de que a adoção passou da maioria inicial de Rogers, **ou** de que a tecnologia
não rompe nada — só melhora o que existe. As duas hipóteses foram testadas na Fase 5, e a segunda
matou um efeito e rebaixou dois.

## 3. Onde isso está hoje

Esta seção é a âncora no presente. Tudo aqui foi aberto nesta sessão e está na seção 11 com data. O
que não consegui apurar está escrito como não apurado, na seção 8.

### 3.1 O substrato maduro — o que este mapa recusa como tendência

**Detecção e segmentação com classes fixas.** O relatório *Vision AI Trends 2026* da Roboflow
analisa **200 mil projetos** e contabiliza **55 bilhões de predições por ano**, **1 bilhão de
imagens** em conjuntos de treino ativos e **250 mil modelos ajustados** em circulação, com mais de um
milhão de engenheiros e metade das empresas da Fortune 100 construindo sobre a plataforma. A
distribuição por setor é de indústria instalada, não de fronteira: **68%** dos projetos de manufatura
em redução de defeito em laço fechado, **66%** dos de saúde em imagem e diagnóstico, **32%** dos de
energia em inspeção de infraestrutura crítica, **41%** dos de agricultura em classificação de
produto fresco. Isso é o H1 — o sistema dominante. Não tem futuro a mapear: tem roadmap.

**Segmentação promptável por geometria.** O SAM 1 e o SAM 2 aceitam ponto, caixa e máscara. Estão em
todo pipeline e em toda ferramenta de anotação. Maduro.

**Parsing de documento por modelo de visão-linguagem.** Este é o item que o bloco da disciplina põe
no emergente e que este mapa **recusa**, com o teste que reprovou nomeado na seção 4. Os números:

- **24/02/2026** — LlamaIndex publica que o **OmniDocBench está saturado**: GLM-OCR a **94,6%**,
  PaddleOCR-VL-1.5 acima de **94%**, Gemini 3 Pro a **90,3%**.
- **23/06/2026** — Mistral lança o **OCR 4**: **85,20** no OlmOCRBench, **93,07** no OmniDocBench,
  **US$ 4 por mil páginas** na API e **US$ 2** em lote; o OCR 3 saiu a **US$ 2 / US$ 1**. A empresa
  declara ter tornado o OCR o **modelo padrão** de compreensão de documento no Le Chat.
- **03/08/2026** — o ranking da Roboflow traz **PaddleOCR-VL-1.6 a 96,34% com 0,9 B de
  parâmetros**, **MinerU2.5-Pro a 95,75% com 1,2 B**, **GLM-OCR a 95,22% com 0,9 B** — e um
  generalista de **235 B**, o Qwen3-VL, ficando atrás, em **89,78%**.

Três fornecedores independentes acima de 95%, preço por página caindo de ordem em dezoito meses,
modelos de menos de 1 bilhão de parâmetros batendo generalistas de 235 bilhões: é a assinatura de
uma tecnologia que virou peça. O que **continua aberto** é o que a própria LlamaIndex diz — *"existe
uma cauda longa enorme de casos extremos de documento em que até os melhores modelos de compreensão
visual ainda falham"*: apresentação financeira complexa, relatório de pesquisa de mercado, peça
jurídica, sinistro de seguro, formulário de admissão, manuscrito. A cauda longa é real; ela não faz
do parsing uma tendência, faz dele um produto com defeito conhecido.

### 3.2 O emergente — vocabulário aberto, e o que já está no ar

**A linhagem do conceito como interface.**

- **19/11/2025** — **SAM 3**. Tarefa nova: *Promptable Concept Segmentation*. Prompt = frase nominal
  curta, exemplar de imagem, ou os dois. Devolve máscara e identidade para **todas** as instâncias.
  Na SA-Co/Gold, **cgF1 65,0 contra 34,3 do OWLv2** (+89,5%); na LVIS zero-shot, **47,0 de mask AP
  contra 38,5** (+22,1%). O artigo (arXiv 2511.16719, submetido em 20/11/2025, revisado em
  28/03/2026, Nicolas Carion e outros 37 autores) declara que o modelo **dobra a acurácia dos
  sistemas existentes** em PCS de imagem e de vídeo, sobre um conjunto de **4 milhões de rótulos de
  conceito únicos, com negativos duros**. O treino declarado na documentação de terceiros soma
  **5,2 milhões de imagens** com 4 M de frases nominais, **52,5 mil vídeos** com 24,8 mil frases, e
  **1,4 bilhão de máscaras sintéticas**.
- **19/11/2025 em diante** — o modelo no Hugging Face declara **75–80% do desempenho humano** numa
  avaliação de **270 mil conceitos únicos**, e **1.966.279 downloads no último mês**. É a evidência
  de adoção mais forte que consegui abrir — e é adoção de quem constrói, não de quem usa.
- **27/03/2026** — **SAM 3.1**. Multiplexação de objeto: até **16 objetos numa passagem**, vídeo de
  **16 para 32 quadros por segundo numa única H100**, cerca de **7× mais rápido com 128 objetos**.
  Quatro meses para dobrar a velocidade.
- **Em produto de massa.** A Meta declara o SAM 3 rodando em efeitos do **Instagram Edits** aplicados
  a pessoa ou objeto específico, no **"View in Room"** do Facebook Marketplace, em experiências de
  criação do **Meta AI Vibes** e do meta.ai, e na segmentação de imagem em primeira pessoa do **Aria
  Gen 2**. Isto é importante e este mapa não o esconde: **o artefato já está em produto de massa**.
  A seção 4 trata do porquê de isso não o tornar maduro no sentido da régua.

**A linhagem sem rótulo.** O **DINOv3** (arXiv 2508.10104, 13/08/2025) é modelo fundacional
auto-supervisionado que, nas palavras do resumo, *"supera o estado da arte especializado numa ampla
gama de cenários, sem ajuste fino"*, com a técnica de **Gram anchoring** para impedir a degradação
dos mapas densos em treinos longos, e o objetivo declarado de **eliminar a necessidade de anotação
manual**. Ele não fala linguagem: ele fornece a característica visual sobre a qual o conceito é
ancorado.

**A linhagem em tempo real.** O **YOLOE** (Tsinghua, ICCV 2025) faz detecção e segmentação de
vocabulário aberto **na faixa de velocidade do YOLO fechado**, com três modos — texto, exemplar
visual, e sem prompt, usando um vocabulário embutido de **4.585 nomes**. Contra o YOLO-Worldv2-S,
declara **+3,5 AP com um terço do custo de treino e 1,4× a velocidade de inferência**. E a
documentação é honesta sobre o preço: na LVIS minival a 640 px, o topo da família fica em **40,6 /
38,5 de mAP50-95** com prompt, e o modo sem prompt em **29,9 / 31,1** — a própria página diz que
*"a acurácia zero-shot fica bem abaixo de um modelo treinado nas suas classes"*, que as categorias
raras ficam atrás, que prompts dependentes de estado, contexto ou comparação **não têm âncora
confiável**, e que vocabulário grande custa de **19% a 89%** de sobrecarga na passagem direta.

**A linhagem que ainda serve.** O `Grounding DINO` (IDEA Research, março de 2023, Apache 2.0) e o
`Grounded-SAM` (janeiro de 2024, Apache 2.0) continuam sendo o caminho prático de muita gente, e o
`Grounded-SAM-2` estendeu para vídeo. A Roboflow, em **16/01/2026**, lista a família inteira — GLIP,
RegionCLIP, OWL-ViT/OWLv2, YOLO-World, OV-DINO, ViLD, PromptDet, Florence-2 — e é explícita sobre
onde o vocabulário aberto compensa: *"conceitos de cauda longa, prototipagem rápida, e sistemas em
que o conjunto de rótulos precisa evoluir sem retreinar"*. Note o que não está nessa lista:
produção de alto volume com classe estável.

### 3.3 O que já quebra hoje — o contraponto que segura o mapa

**Vocabulário grande mata o desempenho.** Christos Tsourveloudis, em **13/01/2026** (arXiv
2601.22164), avaliou cinco detectores de vocabulário aberto no conjunto LAE-80C, de imagem aérea. O
melhor, o OWLv2, marcou **F1 de 27,6% com 69% de falso positivo**. Por conjunto, o F1 variou de
**0,53 no DIOR a 0,12 no FAIR1M**. O achado que interessa não é a queda: é a **causa**. Reduzir o
vocabulário de **80 para 3,2 classes** rendeu **15× de melhora**, e engenharia de prompt rendeu
quase nada. A conclusão do autor é que *"a confusão semântica é o gargalo principal"* — isto é, o
problema não está no que o modelo vê, está em quantas palavras parecidas você pediu que ele
distinguisse ao mesmo tempo.

**Quem opera em escala continua treinando.** O relatório da Roboflow, sobre 200 mil projetos, diz
que *"as empresas mais bem sucedidas não estão dependendo de modelos gerais de IA — estão usando
dados proprietários e únicos que os modelos fundacionais nunca viram"*, e conta **250 mil modelos
ajustados** em circulação. Não abri nenhuma fonte que meça a fatia de produção servida por
vocabulário aberto sem ajuste; **esse número eu não tenho**, e digo isso na seção 8.

**O mercado de anotação cresce, não encolhe.** A Mordor Intelligence, em relatório atualizado em
**11/09/2026**, põe o mercado de rotulagem de dados em **US$ 2,61 bilhões em 2026** indo a **US$ 7,02
bilhões em 2031**, com **CAGR de 21,94%**. O fluxo manual respondia por **42,31% da receita de
2025**, e as abordagens auto-supervisionadas e programáticas crescem a **22,16% ao ano** — isto é,
a composição muda e o bolo cresce. O relatório descreve o arranjo que de fato aconteceu: *"os
desenvolvedores agora pré-rotulam quadros usando modelos fundacionais e depois põem humanos no laço
sobre as fatias ambíguas"*, e acrescenta que *"os reguladores ainda assim exigem auditabilidade"*,
o que preserva supervisão humana nos setores de alto risco. É a morte, por dado, da hipótese
preguiçosa de que vocabulário aberto dispensa anotação.

**O aparelho não cabe no corpo.** O SAM 3 tem **3,45 GB**. A latência declarada diverge entre fontes
(ver seção 8). O Aria Gen 2 roda percepção on-device de verdade — VIO, olhar, mão — em **74–76 g**,
mas o que ele roda é **geometria e sinal fisiológico**, não conceito aberto; e é aparelho de
pesquisa, com candidaturas abertas e distribuição ampla prevista para o **2T/2026**.

### 3.4 O que a norma já diz — e o buraco que ela deixa

**União Europeia.** O artigo 5 do AI Act aplica-se desde **2 de fevereiro de 2025** e proíbe o uso
de sistemas de **identificação biométrica remota em tempo real** em espaços acessíveis ao público
para fins de aplicação da lei, salvo três exceções estritas — busca dirigida de vítima específica,
ameaça iminente e substancial à vida ou ameaça genuína de atentado, e localização de suspeito de
crime do Anexo II punível com pelo menos quatro anos. Disposições alteradas passam a valer em **2 de
dezembro de 2026**. **O que o artigo 5 não faz:** ele não proíbe **detectar ou descrever atributo
não biométrico** — roupa, objeto, comportamento — em espaço público. A proibição é sobre
identificar *quem*; a percepção aberta responde *o quê*, e passa por baixo.

**Brasil.** O **PL 2338/2023** foi aprovado pelo Senado em 10/12/2024 e está na Câmara. Em
**08/12/2025** a Coalizão Direitos na Rede e a campanha Tire Meu Rosto da Sua Mira publicaram
posicionamento pedindo ao relator que *"reconsidere sua posição e crie mecanismos de regulação do
uso de tecnologias de reconhecimento facial em espaços públicos"*: o texto classifica reconhecimento
facial como **risco excessivo** (art. 13, VII), mas abre um rol de exceções que, segundo o
documento, *"abarcam todos os usos correntes destas tecnologias no contexto de segurança pública e
persecução penal"*, criando um **vácuo regulatório** — porque nenhuma estrutura de governança regula
justamente as exceções. O relator Aguinaldo Ribeiro argumentou que as restrições seriam restritivas
demais. **Não consegui apurar** o desfecho da votação na Câmara.

**Nota sobre o Brasil — o caso vivo.** O **Smart Sampa**, de São Paulo, opera mais de **25 mil
câmeras**. Em **04/02/2026** o Brasil de Fato divulgou nota técnica do Laboratório de Políticas
Públicas e Internet (Lapin), do Instituto Peregum e da Rede Liberdade, *"Smart Sampa: Transparência
para quem? Transparência de quê?"*, compilada do Relatório de Transparência da prefeitura (junho de
2025) e de pedidos de acesso à informação: entre **21/11/2024 e 21/05/2025**, de **82 pessoas
levadas a distritos policiais**, **53** foram liberadas por ausência de baixa no BNMP, **6** por
inconsistência cadastral no próprio banco do Smart Sampa e **23** por **inconsistência do
reconhecimento facial**. A Secretaria Municipal de Segurança Urbana respondeu que as câmeras são
usadas exclusivamente para segurança pública e que *"todos os alertas gerados pelo sistema são
obrigatoriamente validados por agentes humanos"*.

E há o caso que antecipa a raiz 2 melhor que qualquer previsão. Em **03/08/2026** a Data Privacy
Brasil, em análise de Paula Uematsu Arruda, examinou a política de privacidade do aplicativo **Smart
Sampa Cidadão**: ela declara como finalidade **"exclusivamente"** a captura de **placa de veículo**
— e a fotografia incidental captura **rosto** de motorista, passageiro e pedestre, dado sensível
pela LGPD, sem qualquer salvaguarda no documento. A cláusula de retenção diz que *"todos os dados
recebidos podem ser armazenados pela central"*, sem prazo, critério de necessidade ou procedimento
de exclusão. **A finalidade declarada é uma; o que a imagem permite perguntar é outra.** Esse é,
literalmente, o mecanismo da raiz 2, já em operação, num aplicativo municipal, em 2026.

### 3.5 Acessibilidade — o uso que já é real, e que quase ninguém conta como tendência

O Be My Eyes lançou o **Be My AI** em **março de 2023**, sobre o GPT-4, para descrever imagem a
pessoa cega ou com baixa visão; a página do projeto declara mais de **10 milhões de voluntários** e
**1 milhão de pessoas cegas ou com baixa visão** usando o aplicativo (o próprio infobox traz números
menores — 9 milhões e 900 mil —, divergência que registro em vez de escolher), suporte a mais de
**180 idiomas**, parceria com a **Microsoft** em novembro de 2023, integração aos **Ray-Ban Meta**
em **2024** para descrição sem as mãos, piloto com a **Hilton** em outubro de 2024 e com a **Tesco**
no Reino Unido a partir de **9 de outubro de 2025**. Este é o caso em que a percepção aberta já
mudou a vida de alguém — e é o caso que o mapa usa para calibrar prazo, porque mostra que o caminho
de adoção passa por **parceria de varejo e de hotelaria**, não por decreto.

## 4. As disrupções-raiz

Três, conforme a resposta assumida à pergunta 8 da entrevista. Cada uma com os três campos que a
Fase 3 exige — e o segundo, *por que agora e não há cinco anos*, com sinal datado.

### R1 — O vocabulário deixa de ser parâmetro de treino e vira parâmetro de execução

**O que rompe.** Rompe o pressuposto de que **a classe é decidida antes do dado**. Com ele, rompe a
cadeia taxonomia → anotação → treino → implantação **como pré-requisito para fazer uma pergunta
visual**. A competência que perde valor não é a de treinar modelo — essa continua valiosa e a seção
3.3 mostra que continua sendo a prática dominante em produção. A competência que perde valor é a de
**montar, sob encomenda, o conjunto anotado que autoriza uma pergunta nova**: o ciclo de semanas
entre "quero saber X sobre estas imagens" e "o sistema sabe responder X".

**Por onde entra.** Por **mercado novo**, não pela baixa. Os não-clientes que passam a ser clientes
são as perguntas visuais de **uso único e resposta única** — contar uma vez, conferir uma vez,
achar uma vez — que nunca justificaram um conjunto anotado e por isso nunca foram feitas a máquina
nenhuma. Não é o cliente do incumbente sendo atendido mais barato; é uma pergunta que não tinha
fornecedor.

**Por que agora e não há cinco anos.** Sinal datado, três camadas:
- **19/11/2025**, SAM 3: a tarefa de devolver *todas* as instâncias de um conceito descrito em
  linguagem deixa de ser composição de duas ferramentas e vira tarefa nativa, com salto medido —
  **cgF1 65,0 contra 34,3**, **+89,5%** sobre o OWLv2 na SA-Co/Gold, e **47,0 de mask AP zero-shot
  na LVIS contra 38,5**.
- **27/03/2026**, SAM 3.1: **16 → 32 fps** em vídeo numa H100 em quatro meses. A curva de custo
  está se movendo agora, não em retrospecto.
- **13/08/2025**, DINOv3: a característica visual de qualidade estado-da-arte **sem ajuste fino e
  sem rótulo** vira insumo aberto.
Há cinco anos, em 2021, o vocabulário aberto era CLIP mais heurística: dava para classificar, não
para segmentar exaustivamente por conceito com identidade de instância.

**O que ainda falta acontecer.** Falta **o conceito virar auditável**. Não existe instrumento que
diga o que um modelo entende por "capacete", nem norma sobre o que uma frase nominal significa. A
medida disso é o achado de 13/01/2026: o desempenho desaba quando o vocabulário cresce, e **15× de
ganho vem de encolher a lista** — ou seja, o resultado depende de uma escolha de palavras que hoje
ninguém versiona, testa ou assina. Enquanto o vocabulário for texto solto numa chamada de API, o
sistema não é auditável, e sem auditabilidade ele não entra onde há responsabilidade.

### R2 — O acervo de imagem já existente vira consultável retroativamente

**O que rompe.** Rompe o pressuposto de que **uma imagem só responde às perguntas previstas quando
ela foi feita**. Com ele, rompe a equivalência prática entre *guardar* e *não usar*: o arquivo
parado deixa de ser custo de disco e vira ativo consultável, sem nova captura, sem novo consentimento
e sem nova instalação. E rompe a definição operacional de privado numa fotografia — que era "não
aparece" e passa a ser "não é inferível".

**Por onde entra.** Por **mercado novo**. O cliente é quem já tem imagem e nunca teve como perguntar
nada a ela: o arquivo de câmera de segurança, a pasta de fotos de vistoria, o acervo de jornal, o
histórico de um aplicativo. Nenhum fornecedor de visão computacional disputava esse acervo, porque
não havia pergunta que valesse o custo de anotá-lo.

**Por que agora e não há cinco anos.** O sinal aqui é de **preço**, e é datado:
- **23/06/2026**: Mistral OCR 4 a **US$ 4 / mil páginas** (US$ 2 em lote), depois de o OCR 3 sair a
  **US$ 2 / US$ 1**. Duas faixas de preço em menos de um ano, para baixo, em serviço de página.
- **21/10/2025**, DeepSeek-OCR: **200 mil páginas por dia numa única A100-40G**, e compressão
  óptica com **97% de precisão até 10×** e **~60% a 20×**.
- **NeurIPS 2024**, Tömekçe, Vero, Staab e Vechev: modelos de visão-linguagem inferem atributo
  pessoal de imagem "benigna" com até **77,6% de acurácia**, com o atributo **não representado
  diretamente** na foto, e a acurácia **escala com a capacidade geral do modelo**.
Há cinco anos, reprocessar um acervo exigia definir a classe (R1) e pagar anotação; hoje exige
escrever uma frase e pagar centavos por página.

**O que ainda falta acontecer.** Não falta nada técnico — e é isso que torna esta raiz desconfortável.
Falta **a decisão jurídica de que consultar não é o mesmo que guardar**. Hoje a finalidade declarada
no consentimento se refere à captura, e o caso do Smart Sampa Cidadão mostra o vão: finalidade
declarada "exclusivamente placa", captação de rosto, retenção sem prazo. A precondição faltante é
uma regra que trate **a consulta** como tratamento autônomo, com finalidade própria. Sem ela, todo
acervo guardado com um propósito responde, sem novo ato, a qualquer propósito futuro.

### R3 — A percepção aberta desce para o corpo

**O que rompe.** Rompe o pressuposto de que **ver é um ato privado que não deixa registro**, e de
que o conhecimento de domínio para o trabalho visual — reconhecer o defeito, o documento errado, a
peça faltante — mora na cabeça de quem olha. Se o vocabulário vai no aparelho, o conhecimento vai
junto, e quem olha não precisa mais sabê-lo.

**Por onde entra.** Pela **baixa do mercado**, e aqui a distinção importa. O incumbente é o inspetor,
o conferente, o triador, o revisor — trabalho visual pago por atenção treinada. A percepção aberta
no corpo entra atendendo mal, primeiro, quem o incumbente não atende: o trabalhador sem formação no
domínio, o turno da madrugada, a empresa que não tem inspetor. Entra pior e mais barato, como manda
o padrão.

**Por que agora e não há cinco anos.** Sinal datado, com a ressalva de que esta é a raiz mais fraca
das três e o mapa diz isso:
- **04/06/2025**, Aria Gen 2: **74–76 g**, quatro câmeras de visão computacional, e VIO,
  rastreamento ocular e rastreamento de mão **num coprocessador dentro do aparelho**. Candidaturas
  abertas; distribuição ampla prevista para o **2T/2026**.
- **27/03/2026**, SAM 3.1: **32 fps** de vídeo com multiplexação, e SAM 3 declarado rodando sobre
  imagem em primeira pessoa do Aria Gen 2.
- **2 milhões** de Ray-Ban Meta vendidos **até fevereiro de 2025**, e o Be My AI integrado a eles
  desde **2024** — a função de descrever o mundo já está no rosto de gente, para acessibilidade.
Há cinco anos não havia coprocessador de percepção em armação de 75 gramas nem modelo de conceito
aberto para alimentar.

**O que ainda falta acontecer.** Falta **silício**, e falta **decisão normativa**. O SAM 3 ocupa
**3,45 GB** e roda em servidor; nada disso cabe hoje numa haste. E o AI Act, que proíbe
identificação biométrica remota em tempo real desde 02/02/2025, **não proíbe descrever atributo não
biométrico** — de modo que a norma existente regula a pergunta que a percepção aberta **não** faz, e
deixa aberta a que ela faz. O que se reporta sobre a geração seguinte é relato, não produto: em
**08/05/2025** o UploadVR, citando *The Information*, descreveu funções de "super sensing" com Live
AI contínuo por **horas** em vez dos ~30 minutos atuais, e reconhecimento facial "em exploração",
para aparelhos de 2026. **Isso é rumor, e entra no mapa como rumor.**

### 4.1 O que foi recusado, e com que teste

A Fase 2 da skill exige nomear o teste que reprovou cada candidata. Recusei quatro:

| Candidata | Classificação | Teste que decidiu |
|---|---|---|
| Classificação de imagem e detecção com classes fixas | **MADURO** | **T5** — caminho de instalação padrão, 250 mil modelos ajustados em circulação, 55 bilhões de predições/ano, falhas documentadas |
| OCR tradicional | **MADURO** | **T5** — idem, e substituído por commodity mais barata sem que nada mude de natureza |
| Segmentação promptável por ponto e caixa (SAM 1/2) | **MADURO** | **T5** — em toda ferramenta de anotação, preço e falhas conhecidos |
| **Parsing de documento por VLM ("sem OCR")** | **MADURO** | **T5** — três fornecedores acima de 95% no OmniDocBench, benchmark declarado saturado em 24/02/2026, preço tabelado e caindo (US$ 2 → US$ 4 por mil páginas com o dobro de capacidade), modelo padrão no Le Chat, cauda longa documentada |

E classifiquei **Three Horizons** assim, porque é aqui que o erro que a régua persegue aparece:

- **H1** — detecção e segmentação com classes fixas em produção; OCR tradicional.
- **H2−** — **parsing de documento por VLM**, e o vocabulário aberto usado como **acelerador de
  anotação** (pré-rotular e mandar o humano arbitrar). As duas coisas **escoram o H1**: fazem a
  cadeia atual durar mais e ficar mais barata, e é exatamente por isso que se disfarçam de
  tendência. O relatório da Mordor descreve esse arranjo como o padrão do mercado.
- **H2+** — o conceito como interface (R1) e a consulta retroativa ao acervo (R2). Abrem caminho
  para um arranjo diferente e já têm artefato.
- **H3** — a percepção aberta contínua no corpo (R3). Visível em bolsão — Aria Gen 2, acessibilidade
  no Ray-Ban — e desalinhada com o presente em energia, silício e norma.

**Uma consequência que a distinção emergente × disruptivo obriga a aceitar, e que este mapa aceita:**
o SAM 3 **já está em produto de massa** (Instagram Edits, Marketplace, Vibes). Isso não o torna
maduro pela régua, porque ali ele serve **melhor ao mesmo cliente do incumbente** — é sustentação,
não disrupção: o efeito do Instagram já existia, ficou melhor. O disruptivo está no outro lado, na
pergunta que ninguém fazia. Se em 2029 o uso dominante do vocabulário aberto continuar sendo
melhorar efeito de rede social e pré-rotular dataset, **a resposta 7 da entrevista terá sido
satisfeita pela segunda via** — a tecnologia não rompeu nada, só melhorou o que existe — e este
mapa terá errado.

## 5. A roda dos futuros

Método: **Futures Wheel** (Jerome C. Glenn, 1971; entrada na literatura em 1972). A árvore abaixo é
o resultado **depois** dos cortes da Fase 5 — cinco efeitos foram mortos e três rebaixados de
confiança, e todos estão na seção 12 com o `id` original e a prova que os matou. A literatura da
roda **não traz regra de parada**; a que uso é minha e está declarada: **expande-se um nó só se o
filho mudar de ator ou de mecanismo em relação ao pai.** Paro o galho quando o filho é o pai em
outro volume, quando exige duas precondições não validadas ao mesmo tempo, quando já é verdade hoje,
ou quando só faz sentido com duas raízes.

```yaml
roda:
  - disrupcao: O vocabulario deixa de ser parametro de treino e vira parametro de execucao, e a classe passa a ser decidida depois de ver o dado
    efeitos:
      - id: e1
        ordem: 1
        efeito: O ciclo de um sistema de visao encolhe de montar conjunto anotado para escrever lista de conceitos, e o artefato central de projeto passa a ser o vocabulario em vez do dataset
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O trabalho humano de anotacao deixa de produzir rotulo e passa a produzir arbitragem, porque o que sobra para a pessoa e exatamente o caso em que o conceito e ambiguo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O contrato de fornecimento de visao passa a especificar o vocabulario e os seus negativos duros em vez de acuracia media, porque acuracia deixa de ser comparavel quando a classe muda em execucao
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Aparece o oficio de curador de vocabulario visual, que escreve, testa e versiona a lista de conceitos de um sistema como hoje se versiona um esquema de banco
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A formacao em design e em computacao passa a ensinar especificacao de conceito como disciplina propria, ao lado de modelagem de dados
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A pergunta visual de uso unico passa a ser economicamente viavel, e aparece uma classe de perguntas que nunca valeu um conjunto anotado e por isso nunca foi feita a maquina nenhuma
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Vistoria, conferencia e contagem viram consulta avulsa contratada por evento em vez de sistema instalado, e o fornecedor de visao passa a vender resposta e nao software
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O laudo visual passa a carregar o vocabulario consultado como parte da prova, porque sem ele nao se sabe o que foi procurado nem o que foi deixado de fora
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O gargalo de um projeto de visao migra do dado para a formulacao, e saber o que perguntar passa a valer mais que saber treinar
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: A avaliacao de sistema de visao sai do benchmark publico e vira conjunto-ouro privado por cliente, porque o benchmark satura antes de o problema do cliente ser resolvido
                sinal: medio
                prazo: 2031
                confianca: baixa
  - disrupcao: O acervo de imagem ja existente vira consultavel retroativamente, sem nova captura e sem novo consentimento
    efeitos:
      - id: e3
        ordem: 1
        efeito: Guardar imagem deixa de ser custo de disco e vira posicao de vantagem, porque o arquivo parado passa a responder perguntas que nao existiam quando ele foi feito
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A politica de retencao de imagem vira decisao de risco e nao de armazenamento, e apagar passa a ser uma escolha defensiva deliberada
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O prazo de retencao de imagem se separa em norma do prazo de retencao de dado textual, porque o risco de uma foto guardada deixa de ser proporcional ao que ela mostra
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A finalidade declarada na captura deixa de cobrir a consulta seguinte, e a disputa juridica migra do ato de filmar para o ato de perguntar
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: O aviso de captacao de imagem passa a declarar o vocabulario consultavel e nao apenas a existencia da camera, e a placa na parede vira documento com versao
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: O que uma foto permite inferir excede o que ela mostra, e privado numa imagem deixa de coincidir com nao aparece
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Publicar imagem vira decisao sobre o que ela autoriza inferir, e a checagem de inferencia entra no fluxo antes do botao de publicar como hoje entra a remocao de metadado
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A plataforma passa a responder pelo que o proprio sistema dela infere de uma foto e nao apenas pelo que o usuario publicou, e a inferencia vira ato editorial
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: A percepcao aberta desce para o corpo, e o campo de visao de quem veste o aparelho passa a ser rotulado continuamente
    efeitos:
      - id: e5
        ordem: 1
        efeito: O trabalho visual de vigilancia passa a ser executavel por quem nao domina o assunto, porque o conhecimento do dominio migra da cabeca da pessoa para a lista de conceitos do aparelho
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A senioridade em oficio visual se desloca de reconhecer para duvidar, e o valor do inspetor passa a ser saber onde o instrumento erra e nao o que o defeito parece
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A formacao tecnica em inspecao troca catalogo de defeito por metodo de falsificacao do proprio instrumento, e o exame passa a cobrar a deteccao do erro da maquina
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Descrever o ambiente deixa de ser recurso de acessibilidade separado e vira modo padrao de operar o aparelho, porque a mesma funcao serve a quem nao ve e a quem esta de maos ocupadas
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: A descricao do ambiente passa a ser exigivel como acessibilidade e nao ofertada como cortesia comercial, e some do controle de quem vende o aparelho
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Ver passa a deixar registro consultavel, e a assimetria deixa de ser entre camera e pessoa e passa a ser entre quem veste o aparelho e quem nao veste
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O espaco privado passa a regular o que o visitante pode perguntar ao proprio aparelho e nao apenas o que ele pode filmar
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Proibido consultar vira categoria contratual distinta de proibido filmar, e a placa na porta precisa dizer qual das duas
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A norma trata identificacao biometrica e descricao por conceito como coisas diferentes, e a segunda passa por baixo da primeira porque descrever nao e identificar
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: A regulacao se desloca do dado biometrico para a consulta, e passa a licenciar perguntas em vez de licenciar tecnologias
                sinal: fraco
                prazo: 2033
                confianca: baixa
```

### 5.1 Comentário em prosa — o que a árvore não representa

A roda é **árvore**, não grafo. Três coisas que apareceram na Fase 4 e que não cabem nela, e que por
isso ficam aqui, declaradas:

**Convergência 1 — o efeito que precisa de R1 e R2 juntas.** *O acervo passa a ser consultado por um
vocabulário escrito por quem não estava lá quando a imagem foi feita.* Este é o efeito mais
desconfortável do mapa e ele não entra na árvore, porque só existe se as duas raízes acontecerem: é
preciso que a classe seja decidida depois do dado (R1) **e** que o acervo seja consultável sem novo
ato (R2). Se só R1 acontecer, o vocabulário novo se aplica a captura nova, e há consentimento a
pedir. Se só R2 acontecer, o acervo responde às perguntas já previstas. Juntas, elas produzem a
situação em que **a pergunta é posterior a tudo** — à foto, ao consentimento, ao aviso, à lei que
valia. É onde o Smart Sampa Cidadão já está, e ele não precisou de 2031 para chegar lá.

**Convergência 2 — R1 e R3 se anulam parcialmente.** R1 diz que o valor migra para quem escreve o
vocabulário; R3 diz que o conhecimento de domínio migra para dentro do aparelho e a pessoa que olha
deixa de precisar sabê-lo. As duas não somam: se o aparelho vem com o vocabulário do fabricante, o
curador de vocabulário (e1.2) é **do fabricante**, não do local de trabalho, e e5.1 — o inspetor que
vale por duvidar — perde o objeto sobre o qual duvidar, porque não tem acesso à lista. Quem lê a
árvore soma e1.2 com e5.1 e conclui que sobram dois ofícios novos. Provavelmente sobra um, e ele é
de quem fabrica.

**Contra-reação não representável.** Há um laço negativo que a árvore não desenha: quanto mais o
acervo vira consultável (e3), mais cara fica a retenção em risco (e3.1), e mais gente apaga — o que
reduz o acervo e amortece a própria causa. A roda não tem notação para isso. É o limite do método,
está no `ESTUDO.md`, e não pretendo escondê-lo com prosa.

### 5.2 Nota sobre a calibração

`sinal` é sobre hoje; `confianca` é sobre a inferência. O único `alta` do mapa é **e1**, e ele
cumpre as três condições: sinal forte (SAM 3 com 1,97 M downloads/mês, relatório sobre 200 mil
projetos, YOLOE em velocidade de produção), força contrária nomeada com razão para perder (a
Roboflow diz que quem vence usa dado proprietário — mas a força contrária perde **na faixa de
perguntas que nunca teve dataset**, que é justamente onde e1 opera), e caso histórico comparável
(parsing de documento: do Donut, em 2022, a três fornecedores acima de 95% e benchmark saturado em
2026 — quatro anos).

**Nenhum efeito de ordem 3 tem `confianca: alta`.** A cota da skill permite um; o mapa usa zero,
porque a terceira ordem aqui é toda normativa e formativa, e depende de decisão humana que nenhum
número de hoje antecipa.

## 6. Sinais fracos e wildcards

Aqui vai o que não sustenta um galho — porque exige duas precondições não validadas ao mesmo tempo,
ou porque é relato e não artefato — mas que muda o mapa inteiro se acontecer.

**1. A compressão óptica de contexto — a seta apontando para o outro lado.** O DeepSeek-OCR (arXiv
2510.18234, 21/10/2025, Haoran Wei, Yaofeng Sun, Yukun Li) não é sobre ler documento: é sobre
**escrever texto como imagem para caber mais dele num contexto**. Com compressão abaixo de 10× a
precisão fica em **97%**; a 20×, em torno de **60%**. Se isso pegar, a imagem deixa de ser o dado
que a máquina precisa entender e vira **o formato em que a máquina guarda o que já entendeu** — e
todo o argumento deste mapa, que trata a imagem como registro do mundo, fica pela metade. Sinal
fraco: um artigo, uma implementação, e a tese contrária de que texto comprimido com 60% de precisão
não serve para nada que importe.

**2. O óculos de consumo rotulando o campo de visão em tempo real.** Este era o efeito `e6.3` da
primeira rodada e foi **morto na Fase 5** pela prova P5: o galho inteiro pendurava numa única aposta
de silício. Fica aqui como wildcard, porque se um modelo de conceito aberto couber numa armação com
autonomia de um dia, **todos os prazos da raiz 3 caem três anos de uma vez** e a discussão de norma
chega tarde. O que existe hoje: **3,45 GB** de modelo, **74–76 g** de aparelho de pesquisa rodando
geometria e não conceito, e um relato de **08/05/2025** sobre Live AI contínuo por horas em produtos
de 2026 — relato, não produto.

**3. O conceito adversarial — o vocabulário que faz o sistema não ver.** Se o desempenho depende
tanto da lista (15× de ganho ao encolhê-la, 69% de falso positivo com a lista cheia), então **omitir
uma palavra é uma forma de cegar o sistema sem tocar no modelo**. Não abri nenhuma fonte que trate
disso como ataque nomeado, e por isso não afirmo que exista; registro como a lacuna mais evidente do
que li. Se virar técnica documentada, e2.1.1 — o laudo que carrega o vocabulário — deixa de ser
efeito de terceira ordem e vira requisito imediato.

**4. O benchmark que satura antes do problema.** O OmniDocBench declarado saturado em 24/02/2026,
com a ressalva de que *"o parsing de documento está longe de ser um problema resolvido"*, é o caso
exemplar de uma dinâmica que deve se repetir com a SA-Co: o número público chega perto do humano, o
problema do cliente continua aberto, e a avaliação migra para dentro das empresas. É o que e2.2.1
descreve, e o sinal já é médio.

**5. `ORTHOS` — visão aplicada à reação emocional.** O bloco da disciplina cita uma extensão que
simula e visualiza resposta emocional a manchetes, baseada em modelo da Meta, como a fronteira entre
ver e sentir. **Não consegui apurar nenhuma fonte primária sobre ela nesta sessão** e por isso não a
uso para sustentar nada. Registro porque, se existir e funcionar, ela aponta para a pergunta que
nenhuma das três raízes cobre: o que acontece quando a percepção aberta é aplicada não ao mundo, mas
à reação de quem olha.

## 7. Contra o próprio mapa

Esta seção é a Fase 5 mostrada por inteiro: as seis provas aplicadas à roda, com `id`. O que morreu
está na seção 12.

**P1 — Extrapolação linear.** Procura o efeito que é o presente em outro volume. Matou **e4.2**
("mais vazamento de privacidade a partir de foto"): enunciável como "mais X", mesmo ator, mesmo
mecanismo. Rebaixou **e2.1** de `media` para `baixa`: vistoria por consulta avulsa é, em boa medida,
o mercado de laudo com outro contrato, e o ator novo (o comprador de resposta sem software) só
aparece se o preço cair mais do que caiu.

**P2 — Velocidade de adoção.** Procura prazo que assume adoção mais rápida que qualquer caso
comparável. Matou **e5.3** ("o emprego de digitação e conferência desaparece"): o BLS, em tabela
atualizada em **27/08/2026**, projeta para 2025–2035 **−34,4%** em processadores de texto e
digitadores (40,4 mil → 26,5 mil), **−25,5%** em digitadores de dados (131,8 mil → 98,2 mil),
**−15,8%** em auxiliares de arquivo (76,2 mil → 64,2 mil). Queda forte e lenta — **não**
desaparecimento, e num horizonte de dez anos. O efeito foi absorvido, em forma correta, dentro de
e5. O mesmo teste segurou o prazo de e1 em 2028, ancorado no caso do parsing de documento: quatro
anos do Donut ao benchmark saturado é o mais rápido que este campo andou, e não há razão para supor
que o conceito aberto ande mais rápido que isso.

**P3 — Já aconteceu.** Procura o efeito que já é verdade hoje. Matou **e3.3** ("o documento entendido
sem OCR dissolve o formulário"): já acontece, com preço de tabela, e está na seção 3.1. Matou também
**e1.3** em conjunto com P4 (abaixo). E encostou em **e5.2**: a acessibilidade como modo padrão já
começou — Be My AI nos Ray-Ban desde 2024, Tesco desde 09/10/2025 —, e por isso e5.2 ficou com prazo
curto (2029) e sinal médio, em vez de virar aposta.

**P4 — Força contrária.** Procura quem perde e o que essa pessoa pode fazer. Foi a prova mais cara
desta rodada.

- **Matou e1.3** ("o mercado de anotação encolhe"). A força contrária não é um incumbente
  resistindo: é o dado. Mordor Intelligence, 11/09/2026: **US$ 2,61 bi em 2026 → US$ 7,02 bi em
  2031, CAGR de 21,94%**; manual ainda em **42,31%** da receita de 2025; programático crescendo a
  **22,16%**; e a exigência regulatória de auditabilidade preservando o humano no laço. O efeito
  não foi rebaixado: foi eliminado, e substituído por e1.1, que descreve a **mudança de natureza**
  do trabalho em vez do seu fim.
- **Rebaixou e1** de candidato a `alta` incondicional para `alta` condicionada. O incumbente aqui é
  a própria Roboflow — a empresa cujo negócio é o ajuste fino —, e ela diz que quem vence usa dado
  proprietário. A razão pela qual essa força perde **na faixa de e1** é específica e está declarada:
  ela não disputa a pergunta que nunca teve dataset. Fora dessa faixa, ela ganha.
- **Rebaixou e6** de `media` para `baixa`. Quem perde com o registro contínuo do campo de visão é
  todo mundo que é visto, e essa força tem instrumento: o AI Act já proíbe uma parte, o PL 2338
  discute proibir outra, e a reação social a óculos com câmera tem precedente documentado. O efeito
  sobreviveu porque o instrumento existente **mira o alvo errado** (identificação, não descrição),
  mas com confiança baixa.

**P5 — Precondição única.** Procura galho inteiro pendurado numa aposta só. **Matou e6.3** e o
levou para a seção 6: "SAM-like em tempo real em óculos de consumo" sustentava quatro efeitos
descendentes, todos dependentes da mesma precondição de silício. Um galho de quatro nós que morre
junto não é galho: é uma aposta disfarçada de árvore. Também obrigou a separar e6.2 de e6.1: a
primeira depende de norma, a segunda de contrato privado, e se eu as tivesse deixado no mesmo galho
uma precondição jurídica seguraria as duas.

**P6 — Camada (CLA).** Passei os efeitos principais pelas quatro camadas de Inayatullah (1998).

- **Litania.** "A máquina agora vê qualquer coisa." Manchete verdadeira e vazia — a seção 3.3 mostra
  o F1 de 0,276 em domínio que não é foto de internet. **Efeito que existe só na litania:** **e2.1**
  (vistoria vira consulta avulsa) soa inevitável e não tem mecanismo econômico abaixo; foi por isso,
  somado a P1, que ele caiu para `baixa`.
- **Causas sistêmicas.** O que move isto não é capacidade: é **custo por pergunta**. Duas quedas de
  preço documentadas em um ano na página de documento, 200 mil páginas/dia numa A100, 1,97 M de
  downloads de um modelo aberto. A camada sistêmica também mostra por que o vocabulário aberto é
  atraente para quem **não tem** dado proprietário — e por que ele é irrelevante para quem tem.
- **Visão de mundo.** O mapa inteiro repousa sobre um pressuposto: **que perguntar a uma imagem é
  um ato neutro, e que o problema é quem pergunta**. Toda a raiz 2 e boa parte da 3 assumem que a
  disputa será sobre autorização — quem pode consultar, com que finalidade, declarando o quê. Existe
  uma visão de mundo concorrente, e ela já está no material que abri: a nota técnica do Lapin, do
  Peregum e da Rede Liberdade não discute autorização, discute **quem paga o erro** — 23 pessoas
  levadas a delegacia por inconsistência de reconhecimento facial não são um problema de finalidade
  declarada. Se essa visão prevalecer, e3.2 e e6.2 trocam de conteúdo: a norma não vai licenciar
  perguntas, vai atribuir responsabilidade por resposta errada, e o mapa inteiro estará mirando o
  eixo errado.
- **Mito/metáfora.** A metáfora que sustenta o tema é *"a máquina vê o que se pede, não o que se
  ensinou"*. Ela é sedutora e falsa num ponto decisivo: a máquina **não** vê o que se pede — ela vê
  o que a palavra pedida ativa nos seus pesos, e a diferença entre as duas coisas é o que o achado
  de 13/01/2026 mede. A metáfora certa não é a do olho obediente; é a do **dicionário de outra
  pessoa**. Quem escreve "capacete" não sabe o que o modelo lê, e não tem como descobrir. Este mapa
  tentou escrever a partir dessa segunda metáfora, e o experimento da seção 10 existe para testá-la.

**A bateria derrubou coisa.** Cinco efeitos mortos — e1.3, e3.3, e4.2, e5.3, e6.3 — e três rebaixados
— e1 (condicionada), e2.1 e e6. Pelo menos um por raiz, como a cota exige: R1 perdeu e1.3, R2 perdeu
e3.3 e e4.2, R3 perdeu e5.3 e e6.3.

**A fragilidade que eu não consegui resolver.** O falsificador da entrevista tem duas vias, e eu só
consegui testar bem uma. A via "a adoção passou da maioria inicial" eu testei e ela não se
sustenta — 250 mil modelos ajustados e um mercado de anotação crescendo 21,94% ao ano dizem que
estamos na fatia de inovadores. A via "a tecnologia não rompe nada, só melhora o que existe" **eu
não consegui derrubar**. O SAM 3 em produto de massa está, hoje, melhorando efeito de rede social e
pré-rotulando dataset — duas formas de sustentação. A aposta deste mapa é que a fatia disruptiva
(a pergunta que nunca teve dataset, o acervo consultado depois) cresce mais rápido que a fatia de
sustentação. **Não tenho número que sustente essa aposta**, e ela é a maior fragilidade daqui.

## 8. O que a máquina errou

Registro os erros desta rodada, incluindo os que só apareceram por atrito externo — duas fontes
discordando, um resumo sem a frase prometida, uma data deduzida de expressão relativa. Nenhum foi
pego por releitura atenta.

**1. Uma data inferida de expressão relativa, apresentada como fato.** Ao resumir o blog da Meta
sobre o SAM 3.1, a leitura automática afirmou que o **SAM 3 foi anunciado em novembro de 2024**,
justificando com um "nos últimos meses" do texto. A data real é **19 de novembro de 2025** (post da
Roboflow) e a submissão ao arXiv é de **20 de novembro de 2025**. *Como percebi:* as duas não batiam
com o que eu já tinha visto na busca. Este é exatamente o erro descrito no `DUVIDAS.md` da skill — a
data deduzida e a data exata apresentadas no mesmo tom — e ele caiu sobre a viga: é o "por que agora"
da raiz 1.

**2. Duas latências incompatíveis para o mesmo modelo.** O blog da Meta diz **30 milissegundos** para
uma imagem com mais de 100 objetos detectados numa H200. A documentação da Ultralytics diz **2.921
milissegundos** por imagem numa RTX PRO 6000. Diferença de duas ordens de grandeza. **Não consegui
reconciliar** — provavelmente medem coisas diferentes (uma delas parece incluir carga de modelo), mas
não achei a definição em nenhuma das duas páginas. **Não afirmo latência única em lugar nenhum deste
mapa**, e onde a velocidade importa uso o número de vídeo (16 → 32 fps numa H100), que as duas fontes
sustentam.

**3. Quatro contagens diferentes de parâmetros para o SAM 3.** 848 M (resumo de busca), ~840 M
(Roboflow), **473,6 M** (Ultralytics) e **0,9 B** (cartão do modelo no Hugging Face). **Não apurei o
número canônico** e por isso **não afirmo nenhum** no corpo do mapa — uso apenas o tamanho em disco,
**3,45 GB**, que é o que importa para o argumento de R3 e que duas fontes sustentam.

**4. Três contagens de conceitos da SA-Co, e elas medem coisas diferentes.** O artigo fala em **4
milhões de rótulos de conceito únicos** (treino); a Ultralytics, em **214 mil frases únicas** em 126
mil imagens e vídeos (avaliação); o cartão do modelo, em **270 mil conceitos únicos** (avaliação).
Os resumos apresentaram as três no mesmo tom, como se fossem a mesma grandeza. No corpo, cada número
vai com o seu rótulo — treino ou avaliação — e a divergência entre 214 mil e 270 mil fica declarada
em vez de escolhida.

**5. Um resumo atribuiu a uma página conteúdo que ela não contém.** A busca sobre agronegócio
brasileiro afirmou que um artigo da FarmNews (**03/06/2026**) tratava de visão computacional,
pulverização seletiva, See & Spray, Cromai e Zait, com redução de até 80% de herbicida. **Abri o
artigo: ele não menciona nenhum dos cinco.** Fala de IA no varejo agrícola, crédito e estoque. A
página do See & Spray no site da John Deere devolveu **HTTP 404**, e a página de tendências da PwC
Brasil devolveu **HTTP 403**. **Nenhuma dessas afirmações entra no mapa**, e a nota sobre o Brasil
ficou sem o exemplo do agro por causa disso — o que a torna mais fraca, e é assim que tinha de ficar.

**6. Um número conveniente que a fonte primária não confirma.** Um resumo de busca atribuiu ao
trabalho de Tömekçe, Vero, Staab e Vechev a afirmação de que modelos de visão-linguagem inferem
**480× mais rápido e ~117× mais barato que anotação humana**. Abri o resumo no arXiv: **esses números
não estão lá**. Eram a melhor evidência quantitativa que eu tinha para a raiz 2 — e por isso R2 está
sustentada apenas pelos **77,6% de acurácia**, que é evidência de capacidade e não de custo. O
argumento de preço de R2 foi remontado sobre a Mistral e o DeepSeek-OCR, que eu abri.

**7. Um ano faltando numa venda.** Um resumo dizia "2 milhões de Ray-Ban Meta vendidos em fevereiro",
sem ano, num contexto que sugeria 2026. O artigo do UploadVR, de **08/05/2025**, diz **fevereiro de
2025**. Corrigido. A diferença importa: como número de 2026, seria adoção estagnada; como número de
2025, é o ponto de partida de uma curva que não consegui acompanhar depois.

**8. O que não consegui apurar, e fica escrito como não apurado.**
- **A fatia de produção servida por vocabulário aberto sem ajuste fino.** É o número que decidiria a
  seção 7 e eu não o tenho. Nenhuma fonte que abri o mede.
- **Adoção brasileira de vocabulário aberto** — empresas, contratos, casos. Nada.
- **O desfecho da votação do PL 2338 na Câmara.** Fontes de busca falam em pauta para 27/05/2026 e
  em sucessivos adiamentos; **não abri confirmação** e por isso o texto diz "está na Câmara".
- **Qualquer fonte primária sobre o `ORTHOS`**, citado no bloco da disciplina.
- **A licença exata do SAM 3.** O cartão do Hugging Face diz "outra" e exige aceitar compartilhar
  contato; a página da Meta não especifica.
- **Números de usuários do Be My Eyes com data.** A página traz duas contagens divergentes (10 M / 1
  M no corpo, 9 M / 900 mil no infobox) e **nenhuma data**; registro as duas.
- **Qualquer medida de erro do vocabulário aberto em vídeo de câmera de segurança**, que é o
  contexto de R2 e R3 e onde eu mais precisava de número.

## 9. Três cenários para 2031

Os três partem dos **mesmos** fatos da seção 3 e das mesmas três raízes. O que muda é qual força
ganhou: o preço, a norma, ou o fabricante.

### 9.1 Desejável — "a lista de palavras vira documento"

O vocabulário vira artefato de engenharia. Entre 2028 e 2030 aparece o instrumento que hoje falta
(§4, R1): uma forma de **testar o que o modelo entende por uma palavra** antes de usá-la — conjunto
de exemplos e contraexemplos, negativos duros versionados, medida de confusão entre termos vizinhos.
Não é ciência nova: é a aplicação, ao vocabulário, do que a SA-Co já faz com os seus negativos
duros. Isso resolve, de uma vez, o problema medido em 13/01/2026, porque a confusão semântica deixa
de ser descoberta em produção.

A partir daí a cadeia se reorganiza sem drama. O trabalho humano de anotação não some — ele vira
arbitragem (e1.1), e o mercado continua crescendo como a Mordor projeta, com composição diferente. O
ofício de curador de vocabulário aparece (e1.2), e aparece **do lado de quem usa**, não só de quem
fabrica, porque o instrumento de teste é público. O contrato de fornecimento passa a especificar
vocabulário e negativos em vez de acurácia média (e1.1.1) — e isso é possível justamente porque
existe como medir.

A consequência menos óbvia é de **prova**. O laudo visual que carrega o vocabulário consultado
(e2.1.1) deixa de ser terceira ordem e chega em 2030, empurrado não pela cultura, mas pelo seguro e
pela perícia: quando duas partes disputam o que uma câmera viu, a pergunta "o que foi procurado?"
passa a valer mais que "o que apareceu?". E o aviso de captação que declara o vocabulário consultável
(e3.2.1) chega por arrasto, porque quem já versiona a lista para o contrato não tem custo em
publicá-la.

O que **não** acontece neste cenário: o óculos de consumo com rotulagem contínua. O silício não
chega, R3 fica em bolsão de pesquisa e de acessibilidade, e a discussão de norma acontece com tempo.

### 9.2 Indesejável — "a pergunta é sempre posterior"

O instrumento de auditoria do conceito não aparece, porque ninguém tem incentivo para construí-lo: o
benchmark público satura (e2.2.1 chega em 2029, não em 2031), a avaliação migra para dentro das
empresas, e **não há mais como comparar dois sistemas**. O vocabulário fica sendo texto solto numa
chamada de API, escrito por quem precisa de uma resposta agora.

Nesse vácuo, R2 corre sozinha. O custo por página continua caindo, o acervo vira consultável, e a
convergência da §5.1 se instala como prática: **a pergunta é sempre posterior à imagem, ao
consentimento e à lei que valia**. O caminho já está desenhado em 2026 e não precisa de nada novo —
o Smart Sampa Cidadão declara finalidade de placa, capta rosto, e retém sem prazo. Em 2031 isso não
é um aplicativo municipal: é o arranjo padrão de todo acervo de imagem corporativo e público.

A norma persegue o alvo errado. O AI Act proíbe identificação biométrica remota em tempo real; o PL
2338 classifica reconhecimento facial como risco excessivo e abre exceções que a Coalizão Direitos na
Rede já descreve como esvaziamento. Nenhum dos dois textos fala de **descrever por conceito** —
"homem de camisa vermelha que passou às 14h", "pessoa carregando caixa", "quem parou em frente à
porta mais de três vezes". Descrever não é identificar, e por isso passa (e6.2). Em 2031 a descrição
por conceito é a forma legal de fazer o que a identificação biométrica não pode, e a discussão sobre
ela **nunca aconteceu** porque a categoria não tinha nome quando a lei foi escrita.

O ofício visual se esvazia pela ponta errada. Não some — o BLS já diz que a queda é lenta —, mas
quem fica perde o que tinha: o inspetor que deveria valer por duvidar (e5.1) não tem acesso ao
vocabulário do aparelho, porque o vocabulário é do fabricante (a anulação parcial descrita na
§5.1). Ele não vira sênior em desconfiança; vira quem aperta o botão de confirmar.

E a acessibilidade, que é hoje o uso mais defensável da tecnologia, fica presa a contrato comercial:
e5.2.1 não acontece, a descrição do ambiente continua sendo cortesia do fabricante do óculos, e some
quando o produto for descontinuado.

### 9.3 Provável — "duas velocidades"

O mais provável é que R1 e R2 andem e R3 não, e que a assimetria entre elas seja o fato central de
2031.

**R1 anda, mas por baixo.** O vocabulário aberto não substitui o modelo treinado em produção — a
Roboflow continua certa — e se instala como **primeira camada**: prototipar, pré-rotular, responder
a pergunta de uso único. e1 acontece no prazo (2028) e e1.1 também (2029), mas e1.2 — o curador de
vocabulário como ofício reconhecido — atrasa para depois de 2031, porque o papel existe e não tem
nome, exercido por quem já estava ali. e1.1.1 não chega: contratos continuam especificando acurácia
média, porque é o que compradores sabem comprar.

**R2 anda e ninguém percebe.** É a raiz com menos atrito técnico e menos visibilidade. O acervo vira
consultável porque é barato, e não há evento que marque a passagem. e3 e e3.1 acontecem; e3.2 — a
disputa migrando da captura para a consulta — começa em algum tribunal por volta de 2030, num caso
que ninguém previu, provavelmente trabalhista ou de seguro. e4.1, a checagem de inferência antes de
publicar, não vira prática de massa: fica em nicho de jornalismo e de segurança, como a remoção de
metadado ficou.

**R3 não anda no corpo, anda no poste.** O óculos de consumo não ganha percepção aberta contínua até
2031 — o vão de silício não fecha nesse prazo com os números de hoje. Mas a mesma capacidade chega
pela infraestrutura fixa, onde energia não é problema: câmera de rua, de loja, de fábrica. Isso
significa que e5 e e5.1 acontecem — o trabalho visual se reorganiza —, e6.1 e e6.1.1 não acontecem
(não há visitante com aparelho a regular), e **e6.2 acontece com força**, porque é exatamente o caso
da câmera fixa que descreve sem identificar.

Neste cenário o mapa acerta a direção e erra o corpo: o que eu descrevi como "a percepção desce para
o corpo" acontece como "a percepção sobe para o poste", com os mesmos efeitos de trabalho e de norma
e nenhum dos efeitos de intimidade. A régua para saber, antes de 2031, em qual cenário estamos é
simples e está no §7: **se o uso dominante continuar sendo melhorar efeito de rede social e
pré-rotular dataset, é o cenário 9.3 sem a parte que interessa — e este mapa terá sido um mapa de
sustentação disfarçado de mapa de disrupção.**

## 10. O experimento

**Nome.** O dicionário que não existe.

**A pergunta que ele responde.** Não "o modelo acerta?", e sim **onde mora o erro de um sistema que
vê por conceito: no modelo, na cena, ou na palavra que alguém escolheu**. É a metáfora do §7 (P6)
posta em sala, com corpo: se a máquina não vê o que se pede, mas o que a palavra ativa, então a
primeira coisa a medir é a distância entre duas pessoas escrevendo a mesma lista.

**Por que este e não outro.** Porque é o único efeito deste mapa que pode ser medido numa aula, com
equipamento que a turma já tem, e cujo resultado **não é previsível por quem projeta**. Todo mundo
acha que "capacete" é uma palavra clara. Medir a discordância **entre humanos**, antes de qualquer
máquina entrar, é a parte que ninguém faz — e é ela que decide se e1.1 (anotação vira arbitragem) é
efeito ou fantasia.

**Montagem — 90 minutos, quatro grupos e um gabarito escondido.**

*Fase 0 — a cena (10 min).* A turma escolhe **uma** cena real do CIn e faz **uma única** fotografia
dela, em alta resolução, projetada para todos. A cena precisa de três propriedades: pelo menos
quinze objetos distintos; pelo menos um par de objetos **da mesma família e não idênticos** (duas
cadeiras de modelos diferentes, dois cabos, dois cartazes); e pelo menos um objeto **parcialmente
oculto**. O professor não vê os vocabulários que virão.

*Fase 1 — o vocabulário às cegas (15 min).* Cada aluno, **sozinho e sem falar com ninguém**, escreve
uma lista de **exatamente 12 frases nominais curtas** que descrevam o que há na cena — o formato do
prompt do SAM 3. Regra dura: nada de números, nada de posição, nada de comparação ("o maior", "à
esquerda"); só substantivo com adjetivo, como a tarefa exige. As listas são entregues fechadas.

*Fase 2 — a discordância humana (15 min).* Antes de qualquer máquina. Projetam-se todas as listas
juntas e mede-se, à mão, três coisas:
- **Cobertura**: quantas frases distintas a turma inteira produziu, e quantas apareceram em uma só
  lista.
- **Concordância de termo**: quantas frases apareceram em mais de metade das listas.
- **Colisão**: quantos pares de frases de alunos diferentes se referem ao **mesmo objeto** com
  palavras diferentes, e quantos pares de frases **iguais** se referem a objetos diferentes.
Este último número é o resultado que importa, e é o que quase ninguém prevê.

*Fase 3 — a máquina, um vocabulário por vez (25 min).* Divide-se a turma em quatro grupos. Cada
grupo roda a mesma imagem por um modelo de vocabulário aberto disponível (SAM 3 via demo ou API,
Grounded-SAM, YOLOE — o que a sala conseguir), **uma lista de aluno por vez**, e registra, para cada
uma das 12 frases: quantas instâncias voltaram, e quantas o grupo considera corretas. Ninguém ajusta
o prompt. Ninguém escolhe a lista "melhor".

*Fase 4 — o encolhimento (15 min).* Cada grupo repete a rodada com **as 3 frases de maior
concordância** da fase 2, e só elas. Mede a mesma coisa. A pergunta: **quanto sobe a precisão ao
tirar nove palavras?** O achado de 13/01/2026 diz 15× em domínio aéreo; a turma vai medir o seu
próprio fator numa cena de corredor.

*Fase 5 — a atribuição do erro (10 min).* Para cada erro registrado, a turma classifica em três
caixas, e só três: **erro de modelo** (a frase era clara, o objeto estava visível, e ele errou);
**erro de cena** (o objeto estava oculto ou ambíguo para qualquer observador); **erro de palavra**
(dois humanos discordariam sobre se aquilo é aquilo). A distribuição final entre as três caixas é o
produto do experimento.

**O que o experimento pode mostrar e que o mapa não previu.** Se a caixa "erro de palavra" for a
maior, e1.1 e e1.2 ganham base — o trabalho que sobra é mesmo de arbitragem e de curadoria, e o
gargalo é humano. Se ela for pequena e "erro de modelo" dominar, então o mapa exagerou a importância
do vocabulário e o que falta é só modelo melhor: **o mapa perde a sua tese central**, e a resposta 7
da entrevista terá sido satisfeita pela segunda via.

**O que ele não mede, e convém dizer.** Não mede vídeo, não mede acervo, não mede nada de R2 ou R3.
Mede uma cena, uma vez, com uma turma. É o pedaço do mapa que cabe numa aula.

## 11. Fontes

Vinte e seis fontes, **todas abertas nesta sessão**. Onde uma fonte não abriu, ela não está aqui e o
fato que ela sustentaria não está no mapa (ver §8.5). Datas são as de publicação ou de última
atualização da página.

**A linhagem do conceito como interface**

1. Roboflow — *SAM 3: Segment Anything with Concepts*, 19/11/2025 —
   `https://blog.roboflow.com/what-is-sam3/`
2. Meta AI — *SAM 3.1: Faster and More Accessible Real-Time Video Detection and Tracking with
   Multiplexing and Global Reasoning*, 27/03/2026 —
   `https://ai.meta.com/blog/segment-anything-model-3/`
3. Carion et al. (Meta) — *SAM 3: Segment Anything with Concepts*, arXiv, submetido 20/11/2025,
   revisado 28/03/2026 — `https://arxiv.org/abs/2511.16719`
4. Ultralytics — *SAM 3: Segment Anything with Concepts* (documentação) —
   `https://docs.ultralytics.com/models/sam-3`
5. Hugging Face — cartão do modelo `facebook/sam3` —
   `https://huggingface.co/facebook/sam3`
6. Meta AI — *DINOv3*, arXiv, 13/08/2025 (lista de autores não apurada nesta sessão) — `https://arxiv.org/abs/2508.10104`
7. Ultralytics — *YOLOE: Real-Time Seeing Anything* (documentação; artigo de Wang et al., Tsinghua,
   arXiv 2503.07465, ICCV 2025) — `https://docs.ultralytics.com/models/yoloe`
8. Roboflow — *Open-Vocabulary Object Detection & When To Use It*, 16/01/2026 —
   `https://blog.roboflow.com/open-vocabulary-object-detection/`

**Onde o vocabulário aberto quebra**

9. Christos Tsourveloudis — *Do Open-Vocabulary Detectors Transfer to Aerial Imagery? A Comparative
   Evaluation*, arXiv, 13/01/2026 — `https://arxiv.org/abs/2601.22164`
10. Roboflow — *Vision AI Trends 2026* (análise de 200 mil projetos) —
    `https://blog.roboflow.com/vision-ai-trends-2026/`
11. Roboflow — *Visual AI Trends 2026 Report* (página do relatório) —
    `https://trends.roboflow.com/`
12. Mordor Intelligence — *Data Labeling Market Size & Share Analysis*, atualizado 11/09/2026 —
    `https://www.mordorintelligence.com/industry-reports/data-labeling-market`

**O documento como imagem — o que este mapa recusa como tendência**

13. LlamaIndex — *OmniDocBench is Saturated, What's Next for OCR Benchmarks?*, 24/02/2026 —
    `https://www.llamaindex.ai/blog/omnidocbench-is-saturated-what-s-next-for-ocr-benchmarks`
14. Roboflow — *Best Open-Source OCR Models in 2026, Ranked by Benchmark*, 03/08/2026 —
    `https://blog.roboflow.com/best-open-source-ocr-models/`
15. Mistral AI — *Mistral OCR 4: SOTA OCR for Document Intelligence*, 23/06/2026 —
    `https://mistral.ai/news/ocr-4/`
16. Wei, Sun & Li (DeepSeek) — *DeepSeek-OCR: Contexts Optical Compression*, arXiv, 21/10/2025 —
    `https://arxiv.org/abs/2510.18234`

**O que se infere de uma imagem, e o que a norma diz**

17. Tömekçe, Vero, Staab & Vechev — *Private Attribute Inference from Images with Vision-Language
    Models*, arXiv 16/04/2024 (rev. 04/11/2024), NeurIPS 2024 —
    `https://arxiv.org/abs/2404.10618`
18. EU Artificial Intelligence Act — *Article 5: Prohibited AI Practices* —
    `https://artificialintelligenceact.eu/article/5/`

**O corpo e o aparelho**

19. Meta AI — *Inside Aria Gen 2: Explore the cutting-edge tech behind the device*, 04/06/2025 —
    `https://ai.meta.com/blog/aria-gen-2-research-glasses-under-the-hood-reality-labs/`
20. UploadVR — *Next-Gen Ray-Ban Meta Glasses Could Recognize Faces In 2026* (reportando *The
    Information*), 08/05/2025 —
    `https://www.uploadvr.com/next-gen-ray-ban-meta-2026-super-sensing-facial-recognition-live-ai/`
21. Wikipédia — *Be My Eyes* (verbete; duas contagens de usuário divergentes, sem data) —
    `https://en.wikipedia.org/wiki/Be_My_Eyes`

**Trabalho**

22. U.S. Bureau of Labor Statistics — *Fastest declining occupations, 2025–2035*, atualizado
    27/08/2026 — `https://www.bls.gov/emp/tables/fastest-declining-occupations.htm`

**Brasil**

23. Brasil de Fato — *Smart Sampa: mais de 80 pessoas foram levadas para delegacias por
    inconsistência do reconhecimento facial*, 04/02/2026 (sobre nota técnica do Lapin, Instituto
    Peregum e Rede Liberdade) —
    `https://www.brasildefato.com.br/2026/02/04/smart-sampa-mais-de-80-pessoas-foram-levadas-para-delegacias-por-inconsistencia-do-reconhecimento-facial/`
24. Paula Uematsu Arruda / Data Privacy Brasil Research — *Smart Sampa aposta em vigilância difusa,
    mas falha na transparência e no tratamento de dados pessoais*, 03/08/2026 —
    `https://www.dataprivacybr.org/smart-sampa-aposta-em-vigilancia-difusa-mas-falha-na-transparencia-e-no-tratamento-de-dados-pessoais/`
25. Coalizão Direitos na Rede e campanha Tire Meu Rosto da Sua Mira — *Posicionamento sobre o PL
    2338 e sistemas de identificação biométrica (reconhecimento facial)*, 08/12/2025 —
    `https://direitosnarede.org.br/2025/12/08/posicionamento-pl-2338-sistemas-identificacao-biometrica-reconhecimento-facial/`

**Aberta e usada apenas como evidência negativa (§8.5)**

26. FarmNews — *Guia do varejo agrícola inteligente: IA e a distribuição de insumos no Brasil*,
    03/06/2026 — `https://farmnews.com.br/inovacao/guia-do-varejo-agricola-inteligente/`

**Não abriram, e por isso não sustentam nada:** PwC Brasil, *10 tendências do agronegócio para 2026*
(HTTP 403); John Deere, página do See & Spray (HTTP 404); NeurIPS Proceedings, PDF do artigo 17
(o servidor entregou binário ilegível — o conteúdo veio do arXiv, item 17).

## 12. Anexo — o levantamento bruto

Sem edição e sem limite. O que foi perguntado, o que foi assumido, o que foi recusado, o que foi
morto, o que foi buscado e não deu em nada.

### 12.1 A entrevista — as nove perguntas e as respostas recebidas

A Fase 1 da skill é bloqueante e exige as nove perguntas de uma vez. Elas foram feitas; as respostas
vieram do enunciado da rodada, **sem interlocutor disponível para uma segunda rodada de perguntas**.
Registro as duas colunas para que se saiba o que foi respondido e o que foi assumido.

| # | Pergunta | Resposta recebida |
|---|---|---|
| 1 | Tema e fronteira | Tema: "Máquinas que veem qualquer coisa: visão de vocabulário aberto" (tema 11 de 19, família "Percepção e mídia sintética"). **A fronteira não foi respondida** — foi construída por mim a partir do bloco da disciplina. Ver §12.2. |
| 2 | Horizonte | 2031 |
| 3 | Recorte geográfico | Global, com uma nota sobre o Brasil |
| 4 | Para quem | Quem projeta mídia e interação |
| 5 | O que já está descartado | "O que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão" |
| 6 | Viés desejado | Neutro |
| 7 | O que faria mudar de ideia | Evidência de que a adoção já passou da maioria inicial (Rogers), **ou** de que a tecnologia não rompe nada — só melhora o que existe |
| 8 | Quantas disrupções-raiz | **Não respondida.** Assumi **3**. Ver §12.3. |
| 9 | Posso navegar? | Sim — WebSearch e WebFetch de verdade, citando só o que foi aberto |

O bloco `RECORTE FECHADO` da §1.3 foi montado e **não houve confirmação explícita**, porque não há
interlocutor nesta rodada. Registro isto como desvio do protocolo, não como cumprimento dele:

```
RECORTE FECHADO — confirme antes de eu rodar
  tema ................ Sistemas de visão cuja lista de coisas reconhecíveis não é fixada no treino
  não é ............... reconstrução 3D (tema 10); robô que age (tema 9); geração de imagem;
                        e — corte meu — parsing de documento, que a Fase 2 classificou como maduro
  horizonte ........... 2031
  região .............. global, com nota sobre o Brasil
  público ............. quem projeta mídia e interação
  descartado .......... o que já é comum em produto de massa (régua da disciplina)
  viés ................ neutro
  falsificador ........ adoção além da maioria inicial (Rogers), OU tecnologia que só melhora
  raízes .............. 3 (assumido)
  navegação ........... sim
  SUPOSIÇÕES MINHAS ... fronteira (§12.2), número de raízes (§12.3), e o corte do parsing de
                        documento, que é recusa da Fase 2 e não exclusão pedida
Confirma, ou corrige algum campo?
```

As **perguntas condicionais** da §1.2 teriam disparado em dois casos, e registro os dois porque não
pude fazê-las:

- **Colisão de fronteira com vizinho.** O tema 11 encosta no 10 (reconstrução 3D), no 9 (robô que
  age) e, por baixo, no 15 (distribuição). Resolvi sozinho, com os três cortes da §2, mais o quarto
  corte que é recusa da Fase 2. A decisão está declarada lá, não escondida aqui.
- **A resposta 5 contradiz a 1?** Quase. "Descartar o que já é comum em produto de massa" é, no
  caso do SAM 3, um problema real: ele **está** em produto de massa (Instagram Edits, Marketplace).
  Se eu aplicasse a exclusão literalmente, o tema morria na largada. Resolvi com a distinção
  emergente × disruptivo da §2.3 da skill — em produto de massa ele serve **melhor ao mesmo cliente
  do incumbente**, o que é sustentação —, e declarei a resolução na §4.1 em vez de fazê-la em
  silêncio. Esta é a decisão mais discutível deste mapa.

### 12.2 A fronteira, construída e não recebida

Três cortes vieram do bloco da disciplina ("Fronteira com os vizinhos"): 3D é o tema 10, robô é o 9,
percepção aberta é este. Acrescentei o corte da geração de imagem porque o `Grounded-Segment-Anything`,
citado no bloco, encadeia detecção + segmentação + geração, e sem o corte a terceira ordem cairia em
mídia sintética.

O quarto corte — **parsing de documento** — é diferente em natureza e por isso está separado: não é
fronteira com vizinho, é **recusa de maturidade**, e contradiz o bloco da disciplina, que diz que "o
emergente é o vocabulário aberto e a compreensão de documento como imagem". A skill manda recusar o
maduro com o teste nomeado, e o teste é o T5. Registro a discordância por inteiro na §4.1, com os
números, para que quem discorde possa discordar do número e não da opinião.

### 12.3 O número de raízes

Não foi respondido. Assumi 3. Cheguei nele por eliminação: com 2, teria que fundir "o vocabulário
vira execução" com "o acervo vira consultável", e elas têm **atores diferentes** (quem constrói
sistema × quem guarda imagem) e **mecanismos diferentes** (classe decidida depois × reprocessamento
barato) — fundir seria violar a minha própria regra de expansão. Com 4, a quarta candidata seria "a
compreensão de documento sem OCR", que a Fase 2 recusou. Ficaram 3.

### 12.4 A triagem de maturidade, item por item

A Fase 2 rodou em nove candidatas. As classificações e o teste que decidiu cada uma:

| Candidata | T1 régua | T2 substituição | T3 por que agora | T4 precondição | T5 rotina | Veredito |
|---|---|---|---|---|---|---|
| Classificação de imagem (classes fixas) | reprova | — | — | — | **aprova** | MADURO |
| Detecção de objeto (classes fixas) | reprova | — | — | — | **aprova** | MADURO |
| OCR tradicional | reprova | — | — | — | **aprova** | MADURO |
| Segmentação promptável geométrica (SAM 1/2) | passa | reprova (só custo/prazo) | — | — | **aprova** | MADURO |
| Parsing de documento por VLM | passa | reprova | passa | reprova (nada falta) | **aprova** | MADURO |
| Anotação assistida por modelo fundacional | reprova (escora o H1) | — | — | — | aprova | MADURO / H2− |
| **Segmentação e detecção por conceito** | **passa** | **passa** | **passa** (19/11/2025) | **passa** (conceito não auditável) | reprova | **DISRUPTIVO** |
| **Consulta retroativa a acervo de imagem** | **passa** | **passa** | **passa** (preço, 23/06/2026) | **passa** (regra sobre consulta) | reprova | **DISRUPTIVO** |
| **Percepção aberta on-device em aparelho vestido** | **passa** | **passa** | **passa** (04/06/2025) | **passa** (silício e norma) | reprova | **EMERGENTE** |

Note a última linha: R3 é **emergente**, não disruptiva no sentido estrito, porque eu consigo nomear
a competência que ela torna sem valor (atenção treinada em ofício visual) mas **não consigo nomear
com segurança a porta de entrada**. Escrevi "baixa do mercado" na §4 e não tenho evidência de
produto entrando por baixo — só o caso da acessibilidade, que é mercado novo. Esta é uma fraqueza de
classificação, não de redação, e por isso R3 tem os efeitos de menor confiança do mapa.

### 12.5 A compressão óptica — por que não virou a quarta raiz

O DeepSeek-OCR é a candidata que mais me custou a decidir. A favor: muda o que é possível (texto como
imagem comprimida muda a economia de contexto, não só a velocidade), tem sinal datado (21/10/2025),
e tem precondição faltante clara (perda de 40% a 20× é inaceitável para uso jurídico ou contábil).
Contra: **duas precondições não validadas simultaneamente** — que a perda seja tolerável e que a
cadeia de ferramentas passe a tratar imagem como formato de armazenamento de texto. Pela minha
própria regra da §4.2 da skill, isso não vai para a roda: vai para a seção 6 como sinal fraco. E é
onde está.

### 12.6 Os efeitos mortos, com o `id` original e a prova que os matou

Nada desaparece em silêncio.

**`e1.3` — "O mercado de anotação de imagem encolhe e as ferramentas de rotulagem perdem função."**
Morto por **P4 + P3**. O bloco da disciplina sugere isso ao dizer que o vocabulário aberto "tende a
dispensar" CVAT e Label Studio. O dado diz o contrário: Mordor Intelligence, 11/09/2026 — US$ 2,61 bi
em 2026 → US$ 7,02 bi em 2031, **CAGR 21,94%**; manual em **42,31%** da receita de 2025;
programático crescendo a **22,16%**; auditabilidade exigida por regulador preservando humano no laço.
O efeito foi **eliminado**, não rebaixado, e substituído por **e1.1**, que descreve a mudança de
natureza do trabalho. Esta foi a correção mais importante da rodada, porque era a conclusão que eu
tinha como óbvia antes de buscar.

**`e3.3` — "O documento entendido sem OCR dissolve o formulário como contrato de entrada de
dados."** Morto por **P3**. Já acontece: Mistral declara o OCR como modelo padrão de compreensão de
documento no Le Chat; OmniDocBench saturado em 24/02/2026; três fornecedores acima de 95% em
03/08/2026. Não é efeito futuro, é estado da arte — foi para a **seção 3.1**.

**`e4.2` — "Aumenta o vazamento de informação privada a partir de fotos publicadas."** Morto por
**P1**. Enunciável como "mais X". Mesmo ator (quem publica), mesmo mecanismo (inferência). É e4 medido
em outro volume — fundido com o pai.

**`e5.3` — "A profissão de digitação e conferência documental desaparece."** Morto por **P2**. BLS,
tabela atualizada em 27/08/2026, projeção 2025–2035: processadores de texto e digitadores **−34,4%**
(40,4 mil → 26,5 mil); digitadores de dados **−25,5%** (131,8 mil → 98,2 mil); auxiliares de arquivo
**−15,8%** (76,2 mil → 64,2 mil). Queda grande, **em dez anos**, sem desaparecimento. Nenhum caso
histórico sustentaria "desaparece até 2031". O conteúdo correto foi absorvido em **e5**.

**`e6.3` — "Óculos de consumo rotulam continuamente o campo de visão e isso vira padrão."** Morto por
**P5**. Sustentava quatro descendentes, todos dependentes da mesma precondição de silício. SAM 3 =
3,45 GB; Aria Gen 2 = aparelho de pesquisa rodando geometria, não conceito; "super sensing" =
relato de 08/05/2025 citando *The Information*, não produto. Foi para a **seção 6** como wildcard,
que é onde uma aposta única deve morar.

### 12.7 Os efeitos rebaixados

**`e1`** — não rebaixado de nível, mas a `confianca: alta` ficou **condicionada** e a condição está
escrita na §5.2: ela vale porque a força contrária nomeada (a Roboflow, dizendo que quem vence usa
dado proprietário) perde **apenas na faixa de perguntas que nunca teve dataset**. Fora dessa faixa,
e1 é falso. Se eu tivesse escrito `alta` sem a condição, teria escrito uma coisa que os números que
eu mesmo abri contradizem.

**`e2.1`** — de `media` para `baixa`, por **P1 + P6**. Vistoria virando consulta avulsa é, em boa
parte, o mercado de laudo com outro contrato, e não sobrevive à pergunta pela causa sistêmica: não
achei mecanismo de preço que explique a passagem de software instalado para resposta avulsa.

**`e6`** — de `media` para `baixa`, por **P4**. A força contrária (quem é visto) tem instrumento
normativo já existente, com precedente de uso. O efeito sobrevive porque o instrumento mira
identificação e não descrição — mas isso é um argumento fino, e confiança fina merece rótulo baixo.

### 12.8 As buscas que não deram em nada

- **A fatia de produção servida por vocabulário aberto sem ajuste fino.** Este é o número que
  decidiria a seção 7 inteira. Busquei no relatório da Roboflow (que tem 200 mil projetos e não o
  reporta), na documentação da Ultralytics e do YOLOE, e no material de anotação. Não existe, pelo
  que abri. Sem ele, a aposta central do mapa fica sem chão numérico, e a §7 diz isso.
- **Adoção brasileira de vocabulário aberto.** Nenhuma empresa, nenhum contrato, nenhum número. A
  busca sobre varejo e agro devolveu marketing, e a única página que abri (FarmNews, 03/06/2026) não
  continha o que o resumo prometia. A nota sobre o Brasil ficou restrita a vigilância e regulação
  por causa disso — o que é um recorte enviesado, e está declarado.
- **`ORTHOS`.** Nenhuma fonte primária. Citado na §6 como lacuna, não como evidência.
- **Erro de vocabulário aberto em vídeo de câmera de segurança.** É o contexto de R2 e R3 e não achei
  medida nenhuma. Toda a evidência de falha que tenho é de imagem aérea (13/01/2026) e de benchmark
  acadêmico. Isso significa que **os efeitos de R2 e R3 estão apoiados em falha medida noutro
  domínio**, e a transferência é suposta, não demonstrada.
- **Desfecho do PL 2338 na Câmara.** Resumos de busca falam em pauta para 27/05/2026 e adiamentos
  sucessivos; não abri confirmação de votação. O texto diz "está na Câmara".
- **John Deere See & Spray** (404) e **PwC Brasil, tendências do agro 2026** (403). Não abriram,
  não entram.
- **NeurIPS Proceedings, PDF do artigo de Tömekçe et al.** — o servidor entregou binário que a
  ferramenta não conseguiu converter. O conteúdo veio do registro no arXiv, e por isso os números de
  custo e velocidade que um resumo de busca atribuía ao trabalho **não** estão no mapa (§8.6).

### 12.9 O que o bloco da disciplina trouxe e o que eu fiz com cada item

O bloco lista o que a turma varreu. Registro o destino de cada item, porque parte dele não entrou e
convém dizer por quê.

| Item do bloco | Destino |
|---|---|
| `segment-anything`, `sam2` | Seção 3.1 — substrato maduro |
| `SAM 3: Segment Anything with Concepts` | **R1**, seção 3.2 — a viga do mapa |
| `Grounded-Segment-Anything` | Seção 3.2 — citado; a parte de geração foi cortada na fronteira |
| `dinov2` / DINOv3 | Seção 3.2 — substrato do conceito; não virou raiz porque não fala linguagem |
| `rf-detr`, `YOLOX` | Seção 3.1 — detecção com classes fixas, madura |
| `supervision`, `cvat`, `label-studio` | §12.6 — a hipótese de que morrem foi **morta** por dado |
| `LAVIS` | Não usado — não abri fonte sobre estado atual |
| `PaddleOCR`, `EasyOCR`, `LaTeX-OCR` | Seção 3.1 — parsing maduro; PaddleOCR-VL citado com número |
| `donut` ("sem OCR") | §4.1 e §5.2 — usado como **caso histórico** para calibrar o prazo de e1 |
| `insightface`, `face-alignment` | Fora da fronteira — identificação biométrica é o que a norma já regula; o mapa trata do que ela **não** regula (§3.4) |
| `SlowFast` | Não usado — compreensão de vídeo com classes fixas, madura |
| `Skyvern` | Fora da fronteira — automação de navegador é agente, não percepção |
| `react-visual-annotator`, `ml-classifier`, `llama.cpp-ts` | Não usados como evidência; `llama.cpp-ts` (visão local sem servidor) é adjacente a R3 e eu não abri fonte sobre ele |
| `ORTHOS` | Seção 6 — sinal fraco sem fonte primária |

### 12.10 O que eu faria diferente se tivesse mais uma rodada

Três coisas, em ordem de importância.

**Procuraria o número que falta.** A fatia de produção servida por vocabulário aberto sem ajuste é o
único número que decide entre o cenário 9.3 e os outros dois, e eu não o tenho. Provavelmente ele não
existe publicado; nesse caso, a coisa honesta seria desenhar como medi-lo (amostra de vagas, amostra
de repositórios públicos, contagem de chamadas de API por tipo) em vez de apostar sem ele.

**Buscaria falha de vocabulário aberto em vídeo de vigilância.** Toda a evidência de erro que sustenta
a cautela deste mapa vem de imagem aérea e de benchmark. R2 e R3 acontecem em vídeo de câmera fixa,
e eu estou transferindo uma medida de um domínio para outro sem justificar a transferência.

**Testaria a hipótese de que R3 sobe para o poste em vez de descer para o corpo.** Isso apareceu no
cenário 9.3 como conclusão de escrita, não de pesquisa — eu não busquei nada sobre percepção aberta
em infraestrutura fixa de câmera, e se ela for o caminho real, a raiz 3 inteira está formulada no
lugar errado e três efeitos mudam de ator.
