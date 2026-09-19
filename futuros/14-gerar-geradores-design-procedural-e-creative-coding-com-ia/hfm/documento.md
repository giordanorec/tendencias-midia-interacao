---
tema: "Gerar geradores: design procedural e creative coding com IA"
slug: gerar-geradores-design-procedural-e-creative-coding-com-ia
autor_login: hfm
zona_de_interesse: Criação e plataforma
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global, com nota sobre o Brasil
disrupcoes_raiz: 4
efeitos_ordem_1: 9
efeitos_ordem_2: 14
efeitos_ordem_3: 28
tecnologias_citadas: [img2threejs, Three.js, LL3M, ShapeCraft, 3DCodeBench, P3D-Bench, OpenSCAD, CadQuery, Blender, Blender Geometry Nodes, SGP-GenBench, SVG, TikZ, DeTikZify, ShadAR, HLSL, GLSL, MaterialApprentice, ProcGen3D, PSDL, WaveFunctionCollapse, InfiniteDiffusion, Terrain Diffusion, Perlin noise, MultiDiffusion, Graphite, Manim Community, manim-mcp-server, Model Context Protocol, NodeArchitect, Houdini, VEX, HDA, Cavalry, Rive, Lottie, 3D Gaussian Splatting, SOGS, SPZ]
fontes: 25
confianca: media
experimento: "Bancada do gerador — a mesma referência visual reconstruída por três caminhos (captura/malha, pixel gerado e programa gerado), medindo peso em disco, tempo até o primeiro quadro, e quantos parâmetros a turma consegue de fato mexer depois"
skill_usada: futurizacao-hfm
publico_ok: false
---

## 1. Resumo

Design procedural existe há décadas; o que mudou é quem escreve o procedimento. Em 2026 há
benchmark, não anedota: o 3DCodeBench mede doze modelos de visão-linguagem escrevendo código
Python para o Blender e encontra executabilidade de 46% a 91% em turno único, subindo a 97% com
refino multi-turno alimentado pelo erro da própria ferramenta [3]. O laço fechou — e fechou sem
humano no meio. A consequência que este mapa persegue não é "a IA modela em 3D", é outra: o
produto da geração deixou de ser um arquivo terminal e virou um **programa**, que cabe no
controle de versão, aceita diff e continua editável depois. O img2threejs entrega uma função
TypeScript e uma especificação JSON em vez de malha, e diz isso na primeira linha: nada de
binário multi-megabyte no repositório [1]. O LL3M relata edição de usuário em 38 segundos
médios contra dez minutos da geração inicial [4] — a assimetria entre gerar e reeditar é o
argumento econômico inteiro.

A segunda ruptura é menos visível e mais importante: **o renderizador virou o juiz**. Programa
gráfico tem oráculo barato — compila, roda, renderiza, compara. É por isso que o avanço aqui
não segue a curva das outras mídias generativas: em SVG, o aprendizado por reforço com
recompensa verificável levou um modelo aberto de 7B ao nível de sistemas de fronteira [2]; no
Blender, o feedback de execução importa mais que a autonomia do agente [3]; e a correção de
cena pode inclusive dispensar o modelo, virando busca simbólica num DSL enxuto, com layouts
preferidos por humanos em 82% e 94% dos pares contra as linhas de base declarativas [15].
Quem tem compilador ganha; quem não tem, espera.

A terceira é de distribuição. Um splat capturado vive nas centenas de megabytes, e mesmo
comprimido raramente desce de dezenas [25]; um conjunto de seis ícones animados em formato
procedural pesa 41 KB contra 400 KB do mesmo conjunto em JSON de animação [24]. E o procedural
recuperou, dentro de um modelo aprendido, as três propriedades que o tornavam indispensável —
determinismo por semente, acesso aleatório em tempo constante e extensão infinita —, com tempo
de 1,72 s para o primeiro ladrilho e 0,66 s para o seguinte numa RTX 3090 Ti [17]. A oposição
entre gerar pixel e gerar programa está perdendo nitidez pelo lado que ninguém previu.

A quarta é sobre a ferramenta: o grafo de nós ganhou um operador que não é gente. Há agente
dentro do Houdini lendo nós selecionados, escrevendo VEX e montando HDA, e expondo a aplicação
inteira por MCP, com versões datadas ao longo de 2026 [18]; há servidor MCP para o Manim com
644 estrelas [9]; e há trabalho extraindo de 158 vídeos de tutorial não o grafo final, mas a
**ordem em que o especialista o monta** [11]. O que está sendo capturado não é o artefato nem o
gerador: é o método.

Daí saem quatro disrupções-raiz e 51 efeitos. Confiança do mapa: **média**. O que ele mais
arrisca não é a direção — é supor que a precisão venha junto com a fluência. O P3D-Bench mostra
o contrário: alinhamento semântico em torno de 0,8 convivendo com precisão geométrica em torno
de 0,35, e apenas metade das peças corretas em montagens de múltiplas partes [7]. O programa
executa e não bate a medida. Essa é a rachadura por onde o mapa pode desabar.

## 2. O tema

O objeto aqui é **a regra como artefato, e a IA escrevendo a regra**. Não é gerar uma imagem,
um vídeo ou uma malha: é gerar o programa que, executado, produz imagem, vídeo ou malha — e que
continua lá depois, legível, parametrizável e versionável.

Isso encosta em mídia e interação em quatro pontos que não são teóricos.

**Primeiro, no peso.** Mídia interativa tem orçamento de banda, memória e bateria. Uma captura
fotorrealista de cena entra nesse orçamento como arquivo grande e opaco; um programa entra como
poucos kilobytes que se expandem no cliente. Para web, jogo leve e óculos, isso não é detalhe
de implementação — é a diferença entre existir e não existir.

**Segundo, na editabilidade.** Interação exige que a coisa responda. Um pixel gerado é um
resultado; um gerador é uma superfície de controle. Quando o objeto vem como função com
parâmetros expostos, o designer tem onde pegar. Quando vem como malha ou vídeo, só resta
regenerar e torcer.

**Terceiro, no ofício.** Se o gerador é escrito por máquina, o que sobra para quem projeta é
especificar a regra e julgar o resultado — duas atividades que as escolas de design brasileiras
e estrangeiras ensinam pouco, porque ensinam ferramenta [19].

**Quarto, na obra.** Se a peça visual é um programa curto, o que é a obra: o código, a saída, ou
a semente? O Escritório de Direitos Autorais dos Estados Unidos já respondeu à metade fácil —
prompt detalhado não basta para gerar autoria, e só o que o humano determinou como elemento
expressivo é protegível [10]. Não respondeu à metade difícil, que é justamente a nossa: e
quando o humano escreve e edita a regra?

**Por que isto merece mapa de futuro e não levantamento de estado da arte.** Porque o estado da
arte aqui é ambíguo de um jeito produtivo: a mesma evidência de 2026 sustenta duas leituras
opostas. Ou o programa gerado é o formato que vence — leve, auditável, editável — e a mídia
interativa volta a ser procedural; ou a precisão paramétrica não chega, a adoção fica presa a
fundo e cenário, e isto vira mais uma camada de conveniência dentro das mesmas ferramentas de
sempre. As duas cadeias causais são plausíveis e levam a lugares diferentes. É exatamente o
caso em que uma roda de efeitos vale mais que um resumo.

**Onde este mapa NÃO entra**, por decisão de recorte: captura de realidade em 3D (dado, não
regra) é assunto do tema 10; geração de vídeo e imagem como mídia final é o tema 12. Aqui só
entra o que produz ou opera **regra**.

## 3. Onde isso está hoje

### O que já existe e funciona

**Programa gráfico gerado por modelo de linguagem, com laço de verificação.** É a base de tudo.
O 3DCodeBench, de 31 de maio de 2026, monta 26 mil triplas texto/imagem → código → malha em 212
categorias de objeto, com scripts de 531 linhas em média e alguns acima de mil linhas, e mede
doze modelos de fronteira escrevendo Python para o Blender 5.0. Executabilidade em turno único:
46% a 91%. Com refino multi-turno realimentado pelo erro: 97%. Com arcabouço de agente: 99% —
mas com qualidade de forma condicionalmente indistinguível, o que os autores leem como
evidência de que **o acesso ao feedback do ambiente importa mais que a autonomia do agente**.
A métrica automática usada correlaciona r = 0,964 com preferência humana em mais de 3.100 votos
[3].

**Geração de ativo como código editável, não como malha.** O LL3M coordena agentes que escrevem
Python de Blender usando B-meshes, modificadores de geometria e nós de shader; o argumento
central é modularidade — trocar a altura de um chapéu ou a cor de um material sem regenerar o
ativo inteiro. Geração inicial em cerca de dez minutos; edição do usuário em 38 segundos em
média [4]. O ShapeCraft, de outubro de 2025, formaliza a mesma ideia numa representação de
grafo (Graph-based Procedural Shape) com três agentes — Parser, Coder, Evaluator — e produz
ativos estruturados, texturizados e editáveis depois [12]. O img2threejs faz a versão web e
radicaliza: oito passagens com portões de qualidade (blockout → estrutural → forma → material →
superfície → iluminação → interação → otimização), saída em função-fábrica TypeScript que
devolve um `THREE.Group` mais uma especificação JSON, sem nenhum arquivo de malha; 16,3 mil
estrelas, Apache 2.0, e uma escolha explícita de gastar token só em julgamento visual e código,
deixando validação e portão para scripts Python determinísticos [1].

**Verificação como recompensa.** O trabalho sobre programação gráfica simbólica (revisado em 7
de agosto de 2026) monta o SGP-GenBench sobre SVG, medindo fidelidade de objeto, fidelidade de
cena e composicionalidade, e mostra dois achados que importam aqui: desempenho em programa
gráfico correlaciona com capacidade geral de código, e o treino por reforço com recompensa
verificável levou um Qwen-2.5-7B aberto ao nível de sistemas proprietários de fronteira — com o
efeito colateral de induzir decomposição mais fina do objeto em primitivas controláveis [2]. É
a descrição exata do que a disciplina chama de "gerar gerador": o modelo treinado contra um
renderizador aprende a produzir estrutura, não borrão.

