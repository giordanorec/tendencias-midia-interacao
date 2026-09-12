---
tema: "A infraestrutura de confiança: memória, observabilidade e avaliação de agentes"
slug: a-infraestrutura-de-confianca-memoria-observabilidade-e-avaliacao-de-agentes
autor_login: jcsc
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 11
efeitos_ordem_3: 17
tecnologias_citadas: [OpenTelemetry GenAI semantic conventions, Langfuse, LangSmith, Braintrust, Arize Phoenix, MLflow, Weights & Biases Weave, Helicone, Datadog LLM Observability, Mem0, Letta, Zep, Cognee, ByteRover, Engram Specification, Model Context Protocol, LongMemEval, LoCoMo, BEAM, SWE-bench, tau-bench, GAIA, pass^k, LLM-as-judge, Nof1 Alpha Arena, ISO/IEC 42001]
fontes: 12
confianca: media
experimento: "Caixa-preta aberta: uma interface que mostra a trilha do agente e a memória que ele usou, com botão de esquecer, testada em sala com a mesma tarefa rodada cinco vezes"
skill_usada: futurizacao-jcsc
publico_ok: false
---

## 1. Resumo

Quando a máquina fabrica o produto, conferir o produto vira uma forma de medir a máquina — e a pergunta se desloca de "o que foi entregue?" para "por que isso está certo?". Responder isso exige ver o caminho: cada chamada, cada ferramenta, cada tentativa que falhou. Ao mesmo tempo, o agente que lembra entre sessões deixa de ser ferramenta e passa a acumular. Este mapa identifica três rupturas até 2031: a trilha de execução vira o artefato avaliado (e, por consequência, um elemento de interface exposto ao usuário final, não só ao time de engenharia); a memória entre sessões vira o substrato do produto e, na ausência de formato portável — em julho de 2026 nenhum dos sete produtos testados por um levantamento independente permitia reimportar memória em concorrente —, vira também o ativo que prende o cliente; e a avaliação ganha consequência externa, com juiz automático sob escrutínio metodológico, mercado de auditoria projetado em 44% de crescimento anual até 2036 e regulação que exige registro automático de eventos. O mapa é cético quanto ao prazo: a convenção técnica que sustentaria tudo isso (OpenTelemetry GenAI) segue em status "Development" em 2026, e a Europa acabou de adiar em dezesseis meses a obrigação que seria o gatilho regulatório.

## 2. O tema

Este mapa trata de duas faces da mesma infraestrutura: **saber o que o agente sabe** (memória) e **conferir o que ele fez** (observabilidade e avaliação). Não trata de conter o agente — isso é objeto de outro mapa da turma — nem do ofício de programar com ele.

O tema encosta em mídia e interação num ponto que costuma passar despercebido: a trilha e a memória não são apenas telemetria de bastidor. No momento em que o sistema não pode ser lido por inteiro por ninguém, **a explicação do caminho vira parte da interface** — a pessoa precisa de alguma superfície onde ver por que aquilo está certo, com que fonte, em que tentativa. E a memória, sendo o que o sistema "sabe de você", é material de projeto tanto quanto uma tela: quem decide o que entra, o que fica, o que expira e quem mais pode ler está desenhando interação, não só banco de dados.

Merece mapa de futuro, e não levantamento de estado da arte, porque o objeto ainda não tem forma estável. Um levantamento descreveria as ferramentas de hoje; o que interessa aqui é a pergunta estrutural que elas abrem — se a memória é o ativo, ela é sua ou da plataforma? Se a avaliação vira profissão, quem certifica o avaliador? Nenhuma das duas tem resposta em 2026, e ambas serão decididas dentro do horizonte deste mapa.

### A entrevista que precede este mapa

A skill `futurizacao-jcsc` não gera conteúdo antes de perguntar. As cinco perguntas foram feitas e respondidas assim (transcrição literal no anexo, seção 12):

1. **Horizonte temporal** — 2031.
2. **Público-alvo** — quem projeta mídia e interação.
3. **Recorte geográfico** — global, com uma nota sobre o Brasil.
4. **Descartes explícitos** — o que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão.
5. **Viés desejado** — neutro.

Nenhuma pergunta foi respondida com "tanto faz". Duas condições adicionais foram declaradas fora das cinco perguntas e valem como contrato: o que faria o autor mudar de ideia (evidência de que a adoção já passou da maioria inicial na curva de Rogers, ou de que a tecnologia só melhora o que existe sem romper nada) e a exclusão de ideias genéricas — efeitos que serviriam para qualquer tema de tecnologia foram cortados, e os cortes estão listados na seção 12.

Uma assunção declarada: como `recorte_geografico` no formato aceita um valor único, registrei `global` no frontmatter e mantive o Brasil como nota dentro das seções 3, 6 e 9, conforme pedido.

## 3. Onde isso está hoje

**A convenção técnica existe e não está estável.** As convenções semânticas GenAI do OpenTelemetry já modelam a execução de um agente como árvore de spans — `create_agent`, `invoke_agent`, `invoke_workflow`, `plan`, `execute_tool` — e não mais como uma chamada isolada de modelo. O documento oficial de spans de agente carrega, em cada um deles, o selo **Development**: nenhum atributo `gen_ai.*` é estável. Em 12 de junho de 2026 a versão 1.42.0 moveu todas as convenções GenAI para um repositório próprio, que até julho de 2026 não tinha nenhum release com tag — as convenções evoluem no branch principal. A migração já produziu quebras silenciosas: `gen_ai.system` virou `gen_ai.provider.name`, `gen_ai.usage.prompt_tokens` virou `gen_ai.usage.input_tokens`, e painéis apoiados nos nomes antigos apagam sem erro quando a biblioteca é atualizada. O texto de prompt e de resposta deixou de ser capturado por padrão e passou a depender de configuração explícita — melhor para proteção de dados, pior para quem supunha que a trilha já continha o conteúdo.

**O mercado de ferramenta já se organizou em torno disso.** Langfuse, LangSmith, Braintrust, Arize (AX e Phoenix), MLflow, Weights & Biases Weave, Helicone e Datadog disputam a mesma camada. A telemetria de agente saiu do nicho: a instrumentação do GitHub Copilot expõe árvores de span `gen_ai.*` e o Claude Code oferece tracing OpenTelemetry opcional. A fragmentação persiste — Arize Phoenix usa esquema próprio (OpenInference) com camada de tradução —, e o ponto de padronização real acabou sendo o transporte (OTLP), não o vocabulário. Do lado de avaliação, os produtos já se diferenciam pelo julgamento e não pela coleta: Braintrust se posiciona como "eval-first" com um agente que lê trilhas e propõe prompts e scorers; MLflow embute otimização automática de prompt a partir dos resultados de eval.

