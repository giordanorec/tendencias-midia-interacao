---
tema: "A infraestrutura de confiança: memória, observabilidade e avaliação de agentes"
slug: a-infraestrutura-de-confianca-memoria-observabilidade-e-avaliacao-de-agentes
autor_login: vafs
zona_de_interesse: Agentes
data: 2026-09-11
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global (com nota sobre o Brasil)
disrupcoes_raiz: 3
efeitos_ordem_1: 3
efeitos_ordem_2: 6
efeitos_ordem_3: 6
tecnologias_citadas: [memória persistente de agente (Mem0, Letta, Zep, OpenMemory MCP), protocolos de memória portátil, OpenTelemetry GenAI semantic conventions (gen_ai.*, agent spans, MCP spans), plataformas de observabilidade de LLM (Langfuse, LangSmith, Arize Phoenix, Braintrust, Datadog LLM Observability), avaliação de sistemas não determinísticos (pass^k, τ-bench, GAIA, SWE-bench), LLM-as-judge, trilha de execução auditável (trace/replay), avaliação com consequência real (Nof1 Alpha Arena)]
fontes: 12
confianca: media
experimento: "O mesmo agente, oito vezes — medir pass^k da mesma tarefa em sala e, em seguida, medir o flip posicional do LLM-juiz que ordenou os oito resultados"
skill_usada: futurizacao-vafs
publico_ok: false
---

## 1. Resumo

A pergunta que organiza este tema não é técnica, é probatória: quando a máquina fabrica o
produto, avaliar o produto já não mede a máquina, e passa a ser preciso ver o caminho. Três
coisas se movem ao mesmo tempo, e este mapa trata das três como uma só infraestrutura. A
primeira: avaliar sistema não determinístico não cabe no critério binário de aceite que o
software herdou do teste unitário — a métrica `pass^k` do τ-bench, que pergunta se o agente
acerta **todas** as `k` tentativas, já mostra agentes de ponta com menos de 25% em oito
tentativas onde o acerto em uma tentativa passa de 50%. A segunda: a memória que atravessa
sessões deixa de ser recurso técnico e vira ativo — e, hoje, ativo preso na plataforma de quem
a guarda. A terceira: o trace, que nasceu como artefato de depuração, está virando evidência
com prazo legal, formato e destinatário externo.

Até 2031, o efeito que este mapa considera mais provável não é nenhuma das três isoladamente,
e sim o que elas produzem juntas: a confiança num sistema agêntico deixa de ser demonstrada e
passa a ser **atestada por um terceiro** — com o problema conhecido de que o atestador também
é uma máquina. O risco central do mapa é confundir reprodutibilidade com correção: um
avaliador automático pode ser perfeitamente consistente e consistentemente errado, o que já é
resultado medido, não conjectura.

## 2. O tema

"Infraestrutura de confiança" aqui significa o conjunto de mecanismos que permite afirmar
alguma coisa sobre um sistema agêntico sem lê-lo por inteiro: o que ele registrou do que fez
(observabilidade), o que ele guardou entre uma sessão e outra (memória) e como se decide que
ele está certo (avaliação). São três literaturas e três mercados distintos, tratados aqui como
um objeto só porque respondem à mesma pergunta — *por que isso está certo?* — e porque falham
juntos: memória sem trilha é dívida invisível, trilha sem critério de avaliação é volume de
log, e critério de avaliação sem memória do que já falhou repete o mesmo erro.

O tema encosta em mídia e interação por dois caminhos. O primeiro é de produto: um agente que
lembra entre sessões muda a natureza da interação — deixa de ser ferramenta que se opera e vira
contraparte que acumula, com consequências de desenho (o que ele pode trazer de volta, e
quando) e de privacidade (entre projetos, entre pessoas da mesma equipe, entre empregos). O
segundo é de método: quem projeta interação passa a precisar provar que o sistema se comporta,
e a prova não é mais a captura de tela de um caso feliz — é uma distribuição de resultados.

Merece mapa de futuro, e não levantamento de estado da arte, porque a pergunta interessante não
é quais ferramentas existem (existem muitas, e a lista muda a cada trimestre), e sim **o que
deixa de ser necessário** quando a trilha de execução vira objeto público e a memória vira
ativo transferível. É aí que atores nomeáveis perdem razão de existir.

## 3. Onde isso está hoje