**Correção sem modelo.** O PSDL, apresentado no SIGGRAPH Asia 2025, coloca o LLM escrevendo um
programa imperativo de layout — cada objeto posicionado em função dos anteriores — e depois
corrige os erros por **busca no espaço de programas**, sem nenhuma chamada extra de modelo. Em
estudo perceptual, os layouts foram preferidos em 82% e 94% dos pares contra duas linhas de
base declarativas, com vantagem maior justamente em cenas grandes e estruturadas [15]. O estudo
que o antecede compara os dois paradigmas de frente — LLM escrevendo programa contra LLM
escrevendo restrição para um solucionador [21]. E o primeiro autor é Maxim Gumin, o mesmo do
WaveFunctionCollapse — algoritmo de 25,3 mil estrelas que gera a partir de um único exemplo e
já roda em jogos comerciais como *Bad North*, *Caves of Qud* e *Townscaper* [16]. A linhagem é
literal.

**Procedural clássico, maduro e vivo.** Houdini 21 saiu em 27 de agosto de 2025 com mais de 360
itens novos e aprendizado de máquina embutido em pontos específicos (Neural Point Surface,
superfície animada de partículas), mas sem copiloto nativo; licença de 4.495 a 6.995 dólares
[22]. O Manim Community tem 40,9 mil estrelas, licença MIT, 6.337 commits [20]. O Graphite é um
editor vetorial e motor de animação inteiramente por nós, não-destrutivo, em alfa como
aplicação web, com desktop em candidato a lançamento — e, hoje, **sem nenhuma funcionalidade de
IA anunciada** [8]. O Cavalry, sistema procedural por nós mais próximo do Houdini que do After
Effects, foi adquirido pela Canva em fevereiro de 2026 [24].

**A ferramenta exposta a agente.** O NodeArchitect é um agente dentro do Houdini: lê os nós
selecionados, parâmetros e conexões, explica e documenta a rede, depura, escreve VEX e Python,
monta HDA a partir de descrição em linguagem natural e expõe o Houdini por MCP para ferramentas
externas. Roda em Houdini 20, 21 e 22; funciona com Codex, Copilot e Claude; a v2.0 de maio de
2026 reconstruiu tudo em torno de chamada de função e servidor MCP, e a v2.4.0 de 19 de julho
de 2026 acrescentou Houdini 22, APEX, KineFX e Solaris/Karma [18]. No lado leve, há servidor
MCP para o Manim com 644 estrelas e licença MIT, que executa script e devolve o vídeo [9].

### O que existe e não funciona

**A precisão paramétrica.** O P3D-Bench, de 9 de junho de 2026, compara quatro formatos de
saída — JSON mínimo, OpenSCAD, CadQuery e Three.js — e separa o que os outros benchmarks
juntavam: alinhamento semântico contra precisão geométrica. Semântico em torno de 0,8;
geométrico em torno de 0,35. Em montagens de várias peças, os melhores modelos recuperam cerca
de metade das peças corretas (PartMatchF1 ≈ 0,5). A conclusão é direta e desconfortável:
**código que executa não é código que acerta a medida**. O OpenSCAD sai melhor; o Three.js
aparece como o caso que produz malha triangulada em vez de sólido paramétrico [7]. O
3DCodeBench chega pelo outro lado ao mesmo lugar: partes desconectadas, alinhamento estrutural
errado, "falta crítica de entendimento do mundo físico" [3]. O LL3M admite que a fase de
auto-refino não corrige tudo e que geometria desconectada sobrevive à iteração [4]; o ShapeCraft
admite dificuldade com geometria orgânica e com descrição ambígua ou curta [12].

**A promessa de que o agente resolve.** O achado de que o arcabouço de agente leva a
executabilidade a 99% mas deixa a qualidade de forma condicionalmente indistinguível [3] é um
dado contra o entusiasmo: mais autonomia não estava produzindo melhor forma. O que produzia era
o acesso ao erro.

**A execução de código gerado dentro da ferramenta.** Nenhum dos servidores MCP examinados
documenta modelo de ameaça. O manim-mcp-server descreve pré-requisitos e configuração e não
traz nenhuma nota de segurança ou limitação declarada [9]. O que está em circulação é
"execute este Python na minha máquina de produção", com 644 estrelas e nenhuma caixa-de-areia
documentada.

### Quem está construindo

Laboratórios acadêmicos com agenda longa em modelagem procedural (Brown, com Ritchie, Gumin,
Jones [15][21]; TUM/Angela Dai, com o ProcGen3D [14]; Threedle, com o LL3M [4]), times de
pesquisa industrial (Google, no 3DCodeBench [3]), comunidade de ferramenta aberta (img2threejs
[1], Graphite [8], Manim [20], WaveFunctionCollapse [16]), pesquisadores independentes
(InfiniteDiffusion, autor único [17]) e uma camada nova de terceiros que vende integração de
agente a ferramenta profissional (NodeArchitect [18]) — enquanto o fornecedor da ferramenta
profissional ainda não entrega isso nativamente [22].

### O que o procedural recuperou do lado neural

O InfiniteDiffusion, apresentado no SIGGRAPH 2026 (19 a 23 de julho, Los Angeles), é o achado
que mais desloca este mapa. É um algoritmo sem treino que reformula a amostragem por difusão
para ser preguiçosa e ilimitada, recuperando as três propriedades que faziam do ruído procedural
algo insubstituível: determinismo por semente independente da ordem de consulta, acesso
aleatório em tempo constante a qualquer região, e extensão infinita sem armazenar o todo. Os
autores o descrevem como sucessor aprendido do ruído de Perlin. Tempo até o primeiro ladrilho
de 512×512: 1,72 ± 0,19 s; até o segundo: 0,66 ± 0,18 s; FID 14,78 contra 12,72 da linha de
base não-ladrilhada; gera terreno nove vezes mais rápido que a velocidade orbital numa RTX 3090
Ti [17]. O ProcGen3D vai na direção inversa e complementar: aprende a **aproximar o espaço de um
gerador procedural** para reconstruir objetos a partir de imagem, emitindo grafo procedural em
vez de malha, com tokenização por aresta e amostragem guiada por busca em árvore Monte Carlo
[14].

### A âncora de peso

Splat capturado: arquivos brutos rotineiramente nas centenas de megabytes, cenas grandes
passando de um gigabyte; um exemplo de 132,8 MB comprimido para 8,7 MB, uma cena de igreja de
cerca de 1 GB para 55 MB [25]. Animação procedural entregue como runtime: seis ícones animados
em 41 KB no formato nativo contra pouco mais de 400 KB nos mesmos ícones em JSON de animação
[24]. Modelo procedural gerado como código: TypeScript diffável mais especificação JSON, sem
binário [1]. Três ordens de grandeza separam as pontas.

### O Brasil

Não há, nas fontes abertas para este mapa, produção brasileira específica sobre IA escrevendo
gerador gráfico. Há a discussão adjacente e pertinente: estudo documental de 2026 comparando
Brasil e Noruega conclui que a IA generativa não substitui designers mas **reformula
prioridades curriculares**, reforçando competência crítica, ética e contextual, e registra que
desigualdade estrutural de infraestrutura no Brasil e no Sul Global atrasa a adoção de
diretrizes [19]. Isto importa para este tema por dois motivos opostos e simultâneos: o custo de
banda que torna o procedural atraente é maior aqui, e a capacidade institucional de responder
à mudança de ofício é menor.

## 4. As disrupções-raiz

### R1 — A IA escreve o gerador, e o produto da geração vira programa versionável

**O que rompe.** O artefato gerado deixa de ser terminal. Até aqui, geração produzia coisa
pronta — imagem, vídeo, malha — que se aceita ou se regenera. Quando a saída é um programa, ela
entra no mesmo regime do software: diff, commit, revisão, parâmetro exposto, edição local sem
regeneração. O LL3M mede a assimetria: dez minutos para gerar, 38 segundos para editar [4]. O
img2threejs a torna doutrina de projeto — saída diffável, nada de binário no repositório [1].

**Por que agora e não há cinco anos.** Porque só agora o código gerado executa de forma
confiável o bastante para ser matéria-prima: 46% a 91% em turno único e 97% com refino, em 212
categorias de objeto, contra API real do Blender [3]. Cinco anos atrás, gerar cem linhas de
Python de Blender que rodassem era o experimento; hoje o experimento é gerar quinhentas que
acertem a medida.

**O que ainda falta.** A precisão. Semântica em 0,8, geometria em 0,35, metade das peças em
montagens [7]. Enquanto o programa executar sem bater a medida, a adoção fica onde o erro é
tolerável.

### R2 — O renderizador vira o juiz, e a verificação barata passa a decidir onde a IA avança

**O que rompe.** A hierarquia entre domínios de geração. Em mídia sem oráculo — vídeo, música,
texto — a qualidade se resolve por escala e por gosto humano caro. Em programa gráfico existe
oráculo barato: compila, roda, renderiza, compara com a referência. Isso muda o que treina um
modelo e o que refina uma saída. O reforço com recompensa verificável levou um modelo aberto de
7B ao nível de fronteira em SVG [2]; no Blender, o feedback de execução importou mais que a
autonomia do agente [3]; e a correção de cena pôde dispensar completamente o modelo, virando
busca simbólica num DSL enxuto [15].

**Por que agora.** Porque a peça que faltava não era o modelo, era o arcabouço que devolve o
erro. O salto de 46–91% para 97% em [3] é inteiramente atribuído a realimentar o erro do
Blender; e o ganho agregado de +0,128 em similaridade de vista vem daí. O SGP-GenBench mostra o
mesmo mecanismo no treino, não só na inferência [2].

**O que ainda falta.** Um oráculo para o que não é geometria. Render-and-compare resolve "está
parecido"; não resolve "está bom", "é adequado à marca", "tem graça". Enquanto isso não tiver
verificador, a fronteira entre o que a máquina fecha sozinha e o que exige julgamento humano vai
seguir exatamente o contorno da existência de um teste automático.

### R3 — O programa volta a ser o formato de entrega da mídia interativa

**O que rompe.** A economia de distribuição. Três ordens de grandeza separam um splat capturado
de um programa que produz a mesma cena [25][24][1]. Onde há orçamento apertado de banda,
memória e bateria — web, jogo leve, óculos, Brasil — isso não é preferência estética, é
viabilidade. E, diferente das ondas anteriores de procedural, agora a regra pode ser escrita por
quem não sabe escrevê-la.

**Por que agora e não há cinco anos.** Porque até pouco tempo a escolha era binária: ou
procedural (leve, determinístico, mas de aparência pobre e de autoria cara) ou neural (bonito,
mas pesado, opaco e não-endereçável). O InfiniteDiffusion quebrou a binariedade ao devolver
determinismo por semente, acesso aleatório em O(1) e extensão infinita **dentro** de um modelo
de difusão, sem treino adicional [17]; e o ProcGen3D fez o caminho inverso, aprendendo a emitir
grafo procedural a partir de imagem [14]. As duas propriedades que separavam os campos — beleza
de um lado, endereçabilidade do outro — deixaram de ser exclusivas.

