---
tema: "A infraestrutura de confiança: memória, observabilidade e avaliação de agentes"
slug: a-infraestrutura-de-confianca-memoria-observabilidade-e-avaliacao-de-agentes
autor_login: yrv
zona_de_interesse: Agentes
data: 2026-09-17
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 10
efeitos_ordem_2: 16
efeitos_ordem_3: 16
tecnologias_citadas: [OpenTelemetry GenAI semantic conventions, Langfuse, LangSmith, Braintrust, Arize Phoenix, MLflow, ClickHouse, agrepl, Mem0, Letta, Zep, Agent File (.af), Engram Specification, Model Context Protocol, LLM-as-judge, SWE-bench, GAIA, tau-bench, BenchJack, MPBench, Alpha Arena (Nof1), promptfoo, Claude Code, VS Code Copilot, OpenAI Codex, projectmem, deja-vu, memtrace, lean-ctx, Hindsight, prEN 18229-1, ISO/IEC DIS 24970, ISO/IEC 42001]
fontes: 16
confianca: media
experimento: Prova de trajetória — duas pessoas leem a mesma trajetória de agente e julgam se ele acertou; mede-se a concordância entre elas, e delas com um juiz-modelo, por kappa corrigido pelo acaso
skill_usada: futurizacao-yrv
publico_ok: false
---

## 1. Resumo

Quando a máquina fabrica o produto, conferir o produto deixa de medir a máquina — e a pergunta
muda de "o que foi entregue?" para "por que isso está certo?". Este mapa sustenta que quatro
rupturas distintas governam o tema até 2031, e que elas não são a mesma coisa vista de ângulos
diferentes. A primeira: o objeto de avaliação migra da saída para a trajetória, e reproduzir
uma execução de agente passa de impossível a rotineiro — há trabalho de 2026 relatando
fidelidade de replay igual a 1,0 com 98,3% menos latência por passo. A segunda: a trilha de
auditoria deixa de ser boa prática de engenharia e vira obrigação legal antes de existir norma
técnica — as obrigações do Anexo III do AI Act passaram a valer em 2 de agosto de 2026, o
Artigo 12 exige registro automático ao longo da vida do sistema, e nem a prEN 18229-1 nem a
ISO/IEC DIS 24970 estão concluídas. A terceira: a memória que atravessa sessões vira o ativo
que prende o cliente, e não é portátil — em meados de 2026 não existe padrão em nível de RFC, a
Engram Specification foi publicada em março de 2026 sob Apache-2.0 e nenhum projeto grande de
memória a adotou. A quarta é a mais desconfortável: o juízo sobre se o sistema presta já é
delegado a outra máquina, e o juiz não é validado — a maior avaliação sistemática de
LLM-as-judge até hoje, com 21 juízes e cerca de 541 mil julgamentos, encontrou confiabilidade
teste-reteste acima de 0,95 convivendo com viés de posição acima de 0,10 em dois juízes já em
produção. O mapa é frágil num ponto declarado: ele assume que legitimidade vem de
rastreabilidade, e essa premissa é cultural, não técnica.

## 2. O tema

O tema é a **infraestrutura que permite confiar num sistema que ninguém consegue ler por
inteiro**. Ela tem duas faces que a literatura trata separadamente e que aqui são tratadas
juntas: **saber o que o agente sabe** (memória que atravessa sessões, ferramentas e
fornecedores) e **conferir o que o agente fez** (trajetória, replay, avaliação de sistema não
determinístico).

Ele encosta em mídia e interação num ponto específico e pouco óbvio. Projetar interação sempre
foi projetar o que o sistema mostra. Aqui, o que precisa ser projetado é **o que o sistema
registra sobre si mesmo** — e quem lê esse registro é ora um engenheiro, ora um auditor, ora
outra máquina, ora o próprio usuário tentando entender por que a resposta mudou. A trajetória
de um agente é um artefato de leitura: tem ordem, extensão, densidade e ponto de entrada. Hoje
ela é desenhada como saída de depurador, e quem a lê não é mais só quem depura.

### O que não é o tema

Três cortes de fronteira, declarados:

- **Conter o agente** — permissão, sandbox, limite de ação, o que ele pode ou não executar. É o
  tema 2 da disciplina. Ali o objeto é a coleira; aqui é o registro.
- **O ofício de programar com agente** — como o trabalho de quem escreve software muda. É o
  tema 1. Este mapa toca o programador só quando ele aparece como leitor de trajetória.
- **O que já é comum em produto de massa** — pela régua da disciplina. Memória de assistente de
  chat para consumidor final entra na seção 3 como estado da arte, e não vira disrupção-raiz.

**Fica dentro, como borda explicitada:** a fricção entre memória persistente e privacidade
entre pessoas, projetos e empregos. Não é o centro, mas é onde o tema encontra gente.

Por que merece mapa de futuro e não levantamento de estado da arte: porque o instrumento
central do campo está documentadamente quebrado enquanto é usado para decidir. Benchmarks de
agente foram auditados em 2026 e 219 falhas distintas apareceram em dez deles; juízes-modelo
foram medidos em escala e a conclusão publicada é que são **confiáveis sem serem válidos**. Um
campo cujo instrumento de medida falha e cujo uso cresce assim mesmo não tem estado da arte
estável para levantar — tem uma trajetória a mapear.

## 3. Onde isso está hoje

### O que já existe, funciona, e já é substrato

**Rastreamento de chamada de modelo virou infraestrutura de dados, não ferramenta de nicho.**
Em **16 de janeiro de 2026** a ClickHouse anunciou a aquisição do Langfuse, plataforma aberta
de observabilidade, avaliação e gestão de prompts. Os números de adoção publicados no anúncio:
**"20k+ GitHub stars"**, **"23.1M+ SDK installs per month"**, **"6M+ Docker pulls"**, e
**"Trusted by 19 of the Fortune 50 and 63 of the Fortune 500"**, com Intuit, Twilio, 7-Eleven e
Merck nomeados [1]. Uma frase do anúncio resume a premissa deste tema melhor do que qualquer
manifesto: *"Generative AI will only earn enterprise trust when we can see what's happening
under the hood."* Esta camada é **madura** — ela não entra na seção 4.

**A gramática do rastro já existe, e já é emitida pelos agentes de código.** As convenções
semânticas GenAI do OpenTelemetry modelam a execução inteira como árvore de spans: **"the
top-level `invoke_agent` span with child `chat` spans for each LLM call and `execute_tool`
spans for each tool invocation"** [2]. O mesmo material registra que **"VS Code Copilot emits
traces, metrics, and events for every agent interaction"**, que o OpenAI Codex exporta
**"structured log events and OTel metrics"**, e que **"Claude Code exports metrics and log
events via OTel, with trace support in beta"** [2]. As convenções foram extraídas para um
repositório próprio — a página antiga da especificação hoje devolve apenas o aviso de mudança
[3] — e esse repositório descreve spans, métricas, eventos e `gen_ai.operation.name`, mas **não
declara estabilidade** na página inicial [4]. A afirmação corrente de que nenhum atributo
`gen_ai.*` está marcado como *Stable* aparece em análises secundárias; **não consegui confirmar
em fonte primária nesta sessão**, e por isso ela entra aqui como não verificada.

**Memória em assistente de consumo já chegou.** Memória automática entre conversas está
disponível nos assistentes de massa, ligada por padrão em alguns e opcional em outros. Isto é
**estado da arte, não tendência** — cai na régua da disciplina e foi descartado de início pelo
recorte.

### O que existe e não funciona

Esta é a parte mais bem documentada, e ela vem de trabalho revisado, não de opinião.

**O benchmark de agente é hackeável quase por construção.** O BenchJack aplicou síntese
automática de *exploits* a **dez benchmarks populares de agente** cobrindo engenharia de
software, navegação web, computação de desktop e operações de terminal. O resultado: exploits
que **"alcançam pontuações quase perfeitas na maioria dos benchmarks sem resolver uma única
tarefa, expondo 219 falhas distintas"**; o pipeline de correção iterativa reduziu a taxa de
tarefas hackeáveis **"de quase 100% para menos de 10% em quatro benchmarks"** [5]. Ou seja: a
taxa de partida era próxima de 100%.

**O juiz-modelo é confiável sem ser válido.** Norman, Rivera e Hughes (UC Berkeley,
**17/06/2026**) avaliaram **21 juízes de 9 provedores** em MT-Bench, JudgeBench e RewardBench,
sob três protocolos, em **118 execuções** e cerca de **541.000 julgamentos individuais**,
coletados entre março e abril de 2026. Quatro achados, literais: a deflação de kappa entre
concordância bruta e Cohen's κ é universal (**33,8 a 41,3 pontos percentuais** no MT-Bench); o
ranking de juízes **muda até 14 posições** entre benchmarks; **"high test–retest reliability
(>0.95) coexists with severe position bias (>0.10) in two production-deployed judges"**; e o
viés de verbosidade é pequeno (<0,011) [6]. Os autores propõem um *Minimum Viable Validation
Protocol* de cinco passos — corrigir pelo acaso, trocar posições, replicar, validar em dois
benchmarks, e auditar o paradoxo quando a confiabilidade passar de 0,95 [6].

