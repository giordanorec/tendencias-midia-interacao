---
tema: "Mídia sintética controlável: vídeo e imagem"
slug: midia-sintetica-controlavel-video-e-imagem
autor_login: grec
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-22
horizonte: 2046
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 13
efeitos_ordem_2: 17
efeitos_ordem_3: 17
tecnologias_citadas: [Runway Aleph, Runway Gen-4, Google Veo 3.1, Google Flow, Kling, Sora, LTX-2, ComfyUI, EbSynth 2, Rive, Cavalry, Remotion, satori, VAR, NextStep-1, Genie 3, Matrix-Game 3.0, Causal Forcing++, C2PA, Content Credentials, Midjourney, Adobe Firefly, Magnific, LoRA, ControlNet, Pika, Luma Dream Machine, FLUX, Pixel 10]
fontes: 27
confianca: baixa
experimento: "Mesa de direção: medir quantas tentativas o controle fino economiza em relação ao prompt, e se a credencial de procedência muda a confiança em um plano editado"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Gerar vídeo a partir de um prompt já é produto de massa: o Kling tinha mais de 60 milhões de usuários no fim de 2025 e o Flow, do Google, passou de 275 milhões de vídeos gerados em cinco meses. Este mapa trata do que vem depois, até 2046, a partir de três rupturas. (1) **Direção fina sobre a geração**: região, quadro-chave, referência, trajetória e grafo, com edição feita sobre o plano já filmado. Isso ameaça a refilmagem, a rotoscopia vendida por hora e a ideia de que o plano filmado é definitivo. (2) **Geração causal em tempo real**: arquiteturas autoregressivas e de *streaming* fazem a imagem em movimento reagir à entrada do espectador. O vídeo deixa de ser um arquivo e passa a ser um estado, e o custo passa a crescer com cada espectador. (3) **Procedência assinada na captura**: C2PA em câmeras e celulares, somado à obrigação legal de marcar conteúdo gerado. A prova deixa de estar no que a imagem mostra e passa para a cadeia de custódia. O ponto em que os ramos se encontram: quando a edição regional não deixa rastro visível, o valor de uma imagem passa a depender de um manifesto assinado. Quem perde é quem não tem acervo próprio, aparelho que assina ou lugar num circuito licenciado. A confiança é baixa em toda a cadeia da raiz 2, que ainda está em laboratório, e cai com a ordem em todo o mapa.

## 2. O tema

**O que é.** A imagem em movimento (e a imagem fixa, como caso particular) gerada ou alterada por modelos, **quando o autor controla o resultado com precisão**. A disciplina resume assim: "a mídia sintética está deixando de ser loteria e virando instrumento". Controlar, aqui, é poder dizer *onde* o resultado muda (máscara, região), *quando* (quadro-chave, primeiro e último quadro), *como se move* (trajetória, câmera), *com que aparência* (imagem de referência, adaptador de estilo) e *em que ordem de operações* (grafo de nós). Também é poder alterar um plano existente sem gerar outro do zero.

**Onde encosta em mídia e interação.** Em três lugares. Na **produção**: o pipeline de filmagem, pós-produção, VFX e animação. Na **interface**: animação que responde a evento, como a máquina de estados do Rive, e vídeo gerado quadro a quadro em resposta à entrada. Na **confiança**: o valor da imagem como registro, que é a base do jornalismo, da prova judicial e da propaganda eleitoral.

**Por que um mapa de futuro, e não um levantamento de estado da arte.** Porque as consequências que interessam não são técnicas. Um estado da arte diria que o Aleph, da Runway, muda o ângulo de câmera de um plano filmado. Um mapa pergunta o que acontece com a diária de set, com o contrato do ator, com o júnior de compositing e com o vídeo de celular usado como prova, se isso vira rotina em 2046.

**Premissas da rodada (briefing, sem entrevista interativa).** O briefing cobria todos os campos da entrevista do §0, então a confiança não foi rebaixada por falta de entrevista.
- Horizonte **2046** (vinte anos). Público: **quem projeta mídia e interação**. Recorte: **global, com uma nota sobre o Brasil** (seção 5, prosa, e seção 9).
- Descartado de início: **o que já é comum em produto de massa**, que é a régua da disciplina. Por ela, texto-para-vídeo por prompt simples e texto-para-imagem por prompt ficam como contexto, não como raiz (seção 4).
- Disrupção suspeita pelo autor: nenhuma. Viés: neutro, com um cenário para cada lado.
- Ideias óbvias a excluir: as que servem para qualquer tema ("surge uma nova profissão", "o currículo se reorganiza", "regulador cria lei" sem nome).
- **Falseadores declarados pelo autor**, usados na seção 7: (a) evidência de que a adoção do controle fino já passou da maioria inicial (Rogers); (b) evidência de que a tecnologia não rompe nada e só melhora o que existe.
- **Assumido pela máquina e não coberto pelo briefing:** "controle" inclui a edição de material filmado (vídeo-para-vídeo), e não só a geração do zero. A fronteira com o tema 14 fica em: regras sem modelo são do tema 14; regras que dirigem um modelo gerador são daqui. A fronteira com o tema 13 exclui o áudio sincronizado, mesmo quando o modelo gera som e imagem juntos (LTX-2, Veo 3.1).

## 3. Onde isso está hoje

*Âncora feita com acesso à web em 22/09/2026. Foram 23 buscas e 27 páginas abertas e citadas; as que não abriram estão listadas na seção 12.*

### 3.1 O que já existe e funciona

- **Edição de vídeo existente por instrução, com contexto do plano inteiro.** A Runway lançou o **Aleph** em 25/07/2025 como "modelo de vídeo em contexto". Ele adiciona, remove e transforma objetos, "gera qualquer ângulo de uma cena" e altera luz e estilo sobre footage já filmado, para todos os planos pagos [6]. Não é geração do zero: é pós-produção feita pelo modelo.
- **Controle por quadros e referências dentro de um produto de massa.** O **Flow**, com o Veo 3.1 (anúncio de 15/10/2025), tem "Ingredients to Video" (várias imagens de referência controlam personagem, objeto e estilo), "Frames to Video" (primeiro e último quadro), "Extend" (continuação a partir do último segundo), "Insert" (inserir elemento, com o modelo tratando sombra e luz) e "Remove Object" (anunciado como "em breve"). O Google informou **mais de 275 milhões de vídeos gerados no Flow** em cinco meses [7].
- **Propagação de um quadro pintado para o vídeo, sem modelo generativo.** O **EbSynth 2** (06/10/2025) roda no navegador e propaga para o resto do plano a edição feita num quadro-chave, por síntese de textura: não usa modelo treinado em dados externos. Tem linha do tempo, camadas e pincéis. O plano gratuito exporta em 720p; o Pro, a US$ 20/mês, em 4K [17]. É o controle mais "ferramenta" da amostra. Por isso ele não é raiz: é a referência contra a qual a geração controlada se mede.
- **Geração como grafo, com ecossistema aberto.** O **ComfyUI** declara **4 milhões de usuários, 150 mil downloads por dia e mais de 60 mil nós feitos pela comunidade**. Levantou US$ 30 milhões com valuation de US$ 500 milhões em abril de 2026. O anúncio diz que "*ComfyUI artist*" virou cargo reconhecido em empresas e estúdios e cita um comercial do Super Bowl 2026 feito com a ferramenta [5]. O cofundador descreve o problema que o grafo resolve: o prompt chega a "60% – 80%" do resultado, e pedir uma mudança pequena "pode dar uma saída completamente diferente, inclusive sobrescrevendo as partes que já estavam perfeitas" — uma "máquina caça-níqueis" [4].
- **Modelo aberto de vídeo e áudio, com adaptação local.** O **LTX-2**, da Lightricks (06/01/2026), tem pesos, inferência e código de treino abertos, 4K a 50 quadros por segundo e até 20 segundos, e roda localmente [18]; o repositório oficial declara LoRA de estilo, IC-LoRA de controle e múltiplos quadros-chave [27]. É gratuito para pesquisa e para empresas com receita recorrente abaixo de US$ 10 milhões [18].
- **Animação como máquina de estados.** No **Rive**, estados, transições e *inputs* ligados a dados fazem a animação "reagir em tempo real à entrada do usuário", e o mesmo arquivo roda em vários *runtimes* [19]. Não é mídia sintética gerada por modelo. É a forma de mídia para a qual a raiz 2 aponta.
- **Vídeo como código escrito por agente.** O **Remotion** mantém *Agent Skills* oficiais (`npx skills add remotion-dev/skills`) que ensinam agentes de programação a compor, animar e renderizar vídeo em React [23]. Fica na fronteira com o tema 14 e aparece aqui só como sinal de que o vídeo virou saída de agente.

### 3.2 O que existe e ainda não funciona (ou não se sustentou)

- **Controle fino na pesquisa ainda falha nos casos difíceis.** A revisão *Controllable Video Generation: A Survey* (HKUST, Tsinghua e Tencent; v3 de 19/01/2026) divide o controle em estrutura, identidade, imagem, tempo, áudio e controle universal. Os problemas em aberto que ela lista: oclusão em pose, coerência com profundidade, erro de atribuição com vários sujeitos, geometria 3D sob movimento grande de câmera. E afirma: "o texto sozinho é frequentemente insuficiente para expressar requisitos complexos, multimodais e finos" [1].
- **Mundos gerados em tempo real, ainda em laboratório.** O **Genie 3**, do Google DeepMind (agosto de 2025), gera ambientes a 720p e 24 quadros por segundo durante "alguns minutos". Aceita eventos disparados por prompt no meio da geração, é autoregressivo e continua em *preview* de pesquisa, sem acesso público [8]. O **Matrix-Game 3.0** (abril de 2026) declara até 40 quadros por segundo a 720p, com memória estável por sequências de cerca de um minuto [10]. O **Causal Forcing++** (maio–junho de 2026) gera vídeo quadro a quadro com 1 ou 2 passos de amostragem, para rolagem "*streaming* e controlável" [9].
- **A difusão pode não ser o fim da história, mas ainda é o padrão.** O **VAR** (NeurIPS 2024) troca a previsão do próximo *token* pela previsão da próxima escala. No ImageNet 256×256, o FID caiu de 18,65 para 1,73 com inferência "cerca de 20× mais rápida" do que a linha de base autoregressiva, com lei de escala de coeficiente próximo de −0,998 e edição *zero-shot* (inpainting, outpainting) [2]. O **NextStep-1** (ICLR 2026), autoregressivo de 14 bilhões de parâmetros com cabeça de *flow matching*, declara estado da arte *entre os autoregressivos*, não sobre a difusão [24]. Não achei um produto de vídeo de massa autoregressivo puro.
- **O espetáculo de consumo não se pagou.** O aplicativo **Sora** saiu do ar em 26/04/2026 e a API fecha em 24/09/2026, dois dias depois desta rodada. Os downloads caíram 32% em dezembro de 2025 e 45% em janeiro de 2026. O acordo com a Disney, anunciado em dezembro de 2025 (cerca de US$ 1 bilhão, personagens da Disney, Marvel e Pixar), nunca foi fechado. A fonte resume: "espetáculo é caro quando cada clipe queima computação e o usuário só volta quando a novidade volta" [11].
- **Procedência que quebra no caminho.** A C2PA tem suporte em Adobe, Meta, LinkedIn e mais de 200 membros da Content Authenticity Initiative. Mas "clientes de e-mail não preservam C2PA", "aplicativos de mensagem despem metadados" e o *screenshot* quebra a cadeia [14]. Nas câmeras: Leica, Sony (várias), Canon EOS R1 e R5 Mark II, e Pixel 10 e 11 assinando toda foto por padrão. A Nikon suspendeu o serviço da Z6III em setembro de 2025, depois de pesquisadores forjarem arquivos assinados pelo modo de exposição múltipla. Fujifilm e Panasonic não tinham modelo com C2PA à venda em agosto de 2026 [15].

