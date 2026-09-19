---
tema: "Mídia sintética controlável: vídeo e imagem"
slug: midia-sintetica-controlavel-video-e-imagem
autor_login: hfm
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 8
efeitos_ordem_2: 15
efeitos_ordem_3: 16
tecnologias_citadas: [Runway Aleph, Pika, Luma Dream Machine, Kling, Veo, Sora, FLUX.1 Kontext, EbSynth, Cavalry, Rive, ComfyUI, Remotion, satori, Adobe Firefly, VAR (Visual Autoregressive Modeling), ATI (Any Trajectory Instruction), ControlNet, C2PA / Content Credentials, InvokeAI, diffusers, Graphite, Pixel Composer, Pixelmash, Magnific, StabilityMatrix, pix2pix, CycleGAN]
fontes: 18
confianca: media
experimento: "Bancada de direção — o mesmo plano dirigido por quatro sinais de controle diferentes (prompt, região, trajetória e quadro-chave propagado), com o grafo versionado e a procedência assinada"
skill_usada: futurizacao-hfm
publico_ok: false
---

## 1. Resumo

Gerar vídeo por prompt já é mercadoria. A ruptura em curso é o **controle**: em 2025–2026 o
sinal que dirige a geração deixou de ser só texto e passou a ser espacial e temporal — região
do quadro, trajetória desenhada, pose, movimento de câmera, quadro-chave pintado à mão e
propagado. Um survey de 2025–2026 já organiza esse campo como taxonomia de condições de
controle, e produtos comerciais (Runway Aleph, FLUX.1 Kontext, Kling, Luma) vendem edição
dirigida, não sorteio. Ao mesmo tempo, a geração está virando **grafo versionável** (ComfyUI,
Remotion), a animação está virando **máquina de estados que responde a evento** (Rive), e a
arquitetura dominante voltou a estar em disputa — o VAR, melhor artigo do NeurIPS 2024, fez
modelos autoregressivos de próxima-escala superarem transformers de difusão. Deste chão saem
quatro disrupções-raiz e trinta e nove efeitos. Os mais duros não são de produção: são de
**prova**. Se a imagem em movimento é barata e dirigível, o valor probatório do vídeo cai, e a
resposta institucional — procedência assinada via C2PA — está muito atrás do problema: menos de
1% das imagens e vídeos jornalísticos publicados no mundo carregam metadados C2PA, segundo
levantamento do Reuters Institute citado em análise de adoção de 2026. Confiança do mapa:
média. O que ele mais arrisca é o prazo, não a direção.

## 2. O tema

O objeto aqui é **a imagem em movimento como mídia sintética dirigível**. Não é a história
gerada (tema 8), não é o som nem a voz (tema 13), não é design procedural sem IA (tema 14). É a
camada em que alguém que projeta mídia e interação passa a ter alavancas finas sobre um sistema
generativo: dizer *onde*, *quando*, *por qual caminho*, *a partir de qual quadro*.

Por que isso merece mapa de futuro e não levantamento de estado da arte: porque o eixo da
mudança não é qualidade de imagem — esse eixo é incremental e já vem sendo medido há três anos
— mas **quem dirige**. Enquanto a geração era loteria, ela era brinquedo: útil para explorar,
inútil para entregar um plano específico dentro de uma sequência específica. No momento em que
a direção fina entra, a mídia sintética muda de categoria — sai de "efeito" e entra em
"instrumento de produção". Categoria nova reorganiza papéis, contratos, formação e prova. É
isso que uma roda dos futuros consegue examinar e um estado da arte não.

Onde encosta em mídia e interação, especificamente: (a) o artefato de trabalho deixa de ser o
arquivo renderizado e passa a ser o pipeline; (b) a animação passa a responder a evento, o que
apaga a fronteira entre peça de vídeo e componente de interface; (c) o estatuto epistêmico da
imagem em movimento — aquilo que fazia um vídeo valer como testemunho — entra em colapso lento,
com uma infraestrutura de resposta (procedência criptográfica) que existe mas quase não é usada.

## 3. Onde isso está hoje

### Já existe, funciona e está em produto pago

**Edição de vídeo dirigida por instrução, dentro do próprio modelo.** A Runway anunciou o Aleph
em 25 de julho de 2025 como modelo de vídeo *in-context* que adiciona e remove objetos,
transforma objetos, gera ângulos diferentes de uma cena e altera estilo e iluminação; está
disponível para todos os usuários pagos [1]. Isso é qualitativamente diferente de gerar um
clipe: é operar sobre um clipe existente com verbos de montagem.

**Edição de imagem por instrução com consistência de personagem e edição local.** A Black
Forest Labs descreve o FLUX.1 Kontext como suíte de *flow matching* que edita por instrução
textual, preserva personagem ou objeto de referência através de cenas, faz edição local sem
afetar o resto da imagem, e manipula tipografia dentro da imagem; há versão aberta de 12B
parâmetros (`[dev]`) além das comerciais [2]. Consistência de personagem e edição local são
exatamente as duas travas que impediam uso profissional.

**Quadros-chave e consistência de referência nos produtos de vídeo.** A Luma descreve animar
imagem parada, adicionar movimento de câmera, criar transições entre quadros, estender cenas, e
manter personagens, produtos e logos consistentes via *master reference assets* [3]. Os recursos
de quadro inicial e final do Kling 3.0 e do Veo 3.1, e o *motion control* que transfere o
movimento de um vídeo de performance para uma imagem parada, aparecem em material comercial que
**não abri diretamente** — ficam registrados no anexo e não sustentam nenhum efeito deste mapa.

**Propagação de estilo a partir de um quadro pintado à mão, sem IA generativa.** O EbSynth —
de Šárka Sochorová e Ondřej Jamriška — propaga a edição de um quadro-chave pelo resto do vídeo
usando síntese de textura guiada por fluxo óptico, e declara abertamente as limitações: a
qualidade depende do cálculo de fluxo, e desalinhamento entre o quadro pintado e o vídeo produz
artefatos de ondulação e alongamento [4]. É a ferramenta mais controlável do conjunto e a que
menos depende de modelo generativo — o que importa para o argumento: controle não é sinônimo de
IA.

**Geração como grafo.** O ComfyUI se descreve como controle profissional sobre cada modelo, nó,
etapa e saída, com pipelines montados conectando nós em tela infinita; declara mais de 60.000
nós disponíveis e cita Amazon Studios, Apple, Netflix, Nike e Ubisoft entre clientes [5]. O
Remotion faz vídeo programático em React, declara mais de 5 milhões de instalações por mês, 59
mil estrelas no GitHub e mais de 300 clientes pagantes, com licenciamento por empresa [6].

**Animação como máquina de estados multiplataforma.** A Rive se descreve como *interactive
experience engine* — desenhar, animar e programar no mesmo lugar, com *state machine* para
interações responsivas a evento, e runtimes abertos para web, iOS, Android, macOS, Flutter,
React, Unity e Unreal; cita Spotify, Duolingo, Disney e Google, e alega produção 4× mais rápida
e arquivos até 90% menores que o fluxo tradicional com After Effects ou Lottie [7].

**Motion design procedural.** O Cavalry se apresenta como animação 2D em tempo real, "motion
design reinvented", com fluxo baseado em sistemas e regras — *ajuste um valor, veja sistemas
inteiros responderem* — importação de dados de planilha e replicação por *duplicator*. É
gratuito para indivíduos e pertence hoje à Canva [8].

**Acervo licenciado como argumento jurídico de produto.** A Adobe declara que os modelos Firefly
são treinados em conteúdo licenciado do Adobe Stock e em domínio público com direitos expirados,
que não treina em conteúdo pessoal de assinantes do Creative Cloud, que os modelos são
"comercialmente seguros", e que as saídas carregam Content Credentials indicando o uso de IA
[9]. Aqui a disputa jurídica está embutida no produto.

### Existe na pesquisa e está entrando em produto

**O controle como campo organizado.** O survey *Controllable Video Generation* (Yue Ma e 22
coautores, submetido em 22/07/2025, versão final em 19/01/2026) organiza o campo em três
categorias — condição única, múltiplas condições e geração controlável universal — e trata como
sinais de controle movimento de câmera, mapas de profundidade e pose humana, além do texto. O
argumento central do abstract é a frase que resume o tema inteiro: *text prompts alone are often
insufficient* [10].

**Trajetória desenhada como instrução.** O ATI — *Any Trajectory Instruction*, de Angtian Wang e
colegas, arXiv 2505.22944, submetido em 28/05/2025 — unifica movimento de câmera, translação de
objeto e movimento local fino a partir de trajetórias desenhadas pelo usuário: pontos-chave e
seus caminhos são projetados no espaço latente de modelos imagem-para-vídeo e um módulo leve de
injeção de movimento guia a geração [11]. A família de trabalhos vizinhos é grande e recente
(RealCam, PostCam, VidCRAFT3, FlexTraj, Wan-Move, Track2View), o que sinaliza campo em
expansão, não achado isolado.

