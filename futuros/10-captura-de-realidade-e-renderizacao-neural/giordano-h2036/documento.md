---
tema: Captura de realidade e renderização neural
slug: captura-de-realidade-e-renderizacao-neural
autor_login: grec
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-22
horizonte: 2036
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 12
efeitos_ordem_2: 19
efeitos_ordem_3: 10
tecnologias_citadas: [3D Gaussian Splatting, NeRF, SOG, SPZ, PLY, KSplat, SuperSplat, PlayCanvas, splat-transform, 3D Tiles, glTF, Cesium ion, Nuke 17.0, Houdini, Arnold, V-Ray 7, OctaneRender, ComfyUI, Godot, Unreal Engine, Unity, Meta Horizon Hyperscape, Scaniverse, Niantic Spatial, Large Geospatial Model, VPS, Polycam, Luma AI, KIRI Engine, Marble, World Labs, TripoSR, Hunyuan3D, TRELLIS, Depth Anything V2, VGGT, Move One, Move m2-xl, EasyMocap, AMASS, Gracia, Arcturus, 4DV.ai, Volinga, XGRIDS, img2threejs, Magnific, LiDAR]
fontes: 21
confianca: media
experimento: "O mesmo lugar, três vezes — captura por celular, reconstrução a partir de uma foto e geração por prompt, publicadas às cegas no navegador"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

A captura de realidade deixou de ser um procedimento de engenharia e virou um gesto: dez
minutos andando com um headset, ou um giro de celular, produzem uma cena navegável
fotorrealista. Três rupturas derivam disso e este mapa as separa. A primeira é de
**representação**: o 3D que circula na produção deixa de ser malha com topologia, UV e material
— passa a ser uma nuvem de primitivas sem alça de edição, e todo o ferramental construído sobre
a malha perde o ponto de apoio. A segunda é de **ato**: capturar deixa de ser visível e
negociado, e com isso o consentimento — de uma pessoa, de uma loja, de uma casa — perde o
momento em que era pedido; ao mesmo tempo, quem captura não fica dono da captura, porque o
processamento mora na nuvem de três ou quatro empresas. A terceira é de **estatuto**: modelos
generativos passam a completar o que o sensor não viu e a exportar no mesmo formato de quem
mediu, de modo que a cena 3D deixa de servir como prova sem uma cadeia de procedência que ainda
não existe. Até 2036, o efeito que mais desloca quem projeta mídia não é o fim do modelador: é a
migração do valor da execução para a **direção da captura** — escolher o lugar, o percurso, a
luz e o que fica de fora — e a descoberta de que o ativo escasso passa a ser o lugar que só
existe ali. O mapa tem 3 disrupções-raiz, 12 efeitos de 1ª ordem, 19 de 2ª e 10 de 3ª, com
confiança média: a base de evidência sobre ferramenta é forte e datada; a base sobre adoção por
ofício é fraca, e foi ela que puxou a confiança para baixo.

## 2. O tema

Captura de realidade e renderização neural é o conjunto de técnicas que transforma registro de
sensor comum — foto, vídeo, varredura de headset — em cena tridimensional navegável, sem passar
pelo pipeline de modelagem. O objeto aqui não é "3D"; é **transformar realidade em ativo 3D**.
O robô que aprende num mundo simulado é outro tema (9); distribuir 3D e XR pelo navegador é
outro (15); segmentar e nomear o que se vê é outro (11).

Encosta em mídia e interação em três pontos. No **ativo**: o que um designer recebe para
trabalhar muda de natureza, e ferramenta, revisão e versionamento mudam junto. No **corpo**:
captura de movimento sem marcador tira a performance do estúdio e a coloca onde ela acontece.
E no **espaço**: quando qualquer pessoa pode publicar uma cópia navegável de um lugar, a
pergunta sobre quem tem direito sobre a aparência de um prédio, de uma loja ou de uma rua deixa
de ser acadêmica.

Merece mapa de futuro, e não levantamento de estado da arte, porque o núcleo técnico já está
resolvido o bastante para ser datado — o paper que destravou tudo é de julho de 2023 e o suporte
nativo na ferramenta líder de composição é de fevereiro de 2026 — enquanto **nada** do que
decorre disso está resolvido: não há formato único, não há edição semântica, não há procedência,
não há regra sobre captura de espaço, e não há uma única medida pública de quantas pessoas
capturam. O interessante deste tema está inteiramente na segunda e na terceira ordem.

### Premissas assumidas nesta rodada

Rodada não interativa. O briefing veio preenchido e substitui a entrevista (§0 da skill); o que
ele não cobria foi assumido e está declarado aqui, não escondido.

```
modo: MAPA
horizonte: 2036 (dez anos)
publico: quem projeta mídia e interação
recorte: global, com uma nota sobre o Brasil
descartado de início: o que já é comum em produto de massa
disrupção que o autor suspeita ser a raiz: nenhuma — descobrir
viés: neutro
zona de interesse: Percepção e mídia sintética
ideias óbvias a excluir: as que serviriam para qualquer um dos 19 temas
o que faria mudar de ideia: evidência de que a adoção já passou da maioria inicial,
  ou de que a tecnologia só melhora o que existe sem romper nada
busca na web: sim — só entra o que foi aberto
```

Assumido por minha conta, por não constar do briefing: (a) "quem projeta mídia e interação"
inclui estúdio de jogo, VFX, produção virtual, jornalismo imersivo e quem faz interface
espacial, mas **não** inclui topografia, agrimensura nem inspeção industrial — esses aparecem só
quando pagam a conta da infraestrutura que o resto usa; (b) a nota sobre o Brasil é sobre
**onde a captura entra primeiro no país**, que pela evidência aberta é a prefeitura e a
universidade, não o estúdio; (c) tratei "mídia sintética controlável" (tema 12) como vizinho, e
por isso todo efeito sobre vídeo/imagem 2D ficou de fora, mesmo quando o mecanismo era o mesmo.

## 3. Onde isso está hoje

Âncora feita **com** acesso à web em 22/09/2026: 12 buscas em português e inglês, 21 páginas
abertas e lidas. Nenhuma confiança foi rebaixada por falta de busca. O que segue está em §11 com
link e avaliação.

### O que já existe e funciona

