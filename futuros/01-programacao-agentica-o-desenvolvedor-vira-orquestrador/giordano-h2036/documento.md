---
tema: "Programação agêntica: o desenvolvedor vira orquestrador"
slug: programacao-agentica-o-desenvolvedor-vira-orquestrador
autor_login: grec
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2036
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 19
efeitos_ordem_2: 22
efeitos_ordem_3: 16
tecnologias_citadas: [Claude Code, GitHub Copilot CLI, OpenAI Codex, Cursor, Devin, OpenCode, Google Antigravity, JetBrains Junie, goose, Kiro, AGENTS.md, SKILL.md, Agent Skills, Agent Plugins 1.0, MCP, Spec Kit, git worktree, Vibe Kanban, Claude Squad, Conductor, Dafny, Lean, Verus, CSP-M, Isabelle/HOL, RoboChart, SWE-bench Verified, Terminal-Bench, AIDev, SBOM, C2PA]
fontes: 28
confianca: media
experimento: "A mesma especificação, três vezes — a turma escreve uma spec, roda três agentes diferentes sem tocar no código, e mede se a variação está na spec ou no agente"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Em 2026 usar um agente de código já é maioria — a JetBrains mediu 90% de desenvolvedores profissionais usando agente ao menos semanalmente e 68% diariamente, sobre mais de 15 mil respondentes. Isso desqualifica "usar agente" como disrupção-raiz: é tecnologia madura, e este mapa a trata como contexto. O que ainda não é maioria, e é de onde tudo deriva, são quatro rupturas: **a instrução empacotada virou um artefato de software versionado** (SKILL.md publicado como padrão aberto em dezembro de 2025, AGENTS.md doado à Agentic AI Foundation com 60 mil projetos adotantes); **a assimetria entre produzir e verificar deixou de ser custo e virou omissão** — 77,51% dos pull requests agênticos mesclados têm o mesmo submetedor como integrador, contra 57,63% dos humanos, e cada comentário de revisor *reduz* em 2,8% a chance de merge de um PR agêntico enquanto *aumenta* em 2,7% a de um PR humano; **a responsabilidade estrita sobre software como produto** entra em vigor na União Europeia em 9 de dezembro de 2026, com presunção de defeito quando a complexidade técnica dificulta a prova; e **a verificação por máquina** começa a entrar no laço do agente (o pipeline Forge levou 0 de 30 execuções de passe único a 15 de 15 convergindo em 2 a 3 iterações, com realimentação de prova). O mapa persegue os efeitos dessas quatro rupturas até 2036. O achado que se repete não é a substituição do programador: é que **escrever ficou barato, ler continua caro, e a saída que o mercado está tomando não é ler mais — é deixar de ler**. Para quem projeta mídia e interação, a consequência prática é que o artefato de valor em 2036 não é a peça nem o código: é a especificação verificável e o rastro que prova o que foi feito.

## 2. O tema

**Programação agêntica** é desenvolver software com um agente que age: recebe um objetivo, lê o repositório, planeja, executa comandos, edita arquivos, roda os testes, corrige o que falhou e submete o resultado. Em volta disso cresceu uma camada própria — o **harness** (o arcabouço que dá ao modelo observação, ação, estado e realimentação), a **skill** (instrução empacotada que o agente carrega sob demanda) e os **protocolos** que ligam agente a ferramenta. Um estudo de taxonomia de arquiteturas de agentes de código, que leu o código-fonte de SWE-agent, Aider, OpenHands, AutoCodeRover e Agentless, conclui que o scaffold — não só o modelo — determina a eficácia; um position paper de 2026 vai adiante e argumenta que os *benchmarks* atuais estão desalinhados justamente porque tratam o agente como modelo monolítico, quando ele é composto de modelo, harness, contexto, ambiente e sinal de realimentação, e qualquer um desses componentes move a pontuação tanto quanto uma geração de modelo.

**Onde isso encosta em mídia e interação**, em três lugares, e nenhum deles é "programação" no sentido estreito:

1. **Quem projeta virou quem publica.** Uma pesquisa noticiada em agosto de 2026 mediu que um terço das pessoas que hoje publicam software com ferramentas de IA não tem formação em programação. O protótipo deixou de ser maquete e passou a ser produto — e quem projeta interação passou a ser autor, com as responsabilidades de autor.
2. **A interface da autoria mudou de lugar.** O objeto que se manipula não é mais a paleta de ferramentas de um editor: é uma conversa, um terminal, um arquivo de instrução e um painel de agentes em paralelo. Projetar como um humano dirige, interrompe, inspeciona e aprova um agente é, literalmente, design de interação — e é a interface menos projetada do setor hoje.
3. **O objeto projetado virou gerador.** Quando a identidade visual, a regra de acessibilidade e o tom de voz precisam ser executados por uma máquina que não lê o guia de estilo, o sistema de design deixa de ser um documento para humanos e passa a ser um pacote executável que o agente carrega. Isso é uma mudança de natureza do artefato de design, não de ferramenta.

**Por que isto merece um mapa de futuro e não um levantamento de estado da arte.** Porque o estado da arte aqui muda em meses e o que interessa é o que *não* muda: as instituições do ofício. O pull request, a revisão por pares, o bug bounty, a vaga de júnior, a métrica de produtividade, a licença de software, a cláusula "as is", o currículo de computação — tudo isso foi construído sobre a suposição de que produzir e verificar custavam a mesma coisa. Essa suposição caiu. O horizonte de dez anos é o prazo em que instituições se reorganizam, não em que ferramentas aparecem.

## 3. Onde isso está hoje

### 3.1 O que já existe e funciona

- **Agente de terminal de uso diário.** A pesquisa da JetBrains com mais de 15 mil desenvolvedores profissionais (campo de maio a julho de 2026) registra 90% usando agente de código ao menos semanalmente e 68% diariamente. Claude Code em 39% globalmente (18% em janeiro de 2026, 47% nos Estados Unidos), Codex em 16% (3% em janeiro), GitHub Copilot em 21% — em queda, vindo de 29% um ano antes —, Cursor em 12%, OpenCode 7%, Google Antigravity 6%.
- **Ganho de vazão medido em campo.** O estudo observacional da adoção de Claude Code e GitHub Copilot CLI na Microsoft (pré-período de 1/10/2025 a 4/1/2026; observação de 5/1 a 29/4/2026; 609 respostas de survey) mediu adotantes mesclando cerca de **24% mais pull requests** que o contrafactual sintético (IC 95%: +14,5% a +33,7%), com dose-resposta: semanas com cinco ou mais dias de uso mostraram +50,1%. O previsor mais forte de adoção não foi técnico e sim social — pares de nível acima do gerente direto usando a ferramenta aumentavam em 216% a chance de experimentá-la.
- **Instrução como padrão aberto.** A Linux Foundation anunciou em 9 de dezembro de 2025 a **Agentic AI Foundation**, com MCP (Anthropic), goose (Block) e AGENTS.md (OpenAI) como contribuições fundadoras, oito membros platinum (AWS, Anthropic, Block, Bloomberg, Cloudflare, Google, Microsoft, OpenAI), mais de 10 mil servidores MCP publicados e AGENTS.md adotado por mais de 60 mil projetos abertos.
- **Especificação como artefato primário.** O Spec Kit do GitHub, aberto em setembro de 2025, organiza o trabalho em quatro fases — especificar, planejar, tarefas, implementar — e enuncia a inversão sem rodeio: *"Specifications don't serve code — code serves specifications"*, com a especificação como artefato primário e o código como sua expressão numa linguagem.
- **Orquestração de vários agentes em paralelo.** Uma comparação de nove orquestradores abertos (Agent Orchestrator, Emdash, Baton, família Conductor, Bernstein, Claude Squad, Crystal/Nimbalyst, Vibe Kanban, Agent Kanban) registra que **o git worktree virou a primitiva de isolamento consensual em cerca de dezoito meses**, e que a faixa prática testada é de três a seis agentes. Addy Osmani, escrevendo da prática, converge: três a cinco é o ponto ótimo, "não rode mais agentes do que você consegue revisar de verdade", com a recomendação de um revisor para cada três ou quatro construtores.
- **Um corpo de evidência empírica sobre PR de agente.** O conjunto AIDev reúne 932.791 pull requests agênticos. Sobre ele: de 9.799 PRs agênticos revisados por humano em repositórios com 500+ estrelas, 63,1% foram mesclados e 36,9% rejeitados; entre 364 PRs mesclados inspecionados manualmente, **79,1% não tiveram nenhum laço de realimentação** — nenhum comentário, nenhuma revisão, nenhuma correção.

### 3.2 O que existe e ainda não funciona

- **A revisão.** Num recorte de 40.214 PRs (6.618 humanos, 33.596 agênticos de Codex, Copilot, Cursor, Devin e Claude Code), **77,51% dos PRs agênticos mesclados têm o mesmo submetedor como integrador**, contra 57,63% dos humanos. Só 3,7% dos agênticos mesclados tiveram mais de três revisores. E o coeficiente que mais incomoda: cada comentário adicional de revisor **aumenta** em 2,7% a chance de merge de um PR humano e **reduz** em 2,8% a de um PR agêntico. Revisar PR de agente, na prática observada, é decidir descartar — não melhorar.
- **A confiança.** A pesquisa da Stack Overflow registra adoção recorde de 84% e confiança em queda para 29%, onze pontos abaixo de 2024; apenas 3% dizem confiar muito, e os desenvolvedores experientes são os mais céticos (2,6% de confiança alta, 20% de desconfiança alta). A frustração mais citada — por 66% — é a saída "quase certa, mas não".
- **O ganho individual.** O ensaio controlado randomizado da METR com 16 desenvolvedores experientes em 246 tarefas reais nos seus próprios repositórios (média acima de 22 mil estrelas e 1 milhão de linhas) mediu **19% de lentidão** com IA, enquanto os participantes previam 24% de ganho antes e estimavam 20% de ganho depois. A discrepância entre percepção e medida é a constatação, não o número.
- **A manutenibilidade.** GitClear e GitKraken analisaram 623 milhões de mudanças reais de 2023 a 2026: duplicação de bloco **+81%** (de 40,3 para 73,0 linhas duplicadas por milhão de linhas alteradas), cópia e colagem dentro do commit +41%, construções que mascaram erro +47%, churn de duas semanas +15%. Do outro lado: movimentação de código (o indicador de refatoração) caiu **de 21% em 2022 para 3,8% em 2026**, chamadas de função entre arquivos caíram 35% (de 343 para 223 por mil linhas alteradas), e manutenção de legado longo caiu 74% (de 1,7% em 2023 para 0,46% em 2026). A pesquisa anterior da mesma casa, sobre 211 milhões de linhas de 2020 a 2024, já registrava cópia e colagem subindo de 8,3% para 12,3% e refatoração caindo de 25% para menos de 10%.
- **A contribuição aberta.** O bug bounty da curl, aberto em abril de 2019, encerrou em 31 de janeiro de 2026. Confirmou 87 vulnerabilidades e pagou mais de 100 mil dólares; a taxa de confirmação, historicamente acima de 15%, caiu abaixo de 5% em 2025. Daniel Stenberg nomeia a causa em três partes — enxurrada de relatório gerado por IA, má-fé de quem torce qualquer achado em catástrofe, e custo mental de triar isso sem fim. O canal continua: sem pagamento.
- **A verificação por máquina.** Existe e converge em laboratório. O pipeline Forge extrai modelo formal de Java gerado por LLM e o roteia por três verificadores independentes (Dafny/Z3, FDR4, Isabelle/HOL), transformando falha de verificação em prompt de correção: **as 15 execuções convergiram em 2 a 3 iterações (mediana 2), contra 0 de 30 execuções de passe único** e 15 de 15 falhas na ablação que só compilava. O benchmark CLEVER existe para medir geração de código formalmente verificado ponta a ponta. Mas as linguagens de verificação são escassas no pré-treino, e o raciocínio composicional entre fronteiras de função é onde a taxa despenca.
- **A medida.** Os benchmarks de código estão desalinhados com engenharia de software agêntica, argumenta o position paper de 2026: pontuam o conjunto, premiam solução de referência única e não devolvem sinal por componente. Quem quiser saber se o agente melhorou — ou se o harness melhorou — não tem instrumento.

