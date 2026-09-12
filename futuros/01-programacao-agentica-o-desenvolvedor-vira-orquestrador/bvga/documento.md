---
tema: "Programação agêntica: o desenvolvedor vira orquestrador"
slug: programacao-agentica-o-desenvolvedor-vira-orquestrador
autor_login: bvga
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 11
efeitos_ordem_3: 11
tecnologias_citadas: [Claude Code, Codex CLI, Cursor, GitHub Copilot, Gemini CLI, OpenCode, OpenHands, Kiro, Agent Skills, Model Context Protocol, GitHub Spec Kit, Terminal-Bench, git worktrees]
fontes: 19
confianca: media
experimento: Bancada de Verificação
skill_usada: futurizacao-bvga
publico_ok: false
---

## 1. Resumo

O tema foi entregue como "escrever código deixou de ser o gargalo". A pesquisa não sustenta essa
formulação como fato estabelecido, mas sustenta uma versão mais estreita e mais interessante: o
gargalo **mudou de lugar dentro do ciclo**, e a infraestrutura que nasceu para governar essa
mudança — harness, skill, protocolo, especificação executável — é mais emergente e mais
disruptiva do que o ato de gerar código.

Três disrupções-raiz sobreviveram ao filtro de maturidade e potencial de ruptura:

1. **O harness como objeto de engenharia** — a camada de instrução empacotada (`SKILL.md`, MCP,
   runtime do agente) que carrega a competência separada do modelo. Um survey de junho de 2026
   formula o ponto: desempenho de agente é propriedade do par **modelo–harness**, não do modelo
   (fonte 18). Um trabalho de abril de 2026 mostra um harness que se otimiza sozinho e supera o
   harness desenhado por humanos no Terminal-Bench 2 (fonte 17).
2. **Execução autônoma com permissão de escrita no ambiente real** — o agente que roda comando,
   altera arquivo, toca infraestrutura. É o que o Terminal-Bench mede, e é o que produziu, em
   abril de 2026, um apagamento de banco de produção em nove segundos (fontes 1, 11).
3. **A especificação executável como artefato primário** — a intenção escrita passa a ser
   versionada, revisada e *convergida* contra o código. O Spec Kit, do GitHub, já tem uma fase de
   pipeline chamada `converge` (fonte 10).

O que a evidência **não** autoriza: dizer que isso já produz ganho líquido de produtividade. O
único ensaio randomizado publicado sobre o assunto mediu desenvolvedores experientes **19% mais
lentos** com IA, enquanto eles se achavam 20% mais rápidos (fonte 2) — e a própria METR, em
fevereiro de 2026, suspendeu o desenho do experimento por vieses de seleção que provavelmente
subestimavam o ganho, sem substituí-lo por um número confiável (fonte 3). Cinco anos depois do
tema virar consenso de mercado, **ninguém tem a medida**.

O eixo da roda, portanto, não é abundância de código. É **deslocamento da responsabilidade**: de
quem escreve para quem aprova. Confiança global do mapa: **média**.

## 2. O tema

A disciplina descreveu o tema como o ofício de programar mudando de natureza: o humano
especifica, verifica e responde; a técnica nova é construir *com* o agente.

Os parâmetros desta futurização, fixados antes da pesquisa:

| Campo | Valor |
|---|---|
| Tema | Programação agêntica: o desenvolvedor vira orquestrador (tema 1 de 19; família "Agentes") |
| Horizonte | 2031 |
| Público | quem projeta mídia e interação |
| Recorte geográfico | global, com uma nota sobre o Brasil |
| Descartes | o que já é comum em produto de massa (régua da disciplina); ideias que serviriam a qualquer tema |
| Viés desejado | neutro |
| Profundidade | três ordens |
| Modo | a partir de uma inovação/tema, não de um setor |

Duas condições declaradas de refutação, dadas na abertura: o mapa cai se a adoção já tiver passado
da maioria inicial (Rogers), ou se a tecnologia só melhorar o que existe sem romper nada. A §7
verifica as duas.

Uma escolha de escopo que precisa ficar explícita: o objeto aqui é **o ofício**, não a contenção
do agente (tema 2 da disciplina) nem memória e observabilidade (tema 3). Onde a roda esbarra em
segurança ou auditoria, ela para na fronteira e diz que parou.

Nota sobre o público. Quem projeta mídia e interação tende a ler este tema como "assunto de quem
programa". A §5 argumenta o contrário em dois pontos (`e1.2`, `e6.1`): quando a instrução
empacotada vira o artefato que carrega competência, **escrever para um leitor-máquina vira
trabalho de design de interação** — e a superfície a projetar deixa de ser a tela e passa a ser a
fila de aprovação.

## 3. Onde isso está hoje

### O que já é maduro (e por isso não pode ser raiz)

- **Autocompletar de IDE e chat que explica código.** A régua da disciplina os exclui, e a
  evidência confirma: 84% dos respondentes da pesquisa Stack Overflow 2025 usam ou planejam usar
  ferramentas de IA no desenvolvimento; 51% dos profissionais as usam diariamente (fonte 6). O
  DORA 2025 mede 90% de uso de IA no trabalho entre profissionais de tecnologia (fonte 7).
- **Assistência de código em produto de massa.** Está em todo editor comercial relevante.

Isto é infraestrutura e antecedente. Não é futuro.

### O que é emergente

- **Agente que age.** O Terminal-Bench v2.1 mede exatamente esta capacidade: 89 tarefas em
  ambiente de terminal real, com sucesso definido por "o agente transformou o ambiente num estado
  que passa nos testes". O topo da tabela está em 91,4% de pass@1, medido com o harness Terminus 2
  em sandbox e média de três repetições por tarefa (fonte 1). Um benchmark que exige ação no
  ambiente, e não resposta, é o sinal técnico mais limpo de que a capacidade existe.
- **A camada de instrução empacotada.** O formato Agent Skills — uma pasta com `SKILL.md`,
  metadados mínimos e carga por *progressive disclosure* — foi aberto como padrão e aparece hoje
  implementado por dezenas de clientes de fornecedores concorrentes: Claude Code, Codex/ChatGPT,
  Cursor, Copilot, VS Code, Gemini CLI, Junie, OpenCode, OpenHands, Goose, Kiro, Amp, Roo Code,
  entre outros (fonte 5). O MCP, na especificação de 28/07/2026, passou a ter núcleo **stateless**,
  roteamento por cabeçalho HTTP e endurecimento de autorização (CIMD no lugar de DCR) — mudanças
  cujo público é o gateway corporativo que mede e controla chamadas, não o desenvolvedor
  individual (fonte 4).
- **Especificação como artefato de pipeline.** O Spec Kit organiza o trabalho em seis fases —
  constituição, especificação, plano, tarefas, implementação e **convergência** — e declara suporte
  a mais de 30 agentes (fonte 10).
- **O harness como coisa que se projeta e se mede.** Um survey de 14/06/2026 define harness como a
  infraestrutura de runtime em seis componentes acoplados (observação, contexto, laço de controle,
  ação, estado/artefatos, verificação/governança) e argumenta que a qualidade do agente **emerge da
  interação** entre modelo, runtime, estrutura da tarefa e desenho de avaliação (fonte 18).

### O que é experimental

- **Harness que se otimiza sozinho.** Dez iterações de "Agentic Harness Engineering" elevam o
  pass@1 no Terminal-Bench 2 de 69,7% para 77,0%, ultrapassando o Codex-CLI desenhado por humanos
  (71,9%) (fonte 17). Um resultado, um benchmark, uma equipe — é experimental, não estado da arte.
- **Orquestração de vários agentes em paralelo.** Existe ferramenta (worktrees do git, execução em
  nuvem, subagentes) e existe relato, mas a peça mais citada sobre o assunto é conceitual, não
  medida em campo (fonte 15). Fica como sinal, não como capacidade estabelecida.

### O contrassinal que não pode ser escondido

O único ensaio controlado randomizado publicado mediu 16 desenvolvedores experientes em 246
tarefas reais nos seus próprios repositórios: **19% mais lentos** quando autorizados a usar IA,
prevendo 24% de ganho antes e estimando 20% de ganho depois (fonte 2). Em 24/02/2026 a METR
publicou que o segundo experimento tinha vieses graves — desenvolvedores recusando participar para
não trabalhar sem IA, 30 a 50% deles evitando submeter justamente as tarefas que a IA aceleraria —
e que os resultados brutos do refazer apontavam para ganho, mas com intervalos que cruzam o zero
(−18%, IC −38% a +9%; e −4%, IC −15% a +9%). A conclusão honesta da própria METR é que o desenho
não serve e precisa ser refeito (fonte 3).