**O que ainda falta.** A entrega no cliente em escala real. Nada nas fontes abertas mostra
produto de massa distribuindo cena como semente e gerando no dispositivo do usuário. O
InfiniteDiffusion mostra que dá, com 1,72 s até o primeiro ladrilho numa placa de mesa [17] —
que não é o telefone do usuário.

### R4 — A ferramenta procedural ganha um operador que não é humano

**O que rompe.** O grafo de nós deixa de ser construído só por ponteiro. Quando o Houdini é
exposto por MCP e um agente lê os nós selecionados, escreve VEX e monta HDA por descrição [18],
a interface visual vira **uma** das formas de construir o grafo, e a curva de aprendizado que
sustentava o mercado de especialista em ferramenta deixa de ser barreira. O mesmo padrão aparece
em escala menor no Manim [9].

**Por que agora.** Por um protocolo, não por um modelo: MCP tornou barato expor uma aplicação
inteira como conjunto de ferramentas. As datas do NodeArchitect marcam a velocidade — v2.0 em
maio de 2026 com chamada de função e servidor MCP, v2.4.0 em 19 de julho de 2026, correções até
setembro [18] — e marcam quem se mexeu primeiro: um terceiro, não o fornecedor [22].

**O que ainda falta, e é um problema.** Contenção. Executar código gerado dentro da ferramenta
de autoria é superfície de ataque, e a documentação examinada não traz modelo de ameaça [9].
Falta também resolver de quem é o **método**: o MaterialApprentice extrai de 158 vídeos de
tutorial não o grafo final, mas os traços de processo — a sequência, os parâmetros, a intenção
de projeto — e os materiais derivados de processo exigiram menos edições estruturais (7,84
contra 10,84) e foram preferidos por especialistas em 83% a 100% dos critérios [11]. O que se
está capturando é a aula.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A IA escreve o gerador, e o produto da geração vira programa versionável
    efeitos:
      - id: e1
        ordem: 1
        efeito: O resultado de uma geração visual passa a caber no controle de versão e a ser revisado como código
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O fluxo de aprovação de arte incorpora diff, revisão e histórico, e o aprovado passa a apontar para uma versão de código
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A separação entre repositório de código e biblioteca de ativos deixa de existir em estúdios pequenos
                sinal: fraco
                prazo: 2032
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: O portfólio de quem projeta passa a ser lido como repositório, e a contratação avalia o gerador entregue e não só a imagem final
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Editar substitui regenerar, porque mudar um parâmetro custa segundos enquanto gerar de novo custa minutos
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O custo marginal da variação cai tanto que entregar uma versão única de uma peça visual deixa de ser o padrão
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.2.2
                ordem: 3
                efeito: A peça visual passa a ser publicada com seus controles expostos, e quem recebe ajusta sem pedir nova rodada a quem produziu
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O trabalho de quem projeta migra de produzir a forma para especificar a regra e julgar o que ela produz
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Aparece o papel de quem escreve a especificação executável, definindo que parâmetros existem e que restrições valem, separado de quem desenha
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O ensino de design se reorganiza em torno de sistemas, restrição e leitura de código, e não do domínio de uma ferramenta
                sinal: fraco
                prazo: 2032
                confianca: baixa
              - id: e2.1.2
                ordem: 3
                efeito: A avaliação em escola de design passa a considerar o gerador entregue, e não apenas a peça renderizada
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Equipes passam a manter bibliotecas internas de geradores parametrizados como ativo, com versão, dono e ciclo de manutenção
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: A identidade visual de uma marca passa a ser distribuída como código executável em vez de manual em documento
                sinal: fraco
                prazo: 2032
                confianca: baixa
              - id: e2.2.2
                ordem: 3
                efeito: Manter gerador antigo funcionando vira dívida técnica de design, com custo recorrente que antes não existia
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A precisão dimensional segue sendo o gargalo, porque o programa executa sem bater a medida pedida
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A adoção se concentra onde o erro de medida é tolerável, como fundo, cenário, textura e motion, e demora onde não é
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Consolida-se uma fronteira durável entre geração de aparência e geração de engenharia, com ferramentas e profissões distintas
                sinal: fraco
                prazo: 2032
                confianca: baixa
              - id: e3.1.2
                ordem: 3
                efeito: Linguagens que expõem sólido paramétrico passam a ser preferidas às que só produzem malha, invertendo a escolha atual por conveniência de runtime
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O renderizador vira o juiz, e a verificação barata decide onde a IA avança
    efeitos:
      - id: e4
        ordem: 1
        efeito: A qualidade da geração gráfica passa a depender de existir um verificador barato, e não do tamanho do modelo
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Domínios que têm compilador ou renderizador próprio avançam muito mais rápido que domínios sem oráculo automático
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Definir a linguagem ou o formato de uma ferramenta vira decisão estratégica, porque determina se ela pode ser aprendida por máquina
                sinal: fraco
                prazo: 2032
                confianca: baixa
              - id: e4.1.2
                ordem: 3
                efeito: Territórios de mídia sem oráculo automático ficam relativamente mais caros de automatizar e mais valorizados como trabalho humano
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Ferramentas de autoria passam a expor verificação como parte da interface, com render, comparação perceptual e teste embutidos
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: O teste automatizado entra na cultura de design como entrou na de software, com regressão visual de peça de marca
                sinal: fraco
                prazo: 2032
                confianca: baixa
              - id: e4.2.2
                ordem: 3
                efeito: Modelos abertos e pequenos alcançam sistemas de fronteira nas tarefas gráficas verificáveis, e o diferencial competitivo migra do modelo para o arcabouço
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: O refino deixa de exigir uma chamada de modelo por passo, e a correção vira busca simbólica barata sobre o próprio programa
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O custo de uma cena gerada deixa de ser dominado por tokens e passa a ser dominado por processamento local de busca
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A economia da geração deixa de favorecer quem tem o maior modelo e volta a favorecer quem tem a melhor linguagem de domínio
                sinal: fraco
                prazo: 2033
                confianca: baixa
              - id: e5.1.2
                ordem: 3
                efeito: Geração de cena passa a rodar inteira no dispositivo do usuário, porque a parte cara deixou de depender de rede
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: O programa volta a ser o formato de entrega da mídia interativa
    efeitos:
      - id: e6
        ordem: 1
        efeito: A mídia tridimensional e animada passa a viajar como programa de poucos kilobytes em vez de arquivo de centenas de megabytes
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Web, jogo leve e óculos passam a preferir conteúdo procedural onde antes preferiam captura, por orçamento de banda e memória
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Uma estética procedural reconhecível volta a dominar a mídia interativa, como a limitação técnica moldou a estética da web dos anos noventa
                sinal: fraco
                prazo: 2032
                confianca: baixa
              - id: e6.1.2
                ordem: 3
                efeito: Regiões com banda cara ou instável, inclusive boa parte do Brasil, passam a receber experiências tridimensionais que hoje não chegam
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: O conteúdo passa a ser gerado no cliente no momento em que o usuário chega, em vez de distribuído pronto
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Baixar um jogo ou carregar uma cena deixa de descrever o que acontece, porque o que trafega é a semente e a regra
                sinal: fraco
                prazo: 2033
                confianca: baixa
              - id: e6.2.2
                ordem: 3
                efeito: A moderação de conteúdo perde o objeto, porque não há arquivo para inspecionar antes, apenas regra que produzirá algo ainda inexistente
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Determinismo por semente, acesso aleatório em tempo constante e extensão infinita passam a existir também dentro de modelos aprendidos
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: A oposição entre gerar pixel e gerar programa perde nitidez, e o que decide passa a ser a interface oferecida, não a técnica usada
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Procedural deixa de nomear uma técnica e passa a nomear um contrato de reprodutibilidade e endereçabilidade que qualquer implementação pode cumprir
                sinal: fraco
                prazo: 2032
                confianca: baixa
              - id: e7.1.2
                ordem: 3
                efeito: Ruído procedural clássico é substituído por sucessores aprendidos nas ferramentas de conteúdo, e a família de funções que sustentou décadas de geração vira legado
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: A ferramenta procedural ganha um operador que não é humano
    efeitos:
      - id: e8
        ordem: 1
        efeito: Ferramentas de autoria procedural passam a expor sua árvore de nós e sua interface de programação a agentes, e não apenas a ponteiros
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O grafo de nós vira formato de troca entre pessoa e máquina, e a interface visual deixa de ser o único caminho para construí-lo
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: A curva de aprendizado que protegia o mercado de especialista em ferramenta deixa de funcionar como barreira de entrada
                sinal: fraco
                prazo: 2032
                confianca: baixa
              - id: e8.1.2
                ordem: 3
                efeito: Fornecedores de ferramenta profissional passam a competir por qualidade de interface para agente, e não por quantidade de recurso visível
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: O conhecimento de processo, que é a ordem em que um especialista monta o grafo, vira dado de treino disputado e extraído de tutorial e telemetria
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: Quem ensina publicamente passa a pesar se está formando pessoas ou alimentando o sistema que dispensa a aula
                sinal: fraco
                prazo: 2032
                confianca: baixa
              - id: e8.2.2
                ordem: 3
                efeito: Surge disputa sobre a propriedade do método e não do resultado, numa zona que o direito autoral cobre mal
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: Executar código gerado dentro da ferramenta de autoria vira superfície de ataque cotidiana no pipeline criativo
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Estúdios passam a exigir execução isolada e revisão do script gerado antes de rodá-lo em máquina de produção
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: O pipeline criativo herda a infraestrutura de segurança de cadeia de suprimentos de software, com assinatura e proveniência de gerador
                sinal: fraco
                prazo: 2032
                confianca: baixa
              - id: e9.1.2
                ordem: 3
                efeito: Um incidente de execução de código gerado em estúdio conhecido passa a ser o marco que a área cita, como vazamentos foram para a segurança corporativa
                sinal: fraco
                prazo: 2033
                confianca: baixa
