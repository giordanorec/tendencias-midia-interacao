---
tema: "A infraestrutura de confiança: memória, observabilidade e avaliação de agentes"
slug: a-infraestrutura-de-confianca-memoria-observabilidade-e-avaliacao-de-agentes
autor_login: alpa2
zona_de_interesse: Agentes
data: 2026-09-17
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 9
efeitos_ordem_2: 18
efeitos_ordem_3: 18
tecnologias_citadas: [OpenTelemetry GenAI semantic conventions, Langfuse, LangSmith, Arize Phoenix, Braintrust, MLflow, Datadog LLM Observability, Mem0, Zep, Graphiti, Letta, LangMem, MCP, A2A, Engram Specification, agrepl, promptfoo, tau-bench, tau2-bench (pass^k), SWE-bench, GAIA, LoCoMo, LongMemEval, BEAM, LLM-as-judge, Nof1 Alpha Arena, Hyperliquid]
fontes: 8
confianca: media
experimento: "Um agente com diário de bordo assinado: registra rastro e memória em log encadeado por hash, e obriga a pessoa a decidir, a cada sessão, o que ele pode lembrar — medindo o que ela apaga."
skill_usada: futurizacao-alpa2
publico_ok: false
---

## 1. Resumo

Este mapa trata do que sustenta a confiança em sistemas que ninguém consegue ler por inteiro:
o rastro do que o agente fez e o acervo do que o agente lembra. Três disrupções-raiz passaram
no critério do Passo 2 desta skill: **a avaliação de sistemas não determinísticos com
consequência real**, **o rastro de execução como artefato de primeira classe** (rastro
padronizado mais replay determinístico) e **a memória persistente entre sessões e ferramentas
sem nenhum padrão de portabilidade**. Uma quarta candidata — "observabilidade de agente" como
categoria de produto — foi **rejeitada** e movida para a seção 3, porque a adoção declarada já
está em 89% entre equipes que constroem agentes: pela régua combinada com o pedido desta
rodada, isso não é emergente.

Da roda saem 45 efeitos (9 de 1ª ordem, 18 de 2ª, 18 de 3ª). A linha mais forte não é técnica:
é que **avaliar deixa de ser tarefa e vira autoridade** — alguém escreve a rubrica que decide o
que conta como bom, e essa rubrica é peça de design, não de engenharia. A segunda linha mais
forte é econômica: se o acervo de memória é o que torna um sistema melhor que outro, e não
existe formato de exportação, o custo de troca de fornecedor deixa de ser a integração e passa
a ser a amnésia.

Suposições declaradas (não houve interlocutor nesta rodada): horizonte 2031, público de quem
projeta mídia e interação, recorte global com nota sobre o Brasil, viés neutro, descarte apenas
do que já é comum em produto de massa. Confiança geral **média**: o presente está bem
documentado, os efeitos de 3ª ordem são quase todos de confiança baixa — e isso é o resultado
esperado, não um defeito do mapa.

## 2. O tema

O objeto aqui é estreito e vale delimitá-lo antes de qualquer projeção: **saber o que o agente
sabe e conferir o que ele fez.** Não é como conter o agente (isso é outro tema), nem como
programar com ele (outro tema também). É a camada que permite a uma pessoa afirmar, para outra,
que um sistema presta — e sustentar a afirmação.

A pergunta que muda é a que a disciplina formulou: de *"o que foi entregue?"* para *"por que
isso está certo?"*. A primeira se responde olhando o produto; a segunda exige ver o caminho.
E o caminho, num sistema que chama modelo, ferramenta e outro agente, é um objeto grande, que
só existe se alguém o tiver gravado no momento em que aconteceu.

Do outro lado da mesma infraestrutura está a memória. Um agente que lembra entre sessões deixa
de ser instrumento e passa a ser depósito: acumula contexto, decisões, erros já cometidos.
As duas coisas são a mesma engenharia vista de dois ângulos — gravar o que passou. A diferença
é o uso: o rastro serve para conferir, a memória serve para continuar.

Para quem projeta mídia e interação, isto importa por um motivo específico e pouco óbvio: se a
confiança passa a depender do rastro, **o rastro vira superfície de interface**. Mostrar o
caminho deixa de ser um recurso de depuração escondido no painel do desenvolvedor e passa a ser
uma decisão de composição, como legenda, crédito e procedência de imagem. E se a memória vira o
ativo, **projetar o esquecimento passa a ser parte do ofício** — hoje ninguém desenha isso.

Recorte declarado: horizonte **2031**; público **quem projeta mídia e interação**; escopo
**global**, com uma nota sobre o Brasil ao final da seção 3 e na seção 9. Fora do mapa, por
decisão desta rodada: tudo que já é comum em produto de massa.

## 3. Onde isso está hoje

### 3.1 O que já existe e funciona

**O rastro tem um vocabulário comum, ainda instável.** As convenções semânticas GenAI do
OpenTelemetry definem, na v1.41 (maio de 2026), spans de cliente de LLM, de agente
(`create_agent`, `invoke_agent`), de workflow (`invoke_workflow`) e de ferramenta
(`execute_tool`), atributos de MCP (`mcp.method.name`, `mcp.session.id`,
`mcp.protocol.version`), eventos de captura de conteúdo (`gen_ai.evaluation.result`, opt-in) e
dois histogramas de métrica — duração e uso de token. Em 12 de junho de 2026, na v1.42.0, essas
convenções **saíram do repositório central** para um próprio (`semantic-conventions-genai`),
justamente para poderem iterar mais rápido do que a barra de estabilidade do núcleo permite.
Nada disso é estável: os atributos `gen_ai.*` carregam selo *Development*, e não há 1.0
anunciado.

**A observabilidade de agente é mercado formado.** Langfuse levantou 50 milhões de dólares em
Série B em 12 de março de 2026 (avaliação de ~400 milhões); Braintrust levantou 80 milhões
(avaliação de 800 milhões). Langfuse, LangSmith, Arize Phoenix, MLflow e Datadog LLM
Observability declaram suporte às convenções GenAI do OpenTelemetry. Na pesquisa *State of
Agent Engineering* da LangChain, com mais de 1.300 respondentes, **89% afirmam ter
observabilidade dos seus agentes**; 52,4% rodam avaliação offline; 37,3% rodam avaliação
online; **29,5% não rodam avaliação nenhuma**; e 32% citam qualidade como principal barreira
para colocar em produção.

**A memória tem produto, benchmark e placar.** Mem0, Zep/Graphiti, Letta e LangMem são
implementações em uso, com perfis distintos: Mem0 em adoção e ecossistema, Zep em raciocínio
temporal (grafo indexado no tempo, para perguntas do tipo "o que aconteceu terça passada"),
Letta em memória auto-editável e *sleep-time compute*. Existem benchmarks públicos — LoCoMo,
LongMemEval, BEAM — e a Mem0 reporta, no seu próprio blog, 92,5 em LoCoMo e 94,4 em
LongMemEval a cerca de 6,8 mil tokens por consulta, contra 80,32/71,2 atribuídos ao Zep e 74,0
(LoCoMo) ao Letta, e 52,9 (LoCoMo) à memória da OpenAI. São números de fornecedor sobre
concorrente; leia-os como tal (ver seção 8).

**A avaliação séria já é por execução, não por opinião.** O padrão nos benchmarks que resistem
é verificação executada: tau-bench confere o **estado final do banco**; SWE-bench **roda a
suíte de testes** do repositório depois do patch; o `pass^k` do tau2-bench exige que **todas** as
k tentativas tenham sucesso, expondo o agente que acerta às vezes e não de forma confiável;
GAIA cobra raciocínio de assistente geral com uso de ferramenta. Ferramentas de teste de prompt
e red-teaming (promptfoo) e plataformas de eval em CI são uso corrente.

**Replay determinístico saiu do papel.** *Deterministic Replay for AI Agent Systems*
(Rasheed Mudasiru, arXiv 2607.16200, submetido em 30 de abril de 2026) apresenta o `agrepl`,
que intercepta toda interação externa numa proxy *man-in-the-middle*, serializa o rastro e o
reexecuta em ambiente isolado sem rede: fidelidade de replay F = 1,0 em 5 cargas de trabalho e
250 instâncias de replay, com redução mediana de 98,3% na latência por passo.

**Há exigência legal chegando.** O artigo 12 do AI Act europeu obriga sistemas de alto risco a
permitir o registro automático de eventos ao longo da vida do sistema, com identificação das
pessoas naturais envolvidas e retenção mínima de seis meses; a interpretação corrente é que o
log precisa ser resistente a adulteração e permitir reconstrução completa da decisão. A sanção
do artigo 99 para descumprimento em alto risco é de 15 milhões de euros ou 3% do faturamento
global. A exigibilidade começa em 2 de agosto de 2026, mas o acordo do *Digital Omnibus*
confirmado pelo Parlamento em 16 de junho de 2026 posterga os sistemas autônomos do Anexo III
para 2 de dezembro de 2027 — e isso só vincula quando o texto for publicado no Diário Oficial
da União Europeia.

**Avaliação com dinheiro real existe.** No Alpha Arena da Nof1, seis modelos receberam **10 mil
dólares reais cada** e operaram perpétuos de cripto na Hyperliquid a partir dos mesmos prompts
e dos mesmos dados, segundo o organizador. Resultado da temporada 1: Qwen3 Max +22,3%,
DeepSeek Chat V3.1 +4,89%, Claude Sonnet 4.5 −30,81%, Grok 4 −45,3%, Gemini 2.5 Pro −56,71%,
GPT-5 −62,66%. Quatro dos seis perderam dinheiro, e a dispersão passa de 85 pontos percentuais
entre o primeiro e o último.

### 3.2 O que existe e não pegou

**Portabilidade de memória.** Até julho de 2026 **não há padrão de interoperabilidade
ratificado** para memória de agente. MCP padronizou acesso a ferramenta, A2A padronizou
delegação de tarefa, e nenhum dos dois expressa memória. O que existe é a Engram Specification
(formato aberto publicado pela PLUR) na camada de dado e o MCP na de transporte — nenhum com
padronização em nível de IETF. Mem0, Letta, Zep, Cognee e mais uma dúzia de projetos definem
cada um o seu esquema. A formulação que li é direta: portabilidade de memória de IA, como
capacidade prática, não existe.

