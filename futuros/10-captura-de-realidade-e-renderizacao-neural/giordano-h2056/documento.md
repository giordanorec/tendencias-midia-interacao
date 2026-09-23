---
tema: Captura de realidade e renderização neural
slug: captura-de-realidade-e-renderizacao-neural
autor_login: grec
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-22
horizonte: 2056
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 17
efeitos_ordem_2: 25
efeitos_ordem_3: 19
tecnologias_citadas: [3D Gaussian Splatting, NeRF, KHR_gaussian_splatting, glTF, Three.js, SuperSplat, PlayCanvas, Polycam, Scaniverse, Niantic Spatial, Large Geospatial Model, Luma AI, Marble, World Labs, Codec Avatars, Hologram Calling, Move.ai, EasyMocap, TripoSR, Hunyuan3D, TRELLIS, Depth Anything, 4D Gaussian Splatting, 4DGCPro, EvolvingGS, SPZ, SOGS, GaussTrace, Splat.js, Nuke, Maya, Ray-Ban Meta, Matterport]
fontes: 34
confianca: media
experimento: A mesma cena, três verdades — um ambiente capturado por vídeo de celular, por uma foto só e por trena, publicados lado a lado no navegador
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Capturar deixou de ser medir. Entre 2020 e 2026 a reconstrução 3D trocou a régua pela
inferência: o NeRF provou que uma rede podia guardar uma cena, o Gaussian Splatting fez isso
rodar a 100 quadros por segundo, e modelos de uma imagem só fecharam o ciclo — de uma foto, ou
de um texto, sai um volume navegável. Em 2026 o Khronos padronizou splats dentro do glTF, o
Three.js ganhou renderizador nativo, e sete milhões de óculos com câmera saíram da prateleira
para o rosto de gente que não decide o que captura. Este mapa aposta em quatro rupturas, não em
uma: o 3D passa a ser **inferido** e não medido, o que rompe o contrato probatório da imagem; a
captura passa a ser **incidental**, o que rompe a ideia de que digitalizar um espaço é um ato
consentível; o corpo e o rosto viram **formato de arquivo**, o que rompe a distância entre
gravar alguém e reencená-lo; e a **cena substitui o quadro** como unidade de publicação, o que
tira do autor o enquadramento — o recurso central da fotografia e do cinema desde 1895. Até
2056 os efeitos mais duros não são os de produção, são os de propriedade: quem é dono da cópia
do mundo, e quem é dono do corpo dentro dela. O mapa traz também o contrapeso: banda cara,
saturação do fotorrealismo e exclusividade contratual freiam a coisa toda, e freiam primeiro
onde a rede é pior — no Brasil inclusive.

## 2. O tema

Captura de realidade e renderização neural é o conjunto de técnicas que transformam registro de
sensor comum — vídeo de celular, foto isolada, passagem de óculos — em representação 3D
navegável, sem passar por modelagem manual. Encosta em mídia e interação num ponto muito
específico: ela muda **a unidade de entrega**. A fotografia entrega um quadro; o vídeo entrega
uma sequência de quadros; a captura neural entrega um volume que o leitor percorre. Tudo que
depende de controlar o que o outro vê — composição, corte, ritmo, revelação — tem de ser
reinventado quando o ponto de vista passa a ser do público.

Merece mapa de futuro, e não levantamento de estado da arte, por três razões. Primeira: a
tecnologia já atravessou o ponto em que o problema é técnico. Em 2026 ela funciona; os
problemas abertos são de direito, de economia e de convenção — exatamente o tipo de problema
que se explora por consequência, não por benchmark. Segunda: os efeitos interessantes não estão
na produção de mídia, estão fora dela. Um splat é, ao mesmo tempo, peça de mídia, base
cartográfica, prova pericial, dado de treino de robô e retrato de pessoa; cada um desses usos
tem um regime jurídico diferente e nenhum deles foi escrito pensando neste objeto. Terceira: o
horizonte pedido é 2056 — trinta anos. Nesse prazo o que importa não é qual biblioteca vence,
é se a representação inferida vira infraestrutura de registro público. Se virar, a diferença
entre mapa e cópia do mundo deixa de ser filosófica e vira contrato.

**Premissas assumidas** (o briefing não as cobriu): que "global" inclui uma leitura do Brasil
sempre que houver diferença material — e há, sobretudo em banda e em base cartográfica
municipal; que o público "quem projeta mídia e interação" inclui quem decide arquitetura de
publicação, não só quem desenha tela; e que o horizonte 2056 é janela de exploração, não de
previsão — efeitos datados além de 2045 carregam confiança baixa por construção.

## 3. Onde isso está hoje

**Âncora feita com acesso à web em 22/09/2026**, em 17 buscas (português e inglês) e leitura
direta das fontes listadas na seção 11. Onde não achei número, está escrito que não achei.

### O que já existe e funciona

O 3D Gaussian Splatting, publicado pelo Inria/MPI em 2023, é hoje a representação de fato para
captura neural: treina uma cena em minutos e renderiza em tempo real, contra horas de
treinamento e 1 a 10 quadros por segundo do NeRF original (Mildenhall et al., 2020). O
repositório de referência do Inria segue mantido e é a base de quase todo o resto.

A distribuição saiu do laboratório em 2026, e este é o fato mais concreto do ano. Em **3 de
fevereiro de 2026** o Khronos Group anunciou a extensão `KHR_gaussian_splatting` para o glTF
2.0 — release candidate aberto a comentário, ratificação prevista para o segundo trimestre de
2026 —, com contribuição de Autodesk, Cesium/Bentley, Esri, Huawei, Niantic Spatial, NVIDIA e
XGRIDS, e implementação anunciada por CesiumJS, Esri ArcGIS, Scaniverse e XGRIDS. Nas palavras
de Neil Trevett, presidente do Khronos: *"KHR_gaussian_splatting marca um marco importante para
o glTF, estendendo o formato para suportar uma classe inteiramente nova de representação
geométrica."* Em **10 de agosto de 2026** o Three.js integrou um renderizador nativo de splats
destinado à r186 — WebGPU, ordenação por contagem na GPU, carregadores para PLY, SPLAT, SPZ,
KSPLAT e glTF, a um custo relatado de 7 KB sobre a base. No mesmo mês a Foundry embarcou
ferramentas de splat no Nuke 17.1v1, o Maya 2026 ganhou encaixe de splats, e o PlayCanvas
converteu o SuperSplat em ponto de publicação com API REST, com Teleport (Varjo), XGRIDS LCC
Studio e LichtFeld Studio como primeiros parceiros.

Do lado da captura de consumo, Polycam, Scaniverse (Niantic) e Luma AI oferecem splat a partir
de vídeo de celular, com camada gratuita. Do lado do corpo, a captura de movimento sem marcador
saiu do estúdio: a Move.ai publicou em julho de 2026 uma atualização do Move Engine com o
modelo M3 e mantém um modelo de câmera única (s2); o EasyMocap segue como referência aberta a
partir de vídeo RGB. Do lado do rosto, os Codec Avatars da Meta passaram a ser relightáveis
(Gaussian Codec Avatars) e o Horizon OS carrega, em builds de agosto de 2026, subestruturas de
*Hologram Calling* que os referenciam.

Do lado da síntese, o Marble da World Labs — empresa de Fei-Fei Li, com Ben Mildenhall,
coautor do NeRF, entre os fundadores — está comercialmente disponível desde novembro de 2025:
gera ambientes 3D persistentes e navegáveis a partir de texto, imagem, panorama ou vídeo,
entregando splats mais malhas de colisão, com exportação para Blender, Unreal, Unity, Houdini e
VR. O ciclo fechou: o capturado e o inventado saem no mesmo formato.

### O que existe e ainda não funciona

Três coisas, nomeadamente:

- **Proveniência.** Não há, em produção, um jeito padronizado de dizer, dentro de um splat, o
  que foi observado e o que foi inferido. A literatura começou a atacar isso em 2026
  (GaussTrace, análise de proveniência de modelos 3DGS), mas nenhuma das extensões de formato
  citadas acima carrega o campo.
- **Perícia.** A revisão de 2026 da APMIS sobre documentação forense 3D trata o 3DGS
  explicitamente como técnica *emergente* — atenção crescente, não prática estabelecida. O
  laser scanner e a fotogrametria continuam sendo a técnica com aceitação.
- **Peso.** Uma cena em splat ocupa tipicamente centenas de megabytes a mais de um gigabyte,
  contra dezenas de megabytes de um NeRF compacto. A pesquisa de compressão e streaming (4DGCPro,
  EvolvingGS, streaming 4DGS com keyframes e deltas relatando redução de 10× em março de 2026)
  é intensa justamente porque o gargalo é real.

### Quem constrói

Inria/MPI (representação de referência), Khronos (formato), PlayCanvas e Three.js (web),
Niantic Spatial (agregado geoespacial — o Large Geospatial Model é construído sobre trinta
bilhões de imagens capturadas por jogadores da Niantic ao longo de dez anos), Meta (rosto,
corpo e captura incidental por óculos), World Labs (geração), Polycam/Luma/XGRIDS (captura de
consumo e profissional), Move.ai e Autodesk (movimento sem marcador), e a comunidade aberta de
`gsplat`, `nerfstudio` e `EasyMocap`.

### Que número descreve a adoção hoje

Aqui é preciso ser honesto sobre o que se mediu e o que não se mediu.

- **Captura de consumo:** sem número de usuários publicado pelas empresas. O que se acha é
  contagem de avaliações na App Store (o Polycam é citado com mais de 540 mil avaliações no
  iOS, por um blog comercial concorrente) — proxy fraco, e registrado aqui como proxy.
- **Produção de pesquisa:** agosto de 2026 teve 103 artigos de splatting catalogados por um
  boletim especializado, *"mais que o dobro de julho em todos os eixos"*, além de 77 vagas
  listadas. Isso descreve efervescência, não adoção.
- **Captura incidental:** mais de **7 milhões** de óculos Ray-Ban Meta vendidos, com cerca de
  **82%** do mercado global de óculos inteligentes no segundo semestre de 2025.
- **Mercado de destino:** um levantamento comercial cita €150–400 por levantamento profissional
  de imóvel com Matterport contra planos de splat a partir de €19/mês. Fonte de vendedor:
  entra como ordem de grandeza, não como número.
- **Mercado de mocap sem marcador:** os relatórios de *market research* que aparecem na busca
  (US$ 15,21 bi em 2025 → US$ 74,33 bi em 2035) têm metodologia fechada e não foram abertos.
  **Sem número confiável encontrado.**