**A memória não é portátil, e não há padrão.** Em meados de 2026, **"No single RFC-level
standard exists for AI agent memory engrams"**; a Engram Specification foi publicada em
**março de 2026** sob **Apache-2.0**, define memória como entradas YAML legíveis com
proveniência, tipo, escopo e recuperação ponderada por ativação — e **"no major memory project
has committed to the engram format yet"** [7]. O diagnóstico do próprio texto é preciso: o MCP
resolve o transporte e não o modelo de dados; a Engram resolve o modelo de dados e não o
transporte; e a combinação **"has not achieved the adoption needed to be called a standard"**
[7]. Do lado acadêmico, Ravindran (Microsoft, **10/05/2026**) propõe um protocolo de
transferência de memória com proveniência verificada, partindo do diagnóstico de que
**"memory remains locked within vendor-specific runtimes, creating fragility, vendor lock-in,
and catastrophic knowledge loss across sessions"** [8].

**A memória é superfície de ataque persistente.** Dash e coautores (03/06/2026, revisado em
18/06) identificam **quatro canais de escrita em memória e nove vulnerabilidades estruturais**,
propõem uma taxonomia de **seis classes de envenenamento de memória** e o MPBench, e concluem
duas coisas que importam a este mapa: **"agents designed to write and retrieve memory more
aggressively are more exploitable"** e **"existing prompt injection defenses fail to cover
memory poisoning attacks"** [9].

### O que é novo e ainda é pequeno

**Replay determinístico de execução de agente.** O `agrepl` intercepta as interações externas
por proxy na camada de transporte, serializa a execução como trajetória estruturada e a
reexecuta em ambiente isolado sem rede de saída, relatando **fidelidade de replay F = 1,0** e
**redução mediana de latência por passo de 98,3%** [10]. O mesmo trabalho nomeia as fontes
irredutíveis de não determinismo: amostragem do modelo, mudança de estado em API externa,
cabeçalhos de CDN e ruído do ambiente de execução [10].

**Avaliação com consequência material.** O Alpha Arena, da Nof1, deu **US$ 10.000 de capital
real por modelo** para operar mercado de fato, com seis modelos partindo do mesmo prompt e dos
mesmos dados [11]. É o sinal mais duro do tema — avaliação que custa dinheiro de verdade. **As
pontuações de desempenho desse experimento não entram neste documento**, pelo motivo registrado
na seção 8: encontrei quatro relatos numéricos mutuamente incompatíveis do mesmo evento e não
consegui abrir a fonte primária.

### O que a turma levantou, e onde ele se encaixa

A varredura da disciplina trouxe, do lado da memória, `projectmem`, `deja-vu`, `memtrace`,
`lean-ctx`, `Hindsight`; do lado da observabilidade e avaliação, `langfuse`, `opik`, `Phoenix`,
`MLflow`, `promptfoo`, `agent-qa`, `Nof1`; e, da simulação, `Rath`, `Parseable` e
`agent-inspect` [12]. A linha que a disciplina traça é a mesma que este mapa adota: logs,
métricas e teste unitário são maduros; o emergente é **avaliar o não determinístico** e
**lembrar através de sessões e ferramentas** [12].

### O lado regulatório, que é onde o relógio corre

O Artigo 12 do AI Act exige que **"High-risk AI systems shall technically allow for the
automatic recording of events (logs) over the lifetime of the system"**, com nível de
rastreabilidade **"appropriate to the intended purpose"** [13]. As obrigações do Anexo III
passaram a valer em **2 de agosto de 2026**; o Artigo 26 impõe ao *deployer* guardar os logs
sob seu controle por **no mínimo seis meses**; a sanção prevista vai até 15 milhões de euros ou
3% do faturamento mundial; e — o ponto que faz disto uma disrupção e não um roadmap — **"there's
no finalized technical standard for Article 12 logging yet"**: nem a **prEN 18229-1** nem a
**ISO/IEC DIS 24970** foram concluídas [14]. A mesma análise nota que log de aplicação comum
não é à prova de adulteração, o que é exatamente o que uma verificação regulatória precisaria
[14].

## 4. As disrupções-raiz

### 4.1 · O objeto de avaliação migra do produto para a trajetória

**O que rompe.** A competência de **revisar o entregável**. Revisão de código, QA por amostra
de saída, aceitação por critério de resultado: tudo isso pressupõe que examinar o produto diz
algo sobre o processo que o fez. Quando o processo é uma máquina que produz um resultado
diferente a cada execução, o produto deixa de ser evidência sobre a máquina. O que passa a ser
examinado é o caminho — cada chamada, cada ferramenta, cada tentativa que falhou. Isso não é
"revisar mais rápido": é revisar **outro objeto**, com outra unidade e outra habilidade de
leitura. Por isso passa em T1.

**Por que agora e não há cinco anos.** Três sinais datados. A gramática do rastro existe e já é
emitida: `invoke_agent`, `chat` e `execute_tool` como árvore de spans, com VS Code Copilot,
Codex e Claude Code emitindo [2]. A reexecução fiel deixou de ser promessa: fidelidade 1,0 e
−98,3% de latência mediana por passo, com o não determinismo isolado no transporte [10]. E a
camada de coleta virou infraestrutura de dados em 16/01/2026, com 23,1 milhões de instalações
de SDK por mês [1]. Há cinco anos não havia agente de múltiplos passos em produção para
rastrear.

**O que ainda falta acontecer.** As convenções saírem de desenvolvimento ativo e virarem
estáveis. Enquanto o vocabulário do rastro mudar de versão para versão, a trajetória não é
comparável entre ferramentas — e uma trajetória que não se compara não serve de prova nem de
histórico. A extração para repositório próprio [3][4] é movimento nessa direção, não chegada.

### 4.2 · A trilha de auditoria vira obrigação legal antes de existir norma técnica

**O que rompe.** O pressuposto de que registro é decisão interna de engenharia — formato,
granularidade, retenção e descarte a critério de quem constrói. A partir do momento em que a
lei exige registro automático por toda a vida do sistema [13] e retenção mínima pelo operador
[14], o log deixa de ser diagnóstico e passa a ser **prova**. Isso torna sem valor duas
competências ao mesmo tempo: a instrumentação pensada só para depurar, e a consultoria de
conformidade que trabalha sobre documento em vez de sobre telemetria. A porta de entrada é
mercado novo: quem compra trilha de auditoria por obrigação nunca foi cliente de ferramenta de
observabilidade.

**Por que agora e não há cinco anos.** **2 de agosto de 2026** — as obrigações do Anexo III
passaram a ser exigíveis [14]. O texto do Artigo 12 é literal quanto a "automatic" e
"over the lifetime of the system" [13]. E a lacuna é datada também: nem prEN 18229-1 nem
ISO/IEC DIS 24970 concluídas [14]. Há cinco anos não existia o instrumento jurídico.

**O que ainda falta acontecer.** Duas coisas, nesta ordem: uma norma técnica que diga **como**
é um log conforme, e a primeira fiscalização com sanção aplicada e sobrevivente a recurso.
Enquanto não houver preço cobrado, a obrigação é retórica — e o pacote *Digital Omnibus*, que
propõe adiamentos [14], é a evidência de que o preço ainda está em disputa.

### 4.3 · A memória que atravessa sessões vira o ativo, e não é portátil

**O que rompe.** A intercambiabilidade do fornecedor. Enquanto o agente era função sem estado,
trocar de fornecedor custava o preço de reescrever a integração. Um sistema que acumulou anos
de decisões, correções e erros já cometidos não é substituível por um sistema novo do mesmo
nível — ele é melhor **por ter vivido**. O valor migra do modelo para o acumulado, e o
acumulado não sai de onde está: em meados de 2026 não há padrão em nível de RFC [7], a
especificação aberta que existe não foi adotada por nenhum projeto grande [7], e a literatura
descreve o estado como *lock-in* de fornecedor com perda catastrófica de conhecimento entre
sessões [8].

**Por que agora e não há cinco anos.** A Engram Specification é de **março de 2026** [7]; o
protocolo de memória portátil com proveniência verificada por Merkle-DAG é de **10/05/2026**,
com continuidade de transferência de 0,83 a 0,92 entre famílias de modelo contra 0,28 a 0,45 de
linha de base [8]; e o envenenamento de memória virou classe de vulnerabilidade com taxonomia e
banco de testes em **junho de 2026** [9]. Há cinco anos não havia memória persistente entre
sessões para ser transferida nem para ser envenenada.

**O que ainda falta acontecer.** Adoção do padrão por quem perde com ele. A precondição não é
técnica — o formato existe e é Apache-2.0 [7] —, é de incentivo: o incumbente teria que adotar
voluntariamente aquilo que dissolve a sua própria retenção. É a precondição mais distante das
quatro, e a que menos depende de engenharia.

### 4.4 · O juízo sobre qualidade é delegado a outra máquina, e ninguém valida o juiz