```

### O que o bloco não consegue dizer

**Primeiro: a roda esconde que duas raízes brigam entre si.** R1 e R3 supõem que a vantagem do
programa é ser leve e editável. R2, levada às últimas consequências, diz que a IA só avança
onde há verificador — e verificador existe em geometria, não em julgamento estético. Se R2
estiver certa, a parte de R1 que fala em "quem projeta vira quem especifica a regra" (e2) é
menos uma promoção do que parece: o que a máquina fecha sozinha é justamente a parte
verificável, e o que sobra para o humano é o resíduo não-testável. Isso pode ser autoria ou
pode ser acabamento.

**Segundo: a roda não tem como representar que e3 é uma condição, não um efeito paralelo.**
Colocar "a precisão dimensional segue sendo o gargalo" como efeito de primeira ordem é uma
concessão ao formato. Ele é, na verdade, a válvula que regula a velocidade de tudo em R1 e R3.
Se a precisão geométrica sair de 0,35 para 0,8 [7], os prazos de e6.1, e6.2 e e2.1 encurtam
juntos, em bloco. Se não sair, tudo isso fica preso em fundo e cenário, e a roda inteira vale
um terço do que aparenta.

**Terceiro: os prazos de terceira ordem são quase todos de 2032 e 2033, além do horizonte de
2031 — e isso é deliberado.** Efeito sistêmico não respeita a data que a gente escolheu. Estão
declarados fora do horizonte em vez de comprimidos para dentro dele, que seria o erro mais
comum e o mais difícil de perceber depois.

**Quarto: nenhuma cadeia foi interrompida por falta de evidência, mas duas foram encurtadas.**
A cadeia de e9 (segurança) tem só um ramo de segunda ordem porque não encontrei nenhuma fonte
aberta documentando incidente real de execução de código gerado em ferramenta de autoria —
apenas a ausência de nota de segurança em servidor MCP popular [9]. Ausência de documentação
não é evidência de risco, e o ramo foi mantido curto por isso. E a cadeia de e5 é curta porque
o PSDL é, até onde as fontes abertas mostram, um caso isolado e não uma família de trabalhos
[15][21].

## 6. Sinais fracos e wildcards

### Sinal fraco 1 — o gerador medindo-se em tokens

O img2threejs declara como princípio de arquitetura que validação e portões são feitos por
scripts Python determinísticos, e que token de modelo é gasto só em julgamento visual e código
[1]. Isso é pequeno e é importante: significa que alguém começou a **contabilizar a inferência
como recurso escasso dentro do processo criativo**, e a projetar o pipeline para gastá-la
pouco. O PSDL faz a mesma escolha por outro caminho, corrigindo erro sem chamar o modelo de
novo [15]. Se essa contabilidade virar hábito, a métrica de mérito de uma ferramenta deixa de
ser "o que ela consegue fazer" e passa a ser "quanto de inferência ela dispensa" — que é uma
inversão completa do incentivo atual.

### Sinal fraco 2 — a captura do processo, não do resultado

O MaterialApprentice não aprende com grafos prontos; aprende com 158 vídeos de tutorial, dos
quais extrai traço de processo — a sequência de construção, os parâmetros, a intenção — e
compila isso em grafo executável. Os resultados derivados de processo exigiram menos edições
estruturais e foram preferidos por especialistas em 83% a 100% dos critérios avaliados [11].
O sinal fraco não é o desempenho, é o insumo: o que está sendo colhido é a aula, e a aula é
pública e gratuita.

### Sinal fraco 3 — a ferramenta que ainda não tem IA

O Graphite é o editor procedural por nós mais coerente com a tese deste mapa — tudo
não-destrutivo, grafo de ponta a ponta, roda local, quase sem JavaScript — e **não anuncia
nenhuma funcionalidade de IA** [8]. Enquanto isso, um terceiro constrói o agente que faltava
dentro do Houdini [18], e o fornecedor do Houdini investe aprendizado de máquina em resolvedores,
não em autoria [22]. Quem é procedural por dentro ainda não é agêntico por fora; quem é agêntico
por fora não é dono da ferramenta. Esse descasamento é temporário e quem o fechar primeiro
define o padrão.

### Sinal fraco 4 — o autor único no SIGGRAPH

O InfiniteDiffusion é assinado por um pesquisador independente, sem afiliação institucional, e
entra no SIGGRAPH 2026 resolvendo um problema que laboratórios grandes tratavam como
propriedade emergente e não como contrato a cumprir [17]. Num tema em que a barreira normal é
computação de treino, o trabalho que mais desloca o mapa é **sem treino**. Isso sugere que a
fronteira aqui ainda é de formulação, não de escala — e que ela está aberta a quem tem uma ideia
e uma placa de vídeo de mesa.

### Wildcard A — o motor que gera o conteúdo como código na hora em que o jogador chega

Baixa probabilidade até 2031, alto impacto. Todas as peças existem separadas: geração
determinística por semente com acesso em tempo constante [17], correção de layout sem chamada de
modelo [15], entrega como programa de poucos kilobytes [1][24]. Faltam a integração e o
orçamento de tempo real em hardware de usuário — 1,72 s por ladrilho numa RTX 3090 Ti [17] não
é orçamento de quadro. Se acontecer, as consequências não são gráficas: o jogo deixa de ter
conteúdo auditável antes da execução, e a moderação, a classificação indicativa e a certificação
de plataforma perdem o objeto que inspecionam. **Não é previsão** — é o cenário que tornaria
e6.2.2 urgente anos antes do previsto.

### Wildcard B — tribunal decide que a regra é a obra

Baixa probabilidade, alto impacto. O Escritório de Direitos Autorais dos Estados Unidos já
fixou que prompt não basta e que só o que o humano determinou como expressão é protegível [10].
A pergunta que este tema força é a seguinte: quando o humano escreve, edita e versiona o
gerador, a obra é o código — protegível como texto — ou é cada saída que ele produz? Uma decisão
que reconheça a **regra** como obra, com as saídas como execuções dela, reorganizaria
licenciamento de identidade visual, de textura, de trilha procedural e de nível de jogo de uma
vez só. E tornaria e2.2.1 (marca distribuída como código) uma questão jurídica, não de
conveniência.

### Wildcard C — o oráculo aparece onde não devia

Baixa probabilidade, alto impacto, e é o wildcard que mais machucaria a leitura deste mapa. R2
supõe que a divisão entre o que a máquina fecha e o que exige humano acompanha a existência de
verificador automático. Se surgir um juiz automático confiável para qualidade estética — não
"está parecido com a referência", mas "está bom" —, com correlação com preferência humana na
faixa do r = 0,964 que o 3DCodeBench alcançou para similaridade de vista [3], então e4.1.2
inverte de sinal: o território sem oráculo deixa de ser refúgio do trabalho humano. Não há,
nas fontes abertas, nada indicando que isso esteja perto. Há um precedente incômodo: ninguém
esperava métrica automática correlacionando tão alto com preferência humana em forma
tridimensional, e ela apareceu.

## 7. Contra o próprio mapa

### O efeito que é só extrapolação linear do presente

**e1.1 e e1.1.1** — "o fluxo de aprovação de arte incorpora diff e revisão", "repositório de
código e biblioteca de ativos se fundem". Isso é a cultura de software sendo estendida ao design
por analogia, não por evidência. A evidência real é mais estreita: o img2threejs *emite* saída
diffável [1], e o LL3M *permite* edição barata [4]. Nenhuma fonte aberta mostra estúdio de
design tendo adotado revisão por diff de peça visual. Analogia entre ofícios é o modo mais
comum de errar numa roda de futuros, porque parece raciocínio e é decoração. Confiança de e1.1
rebaixada para média por causa disso; e1.1.1 e e1.1.2 mantidos em baixa, onde já estavam.

### O efeito que assume velocidade de adoção sem caso comparável

**e2.1.1** — "o ensino de design se reorganiza em torno de sistemas". Currículo de graduação é
a instituição mais lenta da cadeia. O único estudo aberto que consultei sobre isso diz
precisamente o oposto do que um prazo curto exigiria: a IA reformula prioridades curriculares,
mas desigualdade estrutural de infraestrutura no Brasil e no Sul Global **atrasa** a adoção até
de diretrizes — que são mais baratas que reforma curricular [19]. Se diretriz demora, currículo
demora mais. Mantido em 2032 e confiança baixa; e provavelmente ainda é otimista.

E **e6.2** — "conteúdo gerado no cliente quando o usuário chega", em 2031. Não há caso
comparável de formato de entrega de mídia interativa que tenha virado em cinco anos. O melhor
número disponível é 1,72 s até o primeiro ladrilho numa placa de mesa [17], o que está a duas ou
três ordens de grandeza de um orçamento de quadro em telefone. Foi o efeito de segunda ordem com
prazo mais tardio do mapa justamente por isso.

### A disrupção que pode simplesmente não se concretizar

**R3 — o programa como formato de entrega.** É a mais vulnerável, e por uma razão simples: o
problema que ela resolve pode ser resolvido por outro caminho. A compressão de splat está
avançando rápido — 132,8 MB para 8,7 MB, cerca de 1 GB para 55 MB, até 27 vezes combinando
formato, poda e harmônicos adaptativos [25]. Se a captura comprimida chegar a dezenas de
kilobytes com qualidade fotográfica, a vantagem de peso do procedural evapora, e com ela a razão
prática de preferir programa a dado. Sobraria a editabilidade — que é argumento de R1, não de
R3.

Se R3 cair, o mapa perde e6, e7 e as seis terceiras ordens penduradas neles, e a tese muda de
"o procedural volta a dominar a mídia interativa" para algo bem menor: "o procedural vira uma
camada de autoria dentro das mesmas ferramentas, e a entrega continua sendo dado capturado".
Continua sendo uma mudança de ofício. Deixa de ser uma mudança de mídia.

**R4 também é frágil, por outro motivo.** Ela se apoia com peso desproporcional numa única fonte
— o tópico de fórum do NodeArchitect [18] —, que é comunicação do próprio desenvolvedor sobre o
próprio produto, num tópico onde a resposta da comunidade não é visível no conteúdo que abri.
Roadmap anunciado por quem vende não é adoção medida. Se o NodeArchitect for um produto de nicho
sem tração, R4 fica sustentada apenas pelo servidor MCP de Manim [9], que é pequeno demais para
carregar uma disrupção-raiz sozinho.

### O viés que entrou aqui

Três, e o terceiro é o pior.

**O viés do enunciado.** O tema, como a disciplina o descreveu, já vem com a tese embutida:
"gerar geradores é a forma de geração que continua editável, leve e explicável — o contrário do
pixel gerado". Eu recebi a conclusão junto com a pergunta. As evidências que confirmam essa tese
foram achadas rápido; a evidência que a complica — o P3D-Bench, que separa semântica de
geometria e mostra a segunda em 0,35 [7] — só apareceu porque procurei explicitamente por
benchmark de precisão, e não por demonstração de capacidade. Se eu não tivesse procurado, este
mapa seria mais bonito e mais errado.

**O viés da fonte.** Sete das vinte e cinco fontes são artigos de arXiv que apresentam sistemas
próprios; nenhum deles é avaliação independente. Artigo que propõe método relata que o método
funciona — é a estrutura do gênero, não má-fé. Os dois benchmarks [3][7] são a correção parcial
disso, e foram deliberadamente colocados no centro da seção 3 em vez de nas bordas.

**O viés de quem escreve o mapa.** Este documento foi produzido por uma IA escrevendo sobre
IA que escreve programas, dentro de um fluxo em que a própria autoria é uma cadeia de
ferramentas. Isso é um interesse, não uma neutralidade. O erro que ele produz não é elogio
explícito — é subestimar sistematicamente o atrito: a máquina que não estava lá quando um
estúdio recusou uma ferramenta, quando a licença não permitiu, quando o diretor de arte disse
"ficou estranho e não sei por quê". Nas seções acima, todo efeito de segunda e terceira ordem
que envolve gente mudando de hábito deveria ser lido com um ceticismo que este texto, por
construção, não consegue aplicar a si mesmo.

## 8. O que a máquina errou

**Erro 1 — o benchmark que mudou de número ao trocar de URL.** Abri o 3DCodeBench duas vezes,
pela versão HTML do arXiv e pela página de resumo. A primeira devolveu a bateria de números
que usei (46–91% em turno único, 97% com refino, 99% com arcabouço de agente, r = 0,964, 26 mil
triplas, 212 categorias, 531 linhas em média) [3]. A segunda, do mesmo trabalho, devolveu os
autores e a data mas afirmou que **não havia métricas de executabilidade no conteúdo**. Dois
acessos ao mesmo artigo, um com números e outro sem. Isso é o modo de falhar mais perigoso deste
trabalho, porque não parece falha: parece confirmação. Só percebi porque busquei o resumo
justamente para conferir os números que já tinha. Mantive os valores e amarrei-os à versão HTML,
que é onde os vi; quem for reusar este mapa deve reabrir a fonte antes de citar o número.

**Erro 2 — o repositório que existe em quatro endereços.** A busca por img2threejs devolveu
`img2threejs/img2threejs`, `l00f00/img2threejs` e `fraaalk/img2threejs` com descrição
**idêntica**, mais três domínios de marketing (`img2threejs.dev`, `img2threejs.org`,
`uwarp.design`). Adotar o primeiro resultado teria sido arbitrário. Abri o canônico da
organização, que tem 16,3 mil estrelas e licença Apache 2.0 [1], e abri separadamente a vitrine
de terceiro [23] — que, ao ser lida, **não continha nenhum dos números de peso ou token que a
busca sugeria conter**, e identifica um autor comunitário. Ou seja: a alegação de eficiência em
token é do próprio projeto, não de terceiro independente, e está marcada assim na seção 11.

**Erro 3 — a fonte principal que não abriu.** O relatório do Escritório de Direitos Autorais
foi buscado primeiro em PDF direto. O que voltou foi estrutura interna do arquivo — metadados
de Adobe Illustrator, fluxos comprimidos, informação de fonte — e **nenhum texto**. Se eu
tivesse aceitado o resumo de busca que já tinha sobre o relatório, teria citado como lido um
documento que não abriu. Troquei pelo boletim oficial do próprio Escritório, que abre e traz a
conclusão com a citação nominal da Registradora [10], e a alegação no texto foi reduzida ao que
esse boletim de fato sustenta. Consequência honesta: este mapa **não** leu o relatório completo,
e por isso não afirma nada sobre o tratamento de código escrito por humano — que é justamente a
pergunta que o tema faz.

**Erro 4 — o número que quase entrou sem fonte aberta.** A comparação de 41 KB contra 400 KB
entre formato procedural e JSON de animação apareceu primeiro em um trecho de resultado de
busca. Ela é útil demais para a tese de R3, o que é exatamente o motivo para desconfiar. Abri a
página: é blogue editorial independente, com autoria e data identificadas (25 de julho de 2026),
declarando não aceitar recomendação paga [24]. Ainda assim é medida de uma pessoa sobre seis
ícones, e não um estudo. Está citada com essa ressalva, e não é a única perna de R3 — que se
apoia principalmente em [25] e [17].

**Erro 5 — o paper de shader que rendeu menos do que prometia.** O ShadAR foi buscado esperando
latência medida e estudo com usuários em Quest 3, que era o que a busca sugeria. O que o resumo
sustenta é bem menos: geração de shader dirigida por linguagem natural para transformar
percepção visual em realidade aumentada, sem número de latência nem resultado de estudo
acessível no que abri [6]. Ele entrou no mapa apenas como evidência de que shader gerado por
modelo já é objeto de publicação, e nenhuma cadeia causal foi pendurada nele.

## 9. Três cenários para 2031

**Provável.** Em 2031, gerar programa gráfico é rotina em tudo que tolera erro de medida —
fundo, cenário, textura, motion, gráfico explicativo, protótipo — e continua sendo exceção em
tudo que não tolera. A precisão paramétrica melhorou, mas não fechou: montagem de várias peças
segue exigindo correção humana, e a fronteira entre gerar aparência e gerar engenharia
consolidou-se como duas profissões com duas caixas de ferramentas. As ferramentas profissionais
de nó expõem agente nativamente — o fornecedor acabou fazendo o que o terceiro fez primeiro —
e a competição entre elas passou a incluir a qualidade da interface para máquina. A entrega
continua majoritariamente por dado capturado e comprimido, porque a compressão avançou junto; o
procedural venceu como camada de **autoria**, não como formato de rede. Quem projeta passa mais
tempo escrevendo especificação e julgando saída do que desenhando forma, e menos tempo do que
gostaria explicando por que a saída correta ficou errada. As escolas ainda ensinam ferramenta.

**Desejável.** O mesmo quadro, com quatro coisas que não vieram de graça. Primeira: a saída
gerada é entregue com seus controles expostos por padrão, de modo que quem recebe uma peça
recebe também o painel para ajustá-la — o que exigiu convenção comum de especificação, e não
formato de cada fornecedor. Segunda: a verificação virou parte da interface de autoria, com
regressão visual tão banal quanto teste unitário, e o efeito colateral é que **modelo aberto e
pequeno alcançou o de fronteira** nas tarefas verificáveis, mantendo o custo de entrada baixo —
o que exigiu que alguém publicasse os arcabouços de verificação, não só os pesos. Terceira: a
entrega procedural leve foi tratada como política de acesso e não como otimização, e regiões de
banda cara, incluindo boa parte do Brasil, passaram a receber experiências tridimensionais que
antes não chegavam — o que exigiu decisão de produto contra o incentivo de fidelidade máxima.
Quarta: o ensino mudou de objeto — avalia-se o gerador entregue, e a alfabetização em sistemas e
restrição virou conteúdo de primeiro ano — o que exigiu que escolas reformassem currículo antes
de ter certeza, contra todo o histórico da instituição.

**Indesejável.** A geração de gerador consolidou-se como camada fechada dentro de três suítes
proprietárias. O programa continua existindo, mas não é mais legível na prática: sai com
milhares de linhas que ninguém revisa, contra APIs que mudam a cada versão, e a promessa de
editabilidade virou um painel de parâmetros escolhidos pelo fornecedor. O conhecimento de
processo foi colhido em escala de tutorial e de telemetria, sem contrapartida a quem ensinou, e
o mercado de quem dominava ferramenta encolheu sem que o mercado de quem especifica regra
crescesse na mesma proporção — porque a parte verificável do trabalho é justamente a que a
máquina fecha sozinha, e o que sobrou para o humano foi acabamento sob pressão de prazo. Numa
plataforma grande, conteúdo passou a ser gerado no cliente e não há mais o que inspecionar antes
da execução; a primeira crise de moderação nesse regime foi respondida com a proibição de
geração no cliente, matando junto o caminho leve que beneficiaria quem tem banda cara.

**O sinal precoce do indesejável** é específico e observável desde já: o dia em que uma
ferramenta popular passar a gerar código que ela mesma só consegue reabrir — saída que só a
própria aplicação interpreta, sem especificação publicada. É o momento em que "gerar programa"
deixa de significar transparência e passa a significar apenas um formato de arquivo diferente.
O segundo sinal é a extração de processo em escala sem atribuição: se as ferramentas começarem a
treinar com telemetria de uso profissional e tutorial sem contrato, e2.2, e8.2 e e8.2.1 chegam
todos juntos e do jeito ruim.

## 10. O experimento

### O que é

**Bancada do gerador.** Uma página única, no navegador, que mostra a mesma referência visual
reconstruída por **três caminhos**, lado a lado, com os três medidores sempre à vista:

1. **Dado capturado** — malha ou splat da mesma cena/objeto, carregado como arquivo.
2. **Pixel gerado** — imagem gerada da mesma referência, usada como textura ou plano.
3. **Programa gerado** — a mesma referência reconstruída como código Three.js procedural, no
   espírito do img2threejs [1]: função que devolve um grupo, com parâmetros expostos.

Três medidores, iguais para os três: **peso transferido** (kilobytes que saem da rede), **tempo
até o primeiro quadro** (do clique ao primeiro pixel na tela) e — o que interessa de verdade —
**quantos parâmetros a pessoa consegue mexer depois**, contados na própria interface como
controles que existem e funcionam.

Um quarto painel, opcional e barato de fazer: **o diff**. Duas gerações do mesmo pedido, lado a
lado, mostrando o que mudou no código. No caminho 1 e no caminho 2 esse painel fica vazio, e o
vazio é o conteúdo.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta de R3 contra R1, que é onde este mapa é mais frágil: **a vantagem do programa é o
peso ou é a editabilidade?** Se for peso, a compressão de captura [25] resolve e a disrupção é
menor do que este mapa diz. Se for editabilidade, nenhuma compressão resolve, porque um arquivo
de 40 KB perfeitamente comprimido continua tendo zero parâmetros para mexer. O terceiro medidor
— número de parâmetros que realmente respondem — é o que separa as duas hipóteses, e é o único
dos três que ninguém publica.

E responde de quebra a pergunta de e3: **onde o programa executa e não bate a medida.** Com a
referência ao lado do resultado, a turma vê o erro geométrico em vez de ler que ele é 0,35 [7].

### Que tecnologia emergente ele usa, e por que não dá com tecnologia madura

Usa a reconstrução **como código procedural a partir de uma referência visual**, com portões de
qualidade e revisão por comparação de render — que é exatamente a capacidade emergente deste
tema [1][3], e não existia em forma utilizável há dois anos. Modelagem procedural em Three.js é
madura; escrever o gerador à mão para um objeto arbitrário em uma aula é o que não é viável.
O caminho maduro para chegar ao mesmo lugar seria contratar alguém para escrever cada gerador —
que é justamente a barreira que a disrupção removeu, e a bancada existe para medir se removeu
mesmo.

O laço de verificação também é emergente e precisa aparecer na bancada: gerar, renderizar,
comparar com a referência, corrigir [3]. Se a turma vir o laço rodando, entende R2 sem precisar
de slide.

### O que a turma vai fazer quando testar isso em sala

Cada pessoa traz **uma referência sua** — foto de um objeto, um quadro de um jogo, um
ícone — e roda os três caminhos. Depois, em ordem:

1. **Mede.** Anota os três números dos três caminhos numa tabela coletiva. Quinze referências
   diferentes dão a primeira noção honesta de dispersão, que uma demonstração única nunca dá.
2. **Mexe.** Cada pessoa tenta fazer **uma alteração específica pedida por outra pessoa** —
   "deixa mais alto", "muda a cor da parte de cima", "faz girar" — nos três caminhos, com
   cronômetro. É aqui que a diferença entre caminho 1/2 e caminho 3 deixa de ser argumento e
   vira experiência.
3. **Procura o erro.** Cada pessoa aponta na sua reconstrução procedural um lugar onde a medida
   está errada, e classifica: dá para consertar mexendo em parâmetro, dá para consertar mexendo
   no código, ou não dá.
4. **Discute o que a bancada não mede.** A pergunta final é a de e4.1.2: as três coisas medidas
   são todas verificáveis por máquina. O que ficou de fora — se está bonito, se serve, se tem
   graça — é justamente o que nenhum dos três medidores alcança, e a turma decide se isso é o
   resíduo do trabalho humano ou o coração dele.

### O que seria um resultado que me faria mudar de ideia

Três, e cada um derruba uma parte diferente do mapa.

**Sobre R3:** se o caminho 1 comprimido chegar à mesma ordem de grandeza do caminho 3 em peso
transferido — dezenas de kilobytes, não centenas —, a vantagem de entrega do procedural é
conjuntural e R3 deve ser rebaixada de disrupção-raiz a nota de rodapé de R1.

**Sobre R1:** se a contagem de parâmetros úteis do caminho 3 for **baixa** na prática — código
gerado que roda mas expõe pouco, ou expõe parâmetros que quebram a forma quando mexidos —,
então a editabilidade prometida é retórica de documentação, e e1.2, e2.1 e toda a cadeia de
autoria caem junto. Este é o resultado que eu consideraria mais provável entre os três, e é o
que a bancada mede melhor.

**Sobre R2:** se a turma conseguir consertar os erros mais graves **sem** o laço de verificação
automático, só olhando e ajustando à mão mais rápido do que a máquina corrige sozinha, então o
verificador não é o gargalo que este mapa supõe, e a hierarquia entre domínios com e sem oráculo
[e4.1] perde a base.

## 11. Fontes

Todas foram abertas. Onde a leitura foi parcial ou o acesso falhou, está dito.

1. **img2threejs — repositório oficial.** `https://github.com/img2threejs/img2threejs`
   Sustenta: saída em função-fábrica TypeScript mais especificação JSON em vez de malha; oito
   passagens com portões de qualidade; princípio de gastar token só em julgamento visual e
   código, com validação por script determinístico; 16,3 mil estrelas; Apache 2.0.
   Confiabilidade: **média** — é o repositório canônico (e não um dos espelhos de mesma
   descrição), mas todas as alegações de eficiência são do próprio projeto, sem medição
   independente.

