---
tema: Captura de realidade e renderização neural
slug: captura-de-realidade-e-renderizacao-neural
autor_login: hfm
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 13
efeitos_ordem_3: 14
tecnologias_citadas: [NeRF, 3D Gaussian Splatting, 4D Gaussian Splatting, SuperSplat, TripoSR, Depth Anything V2, SPZ, KHR_gaussian_splatting, KHR_gaussian_splatting_compression_spz, glTF, OGC 3D Tiles, Photorealistic 3D Tiles, Scaniverse, VPS 2.0, Move AI, EasyMocap, instant-ngp, model-viewer, Draco, fotogrametria]
fontes: 16
confianca: media
experimento: Cabine de captura no corredor — um celular, um splat editado no navegador e um mural de consentimento
skill_usada: futurizacao-hfm
publico_ok: false
---

## 1. Resumo

Capturar um lugar em três dimensões deixou de ser um projeto de produção e virou uma tarefa de
minutos com um celular comum. O caminho técnico que levou até aqui é curto e documentado: o NeRF
(2020) provou que uma cena podia ser representada como campo de radiância aprendido; o 3D Gaussian
Splatting (2023) trocou a rede implícita por milhões de elipsoides explícitos e trouxe a
renderização para tempo real em hardware de consumo; modelos de profundidade e de reconstrução a
partir de uma única imagem fecharam o ciclo, permitindo produzir um objeto 3D onde não houve
varredura nenhuma. Em 2026 o movimento decisivo não é mais de pesquisa e sim de infraestrutura: o
Khronos e o OGC colocaram os splats dentro do glTF, com compressão SPZ, e a ratificação estava
prevista para o segundo trimestre de 2026 — o que transforma a cena capturada num arquivo que
circula entre navegador, engine e headset como circula um JPEG. Este mapa identifica três
disrupções-raiz — a captura neural a partir de sensor comum, a reconstrução a partir de uma única
imagem e a padronização do splat como formato de troca — e deriva delas 6 efeitos de primeira
ordem, 13 de segunda e 14 de terceira, até 2031 e um pouco além. O que está em disputa não é a
qualidade da imagem: é quem pode capturar o quê, o que distingue reconstruir de inventar, e o que
sobra da profissão de fazer 3D quando o 3D passa a ser colhido.

## 2. O tema

Captura de realidade e renderização neural é o conjunto de técnicas que transforma registro de
sensor comum — fotos, vídeo de celular, câmera 360, imagem de drone — em cena tridimensional
navegável e fotorrealista, sem passar pelo pipeline clássico de modelar, texturizar e animar.
Duas famílias sustentam o campo hoje. A primeira é a dos campos de radiância: o NeRF representa a
cena como uma função contínua que, dada uma posição e uma direção de visada, devolve densidade e
cor, treinada a partir de imagens com pose conhecida [2]. A segunda é o splatting gaussiano, que
abandona a rede implícita e representa a cena como uma nuvem de gaussianas anisotrópicas
rasterizadas diretamente, alcançando, segundo os autores originais, qualidade de estado da arte
com exibição em tempo real a 1080p [1].

O tema encosta em mídia e interação em pelo menos quatro pontos. Encosta na **produção**, porque
substitui a etapa mais cara e mais especializada da criação 3D por uma etapa de coleta. Encosta na
**distribuição**, porque a padronização do formato coloca a cena no mesmo lugar que a imagem e o
vídeo ocupam na web. Encosta na **interação**, porque uma cena não tem quadro: não existe o
enquadramento único que organiza a leitura de uma foto, e as convenções de navegar, citar,
recortar e comentar um espaço ainda não foram inventadas. E encosta na **norma**, porque a
facilidade de capturar desloca a pergunta do que se pode fotografar para o que se pode
*reconstruir* — de um prédio, de uma loja, de um corpo.

Merece um mapa de futuro, e não um levantamento de estado da arte, por uma razão simples: o estado
da arte aqui muda de trimestre em trimestre e envelhece antes de ser lido, enquanto as perguntas
que a tecnologia abre — sobre propriedade da cópia do mundo, sobre o que resta da modelagem como
ofício, sobre prova e proveniência — são estáveis e ainda não têm resposta. A régua da disciplina
também ajuda a delimitar: fotogrametria clássica, varredura a laser e mocap com marcadores são
maduras, caras e já têm efeitos estabilizados; não entram como raiz. O que este documento trata é
a captura neural a partir de sensor comum, e a reconstrução a partir de uma imagem só.

## 3. Onde isso está hoje

**A técnica funciona e roda em hardware de consumo.** O trabalho original de Gaussian Splatting
reivindica renderização em tempo real a 1080p para cenas completas e não limitadas, com tempos de
treino competitivos, explicitamente contra a limitação anterior de que "nenhum método atual
alcança taxas de exibição em tempo real" nessas condições [1]. O survey publicado na ACM Computing
Surveys descreve a transição de modelos neurais implícitos para a representação explícita por
milhões de gaussianas aprendíveis, e credita à técnica "renderização em tempo real e editabilidade
sem precedentes", com aplicações de realidade virtual a mídia interativa [5]. Ou seja: a
viabilidade não é promessa de vendor, é literatura revisada.

**A edição já mora no navegador.** O SuperSplat, da PlayCanvas, é um editor de splats gaussianos
construído em tecnologias web e executado no navegador, licença MIT, com cerca de 10,2 mil
estrelas e 1,2 mil forks no GitHub [6]. Isso importa para o tema porque elimina a etapa de
instalação — a barreira de entrada do 3D deixa de ser um software de dezenas de gigabytes.

**A reconstrução a partir de uma imagem única deixou de ser demonstração.** O TripoSR reconstrói
objetos 3D a partir de uma única imagem em menos de meio segundo, sob licença MIT [3]. O Depth
Anything V2 estima profundidade monocular com modelos de 25 milhões a 1,3 bilhão de parâmetros,
treinados majoritariamente com imagens sintéticas rotuladas e pseudo-rótulos em larga escala, e
reivindica ser mais de dez vezes mais rápido que abordagens baseadas em difusão [4]. As duas peças
juntas fecham o ciclo: dá para produzir geometria plausível onde não houve varredura.

**A captura de movimento sem marcador está em produção comercial.** A Move AI descreve captura
markerless usando múltiplas câmeras e visão computacional, sem marcadores nem trajes, em volumes
de 4×4 m a 20×20 m, em estúdio ou em ambiente externo [10]. É prudente registrar que a página é
material de vendor e não declara limitações — a evidência sustenta que o produto existe e o que
ele promete, não que a qualidade equivalha à de sistemas ópticos com marcador.

**A captura geoespacial virou plataforma.** A Niantic Spatial descreve o Scaniverse como
plataforma integrada web e móvel que captura espaços físicos e gera mapas de posicionamento
visual, malhas e splats gaussianos, funcionando com celulares comuns e câmeras 360 comerciais, sem
equipamento proprietário caro; exporta malha em FBX e splats em PLY e SPZ, com limite de cerca de
500 m² por captura no aplicativo móvel e localização 6DoF com precisão centimétrica nas áreas
mapeadas, contra 3 a 5 metros do GPS [9]. Também aqui a fonte é institucional do próprio
fornecedor: sustenta o desenho do produto e os números declarados, não uma medição independente.