**No Brasil**, não achei nenhuma cobertura 3D neural municipal em produção. O que há é o
movimento adjacente, e ele é 2D: o gêmeo digital de Rio Verde (GO), lançado em 2026, é alimentado
por *cartografia digital, imagens aéreas, sensores urbanos e bases integradas* — nenhuma menção a
reconstrução volumétrica —, e o caso de Aparecida de Goiânia é infraestrutura de vigilância e
rede (3.275 câmeras, 720 km de fibra), não de captura de cena. A Prefeitura do Recife digitalizou,
em agosto de 2026, o processo de parcelamento e regularização de terrenos com georreferenciamento,
também 2D (o fato veio da busca 16; a página oficial não é legível por leitor automatizado e por
isso não está na seção 11). E há tradição acadêmica de digitalização 3D de baixo custo em acervo —
o trabalho sobre ferramentas faça-você-mesmo no Museu Júlio de Castilhos, em Porto Alegre, é a
referência mais citada em português. **A leitura:** o Brasil está do lado de quem consome
cobertura, não de quem a produz — e isso é premissa de vários efeitos deste mapa.

## 4. As disrupções-raiz

Quatro. Cada uma passa pelas quatro perguntas do critério de maturidade; as recusas estão
registradas no fim da seção.

### R1 — A reconstrução deixa de ser medição e passa a ser inferência

**O que rompe.** O contrato probatório da imagem técnica. A fotogrametria **media**: cada ponto
do modelo vinha de correspondência entre pixels observados, e o erro tinha limite calculável. A
reconstrução neural **infere**: onde não houve observação, a rede preenche com o que é
estatisticamente plausível, e o resultado é visualmente indistinguível do observado. Isso
quebra, de uma vez, o ofício de medir (topografia, levantamento cadastral, laudo de sinistro),
a prática de documentação de acervo, e a suposição — herdada da fotografia — de que uma imagem
de um lugar é evidência de que aquele lugar é assim.

**Por que agora, e não há cinco anos.** Em 2021 a reconstrução neural era lenta demais para uso
e boa demais só em cena bem coberta. Três coisas mudaram: o 3DGS (2023) trouxe tempo real; os
modelos de uma imagem só (TripoSR, depois Hunyuan3D e TRELLIS) tornaram viável reconstruir sem
cobertura; e o Marble (nov/2025) tornou comercial a geração de mundo inteiro a partir de
prompt, saindo no mesmo formato da captura. A partir do momento em que capturado e inventado
compartilham o contêiner, a distinção deixa de ser legível por inspeção.

**Onde está na difusão.** Produto de nicho caminhando para adoção precoce. Emergente.

**O que ainda falta acontecer.** Um canal de proveniência dentro do formato (não existe nas
extensões de 2026); aceitação forense e pericial (a revisão da APMIS de 2026 ainda chama de
emergente); e uma convenção visual que mostre o não observado. Nada disso é impossível — é por
isso que é raiz, e não wildcard.

### R2 — A captura vira incidental: o mundo é digitalizado sem que ninguém decida digitalizá-lo

**O que rompe.** A premissa de que digitalizar um espaço é um ato deliberado, localizado e, por
isso, consentível. Todo o edifício jurídico e social construído em torno de câmera — o aviso na
porta, o LED aceso, a autorização de filmagem, o limite de câmera de segurança — pressupõe que
alguém apertou um botão em um lugar. A captura incidental desfaz isso: o corpus 3D passa a ser
subproduto do trânsito de pessoas, robôs, drones e óculos.

**Por que agora.** O óculos com câmera virou eletrônico de consumo de crescimento rápido — 7
milhões de unidades, 82% de mercado — e o agregado geoespacial deixou de precisar de frota
dedicada: o Large Geospatial Model da Niantic Spatial é construído sobre trinta bilhões de
imagens que jogadores de Pokémon GO capturaram ao longo de uma década, sem que capturar mapa
fosse o que estavam fazendo. Em julho de 2026 a Meta enviou firmware obrigatório desativando a
câmera quando o LED de privacidade é adulterado — resposta a um mercado de modificação que
cobrava menos de US$ 100 para remover o indicador; ao mesmo tempo, relatos de imprensa apontam
que os óculos "super-sensing" em teste **não** acenderiam o LED durante o sensoriamento
contínuo. As duas coisas no mesmo semestre mostram que a norma ainda não existe.

**Onde está na difusão.** Adoção precoce no hardware, laboratório no agregado 3D denso.
Emergente, com um pé em especulativo.

**O que ainda falta acontecer.** Densidade suficiente em interiores; uma decisão jurídica sobre
quem é titular do agregado construído a partir de captura alheia; e a resolução da disputa do
indicador de captura, hoje em aberto em pelo menos duas ações nos Estados Unidos e em
investigações do regulador britânico e do queniano.

### R3 — O corpo e o rosto viram formato de arquivo

**O que rompe.** A distância entre gravar alguém e poder reencená-lo. Uma gravação mostra o que
a pessoa fez; um avatar volumétrico acionável mostra o que ela **poderia** ter feito, com o
mesmo grau de credibilidade perceptual. Isso rompe o contrato de elenco (que licencia uma
execução, não uma identidade operável), a figuração como profissão de diária, e a suposição de
que ver alguém numa chamada é evidência de que a pessoa está ali.

**Por que agora.** A captura de movimento sem marcador saiu do estúdio com marcadores e do rig
multicâmera: a Move.ai mantém modelo de câmera única e atualizou o motor em julho de 2026; o
EasyMocap faz mocap de vídeo RGB comum e é aberto. Do lado do rosto, os Codec Avatars ficaram
relightáveis e migraram de demonstração de pesquisa para subestrutura de sistema operacional
(*Hologram Calling* no Horizon OS). E o direito começou a se mexer: o **NO FAKES Act** (S.4591)
foi aprovado por unanimidade na Comissão do Judiciário do Senado americano em **18 de junho de
2026**, criando um direito federal sobre réplica digital de voz e imagem — sinal de que a
prática já incomoda o bastante.

**Onde está na difusão.** Produto de nicho (mocap profissional e VFX), laboratório no avatar de
consumo. Emergente.

**O que ainda falta acontecer.** O NO FAKES Act virar lei — aprovação em comissão não é
aprovação; a queda de custo do retrato volumétrico consentido abaixo do custo do não
consentido; e a chegada do avatar fotorreal a hardware que as pessoas já usam, e não a headset.

### R4 — A cena substitui o quadro como unidade de publicação

**O que rompe.** O enquadramento. Desde 1895 o autor de mídia visual entrega um recorte e
controla o que o público vê e quando. Publicar cena navegável entrega o volume e devolve o
ponto de vista ao público. Rompe a composição como ofício central, o direito autoral ancorado
em obra fixada (uma cena tem infinitas vistas, e nenhuma delas é *a* obra), e a economia de
distribuição — porque um volume não trafega como uma imagem.

**Por que agora.** Porque em 2026 o splat virou mídia de web, não arquivo de especialista: a
extensão do Khronos põe splats dentro do formato de troca 3D mais adotado da web; o Three.js
passou a renderizar splats nativamente; o SuperSplat ganhou API de publicação com parceiros de
captura; a compressão e o streaming adaptativo amadureceram (redução de 10× em banda relatada
para streaming 4DGS em março de 2026). Publicar cena deixou de exigir engine e virou `<script>`.

**Onde está na difusão.** Produto de nicho entrando em adoção precoce. Emergente — e é a raiz
com o sinal mais forte no presente.

**O que ainda falta acontecer.** A ratificação final da extensão (prevista para o segundo
trimestre de 2026, não confirmada nas fontes que abri); compressão que caiba em rede móvel
medida; e uma gramática de direção de atenção que substitua o corte. A terceira é a que falta
mais, e é a que interessa a esta disciplina.

### Recusados como raiz

- **Fotogrametria clássica e escaneamento a laser.** Adoção em maioria nos setores que os usam
  (AEC, levantamento, perícia) há mais de uma década. Maduro; tratado como contexto na seção 3
  e como termo de comparação em R1.
- **Renderização em tempo real e GPU de consumo.** Maduro desde os anos 2000. É pré-condição,
  não ruptura.
- **"Metaverso" / VR de consumo.** Não passa na pergunta 1: não se consegue dizer o que rompe
  sem recorrer a promessa. Entra neste mapa apenas como **classe de referência de velocidade**
  — uma tecnologia que teve demo pública em 2012 e, quatorze anos depois, não chegou a 10% de
  uso diário. É o antídoto contra prazo otimista.
- **Vídeo generativo.** Fronteira com o tema 12. Aqui só entra onde o gerado e o capturado
  compartilham o formato de saída (efeito e5).
- **Gêmeo digital de cidade.** Aplicação, e em boa parte já madura em GIS 2D. Entra como
  efeito (e7), não como raiz.
