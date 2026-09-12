---
tema: "Gerar geradores: design procedural e creative coding com IA"
slug: gerar-geradores-design-procedural-e-creative-coding-com-ia
autor_login: meap
zona_de_interesse: Criação e plataforma
data: 2026-09-11
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global, com nota sobre o Brasil
disrupcoes_raiz: 3
efeitos_ordem_1: 10
efeitos_ordem_2: 14
efeitos_ordem_3: 11
tecnologias_citadas:
  - Síntese de programa para gráficos
  - LLM escrevendo código procedural
  - Síntese de grafo de nós
  - MCP em ferramentas de DCC
  - Blender Python
  - Houdini Apex Script
  - Grafos de materiais procedurais
  - Three.js procedural
  - Shaders GLSL
  - WebGPU e WebAssembly
  - Infinigen
  - Geração procedural clássica (ruído, WFC, L-systems)
  - Gaussian splatting (fora de escopo)
  - Creative coding (Processing, p5.js, nannou, L5)
fontes: 10
confianca: media
experimento: "O duelo do gerador — para 12 objetos de referência, produzir o mesmo artefato como programa procedural escrito por agente e como asset capturado, medindo bytes na rede, tempo até o primeiro quadro em celular intermediário e tempo humano para executar três alterações especificadas. A tese central do mapa (a regra vence pela editabilidade, não pela fidelidade) é falseável na terceira medida."
skill_usada: futurization-meap
publico_ok: false
---

## 1. Resumo

Procedural generation is decades old, and so are shaders. What changed between 2025 and 2026 is who writes the rule: language models began producing the program that generates the image, the object or the material, instead of producing the image, the object or the material. The 3DCodeBench benchmark, released in June 2026, measured twelve models writing Blender Python to build objects across 212 categories — the best of them executed 91% of scripts on the first attempt and 100% with multi-turn error correction, yet produced disconnected and floating parts. That is the exact portrait of the present state: the machine already writes graphics programs that run, and does not yet write graphics programs that make physical sense. This map argues that the disruption is not in the visual quality of the output but in the status of what gets delivered — when the product of the work is a program, it remains editable, versionable, cheap to transport and open to criticism, which is the opposite of the generated pixel. Three ruptures follow: AI as the author of the generator, the node graph of proprietary tools becoming a synthesis target, and the rule becoming the delivery format. A legal consequence closes the map: since March 2026 the human-written rule and the machine-generated instance have carried different copyright status.

## 2. O tema

The theme is a shift in the object of creative work: instead of producing the artefact, producing the rule that produces the artefact — and now delegating the writing of that rule to a model.

Procedural design is not new. Perlin noise, L-systems, Wave Function Collapse, node graphs in Houdini and Substance, shaders on Shadertoy, sketches in Processing and p5.js: all of this is mature, taught and commercialised, and has been for a long time. The cut of this map is different and deliberately narrow — **AI as the author of the generator**, and the economic contest that opens between generating a program and generating a pixel.

Why this belongs to media and interaction rather than to computer graphics alone: because it decides what the designer delivers. If the deliverable is a rendered file, the client receives a result; if it is a generator, the client receives a space of results — with parameters, with variation, with the possibility that the artefact is recomputed on the device of whoever consumes it. That changes the contract, the portfolio, the teaching and the distribution format. It also changes who is able to do the work: the barrier of tool expertise falls, and the barrier of being able to specify a constraint rises.

It deserves a future map for one specific reason: it is one of the few places where generative AI points towards artefacts that are **lighter**, **more legible** and **more auditable** than the alternative — the opposite of the dominant trend in generated media. If that thesis holds, it runs against the current; if it does not hold, the error will be instructive.

**What this map does not cover:** 3D capture of reality (data, not rule) and the generation of video and image as finished media are neighbouring themes and stay outside, except as terms of comparison.

## 3. Onde isso está hoje

**What is already mature and therefore not a disruption — it is context.**

Classical procedural generation has been a commodity in games for two decades. Creative coding in Processing and p5.js is curriculum. GLSL shaders are infrastructure. Node graphs — Houdini, Blender geometry nodes, Substance Designer, Cavalry, Rive — are market standard in professional studios.

Also already mature, and treated here as context rather than rupture: **designers using AI to write code**. The *AI in Design Report 2026* (Designer Fund and Foundation Capital, fielded in the first quarter of 2026, published 24/08/2026) records 76% of respondents having used AI coding tools, 50% having shipped AI-generated code to production, and "code generation and front-end implementation" as the largest year-over-year jump, +31 points. By the course's own rule — more than 50% of the target audience already using it without surprise — this has passed the early majority. It does not enter as a root disruption.

**What is emerging and demonstrated.**

