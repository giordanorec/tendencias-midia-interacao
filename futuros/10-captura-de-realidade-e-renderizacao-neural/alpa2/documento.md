---
tema: Captura de realidade e renderização neural
slug: captura-de-realidade-e-renderizacao-neural
autor_login: alpa2
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-17
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 8
efeitos_ordem_2: 14
efeitos_ordem_3: 14
tecnologias_citadas: [3D Gaussian Splatting, NeRF, VGGT, DUSt3R, VGGT-SLAM, TripoSR, Hunyuan3D, TRELLIS, Depth-Anything-V2, SuperSplat, PlayCanvas, Scaniverse, Niantic VPS 2.0, Large Geospatial Model, Move.ai, EasyMocap, 4D-MoDe, Temporal Gaussian Hierarchy, avatares gaussianos, model-viewer, WebGPU]
fontes: 9
confianca: media
experimento: Capturar o mesmo espaço três vezes com celular e medir o que muda entre as cópias — e quem aparece nelas sem ter sido convidado.
skill_usada: futurizacao-alpa2
publico_ok: false
---

## 1. Resumo

Entre 2023 e 2026 a captura 3D deixou de ser um procedimento e virou um resultado. O 3D
Gaussian Splatting (SIGGRAPH 2023) provou que um campo de radiância podia ser renderizado
acima de 100 fps em 1080p; em 2025 o VGGT (CVPR 2025) mostrou que câmera, profundidade e
nuvem de pontos podem sair de uma a centenas de imagens **em menos de um segundo, numa única
passagem, sem pose conhecida**; em 2026 splats entraram em Houdini 22, Arnold, TouchDesigner,
SketchUp e no Apple Maps. O que está acontecendo não é "3D mais barato": é o desaparecimento
da etapa de autoria entre o mundo e o ativo 3D.

Este mapa identifica três disrupções-raiz que sobrevivem ao teste de emergência (Passo 2) e
deriva delas 36 efeitos em três ordens, com horizonte em 2031. A tese central: **o gargalo se
desloca da produção para a procedência**. Quando capturar custa quase nada, o que passa a ser
caro e disputado é saber de onde veio a cópia, quem consentiu com ela e quão atual ela é.

Confiança geral: média. A primeira ordem tem sinal forte e evidência publicada; a terceira
ordem é, quase inteira, confiança baixa — e isso é o resultado esperado do método, não uma
falha dele.

## 2. O tema

Captura de realidade e renderização neural é o conjunto de técnicas que transforma sensor
comum — uma câmera de celular, um vídeo antigo, uma foto de acervo — em representação 3D
navegável e renderizável. Não é fotogrametria acelerada: é a substituição do pipeline
clássico (modelar → texturizar → animar) por um pipeline de inferência (capturar → reconstruir
→ corrigir).

**Recorte desta análise.** Horizonte 2031. Público: quem projeta mídia e interação —
designers, diretores de arte, desenvolvedores de aplicação, pesquisadores de interface.
Recorte global, com uma nota sobre o Brasil na seção 3 e nos cenários. Viés declarado pelo
solicitante: neutro. Único descarte declarado: **o que já é comum em produto de massa não
entra como disrupção-raiz** — é a régua da disciplina, e ela custou uma disrupção candidata
neste mapa (ver seções 4 e 8).

**Fronteiras.** Robô que aprende em mundo simulado é outro tema; distribuição de 3D e XR no
navegador é outro tema; segmentação semântica por conceito é outro tema. Aqui o objeto é
**transformar realidade em ativo 3D** — e o que decorre disso.

### Entrevista (Passo 1), como foi respondida

| Item | Resposta registrada |
|---|---|
| 1. Horizonte | 2031 |
| 2. Recorte | quem projeta mídia e interação; global, com nota sobre o Brasil |
| 3. Descartes | o que já é comum em produto de massa (régua da disciplina); nenhum outro |
| 4. Viés | neutro, sem preferência declarada |
| 5. Palpite do usuário | nenhum — levantar do zero |

Condição de saída satisfeita: itens 1 e 2 respondidos. Nenhuma pergunta ficou sem resposta,
portanto não há suposição substituindo entrevista — **mas há uma suposição operacional
relevante**: esta rodada correu sem interlocutor humano disponível para arbitrar escolhas no
meio do caminho, de modo que todas as decisões de corte (o que virou disrupção-raiz, o que foi
para o estado atual) foram tomadas pela skill e estão declaradas na seção 7.

## 3. Onde isso está hoje

### O que já existe e funciona

**Renderização.** 3D Gaussian Splatting (Kerbl, Kopanas, Leimkühler, Drettakis — SIGGRAPH
2023) representa a cena como gaussianas 3D otimizadas, com rasterização ciente de
visibilidade, e renderiza cenas completas e ilimitadas a **≥100 fps em 1080p**. É a técnica
que tirou o campo de radiância do regime de pesquisa e o colocou no regime de produto.

**Reconstrução sem pose.** O VGGT (CVPR 2025) infere numa única passagem os parâmetros
intrínsecos e extrínsecos de câmera, mapas de profundidade, mapas de pontos e rastreio de
pontos 3D, a partir de **uma, algumas ou centenas de vistas, em menos de um segundo**, e supera
alternativas que dependem de pós-processamento. Descendentes diretos apareceram ao longo de
2026 (VGGT-SLAM 2.0 para reconstrução densa em tempo real; PanoVGGT para panorâmicas;
VGG-T3 para escala offline) — sinal de que a linhagem feed-forward virou a linha principal do
campo, e não um resultado isolado.

**Ferramental de produção.** Em junho de 2026, o boletim Radiance Fields registrava o
Houdini 22 elevando splats a uma de suas duas iniciativas estratégicas (ao lado de IA), o
Arnold 7.5.2 com render e relighting nativos de splats, suporte em TouchDesigner (GSOPs) e
SketchUp, e o **Apple Maps começando a usar a técnica**. Do lado aberto, o SuperSplat
(PlayCanvas) é um editor de splats que roda no navegador, sem instalação.