- **"IA".** Não é ruptura, é categoria. Recusa registrada por higiene.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A reconstrução deixa de ser medição e passa a ser inferência
    efeitos:
      - id: e1
        ordem: 1
        efeito: Peritos e seguradoras passam a exigir, junto do ativo 3D, um selo que separe o observado do inferido
        sinal: fraco
        prazo: 2033
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Formatos de captura passam a carregar um canal de incerteza por primitiva, e visualizadores desenham o que não foi observado
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A marcação do não observado vira convenção visual de leitura, como a linha tracejada no desenho técnico
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Surge um mercado de captura auditada que cobra caro justamente por não inferir nada
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Tribunais brasileiros passam a distinguir reconstituição de registro, e o volume inferido entra como ilustração de laudo, não como prova
                sinal: fraco
                prazo: 2049
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Estúdios param de modelar o que pode ser capturado e gastam o tempo em direção de arte sobre material capturado
        sinal: medio
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O portfólio de modelador 3D deixa de demonstrar execução e passa a demonstrar correção de captura, iluminação e topologia de colisão
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Os cursos superiores de tecnologia em Jogos Digitais no Brasil trocam carga de modelagem poligonal por fotografia técnica e iluminação
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O custo marginal de um ambiente fotorrealista cai abaixo do custo de um ambiente estilizado
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O estilizado vira marca de autoria e de orçamento alto, invertendo a economia estética que vigorou de 2000 a 2025
                sinal: fraco
                prazo: 2041
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O público passa a descontar credibilidade de cena fotorrealista, o que freia a adoção em publicidade e jornalismo
        sinal: fraco
        prazo: 2036
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Veículos de jornalismo passam a publicar a captura bruta ao lado do ativo navegável, como hoje publicam o arquivo RAW
            sinal: fraco
            prazo: 2039
            confianca: baixa
      - id: e4
        ordem: 1
        efeito: Museus e universidades passam a manter dois artefatos do mesmo objeto, o medido e o navegável, com políticas de uso diferentes
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Instituições brasileiras de acervo adotam o splat como política padrão por ser o único caminho viável, e reservam a medição às peças-chave
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A memória digitalizada do patrimônio brasileiro fica majoritariamente em representação inferida, e o restauro futuro precisa de método para descontar a invenção
                sinal: fraco
                prazo: 2052
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Modelos de mundo passam a ser alimentados por captura real e a devolver mundos sintéticos no mesmo formato, fechando o ciclo entre capturado e inventado
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A captura deixa de ser produto final e vira principalmente coleta de dado de treino
            sinal: fraco
            prazo: 2037
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O valor econômico migra da cena para o corpus de captura, e quem tem fluxo contínuo de captura vira dono do ativo
                sinal: fraco
                prazo: 2043
                confianca: media
  - disrupcao: A captura vira incidental e o mundo é digitalizado sem que ninguém decida digitalizá-lo
    efeitos:
      - id: e6
        ordem: 1
        efeito: Estabelecimentos comerciais passam a sinalizar política de captura na porta, como hoje sinalizam câmera de segurança
        sinal: fraco
        prazo: 2032
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Bares, clínicas e escolas negociam zonas de não-captura por geocerca, e o cumprimento vira diferencial de marca do fabricante de óculos
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O registro de zonas de não-captura vira infraestrutura municipal, e quem não está no registro passa a ser capturável por padrão
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A sinalização vira teatro, cumprida pelos fabricantes grandes e ignorada pelo hardware barato importado
            sinal: fraco
            prazo: 2038
            confianca: media
      - id: e7
        ordem: 1
        efeito: Mapas deixam de ser produzidos por frota dedicada e passam a ser subproduto do trânsito de pessoas, robôs e óculos
        sinal: medio
        prazo: 2033
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: A cobertura 3D fica desigual por renda, rica onde há muitos óculos e robôs e pobre nas periferias e no Sul global
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Navegação de robô, entrega autônoma e realidade aumentada funcionam pior exatamente onde a renda é menor, e a desigualdade de dado vira desigualdade de infraestrutura
                sinal: fraco
                prazo: 2044
                confianca: media
          - id: e7.2
            ordem: 2
            efeito: Prefeituras brasileiras passam a comprar cobertura 3D de terceiros em vez de levantar, e deixam de manter base cartográfica própria
            sinal: fraco
            prazo: 2037
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A base territorial do município vira dado privado licenciado, e revisão de IPTU, regularização fundiária e defesa civil passam a depender de contrato
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: O direito de imagem se estende do rosto para a fachada, e proprietários reivindicam controle sobre a captura do próprio imóvel
        sinal: fraco
        prazo: 2039
        confianca: baixa
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Redes de varejo e arenas passam a licenciar a captura do próprio espaço como receita, com exclusividade por plataforma
            sinal: fraco
            prazo: 2041
            confianca: baixa
      - id: e9
        ordem: 1
        efeito: Plataformas donas do agregado fecham a captura crua e liberam apenas o serviço, para impedir que o corpus vire commodity
        sinal: medio
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Nasce um movimento de captura aberta, equivalente volumétrico do OpenStreetMap, que sobrevive por licença e não por qualidade
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A distinção entre o mapa aberto e a cópia proprietária do mundo vira disputa política, como foi a do código aberto nos anos 2000
                sinal: fraco
                prazo: 2047
                confianca: baixa
  - disrupcao: O corpo e o rosto viram formato de arquivo
    efeitos:
      - id: e10
        ordem: 1
        efeito: Contratos de elenco passam a separar a sessão de captura volumétrica do uso, com prazo e escopo declarados
        sinal: medio
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Figuração deixa de ser diária e vira licença de biblioteca de corpos, encolhendo primeiro onde a captura é barata e a organização sindical é fraca
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: A unidade de remuneração do artista muda de hora trabalhada para vez exibida, e sindicatos passam a negociar royalties de presença
                sinal: fraco
                prazo: 2043
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: O retrato volumétrico de pessoa morta vira produto sucessório e famílias litigam sobre direito de reencenação
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: O direito de imagem post mortem do Código Civil brasileiro é testado contra o avatar interativo, que não é utilização de imagem no sentido escrito em 2002
                sinal: fraco
                prazo: 2045
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: A videochamada com avatar volumétrico fotorreal substitui a webcam em ambiente corporativo
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Estar presente deixa de garantir que a pessoa está ali e agora, e reuniões críticas passam a exigir prova de vivacidade
            sinal: fraco
            prazo: 2037
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: A prova de vivacidade vira camada padrão de identidade, e o que hoje é antifraude bancário vira etiqueta social
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: O custo de manter o avatar atualizado faz parte dos usuários voltar ao vídeo comum, que é honesto e barato
            sinal: fraco
            prazo: 2036
            confianca: media
      - id: e12
        ordem: 1
        efeito: A captura de movimento sem marcador tira o mocap do estúdio e o leva para o ensaio, o treino e a fisioterapia
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Academias e clubes brasileiros vendem análise biomecânica por celular sem equipamento, e a fronteira entre desempenho e saúde fica borrada
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Planos de saúde passam a querer o dado de marcha e postura, e o movimento do corpo entra na mesma disputa de dado sensível que a genética
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: Atores e dubladores organizados impõem consentimento por uso, e o custo de licenciar corpo humano sobe acima do custo de um corpo sem titular
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: Cresce um mercado de pessoas que nunca existiram, cujo valor é justamente não ter titular
            sinal: fraco
            prazo: 2037
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: O corpo sintético sem titular vira o padrão econômico e a presença humana em mídia vira nicho premium, como o acústico virou depois do sintetizador
                sinal: fraco
                prazo: 2050
                confianca: baixa
  - disrupcao: A cena substitui o quadro como unidade de publicação
    efeitos:
      - id: e14
        ordem: 1
        efeito: Páginas web passam a embutir cena navegável onde hoje embutem foto e vídeo
        sinal: medio
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: O autor perde o controle do enquadramento, e a composição deixa de ser o que se entrega
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: Surge uma gramática de direção de atenção dentro de cena livre, feita de luz, som, oclusão e colisão, que substitui corte e enquadramento como recurso narrativo
                sinal: fraco
                prazo: 2039
                confianca: baixa
          - id: e14.2
            ordem: 2
            efeito: O direito autoral ancorado em obra fixada fica sem objeto claro quando a obra é um volume percorrível de infinitas vistas
            sinal: fraco
            prazo: 2040
            confianca: baixa
            efeitos:
              - id: e14.2.1
                ordem: 3
                efeito: A proteção migra do resultado para o corpus de captura e para o modelo, como migrou na música do fonograma para o catálogo
                sinal: fraco
                prazo: 2052
                confianca: baixa
      - id: e15
        ordem: 1
        efeito: Banda e armazenamento viram o gargalo, e a compressão de cena vira disciplina econômica própria
        sinal: medio
        prazo: 2032
        confianca: alta
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: Onde a rede é cara a cena navegável não chega, e o vídeo 2D permanece a mídia de fato por mais uma década
            sinal: medio
            prazo: 2034
            confianca: alta
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: A web se parte em duas experiências por renda de banda, repetindo o que o vídeo em alta definição fez com o acesso desigual
                sinal: fraco
                prazo: 2041
                confianca: media
          - id: e15.2
            ordem: 2
            efeito: Formatos proprietários de compressão de splat viram ativo de plataforma, e a interoperabilidade prometida pelo glTF só se realiza no nível de base
            sinal: fraco
            prazo: 2035
            confianca: media
      - id: e16
        ordem: 1
        efeito: Anúncio, vitrine e catálogo migram para cena capturada do produto real, e a fotografia de produto encolhe
        sinal: medio
        prazo: 2032
        confianca: alta
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: O fotógrafo de imóvel e de produto no Brasil perde a diária e passa a vender operação de captura, com preço unitário menor e volume maior
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: A cadeia visual do varejo se concentra em poucas plataformas que fazem captura, hospedagem e distribuição, e o prestador local vira mão de obra de campo
                sinal: fraco
                prazo: 2042
                confianca: media
      - id: e17
        ordem: 1
        efeito: Detentores de acervo e de espaço exigem exclusividade de captura por contrato, e a captura por qualquer um é barrada por contrato antes de ser barrada por lei
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e17.1
            ordem: 2
            efeito: O ativo capturado passa a carregar DRM espacial e só abre no visualizador autorizado, e o formato aberto convive com um ecossistema fechado
            sinal: fraco
            prazo: 2036
            confianca: media
