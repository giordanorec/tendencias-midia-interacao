---
titulo: "Máquinas que veem qualquer coisa: visão de vocabulário aberto"
tipo: resumo-de-tendencia
disciplina: "CIN0055 Tendências em Mídia e Interação 2026.2"
tema: "11 de 19"
familia: "Percepção e mídia sintética"
zona: "Percepção e mídia sintética"
skill: futurizacao-futures-wheel
autor: grec
horizonte: 2031
recorte: "global, com nota sobre o Brasil"
data: 2026-09-12
mapa_completo: "futures-wheel-maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto.md"
---

# Máquinas que veem qualquer coisa: visão de vocabulário aberto

**Rodada com teto de 15 subagentes, dos quais 14 foram usados.** A skill prevê um expansor por ramo;
aqui os ramos foram agrupados por tema, e cada um dos três expansores de 2ª ordem marcou os **cinco ramos
mais férteis do seu lote** — de modo que a 3ª ordem saiu apenas sobre esses **quinze ramos de 2ª ordem**,
conforme a decisão TMI-0028, reafirmada pela TMI-0050, ambas em vigor. A consequência, que a decisão manda
declarar em vez de esconder: dos 118 efeitos de 2ª ordem, **103 ficaram sem filhos** —
não por serem menos importantes, mas porque o orçamento foi concentrado onde rende profundidade em vez de
distribuído por igual. Fase 8, infográficos, pulada. O mapa completo —
218 efeitos (40 + 118 + 60), conexões cruzadas, wildcards e 234 fontes
(80 abertas por inteiro) — está em `futures-wheel-maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto.md` e no HTML de mesmo nome.

## A inovação

Por vinte anos, um sistema de visão só reconhecia o que alguém tinha decidido — **no treino** — que ele
reconheceria: a lista de classes era artefato de projeto, fechada antes de a primeira imagem chegar. O que
mudou não é a máquina ver melhor. É **o vocabulário ter saído do treino e ido para a consulta**. O SAM 3
(Meta, 19/11/2025) formaliza a virada como *Promptable Concept Segmentation*: entra uma frase nominal curta,
saem máscaras e IDs de **todas** as instâncias que casam com ela, em imagem e em vídeo. A escala mede o salto
— 4 milhões de sintagmas nominais únicos no treino de alta qualidade contra as 1.203 categorias do LVIS, que
foi por anos a régua do campo — e o placar diz o resto: 54,1 de cgF1 no SA-Co/Gold contra 24,6 do OWLv2 e
13,0 do Gemini 2.5 Flash, a 74% do teto humano medido (72,8). Embaixo corre o **DINOv3** (14/08/2025), um
professor de 7 bilhões de parâmetros treinado em 1,7 bilhão de imagens **sem rótulo nenhum**, extraídas de um
pool de 17 bilhões de posts públicos do Instagram — é ele que torna a percepção aberta economicamente
possível, e é dele que vem o fato incômodo de que o olhar estatístico da máquina é o olhar da rede social. E
ao lado corre a terceira perna, a menos falada: o documento lido **como imagem**, sem OCR, do Donut (2021) ao
DeepSeek-OCR e ao Glyph, que mediram em outubro de 2025, por caminhos independentes e em duas semanas, que
renderizar texto como pixel custa **menos** tokens do que ingeri-lo como caractere.

**A leitura fácil do tema não sobrevive inteira à evidência, e esta rodada a qualifica.** A capacidade de
segmentar por texto existe desde 2023, empilhando Grounding DINO com SAM; a meta-análise de 26.104 artigos do
CVPR/ICLR/NeurIPS (arXiv:2510.09586) registra que os papers explícitos de vocabulário aberto **caíram** entre
2023 e 2025 — não por fracasso, mas porque a percepção aberta deixou de ser tarefa publicável e virou
*front-end* padrão de outros modelos. E o que roda em produção não é o modelo da manchete: o SAM 3 leva 2.921
ms por imagem numa RTX PRO 6000 contra 8,4 ms de um YOLO26n-seg, sustenta cerca de cinco objetos em vídeo
quase em tempo real, e a própria Roboflow recomenda usá-lo para **rotular** e treinar um modelo menor. Quando
a indústria de vídeo diz "busca em linguagem natural", quase sempre é outra coisa: o AI Search da Milestone é
um modelo ajustado sobre mais de 300.000 **categorias**. Vocabulário grande não é vocabulário aberto.

O que rompe, então, não é a acurácia — é a **interface** e o **preço**. Na interface, porque quem decide o que
a câmera procura deixou de ser quem treina e passou a ser quem consulta, numa frase digitada em tempo de
execução que não tem versão, não passa por revisão e não deixa rastro de treino: a camada de governança que
existia por acidente técnico desapareceu. No preço, porque a visão perdeu tabela própria — a página oficial da
Gemini API cobra "text / image / video" pelo mesmo valor por token, o que põe mil imagens na ordem de
US$ 0,13 contra os US$ 50,00 por mil páginas do Amazon Textract Forms. É essa diferença, e não o benchmark,
que reorganiza o setor até 2031.

