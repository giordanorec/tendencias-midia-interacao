---
titulo: "Narrativa gerativa e coautoria"
tipo: resumo-de-tendencia
disciplina: "CIN0055 Tendências em Mídia e Interação 2026.2"
tema: "8 de 19"
familia: "Simulação e mundos"
zona: "Simulação e mundos"
skill: futurizacao-futures-wheel
autor: grec
horizonte: 2031
recorte: "global, com nota sobre o Brasil"
data: 2026-09-12
mapa_completo: "futures-wheel-narrativa-gerativa-e-coautoria.md"
---

# Narrativa gerativa e coautoria

**Rodada com teto de 15 subagentes, dos quais 14 foram usados.** A skill prevê um expansor por ramo;
aqui os ramos foram agrupados por tema, e cada um dos três expansores de 2ª ordem marcou os **cinco ramos
mais férteis do seu lote** — de modo que a 3ª ordem saiu apenas sobre esses **quinze ramos de 2ª ordem**,
conforme a decisão TMI-0028, reafirmada pela TMI-0050, ambas em vigor. A consequência, que a decisão manda
declarar em vez de esconder: dos 133 efeitos de 2ª ordem, **118 ficaram sem filhos** —
não por serem menos importantes, mas porque o orçamento foi concentrado onde rende profundidade em vez de
distribuído por igual. Fase 8, infográficos, pulada. O mapa completo —
244 efeitos (30 + 133 + 81), conexões cruzadas, wildcards e 350 fontes — está em
`futures-wheel-narrativa-gerativa-e-coautoria.md` e no HTML de mesmo nome.

## A inovação

O artefato narrativo **inteiro** passa a ser gerado a partir de uma intenção curta. Não é o texto que fica
barato — é a **obra montada**. O MangoBox recebe uma frase e devolve novela visual jogável, com elenco, arte
de cena e diálogo, por US$ 9 ao mês, contra os US$ 15 mil a 80 mil que a mesma peça custava. O AIComicBuilder
roda o pipeline roteiro → vídeo animado inteiro num contêiner no laptop. E a terceira frente não gera coisa
alguma: **traduz por cima**. O LunaTranslator captura o texto na memória do processo do jogo e devolve a
tradução na tela; em 16/07/2026 o Game Overlay Translator virou SKU pago na Steam, a R$ 15,75, 35 idiomas,
cem por cento offline. A linha de base continua de pé e entra como causa, não como novidade: Ren'Py, Twine,
Inform, Ink, YarnSpinner.

O que rompe não é a qualidade da prosa — é o **contrato de autoria**, e ele rompe pelos dois lados ao mesmo
tempo. De um lado, o artefato mais barato de produzir é também o que **não se pode possuir**: o US Copyright
Office decidiu em janeiro de 2025 que prompt é instrução e não expressão, e o D.C. Circuit confirmou em
Thaler v. Perlmutter que a obra gerada não é registrável. De outro, o objeto da autoria muda de nível — o
Elsewise dá o nome: o autor deixa de editar uma sequência e passa a editar uma **distribuição**, o espaço de
possibilidade que o leitor vai atravessar, sem que exista instrumento para julgar, canonizar, citar ou
arquivar uma distribuição.

O teto é medido e não é o que se esperava. Gerar a peça é fácil; **sustentá-la é o gargalo**: o melhor modelo
disponível sobrevive 20 turnos de narrativa interativa sem contradizer um fato estabelecido em apenas 42% dos
casos, e só 3,5% das interações chegam a 100 turnos limpas (NCP-Bench, agosto de 2026); o erro cresce
linearmente com o comprimento e se concentra entre 40% e 60% do texto (ConStory-Bench, Findings ACL 2026). A
resposta que o mercado encontrou não foi modelo maior — foi **andaime determinístico** em volta do modelo, e
três domínios que não se falam convergiram para isso: o motor de cartas da Hidden Door sobre biblioteca de
tropos escritos por humanos, o World Engine da Latitude, e a folha de turnaround mais encadeamento de
keyframe do AIComicBuilder. O preço está medido: a Hidden Door compra coerência 4/5 ao custo de agência 1/5.

E há um segundo achado, de outra natureza, medido em três níveis independentes que convergem: a
**homogeneização**. A originalidade individual da saída é comparável à humana; o que encolhe é a variabilidade
**populacional** (AUT 0,459 nos modelos contra 0,699 nos humanos, efeitos de até 1,8) — e trocar de modelo não
ajuda, porque os modelos se parecem entre si mais do que humanos se parecem entre si. A causa está localizada:
não é o modelo base, é o **pós-treino**, o mesmo alinhamento que torna o modelo vendável. Democratização e
homogeneização não são alternativas: são a mesma curva. O ganho de acesso é real e concentrado no piso (+3,7%
de utilidade com uma ideia de IA, efeito maior entre os escritores menos criativos), e o custo é histórias
mais parecidas entre si. A "localização cultural" que a geração entrega é decorativa — em 11.800 histórias
para 236 nacionalidades, os símbolos mudam e a arquitetura narrativa é a mesma; só 9% a 17% do vocabulário
carrega toda a variação entre nacionalidades.

A frente que já caiu não é a escrita: é a **tradução**. É o único segmento inteiro da cadeia narrativa com
receita agregada em queda — US$ 253 milhões em 2024, US$ 246 milhões em 2025 —, com a RWS fechando o FY25 com
lucro ajustado −43% e a Keywords Studios saindo da bolsa por £ 2,1 bilhões no ano do pico; 36% dos tradutores
britânicos já perderam trabalho e o FMI foi de cerca de 200 para 50 tradutores internos. Na declaração da
Steam, "translation/localization" é categoria **comum** e "writing/dialogue" é a **mais rara**: a escrita
autoral é a última fronteira, não a primeira. Enquanto isso, o capital não está na escrita — está na
renderização dela: ElevenLabs de US$ 1,1 bi a US$ 11 bi em 25 meses, Runway a US$ 5,3 bi, contra a Sudowrite
com US$ 1,8 milhão de ARR, 16 funcionários e nenhum venture capital.

A abundância chegou sem redistribuir nada. Os EUA passaram de 3,1 para mais de 4 milhões de títulos com ISBN
em um ano; 30,8% dos lançamentos de 2026 na Steam declaram IA, e 9.556 dos 10.258 jogos com IA declarada
faturaram menos de US$ 10 mil. Chakrabarty e colegas deram a forma econômica sobre 14.419 livros: o número de
livros que vendem cresceu 19,2× por trimestre e a receita apenas 8,9× — e a receita por livro caiu em 7 de 8
gêneros **inclusive para títulos sem texto de IA detectado**, com o único gênero onde a IA chegou tarde vendo
a receita por livro humano subir 35%. A variável é densidade de oferta, não qualidade.