**A representação.** *3D Gaussian Splatting for Real-Time Radiance Field Rendering*, de Kerbl,
Kopanas, Leimkühler e Drettakis (Inria / Université Côte d'Azur / MPI Informatik), saiu na
SIGGRAPH 2023 (julho/2023) com a métrica que destravou o campo: síntese de vista nova a **≥100
fps em 1080p** em cenas reais completas. O código de referência é MIT — uso comercial liberado —
e pede GPU CUDA com Compute Capability 7.0+ e **24 GB de VRAM** para treinar na qualidade do
paper. Três anos depois, o survey de referência sobre 3DGS (arXiv 2401.03890) está na **versão
9, de 09/04/2026**: o campo não desacelerou.

**A compressão e o transporte.** A PlayCanvas abriu a especificação do **SOG** (Spatially
Ordered Gaussians) em **17/09/2025**, com o número que importa: um parque de skate de 4 milhões
de gaussianas caiu de **1 GB para 42 MB** — cerca de 95% —, e 2 a 3× melhor que PLY comprimido.
Em **27/04/2026** a Cesium levou splats com nível de detalhe hierárquico para 3D Tiles e glTF,
com um dataset de **110 milhões de splats reconstruídos de 20.169 fotos (427,7 gigapixels)**
cobrindo 3,7 km² a 3 cm de amostragem; splats entram na proposta de **3D Tiles 2.0**, padrão
comunitário OGC. Ou seja: existe caminho de padronização do *streaming*, e ele veio da geoespacial.

**A entrada no pipeline profissional.** O suporte nativo, não por plugin, já está em Nuke (v17.0,
fevereiro de 2026; v17.1v1 em 20/08/2026 com o GeoSequencer), Houdini (v21 e v22), Autodesk
Arnold (7.5.2), Corona 14, D5 Render 3.0, OctaneRender 2026.1, Notch 2026.2, SketchUp,
RealityScan 1.5+ (Epic) e ComfyUI, que passou a ter um tipo de dado `GAUSSIAN` nativo na v0.23.0.
O Chaos V-Ray 7 atravessa 3ds Max, Cinema 4D, Houdini, Maya, Nuke, Revit, Rhino, SketchUp e
Unreal. A Volinga relata pipeline LiDAR → Unreal "em horas" com a XGRIDS, e atribui uso de
ferramentas 3DGS em Houdini na produção de *Superman* (alegação de fornecedor sobre produção de
terceiro — ver §8).

**A edição na web.** O **SuperSplat** (PlayCanvas) edita, otimiza e publica splats **no
navegador, sem instalar nada**: MIT, 10,2 mil estrelas e 759 commits no ramo principal na data da
leitura, com publicação direta em `superspl.at` e conversão automática para SOG. Não é promessa:
é a ferramenta que a turma da disciplina levantou por conta própria como destaque.

**A captura de consumo.** O **Meta Horizon Hyperscape Capture** entrou em beta nos EUA em
setembro de 2025 no Quest 3/3S: ~30 segundos de varredura grossa, **5 a 10 minutos** andando pelo
espaço e **1 a 8 horas** de processamento nos servidores da Meta; a técnica é Gaussian splatting
e o render é por streaming em nuvem. Dois meses depois, o render migrou para o dispositivo e a
cena virou destino do Horizon Worlds, com até **oito pessoas** juntas. Do lado do celular,
Scaniverse (Niantic) é gratuito e a Niantic Spatial vende, sobre esse acervo, a linha
Capture / Reconstruct / Localize / Understand, com um **Large Geospatial Model** como produto —
mira IA corporificada, defesa e óleo e gás, não mídia.

**O corpo.** Captura de movimento sem marcador saiu de pesquisa: a Move One tem variante
**m2-xl para 20+ performers simultâneos**, com clientes declarados incluindo Ubisoft, SEGA,
Warner Music, Paramount, Disney, Sony, Meta, Nike e Adidas; o Gen 2 foi anunciado em 11/03/2025.
Do lado aberto, EasyMocap segue disponível, e a estimativa de profundidade monocular tem base
sólida: **Depth Anything V2** (NeurIPS 2024) treinou com 595 mil imagens sintéticas rotuladas e
mais de **62 milhões** de imagens reais pseudo-rotuladas, e roda cerca de 10× mais rápido que os
baseados em difusão.

**O tempo.** 4D Gaussian Splatting — a cena em movimento — saiu de demo: a Gracia entregou o
primeiro streaming de 4DGS em março de 2026 e apps gratuitos em Vision Pro (junho de 2026),
Quest, Pico, macOS e Steam, com 25+ cenas, a **80 Mbps** em qualidade plena ou 17 Mbps em modo
econômico; a Arcturus pôs replays esportivos em splat; e na SIGGRAPH 2026 a 4DV.ai, a Dell e a
Radiance Fields exibiram um filme de **11,5 minutos inteiramente em 4DGS**, o mais longo até
então. Na NAB 2026, um rig de **70 câmeras 4K PTZ, cerca de US$ 80 mil** de hardware de
prateleira, comprimindo ~8 Gbps de captura bruta para um ativo final de **30 a 60 Mbps**.

**A geração.** O **Marble**, da World Labs (Fei-Fei Li), abriu ao público em **11/11/2025** e
gera ambiente 3D persistente e navegável a partir de texto, imagem, panorama ou vídeo,
exportando **gaussian splats, malhas de colisão, malhas de alta qualidade e vídeo** — o mesmo
formato de saída de quem capturou. API de desenvolvedor em janeiro de 2026, geração 1.1 em
abril de 2026, e integração já relatada em palco LED de produção virtual, dentro do Unreal.

### O que existe e ainda não funciona

- **Edição semântica de splat.** Separar um objeto da cena, mudar a luz, deformar — é o buraco
  central. O SuperSplat limpa e otimiza; não rearranja. O modo de edição do Marble é declarado
  experimental pelo próprio fabricante.
- **O que o sensor não viu.** O hands-on do Hyperscape relata distorção significativa nas áreas
  que o headset não alcançou e em texto pequeno. Oclusão, vidro e reflexo continuam sendo o
  limite, e é um limite físico, não de software.
- **Formato único.** PLY, SPZ, SOG e KSplat convivem, cada um com um ecossistema. SPZ alcança até
  90% de redução sobre PLY; SOG chega a ~95%; KSplat domina os visualizadores derivados de
  GaussianSplats3D. Não há vencedor.
- **Primeira parte nas engines grandes.** Em 2026 não há módulo Gaussian Splatting da própria
  Epic no Unreal; o caminho são plugins (Luma AI, Polycam, Cesium for Unreal, entre dez opções).
  No Unity, idem — o pacote de referência é comunitário. Quem tem suporte nativo de fábrica é
  PlayCanvas; Godot tem plugin de tempo real.
- **Exportação de quem capturou.** No Hyperscape, o usuário **não** acessa arquivos brutos. A
  Luma AI é 3DGS puro, sem exportação de malha, e não está mais em atualização ativa. O gesto de
  captura é do usuário; o ativo, não.

### Quem constrói

Inria/Côte d'Azur e MPI Informatik (a base acadêmica); PlayCanvas (SuperSplat, SOG, engine);
Niantic Spatial (Scaniverse, VPS, LGM); Meta (Hyperscape, Quest); World Labs (Marble); Move AI
(captura de movimento); Cesium e o OGC (padronização de streaming); Foundry, SideFX, Autodesk e
Chaos (entrada nos DCCs); e uma comunidade aberta grande — o repositório de referência do 3DGS
tem 23,9 mil estrelas sob MIT, e Depth Anything V2 e EasyMocap são abertos.

### Que número descreve a adoção hoje

**Sem número encontrado** para o que mais importaria: não há medida pública de usuários ou
downloads de Scaniverse, Polycam ou Luma AI, nem de quantos estúdios entregaram trabalho em
splat. Não estimei. Os números que existem são de *capacidade*, não de adoção: 23,9 mil estrelas
no repositório de referência, 10,2 mil no SuperSplat, nove versões do survey em 27 meses, 110
milhões de splats num único dataset geoespacial, US$ 80 mil por um rig de vídeo volumétrico. O
único número de mercado que encontrei — uma projeção de captura de movimento sem marcador
saltando de US$ 15,21 bi (2025) para US$ 74,33 bi (2035) — vem de relatório de consultoria cuja
metodologia não abri, e por isso **não** foi usado para sustentar nenhum efeito deste mapa.

Pela escala de difusão da skill, o tema está entre **produto de nicho** e **adoção precoce**:
ferramenta profissional madura e disponível, prática profissional ainda não majoritária, e
nenhuma evidência de maioria em ofício nenhum.

### A nota sobre o Brasil

No Brasil a captura 3D em escala não entra pelo estúdio: entra pelo poder público. O
Senseable City Rio — Prefeitura do Rio com o MIT Senseable City Lab, mais UFRJ, Instituto
Pereira Passos, Instituto Igarapé e Casa Firjan — mapeou com LiDAR cerca de **16 mil m²** do
Vidigal, com resultados apresentados em 18/09/2025, e a fase seguinte mira o Complexo da Maré
(~140 mil moradores) com 16 sensores ambientais impressos em 3D e formação de moradores para
coleta direta; lideranças locais participaram da definição das áreas mapeadas, e o diretor do
projeto descreve o LiDAR como mais preciso que imagem de satélite **e preservador de
privacidade**. Em paralelo, a Prefeitura do Rio e o INPO (MCTI) anunciaram em 29/06/2026 um
gêmeo digital do relevo marinho até 5 km da costa, entre o Flamengo e o Recreio. Rio Verde (GO),
São Paulo e Curitiba têm iniciativas próprias de gêmeo digital urbano. A consequência para quem
projeta mídia é direta e está no efeito e7.2: no Brasil, o acervo de mundo capturado tende a
nascer público e com finalidade de gestão urbana — e quem quiser usá-lo como cenário vai
negociar com secretaria municipal, não com asset store.

## 4. As disrupções-raiz

Três candidatos foram **recusados** antes de entrar, pelo critério de maturidade (§2 da skill).
Eles estão registrados no anexo com o motivo, e reaparecem aqui só como contexto:
fotogrametria clássica e varredura a laser (maduras e caras, adoção em maioria nos setores que
as usam); NeRF (superado como técnica de produção pelo próprio 3DGS antes de virar prática);
e "o celular ganhou LiDAR" (melhoria sustentadora — faz o mesmo, melhor).

### R1 — A cena deixa de ser modelada e passa a ser amostrada: o 3D perde a topologia

**O que rompe.** A malha como unidade de troca do 3D. Com ela caem a topologia, o mapeamento UV,
o material PBR autoral, a cadeia de LODs feita à mão e — sobretudo — os ofícios e as ferramentas
construídos exatamente sobre essas quatro coisas: retopologia, unwrap, texturização, *look dev*.
Cai também a **revisão**: não existe "corrigir aquele canto" num splat como existe numa malha,
porque não há alça semântica onde pegar. Não é "modelar mais rápido"; é entregar um objeto de
outra natureza para uma cadeia industrial que não tem onde encaixá-lo.

**Por que agora, e não há cinco anos.** Em 2021 havia NeRF: qualidade boa, tempo de render
incompatível com produção. O que mudou tem data: 3DGS a ≥100 fps em 1080p (jul/2023); compressão
que torna a cena transportável (SOG aberto em 17/09/2025, 1 GB → 42 MB); padronização de
streaming com nível de detalhe (3D Tiles 2.0 / Cesium, 27/04/2026); e a entrada nativa nos DCCs
que definem a cadeia profissional (Nuke 17.0 em fev/2026, Houdini 21-22, Arnold, V-Ray,
OctaneRender, ComfyUI). Nenhuma dessas quatro condições existia em 2021.

**Onde está na difusão.** Entre **produto de nicho** e **adoção precoce**. A favor de "precoce":
suporte nativo em toda a cadeia de composição e render. Contra: nenhuma engine grande tem módulo
de primeira parte, e não há formato único.

**O que ainda falta acontecer.** (1) Edição semântica — selecionar, mover, relightar. (2) Um
formato que vença, ou uma camada de troca que torne a escolha irrelevante. (3) Animação e
deformação de splat com controle autoral. (4) Splat entrar no *versionamento e na revisão* de
estúdio, que hoje é feita sobre arquivos de malha diffáveis.

**Quem bloqueia, e com que incentivo.** Os donos de pipeline e de formato — Autodesk, Epic,
Adobe, Foundry — têm incentivo direto para capturar o padrão em vez de adotá-lo, e a guerra
PLY × SPZ × SOG × KSplat é a expressão disso. E os estúdios com acervo grande de malha resistem
por um motivo prosaico e forte: o splat não entra no fluxo de revisão que eles já pagaram para
construir. Esse bloqueio gera o efeito e3.

### R2 — Capturar deixa de ser um ato visível e negociado

**O que rompe.** O **consentimento como instituição**, e o mercado de escassez que sustentava
ativo 3D e captura de movimento. Enquanto digitalizar um espaço exigia tripé, laser, equipe e
autorização, havia um momento em que alguém podia dizer não — e havia um preço. Quando a captura
cabe numa caminhada de dez minutos com um headset que a pessoa já usa, ou num giro de celular,
esse momento desaparece: não há como negar permissão para algo indistinguível de olhar. Rompe
também a suposição de que quem captura fica com a captura: o processamento é na nuvem, o arquivo
bruto não volta, e o acervo do mundo se concentra em poucas mãos.

**Por que agora, e não há cinco anos.** Hyperscape em headset de consumo (set/2025), com o ciclo
de captura medido em minutos; Scaniverse gratuito com reconstrução em splat; profundidade
monocular resolvida a ponto de dispensar sensor dedicado (Depth Anything V2, 62 M de imagens
pseudo-rotuladas); captura de movimento sem marcador com 20+ performers a partir de vídeo comum.
Em 2021 nenhuma das quatro existia em produto.

**Onde está na difusão.** **Adoção precoce** no consumo — os apps são gratuitos e estão em loja
—, **produto de nicho** na produção profissional.

**O que ainda falta acontecer.** (1) Captura genuinamente passiva, sem sessão dedicada — hoje
ainda é preciso *decidir* capturar. (2) Qualidade sob oclusão. (3) Algum instrumento operacional
de consentimento sobre espaço, que não existe em lugar nenhum. (4) Portabilidade: exportar de
graça o que se capturou.

**Quem bloqueia, e com que incentivo.** Duas frentes opostas. As plataformas de captura (Meta,
Niantic) têm incentivo para *manter* a captura fácil e o arquivo preso — é o acervo delas. E, do
outro lado, quem é capturado: proprietários de imóvel e marcas com incentivo para proibir, e no
Brasil a ANPD como porta de entrada regulatória via LGPD, já que a captura de ambiente com
pessoas ao fundo é tratamento de dado pessoal por definição. Esses bloqueios geram e6.1, e6.2 e e7.

### R3 — Reconstrução e geração colapsam num mesmo ato

**O que rompe.** A distinção entre **registro e ficção** dentro do próprio ativo 3D. Até aqui,
uma cena capturada era um documento com erro de medida; uma cena modelada era uma obra. O Marble
gera ambiente navegável a partir de uma frase e exporta **splat** — exatamente o que sai de uma
captura. Ampliadores que inventam detalhe fazem o mesmo em escala menor. O resultado é que o
arquivo deixa de carregar a informação de como foi feito, e todo uso que dependia dessa
informação — perícia, vistoria, jornalismo, prova — perde o chão. Rompe também a fronteira entre
"banco de ativos" e "gerador": não se compra mais um cenário, pede-se um.

**Por que agora, e não há cinco anos.** Reconstrutores feed-forward que entregam malha texturizada
de uma imagem em menos de um segundo (classe TripoSR / Hunyuan3D / TRELLIS); difusão multivista
que fabrica as vistas que faltam; e, fechando o ciclo, a exportação em splat — que é o que une R3
a R1. O Marble tem calendário curto e documentado: pesquisa em dez/2024, beta limitado em
set/2025, disponibilidade geral em 11/11/2025, World API em jan/2026, geração 1.1 em abr/2026.

**Onde está na difusão.** Entre **demo pública** e **produto de nicho**. Já há uso em produção
virtual (splats do Marble dentro do Unreal, em palco LED), mas é uso de vanguarda, não prática.

**O que ainda falta acontecer.** (1) Consistência métrica — escala real confiável, sem a qual não
serve para arquitetura, perícia nem robótica. (2) Controle autoral fino sobre o que foi
inventado. (3) Procedência verificável: nada hoje distingue, no arquivo, o medido do gerado.
(4) Interatividade — o próprio fabricante trata o mundo gerado como cena, não como sistema.

**Quem bloqueia, e com que incentivo.** Detentores de direito sobre semelhança — sindicatos de
atores e animadores, e o arcabouço que o **NO FAKES Act** tenta criar — têm incentivo e força
para regular o **corpo**. O projeto tramita desde 2023, foi reapresentado em 2024 e 2025, avançou
por unanimidade no Comitê Judiciário do Senado em 18/06/2026 e **ainda não é lei**. E, decisivo
para este mapa: ele protege voz e semelhança visual **de pessoas**, e não diz nada sobre prédios,
ruas e interiores. Esse bloqueio assimétrico é o efeito e12 — e é o achado mais desconfortável da
rodada.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A cena deixa de ser modelada e passa a ser amostrada — o 3D perde a topologia
    efeitos:
      - id: e1
        ordem: 1
        efeito: Estúdios de VFX e de produção virtual passam a entregar cenário como splat streamado, e o set digital deixa de ter uma versão editável única
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A revisão criativa muda de objeto — direção de arte passa a pedir recaptura em vez de correção, porque o splat não tem alça semântica
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O custo da mudança de última hora vira logística em vez de mão de obra, e produções escolhem locação pela facilidade de voltar lá
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Editores de splat no navegador ocupam o lugar central que a suíte de modelagem tinha, e retopologia deixa de ser competência de entrada
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Portfólio de entrada em estúdio passa a ser julgado pela capacidade de limpar e dirigir captura, o que abre a porta para quem não tem formação técnica em topologia
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Fabricantes de engine tornam o splat cidadão de primeira classe do renderizador, e o custo de um cenário fotorreal deixa de escalar com o tamanho da equipe de arte
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Jogos independentes alcançam cenário de fidelidade AAA e a diferenciação visual migra de fidelidade para estilo
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A falha característica do splat em bordas, vidros e áreas não vistas vira estética reconhecível e datada, como o excesso de lens flare dos anos 2010
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O gargalo do jogo fotorreal desloca-se de arte para banda e armazenamento, e a escolha de motor passa a ser decidida pelo codec de splat suportado
            sinal: medio
            prazo: 2031
            confianca: media
      - id: e3
        ordem: 1
        efeito: A guerra de formatos e o peso do dado seguram a migração — estúdios adiam adotar splat enquanto PLY, SPZ, SOG e KSplat convivem, e a interoperabilidade vira o custo escondido do projeto
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Consórcios de padrão absorvem splat como extensão de glTF e 3D Tiles, e o formato vencedor é decidido por quem controla o streaming, não por quem comprime melhor
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Capturas feitas entre 2024 e 2027 ficam ilegíveis fora do formato vencedor, e aparece um mercado de reprocessamento de acervo
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Lojas de ativos 3D perdem a exclusividade do cenário pronto, porque capturar o lugar real fica mais barato que licenciar uma aproximação dele
        sinal: fraco
        prazo: 2030
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Lojas de ativos migram de vender arquivo para vender permissão de captura de lugares reais
            sinal: fraco
            prazo: 2032
            confianca: baixa
      - id: e5
        ordem: 1
        efeito: O consumo de banda e de armazenamento de mídia imersiva cresce mais rápido que o de vídeo, e provedores de entrega passam a tarifar cena navegável em categoria própria
        sinal: fraco
        prazo: 2031
        confianca: baixa
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Compressão neural de cena vira especialidade contratada, com vaga própria em estúdio e em plataforma de vídeo
            sinal: fraco
            prazo: 2030
            confianca: baixa
  - disrupcao: Capturar deixa de ser um ato visível e negociado
    efeitos:
      - id: e6
        ordem: 1
        efeito: Pessoas publicam cópias navegáveis de espaços privados de terceiros sem pedir autorização a ninguém, porque a captura cabe num passeio de dez minutos
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Varejo, hotelaria e museus proíbem captura no contrato de entrada, e a placa de proibido escanear aparece antes de qualquer lei sobre o assunto
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A proibição se mostra inaplicável porque capturar não se distingue de olhar, e o litígio migra do ato de capturar para o de publicar
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A ANPD é provocada sobre captura 3D de ambientes com pessoas ao fundo, e a discussão brasileira sobre captura de espaço chega pela LGPD antes de chegar por lei de IA
            sinal: fraco
            prazo: 2031
            confianca: baixa
      - id: e7
        ordem: 1
        efeito: Quem captura não fica dono da captura — o processamento mora na nuvem, o arquivo bruto não volta, e o acervo de mundo capturado se concentra em poucas empresas
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Quem projeta mídia passa a escolher plataforma de captura pela cláusula de exportação, e exportar em formato aberto vira requisito de compra
            sinal: medio
            prazo: 2029
            confianca: media
          - id: e7.2
            ordem: 2
            efeito: Acervos públicos de captura urbana, financiados por gestão de cidade, tornam-se a alternativa ao acervo das plataformas — no Brasil pela prefeitura e pela universidade, não pelo estúdio
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Quem capturou a cidade para drenagem descobre que produziu cenário de entretenimento, e a licença de uso do gêmeo digital vira disputa política municipal
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: A captura de movimento sem marcador tira o ator do estúdio e grava a performance onde ela acontece, e o corpo deixa de ser um recurso agendado
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Bibliotecas de movimento perdem valor relativo, porque capturar o gesto específico sai mais barato que procurar um parecido
            sinal: medio
            prazo: 2031
            confianca: media
          - id: e8.2
            ordem: 2
            efeito: Sindicatos de atores e de animadores passam a negociar o movimento como direito separado da imagem, porque o gesto capturado sobrevive à cena em que foi gravado
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: O contrato de performance ganha prazo e escopo de reuso do movimento, e a remuneração migra de diária para licença
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: A qualidade da captura ambiente estaciona onde o sensor não viu — oclusão, vidro e reflexo continuam falhando —, e isso segura a captura amadora no papel de rascunho
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O ofício que se valoriza não é modelar, é dirigir a captura — planejar percurso, luz e cobertura vira competência contratável, próxima da direção de fotografia
            sinal: medio
            prazo: 2030
            confianca: media
  - disrupcao: Reconstrução e geração colapsam num mesmo ato
    efeitos:
      - id: e10
        ordem: 1
        efeito: O 3D capturado deixa de servir como prova, porque o arquivo não distingue a parte medida da parte inventada pelo modelo
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Perícia, seguro e vistoria de obra passam a exigir captura com procedência assinada, e o splat sem assinatura vale como ilustração e não como laudo
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: A assinatura de procedência vira metadado dos formatos de splat e cena sem ela passa a ser marcada nos visualizadores
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: O jornalismo imersivo perde o argumento do estive lá e passa a tratar reconstituição de local como infografia declarada, não como registro
            sinal: fraco
            prazo: 2031
            confianca: baixa
      - id: e11
        ordem: 1
        efeito: Cenário deixa de ser capturado ou modelado e passa a ser captura parcial mais descrição — o modelo completa o que faltou
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: A escassez migra do ativo para a especificidade — o lugar que só existe ali vira o bem caro, justamente porque todo o resto é gerável
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Donos de lugares singulares passam a licenciar direito de captura como já licenciam locação de filmagem, e a captura clandestina vira o litígio típico do período
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: Reconstrução como programa procedural concorre com reconstrução como dado, e a mesma cena passa a caber em kilobytes onde hoje precisa de megabytes
            sinal: fraco
            prazo: 2033
            confianca: baixa
      - id: e12
        ordem: 1
        efeito: A semelhança humana é protegida por lei antes do espaço construído, e a assimetria empurra a captura comercial para lugares em vez de corpos
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Marcas passam a registrar a aparência tridimensional de suas lojas como identidade visual protegida e a notificar publicações de splats, criando a primeira jurisprudência sobre cópia de espaço
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Apagamento vira etapa padrão de publicação de captura — remoção de marca e de rosto como o borrão do Street View foi para a foto de rua
                sinal: fraco
                prazo: 2036
                confianca: baixa
```

### O que o bloco não diz

**Os mecanismos, um a um.** O bloco YAML guarda a estrutura; a causalidade está aqui.

*R1.* **e1** — porque a entrada nativa do splat nos DCCs de composição e render (Nuke 17.0,
Houdini, Arnold, V-Ray, OctaneRender) faz o cenário capturado atravessar a cadeia sem conversão,
e pipeline LiDAR→Unreal "em horas" torna a recaptura competitiva com a remodelagem. **e1.1** —
porque o splat não tem alça semântica: sem seleção de objeto nem relighting, o único operador
disponível para "muda aquele canto" é capturar de novo; a revisão deixa de ser edição e vira
reagendamento. **e1.1.1** — porque, se corrigir é voltar ao lugar, a variável que a produção
controla passa a ser a distância e a autorização de acesso, não o tamanho da equipe. **e1.2** —
porque o SuperSplat já faz, no navegador e de graça, o que sobrou para o humano fazer (limpar,
cortar, otimizar, publicar), e quando a etapa mais frequente migra de ferramenta, a competência
de entrada migra junto. **e1.2.1** — porque avaliar wireframe deixa de medir alguma coisa quando
o wireframe não existe.

*R1, ramo de motor.* **e2** — porque o custo de arte de um cenário fotorreal passa a ser o custo
de ir lá e andar, e não o de uma equipe modelando; PlayCanvas nativo e Godot com plugin já
provam que é possível, e o que falta é a decisão de Epic e Unity. **e2.1** — porque, removido o
custo de fidelidade, o que distingue um estúdio pequeno de um grande não é mais quantos artistas
ele tem, e a diferenciação sobe para a camada de estilo. **e2.1.1** — porque toda técnica de
captura deixa assinatura de falha, e assinatura de falha reconhecível é o que data uma obra.
**e2.2** — porque uma cena de 110 milhões de splats não cabe no orçamento de banda de um jogo
sem nível de detalhe hierárquico, e quem já tem isso resolvido (a cadeia 3D Tiles) passa a ditar
a escolha.

*R1, retroação.* **e3** é o freio, e é o efeito com sinal mais forte do mapa: quatro formatos
concorrentes hoje, com fatores de compressão entre 90% e 95% e ecossistemas incompatíveis, fazem
qualquer estúdio adiar a decisão — e adiar é racional. **e3.1** — porque a padronização não vem
de quem comprime melhor e sim de quem já entrega em escala, e quem entrega em escala é a cadeia
geoespacial (3D Tiles 2.0 no OGC). **e3.1.1** — porque acervo em formato perdedor sem
conversor é acervo morto, e isso cria demanda de reprocessamento.

*R1, quem perde.* **e4** — porque a loja de ativos vende aproximação genérica de lugar, e o
substituto direto (o lugar real) ficou mais barato que a aproximação. **e4.1** — porque o que
resta de escasso não é o arquivo, é a **permissão**, e o vendedor migra para onde está a
escassez. *(Este par entra em contradição direta com e11.1 — ver adiante.)*

*R1, custo.* **e5** — porque os números de transporte já são conhecidos: 30 a 60 Mbps para um
ativo 4DGS acabado, 80 Mbps para streaming em qualidade plena, contra a faixa habitual de vídeo
4K; cena navegável não é vídeo caro, é outra categoria de tráfego. **e5.1** — porque quando o
gargalo vira transporte, a competência que resolve transporte vira cargo; o quadro de vagas em
3DGS já mostra a forma embrionária disso (cientista de pesquisa de engine gráfica na TikTok,
engenheiro de P&D em ML na CoStar, cientista sênior de GenAI para visão 3D na Bosch).

*R2.* **e6** — porque o ciclo de captura de um espaço inteiro é de 5 a 10 minutos com um aparelho
que a pessoa já tem no rosto, e não existe nenhum sinal externo — nada de tripé, nada de laser —
que avise a terceiros que está acontecendo. **e6.1** — porque o único instrumento disponível a
quem é capturado, antes de qualquer lei, é a condição contratual de entrada, que é o que lojas e
museus já fazem com filmagem. **e6.1.1** — porque a proibição depende de detectar o ato, e o ato
é indetectável; o ponto de controle que sobra é a publicação, que é visível. **e6.2** — porque
captura de ambiente com pessoas ao fundo é tratamento de dado pessoal pela LGPD
independentemente de haver regra específica sobre captura 3D, e o caminho da provocação à ANPD
já está trilhado em outros usos de imagem. **e7** — porque o desenho de produto atual é
literalmente esse: no Hyperscape o usuário não acessa arquivo bruto e o render é serviço; a
Niantic Spatial vende inteligência sobre um corpus que ela detém; a Luma não exporta malha. O
acervo é o produto. **e7.1** — porque quem projeta mídia precisa do ativo dentro do seu
pipeline, e a cláusula de exportação passa a valer mais que a qualidade da reconstrução.
**e7.2** — porque a cidade precisa capturar por outra razão (drenagem, risco, cadastro) e paga a
conta; o Senseable City Rio e os gêmeos digitais de Rio Verde, São Paulo e Curitiba são o
mecanismo em curso. **e7.2.1** — porque um mesmo arquivo com duas finalidades e um dono público
produz disputa sobre licença, não sobre técnica. **e8** — porque a exigência de estúdio, traje e
marcadores era o que obrigava a agendar o corpo; retirada a exigência, a performance é gravada
em campo, e sistemas com 20+ performers simultâneos tornam a multidão capturável. **e8.1** —
porque biblioteca existe para amortizar um custo de captura que caiu. **e8.2** — porque o gesto
capturado de uma pessoa identificável é reutilizável fora da obra original, e é exatamente essa
sobrevida que os contratos atuais não cobrem. **e8.2.1** — porque direito reutilizável se
remunera por licença, não por dia trabalhado. **e9** — porque o limite é físico: o que o sensor
não viu tem de ser inventado, e o relato de uso já registra distorção forte nessas áreas. Esta é
a retroação mais importante do mapa: ela é a razão pela qual a captura amadora não substitui a
profissional dentro do horizonte. **e9.1** — porque, se a qualidade depende de cobertura, quem
planeja a cobertura controla a qualidade; o ofício se desloca da execução para a direção.

*R3.* **e10** — porque geração e captura passaram a **sair no mesmo formato**, e o formato não
carrega o histórico; sem procedência, a pergunta "isto foi medido?" não tem resposta técnica.
**e10.1** — porque quem tem responsabilidade civil sobre a resposta (perito, seguradora) não
pode aceitar ativo sem cadeia de custódia, e a resposta padrão de qualquer setor nessa situação é
exigir assinatura. **e10.1.1** — porque metadado só se sustenta quando o visualizador o exibe;
sem isso, morre. **e10.2** — porque a redação que não consegue provar a medição perde o
argumento editorial e reclassifica a peça. **e11** — porque o Marble já completa cena e exporta
splat com malha de colisão, e a produção virtual já usou isso em palco; a partir daí, capturar
tudo deixa de ser necessário. **e11.1** — porque abundância de genérico produz escassez de
específico: quando qualquer sala pode ser gerada, o que tem preço é a sala que não pode.
**e11.1.1** — porque escassez com dono vira licença, e é o modelo que a locação de filmagem já
oferece pronto. **e11.2** — porque representar cena como programa em vez de dado troca
megabytes por instruções, e o sinal disso já aparece em ferramentas que devolvem código em vez
de malha. **e12** — porque o desenho legal em curso protege pessoa e ignora lugar: o NO FAKES Act
define réplica digital como voz ou semelhança visual **de um indivíduo**, e a assimetria de risco
resultante torna racional capturar espaço em vez de corpo. **e12.1** — porque quem tem espaço
comercialmente distintivo e advogado usa o instrumento que já tem (identidade visual/trade
dress), na falta de um específico. **e12.1.1** — porque a resposta técnica a notificação em massa
é sempre automatizar o apagamento, e o precedente operacional já existe na fotografia de rua.

**Cobertura STEEP.** *Social*: e6, e6.1, e8.2, e9.1. *Tecnológico*: e1, e2, e3, e10, e11, e11.2.
*Econômico*: e4, e4.1, e5, e7, e8.1, e11.1. *Político/jurídico*: e6.2, e12, e12.1, e10.1, e7.2.1.
*Ecológico*: **fica praticamente vazia** — o único efeito com componente material é e5 (banda e
armazenamento), e não encontrei base para derivar consumo energético de captura e render neural
sem inventar número. Registro a lacuna em vez de forçar.

**Quem perde.** e4 (lojas de ativos), e8.1 (bibliotecas de movimento), e1.2/e1.2.1 (quem fez
carreira em topologia e unwrap), e7 (quem captura e não fica com o arquivo), e10.2 (jornalismo
imersivo que se apoiava no registro), e9 (quem apostou em captura amadora de qualidade
profissional). O estudo encomendado por Animation Guild, Concept Art Association e outros a uma
consultoria projeta **204 mil** empregos de entretenimento significativamente perturbados nos
EUA no triênio 2024-2026, dos quais 118,5 mil em cinema/TV/animação (21,4% de 555 mil) e 52,4
mil em jogos (13,4% de 390,5 mil) — não é sobre captura 3D especificamente, e por isso entra
como pano de fundo do ramo e1.2, não como evidência dele.

**Os três efeitos que ficam fora da janela de 2036.** Depois da conferência de teto (§7.9),
`e7.2.1` (2037), `e8.2.1` (2037) e `e10.1.1` (2037) passaram a ser datados **além do horizonte
deste mapa**. Isso é deliberado e segue a regra de que o prazo deriva da classe de referência e
não da moldura do documento: os três dependem, respectivamente, de disputa sobre licenciamento de
dado público municipal, de dois ciclos de negociação coletiva e da adoção de metadado de
procedência num formato de mídia — nenhuma dessas três referências mede menos de cinco anos a
partir do efeito-pai. O leitor deve tratá-los como continuação da cadeia causal **fora** da janela
que o briefing pediu, e não como previsão para 2036.

**Regra de parada.** Parei a derivação em três níveis em todos os ramos, e em dois ramos parei
antes (e2.2, e5.1, e7.1, e8.1, e9.1, e10.2, e11.2, e6.2, e4.1 não têm filhos) porque o candidato
a filho era o mesmo efeito mais adiante no tempo, sem troca de ator nem de mecanismo — por
exemplo, "o codec de splat define a escolha de motor" → "mais motores suportam mais codecs" é
amadurecimento, não nova ordem.

### Cruzamentos

**Convergência 1 — o poder migra do arquivo para o publicador.** e1.2 (editor de splat no
navegador ocupa o centro do fluxo, vindo de R1) e e7.1 (a cláusula de exportação vira critério de
compra, vindo de R2) chegam ao mesmo lugar por caminhos independentes: quem controla a etapa de
publicação controla o ativo, independentemente de quem o capturou e de qual formato venceu.
Convergência de raízes diferentes é o achado mais forte do mapa.

**Convergência 2 — de execução para direção.** e9.1 ("dirigir a captura" vira ofício, de R2) e
e11.1 (a especificidade do lugar vira o bem escasso, de R3) convergem em um enunciado único: o
valor profissional migra da execução (modelar, texturizar) para a **escolha** — que lugar, que
percurso, que luz, o que fica de fora. É a resposta deste mapa à pergunta de 2ª ordem da
disciplina sobre o futuro do modelador, e ela não é "o modelador acaba": é "o modelador vira
diretor de fotografia de captura".

**Retroalimentação.** e3 freia R1 (sem formato único, ninguém migra) mas **produz** e3.1
(padronização), que acelera R1. O ciclo é: adoção parcial → dor de interoperabilidade → pressão
por padrão → padrão → adoção maior. Com um efeito colateral cruel: o padrão escolhe vencedores
retroativamente e mata acervo (e3.1.1). O mesmo ciclo negativo existe em R2: e9 (falha no que o
sensor não viu) freia e6 (captura amadora publicável), e o freio é físico — não some com mais
computação.

**Contradição 1 — o ativo capturado vale menos ou vale mais?** e4 diz que o cenário capturado
vira abundante e a loja de ativos perde; e11.1 diz que a captura de lugar específico vira escassa
e cara. Não podem valer plenamente ao mesmo tempo. **O que decide:** se a geração (R3) atinge
consistência métrica suficiente para substituir o lugar *comum*. Se atingir, o comum colapsa em
valor (e4 vence para o genérico) e só o singular sobrevive com preço (e11.1 vence para o raro) —
que é, de fato, a síntese mais provável: os dois efeitos descrevem metades diferentes do mesmo
mercado, e os deixo os dois no mapa por isso.

**Contradição 2 — captura livre ou captura concentrada?** e6 descreve captura ubíqua e
descentralizada; e7 descreve acervo concentrado em poucas plataformas que não devolvem o bruto.
**O que decide:** portabilidade. Se aparecer pipeline aberto rodando no dispositivo — e o
Hyperscape migrando o render da nuvem para o aparelho em dois meses é um sinal nessa direção —,
e6 vence. Se o processamento pesado continuar na nuvem, e7 vence e a captura ubíqua alimenta um
acervo alheio. Não resolvo: registro o que decide.

## 6. Sinais fracos e wildcards

**SF1 — Reconstrução como programa, não como dado.** Ferramentas que devolvem **código
procedural** capaz de redesenhar o objeto, em vez de uma malha ou uma nuvem, aparecem hoje só na
borda (é o caso do `img2threejs`, levantado pela própria turma). *O que mudaria:* a cena
deixaria de ter peso de dado e passaria a ter peso de programa — e5 e e2.2 desapareceriam, e o
ativo 3D voltaria a ser editável, porque programa se edita. *Sinal observável de crescimento:*
um formato procedural aparecer como opção de **importação** num DCC ou engine grande, ou um
trabalho em SIGGRAPH comparando fidelidade de reconstrução procedural com splat na mesma métrica.

**SF2 — Splat sobre sensor não-óptico.** Apareceu na varredura de literatura trabalho aplicando
splatting a imageamento de sonar. *O que mudaria:* captura deixaria de depender de luz — fumaça,
água turva, escuridão —, e o conjunto de lugares capturáveis cresceria de um jeito que este mapa
não previu. *Sinal observável:* um aplicativo de consumo anunciando captura em baixa luz sem
flash, ou um fabricante de celular embarcando radar para reconstrução.

**SF3 — O modelo geoespacial como chão dos modelos de mundo.** A Niantic Spatial posiciona o LGM
como a camada georreferenciada que falta aos modelos de mundo e vende para IA corporificada,
defesa e óleo e gás — não para mídia. *O que mudaria:* o acervo de captura do mundo deixaria de
ser insumo de entretenimento para ser infraestrutura de robótica, e as prioridades de qualidade
(precisão métrica, localização a centímetros) passariam a ser ditadas por quem paga mais, que
não é o estúdio. *Sinal observável:* um robô ou drone comercial usando VPS/LGM em ambiente sem
GPS numa operação de rotina, publicada com números.

**SF4 — O render volta para o dispositivo.** O Hyperscape saiu da nuvem para o aparelho cerca de
dois meses depois do lançamento. *O que mudaria:* a contradição 2 se resolve a favor de e6 e o
efeito e7 perde força. *Sinal observável:* exportação de arquivo bruto virar recurso anunciado
por uma plataforma grande de captura.

**Wildcard 1 — o splat de uma pessoa, sem consentimento, numa obra comercial, e uma decisão
judicial brasileira pela LGPD.** *Mecanismo:* a captura de um corpo em espaço público produz
geometria corporal identificável; no Brasil isso é dado pessoal, e possivelmente sensível, com
base legal exigida — sem depender de direito autoral nem de lei sobre IA. *Por que é improvável:*
exige que alguém identifique a origem de um splat dentro de uma obra acabada, e não há hoje
técnica forense para isso nem prática de perícia. *O que faria com o mapa:* e10.1 (procedência
assinada) saltaria de 2032 para dentro de dois anos, e e6 seria estrangulado — captura amadora
publicável se tornaria juridicamente arriscada antes de virar hábito. *Sinal precoce:* a primeira
notificação extrajudicial brasileira contra uma cena publicada em `superspl.at` ou equivalente.

**Wildcard 2 — vazamento de um acervo de interiores domésticos.** *Mecanismo:* o processamento em
nuvem concentra, num único lugar, reconstruções navegáveis do interior de um número grande de
casas — inclusive com o que estava sobre a mesa. Um vazamento não expõe fotos; expõe plantas
navegáveis. *Por que é improvável:* exige falha de segurança em empresa com maturidade alta.
*O que faria com o mapa:* regulação de captura de interior em menos de dezoito meses, fim do
recurso de captura em headset de consumo, e a raiz R2 se reduziria à metade profissional.
*Sinal precoce:* uma plataforma de captura passar a oferecer processamento exclusivamente local
como diferencial de privacidade — ou seja, SF4 virando argumento de marketing.

**Wildcard 3 — um só ator encerra a guerra de formatos por decreto de plataforma.** *Mecanismo:*
Epic ou Apple embarcam um formato de splat no motor ou no sistema operacional e o tornam o
caminho de menor resistência; o mercado converge em um ano, sem consórcio. *Por que é
improvável:* os dois já tiveram a oportunidade e não a tomaram — em 2026 ainda não há módulo de
primeira parte no Unreal. *O que faria com o mapa:* e3 (a retroação principal de R1) perderia
força e toda a cadeia de R1 antecipa dois a três anos; e3.1.1 (acervo ilegível) aconteceria mais
rápido e maior. *Sinal precoce:* um anúncio de suporte de primeira parte numa keynote de engine
ou de sistema operacional, não em blog de plugin.

## 7. Contra o próprio mapa

Rodei a bateria do §6 da skill sobre o mapa já escrito, e alterei o mapa. O registro auditável
está no fim desta seção.

### 7.1 Pré-mortem — é 2036 e este mapa se mostrou errado. Por quê?

**(a) Porque splat ficou sendo um formato de *entrega*, nunca de *trabalho*.** A hipótese mais
provável de fracasso é a mais chata: a indústria adota splat para publicar e visualizar — que é
onde ele já está — e continua modelando malha para tudo que precisa ser editado, animado ou
iluminado. Nesse mundo, R1 não rompe nada: vira um codec de saída. O sintoma seria a edição
semântica nunca chegar. *Consequência aplicada:* rebaixei **e1** de confiança alta para média.

**(b) Porque a captura ambiente estacionou em rascunho.** Se a falha sob oclusão não for
resolvida — e é um limite de informação, não de computação —, a captura de consumo continua boa
para lembrança e ruim para produção. R2 perde a metade profissional e sobra a metade de
privacidade. *Consequência aplicada:* **e9** (a retroação) foi promovida a sinal forte e mantida
com confiança alta, e é o efeito de que mais desconfio no sentido inverso: ele pode estar
*subestimado*.

**(c) Porque a assimetria jurídica foi corrigida cedo.** Se um regulador tratar espaço
construído como as leis tratam semelhança pessoal, e12 se inverte, e com ele e11.1.1 e e12.1.
*Consequência aplicada:* rebaixei **e12** de 2029 para 2030 e mantive confiança média, e não
alta, apesar do sinal documentado.

### 7.2 Extrapolação linear

**e5** ("banda e armazenamento crescem") é "mais do mesmo, maior" — é a curva de sempre da mídia,
e serviria para qualquer tema desta disciplina. Só não caiu porque tem um mecanismo de
não-linearidade específico: cena navegável não é vídeo com mais bits, é tráfego com padrão de
acesso diferente (aleatório, dependente de ponto de vista), e é isso que produz uma categoria
tarifária nova em vez de um preço maior. Ainda assim, rebaixei **e5** para confiança **baixa**.

**e8.1** ("bibliotecas de movimento perdem valor") também é extrapolação de um argumento
econômico genérico. Mantive porque o mecanismo é específico (captura sob demanda mais barata que
busca), mas registro que é o efeito mais frouxo do ramo R2.

### 7.3 Velocidade de adoção, contra a classe de referência

A classe de referência que **medi nesta rodada**, e não fui buscar na memória: do paper de 3DGS
(jul/2023) ao primeiro suporte nativo numa ferramenta líder de composição (Nuke 17.0, fev/2026)
passaram-se **31 meses**; à proposta de padronização de streaming (3D Tiles 2.0, abr/2026),
**33 meses**. Isso mede **ferramenta**, e ferramenta é rápida. Não encontrei, em nenhuma fonte
aberta, uma medida de quanto tempo leva de "ferramenta suporta" a "o ofício trabalha assim" —
e é justamente esse intervalo que os prazos deste mapa precisam. Na falta dela, apliquei uma
regra explícita: **efeito sobre prática profissional recebe prazo pelo menos três anos depois do
efeito sobre ferramenta que o habilita.** Foi o que empurrou e1.2 para 2031 e e2.2 de 2030 para
2031.

Duas outras referências que uso na prosa vêm da minha memória e **não** foram abertas nesta
rodada — estão marcadas como tais na §8 e devem ser lidas como analogia, não medida: VR de
consumo (mais de dez anos sem chegar a 10% de adoção) e fotogrametria de celular de 2012, que
nunca substituiu pipeline nenhum. A segunda é o melhor argumento contra a euforia de R2: já
houve uma onda de "qualquer um captura em 3D", e ela morreu na qualidade.

### 7.4 E se a raiz não acontecer?

**Sem R1** (splat nunca vira formato de trabalho): sobram R2 e R3 inteiras. Captura ambiente
continua sendo um problema de privacidade e de acervo mesmo que a produção ignore splats; geração
continua colapsando registro e ficção. Perde-se todo o ramo e1-e5 — cinco de doze efeitos de 1ª
ordem. O mapa encolhe, não morre.

**Sem R2** (a captura continuar exigindo equipamento e intenção visível): perdem-se e6 a e9, e
com eles a parte mais original do mapa — mas R1 sobrevive via captura profissional, e R3 sobrevive
inteira, porque geração não depende de captura fácil.

**Sem R3** (a geração não atingir consistência suficiente): perdem-se e10, e11, e12 e toda a
discussão de procedência. R1 e R2 seguem de pé.

Nenhuma raiz é disfarce das outras: cada uma retira um terço distinto do mapa. Mas há um
acoplamento real que registro: **R3 depende de R1 para o efeito e11** — é a exportação em splat
que faz a cena gerada entrar no mesmo lugar da capturada. Se R1 falhar, e11 e e10 ficam mais
lentos, não impossíveis.

### 7.5 Suposições escondidas

Listo as que o mapa assumia sem dizer, e o que muda se quebrarem:

1. **O código de referência continua permissivo.** O 3DGS é MIT hoje. Se a próxima geração de
   reconstrutores vier sob licença restritiva de pesquisa, a comunidade aberta perde o ponto de
   partida e e1, e2 e e4 desaceleram. *Vira wildcard novo.*
2. **A plataforma continua permitindo publicar.** Todo o ramo e6 assume que existe onde publicar
   cena capturada. Uma mudança de termos de uso em duas ou três plataformas fecha isso por
   contrato, mais rápido que qualquer lei.
3. **GPU continua acessível.** Treinar na qualidade do paper pede 24 GB de VRAM. Se o preço de
   memória de vídeo subir por disputa com treino de modelos grandes, a captura de qualidade volta
   a ser serviço de nuvem — o que reforça e7 e enfraquece e6.
4. **Regulação de dado não trata geometria de espaço como dado pessoal por padrão.** Se tratar, o
   mapa inverte: e6 morre, e6.2 vira 1ª ordem.
5. **Não há um evento de confiança catastrófico.** O wildcard 2 é a quebra desta.

### 7.6 Viés do autor

Este mapa gosta demais de duas coisas. A primeira é a **tese da "direção de captura"**
(convergência 2): ela é elegante, salva o profissional em vez de eliminá-lo, e é exatamente o
tipo de conclusão confortável que um professor de uma disciplina de mídia e interação quer que
seja verdadeira. Pode ser complacência: o desfecho igualmente plausível é que dirigir captura
seja uma competência tão barata de adquirir que não sustente um ofício. A segunda é o **peso
dado ao Brasil entrar pelo poder público** (e7.2): a evidência é real, mas são três ou quatro
projetos municipais, e eu os tratei como tendência porque eles são interessantes para esta turma.
Rebaixei e7.2 para 2032 por isso.

Há um terceiro viés, de sinal contrário, que registro para o confronto em aula: eu **não** tenho
simpatia pela tese de que "tudo vira fotorrealista por padrão", e é possível que por isso e2.1
esteja subespecificado — pode ser que o fotorrealismo por captura seja muito mais dominante do
que este mapa admite.

### 7.7 Calibração

Distribuição final: ordem 1 — alta 5, média 6, baixa 1. Ordem 2 — alta 0, média 12, baixa 7.
Ordem 3 — alta 0, média 0, baixa 10. A confiança cai com a ordem, como exige a skill. Antes da
bateria havia duas confianças altas na 2ª ordem e a 1ª ordem tinha 7 altas.

### 7.8 Registro de alterações (antes → depois)

- **e1: confianca alta → media** — porque o pré-mortem (a) é o cenário de falha mais provável do
  mapa inteiro e atinge exatamente este efeito.
- **e1.2: prazo 2030 → 2031** — porque a regra dos três anos entre ferramenta e prática se aplica:
  a ferramenta (SuperSplat) é de hoje; a competência de entrada mudar é prática.
- **e2.2: prazo 2030 → 2031** — mesma regra.
- **e4: sinal medio → fraco** — porque eu ia sustentá-lo com a existência de lojas de splat que
  vi em resultado de busca e **não abri**; sem artefato verificado, o sinal é inferência.
- **e5: confianca media → baixa** — porque é extrapolação linear com mecanismo fino demais.
- **e6.2: confianca media → baixa, e sinal medio → fraco** — porque o precedente brasileiro que
  eu pretendia citar (processos da ANPD sobre reconhecimento facial em estádios) veio de resumo
  de busca e não de página aberta; sem a fonte, o efeito perde o artefato que o sustentava.
- **e7.2: prazo 2030 → 2032** — por viés declarado do autor (§6 acima): três projetos municipais
  não são uma classe de referência.
- **e9: sinal medio → forte** — promovido, não rebaixado: há relato de uso documentando a falha,
  e o limite é físico.
- **e10.1: confianca media → baixa** — porque exigência de procedência depende de um setor
  inteiro mudar prática de perícia, e não achei nenhum sinal disso.
- **e12: prazo 2029 → 2030** — porque a classe de referência do próprio projeto de lei é
  desfavorável: tramita desde 2023, foi reapresentado duas vezes e em setembro de 2026 ainda não
  é lei.
- **e3.1.1: prazo 2034 → 2036** — conferência de teto (§7.9); referência: 5 a 8 anos entre a
  vitória do formato e a ilegibilidade prática do acervo.
- **e7.2.1: prazo 2034 → 2037, agora FORA da janela** — conferência de teto; referência: 4 a 6
  anos da criação do acervo público à primeira contestação sobre uso comercial.
- **e8.2.1: prazo 2034 → 2037, agora FORA da janela** — conferência de teto; referência: dois
  ciclos de negociação coletiva no audiovisual, ~3 anos cada.
- **e10.1.1: prazo 2035 → 2037, agora FORA da janela** — conferência de teto; referência: mais de
  5 anos da especificação de metadado de procedência à exibição por padrão.
- **e12.1.1: prazo 2034 → 2036** — conferência de teto; referência: 4 a 5 anos entre o volume de
  notificação existir e o apagamento virar etapa automática.
- **REMOVIDO e1.3** ("escolas de cinema e de jogos reorganizam o currículo em torno de captura")
  — efeito genérico proibido pela skill; serve para qualquer um dos 19 temas e eu não tinha nome
  de curso nem mecanismo. Vai para a §12.
- **REMOVIDO e6.3** ("surge a profissão de auditor de captura") — mesmo motivo. §12.
- **REMOVIDO e11.3** ("o mercado de ativos 3D desaparece") — extrapolação linear sem mecanismo de
  não-linearidade, e contradiz e11.1 sem que eu soubesse dizer o que decide. §12.

Cota da skill cumprida: pelo menos um efeito rebaixado ou removido por raiz (R1: e1, e5, e1.3;
R2: e6.2, e7.2, e6.3; R3: e10.1, e12, e11.3). A bateria derrubou coisa — e a conferência de
teto da §7.9, feita depois dela, derrubou mais cinco prazos que a bateria tinha deixado passar.

### 7.9 Conferência de teto — os prazos terminais encostados no horizonte

A TMI-0080 estabeleceu que, em rodada de horizonte longo, `prazo > horizonte em ordem 3: 0` é
**suspeita de compressão** e não conformidade; a TMI-0081 estendeu a obrigação às rodadas `h2036`
depois de medir um contraexemplo; e a TMI-0086 trocou o gatilho do contador para a **densidade da
faixa `[horizonte-2, horizonte]`**. Esta rodada disparou os dois gatilhos ao mesmo tempo: o
contador saiu em **zero** e a faixa `[2034, 2036]` concentrava **5 dos 19 prazos terminais
(26,3%)**, acima do limite de um quarto. Conferi os cinco, um a um.

| id | prazo antes | classe de referência usada | prazo depois |
|---|---|---|---|
| `e3.1.1` | 2034 | ilegibilidade prática de acervo após vitória de formato: 5 a 8 anos depois do padrão vencer, que é quando os mantenedores param de manter conversores. A partir de `e3.1` (2030) | **2036** |
| `e7.2.1` | 2034 | disputa sobre uso comercial de acervo público municipal: 4 a 6 anos da criação do acervo à primeira contestação formal. A partir de `e7.2` (2032) | **2037** |
| `e8.2.1` | 2034 | mudança de estrutura de remuneração em acordo coletivo do audiovisual: dois ciclos de negociação, ~3 anos cada. A partir de `e8.2` (2031) | **2037** |
| `e10.1.1` | 2035 | adoção de metadado de procedência em formato de mídia: mais de 5 anos da especificação à exibição por padrão, e ainda incompleta em 2026. A partir de `e10.1` (2032) | **2037** |
| `e12.1.1` | 2034 | automação de apagamento em resposta a notificação privada em volume: 4 a 5 anos a partir de o volume existir. A partir de `e12.1` (2032) | **2036** |

**Os cinco estavam comprimidos. Nenhum foi confirmado.** É o pior resultado possível da
conferência, e o mecanismo do erro é exatamente o que a TMI-0086 descreve: eu não derivei o prazo
do filho, **estimei somando dois a três anos ao do pai** e depois conferi se cabia na janela.
Como cabia, o verificador deu `ok` e eu escrevi, na primeira versão da §7.7, que a calibração
estava boa. Estava — a de confiança. A de calendário estava viciada, e viciada para o mesmo lado
em cinco de cinco casos, o que já não é ruído.

Depois da re-derivação, o contador de efeitos de 3ª ordem fora da janela subiu de **0 para 3**
(`e7.2.1`, `e8.2.1` e `e10.1.1`, todos em 2037), declarados na prosa da §5 conforme a TMI-0055, e
a faixa `[2034, 2036]` caiu para **2 de 19 (10,5%)** — abaixo do gatilho. A faixa final **não**
ficou vazia, o que afasta também a hipótese oposta da TMI-0085: as classes de referência deste
tema (5 a 8 anos cada) encadeadas três vezes a partir de 2026 chegam naturalmente ao fim da
janela de dez anos, e é por isso que ela está ocupada.

A lição para quem ler a escada de horizontes depois: **em horizonte de dez anos a compressão é o
estado natural do mapa, não a exceção.** Com três classes de referência institucionais encadeadas
e uma janela de dez anos, a terceira ordem encosta no teto por construção, e declarar quatro
efeitos fora da janela parece, na hora de escrever, um mapa que não cumpriu o que foi pedido. É
precisamente essa sensação que produz o erro.

## 8. O que a máquina errou

Eu sou a máquina. Sobre esta rodada, especificamente:

1. **Ia afirmar que a ANPD instaurou processos contra 23 clubes de futebol por reconhecimento
   facial em estádios em 2025**, para sustentar e6.2. O número apareceu num resumo de busca; eu
   **não abri** a página. Tirei o número do texto, rebaixei o efeito, e registro aqui o buraco.
   Era o tipo de dado — específico, redondo, conveniente — que passa despercebido numa leitura
   rápida e que eu teria citado sem pestanejar se não estivesse sob a regra de só citar o que
   abri.

2. **Usei um blog de fornecedor (Volinga) como fonte de que o filme *Superman* usou ferramentas
   3DGS em Houdini.** É alegação de vendor sobre produção de terceiro, sem confirmação do estúdio
   nem do supervisor de VFX. Mantive porque é um dos poucos indícios de uso em produção de alto
   orçamento, mas ela sustenta *sinal*, não *fato*, e o efeito e1 não depende só dela.

3. **Divergência de data no lançamento do Marble.** O blog do próprio World Labs diz 11/11/2025;
   um resumo de terceiro diz 12/11/2025. Usei a data do fabricante. É um dia, não muda nada, mas
   é exatamente o tipo de discrepância que se propaga sem ninguém conferir.

4. **Não achei nenhum número de adoção** — usuários, downloads, número de estúdios — para
   Scaniverse, Polycam, Luma AI ou para uso de splat em produção. A tentação de escrever "milhões
   de usuários" era grande e o texto ficaria melhor. Escrevi "sem número encontrado". O único
   número de mercado que encontrei (captura de movimento sem marcador indo de US$ 15,21 bi a
   US$ 74,33 bi entre 2025 e 2035) vem de consultoria cuja metodologia não abri, e por isso não
   sustenta nada aqui — projeção de CAGR a dez anos em mercado emergente é o gênero de número
   menos confiável que existe.

5. **Duas classes de referência deste documento vêm da minha memória, não de fonte aberta nesta
   rodada:** "VR de consumo levou mais de dez anos e ainda não chegou a 10%" e "a fotogrametria
   de celular de 2012 nunca substituiu pipeline". Ambas aparecem na §7 e ambas estão marcadas
   lá. Quem for usar este mapa para decidir alguma coisa precisa verificá-las.

6. **"10,2 mil estrelas no SuperSplat" e "23,9 mil no repositório do 3DGS" são números vivos**,
   que mudam todo dia e que medem interesse de desenvolvedor, não adoção. Valem como ordem de
   grandeza na data de leitura (22/09/2026) e mais nada. Usá-los como prova de adoção seria erro,
   e é um erro comum.

7. **O efeito e5.1** ("compressão neural de cena vira especialidade contratada") se apoia numa
   lista de cinco vagas publicada numa newsletter — Bosch, Swaybox, TikTok, CoStar, Booz Allen.
   Cinco vagas não são um mercado de trabalho, e nenhuma delas tem "compressão de splat" no
   título. O mecanismo é plausível; o artefato é fraco, e por isso o efeito saiu com sinal fraco
   e confiança baixa em vez de sumir.

8. **Comprimi cinco prazos terminais contra o teto do horizonte, e os cinco.** Não quatro de
   cinco, não três: **os cinco**. E só percebi porque uma decisão em vigor do contexto (TMI-0121,
   que manda consultar a família de horizonte antes de dar a rodada por pronta) me obrigou a
   fazer a conferência de teto depois de o verificador já ter impresso `RESULTADO: ok`. O
   mecanismo do erro é simples e mecânico: derivei o prazo de cada neto **somando dois a três anos
   ao do pai** e conferi se cabia em 2036 — em vez de derivar da classe de referência, que é a
   única coisa que a skill exige e a única que distingue este método de chute. Como cabia, o
   contador de "prazo > horizonte" saiu em zero e eu escrevi na primeira versão da §7.7 que a
   calibração estava boa. A de confiança estava; a de calendário estava viciada, e viciada para o
   mesmo lado em cinco de cinco casos. Ver §7.9.

9. **Duas das classes de referência da §7.9 também vêm da minha memória, não de fonte aberta.**
   O prazo de `e10.1.1` apoia-se em quanto tempo levou um padrão de metadado de procedência em
   mídia (da especificação à exibição por padrão) e o de `e12.1.1`, no histórico do borrão de
   rosto e placa na fotografia de rua em serviço de mapas. Nenhuma das duas foi verificada nesta
   rodada. Elas empurraram prazos para longe, não para perto — mas o sentido do erro não muda que
   é erro, e quem usar estes dois anos precisa conferir as referências.

## 9. Três cenários para 2036

**Provável.** Em 2036 splat é o formato em que o mundo real circula, e malha é o formato em que
as coisas inventadas circulam — a divisão de trabalho que ninguém planejou e que todo mundo
seguiu. A briga de formatos terminou por volta de 2030, com a vitória da cadeia de streaming
geoespacial, e um mercado pequeno e constante de reprocessar acervo antigo. Estúdios de porte
médio entregam cenário capturado como rotina e a função que mais cresceu não é modelador nem
"artista de splat": é quem planeja a captura — percurso, horário, cobertura, o que não pode
aparecer. O headset continua sendo equipamento de nicho, mas o celular captura bem o suficiente
para a maioria das pessoas nunca ter pensado no assunto. Lojas e museus têm regra sobre captura,
que ninguém fiscaliza; o litígio, quando acontece, é sobre a cena publicada. Cena gerada e cena
capturada são indistinguíveis a olho nu e ninguém se importa muito, exceto perito, seguradora e
redação — que trabalham com um padrão de procedência que existe, funciona mal e é ignorado por
metade das ferramentas. No Brasil, os maiores acervos de captura urbana são públicos e
municipais, e quem faz mídia negocia com secretaria. *Sinal precoce de que estamos aqui:* uma
engine grande anuncia suporte de primeira parte a splat e, no mesmo ano, uma prefeitura
brasileira publica licença de uso do seu gêmeo digital.

**Desejável.** O mesmo mundo, com três coisas que não vieram de graça. Primeira: **procedência
funciona** — o arquivo carrega, de forma verificável, o que foi medido e o que foi inventado, e
os visualizadores mostram isso por padrão; isso não impede ninguém de gerar, só impede que
geração passe por medição. Segunda: **quem captura exporta** — portabilidade de captura virou
requisito de mercado antes de virar lei, porque compradores profissionais recusaram plataforma
que prende arquivo, e o efeito respingou no consumo. Terceira: **o espaço tem alguma proteção**,
proporcional e não paralisante: consentimento presumido para espaço público, exigido para
interior privado, com apagamento automático de rosto e de marca como etapa padrão de publicação —
o equivalente cultural do borrão do Street View, incorporado sem drama. Para chegar aqui foi
preciso que a discussão de procedência começasse antes do primeiro escândalo, e não depois.
*Sinal precoce:* uma plataforma grande anuncia exportação de arquivo bruto **como vantagem
competitiva**, e um formato de splat incorpora metadado de procedência na especificação.

**Indesejável.** A captura ficou fácil e o acervo ficou de três empresas. O interior de milhões
de casas foi digitalizado por headsets de consumo e vive em servidores que ninguém auditou;
houve um vazamento, e a reação foi proibir captura de interior em vez de exigir processamento
local — o que matou a captura amadora e não tocou em quem já tinha o acervo. Como só a semelhança
humana foi protegida, capturar lugar virou o caminho de menor risco, e a cópia navegável de
qualquer estabelecimento existe sem que o dono tenha sido consultado. Procedência nunca colou:
cena gerada e cena capturada são a mesma coisa para efeitos práticos, o que esvaziou a
reconstituição forense, o jornalismo imersivo e a vistoria remota — não porque as ferramentas
sumiram, mas porque ninguém mais acredita nelas. Do lado do trabalho, a queda do custo de
cenário não redistribuiu nada: quem tinha acervo de captura ficou com a vantagem, e o ofício de
quem modelava desapareceu sem que a "direção de captura" se firmasse como profissão, porque
planejar percurso acabou embutido no aplicativo. *Sinal precoce:* uma plataforma de captura
grande muda os termos de uso para reivindicar direito amplo sobre as reconstruções feitas por
usuários — e ninguém migra, porque não há para onde.

## 10. O experimento

### O que é

**"O mesmo lugar, três vezes."** Escolhe-se um espaço concreto e reconhecível do CIn — o hall, o
corredor do bloco, a sala de aula — e produzem-se **três** versões 3D navegáveis dele:

- **A — capturada:** varredura de celular (Scaniverse ou equivalente), limpa e publicada no
  navegador pelo SuperSplat, em SOG.
- **B — reconstruída de uma imagem só:** uma única foto do mesmo lugar passada por um
  reconstrutor feed-forward da classe TripoSR/Hunyuan3D, ou por estimativa de profundidade
  monocular (Depth Anything V2) projetada em splat.
- **C — gerada:** uma descrição em texto do lugar — escrita por quem conhece o espaço, sem
  nenhuma imagem dele — passada por um gerador de mundo da classe Marble, exportada em splat.

As três são publicadas no mesmo visualizador, com a mesma moldura, **sem identificação**, em
ordem aleatória, e ficam disponíveis por link. A turma percorre as três no navegador e responde
três perguntas: (1) qual é a capturada? (2) qual você usaria para um jogo, e qual para provar
que o extintor estava na parede? (3) o que você viu que te fez decidir?

### Que pergunta sobre o futuro ele responde

A pergunta do efeito **e10**: *quando a captura deixa de ser distinguível da geração, e o que se
perde nesse momento.* O experimento não pergunta se as três ficaram bonitas — pergunta se a
diferença entre medir e inventar ainda é **perceptível por quem vai usar**. Se não for, todo o
ramo R3 deste mapa está certo e a procedência deixa de ser preciosismo. De quebra, o experimento
testa e9: as três versões falham em lugares diferentes, e a falha é a assinatura de cada método.

### Que tecnologia emergente usa, e por que não dá com a madura

Usa 3DGS (captura e publicação), reconstrução feed-forward de imagem única e geração de mundo —
as três emergentes. **Não dá com tecnologia madura** por razões distintas em cada trilha: a
fotogrametria clássica exigiria centenas de fotos, horas de processamento e não roda no
navegador, o que inviabiliza a versão A no tempo de uma aula; e as versões B e C **não existem**
em tecnologia madura — reconstruir de uma foto só ou gerar de uma frase não é uma versão pior de
algo antigo, é uma capacidade que não havia. A comparação cega entre as três só é possível porque
as três saem no mesmo formato, e isso é exatamente o fato novo que o mapa identifica em R3.

### O que a turma faz quando testar em sala

Quinze minutos de percurso cego nas três cenas, com voto individual registrado antes de qualquer
discussão (a ordem importa: discussão em grupo contamina o voto). Depois, revela-se qual é qual e
a turma reconstrói, coletivamente, a **lista de pistas** que usou — e a lista é o produto
intelectual do experimento, não o placar. Por fim, cada um escreve uma linha respondendo: "o que
eu exigiria para aceitar uma cena 3D como prova?". Essas linhas são o material da discussão sobre
e10.1.

### O resultado que me faria mudar de ideia

Se a turma identificar a versão capturada **com acerto consistente e acima do acaso — digamos,
80% ou mais — e souber dizer por quê**, então captura e geração não estão colapsando: continuam
sendo dois objetos com assinatura própria, e o efeito **e10 deve ser rebaixado ou removido**, com
ele e10.1, e10.2 e boa parte da urgência de R3. Se, ao contrário, o acerto ficar perto do acaso
(33%) e as justificativas forem contraditórias entre si, R3 está subestimada neste mapa e os
prazos de e10 e e11 devem ser antecipados.

Registro o inverso também, porque é o resultado mais provável e o menos conclusivo: se o acerto
ficar na faixa de 50-60%, o experimento não decide nada sobre o futuro — decide apenas que em
2026 ainda dá para notar, o que já sabíamos. Nesse caso, o valor está inteiramente na lista de
pistas.

## 11. Fontes

Todas abertas e lidas em 22/09/2026. Fonte que não abriu não entrou — o que ficou de fora está
registrado na §12.

1. **3D Gaussian Splatting for Real-Time Radiance Field Rendering** (Kerbl, Kopanas, Leimkühler,
   Drettakis — Inria / Côte d'Azur / MPI Informatik, SIGGRAPH 2023)
   `https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/`
   Sustenta a data e a métrica fundadora (≥100 fps a 1080p, julho de 2023) e a atribuição correta
   do trabalho. *Confiabilidade:* alta — página oficial do laboratório autor, artigo revisado por
   pares em periódico de referência da área.

2. **Repositório de referência do 3DGS** (graphdeco-inria)
   `https://github.com/graphdeco-inria/gaussian-splatting`
   Sustenta a licença MIT (uso comercial permitido), o requisito de 24 GB de VRAM para treino na
   qualidade do paper, e a ordem de grandeza de interesse (23,9 mil estrelas). *Confiabilidade:*
   alta para licença e requisitos (primeira parte); as estrelas são medida de interesse, não de
   adoção.

3. **A Survey on 3D Gaussian Splatting** (Chen & Wang, arXiv 2401.03890)
   `https://arxiv.org/abs/2401.03890`
   Sustenta que o campo segue acelerado: v1 em 08/01/2024, v9 em 09/04/2026. *Confiabilidade:*
   média-alta — survey amplamente citado, mas preprint; usei só o metadado de versões, que é
   verificável na própria página.

4. **PlayCanvas abre a especificação do SOG**
   `https://blog.playcanvas.com/playcanvas-open-sources-sog-format-for-gaussian-splatting/`
   Sustenta a data (17/09/2025) e os números de compressão (1 GB → 42 MB em 4 M de gaussianas;
   2-3× sobre PLY comprimido). *Confiabilidade:* média-alta — é a empresa falando do próprio
   formato, mas a especificação é aberta e os números são reproduzíveis por terceiros.

5. **SuperSplat — manual do usuário (PlayCanvas)**
   `https://developer.playcanvas.com/user-manual/supersplat/`
   Sustenta o fluxo de edição e publicação direta na web e a conversão automática para SOG.
   *Confiabilidade:* alta para o que a ferramenta faz (documentação de produto).

6. **SuperSplat — repositório**
   `https://github.com/playcanvas/supersplat`
   Sustenta licença MIT, execução no navegador sem instalação, e a ordem de grandeza de tração
   (10,2 mil estrelas, 759 commits na data da leitura). *Confiabilidade:* alta para licença e
   funcionamento.

7. **Onde o Gaussian Splatting funciona: plugins e suporte nativo por engine e DCC**
   (Radiance Fields)
   `https://radiancefields.com/3d-gaussian-splatting-engine-support`
   Sustenta o inventário de suporte nativo (Nuke 17.0 em fev/2026 e 17.1v1 em 20/08/2026,
   Houdini 21-22, Arnold 7.5.2, Corona 14, D5 Render 3.0, OctaneRender 2026.1, Notch 2026.2,
   SketchUp, RealityScan 1.5+, ComfyUI 0.23.0, V-Ray 7) e a **ausência** de módulo de primeira
   parte no Unreal e no Unity. *Confiabilidade:* média-alta — publicação especializada,
   inventário conferível item a item, mas curadoria de terceiro.

8. **4D Gaussian Splatting: vídeo volumétrico, explicado** (Radiance Fields)
   `https://radiancefields.com/4d-gaussian-splatting`
   Sustenta os números de transporte e de produção: Gracia a 80/17 Mbps com 25+ cenas em Vision
   Pro, Quest, Pico, macOS e Steam; filme de 11,5 min em 4DGS na SIGGRAPH 2026; rig de 70 câmeras
   4K PTZ a ~US$ 80 mil comprimindo ~8 Gbps para 30-60 Mbps na NAB 2026. *Confiabilidade:*
   média-alta — publicação especializada com datas e eventos verificáveis; os preços são de
   demonstração de feira e devem ser lidos como ordem de grandeza.

9. **As últimas em 3DGS: ferramentas, avanços e vagas** (Radiance Fields, newsletter)
   `https://radiancefields.substack.com/p/the-latest-in-3dgs-tools-breakthroughs`
   Sustenta a existência de vagas especializadas (Bosch, Swaybox, TikTok, CoStar, Booz Allen) e a
   expansão de suporte em Blender, Cinema 4D, UNIGINE. *Confiabilidade:* média — newsletter de
   curadoria; cinco vagas não formam mercado, e usei o dado com essa ressalva explícita (§8).

10. **The Next Big Thing in Splats: 2025's Turning Point and 2026's Acceleration** (Volinga)
    `https://web.volinga.ai/2025-turning-point-and-2026-trends-blog/`
    Sustenta o pipeline LiDAR→Unreal "em horas" com a XGRIDS e a alegação de uso de 3DGS em
    Houdini na produção de *Superman*. *Confiabilidade:* **baixa-média** — blog de fornecedor
    falando do próprio produto e de produção de terceiro sem confirmação do estúdio. Sustenta
    sinal, não fato (ver §8, item 2).

11. **3D Gaussian Splats com nível de detalhe hierárquico em 3D Tiles** (Cesium, 27/04/2026)
    `https://cesium.com/blog/2026/04/27/3d-gaussian-splats-lod/`
    Sustenta a padronização de streaming (proposta 3D Tiles 2.0, padrão comunitário OGC), o
    dataset de 110 M de splats a partir de 20.169 fotos (427,7 gigapixels, 3,7 km², 3 cm de
    amostragem) e a redução de até 90% do SPZ sobre PLY. *Confiabilidade:* alta para os números
    técnicos e a via de padronização (empresa que mantém o padrão).

12. **Niantic Spatial — modelos de mundo, 2026**
    `https://www.nianticspatial.com/blog/world-models-2026`
    Sustenta a definição de Large Geospatial Model, a linha de produtos
    (Capture / Reconstruct / Localize / Understand) e o público-alvo declarado — IA corporificada,
    defesa e inteligência, óleo e gás. *Confiabilidade:* média — posicionamento de empresa; **não**
    quantifica o corpus (o número de "30 bilhões de imagens posadas" apareceu em resumo de busca
    e não está nesta página, por isso não foi usado).

13. **Marble: a multimodal world model** (World Labs)
    `https://www.worldlabs.ai/blog/marble-world-model`
    Sustenta a data de disponibilidade geral (11/11/2025) e o fato central de R3: exporta gaussian
    splats, malha de colisão, malha de alta qualidade e vídeo. *Confiabilidade:* alta para o que o
    produto faz e quando saiu (fabricante); baixa para qualquer avaliação de qualidade.

14. **Hands-On: Meta Horizon Hyperscape** (UploadVR)
    `https://www.uploadvr.com/meta-horizon-hyperscape-photorealistic-scene-capture-quest-3/`
    Sustenta o ciclo de captura (30 s + 5-10 min + 1-8 h), a técnica (Gaussian splatting), o render
    por streaming em nuvem, a ausência de acesso a arquivos brutos, a disponibilidade inicial só
    nos EUA em set/2025 e — crucial para e9 — a distorção documentada nas áreas não vistas e em
    texto pequeno. *Confiabilidade:* alta — relato de uso direto por publicação independente, com
    limitações descritas.

15. **Motion Without Markers: Move AI Gen 2** (VP Land)
    `https://www.vp-land.com/p/motion-without-markers-move-ai-s-gen-2-technology-redefines-capture-for-filmmakers`
    Sustenta a data do anúncio (11/03/2025) e as configurações s2/m2/m2-xl, incluindo 20+
    performers simultâneos. *Confiabilidade:* média — cobertura de lançamento com tom promocional;
    sem números de precisão nem de preço, e isso está dito no próprio texto.

16. **Move AI — site oficial**
    `https://move.ai/`
    Sustenta a lista de clientes declarados (Ubisoft, SEGA, Warner Music, Paramount, Disney, Sony,
    Meta, Nike, Adidas). *Confiabilidade:* baixa-média — página comercial; clientes declarados sem
    detalhamento de projeto.

17. **Depth Anything V2** (NeurIPS 2024)
    `https://depth-anything-v2.github.io/`
    Sustenta que profundidade monocular deixou de ser gargalo: 595 mil imagens sintéticas
    rotuladas, 62 M+ reais pseudo-rotuladas, ~10× mais rápido que os baseados em difusão.
    *Confiabilidade:* alta — página de projeto de trabalho revisado por pares, com código.

18. **NO Fakes Act** (Wikipedia)
    `https://en.wikipedia.org/wiki/No_Fakes_Act`
    Sustenta a cronologia (rascunho em 2023, apresentação em jul/2024, reapresentação em abr/2025,
    pendente em 2026) e a definição de réplica digital como voz **ou semelhança visual de um
    indivíduo** — a assimetria que sustenta e12. *Confiabilidade:* média — enciclopédia colaborativa
    com fontes primárias citadas; usei-a porque congress.gov e a análise do escritório
    Holland & Knight recusaram acesso automatizado (HTTP 403), o que está registrado na §12.

19. **Estudo da CVL Economics para Animation Guild e parceiros** (via Cartoon Brew)
    `https://www.cartoonbrew.com/artist-rights/union-study-says-generative-ai-will-disrupt-204000-jobs-three-years-237495.html`
    Sustenta o pano de fundo de emprego: 204 mil empregos de entretenimento nos EUA
    significativamente perturbados no triênio 2024-2026, 118,5 mil em cinema/TV/animação (21,4%)
    e 52,4 mil em jogos (13,4%); 300 líderes entrevistados entre 17/11 e 22/12/2023.
    *Confiabilidade:* média — estudo encomendado por partes interessadas, metodologia declarada
    (survey de percepção, não medição de demissões), e **não é sobre captura 3D**; entra como
    contexto, nunca como evidência de efeito deste mapa.

20. **Gêmeo digital da costa do Rio** (Mobiletime, 29/06/2026)
    `https://www.mobiletime.com.br/noticias/29/06/2026/gemeo-digital-costa-rio/`
    Sustenta a frente brasileira: Prefeitura do Rio com o INPO/MCTI, relevo marinho até 5 km da
    costa entre Flamengo e Recreio; menciona também a modelagem 3D com LiDAR de favelas cariocas.
    *Confiabilidade:* média-alta — veículo especializado, anúncio institucional; a tecnologia de
    captura do projeto costeiro não é especificada na matéria.

21. **Rio e MIT mapeiam favelas com tecnologia 3D** (Canal Vox)
    `https://canalvoxnoticias.com.br/rio-e-mit-mapeiam-favelas-com-tecnologia-3d-inedita-na-america-latina/`
    Sustenta o Senseable City Rio: Prefeitura + MIT Senseable City Lab + UFRJ, Instituto Pereira
    Passos, Instituto Igarapé e Casa Firjan; ~16 mil m² no Vidigal com LiDAR, resultados em
    18/09/2025, fase seguinte na Maré (~140 mil moradores) com 16 sensores impressos em 3D e
    formação de moradores para coleta; lideranças locais participaram da definição das áreas.
    *Confiabilidade:* média — veículo pequeno, mas os atores institucionais são verificáveis e o
    relato é consistente com a fonte 20. Importante: a matéria **não** descreve procedimento
    formal de consentimento dos moradores além da participação de lideranças, e é isso que a torna
    útil para a discussão de e6 e e7.2.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

Executado em 22/09/2026, sobre este arquivo, **depois** da conferência de teto da §7.9:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2036/10-captura-de-realidade-e-renderizacao-neural/tendencia-captura-de-realidade-e-renderizacao-neural.md --links
```

Saída, na íntegra:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 12 (frontmatter diz 12)
efeitos ordem 2: 19 (frontmatter diz 19)
efeitos ordem 3: 10 (frontmatter diz 10)
prazo > horizonte (2036) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 3 [('e7.2.1', 2037), ('e8.2.1', 2037), ('e10.1.1', 2037)]
confiança ordem 1: alta 5 · media 6 · baixa 1
confiança ordem 2: alta 0 · media 12 · baixa 7
confiança ordem 3: alta 0 · media 0 · baixa 10
links da seção 11: 21/21 respondem (frontmatter diz fontes: 21)
RESULTADO: ok
```

**Leitura dos números, que é o que a skill pede e o que o "ok" esconde.** As três contagens de
efeitos batem com o frontmatter (12/19/10) e as três raízes também. Nenhum efeito de 1ª ou 2ª
ordem passa do horizonte. **Três de 3ª ordem passam** — `e7.2.1`, `e8.2.1` e `e10.1.1`, todos em
2037 —, e isso é resultado da conferência de teto, não descuido: os três estão declarados na
prosa da §5 e justificados um a um na §7.9, conforme a TMI-0055. A calibração cai
monotonicamente: 5 confianças altas na 1ª ordem, nenhuma na 2ª, nenhuma na 3ª, com a 3ª
inteiramente em confiança baixa. Os 21 links da seção 11 respondem; os três que não responderam
estão fora da seção 11 e registrados em 12.6.

**A primeira execução deste mesmo verificador, antes da §7.9, imprimiu `RESULTADO: ok` com o
contador de fora-da-janela em ZERO** — e estava escondendo cinco prazos comprimidos. É o caso
exato que a TMI-0080 prevê e que a TMI-0081 estendeu às rodadas `h2036`. Fica registrado aqui
porque o `ok` verde desta saída final só vale acompanhado desta frase.

### 12.2 Premissas assumidas por ausência no briefing

O briefing veio completo nos sete itens da entrevista da skill, então **não houve rebaixamento de
confiança por pular a entrevista**. O que ele não cobria e eu assumi está declarado na §2 e
repetido aqui para que fique auditável num só lugar:

1. "Quem projeta mídia e interação" exclui topografia, agrimensura e inspeção industrial, que só
   aparecem como quem paga a conta da infraestrutura.
2. A nota sobre o Brasil trata de **onde a captura entra primeiro no país**.
3. Efeitos sobre imagem e vídeo 2D ficaram com o tema 12; efeitos sobre robótica, com o tema 9;
   efeitos sobre distribuição no navegador, com o tema 15; efeitos sobre segmentação por conceito,
   com o tema 11. A fronteira foi aplicada mesmo quando o mecanismo era o mesmo.
4. Regra de prazo criada nesta rodada, por falta de classe de referência publicada: **efeito sobre
   prática profissional recebe prazo pelo menos três anos depois do efeito sobre ferramenta que o
   habilita.**

### 12.3 Candidatos a disrupção-raiz recusados

- **Fotogrametria clássica e varredura a laser.** Recusadas como raiz: adoção em **maioria** nos
  setores que as usam (AEC, patrimônio, topografia) há mais de uma década. Tratadas como contexto
  na §3. O que elas *não* fazem — rodar em dez minutos num aparelho de consumo — é exatamente a
  fronteira que define R2.
- **NeRF.** Recusado: rompeu o campo acadêmico em 2020, mas foi substituído pelo 3DGS como técnica
  de produção **antes** de virar prática profissional. É pré-condição histórica de R1, não raiz
  própria. Entra como "por que agora" de R1.
- **"O celular ganhou LiDAR".** Recusado pelo critério 1 do §2 da skill: faz o mesmo (medir
  profundidade), melhor. Melhoria sustentadora clássica — e, sintomaticamente, os aplicativos que
  mais crescem hoje funcionam **sem** LiDAR.
- **"Captura de movimento sem marcador" como raiz separada.** Considerado e rejeitado como raiz
  autônoma: o mecanismo econômico e jurídico é o mesmo de R2 (o ato de capturar deixa de ser
  visível e negociado), e separá-lo produziria dois ramos com os mesmos efeitos de 2ª ordem.
  Ficou como e8, dentro de R2. Registro porque é uma escolha discutível — um mapa feito por outra
  pessoa poderia legitimamente tratá-la como quarta raiz, e nesse caso e8.2 e e8.2.1 ganhariam
  filhos próprios sobre contrato de trabalho.
- **"Vídeo volumétrico / 4DGS" como raiz separada.** Rejeitado: é R1 com um eixo a mais (tempo).
  Os números de 4DGS sustentam e5 e e2.2; não sustentam uma ruptura distinta dentro do horizonte.

### 12.4 Efeitos cortados na bateria do §6, com o motivo

- **e1.3 — "Escolas de cinema e de jogos reorganizam o currículo em torno de captura."** Cortado:
  efeito genérico explicitamente proibido pela skill (serve para qualquer um dos 19 temas). Eu não
  tinha nome de curso, nem de instituição, nem mecanismo que ligasse a reorganização a este pai e
  não a outro. Se fosse reescrito com nome e mecanismo, o candidato seria algo como "o portfólio
  de admissão deixa de pedir wireframe" — que é o que sobreviveu, como e1.2.1.
- **e6.3 — "Surge a profissão de auditor de captura."** Cortado pelo mesmo motivo ("surge uma nova
  profissão" está na lista de proibidos). Sem nome, sem empregador, sem mecanismo.
- **e11.3 — "O mercado de ativos 3D desaparece."** Cortado: extrapolação linear sem mecanismo de
  não-linearidade, e contradizia e11.1 sem que eu soubesse dizer o que decide entre os dois. A
  parte defensável virou e4 (perda de exclusividade, não desaparecimento).
- **"Reguladores criam categoria jurídica nova para captura 3D"** — nunca chegou a entrar como
  efeito numerado: é o proibido mais óbvio da lista. O que sobrou com nome e mecanismo foram e6.2
  (ANPD/LGPD) e e12 (NO FAKES Act), e mesmo esses saíram rebaixados.
- **"Museus digitalizam acervo e abrem coleções navegáveis"** — descartado por falhar no teste da
  causa solta (§3.10): acontece do mesmo jeito por política de acervo digital, que existe desde
  antes de qualquer captura neural. Não deriva destas raízes.
- **"Turismo virtual substitui viagem"** — descartado pelo mesmo teste, e por ser uma promessa que
  já falhou duas vezes (panorama 360°, VR de consumo) sem que nada tenha mudado no mecanismo que a
  fez falhar.

### 12.5 As buscas feitas, incluindo as que não deram em nada

Doze buscas, em português e inglês, em 22/09/2026:

1. `Gaussian splatting 2026 state of the art real-time neural rendering adoption` — deu o núcleo
   da §3.
2. `3D Gaussian splatting production pipeline game engine Unreal Unity 2026 support` — deu o
   inventário de suporte.
3. `Polycam Luma AI Scaniverse usuários número downloads 2026 captura 3D celular` — **não deu em
   nada quanto a números.** Nenhuma medida de usuários ou downloads para nenhum dos três. É a
   lacuna mais séria da âncora, e está declarada na §3 como "sem número encontrado".
4. `markerless motion capture from video 2026 Move.ai production adoption` — deu Move Gen 2 e uma
   projeção de mercado que decidi **não** usar (consultoria, metodologia não aberta).
5. `feed-forward 3D reconstruction VGGT single image 3D generation 2026 Hunyuan3D Tripo` — deu
   muitos preprints e nenhuma página de produto que eu tenha aberto; por isso a classe
   TripoSR/Hunyuan3D/TRELLIS aparece no texto **nomeada mas sem fonte própria**, e nenhum efeito
   depende só dela.
6. `privacidade escaneamento 3D espaços públicos lei direito de imagem fachada 2026` — **quase não
   deu em nada**: o material brasileiro trata de fotografia e videovigilância, não de captura 3D.
   Essa ausência é, ela própria, um achado: não há discussão jurídica brasileira específica sobre
   captura tridimensional de espaço, e é o que sustenta o prazo tardio de e6.2.
7. `Niantic Large Geospatial Model Spatial Platform 2026 scans world map` — deu o posicionamento da
   Niantic Spatial; o número de "30 bilhões de imagens posadas" apareceu em resumo mas **não** na
   página que abri, e por isso não foi usado.
8. `gêmeo digital cidade brasileira escaneamento 3D 2026 prefeitura levantamento` — deu a nota
   sobre o Brasil (Rio, Rio Verde, São Paulo, Curitiba).
9. `SuperSplat PlayCanvas SOG compression splat format standard 2026 web viewer` — deu a guerra de
   formatos e os números de compressão.
10. `volumetric video 4D Gaussian splatting telepresence Codec Avatars 2026 Meta` — deu 4DGS em
    produção. **Não deu nada verificável sobre Codec Avatars da Meta**, que estava na lista de
    entidades do tema; o que existe é literatura de telepresença monocular. Registro a falha: o
    tema sugeria Codec Avatars e eu não consegui sustentar nada sobre isso.
11. `3D Gaussian splatting papers per year arXiv count survey 2026 growth` — **não deu o número que
    eu queria** (contagem de papers por ano). Sobrou o metadado de versões do survey, que usei como
    substituto explícito e mais fraco.
12. `Google Maps Apple spatial scenes photo to 3D consumer feature 2026 immersive view` — deu a
    navegação imersiva do Google Maps de 2026, reconstruída a partir de Street View, aérea e
    satélite com apoio de modelo multimodal. **Não usei** porque não abri a fonte primária e
    porque, pelo critério da disciplina, isso já é produto de massa — cai do lado maduro da linha.
    Fica registrado aqui porque é o melhor indício de que a *visualização* de mundo capturado já
    atravessou para a maioria, mesmo que a *captura* não.

Duas buscas auxiliares deram material que entrou como contexto: `digital replica likeness law 2026
NO FAKES Act` e `3D artist environment modeler job market 2026 AI impact hiring survey games`.

### 12.6 Fontes que não abriram

- `https://www.congress.gov/bill/119th-congress/senate-bill/4591/text` — **HTTP 403** para acesso
  automatizado. É a fonte primária do NO FAKES Act de 2026 e teria sido a melhor fonte de e12.
- `https://www.hklaw.com/en/insights/publications/2026/06/senate-judiciary-committee-advances-legislation-to-protect-name`
  — respondeu à leitura assistida (e confirmou: avanço unânime no Comitê Judiciário do Senado em
  18/06/2026, S. 4591, proteção de voz e semelhança **de pessoas**, sem tratar de lugares), mas
  **recusa requisição automatizada com HTTP 403**, e por isso **não** entrou na lista da §11 — a
  regra do verificador é que todo link da seção 11 responda. O conteúdo que ela confirmava está
  sustentado, de forma mais fraca, pela fonte 18.
- `https://thenewstack.io/niantic-spatial-scaniverse-world-models/` — abriu, mas devolveu só a
  moldura da página (menus e formulários), sem o corpo do artigo. Por isso não entrou.

Consequência: a afirmação "o comitê avançou em 18/06/2026" aparece na §4 apoiada em leitura que
não pude deixar como link verificável na §11. Quem for conferir, confira em `congress.gov` pelo
número **S. 4591**.

### 12.7 Números que encontrei e decidi não usar

- **US$ 15,21 bi (2025) → US$ 74,33 bi (2035), CAGR 17,19%** para captura de movimento sem
  marcador. Relatório de consultoria, metodologia não aberta. Projeção de dez anos em mercado
  emergente é o tipo de número que parece sustentar qualquer coisa e não sustenta nada.
- **"30 bilhões de imagens posadas"** no corpus da Niantic. Apareceu em resumo de busca, não na
  página que abri.
- **"23 clubes de futebol processados pela ANPD por reconhecimento facial em estádios em 2025"**.
  Mesma situação, e era o artefato que sustentaria e6.2 — que por isso foi rebaixado a sinal fraco
  e confiança baixa.
- **"Móveis: 60 fps para cenas abaixo de 1 milhão de gaussianas em GPU classe RTX 3060"**. Apareceu
  em resumo de busca de um guia de terceiro; não abri, não usei.
- **Preço de assinatura de Polycam, Luma e KIRI.** Aparecem em comparativos de blog que não abri.

### 12.8 O que este mapa deliberadamente não cobre

- **Robótica e simulação** (tema 9), embora o maior comprador de captura georreferenciada
  declarado seja justamente IA corporificada. Isso significa que a economia que vai financiar a
  captura do mundo pode estar fora deste mapa — e é a maior fragilidade estrutural dele,
  registrada como SF3.
- **Vídeo e imagem sintéticos 2D** (tema 12).
- **Distribuição em XR pelo navegador** (tema 15), apesar de SuperSplat e SOG viverem exatamente
  ali. Onde foi inevitável (e1.2, e2.2), tratei o navegador como meio, não como tema.
- **Segmentação e nomeação de objetos em cena** (tema 11), que é justamente o que falta para a
  edição semântica de splat. O leitor que quiser saber *quando* e1.1 deixa de valer deve olhar o
  mapa do tema 11: é lá que a resposta está.
- **Custo energético** de treino e render neural em escala. Não achei base e não estimei; a
  categoria ecológica do STEEP ficou vazia por isso.

### 12.9 Nota sobre a verificação

A saída completa está em 12.1, com os números, e não com a palavra "passou". O verificador
confere frontmatter, títulos literais, validade e estrutura do bloco `roda:`, contagens
cruzadas com o frontmatter, prazo contra o horizonte, calibração por ordem e resposta dos
links da seção 11 — nesta rodada nenhum contador precisou de correção no frontmatter.

### 12.10 O que este mapa faria diferente com horizonte de 2031

*Subseção exigida pela TMI-0059, que vale para toda rodada de horizonte longo: o degrau só é
legível como escada se cada mapa disser o que seria no degrau padrão de cinco anos. Isto não é a
seção 7 — não é onde o mapa está errado; é o que ele seria com outro recorte.*

**Quantas raízes sobreviveriam: três, mas uma delas esvaziada.**

- **R2 (capturar deixa de ser um ato visível e negociado)** sobreviveria inteira e seria a raiz
  **principal** de um mapa de 2031, não a segunda. É a única cujos efeitos de 1ª ordem estão todos
  datados em 2028-2029 e ancorados em artefatos que já existem — Hyperscape em beta, Scaniverse
  gratuito, Move m2-xl, a falha documentada sob oclusão. Num horizonte de cinco anos, ela domina.
- **R1 (o 3D perde a topologia)** sobreviveria **truncada na consequência**. Caberiam `e3` (2028),
  `e1` (2029), `e2` (2029) e `e4` (2030); ficariam de fora `e5` (2031 no limite) e **todo o ramo
  de 2ª e 3ª ordem que dá sentido à raiz** — a mudança do objeto da revisão, o deslocamento da
  competência de entrada, a padronização, o acervo ilegível. O mapa de 2031 diria "splat entrou no
  pipeline e a guerra de formatos atrapalha", que é verdadeiro, é verificável hoje e é pequeno.
- **R3 (reconstrução e geração colapsam)** é a que mais sofreria: **nenhum** de seus três efeitos
  de 1ª ordem cabe — `e10`, `e11` e `e12` estão todos em 2030, exatamente no limite, e todos os
  seus filhos estão fora. A pergunta que este mapa considera a mais importante do tema — *o 3D
  ainda serve como prova?* — simplesmente **não é uma pergunta de 2031**.

**Quantos efeitos caberiam.** Dos 41, **21 têm prazo ≤ 2031**: todos os doze de 1ª ordem, nove dos
dezenove de 2ª ordem, e **nenhum** dos dez de 3ª ordem — o mais precoce é `e1.2.1`, em 2032. Ou
seja: num horizonte de 2031 **a terceira ordem deste tema desaparece por completo**, e com ela
desaparece a roda. Sobraria uma lista de consequências imediatas, que é exatamente o que a Futures
Wheel existe para não ser.

**Que efeitos mudariam de ordem.** Nenhum mudaria de ordem *causal* — ordem mede distância causal,
não calendário. O que mudaria é o peso: `e3` (a guerra de formatos, 2028) e `e9` (a falha sob
oclusão, 2028) passariam a ser os efeitos mais consequentes do documento, quando aqui são as duas
retroações. **Um mapa de cinco anos deste tema é, em boa medida, um mapa sobre o que está
travando** — porque é isso que está datado para já.

**Qual seria o teto de confiança.** Enganosamente mais alto. As cinco confianças altas (`e3`, `e6`,
`e7`, `e8`, `e9`) caberiam todas e passariam a representar 24% do mapa em vez de 12%; a segunda
ordem entraria com nove das doze médias; e a terceira ordem, reduzida a zero, deixaria de puxar a
média para baixo. O resultado seria um documento que **parece** muito melhor calibrado que este e
que apenas evitou olhar para onde é difícil enxergar. É o argumento mais forte a favor da escada
da TMI-0053: a confiança alta do horizonte curto é, em parte, artefato do recorte.

**O que os dez anos compram, em uma frase.** Compram os três achados que este mapa considera seus
e que nenhum cabe em 2031: o valor migrando da execução para a direção da captura; a assimetria
jurídica que protege o corpo e deixa o espaço desprotegido; e o colapso entre medir e inventar. O
que os dez anos custam está na §7.9 e no item 8 da seção 8: dez efeitos terminais cujo ano deriva
de classe de referência com base frágil — e a tentação, à qual eu não resisti na primeira
redação, de encostá-los no teto para que o mapa parecesse caber.