**A arquitetura em disputa.** O VAR — *Visual Autoregressive Modeling: Scalable Image Generation
via Next-Scale Prediction*, de Keyu Tian, Yi Jiang, Zehuan Yuan, Bingyue Peng e Liwei Wang,
arXiv 2404.02905 (abril de 2024), melhor artigo do NeurIPS 2024 — reformula a geração
autoregressiva como previsão da próxima *escala* em vez do próximo token em varredura raster.
Em ImageNet 256×256 relata FID de 18,65 para 1,73, IS de 80,4 para 350,2 e inferência cerca de
20× mais rápida, e afirma que pela primeira vez modelos autoregressivos estilo GPT superam
transformers de difusão em geração de imagem; relata ainda leis de escala com correlação linear
perto de −0,998 e generalização zero-shot para *inpainting*, *outpainting* e edição [12][13].

### Existe e não funciona como prometido

**A infraestrutura de procedência.** A C2PA descreve as Content Credentials como "rótulo
nutricional" do conteúdo digital, tem no comitê diretor Adobe, Amazon, BBC, Google, Meta,
Microsoft, OpenAI, Publicis, Sony, TikTok e Truepic, e mantinha a especificação 2.3 publicada
na página consultada em 08/01/2026 [14]; a versão 2.4 é de abril de 2026 [15]. Mas a mesma
documentação registra as falhas: até meados de 2026 **nenhuma câmera dedicada atingiu
conformidade sob o programa oficial**; as câmeras no mercado usam a versão legada 1.4; os
certificados da Nikon Z6III foram revogados após vulnerabilidade em setembro de 2025 que
permitia combinar imagem não autêntica com autêntica mantendo assinatura válida; em agosto de
2026 documentou-se forja de assinaturas em Android com acesso root; e a BBC modificou
silenciosamente manifests C2PA durante upload [15]. A crítica de fundo é conceitual e não
técnica: **a credencial atesta origem, não veracidade** — uma imagem fabricada ou enganosa pode
carregar credencial válida [15].

O tamanho real da lacuna: análise de adoção de 2026 cita levantamento do Reuters Institute
segundo o qual **menos de 1% das imagens ou vídeos noticiosos publicados globalmente incluem
metadados C2PA**, mesmo entre veículos motivados; e registra que plataformas removem metadados
embutidos durante upload e transcodificação, quebrando a cadeia [16]. Do lado positivo do mesmo
levantamento: o Sony PXW-Z300, anunciado na IBC 2025, é o primeiro camcorder com assinatura
C2PA nativa; o Google Pixel 10 assina todas as fotos por padrão com chaves ancoradas em
hardware; a Cloudflare foi o primeiro CDN grande a implementar Content Credentials, em fevereiro
de 2025; e a C2PA 2.3, de dezembro de 2025, estendeu a procedência a transmissão ao vivo por
assinatura de segmentos CMAF, compatível com HLS, DASH, CDN e DRM existentes [16].

### O chão institucional no Brasil

O PL 2338/2023 — marco legal da IA, de autoria do senador Rodrigo Pacheco — foi aprovado no
plenário do Senado em 10/12/2024 e remetido à Câmara em 17/03/2025, com tramitação encerrada no
Senado; passou por 244 emendas na comissão temporária e consolidou propostas apensadas [17]. Ou
seja: em setembro de 2026, o Brasil ainda **não tem** marco legal de IA em vigor. O que existe e
já vale é autorregulação e norma setorial: o CONAR publicou em 21/05/2026 a nova edição do Guia
de Marketing e Publicidade por Influenciadores Digitais, com efeitos a partir de 01/06/2026,
afirmando que as regras se aplicam **independentemente da tecnologia empregada** — IA
generativa, influenciadores virtuais, avatares, deepfakes e conteúdos sintéticos não afastam a
responsabilidade da cadeia publicitária pela veracidade, pela transparência e pelo potencial de
induzir o consumidor a erro [18].

### Onde passa a linha (a régua da disciplina)

**Maduro, fora do mapa:** edição de vídeo não-linear, motion graphics por keyframe manual,
geração de imagem por prompt simples, upscaling, e vídeo-por-prompt genérico. Tudo isso é
produto de massa e não rompe nada.

**Emergente e dentro do mapa:** controle fino sobre geração — região, trajetória, quadro-chave
propagado, pose, câmera —; geração como grafo versionável; animação como máquina de estados
distribuída em runtime; e arquiteturas que disputam a difusão.

**Emergente mas não disruptivo:** consistência de personagem é emergente e tecnicamente difícil,
mas por si só é melhoria de qualidade, não ruptura de papel. Ela entra no mapa como
*viabilizador* dos efeitos de e1, não como raiz.

## 4. As disrupções-raiz

### D1 — O sinal de controle deixa de ser texto e passa a ser espaço e tempo

**O que rompe.** Rompe a relação entre quem pede e o que sai. Com prompt, o pedido é uma
descrição e o resultado é uma amostra de uma distribuição: a pessoa julga *a posteriori* e
sorteia de novo. Com região, trajetória, pose, câmera e quadro-chave, o pedido é uma
especificação com coordenadas — e a peça passa a ser encaixável numa sequência já decidida. Isso
muda o ofício: de curadoria de sorteios para direção.

**Por que agora e não há cinco anos.** Duas condições se juntaram. Primeira: a qualidade base
subiu o suficiente para que o gargalo deixasse de ser "sai bonito?" e passasse a ser "sai *isto*
aqui?" — o survey de controle formula exatamente essa insuficiência do texto [10]. Segunda: os
métodos de injeção de condição ficaram leves e acopláveis a modelos pré-treinados — o ATI
descreve um módulo leve de injeção de movimento sobre modelos imagem-para-vídeo existentes [11]
—, o que dispensa retreinar um modelo por tipo de controle. Em 2021 não havia base generativa
boa o bastante nem método barato de acoplar condição.

**O que ainda falta.** Falta o controle ser *composto* e *reutilizável*: hoje cada produto tem
seu vocabulário (pincel de movimento aqui, trajetória ali, quadro-chave acolá), e não há formato
comum que permita levar a direção de um plano de um modelo para outro. Falta também precisão
verificável — nenhum dos produtos consultados publica métrica de aderência ao controle, só
exemplos.

### D2 — O artefato de mídia deixa de ser o arquivo e passa a ser o programa que o gera

**O que rompe.** Rompe a economia da peça. Se o entregável é um grafo de nós (ComfyUI [5]) ou um
componente React parametrizado (Remotion [6]), a peça deixa de ser um bem único e vira uma
função: mudar um parâmetro gera outra peça, com custo marginal próximo de zero. Rompe também a
propriedade: o que se compra, se versiona, se audita e se disputa passa a ser o pipeline.

**Por que agora.** Porque os dois lados amadureceram ao mesmo tempo. Do lado da geração,
modelos abertos com pesos disponíveis (FLUX `[dev]`, 12B [2]) tornaram o nó executável
localmente. Do lado da produção, ferramentas programáticas saíram do nicho: 5 milhões de
instalações mensais do Remotion e mais de 300 clientes pagantes são números de mercado, não de
laboratório [6]. E o Cavalry mostra que a lógica procedural — regra em vez de keyframe — já era
desejada por motion designers antes da IA [8]: a IA entrou num fluxo que já existia.

**O que ainda falta.** Falta reprodutibilidade dura: um grafo que depende de um modelo
hospedado por terceiros não é reproduzível se o fornecedor mudar o modelo. Falta também um
padrão de empacotamento — hoje um workflow do ComfyUI não roda em outro ambiente sem caçar nós
e pesos manualmente.

### D3 — A imagem em movimento deixa de ser linear e passa a ser um runtime que responde a evento

**O que rompe.** Rompe a categoria "vídeo". Um arquivo Rive não é um filme: é uma máquina de
estados vetorial acelerada por GPU que roda em web, iOS, Android, Flutter, Unity e Unreal, e que
muda de estado por evento do usuário ou do sistema [7]. Se a peça animada responde, ela não é
mídia consumida — é interface. A fronteira entre motion design e engenharia de produto some, e
com ela some a divisão de trabalho que sustentava as duas.

**Por que agora.** Porque os runtimes ficaram bons e multiplataforma ao mesmo tempo que o custo
de banda e desempenho passou a importar em produto: a alegação de arquivos até 90% menores que
o fluxo Lottie/After Effects é argumento de engenharia, não de estética [7]. E porque a escala
de adoção declarada (Spotify, Duolingo, Disney, Google) tira isso do campo do experimento [7].

