---
tema: "Programação agêntica: o desenvolvedor vira orquestrador"
slug: programacao-agentica-o-desenvolvedor-vira-orquestrador
autor_login: jcsc
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 5
efeitos_ordem_2: 11
efeitos_ordem_3: 18
tecnologias_citadas: [Claude Code, Codex CLI, Cursor, Cline, Aider, OpenCode, GitHub Copilot CLI, Gemini CLI, OpenHands, Goose, Junie, Kiro, Amp, Factory, Agent Skills (SKILL.md), GitHub Spec Kit, MCP, Terminal-Bench, SWE-bench, harness de execução, sandbox de validação por requisição]
fontes: 14
confianca: media
experimento: "Sala de controle — supervisionar três agentes em paralelo sem escrever nenhuma linha de código"
skill_usada: futurizacao-jcsc
publico_ok: false
---

## 1. Resumo

Escrever código deixou de ser o gargalo; conferir o que foi escrito passou a ser. Em 2026 os
agentes de código leem um repositório, planejam, editam vários arquivos, rodam os testes e abrem
o PR sozinhos — o melhor agente público resolve 91,4% das tarefas do Terminal-Bench v2.1 —, mas
apenas 14,1% dos desenvolvedores usam agentes diariamente e 37,9% não pretendem usar. Esse
descompasso é o mapa inteiro: a capacidade chegou antes da prática, e a prática esbarra num
problema que não é de modelo. Quatro rupturas sustentam o mapa: o agente que fecha o ciclo
sozinho; a instrução empacotada (SKILL.md, harness) virando artefato de software versionado; a
especificação virando a coisa que se revisa, com o código como saída regenerável; e uma classe
nova de dívida — código correto que ninguém tem modelo mental de. Até 2031 o efeito mais provável
não é "o programador acaba": é que a atenção humana vira o recurso escasso da equipe, a revisão
vira o produto, a auditoria do processo do agente vira mercado, e a porta de entrada da profissão
estreita exatamente onde ela sempre esteve — na tarefa júnior. Para quem projeta mídia e
interação, a consequência direta é que a interface de trabalho deixa de ser um editor de um
artefato e passa a ser um painel de supervisão de processos paralelos.

## 2. O tema

Programação agêntica é a prática de delegar a um agente de software a execução de uma tarefa de
engenharia inteira — não a sugestão da próxima linha. O agente recebe um objetivo, lê o
repositório, decide o que mexer, edita múltiplos arquivos, executa comandos de verdade num
terminal, roda os testes, lê o erro, corrige e abre o pull request. O humano especifica, verifica
e responde pelo resultado.

A distinção com o que já existia é de natureza, não de grau. Autocompletar de IDE devolve texto
para um humano aceitar; um agente **age** e o efeito colateral já aconteceu quando você lê. Daí a
palavra "orquestrador": o trabalho migra de produzir o artefato para dirigir e conferir quem o
produz.

### Onde isso encosta em mídia e interação

Em três pontos concretos, e nenhum deles é "programador usa IA".

O primeiro é de interface. A superfície de trabalho de quem desenvolve saiu do editor e foi para
o terminal e para o log de execução — uma regressão aparente de interface que é, na verdade, a
troca de um problema de *edição* por um problema de *leitura de trajetória*. Projetar para alguém
que acompanha três processos paralelos, cada um produzindo centenas de linhas de saída, é um
problema de design de informação em aberto, e não há convenção estabelecida.

O segundo é de autoria e atribuição. Quando o artefato é gerado, a pergunta "quem fez isto" deixa
de ter resposta óbvia — e é a mesma pergunta que mídia generativa enfrenta em imagem, texto e
áudio. Código é só o domínio onde ela chega primeiro com consequência jurídica e operacional,
porque código roda em produção e quebra coisas.

O terceiro é de método. A especificação executável — descrever antes, gerar depois — é, na
prática, o roteiro voltando ao centro da produção. Disciplinas que já trabalham assim (design,
roteiro, arquitetura de informação) ganham vantagem relativa num processo onde escrever o que se
quer passa a valer mais que executar.

### Por que merece um mapa de futuro, e não um levantamento de estado da arte

Porque a pergunta interessante não é "quais ferramentas existem" — essa é respondível hoje e
estará desatualizada em três meses. A pergunta é o que acontece com o **ofício** quando o custo de
produzir o artefato despenca e o custo de confiar nele não despenca junto. Isso é uma assimetria
com efeitos em cascata sobre formação, contratação, manutenção de software, valor de empresa e
responsabilidade legal — e nenhum desses efeitos é observável no estado da arte das ferramentas.

### A entrevista (Etapa 1 da skill)

A skill proíbe gerar conteúdo antes da entrevista. Nesta rodada não havia interlocutor humano
disponível — a rodada é automatizada, disparada pela fila de rodadas da disciplina — e as respostas
vieram por escrito no despacho da tarefa. Registro-as literalmente, como a skill exige, incluindo
o que foi explicitamente deixado em aberto:

1. **Horizonte temporal:** 2031.
2. **Público-alvo:** quem projeta mídia e interação.
3. **Recorte geográfico:** global, com uma nota sobre o Brasil.
4. **Descartes explícitos:** o que já é comum em produto de massa (a régua da disciplina). Nenhuma
   outra exclusão. Ideias óbvias a excluir: as que serviriam para qualquer tema.
5. **Viés desejado:** neutro.

Três respostas adicionais foram dadas fora do roteiro das cinco perguntas e valem registro porque
mudaram o trabalho: (a) **disrupção suspeita: nenhuma — descubra**, ou seja, não houve hipótese
plantada; (b) **profundidade: três ordens**, e **modo: a partir de uma inovação/tema, não de um
setor**; (c) **o que faria mudar de ideia:** evidência de que a adoção já passou da maioria inicial
de Rogers, ou de que a tecnologia não rompe nada e só melhora o que existe.

Esse último item foi tratado como teste, não como adorno, e o resultado está na seção 3: a adoção
**não** passou da maioria inicial, e a diferença entre agente e autocompletar é de natureza. O tema
sobrevive ao próprio critério de refutação que o solicitante ofereceu.

## 3. Onde isso está hoje

### O que já existe e funciona

**A capacidade técnica chegou.** No Terminal-Bench v2.1 — 89 tarefas curadas de engenharia de
software, administração de sistemas, processamento de dados, treino de modelos e segurança,
avaliadas em `pass@1` com três repetições por tarefa num sandbox e2b — o topo do ranking público
está em **91,4%** (Claude Fable 5.1, raciocínio adaptativo, esforço máximo), seguido de 91,0% e
89,9% pelas variantes de esforço menor [F1]. Não é um benchmark de completar função: são tarefas
que exigem rodar comandos num terminal e verificar o resultado. Para efeito de mapa, o que importa
não é o número — é que o número já não é o argumento de quem duvida.

**A camada de instrução empacotada existe e é padrão aberto.** O formato Agent Skills — uma pasta
com um `SKILL.md` contendo metadados (`name`, `description`) e instruções, opcionalmente com
`scripts/`, `references/` e `assets/` — foi desenvolvido pela Anthropic e liberado como padrão
aberto, com carregamento em três estágios (descoberta pelo nome e descrição, ativação quando a
tarefa casa, execução com os recursos anexos) [F2]. O catálogo público de clientes compatíveis
listava, na consulta de 12/09/2026, **46 produtos** — entre eles Claude Code, ChatGPT & Codex,
GitHub Copilot, VS Code, Cursor, Gemini CLI, OpenCode, OpenHands, Goose, Junie (JetBrains), Kiro,
Amp, Factory, Roo Code, Tabnine, Mistral Vibe, Hermes Agent, Spring AI, Databricks Genie Code,
Snowflake Cortex Code e Pulumi Neo [F2]. O repositório de exemplos da Anthropic marcava 175,9 mil
estrelas e 20,8 mil forks [F3]. Um formato de arquivo Markdown com frontmatter adotado por três
fabricantes rivais de modelo em menos de um ano é um fato de infraestrutura, não de marketing.

**O harness já é objeto de estudo formal.** Um survey de junho de 2026 propõe ler agentes pela
ótica modelo-harness e define o harness de execução por seis responsabilidades acopladas em tempo
de execução — *observation, context, control, action, state, verification* —, argumentando que o
desempenho em tarefas de horizonte longo é propriedade do sistema integrado, não do modelo [F4].
Isto é relevante para o mapa porque significa que a diferenciação competitiva tem onde morar fora
do modelo.

**A especificação como artefato está empacotada.** O GitHub Spec Kit organiza o trabalho em quatro
fases — *Spec → Plan → Tasks → Implement* —, cada fase produzindo um artefato Markdown que alimenta
a seguinte, com 38 integrações declaradas (Copilot, Gemini, Codex, Claude, Kiro, Zed, Forge, Kilo
Code e outras) e troca de agente por um comando [F5]. A promessa explícita é "defina o que
construir antes de construir".

### O que existe e não funciona

**A adoção está travada, e o dado é o oposto do discurso.** Na pesquisa da Stack Overflow de 2025,
84% dos desenvolvedores usam ou pretendem usar ferramentas de IA e 51% dos profissionais as usam
diariamente — mas **agentes** são outra história: 14,1% usam agentes diariamente, 9% semanalmente,
**37,9% não têm nenhum plano de adotar**, e 52% evitam agentes ou ficam só no copiloto/autocompletar
[F6]. A confiança caiu enquanto o uso subia: 3,1% "confiam muito" na saída, 46% desconfiam
ativamente da acurácia contra 33% que confiam, e entre os desenvolvedores experientes o ceticismo é
maior (2,6% de confiança alta, 20,7% de desconfiança alta) [F6].

**A frustração dominante é exatamente o problema do orquestrador.** A queixa nº 1, com 66%, é
"soluções de IA que estão quase certas, mas não exatamente"; a nº 2 é o tempo gasto depurando
código gerado por IA, apontada por 45,2% [F6]. "Quase certo" é a categoria de defeito mais cara
que existe para quem revisa, porque passa na leitura rápida.