**O que rompe.** A cadeia de validação. Todo o aparato de avaliação de IA em produção hoje se
apoia em dois pilares, e os dois estão documentadamente rachados: benchmark público, que é
hackeável a uma taxa próxima de 100% antes de correção [5]; e juiz-modelo, que exibe
confiabilidade alta com viés severo ao mesmo tempo [6]. O que deixa de valer é a competência de
**ler uma pontuação e decidir** — porque a pontuação não mede o que se supõe que ela meça, e a
literatura que demonstra isso é da própria comunidade que a usa.

**Por que agora e não há cinco anos.** **14/05/2026**: 10 benchmarks de agente auditados, 219
falhas distintas [5]. **17/06/2026**: 21 juízes, 9 provedores, 118 execuções, ~541 mil
julgamentos, com o paradoxo confiabilidade-validade medido e nomeado [6]. E do lado do mercado,
a função de avaliar virou cargo com nome próprio em vez de linha numa descrição de vaga. Há
cinco anos a avaliação de LLM era publicação acadêmica, não posto de trabalho.

**O que ainda falta acontecer.** Uma instância que valide o avaliador. O MVVP de cinco passos
existe como proposta acadêmica [6], não como exigência de ninguém. Sem uma figura externa que
certifique quem certifica, a delegação do juízo é recursiva e não fecha — e é daqui que sai a
pergunta de segunda ordem mais difícil deste mapa.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O objeto de avaliação migra do produto para a trajetória
    efeitos:
      - id: e1
        ordem: 1
        efeito: Revisar o trabalho de um agente passa a significar ler a trajetória, e o diff deixa de ser a unidade de revisão
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O papel de revisor se divide entre quem julga o resultado e quem julga o caminho, com telas, ferramentas e perfis diferentes
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A formação em engenharia de software passa a ensinar leitura de trajetória antes de leitura de código
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A trajetória vira artefato versionado ao lado do código, com custo de armazenamento e política de retenção próprios
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O repositório deixa de ser o registro autoritativo do projeto e vira um índice para o lago de trajetórias
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O replay determinístico transforma falha de agente em defeito reproduzível, e o relato de que aconteceu uma vez deixa de ser aceito como relato de bug
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O suporte técnico de produto com agente passa a exigir do usuário o envio da trajetória em vez da descrição do problema
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O direito de recusar o envio da própria trajetória vira cláusula negociada em contrato de software corporativo
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Seguradoras passam a precificar risco de sistema agêntico pela existência de replay, e não pelo fornecedor do modelo
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: A cobertura de seguro se torna a via prática de execução de qualidade de agente e chega antes do regulador em jurisdições sem lei de IA
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O custo de guardar a trajetória cresce mais rápido que o custo de produzir a saída, e a telemetria de agente vira linha de orçamento própria
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Decidir o que não guardar vira decisão de projeto com consequência jurídica, e a retenção seletiva de trajetória vira política escrita
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O que foi descartado passa a ser objeto de auditoria, e nasce o registro do descarte como artefato separado
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: A trilha de auditoria vira obrigação legal antes de existir norma técnica
    efeitos:
      - id: e4
        ordem: 1
        efeito: Quem vende sistema de alto risco na Europa passa a comprar trilha de auditoria antes de escolher modelo, e a decisão de compra começa pelo registro
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O fornecedor de observabilidade deixa de vender diagnóstico e passa a vender prova, com registro à prova de adulteração como diferencial de produto
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A infraestrutura de prova migra para primitivas de integridade criptográfica e o log de aplicação comum deixa de servir a fim regulatório
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Na ausência de norma técnica, cada autoridade nacional aceita um formato diferente e a conformidade vira trabalho de tradução entre trilhas
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Uma convenção de fato nascida de ferramenta aberta ocupa o lugar da norma que não saiu, e o padrão oficial é escrito depois para ratificar o que já roda
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A obrigação de guardar registro por prazo mínimo colide com o direito ao apagamento, e a trilha de auditoria vira passivo de dados pessoais
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Surge a figura do registro que prova que algo aconteceu sem conservar o conteúdo do que aconteceu
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Auditar passa a significar verificar compromissos criptográficos em vez de ler o que o sistema disse, e a auditoria deixa de ser legível por humano
                sinal: fraco
                prazo: 2034
                confianca: baixa
  - disrupcao: A memória que atravessa sessões vira o ativo, e não é portátil
    efeitos:
      - id: e6
        ordem: 1
        efeito: O custo de trocar de fornecedor deixa de ser o de reescrever a integração e passa a ser o de perder o acumulado
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A memória do agente entra em contrato como ativo com cláusula de saída, ao lado do dado do cliente
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Exportabilidade de memória entra na pauta de concorrência pelo argumento de mercado antes de entrar pelo argumento de privacidade
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Aparece um mercado de migração de memória entre fornecedores, com perda de fidelidade declarada em percentual
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: A perda aceitável na migração vira número negociado em contrato, como disponibilidade virou acordo de nível de serviço
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: A memória compartilhada entre pessoas da mesma equipe cria um vazamento novo, em que o agente conta a uma pessoa o que aprendeu com outra
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O controle de acesso deixa de ser aplicado ao documento e passa a ser aplicado à lembrança, num objeto que não tem caminho nem dono
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A unidade de permissão do sistema corporativo deixa de ser o arquivo e passa a ser a asserção, e o modelo de segurança herdado perde o seu objeto
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: O desligamento de um funcionário passa a exigir um procedimento de esquecimento, e a saída da empresa vira operação sobre memória de máquina
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A disputa sobre a quem pertence o que o agente aprendeu com o trabalho de alguém passa a ser tratada como questão trabalhista, e não técnica
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: A memória vira superfície de ataque persistente, e o envenenamento sobrevive ao fim da sessão em que entrou
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Cada lembrança passa a precisar de data e origem, e memória sem proveniência é tratada como não confiável por padrão
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Proveniência de memória e trilha de auditoria convergem no mesmo artefato, e as duas faces da infraestrutura viram uma só
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: O juízo sobre qualidade é delegado a outra máquina, e ninguém valida o juiz
    efeitos:
      - id: e9
        ordem: 1
        efeito: Avaliar sistema não determinístico deixa de ser tarefa de quem constrói e vira função de tempo integral com nome próprio
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Validar o avaliador passa a ser exigido como se exige validar o sistema, e o protocolo de meta-avaliação vira entregável contratual
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Forma-se um corpo de certificação de avaliadores de IA que herda da auditoria contábil o mesmo conflito de interesse de quem é pago por quem audita
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: O benchmark público perde função de decisão e vira material de posicionamento, enquanto a decisão migra para conjunto privado
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: A comparação entre fornecedores deixa de ser pública e a assimetria de informação sobre qualidade de IA aumenta em vez de diminuir
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: A avaliação com consequência material passa a valer mais que a pontuação em benchmark, e a métrica se muda para fora do laboratório
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Consolida-se uma categoria de arena com aposta real em que o custo de participar é o próprio prejuízo, e o fornecedor pequeno fica de fora
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Ser avaliado passa a depender de capital, e a avaliação independente fica mais cara que o sistema avaliado
                sinal: fraco
                prazo: 2034
                confianca: baixa