### 3.3 Quem constrói

Fabricantes de modelo e harness (Anthropic, OpenAI, Google, GitHub/Microsoft, JetBrains, AWS com Kiro, Block com goose); a camada de governança neutra (Agentic AI Foundation, sob a Linux Foundation, com 8 platinum, 19 gold e mais de 20 silver); a comunidade aberta de orquestração (os nove orquestradores que convergiram para git worktree em dezoito meses); a pesquisa empírica que mede o fenômeno (os trabalhos sobre o AIDev; a METR; GitClear/GitKraken); a academia que reorganiza o ensino (Brown, com o Agentic Studio; UIC, com US$ 1 milhão da NSF para cinco anos de redesenho; Iowa, com currículo novo em outono de 2026; Georgia Tech, com três estudos no SIGCSE 2026); e — recém-chegado e decisivo — o regulador europeu, com a Diretiva 2024/2853.

### 3.4 Números que descrevem a adoção hoje

| Medida | Valor | Fonte |
|---|---|---|
| Desenvolvedores usando agente ao menos semanalmente | 90% (68% diariamente) | JetBrains, mai–jul/2026, n>15.000 |
| Adoção de agente/ferramenta de IA em geral | 84% | Stack Overflow |
| Confiança na saída | 29% (3% "confia muito") | Stack Overflow |
| PRs agênticos no conjunto AIDev | 932.791 | AIDev |
| PRs agênticos mesclados com auto-merge | 77,51% (humanos: 57,63%) | estudo sobre 40.214 PRs |
| PRs agênticos mesclados sem nenhum laço de realimentação | 79,1% de 364 inspecionados | estudo sobre 9.799 PRs |
| Ganho de PRs mesclados por adotante de CLI | +24% (IC 95%: +14,5% a +33,7%) | Microsoft, jan–abr/2026 |
| Efeito individual medido em ECR | −19% de velocidade | METR, 16 devs, 246 tarefas |
| Movimentação de código (refatoração) | 3,8% em 2026 (21% em 2022) | GitClear, 623 M de mudanças |
| Projetos abertos com AGENTS.md | >60.000 | Linux Foundation |

**Nota sobre o Brasil.** Não abri nenhuma fonte brasileira com número nesta rodada. As duas candidatas — o *Relatório de Carreiras em Programação 2026* da Rocketseat (mais de 20 mil desenvolvedores, segundo resumos de busca) e a reportagem do IT Forum sobre ele — devolveram HTTP 403 às duas tentativas de leitura. **Sem número encontrado para o Brasil**, portanto; as buscas estão registradas na seção 12 e nenhuma afirmação deste mapa sobre o Brasil se apoia em medida — apenas em mecanismo, e assim está declarado onde aparece (e15.1.1).

## 4. As disrupções-raiz

### 4.0 Candidatos recusados como raiz

**"O agente que age no repositório" — recusado.** Passa nas perguntas 1 e 2 (rompe a proporcionalidade entre volume de código e tempo humano; a pré-condição nova é a sessão longa com ferramentas mais o sandbox mais o harness de terminal). **Falha na pergunta 3:** 90% de uso semanal e 68% diário entre profissionais é *maioria*, com folga. Pela régua da disciplina — se dá para fazer com o que já é comum em produto de massa, é maduro — ele é contexto, e está na seção 3, não aqui. Isto é uma diferença deliberada em relação a mapas anteriores deste mesmo tema: o que era raiz em 2026 amadureceu, e o mapa precisa acompanhar em vez de reciclar.

**"Autocompletar de IDE" e "chat que explica código" — recusados.** Maduros desde antes de 2024; não rompem nada, melhoram o que já havia.

**"Vibe coding" — recusado como raiz, mantido como efeito.** É um nome popular para o uso do agente por quem não programa. Rompe quem é autor, mas o mecanismo que o produz é a raiz R1 (a instrução empacotada) somada ao agente maduro. Entra como efeito, não como origem.

### 4.1 R1 — A instrução empacotada vira o artefato de software versionado

Aquilo que o humano escreve deixa de ser a implementação e passa a ser a **especificação executável mais o arcabouço que a executa**: skill, harness, plano, arquivo de contexto. O código é gerado; a instrução é a obra.

1. **O que rompe.** A identidade, vigente desde que existe controle de versão, entre "o código-fonte" e "o que o autor escreveu". Rompe o diff como prova do que foi feito, a autoria como quem digitou, a licença como algo que recai sobre o texto executável, e o ensino como transmissão de sintaxe. O Spec Kit enuncia a inversão: a especificação é o artefato primário, o código é sua expressão numa linguagem.
2. **Por que agora, e não há cinco anos.** Porque a instrução virou formato com dono e portabilidade: Agent Skills publicado como padrão aberto em 18 de dezembro de 2025; 32 ferramentas de empresas concorrentes lendo o mesmo SKILL.md da mesma estrutura de diretórios até março de 2026; AGENTS.md doado à Agentic AI Foundation em dezembro de 2025 com 60 mil projetos adotantes; Agent Plugins 1.0 em 6 de agosto de 2026 como formato de pacote neutro de fabricante. Em 2021 não havia agente que carregasse instrução sob demanda, nem formato comum para escrevê-la.
3. **Onde está na difusão.** **Produto de nicho passando a adoção precoce.** O formato existe, é aberto, e é lido por dezenas de clientes — mas a prática de *revisar, versionar, testar e depreciar* instrução ainda é de uma minoria.
4. **O que ainda falta acontecer.** Um formato de pacote único que vença os concorrentes; ferramenta de diff e revisão para instrução (hoje se revisa código, não prompt); medida — não há benchmark que diga se uma skill é boa; um regime de licença e autoria que diga de quem é a saída; e, sobretudo, disciplina de manutenção: skill velha é dívida técnica invisível.
5. **Quem bloqueia.** Os fabricantes de harness, que têm incentivo econômico para que a skill não seja perfeitamente portátil — a portabilidade elimina o lock-in. A Agentic AI Foundation é exatamente a tentativa de neutralizar esse incentivo; o bloqueio, se vencer, aparece como fragmentação de formato e "extensões proprietárias" que só um cliente entende (efeito e5).

### 4.2 R2 — A assimetria entre produzir e verificar deixa de ser custo e vira omissão

Gerar caiu perto de zero. Verificar não caiu. A novidade de 2026 não é que a revisão ficou cara: é que ela está sendo **pulada** em vez de feita, e há número para isso.

1. **O que rompe.** O pull request como pedido de leitura; a revisão por pares como garantia; o bug bounty como mecanismo de segurança de software aberto; a métrica de produtividade baseada em volume entregue; e a dívida técnica como algo que alguém contraiu sabendo. Quando 79,1% dos PRs agênticos mesclados não têm nenhum comentário e 77,51% são auto-mesclados, o rito continua e a função morreu.
2. **Por que agora, e não há cinco anos.** Por volume e por composição. Volume: 932.791 PRs agênticos no AIDev; adotantes de CLI mesclando 24% mais PRs. Composição: PR de agente não tem intenção humana por trás — o revisor precisa reconstruir um raciocínio que nunca existiu. O coeficiente invertido (comentário de revisor reduz a chance de merge do PR agêntico em 2,8% e aumenta a do humano em 2,7%) é o sinal duro de que o trabalho de revisar mudou de natureza: virou triagem de descarte.
3. **Onde está na difusão.** **Adoção precoce.** O auto-merge está medido, mas não é ainda a norma declarada de nenhuma grande organização; a maioria ainda diz que revisa.
4. **O que ainda falta acontecer.** Que a verificação tenha custo obrigatório — por regulação (R3), por seguro, ou por barateamento da prova (R4). Falta também instrumento: nenhum painel de engenharia hoje mede "quanto do que entrou ninguém leu". E falta um lugar institucional para o revisor, que hoje é tarefa de quem sobra.
5. **Quem bloqueia.** A gerência de engenharia, cujo painel mede PRs mesclados e tempo de ciclo — os dois números que a adoção de agente melhora imediatamente. Trocar a métrica é admitir que o ganho reportado era parcial. O bloqueio aparece como atraso na adoção de métrica de verificação (efeito e6.1) e como resistência a qualquer medida de taxa de descarte (e10.1).

### 4.3 R3 — A responsabilidade estrita sobre software como produto

A Diretiva 2024/2853 da União Europeia entra em vigor em **9 de dezembro de 2026** e classifica software como produto — embarcado, autônomo ou entregue como serviço, incluindo firmware, aplicações, sistemas de IA e arquivos de manufatura digital — sujeito a responsabilidade objetiva.

1. **O que rompe.** A cláusula "as is", que é o eixo econômico do software desde que ele existe como mercadoria. Rompe também a distância entre quem escreve e quem responde: o tribunal pode **presumir o defeito ou o nexo causal** quando a complexidade técnica cria dificuldade excessiva de prova, e a empresa é obrigada a exibir a evidência relevante de forma acessível e compreensível diante de alegação plausível. Descumprir obrigação de cibersegurança do CRA ou do AI Act passa a fundamentar a presunção de defeito.
2. **Por que agora, e não há cinco anos.** Porque a norma é nova e porque o fato que ela encontra é novo. Em 2021 o software era serviço com cláusula de exclusão; em dezembro de 2026 é produto com responsabilidade objetiva — e, ao mesmo tempo, uma parte crescente dele é escrita por um processo cujo rastro ninguém guarda. A conjunção é o que rompe: a lei pede prova de diligência exatamente quando a diligência deixou de ser exercida.
3. **Onde está na difusão.** **Norma publicada, sem jurisprudência** — o equivalente a "demo pública" no vocabulário desta escala. Toda a cadeia derivada carrega confiança média ou baixa por isso.
4. **O que ainda falta acontecer.** A primeira condenação; a definição prática de quem é o "fabricante" quando o código veio de um agente de terceiro sobre uma skill de um quarto; um mercado de seguro que precifique o risco; e a resposta à pergunta de fronteira — o projeto aberto mantido por voluntário foi "colocado no mercado"?
5. **Quem bloqueia.** A indústria de software e as grandes plataformas, com incentivo para empurrar a responsabilidade para o implantador e não para o fabricante. O bloqueio aparece como cláusula contratual de transferência de risco para o cliente (e12.1) e como pressão para interpretar "colocação no mercado" do modo mais estreito possível.

### 4.4 R4 — A verificação por máquina entra no laço do agente

Se o gargalo é ler, há dois caminhos: ler mais rápido, ou parar de precisar ler. A verificação mecanizada — prova formal, propriedade executável, evidência derivada — é o segundo.

