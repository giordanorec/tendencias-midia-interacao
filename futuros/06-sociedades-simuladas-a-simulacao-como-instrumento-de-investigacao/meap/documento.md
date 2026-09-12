---
tema: "Sociedades simuladas: a simulacao como instrumento de investigacao"
slug: sociedades-simuladas-a-simulacao-como-instrumento-de-investigacao
autor_login: meap
zona_de_interesse: Simulacao e mundos
data: 2026-09-11
horizonte: 2031
publico: quem projeta midia e interacao
recorte_geografico: global, com nota sobre o Brasil
disrupcoes_raiz: 3
efeitos_ordem_1: 9
efeitos_ordem_2: 10
efeitos_ordem_3: 7
tecnologias_citadas: [modelagem baseada em agentes classica (NetLogo, regras fixas), agentes generativos com memoria e reflexao, simulacao social em escala de populacao (10^3 a 10^6 agentes), gemeos digitais fundados em entrevista, respondente sintetico comercial, Game Master como ambiente programavel (Concordia), auditoria de risco sistemico de recomendador (DSA), inferencia local no navegador, principios PIMMUR e auditoria de robustez]
fontes: 13
confianca: media
experimento: "\"O mesmo mundo, dois ambientes\" — 30 agentes num feed, duas regras de recomendacao (cronologica e por engajamento) cruzadas com tres redacoes de persona e tres sementes, 18 rodadas, para medir se o efeito da regra do ambiente e maior que o efeito da redacao do prompt"
skill_usada: futurization-meap
publico_ok: false
---

## 1. Resumo

Putting a society of language-model agents in a controlled environment, running possibilities and
watching what emerges has stopped being a demo and become an offering: there is a library
maintained by an industrial lab, an open platform declaring support for up to one million agents,
and subscription products selling synthetic respondents from US$ 39 a month. What sustains the
promise — test the platform before launching it, the policy before applying it — is also what
threatens it: in 2026 the validation literature turned against the field. An audit of 576 studies
found 91.1% violating at least one minimum validity principle, and the collective phenomena those
studies reported "vanish or reverse" once the principles are enforced; a separate audit found a
76-percentage-point gap in cooperation rates between two phrasings of the same persona. This map
bets that the real disruption from 2026 to 2031 is not simulation becoming good enough to replace
people. It is simulation becoming cheap enough to enter the decision flow before it becomes
trustworthy. The consequence that organizes the wheel is a displacement of the object of dispute:
when two parties disagree, they will no longer disagree about the data — they will disagree about
the environment. Whoever configured the world has already won the conclusion.

## 2. O tema

A simulated society, here, means a set of agents driven by a language model — with persistent
memory, personality and natural-language conversation among them — placed in a configurable
environment that produces analysable records. The point is not the agent: it is the environment
and the data. The object is social simulation **as method**, not as game (autonomous characters in
games are another theme), not as productivity (agents that work are another theme), not as market
(agents with a wallet are another theme).

It matters to media and interaction for one specific reason: what actually gets simulated is almost
always an **interface**. The experiments the field keeps repeating are feed, recommendation, rumour
propagation, polarization, deliberation — that is, exactly the design decisions that today get
validated *after* launch, on real users, by A/B test. If simulation moves in before, it changes
where evidence sits in the workflow of whoever designs the thing. And it changes who decides: the
A/B test belongs to whoever has traffic; the simulation belongs to whoever has the environment.

It deserves a future map because the cost curve and the reliability curve are moving at different
speeds, in directions that do not help each other. Cost falls per run. Reliability depends on
methodological discipline, which does not get cheaper. When a tool becomes cheap before it becomes
good, what scales is usage — not validity.

## 3. Onde isso está hoje

