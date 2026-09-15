---
titulo: "Mídia sintética controlável: vídeo e imagem"
tipo: resumo-de-tendencia
disciplina: "CIN0055 Tendências em Mídia e Interação 2026.2"
tema: "12 de 19"
familia: "Percepção e mídia sintética"
zona: "Percepção e mídia sintética"
skill: futurizacao-futures-wheel
autor: grec
horizonte: 2031
recorte: "global, com nota sobre o Brasil"
data: 2026-09-12
mapa_completo: "futures-wheel-midia-sintetica-controlavel-video-e-imagem.md"
---

# Mídia sintética controlável: vídeo e imagem

**Rodada com teto de 15 subagentes, dos quais 14 foram usados.** A skill prevê um expansor por ramo;
aqui os ramos foram agrupados por tema, e cada um dos três expansores de 2ª ordem marcou os **cinco ramos
mais férteis do seu lote** — de modo que a 3ª ordem saiu apenas sobre esses **quinze ramos de 2ª ordem**,
conforme a decisão TMI-0028, reafirmada pela TMI-0050, ambas em vigor. A consequência, que a decisão manda
declarar em vez de esconder: dos 137 efeitos de 2ª ordem, **122 ficaram sem filhos** —
não por serem menos importantes, mas porque o orçamento foi concentrado onde rende profundidade em vez de
distribuído por igual. Fase 8, infográficos, pulada. O mapa completo —
249 efeitos (46 + 137 + 66), conexões cruzadas, wildcards e 282 fontes
(54 abertas por inteiro) — está em `futures-wheel-midia-sintetica-controlavel-video-e-imagem.md` e no HTML de mesmo nome.

## A inovação

Gerar vídeo por prompt já existia e já era banal. O que mudou entre 2024 e 2026 é que **a geração deixou de
ser sorteio e passou a aceitar direção**. O primitivo novo não é o modelo: é o campo de comando. Aplicar um
efeito a uma região específica do quadro. Pintar um único quadro-chave à mão e propagá-lo pelo plano inteiro
seguindo o movimento — o EbSynth, cuja V2 saiu em janeiro de 2026 **sem IA nenhuma**, por síntese de textura.
Condicionar por pose, profundidade, traço, trajetória e movimento de câmera, na linhagem do ControlNet.
Definir uma regra e deixar a animação sair da estrutura, como no Cavalry, comprado pela Canva em fevereiro de
2026. Montar a geração como **grafo de nós** — o ComfyUI captou US$ 30 milhões a uma avaliação de US$ 500
milhões em 24/04/2026, com 4 milhões de usuários e 60 mil nós comunitários. Escrever vídeo como **código
versionável**, no Remotion e no Motion Canvas. E tratar a animação como **máquina de estados que responde a
evento**, no Rive, com o mesmo arquivo rodando em web, iOS, Android e Unity. Nos produtos de fronteira o
comando virou campo de API: o Kling 3.0 (05/02/2026) expõe duração, escala de plano, ponto de vista, conteúdo
e movimento de câmera **por plano** — a decupagem virou formulário —, e o Aleph 2.0 da Runway (02/06/2026)
aceita até cinco imagens-chave em timestamps arbitrários, tirando o quadro-chave da prisão do "primeiro e
último".

**A raiz anunciada pelo enunciado se confirma, mas com uma ressalva que é o achado mais produtivo da rodada:
o controle já é real como critério econômico e como interface, e ainda não é real como capacidade do
modelo.** No VBench-2.0 a controlabilidade é a dimensão de **pior** desempenho — relação espacial dinâmica
entre 19,32% e 21,26%, atributo dinâmico entre 8,06% e 24,18%, enredo complexo abaixo de 13% em todos os
modelos testados —, enquanto consistência de roupa chega a 98,15%. O OmniEdit-Bench, com 790 tarefas, separa
a linha com precisão cirúrgica: edição **espacial** marca 69,8 de 100; edição **temporal**, 25,2. Aplicar
efeito numa região do quadro já funciona; dirigir o tempo, não. E há um limite de construção, não de
maturidade: **no espaço latente da difusão não existe "local"**. A edição vaza para as regiões que deveriam
ficar intactas — o emaranhamento espacial que o CoVEBench mede — e o mesmo acoplamento global derruba a
acurácia de marca d'água de cerca de 99,5% para a faixa de 53% a 61% **sem que ninguém tenha atacado nada**.
Controlar e rastrear são tecnicamente antagônicos. A loteria, portanto, não acabou: **saiu da aparência, que
hoje quase sempre convence, e entrou na semântica** — o quê acontece, em que ordem, e se o modelo obedece.

O mercado já decidiu antes do benchmark, e decidiu na direção do controle. Morreu o produto **sem
especificação do cliente**: o Sora foi desligado em três etapas ao longo de 2026 — anúncio e notificação de
depreciação em 24/03, app e web em 26/04, API removida em 24/09 —, com cerca de US$ 1 milhão por dia de custo
contra US$ 2,1 milhões de receita de vida inteira. Prosperaram os dirigidos: a Higgsfield levantou US$ 400
milhões a US$ 5,4 bilhões em 17/08/2026, com cerca de US$ 700 milhões anualizados e 390 das Fortune 500,
vendendo **só a camada de controle** sobre modelos de terceiros que não treina. Mas o controle tem um custo
que ninguém publica: a campanha de fim de ano da Coca-Cola gerou **70 mil clipes** num fluxo de ComfyUI para
montar um filme, com núcleo de cerca de 20 pessoas contra as 150 a 200 do fluxo tradicional. E o trabalho não
desapareceu — trocou de posição: no único caso profissional com horas medidas, a renderização caiu de 1.203,6
para 1,2 hora, e o retoque manual, que caiu bem menos, passou a ser **73% do fluxo novo**.