- **Graphics program synthesis, measured.** 3DCodeBench (arXiv 2606.01057, June 2026) put twelve vision-language models to the task of writing Blender 5.0 Python that procedurally builds an object, across 212 categories, each with a ground-truth factory script. Executability reaches 91% single-turn and 100% with an error-feedback loop; the quality failures that remain are disconnected components and floating primitives — that is, failures of geometric reasoning and physical plausibility, not of syntax. The repository declares 212 categories, roughly 82,000 trials, code under MIT, and factory scripts inherited from Infinigen under BSD-3.
- **Synthesising the graph, not just the text.** MultiMat (University of Mannheim and Adobe Research, ICLR 2026) synthesises node graphs for procedural materials by treating the graph as a **visual and textual** object at once, with rendering feedback from intermediate nodes and a constrained tree search that guarantees static correctness. The authors report higher visual quality and fidelity than text-only baselines.
- **The protocol entering the proprietary tool.** At SIGGRAPH 2026, with a keynote on 22 June in London, SideFX and NVIDIA presented MCP support in Houdini 22: an Apex Script MCP server, a VS Code extension and a validator that checks generated code before execution. SideFX itself classified it as a sneak peek headed for Labs — the experimental channel, explicitly not recommended as a pipeline dependency.
- **Shaders by conversation.** AI Co-Artist (arXiv 2512.08951, November 2025) proposes interactive evolution of GLSL animations guided by an LLM, with the user navigating through visual feedback instead of writing code.
- **The leading community case.** `img2threejs` (15.8k stars on GitHub, Apache-2.0) rebuilds the object in a reference image as a TypeScript factory function returning a `THREE.Group` — no imported mesh, no `.glb` fetched at runtime. The pipeline is a funnel of passes (blockout, structural, form, material, surface, lighting, interaction, optimisation), each vision-reviewed against the reference before advancing, with a gate that blocks shallow specifications **before** spending tokens on code. The project states its own limit: a single image cannot reveal hidden geometry, and approximate regions are flagged rather than faked.

**The counterpoint practice has already formulated.** A June 2026 text from Summer Engine separates two senses of "AI procedural" in games: AI that **writes the generator**, whose output runs deterministically with no model in the loop, and AI **called during play**. The second is rare in shipped products for three named reasons — latency the player notices, an inference cost attached to every session, and irreproducibility ("the dungeon on seed 4471 has an unreachable room" is fixable; "the model made something weird that one time" is not). The deterministic generator, by contrast, runs in milliseconds, costs nothing per play, works offline and returns the same world for the same seed.

**Note on Brazil.** The ground here is community and teaching, not a tool industry: OpenProcessing, free creative-coding courses, the Compoética meeting, p5.js workshops inside design programmes — one of them recorded in the Fashion Design course at the School of Fine Arts of UFMG in 2023, already combining manipulation of existing code with authorial creation assisted by a language model. The Brazilian asset relevant to this theme is the constraint: expensive bandwidth and a mid-range handset base make artefact weight a design variable rather than a detail — precisely the axis on which the program beats capture. It is worth noting that an adjacent research line already formalises this argument outside Brazil: the L5 library (arXiv 2606.18481) proposes creative coding under permacomputing principles, treating low resource consumption and long-term stability as declared requirements, in stated tension with ease of use.

## 4. As disrupções-raiz

### 4.1. AI as the author of the generator

**What it breaks.** It breaks the asset production chain. For thirty years the value of graphics work lay in producing the artefact — the mesh, the texture, the frame — and the tool was the bottleneck. If a model writes the program that builds the object, the artefact stops being the product and becomes a re-executable by-product. It also breaks the current assumption that "AI generation" means heavy, opaque output: here the output is text, diffable, measured in kilobytes.

**Why now.** Because the ability to write code stopped being the obstacle and became a measurable baseline. 3DCodeBench shows 91% to 100% executability, with the bottleneck displaced to geometric reasoning. `img2threejs` shows the architecture the community converged on: spend tokens where judgement is required, spend deterministic scripts where verification is required. And there is a stock of annotated procedural code — the Infinigen factory scripts, reused as ground truth by the benchmark itself — that makes the task trainable and evaluable.

**What is still missing.** Physical plausibility reasoning: the characteristic defect today is the disconnected part and the floating primitive, and no error-feedback loop fixes that, because the code runs. A corpus of quality procedural code at scale — the benchmark authors themselves flag this need as critical. And an acceptance criterion the industry recognises: executing is not getting it right, and there is still no accepted ruler for "the rule is correct".

### 4.2. The node graph becomes a synthesis target

**What it breaks.** It breaks the competitive moat of proprietary content tools. The value of Houdini or Substance was never only the render: it was that operating them takes years, and that difficulty sustains salaries, consultancies and the very gap between large and small studios. If the model writes the graph — in the tool's native representation, not in a parallel script — then what was protected was the expertise of translating intent into a graph, and that is exactly what is being automated.

**Why now.** Because synthesis stopped treating the graph as text. MultiMat processes the visual **and** the textual representation, feeds back renders of intermediate nodes during generation, and uses constrained tree search to guarantee structural correctness — it is the first approach to take seriously that the graph is a spatial object. And because the tools began opening the door from the inside: the Apex Script MCP in Houdini 22, with a validator before execution, is a vendor installing the rail along which the agent drives its own tool.

**What is still missing.** Standardisation: one MCP server per vendor is not an ecosystem, it is an integration. An answer on liability — who answers for a generated graph that ships and breaks three months later. And the audit interface: a machine-authored graph is machine-legible, and human review of a graph of hundreds of unnamed, ungrouped nodes is impractical. SideFX itself called theirs a preview.

### 4.3. The rule as the delivery format

**What it breaks.** It breaks the assumption that digital media is distributed as a heavy file rendered at the origin. If what travels is the program — kilobytes of text the device executes — then bandwidth cost, storage cost, the possibility of editing after delivery and the legal status of what was delivered all change. It also breaks the commission model: delivering the generator is not delivering the file.

**Why now.** Because the alternative became visibly expensive. Captured or generated neural media is heavy and integrates poorly with animation and editing workflows; programmed media is light and stays editable. And because practice has already framed the criterion in operational rather than aesthetic terms: determinism, cost per session and reproducibility by seed. There is also a new legal vector: with the denial of certiorari in *Thaler v. Perlmutter* on 2 March 2026, it became settled that a work without human authorship has no protection in the United States — which separates, inside a single piece, the written rule (where human authorship may exist) from the generated instance (where it may not).

