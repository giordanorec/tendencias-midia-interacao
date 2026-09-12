---
titulo: "Programação agêntica: o desenvolvedor vira orquestrador"
tipo: resumo-de-tendencia
disciplina: "CIN0055 Tendências em Mídia e Interação 2026.2"
tema: "1 de 19"
zona: "Agentes"
skill: futurizacao-futures-wheel
autor: grec
horizonte: 2031
recorte: "global, com nota sobre o Brasil"
data: 2026-09-11
mapa_completo: "futures-wheel-programacao-agentica-o-desenvolvedor-vira-orquestrador.md"
---

# Programação agêntica: o desenvolvedor vira orquestrador

**Rodada com teto de 15 subagentes** (a skill prevê um expansor por ramo; aqui os ramos foram agrupados).
Fase 8, infográficos, pulada. Mapa completo, com os 121 efeitos e as conexões cruzadas, em
`futures-wheel-programacao-agentica-o-desenvolvedor-vira-orquestrador.md` e no HTML de mesmo nome.

## A inovação

O agente de código lê o repositório, planeja, edita vários arquivos, roda os testes e abre o PR. Ao
redor dele nasceu uma camada — harness, skill empacotada, spec executável, MCP, orquestração
multi-agente — que transforma instrução em software versionado. O que sobra para o humano é
especificar, verificar e responder pelo resultado. Fora do recorte, pela régua da disciplina: o
autocompletar de IDE e o chat que explica código, ambos maduros. A fronteira é o agente que **age**.

**Onde está a curva, em 2026.** SWE-bench Verified saturou em 97,0% (±0,76) em medição independente,
com ressalva pública de contaminação; a medição séria migrou para tarefas longas com orçamento de
tempo — Terminal-Bench 4.0, melhor agente em 58,18% — e para o horizonte temporal do METR, 320
minutos com tempo de duplicação de 88,6 dias desde 2024. A adoção declarada é de 84% a 90%, e a
confiança não acompanhou: 46% desconfiam ativamente da acurácia contra 33% que confiam.

**A tese que a análise sustenta.** O agente não elimina trabalho: empurra o custo uma camada acima,
onde ele ganha fatura, dono administrativo fora da engenharia e nenhum instrumento de medida que
continue valendo.

## Os 18 efeitos de 1ª ordem

| # | Efeito | STEEP | Prob. | |
|---|---|---|---|---|
| e1_01 | O gargalo migra da geração para a **verificação**: escrever custa quase nada, aprovar custa tudo | Econ | alta | óbvio |
| e1_02 | A revisão é **abandonada na prática** sem que ninguém tenha decidido abandoná-la — o rito sobrevive à função | Soc | alta | — |
| e1_03 | A **porta de entrada se fecha por cima**: o ajuste vem por não-contratação, não por demissão | Econ | alta | óbvio |
| e1_04 | Cresce a distância entre o código que existe e o código que alguém **entende** — dívida escondida dentro de código limpo | Soc | alta | — |
| e1_05 | A camada que governa o agente (manifesto, skill, spec, hook, MCP) vira **artefato versionado**, com dívida própria | Tec | alta | óbvio |
| e1_06 | O arquivo de instrução vira **superfície de ataque**: texto que é dependência executável | Tec | alta | — |
| e1_07 | A **responsabilidade civil** converge para quem orquestrou e aprovou, justo quando ele lê menos do que assina | Pol | média | — |
| e1_08 | A **procedência** vira metadado obrigatório e com valor jurídico; o DCO fica impossível de assinar honestamente | Pol | média | — |
| e1_09 | O volume sobe e a composição muda: **duplica-se em vez de refatorar** | Tec | média | óbvio |
| e1_10 | Assimetria de autoria e cuidado: **o agente escreve, o humano mantém** | Tec | média | — |
| e1_11 | A cadência passa a ser regulada por um **contador de consumo** que o profissional não controla | Econ | alta | — |
| e1_12 | O token concorre com a folha, e a **arbitragem salarial** que sustentou o offshore deixa de funcionar | Econ | média | — |
| e1_13 | Os **ritos do open source quebram** sob o volume: submeter ficou grátis, triar continua caro | Soc | alta | óbvio |
| e1_14 | A **morte da issue**: pergunta-se ao agente, e o mantenedor perde o sinal de que alguém usa o que ele faz | Soc | baixa | — |
| e1_15 | A unidade de avaliação deixa de ser o modelo e passa a ser **modelo + harness**, com custo e tempo no placar | Tec | alta | — |
| e1_16 | Para quem projeta interação, o objeto de design deixa de ser o editor e vira o **painel de frota** | Tec | alta | — |
| e1_17 | A adoção vira **meta de avaliação de desempenho** — e produz recusa silenciosa, contaminando o indicador | Soc | média | — |
| e1_18 | A ordem pedagógica se inverte: **aprende-se a orquestrar antes de escrever**, sem praticar o que o ofício passou a exigir | Soc | média | — |

Deles saíram 56 efeitos de 2ª ordem e 47 de 3ª. Ao aprofundar, a árvore **migra para o econômico**:
tecnológico cai de 38,9% para 27,7%, econômico sobe de 16,7% para 40,4% e o social **encolhe**, de
33,3% para 12,8%. A parcela de efeitos não-óbvios sobe de 72% na 1ª ordem para 96% na 3ª.

## Os 5 mais impactantes