**Memória virou componente de primeira classe, com números que não se comparam.** O relatório de estado do Mem0 para 2026 informa, para o algoritmo de abril de 2026, 92,5 em LoCoMo e 94,4 em LongMemEval, a cerca de 6,9 mil e 6,8 mil tokens por consulta, com ganhos de +29,6 pontos em raciocínio temporal e +23,1 em multi-hop sobre o algoritmo anterior. O mesmo documento adverte contra a comparação ingênua: a unidade mudou entre 2025 e 2026 (tokens por conversa × tokens por chamada de recuperação), um número de concorrente é marcado com a ressalva de confirmar a fonte antes de publicar, e o benchmark BEAM mostra o limite duro — 64,1 em 1 milhão de tokens caindo para 48,6 em 10 milhões, cerca de 25% de perda a cada ordem de grandeza. O próprio relatório lista como "genuinamente não resolvidos" identidade entre sessões, abstração temporal em escala e envelhecimento da memória. Sobre adoção, ele contrasta a projeção da Gartner (40% das aplicações corporativas integradas a agentes de tarefa até o fim de 2026, contra menos de 5% em 2025) com a medição da McKinsey (23% das organizações escalando de fato um sistema agêntico em ao menos uma função).

**Portabilidade de memória não existe.** Um levantamento independente testou, na primeira semana de julho de 2026, sete produtos — ChatGPT Memory, Claude Projects/memória, memória de canal do Claude Tag, informações salvas do Gemini, regras e memórias do Cursor, Cognee e ByteRover — com um critério simples: simetria de importação, isto é, se um concorrente consegue ler o export e reconstruir a estrutura, não apenas o texto. Os sete falharam. A maioria exporta resumo em texto e perde objetos tipados, relações, validade temporal, atribuição e permissões; Cognee e ByteRover preservam estrutura, mas só as próprias implementações leem o formato de volta. A frase que resume o problema: "um formato que só uma implementação escreve é um dialeto, não um padrão". Há propostas: a Engram Specification (Apache-2.0) como camada de dados e, na literatura, um protocolo de transferência de memória com proveniência verificada (Merkle-DAG com BLAKE3 e assinatura Ed25519, controle de acesso por capacidade, re-hidratação resistente a injeção), com piloto entre Claude, GPT-4 e Gemini relatando continuidade de transferência de 0,83 a 0,92 contra 0,28 a 0,45 sem memória, e detecção de 100% de modificações de campo único. Nenhuma delas é padrão ratificado, e o MCP — que resolveu o acesso a ferramentas — explicitamente não trata de persistência nem de transferência de memória.

**A avaliação está sob suspeita metodológica.** O juiz automático é hoje a forma dominante de avaliar em escala, e é justamente ele que a literatura de 2026 passou a examinar. O trabalho de Norman, Rivera e Hughes, "Reliability without Validity", avalia juízes em três eixos — concordância com humanos, consistência do mesmo juiz em reavaliações e viés — e conclui que concordância moderada convive com inconsistência significativa na reavaliação do mesmo conteúdo: um juiz pode ser estável e ainda assim medir a coisa errada. No plano dos benchmarks de tarefa, a crítica é de saturação e contaminação — no meio de 2026 os modelos de ponta se agrupam dentro de cinco pontos em SWE-bench e o nível 1 do GAIA se aproxima do teto —, e a métrica que ganha tração é `pass^k`, que só conta a tarefa como resolvida se **todas** as k tentativas independentes tiverem sucesso: "um agente que resolve a tarefa 8 vezes em 10 parece forte sob pass@1 e falha feio sob pass^k, porque o usuário real não pode tentar de novo até dar certo".

**A avaliação com consequência real já foi testada.** No Alpha Arena, da Nof1.ai, seis modelos receberam 10 mil dólares de capital real cada e operaram contratos perpétuos de cripto na Hyperliquid com o mesmo prompt e os mesmos dados de entrada. O resultado da temporada 1: Qwen3 Max +22,3% e DeepSeek Chat V3.1 +4,89% no azul; Claude Sonnet 4.5 −30,81%, Grok 4 −45,3%, Gemini 2.5 Pro −56,71% e GPT-5 −62,66% no vermelho. O vencedor operou pouco — cerca de 43 negociações, três por dia —, e o objetivo declarado era retorno ajustado a risco, não ganho bruto.

**A regulação empurra o registro, mas o prazo escorregou.** O Artigo 12 do Regulamento de IA europeu exige que sistemas de alto risco permitam tecnicamente o registro automático de eventos ao longo de toda a vida do sistema, com detalhe suficiente para identificar situações de risco, alimentar o monitoramento pós-mercado e acompanhar a operação. Só que o Digital Omnibus, acordado em 2026, adiou a aplicabilidade das obrigações de alto risco: sistemas autônomos do Anexo III passaram de 2 de agosto de 2026 para **2 de dezembro de 2027**, e IA embarcada em produtos regulados do Anexo I, de 2 de agosto de 2027 para 2 de agosto de 2028. O texto do omnibus não altera o Artigo 12 em si — apenas empurra a data em que ele morde.

**No Brasil, o vetor é a proteção de dados antes do marco de IA.** A ANPD organizou sua atuação em quatro frentes, uma delas dedicada a inteligência artificial e tecnologias emergentes, com o mapa de temas prioritários publicado na Nota Técnica nº 54/2025 e atividades de fiscalização já programadas para o segundo semestre de 2026. A autoridade sinaliza que sistemas de IA devem observar princípios e obrigações já existentes na LGPD, com ênfase em transparência, decisão automatizada, dados sensíveis, governança e gestão de risco. Há também sinal de capacidade instalada: 213 vagas temporárias preenchidas por seleção simplificada no início de 2026 e 200 cargos efetivos de especialista criados pela Lei 15.352/2026, com primeiro concurso de 50 vagas autorizado em junho de 2026.

## 4. As disrupções-raiz

Antes das três: **o que foi recusado, e por quê**.

A régua da disciplina pede descartar o que já é comum em produto de massa; o critério da skill pede recusar o que é padrão de mercado consolidado, amplamente adotado pelos líderes e sem debate técnico real e atual sobre substituição no horizonte. Aplicando os dois, ficaram de fora como **presente, não futuro**:

- **Log, métrica e APM de aplicação** (OpenTelemetry clássico, Datadog, Grafana) — consolidados há uma década.
- **Teste unitário, integração contínua e cobertura** — consolidados; o problema aqui é outro, não o mesmo problema em escala.
- **Versionamento e diff de prompt em arquivo** — prática corrente, sem debate de substituição.
- **Painel de custo e de tokens por chamada** — commodity presente em todo fornecedor.
- **RAG básico** (busca vetorial sobre documentos) — deixou de ser fronteira; virou item de tutorial.
- **Janela de contexto longa como capacidade bruta** — cresce a cada ciclo de modelo sem romper nada, e a própria literatura de 2026 já separa capacidade (contexto) de continuidade (memória); é melhoria, não ruptura.
- **Rastreamento distribuído como técnica** — maduro. O que é emergente é a convenção semântica para agentes, não o tracing.
- **Memória dentro de um único produto** — "o ChatGPT lembra de você" já é comum em produto de massa. Recusado pela régua. O que entra no mapa é o que não é comum: memória que atravessa ferramentas, sessões e fornecedores, com proveniência e permissão.
- **Guardrail de saída por regex ou classificador** — além de relativamente maduro, é objeto do mapa de contenção de agentes, fora deste recorte.
- **Cartão de modelo e ficha de dados** — prática difundida, sem debate real de substituição.

### Disrupção-raiz 1 — A trilha de execução vira o artefato avaliado, e depois vira interface

