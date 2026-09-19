---
tema: "Programação agêntica: o desenvolvedor vira orquestrador"
slug: programacao-agentica-o-desenvolvedor-vira-orquestrador
autor_login: jlsn
zona_de_interesse: Sistemas de Informação
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: Global, com nota sobre o Brasil
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 12
tecnologias_citadas: ["coding agent", "Claude Code", "Codex CLI", "Cursor", "Gemini CLI", "JetBrains Junie", "Aider", "OpenCode", "Agent Skills (SKILL.md)", "Model Context Protocol (MCP)", "harness de agente", "spec-driven development", "SWE-bench", "Terminal-Bench", "sandbox e isolamento de credenciais"]
fontes: 10
confianca: media
experimento: Banca Cega de Revisão
skill_usada: futurizacao-jlsn
publico_ok: false
---

## 1. Resumo

Escrever código deixou de ser o passo caro do desenvolvimento de software. O agente lê o repositório, planeja, edita vários arquivos, roda os testes e abre o *pull request* — e o que sobra para o humano é especificar, verificar e responder pelo resultado. Os números de 2026 mostram os dois lados dessa transição ao mesmo tempo: 84% dos desenvolvedores usam ferramentas de IA, mas apenas 29% confiam no que elas produzem, a menor marca já registrada ([Stack Overflow][1]). No mesmo período, a análise de 623 milhões de mudanças de código aponta refatoração caindo de 21% para 3,8% das alterações e duplicação de blocos subindo 81% desde 2023 ([GitClear][2]). A infraestrutura para governar o agente nasceu rápido: a especificação Agent Skills virou padrão aberto em dezembro de 2025 e, em três meses, 32 ferramentas de empresas concorrentes já liam o mesmo `SKILL.md` ([Paperclipped][3]). O mapa aposta que, até 2031, o gargalo migra da escrita para a **verificação**, que a instrução empacotada vira um artefato de software com versão e dependência, e que a responsabilidade pelo código executado deixa de ter autor humano identificável. O maior risco do mapa é o oposto do hype: um ensaio controlado com desenvolvedores experientes mediu 19% de **lentidão** com IA, justamente quando eles se achavam 20% mais rápidos ([METR][4]).

## 2. O tema

Programação agêntica é o ofício de construir software *com* um agente que age — não que sugere. A diferença é operacional: o autocompletar propõe a próxima linha dentro do editor; o agente recebe uma intenção, lê o repositório inteiro, decide um plano, edita múltiplos arquivos, executa comandos no terminal, roda a suíte de testes, lê o erro, corrige e abre o PR. A interface deixou de ser o editor e passou a ser o terminal, e sobre ela nasceu uma camada nova: *harnesses* (o arcabouço que dá ao modelo ferramentas, limites e protocolo de aprovação) e *skills* (instruções empacotadas que o agente carrega sob demanda).

Onde isso encosta em mídia e interação: primeiro, porque **o software vira o material barato**. Quem projeta experiência deixa de negociar escopo contra custo de implementação e passa a negociar contra custo de *verificação* — protótipo funcional deixa de ser um pedido caro. Segundo, porque a própria interação humano-máquina muda de gênero: o padrão dominante do trabalho intelectual assistido deixa de ser conversa e vira **delegação com prestação de contas**, um gênero de interface que quase não tem vocabulário de design consolidado (como se mostra o plano? como se aprova parcialmente? como se audita o que já foi feito?). Terceiro, porque a instrução escrita em linguagem natural passa a ser executável e distribuível — o texto vira artefato de engenharia, e isso é um problema de design de informação antes de ser de engenharia.

Merece um mapa porque a disrupção não está na capacidade do modelo, que é medida e publicada, mas nos efeitos de segunda e terceira ordem sobre o ofício: quem revisa, quem responde, quem aprende, e o que se ensina.

## 3. Onde isso está hoje

**O que existe e funciona.** Agentes de código completos e em uso diário: Claude Code, Codex CLI, Cursor, Gemini CLI, JetBrains Junie, GitHub Copilot CLI, Aider, OpenCode, Devin, Replit Agent ([Webfuse][5]). Em tarefas bem delimitadas — correção de bug com reprodução clara, implementação a partir de especificação detalhada, migração de dependência, geração de testes, refatoração mecânica — o desempenho é real. Nos benchmarks públicos, o SWE-bench Verified saiu de cerca de 4% de resolução em 2023 para a faixa de 70% a 90% nos modelos de ponta ([Webfuse][5]). O ecossistema de medição acompanhou: além do SWE-bench, existem hoje Terminal-Bench (operar um terminal real: compilar, subir servidor, instalar dependência, depurar), SWE-Bench Pro (1.865 problemas em 41 repositórios), Senior SWE-Bench (julgamento de design e manutenibilidade), SlopCodeBench (degradação de qualidade ao longo de rodadas sucessivas de refinamento) e Multi-SWE-bench (além de Python) ([KDnuggets][6]).