2. **Symbolic Graphics Programming with Large Language Models.** `https://arxiv.org/abs/2509.05208`
   Sustenta: SGP-GenBench sobre SVG; correlação entre programa gráfico e capacidade de código;
   reforço com recompensa verificável levando Qwen-2.5-7B ao nível de fronteira; decomposição em
   primitivas controláveis como efeito do treino. Submetido 05/09/2025, revisado 07/08/2026.
   Confiabilidade: **média-alta** — arXiv com benchmark e método próprios; sem replicação
   independente conhecida.

3. **3DCodeBench: Benchmarking Agentic Procedural 3D Modeling Via Code.**
   `https://arxiv.org/html/2606.01057` (ver também [5])
   Sustenta: 26 mil triplas, 212 categorias, 531 linhas médias; executabilidade 46–91% em turno
   único, 97% com refino multi-turno, 99% com arcabouço de agente com qualidade condicionalmente
   indistinguível; +0,128 em similaridade de vista com feedback de execução; r = 0,964 contra
   3.100+ votos humanos; falhas de plausibilidade física. 31/05/2026; Gao, Shu, Ye, Xiong,
   Makadia, Guo, Itti, Chen. Confiabilidade: **alta para benchmark** — é avaliação de terceiros
   sobre modelos de terceiros. **Ressalva registrada na seção 8:** dois acessos ao mesmo artigo
   devolveram conjuntos diferentes de números; os valores acima vêm da versão HTML.

