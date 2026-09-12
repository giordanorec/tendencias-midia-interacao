---
tema: "Gerar geradores: design procedural e creative coding com IA"
slug: gerar-geradores-design-procedural-e-creative-coding-com-ia
autor_login: vafs
zona_de_interesse: Criação e plataforma
data: 2026-09-11
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 10
efeitos_ordem_3: 10
tecnologias_citadas: [img2threejs, LL3M, 3D-GPT, Proc3D, 3DCodeBench, Procedural Compact Graph, Blender MCP, Blender geometry nodes, Infinigen, Houdini HDA, Houdini AI Assistant, WaveFunctionCollapse, Three.js, Graphite, Manim, ManimGL, Processing, p5.js, Shadertoy, GLSL, 3D Gaussian Splatting, Model Context Protocol]
fontes: 21
confianca: media
experimento: "O mesmo objeto, três vezes — bancada que compara malha capturada, imagem gerada e programa procedural pela edição que cada um aceita"
skill_usada: futurizacao-vafs
publico_ok: false
---

## 1. Resumo

Design procedural — produzir a regra em vez do artefato — tem décadas e está maduro em jogos,
VFX e creative coding. O que mudou entre 2023 e 2026 é quem escreve a regra: modelos de
linguagem e visão passaram a emitir o programa gráfico em si (script Blender, factory
Three.js, shader GLSL, grafo de nós), e isso já é mensurável — o 3DCodeBench, de maio de 2026,
avalia 12 VLMs sobre 26 mil pares de prompt e código procedural em 212 categorias de objeto, e
encontra executabilidade agregada de 0,702 em turno único, com 85% das falhas vindo de deriva
de API, não de erro de geometria. Deste ponto derivam três rupturas: o artefato 3D nasce como
programa e não como malha; o programa, sendo texto, vira o formato de entrega de mídia — contra
734 MB de uma cena Gaussian splat de referência, ou 10,4 MB no melhor compressor do survey da
área; e o agente passa a operar a ferramenta procedural inteira por protocolo, deslocando o
valor de quem sabe onde ficam os menus para quem sabe escrever o critério de aceite. O mapa
assume 2031 como horizonte, viés declaradamente neutro, e trata como sua aposta mais frágil
justamente a que o enunciado do tema dá por ganha: que gerar programa vence gerar pixel.

## 2. O tema

Design procedural é a prática de descrever um artefato pela regra que o produz, não pelo
artefato. Um mapa de cidade vira um conjunto de restrições de adjacência; uma textura vira uma
função de ruído; uma animação matemática vira um script. A ideia não é nova — o
WaveFunctionCollapse, de Maxim Gumin, é de 2016 e já entregou nível em jogo comercial (Bad
North, Caves of Qud, Townscaper, Dead Static Drive, Matrix Awakens); o Houdini vive disso há
duas décadas; o Processing tem 25 anos.

O que encosta em mídia e interação é a natureza do artefato resultante. Um programa é leve,
editável, diferenciável (no sentido de `diff`), inspecionável e parametrizável **depois** de
entregue. Um pixel gerado, não. Essa diferença sempre existiu, mas custava caro: alguém tinha
que escrever o gerador, e escrever gerador é trabalho de especialista. O que os últimos três
anos mudaram foi o custo dessa escrita.

Isto merece mapa de futuro e não levantamento de estado da arte por uma razão precisa: a
tecnologia madura aqui (procedural clássico) e a tecnologia emergente (IA escrevendo o
procedural) **apontam para consequências opostas** em pelo menos um eixo. O procedural clássico
concentrou poder em quem domina a ferramenta; o procedural escrito por máquina tende a
dissolver exatamente esse domínio. Um levantamento de estado da arte descreveria as duas como
"geração procedural" e perderia a disputa. Um mapa de futuro é obrigado a nomeá-la.

Onde passa a fronteira com os vizinhos: capturar realidade em 3D — fotogrametria, splats — é
dado medido, não regra, e é outro tema. Gerar vídeo e imagem como mídia acabada é outro tema.
Aqui o objeto é **a regra como artefato, e a máquina escrevendo a regra**.

## 3. Onde isso está hoje

### O que já existe e funciona

**Geração procedural clássica, em produção.** O repositório do WaveFunctionCollapse (25,3 mil
estrelas) lista jogos comerciais que geram nível com o algoritmo: Bad North, Caves of Qud,
Townscaper, Dead Static Drive, Matrix Awakens. Foi portado para C++, Python, Rust, Kotlin,
Java, JavaScript e adaptado a Unity, Unreal, Godot e Houdini.

**Mundos inteiros por regra, sem IA nenhuma.** O Infinigen, do Princeton Vision & Learning Lab
(7,3 mil estrelas, BSD-3-Clause), gera "infinitos mundos fotorrealistas" convertendo nós do
Blender em código Python, e é usado para produzir dataset de treino com verdade-terreno
(profundidade, segmentação). A documentação não menciona nenhuma integração com LLM: é
procedural determinístico.

**Creative coding como pedagogia estabelecida.** Processing existe desde 2001 e é descrito, na
apresentação de Moon Davé e Raphaël de Courville no FOSDEM 2026 (1º de fevereiro de 2026),
como "uma das ferramentas open-source mais usadas para creative coding". O próprio título da
palestra — "Processing: Creative Coding and the Future of Education" — mostra onde está a
discussão viva: não em provar que dá para ensinar com código, mas em preservar agência do
aprendiz num cenário de "sistemas opacos mas tentadores".

**Animação matemática programática.** O Manim tem duas linhagens: `3b1b/manim` (ManimGL, 93,8
mil estrelas, MIT), o projeto pessoal de Grant Sanderson, e `ManimCommunity/manim` (40,8 mil
estrelas), a edição comunitária criada em 2020 com o objetivo declarado de ser "mais estável,
melhor testada e mais amigável para começar". Nenhuma das duas menciona IA no README.

**Editores procedurais por nós fora do DCC tradicional.** O Graphite (27,2 mil estrelas, Rust,
MIT/Apache-2.0) une composição por camadas a design generativo por nós, roda no navegador via
WebAssembly, e está em alpha. Não menciona IA.

### O que existe e ainda não funcionou direito

**A IA escrevendo o programa gráfico.** A linhagem é curta e datável. O 3D-GPT (Sun, Han, Deng,
Wang, Qin e Gould; outubro de 2023) coordena três agentes para extrair parâmetros e acionar
geração procedural no Blender. O LL3M (Lu, Chen, Dinh, Lang, Holtzman e Hanocka; agosto de
2025) reformula geração de forma como **tarefa de escrita de código**: agentes planejam,
recuperam documentação (BlenderRAG), escrevem, depuram e refinam scripts Python que usam
B-meshes, modificadores e nós de shader. O repositório oficial (`threedle/ll3m`, 553 estrelas,
com licença acadêmica além da padrão) admite que "o LLM de código pode ocasionalmente alucinar
ou gerar resultados diferentes para o mesmo prompt", não suporta reverter alterações durante o
refinamento, e informa que o servidor do projeto foi descontinuado.

**A medição.** O 3DCodeBench (Gao, Shu, Ye, Xiong, Makadia, Guo, Itti e Chen; submetido em 31
de maio de 2026) é o primeiro benchmark de porte para isto: 26 mil prompts de texto e imagem
pareados com código procedural em 212 categorias de objeto, mais 12.963 instâncias no conjunto
autônomo de código 3D, avaliando 12 VLMs de Google, Anthropic e OpenAI. Os números importam
mais que a lista de modelos:

- Executabilidade agregada em **turno único: 0,702**; com feedback de erro em múltiplos turnos,
  **0,974**.
- Melhor executabilidade por modelo, no melhor nível de raciocínio: **0,910**; o segundo,
  0,906.
- **"~85% das falhas são erros de deriva de API do Blender 4.x para 5.0"** — isto é, a maioria
  das falhas não é de concepção de forma, é de versão de biblioteca.
- O que sobra depois de compilar ainda é ruim: os modelos "frequentemente produzem partes
  desconectadas e alinhamentos estruturais incorretos", com "fragmentos geométricos
  desconectados" e "primitivas simplistas, flutuantes".

**A tentativa de consertar a representação.** O Proc3D (Raji, Petrangeli, Gadelha, Shen,
Bhattacharya e Wu; 18 de janeiro de 2026) propõe trocar código verboso por um **grafo compacto
procedural (PCG)**, nativo de linguagem e agnóstico de motor. Os números reportados: **702
tokens** para representar um objeto em PCG contra **3.403 no Infinigen e 6.048 em Blender**;
taxa de compilação de **89% para PCG contra 0–30%** nas representações alternativas testadas;
edição paramétrica **400× mais rápida** que regeneração completa (0,01 s contra mais de 8 s); e
alinhamento ULIP de 0,15 contra 0,11 do SDFusion. Os baselines são SDFusion, AutoSDF, Shap-E,
LLaMA-Mesh, LGM e 3D-Premise.