**O que rompe.** Avaliar software sempre foi avaliar saída: entra X, sai Y, Y está certo. Quando o sistema é não determinístico e o caminho importa mais que o destino — o agente pode acertar por sorte, errar por acerto parcial, ou chegar ao mesmo lugar por caminhos com custos e riscos incomparáveis —, o objeto da avaliação deixa de ser a saída e passa a ser a **árvore de execução**. Isso rompe a relação entre teste e verdade: um conjunto de testes que passa deixa de significar "o sistema está correto" e passa a significar "esta amostra de caminhos foi aceitável".

**Por que agora e não há cinco anos.** Porque só em 2026 o modelo de dados existe: a convenção GenAI do OpenTelemetry passou a descrever o agente como `invoke_agent` contendo `chat` e `execute_tool`, e ferramentas de uso diário — Copilot, Claude Code — passaram a emitir essas árvores. Há cinco anos não havia agente com passos suficientes para que a trilha fosse a unidade de análise, nem vocabulário comum para descrevê-la.

**O que ainda falta.** A convenção sair de "Development" (nada é estável, e renomeações já quebraram painéis silenciosamente); repetição determinística de verdade — o replay ainda esbarra na variação do modelo e em chamadas de ferramenta com efeito colateral; e uma resposta ao custo de guardar tudo, que hoje empurra amostragem justamente quando a regulação pede registro por evento.

### Disrupção-raiz 2 — A memória que atravessa sessões vira substrato do produto e ativo sem portabilidade

**O que rompe.** Rompe a suposição de que ferramentas são intercambiáveis. Se o sistema acumula contexto, decisões e erros já cometidos ao longo de anos, ele fica melhor por convivência, e um concorrente tecnicamente superior começa em desvantagem estrutural. O custo de troca desloca-se do código — que se reescreve — para a memória, que não se exporta. Rompe também a fronteira entre pessoas: memória compartilhada numa equipe faz o agente carregar de um para outro o que aprendeu, e a unidade de privacidade deixa de ser a conversa e passa a ser a lembrança.

**Por que agora e não há cinco anos.** Porque a memória saiu de truque de aplicação e virou componente arquitetural com benchmark próprio (LongMemEval, LoCoMo, BEAM), integrações de framework e backends de armazenamento — e porque o custo de contexto ficou alto o bastante para que "lembrar" precise ser engenharia, e não concatenação. Há cinco anos não havia nem sessão longa o suficiente nem preço que justificasse a disciplina.

**O que ainda falta.** Um formato que mais de uma implementação escreva e leia. Em julho de 2026 sete produtos testados falharam o teste de simetria de importação; as propostas existentes (Engram, protocolos de transferência com proveniência assinada) não são padrão ratificado, e o MCP resolveu o acesso a ferramentas sem tocar em persistência. Falta também resolver o que a própria indústria admite não ter resolvido: identidade entre sessões, abstração temporal em escala e envelhecimento da memória.

### Disrupção-raiz 3 — A avaliação ganha consequência externa, e o avaliador vira objeto de auditoria

**O que rompe.** Rompe a autoavaliação como prova. Hoje quem constrói o sistema escolhe o benchmark, o juiz e o recorte — e publica. Quando a avaliação passa a ter consequência fora do laboratório (dinheiro real, conformidade, contrato, incidente), o julgamento precisa ser independente do julgado, e a pergunta se desloca um nível: não "o sistema é bom?", mas "quem afirma que ele é bom, e com que método?". É a mesma transição que a contabilidade fez quando o balanço deixou de ser declaração da empresa e passou a ser peça auditada por terceiro.

**Por que agora e não há cinco anos.** Porque três coisas coincidiram em 2026: a crítica metodológica ao juiz automático virou literatura sistemática, com achados de inconsistência do mesmo juiz sobre o mesmo conteúdo; os benchmarks públicos saturaram no topo, com contaminação conhecida, o que esvaziou a tabela como argumento de compra; e surgiu demanda paga por atestado de terceiro — o mercado de auditoria e asseguração de agentes é estimado em 0,6 bilhão de dólares em 2026 com projeção de 23 bilhões em 2036 (44% ao ano), e a auditoria independente de terceiro responde por 37% desse mercado já em 2026.

**O que ainda falta.** Falta o gatilho regulatório morder — na Europa ele escorregou de agosto de 2026 para dezembro de 2027. Falta credencial de avaliador com reconhecimento real, e não apenas certificados concorrentes. E falta resolver a recursão: se o juiz é um modelo, auditar o juiz exige outro juiz, e a cadeia precisa terminar em algum lugar que não seja um modelo.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A trilha de execução do agente vira o artefato avaliado, e depois vira elemento de interface
    efeitos:
      - id: e1
        ordem: 1
        efeito: Ferramentas de agente passam a expor a árvore de execução ao usuário final, e não apenas ao time de engenharia
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O projeto de interface de produtos com IA ganha uma camada nova, a vista do caminho, ao lado da resposta
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Produto que não mostra o caminho passa a ser lido como produto que esconde o caminho
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: Consolida-se um vocabulário visual compartilhado para representar incerteza, tentativa descartada e fonte usada
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O custo de guardar e reter trilhas de agente vira linha orçamentária relevante e empurra amostragem agressiva
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A decisão sobre qual trilha não guardar deixa de ser técnica e passa a ser jurídica, por colidir com a exigência de registro por evento
                sinal: medio
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A régua de avaliação passa de acerto médio para consistência entre execuções repetidas da mesma tarefa
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O custo de avaliar um agente cresce mais rápido que o custo de operá-lo, porque cada tarefa precisa rodar k vezes
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Equipes pequenas abandonam avaliação própria e compram avaliação como serviço, concentrando o julgamento de qualidade em poucos fornecedores
                sinal: medio
                prazo: 2031
                confianca: baixa
              - id: e2.1.2
                ordem: 3
                efeito: A trilha deixa de ser insumo de depuração e vira insumo de treino, usada para gerar casos de avaliação automaticamente
                sinal: medio
                prazo: 2030
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Contratos de fornecimento de software com IA passam a especificar faixa de variação aceitável em vez de comportamento fixo
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Surgem garantias e seguros de desempenho de agente cujo sinistro é apurado sobre a trilha auditável
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A memória que atravessa sessões vira o substrato do produto e o ativo que prende o cliente
    efeitos:
      - id: e3
        ordem: 1
        efeito: O valor de uso de um assistente passa a crescer com o tempo de convivência, e produto novo nasce em desvantagem estrutural
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O custo de troca de fornecedor desloca-se do código para a memória, e migrar vira projeto em vez de configuração
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A portabilidade de memória entra na pauta regulatória como extensão do direito à portabilidade de dados, antes de existir formato ratificado
                sinal: medio
                prazo: 2031
                confianca: baixa
              - id: e3.1.2
                ordem: 3
                efeito: Forma-se um mercado de mudança de agente que reconstrói memória por reprocessamento do histórico, já que exportação fiel não existe
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A memória vira objeto manipulável de interface, com lugar onde a pessoa vê, corrige e apaga o que o sistema sabe dela
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Esquecer vira funcionalidade com desenho próprio, com escopo e prazo de validade, e sua ausência vira motivo de reclamação
                sinal: medio
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Memória compartilhada dentro de uma equipe produz vazamento lateral de contexto entre pessoas que nunca conversaram
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Surge controle de acesso por escopo dentro da memória, definindo quem pode ler qual lembrança
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A auditoria passa a perguntar o que o agente tinha direito de lembrar no momento da decisão, e não só o que ele fez
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A memória vira superfície de ataque, e o envenenamento persistente de contexto substitui a injeção de prompt pontual
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Proveniência assinada por lembrança entra como requisito em compra corporativa, junto com quem escreveu, quando e a partir de que origem
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: O que o agente pode ver vira decisão de projeto explícita, e curadoria de contexto substitui o envio indiscriminado de tudo
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Aparece um trabalho dedicado a decidir o que entra e o que fica fora do contexto, mais próximo de edição do que de programação
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A formação em mídia e interação passa a tratar o que o sistema sabe da pessoa como material de projeto, ao lado de tela e fluxo
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e5.1.2
                ordem: 3
                efeito: A escassez de contexto vira argumento de produto, e sistemas passam a competir por lembrar menos e melhor
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A avaliação ganha consequência externa e o próprio avaliador passa a ser auditado
    efeitos:
      - id: e6
        ordem: 1
        efeito: O juiz automático deixa de ser aceito sem medição da própria confiabilidade, e publicar avaliação sem auditar o juiz vira falha metodológica
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Formam-se benchmarks de juízes como camada separada dos benchmarks de tarefa
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A pergunta sobre quem certifica o avaliador ganha resposta institucional, com credencial emitida por entidade profissional e não por fornecedor
                sinal: medio
                prazo: 2031
                confianca: baixa
              - id: e6.1.2
                ordem: 3
                efeito: A discordância entre juízes passa a ser publicada junto com o resultado, como a barra de erro acompanha o gráfico científico
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: O benchmark público perde função de decisão de compra e é substituído por avaliação privada sobre a distribuição real de tarefas do comprador
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Sem placar público comparável, a reputação de um modelo passa a se formar por prova com consequência real, como dinheiro exposto ou incidente registrado
                sinal: medio
                prazo: 2031
                confianca: baixa
              - id: e6.2.2
                ordem: 3
                efeito: A avaliação privada vira segredo competitivo, e o conhecimento sobre o que os sistemas realmente fazem deixa de ser público
                sinal: medio
                prazo: 2031
                confianca: baixa
