---
tema: Captura de realidade e renderização neural
slug: captura-de-realidade-e-renderizacao-neural
autor_login: mjbo
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-17
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 7
efeitos_ordem_2: 13
efeitos_ordem_3: 13
tecnologias_citadas: [3D Gaussian Splatting, NeRF, KHR_gaussian_splatting, SPZ, OpenUSD Particle Fields, OGC 3D Tiles 2.0, RealityKit, Apple Maps Flyover, SuperSplat, PlayCanvas, Scaniverse, Niantic Large Geospatial Model, Spexi, Move.ai Genesis, Move One, EasyMocap, Depth Anything 3, TRELLIS.2, Hunyuan3D 2.1, 4D Gaussian Splatting, PackUV, WebGPU, WebXR, Luma AI UE plugin, UnityGaussianSplatting]
fontes: 19
confianca: media
experimento: Cópia sem licença — três capturas do mesmo espaço, um voto cego
skill_usada: futurizacao-mjbo
publico_ok: false
---

## 1. Resumo

Entre 2023 e 2026 a captura de um lugar real deixou de ser serviço especializado e passou a ser
operação de celular com saída publicável: o Gaussian Splatting entregou renderização acima de
100 fps em 1080p, o formato virou extensão do glTF em fevereiro de 2026 e a Apple levou splats
para o RealityKit e para o Apple Maps nos sistemas de 2026. Este mapa parte de quatro rupturas —
captura neural por sensor comum, reconstrução a partir de uma única imagem, captura de movimento
sem marcador fora do laboratório e vídeo volumétrico entregue pelo navegador — e deriva
trinta e três efeitos até 2031. O achado central não é estético e sim jurídico: o pipeline 3D
colapsou em captura antes de existir qualquer regra sobre capturar, e a reconstrução retroativa
a partir de acervo fotográfico desloca o consentimento para um momento em que ele já foi dado
para outra finalidade. O contrapeso honesto é que o splat continua não sendo reiluminável, nem
colidível, nem deformável, e erra a geometria na casa de centímetros: ele é mídia convincente,
não medida confiável — e é exatamente por isso que a disputa dos próximos cinco anos é sobre
quem detém a cópia do mundo, não sobre quem sabe modelá-la.

## 2. O tema

Captura de realidade e renderização neural é o conjunto de técnicas que transforma registro de
sensor comum — foto, vídeo de celular, passagem de drone — em cena tridimensional navegável e
fotorrealista, sem passar pelo ciclo clássico de modelar, texturizar e animar. A família inclui
campos de radiância (NeRF, 2020), Gaussian Splatting (2023), estimativa monocular de
profundidade, reconstrução a partir de imagem única e captura de movimento sem marcador.

Onde isso encosta em mídia e interação: no ponto exato em que o ativo tridimensional deixa de
ser algo que alguém constrói e passa a ser algo que alguém coleta. Isso muda três camadas ao
mesmo tempo. Muda a **produção** — o gargalo migra de habilidade de modelagem para acesso ao
lugar. Muda a **distribuição** — o ativo passa a ser servido pelo navegador, em WebGL/WebGPU e
WebXR, sem instalação. E muda a **relação do usuário com o representado** — a cena capturada não
se apresenta como interpretação do lugar, e sim como o lugar, o que é uma afirmação diferente
daquela que uma malha estilizada faz.

Por que isto merece mapa de futuro e não um levantamento de estado da arte: porque o estado da
arte aqui é conhecido e, sozinho, engana. É fácil listar o que roda hoje; é fácil, e errado,
concluir daí "vai ficando melhor". O que interessa é que a técnica atravessou a barreira de
padronização e de sistema operacional em 2026 — glTF, OpenUSD, OGC 3D Tiles, RealityKit, Apple
Maps — antes de existir norma, prática contratual ou consenso profissional sobre o ato de
capturar. Essa defasagem entre capacidade instalada e governança é precisamente o tipo de tensão
que um levantamento de estado da arte não consegue enunciar, porque ela não está em nenhum
produto: está no vazio entre eles.

Uma distinção que este documento mantém do início ao fim, e que é fácil de perder: **reconstruir
não é gerar**. Captura neural recupera o que existe; modelo generativo de mundo inventa o que
poderia existir. As duas coisas usam matemática vizinha e aparecem na mesma conversa, mas têm
regimes de verdade opostos — e tratá-las como dois pontos da mesma escala de maturidade é o erro
de categoria que apaga a única pergunta que este tema traz de novo, que é a pergunta sobre a
fidelidade ao referente. Mundos gerados são o tema 9 da disciplina; aqui o objeto é transformar
realidade em ativo.

## 3. Onde isso está hoje

### O que já existe e funciona em produção

**Renderização em tempo real, resolvida.** O artigo original de 3D Gaussian Splatting reivindica
"síntese de novas vistas em tempo real de alta qualidade (≥ 100 fps) em resolução 1080p" para
cenas completas e não delimitadas, com tempos de treino competitivos — algo que, segundo os
autores, nenhum método anterior alcançava em tempo real [1]. Isso encerrou o problema que
mantinha campos de radiância fora de produto: NeRF entregava qualidade a 1–10 fps e treino de
horas.

**Formato padronizado, em três frentes simultâneas.** Em 3 de fevereiro de 2026 o Khronos Group
anunciou o release candidate da extensão `KHR_gaussian_splatting` para glTF 2.0, com ratificação
prevista para o segundo trimestre de 2026, e com Autodesk, Cesium/Bentley, Esri, Huawei, Niantic
Spatial, NVIDIA e XGRIDS participando [2]. A extensão é agnóstica de compressão, com SPZ
(Niantic, MIT) e L-GSC (Qualcomm) como esquemas propostos; Patrick Cozzi, da Bentley, declara que
a extensão "será componente-chave do futuro padrão OGC 3D Tiles 2.0" [2]. Em paralelo, o schema
Particle Fields do OpenUSD — co-autoria de Apple, NVIDIA, Adobe e Pixar — entrou no OpenUSD 26.03,
de março de 2026, com `UsdVolParticleField3DGaussianSplat` como implementação de splat [3]. Uma
quarta frente, de codificação MPEG para splats, está em grupo de trabalho [4].

**Sistema operacional de consumo.** Na WWDC 2026 a Apple levou splats para o RealityKit via
`GaussianSplatResource` e `GaussianSplatComponent`, disponíveis em iOS, iPadOS, macOS, Mac
Catalyst e visionOS, exigindo GPU da família Apple7; a API é agnóstica de formato — o
desenvolvedor fornece os buffers de posição, escala, rotação, opacidade e harmônicos esféricos
[3]. O Apple Maps Flyover recebe a técnica nos sistemas de 2026. A Apple **não** publica
ferramenta de captura: o Preview do Mac ganhou edição 3D com três renderizadores, mas "PLY, SPZ e
SOG arbitrários ainda exigem visualizador de terceiros" [3].

**Publicação pelo navegador, sem instalação.** O SuperSplat, editor de splats da PlayCanvas, roda
inteiramente no navegador com WebGL2 e, desde a versão 2.0, publica a cena e devolve uma URL —
resolvendo a hospedagem, que era o obstáculo prático [5]. O visualizador é aberto, distribuído em
npm, exportável como HTML de arquivo único e integrado a WebXR, incluindo Quest e Vision Pro [5].

**Captura de movimento sem marcador, em produto.** A Move.ai vende desde captura por uma câmera
(modelo s2, vídeo de celular ou GoPro, exportação FBX/BVH) até o Genesis, produto de topo com 6 a
12 Z-Cams e uma GPU NVIDIA local, volumes de 4×4 m a 20×20 m e 1 a 8 pessoas simultâneas, que a
empresa descreve como entregando "dados de qualidade óptica" que "atendem aos padrões de precisão
dos sistemas ópticos tradicionais, sem a montagem de laboratório" [6].

**Motores de jogo, via terceiros.** Unity e Unreal têm ecossistema maduro de plugins para 3DGS
em tempo real; no Unreal 5.7 não existe módulo de primeira parte da Epic, e o caminho de produção
é o plugin da Luma AI ou o pipeline de exportação da Polycam [7].

**Captura em escala urbana como serviço.** Em 27 de maio de 2026 a Niantic Spatial e a Spexi
Geospatial anunciaram parceria que roteia captura aérea pela API de reconstrução da Niantic e
entrega splats georreferenciados; a Spexi declara mais de 10.000 pilotos de drone e mais de 6
milhões de acres mapeados a 2,8 cm de resolução, e passa a ser fornecedora preferencial para
treino dos modelos de fundação da Niantic [8].

**Vídeo volumétrico streamável, primeira vez fora de demo.** Em 27 de abril de 2026 a Digital
Nation Entertainment e a Gracia publicaram uma performance de quatro minutos da cantora Amy May
capturada em 4D Gaussian Splatting no palco volumétrico da DNE em Los Angeles, entregue em tempo
real por WebGPU a taxas entre 17 e 75 Mbps, sem limite de duração, jogável em desktop, celular e
Meta Quest 3 sem aplicativo, com 1,5 milhão de visualizações no fim de semana de lançamento [9].

**Reconstrução a partir de uma imagem, em modelo aberto.** O Depth Anything 3, da ByteDance,
prediz profundidade de imagem única, profundidade consistente multivista, poses de câmera
(extrínsecas e intrínsecas) e Gaussianas 3D diretamente, exportando GLB, PLY, NPZ e vídeos 3DGS;
variantes Base, Small, Metric e Mono-Large são Apache 2.0, as Nested e Giant/Large são CC BY-NC
4.0, e os autores afirmam superar de forma significativa o DA2 em monocular e o VGGT em multivista
[10].

### O que existe e não funciona

**Splat não é cena jogável.** O levantamento mais concreto sobre pipeline de captura para Unreal
em 2026 lista os bloqueios um por um: splats "não têm colisão intrínseca"; "sem iluminação
dinâmica — a radiância assada não responde a uma lanterna, a um fogo de arma ou a um sistema de
hora do dia", descrito como a restrição mais severa para jogabilidade; "um splat é uma nuvem
estática: você translada, rotaciona e escala o ativo inteiro, mas não pode riggar, deformar ou
morfar"; sombras projetadas "ausentes ou aproximadas"; splats semitransparentes "ordenam bem
entre si e mal com água, partículas ou UI do motor"; e renderizam mal em capturas de reflexão
[7]. Não é lista de bugs — é lista de propriedades.