**Imagem para programa, no lugar de imagem para malha.** O `img2threejs` (15,8 mil estrelas,
Apache-2.0, v2.0.0, 102 commits, 51 issues abertas) reconstrói o objeto de uma foto de
referência como **código Three.js procedural** em TypeScript — uma factory que devolve um
`THREE.Group` mais uma especificação JSON, ambos texto, inspecionáveis e diferenciáveis —, com
hierarquia de runtime (pivôs, sockets, colliders) pronta para animar. O que distingue o projeto
não é o gerador, é o **portão**: "todo detalhe precisa mapear para um componente real ou uma
entrada de material, e um portão estrito de qualidade bloqueia a geração até que o inventário
esteja completo". A economia declarada é de token: scripts Python determinísticos fazem
validação e extração de PBR, e "os tokens do modelo vão para uma coisa só: olhar uma folha
lado a lado e decidir passa ou não passa". O próprio README declara o limite: "uma única
imagem não pode revelar os lados ocultos nem garantir geometria exata".

**Shader por seleção, não por escrita.** O AI Co-Artist (Yuksel e Sawaf, aiXplain, 27 de
novembro de 2025) evolui animações GLSL por mutação e cruzamento dirigidos por LLM, com o
usuário escolhendo por estética, não escrevendo código. Estudo com 50 participantes (30
novatos, 20 experientes), tarefas de 25 minutos em ordem aleatória contra o Shadertoy sem IA:
novatos criaram **4,2 shaders** com a ferramenta contra **0,6**; experientes, **6,8 contra
2,9**; tempo até a primeira saída viável "reduzido em mais de 60% para os dois grupos";
satisfação **4,7/5 contra 2,8/5**; erros de compilação em menos de 3% das gerações após
repetições.

**O agente operando a ferramenta.** O conector mais popular, `ahujasid/blender-mcp` (28,2 mil
estrelas, MIT, 199 commits), expõe o Blender a clientes MCP — e o README diz textualmente:
"This is a third-party integration and not made by Blender". Existe também um servidor MCP
oficial mantido no Blender Lab, cuja documentação avisa que o servidor "vai executar código
gerado por LLM dentro do Blender sem nenhuma guarda", recomendando máquina virtual. No Houdini,
o "Houdini AI Assistant" — hospedado no fórum oficial da SideFX mas **feito por um
desenvolvedor independente** (radu cius), versão 0.1.6 em junho de 2026, vendido pelo Gumroad —
lê a cena, explica redes de nós, depura VEX e monta HDAs a partir de descrição em linguagem
natural, com a ressalva do próprio autor de que resultado de produção exige "refinamento
manual".

### O termo de comparação: quanto pesa o caminho concorrente

O survey de compressão de 3D Gaussian Splatting registra, para cenas do Mip-NeRF 360, uma
referência de **734,0 MB** no 3DGS-30K original; os melhores compressores catalogados chegam a
**10,4 MB** (SmolGS-large, PSNR 27,86) e 19,4 MB (HAC++), isto é, reduções de cerca de 70× e
38×. Um factory Three.js gerado é texto: ordens de grandeza abaixo disso. O número exato de
"quantas vezes mais leve" ninguém mediu nas duas vias sobre a mesma cena — ver seção 8.

### Quem está construindo

Laboratórios acadêmicos (Princeton VL, Threedle/Chicago, Brown, Adobe Research com Proc3D),
os três grandes fornecedores de modelo (avaliados no 3DCodeBench), a comunidade open-source
(img2threejs, Graphite, Manim, os vários MCP de Manim e Blender), os fabricantes de ferramenta
(Blender Lab com MCP próprio) e uma franja de desenvolvedores independentes vendendo plugin
direto ao artista (Houdini AI Assistant).

## 4. As disrupções-raiz

### D1 — A IA escreve o gerador: o artefato nasce como programa, não como malha

**O que rompe.** A cadeia inteira que existe porque objeto 3D é arquivo binário: o modelador
que entrega OBJ/FBX, o pipeline de retopologia, UV e bake, e o marketplace de asset cujo
produto é a malha. Se o objeto chega como uma factory TypeScript parametrizada, com pivôs e
colliders já no lugar, a loja de malhas perde razão de existir **para a classe de objeto que o
gerador cobre**.

**Por que agora e não há cinco anos.** Porque só agora existe modelo de código bom o bastante
para emitir programa gráfico que roda: a distância entre o 3D-GPT de 2023, que extraía
parâmetros para acionar geradores prontos, e o LL3M de 2025, que escreve o script inteiro
usando B-meshes e nós de shader, é a distância entre parametrizar e autorar. E só agora existe
medição: o 3DCodeBench é de maio de 2026.

**Teste de maturidade.** Não é madura: nenhum estúdio entrega produção assim; o próprio LL3M
descontinuou seu servidor e alerta para não-determinismo. Não é apenas melhoria: há ator
nomeável cuja razão de existir é ameaçada. Passa.

**O que ainda falta.** Executabilidade de primeira tentativa (0,702 agregada), plausibilidade
física (partes desconectadas, primitivas flutuando), e uma representação que não quebre a cada
versão de ferramenta — 85% das falhas medidas são deriva de API. O PCG do Proc3D é a primeira
proposta séria para isso, com 89% de compilação contra 0–30%.

### D2 — O programa vira o formato de entrega da mídia

**O que rompe.** A camada de otimização e distribuição de mídia 3D — LOD, compressão de malha,
compressão de splat, CDN de asset — para o subconjunto de conteúdo exprimível como regra. E
rompe uma distinção mais funda: entre **baixar** o conteúdo e **executar** o conteúdo. Mídia
entregue como programa chega editável ao destinatário; malha comprimida nunca chega.

**Por que agora.** Porque os dois lados da assimetria ficaram mensuráveis no mesmo período: de
um lado, 734 MB de referência para uma cena splat, 10,4 MB no melhor compressor; do outro, 702
tokens para representar um objeto em PCG e edição paramétrica em 0,01 s. Há cinco anos não
havia nem o gerador automático de um lado nem o splat do outro.

**Teste de maturidade.** Não é madura: nenhum pipeline de produção entrega 3D como programa
gerado. Não é apenas melhoria: muda a natureza do artefato entregue, que passa a ser editável
no cliente. Passa — com a ressalva mais forte deste documento, registrada na seção 7.

**O que ainda falta.** Um formato portável que sobreviva à troca de motor; execução segura de
código recebido; e, sobretudo, um portão de qualidade que dispense revisão humana por objeto —
hoje o gate do img2threejs é a etapa cara, não o gerador.

### D3 — O agente opera a ferramenta procedural inteira, por protocolo

**O que rompe.** O conhecimento de interface como ativo escasso — e com ele o *technical
director* cujo valor está em saber onde fica cada coisa no grafo de nós, o mercado de tutorial
de ferramenta, e o plugin vendido como atalho para uma operação que o agente passa a montar
sozinho.

**Por que agora.** Porque o protocolo existe e os fabricantes aderiram: o conector de terceiros
mais popular tem 28,2 mil estrelas, e o próprio Blender Lab mantém um servidor MCP oficial que
expõe a API Python e a documentação como ferramentas chamáveis. No Houdini, assistentes que
leem a cena e montam HDA a partir de descrição já são vendidos ao artista final.

**Teste de maturidade.** Não é madura: o assistente de Houdini está em 0.1.6 e é vendido por um
indivíduo; o MCP oficial do Blender vem com aviso de que executa código sem guardas. Não é
apenas melhoria: se o agente monta o grafo, a habilidade de montar o grafo deixa de ser o que
se contrata. Passa.