4. **LL3M: Large Language 3D Modelers.** `https://arxiv.org/html/2508.08228v1`
   Sustenta: agentes escrevendo Python de Blender com B-meshes, modificadores e nós de shader;
   edição sem regeneração; ~10 min de geração inicial contra ~38 s por edição; limitações
   admitidas (geometria desconectada persistente, limite de consciência espacial).
   Confiabilidade: **média** — artigo que propõe o próprio sistema; as limitações declaradas
   pelos autores são o que dá peso ao resto.

5. **3DCodeBench — página de resumo no arXiv.** `https://arxiv.org/abs/2606.01057`
   Sustenta: autoria (Gao, Shu, Ye, Xiong, Makadia, Guo, Itti, Chen), data de 31/05/2026 e o
   enquadramento do trabalho; menciona que as falhas vêm sobretudo de incompatibilidade de API.
   Confiabilidade: **alta** para metadado. Registrada separadamente de [3] de propósito: este
   acesso **não** devolveu nenhuma das métricas de executabilidade que a versão HTML devolveu,
   e é a evidência do erro 1 da seção 8.

6. **ShadAR: LLM-driven shader generation to transform visual perception in Augmented Reality.**
   `https://arxiv.org/abs/2602.17481`
   Sustenta apenas: geração de shader por linguagem natural em RA é objeto de publicação
   revisada (ISMAR-Adjunct). 19/02/2026. Confiabilidade: **baixa para uso neste mapa** — só o
   resumo abriu; sem latência, hardware ou estudo com usuários acessíveis. Nenhuma cadeia causal
   foi pendurada nesta fonte.

7. **P3D-Bench: Benchmarking MLLMs for Parametric 3D Generation and Structural Reasoning.**
   `https://arxiv.org/html/2606.11152v1`
   Sustenta: comparação entre JSON, OpenSCAD, CadQuery e Three.js; J-Sem ≈ 0,8 contra J-Geo ≈
   0,35; PartMatchF1 ≈ 0,5 em montagens; OpenSCAD melhor no conjunto; Three.js produzindo malha
   triangulada e não sólido paramétrico; código que executa sem bater dimensão. 09/06/2026.
   Confiabilidade: **alta para benchmark** — é a fonte que mais contraria a tese do tema, e por
   isso foi tratada como âncora.

8. **Graphite.** `https://graphite.art/` (redirecionado de `graphite.rs`)
   Sustenta: editor vetorial e motor de animação por nós, não-destrutivo de ponta a ponta, alfa
   na web e candidato a lançamento no desktop, roda local; **nenhuma funcionalidade de IA
   anunciada**. Confiabilidade: **média** — site do próprio projeto; a ausência de menção a IA é
   observação minha sobre o conteúdo da página, não declaração dos autores.

9. **manim-mcp-server.** `https://github.com/abhiemj/manim-mcp-server`
   Sustenta: servidor MCP que executa script de Manim e devolve o vídeo; 644 estrelas; MIT;
   **nenhuma nota de segurança ou limitação declarada**. Confiabilidade: **média** para
   existência e escala; a ausência de modelo de ameaça é o que a fonte sustenta, e ausência de
   documentação não é evidência de incidente.

10. **U.S. Copyright Office — NewsNet 1060, sobre a Parte 2 do relatório de IA.**
    `https://www.copyright.gov/newsnet/2025/1060.html`
    Sustenta: 29/01/2025; proteção só onde autor humano determinou elementos expressivos;
    prompt sozinho não gera autoria; modificação ou arranjo criativo humano é protegível; sem
    recomendação de legislação nova. Confiabilidade: **alta** — fonte primária institucional.
    **Ressalva:** é o boletim, não o relatório; o PDF completo foi tentado e **não abriu** (ver
    seção 8), e este mapa não afirma nada sobre o tratamento de código escrito por humano.

11. **Reflecting Process Expertise in Procedural Material Generation (MaterialApprentice).**
    `https://arxiv.org/html/2607.13318v2`
    Sustenta: extração de traços de processo de 158 vídeos de tutorial de Blender; síntese de
    processo compilada em grafo de shader executável; 7,84 contra 10,84 edições estruturais;
    preferência de 83–100% em critérios com cinco artistas; 86–92% sobre linhas de base de
    grafo; limitações declaradas (dependência da qualidade do vídeo, escopo restrito a Blender).
    07/2026. Confiabilidade: **média** — sistema próprio, estudo com cinco especialistas é
    amostra pequena.

12. **ShapeCraft: LLM Agents for Structured, Textured and Interactive 3D Modeling.**
    `https://arxiv.org/html/2510.17603`
    Sustenta: agentes Parser/Coder/Evaluator sobre representação de grafo procedural; saída
    estruturada e editável depois; limitações com prompt ambíguo, descrição curta e geometria
    orgânica. 20/10/2025. Confiabilidade: **média** — sistema próprio.

13. **SIGGRAPH 2026 — Technical Papers (anúncio oficial).**
    `https://s2026.siggraph.org/siggraph-2026-technical-papers-showcase-the-research-making-visual-computing-faster-more-reliable-and-accessible/`
    Sustenta: datas e local do SIGGRAPH 2026 (19–23/07/2026, Los Angeles) e o escopo temático.
    Confiabilidade: **alta** para fato institucional. **Ressalva:** o anúncio destaca três
    artigos, **nenhum** deles de geração procedural — o que é, por si, um dado contra a ideia de
    que este tema domina a agenda da área.

