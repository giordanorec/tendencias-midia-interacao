---
titulo: "IA local: no dispositivo e no navegador"
tipo: resumo-de-tendencia
disciplina: "CIN0055 Tendências em Mídia e Interação 2026.2"
tema: "16 de 19"
familia: "Criação e plataforma"
zona: "Criação e plataforma"
skill: futurizacao-futures-wheel
autor: grec
horizonte: 2031
recorte: "global, com nota sobre o Brasil"
data: 2026-09-13
mapa_completo: "futures-wheel-ia-local-no-dispositivo-e-no-navegador.md"
---

# IA local: no dispositivo e no navegador

**Rodada com teto de 15 subagentes, dos quais 14 foram usados.** A skill prevê um expansor por ramo;
aqui os ramos foram agrupados por tema em três lotes de 2ª ordem, cada lote marcou os **cinco ramos mais
férteis**, e a 3ª ordem saiu só sobre esses quinze (TMI-0028, TMI-0050). Por isso, dos 106 efeitos de 2ª
ordem, **91 ficaram sem filhos**: o orçamento foi para onde rendia profundidade. A
Fase 8 (infográficos) foi pulada. O mapa completo, com 200 efeitos (46 + 106 + 48),
conexões cruzadas, wildcards e 272 fontes (217 abertas por inteiro), está em
`futures-wheel-ia-local-no-dispositivo-e-no-navegador.md` e no HTML de mesmo nome.

## A inovação

O enunciado propõe que **a inteligência saia da nuvem**: com modelos de 1 bit, quantização agressiva, runtimes em
WebGPU e modelos embutidos pelos sistemas operacionais, o modelo generativo rodaria no celular, no laptop comum e na
aba do navegador — **sem chave de API, sem custo por chamada, sem enviar dado para fora**. A frase junta três
promessas: grátis depois de baixado, nada sai, ninguém desliga. As cinco frentes (137 achados, 109 abertos) testaram
cada uma contra os critérios declarados de antemão, e elas se separaram.

**Existe como capacidade, quase não existe como uso.** 36% das remessas de smartphones de 2025 são "GenAI
smartphones" (Counterpoint), e a Prompt API vem ligada por padrão no Chrome de desktop desde a versão 148
(05/05/2026). Mas, em 11/09/2026, a página pergunta se o modelo existe em 1,339% dos carregamentos e manda um prompt
em 0,000174% — cerca de 7.700 sondagens para cada uso, abaixo do nível do origin trial de 2025 (chromestatus). É o
único contador público de uso, e ele não vê Safari, apps nativos, Apple Intelligence, Galaxy AI nem Ollama. Nenhum
fabricante publica quantos pedidos ficam no aparelho.

**O custo muda de pagador.** A DRAM de celular subiu 70% a 83% num trimestre (TrendForce, 2T26) e o aparelho de
entrada parou em cerca de 4 GB; no celular, rodar local consome mais de 138% da potência de mandar o pedido à nuvem,
e por consulta a nuvem com lote gasta de 3,7 a 6,4 vezes menos energia que uma máquina local dedicada; o Gemini Nano
do Android bloqueia depois de 36 a 41 gerações seguidas. A assinatura de nuvem não recuou, e as duas marcas mais
associadas a "rodar no seu computador", Ollama e LM Studio, passaram a vender nuvem em julho e agosto de 2026. Do
"por que agora" do enunciado, o que se confirma é a cota gratuita instável: a Gemini API deixou de publicar números e
diz que os limites "are not guaranteed".

**A privacidade se fragmenta e a independência cai para o modelo do sistema.** "Nada sai" vale para a inferência
100% local, mas o padrão de massa é híbrido (Private Cloud Compute da Apple, Firebase com queda para a nuvem, Galaxy
AI), e o híbrido vaza dado pessoal em 7,5% das consultas com modelo local de 8B. "Ninguém desliga" não vale para o
modelo que vem no sistema: a Microsoft remove o Phi Silica em novembro de 2026, a Prompt API é de um só fornecedor
(Mozilla "negative", WebKit "oppose") e não aceita português. Nos pesos abertos a independência existe — milhares de
modelos "sem censura" sobrevivem à remoção —, mas o llama.cpp passou à Hugging Face e o computador de casa usado como
servidor aparece primeiro em varreduras de serviços expostos sem senha.

**A baixíssima precisão habilita o topo de linha, por conversão.** O caso em produto é o modelo de ~3B em 2 bits da
Apple. O BitNet nativo da Microsoft continua em 2,4B desde abril de 2025; o que avançou foi a conversão de modelos
abertos para 1 bit (Bonsai 27B, num iPhone 17 Pro Max, com 82,9% contra 94,2% do original num teste independente).

**E apareceu uma raiz que o enunciado não tem: o local vira a camada barata de um híbrido roteado pela plataforma**
(Firebase "PREFER_ON_DEVICE", Custom Providers da Apple, nuvem da Ollama). Das 52 conexões cruzadas do mapa, 22 passam
por ela.

## A tese

