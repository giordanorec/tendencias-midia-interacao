---
titulo: "Captura de realidade e renderização neural"
tipo: resumo-de-tendencia
disciplina: "CIN0055 Tendências em Mídia e Interação 2026.2"
tema: "10 de 19"
familia: "Percepção e mídia sintética"
zona: "Percepção e mídia sintética"
skill: futurizacao-futures-wheel
autor: grec
horizonte: 2031
recorte: "global, com nota sobre o Brasil"
data: 2026-09-12
mapa_completo: "futures-wheel-captura-de-realidade-e-renderizacao-neural.md"
---

# Captura de realidade e renderização neural

**Rodada com teto de 15 subagentes, dos quais 14 foram usados.** A skill prevê um expansor por ramo;
aqui os ramos foram agrupados por tema, e cada um dos três expansores de 2ª ordem marcou os **cinco ramos
mais férteis do seu lote** — de modo que a 3ª ordem saiu apenas sobre esses **quinze ramos de 2ª ordem**,
conforme a decisão TMI-0028, reafirmada pela TMI-0050, ambas em vigor. A consequência, que a decisão manda
declarar em vez de esconder: dos 110 efeitos de 2ª ordem, **95 ficaram sem filhos** —
não por serem menos importantes, mas porque o orçamento foi concentrado onde rende profundidade em vez de
distribuído por igual. Fase 8, infográficos, pulada. O mapa completo —
192 efeitos (35 + 110 + 47), conexões cruzadas, wildcards e 293 fontes
(97 abertas por inteiro) — está em `futures-wheel-captura-de-realidade-e-renderizacao-neural.md` e no HTML de mesmo nome.

## A inovação

Uma foto vira objeto tridimensional; um vídeo de celular vira cena navegável; uma câmera comum registra o
movimento de um corpo sem marcador nenhum. O NeRF (2020) provou que uma rede podia guardar uma cena e
devolvê-la de qualquer ângulo; o **3D Gaussian Splatting** (2023) trocou a rede por milhões de elipsoides
rasterizáveis e levou aquilo para tempo real; e entre 2025 e 2026 a geometria passou a ser **predição**: o
VGGT, melhor artigo do CVPR 2025, infere câmera, profundidade e nuvem densa numa passada só, em menos de um
segundo, sem *bundle adjustment*; o Depth Pro devolve profundidade **métrica** sem conhecer os intrínsecos da
câmera; e o SHARP, da Apple, reconstrói uma cena gaussiana inteira a partir de **uma única fotografia**.
Calibração, cobertura disciplinada e presença física deixaram de ser pré-requisito. Em 2026 isso entrou no
pipeline de produção: a extensão `KHR_gaussian_splatting` foi ratificada em 03/02, o OpenUSD v26.03 ganhou
esquema nativo de splat, o RealityKit passou a renderizar splat no visionOS 27 e o RealityScan ficou gratuito
para quem fatura menos de US$ 1 milhão por ano.

**A leitura corrente do tema, porém, não sobrevive à evidência, e esta rodada a recusa.** O enunciado anuncia
que o pipeline de criação 3D colapsa em captura. Não colapsa: o ativo capturado não tem BRDF, não tem
*render passes*, não tem topologia editável, e a luz fica assada nos harmônicos esféricos — três fontes
independentes de praticantes repetem a mesma frase, *não substitui, estende*. O pipeline de XR medido no
Brasil (SPL4SH, JBCS 2026, do Voxar Labs do CIn-UFPE com USP e HP) **ainda não usa splatting**. As vagas do
campo estão em platô — 253 em 2024, 252 em 2025 — enquanto a pesquisa explode, com 3.333 artigos indexados.
E o capital abandonou a captura pela **geração**: a Luma AI, que nasceu de NeRF em celular, levantou US$ 900
milhões em 19/11/2025 num comunicado que não menciona NeRF, splatting nem captura 3D; o setor de splatting
inteiro soma cerca de US$ 480 milhões em treze startups dedicadas.

O que de fato colapsou foi o **custo de originação**. A captura deixou de ser um projeto e virou **um formato
de arquivo** — e é essa a ruptura que passa nos testes de maturidade da disciplina.

## A tese

Até 2031 a captura neural não substitui a produção de 3D — ela abre uma segunda via de originação quase gratuita cujo produto entra no mundo SEM ESTATUTO: não é medida (o treino não é determinístico e duas capturas do mesmo lugar não têm a mesma geometria), não é prova (editar preservando consistência multivista é problema publicado e resolvido), não é propriedade definida (a liberdade de panorama fala de pintura, desenho, fotografia e audiovisual, não de reconstrução navegável) e não é dado pessoal com regime próprio (nenhum ato de autoridade sobre reconstrução tridimensional até 2026) — de modo que o trabalho decisivo do período não é melhorar a cena capturada, é atribuir-lhe estatuto, e essa atribuição está sendo feita por termo de uso, contrato de adesão e norma técnica de outro setor, não por quem projeta mídia. A tese é falseada se, até 2031, o ativo capturado passar a chegar ao projeto com material separável, escala verificável, semântica e proveniência determinística por padrão — ou se as vagas específicas do campo saírem do platô de cerca de 250 por ano e a absorção econômica passar a acompanhar a curva de pesquisa.