**O que ainda falta.** Sandbox — hoje o risco é aceito, não resolvido; determinismo, que o
próprio LL3M declara não ter; e prova de que o agente sustenta uma cena de produção inteira, e
não um objeto isolado num benchmark.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "A IA escreve o gerador: o artefato nasce como programa, não como malha"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O objeto 3D passa a ser entregue como código-fonte parametrizado, com hierarquia de animação já embutida, em vez de arquivo de malha"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O marketplace de asset 3D deixa de vender arquivos e passa a licenciar geradores, cobrando por faixa de parâmetro em vez de por download"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "A propriedade sobre um objeto digital se desloca da forma para a regra, e encontra um artefato que a doutrina de autoria humana hoje não protege quando gerado por prompt"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O portão de qualidade automático — render contra referência, decisão passa ou não passa — vira etapa obrigatória do pipeline, porque programa é verificável de um jeito que pixel não é"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Estúdios passam a contratar quem escreve o critério de aceite em vez de quem executa a modelagem, e surge a função de autor de gate"
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O trabalho de modelagem se reescreve como depuração de programa: o humano lê diff e ajusta parâmetro em vez de mover vértice"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "O ensino de design 3D se reorganiza em torno de leitura de código e especificação de regra, e a operação de ferramenta deixa de ocupar o centro do currículo"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Escola de design e escola de computação disputam a mesma disciplina, e programação entra no currículo de mídia como alfabetização e não como eletiva"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "A deriva de API se torna o principal modo de falha da geração 3D por código, à frente de qualquer erro de concepção geométrica"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Surge uma representação intermediária estável entre o modelo e o motor, desacoplando o gerador da versão da ferramenta que o executa"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Essa representação intermediária vira disputa de padrão, e quem controla o formato de regra passa a controlar o que pode ser gerado"
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "O programa vira o formato de entrega da mídia"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "Para a classe de conteúdo exprimível como regra, o custo de entrega cai de centenas de megabytes para kilobytes de texto"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O navegador volta a ser o destino padrão de 3D interativo, porque o gargalo se desloca de banda para GPU e memória do aparelho"
            sinal: medio
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Em mercados onde o celular é o único acesso à rede para a maioria dos usuários, conteúdo 3D interativo deixa de depender de aparelho caro e a régua de experiência rica se descola do preço do dispositivo"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "A estética procedural — forma paramétrica, superfície limpa, repetição com variação — volta a ser lida como escolha autoral em vez de limitação técnica"
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Feito de regra vira posição declarada em oposição a feito de captura, e a distinção separa públicos como analógico e digital separaram na fotografia"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "A mídia passa a chegar editável ao destinatário, porque o que é entregue é o programa e não o resultado renderizado"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Personalização deixa de ser variante pré-renderizada e vira parâmetro resolvido em tempo de execução, um gerador por usuário em vez de mil arquivos por campanha"
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "A obra idêntica para todos deixa de ser o caso padrão em mídia digital, e crítica, arquivamento e citação passam a precisar do par programa mais semente como unidade de referência"
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "O agente opera a ferramenta procedural inteira, por protocolo"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "O grafo de nós deixa de ser operado por mão humana e passa a ser escrito, lido e corrigido por agente dentro da própria ferramenta"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "O conhecimento de onde fica cada coisa na interface deixa de ser ativo escasso, e o technical director migra da operação do grafo para a arquitetura do sistema procedural"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "O mercado de tutorial e curso de ferramenta encolhe, e a formação em mídia se reorganiza em torno de formular pergunta e definir critério"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Executar código gerado dentro da ferramenta de produção vira superfície de ataque reconhecida, e isolamento do ambiente passa a ser requisito de pipeline"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "Estúdio e escola passam a rodar ferramenta criativa em ambiente isolado por política, e o custo de infraestrutura de quem cria sobe para quem não tem TI"
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "A ferramenta procedural passa a ser projetada para ser dirigida por agente — estado legível, erro estruturado, documentação como recurso chamável — e não para ser clicada"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Ferramenta sem API legível por máquina perde adoção, e a vantagem competitiva migra da qualidade da interface para a qualidade da documentação"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "A interface gráfica de criação vira camada de revisão e assinatura em vez de camada de produção, e o gesto principal do designer passa a ser aprovar ou recusar"
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não consegue dizer

**Os três ramos não são independentes, e o YAML sugere que são.** D2 depende inteiramente de
e1.2: se o portão de qualidade não fechar sozinho, nada é entregue como programa, porque
ninguém publica o que não sabe se está certo. A rigor, e4 e e5 são netos de e1.2, não filhos de
uma disrupção paralela. Mantive separados porque a economia de peso tem evidência própria
(734 MB contra 10,4 MB contra texto), independente de quem escreveu o gerador — mas quem ler
este mapa deve ler D2 como condicional a e1.2, não como aposta autônoma.

**Há um efeito com confiança alta em cada ramo dos dois primeiros, e os dois são medições, não
previsões.** e3 (deriva de API como principal modo de falha) e e4 (queda de ordem de grandeza
no custo de entrega) descrevem coisas que já estão nos números de 2026. Isso é o piso do mapa,
não a sua aposta. A aposta está na segunda ordem, onde a confiança cai.

**O ramo D3 é o único cujo efeito de segunda ordem principal é sobre pessoas, não sobre
artefatos** — e é também o único onde encontrei contra-evidência direta: o próprio autor do
assistente de Houdini diz que resultado de produção exige refinamento manual, e um levantamento
de campo sobre Blender MCP em 2026 separa o que economiza tempo (montagem repetitiva de cena,
geração de material, boilerplate de rigging, operação em lote) do que não economiza (modelagem
criativa e decisão de topologia). Se essa fronteira for estável, e6.1 acontece só pela metade:
o TD perde a parte chata do trabalho e mantém a parte que decide.

**Nenhum prazo aqui é previsão calibrada.** São ordenações: e3 antes de e3.1, e1.2 antes de
e1.2.1. O ano serve para dizer "isto vem antes daquilo", não "isto acontece em março".

## 6. Sinais fracos e wildcards

**O corretor pode não ser o LLM.** O paper "Procedural Scene Programs for Open-Universe Scene
Generation", aceito no SIGGRAPH Asia 2025, faz correção de erro **sem LLM**, por busca no
espaço de programas: o mecanismo "melhora iterativamente a validade da cena permanecendo o mais
próximo possível do layout original gerado pelo LLM". Em estudo de escolha forçada, os layouts
foram preferidos **82% das vezes** contra um baseline declarativo e **94%** contra outro. Se
essa divisão de trabalho pegar, o LLM vira o gerador da primeira tentativa e nada mais — e
metade do discurso atual sobre "agentes que se auto-corrigem" perde objeto.

**O primeiro autor desse paper é Maxim Gumin** — o mesmo autor do WaveFunctionCollapse. A
costura entre a PCG clássica e a geração por programa dirigida por modelo está sendo feita
pelas mesmas pessoas, o que é sinal de continuidade e não de ruptura. Quem esperar que a
disrupção venha de fora da comunidade procedural provavelmente está olhando para o lugar
errado.

**O programa pode deixar de ser legível.** O Proc3D propõe trocar Python por um grafo compacto:
702 tokens contra 6.048. Se a economia de token determinar o formato, o "programa" que a IA
escreve não será código que um humano lê por prazer — será uma representação densa desenhada
para caber em contexto. A legibilidade, que é o argumento central a favor de gerar programa em
vez de pixel, pode ser a primeira coisa sacrificada.

**O aviso de segurança está escrito e ninguém está agindo sobre ele.** A documentação do MCP
oficial do Blender diz que o servidor executa código gerado por LLM sem nenhuma guarda e
recomenda máquina virtual. Isso está publicado, é oficial, e a adoção continua crescendo. É o
tipo de sinal que só vira notícia depois do primeiro incidente.

**Wildcard 1 — o motor que compila o mundo na chegada do jogador.** Conteúdo não pré-computado
nem transmitido: gerado como código e compilado no cliente no instante em que o jogador entra
na área. Probabilidade baixa até 2031, porque compilação de shader em tempo de jogo já é a
causa conhecida de engasgo em título grande. Impacto altíssimo: acaba a noção de "tamanho do
jogo" e, com ela, a economia de distribuição de conteúdo inteira.

**Wildcard 2 — a regra é declarada inapropriável.** O Copyright Office dos EUA publicou em 29
de janeiro de 2025 a Parte 2 do relatório sobre IA e direito autoral, tratando de
copyrightability, e a posição registrada é que prompt sozinho não confere autoria suficiente.
Se um tribunal estender isso ao gerador — o programa que a IA escreveu —, o modelo de negócio
de licenciar regra (e1.1) nasce morto, e todo o valor volta para quem opera o gerador, não para
quem o possui. O inverso também é wildcard: se a regra for protegida e a saída não, o incentivo
econômico inteiro se inverte de uma vez.

**Wildcard 3 — o pixel ganha por fora.** Modelos de mundo em vídeo ficam bons, rápidos e
baratos o bastante para que ninguém precise de regra nenhuma: gera-se o quadro, não o programa.
Neste cenário o procedural não é derrotado tecnicamente — vira irrelevante, nicho de nostalgia
técnica, como o traçado vetorial virou depois do raster. Este é o wildcard que mais me
incomoda, porque é o único que o enunciado do tema não considera.

