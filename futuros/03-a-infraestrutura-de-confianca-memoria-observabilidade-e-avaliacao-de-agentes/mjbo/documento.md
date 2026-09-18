---
tema: "A infraestrutura de confiança: memória, observabilidade e avaliação de agentes"
slug: a-infraestrutura-de-confianca-memoria-observabilidade-e-avaliacao-de-agentes
autor_login: mjbo
zona_de_interesse: Agentes
data: 2026-09-17
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 10
efeitos_ordem_2: 19
efeitos_ordem_3: 26
tecnologias_citadas: [OpenTelemetry GenAI semantic conventions, Langfuse, LangSmith, Arize Phoenix, MLflow, promptfoo, Mem0, Letta, Zep, Hindsight, memória do Claude (memory tool), context editing, MCP, LoCoMo, LongMemEval, BEAM, tau-bench, tau2-bench, SWE-bench Verified, GAIA, LLM-as-judge, Alpha Arena (Nof1), ISO/IEC 42001, ISO/IEC 42006, EU AI Act Art. 12, PL 2338/2023]
fontes: 19
confianca: media
experimento: Banco de provas de confiabilidade e memória com rastro visível
skill_usada: futurizacao-mjbo
publico_ok: false
---

## 1. Resumo

Quando a máquina fabrica o produto, avaliar o produto deixa de medir o produto e passa a medir a
máquina — e a pergunta muda de "o que foi entregue?" para "por que isso está certo?". Este mapa
sustenta que três rupturas já em curso formam uma mesma infraestrutura: a avaliação de sistemas
não determinísticos (em que rodar duas vezes dá dois resultados, e a métrica honesta é pass^k, não
a taxa média de acerto); a memória que atravessa sessões, que transforma o agente de função sem
estado em ativo que acumula — e em prisão de fornecedor, já que sete de sete produtos testados em
julho de 2026 não exportam memória de forma reimportável; e a trilha de auditoria, que deixou de
ser prática de engenharia para virar obrigação legal com vocabulário padronizado em disputa. Até
2031 o efeito visível para quem projeta mídia e interação não é técnico: é que o rastro — plano,
ferramenta usada, etapa que falhou, item de memória que motivou a sugestão — vira elemento de
interface, com gramática visual própria, e a memória vira superfície editável pelo usuário. O
mapa tem confiança média: a direção é sólida, os prazos são a parte frágil.

## 2. O tema

Um agente é um sistema que decide o que fazer a seguir, chama ferramentas, tenta, erra, tenta de
novo, e entrega algo. Duas consequências desmontam a engenharia de software como ela era
praticada. A primeira: o resultado não é reprodutível — a mesma entrada produz saídas diferentes,
de modo que aprovar ou reprovar um caso de teste deixa de ser suficiente e passa a ser preciso
medir a *distribuição* de execuções. A segunda: o caminho importa mais que o destino, porque uma
resposta certa obtida por acaso e uma resposta certa obtida por raciocínio correto são
indistinguíveis no produto final — e distinguíveis no rastro.

A isso se soma a memória. Um agente que lembra entre sessões deixa de ser ferramenta e vira algo
que acumula: contexto, decisões, erros já cometidos, preferências que ninguém reformulou. Memória
e auditoria são as duas faces da mesma infraestrutura — a que permite confiar num sistema que
ninguém consegue ler por inteiro.

**Onde isso encosta em mídia e interação.** Em três lugares concretos, todos de projeto, não de
back-end. (a) *O rastro vira tela.* Se o produto precisa justificar o que fez, a justificativa
precisa de forma: plano antes da execução, log de atividade durante, diff do que mudou, etapa que
falhou com caminho de correção. A literatura de agentic UX de 2026 já trata isso como padrão, não
como enfeite — planning visibility, tool-use disclosure, autonomy slider, memory surfacing. (b)
*A memória vira superfície.* Uma preferência registrada há três semanas precisa ser visível,
compreensível e editável, ou o produto vira adivinhação. (c) *A avaliação vira gênero.* Quando a
prova de que um sistema presta envolve consequência real — dinheiro, risco, público —, a avaliação
deixa de ser relatório interno e vira espetáculo assistível, com placar, narração e torcida.

**Por que merece mapa de futuro, e não levantamento de estado da arte.** Porque a parte madura
(log, métrica, teste unitário, dashboard de custo) é justamente a que não explica nada: ela mede
a aplicação, não a decisão. O que está em disputa agora — que vocabulário de rastro vence, de quem
é a memória, quem certifica o avaliador — é uma disputa de *poder de plataforma* que ainda não se
fechou, e cujas consequências de segunda e terceira ordem caem sobre quem projeta interface, não
sobre quem escreve infraestrutura.

## 3. Onde isso está hoje

### O que já existe e funciona em produção

**Observabilidade de agentes é produto maduro como negócio, imaturo como padrão.** A Langfuse
(MIT, open source, OpenTelemetry-native) declara mais de 22 mil estrelas no GitHub, mais de 50 mil
empresas usuárias, 21 das Fortune 50 e mais de 90 bilhões de observações processadas por mês [10];
desde janeiro de 2026 faz parte da ClickHouse. O que ela entrega — traço hierárquico de cada
chamada de modelo, ferramenta e recuperação, versionamento de prompt, datasets de experimento e
pontuação por LLM-as-judge ou revisão humana — é hoje o pacote padrão do setor, replicado por
LangSmith, Arize Phoenix, MLflow, Braintrust e Opik.

**O padrão, porém, não fechou.** Em 17 de julho de 2026, *nenhum* span, evento, métrica ou
atributo específico de GenAI nas convenções semânticas do OpenTelemetry estava marcado como
`Stable`: todos seguem em `Development` [2]. O vocabulário mudou seis vezes desde agosto de 2024 —
renomeação de atributos de token (v1.27.0), `gen_ai.system` virando `gen_ai.provider.name`
(v1.37.0), eventos de resultado de avaliação (v1.38.0), spans de retrieval (v1.40.0), divisão do
span de invocação de agente (v1.41.0) — e, em junho de 2026, a v1.42.0 moveu todo o material de
GenAI para um repositório dedicado, que ainda não tem release nem tag, nem URL de schema
finalizada [2]. Na prática, frameworks emitem duas gerações de atributos ao mesmo tempo, por
compatibilidade. A estrutura em que todos concordam já é a que interessa: um span `invoke_agent`
no topo, com `chat` para cada chamada de modelo e `execute_tool` para cada ferramenta, formando
a árvore de execução [1].

**Memória saiu do laboratório.** A Anthropic lançou em 29 de setembro de 2025 a memory tool em
beta pública, junto com context editing: o agente cria, lê, atualiza e apaga arquivos num
diretório de memória hospedado *na infraestrutura do cliente*, e o contexto é podado
automaticamente quando se aproxima do limite. Os números divulgados: 39% de melhoria combinando
memória e edição de contexto em tarefas de busca agêntica, 29% só com edição de contexto, e 84%
de redução de tokens numa avaliação de 100 turnos [9]. No open source, Mem0, Letta (ex-MemGPT) e
Zep ocupam o campo, com tração real de adoção.

### O que existe, mas não funciona

**Os benchmarks de memória medem a parte fácil.** LoCoMo (2024, diálogo multissessão, ~300
turnos), LongMemEval (2024, cinco capacidades, incluindo abstenção) e BEAM (2026, dez capacidades,
até 10 milhões de tokens) são o que existe. O próprio fornecedor que lidera o placar admite os
buracos: praticamente nenhum benchmark público mede o passo de *escrita* (decidir o que merece ser
guardado), quase nenhum mede esquecimento, consolidação ou resolução de contradição, e **nenhum
testa isolamento de dados por usuário**, que é requisito de produção [3]. Pior: os números não são
comparáveis entre si, porque variam o modelo que responde, o modelo que julga e o uso de
reranking [3]. A Zep publicou uma crítica direta ao benchmark do Mem0 mostrando que um baseline
trivial de contexto completo tirava ~73% de J-score contra ~68% do Mem0, que o dataset tem
categoria sem ground truth, atribuição errada de falante e perguntas subespecificadas, e que a
implementação da Zep feita pelo concorrente atribuía papel de usuário aos dois participantes e
anexava timestamp ao texto em vez de usar o campo dedicado [4]. Isto é: o campo ainda está na fase
em que cada um mede a si mesmo.

**Os benchmarks de agente estão contaminados, e os donos já admitiram.** Em 23 de fevereiro de
2026 o time de Frontier Evals da OpenAI anunciou que pararia de reportar SWE-bench Verified; numa
auditoria de 138 das tarefas mais difíceis, 59% tinham falha material — testes estreitos demais
para aceitar respostas corretas, ou frouxos demais para rejeitar erradas [15]. O estudo "The
SWE-Bench Illusion" (Purdue/Microsoft) mostrou modelos acertando de 60% a 76% o arquivo correto
*apenas com o texto do issue*, sem ver o repositório, contra menos de 53% em repositórios fora do
benchmark [15]. E o K Prize, montado com issues posteriores à data de corte, teve pontuação
vencedora de 7,5% — contra os 70 e tantos por cento do SWE-bench Verified [15].