### 3.3 Quem constrói

| Ator | Tipo | O que faz neste tema |
|---|---|---|
| Runway | empresa (EUA) | Aleph, Gen-4; US$ 315 milhões em fev/2026, valuation de US$ 5,3 bilhões; modelo próprio treinado no catálogo da Lionsgate (mais de 20 mil títulos); parceria com a AMC; AI Film Festival com mais de 6.000 inscrições em 2025 [25] |
| Kuaishou (Kling) | empresa (China) | receita de 1,04 bilhão de yuans (US$ 150 milhões) em 2025; receita anualizada acima de US$ 300 milhões em jan/2026; mais de 60 milhões de usuários; 600 milhões de vídeos; mais de 30 mil clientes e desenvolvedores via API [3] |
| Google DeepMind | laboratório e produto | Veo 3.1 e Flow [7]; Genie 3 [8] |
| Comfy (ComfyUI) | comunidade aberta e empresa | o grafo como interface de controle [4][5] |
| Lightricks | empresa (Israel) | LTX-2 com pesos abertos [18] |
| Laboratórios acadêmicos chineses (Tsinghua e outros) | academia | geração causal em tempo real [9][10]; revisão do campo [1] |
| Coalizão C2PA / CAI | consórcio de padrão | procedência assinada [14][15] |

### 3.4 Números de adoção

- Kling: mais de 60 milhões de usuários, 600 milhões de vídeos, receita de US$ 150 milhões em 2025 [3].
- Flow: mais de 275 milhões de vídeos em cinco meses (até out/2025) [7].
- ComfyUI: 4 milhões de usuários, 150 mil downloads por dia [5].
- Sora: cerca de 1,2 milhão de instalações acumuladas nos EUA até jan/2026 (número de *snippet* de busca, não da página aberta; ver seção 8) e encerrado [11].
- Rive: **sem número de usuários encontrado** em fonte aberta.
- C2PA: **sem número de adoção por usuário encontrado**; só o de mais de 200 membros da CAI [14].
- Brasil: 403 decisões judiciais sobre *deepfake* entre jan/2020 e jul/2026, sendo 36 em 2024 e 164 só em 2026 [12].

**Leitura da âncora para o critério de maturidade.** Os números de massa (Kling, Flow) medem **geração por prompt e por quadros**, a parte que o briefing descarta. Para o controle fino profissional (grafo, LoRA, edição regional de footage), o número mais próximo é o do ComfyUI: 4 milhões de usuários. Em qualquer denominador razoável de pessoas que produzem imagem em movimento, isso fica entre produto de nicho e adoção precoce. O falseador (a) do autor não é acionado por estes números. Mas o Flow ter "Frames to Video" e "Insert" num produto de massa mostra que **parte do controle já está virando maioria**, e isso entra na seção 7.

## 4. As disrupções-raiz

### Candidatos recusados como raiz

- **Texto-para-vídeo e texto-para-imagem por prompt simples.** *Recusado como raiz: adoção de massa desde 2025 (Kling com mais de 60 milhões de usuários, Flow com mais de 275 milhões de vídeos) [3][7]; tratado como contexto na seção 3.* É a régua do briefing.
- **Upscaling e realce generativo (Magnific e similares).** *Recusado: faz o mesmo, com mais resolução. É melhoria sustentadora (Christensen); entra só como contexto.*
- **Motion design procedural por regras (Cavalry, Remotion sem modelo, satori).** *Recusado aqui: é o tema 14 (regras sem IA).* Aparece nesta roda só onde dirige um modelo gerador.
- **Geração com acervo licenciado (Adobe Firefly).** *Recusado como raiz: não rompe uma prática, muda quem é dono do insumo.* Entra como efeito de retroação (e3.2).
- **"Um estúdio de uma pessoa faz o que exigia trinta."** *Recusado como raiz: é consequência, não causa.* Entra como efeito (e5) das raízes 1 e 2.

### R1 — Direção fina sobre a geração: controle localizado, propagado e em grafo

1. **O que rompe.** A premissa de que o plano filmado é definitivo e de que corrigir é refilmar. O trabalho por quadro vendido por volume (rotoscopia, *paint*, limpeza). E a relação do autor com o gerador como loteria: gerar de novo até acertar, perdendo o que já estava certo [4].
2. **Por que agora, e não há cinco anos.** Em 2021 havia *image-to-image* (a linhagem do pix2pix) e propagação por textura (EbSynth), mas não um modelo que editasse um plano inteiro com coerência temporal a partir de uma instrução. As pré-condições que apareceram de 2025 para cá: modelos de vídeo em contexto (Aleph, jul/2025) [6]; controle por quadros e referências num produto de massa (Flow, out/2025) [7]; pesos abertos de vídeo em 4K com LoRA (LTX-2, jan/2026) [18][27]; o grafo como camada de orquestração com capital e comunidade (ComfyUI, 4 milhões de usuários) [5].
3. **Onde está na difusão.** **Produto de nicho → adoção precoce** entre profissionais de imagem. Emergente.
4. **O que ainda falta.** Coerência de identidade com vários personagens e em sequências longas [1]; integração com a montagem profissional e com padrões de intercâmbio (o grafo ainda não é formato de arquivo estável entre versões de modelo); decisão sobre treino e *fair use* (Disney, Universal e WBD contra Midjourney, em fase de *discovery* em jul/2026) [21]; preservação de obras geradas quando o modelo é descontinuado [11].
- **Quem bloqueia.** Estúdios detentores de catálogo e sindicatos de animação. Os estúdios litigam contra o treino em material alheio [21] e, ao mesmo tempo, fazem acordo para ter modelo treinado só no próprio acervo (Lionsgate e Runway [25]). Isso **captura** o controle fino para quem tem acervo (e3.2). Os sindicatos, a partir de estudos como o da Animation Guild [20], negociam limites de uso.

### R2 — Geração causal em tempo real: a imagem em movimento que responde

1. **O que rompe.** O vídeo como artefato fixo, renderizado uma vez e exibido muitas vezes a custo marginal próximo de zero. E a separação entre vídeo (linear, sem estado) e interface ou jogo (com estado, feito em motor 3D).
2. **Por que agora.** A difusão gera o clipe inteiro de uma vez e em muitos passos, o que não serve para responder a entrada quadro a quadro. De 2024 para cá: o VAR mostra que a geração autoregressiva visual escala como os modelos de linguagem e pode vencer a difusão em imagem [2]; os métodos de *forcing* causal reduzem a geração quadro a quadro para 1 ou 2 passos [9]; modelos de mundo interativos chegam a 24–40 quadros por segundo em 720p [8][10]. A máquina de estados do Rive [19] mostra que o público já aceita animação que responde. O que faltava era a imagem gerada, e não pré-desenhada, responder.
3. **Onde está na difusão.** **Laboratório → demo pública** (Genie 3 em *preview* fechado [8]; Matrix-Game e Causal Forcing++ como artigo com código [9][10]). Especulativo: **`confianca: baixa` obrigatória em toda a cadeia desta raiz**.
4. **O que ainda falta.** Memória longa (hoje, minutos [8][10]); custo de inferência por espectador compatível com mídia de massa (o fim do Sora é o sinal contrário [11]); formas de o autor restringir o espaço de estados (o que o mundo gerado *não pode* fazer); hardware no dispositivo.
- **Quem bloqueia.** Os donos de motores de tempo real e de plataformas de distribuição. Os de motores têm incentivo para absorver a geração causal no motor, para não serem contornados (e6.2.1). Os de distribuição cobram por visualização de peça fixa e não por computação por espectador (e7).

### R3 — Procedência assinada na captura, com obrigação legal de marcar o gerado