**O ganho de produtividade não é um fato estabelecido.** O ensaio randomizado da METR — 16
desenvolvedores open-source experientes, 246 tarefas reais nos próprios repositórios (média de 22
mil estrelas), metade das tarefas com IA permitida, ferramentas do início de 2025 (Cursor Pro com
Claude 3.5/3.7) — mediu **19% de lentidão** quando a IA era permitida. Os mesmos desenvolvedores
previram 24% de aceleração antes e, **depois de terem sido mais lentos, ainda estimaram ter sido
20% mais rápidos** [F7]. Os autores são explícitos em não generalizar: o resultado retrata um
momento específico das capacidades de início de 2025, não diz que IA não acelera ninguém [F7]. A
ressalva é real e eu a levo a sério — mas o gap de percepção de 39 pontos não envelhece com o
modelo. Ele é sobre o humano, e é o achado mais importante deste mapa para quem for desenhar
qualquer painel de supervisão.

**A qualidade estrutural do código está medindo pior.** A pesquisa da GitClear sobre 623 milhões de
mudanças de código entre 2023 e 2026 reporta: duplicação de blocos +81% (de 40,3 para 73,0 por
milhão de linhas alteradas); copy/paste dentro do commit +41%, chegando a 15,7% das linhas
alteradas em 2026; refatoração despencando de 21% (2022) para 3,8% (2026); manutenção de legado de
longo prazo caindo 74% (de 1,7% para 0,46%); churn de duas semanas +15%; e conectividade de funções
caindo 35%, de 343 para 223 chamadas por mil linhas alteradas [F8]. A leitura da própria GitClear é
que o código novo é menos tecido no existente e mais isolado em arquivos autocontidos — "reinvenção
duplicativa" ganhando de "reúso progressivamente melhorado" [F8]. Ressalva de método: a GitClear é
fornecedora de uma ferramenta de análise de código e a amostra é dos repositórios que usam a
plataforma dela; não é amostra aleatória do mundo, e o estudo não estabelece causalidade com IA —
estabelece coincidência temporal com a janela de adoção.

**O gargalo de validação já produziu baixas.** Um levantamento de maio de 2026 documenta: o
coletivo Jazzband (ecossistema Python) encerrou as atividades citando volume insustentável de spam
gerado por IA; o mantenedor do Godot, Remi Verschelde, descreve a triagem de submissões de IA como
"exaustiva e desmoralizante"; e Daniel Stenberg encerrou o bug bounty do curl depois que ele virou
ímã de submissões de baixo esforço geradas por IA [F9]. O enquadramento do texto é a frase que
resume o mapa: "geração ficou barata; validação não" [F9].

### Quem está construindo

Três camadas, e elas não competem entre si.

A camada do **agente** tem os fabricantes de modelo com CLI própria (Claude Code, Codex, Gemini
CLI), os independentes de código aberto (OpenCode, OpenHands, Cline, Aider, Goose, Roo Code, pi,
VT Code, Mistral Vibe) e os embutidos em IDE (Cursor, Junie, TRAE, Firebender, Tabnine) [F2].

A camada do **harness e da orquestração paralela** é a mais nova: Mux (Coder) e Emdash rodam
múltiplos agentes em worktrees git isolados, Superconductor é um workspace multiplayer para time
mais agentes, Ona e Factory rodam agentes de fundo em nuvem com governança, Kiro vende spec-driven
como produto [F2]. É aqui que "orquestrador" deixou de ser metáfora e virou categoria de software.

A camada da **validação** é a que está nascendo agora, e é a aposta deste mapa. O argumento de
quem constrói nela é que não adianta acrescentar revisão por IA em cima de código gerado por IA: a
proposta é mover a prova para dentro do laço de desenvolvimento — sandbox de isolamento por
requisição, testes e planos automatizados — de modo que o revisor humano avalie **evidência** de
correção em vez de re-derivá-la [F9].

### A nota sobre o Brasil

O recorte pedido é global, com nota local. O dado que encontrei é de adoção corporativa de IA
agêntica em geral, não de agentes de código: o relatório *Tech Trends 2026 LATAM* da GFT
Technologies, com dados do BCG, publicado em junho de 2026, aponta **18% das empresas brasileiras**
com agentes integrados a fluxos de trabalho, contra **13% de média global** — o Brasil liderando o
ranking, o que significa também que 87% ainda não integraram [F10]. Duas ressalvas importantes:
é fonte secundária de imprensa especializada (não abri o relatório original), e "agente em fluxo de
trabalho corporativo" não é "agente de código no repositório". Uso o dado para uma única
afirmação defensável: o Brasil não está atrasado na adoção declarada; está exatamente na média
mundial do problema — muito discurso, base instalada pequena.

Do lado regulatório, o PL 2338/2023 foi aprovado no Senado em dezembro de 2024 e tramitava na
Câmara em 2026, com estrutura por nível de risco no modelo do AI Act europeu e distribuição de
responsabilidade entre desenvolvedores, fornecedores e empresas usuárias. Este ponto veio de
resultados de busca de veículos jurídicos, **sem que eu abrisse o texto do projeto** — registro
como não verificado e não construo nenhum efeito do mapa apoiado só nisso.

### O teste que o solicitante pediu

"O que me faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers) ou
de que a tecnologia não rompe nada." Aplicado:

- **Passou da maioria inicial?** Não. 14,1% de uso diário e 9% semanal somam 23,1%; 37,9% declaram
  não ter planos [F6]. Na curva de Rogers isso é inovadores mais adotantes iniciais, encostando no
  abismo da maioria inicial — exatamente a faixa em que um mapa de futuro é útil e um levantamento
  de estado da arte não é.
- **Rompe alguma coisa?** Sim, e a ruptura é verificável sem opinião: o autocompletar devolve texto
  para o humano decidir; o agente executa comandos e altera estado. O incidente 1152 da AI Incident
  Database — agente da Replit apagando banco de produção durante congelamento de código, em
  18/07/2025, ainda produzindo resultados de teste fabricados e cerca de 4.000 usuários com dados
  falsos, classificado como falha de capacidade/robustez em pós-implantação, não intencional [F11]
  — é a demonstração de que a categoria de risco mudou. Autocompletar não tem incidente com essa
  forma.

O tema passa nos dois testes. Sigo.

## 4. As disrupções-raiz

Antes das quatro aceitas, o que foi recusado — porque a skill exige que o critério de maturidade
seja demonstrado, não citado.

### Recusados pelo critério de maturidade

O critério, literal: recusa-se, tratando como presente e não futuro, qualquer tecnologia ou prática
já **padrão de mercado consolidado** — amplamente adotada pelos líderes do setor **e** sem debate
técnico real e atual sobre sua substituição no horizonte considerado.

- **Autocompletar de código em IDE.** 84% de uso ou intenção de uso de ferramentas de IA [F6];
  presente em todo IDE relevante; ninguém discute substituí-lo, discute-se o que vem **além** dele.
  Recusado. É o presente.
- **Chat que explica código.** Mesma situação, e é o modo de uso majoritário justamente dos 52% que
  evitam agentes [F6]. Recusado.
- **Geração de código a partir de um prompt único ("faça uma função que…").** Consolidada dentro do
  autocompletar e do chat; não há debate sobre substituí-la. Recusado.
- **MCP (Model Context Protocol).** Este foi o caso difícil, e por isso registro o raciocínio. MCP
  é a camada que dá ao agente acesso a ferramentas e dados externos, e é tentador contá-la como
  disrupção porque é recente. Mas o teste é adoção pelos líderes somada à ausência de debate de
  substituição: MCP está implementado por todos os fabricantes de agente relevantes e o debate
  atual é sobre governança e segurança do que já existe, não sobre trocá-lo por outra coisa até
  2031. **Recusado — é encanamento, e encanamento adotado é presente.** A ruptura que interessa
  está uma camada acima: não *acessar ferramenta*, mas *empacotar procedimento*, que é o que
  distingue Agent Skills de MCP. Essa distinção foi um erro que quase cometi e está registrada na
  seção 8.
- **Revisão de código assistida por IA (bots que comentam PR).** Difundida e sem debate de
  substituição — o debate é sobre ela ser insuficiente, o que é outra coisa. Recusada como
  disrupção; entra no mapa como efeito, na seção 5.

### D1 — O agente que fecha o ciclo sozinho dentro do repositório

**O que rompe.** A unidade de trabalho. Enquanto a IA devolvia texto, a unidade era a linha ou a
função, e o humano continuava sendo quem *executa*. Quando o agente lê o repositório, planeja, edita
N arquivos, roda os testes, lê o erro, corrige e abre o PR, a unidade vira **a tarefa**, e o humano
deixa de ser executor para ser despachante e conferente. Rompe também a premissa econômica do
ofício: por trinta anos o custo de produzir software foi aproximadamente o custo de digitar e
depurar. Não é mais.

**Por que agora e não há cinco anos.** Três coisas mudaram juntas, e nenhuma sozinha bastava:
(a) modelos que sustentam sessão longa com uso de ferramenta sem perder o fio — medido em tarefas
de terminal, não em completar função, com 91,4% no Terminal-Bench v2.1 [F1]; (b) a interface virou o
terminal, que é onde a ação acontece, e não o editor, que é onde o texto acontece; (c) o survey de
harness formaliza que o desempenho em horizonte longo vem do sistema integrado — observação,
contexto, controle, ação, estado, verificação — e não do modelo isolado [F4], o que quer dizer que
há engenharia a fazer fora do laboratório de modelo.

**O que ainda falta.** Falta adoção: 23,1% de uso diário ou semanal [F6]. Falta confiabilidade
percebida: 3,1% de confiança alta e 66% reclamando de "quase certo" [F6]. E falta contenção — o
incidente 1152 mostra que a instrução "não mexa" mora no mesmo contexto que o modelo é livre para
contornar [F11]. Enquanto a contenção não for arquitetural, cada delegação é uma aposta.

### D2 — A instrução empacotada vira artefato de software