**Reiluminação e cena dinâmica seguem abertas.** A literatura de levantamento é explícita: a
incapacidade de interagir com iluminação variável é limitação central da família; os métodos de
reiluminação atuais não acomodam geometria dinâmica em tempo real, não computam iluminação
indireta responsiva e não têm iluminação global; superfícies reflexivas, transparentes e
fortemente dependentes de vista continuam difíceis, e estender a cenas dinâmicas ou reiluminaveis
aumenta a complexidade [11][4].

**Semântica e edição.** O levantamento de aplicações de 3DGS aponta como problemas abertos a
integração de informação semântica, fluxos de edição intuitivos e eficientes, geração multimodal
robusta e o equilíbrio entre custo e fidelidade; abordagens como LangSplat e Feature-3DGS embutem
linguagem e features nas Gaussianas, mas o levantamento as trata como caminho de pesquisa [11].

**Geometria não é medida.** Um levantamento consolidado do estado de 2026 reporta erro médio de
7,82 cm, o que impede medição de grau de engenharia, e observa fragmentação de ferramental apesar
da padronização; observa também a inexistência de mercado de serviço profissional nomeado de
Gaussian Splatting nos Estados Unidos [4]. É por isso que a documentação patrimonial de precisão
segue em laser: o Museu do Ipiranga adota varredura a laser com metodologia HBIM para monitorar
conservação da estrutura, e não captura neural [12].

**Avaliação de qualidade do 3D gerado.** Um protocolo de julgamento por VLM em modelo cruzado
para qualidade de malha a partir de imagem única conclui que proxies baratos de avaliação são
insuficientes para capturar qualidade real, e se apresenta como pesquisa em curso e não como
sistema finalizado [13]. Do lado dos modelos, os modos de falha relatados são de outra ordem —
não de aparência, mas de aproveitamento: a saída bruta não tem laços de aresta nem colocação
sensata de polos, a iluminação vem assada no albedo, a densidade de texel é irregular, e
personagens principais ainda exigem retopologia manual porque a topologia gerada não tem os laços
de aresta que a animação requer [14].

**Governança da captura.** Não existe norma específica. As três leis abrangentes de privacidade
que entram em vigor em 1º de janeiro de 2026 nos Estados Unidos — Indiana, Kentucky e Rhode
Island — tratam de dados pessoais do consumidor e consentimento granular, sem dispositivo sobre
captura tridimensional de espaço [15]. A proposta mais concreta de governança de varredura de
interiores vem de HCI, não de direito: um sistema de mapeamento 3D indoor com drones de consumo
propõe exclusão espacial por lista de veto de proprietários e locatários (unidades privadas,
escritórios confidenciais, laboratórios, banheiros), minimização temporal com voos fora de pico e
publicação da agenda com 48 horas de antecedência para permitir opt-out [16].

### Quem está construindo

Academia e laboratórios: Inria/Max Planck (3DGS original) [1]; ByteDance Seed (Depth Anything 3)
[10]; Brown e a comunidade de CVPR 2026 em representações 4D nativas de vídeo [9]. Plataformas:
PlayCanvas (SuperSplat) [5]; Niantic Spatial (Scaniverse, SPZ, Large Geospatial Model) [17][8];
Apple (RealityKit, OpenUSD Particle Fields, Apple Maps) [3]; Move.ai (Genesis, Move One) [6];
Gracia e DNE (4DGS streamável) [9]; Spexi (rede aérea) [8]. Padronização: Khronos, OGC, Esri,
Bentley/Cesium, NVIDIA, Huawei, XGRIDS, Qualcomm [2]; Pixar, Adobe [3]. Mercado-alvo declarado
pela Niantic para o modelo geoespacial: fabricantes e operadores de robótica, empresas de energia,
construção e logística, órgãos públicos e operadores de grandes espaços [17].

### Um recorte para o Brasil

O que está documentado no país é a camada madura, não a neural. O Museu do Ipiranga usa varredura
a laser com HBIM para monitoramento estrutural, tecnologia da mesma família empregada no Coliseu
[12]. A pesquisa brasileira de digitalização acessível compara fotogrametria e triangulação a
laser em acervo museológico e conclui pela fotogrametria como melhor caminho faça-você-mesmo, com
custo de implantação entre R$ 2.000 e R$ 3.500 e curva de aprendizado menor por aproveitar
habilidade fotográfica já existente; as limitações encontradas foram material reflexivo e
transparente, calibração meticulosa no laser e perda de resolução por compressão de 60% no
software de fotogrametria [18]. Busca específica por adoção de Gaussian Splatting em patrimônio
brasileiro em 2026 não retornou caso documentado. A leitura honesta é que o Brasil está no ponto
em que o custo de entrada da captura neural — celular mais serviço de reconstrução na nuvem — é
uma ordem de magnitude menor que os R$ 2.000–3.500 do arranjo faça-você-mesmo de 2017, e que
isso ainda não apareceu em institucionalização, só em possibilidade.

## 4. As disrupções-raiz

Cada candidata abaixo foi submetida ao teste de três perguntas descrito na skill. O que reprovou
está registrado na Seção 12, com o motivo.

### 4.1 Captura neural a partir de sensor comum

**O que rompe.** Uma pessoa sem formação em 3D produz, com um celular e sem instalar nada, uma
cena fotorrealista navegável de um lugar arbitrário, e a publica com uma URL. Antes disso não
havia caminho: fotogrametria devolvia malha que exigia limpeza e nunca resolvia cabelo, vidro e
folhagem; NeRF rodava a 1–10 fps com treino de horas. O que isso torna possível não é uma
fotogrametria melhor — é a captura como **ato de publicação**, com latência de minutos e sem
intermediário técnico.

**O que invalida.** A arte de ambiente por modelagem, quando o requisito é realismo de um lugar
que existe: previsualização, imobiliário, cenotécnica, documentação visual de patrimônio,
scouting de locação. Invalida também a fotogrametria como via única para "3D de coisa real", e
desloca a varredura a laser da função de registro visual — sem tocar sua função metrológica, que
o erro de 7,82 cm mantém intacta [4].

**Por que agora e não há cinco anos.** Não é "porque melhorou". São quatro mudanças datadas: o
tempo real chegou em 2023 com ≥100 fps a 1080p [1]; a compressão SPZ reduziu o ativo em até 90%
em relação a PLY, viabilizando streaming [2]; o formato entrou em glTF (RC em fevereiro de 2026),
OpenUSD (26.03, março de 2026) e caminho para OGC 3D Tiles 2.0 [2][3][4]; e o sistema operacional
de consumo passou a renderizar splats nativamente em 2026, com Apple Maps e RealityKit [3]. Em
menos de dezoito meses os motores de jogo saíram de código de pesquisa para ferramenta de produção
por plugin [7].

**O que falta para se concretizar.** Falta reiluminação, colisão e deformação [7][11]. Enquanto
faltarem, o splat é cenário, não cena — e o efeito se realiza em mídia contemplativa e mapa, não
em jogo. Falta também qualquer norma sobre o ato de capturar [15].

### 4.2 Reconstrução a partir de uma única imagem

**O que rompe.** O acervo já existente vira matéria-prima tridimensional. Não é preciso acesso ao
objeto, nem sessão de captura, nem sequer que o objeto ainda exista: um modelo único recebe uma
imagem e devolve profundidade, pose de câmera e Gaussianas 3D exportáveis [10]. A captura deixa
de ser um evento agendado e passa a ser uma operação retroativa sobre o que foi fotografado
alguma vez.

**O que invalida.** Invalida a premissa de que 3D de coisa real requer a coisa. Ameaça o trabalho
de modelagem de ativo-mercadoria — o levantamento sindical da indústria de animação, conduzido
pela CVL Economics para o Animation Guild IATSE Local 839 e parceiros, registra que 44% das
empresas que já usam IA generativa a empregam para gerar modelos 3D e que 33% dos respondentes
preveem que modeladores 3D serão afetados nos três anos seguintes [19]. E ameaça algo mais
estrutural: o consentimento no momento da captura como ponto de controle jurídico, já que a
imagem que alimenta a reconstrução foi autorizada para outra finalidade.

**Por que agora.** Licenciamento e integração, não só qualidade: DA3 distribui variantes Metric e
Mono-Large sob Apache 2.0 [10], e o caminho de reconstrução de objeto tem alternativa
de 4 bilhões de parâmetros sob licença MIT, sem restrição comercial, enquanto o concorrente
direto exclui do uso comercial a União Europeia, o Reino Unido e a Coreia do Sul [14] — ou seja, a barreira deixou de ser o acesso ao modelo. E o mesmo modelo que
faz profundidade faz pose e splat, colapsando três etapas de pipeline em uma chamada [10].

**O que falta.** Falta avaliação. O gargalo declarado é que proxies baratos de qualidade falham
[13] e os modos de falha são estruturais, não de ajuste: verso ausente, textura alucinada, texto
sem sentido, topologia que degrada [14]. E os modos de falha
documentados não são de fidelidade visual, e sim de topologia e de iluminação assada no albedo,
a ponto de personagem principal ainda exigir retopologia manual [14] — ou seja, o ativo chega
bonito e chega inutilizável a jusante. Enquanto não houver julgamento confiável em escala nem
topologia aproveitável, o ativo fica em previsualização e comércio eletrônico, e não entra em
produção final.

### 4.3 Captura de movimento sem marcador fora do laboratório — emergente, com ressalva

**Ressalva registrada de saída:** esta candidata **não** é tratada aqui como ruptura consumada.
Ela passa nas perguntas 1 e 3, e passa na 2 apenas no meio do mercado — e existe evidência
contrária vinda do próprio fornecedor.

**O que torna possível.** Capturar movimento humano onde não cabe um laboratório: em campo, em
ensaio, na rua, com celular ou GoPro e exportação FBX/BVH [6]. Isso é mudança de lugar, e lugar é
categoria, não grau.

**O que ameaça, e onde a ameaça para.** Ameaça o palco de captura como guardião e a economia do
volume instrumentado. Mas o produto de topo da própria Move.ai, o Genesis, reconstrói o
laboratório: 6 a 12 Z-Cams com lentes, GPU local, calibração por tabuleiro de xadrez para reduzir
tremor e melhorar apoio de pé, volumes de 4×4 a 20×20 m [6]. Quando o fornecedor que inventou o
markerless volta a montar o arranjo dedicado para atingir precisão, a prática do laboratório não
foi invalidada — foi segmentada.