**O que ainda falta.** Falta a ponte com a geração: hoje a animação reativa é feita à mão em
vetor, e a mídia sintética é feita em raster linear. O ponto em que um estado de máquina puder
ser preenchido por geração dirigida é o ponto em que D1 e D3 se somam — e nada do que foi
aberto nesta pesquisa mostra isso funcionando em produto.

### D4 — A arquitetura da geração volta a estar em disputa

**O que rompe.** Rompe a premissa de que difusão é o fim da história. O VAR reformula a geração
como previsão da próxima escala, relata superar transformers de difusão em ImageNet 256×256
(FID 1,73 contra baseline 18,65; IS 350,2; ~20× mais rápido) e exibe leis de escala análogas às
de LLMs [12][13]. Se a geração passa a ser grosso-para-fino por escalas, o *ponto de
intervenção humana* muda: dá para intervir entre escalas, o que é uma forma de controle que a
difusão não oferece naturalmente.

**Por que agora.** Porque o resultado foi validado por revisão por pares no lugar mais visível
possível (melhor artigo do NeurIPS 2024) e porque a vantagem de latência é grande o bastante
para mudar a interação: 20× é a diferença entre esperar um render e mexer num controle.

**O que ainda falta.** Falta muito. O resultado citado é de imagem em benchmark acadêmico
(ImageNet 256×256), não de vídeo em produção. Nenhum produto comercial de vídeo consultado aqui
declara arquitetura autoregressiva de próxima-escala. Esta é a raiz **mais frágil** do mapa, e
está marcada como tal nos efeitos.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O sinal de controle deixa de ser texto e passa a ser espaço e tempo
    efeitos:
      - id: e1
        ordem: 1
        efeito: Dirigir substitui gerar, e o custo do audiovisual desloca-se de produzir o plano para especificar o plano
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Um estúdio de uma pessoa entrega o volume que exigia uma equipe pequena, e a faixa média do mercado de produção some
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A formação em animação se reorganiza em torno de direção e crítica visual, e não de execução de quadro
                sinal: fraco
                prazo: 2032
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: A publicidade de cauda longa deixa de ser inviável e mercados regionais brasileiros passam a ter produção audiovisual própria
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Surge o papel de diretor de pipeline, e o portfólio profissional passa a ser o sistema de direção, não a peça final
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Contratos e acordos coletivos passam a negociar a propriedade do pipeline e dos sinais de controle, não apenas a do resultado
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O quadro pintado à mão volta a ser unidade de trabalho, agora como semente que se propaga pelo resto da sequência
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O trabalho manual escasso é realocado para poucos quadros de alta densidade autoral, e o resto do plano vira propagação
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Estilo se destaca da obra e vira ativo licenciável em disputa jurídica própria
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A rotoscopia estilizada deixa de ser nicho caro e vira acabamento padrão de peça curta
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O feito à mão vira reivindicação de mercado com selo declarado, do mesmo modo que orgânico e artesanal
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O valor probatório da imagem em movimento se corrói porque produzir um plano específico e plausível deixa de ser caro
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Forma-se um mercado de autenticidade certificada ancorado em assinatura no momento da captura
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A prova passa a depender de cadeia de custódia institucional, e quem não tem infraestrutura de assinatura perde capacidade de se defender
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Redações e tribunais deslocam a verificação da imagem para a verificação do emissor
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: A confiança pública migra de eu vi para eu confio em quem me mostrou, e a autoridade jornalística se reorganiza em torno de custódia e não de reportagem
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: O artefato de mídia deixa de ser o arquivo e passa a ser o programa que o gera
    efeitos:
      - id: e4
        ordem: 1
        efeito: O entregável de uma produção passa a ser o pipeline reproduzível, e o arquivo renderizado vira subproduto
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Marcas e redações mantêm sistemas de mídia versionados do mesmo modo que hoje mantêm design systems
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A autoria audiovisual se fragmenta entre quem escreveu a regra, quem ajustou o parâmetro e quem treinou o modelo, e o crédito deixa de caber na ficha técnica atual
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A produção audiovisual absorve práticas de engenharia de software, com versionamento, revisão e render contínuo
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: O ensino de mídia converge com o de computação e a separação entre os dois cursos deixa de se sustentar
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: O custo marginal de uma variação cai a quase zero e a peça única deixa de ser a unidade natural de produção
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A métrica de campanha passa de desempenho da peça para desempenho do espaço de variações, com teste contínuo
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A autorregulação publicitária brasileira precisa julgar um espaço de variações que nunca foi visto por inteiro, e o modelo de análise por peça se torna insuficiente por desenho
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Mídia gerada por destinatário deixa de ser exceção cara e vira configuração padrão em canais diretos
            sinal: medio
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: A crítica cultural perde objeto comum porque duas pessoas deixam de ter visto a mesma peça
                sinal: fraco
                prazo: 2034
                confianca: baixa
  - disrupcao: A imagem em movimento deixa de ser linear e passa a ser um runtime que responde a evento
    efeitos:
      - id: e6
        ordem: 1
        efeito: A peça animada vira componente que reage a evento e passa a ser embarcada no produto em vez de exibida nele
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Motion design e engenharia de interface se fundem num único fluxo de trabalho e num único arquivo
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Vídeo deixa de ser categoria estável de mídia e passa a nomear apenas um modo de execução de uma interface
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Acessibilidade e desempenho viram critério de aceite de peça animada, no lugar de apenas duração e resolução
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Normas de acessibilidade passam a tratar animação generativa como conteúdo dinâmico sujeito a controle do usuário, e não como decoração
                sinal: fraco
                prazo: 2034
                confianca: baixa
  - disrupcao: A arquitetura da geração volta a estar em disputa, com previsão de próxima escala desafiando a difusão
    efeitos:
      - id: e7
        ordem: 1
        efeito: A geração em baixa latência transforma o ajuste de um plano em gesto de edição em vez de nova espera
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Ferramentas de edição incorporam geração como pincel contínuo e o ciclo de tentativa e erro deixa de estruturar o trabalho
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A estética dominante muda porque o traço reconhecível do modelo se dissolve sob intervenção humana em cada escala
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: A consolidação do mercado em torno de difusão não se confirma e a disputa de fornecedores reabre
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A interoperabilidade dos sinais de controle vira o ponto de disputa de padrão, deslocando a competição do modelo para o formato de direção
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: O controle explícito reduz a dependência de escala bruta do modelo porque parte da precisão passa a vir do sinal humano
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Modelos menores somados a controle rico viabilizam produção local e sob demanda própria em mercados onde o custo de nuvem é proibitivo
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Estúdios fora do eixo Estados Unidos e China deixam de depender de interface de programação estrangeira para produzir, e a soberania produtiva em mídia sintética passa a ser questão de política pública
                sinal: fraco
                prazo: 2034
                confianca: baixa