**A métrica honesta já existe e é desconfortável.** O τ-bench introduziu o `pass^k` — a chance de
que *todas* as k tentativas deem certo, em vez de *ao menos uma* — e mostrou que agentes de ponta
ficam abaixo de 25% no `pass^8` do domínio de varejo, com o GPT-4o resolvendo menos de 50% das
tarefas [5]. Matematicamente, 90% de acerto por tentativa vira 57% de consistência em oito.

**O juiz automático é reprodutível e errado ao mesmo tempo.** O maior estudo sistemático até agora
— 21 juízes de 9 provedores, três benchmarks, três protocolos, ~541 mil julgamentos individuais,
118 execuções entre março e abril de 2026 — chegou a um título que é a conclusão: *Reliability
without Validity*. A concordância bruta superestima a concordância corrigida por acaso (κ) em 33,8
a 41,2 pontos percentuais; dois juízes de produção tiveram confiabilidade teste-reteste acima de
0,95 com viés de posição acima de 0,10 (reprodutíveis e errados); e o ranking de um mesmo juiz
muda até 14 posições conforme o benchmark escolhido [7].

**A memória não é portátil, e ninguém finge que é.** Um teste de julho de 2026 sobre sete produtos
de memória (ChatGPT Memory, Claude Projects/Memory, Claude Tag, Gemini saved info, Cursor rules,
Cognee, ByteRover) resume o resultado em uma frase: "sete produtos, sete variações de não" — o
critério sendo simetria de importação, isto é, um concorrente conseguir ler o export e reconstruir
a memória com estrutura intacta. O que se perde no export: estrutura tipada, atribuição de origem,
relações cruzadas, validade temporal, permissões e proveniência [17]. Isso convive mal com o
Artigo 20 do GDPR, que exige dado pessoal em formato "estruturado, de uso comum e legível por
máquina" [17].

### O que existe como paper e ainda não como produto

Protocolos de memória portátil com proveniência verificável: o "Portable Agent Memory"
(arXiv:2605.11032, 10/05/2026) propõe cinco tipos de memória (episódica, semântica, procedural, de
trabalho e de identidade), estrutura Merkle-DAG com hashing BLAKE3 e assinatura Ed25519 para
evidência de adulteração, controle de acesso por capacidade e pipeline de re-hidratação resistente
a injeção; reporta Transfer Continuity Score de 0,83–0,92 contra 0,28–0,45 do baseline em
transferências entre Claude, GPT-4 e Gemini [13]. Surveys de "always-on agents" já tratam
governança — log transparente de decisão, intervenção humana, auditoria de consistência de
memória, política de retenção e apagamento — como fundação, não como apêndice [14].

### Quem está construindo

Plataformas de observabilidade e avaliação: Langfuse (ClickHouse), LangSmith (LangChain), Arize
Phoenix, MLflow, Weights & Biases, Braintrust, promptfoo, Opik. Memória: Mem0, Letta, Zep,
Hindsight, Supermemory, Cognee, e os fornecedores de modelo com memória nativa. Padrão:
OpenTelemetry GenAI SIG, com as convenções de MCP incorporadas ao mesmo repositório na v1.42.0.
Avaliação com consequência: Nof1, cujo Alpha Arena deu US$ 10 mil reais a cada um de seis modelos
para operar perpétuos de cripto na Hyperliquid, com o mesmo prompt e os mesmos dados — a primeira
temporada terminou com Qwen3 Max em +22,3%, DeepSeek V3.1 em +4,89%, Claude Sonnet 4.5 em −30,8%,
Grok 4 em −45,3%, Gemini 2.5 Pro em −56,7% e GPT-5 em −62,7% [11].

### O chão regulatório

O Artigo 12 do EU AI Act exige que sistemas de alto risco permitam tecnicamente o registro
automático de eventos ao longo de toda a vida do sistema, com rastreabilidade adequada à
finalidade, servindo a identificação de risco, monitoramento pós-mercado e monitoramento
operacional pelo implantador [6]. Para sistemas de identificação biométrica (Anexo III, 1(a)),
o log mínimo inclui início e fim de cada uso, bases de referência consultadas, dados de entrada
que geraram correspondência e identificação de quem verificou o resultado [6]. Retenção mínima de
seis meses para a maioria e 24 meses para biometria e aplicação da lei; multas de até €15 milhões
ou 3% do faturamento global [8]. Não existe ainda norma técnica fechada para esse log: a ISO/IEC
24970 está em final draft e a prEN 18229-1 em desenvolvimento. Acima disso, a ISO/IEC 42006
(publicada em 07/07/2025; obrigatória pela European Accreditation desde 20/11/2025; primeira
acreditação do UKAS em 15/01/2026) regula quem pode certificar sistemas de gestão de IA — ou seja,
a pergunta "quem certifica o certificador" já tem norma [16]. No Brasil, o PL 2338/2023 foi
aprovado por unanimidade no Senado em 10/12/2024 e seguia parado na Câmara em meados de 2026, sem
relatório apresentado nem data de votação; o desenho copia a lógica de risco europeia, prevê
avaliação de impacto algorítmico, supervisão humana e log de auditoria de acesso, com sanção de
até R$ 50 milhões — mas, enquanto ele não anda, quem já obriga são a LGPD e a Resolução CNJ
615/2025 [12].

### O que é maduro e por isso não entra na Seção 4

Log e métrica de aplicação; tracing distribuído como técnica; teste unitário; dashboards de custo
e latência por token; busca vetorial. Tudo isso funciona, tem décadas (ou anos) de prática e não
rompe nada — é o piso sobre o qual as rupturas abaixo acontecem.

## 4. As disrupções-raiz

Cada candidata abaixo passou pelo teste de três perguntas descrito na skill. As respostas estão
escritas, não subentendidas. Uma quarta candidata (LLM como juiz) foi classificada como
**emergente** e entra com ressalva explícita; o levantamento das candidatas reprovadas está na
Seção 12.

### 4.1 A unidade de avaliação deixa de ser o produto e passa a ser a distribuição de execuções

**O que rompe.** Avaliar deixa de ser verificar uma saída e passa a ser caracterizar um
comportamento: rodar N vezes, olhar a variância, medir `pass^k`, comparar o *caminho* (qual
ferramenta, qual tentativa falhada, qual desvio de política) e não só o destino. Isso invalida na
prática três coisas estabelecidas: o caso de teste determinístico como instrumento de aceite; a
ficha técnica com uma taxa de acerto única; e o leaderboard público estático como prova de
capacidade — este último já derrubado pelo próprio fornecedor que mais se beneficiava dele [15].

**O que isso torna possível que antes não era.** Afirmar, com número, *quão confiável* um sistema
é, e não *quão capaz*. São perguntas diferentes: 90% de capacidade média convivem com 57% de
confiabilidade em oito tentativas [5]. Antes de agentes multi-turno com ferramentas, essa
distinção não tinha objeto — software determinístico tem `pass^k = pass@1`.

**Por que agora, e não há cinco anos.** Três mudanças concretas e datáveis: (i) agentes passaram a
executar cadeias longas com ferramentas, criando variância onde não havia; (ii) a contaminação dos
benchmarks públicos ficou demonstrável — 60 a 76% de acerto de arquivo só com o texto do issue,
contra <53% fora do benchmark [15]; (iii) o vocabulário para registrar o caminho de execução
passou a existir e a ser instrumentado por default nos frameworks [1][2].

**O que falta para se concretizar.** Falta que `pass^k` (ou equivalente) saia do paper e entre em
contrato e em ficha de produto; falta custo de execução cair o bastante para rodar tudo N vezes; e
falta alguém neutro operar a avaliação — hoje quem mede é quem vende.

### 4.2 A memória entre sessões transforma o agente de função em ativo acumulado

**O que rompe.** Rompe o modelo sem estado: uma API em que cada chamada é independente, o
fornecedor é intercambiável e o valor está no modelo. Com memória, o valor migra para o histórico
— e o histórico é justamente a parte que não sai da plataforma [17]. Rompe também a premissa
contratual de que trocar de fornecedor custa uma refatoração: passa a custar o esquecimento de
tudo o que o sistema aprendeu sobre a equipe.

**O que isso torna possível que antes não era.** Um sistema que melhora por *uso individual* sem
re-treino, no nível da pessoa e da equipe — personalização sem fine-tuning, com o efeito colateral
de que o mesmo produto, na mão de dois clientes, deixa de ser o mesmo produto ao fim de um ano.