A governança fechou por **rótulo e consentimento**, e o incentivo saiu invertido: quem declara IA na Steam
recebe cerca de 53% menos avaliações, quem esconde passa incólume, e nove em cada dez estúdios admitem uso a
portas fechadas. A penalidade é ontológica, não estética — artefatos idênticos rotulados como gerados recebem
notas menores e menos tempo de atenção. E a prova de origem migrou do texto para o **processo**: uma paráfrase
que preserva o sentido remove a marca d'água em 98,3% dos casos, os detectores marcam 61% dos textos de
não-nativos de inglês como IA, e o que efetivamente denunciou trinta autoras do AO3 em 2026 foi uma tag de CSS
esquecida pelo chat no HTML. Fora do recorte, pela régua da disciplina: engine de novela visual, ferramenta de
diálogo ramificado e editor de mapa entram como linha de base. Fronteiras: o personagem que age dentro de um
mundo é o tema 7, vídeo e imagem como mídia é o tema 12, design procedural é o tema 14, companheiro digital é
o tema 19. Aqui o objeto é **a história como coisa gerada** e o que isso faz com autoria.


**A tese.** Até 2031, o que decide qual história existe em mídia narrativa não é quem detém o direito nem quem detém a prova de origem, e sim quem controla um gargalo racionado de acesso ao canal — a vaga na loja, a fila de triagem, a fatia do fundo de rateio e o cliente instalado na máquina do leitor —, porque a camada de atestação e garantia, embora inteiramente construída em 2026, não encontra quem a pague.

## Os 30 efeitos de 1ª ordem