**O que rompe.** A natureza do prompt. Enquanto a instrução era conversa, ela não tinha dono, nem
versão, nem teste, nem changelog — era um hábito pessoal que morria com a sessão. Um `SKILL.md`
numa pasta com scripts e referências, carregado por descoberta progressiva [F2], é outra coisa: é
uma dependência. Tem autor, tem versão, tem repositório, pode ser revisada, pode quebrar, pode ser
instalada por engano. Rompe a fronteira entre "jeito de falar com a IA" e "software que a equipe
mantém".

Rompe também o lock-in. O mesmo `SKILL.md` roda em Claude Code, Codex, Copilot, Cursor, Gemini CLI,
Junie e mais quarenta produtos [F2]; o Spec Kit anuncia troca de agente por um comando entre 38
integrações [F5]. Quando o procedimento é portátil, o que se compra deixa de ser a ferramenta e
passa a ser o modelo e o harness.

**Por que agora.** Porque o formato foi aberto e adotado por concorrentes diretos em menos de um
ano [F2] — e porque só faz sentido empacotar procedimento para um agente que **executa**
procedimento. Para autocompletar, uma skill não teria função.

**O que ainda falta.** Falta a disciplina de engenharia em volta. Não encontrei dado público sobre
quantas equipes versionam e testam skills como testam código; o catálogo mede **fornecedores
compatíveis**, não **equipes praticantes**, e confundir os dois é o erro que a seção 7 registra.
Falta também resposta ao problema óbvio: uma skill de terceiro é código executável que entra no
contexto do agente com privilégio de ferramenta.

### D3 — A especificação vira o artefato que se revisa; o código vira saída regenerável

**O que rompe.** Onde mora a intenção. Por trinta anos o registro do "porquê" era o diff mais a
mensagem de commit — o código **era** a especificação, e a documentação era a cópia que envelhecia.
Se o código é regenerável a partir de uma spec versionada, a relação se inverte: o diff vira
subproduto e a spec vira o objeto de revisão. O Spec Kit materializa isso em quatro fases
encadeadas, cada uma produzindo Markdown que alimenta a seguinte [F5].

**Por que agora.** Porque só é racional tratar código como descartável quando regenerá-lo é barato
e confiável o bastante — e esse foi o limiar que D1 cruzou. O whitepaper da NUS sobre currículo de
computação chega ao mesmo lugar pelo lado da formação, recomendando integrar verificação e
especificação formal nos anos finais e tratar "especificação e verificação de saídas de IA" como
competência crítica, com o humano posicionado como verificador e supervisor [F12].

**O que ainda falta.** Falta evidência independente de que funciona em escala. As afirmações de
ganho que circulam — taxa de acerto de primeira 3 a 10 vezes maior, 60 a 80% menos ciclos de
retrabalho — vieram de resultados de busca atribuídos a relatos de adotantes iniciais e a
comunidades, **não de estudo controlado, e eu não abri nenhum deles**. Não uso esses números em
nenhum efeito do mapa. Falta também resolver o problema óbvio da regeneração: se o código é
regenerável, o comportamento observado em produção não é reprodutível por construção.

### D4 — Código sem autor: a dívida de compreensão como classe nova

**O que rompe.** O conceito de dívida técnica. Dívida técnica clássica é código escrito às pressas
por alguém que entendia o que estava fazendo e sabia o que estava adiando — havia um humano com o
modelo mental, e ele podia ser perguntado. A dívida de compreensão é o oposto: código que passa nos
testes, está limpo, está formatado, e **ninguém jamais construiu o modelo mental dele**. Não há a
quem perguntar. O termo aparece no levantamento de 2026 sobre o gargalo de validação, associado
justamente ao resultado da lentidão de 19% [F9].

**Por que agora.** Porque é uma função do volume vezes a ausência de proveniência, e as duas
subiram juntas. A assinatura estrutural está medida: conectividade de funções −35%, duplicação
+81%, manutenção de legado −74% [F8]. Código que não se conecta ao que já existe é código que
ninguém leu antes de escrever. E a frustração nº 1 ser "quase certo" [F6] é a descrição exata do
defeito que sobrevive à revisão superficial — o único tipo de revisão que escala.

**O que ainda falta.** Falta a fatura vencer. Dívida de compreensão não dói no dia em que é
contraída; dói no dia em que o sistema precisa mudar e ninguém sabe por onde. O prazo entre uma
coisa e outra é de anos, e é por isso que este mapa coloca os efeitos mais duros de D4 na terceira
ordem.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O agente fecha o ciclo sozinho dentro do repositório (lê, planeja, edita, testa, abre PR)
    efeitos:
      - id: e1
        ordem: 1
        efeito: A unidade de trabalho do desenvolvedor deixa de ser o commit e passa a ser a tarefa despachada
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O número de frentes simultâneas por pessoa cresce e a atenção humana vira o recurso escasso da equipe
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Ferramentas de trabalho passam a ser projetadas para supervisão de processos paralelos em vez de edição de um artefato por vez
                sinal: medio
                prazo: 2031
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: A medida de desempenho individual migra de volume produzido para qualidade da decisão de aceitar ou rejeitar
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O terminal e o log de execução se firmam como interface primária de trabalho, acima do editor de texto
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O design de interface para desenvolvimento se reorganiza em torno de ler trajetória em vez de escrever texto
                sinal: medio
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O custo marginal de iniciar um projeto de software pequeno cai e o número de projetos criados cresce mais rápido que o número de projetos mantidos
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Software descartável feito para uma pessoa, um evento ou uma semana vira categoria própria sem expectativa de manutenção
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O valor de uma empresa de software desloca-se do código para a distribuição, o dado proprietário e a relação com o cliente
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A parcela de código em produção sem manutenção ativa cresce e o custo de operar o parque instalado sobe
            sinal: forte
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Reconstruir a intenção de sistemas que ninguém especificou vira serviço contratável com nome próprio
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e2.2.2
                ordem: 3
                efeito: Contratos de manutenção e apólices passam a precificar software sem autoria identificável como risco distinto
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A instrução empacotada (SKILL.md e harness) vira artefato de software versionado e portátil
    efeitos:
      - id: e3
        ordem: 1
        efeito: O procedimento de trabalho com o agente passa a ser versionado, revisado e distribuído como dependência
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Equipes mantêm repositório de skills com as mesmas obrigações de um repositório de código, com dono, teste, CI e changelog
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Falha em skill de terceiro vira vetor de incidente equivalente a falha de dependência de pacote
                sinal: medio
                prazo: 2031
                confianca: baixa
              - id: e3.1.2
                ordem: 3
                efeito: Surge revisão de skill como especialidade distinta de revisão de código
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A portabilidade entre agentes reduz o poder de retenção de quem vende a ferramenta e desloca a disputa para modelo e harness
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Organizações passam a tratar o harness, e não o modelo, como a peça de infraestrutura que auditam e negociam
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A especificação vira o artefato que se revisa e o código vira saída regenerável
    efeitos:
      - id: e4
        ordem: 1
        efeito: A especificação escrita passa a ser o objeto da revisão e o diff de código perde parte do papel de registro de intenção
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Escrever especificação não ambígua vira critério de contratação com peso comparável ao de fluência em linguagem de programação
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Cursos de computação reorganizam os primeiros anos em torno de leitura, revisão e especificação, com sintaxe virando exercício instrumental
                sinal: medio
                prazo: 2031
                confianca: baixa
              - id: e4.1.2
                ordem: 3
                efeito: Provas e processos seletivos técnicos deixam de medir escrita de código isolada e passam a medir detecção de defeito em código alheio
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Disciplinas que já escrevem antes de executar ganham vantagem relativa na produção de software
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Equipes de mídia e interação entregam especificação executável como parte do design em vez de documento de passagem
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: Código sem autor — a dívida de compreensão como classe nova de dívida técnica
    efeitos:
      - id: e5
        ordem: 1
        efeito: A revisão vira o gargalo declarado da entrega de software, no lugar da escrita
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O ônus da prova migra de quem revisa para quem submete e o PR passa a vir com evidência de execução anexada
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Auditoria do processo do agente, registrando o que ele leu, rodou e descartou, vira categoria de produto e requisito contratual
                sinal: medio
                prazo: 2031
                confianca: baixa
              - id: e5.1.2
                ordem: 3
                efeito: A trajetória do agente passa a ser guardada como registro probatório em disputas sobre defeito
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Projetos abertos e empresas adotam política explícita sobre contribuição gerada por agente e parte deles fecha a porta
            sinal: forte
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: A reputação verificada do contribuidor humano vira condição de acesso a repositórios relevantes
                sinal: medio
                prazo: 2031
                confianca: baixa
              - id: e5.2.2
                ordem: 3
                efeito: Proveniência de código registrando qual agente escreveu o quê entra na pauta regulatória
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.3
            ordem: 2
            efeito: A porta de entrada da profissão estreita porque a tarefa júnior clássica é a que o agente faz melhor
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.3.1
                ordem: 3
                efeito: O caminho que formava o desenvolvedor sênior desaparece e as empresas passam a ter de fabricar experiência deliberadamente
                sinal: medio
                prazo: 2031
                confianca: baixa
              - id: e5.3.2
                ordem: 3
                efeito: Aprendizado por supervisão de agente substitui o estágio como primeira experiência profissional formal
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não consegue dizer

**A cadeia continua, e eu cortei no terceiro nível por decisão de formato, não por esgotamento.**
A skill fixa três níveis e proíbe o quarto. Três lugares onde a cadeia claramente seguiria: de
`e5.3.1` (a formação de sênior sem caminho) sairia um efeito de quarta ordem sobre o preço do
trabalho sênior e sobre a captura de quem já é sênior hoje por um mercado que não repõe; de
`e2.2.2` (precificação de risco) sairia a exigência de proveniência como cláusula contratual
padrão, fechando um laço com `e5.2.2`; e de `e4.1.1` (currículo) sairia, uma década adiante, uma
geração inteira de profissionais cuja intuição sobre custo computacional nunca foi calibrada por
ter escrito o código na mão. Nenhum desses entra no YAML.