## Os 35 efeitos de 1ª ordem

| id | Efeito | STEEP | Prob. | Prazo |
|---|---|---|---|---|
| `e1_01` | O emprego que desaparece primeiro não é o do artista 3D, é o da camada técnica intermediária da captura: o operador de volume de mocap, o… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_02` | A entrega do fotógrafo de espaço deixa de ser um conjunto de imagens e passa a ser um espaço navegável — e o preço dessa entrega cai para a… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_03` | Aparece um ofício novo que não existia: limpar, segmentar e curar a cena capturada — separar primeiro plano de fundo, nomear o que está… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_04` | A defesa profissional que o ofício 3D está formulando agora — 'você não pode fotografar algo que ainda não foi feito' — perde validade… *(óbvio)* | Econômico | alta | 2028-2031 |
| `e1_05` | No Brasil, a técnica vira diferencial de preço no mercado de serviço local antes de existir qualquer norma técnica — e chega vendida com… | Econômico | alta | até 2028 |
| `e1_06` | A licença, e não a capacidade técnica, passa a ser a variável que decide o que entra em produto: a infraestrutura de captura é aberta e… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_07` | Há uma patente concedida sobre exatamente a técnica que os formatos abertos de splat usam na prática — agrupar primitivas em planos e… | Econômico | média | 2028-2031 |
| `e1_08` | A captura deixa de ser um produto e vira insumo de treino de modelos generativos de mundo: o capital de grande porte financia quem GERA o… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_09` | O splat deixa de ser saída de pesquisa e vira um tipo de mídia com suporte nativo em formato de entrega, em pipeline de produção e em… *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_10` | O vídeo volumétrico fica sem chão por falta de codec temporal padronizado: o ativo estático foi padronizado e entregue, o ativo com tempo… | Tecnológico | alta | 2028-2031 |
| `e1_11` | A conta física passa a determinar o que é entregável, e escolher a taxa de compressão vira decisão estética, não de engenharia: a cena crua… *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_12` | O ativo capturado chega ao projeto sem causalidade: não tem colisor, não tem navmesh, não tem luz separável, não tem objeto nomeado *(óbvio)* | Tecnológico | alta | 2028-2031 |
| `e1_13` | A ordenação de primitivas por profundidade, que é o gargalo real do splatting, começa a virar bloco de silício dedicado em celular, óculos… | Tecnológico | média | 2028-2031 |
| `e1_14` | Guardar só a geometria deixa de ser uma forma de anonimizar: uma nuvem de pontos pode ser invertida em imagens coloridas e em passeios… *(óbvio)* | Social | alta | até 2028 |
| `e1_15` | O tour tridimensional lê o que a fotografia não lia: como o espectador escolhe o ângulo e o zoom, dado pessoal que ninguém decidiu publicar… *(óbvio)* | Social | alta | até 2028 |
| `e1_16` | Borrar rostos deixa de anonimizar captura de pessoas: a mesma pilha técnica que extrai um corpo de vídeo comum para animá-lo extrai… | Social | alta | até 2028 |
| `e1_17` | Quem escaneia um ambiente escaneia também quem trabalha, visita ou compra ali — e essa pessoa não participou da decisão *(óbvio)* | Social | alta | até 2028 |
| `e1_18` | O direito à exclusão torna-se tecnicamente inexequível sobre uma cena capturada: apagar uma pessoa de um campo de milhões de gaussianas… | Político | alta | 2028-2031 |
| `e1_19` | A captura volumétrica entra na vida doméstica pela porta da saúde e do seguro — não pela do entretenimento: o próprio paciente mede a… | Social | média | 2028-2031 |
| `e1_20` | Nasce a anti-captura: técnicas para recusar ser reconstruído aparecem antes de existir o direito de recusar — padrões adversariais que… | Tecnológico | baixa | 2028-2031 |
| `e1_21` | A cena capturada entra no processo judicial antes de existir padrão jurídico para ela: o laudo pericial vira objeto navegável, entregue por… *(óbvio)* | Político | alta | até 2028 |
| `e1_22` | O valor probatório da cena capturada se parte por escala: ela mede o espaço bem o bastante para entrar no processo e apaga o vestígio miúdo… | Político | alta | até 2028 |
| `e1_23` | A defensibilidade do splat como registro é frágil por dois motivos publicados: editar a cena preservando consistência multivista é problema… | Político | alta | 2028-2031 |
| `e1_24` | A proveniência deixa de ser recurso opcional e vira requisito do ato de capturar: credencial criptográfica atrelada ao sensor, marcação de… | Tecnológico | média | 2028-2031 |
| `e1_25` | Escanear com app de consumo vira, sem que o usuário saiba, um ato de extração: a varredura doméstica feita dentro de um jogo alimenta um… | Político | alta | até 2028 |
| `e1_26` | Quem captura pode não ficar com o que capturou: o modelo de negócio fechado separa a VISTA do ARQUIVO — o usuário varre a própria casa, o… *(óbvio)* | Econômico | alta | 2028-2031 |
| `e1_27` | A liberdade de panorama não cobre reconstrução tridimensional navegável, e a proteção do que está exposto migra do direito autoral para o… | Político | média | 2028-2031 |
| `e1_28` | A captura comercial de assentamento habitado acontece sem nenhuma moldura de consentimento e sob justificativa humanitária difícil de… | Social | média | 2028-2031 |
| `e1_29` | A captura neural não converge para o fotorrealismo: ela produziu um vocabulário visual próprio — sombras translúcidas, borda em halo,… | Social | alta | até 2028 |
| `e1_30` | E porque 'parecer capturado' virou gramática de veracidade, ela também vira a melhor técnica de falsificação disponível: no domínio exato… *(óbvio)* | Social | alta | 2028-2031 |
| `e1_31` | Não existe critério confiável de 'boa o bastante' para cena capturada: as métricas que toda a literatura reporta não predizem o julgamento… | Tecnológico | alta | até 2028 |
| `e1_32` | A cena capturada tem buracos previsíveis e permanentes — vidro, água, metal polido, espelho, vitrine — e a técnica é boa em matéria… *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_33` | Não digitalizar acervo deixa de ser limitação orçamentária e passa a ser decisão institucional — e será lida retrospectivamente como… *(óbvio)* | Social | alta | até 2028 |
| `e1_34` | A captura vira ato civil de testemunho feito por não especialistas contra o relógio: em zona de guerra e de desastre, o splat passa a ser a… | Social | média | 2028-2031 |
| `e1_35` | O luto volumétrico entra pela porta clínica, não pela funerária: avatares póstumos são propostos como recurso terapêutico com supervisão, e… | Social | baixa | 2031-2036 |