| id | Efeito | STEEP | Prob. | Prazo |
|---|---|---|---|---|
| `e1_01` | O custo unitário de produzir uma novela visual completa (elenco, retratos, arte de cena, diálogo e a própria jogabilidade) cai de US$… *(óbvio)* | Econômico | alta | curto |
| `e1_02` | O catálogo de mídia narrativa incha em um único ciclo: 30,8% dos lançamentos de 2026 na Steam declaram IA generativa (eram 10,9% em 2024),… *(óbvio)* | Econômico | alta | curto |
| `e1_03` | Produção e atenção se descolam: o volume gerado explode e o consumo não se move *(óbvio)* | Econômico | alta | curto |
| `e1_04` | A receita por obra desaba inclusive para quem NÃO usou IA. Em 14.419 livros de ficção de gênero autopublicados na Amazon, o número de… *(óbvio)* | Econômico | alta | curto |
| `e1_05` | O gargalo do sistema migra da produção para a TRIAGEM, e as plataformas respondem racionando vazão em vez de qualidade: a Clarkesworld viu… *(óbvio)* | Econômico | alta | curto |
| `e1_06` | O repertório narrativo disponível se estreita de forma mensurável, e não por queda de qualidade: a originalidade individual das saídas é… *(óbvio)* | Social | alta | curto |
| `e1_07` | A 'localização cultural' que a geração entrega é decorativa: em 11.800 histórias geradas para 236 nacionalidades, os símbolos nacionais… *(óbvio)* | Social | alta | curto |
| `e1_08` | A coerência de arco longo vira o teto duro do artefato gerado, com número: o melhor modelo disponível (GPT-5.2) sobrevive 20 turnos de… *(óbvio)* | Tecnológico | alta | curto |
| `e1_09` | O objeto de autoria deixa de ser uma sequência e passa a ser um ESPAÇO DE POSSIBILIDADES: quando a IA expande a história em resposta ao… | Tecnológico | alta | médio |
| `e1_10` | O capital se concentra na RENDERIZAÇÃO da narrativa (voz e vídeo), não na escrita dela: a ElevenLabs foi de US$ 1,1 bi a US$ 11 bi de… | Econômico | alta | curto |
| `e1_11` | A unidade econômica migra da OBRA para o MUNDO e para o ELENCO licenciáveis: o Showrunner paga participação reportada de ~40% ao criador do… | Econômico | média | médio |
| `e1_12` | A mesma obra gerada passa a ter três estatutos jurídicos incompatíveis ao mesmo tempo: nos EUA promptar NÃO estabelece autoria e a obra… *(óbvio)* | Político | alta | curto |
| `e1_13` | O regime regulatório de fato converge, no mundo inteiro, para RÓTULO + CONSENTIMENTO em vez de proibição — e 'texto e diálogo' vira uma… *(óbvio)* | Político | alta | curto |
| `e1_14` | O rótulo produz seleção adversa em vez de informação: jogos que CUMPREM a exigência de divulgação são review-bombados e recebem 53% menos… | Político | alta | curto |
| `e1_15` | Quem escreve e quem lê discordam estruturalmente sobre quando é preciso divulgar: em experimento com N=727, escritores têm 79,7% MENOS… | Social | alta | curto |
| `e1_16` | A penalidade de rótulo é ontológica, não estética: artefatos IDÊNTICOS rotulados como gerados por IA recebem notas menores em criatividade,… | Social | alta | curto |
| `e1_17` | A prova de autoria migra do TEXTO para o RASTRO DE PROCESSO — rascunhos, timestamps, notas, telemetria de escrita — porque nenhuma… | Político | alta | curto |
| `e1_18` | Cai o senso de propriedade e de responsabilidade sobre o que se escreve, e cai antes de qualquer disputa jurídica: com ChatGPT os… *(óbvio)* | Social | alta | curto |
| `e1_19` | Entra na produção uma camada inteira de autores que não escreveriam sem a máquina, e o ganho é concentrado no piso: o acesso a ideias de… *(óbvio)* | Social | alta | curto |
| `e1_20` | Gerar dá mais prazer do que ler o gerado, e por isso o volume não vira catálogo: mais de um TERÇO de 500 mil conversas anonimizadas de… | Social | média | médio |
| `e1_21` | A função narrativa é a primeira a ser cortada e a mais hostil à tecnologia que a corta: narrativa foi a disciplina MAIS atingida por… *(óbvio)* | Econômico | alta | curto |
| `e1_22` | A legitimidade da coautoria passa a se definir pela PROPRIEDADE DO DADO DE TREINO, não pelo uso da técnica: a jam de novela visual O2A2… | Político | média | médio |
| `e1_23` | O primeiro segmento inteiro da cadeia narrativa com receita agregada em QUEDA é a localização: o mercado global de localização de texto de… *(óbvio)* | Econômico | alta | curto |
| `e1_24` | A decisão de em que idioma a obra chega ao público sai das mãos do publisher e vai para o cliente do próprio jogador: overlays de tradução… | Tecnológico | alta | curto |
| `e1_25` | O tradutor e o dublador não desaparecem: são rebaixados a pós-editores por cerca de um quarto da tarifa — e o português do Brasil está no… *(óbvio)* | Econômico | alta | curto |
| `e1_26` | A tradução gerada abre catálogo que nunca teria sido licenciado: a Toonsutra (US$ 5,9 mi, Sony Innovation Fund, apoio do AI Futures Fund do… *(óbvio)* | Social | alta | curto |
| `e1_27` | O refinamento iterativo melhora fluência, estilo e terminologia e NÃO melhora a fidelidade ao sentido, porque projeta a saída na… | Tecnológico | alta | médio |
| `e1_28` | O piso de aceitação da tradução sobreposta é COMPREENSÃO, não qualidade — nenhum dos 18 espectadores conseguiu distinguir com segurança… | Social | alta | curto |
| `e1_29` | O Brasil responde à disrupção por RESERVA DE MERCADO, enquanto o resto do mundo responde por rótulo: o PL 4041/2025 obriga contratação de… | Político | média | médio |
| `e1_30` | O mercado editorial brasileiro não está protegido pela tecnologia nem pela cultura: está protegido pelo CANAL — o Brasil produziu ~45 mil… | Econômico | média | médio |

Três grupos organizam a leitura, e foram eles que definiram os lotes de expansão. **O ofício, a obra e a autoria** (`e1_01`, `e1_06` a `e1_09`, `e1_18` a `e1_20`, `e1_27`): o custo unitário da novela visual cai duas a três ordens de grandeza; o repertório disponível se estreita de forma medida, e a causa está no pós-treino, não no modelo base; a localização cultural entregue é decorativa; a coerência de arco longo é o teto duro, com número, e empurra todo produto sério para andaime determinístico em vez de modelo maior; o objeto de autoria deixa de ser a sequência e vira o **espaço de possibilidade**, que nenhuma instituição sabe julgar, citar ou arquivar; cai o senso de propriedade e de responsabilidade sobre o que se escreve, e cai antes de qualquer disputa jurídica; entra uma camada inteira de autores que não escreveriam sem a máquina, com o ganho concentrado no piso; **gerar dá mais prazer que ler o gerado**, e por isso o volume não vira catálogo; e o refinamento iterativo melhora o estilo sem melhorar a fidelidade, o que faz a obra traduzida convergir para a voz do modelo. **A economia** (`e1_02` a `e1_05`, `e1_10`, `e1_11`, `e1_21`, `e1_23`, `e1_25`, `e1_30`): o catálogo incha em um único ciclo; produção e atenção se descolam; a receita por obra desaba inclusive para quem não usou IA; o gargalo migra da produção para a **triagem**, e a resposta das plataformas é racionar vazão — cota de publicação, uma governança de mídia que quase ninguém está prevendo; o capital se concentra na renderização (voz e vídeo) e não na escrita; a unidade econômica migra da obra para o **mundo licenciável**; a função narrativa é a primeira cortada e a mais hostil à tecnologia que a corta; a localização é o único segmento inteiro com receita agregada em queda; o tradutor não desaparece, é rebaixado a pós-editor por cerca de um quarto da tarifa; e o editorial brasileiro está protegido pelo canal, não pela tecnologia nem pela cultura. **A governança, a prova e a língua** (`e1_12` a `e1_17`, `e1_22`, `e1_24`, `e1_26`, `e1_28`, `e1_29`): a mesma obra passa a ter três estatutos jurídicos incompatíveis ao mesmo tempo; o regime converge para rótulo e consentimento, não para proibição; o rótulo produz **seleção adversa** em vez de informação; escritores e leitores discordam estruturalmente sobre quando divulgar, e o esforço do autor não compra perdão do público; a penalidade é ontológica e não estética, de modo que polir a saída tem retorno decrescente; a prova de autoria migra do texto para o **rastro de processo**; a legitimidade passa a se definir pela propriedade do dado de treino — regra que funciona como anistia para quem tem acervo; a decisão do idioma em que a obra chega ao público sai do publisher e vai para o cliente do jogador; a tradução gerada abre catálogo que nunca teria sido licenciado; o piso de aceitação é compreensão, não qualidade, e a rejeição dispara por sinais materiais; e o Brasil responde por **reserva de mercado** enquanto o mundo responde por rótulo.

## Os 5 mais impactantes

*O porquê aparece aqui abreviado; o texto integral e a cadeia de efeitos estão no mapa completo.*

1. **`e1_08` — O teto de coerência de arco longo (42% em 20 turnos, 3,5% em 100).** É a única restrição da árvore que decide a FORMA do que pode ser feito, e não apenas o preço. Ela é medida por dois benchmarks de desenho independente (NCP-Bench e ConStory-Bench), o que a torna a alegação técnica mais bem fundamentada da rodada.

2. **`e1_14` — O rótulo produz seleção adversa em vez de informação.** É o efeito que corrompe todo o resto do aparato de governança, e ele é medido dos dois lados: quem cumpre a divulgação é review-bombeado e recebe 53% menos avaliações, enquanto nove em cada dez estúdios admitem uso a portas fechadas contra 30% a 52% declarados. A consequência não é ineficácia — é inversão: o instrumento passa a medir honestidade, e a jogada racional do autor vira reescrever tudo à mão a partir da saída, exatamente o gesto que destrói a marca d'água e a detecção (fl2, e2_C14).

3. **`e1_24` — A decisão de em que idioma a obra chega ao público sai do publisher e vai para o cliente do jogador.** É o efeito que faz um segmento inteiro da indústria e um aparato regulatório inteiro perderem o objeto ao mesmo tempo, e já está enviado: overlay a R$ 15,75 na Steam desde 16/07/2026, LunaTranslator substituindo texto na memória do processo, dublagem neural local e gratuita em 31 idiomas. Não é uma tendência a se confirmar: é software instalado, e software instalado não se desinstala por decisão de política.

4. **`e2_B15` — A triagem é terceirizada, e quem vende o filtro adquire poder editorial de fato.** É onde a cascata aperta de verdade, porque converte o único custo que não escala — ler — numa rubrica com preço unitário, e rubrica com número é rubrica cortável (e3_T1_29). O estágio seguinte não é hipótese: o STM Integrity Hub já reúne mais de 50 editoras, tria mais de 20 mil submissões por mês e cruza sinais entre periódicos e sistemas distintos, e Turnitin e Copyleaks vendem para os dois lados do balcão.

5. **`e2_C22` — A proveniência de texto é decidida pela área de transferência do sistema operacional.** É o efeito que determina se a tese central da rodada pode sequer se realizar, e a resposta que ele dá é não. As três arquiteturas de prova — acidental (a tag CSS esquecida no HTML do AO3), estatística (o detector) e criptográfica (o manifesto C2PA em Unicode Variation Selectors) — dependem de o texto chegar íntegro ao verificador, e o transporte entre aplicativos é onde tudo é normalizado.

**O padrão por trás dos cinco.** Nenhum deles fala do modelo — todos falam de **quem controla a passagem**. O barato foi resolvido e o caro não foi endereçado: gerar o artefato inteiro custa uma assinatura, mas ler para escolher continua custando uma pessoa por vez, e é aí que o sistema aperta (`e1_05`). A resposta das plataformas não foi julgar melhor, foi **racionar vazão** — cota diária, janela curta, taxa por submissão, fila terceirizada —, e quem vende o filtro adquire poder editorial de fato, sem nunca ter sido editor (`e2_B15`, `e2_B16`). Enquanto isso, toda a camada erguida em 2026 para dizer de onde veio o texto falha no mesmo ponto trivial: o transporte. A única detecção que funcionou no ano foi uma tag CSS esquecida no HTML, e o gesto que apaga a proveniência é colar no Word (`e2_C22`, `e3_T2_29`). Por isso o rótulo não informa — seleciona: pune quem declara com 53% menos avaliações e premia quem cala, invertendo o instrumento (`e1_14`). E o controle que sobra migrou para fora do alcance de qualquer regulador: a obra chega ao leitor no idioma que o **cliente instalado na máquina dele** decidir, por um overlay de R$ 15,75 que já está vendido (`e1_24`). A cascata se juridifica com a profundidade (Político: 20% → 23% → 35% das três ordens), o que é coerente com um mapa cuja disputa real não é se a técnica funciona, e sim **quem responde pelo que ela disser**. Para quem projeta mídia e interação, a consequência prática é uma só: até 2031 o ativo defensável não é o texto nem a prova de que ele é seu — é o **acesso ao canal** e o espaço de possibilidade que se projeta dentro dele, porque é a única coisa que a geração barata não replica (`e1_09`, `e1_11`).

## Wildcards

12 cenários de baixa probabilidade e alto impacto — 4 positivos, 2 negativos, 6 ambíguos.

- **w1 · A geração deixa de ser confissão** (ambíguo). Entre 2028 e 2030 a coorte que entrou depois de 2023 vira a maioria dos compradores nas lojas de mídia narrativa, e a penalidade de rótulo simplesmente evapora.
- **w2 · O primeiro precedente de autoria por rastro** (ambíguo). Numa disputa entre dois humanos — plágio, coautoria contestada, quebra de encomenda —, e não numa disputa homem-contra-máquina, um tribunal aceita o RASTRO DE PROCESSO como prova de contribuição humana: manifesto C2PA de texto, log….
- **w3 · O notário no clipboard** (ambíguo). A Apple anunciou suporte a Content Credentials no iOS 20, com chegada prevista para o outono de 2026, e a Microsoft começou a marcar conteúdo do M365 em fevereiro de 2026.
- **w4 · A diversidade fica de graça** (positivo). Um lançamento de pesos abertos embarca um checkpoint explicitamente 'criativo', pós-treinado com objetivo de desvio — a linha DDPO/DORPO, em que um modelo de 8 bilhões de parâmetros alcança diversidade equivalente à de um dataset humano….
- **w5 · O overlay vira adulteração da obra** (negativo). Dois eventos independentes se somam em 2028-2030.
- **w6 · A ficção privada vira categoria de risco etário** (ambíguo). A onda de leis de companion chatbot — SB 243 na Califórnia, vigente desde 01/01/2026, seguida por cerca de uma dúzia de estados até meados de 2026, com padrão de 'constructive knowledge' que responsabiliza quem DEVERIA saber que o usuário….
- **w7 · O prêmio que premia o processo, e as vendas sobem** (positivo). Um prêmio de primeira linha já premiou obra declaradamente coescrita — Rie Qudan levou o Akutagawa em janeiro de 2024 com cerca de 5% do texto citando verbatim frases geradas, e um membro do comitê declarou publicamente que a seleção não….
- **w8 · O falso positivo que vira jurisprudência** (ambíguo). A escalada já está datada.
- **w9 · O acervo que é uma casca** (ambíguo). Entre 2028 e 2030 alguém faz o teste que ninguém fez: pega uma amostra do que foi depositado como novela visual gerativa no depósito legal digital e tenta executar.
- **w10 · A reserva é aprovada, e quem regula a narrativa vira a ANPD** (negativo). O PL 4041/2025 é aprovado.
- **w11 · O mundo licenciado que funciona porque já tem público** (positivo). O contra-teste do Sora já existe e vai na direção oposta.
- **w12 · A leitura comum vira o produto** (positivo). O efeito mais isolado desta árvore é também o único que propõe um valor positivo e não-defensivo para a obra publicada: num mundo de leitura infinita e privada, o que escasseia é a leitura COMUM — o fato de outra pessoa ter lido exatamente….

O que os 12 revelam em conjunto está em `json/wildcards.json` e na nota completa.

## Nota Brasil

Os efeitos com recorte brasileiro, lidos em conjunto, **não descrevem um país atrasado**: descrevem um país que protege pela CAPACIDADE DE ORGANIZAÇÃO e não pelo tamanho do dano. A voz tem categoria profissional, sindicato, rosto público e campanha nacional — 20 mil apoios em três semanas; o tradutor de texto é freelancer disperso e o roteirista de jogo não tem representação nenhuma. Daí sai a resposta regulatória mais estruturalmente ambiciosa que esta pesquisa encontrou em qualquer país, e ela é brasileira: **reserva de mercado** em dublagem, com o PL 4041/2025 obrigando contratação nacional e o PL 2462/2025 simplesmente proibindo, sob multa diária de até R$ 50 mil. A manobra jurídica é a peça mais inteligente do material — tratar a **voz como dado pessoal sensível na LGPD** contorna o requisito de autoria humana que trava o direito autoral. E é também o limite: proteção de dados protege pessoa, e voz identifica pessoa; texto não. O mesmo produto terá aqui voz protegida e legenda desprotegida (`e1_29`, `e2_B38`, `e2_C42`, `e2_C43`).

**A lei chega a um objeto que já encolheu.** Os dois PLs alcançam a obra estrangeira EXIBIDA no Brasil — distribuição, licenciamento, contratação — e não alcançam o software que o espectador instala. Um overlay a R$ 15,75 em preço regional, com dublagem neural local e gratuita em 31 idiomas rodando em PC doméstico, fica inteiramente fora do escopo. A aritmética torna a decisão trivial para o estúdio estrangeiro: um script de 100 mil palavras custa cerca de US$ 7.000 em pt-BR contratado, e o substituto de prateleira custa R$ 15,75 pagos por outra pessoa. O cenário plausível para 2031 está escrito em três efeitos independentes — o Brasil com a obrigação de dublagem humana mais dura do mundo e, ao mesmo tempo, uma das maiores taxas de consumo de tradução e dublagem sintéticas não revisadas, legalmente intocadas porque acontecem do lado do espectador (`e2_C32`, `e1_24`, `e3_T2_15`). E o descompasso não é acidente de redação: o overlay estreou na Steam em 16/07/2026 e o Kindle Translate ganhou português em 30/06/2026, enquanto o PL 4041/2025 acumula dezoito meses em quatro comissões sem parecer (`e2_C41`).

**O piso, e o que vem depois dele.** O português do Brasil está no tier de valor da escala global — US$ 0,07–0,08 por palavra em tradução humana contra US$ 0,06–0,07 em pós-edição, um desconto de apenas ~15%. É exatamente onde a diferença de preço é mínima que o argumento comercial pela tradução humana desaparece: a compressão chega por baixo, onde não há margem, e o passo seguinte ao piso é a ausência (`e1_25`, `e2_A45`, `e2_B37`). Do lado do consumo, o mercado de games é cerca de dez vezes o faturamento da produção nacional — o efeito principal incide sobre o que **entra** em pt-BR, não sobre o que exportamos (`e1_26`, `e2_B41`). E o circuito se fecha com o Kindle Translate, que publica em 72 horas e cuja documentação é explícita: a edição direta do texto traduzido não está disponível. O texto que o leitor, o resenhista e o algoritmo da loja vão tomar como a obra é um texto que nem o autor pôde editar (`e2_C31`, `e3_T2_37`).

**A defesa é de canal, e canal cede.** O editorial brasileiro não está protegido pela tecnologia nem pela cultura: está protegido por editora, livraria e compra pública — e a apuração nacional mede exatamente o canal que a enxurrada não usa (~45 mil títulos, +2,4%, contra mais de 4 milhões e +32,5% nos EUA). Onde não há canal não há proteção: são 1.042 estúdios, 58% deles vendendo no exterior, publicando nas mesmas lojas globais. E a porta por onde a enxurrada já entrou aqui não é a produção, é a **triagem** — a Editora Kotter cancelou o concurso de 2025 por volume de inscrições geradas, e o formato que quebrou (submissão aberta, prêmio em dinheiro, leitura humana não escalável) não é periférico no Brasil: é a política pública de fomento (`e1_30`, `e2_B42`, `e2_B43`).

**E há uma barreira institucional que ninguém escreveu pensando nisso.** O sistema de legitimação exige fixidez por via ADMINISTRATIVA, não ideológica: o regulamento do 68º Jabuti barra a obra gerativa por exigir ISBN emitido no Brasil e ficha catalográfica assinada por bibliotecário credenciado — requisitos que pressupõem paginação e extensão — antes de barrá-la pela cláusula sobre IA; e na categoria Tradução pede o PDF 'da obra em idioma original', que uma obra publicada simultaneamente em seis línguas não tem. O debate público sobre se o prêmio deve aceitar IA é irrelevante para a admissibilidade (`e3_T2_02`, `e3_T2_36`). A IN FBN nº 1, de 18/06/2026, exige depósito legal digital em trinta dias em formato instalável, e vai receber cascas executáveis que não geram nada — registrando como preservado o que não está (`e3_T2_01`, `e3_T2_05`). E quando vier a acusação, o regulamento é explícito sobre a punição e mudo sobre quem identifica, com que método, em que prazo e se cabe recurso — enquanto a Europa já tem os artigos 20 e 21 do DSA com órgão extrajudicial em operação e os EUA já produziram decisão fixando padrão probatório. Nenhuma instituição literária brasileira tem orçamento para um mês de apuração por caso: a consequência provável não é comprar perícia, é decidir por indício (`e3_T2_34`, `e3_T2_31`, `e3_T2_32`, `e3_T2_10`).

**Três coisas a favor, ditas com a mesma precisão.** Primeira: o consumidor brasileiro não pune — 45,7% de preocupação com precarização contra apenas 15,4% de recusa de compra —, o que faz do **selo positivo** (crédito nominal de dublagem, tradução e revisão brasileiras) a política de proveniência que funciona aqui e não funciona no circuito anglófono, e que não depende de lei nenhuma passar; a infraestrutura para emiti-lo já existe e é a mesma que produziu a campanha (`e2_A35`, `e2_C16`, `e2_C44`). Segunda: o direito do consumidor brasileiro é mais forte que a política da Steam — o art. 49 do CDC dá sete dias irrenunciáveis e o art. 26, II dá noventa dias contados de quando o vício oculto se evidencia, o que em caso de declaração tardia de IA abre janela para toda a base instalada e não só para quem comprou naquela semana —, com a ressalva de que não há caso julgado e de que direito sem interface é direito com atrito (`e2_C11`, `e3_T2_21`, `e3_T2_22`). Terceira: a restrição cambial produz, por acidente, a decisão arquitetural correta — construir o próprio ledger de fatos em vez de assinar um verificador em dólar, e rodar o miolo da inferência local (`e3_T1_12`, `e3_T1_18`). E fica registrado o que não existe: nenhuma pesquisa nacional quantifica o impacto sobre tradutores e localizadores, e os dois PLs de dublagem estão sendo escritos sem base estatística sobre a classe que pretendem proteger (`e1_25`).

## O que me faria mudar de ideia

- ADOÇÃO ALÉM DA MAIORIA INICIAL, observável 1 — a série da Steam ultrapassar 50% dos lançamentos declarando IA NA CATEGORIA 'texto e diálogo' especificamente, medida por doze meses consecutivos sob o formulário de 16/01/2026 sem nova redefinição administrativa. Hoje são 30,8% em qualquer camada, sob o formulário antigo, que ainda contava ferramenta de desenvolvimento — o índice atual mede adoção e mudança de definição ao mesmo tempo (e1_02, e2_B01, sv2).
- ADOÇÃO ALÉM DA MAIORIA INICIAL, observável 2 — a virada aparecer na RECEITA e não no número de títulos. Os marcos concretos: narração por IA passar de 5% da receita de vendas de audiolivro nos EUA (hoje 0,03% de US$ 2,43 bilhões) ou a disposição declarada de experimentá-la voltar a subir depois de dois anos caindo, de 70% para 61%; e a fatia de jogos com IA declarada passar de 20% da receita da Steam (hoje ~US$ 660 milhões agregados, com 93% dos títulos abaixo de US$ 10 mil).
- NÃO ROMPE, SÓ MELHORA, observável 1 — nenhuma instituição precisar alterar um artigo de regulamento até 2029. Concretamente: o Prêmio Jabuti manter os itens 3.e e 3.f (ISBN nacional e ficha catalográfica assinada) sem criar categoria ou anexo para obra sem forma fixa; a IN FBN nº 1 de 18/06/2026 seguir exigindo depósito instalável em trinta dias sem exceção para obra que chama modelo remoto; e o campo MARC 041 continuar sem código para tradução de máquina.
- NÃO ROMPE, SÓ MELHORA, observável 2 — a coerência de arco longo virar propriedade do modelo. O marco é numérico e o benchmark já existe: sobrevivência acima de 90% em 100 turnos no NCP-Bench, sem andaime determinístico externo, em modelo de prateleira.
- A segunda medição independente do loop privado aparecer e desmentir a primeira: um corpus que não seja da OpenAI — Anthropic, Google, ou um painel de uso com consentimento — mostrando que geração de ficção é fração pequena, e não um terço, do uso conversacional. Dezenove efeitos descem de uma medição única e irreplicável, e o estudo que poderia corroborá-la (Chatterji et al., NBER w34255) não tem categoria de ficção isolável.
- O custo de inferência parar de cair. A escassez de memória de 2026 torna isso plausível e o efeito não seria uniforme: texto roda em modelo de propósito geral, inclusive local, e sobrevive; imagem, voz e vídeo são intensivos e não sobrevivem.
- Um único ato administrativo em qualquer das três instituições de medição de dono único: a Valve remover o campo de divulgação de IA da Steam; a Califórnia estender a CAITA a texto ou a Comissão Europeia retirar a isenção de 'conteúdo evidentemente ficcional' do Art. 50; ou a Amazon mudar o tamanho do fundo do KDP Select.
- Um tribunal brasileiro decidir, pelo CDC, um caso de vício de proveniência em jogo ou livro. Hoje todo o enquadramento da árvore é subsunção, não precedente, e a busca por decisão publicada foi negativa.

## Bibliografia essencial

Seleção das fontes que sustentam os efeitos citados acima. A lista completa (350 fontes, com marcação do que foi aberto por inteiro) está no mapa completo.

1. MangoBox — o caso mais puro da disrupção-raiz: uma frase vira novela visual jogável, com até cinco personagens, arte e diálogo, por US$ 9/mês, com o pitch explícito de dispensar o Ren'Py — `https://www.mangobox.ai/`
2. AIComicBuilder (Apache 2.0) — roteiro → vídeo animado num contêiner local, com folha de turnaround como âncora de identidade e encadeamento último-frame → primeiro-frame como memória entre planos — `https://github.com/twwch/AIComicBuilder`
3. LunaTranslator (GPLv3, 13,1k estrelas) — substitui o texto DENTRO do processo do jogo, por hook de memória ou OCR, e cobre emuladores de NS, PSP, PSV e PS2 — `https://github.com/HIllya51/LunaTranslator`
4. Steam — Game Overlay Translator: a tradução sobreposta virou SKU pago na maior loja de jogos do mundo em 16/07/2026, a R$ 15,75, 35 idiomas, 100% offline — `https://store.steampowered.com/app/4864520/Game_Overlay_Translator/`
5. OCR-Translator / tomkam1702 — dublagem neural em tempo real, 100% local, em 31 idiomas: o sinal fraco mais subestimado do lote (72 estrelas, 357 commits) — `https://github.com/tomkam1702/OCR-Translator`
6. NCP-Bench — 'Can LLM Agents Stick to the Script?': 42% de sobrevivência sem contradição em 20 turnos; 3,5% chegam a 100 turnos limpos — `https://arxiv.org/html/2608.08160`
7. ConStory-Bench — 'Lost in Stories' (Findings ACL 2026, Microsoft Research): o erro cresce linearmente com o comprimento e se concentra entre 40% e 60% do texto — `https://arxiv.org/html/2603.05890v1`
8. Hidden Door — resenha técnica: motor de CARTAS sobre biblioteca de tropos humanos; coerência 4/5 comprada ao custo de agência 1/5 — `https://arcanumrpgs.com/blog/hidden-door-review/`
9. Voyage (Latitude) — a empresa do AI Dungeon volta em 2026 com World Engine e a tese explícita de sair do 'único modelo' para sistemas determinísticos — `https://techcrunch.com/2026/04/21/voyage-is-an-ai-rpg-platform-for-creating-custom-gaming-worlds-with-ai-generated-npc-interactions/`
10. Padmakumar & He — 'Does Writing with Language Models Reduce Content Diversity?' (ICLR 2024): a homogeneização vem do modelo ALINHADO, não do modelo base — `https://arxiv.org/html/2309.05196v2`
11. Doshi & Hauser — 'Generative AI enhances individual creativity but reduces the collective diversity of novel content' (Science Advances, 2024): o ganho é maior entre os menos criativos — `https://arxiv.org/abs/2312.00506`
12. Anderson, Shah & Kreminski — 'Homogenization Effects of LLMs on Human Creative Ideation' (C&C 2024): mais ideias, menos distinção entre usuários, e MENOS senso de responsabilidade — `https://arxiv.org/abs/2402.01536`
13. Wenger & Kenett — 'Large language models are homogeneously creative' (PNAS Nexus, 2026): variabilidade populacional 0,459 contra 0,699; trocar de modelo não ajuda — `https://academic.oup.com/pnasnexus/article/5/3/pgag042/8529001`
14. Li, Bao & Evans — 'Narrative Flattening': a compressão da variação temática e estilística está no PÓS-TREINO, não no modelo base — `https://arxiv.org/pdf/2605.27878`
15. Rettberg & Wigers — 11.800 histórias para 236 nacionalidades: os símbolos nacionais mudam na superfície e a arquitetura narrativa é a mesma — `https://arxiv.org/abs/2507.22445`
16. Bhatt, Vijay, Milbauer & Diaz — 'Characterizing Cultural Localization in AI-Generated Stories': 9% a 17% do vocabulário responde por toda a variação entre 193 nacionalidades — `https://arxiv.org/abs/2606.14626`
17. Chakrabarty, Liu, Ginsburg & Dhillon — 'Generative AI floods and dilutes the market for books': 14.419 livros, 19,2× contra 8,9×, e a receita caindo para quem NÃO usou IA — `https://arxiv.org/abs/2607.20349`
18. Wang, Chung, Roemmele, Sun, Kreminski et al. — 'Elsewise': o objeto de autoria deixa de ser a sequência e passa a ser o ESPAÇO DE POSSIBILIDADES — `https://arxiv.org/abs/2601.15295`
19. Mirowski, Mathewson, Pittman & Evans — Dramatron (CHI 2023): 15 profissionais coescreveram roteiros inteiros e relataram BAIXO senso de propriedade — `https://arxiv.org/abs/2209.14958`
20. 'AI Fiction in the Wild' (Gupta, Antoniak, Walsh) — mais de um terço de 500 mil conversas do ChatGPT envolve ficção; nasce o 'solipsistic reader-writer' — `https://arxiv.org/abs/2606.22748`
21. intfiction.org — a thread criada para listar competições ABERTAS a IA: 26 respostas, zero competições. 'People enjoy generating games with LLMs a lot more than they enjoy playing LLM-generated games' — `https://intfiction.org/t/interactive-fiction-competitions-open-to-genai-entries-2026/77758`
22. IFComp 2026 Rule Update — a fronteira desenhada na SUPERFÍCIE, não no processo: todo conteúdo voltado ao jogador precisa ser humano — `https://intfiction.org/t/ifcomp-2026-rule-update/78851`
23. Spring Thing — 'How to make a rule that is enforceable and fair?': a proposta de divulgação PRIVADA aos organizadores, terceira via entre o selo que vira alvo e o silêncio que vira fraude — `https://intfiction.org/t/ai-rule-for-spring-thing-how-to-make-a-rule-that-is-enforceable-and-fair/75254`
24. O2A2 2026 (itch.io) — a proibição não é à geração: é à geração com dado de treino alheio. A porta escrita para quem tem acervo — `https://itch.io/jam/o2a2-2026`
25. Allcorrect — Game Text Localization Market 2025: US$ 246 milhões contra US$ 253 milhões em 2024, o primeiro segmento inteiro da cadeia com receita em queda — `https://allcorrectgames.com/insights/game-text-localization-market-2025-revenue-estimates-and-key-trends/`
26. RWS Holdings FY25 — receita £ 690,1 mi (−3,9%), lucro ajustado −43%, margem bruta −350 pontos-base, e a meta de tirar 40% da receita de produtos de IA até FY28 — `https://www.investing.com/news/company-news/rws-holdings-fy25-slides-reveal-ai-transformation-strategy-as-profits-decline-43-93CH-4402810`
27. Society of Authors (UK), AI Survey 2024 — 36% dos tradutores já perderam trabalho, 43% viram a renda cair, 77% esperam impacto negativo — `https://europeanwriterscouncil.eu/soa-survey-uk-ai-2024/`
28. Totally Human Media — 10.258 jogos com IA declarada na Steam, ~US$ 660 milhões agregados, e 9.556 deles abaixo de US$ 10 mil — `https://www.totallyhuman.io/blog/games-with-ai-disclosures-have-grossed-an-estimated-660m-on-steam`
29. Llama & Griffin — Steam Next Fest, junho de 2026: 26,5% das demos declaram IA; 'translation/localization' é categoria COMUM e 'writing/dialogue' é a mais rara — `https://www.llamagriffin.com/Data/SteamNextFestJune2026/part-2.html`
30. Deezer — mais de 50% dos uploads diários integralmente gerados (90 mil faixas/dia), 1% a 3% dos streams, até 85% deles fraudulentos — `https://newsroom-deezer.com/2026/07/ai-music-exceeds-50-percent-daily-uploads-deezer/`
31. Neil Clarke / Clarkesworld — 'The Future of Dealing with AI Submissions': as submissões de pico mais que dobraram, e adotar detecção pode ser a diferença entre continuar aberto ou fechar — `https://clarkesworldmagazine.com/clarke_08_25/`
32. Publishers Weekly / Bowker — mais de 4 milhões de títulos com ISBN nos EUA em 2025 (+32,5% em um ano); autopublicação +38,7% — `https://www.publishersweekly.com/pw/by-topic/industry-news/publisher-news/article/99943-book-output-topped-4-million-in-2025.html`
33. GDC 2026 State of the Game Industry — a rejeição vai de 18% (2024) a 52% (2026), e a 63% entre design e narrativa; a adoção é maior FORA do núcleo criativo — `https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/`
34. GDC 2025 — narrativa foi a disciplina MAIS atingida por demissões: 19%, contra 6% em negócios e finanças — `https://gdconf.com/article/gdc-2025-state-of-the-game-industry-devs-weigh-in-on-layoffs-ai-and-more/`
35. Steam Community + TechRadar — o incentivo invertido: quem declara é review-bombado (−53% de reviews) e quem esconde passa; Tim Sweeney pede o fim das tags — `https://www.techradar.com/ai-platforms-assistants/steam-requires-ai-game-disclosures-epics-ceo-says-theyre-meaningless`
36. US Copyright Office — 'Copyright and Artificial Intelligence, Part 2': prompt não basta, por mais detalhado, porque prompt é instrução e não expressão — `https://www.copyright.gov/ai/`
37. Thaler v. Perlmutter (D.C. Circuit, 18/03/2025) — autoria humana como requisito basilar; obra gerada autonomamente não é registrável — `https://www.skadden.com/insights/publications/2025/03/appellate-court-affirms-human-authorship`
38. Prass, Mügge & Bernasiuk — 'Autoria em tempos de inteligência artificial generativa' (Texto Digital/UFSC, 2023): a proposta brasileira de AUTORIA HÍBRIDA com divulgação obrigatória — `https://periodicos.ufsc.br/index.php/textodigital/article/view/96937`
39. Jesús Parets, em La Jornada — o desenho latino-americano: 'temos relação de propriedade sobre o conteúdo gerado, mas não direitos de autoria' — `https://clubdetraductoresliterariosdebaires.blogspot.com/2026/08/tenemos-una-relacion-de-propiedad-sobre.html`
40. Forensic readiness de marcas d'água em texto — a paráfrase que preserva o sentido remove a marca d'água; nenhuma passa nos critérios de admissibilidade forense — `https://arxiv.org/html/2607.16010v1`
41. Whitney A. Foster — o PDF anônimo que nomeou ~30 autoras do AO3 pela tag de CSS 'font-claude-response-body': a proveniência vazou por artefato de interface, não por política — `https://whitneyafoster.substack.com/p/ao3-ai-fanfiction-heated-rivalry-detection`
42. Detecção de texto gerado — 10% a 35% de falso positivo, e 61% dos textos de não-nativos de inglês marcados como IA — `https://fastcompanybrasil.com/ia/como-detectar-textos-escritos-por-ia/`
43. Plagiarism Today — o caso Jerry Falade: contrato de ~US$ 2 milhões retirado pelos próprios agentes por não conseguirem 'autenticar como o manuscrito evoluiu da origem à conclusão' — `https://www.plagiarismtoday.com/2026/08/05/author-loses-2-million-book-deal-over-ai-allegations/`
44. Commonwealth Short Story Prize — Jamir Nazir inocentado após revisão de um mês com rascunhos e timestamps; a Granta encerrou a parceria de dez anos assim mesmo — `https://brittlepaper.com/2026/06/commonwealth-short-story-prize-clears-regional-winners-of-ai-use-following-month-long-review/`
45. Authors Guild — 'Human Authored': o selo verifica identidade, não processo, e em maio de 2026 removeu brainstorming e outlining da definição de humano — `https://johannaliljegren.substack.com/p/congratulations-we-certified-that`
46. The Human Made Mark — a prova de humanidade é burocrática (call sheet, foto de set, lista de elenco), o que exclui justamente o criador solo que a tecnologia habilita — `https://www.animationforadults.com/2026/05/anti-ai-human-made-mark-verification.html`
47. Ted Chiang, no Center for Digital Humanities de Princeton — o modelo preenche as escolhas que o autor não fez, 'pela média das escolhas menos interessantes possíveis' — `https://cdh.princeton.edu/blog/ted-chiang/`
48. Chris Crawford — 'Why I am ending further work on interactive storytelling': a previsão desconfortável é que a IA vai ter SUCESSO nos gêneros formulaicos, e que o sucesso é a catástrofe — `https://www.erasmatazz.com/library/interactive-storytelling/why-i-am-ending-further.html`
49. Emily Short — a distinção que sustenta o campo: os sistemas geram SUPERFÍCIE, não ENREDO; o ganho vem de arquitetura híbrida, não de modelo maior — `https://emshort.blog/category/ai/`
50. Farrell, Gopnik, Shalizi & Evans — 'Large AI models are cultural and social technologies' (Science, 2025): a pergunta não é autoria, é que instituição isto é — `https://www.programmablemutter.com/p/large-ai-models-are-cultural-and`
51. Toonsutra — o contra-movimento: quadrinho global em hindi, tâmil e telugu, para um público que nenhuma localização manual atenderia — `https://ai.google.dev/showcase/toonsutra`
52. Juerong Qiu (JAT, 2025) — nenhum dos 18 espectadores distinguiu com segurança legenda de fansub de tradução automática crua; 39% perceberam a presença e continuaram assistindo — `https://jatjournal.org/index.php/jat/article/view/316`
53. Comics Beat — o caso 'Rugby Rumble': a reversão levou uma semana e foi disparada pelo LETTERING, não pelo sentido — `https://www.comicsbeat.com/dear-manga-publishers-we-dont-want-your-ai-translations/`
54. Alconost — a tabela que situa o PT-BR: US$ 0,07–0,08 por palavra em tradução humana e US$ 0,06–0,07 em pós-edição, o tier mais barato da escala global — `https://alconost.com/en/blog/localization-cost`
55. Câmara dos Deputados — PL 4041/2025: obriga contratação de profissionais e empresas nacionais em dublagem e trata a VOZ como dado sensível na LGPD, alterando três leis — `https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2547251`
56. Senado Federal — a sugestão legislativa nascida do movimento Dublagem Viva: 20 mil apoios em três semanas e tramitação na CDH — `https://www12.senado.leg.br/noticias/materias/2025/08/07/cdh-examina-sugestao-que-protege-dubladores-contra-a-concorrencia-com-a-ia`
57. Pesquisa Game Brasil 2026 (7.000+ respondentes) — 45,7% preocupados com a precarização criativa e apenas 15,4% recusariam comprar: a rejeição é discursiva, a aceitação é transacional — `https://www.omelete.com.br/games/pesquisa-game-brasil-2026-ia-jogos`
58. ARVORE — Fabula Rasa: um estúdio brasileiro premiado no SXSW já opera a narrativa que se compõe em tempo real, declarando a IA exclusivamente na camada de diálogo — `https://www.omelete.com.br/games/fabula-rasa-jogo-brasileiro-usa-ia-para-entregar-imersao-nos-dialogos`
59. Mouzinho & Vale (Pensares em Revista/UERJ, 2026) — a 'estadunização' da escrita em português medida em campo, com alunos de ensino médio em Belém — `https://www.e-publicacoes.uerj.br/pensaresemrevista/article/view/96225`
60. Silva, Brandão & Moro (UFMG) — 840 obras em português: os modelos perpetuam e às vezes AMPLIFICAM o desequilíbrio de gênero das narrativas geradas — `https://journals-sol.sbc.org.br/index.php/jbcs/article/view/5799`
61. CBL/SNEL, ano-base 2025 — o editorial brasileiro em R$ 4,5 bilhões (+3,3% real) e ~45 mil títulos: protegido pelo canal, não pela tecnologia — `https://cbl.org.br/2026/05/setor-editorial-avanca-em-2025-com-crescimento-nas-vendas-ao-mercado-e-fortalecimento-das-livrarias/`