1. **e1_01 — o imposto de verificação.** Raiz de quase metade do mapa, e a única sustentada por quatro
   fontes de naturezas diferentes: telemetria de 22 mil desenvolvedores (tempo mediano de revisão
   +441%, tamanho de PR +51%), o DORA nomeando o "imposto de verificação oculto", e a compra da
   Graphite pela Cursor com a justificativa explícita de que revisar virou o gargalo.
2. **e1_02 — a governança-zumbi.** Dobra o anterior e o torna irreversível, porque não há decisão a
   revogar. Watanabe et al. (TOSEM 2025) medem 567 PRs agênticos em 157 projetos: mais da metade
   entra sem ninguém mexer. O abandono veio por exaustão, não por política.
3. **e1_16 — o objeto de design vira o painel de frota.** É o efeito que fala mais direto a quem
   projeta mídia e interação, e já tem produto: GitHub Agent HQ, VS Code posicionado como casa do
   desenvolvimento multi-agente, coder/mux, plandex. A metáfora do documento aberto perde função
   quando não há um arquivo sendo editado e sim N ramos correndo em paralelo.
4. **e2_B11 — o pacote de decisão.** A tela precisa entregar o que foi feito, contra que critério, e o
   que ficou de fora — e precisa projetar a **negação**, não só a aprovação: 64,1% das rejeições de PR
   agêntico não deixam nenhum registro de por quê.
5. **e1_03 — o degrau que sumiu.** O efeito de maior consequência direta para quem está na graduação, e
   o mais bem medido do ramo trabalhista (folha da ADP, vagas do Indeed Hiring Lab, lado do
   repositório). O ajuste é por não-contratação — o que o torna invisível nas estatísticas de demissão.

**E os 5 mais surpreendentes**, que contrariam a expectativa de quem acompanha o tema: decidir entre
propostas técnicas **já tem placar**, e o modelo pontuava melhor nisso do que em executar (e2_A18); nas
primeiras empresas que mediram, código de agente **reverte menos** que o humano — 0,53% contra 5,39%
(e2_A06), dado que o mapa registra como contradição aberta em vez de acomodar; a cota em dólar contra
o salário em real cria dois engenheiros do mesmo nível com capacidades diferentes (e2_B07); o censo de
adoção erra por uma ordem de grandeza (e2_B15); e **isolar o ambiente reduz o atrito** — 84% menos
prompts de permissão sob sandbox de sistema operacional (e3_D2_13), invertendo trinta anos de intuição
de que segurança e experiência competem.

## Wildcards

| | Cenário | Mecanismo em uma linha |
|---|---|---|
| 🟢 **w1** | **O oráculo que chegou cedo** (2028-2030) | A verificação formal barateia porque o agente escreve a especificação formal; o imposto de verificação e o ramo securitário desabam juntos. É a maior aposta não-declarada do mapa. |
| 🔴 **w2** | **A indenização que matou a revisão** (2027-2029) | Um fornecedor estende indenização ao defeito de execução; a seguradora retira o endosso; o único laço estabilizador do sistema desliga. |
| 🔴 **w3** | **A terça-feira em que todos os agentes ficaram burros** | Aposentadoria de família de modelo somada a deriva de comportamento quebra dezenas de milhares de manifestos sem uma linha ter mudado — e nada dispara alarme. |
| 🔴 **w4** | **A burocracia órfã** (2027-2029) | A medição não-cooperativa contradiz a base empírica depois que currículo, cargo, apólice e contrato já foram escritos. Número é reversível; instituição não. |
| 🔴 **w5** | **O Banco Central escreve o padrão antes da lei** 🇧🇷 | Incidente simultâneo em várias instituições via provedor único de núcleo bancário; a procedência vira exigência por resolução, não por desenho. |
| 🟢 **w6** | **O primeiro piso de cota computacional do mundo** 🇧🇷 | A negociação coletiva de TI fixa piso de cota de tokens — algo que nenhum sindicato do mundo disputou. |
| 🟢 **w7** | **O inverno do corpus** (2028-2031) | O fechamento do open source destrói o insumo que treina o modelo; a escassez obriga quem opera modelo a pagar pelo rastro de manutenção. |
| 🔴 **w8** | **O mercado do viés** (2027-2030) | A escolha de dependência migra para o viés do modelo, e o slot vira comprável: captura sem exploit, em texto que nenhum linter verifica. |
| 🔴 **w9** | **Token a zero, fatura na conferência** | O preço cai uma ordem de grandeza e a barreira se desloca para verificação e energia — 150 Wh por tarefa agêntica contra 0,24 Wh por pergunta de chat. |
| 🔴 **w10** | **A fronteira fecha** (2028-2030) | Controle de exportação alcança inferência por API; trocar de modelo passa a significar reescrever a norma da firma. |

Sete dos dez desembocam em **mais concentração** — inclusive os que começam como boa notícia. Nenhuma
das três oportunidades vem de o agente melhorar.

## O que me faria mudar de ideia

A rodada declarou dois critérios de refutação. **Primeiro:** evidência de que a adoção já passou da
maioria inicial de Rogers — o que se observaria não na taxa de uso declarada (84-90%, contaminada por
meta de avaliação, e medida por instrumento que erra em uma ordem de grandeza), mas na proporção de
código que entra em produção por fluxo agêntico *sem* revisão humana declarada como política, em
organizações que não vendem a ferramenta. **Segundo:** evidência de que a tecnologia não rompe nada e
só melhora o que existe — o que se observaria se o tempo de revisão parasse de crescer com o volume, e
se a contratação de nível de entrada voltasse à tendência anterior sem que nada mais tivesse mudado.