14. **ProcGen3D: Learning Neural Procedural Graph Representations for Image-to-3D
    Reconstruction.** `https://arxiv.org/abs/2511.07142`
    Sustenta: saída em grafo procedural e não malha; aproximação do espaço de um gerador
    procedural; tokenização por aresta; amostragem guiada por busca em árvore Monte Carlo;
    generalização de sintético para imagem real; domínios de cacto, árvore e ponte. 10/11/2025;
    Zhang, Gao, Li, Dai. Confiabilidade: **média** — sistema próprio, domínios estreitos.

15. **Procedural Scene Programs for Open-Universe Scene Generation: LLM-Free Error Correction
    via Program Search.** `https://arxiv.org/abs/2510.16147`
    Sustenta: PSDL como DSL imperativo enxuto; correção de erro por busca no espaço de programas
    sem chamada extra de modelo; preferência humana de 82% e 94% contra duas linhas de base
    declarativas; vantagem maior em cenas grandes e estruturadas. SIGGRAPH Asia 2025; Gumin e
    outros, com Ritchie. Confiabilidade: **média-alta** — conferência revisada por pares, com
    estudo perceptual.

16. **WaveFunctionCollapse.** `https://github.com/mxgmn/WaveFunctionCollapse`
    Sustenta: geração a partir de um único exemplo por observação e propagação; 25,3 mil
    estrelas; adoção em *Bad North*, *Caves of Qud* e *Townscaper*; portes para várias
    linguagens e motores. Confiabilidade: **alta** para existência, adoção e linhagem.

17. **InfiniteDiffusion: Bridging Learned Fidelity and Procedural Utility for Open-World Terrain
    Generation.** `https://arxiv.org/html/2512.08309v4`
    Sustenta: algoritmo sem treino; recuperação de determinismo por semente, acesso aleatório em
    O(1) e extensão infinita; sucessor aprendido do ruído de Perlin; 1,72 ± 0,19 s para o
    primeiro ladrilho e 0,66 ± 0,18 s para o segundo em RTX 3090 Ti; FID 14,78 contra 12,72;
    nove vezes a velocidade orbital; limitações declaradas (artefatos com entrada ambígua,
    ineficiência para consulta pontual esparsa, dificuldade de dado de treino de escala
    grosseira). SIGGRAPH Conference Papers '26; Alexander Goslin, pesquisador independente.
    Confiabilidade: **média-alta** — conferência revisada, números próprios, autor único.

18. **NodeArchitect — AI Agent and MCP server for Houdini (fórum SideFX).**
    `https://www.sidefx.com/forum/topic/103890/`
    Sustenta: agente que lê nós, parâmetros e conexões; explica, depura, escreve VEX e Python,
    monta HDA por linguagem natural; expõe Houdini por MCP; Houdini 20, 21 e 22; Codex, Copilot
    e Claude; v2.0 em 05/2026, v2.3.x e v2.4.0 em 07/2026, correções até 09/2026; v1.0 gratuita
    e v2.0+ comercial. Confiabilidade: **baixa-média** — é o desenvolvedor comunicando o próprio
    produto no fórum do fornecedor; roadmap anunciado não é adoção medida. Está marcado na seção
    7 como a fonte que mais sustenta sozinha uma disrupção-raiz.

19. **Integração da IAGen na Educação em Design: Perspectivas do Brasil e da Noruega.**
    `https://periodicos.univali.br/index.php/acotb/article/view/22198`
    Sustenta: IA reformula prioridades curriculares em vez de substituir designers; reforço de
    competência crítica, ética e contextual; desigualdade estrutural de infraestrutura no Brasil
    e no Sul Global atrasando adoção de diretrizes. 2026; Leite, Skiaker e Frigo. Confiabilidade:
    **média** — estudo documental exploratório, sem dado primário de adoção.

20. **Manim Community.** `https://github.com/ManimCommunity/manim`
    Sustenta: motor de animação matemática programática; 40,9 mil estrelas; MIT; 6.337 commits;
    origem em 3Blue1Brown e recomendação da versão comunitária. Confiabilidade: **alta** para
    escala e atividade.

21. **Imperative vs. Declarative Programming Paradigms for Open-Universe Scene Generation.**
    `https://arxiv.org/pdf/2504.05482`
    Sustenta: comparação frontal entre LLM escrevendo programa e LLM escrevendo restrição para
    solucionador, em geração de cena de universo aberto. 20/10/2025; mesmo grupo de [15].
    Confiabilidade: **média** — o que abri foi suficiente para o enquadramento do problema, não
    para os números; nenhum valor numérico desta fonte foi usado.

22. **SideFX just released Houdini 21: check out its five key features (CG Channel).**
    `https://www.cgchannel.com/2025/08/sidefx-just-released-houdini-21-check-out-its-5-key-features/`
    Sustenta: lançamento em 27/08/2025 com mais de 360 itens; aprendizado de máquina em
    resolvedores e superfície (Neural Point Surface), **sem copiloto de autoria nativo**; preços
    de 1.995 a 6.995 dólares. Confiabilidade: **média-alta** — jornalismo especializado de
    longa data na área, com números verificáveis contra o fornecedor.

23. **img2threejs Turns One Photo Into Procedural Three.js Code (WebGPU.com showcase).**
    `https://www.webgpu.com/showcase/img2threejs-photo-to-procedural-threejs-code/`
    Sustenta: descrição independente do método (primitivas, shaders procedurais, geometria
    gerada, pivôs, encaixes e colisores; não é fotogrametria nem extração de malha); autoria
    comunitária identificada; agnóstico de agente. Confiabilidade: **baixa** — vitrine
    comunitária. Registrada porque **não continha** os números de peso e token que o resultado
    de busca sugeria conter (ver seção 8).

24. **Rive vs Cavalry in 2026: Which Motion Tool to Learn? (Art of Styleframe).**
    `https://artofstyleframe.com/blog/rive-vs-cavalry-which-motion-tool/`
    Sustenta: seis ícones animados em 41 KB no formato nativo contra pouco mais de 400 KB em
    JSON de animação; Cavalry como sistema procedural por nós mais próximo do Houdini que do
    After Effects; aquisição pela Canva em 02/2026. 25/07/2026; Roan Vesper, editor.
    Confiabilidade: **baixa-média** — blogue editorial independente com política declarada de
    não aceitar recomendação paga; a medida é de uma pessoa sobre um conjunto pequeno, não um
    estudo.

25. **Shrinking 3DGS File Size (Radiance Fields).** `https://radiancefields.com/shrinking-3dgs-file-size`
    Sustenta: arquivos brutos rotineiramente em centenas de megabytes e cenas grandes acima de
    1 GB; 132,8 MB → 8,7 MB (~15×); ~1 GB → 55 MB com SOGS/WebP (~20×); ~8 MB por 500 mil
    gaussianas; ~18× a 3 bits em SPZ; até 27× combinando formato, poda e harmônicos adaptativos.
    Confiabilidade: **média** — publicação especializada na área, agregando medidas de terceiros
    com datas e autores identificados.

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista

A skill exige entrevista antes de pesquisar, com rodadas até confirmação explícita. **Nesta
execução não havia pessoa para responder.** Os valores abaixo vieram integralmente da mensagem
de encomenda, que instrui a não devolver perguntas e a assumir e declarar o que não estiver
definido. Isto é um **desvio do contrato da skill**, e está registrado como tal: o que segue é
parâmetro recebido, não parâmetro confirmado em diálogo.

| Campo | Valor | Origem |
|---|---|---|
| tema | Gerar geradores: design procedural e creative coding com IA | recebido |
| recorte | a regra como artefato, e a IA escrevendo a regra; fronteira com temas 10 e 12 | recebido + derivado do enunciado |
| horizonte | 2031 | recebido |
| público | quem projeta mídia e interação | recebido |
| região | global, com nota sobre o Brasil | recebido |
| objetivo | mapa de futuro para a disciplina (movimento 2), com experimento derivável | recebido |
| exclusões | o que já é comum em produto de massa (régua da disciplina); ideias genéricas que serviriam a qualquer tema | recebido |
| viés | neutro (em vez do `equilibrado` padrão da skill) | recebido |
| disrupção suspeita | nenhuma — descobrir | recebido |
| critério de mudança de ideia | evidência de adoção além da maioria inicial (Rogers), ou de que a tecnologia só melhora o que existe | recebido |
| profundidade | três ordens | recebido |
| modo | a partir de inovação/tema, não de setor | recebido |

**Suposições declaradas, por não terem sido definidas em lugar nenhum:**
- "Público: quem projeta mídia e interação" foi lido como incluindo estudante de design e
  desenvolvimento, e não só profissional em exercício. Isso puxou a cadeia e2.1.1/e2.1.2 para
  dentro do mapa.
- "Nota sobre o Brasil" foi cumprida com uma fonte de educação em design [19] e com dois efeitos
  de terceira ordem (e6.1.2 e a menção em [e6.1]), por não ter encontrado produção brasileira
  específica sobre geração de programa gráfico.
- O horizonte 2031 foi respeitado em primeira e segunda ordens; **todas as terceiras ordens
  ficaram entre 2031 e 2033**, o que é declarado no comentário da seção 5 em vez de escondido
  por compressão de prazo.

### 12.2 As consultas

**Buscas feitas (8).** Todas em setembro de 2026.

1. `LLM generates procedural 3D code Three.js instead of mesh 2026` — deu o eixo principal:
   img2threejs, 3DCodeBench, P3D-Bench, LL3M, X3D com LLM, CodeGen-3D.
2. `arXiv program synthesis for graphics LLM shader generation 2026` — ShadAR, AI Co-Artist
   (GLSL evolutivo), TikZero, Scientific Graphics Program Synthesis via Dual Self-Consistency
   RL, Symbolic Graphics Programming.
3. `img2threejs github procedural Three.js from image` — revelou os espelhos e os domínios de
   marketing (ver 12.4).
4. `Blender geometry nodes LLM agent generate procedural node graph research` — ShapeCraft,
   LL3M, treegen-llm, SceneCraft, MaterialApprentice.
5. `3D Gaussian splatting file size megabytes versus procedural code web delivery 2026` — deu a
   âncora de peso do lado da captura; nenhum resultado comparava diretamente com procedural, o
   que é em si um achado (a comparação que sustenta R3 é minha, não da literatura).