**O juiz automático como medida confiável.** LLM-as-judge virou a abordagem dominante de
avaliação em escala e carrega viés sistemático medido: preferência pela resposta na posição A,
preferência por resposta longa independentemente da qualidade, e degradação forte em idiomas de
menor recurso. Há uma safra de trabalhos de 2026 dedicada exatamente a isso — AgentJudgeBench
(confiabilidade de juiz em chamada de ferramenta), *Reliability without Validity* (concordância,
consistência e viés em larga escala), BabelJudge (confiabilidade entre idiomas e trajetórias),
Judge Reliability Harness. O sinal é claro: o instrumento de medida ainda não está calibrado.

**Benchmark público como prova.** Saturação: quando os modelos de fronteira se agrupam acima de
88–90% de acerto, a diferença entre eles deixa de ser estatisticamente informativa. MMLU chegou
ao teto primeiro. Um benchmark otimizado por tempo suficiente para de diferenciar.

**Determinismo do ambiente.** Mesmo configurados para saída determinística, cinco LLMs
apresentaram variação de acurácia de até 15% entre execuções, com uma diferença de até 70 pontos
entre o melhor e o pior caso possível. Os ambientes reais são piores que os benchmarks: teste
A/B, personalização, limitador de taxa e anti-bot introduzem não determinismo de propósito.

### 3.3 Quem está construindo

Plataformas de observabilidade e eval: LangChain/LangSmith, Langfuse, Arize (Phoenix),
Braintrust, MLflow, Weights & Biases, Datadog, Confident AI, Laminar, Helicone. Memória: Mem0,
Zep (Graphiti), Letta, LangMem, Cognee, PLUR (Engram). Padrões: OpenTelemetry (semconv GenAI),
Anthropic (MCP), Google (A2A). Avaliação com consequência: Nof1. Auditoria e certificação: o
mercado de teste e certificação de IA é estimado em 4,8 bilhões de dólares em 2025 com projeção
de 22,6 bilhões até 2032 (CAGR ~24,6%); a ISACA lançou em maio de 2025 o AAIA, primeiro
credenciamento de auditoria específico de IA; a SGS comprou a suíça CertX; as *Big Four*
montam prática de asseguração de IA. Da varredura da turma, o ferramental que ocupa exatamente
esses nichos: `projectmem`, `deja-vu`, `memtrace`, `lean-ctx`, `Hindsight`, `vibe-log`,
`agent-qa`, `Rath`, `Parseable`, `Agnost`, `agent-inspect`.

### 3.4 O que foi rejeitado como disrupção-raiz e ficou aqui

Pelo critério do Passo 2, ficaram nesta seção — não na 4:

- **Observabilidade de agente como categoria de produto.** Rompe pouco (torna visível o que já
  se instrumentava), tem razão de "por que agora" (agentes em produção), mas falha no terceiro
  teste: 89% de adoção declarada e duas Séries B de nove dígitos em 2026 não descrevem algo que
  "ainda não existe em escala".
- **Logs, métricas e teste unitário.** Maduros por definição; a própria disciplina já os coloca
  fora da linha.
- **Memória como recurso de produto de consumo.** Está em produto de massa; excluída pela régua
  desta rodada.
- **Redução de token e engenharia de contexto** (do tipo `lean-ctx`, 60 a 90% menos token).
  Falha no primeiro teste: torna mais barato algo que já se fazia. Entra como condição de
  viabilidade das três disrupções, não como disrupção.

### 3.5 Nota sobre o Brasil

O PL 2338/2023 foi aprovado pelo Senado em 10 de dezembro de 2024 e aguarda votação na Câmara,
em comissão especial, com expectativa de aprovação final em 2026. Adota a estrutura de risco do
AI Act europeu, prevê direitos de transparência, explicação e contestação, cria o Sistema
Nacional de Regulação e Governança de IA e sanções de até 50 milhões de reais por infração;
para alto risco, exige avaliação prévia de conformidade, documentação técnica, supervisão
humana e rastreabilidade. Em paralelo, e já em vigor na prática, o CNJ fixou diretrizes de
transparência, rastreabilidade, auditoria e responsabilização para sistemas automatizados no
Judiciário — triagem processual, apoio à decisão, análise de dado judicial. Ou seja: no Brasil
a exigência de rastro chega primeiro pelo Judiciário como usuário, e só depois pela lei geral.

## 4. As disrupções-raiz

Três candidatas passaram nos três testes do Passo 2. Cada uma vem com o teste aplicado por
escrito — a lição do `DUVIDAS.md` desta skill é que o erro perigoso não é a fonte inventada, é a
classificação errada de um fato correto, e ela só aparece quando as três perguntas são
respondidas uma por uma.

### D1 — A avaliação de sistemas não determinísticos com consequência real

**O que rompe.** Muda quem pode afirmar que um sistema funciona, e sobre o quê. Testar software
determinístico é verificar se a saída é a esperada; avaliar um sistema que dá dois resultados
para a mesma entrada é estimar uma **distribuição** de comportamento. Isso não é o mesmo
trabalho feito mais rápido: é outro objeto. E arrasta uma consequência de autoridade — quem
escreve a rubrica de julgamento decide o que conta como bom, e essa pessoa não é
necessariamente quem construiu o sistema.

**Por que agora, e não há cinco anos.** Três limiares cruzados quase juntos. (a) Saturação: os
modelos de fronteira se agruparam acima de 88–90% nos benchmarks estáticos, e a diferença entre
eles deixou de informar. (b) Consequência: há avaliação rodando com dinheiro real — 10 mil
dólares por modelo no Alpha Arena, com dispersão de mais de 85 pontos percentuais entre o
primeiro e o último, o que nenhum placar saturado mostrava. (c) Volume: 29,5% das equipes que
constroem agentes não avaliam nada, e 32% apontam qualidade como a barreira principal para
produção — a demanda existe e está descoberta.

**O que ainda falta.** O instrumento não está calibrado. O juiz automático, que é o único
caminho de escala, tem viés de posição, de verbosidade e degradação por idioma, medidos em 2026
por uma safra de benchmarks feitos exatamente para auditar juízes. Avaliação online roda em
37,3% das equipes. E não há autoridade nenhuma que certifique um avaliador: existe um
credenciamento (AAIA, maio de 2025) e um mercado em formação, não uma profissão. **Emergente.**

### D2 — O rastro de execução como artefato de primeira classe

**O que rompe.** Muda o que conta como prova. Hoje a evidência de que um sistema funcionou é a
saída; aqui a evidência passa a ser o caminho — cada chamada, cada decisão, cada tentativa que
falhou. E torna possível algo que não era: **rodar de novo um sistema que nunca roda igual.**
O replay determinístico não acelera a depuração de um bug reproduzível; ele torna reproduzível
um bug que aconteceu uma vez. Quem já tentou consertar uma falha que não volta sabe que essa é
uma mudança de categoria, não de velocidade.

**Por que agora, e não há cinco anos.** (a) Vocabulário: as convenções GenAI do OpenTelemetry
ganharam spans de agente, de workflow e de ferramenta, e atributos de MCP — em v1.41, maio de
2026 — e em 12 de junho de 2026 saíram para repositório próprio para iterar mais rápido. Sem
vocabulário comum, rastro é log de um fornecedor só. (b) Técnica: o replay fiel demonstrado
(F = 1,0 em 250 instâncias) é de abril de 2026, e a interceptação em camada de transporte é o
que o tornou viável. (c) Lei: o artigo 12 do AI Act torna o registro automático obrigatório em
alto risco, com retenção mínima de seis meses e sanção de até 3% do faturamento global.

**O que ainda falta.** A especificação está em *Development*, sem 1.0 e sem prazo; atributos
podem mudar sem virada de versão maior. Falta orientação padronizada para três coisas que
importam justamente em agente: atribuição de custo ao longo de um fluxo de muitos passos,
gestão de janela de contexto dentro do laço agêntico, e captura estruturada da cadeia de
raciocínio (hoje só há histórico de mensagem). Instrumentação de LangGraph e CrewAI está em
andamento, não pronta. E o prazo legal pode escorregar: o *Digital Omnibus* de 16 de junho de
2026 posterga os sistemas autônomos do Anexo III para dezembro de 2027. **Emergente.**

### D3 — Memória que atravessa sessões e ferramentas, sem portabilidade

**O que rompe.** Muda quem precisa de quem. Um agente que lembra deixa de ser ferramenta
substituível e passa a ser depósito: o que o torna melhor do que o concorrente não é o modelo,
é o acervo que ele tem sobre você. E como não existe formato de exportação, o custo de sair
deixa de ser a reescrita da integração e passa a ser a **amnésia**. Isso não é uma melhoria de
personalização; é a criação de um ativo que não estava no contrato de ninguém.

**Por que agora, e não há cinco anos.** (a) O contexto ficou caro o bastante para que "lembrar"
precise ser engenharia — os sistemas de memória competem hoje em pontuação **por token gasto**
(da ordem de 6,8 mil tokens por consulta), não só em acerto. (b) Existem benchmarks públicos de
memória — LoCoMo, LongMemEval, BEAM — e a queda de desempenho quando o volume vai de 1 para 10
milhões de tokens (64,1 para 48,6 no BEAM, pelos números do próprio fornecedor) mostra que o
problema está aberto e é medido. (c) Escala: a projeção citada é de 40% das aplicações
corporativas integradas a agentes de tarefa específica até o fim de 2026, contra menos de 5% em
2025 — número de segunda mão, tratado como indicação de direção, não como medida.