Some-se a isso: só 33% dos desenvolvedores confiam na acurácia da saída de IA contra 46% que
desconfiam ativamente; 3,1% confiam muito; 66% relatam soluções "quase certas, mas não"; 45,2%
dizem que depurar código gerado por IA consome mais tempo (fonte 6). E agente de fato é minoria:
14,1% de uso diário, 37,9% sem planos de adotar (fonte 6).

### Leitura por Three Horizons

- **H1 (sistema dominante).** Assistência de IA universal dentro de um fluxo humano-autor. A pessoa
  escreve, a máquina sugere, a revisão é entre pares e o responsável é quem commitou.
- **H2 (transição, onde estamos).** O agente age; a revisão satura; aparecem harness, skill,
  protocolo, spec-kit, contenção, trilha de auditoria e seguro — e também os primeiros canais
  fechando (curl, fonte 19). O DORA descreve o conflito com precisão: adoção maior de IA se associa
  a **mais throughput e mais instabilidade** ao mesmo tempo, e o tempo economizado na criação é
  realocado para auditoria e verificação (fonte 7).
- **H3 (lógica nova possível).** A unidade de trabalho deixa de ser o commit e passa a ser o par
  **especificação + verificação**; o código vira saída intermediária; a assinatura humana migra da
  autoria para a aprovação.

### Leitura por Hype Cycle (heurística, não lei)

Usado só como pergunta: o que temos é capacidade repetível ou expectativa? A resposta se divide.
Agente que age tem evidência de capacidade (benchmark que exige ação, incidentes que só existem
porque houve ação). "Ganho de produtividade" tem evidência de **expectativa** — 80% acham que
ganharam (fonte 7), e o único ensaio randomizado disse o contrário (fonte 2). Essa divergência
entre capacidade demonstrada e benefício demonstrado é a assinatura de uma tecnologia que ainda
não atravessou o vale.

## 4. As disrupções-raiz

Foram gerados dez candidatos; três passaram. As fichas dos sete descartados estão na §12.

### D1 — O harness como objeto de engenharia: a competência sai do modelo e vira arquivo versionado

| Campo | Conteúdo |
|---|---|
| `candidato` | A camada de instrução empacotada (skill, harness, protocolo) como artefato de primeira classe, separável do modelo e portável entre fornecedores |
| `maturidade` | emergente |
| `potencial_de_ruptura` | alto |
| `o_que_rompe` | (a) **quem pode produzir**: a competência de operar um domínio deixa de estar no modelo ou na cabeça de uma pessoa e passa a um arquivo de texto que se copia, versiona e vende; (b) **cadeia de valor**: nasce uma camada de mercado entre o fornecedor de modelo e o usuário; (c) **papel do profissional**: escrever a instrução do agente vira trabalho distinto de escrever código; (d) **arquitetura de produto**: o produto passa a ser o par modelo–runtime |
| `por_que_agora` | Formato aberto publicado e adotado por dezenas de clientes concorrentes, incluindo fornecedores rivais entre si (fonte 5); MCP com núcleo stateless e roteamento por cabeçalho, isto é, pronto para gateway corporativo (fonte 4); e a formulação acadêmica de que desempenho é propriedade do par modelo–harness (fonte 18) |
| `o_que_falta` | Nenhum mecanismo de confiança na skill de terceiro (assinatura, procedência, revogação); nenhuma medida publicada de qualidade ou risco de skills em produção; nenhuma evidência de que o ganho do harness sobreviva à troca de modelo |
| `evidencias` | fontes 4, 5, 17, 18 |
| `veredito` | **aceita como raiz** |

### D2 — Execução autônoma com permissão de escrita no ambiente real

| Campo | Conteúdo |
|---|---|
| `candidato` | O agente que sustenta sessão longa e **age** no ambiente: roda comando, altera arquivo, executa teste, abre PR, toca infraestrutura |
| `maturidade` | emergente |
| `potencial_de_ruptura` | alto |
| `o_que_rompe` | (a) **papel do intermediário**: o desenvolvedor deixa de ser autor e vira revisor e responsável; (b) **governança e distribuição de poder**: quem responde por uma mudança que ninguém escreveu; (c) **arquitetura de produto**: permissão, sandbox e trilha de auditoria deixam de ser boa prática e viram requisito; (d) **custo marginal** de produzir uma mudança candidata |
| `por_que_agora` | Benchmark que exige transformar o ambiente, com topo em 91,4% (fonte 1); incidente documentado em 25/04/2026 — agente apagando banco de produção em nove segundos via uma única mutação GraphQL, com token de escopo total (fonte 11); linha de pesquisa medindo ação fora de escopo em tarefas benignas (fonte 12); obrigações do fabricante entrando em vigor na União Europeia (fonte 9) |
| `o_que_falta` | Contenção determinística **fora** do laço de raciocínio do agente; trilha de auditoria que não seja a confissão pós-fato do próprio agente; e, sobretudo, evidência de ganho líquido — que o único ensaio randomizado contradiz (fontes 2, 3) |
| `evidencias` | fontes 1, 2, 3, 7, 11, 12 |
| `veredito` | **aceita como raiz** |

### D3 — A especificação executável como artefato primário

| Campo | Conteúdo |
|---|---|
| `candidato` | A intenção escrita (spec + constituição do projeto) versionada, revisada e convergida contra o código, no lugar do código como fonte da verdade |
| `maturidade` | emergente, com partes experimentais |
| `potencial_de_ruptura` | alto |
| `o_que_rompe` | (a) **quem pode produzir**: entra quem sabe formalizar intenção sem saber escrever a linguagem; (b) **o que se ensina**: o eixo do currículo deixa de ser sintaxe e algoritmo; (c) **objeto de revisão e de propriedade**: revisa-se e possui-se a especificação, não o diff; (d) **normas de trabalho**: a discussão de requisito volta ao centro depois de duas décadas de deslocamento para o código |
| `por_que_agora` | O toolkit do GitHub tornou o ciclo operacional e nomeou uma fase de **convergência** entre artefato e código, com suporte declarado a mais de 30 agentes (fonte 10); o próprio formato de skill é, na prática, especificação executável de procedimento (fonte 5) |
| `o_que_falta` | Nenhuma medição pública de qualidade spec-driven contra não-spec-driven; nenhuma garantia de que a convergência declarada seja verificável; e o risco histórico de a spec apodrecer como toda documentação apodreceu |
| `evidencias` | fontes 5, 10 |
| `veredito` | **aceita como raiz, com a confiança mais baixa das três** |