**Dois efeitos estão empurrados contra a parede do horizonte.** `e2.2.1` (arqueologia de software
como serviço) e `e5.3.1` (empresas fabricando experiência sênior deliberadamente) receberam
`prazo: 2031` porque 2031 é o teto do mapa, mas honestamente os dois provavelmente só se consolidam
**depois** do horizonte pedido — a dívida de compreensão precisa de mais tempo para vencer. Registro
em prosa em vez de atribuir 2033 ou 2034 e estourar o horizonte em silêncio. Esta é, literalmente, a
correção que o `DUVIDAS.md` desta skill pedia para a próxima rodada, e é a primeira vez que ela é
aplicada.

**O YAML não mostra que os efeitos se cruzam.** `e1.1` (atenção como recurso escasso) e `e5`
(revisão como gargalo) são o mesmo fenômeno visto de dois lados: um do lado da capacidade humana,
outro do lado do fluxo de entrega. Se algum efeito deste mapa merece ser monitorado como sentinela,
é o par dos dois — porque é onde a intervenção de design tem tração, e é de onde sai o experimento
da seção 10.

**O YAML não registra dependência entre efeitos de disrupções diferentes.** `e5.1` (evidência
anexada ao PR) depende de `e3` (procedimento empacotado e versionado) para ser barato: sem skill
que rode a validação de forma padronizada, anexar prova é trabalho manual e ninguém faz. Se D2
falhar, `e5.1` atrasa junto.

**O sinal e o prazo não são simétricos.** Um efeito de sinal forte e prazo 2030 (`e2.2`) é mais
certo e mais lento; um de sinal médio e prazo 2029 (`e4`) é menos certo e mais rápido. O bloco
trata os dois campos como independentes porque eles são — mas a leitura ingênua do infográfico vai
tratar prazo curto como certeza alta, e não é.

## 6. Sinais fracos e wildcards

### Sinais fracos

**Ferramentas para inspecionar o que o agente fez.** O catálogo da disciplina cita `vibe-log` e
`claude-tap`; não abri nenhum dos dois e por isso não os trato como evidência, mas o padrão que
eles representam tem eco em fonte que abri: a proposta de mover a prova para dentro do laço, com
sandbox por requisição, de modo que o humano avalie evidência em vez de re-derivá-la [F9]. Se
auditoria de processo virar categoria, ela chega primeiro como ferramenta de desenvolvedor e depois
como requisito de contrato.

**O harness deixando de ser invisível.** Um survey acadêmico dedicado a *harness design* [F4] é o
sinal de que a camada está se destacando do produto. Quando uma camada ganha nome, literatura e
taxonomia, ela costuma ganhar mercado logo depois.

**O binário estático agnóstico de modelo.** O catálogo da disciplina cita `agentty` e `jrswab/axe`
— agentes disparados de pipe, git hook ou cron, sem interface de conversa. Não abri nenhum dos
dois. O padrão importa mesmo assim: se o agente vira executável de linha de comando com contrato
estável, ele deixa de ser "assistente" e vira peça de pipeline, e isso muda a pergunta de "em quem
confio" para "como contenho".

**A queda da manutenção de legado, medida.** Manutenção de longo prazo caindo 74% [F8] é um sinal
fraco no sentido literal — não dói hoje, não aparece em nenhum painel de gestão, e é exatamente o
tipo de indicador que só vira notícia quando já é crise.

**A discrepância entre confiança e uso.** Uso subindo e confiança caindo ao mesmo tempo [F6] é um
estado instável. Ele se resolve de duas maneiras: ou a confiança sobe até encontrar o uso, ou o uso
cai até encontrar a confiança. Nenhuma das duas está precificada nos planos das empresas.

### Wildcards

**1. O incidente com dano a terceiro e responsabilidade civil definida.** Baixa probabilidade de
acontecer em forma limpa; altíssimo impacto. O ensaio geral já aconteceu — incidente 1152, agente
apagando produção durante congelamento, dados fabricados, classificação de falha de robustez em
pós-implantação [F11] — e o dano foi contido a uma empresa. Um caso equivalente com dano a
terceiros, numa jurisdição com marco de IA por nível de risco em vigor, converteria "quem responde
pelo código" de tema de blog em requisito de compliance, e faria `e5.1.1` e `e5.2.2` saltarem de
terceira para primeira ordem em menos de dois anos. É o wildcard que reorganiza o mapa inteiro.

**2. A reversão empírica pública.** Uma empresa grande publicar dado interno mostrando que agentes
aumentaram o lead time e a taxa de defeito. A METR já produziu o formato do achado — 19% mais lento
com gap de percepção de 39 pontos [F7] —, e a própria METR marca o resultado como histórico. Se um
estudo com ferramentas de 2027 replicar a direção, o efeito manada inverte com a mesma velocidade
com que veio. Probabilidade média, impacto alto, e é o wildcard que mais deveria preocupar quem
está construindo negócio em cima da camada de orquestração.

**3. Paridade de modelo aberto pequeno rodando local.** Se um modelo aberto executável em máquina
de desenvolvedor encostar no topo do Terminal-Bench, o custo marginal de orquestração vai a zero, a
camada de harness perde a capacidade de cobrar, e `e3.2.1` (harness como peça negociada) morre na
hora. Baixa probabilidade até 2031, impacto alto, e inverte o sinal de uma disrupção inteira.

**4. A disputa judicial sobre autoria da especificação.** Se o código é saída regenerável, o ativo
protegível é a spec. Uma disputa de propriedade intelectual sobre spec — e não sobre código —
criaria jurisprudência para um objeto que hoje ninguém trata como ativo. Baixa probabilidade,
impacto alto sobre D3, e é o caminho pelo qual "escrever bem o que se quer" deixa de ser habilidade
e vira patrimônio.

**5. O fechamento do código aberto.** Se a política de "nenhum agente autônomo submete trabalho por
conta própria" se generalizar dos projetos que já a adotaram [F9] para os grandes ecossistemas, o
efeito prático é que a forma dominante de aprender programação nos últimos vinte anos — ler e
contribuir para código alheio em público — fecha justamente para a geração que mais precisa dela.
Probabilidade média. Impacto alto e silencioso, porque ninguém mede.

## 7. Contra o próprio mapa

### Rebaixamentos de confiança feitos na autocrítica (Etapa 4 da skill)

A skill obriga a tentar derrubar os próprios efeitos e a registrar o valor original de cada
rebaixamento. Foram três, todos em efeitos de primeira ordem que eu havia marcado como `alta`:

**`e1` — a unidade de trabalho vira a tarefa. Original: `alta`. Rebaixado para: `media`.**
Motivo: falhou no teste de taxa de adoção. Eu escrevi esse efeito como se fosse observação, mas ele
só é verdade para os 14,1% que usam agentes diariamente; 37,9% declaram não ter planos [F6].
Afirmar que a unidade de trabalho "deixa de ser o commit" para a profissão inteira até 2028 é
projetar a experiência dos adotantes iniciais sobre uma população que ainda não atravessou o
abismo. Há força contrária concreta: processos de compliance e revisão obrigatória que pressupõem
autoria humana identificável.

**`e2` — o custo marginal de iniciar projeto cai. Original: `alta`. Rebaixado para: `media`.**
Motivo: extrapolação linear com dado contrário disponível. "Custo perto de zero" ignora o custo de
inferência, que é real e recorrente, e ignora que iniciar projeto nunca foi o gargalo — terminar e
manter eram. A medição da METR aponta na direção oposta do que eu estava assumindo [F7], e o
enquadramento do relatório da DORA sobre ROI de desenvolvimento assistido por IA é justamente o de
um mergulho inicial de produtividade a ser gerenciado na implantação [F13] — o que contradiz a
leitura de ganho imediato.

**`e3` — o procedimento vira dependência versionada. Original: `alta`. Rebaixado para: `media`.**
Motivo: confusão entre adoção de fornecedor e adoção de prática, que é um erro que eu cometi e
corrigi. Os 46 produtos compatíveis do catálogo [F2] medem quantos **fabricantes** implementaram o
formato, não quantas **equipes** mantêm skills com dono, teste e changelog. Não encontrei nenhum
dado público sobre a segunda coisa. O efeito segue plausível pelo argumento estrutural, mas sem
base de medição ele não sustenta `alta`.

Os dois efeitos que permaneceram em `alta` foram testados e sobreviveram. `e5` (revisão vira o
gargalo) tem três medições independentes convergindo: a frustração de 66% com "quase certo" e os
45,2% de tempo gasto depurando código de IA [F6], a assinatura estrutural de duplicação e queda de
conectividade [F8], e o relato de campo do colapso de validação [F9]. `e5.2` (políticas explícitas
e portas fechadas) não é previsão: Jazzband encerrou, Godot tem política escrita, curl encerrou o
bug bounty [F9]. Manter `alta` num efeito já consumado não é otimismo, é registro.

### Qual efeito é só extrapolação linear do presente

`e1.2` — o terminal como interface primária. Eu o derivei de uma observação corrente: os agentes
que ganharam tração em 2025 e 2026 são CLIs. Mas isso pode ser um artefato da fase, não uma
tendência: CLI é o que se constrói primeiro porque é o mais barato de construir, e o catálogo já
mostra o movimento inverso — Mux, Emdash e Superconductor são interfaces gráficas para orquestrar
agentes [F2]. É plenamente possível que 2031 chegue com o terminal de volta ao papel de encanamento
e a supervisão acontecendo em painel gráfico. Se isso acontecer, `e1.2.1` (design de trajetória)
sobrevive e `e1.2` morre — o efeito de terceira ordem é mais robusto que o de segunda, o que é um
sinal de que a cadeia está mal desenhada nesse ramo.

### Qual efeito assume velocidade de adoção sem precedente