```

### O que o bloco não consegue dizer

**A roda corta em três níveis por decisão de formato, não porque a cadeia termine ali.** Dois ramos continuam visivelmente. De `e3.1.1` (portabilidade de memória como direito) sai um quarto nível plausível: se o direito existe e o formato não, o cumprimento vira exportação em texto — um direito satisfeito na letra e vazio na prática, o que realimenta `e3.1.2`, o mercado de reconstrução por reprocessamento. De `e6.2.2` (avaliação privada como segredo) sai outro: se ninguém publica o que mediu, a pesquisa acadêmica sobre capacidade de agentes perde acesso à evidência, e o campo passa a estudar modelos de brinquedo enquanto a produção roda no escuro. Nenhum dos dois entrou no YAML.

**Dois efeitos provavelmente só se consolidam depois de 2031, e estão datados em 2031 por respeito ao horizonte pedido, não por convicção.** São `e3.1.1` (entrada da portabilidade de memória na regulação) e `e6.1.1` (credencial de auditor com reconhecimento institucional). Ambos dependem de ciclo legislativo ou de formação profissional, que historicamente levam de cinco a dez anos — a auditoria contábil moderna levou décadas para consolidar o registro profissional. Registro isto em prosa em vez de atribuir data fora do intervalo: foi exatamente esse o erro documentado na rodada de teste desta skill.

**A convergência que a roda expõe.** As três disrupções empurram na mesma direção — mais visibilidade — e produzem, em segunda e terceira ordem, o mesmo tipo de efeito contrário: **concentração**. A avaliação cara concentra o julgamento em poucos fornecedores (`e2.1.1`); a memória sem portabilidade concentra o cliente num fornecedor (`e3.1`); a avaliação privada concentra o conhecimento em quem pode pagar por ela (`e6.2.2`). A infraestrutura que existe para tornar o sistema confiável tende, pelo próprio custo, a reduzir o número de quem pode conferir. Isso não é ruído do método: é o achado mais forte deste mapa.

**Uma tensão que a roda não representa bem.** Os efeitos de `e1` (trilha exposta) e de `e5` (curadoria de contexto) estão em conflito direto. Mostrar o caminho exige guardar o caminho; reduzir contexto exige descartar. A roda coloca os dois como efeitos paralelos da mesma raiz técnica, quando na prática há um dilema — quanto mais enxuto o contexto, menos há para auditar depois.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — o vencedor que operou menos.** No Alpha Arena, o modelo que terminou no topo fez cerca de 43 negociações, três por dia, enquanto os outros operaram muito mais e perderam. Se isso se confirmar em outras provas com consequência real, a métrica que importa para agentes deixa de ser competência e passa a ser **abstenção**: saber não agir. Nenhum benchmark de tarefa mede isso — todos pontuam por completar.

**Sinal fraco 2 — a queda de 25% do BEAM a cada ordem de grandeza.** Se a curva se mantiver, memória de anos não fica melhor com o tempo: fica pior. Isso inverteria `e3` inteiro — o produto velho não seria o vantajoso, seria o entulhado. O sinal está num relatório de fornecedor que teria interesse contrário, o que o torna mais crível, não menos.

**Sinal fraco 3 — o conteúdo saiu da trilha por padrão.** A convenção GenAI retirou prompt e resposta da captura automática. Se isso virar norma, a trilha registra a forma da execução e não o que foi dito, e boa parte da promessa de auditoria fica vazia justamente onde o conteúdo importa.

**Sinal fraco 4 — a instrumentação vazou para a ferramenta de quem programa.** Copilot e Claude Code emitem tracing. Quando a trilha está na ferramenta de trabalho diário, e não no servidor, a observabilidade deixa de ser decisão de plataforma e vira decisão individual — com tudo o que isso implica de vigilância do próprio trabalho.

**Wildcard 1 — exigência regulatória de trilha para toda decisão de IA em serviço público.** Baixa probabilidade no horizonte, alto impacto: transformaria a trilha auditável de diferencial em pré-requisito de licitação, e um mercado hoje dominado por ferramenta proprietária seria empurrado para formato aberto em poucos ciclos. No Brasil, este é o wildcard com caminho mais curto — a ANPD já fiscaliza decisão automatizada sob a LGPD, e o marco legal de IA segue em tramitação; não precisaria de lei nova, bastaria interpretação e capacidade de fiscalização, que a autoridade passou a ter com a criação de cargos efetivos em 2026.

**Wildcard 2 — um incidente grande atribuído a memória envenenada.** Um caso público em que um agente agiu com base em lembrança plantada meses antes, com dano material, colapsaria a distância entre `e4.2` e `e4.2.1`: proveniência assinada deixaria de ser requisito de compra e viraria exigência de seguro em um ou dois anos. É o caminho mais curto entre este mapa e uma mudança abrupta.

**Wildcard 3 — um formato de memória ratificado por órgão de padronização, adotado por dois dos três grandes.** Baixíssima probabilidade até 2031 pelo que se observa em 2026 (nenhum projeto de memória adotou formato comum como armazenamento nativo), mas mataria `e3.1`, `e3.1.1` e `e3.1.2` de uma vez — e com eles o achado de concentração deste mapa.

**Wildcard 4 — um juiz automático que passe a ser regulado como instrumento de medição.** Se a avaliação de IA for equiparada a ensaio de conformidade, o juiz precisaria de calibração rastreável, como um instrumento de laboratório. Isso resolveria a recursão de `e6.1.1` por fora, transferindo-a para metrologia em vez de profissão.

## 7. Contra o próprio mapa

### Rebaixamentos auditáveis da Etapa 4

Cinco efeitos foram gerados com confiança maior e rebaixados depois de submetidos aos três testes da autocrítica (extrapolação linear, taxa de adoção sem precedente, força contrária ignorada). Os valores originais:

| Efeito | Original | Final | Por que caiu |
|---|---|---|---|
| `e2` | alta | media | Assume que o custo de rodar k vezes será aceito. A força contrária ignorada é orçamentária: avaliar fica mais caro que operar, e equipes historicamente resolvem isso medindo menos, não gastando mais. |
| `e3` | alta | media | Extrapolação linear da curva de melhoria de memória. O próprio relatório de fornecedor mostra queda de ~25% de 1M para 10M de tokens no BEAM e lista envelhecimento de memória como não resolvido. O efeito supõe acúmulo monotônico que a evidência não sustenta. |
| `e5` | alta | media | Pressupõe que a curadoria de contexto se difunda como prática de projeto até 2028. É plausível em equipes que pagam a conta de tokens, e improvável onde o custo é absorvido pela plataforma — que é a maioria do mercado de consumo. |
| `e6.2` | alta | media | Assume que o benchmark público perde função de compra. Ignora a inércia de marketing: tabela pública é barata de citar e cara de substituir, e o comprador pequeno continua sem meio de gerar avaliação privada. |
| `e2.1.1` | media | baixa | Depende de que o mercado de avaliação como serviço exista com maturidade suficiente até 2031. Hoje ele está embutido nas plataformas de observabilidade, não vendido como julgamento independente — são dois negócios diferentes, e supor a transição é otimismo. |

Um sexto ajuste, de tipo diferente: `e1.2.1` teve o `sinal` mantido em médio, mas a confiança foi para baixa porque o efeito depende de uma colisão regulatória que acabou de ser adiada dezesseis meses na Europa.

### Onde este mapa provavelmente está errado

**O efeito que é só extrapolação linear do presente:** `e5` — curadoria de contexto como decisão de projeto explícita. É a continuação direta de uma prática que já existe (reduzir tokens), apresentada como ruptura. A defesa é fraca: o que a tornaria ruptura é a mudança de quem decide (de engenharia para projeto de interação), e isso é uma aposta, não uma observação.

**O efeito que assume velocidade de adoção sem precedente comparável:** `e1.1` — a vista do caminho virando camada padrão de interface até 2029. Não há precedente de uma explicação de processo interno virar elemento comum de interface de consumo; a tendência histórica é o oposto, com a complexidade escondida sob uma superfície cada vez mais lisa. O mapa está supondo que a desconfiança vence a conveniência, e isso raramente aconteceu.

**A disrupção que pode simplesmente não se concretizar:** a de número 3. Se o gatilho regulatório continuar escorregando — já foi de agosto de 2026 para dezembro de 2027 — e se a crítica ao juiz automático permanecer confinada à literatura sem virar exigência de comprador, a avaliação segue como função interna de quem constrói, e a profissão de avaliador não nasce. Nesse caso caem `e6.1.1`, `e6.2.1` e `e2.2.1`, e o mapa perde um terço do volume. Sobreviveriam `e6`, `e6.1` e `e6.2` em versão fraca: melhoria de método dentro das mesmas empresas, sem independência — o que, pelo critério da própria skill, não seria disrupção, seria melhoria.

**O viés que entrou aqui.** O mapa foi escrito por uma máquina sobre a infraestrutura que serviria para auditar máquinas, o que é uma posição desconfortável e provavelmente produziu dois vieses opostos que se somaram: superestimar a importância do problema (é o assunto que está sendo mapeado, e todo mapa infla o próprio objeto) e subestimar o quanto a opacidade é confortável para quem vende. Um segundo viés vem do recorte: a evidência disponível em inglês, com fornecedores americanos, e o Brasil entrando só pela porta regulatória — o que faz o mapa tratar o país como destinatário de norma e não como lugar onde se constrói. É uma distorção da fonte, não do tema.

**Uma fragilidade estrutural do método.** A Futures Wheel gera efeitos por ramificação, e ramificação premia quem imagina bem, não quem acerta. Nada no método penaliza um efeito elegante e falso. Os campos `sinal`, `prazo` e `confianca` dão aparência de calibração a estimativas que não têm base estatística nenhuma — são julgamento, escrito com a tipografia de medição. Ler `confianca: baixa` como "20% de chance" seria erro de leitura induzido pelo próprio formato.

## 8. O que a máquina errou

**1. Quase publiquei o Alpha Arena com os números errados, tirados do resumo de busca.** O resumo dizia oito modelos, quatro competições, ações americanas e perda de cerca de um terço do capital do conjunto. A página que abri descreve a temporada 1 com **seis** modelos, contratos perpétuos de cripto na Hyperliquid, e ranking com dois modelos no azul (Qwen3 Max +22,3%, DeepSeek +4,89%). As duas descrições podem se referir a temporadas diferentes — há menção a uma temporada 1.5 com ações —, mas eu não consegui verificar isso em fonte aberta, e a tentativa de abrir a matéria de jornal que traria a confirmação retornou HTTP 403. **Como percebi:** a divergência só apareceu porque abri a página em vez de confiar no resumo. Mantive no texto apenas os números da fonte que abri, e declaro aqui que a temporada com ações e oito modelos permanece **não verificada**.

**2. Ia datar a obrigação de log europeia em agosto de 2026 — erraria por dezesseis meses.** A maioria dos resultados de busca repete "2 de agosto de 2026" para as obrigações de alto risco do Artigo 12, e um mapa de futuro ancorado nessa data colocaria o gatilho regulatório no passado. Ao abrir a página do artigo, apareceu uma data diferente (dezembro de 2027), o que me obrigou a procurar a causa: o Digital Omnibus, que adiou os sistemas autônomos do Anexo III para **2 de dezembro de 2027** e os do Anexo I para 2 de agosto de 2028. **Como percebi:** por contradição entre duas fontes abertas, não por desconfiança prévia. Se as duas tivessem concordado na data errada, o erro teria passado.

**3. Ia comparar 92,5 com 94,7 como se fossem a mesma régua.** Os resumos de busca colocam lado a lado o LoCoMo de um fornecedor (92,5) e o de outro (94,7), e o LongMemEval de três sistemas, como se fossem placar. A própria página do fornecedor que abri desmente a comparação: a unidade mudou entre 2025 e 2026 (tokens por conversa × tokens por chamada de recuperação), os modelos e os arranjos de avaliação são diferentes, e um número de concorrente vem com a ressalva interna de confirmar a fonte antes de publicar. **Como percebi:** a ressalva estava na própria fonte que eu usaria para sustentar a comparação. Cortei todos os números de terceiros e mantive apenas os do fornecedor sobre si mesmo, declarados como autorrelatados.

**4. Não consegui verificar a aquisição da Langfuse pela ClickHouse.** Um resumo de busca afirma data (16 de janeiro de 2026), série D de 400 milhões de dólares e avaliação de 15 bilhões. A página que abri sobre o assunto lista "Langfuse (ClickHouse)" como fornecedor, o que é consistente com a aquisição ter ocorrido, mas **não traz data nem valor**. O mesmo vale para a contagem de 31,5 mil estrelas no GitHub. Não uso nenhum dos dois números no corpo do documento; registro aqui como não verificado.

**5. Números brasileiros descartados por não terem fonte aberta.** Circula em blogs jurídicos a afirmação de que os processos sancionadores da ANPD cresceram 280% em relação a 2025, com mais de 120 concluídos no primeiro semestre de 2026. Não abri nenhuma fonte que sustente isso. A fonte que abri traz outros números — 21 organizações encaminhadas para avaliação sancionatória após monitoramento de 56 entidades, Nota Técnica nº 54/2025, 213 vagas temporárias e 200 cargos efetivos criados pela Lei 15.352/2026. Usei só esses.

**6. Um erro de leitura do próprio formato, corrigido antes de publicar.** Na primeira montagem, contei os efeitos de terceira ordem de cabeça e escrevi 14 no frontmatter. A contagem feita por script sobre o bloco YAML devolveu 17. O campo foi corrigido. É exatamente o tipo de número redondo que a seção 8 existe para pegar — e ele veio da máquina, sobre o trabalho da própria máquina.

**Sobre o erro conhecido desta skill.** O `DUVIDAS.md` do autor da skill documenta que, na rodada de teste, quatro efeitos de terceira ordem receberam prazo além do horizonte pedido, sem aviso — e prescreve a correção (conferir cada `prazo` do YAML contra o `horizonte` do frontmatter, e declarar em prosa o efeito que só se consolida depois) sem tê-la aplicado ao `SKILL.md`, para manter o `TESTE.md` fiel ao que aconteceu. A correção do `DUVIDAS.md` foi aplicada nesta rodada; o `SKILL.md` do aluno não foi tocado. Nesta rodada nenhum `prazo` ultrapassa 2031, e os dois efeitos que provavelmente só se consolidam depois disso estão declarados em prosa no fim da seção 5, em vez de receberem data fora do intervalo.

## 9. Três cenários para 2031

**Provável.** A trilha virou infraestrutura interna consolidada e quase nada disso chegou à interface do usuário final. A convenção GenAI estabilizou tarde, e a maior parte das equipes acabou presa ao formato do fornecedor de observabilidade que já usava, com o transporte padronizado e o vocabulário não. A avaliação melhorou de método — rodar várias vezes virou rotina, auditar o juiz virou boa prática citada em conferência — mas continuou sendo feita por quem constrói, porque o gatilho regulatório europeu só passou a morder no fim de 2027 e a fiscalização levou o tempo de sempre para virar prática. Memória é padrão em todo produto e não é portátil em nenhum: existe export, ninguém consegue importar, e trocar de assistente significa começar de novo, o que quase ninguém faz. O mercado de auditoria de agentes cresceu, mas menos do que a projeção de 44% ao ano, e concentrou-se nas mesmas firmas que já auditavam outras coisas.

**Desejável.** Existe um formato de memória que mais de uma implementação escreve e lê, com proveniência por lembrança e permissão por escopo, e ele foi adotado porque um comprador grande o exigiu em contrato, não porque um comitê o ratificou. A pessoa tem um lugar onde vê o que o sistema sabe dela, corrige o que está errado e manda esquecer, e esse lugar é tão banal quanto a configuração de privacidade do navegador. Avaliação independente virou peça contratual comum: quem compra agente para decisão de consequência exige um terceiro que tenha rodado a prova sobre a própria distribuição de tarefas, e esse terceiro publica a discordância entre juízes junto com o resultado. Para chegar aqui, três coisas teriam de ter sido feitas até 2028: um comprador de peso exigindo portabilidade em contrato, a convenção de trilha saindo de "Development" antes de as renomeações queimarem a confiança de quem instrumentou cedo, e alguma entidade profissional emitindo credencial de avaliador antes que o mercado se resolvesse sozinho por reputação de marca.

**Indesejável.** A infraestrutura de confiança existe e está inteira nas mãos de quem precisa ser auditado. Avaliar ficou caro o bastante para que só três ou quatro fornecedores o façam em escala, e eles são os mesmos que vendem o modelo; as avaliações privadas viraram segredo competitivo, e o que se sabe publicamente sobre o que os sistemas fazem regrediu em relação a 2026. A memória acumulada tornou a troca de fornecedor tecnicamente possível e economicamente absurda, e a portabilidade virou direito formal cumprido com um arquivo de texto que nenhum concorrente consegue reconstituir. A trilha é registrada por exigência legal, guardada por seis meses e lida por ninguém — conformidade sem auditoria. **O sinal precoce disso** é observável já em 2027: se as ferramentas de avaliação independente forem adquiridas pelos fornecedores de modelo, e se a exportação de memória continuar sendo resumo em texto depois de o assunto entrar na pauta regulatória, este é o cenário em curso.

## 10. O experimento

**O que é.** *Caixa-preta aberta* — uma interface que, ao lado da resposta de um agente, mostra duas coisas que hoje ficam escondidas: a **trilha** (que ferramentas chamou, em que ordem, o que falhou e foi tentado de novo, quanto custou) e a **memória** (que lembranças foram usadas para produzir aquela resposta, de onde vieram e quando foram gravadas), com um botão de **esquecer** ao lado de cada lembrança. A mesma tarefa é executada cinco vezes, e as cinco trilhas ficam lado a lado.

**Que pergunta sobre o futuro ele ajuda a responder.** Duas, que são os efeitos mais frágeis deste mapa. A primeira: a vista do caminho (`e1.1`) é mesmo desejável para quem usa, ou é peso morto que só interessa a quem constrói? A segunda: ver a mesma tarefa dar cinco resultados diferentes muda a relação de confiança com o sistema — para melhor, porque a variação fica honesta, ou para pior, porque destrói a ilusão de competência que sustenta o uso? Nenhuma das duas se responde por argumento.

**Que tecnologia emergente usa, e por que não dá com tecnologia madura.** Usa a árvore de spans de agente das convenções GenAI (`invoke_agent` → `chat` → `execute_tool`), que é o que permite reconstruir o caminho em vez de mostrar um log linear, e uma camada de memória com recuperação atribuível, que é o que permite dizer *qual* lembrança entrou nesta resposta. Com tecnologia madura dá para fazer a metade inútil: log de aplicação mostra que houve chamadas, não a estrutura da decisão; e um histórico de conversa mostra o que foi dito, não o que foi lembrado nem o que foi ignorado. A atribuição — "esta frase da resposta veio desta lembrança, gravada nesta data" — é justamente o que ainda não é padrão, e é o que o experimento precisa testar.

**O que a turma faz quando testar isso em sala.** Cada pessoa executa a mesma tarefa no agente, duas vezes: uma com a caixa fechada, outra com a caixa aberta. Registra-se, antes e depois, uma única medida — quanto a pessoa confiaria naquela resposta para uma decisão que ela precisasse justificar para outra pessoa. Depois, cada um recebe a memória construída pela execução de **outra** pessoa e responde se aceitaria trabalhar com ela: é o teste de vazamento lateral (`e4`) em quinze minutos. No fim, a turma usa o botão de esquecer e vê o que acontece com a resposta seguinte.

**O resultado que me faria mudar de ideia.** Se a confiança declarada **cair** com a caixa aberta e a maioria preferir a versão fechada, `e1.1` e `e1.1.1` estão errados: a vista do caminho não vira camada de interface de consumo, fica em ferramenta de engenharia, e o ramo inteiro da primeira disrupção encolhe para dentro do time técnico. Seria o achado mais útil do experimento, porque é o que o mapa não quer que seja verdade. E se ninguém se incomodar ao receber a memória de outra pessoa, `e4` e toda a cadeia de permissão por lembrança perdem a urgência que este mapa lhes atribui.

## 11. Fontes

Doze fontes, todas abertas e lidas nesta rodada. O que aparece apenas em resumo de busca e não foi aberto está declarado na seção 8 como não verificado e não sustenta afirmação no corpo do texto.

1. **OpenTelemetry — GenAI Agent and Framework Spans** · `https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-agent-spans.md` — Sustenta o modelo de árvore de spans (`create_agent`, `invoke_agent`, `invoke_workflow`, `plan`, `execute_tool`) e o status **Development** de todas as convenções. Confiabilidade alta: é a especificação oficial, lida na fonte.
2. **"OpenTelemetry's GenAI semantic conventions are NOT stable yet — here's what actually shipped in 2026"** (dev.to / azena-ai) · `https://dev.to/azena-ai/opentelemetrys-genai-semantic-conventions-are-not-stable-yet-heres-what-actually-shipped-in-2026-3mke` — Sustenta a data da separação de repositório (v1.42.0, 12/06/2026), a ausência de release com tag, as renomeações que quebram painéis em silêncio e a saída do conteúdo da captura padrão. Confiabilidade média-alta: post técnico de terceiro, mas cada afirmação é verificável contra a fonte 1, e as que cruzei batem.
3. **Artigo 12 do Regulamento de IA da UE — Record-Keeping** · `https://artificialintelligenceact.eu/article/12/` — Sustenta o texto da obrigação de registro automático de eventos e suas finalidades. Confiabilidade alta para o texto legal; o portal é iniciativa privada de referência, não fonte oficial da UE, o que importa para datas (ver fonte 4).
4. **Gibson Dunn — "EU AI Act Omnibus Agreement: Postponed High-Risk Deadlines"** · `https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/` — Sustenta o adiamento para 2 de dezembro de 2027 (Anexo III) e 2 de agosto de 2028 (Anexo I), e o fato de o omnibus não alterar o Artigo 12 em si. Confiabilidade alta: escritório de advocacia descrevendo norma publicada, com datas checáveis.
5. **Mem0 — "State of AI Agent Memory 2026"** · `https://mem0.ai/blog/state-of-ai-agent-memory-2026` — Sustenta os números de LoCoMo/LongMemEval/BEAM, a queda de ~25% de 1M para 10M de tokens, os problemas declarados como não resolvidos e o contraste Gartner × McKinsey na adoção. Confiabilidade média: é fornecedor falando de si, e os números favoráveis são autorrelatados — usados apenas como autorrelato. As ressalvas metodológicas do próprio documento, que vão contra o interesse comercial dele, têm peso maior.
6. **"I Tested 7 AI Memory Products for Portability — All 7 Lock You In"** (dev.to / stantyan) · `https://dev.to/stantyan/i-tested-7-ai-memory-products-for-portability-all-7-lock-you-in-31pm` — Sustenta a inexistência prática de portabilidade em julho de 2026, o critério de simetria de importação e o comportamento de cada um dos sete produtos. Confiabilidade média: teste individual, não auditado, mas com método declarado e verificável por qualquer pessoa que repita.
7. **Ravindran, S. K. — "Portable Agent Memory: A Protocol for Provenance-Verified Memory Transfer Across Heterogeneous LLM Agents"** · `https://arxiv.org/html/2605.11032v1` — Sustenta a existência de proposta técnica de transferência com proveniência assinada e os números do piloto. Confiabilidade média: preprint não revisado por pares, autor vinculado a fornecedor, piloto pequeno. Usado como evidência de que a proposta existe, não de que funciona em escala.
8. **Norman, J. D.; Rivera, M. U.; Hughes, D. A. — "Reliability without Validity: A Systematic, Large-Scale Evaluation of LLM-as-a-Judge Models Across Agreement, Consistency, and Bias"** · `https://arxiv.org/pdf/2606.19544` — Sustenta a crítica ao juiz automático: concordância moderada com humanos convivendo com inconsistência na reavaliação do mesmo conteúdo. Confiabilidade média-alta: trabalho sistemático e de escala declarada; não extraí números específicos porque estão no corpo técnico, e prefiro não citar valor que não li na página.
9. **Prefactor — "Agent Benchmarks: tau-bench, SWE-bench, GAIA & pass^k"** · `https://prefactor.tech/learn/agent-benchmarks` — Sustenta a definição de `pass^k`, a afirmação sobre não determinismo exigir várias tentativas e a distância entre benchmark e produção. Confiabilidade média: material educativo de fornecedor; as definições são checáveis e a citação sobre pass^k é a formulação mais clara que encontrei.
10. **MarkTechPost — "Top LLM Observability and Evaluation Platforms in 2026"** · `https://www.marktechpost.com/2026/08/09/top-llm-observability-and-evaluation-platforms-in-2026-langfuse-langsmith-braintrust-arize-and-more-compared/amp/` — Sustenta a lista de plataformas em disputa, a instrumentação `gen_ai.*` no Copilot e no Claude Code, a fragmentação Phoenix/OpenInference e as diferenças de foco em avaliação. Confiabilidade média: comparativo editorial sem metodologia declarada; não traz os números (aquisição, estrelas) que outros resumos atribuem a ele.
11. **iWeaver — "Alpha Arena Season 1 Results"** · `https://www.iweaver.ai/blog/alpha-arena-ai-trading-season-1-results/` — Sustenta o desenho do Alpha Arena (seis modelos, 10 mil dólares reais cada, perpétuos de cripto na Hyperliquid, mesmo prompt) e o ranking com retornos. Confiabilidade média: cobertura de terceiro sobre benchmark público; a matéria de jornal que traria confirmação independente retornou 403 e está registrada na seção 8.
12. **Daniel Law — "ANPD em 2026: fiscalização em escala e uma agenda mais ampla para o ambiente digital"** · `https://www.daniel.com.br/pt/client-alert/anpd-em-2026-fiscalizacao-em-escala-e-uma-agenda-mais-ampla-para-o-ambiente-digital/` — Sustenta as quatro frentes da ANPD, a ênfase em decisão automatizada sob a LGPD, a Nota Técnica nº 54/2025 e os números de capacidade (21 organizações, 213 temporários, 200 cargos da Lei 15.352/2026). Confiabilidade alta para fatos administrativos: alerta de escritório sobre atos publicados.