```

### O que o bloco não consegue dizer

**A roda é árvore, e este tema é grafo.** Três efeitos importantes deste mapa **exigem duas
raízes ao mesmo tempo** e por isso ficaram fora da árvore, pela regra de parada declarada na
Fase 4. Eles são registrados aqui porque, quando os mapas da turma forem processados juntos,
são estes cruzamentos que interessam:

- **Convergência A — a trajetória como meio de prova.** Exige a raiz 1 (existe reexecução fiel)
  e a raiz 2 (existe obrigação legal de registro). Se as duas se realizarem, o replay deixa de
  ser ferramenta de depuração e vira instrumento probatório, com o problema correspondente: uma
  reexecução isolada não prova o que aconteceu em produção, prova o que aconteceria de novo.
- **Convergência B — proveniência e auditoria são o mesmo artefato.** Exige a raiz 2 e a raiz 3.
  Datar e atribuir origem a cada lembrança [9] e registrar automaticamente cada evento ao longo
  da vida do sistema [13] são, materialmente, o mesmo registro escrito duas vezes por motivos
  diferentes. A pressão econômica para fundi-los é grande, e quem fundir define o formato.
- **Convergência C — avaliar o que não se pode reproduzir.** Exige a raiz 3 e a raiz 4. Um
  sistema com memória de anos não pode ser avaliado por benchmark, porque o estado que produz o
  resultado não é reproduzível pelo avaliador. Esta é, das três, a que menos tem solução
  visível — e a que mais ameaça o cenário desejável da seção 9.

**A roda também não representa amortecimento.** As raízes 1 e 4 se anulam parcialmente: quanto
melhor a trajetória, menos necessário o juiz-modelo, porque conferir o caminho substitui
adivinhar pela saída. A árvore soma os dois galhos; a realidade provavelmente não soma.

## 6. Sinais fracos e wildcards

**O padrão técnico que não sai, e a ferramenta aberta que ocupa o lugar.** É o desfecho mais
provável da lacuna descrita em [14], e está no mapa como e4.2.1 — mas o sinal correspondente
hoje é fraquíssimo: nenhuma das duas normas concluída, e nenhuma autoridade tendo dito o que
aceita. Se uma autoridade nacional publicar, mesmo que informalmente, que aceita trajetória em
convenção semântica aberta como registro conforme, esse efeito sobe várias ordens de confiança
de uma vez.

**A regulação europeia como padrão global.** Era efeito de primeira ordem no rascunho e foi
rebaixada a sinal fraco na Fase 5. O "efeito Bruxelas" é plausível, mas a própria execução
europeia ainda não produziu sanção por registro, e o pacote *Digital Omnibus* propõe adiamentos
[14]. Volta a ser efeito no dia em que houver a primeira multa por Artigo 12.

**Memória como direito de portabilidade, e não como recurso de produto.** Quase não aparece no
discurso, que é todo de engenharia. Se a memória acumulada for reenquadrada como dado pessoal
portável em vez de ativo do fornecedor, a raiz 3 muda de natureza: deixa de depender de adoção
voluntária de padrão [7] e passa a ter dentes. É o caminho mais curto entre este mapa e uma
mudança real, e ele não é técnico.

**A conta de energia e de armazenamento da trajetória.** Se guardar o caminho custar
visivelmente mais que produzir o resultado — que é a aposta de e3 —, a decisão sobre o que não
registrar vira decisão econômica antes de virar decisão ética. Preço faz o que política não faz.

**Wildcard — um fornecedor grande abre a memória em formato interoperável por conta própria e
ganha mercado com isso.** Baixa probabilidade, alto impacto. Derrubaria a raiz 3 inteira (o
*lock-in* deixa de ser o ativo) e enfraqueceria a convergência C. É o único evento que
reorganiza o mapa sem que nenhuma das quatro raízes se realize como escrito. Há um precedente
parcial no ecossistema aberto — formatos de arquivo de agente exportáveis existem [7] —, mas
não no fornecedor com escala.

**Wildcard reverso, e o mais provável dos dois.** Um incidente público de vazamento por memória
persistente entre pessoas da mesma organização, com dano nomeável. As condições técnicas já
estão descritas na literatura [9]; falta o caso com nome e data. Ele aceleraria e7 e e8 de uma
vez, e provavelmente pela via errada — proibição de memória corporativa em vez de controle de
acesso à asserção.

## 7. Contra o próprio mapa

### Qual efeito é só extrapolação linear do presente

**e3 (`custo de guardar a trajetória`)** é o candidato mais forte, e sobreviveu com a confiança
rebaixada. A versão que **não** sobreviveu está na seção 12: um efeito que projetava redução do
tempo de revisão humana pela metade com trajetória instrumentada. Ele era o presente em outro
volume — mesmo ator, mesmo mecanismo, número redondo sem fonte. O que restou de e3 é a mudança
de categoria contábil (telemetria vira linha de orçamento própria), não a projeção de magnitude.

**e9 também é suspeito de linearidade**, e por um motivo que vale declarar: "a função vira
cargo" é o tipo de efeito que parece disrupção e é crescimento. O que o salva é a troca de ator
— quem avalia deixa de ser quem constrói —, mas é uma troca estreita, e um crítico razoável
pode chamar isso de especialização normal de mercado em maturação.

### Qual efeito assume velocidade de adoção sem caso comparável

**e4 está com `confianca: alta` e é a aposta mais arriscada do mapa.** A justificativa é o caso
comparável do GDPR: prazo de aplicação em maio de 2018, compra de ferramenta de conformidade
concentrada nos doze a dezoito meses ao redor da data. A fragilidade é que os dois casos não são
simétricos. O GDPR exigia algo **aditivo** — um fluxo de consentimento, um registro de
tratamento. O Artigo 12 exige que o sistema **gere o registro sozinho, ao longo de toda a vida
dele** [13], o que é alteração da arquitetura do produto, não camada por cima. Não há caso
comparável de exigência arquitetural com prazo curto e sem norma técnica publicada. Se eu
tivesse que rebaixar uma confiança neste mapa depois de entregá-lo, seria esta.

A que morreu por esta prova foi a versão original e11, que afirmava emissão universal de
trajetória em padrão aberto até 2029. O OpenTelemetry levou anos para estabilizar convenções
bem mais simples que estas; as convenções GenAI seguem em desenvolvimento ativo [2][4]. Assumir
três anos era assumir velocidade sem precedente.

### Qual disrupção pode simplesmente não se concretizar

**A raiz 3.** Ela depende de uma precondição única e não técnica: adoção de padrão de memória
por quem lucra com a ausência dele. A especificação aberta existe desde março de 2026 e nenhum
projeto grande a adotou [7]. Se essa adoção não vier — e o incentivo diz que não vem —, então
e6.1 e e6.2 não acontecem, e a raiz 3 se reduz a e7 e e8, que são consequências de **ter**
memória, não de a memória ser **portátil**. Nesse cenário o mapa perde quatro efeitos de
terceira ordem e a convergência A e a C mudam de sentido: sem portabilidade, avaliar sistema com
memória longa vira privilégio de quem opera o sistema, e a avaliação independente deixa de ser
possível por construção. Esse é o pior desfecho que este mapa consegue enxergar, e ele não é
dramático — é apenas o que acontece se nada acontecer.

**A raiz 2 também tem um modo de não acontecer**, diferente: ela pode acontecer no papel e não
no mundo. Obrigação sem norma técnica [14] e sem sanção aplicada produz conformidade de
documento — relatórios que afirmam que há registro, sem ninguém verificar o registro. É o
desfecho "provável" da seção 9, e é o mais chato de todos, porque é indistinguível de sucesso
visto de fora.

### Que viés meu entrou aqui

Três, e o terceiro é o que mais compromete o documento.

1. **Viés de simpatia pela auditabilidade.** O tema é atraente para quem já acha que sistema
   opaco é problema. O mapa trata rastreabilidade como bem que enfrenta obstáculos, e não como
   o que ela também é: vigilância sobre o trabalho de quem usa o sistema. e2.1 (o suporte pede a
   trajetória) e e7.2 (a saída da empresa vira operação sobre memória) são, do ponto de vista de
   quem trabalha, efeitos ruins escritos em tom neutro. A pergunta que este mapa não faz é
   **quem é observado quando o agente é observado**.
2. **Viés de fonte.** Metade da evidência dura vem de *preprints* de 2026 com poucos meses de
   existência e nenhuma replicação [5][6][8][9][10]. São trabalhos com números específicos e
   método declarado, o que é bom; mas são a primeira palavra sobre o assunto, não a última. Um
   mapa construído sobre a primeira palavra herda o viés de quem chegou primeiro ao tema.
3. **Viés de camada — o mapa assume a visão de mundo de hoje como permanente.** Passando pela
   *Causal Layered Analysis*: na **litania**, "a IA erra e ninguém sabe por quê"; nas **causas
   sistêmicas**, o custo de contexto, a corrida das plataformas de dados pela camada de
   avaliação [1] e o calendário regulatório [13][14]; na **visão de mundo**, a premissa de que
   **legitimidade vem de rastreabilidade** — de que um sistema é confiável porque se pode
   reconstituir o caminho que ele fez; no **mito**, o livro-razão, a caixa-preta do avião e a
   confissão. Todo este documento repousa na terceira camada, e ela é herança contábil e
   burocrática, não uma verdade sobre sistemas.

   O incômodo: **o Alpha Arena propõe exatamente a visão de mundo concorrente** [11]. Ali a
   legitimidade não vem do rastro, vem do resultado com consequência material — o modelo ganhou
   ou perdeu dinheiro de verdade, e o caminho não importa. Se essa premissa vencer, a
   infraestrutura inteira mapeada aqui vira custo sem função: ninguém audita o caminho de quem
   demonstrou resultado no mundo. Nesse mundo, e4, e4.1, e5, e9.1 e e9.1.1 trocam de sinal sem
   que nenhum fato mude, e a raiz 2 vira obrigação que se cumpre sem que ninguém leia o
   cumprido. Este é o efeito de segunda ordem do meu próprio viés, e ele não aparece em lugar
   nenhum do bloco YAML.

### A bateria derrubou o quê

Oito efeitos foram eliminados ou rebaixados, com pelo menos um por raiz. Estão todos na seção
12.1, com o `id` original e a prova que os matou.

## 8. O que a máquina errou

**Quatro relatos numéricos incompatíveis do mesmo evento, e nenhuma fonte primária acessível.**
Ao apurar o Alpha Arena da Nof1, os resultados de busca devolveram, para a **mesma** temporada:
que um modelo venceu com **+22,31%**; que outro modelo "lidera com **46%** de ganho"; que um
terceiro acumulou **−75%**; que o pior desempenho foi **−39,73%**; e que a competição terminou
em **3 de dezembro de 2025** com um "Mystery Model" vencendo com **12,11%** em duas semanas. A
única página que consegui abrir, um blog secundário, traz uma quinta tabela, com **−62,66%**
para o modelo que outra fonte dava como **−75%** [11]. A fonte primária (`nof1.ai`) devolveu
**HTTP 429** nas duas tentativas.

**Como percebi:** não foi por desconfiar de um número — foi por os números não caberem juntos.
Um mesmo modelo não pode ter perdido 39,73% e 62,66% e 75% no mesmo período. O sinal foi a
**incompatibilidade aritmética**, não a implausibilidade individual: cada valor, sozinho, era
perfeitamente crível. **Consequência:** o Alpha Arena entra neste mapa apenas como afirmação de
existência — US$ 10.000 de capital real por modelo, seis modelos, mesmo prompt, mercado de
verdade [11] — e **nenhum resultado de desempenho dele é citado**. A afirmação que interessa ao
mapa é a do formato, não a do placar; felizmente, é também a única que consegui sustentar.

**Um número redondo de consultoria, citado de segunda mão dentro de material de fornecedor.**
Ao ler o relatório de memória de agentes da Mem0 [15], apareceu a previsão de que "40% das
aplicações corporativas estarão integradas com agentes de IA específicos até 2026", contra
"menos de 5% em 2025", atribuída à Gartner. É um número redondo, com um salto de oito vezes em
doze meses, citado por uma empresa que vende exatamente a camada que o número justifica, sem
link para o relatório original. **Descartado**, e registrado aqui porque a tentação era grande:
ele teria dado à seção 3 um número de adoção que eu não tenho. Os números técnicos do mesmo
relatório (tokens por consulta, pontuação em LoCoMo e LongMemEval) também são autorreportados
pelo fornecedor sobre o próprio produto, e por isso não sustentam nada neste documento além da
existência dos benchmarks.

**Uma data que não bate com o identificador que a carrega.** Ao resumir o trabalho sobre replay
determinístico, o retorno afirmou "Submitted: April 30, 2026" para o preprint de identificador
**2607.16200**. Identificador do arXiv codifica ano e mês de submissão: `2607` é **julho de
2026**, não abril. As duas informações estão no mesmo objeto e se contradizem. **Como percebi:**
porque conferi o mesmo campo nos outros quatro preprints da mesma sessão — `2605.11032` (maio),
`2605.12673` (maio), `2606.19544` (junho), `2606.04329` (junho) — e nos quatro a data batia com
o identificador. O erro apareceu por **comparação entre casos**, não por leitura atenta de um
caso. **Consequência:** este documento cita esse trabalho pelos seus resultados e pelo seu
identificador [10], e **não afirma a data de submissão dele**.

**Uma afirmação de status que eu quase repassei como verificada.** Os resultados de busca
afirmam, com bastante confiança, que nenhum atributo `gen_ai.*` está marcado como *Stable* no
registro do OpenTelemetry. Fui à fonte primária e a página antiga da especificação devolve
apenas o aviso de mudança de repositório [3]; o repositório novo, na página inicial, descreve o
escopo e **não declara estabilidade** [4]. A afirmação pode muito bem estar certa — mas a
diferença entre "li isto na especificação" e "li isto sobre a especificação" é exatamente a
diferença que esta seção existe para registrar. Ela está na seção 3 marcada como não verificada,
e a raiz 4.1 não depende dela.

## 9. Três cenários para 2031

**Provável.** A infraestrutura existe e quase ninguém a lê. Toda ferramenta séria emite
trajetória, os spans têm nomes parecidos entre fornecedores, e o replay funciona — e é usado
por um punhado de times que já era bom antes. A obrigação europeia foi cumprida no registro e
não na leitura: há logs automáticos, há retenção de seis meses, há relatório anual afirmando
conformidade, e a primeira sanção por Artigo 12 ainda não saiu porque nenhuma autoridade
conseguiu montar equipe capaz de auditar trajetória em escala. A memória continua presa onde
nasceu; a especificação aberta de 2026 segue existindo, citada em artigos e adotada por
ninguém. E o juízo sobre qualidade continua sendo dado por juiz-modelo, agora com uma nota de
rodapé metodológica que todo mundo cita e ninguém aplica. Nada disso é falha espetacular — é o
que acontece quando a infraestrutura chega e a competência de usá-la não.

**Desejável.** A auditabilidade virou barata e a portabilidade virou obrigatória, nesta ordem.
Entre 2027 e 2029, uma convenção aberta de trajetória ficou estável o bastante para que
autoridade nacional dissesse, por escrito, que a aceita como registro conforme — e no dia em
que isso saiu, conformidade deixou de ser projeto de consultoria e virou configuração. Do outro
lado, a memória acumulada foi reenquadrada como dado portável e não como ativo do fornecedor,
o que forçou formato de exportação com perda declarada. As duas coisas juntas produziram o que
nenhuma delas produziria sozinha: **avaliação independente tornou-se possível**, porque um
terceiro pode carregar o estado e reexecutar o caminho. Para chegar aqui foi preciso o que ainda
não aconteceu: que o padrão viesse de fora de quem vende a plataforma, e que a portabilidade
entrasse pela porta da concorrência, e não pela da privacidade — porque concorrência tem quem
reclame com dinheiro.

**Indesejável.** A premissa mudou antes da infraestrutura chegar. A legitimidade migrou de
"consigo reconstituir o caminho" para "o sistema produziu resultado com consequência real", e o
mercado seguiu a premissa: arenas com aposta material substituíram benchmark, o rastro virou
custo de conformidade que se cumpre sem se ler, e a auditoria de IA nasceu já capturada — paga
por quem ela audita, medindo o que é barato medir. A memória longa concentrou-se em três
fornecedores e não se move; avaliar um sistema com sete anos de acumulado virou impossível para
qualquer terceiro, porque o estado que produz o comportamento não é reproduzível fora de casa.
O sinal precoce deste cenário não é regulatório nem técnico: é o dia em que a empresa que opera
o agente publica o próprio painel de qualidade dele, com metodologia própria, e o mercado aceita
— porque conferir sairia mais caro que confiar.

## 10. O experimento

**O que é.** A **prova de trajetória**. Um exercício instrumentado em que a mesma execução de
agente é julgada por dois humanos e por um juiz-modelo, e as três respostas são comparadas com
correção pelo acaso. Cada participante recebe a **trajetória completa** de uma tarefa executada
por agente — a árvore `invoke_agent` / `chat` / `execute_tool`, com as tentativas que falharam
—, sem ver o resultado final, e responde a uma pergunta só: *este agente fez a coisa certa?* Em
seguida recebe apenas o **resultado final**, sem a trajetória, e responde à mesma pergunta sobre
outra tarefa. Mede-se: concordância entre humanos lendo trajetória, concordância entre humanos
lendo só o produto, concordância entre humano e juiz-modelo, e a estabilidade do juiz-modelo
quando as opções trocam de posição. Tudo em **Cohen's κ**, nunca em concordância bruta.

**Que pergunta sobre o futuro ele ajuda a responder.** A precondição comum das raízes 1 e 4:
**ler a trajetória produz julgamento mais concordante do que ler o produto?** Se produzir, a
migração do objeto de avaliação tem fundamento empírico e e1 sobrevive. Se não produzir — se
duas pessoas lendo o mesmo caminho discordarem tanto quanto duas pessoas lendo só a saída —,
então a trajetória é volume de informação sem ganho de julgamento, e a raiz 1 vira custo
disfarçado de progresso. A mesma rodada testa o achado de [6] num cenário de agente: o juiz
pode ser estável entre execuções e ainda assim mudar de resposta quando a ordem muda.

**Que tecnologia emergente ele usa, e por que não dá com tecnologia madura.** Usa a árvore de
spans das convenções GenAI [2] e a captura de execução no estilo do `agrepl` [10] — ou seja, a
trajetória tem que ser **um artefato**, não um log de texto rolando. Com tecnologia madura só se
consegue o registro de aplicação de sempre: linhas cronológicas sem estrutura de chamada, sem
ferramenta identificada, sem tentativa descartada. Julgar "o caminho" a partir disso é julgar
uma transcrição, não uma trajetória — e o objeto que este mapa afirma que passa a ser avaliado
não existiria no experimento. A parte da avaliação usa o protocolo mínimo de validação de juízes
publicado em 2026 [6], que também é recente: até o ano passado o procedimento padrão era
concordância bruta, que a própria literatura agora mostra que superestima a discriminação em 33
a 41 pontos percentuais.

**O que a turma vai fazer quando testar isso em sala.** Quatro trajetórias reais, das quais duas
com falha silenciosa — o agente entrega algo que parece certo e chegou lá por um caminho errado.
Cada pessoa julga duas por trajetória e duas por produto, em ordem sorteada. Depois roda-se o
juiz-modelo sobre as mesmas quatro, duas vezes, com as posições trocadas. Calcula-se κ nas
quatro combinações e projeta-se a tabela na parede. A hipótese sob teste é que a leitura de
trajetória **detecte a falha silenciosa** que a leitura de produto não detecta, e que essa seja
a única diferença estatisticamente visível entre as duas condições — não a concordância geral.

**O que seria um resultado que me faria mudar de ideia.** Dois resultados derrubam partes
diferentes deste mapa. **Primeiro:** se o κ entre humanos lendo trajetória for alto (acima de
0,8) e o juiz-modelo concordar com eles, então não há gargalo de julgamento — avaliar sistema
não determinístico é difícil de operacionalizar e não de decidir, a raiz 4 perde a sua tese, e
este mapa superestimou um problema de método. **Segundo, e mais incômodo:** se a leitura de
trajetória **não** detectar a falha silenciosa melhor que a leitura de produto, a raiz 1 está
errada no seu ponto central — a trajetória não é um objeto de avaliação melhor, é só um objeto
maior. Nesse caso e1, e1.1, e1.1.1 e e2.1 caem juntos, o custo de e3 fica sem contrapartida, e o
mapa vira um mapa de três raízes cujo eixo é regulatório e não epistêmico.

## 11. Fontes

Só entram fontes **abertas nesta sessão, em 17/09/2026**. Onde o texto se apoia em resultado de
busca sem leitura da fonte, isso está marcado no corpo e a fonte não está listada aqui. As três
tentativas de acesso que falharam estão registradas ao final da lista, sem número, porque não
foram lidas.

1. **ClickHouse — "ClickHouse welcomes Langfuse: The future of open-source LLM observability"**
   (16/01/2026).
   `https://clickhouse.com/blog/clickhouse-acquires-langfuse-open-source-llm-observability`
   Sustenta: a data da aquisição; os números de adoção do Langfuse (20k+ estrelas, 23,1M+
   instalações de SDK por mês, 6M+ *pulls* de Docker, 19 das Fortune 50 e 63 das Fortune 500);
   a frase da Merck sobre confiança e visibilidade. Confiabilidade: **alta para o fato da
   aquisição e média para os números de adoção** — é material do comprador, e os números de
   adoção são autorreportados. Não traz valor da transação.