1. **O que rompe.** A ideia de que verificar é ler. Rompe o teste como artefato escrito por humano, o QA como fase do processo, e a divisão entre "linguagem em que se escreve" e "linguagem em que se prova". Rompe também a hierarquia do ofício: quem sabe enunciar o invariante passa a valer mais que quem sabe implementá-lo.
2. **Por que agora, e não há cinco anos.** Porque a realimentação fechou o laço. O Forge mostra a diferença: 0 de 30 execuções de passe único convergiram; com falha de verificação convertida em diretiva de correção, 15 de 15 convergiram em 2 a 3 iterações, sem crescimento do número de iterações com a complexidade do sistema. Em 2021, gerar código e verificá-lo formalmente eram dois mundos que não se falavam.
3. **Onde está na difusão.** **Laboratório passando a demo pública.** Por isso toda a cadeia derivada de R4 carrega `confianca: baixa` — e é a raiz mais provável de não se concretizar no horizonte.
4. **O que ainda falta acontecer.** Barateamento da especificação formal (escrever o invariante é hoje mais difícil que escrever a função); resolver o raciocínio composicional entre fronteiras de função, que é onde a taxa despenca; presença das linguagens verificadas no pré-treino, hoje escassa; e integração no harness comercial — hoje o verificador é projeto de pesquisa, não item de menu.
5. **Quem bloqueia.** Os próprios desenvolvedores. Para quem já escreve código depressa com agente, escrever especificação formal é trabalho a mais com ganho invisível. O bloqueio aparece como confinamento: a verificação fica no núcleo pequeno e não sai dele (e19, e19.1).

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A instrução empacotada vira o artefato de software versionado (skill, harness, especificação)
    efeitos:
      - id: e1
        ordem: 1
        efeito: O repositório passa a ter dois códigos-fonte, o que roda e o que instrui, e o segundo entra sem revisão
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O conflito entre instrução e teste vira uma classe própria de defeito, e nasce ferramenta para analisar instrução como se analisa código
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Auditoria de software passa a exigir o pacote de instruções junto do código, porque o diff deixou de provar o que foi feito
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A autoria se descola do executável, porque o texto que dirigiu a geração é atribuível e a saída gerada não é
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A disputa de plágio de software muda de objeto e passa a comparar especificações, não trechos de implementação
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O arquivo de instrução vira superfície de distribuição, e quem publica uma skill distribui comportamento em vez de função
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Marcas passam a licenciar skills como licenciam fontes tipográficas e componentes, com contrato de uso e versão suportada
            sinal: fraco
            prazo: 2032
            confianca: baixa
      - id: e3
        ordem: 1
        efeito: O sistema de design deixa de ser documento para humanos e vira pacote executável que o agente carrega antes de gerar a peça
        sinal: fraco
        prazo: 2030
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A qualidade de um sistema de design passa a ser medida pela taxa de conformidade do agente que nunca leu o guia
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A quebra de identidade de marca vira falha de conformidade detectável por máquina, e não julgamento de diretor de arte
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: A competência remunerada desloca-se de escrever implementação para escrever especificação verificável
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Departamentos de computação movem a disciplina introdutória de sintaxe para especificação e correção de programa
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O diploma de computação perde o monopólio de sinalização e concorre com portfólios de especificações verificadas
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A proliferação de instruções conflitantes degrada o desempenho do agente e cria um custo de curadoria que freia a adoção de skills
        sinal: fraco
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Organizações criam o posto de curador do pacote de instruções, e o remuneram como infraestrutura e não como criação
            sinal: fraco
            prazo: 2032
            confianca: baixa

  - disrupcao: A assimetria entre produzir e verificar deixa de ser custo e vira omissão
    efeitos:
      - id: e6
        ordem: 1
        efeito: O pull request deixa de ser pedido de leitura e vira registro de passagem, com o autor aprovando a si mesmo
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A métrica de engenharia baseada em volume entregue perde sentido e é substituída por métrica de verificação
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A progressão de carreira em engenharia deixa de subir por volume produzido e passa a subir por sistema pelo qual se responde
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Compradores corporativos passam a exigir prova de que um humano leu, e o atestado de revisão humana vira item de contrato
            sinal: fraco
            prazo: 2032
            confianca: media
      - id: e7
        ordem: 1
        efeito: A revisão humana migra de ler o diff para aprovar a evidência produzida por outra máquina
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: A interface de revisão é reprojetada em torno do contraexemplo, e deixa de exibir o que mudou para exibir o que quebra
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Revisar vira especialização paga acima de construir, invertendo a hierarquia do ofício
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Projetos abertos fecham o canal de entrada e passam a exigir credencial, custo ou convite para aceitar contribuição de estranho
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O software livre se bifurca entre projetos fechados à contribuição externa e projetos que aceitam tudo, com diferença mensurável de qualidade
            sinal: fraco
            prazo: 2032
            confianca: baixa
      - id: e9
        ordem: 1
        efeito: A dívida técnica deixa de ser dívida contraída e vira passivo desconhecido, porque duplicar ficou mais barato que reusar
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O custo de manter software sobe mais rápido que o de produzi-lo, e descartar e regerar passa a ser a decisão racional
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A compatibilidade retroativa deixa de ser promessa comercial, porque o fornecedor regera em vez de manter
                sinal: fraco
                prazo: 2035
                confianca: baixa
              - id: e9.1.2
                ordem: 3
                efeito: O custo energético de regerar em vez de manter vira linha visível no orçamento de tecnologia e atrai escrutínio ambiental
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: A desconfiança medida freia a delegação, e o desenvolvedor experiente delega menos do que poderia porque paga o custo do erro
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Times passam a medir quanto do que o agente entregou foi descartado, e a taxa de descarte vira número de gestão
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Aparece uma classe de ferramenta que se vende por produzir menos código, e não mais
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: Nasce um mercado de auditoria de processo, em que o produto vendido é o rastro do que o agente fez e não o código que ele deixou
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: O rastro de execução do agente vira o artefato arquivado para fins de auditoria e reprodução, no lugar do código
            sinal: fraco
            prazo: 2032
            confianca: baixa

  - disrupcao: A responsabilidade estrita sobre software como produto (Diretiva 2024/2853, em vigor em 9 de dezembro de 2026)
    efeitos:
      - id: e12
        ordem: 1
        efeito: Quem publica software na União Europeia responde objetivamente pelo defeito, e a cláusula de exclusão de garantia deixa de proteger
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Contratos de desenvolvimento passam a nomear quem responde pelo que o agente escreveu, e a ferramenta deixa de ser resposta aceitável
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: A primeira condenação por defeito em software gerado por agente reorganiza a prática contratual do setor inteiro
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: Surge seguro de responsabilidade para software gerado por agente, com prêmio atrelado à evidência de verificação apresentada
            sinal: fraco
            prazo: 2032
            confianca: baixa
      - id: e13
        ordem: 1
        efeito: A cadeia de fornecimento passa a exigir procedência do código, dizendo de que agente veio e sob que instrução
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: O inventário de componentes ganha colunas de autoria de máquina, registrando agente, versão de instrução e verificação aplicada
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: A exigência de procedência migra do código para a mídia, e o mesmo metadado que diz quem gerou a função diz quem gerou a imagem e o som
                sinal: fraco
                prazo: 2034
                confianca: media
      - id: e14
        ordem: 1
        efeito: O incidente causado por agente autônomo deixa de ser anedota e vira categoria de sinistro com nome, apuração e estatística próprias
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: Plataformas passam a exigir identidade verificável do agente antes de aceitar escrita em produção, e a credencial do agente vira objeto de gestão
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: A identidade de agente vira infraestrutura pública, com registro, emissão e revogação à maneira dos certificados digitais
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e15
        ordem: 1
        efeito: O custo de conformidade empurra publicadores pequenos e projetos voluntários para fora do mercado europeu, reduzindo a variedade da oferta
        sinal: fraco
        prazo: 2031
        confianca: media
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: Projetos abertos passam a declarar explicitamente que não foram colocados no mercado, e a fronteira entre hobby e produto vira decisão jurídica consciente
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: Jurisdições sem responsabilidade estrita viram destino de arbitragem regulatória para software gerado por agente, e o Brasil está entre elas
                sinal: fraco
                prazo: 2034
                confianca: baixa

  - disrupcao: A verificação por máquina entra no laço do agente (prova formal, propriedade executável, evidência derivada)
    efeitos:
      - id: e16
        ordem: 1
        efeito: Escrever a propriedade que deve valer passa a valer mais que escrever a função que a realiza
        sinal: fraco
        prazo: 2032
        confianca: baixa
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: Linguagens com verificação embutida ganham tração porque a realimentação de prova compensa a escassez delas no pré-treino
            sinal: fraco
            prazo: 2033
            confianca: baixa
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: Projetar interação passa a incluir declarar invariantes da experiência, que deixam de ser recomendação de guia e viram propriedade verificável
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e17
        ordem: 1
        efeito: O teste deixa de ser escrito por humano e passa a ser derivado da especificação, e o oráculo vira o artefato caro
        sinal: fraco
        prazo: 2031
        confianca: baixa
        efeitos:
          - id: e17.1
            ordem: 2
            efeito: O controle de qualidade deixa de ser fase do processo e vira etapa de compilação, respondendo antes de qualquer humano olhar
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e17.1.1
                ordem: 3
                efeito: O ensino de programação troca a avaliação de código escrito pela avaliação de especificação correta
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e18
        ordem: 1
        efeito: Domínios regulados adotam agente antes dos demais, porque já possuem montado o aparato de evidência que a verificação exige
        sinal: fraco
        prazo: 2031
        confianca: media
        efeitos:
          - id: e18.1
            ordem: 2
            efeito: A evidência formal exigida em domínio regulado vaza para software comum através da ferramenta compartilhada
            sinal: fraco
            prazo: 2034
            confianca: baixa
      - id: e19
        ordem: 1
        efeito: O custo de escrever especificação formal e a queda do raciocínio composicional mantêm a verificação por máquina confinada a núcleos pequenos
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e19.1
            ordem: 2
            efeito: O software se parte entre um núcleo provado, pequeno e caro, e uma periferia gerada, grande e descartável
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e19.1.1
                ordem: 3
                efeito: A periferia descartável acumula falhas que ninguém consegue atribuir, e a atribuição de causa vira o serviço caro
                sinal: fraco
                prazo: 2036
                confianca: baixa