```

### O que o bloco não consegue dizer

**Os mecanismos, um por raiz.** Em R1, o mecanismo é sempre o mesmo: *a inferência é invisível
por inspeção*. Daí decorre e1 (quem tem responsabilidade civil precisa do que a inspeção não
dá), e2 (se a captura é barata e o resultado é convincente, modelar deixa de ser a etapa cara) e
e5 (se capturado e gerado saem no mesmo contêiner, o gerado compete no mesmo mercado). Em R2 o
mecanismo é *o consentimento pressupõe um ato localizado, e não há ato*: daí a sinalização (e6),
a mudança de quem produz mapa (e7) e o fechamento defensivo do agregado (e9). Em R3, *a
diferença entre registro e reencenação some*: daí contrato (e10), presença (e11) e substituição
econômica (e13). Em R4, *quem escolhe o ponto de vista muda de lado*: daí a perda do
enquadramento (e14.1), o problema da obra fixada (e14.2) e o gargalo de entrega (e15).

**As classes de referência usadas nos prazos.** Não há prazo neste mapa sem uma delas:

| Classe | O que levou | Onde foi usada |
|---|---|---|
| glTF (ratificado 2015 → formato de troca dominante na web ~2020) | ~5 anos | e14, e15, e17 — prazos 2031-2032 |
| Smartphone (iPhone 2007 → ~10% global 2011) | ~4 anos | e12 (2030), o mais rápido do mapa, porque o hardware já está na mão |
| Fotogrametria digital (demo acadêmica anos 1990 → padrão em levantamento AEC) | 15-20 anos | e1, e4, e7 — prazos 2032-2036 |
| VR de consumo (demo 2012 → ainda sem 10% de uso diário em 2026) | >14 anos e contando | e11 (empurrado para 2034), e6.1, e8 |
| Reconhecimento facial (demo utilizável 2011 → primeiras proibições municipais 2019) | ~8 anos | e6 (2032), e8 (2039) |
| Deepfake (demo 2017 → ELVIS Act 2024, NO FAKES em comissão 2026) | 7-9 anos até lei | e10 (2031), e10.2 (2038) |
| Fonograma (gravação 1877 → direito conexo consolidado em Roma, 1961) | ~80 anos | e14.2.1 (2052) e e4.1.1 (2052) — mudança de regime de propriedade é lenta |
| Streaming de música (MP3 1993 → mudança de modelo de negócio ~2008) | ~15 anos | e16.1, e15.1.1 |

**Cobertura STEEP.** Social: e6, e11.1, e3. Tecnológico: e1.1, e14.1.1, e15. Econômico: e2, e13,
e16, e5.1.1. Político/jurídico: e8, e10, e7.2.1, e9.1.1. **Ecológico: vazio.** Procurei e não
achei mecanismo específico que ligue captura neural a efeito ambiental distinto do custo
energético genérico de computação — que serve para qualquer tema deste semestre e por isso foi
recusado. Registrado como categoria vazia, não forçada.

**Quem perde, nomeadamente.** Modelador 3D de nível médio (e2.1), figurante e dublador (e10.1,
e13.1), fotógrafo de imóvel e de produto (e16.1), perito que vive de levantamento medido (e1.2 —
aqui perde e ganha ao mesmo tempo), prefeitura que abre mão de base cartográfica (e7.2), e o
público de banda cara, que perde o acesso ao formato novo inteiro (e15.1). Quem ganha está
nomeado nos mesmos efeitos: plataformas de agregado (e9), donos de espaço com público (e8.1),
e quem tiver fluxo contínuo de captura (e5.1.1).

**Quem bloqueia, por raiz.** R1: seguradoras e o próprio Judiciário, que têm incentivo para
recusar representação inferida como prova e podem congelar a técnica em uso ilustrativo (e1.2.1).
R2: Niantic Spatial, Google e Meta, com incentivo para fechar o corpus e vender serviço em vez
de dado (e9) — bloqueio por captura, não por freio. R3: sindicatos de artistas, com incentivo
para encarecer o uso do corpo humano, com o efeito perverso de empurrar a produção para o corpo
sintético (e13). R4: donos de espaço e de acervo, que bloqueiam por contrato de exclusividade
antes que qualquer lei se pronuncie (e17).

### Cruzamentos

**Convergência.** Dois ramos de raízes diferentes chegam ao mesmo lugar: **e5.1.1** (o valor
migra da cena para o corpus de captura, vindo de R1, pela economia do treino de modelos) e
**e9** (plataformas fecham o agregado, vindo de R2, pela economia do mapa). A conclusão comum é
que *o ativo econômico do campo não é a cena bonita, é o fluxo de captura* — e quem tiver
sensor em movimento no mundo vence quem tiver estúdio. Isso é o achado mais valioso deste mapa,
e é o que ele diz de diferente em relação à leitura corrente, que ainda trata a tecnologia como
ferramenta de produção de conteúdo. Uma segunda convergência, mais óbvia: **e2.2** (o
fotorrealista fica mais barato que o estilizado) e **e16** (a vitrine vira cena capturada)
encontram-se em "a imagem comercial deixa de ser produzida e passa a ser colhida".

**Retroalimentação.** **e15.1** (onde a rede é cara, a cena não chega) enfraquece R4
diretamente, e enfraquece R2 por tabela: menos dispositivo capturando e menos tráfego de cena
significa menos dado alimentando o agregado, o que agrava **e7.1** (cobertura desigual), o que
por sua vez reduz o incentivo a levar o formato para lá. É um ciclo de reforço negativo, e ele
tem endereço: as regiões que já são mal servidas. É o único ciclo do mapa em que a disrupção se
freia sozinha — e ela se freia exatamente onde o mapa gostaria que ela chegasse.

**Contradição não resolvida.** **e2.2** diz que o fotorrealismo fica tão barato que vira padrão.
**e3** diz que o público desconta credibilidade do fotorrealista e o freia. Os dois não podem
valer com a mesma força. O que decide entre eles é **e1.1**: se a cena capturada carregar marca
de proveniência legível, o fotorrealismo sobrevive como *registro* e e2.2 vence; se não
carregar, ele satura como *estilo* e e3 vence. Registro os dois como vigentes e aponto o árbitro,
em vez de escolher.

## 6. Sinais fracos e wildcards

### Sinais fracos

**SF1 — Reconstrução como programa, não como dado.** O `img2threejs`, levantado pela própria
turma na varredura sobre storytelling, reconstrói o objeto de uma imagem de referência como
código Three.js procedural — não como malha nem como nuvem de primitivas. Se isso crescer, a
cena capturada deixa de ser um arquivo pesado e vira um *programa leve*, o que resolve o gargalo
de e15 por um caminho que ninguém está olhando, e liga este tema ao 14. *Onde foi visto:* na
galeria de ferramentas da disciplina; não achei implementação em escala nas buscas. *Sinal
observável de crescimento:* um exportador de splat para código procedural aparecer em engine
mainstream, ou o Khronos abrir discussão sobre cena como programa dentro do glTF.

**SF2 — Proveniência dentro do ativo.** O GaussTrace (arXiv, 2026) propõe análise de
proveniência de modelos 3DGS. É hoje um artigo isolado. *O que mudaria:* e1, e1.1 e e1.2 saem de
"mercado de nicho" para "campo obrigatório de formato", e a contradição entre e2.2 e e3 se
resolve a favor de e2.2. *Sinal observável:* um formato de captura em produção — SPZ, SOGS ou a
própria extensão do Khronos — adicionar campo de proveniência, ou uma seguradora publicar
requisito de proveniência para aceitar ativo 3D em sinistro.

**SF3 — Treino de cena dentro da aba do navegador.** Em agosto de 2026 a Arrival.Space lançou o
Splat.js, biblioteca WebGPU sob licença MIT que roda SfM e treino de splat dentro do navegador.
Hoje é curiosidade de desempenho. *O que mudaria:* se a captura não precisa mais subir para
nuvem, o dono do dado volta a ser quem capturou — e isso enfraquece e9 (o fechamento do
agregado) e fortalece e9.1 (a captura aberta). *Sinal observável:* um celular de faixa média
treinando uma cena de sala em menos de um minuto, sem servidor.

**SF4 — Captura como subproduto de robô doméstico.** Nada nas buscas; é inferência a partir de
e7. Robô aspirador e robô de companhia já mapeiam interiores com LiDAR barato. *O que mudaria:*
o interior das casas — o ponto cego do agregado geoespacial hoje — entra no corpus, e R2 deixa
de ser sobre espaço público. *Sinal observável:* um fabricante de robô doméstico anunciar
exportação de splat do interior da casa, ou uma política de privacidade de aspirador mencionar
reconstrução volumétrica.

**SF5 — O indicador de captura desaparece.** Relatos de imprensa de julho de 2026 dizem que os
óculos "super-sensing" da Meta em teste não acenderiam o LED durante o sensoriamento contínuo,
no mesmo mês em que a empresa endureceu a proteção do LED contra adulteração. *O que mudaria:*
se o indicador cai, e6 (sinalização na porta) e e6.2 (a sinalização vira teatro) aceleram uns
cinco anos, e o wildcard W2 fica mais provável. *Sinal observável:* um lançamento comercial sem
indicador visível, de qualquer fabricante.

### Wildcards

**W1 — O splat de um transeunte numa campanha nacional.** *Mecanismo:* a captura incidental (R2)
encontra o corpo como formato (R3). Um splat de pessoa, capturado em via pública por óculos ou
por varredura urbana, é limpo, reanimado com mocap sem marcador e usado em campanha comercial de
alcance nacional. A pessoa se reconhece. A decisão judicial brasileira que se segue cria, por
analogia com o art. 20 do Código Civil, algo que hoje não existe: um direito de não ser
*reconstruído*. *Por que é improvável:* a qualidade de splat de pessoa em movimento na rua ainda
é ruim, e marcas grandes evitam risco jurídico desse tamanho. *O que faria com o mapa:* e8 e e10
antecipam quase uma década; e13.1 é rebaixado, porque o corpo sintético deixa de ser o caminho
mais barato quando o risco reputacional é o custo dominante. *Sinal precoce:* a primeira ação
judicial, em qualquer país, cujo objeto seja um splat e não um vídeo.

**W2 — Vazamento de corpus de captura de óculos.** *Mecanismo:* o pipeline de revisão humana já
existe e já foi documentado — trabalhadores em Nairóbi relataram revisar material íntimo captado
pelos óculos, e isso motivou ação judicial na Califórnia em 4 de março de 2026 e investigações do
regulador britânico e do queniano. Um corpus centralizado de interiores, com pessoas, é alvo. O
vazamento em escala de dezenas de milhões de cenas navegáveis é qualitativamente diferente de um
vazamento de fotos: o invasor passa a poder *andar* dentro da casa alheia. *Por que é improvável:*
escala e retenção são limitadas por política interna; e o pior caso exige que o dado esteja
reconstruído, não só bruto. *O que faria com o mapa:* R2 sofre um recuo regulatório do tipo que
o reconhecimento facial sofreu em 2019-2020; e6 e e9 aceleram, e7 desacelera em cinco a dez anos.
*Sinal precoce:* qualquer incidente de segurança envolvendo dado espacial de interiores, mesmo
pequeno.

**W3 — Reconstrução com garantia de erro.** *Mecanismo:* um método que produza, junto com a
cena, um limite provado de erro por região — dizendo onde a inferência pode estar errada e em
quanto. Hoje isso não existe porque a representação é aprendida e não tem semântica de medida;
seria preciso casar o treino com um estimador de incerteza calibrado e validado contra medição
independente. *Por que é improvável:* trinta anos de pesquisa em incerteza em redes neurais não
produziram garantia desse tipo em nenhum outro domínio. *O que faria com o mapa:* seria o
contrário de uma catástrofe — R1 deixaria de ser ruptura epistemológica e viraria infraestrutura.
e1, e1.1 e e1.2 saem de nicho e entram em perícia, engenharia e seguro de uma vez; e3 morre; e a
disciplina perde a pergunta mais interessante deste tema. *Sinal precoce:* um artigo em CVPR ou
SIGGRAPH que reporte cobertura calibrada de intervalo de confiança em reconstrução, validada
contra levantamento a laser.

## 7. Contra o próprio mapa

Esta seção é o relato da bateria aplicada ao mapa já pronto, e as alterações que ela produziu
estão registradas no fim, com valor antes e depois.

### 1. Pré-mortem — é 2056 e este mapa se mostrou errado. Por quê?

**Razão mais provável: a captura neural virou um recurso invisível dentro de ferramentas
existentes, e não uma mudança de unidade de mídia.** O `KHR_gaussian_splatting` foi ratificado,
todo mundo passou a usar splat dentro de pipeline de malha, e nada mudou na forma de publicar —
como aconteceu com a captura de movimento, que revolucionou o interior da animação e não mudou
nada em como se assiste a um filme. Isso atinge R4 na raiz, e sobretudo e14.1 e e14.1.1: a
gramática de direção de atenção nunca precisou existir porque o enquadramento nunca foi
devolvido ao público. **Ação:** e14.2 rebaixado, e o pressuposto foi declarado no texto de R4.

**Segunda razão: o custo energético e de banda travou a coisa antes de ela virar padrão.** Um
splat de 1 GB por cena não é detalhe de implementação, é o fato econômico central. Se a
compressão não acompanhar, a cena navegável fica onde o vídeo 4K ficou por uma década — possível
e pouco usado. **Ação:** e15.1 foi *promovido* a confiança alta e virou o principal efeito de
retroação de R4; ele não estava na primeira rodada, em que a banda aparecia só como nota
técnica.

**Terceira razão: o direito resolveu tudo cedo e de forma restritiva.** Se uma decisão ampla
sobre captura incidental sair na Europa antes de 2032, R2 é decapitada: a captura volta a ser
ato deliberado por imposição legal, e e7, e7.1 e e7.2 não acontecem. **Ação:** e8 rebaixado de
confiança média para baixa e empurrado de 2035 para 2039 — se o direito for rápido, ele vem por
outro caminho que não o direito de fachada.

### 2. Extrapolação linear — o que é só "mais do mesmo, maior"

**e2 e e16 são os suspeitos.** "Estúdios usam captura em vez de modelagem" e "vitrine vira cena
capturada" são, ambos, a continuação reta de uma tendência que já anda. O que os salva de virar
contexto é o mecanismo de não-linearidade em cada um: em e2, é a inversão do custo relativo
entre fotorrealista e estilizado (e2.2), que não é gradual — é uma troca de sinal, e muda o que
significa escolher estilo; em e16, é a mudança de unidade de cobrança, de diária para operação
(e16.1), que reorganiza quem emprega quem. **Mantidos, com a não-linearidade escrita.**

**e12 é extrapolação pura e assumida.** Mocap sem marcador saindo do estúdio é continuação
direta do que a Move.ai e o EasyMocap já fazem. Fica com prazo curto (2030) e confiança alta
*porque* é extrapolação — é o único efeito do mapa que não pede fé.

### 3. Velocidade de adoção — o confronto com a classe de referência

**e11 (avatar volumétrico substitui a webcam) estava em 2031 com confiança alta.** A classe de
referência correta não é o smartphone, é o VR de consumo: demo pública em 2012, e em 2026 ainda
sem 10% de uso diário. A hipótese de que o avatar fotorreal saia do headset e chegue ao
computador de trabalho em cinco anos exige adoção mais rápida do que qualquer caso comparável
de hardware de presença. **Empurrado para 2034 e rebaixado para média.**

**e6 (sinalização de captura na porta) estava em 2030.** A classe de referência é o
reconhecimento facial: demo utilizável em 2011, primeiras proibições municipais em 2019 — oito
anos entre a prática incomodar e a norma aparecer. Contando de 2026, isso dá 2034; contando do
momento em que os óculos viraram objeto de ação judicial (março de 2026), dá 2032 para a norma
social, antes da norma jurídica. **Ajustado para 2032**, com a referência declarada.

**e10 (contratos de elenco separam captura de uso) está em 2031 com confiança alta, e assim
fica.** Aqui a referência é o deepfake: 2017 a demo, 2024 o ELVIS Act, 2026 a aprovação em
comissão do NO FAKES Act. O direito já está andando; o efeito não depende de adoção de
tecnologia nova, depende de cláusula contratual — que é barata e rápida.

### 4. A raiz que não acontece — o que sobra do mapa

- **Sem R1** (a reconstrução continua sendo lida como medição, porque a inferência se prova
  confiável): morrem e1, e3 e metade de e4; sobrevivem R2, R3 e R4 inteiras. O mapa perde a
  camada epistemológica e vira um mapa de economia de mídia. **Sobra muito.**
- **Sem R2** (a captura incidental é barrada cedo): morrem e6 a e9 e parte de e5.1.1. R1, R3 e
  R4 ficam. **Sobra muito**, mas o mapa perde o que tem de mais próprio.
- **Sem R3** (o avatar volumétrico não sai do laboratório): morre um ramo inteiro, e o resto
  fica intacto. **Sobra quase tudo.**
- **Sem R4** (a cena nunca vira unidade de publicação): morrem e14 a e17, e sobrevivem R1, R2 e
  R3 — a captura continua existindo, apenas como insumo de pipeline e de treino, não como mídia.
  Neste caso a convergência e5.1.1 ↔ e9 fica ainda mais forte. **Sobra muito.**

**Conclusão do teste:** as quatro raízes são independentes o bastante. Não há raiz única
disfarçada. A que mais amarra as outras é R1 — mas mesmo ela, se cair, deixa três quartos do
mapa de pé.

### 5. Suposições escondidas

Listadas porque o mapa as assume sem dizer:

1. **Energia e computação continuam ficando mais baratas.** Treinar cena e rodar modelo de mundo
   é caro; se o custo subir, e5 e e15 mudam de sinal.
2. **O modelo aberto continua aberto.** `gsplat`, `nerfstudio`, `EasyMocap` e o Splat.js MIT são
   pressuposto de e9.1 (captura aberta) e de boa parte da adoção no Brasil. Se o campo seguir o
   caminho dos modelos de linguagem — aberto virando "pesos disponíveis sob licença restritiva" —
   e9.1 cai.
3. **O padrão aberto vence o formato proprietário.** O mapa assume a ratificação do
   `KHR_gaussian_splatting`, que em setembro de 2026 ainda era release candidate nas fontes que
   abri. e15.2 é o efeito que existe porque esta suposição pode quebrar.
4. **A regulação brasileira acompanha com atraso, mas acompanha.** Vários efeitos de 3ª ordem
   (e7.2.1, e10.2.1) assumem que haverá decisão judicial ou norma. Pode simplesmente não haver, e
   a ausência de regra é um desfecho possível — é o cenário indesejável da seção 9.
5. **A plataforma continua permitindo.** e9.1 e SF3 assumem que capturar e publicar fora das
   grandes plataformas continua tecnicamente possível. Não é garantido: e17.1 (DRM espacial) é a
   versão em que essa suposição quebra.

### 6. Viés do autor

Dois, nomeados.

**Viés de fascínio epistemológico.** R1 — "medir virou inferir" — é a raiz mais elegante do mapa
e a que eu, como autor, mais quis que fosse verdade. Ela é também a de sinal mais fraco no
presente: não achei nenhum caso real de recusa pericial de splat, nem nenhum formato com campo de
proveniência. Todo o ramo e1 está sustentado em *um* artigo (GaussTrace) e numa revisão que diz
"emergente". **Se este mapa tem um ponto frágil deliberadamente protegido, é esse.**

**Viés de recorte brasileiro.** e7.2, e15.1 e e16.1 leem o Brasil como consumidor de cobertura e
refém de banda. Isso é coerente com o que encontrei — nenhuma cobertura 3D neural municipal em
produção —, mas é também a leitura que eu já tinha antes de buscar, e busquei pouco (duas buscas
em português contra quinze em inglês). Está declarado como risco de confirmação.

### 7. Calibração

Contagem final por ordem: **1ª ordem** — alta 8, média 8, baixa 1 (17). **2ª ordem** — alta 1,
média 18, baixa 6 (25). **3ª ordem** — alta 0, média 4, baixa 15 (19). A distribuição cai com a
ordem, como deve. A 2ª ordem está pesada no meio; é o efeito de um horizonte longo, que dá tempo
para o mecanismo se realizar mas não dá confiança sobre o modo.

### Registro de alterações

A bateria derrubou ou mexeu em pelo menos um efeito por raiz, como exige a cota.

- **e11: prazo 2031 → 2034, confiança alta → media.** A classe de referência é o VR de consumo
  (>14 anos sem 10% de uso diário), não o smartphone. (R3)
- **e8: prazo 2035 → 2039, confiança media → baixa.** Nenhum sinal jurídico específico sobre
  captura de fachada foi encontrado; o precedente mais próximo (Street View na Alemanha e Suíça)
  levou de cinco a oito anos e não criou direito novo. (R2)
- **e2.2: prazo 2031 → 2034, confiança alta → media.** A inversão do custo relativo entre
  fotorrealista e estilizado é uma troca de sinal, não uma curva; e trocas de sinal são lentas
  porque dependem de reapreçamento de mercado inteiro. (R1)
- **e14.2: prazo 2036 → 2040, confiança media → baixa.** Mudança de regime de propriedade
  intelectual, pela classe de referência do fonograma, é o processo mais lento do mapa. (R4)
- **e6: prazo 2030 → 2032.** Referência do reconhecimento facial (oito anos entre incômodo e
  norma). (R2)
- **e15.1: acrescentado, confiança alta.** Não existia na primeira rodada; entrou pelo
  pré-mortem, como o principal efeito de retroação de R4 e como o ponto onde o mapa encosta no
  Brasil. (R4)
- **Removido — "a profissão de modelador 3D desaparece":** era efeito de 1ª ordem de R1 na
  primeira rodada. O dado do GDC 2026 sustenta pressão (47% esperam usar IA para desenvolver
  assets 3D; 64% dos artistas visuais e técnicos veem impacto negativo), não desaparecimento.
  Rebaixado a e2.1 (mudança de conteúdo do ofício). O texto original foi para a seção 12. (R1)
- **Removido — "reguladores criam categoria jurídica de dado espacial":** efeito genérico, sem
  regulador nomeado e sem mecanismo. Cortado; o que sobrou dele está em e7.2.1, com titular e
  consequência concretos. (R2)
- **Removido — "surge a profissão de diretor de avatar":** proibido pelo critério de efeito
  genérico (nova profissão sem nome nem mecanismo). Cortado. (R3)
- **Removido — "escolas de arquitetura substituem maquete física por captura":** verdadeiro,
  provavelmente, e sem mecanismo específico desta raiz — decorreria igualmente de BIM, que é
  maduro. Reprovado no teste da causa solta. (R1)
- **Reconectado — "o valor migra para o corpus de captura":** estava pendurado em R2 na primeira
  rodada; pelo teste da causa solta, ele deriva melhor de R1 (pela economia de treino de modelo
  de mundo), com R2 como convergência. Virou e5.1.1, e a convergência está registrada na seção 5.

## 8. O que a máquina errou

Sou a máquina. O que segue é sobre esta rodada, com o motivo da desconfiança em cada item.

1. **Tratei número de avaliações como número de usuários.** Na primeira leitura anotei "Polycam,
   540 mil usuários". A fonte diz *mais de 540 mil avaliações no iOS*, e a fonte é um blog de
   uma empresa concorrente (Skyebrowse), não o Polycam. Percebi ao tentar citar e não achar a
   frase original. Ficou na seção 3 como proxy declarado, e fora de qualquer efeito.
2. **Ia citar tamanho de mercado de mocap sem marcador.** Os números que aparecem na busca — US$
   15,21 bi em 2025, US$ 74,33 bi em 2035, CAGR 17,19% — vêm de relatórios comerciais de
   metodologia fechada que não abri. A precisão de duas casas num prognóstico de dez anos é o
   sinal de alerta: é número construído para vender relatório. Substituído por "sem número
   confiável encontrado".
3. **Confiei numa fonte desatualizada sobre o NO FAKES Act.** O verbete da Wikipédia que abri
   está parado em maio de 2025 e me faria escrever que o projeto é de 2025 e não teve andamento.
   A data correta — aprovação unânime na Comissão do Judiciário do Senado em 18 de junho de 2026,
   S.4591 — veio do GovTrack e de um alerta de escritório de advocacia. E o alerta do escritório
   devolve 403 a leitor automatizado, então não pôde entrar na seção 11, embora tenha sido o que
   me fez procurar.
4. **Confundi merge com release.** Anotei "Three.js r186, setembro de 2026, renderizador nativo
   de splat". A fonte diz *merge em 10 de agosto, destinado à r186*. Merge não é release, e a
   diferença importa para um mapa que usa datas como âncora de prazo. Corrigido na seção 3.
5. **Escrevi um efeito plausível com mecanismo fraco.** "A profissão de modelador 3D desaparece"
   soa certo, é o que todo mundo diz, e não tinha mecanismo — só a intuição de que captura
   substitui modelagem. O dado do GDC 2026 contradiz o desaparecimento e sustenta transformação.
   Está registrado na seção 7 e o texto original está na 12.
6. **Não consegui abrir três fontes que queria.** A revisão forense da APMIS (Wiley) e o alerta
   da Holland & Knight bloqueiam leitor automatizado; a página da ISPRS Annals abriu só o
   resumo, não o PDF. O que digo sobre perícia forense está sustentado no resumo indexado pelo
   PubMed, e não no texto completo — limitação declarada aqui e na seção 11.
7. **O recorte brasileiro foi feito com duas buscas.** Quinze buscas em inglês, duas em
   português. O que afirmo sobre o Brasil na seção 3 é, portanto, mais fraco do que o resto da
   âncora, e os efeitos que dependem disso (e7.2, e15.1, e16.1) herdam essa fraqueza mesmo
   quando aparecem com confiança média.

## 9. Três cenários para 2056

**Provável.** A captura neural virou infraestrutura discreta, como o GPS. Toda página de produto,
de imóvel e de acervo é navegável, e ninguém chama isso de tecnologia — chama de página. O
enquadramento não morreu: virou opcional, e a maior parte da mídia continua saindo enquadrada
porque dirigir atenção é mais barato que negociá-la. O agregado 3D do mundo pertence a três ou
quatro plataformas que o vendem como serviço, e a alternativa aberta existe, cobre as cidades
ricas do hemisfério norte e é usada por quem não pode pagar. No Brasil, a cobertura volumétrica é
comprada, não produzida, e os municípios que abriram mão da base cartográfica própria nos anos
2030 hoje licenciam de volta o próprio território. A profissão de modelador não acabou: mudou de
conteúdo duas vezes e hoje se chama outra coisa. O corpo humano é licenciado por uso, com
cláusula e prazo, e há mais corpos sintéticos em circulação do que capturados. *Sinal precoce de
que estamos entrando aqui:* nenhum — é o cenário de inércia, e ele já está em curso.

**Desejável.** A mesma infraestrutura, com uma diferença que parece pequena e não é: todo ativo
3D carrega, por padrão de formato, a marca do que foi observado e do que foi inferido, e os
visualizadores a mostram. Isso foi decidido em 2031, quando um consórcio de seguradoras, arquivos
públicos e o Khronos concordaram que a alternativa era não poder usar nada disso como registro. A
consequência foi que a representação inferida virou utilizável em perícia, em restauro e em
cadastro — porque passou a dizer onde não sabe. O corpus de captura de espaço público é tratado
como as séries históricas do IBGE: quem coleta explora comercialmente por um prazo, e depois o
dado cai em domínio público. O Brasil entrou nisso pela porta do patrimônio, com as universidades
federais capturando acervo sob licença aberta e forçando a interoperabilidade por baixo. *O que
teria que ser feito para chegar lá:* a proveniência precisa ser campo de formato, não boa
prática — o que significa que a decisão tem que ser tomada no Khronos e não no produto. *Sinal
precoce:* a primeira extensão de formato com campo obrigatório de incerteza.

**Indesejável.** A proveniência nunca chegou, e trinta anos de registro visual do mundo ficaram
em representação que ninguém consegue auditar. O acervo digitalizado do patrimônio brasileiro é
navegável, bonito e parcialmente inventado, e não há método para separar. Tribunais aceitaram
reconstrução volumétrica como prova por uma década antes de descobrir o problema, e a revisão dos
casos é impossível porque o ativo não guarda de onde veio. A captura incidental nunca foi
regulada: o indicador de captura sumiu do hardware em 2029 e não voltou, e a expectativa de
privacidade em espaço público simplesmente se extinguiu por desuso, sem que nenhuma decisão
tenha sido tomada a respeito. O agregado é de três empresas, que não vendem o dado, vendem
resposta — e quem quer saber como é a própria rua paga por consulta. O corpo é licenciado, mas a
licença padrão é perpétua e mundial, e quem não assina não trabalha. *Sinal precoce deste
cenário:* um óculos de grande fabricante lançado sem indicador visível de captura, sem que isso
vire escândalo. Se passar batido, este é o caminho.

## 10. O experimento

### A mesma cena, três verdades

**O que é.** Capturar um mesmo ambiente do CIn — uma sala de aula, com objetos, profundidade e
um canto mal iluminado — por três caminhos, e publicar os três lado a lado no navegador, sem
legenda de qual é qual:

- **A — captura densa:** vídeo de celular dando a volta completa, processado em splat (Scaniverse
  ou Polycam, edição no SuperSplat, publicação pela API).
- **B — inferência a partir de pouco:** *uma* foto da sala, reconstruída por modelo de imagem
  única (TripoSR ou equivalente) ou por modelo de mundo (Marble, a partir da mesma foto).
- **C — medição:** trena a laser e malha simples, com dez a quinze medidas reais anotadas.

Tudo servido numa página só, com Three.js r186 e `KHR_gaussian_splatting`, os três navegáveis
com o mesmo controle de câmera.

**Que pergunta sobre o futuro ele ajuda a responder.** A pergunta que sustenta a raiz R1 e o
ramo e1 inteiro: **a diferença entre medir e inferir é perceptível por um humano treinado?** Se
for, o selo de proveniência (e1.1) é conveniência. Se não for, ele é infraestrutura — e todo o
mapa da seção 5 muda de peso.

**Que tecnologia emergente ele usa, e por que não dá com a madura.** Usa reconstrução neural a
partir de sensor comum (B é impossível com fotogrametria — uma foto não tem paralaxe), splat
navegável no navegador sem plugin (o `KHR_gaussian_splatting` e o renderizador nativo do Three.js
são de 2026) e publicação por API. A fotogrametria clássica faria só o A, mais devagar e sem
tempo real, e faria o C melhor — e é exatamente por isso que ela entra como a perna de controle:
o que o experimento quer expor é a *invenção*, e a técnica madura não inventa.

**O que a turma vai fazer quando testar isso em sala.** Em três rodadas:

1. **Cego.** Cada pessoa percorre as três cenas e marca, numa planta baixa impressa, onde acha
   que o modelo está inventando. Sem saber qual cena é qual.
2. **Medido.** Revelam-se as quinze medidas reais da cena C, e cada grupo mede as mesmas
   distâncias dentro de A e de B. Erro em centímetros, na lousa, por cena.
3. **Discussão com dado na mesa.** Cruza-se o palpite da rodada 1 com o erro da rodada 2: as
   pessoas apontaram invenção onde ela de fato estava? A turma sai com uma taxa de acerto, não
   com uma opinião.

**O resultado que me faria mudar de ideia.** Se a turma distinguir A de B acima do acaso **e** o
erro métrico de A contra a trena ficar abaixo de um centímetro em três metros, R1 perde a força:
a captura neural seria medição com outro nome, a inferência seria detectável a olho, e os ramos
e1, e1.1, e1.2 e o cenário indesejável inteiro caem para confiança baixa. O inverso também vale,
e é o resultado que eu espero: se ninguém distinguir B de A, e se o erro de B for pequeno o
bastante para parecer plausível e grande o bastante para estar errado, a proveniência deixa de
ser tema de artigo e vira requisito de projeto — que é a tese deste mapa.

## 11. Fontes

Só o que foi aberto nesta rodada (22/09/2026). Onde só foi possível ler resumo ou extrato de
busca, está dito.

1. https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/ — página do artigo original de 3D
   Gaussian Splatting (Inria/MPI, SIGGRAPH 2023). Sustenta a afirmação de que a técnica treina em
   minutos e renderiza em tempo real. Fonte primária dos autores; alta confiabilidade.
2. https://github.com/graphdeco-inria/gaussian-splatting — implementação de referência, ainda
   mantida. Sustenta que a base técnica do campo é aberta e viva. Primária; alta.
3. https://arxiv.org/abs/2003.08934 — NeRF (Mildenhall et al., 2020). Sustenta a datação da
   virada de 2020 e o contraste de desempenho com o 3DGS. Primária, revisada; alta.
4. https://www.khronos.org/news/press/gltf-gaussian-splatting-press-release — anúncio da extensão
   `KHR_gaussian_splatting`, 3 de fevereiro de 2026. Sustenta a data, a lista de contribuintes, a
   citação de Neil Trevett e a previsão de ratificação no segundo trimestre de 2026. Primária do
   consórcio; alta — com a ressalva de que "previsão de ratificação" é promessa, não fato.
5. https://architosh.com/2026/02/the-khronos-group-announces-gltf-gaussian-splatting-standard/ —
   cobertura independente do mesmo anúncio. Serve de checagem cruzada da data. Imprensa
   especializada em AEC; média.
6. https://radiancefields.substack.com/p/gaussian-splatting-in-august-2026 — boletim mensal do
   campo, agosto de 2026. Sustenta o merge do renderizador nativo no Three.js (10/08), o Splat.js
   da Arrival.Space, o Nuke 17.1v1, o Maya 2026, a API de publicação do SuperSplat e a contagem de
   103 artigos no mês. Boletim especializado, não revisado por pares; média — mas é a fonte mais
   densa e específica do campo, e as datas conferem com as fontes primárias onde cruzei.
7. https://radiancefields.com/4d-gaussian-splatting — explicação de 4DGS e vídeo volumétrico, da
   mesma casa. Sustenta o vocabulário de captura dinâmica. Média.
8. https://arxiv.org/abs/2509.17513 — 4DGCPro, compressão hierárquica 4D para streaming
   volumétrico progressivo. Sustenta que o gargalo de banda é objeto de pesquisa ativa. Preprint
   revisado por pares na conferência; média-alta.
9. https://arxiv.org/abs/2503.05162 — EvolvingGS, vídeo volumétrico transmissível. Mesmo papel.
   Preprint; média.
10. https://github.com/playcanvas/supersplat — SuperSplat, editor de splat de código aberto (MIT)
    que roda no navegador. Sustenta que a edição saiu do software de estúdio. Primária; alta.
11. https://developer.playcanvas.com/user-manual/supersplat/api-integrations/ — documentação da
    API REST de publicação. Sustenta e14 e e17.1 (publicação como endpoint, e o controle de quem
    publica). Primária; alta.
12. https://blog.playcanvas.com/new-in-supersplat-introducing-the-new-publishing-api/ — anúncio da
    API com os parceiros de lançamento (Teleport/Varjo, XGRIDS, LichtFeld). Primária; alta.
13. https://www.worldlabs.ai/blog/marble-world-model — Marble, modelo de mundo multimodal da World
    Labs. Sustenta que texto e imagem produzem splats mais malhas de colisão exportáveis, e o
    fechamento do ciclo entre capturado e gerado (e5). Primária do fabricante; média — é material
    de lançamento.
14. https://techcrunch.com/2025/11/12/fei-fei-lis-world-labs-speeds-up-the-world-model-race-with-marble-its-first-commercial-product/
    — cobertura independente do lançamento comercial, novembro de 2025. Confirma a data e o
    caráter comercial. Imprensa de tecnologia; média-alta.
15. https://www.worldlabs.ai/ — página da empresa, para a composição de fundadores (incluindo Ben
    Mildenhall, coautor do NeRF). Primária; alta para esse fato.
16. https://www.nianticspatial.com/blog/world-models-2026 — posição da Niantic Spatial sobre
    Large Geospatial Models, 13 de janeiro de 2026. Sustenta o conceito e a estratégia de
    "modelo do mundo real". **Não traz os números** — conferi, e o texto fala em "corpus
    extraordinário" sem cifra. Primária e interessada; média.
17. https://petapixel.com/2026/03/16/pokemon-go-players-unknowingly-helped-build-a-30-billion-ar-image-map-of-the-world/
    — origem do número de 30 bilhões de imagens capturadas por jogadores ao longo de dez anos.
    Sustenta R2 e e7. Imprensa especializada em fotografia; média — o número vem da Niantic e é
    reportado, não auditado.
18. https://thenextweb.com/news/meta-smart-glasses-privacy-crisis-apple-google-snap — reportagem
    sobre a crise de privacidade dos óculos. Sustenta os 7 milhões de unidades, os 82% de mercado,
    a ação judicial de 4 de março de 2026 na Califórnia, e as investigações do regulador
    britânico e do queniano. Imprensa de tecnologia com fontes nomeadas; média-alta.
19. https://fortune.com/2026/07/11/meta-ray-ban-smart-glasses-camera-led-light-privacy-safeguard-super-sensing-ai-prototype-covert-recording-concerns/
    — o firmware de julho de 2026 que desativa a câmera quando o LED é adulterado, e o protótipo
    "super-sensing". Sustenta SF5 e e6. Imprensa de negócios; alta para o fato do firmware, média
    para o que é relatado sobre o protótipo.
20. https://www.uploadvr.com/meta-codec-avatars-haircup-research-changeable-hairstyles/ — estado
    da pesquisa de Codec Avatars. Sustenta R3 no lado do rosto. Imprensa especializada em XR;
    média.
21. https://www.meta.com/emerging-tech/codec-avatars/ava256/ — página do conjunto de dados
    Ava-256 da Meta. Sustenta que a captura de avatar fotorreal é programa de pesquisa com dado
    publicado. Primária; alta.
22. https://move.ai/ — Move.ai, captura de movimento sem marcador. Sustenta a existência de
    captura por câmera única e por celular em produto comercial. Primária do fabricante; média
    (afirmação de fornecedor).
23. https://www.vp-land.com/p/motion-without-markers-move-ai-s-gen-2-technology-redefines-capture-for-filmmakers
    — cobertura independente da geração 2 da Move.ai. Confirma o posicionamento e o uso em
    produção audiovisual. Imprensa especializada em produção virtual; média.
24. https://github.com/zju3dv/EasyMocap — EasyMocap, captura de movimento sem marcador a partir de
    vídeo RGB, aberta. Sustenta que a técnica não depende de fornecedor. Primária; alta.
25. https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/
    — pesquisa State of the Game Industry 2026, mais de 2.300 respondentes. Sustenta os 28% de
    demitidos em dois anos, os 36% que usam IA generativa, os 52% que veem impacto negativo e os
    64% entre artistas visuais e técnicos. É o dado que rebaixou o efeito de "desaparecimento do
    modelador". Pesquisa com amostra declarada; alta para percepção, média para previsão.
26. https://www.cartoonbrew.com/tech/union-study-says-generative-ai-will-disrupt-204000-jobs-three-years-237495.html
    — estudo sindical sobre disrupção de empregos em animação. Sustenta o contexto de e2 e e10.
    Imprensa setorial reportando estudo encomendado por parte interessada; média-baixa — o número
    de 204 mil é projeção, e está citado aqui como contexto, não como base de efeito.
27. https://www.govtrack.us/congress/bills/119/s4591 — NO FAKES Act of 2026 (S.4591), tramitação.
    Sustenta a data de 18 de junho de 2026 e o estágio do projeto. Agregador de dados legislativos
    oficiais; alta.
28. https://en.wikipedia.org/wiki/No_Fakes_Act — definição de "réplica digital" e histórico do
    projeto. **Desatualizado** (parado em maio de 2025); usado só para a definição, não para o
    andamento. Média-baixa, e declarado.
29. https://pubmed.ncbi.nlm.nih.gov/42030038/ — revisão de 2026 (APMIS) sobre documentação e
    visualização 3D em prática forense, que classifica o 3DGS como técnica emergente. **Li o
    resumo indexado, não o texto integral** (o editor bloqueia leitor automatizado). Revisão
    em periódico revisado por pares; alta para a classificação, limitada pelo que o resumo diz.
30. https://arxiv.org/abs/2606.10612 — GaussTrace, análise de proveniência de modelos 3DGS.
    Sustenta SF2 e o ramo e1. Preprint recente, sem replicação conhecida; média-baixa — e é
    exatamente por isso que o ramo e1 tem confiança média e não alta.
31. https://isprs-annals.copernicus.org/articles/X-M-2-2025/215/2025/ — 3D Gaussian Splatting
    para documentação de artefatos culturais (ISPRS Annals). Sustenta e4 (o uso em acervo já é
    objeto de método publicado). **Abri o resumo; o PDF não foi lido** — os números comparativos
    contra fotogrametria estão no texto integral e não entram aqui. Revisado por pares;
    alta para a existência do método, nenhuma para as cifras.
32. https://www.scielo.br/j/inter/a/JFxBx6R5srj7PL3Kt3f5ndP/ — digitalização 3D de baixo custo em
    acervo museológico brasileiro (Museu Júlio de Castilhos, Porto Alegre). Sustenta a leitura de
    e4.1 (a restrição orçamentária define a política de acervo no Brasil). **Lido por extrato de
    busca, não integralmente.** Periódico brasileiro revisado por pares; média-alta, com a
    ressalva de ser anterior à era do splat.
33. https://www.terra.com.br/noticias/gemeos-digitais-avancam-na-gestao-e-sustentabilidade-urbana,9ab72002ecdf03c3195fec0eea8caa2en6y1mcg7.html
    — gêmeos digitais em cidades brasileiras. Nomeia Rio Verde (GO), com plataforma lançada em
    2026 a partir de *cartografia digital, imagens aéreas, sensores urbanos e bases integradas*, e
    Aparecida de Goiânia (3.275 câmeras, 720 km de fibra). Sustenta a afirmação de que o movimento
    municipal brasileiro é cadastral e sensorial, não volumétrico (e7.2) — **é justamente a
    ausência do 3D neural que ela documenta**. Imprensa generalista reportando cases municipais;
    média.
34. https://splattour.com/en/virtual-tour-cost — comparação de preços de tour virtual em 2026
    (€150–400 por levantamento Matterport profissional contra planos de splat a partir de
    €19/mês). Sustenta a ordem de grandeza de e16. **Fonte de vendedor de splat, com interesse
    direto na comparação**; baixa — está no documento como ordem de grandeza declarada, nunca
    como número.

## 12. Anexo — o levantamento bruto

### 12.1 As buscas desta rodada

Dezessete buscas, em 22/09/2026, quinze em inglês e duas em português. O desequilíbrio está
registrado como limitação na seção 8.

| # | Busca | Deu em quê |
|---|---|---|
| 1 | `Gaussian splatting 2026 state of the art neural rendering` | Boletim Radiance Fields, artigo do Inria, CVPR 2026. Base da seção 3. |
| 2 | `3D Gaussian splatting adoption Polycam Luma AI Scaniverse users 2026` | Só blogs comparativos comerciais. **Nenhum número de adoção publicado pelas empresas.** |
| 3 | `volumetric video telepresence codec avatars 2026 Meta photorealistic avatar smartphone capture` | Codec Avatars relightáveis, Hologram Calling no Horizon OS. Base de R3. |
| 4 | `captura 3D gaussian splatting Brasil privacidade LGPD digitalização de espaços 2026` | **Deu em nada sobre LGPD e captura volumétrica.** Não há, nas fontes acessíveis, discussão brasileira específica. Isso é em si um achado, e está na seção 3. |
| 5 | `radiance fields industry 2026 glTF Khronos Unreal Unity native support` | O anúncio do Khronos, o estado dos plugins de engine, o merge no Three.js. Base de R4. |
| 6 | `markerless motion capture Move.ai 2026 single camera consumer adoption price` | Move Engine M3 (jul/2026), modelo s2 de câmera única. Números de mercado descartados (seção 8). |
| 7 | `Niantic Spatial large geospatial model 2026 world scanning crowdsourced map ownership` | Os 30 bilhões de imagens; a estratégia de serviço, não de dado. Base de R2 e e9. |
| 8 | `image to 3D model 2026 Hunyuan3D Tripo single image reconstruction benchmark` | TRELLIS.2, Hunyuan3D 2.1/3.x superando TripoSR. Sustenta R1 mas **sem número que eu pudesse verificar** — os benchmarks citados estão em preprints que não abri. |
| 9 | `digital replica likeness law 2026 NO FAKES Act ELVIS Act 3D scan of person consent` | S.4591 aprovada em comissão em 18/06/2026. Base de R3 e e10. |
| 10 | `4D Gaussian splatting dynamic scene capture 2026 volumetric video streaming bandwidth` | 4DGCPro, EvolvingGS, streaming com redução de 10×, rig de 70 câmeras no NAB 2026. Base de e15. |
| 11 | `gaussian splatting patrimônio digitalização museus Brasil 2026 acervo 3D universidade` | ISPRS Annals e o trabalho do Museu Júlio de Castilhos. **Nada específico de 2026 no Brasil.** |
| 12 | `3D scan courtroom evidence forensic gaussian splatting crime scene admissibility 2026` | Revisão APMIS 2026 ("emerging"), GaussTrace. Base de e1. **Nenhum precedente de admissibilidade encontrado** — o que sustenta o prazo longo de e1.2.1. |
| 13 | `World Labs Marble 2026 3D world generation spatial intelligence` | Marble comercial desde nov/2025, exporta splats e malhas de colisão. Base de e5. |
| 14 | `smart glasses always-on capture 2026 Ray-Ban Meta Display privacy bystander scanning` | 7 milhões de unidades, 82%, firmware de 07/07/2026, protótipo super-sensing. Base de R2 e SF5. |
| 15 | `3D artist jobs 2026 AI impact modeling industry layoffs statistics` | GDC 2026. **É a busca que derrubou um efeito** (ver 12.2). |
| 16 | `"gêmeo digital" cidade Brasil 2026 drone levantamento 3D prefeitura Recife` | Rio Verde-GO, Aparecida de Goiânia, São Paulo, Curitiba — todos 2D/GIS/IoT/câmera. Recife digitalizou parcelamento em ago/2026, sem 3D; a página oficial devolve erro de certificado a leitor automatizado e por isso ficou fora da seção 11. |
| 17 | `"NO FAKES Act" Senate Judiciary June 2026 advanced S.4591 digital replica` | Confirmação da data e do número do projeto por fonte legislável (GovTrack). |

**Buscas que não deram em nada, e que valem por isso:** a de número 4 (LGPD × captura
volumétrica) e a de número 11 (patrimônio brasileiro em splat). Nenhuma discussão jurídica
brasileira específica e nenhum projeto brasileiro de acervo em captura neural apareceram. Se
alguém da turma achar, o mapa muda — e é por isso que está registrado aqui e não omitido.

### 12.2 Os efeitos cortados, com o texto original

**Cortado — "A profissão de modelador 3D desaparece"** (era e2 na primeira rodada, 1ª ordem de
R1, `sinal: medio · prazo: 2034 · confianca: alta`):

> *Texto original:* "A modelagem 3D manual deixa de existir como profissão, porque tudo que é
> representável pode ser capturado ou gerado, e o que sobra é integração."

Reprovado pelo dado: a pesquisa do GDC 2026 (2.300+ respondentes) mostra 47% esperando usar IA
para desenvolver assets 3D e 64% dos artistas visuais e técnicos vendo impacto negativo — isso é
pressão e transformação, não extinção. E o mesmo levantamento registra demanda persistente por
artistas e animadores especializados. Rebaixado a **e2.1** (o conteúdo do ofício muda), que é o
que a evidência sustenta.

**Cortado — "Reguladores criam categoria jurídica de dado espacial"** (era 1ª ordem de R2,
`prazo: 2033`):

> *Texto original:* "Órgãos reguladores criam uma nova categoria de dado pessoal — o dado
> espacial — com regime próprio de consentimento."

Reprovado pelo critério de efeito genérico do método: nenhum regulador nomeado, nenhum mecanismo
que o ligue especificamente a esta raiz, e a frase serviria a qualquer tema de captura de dado do
semestre. O que sobrou dele, com titular e consequência concretos, é **e7.2.1** (a base
territorial vira dado privado licenciado).

**Cortado — "Surge a profissão de diretor de avatar"** (era 2ª ordem de R3):

> *Texto original:* "Surge uma nova profissão, a de diretor de avatar, responsável por dirigir
> performances volumétricas."

Reprovado pela mesma regra — "surge uma nova profissão" é um dos quatro efeitos proibidos sem
nome e mecanismo. Não consegui nomear a profissão sem inventá-la, então saiu.

**Cortado — "Escolas de arquitetura substituem maquete física por captura"** (era 2ª ordem de R1):

> *Texto original:* "Cursos de arquitetura abandonam a maquete física em favor de captura e
> navegação, e o ateliê vira laboratório de reconstrução."

Reprovado pelo **teste da causa solta**: removendo R1, o efeito acontece do mesmo jeito, por
BIM e por modelagem paramétrica — que são maduros. Não deriva desta raiz.

**Reconectado — "o valor migra para o corpus de captura"**: estava pendurado em R2. Pelo mesmo
teste, deriva melhor de R1 (a economia de treino de modelo de mundo, via e5 e e5.1), com R2
chegando ao mesmo ponto por outro caminho. Virou **e5.1.1**, e a convergência ficou registrada na
seção 5 como o achado central do mapa.

### 12.3 Caminhos abandonados

- **Tratar "modelo de mundo" (Marble, LGM, Genie) como quinta raiz.** Abandonado: a ruptura
  interessante não é o modelo, é o fato de o capturado e o gerado compartilharem o contêiner —
  o que já está dentro de R1 como mecanismo (e5). Uma quinta raiz diluiria, e o método pede duas
  a quatro.
- **Tratar `img2threejs` (reconstrução como programa) como raiz.** Abandonado: não achei
  implementação em escala, só a ferramenta levantada pela turma. Vira **sinal fraco SF1**, que é o
  lugar honesto de uma coisa promissora e sem base instalada.
- **Um ramo sobre robótica.** A captura como insumo de robô é o tema 9 e o tema 11; ficou de
  fora deliberadamente, salvo onde a fronteira é inevitável (e7.1.1, sobre onde a navegação
  autônoma funciona pior).
- **Um ramo sobre XR/óculos como plataforma de consumo.** É o tema 15; aqui os óculos entram só
  como **instrumento de captura** (R2), não como superfície de exibição.
- **Estimar o mercado em cifras.** Tentado e abandonado depois da busca 6: os relatórios de
  *market research* disponíveis não têm metodologia aberta. Fica o registro de que este mapa não
  tem uma única projeção financeira, e isso é escolha.

### 12.4 Contagens declaradas

Raízes: 4. Efeitos de 1ª ordem: 17. De 2ª: 25. De 3ª: 19. Total de 61 efeitos.
Confiança — 1ª ordem: alta 8, média 8, baixa 1. 2ª ordem: alta 1, média 18, baixa 6. 3ª ordem:
alta 0, média 4, baixa 15. Prazo mais próximo: 2030 (e12). Prazo mais distante: 2052 (e4.1.1 e
e14.2.1), dentro do horizonte de 2056. Nenhum efeito de 1ª ou 2ª ordem ultrapassa o horizonte, e
nenhum de 3ª ordem também — o que, num horizonte de trinta anos, significa que este mapa é
conservador quanto ao fim da janela: nada aqui está datado para a última década dela, e isso é
uma limitação declarada, não uma virtude.

### 12.5 Saída do verificador


Comando:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2056/10-captura-de-realidade-e-renderizacao-neural/tendencia-captura-de-realidade-e-renderizacao-neural.md --links
```

