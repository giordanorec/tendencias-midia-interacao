---
tema: Mídia sintética controlável — vídeo e imagem
slug: midia-sintetica-controlavel-video-e-imagem
autor_login: meap
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-11
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global, com nota sobre o Brasil
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 12
efeitos_ordem_3: 9
tecnologias_citadas:
  - Geração de vídeo por prompt (Runway, Kling, Luma, Sora, Veo)
  - Controle estrutural condicionado (ControlNet, pose, profundidade, esboço)
  - Controle por região e por máscara
  - Propagação de quadro-chave por síntese de textura (EbSynth)
  - Controle de trajetória e de câmera
  - Visual Autoregressive Modeling (VAR, predição de próxima escala)
  - Geração causal em tempo real (world models, streaming)
  - Geração como grafo de nós (ComfyUI)
  - Animação como máquina de estados (Rive)
  - Vídeo programático (Remotion, satori)
  - Motion design procedural (Cavalry, Graphite)
  - C2PA Content Credentials
  - Corpus licenciado com indenização (Adobe Firefly)
  - pix2pix / CycleGAN (raiz histórica imagem-para-imagem)
fontes: 14
confianca: media
experimento: "Loteria × instrumento — o mesmo plano-alvo perseguido em duas condições (prompt com reroll livre; prompt mais um controle local: máscara de região ou quadro-chave pintado e propagado), medindo tentativas até o alvo, tempo, e se o participante consegue dizer POR QUE o resultado mudou; seguido de um teste de mídia reativa (máquina de estados) contra o mesmo movimento exportado como MP4"
skill_usada: futurization-meap
publico_ok: false
---

## 1. Resumo

This map asks what changes by 2031 not because synthetic video exists, but because it became **addressable** — because a region of the frame, a hand-painted keyframe, a camera trajectory, a rule, a graph or a state can be commanded. Three root disruptions were isolated: *addressable control* (the decision point moves from the prompt to the graph), *causal real-time generation* (video computed per viewer instead of rendered in advance), and *media as program* (the delivered piece is a state machine with inputs, not a sequence of frames). Prompt-only generation was **rejected as a root disruption**: IAB measured two-thirds of digital video buyers already using GenAI in 2026, which puts it past the early majority for this audience — it is the platform, not the rupture. Confidence is `media`: the control layer is technically demonstrated and commercially funded, but the surveyed literature itself reports that composing several control signals still does not work, and the strongest effects in this map depend on institutional triggers (custody of capture, contract, accreditation) that have not happened.

## 2. O tema

Synthetic moving image stopped being a lottery and started being an instrument — that is the object here. The theme is not "AI makes video". It is the emergence of a **control surface** over generation: masks and regions, keyframes propagated along motion, trajectories and camera parameters, structural conditioning (pose, depth, sketch), rules that produce motion instead of motion drawn frame by frame, node graphs that make a look reproducible, and state machines that make a piece respond instead of play.

This belongs to media and interaction for a reason sharper than production cost. A generator that only accepts a global prompt is a *slot machine*: the operator asks, receives something 60–80% right, and to change the remaining 20% must pull the lever again and lose what was already good — the formulation is ComfyUI's own CEO, Yoland Yan, explaining why four million people prefer a node graph to a text box. The moment the remaining 20% becomes addressable, three things stop being true at once: that the author of a synthetic piece is whoever wrote the best prompt; that the piece is a file; and that "watching a video" is distinguishable from "operating an interface". Each of those is a different profession and a different institution.

It deserves a future map because the three ruptures are asymmetric in maturity. Addressable control is already financed and in studios. Real-time causal generation exists at 20 fps but has no authoring model and no economics. Media-as-program is in production at large consumer apps but has no distribution format, no archive and no rights model. A map is useful exactly where the gradient is this steep.

## 3. Onde isso está hoje