**O formato está sendo padronizado — e este é o fato mais importante de 2026.** O Khronos Group,
o Open Geospatial Consortium, a Niantic Spatial, a Cesium (Bentley) e a Esri anunciaram a
integração de splats gaussianos ao padrão glTF, por meio de duas extensões:
`KHR_gaussian_splatting`, que armazena os splats como primitivas de ponto com posição, rotação,
escala e harmônicos esféricos, e `KHR_gaussian_splatting_compression_spz`, que usa o formato SPZ —
descrito como capaz de comprimir splats em até 90% em relação a PLY mantendo qualidade visual [7].
A cobertura especializada acrescenta que a extensão estava em fase de release candidate, com
ratificação-alvo no segundo trimestre de 2026, contribuições de Autodesk, Bentley, Huawei, Niantic
Spatial e Nvidia, e — na formulação do presidente do Khronos, Neil Trevett — o objetivo de que "um
splat armazenado num arquivo glTF possa ser compartilhado em rede social e exibido com total
interatividade em qualquer dispositivo cliente" [8]. Registre-se a discrepância: o blog do Khronos
não dá data de ratificação, e a data do segundo trimestre de 2026 vem da cobertura [8]; até o
fechamento deste documento não confirmei a ratificação efetiva.

**O quarto eixo — tempo — está começando.** Em vídeo volumétrico com 4D Gaussian Splatting, a
reportagem especializada descreve produtos comerciais em 2026 (Gracia, 4DV.ai, Volinga, Arcturus,
Evercoast), streaming em torno de 80 Mbps em qualidade plena e 17 Mbps em modo econômico, e
registra duas limitações que o entusiasmo costuma esconder: não existe ainda formato padrão para
splat 4D, e a captura com câmera única é impraticável — o mínimo prático é uma pequena plataforma
sincronizada com dez ou mais dispositivos [14]. A mesma fonte cita uma plataforma de 70 câmeras
PTZ 4K em torno de 80 mil dólares. Isto é jornalismo especializado, não medição: confiabilidade
média, e os números devem ser tratados como ordem de grandeza.

**O que já é maduro, e por isso não entra na raiz.** Os Photorealistic 3D Tiles do Google entregam
malha fotogramétrica no formato OGC 3D Tiles, renderizável em visualizadores próprios ou abertos
[13]; a cobertura é ampla mas concentrada em grandes cidades, justamente porque a fotogrametria
aérea é cara. Este é o contraponto necessário: a cópia navegável do mundo já existe há anos, é
produto consolidado, e o que muda com a captura neural não é a existência dela — é quem consegue
produzi-la.

**O contexto de trabalho.** A pesquisa State of the Game Industry da GDC 2026, com mais de 2.300
profissionais, registra que 28% sofreram demissões nos últimos dois anos (33% nos EUA), 50%
relatam demissões no empregador nos últimos doze meses, 36% usam ferramentas de IA generativa, 52%
acham que a IA tem impacto negativo no setor — ante 30% no ano anterior — e que artistas visuais e
técnicos são os mais críticos, com 64% de visão desfavorável [16]. É evidência de percepção e de
mercado, não de causalidade: a pesquisa não atribui as demissões à IA.

**No Brasil.** A digitalização de acervo não começou agora e não começou pela renderização neural:
um estudo na revista *Interações* testou digitalização 3D faça-você-mesmo em peças do Museu Júlio
de Castilhos, em Porto Alegre, concluindo que a fotogrametria era a melhor alternativa por exigir
menos perícia e aproveitar competência fotográfica já existente nas instituições [15]. O ponto de
interesse para 2031 é que a captura neural herda exatamente essa vantagem — menor curva de
aprendizado, equipamento já disponível — e a radicaliza. Do lado normativo, o PL 2338/2023, que
dispõe sobre o uso da inteligência artificial, foi aprovado no Senado e remetido à Câmara dos
Deputados, com última movimentação registrada em 17 de março de 2025 [12]; buscas secundárias
mencionaram previsão de votação em plenário na Câmara em maio de 2026, o que **não** consegui
confirmar na fonte oficial e portanto não trato como fato.

**Na fronteira normativa internacional**, o caso mais conceitualmente ousado é a proposta
dinamarquesa de estender proteção de tipo autoral às características físicas pessoais: uma seção
protegendo artistas contra imitações digitais realistas de suas performances e outra alcançando
todos os cidadãos contra imitações digitais realistas de suas características físicas pessoais,
com proteção por 50 anos após a morte; projeto divulgado em 7 de julho de 2025, notificado à
Comissão Europeia em 31 de outubro de 2025, votação esperada para o primeiro ou segundo trimestre
de 2026 e vigência prevista para 1º de julho de 2026 [11]. A mesma análise registra as críticas:
usar direito autoral para restringir disseminação inverte o propósito tradicional do instituto, e
há dúvida de compatibilidade com o direito da UE.

## 4. As disrupções-raiz

### D1 — Captura neural a partir de sensor comum substitui o pipeline de criação 3D

**O que rompe.** Rompe a relação entre custo, perícia e existência de um ativo 3D. No pipeline
clássico, ter um modelo de um lugar exigia um especialista, semanas e software caro; ter um
movimento humano exigia estúdio, traje e marcadores. A captura neural desloca o gargalo da
*produção* para a *coleta*: o ativo passa a ser consequência de alguém ter estado lá com um
celular. Isso rompe três coisas ao mesmo tempo — a economia do asset 3D, o perfil profissional de
quem o produz, e a premissa implícita de que capturar um espaço em três dimensões é um ato
deliberado e caro, e portanto raro e negociável.

**Por que agora e não há cinco anos.** Há cinco anos, o NeRF acabava de mostrar que a
representação neural de cena era possível, mas com tempos de treino e de renderização
incompatíveis com uso interativo [2]. O que mudou foi a representação explícita: o splatting
gaussiano trocou a consulta de rede por rasterização, e com isso obteve exibição em tempo real a
1080p em cena completa [1], hoje descrita em survey como característica estabelecida da técnica
[5]. Do lado do corpo, a captura sem marcador saiu de pesquisa para produto comercial com câmeras
comuns e volumes de até 20×20 m [10]. Do lado do acesso, o editor deixou de exigir instalação [6].

**O que ainda falta acontecer.** Falta qualidade previsível fora de condições controladas —
superfície especular, transparência, iluminação variável e cena dinâmica continuam difíceis, e o
survey aponta desafios em aberto sem os enumerar no resumo [5]. Falta custo de armazenamento e
banda resolvido para escala populacional. E falta — este é o ponto que decide se a disrupção vira
efeito social ou fica em nicho — que a captura seja um gesto tão banal quanto a foto. Hoje ainda é
um gesto que exige intenção: caminhar em torno do objeto, cobrir os ângulos, esperar o
processamento.

### D2 — Reconstrução a partir de uma única imagem dissolve a fronteira entre registrar e inventar

**O que rompe.** Rompe o vínculo entre a cena reconstruída e a observação. Quando o 3D vem de
dezenas de fotos, cada superfície do resultado corresponde a algo que a câmera viu. Quando vem de
uma imagem só — TripoSR produzindo malha em menos de meio segundo [3], Depth Anything V2 estimando
profundidade monocular [4] —, tudo o que está fora do campo de visão é *inferido a partir de um
prior aprendido*. O verso do objeto não foi observado: foi previsto. O resultado é visualmente
indistinguível de uma reconstrução por observação, e essa indistinguibilidade é a ruptura. Ela
atinge prova, documentação, patrimônio e jornalismo — todos os usos em que a cena vale por
corresponder ao que havia ali.