```

### O que o bloco não diz

**A roda esconde que D1 e D3 se cruzam.** O efeito mais interessante do mapa inteiro não está em
nenhuma cadeia: é a soma de e6 com e1 — uma máquina de estados cujos estados são *gerados sob
direção*, e não desenhados à mão. Isso seria animação que responde a evento *e* que não precisa
existir antes de ser pedida. Nenhuma fonte aberta aqui mostra isso funcionando, então não
coloquei como efeito; registro como o cruzamento a vigiar.

**A roda esconde que e3 é de natureza diferente das outras.** Todos os outros efeitos de primeira
ordem são sobre *produção*. O e3 é sobre *epistemologia*: o que a sociedade aceita como
evidência. Ele tem sinal forte e confiança alta pela razão errada para quem só olha o número —
não porque eu saiba o que vai acontecer, mas porque a premissa (vídeo específico e plausível
ficou barato) já está satisfeita hoje. O que está em aberto é a resposta, não o problema.

**A roda esconde a assimetria de prazos entre a disrupção e a resposta institucional.** D1 se
concretiza em produto pago em 2025–2026. A resposta — procedência assinada — existe desde 2021 e
tem menos de 1% de penetração em imagens e vídeos jornalísticos [16]. Cadeias como e3.1 e e3.2
estão datadas em 2030 assumindo aceleração; é possível que simplesmente não aconteçam, e a
seção 7 trata disso.

**A roda esconde o Brasil.** Os efeitos e1.1.2, e5.1.1 e e8.1.1 carregam o recorte brasileiro,
mas o país aparece de forma assimétrica: o marco legal de IA não está em vigor (PL 2338 parado
na Câmara desde março de 2025 [17]) enquanto a autorregulação publicitária já se pronunciou e
vale desde junho de 2026 [18]. Ou seja, no Brasil o setor regulou antes do Estado. Isso é um
achado, não um detalhe.

## 6. Sinais fracos e wildcards

### Sinais fracos

**O mais sutil: animação que responde, não que toca.** A Rive não se vende como ferramenta de
IA e quase não aparece nas discussões de mídia sintética — e é ela que carrega a mudança
categorial mais profunda do tema. Uma peça animada que é máquina de estados multiplataforma [7]
não é vídeo: é software. Se esse for o formato dominante de mídia em movimento em produto, todo
o debate sobre "vídeo gerado por IA" estará mal colocado, porque a unidade de discussão já não
existirá.

**O segundo: a ferramenta mais controlável do conjunto não usa IA generativa.** O EbSynth
propaga estilo por síntese de textura guiada por fluxo óptico [4]. Se a direção fina é o valor,
e se métodos não-generativos entregam direção fina melhor em certos casos, então "IA" pode ser
o rótulo errado para a tendência inteira. O nome certo talvez seja *propagação dirigida*.

**O terceiro: dono de ferramenta mudou sem alarde.** O Cavalry pertence hoje à Canva e exige
conta Canva [8]. Quando a ferramenta procedural de motion design entra numa plataforma de
design de massa, o procedural deixa de ser prática de especialista — e isso é um caminho de
difusão bem mais rápido que o de IA generativa.

**O quarto: a infraestrutura de procedência começou pelo lugar improvável.** Não pelas câmeras
profissionais (nenhuma em conformidade até meados de 2026 [15]), mas pela CDN — Cloudflare, em
fevereiro de 2025 [16] — e por celular de consumo assinando por padrão [16]. Se a procedência
vier da infraestrutura de rede e do aparelho comum, e não do equipamento profissional, o mapa da
autenticidade muda de forma.

**O quinto: o CONAR se pronunciou antes do Congresso.** A regra brasileira em vigor sobre
conteúdo sintético em publicidade é autorregulatória e é de junho de 2026 [18], enquanto o marco
legal está parado desde março de 2025 [17]. O padrão "setor primeiro, Estado depois" é um sinal
fraco sobre *onde* a norma vai nascer no Brasil nos próximos cinco anos.

### Wildcards

**Wildcard 1 — um longa dirigido por uma pessoa entra na competição principal de um festival de
primeira linha (Cannes, Berlim, Veneza), sem categoria separada de IA.** Baixa probabilidade até
2031, impacto alto. O que muda: e1.1 salta de médio para forte e antecipa; e1.1.1 (formação)
deixa de ser terceira ordem e vira debate imediato; e o argumento de que controle fino é
"ferramenta de esboço" morre publicamente. Sinal precoce: um festival de primeira linha aceitar
inscrição sem exigir declaração de uso de IA. **Isto não é previsão** — é o evento cuja
ocorrência tornaria o resto do mapa mais rápido.

**Wildcard 2 — uma decisão judicial de grande repercussão rejeita vídeo como prova por
impossibilidade de autenticação.** Baixa probabilidade, impacto sistêmico. O que muda: e3.1 e
e3.2 deixam de ser mercado emergente e viram exigência; a assinatura na captura deixa de ser
diferencial de produto e vira requisito de admissibilidade. Sinal precoce: um tribunal citar
ausência de Content Credentials na fundamentação.

**Wildcard 3 — vazamento ou quebra criptográfica em larga escala de chaves C2PA de fabricante.**
Baixa probabilidade, mas não hipotética: já houve revogação de certificados da Nikon Z6III em
setembro de 2025 e forja documentada em Android com root em agosto de 2026 [15]. Se acontecesse
em escala, destruiria a confiança na procedência antes que ela chegasse a 1% de penetração — e
e3.1 inverteria de sinal, com o mercado de autenticidade colapsando em vez de nascer.

**Wildcard 4 — um modelo autoregressivo de próxima-escala entrega vídeo controlável em tempo
real de qualidade profissional.** Baixa probabilidade até 2031, impacto alto. É a condição que
faria D4 sair da margem do mapa para o centro dele, e que faria e7.1 e e8.1 dispararem juntos.

## 7. Contra o próprio mapa

### O efeito que é só extrapolação linear do presente

**e5 (custo marginal de variação a zero) e e5.2 (mídia por destinatário).** Esse é o raciocínio
mais preguiçoso do mapa: "ficou barato gerar, logo tudo vai ser personalizado". Essa previsão já
foi feita para texto, para e-mail e para banner, e o resultado prático foi personalização rasa
de template, não mídia genuinamente única por pessoa. O limite não é custo de geração — é custo
de *aprovação*: nenhuma marca solta ao público uma peça que ninguém revisou, e revisão não
escala com geração. Rebaixei e5.2 para `confianca: baixa` por causa disso, e e5.2.1 para sinal
fraco e prazo 2034.

### O efeito que assume velocidade de adoção sem caso comparável

**e3.1 e e3.2 (procedência e deslocamento da verificação), prazo 2030.** Estou assumindo que uma
infraestrutura com menos de 1% de penetração em cinco anos de existência [16] chegue a ser
funcionalmente relevante em quatro. Não conheço caso comparável de infraestrutura de confiança
que tenha feito esse salto sem mandato regulatório — HTTPS levou mais de uma década mesmo com
pressão de navegador. Mantive os efeitos porque a pressão existe, mas com `confianca: media` e
com os efeitos de terceira ordem em `baixa`. Se eu tivesse que apostar, apostaria que 2030 está
cedo demais e o certo seria 2033.

### A disrupção que pode simplesmente não se concretizar

**D4 (arquitetura em disputa).** O VAR é resultado de imagem em benchmark acadêmico
(ImageNet 256×256 [12][13]), premiado, replicado em trabalhos derivados — e sem nenhum produto
comercial de vídeo consultado aqui declarando essa arquitetura. É perfeitamente possível que a
difusão, com destilação e otimizações de inferência, cubra a vantagem de latência antes que o
autoregressivo chegue a vídeo em produção; e é possível que o ganho de 20× em imagem não se
traduza em vídeo, onde a coerência temporal domina o custo.

**Se D4 não acontecer:** e7, e7.1, e7.2, e8 e e8.1 caem — cinco efeitos de primeira e segunda
ordem, e quatro de terceira. O mapa perde cerca de um quarto do volume, mas **não muda de
direção**: D1, D2 e D3 não dependem de qual arquitetura vence. É por isso que D4 está em quarto
lugar e com todos os efeitos em sinal médio ou fraco. Registro isso explicitamente porque é a
crítica que eu mesmo faria primeiro.

### A cadeia que foi interrompida por falta de evidência

**D3 tem só um efeito de primeira ordem (e6), contra três de D1.** Tentei derivar dois outros —
"o formato de mídia animada converge para um padrão vetorial reativo" e "plataformas de
distribuição passam a aceitar componentes em vez de arquivos" — e os cortei: o primeiro depende
de a Rive vencer uma disputa de formato para a qual não achei nenhuma evidência de que esteja
sendo travada; o segundo pressupõe que plataformas de mídia social aceitem executar código de
terceiros, contra o que há um histórico longo e explícito em sentido contrário (o fim do Flash).
Preferi uma cadeia curta e honesta a três ramificações decorativas.

### Que fonte, número ou autoria pode estar errado

Três pontos frágeis, declarados:

1. **Os números de adoção de ComfyUI, Remotion e Rive são autodeclarados pelos fornecedores**
   ([5], [6], [7]) — "60.000+ nós", "5M+ instalações/mês", "4× mais rápido", "arquivos até 90%
   menores". Instalações mensais de pacote npm contam CI e reinstalação, não usuários. Tratei
   todos como indício de tração, nunca como medida.
2. **O dado do Reuters Institute sobre menos de 1% de imagens com C2PA** chegou a mim por
   citação em análise secundária [16], não pelo relatório original — não localizei e não abri o
   estudo-fonte. É o número mais importante do mapa e é o que eu menos verifiquei. Ele sustenta
   toda a crítica de prazo em e3.1.
3. **Os números do VAR** ([12][13]) são autorreportados no artigo, em benchmark único. Premiação
   no NeurIPS atesta qualidade de revisão por pares, não reprodução independente em produção.

### Que viés entrou aqui

Dois, e ambos empurram o mapa na mesma direção.

**Viés de seleção de fonte.** A maior parte das fontes de estado atual é *página de produto de
fornecedor* — Runway, BFL, Luma, ComfyUI, Remotion, Rive, Cavalry, Adobe, EbSynth. Fornecedor
descreve capacidade no melhor caso, sem taxa de acerto, sem custo por tentativa, sem o que falha.
Isso infla sistematicamente a sensação de que o controle já funciona. O antídoto que apliquei foi
puxar o survey acadêmico [10] e o artigo de trajetória [11], mas ambos também são de autores que
trabalham no campo e têm interesse em declará-lo promissor. **Não há neste mapa uma única fonte
de alguém que tentou usar essas ferramentas em produção e relatou fracasso.** É a maior lacuna
do levantamento.

**Viés do recorte da disciplina.** A régua "o que já é comum em produto de massa está fora"
força o mapa a olhar só para o emergente — o que estruturalmente favorece a narrativa de ruptura
e esconde a possibilidade mais provável de todas: que nada disso rompa nada, que o controle fino
vire mais um painel de opções no Premiere, e que a produção audiovisual siga como está com
custos um pouco menores. Registro essa hipótese aqui porque a estrutura da skill não tem onde
colocá-la.

Sobre o viés pessoal de ter escolhido o tema: não escolhi. O tema foi atribuído (tema 12 de 19).
O que me interessa na zona "Percepção e mídia sintética" é a pergunta de e3 — o que acontece com
a prova — e é possível que isso explique por que e3 é a cadeia mais desenvolvida do mapa e por
que dei a ela `confianca: alta` quando dei `media` a quase tudo mais.

## 8. O que a máquina errou

**Erro 1 — atribuição de capacidade a partir de nome, não de página.** Pedi à ferramenta de
leitura que confirmasse na página da Pika os recursos "Modify Region", "Pikaffects" e
"Pikaswaps", que são os nomes pelos quais essas funções circulam em discussão pública e que
constam do próprio enunciado do tema. A página aberta em setembro de 2026 **não menciona nenhum
dos três**: descreve Video Studio, Color Grade, Extend Video, Edit Image e Character Studio, e
oferece "swap, remove, or restyle anything in an image" [fonte não incluída na lista final]. Se
eu não tivesse pedido confirmação literal, teria escrito que a Pika oferece edição por região
citando a própria Pika como fonte — e estaria citando a lembrança do modelo, não a página.
**Consequência:** tirei a Pika da seção 3 e das fontes. Ela aparece só no frontmatter, como
tecnologia citada no enunciado do tema, e no anexo.

**Como percebi:** porque a ferramenta respondeu explicitamente que os termos "não estão
mencionados" em vez de parafrasear. Se ela tivesse resumido a página sem essa negação, eu não
teria notado. Esse é o formato de pergunta que salvou o item: *confirme que o termo X aparece
literalmente*, e não *descreva as capacidades*.

**Erro 2 — volume de dado citado em fonte secundária, ausente na leitura direta.** A busca
retornou, com aparência de fato, que "o TikTok rotulou mais de 1,3 bilhão de vídeos gerados ou
editados por IA usando C2PA, a maior implantação por volume até meados de 2026". Ao abrir a
análise que supostamente continha o número [16], a leitura devolveu: o TikTok adotou Content
Credentials, **"though the article doesn't specify volume figures"**. O número redondo de 1,3
bilhão é exatamente o tipo de cifra que circula em resumo e desaparece na fonte. **Não entrou no
documento.**

**Erro 3 — autoria e afiliação incompletas apresentadas como completas.** Na primeira leitura do
VAR pelo repositório do NeurIPS, obtive os cinco autores sem nenhuma ressalva. Ao confirmar pelo
arXiv [13], a resposta foi explícita: "afiliação não declarada no conteúdo da página". A
afiliação do VAR (ByteDance) é amplamente conhecida e eu poderia tê-la escrito de memória — é
exatamente esse o momento em que se inventa uma fonte. **Não escrevi.** No documento, o VAR
aparece com autores e sem afiliação.

**Erro 4 — versão de especificação divergente entre duas fontes abertas, sem que nenhuma das
duas avisasse.** A página da C2PA, consultada com data de atualização de 08/01/2026, apresenta a
2.3 como especificação disponível [14]; a enciclopédia registra a 2.4 como versão atual, de
abril de 2026 [15]. Nenhuma das duas leituras sinalizou a contradição — cada uma respondeu com
confiança dentro do seu próprio recorte. Se eu tivesse aberto só uma, teria datado errado o
estado do padrão. Resolvi **citando as duas com as respectivas datas**, em vez de escolher.

**Erro geral de comportamento, sem item único:** toda leitura de página de produto voltou
otimista. Nenhuma devolveu limitação, preço por geração, taxa de falha ou caso de uso em que a
ferramenta não serve — exceto o EbSynth [4], que publica as próprias limitações na página. A
máquina não mente aqui; ela reproduz o material de marketing que leu. O erro seria meu, se eu
tratasse isso como levantamento de capacidade real.

## 9. Três cenários para 2031

**Provável.** Em 2031 o controle fino virou painel. Todo editor de vídeo relevante tem pincel de
região, trajetória desenhável e quadro-chave propagável, e ninguém mais chama isso de IA — chama
de ferramenta, como ninguém chama de IA o estabilizador de imagem. O estúdio de uma pessoa
existe e entrega bem no mercado de peça curta, mas o longa continua sendo feito por equipe,
porque o gargalo nunca foi o plano: foi a decisão sobre o plano, e decisão não paraleliza. O
pipeline virou entregável em publicidade e em conteúdo de marca, e não virou em cinema. A
procedência assinada avançou onde havia mandato — eleição, publicidade regulada, jornalismo de
grande veículo — e não avançou no resto; a maior parte do vídeo que circula não tem credencial e
ninguém checa as que têm. A discussão pública sobre "vídeo falso" cansou e foi substituída por
uma indiferença prática: as pessoas passaram a confiar em fontes, não em imagens, sem que isso
tenha sido decidido em lugar nenhum.

**Desejável.** Em 2031 a direção se tornou portátil. Existe um formato aberto para descrever
sinais de controle — região, trajetória, pose, câmera, quadro-chave — que funciona entre
ferramentas, do jeito que um arquivo de legenda funciona entre players; a direção de um plano
sobrevive à troca de fornecedor, e o trabalho de quem dirige acumula em vez de ser reaprendido a
cada modelo. A procedência foi resolvida por onde começou a dar certo: infraestrutura de rede e
aparelho comum, assinando por padrão, sem que o usuário precise entender nada — e as plataformas
pararam de remover metadados no upload, porque foram obrigadas. Formação em mídia e em
computação se reorganizou junto, e a pessoa que sai de um curso de animação sabe ler um grafo.
No Brasil, o marco legal saiu, com rotulagem obrigatória de conteúdo sintético, e o custo de
produção local caiu o bastante para que produção audiovisual regional exista fora do eixo
Rio–São Paulo. **O que teria de ser feito para chegar lá:** o formato aberto de controle precisa
nascer de consórcio, e nenhum fornecedor tem incentivo para começá-lo — teria de vir de
pesquisa pública ou de exigência de comprador grande.

**Indesejável.** Em 2031 a direção fina é proprietária e cara. Cada fornecedor tem seu
vocabulário de controle, incompatível por desenho, e a competência profissional é específica de
plataforma — trocar de fornecedor custa reaprender o ofício, o que dá a um punhado de empresas
poder sobre uma categoria inteira de trabalho. A procedência virou barreira em vez de garantia:
como assinar na captura exige equipamento certificado, quem tem infraestrutura tem voz, e vídeo
de celular comum de quem denuncia algo é descartado por não ter credencial — a ferramenta criada
para proteger a prova passou a filtrar quem pode produzi-la. No Brasil, o marco legal continua
parado, a autorregulação setorial é o que existe, e ela alcança publicidade e não alcança o
resto. **Sinal precoce deste cenário:** o primeiro caso em que um vídeo autêntico e relevante é
publicamente descartado por não ter Content Credentials. Se isso aparecer antes de 2029, é este
o cenário em curso.

## 10. O experimento

### O que é

**Bancada de direção** — uma bancada comparativa em que o **mesmo plano** é dirigido por quatro
sinais de controle diferentes, com tudo registrado:

1. **prompt puro** (linha de base: a loteria);
2. **região do quadro** (marcar uma área e pedir a mudança só ali);
3. **trajetória desenhada** (arrastar o caminho de um objeto e da câmera, à moda do ATI [11]);
4. **quadro-chave pintado e propagado** (pintar um quadro à mão e propagar, à moda do EbSynth
   [4]).

Cada rodada registra automaticamente: o sinal de controle usado, o tempo até um resultado
aceitável, o número de tentativas, e o grafo exato que gerou a saída — versionado, de modo que
qualquer pessoa da turma consiga repetir a rodada de outra pessoa. As saídas são assinadas com
procedência declarada, para que a bancada também demonstre, na prática, onde a cadeia de
assinatura quebra ao passar pelas ferramentas.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta de e1: **especificar é mesmo mais barato que gerar?** O mapa inteiro assume que o
custo se desloca de produzir para dirigir. Isso é afirmado por fornecedores e por artigos de
quem propõe métodos de controle — e não foi medido por ninguém que eu tenha lido. A bancada mede
a coisa mais simples possível: *quantas tentativas e quanto tempo* para chegar ao plano que a
pessoa tinha na cabeça, por tipo de sinal. Secundariamente, responde à pergunta de e4: **o grafo
é mesmo reproduzível?** Basta ver se a rodada de uma pessoa roda na máquina de outra.

### Que tecnologia emergente ele usa, e por que não dá com tecnologia madura

Usa edição dirigida por instrução com edição local e consistência de referência (FLUX.1 Kontext,
inclusive a versão aberta de 12B [2]), controle por trajetória (família ATI/FlexTraj [11]),
propagação por quadro-chave (EbSynth [4]) e orquestração por grafo versionável (ComfyUI [5]).

Não dá com tecnologia madura por uma razão exata: **a tecnologia madura não tem o que comparar.**
Em ferramenta madura, dirigir um plano é rotoscopar e animar à mão — o que sempre foi
controlável e sempre foi caro. A pergunta do experimento só existe quando há mais de um jeito de
dirigir a mesma geração, e isso é de 2025 em diante. A linha de base madura entra na bancada
como quinta coluna, justamente para medir quanto a alternativa emergente economiza — ou não.

### O que a turma vai fazer quando testar isso em sala

Cada pessoa recebe **o mesmo plano-alvo descrito por escrito** (por exemplo: um objeto atravessa
o quadro da esquerda para a direita passando atrás de um poste, com a câmera acompanhando em
*pan* e mudança de luz no meio do movimento) e **um sinal de controle sorteado**. Todo mundo
tenta chegar ao mesmo alvo com o instrumento que lhe coube, cronometrando e contando tentativas.
No fim, quatro coisas vão para o quadro: (a) tempo e tentativas por tipo de sinal; (b) quais
partes do alvo nenhum sinal conseguiu acertar; (c) o resultado de rodar o grafo de outra pessoa;
(d) quantas das saídas chegaram ao fim com procedência intacta.

### O que seria um resultado que me faria mudar de ideia

**Três resultados, cada um derrubando uma parte específica do mapa:**

- **Se o prompt puro empatar** com os sinais espaciais em tempo e tentativas para chegar ao alvo,
  então D1 não é disrupção — é preferência de interface, e e1 cai junto com toda a cadeia que
  sai dele. Este é o resultado que mais me faria mudar de ideia, e é plausível: pode ser que o
  gargalo real seja formular o alvo, não transmiti-lo.
- **Se o grafo de uma pessoa não rodar na máquina de outra** na maioria das tentativas, D2 está
  errada na forma em que a escrevi: o pipeline não é artefato transferível, é configuração local,
  e "o entregável é o programa" (e4) vira retórica.
- **Se a procedência sobreviver ao percurso inteiro** sem esforço especial, então a crítica de
  prazo em e3.1 está pessimista demais e o cenário indesejável perde o principal gatilho.

## 11. Fontes

Todas abertas e lidas em 18/09/2026. Confiabilidade declarada por tipo.

1. **Runway — Introducing Runway Aleph.** `https://runway.com/research/introducing-runway-aleph`
   — Sustenta: edição de vídeo *in-context* com adicionar/remover/transformar objeto, gerar
   ângulos novos, alterar estilo e iluminação; anúncio em 25/07/2025; disponível a usuários
   pagos. *Confiabilidade:* anúncio de fornecedor sobre produto próprio — confiável para
   **existência e data**, não para desempenho.

