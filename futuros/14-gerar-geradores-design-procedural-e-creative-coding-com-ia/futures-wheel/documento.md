---
titulo: "Gerar geradores: design procedural e creative coding com IA"
tipo: resumo-de-tendencia
disciplina: "CIN0055 Tendências em Mídia e Interação 2026.2"
tema: "14 de 19"
familia: "Criação e plataforma"
zona: "Criação e plataforma"
skill: futurizacao-futures-wheel
autor: grec
horizonte: 2031
recorte: "global, com nota sobre o Brasil"
data: 2026-09-12
mapa_completo: "futures-wheel-gerar-geradores-design-procedural-e-creative-coding-com-ia.md"
---

# Gerar geradores: design procedural e creative coding com IA

**Rodada com teto de 15 subagentes, dos quais 14 foram usados.** A skill prevê um expansor por ramo;
aqui os ramos foram agrupados por tema em três lotes de 2ª ordem, cada lote marcou os **cinco ramos mais
férteis**, e a 3ª ordem saiu só sobre esses quinze (TMI-0028, TMI-0050). Por isso, dos 118 efeitos de 2ª
ordem, **103 ficaram sem filhos**: o orçamento foi para onde rendia profundidade. A
Fase 8 (infográficos) foi pulada. O mapa completo, com 225 efeitos (48 + 118 + 59),
conexões cruzadas, wildcards e 283 fontes (188 abertas por inteiro), está em
`futures-wheel-gerar-geradores-design-procedural-e-creative-coding-com-ia.md` e no HTML de mesmo nome.

## A inovação

O enunciado propõe que a IA passe a **escrever o gerador** — o shader, o modelo Three.js procedural, o grafo
de nós, o script de Blender, a cena de manim — em vez de entregar o artefato, e que isso abra uma disputa
entre **gerar programa** (leve, editável, explicável) e **gerar pixel** (malha, imagem e vídeo feitos por
rede). As cinco frentes (104 fontes, 83 abertas) testaram as duas proposições contra os critérios declarados
de antemão. A primeira ficou de pé com o mecanismo corrigido, a segunda foi corrigida, e apareceu uma terceira.

**A IA já escreve geradores que executam; o gargalo virou julgar o resultado.** Com retorno de erro, a taxa
de programas de modelagem 3D que rodam sobe de 0,702 para 0,974, mas a forma não melhora (3DCodeBench). Um
usuário humano de Blender erra cinco vezes menos que o modelo ao editar cena procedural (BlenderGym), e um
praticante aproveita de 10% a 20% dos shaders que o agente propõe. A tração maior é o **agente dirigindo a
ferramenta que já existe**, pela API e por MCP (o conector de terceiro para o Blender passa de 878 mil
downloads por mês). A adoção por quem publica está entre adotantes iniciais nos estúdios: cerca de 3,6% dos
profissionais do GDC 2026 usam IA em geração procedural. Na criação por usuários em plataforma o uso está
mais adiantado: 44% dos mil maiores criadores do Roblox, pelo número da empresa.

**Programa e pixel não disputam um vencedor: dividem território e se compõem.** Numa aula animada, a versão
em manim tira 86,0 num teste de aprendizagem, contra 2,5 do Veo3 (Code2Video). O programa fica com o que
precisa estar certo, e a imagem natural fica com a rede. O custo de gerar empata na ordem de grandeza (US$
0,16 a US$ 4,50 por objeto em tokens, contra cerca de US$ 1 por malha), mas o capital vai para a malha (cerca
de US$ 850 milhões captados por Meshy e Tripo, contra US$ 4,1 milhões da Adam). Os produtos juntam as duas
vias no mesmo fluxo.

**A terceira raiz é de legitimidade.** O Codeberg passou a proibir projeto majoritariamente escrito por IA
(assembleia de julho de 2026, 358 votos a 144), o p5.js recusa pull request gerado, o Graphite recusou MCP. Ao
mesmo tempo, a regra escrita por IA ficou **fora da divulgação**: o Steam deixou de pedir aviso de assistente
de código, e o art. 50 do AI Act marca imagem, áudio, vídeo e texto sintéticos, não código-fonte.

**Dois fatos do enunciado não se confirmaram.** `manim-web-mcp` não foi encontrado com esse nome; o que
existe é o Manim Web, de Varun Rao. O relato de o GitHub esconder a manim não se reproduz (é o primeiro
resultado, com 93.801 estrelas) nem tem registro público. E a economia "em tokens" do img2threejs é
estimativa que o próprio projeto declara não medida.