**Por que agora e não há cinco anos.** Porque o prior ficou bom. O Depth Anything V2 foi treinado
predominantemente com imagens sintéticas rotuladas mais pseudo-rótulos em larga escala, o que
resolveu o problema crônico de escassez de profundidade real anotada, e roda mais de dez vezes
mais rápido que abordagens de difusão [4]. O TripoSR trouxe a reconstrução de objeto para escala
de meio segundo e a publicou sob MIT [3]. Nenhuma dessas duas condições — prior de qualidade e
custo de inferência desprezível — existia em 2021.

**O que ainda falta acontecer.** Falta um sinal de proveniência que sobreviva ao arquivo. Nada nos
formatos em discussão hoje obriga a distinguir uma gaussiana ajustada por observação de uma
geometria alucinada por modelo; a extensão glTF descreve atributos geométricos e de aparência, não
epistemologia [7]. Enquanto isso não existir, a distinção depende de quem publicou dizer a
verdade. Falta também jurisprudência: não encontrei caso julgado sobre valor probatório de cena
reconstruída neuralmente, e registro isso como lacuna, não como ausência de risco.

### D3 — O splat vira formato de troca padronizado e a cena entra na web como tipo de mídia

**O que rompe.** Rompe o isolamento de plataforma. Até agora, cada captura vivia no aplicativo que
a produziu, ou num visualizador específico. A entrada dos splats no glTF, com compressão SPZ,
junto de OGC, Niantic Spatial, Cesium e Esri [7], e com contribuições de Autodesk, Bentley,
Huawei, Nvidia [8], muda o estatuto do objeto: a cena capturada passa a ser um arquivo que
qualquer cliente compatível abre. É a mesma passagem que o JPEG fez pela imagem e o MP3 pelo
áudio, e ela costuma produzir mais consequência social que qualquer ganho de qualidade — porque
transforma um resultado técnico em prática cotidiana.

**Por que agora e não há cinco anos.** Porque só agora há algo estável para padronizar. O
splatting gaussiano é uma representação explícita, com atributos enumeráveis — posição, rotação,
escala, opacidade, harmônicos esféricos [7] — ao contrário dos pesos de uma rede implícita, que
não são interoperáveis em nenhum sentido útil. Além disso, a compressão chegou junto: o SPZ é
descrito como comprimindo em até 90% em relação a PLY com qualidade preservada [7], o que torna
transporte pela web viável. E há demanda geoespacial concreta puxando: o Scaniverse já exporta SPZ
[9], e o ecossistema de tiles 3D já existe como mercado [13].

**O que ainda falta acontecer.** Falta a ratificação se confirmar — em setembro de 2026 a meta
divulgada era o segundo trimestre [8] e não confirmei o desfecho. Falta compressão definida para
mobile, explicitamente deixada em aberto na especificação [8]. Falta o equivalente para cena
dinâmica: no 4D não há padrão de arquivo [14]. E falta a camada que ninguém está padronizando —
como se navega, cita, recorta e comenta uma cena. O formato resolve transporte; não resolve
gramática.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Captura neural a partir de sensor comum substitui o pipeline de criação 3D
    efeitos:
      - id: e1
        ordem: 1
        efeito: Capturar um espaço em 3D vira tarefa de minutos com celular, não projeto de produção
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Estúdios trocam bibliotecas de assets comprados por acervos próprios capturados
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O valor econômico migra do modelo 3D para o direito de capturar o lugar
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Arquitetura, varejo e seguros incorporam captura 3D ao fluxo de trabalho diário
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Vistoria e documentação passam a admitir cena navegável como registro corrente
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: Espaços privados e semipúblicos passam a ser capturados sem contrato nem aviso
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: Emerge um regime de consentimento para espaço, análogo ao de imagem pessoal
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Captura de movimento humano deixa de exigir traje, marcador e estúdio dedicado
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Animação de personagem passa a ter atuação real como insumo barato e abundante
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A formação em animação se reorganiza em torno de direção de atuação, não de execução quadro a quadro
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O movimento de uma pessoa vira dado capturável em espaço público sem que ela perceba
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Proteções de imagem pessoal se estendem da aparência para o modo de se mover
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: Reconstrução a partir de uma única imagem dissolve a fronteira entre registrar e inventar
    efeitos:
      - id: e3
        ordem: 1
        efeito: Uma única imagem basta para produzir um objeto 3D utilizável em segundos
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A diferença entre superfície observada e superfície inferida deixa de ser visível no resultado
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Cena 3D perde valor documental quando não carrega proveniência verificável
                sinal: medio
                prazo: 2032
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Catálogos de produto e acervos fotográficos viram fonte de 3D sem autorização de quem fotografou
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: O direito sobre a fotografia passa a disputar a forma tridimensional derivada dela
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: O ofício de modelador perde a parte de execução e retém a de correção, direção e integração
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Postos juniores de modelagem escasseiam antes dos postos sêniores
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A escada de entrada da carreira 3D se rompe e a reposição de profissionais sêniores fica comprometida
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: O portfólio deixa de provar habilidade porque o artefato não distingue capturado de construído
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: A avaliação de competência em mídia migra do artefato final para o processo documentado
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: O splat vira formato de troca padronizado e a cena entra na web como tipo de mídia
    efeitos:
      - id: e5
        ordem: 1
        efeito: Splat capturado circula como arquivo comum entre navegador, engine e headset
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A web ganha um tipo de mídia novo, a cena, ao lado de imagem, áudio e vídeo
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Convenções de navegar, enquadrar, citar e recortar precisam ser inventadas para um objeto sem quadro
                sinal: medio
                prazo: 2032
                confianca: baixa
              - id: e5.1.2
                ordem: 3
                efeito: Acessibilidade passa a exigir descrever espaço percorrível, e não apenas imagem parada
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Plataformas passam a hospedar e moderar espaço, não apenas imagem e vídeo
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Moderação de conteúdo enfrenta um objeto que não tem recorte único nem ponto de vista canônico
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Acervos geoespaciais deixam de depender de fotogrametria aérea cara e passam a aceitar captura distribuída
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A cópia navegável do mundo deixa de ser ativo de poucas empresas e vira acervo distribuído e desigual
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Territórios sem captura própria consomem a representação tridimensional de si mesmos produzida por terceiros
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Instituições de patrimônio no Brasil conseguem digitalizar acervo ao custo de um celular
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Preservação digital vira problema de curadoria e manutenção continuada, não de aquisição de equipamento
                sinal: fraco
                prazo: 2034
                confianca: baixa