**Duas correções ao enunciado, medidas e não opinadas.** A primeira: a disputa **VAR × difusão não virou
linha de produto declarada** em 2026. O visual autoregressivo tem os números — FID de 18,65 para 1,73, cerca
de 20 vezes mais rápido na inferência — e nenhum fabricante anunciou "nosso produto é VAR". A tese
autoregressiva entrou por outra porta, a da destilação causal em poucos passos e da geração em tempo real,
e volta a importar num único ponto que não é qualidade de quadro: **escala em tempo de inferência** sobre
tokens discretos, o único mecanismo de controle que não migra entre arquiteturas. A segunda: **a crítica
teórica de mídia sintética foi escrita contra o sorteio, não contra o controle** — quando Hito Steyerl
descreve a imagem gerada como média estatística, ela não está discutindo dirigibilidade. Por isso nenhum
efeito deste mapa foi herdado dela.

## A tese

O controle já venceu como critério econômico e como interface e ainda não existe como capacidade do modelo — e é nessa defasagem, sustentada pelos próprios incentivos que o sucesso do controle criou, que se instalam os poderes reais deste mapa: o avaliador automático que escolhe o que vai ao ar, o segmentador que decide o que é dirigível num quadro, e o trilho de pagamento que regula mais rápido e mais duro que qualquer lei.

## Os 46 efeitos de 1ª ordem

| id | Efeito | STEEP | Prob. | Prazo |
|---|---|---|---|---|
| `e1_01` | O valor da cadeia migra do modelo para a camada que o dirige *(óbvio)* | Econômico | alta | até 2028 |
| `e1_02` | O artefato vendável deixa de ser a imagem e passa a ser a receita que a produz | Econômico | alta | até 2028 |
| `e1_03` | Abre-se uma bifurcação econômica: ou o controle continua morando em adaptadores de terceiros (ControlNet, IP-Adapter, LoRA, Ctrl-Adapter),… | Econômico | alta | 2028-2031 |
| `e1_04` | Criar um TIPO DE CONTROLE novo deixa de ser projeto de laboratório: o CtrLoRA adapta um ControlNet base a uma condição inédita com 1.000… | Tecnológico | alta | até 2028 |
| `e1_05` | A precificação por geração entra em contradição consigo mesma | Econômico | alta | até 2028 |
| `e1_06` | A conta ambiental da mídia sintética é feita de descarte — e o descarte é exatamente o que o controle promete cortar, sem que ninguém meça… | Ecológico | média | até 2028 |
| `e1_07` | O controle de estilo passa a depender de acervo próprio, e isso cria assimetria de partida *(óbvio)* | Econômico | alta | até 2028 |
| `e1_08` | A decupagem vira campo de formulário | Tecnológico | alta | até 2028 |
| `e1_09` | A equipe núcleo de uma peça publicitária de grande porte encolhe cerca de dez vezes e o custo migra para compute e curadoria *(óbvio)* | Econômico | alta | até 2028 |
| `e1_10` | O uso de maior retorno imediato não é criar vídeo novo: é multiplicar vídeo existente *(óbvio)* | Econômico | alta | até 2028 |
| `e1_11` | Planos que não cabiam no orçamento passam a caber, o que expande ambição em vez de só cortar custo *(óbvio)* | Econômico | alta | até 2028 |
| `e1_12` | O primeiro elo a ser substituído é o fornecedor terceirizado de execução, não o ator nem o roteirista *(óbvio)* | Econômico | alta | 2028-2031 |
| `e1_13` | Forma-se uma tesoura: 86% dos compradores de mídia adotam enquanto 78% dos consumidores dizem que IA torna o anúncio menos autêntico e 63%… *(óbvio)* | Social | alta | até 2028 |
| `e1_14` | O trabalho humano não desaparece: muda de lugar dentro do mesmo projeto *(óbvio)* | Social | alta | até 2028 |
| `e1_15` | A continuidade volta como função central e é remontada FORA do modelo *(óbvio)* | Social | alta | até 2028 |
| `e1_16` | Surge um cargo formal para o operador de grafo. 'ComfyUI artist or engineer' já aparece como vaga em quadro de estúdio, com base de… *(óbvio)* | Social | alta | até 2028 |
| `e1_17` | O ensino de animação fica desalinhado do objeto: a literatura de 2026 registra que a prática docente 'permanece no nível da operação… *(óbvio)* | Social | alta | 2028-2031 |
| `e1_18` | A renda cai antes da tarifa, e por isso a estatística oficial chega tarde | Econômico | média | até 2028 |
| `e1_19` | A interface que profissionais escolhem não é controle total nem geração livre: é um dial contínuo de quanto ceder ao modelo | Tecnológico | alta | até 2028 |
| `e1_20` | O grafo entrega precisão e mata a exploração, e o chat faz o oposto | Tecnológico | alta | até 2028 |
| `e1_21` | O vocabulário de controle passa a viajar nos dois sentidos, e a fronteira 'feito por IA' deixa de ser recortável dentro de um mesmo… | Tecnológico | alta | 2028-2031 |
| `e1_22` | Vídeo vira artefato de repositório | Tecnológico | média | 2028-2031 |
| `e1_23` | Começa a tentativa de tirar o humano do grafo | Tecnológico | baixa | 2028-2031 |
| `e1_24` | A disputa arquitetural anunciada não decide a controlabilidade, e em 2026 ela sequer virou linha de produto declarada | Tecnológico | alta | até 2028 |
| `e1_25` | A tese autoregressiva chega por outra porta: destilação causal em poucos passos e geração em tempo real | Tecnológico | alta | até 2028 |
| `e1_26` | Instala-se um trade-off duro entre interatividade e duração: a arquitetura causal que entrega tempo real é a mesma que acumula erro em… | Tecnológico | alta | até 2028 |
| `e1_27` | A desobediência silenciosa vira risco de projeto | Tecnológico | alta | até 2028 |
| `e1_28` | A fronteira do controle é geométrica, não semântica, e isso enviesa a FORMA do que a mídia sintética faz bem | Tecnológico | alta | até 2028 |
| `e1_29` | No espaço latente da difusão não existe 'local', e isso limita por construção a promessa de efeito aplicado a uma região do quadro | Tecnológico | alta | até 2028 |
| `e1_30` | Vídeo dirigível e modelo de mundo convergem para o mesmo problema técnico e a fronteira vídeo-interface-jogo fecha | Tecnológico | alta | 2028-2031 |
| `e1_31` | Controle e procedência são antagônicos pelo mesmo mecanismo | Tecnológico | média | até 2028 |
| `e1_32` | A rotulagem obrigatória nasce sem substrato técnico *(óbvio)* | Político | alta | até 2028 |
| `e1_33` | A detecção piora exatamente enquanto o controle melhora *(óbvio)* | Político | alta | até 2028 |
| `e1_34` | Os tribunais deixam de distinguir geração de RESTAURAÇÃO. Num caso de triplo homicídio em Washington, um juiz barrou vídeo melhorado por IA… | Político | média | 2028-2031 |
| `e1_35` | A plataforma regula CADÊNCIA DE PRODUÇÃO, não origem *(óbvio)* | Econômico | alta | até 2028 |
| `e1_36` | Processadoras de pagamento viram reguladoras de fato da identidade sintética *(óbvio)* | Político | alta | até 2028 |
| `e1_37` | A curadoria institucional adota como linha divisória exatamente a distinção da raiz *(óbvio)* | Social | alta | até 2028 |
| `e1_38` | O estilo vira objeto juridicamente disputável porque o controle torna a transferência demonstrável *(óbvio)* | Político | alta | 2028-2031 |
| `e1_39` | O sindicato converte a disputa em preço e notificação, não em proibição — e deixa descoberta exatamente a franja onde a raiz avança | Político | alta | até 2028 |
| `e1_40` | A pessoa fictícia entra como sujeito de tutela | Político | baixa | 2031-2036 |
| `e1_41` | Adoção quase universal e divulgação quase nula fora do circuito criativo: em pesquisa com 509 líderes religiosos, 93,5% usam ou exploram… | Social | alta | até 2028 |
| `e1_42` | A aceitação da mídia sintética dirigida a pessoas reais é função do ritual local, não da técnica | Social | alta | até 2028 |
| `e1_43` | O Brasil regula com granularidade rara e não constrói nada do lado do controle *(óbvio)* | Político | alta | até 2028 |
| `e1_44` | A institucionalização brasileira acontece pelo lado da demanda publicitária, não da construção técnica: sete estruturas criadas em cerca de… | Econômico | alta | até 2028 |
| `e1_45` | No Brasil, o freio efetivo não foi regulação nem sindicato: foi propriedade intelectual estrangeira somada a repúdio de audiência | Social | alta | até 2028 |
| `e1_46` | A fraude brasileira de maior alcance já é controle local aplicado a material autêntico, com a plataforma de ANÚNCIO PAGO como vetor: o… | Social | alta | até 2028 |