**Por que agora.** É aqui que a candidata é mais fraca: a descrição corrente de mercado é que a
qualidade markerless "se aproxima da óptica de nível médio em 2026". "Aproxima-se" é a marca da
melhoria incremental, e o teste da skill reprova isso na pergunta 1. Sustento a entrada por
ubiquidade de local, não por qualidade — e por isso ela entra como emergente.

### 4.4 Vídeo volumétrico entregue pelo navegador

**O que rompe.** A imagem em movimento deixa de ter enquadramento fixo e passa a ser uma cena
temporal navegável, entregue sem aplicativo. O caso de abril de 2026 é concreto: quatro minutos
de performance em 4DGS, streaming em tempo real por WebGPU a 17–75 Mbps sem limite de duração,
jogável em desktop, celular e Quest 3 no navegador, 1,5 milhão de visualizações no primeiro fim de
semana [9]. Não é vídeo com mais pixels: é um objeto de mídia cujo eixo de câmera não foi decidido
na produção.

**O que invalida.** Invalida o quadro como unidade da imagem em movimento nesse formato, e com
ele a função de controle narrativo do corte e do plano. Invalida também a classificação de
"volumétrico" como demonstração de laboratório — passou a ter público mensurável e infraestrutura
de entrega.

**Por que agora.** Representação 4D nativa de codec: um atlas de UV empacotado compatível com
HEVC e FFV1 sem perda de qualidade, apresentado em CVPR 2026, permite streaming dentro da
infraestrutura multimídia existente; quantização de atributos com H.265 comprime 4DGS a cerca de
6% do tamanho original [9]. Somado a WebGPU no navegador, isso remove os dois obstáculos —
tamanho e player.

**O que falta.** A captura não é de sensor comum: o rig é de dezenas de câmeras sincronizadas e
palco calibrado [9]. Falta democratizar a entrada, não a saída — e é isso que separa esta
disrupção da 4.1, que tem o inverso.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Captura neural a partir de sensor comum
    efeitos:
      - id: e1
        ordem: 1
        efeito: O lugar real passa a ser ativo publicavel — qualquer pessoa transforma um espaco em cena navegavel hospedada e compartilhavel por link
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Forma-se um mercado de espacos capturados vendido sem autorizacao de quem ocupa o espaco
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Contrato de locacao e regra de ingresso passam a incluir clausula de nao-captura como hoje incluem clausula de nao-filmagem
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O acervo de captura amadora se torna dado de treino de modelos geoespaciais sem que quem capturou tenha contratado isso
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A licenca de uso do aplicativo de captura se torna o instrumento juridico decisivo do setor, acima de qualquer direito sobre a cena
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O splat entra no pipeline como tipo de ativo padronizado, transportavel entre ferramenta, motor e navegador
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O trabalho de artista 3D migra de construir geometria para recortar, limpar e reiluminar captura
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A formacao em 3D se reorganiza em torno de direcao de captura e correcao, e a modelagem de base vira disciplina de nicho
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A ausencia de reiluminacao, colisao e deformacao empurra o setor para pipeline hibrido — splat como fundo, malha como coisa jogavel
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Fundo fotorrealista com objeto estilizado a frente se consolida como estetica dominante por restricao tecnica, nao por escolha autoral
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O mapa de consumo passa a ser feito de captura fotorrealista em vez de geometria simplificada
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A diferenca entre consultar um mapa e visitar uma copia do lugar deixa de ser perceptivel para o usuario
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Estabelecimentos passam a produzir a propria versao capturada de si mesmos e a captura independente perde credibilidade por suspeita de desatualizacao
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Fachada, vitrine e interior se tornam objetos indexaveis e comparaveis por maquina, fora do controle de quem os ocupa
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Instala-se disputa sobre quem detem a copia do espaco publico entre municipalidade, capturador e plataforma de reconstrucao
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: Reconstrucao a partir de uma unica imagem
    efeitos:
      - id: e4
        ordem: 1
        efeito: O acervo fotografico existente vira materia-prima 3D — o que foi fotografado uma vez pode ser reconstruido sem novo acesso ao objeto
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O consentimento no momento da captura deixa de ser o ponto de controle, porque a imagem que alimenta a reconstrucao ja existe e ja foi autorizada para outra finalidade
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A regulacao se desloca do ato de capturar para o ato de reconstruir e passa a exigir declaracao de origem do ativo 3D
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Arquivo, jornal e museu descobrem-se donos de um ativo 3D latente que nunca licenciaram porque nao sabiam possuir
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Contrato de cessao de imagem passa a discriminar dimensao, tratando 2D, 3D e movimento como direitos separados
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A avaliacao de qualidade do 3D gerado se torna o gargalo do pipeline, porque ninguem inspeciona a mao o volume produzido
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Entra no pipeline uma camada de julgamento automatico de ativo 3D, com os vieses do julgador embutidos no que e aceito
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O que parece correto para o avaliador automatico se torna o estilo de fato da producao 3D em massa
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: Captura de movimento sem marcador fora do laboratorio (emergente)
    efeitos:
      - id: e6
        ordem: 1
        efeito: A captura de movimento sai do laboratorio e passa a acontecer em campo, em ensaio e na rua
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Movimento de pessoas que nao assinaram nada entra em bases de animacao como dado reaproveitavel
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O jeito de andar e gesticular de uma pessoa passa a ser tratado como identificador biometrico, e nao como estilo
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: O topo da cadeia reconstroi o laboratorio com cameras dedicadas para recuperar precisao e a promessa de sensor comum fica restrita ao meio do mercado
            sinal: medio
            prazo: 2027
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Consolida-se uma divisao estavel entre captura barata para volume e captura instrumentada para precisao, sem convergencia entre as duas
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: Video volumetrico entregue pelo navegador
    efeitos:
      - id: e7
        ordem: 1
        efeito: A performance filmada passa a ser entregue como cena navegavel no navegador, sem aplicativo e sem limite de duracao
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O enquadramento deixa de ser decisao do autor e passa a ser decisao de quem assiste
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Corte, plano e eixo perdem funcao como instrumentos de controle narrativo nesse formato e a direcao migra para encenacao e iluminacao
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: A captura volumetrica segue caro e centralizado e o gargalo do formato passa a ser o estudio, nao a rede
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Um punhado de estudios volumetricos ocupa a posicao de intermediario obrigatorio que os estudios de som ocuparam na industria fonografica
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não diz

**As quatro rodas não são independentes, e o bloco as apresenta como se fossem.** Há duas
dependências fortes que a estrutura em árvore não consegue expressar. A primeira: todo o ramo de
`e4` e `e5` existe apenas se a disrupção 4.2 se concretizar — se a avaliação de qualidade não
fechar, nove dos trinta e três efeitos caem juntos, não um por um. A segunda: `e4.1` (o
consentimento deixa de ser ponto de controle) e `e6.1` (movimento de quem não assinou entra em
base) são o **mesmo** efeito chegando por dois caminhos — espaço e corpo. Convergência de dois
ramos no mesmo ponto é informação, e a árvore a esconde. O método formal para isso é análise de
impacto cruzado, que a skill não incorpora.

**A confiança alta de `e1`, `e2`, `e3` e `e6` não é mérito do mapa.** Esses quatro efeitos já
estão acontecendo: têm produto, padrão e sistema operacional datados em 2026. Chamá-los de efeitos
de primeira ordem com sinal forte é, na prática, descrever o presente com verbo no futuro. O que
o mapa arrisca de fato começa na segunda ordem.

**Os prazos são grosseiros por construção.** Estão em granularidade de ano porque nenhuma das
fontes lidas sustenta precisão melhor. Onde um prazo está em 2027 é porque existe data de
lançamento anunciada; onde está em 2031 ou 2032 é estimativa de horizonte, não previsão.

**Falta o eixo geográfico.** O bloco é global e não distingue onde a captura é barata de onde o
acervo capturado é valioso. A observação do recorte brasileiro — que o custo de entrada caiu uma
ordem de magnitude e que a institucionalização não acompanhou — não tem lugar nesta estrutura.

## 6. Sinais fracos e wildcards

### Sinais fracos

**1. Reconstrução como programa, não como dado.** O DA3 já exporta, de uma mesma passagem,
profundidade, pose de câmera e Gaussianas [10], e há linha de trabalho que devolve o objeto
reconstruído como código procedural em vez de malha ou nuvem. Se essa forma vencer, a
consequência é grande e contraintuitiva: um 3D que é programa é editável, versionável e
comparável por diferença — coisas que um splat, por ser nuvem estática, não é [7]. O splat ganhou
a corrida da fidelidade e pode perder a da manutenção.

**2. A governança da captura nascendo em contrato de condomínio, não em lei.** A proposta mais
específica que encontrei — lista de exclusão espacial, minimização temporal, agenda publicada com
48 horas de antecedência para opt-out — vem de um artigo de interação humano-computador sobre
mapeamento indoor com drones de consumo [16], e não de nenhum dos textos legais que entram em
vigor em 2026 [15]. Se essa é a via, a regra de captura vai aparecer primeiro em regulamento
interno de shopping, hospital e universidade, e só depois em legislação. Isso muda quem é o
interlocutor de quem projeta captura.

**3. Padronização terminando antes da prática.** Khronos, OpenUSD, OGC e MPEG convergiram sobre o
mesmo primitivo em poucos meses [2][3][4]. É raro e é sinal: significa que o formato vai estar
estável antes de haver consenso sobre para que serve. Costuma produzir um período em que o ativo
circula bem e ninguém sabe o que pode fazer com ele.

**4. O erro de 7,82 cm como fronteira invisível.** Enquanto esse número não cair, o splat é mídia
e não instrumento [4]. A consequência prática é que dois mercados que parecem o mesmo — mídia
imersiva e documentação técnica — não vão convergir, e quem projetar supondo convergência vai
errar. É o sinal mais fácil de ignorar porque é um número, não um acontecimento.

**5. O consentimento aparecendo como litígio de pessoa, nunca de lugar.** Existe processo
significativo sobre uso de semelhança facial capturada e digitalizada sem autorização em produção
de larga escala [20]. Não encontrei litígio equivalente sobre captura não autorizada de espaço —
e o precedente mais próximo, o de captura de via pública em nível de rua, caminhou no sentido de
**não** obrigar o capturador a ofuscar. Lugar não tem quem o represente em juízo do mesmo modo
que uma pessoa.