```

**O que o bloco não diz.** Três observações que a estrutura em árvore esconde.

A primeira é que **as três raízes não são independentes**. D3 é, em boa medida, o multiplicador de
D1 e D2: sem formato comum, a captura fácil produz ilhas; com formato comum, produz um acervo. Se
eu tivesse que apostar em uma única alavanca até 2031, apostaria na padronização, não na
qualidade da reconstrução. A árvore força cada efeito a pendurar-se numa raiz só, e isso subestima
e5 e e6, que na prática recebem empuxo das três.

A segunda é que **duas cadeias convergem para o mesmo lugar por caminhos diferentes**: e1.3.1
(consentimento para espaço) e e2.2.1 (proteção do movimento) são, no fundo, a mesma pergunta —
onde termina o que se pode capturar de alguém sem perguntar. A proposta dinamarquesa [11] é o
sinal mais próximo disso hoje, e ela trata de aparência, não de espaço nem de movimento. Registrei
as duas separadamente porque as cadeias causais são distintas, mas quem for usar este mapa deve
lê-las juntas.

A terceira é uma **cadeia que interrompi por falta de evidência**. Comecei a derivar, de e3.1, um
efeito de terceira ordem sobre jornalismo e prova judicial — cena reconstruída sendo aceita ou
recusada como elemento de prova. Não encontrei nenhum caso, norma ou diretriz processual que
sustentasse o passo, em nenhuma jurisdição, e a cadeia parou em e3.1.1, formulada em termos de
valor documental e não de valor probatório. O caminho está registrado no anexo.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — reconstrução como programa, não como dado.** A ferramenta `img2threejs`,
levantada pela turma, reconstrói o objeto de uma imagem de referência como modelo Three.js
procedural — código, não malha. Não consegui abrir fonte primária sobre ela e por isso ela não
entra na lista de fontes; registro como sinal porque a ideia é estruturalmente diferente de tudo o
que este mapa descreve. Se a reconstrução sair como *programa*, ela fica editável por parâmetro,
diferenciável em versão, legível por outra IA e infinitamente mais leve que um splat. Isso
enfraqueceria D3 inteira: o formato de troca deixaria de ser o gargalo interessante. É o único
sinal aqui capaz de invalidar uma raiz.

**Sinal fraco 2 — a cena como unidade de captura de um sistema, não de uma pessoa.** O Scaniverse
descreve saída para localização visual e, desde meados de 2026, exportação pensada para treino de
robótica [9]. A captura deixa de ser feita *para* alguém ver e passa a ser feita para uma máquina
navegar. Se a maior parte das capturas do mundo em 2031 for consumida por sistemas autônomos e não
por humanos, a estética deixa de ser critério e a métrica vira precisão métrica. Mídia e interação
perdem o assento à mesa onde o formato é decidido.

**Sinal fraco 3 — o vazio do 4D.** Não existe formato padrão para splat dinâmico, e a captura de
cena em movimento continua exigindo uma plataforma sincronizada de dez ou mais câmeras [14]. É um
sinal fraco por ausência: enquanto ele persistir, tudo o que este mapa diz vale para o mundo
parado. Vídeo volumétrico de sensor comum, se chegar, é uma quarta raiz que este documento não
tem.

**Sinal fraco 4 — proveniência como atributo de formato.** A extensão glTF é explicitamente
extensível por campos adicionais [7,8]. Ninguém está propondo hoje um campo de proveniência, mas a
porta está aberta, e o custo de propor é baixo. Se algum consórcio o fizer antes de 2029, e3.1.1
muda de sinal.

**Wildcard — um splat de uma pessoa, capturado sem consentimento, usado em obra comercial, e a
decisão que vier disso.** Baixa probabilidade de um caso *específico* ser decisivo; alto impacto se
for. O cenário: alguém é capturado em espaço público — corpo, rosto, jeito de andar — por captura
neural de terceiros, e a reconstrução aparece como figurante em produto comercial. A defesa alega
que não houve uso de imagem, e sim de geometria derivada; a acusação alega o contrário. Uma
decisão que estabeleça que a *reconstrução tridimensional* de uma pessoa é imagem dela, para todos
os efeitos, reescreve e2.2.1, e1.3.1 e e3.2.1 de uma vez, e provavelmente antecipa todos os três.
Uma decisão no sentido contrário destrava um mercado inteiro. A proposta dinamarquesa [11] é a
peça normativa mais próxima do problema, mas ela nasce mirando deepfake e não captura, e a própria
análise jurídica registra dúvida de compatibilidade com o direito europeu. **Isto não é previsão.**
É um evento cuja probabilidade eu não sei estimar e cuja ocorrência reorganizaria o mapa.

## 7. Contra o próprio mapa

**Qual efeito é só extrapolação linear do presente.** `e1.1` — estúdios trocando bibliotecas
compradas por acervo capturado — é a extrapolação mais confortável do documento. Ele assume que
barateamento de produção leva a internalização, e o histórico da indústria criativa aponta o
contrário com igual frequência: barateamento costuma levar a *mais* terceirização, porque o custo
que importa não é o de produzir o asset e sim o de gerenciar quem o produz. Não tenho fonte
medindo composição de acervo em estúdio. Rebaixei a confiança de alta para média por isso.

**Qual efeito assume velocidade de adoção sem caso comparável.** `e5.1` — a cena virando tipo de
mídia da web até 2030. A analogia implícita é JPEG e MP3, e ela é generosa: aqueles formatos
resolviam distribuir algo que as pessoas já produziam em massa. Aqui, a padronização vem *antes* da
prática. WebGL foi ratificado em 2011 e o 3D na web permaneceu nicho por mais de uma década; o
glTF existe desde 2015 e não tornou o 3D um tipo de mídia cotidiano. Mantive e5.1 com sinal médio e
confiança média, mas quem ler este mapa deve saber que ele é o efeito mais frágil da terceira
raiz. Um comparável honesto sugeriria 2035, não 2030.

**Qual disrupção pode simplesmente não se concretizar.** D3. A ratificação da extensão era meta
para o segundo trimestre de 2026 segundo cobertura especializada [8] e eu não confirmei que
aconteceu; o blog institucional não dá data [7]. Extensões do Khronos já ficaram em release
candidate por anos, e a compressão para mobile — justamente a que decide se isso roda em celular —
está explicitamente em aberto [8]. Se D3 não se concretizar, e5, e5.1, e5.1.1, e5.1.2, e5.2,
e5.2.1 e boa parte de e6 caem junto, e o mapa encolhe para uma história de produção: captura
barata dentro de pipelines fechados, sem entrar na web como mídia. Restariam D1 e D2, que são
sólidas, mas o alcance social do mapa seria bem menor.

**Onde a evidência é de vendor e eu tratei como se fosse mais.** Três das fontes que sustentam a
seção 3 são material dos próprios fornecedores: Move AI [10], Niantic Spatial [9] e, em parte, a
página do Khronos [7]. Elas provam que os produtos existem e o que prometem. Não provam qualidade,
adoção nem paridade com alternativas maduras. O caso mais gritante é a Move AI, cuja página não
declara nenhuma limitação e afirma "escala ilimitada" — linguagem que deveria baixar, e não subir,
a confiança. `e2` está com confiança média por causa disso, apesar de sinal forte.

**Onde eu confundi percepção com causalidade e corrigi.** Os dados da GDC 2026 [16] medem
demissões, uso de IA e opinião — não medem que a IA tenha causado as demissões, e a pesquisa não
faz essa afirmação. A primeira versão de `e4.1` dizia que a geração automática de assets estava
eliminando postos juniores. Reformulei para "escasseiam", sem atribuir causa, e desci a confiança.
O número de 64% de artistas visuais com visão desfavorável [16] é uma medida de *sentimento
profissional*, e eu quase a usei como se fosse medida de impacto.

**Que viés meu entrou aqui.** Dois, e eles puxam em direções opostas. O primeiro é viés de tema: a
zona de interesse declarada é percepção e mídia sintética, e um mapa escrito por quem acha o
assunto interessante tende a superestimar o quanto o resto do mundo o acha. O segundo é viés de
recorte: a instrução era descobrir a disrupção sem suspeita prévia e com viés neutro, mas o texto
do tema fornecido pela disciplina já nomeava a disrupção-raiz ("uma foto vira um objeto 3D") e
listava as ferramentas. É honesto reconhecer que eu **confirmei** um enquadramento em vez de
construí-lo do zero; as fontes que abri sustentam o enquadramento, mas eu não busquei com igual
energia por evidência de que ele estivesse errado. O contraponto que consegui montar — a
fotogrametria madura e cara do Google, que já entrega a cópia navegável do mundo sem nada disso
[13] — é magro, e deveria ser maior.

**O falseador que eu mesmo estabeleci.** Combinei no início que mudaria de ideia diante de
evidência de que a adoção já passou da maioria inicial, ou de que a tecnologia não rompe nada. Não
encontrei nenhuma das duas. Não achei nenhuma medição populacional de adoção de captura 3D — nem
survey, nem base de instalações, nem número de capturas por período em fonte independente. A
ausência dessa medida é a maior fragilidade do documento: sem denominador, "emergente" é uma
asserção minha, não um fato verificado. O que mais perto chega é a menção da Niantic a "milhões de
objetos e lugares" capturados [9], que é número de vendor, sem base de comparação e sem série
temporal — insuficiente para localizar a curva.

## 8. O que a máquina errou

**Fonte que não abriu e quase entrou como se tivesse aberto.** O survey de 3D Gaussian Splatting na
ACM Computing Surveys apareceu no topo de duas buscas, com título, DOI e veículo — o suficiente
para citá-lo de memória. Ao tentar abrir, `dl.acm.org/doi/10.1145/3807511` devolveu HTTP 403. Se eu
tivesse aceitado o resumo de busca, teria citado um artigo que não li, com um número de DOI que não
verifiquei. Substituí pela versão em arXiv do survey [5], que abri de fato, e registro que o DOI
citado nas buscas **não** foi por mim confirmado como correspondente a esse mesmo trabalho.

**Data errada por confiança no agregador.** O resumo de busca afirmava que o Khronos "anunciou um
release candidate em 3 de fevereiro de 2026". Ao abrir o blog do Khronos, a data do anúncio da
iniciativa é **7 de agosto de 2025**, e o blog não menciona release candidate nem data de
ratificação [7]. A informação de release candidate e de ratificação-alvo no segundo trimestre de
2026 veio de uma segunda fonte, jornalística [8]. Duas datas diferentes, dois fatos diferentes,
quase fundidos num só. Mantive os dois separados e atribuídos.

**Número redondo demais, de fonte que não abri.** Uma busca devolveu "100–200+ FPS a 1080p" e "900+
FPS" para splatting. O artigo original reivindica algo bem mais modesto e mais preciso:
renderização em tempo real **a 1080p, ≥30 fps**, para cenas completas e não limitadas [1]. A
diferença entre "≥30 fps em cena completa" e "900 fps" é a diferença entre o que foi medido no
artigo e o que apareceu em blog de infraestrutura vendendo GPU na nuvem. Usei só o do artigo.

**Alucinação de precisão legislativa.** Sobre o PL 2338/2023, resultados secundários afirmavam com
segurança que "em 27 de maio de 2026 o plenário da Câmara deve votar". A página oficial do Senado
registra como última movimentação "remetida à Câmara dos Deputados", de **17 de março de 2025**
[12]. Não há, na fonte oficial que abri, nada que confirme a data de maio. Um agregador jurídico
converteu expectativa em agenda, e eu quase repassei isso como estado da tramitação.

**Onde eu não consegui verificar e disse isso em vez de preencher.** A ferramenta `img2threejs`,
citada pela turma como destaque, é o sinal fraco mais interessante do documento — e eu não abri
nenhuma fonte primária sobre ela. Ela aparece na seção 6 explicitamente marcada como não
verificada, e não aparece na seção 11. Também não encontrei nenhuma iniciativa brasileira de
captura neural de patrimônio em 2026: a fonte brasileira que abri [15] é de 2019 e trata de
fotogrametria, não de renderização neural. Preferi usá-la como base histórica declarada do que
citar um projeto que eu não vi.

## 9. Três cenários para 2031

**Provável.** Em 2031 a captura 3D é parte banal do trabalho de quem produz mídia, mas não do
cotidiano das pessoas. A extensão glTF foi ratificada e é suportada pelas engines e por alguns
navegadores; o splat circula entre ferramentas sem atrito, mas a cena não virou tipo de mídia
social — o que se publica continua sendo o vídeo renderizado a partir dela, porque o vídeo tem
enquadramento e a cena não. O pipeline de modelagem não desapareceu: virou pipeline de correção,
retopologia e integração sobre material capturado, e o efeito no mercado foi mais cruel na base do
que no topo, com vagas juniores rareando e sêniores disputados. A captura sem marcador é padrão em
produção de médio porte. O 4D continua caro e sem formato comum. Do lado normativo, não há regime
de consentimento para espaço em lugar nenhum; há regras de rotulagem de conteúdo sintético, que
tratam de deepfake e não alcançam a cena capturada. No Brasil, alguma norma geral de IA está em
vigor ou em vacatio, e ela não menciona captura tridimensional de espaços.

**Desejável.** O mesmo quadro técnico, com três diferenças que não vêm de graça. Primeira: o
formato carrega proveniência — um campo que diz quais superfícies vieram de observação e quais
vieram de prior, porque algum consórcio propôs a extensão antes de 2029 e as ferramentas passaram a
preenchê-la por padrão. Segunda: existe uma prática, não necessariamente uma lei, de aviso e
consentimento para captura de espaço de terceiros, do mesmo tipo que se consolidou para gravação
de reunião — imperfeita, mas presente na interface das ferramentas de captura, que perguntam antes
de publicar. Terceira: a escada de entrada da carreira foi reconstruída em outro lugar — a
formação em 3D deixou de treinar execução e passou a treinar direção, curadoria e correção, e as
escolas fizeram essa transição em vez de defender o currículo antigo até ele ficar vazio. Para
chegar aqui é preciso que alguém proponha a extensão de proveniência, que as ferramentas de
captura assumam o custo de perguntar, e que a formação se mova antes do mercado — três decisões
deliberadas, nenhuma automática.

**Indesejável.** Em 2031 a cópia navegável do mundo existe, é boa, e pertence a três empresas que
controlam simultaneamente a captura, o formato e o índice. Capturar é grátis; publicar de forma
que alguém encontre, não. Espaços privados foram capturados em massa sem que ninguém precisasse
pedir, e o acervo resultante é insumo de treino de sistemas que nunca foram apresentados a quem
mora ali. A distinção entre observado e inferido desapareceu do artefato e nunca entrou no
formato, de modo que cena reconstruída passou a ser usada como se fosse registro, inclusive onde
importa. A base da carreira 3D foi cortada sem substituição e, em 2031, já falta quem saiba
corrigir o que a captura erra. **O sinal precoce disto é específico e observável desde já:** se a
ratificação do formato aberto atrasar para além de 2027 enquanto os formatos proprietários de
captura ganham tração, e simultaneamente nenhuma proposta de campo de proveniência aparecer na
lista de extensões do Khronos, o cenário indesejável está sendo escolhido por omissão. São duas
coisas que dá para conferir sem esperar 2031.

## 10. O experimento

**O que é.** Uma **cabine de captura no corredor**: uma estação fixa, montada num corredor do
centro, com um celular num tripé, um QR code e um mural. Quem passa é convidado a capturar — a si,
um objeto que trouxe, ou o próprio corredor — em uma volta de câmera de trinta segundos. A captura
vira um splat gaussiano processado na hora, editável no navegador pelo SuperSplat, e publicado numa
galeria da turma. O mural ao lado tem duas colunas: **"o que eu autorizei"** e **"o que apareceu
junto"** — cada participante escreve, depois de ver o resultado, o que ele não esperava que
estivesse na cena. Rosto de terceiro ao fundo, tela de computador legível, crachá, a bagunça de uma
mesa alheia.

**Que pergunta sobre o futuro ele ajuda a responder.** Duas, e elas são o núcleo do mapa. A
primeira: *o que exatamente é capturado quando alguém captura um espaço?* — que é a pergunta de
`e1.3` e `e1.3.1`, e não tem resposta teórica satisfatória; ela precisa ser vista. A segunda: *dá
para perceber, olhando, o que a cena observou e o que ela inventou?* — que é `e3.1`. Para isso a
cabine tem um segundo modo: em vez da volta de trinta segundos, **uma foto só**, reconstruída por
modelo de imagem única, exibida lado a lado com o splat do mesmo objeto. A pessoa é convidada a
apontar onde as duas discordam — e o verso do objeto, que a foto única nunca viu, é onde a
discordância mora.

**Que tecnologia emergente ele usa, e por que não dá com tecnologia madura.** Usa splatting
gaussiano com captura de celular e reconstrução a partir de imagem única. Com tecnologia madura o
experimento não existe: fotogrametria clássica exigiria dezenas de fotos cuidadosas e horas de
processamento, o que mata o gesto de trinta segundos que é justamente o objeto de estudo; varredura
a laser exigiria equipamento que ninguém traz no bolso, e portanto não testaria a hipótese de que a
captura se banaliza; e a comparação entre observado e inferido é impossível sem o modelo de imagem
única, que é a peça emergente. O experimento precisa ser barato e instantâneo porque a
**banalidade** é a variável.

**O que a turma faz quando testar isso em sala.** Três rodadas, na mesma aula. Na primeira, cada
pessoa captura e publica sem nenhuma instrução sobre consentimento — e o mural é preenchido depois.
Na segunda, discutimos o mural e a turma escreve, em conjunto, uma regra de captura para o
corredor: o que pode, o que precisa de aviso, o que não pode. Na terceira, capturamos de novo sob a
regra que a própria turma escreveu, e medimos o que ficou de fora. O produto da aula não é a
galeria: é a regra, com o registro do que ela custou.

**O que seria um resultado que me faria mudar de ideia.** Se, na primeira rodada, a coluna "o que
apareceu junto" vier majoritariamente **vazia** — se as pessoas capturarem e o resultado não
contiver nada além do que pretendiam —, então `e1.3` está superestimado e a preocupação com captura
não consentida é minha, não do mundo; a cadeia e1.3 → e1.3.1 teria que ser rebaixada ou cortada.
E se, no modo de comparação, a turma **não conseguir** apontar onde o modelo de imagem única
inventou — se a reconstrução inferida for indistinguível *e também correta* na maior parte dos
casos —, então `e3.1` muda de natureza: deixa de ser um problema de proveniência e vira apenas uma
mudança de custo, o que enfraquece D2 como disrupção e a rebaixa a melhoria incremental. Qualquer
um desses dois resultados derruba uma cadeia inteira deste mapa, e os dois são verificáveis numa
aula.

## 11. Fontes

Somente fontes que abri. Links conferidos no dia 18/09/2026.

1. **3D Gaussian Splatting for Real-Time Radiance Field Rendering** — Kerbl, Kopanas, Leimkühler,
   Drettakis. ACM TOG 42(4), 2023. `https://arxiv.org/abs/2308.04079`
   *Sustenta:* a viabilidade de renderização em tempo real a 1080p (≥30 fps) para cenas completas
   e não limitadas, e a data da virada técnica (2023). *Confiabilidade:* alta — artigo seminal,
   publicado em veículo de primeira linha, com números explícitos e falsificáveis.