Dez rótulos organizam a leitura, e foi por eles que os lotes de expansão foram formados. **A camada de controle como produto** (`e1_01` a `e1_07`): o valor migra do modelo para quem o dirige; a receita executável — o fluxo de nós, o adaptador treinado — vira o artefato vendável; abre-se a bifurcação que decide 2031, entre o controle morar em adaptadores de terceiros ou ser absorvido para dentro do modelo; fabricar um tipo de controle novo cai para mil pares de dados e menos de uma hora de GPU; a precificação por geração entra em contradição consigo mesma, porque o custo real por minuto final é dominado pela taxa de iteração; o descarte vira a conta ambiental que ninguém publica; e o acervo próprio vira assimetria de partida. **Produção audiovisual e publicidade** (`e1_08` a `e1_13`): a decupagem vira campo de formulário e cada fabricante escreve o seu; a equipe núcleo encolhe cerca de dez vezes; o uso de maior retorno não é criar vídeo novo, é multiplicar o que já existe; planos que não cabiam no orçamento passam a caber; o primeiro elo substituído é o fornecedor terceirizado de execução, não o ator nem o roteirista; e forma-se uma tesoura entre o comprador de mídia, que adota, e o consumidor, que rejeita. **O ofício deslocado e a formação** (`e1_14` a `e1_18`): o retoque vira 73% do fluxo; a continuidade volta como função central e é remontada **fora** do modelo; surge o cargo formal de operador de grafo; o ensino de animação fica desalinhado do objeto; e a renda cai antes da tarifa, razão pela qual a estatística oficial chega tarde. **Interface, grafo e vídeo programático** (`e1_19` a `e1_23`): o que os profissionais escolhem não é controle total nem geração livre, é um dial contínuo de obediência; o grafo dá precisão e mata a exploração enquanto o chat faz o oposto; o vocabulário de controle passa a viajar nos dois sentidos entre ferramenta clássica e generativa; o vídeo vira artefato de repositório; e começa a tentativa de tirar o humano do grafo. **Arquitetura, tempo real e a fronteira vídeo-interface** (`e1_24` a `e1_30`): a disputa arquitetural não decide a controlabilidade e sequer virou linha de produto; a tese autoregressiva chega pela destilação causal; instala-se um trade-off duro entre interatividade e duração; a desobediência silenciosa vira risco de projeto; a fronteira do controle é **geométrica, não semântica**, e isso enviesa a forma do que a mídia sintética faz; no latente da difusão não existe local; e vídeo dirigível e modelo de mundo convergem para o mesmo problema técnico. **Prova, procedência e jornalismo** (`e1_31` a `e1_34`): controlar e rastrear são antagônicos pelo mesmo mecanismo; a rotulagem obrigatória nasce sem substrato; a detecção piora exatamente enquanto o controle melhora; e os tribunais deixam de distinguir geração de **restauração**. **Plataformas, distribuição e curadoria** (`e1_35` a `e1_37`): a plataforma regula **cadência de produção**, não origem; processadoras de pagamento viram reguladoras de fato da identidade sintética; e a curadoria institucional adota como linha divisória exatamente a distinção da raiz. **Direito** (`e1_38` a `e1_40`): o estilo vira objeto disputável porque o controle torna a transferência demonstrável; o sindicato converte proibição em preço e notificação; e a pessoa fictícia entra como sujeito de tutela. **Usos fora do roteiro** (`e1_41` e `e1_42`): adoção quase universal e divulgação quase nula fora do circuito criativo, e a aceitação da mídia dirigida a pessoas reais como função do ritual local, não da técnica. **Brasil** (`e1_43` a `e1_46`): regra granular sem oficina técnica.