**What is still missing.** The format. There is nothing for the rule that glTF is for the mesh: a procedural interchange that crosses tools without becoming hostage to one engine. Review tooling — diffing a graphics program is diffing code, and nobody has built the layer that shows what a one-line change does to the image. And the quality test on organic and photoreal content, where the rule still loses badly to capture.

### Discarded in triage

- **AI-assisted creative coding** — discarded as mature. With 76% of designers already using AI coding tools and 50% shipping generated code to production, this has passed the early majority. It enters section 3 as context.
- **3D capture and gaussian splatting** — out of cut (neighbouring theme) and, besides, data rather than rule.
- **Video and image generation as finished media** — out of cut (neighbouring theme) and mature for this map's audience.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "AI as the author of the generator"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "3D and motion tools expose generate-as-code as a first-class output, alongside mesh and image."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "The quality gate — render, compare against the reference, repeat — becomes a mandatory pipeline stage, because executing without error is not getting it right."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "A generator-reviewer role consolidates, paid to read the rule and judge the space it covers rather than to assess a frame."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Asset stores stop selling finished meshes and start licensing parametric recipes with exposed parameters."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Asset pricing detaches from polygon count and starts reflecting the breadth of the variation space the rule covers."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "The corpus of annotated procedural code becomes the competitive bottleneck, because it separates a model that writes generators from one that writes scripts that merely run."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Existing procedural generators are used as training and evaluation data rather than as scenes to render."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Studios reclassify their internal node and script libraries as training assets and restrict access that used to be granted for convenience."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Procedural graphics benchmarks — executability, shape distance, human preference — enter studio criteria for choosing a model."
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e3
        ordem: 1
        efeito: "The nature of the defect changes: instead of a blurred artefact or an extra finger, the typical error is a disconnected part, a floating primitive and a call to a non-existent API."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Visual debugging becomes program debugging, with execution traces instead of inspection of the final frame."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Design courses adopt code reading as a critical competence — reading to judge the rule, without the expectation of writing it by hand."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "Modelling in DCC software becomes, for part of the workflow, a conversation with an agent about constraints instead of direct manipulation of geometry."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Expertise in mastering the software loses market value and expertise in specifying a verifiable constraint gains it."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Designer portfolios stop showing finished pieces and start showing variation spaces — the set of what the system can produce."
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "The node graph becomes a synthesis target"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "Proprietary tool vendors publish an official agentic surface — protocol server plus validator — so that models drive the graph from the inside."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "The competitive frontier between tools shifts from the interface to the quality of the agentic API and the documentation it exposes."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "A tool without an agentic surface drops out of professional workflows even when it is superior in manual use."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "A new dependency grows, on a closed intermediary sitting between the designer and the tool they already licensed."
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e6
        ordem: 1
        efeito: "Graph legibility becomes an engineering requirement, because a machine-authored graph must be audited by a human before it ships."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Tools begin naming, grouping and laying out nodes automatically, treating visual arrangement as mandatory output rather than cosmetics."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "The commented-graph convention settles, in which each block ships with the justification for the decision — the rule delivers the why alongside the how."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "The technical director, who translated artistic intent into a graph, stops being the scheduling bottleneck of studios."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Small studios begin operating procedural pipelines that previously required a dedicated technical team."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "The scale advantage of the large studio migrates from technical headcount to a proprietary archive of procedural data and the rights over it."
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "The rule as the delivery format"
    efeitos:
      - id: e8
        ordem: 1
        efeito: "On the web and in XR, the choice between program and capture becomes an explicit design decision with cost declared in bytes, battery and editability."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Pressure appears for a procedural interchange format, because nothing exists for the rule that matches what glTF is for the mesh."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "Whoever controls that format controls what stays editable after delivery, and the technical discussion becomes a platform dispute."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: "Procedural content becomes the default again where bandwidth is expensive and the handset base is mid-range, and Brazil falls in that band."
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e9
        ordem: 1
        efeito: "Model-driven generation migrates to build time and leaves run time: the AI writes the generator, the generator runs deterministically on the device."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "The promise of infinite content generated at run time is reclassified as cost per session plus latency, and retreats to a niche."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "A living world stops meaning model improvisation and starts meaning an auditable rule space reproducible by seed."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: "A piece comes to have two layers with distinct legal status — the rule, where human authorship may exist, and the generated instance, where it may not."
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "Copyright registration falls on the human part of the rule, and the generated instance circulates with no declared owner."
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: "Commission contracts begin specifying delivery of the generator and its parameters rather than of the final rendered file."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**What the YAML cannot say.**

First: the three trunks do not have the same empirical support. Trunk 1 has published, reproducible measurement — a benchmark with ground-truth factory scripts and open code. Trunk 2 has one conference paper and a vendor announcement the vendor itself called a preview. Trunk 3 is largely an economic and legal argument, resting on reported practice and a court decision, not on measurement. The declared confidence on each node reflects this, but the asymmetry between trunks does not fit in a `confianca` field.

Second: `e10` is the only first-order effect carrying `media` rather than `alta`, and that is deliberate. It is not a mechanical consequence of the disruption — it depends on how courts and registration offices treat the boundary between the human-written rule and the generated instance, and that boundary is declaredly open: what the March 2026 denial of certiorari fixed was the floor (no human, no protection), not how much human is enough.

Third: the wheel hides a feedback loop that may be the strongest mechanism in the map. `e2.1` says existing generators become training data; `e1` says tools begin emitting code. Together they close a cycle — the more procedural code is generated and published, the more material exists to train the next model to generate procedural code. It is the same cycle that made code generation more reliable than image generation: code has cheap automatic verification. The wheel shows the two nodes separately; the force lies in the edge between them, which the format does not represent.