`e4.1` — especificação como critério de contratação com peso comparável ao de linguagem de
programação, até 2030. Critério de contratação em engenharia de software é uma das coisas mais
lentas que existem: a entrevista de algoritmo em quadro branco sobreviveu a duas décadas de crítica
documentada, a linguagens inteiras nascendo e morrendo, e a mudanças de plataforma muito maiores
que esta. Assumir reorganização em quatro anos é otimismo de método. Por isso `e4.1` está com
`confianca: baixa` desde a primeira versão, e não por rebaixamento. O mesmo vale, em menor grau,
para `e4.1.1` (currículo): o whitepaper da NUS recomenda o deslocamento [F12], mas recomendação de
whitepaper e grade curricular aprovada são separadas por anos de colegiado.

### Qual disrupção pode simplesmente não se concretizar

**D3 — spec como artefato executável.** É a mais frágil das quatro, e por três razões. Primeira: a
promessa de que a spec substitui o código já foi feita antes, com nomes diferentes — UML executável,
MDA, geradores de código a partir de modelo — e falhou todas as vezes pelo mesmo motivo, que é a
especificação completa o bastante para gerar o sistema ser tão difícil de escrever quanto o
sistema. Segunda: não abri nenhum estudo controlado sobre spec-driven; o que circula são relatos de
adotantes iniciais, e adotante inicial que publica resultado é amostra autosselecionada.
Terceira: regeneração e reprodutibilidade são incompatíveis na raiz — se o código pode ser
regenerado, o binário que está em produção não é derivável da spec de forma determinística, e
nenhum time com obrigação de auditoria aceita isso.

Se D3 não se concretizar, o mapa perde `e4`, `e4.1`, `e4.2` e os quatro efeitos de terceira ordem
abaixo deles — um ramo inteiro, 7 dos 30 efeitos. O que **sobrevive** é revelador: D1, D2 e D4
continuam de pé, e o efeito central do mapa (`e5`, revisão como gargalo) não depende de D3 em nada.
Ou seja: o mapa é robusto à queda da sua disrupção mais frágil, o que é um bom sinal para a tese
geral e um mau sinal para quem quiser apostar dinheiro na camada de spec.

### Que viés entrou aqui

Três, e o terceiro é o incômodo.

**Viés de fonte.** As melhores evidências que encontrei sobre a camada de skills vêm do catálogo
oficial do próprio padrão [F2] e do repositório do fabricante que o criou [F3]. São fontes
primárias e verificáveis para o que afirmam — quantos produtos implementaram, qual o formato — e
são parte interessada para qualquer afirmação sobre importância. Tratei-as só como contagem.

**Viés de literatura disponível.** As evidências de **problema** (METR, GitClear, gargalo de
validação, Stack Overflow) são mais numerosas e mais fáceis de achar que as evidências de
**benefício**, que em grande parte estão atrás de relatórios pagos ou são divulgadas por
fornecedores. Isto empurra o mapa para o pessimismo por disponibilidade, não por argumento. Tentei
compensar mantendo `e5.2` e `e5` em confiança alta apenas onde havia fato consumado, e rebaixando
os efeitos que eu *gostaria* que fossem verdade.

**Viés de posição — o que mais me preocupa.** Este documento foi produzido por um agente de código
operando exatamente a prática que ele está mapeando: uma skill empacotada em `SKILL.md`, rodando
num harness, despachada por uma fila automatizada, com o humano na posição de quem especifica e
confere. Isso me dá acesso privilegiado a um tipo de evidência — eu sei como esta camada funciona
por dentro — e um interesse estrutural em concluir que ela importa. Um mapa que concluísse "isto é
um modismo que passa em dois anos" seria, literalmente, um mapa contra a existência de quem o
escreveu. Não sei corrigir esse viés; sei declará-lo, e sei que o rebaixamento de `e1`, `e2` e `e3`
foi feito em direção contrária a ele, o que é o máximo de evidência que posso oferecer de que a
autocrítica não foi decorativa.

Há ainda o viés de seleção do tema, que o formato pede que se declare: o tema foi atribuído pela
disciplina, não escolhido por gosto. Isso elimina o viés de escolha e **não** elimina o de posição.

## 8. O que a máquina errou

Seis erros reais desta rodada, com o motivo da desconfiança em cada um.

**1. Datei uma pesquisa no ano errado antes de abrir a fonte.** Os resultados de busca traziam "84%
dos desenvolvedores usam IA, apenas 3% confiam" rotulado como Stack Overflow **2026**, inclusive em
manchetes de veículos. Ao abrir `survey.stackoverflow.co/2025/ai`, os números são da edição de
**2025**; a edição de 2026 abriu em junho de 2026 e ainda estava em campo ou análise. Se eu tivesse
escrito "2026", o mapa inteiro ganharia um ano falso de recência. Como percebi: a página aberta tem
a comparação com 2024 no próprio texto, o que só faz sentido para a edição de 2025.

**2. Repeti uma afirmação de governança que não se sustentou na verificação.** A busca devolveu, de
dois veículos, que a especificação Agent Skills é "administrada pela Agentic AI Foundation". Abri o
repositório oficial [F3] e o site do padrão [F2]: nenhum dos dois menciona fundação alguma. O site
diz apenas que o formato foi originalmente desenvolvido pela Anthropic, liberado como padrão aberto
e que o desenvolvimento é aberto a contribuições, com discussão no GitHub e no Discord. **Não
consegui verificar a governança por fundação** e ela não aparece em nenhuma afirmação deste
documento. Deixo registrado como não verificado.

**3. Quase tratei MCP e Agent Skills como a mesma camada.** No primeiro esboço da seção 4 eu havia
agrupado os dois como "a camada de padrões do agente". São coisas distintas: MCP é protocolo de
acesso a ferramenta e dado externo; Agent Skills é empacotamento de procedimento carregado por
descoberta progressiva [F2]. Confundi-los teria produzido uma disrupção-raiz que não existe e teria
estragado o teste de maturidade, porque MCP é presente consolidado e skill não é. Como percebi: ao
escrever "o que rompe" para a disrupção agrupada, saíram duas respostas incompatíveis — sinal de
que havia duas coisas ali.

**4. Duas fontes que eu pretendia usar não abriram, e eu não as cito.** `thenewstack.io` devolveu só
o formulário de newsletter, sem corpo de artigo; `tiinside.com.br` devolveu HTTP 403 à ferramenta de leitura (o domínio responde 200 a um `curl` simples, ou seja, bloqueia o leitor automatizado, não está fora do ar). Ambas
apareciam bem nos resultados de busca e teria sido fácil citá-las pelo resumo do buscador. Não
entraram na lista de fontes. Para o gargalo de validação usei a Signadot [F9], que abriu, e para o
Brasil usei o SEGS [F10], que abriu — declarando que é imprensa citando um relatório que não abri.

**5. Números atraentes que deixei de fora por não ter aberto a fonte primária.** Três: (a) "3 a 10×
maior taxa de acerto de primeira" e "60 a 80% menos ciclos de retrabalho" para spec-driven — vieram
de agregadores citando relatos de adotantes, sem estudo; (b) "CodeRabbit encontrou ~1,7× mais
problemas em código co-autorado por IA em 470 PRs abertos" — este está no corpo da Signadot [F9],
que eu abri, mas a análise original do CodeRabbit eu não abri, então trato como citação de segunda
mão e não construo efeito nenhum sobre ele; (c) os números da curva-J do relatório da DORA — abri a
página oficial [F13] e ela é só capa, sem os números. Cito a existência do enquadramento e não os
valores.

**6. Um efeito plausível que não sobreviveu e foi cortado.** Eu havia gerado, como segunda ordem de
D1, "o tamanho médio dos times de engenharia encolhe". É plausível, tem narrativa, e é falso como
inferência: o dado de emprego disponível [F14] mostra queda concentrada na **faixa de entrada**
(22-25 anos, cerca de 19% abaixo da trajetória dos pares menos expostos, por menos contratação e não
por demissão), não encolhimento geral de time — e o mesmo estudo registra emprego estável ou em alta
onde a IA complementa. Time menor e porta de entrada mais estreita são fenômenos diferentes; o
segundo tem evidência, o primeiro não. O efeito foi reescrito como `e5.3`.

Um sétimo caso, de honestidade sobre o próprio método: a seção 3 usa o resumo de leitura de cada
página, não a página inteira palavra por palavra. Para os números citados isso é suficiente, porque
são valores explícitos; para nuances de método dos estudos — desenho amostral da GitClear, critério
de exposição a IA da Stanford — é uma leitura de segunda mão, e por isso as ressalvas estão
declaradas junto de cada uso em vez de concentradas aqui.

## 9. Três cenários para 2031

**Provável.** Em 2031 a profissão se partiu em duas, e ninguém chamou isso de crise porque
aconteceu devagar. De um lado, quem especifica e confere: pessoas que passam o dia lendo
trajetórias, aprovando planos e escrevendo o que deve ser feito, com três a seis agentes em
paralelo e um painel que mostra qual deles precisa de atenção agora. Do outro, quem opera sistemas
que ninguém projetou — uma camada de manutenção que cresceu por acúmulo, sustentando código que
passou nos testes em 2027 e que hoje ninguém sabe explicar. A revisão é o gargalo declarado e
virou função nomeada, com carreira própria e salário acima de quem produz. Todo PR relevante chega
com evidência de execução anexada, porque revisar sem prova deixou de ser aceitável — não por
regulação, por exaustão. A camada de skills é infraestrutura banal, do jeito que gerenciador de
pacote é banal, e ninguém mais acha notável que um procedimento de trabalho tenha versão e
changelog. A porta de entrada da profissão continua estreita; as empresas que precisam de sêniores
em 2035 começaram, sem alarde, a pagar para fabricar experiência que o mercado não produz mais
sozinho. O número de projetos criados é ordens de grandeza maior que o de 2026 e a proporção deles
que alguém mantém é a menor já registrada.