1. **O que rompe.** A presunção de que uma imagem em movimento, por si, registra algo que aconteceu. A prova sai do conteúdo e vai para a cadeia de custódia. Para quem produz, uma imagem sem manifesto deixa de ser neutra: passa a ser "não atestada".
2. **Por que agora.** Três coisas chegaram juntas entre 2025 e 2026. Assinatura por padrão num celular de consumo (Pixel 10 e 11) [15]. Obrigação legal com data: o art. 50 do AI Act vale desde 02/08/2026, com marcação legível por máquina e aviso de *deepfake* mesmo sem intenção de enganar [13]; no Brasil, a Res. 23.755/2026 do TSE e a tese de set/2026 [12]. E a edição regional sem rastro visível (R1), que retira a última defesa do "dá para ver que é falso".
3. **Onde está na difusão.** **Adoção precoce**: câmeras profissionais, um celular de linha e grandes redações [14][15]; mensageiros e a maior parte dos sistemas de publicação ainda despem a credencial [14].
4. **O que ainda falta.** Preservação em mensageiros; carimbo de tempo confiável; segurança do módulo de assinatura (o caso Nikon [15]); assinatura em aparelhos baratos (não achei dado aberto sobre isso; ver seção 8); regra probatória (a FRE 707 foi devolvida para revisão em junho de 2026 [16]).
- **Quem bloqueia.** Plataformas de mensageria e de vídeo curto, para as quais preservar metadado custa e o recompartilhamento sem atrito é o produto. E partes em litígio a quem interessa contestar vídeo genuíno ("dividendo do mentiroso", e10.2.1).

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Direção fina sobre a geração — controle localizado, propagado e em grafo
    efeitos:
      - id: e1
        ordem: 1
        efeito: A refilmagem de correção é substituída por edição em contexto do plano já filmado, que muda ângulo, luz, figurino e objeto na pós-produção
        sinal: forte
        prazo: 2030
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Contratos de elenco passam a precificar a alteração pós-captura da performance como item separado da diária, com consentimento por tipo de alteração
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O plano bruto não alterado vira ativo arquivado e auditável, exigido por seguradoras de produção e distribuidoras para comprovar o consentimento de cada alteração
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Diretores de fotografia passam a entregar planos-fonte com profundidade, luz e câmera registradas para alimentar a pós, e a diária de set encolhe
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Locações e sets construídos perdem receita para palcos de captura pequenos e neutros, e regiões que vivem de incentivo fiscal à filmagem perdem a vantagem de cenário
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Rotoscopia, paint e limpeza quadro a quadro deixam de ser trabalho de volume vendido por hora por estúdios terceirizados de VFX
        sinal: forte
        prazo: 2031
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Estúdios terceirizados de roto e paint perdem a base de entrada, e o compositor júnior perde o primeiro emprego em que aprendia o olho
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Faltam supervisores de VFX sêniores formados no quadro a quadro, e estúdios grandes passam a pagar residências internas para formar o olho que o mercado deixou de formar
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O estilo visual vira ativo licenciável como adaptador treinado, e estúdios passam a vender o look, não só o plano
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Catálogos de filme e série passam a ser avaliados pelo valor como insumo de treino de modelo próprio, além do valor de exibição
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O estilo reconhecível entra nos tribunais como objeto autônomo de disputa, com autores processando o uso de adaptadores que imitam o traço sem copiar obra
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: O litígio sobre treino empurra estúdios para modelos treinados só em acervo próprio ou licenciado, o que encarece o controle fino para quem não tem acervo
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Formam-se dois circuitos de produção, o licenciado de estúdio e o de pesos abertos com licença por faixa de receita, e o independente carrega o risco jurídico que o estúdio terceiriza
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Quem monta o grafo de controle (o artista de ComfyUI) substitui o redator de prompt como função técnica reconhecida em estúdios e agências
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O grafo de geração vira o arquivo de projeto trocado entre estúdios, e a compatibilidade entre versões de modelo vira problema de entrega
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Obras geradas entre 2025 e 2035 ficam irreprodutíveis quando o modelo é descontinuado, e cinematecas passam a arquivar pesos e grafos junto do filme
                sinal: medio
                prazo: 2040
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: O custo do longa de animação cai uma ordem de grandeza, e o gargalo de valor passa da produção para a distribuição
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Equipes de uma a cinco pessoas lançam séries animadas de nicho financiadas pelo público, e o número de títulos animados cresce mais rápido que a audiência
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Festivais e selos de curadoria passam a exigir declaração de processo e registro de controle como parte da inscrição, e a curadoria vira o ativo escasso
                sinal: fraco
                prazo: 2040
                confianca: baixa
  - disrupcao: Geração causal em tempo real — a imagem em movimento que responde à entrada
    efeitos:
      - id: e6
        ordem: 1
        efeito: A peça audiovisual deixa de ser arquivo fixo e passa a ser estado renderizado por espectador, respondendo a clique, voz ou dado
        sinal: medio
        prazo: 2036
        confianca: baixa
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O motion designer passa a entregar comportamentos (máquina de estados com gerador acoplado), e o briefing de publicidade passa a especificar reações, não cortes
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Métricas de mídia baseadas em duração fixa (visualização completa, retenção por segundo) perdem sentido, e anunciantes passam a comprar interação sustentada
                sinal: fraco
                prazo: 2043
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A fronteira entre player de vídeo e motor de jogo se dissolve para narrativas leves, que passam a ser hospedadas por plataformas de streaming sem motor 3D
            sinal: fraco
            prazo: 2040
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Os donos de motores de tempo real embutem geração causal no motor para não serem contornados, e o autor passa a restringir o mundo gerado por regras do motor
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: O custo de computação por espectador vira o custo dominante da peça responsiva, invertendo a economia do vídeo em que exibir a mais custava quase nada
        sinal: medio
        prazo: 2034
        confianca: baixa
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: A mídia responsiva fica restrita a formatos de alto valor por espectador (publicidade premium, treinamento, parques), e o vídeo linear continua o padrão de massa
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A geração no processador do próprio aparelho decide quem recebe mídia responsiva, e fabricantes de chip passam a integrar a cadeia de distribuição audiovisual
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Transmissões ao vivo ganham uma camada gerada sincronizada que altera cenário, figurino e enquadramento do apresentador durante o stream
        sinal: medio
        prazo: 2032
        confianca: baixa
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A presunção de que ao vivo significa não editado deixa de valer, e emissoras de notícia passam a assinar a transmissão ao vivo quadro a quadro
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Debates eleitorais transmitidos e audiências judiciais por vídeo passam a exigir pipeline de captura certificado de ponta a ponta
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: A edição passa a ser feita sobre a hierarquia de escalas da imagem gerada, com o autor fixando a estrutura grossa e o modelo refazendo só o detalhe
        sinal: medio
        prazo: 2033
        confianca: baixa
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Ferramentas de imagem e vídeo trocam a semente aleatória por controles de estrutura versus detalhe, e a mesma instrução passa a dar o mesmo resultado
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A reprodutibilidade da geração vira cláusula de contrato de publicidade, e a agência precisa entregar a receita que regenera a peça aprovada
                sinal: fraco
                prazo: 2040
                confianca: baixa
  - disrupcao: Procedência assinada na captura, com obrigação legal de marcar o conteúdo gerado
    efeitos:
      - id: e10
        ordem: 1
        efeito: Vídeo sem credencial passa a ser tratado como não atestado, e redações exigem cadeia de procedência para publicar vídeo de terceiros
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: O vídeo de celular sem assinatura perde peso como testemunho, e quem só tem aparelho barato sem módulo de assinatura vira testemunha de segunda classe
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Organizações de documentação de direitos humanos distribuem aplicativos de captura assinada, e a assinatura passa a funcionar como infraestrutura de cidadania
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: Tribunais deslocam o ônus para quem apresenta um vídeo contestado, e a perícia de procedência vira especialidade forense própria
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: Réus passam a contestar vídeos genuínos gravados antes da assinatura, e acervos anteriores a 2025 perdem valor probatório
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: A obrigação legal de marcar o conteúdo gerado faz fornecedores embutirem marcação legível por máquina em toda saída, e a marcação vira item de conformidade vendido por plataforma
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Mensageiros que despem metadados viram o ponto de quebra da cadeia, e a disputa eleitoral com vídeo sintético migra para os canais que não preservam credencial
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: A Justiça Eleitoral brasileira passa a exigir que canais públicos de mensageria preservem e exibam a credencial de procedência durante o período de campanha
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: Rosto e voz viram direito patrimonial licenciável separado da obra, e surge um mercado de licença de semelhança para geração controlada
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Atores e criadores vendem pacotes de identidade treinada com regras de uso, e agências de talento passam a auditar cada geração feita com a semelhança do cliente
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: A semelhança de pessoas mortas vira espólio explorado por décadas, e herdeiros licenciam atuações póstumas novas
                sinal: fraco
                prazo: 2045
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: O fotojornalismo passa a registrar no manifesto de procedência cada edição regional feita depois da captura, criando dois regimes de imagem, a atestada e a livre
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: Fabricantes de câmera passam a competir pela segurança do módulo de assinatura, e uma falha de assinatura vira recall de credibilidade da marca
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: A recaptura (filmar uma tela com câmera assinada) vira a técnica dominante de fraude, e câmeras passam a assinar também profundidade e dados de cena
                sinal: fraco
                prazo: 2036
                confianca: baixa