- **Prompt-level generation: mature, and this is the decisive finding of the triage.** IAB's *2026 Digital Video Ad Spend & Strategy Report* (released 14 July 2026, with Advertiser Perceptions and Guideline) reports that nearly two in three buyers now use GenAI for digital video creative, up from half in 2025, and that one third of ad assets will leverage GenAI in 2026, up from one quarter in 2025, projected to 43% in 2027. By the framing criterion supplied for this map — adoption past Rogers' early majority — prompt generation has crossed for this audience. It enters as context, not as a root.
- **Control as the actual unmet demand.** The same IAB report registers what buyers want next, and it is not more generation: humans in the loop (40% of all buyers, 50% of small and medium spenders), an AI agent audit trail for explainability (36%), guardrails limiting what agents can do (31%). Among smaller buyers, 96% are not satisfied with their current level of GenAI use. Wide adoption, unsatisfied control.
- **Control as a research field with a measured shape.** *Controllable Video Generation: A Survey* (arXiv 2507.16869v3) screened 708 candidates down to 246 papers published January 2020–October 2025 under PRISMA, and organises the field into seven control modalities: structure (pose, depth, landmarks, sketches, bounding boxes), identity, image reference, temporal (flow, trajectory, camera, motion), audio, other (text rendering, style, points, BEV) and universal multi-condition. Its own open problems are the honest anchor for this map: "current general control models often struggle to merge these distinct signals seamlessly"; motion-guided generation lacks "widely accepted benchmarks and interpretability tools"; long-range temporal consistency is unresolved.
- **Control as a funded product category.** ComfyUI raised a $30M Series B at a $500M valuation on 24 April 2026 (Craft Ventures leading, with Pace Capital, Chemistry, TruArrow), reported at roughly four million users. The thesis in the CEO's words: "In the world where AI slop is going to be everywhere, the Comfy version of human-in-the-loop approach is going to win out most of the eyeballs."
- **Control without generative models at all.** *Stylizing Video by Example* (Jamriška, Sochorová, Texler, Lukáč, Fišer, Lu, Shechtman, Sýkora — ACM TOG 38(4):107, SIGGRAPH 2019) is the non-AI baseline: the artist stylises one or more keyframes with ordinary painting tools and the method propagates the stylisation along the sequence by patch-based synthesis with temporal blending. EbSynth 2 shipped 6 October 2025, browser-based, roughly 10× faster with real-time preview — and its makers still say plainly "EbSynth isn't actually a generative AI tool", because the texture-synthesis algorithm "preserves the keyframe content at pixel level". Seven years old, never scaled, still the most controllable path for stylised rotoscopy. That combination is a warning about timelines.
- **The architectural dispute is real but was misread.** *Visual Autoregressive Modeling: Scalable Image Generation via Next-Scale Prediction* (Tian, Jiang, Yuan, Peng, Wang) took a NeurIPS 2024 best-paper award for reframing autoregressive generation as coarse-to-fine next-scale prediction: FID 18.65 → 1.73 and IS 80.4 → 350.2 on ImageNet 256×256, ~20× faster inference, power-law scaling with correlation near −0.998, plus zero-shot inpainting, outpainting and editing. What happened next was not replacement but absorption: *Causal Forcing* (arXiv 2602.02214, submitted 2 February 2026, revised 1 June 2026) shows that distilling an autoregressive student from a bidirectional diffusion teacher "violates" the frame-level injectivity needed for correct ODE initialisation, and fixes it with an autoregressive teacher — reporting +19.3% Dynamic Degree, +8.7% VisionReward, +16.7% Instruction Following over the Self Forcing baseline. The autoregressive turn matters because it makes generation *causal*, not because it beat diffusion.
- **Real-time causal generation exists and is steerable mid-stream.** Odyssey-2 produces "a new frame of video every 50 milliseconds (meaning imagined video is streamed at 20 frames per second)" against typical models taking one to two minutes for five seconds, and is shaped live: "As the video plays, you shape it in real time using natural text prompts — much like talking to a language model." It is causal by construction — the model "must generate the future without knowing it in advance, responding only to what's happened so far" — and the company concedes the stage: "World models are nascent, and so is Odyssey-2."
- **Media as program is already shipping.** Rive's state machine is documented as a visual way to connect timeline animations and define the logic driving transitions, so designers "build interactive motion graphics that are ready to be implemented in your product, app, game, or website"; at runtime developers bind to view-model properties and the machine re-evaluates. Rive lists Spotify, Duolingo, Disney, ESPN, LinkedIn and Google among products built with it.
- **Provenance is being installed, and leaks.** C2PA signing at capture is available from Leica, Sony, Nikon, Canon and Samsung; Apple iOS 20 and Google Pixel 11 were announced but not shipping as of April 2026; Adobe's Photoshop, Lightroom, Premiere Pro and Firefly read, preserve and write credentials; over 200 Content Authenticity Initiative members implement C2PA, including BBC, Reuters, AP, NYT and Washington Post; Meta reads and labels, X added display in March 2026, LinkedIn preserves the chain, TikTok labels. And then: "Email clients do not preserve C2PA. Messaging apps strip metadata. Most CMS platforms lack integration" — with the screenshot problem unresolved as of 24 April 2026.
- **Labour: perception is documented, displacement is not.** The Luminate Intelligence special report, via HarrisX 2024 data, has 55% of entertainment workers expecting animators to face major AI impact within two years, 50% expecting the same for VFX artists, 43% for game developers, 41% for voice actors, against 16% for makeup artists — and nearly half of surveyed generative-AI users admitting they used tools to mimic specific creators or studios. These are *expectations*, not headcounts. Numbers circulating as measured job losses could not be traced to primary data in this run (see section 8).
- **Nota sobre o Brasil.** The Brazilian anchor in this cycle is regulatory, not industrial. TSE Resolution 23.610/19 art. 9º-B permits AI-generated electoral content with an "explicit, highlighted and accessible warning that the content was fabricated or manipulated and the technology used", while art. 9º-C §1º prohibits deepfakes absolutely, "even with authorization and when the person is fictional". The analysis of the 2026 rules identifies the operative defect: "The same verbs (create, substitute, alter) appear as permitted with transparency (9º-B) and prohibited (9º-C §1º) when classified as deepfake, but the norm offers no operational test to distinguish them." Brazil has no specific deepfake statute; PL 2338/2023 passed the Senate in December 2024 and is still in the Chamber. Brazil therefore enters this map as the place where the *labelling* regime arrives before the *control* regime — a country that will regulate the output while the rupture is happening in the authoring layer.

## 4. As disrupções-raiz

Three roots, forming one axis: **direct it, stream it, program it.** A fourth candidate — certified authenticity as an infrastructure layer — was tested and demoted to second order, because it fails the loose-cause test: it would happen from prompt-level generation alone, which the triage classified as mature. It re-enters the wheel under root 1 through the one mechanism that *is* control-specific: fine control erases the artefact that detection was reading.

### 4.1. Controle endereçável — a geração passa a aceitar comando local

**O que rompe.** The reroll economy, first: when the remaining 20% is addressable, the unit of work stops being "the attempt" and becomes "the adjustment", and the person who holds value stops being whoever writes prompts and becomes whoever holds the pipeline. It also ruptures the tool-vendor relationship — control lives in a graph the studio owns, not in a product's feature list — and it ruptures the division of labour in post, where "operating the tool" and "deciding the image" were different people.

**Por que agora.** Generation quality crossed the threshold where the bottleneck moved from producing to directing: IAB's two-thirds-of-buyers figure marks the crossing, and the same report's 40% asking for humans in the loop marks the unmet need. The research field has a measured shape — 246 papers, seven control modalities, January 2020 to October 2025 — and the product category has capital: $30M at $500M valuation for a node graph, April 2026.

**O que ainda falta.** Composition. The survey states that general control models "struggle to merge these distinct signals seamlessly" — a mask plus a trajectory plus an identity plus a style is still not one coherent instruction. There is no accepted controllability benchmark, so "more controllable" is currently a claim, not a measurement. And there is no interchange standard for control signals, so a graph is portable across teams but not across models.

### 4.2. Geração causal em tempo real — o vídeo é calculado por espectador, não renderizado antes

**O que rompe.** The finished asset as the unit of media, and with it the entire economics of the copy: distribution stops being replication and returns to being computation. It ruptures the technical boundary between video and game — both become the same next-frame prediction loop with user input — and it ruptures the referent of criticism, archiving and citation, because there is no file that went to air.