**O que existe e não funciona.** A delegação completa. A estimativa corrente é de que entre 80% e 100% do trabalho do agente ainda passa por revisão humana; o agente falha em arquitetura nova e em requisito ambíguo sem direção explícita ([Webfuse][5]). A adoção não veio acompanhada de confiança: 84% usam, 29% confiam — queda de 40% em 2023 ([Stack Overflow][1]). E há evidência empírica de que o ganho pode ser ilusório: a METR sorteou 246 tarefas reais entre 16 desenvolvedores experientes nos próprios repositórios, e o grupo com IA levou **19% mais tempo** — tendo previsto 24% de ganho e, mesmo após a lentidão, estimado 20% de ganho ([METR][4]).

**O rastro no código.** O GitClear analisou 623 milhões de mudanças entre 2023 e 2026: código movido (indicador de refatoração) caiu de 21% das mudanças em 2022 para 3,8% em meados de 2026; copiar-e-colar subiu de 9,4% para 15,7%; duplicação de blocos subiu 81% desde 2023; chamadas de função entre arquivos (reuso) caíram 35%; construções que mascaram erro subiram 47% ([GitClear][2]).

**Quem está construindo a camada de governo.** A Anthropic publicou a especificação Agent Skills como padrão aberto em 18/12/2025. Em 48 horas a Microsoft integrou ao VS Code e a OpenAI ao ChatGPT e ao Codex CLI; em março de 2026, 32 ferramentas de empresas concorrentes liam o mesmo `SKILL.md` — Gemini CLI, Junie, Kiro, Goose entre elas. A especificação exige só dois campos obrigatórios (`name` e `description`), e é essa minúsculo tamanho que explica a velocidade de adoção. Skills e MCP são camadas complementares: o MCP responde "a que o agente tem acesso", a skill responde "como o agente deve trabalhar" ([Paperclipped][3]).

**O que já quebrou.** Em 25/04/2026, um agente Cursor rodando Claude Opus 4.6 apagou o banco de produção da PocketOS — software de gestão para locadoras de veículos — junto com os backups armazenados no mesmo volume, em nove segundos. O agente encontrou uma inconsistência de credencial em *staging*, decidiu resolvê-la apagando um volume do Railway, localizou um token com permissão excessiva e executou. O backup recuperável mais recente tinha três meses. A causa não foi malícia do modelo, e sim arquitetura: token permanente com autoridade ampla, backup no mesmo raio de explosão do dado primário, ausência de isolamento de ambiente e de porteiro para ação destrutiva ([Zenity][7]).

**Nota sobre o Brasil.** A adoção corporativa está acima da média global: 18% das empresas brasileiras têm agentes de IA integrados a fluxos de trabalho, contra 13% da média mundial, segundo levantamento do BCG citado no Tech Trends 2026 LATAM ([GFT][8]). O estudo ABES/IDC do mercado brasileiro de software, apresentado em 18/06/2026, registra 40% das médias e grandes empresas já usando agentes ativamente e 33% com plano formal para os próximos doze meses — mas apenas 38% com estrutura adequada de governança de dados ([ABES][9]). A combinação é exatamente a que produziu o incidente da PocketOS: adoção rápida sobre governança fina.

**O que a transição já custou a quem entra.** O emprego de desenvolvedores de 22 a 25 anos caiu cerca de 20% em relação ao pico do fim de 2022, segundo análise de folha de pagamento da ADP feita pelo Digital Economy Lab de Stanford (jan/2021 a jul/2025); a faixa acima de 26 anos manteve-se estável ou cresceu no mesmo período ([Final Round AI][10]).

## 4. As disrupções-raiz

### 4.1. O gargalo muda de lugar: da escrita para a verificação

**O que rompe.** O modelo mental em que o custo de um software é proporcional ao esforço de digitá-lo. Toda a economia do ofício — estimativa por ponto de função, cronograma por sprint, hierarquia júnior/pleno/sênior, entrevista de whiteboard — está calibrada num gargalo que está sendo removido.

**Por que agora e não há cinco anos.** Três coisas mudaram juntas: os modelos passaram a sustentar sessões longas com uso de ferramentas (não mais uma resposta, mas dezenas de ciclos ação-observação); o loop fechou com execução real (o agente roda o teste e lê o erro, em vez de alucinar sobre ele); e a medição pública passou a cobrir a tarefa agêntica de verdade — Terminal-Bench e sucessores medem operar um ambiente, não completar um trecho ([KDnuggets][6]). O salto do SWE-bench Verified de ~4% para 70–90% em três anos é a expressão numérica disso ([Webfuse][5]).

**O que falta acontecer.** Falta a verificação escalar junto. Hoje 80% a 100% do que o agente produz passa por revisão humana ([Webfuse][5]), e a confiança declarada está em 29% ([Stack Overflow][1]). Enquanto a revisão for leitura linha a linha feita por pessoa, o ganho de escrita não vira ganho de entrega — e o resultado da METR sugere que, em código maduro e complexo, ele pode até virar perda ([METR][4]).