**The founding experiment is from 2023 and closed on what it promised.** Park, O'Brien, Cai,
Morris, Liang and Bernstein put twenty-five agents in a sandbox inspired by *The Sims*, with a
three-part architecture: a complete natural-language record of the agent's experience, periodic
synthesis of those memories into higher-level reflections, and dynamic retrieval to plan behaviour.
The demonstration that became a universal citation: from a single user-specified seed (one agent
wants to throw a Valentine's Day party), the agents autonomously spread invitations over two days,
made new acquaintances, asked each other out to the party, and coordinated to show up together. The
evaluation attributes believability to each of the three parts separately — observation, planning,
reflection (arXiv:2304.03442).

**Scale is no longer the frontier.** OASIS is an open social-media simulator declaring support for
up to one million agents, mimicking the structure of X and Reddit, with 23 available actions
(follow, comment, repost, search, mute). The repository publishes cost per timestep for one hundred
agents — ¥0.026848 with Qwen-plus, ¥0.717 with Qwen-max — and warns that token usage scales
linearly with agent count, activation probability and number of timesteps. AgentSociety, from
another group, reports over ten thousand agents and roughly five million interactions, and presents
itself as a testbed for computational social experiments across five issues: polarization, spread
of inflammatory messages, effects of universal basic income, external shocks (hurricanes) and urban
sustainability (arXiv:2502.08691). Google DeepMind maintains Concordia, a generative agent-based
modelling library whose central pattern is a **Game Master**: a separate entity that simulates the
environment, receives the action declared in natural language and translates it into an outcome,
checking plausibility. Its listed applications include social science, AI safety and ethics,
economics, and "performance evaluation of real services through simulated usage" — the README
carries the notice that this is not an officially supported Google product.

**The digital twin of a real person has already been measured.** The work by Park and ten co-authors
built agents from two-hour semi-structured interviews with 1,052 Americans from a diverse national
sample. On held-out General Social Survey items, the combined approach reached 86% of the
participants' own two-week test-retest consistency; interview-only reached 83%, survey-only 82%.
The authors record that the gain from combining sources was modest, and that predictive benefit
from data begins to asymptote once the model has seen enough evidence within a domain
(arXiv:2411.10109).

**The market already sells, and already defends itself.** There is a "synthetic user" product
category with subscription pricing — Delve AI from US$ 39 a month with usage credits; platforms
delivering think-aloud feedback, transcripts, heatmaps and WCAG checks; another running market
surveys with delivery within a week. The category's declared position is that of complement:
"not replacements for human-centric research, but powerful complements." That sentence is
material: the vendor is building the defence before the accusation.

**And the critique became literature with numbers.** This is the most important fact about the
present. The audit of the PIMMUR principles — Profile, Interaction, Memory, Minimal-Control,
Unawareness of the hypothesis, and Realism — found **91.1% of 576 audited studies violating at
least one principle**; reproducing five representative experiments with the principles enforced,
the reported collective phenomena vanish or reverse: agents infected by fake news fall from
56.11±32.16% to 32.78±18.17%; balanced states under social balance theory fall from 60.7±1.93% to
34.4±1.88%; the herd effect largely disappears (arXiv:2509.18052). In parallel, a robustness audit
showed a 76-percentage-point gap in prisoner's-dilemma cooperation rates between two persona
formats with the **same semantic content**, and uneven sensitivity across models: the same
perturbation opened a ~77-point gap in Claude, ~36 in Gemini and ~1 in DeepSeek (arXiv:2605.18890).
On the synthetic respondent itself, a study of "silicon samples" identifies two structural failures
— structural inconsistency (accuracy does not hold across levels of demographic aggregation) and
homogenization (under-representation of minority opinion), with "severe homogenization" relative to
human data (arXiv:2507.02919). Two position papers close the picture: one demands an explicit
**boundary** for where simulation can and cannot be applied (arXiv:2506.19806); the other argues
that role-playing plausibility does not imply behavioural validity, and that collective outcomes
are shaped by agent–environment co-dynamics — institutional rules, exposure mechanisms, information
asymmetries — typically under-specified and hidden inside the prompt (arXiv:2603.00113).

**Brazil has one measured case, and it is sober.** Gudiño, Grandi and Hidalgo (*Philosophical
Transactions A*, 2024) trained digital twins with 267 volunteers and 8,719 pairwise comparisons
over 67 proposals extracted from the government programmes of the two main candidates in the 2022
presidential election, via the Brazucracia platform. Best held-out choice-prediction accuracy was
76.68% ± 0.0014 (LLaMA-2), above a baseline bundle rule assuming citizens always pick their
preferred party's proposal. The authors record demographic bias — higher accuracy for more liberal
and more educated participants — sensitivity to option ordering, and poor explainability, and
conclude the models are **not ready** for deployment in fully fledged augmented democracy systems.

**On the regulatory side the door is open and the method is empty.** Under the Digital Services
Act, very large platforms must identify, analyse and mitigate systemic risk arising from service
design, including the recommender, and mitigation measures include testing and adapting the
recommender. The Knight-Georgetown Institute's reading of the first round is that the assessments
lack specificity about data, metrics and methods, and brought no new information about risk or
about mitigation effectiveness; the institute asks that assessments consider product-team goals and
aggregated design-experimentation results — that is, what does not happen systematically today.
Nothing in that text requires pre-deployment testing.

## 4. As disrupções-raiz

### Maturity triage (Phase 2, recorded before choosing)

| Technology | Classification | Rationale and rejection test |
|---|---|---|
| Classical agent-based modelling (fixed rules, NetLogo, Schelling) | **Mature** | Standard in computational social science for decades; works without surprise for those who use it. I cannot name what it breaks right now. **Rejected as a root** — enters as context. |
| Social platforms and recommenders | **Mature** | Present in far more than 50% of the target audience's services. Context, not root. |
| Generative agents with memory, reflection and planning | **Emerging**, and **disruptive** in effect | Viability demonstrated since 2023 and open-sourced; has not scaled as an accepted method. Breaks where evidence sits in the design flow. |
| Population-scale social simulation (10^3–10^6 agents) | **Emerging** | Exists, open, with published cost. What is missing is the validity trigger, not the scale trigger. |
| Digital twin grounded in a real person's interview | **Emerging** and **disruptive** | Published measurement (86% of test-retest). Breaks the value chain of the panel and the paid respondent. |
| Commercial synthetic respondent (subscription product) | **Emerging with commercial traction** | Has price, customers and a category in a consultancy report — but the vendor itself denies substitution. Does not meet the ruler of "common in mass-market product". |
| Local / in-browser inference to run the world without a network | **Emerging**, enabling | Not a root: it changes the cost of roots 1 and 3 rather than creating its own value chain. Handled in section 6. |
| Systemic-risk assessment of recommenders (DSA) | **Mature as obligation, empty as method** | The obligation exists since 2023; the practice of sustaining it with simulation does not. The gap is the root, not the law. |

**Explicitly discarded:** classical agent-based modelling. Reason: mature for more than three
decades. It breaks nothing today — what breaks is the language-model agent, because it replaces the
rule written by the researcher with behaviour inherited from a corpus, and that is what swaps the
object of audit (before, one audited the rule; now one audits the prompt, the seed and the model
version).

### 4.1. O ensaio antes do lançamento: a coorte sintética entra no fluxo de produto

**What it breaks.** The monopoly of real-user testing — A/B test, usability test, panel — over the
internal evidence that authorizes a launch. Today the question "does this work?" only has an answer
after exposing people. The synthetic cohort offers an answer earlier, cheaper and repeatable, and
therefore occupies the most contested moment in the workflow: the point where it is decided whether
the prototype advances.

**Why now.** Three things moved together. Published, linear cost: OASIS documents fractions of a
yuan per timestep for one hundred agents. The environment as a separate, programmable piece:
Concordia's Game Master makes the world — not just the agent — an object that is specified,
versioned and swapped. And a ready commercial category, with subscription pricing and presence in a
consultancy report, which makes the spend pass through a tooling budget rather than a research
project.

**What is still missing.** A shared criterion for when the result counts. The literature has already
shown the answer moves 76 percentage points because of persona phrasing, and that 91.1% of audited
studies violated at least one validity principle. Without a declared boundary — and there is work
asking for exactly that — each team sets its own, and "it passed the rehearsal" means nothing
outside the team that ran it.

### 4.2. O respondente sintético fundado em pessoa real

**What it breaks.** The value chain of research with people: the paid respondent, the panel, the
focus group, the institute that sells samples. If a two-hour interview produces an agent that
reaches 86% of the person's own two-week consistency, the expensive input stops being the
collection round and becomes the interview — which, unlike the round, is **reusable**. That shifts
the asset: value moves from access to the person to possession of their portrait.

**Why now.** Because the number exists and is public, and because the self-report-grounded
architecture reduces accuracy disparities across racial and ideological groups relative to agents
built from demographic descriptions alone. The second point is what opens the institutional door:
without it, the bias objection alone would be enough to block adoption.

**What is still missing.** Contract and proof. Missing is the legal instrument treating the
interview as a revocable licence, and missing is a verifiable technique for deactivating the derived
agent. And homogenization remains unsolved: available evidence points to severe under-representation
of minority opinion and accuracy that does not hold across levels of demographic aggregation. A
portrait that is good in the majority and caricatural at the edge does not replace a sample — at
best it complements it where sampling was already easy.

### 4.3. A simulação como prova em decisão pública

**What it breaks.** The epistemic chain of who has authority to assert that a platform or a policy
is risky. Today that assertion rests on observational data only the platform holds, and the
counter-argument is weak for lack of access. A simulation result is presentable by any party — and
that is why it breaks the chain: it does not depend on access, it depends on an environment.

**Why now.** There is obligation without method. The DSA requires assessing and mitigating systemic
risk from recommender design and lists testing and adapting the recommender among mitigations; the
independent reading of the first round is that specificity of data, metrics and methods was missing,
and that no new information about effectiveness emerged. An obligation empty of method is a vacuum,
and simulation is the only candidate producing a "test result" without requiring the regulator to
gain access to the live system.

**What is still missing.** Admissibility. Missing is someone — court, agency, accredited auditor —
deciding that a simulation result counts as evidence, and under what reproducibility conditions.
The Brazilian case is the useful counter-example and the thermometer: with 267 volunteers, 8,719
comparisons and 76.68% accuracy, the authors themselves conclude it is not ready for use in an
augmented democracy system. The honesty of that "not ready" is what does not yet exist on the
selling side.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O ensaio antes do lancamento — a coorte sintetica entra no fluxo de produto
    efeitos:
      - id: e1
        ordem: 1
        efeito: Equipes de produto passam a rodar uma coorte sintetica contra o prototipo antes de expor usuario real, porque a rodada custa menos que um teste com painel
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O ensaio vira artefato de entrega — um relatorio anexado ao pedido de lancamento — e o teste A/B perde o monopolio da evidencia interna
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Aparece a funcao de quem especifica o ambiente e nao o agente, e o curriculo de design de interacao passa a ensinar desenho de experimento e calibracao em vez de so metodo qualitativo
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Como a coorte sintetica e retrospectiva por construcao, ela reprova com mais confiabilidade do que aprova, e as equipes passam a usa-la como filtro de descarte em vez de decisor
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O repertorio de design se estreita porque recursos sem precedente no corpus reprovam no ensaio e morrem antes do prototipo, empurrando o produto para variacoes do que ja existe
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O ambiente — grafo social, log de exposicao, calendario de uso — e nao o agente, passa a ser o ativo disputado da simulacao
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Plataformas com log proprio entrincheiram vantagem porque simulam contra o mundo medido, enquanto o entrante simula contra um mundo suposto
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Surge mercado de ambiente sintetico licenciado, e com ele a pergunta sem resposta pronta sobre de qual plataforma real o grafo foi derivado
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A categoria comercial de simulador de produto se consolida com preco de assinatura e se vende explicitamente como complemento, nao substituto, da pesquisa com pessoas
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O complemento vira o padrao silencioso, e o estudo com pessoa real fica reservado a decisao de investimento alto, publico regulado ou mercado desconhecido
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A pesquisa com usuario se bifurca em duas profissoes — quem opera coorte sintetica em escala e quem faz campo caro e demorado — e o meio, o survey de rotina, e o que desaparece
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: O respondente sintetico fundado em pessoa real
    efeitos:
      - id: e4
        ordem: 1
        efeito: A entrevista qualitativa passa a ser coletada para virar agente reutilizavel, e nao para virar relatorio de um projeto
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Aparece um mercado de licenciamento do proprio retrato, em que a pessoa cede a entrevista e e remunerada por rodada em que seu gemeo responde
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O consentimento em pesquisa vira contrato de uso continuado com direito de revogacao, e revogar exige provar a desativacao do agente derivado, exigencia para a qual nao existe tecnica verificavel pronta
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Institutos de pesquisa migram de vender amostra para vender calibracao, porque o ativo escasso passa a ser a prova de que o sintetico bate com o humano naquele dominio
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A pesquisa publicada passa a declarar a fracao sintetica do resultado como hoje declara margem de erro, sob pressao de cliente e de imprensa
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: No Brasil a exigencia aparece primeiro na pesquisa eleitoral, porque e o unico levantamento cuja metodologia ja e obrigatoriamente registrada antes da divulgacao
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Como o agente comprime a opiniao minoritaria, o retrato sintetico fica utilizavel na maioria e caricatural na borda da distribuicao
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Produto desenhado sobre coorte sintetica erra de forma sistematica e nao aleatoria no usuario de borda, e o erro so aparece depois do lancamento, quando ja e caro
            sinal: medio
            prazo: 2029
            confianca: media

  - disrupcao: A simulacao como prova em decisao publica
    efeitos:
      - id: e7
        ordem: 1
        efeito: Resultado de simulacao entra na avaliacao de risco sistemico como evidencia apresentavel, porque a obrigacao de testar o recomendador existe e o metodo exigido nao
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Nasce a auditoria do simulador — semente, prompt, versao de modelo, especificacao do ambiente — como especialidade separada da auditoria da plataforma
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A versao do modelo passa a ser arquivada e versionada como lote rastreavel, porque sem ela o resultado nao e reproduzivel e, nao sendo reproduzivel, nao e admissivel
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: A disputa publica muda de objeto porque, em vez de discordar do dado, as partes passam a discordar do ambiente em que o dado foi gerado
        sinal: forte
        prazo: 2030
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Aparece a proposta de ambiente de referencia publico — uma populacao sintetica oficial, calibrada e versionada — e com ela a disputa sobre quem a calibra
            sinal: medio
            prazo: 2031
            confianca: baixa
      - id: e9
        ordem: 1
        efeito: O custo baixo por rodada arma o contraditorio porque pesquisador e organizacao civil rodam a contraprova e contestam o relatorio da propria plataforma
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Diante da contraprova barata, a plataforma passa a publicar menos detalhe do ambiente usado, tornando o relatorio mais opaco do que era antes de haver simulacao
            sinal: medio
            prazo: 2030
            confianca: media
```

**What the YAML cannot say.** Three things.

First, **e2 is the axis of this map, not e1**. The wheel looks like it is about agents; it is about
environments. What sustains that is not opinion: the position paper arguing against the enthusiasm
shows that collective outcomes are shaped by agent–environment co-dynamics — institutional rules,
exposure mechanisms, information asymmetries — and that these sit under-specified, hidden in the
prompt. If the environment decides, then power in the chain goes to whoever holds the *measured*
environment; and whoever holds the exposure log of a real platform is the platform itself. The
democratizing promise of cheap simulation coexists with a concentration: anyone can run one, few
can run one against the right world.

Second, **e1.2 and e6 are the same defect seen from two sides**. The synthetic cohort is
retrospective by construction — it knows what already exists. That makes it better at rejecting
than at approving (e1.2), and better in the majority than at the edge (e6). The combined effect is
conservative: it narrows the repertoire (e1.2.1) and errs systematically rather than randomly
(e6.1). Systematic error is worse than large error, because it does not cancel out with more runs —
and more runs is precisely what becomes cheap.

Third, **e9 and e9.1 partially cancel each other, and that is deliberate**. Cheap simulation
strengthens the counter-argument; a cheap counter-argument gives the platform an incentive to hide
the environment. The net result is not settled within the horizon, and it depends on something
outside the technology: whether anyone makes the environment specification mandatorily public. I
left the pair in the map rather than picking a winner, because picking one would be pretending I
know.

What is **not** in the wheel, and should be said: no effect here depends on the agent becoming more
human-like. All of them depend on cost, on environment, and on a rule of admissibility. If the 2031
model is far better than the 2026 one, the wheel does not change shape — it changes tempo.

## 6. Sinais fracos e wildcards

**The simulation that runs in the browser, without a network.** While the declared frontier is a
million agents in the cloud, the signal that changes the map is the village that runs entirely on
the machine of whoever opens it. If the run never touches an API, it has no marginal cost, no vendor
log and no shared environment — three things that, together, make simulation personal and
irreproducible at the same time. That cuts against e9 (counter-proof for anyone) and e7.1.1
(auditability) in opposite directions.

**The vendor's pre-emptive defence as an early signal.** The sentence "not a replacement for human
research, a complement" appears in sales material before any accusation. A vendor building a
defence before the accusation is forecasting the accusation. It is a signal that the market itself
expects the substitution scandal — and that the line between complement and substitute will be
fought in contracts, not in technique.

**The interview as a balance-sheet asset.** If the interview-grounded twin works, the interview
stops being a project cost and becomes an amortizable asset. The weak signal to watch is
accounting, not technical: the first institute that books its interview archive as an intangible
will have changed the sector's business model without announcing anything.

**The Game Master as a job title.** Concordia has already separated the entity that simulates the
world from the entities that act in it. If that separation becomes an org chart — one person
accountable for the environment, another for the agents — then the dispute in e8 (disagreeing about
the environment) acquires a nameable owner, and naming an owner is what turns a technical
controversy into an institutional one.

**Wildcard 1 — the result that gets used and is wrong.** A simulation result underwrites a public
decision with visible consequences (a moderation rule, the design of a social benefit), and is later
shown to be a methodological artifact: the PIMMUR audit numbers — 91.1% of 576 studies violating at
least one principle, phenomena that reverse once principles are enforced — say the odds of this are
not small. The second-order effect of the wildcard is worse than the first: the reaction would not
be to improve the method, it would be to ban simulation as evidence, including where it worked.

**Wildcard 2 — the burden inverts.** A court accepts that the **absence** of a simulated rehearsal
constitutes design negligence. On that day simulation stops being a competitive advantage and
becomes a defensive requirement, and all of e1 happens at once, without validity having improved.
This is the scenario where the map accelerates for the wrong reason.

**Wildcard 3 — the refusal of the portrayed.** An organized movement to revoke consent makes e4.1.1
urgent before the technique exists: thousands of people demanding proof that the agents derived from
their interviews were deactivated, and nobody able to provide it.

## 7. Contra o próprio mapa

**The map may be underestimating the inertia of the product flow.** e1 assumes a cheap tool enters
the flow because it is cheap. That is not how testing enters a product process: it enters when
someone is held accountable for not having done it. The A/B test took more than a decade to become
standard in companies that already had traffic and instrumentation. If e1 is wrong about tempo,
everything downstream slips — and 2027 is the most fragile date in the wheel.

**The map inherits the bias of whoever commissioned it.** The cut is "whoever designs media and
interaction", and that tilts the wheel toward product: three of the nine first-order effects are
about design workflow. A map commissioned by a research institute would weight e5 and e6 more
heavily; one commissioned by a regulator would weight e7 and e8. I did not correct the tilt because
the audience was declared — but it is here.

**e8 is the effect I like most, and therefore the one I trust least.** "The dispute changes object:
one disagrees about the environment, not the data" is elegant, it looks like a finding, and that is
why it left the bias test flagged for review. The course's own second-order question — who validates
that the synthetic society resembles the real one — already pointed there. An effect that confirms
the asker's hypothesis deserves extra suspicion, not less.

**The map assumes the methodological critique is a containing force, and it may be ornament.** I
counted on PIMMUR and on the robustness audits as if publishing the critique were enough to restrain
use. It is not. The history of other decision tools — from psychometric testing to credit scoring —
is one of methods criticized in the literature and used in practice for decades. It is entirely
possible that 2031 arrives with the critique well established, cited in every paper's introduction,
and absolutely no effect on whoever runs the simulation to decide.

**The map has no effect in which simulation simply fails and the field withers.** That is an
omission, not a finding. The hypothesis "around 2029 the method proves irrecoverable for causal
inference, the literature converges on 'only good for generating hypotheses', and the commercial
category shrinks to a brainstorming tool" is compatible with all the evidence I gathered, and it
received no branch in the wheel. The reason is honest and bad: a futures wheel derives consequences
from a disruption, and a method that does not take hold generates no interesting consequences. The
format has continuity bias built in.

**The Brazilian cut is thin.** I have one measured case (267 volunteers, 2022) and one inference
about registered electoral polling (e5.1.1). I have nothing on the use of simulation by Brazilian
public bodies, nothing on the ANPD, and nothing on the local research market. e5.1.1 is the most
speculative bet in the map and is marked as such.

## 8. O que a máquina errou

**Error 1 — the title and the number of the theme's most-cited work, wrong in my own search
memory.** The search summary handed me "Generative Agent Simulations of 1,000 People" and "85% of
test-retest consistency". On opening arXiv:2411.10109, the work is at version 3 (revised June 2026)
under a different title — "LLM Agents Grounded in Self-Reports Enable General-Purpose Simulation of
Individuals" — and the combined-approach figure is **86%**, with 83% for interview-only and 82% for
survey-only. I recorded both in the document: the 2024 title is what circulates, the current figure
is what counts. Had I cited only the snippet, I would have published the title of an old version as
current — exactly the "obsolete source presented as current" pattern from my DUVIDAS.md.

**Error 2 — a number attributed to a paper that does not contain it.** The search summary claimed
that "six LLMs flagged 50.6% of existing experimental instructions as containing excessive
steering", and tied it to the robustness-audit paper. I opened arXiv:2605.18890: the figure is
**not there**. What is there is something else, and better: a 76-percentage-point gap in cooperation
between semantically equivalent persona formats, and uneven sensitivity across model families (~77
points in Claude, ~36 in Gemini, ~1 in DeepSeek). I discarded the 50.6% — a plausible, round number
without a verified source is case 4 of my DUVIDAS.md.

**Error 3 — OASIS action count divergent between two readings.** The first search said 21 actions;
reading the repository says 23. I went with 23, because that is what is in the source I opened. The
lesson is that search summaries and sources diverge on numeric detail more often than the summary's
confidence suggests.

**Error 4 — maturity assigned by reputation, corrected in triage.** My first instinct was to
classify "systemic-risk assessment of recommenders" as emerging, because it sounds new. It is a
legal obligation since 2023 — mature as obligation. What is emerging is the practice of sustaining
it with simulation. Had I not separated the two, I would have built a root disruption on top of a
law that already exists, and the Phase 2 rejection test ("if you cannot say what it breaks right
now, it is mature") would have failed the whole root later.

**Error 5 — rushing to state that Concordia v2.0 had shipped.** The search summary carried news of a
2.0 release announced by a third-party foundation. The README I opened makes no mention of version
2.0 — it mentions that this is not an officially supported Google product. I left out of the
document what I could not confirm in the primary source.

**Error 6 — two sources I wanted and could not open, and therefore did not cite.** A critical review
of validation in generative agent-based modelling (Springer, *Artificial Intelligence Review*) and a
*Scientific Reports* article on persona-prompted agents predicting social-media reactions: both
blocked at authentication. The snippet for the second promised "modest but genuine", which is
exactly the nuance my map lacks. I cited neither, and I say here that the map is more pessimistic
than it would be had I read what I could not open.

## 9. Três cenários para 2031

### 9.1. Provável

The synthetic cohort entered the flow and never became an obligation. By 2031, virtually every
mid-sized-and-up product team runs a simulated round before exposing a prototype to users, and the
report from that round is an expected attachment to the launch request — but no regulator required
it, and no court demanded it. Usage settled where the tool is honest: rejecting bad options. Nobody
who works with it trusts it to pick the good one. Research with people did not disappear; it shrank
in the middle. The two ends survived — synthetic-cohort operations at scale, and expensive
fieldwork for large decisions — and routine survey work is what died. Surviving institutes moved to
selling calibration: they charge to prove the synthetic matches the human in that domain, and the
calibration report is worth more than the sample. The environment confirmed itself as the asset:
whoever holds a real platform log simulates better, and the entrant buys a licensed environment
without quite knowing where the graph came from. On the public side, simulation results began
appearing in systemic-risk assessments as supporting material, never as sole proof, and a
simulator-audit speciality formed — small, extremely expensive and much disputed. The
methodological critique became well established and changed less than expected: it turned into an
obligatory introduction paragraph and a footnote caveat in commercial reports.

### 9.2. Desejável

What consolidated was not simulation — it was the requirement to declare the environment. By 2031 no
simulated result circulates without its specification: seed, model version archived as a traceable
batch, full prompt text, exposure rule, and the hypothesis registered before the run. This turned
out expensive and was worth it: it made counter-proof possible, and cheap counter-proof shifted the
balance. Civil society organizations and university labs began re-running the platforms' rounds and
publishing where a result does not survive a change of persona phrasing — and "it did not survive
the perturbation" became a sentence that costs reputation. Research with people gained rather than
lost: because simulation is acknowledged to be blind at the edge of the distribution, fieldwork
budget migrated to exactly where it is blind, and the edge user is now studied more than in 2026,
not less. In Brazil, the obligation to register electoral-polling methodology served as a template:
declaring the synthetic fraction became practice before it became law. And consent evolved: whoever
gives an interview licenses a portrait with an expiry date, is paid per round, and can revoke — with
verifiable deactivation, which required a new technique and produced it.

### 9.3. Indesejável

Simulation became cheap, entered everything, and never became reliable. By 2031 the synthetic round
precedes every interface decision and has, in practice, replaced studies with people — not by
declared decision, but by friction: the round lands today and fieldwork lands in six weeks. Because
the agent compresses minorities, the product came to be designed for the centre of the distribution,
and the edge — the user with little bandwidth, with a disability, with a repertoire outside the
corpus — was quietly redefined as a non-priority use case, with a number to back it up. On the
public side, the worst happened in the worst order: a simulated result underwrote a decision with
visible consequences, proved to be a methodological artifact, and the reaction was not to demand
rigour — it was to disqualify simulation wholesale, including where it worked, which handed the
platform back its monopoly on evidence about itself. The environment became a trade secret: since
counter-proof was cheap, companies stopped publishing the specification, and the 2031 risk report is
more opaque than the 2026 one — now with a chart. And the portrayed lost: thousands of people whose
interviews became agents discovered that revocation was a clause without a procedure.

## 10. O experimento

**What can be built today, at course scale.** Not a simulated society — a rig that measures whether
the simulated society is measuring anything.

**Name:** *O mesmo mundo, dois ambientes* ("the same world, two environments").

**The question.** In a feed populated by agents, is the effect of the **environment rule** larger
than the effect of the **persona phrasing**? If it is not, no interface-design conclusion drawn from
the simulation holds — because variation in prompt wording would be dominating variation in the
product decision.

**The design.** Thirty agents, one feed, two recommendation rules: pure chronological, and ordering
by engagement. Three phrasings of the same persona — same semantic content, different formulations
(first person, third person, attribute list). Three fixed seeds. Total: 2 × 3 × 3 = **18 runs**, all
logged with seed, model version and full prompt.

**The measure.** One metric only, chosen in advance: the fraction of agents that, after N steps,
reposted content from outside their own initial group (cross-group mixing). One compares the
difference between rules (what we want to measure) against the dispersion across phrasings and
seeds (the noise). The result is a single number: the ratio between the two.

**The decision criterion, fixed before running.** If the difference between the two recommendation
rules is smaller than the dispersion produced by changing the persona phrasing, the experiment
failed in favour of the critique — and that is the finding, not the failure. The literature provides
the benchmark to beat: 76 percentage points of difference from persona format in a prisoner's
dilemma. If the rig reproduces that order of magnitude in a feed, it is locally demonstrated that
the simulator measures the prompt, not the world.

**Cost and feasibility.** The published order of magnitude for social-media simulation is fractions
of a yuan per timestep for one hundred agents with a cheap model. With thirty agents and eighteen
runs, the experiment fits a student budget. Tooling available today: the 2023 generative-agents code
is open; OASIS already implements a feed, a recommender and platform actions; Concordia provides the
pattern of separating the environment (Game Master) from the agents, which is precisely the
separation the experiment needs to manipulate.

**What to hand in.** The signal-to-noise ratio, the 18 runs with their logs, and one paragraph
answering a single question: with this rig, would I sign off on a feed-design recommendation? The
most likely answer is no — and knowing why not is the competence this theme demands.

## 11. Fontes

1. `https://arxiv.org/abs/2304.03442` — Park, O'Brien, Cai, Morris, Liang, Bernstein, *Generative Agents: Interactive Simulacra of Human Behavior* (Apr 2023, rev. Aug 2023). Supports the founding milestone: 25 agents, the memory–reflection–planning architecture, and the Valentine's Day party emerging from a single seed. — **High.** Peer-reviewed (UIST '23), read on the official arXiv abstract page; code open.
2. `https://arxiv.org/abs/2411.10109` — Park and 10 co-authors, *LLM Agents Grounded in Self-Reports Enable General-Purpose Simulation of Individuals* (Nov 2024, v3 Jun 2026). Supports the interview-grounded twin: 1,052 participants, two-hour semi-structured interviews, 86% of two-week test-retest consistency, reduced disparity relative to demographics-only agents, and the authors' own caveat that gains from combining sources were modest. — **High.** Primary source; note the title change between versions (see §8).
3. `https://github.com/camel-ai/oasis` — OASIS, open social-media simulator. Supports the scale (up to one million agents), the 23 actions, the mimicry of X and Reddit, and — most useful — the published cost per timestep for one hundred agents and the linear-scaling warning. — **Medium-high** for what is verifiable in code and docs; **low** for the realism claim, which is the project's own.
4. `https://arxiv.org/abs/2502.08691` — Piao et al., *AgentSociety* (Feb 2025). Supports the social-experiment testbed: over 10,000 agents, ~5 million interactions, five issues (polarization, inflammatory messages, basic income, external shock, urban sustainability). — **Medium.** The abstract presents alignment with real experimental results as a strength and does **not** discuss calibration limits; I read the abstract, not the validation section.
5. `https://github.com/google-deepmind/concordia/blob/main/README.md` — Concordia, Google DeepMind. Supports the **Game Master** pattern: the environment as a separate entity that receives natural-language action and translates it into an outcome, checking plausibility; and the application list, which includes evaluating real services through simulated usage. — **High** for the library design; the README itself warns it is not an officially supported product.
6. `https://arxiv.org/abs/2507.02919` — Li, Li & Qiu, *ChatGPT is not A Man but Das Man: Representativeness and Structural Consistency of Silicon Samples Generated by Large Language Models* (Jun 2025). Supports the two failures of the synthetic respondent: structural inconsistency across levels of demographic aggregation, and homogenization (under-representation of minority opinion), with "severe homogenization" relative to human data. — **High.** Abstract read at source; conclusion is explicitly against direct substitution of survey data.
7. `https://arxiv.org/html/2509.18052` — Zhou et al., *The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies* (Sep 2026, v4). Supports this map's central number: 91.1% of 576 audited studies violate at least one principle; reproducing five experiments with the principles enforced, phenomena vanish or reverse (56.11±32.16% → 32.78±18.17% for fake news; 60.7±1.93% → 34.4±1.88% for social balance; herd effect largely eliminated). — **High** for the numbers read at source; the strength of the conclusion depends on five reproduced experiments representing the body of 576, which is a small sample.
8. `https://arxiv.org/html/2605.18890` — Ye, Cao, Chen & Ferrara, *Stop Drawing Scientific Claims from LLM Social Simulations Without Robustness Audits* (May 2026). Supports sensitivity to irrelevant detail: 76 percentage points of difference in cooperation between semantically equivalent persona formats, and cross-model variation (~77 in Claude, ~36 in Gemini, ~1 in DeepSeek). — **High** for the numbers read; **and useful negatively**: the 50.6% figure search attributed to this paper is not in it (see §8).
9. `https://arxiv.org/pdf/2506.19806` — Wu, Peng, Ito, Onizuka & Xiao, *LLM-Based Social Simulations Require a Boundary* (v3, Jul 2026). Supports the demand for a declared boundary of applicability. — **Medium.** I read the record and document structure; the PDF did not yield full text, so I cite the thesis and no numbers.
10. `https://arxiv.org/html/2603.00113v1` — Li & Tao, *Position: AI Agents Are Not (Yet) a Panacea for Social Simulation* (Feb 2026). Supports the axis of this map: role-playing plausibility does not imply behavioural validity, collective outcomes are shaped by agent–environment co-dynamics (institutional rules, exposure mechanisms, information asymmetries) typically under-specified in prompts; proposes treating the environment as a first-class auditable object. — **Medium-high.** It is a position paper, not a measurement — used as argument, not as evidence.
11. `https://pmc.ncbi.nlm.nih.gov/articles/PMC11776576/` — Gudiño, Grandi & Hidalgo, *Large language models (LLMs) as agents for augmented democracy*, *Philosophical Transactions A*, 2024. Supports the Brazil note: 267 volunteers, 8,719 pairwise comparisons, 67 proposals from the 2022 programmes, 76.68% ± 0.0014 accuracy (LLaMA-2), demographic bias favouring more liberal and more educated participants, sensitivity to option order, and the conclusion that it is not ready for deployment. — **High.** Peer-reviewed, Brazilian data, limitations declared by the authors themselves.
12. `https://kgi.georgetown.edu/research-and-commentary/systemic-risk-assessment-under-the-digital-services-act/` — Knight-Georgetown Institute, analysis of systemic-risk assessments under the DSA. Supports the regulatory gap: assessments lack specificity about data, metrics and methods; the first round brought no new information about risk or mitigation effectiveness; and there is **no** pre-deployment testing requirement. — **Medium-high** as independent specialist reading; it is third-party analysis, not the legal text. For the DSA text itself, this map relies on indirect reading.
13. `https://www.uxia.app/blog/7-top-synthetic-user-testing-platforms-to-watch-in-2026` — survey of synthetic-user platforms (2026). Supports the existence of the commercial category, subscription pricing (Delve AI from US$ 39/month with usage credits), the deliverables (think-aloud feedback, transcripts, heatmaps, WCAG checks) and the declared position of complement rather than substitute. — **Low** as evidence of capability: it is blog content from one of the listed vendors, therefore an interested party. Used only for what is factual and verifiable (existence, price, discourse), never for effectiveness.

## 12. Anexo — o levantamento bruto

**Language decision, declared.** The skill states it operates in English while mandating the literal
Portuguese section titles and frontmatter keys for the CIN0055 pipeline, and its own tested exemplar
(TESTE.md) is written exactly that way: English prose body, Portuguese headings, Portuguese effect
sentences inside the wheel YAML. This document reproduces that pattern rather than translating the
body, on the grounds that the skill does address output language and its exemplar resolves the
ambiguity. Accents are stripped inside the YAML block and in the frontmatter values, also following
the exemplar. The first draft of this document was written with a Portuguese body and was rewritten
on discovering that the decision in force for these rounds (TMI-0042) fixes exactly this shape —
recorded here so the next session does not read the English as an oversight.

**Deviation from the skill, declared.** Phase 1 requires asking eight questions one by one and
waiting for answers; Phase 2 requires asking for confirmation of the triage table; Phase 5 requires
asking whether to re-run any disruption. All three were posed and none was answered, by design: this
round is non-interactive and the standing instruction was to assume and declare rather than block.
So the triage below was not confirmed by a human, and no disruption was re-run.

### Phase 1 — Framing interview, as conducted

The answers were supplied with the round request and are treated as interview answers, not as
assumptions of mine.

| # | Phase 1 question | Answer |
|---|---|---|
| 1 | Exact theme (3 to 7 words) | "Sociedades simuladas: a simulação como instrumento de investigação" — theme 6 of 19; family "Simulação e mundos" |
| 2 | The cut | Technology as a **method of investigation**; cuts across social practice and regulation |
| 3 | Horizon | 2031 |
| 4 | Who for | Whoever designs media and interaction |
| 5 | Geography | Global, with a note on Brazil |
| 6 | Already discarded | Whatever is already common in mass-market product (the course ruler). No other exclusion |
| 7 | Desired bias | Neutral |
| 8 | What is already known / suspected disruption | No suspected disruption — find it. Exclude obvious ideas that would serve any theme. What would change my mind: evidence that adoption has passed the early majority (Rogers), or that the technology breaks nothing |

Additional parameters received: three orders of depth; mode "from an innovation/theme", not from a
sector; real web search, citing only what was opened.

**Recorded as `null` / assumed and declared:** the interlocutor named no specific trusted or
distrusted source; I assumed the hierarchy from my ESTUDO.md — primary source above search summary,
peer-reviewed above pre-print, pre-print above vendor blog. The "past the early majority" criterion
(Rogers) was operationalized through the Phase 2 ruler: presence in more than 50% of the target
audience's devices or services.

### Phase 2 — Technology maturity triage (additions not in the body, unconfirmed)

Beyond the table in §4, the following were classified and **not** promoted:

- **City digital twin / urban traffic simulation** — mature in engineering, and its social part is
  exactly what this theme covers. Generates no separate root.
- **Delphi and expert panels** — mature method (1950s). Interesting as contrast (expert consensus
  versus agent emergence), but it is not the technology of this theme.
- **Classical agent-based modelling** — mature; discarded with justification in the body.
- **Natural-language interface to the simulator** — mature; every platform already offers it.
  Breaks nothing here.
- **Local in-browser inference** — emerging and enabling, but subordinate: it changes the cost of
  the roots, it does not create its own value chain. Moved to §6.

### Phase 5 — Adversarial round, item by item

The four tests were applied to all 26 effects in the wheel (nine first-order, ten second, seven
third), plus seven effects that never reached it.

**Discarded (3):**

1. *"Opinion polling ends; the survey disappears as a method."* — Failed **linear extrapolation**
   and **accelerated adoption**. It is "what already happens, only more": the migration from
   in-person to online panels took two decades and the telephone did not die. No social research
   method has disappeared by technological substitution in five years. Replaced by e3.1.1
   (bifurcation, with the middle shrinking) and e5 (migration from sample to calibration), which are
   smaller and checkable claims.
2. *"Governments start legislating from a digital twin of society."* — Failed **loose cause**.
   Remove the disruption (the language-model agent) and the effect happens anyway: governments
   already model policy with microsimulation over administrative data, which does not depend on
   conversational agents. Reconnected to what remains specific — simulation as a piece
   **presentable by any party**, which is e7 and e9.
3. *"Simulation becomes mandatory, like crash testing for cars."* — Failed **accelerated
   adoption**. Decades separated the first crash-test standard from a global mandate, and the
   parallel requires a certification regime that does not exist here: the independent analysis of
   the DSA's first assessment round says that even data, metrics and methods went unspecified.
   Rewritten as e7 (presentable evidence, not obligation) and relocated to wildcard 2 (burden
   inverted by judicial route), which is the plausible path if it happens.

**Rewritten (2, plus 1 excluded without reconnection):**

4. *"Streaming platforms will offer a feed adapted to the user's simulated emotional state."* — A
   classic **loose cause**, and the same error nº 5 from my DUVIDAS.md: the effect derives from a
   state sensor or from profiling, not from a simulated society. Remove the root and the effect
   happens unchanged. Excluded from the wheel. Not reconnected — it does not belong to this theme.
5. *"Every designer will have their own simulated village running in the browser."* — **Accelerated
   adoption** plus enthusiasm bias. Rewritten and demoted: the defensible part (cost per run falls
   enough for simulation to be personal and network-free) went to §6 as a weak signal, not as a
   dated effect.

**Kept with reservations (4):**

6. **e8** (the dispute changes object: one disagrees about the environment) — flagged **review**
   for **user bias**: it directly confirms the second-order question the theme statement itself
   raises ("who validates that the synthetic society resembles the real one?"). Kept because it has
   independent support in the position literature (environment as a first-class auditable object),
   but confessed in §7 as the effect I most distrust.
7. **e1** (the synthetic cohort enters the flow before the real user) — flagged **suspect** for
   **accelerated adoption** in its date. The 2027 date was kept because the commercial category
   already has pricing and customers, but recorded in §7 as the most fragile date in the wheel.
8. **e5.1.1** (declaring the synthetic fraction appears first in Brazilian electoral polling) —
   flagged **suspect** as an institutional inference with no source supporting it. Kept because it
   is falsifiable and dated, and declared in §7 as the most speculative bet in the map.
9. **e3** (the commercial category consolidates while selling itself as a complement) — flagged
   **suspect** for **linear extrapolation**: it is literally "what already happens, only more".
   Kept because the interesting part is not the consolidation, it is the vendor's **pre-emptive
   defence**, which became a weak signal in §6.

**Summary of the adversarial round:** 3 discarded, 2 rewritten (plus 1 excluded without
reconnection), 4 kept with reservations, 19 kept without reservation. No third-order effect was kept
with `confianca` above `baixa`.

**"Do you want to re-run any disruption?"** — the mandatory Phase 5 question. No interlocutor this
round; I assumed **no**, and declare the choice. The natural candidate for a re-run would be 4.3
(simulation as public proof), since its evidence is the most indirect: its regulatory support comes
from third-party analysis rather than the legal text. Recorded here for whoever picks this up.

### Searches performed, and those that failed

**Productive:** generative agents (Stanford, 2023); OASIS and the million-agent scale; simulation of
1,000 people; AgentSociety; Concordia; synthetic respondents and validity critique in market
research; "silicon sampling" and flattened distributions; DSA systemic-risk assessment and
recommender testing; LLM agent social simulation in Brazil; emergent behaviour as methodological
artifact; research ethics and synthetic participants; commercial synthetic-user platforms.

**Failed or came back incomplete:**

- `arxiv.org/pdf/2507.02919` — the PDF returned unreadable binary. Worked around via the abstract
  page (`/abs/`), which yielded title, authorship and abstract.
- `link.springer.com/article/10.1007/s10462-025-11412-6` — critical review of validation in
  generative agent-based modelling, blocked at authentication. **Not cited.** It was the source that
  would have given a count of reviewed papers; without it, the map cites PIMMUR (576 studies) as its
  principal quantitative anchor for the critique.
- `nature.com/articles/s41598-026-66277-8` — *Scientific Reports*, on "modest but genuine"
  prediction of social-media reactions by persona-prompted agents, blocked at authentication.
  **Not cited.** It is the absence that most biases this map, and in the pessimistic direction: it
  was the source that would have quantified what simulation **gets right**.
- `ncbi.nlm.nih.gov/pmc/articles/PMC11776576/` — redirected; re-fetched at `pmc.ncbi.nlm.nih.gov`,
  successfully.
- `arxiv.org/pdf/2506.19806` — the PDF yielded record and structure, not full text. Cited for its
  thesis only, with no numbers.

**Not searched, and should have been (declared limitation):** use of social simulation by Brazilian
public bodies; the ANPD's position on synthetic populations; the Brazilian opinion-research market
and its exposure to synthetic respondents; and the DSA text in primary source (I used third-party
analysis). The first three gaps are why this map's Brazil cut is limited to a note rather than a
section.

### Effects cut for being empty

Generated and eliminated by the Phase 4 stopping criterion ("I cannot name a specific causal
mechanism"):

- "Society's relationship with truth changes." — empty.
- "The notion of the human is redefined." — empty.
- "Education is transformed." — empty; what remained nameable became e1.1.1 (design curriculum
  starts teaching experiment design and calibration).
- "New art forms emerge." — empty, and besides it belongs to the autonomous-characters-in-games
  theme, not this one.

### Border note with the neighbouring themes

Deliberately kept out of this map: autonomous characters **in games** (theme 7); agents with real
money in machine markets (theme 5); agents with bodies in the physical world (theme 9). Where the
wheel brushes against them, the criterion was: if the effect depends on the agent **earning or
spending**, it is theme 5; if it depends on **entertainment as an end**, it is theme 7; if it
depends on a **physical actuator**, it is theme 9. Here the object is social simulation **as
method** — what gets investigated with it, and who accepts the result.
