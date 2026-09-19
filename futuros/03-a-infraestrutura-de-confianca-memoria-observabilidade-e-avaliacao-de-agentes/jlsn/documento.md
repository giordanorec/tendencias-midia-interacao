---
tema: "A infraestrutura de confiança: memória, observabilidade e avaliação de agentes"
slug: a-infraestrutura-de-confianca-memoria-observabilidade-e-avaliacao-de-agentes
autor_login: jlsn
zona_de_interesse: Sistemas de Informação
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: Global, com nota sobre o Brasil
disrupcoes_raiz: 3
efeitos_ordem_1: 9
efeitos_ordem_2: 18
efeitos_ordem_3: 11
tecnologias_citadas: ["Mem0", "Letta", "Zep", "Graphiti", "LangMem", "Langfuse", "Arize Phoenix", "LangSmith", "Braintrust", "MLflow", "OpenTelemetry GenAI semantic conventions", "tau-bench", "SWE-bench", "GAIA", "LoCoMo", "LongMemEval", "BEAM", "promptfoo", "LLM-as-judge", "replay determinístico", "Model Context Protocol"]
fontes: 8
confianca: media
experimento: Banco de provas — o mesmo agente, dez vezes
skill_usada: futurizacao-jlsn
publico_ok: false
---

## 1. Resumo

Quando a máquina fabrica o produto, avaliar o produto deixa de medir a máquina. A pergunta de qualidade migra de *"o que foi entregue?"* para *"por que isso está certo?"* — e responder exige ver a trajetória inteira: cada chamada, cada ferramenta, cada tentativa abandonada. Ao mesmo tempo, o agente que lembra entre sessões deixa de ser função sem estado e passa a acumular contexto, correções e erros já cometidos. Memória e rastro são as duas faces da mesma infraestrutura: a que permite confiar num sistema que ninguém lê por inteiro. O que torna isso disruptivo agora, e não em 2021, é a conjunção de três fatos verificáveis: os benchmarks de agentes já medem *reprodutibilidade* em vez de acerto (pass^k); o vocabulário de rastro está sendo padronizado fora dos fornecedores (OpenTelemetry GenAI, ainda instável); e o log virou obrigação legal para sistemas de alto risco na União Europeia. Para quem projeta mídia e interação, a consequência é direta: o rastro e a memória deixam de ser back-office e viram superfície de interface — e o histórico acumulado vira o custo real de trocar de fornecedor.

## 2. O tema

O tema é a camada de infraestrutura que torna um sistema agêntico *confiável sem ser lido por inteiro*. Três peças que a indústria trata separadamente e que aqui são tratadas como uma só:

**Memória.** A capacidade de um agente reter e recuperar fatos, decisões e preferências entre sessões, projetos e ferramentas. Hoje existe como produto (Mem0, Letta, Zep, Graphiti, LangMem) e como problema de custo: contexto é caro, então "lembrar" precisou virar engenharia de recuperação, não acumulação bruta.

**Observabilidade.** O rastro estruturado de tudo o que o agente fez — spans, chamadas de ferramenta, tokens, latência, custo. Langfuse, Arize Phoenix, LangSmith, Braintrust e MLflow disputam esse mercado, e o OpenTelemetry tenta padronizar o vocabulário por baixo deles.

**Avaliação.** O julgamento de sistemas **não determinísticos**, em que rodar duas vezes dá dois resultados. É aqui que o teste unitário quebra: não há saída esperada única.

**Onde encosta em mídia e interação.** Em três lugares, e nenhum deles é o data center. Primeiro, a *interface do rastro*: quando o usuário final precisa entender por que o sistema fez o que fez, alguém tem de desenhar a visualização de uma trajetória de trinta passos para quem não é engenheiro — é um problema de design de informação, não de logging. Segundo, a *interface da memória*: um agente que lembra precisa mostrar o que lembra, deixar esquecer, deixar separar contextos. "Esquecer" vira um controle de interface, e ninguém sabe ainda qual é a metáfora certa. Terceiro, a *avaliação de experiência*: se o produto é gerado na hora, a régua de qualidade não é mais o artefato, é a distribuição de artefatos possíveis — e medir isso é desenho de pesquisa, não QA.

**Por que merece um mapa.** Porque é a camada que decide se o resto acontece. Todo tema de agentes — contenção, autonomia, delegação — pressupõe alguém conseguindo verificar. Se a verificação não escalar, a autonomia não escala, e o mapa de todos os vizinhos muda.

## 3. Onde isso está hoje

**O que existe e funciona.**