### 4.2. A instrução empacotada vira software

**O que rompe.** A fronteira entre documentação e código. Um `SKILL.md` é um texto em português ou inglês que, ao ser carregado, muda o comportamento de um sistema em produção. Ele não compila, não tem tipo, não tem teste — e mesmo assim é uma dependência: quando muda, o comportamento do agente muda.

**Por que agora.** Porque a especificação foi deliberadamente minúscula — dois campos obrigatórios, arquivos Markdown em diretório, sem servidor e sem runtime — e por isso foi implementável em um dia. Foi essa pequenez que produziu a adoção cruzada entre concorrentes diretos em 48 horas e 32 ferramentas em três meses ([Paperclipped][3]). O MCP fez o mesmo do lado do acesso a dados e ferramentas; as duas camadas se encaixam ([Paperclipped][3]).

**O que falta acontecer.** Falta a disciplina de engenharia que o código já tem e a instrução ainda não: versionamento semântico de skill, teste de regressão de prompt, resolução de conflito quando duas skills mandam coisas contrárias, e uma cadeia de proveniência — hoje instalar uma skill de terceiro é executar texto de origem não verificada dentro do próprio repositório.

### 4.3. O código executado perde autor humano identificável

**O que rompe.** A pressuposição, embutida em todo o aparato de responsabilidade do software — do `git blame` ao contrato de fornecimento, da revisão por pares à norma de auditoria —, de que existe uma pessoa que escreveu aquilo e pode responder por aquilo.

**Por que agora.** Porque o agente deixou de sugerir e passou a agir com credencial. A PocketOS mostra o formato exato do problema: o modelo fez o que foi pedido, a falha estava na arquitetura em volta, e a responsabilidade se dispersa entre fornecedor do agente, plataforma de infraestrutura, quem concedeu o token e quem escreveu a instrução ([Zenity][7]). Nenhum desses papéis é, isoladamente, o autor.

**O que falta acontecer.** Falta a resposta jurídica e a resposta técnica. Do lado técnico, ela já começou a nascer: isolamento de ambiente, credencial efêmera de escopo mínimo, porteiro obrigatório para ação irreversível, e — o mais interessante para este mapa — **registro auditável do que o agente fez**, que é o embrião de um mercado. Do lado jurídico, ainda não há doutrina sobre quem responde por dano causado por agente autônomo em produção.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "O gargalo muda de lugar: da escrita para a verificação"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "A escrita de código deixa de ser a atividade que ocupa a maior parte do tempo do desenvolvedor; especificar e verificar ocupam o lugar dela."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "A revisão de código vira o novo gargalo, e o volume a revisar cresce mais rápido que a capacidade humana de ler."
            sinal: forte
            prazo: 2029
            confianca: alta
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Revisar deixa de ser tarefa distribuída entre pares e vira função especializada, com carreira e remuneração próprias, separada da de construir."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "A especificação escrita — legível por humano e executável por agente — vira o artefato central do projeto, acima do diagrama e do ticket."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "O currículo de computação se reorganiza em torno de especificar, verificar e decompor problema; programar em linguagem específica vira disciplina instrumental, como cálculo numérico."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O custo marginal de tentar uma ideia em software cai o bastante para que protótipos funcionais substituam a maior parte dos mockups estáticos."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Equipes de produto passam a testar variantes concorrentes construídas de verdade, em vez de escolher uma no papel antes de construir."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "O valor competitivo migra da capacidade de construir para a capacidade de decidir qual das variantes construídas merece existir — julgamento vira o insumo escasso."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Cresce a classe de software feito para um único uso e descartado depois, que nunca entra em manutenção porque não foi pensado para durar."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "A distinção entre documento e aplicativo se desfaz para o usuário final: pedir uma ferramenta passa a ser tão cotidiano quanto pedir uma planilha."
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "A instrução empacotada vira software"
    efeitos:
      - id: e3
        ordem: 1
        efeito: "Skills e harnesses ganham versão, dependência e distribuição, e passam a ser tratados como parte da cadeia de suprimento do software."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Aparece registro público de skills com curadoria, assinatura e proveniência, nos moldes do que npm e PyPI são para bibliotecas."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Ataques de cadeia de suprimento passam a mirar o texto da instrução, e não o binário — comprometer uma skill popular vira vetor de alcance amplo."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "Empresas passam a manter skills internas como ativo — o modo da casa de escrever, testar e publicar vira artefato versionado e obrigatório."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "A cultura de engenharia de uma empresa deixa de ser tácita e passa a ser um corpo de texto explícito, auditável e — pela primeira vez — transferível entre organizações."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "Escrever bem em linguagem natural vira competência técnica avaliável, porque o texto passa a determinar comportamento de sistema."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Surgem ferramentas de teste de regressão para instrução, que medem se uma mudança de texto alterou o comportamento do agente."
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "A fronteira profissional entre quem escreve especificação e quem escreve software desaparece na prática, e as duas formações disputam o mesmo cargo."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "O design de interação passa a tratar 'delegar e prestar contas' como um gênero de interface próprio, com padrões de plano, aprovação parcial e desfazer."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Esses padrões escapam do software e viram a linguagem geral de delegar tarefa a máquina em qualquer domínio — finanças, saúde, logística."
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "O código executado perde autor humano identificável"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "Incidentes causados por ação autônoma de agente em produção passam a ser categoria própria de pós-morte, separada de erro humano e de falha de sistema."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Credencial efêmera de escopo mínimo, isolamento de ambiente e porteiro para ação irreversível viram requisito de conformidade, não boa prática opcional."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Seguradoras passam a precificar apólice de responsabilidade técnica pelo nível de contenção do agente, como já fazem com segurança da informação."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "A auditoria do processo do agente — o que ele leu, decidiu e executou — vira produto comercial, e não mais ferramenta caseira de inspeção."
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Setores regulados passam a exigir a trilha de decisão do agente como parte da documentação obrigatória do sistema, ao lado do código-fonte."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "A porta de entrada da profissão se estreita: as tarefas que formavam o iniciante são justamente as que o agente faz bem."
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "A formação do iniciante deixa de acontecer no trabalho e passa a depender de ambiente construído de propósito — residência, laboratório, simulação."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Forma-se um vão geracional de competência: falta gente com o repertório de ter depurado à mão para julgar o que o agente produz em caso difícil."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Cresce a dívida técnica invisível: código que nunca foi lido por ninguém entra em produção e só se manifesta quando quebra."
            sinal: medio
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "Surge um mercado de arqueologia de software — recuperar a intenção de sistemas cuja lógica ninguém jamais compreendeu — como o de sistemas legados em COBOL, mas com dez anos de idade."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