**Por que agora, e não há cinco anos.** Porque contexto virou o recurso caro: lembrar deixou de ser
"colar o histórico no prompt" e virou engenharia com poda automática, extração hierárquica e
recuperação multissinal [9][3]. E porque a capacidade virou produto de prateleira em 2025–2026
(memory tool, Mem0, Letta, Zep), não protótipo de laboratório.

**O que falta para se concretizar.** Falta resolver o que hoje nenhum benchmark mede: escrita
(o que merece ser guardado), esquecimento, contradição, validade temporal e **isolamento por
usuário** [3]. E falta portabilidade — que em julho de 2026 simplesmente não existia como
capacidade prática [17].

### 4.3 A trilha de auditoria vira obrigação legal com vocabulário comum

**O que rompe.** Rompe a autoatestação: até aqui, "nosso sistema é confiável" era afirmação de
fornecedor sustentada por material de marketing. Com registro automático obrigatório [6], com
retenção mínima [8] e com norma sobre quem pode certificar [16], a afirmação passa a ser
verificável por terceiro — e a consultoria de IA sem credencial perde o direito de assinar.
Rompe também o log proprietário como diferencial competitivo: se o vocabulário do rastro é comum,
o rastro de um fornecedor é comparável ao de outro.

**O que isso torna possível que antes não era.** Comparar, com o mesmo vocabulário, o
comportamento de agentes construídos por empresas diferentes — e usar o rastro como prova, não
como depoimento.

**Por que agora, e não há cinco anos.** Datas: Artigo 12 e as obrigações do Anexo III entrando em
vigor na janela 2026–2027 [6][8]; ISO/IEC 42006 publicada em 07/2025 e obrigatória na Europa desde
11/2025 [16]; extração das convenções GenAI para repositório próprio em 06/2026 [2]. Nada disso
existia em 2021, quando o objeto a auditar ainda era um classificador com entrada e saída legíveis.

**O que falta para se concretizar.** Falta a norma técnica do log fechar (ISO/IEC 24970 em final
draft, prEN 18229-1 em desenvolvimento); falta o vocabulário GenAI sair de `Development` — nenhum
atributo era estável em julho de 2026 [2]; e falta capacidade instalada de auditor, que é escassa
por definição numa profissão que começou anteontem [16].

### 4.4 (emergente, com ressalva) O LLM como juiz

**Por que emergente e não disrupção.** Passa na pergunta 1 (torna possível avaliar em escala
qualidades que antes exigiam painel humano) e na pergunta 3 (por que agora: custo por token caiu e
a avaliação virou parte do laço de produto). **Falha na pergunta 2**: não invalidou nenhum papel
estabelecido. O maior estudo disponível mostra juízes reprodutíveis e sistematicamente enviesados,
com κ muito abaixo da concordância bruta e ranking instável entre benchmarks [7] — isto é, ele
ainda não substituiu o julgamento humano, ele o *deslocou* para a arbitragem de casos difíceis.
Entra na roda dos futuros com confiança rebaixada e é o primeiro candidato a cair se o mapa
estiver errado.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A unidade de avaliação deixa de ser o produto e passa a ser a distribuição de execuções
    efeitos:
      - id: e1
        ordem: 1
        efeito: O leaderboard público estático perde autoridade e é substituído por avaliação contínua e privada sobre tráfego real
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Cada empresa passa a manter seu próprio conjunto de avaliação derivado do que seus usuários realmente pedem
            sinal: medio
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O conjunto de avaliação interno vira ativo negociável e objeto de cláusula contratual em fusões e aquisições
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: Times de produto versionam a avaliação junto com a interface, como hoje versionam componentes
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Métricas de confiabilidade no estilo pass^k substituem a taxa média de acerto nas fichas técnicas
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Contratos de fornecimento de agente passam a ter cláusula de variância máxima, não apenas de disponibilidade
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.2.2
                ordem: 3
                efeito: Seguradoras passam a precificar apólice de erro de agente usando a variância declarada como insumo
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A avaliação com consequência real (dinheiro, risco, público) se firma como formato de prova ao lado do benchmark estático
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Surgem arenas públicas de avaliação por domínio, com placar em tempo real e aposta declarada
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A arena de avaliação vira gênero de mídia assistível, com narração, recorte e torcida
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e2.1.2
                ordem: 3
                efeito: Reguladores passam a tratar arena patrocinada como publicidade e exigem divulgação de metodologia e de quem pagou
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O custo de avaliar com consequência real vira barreira de entrada para quem quer contestar um resultado
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: A avaliação independente migra para consórcios e universidades, fora das empresas que constroem os agentes
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O rastro de execução vira artefato de primeira classe do produto, e não log de engenharia
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Interfaces passam a exibir plano antes da execução, ferramenta usada durante e etapa que falhou depois
            sinal: forte
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Consolida-se uma gramática visual compartilhada do que a máquina fez, como se consolidou a do carregamento e a do erro
                sinal: medio
                prazo: 2031
                confianca: media
              - id: e3.1.2
                ordem: 3
                efeito: Ler rastro vira competência de usuário comum, e quem não lê aceita decisões que não consegue contestar
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: O volume de telemetria de agente ultrapassa o de telemetria de aplicação e vira o maior item da conta de observabilidade
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Amostragem e retenção de rastro viram decisão de política e de compliance, não de infraestrutura
                sinal: fraco
                prazo: 2030
                confianca: baixa
              - id: e3.2.2
                ordem: 3
                efeito: Guardar o rastro inteiro de decisões sensíveis vira serviço pago à parte, e quem não paga perde o direito de auditar depois
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A memória entre sessões transforma o agente de função sem estado em ativo acumulado
    efeitos:
      - id: e4
        ordem: 1
        efeito: O contexto acumulado passa a valer mais que o modelo, e trocar de fornecedor fica caro por perda de memória
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Portabilidade de memória vira exigência em compra corporativa antes de virar exigência regulatória
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Aparece um formato neutro de memória de agente com proveniência assinada e validade temporal explícita
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e4.1.2
                ordem: 3
                efeito: A memória construída por um trabalhador vira objeto de disputa quando ele sai da empresa
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Empresas passam a manter a memória do lado delas, como já fazem com o banco de dados, e alugar só o modelo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Surge o papel de curador de memória organizacional, que decide o que entra, o que sai e o que expira
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Memória compartilhada entre pessoas da mesma equipe cria vazamento lateral de contexto entre projetos e clientes
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Escopo, origem e expiração de cada item de memória viram controle visível na interface, como permissão de câmera
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Esquecer vira ação de produto com desenho próprio, e o direito ao esquecimento passa a se aplicar à memória do agente
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Um incidente público de vazamento por memória entre clientes força revisão setorial de isolamento
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Isolamento por usuário entra nos benchmarks de memória, que hoje não o medem
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: O agente com anos de memória passa a errar de um jeito novo, errando por lembrar algo que deixou de valer
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Consolidação, contradição e validade temporal viram o problema central da engenharia de memória, acima da recuperação
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Datação e revogação de memória viram requisito de auditoria, e sistema sem isso não passa em certificação
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Memória auditável vira argumento de venda, com a pergunta por que você me sugeriu isso respondida item a item
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: A explicação rastreável até o item de memória vira padrão de interface em serviço financeiro e de saúde
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A trilha de auditoria vira obrigação legal com vocabulário comum
    efeitos:
      - id: e7
        ordem: 1
        efeito: Registro automático de eventos vira requisito contratual em qualquer sistema que decide sobre pessoas
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: A auditoria de IA se profissionaliza, com credencial, honorário e responsabilidade pessoal do auditor
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Consolida-se uma camada de acreditação acima da auditoria, para responder quem certifica o certificador
                sinal: medio
                prazo: 2030
                confianca: media
              - id: e7.1.2
                ordem: 3
                efeito: Firmas de auditoria contábil incorporam times de avaliação de IA e vendem o serviço junto com o balanço
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: O rastro vira prova em disputa judicial, e a integridade dele passa a valer mais que a completude
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Registro assinado e à prova de adulteração deixa de ser nicho e vira padrão de mercado
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Um vocabulário comum de rastro torna agentes de fornecedores diferentes comparáveis lado a lado
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Trocar o modelo por baixo do produto fica tecnicamente trivial, e o diferencial migra para dado, memória e avaliação
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: O preço do modelo cai para patamar de commodity enquanto o preço de memória e avaliação sobe
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: Órgãos públicos passam a exigir o rastro no edital, e não apenas no contrato assinado depois
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: No Brasil a exigência chega primeiro por LGPD e resolução de conselho setorial, e só depois pelo marco legal de IA
                sinal: fraco
                prazo: 2030
                confianca: baixa
  - disrupcao: (emergente) O LLM como juiz da própria categoria de sistema
    efeitos:
      - id: e9
        ordem: 1
        efeito: A avaliação automática vira infraestrutura invisível embutida em todo produto com IA
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Os vieses do juiz automático viram problema de qualidade percebida pelo usuário final, e não só de metodologia
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Auditar o juiz vira tarefa tão cara quanto auditar o sistema julgado, e surge meta-avaliação como serviço
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: Painel de juízes heterogêneos com calibração contra amostra humana vira prática padrão
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: Forma-se um mercado de juízes especializados por domínio, vendidos como modelos pequenos com garantia de calibração
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: O julgamento humano fica caro e escasso e migra para a arbitragem de casos limítrofes
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: O trabalho de anotação se reorganiza em torno da discordância, e não do volume
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Discordar da máquina com justificativa registrada vira a tarefa humana mais bem paga da cadeia de avaliação
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não diz