**Nota Brasil.** 4º país do mundo em número de desenvolvedores (6,89 milhões, Octoverse 2025), com o
mercado de TI desacelerando para 5,3% em 2026 contra 9,7% da média global — o país compra IA num ciclo
de restrição. Token em dólar e salário em real invertem a arbitragem que sustentou o offshore. No
debate público, o tema está sendo **pensado e não discutido**: o TabNews tem produção conceitual boa
(a "dívida de controle" é um recorte melhor que o *comprehension debt*) com ressonância de zero a
quatro pontos. E há dois atores que não aparecem no debate americano: o sindicato (Sindpd, Fenatib,
com safra de acordos coletivos em 2026) e a CBO, atualizada em março de 2026 com precedente de
ocupação de plataforma — o trilho institucional para enquadrar o cargo que escreve spec já existe.

## Bibliografia

159 fontes, todas efetivamente abertas pelos cinco agentes de pesquisa (WebSearch e WebFetch);
nenhuma reconstruída de memória. Onde a página não abriu, o achado está marcado nos JSONs como resumo
de busca. A lista completa está no anexo abaixo e na nota do mapa. As que mais sustentam peso:

- **METR**, *Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity* — `https://arxiv.org/abs/2507.09089`
- **Cui, Demirer, Jaffe et al.**, três experimentos de campo (n=4.867), *Management Science* 2026
- **Watanabe et al.**, 567 PRs agênticos em 157 projetos, *TOSEM* 2025
- **Chen et al.**, BNY Mellon (n=2.989), *ICSE-SEIP* 2026
- **DORA / Google**, *State of AI-assisted Software Development* — o "imposto de verificação oculto"
- **Stack Overflow Developer Survey 2025** (49.009 respostas, 166 países)
- **Michels et al.**, revisão de estado da arte — `https://arxiv.org/abs/2608.20446`
- **Bui & Evangelopoulos**, *Merge-Readiness Packs* — `https://arxiv.org/abs/2605.06717`
- **Rahman & Shihab**, sobrevivência de código em 201 repositórios — `https://arxiv.org/abs/2601.16809`
- **Hausfather**, *The real energy use of agentic AI*, The Climate Brink, 05/08/2026
- **GitHub Octoverse 2025** · **ABES/IDC 2026** · **Veracode 2026** · **Leaderboards SWE-bench e Terminal-Bench**
- **Thaler v. Perlmutter** (certiorari negado em 02/03/2026) e a orientação do US Copyright Office
- Pensamento: **Simon Willison**, **Andrej Karpathy**, **Steve Yegge**, **Birgitta Böckeler**,
  **Martin Fowler/Thoughtworks**, **Dan Luu**, **Fabio Akita**, **Kent Beck**, **Baldur Bjarnason**

---

## Anexo — bibliografia completa

As 159 fontes abertas pelos agentes de pesquisa, por ângulo.

### Fontes acadêmicas

1. Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity — Joel Becker et al. (METR), 2025, arXiv:2507.09089 / relatório METR — `https://arxiv.org/abs/2507.09089`
2. The Effects of Generative AI on High-Skilled Work: Evidence from Three Field Experiments with Software Developers — Kevin Zheyuan Cui, Mert Demirer, Sonia Jaffe, Leon Musolff, Sida Peng, Tobias Salz, publicado em Management Science (2026); working paper SSRN 4945566 de 2024 — `https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4945566`
3. The Impact of AI on Developer Productivity: Evidence from GitHub Copilot — Sida Peng, Eirini Kalliamvakou, Peter Cihon, Mert Demirer, 2023, arXiv:2302.06590 — `https://arxiv.org/abs/2302.06590`
4. How AI assistance impacts the formation of coding skills — Anthropic, 29 de janeiro de 2026 (relatório de pesquisa da empresa; arXiv:2601.20245 citado na página) — `https://www.anthropic.com/research/AI-assistance-coding-skills`
5. DORA State of AI-assisted Software Development 2025 — Google Cloud / DORA (Nathen Harvey et al.), 2025 — `https://dora.dev/dora-report-2025/`
6. On the Use of Agentic Coding: An Empirical Study of Pull Requests on GitHub — Miku Watanabe, Hao Li, Yutaro Kashiwa, Brittany Reid, Hajimu Iida, Ahmed E. Hassan, 2025, ACM TOSEM, arXiv:2509.14745 — `https://arxiv.org/html/2509.14745v3`
7. Augmentation with Dilution: A Large-Scale Empirical Study of Human Contributor Ecosystems After AI Coding Agent Adoption — Weixing Zhang, Bowen Jiang, Anne Koziolek (Karlsruhe Institute of Technology), 2026, arXiv:2606.26289 — `https://arxiv.org/html/2606.26289`
8. To What Extent Does Agent-generated Code Require Maintenance? An Empirical Study — Shota Sawada, Tatsuya Shirai, Yutaro Kashiwa, Ken'ichi Yamaguchi, Hiroshi Iwata, Hajimu Iida, 2025, arXiv:2605.06464 — `https://arxiv.org/html/2605.06464v1`
9. From Prompting to Verification: How Experience Shapes Vibe Coding Practices — Ahmed Fawzy, Amjed Tahir, Kelly Blincoe, 2026, ACM TOSEM, arXiv:2605.24521 — `https://arxiv.org/html/2605.24521v1`
10. Vibe Coding: Practice, Performance, Productivity, and Risk — A State-of-the-Art Review — Dominik L. Michels, Mutaz Abu Ghazaleh, François Lazzari, Nabil Kassem, Jonathan Klein, 2026, arXiv:2608.20446 — `https://arxiv.org/html/2608.20446`
11. Agentic Software Engineering: Foundational Pillars and a Research Roadmap — Ahmed E. Hassan, Hao Li, Dayi Lin, Bram Adams, Tse-Hsun Chen, Yutaro Kashiwa, Dong Qiu, 2025 (v3 em jun/2026), arXiv:2509.06216 — `https://arxiv.org/abs/2509.06216`
12. Spec-Driven Development for Agentic Software Engineering: Harnessing Human-Agent Teamwork — Jessica Diaz, Joaquin Gayoso, Andrea Cimminio, Jorge Perez, 2026, arXiv:2609.00252 — `https://arxiv.org/abs/2609.00252`
13. On the Use of Agentic Coding Manifests: An Empirical Study of Claude Code — Worawalan Chatlatanagulchai, Kundjanasith Thonglek, Brittany Reid, Yutaro Kashiwa, Pattara Leelaprute, Arnon Rungsawang, Bundit Manaskasemsak, Hajimu Iida, 2025, arXiv:2509.14744 — `https://arxiv.org/pdf/2509.14744`
14. Terminal-Bench: Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces — Mike A. Merrill e 84 coautores, 2026 (submetido 17/01/2026), arXiv:2601.11868 — `https://arxiv.org/abs/2601.11868`
15. SWE-Lancer: Can Frontier LLMs Earn $1 Million from Real-World Freelance Software Engineering? — Samuel Miserendino, Michele Wang, Tejal Patwardhan, Johannes Heidecke (OpenAI), 2025, arXiv:2502.12115; pôster ICML 2025 — `https://arxiv.org/abs/2502.12115`
16. SWE-Bench+: Enhanced Coding Benchmark for LLMs — Reem Aleithan et al., 2024, arXiv:2410.06992 (percentuais confirmados por citação em SWE-MERA, arXiv:2507.11059) — `https://arxiv.org/html/2507.11059v3`
17. SWE-MERA: A Dynamic Benchmark for Agenticly Evaluating Large Language Models on Software Engineering Tasks — Pavel Adamenko, Mikhail Ivanov, Aidar Valeev, Rodion Levichev, Pavel Zadorozhny, Ivan Lopatin, Dmitrii Babaev, Alena Fenogenova, Valentin Malykh, 2025-2026, arXiv:2507.11059 — `https://arxiv.org/html/2507.11059v3`
18. Canaries in the Coal Mine? Six Facts about the Recent Employment Effects of Artificial Intelligence — Erik Brynjolfsson, Bharat Chandar, Ruyu Chen (Stanford Digital Economy Lab), versão revisada de agosto de 2026 — `https://digitaleconomy.stanford.edu/news/canariesaug26/`
19. Beyond the Commit: Developer Perspectives on Productivity with AI Coding Assistants — Valerie Chen, Jasmyn He, Behnjamin Williams, Jason Valentino, Ameet Talwalkar (CMU e BNY Mellon), 2026, ICSE-SEIP '26 (Rio de Janeiro), arXiv:2602.03593 — `https://arxiv.org/html/2602.03593v1`
20. Beyond the Benefits: A Systematic Review of the Harms and Consequences of Generative AI in Computing Education — Seth Bernstein, Ashfin Rahman, Nadia Sharifi, Ariunjargal Terbish, Stephen MacNeil, 2025, Koli Calling '25 (25th Koli Calling International Conference on Computing Education Research), arXiv:2510.04443 — `https://arxiv.org/pdf/2510.04443`
21. Asleep at the Keyboard? Assessing the Security of GitHub Copilot's Code Contributions — Hammond Pearce, Baleegh Ahmad, Benjamin Tan, Brendan Dolan-Gavitt, Ramesh Karri, 2021, IEEE Symposium on Security and Privacy 2022, arXiv:2108.09293 — `https://arxiv.org/abs/2108.09293`
22. Model Context Protocol (MCP) at First Glance: Studying the Security and Maintainability of MCP Servers — Mohammed Mehedi Hasan, Hao Li, Emad Fallahzadeh, Gopi Krishnan Rajbahadur, Bram Adams, Ahmed E. Hassan, 2025 (v. mais recente abr/2026), arXiv:2506.13538 — `https://arxiv.org/abs/2506.13538`
23. The Maintainability Gap: AI Code Quality in 2026 — GitClear, 2026 (dados de 2023-2026) — `https://www.gitclear.com/the_ai_code_quality_maintainability_gap`
24. Pesquisa Salarial de Programadores 2026 — Código Fonte TV (Brasil), coleta de 23/02/2026 a 09/06/2026, 17.046 respondentes — `https://pesquisa.codigofonte.com.br/2026`

### Mercado e adoção