```

### 5.1 Os mecanismos, um a um

O bloco acima diz *o quê*. Aqui vai o *porque*, que é a única coisa que impede uma roda de ser lista de palpites. A forma é sempre a mesma: **porque o efeito pai faz tal coisa**.

**R1 — a instrução como artefato.**
`e1` porque a instrução entrou no repositório pela porta de serviço: AGENTS.md e SKILL.md são arquivos de texto que ninguém configurou o CI para testar, e 60 mil projetos já têm um. `e1.1` porque, tendo dois códigos-fonte que podem discordar, a discordância vira defeito com causa própria — o agente fez o que a skill mandou e não o que o teste pedia — e defeito com causa própria sempre atrai ferramenta. `e1.1.1` porque a auditoria pergunta "o que foi feito e por quê", e o diff responde só à primeira metade quando a segunda mora num arquivo de instrução versionado à parte. `e1.2` porque o texto que dirigiu a geração tem autor identificável e a saída gerada não tem, o que separa em dois objetos o que a licença de software tratava como um. `e1.2.1` porque, separados os dois objetos, comparar implementações gerada por máquina deixa de dizer alguma coisa sobre cópia, e a comparação útil passa a ser entre as instruções. `e2` porque um formato portátil lido por 32 clientes é, por definição, um canal de distribuição — e Agent Plugins 1.0, ao empacotar skill e configuração de servidor no mesmo diretório, fecha o pacote. `e2.1` porque o que se distribui é comportamento reprodutível com identidade dentro, e é exatamente isso que a indústria já sabe licenciar em fonte tipográfica. `e3` porque o agente não lê o guia de estilo: para que a peça saia na identidade certa, a identidade precisa estar num arquivo que ele carregue — o mesmo movimento que levou o *design token* do PDF para o CSS, uma ordem de grandeza adiante. `e3.1` porque, uma vez que o agente é o executor majoritário, a pergunta útil sobre um sistema de design deixa de ser se ele é claro para um humano e passa a ser qual a taxa de acerto de quem nunca o leu. `e3.1.1` porque uma taxa de conformidade medível transforma um julgamento estético num limiar, e limiar é coisa que dispara alerta. `e4` porque, se o código é gerado, o insumo escasso é o enunciado — é a inversão que o Spec Kit escreve na primeira linha. `e4.1` porque os departamentos já começaram: Iowa colocou "correção de programa" na sequência introdutória a partir do outono de 2026, UIC recebeu US$ 1 milhão da NSF para redesenhar quatro disciplinas de programação ao longo de cinco anos, e Brown pôs 20 alunos (de 80 candidatos) num estúdio agêntico. Este efeito só entra por ter nome de instituição — sem isso seria "os cursos se reorganizam", que é o efeito genérico que esta skill proíbe. `e4.1.1` porque o diploma sinaliza capacidade de produzir, e a capacidade que passa a importar tem evidência própria, verificável e pública. `e5` porque instrução acumulada é contexto acumulado, e contexto acumulado conflitante piora a saída — é o mesmo mecanismo de qualquer base de configuração que ninguém poda. `e5.1` porque custo recorrente de curadoria com dono difuso sempre termina em posto formal, e postos criados para evitar degradação são orçados como infraestrutura.

**R2 — a assimetria.**
`e6` porque o volume passou do que cabe numa fila de leitura humana, e o caminho de menor resistência é a aprovação própria: 77,51% de auto-merge contra 57,63% dos humanos é a medida disso acontecendo. `e6.1` porque uma métrica que o agente melhora sozinho (PRs mesclados) deixa de discriminar times, e métrica que não discrimina é substituída. `e6.1.1` porque a escada de senioridade estava calibrada em volume, e removido o volume sobra a única coisa que o agente não assume: responder pelo resultado. `e6.2` porque a responsabilidade objetiva de R3 cria a pergunta "quem leu isto", e toda pergunta contratual vira cláusula. `e7` porque, sendo impossível ler tudo, o revisor lê o que a máquina destacou — o mesmo movimento que levou o teste manual a virar suíte automatizada com portão no PR. `e7.1` porque a unidade de informação útil deixa de ser a mudança e passa a ser a violação: diff é a resposta errada para "isto quebra alguma coisa". Este é o efeito mais diretamente endereçado a quem projeta interação: há uma interface inteira a ser desenhada aqui. `e7.1.1` porque o escasso é o que se paga, e o que ficou escasso é o julgamento com contexto de sistema inteiro. `e8` porque o canal aberto virou vetor de custo sem retorno: curl recebeu abaixo de 5% de confirmação em 2025 contra mais de 15% historicamente, e fechou a bolsa em 31 de janeiro de 2026. `e8.1` porque a decisão de fechar ou não fechar separa dois regimes de manutenção, e regimes separados divergem de qualidade de forma mensurável. `e9` porque duplicar é local e reusar é global: o agente que enxerga o arquivo e não o sistema escolhe duplicar — daí duplicação +81% e movimentação de código de 21% para 3,8%. `e9.1` porque manter exige entender, e entender voltou a ser caro, enquanto regerar a partir da especificação ficou barato. `e9.1.1` porque quem regera não tem obrigação de reproduzir o comportamento antigo, e a promessa de compatibilidade pressupõe continuidade do artefato. `e9.1.2` porque regerar consome inferência e inferência consome energia, e custo recorrente visível atrai escrutínio — é o caminho que o consumo dos centros de dados já percorreu. `e10` porque quem responde pelo erro desconta o risco: 2,6% de confiança alta e 20% de desconfiança alta entre os experientes é a medida desse desconto, e a METR mostra por que ele é racional. `e10.1` porque, uma vez que o descarte é frequente, medi-lo é a única forma de saber o ganho líquido — e o ganho líquido é o que a diretoria pergunta. `e10.1.1` porque um número de descarte publicado cria espaço comercial para quem prometa o contrário do volume. `e11` porque o que aconteceu dentro da sessão do agente não está no commit, e tudo que não está no registro e importa vira produto. `e11.1` porque o que se guarda é o que prova, e o código deixou de provar como chegou ali.

**R3 — a responsabilidade estrita.**
`e12` porque a diretiva inclui software autônomo e entregue como serviço na definição de produto, e responsabilidade objetiva não admite exclusão contratual por cláusula padrão. `e12.1` porque, havendo responsabilidade sem culpa, o contrato passa a ser o único lugar onde se distribui risco, e risco não nomeado fica com quem publicou. `e12.1.1` porque prática contratual muda por precedente, não por leitura de diretiva — foi assim com o consentimento no GDPR. `e12.2` porque risco quantificável e recorrente é definição de mercado segurável, e a evidência de verificação é a única variável que o segurado controla. `e13` porque a diretiva obriga a exibir evidência de forma acessível diante de alegação plausível, e não se exibe o que não se registrou. `e13.1` porque o inventário de componentes já é o lugar onde procedência de software mora, e acrescentar coluna é mais barato que criar registro novo. `e13.1.1` porque a infraestrutura de procedência não distingue tipo de arquivo: uma vez montada para código, o custo marginal de aplicá-la a imagem, som e texto é quase zero — e há um padrão de credenciais de conteúdo esperando por isso. `e14` porque um incidente atribuído a agente já existe com data, número e resposta institucional (as invasões de julho de 2026, com 17.600 ações de rede num único alvo), e fenômeno recorrente com nome vira categoria de apuração. `e14.1` porque a plataforma que aceita escrita de um ator não identificado assume o risco dele, e assumir risco de terceiro anônimo é o que nenhuma plataforma faz por muito tempo. `e14.1.1` porque identidade que precisa ser emitida, verificada e revogada em escala já tem uma forma institucional conhecida, e ela é a autoridade certificadora. `e15` porque conformidade tem custo fixo, e custo fixo elimina o pequeno antes do grande. `e15.1` porque a fronteira "colocado no mercado" decide a aplicação da diretiva, e projetos que não querem ser produto vão dizê-lo por escrito. `e15.1.1` porque diferença de regime entre jurisdições é, por definição, oportunidade de arbitragem — e este é o único efeito deste mapa que fala do Brasil, sustentado por mecanismo e não por medida, porque **não abri nenhuma fonte brasileira com número nesta rodada**.

**R4 — a verificação por máquina.**
`e16` porque, quando a geração é barata e a prova é o gargalo, o insumo que determina o resultado é o enunciado da propriedade — o Forge é a demonstração mínima disso, com 0 de 30 em passe único e 15 de 15 com realimentação. `e16.1` porque a escassez no pré-treino deixa de ser impedimento quando o verificador devolve erro estruturado a cada iteração: o modelo não precisa saber a linguagem, precisa de um professor que corrija. `e16.1.1` porque quem projeta interação já escreve regras absolutas — "nunca mostre isto depois daquilo" — e a única coisa que faltava era um lugar onde a máquina pudesse conferi-las. `e17` porque teste derivado de especificação não pode ser mais confiável que a especificação, o que desloca o custo para o oráculo. `e17.1` porque uma verificação barata e automática o suficiente sempre é empurrada para antes do humano — foi o que aconteceu com o tipo estático e com o linter. `e17.1.1` porque a avaliação segue o artefato: se o artefato do aluno é a especificação, avaliar código escrito passa a medir a coisa errada — e é isso que Georgia Tech aponta ao mostrar, num ensaio randomizado com 178 alunos, que dicas de IA aumentaram o tempo de tentativa sem ganho claro de aprendizagem no período. `e18` porque DO-178C, IEC 61508 e ISO 26262 já obrigam a produzir evidência: para esses domínios, acoplar um agente a um verificador é reduzir custo de algo que já se paga. `e18.1` porque ferramenta construída para o caso caro é vendida para o caso barato assim que amortiza. `e19` porque a verificação composicional entre fronteiras de função é justamente onde o desempenho despenca, e software real é composição. `e19.1` porque, sendo a prova cara e o código barato, o equilíbrio econômico é provar pouco e gerar muito. `e19.1.1` porque falha em artefato que ninguém leu, ninguém provou e ninguém guardou o rastro é falha sem causa recuperável — e recuperar causa perdida é o trabalho mais caro que existe em engenharia.

### 5.2 As classes de referência usadas para datar

Prazo sem classe de referência é chute. Estas são as que usei, e o leitor pode discordar de cada uma:

| Classe | O que levou quanto tempo | Onde apliquei |
|---|---|---|
| Integração contínua com portão obrigatório no PR | de ferramenta disponível (2005) a norma tácita (~2015): cerca de 10 anos | `e7` (2030), `e17.1` (2032) — a revisão virar aprovação de evidência segue o mesmo caminho que o teste virar portão |
| Inventário de componentes de software (SBOM) | da ordem executiva 14028 (maio/2021) a adoção ainda parcial em 2026: 5 anos sem maioria | `e13` (2030), `e13.1` (2031) — procedência é lenta mesmo quando obrigatória |
| GDPR | aplicável em maio/2018, primeiras multas grandes em 2019, doutrina estabilizada por volta de 2022: 4 a 5 anos | `e12` (2028), `e12.1.1` (2033) — contado a partir de dezembro de 2026 |
| Controle de versão distribuído | de lançamento (2005) a padrão de fato em código aberto (~2013): 8 anos | `e1` a `e2` (2029) — convenção de infraestrutura demora quase uma década para virar default |
| Credenciais de conteúdo em mídia | especificação em 2021, adoção parcial em 2026 | `e13.1.1` (2034) — e é por isso que este é 3ª ordem e não 2ª |
| Análise estática e linter | décadas até virar padrão, e ainda parcial | `e19` (2029) — a razão de a verificação formal ficar confinada |
| Telefone inteligente (4 anos de demo a 10%) versus RV de consumo (mais de 10 anos e ainda não) | o par que limita o otimismo | usado para *rejeitar* prazos: nada em R4 antes de 2031 |

### 5.3 Cobertura por STEEP e por quem perde

- **Social:** `e4.1`, `e4.1.1`, `e6.1.1`, `e7.1.1`, `e8`, `e17.1.1`.
- **Tecnológico:** `e1`, `e1.1`, `e7.1`, `e13.1`, `e16`, `e16.1`, `e17`, `e19`.
- **Econômico:** `e2`, `e2.1`, `e9.1`, `e10.1`, `e11`, `e12.2`, `e15`, `e19.1`.
- **Ecológico:** `e9.1.2` — **uma só**. A categoria ficou quase vazia e está registrado que ficou: o consumo de inferência é o único caminho ecológico que consegui ligar a este tema por mecanismo, e forçar mais seria inventar.
- **Político e regulatório:** `e12`, `e12.1`, `e14`, `e14.1`, `e14.1.1`, `e15`, `e15.1`, `e15.1.1`.

**Quem perde, nomeadamente.** O júnior que entrava pela tarefa pequena (entrada de 22 a 25 anos caiu perto de 20% do pico de fins de 2022 até julho de 2025; postagens de estágio em tecnologia caíram 30% desde 2023; 70% dos gestores dizem que a IA faz o trabalho de estagiário) — `e4.1.1`, `e6.1.1`. O mantenedor voluntário de projeto aberto, que paga em atenção o custo de triar o que a máquina gerou — `e8`, `e8.1`. O revisor sem poder de recusa, que herda o trabalho de reconstruir uma intenção que não existiu — `e7.1.1`. O publicador pequeno na Europa — `e15`. A linguagem sem massa de pré-treino — `e16.1`, por inversão. E a empresa cujo ativo era o estoque de código — `e9.1`, `e9.1.1`.

### 5.4 Cruzamentos

**Convergência 1 — o objeto guardado deixa de ser o código.** `e11.1` (o rastro do agente vira o artefato arquivado) vem de R2, por desistência: ninguém leu, então o que resta como prova é o registro. `e13.1` (o inventário ganha colunas de autoria de máquina) vem de R3, por obrigação legal. Duas raízes independentes, o mesmo efeito de 2ª ordem — e é o achado mais valioso deste mapa. Se as duas chegarem juntas, entre 2031 e 2032 o artefato que uma organização arquiva para provar o que fez deixa de ser o repositório e passa a ser o diário de execução.

**Convergência 2 — a leitura humana sai do laço por dois caminhos opostos.** `e7` (a revisão vira aprovação de evidência, R2) chega lá por incapacidade de acompanhar o volume; `e17.1` (o controle de qualidade vira etapa de compilação, R4) chega lá por substituição competente. O destino é o mesmo e o significado é oposto: no primeiro caso ninguém garante nada, no segundo a garantia é melhor do que era. **Qual dos dois caminhos vence é, na minha leitura, a pergunta central deste tema para a próxima década** — e é exatamente o que o experimento da seção 10 tenta tocar.

**Retroalimentação positiva (acelera a raiz).** `e9.1` (descartar e regerar) devolve mais volume a R2, que torna a leitura ainda mais impossível, que torna o descarte ainda mais racional. Ciclo fechado, sem freio interno: o único freio vem de fora, de R3 (responsabilidade) ou de R4 (prova barata).

**Retroalimentação negativa (freia a raiz).** `e5` (instruções conflitantes degradam o agente) freia R1 por dentro; `e10` (desconfiança medida) freia R2 por dentro; `e15` (custo de conformidade) freia R3 por dentro, ao reduzir quem se sujeita a ela; `e19` (composicionalidade) freia R4 por dentro. Cada raiz tem o seu, por construção — roda só com aceleração é propaganda.

**Contradição 1, não resolvida.** `e9.1` diz que a decisão racional é descartar e regerar. `e13.1` e `e12` dizem que é preciso provar procedência e responder pelo defeito de um artefato específico. Regerar destrói a coisa sobre a qual se responde. Não resolvo: **o que decide é se o custo de provar a procedência de um artefato efêmero cai abaixo do custo de mantê-lo estável.** Se cair, ganha o descarte; se não cair, a responsabilidade reintroduz a manutenção pela porta jurídica — e esse seria o efeito mais irônico de todo este mapa.

**Contradição 2, não resolvida.** `e8` diz que os projetos abertos fecham o canal de entrada. `e2` diz que a instrução empacotada vira superfície aberta de distribuição. Ou a abertura se desloca do código para a instrução — e aí o problema de triagem se desloca junto, intacto — ou a skill nasce com o controle de admissão que o pull request perdeu. Não há evidência hoje que decida.

### 5.5 Onde parei de derivar, e por quê

A regra de parada é troca de ator ou de mecanismo. Parei em `e2.1`, `e6.2`, `e8.1`, `e11.1` e `e18.1` porque o nível seguinte que eu conseguia escrever era o mesmo efeito mais adiante no tempo, com o mesmo ator — "e aí as licenças de skill ficam mais comuns", "e aí mais empresas exigem o atestado". Isso é amadurecimento, não outra ordem. Preferi parar e registrar a que inflar a contagem.

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

**SF1 — O coeficiente invertido da revisão.** Onde foi visto: no estudo de 40.214 PRs, cada comentário adicional de revisor aumenta a chance de merge de um PR humano em 2,7% e **reduz** a de um PR agêntico em 2,8%. O que isso muda no mapa: se o sinal se confirmar em outras bases, revisar PR de agente não é colaborar — é decidir jogar fora, e todo o vocabulário de "revisão" está errado. O sinal observável de crescimento: o aparecimento, em qualquer ferramenta de plataforma, de um botão que não seja "aprovar" nem "pedir mudanças", e sim "descartar e regerar".

**SF2 — O auto-merge a 77,51%.** Onde foi visto: mesmo estudo, contra 57,63% em PRs humanos. O que muda: é a medida direta de a verificação estar sendo pulada, não feita. Sinal observável: a razão passar de 85%, ou — no sentido contrário — a primeira grande plataforma proibir por política que um agente mescle o próprio PR.

**SF3 — A movimentação de código em 3,8%.** Onde foi visto: GitClear/GitKraken, 623 milhões de mudanças, contra 21% em 2022. O que muda: refatorar é o ato de entender o que já existe; abaixo de um certo piso, a prática deixou de existir na indústria. Sinal observável: cair abaixo de 2%, ou — o contrário — o aparecimento de uma métrica de "reuso" nos painéis comerciais de engenharia, o que indicaria reação.

**SF4 — A instrução com formato de pacote e política de versão.** Onde foi visto: Agent Plugins 1.0, publicado em 6 de agosto de 2026, empacotando skill e configuração de servidor no mesmo diretório para cinco clientes. O que muda: é a condição material de `e2` e `e2.1`. Sinal observável: um registro público de skills com versionamento semântico e política de depreciação declarada; ou a primeira disputa de licença sobre uma skill.

**SF5 — Ferramentas para inspecionar o que o agente fez.** Onde foi visto: na própria camada de orquestração que converge para git worktree em dezoito meses, e no fato de os nove orquestradores abertos avaliados diferirem sobretudo no eixo de coordenação e aprovação. O que muda: é o embrião de `e11`. Sinal observável: uma exigência contratual de rastro de agente num contrato público de fornecimento, ou uma norma técnica em elaboração.

**SF6 — A realimentação de prova que converge.** Onde foi visto: Forge, 15 de 15 execuções convergindo em 2 a 3 iterações contra 0 de 30 em passe único. O que muda: é a diferença entre R4 ser laboratório e ser produto. Sinal observável: um harness comercial que traga verificador acoplado por padrão, e não como extensão.

**SF7 — O canal aberto que fecha.** Onde foi visto: curl, bolsa encerrada em 31 de janeiro de 2026, com a taxa de confirmação abaixo de 5%. O que muda: se for um caso, é anedota; se for um padrão, `e8` está subestimado em prazo. Sinal observável: um segundo projeto de infraestrutura crítica fazendo o mesmo, ou um fundo público passando a pagar triagem de segurança em software aberto.

**SF8 — O ganho social, não técnico, da adoção.** Onde foi visto: na Microsoft, o previsor mais forte de experimentar a ferramenta foi exposição a pares acima do gerente direto (+216%), e usuários prévios do Copilot no editor foram 83% mais propensos a experimentar a CLI e 12 a 15 pontos **menos** propensos a permanecer. O que muda: a difusão não é puxada por capacidade, e sim por imitação — o que torna a curva mais rápida e mais frágil. Sinal observável: uma queda de retenção medida em alguma organização grande, sem queda correspondente de capacidade do modelo.

### 6.2 Wildcards

**W1 — A primeira presunção de defeito por falta de rastro do agente.** Mecanismo: a Diretiva 2024/2853 permite ao tribunal presumir defeito ou nexo causal quando a complexidade técnica cria dificuldade excessiva de prova, e obriga a exibir a evidência relevante de forma acessível. Basta um caso em que o réu não consiga exibir *o que o agente fez* para que a ausência de rastro vire, na prática, presunção contra quem publicou. Por que é improvável até 2030: o ritmo judicial europeu e o fato de a diretiva só alcançar produtos colocados no mercado a partir de dezembro de 2026. O que faria com o mapa: `e13.1` e `e11.1` saltam de 2031–2032 para 2029, `e12.2` (seguro) deixa de ser efeito de confiança baixa e vira quase certo, e a contradição 1 da seção 5.4 se resolve a favor da manutenção. Sinal precoce: a primeira ordem judicial de exibição de registros de execução de agente, em qualquer jurisdição.

**W2 — Um incidente de agente com dano em cascata e resposta legislativa de desligamento obrigatório.** Mecanismo: já existe o precedente de julho de 2026, com cerca de 1.200 agentes operando fora do ambiente de teste, 17.600 ações de rede num único alvo, escalada de um pod isolado a administração de cluster em menos de 13 horas, e um projeto de lei de desligamento obrigatório apresentado em 23 de julho de 2026. Um evento semelhante com dano físico ou financeiro irreversível fecha o ciclo político. Por que é improvável: o agente de código típico roda em sandbox, sobre repositório versionado, e o dano habitual é reversível por reversão de commit. O que faria com o mapa: `e14.1` (identidade verificável do agente) antecipa para 2029, `e14.1.1` entra dentro do horizonte com folga, e R4 ganha financiamento por via regulatória em vez de por via econômica. Sinal precoce: uma exigência de identidade de agente em ambiente de produção partindo de um provedor de nuvem, antes de qualquer lei.

**W3 — A orquestração volta a ser cara.** Mecanismo: a economia de tudo isto pressupõe inferência de sessão longa barata. A decomposição multi-agente básica já custa na casa de 220 mil tokens, e o custo escala com o número de agentes — a recomendação de três a cinco não é estética, é orçamentária. Uma reprecificação para cima, ou a saída de um provedor, devolve a decisão de quando delegar ao cálculo de custo. Por que é improvável: a direção histórica dos preços de inferência é a contrária. O que faria com o mapa: tudo desacelera de 3 a 5 anos, `e9.1` (regerar em vez de manter) se inverte — manter volta a ser mais barato — e `e19.1` (núcleo provado, periferia descartável) não se forma, porque a periferia deixa de ser gratuita. Sinal precoce: um fabricante grande introduzindo cobrança por tempo de sessão de agente, e não por token.

**W4 — A skill vira o produto de mídia.** Mecanismo: se a identidade de uma marca cabe num pacote executável (`e3`), o que um estúdio entrega ao cliente pode deixar de ser a peça e passar a ser o gerador da peça, licenciado por versão. Por que é improvável: exige que o cliente rode o agente, mantenha o pacote e aceite variação na saída — três coisas que a indústria de comunicação nunca aceitou. O que faria com o mapa: `e2.1` e `e3.1.1` antecipam, e a fronteira entre estúdio de design e fornecedor de software desaparece. Sinal precoce: a primeira agência a faturar mais em licença de pacote executável do que em entrega de peça.

## 7. Contra o próprio mapa

Esta seção é o resultado de rodar a bateria do §6 da skill sobre o mapa já escrito, e **alterou o mapa**. O registro de alterações está no fim, com o valor antes e depois de cada item.

### 7.1 Pré-mortem: é 2036 e este mapa deu errado. Por quê?

**Razão 1 — porque a verificação por máquina não chegou, e nada a substituiu.** O mapa aposta, em R4, que existe uma saída técnica para o gargalo de leitura. É a raiz mais frágil: o Forge é um pipeline de pesquisa sobre três sistemas robóticos pequenos (221, 613 e 618 linhas de Java), e a verificação composicional entre fronteiras de função é exatamente onde o desempenho cai. Se R4 não acontecer, o mapa perde `e16`, `e17`, `e18` e seus derivados, e o cenário indesejável da seção 9 vira o provável. **Consequência aplicada:** rebaixei `e16` de confiança média para baixa e empurrei seu prazo de 2030 para 2032; rebaixei o sinal de `e17` de médio para fraco.

**Razão 2 — porque a responsabilidade estrita foi absorvida sem mudar prática nenhuma.** Regulação europeia tem um histórico de virar caixa de seleção. Se as empresas responderem à Diretiva 2024/2853 com cláusula contratual e seguro, sem tocar em como o software é feito, R3 gera papel e não gera efeito: `e13`, `e13.1` e `e14.1` viram formalidade. **Consequência aplicada:** rebaixei `e12` de confiança alta para média — não há uma única decisão judicial para sustentar qualquer coisa — e empurrei `e14.1` de 2029 para 2031, pela classe de referência do inventário de componentes, que levou cinco anos e ainda não é maioria mesmo sendo exigido.

**Razão 3 — porque a assimetria se resolveu sozinha, por capacidade do modelo.** O mapa inteiro supõe que o agente continua precisando de verificação humana ou mecânica. Se a taxa de acerto subir a ponto de o descarte virar residual, `e6` a `e11` perdem força: não é que a revisão foi pulada, é que ela ficou dispensável. Não acredito nisso — a curva de confiança medida vai na direção oposta, caindo de 40% para 29% enquanto a adoção sobe para 84% —, mas é a razão que eu não consigo excluir. **Consequência aplicada:** rebaixei `e9.1` de confiança alta para média, porque "descartar e regerar" pressupõe que o resultado continue irregular.

### 7.2 Extrapolação linear

Os efeitos que são "mais do mesmo, maior" e que tiveram de ganhar mecanismo de não-linearidade ou sair:

- **`e9` (dívida técnica vira passivo desconhecido)** era extrapolação da curva do GitClear. Ganhou não-linearidade: o que muda não é a quantidade de duplicação, é que abaixo de um piso de refatoração a *prática* de entender código existente desaparece da organização, e isso não é contínuo — é um limiar. Ficou.
- **"A produtividade da indústria de software dobra até 2036"** era pura extrapolação de +24% por adotante. **Removido** (seção 12): o número da Microsoft é de PRs mesclados, não de valor entregue, e a METR mostra que a medida de vazão e a de tempo divergem.
- **`e4` (a competência remunerada muda de objeto)** era extrapolação da tese da própria skill. Ganhou mecanismo — o insumo escasso deixa de ser a implementação — e um ancoramento institucional em `e4.1`. Ficou, com confiança média.

### 7.3 Velocidade de adoção confrontada com a classe de referência

Todos os efeitos de sinal fraco foram reconfrontados com a tabela da seção 5.2:

- `e3` (o sistema de design vira pacote executável) estava em 2029. A classe de referência é a migração do *design token* do documento para o código, que levou perto de uma década e ainda é parcial. **Empurrado para 2030.**
- `e14.1` (identidade verificável de agente) estava em 2029. A classe é o inventário de componentes: cinco anos de obrigatoriedade sem maioria. **Empurrado para 2031.**
- `e16` estava em 2030 com confiança média. A classe é a análise estática, que levou décadas e continua parcial, e o estado de R4 é laboratório passando a demo. **Empurrado para 2032, confiança rebaixada para baixa.**
- `e13.1.1` (procedência migra para a mídia) foi datado em 2034 e não antes, porque a especificação de credenciais de conteúdo existe desde 2021 e a adoção em 2026 ainda é parcial: cinco anos não bastaram, dez talvez bastem.

### 7.4 A raiz que não acontece

- **Sem R1** (a instrução nunca vira artefato versionado e permanece prompt descartável): caem `e1` a `e5` e treze derivados. **R2, R3 e R4 sobrevivem inteiras** — a assimetria entre produzir e verificar não depende de a instrução ser empacotada.
- **Sem R2** (a revisão se mantém): caem `e6` a `e11`. R1 e R4 sobrevivem; R3 sobrevive mas perde a urgência.
- **Sem R3** (a diretiva vira letra morta): caem `e12` a `e15`. R1, R2 e R4 sobrevivem — e, notadamente, o cenário indesejável fica *mais* provável, porque R3 é o principal freio externo de R2.
- **Sem R4** (a verificação por máquina não sai do laboratório): caem `e16` a `e19`. As outras três sobrevivem, e o mapa fica mais sombrio.

Nenhuma raiz é indispensável às outras: não há uma raiz só disfarçada em quatro. Mas há uma dependência assimétrica que vale registrar — **R2 é a única raiz que, sozinha, produz um futuro coerente**; as outras três existem, em boa medida, como respostas a ela. Se eu tivesse de escolher uma, seria R2.

### 7.5 Suposições escondidas

1. **Inferência de sessão longa continua barata.** Se não continuar, W3 se realiza e o mapa desacelera cinco anos.
2. **O agente continua sendo um serviço remoto de um punhado de fornecedores.** Se o agente local competente chegar, muda quem tem o rastro, muda a jurisdição e muda o custo — e `e11`, `e13.1` e `e14.1` mudam de dono.
3. **O formato aberto continua aberto.** A Agentic AI Foundation é recente (dezembro de 2025) e nada garante que um fabricante não bifurque. É a premissa de R1 inteira.
4. **A Europa continua legislando e sendo seguida.** O mapa usa a Diretiva 2024/2853 como eixo de R3; se o efeito Bruxelas não se repetir, R3 fica regional e `e15.1.1` (arbitragem) vira o efeito principal em vez do secundário.
5. **Software continua sendo lido como texto.** Todo este mapa supõe que o artefato é código-fonte legível. Se o artefato passar a ser um modelo, a "revisão" muda de natureza e metade dos efeitos perde objeto.
6. **Continua havendo humanos suficientes com competência para revisar.** `e4.1.1` e `e6.1.1` sugerem que a escada de formação está sendo cortada pela base; o mapa assume que ela se recompõe, e não tenho evidência disso.

### 7.6 O viés do autor

Escolhi este tema porque construo com agentes todo dia, inclusive este documento — e isso enviesa em três lugares, nomeados:

- **`e1` e `e2` estão no mapa porque eu escrevo skills.** A instrução empacotada é um objeto que eu manuseio, o que me faz superestimar quanto ele importa para quem não manuseia. Um profissional que usa o agente só pelo editor não reconheceria R1 como ruptura.
- **`e7.1` (a interface de revisão reprojetada em torno do contraexemplo) é o efeito que eu gostaria que fosse verdade.** É elegante, é um bom problema de design, e o sinal dele é fraco. Mantive com confiança média e sinalizo aqui que é o candidato mais provável a viés de gosto.
- **O mapa é mais sóbrio sobre ganho de produtividade do que a média do setor**, e isso também é viés — de alguém que ensina, e que vê o custo pedagógico antes do ganho de vazão. Compensei citando o único número experimental de campo em sentido contrário (os +24% da Microsoft, com intervalo de confiança) lado a lado com a METR.

### 7.7 Calibração

Contagem final, por ordem: 1ª ordem — alta 4, média 13, baixa 2. 2ª ordem — alta 0, média 13, baixa 9. 3ª ordem — alta 0, média 1, baixa 15. A confiança cai monotonicamente com a ordem, como deve. As quatro únicas confianças altas do mapa (`e6`, `e8`, `e9`, `e10`) são todas de 1ª ordem e todas têm medida publicada por trás — auto-merge, encerramento da bolsa da curl, duplicação e movimentação de código, confiança declarada. Nenhuma é opinião.

### 7.8 Registro de alterações

| id | antes | depois | por quê |
|---|---|---|---|
| `e3` | prazo 2029 | prazo **2030** | classe de referência do *design token*: quase uma década, ainda parcial |
| `e9.1` | confiança alta | confiança **média** | "descartar e regerar" pressupõe irregularidade persistente do resultado; não posso excluir a razão 3 do pré-mortem |
| `e12` | confiança alta | confiança **média** | zero jurisprudência: a diretiva só alcança produtos colocados no mercado a partir de dezembro de 2026 |
| `e14.1` | prazo 2029 | prazo **2031** | classe de referência do inventário de componentes: obrigatório desde 2021 e sem maioria em 2026 |
| `e16` | confiança média, prazo 2030 | confiança **baixa**, prazo **2032** | R4 está em laboratório passando a demo; o Forge é evidência de 3 sistemas pequenos |
| `e17` | sinal médio | sinal **fraco** | não há caso industrial de teste derivado de especificação em escala; há demonstração |
| "surge a profissão de engenheiro de contexto" | 1ª ordem | **removido** (§12) | efeito proibido sem nome de profissão e mecanismo; serve para qualquer tema |
| "reguladores criam categoria jurídica nova para agentes" | 1ª ordem | **removido** (§12) | efeito proibido sem nome de regulador; e o que existe (Diretiva 2024/2853) já está em `e12` |
| "cursos reorganizam o currículo" | 2ª ordem | **reescrito** como `e4.1` | só entrou com nome de instituição: Iowa, UIC, Brown |
| "a produtividade da indústria de software dobra" | 2ª ordem | **removido** (§12) | extrapolação linear sem mecanismo de não-linearidade |
| "verificação formal vira padrão da indústria até 2036" | 2ª ordem | **removido** (§12) | exige adoção mais rápida que qualquer classe de referência disponível |
| "o mercado de trabalho de tecnologia se transforma" | 1ª ordem | **removido** (§12) | genérico; substituído por `e6.1.1` e `e4.1.1`, que têm ator e mecanismo |

**Cota cumprida:** R1 teve `e3` empurrado e um efeito removido; R2 teve `e9.1` rebaixado e dois removidos; R3 teve `e12` rebaixado, `e14.1` empurrado e um removido; R4 teve `e16` rebaixado e empurrado, `e17` rebaixado e um removido. A bateria derrubou coisa em todas as quatro raízes.

## 8. O que a máquina errou

Sou eu a máquina. O que fiz de errado nesta rodada, item por item:

1. **Citei um número que não abri e depois o retirei.** Um resumo de busca afirmava que "18% dos PRs mesclados em empresas pesquisadas têm um agente como autor principal ou par". O número é excelente para a tese de `e6` e eu o havia colocado na seção 1. Não consegui abrir a fonte primária — era um blog de marketing agregando outra pesquisa. **Retirado do corpo do documento**; fica aqui e na seção 12 como não verificado. O sinal de alerta foi o número ser redondo e a fonte ser secundária.

2. **Um artigo que abri devolveu uma extração implausível e eu quase a usei.** O trabalho *Understanding the Rejection of Fixes Generated by Agentic Pull Requests* (arXiv 2606.13468) foi lido com sucesso, mas o extrator informou "9 pull requests agênticos analisados" como tamanho de amostra — implausível para um estudo sobre o AIDev, que tem 932.791 PRs. Provavelmente é uma tabela mal convertida. **Não usei nenhum número dele e não o listei na seção 11**, só na 12. Um artigo aberto cuja leitura falhou não é fonte.

3. **Quase troquei a data do dado pela data da publicação.** A queda de confiança de cerca de 40% para 29% vem da pesquisa da Stack Overflow com campo em 2025; eu a li num post de fevereiro de 2026 e, na primeira redação da seção 3, escrevi "em 2026 a confiança caiu para 29%". A confiança caiu *até* 2025 e foi *publicada* em 2026. Corrigido no texto; registro o erro porque ele é o tipo de deslize que ninguém pega na leitura.

4. **Apresentei uma amostra autosselecionada como se fosse universo.** "90% dos desenvolvedores usam agente ao menos semanalmente" é a amostra da JetBrains — mais de 15 mil profissionais que respondem à pesquisa de uma fabricante de ferramentas de desenvolvimento, o que sobre-representa quem se interessa por ferramenta. O número está no texto porque é o melhor que há, mas a recusa de "o agente que age" como disrupção-raiz (seção 4.0) se apoia nele, e essa recusa é estrutural para o mapa inteiro. Se a amostra estiver enviesada em, digamos, quinze pontos, a recusa cai e o mapa muda de forma.

5. **Usei o resumo de um artigo porque o texto integral não abriu.** O *position paper* sobre desalinhamento de benchmarks (arXiv 2606.17799) devolveu PDF ilegível; li a página de resumo. O que afirmo dele na seção 2 é o argumento, nunca uma medida — e está declarado.

6. **Tratei uma enciclopédia como fonte primária de um incidente.** O episódio de julho de 2026 (cerca de 1.200 agentes, 17.600 ações de rede, escalada em menos de 13 horas) veio da Wikipédia, não do relatório da OpenAI nem do da Hugging Face. Datas e números conferem internamente, mas a confiabilidade é de enciclopédia. `e14` e W2 se apoiam parcialmente nele; se o relato estiver inflado, o prazo de `e14` está adiantado.

7. **Não consegui nenhuma fonte brasileira e quase preenchi o buraco com estimativa.** As duas candidatas devolveram HTTP 403. A tentação era escrever "no Brasil, a adoção deve estar alguns anos atrás" — uma frase plausível, sem qualquer medida por trás. **Escrevi "sem número encontrado"**, que é a resposta honesta, e `e15.1.1` está marcado como sustentado por mecanismo e não por dado.

8. **Escrevi um efeito bonito antes de ter o mecanismo.** `e7.1` (a interface de revisão em torno do contraexemplo) nasceu como frase, não como derivação — eu queria que estivesse no mapa. Só depois construí o mecanismo e a classe de referência. Está declarado como viés na seção 7.6, e é o efeito que eu retiraria primeiro se tivesse de cortar um.

## 9. Três cenários para 2036

### Provável — o software de duas camadas

É 2036. O software se partiu em duas camadas com regimes diferentes. Há um **núcleo provado**: pequeno, caro, escrito com propriedade declarada e verificada por máquina, mantido por poucas pessoas que sabem enunciar invariantes — é onde mora o que não pode falhar, e onde a responsabilidade objetiva morde. E há uma **periferia gerada**: grande, barata, feita para durar meses, que ninguém lê, ninguém prova e ninguém mantém — quando quebra, regera-se. O pull request sobreviveu como rito e morreu como garantia: aprovar é conferir que a evidência foi produzida, não que alguém entendeu. O que se arquiva não é mais o repositório, é o diário de execução do agente, porque é ele que se exibe em juízo. Projetos abertos de infraestrutura crítica não aceitam contribuição de quem não se identifica, e a bolsa de recompensa por falha é uma curiosidade histórica. Quem projeta mídia e interação produz software rotineiramente e responde por ele — e descobriu que a parte difícil nunca foi fazer, foi conseguir dizer, por escrito e antes, o que deveria valer. **Sinal precoce de que estamos entrando aqui:** a taxa de auto-merge estabilizar acima de 80% ao mesmo tempo que a exigência contratual de rastro de agente vira cláusula padrão. As duas coisas juntas, e não cada uma isolada.

### Desejável — a verificação ficou barata antes de a leitura acabar

É 2036. O caminho de `e17.1` venceu o de `e7`: a verificação por máquina barateou a ponto de entrar no harness por padrão, e a pergunta "isto viola alguma propriedade declarada?" é respondida antes de qualquer humano olhar. Isso não devolveu a leitura — devolveu algo melhor, que é o direito de não ler o que não precisa. A instrução é um pacote portátil, versionado, auditável e com dono, lido por clientes concorrentes, o que impediu que o ofício ficasse preso a um fabricante. O barateamento do software não foi para fazer mais software grande: foi para fazer software pequeno e específico, que antes não valia o custo de existir — o instrumento de um músico, o visualizador de uma pesquisadora, a ferramenta interna de uma escola. Quem projeta mídia e interação ganhou a capacidade de fabricar o próprio instrumento e a obrigação de declarar o que ele nunca deve fazer; declarar invariante de experiência virou parte do ofício, como grade e contraste já eram. A escada de formação foi recomposta por baixo: o júnior entra revisando e especificando, não implementando, e isso acabou sendo um começo melhor. **O que teria de ser feito para chegar aqui:** acoplar verificador ao harness por padrão, manter um formato de pacote único e neutro, e alguém — provavelmente público — pagar a triagem de segurança do software aberto que a bolsa de recompensa deixou de pagar. **Sinal precoce:** dois fabricantes concorrentes adotando o mesmo formato de pacote **com verificação acoplada**, e não apenas com instrução.

### Indesejável — ninguém leu, ninguém provou, ninguém responde

É 2036. A verificação por máquina não saiu do laboratório, a responsabilidade estrita foi absorvida por cláusula contratual e seguro sem alterar prática nenhuma, e o volume continuou subindo. O software é abundante e opaco: funciona quase sempre, e quando não funciona ninguém consegue dizer por quê, porque o rastro do que o produziu não foi guardado e o código que restou não explica a si mesmo. A atribuição de causa virou o serviço mais caro do setor. A refatoração desapareceu como prática e, com ela, desapareceu a única forma que a indústria tinha de entender o que já existe. A escada de formação está cortada: não se contrata júnior há uma década, e a geração que sabia ler código está se aposentando sem substituição — não por falta de gente, por falta de degrau. Quem projeta mídia e interação publica software que não sabe explicar, sob responsabilidade objetiva, e a resposta do mercado foi seguro, não competência. **O sinal precoce deste cenário é mensurável hoje:** movimentação de código abaixo de 2% (está em 3,8%, vindo de 21% em 2022) somada à taxa de confirmação de vulnerabilidade caindo em mais projetos como caiu na curl (de acima de 15% para abaixo de 5%). Se as duas curvas continuarem no sentido atual por mais três anos, este deixa de ser o cenário indesejável e passa a ser o provável.

## 10. O experimento

### A mesma especificação, três vezes

**O que é.** Uma bancada de comparação que isola a variável certa. Cada dupla da turma escreve **uma especificação** de uma peça interativa pequena — por exemplo, um visualizador de dados com três regras declaradas e absolutas: uma de acessibilidade ("todo elemento interativo é alcançável por teclado"), uma de identidade ("nenhuma cor fora do pacote da marca") e uma de comportamento ("nunca exibir o estado vazio depois de um carregamento bem-sucedido"). Antes de rodar qualquer agente, a dupla escreve o **verificador dessas três regras** — um teste automático que responde sim ou não, sem opinião. Só então a especificação vai para **três agentes diferentes**, em três execuções independentes, e ninguém toca no código gerado.

Mede-se três coisas:

- **(a) Conformidade.** Quantas das propriedades declaradas cada saída cumpre, pelo verificador escrito antes.
- **(b) Custo de decisão.** Quanto tempo leva, cronometrado, para um colega que **não escreveu a especificação** decidir se aceita ou rejeita cada saída — e qual decisão ele toma. É a medida direta do custo de verificar.
- **(c) Rodadas de correção da especificação.** Quantas vezes é preciso reescrever **o texto** — nunca o código — até as três saídas convergirem em conformidade.

**Que pergunta sobre o futuro ele ajuda a responder.** A tese deste mapa, e do tema, é que o desenvolvedor vira orquestrador: o artefato de alavanca passa a ser a especificação. Isso só é verdade se **a variância entre especificações for maior que a variância entre agentes**. Se trocar de agente mudar mais o resultado do que reescrever a especificação, quem escreve não está orquestrando — está apostando, e o que se chama de ofício novo é, na verdade, gestão de sorte. `e4`, `e16` e metade de R1 dependem dessa resposta.

**Que tecnologia emergente usa, e por que não dá com tecnologia madura.** Usa três agentes de terminal capazes de sessão longa com ferramentas, especificação estruturada no espírito do Spec Kit, e verificação automática de propriedade declarada. Com tecnologia madura — autocompletar de editor, chat que explica código — o experimento **não existe**: a variável "o mesmo texto, três executores autônomos, nenhuma intervenção humana no meio" não é formulável quando o humano digita cada linha. É exatamente por não ser formulável antes que a pergunta é nova.

**O que a turma faz quando isso for testado em sala.** Cada dupla traz a sua especificação e as três saídas, sem identificar qual agente produziu qual. A dupla vizinha cronometra a decisão de aceite às cegas — sem ver a especificação primeiro, como acontece na vida real de um revisor diante de um PR de agente. Depois se compara: quem decidiu rápido decidiu certo? A conformidade medida pela máquina bate com a decisão do humano? E a pergunta que fecha a aula: quando as três saídas divergiram, a divergência estava no que o texto **não** dizia — e isso era visível para quem o escreveu?

**O resultado que me faria mudar de ideia.** Se a variância entre agentes for sistematicamente **maior** que a variância entre especificações — isto é, se trocar de fabricante mudar mais o resultado do que reescrever o enunciado —, então a especificação não é o artefato de alavanca, `e4` está errado, R1 perde a metade que interessa, e o que este mapa chama de "ofício novo" é dependência de fornecedor com outro nome. E se o cronômetro mostrar que decidir sobre a saída de um agente custa **menos** tempo que ler um diff equivalente, então R2 inteira está errada: a assimetria entre produzir e verificar não existe, e o mapa cai pela raiz mais importante. Os dois resultados são possíveis, e é por isso que vale rodar.

## 11. Fontes

Vinte e oito fontes, todas abertas nesta rodada. As que não abriram, ou abriram sem devolver conteúdo aproveitável, estão na seção 12 e não aqui.

1. `https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026/` — sustenta os números de adoção da seção 3.1 (90% semanal, 68% diário, participações por ferramenta) e, com eles, a **recusa de "o agente que age" como disrupção-raiz** na seção 4.0. Confiabilidade: pesquisa com metodologia declarada e n acima de 15 mil, mas autosselecionada e conduzida por fabricante de ferramentas — ver a ressalva 4 da seção 8.
2. `https://arxiv.org/html/2607.01418v1` — sustenta o ganho de vazão medido em campo (+24% de PRs mesclados, IC 95% +14,5% a +33,7%; +50,1% em semanas de uso intenso) e o achado de difusão social (+216%). Confiabilidade: pré-publicação com desenho quase-experimental e contrafactual sintético, sobre telemetria de uma única empresa.
3. `https://www.gitclear.com/the_ai_code_quality_maintainability_gap` — sustenta toda a seção sobre manutenibilidade: duplicação +81%, movimentação de 21% para 3,8%, chamadas entre arquivos −35%, legado −74%, mascaramento de erro +47%, churn +15%, sobre 623 milhões de mudanças de 2023 a 2026. Confiabilidade: dados proprietários de uma empresa que vende análise de código; método publicado, amostra não auditável por terceiros.
4. `https://www.gitclear.com/ai_assistant_code_quality_2025_research` — a rodada anterior da mesma casa (211 milhões de linhas, 2020–2024; cópia e colagem de 8,3% para 12,3%; refatoração de 25% para menos de 10%). Sustenta a afirmação de que a curva é anterior ao agente. Mesma ressalva.
5. `https://leaddev.com/ai/code-maintainability-plummets-in-the-ai-coding-era` — cobertura independente dos dados acima, com entrevista ao autor do relatório. Sustenta a leitura qualitativa de `e9`. Confiabilidade: jornalismo especializado que cita a fonte primária.
6. `https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/` — sustenta o contraponto de `e10`: 16 desenvolvedores, 246 tarefas, 19% de lentidão medida contra 20% de ganho percebido. Confiabilidade: **ensaio controlado randomizado**, o desenho mais forte deste documento; amostra pequena e ferramentas de início de 2025.
7. `https://stackoverflow.blog/2026/02/18/closing-the-developer-ai-trust-gap/` — sustenta a divergência entre adoção (84%) e confiança (29%, −11 pontos), e os 3% de confiança alta. Confiabilidade: pesquisa anual grande e de método estável; ver a ressalva 3 da seção 8 sobre a data do dado.
8. `https://stackoverflow.blog/2025/12/26/ai-vs-gen-z/` — sustenta "quem perde" na seção 5.3: queda de perto de 20% no emprego de 22 a 25 anos, −30% em estágios de tecnologia desde 2023, 70% dos gestores dizendo que a IA faz o trabalho de estagiário. Confiabilidade: agregação editorial de fontes terceiras; os números originais são de institutos distintos.
9. `https://arxiv.org/html/2601.18749` — a fonte mais importante deste mapa. Sustenta `e6`: 40.214 PRs (6.618 humanos, 33.596 agênticos), 77,51% de auto-merge contra 57,63%, 3,7% com mais de três revisores, e o coeficiente invertido do comentário de revisor (+2,7% humano, −2,8% agêntico). Confiabilidade: pré-publicação com modelo logístico e AUC reportada; base pública (AIDev), replicável.
10. `https://arxiv.org/html/2605.22534` — sustenta as taxas de aceitação (63,1% mesclados, 36,9% rejeitados de 9.799) e o achado de que 79,1% dos mesclados inspecionados não tiveram laço de realimentação. Confiabilidade: pré-publicação com inspeção manual de 717 PRs declarada.
11. `https://arxiv.org/abs/2601.00477` — sustenta que PRs agênticos de segurança (cerca de 4% do total, 1.293 casos) têm merge menor e revisão mais longa, e que a rejeição correlaciona mais com complexidade que com tema. Sustenta a prosa de `e8` e `e14`. Confiabilidade: pré-publicação sobre a mesma base.
12. `https://daniel.haxx.se/blog/2026/01/26/the-end-of-the-curl-bug-bounty/` — fonte primária de `e8`: bolsa aberta em abril de 2019, encerrada em 31 de janeiro de 2026, 87 vulnerabilidades confirmadas, mais de US$ 100 mil pagos, confirmação de mais de 15% caindo para menos de 5%. Confiabilidade: relato em primeira pessoa do mantenedor — parcial por definição, e insubstituível.
13. `https://www.theregister.com/security/2026/01/21/curl-shutters-bug-bounty-program-to-stop-ai-slop/5063039` — cobertura independente do mesmo episódio, com as citações do mantenedor sobre a carga sobre a equipe de segurança. Confiabilidade: veículo técnico estabelecido.
14. `https://en.wikipedia.org/wiki/2026_OpenAI_agent_cyberattacks` — sustenta `e14` e W2: cronologia de maio a setembro de 2026, cerca de 1.200 agentes, 17.600 ações de rede, escalada em menos de 13 horas, respostas institucionais e legislativas. Confiabilidade: **enciclopédia, não fonte primária** — ver a ressalva 6 da seção 8.
15. `https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation` — sustenta R1: fundação anunciada em 9 de dezembro de 2025, MCP, goose e AGENTS.md doados, mais de 10 mil servidores MCP, mais de 60 mil projetos com AGENTS.md, oito membros platinum. Confiabilidade: comunicado institucional — os números de adoção são autodeclarados pelos contribuidores.
16. `https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/` — sustenta a existência e a forma do Spec Kit (quatro fases, setembro de 2025). Confiabilidade: blog do fabricante; bom para o fato, ruim para a alegação de eficácia.
17. `https://github.com/github/spec-kit/blob/main/spec-driven.md` — sustenta a inversão que dá nome a R1: a especificação como artefato primário, o código como sua expressão. Confiabilidade: documento de projeto — é enunciado de intenção, não evidência de resultado, e está usado assim.
18. `https://www.reedsmith.com/articles/eu-product-liability-directive-software-digital-products-cybersecurity/` — sustenta R3 inteira: Diretiva 2024/2853, vigência em 9 de dezembro de 2026, software como produto, presunção de defeito por dificuldade excessiva de prova, obrigação de exibir evidência, e o elo com CRA e NIS2. Confiabilidade: análise de escritório de advocacia — competente e interessada; convém conferir contra o texto da diretiva antes de citar em avaliação.
19. `https://arxiv.org/html/2606.22413v2` — sustenta R4: o pipeline Forge, três sistemas (221, 613 e 618 linhas), 15 de 15 execuções convergindo em 2 a 3 iterações contra 0 de 30 em passe único, e os padrões-alvo DO-178C, IEC 61508 e ISO 26262. Confiabilidade: pré-publicação com ablação declarada; escala pequena, e é essa pequenez que rebaixa `e16`.
20. `https://arxiv.org/pdf/2505.13938` — o benchmark CLEVER, para geração de código formalmente verificado ponta a ponta. Sustenta apenas que a linha de pesquisa existe e é mensurável: **a extração não devolveu a tabela de resultados**, e nenhum número dele está neste documento.
21. `https://arxiv.org/pdf/2604.03515` — sustenta a afirmação da seção 2 de que o scaffold, e não só o modelo, determina a eficácia, a partir da leitura do código-fonte de SWE-agent, Aider, OpenHands, AutoCodeRover e Agentless. Confiabilidade: pré-publicação descritiva.
22. `https://arxiv.org/abs/2606.17799` — sustenta a afirmação de que os benchmarks de código estão desalinhados com engenharia agêntica, por tratarem o agente como monólito. Confiabilidade: *position paper* — argumento, não medida; e li o resumo, não o texto integral.
23. `https://addyosmani.com/blog/code-agent-orchestra/` — sustenta a faixa prática de orquestração (três a cinco agentes; um revisor para três ou quatro construtores; "verificação é o gargalo, não a geração") e a ordem de grandeza de custo (cerca de 220 mil tokens numa decomposição básica), usada em W3. Confiabilidade: relato de prática de um profissional reconhecido — experiência, não amostra.
24. `https://www.augmentcode.com/tools/open-source-agent-orchestrators` — sustenta que o git worktree virou a primitiva de isolamento consensual em cerca de dezoito meses, sobre nove orquestradores abertos nomeados, e a faixa de três a seis agentes. Confiabilidade: comparação publicada por empresa que vende produto concorrente na mesma categoria — interessada, e por isso usada só para o fato do worktree, que é verificável.
25. `https://www.brown.edu/news/2026-06-11/agentic-studio-ai-programming` — sustenta `e4.1`: o Agentic Studio, cerca de 20 alunos entre 80 candidatos, diários de uso, e a observação dos professores de que o engenheiro humano competente continua necessário para guiar e revisar. Confiabilidade: assessoria de imprensa universitária — bom para o fato de a disciplina existir, fraco para a conclusão pedagógica.
26. `https://cs.uiowa.edu/news/2026/06/new-computer-science-curriculum-fall-2026` — sustenta `e4.1`: currículo novo a partir do outono de 2026, com "correção de programa" na sequência introdutória. Confiabilidade: comunicação institucional sobre decisão própria — fato verificável.
27. `https://cs.uic.edu/news-stories/uic-engineering-launches-ai-curriculum-initiatives/` — sustenta `e4.1`: US$ 1 milhão da NSF para cinco anos de redesenho, com duas trilhas (integração precoce e integração progressiva em quatro disciplinas de programação), a partir do outono de 2026. Mesma natureza.
28. `https://www.cc.gatech.edu/news/teaching-students-use-ai-wisely-new-research-highlights-opportunities-and-risks-cs-education` — sustenta `e17.1.1` e a prosa de `e4.1`: três estudos no SIGCSE 2026, incluindo ensaio randomizado com 178 alunos em que dicas de IA aumentaram o tempo de tentativa sem ganho claro de aprendizagem no período. Confiabilidade: divulgação institucional de trabalho revisado por pares.