2. **NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis** — Mildenhall,
   Srinivasan, Tancik, Barron, Ramamoorthi, Ng. 2020. `https://arxiv.org/abs/2003.08934`
   *Sustenta:* a origem da representação neural de cena (2020) e o contraste com a representação
   explícita posterior. *Confiabilidade:* alta — artigo fundador do campo, amplamente replicado.

3. **TripoSR: Fast 3D Object Reconstruction from a Single Image** — Tochilkin, Pankratz, Liu,
   Huang, Letts, Li, Liang, Laforte, Jampani, Cao. 2024. `https://arxiv.org/abs/2403.02151`
   *Sustenta:* reconstrução de objeto 3D a partir de uma única imagem em menos de 0,5 s, licença
   MIT. *Confiabilidade:* média-alta — relatório técnico com código aberto; as métricas são
   autorreportadas, mas verificáveis por terceiros.

4. **Depth Anything V2** — Yang, Kang, Huang, Zhao, Xu, Feng, Zhao. 2024.
   `https://arxiv.org/abs/2406.09414`
   *Sustenta:* profundidade monocular de qualidade a partir de imagem única, treino
   majoritariamente sintético, escala de 25 M a 1,3 B de parâmetros, mais de 10× mais rápido que
   difusão. *Confiabilidade:* alta — modelos públicos e amplamente usados.