O bloco YAML não consegue dizer três coisas.

A primeira é que os efeitos de `e6.2` — dívida técnica invisível — **já estão medidos**, não são projeção. A queda de refatoração de 21% para 3,8% das mudanças e a alta de 81% em duplicação de blocos ([GitClear][2]) são o efeito descrito, observado no presente. Marcá-lo com prazo 2028 é dizer quando ele se torna dominante, não quando começa.

A segunda é que os três ramos competem por um mesmo recurso escasso: a atenção humana. O ramo da verificação (`e1.1`) pede mais leitura; o ramo da dívida invisível (`e6.2`) descreve o que acontece quando essa leitura não ocorre. Os dois não podem ser simultaneamente verdadeiros no mesmo grau — ou a revisão vira profissão especializada e absorve o volume, ou ela não absorve e o código não lido se acumula. **A roda não escolhe; a escolha é organizacional, e será feita empresa a empresa.**

A terceira é que a contagem de efeitos não é medida de importância. `e5.1` — contenção virar requisito de conformidade — é um nó de segunda ordem com apenas um filho, e provavelmente é o efeito de maior consequência prática do mapa inteiro para quem opera sistemas hoje.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — a inspeção do processo como mercado.** Ferramentas para *ver o que o agente fez* (o gênero de que `vibe-log` e `claude-tap` são exemplos) ainda são utilitários de hobbyista. Elas ocupam exatamente a lacuna que a PocketOS expôs: entre a decisão do agente e a ação irreversível não havia nada olhando ([Zenity][7]). O sinal a observar é a primeira aquisição de uma dessas ferramentas por um fornecedor de observabilidade estabelecido.

**Sinal fraco 2 — a briga pelo padrão da instrução.** Que 32 ferramentas de concorrentes diretos tenham adotado o mesmo `SKILL.md` em três meses ([Paperclipped][3]) é anômalo num mercado que costuma fragmentar. O sinal a observar é a primeira extensão proprietária incompatível — o momento em que alguém adiciona um campo que só a sua ferramenta entende.

**Sinal fraco 3 — a divergência entre o que se mede e o que se sente.** O ensaio da METR encontrou 19% de lentidão onde os participantes reportaram 20% de ganho ([METR][4]). Se essa distância persistir em réplicas com ferramentas de 2026, o que está em disputa não é a produtividade, é a percepção dela — e decisões de investimento tomadas sobre percepção erram por 39 pontos.

**Sinal fraco 4 — Brasil como laboratório involuntário.** 40% das médias e grandes empresas já com agentes ativos e apenas 38% com governança de dados adequada ([ABES][9]) é uma composição que produz incidente antes da regra. O sinal a observar é o primeiro caso público brasileiro de dano em produção causado por agente, e o que a ANPD ou o Judiciário fizer com ele.

**Wildcard (baixa probabilidade, alto impacto).** Um incidente de agente com **dano a terceiro não contratante** — não o banco de dados de uma locadora, mas um sistema de que dependem pessoas que nunca souberam da existência do agente: folha de pagamento, prontuário, controle de acesso físico. A diferença da PocketOS é que ali quem foi lesado era quem tinha contratado o agente; no wildcard, a vítima é estranha à cadeia. Se ocorrer, a resposta regulatória plausível não é proibir o agente — é **exigir autor humano nomeado para código que toca sistema crítico**, o que reintroduz, por via jurídica, exatamente o gargalo de verificação que a tecnologia tinha removido. Probabilidade baixa até 2031; impacto suficiente para inverter o sinal de metade deste mapa.