2. **OpenTelemetry — "Inside the LLM Call: GenAI Observability with OpenTelemetry"**, blog
   oficial, 2026. `https://opentelemetry.io/blog/2026/genai-observability/`
   Sustenta: a estrutura `invoke_agent` / `chat` / `execute_tool`; a emissão por VS Code Copilot,
   OpenAI Codex e Claude Code; e a caracterização das convenções como em desenvolvimento ativo.
   Confiabilidade: alta para o conteúdo técnico. **A página não traz data nem autoria visíveis**
   no que consegui ler, e por isso o ano de 2026 aqui vem do caminho da URL, não do texto.
3. **OpenTelemetry — página da especificação GenAI.**
   `https://opentelemetry.io/docs/specs/semconv/gen-ai/`
   Sustenta: **apenas** o fato de que as convenções foram movidas para repositório próprio. A
   página devolve só o aviso de mudança. Está listada porque foi aberta e porque é a razão de a
   afirmação sobre estabilidade ter ficado marcada como não verificada na seção 3.
4. **OpenTelemetry — repositório `semantic-conventions-genai`** (GitHub).
   `https://github.com/open-telemetry/semantic-conventions-genai`
   Sustenta: a existência do repositório próprio, o escopo (spans, métricas, eventos,
   convenções por provedor) e a referência a `gen_ai.operation.name`. Confiabilidade: alta para
   existência e escopo. **Não declara estabilidade na página inicial** — é esta ausência que
   sustenta a ressalva da seção 3.