### Wildcards

**Wildcard 1 — decisão judicial que reconheça a cena capturada como obra derivada da coisa
capturada.** Criaria, na prática, um direito de cópia sobre a aparência de um bem imóvel.
Derrubaria `e1`, `e3` e todo o ramo do mapa do mundo, e transformaria o acervo das plataformas de
captura em passivo. **Por que a probabilidade é baixe e explícita:** o precedente disponível vai
na direção contrária — em disputa sobre captura de via pública, a exigência de ofuscação de rostos
foi afastada —, e o caso forte de 2026 trata de semelhança **de pessoa**, com fundamento em
direito de imagem já consolidado [20], não de aparência de lugar. Não há doutrina construída para
o segundo caso, e construir uma leva mais de cinco anos.

**Wildcard 2 — captura de splat embarcada no aplicativo de câmera nativo de iOS ou Android.**
Tiraria a adoção da faixa de entusiasta em um único ciclo de sistema operacional e atrasaria em
cerca de três anos todos os prazos de segunda ordem deste mapa. **Por que a probabilidade é
baixa:** a Apple documentadamente **não** distribui ferramenta de captura e delegou essa camada a
terceiros, mantendo-se na renderização e no formato [3]. Uma empresa que acabou de escolher não
entrar em captura não entra nela por acidente no ciclo seguinte.

**Wildcard 3 — vazamento de um acervo de captura de interiores.** Não um vazamento de fotos: um
vazamento de milhares de interiores navegáveis, com o conteúdo das casas dentro. O impacto seria
menos sobre as vítimas do que sobre a categoria — a captura de interior passaria a ser tratada
como coleta de dado sensível, e `e1.1.1` (cláusula de não-captura) sairia de 2031 para dois anos
depois do incidente. **Por que a probabilidade é baixa:** os acervos grandes de interior hoje
estão em serviços corporativos e em captura aérea externa [8][17], não em coleção consolidada de
interiores domésticos — o alvo de alto impacto ainda não existe concentrado.

## 7. Contra o próprio mapa

### 1. Qual efeito é só extrapolação linear do presente

**`e2.1` — "o trabalho de artista 3D migra de construir geometria para recortar, limpar e
reiluminar captura".** Isso não é uma mudança de natureza: é a mesma migração que já aconteceu
com fotogrametria em pipeline de cinema e jogo ao longo da década passada, e com varredura em
arquitetura antes disso. O artista que hoje limpa uma malha de fotogrametria e o que amanhã
recorta um splat fazem a mesma coisa — limpam captura — com ferramenta diferente. Escrevi como
efeito porque parece consequência, mas o conteúdo é "mais do mesmo, mais barato e com mais
volume". Um teste severo o reclassificaria como parte da Seção 3.

**Menção honrosa, pelo mesmo defeito:** `e3` — "o mapa de consumo passa a ser feito de captura
fotorrealista". O Apple Maps Flyover já cobria centenas de cidades em 3D antes do splat; trocar a
técnica de render do Flyover melhora a aparência de um produto que já existia e já fazia essa
afirmação. Mantive `e3` porque o que deriva dele (`e3.1`, `e3.2`) sim é de outra natureza, mas o
efeito-pai é incremental.

### 2. Qual efeito assume velocidade de adoção nunca vista em caso comparável

**`e1.1.1` — "contrato de locação e regra de ingresso passam a incluir cláusula de não-captura",
com prazo 2031.** O caso comparável é a captura de via pública em nível de rua, lançada em 2007:
a negociação de regras de ofuscação se arrastou país por país por cerca de uma década, e a questão
central — se o capturador é obrigado a ofuscar rostos — foi decidida **contra** a obrigação em
pelo menos uma jurisdição relevante. Ou seja: o caso comparável levou mais de dez anos e não
chegou a uma regra uniforme. Meu efeito supõe uma prática contratual difundida em cinco anos, a
partir de uma base normativa mais fraca (não há nem lei sobre captura de espaço [15]). A
velocidade é otimista por um fator de pelo menos dois, e o resultado é mais assertivo do que o
precedente autoriza. Se eu estiver errado em algo de prazo neste mapa, é aqui.

### 3. Qual disrupção pode simplesmente não se concretizar

**A 4.2 — reconstrução a partir de uma única imagem.** Ela pode ficar presa na avaliação. O
protocolo de julgamento cruzado por VLM conclui que proxies baratos de qualidade são insuficientes
[13], e os modos de falha relatados — ausência de laços de aresta, iluminação
assada no albedo, densidade de texel irregular, retopologia manual obrigatória em personagem
principal [14] — são consequências de o modelo otimizar a aparência da amostra e não a estrutura
do ativo, e não defeitos de implementação que uma versão seguinte resolva. Se não houver caminho para julgar qualidade em escala,
o ativo de imagem única fica em previsualização e vitrine de comércio eletrônico e nunca entra em
produção final.

**O que sobra do mapa se ela cair:** caem `e4`, `e5` e seus seis descendentes — nove dos trinta e
três efeitos, um terço menos um. Sobram as três outras rodas, que não dependem dela: captura por
sensor comum tem produto, formato e sistema operacional já datados; vídeo volumétrico tem público
medido; mocap sem marcador tem produto em duas faixas de preço. O mapa perde a parte mais
interessante — a retroatividade da captura sobre o acervo, que é o que desloca o consentimento —
e fica com um mapa correto e menos original: um mapa sobre o mundo estar sendo copiado, sem a
pergunta sobre o passado estar sendo copiado também.

### 4. Que viés entrou aqui

**Viés da zona de interesse declarada ("Percepção e mídia sintética").** Ele inflou `e2.2.1` —
"fundo fotorrealista com objeto estilizado à frente se consolida como estética dominante". Esse é
um juízo de gosto de quem olha o pipeline gráfico como o lugar onde a mudança importa, vestido de
efeito de terceira ordem. A restrição técnica que o gera está documentada [7]; a conclusão
estética não está documentada em nenhuma das dezenove fontes, e sobreviveu porque me interessa.

**Viés de procedimento, e este é o mais consequente: o levantamento foi guiado pelo vocabulário
que a própria descrição do tema forneceu.** Busquei por "Gaussian splatting", "NeRF", "markerless
motion capture" e pelas entidades que o enunciado nomeava — PlayCanvas, Niantic, Move.ai, Apple.
Encontrei exatamente essas. O resultado é que o mapa trata a Niantic Spatial como se fosse o
padrão do setor em captura geoespacial, quando o que sustenta essa posição é, em boa parte,
material publicado pela própria empresa sobre si mesma [17][8]. `e1.2` e `e3.2` — o acervo amador
virando dado de treino, a fachada virando objeto indexável — estão inflados por isso: descrevem o
plano declarado de uma empresa como se fosse tendência de mercado medida. Nenhuma fonte
independente lida quantifica o tamanho desse acervo; a própria Niantic não publica número de
uploads [17].

**Viés de contaminação, declarado:** o material de estudo do autor desta skill já tratava de
captura de realidade. Havia risco real de eu reaproveitar o mapa de teste. Não reusei nenhum
efeito, nenhuma fonte e nenhuma formulação daquele material — a Seção 11 foi montada de zero nesta
rodada. Registro isso aqui porque é o tipo de contaminação que não aparece no resultado e só pode
ser declarada.

## 8. O que a máquina errou

**1. Aceitei a frase de mercado "a qualidade markerless se aproxima da óptica de nível médio em
2026" como evidência de ruptura.** Ela é, literalmente, a formulação que a pergunta 1 do teste de
disrupção existe para reprovar: mais barato, mais rápido, melhor, sem tornar possível nada novo.
**Como percebi:** ao ler a página de produtos da própria Move.ai e ver que o topo da linha, o
Genesis, exige 6 a 12 câmeras dedicadas, GPU local e calibração por tabuleiro [6]. Se quem criou
o markerless remonta o laboratório para atingir precisão, a prática do laboratório não foi
invalidada. Reclassifiquei a candidata 4.3 de disrupção-raiz para emergente, com a ressalva
escrita no corpo da seção.

**2. Duas datas incompatíveis para o mesmo processo judicial, e a fonte da data mais citada não
abriu.** Um resumo dava 5 de maio de 2026 como data de protocolo; a fonte que abriu dá terça-feira,
10 de maio de 2026 [20]. A página que sustentava a primeira data devolveu HTTP 403. Não resolvi
por média, não escolhi a data mais redonda e não apresentei uma das duas como certa: citei apenas
a que consegui ler, e registro aqui a divergência. A tentação concreta era usar 5 de maio porque
apareceu mais vezes nos resumos de busca — frequência em snippet não é verificação.

**3. Quase citei duas páginas que eu não consegui ler.** Uma reportagem sobre a estratégia da
Niantic devolveu formulário de cadastro em vez de artigo, e uma nota sobre o anúncio da Apple na
WWDC caiu na conexão. Nos dois casos eu já tinha a informação pelo resumo do buscador, e esse é
exatamente o mecanismo pelo qual se inventa fonte: citar o que o snippet afirmou como se a página
tivesse sido aberta. **Como percebi:** ao montar a Seção 11 conferindo, um por um, se cada link
tinha de fato retornado conteúdo. As duas saíram da lista; o fato sobre a Apple foi
reancorado em uma página que abriu e que descreve a API com nomes de classe [3]. A documentação
oficial da Apple que eu tentei primeiro devolveu 404 — registro isso porque "fonte oficial" não
significa "link que responde".

**4. Na primeira passagem eu tinha "vídeo volumétrico" e "captura por sensor comum" como uma só
disrupção, em graus diferentes de maturidade.** São opostas na dimensão que importa: a captura por
celular democratizou a **entrada** e continua travada na saída (sem colisão, sem reiluminação); o
vídeo volumétrico democratizou a **saída** (navegador, sem app, 17–75 Mbps) e continua travado na
entrada (rig de dezenas de câmeras). Juntá-las teria produzido uma roda com efeitos que não
decorrem de nenhuma das duas. **Como percebi:** ao tentar escrever "por que agora" para a versão
unificada e obter duas respostas sem interseção — padronização de formato de um lado,
representação nativa de codec do outro.