**Fonte que não respondeu:** Business Standard, "AI bots auditioning for Wall Street trading are mostly losing money" — HTTP 403. Seria a confirmação independente da temporada com ações do Alpha Arena; sem ela, aquele conjunto de números não entra no documento.

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista, transcrita

A skill não gera conteúdo antes da Etapa 1. Perguntas feitas, na ordem do `SKILL.md`, e respostas recebidas:

> **1. Horizonte temporal: para que ano você quer projetar os efeitos?**
> 2031.
>
> **2. Público-alvo: quem vai ler/usar esse mapa?**
> Quem projeta mídia e interação.
>
> **3. Recorte geográfico: mercado global, ou uma região específica?**
> Global, com uma nota sobre o Brasil.
>
> **4. Descartes explícitos: existe algo que você já sabe que NÃO quer que o mapa cubra?**
> O que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão.
>
> **5. Viés desejado: otimista, pessimista, ou neutro/cético?**
> Neutro.

Condições adicionais declaradas fora das cinco perguntas, registradas por afetarem a saída:

> Disrupção suspeita: nenhuma — descubra. Ideias óbvias a excluir: as que servem para qualquer tema. O que me faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia não rompe nada (só melhora o que existe). Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor. Zona de interesse: Agentes.

Interpretação aplicada, declarada aqui porque altera o resultado: o descarte 4 é a mesma régua do critério de maturidade da Etapa 2 da skill, e os dois foram aplicados em conjunto — reforçando-se, não substituindo-se. É o que tirou "memória dentro de um produto" do mapa: ela é comum em produto de massa desde 2024 e, portanto, presente, não futuro.