1. Stack Overflow Developer Survey 2025 — seção AI (fonte primária, aberta) — `https://survey.stackoverflow.co/2025/ai`
2. DORA / Google — State of AI-assisted Software Development 2025 (página de insights, aberta) — `https://dora.dev/insights/balancing-ai-tensions/`
3. METR — Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity (RCT) — `https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/`
4. Gartner — press release 'Gartner Says 75% of Enterprise Software Engineers Will Use AI Code Assistants by 2028' (aberto via The Register; o PR do site da Gartner devolveu 403) — `https://www.theregister.com/software/2024/04/13/gartner_75_of_enterprise_software_devs_will_use_ai_in_2028/723526`
5. Gartner via The Register — 'AI coding agents could soon cost more than the developers using them' — `https://www.theregister.com/ai-and-ml/2026/06/24/ai_coding_agents_could_soon_cost_more_than_the_developers_using_them/5260864`
6. GitHub Octoverse 2025 (relatório oficial, aberto) — `https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/`
7. JetBrains AI Pulse Survey, janeiro/2026 (blog de pesquisa oficial, aberto) — `https://blog.jetbrains.com/research/2026/04/which-ai-coding-tools-do-developers-actually-use-at-work/`
8. JetBrains State of Developer Ecosystem 2025 (via InfoWorld e blog JetBrains; não abri o relatório completo) — `https://blog.jetbrains.com/research/2025/10/state-of-developer-ecosystem-2025/`
9. Indeed Hiring Lab — 'AI and Job Postings: From Destruction to Creation?' (fonte primária, aberta) — `https://hiringlab.indeed.com/2026/07/08/ai-and-job-postings-from-destruction-to-creation/`
10. Stanford Digital Economy Lab — Brynjolfsson, Chandar & Chen, 'Canaries in the Coal Mine? Six Facts about the Recent Employment Effects of AI' (versão revisada, página oficial aberta) — `https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine-six-facts-about-the-recent-employment-effects-of-artificial-intelligence/`
11. Cursor (Anysphere) — anúncio oficial da aquisição da Graphite (blog do fornecedor, aberto) — `https://cursor.com/blog/graphite`
12. Mercado de revisão de código com IA — CodeRabbit, Greptile, Graphite, Qodo (agregado de resultados de busca; SiliconANGLE para Greptile; NÃO abri as páginas individuais) — `https://siliconangle.com/2025/09/23/greptile-bags-25m-funding-take-coderabbit-graphite-ai-code-validation/`
13. Anthropic / Claude Code — receita (agregado de buscas citando Reuters e Menlo Ventures; NÃO abri a matéria da Reuters) — `https://sacra.com/c/anthropic/`
14. Cursor / Anysphere — receita, valuation e aquisição pela SpaceX (Yahoo Finance, aberta; CNBC e Gartner devolveram 403) — `https://finance.yahoo.com/technology/ai/articles/spacex-completes-record-60-billion-131311785.html`
15. GitHub Copilot — assentos e receita (agregado de buscas; estimativas de terceiros, nenhuma página aberta) — `https://aibusiness.vc/b2b/github-copilot-2b-arr`
16. Cognition (Devin) + Windsurf — CNBC, TechCrunch e blog da Cognition (via busca; CNBC de set/2025 citado) — `https://www.cnbc.com/2025/09/08/cognition-valued-at-10point2-billion-two-months-after-windsurf-.html`
17. Replit e Lovable — ARR e valuation (agregado de buscas; Sacra e TechCrunch citados; páginas individuais não abertas) — `https://sacra.com/c/replit/`
18. Precificação das ferramentas (agregado de buscas em comparativos; nenhuma página de fornecedor aberta) — `https://amux.io/blog/ai-coding-tools-pricing-2026/`
19. Serviços de TI — 'AI deflation' nas gigantes indianas (The Register, aberta) — `https://www.theregister.com/software/2026/04/28/ai_deflation_comes_to_indias_tech_services_giants/5225686`
20. Orçamento corporativo de ferramentas de IA para engenharia — DX (getdx.com), pesquisa própria, aberta — `https://getdx.com/blog/how-are-engineering-leaders-approaching-2026-ai-tooling-budget/`
21. Declarações de CEO sobre % de código escrito por IA (agregado; TechRepublic, IT Pro, Daring Fireball via busca) — `https://www.techrepublic.com/article/news-microsoft-meta-code-written-by-ai/`
22. Tamanho de mercado de 'AI code tools' (relatórios comerciais; nenhum aberto — apenas páginas de venda de relatório) — `https://www.grandviewresearch.com/press-release/global-ai-code-tools-market`
23. Camada de harness e protocolo — adoção de MCP (agregado de buscas; blog oficial do MCP citado, páginas de estatística não abertas) — `https://blog.modelcontextprotocol.io/posts/2026-07-28/`
24. Modelos de fundação para código — Poolside, Reflection AI (PitchBook/Sacra/Tracxn via busca; não abertos) — `https://pitchbook.com/profiles/company/528350-68`
25. Brasil — ABES/IDC, mercado de TI e software (via TI Inside, Coletivo Tech e G&P; a página da ABES devolveu 403) — `https://coletivo.tech/noticias/abes-estudo-mercado-brasileiro-software-2026/`
26. Brasil — déficit de profissionais e mercado de trabalho júnior (Brasscom, FGV IBRE, Inteli, Rocketseat, via busca; páginas primárias não abertas) — `https://brasscom.org.br/estudo-da-brasscom-aponta-demanda-de-797-mil-profissionais-de-tecnologia-ate-2025/`

### Inovação, produtos, patentes e benchmarks