5. **Wang, H.; Li, H.; Mang, Q.; Cheung, A.; Sen, K.; Song, D. — "Do Androids Dream of Breaking
   the Game? Systematically Auditing AI Agent Benchmarks with BenchJack"** (14/05/2026).
   `https://arxiv.org/abs/2605.12673`
   Sustenta: dez benchmarks de agente auditados; **219 falhas distintas**; exploits com
   pontuação quase perfeita sem resolver uma tarefa; redução da taxa de tarefas hackeáveis de
   quase 100% para menos de 10% em quatro benchmarks. Confiabilidade: média-alta — autoria
   reconhecível em segurança e sistemas, método declarado, **mas é preprint e li o resumo, não o
   corpo**.
6. **Norman, J. D.; Rivera, M. U.; Hughes, D. A. (UC Berkeley) — "Reliability without Validity:
   A Systematic, Large-Scale Evaluation of LLM-as-a-Judge Models Across Agreement, Consistency,
   and Bias"** (17/06/2026). `https://arxiv.org/abs/2606.19544`
   Sustenta: 21 juízes, 9 provedores, 3 benchmarks, 118 execuções, ~541 mil julgamentos, coleta
   em março-abril de 2026; deflação de kappa de 33,8 a 41,3 pp; mudança de até 14 posições no
   ranking entre benchmarks; a coexistência de confiabilidade >0,95 com viés de posição >0,10 em
   dois juízes em produção; viés de verbosidade <0,011; e o *Minimum Viable Validation Protocol*
   de cinco passos. Confiabilidade: **alta para o que mede** — escala grande, protocolo
   declarado, limitações enumeradas pelos próprios autores (só inglês, só texto, instantâneo de
   dois meses, rubrica única, sem logprobs). Preprint, sem replicação independente.
7. **PLUR — "Is There an Open Standard for AI Agent Memory Engrams?"** (dev.to).
   `https://dev.to/plur9/is-there-an-open-standard-for-ai-agent-memory-engrams-gm2`
   Sustenta: a inexistência de padrão em nível de RFC em meados de 2026; a Engram Specification
   (março de 2026, Apache-2.0, entradas YAML com proveniência, tipo, escopo e recuperação
   ponderada); a ausência de adoção por projeto grande; e a divisão MCP-transporte /
   Engram-modelo-de-dados. Confiabilidade: **baixa a média** — é material de quem publicou a
   especificação, portanto parte interessada. **A afirmação que ele sustenta é a de ausência de
   adoção da própria proposta**, que é justamente a que uma parte interessada não tem incentivo
   para inventar. É por isso que ela entrou.
8. **Ravindran, S. K. (Microsoft) — "Portable Agent Memory: A Protocol for Provenance-Verified
   Memory Transfer Across Heterogeneous LLM Agents"** (10/05/2026).
   `https://arxiv.org/abs/2605.11032`
   Sustenta: o diagnóstico de aprisionamento em *runtime* de fornecedor; o modelo de cinco
   componentes de memória; continuidade de transferência de 0,83 a 0,92 contra 0,28 a 0,45 de
   linha de base; 100% de detecção de adulteração em mil mutações; re-hidratação em 12,7 ms.
   Confiabilidade: média — preprint de autor único, resultados autorreportados sobre protocolo
   próprio. Entra pelo **diagnóstico**, não pelos números do método proposto.
9. **Dash, P.; Ge, T.; Jain, A.; Shah, T.; Shang, Z. — "From Untrusted Input to Trusted Memory:
   A Systematic Study of Memory Poisoning Attacks in LLM Agents"** (03/06/2026, rev. 18/06/2026).
   `https://arxiv.org/abs/2606.04329`
   Sustenta: quatro canais de escrita em memória e nove vulnerabilidades estruturais; taxonomia
   de seis classes de envenenamento; MPBench; e as duas conclusões citadas — agentes que
   escrevem e recuperam memória mais agressivamente são mais exploráveis, e as defesas contra
   injeção de prompt não cobrem envenenamento de memória. Confiabilidade: média-alta para o
   enquadramento. **Li o resumo, não o corpo**: as taxas de sucesso por classe de ataque não
   estão neste documento porque não as vi.
10. **Mudasiru, R. — "Deterministic Replay for AI Agent Systems"** (`agrepl`),
    arXiv:2607.16200. `https://arxiv.org/abs/2607.16200`
    Sustenta: fidelidade de replay F = 1,0; redução mediana de latência por passo de 98,3%;
    interceptação por proxy na camada de transporte com replay isolado sem rede de saída; e a
    lista de fontes irredutíveis de não determinismo (amostragem do modelo, estado de API
    externa, cabeçalhos de CDN, ruído de ambiente). Confiabilidade: média — preprint de autor
    único com resultados autorreportados. **A data de submissão não é afirmada neste documento**:
    o retorno dizia abril de 2026 e o identificador `2607` indica julho. Ver seção 8.
11. **iWeaver — "Alpha Arena Season 1 Results: Final Ranking and Lessons"** (04/08/2026).
    `https://www.iweaver.ai/blog/alpha-arena-ai-trading-season-1-results/`
    Sustenta: **apenas** o formato do Alpha Arena — US$ 10.000 de capital real por modelo, seis
    modelos, mesmo prompt e mesmos dados, mercado real. Confiabilidade: **baixa** — blog
    secundário, e os números de desempenho que ele traz divergem de outros quatro relatos do
    mesmo evento. **Nenhum resultado de desempenho daqui entrou no documento.** Ver seção 8.