Oito rótulos organizam a leitura, e foi por eles que os lotes de expansão foram formados. **O ofício e a economia do ativo** (`e1_01` a `e1_08`): o emprego que desaparece primeiro não é o do artista 3D e sim o da camada técnica intermediária — operador de volume, técnico de calibração, aluguel de estúdio —; a entrega do fotógrafo de espaço deixa de ser um conjunto de imagens e passa a ser um espaço navegável, com o preço caindo para a mesma faixa; nasce um ofício de limpar, segmentar e curar a cena capturada; a defesa profissional corrente — *você não pode fotografar o que ainda não foi feito* — perde validade dentro do horizonte; e a **licença**, não a capacidade técnica, passa a decidir o que entra em produto, porque a infraestrutura é aberta e permissiva na base e restritiva no topo da qualidade. **O formato e a conta física** (`e1_09` a `e1_13`): o splat vira tipo de mídia com suporte nativo; o vídeo volumétrico fica sem chão por falta de codec temporal padronizado; a conta física passa a determinar o entregável, e escolher taxa de compressão vira decisão estética; o ativo chega **sem causalidade** — sem colisor, sem navmesh, sem luz separável, sem objeto nomeado; e a ordenação por profundidade começa a virar bloco de silício. **A privacidade de espaço e de corpo** (`e1_14` a `e1_20`): as duas defesas herdadas caem juntas, porque guardar só geometria não anonimiza (a nuvem se inverte em imagem) e borrar rosto não anonimiza (a marcha identifica); quem escaneia um ambiente escaneia também quem trabalha, visita ou compra ali, sem que essa pessoa participe da decisão; o direito à exclusão fica inexequível sobre um campo otimizado; e a **anti-captura** nasce antes de existir o direito de recusar. **A prova e a proveniência** (`e1_21` a `e1_24`): a cena entra no processo judicial antes de haver padrão jurídico para ela, e seu valor probatório se parte por escala — mede a sala dentro da tolerância pericial e apaga o vestígio miúdo, que é onde a prova decide. **A propriedade do mundo capturado** (`e1_25` a `e1_28`): escanear com app de consumo vira ato de extração; quem captura pode não ficar com o que capturou, porque o modelo fechado separa a vista do arquivo; e a liberdade de panorama, escrita para representação, não cobre reconstrução navegável. **A estética e a verdade visual** (`e1_29` a `e1_32`): a captura neural **não** converge para o fotorrealismo — produziu vocabulário próprio —, mas como *parecer capturado* virou gramática de veracidade, ela também vira a melhor técnica de falsificação disponível; e não existe critério confiável de *boa o bastante*, porque as métricas que a literatura reporta não predizem julgamento humano. **A memória e o luto** (`e1_33` a `e1_35`): não digitalizar acervo deixa de ser limitação orçamentária e passa a ser decisão institucional; a captura vira ato civil de testemunho contra o relógio; e o luto volumétrico entra pela porta clínica, não pela funerária.