## A tese

O vocabulário não migrou do treino para a consulta: espalhou-se por cinco decisões prévias sem dono — a lista do detector de primeiro estágio, o limiar recall-precisão, o teto de objetos por GPU, a língua declarada e a reescrita da frase —, de modo que o vocabulário infinito que o usuário experimenta é uma pergunta livre sobre um mundo já recortado cinco vezes antes dela.

## Os 40 efeitos de 1ª ordem

| id | Efeito | STEEP | Prob. | Prazo |
|---|---|---|---|---|
| `e1_01` | A frase digitada em runtime passa a ser o classificador, e ela não deixa rastro | Político | alta | até 2028 |
| `e1_02` | Entre o que o operador escreve e o que o modelo recebe aparece uma camada de reescrita invisível | Tecnológico | média | até 2028 |
| `e1_03` | A moderação do que se pode procurar migra do dataset para um blocklist privado de consultas, atualizável em minutos e sem supervisão externa | Político | média | até 2028 |
| `e1_04` | Dizer que o conceito NÃO está ali vira requisito formal, e não subproduto | Tecnológico | alta | até 2028 |
| `e1_05` | Auditar deixa de ser inspecionar uma lista de 80 classes e passa a ser inspecionar um espaço de consultas infinito — e nenhum método foi… | Político | alta | 2028-2031 |
| `e1_06` | O modelo de conceito aberto não vai para produção: vai para a sala de aula *(óbvio)* | Econômico | alta | até 2028 |
| `e1_07` | O critério de projeto deixa de ser acurácia e passa a ser custo por quadro *(óbvio)* | Econômico | alta | até 2028 |
| `e1_08` | Em vídeo, a percepção por conceito é racionada por objeto, não por câmera | Tecnológico | alta | até 2028 |
| `e1_09` | A corrida competitiva migra de acurácia para throughput | Tecnológico | alta | até 2028 |
| `e1_10` | Ninguém calculou o custo energético da percepção aberta por câmera-ano, e a ausência é o achado | Ecológico | média | 2028-2031 |
| `e1_11` | A promessa de um modelo para tudo não elimina os treinos especializados: multiplica-os | Tecnológico | alta | 2028-2031 |
| `e1_12` | Desenhar caixa de propósito geral deixa de ter preço: um benchmark mediu rotulagem automática a cerca de 1/5.000 do tempo e 1/100.000 do… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_13` | O que some não é a anotação: é o meio da escada *(óbvio)* | Econômico | alta | até 2028 |
| `e1_14` | A anotação não morre: vira prompt e exemplar | Social | alta | até 2028 |
| `e1_15` | O modelo passa a anotar os dados que treinam o próximo modelo, e a alça se fecha | Tecnológico | média | 2031-2036 |
| `e1_16` | A busca por pessoa muda de regime jurídico sem mudar de finalidade | Político | alta | até 2028 |
| `e1_17` | O falso positivo deixa de ser defeito e vira decisão de engenharia assumida por escrito *(óbvio)* | Social | alta | até 2028 |
| `e1_18` | A definição operacional de anormal passa a ser escrita por quem está de plantão | Político | alta | até 2028 |
| `e1_19` | A malha que vai ganhar busca por descrição já é majoritariamente privada | Social | alta | 2028-2031 |
| `e1_20` | A busca por atributo tende a passar entre as duas proibições do artigo 5 do AI Act: não é identificação biométrica remota (não diz quem é a… | Político | média | 2028-2031 |
| `e1_21` | A vigilância por descrição chega como linha de produto, não como decisão política *(óbvio)* | Econômico | alta | até 2028 |
| `e1_22` | Extrair campo de documento cai de uma a duas ordens de grandeza de preço *(óbvio)* | Econômico | alta | até 2028 |
| `e1_23` | A arquitetura de preço por capacidade se dissolve | Econômico | alta | até 2028 |
| `e1_24` | Troca-se um erro legível por um erro plausível *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_25` | O modelo lê, mas não sabe onde leu | Tecnológico | alta | 2028-2031 |
| `e1_26` | Layout, tipografia e diagramação voltam a ser informação semântica, em vez de decoração descartada na ingestão | Social | média | 2028-2031 |
| `e1_27` | A página como formato de memória de máquina é aposta ainda não paga | Tecnológico | média | 2028-2031 |
| `e1_28` | Toda imagem que entra num sistema que lê por descrição é potencialmente uma instrução *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_29` | O ataque mora na etapa mais banal do pipeline: o redimensionamento | Tecnológico | alta | até 2028 |
| `e1_30` | Nasce um gênero de peça gráfica endereçada à máquina e não ao humano: a camiseta que impede o detector de casar a descrição, o rodapé que… | Social | média | 2028-2031 |
| `e1_31` | O modo de falha característico não é o erro: é o zero | Econômico | média | até 2028 |
| `e1_32` | A primeira frase é excelente e a segunda pergunta é onde mora o perigo *(óbvio)* | Social | alta | até 2028 |
| `e1_33` | A descrição automática universal ameaça substituir investimento em alt text humano e em design acessível por acessibilidade de fachada | Social | média | 2028-2031 |
| `e1_34` | A carga de verificar a máquina recai sobre quem menos pode verificar | Social | alta | até 2028 |
| `e1_35` | A imagem publicada passa a ter dois públicos, e o segundo é maior | Social | média | 2028-2031 |
| `e1_36` | O acervo pessoal fica pesquisável por descrição, localmente e sem etiqueta | Social | alta | até 2028 |
| `e1_37` | A escolha do modelo de visão vira decisão jurídica antes de técnica | Econômico | alta | até 2028 |
| `e1_38` | Peso aberto passa a conviver com inauditabilidade contratual e de dado | Político | alta | até 2028 |
| `e1_39` | O vocabulário aberto é aberto em inglês *(óbvio)* | Social | alta | até 2028 |
| `e1_40` | O olhar estatístico da máquina é o olhar da rede social, e ele chega enviesado no conceito mais básico *(óbvio)* | Social | alta | até 2028 |

Oito rótulos organizam a leitura, e foi por eles que os lotes de expansão foram formados. **O vocabulário vira fala** (`e1_01` a `e1_05`): a frase digitada em tempo de execução virou o classificador e não deixa rastro — num benchmark de anomalia em vigilância o F1 vai de 0,09 a 0,64 sem trocar modelo nem imagem, só a instrução; entre o que o operador escreve e o que o modelo recebe há uma camada de reescrita invisível; a moderação migrou do dataset para um blocklist privado atualizável em minutos; dizer que o conceito **não** está ali virou requisito formal, dentro da própria métrica; e auditar deixou de ter método, porque o espaço de consultas é infinito. **A arquitetura de racionamento** (`e1_06` a `e1_11`): o modelo de conceito aberto não vai para produção, vai para a sala de aula — 2.921 ms contra 8,4 ms por quadro, cerca de cinco objetos por GPU em vídeo, o critério de projeto virando custo por quadro, a corrida migrando de acurácia para throughput, a conta energética por câmera-ano que ninguém fez, e a promessa de um modelo para tudo multiplicando treinos especializados em vez de eliminá-los. **O fim do meio da escada** (`e1_12` a `e1_15`): desenhar caixa de propósito geral perdeu preço (US$ 1,18 contra US$ 124.092,54), mas o que some é o degrau de entrada, não a anotação — que volta como prompt e exemplar, enquanto o modelo passa a anotar os dados que treinam o próximo modelo. **Vigilância por descrição** (`e1_16` a `e1_21`): buscar pessoa por atributo muda de regime jurídico sem mudar de finalidade; o falso positivo vira decisão de engenharia assumida por escrito; a definição de *anormal* passa a ser escrita por quem está de plantão; a malha que recebe a busca já é majoritariamente privada; e isso chega como linha de produto de VMS, não como decisão política. **O documento como imagem** (`e1_22` a `e1_27`): o preço da extração cai de uma a duas ordens de grandeza e a arquitetura de preço por capacidade se dissolve; troca-se o erro legível pelo erro plausível; o modelo lê mas não sabe **onde** leu; layout e tipografia voltam a ser semântica; e a página como memória de máquina continua sendo aposta não paga. **A imagem vira canal de comando** (`e1_28` a `e1_31`): toda imagem que entra num sistema que lê por descrição é potencialmente uma instrução, o ataque mora na etapa mais banal do pipeline — o redimensionamento —, nasce um gênero de peça gráfica endereçada à máquina, e o modo de falha característico não é o erro, é o **zero**. **Quem descreve o mundo** (`e1_32` a `e1_36`): a primeira frase é excelente e a segunda pergunta é onde mora o perigo; a descrição universal ameaça virar acessibilidade de fachada; a carga de verificar recai sobre quem menos pode verificar; a imagem publicada ganha um segundo público, maior que o primeiro; e o acervo pessoal passa a existir só se o modelo souber nomeá-lo. **A abertura que não é aberta** (`e1_37` a `e1_40`): a escolha do modelo virou decisão jurídica antes de técnica, peso aberto convive com inauditabilidade contratual, o vocabulário aberto é aberto **em inglês**, e o traço visual de base de toda a indústria carrega o olhar da rede social de onde foi extraído.

## Os 5 mais impactantes

*O porquê aparece aqui abreviado; o texto integral e a cadeia de efeitos estão no mapa completo.*

1. **`e2_A19` — A cascata: o modelo aberto só vê o que um detector fechado já selecionou.** É a correção estrutural que reorganiza o mapa inteiro. Só os recortes de pessoa e veículo passam pelo modelo de conceito, nunca o quadro inteiro, com cache dos 10.000 mais recentes.

2. **`e1_06` — O modelo de conceito aberto não vai para produção: vai para a sala de aula.** Define a economia de todo o tema. Entre um modelo de 848M a 2.921 ms por imagem e um detector de 6,4 MB a 8,4 ms, nenhuma operação com volume escolhe o primeiro para rodar sempre — mas o primeiro sabe nomear o que o segundo precisa aprender.

3. **`e1_16` — Buscar pessoa por descrição muda de regime jurídico sem mudar de finalidade.** Sustenta todo o ramo de vigilância e a nota Brasil. Identificar por característica corporal é biometria e é regulado; descrever roupa, objeto e postura atinge a mesma capacidade operacional e cai fora do art. 11 da LGPD, do art. 5 do AI Act e da doutrina que a ANPD construiu.

4. **`e1_12` — O preço do rótulo cai cinco ordens de grandeza, e cai de forma desigual.** US$ 1,18 contra US$ 124.092,54 pela mesma tarefa reconfigura a cadeia inteira de visão, mas o gradiente F1 0,785 / 0,640 / 0,215 (VOC, COCO, LVIS) mostra que a economia se realiza onde o trabalho era barato e não se realiza onde era caro. Esse eixo — o comum trivializado e o raro intacto — reaparece em oito lugares do mapa, sempre na mesma direção, e explica simultaneamente o fim do meio da escada, o fechamento do dado raro e o buraco do acervo regional.

5. **`e1_39` — O vocabulário aberto é aberto em inglês.** Com vocabulário fixo, o rótulo era traduzido uma vez e valia para todos; com consulta aberta, a perda incide em cada pergunta e recai sobre termo regional, gíria e conceito local. O ganho de +27,65 pontos de Accuracy@1 obtido com legendas escritas originalmente em português mede a distância, e a resposta barata da engenharia — traduzir a consulta antes de enviar — empilha uma segunda reescrita invisível sobre a que o fabricante já faz.

**O padrão por trás dos cinco.** Nenhum deles é sobre a máquina enxergar melhor. Os cinco nomeiam lugares onde a decisão sobre **o que se olha** já estava tomada antes de alguém perguntar — e nenhum desses lugares aparece em catálogo, em edital ou em padrão. A lista de classes do detector de primeiro estágio decide o que chega a ser olhado, e só recortes de pessoa e veículo passam (`e2_A19`). A razão de 347 vezes por quadro decide que o modelo de conceito ensina em vez de servir, e o que vai para produção é um detector fechado com vocabulário congelado na data da destilação (`e1_06`). O regime jurídico decide que **descrever** alcança operacionalmente o que **identificar** não pode, sem tocar no art. 11 da LGPD nem no art. 5 do AI Act (`e1_16`). O gradiente entre o comum e o raro — F1 0,785 no VOC, 0,640 no COCO, 0,215 no LVIS — decide que a economia se realiza onde o trabalho já era barato (`e1_12`). E a língua decide quanto se perde **em cada consulta**, e não uma vez só na tradução do rótulo (`e1_39`). Não é um mapa sobre percepção: é um mapa sobre **onde mora o recorte** e sobre quem o escreve.

A distribuição por ordem diz a mesma coisa por outro caminho. O eixo Social, que domina a 1ª ordem com 30%, cai para 20% na 2ª e 15% na 3ª; o Político salta de 18% para 32% e fica em 30%, e o Econômico sobe de 22% a 26% e 27%. Juntos, regra e preço saem de 40% na 1ª ordem para mais da metade do mapa nas duas seguintes. O que começa como pergunta sobre quem descreve o mundo termina como cláusula e como fatura. O Tecnológico faz o percurso inverso e volta: 28%, 18%, 25% — desce quando o efeito vira disputa jurídica e sobe de novo na 3ª ordem, porque as correções que aparecem no fim da cascata são técnicas outra vez: o teste-canário de cem itens conhecidos, o caderno de consultas exportável, a busca que desce para o silício da câmera. Para quem projeta mídia e interação a leitura prática é essa: o que vai definir o que se pode perguntar a uma imagem até 2031 não está sendo escrito em consulta pública sobre inteligência artificial. Está sendo escrito em formulário de seguro, em código de autorregulamentação publicitária, em papel de trabalho de auditoria contábil e em prazo de conformidade de acessibilidade documental — e em cinco decisões de engenharia que ninguém versiona.

## Wildcards

12 cenários de baixa probabilidade e alto impacto — 3 de oportunidade, 5 de risco, 4 ambíguos. Dez dos doze atacam a mesma junta, e é uma junta que ninguém projetou: **a governança deste regime existe por acidente arquitetural**. A moderação funciona porque a consulta é texto e passa por um servidor; a explicação existe porque esse servidor vê a frase, o recorte e a resposta ao mesmo tempo. Os wildcards mostram cinco maneiras não coordenadas de essa junta ceder, e nenhuma delas é uma decisão contra a governança — todas são subproduto de decisões tomadas por custo, por privacidade, por desempenho ou por defesa jurídica: o canal que não tem texto a moderar, porque o exemplar visual é o que mais melhora o resultado (`w10`); o silício que dispensa o servidor (`w9`); o formato que atravessa a fronteira entre fabricantes e não é legível (`w1`); a lista de classes que ninguém versiona (`w4`); e o artefato que ninguém é obrigado a guardar (`w5`).

Duas assimetrias organizam o resto. A primeira é sobre custo: o mapa trata a razão de 347 vezes como restrição, mas ela é hoje a maior fonte de fricção protetora do sistema — é o custo que impede a percepção contínua, obriga o recorte e mantém o servidor no caminho. É a única variável cuja **queda** produz o pior cenário de governança do conjunto (`w9`), e é a que ninguém acompanha como risco. A segunda é sobre de onde vêm as correções: **nenhum dos três cenários positivos vem de regulação de inteligência artificial**. Um vem do mercado segurador, cujo ciclo de renovação é anual contra o ciclo decenal da lei, e que é o único ator com poder de exigir o conjunto devolvido e não só a consulta (`w7`); outro vem da norma de auditoria contábil, que não pergunta se a máquina acertou e sim se havia base para confiar nela, e acaba institucionalizando o único procedimento auditável que o mapa inteiro produziu (`w11`); o terceiro vem de três obrigações jurídicas que não se conhecem — tarja processual, cláusula de rescisão de licença e prazo de acessibilidade documental — e produz, como externalidade, o corpus imagem-texto nativo em português que nenhuma política industrial financiou (`w6`).

- **w1 · O índice que era um rosto** (ambíguo). Entre 2027 e 2029 o vetor por recorte se firma como formato de fato da interoperabilidade semântica entre fabricantes de VMS, porque o ONVIF Profile M não tem campo para sintagma nominal arbitrário e o grupo de metadados semânticos, aberto….
- **w2 · Injeção de pavio longo: o arquivo que guarda a instrução até o leitor existir** (negativo). Entre 2026 e 2028 a queda de preço da leitura por imagem transforma digitalização de acervo em operação de rotina, e a cadeia de preservação passa a reter dois artefatos por página — o preservável e o pesquisável.
- **w3 · A redundância que não era redundante** (negativo). A dupla inferência — dois modelos de origens diferentes leem a mesma página e só o campo divergente vai ao humano — se estabelece entre 2027 e 2029 como o controle padrão contra o erro plausível, porque é o único mecanismo que detecta um….
- **w4 · O dia em que o acervo mudou de resposta** (ambíguo). Em 2028 uma atualização de firmware altera a lista de classes do detector de primeiro estágio num parque grande de câmeras — mudança de custo, não de política, feita para caber no orçamento de GPU. Como é esse detector, e não o modelo de….
- **w5 · O vazamento que virou a única auditoria** (ambíguo). Entre 2027 e 2029 o par de campos requisitante e finalidade se difunde antes de qualquer lei, empurrado por apólice e por contrato corporativo, porque é o item mais barato de implementar num VMS. Em 2030 esse acervo vaza: dezenas de….
- **w6 · O corpus que ninguém financiou** (positivo). Três obrigações que não se falam produzem, entre 2027 e 2030, o insumo que nenhuma política industrial brasileira orçou.
- **w7 · A apólice que pediu o conjunto devolvido** (positivo). Em 2028 um caso de abordagem indevida com dano documentado chega à seguradora de um integrador.
- **w8 · A paridade em português chega pela porta que a compra pública não pode abrir** (negativo). Entre 2028 e 2030 o modelo que melhor responde em português passa a ser um de pesos abertos sob licença permissiva e origem não anglófona — a linhagem que já declara leitura de documento em 32 idiomas e que a frente de inovação desta….
- **w9 · O barateamento que piora tudo** (ambíguo). Em 2029 uma combinação de silício de câmera e arquitetura sem destilação derruba em duas ordens de grandeza o custo por quadro da percepção por conceito.
- **w10 · A consulta que não tem texto** (negativo). Toda a moderação de consulta existente lê texto: a lista de categorias proibidas — raça, etnia, nacionalidade, crença, descrição subjetiva, nome de pessoa pública — é aplicada por um modelo que classifica a frase, com 96% de precisão e 79%….
- **w11 · A auditoria executável que veio da contabilidade** (positivo). As emendas de análise assistida por tecnologia do PCAOB, vigentes para exercícios iniciados em ou após 15/12/2025, obrigam o auditor a avaliar a confiabilidade da informação processada por ferramenta tecnológica — e inspeções já registram….
- **w12 · A imagem feita para a consulta** (negativo). O teste de fechamento que o designer passa a rodar antes de publicar — escrever a consulta que a peça deveria casar e executá-la — custa uma consulta, e por isso se difunde.

O que os 12 revelam em conjunto está em `json/wildcards.json` e na nota completa.

## Nota Brasil

Lidos em conjunto, os 87 efeitos com recorte brasileiro não descrevem um país atrasado na técnica. Descrevem um país cujo instrumento jurídico está calibrado para **identificar**, enquanto a capacidade que chega **descreve**. A doutrina brasileira mais sólida sobre visão em espaço público — o Despacho Decisório nº 2/2026/SFI, com que a ANPD suspendeu o reconhecimento facial nas escolas do Paraná — está construída sobre o art. 11 da LGPD, isto é, sobre **dado biométrico**; a vitória do IDEC no caso do Metrô de São Paulo protege o usuário de um serviço e não o transeunte; e a LGPD não alcança o uso policial. Uma consulta do tipo *alguém de mochila vermelha* não identifica ninguém e não deduz característica protegida: passa entre as três (`e1_20`, `e2_A03`, `e3_T1_27`). E o vetor local aponta para o lado oposto do freio — onde o fabricante americano bloqueia raça por padrão, o edital original do Smart Sampa chegou a especificar busca por cor e por vadiagem (`e1_18`, `e2_A07`, `e2_B15`), numa malha de 50 mil câmeras das quais **30 mil são privadas integradas**, que o município não compra, não especifica e não consegue inventariar (`e1_19`, `e2_B22`, `e3_T2_04`).

Na prova, o Brasil tem o instrumento e não o usa. O art. 473, II do CPC já obriga o perito a indicar o método **de ofício** — e a frase É o método, num sistema em que o F1 vai de 0,09 a 0,64 sem trocar modelo nem imagem (`e3_T1_02`). O CESeC mediu o tamanho do não uso: 33 de 52 acórdãos analisados (63,5%) decidem mencionando reconhecimento facial sem nenhum dos três elementos mínimos de confiabilidade (`e1_17`, `e2_B13`). Os arts. 158-A a 158-F do Código de Processo Penal enumeram dez etapas de cadeia de custódia, todas atribuídas a agente público ou perito — e não descrevem vestígio digital, de modo que o particular a quem a polícia pede que rode a busca no próprio equipamento não é nenhum dos dois (`e3_T1_10`). O expansor procurou e **não encontrou nenhuma norma brasileira** — federal, estadual ou resolução — que obrigue a registrar o termo de busca usado em videomonitoramento; a única do mundo que nomeia `search terms` na trilha de auditoria é a Washington ESSB 6002, sancionada em 30/03/2026 (`e3_T1_08`, `e3_T1_15`). A ausência é o achado.

No documento, a ordem se inverte e o Brasil aparece adiantado por acidente. A Resolução CNJ nº 615/2025 está em vigor desde 14/07/2025 sobre 62 tribunais — 66% do país — e exige registro no Sinapses e supervisão humana efetiva: é norma anterior à tecnologia, e vai colidir exatamente com o modo de falha dela, porque não se tarja o sigiloso que não se sabe localizar, e o modelo fim a fim entrega sentido sem coordenada (`e1_24`, `e2_C08`, `e2_C12`). Pela mesma razão, o IBYCT — projeto do IBICT com o Arquivo Nacional, montado sobre Tesseract e Transkribus, sem menção a VLM — não está uma geração atrás: está na **metade da arquitetura que a exigência de evidência de leitura torna permanente** (`e1_25`, `e2_C10`, `e3_T2_11`). E os mais de 59 bilhões de NF-e autorizadas fazem o documento de maior volume do país já nascer estruturado, o que protege uma parte do problema e deixa exposta a outra — o processo, o prontuário, o contrato e o acervo, justamente os que não têm contraparte com que conferir a saída (`e2_C02`).

A língua é o efeito brasileiro mais estrutural, e o menos discutido. Na avaliação do CLIP sobre o FM30k — conjunto cujas legendas foram **escritas originalmente em português**, não traduzidas —, o ajuste fino recuperou 27,65 pontos percentuais de Accuracy@1 de imagem para texto (209% relativos) e 15,47 pontos no sentido inverso (385%): ganho relativo dessa ordem só existe sobre linha de base ruim (`e1_39`). A engenharia resolve isso do jeito mais barato — traduzindo a consulta para o inglês antes de mandá-la ao modelo —, o que empilha uma **segunda** camada de reescrita invisível sobre a que o fabricante já faz, e deixa o operador brasileiro com duas reescritas a reconstituir onde o americano tem uma (`e2_C37`, `e3_T2_22`, `e3_T2_24`). Não há benchmark brasileiro de vocabulário aberto, não há avaliação de termo regional, e mesmo a solução nacional em português foi construída traduzindo do inglês por restrição de custo (`e2_A33`, `e3_T2_23`, `e3_T2_25`). O dinheiro tampouco corrige isso: os R$ 3 bilhões orçados pelos bancos para 2026 equivalem a cerca de 1% do mercado global de visão computacional com IA, e nem eles nem os R$ 23 bilhões do Plano Brasileiro de IA até 2028 têm linha para constituir corpus legendado em português — são orçamento de **compra** (`e2_A26`, `e2_C06`, `e2_C38`). Some-se a isso que a Lei 14.133/2021 protege a titularidade de TIC **enumerando** — documentação, código-fonte, modelos de dados, bases de dados —, e é a enumeração que a torna cega ao caderno de consultas: o órgão que troca de fornecedor leva os quatro artefatos e perde o que fazia o sistema funcionar (`e3_T1_26`). O sinal institucional de que a cauda longa brasileira quebra em escala populacional já foi dado em 2026, quando o gov.br encerrou a obrigatoriedade do reconhecimento facial no login diário (`e1_40`, `e2_C42`).

## O que me faria mudar de ideia

A rodada declarou de antemão dois critérios de refutação: evidência de que a adoção já passou da maioria inicial de Rogers, e evidência de que a tecnologia não rompe nada — só melhora o que já existe. O segundo **foi parcialmente acionado durante a análise**, e é por isso que a raiz saiu confirmada com ressalva em vez de confirmada. O que observar daqui para frente:

- Um modelo de conceito aberto rodando dentro da câmera, em produto vendido, a taxa contínua e com custo por câmera-mês abaixo da licença de analítica de US$ 3 a 15 — isso derruba a arquitetura de racionamento e, com ela, a tese do professor caro de modelos fechados.
- Uma medição independente de F1 acima de 0,6 na cauda longa do LVIS sem exemplar visual e sem ajuste por domínio, contra os 0,215 medidos hoje: cai o eixo comum-contra-raro que organiza oito ramos do mapa.
- Um corpus imagem-legenda escrito nativamente em português na ordem de centenas de milhões de pares, com avaliação publicada em termo regional e não em média agregada: cai a tese da língua e boa parte da nota Brasil.
- Uma norma, decisão judicial ou cláusula de edital que obrigue a reter, datar e atribuir autoria à consulta, à consulta reescrita E ao conjunto devolvido em videomonitoramento, com prazo: cai a tese do vazio de governança, que hoje se apoia na ausência de qualquer obrigação desse tipo no mundo, exceto a lei de Washington sobre leitores de placa.
- Um VLM que devolva coordenada confiável do trecho lido — evidência de leitura nativa, sem motor clássico ao lado: cai o desenho híbrido no documento e com ele a exigência de dois motores por página.
- A liberação dos conjuntos de treino SA-Co e a publicação de uma matriz oficial de fps por classe de GPU e número de objetos (pedida na issue #155 desde 20/11/2025): cai a tese da inauditabilidade por contrato, e o edital volta a ser especificável.
- Um caso real de busca por descrição apresentado em juízo com log completo e taxa de erro medida, e admitido ou rejeitado com fundamento nesses elementos: qualquer um dos dois desfechos, datado antes de 2028, antecipa em três anos toda a terceira ordem jurídica deste mapa.

## Bibliografia essencial

As fontes que sustentam as afirmações centrais deste resumo, todas abertas por inteiro. A lista completa — 234 fontes, 80 marcadas como abertas pela própria frente que as leu — está na nota Obsidian e em `json/bibliografia.json`.

1. SAM 3: Segment Anything with Concepts — Carion, Gustafson, Hu et al. (Meta FAIR), arXiv:2511.16719: 4 milhões de sintagmas, cgF1 54,1 contra teto humano 72,8 — `https://arxiv.org/html/2511.16719v2`
2. Meta AI — SAM 3.1: multiplexing de objetos e global reasoning (27/03/2026) — `https://ai.meta.com/blog/segment-anything-model-3/`
3. Meta AI — DINOv3: 7B de parâmetros, 1,7 bilhão de imagens sem rótulo, extraídas de 17 bilhões de posts do Instagram — `https://ai.meta.com/blog/dinov3-self-supervised-vision-model/`
4. Vision Language Models: A Survey of 26K Papers (arXiv:2510.09586) — os papers de vocabulário aberto caem porque a capacidade virou front-end padrão — `https://arxiv.org/html/2510.09586v1`
5. Does DINOv3 Set a New Medical Vision Standard? (arXiv:2509.06467) — onde a imagem não é foto, a percepção aberta colapsa; modelos maiores podem ir pior — `https://arxiv.org/html/2509.06467v1`
6. Auto-Labeling Data for Object Detection (arXiv:2506.02359) — F1 0,785 em VOC, 0,640 em COCO e 0,215 em LVIS: a economia evapora na cauda longa — `https://arxiv.org/html/2506.02359v1`
7. Open-Attribute Person Retrieval (arXiv:2508.01389) — buscar pessoa por atributo novo: mAP 13,16 contra 31,96; sem seção de ética — `https://arxiv.org/html/2508.01389`
8. A Survey on Open-Vocabulary Detection and Segmentation (arXiv:2307.09220) — a linhagem antes do SAM 3 — `https://ar5iv.labs.arxiv.org/html/2307.09220`
9. Ultralytics — documentação do SAM 3: 2.921 ms por imagem numa RTX PRO 6000 contra 8,4 ms do YOLO26n-seg — `https://docs.ultralytics.com/models/sam-3`
10. Roboflow — o que é o SAM 3, e por que usá-lo para rotular em vez de servir — `https://blog.roboflow.com/what-is-sam3/`
11. GitHub — facebookresearch/sam3, issue #342: pedido para voltar à licença Apache 2.0 de SAM e SAM 2 — `https://github.com/facebookresearch/sam3/issues/342`
12. DeepSeek-OCR: Contexts Optical Compression (arXiv:2510.18234) — 97% de precisão abaixo de 10x de compressão — `https://arxiv.org/abs/2510.18234`
13. Glyph: Scaling Context Windows via Visual-Text Compression (arXiv:2510.17800) — mesma conclusão, caminho independente, duas semanas depois — `https://arxiv.org/abs/2510.17800`
14. Optical Context Compression Is Just (Bad) Autoencoding (arXiv:2512.03643) — o contra-sinal que quase não circulou — `https://arxiv.org/abs/2512.03643`
15. How Much Information Can a Vision Token Hold? (arXiv:2602.02539) — a lei de escala com três fases: estável, instável, colapso — `https://arxiv.org/abs/2602.02539`
16. Ai2 — Molmo 2: apontamento com coordenada e timestamp, IDs persistentes em vídeo, Apache 2.0 — `https://allenai.org/blog/molmo2`
17. Google — página oficial de preços da Gemini API: 'text / image / video' pelo mesmo valor por token — `https://ai.google.dev/gemini-api/docs/pricing`
18. Amazon Web Services — preços do Textract: US$ 50,00 por mil páginas em Analyze Document Forms — `https://aws.amazon.com/textract/pricing/`
19. Epoch AI — a curva de preço por token em texto, e a declaração de que visão NÃO é coberta por nenhum observatório independente — `https://epoch.ai/data-insights/llm-inference-price-trends`
20. Verkada — AI-powered search (whitepaper 0726): a consulta do usuário é reescrita, há blocklist privado, e a empresa prefere recall a precisão — `https://docs.verkada.com/docs/ai-powered-search-whitepaper.pdf`
21. Are Multimodal LLMs Ready for Surveillance? (arXiv:2603.04727) — F1 de 0,09 a 0,64 mudando só a instrução — `https://arxiv.org/abs/2603.04727`
22. Cloud Security Alliance — Image-Based Prompt Injection: 64% de sucesso em modelos de fronteira, sem defesa que neutralize todas as variantes — `https://labs.cloudsecurityalliance.org/research/csa-research-note-image-prompt-injection-multimodal-llm-2026/`
23. Gonzalez Penuela, Jung, Lin, Hu e Azenkot (Cornell, arXiv:2602.13469) — 91,8% na primeira descrição, 56,6% na conversa seguinte, 34,6% de alucinação ao extrair texto — `https://arxiv.org/html/2602.13469`
24. American Foundation for the Blind — Beyond Alt Text: descrever é decidir o que é relevante; a IA não pode ser a autora final — `https://afb.org/blog/entry/alt-text-age-ai`
25. Kalluri, Agnew, Cheng, Owens, Soldaini e Birhane (arXiv:2309.15084) — mais de 11 mil patentes de vigilância derivadas de pesquisa acadêmica de visão — `https://arxiv.org/abs/2309.15084`
26. Jake Goldenfein — Facial Recognition Is Only the Beginning (Public Books) — `https://www.publicbooks.org/facial-recognition-is-only-the-beginning/`
27. Kate Crawford e Trevor Paglen — Excavating AI: The Politics of Images in Machine Learning Training Sets — `https://excavating.ai/`
28. Jussi Parikka — Operational Images: Between Light and Data (e-flux) — `https://www.e-flux.com/journal/133/515812/operational-images-between-light-and-data`
29. Núcleo Jornalismo e Investigate Europe — Innovatrics e cerca de 1 milhão de crianças em mais de 1.700 escolas do Paraná — `https://nucleo.jor.br/reportagem/2026/03/13/sistema-reconhecimento-facial-escolas-parana-brasil/`
30. ANPD, Despacho Decisório nº 2/2026/SFI — suspensão do reconhecimento facial em escolas públicas do Paraná, comentada pela Data Privacy Brasil — `https://www.dataprivacybr.org/anpd-suspende-o-uso-de-reconhecimento-facial-em-escolas-publicas-do-parana/`
31. IBYCT — Intelligent Byte and Character Transcriber (IBICT com o Arquivo Nacional) — `https://projetoibictarquivonacional.github.io/`
32. Fórum da comunidade Roboflow — auto-rotulagem com SAM 3 'concluída com sucesso' e zero anotações, com créditos cobrados — `https://discuss.roboflow.com/t/auto-label-with-sam-3-completed-with-0-annotations-but-consumed-credits/12302`

---

*Mapa gerado pela skill `futures-wheel` (modo 1, a partir de uma inovação) em 12/09/2026, com teto de 15 subagentes, dos quais 14 usados. Fase 8, infográficos, pulada por instrução da rodada. 218 efeitos, 168 não óbvios (77%) depois da auditoria de classificação, que corrigiu 18 classificações. Contrato em `CONTRATO.md`, histórico em `log.txt`, artefatos intermediários em `json/`.*