**Corpo.** A Move.ai afirma ter a tecnologia markerless mais precisa do setor, validada em
comparação com sistemas ópticos líderes e por grandes estúdios, operando em volumes de 4×4 m a
20×20 m, dentro e fora de estúdio, e diz ter gerado "milhões de minutos de movimento" para
treino de IA a partir de seus produtos de consumo. Em pesquisa, avatares gaussianos de corpo
inteiro e telepresença monocular (Mon3tr, SqueezeMe, HumanDreamer-X) estão em cadência de
publicação contínua.

**Streaming volumétrico.** O 4D-MoDe (setembro de 2025) separa fundo estático de primeiro
plano dinâmico e comprime vídeo volumétrico a cerca de **11,4 KB por quadro inter-frame**,
com qualidade equivalente ao 4DGC usando 18,3% do armazenamento, renderizando acima de 140 fps.
Vídeo volumétrico longo já cabe em ordens de grandeza compatíveis com distribuição.

**Índice do mundo.** A Niantic Spatial descreve o Scaniverse como porta de entrada de um
*Large Geospatial Model* — "uma base de dados viva do mundo que pessoas e máquinas podem
consultar" —, construído sobre milhões de objetos e locais digitalizados e o que a empresa
chama de uma das maiores coleções de gaussian splats do mundo, com planos de acrescentar
modelos de fundação espacial para compreensão semântica de cena.

### O que existe mas não pegou (ou não pega ainda)

- **Malha limpa saindo de IA.** Geradores de imagem-para-3D (TripoSR em menos de meio segundo
  numa GPU de datacenter; Hunyuan3D e TRELLIS com qualidade superior em 2026) entregam malha
  texturizada, mas não topologia quadrangular limpa: rigging, deformação e orçamento de
  polígono ainda exigem retopologia manual. O elo mais citado como quebrado da cadeia
  continua quebrado.
- **Reflexo e reacendimento.** Objetos reflexivos, renderização inversa e relighting seguem
  como limitação reconhecida do 3DGS.
- **Peso do ativo.** A troca de NeRF por splat comprou velocidade e pagou em armazenamento —
  modelos compactos de dezenas de MB deram lugar a cenas de centenas de MB a mais de 1 GB, o
  que empurra a compressão para o centro da agenda (e explica por que trabalhos como o
  4D-MoDe medem sucesso em KB por quadro).
- **Interoperabilidade.** Cada ferramenta ganhou suporte a splat em 2026 por conta própria;
  atravessar departamentos ainda tem atrito.

### Quem está construindo

INRIA/Université Côte d'Azur (3DGS), Meta AI e Universidade de Oxford (VGGT), Niantic Spatial
(Scaniverse, VPS 2.0, LGM), PlayCanvas (SuperSplat), Luma AI e Polycam (captura e plugins de
engine), Move.ai (captura de movimento), Tencent (Hunyuan3D), Stability/Tripo (TripoSR),
SideFX, Autodesk, Apple, além do fluxo contínuo de arXiv em cs.CV e cs.GR.

### Nota sobre o Brasil

O Brasil aparece neste mapa menos como produtor de técnica e mais como jurisdição onde a
questão da captura de pessoas está sendo decidida antes da chegada da escala. O PL 4025/23
(dep. Marx Beltrão), aprovado na Comissão de Cultura da Câmara em **19 de dezembro de 2025**,
exige autorização prévia para usar imagens de pessoas e obras protegidas em sistemas de IA
generativa, respeitada "a finalidade da representação e a honra da pessoa retratada"; segue
para a CCJ em caráter conclusivo. Em paralelo, a doutrina já discute a captura ambiental
permanente: um artigo de março de 2026 na ConJur argumenta que a gravação invisível por óculos
inteligentes corrói o consentimento livre e informado, ancorando-se no art. 5º, X da
Constituição, no art. 20 do Código Civil e na LGPD (Lei 13.709/2018), e rejeitando
explicitamente a distinção fácil entre espaço público e privado como salvo-conduto.

## 4. As disrupções-raiz

Três candidatas passaram nos três testes. Uma quarta, forte e tentadora, foi **rejeitada** —
o registro está aqui porque a rejeição é parte do resultado.

---

### D1 — A reconstrução deixa de ser um procedimento por cena e vira inferência de modelo único

**O que rompe.** Até aqui, capturar um espaço exigia *planejar a captura*: órbita em torno do
objeto, sobreposição suficiente, calibração, e depois minutos a horas de otimização daquela
cena específica. O regime feed-forward (DUSt3R → VGGT → VGGT-SLAM 2.0) elimina as duas coisas:
não precisa de pose conhecida e não precisa de otimização por cena. Isso muda *quem pode
capturar* (qualquer um, sem método) e, sobretudo, *o que pode ser capturado*: todo o acervo de
imagem já existente no mundo — frames de vídeo antigos, fotos de jornal, arquivos de museu —
passa a ser matéria-prima 3D retroativamente. Não é "mais rápido": é o passado virando
capturável.

**Por que agora, e não há cinco anos.** Em 2021 não havia nem representação renderizável em
tempo real (3DGS é de 2023) nem reconstrução em passagem única sem pose (VGGT é de março de
2025, prêmio de melhor artigo no CVPR 2025). O limiar técnico foi cruzado duas vezes em dois
anos, e em 2026 a linhagem já rendeu variantes para tempo real, panorâmica e escala offline.

**O que ainda falta.** Escala e confiabilidade fora de distribuição: reconstrução feed-forward
de acervos heterogêneos (lentes desconhecidas, iluminação inconsistente, décadas diferentes)
ainda é assunto de artigo, não de produto. Falta também o elo de saída — malha limpa e
editável — que segue exigindo retopologia manual.

---

### D2 — A aparência e o movimento de uma pessoa tornam-se capturáveis sem estúdio, sem marcador e sem negociação prévia