## 7. Contra o próprio mapa

**Qual efeito é só extrapolação linear do presente: e4.1.** "O navegador volta a ser o destino
padrão de 3D interativo" é a curva de hoje, só que mais — WebGL, depois WebGPU, depois Three.js
já vinham nessa direção há dez anos, sem nenhuma disrupção de geração. Se a IA escrevendo
gerador desaparecesse amanhã, e4.1 provavelmente aconteceria assim mesmo, um pouco mais devagar.
Rebaixei a confiança para baixa na auditoria por esse motivo. Ele está no mapa porque a
disrupção acelera o efeito, não porque o causa.

**Qual efeito assume velocidade de adoção sem precedente: e1.2.1**, o surgimento da função de
"autor de gate" até 2030. Não existe caso comparável em que uma função nova de estúdio se
estabeleceu em quatro anos. O precedente mais próximo é o *technical artist*, que levou cerca de
uma década e meia entre aparecer nos créditos e virar vaga com nome próprio e faixa salarial.
Assumir 2030 é assumir que desta vez é três vezes mais rápido, e não tenho evidência para isso
— só a observação de que a ferramenta que exige a função já existe (o portão do img2threejs), o
que não é a mesma coisa que o mercado reconhecê-la.

**Qual disrupção pode simplesmente não se concretizar: D2**, e ela é a mais frágil das três. A
razão é que o mecanismo depende de um passo que ninguém demonstrou: entregar programa como mídia
exige que o programa esteja **certo** sem revisão humana por peça. Hoje o portão do img2threejs
é justamente a etapa cara, e o 3DCodeBench mede 0,702 de executabilidade em turno único — os
0,974 multi-turno vêm de **reparo com feedback de erro**, que é conserto, não acerto. Se o gate
não fechar sozinho, o programa gerado continua sendo rascunho de produção, o pipeline segue
exportando malha no fim, e caem e4, e4.1, e4.1.1, e4.2, e4.2.1, e5, e5.1 e e5.1.1 — oito dos 27
efeitos, incluindo todo o argumento sobre peso e sobre mídia editável pelo destinatário. O que
sobra do mapa é D1 e D3, que são sobre como se produz, não sobre o que se entrega.

**Qual viés meu entrou aqui.** Dois, e os dois na mesma direção.

O primeiro é de enquadramento e não é meu: o tema já chega com a tese embutida. Ele nomeia a
disputa como "gerar pixel contra gerar programa", chama o `img2threejs` de "destaque", e
pergunta "quem vence na web, no jogo, no óculos" — a pergunta já supõe que há uma corrida e que
o procedural está nela. Trabalhei dentro desse enquadramento porque era o pedido, mas registro
que ele não é neutro: o mundo em que programa e captura simplesmente coexistem, cada um no que
faz bem, não aparece no enunciado e é provavelmente o desfecho mais banal.

O segundo é de fonte, e é meu. Quase toda a evidência de D1 vem de artigos escritos por quem
propõe o método, avaliados contra baselines escolhidos pelos próprios autores. O Proc3D reporta
89% de compilação contra 0–30% — mas quem definiu o conjunto de comparação foi o Proc3D. Não
encontrei um único relato de produção em escala, de um estúdio, dizendo "entregamos assim". A
única evidência independente do fabricante que achei é o 3DCodeBench, e ele é de laboratório
também. Um mapa construído sobre literatura de proponentes tende a ser otimista com prazo, e
este provavelmente é.

**Um terceiro item que a auditoria pegou e vale declarar:** e4.1.1, o efeito sobre acesso por
celular, assume que o gargalo do 3D no aparelho modesto é banda. Pode não ser — pode ser GPU,
memória e térmica, e nesse caso entregar kilobytes de programa não resolve nada, só troca o
problema de lugar. O efeito ficou no mapa com sinal fraco e confiança baixa por causa disso.

## 8. O que a máquina errou

**1. Autoria trocada entre dois projetos homônimos (Blender MCP).** Um texto comercial que
apareceu em destaque na busca afirmava que o conector Blender MCP é "construído como servidor
MCP, mantido pelo próprio time de desenvolvimento do Blender e oficialmente endossado para uso
com Claude". Eu ia escrever isso. Antes, abri o repositório: `ahujasid/blender-mcp`, 28,2 mil
estrelas, MIT, autor Siddharth Ahuja — e o README diz literalmente **"This is a third-party
integration and not made by Blender"**. O detalhe que torna o erro traiçoeiro é que **existe**
um MCP oficial do Blender, no Blender Lab, e ele é outro projeto. A afirmação não era invenção
pura: era a fusão de dois fatos verdadeiros num terceiro falso. É o formato de erro mais difícil
de pegar, porque cada metade resiste a uma checagem superficial.

Registro honesto do limite: a página oficial `blender.org/lab/mcp-server/` devolveu **HTTP 403**
às minhas tentativas de leitura. O que sei dela veio de trecho em resultado de busca, e por isso
ela **não** entra na seção 11 nem no contador de fontes — a existência do projeto oficial está
declarada aqui como fato não verificado por leitura direta.

**2. Número certo apontando para o repositório errado (Manim).** A descrição do tema fala em
"92 mil estrelas". Ao abrir, `ManimCommunity/manim` tem **40,8 mil** e `3b1b/manim` (ManimGL)
tem **93,8 mil**. O número estava aproximadamente certo e ainda assim a afirmação estava errada:
são duas Manims diferentes, com licenças iguais mas objetivos declaradamente distintos, e a que
a maior parte das pessoas instala é a comunitária, com menos da metade das estrelas. Se eu
tivesse escrito "o Manim tem 92 mil estrelas" sem abrir, teria acertado um número e descrito o
projeto errado.

**3. Dado atual substituído por dado de três anos atrás (Brasil).** A busca sobre acesso à
internet devolveu como primeiro resultado relevante uma página do NIC.br com o título "Celular é
único meio de acesso para 62% dos usuários de Internet no Brasil". Ao abrir, o texto é claro:
o dado é da **TIC Domicílios 2022**, publicado em **16 de maio de 2023** — 62%, cerca de 92
milhões de 149 milhões de usuários. O número vigente é outro: a TIC Domicílios 2025, divulgada
em **9 de dezembro de 2025**, registra **65%** de acesso exclusivo por celular e **87% na classe
DE**, com 157 milhões de usuários (85% da população), ou 163 milhões contando uso indireto.
Citar o 62% teria envelhecido o mapa em três anos sem que nada no texto denunciasse — o número
é plausível, a fonte é de primeira linha, e só a data desmente.

**4. Fórum oficial confundido com autoria oficial (Houdini AI Assistant).** A thread está no
fórum da SideFX, e eu ia atribuir a ferramenta à SideFX. Ao ler: é de um desenvolvedor
independente, radu cius, versão 0.1.6 em junho de 2026, vendida pelo Gumroad, com a ressalva do
próprio autor de que resultado de produção exige refinamento manual. A diferença importa para o
mapa inteiro: "o fabricante do Houdini embutiu um agente" e "um indivíduo vende um plugin de
agente para Houdini" são estágios de adoção completamente diferentes, e o segundo é bem mais
cedo que o primeiro.

**5. Número redondo que eu ia herdar do enunciado.** A descrição do tema pergunta: "se o 3D
procedural gerado por IA é mil vezes mais leve que o splat...". Fui atrás da medição e não
existe. O que existe: 734,0 MB de referência para 3DGS-30K numa cena Mip-NeRF 360, contra 10,4
MB do melhor compressor catalogado no survey da área — cerca de **70×**, não mil. Contra um
factory TypeScript a razão é certamente maior, mas **ninguém mediu as duas vias sobre a mesma
cena**, e a comparação honesta nem sequer é bem-posta: um splat de um quarto real e um gerador
de uma cadeira não representam a mesma coisa. O "mil vezes" saiu do documento como número e
entrou como ordem de grandeza declarada, com a fonte do que foi medido de fato.

**6. Um benchmark que eu supus existir.** Busquei por "ShaderBench" como benchmark de geração de
shader por LLM, presumindo que existisse por analogia com os outros benchmarks da área. Não
existe nos resultados. O que existe é outra coisa — o AI Co-Artist, que não é benchmark, é
sistema com estudo de usuário. Anotei no anexo como busca que não deu em nada, em vez de forçar
a citação de algo parecido.

## 9. Três cenários para 2031