**O que ainda falta.** Tudo o que faria a memória ser um bem da pessoa e não da plataforma.
Nenhum padrão ratificado em julho de 2026; MCP e A2A não expressam memória; esquemas
divergentes em Mem0, Letta, Zep, Cognee e outros; a Engram Specification e a proposta acadêmica
de transferência com procedência verificada (Merkle-DAG com BLAKE3 e assinatura Ed25519,
tokens de capacidade com escopo de leitura, escrita, derivação, redação, exportação e
re-hidratação) existem como proposta, com avaliação em bancada — continuidade de transferência
de 0,83 a 0,92 entre pares de modelos contra 0,28 a 0,45 da linha de base — e nenhuma adoção em
escala. Faltam também os problemas declarados em aberto pelos próprios fornecedores: abstração
temporal em escala, resolução de identidade entre sessões, gestão de memória obsoleta e
arquitetura de privacidade. **Emergente.**

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "A avaliação de sistemas não determinísticos com consequência real"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Afirmar que um sistema funciona passa a exigir uma distribuição de resultados, não um exemplo de execução bem-sucedida."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Métricas de confiabilidade sob repetição, do tipo pass^k, substituem a taxa de acerto único nas decisões de compra de software."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Contratos de software passam a ter cláusula de variância de comportamento, ao lado da cláusula de disponibilidade."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Suítes de avaliação privadas viram ativo estratégico, e o benchmark público perde a função de prova comercial."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "A comparação entre fornecedores migra do placar público para a arbitragem por terceiro com dado fechado."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "As equipes passam a avaliar a trajetória do agente, e não apenas a resposta final."
        sinal: medio
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Escrever e manter a rubrica de julgamento vira função nomeada, e o desenho do juiz passa a ser trabalho de design."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "A rubrica torna-se peça editorial pública: quem a escreve define o que conta como bom produto de mídia."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "O juiz automático passa a ser auditado como sujeito, com medida declarada de viés de posição, de verbosidade e de idioma."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "Forma-se uma metrologia de IA, com instituições que calibram juízes como se calibra instrumento de medição."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "A avaliação com aposta real — dinheiro, público ou reputação — substitui o benchmark saturado como evidência que circula."
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "A dispersão de desempenho entre modelos aparece em público e desfaz a narrativa de paridade entre os de fronteira."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "A escolha de modelo deixa de ser decisão técnica e vira decisão de risco, com responsável nomeado na organização."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "Arenas de agentes com consequência real viram formato de mídia, com narração, placar e público."
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "A cobertura jornalística de IA se reorganiza em torno de desempenho verificável, e o lançamento de modelo perde centralidade."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "O rastro de execução como artefato de primeira classe (rastro padronizado mais replay determinístico)"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "Toda execução de agente passa a deixar um rastro padronizado, legível por ferramenta de terceiro que não conhece o sistema."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O rastro vira o objeto que se revisa em revisão de código e em reunião de equipe, no lugar do resultado entregue."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "A revisão por pares no software se reorganiza em torno da leitura de caminhos de decisão, não de diferenças de texto."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "O replay determinístico permite reproduzir uma falha que aconteceu uma única vez."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "A noção de defeito muda: o bug passa a ser uma faixa de comportamento fora do aceitável, não uma linha de código errada."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "O rastro passa a ser exigido por lei em serviço de alto risco, com retenção mínima e resistência a adulteração."
        sinal: medio
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Armazenar e indexar rastro entra no orçamento como item próprio, na mesma ordem de grandeza do gasto com inferência."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Surge uma economia de compressão e amostragem de rastro, e com ela a disputa normativa sobre o que é lícito descartar."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "A prova de que uma decisão foi tomada por IA passa a ser produzida por padrão, e o ônus se inverte contra quem não tem rastro."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "O litígio sobre decisão automatizada migra da disputa sobre intenção para a disputa sobre completude do registro."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "O rastro fica legível para quem não escreveu o sistema, inclusive para o usuário final."
        sinal: fraco
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Interfaces passam a exibir a procedência do que foi gerado como elemento de composição, não como aviso legal no rodapé."
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Mostrar o caminho torna-se convenção estética estabelecida, como os créditos de filme ou a assinatura da fotografia."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "A explicação passa a ser gerada a partir do rastro, e não do modelo, deslocando explicabilidade para um problema de recuperação de dado."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "A pesquisa em interpretabilidade perde parte da sua demanda prática para a engenharia de auditoria."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "Memória persistente entre sessões e ferramentas, sem padrão de portabilidade"
    efeitos:
      - id: e7
        ordem: 1
        efeito: "O valor do sistema desloca-se do modelo para o acervo que ele acumulou sobre quem o usa."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Trocar de fornecedor passa a custar o acervo, e não a integração."
            sinal: medio
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "A portabilidade de memória entra na agenda regulatória como a portabilidade numérica entrou na telefonia."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "Aparece um mercado de transferência de memória com prova de procedência, baseado em encadeamento por hash e assinatura."
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "A memória de agente passa a ser tratada como registro contábil: versionada, assinada e auditável por terceiro."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "A fronteira entre projetos, pessoas e empregos deixa de existir dentro do acervo do agente."
        sinal: medio
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "O vazamento passa a ocorrer por recordação, e não por acesso indevido, tornando-se difícil de detectar por controle de permissão."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "Surge um direito ao esquecimento aplicado a agente, com obrigação de provar que a remoção foi efetiva."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: "Contratos de trabalho e de prestação de serviço passam a dispor sobre o que o agente pode lembrar depois do fim do vínculo."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: "Forma-se uma disputa de propriedade sobre o acervo de trabalho, análoga à do portfólio e da carteira de clientes."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: "Projetar interação passa a incluir projetar o esquecimento."
        sinal: fraco
        prazo: 2028
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "Controles de memória viram elemento central de interface, no lugar do painel de privacidade enterrado em configurações."
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "A alfabetização digital incorpora a gestão do próprio acervo como competência básica, ao lado de senha e cópia de segurança."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: "A personalização excessiva produz rejeição, e o modo sem memória passa a ser vendido como recurso."
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: "O anonimato deliberado retorna como valor de projeto, revertendo duas décadas de identidade persistente por padrão."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não diz

**As três disrupções não são independentes, e uma delas resolve o problema das outras duas.**
Rastro e memória são a mesma gravação lida com propósitos diferentes. Se o rastro padronizado
vencer (e4) antes de a memória se consolidar como formato proprietário, a portabilidade de
memória (e7.1) fica tecnicamente trivial: a memória seria uma projeção de um rastro que já é
legível por terceiro. A ordem em que essas duas coisas acontecem decide se 2031 tem
aprisionamento por acervo ou não. É a tensão mais importante do mapa, e ela não caberia numa
linha do YAML.

**Há um conflito direto entre e5 e e8.1.** A lei manda gravar tudo por seis meses no mínimo
(rastro resistente a adulteração, reconstrução completa da decisão) e, ao mesmo tempo, a
proteção contra vazamento por recordação pede que o sistema esqueça. As duas exigências
incidem sobre o mesmo dado. Em 2031 alguém vai ter que separar, por norma, o que é rastro
auditável de o que é memória operacional — provavelmente com prazos e permissões diferentes
para cada um. Nenhum dos dois regimes existentes prevê essa distinção hoje.

**A cadeia e2 → e2.1 → e2.1.1 é a que mais interessa a quem projeta mídia.** Ela não fala de
ferramenta: fala de quem escreve o critério. Se o produto é fabricado pela máquina e avaliado
por outra máquina, o único lugar onde uma decisão humana de gosto ainda entra é na rubrica. Quem
escreve a rubrica faz curadoria em escala, sem nunca olhar uma peça. Isso é mais parecido com
escrever manual de redação de jornal do que com escrever teste automatizado — e é um ofício que
não tem nome ainda.

**e3.2 é o efeito de que menos tenho certeza, e o deixei de propósito.** Uma arena de agentes
com dinheiro real é, por construção, um formato de espetáculo: tem placar, tem perdedor, tem
número em tempo real. Mas a história dos formatos de competição técnica que viraram mídia de
audiência é ruim — xadrez por computador, e-sports de nicho, campeonato de robótica. Mantive
com sinal fraco e confiança média, e o registro de que é a aposta mais frágil aqui.

**Os prazos de 3ª ordem se aglomeram em 2031 e isso é artefato do método, não achado.** O
horizonte pedido é 2031; efeitos estruturais tendem a ser empurrados para a borda do horizonte
porque ninguém consegue datá-los melhor que isso. Leia as datas de 3ª ordem como "não antes
disso", nunca como "nisto".

## 6. Sinais fracos e wildcards

### Sinais fracos (existem hoje, quase ninguém olha)

**Um `pass^k` como número de catálogo.** O tau2-bench já exige sucesso em **todas** as k
tentativas. Enquanto isso for métrica de pesquisa, não muda nada; no dia em que aparecer na
página de preços de um produto, muda o mercado inteiro — porque é o primeiro número que admite
publicamente que o sistema erra às vezes.

**29,5% não avaliam nada.** Numa população que já tem 89% de observabilidade. O sinal fraco não
é a falta de eval: é a distância entre as duas taxas. Gravar é fácil e já foi feito; julgar é
difícil e ainda não. Essa distância é o tamanho exato da oportunidade e do risco.

**Convenções que fogem do próprio padrão.** A mudança das convenções GenAI para um repositório
separado, em 12 de junho de 2026, para iterar mais rápido do que a barra de estabilidade do
OpenTelemetry permite, é um sinal técnico pequeno com leitura grande: o domínio está mudando
mais rápido do que a instituição que tenta normatizá-lo. Se isso persistir até 2031, o rastro
padronizado não chega — e metade deste mapa cai com ele.

**Provas criptográficas onde ninguém pediu.** Merkle-DAG, BLAKE3, Ed25519 numa proposta de
transferência de memória, com detecção de adulteração em 1.000 de 1.000 tentativas. Ninguém
constrói isso para resolver personalização. Constrói-se para um mundo em que alguém vai
**contestar** o que o agente lembrava — ou seja, para litígio.

**O Judiciário brasileiro como primeiro exigente.** As diretrizes do CNJ sobre rastreabilidade
e auditoria em sistema automatizado chegam antes da lei geral. Um comprador institucional
grande, com exigência de rastro, move mais o mercado local do que um projeto de lei em
tramitação.

**Memória que degrada com o tamanho.** A queda de 64,1 para 48,6 entre 1 e 10 milhões de tokens
no BEAM, publicada pelo próprio fornecedor que tem interesse em parecer bom. Um número ruim que
o interessado escolheu mostrar costuma indicar que o problema é grande demais para esconder.

### Wildcards (baixa probabilidade, impacto que refaz o mapa)