**Observabilidade de LLM já é infraestrutura padrão, não novidade.** Langfuse, LangSmith,
Braintrust, Arize Phoenix, MLflow, W&B Weave, Helicone e Datadog LLM Observability cobrem o
mesmo terreno com posicionamentos diferentes; a leitura de mercado consultada afirma que a
categoria "passou de ferramenta opcional a infraestrutura central para qualquer time rodando IA
em produção" em 2026, cita a pesquisa *State of Agent Engineering* da LangChain com **89% dos
times instrumentando seus agentes**, e projeta o mercado da categoria em **US$ 2,69 bilhões em
2026** ([MarkTechPost, 2026](https://www.marktechpost.com/2026/08/09/top-llm-observability-and-evaluation-platforms-in-2026-langfuse-langsmith-braintrust-arize-and-more-compared/)).
O número de 89% vem de survey de empresa que vende a categoria, citado por terceiro — vale como
indicativo de difusão, não como medida independente. De toda forma, a conclusão para este mapa
é a mesma: **gravar o que o agente fez é problema resolvido.** Não é disrupção-raiz.

**Avaliação está bem atrás da observabilidade.** A mesma fonte registra que só **52,4%** dos
times rodam avaliação offline e **37,3%** rodam avaliação online — contra os 89% que
instrumentam. A diferença entre esses números é, em uma frase, o objeto deste documento:
todo mundo grava, menos da metade julga.

**A padronização do trace está a caminho, mas não chegou.** As convenções semânticas GenAI do
OpenTelemetry — `gen_ai.*`, spans de agente, spans de MCP — foram movidas para um repositório
próprio, `open-telemetry/semantic-conventions-genai`, que se descreve como cobrindo "spans,
métricas e eventos para clientes GenAI, MCP (Model Context Protocol), e convenções específicas
de provedor" ([GitHub, consultado em 11/09/2026](https://github.com/open-telemetry/semantic-conventions-genai)).
A página antiga do site do OpenTelemetry hoje só contém o aviso de mudança de repositório
([opentelemetry.io](https://opentelemetry.io/docs/specs/semconv/gen-ai/)). Nenhuma das duas
páginas abertas nesta sessão trouxe uma declaração explícita de estabilidade; a leitura
secundária corrente é que os atributos seguem em estágio *Development*, sem 1.0 — este
documento **não** afirma isso como fato verificado (ver seção 8).

**A memória de agente é um mercado jovem com formato proprietário.** Mem0, Letta, Zep, Cognee e
LangMem disputam a mesma categoria; o levantamento consultado a compara ao mercado de bancos
vetoriais de 2022–2023 — várias abordagens tecnicamente distintas, adoção corporativa inicial,
compradores sobrepostos. O problema estrutural está descrito com clareza no trabalho de
[Ravindran (Microsoft), arXiv:2605.11032, 10/05/2026](https://arxiv.org/html/2605.11032v1):
"memória acumulada em uma plataforma (…) não pode ser exportada para sistemas concorrentes.
Usuários que trocam de provedor perdem meses de personalização" — e, na transferência entre
modelos, "um agente rodando GPT-4 não consegue transferir de forma significativa seu contexto
aprendido para um rodando Claude ou Gemini".

**A avaliação de não determinismo já tem métrica e já tem número ruim.** O τ-bench
([Yao et al., arXiv:2406.12045](https://arxiv.org/abs/2406.12045)) propôs a `pass^k` — "a chance
de que **todas** as `k` tentativas independentes sejam bem-sucedidas, em média entre as tarefas"
— e mediu, em modelos de ponta com chamada de função, taxa de sucesso abaixo de 50% nas tarefas
e `pass^8` abaixo de 25% no domínio de varejo. Ou seja: o agente que acerta metade das vezes
acerta oito de oito em menos de um quarto dos casos.

**O juiz automático é o gargalo, e isso também já foi medido.** O estudo
["Reliability without Validity"](https://arxiv.org/html/2606.19544v1) (Norman, Rivera e Hughes,
UC Berkeley, arXiv:2606.19544, 17/06/2026) avaliou 21 juízes de nove provedores em MT-Bench,
JudgeBench e RewardBench, com cerca de 541 mil julgamentos individuais. Os achados: o κ de
Cohen dos juízes fica entre **0,376 e 0,511**; a confiabilidade teste-reteste passa de 0,95 nos
melhores; e a taxa de inversão por posição vai de **0,035 a 0,367**. O título é a conclusão:
juízes altamente reprodutíveis que reproduzem o próprio viés — "de forma confiável tomam a
mesma decisão falha, em vez de tomar a decisão correta".

**Auditoria contábil é madura; auditoria de IA não é.** A analogia institucional existe há um
século, mas a prática aplicada a sistemas agênticos está em formação: a ISACA lançou a
certificação *Advanced in AI Audit* (AAIA), e leituras de mercado registram prêmio salarial de
15% a 30% para auditores certificados em IA — dado de fornecedor de certificação, tratado aqui
como sinal de formação de mercado, não como medida.

**Nota sobre o Brasil.** O país ainda não tem marco legal de IA em vigor. O PL 2338/2023 foi
aprovado pelo Plenário do Senado e **remetido à Câmara dos Deputados em 17/03/2025**, pelo
Ofício SF nº 235, "encaminhando autógrafo do projeto para revisão, nos termos do art. 65 da
Constituição Federal" — última movimentação registrada na página oficial de tramitação
([Senado Federal](https://www25.senado.leg.br/web/atividade/materias/-/materia/157233)). O
desenho do texto segue o modelo europeu de classificação por risco, com a ANPD como autoridade
central; a data exata de votação final na Câmara não foi confirmada em fonte primária nesta
sessão e por isso não entra neste documento como fato. Na prática, para uma equipe brasileira em
2026, a exigência de trilha de auditoria chega antes por **contrato com cliente europeu** do que
por lei brasileira.

## 4. As disrupções-raiz

### D1 — O critério de aceite deixa de ser binário e passa a ser estatístico

**O que rompe.** O "pronto" do software, herdado do teste unitário, é binário: passou ou não
passou. Um sistema que roda duas vezes e dá dois resultados não cabe nesse critério — e a
resposta que está se firmando não é consertar o não determinismo, é trocar o critério. `pass^k`
é isso: o aceite deixa de ser um booleano e vira uma distribuição com variância declarada. O
ator cuja razão de existir é ameaçada não é o testador — é a **aprovação por amostra de saída**:
a prática de olhar alguns resultados, achá-los bons e liberar.

**Por que agora, e não há cinco anos.** Porque só agora existem, ao mesmo tempo: agentes bons o
bastante para ninguém conferir tudo (é a premissa do tema), uma métrica publicada que capta
consistência em vez de capacidade, e a adoção dessa métrica fora de quem a propôs — a `pass^k`
saiu do τ-bench e passou a aparecer em documentação de modelo de laboratório de fronteira.

**O que falta para se concretizar.** Falta a métrica atravessar a fronteira do laboratório para
o contrato. Hoje `pass^k` mede modelo em benchmark; para haver disrupção, ela precisa medir
**entrega** — aparecer em critério de aceite de um sistema comprado, não em model card de quem
o vendeu.

### D2 — A memória entre sessões converte o agente de ferramenta em acervo

**O que rompe.** Ferramenta se troca: o custo de sair é de integração, e integração se refaz.
Acervo não se troca — o custo de sair é a perda do que foi acumulado, que não se refaz porque
não foi produzido, foi vivido. Se a memória persistente se firmar, o que perde a razão de
existir é o **fornecedor intercambiável de assistente**: a premissa, hoje corrente, de que
trocar de modelo é uma decisão de preço e desempenho. Passa a ser uma decisão de migração, e
migração que o formato proprietário impede.

**Por que agora.** Porque o contexto ficou caro o bastante para que "lembrar" precise ser
engenharia, e porque existem produtos de memória com adoção real fora de laboratório — Mem0
reportado em ~41 mil estrelas e 14 milhões de downloads em maio de 2026, com integrações
publicadas para Anthropic SDK, OpenAI Agents SDK e Google ADK. Simultaneamente, apareceu a
reação: servidores de memória local falando MCP, para que o acervo fique no disco de quem o
gerou.

**O que falta.** Falta um formato de troca que funcione entre fornecedores e entre modelos. O
trabalho de Ravindran propõe exatamente isso e reporta *Transfer Continuity Scores* de 0,83–0,92
contra linha de base sem memória de 0,28–0,45 entre Claude, GPT-4 e Gemini — mas é proposta de
protocolo de um autor, em preprint, não padrão adotado. Enquanto não houver algo como o MCP fez
por ferramentas, a memória continua sendo o fosso, e não o ativo do usuário.

### D3 — A trilha de execução vira evidência para terceiro, e a autoavaliação deixa de bastar

**O que rompe.** Hoje a afirmação "este sistema presta" é feita por quem o construiu, com o
benchmark que ele escolheu. Se a trilha de execução virar objeto padronizado, com retenção
obrigatória e destinatário externo, o que deixa de fazer sentido é a **autoavaliação do
fornecedor como prova suficiente** — o benchmark publicado pelo próprio laboratório, e o "eu
testei e funciona" do time que entregou.

**Por que agora.** Porque a exigência saiu do plano da boa prática e entrou no plano da norma
com data. O Artigo 12 do AI Act europeu determina que "sistemas de IA de alto risco devem
tecnicamente permitir o registro automático de eventos (logs) ao longo do ciclo de vida do
sistema", com finalidade explícita de rastreabilidade, monitoramento pós-mercado e identificação
de situações de risco ([texto do Artigo 12](https://artificialintelligenceact.eu/article/12/)).
E porque a camada técnica que torna isso auditável por fora — trace padronizado, não formato de
fornecedor — está sendo construída agora no OpenTelemetry, incluindo spans de agente e de MCP.

**O que falta.** Falta a data chegar, e ela acaba de se afastar: o *Digital Omnibus* adiou as
obrigações de alto risco de 2 de agosto de 2026 para **2 de dezembro de 2027** (Anexo III) e de
2 de agosto de 2027 para **2 de agosto de 2028** (Anexo I)
([Gibson Dunn, 2026](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/)).
Falta também a resposta à pergunta que a própria disrupção cria e não resolve: quem audita o
auditor, quando o auditor é outro sistema da mesma natureza.

## 5. A roda dos futuros

O bloco a seguir é lido por máquina. Em prosa, três observações que a Fase 4 produziu e que o
YAML não carrega. Primeira: `e1.1` (o cargo de engenheiro de avaliação) tem sinal **forte** e
confiança apenas **média** de propósito — o sinal é forte porque o cargo já existe em vagas
formais desde o fim de 2025; a confiança é média porque a dúvida não é se ele aparece, é se ele
**se estabiliza** como função própria ou se dissolve de volta na engenharia de ML, como já
aconteceu com outros títulos da mesma família. Segunda: os dois efeitos que dependem de mudança
normativa dentro do horizonte (`e2.1.1` e `e3.1.1`) foram rebaixados para confiança baixa com
precedente explícito — a própria UE acabou de adiar em mais de um ano a obrigação que este mapa
usa como âncora, o que é o argumento mais direto contra supor velocidade regulatória. Terceira:
`e3.2.1` é o efeito mais frágil da roda e foi mantido só porque tem precedente institucional
nomeável (a auditoria contábil também nunca fechou a regressão; ela a encerrou por convenção).

```yaml
roda:
  - disrupcao: O critério de aceite deixa de ser binário e passa a ser estatístico
    efeitos:
      - id: e1
        ordem: 1
        efeito: Times param de perguntar se o agente passou e passam a perguntar em quantas de k tentativas ele passou e com que variância, tornando o relato de dispersão parte do critério de pronto
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A construção do conjunto de avaliação se separa da construção do sistema e vira função própria, cujo entregável é a suíte que julga e não o produto julgado
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A suíte de avaliação entra no contrato de fornecimento de software agêntico como entregável separado, e o comprador passa a auditar a suíte antes de aceitar o sistema
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Como julgar em escala só é viável com juiz automático, a confiabilidade do juiz vira o gargalo da avaliação, e times descobrem que um juiz reprodutível pode estar consistentemente errado
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Calibrar o juiz contra painel humano vira etapa orçada e contratada à parte, e a pergunta sobre quem certifica o avaliador ganha resposta de mercado antes de ganhar resposta institucional
                sinal: fraco
                prazo: 2030
                confianca: baixa
  - disrupcao: A memória entre sessões converte o agente de ferramenta em acervo
    efeitos:
      - id: e2
        ordem: 1
        efeito: O valor percebido de um assistente desloca-se do modelo para o acervo acumulado, e o custo de trocar de fornecedor deixa de ser de integração e passa a ser de perda de contexto
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A memória vira ativo disputado entre plataforma e usuário, com fornecedores guardando-a em formato proprietário e protocolos de memória portátil e servidores locais surgindo como contramovimento
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A portabilidade do que o sistema aprendeu sobre a pessoa entra na agenda regulatória de proteção de dados como sucessora da portabilidade de dados, deslocando a exigência do registro para o modelo do usuário
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A fronteira entre projetos, equipes e empregos deixa de ser dada pelo armazenamento e passa a depender da política de recuperação, e como o vazamento ocorre no canal interno entre agentes a auditoria só da saída final deixa de bastar
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: A unidade de governança de dados deixa de ser o banco e passa a ser o trace, com retenção, expurgo e direito ao esquecimento incidindo sobre a trilha de execução onde o dado efetivamente circulou
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A trilha de execução vira evidência para terceiro e a autoavaliação do fornecedor deixa de bastar
    efeitos:
      - id: e3
        ordem: 1
        efeito: O trace deixa de ser artefato de depuração interna e passa a ser prova, com o que se guarda, por quanto tempo e em que formato decidido por exigência externa em vez de conveniência de engenharia
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A auditoria de IA passa de certificação voluntária de profissional para laudo exigido por contraparte, quando comprador corporativo e seguradora precisam precificar o risco de um sistema que ninguém lê por inteiro
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O laudo de auditoria de agente vira requisito de contrato e de apólice antes de virar requisito de lei, e a norma legal chega depois ratificando prática de mercado já existente
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Como o volume de trace excede a capacidade de leitura humana, a auditoria do agente passa a ser feita por outro agente, e a cadeia de confiança desloca-se um degrau sem se fechar
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: A regressão de verificadores se institucionaliza e o fecho da cadeia passa a ser convencional em vez de demonstrativo, com alguém assinando a responsabilidade por um julgamento que nenhum humano conferiu
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

## 6. Sinais fracos e wildcards

**Sinal fraco mais duro: avaliação com consequência real, em dinheiro.** O Alpha Arena, da
Nof1, deu **US$ 10 mil de capital real** a cada um de seis modelos de fronteira — GPT-5, Claude
Sonnet 4.5, Gemini 2.5 Pro, Grok 4, Qwen3 Max e DeepSeek V3.1 — para operar futuros perpétuos em
mercado ao vivo, sem intervenção humana. O que o desenho tem de diferente de um benchmark
estático está na descrição da própria cobertura: mercado ao vivo "testa mais que previsão",
porque exige "transformar uma análise em posição, escolher tamanho e alavancagem, gerir a
posição e decidir quando sair" ([iWeaver, 2026](https://www.iweaver.ai/blog/alpha-arena-ai-trading-season-1-results/)).
É sinal fraco por ser um experimento, de uma temporada, em um domínio (especulação em cripto)
de validade externa muito limitada — e os **números finais não estão confirmados** nesta sessão:
fontes secundárias divergem entre si e o site primário não abriu (ver seção 8). O que sustenta
o sinal é o desenho, não o placar.

**Sinal fraco: o vazamento mora no canal interno, não na saída.** O benchmark AgentLeak
([El Yagoubi, Badu-Marfo e Al Mallah, arXiv:2602.11510, 15/06/2026](https://arxiv.org/html/2602.11510))
mediu 4.979 traces de execução em cinco LLMs de produção e encontrou vazamento de dado sensível
em **68,8% das mensagens entre agentes** contra **27,2% nas saídas finais** — e, o ponto que
interessa a este mapa, "auditorias só de saída perdem 41,7% das violações". É o argumento
técnico mais direto a favor de `e2.2`: se a governança olhar só o que o sistema respondeu, ela
olha menos da metade do que ele expôs.

**Sinal fraco: a memória persistente já tem literatura de governança própria.** O survey
*Always-On Agents: A Survey of Persistent Memory, State, and Governance in LLM Agents*
(Ding, Nannapaneni, Liu e Zhang, [arXiv:2606.30306](https://arxiv.org/pdf/2606.30306), 30/06/2026)
existe e dedica seção à governança — a extração do corpo do PDF não retornou o texto das seções
nesta sessão, então ele entra aqui como sinal de que o campo se organizou, não como fonte de
afirmação substantiva.

**Wildcard (baixa probabilidade, alto impacto): exigência de trilha de auditoria para toda
decisão tomada por IA em serviço público, com acesso de terceiro.** Não a obrigação de *guardar*
log, que o Artigo 12 já prevê, mas a obrigação de **entregá-lo a auditor independente** em
formato padronizado. Se isso ocorrer, `e3` e `e3.1` deixam de depender de adoção voluntária e
passam a ter data, o que comprime todo o ramo D3 em anos em vez de décadas — e transforma a
convenção semântica do OpenTelemetry, hoje uma discussão de engenharia, em objeto de norma
técnica com força legal. A probabilidade é baixa até 2031 pela razão registrada na seção 7: a
tendência observada no período foi de **adiamento**, não de aceleração.

## 7. Contra o próprio mapa

- **A âncora regulatória do mapa acabou de andar para trás, e isso enfraquece D3 mais do que
  qualquer objeção conceitual.** Todo o ramo `e3` se apoia na ideia de que existe uma exigência
  externa com data. Essa data mudou durante a própria produção deste documento: o *Digital
  Omnibus* moveu a obrigação de alto risco do Anexo III de 2 de agosto de 2026 para 2 de
  dezembro de 2027, e a do Anexo I de 2027 para 2 de agosto de 2028. O sentido do movimento
  importa mais que a duração: o regulador que este mapa usa como motor demonstrou, no ano de
  referência, disposição para adiar quando a indústria alega falta de preparo. Qualquer efeito
  deste mapa que dependa de prazo regulatório deve ser lido com essa correção aplicada.
- **`e1.1` é extrapolação linear, não futurização.** O cargo de engenheiro de avaliação não vai
  surgir — ele surgiu. Já aparece em vagas formais desde o fim de 2025 e em processos seletivos
  de grandes firmas de consultoria e de laboratórios. Foi mantido na roda porque o efeito de 3ª
  ordem que ele origina (`e1.1.1`, a suíte como entregável contratual) ainda é futuro, mas o
  efeito de 2ª ordem em si é descrição do presente com data futura colada. Um mapa que o
  apresentasse como previsão estaria cobrando crédito por observar o que já aconteceu.
- **Dois efeitos assumem velocidade de mudança institucional sem precedente comparável.**
  `e2.1.1` (portabilidade do aprendido como direito, até 2031) e `e3.1.1` (laudo como requisito
  de apólice, até 2031). O caso comparável mais próximo é a portabilidade de dados na Europa: a
  Diretiva de proteção de dados é de 1995 e o direito exercível de portabilidade só entrou em
  vigor com o GDPR em 2018 — mais de duas décadas do princípio ao direito. Supor cinco anos para
  um percurso análogo, num terreno menos definido (o que é "o que o sistema aprendeu sobre mim"
  não tem sequer definição técnica consensual), é o item mais frágil do mapa junto com `e3.2.1`.
- **`e3.2.1` é o efeito que mais se aproxima de ficção especulativa geral**, do tipo que a regra
  de parada manda cortar por servir a qualquer disrupção. Sobreviveu porque tem precedente
  concreto e nomeável: na auditoria contábil, a mesma regressão ("quem audita o auditor") nunca
  foi resolvida por demonstração — foi encerrada por arranjo institucional, e só depois de um
  escândalo de escala suficiente. Isso dá ao efeito um mecanismo, mas o mecanismo é uma
  analogia com outro setor, não um sinal observado neste. Está com sinal fraco e confiança baixa
  por isso, e é citado de novo na seção 8.
- **D1 pode simplesmente não se concretizar, e o motivo é banal: custo.** Rodar `pass^k` com k=8
  custa oito vezes mais que rodar uma vez. Enquanto a avaliação for centro de custo sem
  contraparte contratual, a pressão econômica empurra na direção oposta — para `pass@1` e
  amostragem. O dado que apoia essa objeção está na própria seção 3: 89% instrumentam, 52,4%
  avaliam offline, 37,3% avaliam online. A adoção de observabilidade é barata e alta; a de
  avaliação é cara e baixa. Se essa razão não mudar até 2031, `e1`, `e1.1.1` e `e1.2.1` caem
  juntos, e com eles cerca de um terço da roda.
- **Viés de quem constrói e de quem encomenda.** Este mapa foi produzido por um sistema agêntico
  que é, ele próprio, objeto do tema — um agente com memória entre sessões, cujo trabalho é
  julgado por outro agente. Isso tende a inflar a plausibilidade da infraestrutura que o
  sustenta: é mais fácil derivar efeitos de um mundo em que memória e avaliação de agente são
  centrais quando se opera de dentro dele. A contrapartida deliberada foi manter, na seção 3, os
  dois números que mais desfavorecem a tese (o `pass^8` abaixo de 25% e o κ de 0,376–0,511 dos
  juízes), em vez de tratá-los como detalhe técnico. O viés declarado na entrevista foi
  **neutro**; o viés estrutural descrito aqui não é corrigível por declaração, só por exposição.

## 8. O que a máquina errou

**1. A data da obrigação europeia — o erro mais consequente desta rodada, e o único pego por ter
aberto a fonte.** A busca devolveu, com aparência de fato assentado, "Article 12 enforcement
begins August 2, 2026" — e essa é exatamente a data que eu tinha de memória, do calendário
original do regulamento. As duas coisas concordavam, o que normalmente é o sinal mais
convincente de que se está certo. Ao abrir a página do Artigo 12, a data é outra: **2 de
dezembro de 2027** para Anexo III e **2 de agosto de 2028** para Anexo I, por força do Artigo
113(c) alterado. Confirmado em segunda fonte independente (Gibson Dunn), que explica a causa: o
*Digital Omnibus*. Se o mapa tivesse sido escrito a partir do snippet — ou da memória —, o prazo
de `e3` estaria mais de um ano adiantado, e `e3.1` e `e3.1.1` herdariam o erro em cascata, sem
que nada no texto parecesse suspeito. É o caso exemplar do problema: memória não verificada e
fato verificado são indistinguíveis até alguém abrir a página, e aqui a memória estava **certa
sobre o texto original e errada sobre o direito vigente**, que é a forma mais difícil de detectar.

**2. Os números do Alpha Arena não estão confirmados, e as fontes secundárias se contradizem.**
Uma delas reporta GPT-5 com −39,73%; outra, −62,66%. Uma manchete afirma que a DeepSeek venceu;
outra, que o Qwen3 Max venceu com cerca de +22%. O site primário, `nof1.ai`, devolveu HTTP 429 e
não abriu nesta sessão. O que é consistente entre todas as fontes é o **desenho** — seis modelos,
US$ 10 mil reais cada, mercado ao vivo, sem intervenção humana — e só isso entrou no documento.
O placar ficou de fora: o Alpha Arena sustenta o argumento de que existe avaliação com
consequência real, não o argumento de que um modelo específico é melhor que outro.

**3. Uma afirmação sobre estabilidade que quase entrou como fato.** Eu ia escrever que as
convenções GenAI do OpenTelemetry seguem todas em estágio *Development*, sem nenhuma marcada
como *Stable*. Isso aparece em várias leituras secundárias e bate com o que eu esperava. Mas as
duas páginas oficiais que abri — a do site, que hoje só contém um aviso de mudança de
repositório, e a do repositório novo — **não trazem declaração explícita de estabilidade**. A
afirmação foi rebaixada no texto de fato verificado para "leitura secundária corrente", com a
lacuna dita em voz alta. É menos elegante e é o que a verificação autoriza.

**4. Um número de adoção que quase virou dado neutro.** Os "89% dos times instrumentam seus
agentes" vêm da pesquisa *State of Agent Engineering* da LangChain — empresa que vende a
plataforma cuja adoção o número mede — e chegaram aqui por citação de terceiro, não pela fonte
original. Mantido no documento porque a ordem de grandeza é coerente com o resto do quadro, mas
etiquetado como indicativo de difusão, não como medida independente. O contraste que o número
serve para fazer (89% gravam × 52,4% avaliam) vem da mesma fonte e herda a mesma ressalva.

**5. Um efeito gerado por analogia, não por sinal do domínio.** `e3.2.1` (a regressão de
verificadores institucionalizada) saiu fácil demais porque é o padrão da auditoria contábil
recolocado neste domínio. A auditoria da Fase 4 expôs que não há sinal específico do mercado de
IA apontando nessa direção — só o paralelo histórico. Analogia entre setores gera hipótese
legítima, mas não é evidência do domínio; por isso o efeito ficou com sinal fraco e confiança
baixa, e está registrado aqui para não ser lido como mais sólido do que é.

## 9. Três cenários para 2031

**Provável.** A observabilidade é universal e a avaliação continua desigual: quase todo sistema
agêntico em produção emite trace padronizado, e a maioria das equipes ainda decide por
amostragem de saída, porque avaliar direito custa `k` vezes mais e ninguém do lado de fora
exige. A memória se firmou como diferencial de produto e continua majoritariamente presa à
plataforma; existem protocolos de portabilidade, usados por uma minoria técnica, do mesmo jeito
que existem formatos abertos de documento. A auditoria de IA existe como serviço vendido, com
certificação profissional e prêmio salarial, mas o laudo é comprado por quem já quer o laudo —
não é exigido por ninguém. A mudança institucional ficou atrás da técnica, e a data europeia
andou para trás mais uma vez.

**Desejável.** Existe, por volta de 2031, um corpo público de dados sobre **quando o avaliador
automático erra** — não a promessa de que a avaliação funciona, mas o mapa específico de onde
ela não funciona, por tipo de tarefa e por modelo de juiz, do mesmo gênero do que o
"Reliability without Validity" começou a fazer com 21 juízes. Isso exigiria que empresas
publicassem os casos em que a própria avaliação as enganou, que é o tipo de publicação que
hoje quase não existe. No mesmo cenário, portabilidade de memória virou requisito de compra
corporativa antes de virar direito individual — não por altruísmo, por aversão a lock-in de
quem assina o contrato.

**Indesejável.** Um sistema agêntico de uso amplo tomou decisões erradas durante meses sem que
ninguém percebesse, porque o juiz automático que o avaliava era consistente — passava em todas
as rodadas, com a mesma falha em todas — e porque a auditoria olhava a saída final, onde o
problema não aparecia. O sinal precoce disso já é visível hoje, e não é especulação: está nos
dois números medidos que este documento cita, o κ entre 0,376 e 0,511 dos juízes e os 41,7% de
violações que uma auditoria só de saída não vê. O cenário indesejável não requer nenhuma
tecnologia nova — requer apenas que as duas medições existentes continuem sendo tratadas como
detalhe de implementação.

## 10. O experimento

**O que é.** "O mesmo agente, oito vezes." Escolhe-se uma tarefa com resposta verificável e
critério de sucesso escrito **antes** (por exemplo: extrair cinco campos específicos de um
documento, ou executar um fluxo de três passos com uma regra de política a respeitar). Roda-se
a mesma tarefa, com o mesmo prompt, oito vezes. Registra-se `pass@1` (acertou ao menos uma vez)
e `pass^8` (acertou as oito). Em seguida, a segunda metade, que é onde está o ponto: pede-se a
um LLM-juiz que ordene os oito resultados do melhor ao pior — e depois se pede de novo, com a
ordem de apresentação dos oito invertida. Compara-se as duas ordenações.

**Que pergunta sobre o futuro ele ajuda a responder.** Duas, uma por metade. A primeira: qual é
a distância real, num caso concreto e pequeno, entre "funciona" e "funciona sempre" — que é a
distância que D1 propõe transformar em critério de aceite. A segunda: quanto do julgamento do
juiz é sobre o conteúdo e quanto é sobre a posição em que o conteúdo apareceu — que é a
premissa que `e1.2` levanta e que o estudo de Berkeley mediu em 541 mil julgamentos. Um
experimento de sala não replica esse estudo; ele torna o achado tangível para quem vai projetar
com essas ferramentas.

**Que tecnologia emergente usa, e por que não dá com tecnologia madura.** Usa avaliação de
sistema não determinístico (`pass^k`) e juiz automático com teste de inversão posicional.
Não dá com teste de software maduro pela razão que define o tema: o teste unitário pressupõe
que a mesma entrada produz a mesma saída, e toda a dificuldade aqui começa quando isso deixa de
valer. Rodar a suíte de teste oito vezes num sistema determinístico é desperdício; num sistema
agêntico, é a única medição honesta.

**O que a turma faria ao testar em sala.** Cada aluno escreve o critério de sucesso da sua
tarefa antes de rodar — e entrega o critério antes de ver qualquer resultado, para que não seja
ajustado depois. Roda as oito. Depois, a turma troca de tarefa: cada um avalia o material do
outro com o mesmo juiz automático, e compara o veredito do juiz com o próprio. A discussão
interessante não é qual agente acertou mais — é quantos critérios de sucesso precisaram ser
reescritos depois de ver a primeira rodada, porque isso mede a facilidade com que uma avaliação
se acomoda ao resultado que ela deveria julgar.

**O que seria um resultado que mudaria de ideia.** Se `pass^8` ficar próximo de `pass@1` nas
tarefas da turma — isto é, se o agente que acerta uma vez acertar quase sempre as oito —, a
premissa central de D1 fica muito mais fraca: o critério binário de aceite continuaria servindo,
e a métrica estatística seria sofisticação sem consequência prática. Da mesma forma, se as duas
ordenações do juiz coincidirem com a ordem invertida, o gargalo que `e1.2` descreve não existe
nas tarefas que esta turma faz, e o efeito deveria ser rebaixado ou cortado do mapa.

## 11. Fontes

Doze páginas abertas e lidas nesta sessão, via busca e leitura de página. Duas delas retornaram
pouco além de metadado, e isso está dito em cada uma — entram na contagem porque foram abertas e
porque o que **não** entregaram determinou o que este documento pôde afirmar.

1. **EU Artificial Intelligence Act — [Artigo 12: Record-Keeping](https://artificialintelligenceact.eu/article/12/).**
   Sustenta D3 e `e3`: texto do parágrafo 1 ("sistemas de IA de alto risco devem tecnicamente
   permitir o registro automático de eventos ao longo do ciclo de vida") e as datas de aplicação
   pelo Artigo 113(c). Confiável: reprodução de texto legal por portal especializado; alta para
   o texto, média para o comentário — as datas foram cruzadas com a fonte 2.
2. **Gibson Dunn — [EU AI Act Omnibus Agreement: Postponed High-Risk Deadlines](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/).**
   Confirma o adiamento (Anexo III para 2/12/2027, Anexo I para 2/8/2028) e a manutenção de
   2/8/2026 para as obrigações de transparência do Artigo 50. Sustenta a seção 7 e a correção
   registrada na seção 8. Confiável: escritório de advocacia com interesse comercial em serviços
   de conformidade, mas as datas são verificáveis e batem com a fonte 1; alta para as datas.
3. **Yao, S. et al. — [τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains](https://arxiv.org/abs/2406.12045)**, arXiv:2406.12045.
   Sustenta D1: definição de `pass^k` e os números de inconsistência (sucesso abaixo de 50%,
   `pass^8` abaixo de 25% em varejo). Confiável: preprint de trabalho aceito em conferência
   revisada por pares (ICLR 2025); alta.
4. **Norman, J. D., Rivera, M. U. e Hughes, D. A. (UC Berkeley) — [Reliability without Validity](https://arxiv.org/html/2606.19544v1)**, arXiv:2606.19544, 17/06/2026.
   Sustenta `e1.2` e a seção 9: 21 juízes, nove provedores, ~541 mil julgamentos; κ 0,376–0,511;
   inversão posicional 0,035–0,367; teste-reteste acima de 0,95. É a fonte mais decisiva deste
   documento e **ainda não passou por revisão por pares** — tratar com essa ressalva.
5. **Ravindran, S. K. (Microsoft) — [Portable Agent Memory](https://arxiv.org/html/2605.11032v1)**, arXiv:2605.11032, 10/05/2026.
   Sustenta D2 e `e2.1`: o diagnóstico de aprisionamento ("não pode ser exportada para sistemas
   concorrentes"), a impossibilidade de transferência entre modelos, e os *Transfer Continuity
   Scores* de 0,83–0,92 contra linha de base de 0,28–0,45. Preprint de autor único, propondo o
   próprio protocolo — forte como diagnóstico do problema, interessado como avaliação da solução.
6. **El Yagoubi, F., Badu-Marfo, G. e Al Mallah, R. — [AgentLeak](https://arxiv.org/html/2602.11510)**, arXiv:2602.11510v3, 15/06/2026.
   Sustenta `e2.2` e a seção 6: 4.979 traces, cinco LLMs de produção; 68,8% de vazamento em
   mensagens entre agentes contra 27,2% na saída final; 41,7% das violações invisíveis a
   auditoria de saída. Preprint; números claros e desenho replicável, sem revisão por pares.
7. **Ding, T., Nannapaneni, A., Liu, B. e Zhang, L. — [Always-On Agents: A Survey of Persistent Memory, State, and Governance in LLM Agents](https://arxiv.org/pdf/2606.30306)**, arXiv:2606.30306, 30/06/2026.
   **Leitura parcial:** título, autoria, data e estrutura de seções foram confirmados; o corpo do
   PDF não foi extraído nesta sessão. Por isso entra como sinal de que o campo se organizou em
   torno de governança de memória, e **não** sustenta nenhuma afirmação substantiva do documento.
8. **MarkTechPost — [Top LLM Observability and Evaluation Platforms in 2026](https://www.marktechpost.com/2026/08/09/top-llm-observability-and-evaluation-platforms-in-2026-langfuse-langsmith-braintrust-arize-and-more-compared/)**, 09/08/2026.
   Sustenta a seção 3 e a rejeição da observabilidade como disrupção-raiz: 89% instrumentam,
   52,4% avaliam offline, 37,3% online; mercado em US$ 2,69 bi em 2026. Confiável: agregação
   editorial de números de terceiros — os percentuais vêm de survey da LangChain, parte
   interessada. Média, e etiquetada como tal no corpo do texto.
9. **iWeaver — [Alpha Arena Season 1 Results](https://www.iweaver.ai/blog/alpha-arena-ai-trading-season-1-results/)**.
   Sustenta apenas o **desenho** do Nof1 Alpha Arena na seção 6 (seis modelos, US$ 10 mil reais
   cada, mercado ao vivo). Baixa para os números: divergem de outras fontes secundárias e não
   foram confirmados no site primário (ver seção 8).
10. **GitHub — [open-telemetry/semantic-conventions-genai](https://github.com/open-telemetry/semantic-conventions-genai)**, consultado em 11/09/2026.
    Sustenta a seção 3: existência do repositório e cobertura declarada (spans, métricas e
    eventos para clientes GenAI, MCP e convenções de provedor). **Não** trouxe declaração de
    estabilidade — a lacuna está registrada na seção 8. Fonte primária; alta para o escopo,
    silente quanto a status.
11. **OpenTelemetry — [Generative AI semantic conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/)**.
    **Leitura parcial:** a página hoje contém apenas o aviso de mudança de repositório. Entra
    porque foi aberta e porque o que ela deixou de trazer é a razão de a afirmação sobre
    estabilidade ter sido rebaixada no texto. Fonte primária; alta para o que diz, que é pouco.
12. **Senado Federal — [PL 2338/2023, página de tramitação](https://www25.senado.leg.br/web/atividade/materias/-/materia/157233)**.
    Sustenta a nota sobre o Brasil na seção 3: aprovado no Plenário do Senado e remetido à
    Câmara dos Deputados em 17/03/2025 (Ofício SF nº 235). Fonte primária oficial; alta. Não
    confirma a data de votação final na Câmara, que por isso não aparece no documento.

## 12. Anexo — o levantamento bruto

### Entrevista (Fase 1) — os seis pontos, e como foram respondidos

Todos os seis pontos vieram respondidos no pedido, sem necessidade de segunda pergunta. Registro
do que ficou valendo, para que a leitura do frontmatter não dependa da memória de conversa:

1. **Tema e recorte** — "A infraestrutura de confiança: memória, observabilidade e avaliação de
   agentes", tema 3 de 19 da disciplina, família "Agentes". Recorte a partir da inovação/tema,
   não de um setor.
2. **Horizonte** — 2031.
3. **Para quem** — quem projeta mídia e interação.
4. **Recorte geográfico** — global, com uma nota sobre o Brasil (cumprida na seção 3).
5. **O que está descartado** — o que já é comum em produto de massa, pela régua da disciplina.
   Nenhuma outra exclusão.
6. **Viés desejado** — neutro. Declarado no corpo do documento (seção 7, último item), junto com
   a observação de que o viés estrutural de quem produz o mapa não é anulado pela declaração.

Instruções adicionais recebidas e aplicadas: profundidade de três ordens; nenhuma disrupção
suspeita fornecida de antemão (a instrução foi descobrir); excluir ideias óbvias que serviriam a
qualquer tema; e o critério declarado de mudança de ideia — evidência de que a adoção já passou
da maioria inicial na curva de Rogers, ou de que a tecnologia não rompe nada e só melhora o que
existe. Esse critério foi aplicado literalmente na Fase 2 e é a razão de duas rejeições abaixo.

### Fase 2 — candidatos testados, aceitos e rejeitados

| Candidato | Teste 1 (madura?) | Teste 2 (emergente?) | Teste 3 (disruptiva?) | Decisão |
|---|---|---|---|---|
| Logs e métricas de aplicação; teste unitário determinístico | Sim — décadas em produção, padrão inquestionado de qualquer fluxo de engenharia. | — | — | **Madura.** Rejeitada. É a régua contra a qual o tema se define, não candidata. |
| Plataformas de observabilidade de LLM (Langfuse, LangSmith, Arize Phoenix, Braintrust, Datadog LLM Obs, Helicone, MLflow, W&B Weave) | Sim — mais de três implantações em escala, categoria descrita como "infraestrutura central" em 2026, 89% de instrumentação reportada, mercado de US$ 2,69 bi. O que resta é ficar mais barato e mais integrado. | — | — | **Madura.** Rejeitada como raiz; entra na seção 3 como estado atual. Passou da maioria inicial — é exatamente o critério de mudança de ideia declarado na entrevista, aplicado contra o candidato mais óbvio do tema. |
| Convenções semânticas GenAI do OpenTelemetry (`gen_ai.*`, agent spans, MCP spans) | Não — sem 1.0, repositório recém-separado, sem declaração de estabilidade nas páginas oficiais abertas. | Sim — plataformas padronizaram em cima delas, agentes de código já emitem traces nesse formato. | **Limítrofe, e resolvido como não.** Se escalar, o que morre é o trace proprietário — o que, sozinho, é "fica mais fácil trocar de fornecedor", isto é, melhoria. O que ela **habilita** (auditoria por terceiro que lê o caminho sem acesso ao sistema) é disruptivo, mas o sujeito da disrupção é a auditoria, não a convenção. | **Emergente, habilitadora, não disrupção-raiz.** Rejeitada como raiz e reposicionada como condição de possibilidade de D3. Registrada aqui porque é o candidato que um mapa apressado promoveria. |
| Engenharia de contexto / redução de token (compressão, poda de contexto, controle do que a IA vê) | Não — ainda heterogênea, sem padrão. | Sim — ferramentas em uso real, ganhos reportados na casa dos 60–90% de redução. | Não. A única resposta possível ao "o que deixa de fazer sentido" é "fica mais barato e cabe mais". Nenhum ator nomeável perde razão de existir. | **Melhoria, não disrupção.** Rejeitada — aplicação direta do critério de mudança de ideia declarado na entrevista. |
| RAG e bancos vetoriais como substrato de memória | Sim — padrão de fato há anos, opção default de qualquer aplicação com recuperação. | — | — | **Madura.** Rejeitada. Relevante como infraestrutura de D2, não como raiz. |
| Avaliação de sistemas não determinísticos como critério de aceite (`pass^k`, suítes de eval, LLM-as-judge) | Não — 52,4% offline e 37,3% online, contra 89% de instrumentação; não é escolha padrão em nenhum fluxo em escala. | Sim — `pass^k` saiu do τ-bench para documentação de modelo de laboratório de fronteira; cargo dedicado apareceu em vagas formais desde o fim de 2025. | Sim — o aceite binário de software, e a prática de aprovar por amostra de saída, perdem a razão de existir quando o critério de pronto vira uma distribuição. | **Disrupção-raiz (D1).** |
| Memória persistente de agente entre sessões e ferramentas (Mem0, Letta, Zep, Cognee, LangMem, OpenMemory MCP) | Não — mercado comparado ao de bancos vetoriais em 2022–2023; nenhum fornecedor é padrão. | Sim — Mem0 reportado em ~41 mil estrelas e 14 M de downloads em maio/2026, com integrações para os três principais SDKs de agente. | Sim — o **fornecedor intercambiável** perde razão de existir: trocar deixa de ser decisão de preço e vira migração impedida por formato proprietário. | **Disrupção-raiz (D2).** |
| Auditoria independente de sistema agêntico, com a trilha de execução como objeto auditável | Não — a auditoria contábil é madura; esta não. Certificação profissional recém-lançada. | Sim — certificação AAIA da ISACA em mercado, obrigação de registro com data no AI Act, camada técnica de trace padronizado em construção. | Sim — a **autoavaliação do fornecedor como prova suficiente** perde razão de existir: o benchmark publicado por quem vende, e o "testamos e funciona" de quem construiu. | **Disrupção-raiz (D3).** |
| Avaliação com consequência real em dinheiro (Nof1 Alpha Arena) | Não. | **Não** — é um experimento, uma temporada, um domínio. Não há adoção crescente fora do laboratório; há um caso. | — (não chega a ser testado) | **Não é tecnologia emergente — é sinal.** Vai para a seção 6 como sinal fraco, pelo desenho e não pelo placar. |
| Exigência regulatória de trilha de auditoria para toda decisão de IA em serviço público, com acesso de terceiro | Não. | Não — não existe fora do plano normativo; é cenário, não tecnologia. | — | **Wildcard.** Seção 6. |

### Fase 4 — a auditoria, efeito a efeito

Registro do que a auditoria mudou. Nenhum efeito atravessou os três testes sem alteração de
confiança, de redação ou de posição no texto — o que a Fase 4 estabelece como condição de ter
sido feita de verdade.

- **`e1` (critério de pronto vira distribuição)** — sobreviveu ao teste de elo causal (o passo
  intermediário é nomeável: a métrica existe, foi adotada por laboratório, precisa atravessar
  para o contrato). Confiança mantida em média, não elevada, pela objeção de custo registrada na
  seção 7: `k` vezes mais caro, sem contraparte contratual que pague.
- **`e1.1` (função de avaliação se separa)** — **falha o teste de extrapolação linear.** Já
  aconteceu. Mantido com sinal forte, mas a confiança ficou em média e o texto da seção 5 diz
  explicitamente que a dúvida não é o surgimento, é a estabilização. Item citado na seção 7.
- **`e1.1.1` (suíte como entregável contratual)** — elo causal íntegro; **falha o teste de
  velocidade**: prática contratual de fornecimento de software muda em prazo de década.
  Rebaixado para confiança baixa e prazo empurrado para o fim do horizonte.
- **`e1.2` (o juiz vira o gargalo)** — sobreviveu inteiro, e é o efeito mais bem sustentado por
  evidência medida da roda (541 mil julgamentos). Sinal elevado de médio para forte na revisão,
  não rebaixado.
- **`e1.2.1` (meta-avaliação como camada contratada)** — o elo causal original pulava uma etapa:
  ia de "o juiz é pouco confiável" direto para "surge um mercado de meta-avaliação". Reescrito
  com o passo que faltava — a calibração contra painel humano como etapa orçada — e ainda assim
  mantido em confiança baixa.
- **`e2` (valor migra para o acervo)** — único efeito da roda com confiança alta. Sobreviveu
  porque não depende de nenhuma mudança institucional, só de comportamento já observável, e
  porque o custo de troca por perda de contexto está documentado em fonte aberta.
- **`e2.1` (memória como ativo disputado)** — sobreviveu; o contramovimento (protocolos portáteis,
  servidores locais) já existe, o que dá ao efeito os dois lados do mecanismo em vez de um só.
- **`e2.1.1` (portabilidade do aprendido entra na agenda regulatória)** — **falha o teste de
  velocidade**, com precedente explícito: da Diretiva de 1995 ao direito exercível de
  portabilidade em 2018 foram mais de duas décadas. Rebaixado para confiança baixa, prazo em
  2031, e citado na seção 7.
- **`e2.2` (a fronteira passa a depender da política de recuperação)** — o efeito original dizia
  apenas "a privacidade entre projetos vira problema", o que é afirmação vaga. Reescrito para
  nomear onde o problema mora — no canal interno entre agentes, não na saída — apoiado no achado
  de 41,7% do AgentLeak. Ganhou mecanismo; confiança mantida em média.
- **`e2.2.1` (o trace vira a unidade de governança de dados)** — elo causal narrável, sem
  precedente de velocidade. Confiança baixa.
- **`e3` (o trace vira prova)** — sobreviveu, mas o prazo foi **corrigido para pior** durante a
  própria auditoria, ao descobrir o adiamento do AI Act. É o efeito cujo prazo mais mudou entre
  o rascunho e a versão final.
- **`e3.1` (auditoria de IA vira ofício)** — na primeira redação era "surge um ofício de auditoria
  de IA com certificação própria", o que **falha o teste de extrapolação linear**: a certificação
  já foi lançada. Reescrito para nomear o passo que ainda é futuro — a passagem de certificação
  voluntária para laudo exigido por contraparte.
- **`e3.1.1` (laudo como requisito de apólice antes de lei)** — mantido em confiança baixa; a
  ordem que ele propõe (mercado antes da norma) tem precedente em seguro cibernético, mas o
  precedente é analógico.
- **`e3.2` (auditoria de agente feita por agente)** — sinal rebaixado de médio para fraco: há
  produtos que fazem isso, mas nada que indique que a **auditoria formal** vá por esse caminho.
- **`e3.2.1` (regressão de verificadores institucionalizada)** — o efeito mais próximo do corte
  pela regra (c) da regra de parada. Mantido por ter precedente institucional nomeável, com a
  origem analógica declarada na seção 8.

### Efeitos considerados e cortados antes de entrar na roda

- **"A memória de anos consolida o mercado de modelos de fundação em dois ou três fornecedores."**
  Cortado por pular etapa: vai de "memória é ativo" para "consolidação de mercado" sem explicar
  por que a memória permaneceria não portável — e a própria fonte que sustenta o diagnóstico de
  aprisionamento (Ravindran) propõe o protocolo que empurra na direção contrária. O efeito
  supunha resolvida, a favor de uma das partes, justamente a disputa que `e2.1` descreve como
  aberta.
- **"A avaliação de modelos vira mercado de tipo financeiro, com desempenho medido e negociado."**
  Cortado por ser a generalização do Nof1 aplicada a qualquer coisa — é ficção especulativa do
  tipo que serviria a qualquer disrupção, exatamente o caso (c) da regra de parada. O Alpha
  Arena permanece na seção 6 como sinal, que é o que ele sustenta.
- **"Agentes com memória substituem a documentação de projeto."** Cortado por afirmação forte
  sem elo intermediário (pula de "o agente lembra" para "ninguém mais escreve documento") e por
  invadir o tema 1 da disciplina, o ofício de programar com o agente. Fronteira respeitada.
- **"Surge um registro público de traces de agentes, tipo cartório."** Cortado por não ter
  mecanismo narrável de quem pagaria, quem operaria e por que alguém publicaria seus traces —
  e por ser indistinguível da ideia genérica de "registro público de X".

### Buscas que não deram em nada, e lacunas assumidas

- **O site primário do Nof1 (`nof1.ai`) devolveu HTTP 429 e não abriu.** Consequência: os
  resultados numéricos do Alpha Arena não entram em lugar nenhum deste documento (seção 8, item 2).
- **Nenhuma das duas páginas oficiais do OpenTelemetry abertas trouxe declaração de estabilidade
  das convenções GenAI.** Consequência: a afirmação foi rebaixada de fato para leitura secundária
  (seção 8, item 3).
- **A extração do corpo do PDF do survey *Always-On Agents* não retornou o texto das seções.**
  Consequência: a fonte confirma a existência do campo e sua organização, e não sustenta
  nenhuma afirmação substantiva (fonte 7).
- **A página de tramitação do Senado não confirma a data de votação final do PL 2338 na Câmara.**
  Consequência: nenhuma data de votação brasileira aparece no documento; só a remessa de
  17/03/2025, que é o que a fonte primária registra.
- **Não foi localizada, nesta sessão, fonte primária abrindo o incidente de vazamento entre
  agentes internos relatado na Meta em março de 2026.** Ele apareceu apenas em cobertura
  secundária de fornecedor de segurança e, por isso, **não** foi usado para sustentar `e2.2` —
  o efeito se apoia no AgentLeak, que é medição publicada.