**O que rompe.** O mocap clássico é um evento contratual: a pessoa vai ao estúdio, veste o
traje, e o consentimento é logicamente anterior à captura — sem consentimento, não há dado.
A captura markerless a partir de vídeo RGB inverte a ordem: **o dado pode existir antes de
qualquer conversa**. Some-se a isso o avatar gaussiano reconstruído a partir de vídeo
monocular e a reperformance fotorrealista, e o que muda não é o custo da animação, é a
premissa jurídica e ética do campo inteiro.

**Por que agora.** Precisão markerless validada contra sistemas ópticos e em uso por grandes
estúdios; publicação contínua de avatares gaussianos controláveis, destilados para rodar em
dispositivo móvel (SqueezeMe), e de telepresença monocular (Mon3tr); compressão volumétrica em
ordem de 11,4 KB/quadro, que tira o corpo capturado do regime de arquivo de pesquisa e o
coloca no regime de transmissão.

**O que ainda falta.** Qualidade estável sob oclusão, mãos e face em captura monocular
casual; e — determinante — moldura jurídica. No Brasil o PL 4025/23 ainda não é lei, e a
discussão de captura ambiental é doutrina recente, não jurisprudência consolidada.

---

### D3 — O índice 3D do mundo vira infraestrutura consultável por máquinas, construída por captura distribuída e privada

**O que rompe.** Mapa é representação para humanos, com dono declarado e método público. O que
a Niantic Spatial descreve — base viva do mundo que pessoas **e máquinas** consultam, montada
sobre scans de usuários de app de consumo — é outra coisa: um substrato operacional privado,
acumulado sem mandato cartográfico, sobre o qual agentes e robôs vão se localizar e agir.
Rompe a separação entre mapear e operar, e desloca o poder de quem desenha o mapa para quem
detém o índice.

**Por que agora.** O 3DGS tornou o ativo leve o bastante para acumular em volume; a
localização visual passou a funcionar sobre esse acervo (VPS 2.0); grandes plataformas de mapa
começaram a adotar a representação (Apple Maps, em 2026); e o comprador final apareceu — IA
física e robótica precisam de mapa métrico e semântico que não existe em formato aberto.

**O que ainda falta.** Cobertura e, principalmente, **atualização**: um índice do mundo é um
ativo que apodrece. Falta ainda qualquer regime consolidado de autorização sobre a captura de
interiores e de propriedades privadas — hoje isso é política de empresa, não norma.

---

### Rejeitada: "qualquer pessoa captura 3D com o celular"

Pelos três testes: (1) o que rompe — o acesso à captura 3D, que já havia sido rompido;
(2) por que agora — o Scaniverse é gratuito e roda em smartphone comum desde antes deste
horizonte; (3) **o que ainda falta para se concretizar — nada**: está em loja de aplicativos,
é grátis, é usado em massa, e a própria Niantic o descreve como serviço de ingestão em escala.
Pelo critério do Passo 2 e pela régua da disciplina, isso é **tecnologia madura** e vai para a
seção 3, não para cá. É exatamente o erro documentado no `DUVIDAS.md` do autor da skill —
confundir *recente* com *emergente* — e ele reapareceu aqui na primeira passagem (ver seção 8).

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "D1 — A reconstrução deixa de ser procedimento por cena e vira inferência de modelo único"
    efeitos:
      - id: e1
        ordem: 1
        efeito: A captura deixa de exigir sessão planejada e qualquer acervo de imagem existente vira fonte de geometria.
        sinal: medio
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Arquivos fotográficos e videográficos passam a ser minerados como reservas de 3D, não como coleções de imagem.
            sinal: fraco
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O licenciamento de acervo passa a separar direito de exibir a imagem de direito de reconstruir o espaço que ela contém.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A etapa cara do pipeline passa a ser corrigir a reconstrução, não construir o modelo.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A formação em 3D se reorganiza em torno de diagnóstico de reconstrução e retopologia, e a modelagem do zero vira especialidade de nicho.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O custo marginal de um cenário 3D fotorrealista específico cai para perto de zero.
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O fotorrealismo vira a opção padrão de qualquer projeto, e o estilo passa a ser uma decisão deliberada e mais cara que o realismo.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A não-fotorrealidade se consolida como marca de autoria e critério de valor em obras de mídia interativa.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Equipes pequenas alcançam paridade visual com grandes estúdios em ambientação, mas não em sistemas e direção.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O diferencial competitivo das produtoras migra de capacidade de produção para curadoria, direção e acesso a locações autorizadas.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A reconstrução migra do tempo de autoria para o tempo de execução, acontecendo no dispositivo do usuário durante o uso.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Interfaces passam a assumir que a geometria do entorno do usuário é conhecida, e não mais que a tela é o único palco.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A planta do espaço doméstico passa a ser tratada como dado pessoal sensível, com regime de retenção próprio.
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "D2 — Aparência e movimento de uma pessoa tornam-se capturáveis sem estúdio, sem marcador e sem negociação prévia"
    efeitos:
      - id: e4
        ordem: 1
        efeito: A aparência volumétrica de qualquer pessoa filmada em vídeo comum torna-se um ativo reproduzível e reanimável.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Contratos de elenco e de eventos passam a tratar captura incidental, e não apenas sessões de captura agendadas.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O consentimento vira metadado técnico embarcado no ativo 3D, e ativo sem procedência de consentimento perde valor comercial.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: O litígio por réplica espacial não autorizada cresce antes de existir lei específica sobre ela.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Tribunais fixam por analogia uma doutrina de aparência tridimensional antes de o legislador escrevê-la.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A captura de movimento sai do estúdio e passa a ocorrer no lugar onde o movimento realmente acontece.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Esporte, reabilitação e ergonomia adotam análise de movimento por câmera comum como rotina, fora de laboratório.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O padrão de andar de uma pessoa passa a funcionar como identificador biométrico de fato, sem ter sido regulado como tal.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Bases de movimento humano crescem por captura oportunista de vídeo já existente, e não por sessões contratadas.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Procedência verificável de dado de movimento vira exigência contratual padrão em produção audiovisual e em treino de modelos.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: A telepresença volumétrica passa a caber no orçamento de rede de uma videochamada comum.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A reunião remota ganha corpo e espaço compartilhado, deslocando a grade de rostos como formato dominante em usos específicos.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A presença ao vivo perde força como prova, porque reperformance fotorrealista e transmissão tornam-se indistinguíveis sem atestação criptográfica.
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "D3 — O índice 3D do mundo vira infraestrutura consultável por máquinas, construída por captura distribuída e privada"
    efeitos:
      - id: e7
        ordem: 1
        efeito: Um índice 3D consultável de espaços públicos e privados se acumula sem mandato cartográfico nem inventário público do que foi capturado.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Abre-se disputa sobre quem autoriza a captura de um interior — o visitante que escaneia, o ocupante ou o proprietário.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Consolida-se uma figura jurídica de direito sobre a representação espacial do imóvel, distinta do direito de imagem e da propriedade.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Robôs e agentes passam a operar em cima de mapas proprietários de terceiros, e não de mapas próprios.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Dependência de infraestrutura espacial estrangeira entra na pauta de soberania digital de países que não operam índice próprio.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: A atualização contínua do índice, e não a captura inicial, torna-se o produto vendido.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Quem captura vira fornecedor de dado remunerado por volume, e não proprietário do ativo que ajudou a formar.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Forma-se um trabalho informal de coleta espacial, pago por scan e concentrado onde o índice está desatualizado.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: A divergência entre a cópia e o mundo vira risco operacional mensurável, e não apenas defeito estético.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: Auditoria de atualidade espacial vira requisito em setores críticos que operam por mapa, como logística e resposta a emergência.
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o YAML não diz