```

### 5.1 Mecanismos, raiz 1

- **e1** — *porque* a edição em contexto (Aleph [6], Insert e Remove Object no Flow [7]) usa o plano inteiro como condição e preserva o que não foi pedido, *faz* a correção de ângulo, luz ou objeto custar horas de pós em vez de uma diária de refilmagem. Sinal forte: três artefatos (Aleph, Flow Insert, EbSynth 2 [17]). Referência para o prazo: montagem não linear (Avid, 1989), que levou cerca de uma década até dominar a montagem profissional (de memória; seção 8). A pós é o elo mais rápido a adotar ferramenta nova, então 2030 é para a *correção pontual*, não para a pós-produção inteira.
- **e1.1** — *porque* a performance filmada pode ter expressão, olhar ou fala alterados depois (e1), *faz* o consentimento dado na diária deixar de cobrir o que sai no corte, e sindicatos negociam a alteração como item à parte. Sinal médio: a lei dinamarquesa protege a "imitação digital realista" de artistas (§65a) [22]. Troca de ator: produtora → sindicato de elenco.
- **e1.1.1** — *porque* cada alteração passa a ter preço e consentimento próprios (e1.1), *faz* quem assume o risco de litígio (seguradora, distribuidora) exigir o plano bruto como prova do que foi alterado. Troca de ator: sindicato → seguradora. Teste da causa solta: sem R1 não haveria alteração a comprovar. Passa.
- **e1.2** — *porque* a pós passa a mudar luz e ângulo (e1), *faz* o valor do set migrar de "acertar o plano" para "capturar informação suficiente para a pós decidir". Sinal fraco: inferência, nenhum caso real encontrado.
- **e1.2.1** — *porque* o set captura dados e não cenário (e1.2), *faz* a locação cara perder o sentido para parte da produção. Referência: a filmagem com fundo azul e verde e depois com painéis de LED não acabou com as locações em 20 anos. Por isso a confiança é baixa e o prazo fica tardio. Não cito região pelo nome porque não abri fonte sobre incentivos fiscais.
- **e2** — *porque* a propagação a partir de um quadro-chave (EbSynth 2 [17]) e a remoção de objeto com reconstrução de fundo [7] automatizam o que era máscara feita quadro a quadro, *faz* o trabalho de volume deixar de ser vendido por hora. Sinal forte: EbSynth 2, Flow e o estudo da Animation Guild e CAA, em que 25% dos executivos esperavam o compositor afetado até 2026 [20].
- **e2.1** — *porque* o volume de roto e paint era o trabalho de entrada (e2), *faz* o júnior perder o lugar onde aprendia. Troca de ator: estúdio terceirizado → pessoa em formação. Sinal médio: o estudo [20] aponta 118.500 empregos de cinema, TV e animação nos EUA afetados (21,4%), segundo 300 executivos consultados em 2023. É expectativa de executivo, não medida de demissão. Não nomeio países de terceirização por falta de fonte aberta (seção 8).
- **e2.1.1** — *porque* a base de entrada encolheu (e2.1), *faz* faltar, uma geração depois, o supervisor sênior que distingue um plano bom de um ruim. Troca de mecanismo: substituição → falha de reprodução do ofício.
- **e3** — *porque* o controle fino inclui adaptar o modelo a um estilo com poucas imagens (LoRA de estilo e IC-LoRA de controle no LTX-2 [27], com código de treino aberto [18]), *faz* o look virar um arquivo separável, vendável e licenciável. Sinal médio: LTX-2 com LoRA [27] e o modelo da Lionsgate treinado em mais de 20 mil títulos [25].
- **e3.1** — *porque* o estilo e o universo de um estúdio podem ser destilados num modelo (e3), *faz* o catálogo ganhar um segundo valor: o de insumo de treino. Caso: Lionsgate e Runway [25].
- **e3.1.1** — *porque* o estilo pode ser imitado sem copiar nenhuma obra (e3), *faz* surgir uma disputa que o direito autoral atual, que protege a obra e não o estilo, não resolve. Mecanismo fraco: pode ser absorvida pela doutrina de *fair use* sem categoria nova. Por isso a confiança é baixa.
- **e3.2 (retroação, quem bloqueia)** — *porque* o processo contra o Midjourney [21] mantém incerto o uso de material alheio no treino, *faz* o estúdio preferir modelo próprio ou licenciado, e o controle fino fica mais caro para quem não tem acervo. Freia a raiz para os pequenos.
- **e3.2.1** — *porque* o circuito licenciado exclui quem não tem acervo (e3.2) e os pesos abertos têm licença por faixa de receita (LTX-2, abaixo de US$ 10 milhões [18]), *faz* o independente trabalhar no circuito aberto, onde fica o risco jurídico.
- **e4** — *porque* o grafo resolve o problema da caça-níqueis ao isolar etapas [4], *faz* quem monta o grafo virar o técnico do resultado. Sinal forte: 4 milhões de usuários, o cargo "ComfyUI artist" citado pela empresa e o comercial do Super Bowl [5]. Ressalva: o cargo é afirmado pela própria empresa, que tem interesse nisso.
- **e4.1** — *porque* o grafo contém a receita do resultado (e4), *faz* dele o arquivo trocado entre estúdios. O problema: um grafo depende de versões exatas de modelo e de nós da comunidade (mais de 60 mil nós [5]).
- **e4.1.1** — *porque* o grafo depende de um modelo, e modelos fecham (o Sora saiu do ar em 26/04/2026 e a API fecha em 24/09/2026 [11]), *faz* a obra deixar de poder ser refeita ou restaurada. Sinal médio: há um caso real de descontinuação. Troca de ator: estúdio → cinemateca.
- **e5** — *porque* R1 (controle) e R2 (geração mais barata por escala) reduzem pessoas e meses por minuto de animação, *faz* o longa sair mais barato. Sinal médio: o *Critterz*, com produção de cerca de US$ 30 milhões e meta de nove meses, mirando Cannes 2026, com esboços à mão e dubladores humanos [26]. É projeto patrocinado por um fornecedor de modelo. Referência: a animação 3D levou cerca de uma década de *Toy Story* (1995) ao fim da animação 2D nos grandes estúdios dos EUA (de memória). Prazo 2034.
- **e5.1** — *porque* o custo caiu (e5), *faz* surgir oferta de nicho financiada diretamente pelo público. A oferta cresce mais rápido que o tempo de atenção, que é fixo.
- **e5.1.1** — *porque* há mais títulos que atenção (e5.1), *faz* o filtro virar o ativo. Troca de ator: produtora → festival e selo. O festival da Runway passou de 300 inscrições (2023) para mais de 6.000 (2025) [25].

### 5.2 Mecanismos, raiz 2 (toda a cadeia com confiança baixa, por estar em laboratório e demo)

- **e6** — *porque* a geração quadro a quadro em 1–2 passos [9] e os modelos de mundo a 24–40 quadros por segundo [8][10] respondem à entrada sem refazer o clipe, *faz* a peça ter estado, como uma interface. Sinal médio: Genie 3, Matrix-Game 3.0 e Causal Forcing++ são tentativas públicas, mas nenhuma é produto. Referência: jogo por *streaming* (lançado comercialmente por volta de 2010 e ainda nicho em 2026, de memória), então o prazo vai para 2036.
- **e6.1** — *porque* a peça tem estado (e6), *faz* o entregável do motion designer virar um comportamento. O Rive já treina esse ofício sem geração [19]. Troca de ator: laboratório → agência.
- **e6.1.1** — *porque* a peça não tem duração fixa (e6.1), *faz* as métricas de mídia baseadas em segundos perderem o referencial.
- **e6.2** — *porque* o mundo gerado dispensa a geometria modelada [8], *faz* a narrativa leve interativa caber num player.
- **e6.2.1 (quem bloqueia)** — *porque* o player ameaça contornar o motor (e6.2), *faz* os donos de motores absorverem a geração causal. É captura, não desaparecimento.
- **e7 (retroação)** — *porque* cada espectador exige computação própria (e6), *faz* o custo marginal de exibição deixar de ser quase zero. Sinal médio: o Sora saiu do ar pelo custo de computação e pela queda de uso [11].
- **e7.1** — *porque* o custo por espectador é alto (e7), *faz* a mídia responsiva ficar onde o valor por espectador paga a conta. É o freio da raiz.
- **e7.1.1** — *porque* o custo na nuvem limita a escala (e7.1), *faz* o processamento no aparelho virar o caminho, e o fabricante do chip entra na cadeia. Fronteira com o tema 16.
- **e8** — *porque* a geração causal é *streaming* por construção [9], *faz* a camada gerada ser aplicável a uma transmissão ao vivo.
- **e8.1** — *porque* o ao vivo pode ser alterado (e8), *faz* a emissora precisar provar que não alterou. **Convergência com R3.**
- **e8.1.1** — *porque* o ao vivo assinado vira padrão das emissoras (e8.1), *faz* instituições que dependem do vídeo ao vivo como registro exigirem certificação de ponta a ponta.
- **e9** — *porque* a geração por escalas prevê a estrutura grossa antes do detalhe e já faz edição *zero-shot* [2], *faz* ser possível fixar uma escala e refazer só as outras. Sinal médio: VAR e NextStep-1 [2][24]. Troca de mecanismo em relação à difusão: guiar o ruído → editar a sequência de escalas.
- **e9.1** — *porque* a estrutura pode ser fixada (e9), *faz* a semente aleatória deixar de ser o jeito de variar.
- **e9.1.1** — *porque* a geração fica reprodutível (e9.1), *faz* o cliente exigir a receita da peça.

### 5.3 Mecanismos, raiz 3

- **e10** — *porque* o celular e a câmera profissional assinam na captura [15] e as redações do CAI leem e preservam a credencial [14], *faz* a ausência de credencial virar informação. Referência: HTTPS, que levou cerca de duas décadas até a maioria da web (de memória). O prazo 2032 é para as redações, não para o público.
- **e10.1** — *porque* só alguns aparelhos assinam [15], *faz* a prova depender do aparelho. Quem perde: a testemunha pobre. **Nota sobre o Brasil**: o aparelho barato domina o mercado e o WhatsApp despe metadados [14]. A exclusão probatória aqui seria maior que no recorte global. Não encontrei dado aberto sobre assinatura em aparelhos baratos.
- **e10.1.1** — *porque* a testemunha sem aparelho que assina é excluída (e10.1), *faz* organizações de direitos humanos distribuírem a assinatura por software. Troca de ator: fabricante → sociedade civil.
- **e10.2** — *porque* o vídeo convincente pode ser fabricado, *faz* a regra probatória mudar. Sinal médio: a FRE 707, proposta e devolvida para revisão em 3–4/06/2026, com o tema *deepfake* tratado à parte [16].
- **e10.2.1** — *porque* o vídeo assinado vira o padrão (e10), *faz* o vídeo antigo sem assinatura virar alvo fácil de contestação.
- **e11** — *porque* o art. 50 do AI Act exige marcação legível por máquina desde 02/08/2026 (sistemas já no mercado até 02/12/2026) [13] e o TSE regulou o uso de IA na campanha de 2026 (Res. 23.755/2026) [12], *faz* toda saída de fornecedor sair marcada. Sinal forte: há três normas com data (UE, TSE e a lei dinamarquesa [22]).
- **e11.1 (retroação, quem bloqueia)** — *porque* os mensageiros despem metadados [14], *faz* a marcação sumir justamente onde circula a propaganda. No Brasil, as decisões sobre *deepfake* foram de 36 em 2024 para 164 em 2026 [12].
- **e11.1.1** — *porque* a quebra acontece no mensageiro (e11.1), *faz* o regulador eleitoral mirar a preservação. Ator nomeado: TSE. Mecanismo: a regra de 2026 já trata de transparência (art. 9º-B) [12]; o próximo passo seria a preservação. É inferência.
- **e12** — *porque* a lei dinamarquesa cria um direito exclusivo e transferível sobre rosto e voz, até 50 anos após a morte (§73a) [22], e o acordo Disney–OpenAI tentou licenciar personagens para geração [11], *faz* a semelhança virar item de catálogo. Sinal médio: dois artefatos. O acordo não foi fechado.
- **e12.1** — *porque* a semelhança é licenciável (e12), *faz* o talento vender identidade com regras de uso.
- **e12.1.1** — *porque* o prazo de proteção é de 50 anos após a morte [22], *faz* o espólio explorar atuação nova. Prazo 2045, perto do horizonte.
- **e13** — *porque* a edição regional não deixa rastro visível (R1) e a Adobe grava credencial [14], *faz* o fotojornalismo registrar a edição no manifesto em vez de proibir a edição. **Convergência R1 × R3.**
- **e13.1** — *porque* a credibilidade passa a depender do módulo de assinatura, *faz* uma falha virar caso de marca. Caso: a Nikon Z6III [15].
- **e13.1.1** — *porque* a assinatura atesta o aparelho, não a cena [15], *faz* a fraude migrar para a recaptura.

### 5.4 Cobertura STEEP e quem perde

- **Social**: e10.1, e12.1, e5.1. **Tecnológico**: e4, e6, e9. **Econômico**: e2, e3, e5, e7. **Político**: e11, e10.2. **Ecológico: vazio.** O custo energético de computação por espectador (e7) toca nisso, mas não abri fonte sobre energia de geração de vídeo. Registrado sem forçar.
- **Quem perde**: o júnior de roto e compositing (e2.1); a locação física (e1.2.1); o independente sem acervo (e3.2, e3.2.1); a testemunha com aparelho barato (e10.1); os acervos anteriores à assinatura (e10.2.1); o ator cuja performance é alterada (e1.1); a obra cujo modelo foi descontinuado (e4.1.1).

### 5.5 Cruzamentos

- **Convergência 1 (a principal do mapa): R1 × R3 em e13.** O controle fino torna a edição regional sem rastro visível; a procedência assinada torna a edição *declarável*. O resultado não é proibir a edição: é **o manifesto virar parte da imagem**. e1.1.1 (plano bruto arquivado) e e13 (edição registrada) são o mesmo movimento visto pela produção e pelo jornalismo.
- **Convergência 2: R2 × R3 em e8.1.** O ao vivo alterável e o ao vivo assinado chegam ao mesmo efeito de segunda ordem por mecanismos diferentes.
- **Convergência 3: R1 × R2 em e5.** O barateamento do longa vem do controle (menos refação) e da arquitetura (geração mais barata por passo).
- **Retroalimentação que reforça:** e4.1.1 (obra irreprodutível) → estúdios e cinematecas exigem pesos arquivados → pressão por pesos abertos (LTX-2) → mais controle local → reforça R1.
- **Retroalimentação que enfraquece:** e7 (custo por espectador) → e7.1 (responsivo só no alto valor) → menos escala → menos investimento em geração causal → freia R2. O fim do Sora é a versão presente desse ciclo [11].
- **Contradição:** e3.2 (o controle fino fica com quem tem acervo licenciado) e e3.2.1 / e5.1 (o controle fino se espalha pelos pesos abertos) não coexistem como tendência dominante. Quem decide entre eles é o desfecho do *fair use* no treino [21] e as licenças dos pesos abertos. Não resolvo aqui.

### 5.6 Regra de parada aplicada

- Em e1.2.1 parei na terceira ordem: o filho seguinte seria "as cidades de filmagem perdem receita". É o mesmo ator e o mesmo mecanismo, só maior.
- Em e11.1.1 parei: um quarto nível seria "outros tribunais eleitorais copiam o TSE", que é difusão do mesmo efeito.

## 6. Sinais fracos e wildcards

### Sinais fracos

1. **Rive: animação que responde em vez de tocar.** Visto em [19]. *Se crescer*, o entregável de motion design vira comportamento (e6.1) antes de a geração causal chegar: o ofício se prepara sem a IA. *Sinal observável*: briefings e vagas de agência pedindo "máquina de estados" como entregável; o Rive publicar número de usuários ou de apps em produção (não achei esse número).
2. **VAR e a geração por escala.** Visto em [2][24]. *Se crescer*, a edição por escala (e9) vira a interface padrão de controle e a semente sai de cena. *Sinal observável*: um modelo de vídeo de fronteira anunciado como autoregressivo por escala, e não como difusão; ferramentas com controle de "estrutura/detalhe" no lugar da semente.
3. **O fim do Sora.** Visto em [11]. *Se o padrão se repetir* (produto de consumo de geração fechando por custo), a mídia sintética fica profissional e de nicho, o que reforça R1 e freia R2 (e7). *Sinal observável*: outro gerador de vídeo de consumo encerrado ou restrito a plano empresarial.
4. **O cargo "ComfyUI artist".** Visto em [5]. *Se crescer*, e4 se confirma. *Sinal observável*: o título aparecer em vagas de estúdios que não são clientes citados pela própria Comfy.
5. **A falha de assinatura da Nikon Z6III.** Visto em [15]. *Se se repetir*, a procedência perde credibilidade antes de se firmar (contra e10). *Sinal observável*: segundo fabricante suspendendo serviço C2PA por falsificação.

### Wildcards

1. **Um longa feito por uma pessoa na seleção oficial de um festival de primeira linha (Cannes, Veneza, Berlim).** *Mecanismo*: R1 e R2 reduzem a equipe mínima de um longa a uma pessoa com controle total; um festival seleciona pelo filme. *Por que é improvável*: os festivais selecionam também por rede, produtor e distribuidor; o *Critterz*, o caso mais próximo, tem equipe e patrocínio de fornecedor e mirava o festival como vitrine comercial, não como autoria individual [26]. *O que faria com o mapa*: e5.1 e e5.1.1 subiriam de confiança; e1.1 e e2.1 ganhariam um argumento público contra. *Sinal precoce*: um longa de autor único em mostra paralela oficial (Semana da Crítica, Orizzonti).
2. **Decisão judicial nos EUA de que o treino em material alheio não é *fair use*, com ordem de destruir pesos.** *Mecanismo*: o caso Midjourney [21] ou outro chega a uma decisão de mérito; modelos treinados em material não licenciado viram passivo. *Por que é improvável*: destruição de pesos é um remédio extremo e sem precedente; acordos são mais comuns. *O que faria*: e3.2 vira o ramo dominante; os pesos abertos (e3.2.1) passam a ser risco, não alternativa; e4.1.1 acontece de uma vez. *Sinal precoce*: uma liminar que restrinja a distribuição de um modelo.
3. **A chave de assinatura de um fabricante grande é comprometida e passa a assinar falsificações em massa.** *Mecanismo*: o módulo de assinatura é o ponto único de confiança [15]. *Por que é improvável*: módulos de hardware seguro raramente vazam a chave raiz. *O que faria*: R3 recua anos; e10 e e13 caem; o "dividendo do mentiroso" (e10.2.1) vale para imagens assinadas também. *Sinal precoce*: revogação de certificado de fabricante na lista de confiança da C2PA.

## 7. Contra o próprio mapa

### 7.1 Pré-mortem: "É 2046 e este mapa se mostrou errado. Por quê?"

1. **O controle virou função de produto de massa e não rompeu nada.** Insert, Remove Object e Frames to Video já estão num produto de massa [7]. Se em 2030 todo editor de vídeo de consumo tiver edição regional, o controle é melhoria sustentadora do editor, e não ruptura do ofício: é o falseador (b) do autor. *Aponta para* e1 e e4. **Ação**: e4 fica com confiança média (não alta), e o registro abaixo o marca como o ramo mais exposto ao falseador (b). e1 manteve média, mas o prazo passou de 2029 para 2030.
2. **A geração causal nunca ficou barata o bastante.** O custo por espectador (e7) venceu, e o vídeo seguiu linear. *Aponta para* toda R2. **Ação**: a R2 inteira já estava em baixa por regra; e6 passou de 2032 para 2036.
3. **A procedência ficou restrita a redações e tribunais**, e o público nunca olhou para a credencial. *Aponta para* e10.1 e e13. **Ação**: e10.1 passou de média para baixa.

### 7.2 Extrapolação linear

- **e5 ("o longa fica mais barato")** é mais do mesmo: custo cai, cai mais. O mecanismo de não linearidade que o mantém como efeito: a queda desloca o gargalo para a distribuição (e5.1.1), o que muda o ator. Sem isso, seria contexto. Mantido, com a ressalva.
- **Removido: "a maior parte da publicidade em vídeo passa a ser gerada".** É extrapolação linear da adoção por prompt, que é justamente a parte madura. Vai para a seção 12.

### 7.3 Velocidade de adoção

- **e6 (peça como estado)**: sinal médio, mas nenhum produto. A classe de referência (jogo por *streaming*, mais de 15 anos e ainda nicho) não sustenta 2032. **Prazo 2032 → 2036** (+4 anos).
- **e8 (camada gerada no ao vivo)**: 2030 → 2032. O Causal Forcing++ é artigo de 2026 [9]; a referência de artigo a produto de transmissão é de pelo menos cinco anos.
- **e12.1.1 (atuação póstuma licenciada)**: 2040 → 2045. Depende de a lei dinamarquesa vigorar e se espalhar; a própria entrada em vigor já atrasou [22].
- **e11 (marcação como conformidade)**: prazo 2028 mantido, porque a obrigação tem data legal [13]. Adoção por obrigação não segue a curva de Rogers.

### 7.4 A raiz que não acontece

- **Sem R1**: sobra R3 (a procedência segue por causa da geração por prompt, que é madura), e parte de R2. O mapa perde os efeitos de produção (e1–e5), mas não fica vazio. As raízes não são uma só disfarçada.
- **Sem R2**: sobra quase tudo de R1 e R3; perde-se a convergência e8.1 e a fronteira vídeo × interface. R2 é a raiz mais descartável, e o mapa declara isso.
- **Sem R3**: R1 continua, mas e13 e e1.1.1 perdem o mecanismo (não há manifesto onde registrar a edição). O custo da edição sem rastro visível passa inteiro para a confiança pública. Esse cenário é o indesejável da seção 9.

### 7.5 Suposições escondidas

1. **Os pesos abertos continuam abertos** (LTX-2 [18], a comunidade do ComfyUI [5]). Se quebrar: vale o wildcard 2; e3.2.1 cai.
2. **O custo de computação continua caindo.** Se não cair: R2 vira contexto (e7 domina).
3. **A regulação da UE e do Brasil é aplicada.** A tese do TSE de set/2026 *estreitou* a regra (exige propaganda eleitoral e realismo) [12]. Se a aplicação afrouxar, e11.1.1 cai.
4. **As plataformas continuam permitindo o *upload* de mídia gerada.** Uma proibição de plataforma é um wildcard não explorado.
5. **O público se importa com a procedência.** É a premissa mais fraca de R3. Não achei evidência a favor em fonte aberta.

### 7.6 Viés do autor

- **e6.1 (motion designer entrega comportamento)** está aqui porque o Rive é o sinal que o professor destacou na descrição do tema e porque a disciplina é de *interação*. A evidência é um produto sem geração e nenhum número de adoção. Marcado.
- **e9 (edição por escala)** entrou porque o VAR é tecnicamente elegante e foi prêmio de melhor artigo. A ponte entre o VAR e uma interface de edição é inferência minha.

### 7.7 Calibração

Contagem do bloco final: ordem 1 (13 efeitos) com 0 alta, 9 média e 4 baixa; ordem 2 (17) com 0 alta, 8 média e 9 baixa; ordem 3 (17) com 0 alta, 0 média e 17 baixa. A proporção de média cai com a ordem (69% → 47% → 0%). Nenhum efeito saiu com confiança alta: no rascunho, e4 e e11 estavam com alta e foram rebaixados.

### 7.8 Falseadores do autor aplicados

- **(a) Adoção além da maioria inicial**: acionado **em parte**. O controle por quadros e referências está num produto de massa [7]. O controle em grafo e com adaptador (ComfyUI, com 4 milhões de usuários [5]) não está. Consequência: o texto da raiz R1 passou a enfatizar a edição de footage e o grafo, e não o "primeiro e último quadro".
- **(b) Não rompe, só melhora**: é o risco principal de e1 e e4 (pré-mortem 1). Mantidos, com e4 rebaixado.

### 7.9 Registro de alterações

- e4: confianca alta → media, porque o único sustento do "cargo reconhecido" é o anúncio da própria Comfy [5] e porque o ramo é o mais exposto ao falseador (b).
- e11: confianca alta → media, porque a regra do TSE foi estreitada em set/2026 [12] e a aplicação do art. 50 ainda não tem histórico [13].
- e1: prazo 2029 → 2030, porque a referência da montagem não linear pede cerca de uma década até o domínio, e o Aleph é de jul/2025.
- e6: prazo 2032 → 2036, porque a referência do jogo por *streaming* não sustenta uma adoção mais rápida.
- e8: prazo 2030 → 2032, pela distância entre artigo e produto de transmissão.
- e10.1: confianca media → baixa (pré-mortem 3: não há evidência de que o público leia a credencial).
- e12.1.1: prazo 2040 → 2045, porque a lei dinamarquesa atrasou a entrada em vigor [22].
- e5: sinal forte → medio, porque o único caso (Critterz [26]) é patrocinado por um fornecedor de modelo.
- e1.2: confianca media → baixa, porque não há caso real (sinal fraco) e a referência do fundo verde e do LED mostra que o set resiste.
- R1 — removido (vai para a seção 12): "surge a profissão de diretor de IA", efeito proibido sem mecanismo específico; o que tinha de específico foi absorvido por e4.
- R2 — removido (vai para a seção 12): "todo vídeo vira interativo", extrapolação linear que contradiz e7.1.
- R3 — removido (vai para a seção 12): "detectores de *deepfake* resolvem o problema de confiança", porque a própria fonte das câmeras mostra que a assinatura atesta o aparelho e não a cena [15], e a detecção é corrida entre gerador e detector sem mecanismo de fechamento.
- Ordem 1 — removido (seção 12): "a maior parte da publicidade em vídeo passa a ser gerada" (extrapolação linear da parte madura).

## 8. O que a máquina errou

1. **Classes de referência de memória.** As datas de adoção da montagem não linear (cerca de uma década), da animação 3D (1995 → cerca de 2004), do HTTPS (cerca de duas décadas) e do jogo por *streaming* (cerca de 2010, ainda nicho) **não vieram de fonte aberta nesta rodada**. Sustentam os prazos de e1, e5, e6 e e10. Qualquer uma pode estar errada em alguns anos; os prazos que dependem delas estão errados na mesma medida.
2. **Número de receita da Runway em conflito.** As buscas devolveram "US$ 40 milhões de ARR no 2º tri de 2026" (Dealroom, snippet) e "US$ 300 milhões anualizados em out/2025" (Sacra e outros, snippet). As duas páginas deram 403 ou não foram abertas. **Não usei nenhum dos dois números** no mapa; usei só a rodada e o valuation, confirmados na Wikipédia [25]. A diferença de quase uma ordem de grandeza mostra que o número de receita de empresa privada de IA circula sem conferência.
3. **O número de 1,2 milhão de instalações do Sora** veio do *snippet* de busca da CNBC e da Axios; a Axios deu 403 e a página da Startup Fortune que abri [11] cita as quedas percentuais, não o acumulado. Está marcado na seção 3.4 como número de *snippet*.
4. **Fontes trocadas por não responderem ao verificador.** A primeira versão citava o comunicado do LTX-2 na GlobeNewswire (aberto na pesquisa, *timeout* no verificador) e uma reportagem da Book and Film Globe sobre o *Critterz* (aberta na pesquisa, 403 no verificador), que dizia "cerca de 9 meses contra cerca de 3 anos" e "menos de US$ 30 milhões". Foram trocadas por [18] e [26]. A comparação "contra 3 anos" saiu do texto porque a fonte que ficou não a traz. Também notei que o comunicado de 2025 da PR Newswire falava em clipes de 10 s e pesos "mais tarde em 2025"; o de 2026 diz 20 s. Usei o de 2026.
5. **Critterz em Cannes.** O resultado de busca da Deadline dizia "heads to Cannes market" (mercado, não seleção oficial); a página deu redirecionamento pago e não abriu. A fonte aberta [26] diz só "mira o festival de Cannes 2026". Não afirmo se o filme entrou em alguma mostra. O wildcard 1 depende dessa distinção.
6. **O ato do TSE com o corte de 5 milhões de usuários** apareceu no *snippet* da página do TSE, que deu 403. Tirei o número de e11.1.1 para não citar o que não abri.
7. **Efeito plausível com mecanismo fraco: e3.1.1** (estilo como objeto autônomo de litígio). Soa inevitável, mas o direito autoral não protege estilo, e a disputa pode ser absorvida pelo *fair use* sem categoria nova. Mantido com confiança baixa, e o mecanismo é o mais fraco da raiz 1.
8. **O estudo da Animation Guild é projeção de 2023**, feita a partir da opinião de 300 executivos [20]. Usei o estudo como sinal de expectativa, não de demissão medida. A frase de *snippet* sobre "um terço dos membros demitidos num ano" não foi confirmada em fonte aberta e ficou fora.
9. **Autoria do VAR.** A página do NeurIPS lista Tian, Jiang, Yuan, Peng e Wang [2]. Não afirmo filiação institucional, que eu citaria de memória (ByteDance e Universidade de Pequim) sem ter conferido.

## 9. Três cenários para 2046

**Provável.** Em 2046, dirigir a geração é o trabalho normal da pós-produção. O plano filmado é o ponto de partida: luz, ângulo e figurino se ajustam depois, e o plano bruto fica arquivado porque seguradoras e distribuidoras exigem. Rotoscopia e limpeza por hora não existem como mercado, e os estúdios grandes pagam residências para formar o olho que esse trabalho formava. O controle fino ficou dividido. Os estúdios usam modelos treinados no próprio acervo; os independentes, pesos abertos com licença por faixa de receita e risco jurídico. A mídia responsiva existe, mas em nicho: publicidade premium, treinamento, parques. O vídeo linear continua o padrão porque computação por espectador ainda custa. Redações e tribunais tratam vídeo sem credencial como não atestado, e o público em geral não olha para a credencial. No Brasil, a disputa eleitoral com vídeo sintético acontece nos mensageiros, onde a credencial não sobrevive. *Sinal precoce*: o controle fino profissional (grafo, adaptador, edição de footage) crescer em empresas enquanto os geradores de consumo encolhem ou fecham, como o Sora em 2026.

**Desejável.** Em 2046, o manifesto de procedência faz parte da imagem da mesma forma que a legenda: toda edição regional fica registrada e é legível por qualquer pessoa. A assinatura chegou aos aparelhos baratos por software distribuído por organizações de direitos humanos, então a testemunha pobre vale tanto quanto a rica. Os pesos abertos continuam abertos, e cinematecas arquivam modelo e grafo junto de cada obra, o que manteve reproduzível a produção de 2025–2035. Para chegar aqui: manter a abertura dos pesos, exigir que mensageiros preservem a credencial e subsidiar a assinatura em aparelhos baratos. *Sinal precoce*: um mensageiro de massa preservar e exibir a credencial C2PA, ou um regulador exigir isso.

**Indesejável.** Em 2046, a edição regional sem rastro visível venceu e a procedência não se firmou: foi quebrada por recaptura, por falhas de assinatura e pelos mensageiros. Qualquer vídeo pode ser contestado, os genuínos inclusive. O "dividendo do mentiroso" virou tática padrão de defesa, e os acervos anteriores à assinatura perderam valor de prova. O controle fino ficou com quem tem acervo licenciado, porque uma decisão de mérito tornou arriscados os pesos treinados em material alheio. Obras dos anos 2020 e 2030 não podem ser restauradas porque os modelos que as geraram saíram do ar. *Sinal precoce*: um segundo fabricante suspender a assinatura C2PA por falsificação, ou uma liminar restringir a distribuição de um modelo de pesos abertos.

## 10. O experimento

**O que é.** Uma "mesa de direção" em dois testes com a mesma cena. A turma filma um plano de 10 segundos (uma pessoa atravessando uma sala com um objeto sobre a mesa). Cada dupla recebe um **alvo preciso**: por exemplo, "trocar o objeto por uma planta, manter tudo o mais, e a luz passar a vir da janela". Condição A: só prompt, num gerador por texto ou imagem. Condição B: controle fino, com EbSynth 2 (quadro-chave pintado e propagado) [17] e um grafo no ComfyUI com LTX-2 (pesos abertos, máscara regional) [5][18]. No segundo teste, os planos editados são exportados com e sem manifesto C2PA registrando a edição, e outra parte da turma julga "o que foi alterado?" e "confio neste plano como registro?".

**Que pergunta sobre o futuro responde.** (1) O controle fino é mesmo um instrumento: converge para o alvo em menos tentativas, sem destruir o que estava certo? Essa é a premissa de R1 e o falseador (b). (2) A credencial muda a confiança de quem vê? Essa é a premissa mais fraca de R3 (seção 7.5, item 5).

**Que tecnologia emergente usa, e por que não dá com a madura.** A madura (gerador por prompt) é justamente a condição de controle A. A pergunta só existe comparando a madura com a emergente: propagação por quadro-chave, máscara regional num grafo com pesos abertos e manifesto de procedência com registro de edição. Os pesos abertos também permitem rodar localmente, sem enviar a imagem da turma para serviço de terceiro.

**O que a turma faz em sala.** Primeira aula: filmar e definir três alvos. Segunda: as duplas executam A e B, contando as tentativas até o alvo e marcando, em cada tentativa, se algo que já estava certo foi perdido. Terceira: o júri às cegas (metade vê o plano com manifesto, metade sem) responde as duas perguntas numa escala de 1 a 5.

**O resultado que me faria mudar de ideia.** Os limiares são escolha minha, declarada: com 14 pessoas, não há poder estatístico, e o teste é exploratório.
- Se a **mediana de tentativas em B não for menor que em A**, ou se B perder o que estava certo tantas vezes quanto A, o "instrumento" de R1 é mais promessa que ofício hoje: e1, e2 e e4 perdem um nível de confiança, e o prazo de e1 vai para depois de 2032.
- Se **a confiança média com manifesto não diferir da confiança sem manifesto** (diferença menor que 0,5 ponto na escala de 5), a premissa de que o público lê a procedência cai: e10 e e13 perdem um nível e o cenário indesejável passa a provável.

## 11. Fontes

1. Ma, Y. et al. *Controllable Video Generation: A Survey*, arXiv 2507.16869v3 (19/01/2026) — https://arxiv.org/html/2507.16869v3 — Taxonomia do controle e problemas em aberto (seção 3.2; R1, "o que falta"). *Confiabilidade*: revisão acadêmica em preprint, de autores de HKUST, Tsinghua e Tencent; boa para o mapa do campo, sem revisão por pares confirmada.
2. Tian, K.; Jiang, Y.; Yuan, Z.; Peng, B.; Wang, L. *Visual Autoregressive Modeling: Scalable Image Generation via Next-Scale Prediction*, NeurIPS 2024 — https://proceedings.neurips.cc/paper_files/paper/2024/hash/9a24e284b187f662681440ba15c416fb-Abstract-Conference.html — FID de 18,65 para 1,73, inferência cerca de 20× mais rápida, lei de escala, edição *zero-shot* (R2, e9). *Confiabilidade*: alta; anais revisados, artigo premiado.
3. Caixin Global, "Kuaishou Ramps Up AI Commercialization as Kling Revenue Hits $150 Million" (25/03/2026) — https://www.caixinglobal.com/2026-03-25/kuaishou-ramps-up-ai-commercialization-as-kling-revenue-hits-150-million-102427380.html — Receita, usuários e vídeos do Kling (seção 3.3–3.4; recusa da raiz por prompt). *Confiabilidade*: alta; imprensa econômica, números da divulgação da empresa.
4. TechCrunch, "ComfyUI hits $500M valuation as creators seek more control over AI-generated media" (24/04/2026) — https://techcrunch.com/2026/04/24/comfyui-hits-500m-valuation-as-creators-seek-more-control-over-ai-generated-media/ — A metáfora da caça-níqueis e o argumento do controle (R1, e4). *Confiabilidade*: média-alta; imprensa de tecnologia citando o fundador.
5. Comfy, "ComfyUI raises $30M to scale open-source AI for creative production" — https://blog.comfy.org/p/comfyui-raises-30m-to-scale-open — 4 milhões de usuários, 150 mil downloads por dia, 60 mil nós, cargo "ComfyUI artist", comercial do Super Bowl (e4, e4.1). *Confiabilidade*: média; comunicado da própria empresa.
6. Runway Research, "Introducing Runway Aleph" (25/07/2025) — https://runway.com/research/introducing-runway-aleph — Edição de vídeo em contexto: objetos, ângulo, luz (R1, e1). *Confiabilidade*: média; anúncio do fabricante, capacidades autodeclaradas.
7. Google, "Bringing new Veo 3.1 updates into Flow to edit AI video" (15/10/2025) — https://blog.google/innovation-and-ai/products/veo-updates-flow/ — Ingredients, Frames to Video, Extend, Insert, Remove Object; 275 milhões de vídeos (seções 3.1, 3.4; e1, e2; falseador a). *Confiabilidade*: média; anúncio do fabricante.
8. TechCrunch, "DeepMind thinks its new Genie 3 world model presents a stepping stone toward AGI" (05/08/2025) — https://techcrunch.com/2025/08/05/deepmind-thinks-genie-3-world-model-presents-stepping-stone-towards-agi/ — 720p, 24 quadros por segundo, alguns minutos, eventos por prompt, *preview* fechado (R2, e6). *Confiabilidade*: média-alta; imprensa citando os pesquisadores.
9. Zhao, M. et al. *Causal Forcing++*, arXiv 2605.15141 (maio–junho de 2026) — https://arxiv.org/abs/2605.15141 — Geração quadro a quadro em 1–2 passos, *streaming* controlável (R2, e6, e8). *Confiabilidade*: média; preprint com código.
10. Wang, Z. et al. *Matrix-Game 3.0*, arXiv 2604.08995 (abril de 2026) — https://arxiv.org/abs/2604.08995 — 40 quadros por segundo a 720p, memória de cerca de um minuto (R2, e6). *Confiabilidade*: média; preprint.
11. Startup Fortune, "OpenAI Shuts Down Sora's API This Week, Ending Its Billion Dollar Disney Deal" — https://startupfortune.com/openai-shuts-down-soras-api-this-week-ending-its-billion-dollar-disney-deal/ — Fim do app (26/04/2026) e da API (24/09/2026), queda de downloads, acordo com a Disney não fechado (e4.1.1, e7, e12, sinal fraco 3). *Confiabilidade*: média; imprensa de negócios menor, coerente com os *snippets* da Axios e da Variety (não abertos).
12. Metrópoles, "Eleições 2026: o que os tribunais estão decidindo sobre deepfakes?" — https://www.metropoles.com/colunas/observatorio-das-eleicoes/eleicoes-2026-o-que-os-tribunais-estao-decidindo-sobre-deepfakes — Arts. 9º-B e 9º-C, divergência sobre realismo, 403 decisões, de 36 (2024) para 164 (2026) (e11, e11.1, e11.1.1; nota Brasil). *Confiabilidade*: média; coluna de observatório com levantamento próprio, preliminar.
13. EU Artificial Intelligence Act, "The EU AI Act's Transparency Rules: A Practical Guide to Article 50" — https://artificialintelligenceact.eu/transparency-rules-article-50/ — Marcação legível por máquina, aviso de *deepfake*, exceção artística, 02/08/2026 e 02/12/2026 (R3, e11). *Confiabilidade*: média-alta; site de referência sobre o AI Act, não oficial.
14. Editors Weblog, "C2PA Adoption Tracker: Which Platforms Support Content Credentials in 2026" (12/04/2026) — https://www.editorsweblog.org/2026/04/12/c2pa-adoption-tracker-platforms-content-credentials-2026 — Quem preserva e quem despe credencial; mais de 200 membros da CAI; o problema do *screenshot* (R3, e10, e11.1, e13). *Confiabilidade*: média; blog da associação mundial de editores de notícias.
15. Lumethic, "C2PA Cameras in 2026: Every Model That Signs Photos at Capture" — https://www.lumethic.com/en/articles/cameras-with-c2pa-content-credentials — Lista de aparelhos, Pixel 10 e 11 por padrão, caso Nikon Z6III, assinatura não atesta a cena (R3, e10, e13.1, e13.1.1, wildcard 3). *Confiabilidade*: média; empresa do setor de verificação, com interesse comercial.
16. National Law Review, "Machine-Generated Evidence Challenges the Federal Rules: Inside the Contested Proposed Federal Rule of Evidence 707" — https://natlawreview.com/article/machine-generated-evidence-challenges-federal-rules-inside-contested-proposed — Calendário da FRE 707 e devolução para revisão em 3–4/06/2026 (e10.2). *Confiabilidade*: média-alta; publicação jurídica com base em escritório (Proskauer).
17. CG Channel, "EbSynth 2 can turn video into animation without using AI" (10/2025) — https://www.cgchannel.com/2025/10/ebsynth-2-can-turn-video-into-animation-without-using-ai/ — Propagação por síntese de textura, navegador, preços (e2; experimento). *Confiabilidade*: alta para fatos de produto; imprensa especializada em computação gráfica.
18. Open Source For You, "LTX-2 From Lightricks Delivers Native 4K Audio-Video With Fully Open Weights" (01/2026) — https://www.opensourceforu.com/2026/01/ltx-2-from-lightricks-delivers-native-4k-audio-video-with-fully-open-weights/ — Pesos, inferência e código de treino abertos, 4K a 50 quadros por segundo, até 20 s, execução local, licença gratuita abaixo de US$ 10 milhões de receita (e3, e3.2.1; experimento). *Confiabilidade*: média; revista técnica reproduzindo o comunicado da Lightricks de 06/01/2026 (o comunicado original, na GlobeNewswire, foi aberto na pesquisa mas não responde ao verificador; seção 8).
19. Rive, "A beginner's guide to the Rive State Machine" — https://rive.app/blog/how-state-machines-work-in-rive — Estados, transições, *inputs*, animação que reage (R2, e6.1, sinal fraco 1). *Confiabilidade*: média; documentação do fabricante.
20. Cartoon Brew, "Union study says generative AI will disrupt 204,000 jobs in three years" — https://www.cartoonbrew.com/artist-rights/union-study-says-generative-ai-will-disrupt-204000-jobs-three-years-237495.html — 118.500 empregos (21,4%), compositores e modeladores 3D mais expostos, 300 executivos, 2023 (e2, e2.1; R1, quem bloqueia). *Confiabilidade*: média; imprensa setorial sobre estudo encomendado por sindicato, com base em opinião de executivos.
21. The Art Newspaper, "Midjourney strikes back: sued AI giant demands Hollywood's secrets" (09/07/2026) — https://www.theartnewspaper.com/2026/07/09/midjourney-demands-hollywood-AI-secrets — Estado do processo Disney, Universal e WBD contra Midjourney; *fair use* sem solução (e3.2, wildcard 2). *Confiabilidade*: alta; imprensa especializada com base em peças do processo.
22. Dennemeyer, "A new sense of self: Denmark's copyright amendment against deepfakes" — https://www.dennemeyer.com/blog/posts/a-new-sense-of-self-denmark-s-copyright-amendment-against-deepfakes — §65a e §73a, 50 anos após a morte, exceção de paródia, atraso na vigência (e1.1, e12, e12.1.1). *Confiabilidade*: média-alta; escritório de propriedade intelectual.
23. Remotion, "Agent Skills" — https://www.remotion.dev/docs/ai/skills — Vídeo programático escrito por agente (seção 3.1; fronteira com o tema 14). *Confiabilidade*: alta para o fato; documentação oficial.
24. Han et al. *NextStep-1: Toward Autoregressive Image Generation with Continuous Tokens at Scale*, ICLR 2026 — https://mlanthology.org/iclr/2026/han2026iclr-nextstep1/ — Autoregressivo de 14 bilhões de parâmetros, estado da arte entre os autoregressivos (R2, e9). *Confiabilidade*: alta; conferência revisada.
25. Wikipedia, "Runway (company)" — https://en.wikipedia.org/wiki/Runway_%28company%29 — Rodada de fev/2026, Lionsgate (mais de 20 mil títulos), AMC, festival de 300 para mais de 6.000 inscrições (seção 3.3; e3, e3.1, e5.1.1). *Confiabilidade*: média; enciclopédia colaborativa, usada só para fatos já noticiados.
26. GeekTyrant, "AI-Generated Animated Film CRITTERZ Aims for Cannes Debut in 2026" — https://geektyrant.com/news/ai-generated-animated-film-critterz-aims-for-cannes-debut-in-2026 — *Critterz*: produção de US$ 30 milhões financiada pela Federation Studios, meta de nove meses, possível estreia em Cannes 2026, esboços à mão e dubladores humanos (e5, wildcard 1). *Confiabilidade*: média-baixa; site de entretenimento, baseado em reportagem de terceiros.
27. Lightricks, repositório LTX-Video no GitHub — https://github.com/Lightricks/LTX-Video — Suporte a LoRA de estilo, IC-LoRA de controle e múltiplos quadros-chave no LTX-2 (e3). *Confiabilidade*: alta para as capacidades declaradas; é o repositório oficial, mas a página ainda anuncia os pesos "para o fim de 2025" e está desatualizada em relação a [18].

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

Saída inteira de `python3 futurizacao-giordano/references/verificar.py tendencia-midia-sintetica-controlavel-video-e-imagem.md --links`, rodado em 22/09/2026, depois da troca de três links (seção 8, item 4):

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 13 (frontmatter diz 13)
efeitos ordem 2: 17 (frontmatter diz 17)
efeitos ordem 3: 17 (frontmatter diz 17)
prazo > horizonte (2046) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 0 · media 9 · baixa 4
confiança ordem 2: alta 0 · media 8 · baixa 9
confiança ordem 3: alta 0 · media 0 · baixa 17
links da seção 11: 27/27 respondem (frontmatter diz fontes: 27)
RESULTADO: ok
```