**Provável.** Em 2031 o programa venceu por dentro do pipeline e perdeu por fora. Objeto
funcional — mobiliário, peça mecânica, arquitetura, interface, tudo que tem eixo, encaixe e
repetição — nasce como código gerado, com portão automático, e ninguém mais chama isso de
"geração procedural por IA": chama de modelar. A representação intermediária que o Proc3D
antecipou pegou, e há duas ou três brigando por padrão. O que é rosto, tecido, pele, luz
apanhada do mundo continua vindo de captura e de modelo de imagem, porque regra curta não
descreve isso e ninguém conseguiu fazê-la descrever. Na entrega ao público, os dois convivem na
mesma cena, e a pergunta "programa ou pixel" soa como perguntar se um site é HTML ou JPEG. O
technical director não sumiu: parou de montar grafo e passou a escrever o critério pelo qual o
grafo montado pelo agente é aceito. As escolas de design ainda estão discutindo se programação é
requisito, e metade já decidiu que sim.

**Desejável.** O mesmo cenário, mais uma coisa: a representação que virou padrão é aberta,
legível e verificável, e não a mais densa. Isso não aconteceu sozinho — aconteceu porque, entre
2026 e 2029, quem escolhia formato preferiu perder eficiência de token a perder inspeção
humana, e porque escola e comunidade open-source empurraram nessa direção enquanto a disputa
ainda estava aberta. O efeito colateral é o que mais importa: como o artefato é texto curto e
verificável, aparelho modesto executa o que aparelho caro executa, e a diferença de experiência
entre quem acessa a rede só pelo celular e quem tem estação de trabalho encolheu em vez de
crescer — num país onde 65% dos usuários e 87% da classe DE estão do primeiro lado, isso não é
detalhe técnico. E a autoria ficou decidida de um jeito que ninguém odiou: a regra escrita com
controle criativo humano é protegível, o que saiu só de prompt não é, e a indústria aprendeu a
documentar a diferença em vez de brigar com ela.

**Indesejável.** O programa venceu e deixou de ser legível. A representação que virou padrão foi
a mais compacta, porque token é caro e ninguém quis pagar a diferença; ela é proprietária,
pertence a dois fornecedores, e a promessa de "geração explicável" virou marketing — o artefato
é texto, mas é texto que só a máquina lê. O gate automático foi adotado antes de ser bom, e a
mídia ficou com uma camada de erro sistemático que ninguém audita porque auditar exige ler o que
não é legível. O conhecimento de ferramenta evaporou uma geração antes de a nova competência
existir, e há uma faixa de profissionais que não sabe mais operar o grafo nem ainda sabe
especificar a regra. **O sinal precoce disto é observável desde já, e é específico:** quando a
economia de token começar a decidir o formato de representação, e a justificativa pública para
escolher o formato passar a ser custo de contexto em vez de inspeção, este cenário já começou.
O segundo sinal é mais fácil ainda de ver: o primeiro incidente de segurança com código gerado
executado dentro de ferramenta de produção, num ambiente sem isolamento, com o aviso já
publicado e ignorado.

## 10. O experimento

### O que é

**"O mesmo objeto, três vezes."** Uma bancada que recebe uma foto de um objeto real e produz
três artefatos digitais dele:

1. **malha** — reconstrução/captura, o caminho do tema 10;
2. **imagem** — render gerado por modelo de imagem, o caminho do tema 12;
3. **programa** — factory Three.js procedural gerada por agente a partir da mesma foto, no
   espírito do `img2threejs`, com portão de qualidade automático.

A bancada mede três coisas por artefato: **peso em KB**, **tempo até o primeiro quadro num
celular modesto** e — a medida que importa — **quantas edições dirigidas o artefato aceita antes
de degradar**. As edições são as mesmas para os três: "deixe o encosto 20% mais alto", "troque a
cor da base", "gire a peça de trás 30 graus", "faça uma versão com três pernas em vez de
quatro".

### Que pergunta sobre o futuro ele ajuda a responder

**A vantagem do programa é peso ou é editabilidade?** O mapa inteiro trata as duas como se
viessem juntas, e elas não vêm. Se a vantagem for só peso, D2 morre: compressão de splat já
fez 70× e vai continuar fazendo, e a assimetria fecha sozinha em cinco anos. Se a vantagem for
editabilidade — se o programa aceitar as quatro edições e os outros dois não —, então nenhuma
compressão resolve, porque o que está em jogo não é tamanho, é natureza do artefato. É a
pergunta que decide se o ramo D2 deste mapa vale alguma coisa, e é respondível em uma tarde.

### Que tecnologia emergente ele usa, e por que não dá com tecnologia madura

Usa geração de programa gráfico por modelo de visão e linguagem — a via `img2threejs`/`LL3M`,
código emitido a partir de referência visual — mais um portão automático que compara render
contra a foto e decide passa ou não passa.

Não dá para fazer com tecnologia madura pela razão exata que define o tema: com procedural
clássico (WFC, geometry nodes, HDA), **alguém teria que escrever o gerador à mão para cada
objeto**, e aí o experimento mediria a habilidade de quem escreveu, não a propriedade do
artefato. O objeto do teste é precisamente a máquina escrever a regra a partir da referência.
Sem isso, não há experimento — há uma aula de Houdini.

### O que a turma vai fazer quando testar isso em sala

Cada pessoa traz a foto de um objeto real que tenha estrutura — uma cadeira, um violão, uma
garrafa, um ventilador — tirada por ela, não baixada. Roda as três vias na bancada. Aplica as
quatro edições em cada uma. Depois, **antes de saber qual resultado veio de qual via**, a turma
vota cegamente em duas coisas separadas: qual parece melhor, e qual respondeu melhor às edições.
A separação entre as duas perguntas é o coração do teste — a expectativa declarada é que a via
do programa perca a primeira e ganhe a segunda, e é justamente isso que precisa ser verificado
em vez de suposto. Fechamos com a medição de peso e de tempo até o primeiro quadro nos celulares
da própria turma, que é uma amostra útil de aparelho real e não de bancada de laboratório.

### O que seria um resultado que me faria mudar de ideia

Três resultados derrubam a tese, cada um de um jeito:

- **Se o programa gerado quebrar em mais da metade dos objetos trazidos** — não render, não
  compilar, sair irreconhecível —, então 0,702 de executabilidade em benchmark é otimista fora do
  benchmark, e D1 está pelo menos três anos mais longe do que este mapa diz.
- **Se as edições dirigidas funcionarem igualmente bem na via de imagem gerada**, a tese central
  cai inteira: "o programa continua editável" deixa de ser vantagem, porque o pixel também
  continuou, por outro caminho. Seria o Wildcard 3 se materializando durante a aula.
- **Se a via do programa ganhar também a votação estética**, meu mapa está errado na direção
  oposta — eu subestimei a disrupção, e o cenário provável da seção 9, em que captura e programa
  dividem o território por tipo de objeto, é conservador demais.

## 11. Fontes

Vinte e uma fontes, todas abertas e lidas nesta sessão. Fonte que não abriu não entra — o que
foi consultado e falhou está registrado na seção 12.

1. **3DCodeBench: Benchmarking Agentic Procedural 3D Modeling Via Code** — Gao, Shu, Ye, Xiong,
   Makadia, Guo, Itti e Chen, arXiv:2606.01057, submetido 31/05/2026.
   `https://arxiv.org/abs/2606.01057` e `https://arxiv.org/html/2606.01057v1`
   Sustenta: os números de executabilidade (0,702 turno único; 0,974 multi-turno; 0,910 no melhor
   modelo), o tamanho do benchmark (26 mil prompts, 212 categorias, 12 VLMs), e o achado de que
   ~85% das falhas são deriva de API Blender 4.x→5.0 — base de e3 e do contra-argumento de D2.
   Confiabilidade: alta para o que mede (é o único benchmark independente de fornecedor que
   encontrei na área); é laboratório, não produção.

2. **Proc3D: Procedural 3D Generation and Parametric Editing of 3D Shapes with Large Language
   Models** — Raji, Petrangeli, Gadelha, Shen, Bhattacharya e Wu, arXiv:2601.12234v1, 18/01/2026.
   `https://arxiv.org/html/2601.12234v1`
   Sustenta: a representação intermediária (PCG), os 702 tokens contra 3.403 e 6.048, os 89% de
   compilação contra 0–30%, e a edição 400× mais rápida — base de e3.1 e do sinal fraco sobre
   legibilidade. Confiabilidade: média — números reportados pelos próprios proponentes contra
   baselines que eles escolheram.