**A tensão principal do mapa é entre e2 e e7.1.** O custo de produzir um cenário cai para
perto de zero (e2) exatamente quando o custo de ter *direito* de usar aquele cenário começa a
subir (e7.1). Se as duas curvas correrem juntas, o efeito líquido para quem projeta mídia não
é "3D barato": é a substituição de um orçamento de produção por um orçamento jurídico. Isso
contraria a leitura intuitiva da tendência e é, na minha avaliação, o achado mais útil desta
roda.

**e1.2 e e1.2.1 não descrevem a morte do modelador — descrevem uma troca de gargalo, e isso
foi revisado no Passo 6.** O dado disponível puxa contra a leitura catastrofista: no GDC 2026
State of the Game Industry, apenas **19%** dizem usar IA generativa para geração de assets, e
a limitação técnica citada de forma recorrente é justamente a que impede a substituição —
saída sem topologia quadrangular limpa, que quebra rigging, deformação e orçamento de
polígono. Ao mesmo tempo, **52%** dos profissionais consideram que a IA generativa está
prejudicando a indústria (contra 30% no ano anterior e 18% dois anos antes), e entre artistas
visuais e técnicos esse número é **64%**. Ou seja: a percepção de ameaça corre bem à frente da
substituição efetiva — e percepção move contrato coletivo, política de estúdio e escolha de
carreira antes de a técnica chegar lá. O efeito real de médio prazo é institucional, não
técnico.

**A terceira ordem está deliberadamente concentrada em 2031** porque esse é o horizonte
pedido. Isso comprime artificialmente efeitos que provavelmente se distribuiriam entre 2031 e
2036 — quem ler este mapa deve tratar os anos da terceira ordem como "no fim do horizonte, ou
depois dele", não como datas.

**O ramo D2 é o único em que a evidência jurídica corre à frente da evidência técnica.** Há
projeto de lei em tramitação e doutrina publicada antes de a captura não consentida ter virado
prática de escala. Isso é raro, e é o motivo de e4.2 ter sinal médio e não fraco.

## 6. Sinais fracos e wildcards

- **Reconstrução como programa, não como dado.** A ideia de devolver *código procedural*
  (uma cena Three.js gerada) em vez de nuvem de gaussianas inverte a economia do ativo: um
  programa é editável, versionável, difável e pesa quilobytes, enquanto um splat pesa
  centenas de megabytes e não se edita por parâmetro. Quase não aparece hoje; se pegar, muda a
  resposta a e2.1 (estilo volta a ser barato, porque o ativo volta a ser paramétrico).
- **Compressão como o verdadeiro gargalo resolvido.** 11,4 KB por quadro de vídeo volumétrico
  é o tipo de número que, quando cai, destrava distribuição de massa sem que ninguém anuncie
  disrupção nenhuma. Vale mais a pena vigiar a curva de KB/quadro do que os anúncios de
  qualidade visual.
- **A captura do que já não existe.** Reconstrução feed-forward de acervos históricos
  heterogêneos permitiria navegar lugares demolidos, cidades pré-desastre e arquivos
  pessoais. É tecnicamente menos difícil do que parece e culturalmente mais pesado do que se
  admite: produz um espaço navegável que ninguém pode verificar.
- **Wildcard (baixa probabilidade, alto impacto).** Um splat de uma pessoa capturado sem
  consentimento é usado em obra comercial de grande alcance; a decisão judicial que se segue
  não trata o caso como direito de imagem, mas cria — por analogia com direito autoral — um
  direito patrimonial sobre a *representação volumétrica* da pessoa, transferível e
  licenciável. O efeito colateral perverso seria tornar a réplica 3D um bem negociável, e
  portanto comprável em massa de quem precisa de dinheiro, exatamente ao inventar a proteção
  contra ela.
- **Wildcard 2.** Uma plataforma de índice espacial privado sofre vazamento e libera nuvens
  3D de interiores residenciais em volume. O resultado provável não é regulação da captura, e
  sim colapso reputacional do ato de escanear — a técnica continua disponível, mas capturar em
  público vira socialmente inaceitável, do jeito que aconteceu com uma geração anterior de
  óculos com câmera.

## 7. Contra o próprio mapa

**1. Qual efeito é só extrapolação linear do presente?**
O e2 ("custo marginal cai para perto de zero") é a extrapolação mais óbvia: pega a curva de
barateamento de 2023–2026 e a estica. Ele ignora que o custo de produção nunca foi o único
custo, e que curvas de custo costumam parar num piso institucional — licença, autorização,
seguro, revisão. Mantive o efeito, mas rebaixei o escopo: ele vale para *cenário*, não para
*obra*. E o e2.2 foi reescrito no meio do processo para explicitar o limite — paridade em
ambientação, não em sistemas e direção.