### 12.2 Premissas assumidas que o briefing não cobria

- "Controle" inclui a edição de footage filmado (vídeo para vídeo), não só a geração do zero.
- Fronteira com o tema 14: regras sem modelo ficam fora; regras que dirigem modelo ficam dentro.
- Fronteira com o tema 13: o áudio gerado junto com o vídeo (LTX-2, Veo 3.1) foi ignorado de propósito.
- A confiança geral do mapa (`confianca: baixa` no frontmatter) reflete o horizonte de 20 anos e uma raiz inteira em laboratório. Não é rebaixamento por falta de entrevista.

### 12.3 Buscas feitas (23) e o que deram

1. "controllable video generation 2026 keyframe motion control region editing" → revisão [1], MotionCanvas (SIGGRAPH 2025), SketchVideo, LooseControlVideo (arXiv 2606.19495; o PDF passou do limite de tamanho e não foi aberto).
2. "Visual Autoregressive Modeling VAR NeurIPS 2024 best paper next-scale prediction" → [2]; também LiteVAR e FasterVAR (não abertos).
3. "C2PA content credentials adoption 2026 cameras platforms" → [14], [15]; *snippet* sobre verificação C2PA e SynthID no Google Search e no Chrome anunciada no I/O 2026 (não aberto; não usado).
4. "Rive state machine animation funding users 2025 2026" → [19]; *snippet* de "cerca de US$ 14 milhões" de captação e cerca de 75 funcionários (site de review; não aberto; não usado).
5. "Kling AI annualized revenue 2026 users Kuaishou" → [3]; *snippets* de ARR de US$ 500 milhões em mar/2026 e receita do 2º tri de 2026 acima de RMB 850 milhões (não abertos; não usados). A página de RI da Kuaishou deu *timeout*.
6. "Runway Aleph video editing model in-context Gen-4 references" → [6].
7. "ComfyUI funding raised 2025 users" → [4], [5].
8. "Disney Universal lawsuit Midjourney 2025 status 2026" → [21]; CNBC e Variety não abertas.
9. "Sora app downloads 2026 OpenAI video Disney deal characters" → [11]; Axios (403), Variety (paywall 402), OpenAI (403).
10. "Veo 3 Flow filmmaking tool ingredients frames to video 2026" → [7]; *snippet* do Veo 3.1 de 13/01/2026 com 4K e "Scene Extension" (site de terceiros; não aberto).
11. "AI-generated feature film festival selection 2026 Critterz Cannes" → [26]; Deadline (redirecionamento pago), Animation Magazine (403). A lista da Wikipedia do Cannes 2026 não foi aberta, então não sei se algum filme gerado entrou na seleção.
12. "Brasil TSE deepfake eleições 2026 resolução inteligência artificial vídeo" → [12]; página do TSE deu 403.
13. "real-time interactive video generation autoregressive self forcing world model Genie 3 2026" → [8], [9], [10]; Hunyuan-GameCraft-2, BiWM e DreamForge-World (não abertos).
14. "EU AI Act Article 50 deepfake labeling obligation August 2026 code of practice transparency" → [13]; código de prática (páginas da Comissão, não abertas).
15. "Denmark copyright law likeness deepfake own face voice 2026 passed" → [22]; PDF do EPRS (binário, ilegível pela ferramenta); Verfassungsblog (*timeout*).
16. "Animation Guild AI jobs survey animation employment decline 2026 generative" → [20]; Hollywood Reporter (redirecionamento pago).
17. "proposed Federal Rule of Evidence 707 machine-generated evidence deepfake 2026" → [16]; *snippet* sobre a regra 901(c) de *deepfakes* (não confirmada em página aberta, só mencionada sem detalhe em [16]).
18. "Runway annualized revenue 2026 funding valuation Lionsgate AMC" → [25]; Dealroom (403); números de receita em conflito (seção 8, item 2).
19. "LTX-2 open weights video model audio 4K Lightricks release" → [18].
20. "EbSynth 2 release keyframe style propagation video" → [17].
21. "autoregressive image generation production model 2026 GPT image native autoregressive vs diffusion Infinity bitwise" → [24]; **não achei confirmação aberta de que um gerador de imagem de massa seja autoregressivo puro**. A busca não trouxe nada sobre "Infinity".
22. "Remotion AI agent generate video code React 2026 Claude skills" → [23]; *snippet* de "126 mil instalações" do *skill* (site de terceiros; não usado).
23. Busca de acompanhamento do *Critterz* → [26].