## Os 5 mais impactantes

*O porquê aparece aqui abreviado; o texto integral e a cadeia de efeitos estão no mapa completo.*

1. **`e1_12` — O ativo capturado chega sem causalidade: o mundo capturado é um mundo em que nada pode acontecer.** É o efeito que define o trabalho do período para quem projeta mídia e interação, e o único da árvore cuja queda derrubaria a leitura inteira. Sem colisor, sem navmesh, sem luz separável e sem objeto nomeado, o ativo é aparência sem consequência — e daí descem, em cadeia, o pedágio da semântica atrás de API paga (e2_C38), a inacessibilidade estrutural para tecnologia assistiva (e2_C39), o ativo híbrido como padrão de projeto (e2_C37), a dessincronização entre camadas como risco físico em realidade mista (e3_T2_17) e a revogação que só apaga a aparência (e3_T2_18).

2. **`e1_18` — O direito à exclusão torna-se tecnicamente inexequível sobre uma cena capturada.** Apagar uma pessoa de um campo de milhões de gaussianas otimizadas não é deletar um arquivo, e a remoção disponível é uma EDIÇÃO que altera a cena sem deixar prova de que foi feita. Esse único fato reorganiza toda a resposta institucional: a conformidade se desloca de apagar para provar que apagou (e2_A13), o acervo passa a existir em duas versões, a íntegra e a conforme (e2_A14), e a consequência final inverte o propósito do direito — para poder provar a exclusão é preciso GUARDAR o que se excluiu, de modo que o apagamento aumenta o volume retido sobre o titular (e3_T1_04).

3. **`e1_23` — A defensibilidade do splat como registro é frágil por dois motivos publicados: editar é resolvido e o treino não é determinístico.** É o nó de maior fan-out da árvore: dezesseis efeitos dependem dele, incluindo quase todo o ramo de prova, perícia e proveniência, e é ele que destrói o produto que o mercado acredita estar comprando — a comparação no tempo. Dele descem o vestígio recuando para a entrada e a prova virando questão de armazenamento (e3_T1_14), a barreira antialegação já vencida antes de existir (e2_B08), o dividendo do mentiroso espacial (e2_B18) e o rebaixamento do objeto mais persuasivo do processo a peça meramente demonstrativa (e3_T1_15).

4. **`e2_C27` — Sobra para a captura apenas o insubstituível: este lugar, este objeto, esta pessoa, neste estado, nesta data.** É a lei econômica do período, e ela decide o que a captura vai ser como negócio e como acervo. A captura genérica — uma sala de estar, uma rua movimentada, um corpo andando — é extinta pela geração, que a produz mais barato e sem problema de direito; o que resta é a singularidade datada.

5. **`e3_T2_15` — O que não tem dono interessado não é capturado: o comum atravessa o período sem registro.** É a consequência cultural de maior alcance e a mais irreversível, porque o que não foi capturado no período não pode ser capturado depois. Como só o insubstituível paga, e a insubstituibilidade quase sempre é reconhecida DEPOIS da perda, a rua qualquer, a casa qualquer, o comércio de bairro e a reserva técnica sem exposição ficam fora da memória tridimensional — e o viés se soma ao da física do sensor (e2_B25: o que o mundo vai lembrar de si em três dimensões será feito de matéria orgânica e interior desarrumado) e ao da renda (e3_T1_07: o corpus dos modelos de mundo ganha geografia de renda).