**1. Exigência regulatória de trilha de auditoria para toda decisão de IA em serviço público,
com acesso por qualquer cidadão.** Não a obrigação de gravar — a obrigação de **entregar** o
rastro a quem for afetado, como se pede certidão. Muda o rastro de artefato interno para
documento público e, com isso, transforma legibilidade de rastro numa disciplina de design de
informação, com padrão de apresentação e não só de coleta. Probabilidade baixa no horizonte;
impacto máximo, porque tornaria e6 e e6.1 obrigatórios em vez de opcionais.

**2. Um vazamento de acervo de memória em escala.** Não de credencial nem de base de dados: de
**memória de agente** — o que ele aprendeu sobre milhões de pessoas ao longo de anos, incluindo o
que elas nunca escreveram em lugar nenhum e ele inferiu. O precedente mais próximo é o incidente
do tipo *Echoleak* (2024), em que prompt escondido em e-mail fez o agente entregar histórico de
conversa anterior — mas em escala individual. Um evento equivalente em massa antecipa e8.1.1 e
e9.2 de 2031 para dois anos depois do vazamento, e provavelmente mata o modo com memória por
padrão.

**3. O juiz automático é declarado inadmissível onde mais importa.** Um tribunal, uma agência
reguladora ou uma norma setorial decide que avaliação feita por LLM não serve como evidência de
conformidade — porque o viés de posição e de verbosidade está medido em literatura pública, e o
instrumento não tem calibração rastreável. Isso não freia a avaliação automática no
desenvolvimento; destrói o caminho de escala da avaliação **regulatória**, e joga o mercado de
asseguração de volta para amostragem humana caríssima. Efeito colateral: e2.2.1 (metrologia de
IA) deixa de ser 3ª ordem distante e vira urgência de curto prazo.

**4. Memória do agente reconhecida como dado pessoal portável por decisão judicial, não por
lei.** Um caso individual bem escolhido, com uma pessoa pedindo a exportação do que um agente
sabe sobre ela, e uma decisão que concede. O aprisionamento por acervo (e7.1) vira passivo
jurídico antes de virar tema legislativo, e o padrão de exportação nasce de sentença, com o
formato tecnicamente ruim que sentenças produzem.

**5. Inversão: a memória vira dívida, não ativo.** Se o acervo acumula erro, decisão obsoleta e
contradição — e a literatura de 2026 já discute contaminação de memória, colapso de papel por
procedência e consolidação não confiável —, é possível que, em 2031, sistemas antigos sejam
**piores** que sistemas novos, e que "recomeçar do zero" vire prática recomendada. Isso inverte
o sinal de e7 e de todo o argumento de aprisionamento, e é o wildcard que eu levaria mais a
sério dos cinco.

## 7. Contra o próprio mapa

Este é o Passo 6 da skill, e ele produziu cortes. Seguem as quatro perguntas obrigatórias,
respondidas sobre o que eu mesmo escrevi.

### 7.1 Qual efeito é só extrapolação linear do presente?

**e5.1 é o caso mais claro.** "Armazenar e indexar rastro entra no orçamento na mesma ordem de
grandeza da inferência" é pegar duas curvas de custo que existem hoje — rastro crescendo com o
uso de agente, inferência caindo por token — e esticá-las até se cruzarem. Curvas de custo de
armazenamento são notoriamente mal comportadas: compressão, amostragem e retenção seletiva
costumam achatar exatamente esse tipo de projeção antes de ela se realizar, e e5.1.1 (economia de
compressão) é justamente o mecanismo que impediria e5.1 de acontecer como escrito. Ou seja, o
mapa contém o próprio contra-argumento. **Revisado nesta passagem:** prazo movido de 2028 para
2029, e a comparação com inferência marcada aqui como a parte frágil da frase.

**e1.1 é o segundo caso.** Supõe que uma métrica de pesquisa (`pass^k`) sobe para o processo de
compra por continuidade natural. O histórico de métricas de qualidade de software chegando a
contrato é ruim — cobertura de teste nunca chegou a cláusula contratual em vinte anos, apesar de
ser trivial de medir.

### 7.2 Qual efeito assume velocidade de adoção sem precedente comparável?

**e7.1.1 — portabilidade de memória na agenda regulatória até 2031.** O comparável que usei é a
portabilidade numérica na telefonia: da discussão à obrigação foram cerca de dez anos em vários
mercados, e a portabilidade de dado do artigo 20 do GDPR, que é lei desde 2018, produziu pouco
efeito prático porque exportar dado sem contexto não recria o serviço. Aqui o problema é pior:
a memória **é** o contexto, e ela está em esquemas divergentes sem padrão ratificado. Dizer
"entra na agenda" até 2031 é defensável; dizer que se torna obrigação exigível não é.
**Revisado:** a frase foi mantida em "entra na agenda", com confiança baixa, e não em "é
obrigatória".

**e4.1.1 — revisão por pares reorganizada em torno de leitura de rastro, até 2030.** Não
encontrei precedente comparável de mudança de prática de revisão de código nessa velocidade. A
adoção de revisão por pull request levou mais de uma década para virar padrão, e foi uma mudança
mais fácil, porque preservava o objeto revisado (texto). Ler caminho de decisão é um objeto novo,
e não existe ferramenta madura de diferença entre dois rastros. Marcado como "sem precedente
comparável encontrado".

**Efeito cortado nesta passagem:** havia um efeito de 3ª ordem escrito como *"o avaliador de IA
vira profissão regulamentada, com conselho profissional e reserva de mercado, até 2031"*. Foi
**retirado da roda** e rebaixado a wildcard (§6, item 3, na forma inversa). Motivo: o comparável
é a auditoria contábil, que levou décadas entre o surgimento da prática e a regulamentação
profissional — e o que existe hoje é um credenciamento privado (AAIA, maio de 2025) e um mercado
de 4,8 bilhões de dólares em formação, o que descreve uma **especialidade em serviço
profissional**, não uma profissão regulamentada. Manter isso na roda seria inflar sete anos de
história institucional em cinco.

**Segundo efeito cortado:** *"benchmarks públicos deixam de ser publicados"*. Absoluto demais, e
falso pelo mecanismo: benchmark público serve a marketing e a pesquisa, não só a prova de compra,
e essas duas funções não saturam junto. Substituído por e1.2, que afirma algo mais estreito e
verificável — perde a função de **prova comercial**.

**Terceiro corte, de grau:** e3.2 estava escrito como *"arenas de agentes viram esporte com liga
profissional e patrocínio"*. Reduzido a "formato de mídia, com narração, placar e público", com
sinal fraco. O precedente de competição técnica virando audiência de massa é fraco, e eu não
tenho evidência de audiência do Alpha Arena — só de existência dele.

### 7.3 Qual disrupção-raiz pode simplesmente não se concretizar?

**D2 é a mais frágil, e é a que mais sustenta o resto.** O rastro padronizado depende de uma
especificação que está em *Development*, sem 1.0, sem prazo público, com atributos que podem
mudar sem virada de versão maior, e que acabou de sair do repositório central justamente porque
não consegue acompanhar a barra de estabilidade. O cenário de fracasso não é "ninguém grava
rastro" — todos gravam, 89% já gravam. É **cada um no seu formato**, com o rastro preso na
plataforma que o coletou. Nesse mundo, e4 acontece na forma fraca (existe rastro) e falha na
forma que importa (legível por terceiro), e tudo que vem depois — auditoria independente,
explicação a partir do rastro, prova em litígio — fica dependente da boa vontade do fornecedor.
O mapa não desmorona; ele **piora**: D3 fica mais forte, porque a falta de padrão de rastro
reforça exatamente o aprisionamento por acervo.

**D1 pode não se concretizar por um caminho diferente: o instrumento não calibra.** Se os
achados de 2026 sobre confiabilidade de juiz automático se consolidarem como "isto não é
mensurável de forma barata", a avaliação em escala não acontece, e o que sobra é amostragem
humana — que é caro, lento e, portanto, raro. Nesse mundo, e1 e e2 se cumprem só nas empresas
que podem pagar, e a consequência de 3ª ordem é uma assimetria: quem tem dinheiro prova que o
sistema presta, quem não tem afirma. Isso não é um mapa mais otimista; é um mapa com o mesmo
destino distribuído de forma pior.

**D3 é a mais provável das três, e a que menos depende das outras.** Memória proprietária sem
portabilidade é o estado atual descrito por fonte de julho de 2026 — para não se concretizar,
seria preciso um padrão ratificado aparecer e ser adotado, e não há candidato com adoção. O
único jeito de D3 falhar é o wildcard 5: memória virar dívida em vez de ativo.

### 7.4 Que viés entrou aqui?

**Suposições adotadas por falta de interlocutor.** Esta rodada não teve entrevista real: as
respostas do Passo 1 vieram pré-definidas no pedido. Ficam declaradas: horizonte 2031; público
"quem projeta mídia e interação"; recorte global com nota sobre o Brasil; descarte apenas do que
já é comum em produto de massa; viés neutro; nenhuma disrupção suspeita fornecida, tudo levantado
do zero. Nada disso foi negociado com ninguém, e o mapa herda o enquadramento inteiro do pedido.

**Viés de disponibilidade de fonte, e ele é grande.** Boa parte do que eu sei sobre memória de
agente veio de material publicado por fornecedores de memória de agente — inclusive os números
de benchmark, inclusive os números atribuídos a concorrentes. Fornecedor tem interesse direto em
que "memória" seja categoria importante. Minha defesa foi marcar a origem em cada número, não
foi encontrar fonte independente, que não achei.

**Viés de recorte anglófono.** Todas as oito fontes que abri estão em inglês, com exceção do
material brasileiro que vi apenas em resultado de busca. Isso é especialmente ruim num mapa que
cita degradação de juiz automático em idioma de menor recurso como achado — eu reportei o
problema lendo só a literatura do idioma que não sofre dele.

**Viés estrutural do método, herdado do `ESTUDO.md`.** A roda dos futuros trata possibilidade e
fantasia da mesma forma se não houver crítica por cima; a crítica por cima sou eu mesmo,
avaliando o que acabei de escrever. Isso não é independência, é autoavaliação — exatamente o
problema que a seção 7.2 aponta em LLM-as-judge, aplicado a este documento. Um mapa sobre
avaliação escrito por uma máquina que se avalia sozinha tem essa ironia embutida e não há como
removê-la de dentro.