**2. Qual efeito assume velocidade de adoção sem precedente comparável?**
O e6.1 (telepresença volumétrica deslocando a grade de rostos) assume adoção rápida de um
formato de comunicação. O caso comparável é a videochamada 3D e a telepresença imersiva das
duas décadas anteriores, que tiveram demonstrações impecáveis e adoção marginal — a
videoconferência só virou padrão sob choque externo, não por qualidade. Por isso e6.1 está com
sinal fraco e confiança baixa, e o filho dele (e6.1.1) foi mantido apenas porque a questão
probatória não depende de adoção em massa: basta um caso.
O e7.2.1 (soberania) também flerta com velocidade improvável: pauta de soberania digital
costuma levar mais de uma década entre percepção e instrumento.

**3. Qual disrupção-raiz pode simplesmente não se concretizar?**
A D3. Um índice 3D global vivo tem um inimigo que não é técnico nem jurídico: **manutenção**.
O ativo apodrece, a cobertura é desigual e o custo de atualizar cresce com o tamanho. Há
precedente farto de mapas 3D ambiciosos que ficaram desatualizados e viraram passivo. Se a D3
não se concretizar, **o mapa não desmorona**: D1 e D2 são independentes dela e sustentam 20
dos 36 efeitos. O que cai é todo o ramo e7–e8 e a leitura de que o poder migra para quem detém
o índice — nesse cenário, o índice fragmenta em silos setoriais (uma rede de varejo mapeia
suas lojas, uma operadora logística seus galpões) e o efeito e7.1 vira disputa contratual
banal em vez de questão pública.
A D2, por outro lado, é a mais robusta: mesmo que a qualidade dos avatares estanque, a captura
de movimento markerless já está validada e em produção.

**4. Que viés entrou aqui?**
Quatro, declarados:
(a) **Viés de fonte anglófona e de indústria de jogos/cinema.** As evidências mais concretas
que consegui abrir são de engines, estúdios e arXiv em inglês; o Brasil entra quase só pelo
lado jurídico. O mapa provavelmente subestima usos não-ocidentais e não-audiovisuais
(patrimônio, perícia, agricultura, defesa civil).
(b) **Viés de disponibilidade de publicação.** Áreas com publicação frequente (avatares
gaussianos, compressão) aparecem com sinal mais forte que áreas igualmente relevantes mas
menos publicadas (uso corporativo fechado, defesa).
(c) **Viés declarado pelo solicitante: neutro** — nenhum pedido de otimismo ou pessimismo.
Ainda assim, a seção 6 pende para risco, porque wildcards de alto impacto são mais fáceis de
imaginar no registro negativo; registro isso como assimetria não corrigida.
(d) **Viés de quem escreve.** Rodei esta skill sem interlocutor humano disponível para
arbitrar cortes no meio do caminho. Toda decisão de "isto é raiz / isto é estado atual" foi
minha, inclusive a rejeição da candidata "qualquer um captura com o celular", que um humano
poderia ter defendido.

**Efeitos descartados ou revisados neste passo** (detalhe no anexo): um descartado inteiro
("o modelador 3D deixa de existir como profissão até 2031"), dois reescritos (e2.2, e1.2.1) e
um rebaixado de confiança (e6.1).

## 8. O que a máquina errou

- **Classifiquei tecnologia madura como disrupção-raiz, na primeira passagem.** "Qualquer
  pessoa captura 3D com o celular" entrou na primeira lista de raízes, com justificativa
  factualmente correta (Scaniverse é grátis, roda em smartphone comum, é usado em massa). O
  erro não foi um fato falso — foi categorização. Só caiu ao responder por escrito a terceira
  pergunta do Passo 2: "o que ainda falta para se concretizar?" — resposta honesta: nada. É
  literalmente o mesmo erro que o autor da skill documentou no `DUVIDAS.md` com o CGM de
  glicose, o que sugere que esse não é um deslize ocasional, e sim o modo de falha
  característico deste método quando a tecnologia é recente o bastante para *soar* emergente.
- **Escrevi "204 mil empregos" e "30 bilhões de imagens posadas" antes de verificar.** Os dois
  números apareceram em resumos de busca, não em página que eu tenha aberto: o primeiro vem de
  uma manchete sobre um estudo sindical de animação, o segundo de um artigo de terceiros sobre
  a Niantic. Tentei abrir a reportagem do GeekWire (HTTP 403) e o artigo do The New Stack
  (retornou só formulário de newsletter). **Cortei os dois do documento.** Mantive apenas os
  números que li em página aberta: os percentuais do GDC 2026 e o 11,4 KB/quadro do 4D-MoDe.
- **Quase citei o PL 1.460/2026 como marco jurídico central.** Ele apareceu em resultado de
  busca com descrição plausível e detalhada (réplicas digitais, responsabilização de
  plataforma, inspiração na Lei 9.610/1998), mas **não abri a fonte**. Substituí pelo PL
  4025/23, cuja página da Câmara eu abri e verifiquei, e deixo o 1.460/2026 registrado apenas
  no anexo como pista não verificada. Registro a desconfiança: descrição rica vinda só de
  snippet é exatamente o formato em que um identificador errado passa despercebido.
- **Inflacionei a terceira ordem antes de revisar.** A primeira versão tinha efeitos de 3ª
  ordem com confiança "média" — não porque a evidência sustentasse, mas porque um mapa todo
  "baixa" parece fraco. Rebaixei todos para baixa, que é a resposta correta e a esperada pelo
  método.
- **Deixei um efeito não-específico passar.** "A indústria criativa se reorganiza" estava no
  lugar do atual e2.2.1. Não é efeito, é ausência de análise — foi reescrito para nomear o
  deslocamento concreto (de capacidade de produção para curadoria, direção e acesso a locações
  autorizadas).

## 9. Três cenários para 2031

### Provável — "a cópia é fácil, a licença é cara"