A inferência no aparelho não tira a IA da nuvem nem do fabricante: vira a camada barata de um híbrido roteado pela plataforma, em que RAM, tokens, filtro e cota decidem o que sobe — e sobem primeiro o aparelho barato, o português e o conteúdo sensível.

## Os 46 efeitos de 1ª ordem

| id | Efeito | STEEP | Prob. | Prazo |
|---|---|---|---|---|
| `e1_01` | A distância entre sondar e usar vira a métrica que separa a IA do navegador de promessa: em 11/09/2026, LanguageModel_Availability dispara… | Tecnológico | alta | até 2028 |
| `e1_02` | Ligar a Prompt API por padrão no Chrome 148 (05/05/2026) não fez o uso subir: o prompt mensal médio de mai–set/2026 (~0,00015–0,00021% dos… | Tecnológico | alta | até 2028 |
| `e1_03` | No navegador, a IA local que de fato roda é a estreita, não a generativa: LanguageDetector_Detect dispara em 0,204% dos carregamentos do… *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_04` | O 'GenAI smartphone' vira item de série sem receita própria: 36% das remessas globais em 2025 (Counterpoint) com 'a clear gap' até o uso… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_05` | A falta da fatia local × nuvem torna a promessa de privacidade inauditável e abre pressão por divulgação: a Apple publica AFM 3 com modelo… | Político | média | 2028-2031 |
| `e1_06` | O choque de memória de 2026 confina a IA generativa local ao aparelho caro: DRAM móvel +70–83% no 2T26, DRAM a ~60% da lista de materiais… | Econômico | alta | até 2028 |
| `e1_07` | A base instalada capaz de rodar modelo generativo cresce mais devagar do que as remessas sugerem: vida média do smartphone em 4,2 anos,… *(óbvio)* | Tecnológico | alta | 2028-2031 |
| `e1_08` | Calor e bateria empurram a IA local do celular para tarefas curtas e episódicas: o iPhone 16 Pro perde 41,5% de throughput em 3 iterações e… *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_09` | A alegação de que IA local economiza energia cai sob medição: por consulta, a nuvem com lote é 3,7–6,4× mais eficiente que um Mac Studio… | Ecológico | média | até 2028 |
| `e1_10` | O site passa a gastar a bateria e a GPU do visitante sem pedir: a posição formal do WebKit contra a Prompt API aponta que, depois do… | Político | média | até 2028 |
| `e1_11` | No Brasil, o 'grátis depois de baixado' cobra entrada em franquia: um modelo de 2–4 GB consome de um terço a dois terços do pré-pago TIM de… *(óbvio)* | Econômico | média | até 2028 |
| `e1_12` | A IA local de qualidade vira bem de capital: o servidor pessoal de 128 GB custa de US$ 2.399 a US$ 3.999 (mini PCs Ryzen AI Max+ 395; AMD… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_13` | A instabilidade da cota gratuita da nuvem empurra estudantes e pequenas equipes para o modelo local — mas só quem já tem hardware, e depois… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_14` | As marcas de 'rodar no seu computador' passam a vender nuvem: a Ollama lançou planos por token em 31/08/2026 (Pro US$ 20/mês com US$ 60 de… | Econômico | alta | até 2028 |
| `e1_15` | O híbrido vira modo de fábrica dos SDKs: o Firebase AI Logic roteia o mesmo pedido entre Gemini Nano e nuvem, e o modo PREFER_ON_DEVICE cai… *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_16` | Quem controla o roteador controla custo e privacidade: na WWDC 2026 a Apple abriu 'Custom Providers' no Foundation Models — a mesma API… | Econômico | alta | até 2028 |
| `e1_17` | O provedor usa o silício do usuário para baratear o próprio datacenter: patente concedida à Microsoft em 13/01/2026 manda ao modelo local… | Econômico | média | 2028-2031 |
| `e1_18` | A assinatura de IA na nuvem não recua com o modelo embutido nos sistemas: o ChatGPT declarou mais de 50 milhões de assinantes pagantes de… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_19` | A fronteira da privacidade desloca-se do aparelho para a 'nuvem atestada': o AFM 3 da Apple amplia a parte em servidor (AFM 3 Cloud Pro… | Tecnológico | média | 2028-2031 |
| `e1_20` | No híbrido, a privacidade passa a depender do preço do aparelho: no melhor pipeline de delegação consciente de privacidade, o modelo local… | Social | média | 2028-2031 |
| `e1_21` | A IA do sistema operacional vira leitora universal do que outros apps protegem, e o aparelho vira acervo pessoal denso: o Recall concentrou… *(óbvio)* | Político | alta | até 2028 |
| `e1_22` | Modelo e prompt de sistema no aparelho são copiáveis, o que empurra quem tem modelo proprietário para o modelo do SO protegido em hardware:… | Tecnológico | baixa | 2028-2031 |
| `e1_23` | Onde o pedido é processado vira um estado de interface que precisa ser mostrado: a Samsung expõe ao usuário brasileiro a chave 'Decida se… | Social | média | até 2028 |
| `e1_24` | O modelo de plataforma chega sem consentimento sobre o aparelho: o Chrome guarda o Gemini Nano de ~4 GB como weights.bin, instalado… | Político | média | até 2028 |
| `e1_25` | Quem constrói sobre o modelo do sistema herda o calendário de troca do fabricante: a Microsoft anuncia que o Phi Silica 'is being replaced… *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_26` | O modelo 'local' do SO é racionado por cota que o fabricante não publica: num Pixel 10 Pro XL com Android 17, após 36–41 gerações… | Tecnológico | alta | até 2028 |
| `e1_27` | Surge uma nova categoria de falha de interação, 'a IA do sistema se recusou': no Foundation Models da Apple, guardrailViolation não é… | Social | alta | até 2028 |
| `e1_28` | A política de conteúdo do fabricante acompanha o modelo até o celular: a política de uso aceitável do Foundation Models proíbe, entre… *(óbvio)* | Político | alta | até 2028 |
| `e1_29` | A web pode se calcificar em torno do modelo de um navegador: a Prompt API saiu sem consenso (Mozilla 'negative', WebKit 'oppose', TAG do… | Tecnológico | média | 2031-2036 |
| `e1_30` | Fica sem dono a responsabilidade pelo que o modelo local diz: no modelo do navegador, a Mozilla pergunta, diante de um resumo gerado sobre… *(óbvio)* | Político | média | 2028-2031 |
| `e1_31` | O idioma vira porteira da IA local: em set/2026 a Prompt API do Chrome aceita só 'en', 'ja', 'es', 'de' e 'fr' e a Summarization do ML Kit… | Social | alta | até 2028 |
| `e1_32` | A licença deixa de ser barreira para embarcar modelo próprio no app: a família Gemma 4 saiu em Apache-2.0 e sem porteira (a Gemma 3/3n… | Tecnológico | alta | até 2028 |
| `e1_33` | A infraestrutura aberta da IA local se concentra num ator privado enquanto projetos menores param: a ggml.ai (llama.cpp, formato GGUF,… | Econômico | média | 2028-2031 |
| `e1_34` | 'Ninguém pode desligar' vale também para o que ninguém quer que circule: 3.471 modelos originais 'sem censura' no Hugging Face… *(óbvio)* | Político | alta | até 2028 |
| `e1_35` | A disponibilidade de pesos passa a ser disputa política e 'não poder desligar' pode virar 'não poder atualizar': em 24/07/2026 a indústria… | Político | média | 2028-2031 |
| `e1_36` | A estabilidade vira motivo próprio para rodar local: Giada Pistilli e Simon Willison argumentam que o modelo na web muda sem aviso (o… *(óbvio)* | Social | média | até 2028 |
| `e1_37` | A baixíssima precisão chega ao usuário pela via proprietária do sistema, não pelo BitNet aberto: o modelo de ~3B da Apple roda em 2 bits… | Tecnológico | alta | até 2028 |
| `e1_38` | O 1 bit nativo tende a vencer primeiro em tarefas estreitas, não no chat: o maior BitNet de linguagem da Microsoft continua com 2,4B… | Tecnológico | média | 2028-2031 |
| `e1_39` | O modelo aberto do momento vira modelo de bolso semanas depois, por conversão a 1–2 bits: a PrismML publicou em 04/07/2026 o Bonsai 27B,… | Tecnológico | média | até 2028 |
| `e1_40` | Justamente o modelo pequeno que cabe no celular é o que mais perde com compressão, e raciocínio quebra primeiro: pós-treino, pesos em 4… *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_41` | A experiência da IA local é decidida pela largura de banda de memória, não pelo TOPS da NPU anunciado: em quatro celulares Snapdragon, a… *(óbvio)* | Tecnológico | alta | 2028-2031 |
| `e1_42` | A IA local comprimida fica sensivelmente pior em português do que os benchmarks mostram, e não há medida para o português: com quantização,… | Social | alta | 2028-2031 |
| `e1_43` | Comprimir em bits não comprime o comportamento indesejado: o modelo ternário TriLM de 3,9B, que iguala o FloatLM de 3,9B nos benchmarks… | Social | média | 2028-2031 |
| `e1_44` | O computador de casa como servidor de IA pessoal já existe em escala, e boa parte aberta sem senha: uma varredura acadêmica achou 320.102… *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_45` | O acesso ao modelo de casa pelo celular vira produto empacotado — e recoloca intermediários: o LM Link (iPhone e iPad, 04/06/2026) conecta… | Tecnológico | alta | até 2028 |
| `e1_46` | Quando o assistente local tem acesso a e-mail e agenda, a conversa livre com o mundo vira risco e dá lugar a pedidos tipados: o harness… | Tecnológico | baixa | 2028-2031 |

Os 8 temas que organizam a 1ª ordem, e pelos quais os lotes de expansão foram formados: **Capacidade instalada, uso ínfimo: a IA local medida pela sondagem** (`e1_01` a `e1_05`); **O custo não some, muda de pagador: memória, bateria, franquia e capital** (`e1_06` a `e1_13`); **O local vira a camada barata da nuvem: o híbrido roteado pela plataforma** (`e1_14` a `e1_19`); **Privacidade fragmentada: o dado não vai à nuvem, mas sai por outros caminhos** (`e1_20` a `e1_24`); **O fabricante como guardião: cota, filtro, idioma e troca de modelo** (`e1_25` a `e1_31`); **Pesos abertos: a independência que existe, com zelador privado e sem freio** (`e1_32` a `e1_36`); **Baixíssima precisão: 2 bits no sistema, 1 bit por conversão, BitNet parado** (`e1_37` a `e1_43`); **O computador de casa como servidor pessoal: o sinal fraco chegou como superfície de ataque** (`e1_44` a `e1_46`).

## Os 5 mais impactantes

1. **`e1_16` — Quem controla o roteador controla custo e privacidade.** Custom Providers põem modelo do aparelho, PCC, Claude e Gemini sob a mesma chamada, com nuvem gratuita só abaixo de 2 milhões de downloads; é o nó R3 por onde passam 22 das 52 conexões e de onde saem e2_B06, e3_T1_17 e a estratificação de cv1.

2. **`e1_06` — O choque de memória confina a IA local ao aparelho caro.** DRAM móvel +70–83% no 2T26, entrada parada em ~4 GB e segmento abaixo de US$ 400 −22%; sustenta fl1 e fl7, a vulnerabilidade sv5 e o horizonte de e3_T1_05 (celular popular sem memória até ~2030).

3. **`e1_25` — O calendário de troca é do fabricante.** Phi Silica removido dos aparelhos de varejo em novembro de 2026, adaptadores da Apple presos a uma versão, ML Kit GenAI sem SLA: derruba a R1c para o modelo do sistema e alimenta a oscilação fl4 e a exigência de QA por coorte (e2_B27).

4. **`e1_31` — O idioma vira porteira da IA local.** A Prompt API aceita en, ja, es, de e fr e o resumo do ML Kit três idiomas; Motorola e Xiaomi somam 33,8% das páginas vistas em celular no Brasil e dependem do roteiro do Google (e2_B41); origem do loop fl3 e do ponto de convergência brasileiro.

5. **`e2_A16` — O local-first custa mais onde o aparelho é barato.** Custo por usuário = média entre pedidos grátis no aparelho e fallback faturado; com 87% da classe DE só no celular, o app raciona onde a promessa dizia que a IA local chegaria primeiro; ramo fértil de e3_T1_01 (cota por usuário atinge antes o aparelho de entrada) e e3_T1_02.

**O que os cinco têm em comum.** Nenhum trata de o modelo local ficar melhor. Os cinco mostram **quem decide, pedido a pedido, se a inferência fica no aparelho**: o dono do roteador que põe aparelho, nuvem atestada e modelo de terceiro sob a mesma chamada (`e1_16`), o preço da memória que fixa o piso do aparelho vendido (`e1_06`), o calendário do fabricante que troca o modelo embutido (`e1_25`), a lista de idiomas aceitos (`e1_31`) e a conta do app, que paga pelo pedido que cai para a nuvem e raciona onde o aparelho é fraco (`e2_A16`). Somados, empurram na mesma direção: **o aparelho barato e o português são os primeiros a subir para a nuvem**, justamente onde a promessa dizia que o modelo local chegaria antes.

**Os 5 mais surpreendentes**: `e2_B30` a recusa do filtro local manda o conteúdo delicado para a nuvem; `e1_09` local gasta mais energia que a nuvem por consulta; `e1_02` ligar a API por padrão não fez o uso subir; `e3_T2_23` o mesmo arquivo de pesos não dá a mesma resposta; `e3_T1_10` a contagem de tokens decide que o português sai do aparelho.

**Distribuição.** Tecnológico 43% → 43% → 42% da 1ª à 3ª ordem; Político 17% → 25% → 27%; Econômico 22% → 16% → 19%; Social 15% → 16% → 12%. **A categoria Ecológica tem 1 efeito** (`e1_09`), e o número baixo é resultado do teste, não descuido: ele passa no teste do meio físico porque termina na energia gasta por consulta (nuvem com lote contra aparelho), e não num preço; outros seis candidatos terminavam em fatura, regra de alegação ambiental, régua de medição ou bateria como restrição de uso, e foram reprovados (TMI-0083). A energia de ciclo de vida — aparelho com mais memória, troca antecipada — não foi medida por nenhuma fonte. 53 dos 200 efeitos são óbvios depois da auditoria (TMI-0061), caindo de 39% na 1ª ordem para 28% na 2ª e 10% na 3ª. 2 ficam fora da janela de 2031 (`e1_29`, `e3_T1_05`): as cadeias são curtas porque correm em ciclo de produto, SDK e cota, e a síntese declara onde houve compressão (lei, renovação do parque de aparelhos, norma científica).

## Wildcards

8 cenários de baixa probabilidade e alto impacto: 3 positivos, 4 negativos e 1 ambíguo.

- **w1 · Desligado por sentença: o assistente de nuvem suspenso no Brasil** (ambíguo). Em meio a um conflito sobre cumprimento de ordens judiciais — representação legal, remoção de conteúdo, período eleitoral —, o STF suspende em todo o território um grande assistente de IA na nuvem, com multa para quem contornar…
- **w2 · O loop fl1 dispara: IA generativa vira luxo dos dois lados** (negativo). A escassez de memória não se resolve em 2027–2028: a DRAM cara mantém o celular de entrada em ~4 GB e, ao mesmo tempo, a nuvem de IA, que disputa a mesma memória, raciona.
- **w3 · O GGUF envenenado do modelo do momento** (negativo). Semanas depois de um modelo aberto de ponta sair, uma das quantizações mais baixadas — publicada por redistribuidor conhecido cuja conta foi comprometida, ou por imitador bem posicionado — traz um chat template adulterado.
- **w4 · O adaptador pessoal confessa** (negativo). Um sistema operacional ou app popular passa a oferecer 'um modelo que aprende com você': um adaptador ajustado no próprio aparelho sobre mensagens, notas e e-mails.
- **w5 · A flash substitui a DRAM** (positivo). Com a DRAM cara, a saída vem pelo armazenamento: runtimes móveis passam a carregar do armazenamento interno só os blocos de neurônios ou especialistas ativos de um modelo esparso, já convertido a 1–2 bits.
- **w6 · O modelo público no bolso: o PBIA vira pacote offline em português** (positivo). O Plano Brasileiro de IA, que promete 'modelos de linguagem avançados em português', decide que a forma de entregar soberania ao cidadão não é só o supercomputador, mas um modelo aberto pequeno em português, de 1–4B, comprimido…
- **w7 · O veto por linhagem chega ao hub** (negativo). Uma medida dos EUA que hoje mira o uso governamental de modelos de 'nações adversárias' é estendida, por lei, sanção ou pressão sobre plataformas americanas, à distribuição de pesos de origem chinesa e de seus derivados.
- **w8 · Direito ao processamento local: o fallback de nuvem vira opt-in** (positivo). Uma decisão regulatória ou judicial — a ANPD num processo de fiscalização, ou um tribunal em ação coletiva de consumidor — entende que o pedido que sai do aparelho para uma nuvem no exterior sem aviso por pedido é transferência…

**O wildcard do enunciado, testado.** "Um modelo de 1 bit atingir qualidade de fronteira num celular de entrada" **segue wildcard na forma literal, e muito improvável até 2031.** O celular de entrada tem cerca de 4 GB de RAM; o teto prático é um modelo ternário de ~8B, que ocupa 1,75 GB (Ternary Bonsai 8B, números da PrismML). Modelos de até 40B alcançam a fronteira com seis a doze meses de atraso numa GPU doméstica (Epoch), e a conversão a 1 bit custa pontos que só um teste independente mediu (~11 no Bonsai 27B). Duas formas vizinhas mudaram de estatuto: "qualidade da fronteira de meses antes, num celular de topo, com número do fabricante" já aconteceu; e "1 bit nativo" perdeu a forma, porque quem entrega é a conversão de pesos abertos. A surpresa plausível contorna a memória em vez de vencê-la: ler do armazenamento só os blocos ativos de um modelo esparso (`w5`).

Os dois wildcards brasileiros testam, por lados opostos, a promessa de que ninguém desliga. Em `w1`, uma suspensão judicial de um grande assistente de nuvem, no desenho usado contra o X em 2024, deixa sem IA quem a recebia pelo pacote da operadora, e só quem tem aparelho capaz ou computador em casa continua — o primeiro teste em massa da R1c sairia estratificado. Em `w6`, o Plano Brasileiro de IA entrega soberania ao cidadão como um modelo aberto pequeno em português, comprimido e distribuído offline em apps públicos. O positivo com mecanismo mais curto é `w8`: a ANPD ou um tribunal tornar opcional o envio silencioso do pedido à nuvem, o atalho mais barato do híbrido.

## Nota Brasil

No Brasil as três promessas se separam mais do que em qualquer outro recorte do mapa. **O aparelho decide antes da franquia**: a banda larga fixa chega a 73% dos domicílios, mas 87% da classe DE acessa a internet só pelo celular (TIC Domicílios 2025), o preço médio do celular vendido foi de R$ 2.557 (IDC, 1T25) e o choque de memória segura o aparelho popular em cerca de 4 GB. Baixar um modelo de 2 a 4 GB custaria de um terço a dois terços do pré-pago mais barato da TIM (6 GB por R$ 20), mas o obstáculo maior é não ter memória para rodá-lo. **O idioma decide junto**: o Android responde por 75,43% das páginas vistas em celular (StatCounter, ago/2026), e o modelo do Chrome e o resumo do ML Kit não aceitam português; o português gasta mais tokens por frase, enche antes a janela local e sobe antes para a nuvem. A exceção documentada é o iPhone, cujo modelo no aparelho atende português do Brasil offline desde o iOS 26 — português local de qualidade concentrado no aparelho mais caro. **A IA generativa de massa chega pela nuvem**, distribuída por operadora e banco (Gemini e Perplexity em pacotes da Vivo, ChatGPT Plus na Claro, ChatGPT Go a R$ 39,99 com o Nubank). Três regimes jurídicos aparecem na costura entre aparelho e nuvem sem terem sido desenhados para ela: a LGPD (nuvem atestada no exterior como transferência internacional; consentimento para dado sensível que escala), o PL 2.338/2023 (ônus sobre quem publica ou quantiza modelo em português) e a tese do STF sobre o art. 19 do Marco Civil. Há modelos abertos em português no porte de aparelho (Tucano 2, Gemma-3-Gaia-PT-BR-4b), mas nenhum avaliado quantizado com julgamento humano. Procurado e não encontrado: fatia de aparelhos brasileiros com Gemini Nano, qualquer métrica de uso de IA local por brasileiros, posição da ANPD sobre modelo embarcado, e texto aberto sobre soberania em IA que trate do modelo no aparelho do cidadão — FGV e Ipea a tratam como infraestrutura do Estado.

## O que me faria mudar de ideia

Os dois critérios declarados de antemão foram adoção além da maioria inicial de Rogers, medida pelo uso da pessoa em cujo aparelho a inferência roda (TMI-0092, TMI-0094), e tecnologia que só melhora o que existe. **Nenhum derrubou a raiz por maturidade; o segundo corrigiu as três promessas.** O único contador de uso público fica três ordens de grandeza abaixo dos 2,5% de inovadores. E a economia só melhora a conta de quem oferece o recurso — o custo vai para a memória, a bateria e a cota —, enquanto a nuvem continua barateando e vendendo assinatura. A régua tem uma fraqueza própria deste tema: o contador é do Chrome, que não enxerga o iPhone em português, a Galaxy AI nem o computador de casa, e nenhum fabricante publica a divisão entre aparelho e nuvem. Sinais que mudariam a conclusão:

- O contador LanguageModel_Prompt do chromestatus subir uma ordem de grandeza sobre o patamar de 0,000174% dos carregamentos e sustentar o nível por 90 dias sem degrau de um dia (limiar do Classifier, não número de fonte): a R1 sairia da fase de inovadores no único contador público.
- Apple, Google ou Samsung publicarem a fatia de pedidos atendidos no aparelho contra a nuvem, por recurso e por país (e1_05): a R1b passaria de inauditável a medida, e a regressividade de cv1 poderia ser confirmada ou refutada.
- A Prompt API sair de 'Proposed' para ligada por padrão no Chrome de Android, e aceitar 'pt' (e2_A04, e1_31): o canal de maior alcance no Brasil passaria a ter IA generativa local em português.
- A DRAM móvel voltar a cair antes de 2028 e o aparelho de entrada vendido no Brasil passar a 8 GB (sv5): quebraria fl1 e fl7 e anteciparia o horizonte de e3_T1_05.
- Uma avaliação independente, com julgamento humano em português, de modelo de 1–2 bits num celular de ~4 GB com qualidade próxima à da precisão plena (e1_42, e2_C24): a R2 passaria a habilitar a entrada e ct6 se resolveria a favor do enunciado.
- A Ollama ligar autenticação por padrão, ou o CERT.br incluir runtimes de IA nas notificações de serviços vulneráveis (e2_C30, e3_T2_03): mudaria a forma exposta do servidor pessoal.
- A ANPD ou um tribunal exigir aviso por pedido ou opt-in do fallback de nuvem para dado sensível (w8): a R3 perderia o fallback silencioso, que é o atalho mais barato do nó do mapa.
- Restrição à distribuição de pesos por origem que alcance derivados e quantizações no Hugging Face (w7, e2_C09): a rota por conversão que sustenta a R2 perderia sua base principal.
- O preço da nuvem por qualidade fixa parar de cair ou subir por escassez de memória (w2): inverteria o pressuposto de e1_18 e mudaria o balanço de R1a.
- Um fabricante de SO assumir SLA e política de descontinuação para o modelo embutido (contrário de e1_25, e2_B27): reabriria a R1c para o modelo do sistema.

## Bibliografia essencial

Fontes abertas por inteiro, com título e URL copiados do registro `json/bibliografia.json` (TMI-0082). A lista completa, com 272 fontes, está na nota Obsidian.

1. chromestatus.com: séries diárias dos contadores de uso da Prompt API (LanguageModel_Availability, bucket 5406; LanguageModel_Create, 5405; LanguageModel_Prompt, 5407; LanguageModel_PromptStreaming, 5408). Dados de 2025-04 a 2026-09-11 — `https://chromestatus.com/data/timeline/featurepopularity?bucket_id=5407`
2. chromestatus — tabela de popularidade de features (use counters), dia 11 set. 2026 — `https://chromestatus.com/data/featurepopularity`
3. [blink-dev] Intent to Ship: Prompt API (01/04/2026) + calendário do Chromium (chromiumdash, M148) — `https://groups.google.com/a/chromium.org/g/blink-dev/c/iR6R7-nQeHI/m/Wf6ZoJEWBgAJ`
4. Chrome for Developers — The Prompt API (atualizada em 26 ago. 2026), Get started with built-in AI, Built-in AI APIs; chromestatus (API) para Prompt API, Prompt API on Android, Summarizer, Writer, Rewriter — `https://developer.chrome.com/docs/ai/prompt-api`
5. Mozilla — posição formal sobre a Prompt API (comentário de Jake Archibald, 29/04/2026; marcação por bgrins, 06/06/2025) — mozilla/standards-positions, issue #1213 "Prompt API" (rótulos: 'position: negative', 'concerns: interoperability') — `https://github.com/mozilla/standards-positions/issues/1213`
6. WebKit/Apple — posição formal sobre a Prompt API (comentário do usuário 'hober', 30/04/2026) — WebKit/standards-positions, issue #495 "ML Prompt API" (rótulos: 'position: oppose', 'concerns: interoperability', 'concerns: privacy', 'concerns: portability') — `https://github.com/WebKit/standards-positions/issues/495`
7. Counterpoint Research: GenAI Smartphone Share to Rise to 45% of Global Shipments in 2026 (22/06/2026) — `https://counterpointresearch.com/en/insights/genai-smartphone-share-to-rise-to-45-percent-of-global-shipments-in-2026`
8. TrendForce: Mobile DRAM Contract Prices Continue Rising in 2Q26, Pressuring Smartphone Production (14/05/2026) — `https://www.trendforce.com/presscenter/news/20260514-13044.html`
9. The Register: DRAM prices are killing the cheap smartphone (07/07/2026), citando Omdia e TrendForce — `https://www.theregister.com/personal-tech/2026/07/07/dram-prices-are-killing-the-cheap-smartphone/5267643`
10. Google AI for Developers: Gemini API — Rate limits (página oficial, 'Last updated 2026-09-02 UTC') — `https://ai.google.dev/gemini-api/docs/rate-limits`
11. GitHub googlesamples/mlkit, issue #1070 “Document AICore's per-app inference quota – sustained generation returns GenAiException BUSY (error code 9) after ~40 requests”, aberta em 09/08/2026; e documentação ML Kit GenAI Prompt API (Android), atualizada em 08/09/2026 — `https://github.com/googlesamples/mlkit/issues/1070`
12. Epoch AI: LLM inference prices have fallen rapidly but unequally across tasks (12/03/2025) — `https://epoch.ai/data-insights/llm-inference-price-trends`
13. Venkat Somala e Luke Emberson (Epoch AI) — "Frontier AI capabilities can be run at home within a year or less", Epoch AI Data Insight, 15/08/2025 — `https://epoch.ai/data-insights/consumer-gpu-model-gap`
14. LLM Inference at the Edge: Mobile, NPU, and GPU Performance Efficiency Trade-offs Under Sustained Load — Pranay Tummalapalli, Sahil Arayakandy, Ritam Pal, Kautuk Kundan (Conscious Engines), arXiv:2603.23640v2, 07/06/2026 (preprint) — `https://arxiv.org/html/2603.23640v2`
15. Benchmarking System Dynamics AI Assistants: Cloud Versus Local LLMs on CLD Extraction and Discussion — Terry Leitch, arXiv:2604.18566 (v2, 22/04/2026, preprint) — `https://arxiv.org/html/2604.18566`
16. PAPILLON: PrivAcy Preservation from Internet-based and Local Language MOdel ENsembles — Li Siyan, Vethavikashini Chithrra Raghuram, Omar Khattab, Julia Hirschberg, Zhou Yu (Columbia, Stanford, Databricks), arXiv:2410.17127v3, 25/03/2025; NAACL 2025 — `https://arxiv.org/pdf/2410.17127`
17. Unveiling the Landscape of LLM Deployment in the Wild: An Empirical Study — Xinyi Hou, Jiahao Han, Yanjie Zhao, Haoyu Wang (Huazhong University of Science and Technology), arXiv:2505.02502v1, 05/05/2025 (preprint) — `https://arxiv.org/html/2505.02502v1`
18. Zuyao Xu, Xiang Li, Yuqi Qiu, Lu Sun — 'Ollama in the Wild: A Longitudinal Measurement of Exposed Ollama LLM Endpoints at Internet Scale', arXiv 2609.07115 (07/09/2026; aceito no IMC 2026) — página de resumo — `https://arxiv.org/abs/2609.07115`
19. Cisco Talos — “Detecting Exposed LLM Servers: A Shodan Case Study on Ollama”, Giannis Tziakouris e Elio Biasiotto, blog de segurança da Cisco, 01/09/2025 — `https://blogs.cisco.com/security/detecting-exposed-llm-servers-shodan-case-study-on-ollama`
20. Apple Developer Documentation — Foundation Models (páginas 'Foundation Models' e 'Managing the context window', lidas pelo JSON da documentação) — `https://developer.apple.com/documentation/foundationmodels`
21. Apple Newsroom — 'Apple's Foundation Models framework unlocks new intelligent app experiences' (29/09/2025) — `https://www.apple.com/newsroom/2025/09/apples-foundation-models-framework-unlocks-new-intelligent-app-experiences/`
22. Apple Intelligence Foundation Language Models: Tech Report 2025 — Apple, arXiv:2507.13575 (17/07/2025, atualizado 27/08/2025) — `https://arxiv.org/html/2507.13575v1`
23. Peter Friese — 'Apple Foundation Models: Hybrid AI with Dynamic Profiles' (18/08/2026) — `https://peterfriese.dev/blog/2026/hybrid-ai-apple-foundation-models-gemini`
24. Android Developers Blog — Build intelligent Android apps: Cloud and hybrid inference (21 jul. 2026) — `https://android-developers.googleblog.com/2026/07/build-intelligent-android-apps-cloud-hybrid-inference.html`
25. Microsoft Learn — Get started with Phi Silica in the Windows App SDK (atualizada em 24 jul. 2026) e Copilot+ PCs developer guide (atualizada em 19 ago. 2026) — `https://learn.microsoft.com/en-us/windows/ai/apis/phi-silica`
26. Ollama Blog — 'Ollama: all aboard open models' (9 jul. 2026) e 'Ollama's transparent pricing' (31 ago. 2026) + repositório ollama/ollama — `https://ollama.com/blog/all-aboard-open-models`
27. LM Studio Docs — LM Link (lmstudio.ai/docs/lmlink) — `https://lmstudio.ai/docs/lmlink`
28. Hugging Face Blog — GGML and llama.cpp join HF to ensure the long-term progress of Local AI (20 fev. 2026) + repositório ggml-org/llama.cpp — `https://huggingface.co/blog/ggml-joins-hf`
29. microsoft/BitNet (README do bitnet.cpp) + card do modelo microsoft/bitnet-b1.58-2B-4T no Hugging Face — `https://huggingface.co/microsoft/bitnet-b1.58-2B-4T`
30. GitHub microsoft/BitNet (bitnet.cpp), README com notícias até 23/07/2026 — `https://github.com/microsoft/BitNet`
31. Hugging Face — card do prism-ml/Bonsai-27B-gguf (publicado em 4 jul. 2026) — `https://huggingface.co/prism-ml/Bonsai-27B-gguf`
32. GitHub ArmanJR/PrismML-Bonsai-vs-Qwen3.5-Benchmark (última rodada dos 27B em 14/07/2026; 118 estrelas) — `https://github.com/ArmanJR/PrismML-Bonsai-vs-Qwen3.5-Benchmark`
33. How Does Quantization Affect Multilingual LLMs? — Kelly Marchisio, Saurabh Dash, Hongyu Chen, Dennis Aumiller, Ahmet Üstün, Sara Hooker, Sebastian Ruder (Cohere, Cohere For AI), arXiv:2407.03211v2; Findings of EMNLP 2024 — `https://arxiv.org/html/2407.03211v2`
34. Pillar Security — 'From Discovery to Large-Scale Validation: Chat Template Backdoors Across 18 Models and 4 Engines' (10/02/2026) — `https://www.pillar.security/blog/from-discovery-to-large-scale-validation-chat-template-backdoors-across-18-models-and-4-engines`
35. Mobile Time — TIC Domicílios 2025 (Cetic.br/NIC.br), 09/12/2025 — `https://www.mobiletime.com.br/noticias/09/12/2025/tic-domicilios-2025/`
36. Canaltech: Preço médio dos celulares subiu 88% em um ano no Brasil, aponta IDC (20/05/2025) — `https://canaltech.com.br/smartphone/preco-medio-dos-celulares-subiu-88-em-um-ano-no-brasil-aponta-idc/`
37. StatCounter Global Stats: Mobile Vendor e Mobile OS Market Share Brazil (agosto de 2026) — `https://gs.statcounter.com/vendor-market-share/mobile/brazil`
38. Tucano 2 Cool: Better Open Source LLMs for Portuguese — Project Polyglot (Nicholas Kluge Corrêa, Aniket Sen et al.; Universidade de Bonn/Lamarr Institute), arXiv:2603.03543v1, 03/03/2026 (preprint) — `https://arxiv.org/pdf/2603.03543`
39. Luca Belli, Filipe Medon, Walter B. Gaspar, Natalia Couto e Breno Pauli Medeiros (CTS-FGV Direito Rio) — "Soberania Digital e Inteligência Artificial no Brasil", Artigo para Discussão #003/2025, CTS-FGV, setembro de 2025 — `https://cyberbrics.info/wp-content/uploads/2025/09/ApD-CTS-FGV-003-25.pdf`

---

*Mapa gerado pela skill `futures-wheel` (modo 1, a partir de uma inovação) entre 12 e 13/09/2026, com teto de 15 subagentes, dos quais 14 usados. Fase 8 pulada. 200 efeitos, 147 não óbvios (74%) depois da auditoria, que fez 35 reclassificações e arbitrou 17 contradições entre agentes (18 efeitos com nota de correção). Contrato em `CONTRATO.md`, histórico em `log.txt`, artefatos intermediários em `json/`.*