## Os 5 mais impactantes

*O porquê aparece aqui abreviado; o texto integral e a cadeia de efeitos estão no mapa completo.*

1. **`e1_01` — O valor da cadeia migra do modelo para a camada que o dirige.** É o efeito de que todo o resto da árvore depende. Se dirigir vale mais que gerar, então o modelo é commodity comprável a US$ 0,09-0,75 por segundo e a competição inteira — capital, produto, carreira, currículo — se reorganiza em volta da especificação do output.

2. **`e1_08` — A decupagem vira campo de formulário, e cada fabricante escreve o seu.** É o efeito com maior alcance a jusante do mapa: dele saem a prova documental de autoria (e2_A23), a disputa pelo formato comum de troca (e2_A22, OpenTimelineIO), o encolhimento do vocabulário do ofício ao tamanho do menu do fabricante (e2_A24), o uso fiscal da decupagem (e3_T1_18) e o corpus que, no limite, automatiza a própria direção (e3_T1_05). Cem anos de gramática de cinema estão sendo transcritos em JSON por quem treinou o modelo.

3. **`e1_29` — No espaço latente da difusão não existe «local».** É o teto técnico que dá o veredito da ressalva. A promessa central da raiz — efeito aplicado a uma região do quadro — esbarra num acoplamento global de pixels medido por dois trabalhos independentes, e a saída encontrada pelo mercado é EXTERNA ao modelo (segmentação, máscara de objeto, imagem fatiada em camadas).

4. **`e2_A25` — A curadoria vira o gargalo e a próxima corrida é automatizá-la.** É o ponto único de falha mais consequente do mapa. Treze efeitos de três ramos distintos convergem para o mesmo objeto — o avaliador automático —, que passa a ser simultaneamente filtro estético (o gosto embutido decide o que vai ao ar), instrumento de marca (o manual vira função de pontuação), mecanismo de conformidade com a plataforma e superfície de controle por busca verificada.

5. **`e2_C16` — A regra sai da plataforma e sobe para a bandeira de cartão.** É a regulação mais rápida, mais severa e menos proporcional do tema, e chega anos antes de qualquer lei global: desde 24/02/2026 comprovar consentimento de semelhança é requisito de ACEITAÇÃO DE PAGAMENTO, exigível de qualquer comerciante do mundo, com inscrição no MATCH em um dia útil e cinco anos de permanência sem instância recursal. Ela cria um índice de rostos dentro da cadeia de pagamento, empurra o acervo de identidade para trilho cripto — destruindo a observabilidade da camada que mais importa — e parte o mesmo arquivo técnico em dois mercados incomunicáveis.

**O padrão por trás dos cinco.** Nenhum deles é sobre o vídeo ficar mais bonito. Os cinco nomeiam lugares onde **a decisão sobre o que vai ao ar já está tomada antes de alguém dirigir** — e nenhum desses lugares aparece no material de venda de nenhum produto de mídia sintética. O valor migra para a camada que dirige, e essa camada não treina modelo nem revela o que faz com o comando (`e1_01`). A decupagem vira campo de formulário, e quem escreve o esquema do formulário define o que é possível pedir — sem padrão comum, o vocabulário de direção deixa de ser transferível entre fornecedores (`e1_08`). O latente da difusão não tem *local*, e por isso a promessa de aplicar efeito a uma região do quadro é limitada por construção, não por maturidade — e o mesmo mecanismo apaga a procedência (`e1_29`). A curadoria vira o gargalo, e automatizá-la significa que **um modelo de preferência escolhe o que vai ao ar**: o gosto do conjunto de anotação vira o filtro estético de tudo o que passa pela pilha (`e2_A25`). E a regra sobe da plataforma para a bandeira de cartão, que aplica sanção global em semanas, sem contraditório e sem consulta pública (`e2_C16`). Não é um mapa sobre gerar vídeo: é um mapa sobre **quem decide o que é dirigível** e sobre quem aprova o resultado.

**Os 5 mais surpreendentes**, pelos títulos — são os que um profissional informado do setor não enunciaria sem pesquisar: `e3_T1_29` a mídia sintética de maior volume terá cara de motion design chapado, não de realismo gerado; `e2_B03` a obediência exibida ao profissional é obtida desobedecendo um pouco a ele; `e3_T1_05` o artefato criado para provar que havia um humano dirigindo é o que reduz a necessidade de haver um; `e2_B19` dirigir ao vivo ficou mais barato que renderizar; `e3_T1_08` quem mais desperdiçou tem o melhor juiz, e por isso o desperdício deixa de ser problema.

A distribuição por ordem diz a mesma coisa por outro caminho. O eixo Social, que responde por 22% da 1ª ordem, fica em 20% na 2ª e cai a 21% na 3ª; o Econômico sai de 26% para 34% e 33%; o Político sobe de 17% para 21% e 26%. Juntos, preço e regra saem de 43% na 1ª ordem para 59% na 3ª — o que começa como pergunta sobre dirigir uma imagem termina como cláusula de apólice, regra de bandeira e critério de auditoria. O Tecnológico faz o percurso inverso e volta: 33%, 22%, 20%, porque as correções que aparecem no fim da cascata são técnicas outra vez — o *diff* entre comandado e executado, a bateria de sondagem que se roda ao receber um modelo novo, o verificador auditável. **Uma ausência merece registro**: só 4 efeitos em 249 são Ecológicos, e a auditoria confirmou que isso não é subclassificação — o descarte deste tema entra pelo **preço**, não pela emissão, porque nenhuma fonte do corpus mede energia em unidade física. É um mapa em que a conta ambiental existe e ninguém a publica em joule.