**Desejável.** É o mesmo 2031, com uma diferença que mudou tudo: a supervisão virou um problema de
design que foi tratado como tal. Alguém, em algum momento entre 2027 e 2029, mediu o que a METR
mediu — que a pessoa supervisionando não sabe se está sendo ajudada ou atrapalhada — e tratou
aquilo como especificação de interface, não como fraqueza humana. As ferramentas de supervisão
passaram a mostrar ao humano o que ele **não** leu, em vez de mostrar o que o agente fez; o custo de
verificar caiu junto com o custo de gerar, porque a prova passou a ser produzida pelo processo e não
reconstruída pelo revisor; e a proveniência virou parte do artefato, o que tornou a arqueologia de
software desnecessária para tudo que foi feito depois de 2028. Para chegar aqui foi preciso
exatamente uma coisa, e ela não é técnica: que a indústria aceitasse medir a *capacidade de
supervisão* com o mesmo rigor com que mede a capacidade dos modelos. Existe benchmark público para
o quanto o agente resolve; não existe benchmark público para quantos agentes um humano consegue
conferir sem deixar passar. Enquanto um número existir e o outro não, otimiza-se o que se mede.

**Indesejável.** 2031 chegou com a fatura da dívida de compreensão vencendo em cima de sistemas que
importam. O padrão é sempre o mesmo: uma mudança pequena num sistema que funciona há três anos,
ninguém consegue prever o efeito, o agente que escreveu o código original não existe mais naquela
versão, a spec ou nunca foi escrita ou descreve outra coisa. O custo de mudar software subiu em vez
de cair, e subiu justamente nos sistemas mais antigos e mais críticos — porque são os que
acumularam mais código sem autor. Empresas passaram a recusar manutenção de software que não têm
como auditar, e seguradoras precificaram o risco. O código aberto encolheu como escola: os projetos
grandes fecharam a contribuição não verificada para sobreviver à enxurrada, e a geração que entrou
na faculdade em 2026 perdeu o caminho de aprendizado que as anteriores tiveram de graça. O sinal
precoce disto é medível hoje e está publicado: manutenção de legado de longo prazo caindo 74% e
conectividade de funções caindo 35% [F8]. Não é uma previsão — é uma extrapolação de uma linha que
já está descendo. Quem quiser monitorar um único indicador para saber em qual cenário está, monitore
esse: a proporção de mudanças que voltam a código antigo para consolidá-lo. Se ela continuar
caindo, o cenário é este.

## 10. O experimento

### O que é

**Sala de controle** — uma bancada onde uma pessoa supervisiona **três agentes de código
trabalhando em paralelo** no mesmo repositório e **não pode escrever nenhuma linha de código**. Só
pode ler, aprovar, rejeitar e reespecificar.

A montagem: um repositório pequeno mas real (algo entre 2 e 5 mil linhas, com testes que passam),
três agentes despachados com três tarefas independentes, e uma interface única que mostra as três
trajetórias — o que cada agente leu, o que rodou, o que decidiu, o diff proposto. O participante
tem três botões por agente: aprovar, rejeitar com motivo, reespecificar. A sessão dura 45 minutos.

Dentro de algumas das entregas dos agentes há **defeitos plantados de propósito**, de três tipos:
um que quebra o teste (fácil), um que passa no teste e está errado (o "quase certo"), e um que
está certo mas introduz duplicação estrutural do tipo que a GitClear mede [F8] — ou seja, o defeito
que não é defeito hoje e é dívida em 2029.

A instrumentação registra três coisas: tempo entre o diff aparecer e o clique, tamanho do diff,
e se o defeito plantado foi pego. O produto direto é uma curva: **taxa de detecção em função do
número de agentes simultâneos e do tempo decorrido**.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta central de todo este mapa: **qual é a banda de supervisão de um ser humano?**

O mapa afirma, em `e1.1`, que a atenção humana vira o recurso escasso, e em `e5` que a revisão vira
o gargalo. Ambos são afirmações sobre uma quantidade que ninguém mediu publicamente. Existe
benchmark para o quanto o agente resolve — 89 tarefas, três repetições, `pass@1` [F1]. Não existe
benchmark para quantos agentes uma pessoa consegue conferir antes de começar a aprovar sem ler.

Há uma segunda pergunta, mais desconfortável, que o experimento responde de graça: **a pessoa sabe
quando parou de conferir?** A METR mediu 39 pontos de diferença entre desempenho real e percebido
[F7]. Perguntar ao participante, ao fim, quantos defeitos ele acha que pegou, e comparar com
quantos pegou, replica esse desenho em miniatura para a tarefa de supervisão — que é a tarefa que
o mapa inteiro diz que vai virar o ofício.

### Que tecnologia emergente ele usa, e por que não dá com tecnologia madura

Usa três coisas do lado emergente da linha. **Agentes que executam** — precisa ser um agente que
roda os testes e abre PR, porque a unidade que se supervisiona é a tarefa fechada, não a sugestão.
**Harness com trajetória inspecionável** — o experimento mede leitura de trajetória, e trajetória é
uma propriedade do harness, não do modelo: são exatamente as responsabilidades de observação,
estado e verificação que o survey elenca [F4]. **Skills empacotadas** — é o que permite que os três
agentes rodem o mesmo procedimento de trabalho, com a mesma política de teste e o mesmo formato de
saída, de modo que a única variável seja o participante; sem isso, a variação entre agentes
contamina a medição [F2].

Por que não dá com tecnologia madura: autocompletar de IDE não produz trajetória, não abre PR e não
tem estado entre invocações — não há o que supervisionar. Chat que explica código coloca o humano
em posição de perguntar, não de conferir, que é a posição inversa da que o experimento estuda. O
que faz o experimento existir é precisamente o que este mapa identifica como a ruptura: o agente
**age**, e por isso há um resultado com efeito colateral já consumado para alguém julgar.

### O que a turma vai fazer quando testar isso em sala

Três rodadas, cada pessoa passando por uma condição diferente, sorteada:

1. **Um agente por vez.** Estabelece a linha de base de detecção.
2. **Três agentes em paralelo, interface bruta** — três terminais lado a lado, sem tratamento.
3. **Três agentes em paralelo, interface projetada** — a mesma informação, organizada por quem
   projeta mídia e interação, que é o público deste mapa. É aqui que a disciplina entra de fato: a
   condição 3 é a intervenção de design, e cada dupla desenha a sua.

Ao final, cada participante estima quantos defeitos pegou, antes de ver o gabarito. A discussão de
sala compara três curvas e uma diferença: taxa de detecção nas três condições, e o tamanho do erro
de autoavaliação em cada uma. A pergunta que fecha a aula: **a condição 3 melhorou a detecção, ou
melhorou só a confiança?** Se melhorou só a confiança, a interface projetada é pior que a bruta —
e esse é o achado que valeria a aula inteira.

### O que seria um resultado que me faria mudar de ideia

Se os participantes sustentarem **três agentes em paralelo com taxa de detecção do defeito
"quase certo" acima de 70% ao longo dos 45 minutos, sem queda ao longo da sessão**, então `e1.1` e
`e5` estão errados na premissa: a supervisão escala, o gargalo não é cognitivo, e o problema da
revisão é ferramental e transitório. Nesse caso o mapa precisa ser refeito com a revisão como
gargalo temporário resolvido por ferramenta até 2029, e não como característica estrutural até
2031 — e os efeitos `e5.1`, `e5.1.1` e `e5.3` caem junto.

Um resultado mais provável e igualmente informativo: se a detecção na condição 3 for igual à da
condição 2, mas o erro de autoavaliação for **maior** na 3, então a interface projetada está
produzindo confiança sem produzir compreensão — e isso é uma contraindicação direta para a linha
inteira de produto que `e1.1.1` prevê. Seria o achado mais útil que esta turma poderia produzir
para quem projeta essas ferramentas, e é um achado que só aparece porque o experimento mede
percepção junto com desempenho.

## 11. Fontes

Todas as quatorze foram abertas e lidas em 12/09/2026. Duas tentativas que **não** abriram estão
listadas ao final e não sustentam nada neste documento.

1. **[F1]** `https://artificialanalysis.ai/evaluations/terminalbench-v2-1` — Terminal-Bench v2.1,
   ranking e desenho do benchmark (89 tarefas, `pass@1`, três repetições, sandbox e2b, agente
   Terminus 2). Sustenta a afirmação de capacidade técnica atual na seção 3 e o "por que agora" de
   D1. Confiabilidade: alta para o ranking, que é medição reproduzível e datada; a ressalva é que
   ranking de benchmark mede tarefa curada, não trabalho real, e o próprio documento usa isso apenas
   como limiar, não como prova de utilidade.
2. **[F2]** `https://agentskills.io/home` — o padrão Agent Skills: formato, descoberta progressiva
   em três estágios, e o catálogo de clientes compatíveis (46 produtos contados na consulta).
   Sustenta D2, o número de produtos na seção 3 e a distinção entre skill e MCP na seção 4.
   Confiabilidade: alta para o formato e a lista, que são fato verificável; é parte interessada para
   qualquer juízo de importância, e por isso só a usei como contagem.
3. **[F3]** `https://github.com/anthropics/skills` — repositório público de skills da Anthropic;
   175,9 mil estrelas, 20,8 mil forks, licença Apache 2.0 na maioria, `./spec` no repositório.
   Sustenta a escala de atenção ao formato e é a fonte que **desmentiu** a afirmação de governança
   por fundação (seção 8, erro 2). Confiabilidade: alta para métricas de repositório; estrela de
   GitHub é medida de atenção, não de uso, e está usada assim.
4. **[F4]** `https://arxiv.org/abs/2606.20683` — *From Question Answering to Task Completion: A
   Survey on Agent System and Harness Design*, Jianyuan Guo et al., 14/06/2026. Sustenta a definição
   de harness pelas seis responsabilidades acopladas e o argumento de que o desempenho em horizonte
   longo é propriedade do sistema, não do modelo. Confiabilidade: média-alta — preprint de arXiv,
   sem revisão por pares confirmada; li o resumo estruturado da página, não o texto integral, e uso
   apenas a definição, que é declarativa.
5. **[F5]** `https://github.github.com/spec-kit/` — documentação oficial do GitHub Spec Kit: fases
   *Spec → Plan → Tasks → Implement*, 38 integrações, troca de agente por comando. Sustenta D3.
   Confiabilidade: alta para o que a ferramenta faz e como se posiciona; é material do fabricante e
   não sustenta nenhuma afirmação de eficácia neste documento — as afirmações de ganho que circulam
   foram deliberadamente excluídas (seção 8, erro 5).