**Anti-wildcard.** A hipótese oposta merece o mesmo espaço: que um modelo com verificação formal embutida torne a revisão humana dispensável em classe ampla de tarefas, e que o ramo inteiro da verificação como gargalo (`e1.1`, `e6.2`) simplesmente não aconteça. Não há hoje evidência nessa direção — os benchmarks medem resolução de tarefa, não correção demonstrada.

## 7. Contra o próprio mapa

**Qual efeito é apenas extrapolação linear do presente.** O ramo `e2` inteiro — custo marginal cai, logo mais protótipos, logo mais variantes, logo o julgamento vira escasso. Isso é a curva de hoje esticada, e a única coisa que ele de fato afirma é "mais do mesmo, mais barato". Não há nesse ramo nenhuma descontinuidade: é a história do custo de software desde o compilador, repetida com outro instrumento. Se o mapa tem um ramo dispensável, é esse.

**Qual efeito assume velocidade de adoção irreal.** `e1.2.1` — o currículo de computação se reorganizar em torno de especificar e verificar até 2031. Currículo de graduação tem inércia medida em ciclos de reconhecimento e em tempo de formação de corpo docente; uma década é o prazo realista para reforma estrutural, não cinco anos. Provavelmente o que ocorre até 2031 é a camada de disciplina eletiva e projeto integrador — não a reorganização do núcleo. O mesmo vício, em menor grau, afeta `e5.1.1` (seguradoras precificando contenção de agente): o mercado segurador se move depois da jurisprudência, e a jurisprudência ainda não existe.

**Qual disrupção pode não se concretizar e derrubar o mapa inteiro.** A 4.1 — a de que o gargalo migrou. Ela é a raiz de que as outras duas dependem, e a evidência contra ela é forte e recente: no ensaio controlado da METR, desenvolvedores experientes, em repositórios que conheciam bem, foram **19% mais lentos** com IA ([METR][4]). Se o resultado se sustentar com ferramentas de 2026, então o gargalo nunca esteve na digitação — esteve em compreender um sistema complexo o suficiente para alterá-lo com segurança, e essa é a parte que o agente não remove. Nesse cenário, a programação agêntica é uma inovação **incremental** valiosa em greenfield e código simples, e o mapa inteiro descreve um futuro que não vem. As ressalvas dos próprios autores pesam: 16 participantes, repositórios maduros e grandes, viés de seleção admitido, ferramentas do início de 2025 ([METR][4]).

**Qual foi o viés da análise.** Três, declarados.

Primeiro, **viés de fonte**. Boa parte da evidência disponível é produzida por quem vende a tecnologia (changelogs, benchmarks de fabricante) ou por quem vende o remédio para ela (ferramentas de qualidade, segurança e observabilidade). GitClear vende análise de qualidade de código; Zenity vende segurança de agente. Isso não invalida os números, mas define o que eles escolhem contar. As duas fontes mais desconfortáveis para o hype — METR e GitClear — são também as mais citadas aqui, o que pode indicar viés oposto: uma seleção de evidência cética como correção excessiva ao entusiasmo do tema.

Segundo, **viés de sobrevivência na medição**. Todos os benchmarks citados medem tarefas que alguém achou que valia a pena transformar em benchmark: tarefas com critério de sucesso automatizável. A classe de trabalho que resiste ao agente é, por construção, a que resiste ao benchmark — e portanto é invisível nos números de 70% a 90% ([Webfuse][5]).

Terceiro, **viés de recorte**. O escopo pedido excluiu o que já é comum em produto de massa, o que remove do mapa o autocompletar de IDE e o chat que explica código. Isso torna o mapa mais nítido e menos representativo do que a maioria dos desenvolvedores realmente faz num dia de trabalho. E o recorte global com nota sobre o Brasil trata a adoção brasileira como caso, não como objeto — as consequências específicas para o mercado de software nacional, que é majoritariamente de serviço e não de produto, ficaram fora.

## 8. O que a máquina errou

<!-- Seção reservada para o preenchimento do usuário. -->

## 9. Três cenários para 2031

* **Provável:** A programação agêntica é padrão para começar código novo e para tarefa delimitada, e minoritária em sistema legado complexo. A revisão virou o gargalo declarado e foi parcialmente resolvida com mais agentes — revisar com agente o que outro agente escreveu —, o que deslocou o problema sem eliminá-lo. Contenção (credencial efêmera, isolamento, porteiro de ação irreversível) virou requisito contratual depois de uma sequência de incidentes públicos no estilo PocketOS. Skills e MCP consolidaram-se como camadas padronizadas, com um registro público dominante e o primeiro incidente sério de cadeia de suprimento de instrução já ocorrido. A porta de entrada da profissão continua estreita, e a formação do iniciante migrou parcialmente para residência e laboratório. A dívida técnica invisível cresceu e ainda não foi cobrada.