1. sst/opencode (GitHub) — `https://github.com/sst/opencode`
2. badlogic/pi-mono — Pi Agent Harness (GitHub) — `https://github.com/badlogic/pi-mono`
3. OpenHands/OpenHands (GitHub) — `https://github.com/OpenHands/OpenHands`
4. OpenInterpreter/open-interpreter (GitHub) — `https://github.com/OpenInterpreter/open-interpreter`
5. cline/cline (GitHub) — `https://github.com/cline/cline`
6. AntonOsika/gpt-engineer (GitHub) — `https://github.com/AntonOsika/gpt-engineer`
7. Aider-AI/aider (GitHub) — `https://github.com/Aider-AI/aider`
8. Kilo-Org/kilocode (GitHub) — `https://github.com/Kilo-Org/kilocode`
9. charmbracelet/crush (GitHub) — `https://github.com/charmbracelet/crush`
10. github/copilot-cli (GitHub) — `https://github.com/github/copilot-cli`
11. plandex-ai/plandex (GitHub) — `https://github.com/plandex-ai/plandex`
12. google/agents-cli (GitHub) — `https://github.com/google/agents-cli`
13. JetBrains/junie (GitHub) — `https://github.com/JetBrains/junie`
14. jrswab/axe (GitHub) — `https://github.com/jrswab/axe`
15. HarnessRouter/harnessrouter — Unified Harness Protocol (UHP) — `https://github.com/HarnessRouter/harnessrouter`
16. agentskills/agentskills — especificação Agent Skills — `https://github.com/agentskills/agentskills`
17. agentskills.io — Agent Skills (spec e showcase de clientes) — `https://agentskills.io`
18. AGENTS.md (site oficial) — `https://agents.md`
19. Linux Foundation — formação da Agentic AI Foundation (AAIF) — `https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation`
20. modelcontextprotocol/registry (GitHub) — `https://github.com/modelcontextprotocol/registry`
21. a2aproject/A2A (GitHub) — `https://github.com/a2aproject/A2A`
22. Linux Foundation — A2A supera 150 organizações no primeiro ano — `https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year`
23. Agent Client Protocol (site oficial) — `https://agentclientprotocol.com`
24. MCP + Agentic AI Foundation (blog oficial do MCP e Anthropic) — `https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/`
25. NVIDIA/SkillSpector (GitHub) — `https://github.com/NVIDIA/SkillSpector`
26. NVIDIA Technical Blog — NVIDIA-Verified Agent Skills e 'capability governance' — `https://developer.nvidia.com/blog/nvidia-verified-agent-skills-provide-capability-governance-for-ai-agents/`
27. liaohch3/claude-tap (GitHub) — `https://github.com/liaohch3/claude-tap`
28. first-fluke/oh-my-agent (GitHub) — `https://github.com/first-fluke/oh-my-agent`
29. darrenhinde/OpenAgentsControl (GitHub) — `https://github.com/darrenhinde/OpenAgentsControl`
30. russelleNVy/three-man-team (GitHub) — `https://github.com/russelleNVy/three-man-team`
31. coder/mux (GitHub) — `https://github.com/coder/mux`
32. 1ay1/agentty (GitHub) — `https://github.com/1ay1/agentty`
33. vibe-log/vibe-log-cli (GitHub) e vibe-log.dev — `https://github.com/vibe-log/vibe-log-cli`
34. NVIDIA/skills (GitHub) — `https://github.com/NVIDIA/skills`
35. VS Code — 'Your Home for Multi-Agent Development' (blog oficial) — `https://code.visualstudio.com/blogs/2026/02/05/multi-agent-development`
36. GitHub Agent HQ (blog do GitHub, via resultados de busca) — `https://github.blog/news-insights/company-news/welcome-home-agents/`
37. Cognition / Devin — rodada de US$ 1 bilhão (via resultados de busca) — `https://techcrunch.com/2026/05/27/ai-coding-startup-cognition-raises-1b-at-25b-pre-money-valuation/`
38. TechCrunch — Runable levanta US$ 21 milhões — `https://techcrunch.com/2026/08/26/runable-hits-21m-to-bet-ai-agents-can-go-from-building-businesses-to-growing-them/`
39. Red Hat Emerging Technologies — 'Who really built that? Supply-chain provenance for AI agent identity' — `https://next.redhat.com/2026/08/07/supply-chain-provenance-for-ai-agent-identity/`
40. arXiv 2606.24429 — 'Detecting AI Coding Agents in Open Source: A Validated Multi-Method Census of 180 Million Repositories' — `https://arxiv.org/abs/2606.24429`
41. arXiv 2606.20683 — 'From Question Answering to Task Completion: A Survey on Agent System and Harness Design' — `https://arxiv.org/abs/2606.20683`
42. arXiv 2603.25723 — 'Natural-Language Agent Harnesses' — `https://arxiv.org/abs/2603.25723`
43. arXiv 2606.31498 — 'Governance Gaps in Agent Interoperability Protocols: What MCP, A2A, and ACP Cannot Express' — `https://arxiv.org/abs/2606.31498`
44. SWE-bench Verified — leaderboard (Steel.dev) — `https://leaderboard.steel.dev/leaderboards/swe-bench-verified/`
45. Terminal-Bench 4.0 — leaderboard (BenchLM) e site oficial — `https://benchlm.ai/benchmarks/terminal-bench-4`
46. METR — Time Horizon 1.1 — `https://metr.org/blog/2026-1-29-time-horizon-1-1/`
47. Aider polyglot leaderboard — `https://aider.chat/docs/leaderboards/`
48. SWE-Lancer (OpenAI) — arXiv 2502.12115 — `https://arxiv.org/abs/2502.12115`
49. Estudo empírico de segurança em Agent Skills (base do SkillSpector) — `https://github.com/NVIDIA/SkillSpector`
50. Registros e marketplaces de skills (via resultados de busca) — `https://agentskills.io/clients`
51. Produtos de harness e frota listados no showcase do agentskills.io — `https://agentskills.io`