### 12.4 Efeitos cortados no §6 (com o motivo)

- **"Surge a profissão de diretor de IA"** (R1, rascunho de primeira ordem). Efeito proibido: nome genérico, sem ator nem mecanismo. O que ele tinha de específico (quem monta o grafo) virou e4.
- **"Todo vídeo vira interativo"** (R2, rascunho de primeira ordem, era a pergunta de terceira ordem da disciplina tomada como afirmação). Extrapolação linear e contraditória com e7.1: o custo por espectador impede que *todo* vídeo seja responsivo. O que sobra é e6, restrito.
- **"Detectores de *deepfake* resolvem o problema de confiança"** (R3, rascunho de retroação). A fonte [15] mostra que até a assinatura atesta o aparelho e não a cena. A detecção por conteúdo é uma corrida sem ponto de chegada, e não encontrei fonte aberta com taxa de acerto de detector.
- **"A maior parte da publicidade em vídeo passa a ser gerada"** (rascunho de primeira ordem sem raiz clara). Extrapolação da parte madura (prompt); falha no teste de especificidade: decorre da geração por prompt, que foi recusada como raiz.
- **"O ensino de animação se reorganiza"** (rascunho de segunda ordem sob e2). Efeito proibido sem nome de curso. Não abri fonte sobre currículo de animação, então não nomeei. O que tinha de mecanismo (perda do primeiro emprego) ficou em e2.1 e e2.1.1.
- **"Cidades de filmagem perdem receita"** (quarto nível sob e1.2.1). Regra de parada: mesmo ator e mesmo mecanismo.
- **"Outros tribunais eleitorais copiam o TSE"** (quarto nível sob e11.1.1). Regra de parada.