**Por que agora.** The architectural turn that VAR opened in 2024 was not about beating diffusion; it was about making generation causal, and causality is what allows a frame to be produced without knowing the future. Odyssey-2 streams at 50 ms per frame, 20 fps, steerable mid-stream by prompt. *Causal Forcing* (2026) identified and fixed the specific reason real-time distillation was degrading — an autoregressive student trained from a bidirectional teacher — which is the signature of a field that has stopped guessing.

**O que ainda falta.** Long-horizon memory and consistency, named as an open problem in the survey and conceded by Odyssey itself ("world models are nascent"). Cost per viewer-minute: a stream has no economy of copies, so each additional viewer is additional compute — nobody has shown this closes. And, most decisive for this audience, there is no authoring model: no craft, no vocabulary and no tooling for *directing* a system that will never produce the same minute twice.

### 4.3. Mídia como programa — a peça entregue é uma máquina de estados com entradas

**O que rompe.** The frame as the atomic unit of moving image. It ruptures the designer-to-developer handoff for motion, since the same artifact carries behaviour and runs across web, iOS, Android and game runtimes. It ruptures measurement and moderation, because there is no single output to review or A/B. And it ruptures rights and archiving: a piece that plays differently for each viewer has no canonical version to license or to preserve.

**Por que agora.** This is the subtlest signal and the only one already at consumer scale: Rive's state machine is a documented authoring model — states as timeline animations, transitions as logic, runtime binding to view-model properties — in products at Spotify, Duolingo, Disney, ESPN, LinkedIn and Google. Alongside it, programmatic video (video as a build artifact of code) and procedural motion (rules instead of drawn motion) converge on the same conclusion from different directions: the deliverable is a program.

**O que ainda falta.** A distribution format. A state machine cannot be posted to a feed as a video, so reactive media is currently confined to surfaces its author controls — the app — and absent from the surfaces where most media is consumed. There is no rights model for per-viewer output, no archival format, and no training pipeline: motion designers are not taught state logic, and software engineers are not taught motion.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Controle endereçável — a geração passa a aceitar comando local
    efeitos:
      - id: e1
        ordem: 1
        efeito: O ponto de decisão criativa migra do prompt para o grafo, e a peça passa a ser entregue como workflow versionável em vez de arquivo renderizado
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Produtoras passam a contratar por domínio de pipeline, e o portfólio inclui o grafo, não só o resultado
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Currículos de audiovisual separam direção de imagem de engenharia de imagem, e a segunda migra para os departamentos de computação
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O grafo de controle vira ativo negociável, licenciado como hoje se licenciam LUTs e presets
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Surge disputa contratual sobre a propriedade do grafo produzido por freelancer, análoga à do código-fonte
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O custo marginal da variação cai perto de zero, e a unidade de entrega deixa de ser a peça e passa a ser a família de peças por recorte de público
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O briefing de vídeo publicitário passa a especificar eixos de variação em vez de um roteiro único
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A remuneração de elenco e trilha se desacopla da veiculação e passa a ser negociada por direito de variação — quantos derivados de rosto e de voz o contrato admite
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A métrica de criação deixa de ser aprovação e passa a ser taxa de aproveitamento do lote, empurrando o juízo criativo para o teste automatizado
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e3
        ordem: 1
        efeito: O controle local remove o artefato visual que sustentava a detecção, e a perícia perde o sinal em que se apoiava
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O ônus se inverte — deixa de valer provar que é sintético e passa a valer provar que é registro — e a procedência assinada na captura vira requisito, não diferencial
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Vídeo sem credencial deixa de ser aceito por padrão em redação e em juízo, criando uma classe de material não-verificável que inclui todo o acervo histórico
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Nasce um mercado de custódia de captura — quem assina, quem guarda a chave — disputado por fabricantes de câmera, plataformas e CDNs
            sinal: medio
            prazo: 2030
            confianca: baixa
  - disrupcao: Geração causal em tempo real — o vídeo é calculado por espectador
    efeitos:
      - id: e4
        ordem: 1
        efeito: Parte da mídia deixa de ser renderizada antes e passa a ser computada por espectador, em resposta à entrada dele
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O custo de distribuição deixa de ser cópia e volta a ser processamento, e o streaming perde a economia de escala que a cópia lhe dava
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Quadros por segundo e coerência tornam-se faixa de assinatura, e a estratificação estética do público deixa de ser metáfora
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A obra deixa de ter versão canônica — não existe o arquivo que foi ao ar — e crítica, arquivo e citação perdem o referente
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Instituições de preservação passam a arquivar modelo, pesos e semente em vez do vídeo, e a preservação audiovisual vira problema de reprodutibilidade computacional
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A fronteira entre jogo e vídeo deixa de ser técnica — ambos são o mesmo laço de predição de próximo quadro com entrada do usuário
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Direção audiovisual e game design convergem numa função só, a de quem escreve as regras do espaço em vez do plano
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Festivais e premiações, que separam categoria por suporte, perdem o critério de elegibilidade e passam a classificar por grau de agência do espectador
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: Mídia como programa — a peça entregue é uma máquina de estados com entradas
    efeitos:
      - id: e6
        ordem: 1
        efeito: A peça entregue passa a ser um programa com entradas, que responde a evento e roda nos vários runtimes, em vez de uma sequência de quadros
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O handoff designer-desenvolvedor deixa de existir para movimento — o designer publica o comportamento e o desenvolvedor liga dados a ele
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A formação em motion design incorpora lógica de estados e contrato de dados, e o repertório de referência desloca-se do cinema para a engenharia de software
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Feed e anúncio passam a aceitar mídia reativa, e o vídeo achatado torna-se o formato de compatibilidade — o que se entrega a quem não suporta o programa
            sinal: medio
            prazo: 2030
            confianca: baixa
      - id: e7
        ordem: 1
        efeito: Moderação e medição perdem o objeto — não há um vídeo a revisar, há um programa cujas saídas dependem de quem assiste
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: A conformidade migra de revisar a peça para auditar o programa e seus limites, exatamente o que os compradores já pedem como trilha de auditoria e guardrails
            sinal: medio
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A aprovação de campanha passa a exigir prova de que nenhuma combinação de entradas gera saída proibida, e agências mantêm função permanente de auditoria de comportamento de peça
                sinal: fraco
                prazo: 2032
                confianca: baixa