### Pensadores, ensaios e talks

1. Ensaio anual "LLM predictions for 2026", simonwillison.net, 8 jan 2026 — `https://simonwillison.net/2026/Jan/8/llm-predictions-for-2026/`
2. Declarações no evento AI Ascent da Sequoia Capital (abril 2026), reportadas por The New Stack e outros veículos — `https://thenewstack.io/vibe-coding-is-passe/`
3. Estudo "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", publicado em julho de 2025 — `https://letsdatascience.com/blog/developers-thought-ai-made-them-faster-the-data-said-otherwise`
4. Posts de blog e citações reportadas sobre qualidade de código gerado por IA — `https://www.linkedin.com/posts/nicholas-anthony-miller_trusting-your-own-judgement-on-ai-is-a-activity-7343056166593150976-2yYy`
5. "State of AI-assisted Software Development 2025" (DORA Report 2025) — `https://dora.dev/dora-report-2025/`
6. Newsletter "Tidy First?" (Substack) e entrevista "TDD, AI agents and coding with Kent Beck" no Pragmatic Engineer — `https://newsletter.pragmaticengineer.com/p/tdd-ai-agents-and-coding-with-kent`
7. Palestra QCon London 2026 "AI Coding State of the Game: More Capable, More Expensive, More Dangerous Coding Agents"; artigo em martinfowler.com sobre papel das habilidades do desenvolvedor — `https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html`
8. Livro "Vibe Coding" (Gene Kim, Steve Yegge, com prefácio de Dario Amodei); entrevista no Pragmatic Engineer — `https://newsletter.pragmaticengineer.com/p/steve-yegge-on-ai-agents-and-the`
9. Resenha do livro "Vibe Coding" de Gene Kim e Steve Yegge, blog pessoal, fevereiro 2026 — `https://mikehadlow.com/posts/2026-02-23-vibe-coding/`
10. Newsletter no Substack, incluindo "AI Agents have, so far, mostly been a dud" e "Six or seven predictions for AI 2026" — `https://garymarcus.substack.com/p/ai-agents-have-so-far-mostly-been`
11. "AI Copilot Code Quality: 2025 Data Suggests 4x Growth in Code Clones" — `https://www.gitclear.com/ai_assistant_code_quality_2025_research`
12. Livro "Co-Intelligence: Living and Working with AI"; posts no X sobre teoria organizacional aplicada a IA agêntica — `https://x.com/emollick/status/2020303173362012667`
13. Artigo "Harness engineering for coding agent users", martinfowler.com — `https://martinfowler.com/articles/harness-engineering.html`
14. Entrevista reportada por TN Petroleo/Revista do Administrador; discussão na comunidade TabNews ("Akita e o Anti Vibe Coding") — `https://tnpetroleo.com.br/academy/referencia-em-tecnologia-fabio-akita-ve-nascer-um-novo-perfil-profissional-o-orquestrador-de-agentes-de-ia/`
15. "2026 marca virada para a engenharia de software com IA autônoma", Baguete — `https://www.baguete.com.br/public/noticias/2026-marca-virada-para-a-engenharia-de-software-com-ia-autonoma`
16. "AI and Work (Some Predictions)", calnewport.com — `https://calnewport.com/ai-and-work-some-predictions/`
17. "A Critical Look at AI-Generated Software" e "Inside the AI Code Surge Reshaping Developer Jobs" — `https://spectrum.ieee.org/ai-software`
18. "The End of the Coder?" e "Agentic AI Software Engineers: Programming with Trust", CACM, 2026 — `https://cacm.acm.org/news/the-end-of-the-coder/`
19. Posts sobre "agentic testing" e crítica a benchmarks de IA ("The Benchmarkpocalypse") — `https://www.developersdigest.tech/blog/dan-luu-agentic-testing-2026`
20. Ensaios na The New Yorker, incluindo "Why A.I. Isn't Going to Make Art" e "ChatGPT Is a Blurry JPEG of the Web" — `https://cdh.princeton.edu/blog/ted-chiang/`

### Sinais fracos e comunidades