Fourth: the years are anchoring estimates, not forecasts. Where 2027 appears, the correct reading is "this has already started and should be visible next year"; where 2031 appears, it is "if it happens within the horizon, it will be at the end of it".

## 6. Sinais fracos e wildcards

**The validator before execution.** In the Houdini 22 announcement there is a small and revealing detail: a validator that checks generated code **before** running it. `img2threejs` makes the same move, in a gate that blocks shallow specifications before spending tokens. Two independent projects converged on the same architecture — deterministic scripts verify, the model judges. If this becomes the pattern, the interface between AI and creative tools will not be the chat: it will be the verifiable contract, and the chat becomes a presentation detail.

**The economy counted in tokens.** `img2threejs` measures itself in token cost and organises its whole pipeline to spend model only where visual judgement is required. That is a design metric that did not exist in computer graphics. If it catches on, the design question shifts from "how many polygons" to "how many judgement tokens did this piece cost" — and projects become comparable on a ruler no school teaches today.

**Permacomputing reaching creative coding.** L5 proposes a library of the Processing family under computational sustainability principles, with low resource consumption and long-term stability as declared requirements, in explicit tension with ease of use. Today it is marginal. But it is the only place where the environmental and the aesthetic accounts of the procedural are drawn up together — and it is the argument the Global South has most reason to use.

**Wildcard 1 — the compiler turn.** A game engine or browser begins treating the graphics program as a first-class format: instead of downloading the asset, it downloads the rule and compiles on the device, caching the result. Technically possible today with WebGPU and WebAssembly; what is missing is someone with distribution doing it. If it happens, `e8.1` stops being pressure and becomes a fait accompli, and whoever controls the format controls the market.

**Wildcard 2 — the benchmark that dismantles the thesis.** A study measures editability rather than fidelity, comparing generated program against capture — and finds that a model-generated program is **less** editable by a human than a mesh, because nobody understands the thousand lines the machine wrote. The whole transparency advantage of the procedural disappears if the rule is illegible. This map bets that legibility will be treated as a requirement (`e6`); the wildcard is that it is not, and generated procedural content becomes just another black box, only in text.

**Wildcard 3 — the closed corpus.** Holders of the large procedural libraries realise the archive is worth more as training data than as a tool and close access — an accelerated version of `e2.1.1`. The paradoxical effect: the field whose value lies in being open and legible comes to depend on proprietary corpora.

## 7. Contra o próprio mapa

**The main thesis may be aesthetic preference disguised as analysis.** "The program beats the pixel because it is light, editable and explainable" is exactly what an audience of people who design interaction likes to hear. The history of computer graphics is, to a large extent, the history of that thesis losing: procedural textures lost to painted textures when memory got cheap; procedural geometry lost to scanned meshes when capture got cheap. Every time storage and bandwidth got cheaper, the data side beat the rule side. There is no strong reason to assume this time is different — except the editability argument, which is the only one that does not depend on the cost of a bit. That is why the experiment in section 10 measures editability rather than weight.

**The question "does procedural aesthetics come back to dominate?" was deliberately left out of the wheel.** It was in the theme statement and is the most seductive hypothesis in the set. It did not enter because it fails the loose-cause test: procedural aesthetics returning to dominance would depend on taste, on production cost and on visual fashion cycles — three things that do not derive from AI writing the generator. I record the exclusion rather than hiding it.

**Source bias.** Much of the empirical evidence here comes from 2026 arXiv papers with strong participation from interested laboratories (Adobe Research in MultiMat) and from community projects that describe themselves. A benchmark published alongside the method it advances tends to favour that method. None of the central sources is an independent audit.

**Extrapolation embedded in `e4` and `e7`.** "Software expertise loses value" and "the technical director stops being a bottleneck" are the kind of claim repeated at every wave of tool automation, and one that usually materialises slowly and partially. The historical precedent is clear: authoring tools did not eliminate specialists, they displaced them. I kept the effects because the mechanism is nameable, but the years are probably optimistic by a few.

**A double-counting risk.** Disruptions 1 and 3 touch each other: if the AI writes the generator and the generator is the deliverable, is this the same thing seen from two sides? I applied the removal test: the rule can become a delivery format without AI writing it (which is what the demoscene and procedural generation in games already do), and AI can write generators that only produce assets exported into the traditional pipeline, never becoming a delivery format. They are independent. But the reader should know the boundary is thin and that most real cases will show both at once.

**What would make me abandon the map.** Two things. First: evidence that graphics program synthesis is already in the early majority of adoption — the available indicator today measures designers writing code in general (76%), not designers writing generative systems, and it is a measure that does not separate the two. If a specific cut above 50% appears, this theme leaves the emerging category and becomes context. Second: evidence that the thing ruptures nothing — that generating the code merely accelerates what the technical director already did, without changing who delivers what. The test in section 10 aims exactly at that point.

## 8. O que a máquina errou

Errors made while building this map, all caught before entering the document.

**1. User-study numbers fabricated by a search summary.** The first search on LLM shader generation returned, inside a summary of results, very specific numbers attributed to the AI Co-Artist paper: 4.2 shaders created by novices against 0.6 on Shadertoy, satisfaction 4.7/5 against 2.8/5, fewer than 3% compilation errors. On opening the paper's arXiv page, none of those numbers appear — the page speaks of "comprehensive evaluations, including structured user studies", with no participant count and no metric. The numbers were discarded and the paper entered the map only as evidence that a method exists, not as quantitative evidence. This is the pattern described in the skill's DUVIDAS.md: a round, plausible number with no traceable source.

**2. Divergent star count.** Third-party aggregators reported 14.6k and 4.2k stars for `img2threejs`; the repository's own page reports 15.8k. I used the repository and record the divergence — popularity figures replicated by aggregators are notoriously stale.