**O padrão por trás dos cinco.** Nenhum deles é sobre a cena capturada ficar mais bonita ou mais exata — todos são sobre **o que essa cena é**, juridicamente e operacionalmente, e sobre **quem decide isso**. Um ativo que chega sem material separável, sem escala verificável, sem semântica e sem proveniência determinística não está à espera de uma versão melhor: está à espera de um **estatuto**. E o estatuto não está sendo escrito por marco legal de inteligência artificial nem por quem projeta mídia. Está sendo escrito em instrumentos que existiam antes e alcançam este objeto de lado: o **termo de uso** da plataforma de captura, que licencia o acervo do cliente para treinar modelo em caráter perpétuo e sublicenciável (`e2_A25`, `e3_T1_07`); a **norma técnica de topografia**, que manda propagar precisão independentemente do método e joga a régua para o erro máximo da norma vizinha (`e2_C15`, `e3_T1_25`); a **cadeia de custódia do processo penal**, escrita para vestígio lacrável e que não tem lacre para arquivo 3D (`e2_B02`, `e3_T1_14`); a **licença cruzada de consórcio**, que protege membro e adotante e deixa exposto quem apenas implementou o formato aberto (`e2_C21`, `e3_T2_10`); e o **contrato de seguro**, que desce o limiar de cobertura para a qualidade do aplicativo de quem sofreu o sinistro (`e2_A16`, `e3_T2_01`). É por isso que a cascata **se juridifica e se monetiza com a profundidade** — o eixo Político vai de 17% na 1ª ordem a 30% na 2ª e 36% na 3ª, e o Econômico de 26% a 32%, enquanto o Tecnológico desce de 26% para 11%: quanto mais longe da inovação, menos o efeito é uma capacidade e mais ele é uma **regra ou um preço**. Para quem projeta mídia e interação a consequência é imediata: as decisões que vão definir o que se pode fazer com captura até 2031 estão sendo tomadas agora, em documentos que ninguém da área está lendo — e a janela em que elas ainda são discutíveis é curta, porque o que se decide por acervo capturado é irreversível, e o que se decide por escrito ainda não foi assinado.

## Wildcards

12 cenários de baixa probabilidade e alto impacto — 3 de oportunidade, 6 de risco, 3 ambíguos. O achado do conjunto é que **nenhum deles se decide por qualidade de reconstrução**: decidem-se num escritório de patentes, numa janela de material de teste de codec, numa frase de edital, numa definição de escopo de biometria, numa linha de produção de chip e numa cláusula de contrato de sensor. E a assimetria importa — os três cenários positivos não dependem de nenhum avanço técnico, apenas de uma decisão de escopo de regulador, juiz ou comprador público, e se decidem por escrito e em prazo curto; os negativos se decidem por acervo, e são irreversíveis.

- **w1 · A luz desassa e leva a assinatura junto** (ambíguo). Entre 2027 e 2029 a separação entre material e iluminação deixa de ser tema de artigo e vira caixa marcada por padrão no compositor, no motor e no visualizador de celular.
- **w2 · A alfândega decide o formato** (negativo). O titular da patente concedida sobre agrupar primitivas em planos e codificar seus atributos como textura deixa de tolerar o uso e parte para a execução — não contra o padrão ratificado, mas contra aparelho.
- **w3 · A ANPD chega primeiro, e a régua vira brasileira** (positivo). A regulamentação de dados biométricos que a ANPD vinha costurando sai com uma definição ampla: é biométrico o dado com potencial de identificação, não apenas o que identifica de modo inequívoco.
- **w4 · O acervo antigo vira índice pesquisável de interiores** (negativo). Um conjunto de acervos de captura doméstica acumulados entre 2020 e 2028 — tour imobiliário, vistoria de sinistro, varredura feita dentro de um jogo — é agregado e publicado com busca por similaridade geométrica.
- **w5 · A varredura de consumo aparece na operação letal** (negativo). Um documento juntado a processo revela que o modelo de navegação sem GPS usado numa incursão urbana com mortes no Brasil tem linhagem que passa por varredura feita por civis dentro de um aplicativo de consumo.
- **w6 · A cena editada que condena, e o desconto que vem depois** (negativo). Um splat de local de crime, do qual um objeto foi removido com consistência multivista perfeita, é aceito como prova e sustenta uma condenação.
- **w7 · O codec do tempo nasce fora da mídia** (ambíguo). O prazo de submissão de material dinâmico para o comitê de codec passa sem que a indústria de mídia tenha entregue conteúdo suficiente, porque ninguém tinha vídeo volumétrico em produção para doar.
- **w8 · O contracadastro ganha fé pública** (positivo). Uma decisão de efeito amplo — administrativa ou judicial — reconhece geometria capturada por coletivo de moradores como prova hábil de edificação e de posse em regularização fundiária, desde que amarrada a referencial geodésico verificável.
- **w9 · A semântica vira bem público pela porta da acessibilidade** (positivo). A exigência de acessibilidade em ambiente imersivo — puxada pelo comércio na Europa e pela compra pública no Brasil — consolida-se numa forma inesperada: a camada de descrição semântica exigida por lei precisa ser publicada junto com a….
- **w10 · O gerado bate no muro e o capital volta para o real** (ambíguo). Os modelos de mundo param de melhorar.
- **w11 · Recusar ser reconstruído vira infração** (negativo). Um acidente com veículo autônomo é atribuído à degradação do mapa provocada por revestimento adversarial na fachada de um prédio.
- **w12 · O silício some e a captura volta a ser cara** (negativo). Uma ruptura de fornecimento — contingência geopolítica no fornecimento de semicondutor avançado, embargo de componente óptico ou colapso de um único fornecedor de sensor de profundidade — retira o bloco de aceleração de ordenação por….