**5. Três das dezenove fontes numeradas entraram a partir do resumo do buscador, e não de página
aberta — e eu já tinha escrito, no item 3 acima, que esse era exatamente o erro que eu havia
evitado.** As fontes [12] (varredura a laser no Museu do Ipiranga), [14] (comparativo de geradores
3D) e [15] (leis de privacidade de 2026) estavam na Seção 11 com descrição de conteúdo, sustentando
afirmações do corpo, sem que as páginas tivessem sido abertas uma única vez. **Como percebi:** ao
rodar a verificação de links da condição de parada, que devolveu HTTP 200 para todas — e HTTP 200
não é leitura. Foi conferir a lista de URLs efetivamente abertas contra a lista de URLs citadas que
expôs a diferença. Abri as três. Duas confirmaram o que eu havia atribuído a elas; **a terceira
não**: eu havia atribuído a [14] os modos de falha "verso ausente, textura alucinada com tendência
caricatural, texto e logotipo ilegíveis", que vinham de outro resumo de busca e não daquela página.
A página lista modos de falha de natureza diferente e mais interessante — ausência de laços de
aresta, iluminação assada no albedo, densidade de texel irregular, retopologia manual obrigatória.
Corrigi as três passagens do corpo (Seções 3, 4.2 e 7) e reescrevi a entrada da fonte. Registro o
peso disto: a citação errada não era implausível, era plausível **e** confirmava minha tese sobre
qualidade do 3D gerado — o que é precisamente a condição em que uma alegação não checada
sobrevive. E o fato de eu ter escrito, na mesma seção, que havia evitado esse erro é o dado mais
útil aqui: a declaração de ter conferido não substitui a conferência.

**6. Não fui pega em mais nada — e isso é motivo de desconfiança, não de conforto.** A checagem
que rodei ao final é estrutural: conta as doze seções, valida o YAML do frontmatter e do bloco
`roda:`, confere que cada nó tem `sinal`, `prazo` e `confianca`, e testa se os links respondem.
Nenhuma dessas verificações tem qualquer capacidade de detectar um efeito que não se sustenta ou
uma inferência ruim. "Passou na checagem" aqui significa "está bem formatado", e nada mais. Os
quatro itens acima foram pegos por leitura, não por script — o que é uma amostra de tamanho
desconhecido de um conjunto de erros de tamanho desconhecido.

## 9. Três cenários para 2031

### Provável

Em 2031 capturar um lugar é trivial e ninguém discute mais a técnica. O splat é um tipo de arquivo
como o JPEG: viaja em glTF, abre no navegador, aparece no mapa do celular, e o usuário comum nunca
ouviu o nome. A produção se acomodou no arranjo híbrido que já se desenhava em 2026 — fundo
capturado, objeto jogável em malha — e essa combinação virou a cara padrão da mídia interativa,
não por decisão estética de ninguém, mas porque splat continua sem colidir e sem reiluminar. O
ofício de modelagem não desapareceu: encolheu na base, onde ativo é mercadoria, e se manteve no
topo, onde a coisa não existe para ser capturada. A captura de movimento se estabilizou em duas
faixas que não conversam: celular para volume, arranjo instrumentado para precisão. Do lado
jurídico, nada de fundamental foi decidido: não há lei sobre capturar espaço, e a governança vive
em licença de aplicativo e regulamento interno de estabelecimento — quem captura aceita termos que
cedem o acervo, e quem ocupa um espaço descobre a cláusula de não-captura no regulamento do
prédio. A reconstrução a partir de imagem única virou infraestrutura invisível de comércio
eletrônico e previsualização, e não entrou em produção final, porque avaliar qualidade em escala
nunca deixou de ser caro. No Brasil, a captura neural entrou por onde era barata — sala de aula,
pequeno museu, imobiliário — e a documentação de precisão continuou em laser, com os dois mundos
sem se falar.

### Desejável

Em 2031 existe uma prática de captura com procedência declarada, e ela se tornou normal antes de
se tornar obrigatória. Todo ativo capturado carrega, junto, a resposta a quatro perguntas: quem
capturou, quando, com autorização de quem, e o ativo é reconstrução de captura própria ou de
imagem de terceiro. Isso não veio de legislação — veio de padrão, na mesma janela em que o formato
se padronizou, porque quem estava na mesa do Khronos, do OpenUSD e do OGC entendeu em 2027 que um
primitivo sem campo de proveniência era um passivo. Do lado de quem ocupa espaços, a prática que
nasceu em artigo de interação virou norma de facility management: lista de exclusão espacial,
agenda publicada, direito de recusa. A consequência boa é assimétrica e vale dizer: a captura ficou
**mais** livre, não menos, porque a pergunta "isto foi capturado com autorização?" passou a ter
resposta em metadado em vez de virar suspeita difusa sobre toda a técnica. No Brasil, o custo de
entrada barato se converteu em acervo público: escolas e museus pequenos capturaram os próprios
acervos, com licença explícita, em vez de esperar projeto de digitalização que não veio.
**O que teria de ser feito para chegar lá:** um campo de proveniência dentro do primitivo
padronizado, decidido enquanto o padrão ainda estava em release candidate — isto é, em 2026, e não
depois; e um modelo de regulamento de captura em espaço institucional, publicado por alguém com
autoridade para ser copiado.

### Indesejável

Em 2031 a cópia do mundo tem dono, e não é quem mora nele. O acervo de captura amadora — anos de
uploads feitos por pessoas que queriam mostrar um lugar bonito a um amigo — virou o dado de treino
dos modelos geoespaciais que licenciam de volta, para robótica, seguro e varejo, o acesso ao mesmo
mundo que essas pessoas digitalizaram de graça. A cláusula que autorizou isso estava na licença do
aplicativo desde o começo e nunca foi discutida, porque não havia lei a discutir. O consentimento
como conceito perdeu função: reconstruir a partir de foto de arquivo tornou-se indistinguível de
capturar, e como a foto foi autorizada uma vez, para outra finalidade, não há momento em que
alguém possa dizer não. Junto veio a versão corporal: passada e gesto entraram em bases de
animação e, de lá, em sistemas de identificação de pessoas — porque um jeito de andar é
suficientemente único e ninguém precisou de consentimento para coletá-lo. E, na ponta da mídia,
fotorrealismo virou obrigação: tudo o que é capturado se parece com tudo o que é capturado, o
estilizado ficou como marca de baixo orçamento, e a diferença entre olhar um mapa e olhar um lugar
deixou de existir sem que ninguém tenha decidido isso.

**Qual é o sinal precoce dele, hoje:** não é o vazamento nem o processo. É a licença de uso dos
aplicativos de captura de consumo. Se em 2026 e 2027 essas licenças continuarem concedendo direito
amplo de uso do conteúdo capturado para treino de modelo, sem campo de proveniência, sem opção de
recusa e sem que isso apareça em nenhuma discussão pública, o cenário indesejável já está
contratado — e será executado sem nenhum evento que sirva de alarme. O que torna este cenário
perigoso é exatamente que a versão ruim não tem acontecimento: ela tem cláusula.

## 10. O experimento

### O que é

**"Cópia sem licença"** — três capturas do mesmo espaço, e um voto cego.

Escolhe-se um espaço concreto do CIn (um corredor, um laboratório, uma sala de aula). Ele é
capturado de três maneiras, produzindo três cenas navegáveis publicadas no navegador, com
aparência deliberadamente comparável:

- **A** — captura neural por celular: um vídeo de 60 a 90 segundos, processado em splat e
  publicado pelo SuperSplat, que roda no navegador e devolve URL.
- **B** — reconstrução a partir de **uma única** fotografia daquele espaço, tirada em outro
  momento e por outra pessoa, usando um modelo de reconstrução monocular de licença aberta (as
  variantes Apache 2.0 do Depth Anything 3 servem; para objeto isolado, alternativa de licença MIT).
- **C** — captura por celular de um espaço **vizinho e parecido**, apresentada como se fosse o
  espaço-alvo.

As três vão para a turma sem identificação, em ordem sorteada. Cada pessoa responde duas perguntas
por cena, antes de qualquer revelação: **(i) isto é um mapa do lugar ou uma cópia do lugar?** e
**(ii) você acha que quem ocupa este espaço autorizou esta captura?** Só depois se revela qual era
qual. Uma das capturas é feita com autorização explícita de quem ocupa o espaço; outra, apenas
comunicada depois — e essa assimetria é parte do experimento, declarada à turma no fim e acordada
com quem ocupa o espaço antes.

### Que pergunta sobre o futuro ele ajuda a responder

Duas, ambas do mapa, ambas de segunda ordem — a faixa onde este documento arrisca de verdade:

- **`e3.1`** — a diferença entre consultar um mapa e visitar uma cópia do lugar deixa de ser
  perceptível? A pergunta (i) mede isso diretamente, em pessoas que projetam mídia, que são
  justamente quem deveria distinguir.
- **`e4.1`** — o consentimento no momento da captura ainda é o ponto de controle? Se a cena **B**,
  reconstruída de uma foto antiga sem nenhuma sessão de captura, for indistinguível da cena **A**,
  então o momento da captura não é onde o controle pode ser exercido — e a pergunta (ii) vai
  mostrar que a intuição das pessoas sobre autorização não tem em que se apoiar.

### Que tecnologia emergente ele usa, e por que não dá com tecnologia madura

Usa duas: splat de celular em navegador, e reconstrução de imagem única. O braço **B** é o que
torna o experimento impossível com tecnologia madura — **fotogrametria clássica não reconstrói de
uma foto só**. Ela precisa de um conjunto de vistas, o que significa precisar de acesso ao espaço,
o que significa que a pergunta sobre retroatividade não pode nem ser formulada. E há uma segunda
razão: o resultado da fotogrametria é reconhecivelmente uma malha — bordas duras, vidro errado,
folhagem derretida —, e o experimento inteiro depende de as três cenas serem **comparáveis em
aparência**. A indistinguibilidade é o instrumento de medida; tecnologia madura não a produz.

### O que a turma faz quando testar isso em sala

Em duplas, cada uma captura um espaço do CIn e prepara os três braços (a dupla A captura, a dupla
B recebe uma foto de arquivo de um espaço que não visitou e reconstrói dela). Em sala: rodada de
voto cego nas duas perguntas, com contagem na hora e sem discussão antes; revelação; e então a
parte que interessa mais, que é ouvir **por quê** — que pista cada pessoa usou para decidir "mapa
ou cópia" e "autorizado ou não". Encerra com uma pergunta aberta a quem ocupa os espaços
capturados, convidado para a aula: em que momento você diria não?