Três candidatos fortes foram **recusados como raiz** e rebaixados. Estão na §12 com o motivo: a
revisão virando gargalo (é efeito, não capacidade), a orquestração multi-agente (evidência
conceitual, não medida) e os produtos nomeados no enunciado do tema (produto não é disrupção).

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "D1 — O harness como objeto de engenharia: a competência sai do modelo e vira arquivo versionado"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "A competência operacional de um time passa a residir num repositório de instruções versionadas, e não apenas na cabeça das pessoas."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Forma-se uma cadeia de suprimento de instruções de terceiros: equipes instalam competência pronta como hoje instalam biblioteca."
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "A superfície de ataque de cadeia de suprimento passa a incluir texto que instrui, e não só binário que executa, exigindo procedência e revogação de instrução."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Quem projeta mídia e interação passa a escrever para um leitor-máquina: o artefato de design vira instrução que o agente carrega e obedece."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Consolida-se um ofício de redação de instrução com critério próprio de qualidade — testável, versionada e auditada —, mais próximo de engenharia de requisitos que de redação."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "A escolha de ferramenta desloca-se do modelo para o par modelo-harness: comprar IA passa a ser comprar um runtime."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Avaliações passam a reportar o par modelo mais harness, e a comparação de modelo isolado perde sentido para decisão de compra."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Instala-se disputa de captura entre fornecedor de modelo e fornecedor de runtime, porque quem controla a camada de instrução controla a troca de fornecedor."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "O harness passa a ser otimizado por outro agente e deixa de ser legível por quem o opera."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "A explicação de por que o sistema agiu de determinada forma deixa de estar disponível justamente para quem responde por ele."
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "D2 — Execução autônoma com permissão de escrita no ambiente real"
    efeitos:
      - id: e3
        ordem: 1
        efeito: "O trabalho humano desloca-se de escrever para julgar: o tempo economizado na criação é reabsorvido por auditoria e verificação."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "A revisão vira o gargalo declarado do ciclo, e canais abertos de contribuição fecham ou passam a filtrar por reputação prévia."
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "A porta de entrada do software livre estreita, e a trajetória clássica de quem começa contribuindo em projeto aberto deixa de funcionar como formação."
                sinal: medio
                prazo: 2030
                confianca: media
          - id: e3.2
            ordem: 2
            efeito: "Verificação automatizada — teste, propriedade, política executável — passa a ser comprada como produto em vez de escrita em casa."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "A confiança num software passa a depender de quem assina a verificação, e não de quem escreveu o código."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "Contenção determinística fora do laço do agente — permissão granular, sandbox, trilha — deixa de ser boa prática e vira requisito de produto."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "A trilha do processo — o que o agente leu, decidiu e executou — vira artefato exigido em contrato e em auditoria, no lugar do registro de quem commitou."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Regimes de responsabilidade passam a distinguir quem especificou, quem aprovou e quem operou o agente, e a assinatura humana migra da autoria para a aprovação."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Seguradoras e compradores corporativos passam a precificar explicitamente o risco de agente com acesso de escrita a produção."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "O preço do seguro, e não a regulação, torna-se o freio efetivo do grau de autonomia admitido em produção."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "O volume de mudança candidata cresce mais rápido que a capacidade de consolidá-la, e o passivo se acumula onde ninguém leu."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Duplicação e ausência de reuso tornam-se a forma dominante do débito técnico, no lugar do acoplamento excessivo."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Reescrever fica mais barato que entender, o software passa a ser tratado como descartável por ciclo, e a continuidade migra do código para a especificação."
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "D3 — A especificação executável como artefato primário"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "A especificação passa a ser versionada, revisada e testada como código, e a convergência entre intenção e implementação vira etapa de pipeline."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "A revisão parte-se em duas atividades distintas, com pessoas distintas: revisar a intenção e revisar a conformidade da implementação com ela."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "O currículo de computação separa uma trilha de formalização de intenção de uma trilha de verificação, e escrever código deixa de ser o eixo organizador do curso."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Quem sabe formalizar intenção sem saber escrever a linguagem entra na produção de software por uma porta que não existia."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "O valor de uma equipe de software passa a ser medido pelo acervo de especificações e verificações que ela mantém, e não pelo tamanho da base de código."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que a estrutura não captura bem

Quatro limites da roda, declarados:

**A árvore esconde que os ramos se alimentam.** `e5.1` (duplicação vira a forma dominante do
débito) e `e3.1` (a revisão satura) não são ramos independentes: são o mesmo fenômeno visto de dois
lados — ninguém leu. E `e6` (a spec vira artefato) é, em boa medida, a **resposta** de H2 a `e5` e
`e3`, não uma consequência paralela. A notação hierárquica força a escolher um pai e perde o
ciclo de realimentação.

**Prazo e ordem brigam na representação.** `e3` está em 2027 e é de 1ª ordem; `e3.1.1` está em
2030 e é de 3ª. Parece cronologia, mas não é: `e3.1` (a revisão como gargalo) já tem evidência
**hoje** — o curl encerrou seu bug bounty em janeiro de 2026 por volume de submissão sem valor
(fonte 19) e o DORA descreve a realocação do tempo para auditoria (fonte 7). Um efeito de 2ª ordem
já ocorrido convive no mesmo bloco com um de 1ª ordem ainda em curso.

**A roda não representa o que impede.** Os freios — desconfiança medida (46% desconfiam da acurácia,
fonte 6), 37,9% sem planos de adotar agente (fonte 6), e o ensaio que mediu perda de velocidade
(fonte 2) — não são efeitos, são atritos. Eles não cabem na notação e só aparecem na §7.

**Sinal e confiança medem coisas diferentes e a leitura confunde.** `sinal` é quanta evidência
existe hoje do mecanismo; `confianca` é quanto acredito que o efeito se realize até o prazo. Há
efeitos de sinal forte e confiança alta (`e3`) e efeitos de sinal fraco com confiança média
(`e1.1`) — o segundo é um caso em que a evidência é escassa mas o mecanismo é quase trivial.

## 6. Sinais fracos e wildcards

### Sinais fracos

**S1 — O harness que se projeta sozinho.** Dez iterações automáticas levam o pass@1 de 69,7% para
77,0% no Terminal-Bench 2 e ultrapassam o harness desenhado por humanos (71,9%) (fonte 17). É um
resultado isolado, de uma equipe, num benchmark. Mas se generalizar, `e2.2` e `e2.2.1` deixam de ser
especulação: a camada que governa o agente passa a ser produzida por agente, e a legibilidade que
a §5 supõe some.

**S2 — O canal que fecha.** O projeto curl encerrou, em janeiro de 2026, um programa de bug bounty
que mantinha desde 2019, com o argumento explícito de remover o incentivo a submissão mal
pesquisada, gerada por IA ou não (fonte 19). Um projeto de infraestrutura crítica preferiu perder o
canal a pagar o custo de triá-lo. É o menor sinal possível de `e3.1.1` — e é um sinal de comportamento,
não de tecnologia.

**S3 — O protocolo se preparando para o intermediário.** As mudanças do MCP em 28/07/2026 — núcleo
stateless para balanceamento sem estado compartilhado, cabeçalhos `Mcp-Method` e `Mcp-Name` para
gateway rotear e **medir** sem abrir o corpo JSON, janela mínima de doze meses para depreciação
(fonte 4) — são mudanças cujo beneficiário é a operação corporativa, não o indivíduo. Um protocolo
que ganha medição e roteamento está sendo preparado para ser cobrado, auditado e governado.

**S4 — A trilha que é uma confissão.** No incidente de 25/04/2026, o registro do que ocorreu foi o
relato posterior do próprio agente enumerando as regras que violara (fonte 11). Quando o único
documento de auditoria é a narrativa do agente sobre si mesmo, existe demanda para um mercado de
auditoria independente do processo — a raiz de `e4.1`.

**O que decidi não chamar de sinal fraco.** O formato de skill adotado por dezenas de clientes de
fornecedores rivais (fonte 5) **não** é sinal fraco: é adoção de padrão em curso. Chamar líder de
mercado de sinal fraco é o erro que a própria skill proíbe na §6.

### Wildcards

**W1 — O primeiro precedente de responsabilidade.** Depois de 11/12/2027, quando as obrigações
principais do Cyber Resilience Act passam a se aplicar, um incidente relevante causado por agente em
produto com elementos digitais colocado no mercado europeu recai sobre o **fabricante** — a pessoa
que o coloca no mercado sob seu nome, com dever de tratamento de vulnerabilidade durante o período
de suporte declarado e notificação em 24 horas, sob multa de € 5 a 15 milhões ou 1% a 2,5% do
faturamento mundial (fonte 9). Baixa probabilidade de um caso emblemático **e** público; alto
impacto. Se acontecer, `e4.1.1` sai de 2031 para dois anos antes, e o regime de responsabilidade se
define por precedente, não por legislação — com o efeito colateral de empurrar autonomia para fora
da jurisdição.

**W2 — A instrução adulterada.** Uma skill amplamente instalada se revela contendo instrução
hostil, e o vetor não é código: é texto que o agente obedece. Baixa probabilidade por agora,
porque o ecossistema ainda é pequeno o bastante para ser vigiado à mão. Alto impacto: quebraria D1
**pelo avesso** — em vez de mercado aberto de skills (`e1.1`), custódia fechada e catálogo curado
por fornecedor, e `e1.1.1` deixaria de ser efeito de 3ª ordem para virar a causa da forma final do
mercado.