```

What the YAML cannot say:

**The three roots are not equally strong, and the wheel hides that.** Root 1 is carried by money and measured demand; root 3 is carried by a working authoring model already at consumer scale but with no distribution path; root 2 is carried by a 20-fps demo and an unsolved cost curve. Read as a tree, they look symmetrical. They are not. If exactly one root fails inside the horizon, bet on root 2 — not because the technology fails, but because nobody has shown who pays for a GPU per viewer.

**e3 is the effect that most deserves suspicion and is also the most consequential.** The claim is mechanical: detection reads artefacts, fine control removes artefacts locally, so detection degrades. But "detection degrades" is not the same as "provenance becomes the discriminator" — that second step needs an institution to require the credential, and the C2PA evidence shows the chain physically breaking in the places where media actually travels (messaging, email, screenshots). e3.1.1 therefore assumes a policy decision, not a technical one, and it is marked `baixa` for that reason.

**Two effects in this map point in opposite directions and both are plausible.** e2 says control makes the piece multiply (families of variants, per-audience). e6.2 says control makes the piece collapse into a single reactive program with flat video as the fallback. These are competing futures of the same disruption — variation resolved at production time versus variation resolved at playback time — and the map does not pick. Which one wins is decided by who holds the runtime: if platforms accept reactive media, e6.2; if they keep demanding flat files, e2.

**The orders here measure causal distance, not importance.** e1 (first order, `alta`) changes who gets hired. e4.2.1 (third order, `baixa`) changes whether this decade's moving-image production is recoverable at all in fifty years. The second matters more and is far less certain.

## 6. Sinais fracos e wildcards

**The weakest signal with the largest consequence: EbSynth's seven years.** A technique that gives an artist pixel-level control over a whole sequence, published at SIGGRAPH in 2019, rebuilt for the browser and made ~10× faster in October 2025 — and still a niche tool whose authors have to explain that it is *not* generative AI. If the most controllable path available never scaled in seven years, the binding constraint on this entire map may not be capability but **craft adoption**: control only counts if someone is trained to exercise it. This is the single strongest argument for slower timelines everywhere in section 5.

**The subtlest signal: animation that responds instead of plays.** A state machine with data binding is not a better animation format; it is a different ontology for moving image. It is already in products used daily by hundreds of millions of people and almost nobody in media studies is watching it, because it arrives as a developer concern.

**The technical signal that was misread and matters anyway.** VAR's next-scale prediction did not dethrone diffusion; the 2026 literature integrates the two. But it moved generation toward *causal* production, and causality is the precondition for everything in root 2. Watch architecture papers for causality, not for leaderboards.

**Wildcard 1 — the credential gets a legal status before it gets a working chain.** A court or an electoral authority requires signed provenance for video evidence while messaging apps still strip metadata. The result is not more trust; it is a two-tier evidentiary world in which institutional capture is admissible and citizen capture is not, inverting the political function that cheap video had for two decades.

**Wildcard 2 — a state-machine piece goes viral and there is no way to share it.** The first genuinely mass reactive piece collides with a feed that only accepts files. Either platforms ship a runtime (and root 3 accelerates by years), or the piece is flattened to MP4 and the rupture is deferred to the next cycle.

**Wildcard 3 — a controllable model is released with an open control interchange format.** A standard for expressing masks, trajectories and keyframes independently of the model would do to this field what MIDI did to music production: make the *instruction* portable and the *instrument* replaceable. Nothing in the surveyed literature suggests this is imminent, which is why it is a wildcard rather than an effect.

**Wildcard 4 — the one in the theme brief, kept and reframed.** A one-person feature at a first-tier festival. Reframed, because the interesting variable is not the crew size: it is whether the jury is told. A festival that admits it retroactively has already changed its criteria without deciding to.

## 7. Contra o próprio mapa

**The largest error risk is that the premise is half-expired.** The framing criterion supplied for this map was explicit: evidence that adoption has passed the early majority would be grounds to abandon the theme. For prompt-level generation, that evidence exists — two thirds of digital video buyers, one third of assets, 2026. The map survives only by narrowing the object to the *control layer*, and that narrowing is a decision, not a finding. A fair reader can argue that "control" is just the next feature release of a technology that already crossed, in which case this is a map of an improvement, not a rupture. The honest answer: the three roots here are ruptures because each changes *what the deliverable is* (graph, stream, program), not how well it is produced. But that argument is conceptual, and the counter-argument is empirical.

**The map confirms the framing's own belief, and that should be held against it.** The theme brief states that synthetic media "is ceasing to be a lottery and becoming an instrument". Effects e1 and e6 restate that proposition as consequence, which is circular. The correction available is the IAB data pointing the other way: adoption is wide *and* control is unsatisfied — 96% of small buyers dissatisfied, 40% still asking for humans in the loop. That is the profile of a promise, not of a delivered instrument. Read strictly, in 2026 the lottery is still winning.

**Three extrapolations are load-bearing and unproven.** That marginal variation cost near zero translates into contractual change (e2.1.1 — no precedent measured); that real-time generation finds a payer (e4.1 — no unit economics published anywhere in the sources); that flat video becomes a compatibility format rather than remaining the default (e6.2 — every previous format transition in moving image took over a decade and none of the surveyed sources measures platform intent).

**The map is thin on the losing side.** It describes who gains control and says comparatively little about who is displaced, because the available evidence on displacement is perception data (55% *expect* major impact on animators) rather than headcounts, and the circulating numbers could not be traced to primary sources within this run. A map that is precise about opportunity and vague about cost is biased even when every sentence in it is sourced.

**Geographic bias.** Every technical and commercial anchor is US, European or Chinese. The Brazilian anchor is regulatory only. There is therefore no evidence in this map about how the control layer is actually adopted in a market whose audiovisual production is structured differently — which means the Brazil note describes a rule, not a practice.

## 8. O que a máquina errou

1. **I started by treating prompt-to-video as the root disruption.** The first draft of Phase 2 had "generation by prompt" as emerging. The IAB figures killed it: two thirds of buyers, one third of assets, projected 43% by 2027 — past the early majority for the stated audience. It was reclassified as mature and moved to section 3. If the triage step had been skipped, the entire map would have been about something that already happened.

2. **I made certified authenticity a root disruption, and it failed its own test.** It survived two phases before the loose-cause test removed it: with prompt generation mature, provenance infrastructure happens regardless of whether control exists. It re-entered as e3 only after a control-specific mechanism was identified (local control erases the artefacts detection reads). This is the same failure catalogued as Error 5 in DUVIDAS.md — effect attached to the wrong root — reproduced in a new theme.

3. **Two widely circulated numbers were refused for lack of a primary source.** "AI cuts animation costs by 90%" and "LA County lost 6,700 film industry jobs" appeared in search results via financial-news reposts that were not opened. Katzenberg's "90% of animation artist jobs" is an executive prediction, not a measurement. None of the three appears in the map. Round, quotable numbers without a traceable source are exactly the pattern DUVIDAS.md Error 4 describes.

4. **A date contradiction was left visible instead of resolved.** The Odyssey-2 page rendered a publication date of 27 October 2025 while its own metadata reported September 2026, and an aggregator claimed a distinct "Odyssey-2 Max shipped 21 April 2026" that was not opened. The map cites only the capability figures (50 ms/frame, 20 fps) that the opened page states directly, and does not assert a ship date.

5. **A 2024 source was surfaced as if it were current.** The union/labour article is dated 8 April 2024; its "by 2026, 100,000+ of 550,000 jobs disrupted" is a two-year-old *projection about* 2026, not a measurement of it. It is cited for the union demands it documents, not for the number. This is DUVIDAS.md Error 2 — a stale world state presented with high confidence — arriving through the search engine rather than through the model.

6. **Two sources could not be opened and their claims were therefore excluded.** The report that Adobe Firefly's training data included Midjourney-generated images (reportedly ~5%) returned HTTP 403, so the licensed-corpus dispute appears in the technology list as context and nowhere as evidence. A Brazilian industry-association page on AI in national audiovisual production also returned 403, which is part of why the Brazil note is regulatory only.

7. **The first draft of the wheel contained a product horse-race disguised as an effect** — "Rive replaces Lottie" — sourced from a marketing blog that was not opened. Which vendor wins is a step, not a consequence; it was cut.

8. **Search-engine summaries wrote confident product claims that were never verified.** Statements such as which 2026 model is "first for multi-shot scenes with bound voices" came from SEO listicles. None was opened and none is used, which is why this map says almost nothing about the relative merits of Runway, Kling, Sora, Veo or Luma — the comparative product layer of this theme is, in this run, entirely unsourced.

## 9. Três cenários para 2031

### 9.1. Provável

Control arrived, and it arrived as plumbing. By 2031 the node graph had become the normal way a studio produced a look, and the thing a client approved was a pipeline with a few exposed parameters rather than a cut — the graph was versioned, diffed and, after two rounds of litigation over freelance ownership, written into contracts. Advertising had long since stopped commissioning a film and started commissioning a family: briefs specified axes of variation, and the creative metric became the yield rate of the batch. The craft split along the seam everyone had seen coming and nobody had planned for — one group directed images, another engineered them, and the second group's training had quietly migrated to computing departments.

Real time stayed in its corner. Interactive generation ran beautifully at demo scale and never found a payer for the GPU minute, so it settled where someone already paid for compute per user: games, simulation, and a handful of expensive brand pieces. Reactive media did better, but only inside apps; feeds still took files, so a state machine shipped with an MP4 beside it, and the flat export — the thing that was supposed to become a fallback — remained what most people actually saw. Provenance was everywhere and worked nowhere in particular: cameras signed, newsrooms verified, and the credential still evaporated the moment anything passed through a messaging app or a screenshot. The lottery had not been abolished. It had been narrowed to the last 20%, which turned out to be most of the work.

### 9.2. Desejável

The useful thing that happened by 2031 was boring: an interchange format for control. Masks, keyframes, trajectories and structural conditions became expressible independently of any model, so the instruction outlived the instrument — a studio's direction for a shot survived three generations of generator, and switching vendors stopped meaning starting over. That single decision did more for authorship than any licensing debate, because it made the human contribution portable, inspectable and therefore attributable.

Two things followed. Controllability got a benchmark, so "more controllable" became a measurement instead of a claim, and the products that had been selling the slot machine as an instrument were visibly separated from the ones that were not. And the craft caught up: schools taught state logic and data contracts alongside timing and staging, so the generation entering the field in 2031 could read a graph, direct a stream and write a behaviour without treating any of the three as somebody else's department. Provenance was repaired at the least glamorous layer — messaging and screenshots — and the effect was quiet: video stopped being either automatically trusted or automatically suspect, and started being something people checked.

### 9.3. Indesejável

Control concentrated. By 2031 the pipelines that actually worked were the composed ones, and composing several control signals reliably required scale that only a handful of vendors had, so the graph — the thing that was supposed to belong to the studio — ran only inside their runtime. Independent production had every tool and no leverage: it could produce anything and own nothing, because the look lived in a hosted workflow whose terms changed annually.

The evidentiary layer inverted in the worst available way. Fine control had erased the artefacts that detection depended on, and the institutional response was to require signed provenance without repairing the chain that kept breaking. Signed capture was therefore available to broadcasters, platforms and police, and unavailable in practice to anyone whose footage passed through a phone and a messaging app — so the video that mattered most politically was precisely the video that could not be authenticated. Courts and newsrooms adapted by defaulting to rejection, and the entire pre-2028 archive fell into the same unverifiable class. Meanwhile the labour adjustment that surveys had predicted for years arrived without the contractual protections unions had been asking for since 2024, and the rule that finally governed synthetic media in Brazil was still the electoral one — a labelling requirement with no operational test to say what it covered, enforced against individuals and negotiated with platforms.

## 10. O experimento

**O que é.** Two sessions, both buildable now with free or already-installed tools, testing the two claims this map rests on.

**Sessão A — "Loteria × instrumento".** Each participant receives the same target brief for a single shot ("a person in a red coat crosses left to right in front of a shopfront; the coat must be the only saturated element in the frame"). Two conditions, order counterbalanced:
- **(a) Loteria:** a generator with prompt only, unlimited rerolls, no local control.
- **(b) Instrumento:** the same generator plus exactly one control affordance — a masked region, or a single hand-painted keyframe propagated along the sequence (EbSynth 2 runs in a browser), or a structural condition (pose/depth) in a node graph.

Three measures, in this order of importance: (1) **the 20% test** — after a result the participant accepts, they are given one new requirement affecting a small part of the frame, and we count how much of the accepted result survives the change; (2) attempts and wall-clock time to first acceptable result; (3) **causal legibility** — the participant states, before running it, what the next attempt will change, and we score whether it did.

**Sessão B — "O vídeo que responde".** The same short motion published twice: once as an MP4, once as a state machine bound to one input (scroll position, or a tap). Both placed in a mock feed. Participants are not told there is a difference. We measure dwell time, whether anyone discovers the interaction unprompted, and, in a short debrief, whether they describe the reactive item as a *video* at all.

**Que pergunta de futuro ajuda a responder.** Session A tests root 1 at its weakest joint: not "is control better?" but "does control change the *unit of work* from the attempt to the adjustment?" If the accepted result does not survive a small new requirement even in the control condition, then the instrument is still a lottery with extra steps, and every timeline in section 5 should move right. Session B tests root 3's actual bottleneck, which is not authoring but perception: reactive media only ruptures anything if audiences notice and prefer it.

**Que tecnologia emergente usa.** Local controllable generation in a node graph (ComfyUI plus one ControlNet), non-generative keyframe propagation (EbSynth 2, browser), and state-machine animation with runtime data binding (Rive free tier). Nothing here requires a paid API, which matters: the experiment is about control, and control is precisely what hosted prompt boxes do not expose.

**O que a turma faz ao testar.** Fourteen participants, roughly forty minutes: ten minutes per condition in Session A, ten for Session B, ten for debrief. Everything is logged — every attempt, not just the accepted one — because the discarded attempts are the measurement.

**Que resultado me faria mudar de ideia.** If condition (b) takes *longer* and produces no advantage in the 20% test, the control thesis of this map is wrong and root 1 is a vendor story: the map should be rewritten around scale of production rather than quality of direction. If in Session B nobody discovers the interaction and nobody prefers it, root 3 has no audience-side driver, its effects should be demoted to `fraco` across the board, and the "every video becomes interactive" line — already cut once in the adversarial round — stays cut for good. And if causal legibility in condition (b) is no better than in (a), then what is being sold as control is interface, not mechanism.

## 11. Fontes

1. `https://proceedings.neurips.cc/paper_files/paper/2024/hash/9a24e284b187f662681440ba15c416fb-Abstract-Conference.html` — Tian, Jiang, Yuan, Peng & Wang, "Visual Autoregressive Modeling: Scalable Image Generation via Next-Scale Prediction", NeurIPS 2024. Sustains the architectural claim in section 3 (FID 18.65→1.73, IS 80.4→350.2, ~20× faster inference, scaling correlation ≈ −0.998, zero-shot inpainting/outpainting/editing). Confiabilidade: **alta** — peer-reviewed, primary, best-paper track.
2. `https://arxiv.org/html/2507.16869v3` — "Controllable Video Generation: A Survey". Sustains the shape of the control field (246 papers screened from 708, Jan 2020–Oct 2025, PRISMA, seven control modalities) and, decisively, the open problems used as "o que ainda falta" in 4.1 and 4.2. Confiabilidade: **alta** for the taxonomy and counts; **media** as a preprint without journal peer review.
3. `https://arxiv.org/abs/2602.02214` — Zhu, Zhao, He, Su, Li & Zhu, "Causal Forcing", Feb 2026 (rev. Jun 2026). Sustains the claim that the autoregressive turn is being absorbed into diffusion rather than replacing it, and that real-time causal generation is now an engineering problem with identified failure modes. Confiabilidade: **media** — preprint; the improvement figures are author-reported against a single baseline.
4. `https://odyssey.ml/introducing-odyssey-2` — Odyssey-2. Sustains root 2's "why now" (50 ms/frame, 20 fps, causal, steerable mid-stream) and, usefully, its own limitation ("world models are nascent"). Confiabilidade: **baixa-media** — vendor page, no independent benchmark; its publication date is internally contradictory (see section 8), so only capability figures stated on the page are used.
5. `https://rive.app/docs/editor/state-machine` — Rive state machine documentation. Sustains root 3's authoring model (states as timeline animations, transitions as logic, runtime binding to view-model properties). Confiabilidade: **alta** as documentation of what the tool does; **baixa** for any claim about adoption, which is vendor-stated.
6. `https://techcrunch.com/2026/04/24/comfyui-hits-500m-valuation-as-creators-seek-more-control-over-ai-generated-media/` — ComfyUI, $30M at $500M, 24 Apr 2026, ~4M users. Source of the "slot machine" formulation from CEO Yoland Yan that frames section 2. Confiabilidade: **media** — trade press reporting a funding round; the user count is company-supplied, the valuation is not independently audited.
7. `https://dcgi.fel.cvut.cz/home/sykorad/ebsynth.html` — Jamriška et al., "Stylizing Video by Example", ACM TOG 38(4):107, SIGGRAPH 2019. The non-generative control baseline and the seven-year timeline argument in section 6. Confiabilidade: **alta** — peer-reviewed, primary, authors' page.
8. `https://www.cgchannel.com/2025/10/ebsynth-2-can-turn-video-into-animation-without-using-ai/` — EbSynth 2, released 6 Oct 2025, browser-based, ~10× faster, explicitly not a generative tool. Confiabilidade: **media-alta** — established trade publication; performance figure is developer-stated.
9. `https://www.iab.com/news/business-outcomes-are-just-the-beginning/` — IAB, *2026 Digital Video Ad Spend & Strategy Full Report*, 14 Jul 2026, with Advertiser Perceptions and Guideline. The single most load-bearing source in this map: it is what disqualified prompt generation as a root disruption (two thirds of buyers; one third of assets, 2026; 43% projected 2027) and what documents the unmet demand for control (40% humans in the loop, 36% audit trail, 31% guardrails, 96% of small buyers dissatisfied). Confiabilidade: **media-alta** — industry-body primary research, but a trade association with an interest in the category, and the press release does not disclose sample size or methodology.
10. `https://editorsweblog.org/2026/04/12/c2pa-adoption-tracker-platforms-content-credentials-2026` — C2PA adoption tracker, updated 24 Apr 2026. Sustains both halves of e3: the breadth of signing at capture and platform support, and the breakage ("Email clients do not preserve C2PA. Messaging apps strip metadata"; the unresolved screenshot problem). Confiabilidade: **media** — secondary compilation by a journalism-industry publication; individual vendor claims not independently verified here.
11. `https://www.migalhas.com.br/depeso/450480/deepfake-e-ia-generativa--desafios-regulatorios-para-as-eleicoes-2026` — analysis of TSE Res. 23.610/19 arts. 9º-B and 9º-C §1º for the 2026 Brazilian elections. Sustains the Brazil note, including the identified defect: the same verbs appear as permitted-with-transparency and as prohibited, "but the norm offers no operational test to distinguish them". Confiabilidade: **media** — signed legal opinion (*depeso*), i.e. argued rather than neutral; the resolution text itself is the primary source and was not opened in this run.
12. `https://www.cartoonbrew.com/tech/animation-jobs-in-the-age-of-ai-revelations-from-luminate-intelligences-2025-special-report-253718.html` — Luminate Intelligence special report via HarrisX 2024 data. Sustains the labour *perception* figures in section 3 (55% animators, 50% VFX, 43% game devs, 41% voice actors, 16% makeup) and the finding that nearly half of surveyed generative-AI users mimicked specific creators. Confiabilidade: **media** — trade press reporting a paywalled report; these are stated expectations, not employment measurements, and are treated as such throughout.
13. `https://www.context.news/ai/hollywood-animation-vfx-unions-fight-ai-job-cut-threat` — Thomson Reuters Foundation, on Animation Guild and VFX union demands (control over deployment, no wholesale team replacement, retraining, no forced AI use). Confiabilidade: **media**, with a caveat that matters: **dated 8 April 2024**. Its "by 2026, 100,000+ of 550,000 jobs disrupted" is a 2024 projection *about* 2026 and is not used as a measurement anywhere in this map.
14. `https://ivristech.com/iab-one-third-video-ad-assets-genai/` — secondary summary of the IAB report. Used only as the pointer that located source 9 and to cross-check its figures. Confiabilidade: **baixa** — aggregator, no independent reporting; every figure it carries was re-read at the IAB source before use.