### 12.5 Rodada descartada: a raiz "vídeo como código escrito por agente"

Considerei uma quarta raiz: agentes de programação gerando vídeo por código (Remotion Agent Skills [23], satori, Cavalry). Rompe o *keyframe* manual na linha do tempo. Foi descartada por três razões. (1) Cai no tema 14 (design procedural), pela fronteira que a disciplina traçou. (2) No teste do §2 ("o que ainda falta?"), a lista era quase vazia: já funciona. (3) Os efeitos derivados (motion design por descrição) duplicavam e4 e e6.1. Ela fica como candidata a cruzamento no mapa único da turma, entre os temas 12 e 14.

### 12.6 Caminhos abandonados

- **Energia de geração de vídeo** (para a categoria ecológica do STEEP): nenhuma busca feita com esse foco; a categoria ficou vazia e registrada.
- **Dublagem e voz**: fora, por fronteira com o tema 13.
- **Magnific, Pika e Luma**: citados na descrição do tema; não abri páginas deles nesta rodada. Pika (efeito por região) e Luma (câmera estável) se confundem com os controles do Flow e do Aleph, que foram abertos. Ficaram só como tecnologias citadas.
- **SAG-AFTRA e réplica digital no contrato de 2023**: ia sustentar e1.1, mas não abri fonte; usei a lei dinamarquesa [22] no lugar.
- **pix2pix e CycleGAN** como raiz histórica do imagem-para-imagem: citados na seção 4 (R1, "por que agora") como linhagem, sem fonte aberta; é conhecimento de contexto, não afirmação que sustenta efeito.

### 12.7 Contagem de confiança do rascunho, antes do §6

Rascunho: ordem 1 com alta 2 (e4, e11), média 7 e baixa 4; ordem 2 com média 10 e baixa 7; ordem 3 com baixa 17. Depois do §6: ordem 1 com alta 0, média 9 e baixa 4; ordem 2 com média 8 e baixa 9; ordem 3 com baixa 17 (seção 7.7).