### 12.2 Candidatos avaliados na Etapa 2 e descartados por maturidade

Lista completa, com o motivo de cada recusa — a evidência de que o critério foi aplicado e não apenas citado:

| Candidato | Motivo da recusa |
|---|---|
| Log, métrica e APM de aplicação | Padrão de mercado há uma década; nenhum debate de substituição. |
| Rastreamento distribuído (tracing) | Maduro. Emergente é a convenção semântica para agentes, não a técnica. |
| Teste unitário, CI, cobertura | Consolidados; o problema de não determinismo é outro, e é ele que entrou no mapa. |
| Versionamento e diff de prompt | Prática corrente desde 2023; sem disputa sobre substituição. |
| Painel de custo e tokens por chamada | Commodity de fornecedor; todos têm. |
| RAG básico com busca vetorial | Saiu da fronteira; material de tutorial. |
| Janela de contexto longa | Melhora o que existe sem romper nada; e a literatura de 2026 já separa capacidade de continuidade. |
| Memória dentro de um único produto | Comum em produto de massa — recusado pela régua da disciplina. |
| Guardrail de saída por regex/classificador | Relativamente maduro e, além disso, objeto do mapa de contenção (tema 2). |
| Cartão de modelo / ficha de dados | Prática difundida; sem debate real de substituição. |
| Painel de conformidade (ISO/IEC 42001 etc.) | Instrumento de gestão já existente, aplicado a objeto novo; não rompe. |
| Marca d'água e proveniência de conteúdo gerado | Emergente, mas de outro tema (autenticidade de mídia), não de infraestrutura de confiança em agentes. |