1. The Register / BleepingComputer / The New Stack — curl encerra o bug bounty — `https://www.theregister.com/security/2026/01/21/curl_shutters_bug_bounty_program/`
2. Signadot / The New Stack — "Open source maintainers are drowning in AI-generated pull requests" — `https://dev.to/signadot/open-source-maintainers-are-drowning-in-ai-generated-pull-requests-enterprise-teams-are-next-36l`
3. arXiv 2603.27249v3 — Baltes, Cheong & Treude, "An Endless Stream of AI Slop" — `https://arxiv.org/html/2603.27249v3`
4. AI Engineering Report 2026 (telemetria de 22.000 devs, 4.000+ times) — via DEV/FlowVerify/Faros — `https://dev.to/code-board/pr-review-time-is-up-441-the-real-cost-of-ai-accelerated-development-1ho6`
5. Hacker News — "Agentic Coding Is a Trap" (larsfaye.com) — `https://news.ycombinator.com/item?id=48002442`
6. Hacker News — "Agentic Coding Is a Trap", comentário de fnordpiglet e a réplica — `https://news.ycombinator.com/item?id=48002442`
7. Hacker News — "There is an AI code review bubble" (greptile.com) — `https://news.ycombinator.com/item?id=46766961`
8. Addy Osmani — "Comprehension Debt" (O'Reilly Radar e blog pessoal) — `https://addyosmani.com/blog/comprehension-debt/`
9. Hacker News — "Beyond agentic coding" (haskellforall.com) — `https://news.ycombinator.com/item?id=46930565`
10. Hacker News — "Embracing the parallel coding agent lifestyle" (simonwillison.net) — `https://news.ycombinator.com/item?id=45489884`
11. Hacker News — "Building an (almost) fully self-hosted, sandboxed, agentic software factory" (jakesaunders.dev) — `https://news.ycombinator.com/item?id=49390463`
12. Hacker News — "Six months of writing code exclusively with agents" (blog.exe.dev) — `https://news.ycombinator.com/item?id=49465119`
13. Hacker News — Ask HN: "Coding Agents killed my identity. How do you feel?" — `https://news.ycombinator.com/item?id=49389408`
14. Hacker News — "Some uncomfortable truths about AI coding agents" (standupforme.app) — `https://news.ycombinator.com/item?id=47545748`
15. METR — "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity" — `https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/`
16. Stack Overflow Developer Survey 2025/2026 — `https://stackoverflow.blog/2025/12/29/developers-remain-willing-but-reluctant-to-use-ai-the-2025-developer-survey-results-are-here/`
17. Phoronix / lista qemu-devel — QEMU RELAXA a proibição de contribuição gerada por IA — `https://lists.nongnu.org/archive/html/qemu-devel/2026-05/msg07614.html`
18. PocketOS / Railway — agente apagou banco de produção e todos os backups em 9 segundos — `https://incidentdatabase.ai/cite/1152/`
19. Cloud Security Alliance Labs / arXiv — harness como superfície de ataque (Clinejection, SKILL.md, PhantomSkill) — `https://labs.cloudsecurityalliance.org/research/csa-research-note-skill-md-agent-context-poisoning-20260506/`
20. GitHub Copilot passa a preço por token; Disney remove Copilot do parque aprovado nos EUA — `https://www.briefs.co/news/disney-shifts-from-github-copilot-to-openai-s-codex-for-us-w/`
21. Limites semanais de Claude Code e o choque de consumo — `https://codersera.com/blog/anthropic-june-2026-billing-change-claude-code/`
22. Ollama expõe endpoint compatível com a API Messages da Anthropic — `https://www.runlocalai.co/guides/claude-code-with-local-models`
23. Adoção mandatória e a recusa silenciosa — LeadDev, CNBC, Metaintro — `https://leaddev.com/culture/ai-coding-mandates-are-driving-developers-to-the-brink`
24. DORA — throughput virou positivo, estabilidade continua negativa — `https://www.faros.ai/blog/key-takeaways-from-the-dora-report-2025`
25. CodeRabbit — 1,7x mais problemas em PR co-autorado por IA — `https://www.coderabbit.ai/blog/ai-is-burning-out-the-people-who-keep-open-source-alive`
26. Diretiva Europeia de Responsabilidade por Produto + California AB 316 + lacuna de seguro — `https://www.buildmvpfast.com/blog/ai-generated-code-liability-legal-risk-copyright-2026`
27. CISA / NSA — guia conjunto sobre adoção de IA agêntica — `https://www.cisa.gov/`
28. Porta de entrada — queda de vaga júnior e o contra-dado de Harvard — `https://www.danilchenko.dev/posts/junior-developer-jobs-2026/`
29. Rice University — aprender Python, bash e HTML ATRAVÉS de agentes — `https://ga.rice.edu/programs-study/courses/comp/`
30. Anthropic Code Review — equipe de agentes revisando PR (noticiado em veículo sindical brasileiro) — `https://sindpd.org.br/2026/03/17/ia-codigo-papel-dos-desenvolvedores/`
31. TabNews — "O fim da Era do TAB: por que o desenvolvedor vai virar um gerente de código" (devmarto87) — `https://www.tabnews.com.br/devmarto87/o-fim-da-era-do-tab-por-que-o-desenvolvedor-vai-virar-um-gerente-de-codigo-analisando-a-evolucao-do-cursor`
32. TabNews — "Dívida de Controle: quando o vibe coding começa a cobrar juros" (Centelha) — `https://www.tabnews.com.br/Centelha/divida-de-controle-quando-o-vibe-coding-comeca-a-cobrar-juros`
33. TabNews — "Vibe coding tá matando o open source (e você nem percebeu)" (zilvodev) — `https://www.tabnews.com.br/zilvodev/vibe-coding-ta-matando-o-open-source-e-voce-nem-percebeu`
34. TabNews — "oh-my-ag: um orquestrador multiagente para Antigravity" (gracefullight) — `https://www.tabnews.com.br/gracefullight/oh-my-ag-um-orquestrador-multiagente-para-antigravity`
35. Custo corporativo de IA sem ganho mensurável — Uber e Amazon (via Roberto Dias Duarte) — `https://www.robertodiasduarte.com.br/agentes-de-ia-elevam-custos-de-software/`
36. Itaú — agentes de IA redefinindo desenvolvimento de produto e software — `https://tiinside.com.br/03/06/2026/como-agentes-de-ia-estao-redefinindo-o-desenvolvimento-de-produtos-e-software-no-itau/`
37. Karpathy sobre atrofia da própria habilidade — `https://www.aol.com/articles/ex-tesla-ai-head-seen-093701714.html`
38. agent-cron e harness caseiro como artefato de engenharia (GitHub) — `https://github.com/T0UGH/agent-cron`