**3. Inconsistent 3DCodeBench date.** One search summary claimed 31 May 2026; the project repository records "[06/01/2026] Paper released on arXiv"; the arXiv identifier 2606.01057 indicates June 2026. I adopted June 2026. The difference is one day and changes nothing in the map, but the pattern matters: when two sources disagree on a trivially verifiable fact, it is a sign the summary was generated rather than read.

**4. An agency source treated as a technical projection.** A search returned the claim that "5-million-Gaussian splats will play smoothly on mid-range phones by 2027". It comes from the blog of a studio that sells gaussian splatting services. It was not used as evidence; the program-versus-capture comparison in this map rests on operational criteria (determinism, cost per session, reproducibility) rather than on performance projections from an interested party.

**5. Retrieval failure and how it was worked around.** The attempt to open the PDF of the L5 paper (arXiv 2606.18481) returned unreadable binary content, and the reading model replied asking for the text instead of flagging a format failure — a reply that, accepted without checking, would have led to abandoning the source. The abstract page for the same paper worked. Two other legal sources (congress.gov and a law firm page) returned HTTP 403, and a third timed out; the legal fact was confirmed in a fourth source that opened successfully.

**6. The temptation to inherit the conclusion from the theme statement.** The theme statement asks whether "AI-generated procedural 3D is a thousand times lighter than the splat". None of the opened sources supports that ratio. The weight comparison between program and capture was not measured in any source I could open — what exists are qualitative claims that high-quality splats are heavy and require optimisation. The number did not enter the map, and its absence is precisely what the experiment in section 10 proposes to correct.

## 9. Três cenários para 2031

### 9.1. Provável

By 2031, generate-as-code had become one export option among others, not the only one. The major DCC packages began exposing an official agentic surface between 2027 and 2029 — first in narrow niches, like the rigging SideFX showed in 2026, then in materials and geometry — and the difference between tools came to be measured less by the interface and more by the quality of the documentation an agent could consume. The technical director's role did not disappear; it moved. Instead of building the graph, it came to specify the constraints, review the graph that arrived finished, and answer for it. Small studios entered work that used to require a team, and large studios discovered that the advantage they had left was the archive, not the headcount.

AI-generated procedural content settled where cost mattered — web, mobile, XR, expensive-bandwidth markets — and capture kept winning where realism mattered. Nobody won the war; what happened is that the choice between program and capture became a documented design decision with declared cost, instead of a pipeline habit. Run-time generation, so heavily announced in 2025 and 2026, shrank to a niche for the most prosaic of reasons: the inference cost per session and the impossibility of reproducing a defect. What remained was AI in the kitchen and determinism at the table.

In teaching, the change was slower than promised. Code reading entered design courses as a critical competence rather than a productive one — one learns to judge a generator without the expectation of writing it by hand. Portfolios began showing variation alongside the piece, but the finished piece never left.

### 9.2. Desejável

By 2031, the field had achieved the hardest thing: keeping the generated rule legible. Graph and code legibility became an engineering requirement around 2029, after a few public maintenance disasters — tools began naming, grouping and commenting automatically, and the commented graph, which delivers the justification alongside the operation, became convention. The effect was that reviewing the machine's work became possible for people who had not written it, and the procedural kept the property that was always its argument: being explainable.

An open procedural interchange format was agreed before any platform could capture it, and so the rule crossed tools without becoming hostage to an engine. That had a direct economic consequence: commission contracts came to specify delivery of the generator and its parameters rather than the rendered file — the client began receiving a space of results, with the right to recompute. Legal treatment followed: the human layer of the rule received protection, the generated instance circulated freely, and the separation between the two became registration practice instead of dispute.

In Brazil, the constraint became an advantage. The creative-coding school that already existed — community, workshops, free courses — found in artefact weight a technical argument the North had no reason to develop, and produced work that runs on a mid-range handset and survives without bandwidth. It did not become a tool industry; it became a recognised competence.

### 9.3. Indesejável

By 2031, AI-generated procedural content had become another black box, only in text. Legibility was never treated as a requirement: models began producing generators thousands of lines long that worked and that nobody could read, and the promise of transparency evaporated without anyone having to revoke it. When a generator broke, the answer was to regenerate — which worked, and destroyed any possibility of accumulated learning about why the rule had been wrong.

The feedback loop closed in the worst sense. Holders of the large procedural archives realised the library was worth more as training data than as a tool and closed access; the field that sustained itself on openness came to depend on proprietary corpora and on models only the large players could train. The agentic surface, which had looked like opening, had been the opposite: each vendor installed its own protocol, and the designer came to depend on a closed intermediary between them and the tool they had already licensed.

The expertise was lost before it was replaced. A generation formed that knew how to ask and did not know how to judge, and design criticism was left with no vocabulary to discuss a rule — only to discuss the instance the rule produced, which is exactly what the procedural existed to overcome. In the end the gain was speed and the cost was comprehension: generators kept being generated, and nobody could any longer say what they generated.

## 10. O experimento

**The generator duel.** Testable in class, within weeks, with free tools.

**Setup.** Choose 12 reference objects of increasing complexity and declared types: four rigid and regular (chair, lamp, toolbox, speaker stack), four articulated (umbrella, hinge, scissors, tripod), four organic (plant, coral, cloud, cloth). The gradation matters: the map's hypothesis is that the rule loses on organic and wins on articulated, and that needs to be separated.

For each object, produce two versions:
- **A — program:** an agent writes the generator (Three.js or Blender Python), with an explicit quality gate, in the format 3DCodeBench and `img2threejs` use — render, compare against the reference, up to three error-correction attempts.
- **B — artefact:** the same object obtained as a finished asset (mesh from a public bank, or capture), in the traditional workflow.