O que os 12 revelam em conjunto está em `json/wildcards.json` e na nota completa.

## Nota Brasil

Lidos em conjunto, os efeitos com recorte brasileiro não descrevem um país atrasado na técnica. Descrevem um país onde **o ativo capturado chega antes da instituição que lhe daria estatuto**, e onde os instrumentos que vão decidi-lo foram escritos para outro objeto. A **NBR 13133** exige propagar a precisão independentemente do método adotado e remete os parâmetros a normas específicas que não existem para captura neural: a régua que vai valer é a que está escrita ao lado, e a primeira norma brasileira para cena capturada nasce por litígio, não por comitê (`e2_C15`, `e3_T1_25`). Os artigos 158-A a 158-F do **Código de Processo Penal** pressupõem vestígio finito, lacrável e hasheável, guardado em central desenhada para caixa e envelope — e o splat é vestígio sem lacre (`e2_B02`). A **LGPD** dá direito à exclusão sobre um campo otimizado do qual não se apaga ninguém sem editar o registro (`e1_18`, `e3_T1_04`), e deixa o falecido fora do art. 5º, V, justamente quando o avatar póstumo entra pela porta clínica (`e2_B33`). E a **ANPD não publicou, até março de 2026, nenhum ato sobre reconstrução tridimensional** de rosto, corpo ou ambiente habitado — uma ausência conjuntural, não estrutural, de que dependem 19 efeitos da árvore.

O que já existe aqui, e é concreto, está em três frentes. A **perícia**: a Polícia Federal documenta cena com Leica RTC360 e BLK2GO, e no Rio 28 cenas de homicídio entre março de 2025 e junho de 2026 foram capturadas com drone, câmera 360 e óculos Ray-Ban Meta na cabeça do perito, entregues por QR Code impresso no laudo, sem que admissibilidade ou privacidade tenham sido tratadas. A **pesquisa**: IMPA/VISGRAF e Voxar Labs do CIn-UFPE publicam no SIBGRAPI, com profundidade monocular sobre 2DGS melhorando a geometria em cerca de 10% e separação figura-fundo que torna o splat editável. E o **território**: a Rocinha foi escaneada por dois lados sem moldura de consentimento — pelo Favelas 4D, do MIT com a BRtech3D, e por empresa que vende a captura comercialmente —, e o mercado de geometria já é oferecido a prefeituras prometendo encontrar de 20% a 35% de área construída não declarada no primeiro ano, com jurisprudência pronta: o TJDFT já declarou legal aumentar área construída por aerofotogrametria (`e3_T1_10`, `e2_A31`). Nenhuma startup nacional com splatting em produção apareceu no levantamento — registrado como ausência do levantamento, não como inexistência.

## O que me faria mudar de ideia

A rodada declarou de antemão dois critérios de refutação: evidência de que a adoção já passou da maioria inicial de Rogers, e evidência de que a tecnologia não rompe nada — só melhora o que já existe. O segundo **foi parcialmente acionado durante a análise**, e é por isso que a raiz saiu confirmada com ressalva em vez de confirmada. O que observar daqui para frente:

- CRITÉRIO DE REFUTAÇÃO DECLARADO NO CONTRATO 1 — a adoção já ter passado da maioria inicial de Rogers. Observar: as vagas específicas de radiance fields saírem do platô medido (253 em 2024, 252 em 2025) e dobrarem em 2027-2028; suporte de PRIMEIRA PARTE a splatting na Unreal ou na Unity, em lugar de plugin de terceiro; e um número público de adoção, que hoje não existe para nenhum app de captura (nem Scaniverse, nem Polycam, nem quantidade de imóveis com tour gaussiano). Se as três acontecerem, o tema sai da régua de maturidade da disciplina e este mapa passa a descrever um mercado consolidado, não uma tecnologia antes da consolidação.
- CRITÉRIO DE REFUTAÇÃO DECLARADO NO CONTRATO 2 — a tecnologia não romper nada, só melhorar o que existe. Observar: um ativo capturado que chegue ao projeto com material separável, topologia utilizável, escala verificável e semântica nomeada, sem passar por malha e sem etapa humana de curadoria. Se isso aparecer em produto, o efeito-raiz e1_12 ('o mundo capturado é um mundo em que nada pode acontecer') cai, e com ele a fila de estatuto: a captura passa a ser uma melhoria de eficiência da fotogrametria, e a leitura correta do tema deixa de ser esta.
- O determinismo virar padrão. Semente fixa, kernels determinísticos e pacote reprodutível declarado como entregável resolvem o problema dentro do horizonte, e existe incentivo comercial para resolvê-lo (o mercado de comparação temporal é o mais valioso). Se cair, caem dezesseis efeitos — e o sinal político da árvore INVERTE: reprodutibilidade protege a prova e fortalece igualmente a vigilância, porque vistoria comparável, cadastro auditável e série de sinistro passam a valer o que o mercado já acha que valem.
- A reiluminação virar padrão de produto até 2028. Já começou (Nuke 17.1v1, ago/2026). Observar se sai da finalização de VFX e entra no motor de jogo e na ferramenta de autoria: se entrar, o splat passa a asset herói em vez de referência e ambiente, a versão forte do enunciado original volta a valer, e o ramo de estética expira. O que NÃO cai com ela: reflexão especular, refração e transporte secundário — logo o viés de material sobrevive.
- A patente US12380632B1 ser invalidada, não ser asserida, expirar ou nunca ter sido depositada no Brasil (o levantamento não encontrou depósito brasileiro). Seis dos oito efeitos do agrupamento desabam, a compressão se normaliza e o arquivo leve deixa de ser privilégio de quem tem cobertura contratual. O risco simétrico é o oposto: asserida, ela transforma escolha de formato em escolha de mercado-alvo.
- A autoridade brasileira de proteção de dados publicar ato sobre reconstrução tridimensional de rosto, corpo ou ambiente. É o fator do qual mais efeitos dependem (dezenove) e o mais fácil de reverter — biometria já é prioridade de agenda, com tomada de subsídios concluída. Se sair, a sequência brasileira inteira muda de ordem: o direito de recusar deixa de nascer por convenção coletiva e por regra da casa.
- O MPEG fechar codec temporal para splatting dinâmico (a chamada por material de teste vencia em 15/10/2026). É o que decide se o vídeo volumétrico ganha chão ou se a linguagem do período fica sendo cenário capturado com gente convencional por cima. Observar também QUEM submeteu material de teste: quem estiver nos conjuntos de teste define o que conta como cena boa o bastante.
- Aparecer medida — qualquer medida — de custo energético e de armazenamento da captura neural em escala. Hoje não existe nenhuma, e é por isso que a categoria Ecological desta árvore é zero. Um único estudo com watt por cena treinada, GPU-hora por metro quadrado ou pegada de retenção de acervo abriria um ramo inteiro que este mapa não pôde escrever.
- Aparecer métrica perceptual validada para cena capturada, substituindo PSNR, SSIM e LPIPS, que medem correlação abaixo de 0,45 com julgamento humano. Quatro efeitos vivem dessa ausência, e a régua nasce hoje dentro do comitê de codec, não na academia nem no mercado.
- Um caso judicial de peso invalidar laudo baseado em splat por editabilidade multivista ou por não determinismo — ou, ao contrário, um tribunal aceitá-lo expressamente como prova autônoma. O ramo de prova e perícia inverte de sinal em qualquer das duas direções, e no Brasil isso se decide por litígio, porque a norma técnica não vai chegar antes.
- Um experimento controlado medir se as pessoas distinguem cena CAPTURADA de cena MODELADA em ambiente navegável. É a lacuna mais barata de preencher que este mapa encontrou, e ela sustenta ou derruba o ramo inteiro de estética e verdade visual — inclusive a afirmação de que 'parecer capturado' virou gramática de veracidade.

## Bibliografia essencial

As fontes que sustentam as afirmações centrais deste resumo, todas abertas por inteiro. A lista completa — 293 fontes, 97 marcadas como abertas pela própria frente que as leu — está na nota Obsidian e em `json/bibliografia.json`.