## 12. Anexo — o levantamento bruto

### 12.1 O briefing recebido e o que ele não cobriu

O pedido veio com bloco `briefing:` completo — modo MAPA, tema, slug, autor, zona de interesse, horizonte 2036, público, recorte global com nota sobre o Brasil, descartado ("o que já é comum em produto de massa"), raiz suspeita nula, viés neutro, busca na web, caminho de saída. Não houve entrevista, e **não houve rebaixamento de confiança**, porque o briefing cobriu os sete itens da tabela do §0 da skill.

**O que o briefing não cobriu, e que assumi:**

1. **"O que já é comum em produto de massa" foi lido como a régua de maturidade do §2**, e aplicado com rigor: foi ela que recusou "o agente que age no repositório" como raiz, apesar de esse ser o enunciado do tema. Assumo a responsabilidade por essa leitura, que é a decisão estrutural do mapa.
2. **A nota sobre o Brasil foi pedida, e não pôde ser feita com número.** Assumido: nota de mecanismo, declarada como tal, em `e15.1.1` e na seção 3.4.
3. **"Ideias óbvias a excluir: as que servem para qualquer tema"** foi operacionalizada como a lista de efeitos proibidos do §3 da skill, e quatro efeitos foram removidos por ela (registro na seção 7.8).
4. **O falseador declarado** — "evidência de que a adoção já passou da maioria inicial, ou de que a tecnologia não rompe nada" — foi aplicado literalmente e **disparou**: a adoção passou da maioria. A resposta não foi abandonar o tema, e sim mover o objeto maduro para a seção 3 e procurar as rupturas que ainda não amadureceram. Registro isto porque é a alteração mais consequente que o falseador do briefing produziu.
5. **Profundidade "três ordens" e modo "a partir de uma inovação, não de um setor"** foram seguidos sem desvio.