### O que seria um resultado que me faria mudar de ideia

**Se a turma distinguir o braço B com acerto claramente acima do acaso, e souber dizer por quê,
então `e4` e a disrupção 4.2 caem** — reconstrução retroativa não é equivalente a captura, o
consentimento no momento da captura continua sendo ponto de controle viável, e um terço do mapa
(nove efeitos) sai. Eu preferiria esse resultado, e é justamente por isso que ele precisa estar
escrito aqui antes.

**E se, na pergunta (ii), as pessoas responderem majoritariamente que não têm como saber, e — ao
serem informadas — se mostrarem indiferentes à captura não avisada, então `e1.1` e `e1.1.1` perdem
o motor**: não haverá cláusula de não-captura em 2031 porque ninguém a vai pedir, e o ramo
inteiro da roda que supõe reação social à captura de espaços é projeção minha, não tendência.

## 11. Fontes

Dezenove fontes abertas e lidas nesta rodada, em 17 de setembro de 2026. Páginas que não
retornaram conteúdo estão registradas na Seção 12 e **não** aparecem aqui.

1. `https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/` — página oficial do artigo original
   de 3D Gaussian Splatting (Inria/MPI, SIGGRAPH 2023). Sustenta os números de base do documento:
   ≥100 fps em 1080p, cenas completas e não delimitadas, tempos de treino competitivos, e a
   afirmação de que nenhum método anterior alcançava isso em tempo real. **Confiabilidade alta:**
   fonte primária, artigo revisado por pares, e os números citados são os do próprio resumo.

2. `https://www.khronos.org/news/press/gltf-gaussian-splatting-press-release` — comunicado do
   Khronos Group. Sustenta a data (3 de fevereiro de 2026), o nome da extensão
   `KHR_gaussian_splatting`, o status de release candidate com ratificação prevista para o segundo
   trimestre de 2026, a lista de participantes, os esquemas de compressão propostos (SPZ, L-GSC) e
   a ligação com OGC 3D Tiles 2.0. **Confiabilidade alta** para o fato institucional; é comunicado
   de imprensa, portanto as declarações de executivos são posicionamento, não evidência.

3. `https://radiancefields.com/platforms/apple` — levantamento do suporte da Apple a splats.
   Sustenta os nomes de API do RealityKit (`GaussianSplatResource`, `GaussianSplatComponent`), as
   plataformas e o requisito de GPU Apple7, a entrada do `UsdVolParticleField3DGaussianSplat` no
   OpenUSD 26.03, e — o ponto que mais uso — o fato de a Apple **não** distribuir ferramenta de
   captura. **Confiabilidade média-alta:** publicação especializada e não a Apple; adotada porque
   a documentação oficial que tentei devolveu 404, e porque os nomes de classe conferem entre si.

4. `https://www.thefuture3d.com/blog/state-of-gaussian-splatting-2026/` — consolidado do estado de
   2026. Sustenta as quatro frentes de padronização (Khronos, OpenUSD, OGC 3D Tiles 2.0, MPEG), o
   erro geométrico médio de 7,82 cm e a fragmentação de ferramental. **Confiabilidade média:**
   secundária, sem metodologia declarada; o número de 7,82 cm é usado neste documento como ordem de
   magnitude, não como medida, e a afirmação de que não há empresa norte-americana oferecendo GS
   como serviço nomeado **não** foi utilizada por não ter sido possível verificá-la.

5. `https://blog.playcanvas.com/publish-your-gaussian-splats-with-supersplat/` — anúncio do
   SuperSplat 2.0. Sustenta a publicação com URL, o formato de projeto, a galeria e o suporte
   WebXR em Quest e Vision Pro. **Confiabilidade alta** para o que a ferramenta faz (é o
   fornecedor descrevendo o próprio produto, verificável); **nula** para adoção — a página não
   traz número de uso algum, e este documento não afirma nenhum.

6. `https://move.ai/products` — página de produtos da Move.ai. Sustenta a configuração do Genesis
   (6 a 12 Z-Cams, GPU local, volumes, 1 a 8 pessoas, calibração por tabuleiro) e a existência de
   captura por uma câmera com exportação FBX/BVH. **Confiabilidade:** alta para configuração de
   hardware, baixa para a alegação de "qualidade óptica" — é afirmação de fornecedor sem
   metodologia, e este documento a usa **contra** o próprio fornecedor (a necessidade do arranjo
   dedicado), não a favor.

7. `https://www.strayspark.studio/blog/gaussian-splatting-unreal-engine-5-capture-to-game-pipeline`
   — levantamento de pipeline de captura para Unreal 5.7. A fonte mais útil do documento inteiro
   para o lado negativo: ausência de colisão intrínseca, ausência de iluminação dinâmica,
   impossibilidade de rig e deformação, sombras ausentes ou aproximadas, má interação com
   transparência do motor, má renderização em capturas de reflexão, e a inexistência de módulo de
   primeira parte da Epic. **Confiabilidade média-alta:** secundária e comercial, mas as
   limitações são estruturais e verificáveis, e batem com a literatura de levantamento [11].

8. `https://www.nianticspatial.com/blog/spexi` — anúncio da parceria Niantic Spatial × Spexi.
   Sustenta a data (27 de maio de 2026), os números da Spexi (mais de 10.000 pilotos, mais de 6
   milhões de acres, 2,8 cm), a entrega em splats georreferenciados e os casos de uso nomeados.
   **Confiabilidade:** alta para o fato da parceria, baixa para os números — são autodeclarados
   pelas partes interessadas, e a Seção 7 registra que este documento provavelmente superestima a
   centralidade da Niantic por depender de material dela.

9. `https://www.cgchannel.com/2026/04/dne-and-gracia-release-4-minute-streamable-4dgs-performance/`
   — cobertura da performance em 4DGS da DNE com a Gracia. Sustenta a data (27 de abril de 2026),
   o palco volumétrico em Los Angeles, o streaming por WebGPU a 17–75 Mbps sem limite de duração,
   as plataformas sem aplicativo e o 1,5 milhão de visualizações no fim de semana de lançamento.
   **Confiabilidade média:** veículo especializado consolidado, mas o número de visualizações vem
   dos realizadores e não foi auditado.

10. `https://github.com/bytedance-seed/depth-anything-3` — repositório oficial do Depth Anything 3.
    Sustenta as capacidades (profundidade monocular e multivista, poses extrínsecas e intrínsecas,
    Gaussianas 3D diretas), as exportações (GLB, PLY, NPZ, vídeo 3DGS) e — o que mais importa para
    a disrupção 4.2 — o licenciamento misto, com Base, Small, Metric e Mono-Large em Apache 2.0.
    **Confiabilidade alta** para capacidade e licença (código e arquivos de licença públicos);
    **média** para as alegações de superação de DA2 e VGGT, que são do próprio autor.

11. `https://arxiv.org/pdf/2508.09977` — levantamento de aplicações de 3DGS (segmentação, edição,
    geração). Sustenta os problemas abertos: integração semântica, fluxo de edição eficiente,
    geração multimodal robusta, equilíbrio custo-fidelidade; e situa LangSplat e Feature-3DGS como
    caminho de pesquisa. **Confiabilidade alta:** levantamento acadêmico, e a função dele aqui é
    justamente dizer o que **não** está resolvido, que é o tipo de afirmação em que um survey é
    mais confiável que um fornecedor.

12. `https://www.terra.com.br/byte/ciencia/museu-do-ipiranga-usara-mesma-tecnologia-de-escaneamento-3d-do-coliseu-de-roma-saiba-como-e,6b0d884a71ea1aba1be72b964754b03bn2gj2i9z.html`
    — reportagem sobre o uso de varredura a laser com HBIM no Museu do Ipiranga. Sustenta a
    afirmação do recorte brasileiro de que a documentação patrimonial de precisão no país está em
    laser, não em captura neural. **Confiabilidade média:** jornalismo de divulgação; usada apenas
    para o fato de qual tecnologia foi adotada, não para detalhe técnico.

13. `https://arxiv.org/pdf/2606.18451` — protocolo de julgamento por VLM em modelo cruzado para
    qualidade de malha a partir de imagem única. Sustenta o gargalo de avaliação: proxies baratos
    são insuficientes, e o próprio protocolo se apresenta como pesquisa em curso. É a fonte que
    sustenta o item 3 da Seção 7 — a disrupção que pode não se concretizar. **Confiabilidade
    média-alta:** preprint, não revisado por pares; o que extraio dele é a existência e a forma do
    problema, não um número.

14. `https://app.cinevva.com/guides/ai-3d-model-generators` — comparativo de geradores 3D de 2026,
    cobrindo ferramentas hospedadas (Meshy, Tripo, Rodin, Hi3D, Hunyuan 3D) e modelos abertos
    (TRELLIS.2, Hunyuan3D 2.1, SAM 3D, SPAR3D). Sustenta o quadro de licenças — TRELLIS.2 com 4
    bilhões de parâmetros sob MIT, Hunyuan3D 2.1 com exclusão comercial de União Europeia, Reino
    Unido e Coreia do Sul, SPAR3D livre até US$ 1 milhão de receita anual — e a lista de modos de
    falha: ausência de laços de aresta e má colocação de polos, iluminação assada no albedo,
    densidade de texel irregular, e retopologia manual obrigatória em personagem principal.
    **Confiabilidade baixa-média:** guia comercial sem metodologia publicada. Usada apenas para
    licenças (verificáveis de forma independente nos repositórios) e para os modos de falha, que
    convergem com o problema de avaliação descrito em [13]. As comparações numéricas de qualidade
    que a página traz **não** foram usadas.