Um candidato ficou na fronteira e foi **aceito com ressalva**: `LLM-as-judge`. É amplamente adotado, o que o aproximaria de maduro, mas existe debate técnico ativo e atual sobre sua validade — o que é exatamente o critério de não recusa. Entrou não como disrupção em si, mas como o objeto sobre o qual a disrupção 3 age.

### 12.3 Efeitos gerados e cortados

Cortados por serem genéricos demais — serviriam para qualquer tema de tecnologia, o que a entrevista pediu para excluir:

- "Surgem novas funções profissionais ligadas à tecnologia."
- "Empresas passam a investir mais em capacitação."
- "O custo cai com a maturidade do mercado."
- "Ferramentas de código aberto competem com proprietárias."
- "A regulação tenta acompanhar a velocidade da tecnologia."
- "Aumenta a preocupação com privacidade."

Cortados por serem de quarta ordem (limite de três níveis do formato), mas anotados em prosa na seção 5:

- Portabilidade como direito formal satisfeito com export em texto, realimentando o mercado de reconstrução de memória.
- Pesquisa acadêmica sobre agentes perdendo acesso à evidência de produção quando a avaliação privada vira segredo.

Cortados por pertencerem a mapas vizinhos da turma:

- Efeitos de contenção e permissão de ação do agente (tema 2 — conter o agente).
- Efeitos sobre o ofício de programar com agente (tema 1), exceto onde a trilha e a memória são o objeto.