Em 2031, capturar um espaço em 3D é tão banal quanto gravar um vídeo, e nenhum projeto de
mídia interativa começa modelando ambiente do zero: começa escolhendo, entre capturas
existentes, qual serve. As ferramentas de produção tratam splat como tratam bitmap — todo
software importa, poucos editam bem. O trabalho de modelagem não desapareceu: encolheu para
personagem, mecanismo e tudo que precisa deformar, e cresceu numa função nova de reparo e
verificação de captura. O que ninguém previu direito é que a conversa difícil de um projeto
deixou de ser "conseguimos produzir isso?" e virou "podemos usar isso?": aparecem escritórios
especializados em autorização espacial, ativos circulam com procedência de consentimento
anexada, e projetos morrem por não conseguir limpar a origem de uma captura. Os índices 3D do
mundo existem, mas fragmentados e desiguais — excelentes em centros comerciais de países
ricos, vazios ou desatualizados no resto.

### Desejável — "procedência por padrão"

Mesmo ponto técnico, outra institucionalidade. Até 2031, formato de splat e de vídeo
volumétrico convergiram o bastante para que metadado de procedência viajasse junto com o ativo
— quem capturou, onde, quando, sob que autorização — e as ferramentas grandes passaram a
recusar, por padrão, ativo sem essa trilha. O Brasil aprovou norma que resolve o caso da
captura incidental de pessoas sem congelar a técnica, e a discussão sobre interiores foi
tratada como questão de consentimento do ocupante, não de propriedade. Para chegar aqui foram
necessárias três coisas, nenhuma automática: um padrão aberto adotado por concorrentes; uma
decisão judicial de referência que tenha protegido a pessoa sem criar um mercado de réplicas;
e ferramentas de captura que peçam autorização no momento certo, sem empurrar a
responsabilidade para um termo de uso que ninguém lê. O ganho não é só ético: com procedência
verificável, o acervo capturado vira mercado com preço, e quem captura passa a ser pago.

### Indesejável — "o mundo escaneado de quem não foi perguntado"

Em 2031, o índice 3D é real, útil e consolidado em poucas mãos, e o consentimento nunca foi
resolvido — apenas presumido. A captura incidental de pessoas em espaço público é tratada
como externalidade, e a réplica volumétrica de gente comum circula em produções sem que exista
caminho prático de contestação (o caminho legal existe e custa mais que o dano). Interiores
foram mapeados por apps de consumo com autorização obtida em termo de uso, e o índice é
condição de operação para robôs e agentes — o que significa que não usar a plataforma é não
operar. Estúdios encolheram a equipe de arte antes de a técnica justificar, movidos pela
percepção de substituição, e o repertório visual convergiu para o fotorrealismo do que foi
capturado, porque estilizar voltou a ser caro. **Sinal precoce deste cenário, visível bem
antes de 2031:** contratos de captura que substituem consentimento explícito por consentimento
presumido em termo de uso, combinados com ausência de qualquer inventário público do que já
foi escaneado. Se em 2028 não existir nenhum mecanismo para uma pessoa perguntar "em quais
capturas eu apareço?", este é o cenário em curso.

## 10. O experimento

**O que é.** *Três passagens pelo mesmo lugar.* Capturar um mesmo espaço movimentado do
campus — o hall de entrada, a lanchonete, um corredor em horário de aula — três vezes: em
horários diferentes do mesmo dia, com celular comum, usando um app de captura gratuito;
processar as três em splat; abri-las lado a lado no SuperSplat, no navegador. Em seguida,
duas medições simples:

1. **Diferença.** O que mudou entre as três cópias? Cadeira movida, cartaz novo, luz diferente,
   objeto que virou borrão. Anotar quanto do espaço é estável e quanto é ruído.
2. **Quem está lá.** Contar quantas pessoas reconhecíveis (silhueta, roupa, rosto) sobreviveram
   à reconstrução em cada passagem, e quantas delas poderiam saber que estavam sendo
   capturadas. Nenhuma dessas capturas deve ser publicada; o experimento termina com a
   contagem e com o apagamento dos arquivos.

**Que pergunta sobre o futuro ele ajuda a responder.** Duas, ambas centrais neste mapa: a de
e8.2 — *quanto tempo uma cópia do mundo continua verdadeira?* — e a de e4/e7.1 — *o
consentimento é praticável na captura de espaço, ou a captura de pessoas é inevitável e
incidental?* A primeira testa a hipótese de que o produto é a atualização, não a captura. A
segunda transforma uma discussão abstrata sobre privacidade em um número que cabe numa
página.

**Que tecnologia emergente ele usa, e por que a madura não serve.** Usa reconstrução neural
(splat) e edição de splat no navegador. Fotogrametria clássica não serviria: ela exige
captura disciplinada e descarta justamente o que interessa aqui — pessoas em movimento,
superfícies difíceis, passagem casual —, entregando um modelo limpo que esconde o fenômeno a
ser medido. É o ruído da captura neural que carrega a informação deste experimento.

**O que faria quem testar mudar de ideia sobre o mapa.** Dois resultados derrubariam partes
inteiras da roda. Se as três passagens forem praticamente idênticas e as pessoas
desaparecerem na reconstrução (viradas em borrão irreconhecível), então e8.2 perde força — a
cópia envelhece devagar — e o ramo de consentimento incidental (e4, e7.1) fica bem menos
urgente do que este documento supõe. Se, ao contrário, as três cópias divergirem muito e
rostos reconhecíveis sobreviverem, então o mapa está certo no eixo de procedência e provavelmente
**conservador** nos prazos de e4.2 e e7.1.

## 11. Fontes

Listadas apenas as páginas efetivamente abertas e lidas nesta rodada.

1. **3D Gaussian Splatting for Real-Time Radiance Field Rendering** (Kerbl, Kopanas,
   Leimkühler, Drettakis — SIGGRAPH 2023) — `https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/`
   Sustenta: a existência e o desempenho do 3DGS (≥100 fps a 1080p), base técnica da seção 3 e
   da justificativa "por que agora" de D1 e D3. Confiabilidade alta: página oficial dos
   autores, artigo publicado em venue de referência, código aberto.