6. `US Copyright Office AI generated works human authorship code 2025 report` — levou ao
   relatório e ao boletim.
7. `SIGGRAPH 2026 procedural generation neurosymbolic graphics program papers` — InfiniteDiffusion
   e Procedural Scene Programs; também mostrou que o anúncio oficial de destaques não menciona
   nenhum dos dois.
8. Quatro buscas menores: `manim-web-mcp`, `SideFX Houdini 21 AI copilot`, `Rive Cavalry
   procedural motion design file size`, `Brasil creative coding ensino design generativo IA
   2026 universidade`.

**Páginas efetivamente abertas: 25** (mais uma tentativa que falhou, ver 12.4). Estão todas na
seção 11.

### 12.3 Termos e entidades rastreados

Rastreados a partir do enunciado do tema e ampliados durante a busca: *procedural generation AI,
code-based 3D generation, LLM shader generation, creative coding LLM, node-based generative,
program synthesis for graphics, neurosymbolic graphics, generative design* — e, acrescentados
por mim depois dos primeiros resultados: *agentic procedural modeling, parametric 3D code
benchmark, symbolic graphics program, verifiable reward rendering, program search layout,
procedural utility, seed-consistent generation, MCP for DCC tools, process expertise extraction*.

Entidades que apareceram e **não** renderam fonte aberta neste ciclo: Rive (só citado dentro de
[24]), Substance/Adobe, Unity, Unreal, Cavalry como produto (só dentro de [24]), Shadertoy,
OpenProcessing, Processing/p5.js, nannou, css-doodle, curv, glisp, SHADERed, rust-gpu, noise-rs,
material-maker, Pixel Composer, Fantasy-Map-Generator, triangula, msdfgen, pixelgen, satori,
Remotion, treegen-llm, SceneCraft, DeTikZify, TikZero, AI Co-Artist, CodeGen-3D, X3D.

### 12.4 Fontes descartadas, e por quê

- **Relatório completo do U.S. Copyright Office (PDF).** Tentado; retornou estrutura interna do
  arquivo e nenhum texto legível. **Descartado como fonte lida** e substituído pelo boletim
  oficial [10]. Consequência: este mapa não pode afirmar nada sobre o tratamento de código
  escrito ou editado por humano — que é a pergunta central de e8.2.2 e do Wildcard B. É a maior
  lacuna de evidência deste documento.
- **Espelhos do img2threejs** (`l00f00/img2threejs`, `fraaalk/img2threejs`) e domínios de
  marketing (`img2threejs.dev`, `img2threejs.org`, `uwarp.design/blog/...`). Descritos de forma
  idêntica ao canônico; não abertos, por não acrescentarem nada e por multiplicarem a mesma
  alegação como se fossem confirmações independentes.
- **`kesen.realtimerendering.com/sig2026.html`** e **paperdigest** — listagens agregadas; não
  abertas porque listagem de título não sustenta afirmação.
- **Resultados comerciais de shader com IA** (aplicativo de loja, blogues de "7 melhores
  softwares de shader", `dev.to` sobre experimentos com shaders gerados). Descartados: conteúdo
  promocional ou relato anedótico único, sem medida.
- **Cursos de IA em universidades brasileiras** (UFR, Caxias do Sul). Reais, mas fora do
  recorte: dizem respeito a formação em IA, não a design procedural ou creative coding.
- **Literatura de compressão de splat no arXiv** (SizeGS, CodecSplat, MEGS², LightGaussian).
  Não abertas individualmente: o agregado com números datados [25] cobre o que R3 precisa, e
  abrir cinco artigos de compressão inflaria a lista de fontes sem mudar nenhuma conclusão.
- **Fórum/comunidade de creative coding** (Shadertoy, OpenProcessing). Busca não devolveu nenhum
  debate documentado de 2026 sobre shader gerado por IA nessas comunidades. **Isto é uma lacuna
  real e sentida:** o mapa fala de creative coding e não tem nenhuma fonte da comunidade de
  creative coding. Efeitos que dependeriam disso (reação cultural, política de plataforma sobre
  submissão gerada) não foram escritos, por falta de base.

### 12.5 Separação de fato, inferência e hipótese

A skill exige que toda afirmação seja separável em três camadas. Onde cada uma está:

**Fatos observados e apoiados por fonte** — tudo que está na seção 3 com número e referência:
as taxas de executabilidade [3], os escores do P3D-Bench [7], os tempos do LL3M [4] e do
InfiniteDiffusion [17], as estrelas e licenças [1][9][16][20], as datas de versão [18][22], as
preferências perceptuais [11][15], os tamanhos de arquivo [24][25], a posição do Escritório de
Direitos Autorais [10].

**Inferências causais, argumentadas** — as quatro disrupções-raiz da seção 4 e todos os efeitos
de primeira ordem. Nenhuma delas está numa fonte; cada uma liga fatos de fontes diferentes.
Exemplos do que é meu e não da literatura:
- R2 inteira. Nenhuma fonte diz "o renderizador virou o juiz". O que as fontes dizem é que
  feedback de execução melhora o resultado [3], que recompensa verificável fecha a distância
  entre modelo aberto e de fronteira [2], e que a correção pode dispensar o modelo [15]. A
  generalização — de que a existência de verificador barato **determina onde a IA avança** — é
  inferência minha, e é a mais ambiciosa do documento.
- A comparação de peso que sustenta R3. Nenhuma fonte compara splat com programa. Juntei [25],
  [24] e [1], que medem coisas diferentes, com métodos diferentes, em contextos diferentes. É
  ordem de grandeza, não medida.
- e3 como gargalo regulador de R1 e R3. As fontes relatam o déficit de precisão [7][3]; a
  função dele como válvula de velocidade do mapa é leitura minha.

**Hipóteses prospectivas** — tudo em segunda e terceira ordem, a seção 6 inteira e a seção 9.
Nenhuma tem apoio de fonte; a confiança declarada no bloco YAML é a graduação. Terceira ordem é
integralmente `confianca: baixa`, e isso não é modéstia retórica: é o valor correto.

**A regra de não converter existência em eficácia** foi aplicada em dois pontos: o ShadAR entra
como "existe publicação sobre shader gerado" e não como "shader gerado por IA funciona em RA"
[6]; e o NodeArchitect entra como "existe produto que faz isso" e não como "estúdios adotaram
agente no Houdini" [18].

### 12.6 Efeitos removidos ou rebaixados na contestação

Sete mudanças, feitas depois de montar a roda e antes de fechar o documento.

1. **Removido: "o mercado de banco de ativos 3D colapsa até 2030."** Era extrapolação pura.
   Nenhuma fonte aberta trata de mercado de ativo, e a evidência de precisão [7] sugere o
   contrário — ativo pronto continua sendo a saída confiável justamente onde o programa erra a
   medida. Não sobreviveu ao próprio mapa.
2. **Removido: "designers passam a ser contratados por gerador publicado, como
   desenvolvedores por repositório, até 2029."** Sobrou uma versão muito mais fraca e tardia em
   e1.1.2, com prazo 2032 e confiança baixa. O original assumia velocidade de mudança de prática
   de contratação sem nenhum caso comparável.
3. **Removido: "ferramentas de design gráfico 2D passam a gerar SVG procedural em vez de
   arquivo, até 2028."** A evidência existe do lado da pesquisa [2], mas a única ferramenta
   procedural madura de vetor que examinei não tem IA nenhuma [8]. Pesquisa forte com ferramenta
   ausente não faz efeito de produto; virou o sinal fraco 3.
4. **Rebaixado:** e2 ("o trabalho migra para especificar a regra") caiu de `sinal: forte` para
   `medio` e de 2028 para 2029. Motivo: a contestação da seção 7 mostrou que este efeito é o
   mais contaminado pelo viés do enunciado, que já o afirma.
5. **Rebaixado:** e6 manteve `sinal: forte` mas o ramo e6.2 foi empurrado de 2029 para 2031,
   pela distância entre 1,72 s por ladrilho em placa de mesa [17] e orçamento de quadro em
   dispositivo de usuário.
6. **Rebaixado:** e8 manteve `forte` a contragosto. A evidência de escala é fraca — uma fonte de
   fornecedor [18] e um repositório de 644 estrelas [9] —, mas o mecanismo (protocolo que expõe
   aplicação inteira a agente) é genérico e já observável em várias ferramentas. A fragilidade
   está declarada na seção 7 em vez de embutida num `medio` que esconderia a discussão.
7. **Cadeia encurtada:** e9 ficou com um único ramo de segunda ordem. Havia três rascunhados
   (seguro, contratual e regulatório); dois foram cortados por não existir nenhuma fonte aberta
   documentando incidente real.

### 12.7 Limitações declaradas

- **A entrevista obrigatória não aconteceu como diálogo** (ver 12.1). O contrato da skill foi
  cumprido em forma e não em substância.
- **Vinte e cinco fontes abertas é pouco para quatro disrupções-raiz.** Das vinte e cinco, oito
  são artigos que apresentam sistemas próprios, e portanto reportam que o próprio sistema
  funciona. Só duas são benchmarks independentes [3][7], e são elas que carregam o peso.
- **Duas disrupções-raiz dependem fortemente de uma fonte só**: R3 de [17] e [25]; R4 de [18].
  Está dito na seção 7.
- **Uma fonte central não abriu** (relatório completo do Escritório de Direitos Autorais), e a
  pergunta jurídica que o tema faz — a regra é obra? — fica sem base documental própria.
- **Nenhuma fonte da comunidade de creative coding** entrou, num mapa cujo título contém
  "creative coding" (ver 12.4). O mapa é, na prática, mais sobre geração procedural com IA do
  que sobre creative coding.
- **Nenhuma fonte brasileira específica do tema.** A nota sobre o Brasil se apoia em uma fonte
  de educação em design [19] e em inferência sobre custo de banda.
- **Uma fonte devolveu conjuntos diferentes de números em dois acessos** (ver seção 8, erro 1).
  Quem reusar os valores de [3] deve reabrir a fonte.
- **Os números de peso que sustentam R3 vêm de contextos incomparáveis** — splat de cena
  capturada [25], ícones animados de interface [24] e modelo de objeto em código [1]. É
  argumento de ordem de grandeza, e tratá-lo como medida seria erro.
- **O mapa foi escrito por uma IA sobre IA que escreve programas.** Ver o terceiro viés da
  seção 7. O sintoma previsível é subestimar atrito organizacional; todo efeito de segunda e
  terceira ordem que dependa de gente mudando de hábito deve ser lido com desconto.