**Primeiro: os três ramos não são independentes, e a roda finge que são.** O efeito e4 (memória
vale mais que modelo) e o e8.1 (trocar de modelo fica trivial) são a mesma moeda vista dos dois
lados — se o rastro padroniza e a memória não porta, o poder migra *inteiro* para quem guarda a
memória. O bloco YAML, por ser árvore, não consegue representar essa convergência; ela é o achado
mais importante do mapa.

**Segundo: há um efeito de sinal trocado que o formato esconde.** A padronização do rastro (D3)
empurra para commodity; a memória (D2) empurra para lock-in. As duas forças agem ao mesmo tempo, e
o resultado de 2031 depende de qual chega primeiro à compra corporativa — não de qual é
tecnicamente superior. Se a portabilidade de memória virar item de edital antes de o vocabulário
de rastro estabilizar, o desfecho é oposto ao que a leitura linha a linha da roda sugere.

**Terceiro: os prazos de 2027–2028 são os únicos com chão duro.** Eles derivam de datas em vigor
(Artigo 12, ISO 42006, ciclo de release do OpenTelemetry). De 2030 em diante, a data é ordenação
relativa disfarçada de ano: o que o mapa afirma é que e7.1.1 vem depois de e7.1, não que venha em
2030.

**Quarto: a roda não tem nenhum efeito de retração.** Nenhum ramo contempla "as empresas desistem
de memória persistente por custo de compliance e voltam ao modelo sem estado para clientes
regulados". Esse ramo é plausível e foi deixado de fora — ver Seção 7.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — o placar com dinheiro real.** O Alpha Arena, da Nof1, é o sinal mais duro do
mapa: seis modelos, US$ 10 mil de capital real cada, mesmo prompt, mesmos dados, mercado aberto
[11]. Importa menos quem ganhou (Qwen3 Max, +22,3%) do que a dispersão: do +22,3% ao −62,7% do
GPT-5, com o mesmo prompt [11]. Se um único parâmetro de setup produz 85 pontos percentuais de
diferença entre modelos que empatam em benchmark, a conclusão não é sobre trading — é sobre o
quanto o benchmark estático informa. O próprio material de análise adverte que duração curta,
alavancagem, regime de mercado e poucos modelos fazem disso "um resultado de benchmark, não um
histórico investível" [11]: o sinal está no formato, não no placar.

**Sinal fraco 2 — o log como prova de integridade, não como prova de conteúdo.** O Artigo 12 não
exige explicitamente log à prova de adulteração, mas o valor probatório desaparece se o registro
puder ser alterado sem deixar marca [8]. Papers de memória portátil já chegam com Merkle-DAG e
assinatura Ed25519 [13]. Quando essas duas coisas se encontrarem — provavelmente por exigência de
um regulador setorial, não por demanda de mercado —, a infraestrutura de confiança ganha
criptografia e sai do domínio do design.

**Sinal fraco 3 — a norma sobre quem audita chegou antes da norma sobre o que auditar.** A ISO/IEC
42006, que qualifica certificadores, está publicada e é obrigatória na Europa desde novembro de
2025 [16]; a ISO/IEC 24970, que diria como fazer o log, ainda está em final draft [8]. Essa
inversão produz um período em que auditores credenciados auditam contra um critério que ninguém
fixou — e é nesse vão que se formam os precedentes que depois viram norma.

**Sinal fraco 4 — os benchmarks de memória não medem isolamento.** Nenhum dos três principais mede
separação de dados por usuário [3]. Isso significa que a propriedade que mais importa em produção
— e a única que produz manchete quando falha — está fora do placar que orienta a compra.

**Wildcard A (baixa probabilidade, alto impacto) — exigência regulatória de trilha de auditoria
para *toda* decisão tomada por IA em serviço público, com rastro aberto à inspeção cidadã.** Se um
país de porte adotar isso, o custo de retenção e a exposição do rastro reorganizam o mercado
inteiro em dois anos: fornecedores que não conseguirem exportar rastro legível perdem o setor
público. **Por que a probabilidade é baixa:** o custo de armazenamento e a exposição de dado
pessoal dentro do rastro empurram na direção contrária, e a própria regulação existente prevê
retenção mínima de seis meses — não publicidade [8]. O precedente mais próximo (transparência
ativa de dados públicos) levou mais de uma década para virar prática efetiva.

**Wildcard B — um formato neutro de memória vence por baixo, via ferramenta de desenvolvedor.**
Não por acordo entre plataformas, mas porque quem programa com agentes já mantém memória em
arquivo versionado no próprio repositório, e essa prática sobe para o produto. **Por que a
probabilidade é baixa:** exige que os incumbentes percam o controle do formato justamente onde
está o lock-in que eles conquistaram; sete de sete produtos testados apontam para o lado oposto
[17].

**Wildcard C — colapso de confiança em avaliação automatizada.** Um caso público em que um sistema
aprovado por juiz automático causa dano relevante, com o rastro mostrando que o juiz preferia a
própria saída. **Por que a probabilidade é baixa:** exige coincidência de dano relevante,
visibilidade pública e rastro preservado — e a maioria dos incidentes com IA se resolve sem que o
rastro chegue a público. Mas o ingrediente técnico já está documentado: viés de posição acima de
0,10 em juízes de produção com reprodutibilidade acima de 0,95 [7].

## 7. Contra o próprio mapa