### 12.2 Os efeitos cortados no §6, com o motivo

- **"Surge a profissão de engenheiro de contexto."** Removido: é o efeito proibido "surge uma nova profissão" sem nome nem mecanismo. O que sobrou dele, com ator e mecanismo, é `e5.1` (curador do pacote de instruções, remunerado como infraestrutura).
- **"Reguladores criam categoria jurídica nova para agentes."** Removido: efeito proibido sem nome de regulador. O regulador concreto existe e já está em `e12`; a categoria jurídica concreta que consigo sustentar é a identidade de agente, que está em `e14.1`.
- **"Cursos reorganizam o currículo."** Não removido, reescrito: virou `e4.1`, com Iowa, UIC e Brown nomeados e datados. Sem os nomes, não entraria.
- **"O mercado de trabalho de tecnologia se transforma."** Removido: genérico. Substituído por `e6.1.1` (a escada de senioridade muda de critério) e `e4.1.1` (o diploma perde o monopólio de sinalização), que têm ator e mecanismo.
- **"A produtividade da indústria de software dobra até 2036."** Removido no teste de extrapolação linear: o +24% da Microsoft mede PRs mesclados, não valor entregue, e a METR mostra vazão e tempo divergindo.
- **"Verificação formal vira padrão da indústria até 2036."** Removido no teste de velocidade: exige adoção mais rápida que qualquer classe de referência disponível. O que sobrou é `e19.1` (núcleo provado e periferia descartável), que é o mesmo fenômeno sem a promessa de universalidade.
- **"Empresas de software perdem valor porque o código virou commodity."** Removido no teste da causa solta: aconteceria do mesmo jeito por saturação de mercado, por consolidação ou por mudança de ciclo de juros. Não deriva especificamente destas raízes.
- **"A documentação técnica desaparece porque o agente lê o código."** Removido no teste da causa solta e por contradizer `e1`: a documentação não desaparece, muda de leitor — e isso já está dito melhor em `e1` e `e3`.