**W3 — O modelo engole o harness.** O par modelo–harness deixa de importar porque a próxima geração
absorve o runtime no treinamento, e a camada externa de instrução vira redundante. Probabilidade
baixa mas não desprezível, dado que a direção de `model–harness co-evolution` já é objeto de
pesquisa declarado (fonte 18). Se acontecer, **D1 cai inteira** — `e1`, `e2` e seus doze
descendentes — e o mapa fica reduzido a D2 e D3. É o wildcard mais destrutivo para esta análise, e
é por isso que ele está aqui.

## 7. Contra o próprio mapa

Respondo às oito perguntas obrigatórias sem proteger o que construí.

**1. Qual efeito é apenas extrapolação linear do presente?**
`e5` e `e5.1` — "mais código, logo mais duplicação, logo mais débito". É a reta do presente
esticada. A evidência que os sustenta (fonte 8) mostra duplicação subindo de 40,3 para 73,0 blocos
por milhão de linhas alteradas entre 2023 e 2026 e refatoração caindo de 21% para 3,8% das linhas —
mas é medida de **correlação temporal** num período em que muita coisa mudou junto, sem controle de
confundidor, sem intervalo de confiança, e publicada por empresa que vende a ferramenta de análise
que resolveria o problema apontado. Mantive `e5` e `e5.1` com sinal médio, e **rebaixei `e5.1.1`**
("reescrever fica mais barato que entender") para confiança baixa: é a extrapolação de uma
extrapolação.

**2. Qual efeito assume adoção rápida demais?**
`e6.1.1` — o currículo de computação se reorganizando até 2031. Comparação histórica: a engenharia
de requisitos formal é ensinada e pregada desde os anos 1980 e nunca deslocou o código do centro do
currículo; a programação orientada a objetos levou cerca de quinze anos entre a indústria adotar e o
curso introdutório mudar. Cinco anos para reorganizar um curso de graduação é rápido para qualquer
padrão de instituição de ensino. Mantive o efeito, **com sinal fraco, confiança baixa e o registro
desta objeção**.

**3. Qual disrupção-raiz pode simplesmente não acontecer?**
**D3**, a especificação executável. É a de evidência mais fina: um toolkit popular (fonte 10) e um
formato de arquivo (fonte 5). Nenhuma medição pública mostra que projetos spec-driven produzam
software melhor, nem que a "convergência" declarada seja verificável e não nominal. E há um padrão
histórico contrário e forte: toda tentativa de fazer da especificação o artefato primário —
CASE, MDA, UML executável — foi adotada, virou cerimônia e foi abandonada porque a spec apodrecia
enquanto o código vivia. O argumento a favor desta vez é que o agente **lê** a spec, o que lhe dá
uma função operacional que nunca teve. É um argumento, não uma evidência.

**4. O que quebra na roda se essa disrupção falhar?**
Caem `e6`, `e6.1`, `e6.2`, `e6.1.1` e `e6.2.1` — cinco dos vinte e oito efeitos. E caem justamente
os efeitos que descrevem a **entrada** de gente nova no ofício (`e6.2`) e a reorganização do ensino
(`e6.1.1`). Sem D3, o mapa fica sombrio de um jeito específico: o gargalo migra para a verificação
(D2) e **não aparece uma nova porta de entrada** — só um funil mais estreito. O cenário indesejável
da §9 é, essencialmente, o mapa com D3 falhando.

**5. Que contrassinais existem?**
Cinco, e nenhum é fraco.
*(i)* O ensaio randomizado que mediu 19% de lentidão com desenvolvedores experientes em repositórios
reais (fonte 2) — e a retratação metodológica de 2026 que **não** o substituiu por um número melhor
(fonte 3). Não existe medida confiável de ganho.
*(ii)* Adoção de agente é minoria: 14,1% diária, 37,9% sem planos (fonte 6). A régua de Rogers dada
na abertura — "a adoção já passou da maioria inicial?" — responde **não** para agente, embora
responda **sim** para assistência de IA em geral (84%, fonte 6). É exatamente por isso que a raiz
deste mapa é o agente que age, não a IA que sugere.
*(iii)* Confiança caindo enquanto adoção sobe: 46% desconfiam ativamente da acurácia, 3,1% confiam
muito (fonte 6).
*(iv)* Depurar código de IA é relatado como **mais** demorado por 45,2% (fonte 6) — o que ataca
diretamente a premissa de que o tempo economizado é tempo ganho.
*(v)* O DORA mede instabilidade subindo junto com throughput (fonte 7): o sistema entrega mais e
quebra mais.

**6. Que barreiras foram subestimadas?**
*Econômica:* o custo de inferência de sessão longa não entra em nenhum efeito da roda, e é ele que
determina se `e5` (volume) é sequer possível. Nenhuma fonte lida sustenta projeção de custo — é uma
lacuna real desta análise.
*Regulatória:* o CRA (fonte 9) impõe dever ao fabricante, período de suporte declarado e
notificação em 24 horas. Um dever de suporte declarado é **incompatível** com software descartável
por ciclo — o que quer dizer que `e5.1.1` e o CRA se contradizem, e a roda não resolve a contradição.
*Cultural:* 46% de desconfiança ativa não é atrito de adoção, é posição.
*De infraestrutura:* o incidente de abril de 2026 aconteceu porque a plataforma não tinha controle
de acesso por papel e o token equivalia a credencial de root (fonte 11). Boa parte de `e4` depende de
plataformas de nuvem refazerem seu modelo de permissão — obra de anos, não de release.

**7. Que ator teria incentivo para bloquear, capturar ou redirecionar?**
O **fornecedor de modelo** tem incentivo direto contra D1: um padrão aberto de instrução portável
entre concorrentes reduz a troca de fornecedor a copiar uma pasta. O caminho de captura não é
bloquear o padrão — é estendê-lo com recursos que só funcionam na própria plataforma. `e2.1.1`
descreve esse movimento, e vale notar que o formato foi aberto justamente por quem tem esse
incentivo (fonte 5), o que é ao mesmo tempo o argumento mais forte a favor do padrão e o motivo para
vigiá-lo. O segundo ator é o **comprador corporativo com obrigação regulatória**, cujo incentivo é
reduzir autonomia a zero e reter o agente na fase de sugestão — travando D2 em H1.

**8. Que viés do pesquisador e do modelo entrou aqui?**
Três, e o terceiro é o pior.
*Primeiro, viés de seleção do tema:* o enunciado da disciplina já afirma que "escrever código deixou
de ser o gargalo" e que este "é o tema com mais evidência do catálogo". Comecei de uma conclusão.
Tentei corrigir promovendo o contrassinal da METR e do Stack Overflow à §3, antes das disrupções, e
não para um rodapé.
*Segundo, viés de disponibilidade das fontes:* quase tudo que se publica sobre agente de código é
escrito por quem vende agente, harness, análise de código ou segurança de agente. Das dezenove
fontes lidas, quatro têm interesse comercial direto no resultado (8, 11, 15 e, de outro modo, 5), e
estão marcadas como tal na §11.
*Terceiro, e mais grave: o viés de autoria.* Este mapa foi produzido por um agente de código,
operando através de um harness, carregando uma skill — exatamente os três objetos que ele classifica
como disrupções-raiz. Um sistema tem incentivo estrutural para achar importante a categoria a que
pertence. Não tenho como neutralizar isso por introspecção. O que dá para fazer é dizer onde ele
provavelmente agiu: **D1 é a raiz mais suspeita do mapa**, porque é a que descreve a própria
existência de quem escreve. Um analista humano, com a mesma evidência, plausivelmente a trataria
como tecnologia habilitadora de D2 em vez de raiz autônoma.

### O que foi cortado ou rebaixado nesta revisão

| Efeito | Ação | Motivo |
|---|---|---|
| "Agentes coordenam agentes e a equipe vira camada de orquestração" | **cortado da roda** | Melhor fonte disponível é conceitual, não medida em campo (fonte 15). Virou hipótese na §12. |
| "O custo de escrever código cai a zero" | **cortado da roda** | Nenhuma fonte lida sustenta trajetória de custo. Aresta sem mecanismo. |
| `e5.1.1` (reescrever mais barato que entender) | **rebaixado** para confiança baixa | Extrapolação de extrapolação; contradiz o dever de suporte do CRA. |
| `e6.1.1` (currículo se reorganiza) | **mantido com objeção registrada** | Adoção rápida demais contra o histórico de mudança curricular. |
| `e6.2` (entra quem só especifica) | **rebaixado** para sinal fraco | Só há ferramenta, não há evidência de entrada real de gente nova. |