## Wildcards

13 cenários de baixa probabilidade e alto impacto — 4 de oportunidade, 5 de risco, 4 ambíguos. Sete deles só funcionam por uma mesma propriedade, e é ela que o conjunto revela: **em algum ponto da cadeia existe um objeto do qual tudo depende e que ninguém consegue conferir** — o verificador que não tem segunda via, o manifesto de procedência que a plataforma apaga sem dever de preservar, o registro de nós mantido sem contrato, o trilho de pagamento que sanciona sem contraditório, a perícia que não existe em escala. Não são dez pontos únicos de falha independentes: é a mesma propriedade repetida em dez lugares. A leitura de projeto que isso autoriza é direta — em mídia sintética dirigível, a pergunta de risco não é *o que pode quebrar*, é **o que não tem como ser conferido**.

E os cenários catastróficos daqui, em sua maioria, não são de falha técnica: são de **decisão privada tomada sem aviso**. A bandeira de cartão que desliga um mercado em semanas (`w2`), o registro de nós que troca de dono sem anúncio (`w8`), a seguradora que já decidiu em janeiro de 2026 não carregar o risco, o anunciante que suspende tudo em três semanas (`w7`). Nenhum desses atores publica roteiro, nenhum aceita contraditório, e nenhum aparece no debate público sobre mídia sintética — que segue discutindo modelo e *deepfake*. Do lado positivo, vale notar de onde vêm as saídas: nenhuma das quatro vem de regulação de inteligência artificial. Uma vem do campo **determinista**, que ganha ao publicar o diff de intenção que o fornecedor de modelo não pode publicar (`w4`); outra do **mercado segurador**, que financia o verificador auditável porque precisa precificar (`w9`); e duas do **Brasil** — o convênio de campus que usa corpus de língua de sinais em licença aberta (`w3`) e a abertura do agregado de fraude por vídeo que já existe fechado no sistema financeiro (`w10`).

- **w1 · O juiz envenenado** (negativo). Em 2029 uma auditoria forense contratada por um anunciante descobre que o modelo de preferência usado como verificador na pilha hospedada de uma grande camada de controle foi envenenado há cerca de dois anos.
- **w2 · A bandeira desliga a camada que dirige** (negativo). Uma campanha de advocacy manda carta aberta às processadoras acusando as camadas de controle de serem o instrumento prático da imagem íntima não consentida.
- **w3 · O convênio de campus que vira padrão internacional** (positivo). Uma coordenação de curso de audiovisual assina um convênio interno com o centro de IA da própria universidade para usar quatro horas de cluster por semana.
- **w4 · O campo que faltava chega pelo lado determinista** (positivo). Não é um fornecedor de modelo que publica o diff de intenção: é o campo determinista.
- **w5 · A escassez de GPU faz o que a regulação não fez** (ambiguo). A restrição de memória de alta largura de banda não cede em 2027 como o mercado esperava, e o preço por segundo de inferência de vídeo triplica em dezoito meses.
- **w6 · A regra probatória chega cedo e apaga o vídeo comum** (negativo). A Regra 707 é aprovada e entra em vigor em 01/12/2027, três ou quatro anos antes do que o mapa supunha.
- **w7 · O anunciante desliga o sintético no meio do jogo** (ambiguo). Numa transmissão ao vivo de grande audiência, a camada de endereçamento por inferência substitui um objeto dentro do quadro por um produto patrocinado.
- **w8 · O nó envenenado que ninguém procurou, no registro que foi comprado em silêncio** (negativo). Um nó de uso amplo no ecossistema de grafos tem o mantenedor original substituído, ao longo de três anos, por uma conta que só entregou correções úteis.
- **w9 · O verificador público, pago pelo seguro** (positivo). Um consórcio improvável — emissoras públicas, arquivos de cinema, um organismo de padronização e, financiando a maior parte, duas resseguradoras — publica um modelo de preferência auditável: protocolo de anotação documentado, rubrica….
- **w10 · O Banco Central abre o cadastro e o Brasil vira o denominador do mundo** (positivo). O Banco Central passa a publicar, como série aberta agregada, os eventos de fraude por vídeo do sistema da Resolução Conjunta nº 6 — em vigor desde 01/11/2023, com compartilhamento em até 24 horas, consolidação mensal e retenção de dez anos.
- **w11 · O ônus invertido apaga um vídeo verdadeiro** (negativo). Municipais de 2028.
- **w12 · O dono do arquivo compra a fábrica** (ambiguo). Não é uma empresa de tecnologia que passa a licenciar o vocabulário de controle do movimento humano: é uma federação esportiva com palco de captura e trinta anos de acervo catalogado, e uma emissora pública com arquivo bruto preservado.
- **w13 · O vídeo-como-código engole a transparência, e o rótulo passa a marcar a honestidade** (ambiguo). Uma autoridade europeia publica orientação confirmando o que até então era leitura de escopo: vídeo renderizado a partir de código não é saída de sistema generativo e portanto não está sob a obrigação de marcação do Artigo 50 — mesmo….

O que os 13 revelam em conjunto está em `json/wildcards.json` e na nota completa.

## Nota Brasil