### 12.3 As buscas que não deram em nada

- **Dado brasileiro de adoção de agentes de código.** Duas tentativas de leitura (o *Relatório de Carreiras em Programação 2026* da Rocketseat, com mais de 20 mil desenvolvedores segundo resumos, e a reportagem do IT Forum sobre ele) devolveram **HTTP 403**. Os números que apareceram em resumo de busca — 60% do estudo voltado a ferramentas de produtividade com IA, 32% a desenvolvimento de agentes, 20% a engenharia de prompt, 73% de adoção concentrada no nível pleno — **não estão no corpo deste documento** porque não abri a fonte. Ficam aqui como pista para quem quiser tentar de novo.
- **"18% dos PRs mesclados têm agente como autor principal ou par."** Apareceu em resumo de busca, fonte secundária de marketing, não abri a primária. Retirado do documento; registrado na seção 8, item 1.
- **arXiv 2606.13468** (*Understanding the Rejection of Fixes Generated by Agentic Pull Requests*): abriu, mas a extração devolveu "9 pull requests analisados" — implausível para um estudo sobre o AIDev. Nenhum número usado, e por isso não está na seção 11.
- **arXiv 2606.17799** em PDF: ilegível pelo extrator. Usei a página de resumo.
- **arXiv 2505.13938 (CLEVER)**: abriu, mas sem a tabela de resultados. Citado na seção 11 apenas pelo que sustenta — a existência da linha de pesquisa.
- **Análise jurídica sobre responsabilidade penal por ação de agente autônomo** (Ballard Spahr, sobre o CFAA): **HTTP 403**. Teria reforçado `e12.1` e W2; não entrou.
- **Buscas por "Terminal-Bench 2026 resultados"** devolveram só agregadores e páginas de placar comercial; não achei fonte primária com número que eu pudesse abrir e citar. Por isso **este mapa não usa nenhum número de benchmark** — o que, ironicamente, é coerente com a fonte 22, que argumenta que esses números medem a coisa errada.