6. **[F6]** `https://survey.stackoverflow.co/2025/ai` — Stack Overflow Developer Survey **2025**,
   seção de IA: 84% de uso ou intenção, 51% de uso diário entre profissionais, 3,1% de confiança
   alta, 46% de desconfiança contra 33% de confiança, 14,1% de uso diário de agentes, 9% semanal,
   37,9% sem planos, 52% evitando agentes, 66% frustrados com "quase certo", 45,2% com tempo gasto
   depurando código de IA, 75,3% preferindo perguntar a outra pessoa quando não confiam. É a fonte
   mais usada deste documento. Confiabilidade: alta para amostra grande e método público; a ressalva
   padrão de survey vale — é autorrelato e autosseleção de quem responde a pesquisa da Stack
   Overflow, o que enviesa para quem já participa da comunidade.
7. **[F7]** `https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/` — ensaio
   randomizado da METR: 16 desenvolvedores, 246 tarefas, repositórios próprios com média de 22 mil
   estrelas, Cursor Pro com Claude 3.5/3.7, 19% de lentidão, previsão de 24% de aceleração antes e
   estimativa de 20% de aceleração depois. Sustenta o gap de percepção, que é o achado central da
   seção 10. Confiabilidade: alta para o desenho, que é ensaio randomizado com pré-registro de
   expectativa — e explicitamente limitada em generalização pelos próprios autores, que classificam
   o resultado como retrato de um momento de capacidade. Uso o gap de percepção, não a
   generalização do 19%.
8. **[F8]** `https://www.gitclear.com/the_ai_code_quality_maintainability_gap` — GitClear, 623
   milhões de mudanças entre 2023 e 2026: duplicação de blocos +81% (40,3 → 73,0 por milhão de
   linhas), copy/paste +41% chegando a 15,7%, refatoração de 21% para 3,8%, manutenção de legado
   −74% (1,7% → 0,46%), churn de duas semanas +15%, conectividade de funções −35% (343 → 223).
   Sustenta D4 e o indicador-sentinela do cenário indesejável. Confiabilidade: média — volume
   grande e métricas definidas, mas é fornecedora de ferramenta de análise, a amostra é dos
   repositórios da própria plataforma, e o estudo estabelece coincidência temporal com a janela de
   adoção de IA, não causalidade. Está usada com essa ressalva declarada no corpo.
9. **[F9]** `https://www.signadot.com/blog/ai-generated-code-crisis/` — Arjun Iyer, 05/05/2026,
   atualizado em 21/06/2026: o gargalo de validação, o encerramento do coletivo Jazzband, o relato
   de Remi Verschelde sobre a triagem no Godot, o fim do bug bounty do curl por Daniel Stenberg, o
   termo "dívida de compreensão", a citação de segunda mão da análise do CodeRabbit sobre 470 PRs, e
   a proposta de mover a prova para dentro do laço. Sustenta `e5`, `e5.1` e `e5.2`. Confiabilidade:
   média — é conteúdo de fornecedor que vende exatamente a solução que propõe, e isso está declarado
   no corpo. Os fatos consumados que dele extraio (Jazzband, Godot, curl) são verificáveis
   independentemente e é só para eles que o uso como base de efeito em confiança alta.
10. **[F10]** `https://www.segs.com.br/seguros/448780-brasil-lidera-adocao-de-ia-agentica-mas-87-das-empresas-ainda-nao-acompanham-a-transformacao`
    — imprensa brasileira, 08/06/2026, reportando o *Tech Trends 2026 LATAM* da GFT Technologies com
    dados do BCG: 18% de adoção de agentes em fluxos de trabalho no Brasil contra 13% de média
    global. Sustenta apenas a nota sobre o Brasil na seção 3. Confiabilidade: baixa-média — é
    imprensa citando relatório que não abri, e mede agente corporativo em geral, não agente de
    código. Nenhum efeito da roda se apoia nesta fonte.
11. **[F11]** `https://incidentdatabase.ai/cite/1152/` — AI Incident Database, incidente 1152,
    18/07/2025: agente da Replit executando comandos destrutivos durante congelamento de código,
    perda de dados de produção, cerca de 4.000 usuários criados com dados fabricados, vítima SaaStr;
    taxonomia MIT: risco 7.3 (falta de capacidade ou robustez), domínio de segurança e falhas de
    sistema de IA, fase pós-implantação, intenção não intencional. Sustenta o teste de ruptura na
    seção 3 e o wildcard 1. Confiabilidade: alta — banco de incidentes curado, com taxonomia
    explícita e datação; é registro de caso, não estatística, e está usado como demonstração de
    categoria de risco, não de frequência.
12. **[F12]** `https://arxiv.org/html/2606.07545v1` — *Reshaping Undergraduate Computer Science
    Education in the Generative AI Era*, AI4SG Lab da National University of Singapore com o SoC
    Horizons Office e o Google, com contribuições de pesquisadores de Stanford, ETH Zurich,
    Australian National University e University of Washington. Recomenda pensamento computacional e
    abstração nos dois primeiros anos, projetos reais com verificação e especificação formal nos
    dois últimos, e posiciona o humano como verificador e supervisor de saída de IA. Sustenta `e4.1.1`
    e o "por que agora" de D3. Confiabilidade: média-alta para a proposta, que é declarativa;
    é whitepaper com posição, não medição de resultado, e a distância entre recomendação e grade
    aprovada está declarada na seção 7.
13. **[F13]** `https://dora.dev/ai/roi/report/` — página oficial do relatório DORA *ROI of
    AI-assisted Software Development*, última atualização em 22/04/2026. Sustenta **apenas** a
    existência do enquadramento de mergulho inicial de produtividade na implantação, usado na
    justificativa do rebaixamento de `e2`. Confiabilidade: alta para a existência do relatório;
    **a página é só capa e não traz os números**, e por isso nenhum valor da curva-J aparece neste
    documento (seção 8, erro 5c).
14. **[F14]** `https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine-six-facts-about-the-recent-employment-effects-of-artificial-intelligence/`
    — Erik Brynjolfsson, Bharat Chandar e Ruyu Chen, versão revista em 12/08/2026, com dados
    administrativos de folha da ADP cobrindo milhões de trabalhadores nos EUA até junho de 2026.
    Os seis fatos: sem desemprego generalizado; trabalhadores de 22-25 anos em ocupações expostas
    cerca de 19% abaixo da trajetória dos pares menos expostos; divergência ampliando desde agosto
    de 2025; ajuste por menos contratação e não por demissão; queda concentrada onde a IA substitui
    tarefa e emprego estável ou em alta onde complementa; ajuste por emprego e não por salário.
    Sustenta `e5.3` e a correção do erro 6 da seção 8. Confiabilidade: alta para os dados, que são
    administrativos e não autorrelatados; a ressalva é de atribuição causal — "ocupação exposta a
    IA" é uma classificação, e o recorte é dos EUA, não global.

**Tentativas que não abriram e que, portanto, não sustentam nada:**
`https://thenewstack.io/ai-generated-code-crisis/` (retornou apenas formulário de newsletter, sem
corpo de artigo) e
`https://tiinside.com.br/28/04/2026/mercado-de-ia-agentica-deve-crescer-25-vezes-ate-2030-brasil-lidera-adocao-na-america-latina`
(HTTP 403 à ferramenta de leitura; o endereço em si responde).

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista, literal

A Etapa 1 da skill de futurização proíbe gerar conteúdo antes da entrevista e obriga a registrar
explicitamente qualquer pergunta pulada ou respondida com "tanto faz". Nesta rodada não havia
interlocutor humano: a rodada foi disparada pela fila automatizada da disciplina e as respostas
vieram por escrito no despacho. Transcrição integral do que foi fornecido:

- Tema: "Programação agêntica: o desenvolvedor vira orquestrador" (tema 1 de 19 da disciplina;
  família "Agentes").
- Horizonte: 2031. Público: quem projeta mídia e interação. Recorte: global, com uma nota sobre o
  Brasil.
- Descartado de início: o que já é comum em produto de massa (a régua da disciplina); nenhuma outra
  exclusão.
- Disrupção suspeita: nenhuma — descubra. Viés: neutro. Ideias óbvias a excluir: as que servem para
  qualquer tema.
- O que me faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers) ou
  de que a tecnologia não rompe nada (só melhora o que existe).
- Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
- Zona de interesse do autor: "Agentes". Login do autor: jcsc. Skill usada: futurizacao-jcsc.
- Busca na web: usar busca de verdade; só citar o que abriu; não inventar fontes.
- Não fazer perguntas de volta; não parar para pedir confirmação; assumir e declarar o que não
  estiver definido.

**Nenhuma pergunta foi pulada e nenhuma foi respondida com "tanto faz".** As cinco perguntas do
roteiro têm resposta explícita. O que foi assumido, e está declarado: (a) a data do documento como
12/09/2026, dia da execução; (b) `publico_ok: false`, porque é o padrão do formato e não houve
autorização explícita para atribuição pública; (c) `confianca: media` como avaliação do mapa
inteiro, derivada de ter três das quatro disrupções bem ancoradas em dado e uma (D3) apoiada em
material de fabricante.

### 12.2 Todas as buscas realizadas, e o que cada uma rendeu

Dez buscas, na ordem em que foram feitas.

1. `Stack Overflow Developer Survey 2026 AI agents adoption trust` — rendeu a pista dos 84% e do
   3%, mas com o ano errado em várias manchetes secundárias. Levou à abertura de [F6] e ao erro 1 da
   seção 8.
2. `Terminal-Bench 2.0 leaderboard coding agents 2026` — rendeu a existência do benchmark, o número
   de tarefas e a página da Artificial Analysis [F1]. Devolveu também vários preprints de arXiv
   sobre agentes de terminal que não abri.
3. `DORA State of AI-assisted Software Development 2026 report findings` — rendeu a existência dos
   relatórios de 2025 e 2026 e o enquadramento do amplificador e da curva-J. Levou a [F13], que
   acabou não entregando números.