O Brasil é, neste mapa, o caso mais limpo de **regra sem oficina**. O país regula com granularidade rara: a Resolução TSE 23.755/26 exige rotulagem diferenciada por mídia — áudio avisa no início, imagem exige marca d'água e audiodescrição, impresso em cada página —, com multas de R$ 5.000 a R$ 30.000 escaláveis até a cassação, veda impulsionar conteúdo sintético com imagem ou voz de candidato nas 72 horas anteriores e 24 posteriores à votação, e **inverte o ônus da prova** em casos complexos, com prazo contado em horas (`e1_43`). Tudo isso sobre um ecossistema de distribuição que apaga o manifesto de procedência no upload e sem nenhum detector nacional em operação. O resultado previsível, e já em curso, é a convergência para o aviso **ostensivo queimado na imagem** — o oposto do regime europeu de marcação legível por máquina —, com o efeito perverso de rotular o conteúdo legítimo enquanto a fraude, que não obedece, continua limpa. O wildcard `w11` é a versão dura disso: o ônus invertido, aplicado a um vídeo **verdadeiro** cujo manifesto a plataforma destruiu, vira a forma mais barata de tirar do ar uma gravação incômoda.

A institucionalização acontece pelo lado da **demanda publicitária**, não da construção técnica: sete estruturas de IA criadas em agências e produtoras em cerca de doze meses, todas montadas com gente de criação e produção, e inteiramente apoiadas em plataforma estrangeira (`e1_44`). A competência que se acumula é real e escassa — briefar, especificar, dirigir, aprovar —, mas é competência de **comprador**. Do lado da norma comercial, o guia do CONAR de 12/05/2026 aplica o código a peças geradas, editadas ou segmentadas por IA e cria responsabilidade solidária, mas declara expressamente **não** instituir dever de informar que houve IA: a norma de fato para mídia sintética comercial no Brasil é *sintético pode, desde que não engane sobre o produto* — critério sobre a alegação, não sobre a origem. Enquanto o PL 2338/2023 segue parado e o estudo técnico da ANCINE só conclui em 2027, a norma operante já terá sido escrita pela Justiça Eleitoral e pela autorregulação publicitária. E o freio que de fato funcionou aqui não foi lei nem sindicato: foi **propriedade intelectual estrangeira somada a repúdio de audiência** (`e1_45`). A fraude de maior alcance, por sua vez, já é **controle local aplicado a material autêntico**, distribuído por anúncio pago — não geração do zero (`e1_46`).

Três coisas merecem ser ditas como oportunidade, e não como lamento — porque as três já existem, separadas. A primeira: **a GPU existe no campus e está no departamento errado** — 31 DGX Spark no CEIA da UFG, cerca de 80 GPUs no Recod.ai da Unicamp, nenhuma vinculada a curso de design, animação ou audiovisual —, o que faz da solução um acordo institucional, não um orçamento novo. A segunda: fabricar um tipo de controle **novo** custa mil pares de dados e menos de uma hora de GPU única, e o insumo escasso passou a ser **acesso ao fenômeno** — gesto, dança, iconografia, língua de sinais —, coisa que arquivo, escola e comunidade linguística brasileiros têm e empresa de IA não tem; o corpus Libras-UFPel, com 1.200 sentenças glosadas sob licença aberta, já está acima desse limiar **hoje** (`w3`). A terceira: o único repositório nacional sistemático de fraude por vídeo nasce fechado dentro do sistema financeiro, sob a Resolução Conjunta nº 6, em vigor desde 01/11/2023, com retenção de dez anos — e **abrir o agregado** seria, por si só, vantagem comparativa do país num campo que não tem denominador (`w10`). Contra isso pesa a ausência que três frentes de pesquisa declararam por busca negativa, e que é o achado brasileiro mais duro desta rodada: **não foi encontrada nenhuma startup, laboratório ou grupo brasileiro construindo tecnologia de controle** — nem modelo, nem adaptador, nem camada de procedência —, nem comunidade nacional visível de prática em grafo, nem dado de tarifa de animador, nem texto brasileiro que trate a dirigibilidade como problema.

## O que me faria mudar de ideia

A rodada declarou de antemão dois critérios de refutação: evidência de que a adoção já passou da maioria inicial de Rogers, e evidência de que a tecnologia não rompe nada — só melhora o que já existe. **Os dois foram parcialmente acionados durante a análise**, e é por isso que a raiz saiu confirmada com ressalva em vez de confirmada. O primeiro, porque mídia sintética em geral já passou a maioria inicial entre profissionais, embora o controle estrito ainda seja minoria técnica; o segundo, porque keyframe, máscara, camada e grafo são reimplantação de conceitos que a pós-produção já tinha — e o EbSynth V2 faz sem IA nenhuma o que os modelos aprendem probabilisticamente. O que sustenta a ruptura, contra isso, é o tempo real: quando a mídia deixa de ser artefato renderizado e vira sistema executado, nenhuma ferramenta clássica tem resposta. O que observar daqui para frente:

- Quando um modelo COMERCIAL passar de 40% em enredo complexo e de 50% em relação espacial dinâmica no VBench-2.0 ou sucessor — hoje são <13% e 19,32%-21,26%, contra 61,73% de movimento de câmera e 98,15% de consistência de roupa. É a medição que sustenta a tese de que a fronteira do controle é geométrica e não semântica; se ela cair, o viés de forma descrito em e1_28, e2_B28 e e2_B29 some junto.
- Quando a edição TEMPORAL passar de 50/100 no OmniEdit-Bench (hoje 25,2, contra 69,8 da espacial). Enquanto essa distância existir, o produto viável é reestilizar e recompor material que já tem a ação certa, e não reescrever a ação — que é a metade da promessa da raiz.
- Quando a similaridade de identidade após DUAS edições consecutivas ficar acima de 0,90 (hoje cai de 0,92 para 0,78) e a preservação de dois atributos simultâneos passar de 80% (hoje 52%). Isso devolveria a direção por iteração, que é o modo natural de trabalho criativo e é hoje exatamente o modo que o mecanismo pune.
- A primeira apólice de E&O, media liability ou completion bond que PUBLICAR critério de subscrição para produção dirigida por IA, em vez de excluir o risco em bloco como fazem os endossos ISO CG 40 47 01 26, CG 40 48 e CG 35 08 desde 01/01/2026. É o sinal de que a falha em degrau virou risco estimável — e, com ele, o limiar técnico deixa de ser barreira financeira.
- O primeiro edital público ou contrato corporativo que contratar CUSTO POR SEGUNDO APROVADO em vez de preço por segundo gerado. É o número que nenhum fornecedor publica e que resolveria de uma vez a contradição de incentivo do mapa (quem vende inferência fatura com a desobediência); sem ele, nada obriga o mercado a entregar obediência.
- A primeira plataforma social de grande porte que assumir dever de PRESERVAR o manifesto C2PA no ingest — por regime de plataforma (DSA), por norma nova ou por decisão própria. Metade da cadeia de prova deste mapa (e1_32, e2_C05, e2_C06, e3_T2_26, o wildcard w11) existe apenas porque esse dever não existe hoje.
- O primeiro procedimento PUBLICADO de auditoria ou certificação de verificador/modelo de recompensa para uso audiovisual profissional. Hoje há literatura de ataque (BadReward, envenenamento de rótulo limpo) e nenhuma de auditoria — e é essa assimetria que torna o avaliador automático o ponto único de falha mais grave da árvore.
- Se a Regra 707 revista voltar a ser publicada para comentário com data de vigência anterior a 2030, ou se um tribunal federal americano aplicar critério tipo Daubert a vídeo que passou por tratamento APRENDIDO (redução de ruído, super-resolução, fotografia computacional). Hoje o Comitê Permanente devolveu a regra em junho de 2026 e a 901(c) sequer foi publicada para comentário; o wildcard w6 depende inteiramente dessa inversão.

## Bibliografia essencial

As fontes que sustentam as afirmações centrais deste resumo, todas abertas por inteiro pela frente que as leu. A lista completa — 282 fontes, 54 marcadas como abertas — está na nota Obsidian e em `json/bibliografia.json`.