3. **LL3M: Large Language 3D Modelers** — Lu, Chen, Dinh, Lang, Holtzman e Hanocka,
   arXiv:2508.08228, 11/08/2025. `https://arxiv.org/abs/2508.08228`
   Sustenta: a reformulação de geração de forma como tarefa de escrita de código, e o argumento
   de que código é meio interpretável e editável — base conceitual de D1. Confiabilidade: alta
   como descrição da abordagem; o abstract não declara avaliação quantitativa nem limitação.

4. **Repositório do LL3M** — `https://github.com/threedle/ll3m`
   Sustenta: 553 estrelas, licença acadêmica adicional, e as limitações declaradas (alucinação,
   não-determinismo com mesmo prompt, impossibilidade de reverter refinamento, servidor
   descontinuado). Confiabilidade: alta — é autodeclaração de limite pelos próprios autores, o
   tipo de evidência mais difícil de contestar.

5. **3D-GPT: Procedural 3D Modeling with Large Language Models** — Sun, Han, Deng, Wang, Qin e
   Gould, arXiv:2310.12945, 19/10/2023 (revisado 29/05/2024).
   `https://arxiv.org/abs/2310.12945`
   Sustenta: a datação do "há cinco anos não dava" em D1 — em 2023 o estado da arte era extrair
   parâmetros para geradores prontos, não escrever o gerador. Confiabilidade: alta para
   datação; as alegações de eficácia são dos autores.

6. **Procedural Scene Programs for Open-Universe Scene Generation: LLM-Free Error Correction via
   Program Search** — Gumin, Han, Yoo, Ganeshan, Jones, Fu, Aguina-Kang, Morris e Ritchie,
   arXiv:2510.16147, 17/10/2025, aceito no SIGGRAPH Asia 2025.
   `https://arxiv.org/abs/2510.16147`
   Sustenta: o sinal fraco de que a correção pode não vir do LLM (82% e 94% de preferência em
   escolha forçada) e a observação sobre Maxim Gumin. Confiabilidade: alta — revisado por pares
   em venue de primeira linha da área gráfica.

7. **AI Co-Artist: A LLM-Powered Framework for Interactive GLSL Shader Animation Evolution** —
   Yuksel e Sawaf (aiXplain), arXiv:2512.08951v1, 27/11/2025.
   `https://arxiv.org/html/2512.08951`
   Sustenta: os números do estudo com 50 participantes (4,2 contra 0,6; 6,8 contra 2,9; −60% no
   tempo até a primeira saída viável; 4,7/5 contra 2,8/5; <3% de erro de compilação). Confiabilidade:
   média — estudo de usuário feito pelos criadores da ferramenta, sem pré-registro declarado, e o
   paper não articula limitações explícitas, o que já é uma limitação.

8. **img2threejs** — `https://github.com/img2threejs/img2threejs`
   Sustenta: 15,8 mil estrelas, Apache-2.0, v2.0.0; a saída como factory TypeScript mais spec
   JSON; o portão estrito de qualidade e o inventário de detalhe; a economia de token declarada;
   e o limite autodeclarado ("uma única imagem não pode revelar os lados ocultos"). Confiabilidade:
   média-alta — é documentação do próprio projeto, mas declara limite contra o próprio interesse.