**Viés de pessimismo institucional.** Reli o mapa procurando otimismo e achei pouco: quase todo
efeito de 3ª ordem termina em contrato, litígio, norma ou disputa de propriedade. É possível que
2031 simplesmente tenha ferramenta melhor e menos drama. Registro como possibilidade que o mapa
subrepresenta, e é o motivo de o cenário desejável da §9 existir.

## 8. O que a máquina errou

Registro dos erros cometidos durante esta rodada, com o motivo da desconfiança — não só o fato
da correção. A lição do `DUVIDAS.md` desta skill vale aqui: o erro perigoso não é a fonte
inventada, é a classificação errada de um fato correto.

**1. Classifiquei "observabilidade de agente" como disrupção-raiz, e estava errado.** Na primeira
passagem do Passo 4, ela entrou na seção 4 com justificativa aparentemente sólida: mercado novo,
duas Séries B em 2026, padrão de telemetria recém-criado. Nenhum fato ali era falso. O erro
apareceu ao responder o terceiro teste por escrito — "o que ainda falta para se concretizar?" —,
cuja resposta honesta é "quase nada: 89% das equipes declaram já ter". Pela régua desta rodada
(adoção além da maioria inicial desqualifica a candidata), isso é maduro. Movida para a seção 3.
**Ressalva sobre a própria correção:** os 89% vêm da pesquisa *State of Agent Engineering* da
LangChain, com mais de 1.300 respondentes, população autosselecionada de quem já constrói agentes
e responde a uma pesquisa de fornecedor de framework — o número quase certamente superestima a
adoção no universo geral de quem faz software. Mantive a rejeição porque os dois marcos de
funding apontam na mesma direção, não porque o 89% seja confiável isoladamente.

**2. Datei o Alpha Arena errado e não consegui resolver a divergência.** Eu tratava a experiência
como sendo de 2026. Um resultado de busca situa a temporada 1 entre 18 de outubro e 3 de novembro
de 2025; a página de resultados que eu abri, publicada em 4 de agosto de 2026, dá o ranking
completo mas **não informa a data de início**. As duas coisas não se contradizem, mas não se
confirmam — e eu não tenho a data primária. No texto escrevi "temporada 1" sem datar. Desconfiança
adicional: existe um repositório de terceiros com nome de Alpha Arena descrevendo o sistema como
aprendizado por reforço profundo com otimização adaptativa de estratégia, o que **contradiz** a
premissa que interessa ao tema (modelos generalistas recebendo o mesmo prompt). Não usei esse
repositório como fonte; se a descrição dele estiver certa para o sistema oficial, o Alpha Arena
não é o sinal que a disciplina supõe que seja, e o efeito e3 perde a sua evidência mais dura.

**3. Não consegui abrir a fonte primária do Alpha Arena.** `nof1.ai` devolveu HTTP 429. Tudo o
que este mapa afirma sobre a experiência vem de cobertura de terceiros. Registro porque a seção 6
chama esse caso de "sinal mais duro" do tema, e o sinal mais duro está apoiado em fonte
secundária.

**4. Ia afirmar que as convenções GenAI do OpenTelemetry são estáveis.** Elas não são: estão em
*Development* na v1.41 (maio de 2026), com os atributos `gen_ai.*` em selo de desenvolvimento, e
saíram para repositório próprio na v1.42.0, em 12 de junho de 2026. A desconfiança veio de uma
contradição interna: se o padrão estivesse estável, a mudança de repositório "para iterar mais
rápido" não faria sentido. Isso muda a conclusão do mapa, não só um detalhe — é o principal
argumento de fragilidade de D2 na seção 7.3.

**5. Ia escrever que o artigo 12 do AI Act é exigível desde 2 de agosto de 2026, ponto.** É mais
complicado: o acordo do *Digital Omnibus*, confirmado pelo Parlamento em 16 de junho de 2026,
posterga os sistemas autônomos do Anexo III para 2 de dezembro de 2027, e essa mudança só vincula
quando publicada no Diário Oficial da UE. Não li o Diário Oficial nem o texto do Omnibus — li
análise de fornecedor de conformidade. Confiabilidade média; a data de dezembro de 2027 deve ser
tratada como informação não confirmada na fonte primária.

**6. Números de memória que não fecham entre si.** Um resultado de busca atribui ao Zep 71,2% em
LongMemEval contra 49% do Mem0; a página do próprio Mem0 reporta 94,4 em LongMemEval para o Mem0
e 71,2 para o Zep. Os dois não podem descrever a mesma versão do mesmo sistema — provavelmente
comparam algoritmos de datas diferentes (a própria página cita um algoritmo novo de abril de 2026
com ganho de +29,6 pontos em raciocínio temporal e +23,1 em multi-hop). Não usei nenhum desses
números como evidência de superioridade de fornecedor, só como demonstração de que existe
benchmark público de memória, que é o ponto que o mapa precisa. Se alguém reaproveitar esses
números como placar, estará reproduzindo material de marketing.

**7. Usei um número de Gartner que não li na Gartner.** "40% das aplicações corporativas
integradas a agentes de tarefa específica até o fim de 2026, contra menos de 5% em 2025" chegou
até mim citado no blog de um fornecedor de memória. É segunda mão, é de consultoria, e é o tipo
de projeção que costuma ser revisada em silêncio. Está no texto marcado como indicação de
direção, e não deveria ser citado como medida por ninguém que leia este mapa.

**8. Quase escrevi que replay determinístico resolve o problema de reprodutibilidade.** O
resultado de F = 1,0 é real, mas o escopo é estreito: 5 cargas de trabalho, 250 instâncias, um
protótipo de linha de comando de um autor, em ambiente **sem rede**. Isso demonstra viabilidade,
não maturidade. O mesmo material que li aponta que ambientes reais são deliberadamente piores que
benchmarks — teste A/B, personalização, limitador de taxa, anti-bot. Corrigi a formulação de "o
replay resolve" para "o replay permite reproduzir uma falha que aconteceu uma vez" (e4.2), que é
o que a evidência sustenta.

**9. Um efeito soou bem e não se sustentou.** Havia, na primeira roda, um efeito de 2ª ordem
dizendo que "a memória compartilhada entre a equipe elimina a transferência de conhecimento na
saída de uma pessoa". É uma frase agradável e provavelmente falsa: a literatura de 2026 que
tangenciei fala de contaminação de memória, colapso de papel por procedência e consolidação não
confiável — ou seja, memória compartilhada cria problema de atribuição, não resolve problema de
transferência. O efeito foi cortado e o tema reapareceu de forma mais honesta em e8.1 (vazamento
por recordação) e no wildcard 5.

**10. Não verifiquei nenhuma das ferramentas da varredura da turma.** `projectmem`, `deja-vu`,
`memtrace`, `Rath`, `Parseable`, `Agnost`, `agent-inspect`, `vibe-log`, `agent-qa` aparecem na
seção 3.3 porque a descrição do tema as trouxe, não porque eu tenha aberto o repositório de
alguma delas. As descrições que dou são as da disciplina. Não as trate como verificadas.

## 9. Três cenários para 2031

### Provável — "gravado por todos, legível por ninguém"

É 2031. Todo agente em produção emite rastro; nenhum emite o mesmo rastro. As convenções GenAI
chegaram a uma versão estável em algum momento entre 2027 e 2029, mas a parte que interessa —
cadeia de raciocínio estruturada, atribuição de custo por passo — continuou em extensão
proprietária de cada plataforma, porque era ali que estava a diferenciação comercial. O resultado
é que qualquer empresa consegue provar internamente o que o seu agente fez, e quase nenhuma
consegue provar para um terceiro sem passar pela ferramenta do fornecedor.

A avaliação virou função com dono. Existe gente contratada para escrever rubrica, e a rubrica é
documento vivo revisado como se revisa manual de redação. O juiz automático é usado em toda
parte e ninguém confia nele por inteiro: o arranjo que se firmou é juiz automático para triagem e
amostra humana para decisão, com a taxa de concordância entre os dois publicada internamente como
métrica de saúde. Benchmark público continua existindo, e ninguém compra software por causa dele.

A memória é o ativo, e o aprisionamento é real e silencioso. Ninguém troca de plataforma de
agente porque a conta não fecha: dois, três anos de acervo contra uma migração que perde o
contexto. Não houve regulação; houve contrato. As cláusulas sobre o que o agente pode lembrar
depois do fim do vínculo passaram a ser negociadas, e as empresas maiores conseguiram cláusula de
exportação — em formato que só a própria plataforma lê. No Brasil, o Marco Legal passou, e o
efeito prático maior veio antes dele, por exigência de rastreabilidade em compra pública e no
Judiciário.

Para quem projeta mídia e interação: procedência aparece na interface, como aviso, em letra
pequena, por obrigação. É o desfecho morno — a infraestrutura de confiança existe, e a confiança
não melhorou na mesma proporção.

### Desejável — "o rastro chegou antes do acervo"

É 2031, e uma coisa aconteceu na ordem certa: o rastro padronizado se firmou **antes** de a
memória consolidar formato proprietário. Como o rastro é legível por terceiro, a memória virou
uma projeção dele — derivável, exportável, verificável. O aprisionamento por acervo não se formou,
não por generosidade, mas porque a arquitetura tornou o aprisionamento tecnicamente caro de
sustentar.

Isso exigiu três coisas concretas, e vale nomeá-las porque são o que teria de acontecer:
primeiro, as convenções GenAI atingirem 1.0 com cadeia de raciocínio e atribuição de custo
**dentro** do padrão, e não em extensão de fornecedor; segundo, uma exigência de exportação com
prova de procedência — do tipo Merkle-DAG assinado — entrar em compra pública em algum mercado
grande, o que resolveu o problema do ovo e da galinha sem esperar legislação; terceiro, a
calibração de juiz automático virar serviço independente, com viés publicado por instrumento,
como ficha técnica.

O efeito visível para quem projeta é que "mostrar o caminho" virou linguagem, não aviso. Existe
convenção estabelecida de como se exibe procedência — o equivalente do crédito de filme ou da
assinatura de fotografia —, e ela é reconhecível entre produtos de empresas diferentes. Existe
também controle de memória como elemento de primeira classe na interface: a pessoa vê o que o
sistema guardou, apaga o que quer, e a remoção é provável.