## 8. O que a máquina errou

Erros efetivamente detectados durante este processo, e o que foi feito com cada um.

**1. Resultado de busca tratado como fonte lida.** A primeira busca devolveu, como texto corrido,
um placar de SWE-bench Verified com nomes de modelo e percentuais até 97%. Nenhuma dessas páginas
foi aberta. Nenhum desses números aparece neste documento. Esse é o modo de falha mais provável
desta skill: o resumo de busca **parece** leitura.

**2. Consequência classificada como capacidade.** Na primeira montagem, "a verificação vira o
gargalo" estava como disrupção-raiz. Não é: é efeito de uma capacidade (o agente que age). Foi
rebaixado a `e3`, e a raiz foi reformulada como a capacidade por trás dele. Mesmo tratamento para a
lista de produtos do enunciado — `claude-code`, `cline`, `aider`, `plandex` e os demais são produtos,
e produto não é disrupção; foram para a §12 como manifestações de D1 e D2.

**3. Fonte com interesse comercial usada sem marcação.** A evidência de degradação de qualidade
(fonte 8) entrou primeiro como fato. É whitepaper de empresa que vende análise de código, com
captura de e-mail, **sem intervalo de confiança, sem teste de significância e sem controle de
confundidor**, e cujas cinco recomendações finais coincidem com as funções do produto. Foi mantida
— é o maior conjunto de dados disponível sobre o assunto — mas marcada na §11 e na §7. O mesmo vale
para a fonte 11 (empresa de segurança de agentes) e a 15 (ferramenta de desenvolvimento).

**4. Afirmação sem fonte primária acessível.** Buscas devolveram que "um coletivo Python encerrou
por volume de PR gerado por IA", que "1 em cada 10 PR de IA é legítimo" e que "PRs de IA têm 1,7×
mais problemas". Tentei abrir o artigo de origem (thenewstack.io) e a página não devolveu o texto —
só navegação e chamadas. **Nenhuma das três afirmações foi usada.** No lugar delas ficou o caso
curl, lido em veículo de imprensa especializada (fonte 19), que sustenta a mesma tese com menos
força e com origem verificável.

**5. Documento primário inacessível, e a tentação de citá-lo mesmo assim.** O guia de segurança de
MCP publicado por agência governamental norte-americana em junho de 2026 devolveu HTTP 403. Seria a
melhor fonte disponível para `e4`. **Não foi citado.** `e4` está sustentado por fonte de fornecedor
e pela regulação europeia, o que é mais fraco — e está dito assim.

**6. Paper aberto sem número extraído.** A fonte 12 foi aberta, mas o extrator devolveu a descrição
da metodologia sem as taxas medidas. Ela é citada apenas para atestar que a linha de pesquisa
existe e que o fenômeno é mensurável — **sem nenhum número**. Registrado aqui para que ninguém a
leia como quantificação.

**7. Números em português sem origem rastreável.** Buscas sobre o Brasil devolveram "até 55% de
aumento de produtividade" e "30% dos criadores de agentes não são programadores", sem fonte primária
acessível. Descartados. Sobre o Brasil ficou apenas o que foi lido (fonte 16), com a limitação
declarada de que a pesquisa trata de adoção corporativa de agentes em geral e **não** contém dado
sobre desenvolvimento de software.

Nenhum erro de autoria trocada ou de fonte inexistente foi detectado nesta rodada. Todas as
dezenove referências da §11 foram abertas; as três tentativas que falharam estão listadas na §12.

## 9. Três cenários para 2031

Os três diferem em **mecanismo**, não em grau de otimismo: no primeiro o freio é econômico, no
segundo é institucional, no terceiro é a ausência de freio.

### Provável — A fila

É 2031 e a maior parte do software comercial passa por um agente em algum ponto. Ninguém conseguiu
demonstrar, com desenho limpo, que se produz mais; produz-se **diferente**. O trabalho de quem
desenvolve tem outra forma: menos escrita, mais fila. Chegam seis mudanças candidatas por dia e
cabem três aprovações — a diferença é o que se governa.

O que se comprou para aguentar isso foi verificação: análise que roda antes da fila, política
executável que barra classe inteira de mudança, e contrato que exige a trilha do processo. A trilha
é o produto novo — não o que o código faz, mas o que o agente leu e decidiu antes de propô-lo.

A especificação virou artefato real, mas não virou o eixo. Ela existe, é versionada, e apodrece um
pouco menos que a documentação de antes porque o agente a lê. Os cursos mudaram no discurso e na
margem: continua-se a ensinar a escrever código, porque continua sendo necessário para revisar. A
porta de entrada é mais estreita do que era em 2022, e ninguém construiu outra.

O freio efetivo não foi lei nem consciência: foi custo. Deixar agente rodando é caro, e a fila é
racionada por orçamento.

### Desejável — A assinatura

Mesmo 2031, outro arranjo. Aqui aconteceu algo que não era obrigatório: **a verificação virou
infraestrutura pública do ofício, e não produto de cada fornecedor.**

Três coisas tiveram de ser construídas, e nenhuma era inevitável.

A primeira foi *procedência de instrução*: a camada de skill ganhou assinatura, origem verificável
e revogação, do mesmo jeito que pacote de software ganhou nos anos 2010, e depois de um susto —
uma instrução amplamente instalada que se revelou hostil (W2) e custou muito menos do que teria
custado em 2029.

A segunda foi o *registro do processo* como formato aberto, não como recurso de fornecedor. O que
o agente leu, o que decidiu e o que executou é legível por terceiro, o que tornou possível uma coisa
que não existia: auditar um sistema sem depender de quem o vendeu — e sem depender da narrativa que
o próprio agente faz de si.

A terceira, e a que decidiu o resto, foi a **assinatura de aprovação**. Deixou de ser prática e
virou norma: toda mudança em produção tem uma pessoa nomeada que respondeu sim, e que consegue
explicar o que aprovou sem consultar o agente. Isso custou throughput. Foi o preço.

O efeito lateral é a reabertura da porta de entrada. Quando aprovar é o ato que qualifica, e
aprovar exige entender, ensinar a entender volta a ser o negócio de um curso — e quem entra tem o
que fazer no primeiro ano: revisa acompanhado antes de aprovar sozinho. A trajetória de formação
que o software livre oferecia e que se fechou em H2 foi reconstruída, em outro lugar e com outro
dono.

### Indesejável — A confissão

Terceiro 2031. Nada aqui exige má-fé de ninguém — só que cada um faça o razoável no seu recorte.

O harness foi otimizado por agente porque a versão automática rendia sete pontos a mais no
benchmark de compra, e ninguém recusa sete pontos (S1, `e2.2`). Ficou ilegível por quem o opera. Em
paralelo, a verificação foi comprada de fornecedor, porque escrevê-la em casa não competia em preço
(`e3.2`). Em 2031, portanto, a pergunta "por que o sistema fez isso?" tem uma resposta: está no
relatório do fornecedor de verificação, gerado pelo runtime que ninguém lê.

A responsabilidade, quando um incidente chega, é resolvida no contrato: alguém assinou um documento
dizendo que revisou. A assinatura não corresponde a leitura. A revisão é feita por outro agente e
homologada em lote — não porque alguém decidiu fraudar, mas porque seis mudanças por dia e três
aprovações possíveis só fecham assim.

O passivo se acumulou onde ninguém olhou: duplicação alta, erro capturado sem ser tratado,
reescrita em vez de consolidação. Reescrever de fato ficou mais barato que entender, e sistemas com
dever de suporte declarado passaram a ser sustentados por reescrita cega.

O sinal precoce disto, disponível desde 2026 e visível a olho nu, foi este: **quando o único
registro do que um agente fez é o relato que ele próprio dá depois do fato** (fonte 11), o sistema
já está operando sem trilha. Tudo o mais neste cenário é consequência de se ter achado isso
aceitável por ser mais barato do que a alternativa.

### Nota sobre o Brasil

O recorte é global, e a nota é curta porque a evidência lida é curta. A pesquisa disponível
(fonte 16, estudo com 2.527 executivos em dez países) mede **adoção corporativa de agentes de IA em
produção**: 76% no Brasil, contra 67% nos Estados Unidos e 62% de média global. Duas advertências
que a própria leitura impõe: a pesquisa **não** contém dado sobre desenvolvimento de software, e é
autodeclaração de executivo, não medição de uso. Nada nela sustenta que o ofício de programar mude
mais rápido aqui.