**Não abertas, e por isso ausentes do mapa:** `martech.org` on the Bloomberg finding about Adobe Firefly's training data (HTTP 403); `set.org.br` on AI in Brazilian audiovisual production (HTTP 403); `hollywoodreporter.com` on animation labour talks (redirect to a paywall gateway).

## 12. Anexo — o levantamento bruto

### Fase 1 — Entrevista de enquadramento (respostas recebidas)

The skill requires the interview before anything else. It was run; the answers were supplied in the dispatch, and no interlocutor was available for follow-ups. Recorded verbatim:

| # | Pergunta | Resposta |
|---|---|---|
| 1 | Tema exato (3-7 palavras) | Mídia sintética controlável: vídeo e imagem (tema 12 de 19; família "Percepção e mídia sintética") |
| 2 | Recorte | Tecnologia, com efeitos sobre prática social e mercado |
| 3 | Horizonte | 2031 |
| 4 | Para quem | Quem projeta mídia e interação |
| 5 | Recorte geográfico | Global, com uma nota sobre o Brasil |
| 6 | Já descartado | O que já é comum em produto de massa (a régua da disciplina). Nenhuma outra exclusão |
| 7 | Viés desejado | Neutro |
| 8 | O que já se sabe / leituras | Nenhuma disrupção suspeita declarada — "descubra". Excluir ideias óbvias que serviriam a qualquer tema. Critério declarado para mudar de ideia: evidência de adoção além da maioria inicial (Rogers), ou de que a tecnologia não rompe nada |