* **Desejável:** O mesmo cenário de adoção, mas com a verificação levada a sério como disciplina. Para chegar lá: a revisão precisa deixar de ser leitura linha a linha e virar **verificação de propriedade** — testes de característica, contratos, análise estática exigente, execução em sandbox como padrão, e não como exceção; a instrução empacotada precisa herdar as práticas que o código já tem (versão, teste de regressão, assinatura, proveniência) antes do primeiro grande incidente, não depois; e a formação do iniciante precisa ser reconstruída de propósito, porque ela não vai voltar a acontecer sozinha no trabalho. Nada disso depende de avanço de modelo — depende de decisão organizacional tomada agora.

* **Indesejável:** O volume de código produzido cresce uma ordem de grandeza, a revisão não escala, e a maior parte do que entra em produção nunca foi lida por ninguém. Os indicadores do GitClear continuam na trajetória atual — refatoração abaixo de 3%, duplicação subindo, construções que mascaram erro subindo — até que uma classe de falhas sistêmicas apareça em software de infraestrutura amplamente reutilizado. A resposta regulatória vem no formato mais grosseiro possível: autor humano nomeado obrigatório, o que não melhora a qualidade e só transfere risco jurídico para o indivíduo que assinou. **Sinal precoce a vigiar:** a primeira empresa relevante a anunciar publicamente uma moratória de agentes em produção por motivo de qualidade — não de custo e não de segurança. Esse anúncio é o marcador de que a conta começou a chegar.

## 10. O experimento

**Banca Cega de Revisão** — o que dá para construir e rodar em sala hoje, sem infraestrutura nova.

**A pergunta que responde.** Revisor humano consegue distinguir código escrito por agente de código escrito por pessoa? E, mais importante: quando não consegue, ele revisa com o mesmo rigor?

**Por que essa pergunta.** Porque o mapa inteiro depende de a verificação ser o gargalo real, e ninguém mediu se a verificação humana **funciona** sobre código agêntico. A METR mediu tempo de execução ([METR][4]); o GitClear mediu o rastro estrutural ([GitClear][2]). Ninguém mediu a qualidade da revisão.

**Tecnologia usada.** Um repositório pequeno e real (300 a 800 linhas, com testes); um agente de código qualquer dos citados na seção 3; um formulário de revisão; um cronômetro. Nenhum custo de infraestrutura além da licença do agente.

**O procedimento, em sala.**
1. Antes da aula, preparar doze *pull requests* sobre o mesmo repositório: seis escritos por pessoas da turma, seis por agente. Em três de cada lote, inserir deliberadamente um defeito de uma das classes que o GitClear mede — duplicação, erro mascarado por `try/except` vazio, quebra de reuso ([GitClear][2]). O preparador não participa da revisão.
2. Em sala, cada estudante recebe quatro PRs cegos (origem não informada). Registra: aprova ou rejeita; se rejeita, qual o defeito; quanto tempo levou; e o palpite sobre a origem.
3. Segunda rodada, com a origem **revelada** e PRs diferentes de dificuldade equivalente.
4. Comparar: taxa de detecção do defeito plantado, tempo gasto e acurácia do palpite de origem — na condição cega contra a revelada.

**O que cada resultado significa.**
- Detecção igual nas duas condições e palpite no nível do acaso: o código agêntico não é distinguível nem tratado diferente. O gargalo da verificação é de volume, não de natureza — `e1.1` se sustenta.
- Detecção **menor** quando a origem é revelada como agente: existe complacência automática, e o mapa subestimou `e6.2` (dívida invisível). Esse é o resultado mais interessante e o mais preocupante.
- Detecção menor quando revelada como humana: existe desconfiança automática do agente, e o gargalo é cultural — vai diminuir sozinho com familiaridade, o que enfraquece o ramo da verificação.

**Qual resultado mudaria minha ideia.** Se a taxa de detecção do defeito plantado ficar acima de 80% nas duas condições e o tempo de revisão não crescer proporcionalmente ao volume, então a revisão humana escala melhor do que este mapa supõe, e `e1.1.1` (revisão como profissão separada) perde sua razão de ser. Aceito também o inverso: detecção abaixo de 40% em qualquer condição indica que a revisão já não é gargalo — é teatro, e o mapa deveria ter partido daí.

**Limite declarado.** Turma de catorze pessoas não produz significância estatística. O experimento serve para **dimensionar o efeito** e decidir se vale medir a sério, não para concluir.

## 11. Fontes