2. **VGGT: Visual Geometry Grounded Transformer** — `https://arxiv.org/abs/2503.11651`
   Sustenta: reconstrução feed-forward em menos de um segundo, sem pose, de uma a centenas de
   vistas — o núcleo de D1. Confiabilidade alta: preprint com aceitação no CVPR 2025 e código
   público; leitura restrita ao abstract.
3. **4D-MoDe: Motion-Decoupled 4D Gaussian Compression** — `https://arxiv.org/html/2509.17506`
   Sustenta: 11,4 KB por quadro inter-frame, comparações com 4DGC/3DGStream/HiCoM, >140 fps —
   base de e6 e do sinal fraco sobre compressão na seção 6. Confiabilidade média-alta:
   preprint de setembro de 2025, sem revisão por pares confirmada; números são do próprio
   artigo.
4. **Move.ai — Tech** — `https://move.ai/tech`
   Sustenta: estado da captura markerless (volumes 4×4 m a 20×20 m, validação contra sistemas
   ópticos, "milhões de minutos de movimento"). Confiabilidade baixa-média: é material de
   fornecedor, portanto alegação comercial, não medição independente — foi usado como sinal de
   maturidade de mercado, nunca como prova de precisão.
5. **Mapping the World For Machines with Scaniverse — Niantic Spatial** —
   `https://www.nianticspatial.com/en/blog/scaniverse`
   Sustenta: o Large Geospatial Model como "base de dados viva do mundo que pessoas e máquinas
   podem consultar" e a escala declarada do acervo de splats — base de D3. Confiabilidade
   baixa-média: blog institucional; a página não informa números verificáveis nem política de
   consentimento, o que é, em si, um dado usado em e7.
6. **Gaussian Splatting in June 2026 — Radiance Fields (newsletter)** —
   `https://radiancefields.substack.com/p/gaussian-splatting-in-june-2026`
   Sustenta: adoção em Houdini 22, Arnold 7.5.2, TouchDesigner, SketchUp e Apple Maps
   (seção 3). Confiabilidade média: boletim especializado, bem informado, mas sem revisão; a
   página está parcialmente sob paywall e só li a parte aberta.
7. **GDC 2026 Report sobre IA generativa (GIANTY)** — `https://www.gianty.com/gdc-2026-report-about-generative-ai/`
   Sustenta: 36% usam IA generativa no trabalho; 52% consideram o impacto negativo (contra 30%
   e 18% nos anos anteriores); 64% entre artistas visuais e técnicos; 19% para geração de
   assets. Base da prosa da seção 5 e da revisão de e1.2.1. Confiabilidade média: é resumo de
   terceiro sobre o State of the Game Industry; não abri o relatório original, e a página não
   informa o n da amostra — os percentuais devem ser lidos com essa ressalva.
8. **Comissão aprova regras para uso de imagens e obras autorais por inteligência artificial —
   Portal da Câmara dos Deputados** —
   `https://www.camara.leg.br/noticias/1234723-comissao-aprova-regras-para-uso-de-imagens-e-obras-autorais-por-inteligencia-artificial/`
   Sustenta: PL 4025/23, aprovado na Comissão de Cultura em 19/12/2025, exigindo autorização
   prévia para uso de imagem de pessoas em IA generativa; em tramitação conclusiva na CCJ.
   Base da nota sobre o Brasil e de e4.2. Confiabilidade alta: fonte oficial do Legislativo.
9. **Direito à imagem e gravação invisível: consentimento na era dos smart glasses — ConJur,
   03/03/2026** —
   `https://www.conjur.com.br/2026-mar-03/direito-a-imagem-e-gravacao-invisivel-consentimento-na-era-dos-smart-glasses/`
   Sustenta: o argumento de que captura ambiental invisível corrói o consentimento informado,
   com apoio no art. 5º, X da CF, art. 20 do Código Civil e LGPD — base de e4.1 e e7.1.
   Confiabilidade média-alta para doutrina: é artigo de opinião jurídica em veículo
   especializado, não decisão judicial.

**Afirmações sem fonte, marcadas como especulação da própria skill:** todos os efeitos de 2ª e
3ª ordem da seção 5; os dois wildcards da seção 6; os três cenários da seção 9; e a leitura da
seção 5 sobre a tensão entre e2 e e7.1. Nenhum deles é atribuído a fonte alguma.

**Tentativas de leitura que falharam** (e por isso nada delas foi citado): reportagem do
GeekWire sobre a Niantic Spatial (HTTP 403) e artigo do The New Stack sobre o mesmo tema
(retornou apenas formulário de assinatura).

## 12. Anexo — o levantamento bruto

### Buscas realizadas

1. `Gaussian splatting 2026 state of the art real-time neural rendering` — deu o artigo
   original do INRIA, o registro de desempenho (≥100 fps, 1080p), a comparação NeRF×3DGS
   (NeRF 1–10 fps, treino de horas a dias, modelo de 10–50 MB; 3DGS treino de 7–45 min, cena
   de 500 MB–1,5 GB) e a limitação reconhecida em objetos reflexivos. Os números comparativos
   vieram de um guia em Medium que **não abri**; usei-os apenas como orientação qualitativa na
   seção 3 ("a troca comprou velocidade e pagou em armazenamento"), sem citar cifras como
   verificadas.
2. `markerless motion capture from video 2026 Move.ai monocular` — levou a move.ai/tech
   (aberto), a um texto da Move 4D sobre "2026 trends" e a páginas de review. Só usei o site
   do fornecedor, e marcado como alegação comercial.
3. `Niantic large geospatial model Scaniverse scans privacy 2026` — melhor resultado
   (GeekWire) deu 403; The New Stack não entregou corpo; o blog institucional foi o que
   restou.
4. `single image to 3D model 2026 TripoSR Hunyuan3D generative 3D asset` — sustentou a
   afirmação de que malha de IA ainda não tem topologia limpa. Nenhuma das páginas foi aberta;
   por isso a afirmação aparece na seção 3 sem número e é reforçada, na seção 5, pelo dado do
   GDC, esse sim de página aberta.