Two deviations from the skill, declared: (a) Phase 2 mandates asking for confirmation of the triage and Phase 5 mandates asking whether to re-run any disruption — both were asked and, with no interlocutor, the run proceeded on the stated defaults, as instructed; (b) language. The skill's Phase 6 note says it "operates in English" while requiring the canonical Portuguese section titles and frontmatter keys, and the author's own tested run (TESTE.md) produced English prose with Portuguese headings and a Portuguese wheel. That pattern was reproduced exactly rather than corrected.

### Fase 2 — Triagem de maturidade (tabela completa, incluindo o que foi rejeitado)

| Tecnologia | Classificação | Justificativa e teste de rejeição |
|---|---|---|
| Geração de vídeo por prompt (Runway, Kling, Luma, Sora, Veo) | **Madura** | Two thirds of digital video buyers use GenAI; one third of assets, 2026. Passes the golden rule (>50% of the target audience's services) and the framing's own Rogers criterion. **Rejected as root.** |
| Edição de vídeo / NLE / motion graphics à mão | **Madura** | Decades-old standard. Cannot name what it breaks now. |
| Geração de imagem por prompt (difusão) | **Madura** | Commodity since 2023; the disciplina's own ruler places it below the line. |
| Motion design procedural puro (Cavalry, Graphite, Pixel Composer) | **Madura** *e fora de escopo* | Procedural rules without AI are the object of theme 14. Context only. |
| pix2pix / CycleGAN | **Madura** | 2017. Historical root of image-to-image; cited as lineage, not as driver. |
| ControlNet / condicionamento estrutural | **Emergente** (perto de madura no nicho profissional) | Feb 2023, standard inside ComfyUI, but not in >50% of this audience's services. |
| Controle por região e máscara em vídeo | **Emergente** | Demonstrated, shipping in products, not yet composable with other signals. |
| Propagação de quadro-chave (EbSynth) | **Emergente** | Technique published 2019 and still niche — the tension is recorded in section 6 as the map's strongest timeline warning. |
| Controle de trajetória e câmera | **Emergente** | Research-stage; the survey's temporal-control branch. |
| VAR / predição de próxima escala | **Emergente** + **disruptiva em potencial** | Reopened the architectural dispute; matters for causality, not for beating diffusion. |
| Geração causal em tempo real (world models) | **Emergente** + **disruptiva** | 20 fps demonstrated; no economics, no authoring model. **Root 2.** |
| Geração como grafo (ComfyUI) | **Emergente**, a mais próxima de cruzar | 4M users, $500M valuation. The one to re-triage first in any future run. **Root 1.** |
| Animação como máquina de estados (Rive) | **Emergente** + **disruptiva** | In production at consumer scale but confined to app surfaces. **Root 3.** |
| Vídeo programático (Remotion, satori) | **Emergente** | Niche but real; same conclusion as Rive from the code side. |
| C2PA Content Credentials | **Emergente** em alcance, **disruptiva** em potencial | Demoted from root to 2nd order by the loose-cause test. |
| Corpus licenciado + indenização (Firefly) | **Emergente** como estrutura de mercado | The underlying dispute could not be verified (403); context only. |

### Fase 5 — Rodada adversarial, resultado completo

**Descartados (4).**
- *"Todo vídeo vira interativo até 2031"* — accelerated adoption. No format transition in moving image has flipped the majority in five years. Replaced by the weaker and defensible e6.2 (flat video becomes the compatibility format).
- *"O emprego em animação cai ~90% até 2031"* — invented precision from an executive prediction; the only traceable data are perception surveys. Survives nowhere except as a reservation in section 7.
- *"O mercado de autenticidade certificada valerá N bilhões"* — no source. Cut on sight; the same failure as DUVIDAS.md Error 4.
- *"A difusão é substituída pela arquitetura autoregressiva até 2029"* — contradicted by the 2026 literature, which integrates rather than replaces. Rewritten into the causality argument in root 2.

**Reconectado (1).**
- *Autenticidade certificada como disrupção-raiz* → moved to 2nd order under root 1, via the control-specific mechanism (local control erases the artefact detection reads). Loose-cause test: remove addressable control and provenance infrastructure still arrives — therefore not a root.

**Reescritos (3).**
- *"Um estúdio de uma pessoa produz o que exigia trinta"* → rewritten as e2: the marginal cost of **variation** approaches zero, which is what the evidence supports, rather than the marginal cost of the whole production, which it does not.
- e4.1 → `prazo` pushed and `confianca` lowered after the accelerated-adoption test: no unit economics for per-viewer compute exist in any opened source.
- e5 → `confianca` lowered from `alta` to `media` and `prazo` pushed to 2029; convergence of video and game is a claim about categories, and categories move slowly.

**Mantidos com reserva / marcados `review` (4).**
- e1 and e6 confirm the framing's pre-existing belief that synthetic media is becoming an instrument. Kept because each has independent evidence, but flagged as circular in section 7.
- e3.1.1 assumes an institutional decision with no measured precedent.
- e4.1.1 (aesthetic stratification by subscription tier) is speculative even at `baixa`; it survived because the mechanism is nameable — frames and coherence are metered compute.

**Teste de extrapolação linear, resultado.** e2.2 ("yield rate of the batch" as the creative metric) is the one closest to "what already happens, only more" — batch testing exists in performance advertising today. It was kept because the claim is about *displacement of judgement*, not volume, but it is the weakest first-order-descended effect in the map.

### Contagem antes e depois da rodada adversarial

```
Antes:  disrupções-raiz 4 | ordem 1: 9 | ordem 2: 14 | ordem 3: 10
Depois: disrupções-raiz 3 | ordem 1: 7 | ordem 2: 12 | ordem 3:  9
Descartados 4 · reconectado 1 · reescritos 3 · mantidos com reserva 4
```

### Caminhos abandonados

- **Comparação entre produtos (Runway × Kling × Sora × Veo × Luma).** Every search result on this was an SEO listicle. None was opened, so the map deliberately contains no product ranking. This is a real gap: the theme brief names these entities and this run cannot speak to them.
- **Números de mercado do audiovisual brasileiro.** Figures on Brazilian advertising investment and the Fundo Setorial do Audiovisual appeared in search summaries but the industry sources returned 403 or were unverifiable aggregators. The Brazil note was narrowed to regulation, which had an openable source.
- **Dados de emprego medidos.** Repeated attempts to find headcount data rather than survey expectation failed; what exists in the opened sources is perception and union demands.
- **Custo por minuto-espectador em geração em tempo real.** No opened source publishes it. This is the single most decision-relevant missing number in the map, and root 2 hangs on it.

### Buscas que falharam ou não renderam

- Adobe Firefly training-data dispute — `martech.org` returned HTTP 403; primary Bloomberg reporting not reachable in this run.
- Brazilian audiovisual industry and AI — `set.org.br` returned HTTP 403.
- Animation labour negotiations — `hollywoodreporter.com` redirected to a paywall gateway (`tollbit`), not followed.
- "Controllability benchmark" for video generation — nothing found that is accepted across the field, which is itself consistent with the survey's own statement that such benchmarks and interpretability tools do not exist.
- Open interchange format for control signals — no evidence of any effort; this is why it appears as a wildcard rather than as an effect.

### Notas de dúvida durante a construção

- Is EbSynth's seven-year niche status evidence that control does not scale, or evidence that control without generative quality does not scale? The map assumes the second (which favours the thesis) but the first is defensible and would slow every timeline here.
- Root 3 was nearly discarded for being a product story rather than a media story. It was kept because the documented authoring model — states, transitions, runtime binding — is a genuine ontology change and not a feature. That judgement is the map's most contestable single call.
- Roots 1 and 3 may be the same disruption seen from two ends: both say the deliverable stops being frames and becomes a structure (a graph at production time, a state machine at playback time). They were kept separate because they break different institutions — one breaks the studio, the other breaks the feed — but a reviewer could reasonably collapse them.
- The `confianca: media` in the frontmatter is a compromise. The evidence for root 1 would support `alta`; the evidence for root 2 would support `baixa`. Averaging confidence across structurally different roots is a known weakness of the fixed schema, and it is recorded here rather than hidden.