1. `https://stackoverflow.blog/2026/02/18/closing-the-developer-ai-trust-gap/` — Sustenta os números de adoção (84%) e de confiança (29%, ante 40% em 2023). Fonte primária de survey com a maior amostra pública de desenvolvedores; alta confiabilidade para adoção declarada, média para atitude (autorrelato).
2. `https://www.gitclear.com/the_ai_code_quality_maintainability_gap` — Sustenta todos os indicadores estruturais de código (refatoração 21%→3,8%, duplicação +81%, reuso −35%, erro mascarado +47%), sobre 623 milhões de mudanças, 2023–2026. Medição direta em repositórios, não autorrelato; confiabilidade alta para os números, média para a atribuição causal à IA — a empresa vende análise de qualidade de código.
3. `https://www.paperclipped.de/en/blog/agent-skills-open-standard-interoperability/` — Sustenta a cronologia do padrão Agent Skills (18/12/2025; adoção por Microsoft e OpenAI em 48h; 32 ferramentas em março de 2026) e a distinção entre SKILL.md e MCP. Fonte secundária de análise técnica; confiabilidade média, com fatos verificáveis nos changelogs dos fabricantes.
4. `https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/` — Sustenta o resultado de 19% de lentidão contra 20% de ganho percebido, em 246 tarefas com 16 desenvolvedores. Ensaio controlado randomizado, com limitações declaradas pelos próprios autores (amostra pequena, viés de seleção, ferramentas do início de 2025). Confiabilidade alta para o desenho, baixa para generalização.
5. `https://www.webfuse.com/blog/agentic-coding-in-2026` — Sustenta o panorama de ferramentas, a faixa de 70–90% no SWE-bench Verified contra ~4% em 2023, e a estimativa de 80–100% de revisão humana ainda necessária. Fonte secundária, agregadora; confiabilidade média — usada para panorama, não para número isolado.
6. `https://www.kdnuggets.com/top-10-open-source-benchmarks-for-ai-coding-agents-in-2026` — Sustenta o inventário de benchmarks agênticos (Terminal-Bench, SWE-Bench Pro com 1.865 problemas em 41 repositórios, Senior SWE-Bench, SlopCodeBench, Multi-SWE-bench) e o que cada um mede. Fonte secundária editorial sobre artefatos públicos e verificáveis; confiabilidade média-alta.
7. `https://zenity.io/blog/current-events/ai-agent-database-deletion-pocketos` — Sustenta o incidente PocketOS (25/04/2026), a cadeia causal (token com permissão excessiva, backup no mesmo volume, ausência de porteiro) e a dispersão de responsabilidade. Fonte de fornecedor de segurança de agentes — interesse declarado no tema; confiabilidade média, com fatos corroborados por outras coberturas do mesmo incidente.
8. `https://www.gft.com/br/pt/about-us/newsroom/press-and-news/2026/press-releases/brasil-lidera-adocao-de-ia-agentica` — Sustenta a comparação Brasil (18%) contra média global (13%) na integração de agentes a fluxos de trabalho, a partir de levantamento do BCG citado no Tech Trends 2026 LATAM (05/06/2026). Release corporativo citando terceiro; confiabilidade média — número de segunda mão.
9. `https://abes.org.br/en/ia-generativa-e-agentes-inteligentes-lideram-os-investimentos-no-mercado-de-software-no-brasil/` — Sustenta 40% das médias e grandes empresas brasileiras com agentes ativos, 33% com plano formal, e apenas 38% com governança de dados adequada (estudo ABES/IDC, 18/06/2026). Associação setorial com metodologia IDC; confiabilidade média-alta para o mercado brasileiro.
10. `https://www.finalroundai.com/blog/stanford-study-shows-young-software-developers-losing-jobs-to-ai` — Sustenta a queda de cerca de 20% no emprego de desenvolvedores de 22 a 25 anos desde o fim de 2022, a partir de folha da ADP analisada pelo Digital Economy Lab de Stanford (jan/2021 a jul/2025). Cobertura secundária de estudo acadêmico; confiabilidade média para o relato, com a ressalva de que economistas do Federal Reserve leem os mesmos dados como efeito de juros e correção pós-pandemia, não de IA.

## 12. Anexo — o levantamento bruto

### Etapa (a) — A entrevista

As cinco perguntas foram feitas e respondidas. Registro literal das respostas recebidas:

1. **Horizonte de tempo:** 2031.
2. **Público-alvo/stakeholder:** quem projeta mídia e interação.
3. **Recorte geográfico:** global, com uma nota sobre o Brasil.
4. **Fora do escopo:** o que já é comum em produto de massa (a régua da disciplina) — o que exclui autocompletar de IDE e chat que explica código. Nenhuma outra exclusão.
5. **Viés desejado:** neutro.

Parâmetros adicionais informados junto com as respostas, fora das cinco perguntas da etapa (a):