**The three measures.**
1. **Bytes over the wire** — what actually travels to render the object once. A trivial measure and the least interesting; it serves to anchor the conversation in a number instead of an impression.
2. **Time to first frame** — on a mid-range Android handset, on a limited mobile network. This is where the note on Brazil stops being rhetoric.
3. **Human time to make three specified changes** — and this is the measure that decides. For each object, three identical requests across both versions: (a) make it 40% taller without distorting thickness; (b) swap the material for brushed metal; (c) animate a named articulation. Time each change, with the same person doing both versions in randomised order.

**Why this experiment and not another.** Measure 3 is the only one that tests the map's thesis instead of repeating it. Weight and speed the procedural wins by construction, and measuring them only confirms the obvious. Editability is the factual claim — and it is the one that can fail, because a thousand-line machine-written generator may be *less* editable than a mesh, which anyone can drag in the viewport. If B beats A on measure 3, wildcard 2 from section 6 has materialised, effect `e6` (legibility as requirement) rises in priority, and the central thesis of this map falls.

**Record alongside, at no extra cost.** How many correction attempts each object required before executing (replicating the benchmark's own metric); how many lines each generator has and how many of them the person could explain after five minutes of reading (a direct proxy for legibility); and, at the end, which part of the generator was written by a human — the question the March 2026 decision made legally relevant and that nobody is used to answering.

**Deliverable.** A table of 12 rows by 3 measures, a public gallery with both versions side by side, and a short page on what failed. The raw material has value even if the hypothesis falls — above all if it falls.

## 11. Fontes

Listed here are only the sources actually opened and read during this round. Sources seen solely as search results, without being opened, are in section 12 and support no claim in this map.

1. `https://arxiv.org/html/2606.01057v1` — 3DCodeBench: benchmark of agentic procedural 3D modelling via code. Supports the central evidence of disruption 4.1: twelve vision-language models, 212 categories, 91% executability single-turn and 100% with an error-feedback loop, with residual failures of disconnected components and floating primitives. **Reliability high for what it measures, medium for what it concludes:** it is an arXiv preprint (June 2026) with open code and ground-truth factory scripts, which makes it reproducible; but a benchmark published alongside the agenda it advances tends to frame the result favourably.
2. `https://github.com/gaoypeng/3dcodebench` — the benchmark repository. Supports the scale and licensing details: 212 categories, roughly 82,000 trials, code under MIT, factory scripts inherited from Infinigen under BSD-3, four evaluation settings. **Reliability high** as a description of the artefact; it is the primary source of the object itself.
3. `https://arxiv.org/abs/2509.22151` — MultiMat: multimodal program synthesis for procedural materials (Belouadi, Boubekeur, Kaiser; ICLR 2026). Supports disruption 4.2: the graph treated as a visual and textual object, with intermediate render feedback and constrained tree search. **Reliability medium-high:** accepted at a top-tier conference, but co-authored by Adobe Research, a direct interested party in the procedural materials market, with baselines chosen by the authors themselves.
4. `https://www.jonpeddie.com/news/sidefx-and-nvidia-bring-mcp-powered-ai-agents-to-houdini-22s-rigging-workflow-at-siggraph-2026/` — MCP in Houdini 22, announced by SideFX and NVIDIA at SIGGRAPH 2026 (keynote 22/06/2026). Supports the claim that vendors have begun opening the tool to the agent from the inside, and the detail of the pre-execution validator. **Reliability medium:** trade press reporting a vendor announcement; the value here is that the article itself records SideFX's caveat — a sneak peek headed for the experimental channel, not a production tool. Without the caveat, the source would be marketing material.
5. `https://github.com/img2threejs/img2threejs` — reconstruction of an object from an image as procedural Three.js code (15.8k stars, Apache-2.0). Supports the architecture the community converged on — gated passes, deterministic scripts verify and the model judges — and the token-cost metric. **Reliability medium:** it is project self-description with no external evaluation; it earns credit for declaring its own limits (a single image cannot reveal hidden geometry; approximate regions are flagged), which promotional material rarely does.
6. `https://stateofaidesign.com/chapters/tools` — AI in Design Report 2026 (Designer Fund and Foundation Capital, fielded Q1 2026, published 24/08/2026). Supports the maturity triage that **discarded** "designers using AI to write code" as a disruption: 76% have used AI coding tools, 50% shipped generated code to production, +31 points year over year in code generation. **Reliability medium-low:** the page states neither sample size nor recruitment method, and the survey comes from organisations with a commercial interest in the result. I used it to *reject* a disruption, not to support one — the direction in which the bias works against my conclusion rather than for it.
7. `https://www.summerengine.com/blog/ai-procedural-generation-for-games` — the distinction between AI that writes the generator and AI called at run time (06/06/2026). Supports effect `e9` and its reversal of expectation: noticeable latency, inference cost per session and irreproducibility against determinism, zero cost per play and same seed equals same world. **Reliability medium:** it is a practice report from an engine vendor, with no figures; it is worth citing for the operational framing of the criterion, not as measurement. The text itself presents no adoption statistics.
8. `https://arxiv.org/abs/2512.08951` — AI Co-Artist: interactive evolution of GLSL shaders guided by an LLM (November 2025). Supports only the existence of a method for shader synthesis by conversation. **Reliability low for numbers:** the abstract page mentions user studies without stating participants or metrics, and specific figures that circulated in search summaries are not in the paper — see section 8, error 1. It entered the map as existence, not as quantitative evidence.
9. `https://arxiv.org/abs/2606.18481` — L5: a permacomputing approach to creative coding. Supports the weak signal in section 6 and the framing of the note on Brazil: low resource consumption and long-term stability as declared requirements, in explicit tension with ease of use. **Reliability medium:** a recent preprint without replication; used as a signal of research direction, not as evidence of adoption.
10. `https://constitutioncenter.org/blog/supreme-court-denies-artificial-intelligence-authorship-claim-for-artwork-copyright` — denial of certiorari in *Thaler v. Perlmutter*, 02/03/2026, leaving intact the D.C. Circuit ruling that the Copyright Act requires human authorship. Supports the legal side of disruption 4.3 and effect `e10`. **Reliability high for the fact, medium for its reach:** the date and substance of the decision are verifiable, but this is a secondary source on **United States** law — nothing here applies automatically to Brazil, and the material itself records that how much human authorship suffices remains open.

## 12. Anexo — o levantamento bruto

**Language decision.** The skill states that it operates in English while mandating the literal Portuguese section titles and frontmatter keys required by the CIN0055 pipeline, and its own tested exemplar (TESTE.md) is written that way: Portuguese frontmatter keys, Portuguese values for `tema`, `slug`, `zona_de_interesse`, `publico` and `experimento`, Portuguese section titles, English prose body. This document follows that pattern rather than translating the body, in line with TMI-0042 and TMI-0047, which are decisions in force for this skill. One point remains genuinely unsettled and is declared here rather than decided silently: the language of the effect sentences inside the wheel YAML. TMI-0042 says "body in English" and its enumerated Portuguese exceptions do not include those sentences, and the most recent application of the rule (theme 09, rewritten under TMI-0047) writes them in English — so they are in English here. But the aluno's own TESTE.md writes them in Portuguese, and rounds 04 and 06 of this battery followed the exemplar. **This is flagged for Giordano to arbitrate**, since the meap battery is currently inconsistent on this sub-point as well as on the body language.

**Note on the first version of this document.** It was produced in full in Brazilian Portuguese, validated, and then rewritten in English after consulting the decision index — which is where TMI-0042 and TMI-0047 were found. The Portuguese version is not the record of a different analysis: the triage, the disruptions, the wheel, the adversarial round and the sources are identical. Only the language of the prose changed.

### 12.1. Fase 1 — framing interview

Run with no human interlocutor available; the answers were supplied in the task dispatch and are reproduced literally below, since the skill requires all eight questions to have answers before Phase 2.

| # | Question | Answer |
|---|---|---|
| 1 | Exact theme | Gerar geradores: design procedural e creative coding com IA |
| 2 | Cut | Technology, with an economic arm (what gets delivered) and a legal one (who owns the rule) |
| 3 | Horizon | 2031 |
| 4 | Who it is for | People who design media and interaction |
| 5 | Geographic scope | Global, with a note on Brazil |
| 6 | Already discarded | Whatever is already common in mass-market products (the course's rule); no other exclusion |
| 7 | Desired bias | Neutral |
| 8 | What is already known / suspected | No suspected disruption — discover it. Exclude ideas that would serve any theme. Would change position given: adoption already past the early majority (Rogers), or a technology that ruptures nothing |

Depth: three orders. Mode: from an innovation, not from a sector.

### 12.2. Fase 2 — full maturity triage

| Technology | Classification | Test applied |
|---|---|---|
| Classical procedural generation (noise, WFC, L-systems, fractals) | **Mature** | A commodity in games for two decades. One cannot say what it breaks right now. Rejected as a root; enters as context |
| GLSL shaders / Shadertoy | **Mature** | Real-time graphics infrastructure; standard for well over 3 years |
| Creative coding (Processing, p5.js, openFrameworks, nannou) | **Mature** | Established curriculum; consolidated community, including in Brazil |
| DCC node graphs (Houdini, geometry nodes, Substance, Cavalry, Rive) | **Mature** | Market standard in professional studios |
| Designers using AI to write code | **Mature** | 76% have used, 50% shipped to production (AI in Design Report 2026) — above the 50% cut for the target audience. **Discarded as a disruption** |
| Image and video generation as finished media | **Mature** for this audience + out of cut (neighbouring theme) | Discarded |
| 3D capture / gaussian splatting | **Emerging**, but out of cut (neighbouring theme) and it is data, not rule | Discarded |
| LLMs writing procedural graphics code | **Emerging → disruptive** | Viability demonstrated and measured (3DCodeBench, June 2026); has not scaled; breaks the asset production chain. **Accepted as root 4.1** |
| Node graph synthesis (multimodal) | **Emerging → disruptive** | MultiMat (ICLR 2026); breaks the expertise moat of proprietary tools. **Accepted as root 4.2** |
| MCP / agentic protocol in DCC tools | **Emerging** | Houdini 22, declared a preview by the vendor itself. Enters as a mechanism inside 4.2, not as a root of its own |
| The rule as transport and delivery format | **Disruptive** (mature mechanism, rupturing effect) | The procedural as a format is old; what is new is the economic contest with heavy neural media and the split legal status. **Accepted as root 4.3** |
| Model-driven generation at run time | **Emerging, probably stillborn within the horizon** | Latency, cost per session, irreproducibility. Enters inverted, as `e9` |
| Infinigen and procedural corpora | **Mature as a tool, emerging as training data** | Enters as a mechanism in `e2.1` |
| WebGPU / WASM procedural engines (Graphite and similar) | **Emerging** | Does not support an effect on its own; appears as the technical condition of wildcard 1 |

Triage confirmation: the skill asks for user confirmation before proceeding. With no interlocutor, the triage was recorded in writing and assumed. The point where disagreement is most likely is the classification of "designers using AI to write code" as mature — a call that removes from the map the most popular narrative about this theme, and one open to challenge.

### 12.3. Fase 5 — adversarial round, item by item

The four destructive tests applied to every derived effect. Below, only those that did not pass clean.

**Discarded (3)**

| Candidate | Failing test | Note |
|---|---|---|
| "By 2031 the mesh asset store ceases to exist" | Accelerated adoption | No historical precedent for a mature format disappearing in five years; formats coexist for decades. Replaced by `e1.2`, which speaks of a shift in what is sold, not extinction |
| "The AI procedural generation market will reach US$ X billion by 2030" | Number with no source | Discarded before being written. No opened source carries a market projection for this cut; a round, plausible figure is the classic signal of statistical hallucination. **No market figure appears in this document** |
| "Procedural aesthetics comes back to dominate" | Loose cause + theme-statement bias | The question comes from the theme statement and is the most seductive of the set. Removing the root (AI writing the generator), the effect could still occur through visual fashion, production cost or aesthetic cycle. It does not derive from the root. Excluded from the wheel and discussed in section 7 |

**Reconnected (2)**

| Candidate | Test | Destination |
|---|---|---|
| "Design schools stop teaching software and start teaching systems" | Loose cause | Would happen anyway through general AI adoption (76% of designers), without needing this root. Reconnected as `e3.1.1` and `e4.1.1`, with narrow, nameable mechanisms — code reading as criticism; the portfolio as a variation space |
| "Small studios compete on equal terms with large ones" | Loose cause + linear extrapolation | A claim that reappears with every wave of tool automation and rarely materialises as stated. Reconnected as `e7.1` (the specific TD bottleneck) with child `e7.1.1` describing **migration** of the scale advantage, not its disappearance |

**Kept with reservations, after rewriting (3)**

| Original candidate | Test | How it ended up |
|---|---|---|
| "AI-generated procedural beats the splat on the web" | Linear extrapolation + user bias | Rewritten as `e8`: the choice becomes an explicit decision with declared cost, with no winner. The original wording embedded the conclusion the map was supposed to test |
| "Every designer becomes a programmer" | Bias + already mature | Demoted from effect to context in section 3, with the figure that supports it and that, for that very reason, disqualifies it as news |
| "Games begin generating content by AI in real time" | Accelerated adoption | Inverted into `e9`: generation migrates to build time. This is what reported practice actually describes, and the opposite of the dominant narrative |

**Adversarial round summary:** 3 effects discarded, 2 reconnected to another root, 3 rewritten and kept with reservations, and 1 entire candidate disruption discarded in Phase 2 for maturity. The skill asks whether the user wants any disruption re-run; with no interlocutor, I record which one I would re-run: **4.3**, the one with the weakest empirical support — it rests on an economic argument, a practice report and a court decision from another jurisdiction, with no measurement. It is also the one the experiment in section 10 attacks directly.

### 12.4. Searches performed, and what failed

Queries executed (WebSearch): LLM generating procedural 3D as code / program synthesis for graphics; LLM shader generation and Shadertoy benchmark; 3DCodeBench and success rates; gaussian splatting versus procedural mesh in weight and web performance; Houdini SideFX AI assistant and geometry nodes with LLM; copyright of code and generative art in 2026; img2threejs; Infinigen; MultiMat and Substance Designer; creative coding and teaching in Brazil; game engines generating code at run time; Graphite; surveys of AI adoption among designers; Agentic PCG; *Thaler v. Perlmutter*.

Retrieval failures recorded:
- The PDF at `arxiv.org/pdf/2606.18481` returned unreadable binary content; worked around via the abstract page.
- `congress.gov/crs-product/LSB10922` and the Finnegan page on *Thaler* returned HTTP 403.
- `scotusblog.com/cases/thaler-v-perlmutter/` exceeded the 60 s timeout.
- No opened source carries a measured byte comparison between procedural 3D and gaussian splatting — the "thousand times lighter" ratio present in the theme statement was **not confirmed** and therefore does not appear in the body of the map.

Leads identified in search results and **not opened** — recorded here for whoever continues the work, supporting no claim in this document: 3D-GPT (arXiv 2310.12945); Proc3D and the procedural compact graph (arXiv 2601.12234); BlenderRAG (arXiv 2605.00632); ShapeAssembly and ShapeCoder; AutoUE, 3D game generation in Unreal via a multi-agent system (arXiv 2603.07106); Agentic PCG; zero-shot 3D map generation with a dual-agent architecture (arXiv 2512.10501); WebSplatter, gaussian splatting in the browser via WebGPU (arXiv 2602.03207); ParamExplorer, parameter exploration in generative art (arXiv 2512.16529); the Graphite repository and site; ShaderToy-MCP; the Infinigen repository; ShadAR.

### 12.5. Abandoned paths

- **A fourth trunk on teaching.** It was sketched — "design teaching becomes systems teaching" as a root of its own. It failed the same loose-cause test that felled the equivalent effect: it is a consequence, not a root, and besides it follows from general AI adoption rather than from this cut. It survives distributed across `e3.1.1` and `e4.1.1`.
- **A trunk on environmental cost.** The permacomputing lead (L5) suggested a root on the sustainability of the procedural against the neural. There was not enough opened evidence to derive three orders without inventing a mechanism; it became a weak signal in section 6, which is the honest place for a strong lead with thin backing.
- **Quantifying the weight ratio between program and capture.** Attempted through two search routes, without success — no opened source measures it. Rather than estimate, the gap became the first measure of the experiment in section 10. It is the most consequential design decision in this map: where a number was missing, a test went in, not a guess.