5. `Gaussian splatting Unreal Engine Unity plugin production adoption 2026 SuperSplat
   PlayCanvas` — deu a newsletter Radiance Fields (aberta) e vários blogs de estúdio
   (UnityGaussianSplatting de Aras Pranckevičius; ausência de módulo first-party na UE 5.7;
   plugins da Luma AI e Polycam; "momento JPEG da computação espacial"). **Nenhum desses blogs
   foi aberto** — a frase "momento JPEG" e os detalhes de plugin ficaram de fora do corpo do
   documento por isso.
6. `arxiv 2026 feed-forward 3D reconstruction VGGT pointmap transformer scene from few images`
   — confirmou a linhagem DUSt3R → VGGT → VGGT-SLAM 2.0 / PanoVGGT / VGG-T3. Abri só o
   abstract do VGGT; os descendentes entram no texto como nomes de linhagem, sem alegação
   sobre desempenho.
7. `volumetric video 4D Gaussian avatar telepresence 2026 Apple Vision Pro Meta Codec Avatars`
   — a busca **não** confirmou nada sobre Apple Vision Pro nem Codec Avatars em 2026, e por
   isso as duas entidades foram removidas do documento, apesar de constarem do briefing do
   tema. Sobraram os artigos: 4D-MoDe (aberto), Temporal Gaussian Hierarchy (17,2 GB de VRAM e
   2,2 GB para 18.000 quadros — **não aberto, não citado no corpo**), Mon3tr, SqueezeMe,
   HumanDreamer-X, RePerformer (citados apenas como nomes de linha de pesquisa).
8. `3D artists jobs AI generated assets game industry 2026 modelers impact survey` — origem
   dos percentuais do GDC 2026 (página do GIANTY aberta) e da manchete sobre estudo sindical
   de animação, **descartada** por não ter sido aberta.
9. `lei réplica digital direito de imagem 3D scan pessoa sem consentimento 2026 digital
   replica law` — origem do PL 4025/23 (aberto) e do PL 1.460/2026 (não aberto, não usado).

### Pistas não verificadas (não usar sem abrir a fonte)

- **PL 1.460/2026**, atribuído à dep. Tabata Amaral e mais cinco parlamentares, criando marco
  para réplicas digitais com direito exclusivo do titular, responsabilização de plataforma,
  rotulagem e remoção, inspirado na Lei 9.610/1998. Descrição vinda só de snippet.
- **Decreto 12.976/2026**, citado em snippet como proibindo criação e compartilhamento de
  imagens íntimas geradas por IA sem consentimento. Não verificado.
- **"30 bilhões de imagens posadas"** como base do LGM da Niantic. Veio de artigo de
  terceiros; a página oficial que abri não confirma número algum.
- **"204 mil empregos de animação afetados em três anos"**, de estudo sindical. Manchete não
  aberta.
- **Temporal Gaussian Hierarchy:** 17,2 GB de VRAM e 2,2 GB de armazenamento para 18.000
  quadros, redução de 30× e 26× sobre 4K4D. Plausível e citável, mas o artigo não foi aberto.

### Efeitos cortados no Passo 6

- **DESCARTADO — "O modelador 3D deixa de existir como profissão até 2031."** Motivo: não
  sobrevive ao dado. 19% de uso para geração de assets no GDC 2026 e a limitação persistente
  de topologia contradizem a substituição; o que a evidência sustenta é deslocamento de tarefa
  (e1.2, e1.2.1) e deterioração de percepção (64% de artistas visuais vendo impacto negativo),
  que são coisas diferentes. Este era o efeito mais vistoso do mapa e foi o primeiro a cair.
- **DESCARTADO — "A indústria criativa se reorganiza."** Não é efeito, é ausência de análise.
  Reescrito como e2.2.1, com o deslocamento nomeado.
- **REVISADO — e2.2.** Antes: "equipes pequenas alcançam paridade visual com grandes
  estúdios". Depois: paridade **em ambientação**, não em sistemas e direção. O corte anterior
  ignorava que cenário nunca foi o gargalo de um estúdio grande.
- **REVISADO — e1.2.1.** Antes: "a formação em 3D deixa de ensinar modelagem". Depois:
  modelagem do zero vira especialidade de nicho. O absoluto não se sustenta enquanto rigging e
  deformação exigirem malha limpa.
- **REBAIXADO — e6.1.** De sinal médio/confiança média para sinal fraco/confiança baixa, pelo
  precedente de telepresença imersiva: duas décadas de demonstrações excelentes e adoção
  marginal.
- **REBAIXADOS — todos os efeitos de 3ª ordem**, de confiança média para baixa. Motivo na
  seção 8.

### Rodada descartada inteira

Uma primeira montagem organizava a roda por **setor** (cinema, jogos, arquitetura, patrimônio,
robótica) em vez de por disrupção. Foi descartada: produzia listas paralelas de aplicação, não
cadeias causais, e violava o modo pedido (partir da inovação, não do setor). Sobrou dela uma
observação aproveitada na seção 7: os setores que não aparecem no mapa — perícia, defesa
civil, agricultura, patrimônio — são provavelmente onde a técnica terá seus usos mais
duradouros, e a ausência deles aqui é viés de fonte, não juízo de relevância.

### Checklist final (Passo 10)

- [x] Entrevista registrada na seção 2, com as suposições declaradas na seção 7, item 4d.
- [x] Nenhuma disrupção-raiz é tecnologia madura — uma candidata foi rejeitada e movida para a
      seção 3 com a justificativa dos três testes.
- [x] Todo efeito tem `id`, `ordem`, `sinal`, `prazo` e `confianca`, e é frase afirmativa.
- [x] Efeitos descartados e revisados no Passo 6: dois descartados, dois reescritos, um
      rebaixado, mais o rebaixamento geral da 3ª ordem.
- [x] As 12 seções estão presentes, com títulos literais.
- [x] Nenhuma fonte inventada; o que não tem fonte real está marcado como especulação na
      seção 11, e as pistas não verificadas estão isoladas neste anexo.