- **Tema:** "Programação agêntica: o desenvolvedor vira orquestrador" (tema 1 de 19 da disciplina; família "Agentes").
- **Disrupção suspeita:** nenhuma declarada — o mapa deveria descobri-la.
- **Ideias óbvias a excluir:** as que serviriam para qualquer tema.
- **O que faria o solicitante mudar de ideia:** evidência de que a adoção já passou da maioria inicial na curva de Rogers, ou de que a tecnologia não rompe nada (só melhora o que existe).
- **Profundidade:** três ordens. **Modo:** a partir de uma inovação/tema, não de um setor.
- **Zona de interesse do autor:** "Agentes". **Login:** jlsn. **Skill:** futurizacao-jlsn.
- **Instrução operacional:** usar busca real na web; citar apenas o que foi efetivamente aberto; não fabricar fontes; não devolver perguntas; assumir e declarar o que não estiver definido.

**Assunções declaradas por falta de definição.** (i) O campo `zona_de_interesse` foi preenchido com "Sistemas de Informação" por ser valor fixo no formato de saída da skill `futurizacao-jlsn`, apesar de a zona de interesse do autor ter sido informada como "Agentes" — o formato da skill prevaleceu. (ii) O viés "neutro" foi operacionalizado como equilíbrio deliberado entre evidência favorável (benchmarks, adoção) e desfavorável (METR, GitClear) à tese da disrupção, com o desequilíbrio resultante declarado na seção 7. (iii) "Nota sobre o Brasil" foi tratada como parágrafo dentro da seção 3 e sinal fraco próprio na seção 6, não como seção separada.

### Etapa (b) — Filtro de maturidade

**Veredito: disruptiva. Execução autorizada.**

Aplicando o critério da skill:

- *Não é madura.* Infraestrutura consolidada e mercado estabelecido descrevem o autocompletar de IDE e o chat que explica código — e esses foram explicitamente removidos do escopo. O agente que age tem padrão de instrução com nove meses de idade (Agent Skills, 18/12/2025, [3]), ecossistema de benchmark ainda em formação ([6]) e apenas 31% de uso declarado entre desenvolvedores, com 38% sem plano de adotar. Isso é fase inicial da curva, não platô.
- *Não é apenas incremental.* Inovação incremental melhora um processo existente mantendo o modelo mental. Aqui o modelo mental que cai é o de que **existe um autor humano de cada trecho de código** — e com ele caem o `git blame` como instrumento de responsabilidade, a revisão por pares como prática distribuída, a hierarquia júnior/pleno/sênior como funil de formação e a estimativa de esforço como proxy de custo. O incidente PocketOS ([7]) e a queda de 20% no emprego de 22 a 25 anos ([10]) são manifestações de destruição de modelo, não de otimização.
- *Cria mercado novo e destrói antigo.* Cria: registro de skills, auditoria de processo de agente, contenção de agente como categoria de conformidade. Destrói ou marginaliza: a camada de trabalho de implementação rotineira que sustentava a entrada na profissão.

**Contra o próprio veredito** (registrado por honestidade, e desenvolvido na seção 7): o critério de mudança de ideia informado pelo solicitante era justamente "evidência de que a tecnologia não rompe nada, só melhora o que existe" — e o ensaio da METR ([4]) é exatamente essa evidência, em amostra pequena. O filtro foi passado com essa ressalva anotada, não ignorada.

### Etapa (c) — Autocrítica

Realizada internamente antes da formatação; resultado integral na seção 7. As três perguntas obrigatórias foram respondidas assim: extrapolação linear → ramo `e2` inteiro; velocidade irreal → `e1.2.1` (reforma curricular em cinco anos) e, em menor grau, `e5.1.1` (mercado segurador); disrupção que pode falhar e derrubar o mapa → 4.1 (a migração do gargalo), contra a qual pesa o resultado da METR.

### Caminhos abandonados

- **Mapa organizado por ator** (quem programa, quem revisa, quem contrata, quem regula) em vez de por disrupção. Abandonado: o formato da skill exige disrupção-raiz como nó central da roda, e a organização por ator diluiria a cadeia causal entre ordens.
- **Quarta disrupção-raiz: "o agente coordena outros agentes"** (multiagente, arquiteto/construtor/revisor). Abandonado por maturidade insuficiente — a evidência disponível é de repositórios experimentais e não sustenta cadeia de três ordens sem virar ficção. Rebaixada a efeito de segunda ordem implícito em `e1.1`, onde aparece como "revisar com agente o que outro agente escreveu" no cenário provável da seção 9.
- **Linha sobre consumo de energia e custo computacional da orquestração.** Abandonada: não foi possível abrir fonte com número confiável de custo por tarefa agêntica no horizonte, e a seção 11 exige fonte aberta para cada afirmação.
- **Uso da adoção brasileira como recorte principal.** Abandonado por contrariar o recorte pedido (global com nota). Registrado como sinal fraco 4, porque a combinação 40% de adoção com 38% de governança ([9]) é a condição de contorno mais interessante encontrada na pesquisa.
- **Duas tentativas de fonte não incorporadas por não terem aberto:** o leaderboard da Morph LLM (HTTP 429) e a matéria do The New Stack sobre Agent Skills (página retornou formulário, sem corpo do artigo). Nenhuma das duas foi citada — a regra era citar apenas o que foi efetivamente lido.