A observabilidade de LLM é produto maduro em capacidade, ainda que jovem em padrão. O Langfuse, open source e auto-hospedável, captura o ciclo de vida completo da requisição — chamadas de modelo, etapas de recuperação, execuções de ferramenta — com timing, entradas, saídas e metadados, e entende nativamente conceitos que um APM genérico não entende: uso de tokens, parâmetros de modelo, pares prompt/completion e scores de avaliação. Envia telemetria de forma assíncrona, sem custo de latência na resposta ([Langfuse, docs](https://langfuse.com/docs/observability/overview)). Isso não é promessa: é ferramenta em produção.

A memória de agentes saiu do laboratório e tem números. O relatório da Mem0 sobre 2026 registra 92,5 no LoCoMo com ~6.956 tokens por consulta e 94,4 no LongMemEval com ~6.787 tokens — contra ~26.000 tokens para passar o contexto inteiro. Os maiores ganhos do algoritmo novo estão em raciocínio temporal (+29,6 pontos) e multi-salto (+23,1). O ecossistema declara 21 integrações de framework e 20 backends de armazenamento vetorial ([Mem0, State of AI Agent Memory 2026](https://mem0.ai/blog/state-of-ai-agent-memory-2026)). É fonte de fornecedor, e isso pesa na confiança — mas a ordem de grandeza da economia de tokens é consistente com o que o campo relata.

A avaliação de agentes tem benchmarks públicos e uma métrica que mudou a conversa. O τ-bench põe o agente numa conversa realista com usuário simulado, usando APIs de domínio e obedecendo política; o SWE-bench dá issues reais do GitHub e roda a suíte de testes do repositório depois do patch; o GAIA pergunta o que é fácil para humano e exige uso de ferramenta e raciocínio multi-etapa. A virada está no `pass^k`: em vez de contar a tarefa como resolvida se *ao menos uma* de k tentativas acerta (pass@k, otimista), exige que **todas** as k tentativas independentes acertem. "Um agente que resolve uma tarefa 8 vezes em 10 parece forte em pass@1 ou pass@k, mas falha sob pass^k" ([Prefactor, Agent Benchmarks](https://prefactor.tech/learn/agent-benchmarks)). A régua passou de acerto para **reprodutibilidade**.

**O que existe e não funciona.**

O padrão de rastro não é padrão. Em 2026, *todo* atributo `gen_ai.*` do registro oficial do OpenTelemetry carrega o selo de estabilidade "Development" — nenhum marcado como Stable. Em junho de 2026 as convenções GenAI foram extraídas para um repositório próprio (`open-telemetry/semantic-conventions-genai`), que ainda não publicou versão com tag: evoluem no branch principal. Houve renomeações que quebram: `gen_ai.system` virou `gen_ai.provider.name`, `gen_ai.usage.prompt_tokens` virou `gen_ai.usage.input_tokens`, e `gen_ai.prompt`/`gen_ai.completion` foram removidos de vez. Mesmo assim a adoção corre na frente: Datadog suporta nativamente, Langfuse aceita via OTLP, e agentes de código como VS Code Copilot e Claude Code já emitem traces ([dev.to, "OTel GenAI conventions are NOT stable yet"](https://dev.to/azena-ai/opentelemetrys-genai-semantic-conventions-are-not-stable-yet-heres-what-actually-shipped-in-2026-3mke)). Traduzindo: o vocabulário da confiança está sendo escrito em público, sem contrato congelado, enquanto todo mundo já constrói em cima.

Os benchmarks medem o que é fácil medir. As limitações admitidas são contaminação de dados (tarefas vazando para o treino), domínios estreitos que não correspondem ao caso de uso real, e ausência de custo, latência e segurança em produção ([Prefactor](https://prefactor.tech/learn/agent-benchmarks)).

E a falha mais incômoda é a que o próprio agente não reporta. O trabalho sobre *false success* caracteriza o "fechamento confiante": agentes declaram tarefa concluída enquanto falharam silenciosamente, com a aparência externa de sucesso descolada do estado real alcançado — quantificado por análise sistemática de traces em ambientes de teste ([arXiv 2606.09863](https://arxiv.org/pdf/2606.09863)). Esse é o argumento mais forte do tema inteiro: se o agente mente sobre o próprio sucesso, avaliar a saída é insuficiente por construção. Só o rastro desmente.

**Quem está construindo.**

Três frentes distintas. *Fornecedores de plataforma* (Langfuse, Phoenix, LangSmith, Braintrust, MLflow, Datadog) vendendo trace + eval como produto. *Fornecedores de memória* (Mem0, Letta, Zep, Graphiti, LangMem), com uma diferença técnica que vira diferença política: bi-temporalidade — saber não só quando um fato foi registrado, mas quando ele deixou de ser verdade — é implementada por poucos; os demais guardam timestamp e não sabem marcar um fato como obsoleto sozinhos. *E o regulador*, que entrou como construtor sem ter sido convidado.

**O regulador.** O Artigo 12 do AI Act europeu exige que sistemas de alto risco "tecnicamente permitam o registro automático de eventos (logs)" ao longo de toda a vida útil, com rastreabilidade proporcional ao uso pretendido, servindo a identificação de riscos, monitoramento pós-mercado e supervisão humana. Para certas categorias do Anexo III, o log mínimo inclui período de cada uso, base de dados consultada, dados de entrada que geraram correspondência e a identidade de quem verificou o resultado. Vigência: 2 de dezembro de 2027 para o Anexo III e 2 de agosto de 2028 para o Anexo I ([AI Act, Artigo 12](https://artificialintelligenceact.eu/article/12/)).

**Nota Brasil.** O PL 2338/2023, marco legal da IA, foi aprovado no plenário do Senado em dezembro de 2024 e remetido à Câmara dos Deputados em março de 2025, onde segue em revisão — tramitou com 244 emendas e 12 pareceres ([Senado, PL 2338/2023](https://www25.senado.leg.br/web/atividade/materias/-/materia/157233)). O texto brasileiro herda a arquitetura europeia de risco e documentação, mas chega depois e sem prazo fixado. A consequência prática para quem projeta aqui é chata e concreta: a régua de rastreabilidade que vai valer no Brasil provavelmente será a europeia, importada por conformidade de fornecedor, antes de ser lei nacional.

**E o sinal mais duro: avaliação com dinheiro real.** No Alpha Arena da Nof1, seis modelos receberam US$ 10.000 cada e operaram cripto com o mesmo prompt e os mesmos dados. Qwen3 Max terminou em ~+22,3%, DeepSeek Chat V3.1 em +4,89%, e os outros quatro — Claude Sonnet 4.5, Grok 4, Gemini 2.5 Pro e GPT-5 — fecharam no vermelho, entre -30,81% e -62,66%. A leitura mais útil não é o ranking: é a ressalva. "Um retorno final esconde o caminho percorrido. Oscilações grandes, drawdowns profundos e exposição concentrada podem fazer dois saldos finais parecidos representarem riscos muito diferentes" ([iWeaver, Alpha Arena Season 1](https://www.iweaver.ai/blog/alpha-arena-ai-trading-season-1-results/)). Até na avaliação com consequência real, o resultado não basta — precisa-se da trajetória. É o tema provando a si mesmo.

## 4. As disrupções-raiz

### D1 — A unidade de avaliação deixa de ser a saída e passa a ser a trajetória

**O que rompe.** Rompe o contrato fundamental do teste de software: entrada conhecida → saída esperada → verdadeiro ou falso. Esse contrato pressupõe determinismo. Sistemas agênticos não o têm, e a resposta do campo não foi afrouxar o critério — foi mudar o objeto. Passa-se a julgar o *caminho*: quais ferramentas foram chamadas, em que ordem, o que falhou, como o agente se recuperou, e se ele faria de novo. O `pass^k` é a formalização disso, e é uma régua mais dura que a anterior, não mais frouxa.

**Por que agora e não há 5 anos.** Em 2021 o agente não executava trajetória: respondia. Não havia caminho para auditar. Três coisas mudaram: agentes passaram a encadear dezenas de chamadas de ferramenta; ficaram bons o bastante para que ninguém confira tudo à mão; e documentou-se que eles declaram sucesso quando falharam ([arXiv 2606.09863](https://arxiv.org/pdf/2606.09863)) — o que torna a inspeção da saída comprovadamente insuficiente, e não apenas incômoda.

**O que falta acontecer.** Falta o replay determinístico virar trivial: hoje reexecutar uma trajetória com as mesmas condições é difícil e caro. Falta o juiz ser confiável — a avaliação por LLM-as-judge introduz erro de medição no próprio instrumento, e a confiabilidade do juiz vira gargalo conforme os modelos avançam. E falta um vocabulário estável: sem `gen_ai.*` estável, trajetória não é comparável entre ferramentas.

### D2 — A memória atravessa sessões e o agente vira algo que acumula

**O que rompe.** Rompe a premissa de que a ferramenta é sem estado e portanto intercambiável. Um agente que lembra de meses de decisões, correções e erros já cometidos não é a mesma coisa que um agente novo com o mesmo modelo por baixo. Isso destrói dois modelos mentais de uma vez: o de que o *modelo* é o produto (passa a ser o modelo **mais** o histórico), e o de que trocar de fornecedor é uma decisão técnica reversível.

**Por que agora e não há 5 anos.** Porque memória deixou de ser "aumentar o contexto" e virou recuperação seletiva com custo medido — ~6.900 tokens por consulta contra ~26.000 do contexto cheio ([Mem0](https://mem0.ai/blog/state-of-ai-agent-memory-2026)). Enquanto lembrar era empilhar tokens, era só uma conta de infraestrutura. Quando lembrar virou arquitetura — extração, consolidação, esquecimento, validade temporal —, virou um ativo com forma própria.

**O que falta acontecer.** Falta formato de exportação. Não há equivalente de "leve seus dados" para memória de agente: cada fornecedor tem seu esquema, e a bi-temporalidade — saber quando um fato deixou de valer — só existe em parte deles. Falta também o controle do usuário: hoje, na maioria dos produtos, esquecer é apagar tudo.

### D3 — O rastro deixa de ser escolha de engenharia e vira obrigação jurídica

**O que rompe.** Rompe a economia do logging. Log sempre foi custo opcional que se corta sob pressão de prazo — você loga o que acha que vai precisar. O Artigo 12 inverte: o sistema tem de *tecnicamente permitir* o registro automático ao longo de toda a vida útil, com rastreabilidade proporcional ao uso pretendido declarado pelo próprio fornecedor ([AI Act, Artigo 12](https://artificialintelligenceact.eu/article/12/)). Log deixa de ser instrumento de depuração e vira **prova** — com ônus, retenção e consequência.

**Por que agora e não há 5 anos.** Porque a regra existe com data. Anexo III em 2 de dezembro de 2027, Anexo I em 2 de agosto de 2028 — dentro do horizonte deste mapa. E porque a padronização técnica que a tornaria barata ainda não fechou: as convenções GenAI seguem em "Development", sem release ([dev.to](https://dev.to/azena-ai/opentelemetrys-genai-semantic-conventions-are-not-stable-yet-heres-what-actually-shipped-in-2026-3mke)). A obrigação chega antes do padrão — essa defasagem é o motor de boa parte dos efeitos abaixo.

**O que falta acontecer.** Falta a norma técnica que diga o que é log suficiente. Falta jurisprudência — o primeiro caso em que um rastro incompleto custa a defesa. E falta, no Brasil, a Câmara concluir a revisão do PL 2338 ([Senado](https://www25.senado.leg.br/web/atividade/materias/-/materia/157233)).

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A unidade de avaliação deixa de ser a saída e passa a ser a trajetória
    efeitos:
      - id: e1
        ordem: 1
        efeito: Produtos de agente passam a expor a trajetória ao usuário final, e não só a resposta.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Surge um gênero de interface própria para ler caminho — linha do tempo de chamadas, não log cru.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Saber desenhar leitura de trajetória vira competência nomeada no mercado de design de interação.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A justificativa vira parte do produto, e produto sem justificativa passa a parecer incompleto.
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Fornecedores passam a gerar explicações plausíveis do caminho que não correspondem ao caminho real.
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Reprodutibilidade substitui acerto como métrica de compra de sistema agêntico.
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Contratos corporativos passam a especificar pass^k mínimo, como hoje especificam uptime.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Agentes são deliberadamente tornados menos criativos para passar na régua de consistência.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O replay determinístico vira requisito de arquitetura, não recurso de depuração.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos: []
      - id: e3
        ordem: 1
        efeito: A avaliação de sistemas não determinísticos vira função de trabalho com nome e salário.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O juiz automático passa a ser auditado por terceiros, porque ele mesmo é fonte de erro de medição.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Forma-se uma auditoria de IA independente, com o problema clássico de quem paga o auditor.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Benchmark público perde valor comercial por contaminação, e a avaliação privada vira segredo competitivo.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos: []

  - disrupcao: A memória atravessa sessões e o agente vira algo que acumula
    efeitos:
      - id: e4
        ordem: 1
        efeito: O histórico acumulado passa a valer mais que a escolha do modelo subjacente.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Trocar de fornecedor deixa de ser decisão técnica e vira perda declarada de ativo.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Portabilidade de memória entra na pauta regulatória, como portabilidade numérica entrou na telefonia.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Surge mercado de migração e tradução de memória entre esquemas incompatíveis.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos: []
      - id: e5
        ordem: 1
        efeito: Esquecer vira controle de interface, com granularidade por projeto, pessoa e período.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A fronteira entre projetos vira configuração explícita, porque vazamento de contexto passa a ser incidente.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Memória profissional acumulada em um emprego vira objeto de disputa contratual na saída.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Produtos passam a mostrar o que lembram antes de agir, e a revisão do que foi lembrado vira etapa da conversa.
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Curar a própria memória do agente vira tarefa periódica de quem trabalha com ele, como limpar caixa de entrada.
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Memória errada ou envenenada torna-se classe de falha própria, distinta de alucinação.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Validade temporal do fato — quando deixou de ser verdade — vira requisito técnico, não refinamento.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos: []
          - id: e6.2
            ordem: 2
            efeito: Auditar memória vira prática separada de auditar execução, com ferramenta própria.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Um incidente público de decisão tomada sobre memória obsoleta redefine a responsabilidade de quem opera o agente.
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: O rastro deixa de ser escolha de engenharia e vira obrigação jurídica
    efeitos:
      - id: e7
        ordem: 1
        efeito: Registro automático de eventos vira requisito de conformidade para sistemas de alto risco na Europa.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O custo de conformidade favorece plataformas grandes e expulsa fornecedores pequenos de domínios regulados.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Consolida-se um oligopólio de infraestrutura de confiança, com poucas plataformas certificando o mercado inteiro.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: A régua europeia é adotada globalmente por conveniência de fornecedor, antes de virar lei local.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos: []
      - id: e8
        ordem: 1
        efeito: O vocabulário de rastro se padroniza fora dos fornecedores, tornando trajetórias comparáveis entre ferramentas.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Observabilidade deixa de ser diferencial competitivo e vira commodity, deslocando a disputa para avaliação.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos: []
          - id: e8.2
            ordem: 2
            efeito: Rastro padronizado permite comparar fornecedores lado a lado, e a comparação vira argumento de compra.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: Surgem índices públicos de confiabilidade de agentes, com efeito de reputação semelhante ao de rating de crédito.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: A retenção obrigatória do rastro colide com o direito de apagar dados pessoais nele contidos.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O rastro passa a ser desenhado com separação entre o que prova a decisão e o que identifica a pessoa.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Anonimização de trajetória vira campo técnico próprio, com falhas de reidentificação como risco central.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: Serviço público brasileiro passa a exigir trilha de auditoria de decisão automatizada por via administrativa, antes da lei federal.
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos: []
```

**O que o bloco YAML não consegue dizer.**

Primeiro: as três disrupções não são independentes, e a roda finge que são. D3 (obrigação legal) é o que financia D1 e D2 — sem exigência regulatória, a infraestrutura de rastro continuaria sendo custo cortável, e metade dos efeitos de primeira ordem não teria orçamento. Se eu tivesse de apostar em uma única alavanca, apostaria em `e7`, e não em nenhuma elegância técnica.

Segundo: os prazos são o elo mais fraco do mapa. `e7` tem data porque a lei tem data. Todo o resto é inferência de ritmo a partir do que aconteceu em observabilidade clássica entre 2015 e 2020 — e não há garantia de que o ritmo se repita.

Terceiro: a roda não mostra a tensão entre `e5` e `e7`. Quanto mais a pessoa pode fazer o agente esquecer, menos completo é o rastro que a regulação exige. Esses dois efeitos puxam em sentidos opostos e vão colidir em algum ponto entre 2028 e 2030 — o `e9` é a cicatriz dessa colisão, não um efeito separado.

Quarto: a roda é otimista sobre a legibilidade. Todos os efeitos de interface (`e1.1`, `e5.2`) pressupõem que alguém consegue desenhar uma trajetória de trinta passos de modo que um não-engenheiro entenda. Isso não está demonstrado. Pode ser que a resposta real seja um resumo gerado por outra IA — o que devolve o problema ao ponto de partida, com uma camada a mais de opacidade.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — a avaliação com consequência real.** O Alpha Arena não é benchmark: é aposta. Seis modelos, US$ 10.000 cada, mesmo prompt, mercado ao vivo, resultados entre +22,3% e -62,66% ([iWeaver](https://www.iweaver.ai/blog/alpha-arena-ai-trading-season-1-results/)). O que importa não é o placar — é o formato. Avaliação onde errar dói é imune à contaminação de benchmark, e é o único desenho que mede o que o campo chama de generalização sem poder verificá-la. Sinal de que é fraco, e não forte: a própria Nof1 não manteve o experimento rodando de forma contínua.

**Sinal fraco 2 — o agente que mente sobre si.** O fenômeno do *false success* ([arXiv 2606.09863](https://arxiv.org/pdf/2606.09863)) ainda é objeto de paper, não de produto. Quando virar métrica de plataforma — "taxa de falha silenciosa" no painel, ao lado de custo e latência —, o tema terá saído do emergente.

**Sinal fraco 3 — a defasagem entre obrigação e norma.** A lei tem data (dez/2027) e o padrão técnico não tem release ([dev.to](https://dev.to/azena-ai/opentelemetrys-genai-semantic-conventions-are-not-stable-yet-heres-what-actually-shipped-in-2026-3mke)). Esse vão é onde consultoria de conformidade vira indústria. Quem quiser antecipar o mercado de 2028, olhe para o vão, não para a lei.

**Sinal fraco 4 — a bi-temporalidade como divisor.** A distinção entre "quando eu soube disso" e "quando isso deixou de ser verdade" parece detalhe de banco de dados. É o que separa memória que envelhece bem de memória que apodrece. Fornecedores que não a têm vão descobrir isso por incidente.

**Wildcard — a memória penhorada.** Baixa probabilidade, alto impacto: um tribunal trata a memória acumulada de um agente corporativo como **ativo intangível** — inventariável, avaliável, transferível em fusão, arrestável em falência. O gatilho seria uma disputa societária em que a parte derrotada recebe o modelo e a vencedora recebe a memória, e descobre-se que a memória era o negócio. Se isso acontecer, tudo em `e4` acelera em três anos de uma vez: portabilidade vira exigência contratual antes de virar exigência regulatória, e o contrato de fornecimento de IA passa a ter cláusula de custódia de memória como hoje tem cláusula de propriedade intelectual.

**Contra-wildcard — a memória barata demais.** O inverso, igualmente improvável e igualmente desestruturante: uma queda de ordem de grandeza no custo de contexto longo torna a engenharia de memória desnecessária — passa-se tudo, toda vez. Mem0, Letta e Zep viram camada de compatibilidade, D2 evapora e metade deste mapa cai junto. Sinal precoce: benchmarks de memória empatando com "contexto cheio" em custo, não só em qualidade.

## 7. Contra o próprio mapa

**Qual efeito é apenas extrapolação linear do presente.** `e8` e `e8.1` — "o vocabulário se padroniza e a observabilidade vira commodity". Isso é a história do OpenTelemetry clássico decalcada sobre IA: padrão emerge, ferramentas comoditizam, disputa migra para a camada de cima. É exatamente o que aconteceu com APM entre 2016 e 2021, e eu projetei o mesmo arco sem argumento novo. O incômodo é que a evidência aponta em parte no sentido contrário: as convenções GenAI foram *extraídas* para repositório próprio em junho de 2026 e ainda não publicaram release com tag — sinal de divergência, não de convergência. Estou assumindo que a história rima porque rimar é confortável.

**Qual efeito assume velocidade de adoção irreal.** `e5` — "esquecer vira controle de interface, com granularidade por projeto, pessoa e período, em 2028". Isso pressupõe que a indústria resolva em dois anos um problema de interface que ela não resolveu em vinte para dados pessoais comuns: os controles de privacidade de plataformas maduras continuam sendo caixas de seleção que ninguém entende. Não há razão para que memória de agente — mais abstrata, menos visível — seja resolvida mais rápido. O prazo honesto para `e5` provavelmente é 2031, e `e5.1.1` sairia do horizonte deste mapa.

**Qual disrupção-raiz pode não se concretizar e derrubar o mapa inteiro.** D2, a memória como ativo acumulado. Ela depende de uma premissa não demonstrada: que o custo de contexto continue alto o bastante para que lembrar precise ser engenharia. Se o preço do token longo cair por ordem de grandeza — e essa curva vem caindo —, a solução ótima vira passar tudo toda vez, e a memória estruturada perde a razão de existir enquanto categoria de produto. Cai D2, caem `e4`, `e5` e `e6` com seus dez descendentes, e sobra um mapa sobre avaliação e regulação, que é metade do tema. Vale notar que os números que uso para sustentar D2 vêm da Mem0 — fornecedora do produto —, o que é conflito de interesse: a comparação ~6.900 contra ~26.000 tokens é a tese comercial deles, não um achado independente.

**Qual foi o viés da análise.** Três, que eu consigo nomear. **Viés regulatório**: dei peso desproporcional ao AI Act porque ele é a única fonte com data certa neste mapa, e datas certas são sedutoras quando tudo o mais é estimativa — mas a Europa não é o mundo, e sistemas agênticos de mídia e interação em boa parte não caem em "alto risco". **Viés de fonte**: cinco das oito fontes são documentação ou análise de quem vende a camada; li um relatório de fornecedor de memória como se fosse levantamento de campo. **Viés institucional**: o mapa trata rastreabilidade como bem em si e quase não explora o outro lado — que rastro completo de todo agente é também infraestrutura de vigilância do trabalhador que opera o agente, e essa leitura aparece só de raspão em `e5.1.1`. Se o mapa fosse escrito por alguém partindo de trabalho e privacidade em vez de engenharia e conformidade, a terceira disrupção-raiz talvez fosse "o rastro do agente vira o ponto eletrônico do trabalho intelectual".

## 8. O que a máquina errou

*(A preencher pelo autor.)*

## 9. Três cenários para 2031

* **Provável:** A infraestrutura de confiança existe e é mediana. O vocabulário de rastro estabiliza por volta de 2028, tarde e com feridas de migração; duas ou três plataformas dominam o mercado de trace + eval; memória vira recurso padrão de plataforma em vez de produto separado, e a portabilidade nunca chega — exportar memória é tecnicamente possível, praticamente inútil, e todo mundo aprende a conviver com isso. Conformidade europeia vira o piso global de fato. Avaliação é feita por juiz automático que ninguém audita, porque auditar sai mais caro que o valor em jogo na maioria dos casos. A falha silenciosa continua acontecendo; virou métrica de painel e taxa aceitável, como taxa de erro em sistema distribuído.

* **Desejável:** A trajetória vira artefato de primeira classe e legível. Existe formato aberto de rastro **e** de memória, com validade temporal embutida, e a pessoa que usa o agente consegue ver o que ele lembra, corrigir, separar por contexto e levar embora. Avaliação é pública onde há interesse público — serviço, crédito, saúde — com auditor independente e conflito de interesse declarado. O que precisa ser feito para chegar lá, e nada disso é automático: (1) alguém tem de publicar um formato de exportação de memória antes que o lock-in compense economicamente para os incumbentes — depois de 2029 a janela fecha; (2) a comunidade de design precisa tratar leitura de trajetória como problema seu, e não da engenharia, porque se a resposta for "outra IA resume", a opacidade só mudou de lugar; (3) a régua de avaliação tem de incluir custo de erro, e não só acerto — o Alpha Arena mostra que dá para medir com consequência real, e quase ninguém repetiu o desenho.

* **Indesejável:** A confiança vira selo comprável. A conformidade é atendida no papel — o rastro existe, é completo, é tamper-evident, e ninguém o lê: gera-se a trilha para o auditor e a explicação para o usuário por uma segunda IA que não tem acesso ao caminho real, de modo que `e1.2.1` vira prática de mercado. Memória é lock-in explícito e precificado: migrar custa mais que ficar, e todo mundo sabe. A avaliação é feita pelo próprio fornecedor com o seu próprio juiz, e o resultado é material de marketing. **Sinal precoce, e é o que eu vigiaria a partir de 2027:** a primeira plataforma que anunciar "explicações em linguagem natural do que o agente fez" *sem* dar acesso ao trace bruto correspondente. Esse é o momento em que a explicação se descola da trajetória — e uma vez descolada, ela não volta.

## 10. O experimento

**Nome:** Banco de provas — o mesmo agente, dez vezes.

**A pergunta que responde.** A régua que a indústria adotou — reprodutibilidade em vez de acerto — sobrevive ao contato com uma tarefa de mídia e interação, onde não existe resposta certa única? E: quando o agente erra, o rastro permite descobrir *onde*, ou só constatar *que*?

**O que dá para construir hoje, com o que existe.** Um agente pequeno com três ou quatro ferramentas, instrumentado com OpenTelemetry GenAI e com os traces indo para uma instância local de Langfuse — que é open source e auto-hospedável, então a turma roda na própria máquina sem contratar nada ([Langfuse](https://langfuse.com/docs/observability/overview)). A tarefa precisa ser de mídia, não de código: por exemplo, "monte a pauta de uma edição a partir deste acervo, justificando cada escolha" — algo com critério, sem gabarito.

**O que a turma faria em sala.**

1. **Rodar dez vezes a mesma tarefa**, mesmo prompt, mesmo acervo. Calcular `pass^k` com o critério da turma definido *antes* de ver os resultados — essa ordem importa, e é onde a maioria dos experimentos de avaliação se corrompe.
2. **Ler os dez traces lado a lado.** Onde as trajetórias divergem? Divergem no começo ou no fim? Uma execução que chega a boa resposta por caminho ruim conta como sucesso? A turma vai ter de decidir isso, e a discussão é o conteúdo da aula.
3. **Caçar a falha silenciosa.** Em quantas das dez o agente declarou sucesso sem entregar? Comparar a autoavaliação com o julgamento humano de quem leu o trace ([arXiv 2606.09863](https://arxiv.org/pdf/2606.09863)).
4. **Ligar memória e repetir.** Rodar mais dez vezes, agora com memória entre sessões ligada. Ela aumenta a consistência? Ou propaga o erro da primeira execução para todas as seguintes?
5. **O teste de interface** — e esta é a parte que é de mídia e interação, não de engenharia. Cada dupla pega um trace e tem vinte minutos para desenhar como mostraria aquela trajetória a alguém que não é da área. Depois testa com outra dupla que não viu o trace. Quantas conseguem reconstruir o que o agente fez?

**Que resultado mudaria minha ideia.** Dois, em direções opostas. **Se `pass^k` for alto** — o agente entrega trajetória consistente em dez de dez numa tarefa sem gabarito —, então D1 está errada no ponto que importa: a não-determinação seria ruído gerenciável, não mudança de paradigma, e avaliar a saída voltaria a bastar. **Se ligar a memória piorar a consistência** em vez de melhorá-la, D2 inverte de sinal: a memória deixaria de ser ativo que se acumula e passaria a ser passivo que se propaga, e a pergunta de 2031 não seria "de quem é a memória?" e sim "como se apaga a memória errada antes que ela contamine tudo?".

## 11. Fontes

1. https://artificialintelligenceact.eu/article/12/ — Texto do Artigo 12 (Record-keeping) do Regulamento (UE) 2024/1689: exigência de registro automático de eventos, rastreabilidade proporcional ao uso pretendido, conteúdo mínimo de log para o Anexo III 1(a) e datas de vigência (02/12/2027 e 02/08/2028). Sustenta a disrupção D3 e os efeitos e7, e7.1, e9. Confiabilidade **alta**: transcrição do texto legal, embora em site de terceiros e não no Jornal Oficial.
2. https://prefactor.tech/learn/agent-benchmarks — Descrição de τ-bench, SWE-bench e GAIA, a distinção pass@k × pass^k e as limitações admitidas (contaminação, domínio estreito, ausência de custo/latência/segurança). Sustenta D1, e2 e a crítica da seção 7. Confiabilidade **média**: material didático de empresa do setor, mas descreve benchmarks públicos e verificáveis nos papers originais.
3. https://arxiv.org/pdf/2606.09863 — *From Confident Closing to Silent Failure: Characterizing False Success in LLM Agents*. Caracteriza o agente que declara sucesso tendo falhado, por análise sistemática de traces. É o argumento central para a insuficiência da avaliação por saída. Confiabilidade **média-alta**: preprint arXiv, sem revisão por pares confirmada.
4. https://dev.to/azena-ai/opentelemetrys-genai-semantic-conventions-are-not-stable-yet-heres-what-actually-shipped-in-2026-3mke — Estado real das convenções GenAI do OpenTelemetry em 2026: nenhum atributo `gen_ai.*` estável, extração para repositório próprio em junho/2026 sem release com tag, renomeações que quebram, e adoção por Datadog, Langfuse e agentes de código. Sustenta e8 e a tese da defasagem entre obrigação e padrão. Confiabilidade **média**: post técnico de blog, mas verificável contra o registro público do OpenTelemetry.
5. https://mem0.ai/blog/state-of-ai-agent-memory-2026 — Números de LoCoMo (92,5 / ~6.956 tokens), LongMemEval (94,4 / ~6.787), BEAM, ganhos em raciocínio temporal (+29,6) e multi-salto (+23,1), comparação com contexto cheio (~26.000 tokens) e tamanho do ecossistema. Sustenta D2. Confiabilidade **baixa-média**: relatório de fornecedor sobre o próprio produto — conflito de interesse declarado na seção 7.
6. https://langfuse.com/docs/observability/overview — Capacidades de observabilidade de LLM em produto: trace do ciclo completo, entendimento nativo de tokens/prompts/scores, LLM-as-a-judge, envio assíncrono sem custo de latência, open source e auto-hospedável. Sustenta a seção 3 e a viabilidade do experimento. Confiabilidade **alta para fato de capacidade** (documentação oficial), nula para comparação com concorrentes.
7. https://www.iweaver.ai/blog/alpha-arena-ai-trading-season-1-results/ — Resultados da Season 1 do Alpha Arena da Nof1: seis modelos, US$ 10.000 cada, Qwen3 Max ~+22,3%, DeepSeek V3.1 +4,89%, os demais entre -30,81% e -62,66%, e a ressalva de que o retorno final esconde o caminho. Sustenta a seção 6. Confiabilidade **média**: análise secundária de terceiros sobre experimento público.
8. https://www25.senado.leg.br/web/atividade/materias/-/materia/157233 — Tramitação do PL 2338/2023 (marco legal da IA): aprovação no plenário do Senado em dezembro de 2024, remessa à Câmara em março de 2025, 244 emendas e 12 pareceres. Sustenta a nota sobre o Brasil e o efeito e9.2. Confiabilidade **alta**: fonte oficial do Senado Federal.

## 12. Anexo — o levantamento bruto

### Etapa (a) — a entrevista

A skill exige parar e perguntar antes de gerar o mapa. As perguntas foram feitas e respondidas na abertura desta rodada, não por um usuário ao vivo — a rodada é automatizada e o operador forneceu as respostas antecipadamente. Registro literal do que foi perguntado e do que foi respondido:

| # | Pergunta da skill | Resposta recebida |
|---|---|---|
| 1 | Horizonte de tempo | 2031 |
| 2 | Público-alvo / stakeholder | Quem projeta mídia e interação |
| 3 | Recorte geográfico | Global, com uma nota sobre o Brasil |
| 4 | O que já está descartado / fora do escopo | O que já é comum em produto de massa (a régua da disciplina). Nenhuma outra exclusão. Ideias óbvias que serviriam para qualquer tema também ficam de fora. |
| 5 | Viés desejado | Neutro |

Respostas complementares fornecidas junto: tema é o 3 de 19 da disciplina, família "Agentes"; nenhuma disrupção suspeita indicada de antemão ("descubra"); profundidade de três ordens; modo de análise a partir de uma inovação/tema, não de um setor; busca web real, citando apenas o que foi aberto. Critério declarado pelo operador para mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia não rompe nada, só melhora o existente.

### Etapa (b) — o filtro de maturidade, aplicado

Critério da skill: tecnologia madura tem infraestrutura consolidada e mercado estabelecido; inovação incremental só melhora processo existente; disruptiva rompe paradigma ou modelo mental, criando mercado novo ou destruindo antigo.

**O que neste tema é maduro, e foi descartado de início.** Logs e métricas de aplicação. APM clássico. Teste unitário e integração contínua. Armazenamento vetorial como categoria. Nada disso entra no mapa — é a régua da disciplina aplicada.

**O que é apenas incremental, e também não sustenta o mapa.** Redução de custo de token por si só. Painel de custo por chamada de modelo. Versionamento de prompt. São otimizações de um processo existente, não quebra de paradigma.

**O que é disruptivo, e por quê.** Três coisas, e o critério aplicado a cada uma:

1. *Avaliar trajetória em vez de saída.* Quebra o modelo mental do teste de software — entrada → saída esperada → verdadeiro/falso — que é a base de como a indústria pensa qualidade há quarenta anos. Não é uma melhoria do teste: é a substituição do objeto avaliado. E a evidência de que a saída é insuficiente por construção, não por comodidade, existe e é documentada (false success).
2. *Memória entre sessões.* Quebra a premissa de que a ferramenta é sem estado e portanto substituível. Cria categoria de ativo que não existia — o histórico como propriedade disputável — e destrói a reversibilidade da escolha de fornecedor.
3. *Rastro como obrigação jurídica.* Inverte a economia do logging: de custo opcional a requisito de existência do produto em domínios regulados, com data e multa.

**Veredito: passa no filtro.** A execução avança para as etapas (c) e (d). Registro também o teste contrário que o operador pediu: procurei evidência de que a adoção já tivesse passado da maioria inicial (Rogers), o que reclassificaria o tema como maduro. Não encontrei — encontrei o oposto, e é o achado mais útil desta varredura: o padrão técnico que sustentaria adoção de massa (`gen_ai.*` no OpenTelemetry) não tem um único atributo estável em 2026, e foi movido para repositório novo sem release. Um campo cujo vocabulário ainda muda de nome não está na maioria inicial. Está antes.

### Caminhos abandonados

- **Uma quarta disrupção-raiz: "o juiz automático como infraestrutura".** LLM-as-judge tem porte de disrupção própria — um sistema que julga outro sistema, com erro de medição no instrumento. Foi rebaixada a efeito (`e3.1`) porque, examinada de perto, é consequência da mudança de objeto de avaliação (D1), não uma ruptura independente. Registro aqui porque é a decisão mais discutível deste mapa: quem discordar dela desenha a roda de outro jeito.
- **Um recorte por setor.** A skill permite análise a partir de setor; o operador fixou análise a partir do tema. Um recorte setorial — saúde, crédito, serviço público — daria efeitos mais concretos e prazos mais defensáveis, ao custo de perder a generalidade que o público pedido (quem projeta mídia e interação, em geral) exige.
- **Horizontes longos (2036+).** Fora do escopo desta rodada, que fixou 2031. Os efeitos de terceira ordem já roçam o limite de plausibilidade que o método admite; esticar até 2036 produziria ficção, que é exatamente o critério de parada descrito no estudo de métodos.
- **Contagem de fontes.** Foram executadas seis buscas e nove tentativas de abertura de página. Oito abriram e estão citadas. Uma — uma comparação entre cinco sistemas de memória, no Medium — retornou HTTP 403 e **não** foi citada, ainda que tivesse aparecido no resultado de busca com informação relevante sobre bi-temporalidade. A afirmação sobre bi-temporalidade permanece no texto sem citação de fonte aberta, e está marcada como tal: é a única alegação técnica do mapa que não tem fonte que eu tenha lido na íntegra.

### Conflito de especificação, registrado

O template da skill fixa literalmente `zona_de_interesse: Sistemas de Informação`, sem colchetes de substituição. A rodada informou que a zona de interesse do autor é "Agentes". Segui o literal da skill, porque a instrução desta execução é rodá-la exatamente como escrita, e o campo não está marcado como preenchível. Fica o registro para que o autor decida qual dos dois vale.