Saída, na íntegra, em 22/09/2026:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 17 (frontmatter diz 17)
efeitos ordem 2: 25 (frontmatter diz 25)
efeitos ordem 3: 19 (frontmatter diz 19)
prazo > horizonte (2056) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 8 · media 8 · baixa 1
confiança ordem 2: alta 1 · media 18 · baixa 6
confiança ordem 3: alta 0 · media 4 · baixa 15
links da seção 11: 34/34 respondem (frontmatter diz fontes: 34)
RESULTADO: ok
```

Duas observações sobre esta saída, porque números sem leitura não valem nada:

- **`prazo > horizonte em ordem 3: 0`.** Nenhum efeito de 3ª ordem passa de 2056. Num horizonte
  de trinta anos isso não é mérito, é sinal de que o mapa se concentra nas duas primeiras
  décadas da janela. Está declarado em 12.4 como limitação.
- **`links da seção 11: 34/34`.** Três fontes que eu queria citar ficaram de fora. Duas por
  bloqueio a leitor automatizado (o alerta da Holland & Knight sobre o NO FAKES Act e a revisão
  da APMIS no portal da Wiley, ambas HTTP 403). A terceira — a página oficial da Prefeitura do
  Recife — por **cadeia de certificado incompleta**, que é caso diferente e precisa ficar
  registrado como tal:

```
curl -sL -o /dev/null -w "%{http_code}" -A "Mozilla/5.0" \
  https://www2.recife.pe.gov.br/noticias/26/08/2026/prefeitura-do-recife-moderniza-aprovacao-de-terrenos-com-novo-sistema-digital
→ 200

python3 -c "import urllib.request; urllib.request.urlopen(...)"
→ URLError [SSL: CERTIFICATE_VERIFY_FAILED] unable to get local issuer certificate
```

  A distinção importa e está registrada em `TMI-0124`: bloqueio na borda (403) é defeito do
  filtro e a fonte permanece, conforme `TMI-0120`; cadeia de certificado incompleta é defeito do
  servidor, reprovado por qualquer cliente estrito, e ali a fonte pode ser substituída — desde
  que a substituta seja igual ou melhor. Aqui ela é melhor: a página do Recife sustentava só que
  o cadastro municipal é 2D; a substituta nomeia Rio Verde (GO), a composição da plataforma de
  2026 e o caso de Aparecida de Goiânia. O fato do Recife continua na seção 3, sem link, com a
  origem declarada. As três substituições estão registradas na seção 8 e em 12.1.