## A tese

Quando a IA escreve e dirige o gerador, o trabalho de quem projeta mídia passa de escrever a regra para especificá-la e julgar o que ela produz, enquanto a camada de regra se torna ao mesmo tempo o ponto onde o uso de IA deixa de ser rotulado e o ponto que a plataforma hospedada controla.

## Os 48 efeitos de 1ª ordem

| id | Efeito | STEEP | Prob. | Prazo |
|---|---|---|---|---|
| `e1_01` | Com o laço gerar → executar → ler o erro → corrigir, a taxa de geradores 3D que executam deixa de discriminar sistemas (0,702 → 0,974 no… | Tecnológico | alta | até 2028 |
| `e1_02` | O verificador visual (um modelo de visão ou uma métrica de imagem que confere o render contra o pedido) vira componente próprio dos… | Tecnológico | alta | até 2028 |
| `e1_03` | Quem produz shader e peça visual com agente passa a trabalhar por população: pede dezenas de conceitos, deixa subagentes ranquearem e… *(óbvio)* | Social | alta | até 2028 |
| `e1_04` | Ferramentas de estúdio e projetos abertos põem um portão ANTES da execução: o servidor MCP de Apex Script da SideFX valida o código antes… | Tecnológico | alta | até 2028 |
| `e1_05` | Estúdios mantêm o artista técnico como revisor e dono da cena procedural, e o agente entra como rascunho e manutenção, porque em edição de… *(óbvio)* | Econômico | alta | 2028-2031 |
| `e1_06` | Com o código barato, o gargalo passa a ser especificar o espaço de saídas: geradores escritos por IA executam e produzem variação… *(óbvio)* | Tecnológico | média | 2028-2031 |
| `e1_07` | Desenhar por código virou régua pública de capacidade dos modelos de linguagem (o pelicano de bicicleta em SVG), e o próprio julgamento… | Tecnológico | alta | até 2028 |
| `e1_08` | A superfície de script das ferramentas (API Python do Blender, Apex Script do Houdini, Luau do Rive, WebServer DAT do TouchDesigner) passa… *(óbvio)* | Tecnológico | alta | 2028-2031 |
| `e1_09` | Laboratórios de IA passam a financiar a infraestrutura aberta das ferramentas criativas pela porta da API: a Anthropic entrou como… | Econômico | média | até 2028 |
| `e1_10` | A execução de código gerado dentro do software de criação abre superfície de ataque, e estúdios e escolas passam a isolar o uso de… *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_11` | A IA que escreve o gerador vira item de receita recorrente das plataformas incumbentes, cobrado em crédito por assento, e não categoria de… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_12` | Mantenedores de bibliotecas gráficas passam a publicar servidores MCP e documentação para agentes como parte do lançamento, porque modelos… *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_13` | A tração do fluxo agêntico se concentra em poucos alvos: conectores de Blender e Unity têm uma a duas ordens de grandeza mais uso que os de… | Econômico | média | até 2028 |
| `e1_14` | Pessoas que não programam passam a produzir geradores por seleção, sem escrever código: num estudo com 50 pessoas, novatos fizeram 4,2… *(óbvio)* | Social | média | até 2028 |
| `e1_15` | A distância entre quem lê o gerador e quem não lê aumenta: ferramentas de programação com LLM enganam desproporcionalmente quem já tem… *(óbvio)* | Social | média | 2028-2031 |
| `e1_16` | Cursos de creative coding formalizam o uso regulado de LLM ('Ask 3, then GPT, then me', esboço em papel antes de codar, IA para depurar e… *(óbvio)* | Social | alta | até 2028 |
| `e1_17` | A performance ao vivo de código (live coding, Algorave, Strudel) se firma como nicho em que delegar a escrita apaga a obra, e apresentações… *(óbvio)* | Social | baixa | 2028-2031 |
| `e1_18` | O processo de um artista ou estúdio passa a ser empacotado como skill de agente reutilizável e distribuível ('artist-in-a-box'), e o saber… *(óbvio)* | Tecnológico | média | até 2028 |
| `e1_19` | A animação didática de matemática e ciência passa a ser gerada como código (cena de manim) e não como vídeo de difusão: no mesmo pedido, o… *(óbvio)* | Social | alta | até 2028 |
| `e1_20` | Geradores de mídia estruturada passam a rodar em modelos abertos pequenos, fora de API paga: um modelo de 30B renderiza cena de manim em… | Tecnológico | alta | até 2028 |
| `e1_21` | O motion design de produto (vídeo explicativo, anúncio, abertura) passa a ser escrito como código React por agentes: os downloads mensais… | Econômico | alta | até 2028 |
| `e1_22` | O arquivo de peça mecânica passa a ser código paramétrico escrito e lido por IA — KCL no Zoo, OpenSCAD no CADAM, build123d em skills… | Tecnológico | média | 2028-2031 |
| `e1_23` | Pedir peça por texto fica restrito a geometria simples e a fabricação amadora, e o CAD profissional recebe copiloto em vez de substituto: a… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_24` | O fluxo de design se divide por tipo de peça: ícone, logotipo e diagrama passam a ser gerados como SVG por modelo de linguagem, e… *(óbvio)* | Tecnológico | alta | 2028-2031 |
| `e1_25` | Imagens de sistema — cartões de compartilhamento, gráficos de marca, capas de post — passam a ser geradas em escala a partir de templates… *(óbvio)* | Econômico | média | até 2028 |
| `e1_26` | A peça imprimível sai de texto direto para impressoras domésticas e de bancada — por código paramétrico (OpenSCAD, build123d exportando STL… | Tecnológico | média | até 2028 |
| `e1_27` | As plataformas de design e de jogo vendem as duas vias na mesma assinatura e no mesmo crédito — Figma com shaders escritos pelo agente e… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_28` | Forma-se o pipeline de compilação: a rede propõe a forma e o agente a converte em gerador leve e editável | Tecnológico | média | 2028-2031 |
| `e1_29` | A rede neural entra como nó dentro do grafo procedural, sob controle da regra editável: o Houdini 22 põe Neural Cellular Automata no… *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_30` | Motores de jogo mantêm estado e regra programados, e o pixel gerado entra como camada de apresentação condicionada, porque o modelo de… *(óbvio)* | Tecnológico | média | 2028-2031 |
| `e1_31` | A estética procedural visível — geometria de primitivas, low-poly, shader leve — volta nos nichos que exigem carregamento instantâneo, como… | Social | média | até 2028 |
| `e1_32` | O custo de gerar deixa de separar as vias — escrever um objeto em Three.js custa de US$ 0,16 a US$ 4,50 em tokens a preço de lista, uma… | Econômico | média | até 2028 |
| `e1_33` | O laço de revisão visual domina a conta de tokens do gerador (5 a 8 ciclos, 30 a 70 mil tokens), e para objetos orgânicos o gerador… | Econômico | média | 2028-2031 |
| `e1_34` | O capital de risco concentra-se na via malha — cerca de US$ 850 milhões captados por Meshy e Tripo em 2026 contra US$ 4,1 milhões da… | Econômico | alta | até 2028 |
| `e1_35` | A via malha incorpora sem custo o que era argumento da via programa: a Meshy cobra zero crédito por remesh, rigging e animação, e a Tripo… | Econômico | média | até 2028 |
| `e1_36` | As bibliotecas de mídia programada na web crescem muito acima do ritmo anterior — three de 10 para 61 milhões de downloads mensais e p5 de… *(óbvio)* | Tecnológico | média | até 2028 |
| `e1_37` | O mercado que remunerava o gerador como obra (arte generativa long-form, em que o comprador recebe a saída de um algoritmo) perde escassez,… *(óbvio)* | Econômico | baixa | 2031-2036 |
| `e1_38` | Forjas de software livre passam a proibir projeto feito majoritariamente por IA — o Codeberg incorporou a regra aos termos de uso em… | Político | média | até 2028 |
| `e1_39` | Os projetos que fazem as ferramentas de gerador restringem contribuições geradas por IA enquanto seus usuários usam IA para escrever com… *(óbvio)* | Político | alta | até 2028 |
| `e1_40` | A IA que escreve script ganha entrada nos estúdios pela aceitação moral, não pela técnica: artistas hostis à difusão toleram 'scripting por… | Social | média | até 2028 |
| `e1_41` | Com a rejeição medida à IA generativa subindo entre quem faz jogos — 52% veem impacto negativo em 2026, contra 30% em 2025 e 18% em 2024 —,… *(óbvio)* | Político | média | até 2028 |
| `e1_42` | O critério de autoria por grau de controle humano, e não por previsibilidade, dá ao gerador em código editado por humano um caminho de… | Político | média | até 2028 |
| `e1_43` | Dinheiro de laboratório de IA vira risco reputacional para fundações de ferramentas criativas abertas: o patrocínio da Anthropic ao Blender… | Político | média | até 2028 |
| `e1_44` | A geração no momento em que o jogador chega entra em produto na forma híbrida — malha gerada por rede com scripts de comportamento… | Tecnológico | alta | 2028-2031 |
| `e1_45` | A mecânica de jogo gerada como código em tempo de execução avança por gramática restrita e linguagens de script tipadas, e não por modelos… | Tecnológico | média | 2028-2031 |
| `e1_46` | Ferramentas que geram cenas e jogos por IA passam a gerar por uma representação intermediária (esquema, árvore de tarefas) antes do código,… | Tecnológico | média | até 2028 |
| `e1_47` | A vitrine pública de jogos escritos por IA não cresce apesar do dinheiro: a Vibe Jam 2026 recebeu 945 jogos com pelo menos 90% do código… | Econômico | média | até 2028 |
| `e1_48` | O uso de IA na produção de jogos se concentra em prototipagem e apoio, não em conteúdo final voltado ao jogador: entre quem usa IA… *(óbvio)* | Econômico | alta | até 2028 |

Os 8 temas que organizam a 1ª ordem, e pelos quais os lotes de expansão foram formados: **Julgar o gerador vira o gargalo** (`e1_01` a `e1_07`); **Agentes dirigem as ferramentas procedurais que já existem** (`e1_08` a `e1_13`); **Quem escreve o gerador: novatos, especialistas e a fricção** (`e1_14` a `e1_18`); **O programa fica com o que precisa estar certo** (`e1_19` a `e1_26`); **Programa e rede compostos no mesmo produto** (`e1_27` a `e1_31`); **A economia recontada: tokens, peso e capital** (`e1_32` a `e1_37`); **Conflito de legitimidade e autoria** (`e1_38` a `e1_43`); **Conteúdo gerado quando o jogador chega** (`e1_44` a `e1_48`).

## Os 5 mais impactantes

1. **`e1_02` — O verificador visual vira componente do produto.** Se escrever o gerador é barato e errar a forma é comum, o valor se concentra em quem decide automaticamente qual saída presta. O juiz embute critério estético, e é dele que partem a homogeneização (e2_A04), a arquitetura gerar-muito-e-filtrar (e1_03) e o ciclo de custo do olho barato (fl12).

2. **`e1_08` — A API de script vira a porta de entrada do trabalho.** Agente não clica; o que só existe na interface gráfica fica fora do fluxo. Isso reordena a competição entre ferramentas (Blender, Houdini, Rive, TouchDesigner) e está na raiz da captura pela plataforma hospedada (fl8) e da dependência de conectores de terceiros (sv2).

3. **`e2_A01` — O gerador humano passa a treinar a IA que escreve geradores.** Com 'executa' saturado, o que falta aos modelos é correspondência, e ela se ensina com pares código–forma sintetizados por geradores procedurais (1 milhão no CAD-Recode; 12.963 instâncias do Infinigen). Abre o laço mais forte da árvore (fl5): o teto do modelo passa a ser o vocabulário do sintetizador.

4. **`e2_C25` — A divulgação se estreita e o gerador fica invisível.** O Steam deixou de pedir divulgação para assistente de código em janeiro de 2026, e o Roblox cobre só a IA que o jogador vê. As estatísticas públicas de IA em jogos passam a medir a via pixel, e a régua de adoção da R1 fica dependente de telemetria de quem vende a ferramenta (fl6, e3_T2_19).

5. **`e2_C43` — A UGC leva a IA à produção antes dos estúdios.** 44% dos 1.000 maiores criadores do Roblox usam Assistant ou MCP para construir, contra ~5% de quem usa IA em recursos voltados ao jogador no GDC. A porta de entrada remunerada para escrever mídia com agente passa por plataformas que curam, pagam por 'novidade' que elas mesmas julgam e não marcam o conteúdo feito com agente — inclusive para os mais de 1.100 criadores brasileiros pagos.

**O que os cinco têm em comum.** Nenhum trata de a IA desenhar melhor. Os cinco apontam para **quem controla a camada de regra quando ela deixa de ser escrita à mão**. O valor vai para o verificador que decide qual saída presta (`e1_02`) e para a API de script, a porta por onde o agente entra na ferramenta (`e1_08`). O gerador escrito por humanos vira matéria-prima de treino do modelo que escreve geradores (`e2_A01`). E a regra escrita por IA fica sem rótulo nas vitrines (`e2_C25`) justamente quando chega à produção remunerada pela porta da plataforma, e não do estúdio (`e2_C43`). O que o mapa descreve é **o trabalho de quem projeta saindo de escrever a regra para especificá-la e julgá-la**, com o critério do juiz, o conector e o esquema nas mãos de quem hospeda.

**Os 5 mais surpreendentes**: `e1_47` a vitrine de jogos feitos por IA não cresceu; `e3_T2_01` o nome do conector oficial pertence a outro; `e2_C17` a proibição do Codeberg tem motor orçamentário; `e3_T1_13` o antigosto vira arquivo instalável; `e2_C14` o agente abandona a camada feita para quem não programa.

**Distribuição.** Econômico 31% → 39% → 39% e Político 10% → 12% → 24% da 1ª à 3ª ordem; Tecnológico 42% → 36% → 27%; Social 17% → 13% → 10%. **A categoria Ecológica tem um único efeito** (`e2_B19`, plástico descartado de peças impressas a partir de modelo gerado, sem volume medido), e isso não é descuido: os demais candidatos terminavam em custo, peso de arquivo ou contrato, não em consequência sobre um meio físico, e nenhuma fonte do corpus mede energia comparada entre gerar código e gerar malha (TMI-0083). 67 dos 225 efeitos são óbvios depois da auditoria (TMI-0061), numa proporção que cai de uma ordem para a seguinte. 4 ficam fora da janela de 2031 (`e1_37`, `e2_A36`, `e2_C16`, `e2_C36`).

## Wildcards

10 cenários de baixa probabilidade e alto impacto: 3 positivos, 3 negativos e 4 ambíguos.

- **w1 · O jogo que se escreve quando você chega** (ambíguo). Entre 2028 e 2031, uma experiência entre as mais jogadas do Roblox ou um jogo no topo de vendas do Steam tem como laço central uma mecânica escrita para cada partida: o jogador descreve um feitiço, uma arma ou uma regra do mundo,…
- **w2 · O olho que não erra** (ambíguo). Em 2028, um verificador visual aberto, com inferência escalada, empata com usuários humanos do Blender na correspondência de cena procedural.
- **w3 · A regra que já tinha dono** (negativo). Em 2029, um detentor de patentes de mecânica de jogo processa uma plataforma porque o gerador de regras em tempo de execução produziu, para milhares de jogadores, uma mecânica que reproduz as reivindicações de uma patente…
- **w4 · O ativo que programa o agente** (negativo). Em 2027, um pacote de ativos envenenado — ou uma resposta adulterada de biblioteca de texturas — instrui agentes que dirigem o Blender a gravar arquivos fora da pasta do projeto e a escrever instruções dentro de nomes de objetos…
- **w5 · A caixa-surpresa gerada** (ambíguo). Em 2027, já na fase de fiscalização do ECA Digital, uma denúncia à ANPD sustenta que pagar créditos para gerar na hora um objeto cuja forma o jogador só conhece depois de pagar é caixa-surpresa.
- **w6 · O gerador vira renda de dado** (positivo). Entre 2028 e 2030, um consórcio de laboratórios de IA e empresas de robótica passa a pagar artistas generativos e artistas técnicos por geradores procedurais com licença comercial e procedência documentada, porque cada gerador…
- **w7 · O anúncio que só a regra podia auditar** (ambíguo). Em 2028, uma campanha publicitária personalizada em massa — dez mil variantes de um mesmo template escrito por agente, com fundo animado em shader — gera, em algumas variantes, um padrão de flash acima do limite.
- **w8 · A aula que se escreve em português** (positivo). Entre 2027 e 2030, uma rede estadual de ensino no Brasil, obrigada a implementar a BNCC Computação, instala um modelo aberto pequeno em servidores próprios, e ele gera cenas de manim e sketches de p5.js em português.
- **w9 · A web que parou no retrato de 2025** (negativo). Em 2029, o three.js conclui a migração para WebGPU/TSL e retira caminhos antigos, e os principais CDNs deixam de servir versões muito velhas.
- **w10 · A rede aprende a devolver programa** (positivo). Entre 2028 e 2030, um dos líderes da geração de malha, pressionado por clientes corporativos que querem peso, edição e animação, troca a saída padrão da API: em vez de malha, entrega um programa procedural com partes nomeadas e…

**O wildcard do enunciado, testado.** "Um motor de jogo em que o conteúdo é gerado como código no momento em que o jogador chega" **continua wildcard na forma literal** (`w1`). O que já chegou ao jogador é outra coisa. No Roblox, jogadores geraram 160 mil objetos numa experiência, com malha feita por rede e script escrito antes. Em protótipos, a regra é gerada **como dado** e interpretada por um motor fixo: um jogo de hackathon declara "Spells are pure data — no runtime code generation", e outro gera uma linguagem própria em JSON, recusando código geral por segurança, com 3,35 s a 12,2 s por geração. A geração de mecânica com compilação garantida existe em pesquisa, lenta demais para jogo em tempo real. E a diretriz 2.5.2 da App Store proíbe executar código que mude a funcionalidade do app. Se vier, o wildcard chega primeiro como gramática interpretada, não como código livre.

O mais próximo de acontecer é `w4`: um ativo envenenado que dá instruções ao agente dentro do Blender e se propaga pelos arquivos compartilhados. Ele se apoia em duas CVEs já publicadas do conector de terceiro mais usado. Das saídas positivas, duas mudam a divisão de território: a rede de geração de malha passa a entregar programa editável em vez de malha (`w10`), e o gerador escrito à mão vira renda por licença de treino (`w6`). A terceira tem o Brasil no centro: uma rede estadual de ensino gera, com modelo aberto, aulas animadas em código e em português (`w8`).

## Nota Brasil

O Brasil aparece **pelo lado de quem joga e de quem cria em plataforma, quase nunca pelo lado de quem produz ferramenta**. Há mais de 1.100 estúdios de jogos cadastrados. No Roblox, mais de 1.100 criadores brasileiros eram elegíveis a pagamento no 1º semestre de 2025, pelo relatório encomendado pela própria empresa, e o editor deles já tem assistente e MCP. A Pesquisa Game Brasil 2026 registra 45,7% de jogadores preocupados com a precarização criativa pela IA e 39,3% dispostos a comprar jogo feito com IA. O BIG Festival 2026 exige declarar IA "em qualquer etapa", inclusive programação, sem desqualificar o jogo, enquanto o Steam não pede nada para código. A votação do PL 2.338/2023 na Câmara ficou para depois das eleições. O crédito das ferramentas, cobrado em dólar e com IOF, favorece modelo aberto local para mídia estruturada. Nos anais do SBGames 2025 há LLM gerando nível e código de jogo, e nenhum trabalho sobre gerador gráfico escrito por LLM. O único artefato brasileiro achado é o tdmcp, servidor MCP para TouchDesigner, de Danilo Pantani (42 estrelas). A programação criativa brasileira (Compoética, Algorave Brasil) não aparece discutindo IA. Procurado e não encontrado: dado da Abragames sobre uso de IA por estúdios, startup brasileira de CAD por texto, shader ou 3D procedural por IA, e posição pública da comunidade de creative coding sobre código gerado.

## O que me faria mudar de ideia

Os dois critérios declarados de antemão foram adoção além da maioria inicial de Rogers, medida pelo uso de quem publica o gerador (TMI-0092), e tecnologia que só melhora o que existe. **Nenhum derrubou as raízes; os dois as corrigiram.** Nenhum número de uso ativo por quem publica passa da maioria inicial, e os números grandes (downloads, estrelas) medem instalação. Para o especialista, a IA acelera; para quem não programa, muda quem faz; e para os dois, desloca o trabalho de escrever para julgar. A régua tem uma fraqueza própria deste tema: a métrica que a TMI-0092 pede é justamente a que o Steam e o Roblox deixaram de coletar para código. Sinais que mudariam a conclusão:

- Benchmark independente que meça, no mesmo conjunto de objetos, custo, peso e tempo de edição de gerador em código e de malha neural: diferença de custo acima de 10× (hoje ~US$ 0,16–4,50 × ~US$ 1, estimados) desfaz o 'empate' de e1_32 e a divisão de território da R2.
- Um modelo que iguale o humano na edição de cena procedural (BlenderGym: humano 1,269 × melhor modelo 6,747): cai o especialista como revisor (e1_05), a escada fl10 fecha rápido e o wildcard w2 passa a efeito.
- Pesquisa do GDC 2027 ou equivalente com IA em geração procedural acima de ~16% de todos os profissionais (hoje ≈ 3,6%), ou dado de loja/plataforma que meça conteúdo publicado feito por gerador escrito por IA: a R1 sai de adotantes iniciais nos estúdios.
- Diretriz da Comissão Europeia ou regra de loja que conte geometria renderizada a partir de código gerado como conteúdo sintético (hoje o art. 50 exclui 'source code' e o Steam não pede divulgação de código): inverte a vantagem regulatória da via programa (e2_C26, sv5).
- Publicação da política de IA da Fundação Blender: se também vetar o conector periférico, ou se integrar agente ao núcleo, muda o ciclo fl2 (hoje: oficial com 24 estrelas, terceiro com ~878 mil downloads/mês).
- Exploração real documentada das CVE-2026-10688 ou CVE-2026-66004 em estúdio ou escola: acelera a migração para plataformas hospedadas com isolamento (fl8, w4).
- Lançamento do esquema personalizado da geração 4D do Roblox (previsto para meados de 2026, sem anúncio até 12/09/2026) com dado de quantos pedidos vão para modelo procedural × malha: decide se o ramo de esquemas (e2_C32, e3_T2_25 a e3_T2_28) sai de uma única empresa.
- Vibe Jam 2027 com mais de 1.500 jogos ou dado comercial pós-jam: desfaz a leitura de estabilização de e1_47 e de distribuição como gargalo (e2_C41).

## Bibliografia essencial

Fontes abertas por inteiro, com título e URL copiados do registro `json/bibliografia.json` (TMI-0082). A lista completa, com 283 fontes, está na nota Obsidian.

1. 3DCodeBench: Benchmarking Agentic Procedural 3D Modeling Via Code — Gao, Shu, Ye, Xiong, Makadia, Guo, Itti, Chen, arXiv 2606.01057, 02/06/2026 — `https://arxiv.org/pdf/2606.01057`
2. BlenderGym: Benchmarking Foundational Model Systems for Graphics Editing — Gu et al., CVPR 2025 (Highlight) — `https://arxiv.org/abs/2504.01786`
3. Code2Video: A Code-centric Paradigm for Educational Video Generation — Chen, Lin, Shou (Show Lab, National University of Singapore), arXiv 2510.01174, 01/10/2025 — `https://arxiv.org/html/2510.01174`
4. Text2CAD-Bench: A Benchmark for LLM-based Text-to-Parametric CAD Generation — Wang, Meng, Xiang, Liu, Zhou, Chen, Tang, arXiv 2605.18430, 18/05/2026 — `https://arxiv.org/html/2605.18430v1`
5. CAD-Recode: Reverse Engineering CAD Code from Point Clouds — Rukhovich et al., ICCV 2025 — `https://arxiv.org/abs/2412.14042`
6. OmniSVG: A Unified Scalable Vector Graphics Generation Model — arXiv 2504.06263 — `https://arxiv.org/html/2504.06263v1`
7. GDC 2026 State of the Game Industry Reveals Impact of Layoffs, Generative AI, and More (GDC, comunicado oficial do relatório) — `https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/`
8. Ziva — Generative AI in Game Development: Data Shows Productivity Dominates, Creative Replacement Doesn't (leitura secundária do GDC 2026) — `https://ziva.sh/blogs/gdc-2026-generative-ai-game-development-data`
9. PR Newswire — Meshy Raises Nearly $400 Million at a $1.5 Billion Valuation, the Largest Round to Date in AI 3D — `https://www.prnewswire.com/news-releases/meshy-raises-nearly-400-million-at-a-1-5-billion-valuation-the-largest-round-to-date-in-ai-3d-302828384.html`
10. TechCrunch — YC alum Adam raises $4.1M to turn viral text-to-3D tool into AI copilot — `https://techcrunch.com/2025/10/31/yc-alum-adam-raises-4-1m-to-turn-viral-text-to-3d-tool-into-ai-copilot/`
11. img2threejs — docs/TOKEN_COST.md (GitHub) — `https://github.com/img2threejs/img2threejs/blob/main/docs/TOKEN_COST.md`
12. GitHub — ahujasid/blender-mcp — `https://github.com/ahujasid/blender-mcp`
13. Blender Lab — MCP Server oficial (blender.org/lab) — `https://www.blender.org/lab/mcp-server/`
14. SideFX — What's new in Houdini 21: Machine learning — `https://www.sidefx.com/docs/houdini/news/21/ml.html`
15. Roblox Newsroom, 'Roblox Studio is Going Agentic' (15/04/2026, Nick Tornow) — `https://about.roblox.com/newsroom/2026/04/roblox-studio-going-agentic`
16. Roblox Newsroom — Accelerating Creation, Powered by Roblox's Cube Foundation Model — `https://about.roblox.com/newsroom/2026/02/accelerating-creation-powered-roblox-cube-foundation-model`
17. Remotion — skills de agente (remotion-dev/skills) + downloads npm — `https://github.com/remotion-dev/skills`
18. 3b1b/manim e ManimCommunity/manim (GitHub API) + PR #2525 no 3b1b/manim — `https://github.com/3b1b/manim`
19. Manim Web (manim.varunrao.com) — o 'manim-web-mcp' da turma — `https://manim.varunrao.com/`
20. Paul Bakaus, 'Carving Shaders Out of Claude Code', 26/03/2026 — `https://www.paulbakaus.com/carving-shaders-out-of-claude-code/`
21. Cursor Vibe Jam 2026, press release + post da Colyseus (08/05/2026) — `https://vibejam.com/2026/press`
22. Codeberg/org, pull request #1253 'Proposal Assembly 2026: ToU extension to prohibit LLM-extrusions' (registro normativo) + faixa na página do Strudel no Codeberg — `https://codeberg.org/Codeberg/org/pulls/1253`
23. Codeberg blog — 'Protecting our FLOSS commons from LLMs' — `https://blog.codeberg.org/protecting-our-floss-commons-from-llms.html`
24. Mantenedores do p5.js — AI_USAGE_POLICY.md no repositório processing/p5.js (sem data no documento) — `https://github.com/processing/p5.js/blob/main/AI_USAGE_POLICY.md`
25. Generation Amiga — Valve reescreve as regras de divulgação de IA do Steam (17/01/2026) — `https://www.generationamiga.com/2026/01/17/valve-rewrites-steams-ai-disclosure-rules-for-developers/`
26. Comissão Europeia — FAQ sobre as obrigações de transparência do art. 50 do AI Act — `https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act`
27. U.S. Copyright Office (Register of Copyrights) — Copyright and Artificial Intelligence, Part 2: Copyrightability, janeiro de 2025 (PDF aberto integralmente via download e extração de texto) — `https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf`
28. Tyler Hobbs — Ensaio "The Rise of Long-Form Generative Art", 06/08/2021 — `https://www.tylerxhobbs.com/words/the-rise-of-long-form-generative-art`
29. Kate Compton — Ensaio "So you want to build a generator...", Tumblr, sem data na página (circula desde cerca de 2016) — `https://www.tumblr.com/galaxykate0/139774965871/so-you-want-to-build-a-generator`
30. Everchanging Grimoire — jogo de hackathon cujos feitiços gerados são "pure data", aberto pelo caçador de wildcards — `https://elytride.itch.io/everchanging-grimoire`
31. Latent Space — protótipo de geração de mecânica como DSL em JSON (arXiv 2510.16952), aberto pelo caçador de wildcards — `https://arxiv.org/html/2510.16952`
32. CVE-2026-10688 — vulnerabilidade publicada no conector blender-mcp, aberta pelo caçador de wildcards — `https://app.opencve.io/cve/CVE-2026-10688`
33. Regulamento BIG Festival 2026 (gamescom latam), item 11.2.e — `https://latam.gamescom.global/pt/regulamento/`
34. Access Partnership — 'Code, Create, Earn: Roblox's Economic Impact on Brazil's Creators' (05/01/2026, encomendado pelo Roblox) — `https://accesspartnership.com/reports/code-create-earn-robloxs-economic-impact-on-brazils-creators/`
35. Omelete — Pesquisa Game Brasil 2026 destaca preocupação com IA nos jogos — `https://www.omelete.com.br/games/pesquisa-game-brasil-2026-ia-jogos`

---

*Mapa gerado pela skill `futures-wheel` (modo 1, a partir de uma inovação) em 12/09/2026, com teto de 15 subagentes, dos quais 14 usados. Fase 8 pulada. 225 efeitos, 158 não óbvios (70%) depois da auditoria, que fez 62 reclassificações e arbitrou 19 contradições entre agentes (18 efeitos com nota de correção). Contrato em `CONTRATO.md`, histórico em `log.txt`, artefatos intermediários em `json/`.*