12. **Temas de tendência 2026.2, tema 3** — CIN0055.
    `https://tendencias-midia-interacao.vercel.app/materiais/temas-tendencias-2026-2.md`
    Sustenta: o inventário de ferramentas levantado pela turma; a linha maduro/emergente
    ("logs e métricas de aplicação são maduros; teste unitário é maduro; o emergente é a
    avaliação de sistemas não determinísticos e a memória que atravessa sessões e ferramentas");
    e a fronteira com os temas 1 e 2. Confiabilidade: alta para o que afirma — é o registro do
    que a turma levantou, com critério declarado.
13. **EU Artificial Intelligence Act — Artigo 12, "Record-keeping".**
    `https://artificialintelligenceact.eu/article/12/`
    Sustenta: o texto literal da obrigação de registro automático ao longo da vida do sistema; o
    critério de rastreabilidade adequada à finalidade pretendida; e os itens mínimos para
    sistemas biométricos do Anexo III. Confiabilidade: **alta** — reprodução do texto legal, e é
    a espinha da raiz 2.
14. **Marques, J. (Asqav) — "What the EU AI Act requires for AI agent logging"**, Help Net
    Security (16/04/2026).
    `https://www.helpnetsecurity.com/2026/04/16/eu-ai-act-logging-requirements/`
    Sustenta: a data de 2 de agosto de 2026 para as obrigações do Anexo III; a leitura de
    "automatic" e "over the lifetime"; a retenção mínima de seis meses pelo *deployer*; a sanção
    de até 15 milhões de euros ou 3% do faturamento mundial; a ausência de norma técnica
    concluída (prEN 18229-1 e ISO/IEC DIS 24970); o pacote *Digital Omnibus* propondo adiamento;
    e a lacuna de log à prova de adulteração. Confiabilidade: **média-alta** — análise assinada
    por fundador de empresa do setor, portanto parte interessada, mas com prazos e normas
    nomeados e verificáveis um a um.
15. **Mem0 Engineering Team — "State of AI Agent Memory 2026"** (17/09/2026).
    `https://mem0.ai/blog/state-of-ai-agent-memory-2026`
    Sustenta: **nada no corpo do documento**. Está listada porque foi aberta e porque é a origem
    do número de consultoria descartado na seção 8. Confiabilidade: **baixa** — material de
    fornecedor sobre o próprio produto, com benchmarks autorreportados e uma previsão de
    terceiro citada sem link.
16. **Formato do documento de tendência** — CIN0055 (lido em cópia local do repositório da
    disciplina, `26_2/hiper-deep-research/materiais/formato-documento-tendencia.md`; espelho
    público em `https://tendencias-midia-interacao.vercel.app/materiais/formato-documento-tendencia.md`).
    Sustenta: a estrutura deste documento, os campos do frontmatter e as regras do bloco da roda.
    Confiabilidade: alta — é a especificação.

**Tentativas de acesso que falharam, e por isso não entram na contagem:** `nof1.ai` (HTTP 429
nas duas tentativas — é a fonte primária do Alpha Arena, e a sua ausência é o motivo da seção 8);
`langfuse.com/blog` (HTTP 404); `datawallet.com/crypto/alpha-arena-nof1-ai-explained` (HTTP 404).

## 12. Anexo — o levantamento bruto

### 12.1 Efeitos mortos ou rebaixados na Fase 5, com o id original e a prova que os matou

| id original | efeito | prova | por quê |
|---|---|---|---|
| e11 (ordem 1) | Todo agente em produção emite trajetória em convenção aberta até 2029 | P2 · velocidade de adoção | Não há caso comparável. As convenções GenAI seguem em desenvolvimento ativo [2][4], e o OpenTelemetry levou anos para estabilizar convenções mais simples. Assumir universalidade em três anos era assumir velocidade sem precedente. **Eliminado.** |
| e1.3 | O tempo de revisão humana cai pela metade com trajetória instrumentada | P1 · extrapolação linear | É o presente em outro volume: mesmo ator, mesmo mecanismo, e um número redondo sem nenhuma fonte. Nenhum ator novo aparece. **Eliminado.** |
| e4.3 | A regulação europeia vira padrão global de trilha de auditoria até 2031 | P4 · força contrária | Força contrária não modelada: divergência regulatória fora da UE, e o próprio pacote *Digital Omnibus* propondo adiar as obrigações do Anexo III [14]. **Rebaixado, não eliminado** — foi para a seção 6 como sinal fraco. |
| e12 (ordem 1) | Multas de até 15 milhões de euros ou 3% do faturamento mudam o comportamento das plataformas em dois anos | P3 + número redondo | É **teto legal**, não penalidade aplicada; até 17/09/2026 nenhuma sanção por Artigo 12 havia sido aplicada [14]. Efeito construído sobre número redondo tratado como fato consumado. **Eliminado.** |
| e6.3 | Um padrão aberto de memória portátil é adotado pelos três maiores fornecedores até 2030 | P5 · precondição única | Galho inteiro pendurado numa aposta: que o incumbente adote voluntariamente o que dissolve o próprio *lock-in*. A Engram Specification existe desde março de 2026, é Apache-2.0, e nenhum projeto grande a adotou [7]. Se essa precondição falha, e6.1, e6.2 e os dois filhos caem juntos. **Eliminado**, e a fragilidade foi transferida para a seção 7. |
| e7.3 | Memória de agente entra na legislação de proteção de dados como categoria própria até 2029 | P2 · velocidade de adoção | O GDPR levou de 2012 a 2018 entre proposta e aplicação. Não há caso comparável de categoria nova de dado entrando em lei em três anos, e a proposta correspondente não existe em lugar nenhum hoje. **Eliminado**, com a hipótese preservada na seção 6 como sinal fraco. |
| e9.3 | O LLM-as-judge é abandonado como método por causa da evidência de viés | P4 · força contrária, invertida | A força contrária aqui **favorece** o método: o substituto é avaliação humana, ordens de magnitude mais cara. Evidência de viés não mata método barato sem substituto — normaliza a ressalva. O próprio trabalho que documenta o problema propõe um protocolo para **continuar usando** [6]. **Eliminado.** |
| e10.2 | O benchmark público morre até 2031 | P3 · já aconteceu, e P1 | Já é presente em grau relevante: contaminação e saturação estão documentadas e os benchmarks continuam sendo publicados e citados [5]. O efeito é o pai em outro volume — mesmo ator, mesmo mecanismo. Reescrito como e9.2, que troca o mecanismo (a decisão migra para conjunto privado) em vez de aumentar o volume. **Eliminado e substituído.** |

**Cota de dano cumprida, por raiz:** raiz 1 perdeu e11 e e1.3; raiz 2 perdeu e12 e rebaixou
e4.3; raiz 3 perdeu e6.3 e e7.3; raiz 4 perdeu e9.3 e e10.2. Oito no total, e nenhuma raiz saiu
ilesa.

### 12.2 Candidatas reprovadas na triagem de maturidade (Fase 2)

| candidata | veredicto | teste | razão |
|---|---|---|---|
| Logs e métricas de aplicação (APM clássico) | MADURO · H1 | T1, T5 | Não muda o que é possível; caminho de instalação padrão, preço estável, modos de falha documentados. É o que a própria disciplina já classifica como maduro [12]. |
| Teste unitário e CI | MADURO · H1 | T1, T5 | Rotina há duas décadas. Entra como substrato: é contra ele que a avaliação não determinística se define. |
| Rastreamento de chamada de modelo isolada (Langfuse, LangSmith, Phoenix, MLflow) | MADURO · H1 | T5 | 23,1M instalações de SDK por mês, 19 das Fortune 50, adquirido por empresa de infraestrutura de dados em 16/01/2026 [1]. Instalação padrão, preço estável, categoria com vários concorrentes comparáveis. Cita-se na seção 3; não entra na seção 4. |
| Memória entre conversas em assistente de consumo | MADURO · H1 | T1, T5 + régua da disciplina | Disponível em produto de massa, ligada por padrão em parte deles. Descartado de início pelo recorte da entrevista. |
| RAG e banco vetorial | MADURO · H1 | T1, T5 | Caminho padrão de instalação, dezenas de implementações intercambiáveis. Substrato. |
| Engenharia de contexto e redução de token (`lean-ctx` e afins) | **H2−** | T1 | **O caso exemplar deste tema.** Faz a janela de contexto durar mais e o custo cair; não muda o que é possível fazer. Escora o presente e se disfarça de tendência — é exatamente o erro que a régua da disciplina persegue. Não vira raiz. |
| Convenções semânticas GenAI do OpenTelemetry | EMERGENTE, **e substrato de disrupção** | passa T1/T3/T4 | Passa, mas é infraestrutura de vocabulário, não ruptura em si. Entra como **precondição** da raiz 1: madura o bastante para ser emitida por três agentes de código [2], imatura o bastante para não ser estável [3][4]. Caso de "tecnologia participa da disrupção sem ser a disrupção". |
| Replay determinístico de agente (`agrepl` e linhagem) | EMERGENTE **e DISRUPTIVO** | passa T1/T3/T4 | Torna sem valor a competência de reproduzir falha à mão e o relato de defeito por narrativa. Entra por **mercado novo**: quem nunca teve como reproduzir passa a ter. Virou raiz 1. |
| Trilha de auditoria exigida por lei | **DISRUPTIVO** | passa T1/T3/T4 | Torna sem valor a instrumentação pensada só para depurar e a conformidade feita sobre documento. Entra por **mercado novo**: o comprador por obrigação nunca foi cliente de observabilidade. Virou raiz 2. |
| Memória persistente entre sessões, proprietária (Mem0, Zep, Letta, Hindsight) | EMERGENTE, **disruptivo na borda** | passa T1/T3, falha parcial em T4 | Muda o locus do valor: do modelo para o acumulado. O incumbente que ela desvaloriza é "o modelo como peça trocável". Falta o padrão — e é por isso que virou raiz 3 pelo lado da **não portabilidade**, não pelo lado da capacidade. |
| Memória portátil entre fornecedores (Engram, Agent File `.af`, protocolos de transferência) | EMERGENTE, **pré-disruptivo** | passa T1/T3, falha T4 | A precondição faltante é de incentivo, não de engenharia: o formato existe e não foi adotado [7]. Entra dentro da raiz 3 como a precondição dela. |
| LLM-as-judge | EMERGENTE, **não disruptivo** | passa T1/T3/T4, mas é sustentação | Serve melhor ao **mesmo** cliente do incumbente (a equipe que já avaliava). Pela definição adotada, isso é sustentação, não disrupção — por mais barulhento que seja. Entra como **mecanismo** dentro da raiz 4, cuja ruptura é a ausência de validação do juiz, não a existência do juiz. |
| Benchmark público de agente (SWE-bench, GAIA, τ-bench) | MADURO · **H1 perdendo aderência** | T5, e falha de função | Prática instalada, citada, com leaderboards — e documentadamente hackeável a taxa próxima de 100% antes de correção [5]. É H1 no sentido preciso do Three Horizons: dominante e perdendo aderência. Entra na seção 3, não na 4. |
| Avaliação com consequência material (Alpha Arena) | EMERGENTE, **sinal fraco** | passa T1/T3/T4 | Muda o que é possível afirmar sobre um modelo, porque o resultado tem custo. Mas é um experimento, não uma categoria, e a fonte primária não abriu. Entra como e10 com `confianca: baixa` e como a premissa concorrente da seção 7. |
| Certificação de sistema de IA (ISO/IEC 42001 e afins) | MADURO como processo, **EMERGENTE como objeto** | T1 | Certificar sistema de gestão é prática conhecida; certificar **avaliador** não. A distinção é o que sobrou, e virou e9.1.1. |

### 12.3 O que não foi possível apurar

- **Qualquer número de desempenho do Alpha Arena.** Quatro relatos mutuamente incompatíveis do
  mesmo evento e HTTP 429 na fonte primária. Ver seção 8. Sem isso, a força do sinal "avaliação
  com consequência material" é desconhecida — é a lacuna mais séria deste mapa, porque é
  exatamente o sinal que sustenta a premissa concorrente da seção 7.
- **O status de estabilidade dos atributos `gen_ai.*`.** Análises secundárias afirmam que
  nenhum está marcado como *Stable*; a página antiga da especificação só redireciona [3] e o
  repositório novo não declara na página inicial [4]. **Não verificado em fonte primária.**
- **Taxas de sucesso por classe de envenenamento de memória.** Li o resumo de [9], não o corpo.
  A taxonomia e o número de canais e vulnerabilidades estão apurados; as taxas, não.
- **Tamanho real do mercado de auditoria e certificação de IA.** Circulam projeções de
  consultoria (bilhões de dólares, CAGR de dois dígitos, horizonte de 2032 a 2036) sem
  metodologia visível e com valores divergentes entre relatórios. **Não entraram no corpo.**
- **Adoção corporativa de agentes em percentual.** A única cifra que apareceu vinha de material
  de fornecedor citando consultoria sem link [15]. Descartada. Consequência: este mapa **não
  afirma nenhum número de adoção**, o que enfraquece a datação de e1, e6 e e9.
- **Regulação fora da União Europeia.** O recorte é global e a raiz 2 se apoia numa única
  jurisdição. Não apurei Estados Unidos, China, Coreia do Sul nem Índia. Viés geográfico
  declarado, não recorte.
- **Brasil.** O PL 2338/2023 foi aprovado no Senado e segue em tramitação na Câmara, com
  previsão de votação final em 2026; há dispositivos sobre auditoria e supervisão humana para
  sistemas de alto risco, incluindo uso em processos seletivos e avaliação de desempenho.
  **Não abri fonte primária sobre isso nesta sessão** — apenas resultados de busca —, e por isso
  a nota sobre o Brasil pedida no recorte está registrada aqui, no anexo, e **não no corpo do
  documento**. O que o resultado de busca sugere e que valeria apurar: se a lei brasileira
  chegar com exigência de trilha de auditoria e sem norma técnica, o padrão de fato que ocupar o
  vazio europeu (e4.2.1) chega ao Brasil já formado, e a decisão técnica terá sido tomada fora.

### 12.4 Buscas que não deram em nada

- **Incidente público e nomeado de vazamento por memória compartilhada entre pessoas da mesma
  organização.** Há literatura sobre o mecanismo [9] e menções a incidentes em produtos de
  grandes fornecedores em resultados de busca, mas não consegui abrir um caso com nome, data e
  dano. **Esse vazio é informativo:** é o que mantém e7 em `sinal: medio` e não `forte`, e é o
  wildcard reverso da seção 6.
- **Norma técnica publicada para o Artigo 12.** Procurei texto de prEN 18229-1 e de
  ISO/IEC DIS 24970. Ambas seguem em rascunho [14]. **A ausência é o achado** — é a precondição
  faltante da raiz 2, e ela se confirmou por não existir.
- **Um corpo de certificação de avaliadores de IA já constituído.** Há certificações de auditor
  de IA e de sistema de gestão, e há proposta acadêmica de protocolo mínimo de validação de
  juízes [6]. Não há instância que certifique quem avalia. e9.1.1 é aposta, não extrapolação de
  algo em formação.
- **Métrica aceita de "qualidade de trajetória".** Nada com definição consensual. O que existe
  é concordância entre juízes, que é outra coisa. É por isso que o experimento da seção 10 mede
  concordância entre leitores e não qualidade da trajetória: a segunda não tem unidade.

### 12.5 Registro de método desta rodada

- **Entrevista (Fase 1).** As nove perguntas foram feitas em bloco. Sete vieram respondidas no
  recorte recebido. Duas foram preenchidas por mim e estão declaradas como suposição no bloco
  `RECORTE FECHADO`: **a pergunta 8 (quantas disrupções-raiz)**, que ficou em quatro, e **a
  pergunta 1 na parte da fronteira**, derivada do bloco "Fronteira com os vizinhos" do tema 3
  [12] em vez de ditada pelo autor. Não houve confirmação explícita do recorte fechado: **não
  havia interlocutor nesta rodada**, e a skill exige espera por confirmação. Esta é a
  não-conformidade da rodada, registrada aqui em vez de omitida.
- **Por que quatro raízes e não três.** Três raízes obrigariam a fundir memória e observabilidade
  numa só, e o tema afirma que são "duas faces de uma mesma infraestrutura" — faces, não a mesma
  coisa. O teste que decidiu foi o da regra de parada aplicada às raízes: memória e trajetória
  têm **atores diferentes** (quem guarda × quem confere) e **mecanismos diferentes** (acúmulo ×
  registro). Cinco raízes teriam virado lista de tecnologias.
- **Triagem (Fase 2).** Quinze candidatas avaliadas; seis reprovadas como maduras, uma
  classificada como H2− (engenharia de contexto), uma como sustentação e não disrupção
  (LLM-as-judge), e duas como emergentes-substrato. Não houve recusa total do tema: a borda
  emergente é larga e bem documentada. Tabela completa em 12.2.
- **Roda (Fase 4).** Quatro raízes; 10 / 16 / 16 efeitos; profundidade três; prazos monotônicos
  em todos os galhos; **um único efeito com `confianca: alta`** em todo o mapa (e4, ordem 1) e
  **nenhum de ordem 3 com `alta`** — dentro da cota de humildade. Três efeitos ficaram fora da
  árvore por exigirem duas raízes e estão registrados em prosa na seção 5 como convergências A,
  B e C.
- **Contestação (Fase 5).** As seis provas foram aplicadas à roda inteira. Oito efeitos
  eliminados ou rebaixados, com pelo menos um por raiz (12.1). A P6 (CLA) produziu o achado mais
  consequente da rodada, e ele não está no YAML: todo o mapa repousa na premissa de que
  legitimidade vem de rastreabilidade, e o próprio tema contém a premissa concorrente
  (avaliação por consequência material). Está na seção 7, item 3, e alimenta o cenário
  indesejável da seção 9.
- **Fora do escopo por fronteira.** Permissão, sandbox e limite de ação do agente (tema 2);
  mudança no ofício de programar (tema 1); memória de assistente de consumo (régua da
  disciplina). Nenhum dos três foi derivado, mesmo quando um galho apontava para lá — e2.1
  chega perto da fronteira do tema 2 e parou antes.