1. VBench-2.0: Advancing Video Generation Benchmark Suite for Intrinsic Faithfulness — a controlabilidade é a dimensão MAIS FRACA (relação espacial dinâmica 19,32%-21,26%; enredo complexo abaixo de 13%) — `https://arxiv.org/html/2503.21755v1`
2. OmniEdit-Bench: A Comprehensive Benchmark for Instruction-based Video Editing (arXiv:2608.05049) — edição espacial 69,8/100 contra edição temporal 25,2/100: onde passa a linha do tema — `https://arxiv.org/html/2608.05049v1`
3. CoVEBench: Can Video Editing Models Handle Complex Instructions? (arXiv:2606.08415) — mede o emaranhamento espacial: no latente da difusão não existe «local» — `https://arxiv.org/html/2606.08415v2`
4. Editing Away the Evidence: Diffusion-Based Image Manipulation and Provenance (arXiv:2603.12949) — a marca d'água cai de ~99,5% para 53-61% SEM ataque; o paper declara sintetizar valores hipotéticos — `https://arxiv.org/html/2603.12949v1`
5. Controllable Video Generation: A Survey (arXiv:2507.16869) — o mapa do campo do controle, com 22 autores — `https://arxiv.org/abs/2507.16869`
6. Tian, Jiang, Yuan, Peng, Wang — Visual Autoregressive Modeling (arXiv:2404.02905), melhor artigo do NeurIPS 2024: FID de 18,65 para 1,73, ~20x na inferência — `https://arxiv.org/abs/2404.02905`
7. Causal Forcing++: Scalable Few-Step Autoregressive Diffusion Distillation for Real-Time Interactive Generation (arXiv:2605.15141) — a porta pela qual a tese autoregressiva realmente entrou — `https://arxiv.org/html/2605.15141`
8. MIND: Benchmarking Memory Consistency and Action Control in World Models (arXiv:2602.08025) — a desobediência silenciosa medida — `https://arxiv.org/html/2602.08025v1`
9. Probing into Camera Control of Video Models (arXiv:2605.14815) — a fronteira do controle é geométrica, não semântica — `https://arxiv.org/html/2605.14815v1`
10. Beyond Generation: An Empirical Study on Redefining the Act of Drawing (arXiv:2604.03549) — renderização de 1.203,6 h para 1,2 h; retoque vira 73% do fluxo novo — `https://arxiv.org/html/2604.03549`
11. Generative AI for Film Creation: A Survey of Recent Advances (arXiv:2504.08296, CVPR workshop) — 100 artistas: controle de movimento corporal, importância 6,62 contra desempenho 4,55 — `https://arxiv.org/html/2504.08296v1`
12. PrevizWhiz: Combining Rough 3D Scenes and 2D Video to Guide Generative Video Previsualization (arXiv:2602.03838) — 7 de 10 cineastas escolhem o modo intermediário de obediência — `https://arxiv.org/html/2602.03838v1`
13. Workflow-Net: Toward Understanding Designer Workflows in Generative AI-Driven Systems — o grafo mata a exploração (0% de ramificação); o chat destrói a agência (3,56 de 7); vence o híbrido — `https://www.aodr.org/_PR/view/index.php?aidx=49535&bidx=4446`
14. Runway — changelog oficial do produto (Gen-4, Act-Two, Aleph 2.0 com cinco imagens-chave em timestamps arbitrários) — `https://runway.com/changelog`
15. Kuaishou — press release oficial do Kling 3.0 (05/02/2026): duração, escala de plano, POV, conteúdo e movimento de câmera POR PLANO — `https://www.globenewswire.com/news-release/2026/02/05/3232837/0/en/kling-ai-launches-3-0-model-ushering-in-an-era-of-controllable-ai-video-creation.html`
16. ComfyUI — blog oficial da rodada de US$ 30 mi (24/04/2026): 4 mi de usuários, 60 mil nós comunitários — `https://blog.comfy.org/p/comfyui-raises-30m-to-scale-open`
17. TechCrunch — ComfyUI hits $500M valuation as creators seek more control over AI-generated media — `https://techcrunch.com/2026/04/24/comfyui-hits-500m-valuation-as-creators-seek-more-control-over-ai-generated-media/`
18. TechCrunch — Higgsfield raises $400M Series B, quadrupling its valuation in 8 months to $5.4B: a camada de controle como produto — `https://techcrunch.com/2026/08/17/higgsfield-raises-400m-series-b-quadrupling-its-valuation-in-8-months-to-5-4b/`
19. TechCrunch — Why OpenAI really shut down Sora: ~US$ 1 mi/dia de custo contra US$ 2,1 mi de receita de vida inteira — `https://techcrunch.com/2026/03/29/why-openai-really-shut-down-sora/`
20. The Decoder — o desligamento do Sora em duas etapas (app em abril de 2026, API em setembro): a fonte que arbitra a divergência de datas desta rodada — `https://the-decoder.com/openai-sets-two-stage-sora-shutdown-with-app-closing-april-2026-and-api-following-in-september/`
21. VP Land — Coca-Cola's AI Holiday Ad: How 70,000 Generated Clips Built a Familiar Yet New Commercial — `https://www.vp-land.com/p/coca-cola-s-ai-holiday-ad-how-70-000-generated-clips-built-a-familiar-yet-new-commercial`
22. Adobe — transcrição do earnings call do 3T fiscal de 2026 (10-11/09/2026): ARR AI-first acima de US$ 650 mi, +150% a/a — `https://www.fool.com/earnings/call-transcripts/2026/09/11/adobe-adbe-q3-2026-earnings-call-transcript/`
23. Content Authenticity Initiative — The State of Content Authenticity in 2026 (18/01/2026) — `https://contentauthenticity.org/blog/the-state-of-content-authenticity-in-2026`
24. AIIP Protection — Why C2PA Watermarks Fail on Social Media: o manifesto apagado no upload — `https://www.aiipprotection.org/news/c2pa-watermarks-social-media-metadata-stripping.php`
25. Cartoon Brew — estudo CVL Economics «Future Unscripted» para o Animation Guild: o emprego criativo sob a mídia dirigível — `https://www.cartoonbrew.com/tech/union-study-says-generative-ai-will-disrupt-204000-jobs-three-years-237495.html`
26. WinBuzzer — YouTube Draws Three Monetization Lines Around AI Slop (23/07/2026): a plataforma regula CADÊNCIA, não origem — `https://winbuzzer.com/2026/07/23/youtube-draws-three-monetization-lines-around-ai-slop-xcxwbn/`
27. Creative Boom — pesquisa de precificação de ilustradores 2026, com 403 respondentes: a renda cai antes da tarifa — `https://www.creativeboom.com/insight/illustrator-pricing-in-2026/`
28. a16z — The State of Generative Media 2026: «producing a single polished asset is rarely a single inference call» — `https://a16z.com/the-state-of-generative-media-2026/`
29. Hito Steyerl — Mean Images (New Left Review 140/141): a imagem gerada como média estatística — a crítica escrita contra o sorteio, não contra o controle — `https://newleftreview.org/issues/ii140/articles/hito-steyerl-mean-images`
30. UC Berkeley School of Information — Hany Farid: humanos não distinguem real de sintético de forma confiável — `https://www.ischool.berkeley.edu/news/presscoverage/2026/humans-cant-reliably-tell-real-ai-hany-farid-explains`
31. Rex Woodbury — 26 Predictions for 2026 e «Everything Is TV and Nothing Is TV»: a tese de que o vídeo vira interface, com data — `https://www.digitalnative.tech/p/26-predictions-for-2026`
32. Migalhas — IA nas campanhas eleitorais 2026: o que o TSE autoriza ou proíbe (Resolução 23.755/26) — `https://www.migalhas.com.br/quentes/455672/ia-nas-campanhas-eleitorais-2026-veja-o-que-tse-autoriza-ou-proibe`
33. Cenp — Painel Cenp-Meios: investimento publicitário brasileiro de R$ 28,9 bi, +10%, quatro vezes o PIB — `https://www.cenp.com.br/post/painel-cenp-meios-investimento-publicit%C3%A1rio-no-mercado-brasileiro-cresce-10-em-2025`
34. Coluna do Nene — IA ganha estruturas próprias em agências e produtoras: a institucionalização brasileira pelo lado da demanda — `https://colunadonene.com.br/ia-ganha-estruturas-proprias-em-agencias-e-produtoras-31-08-2026/`
35. Meio & Mensagem — IA modifica a produção audiovisual e eleva o valor do craft — `https://www.meioemensagem.com.br/comunicacao/ia-modifica-a-producao-audiovisual-e-eleva-o-valor-do-craft`
36. LWN.net — An early look at the Graphite 2D graphics editor: o motor procedural de nós fora do circuito de IA — `https://lwn.net/Articles/1051242/`
37. The Brand Hopper — Character Consistency in AI Video Is a Stack Problem, Not a Model Beauty Contest: a continuidade remontada à mão, fora do modelo — `https://thebrandhopper.com/learning-resources/character-consistency-in-ai-video-is-a-stack-problem-not-a-model-beauty-contest/`
38. Google Patents — US20250245866A1 (Adobe): geração de vídeo guiada por texto — `https://patents.google.com/patent/US20250245866A1`

---

*Mapa gerado pela skill `futures-wheel` (modo 1, a partir de uma inovação) em 12/09/2026, com teto de 15 subagentes, dos quais 14 usados. Fase 8, infográficos, pulada por instrução da rodada. 249 efeitos, 194 não óbvios (78%) depois da auditoria de classificação, que corrigiu 51 classificações e arbitrou três divergências factuais entre agentes. Contrato em `CONTRATO.md`, histórico em `log.txt`, artefatos intermediários em `json/`.*