**1. Qual efeito é só extrapolação linear do presente.** O e3.1 ("interfaces passam a exibir plano,
ferramenta usada e etapa que falhou"). Isso não é uma mudança de natureza — é a continuação direta
de uma prática que já está nos artigos de agentic UX de 2026 e nos produtos que qualquer um usa
hoje: plano visível, log de atividade, diff. Chamá-lo de "efeito de primeira ordem com sinal
forte" é quase tautológico: ele já aconteceu, e o mapa está registrando o presente com data
futura. O que seria genuinamente novo — uma gramática visual *compartilhada* entre produtos, como
o spinner e o 404 (e3.1.1) — está marcado como terceira ordem e confiança média, o que já é
otimista: convenções de interface levam de sete a quinze anos para estabilizar, e o campo tem
três.

**2. Qual efeito assume velocidade de adoção sem caso comparável.** O e7.1 e seu filho e7.1.1 — a
auditoria de IA virando profissão com credencial, honorário e camada de acreditação até 2029–2030.
O caso comparável óbvio é a auditoria contábil, e a velocidade real dela é constrangedora para
este mapa: a auditoria externa moderna se consolidou ao longo de décadas, e nos EUA a estrutura de
supervisão do auditor (o PCAOB) só surgiu em 2002, *depois* de um escândalo de escala nacional —
ou seja, quase um século após a prática existir. Mesmo o caso mais rápido que conheço,
certificação de segurança da informação, levou de dez a quinze anos entre a norma e a exigência
rotineira em compra corporativa. O mapa comprime isso em quatro anos apoiado em dois dados fracos:
a existência da ISO/IEC 42006 [16] e uma contagem de vagas em aberto num único país [levantamento
citado na Seção 12, não usado como fonte no corpo]. Provavelmente errado por um fator de dois a
três em prazo.

**3. Qual disrupção pode simplesmente não se concretizar.** A 4.2 (memória entre sessões como
ativo). O contra-argumento é técnico e barato de enunciar: se o custo por token de contexto
continuar caindo e a janela continuar crescendo, "memória" vira um caso particular de "cabe tudo
no contexto", e a engenharia de memória — extração, consolidação, expiração — deixa de ser
necessária para a maioria dos casos. Há evidência a favor desse cenário no próprio campo: no
benchmark LoCoMo, um baseline trivial de contexto completo superou o sistema de memória
especializado (~73% contra ~68%) [4]. **O que sobra do mapa se essa disrupção cair:** sobra a
metade da auditoria — D1 e D3 seguem de pé, porque não dependem de memória. Caem e4, e5, e6 e
todos os seus descendentes (13 efeitos), e cai o achado central da Seção 5 sobre a convergência
entre lock-in de memória e commoditização de modelo. O mapa perderia cerca de 40% do volume e toda
a sua parte mais interessante.

**4. Que viés entrou aqui.** Três, nomeados e localizados:

*Viés de disponibilidade de fonte.* Boa parte do que sustenta a Seção 3 vem de quem vende memória
(Mem0, Zep) ou observabilidade (Langfuse) — inclusive a lista de limitações dos benchmarks, que é
autocrítica de fornecedor e portanto uma autocrítica *conveniente*: ela justifica o próximo
produto. Onde isso inflou o mapa: em e6.1, que trata consolidação e validade temporal como "o
problema central" — é o problema central *da agenda de produto de quem vende memória*.

*Viés de regulação-como-destino.* O mapa usa datas do EU AI Act como âncora de prazo em todo o
ramo D3, e a história recente de regulação digital é de adiamento e de aplicação seletiva. O
próprio material consultado registra que há discussão de adiar parte das obrigações de agosto de
2026 para dezembro de 2027 [8]. Onde inflou: no `prazo: 2027` de e7, o mais cedo do mapa inteiro.

*Viés do recorte da disciplina.* Este mapa foi escrito para quem projeta mídia e interação, e isso
empurrou o ramo e3 (rastro vira tela) para cima: ele tem três níveis completos e sinal forte,
enquanto o ramo e2 (avaliação com consequência), que é o sinal mais duro e mais original do
material de partida, ficou com menos ramificação. Um mapa escrito para quem compra software
teria a proporção invertida — e provavelmente estaria mais certo.

## 8. O que a máquina errou

**1. Datas contraditórias do Artigo 12, apresentadas por mim com confiança igual.** Numa primeira
passagem escrevi "as obrigações do Anexo III entram em vigor em 2 de agosto de 2026" como fato,
porque três fontes secundárias repetiam isso. A página do texto do próprio regulamento consultada
depois diz outra coisa: 2 de dezembro de 2027 para sistemas do Anexo III e 2 de agosto de 2028
para os do Anexo I [6]. Uma quarta fonte menciona a possibilidade de adiamento de agosto de 2026
para dezembro de 2027 [8]. Não resolvi a contradição — não consultei o texto consolidado com as
emendas — e por isso a Seção 3 e a 4.3 falam em "janela 2026–2027" em vez de cravar. **Como
percebi:** porque fui abrir a fonte primária depois de ter escrito o número. Se não tivesse
aberto, o documento teria uma data falsa com aparência de precisão. Isto é exatamente o erro que
o mapa descreve: a saída estava plausível, o caminho é que estava errado.

**2. Resultado do Alpha Arena reportado com dois placares diferentes.** Os resumos de busca
traziam "DeepSeek lidera com 46% de ganho" e, ao mesmo tempo, "Qwen3 Max venceu com +22,31%". São
snapshots de momentos diferentes da mesma temporada, apresentados como se fossem o resultado
final. Só o ranking completo, aberto na fonte [11], desfez a ambiguidade. **Desconfiança que
disparou a checagem:** dois números finais para uma competição que teve uma final só.

**3. Três fontes citadas antes de serem abertas.** `nof1.ai/blog/TechPost1` devolveu HTTP 429,
`openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/` devolveu 403 e dois links de
análise do Alpha Arena devolveram 404. Os fatos que dependiam delas — o anúncio da OpenAI e a
metodologia da Nof1 — estão no documento sustentados por fontes secundárias que os relatam
[11][15], e isso está dito na Seção 11. **Por que isso é erro e não incidente:** a primeira versão
desta seção listava a OpenAI como fonte 15. Trocar a atribuição de "a OpenAI disse" para "uma
análise relata que a OpenAI disse" muda o peso da afirmação, e a versão errada era a mais
persuasiva.

**4. Números redondos demais que não foram usados.** Uma busca devolveu uma tabela de salários de
auditor de IA com valores como "US$ 140K", "US$ 155K", "US$ 245K" e "1.400+ vagas em aberto nos
EUA em abril de 2026", sem metodologia, sem amostra e vindos de uma página que vende certificação.
Eles sustentariam muito bem o efeito e7.1 — e é justamente por isso que ficaram fora do corpo do
documento e foram parar na Seção 12, como material não usado. **O sinal:** quando o dado que eu
mais queria vem de quem lucra com ele, o dado é publicidade.

**5. O que provavelmente errei e não peguei.** A distribuição de `confianca` na terceira ordem
está quase toda em `baixa`, como a skill prescreve — mas duas entradas (e3.1.1 e e7.1.1) estão em
`media` sem que eu tenha evidência melhor para elas do que para as vizinhas. Suspeito que a
diferença seja estilística, não empírica. Registro em vez de corrigir, porque a correção
silenciosa apagaria o rastro — que é o tema deste documento.

## 9. Três cenários para 2031

**Provável.** Em 2031 o rastro é parte da interface e ninguém mais comenta isso, do mesmo jeito que
ninguém comenta que um aplicativo mostra o estado de carregamento. Todo produto sério exibe o
plano antes de executar, a ferramenta que foi usada, a etapa que falhou e o item de memória que
motivou a sugestão; a gramática visual ainda varia entre fabricantes, mas já dá para reconhecer
uma tela de agente de longe. A avaliação virou infraestrutura invisível: cada empresa mantém seu
próprio conjunto de provas derivado do tráfego real, roda avaliação contínua com painel de juízes
automáticos calibrados contra uma amostra humana pequena e cara, e publica na ficha técnica uma
medida de variância ao lado da de capacidade. Os leaderboards públicos ainda existem, mas viraram
marketing e todo mundo sabe disso. A memória continua sendo o ponto travado: as grandes plataformas
exportam um resumo em texto que nenhuma concorrente consegue reimportar com estrutura, a
portabilidade aparece em edital corporativo e é negociada caso a caso, e trocar de fornecedor de
agente custa, em média, mais que trocar de banco de dados custava em 2020. A auditoria de IA
existe como profissão, com credencial e preço, mas é pequena e concentrada em setor regulado — a
maioria dos sistemas segue sem auditoria externa nenhuma.

**Desejável.** Em 2031 existe um formato neutro de memória de agente — cinco tipos de item, cada um
com origem, data de validade, escopo e assinatura — e ele é exigido em compra pública antes de ser
exigido por lei, porque o setor público descobriu que sem isso não consegue trocar de fornecedor
sem perder cinco anos de contexto. O vocabulário de rastro estabilizou e saiu de `Development`, de
modo que um mesmo painel lê agente de três fabricantes diferentes e a comparação é honesta. A
avaliação independente mora em consórcios e universidades, financiada por quem compra e não por
quem vende, e publica não só o placar mas o rastro de cada execução, para que a metodologia possa
ser contestada por terceiros. Para o usuário final, a memória virou uma tela que ele abre, lê,
edita e apaga, e "esquecer" é um botão com desenho próprio, não um item escondido em
configurações. **O que teria que ser feito para chegar lá:** três coisas concretas e nenhuma
depende de avanço técnico — (i) quem compra tem que exigir portabilidade de memória em contrato,
começando pelo setor público; (ii) o SIG de convenções semânticas tem que congelar um núcleo
mínimo de atributos mesmo sem consenso completo, porque padrão instável é o principal argumento de
quem prefere formato proprietário; (iii) financiamento público de avaliação independente, na escala
em que se financia metrologia — porque avaliação com consequência real é cara por construção, e
sem dinheiro neutro ela fica só com quem já tem.

**Indesejável.** Em 2031 a memória venceu a padronização. Duas ou três plataformas concentram o
contexto acumulado de anos de trabalho de milhões de equipes, e o custo de sair não é técnico: é a
perda de tudo o que o sistema aprendeu sobre como aquela empresa trabalha. O rastro existe, é
completo e é ilegível de propósito — cada fabricante emite o seu formato, a exportação é possível
mas inútil, e a auditoria externa acaba reduzida a conferir se o log existe, não o que ele diz.
A avaliação automatizada roda em toda parte, e como o juiz é do mesmo fabricante do sistema
julgado, a nota que chega ao comprador mede sobretudo coerência interna. Um incidente relevante
acontece, o rastro é aberto, e o rastro está tecnicamente correto e substantivamente vazio.
**Qual é o sinal precoce disso, hoje:** já é observável — sete de sete produtos de memória sem
portabilidade real em julho de 2026 [17], convenções de rastro sem um único atributo estável no
mesmo mês [2], e juízes automáticos com reprodutibilidade acima de 0,95 e viés de posição acima de
0,10 sendo usados em produção [7]. Os três sinais do cenário ruim são fatos do presente, não
previsões. É por isso que ele é o cenário a vigiar.

## 10. O experimento

**Banco de provas de confiabilidade e memória com rastro visível.**

**O que é.** Um agente pequeno, construído em uma tarde, com três instrumentos ligados: (1)
instrumentação OpenTelemetry com as convenções GenAI, de modo que cada execução produza a árvore
`invoke_agent → chat → execute_tool`; (2) memória em arquivo, no padrão da memory tool (criar,
ler, atualizar, apagar num diretório controlado por quem construiu), com data e origem em cada
item; (3) um executor que roda a *mesma* tarefa dez vezes e guarda os dez rastros. Em cima disso,
duas telas: uma que mostra os dez rastros lado a lado, sem mostrar a resposta final; outra que
mostra a memória como lista editável, com origem, data e botão de apagar. A tarefa pode ser
qualquer coisa com ferramenta e passo intermediário — por exemplo, montar a agenda de uma semana a
partir de e-mails, ou preencher uma ficha a partir de três fontes que se contradizem.

**Que pergunta sobre o futuro ele ajuda a responder.** Duas, ambas do mapa. Primeira: *uma pessoa
que não construiu o sistema consegue julgar, olhando só o rastro, se a execução está certa?* É a
pergunta do efeito e3.1.2 — "ler rastro vira competência de usuário comum" — e é a pergunta que
decide se o rastro serve de interface ou é enfeite de conformidade. Segunda: *qual é o `pass^10`
dessa tarefa, e quanto ele difere do `pass@1`?* É a pergunta da disrupção 4.1, medida em pequeno.
Como bônus, o experimento testa o efeito e6: introduzir de propósito, na memória, um item que
deixou de valer, e ver quantas das dez execuções erram *por lembrar*.

**Que tecnologia emergente ele usa, e por que não dá para fazer com tecnologia madura.** Usa três
coisas que não existiam em forma utilizável há dois anos: as convenções semânticas GenAI para
agentes (que ainda estão em `Development` — o experimento vai bater em atributo renomeado, e isso
é parte do achado [2]); memória persistente como ferramenta do agente, com o armazenamento do lado
de quem constrói [9]; e a métrica `pass^k`, que só faz sentido em sistema não determinístico [5].
Com tecnologia madura não dá: log de aplicação registra o que o programa fez, não o que o agente
decidiu; teste unitário responde passou/não passou e não caracteriza distribuição; e um banco de
dados de preferências não tem origem, validade nem o comportamento de ser lido por um modelo que
pode entender errado o que está escrito ali.

**O que a turma faz quando testar isso em sala.** Em duas rodadas de vinte minutos. *Rodada 1 —
julgar pelo caminho:* cada pessoa recebe três dos dez rastros, sem a resposta final, e aponta
quais execuções confiaria. Depois se revelam as respostas e se compara: quantas vezes o julgamento
pelo caminho bateu com a correção do resultado? Quantas vezes alguém aprovou um caminho errado que
deu resultado certo? *Rodada 2 — a memória envenenada:* metade da turma recebe a tela de memória
com um item obsoleto plantado e é instruída a "deixar o agente pronto para a tarefa"; a outra
metade recebe a mesma tela sem saber que há item plantado. Mede-se quantos encontram o item, em
quanto tempo, e o que a interface teria que mostrar para que fosse óbvio — data? origem? última
vez usado? Sai dali uma lista de requisitos de interface para memória, feita por quem projeta
interface.

**O que seria um resultado que me faria mudar de ideia.** Dois resultados, cada um derrubando uma
parte do mapa. (a) Se a maioria da turma julgar as execuções *pior* olhando o rastro do que
olhando só a resposta final — isto é, se o rastro atrapalhar —, então o efeito e3 está errado no
que ele tem de mais forte: o rastro não vira interface, vira ruído, e continua sendo artefato de
engenheiro. Eu passaria e3.1.2 de "efeito de terceira ordem" para "não acontece", e rebaixaria o
ramo inteiro. (b) Se o `pass^10` da tarefa ficar acima de 90%, a premissa de que a variância é o
problema central perde força para esse tipo de tarefa, e a disrupção 4.1 vira melhoria incremental
de teste de software — exatamente o veredito que a Etapa 3 da skill manda dar quando a resposta é
"nada novo, só melhor".

## 11. Fontes

Só entram fontes que foram efetivamente abertas nesta sessão, em 17/09/2026. As que não
responderam estão listadas na Seção 12.

1. **OpenTelemetry — "Inside the LLM Call: GenAI Observability with OpenTelemetry"** ·
   `https://opentelemetry.io/blog/2026/genai-observability/` · Sustenta a estrutura de spans
   (`invoke_agent` → `chat` → `execute_tool`) e o problema que a instrumentação resolve.
   Confiabilidade: alta para o desenho técnico — é o blog oficial do projeto —, mas é parte
   interessada na adoção do próprio padrão.
2. **John Hodge — "The state of the OpenTelemetry GenAI semantic conventions (July 2026)"** ·
   `https://john-hodge.com/blog/opentelemetry-genai-semantic-conventions/` · Sustenta a afirmação
   central de que nenhum atributo GenAI estava estável em 17/07/2026, e o histórico de mudanças
   v1.27.0 → v1.42.0. Confiabilidade: média-alta; é blog pessoal, mas cada afirmação é verificável
   no registro público de convenções e a data de medição está declarada.
3. **Mem0 — "LoCoMo vs. LongMemEval vs. BEAM: The 2026 AI Memory Benchmark Guide"** ·
   `https://mem0.ai/blog/ai-memory-benchmarks-in-2026` · Sustenta a descrição dos três benchmarks,
   os números autorreportados e — o que mais importa aqui — a lista de limitações (write step,
   esquecimento, isolamento por usuário, eficiência de token). Confiabilidade: baixa para os
   placares (fornecedor reportando a si mesmo), alta para as limitações (é admissão contra o
   próprio interesse imediato).
4. **Zep — "Lies, Damn Lies, & Statistics: Is Mem0 Really SOTA in Agent Memory?"** ·
   `https://blog.getzep.com/lies-damn-lies-statistics-is-mem0-really-sota-in-agent-memory/` ·
   Sustenta a crítica metodológica ao LoCoMo e o dado do baseline de contexto completo (~73%)
   superando o sistema de memória (~68%). Confiabilidade: média; é concorrente atacando
   concorrente, mas os defeitos apontados no dataset são objetivos e reproduzíveis.
5. **Yao et al. — "τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains"** ·
   `https://arxiv.org/abs/2406.12045` · Sustenta a métrica `pass^k`, o `pass^8` abaixo de 25% em
   varejo e o GPT-4o abaixo de 50% de sucesso. Confiabilidade: alta; paper com método e dados
   públicos, amplamente replicado.
6. **EU Artificial Intelligence Act — Artigo 12, Record-Keeping** ·
   `https://artificialintelligenceact.eu/article/12/` · Sustenta o conteúdo da obrigação de log,
   os três propósitos e os campos mínimos do Anexo III 1(a); é também a fonte que contradiz as
   datas das fontes secundárias. Confiabilidade: alta para o texto do artigo; é compilação privada
   do regulamento, não o Jornal Oficial — por isso as datas de vigência aqui foram tratadas como
   incertas.
7. **"Reliability without Validity: A Systematic, Large-Scale Evaluation of LLM-as-a-Judge
   Models"** · `https://arxiv.org/html/2606.19544v1` · Sustenta tudo o que o documento afirma sobre
   juiz automático: 21 juízes, ~541 mil julgamentos, deflação de κ de 33,8–41,2 p.p., paradoxo
   consistência-viés, ranking mudando até 14 posições. Confiabilidade: alta; é o maior estudo do
   tipo e declara protocolo, período (mar–abr/2026) e escala.
8. **Help Net Security — "What the EU AI Act requires for AI agent logging" (16/04/2026)** ·
   `https://www.helpnetsecurity.com/2026/04/16/eu-ai-act-logging-requirements/` · Sustenta a
   leitura prática do Artigo 12 para agentes, a retenção mínima de seis meses, as multas e a
   lacuna de tamper-proofing. Confiabilidade: média; imprensa técnica especializada, mas as datas
   de vigência que ela traz conflitam com a fonte 6.
9. **Anthropic/Claude — "Managing context on the Claude Developer Platform" (29/09/2025)** ·
   `https://claude.com/blog/context-management` · Sustenta a existência da memory tool e do context
   editing, o armazenamento do lado do cliente e os números 39% / 29% / 84%. Confiabilidade: alta
   para a existência e o desenho, baixa para os ganhos — são avaliações internas do fabricante,
   sem método publicado.
10. **Langfuse — página do produto** · `https://langfuse.com/` · Sustenta os números de adoção
    (22 mil+ estrelas, 50 mil+ empresas, 21 das Fortune 50, 90 bilhões+ de observações/mês) e o
    conjunto de recursos que virou padrão de mercado. Confiabilidade: baixa-média para os números
    (autodeclarados, sem auditoria), alta para o escopo do produto.
11. **iWeaver — "Alpha Arena Season 1 Results: Final Ranking and Lessons"** ·
    `https://www.iweaver.ai/blog/alpha-arena-ai-trading-season-1-results/` · Sustenta o desenho do
    Alpha Arena (US$ 10 mil reais por modelo, Hyperliquid, mesmo prompt) e o ranking final com os
    seis retornos. Confiabilidade: média; é fonte secundária — a primária (`nof1.ai`) recusou a
    conexão —, mas apresenta a ressalva metodológica em vez de vender o resultado.
12. **iaLocus — "PL 2338/2023: Marco Legal da IA no Brasil em 2026"** ·
    `https://ialocus.com.br/blog/post-pl-2338-marco-legal-ia-brasil-2026.html` · Sustenta o status
    do PL na Câmara em meados de 2026, a classificação por risco, as obrigações (avaliação de
    impacto, supervisão humana, log de acesso), a sanção de até R$ 50 milhões e o papel da LGPD e
    da Resolução CNJ 615/2025 enquanto a lei não passa. Confiabilidade: média; blog jurídico
    brasileiro, com datas verificáveis na tramitação do Senado.
13. **"Portable Agent Memory: A Protocol for Provenance-Verified Memory Transfer Across
    Heterogeneous LLM Agents" (arXiv:2605.11032, 10/05/2026)** ·
    `https://arxiv.org/html/2605.11032` · Sustenta a existência de proposta técnica para memória
    portátil com Merkle-DAG, BLAKE3 e Ed25519, e os números de Transfer Continuity Score.
    Confiabilidade: média; preprint sem revisão por pares, avaliação feita pelos próprios autores.
14. **"Always-On Agents: A Survey of Persistent Memory, State, and Governance in LLM Agents"
    (arXiv:2606.30306)** · `https://arxiv.org/pdf/2606.30306` · Sustenta a afirmação de que
    governança, log de decisão e auditoria de consistência de memória já são tratados como
    fundação na literatura. Confiabilidade: média-alta para o panorama; é survey, portanto não
    traz evidência nova.
15. **buildmvpfast — "SWE-bench Contamination & AI Coding Leaderboards"** ·
    `https://www.buildmvpfast.com/blog/benchmark-contamination-ai-coding-leaderboard-swe-bench-2026`
    · Sustenta o anúncio da OpenAI de 23/02/2026, os 59% de tarefas com falha material na auditoria
    de 138 tarefas, o estudo "The SWE-Bench Illusion" (60–76% vs. <53%) e o K Prize em 7,5%.
    Confiabilidade: média; é blog relatando fontes primárias que não abriram aqui (openai.com
    devolveu 403) — os números devem ser tratados como citação de segunda mão.
16. **Bright Defense — "ISO 42006 Raises the Bar for ISO 42001 Certifiers"** ·
    `https://www.brightdefense.com/news/iso-42006-raises-the-bar-for-iso-42001-certifiers/` ·
    Sustenta as datas (ISO 42001 em 18/12/2023, ISO 42006 em 07/07/2025, obrigatoriedade da
    European Accreditation em 20/11/2025, primeira acreditação UKAS em 15/01/2026) e a exigência
    de competência dos certificadores. Confiabilidade: média; empresa de compliance vendendo
    serviço, mas as datas são checáveis nos catálogos ISO.
17. **Stan Tyan — "I Tested 7 AI Memory Products for Portability — All 7 Lock You In"** ·
    `https://dev.to/stantyan/i-tested-7-ai-memory-products-for-portability-all-7-lock-you-in-31pm`
    · Sustenta o achado de portabilidade zero em julho de 2026, a lista dos sete produtos, o
    critério de simetria de importação e as seis propriedades perdidas no export. Confiabilidade:
    média; teste individual, método descrito mas não replicado por terceiros — é o dado mais
    importante do mapa e o que mais precisaria de confirmação independente.
18. **"On the Regulatory Potential of User Interfaces for AI Agent Governance"
    (arXiv:2512.00742)** · `https://arxiv.org/pdf/2512.00742` · Sustenta a tese de que interface é
    vetor de governança (visibilidade, supervisão humana, restrição de escopo) e, principalmente,
    os limites declarados dessa tese. Confiabilidade: média-alta; é argumento, não medição, e se
    apresenta como tal.
19. **UX Magazine — "Agentic UX: When the Interface Stops Waiting for You"** ·
    `https://uxmag.com/articles/agentic-ux-when-the-interface-stops-waiting-for-you` · Sustenta os
    padrões de interface citados na Seção 2 (memory surfacing, planning visibility, tool-use
    disclosure, workflow tracking, autonomy slider) e o exemplo do assento de corredor.
    Confiabilidade: baixa-média como evidência (é artigo de opinião profissional, sem dado), alta
    como registro do que a comunidade de design já considera padrão em 2026. *Nota de checagem:*
    esta página foi lida com sucesso durante a pesquisa, mas devolve HTTP 403 a requisição
    automatizada por `curl` — bloqueio de bot, não link morto. É a única das 19 nessa situação.

## 12. Anexo — o levantamento bruto

### 12.1 Etapa 1 — entrevista, respostas recebidas

Esta rodada foi executada sem interlocutor humano disponível para responder em tempo real; as
respostas aos itens obrigatórios vieram pré-registradas com a tarefa, e estão reproduzidas aqui
literalmente, porque a skill exige que nenhum item obrigatório seja assumido em silêncio.

- **Horizonte (obrigatório):** 2031.
- **Público (opcional, perguntado):** quem projeta mídia e interação.
- **Recorte geográfico (obrigatório):** global, com uma nota sobre o Brasil.
- **O que já está descartado (obrigatório):** o que já é comum em produto de massa (a régua da
  disciplina); nenhuma outra exclusão — confirmado explicitamente, não assumido.
- **Viés desejado (obrigatório):** neutro/analítico.
- **Zona de interesse:** Agentes.
- **Parâmetros extras informados:** profundidade em três ordens; modo "a partir de uma
  inovação/tema", não de um setor; disrupção suspeita: nenhuma, descobrir; ideias óbvias a
  excluir: as que serviriam a qualquer tema; o que faria mudar de ideia: evidência de que a adoção
  já passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada.
- **`publico_ok`:** mantido em `false` — não houve autorização explícita para nome em galeria
  pública.

**Consequência do item "descartado" sobre o mapa:** a régua "o que já é comum em produto de massa
sai" foi o que empurrou log de aplicação, teste unitário, dashboard de custo por token e busca
vetorial para fora da Seção 4 e para dentro da Seção 3.

### 12.2 Etapa 2 — buscas realizadas, na ordem

Buscas (WebSearch), todas em 17/09/2026:

1. `OpenTelemetry GenAI semantic conventions agent spans 2026 status`
2. `Nof1 Alpha Arena LLM trading $10,000 results`
3. `agent memory Mem0 Letta Zep benchmark LOCOMO 2026`
4. `tau-bench tau2-bench agent evaluation benchmark reliability pass^k`
5. `EU AI Act Article 12 logging record-keeping high-risk August 2026 obligations traceability`
6. `Anthropic memory tool context editing API agent long-running 2026`
7. `LLM-as-a-judge reliability bias study 2026 agreement human evaluators`
8. `PL 2338 marco legal inteligência artificial Brasil status 2026 rastreabilidade registro`
9. `Langfuse OpenTelemetry LLM observability adoption open source 2026 traces production`
10. `SWE-bench contamination criticism benchmark flawed agent evaluation 2026 study`
11. `agent memory portability vendor lock-in privacy ChatGPT memory shared team memory 2026 concerns`
12. `ISO/IEC 42001 AI audit certification market growth auditors profession 2026`
13. `interface design showing agent reasoning trace to end users transparency UX 2026 research`

**URLs abertas com sucesso (19):** as 19 da Seção 11.

**URLs que não responderam (4) — e o que se perdeu com cada uma:**

- `https://nof1.ai/blog/TechPost1` — HTTP 429. Perdeu-se a descrição da metodologia do Alpha Arena
  na voz de quem a construiu, inclusive o argumento deles sobre por que benchmark estático estaria
  quebrado. Substituída por [11], que é secundária.
- `https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/` — HTTP 403. Perdeu-se o
  anúncio primário sobre SWE-bench Verified. Substituída por [15]; todos os números de contaminação
  no documento são, por isso, citação de segunda mão.
- `https://www.euclideanai.com/blog/llm-crypto-trading` — HTTP 404.
- `https://www.datawallet.com/crypto/alpha-arena-nof1-ai-explained` — HTTP 404.

**Buscas que não deram em nada de aproveitável:** a busca 12 (ISO 42001/42006) devolveu
majoritariamente páginas de venda de certificação, com tabelas salariais sem metodologia; só uma
delas ([16]) trazia datas verificáveis. A busca 13 devolveu, entre os primeiros resultados, uma
patente de 2008 sobre "agent-based distributed reasoning" em rede de computadores — falso positivo
por homonímia do termo "agente".

### 12.3 Etapa 3 — o teste de disrupção aplicado, incluindo os reprovados

Formato: candidata → (1) o que torna possível · (2) o que invalida · (3) por que agora → veredito.

**Aprovadas (na Seção 4):**

- *Avaliação por distribuição de execuções* → (1) medir confiabilidade e não capacidade · (2)
  invalida caso de teste determinístico como aceite, ficha técnica de número único e leaderboard
  estático · (3) agentes multi-turno + contaminação demonstrada + vocabulário de rastro → **passa
  nas três: disrupção-raiz.**
- *Memória entre sessões* → (1) sistema que melhora por uso individual sem re-treino · (2)
  invalida o modelo sem estado e a premissa de troca barata de fornecedor · (3) contexto virou
  recurso caro; capacidade virou prateleira em 2025–2026 → **passa nas três: disrupção-raiz.**
- *Trilha de auditoria obrigatória com vocabulário comum* → (1) comparar agentes de fabricantes
  diferentes com o mesmo vocabulário; usar rastro como prova · (2) invalida autoatestação, log
  proprietário como diferencial e consultoria sem credencial · (3) Art. 12, ISO 42006, v1.42.0 →
  **passa nas três: disrupção-raiz.**

**Aprovada com ressalva (emergente):**

- *LLM como juiz* → (1) sim, avaliação em escala de qualidades antes só humanas · (2) **não** —
  não invalidou nenhum papel; deslocou o humano para a arbitragem · (3) sim, custo por token →
  **passa em 1 e 3, falha em 2: emergente.** Entra na Seção 4.4 e na roda com confiança rebaixada.

**Reprovadas — ficaram na Seção 3 como estado atual:**

- *Tracing distribuído* → (1) "nada novo, só aplicado a outro objeto" → **falha na 1: madura.**
- *Log e métrica de aplicação* → (1) nada novo → **madura.**
- *Dashboard de custo e latência por token* → (1) é contabilidade de consumo, existente desde
  sempre em cloud → **madura.**
- *Teste unitário e CI* → (1) nada novo; continua valendo para a parte determinística do sistema →
  **madura.**
- *Busca vetorial / RAG* → (1) recuperação de documento por similaridade; melhora recall, não
  muda a natureza da pergunta → **madura.** (Observação: foi tentador classificar RAG como parte
  de "memória"; não é. RAG recupera de um corpus fixo; memória escreve, consolida e expira. A
  distinção está no passo de escrita, que é justamente o que nenhum benchmark mede [3].)
- *Redução de contexto / "context engineering" como categoria* → (1) economiza token; não permite
  nada novo por si → **madura como técnica**; só vira parte da disrupção quando acoplada a
  escrita persistente.
- *Replay determinístico de execução* → candidata interessante que caiu por falta de evidência:
  não encontrei, nas buscas feitas, fonte que sustentasse adoção real de replay bit-a-bit de
  execução de agente. Ficou fora por falta de chão, não por reprovação no teste.

### 12.4 Etapa 4 — efeitos cortados

Efeitos que foram gerados e removidos, com o motivo, conforme a regra de parada da skill (remover
quando não há caminho nomeável de volta à disrupção, ou quando exige encadear duas suposições
independentes não testadas):

- *"A escola passa a ensinar leitura de rastro no ensino médio"* — cortado: exige encadear adoção
  universal de agentes + reforma curricular + decisão política. Especulação de especulação.
- *"Surge um sindicato de avaliadores de IA"* — cortado pelo mesmo motivo, e porque duplicaria
  e7.1 sem acrescentar mecanismo.
- *"O rastro vira dado de treinamento e fecha um ciclo de autoaperfeiçoamento"* — cortado: é
  plausível e já acontece em parte, mas pertence ao tema 1 (o ofício de programar com agentes),
  não a este. Fronteira respeitada.
- *"Agentes passam a negociar entre si o acesso à memória uns dos outros"* — cortado: pertence ao
  tema 2 (contenção, segurança e identidade de agentes).
- *"A memória do agente vira herança digital transmissível"* — cortado: efeito de quarta ordem
  disfarçado; depende de e4.1.1 + mudança de direito sucessório.
- *"Publicidade passa a mirar a memória do agente em vez do usuário"* — cortado com relutância;
  é um bom efeito de terceira ordem e tem mecanismo claro (se o agente decide a compra, o alvo da
  persuasão muda), mas não consegui nomear evidência presente que o sustentasse, e ele pertence
  mais ao tema de mídia e publicidade do que a este. Fica registrado aqui para quem quiser.
- *"Empresas passam a contratar por 'quanto contexto você traz'"* — cortado: mesma família de
  e4.1.2, e mais especulativo.

### 12.5 Material levantado e não usado no corpo

- **Tabela salarial de auditoria de IA** (busca 12): "AI Governance Lead Auditor US$ 140K; AI Risk
  Officer US$ 155K; AI Compliance Manager US$ 118K; AI GRC Consultant US$ 1,5K/dia; Internal AI
  Auditor US$ 112K; Chief AI Ethics Officer US$ 245K; 1.400+ vagas abertas nos EUA em abril de
  2026." Não usado no corpo: fonte é página que vende certificação, sem metodologia nem amostra.
  Ver Seção 8, item 4.
- **Números de memória autorreportados**: Mem0 com 51.000+ estrelas no GitHub e US$ 24M
  levantados; Letta com 13.000+ estrelas; Zep reivindicando até 18,5% de ganho em LongMemEval;
  Mem0 reivindicando 93,4% em LongMemEval e 91,6% em LoCoMo com menos de 7.000 tokens por
  recuperação (algoritmo de abril de 2026); ZeroMemory reivindicando 96,1% em LoCoMo. Não usados
  como afirmação por serem incomparáveis entre si, pelo motivo que a própria fonte [3] explica.
- **BEAM-1M com 64,1%** (autorreportado) — não usado; interessante como indício de que o problema
  fica muito mais difícil na escala de milhões de tokens.
- **Alpha Arena, placar intermediário**: "DeepSeek lidera com 46% de ganho" — descartado por ser
  snapshot, não resultado final. Ver Seção 8, item 2.
- **Anthropic unificando memória entre Claude chat e Cowork em 25/08/2026** — apareceu em resumo
  de busca, não foi confirmado em fonte aberta, e por isso não entrou no corpo. Se confirmado,
  é evidência para e4 (memória como ativo concentrado) e para o cenário indesejável.
- **Membership-inference sobre memória persistente de agentes** e **MemPrivacy**
  (arXiv:2605.09530) — apareceram na busca 11 e não foram abertos por limite de escopo; sustentam
  o ramo e5 (vazamento lateral) e ficam como pendência de leitura para quem continuar este mapa.
- **memorywire: A Vendor-Neutral Wire Format for Agent Memory Operations** (arXiv:2606.01138) —
  não aberto; é evidência adicional direta para o wildcard B (formato neutro de memória).
- **Convenções de MCP incorporadas ao repositório GenAI na v1.42.0** — mencionado no corpo a
  partir do resumo da busca 1; a fonte [2], que foi aberta, não trata especificamente de MCP.
  Afirmação de confiança menor que as vizinhas.
- **Artigo 50 do AI Act (transparência: informar que se está interagindo com IA), aplicável em
  02/08/2026** — apareceu na busca 13 e não foi usado por pertencer mais ao tema de contenção e
  identidade do que a este.

### 12.6 Checagem final executada

Rodada antes da entrega, conforme a condição de parada da skill: contagem de seções (`grep -c
"^## "`), validade do YAML do frontmatter e do bloco `roda:`, profundidade de exatamente três
níveis, presença de `sinal`/`prazo`/`confianca` em todos os nós, e contagem de efeitos por ordem
conferida contra o frontmatter. Além disso, todos os links da Seção 11 foram testados com `curl`:
os 19 respondem, sendo 18 com HTTP 200 e um (fonte 19) com 403 por bloqueio de automação, tendo
sido lido normalmente durante a pesquisa. As quatro URLs que não abriram estão na Seção 12.2 e
não são citadas como fonte. Correção feita nesta checagem: o frontmatter dizia
`efeitos_ordem_3: 24` e a contagem real do bloco `roda:` era 26 — o campo foi corrigido, e o erro
fica registrado aqui em vez de ser apagado. Resultado completo registrado no `log.txt` desta
pasta.

### 12.7 Nota sobre o Brasil

O recorte pedido foi global com nota sobre o Brasil. A nota é curta porque o material é curto: o
PL 2338/2023 passou no Senado em 10/12/2024 e estava parado na Câmara em meados de 2026, sem
relator com parecer apresentado [12]. Enquanto ele não anda, quem obriga são a LGPD — inclusive na
parte de dado pessoal dentro do rastro e dentro da memória — e resoluções setoriais, com a CNJ
615/2025 como o caso mais concreto de exigência de rastreabilidade e auditoria em sistema
automatizado [12]. Daí o efeito e8.2.1: no Brasil, a exigência de rastro deve chegar por conselho
setorial e por proteção de dados antes de chegar por marco legal de IA. Para quem projeta produto
aqui, a consequência prática é que o requisito de "mostrar o caminho" vai aparecer primeiro num
edital ou numa resolução de conselho profissional, e não numa lei geral.