O que isso custou: mais atrito e mais lentidão. O sistema que precisa justificar o que lembra é
mais chato de usar do que o que simplesmente lembra tudo. Neste cenário, o mercado escolheu o
atrito — e essa é a parte menos provável da história.

### Indesejável — "a memória é dele, a culpa é sua"

É 2031. A gravação é completa e a legibilidade é nula. Cada plataforma tem o rastro e o acervo
dos seus clientes num formato que só ela interpreta, e o padrão aberto morreu em *Development* —
nunca chegou a 1.0, os atributos mudaram três vezes, as instrumentações comunitárias ficaram
atrás e as empresas foram para o formato do fornecedor porque funcionava. Trocar de plataforma
custa a memória de anos; ninguém troca. Três fornecedores concentram o contexto de trabalho de
uma proporção enorme das organizações, e a diferenciação entre eles não é mais o modelo.

A auditoria existe e é teatro. Como o rastro só é legível pela ferramenta que o produziu, o
auditor audita o relatório que a plataforma emite sobre si mesma, chancelado por juiz automático
cuja calibração nunca foi resolvida. Quando algo dá errado, a trilha está completa, resistente a
adulteração, com seis meses de retenção — e responsabiliza o operador humano, que era o único
elemento do sistema com nome próprio no log. O rastro, que existia para tornar o sistema
auditável, virou o instrumento de atribuir a falha à pessoa que apertou o botão.

O vazamento por recordação é rotina, e ninguém sabe medir. Informação atravessa projeto, equipe e
emprego dentro do acervo, não por acesso indevido, mas porque o sistema lembrou algo que aprendeu
em outro contexto. Não há como auditar com controle de permissão, porque não houve acesso: houve
memória.

**Sinal precoce deste cenário, e ele é observável agora:** a distância entre a taxa de quem grava
e a taxa de quem avalia. Hoje são 89% contra 37,3% de avaliação online, com 29,5% sem avaliação
nenhuma. Se essa distância **aumentar** em vez de diminuir nos próximos dois anos, é este o
cenário que está se formando — porque significa que a indústria comprou a parte da infraestrutura
que produz conformidade e não comprou a parte que produz confiança. O segundo sinal precoce é mais
simples: as convenções GenAI passarem de 2028 sem 1.0.

## 10. O experimento

**O que é.** Um agente com **diário de bordo assinado**. Uma coisa pequena, construível numa
semana: um agente de tarefa qualquer (pode ser um assistente de pesquisa, pode ser um que organiza
arquivo) com duas propriedades incomuns acopladas.

Primeira: tudo que ele faz vira rastro nas convenções GenAI do OpenTelemetry, e cada entrada de
**memória** que ele cria é gravada num log encadeado por hash — cada registro contém o hash do
anterior, e o conjunto é assinado. Se alguém editar ou remover um item do meio, a cadeia quebra e
isso é detectável por quem não confia em quem gravou.

Segunda, e é ela que faz o experimento valer: **no início de cada sessão, o agente mostra o que
lembra e pede autorização item por item.** Não um painel de configuração escondido — um pedido no
caminho, que atrapalha. A pessoa marca o que ele pode usar naquela sessão, e o que ela recusa fica
registrado como recusa (na cadeia, com carimbo de tempo), não apagado. Ao fim de algumas semanas,
o artefato interessante não é o agente: é a **série de recusas**.

**Que pergunta sobre o futuro ele ajuda a responder.** Duas, ligadas. (a) O quanto de atrito as
pessoas toleram em troca de controle sobre a memória? O cenário desejável da §9 depende de o
mercado escolher o atrito, e essa é a parte menos provável da história — aqui ela fica medida em
vez de suposta. (b) O que as pessoas escolhem esquecer? Isto é diretamente pauta de projeto: se as
recusas se concentrarem em categoria previsível (erro cometido, preferência antiga, informação de
terceiro mencionada de passagem), há um padrão de interface a inventar. Se forem idiossincráticas,
não há — e "projetar o esquecimento" (e9) é promessa vazia, porque não se projeta para o
arbitrário.

**Que tecnologia emergente ele usa, e por que a madura não serve.** Usa três coisas que só existem
agora: as convenções GenAI do OpenTelemetry para spans de agente e de ferramenta (o rastro precisa
ser legível por ferramenta que não é a minha, senão o experimento só prova que eu consigo ler o meu
próprio log); um sistema de memória persistente entre sessões, do tipo Mem0, Zep ou Letta, porque
sem memória atravessando sessão não há nada para autorizar; e encadeamento por hash com assinatura,
na linha da proposta de transferência de memória com procedência verificada. Log de aplicação
comum — tecnologia madura — não serve por um motivo preciso: ele é editável por quem o escreve, e
a pergunta do experimento é o que acontece quando a memória é **contestável por terceiro**. Um log
que o dono pode reescrever responde a outra pergunta. Banco de dados com controle de permissão
também não serve: permissão regula acesso, e o problema de e8.1 é vazamento por recordação, em que
o acesso foi legítimo.

**O que faria quem testar mudar de ideia sobre o mapa.** Três resultados, cada um derrubando uma
parte:

- **Se quase ninguém recusar nada** — as pessoas autorizarem tudo, sempre, em três cliques
  automáticos —, então e9, e9.1 e e9.2 caem, o "modo sem memória" nunca vira produto, e o cenário
  provável fica mais provável do que está escrito. É o resultado que eu esperaria, e por isso o
  experimento vale.
- **Se as recusas forem frequentes e concentradas em erro passado**, o wildcard 5 (memória como
  dívida) ganha força contra e7: o acervo não seria ativo, seria passivo, e o argumento inteiro de
  aprisionamento por memória perde o chão.
- **Se a cadeia assinada se mostrar impraticável** — custo, latência, ou simplesmente o fato de que
  a memória útil é reescrita o tempo todo e um log imutável não a modela —, então e7.2 e e7.2.1
  caem, a memória não vira registro auditável, e o único caminho para portabilidade volta a ser
  regulatório.

Nenhum desses três resultados é o que o mapa prevê. É de propósito: um experimento que só pode
confirmar o mapa não é experimento.

## 11. Fontes

Divido em duas listas porque a diferença importa: **abri e li** oito páginas; as demais eu vi
apenas como resultado de busca, com o resumo que o buscador devolveu. Nada aqui foi inventado, e
o que não tem fonte real está marcado como especulação desta skill no próprio texto (§8).

### 11.1 Abertas e lidas (8)

1. `https://mem0.ai/blog/state-of-ai-agent-memory-2026`
   Sustenta: números de benchmark de memória (LoCoMo 92,5; LongMemEval 94,4 a ~6,8 mil
   tokens/consulta; BEAM 64,1 em 1M e 48,6 em 10M tokens), ganho de +29,6 e +23,1 pontos do
   algoritmo de abril de 2026, comparativo com Zep/Letta/OpenAI, projeção de 40% de aplicações
   corporativas, problemas declarados em aberto (abstração temporal, resolução de identidade,
   memória obsoleta, privacidade).
   **Confiabilidade: baixa para comparação, média para o resto.** É material de fornecedor
   avaliando a si mesmo contra concorrentes; usei como prova de que existe benchmark público, não
   como placar. A projeção de 40% é de Gartner citada de segunda mão.

2. `https://greptime.com/blogs/2026-05-09-opentelemetry-genai-semantic-conventions`
   Sustenta: quais spans e atributos as convenções GenAI definem (`create_agent`, `invoke_agent`,
   `invoke_workflow`, `execute_tool`, atributos MCP, `gen_ai.evaluation.result`, os dois
   histogramas), status *Development* na v1.41 (maio de 2026), ausência de 1.0 e de prazo, lacunas
   de cobertura (custo multi-passo, janela de contexto, cadeia de raciocínio estruturada), adoção
   por Datadog a partir de v1.37+.
   **Confiabilidade: média-alta.** É post técnico de fornecedor de observabilidade, mas descreve
   uma especificação pública e verificável, e é conservador sobre o status (não vende estabilidade
   que não existe).

3. `https://prefactor.tech/learn/agent-benchmarks`
   Sustenta: o que tau-bench, tau2-bench (`pass^k`), SWE-bench, GAIA, WebArena e AppWorld medem, e
   o argumento de que o padrão dos benchmarks que resistem é verificação por execução.
   **Confiabilidade: média.** Descrição correta e conservadora, mas sem números nem datas — não dá
   para citar pontuação a partir dela, e eu não cito.

4. `https://www.newamerica.org/insights/ai-agents-and-memory/`
   Sustenta: o argumento de memória distribuída e persistente na era do MCP, riscos de vazamento
   entre serviços, quebra de cifra ponta a ponta quando o agente precisa agir sobre texto claro, o
   incidente do tipo *Echoleak* (2024), lacunas de consentimento, ausência de identidade e
   permissão padronizadas no MCP, e a tese de que o contexto é o fosso competitivo quando os
   modelos convergem.
   **Confiabilidade: alta para a análise, média para os exemplos.** Publicação de think tank
   (5 de novembro de 2025), sem interesse comercial no resultado; os exemplos são de segunda mão.

5. `https://arxiv.org/abs/2607.16200` — *Deterministic Replay for AI Agent Systems*, Rasheed
   Mudasiru, submetido em 30 de abril de 2026.
   Sustenta: o `agrepl`, interceptação em proxy MITM, replay em ambiente isolado sem rede,
   fidelidade F = 1,0 em 5 cargas e 250 instâncias, redução mediana de 98,3% na latência por passo.
   **Confiabilidade: média.** Preprint sem revisão por pares indicada, autor único, escopo
   experimental estreito. Usei como prova de viabilidade técnica, explicitamente não de maturidade
   (ver §8, item 8).

6. `https://arxiv.org/html/2605.11032v1` — *Portable Agent Memory: A Protocol for
   Provenance-Verified Memory Transfer Across Heterogeneous LLM Agents*, 10 de maio de 2026.
   Sustenta: ausência de protocolo de portabilidade de memória (MCP cobre ferramenta, A2A cobre
   delegação, nenhum cobre memória), modelo de cinco tipos de memória, Merkle-DAG com BLAKE3 e
   Ed25519, tokens de capacidade com escopo, continuidade de transferência de 0,83–0,92 contra
   0,28–0,45 de linha de base, detecção de adulteração em 1.000/1.000, resistência a injeção em
   200 padrões de ataque, e a nomeação de aprisionamento e amnésia de sessão como problemas
   abertos.
   **Confiabilidade: média.** Preprint; os números de avaliação são autorreportados e de bancada,
   não de campo. Vale como demonstração de que o problema é reconhecido e atacável, não como
   evidência de solução adotada.