5. **A Survey on 3D Gaussian Splatting** — Chen, Wang. Aceito na ACM Computing Surveys; versão
   consultada no arXiv. `https://arxiv.org/abs/2401.03890`
   *Sustenta:* a caracterização da técnica como representação explícita com renderização em tempo
   real e editabilidade, e a existência de desafios em aberto. *Confiabilidade:* alta para o
   enquadramento do campo; o resumo não enumera os desafios, então não os cito em detalhe.

6. **SuperSplat (PlayCanvas)** — repositório. `https://github.com/playcanvas/supersplat`
   *Sustenta:* que a edição de splats roda inteiramente no navegador, sob MIT, com ~10,2 k estrelas
   e 1,2 k forks. *Confiabilidade:* alta para existência, licença e tração no GitHub; estrelas não
   medem uso real.

7. **Khronos, OGC, and Geospatial Leaders Add 3D Gaussian Splats to the glTF Asset Standard** —
   Khronos Group, 07/08/2025.
   `https://www.khronos.org/blog/khronos-ogc-and-geospatial-leaders-add-3d-gaussian-splats-to-the-gltf-asset-standard`
   *Sustenta:* os nomes das duas extensões, os atributos armazenados, os participantes e a
   compressão SPZ em até 90% em relação a PLY. *Confiabilidade:* alta para o fato institucional;
   é comunicação do próprio consórcio, e não traz data de ratificação.

8. **Khronos Moves to Integrate Gaussian Splatting Into glTF 3D Format** — UploadVR.
   `https://www.uploadvr.com/khronos-moves-to-integrate-gaussian-splatting-into-gltf-3d-format/`
   *Sustenta:* fase de release candidate, ratificação-alvo no 2º trimestre de 2026, empresas
   contribuintes e a citação de Neil Trevett sobre compartilhamento entre dispositivos; e que a
   compressão para mobile ficou em aberto. *Confiabilidade:* média — jornalismo especializado com
   citação nominal atribuída; não confirmei a ratificação em fonte primária.

9. **Mapping the World For Machines with Scaniverse** — Niantic Spatial, 07/04/2026.
   `https://www.nianticspatial.com/en/blog/scaniverse`
   *Sustenta:* captura com celular comum e câmera 360, saída em FBX, PLY e SPZ, limite de ~500 m²
   no móvel, localização 6DoF centimétrica contra 3–5 m do GPS. *Confiabilidade:* média — material
   do próprio fornecedor; prova desenho de produto e promessa, não desempenho independente.