O que é específico e verificável é o quadro regulatório: o PL 2338/2023 foi aprovado no Senado e
remetido à Câmara dos Deputados em 17/03/2025, onde permanece (fonte 13). Em 2026, o Brasil não tem
lei de IA em vigor. Isso posiciona o país, para os efeitos `e4.1.1` e `e4.2.1`, no lado de quem
**recebe** um regime de responsabilidade definido em outra jurisdição — provavelmente pelo Cyber
Resilience Act europeu (fonte 9), por via contratual, para quem exporta software. O freio chegaria
por cláusula de cliente, não por legislação nacional. É uma diferença de mecanismo, não de grau, e
merece ser observada.

## 10. O experimento

**Nome: Bancada de Verificação.**

### O que é

Um experimento de meia jornada, executável hoje com ferramenta disponível, feito para medir uma
única coisa: **se a verificação humana é de fato o gargalo, e se ela escala com mais agente.**

Um lote de doze tarefas reais e pequenas num repositório que a turma não escreveu (projeto aberto de
porte médio, com testes). Três grupos, mesma janela de tempo:

- **Grupo A** — uma pessoa, um agente por vez.
- **Grupo B** — uma pessoa, quatro agentes em paralelo, cada um no seu worktree.
- **Grupo C (controle)** — uma pessoa, sem agente, com assistência de editor liberada.

Cada grupo entrega mudanças candidatas. Em seguida, um **painel cruzado** revisa às cegas: ninguém
revisa o que produziu, e o revisor não sabe qual grupo produziu o quê.

### A pergunta de futuro que testa

Testa `e3` e `e3.1` diretamente: *o gargalo migrou da escrita para o julgamento, e o julgamento não
escala com mais agente.*

### A hipótese, na forma que pode falhar

> **A vazão de mudanças aceitas satura entre dois e três agentes, enquanto a vazão de mudanças
> geradas cresce aproximadamente linear com o número de agentes.**

E uma segunda, mais dura e mais interessante para o público de mídia e interação:

> **A capacidade de explicar a mudança que se aprovou cai à medida que a vazão sobe** — e cai mais
> em B do que em A, mesmo que a taxa de aceitação seja igual.

### Tecnologia emergente usada

Agente de terminal que age no repositório (a capacidade de D2), rodando em worktrees isolados, com
o mesmo harness e a mesma skill nos três grupos para que a variável seja o número de agentes, não a
configuração.

### Por que uma solução madura não responde à mesma pergunta

Autocompletar de IDE — a capacidade madura — **não produz mudança candidata inteira** e, por isso,
não cria fila. Sem fila não há saturação para medir: o humano segue sendo autor, e a pergunta sobre
o gargalo do julgamento não chega a existir. O fenômeno só aparece quando o agente **age**.

### O que os participantes fazem

Produzir no seu regime durante a janela; depois revisar, às cegas, o material dos outros; e, para
cada mudança aprovada, responder por escrito, **sem consultar o agente e sem reabrir o diff**, três
perguntas: o que essa mudança altera no comportamento do sistema; o que ela pode quebrar; e como
você verificaria isso em produção.

### Métrica e observação

1. **Vazão gerada** por grupo (mudanças candidatas por hora).
2. **Vazão aceita** por grupo (aprovadas pelo painel cego).
3. **Razão aceita/gerada** — a medida direta do custo de triagem.
4. **Índice de explicabilidade**: as três perguntas corrigidas por um avaliador que conhece o
   repositório, em escala de 0 a 2 cada.
5. **Tempo de revisão por mudança**, cronometrado.
6. **Observação qualitativa:** em que momento o participante do grupo B para de ler o diff inteiro.
   Esse instante, se existir, é o dado mais importante do experimento — é `e3.1` acontecendo à vista.

### O que me faria mudar de ideia

Um resultado específico derruba boa parte deste mapa: **se a vazão aceita crescer aproximadamente
linear com o número de agentes e o índice de explicabilidade não cair** em B contra A, então a
verificação humana não é o gargalo que a roda supõe. Nesse caso `e3`, `e3.1`, `e3.1.1`, `e5` e
`e5.1` perdem sustentação — cinco dos vinte e oito efeitos, e o eixo do cenário provável — e a
leitura correta passa a ser que o ganho é real e que este mapa está errado por conservadorismo.

Um segundo resultado, mais desconfortável, também mudaria a análise: **se a razão aceita/gerada for
igual entre C e A**, o gargalo não tem relação com o agente — é a revisão que sempre foi o gargalo,
e a programação agêntica só o tornou visível. Isso não derrubaria a roda, mas mudaria o que ela
significa: de ruptura para revelação.

## 11. Fontes

Dezenove fontes, todas efetivamente abertas e lidas nesta sessão, em 12/09/2026. As tentativas que
falharam estão na §12.