7. `https://www.marktechpost.com/2026/08/09/top-llm-observability-and-evaluation-platforms-in-2026-langfuse-langsmith-braintrust-arize-and-more-compared/`
   Sustenta: as taxas da pesquisa *State of Agent Engineering* da LangChain (1.300+ respondentes:
   89% com observabilidade, 52,4% eval offline, 37,3% eval online, 29,5% sem avaliação, 32%
   apontando qualidade como barreira) e quais plataformas declaram suporte às convenções GenAI.
   **Confiabilidade: média para o comparativo, baixa-média para os percentuais.** Os números são de
   pesquisa de fornecedor de framework com população autosselecionada, citados aqui em terceira mão.
   É a fonte do dado que mais pesa neste mapa (rejeição de D4 e o sinal precoce da §9) — e é a que
   eu mais gostaria de ter em versão primária.

8. `https://www.iweaver.ai/blog/alpha-arena-ai-trading-season-1-results/`
   Sustenta: Alpha Arena temporada 1 — 10 mil dólares reais por modelo, perpétuos de cripto na
   Hyperliquid, mesmos prompts e dados segundo o organizador, seis modelos, e o ranking final
   (Qwen3 Max +22,3%; DeepSeek Chat V3.1 +4,89%; Claude Sonnet 4.5 −30,81%; Grok 4 −45,3%;
   Gemini 2.5 Pro −56,71%; GPT-5 −62,66%).
   **Confiabilidade: baixa-média.** Blog agregador, sem data de início da temporada, e a fonte
   primária (`https://nof1.ai/`) devolveu HTTP 429 quando tentei abrir. Ver §8, itens 2 e 3.

**Tentadas e falhas:** `https://nof1.ai/` (HTTP 429) e
`https://www.datawallet.com/crypto/alpha-arena-nof1-ai-explained` (HTTP 404).

### 11.2 Vistas apenas como resultado de busca (não abertas)

Tudo abaixo entrou no mapa pelo resumo do buscador. Trate como indicação a verificar, não como
fonte lida. Onde uma afirmação do texto depende exclusivamente de um destes, ela está marcada no
corpo do documento ou na §8.

- `https://artificialintelligenceact.eu/article/12/` e
  `https://www.helpnetsecurity.com/2026/04/16/eu-ai-act-logging-requirements/` e
  `https://aisecuritygateway.ai/blog/eu-ai-act-article-12-compliance-logging` — artigo 12 do AI
  Act, retenção mínima de seis meses, interpretação de log resistente a adulteração, exigibilidade
  em 2 de agosto de 2026, adiamento do Anexo III autônomo para 2 de dezembro de 2027 pelo *Digital
  Omnibus* (Parlamento, 16 de junho de 2026), sanção do artigo 99 (15 milhões de euros ou 3% do
  faturamento). **Não li o texto legal nem o Diário Oficial.** Confiabilidade da norma em si: alta;
  da interpretação de fornecedor de conformidade: média.
- `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233` e
  `https://confidata.com.br/blog/anpd-regulacao-ia-brasil-2026-2027` — PL 2338/2023 aprovado no
  Senado em 10 de dezembro de 2024, em comissão especial na Câmara, expectativa de votação final em
  2026, estrutura de risco, SIA, sanção de até 50 milhões de reais, exigência de rastreabilidade em
  alto risco, e as diretrizes do CNJ sobre rastreabilidade e auditoria. Confiabilidade da página do
  Senado: alta (tramitação é fato público); das análises: média.
- `https://arxiv.org/html/2608.26623` (AgentJudgeBench), `https://arxiv.org/pdf/2606.19544`
  (*Reliability without Validity*), `https://arxiv.org/pdf/2606.22329` (BabelJudge),
  `https://arxiv.org/pdf/2603.05399` (Judge Reliability Harness),
  `https://arxiv.org/pdf/2604.16706` (AgentProp-Bench) — viés de posição, de verbosidade e
  degradação por idioma em LLM-as-judge; confiabilidade de juiz em chamada de ferramenta. São
  preprints, não abri nenhum: usei a **existência de uma safra de 2026 sobre o tema** como sinal,
  o que é um uso legítimo do resumo de busca; qualquer número específico deles seria não.
- `https://kili-technology.com/blog/ai-benchmarks-guide-the-top-evaluations-in-2026-and-why-theyre-not-enough`
  — saturação a 88–90%, MMLU no teto primeiro. Confiabilidade: média.
- `https://tianpan.co/blog/2026-04-12-deterministic-replay-debugging-non-deterministic-ai-agents`
  e `https://arxiv.org/pdf/2606.22495` (*Grounded Scaling*) e
  `https://www.digitalapplied.com/blog/ai-agent-run-replay-reproducibility-reference` — variação de
  até 15% de acurácia entre execuções com cinco LLMs configurados para saída determinística, e
  diferença de até 70 pontos entre melhor e pior caso; ambientes reais deliberadamente não
  determinísticos. **O número de 15% e o de 70 pontos vieram de resumo de busca e não foram
  confirmados na fonte** — trate-os como ordem de grandeza.
- `https://medium.com/@wasowski.jarek/i-compared-5-ai-agent-memory-systems-across-6-dimensions-none-wins-6a658335ed0a`
  e `https://machinelearningmastery.com/the-6-best-ai-agent-memory-frameworks-you-should-try-in-2026/`
  — perfis comparados de Mem0, Zep/Graphiti, Letta, LangMem; ~55 mil estrelas do Mem0 em maio de
  2026; Zep com grafo indexado no tempo. Confiabilidade: baixa-média (post de opinião individual).
- `https://mnemoverse.com/docs/library/agent-memory-interop-gap`,
  `https://stantyan.com/blog/portable-ai-memory-or-permanent-lock-in/`,
  `https://plur.ai/blog/open-standard-ai-agent-memory/`, `https://arxiv.org/pdf/2606.31498`
  (*Governance Gaps in Agent Interoperability Protocols*) — ausência de padrão ratificado em julho
  de 2026, Engram Specification, fragmentação de esquemas, e a formulação de que portabilidade de
  memória não existe como capacidade prática. Confiabilidade: média; há interesse comercial em
  parte deles (a PLUR publica o próprio formato).
- `https://callsphere.ai/blog/langfuse-raises-50m-series-b-ai-agent-observability` — Langfuse,
  50 milhões de dólares em Série B em 12 de março de 2026, liderada pela Lightspeed, avaliação de
  ~400 milhões; Braintrust com 80 milhões e avaliação de 800 milhões. Confiabilidade: média
  (notícia de funding é usualmente correta quanto ao valor, frequentemente imprecisa quanto à
  avaliação).
- `https://www.marketsandmarkets.com/Market-Reports/ai-testing-certification-service-market-130777429.html`,
  `https://www.factmr.com/report/ai-agent-audit-and-assurance-services-market`,
  `https://www.isaca.org/credentialing/aaia` — mercado de teste e certificação de IA de 4,8 bilhões
  de dólares (2025) para 22,6 bilhões (2032), CAGR ~24,6%; auditoria de terceiro com 37% de
  participação em 2026; AAIA da ISACA lançada em maio de 2025; SGS adquirindo a CertX; *Big Four*
  montando prática de asseguração. **Confiabilidade: baixa para as projeções de mercado** — relatório
  pago de consultoria, metodologia não pública, o gênero mais propenso a número inflado deste
  documento. A existência do AAIA e a aquisição são fatos verificáveis; os bilhões, não.

### 11.3 Sem fonte — especulação declarada desta skill

Todos os efeitos de 3ª ordem do bloco YAML da §5, os três cenários da §9 e o experimento da §10
são construção desta skill a partir das fontes acima. Não há fonte que sustente um efeito de 2031;
o que há é um encadeamento argumentativo que pode ser conferido passo a passo — e a §7 é a
tentativa honesta de derrubá-lo.

## 12. Anexo — o levantamento bruto

Despejo sem edição. O que não estiver aqui não pode ser reaproveitado depois.

### 12.1 A entrevista que não houve

O Passo 1 desta skill é obrigatório e exige entrevista antes de produzir. **Nesta rodada não
havia interlocutor** — as respostas vieram pré-definidas no pedido de execução, e a skill autoriza
prosseguir desde que as suposições sejam registradas por escrito. Registro literal do que foi
fornecido, item por item do Passo 1:

1. **Horizonte:** 2031. (fornecido)
2. **Recorte:** público "quem projeta mídia e interação"; geografia global, com uma nota sobre o
   Brasil. (fornecido — a condição de saída da entrevista, itens 1 e 2, está satisfeita)
3. **Descartado de início:** o que já é comum em produto de massa (a régua da disciplina). Nenhuma
   outra exclusão.
4. **Viés desejado:** neutro, sem preferência declarada.
5. **Palpite de disrupção central:** nenhum; levantar do zero.
6. **Extra fornecido, fora do Passo 1:** critério de mudança de ideia — evidência de que a adoção
   passou da maioria inicial (Rogers) ou de que a tecnologia só melhora o que existe. **Este item é
   o que matou a quarta disrupção-raiz** (ver 12.3); foi usado como se fosse um quarto teste do
   Passo 2.

### 12.2 Aplicação bruta do Passo 2 a todos os candidatos

Formato: candidato → teste 1 (o que rompe) → teste 2 (por que agora) → teste 3 (o que falta) →
veredito.