1. Khronos Group — ratificação da extensão glTF para Gaussian Splatting (03/02/2026) — `https://www.khronos.org/news/press/gltf-gaussian-splatting-press-release`
2. Alliance for OpenUSD — OpenUSD v26.03, com esquema nativo de splat — `https://aousd.org/blog/openusd-v26-03/`
3. Apple Machine Learning Research — SHARP: cena gaussiana a partir de uma única imagem — `https://machinelearning.apple.com/research/sharp-monocular-view`
4. Bernhard Kerbl — The Impact and Outlook of 3D Gaussian Splatting (TU Wien, arXiv:2510.26694) — `https://arxiv.org/html/2510.26694`
5. Perceptual Quality Assessment of 3D Gaussian Splatting — 3DGS-QA (arXiv:2511.08032): PSNR e SSIM não predizem julgamento humano — `https://arxiv.org/html/2511.08032`
6. Högemann, Betke e Thomas — What you see is not what you get anymore (Frontiers in AI): 63,7% de acerto em real × gerado — `https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2025.1707336/full`
7. Cho e Woo — Accuracy of 3D Gaussian Splatting for virtual crime scene reconstruction (Frontiers in Computer Science, 2026) — `https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2026.1755361/full`
8. Compression in 3D Gaussian Splatting: a survey (arXiv:2502.19457) — a conta física do ativo — `https://arxiv.org/html/2502.19457v1`
9. Radiance Fields — Gaussian Splatting Statistics (2026): 3.333 artigos, vagas em platô, US$ 480 mi em treze startups — `https://radiancefields.com/gaussian-splatting-statistics`
10. PR Newswire — Luma AI levanta US$ 900 milhões (19/11/2025), sem mencionar captura — `https://www.prnewswire.com/news-releases/luma-ai-raises-900-million-series-c-led-by-humain-and-partners-on-2-gigawatt-ai-supercluster-in-saudi-arabia-302620697.html`
11. Niantic Spatial — Mapping the World For Machines with Scaniverse — `https://www.nianticspatial.com/en/blog/scaniverse`
12. State of Surveillance — a cadeia Pokémon GO → Niantic Spatial → Vantor → agência de inteligência geoespacial — `https://stateofsurveillance.org/news/pokemon-go-niantic-vantor-military-drone-navigation-2026/`
13. Google Patents — US12380632B1 (Miris Inc.): codificar atributos de splat em texturas — `https://patents.google.com/patent/US12380632B1/en`
14. PlayCanvas — SOG, o formato aberto de compressão (1 GB para 42 MB) — `https://blog.playcanvas.com/playcanvas-open-sources-sog-format-for-gaussian-splatting`
15. Hito Steyerl — Ripping Reality: Blind Spots and Wrecked Data in 3D — `http://eipcp.net/e/projects/heterolingual/files/hitosteyerl/`
16. Jamil e Brennan — Immersive heritage through Gaussian Splatting: a new visual aesthetic (Frontiers, 2025) — `https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2025.1515609/full`
17. CG Lounge — Gaussian Splatting for VFX: The Honest Guide (o limite arquitetural: sem BRDF, sem render passes) — `https://cglounge.studio/journal/gaussian-splatting-for-vfx`
18. Couldry e Mejias — How to Resist Data Colonialism? (Institute of Network Cultures) — `https://networkcultures.org/blog/2022/12/13/how-to-resist-against-data-colonialism-interview-with-nick-couldry-ulises-mejias/`
19. PatchPoison — Poisoning Multi-View Datasets to Degrade 3D Reconstruction (arXiv:2604.13153) — `https://arxiv.org/abs/2604.13153`
20. Perazzo, Novello, Lima e Velho (IMPA/VISGRAF e Voxar Labs CIn-UFPE) — A Study on Gaussian Splatting, SIBGRAPI 2025 — `https://sol.sbc.org.br/index.php/sibgrapi_estendido/article/view/38270`
21. Cardoso, Costa, Oliveira, Teixeira e Teichrieb et al. — SPL4SH (JBCS 2026): o pipeline XR que ainda não usa splatting — `https://journals-sol.sbc.org.br/index.php/jbcs/article/view/8229`
22. Geo Week News — escaneamento a laser na perícia da Polícia Federal do Brasil — `https://www.geoweeknews.com/news/laser-scanning-reality-capture-lidar-brazil-federal-police-forensic-investigation`
23. Perspectivas em Medicina Legal e Perícia Médica — documentação multimodal de locais de homicídio (Rio de Janeiro) — `https://www.perspectivas.med.br/articles/documentacao-multimodal-integrada-de-locais-de-homicidio-experiencia-operacional-em-pericia-criminal-e-medico-legal-com-disponibilizacao-de-conteudo-imersivo-por-qr-code/`
24. Revista Pesquisa FAPESP — 3D favelas: o projeto Favelas 4D na Rocinha — `https://revistapesquisa.fapesp.br/en/3d-favelas/`
25. Gobira e Portugal — O museu em chamas: a perda do patrimônio e as tecnologias digitais (SciELO) — `https://www.scielo.br/j/rblc/a/ncXQ9c6t4yHNvJr44HPFrJJ/?lang=pt`

---

*Mapa gerado pela skill `futures-wheel` (modo 1, a partir de uma inovação) em 12/09/2026, com teto de 15 subagentes, dos quais 14 usados. Fase 8, infográficos, pulada por instrução da rodada. 192 efeitos, 136 não óbvios (71%) depois da auditoria de classificação, que corrigiu 25 classificações. Contrato em `CONTRATO.md`, histórico em `log.txt`, artefatos intermediários em `json/`.*