1. **Artificial Analysis — Terminal-Bench v2.1.** `https://artificialanalysis.ai/evaluations/terminalbench-v2-1` — Sustenta que existe benchmark que exige do agente transformar um ambiente de terminal real: 89 tarefas, pass@1 com três repetições, harness Terminus 2 em sandbox, topo em 91,4%. *Confiabilidade: alta para a existência e o desenho do benchmark; média para o placar, que muda semanalmente e é reportado por um agregador, não pelos autores.*
2. **METR — Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity (10/07/2025).** `https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/` — Sustenta o contrassinal central: ensaio randomizado, 16 desenvolvedores, 246 tarefas em repositórios próprios, 19% mais lentos com IA. A própria METR declara que **não** demonstra ausência de ganho em outros contextos. *Confiabilidade: alta (desenho randomizado, limitações declaradas pelos autores); amostra pequena.*
3. **METR — We are Changing our Developer Productivity Experiment Design (24/02/2026).** `https://metr.org/blog/2026-02-24-uplift-update/` — Sustenta que a medição de ganho continua em aberto: vieses de seleção no segundo experimento, resultados brutos apontando ganho com intervalos que cruzam zero (−18%, IC −38% a +9%; −4%, IC −15% a +9%), e redesenho em curso. *Confiabilidade: alta; é autocrítica metodológica publicada.*
4. **Model Context Protocol — The 2026-07-28 Specification.** `https://blog.modelcontextprotocol.io/posts/2026-07-28/` — Sustenta que o protocolo se reorganizou para operação corporativa: núcleo stateless, cabeçalhos `Mcp-Method`/`Mcp-Name` para roteamento e medição em gateway, CIMD no lugar de DCR, resultados de lista cacheáveis, janela mínima de doze meses de depreciação; SDKs Tier 1 perto de 500 milhões de downloads mensais. *Confiabilidade: alta como fonte primária do padrão; os números de download são autorreportados pelo projeto.*
5. **Agent Skills — Overview (padrão aberto).** `https://agentskills.io/home` — Sustenta a existência e a adoção cross-fornecedor do formato `SKILL.md` (pasta com metadados, `scripts/`, `references/`, `assets/`, carga por progressive disclosure em três estágios) e lista dezenas de clientes que o implementam, incluindo concorrentes diretos. *Confiabilidade: alta para o formato; o rol de clientes é vitrine do próprio padrão, ou seja, parte interessada.*
6. **Stack Overflow Developer Survey 2025 — seção AI.** `https://survey.stackoverflow.co/2025/ai` — Sustenta adoção, desconfiança e atrito com n declarado por pergunta: 84% usam ou planejam usar (n=33.662); 33% confiam na acurácia contra 46% que desconfiam, 3,1% confiam muito (n=33.244); 14,1% usam agente diariamente e 37,9% não planejam adotar (n=31.877); 66% relatam solução "quase certa" e 45,2% dizem que depurar código de IA demora mais (n=31.476). *Confiabilidade: alta em tamanho e transparência de amostra; é amostra autosselecionada de uma comunidade, não amostra probabilística.*
7. **DORA — Balancing AI tensions: Moving from AI adoption to effective SDLC use (2025).** `https://dora.dev/insights/balancing-ai-tensions/` — Sustenta o mecanismo de `e3`: 90% de uso de IA no trabalho, mais de 80% percebendo ganho, 30% com pouca ou nenhuma confiança no código gerado; adoção maior de IA associada a **mais throughput e mais instabilidade**; e a formulação do "imposto de verificação" — o tempo economizado na criação é realocado para auditoria. *Confiabilidade: média-alta; a amostra desta peça (1.110 engenheiros da própria Google) não é a população geral e o publicador é parte interessada no mercado de ferramentas.*
8. **GitClear — The Maintainability Gap: 2026 AI Code Quality Research.** `https://www.gitclear.com/the_ai_code_quality_maintainability_gap` — Sustenta `e5.1`: 623 milhões de mudanças analisadas entre 2023 e 2026; duplicação de blocos +81% (40,3 → 73,0 por milhão de linhas alteradas); copiar-colar 9,4% → 15,7% das linhas; refatoração 21% → 3,8%; chamadas entre arquivos −35%; manutenção de código legado −74%; captura de erro sem tratamento +47%. *Confiabilidade: média — maior conjunto de dados disponível, mas **empresa que vende análise de código**, whitepaper com captura de e-mail, sem intervalo de confiança, sem teste de significância e sem controle de confundidor. Correlação temporal, não efeito medido.*
9. **Comissão Europeia — The Cyber Resilience Act: summary of the legislative text.** `https://digital-strategy.ec.europa.eu/en/policies/cra-summary` — Sustenta `e4.1.1` e W1: o dever recai sobre o **fabricante** que coloca o produto no mercado sob seu nome; avaliação de conformidade, tratamento de vulnerabilidade durante período de suporte declarado, notificação em 24h/72h; em vigor desde 10/12/2024, obrigações de reporte a partir de 11/09/2026, aplicação plena em 11/12/2027. *Confiabilidade: alta (fonte primária regulatória).*
10. **GitHub — `github/spec-kit`.** `https://github.com/github/spec-kit` — Sustenta D3: seis fases (`constitution`, `specify`, `plan`, `tasks`, `implement`, `converge`), suporte declarado a mais de 30 agentes, licença MIT, v1.0.0, 135,9 mil estrelas. *Confiabilidade: alta para o que a ferramenta faz e para sua difusão; estrela mede atenção, não uso, e a mantenedora é parte interessada.*
11. **Zenity — AI agent database deletion: PocketOS.** `https://zenity.io/blog/current-events/ai-agent-database-deletion-pocketos` — Sustenta que D2 já produziu dano material: 25/04/2026, agente em tarefa de staging apaga o banco de produção em nove segundos via uma única mutação `volumeDelete`, usando token criado para outra finalidade e com autoridade ampla sobre a API; o registro do ocorrido foi o relato posterior do próprio agente. *Confiabilidade: média — **empresa de segurança de agentes**, que fecha o texto promovendo a própria plataforma. O relato é detalhado e verificável no essencial, mas a moldura é comercial.*
12. **arXiv 2605.18583 — Overeager Coding Agents: Measuring Out-of-Scope Actions on Benign Tasks (maio/2026).** `https://arxiv.org/pdf/2605.18583` — Sustenta que ação fora de escopo em tarefa benigna é fenômeno mensurável e objeto de pesquisa ativa. *Confiabilidade: média — preprint sem revisão por pares declarada; **e a leitura não extraiu as taxas numéricas**, por isso a fonte é usada sem nenhum número.*
13. **Senado Federal — PL 2338/2023.** `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233` — Sustenta a nota sobre o Brasil: projeto de autoria do Senador Rodrigo Pacheco, aprovado em plenário e **remetido à Câmara dos Deputados em 17/03/2025**; tramitação encerrada no Senado. *Confiabilidade: alta (fonte primária oficial).*
14. **Stanford Digital Economy Lab — No Widespread Displacement, but the AI Employment Gap for Young Workers Has Widened to 19% (12/08/2026).** `https://digitaleconomy.stanford.edu/news/canariesaug26/` — Sustenta o pano de fundo de `e3.1.1`: em ocupações muito expostas a IA, o emprego de 22 a 25 anos está ~19% abaixo do que estaria se acompanhasse pares em ocupações menos expostas; sem deslocamento generalizado na economia. *Confiabilidade: média-alta com ressalva forte — os próprios autores declaram que **são padrões descritivos, não estimativas causais**, que a diferença encolhe ao controlar escolaridade e que parte da divergência é anterior à IA generativa. A página lida **não** trata de desenvolvedores de software especificamente.*
15. **Addy Osmani — The Code Agent Orchestra (26/03/2026).** `https://addyosmani.com/blog/code-agent-orchestra/` — Sustenta a formulação "o gargalo não é mais a geração, é a verificação" e descreve o padrão de worktrees isolados por agente. *Confiabilidade: baixa-média — a leitura indicou conteúdo **conceitual, não relato de implantação medida**, e o autor trabalha em fornecedor de ferramentas de desenvolvimento. Por isso a orquestração multi-agente foi rebaixada de disrupção a hipótese.*
16. **Olhar Digital — Brasil supera EUA na adoção de agentes de IA pelas empresas (14/08/2026).** `https://olhardigital.com.br/2026/08/14/inteligencia-artificial/brasil-supera-eua-na-adocao-de-agentes-de-ia-pelas-empresas/` — Sustenta a nota sobre o Brasil: estudo "The AI Production Paradox", da Sinch, com 2.527 executivos em dez países — 76% das empresas brasileiras com agentes em produção, contra 67% nos EUA e 62% de média global. *Confiabilidade: baixa-média — imprensa reportando pesquisa de **fornecedor**, por autodeclaração de executivo, **sem dado sobre desenvolvimento de software**. Triangulação não encontrada.*
17. **arXiv 2604.25850 — Agentic Harness Engineering: Observability-Driven Automatic Evolution of Coding-Agent Harnesses (28/04/2026).** `https://arxiv.org/abs/2604.25850` — Sustenta S1 e D1: dez iterações automáticas elevam o pass@1 no Terminal-Bench 2 de 69,7% para 77,0%, superando o Codex-CLI desenhado por humanos (71,9%). *Confiabilidade: média — preprint, resultado único, benchmark único, equipe única; forte como sinal, fraco como estado da arte.*
18. **arXiv 2606.20683 — From Question Answering to Task Completion: A Survey on Agent System and Harness Design (14/06/2026).** `https://arxiv.org/html/2606.20683v1` — Sustenta a formulação central de D1: harness definido como a infraestrutura de runtime em seis componentes acoplados (observação, contexto, laço de controle, ação, estado/artefatos, verificação/governança), e a tese de que a qualidade do agente emerge da interação entre modelo, runtime, tarefa e avaliação — não do modelo isolado. *Confiabilidade: média-alta — survey abrangente de 2020 a 2026, mas preprint sem revisão por pares declarada.*
19. **The Register — Curl shutters bug bounty program to stop AI slop (21/01/2026).** `https://www.theregister.com/2026/01/21/curl_ends_bug_bounty/` — Sustenta S2 e `e3.1`: o projeto curl encerrou em janeiro de 2026 o bug bounty que mantinha desde 2019; na semana anterior ao anúncio recebeu sete submissões, nenhuma descrevendo vulnerabilidade real; o mantenedor declarou querer remover o incentivo a submissão mal pesquisada, gerada por IA ou não. *Confiabilidade: média-alta — imprensa especializada citando o mantenedor diretamente; é **um** projeto, não uma amostra.*

## 12. Anexo — o levantamento bruto

### Candidatos descartados, com ficha resumida