2. **Black Forest Labs — FLUX.1 Kontext.** `https://bfl.ai/models/flux-kontext` — Sustenta:
   edição por instrução, consistência de personagem entre cenas, edição local, referência de
   estilo, tipografia; variantes max/pro/dev, esta última aberta com 12B parâmetros.
   *Confiabilidade:* página de fornecedor — confiável para capacidade declarada e para o fato de
   haver versão aberta; sem métrica de acerto.

3. **Luma — Dream Machine / Luma Agents.** `https://lumalabs.ai/dream-machine` — Sustenta:
   animar imagem parada, movimento de câmera, transições entre quadros, extensão de cena,
   consistência por *master reference assets*. *Confiabilidade:* fornecedor. **Ressalva
   registrada:** a página consultada não menciona explicitamente "quadro inicial e final" — a
   leitura devolveu essa ausência, e por isso o keyframe da Luma **não** é afirmado neste
   documento com base nesta fonte.

4. **EbSynth.** `https://ebsynth.com/` — Sustenta: propagação de edição a partir de quadro-chave
   por síntese de textura (não IA generativa); autoria de Šárka Sochorová e Ondřej Jamriška;
   limitações declaradas (dependência de fluxo óptico, artefatos de ondulação e alongamento,
   720p no plano gratuito, só desktop). *Confiabilidade:* **a melhor do conjunto de
   fornecedores**, porque publica as próprias limitações.