Cortado por ser afirmação que eu não conseguiria sustentar: "o mercado de observabilidade de LLM consolida-se em torno de bancos de dados analíticos, com aquisições de plataformas de trilha por fornecedores de infraestrutura de dados". É um efeito plausível e havia um indício forte (a associação Langfuse/ClickHouse), mas o indício não foi verificável na página que abri — ver seção 8, item 4.

### 12.4 Buscas que não deram em nada útil

- Busca por dados de adoção de `pass^k` em produção: só material educativo e definições; nenhum levantamento de quantas equipes de fato avaliam com repetição. O efeito `e2` está apoiado na existência da métrica e no argumento, não em medição de adoção — o que é parte da razão do rebaixamento.
- Busca por número de mercado específico de "avaliação como serviço" separado de observabilidade: não existe recorte publicado que separe os dois. Por isso `e2.1.1` foi rebaixado a baixa.
- Busca por caso público documentado de envenenamento persistente de memória com dano material: não encontrei nenhum. É por isso que `e4.2` e `e4.2.1` aparecem com sinal médio e fraco, e o cenário aparece como wildcard na seção 6, não como efeito de sinal forte.
- Busca por posição brasileira específica sobre trilha de auditoria de IA (fora da LGPD): o marco legal segue em tramitação e não achei texto vigente que exija trilha por decisão. A nota sobre o Brasil, por isso, é sobre capacidade de fiscalização e sobre o artigo de revisão de decisão automatizada da LGPD, não sobre norma específica de IA.

### 12.5 Contagem dos efeitos, conferida por script

Contagem final sobre o bloco YAML da seção 5, usada para preencher o frontmatter: 3 disrupções-raiz, 6 efeitos de primeira ordem, 11 de segunda, 17 de terceira. A contagem inicial, feita de cabeça, dizia 14 de terceira ordem — ver seção 8, item 6.

### 12.6 Nota sobre o processo

Este documento foi produzido pela skill `futurizacao-jcsc` numa rodada sem interlocutor humano ao vivo: as respostas da entrevista foram fornecidas por escrito antes da execução, e estão transcritas em 12.1. A Etapa 1 não foi pulada — foi respondida de antemão, e o registro está aqui porque a skill considera inválida uma saída sem entrevista visível. A checagem de horizonte prescrita pelo `DUVIDAS.md` do aluno foi executada e nenhum `prazo` excede 2031. A Etapa 4 (autocrítica) foi executada sobre a roda já montada, e os cinco rebaixamentos com valor original estão na seção 7, em tabela, para que a autocrítica seja auditável e não apenas afirmada.