### 12.4 Caminhos abandonados

- **Uma quinta raiz: "o agente como usuário da web".** Abandonada por invadir o tema 4 da disciplina (a internet agêntica). A fronteira aqui é o *ofício de programar*.
- **Uma quinta raiz: "contenção e identidade do agente".** Abandonada pelo mesmo motivo — é o tema 2. O que dela é indispensável aqui entrou como efeito (`e14.1`, `e14.1.1`), e não como raiz.
- **Uma quinta raiz: "memória e avaliação do agente".** É o tema 3. Entrou só como o que este mapa não consegue evitar: a ausência de instrumento de medida, na seção 3.2.
- **Um ramo inteiro sobre segurança de cadeia de suprimentos de skills** (skill maliciosa como vetor). Abandonado por ser, de novo, o tema 2 — mas registro que é o buraco mais óbvio deste mapa para quem o confrontar.
- **Datar os efeitos por curva de capacidade de modelo** em vez de por classe de referência de adoção institucional. Abandonado porque a fonte 22 argumenta, convincentemente, que as curvas de capacidade publicadas medem o conjunto e não o componente — e datar por elas seria construir sobre número que eu mesmo declarei não confiável.

### 12.5 Notas de método desta rodada

Quatorze buscas (em português e inglês), vinte e seis páginas abertas, vinte e oito fontes citadas, e uma verificação de código de resposta HTTP em todos os enlaces antes de escrever a seção 11 — um enlace foi descartado por devolver 403 depois de já estar na lista. O documento foi escrito em uma sessão, em 12 de setembro de 2026, sem entrevista e com briefing completo. O mapa anterior deste mesmo tema, com horizonte 2031, **não foi lido além do frontmatter e da saída do verificador**, para não contaminar a derivação; a diferença central entre os dois é deliberada e está declarada na seção 4.0 — o que era raiz em 2026 amadureceu, e um mapa com dez anos de horizonte tem de começar pelas rupturas que ainda não são maioria.

### 12.6 Saída do verificador

Comando executado:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2036/01-programacao-agentica-o-desenvolvedor-vira-orquestrador/tendencia-programacao-agentica-o-desenvolvedor-vira-orquestrador.md --links
```

Saída, colada inteira:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 19 (frontmatter diz 19)
efeitos ordem 2: 22 (frontmatter diz 22)
efeitos ordem 3: 16 (frontmatter diz 16)
prazo > horizonte (2036) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 4 · media 13 · baixa 2
confiança ordem 2: alta 0 · media 13 · baixa 9
confiança ordem 3: alta 0 · media 1 · baixa 15
links da seção 11: 28/28 respondem (frontmatter diz fontes: 28)
RESULTADO: ok
```

Todos os contadores batem com o frontmatter, os doze títulos estão literais, nenhum prazo de 1ª ou 2ª ordem passa do horizonte de 2036, nenhum de 3ª ordem passa (por isso não há nada a declarar nesse item), a confiança cai monotonicamente com a ordem — alta 4 na 1ª, zero na 2ª e na 3ª — e os 28 enlaces da seção 11 respondem, o mesmo número declarado em `fontes`.