9. **img2threejs Turns One Photo Into Procedural Three.js Code** — showcase WebGPU/WebGL,
   30/07/2026. `https://www.webgpu.com/showcase/img2threejs-photo-to-procedural-threejs-code/`
   Sustenta: a descrição independente do fluxo ("tudo rodando no navegador como TypeScript gerado
   em vez de arquivos de modelo importados") e a datação da repercussão. Confiabilidade: baixa-média
   — é vitrine de comunidade, não avaliação; usei só para datar e corroborar a descrição.

10. **blender-mcp (ahujasid)** — `https://github.com/ahujasid/blender-mcp`
    Sustenta: 28,2 mil estrelas, MIT, 199 commits, autor Siddharth Ahuja, e a declaração literal
    "This is a third-party integration and not made by Blender" — base de D3 e do erro nº 1 da
    seção 8. Confiabilidade: alta para os fatos de autoria e escala de adoção.

11. **WaveFunctionCollapse** — Maxim Gumin, `https://github.com/mxgmn/WaveFunctionCollapse`
    Sustenta: 25,3 mil estrelas e a lista de jogos comerciais em produção (Bad North, Caves of
    Qud, Townscaper, Dead Static Drive, Matrix Awakens) — base da rejeição de "procedural clássico"
    como disrupção-raiz no teste 1. Confiabilidade: alta — lista verificável de títulos lançados.

12. **Infinigen** — Princeton Vision & Learning Lab,
    `https://github.com/princeton-vl/infinigen`
    Sustenta: 7,3 mil estrelas, BSD-3-Clause, geração de mundos convertendo nós do Blender em
    Python, sem nenhuma integração com LLM — prova de que procedural de grande porte já funciona
    sem IA, e termo de comparação de token no Proc3D. Confiabilidade: alta.

13. **Graphite** — `https://github.com/GraphiteEditor/Graphite`
    Sustenta: 27,2 mil estrelas, Rust, MIT/Apache-2.0, alpha, motor gráfico procedural por nós,
    sem menção a IA — base da rejeição de Graphite como emergente-não-disruptiva. Confiabilidade:
    alta.

14. **Manim, edição comunitária** — `https://github.com/ManimCommunity/manim`
    Sustenta: 40,8 mil estrelas, MIT, Python; metade do erro nº 2 da seção 8. Confiabilidade: alta.

15. **ManimGL** — `https://github.com/3b1b/manim`
    Sustenta: 93,8 mil estrelas, MIT, e a distinção declarada entre as duas linhagens; a outra
    metade do erro nº 2. Confiabilidade: alta.

16. **3DGS.zip — survey de métodos de compressão de 3D Gaussian Splatting** —
    `https://w-m.github.io/3dgs-compression-survey/`
    Sustenta: 734,0 MB de referência (3DGS-30K), 10,4 MB (SmolGS-large, PSNR 27,86), 19,4 MB
    (HAC++) e as razões de ~70× e ~38× — base de e4 e da correção do "mil vezes" na seção 8.
    Confiabilidade: alta — survey comparativo com tabela por método, mantido publicamente.

17. **Houdini AI Assistant** — thread no fórum SideFX, `https://www.sidefx.com/forum/topic/102263/`
    Sustenta: autoria independente (radu cius), v0.1.6 em junho de 2026, venda por Gumroad,
    geração de HDA a partir de prompt, e a ressalva de refinamento manual — base de D3 e do erro
    nº 4. Confiabilidade: média-alta — é o autor falando do próprio produto, em fórum público.

18. **Processing: Creative Coding and the Future of Education** — Moon Davé e Raphaël de
    Courville, FOSDEM 2026, 01/02/2026.
    `https://archive.fosdem.org/2026/schedule/event/7TY3JV-processing/`
    Sustenta: Processing como ferramenta madura desde 2001, e o deslocamento da discussão
    pedagógica para agência do aprendiz diante de "sistemas opacos" — base da rejeição de creative
    coding como disrupção-raiz e de e2.1. Confiabilidade: alta para o que é (posição dos
    mantenedores em conferência pública).

19. **Copyright and Artificial Intelligence — U.S. Copyright Office** — `https://www.copyright.gov/ai/`
    Sustenta: a existência e as datas das três partes do relatório (Parte 1, 31/07/2024; Parte 2
    Copyrightability, 29/01/2025; Parte 3, pré-publicação 09/05/2025) — base do Wildcard 2 e de
    e1.1.1. Confiabilidade: alta como fonte primária para datas. **Ressalva honesta:** a página
    índice não traz as conclusões da Parte 2; a formulação de que prompt sozinho não confere
    autoria suficiente veio de resumo em resultado de busca, não da leitura do relatório em si, e
    está declarada como tal no anexo.

20. **Celular é único meio de acesso para 62% dos usuários de Internet no Brasil** — NIC.br, TIC
    Domicílios 2022, publicado 16/05/2023.
    `https://www.nic.br/noticia/na-midia/celular-e-unico-meio-de-acesso-para-62-dos-usuarios-de-internet-no-brasil/`
    Sustenta: o erro nº 3 da seção 8 — o dado desatualizado que quase entrou. Confiabilidade: alta
    para 2022; inadequada para 2026, que é exatamente o ponto.

21. **TIC Domicílios 2025: 163 milhões de brasileiros acessaram a internet** — MobileTime,
    09/12/2025. `https://www.mobiletime.com.br/noticias/09/12/2025/tic-domicilios-2025/`
    Sustenta: 65% de acesso exclusivo por celular, 87% na classe DE, 157 milhões de usuários (85%
    da população) ou 163 milhões com uso indireto — base de e4.1.1 e do cenário desejável.
    Confiabilidade: média-alta — é imprensa especializada reportando a pesquisa do Cetic.br/NIC.br;
    o ideal seria o relatório primário, que não abri.

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista da Fase 1 — o que foi respondido e o que foi assumido

Os seis pontos da Fase 1 **foram todos respondidos** no pedido, antes de qualquer geração. Não
houve pulo de entrevista e, portanto, não se aplica o rebaixamento automático de confiança
previsto na regra de corte da skill. Registro ponto a ponto:

| # | Ponto | Resposta recebida |
|---|---|---|
| 1 | Tema e recorte | "Gerar geradores: design procedural e creative coding com IA" — tema 14 de 19, família "Criação e plataforma". Recorte: a IA como **autora do gerador**, não geração procedural em geral. |
| 2 | Horizonte | 2031. |
| 3 | Para quem | Quem projeta mídia e interação. |
| 4 | Recorte geográfico | Global, com uma nota sobre o Brasil. |
| 5 | Já descartado | O que já é comum em produto de massa (a régua da disciplina). Nenhuma outra exclusão. |
| 6 | Viés desejado | Neutro. Declarado no texto e na seção 7. |

Pontos adicionais informados e usados: nenhuma disrupção suspeita a priori ("descubra");
excluir ideias óbvias que serviriam a qualquer tema; profundidade de três ordens; modo "a partir
de uma inovação/tema", não de um setor; o que faria mudar de ideia — evidência de adoção além da
maioria inicial (Rogers) ou de que a tecnologia só melhora o que existe.

**O que assumi por conta própria, e declaro:** (a) que "nota sobre o Brasil" significa um efeito
de terceira ordem com recorte nacional (e4.1.1) e uma menção no cenário desejável, mantendo
`recorte_geografico: global` no frontmatter; (b) que "público: quem projeta mídia e interação"
inclui docentes da área, o que pesou na escolha do experimento; (c) que a régua "o que já é comum
em produto de massa" deve ser operacionalizada pelo Teste 1 da Fase 2 e não por julgamento
avulso — foi o que fiz na tabela 12.2.

**Sobre a ausência de interlocutor nesta rodada:** não houve ninguém para responder perguntas
durante a execução, o que significa que nenhuma bifurcação encontrada no meio do caminho pôde ser
arbitrada. As três que apareceram estão registradas em 12.5, com a escolha que fiz e o motivo.

### 12.2 O teste da Fase 2, aplicado por escrito

Toda tecnologia que passou pela sessão, com o resultado do teste. As rejeitadas estão aqui
porque a skill exige que estejam — é o que prova que o critério rodou.

| Tecnologia | Teste 1 (madura?) | Teste 2 (emergente?) | Teste 3 (disruptiva?) | Veredito |
|---|---|---|---|---|
| Geração procedural clássica / WaveFunctionCollapse | **Sim.** Bad North, Caves of Qud, Townscaper, Dead Static Drive, Matrix Awakens — cinco títulos lançados, listados no repo. É opção padrão em level design de certos gêneros; o que resta é difusão. | — | — | **Madura.** Não entra na seção 4. Entra na seção 3. |
| Creative coding (Processing / p5.js) | **Sim.** Desde 2001, descrito no FOSDEM 2026 como uma das ferramentas open-source mais usadas para creative coding; padrão em ensino de arte-código. | — | — | **Madura.** |
| Nós procedurais em DCC (Houdini HDA, Blender geometry nodes) | **Sim.** Houdini é padrão em VFX há duas décadas; o Infinigen constrói mundos inteiros convertendo nós do Blender em Python, sem IA, com 7,3 mil estrelas e uso estabelecido em pesquisa de visão. | — | — | **Madura.** |
| Manim / ManimGL | **Sim.** 93,8 mil + 40,8 mil estrelas, MIT, padrão de fato em vídeo educacional de matemática; nenhuma menção a IA no README de nenhuma das duas. | — | — | **Madura.** A IA *dirigindo* a Manim é outra coisa — ver abaixo. |
| Shader escrito à mão / Shadertoy | **Sim.** Prática estabelecida, com comunidade e acervo; o AI Co-Artist usa o Shadertoy justamente como linha de base do "sem IA". | — | — | **Madura.** |
| Model Context Protocol como protocolo | **Sim.** Adotado por múltiplos fornecedores; é encanamento, não fenômeno. | — | — | **Madura (infraestrutura).** Entra como condição de D3, não como raiz. |
| Graphite | Não — em alpha, não é padrão em nenhum fluxo em escala. | **Sim.** Fora do laboratório, 27,2 mil estrelas, adoção de early adopter, curva subindo. | **Não.** Se escalar, o que deixa de existir? Nada nomeável. Melhora o fluxo de editor vetorial/motion com não-destrutividade — é melhoria, e boa. | **Emergente, não disruptiva.** Rejeitada como raiz. |
| MCP de Manim (vários, de indivíduos) | Não. | **Marginalmente.** Existem vários, todos de indivíduos, nenhum com adoção mensurável que eu tenha conseguido verificar abrindo. | **Não isoladamente** — é instância de D3, não disrupção própria. | **Sinal, não raiz.** Absorvido em D3; mencionado na seção 6 como caso do padrão. |
| 3D Gaussian Splatting | Discutível — fora do escopo. | — | — | **Fora de escopo.** É o tema 10 (captura de realidade). Entra aqui só como termo de comparação de peso. |
| Modelos de imagem/vídeo como mídia acabada | — | — | — | **Fora de escopo.** É o tema 12. Entra como Wildcard 3. |
| **IA escrevendo o programa gráfico (3D-GPT → LL3M → img2threejs → Proc3D)** | **Não.** Nenhum pipeline de produção em escala; LL3M descontinuou o servidor e declara não-determinismo; executabilidade agregada de 0,702 em turno único. | **Sim.** Fora do laboratório (img2threejs com 15,8 mil estrelas e uso real em agentes de código), curva medida subindo, adoção early adopter. | **Sim.** Ator nomeável ameaçado: o marketplace de malha, o modelador que entrega binário, o pipeline de retopologia/UV/bake. | **D1.** |
| **Programa como formato de entrega de mídia** | **Não.** Ninguém entrega assim. | **Sim, por composição** — a assimetria de peso é medida (734 MB / 10,4 MB / texto) e o artefato existe (factory Three.js gerada). | **Sim, condicionalmente.** Deixa de fazer sentido a camada de LOD/compressão/CDN para o conteúdo exprimível como regra, e a distinção entre baixar e executar mídia. | **D2 — a mais frágil.** Ver seção 7. |
| **Agente operando a ferramenta procedural por protocolo** | **Não.** Houdini AI Assistant em 0.1.6, vendido por indivíduo; MCP oficial do Blender com aviso de ausência de guardas. | **Sim.** 28,2 mil estrelas no conector de terceiros; fabricante mantendo servidor próprio. | **Sim.** Deixa de fazer sentido o conhecimento de interface como ativo escasso, o mercado de tutorial de ferramenta e parte do mercado de plugin. | **D3.** |

### 12.3 Efeitos cortados na auditoria da Fase 4, e por quê

Cortados por serem genéricos — serviriam a qualquer tema da disciplina, critério (c) da Fase 3:

- *"O designer vira quem especifica em vez de quem executa."* Vale para o tema 12, para o 13,
  para o 8, para quase todos. Sobreviveu apenas na forma específica de e2 (ler diff e ajustar
  parâmetro, que é uma prática nomeável) e e1.2.1 (autor de gate, que é uma função nomeável).
- *"A IA substitui o designer."* Genérico e, além disso, extrapolação sem mecanismo.
- *"O ensino de design vira ensino de sistemas."* Formulação do enunciado do tema. Cortada nessa
  forma e reescrita como e2.1 mais e2.1.1, que têm mecanismo: se o artefato é código, a leitura
  de código entra no currículo, e aí duas escolas disputam a mesma disciplina.

Cortados por não terem mecanismo narrável em uma frase, critério (a):

- *"Um mundo inteiro cabe num prompt."* É figura de linguagem, não efeito. Não consigo dizer qual
  é o passo entre "prompt" e "mundo" sem usar um verbo mágico. O que dá para narrar é e4 (custo de
  entrega cai) e o Wildcard 1 (compilação no cliente), e ambos ficaram.
- *"Tudo que é visual pode ser expresso como programa curto."* Falso como premissa, e o mapa
  depende de que seja falso: rosto, tecido e luz apanhada não são exprimíveis como regra curta, e
  é exatamente essa fronteira que sustenta o cenário provável.
- *"A obra vira o código."* Cortado nessa forma, reescrito como e5.1.1, que tem mecanismo: se o
  que se entrega é programa mais semente, crítica e arquivamento precisam de uma unidade de
  referência nova.

Rebaixados em vez de cortados:

- **e1.1** (marketplace licencia gerador) — nasceu com sinal médio e confiança média. A pergunta
  "o elo causal pula uma etapa?" expôs que eu não tinha **nenhum sinal do mercado de asset 3D**
  apontando nessa direção: a derivação veio de analogia com o que aconteceu com fonte tipográfica
  e plugin. Analogia entre setores gera hipótese, não é evidência do domínio. Rebaixado para sinal
  fraco e confiança baixa.
- **e4.1** (navegador volta a ser destino padrão) — pego pela pergunta "é extrapolação linear?".
  É. Rebaixado para confiança baixa e denunciado na seção 7.
- **e4.2** (estética procedural como escolha autoral) — extrapolação de gosto, não de tecnologia,
  e sem sinal de mercado. Rebaixado para sinal fraco e confiança baixa.
- **e4.1.1** (Brasil) — assume que o gargalo é banda e não GPU/memória/térmica. Mantido com sinal
  fraco e confiança baixa, com a ressalva explícita na seção 7.
- **e5.1** (um gerador por usuário) — confiança rebaixada para baixa: depende de D2 inteira, que
  é o ramo mais frágil.

Reescritos com o passo que faltava:

- **e6.1** — a primeira versão dizia "o technical director desaparece". Sem mecanismo e
  contrariado por evidência: o levantamento de campo sobre Blender MCP em 2026 separa o que
  economiza tempo (montagem repetitiva, material, boilerplate de rigging, lote) do que não
  economiza (modelagem criativa, decisão de topologia). Reescrito para "o conhecimento de
  interface deixa de ser ativo escasso e a função migra para arquitetura", que é o que a evidência
  sustenta.
- **e7** — a primeira versão era "as ferramentas ganham API". Vago e já verdadeiro. Reescrito com
  o conteúdo específico do que muda no projeto da ferramenta: estado legível, erro estruturado,
  documentação como recurso chamável — que é literalmente o que o MCP do Blender Lab expõe.

**Nenhum efeito sobreviveu à auditoria sem exame, e sete dos 27 foram alterados.** A skill avisa
que uma roda em que 100% dos efeitos passam intactos não passou pela auditoria de verdade.

### 12.4 Buscas que não deram em nada

- **"ShaderBench"** como benchmark de geração de shader por LLM: não existe nos resultados. A
  presunção de que existiria veio de analogia com os demais benchmarks da área. Registrado como
  erro nº 6 da seção 8.
- **Comparação direta de peso entre 3D procedural gerado e Gaussian splat na mesma cena:** não
  encontrei nenhuma. O survey de compressão de 3DGS compara splat com splat; o Proc3D compara
  token com token entre representações de código. As duas medidas não se encontram em lugar
  nenhum que eu tenha achado. Por isso o "mil vezes mais leve" do enunciado não pôde ser nem
  confirmado nem refutado — só substituído pelo que foi medido.
- **Adoção do Cavalry e do Rive em fluxo dirigido por IA:** busquei e não cheguei a nada
  verificável; não abri nenhuma fonte e por isso as duas ferramentas não aparecem no corpo do
  documento, apesar de estarem no enunciado do tema.
- **`manim-web-mcp` especificamente:** encontrei vários servidores MCP para Manim (de abhiemj,
  wstcpyt, paulnegz, Stelath, BumW), todos de indivíduos, nenhum com escala verificável. Não abri
  nenhum repositório, e por isso nenhum entra nas fontes; a menção na seção 6 é genérica, sobre o
  padrão, não sobre um projeto.
- **`pixelgen`, `satori`, `Remotion`, `css-doodle`, `glisp`, `curv`, `nannou`, `SHADERed`,
  `rust-gpu`, `material-maker`, `Pixel Composer`, `triangula`, `msdfgen`, `noise-rs`,
  `Fantasy-Map-Generator`:** todos citados no enunciado do tema como levantamento da turma. Não
  abri nenhum e por isso nenhum entra como fonte nem sustenta afirmação. Pelo que se lê do
  enunciado, todos parecem cair no mesmo lugar do Graphite no teste da Fase 2 — creative coding e
  procedural estabelecidos, emergentes no máximo, sem ator nomeável ameaçado —, mas isso é
  inferência sobre descrição, não verificação, e fica registrado como tal.

### 12.5 Bifurcações que apareceram e foram decididas sem interlocutor

1. **Quantas disrupções-raiz.** Considerei quatro, incluindo "a verificação automática do gerado
   desloca o julgamento estético para o portão de qualidade". Decidi que isso é efeito de primeira
   ordem de D1 (virou e1.2) e não raiz própria, porque não sobrevive sem D1: sem programa gerado,
   não há o que verificar automaticamente. Fiquei em três.
2. **Se D2 é disrupção ou consequência.** Argumentei os dois lados no texto. Mantive como raiz
   porque a assimetria de peso tem evidência independente de quem escreveu o gerador, mas
   registrei na prosa da seção 5 e na seção 7 que ela é condicional a e1.2. Se alguém preferir
   ler este mapa com duas raízes e um ramo mais fundo em D1, a leitura é defensável.
3. **Onde pôr a nota sobre o Brasil.** Podia ser seção 3 (estado atual), efeito de terceira ordem,
   ou cenário. Pus nos dois últimos e deixei `recorte_geografico: global`, porque o pedido dizia
   "global, com uma nota sobre o Brasil" — nota, não recorte.

### 12.6 Fontes consultadas que não abriram

Registradas por honestidade de método: aparecem no raciocínio, não no contador de fontes nem na
seção 11.

**Precisão sobre o que "não abriu" quer dizer.** Na checagem final de links, três destas quatro
URLs respondem **200** a um `curl` simples e só `projects.blender.org` devolve 403 de fato. Ou
seja: o 403 que recebi não é a página fora do ar — é filtro contra o leitor automático que usei.
A consequência para este documento é a mesma (não li o conteúdo, logo não conto como fonte), mas
a formulação importa: não posso dizer que a página está indisponível, só que **eu** não a li. Quem
retomar este mapa consegue abri-las num navegador e fechar as lacunas apontadas abaixo.

- `https://www.blender.org/lab/mcp-server/` — **HTTP 403**. É a página oficial do servidor MCP do
  Blender. O que sei dela (existência do projeto, exposição da API Python e do manual como
  recursos, aviso de execução sem guardas com recomendação de máquina virtual) veio de trecho em
  resultado de busca. Afeta a seção 3, a seção 6 e o erro nº 1 da seção 8, onde está declarado.
- `https://projects.blender.org/lab/blender_mcp/wiki/Home` — **HTTP 403**. Mesma situação.
- `https://allthingsopen.org/articles/copyright-problem-ai-generated-code-open-source-licenses` —
  **HTTP 403**.
- `https://www.carltonfields.com/insights/publications/2026/ai-makes-securing-copyright-protection-for-software-code-tricky-bloomberg-law`
  — **HTTP 403**. As duas acima tratavam de direito autoral de código gerado por IA; a
  impossibilidade de abri-las é a razão de o Wildcard 2 se apoiar apenas nas datas da página do
  Copyright Office, com a conclusão sobre prompts declarada como não verificada por leitura
  direta.

### 12.7 O que este mapa deliberadamente não cobriu

- **Custo econômico da transição.** Quanto custa reescrever um pipeline de estúdio para entregar
  programa em vez de malha. Sem isso, os prazos de D1 e D2 são otimistas por construção.
- **O lado do consumo.** O mapa é todo sobre quem produz. Se o público percebe ou não a diferença
  entre mídia programada e mídia capturada — e se se importa — não foi investigado, e e4.2 depende
  disso.
- **China e Japão.** O recorte pedido era global, mas todas as fontes que abri são de língua
  inglesa, com autores majoritariamente em instituições norte-americanas. Um mapa realmente global
  precisaria de literatura e produto que eu não busquei.
- **A pergunta de terceira ordem do enunciado sobre "direito autoral de regra".** Está no mapa
  (e1.1.1, Wildcard 2), mas sustentada por uma única fonte primária de datas e por conclusões que
  não consegui ler no original. É o ponto mais fraco de sourcing do documento inteiro.