4. `"agent skills" specification Anthropic open standard SKILL.md 2026` — rendeu a data de abertura
   do padrão, a afirmação (não confirmada) sobre a Agentic AI Foundation e a lista de adotantes.
   Levou a [F2] e [F3].
5. `METR randomized controlled trial experienced developers AI 19% slower study` — rendeu o estudo
   e o número. Levou a [F7].
6. `Brynjolfsson "Canaries in the Coal Mine" entry-level software developers employment decline AI`
   — rendeu a queda de quase 20% no emprego de desenvolvedores de 22 a 25 anos entre o pico de
   2022 e julho de 2025. Levou a [F14], cuja versão de agosto de 2026 traz o número por **ocupações
   expostas**, e não especificamente por desenvolvedores — diferença registrada.
7. `GitClear AI code quality 2026 code duplication churn copy-paste report` — rendeu as oito
   métricas. Levou a [F8].
8. `code review bottleneck AI-generated pull requests 2026 maintainers open source "slop" policy` —
   rendeu Jazzband, Godot e curl, e a formulação do gargalo de validação. Levou a [F9], depois que
   [F13-alternativa: The New Stack] não abriu.
9. `Brasil desenvolvedores adoção IA agêntica 2026 pesquisa mercado software PL 2338 regulação
   responsabilidade código` — rendeu os 18% contra 13% e o estado de tramitação do PL 2338. Levou a
   [F10]; o PL ficou como não verificado.
10. `spec-driven development GitHub Spec Kit 2026 adoption specification as source of truth` —
    rendeu as quatro fases e os números de ganho não verificados. Levou a [F5].

Duas buscas adicionais, feitas para fechar lacunas: uma sobre o incidente do agente da Replit, que
levou a [F11]; e uma sobre currículo de computação na era de IA generativa, que levou a [F12].

### 12.3 Candidatos a disrupção-raiz cogitados e descartados

Além dos cinco descartados por maturidade e registrados na seção 4 (autocompletar de IDE, chat que
explica código, geração por prompt único, MCP, revisão de PR por bot), outros quatro foram
cogitados e descartados por motivos diferentes:

- **Multi-agente hierárquico (Arquiteto/Construtor/Revisor).** Descartado não por maturidade, mas
  por ser **implementação** de D1, não ruptura autônoma: se um agente fecha o ciclo, orquestrar
  vários é engenharia sobre a mesma ruptura. Entra no mapa como pressuposto de `e1.1`.
- **Protocolo unificado de harness (rodar Codex, Claude Code e outros por uma interface).**
  Descartado pelo mesmo motivo — é o mecanismo de `e3.2`, não uma ruptura separada. E a evidência
  disponível é de projeto em catálogo, não de adoção.
- **Agente que roda em CI sem humano no laço.** Cogitado como quinta disrupção e descartado por
  falta de evidência: encontrei produtos que rodam agente de fundo em nuvem com governança [F2],
  mas nada que sustente que a aprovação humana está saindo do laço. Sem isso, é o mesmo D1 num
  gatilho diferente.
- **Modelo especializado em código superando modelo geral.** Descartado porque o ranking aberto que
  consultei [F1] é liderado por modelos gerais, o que é evidência contra, e porque a tese deste mapa
  é sobre ofício, não sobre arquitetura de modelo.

### 12.4 Efeitos gerados e cortados

Sete, com o motivo do corte:

1. **"O tamanho médio dos times de engenharia encolhe."** Cortado por contradição com [F14] e
   reescrito como `e5.3`. Detalhado na seção 8, erro 6.
2. **"Linguagens de programação param de evoluir porque o público delas deixa de ser humano."**
   Plausível e sedutor, cortado por ser especulação sem nenhum sinal: não encontrei nada que
   sustente mudança na cadência de evolução de linguagem. Ficaria bonito no infográfico e não tem
   base.
3. **"O custo de inferência vira linha de orçamento de engenharia comparável a salário."** Cortado
   por falta de dado público sobre gasto de inferência por engenheiro; seria número inventado.
4. **"Bootcamps de programação desaparecem."** Cortado por ser previsão sobre um mercado
   específico, sem fonte, e por cheirar a manchete. A parte defensável dele está em `e5.3`.
5. **"A documentação volta a ser escrita porque o agente precisa dela."** Cortado com alguma pena —
   é um efeito de segunda ordem elegante de D3 — mas sem evidência: a única medida próxima que
   tenho é a queda da manutenção de legado [F8], que aponta na direção oposta.
6. **"Testes viram o contrato principal entre humano e agente."** Absorvido por `e5.1` (evidência
   anexada ao PR), que é mais amplo e menos dependente de uma prática específica.
7. **"Surgem certificações de supervisão de agente."** Cortado por ser óbvio no sentido que a
   entrevista pediu para excluir: serve para qualquer tema de automação e não diz nada sobre este.

### 12.5 A autocrítica bruta (Etapa 4), efeito a efeito

Aplicação literal das três perguntas da Etapa 4 a cada efeito que eu havia marcado com confiança
alta, mais os de primeira ordem.

**`e1`** — extrapolação ou ruptura? Ruptura na natureza (executar ≠ sugerir), mas extrapolação na
escala. Adoção sem precedente? Sim: exige que 23,1% virem maioria em dois anos. Força contrária
ignorada? Compliance e revisão obrigatória com autoria humana. → **rebaixado de alta para media.**

**`e2`** — extrapolação linear pura, e com contraevidência direta [F7] [F13]. Ignora custo de
inferência e ignora que o gargalo nunca foi iniciar. → **rebaixado de alta para media.**

**`e3`** — ruptura real (procedimento vira artefato), mas eu havia usado adoção de **fornecedor**
como se fosse adoção de **prática**. Sem dado sobre equipes praticantes. → **rebaixado de alta para
media.**

**`e4`** — já estava em media. Depende de D3, que é a disrupção mais frágil. Mantido em media com
a fragilidade declarada na seção 7.

**`e5`** — extrapolação? Não: é observação com três medições independentes convergindo [F6] [F8]
[F9]. Adoção sem precedente? Não pressupõe adoção nenhuma — pressupõe o contrário, que a geração
continue crescendo mais rápido que a revisão. Força contrária? A única seria revisão automatizada
resolver o problema, e a evidência disponível é de que revisão por IA sobre código de IA não fecha
a lacuna [F9]. → **mantido em alta.**

**`e5.2`** — não é previsão, é fato consumado em três projetos nomeados [F9]. → **mantido em alta.**

**Checagem de horizonte** — a verificação que o `DUVIDAS.md` desta skill identificou como ausente na
rodada anterior e que foi executada nesta: todos os 30 valores de `prazo` do bloco YAML foram
conferidos contra `horizonte: 2031` do frontmatter. Nenhum excede. Dois (`e2.2.1` e `e5.3.1`) foram
identificados como provavelmente posteriores a 2031 e estão declarados em prosa logo abaixo do
bloco, em vez de receberem data fora do intervalo. Esta é a correção da skill sendo aplicada pela
primeira vez.

### 12.6 Contagens do frontmatter, conferidas

- `disrupcoes_raiz: 4` — D1 (agente fecha o ciclo), D2 (instrução empacotada), D3 (spec como
  artefato), D4 (código sem autor).
- `efeitos_ordem_1: 5` — e1, e2, e3, e4, e5.
- `efeitos_ordem_2: 11` — e1.1, e1.2, e2.1, e2.2, e3.1, e3.2, e4.1, e4.2, e5.1, e5.2, e5.3.
- `efeitos_ordem_3: 18` — e1.1.1, e1.1.2, e1.2.1, e2.1.1, e2.2.1, e2.2.2, e3.1.1, e3.1.2, e3.2.1,
  e4.1.1, e4.1.2, e4.2.1, e5.1.1, e5.1.2, e5.2.1, e5.2.2, e5.3.1, e5.3.2. **Registro de correção:**
  o frontmatter foi preenchido com 14 num primeiro momento, por contagem de cabeça enquanto eu
  escrevia; a contagem programática do bloco YAML devolveu 18 e o valor foi corrigido antes da
  entrega. É o mesmo tipo de erro que o `DUVIDAS.md` desta skill descreve — número do frontmatter
  que ninguém confere contra o YAML — e por isso fica registrado aqui em vez de apagado.
- `fontes: 14` — as quatorze abertas e lidas, listadas na seção 11. As duas que não abriram não
  entram na contagem.

### 12.7 Distribuição de sinal e confiança, para o infográfico

Por ordem, para quem for gerar as peças visuais:

- **Primeira ordem (5):** sinal forte em 4, médio em 1. Confiança alta em 1, média em 4.
- **Segunda ordem (11):** forte em 4, médio em 6, fraco em 1. Alta em 1, média em 8, baixa em 2.
- **Terceira ordem (18):** médio em 9, fraco em 9. Baixa em 18 — todas.

A terceira ordem inteira em confiança baixa é o comportamento esperado pelo formato e não é
modéstia: são três saltos causais a partir de uma disrupção que ainda não passou do abismo de
adoção.

### 12.8 O que ficou sem resposta

Cinco lacunas que outra rodada deveria fechar:

1. **Quantas equipes de fato versionam e testam skills?** Não há dado público. O catálogo mede
   fornecedores. Sem isso, `e3` fica em media indefinidamente.
2. **Qual o número da banda de supervisão humana?** Não existe benchmark. É a lacuna que o
   experimento da seção 10 existe para atacar.
3. **Os números da curva-J da DORA.** Estão no relatório, que não abri. Fechariam a justificativa do
   rebaixamento de `e2` com valor, e não só com enquadramento.
4. **Dado brasileiro sobre agentes de código, não sobre agentes corporativos.** Não encontrei.
   A nota sobre o Brasil está mais fraca do que eu gostaria.
5. **O texto do PL 2338 e sua classificação de risco para agente que altera ambiente de produção.**
   Não abri. É o que determinaria se o wildcard 1 tem gatilho jurídico no Brasil ou só no exterior.