| Candidato | T1 | T2 | T3 | Veredito |
|---|---|---|---|---|
| Avaliação de sistema não determinístico com consequência | muda quem pode afirmar que funciona, e o objeto avaliado (distribuição) | saturação 88–90%; aposta real; 29,5% sem eval | juiz não calibrado; nenhuma autoridade certifica avaliador | **ACEITO (D1)** |
| Rastro como artefato de 1ª classe + replay determinístico | muda o que conta como prova; torna possível reproduzir o irreprodutível | semconv v1.41/v1.42.0; F=1,0 em abr/2026; art. 12 | spec em Development, sem 1.0; lacunas de custo/raciocínio | **ACEITO (D2)** |
| Memória entre sessões e ferramentas sem portabilidade | muda quem precisa de quem; cria ativo fora de contrato | contexto caro; benchmarks de memória; escala de agentes | nenhum padrão ratificado (jul/2026); esquemas divergentes | **ACEITO (D3)** |
| Observabilidade de agente como categoria de produto | rompe pouco: torna visível o que já se instrumentava | agentes em produção | **quase nada — 89% declaram já ter** | REJEITADO → §3.4 |
| Logs, métricas, tracing de aplicação | nada | — | nada | REJEITADO (maduro, já fora da linha da disciplina) |
| Teste unitário / CI | nada | — | nada | REJEITADO (maduro) |
| Memória como recurso de produto de consumo | muda experiência, não quem pode o quê | — | nada; está em produto de massa | REJEITADO (régua da rodada) |
| Redução de token / engenharia de contexto (`lean-ctx`, 60–90%) | torna mais barato o que já se fazia | custo de contexto | — | REJEITADO no T1; entra como condição de viabilidade |
| RAG | idem | — | — | REJEITADO no T1 |
| LLM-as-judge isoladamente | torna avaliação escalável — é mecanismo, não disrupção | — | calibração | REJEITADO como raiz; entra dentro de D1 |
| Auditoria de IA como serviço profissional | muda quem chancela | AAIA mai/2025; mercado em formação | profissão, norma, reserva de mercado | REJEITADO como raiz; virou efeito (e2.2, e2.2.1) e wildcard 3 |

### 12.3 A rodada descartada: quando D2 tinha outro nome

A primeira versão do Passo 4 tinha **quatro** disrupções-raiz, e a quarta era "observabilidade de
agente" — escrita assim: *"a observabilidade de LLM vira categoria própria de infraestrutura, com
padrão de telemetria, mercado e ferramenta dedicada"*. A justificativa parecia boa: Langfuse com
50 milhões em março de 2026, Braintrust avaliada em 800 milhões, convenções GenAI recém-criadas.

O que a derrubou foi responder o terceiro teste **por escrito**: "o que ainda falta para se
concretizar?" Resposta honesta: quase nada. 89% de adoção declarada. Pela régua fornecida nesta
rodada — adoção além da maioria inicial desqualifica —, é maduro. Movida para §3.4.

O que **sobrou** dessa candidata e virou D2 é mais estreito e mais interessante: não a
observabilidade (gravar), mas o **rastro padronizado e reexecutável** (gravar de um jeito que um
terceiro possa ler e repetir). A distinção é o miolo do mapa: o mercado resolveu a coleta e não
resolveu a legibilidade por terceiro. Se eu tivesse deixado a candidata original, o mapa teria
descrito um mercado que já existe como se fosse futuro — exatamente o erro documentado no
`DUVIDAS.md` desta skill, com outro objeto.

### 12.4 Efeitos cortados, com o motivo

- *"O avaliador de IA vira profissão regulamentada, com conselho profissional e reserva de mercado,
  até 2031."* — cortado no Passo 6. Comparável (auditoria contábil) leva décadas; o que existe é
  credenciamento privado de 2025. Rebaixado ao wildcard 3, na forma invertida (juiz automático
  declarado inadmissível).
- *"Benchmarks públicos deixam de ser publicados."* — cortado por ser absoluto e falso no
  mecanismo: benchmark serve a marketing e a pesquisa, não só a compra. Substituído por e1.2.
- *"A memória compartilhada entre a equipe elimina a transferência de conhecimento na saída de uma
  pessoa."* — cortado: soa bem e a literatura de 2026 aponta o contrário (contaminação de memória,
  colapso de papel por procedência). Reapareceu honestamente em e8.1 e no wildcard 5.
- *"Arenas de agentes viram esporte com liga profissional e patrocínio."* — reduzido, não cortado:
  virou e3.2 ("formato de mídia"), sinal fraco. Sem evidência de audiência, só de existência.
- *"Todo produto de mídia exibe o rastro de como foi feito, por obrigação legal, até 2029."* —
  cortado por confundir dois regimes: a obrigação do AI Act incide sobre alto risco, não sobre
  produto de mídia. O conteúdo sobreviveu em e6.1 (como escolha de design) e no wildcard 1 (como
  obrigação, com probabilidade baixa e sem o prazo de 2029).
- *"O custo de rastro torna proibitivo rodar agente em escala."* — cortado: é a mesma extrapolação
  linear de e5.1 levada ao extremo, e o próprio mecanismo de compressão (e5.1.1) a desmonta.
- Ajustes de grau mantidos no documento: e5.1 de 2028 para 2029; e7.1.1 fixado em "entra na agenda"
  e não em "torna-se obrigação"; e4.1.1 marcado como "sem precedente comparável encontrado".

### 12.5 Buscas feitas e o que cada uma rendeu

1. `agent memory long-term memory Mem0 Letta Zep 2026 state of the art` — rendeu o comparativo de
   sistemas, os números de benchmark e a página da Mem0. Útil.
2. `OpenTelemetry GenAI semantic conventions agent observability status 2026` — rendeu o status
   *Development*, a v1.41, a mudança de repositório em 12/06/2026 e a lista de quem suporta.
   A busca mais produtiva da rodada.
3. `Nof1 AI alpha arena trading models real money results 2026` — rendeu o ranking e a divergência
   de datas (um snippet diz 18/10 a 03/11/2025). Trouxe também um repositório de terceiros
   descrevendo aprendizado por reforço profundo, que **contradiz** a premissa de prompt idêntico a
   modelo generalista — descartado como fonte, registrado como desconfiança em §8.
4. `LLM-as-judge reliability critique evals agent evaluation tau-bench GAIA 2026 saturation` —
   rendeu a safra de 2026 sobre confiabilidade de juiz, a saturação a 88–90% e o `pass^k`.
5. `EU AI Act article 12 record-keeping logs high-risk AI audit trail 2026 enforcement` — rendeu a
   retenção de seis meses, a data de 02/08/2026, o adiamento do *Digital Omnibus* e a sanção do
   art. 99.
6. `PL 2338 marco legal inteligência artificial Brasil 2026 status rastreabilidade registro
   auditoria` — rendeu a tramitação e as diretrizes do CNJ. **Única busca em português da rodada** —
   e isso é uma fragilidade, ver §7.4.
7. `agent memory portability standard export lock-in "memory" MCP interoperability 2026` — rendeu o
   achado mais decisivo do mapa: nenhum padrão ratificado em julho de 2026. Fundamenta D3 inteira.
8. `AI audit profession third-party assurance market 2026 "AI auditor" certification accreditation
   growth` — rendeu o AAIA, a CertX/SGS, as *Big Four* e projeções de mercado de baixa
   confiabilidade.
9. `Langfuse Braintrust LangSmith adoption funding 2026 LLM observability evals market` — rendeu o
   funding e, por acidente, os percentuais da pesquisa da LangChain que derrubaram a quarta
   disrupção-raiz. O achado mais importante veio de uma busca feita para outra coisa.
10. `deterministic replay agent trace non-determinism reproducibility research 2026` — rendeu o
    `agrepl`, a variação de 15% entre execuções e o argumento de ambiente deliberadamente não
    determinístico.

**Buscas que não fiz e que faltam.** Nenhuma busca sobre custo real de armazenamento de rastro
(e5.1 ficou sem base empírica); nenhuma sobre interface de controle de memória em produto existente
(e9.1 é inteiramente especulativo); nenhuma em português sobre observabilidade ou memória (só sobre
regulação); nada sobre o que a LGPD já diz sobre portabilidade, que seria a base natural da nota
brasileira de e7.1.1; nada sobre precedente judicial envolvendo memória de agente (wildcard 4 é
suposição pura).

### 12.6 Contradições encontradas e não resolvidas

1. **LongMemEval do Mem0:** 49% num snippet, 94,4 na página do fornecedor. Não resolvido —
   provavelmente versões diferentes do algoritmo.
2. **Data da temporada 1 do Alpha Arena:** 18/10–03/11/2025 num snippet; a página de resultados,
   de 04/08/2026, omite. Não resolvido; fonte primária inacessível (429).
3. **Natureza do Alpha Arena:** prompt idêntico a modelo generalista (organizador, via cobertura)
   versus aprendizado por reforço profundo (repositório de terceiros). Não resolvido. **É a
   contradição mais grave do documento**, porque incide sobre o que a disciplina chama de sinal
   mais duro do tema.
4. **Exigibilidade do art. 12:** 02/08/2026 versus 02/12/2027 para Anexo III autônomo, condicionada
   a publicação no Diário Oficial. Não resolvido na fonte primária; ambas as datas estão no texto,
   com a condição declarada.
5. **Determinismo:** "cinco LLMs configurados para saída determinística" com variação de até 15% —
   número de snippet, não confirmado, e não sei se "configurados para determinismo" significa
   temperatura zero, semente fixa, ou ambos. Usado como ordem de grandeza.

### 12.7 O que este mapa não cobriu e deveria

- **Custo.** Nenhum número real de dólar por milhão de spans, e e5.1 depende disso.
- **O elo com os temas vizinhos.** A fronteira com conter o agente (tema 2) foi respeitada, mas há
  um efeito na fronteira que ficou de fora: um agente contido gera rastro diferente de um agente
  livre, e a contenção é observável no rastro. Isso interessa aos dois temas e não está em nenhum.
- **Multilíngue.** A degradação de juiz automático em idioma de menor recurso é citada como achado
  e não foi explorada como efeito — e é, para o Brasil, provavelmente o efeito mais concreto de
  todo o mapa. Se o juiz automático é pior em português, avaliação automática em produto brasileiro
  é pior, e a assimetria de §7.3 tem uma versão linguística que este documento não desenvolveu.
  **É a lacuna que eu mais recomendaria preencher numa próxima passagem.**
- **Acessibilidade.** Rastro legível para quem não escreveu o sistema (e6) foi tratado como
  problema de design de informação e nunca como problema de acessibilidade, o que é uma omissão num
  mapa dirigido a quem projeta interação.