10. **Move AI — Tech** — `https://move.ai/tech`
    *Sustenta:* captura de movimento sem marcador nem traje, com múltiplas câmeras de vídeo, em
    volumes de 4×4 m a 20×20 m, em estúdio ou externa. *Confiabilidade:* baixa-média — página
    comercial, sem limitações declaradas e com linguagem de escala ilimitada. Usada apenas para
    existência e escopo do produto.

11. **Personal identity meets copyright: Denmark moves to regulate deepfakes in the Copyright Act**
    — Plesner.
    `https://plesner.com/en/news/personal-identity-meets-copyright-denmark-moves-regulate-deepfakes-copyright-act`
    *Sustenta:* o conteúdo das seções 65a e 73a propostas, a proteção por 50 anos post mortem, o
    calendário (07/07/2025 → notificação em 31/10/2025 → votação prevista para o 1º/2º trimestre de
    2026 → vigência prevista em 01/07/2026) e as críticas de adequação conceitual e de
    compatibilidade com o direito da UE. *Confiabilidade:* média-alta — análise de escritório de
    advocacia, com datas e dispositivos citados; é interpretação profissional, não texto legal.

12. **PL 2338/2023 — Senado Federal** —
    `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233`
    *Sustenta:* que o projeto dispõe sobre o uso da inteligência artificial, foi remetido à Câmara
    dos Deputados e tem última movimentação registrada em 17/03/2025. *Confiabilidade:* alta —
    fonte primária oficial. É o que desmente a data de votação que circulava em agregadores.

13. **Photorealistic 3D Tiles overview** — Google Maps Tile API.
    `https://developers.google.com/maps/documentation/tile/3d-tiles-overview`
    *Sustenta:* a existência do produto maduro de cópia navegável do mundo, em formato OGC 3D
    Tiles, renderizável por visualizadores próprios ou abertos. *Confiabilidade:* alta para o
    produto; a página não detalha cobertura nem processo de produção, então não uso números de
    cidades ou países.

14. **4D Gaussian Splatting (4DGS): Volumetric Video, Explained** — Radiance Fields, atualizado em
    01/08/2026. `https://radiancefields.com/4d-gaussian-splatting`
    *Sustenta:* estado comercial do 4DGS em 2026, banda de ~80 Mbps (17 Mbps em modo econômico),
    plataforma de 70 câmeras em torno de US$ 80 mil, ausência de formato padrão para splat 4D e
    inviabilidade de captura dinâmica com câmera única. *Confiabilidade:* média — publicação
    especializada de nicho, bem informada; números devem ser lidos como ordem de grandeza.

15. **Ferramentas de digitalização 3D faça-você-mesmo na preservação do patrimônio cultural** —
    Alencastro, Dantas, Silva, Jacques. *Interações* (Campo Grande), v. 20, n. 2, 2019.
    `https://www.scielo.br/j/inter/a/JFxBx6R5srj7PL3Kt3f5ndP/?lang=pt`
    *Sustenta:* a base brasileira — digitalização de baixo custo em museu (Museu Júlio de
    Castilhos, Porto Alegre), com a fotogrametria vencendo por menor curva de aprendizado.
    *Confiabilidade:* alta para o que afirma; **mas é de 2019 e não trata de renderização neural** —
    usada como contexto histórico, não como evidência sobre o presente.

16. **GDC 2026 State of the Game Industry** — Game Developers Conference.
    `https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/`
    *Sustenta:* amostra de 2.300+ profissionais; 28% demitidos em dois anos (33% nos EUA); 50% com
    demissões no empregador em doze meses; 36% usando IA generativa; 52% avaliando o impacto da IA
    como negativo (contra 30% no ano anterior); 64% dos artistas visuais e técnicos com visão
    desfavorável. *Confiabilidade:* média-alta para percepção e composição do setor; **não mede
    causalidade** entre IA e demissões, e a amostra é autosselecionada.

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista

A skill exige entrevista antes de pesquisar. Nesta rodada não havia interlocutor disponível para
responder em turnos, e os campos vieram todos definidos na abertura. Registro os valores tal como
foram fixados, para que a leitura do mapa saiba de onde ele parte:

- **tema:** Captura de realidade e renderização neural (tema 10 de 19 da disciplina; família
  "Percepção e mídia sintética").
- **recorte:** global, com uma nota sobre o Brasil.
- **horizonte:** 2031.
- **público:** quem projeta mídia e interação.
- **objetivo da análise:** mapa de futuro no formato da disciplina, com três ordens de efeito, a
  partir de uma inovação/tema — não de um setor.
- **exclusões:** o que já é comum em produto de massa (a régua da disciplina); ideias genéricas que
  serviriam a qualquer tema. Nenhuma outra exclusão.
- **viés desejado:** neutro. Nenhuma disrupção suspeita informada de antemão — instrução explícita
  de descobrir.
- **critério de mudança de ideia (falseador):** evidência de que a adoção já passou da maioria
  inicial na curva de Rogers, ou de que a tecnologia apenas melhora o que existe sem romper nada.
- **profundidade:** três ordens.

**Registro de desvio em relação ao procedimento.** A skill manda repetir os valores confirmados e
**esperar confirmação** antes de pesquisar. Não houve etapa de confirmação porque não havia a quem
pedir; prossegui com os valores acima como dados. Isso é uma limitação do processo, não uma
propriedade do resultado, e deve ser levada em conta em qualquer comparação com mapas produzidos em
entrevista real. Uma consequência concreta está registrada na seção 7: o enquadramento da
disrupção-raiz veio junto com o tema, e não foi construído do zero pela pesquisa.

### 12.2 Consultas feitas

Buscas (WebSearch):

1. `3D Gaussian Splatting 2026 state of the art real-time rendering adoption`
2. `Gaussian splatting privacy law 3D capture of private spaces consent`
3. `Khronos glTF Gaussian splat extension standard 2026 3DGS interchange format`
4. `Niantic Scaniverse Spatial Platform large geospatial model 2025 2026 splat scans`
5. `Move.ai markerless motion capture 2026 single camera video mocap adoption`
6. `Denmark copyright likeness deepfake law 2025 2026 NO FAKES Act likeness rights digital replica`
7. `PL 2338/2023 inteligência artificial Brasil status 2026 Câmara aprovação regulação imagem voz`
8. `4D Gaussian splatting dynamic scene volumetric video 2026 streaming real-time`
9. `Google photorealistic 3D Tiles API Maps coverage cities availability`
10. `Brasil digitalização 3D patrimônio Gaussian splatting museu escaneamento 2026`
11. `3D artist jobs decline game industry layoffs 2026 AI asset generation impact modelers`

Aberturas (WebFetch), em ordem: arXiv 2308.04079; dl.acm.org/10.1145/3807511 (**falhou, 403**);
arXiv 2003.08934; arXiv 2403.02151; github.com/playcanvas/supersplat; khronos.org/blog (glTF
splats); nianticspatial.com/en/blog/scaniverse; europarl EPRS ATA(2026)782611 (**falhou, PDF
ilegível**); move.ai/tech; plesner.com (Dinamarca); senado PL 2338; arXiv 2406.09414;
radiancefields.com/4d-gaussian-splatting; developers.google.com 3d-tiles-overview;
gdconf.com State of the Game Industry 2026; scielo.br (patrimônio); arXiv 2401.03890;
uploadvr.com (Khronos).

### 12.3 Fontes descartadas, e por quê

- **`dl.acm.org/doi/10.1145/3807511`** — HTTP 403. Apareceu em duas buscas como survey de 3DGS na
  ACM Computing Surveys. Não abriu; substituída pela versão arXiv [5]. **O DOI citado nas buscas
  não foi verificado por mim** e não aparece no corpo do documento.