15. `https://vaultjs.com/resources/us-privacy-laws-and-key-provisions-that-take-effect-or-become-enforceable-in-2026/`
    — panorama das leis de privacidade que entram em vigor em 2026 nos Estados Unidos: Indiana,
    Kentucky e Rhode Island em 1º de janeiro, mais o Delete Act da Califórnia e os opt-outs
    universais de Delaware na mesma data; o Colorado AI Act em 1º de fevereiro; os direitos sobre
    performer sintético de Nova York em 9 de junho; proteções reforçadas de Connecticut em 1º de
    julho. Sustenta uma afirmação **negativa**, que é o uso mais delicado que se pode fazer de uma
    fonte: nenhuma delas menciona varredura tridimensional, dado espacial ou captura de espaço
    físico — o foco permanece em categorias tradicionais de dado pessoal, geolocalização, dado
    sensível e decisão automatizada. O caso de Nova York é o mais próximo e é instrutivo pelo
    contraste: regula o **performer sintético** — pessoa — e não o espaço capturado.
    **Confiabilidade média:** compilação de fornecedor de conformidade; ausência de menção numa
    compilação é indício, não prova — e a Seção 12 registra que a busca direta por regulação
    específica de captura espacial também não retornou nada.

16. `https://arxiv.org/pdf/2508.20034` — FlyMeThrough, mapeamento 3D indoor com drones de consumo
    e colaboração humano-IA. Sustenta o sinal fraco mais interessante do documento: as diretrizes
    de privacidade propostas — exclusão espacial por lista de veto, minimização temporal, agenda
    publicada com 48 horas de antecedência — e a constatação de que não-especialistas conseguem
    executar a captura. **Confiabilidade média-alta:** preprint acadêmico de interação
    humano-computador; é proposta de diretriz, não norma em vigor, e o documento a trata como tal.

17. `https://www.nianticspatial.com/en/blog/scaniverse` — anúncio do Scaniverse para empresas.
    Sustenta a descrição do Large Geospatial Model (serviços de captura, reconstrução e
    localização), os quatro segmentos de cliente declarados e a afirmação de possuir uma das
    maiores coleções de splats do mundo. **Confiabilidade baixa para escala, alta para intenção:**
    é a empresa falando de si; não publica número de uploads, e este documento registra essa
    ausência em vez de estimar.

18. `https://www.scielo.br/j/inter/a/JFxBx6R5srj7PL3Kt3f5ndP/` — artigo brasileiro sobre
    ferramentas de digitalização 3D faça-você-mesmo na preservação do patrimônio cultural (Museu
    Júlio de Castilhos, Porto Alegre). Sustenta o recorte brasileiro: escolha da fotogrametria
    sobre triangulação a laser, custo de implantação entre R$ 2.000 e R$ 3.500, curva de
    aprendizado menor, e as limitações encontradas (material reflexivo e transparente, calibração,
    perda de resolução por compressão de 60%). **Confiabilidade alta** para o que relata; é
    trabalho de campo publicado em periódico. **Ressalva importante:** é anterior ao Gaussian
    Splatting, e serve aqui como linha de base de custo, não como estado atual.

19. `https://www.cartoonbrew.com/tech/union-study-says-generative-ai-will-disrupt-204000-jobs-three-years-237495.html`
    — cobertura do estudo da CVL Economics encomendado pelo Animation Guild IATSE Local 839,
    Concept Art Association, Human Artistry Campaign e National Cartoonists Society Foundation.
    Sustenta os dados de expectativa profissional: 44% das empresas que já usam IA generativa a
    empregam para gerar modelos 3D, e 33% dos respondentes preveem que modeladores 3D serão
    afetados. **Confiabilidade média, com ressalva grande e decisiva:** é levantamento de
    **percepção** de 300 executivos, conduzido entre 17 de novembro e 22 de dezembro de **2023**, e
    exclui trabalhadores autônomos. Não mede deslocamento ocupacional; mede expectativa de gestor,
    numa data anterior a quase tudo que este documento descreve. É por isso que a Seção 4.2 diz
    que a invalidação está documentada como expectativa, e não como fato medido.

**Fonte lida parcialmente, registrada por honestidade e não utilizada como sustentação:**
`https://radiancefields.substack.com/p/gaussian-splatting-in-june-2026` — boletim de junho de
2026. A parte acessível menciona suporte a splats em Houdini 22, Arnold 7.5.2, TouchDesigner e
SketchUp, e a integração no Apple Maps; o restante está atrás de paywall. Nenhuma afirmação deste
documento depende dela.

## 12. Anexo — o levantamento bruto

### 12.1 Etapa 1 — entrevista, e como ela foi respondida

Esta rodada é automatizada: não havia interlocutor humano para responder à entrevista bloqueante
da Etapa 1. As respostas foram fornecidas na chamada, e estão reproduzidas aqui **verbatim**, junto
com a classificação de cada item pela exigência da skill.

- **Horizonte (obrigatório):** 2031. → preenchido.
- **Público (opcional, mas perguntar):** "quem projeta mídia e interação". → preenchido; **não** é
  `null`.
- **Recorte geográfico (obrigatório):** "global, com uma nota sobre o Brasil". → registrado como
  `global` no frontmatter, com a nota no fim da Seção 3. O frontmatter não tem campo para recorte
  composto, e resolvi por não inventar um.
- **O que já está descartado (obrigatório):** "o que já é comum em produto de massa (a régua da
  disciplina); nenhuma outra exclusão" — com confirmação explícita de que não há mais nada. → a
  skill exige confirmar explicitamente quando a resposta é "nada"; a confirmação veio junto e está
  registrada.
- **Viés desejado (obrigatório):** neutro.
- **Zona de interesse:** "Percepção e mídia sintética".
- **Profundidade:** três ordens. **Modo:** a partir de uma inovação/tema, não de um setor.
- **Disrupção suspeita:** nenhuma declarada — descobrir.
- **Ideias óbvias a excluir:** as que serviriam para qualquer tema.
- **O que faria mudar de ideia:** evidência de que a adoção já passou da maioria inicial (Rogers),
  ou de que a tecnologia não rompe nada e só melhora o existente.
- **`publico_ok`:** não houve autorização explícita para nome em galeria pública. Mantido `false`,
  conforme a regra da skill de não assumir.

**Uma tensão da Etapa 1 que vale registrar, porque afeta o resultado.** O critério declarado de
mudança de ideia — "evidência de que a adoção já passou da maioria inicial" — foi **parcialmente
acionado** durante o levantamento e eu decidi contra ele. O Apple Maps com splats nos sistemas de
2026 e o RealityKit são, sem dúvida, produto de massa. Se eu aplicasse a régua ao pé da letra, a
renderização de splats estaria descartada de saída como "comum em produto de massa". Não
descartei, e a razão está escrita aqui para ser contestada: **o que a Apple colocou em produto de
massa é a renderização e o formato, não a captura** — a mesma fonte que documenta a API registra
que a Apple não distribui ferramenta de captura [3]. O ato de capturar continua na faixa de
entusiasta e de profissional. Se o professor discordar dessa separação, o mapa perde a disrupção
4.1 e, com ela, doze dos trinta e três efeitos. É o ponto único mais frágil do documento, e é
decisão de julgamento, não de evidência.

### 12.2 Etapa 3 — o teste de disrupção, incluindo os reprovados

Formato: candidata → resposta 1 (o que torna possível) / resposta 2 (o que invalida) / resposta 3
(por que agora) → veredito.

**Aprovadas** (desenvolvidas na Seção 4): captura neural a partir de sensor comum; reconstrução a
partir de uma única imagem; vídeo volumétrico entregue pelo navegador. **Aprovada com ressalva de
emergente:** captura de movimento sem marcador fora do laboratório.

**Reprovadas, com o motivo:**

- **Fotogrametria clássica e varredura a laser.** (1) Nada que antes não fosse possível: são o
  estado anterior, e continuam melhores no que fazem — medir. (2) Não invalidam nada; são o
  invalidado. (3) A pergunta não se aplica: existem desde a década passada. → **madura.** Não entra
  na Seção 4; aparece na Seção 3, e o caso do Museu do Ipiranga [12] mostra que segue sendo a
  escolha correta para metrologia. Este veredito coincide com a linha que a descrição do tema já
  traçava.
- **Matterport e captura de interior para imobiliário.** Mesmo veredito, pelo mesmo caminho:
  evolução incremental de um produto que existe desde 2011. → **madura.**
- **Ampliação que inventa detalhe (tipo Magnific).** (1) Produz detalhe que não estava na captura —
  o que é interessante, mas é **geração**, não captura, e portanto responde a outra pergunta que a
  desta tendência. (2) Ameaça o retoque manual, o que é real, mas é melhoria de resolução no
  essencial. (3) "Porque os modelos melhoraram" — resposta vaga, que é o sintoma que a pergunta 3
  existe para detectar. → **reprovada por 1 e por 3.** Fora do mapa também por fronteira de tema.
- **Modelos generativos de mundo (mundos plausíveis em vez de lugares reais).** Reprovada por
  **escopo**, não pelo teste: é o tema 9 da disciplina. E há uma razão mais forte para mantê-la
  fora, registrada em `DUVIDAS.md` do autor desta skill: tratar reconstrução fiel e geração
  plausível como dois graus de maturidade da mesma coisa é erro de categoria, e apagaria a tensão
  que a Seção 2 existe para nomear. Registro que a tentação de juntar as duas apareceu **de novo**
  nesta rodada.
- **Distribuição de 3D e XR pelo navegador, como disrupção própria.** Reprovada por **fronteira**:
  é o tema 15. Ela aparece neste mapa como condição de possibilidade das disrupções 4.1 e 4.4
  (SuperSplat no navegador, WebGPU, WebXR), não como ruptura autônoma deste tema.
- **Segmentação e compreensão semântica de cena.** Reprovada por **fronteira** (tema 11) e, no
  mérito, por maturidade: o levantamento [11] a coloca explicitamente como problema aberto, o que
  a torna pesquisa, não disrupção em curso.

### 12.3 Etapa 4 — efeitos cortados da roda, com o motivo

A regra de parada aplicada foi a da skill: cortar quando o efeito deixa de ser consequência
mecanicamente rastreável e passa a exigir o encadeamento de duas ou mais suposições independentes
não testadas.

- **"Óculos de realidade aumentada substituem o celular como superfície de consumo de espaço
  capturado."** Cortado da roda. Exige duas apostas independentes — miniaturização do dispositivo
  **e** adoção de massa —, e nenhuma das dezenove fontes sustenta qualquer das duas. Não virou
  wildcard porque não mudaria o mapa: trocaria a tela, não a relação com o capturado.
- **"A captura substitui a fotografia como registro pessoal padrão."** Cortado. Não consigo narrar
  em uma frase o caminho da disrupção até ele sem passar por mudança de hábito, que não está
  documentada em nada que li. É o efeito que eu mais queria escrever, e é exatamente por isso que
  foi cortado.