5. **ComfyUI.** `https://www.comfy.org/` — Sustenta: controle sobre modelo, nó, etapa e saída;
   pipelines por grafo em tela infinita; mais de 60.000 nós; clientes citados (Amazon Studios,
   Apple, Netflix, Nike, Ubisoft). *Confiabilidade:* fornecedor; números **autodeclarados**,
   tratados como indício de tração.

6. **Remotion.** `https://www.remotion.dev/` — Sustenta: vídeo programático em React, render
   parametrizado e em lote, componente Player; mais de 5 milhões de instalações/mês, 59 mil
   estrelas, mais de 300 clientes; licenciamento por empresa de US$ 25 a US$ 500+/mês.
   *Confiabilidade:* fornecedor; **instalações mensais de pacote não medem usuários** (contam CI
   e reinstalação) — usado só como indício de tração.

7. **Rive.** `https://rive.app/` — Sustenta: *interactive experience engine*; *state machine*
   respondendo a evento; runtimes abertos para web, iOS, Android, macOS, Flutter, React, Unity e
   Unreal; clientes citados (Spotify, Duolingo, Disney, Google); alegação de produção 4× mais
   rápida e arquivos até 90% menores que After Effects/Figma/Lottie. *Confiabilidade:*
   fornecedor; as duas alegações numéricas são de marketing e **não foram usadas como evidência**
   de nenhum efeito.

8. **Cavalry.** `https://cavalry.studio/` — Sustenta: animação 2D em tempo real, fluxo baseado em
   sistemas e regras ("ajuste um valor, veja sistemas inteiros responderem"), *duplicator*,
   importação de dados; gratuito para indivíduos; pertence à Canva e exige conta Canva.
   *Confiabilidade:* fornecedor — confiável para **modelo de trabalho e mudança de dono**.

9. **Adobe Firefly.** `https://www.adobe.com/products/firefly.html` — Sustenta: treinamento em
    conteúdo licenciado do Adobe Stock e domínio público; não treina em conteúdo pessoal de
    assinantes; "comercialmente seguro"; saídas com Content Credentials. *Confiabilidade:*
    **declaração jurídica de parte interessada** — é a alegação da Adobe sobre si mesma, não uma
    auditoria. Vale como posição de mercado, não como fato sobre os dados.

10. **Ma, Yue et al. — *Controllable Video Generation: A Survey*.** arXiv 2507.16869.
    `https://arxiv.org/abs/2507.16869` — Sustenta: a insuficiência do texto como sinal de
    controle; taxonomia em condição única, múltiplas condições e controle universal; sinais de
    controle como câmera, profundidade e pose; submissão 22/07/2025, versão final 19/01/2026.
    *Confiabilidade:* **alta para o recorte do campo**; é preprint (arXiv), com 23 autores atuantes
    na área — parcialidade de campo assumida.

11. **Wang, Angtian et al. — *ATI: Any Trajectory Instruction for Controllable Video
    Generation*.** arXiv 2505.22944. `https://arxiv.org/abs/2505.22944` — Sustenta: unificação de
    movimento de câmera, translação de objeto e movimento local por trajetórias desenhadas;
    módulo leve de injeção de movimento sobre modelos imagem-para-vídeo pré-treinados; submissão
    28/05/2025. *Confiabilidade:* preprint arXiv, **sem revisão por pares confirmada** —
    confiável para o método proposto, não para superioridade.

12. **Tian, Keyu et al. — *Visual Autoregressive Modeling: Scalable Image Generation via
    Next-Scale Prediction*.** NeurIPS 2024 (Advances in NeurIPS 37).
    `https://proceedings.neurips.cc/paper_files/paper/2024/hash/9a24e284b187f662681440ba15c416fb-Abstract-Conference.html`
    — Sustenta: FID 18,65 → 1,73; IS 80,4 → 350,2; ~20× mais rápido; primeira vez que AR estilo
    GPT supera transformers de difusão; leis de escala e generalização zero-shot.
    *Confiabilidade:* **a mais alta do conjunto** — revisão por pares, melhor artigo do NeurIPS
    2024. Ressalva: números autorreportados em benchmark único (ImageNet 256×256), sem replicação
    independente verificada por mim.

13. **arXiv 2404.02905 — mesma obra, registro de preprint.** `https://arxiv.org/abs/2404.02905` —
    Sustenta: título, os cinco autores (Keyu Tian, Yi Jiang, Zehuan Yuan, Bingyue Peng, Liwei
    Wang), submissão em 03/04/2024, revisão em 10/06/2024. *Confiabilidade:* alta para metadados.
    **Afiliação não consta da página** e por isso não é afirmada neste documento.