- **`europarl.europa.eu/.../EPRS_ATA(2026)782611_EN.pdf`** — o PDF não foi convertido para texto
  legível. Seria a fonte institucional europeia sobre a proposta dinamarquesa, e é a que mais falta
  neste documento: sem ela, a posição da Comissão Europeia fica conhecida apenas por intermediários.
  Substituída pela análise da Plesner [11], com a perda de neutralidade correspondente.
- **`spheron.network/blog/...`** — blog de provedor de GPU na nuvem, origem dos números de "100–200+
  FPS" e "900+ FPS". Descartado: é material de venda de infraestrutura, e os números conflitam com
  o artigo original [1].
- **`medium.com/@Jamesroha/...`**, **`aigearbase.com`**, **`tech-insider.org`**,
  **`industrifyai.com`**, **`sequelgame.com`**, **`aicrisis.org`**, **`boltrenders.com`** —
  agregadores e blogs de tráfego, alguns com números precisos e sem fonte (ex.: "14.666 demissões
  previstas", "de 50 concept artists para 12"). Nenhum aberto, nenhum citado. Usei apenas a
  pesquisa da GDC [16], que declara metodologia e amostra.
- **`ialocus.com.br`**, **`entercastconsulting.com.br`**, **`cbrdoc.com.br`**,
  **`barbieriadvogados.com`** — origem da afirmação de votação do PL 2338 em 27/05/2026. Não
  confirmada na fonte oficial [12]; não citada.
- **`globallawexperts.com`**, **`resemble.ai/laws-and-regulations`** — cobertura secundária da lei
  dinamarquesa, com títulos que já a tratam como lei vigente ("Denmark Deepfake Law 2026"). A fonte
  que abri [11] é explícita em que o projeto ainda aguardava votação. Descartadas por
  antecipar desfecho.
- **`ieeexplore.ieee.org/document/10585594`** (Privacy-Preserving 3D Gaussian Splatting),
  **`kevinhuangxf.github.io/GaussianMarker`**, **`arxiv.org/pdf/2507.23569`** (Gaussian Splatting
  Feature Fields for Privacy-Preserving Visual Localization), **`arxiv.org/html/2412.05695v1`**
  (WATER-GS) — não abertos por limite de esforço desta rodada. **São a lacuna mais séria do
  documento depois da ausência de medida de adoção:** existe uma linha de pesquisa inteira sobre
  privacidade e marca d'água em splats, que sustentaria melhor as cadeias e1.3, e2.2 e e3.1, e ela
  não está aqui. Qualquer continuação deste mapa deve começar por elas.
- **`move4d.net`**, **`vp-land.com`**, **`sunstrikestudios.com`** — cobertura setorial sobre mocap
  markerless. Não abertas; a formulação "em 2026 a pergunta deixa de ser se markerless funciona e
  passa a ser para quais casos ele é preciso o bastante" é útil e aparece no espírito de `e2`, mas
  não a cito porque não abri a fonte.
- **`radiancefields.com/niantic-spatial-bets-big-on-gaussian-splatting`**, **`auganix.org`**,
  **`thenewstack.io`**, **`medium.com/echo3D`** — cobertura do lançamento do Scaniverse e do modelo
  geoespacial da Niantic, incluindo o número de "30 bilhões de imagens com pose" da base
  proprietária. Não abertas; o número **não** entra no documento.
- **`arxiv.org/pdf/2410.12262`** (3D Gaussian Splatting in Robotics: A Survey) — não aberto.
  Relevante para a fronteira com o tema 9 (robô que aprende em mundo simulado), fora do escopo
  deste mapa por decisão de recorte.

### 12.4 Efeitos gerados e depois removidos ou reformulados

- **Removido: "cena 3D passa a ser aceita como prova judicial" (3ª ordem, sob e3.1).** Nenhuma
  fonte — norma, caso, diretriz processual — em nenhuma jurisdição. Substituído por `e3.1.1`,
  formulado como perda de *valor documental* na ausência de proveniência, que é uma afirmação sobre
  prática e não sobre direito. É a cadeia interrompida que a seção 5 menciona.
- **Reformulado: `e4.1`.** Redação original: "a geração automática de assets elimina postos juniores
  de modelagem". Os dados da GDC [16] medem demissões e sentimento, não causa. Nova redação:
  "postos juniores escasseiam antes dos sêniores", sem atribuição causal, confiança média.
- **Rebaixado: `e1.1`.** Estava com confiança alta. Desceu para média por ser extrapolação linear
  sem fonte sobre composição de acervo em estúdio (ver seção 7).
- **Rebaixado: `e2`.** Sinal mantido forte (a técnica claramente existe e é comercial), confiança
  reduzida a média porque a única fonte é do fornecedor e não declara limitações [10].
- **Removido: "captura neural substitui a fotogrametria aérea nos mapas até 2029" (2ª ordem).**
  Afirmação forte demais para a evidência: os Photorealistic 3D Tiles são produto consolidado [13] e
  não há nada indicando substituição. Reformulado como `e6` e `e6.1`, em termos de acervos deixarem
  de *depender* de fotogrametria aérea cara e a cópia do mundo virar acervo distribuído — o que é
  uma afirmação sobre pluralidade de produtores, não sobre substituição de tecnologia.
- **Removido: um efeito de 1ª ordem sobre vídeo volumétrico de sensor comum.** A evidência diz o
  contrário: captura dinâmica com câmera única é impraticável, o mínimo é uma plataforma
  sincronizada de dez ou mais dispositivos, e não há formato padrão [14]. Rebaixado a sinal fraco na
  seção 6, onde vale mais como ausência observável do que como tendência.
- **Não gerados, por decisão de recorte:** efeitos sobre robótica e mundo simulado (tema 9),
  distribuição de XR pelo navegador (tema 15) e segmentação por conceito (tema 11). São vizinhos
  declarados do tema e cada um puxaria cadeias próprias; mantê-los fora foi escolha, não omissão.

### 12.5 Limitações declaradas

1. **Sem medida de adoção.** Não encontrei nenhuma fonte independente que meça quantas pessoas ou
   organizações capturam 3D, com que frequência, em que lugares. A classificação do tema como
   emergente — e não maduro — é inferência minha a partir de disponibilidade de ferramenta e
   estágio de padronização, não fato medido. O falseador combinado na entrevista (adoção além da
   maioria inicial) é, portanto, **não testado**, e não apenas não satisfeito.
2. **Três fontes de vendor.** [7] em parte, [9] e [10] são material dos próprios fornecedores.
   Marcadas como tal em cada uso.
3. **Um fato central não confirmado.** A ratificação da extensão glTF: meta de 2º trimestre de 2026
   segundo [8], sem confirmação em fonte primária. D3 depende dela.
4. **Literatura de privacidade em splats não lida.** Ver 12.3. É a lacuna que mais enfraquece as
   cadeias e1.3, e2.2 e e3.1.
5. **Nota sobre o Brasil apoiada em fonte de 2019.** [15] é sólida, mas anterior à renderização
   neural. Não encontrei iniciativa brasileira de captura neural de patrimônio em 2026.
6. **Entrevista sem confirmação.** Ver 12.1.
7. **Datas de prazo nos efeitos são estimativas.** Nenhum `prazo` no bloco `roda` deriva de fonte.
   São julgamentos meus, e a `confianca` associada é a melhor leitura que posso oferecer sobre eles
   — `baixa` na terceira ordem, como o formato prevê e como o caso justifica.