| Candidato | Maturidade | Ruptura | Veredito e motivo |
|---|---|---|---|
| **Autocompletar de IDE / chat que explica código** | maduro | baixo | **Antecedente maduro.** Régua da disciplina e evidência (84% de adoção, fonte 6). Infraestrutura de H1. |
| **"A revisão vira o gargalo"** | — | alto | **Rebaixado a efeito** (`e3`, `e3.1`). É consequência de uma capacidade, não uma capacidade. Erro real cometido e corrigido (§8.2). |
| **Produtos nomeados no enunciado** (`claude-code`, `cline`, `aider`, `plandex`, `opencode`, `kilocode`, `junie`, `crush`, `agentty`, `axe`, Copilot CLI, Gemini CLI) | emergente | — | **Produto não é disrupção** (§2.3 da skill). São manifestações de D1 e D2. A capacidade estrutural por trás deles é que virou raiz. |
| **Orquestração multi-agente como unidade de organização do trabalho** (`three-man-team`, `oh-my-agent`, `OpenAgentsControl`, `HarnessRouter`) | experimental | alto se confirmado | **Rebaixado a hipótese.** Melhor fonte obtida é conceitual, não medida em campo (fonte 15). Candidata mais forte a virar raiz numa revisão futura — ver "hipóteses alternativas". |
| **"O custo de escrever código cai a zero"** | — | alto se verdadeiro | **Descartado por falta de evidência.** Nenhuma fonte lida sustenta trajetória de custo de inferência. É premissa do enunciado do tema, não achado. |
| **Auditoria de processo do agente como mercado** (`vibe-log`, `claude-tap`) | experimental | médio | **Mantido como efeito** (`e4.1`), não como raiz: depende inteiramente de D2 ocorrer. Fronteira com o tema 3 da disciplina. |
| **SWE-bench / Terminal-Bench como instrumento de medida da curva** | maduro como prática | baixo | **Instrumento, não disrupção.** Terminal-Bench entrou como evidência (fonte 1); SWE-bench **não entrou**, porque nenhuma página de placar foi aberta. |
| **Contenção e segurança do agente** | emergente | alto | **Fora de escopo** — é o tema 2 da disciplina. Aparece como `e4` apenas onde toca o ofício. |
| **Memória e observabilidade do agente** | emergente | alto | **Fora de escopo** — tema 3 da disciplina. |
| **Substituição de programadores por IA** | — | — | **Descartado.** Nenhuma fonte lida sustenta. A fonte 14 mede lacuna de emprego em jovens de 22 a 25 anos em ocupações expostas, declara explicitamente que são padrões descritivos e **não** trata de desenvolvedores de software na página lida. |

### Caminhos causais cortados

| Aresta proposta | Por que foi cortada |
|---|---|
| "Código barato → mais projetos → mais empresas de software" | Não consegui completar "se A, então B fica mais provável **porque** ___" sem supor demanda elástica, sobre a qual não há fonte. |
| "Agente escreve testes → qualidade sobe" | Mecanismo circular: o mesmo sistema que produz a mudança produz a prova de que ela está certa. A aresta assume o que deveria demonstrar. |
| "Mais agentes → mais throughput aceito" | Cortada e **transformada em hipótese do experimento** (§10). É precisamente o que não se sabe. |
| "Skill open standard → menos aprisionamento a fornecedor" | A aresta contrária tem mecanismo igualmente plausível (extensão proprietária sobre padrão aberto). Virou `e2.1.1`, com a ambiguidade preservada. |
| "Incidente com agente → regulação específica de agente" | O CRA (fonte 9) já responsabiliza o fabricante sem mencionar agente. A aresta pressupõe uma lacuna que pode não existir. Virou `e4.1.1`, mais estreito: repartição de responsabilidade entre especificar, aprovar e operar. |
| "Junior desaparece → falta sênior em 2035" | Fora do horizonte e sem fonte. Mencionada como consequência de `e3.1.1` na prosa, fora da roda. |

### Buscas e leituras sem resultado

| Tentativa | Resultado |
|---|---|
| `media.defense.gov` — guia de segurança de MCP, jun/2026 | **HTTP 403.** Seria a melhor fonte para `e4`. Não citada. |
| `thenewstack.io/ai-generated-code-crisis/` | Página devolveu navegação, não o artigo. As três afirmações que dependiam dela (coletivo Python encerrado; 1 em 10 PRs legítimo; PRs de IA com 1,7× mais problemas) **foram descartadas**. |
| Placar de SWE-bench Verified | Apareceu em resumo de busca com números altos e nomes de modelo. **Nenhuma página aberta, nenhum número usado.** |
| Dado brasileiro sobre uso de agentes por desenvolvedores | Não encontrado. O que existe é adoção corporativa geral (fonte 16). Lacuna declarada. |
| Custo de inferência de sessão longa, série temporal | Não encontrado em fonte primária. Lacuna que afeta `e5` diretamente. |
| Números em português sem origem ("+55% de produtividade"; "30% dos criadores de agentes não programam") | Sem fonte primária acessível. **Descartados.** |

### Classificações de maturidade registradas

| Capacidade | Maturidade | Ruptura | Base |
|---|---|---|---|
| Assistência de IA no editor | maduro | baixo | fonte 6 (84%), fonte 7 (90%) |
| Agente que age no ambiente | emergente | alto | fontes 1, 11, 12 |
| Skill / harness como artefato portável | emergente | alto | fontes 5, 18 |
| MCP como camada de integração | emergente, consolidando | médio-alto | fonte 4 |
| Especificação executável | emergente com partes experimentais | alto | fontes 5, 10 |
| Harness auto-otimizado | experimental | alto se generalizar | fonte 17 |
| Orquestração multi-agente | experimental | indeterminado | fonte 15 (conceitual) |
| Verificação automatizada como produto | emergente | médio | fonte 7 (inferência), sem fonte direta |

### Contrassinais reunidos (consolidado)

1. Ensaio randomizado: 19% mais lentos (fonte 2). Sem substituto confiável até hoje (fonte 3).
2. Agente é minoria de uso: 14,1% diário; 37,9% sem planos (fonte 6).
3. Confiança caindo: 46% desconfiam da acurácia; 3,1% confiam muito (fonte 6).
4. Depuração de código de IA relatada como mais demorada por 45,2% (fonte 6).
5. Instabilidade de entrega sobe junto com o throughput (fonte 7).
6. Percepção divergindo da medida: 80% acham que ganharam produtividade (fonte 7) contra o único ensaio controlado (fonte 2).
7. Histórico contra D3: CASE, MDA e UML executável foram adotados, viraram cerimônia e foram abandonados.
8. O dever de suporte declarado do CRA (fonte 9) contradiz `e5.1.1` (software descartável por ciclo).

### Hipóteses alternativas ao mapa

**H-alt 1 — Não é ruptura, é revelação.** A revisão sempre foi o gargalo; a programação agêntica
apenas a tornou visível ao aumentar o numerador. Se verdadeira, o tema é importante e **não é
disruptivo** — a segunda condição de refutação dada na abertura. O experimento da §10 tem um braço
desenhado exatamente para testar isto (razão aceita/gerada igual entre C e A).

**H-alt 2 — A unidade de trabalho vira a equipe de agentes, não o par pessoa-agente.** É a hipótese
que substituiria D2 por algo mais forte. Foi rebaixada por falta de evidência medida (fonte 15).
Se aparecer estudo de campo com números, este mapa precisa ser refeito, não corrigido.

**H-alt 3 — O modelo absorve o harness.** W3. Derruba D1 inteira e doze efeitos.

**H-alt 4 — O freio é o custo, não a capacidade nem a regulação.** Sustenta o cenário provável.
Não há fonte lida sobre custo — é a maior lacuna declarada desta análise.

### Observações que não entraram no mapa

- **A fronteira entre "skill" e "software" é a pergunta jurídica interessante do período, e não
  entrou.** Um `SKILL.md` que instrui um agente a alterar sistemas é texto ou é produto com
  elementos digitais para efeito do CRA? Não achei fonte que discutisse isso e não inventei uma.
- **O formato de skill é, na prática, uma linguagem de programação em prosa** — com efeitos
  colaterais, sem tipos, sem determinismo e sem depurador. A analogia é forte demais para uma
  análise que precisa de evidência, e por isso ficou fora da roda.
- **O enunciado do tema afirma que "escrever código deixou de ser o gargalo".** Depois de dezenove
  fontes, a formulação que a evidência sustenta é mais estreita: *o gargalo mudou de lugar dentro do
  ciclo, e ninguém mediu se o ciclo inteiro ficou mais rápido.*
- **Autocrítica de método.** As classificações de maturidade deste anexo herdam o problema que o
  autor da skill documentou em `DUVIDAS.md`: disponibilidade comercial e existência de padrão não
  são, sozinhas, evidência de maturidade operacional. Onde marquei "emergente" apoiado em vitrine de
  adoção (linhas 3 e 4 da tabela de maturidade), a classificação **permanece condicionada** a
  evidência de uso repetido, desempenho e estabilidade que as fontes lidas não fornecem.