14. **C2PA — site oficial.** `https://c2pa.org/` — Sustenta: definição de Content Credentials
    como "rótulo nutricional"; comitê diretor (Adobe, Amazon, BBC, Google, Meta, Microsoft,
    OpenAI, Publicis, Sony, TikTok, Truepic); especificação 2.3 na página, atualizada em
    08/01/2026. *Confiabilidade:* **fonte primária institucional** para o padrão — parcial quanto
    ao sucesso da adoção.

15. **Content Credentials — verbete enciclopédico.**
    `https://en.wikipedia.org/wiki/Content_Credentials` — Sustenta: especificação inicial em
    dezembro de 2021 e versão 2.4 em abril de 2026; câmeras no mercado na versão legada 1.4 e
    nenhuma em conformidade oficial até meados de 2026; revogação de certificados da Nikon Z6III
    após vulnerabilidade em setembro de 2025; forja em Android com root em agosto de 2026; BBC
    modificando manifests no upload; e a crítica conceitual de que **a credencial atesta origem,
    não veracidade**. *Confiabilidade:* **média** — verbete colaborativo, denso em citações, com
    viés crítico; usei-o para as **falhas**, que são o que ele documenta melhor, e cruzei a
    versão da especificação com [14], que diverge.

16. **SoftwareSeni — *C2PA Adoption in 2026: Hardware, Platforms and Verification Reality*.**
    `https://www.softwareseni.com/c2pa-adoption-in-2026-hardware-platforms-and-verification-reality/`
    — Sustenta: Google Pixel 10 assinando todas as fotos por padrão com chaves ancoradas em
    hardware; Sony PXW-Z300 como primeiro camcorder com assinatura C2PA nativa (IBC 2025);
    Cloudflare como primeiro CDN grande, em fevereiro de 2025; C2PA 2.3 (dezembro de 2025) com
    assinatura de segmento CMAF para transmissão ao vivo; remoção de metadados por plataformas; e
    a citação do Reuters Institute de **menos de 1% de imagens/vídeos noticiosos com metadados
    C2PA**. *Confiabilidade:* **a mais fraca das que usei para número** — análise de empresa de
    software, não de instituto de pesquisa. O dado do 1% é **citação de segunda mão**; não abri o
    relatório original do Reuters Institute. Declarado como limitação na seção 7. A mesma leitura
    **negou** conter o número de 1,3 bilhão de vídeos do TikTok que circulava na busca.

17. **Senado Federal — PL 2338/2023, marco legal da IA.**
    `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233` — Sustenta: autoria do
    senador Rodrigo Pacheco em 03/05/2023; aprovação no plenário do Senado em 10/12/2024; remessa
    à Câmara em 17/03/2025; tramitação encerrada no Senado; 244 emendas na comissão temporária;
    consulta pública com 35.806 votos a favor e 31.547 contra. *Confiabilidade:* **fonte primária
    oficial** — a mais confiável do conjunto para estado de tramitação.

18. **TozziniFreire — *Novo guia do CONAR: o que muda para campanhas com influenciadores
    digitais*.** `https://tozzinifreire.com.br/boletins/novo-guia-do-conar-o-que-muda-para-campanhas-com-influenciadores-digitais`
    — Sustenta: publicação do guia em 21/05/2026 com efeitos a partir de 01/06/2026; aplicação das
    regras independentemente da tecnologia; IA generativa, influenciadores virtuais, avatares,
    deepfakes e conteúdo sintético não afastam responsabilidade da cadeia publicitária.
    *Confiabilidade:* boletim de escritório de advocacia — **confiável para datas e teor**, é
    leitura secundária de documento do CONAR que **não abri diretamente**.

### Fontes que a busca ofereceu e que eu não abri (portanto não uso)

Registradas para honestidade do levantamento: as páginas comerciais de Kling e Veo sobre quadro
inicial/final, sequência multi-plano e *motion control* (`https://runway.com/product/models/kling-3.0`
e `https://kling.ai/blog/best-ai-video-generator-2026-kling-ai`) — apareceram na busca, **não foram
abertas diretamente**, e por isso essas capacidades não sustentam nenhuma afirmação nem nenhum efeito
deste mapa; a página do TSE sobre regras de IA na campanha de
2026 (**HTTP 403** — não abriu, e por isso a Resolução 23.748 **não é afirmada** neste
documento); a matéria do Hollywood Reporter sobre o acordo do Animation Guild (redirecionamento
para domínio de paywall, não seguido); a página de contratos do Animation Guild, que abriu mas
**não contém** cláusula de IA — só a vigência do acordo mestre de 01/08/2024 a 31/07/2027; e as
páginas de festivais de cinema de IA. Nada de nenhuma delas entrou no documento. Em particular:
**o número de 21,4% de empregos de cinema, TV e animação afetados nos EUA, que a busca devolveu,
não foi usado**, porque não abri a fonte primária.

## 12. Anexo — o levantamento bruto

### A.1 A entrevista, como foi resolvida

A skill exige entrevista com oito campos confirmados e diz explicitamente: *não preencha lacunas
com suposições*. Nesta rodada **não havia interlocutor** — a execução foi automatizada e as
respostas vieram pré-fornecidas no despacho. Isso é uma violação do espírito da §1 da skill, e
fica registrada aqui como tal. Os valores usados:

| campo | valor | origem |
|---|---|---|
| tema | Mídia sintética controlável: vídeo e imagem | fornecido |
| recorte | a imagem em movimento como mídia sintética dirigível; controle fino sobre geração | fornecido + enunciado do tema |
| horizonte | 2031 | fornecido |
| público | quem projeta mídia e interação | fornecido |
| região | global, com nota sobre o Brasil | fornecido |
| objetivo | mapa de futuro da disciplina, movimento 2 | inferido do contexto |
| exclusões | o que já é comum em produto de massa (régua da disciplina); nenhuma outra | fornecido |
| viés | neutro | fornecido |

Campos que eu teria perguntado se houvesse a quem: (a) o mapa deve contemplar o *mercado* de
produção audiovisual brasileiro ou só a prática de quem projeta? — resolvi por ambos, com o
mercado em segundo plano; (b) "quem projeta mídia e interação" inclui jornalismo? — assumi que
sim, porque a cadeia e3 é onde o tema morde mais fundo; (c) o horizonte 2031 vale para os
efeitos de terceira ordem ou eles podem ultrapassar? — assumi que podem, e vários estão em 2032,
2033 e 2034, com o horizonte 2031 servindo aos cenários da seção 9.

**Critério declarado de mudança de ideia, fornecido no despacho:** evidência de que a adoção já
passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada. Aplicação: a segunda
condição é levada a sério na seção 7 e é o que rebaixa D4 e a cadeia e5. A primeira **não** pôde
ser testada — nenhuma fonte aberta traz dado de penetração de controle fino entre profissionais
de mídia. É uma lacuna e é declarada.

### A.2 As consultas de busca, na ordem em que foram feitas

1. `controllable video generation 2026 keyframe control Runway Kling Veo motion control` — rendeu
   o panorama comercial; a maioria dos resultados era conteúdo de comparação de produto com
   intenção promocional. Aproveitei dois; descartei sete.
2. `Visual Autoregressive Modeling VAR NeurIPS 2024 best paper scale prediction` — rendeu o
   registro no NeurIPS e o arXiv, além de uma fila de derivados de 2025–2026 (MVAR, LSRS,
   *Adaptive Visual Autoregressive Acceleration*, *Next-Scale Prediction for denoising*), que
   usei como **indício de vitalidade da linha** sem citar nenhum individualmente.
3. `C2PA Content Credentials adoption 2026 camera video provenance` — rendeu o material de
   procedência; a maior parte dos resultados era conteúdo de marketing de empresas de verificação.
4. `arXiv survey controllable video generation 2025 2026 trajectory camera control ControlNet` —
   rendeu o survey e a família de trajetória (RealCam, PostCam, VidCRAFT3, LAMP, ATI, TriMotion,
   Track2View, Wan-Move, FlexTraj). Abri só o survey e o ATI.
5. `Brasil PL 2338 marco legal inteligência artificial 2026 direito de imagem dublagem audiovisual deepfake`
   — rendeu a página do Senado e a pista do TSE.
6. `AI generated film festival 2026 feature made by one person animation jobs Animation Guild contract AI`
   — rendeu o material do wildcard 1 e do trabalho sindicalizado. **Quase nada sobreviveu à
   verificação** (ver A.4).
7. `Brasil audiovisual publicidade IA generativa 2026 CONAR regras conteúdo sintético mercado produção`
   — rendeu o guia do CONAR e a resolução do TSE.

### A.3 Leituras diretas feitas, incluindo as que falharam