- **"O splat vira formato de prova em perícia e seguro."** Cortado da segunda ordem por causa do
  erro geométrico de 7,82 cm [4]: o efeito contradiz a fonte que eu mesma cito. Rebaixado a sinal
  fraco, na Seção 6, invertido — a fronteira de precisão como razão pela qual mídia imersiva e
  documentação técnica **não** convergem.
- **"Os modelos de fundação espacial passam a gerar o lugar que falta no acervo."** Cortado por
  fronteira de tema (geração, não captura) e por ser especulação sobre especulação: depende do
  acervo consolidar **e** de os modelos de fundação semântica saírem do anúncio — a própria Niantic
  diz que falará sobre eles "mais tarde neste ano" [17].
- **"Produção de jogo abandona malha e migra inteiramente para splat."** Cortado por contradição
  direta com [7]: sem colisão, sem deformação e sem iluminação dinâmica, a migração completa não é
  um efeito lento, é um impossível. O que sobrou no lugar é `e2.2`, o pipeline híbrido — que é o
  contrário, e é o que já se observa.
- **"Uma pessoa capturada sem consentimento em um splat aparece em obra comercial."** Não virou
  efeito: é evento, não consequência estrutural, e a descrição do tema já o listava como wildcard.
  Está absorvido em `e6.1` (movimento de quem não assinou entrando em base) e no wildcard 1 da
  Seção 6, que é a versão com consequência sistêmica — a decisão judicial, não o incidente.

### 12.4 Etapa 5 — a contestação, e o que ela obrigou a mudar

A Etapa 5 não foi um passo de redação: ela alterou o documento em três pontos, e registro os três
porque a versão final não deixa ver que houve mudança.

1. Ao procurar "qual efeito é só extrapolação linear", descobri que **o efeito-pai `e3`** também
   era — não só o `e2.1` que eu já suspeitava. Mantive `e3` na roda, porque o que dele deriva é de
   outra natureza, mas a Seção 7 registra o problema em vez de escondê-lo.
2. Ao procurar o caso comparável de velocidade de adoção, o precedente de captura de via pública
   apareceu com um detalhe que **inverteu** parte do meu raciocínio: a obrigação de ofuscar rostos
   foi afastada em pelo menos uma jurisdição relevante. Isso não só enfraqueceu `e1.1.1` — obrigou
   a reescrever o wildcard 1 declarando que o precedente aponta no sentido oposto.
3. Ao nomear o viés, percebi o de procedimento (o levantamento guiado pelo vocabulário do próprio
   enunciado) e fui conferir: a Niantic sustenta `e1.2` e `e3.2` com material publicado por ela
   mesma, sem número independente. Não removi os efeitos; rebaixei a confiança e escrevi a
   dependência na Seção 7.

### 12.5 Buscas que não deram em nada — e por que o vazio importa

- **Regulação específica de captura tridimensional de espaço.** Busca direta por lei, norma ou
  regulamento sobre varredura 3D de ambiente e consentimento espacial: nada. O que existe são leis
  gerais de dado pessoal [15] e uma proposta de diretriz vinda de pesquisa em interação [16]. Este
  vazio é a base da disrupção 4.1 e do cenário indesejável, e é honesto dizer que ele é uma
  ausência de achado, não um achado.
- **Litígio sobre captura não autorizada de espaço em splat.** Nada. O litígio relevante que
  encontrei é sobre semelhança **de pessoa** [20], que é outra coisa. Registrado como sinal fraco 5.
- **Gaussian Splatting em patrimônio brasileiro em 2026.** Nada documentado. O que existe no país
  é laser e fotogrametria [12][18]. A nota sobre o Brasil na Seção 3 diz exatamente isso, e não
  mais que isso.
- **Número de uploads do Scaniverse; métricas de adoção do SuperSplat.** Nenhum dos dois publica.
  Onde eu gostaria de ter tamanho de acervo, tenho adjetivo ("uma das maiores coleções do mundo"
  [17]). É por isso que a confiança geral deste mapa é `media` e não `alta`: a disrupção 4.1
  depende de escala de adoção, e escala de adoção é justamente o que ninguém divulga.
- **Confirmação independente do erro geométrico de 7,82 cm.** Não encontrei a medição primária.
  O número circula em consolidado secundário [4] e é usado aqui como ordem de magnitude.

### 12.6 Páginas que não abriram — registradas para que não sejam confundidas com fontes

Nenhuma das quatro sustenta qualquer afirmação deste documento. Estão aqui porque o erro que elas
quase produziram é o mais provável de todos: citar o resumo do buscador como se a página tivesse
sido lida.

- `https://thenewstack.io/niantic-spatial-scaniverse-world-models/` — devolveu formulário de
  cadastro em vez do artigo. O que eu "sabia" pelo título e pelo resumo ("mapear os 80% da economia
  que a IA não vê") **não** entrou.
- `https://pasqualepillitteri.it/en/news/4534/apple-maps-3d-gaussian-splatting-wwdc-2026` — conexão
  caiu. Era a fonte mais direta sobre o anúncio da WWDC; o fato foi reancorado em [3].
- `https://developer.apple.com/documentation/visionos/gaussian-splats-on-visionos` — HTTP 404.
  Registro porque é a lição mais útil desta rodada: fonte oficial não é sinônimo de link que
  responde, e a tentação de citar uma URL de documentação oficial sem abri-la é alta justamente
  porque ela "parece" verificada.
- `https://asherhoffmanlaw.com/notable-cases/avatar-ai-likeness-lawsuit/` — HTTP 403. Era a página
  que dava 5 de maio de 2026 como data de protocolo do processo. Como não abriu, a data não foi
  usada; o documento cita 10 de maio, de [20], e registra a divergência na Seção 8.
- `https://variety.com/2026/film/news/james-cameron-sued-avatar-qorianka-kilcher-1236740068/` e
  `https://www.hollywoodreporter.com/movies/movie-news/qorianka-kilcher-james-cameron-unauthorized-use-likeness-avatar-1236589497/`
  — ambas redirecionaram para muro de pagamento (HTTP 402). Seriam as fontes mais confiáveis para o
  caso; não abriram, e por isso o documento se apoia em [20], que é de menor autoridade editorial.
  Isso rebaixa a confiança da Seção 6, sinal fraco 5.

**Fonte de referência do caso judicial, citada no corpo como [20]:**
`https://www.lawcommentary.com/articles/actress-accuses-james-cameron-and-disney-of-using-her-face-as-the-basis-for-neytiri-in-avatar-lawsuit`
— sustenta a data de 10 de maio de 2026, os réus, o enquadramento da alegação em identidade
biométrica e semelhança, e a ausência de manifestação da defesa. **Confiabilidade média-baixa:**
publicação jurídica secundária, sem citação de número de processo; usada porque as fontes de maior
autoridade não abriram, e com a ressalva escrita.

### 12.7 Contagens declaradas, e como conferi-las

- Disrupções-raiz: **4** (três aprovadas no teste completo, uma como emergente com ressalva).
- Efeitos de 1ª ordem: **7** — `e1`, `e2`, `e3`, `e4`, `e5`, `e6`, `e7`.
- Efeitos de 2ª ordem: **13** — `e1.1`, `e1.2`, `e2.1`, `e2.2`, `e3.1`, `e3.2`, `e4.1`, `e4.2`,
  `e5.1`, `e6.1`, `e6.2`, `e7.1`, `e7.2`.
- Efeitos de 3ª ordem: **13** — um por nó de segunda ordem.
- Total: **33** efeitos.
- Distribuição de confiança na 3ª ordem: **13 de 13 em `baixa`**. A skill trata isso como a
  resposta esperada, e não como falha; se estivessem em `alta` ou `media`, seria sinal de alerta.
- Fontes: **19** abertas e lidas, mais uma parcial declarada e não utilizada, mais seis páginas que
  não abriram e estão registradas em 12.6.

### 12.8 A checagem final, e o que ela não é capaz de ver

A condição de parada da skill pede quatro verificações: doze seções com títulos exatos,
frontmatter completo, bloco `roda:` com exatamente três níveis e todo nó com `sinal`/`prazo`/
`confianca`, e nenhum item da Seção 4 reprovado no teste da Etapa 3. As quatro foram rodadas.

Duas coisas aconteceram ao rodar, e valem mais que o resultado.

**A primeira: a checagem do bloco `roda:` "passou" devolvendo zero efeitos em cada ordem.** O
script imprimiu `ordem1: 0 ordem2: 0 ordem3: 0` e nenhum erro, porque a função recursiva estava
correta e simplesmente nunca foi chamada na raiz. Um script que valida uma árvore vazia valida
qualquer coisa. O que expôs o bug não foi uma exceção — foi a divergência entre o número impresso
e o número que eu sabia ter escrito. É o mesmo mecanismo que `DUVIDAS.md` deste autor registra
sobre a checagem que "passou" com cinco seções em vez de doze, e é notável que tenha reaparecido
nesta rodada em outra forma: **verificação silenciosamente incompleta relata sucesso**. Corrigido,
a contagem fechou em 4 / 7 / 13 / 13, batendo com o frontmatter.

**A segunda: a verificação de links devolveu HTTP 200 para todas as vinte URLs da Seção 11, e isso
não significava nada** — três delas nunca tinham sido abertas (ver Seção 8, item 5). HTTP 200
atesta que a página existe, não que foi lida. A checagem que a skill prescreve não tem como
distinguir as duas coisas, e o registro de quais URLs foram efetivamente abertas existe fora do
documento, na transcrição da sessão. Esse é um furo do próprio método, não desta rodada: **um
documento que cita vinte fontes não carrega nenhuma evidência interna de quais delas foram
lidas.**

A lição geral, então: **essa verificação é inteiramente estrutural**. Conta seções, valida YAML,
testa se links respondem. Não tem capacidade alguma de detectar um efeito que não se sustenta, uma
inferência ruim, um viés não declarado, um número usado fora do que a fonte autoriza, ou uma fonte
citada sem ter sido aberta. "Passou na checagem" significa "está bem formatado". Dos seis erros da
Seção 8, quatro foram pegos por leitura e dois por divergência entre número esperado e número
impresso — nenhum por uma asserção do script falhar. São uma amostra de tamanho desconhecido de
um conjunto de erros de tamanho desconhecido.