Abertas com sucesso: NeurIPS/VAR, arXiv 2404.02905, arXiv 2507.16869, arXiv 2505.22944,
Wikipedia/Content Credentials, c2pa.org, rive.app, bfl.ai/flux-kontext, comfy.org, remotion.dev,
adobe.com/firefly, ebsynth.com, runway.com/research/aleph (após redirecionamento 308),
cavalry.studio (após redirecionamento 301), lumalabs.ai/dream-machine, pika.art, senado/PL 2338,
tozzinifreire/CONAR, softwareseni/C2PA 2026.

Falharam ou foram abandonadas: `tse.jus.br` (**403 Forbidden**); `hollywoodreporter.com`
(redirecionamento 307 para domínio de paywall, não seguido); `animationguild.org/tag-contracts-wages`
(abriu, mas **sem conteúdo de cláusula de IA** — só a vigência 01/08/2024–31/07/2027).

### A.4 O que a busca ofereceu como fato e a leitura direta não sustentou

Este é o achado metodológico mais útil da rodada. Quatro itens:

| alegação vinda da busca | o que a leitura direta devolveu | destino |
|---|---|---|
| TikTok rotulou 1,3 bilhão de vídeos por C2PA, maior implantação por volume | *"the article doesn't specify volume figures"* | **cortado** |
| Pika oferece Modify Region / Pikaffects / Pikaswaps | nenhum dos três termos aparece na página | **cortado**; Pika sai das fontes |
| França Télévisions como primeiro broadcaster a usar C2PA diariamente; ARD e BBC R&D em teste | não reencontrado na leitura direta da análise | **cortado** |
| ~21,4% dos empregos de cinema/TV/animação nos EUA afetados por IA generativa até 2026 (~118.500 postos) | fonte primária não aberta (paywall) | **cortado** |
| acordo do Animation Guild com cláusula de notificação e consulta, sem direito de recusa nem de impedir treino | fonte primária não aberta; a página do sindicato não traz a cláusula | **cortado** |
| Kling O3 com orientação temporizada por quadro-chave e saída até 4K; Kling VIDEO 3.0 com até seis planos numa passada | vem de material do próprio Kling | **usado só em parte**, como existência de função |

O padrão é consistente: **resumo de busca produz número redondo e atribuição confiante que a
página não sustenta.** Cortei cinco alegações inteiras por isso, quatro delas com número.

### A.5 Efeitos que foram escritos e removidos, com o motivo

- **"O mercado de banco de imagens em vídeo colapsa."** Removido: extrapolação sem evidência
  aberta; e o caso do Firefly [9] sugere o contrário — acervo licenciado virou *insumo de
  treino* e ativo jurídico, não estoque em extinção. Pode ser que o banco de imagens não morra e
  sim mude de função, o que é uma hipótese diferente da que eu ia escrever.
- **"Dublagem e locução no Brasil são substituídas."** Removido do mapa: é o tema 13 (som e voz),
  fora da fronteira declarada deste tema. Registro que a busca 5 foi formulada com essa palavra e
  que eu tive de me segurar para não invadir o tema vizinho.
- **"O formato de mídia animada converge para um padrão vetorial reativo."** Removido: dependeria
  de uma disputa de formato para a qual não achei nenhuma evidência de que esteja sendo travada.
- **"Plataformas de distribuição passam a aceitar componentes executáveis em vez de arquivos."**
  Removido: contraria histórico explícito (o fim do Flash) e eu não tinha nada a opor a esse
  histórico.
- **"Deepfake eleitoral se torna crime tipificado com pena específica."** Removido: a única base
  era resumo de busca sobre a Resolução 23.748 do TSE, e **a página do TSE devolveu 403**. Sem
  fonte aberta, não entra — nem como efeito, nem como menção afirmativa no corpo do texto.
- **"Consistência de personagem viabiliza séries inteiras geradas."** Rebaixado de efeito a
  viabilizador de e1. Motivo: consistência é melhoria de qualidade; sozinha, não rompe papel.
- **"Custo de VFX cai 90%."** Removido: número inventado por mim ao rascunhar, sem nenhuma fonte.
  Registro aqui porque a skill pede o que foi descartado, e porque o impulso de escrever um
  número redondo plausível é exatamente o erro que a seção 8 descreve na máquina — e que o humano
  comete igual.

### A.6 Inferências causais explicitadas (o que é raciocínio meu, não fato de fonte)

A skill exige separar fato, inferência e hipótese. Os fatos estão na seção 3 com numeração de
fonte. As **inferências** que sustentam o mapa, e que nenhuma fonte afirma:

1. *Se o texto é insuficiente como controle [10] e métodos leves de injeção de condição existem
   [11], então o gargalo do trabalho profissional se desloca para a especificação.* — Inferência.
   Ninguém mediu isso. É a base de e1 e é o que o experimento da seção 10 testa.
2. *Se o entregável é um grafo [5][6], então o objeto de propriedade e de crédito muda.* —
   Inferência jurídica de leigo, sem nenhuma fonte jurídica aberta. Sustenta e4.1.1 e e1.2.1,
   ambos em confiança baixa por isso.
3. *Se a peça animada responde a evento e roda em oito plataformas [7], então a categoria "vídeo"
   se desestabiliza.* — Inferência conceitual, forte no argumento e sem nenhuma evidência de
   mercado. É a razão de e6.1.1 estar em `confianca: baixa`.
4. *Se produzir um plano específico e plausível ficou barato, o valor probatório do vídeo cai.* —
   Inferência, mas com premissa satisfeita e com uma resposta institucional já em curso [14][15]
   [16], o que é evidência indireta de que o problema é reconhecido por Adobe, BBC, Google, Meta,
   Microsoft, OpenAI, Sony e TikTok. É por isso — e só por isso — que e3 leva `confianca: alta`.
5. *Se controle rico compensa parte da escala do modelo, produção local vira viável.* —
   **Hipótese, não inferência.** Não tenho nada. e8 e e8.1 estão em sinal fraco e confiança baixa
   e são os efeitos que eu cortaria primeiro se alguém me pressionasse.

### A.7 Limitações declaradas desta rodada

1. **Nenhuma fonte de fracasso.** Não abri um único relato de quem tentou usar controle fino em
   produção e não conseguiu. Todo o estado atual vem de quem vende ou de quem publica método. É a
   limitação mais séria e ela enviesa o mapa para o otimismo.
2. **Nenhum dado de adoção real.** Não há aqui nenhuma medida de quantos profissionais usam
   controle fino, com que frequência, em que tipo de trabalho. Sem isso, a régua de Rogers pedida
   no critério de mudança de ideia não pôde ser aplicada.
3. **Nenhuma fonte em português sobre o mercado audiovisual.** As duas fontes brasileiras são
   jurídicas ([17] regulatória, [18] autorregulatória). Não abri nada sobre produção audiovisual
   brasileira, ANCINE, ou uso de mídia sintética em produção nacional. A "nota sobre o Brasil"
   pedida no recorte saiu, portanto, **jurídica e não produtiva** — o que é uma distorção do que
   foi pedido, e fica declarada.
4. **Datas do horizonte são estimativas minhas.** Nenhum `prazo` no bloco `roda` vem de fonte.
   São julgamentos, e o mais provável é que estejam otimistas em dois a três anos nos efeitos de
   segunda e terceira ordem — conforme argumentado na seção 7.
5. **A entrevista da §1 não aconteceu** (ver A.1), o que é desvio da skill e reduz a confiança do
   recorte, não do levantamento.
6. **A especificação C2PA aparece em duas versões** (2.3 na fonte primária [14], 2.4 na
   secundária [15]) e eu não resolvi a divergência — citei as duas. Quem usar este documento para
   decidir algo sobre procedência precisa checar a versão vigente na data.
7. **Não verifiquei nenhuma das alegações de desempenho de fornecedor.** Nem 4× mais rápido, nem
   90% menor, nem 20× de inferência: os dois primeiros são marketing [7] e o terceiro é
   autorreportado em benchmark [12].

### A.8 Nota sobre a régua da disciplina

A régua — "o que já é comum em produto de massa fica de fora" — tem um efeito colateral que vale
registrar para a aula. Ela é a única exclusão desta rodada, e ela **estrutura o resultado**: ao
proibir o maduro de entrar como raiz, ela garante que o documento encontre disrupções. Um mapa
honesto do tema 12 talvez devesse ter, como primeira hipótese testada e possivelmente aceita,
"nada aqui rompe: o controle fino é a próxima caixa de diálogo". A skill pede explicitamente que
se diga quando não há disrupções sustentáveis; eu não disse isso, e acho que quatro raízes é
defensável — mas a raiz D4 é frágil por evidência (seção 7) e a cadeia e5 é frágil por
raciocínio. Se alguém quiser derrubar este mapa, é por aí.
