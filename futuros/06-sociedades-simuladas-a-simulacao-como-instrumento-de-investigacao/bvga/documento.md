---
tema: "Sociedades simuladas: a simulação como instrumento de investigação"
slug: sociedades-simuladas-a-simulacao-como-instrumento-de-investigacao
autor_login: bvga
zona_de_interesse: Simulação e mundos
data: 2026-09-12
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 3
efeitos_ordem_2: 8
efeitos_ordem_3: 8
tecnologias_citadas: [Generative Agents (Park et al.), Concordia (Google DeepMind), OASIS (CAMEL-AI), AgentSociety, PolicySim, ContextSim (Woven by Toyota), ARTAI, social digital twins, WebLLM, WebGPU, modelagem baseada em agentes clássica]
fontes: 14
confianca: media
experimento: Túnel de bancada
skill_usada: futurizacao-bvga
publico_ok: false
---

## 1. Resumo

A capacidade emergente não é "agente" nem "escala": é a **população sintética barata, heterogênea em linguagem natural e re-executável**, usada como bancada de teste. Em 2026 há três coisas simultaneamente verdadeiras e difíceis de conciliar. Primeira: a bancada já entrou em pipeline industrial — um framework de simulação de usuário construído dentro de uma montadora obteve a maior correlação de ordenação com 55 experimentos históricos reais de recomendação e, calibrando parâmetros por simulação, mediu ganho em produção (ContextSim, Woven by Toyota, 2026). Segunda: a mesma literatura que constrói a bancada demonstra que ela não reproduz a **variância** humana — num teste com dados de consumo não públicos, nenhum modelo bateu uma linha de base que simplesmente repete a distribuição humana agregada (Moon et al., 2026), e num jogo econômico clássico os oito modelos testados divergiram significativamente da distribuição humana (Gao et al., PNAS, 2025). Terceira: perturbações que o pesquisador considera irrelevantes movem o resultado macro em até **76 pontos percentuais** — e a mesma perturbação move outro modelo em 1 ponto (Ye et al., 2026).

O que isso significa para quem projeta mídia e interação, até 2031: a simulação social deve chegar como **instrumento de triagem e comparação**, não como instrumento de estimativa. Ela responde bem "qual das oito opções é melhor" e mal "quantos vão clicar". A disputa que se abre não é sobre o algoritmo testado — é sobre **quem define o ambiente** e **quem prova que a população sintética corresponde a alguma população real**. O survey mais recente do campo é explícito: "modelos de agentes com LLM não podem fornecer alegações preditivas confiáveis sobre sistemas do mundo real, e sua linguagem realista não deve ser considerada evidência da capacidade de simular adequadamente o comportamento humano" (Cau et al., 2026).

Três disrupções-raiz foram aceitas; uma candidata forte (a bancada barata no navegador) foi **rebaixada a sinal fraco** por falta de evidência de uso, e dois efeitos foram rebaixados no red team. A confiança geral do mapa é **média**: a ancoragem do presente é boa, a projeção de 2ª e 3ª ordem é especulativa por construção, e o contrassinal mais forte do mapa está dentro das próprias fontes que sustentam a raiz.

## 2. O tema

**O recorte.** A simulação social como **método**: colocar uma população de agentes com modelo de linguagem num ambiente configurável, rodar possibilidades e usar o que emerge como dado sobre o mundo real. O objeto é o instrumento, não o entretenimento. Ficam fora: personagem autônomo em jogo, mercado de máquinas com dinheiro real, agente com corpo no mundo físico.

**Parâmetros desta análise, confirmados antes de qualquer pesquisa** (a skill exige entrevista antes da análise; nesta rodada as respostas foram fornecidas com o pedido, e estão reproduzidas aqui como contrato):

| Campo | Valor |
|---|---|
| Tema | Sociedades simuladas: a simulação como instrumento de investigação |
| Horizonte | 2031 |
| Público | Quem projeta mídia e interação |
| Recorte geográfico | Global, com uma nota sobre o Brasil |
| Descartes | O que já é comum em produto de massa; ideias que serviriam a qualquer tema |
| Viés desejado | Neutro |
| Profundidade | Três ordens |
| Modo | A partir de uma inovação/tema, não de um setor |
| Critério de mudança de ideia declarado | Evidência de que a adoção passou da maioria inicial (Rogers), ou de que a tecnologia só melhora o que existe sem romper nada |

**Onde passa a linha.** Modelagem baseada em agentes clássica — regras fixas, parâmetros numéricos, NetLogo — é madura e aplicada há décadas nas ciências sociais e naturais; entra neste mapa como **antecedente**, não como raiz. A própria literatura marca a diferença: um modelo generativo baseado em agentes "não é apenas um ABM clássico em que os agentes conversam entre si"; o modelo de linguagem aplica senso comum à situação, recorre a conhecimento semântico, produz chamadas de API e comunica tanto dentro da simulação quanto para quem observa de fora (Vezhnevets et al., Concordia, 2023). O emergente é isso — mais a escala de milhares a um milhão.

**Uma nota sobre o que este documento não é.** Não é previsão. A Futures Wheel organiza hipóteses causais para serem criticadas; a ordem de um efeito mede distância causal, não data. Um efeito de 3ª ordem pode chegar antes de um de 1ª.

## 3. Onde isso está hoje

### O que existe e está documentado

**O experimento fundador.** Vinte e cinco agentes num sandbox interativo; a festa de Dia dos Namorados que se organizou sem roteiro — convites espalhados por dois dias, novos conhecidos, convites para acompanhar, coordenação de horário de chegada. A arquitetura tem três componentes, todos necessários por teste de ablação: observação, planejamento e reflexão (Park et al., abril de 2023). É o marco a partir do qual "agente generativo" passou a nomear uma coisa específica.

**A biblioteca de propósito declarado.** Concordia (Google DeepMind, dezembro de 2023) organiza a simulação em torno de um **Game Master**, inspirado em RPG de mesa, que traduz a ação declarada em linguagem natural pelo agente em consequência no ambiente — checando plausibilidade física no mundo simulado, ou operando chamadas de API em ambiente digital. O propósito declarado no próprio resumo já não é só científico: a biblioteca foi desenhada também "para avaliar o desempenho de serviços digitais reais simulando usuários e/ou gerando dados sintéticos". Em 2023 o instrumento já tinha ambição de bancada de produto.

**A escala.** OASIS (CAMEL-AI, novembro de 2024; v5 em março de 2025) declara suporte a **até um milhão de agentes** em ambientes que imitam X e Reddit, com 21 ações possíveis (seguir, comentar, repostar…) e algoritmos de recomendação por interesse e por *hot score*. Replica difusão de informação, polarização de grupo e efeito manada. Os autores relatam que **escala maior de grupo produziu dinâmica de grupo mais acentuada e opiniões mais diversas** — isto é, a escala não é só engenharia: muda o fenômeno observado. AgentSociety (fevereiro de 2025; v2 em abril de 2026) opera na outra ponta: mais de 10 mil agentes, 5 milhões de interações, e cinco questões sociais — polarização, difusão de mensagem inflamatória, renda básica universal, choque externo (furacão) e sustentabilidade urbana.

**A entrada em pipeline industrial.** É aqui que o "por que agora" fica concreto. ContextSim (Bougie et al., Woven by Toyota, abril/junho de 2026) usa agentes com LLM para simular usuário de sistema de recomendação ancorado em rotina diária — quando, onde e por que a pessoa interage. Números: a **maior correlação de Spearman com as métricas de referência em 55 experimentos históricos** de recomendação de comida; parâmetros otimizados por simulação produziram, medidos, +5,68% de razão de visualização, +12,5% de itens curtidos e +10,9% de satisfação contra a linha de base. Os autores são explícitos: **não substitui teste A/B**, serve de proxy anterior ao lançamento. Declaram, também, limitação de reprodutibilidade por depender de dados proprietários, herança de viés do modelo de base, alucinação em itens raros e sensibilidade a prompt.

**A entrada no vocabulário de política.** PolicySim (Huang et al., março de 2026) simula cerca de mil agentes em ecossistema de plataforma social (X e Weibo) para avaliar e otimizar **política de intervenção da plataforma antes do desfecho real** — controle de exposição, mitigação de desinformação, promoção de interação entre pontos de vista. Na ponta da política pública, o gênero "gêmeo digital social" já tem protocolo: população sintética com atributos sorteados de censo e survey, LLM como motor cognitivo, camada de calibração contra métrica observável e protocolo de validação com separação temporal estrita entre treino, validação e teste (Gupta e Sheikh, janeiro de 2026) — que reportam 20,7% de melhora no erro macro-médio de previsão contra *gradient boosting*, mas com **N = 10 personas**, e declaram a ausência de identificação causal: o contrafactual estabelece plausibilidade, não causação.

**Instrumento de auditoria, com ressalva.** ARTAI (Ruan et al., setembro de 2024) é apresentado como ambiente de avaliação para exames em larga escala de algoritmos de recomendação, capaz de identificar padrões danosos na distribuição de conteúdo, e declara habilitar "novos requisitos regulatórios de maior transparência em sistemas de recomendação". **O resumo que li não menciona simulação de usuários nem nomeia o Digital Services Act** — a ligação entre bancada simulada e obrigação regulatória é minha inferência, não alegação da fonte, e está registrada como tal na seção 8.

### O que está documentado como falho

Esta é a parte que o entusiasmo costuma omitir, e ela vem das mesmas revistas e do mesmo arXiv.

**A média acerta, a distribuição não.** Num experimento de escolha de consumo de 2010 não público — escolhido justamente por improbabilidade de estar no treino — nove modelos de cinco famílias reproduziram razoavelmente o padrão entre condições, mas falharam na estrutura distribucional: para quantidade comprada, **nenhum modelo bateu uma linha de base insensível à condição** que apenas repete a distribuição humana agregada (0,641 de distância de Wasserstein para a linha de base contra 1,467 do melhor modelo). E há um detalhe incômodo para quem confia em "pensar antes de responder": pedir raciocínio explícito **degradou monotonicamente** o alinhamento distribucional (Moon et al., junho de 2026).

**O surrogate humano falha no jogo em que o humano é interessante.** No *11-20 Money Request Game*, oito modelos, mil iterações cada: todos divergiram significativamente da distribuição humana (p < 0,001). Os modelos mais avançados escolheram 19–20, raciocínio de nível 0 ou 1; humanos ficam em média no nível 3. Modelo maior não foi mais humano. Chain-of-thought "na maioria dos casos não induz respostas mais humanas"; few-shot levou a sobreajuste aos exemplos; só um GPT-4o afinado se aproximou estatisticamente — e os autores concluem que ele imitou dado de treino, não generalizou. A recomendação é dura: LLMs como ferramenta de ideação, **não** como surrogate comportamental sem dado humano de validação (Gao, Lee, Burtch e Fazelpour, *PNAS*, junho de 2025).

**O efeito borboleta de implementação.** Perturbações mínimas em formato de persona e em enquadramento da instrução do jogo deslocam a taxa de cooperação em **até 76 pontos percentuais**; homofilia de rede e atribuição de hub produzem deslocamentos consistentes em métrica de polarização. E a sensibilidade é distribuída de forma desigual: **a mesma perturbação que move 76 pp num modelo de fronteira move outro em 1 pp**. A conclusão dos autores é uma regra epistêmica: a alegação científica extraída de uma simulação social com LLM não deve ser mais forte que a auditoria de robustez que a sustenta (Ye, Cao, Chen e Ferrara, maio de 2026).

**O próprio campo se declara inicial.** O survey que organiza a transição de ABM a gêmeo digital diz que o campo "ainda está em seus estágios iniciais", que "resultados de simulação são altamente sensíveis ao design de prompt", que a interação linguística torna o *benchmark* menos direto e "aumenta o risco de confundir vieses do modelo com fenômenos sociais realistas", e que **realismo maior não é virtude epistêmica em si**. A mudança de pergunta é o ponto: o ABM clássico perguntava "o que acontece, em geral, com sociedades com estas características?"; o gêmeo digital pergunta "o que vai acontecer **aqui, agora**, sob estas condições?" — e é essa segunda pergunta que exige prova que ninguém ainda sabe produzir (Cau, Failla, Pansanella e Rossetti, julho de 2026).

### Leitura de maturidade e de horizontes

Pelo **Hype Cycle** usado apenas como heurística de expectativa — não como lei: a capacidade tem gatilho claro em 2023, produto e escala declarada em 2024–2025, e **em 2026 aparece simultaneamente a entrada em pipeline industrial e a literatura de desilusão metodológica**. Isso é compatível com a inclinação para o vale: o instrumento continua avançando enquanto a alegação recua. Não trato a curva como previsão.

Pelo **Three Horizons**: H1 é o sistema dominante hoje — teste A/B com pessoas, painel de pesquisa, métrica offline, e ABM clássico onde há regra bem conhecida. H2 é a transição em curso, e é onde está toda a briga: proxy pré-lançamento, calibração contra dado real, auditoria de robustez, custo de rodada, ambiente de referência, quem valida. H3, se acontecer, é uma configuração em que o ambiente simulado é peça padrão de instrução de decisão sobre sistema social — com protocolo, versionamento e contestação. Nada nas fontes lidas indica que H3 esteja próximo; o que elas indicam é que H2 acabou de começar.

**Magic Quadrant:** deliberadamente não usado. Não há mercado formado de simulação social para comparar fornecedores, e posição competitiva não é evidência de futuro.

## 4. As disrupções-raiz

Catorze candidatos foram gerados; onze foram rebaixados ou descartados (registro completo na seção 12). Três passaram.

---

### D1 — A população sintética como sujeito experimental substituível

| Campo | |
|---|---|
| `candidato` | Instanciar uma população heterogênea, descrita em linguagem natural, com memória e persona, barata o bastante para re-executar o mesmo experimento centenas de vezes e para trocar a população inteira entre rodadas |
| `maturidade` | **emergente** |
| `potencial_de_ruptura` | **alto** |

**O que rompe.** (a) A economia da pesquisa com pessoas: recrutamento, painel, incentivo e tempo de campo deixam de ser o gargalo da pergunta. (b) Quem pode perguntar: testar oito variantes de uma decisão de design passa a não exigir base instalada nem orçamento de painel. (c) O papel do intermediário: o instituto de pesquisa deixa de vender coleta e passa a vender validação. (d) A arquitetura do ciclo de produto: entra uma etapa de triagem antes do contato com gente.

**Por que agora.** Não é o agente — é a conjunção de três medições de 2026. A correlação de ordenação de ContextSim com 55 experimentos reais mostra que a bancada **ordena** bem. O ganho medido em produção (+5,68% / +12,5% / +10,9%) mostra que a ordenação sobreviveu ao mundo. E o custo caiu a ponto de a inferência de modelo de 8B rodar dentro de um navegador a 41 tokens/s, 71–80% do desempenho nativo (Ruan et al., 2026) — o que significa que "rodar mil vezes" deixou de ser decisão de orçamento.

**O que falta.** Uma forma aceita de provar correspondência **distribucional**, não média. Hoje a evidência é contrária: nenhum modelo bateu a linha de base agregada em quantidade comprada (Moon et al.), e nenhum dos oito modelos reproduziu a distribuição humana no jogo econômico (Gao et al.). Enquanto isso não se resolver, a raiz vale para comparação e triagem, e não para estimativa de nível.

**`evidencias`** — ContextSim (correlação e ganho medido); Moon et al. (falha distribucional); Gao et al. (falha de surrogate, revista revisada por pares); Concordia (propósito declarado de gerar dado sintético e avaliar serviço digital).
**`veredito`** — **aceita**. Emergente, ruptura alta em quatro dimensões, "por que agora" ancorado em medição de 2026, e há condição faltante nomeável.

---

### D2 — A sociedade sintética como bancada de teste de sistema social

| Campo | |
|---|---|
| `candidato` | Rodar o mecanismo — algoritmo de recomendação, política de moderação, regra de exposição — contra uma população sintética em ambiente configurável, antes de aplicá-lo a pessoas |
| `maturidade` | **emergente** |
| `potencial_de_ruptura` | **alto** |

**O que rompe.** (a) A arquitetura da avaliação: sai a métrica offline sobre log histórico, entra o ambiente que reage. (b) A cadeia de valor da auditoria: auditar um algoritmo passa a exigir um ambiente, e ambiente é artefato construído por alguém. (c) A distribuição de poder: quem hoje só pode testar um sistema de recomendação tendo uma plataforma passa a poder testá-lo tendo um ambiente. (d) A governança: a avaliação de risco sistêmico ganha um instrumento onde antes havia relatório.

**Por que distinta de D1.** Em D1 o que está sob teste é uma **proposição oferecida a pessoas** (uma cópia, uma tela, um preço) e a população é o instrumento. Em D2 o que está sob teste é um **mecanismo que age sobre a população** (um ranqueador, uma regra), e o ambiente é o instrumento. Atores, compradores e critério de sucesso são outros: em D1 o critério é correspondência com resposta humana; em D2 é reprodução de dinâmica coletiva — polarização, cascata, manada.

**Por que agora.** PolicySim faz exatamente isso, com mil agentes, em X e Weibo, nomeando "otimização proativa de política de intervenção" (março de 2026). OASIS mostra que as três dinâmicas que mais interessam ao regulador — difusão, polarização, manada — são reproduzíveis em ambiente controlado, e que **a escala muda a dinâmica**, o que dá razão técnica para preferir ambiente a modelo fechado. ARTAI mostra que já existe ambiente de avaliação de recomendador construído sob argumento de exigência regulatória de transparência. E o campo institucionalizou um fórum: o artigo de precondições que li declara como local de apresentação o próprio PoliSim@CHI 2026 — há workshop de conferência dedicado a simulação com agentes para política.

**O que falta.** Um critério aceito de correspondência entre ambiente sintético e ambiente real, e um ambiente de referência que as partes aceitem. Sem isso, a bancada testa o ambiente de quem a construiu. A precondição já está escrita por alguém: não tratar simulação de população marginalizada como saída técnica neutra; não simular população sem a participação dela; não simular sem cadeia de decisão atribuível e validação independente de quem encomendou (Luo, Arora e Guirado, abril de 2026) — que nomeiam o risco de uso duplo (a mesma simulação que testa política de acolhimento ajuda a explorar como a população perseguida reage à operação de repressão) e a distinção entre "ferramenta de decisão fundamentada" e "bola 8 mágica".

**`evidencias`** — PolicySim; OASIS (dinâmicas + efeito de escala); ARTAI; Luo et al. (precondições e uso duplo); ContextSim (proxy pré-lançamento em pipeline real).
**`veredito`** — **aceita**, com a ressalva de que a demanda regulatória é **inferida**, não documentada nas fontes lidas: Luo et al. não citam nenhum caso real de simulação informando decisão pública.

---

### D3 — A introspecção fabricada: o rastro de raciocínio tratado como dado

| Campo | |
|---|---|
| `candidato` | O motivo declarado pelo agente — por que desistiu, por que clicou, o que estava tentando fazer — como quantidade inspecionável, versionável e mensurável, disponível em volume que pesquisa com pessoas nunca produziu |
| `maturidade` | **experimental** |
| `potencial_de_ruptura` | **alto** |

**O que rompe.** (a) O que conta como medição: em pessoas, motivo é autorrelato, notoriamente frágil e caro; no agente, é artefato legível e comparável entre rodadas. (b) O papel da pesquisa qualitativa e de quem a faz. (c) A norma de prova: um resultado passa a poder vir acompanhado de mil explicações, o que é retoricamente muito mais forte do que é epistemicamente.

**Por que agora.** Deixou de ser figura de linguagem e virou número reportado: ContextSim mede **consistência de pensamento** e reporta 84,1% contra 29,2% de um método anterior. Quando a coerência do rastro entra na tabela de resultados, o rastro passou a ser tratado como evidência. Concordia, desde 2023, já estrutura o agente em torno de duas operações — chamada ao modelo e recuperação de memória associativa — de modo que o "porquê" é um objeto do sistema, não um subproduto.

**O que falta.** Qualquer demonstração de que o rastro corresponde ao processo que gerou a ação. A evidência disponível vai na direção oposta: os autores do *PNAS* recomendam **cautela com as autoexplicações do modelo, que frequentemente contradizem a própria saída**. Esta é a raiz mais fraca das três e é assim que ela entra no mapa.

**`evidencias`** — ContextSim (84,1% vs 29,2% de consistência de rastro); Concordia (arquitetura); Gao et al. (contraevidência direta: autoexplicação contradiz saída); Cau et al. (realismo aparente não garante validade epistêmica).
**`veredito`** — **aceita como raiz de baixa confiança**. Passa nos cinco critérios formais, mas é a única cuja contraevidência está na fonte mais forte do conjunto. Todo o galho dela carrega confiança baixa ou média, e o red team ataca justamente aqui.

---

### Rebaixada

**A bancada barata e pessoal** — simulação social rodando localmente, no navegador, sem rede. Tecnicamente ancorada: WebLLM entrega 41,1 tokens/s com Llama-3.1-8B e 71,1 com Phi-3.5-mini, 71–80% do nativo, em navegador (2026). Mas **nenhuma fonte que abri documenta simulação social rodando assim, com resultado**. Falha no critério de "por que agora" com evidência concreta da capacidade em questão — e há razão técnica para desconfiar: a homogeneidade de resposta documentada tende a piorar, não melhorar, em modelo pequeno. **Rebaixada a sinal fraco** (seção 6).

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "D1 — A população sintética como sujeito experimental substituível"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O pré-teste em população sintética entra no ciclo padrão de decisão de produto de mídia como filtro anterior ao contato com pessoas, usado para ordenar opções e não para estimar números"
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O painel de pesquisa humano encolhe em volume e se reposiciona como camada caríssima de confirmação, acionada só para o que a simulação já apontou como promissor"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Como é a simulação que decide o que merece validação humana, a hipótese que o modelo considera improvável deixa de ser testada em pessoas, e o viés do modelo passa a definir a agenda de pesquisa em vez de apenas enviesar a resposta"
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Forma-se um mercado de calibração: o que se vende deixa de ser o simulador e passa a ser a prova de que aquela população sintética corresponde a uma população real declarada"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Como calibrar exige dado humano real e recente, quem já tem painel e telemetria vira fornecedor da legitimidade dos concorrentes, e a simulação barata acaba reconcentrando poder em quem detém o dado caro"
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: "Auditoria de robustez — variar persona, enquadramento, semente e família de modelo — passa a ser condição de aceitação do resultado, em publicação e em decisão interna"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: "O custo da auditoria multiplica o número de rodadas em uma ou duas ordens de magnitude e come a economia prometida, de modo que a simulação deixa de ser a opção barata e passa a ser apenas a opção rápida e repetível"
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: "D2 — A sociedade sintética como bancada de teste de sistema social"
    efeitos:
      - id: e2
        ordem: 1
        efeito: "A avaliação de sistema de recomendação e de política de moderação incorpora ambiente simulado como terceira perna, ao lado da métrica offline e do teste A/B"
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "O ambiente de simulação, e não o algoritmo, passa a ser o artefato disputado: quem especifica a população, a rede e a regra de exposição determina o resultado do teste"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Auditores externos passam a exigir ambiente de referência público e versionado, e a negociação entre plataforma e regulador se desloca do resultado do teste para a especificação do protocolo de teste"
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Órgão público começa a aceitar resultado de simulação como peça de instrução em decisão sobre plataforma, em regime experimental e sem método prescrito"
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "Surge o perito em sociedade sintética e, com ele, a contestação por refazimento: a parte contrária roda a mesma simulação com outro modelo e obtém outro número, de modo que a divergência entre modelos, e não o fato, passa a ser o objeto do litígio"
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e2.3
            ordem: 2
            efeito: "Quem projeta plataforma passa a projetar também a população que vai atacá-la: o adversário sintético — spammer, coordenador de desinformação, assediador em rede — torna-se componente explícito de design"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.3.1
                ordem: 3
                efeito: "Como o mesmo kit que testa a defesa serve para ensaiar o ataque, ambiente de simulação social com adversário calibrado passa a ser tratado como item de uso duplo, com restrição de distribuição e licença de uso"
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: "D3 — A introspecção fabricada: o rastro de raciocínio tratado como dado"
    efeitos:
      - id: e3
        ordem: 1
        efeito: "O motivo declarado pelo agente passa a ser reportado como achado de pesquisa — por que o usuário sintético desistiu, o que ele entendeu da tela — e não apenas o comportamento observado"
        sinal: medio
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Métrica de consistência do rastro, medindo coerência entre motivo declarado e ação executada, entra nos relatórios ocupando o lugar que deveria ser da medida de validade externa"
            sinal: medio
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "As equipes otimizam o simulador para produzir rastro coerente, e a coerência narrativa — exatamente aquilo que um modelo de linguagem faz melhor — passa a ser lida como correspondência com a realidade"
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "Com motivo sintético barato e abundante, a pesquisa qualitativa com pessoas é empurrada para onde o simulador não chega: o inesperado, o desconfortável e a pergunta que ninguém pensou em fazer"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "A pesquisa qualitativa humana se reposiciona formalmente como caça a hipótese fora da distribuição, com método, preço e critério de sucesso próprios, em vez de competir em volume com o simulador"
                sinal: fraco
                prazo: 2033
                confianca: baixa
```

**Contagem conferida contra o frontmatter:** 3 disrupções; 1ª ordem = 3 (`e1`, `e2`, `e3`); 2ª ordem = 8 (`e1.1`, `e1.2`, `e1.3`, `e2.1`, `e2.2`, `e2.3`, `e3.1`, `e3.2`); 3ª ordem = 8. Nenhum efeito de 3ª ordem tem lista `efeitos`.

### O que a estrutura não captura bem

**A árvore separa o que na prática é o mesmo ciclo.** `e1.2` (mercado de calibração) e `e2.1` (disputa pelo ambiente) são, no mundo, um único movimento: a legitimidade migra do resultado para o aparato que o produz. A roda obriga a pendurar cada um sob a sua raiz e perde a convergência. O mesmo vale para `e1.3` e `e2.1.1`: auditoria de robustez interna e ambiente de referência externo são a mesma exigência vista de dentro e de fora da empresa.

**Não há aresta para retroalimentação, e é ela que pode dominar o período.** Se a simulação triar hipóteses (`e1.1.1`), o dado humano coletado depois fica enviesado pela triagem; esse dado calibra a próxima simulação; que tria pior. A roda não desenha ciclo, só cascata — e aqui o ciclo é o risco principal.

**A ordem não traz data, e dois efeitos desta roda desobedecem à intuição.** `e2.3` (adversário sintético como componente de design) é de 2ª ordem e provavelmente chega antes de `e1.1` (encolhimento do painel), porque adversário sintético não exige provar correspondência com população real — exige só que o ataque funcione no ambiente. E `e1.3.1` (o custo da auditoria comer a economia) pode chegar quase junto com `e1.3`, porque é consequência aritmética, não social.

**A roda não tem como representar "não acontece".** O desfecho mais provável para vários galhos é estagnação em H2: a bancada continua útil internamente, nunca produz critério aceito de correspondência, e nada do que está em 3ª ordem se materializa. Isso não é um nó — é a ausência de todos eles, e só aparece na seção 7.

**Sinal e confiança medem coisas diferentes e a tabela junta as duas.** `e2` tem sinal forte (há evidência presente: ContextSim, PolicySim, ARTAI) e confiança apenas média (a evidência é de capacidade, não de adoção). `e3` tem sinal médio e confiança baixa por motivo oposto: existe o número, e existe fonte revisada por pares dizendo que o número não significa o que parece.

## 6. Sinais fracos e wildcards

### Sinais fracos

**1. A bancada que roda no navegador.** WebGPU habilitado por padrão nos navegadores principais e inferência de 8B a 41 tokens/s localmente, 71–80% do nativo (Ruan et al., 2026). Não é simulação social — é a condição material para que ela deixe de ser equipamento de laboratório. O que antecipa: sociedade simulada como artefato pessoal, reproduzível por qualquer um que abra a página, o que muda o regime de prova mais do que muda o custo. Por que é **fraco** e não forte: nenhuma fonte que abri documenta simulação social com resultado rodando assim, e modelo pequeno agrava a homogeneidade de resposta, que é justamente o defeito crítico.

**2. A literatura que se voltou para o próprio método.** Em 2026 apareceram, no mesmo campo, um artigo de posição sobre auditoria de robustez, um survey que se declara em estágio inicial, e um artigo de precondições éticas para uso em política — este último declarando como local de apresentação um workshop de conferência dedicado ao tema (PoliSim@CHI 2026). Quando um campo começa a publicar sobre como não errar antes de ter produto, ele está se institucionalizando. O que antecipa: `e1.3` (auditoria como condição de aceitação) chegando antes do previsto.

**3. O rastro de raciocínio virou número em tabela de resultado.** 84,1% de consistência de pensamento contra 29,2% (ContextSim). Pequeno, localizado, dentro de um artigo cujo tema é outro. O que antecipa: toda a cadeia de D3 — e é o sinal mais ambíguo do mapa, porque pode significar tanto progresso de medição quanto o começo de uma métrica que mede a si mesma.

**4. O formato do mercado (insumo de turma, não verificado por mim).** A varredura de um aluno da disciplina mediu 2 anúncios sobre simulação em 7.776 anúncios de dois grandes diretórios comerciais de IA. Não reproduzi essa medição e não a conto como fonte. Se estiver certa, é o contrassinal quantitativo mais limpo que este mapa tem: o instrumento não tem mercado de massa, e diretório comercial vende produtividade.

### Wildcards

**W1 — Um resultado de simulação entra numa decisão pública consequente e está errado, com o erro rastreável a uma escolha de formatação de prompt.** Baixa probabilidade até 2031, alto impacto. É plausível porque o mecanismo já está medido: 76 pontos percentuais de deslocamento por perturbação que o pesquisador consideraria cosmética (Ye et al.), num modelo, e 1 ponto em outro — ou seja, a auditoria feita num modelo não protege quem usou o outro. **Como quebra o mapa:** inverte `e2.2`. Em vez de aceitação experimental crescente, vem restrição de admissibilidade, e a bancada se retrai para dentro das empresas, onde ninguém precisa justificar método. `e2.1.1` e `e2.2.1` desaparecem; `e1` sobrevive intacto, porque decisão de produto não exige prestação de contas.

**W2 — O contra-wildcard: uma replicação em larga escala mostra que a variância sintética casa com a humana sob calibração explícita.** Baixa probabilidade, alto impacto na direção oposta. Hoje a evidência é contrária e vem de fonte revisada por pares. Se cair, cai metade da seção 7: D1 deixa de ser instrumento de triagem e passa a instrumento de estimativa, `e1.1` acelera para substituição e não para reposicionamento, e D3 ganha a legitimidade que hoje não tem. Registro este como wildcard porque tratar apenas o desfecho pessimista como surpresa é viés, não cautela.

**W3 — Uma plataforma grande abre um ambiente de referência versionado, com população sintética e protocolo, sob licença.** Baixa probabilidade. Impacto: `e2.1.1` antecipa de 2032 para perto de 2029, mas com o protocolo escrito pela parte interessada — o que transforma uma vitória de transparência em captura. Vale registrar porque é o cenário em que o mapa "acerta" pelo motivo errado.

## 7. Contra o próprio mapa

Assumo aqui o papel de quem quer derrubar a análise acima.

**1. Qual efeito é apenas extrapolação linear do presente?**
`e1` é a mais linear de todas: é literalmente ContextSim continuando a existir e se espalhando. Não há ruptura em "mais empresas fazem o que a Toyota já fez" — há difusão. Mantenho `e1` porque a difusão desse filtro específico reorganiza a etapa anterior ao contato com pessoas, o que é mudança de arquitetura de processo e não só de volume; mas o sinal é forte precisamente porque o efeito é quase presente, e isso deve ser lido como pouca informação sobre o futuro, não como muita confiança.

**2. Qual efeito assume adoção rápida demais?**
`e1.1`, o encolhimento do painel humano, em 2030. Caso histórico comparável: o painel online levou de meados dos anos 1990 até meados dos anos 2000 para deslocar o telefone na pesquisa de mercado — **cerca de uma década**, com uma tecnologia que era mais barata *e* mais precisa e cujo produto era o mesmo dado. Aqui a tecnologia é mais barata e comprovadamente **menos** precisa na variância, e o comprador é um departamento com responsabilidade legal sobre o que afirma. Quatro anos é otimista. **Ação tomada:** mantive o prazo de 2030 para o *reposicionamento* e retirei qualquer alegação de substituição — a redação do efeito diz "encolhe em volume e se reposiciona", não "é substituído".

**3. Qual disrupção-raiz pode simplesmente não acontecer?**
**D3.** É a mais fraca e há contraevidência direta em fonte revisada por pares: as autoexplicações do modelo frequentemente contradizem sua própria saída (Gao et al., *PNAS*, 2025). Se rastro de raciocínio nunca for aceito como dado — e a comunidade de interpretabilidade tem bons motivos para não aceitar —, D3 não acontece, e o que resta é `e3.2` sobrevivendo pendurado na raiz errada: a pesquisa qualitativa se reposiciona de todo jeito, mas por causa de D1 (custo de triagem), não por causa de rastro. **Ação tomada:** `e3` foi rebaixado de confiança média para **baixa** e todo o galho `e3.1` carrega confiança baixa.

**4. O que quebra na roda se a disrupção falhar?**
Se **D1** falhar — isto é, se a falha distribucional se mostrar irreparável e se espalhar a percepção de que a bancada não prediz nada —, cai o galho inteiro de `e1`, e `e2` sobrevive: testar um ranqueador contra população sintética não exige que a população corresponda a gente real, exige que a dinâmica coletiva seja plausível. Se **D2** falhar, `e1` sobrevive: decisão de produto não precisa de legitimidade externa. Se **D3** falhar, como no item 3, quase nada cai — que é outra forma de dizer que D3 talvez não devesse ser raiz. Registro isso como a fragilidade estrutural mais séria deste mapa.

**5. Que contrassinais existem?**
Três, todos dentro das fontes que sustentam as raízes. (a) Nenhum modelo bateu a linha de base agregada em quantidade comprada, e pedir raciocínio explícito **piorou** o alinhamento distribucional (Moon et al., 2026) — contra D1 e contra D3 ao mesmo tempo. (b) Os oito modelos divergiram da distribuição humana em jogo econômico clássico, e modelo maior não foi mais humano (Gao et al., 2025) — o que remove o argumento de que basta esperar o próximo modelo. (c) O survey do campo afirma que modelos de agentes com LLM **não podem** fornecer alegações preditivas confiáveis sobre sistemas reais (Cau et al., 2026). Acrescento um quarto, econômico e não verificado por mim: 2 anúncios de simulação em 7.776 nos diretórios comerciais.

**6. Que barreiras econômicas, regulatórias, culturais ou de infraestrutura foram subestimadas?**
**Econômica:** subestimei o custo da auditoria de robustez. Se cada resultado exige variar persona, enquadramento, semente e **família de modelo** — porque a mesma perturbação move 76 pp num modelo e 1 pp em outro —, o número de rodadas explode e a economia prometida evapora. Está agora explícito em `e1.3.1`. **Regulatória:** subestimei a assimetria entre *avaliar risco* e *prescrever método*. Nenhuma fonte que li mostra regulador prescrevendo simulação; Luo et al. não citam nenhum caso real. **Cultural:** subestimei a resistência das comunidades de pesquisa qualitativa e de ética em pesquisa, que já têm vocabulário pronto — "não simular população sem a participação dela" é precondição publicada, não objeção hipotética. **De infraestrutura:** subestimei o problema do dado de calibração, que é exatamente o recurso escasso, e que a simulação barata não produz.

**7. Que ator teria incentivo para bloquear, capturar ou redirecionar a mudança?**
**Bloquear:** institutos de pesquisa de mercado e associações do setor, cujo produto é coleta com pessoas — e que têm o caminho mais eficaz disponível, que é definir por autorregulação o que pode ser chamado de "respondente". **Capturar:** a plataforma grande, publicando o ambiente de referência (W3) e escrevendo o protocolo pelo qual será auditada. **Redirecionar:** o fornecedor de nuvem e de modelo, para quem o desfecho ótimo é a auditoria de robustez obrigatória — ela multiplica rodadas de inferência por uma ordem de magnitude. Note-se o desconforto: o efeito `e1.3`, que é o mais saudável epistemicamente deste mapa, é também o mais lucrativo para quem vende inferência. Isso não o invalida; obriga a desconfiar de quem o defender.

**8. Qual viés do pesquisador e do modelo entrou na seleção do tema e dos efeitos?**
Quatro, declarados. (a) **Viés de fonte:** meu corpo de evidência é quase todo arXiv mais um artigo de *PNAS* — literatura de quem constrói e de quem critica o instrumento. Não li nada de quem **compra** pesquisa, e o único dado de mercado que tenho é de terceiro e não verificado. Isso faz o mapa superestimar o instrumento e subestimar a inércia do comprador. (b) **Viés de autorreferência do modelo:** sou um modelo de linguagem avaliando o poder explicativo de agentes de modelo de linguagem; a direção do erro é previsível. Foi para conter isso que rebaixei a bancada no navegador e mantive D3 em confiança baixa. (c) **Viés do tema dado:** o enunciado da disciplina já afirma que o objeto é instrumento e traz a analogia do túnel de vento; essa analogia é atraente e sugere protocolo, medição e norma onde as fontes mostram sensibilidade a prompt — usei-a com cautela e não a tratei como achado. (d) **Viés de simetria:** registrei W2 justamente porque a seção 7 inteira empurra o mapa para o pessimismo metodológico, e tratar só o desfecho ruim como surpresa é escolha, não rigor.

### Cortes e rebaixamentos efetivamente aplicados

| O quê | Antes | Depois | Motivo |
|---|---|---|---|
| "A bancada barata e pessoal" | candidata a disrupção-raiz | **sinal fraco** | Sem evidência lida de simulação social rodando localmente com resultado |
| `e3` (rastro como achado) | confiança media | **confiança baixa** | Contraevidência direta em fonte revisada por pares |
| `e2.2` (aceitação em decisão pública) | sinal medio, 2031, confiança media | **sinal fraco, 2032, confiança baixa** | Nenhum caso real documentado; obrigação existente é de avaliar risco, não de prescrever método |
| "Simulação barata → fim da pesquisa de opinião" | efeito de 2ª ordem | **cortado** | Mecanismo ausente: a evidência mostra substituição na triagem, não na estimativa de nível |
| "Ética de pesquisa se estende a agentes" | efeito de 3ª ordem | **cortado do mapa, movido para hipóteses alternativas** | Nenhuma fonte lida sustenta trâmite nessa direção até 2031 |
| "Simulação obrigatória por lei, como teste de colisão" | efeito de 1ª ordem | **reescrito** como aceitação experimental sem método prescrito (`e2.2`) | Confusão entre obrigação de resultado e prescrição de método |

## 8. O que a máquina errou

Erros efetivamente detectados nesta execução, com a correção aplicada.

**1. Fonte corporativa de segunda mão tratada como norma setorial.** Uma busca sobre respondentes sintéticos devolveu um resumo bem articulado sobre diretrizes da ESOMAR — limiares de acurácia, "dado mínimo viável", um modelo 70/30 de sintético para iteração e humano para validação. Ao inspecionar as origens, praticamente todas eram **blogs de fornecedores de pesquisa sintética** (neuroflash, symar.ai, lakmoos, h-in-q) — isto é, parte interessada descrevendo a norma que a regula. Tentei a fonte primária: a página da ESOMAR devolveu só o título, sem corpo. **Correção:** nada disso entrou no documento. A hipótese de que autorregulação de pesquisa de mercado seja um freio relevante está na seção 12 como **hipótese em aberto sem fonte lida**, e não como evidência. Foi o erro mais perto de passar.

**2. Capacidade atribuída a uma ferramenta pelo resumo de busca, não pela fonte.** O resumo de busca ligava o ARTAI a avaliação de risco sob o Digital Services Act por meio de ambientes de simulação. Abri o resumo do artigo: ele descreve ambiente de avaliação de algoritmos de recomendação e menciona habilitar requisitos regulatórios de transparência, **sem nomear o DSA e sem mencionar simulação de usuários**. **Correção:** a seção 3 registra explicitamente que a ligação entre bancada simulada e obrigação regulatória é inferência minha, e `e2.2` foi rebaixado em parte por isso.

**3. Data implícita errada no enunciado do tema.** O enunciado da disciplina diz "em 2026 há plataformas declarando um milhão de agentes". A declaração de um milhão de agentes do OASIS é de **novembro de 2024**, com a última versão em março de 2025. O fato é verdadeiro; a data sugere novidade recente onde há dois anos de estrada — o que importa, porque "declarado em 2024 e ainda sem critério de validação aceito em 2026" é uma leitura de maturidade bem diferente de "acabou de aparecer". **Correção:** as datas estão explícitas em toda a seção 3.

**4. Duas fontes não pude ler, e isso limita duas afirmações.** O PDF do ARTAI não foi convertido (fluxo binário); usei o resumo da página de abstract. A página da ACM do workshop PoliSim@CHI 2026 devolveu **HTTP 403**; a existência do workshop está atestada apenas indiretamente, pelo artigo de precondições que declara esse local. **Correção:** a seção 6 não afirma nada sobre o conteúdo do workshop, apenas sobre sua existência, e a seção 11 marca a limitação.

**5. Capacidade emergente quase tratada como madura.** Ao ver o ganho medido em produção do ContextSim (+5,68%, +12,5%, +10,9%), meu primeiro rascunho tratou a bancada como já validada como substituta de teste A/B. Os próprios autores afirmam o contrário — serve de proxy, não substitui — e declaram limitação de reprodutibilidade por dado proprietário, herança de viés, alucinação em item raro e dependência de prompt. **Correção:** D1 está classificada como emergente, e a formulação do efeito `e1` diz "para ordenar opções e não para estimar números".

**6. Uma busca cuja ausência de resultado é ela mesma um achado.** Procurei trabalho brasileiro de simulação social com agentes de LLM (universidade, Ipea, população sintética a partir do Censo). Voltou pesquisa brasileira sobre **desinformação e políticas públicas** — não sobre simulação. **Correção:** a nota sobre o Brasil, na seção 12, afirma a ausência em vez de preencher o espaço, e não cita nenhuma dessas fontes, que não abri.

**Nenhum caso de citação, autoria ou número fabricado foi detectado nesta execução.** Todos os catorze itens da seção 11 foram abertos; os números do documento — 76 pp, 1 pp, 0,641 contra 1,467, 84,1% contra 29,2%, 20,7%, N = 10, 41,1 tok/s, 55 experimentos, 25 agentes, 10 mil agentes, 5 milhões de interações, 21 ações — vieram das páginas lidas. Onde um número é de terceiro não verificado (2 em 7.776), isso está dito na mesma frase.

## 9. Três cenários para 2031

Escritos como se 2031 já tivesse chegado. Não são três graus de otimismo da mesma previsão: diferem em **mecanismo**, em **quem age** e em **que condição teve de existir**.

### Provável — "A bancada interna"

A simulação social virou etapa padrão do ciclo de produto e **nunca saiu de dentro das empresas**. Quem projeta mídia roda de trezentos a três mil agentes antes de levar qualquer coisa a pessoas, e usa o resultado para ordenar: esta cópia antes daquela, este fluxo antes do outro. Ninguém usa para estimar número — a primeira geração de equipes que tentou estimar levou tombos que circularam internamente e não foram publicados.

O mecanismo foi difusão de prática, não mudança de norma. Os atores foram time de produto e fornecedor de nuvem; regulador e academia ficaram de fora. O painel de pesquisa humano não encolheu tanto quanto se previa: mudou o que vende — deixou de vender coleta em volume e passa a vender **calibração e confirmação**, mais caro por entrevista e menos entrevistas. `e1.2` aconteceu; `e1.1` aconteceu pela metade.

O que não aconteceu: nenhum critério aceito de correspondência entre população sintética e população real. A auditoria de robustez existe onde há pesquisador que se importa, e não onde há norma — e onde existe, custa em rodadas de inferência aquilo que a simulação prometia economizar (`e1.3.1`). O campo está preso em H2, exatamente como o survey de 2026 sugeria, e isso não incomoda ninguém que decide, porque decisão de produto nunca precisou de validade externa. Quem projeta mídia e interação convive com um instrumento útil cuja confiabilidade ninguém sabe medir, e aprendeu a usá-lo para comparar e não para prever.

### Desejável — "O ambiente que se pode contestar"

Existe um ambiente de referência **público, versionado e reproduzível** para teste de sistema de recomendação, e ele não pertence a nenhuma plataforma. Um resultado só conta se vier com o identificador da versão do ambiente, a família de modelo, a faixa de variação sob perturbação e a distância distribucional contra dado humano de calibração. O relatório que traz média sem dispersão é devolvido.

Quatro condições tiveram de ser construídas, nenhuma automática. **Primeira:** um *benchmark* que pontua **dispersão e cauda**, não média — a lição de "Beyond Averages" virou critério de aceitação, e não observação. **Segunda:** auditoria de robustez obrigatória para resultado que sai da empresa, com faixa de variação declarada por família de modelo, porque ficou claro que auditar num modelo não protege quem rodou no outro. **Terceira:** as três precondições de 2026 saíram do artigo e entraram no contrato: população simulada participa da escolha do cenário e da interpretação; cadeia de decisão é atribuível; validação é independente de quem encomendou. **Quarta, a menos glamourosa e a que quase não aconteceu:** alguém teve de **pagar pela coleta humana** que calibra as populações sintéticas, e financiamento público de painel de calibração acabou sendo a peça que sustentou tudo o resto.

Os atores foram um consórcio de universidades, auditores independentes e um regulador que preferiu especificar prova a prescrever método. O efeito colateral aceito: a bancada ficou mais lenta e mais cara do que a promessa de 2026. Em troca, o que ela diz pode ser contestado por quem discorda — que é a única definição de instrumento que se sustenta.

### Indesejável — "A bola 8 mágica com aparência de laudo"

Uma decisão consequente sobre uma população real foi tomada com base em simulação, e a simulação estava errada. Não errada por má-fé: errada por formatação de persona. A auditoria feita depois mostrou que o mesmo estudo, com outra família de modelo, apontava para o lado oposto — o efeito de 76 pontos percentuais que estava publicado desde 2026 e que ninguém tinha obrigação de checar.

O mecanismo foi **retórico, não técnico**. O que tornou o laudo irresistível não foi o número: foi o rastro. O relatório não dizia "a distribuição simulada difere da humana em tanto"; dizia por que cada usuário sintético fez o que fez, em prosa coerente, com citações do próprio agente. `e3.1` chegou antes de `e1.3` — a métrica de consistência de rastro entrou nos relatórios antes de a auditoria de robustez entrar na norma — e a coerência narrativa ocupou o lugar da validade. Os atores foram uma consultoria com incentivo para entregar convicção, um órgão sem capacidade técnica para contestar método, e uma população que não foi consultada sobre ser simulada.

**O sinal precoce que poderia tê-lo antecipado**, e que era observável já em 2026: o momento em que relatórios de simulação passaram a **abrir pelo motivo declarado e não pela comparação distribucional**. Era detectável com uma pergunta de uma linha a qualquer entregável — "qual é a faixa de variação deste resultado entre duas famílias de modelo?" — e a ausência de resposta era o alarme. O que veio depois foi o previsível: restrição ampla de admissibilidade, a bancada recolhida para dentro das empresas onde ninguém precisa justificar método, e os usos legítimos de investigação social pagando a conta do uso ilegítimo.

## 10. O experimento

### Túnel de bancada — a simulação serve para ordenar mesmo quando não serve para estimar?

**O que é.** Um experimento pareado, construível hoje com o que há no laboratório da disciplina. Oito variantes de uma decisão concreta de design de feed — redação de rótulo, ordem de blocos, posição de um indicador de origem da informação — são submetidas a **duas populações**: cerca de trinta pessoas reais e uma população sintética de duzentos agentes com persona, memória e ambiente configurável. Cada participante, humano ou sintético, escolhe em pares forçados e escreve uma linha de justificativa. Sai um **ranqueamento das oito opções** de cada lado, mais a distribuição completa de escolhas.

A perna que faz o experimento valer é a terceira: a mesma população sintética roda **2 famílias de modelo × 2 formatos de persona × 5 sementes = 20 configurações**. Não para achar a melhor: para medir **de quanto o ranqueamento se move** quando nada de substantivo muda.

**Pergunta de futuro que testa.** A hipótese central de D1 e de `e1` deste mapa é que a simulação social é utilizável como **comparador** mesmo sendo inutilizável como **estimador**. Se isso for verdade, a bancada entra no ciclo de produto e boa parte da roda se sustenta. Se o ranqueamento for tão instável quanto as distribuições, a bancada não serve nem para triar, e `e1`, `e1.1`, `e1.2` e `e1.3` caem juntos.

**Tecnologia emergente usada.** População de agentes com modelo de linguagem, com persona e memória, em ambiente configurável — na linha de Concordia e do que ContextSim faz com usuário de recomendação. A perna de robustez implementa, em escala de sala de aula, a auditoria que Ye et al. exigem.

**Por que uma solução madura não responde.** Um ABM clássico (NetLogo, regra fixa) **não aceita a entrada**: as oito variantes diferem em redação e disposição, e para um modelo de regras alguém precisaria codificar à mão a função de resposta a cada redação — isto é, escrever a resposta que o experimento quer medir. O teste A/B clássico responde a pergunta, mas só depois do lançamento, que é exatamente o que se quer evitar. E uma pesquisa de opinião com as trinta pessoas responde o lado humano — ela é **metade** deste experimento, não um substituto dele.

**O que os participantes farão.** Os humanos: vinte minutos, vinte e oito comparações em pares das oito variantes em telas estáticas, mais uma linha de justificativa por escolha; consentimento explícito e dado agregado. Os agentes: exatamente o mesmo protocolo, mesma ordem de apresentação, personas sorteadas de uma distribuição declarada antes de qualquer rodada — e a distribuição é registrada e travada, para que a calibração não seja feita depois de ver o resultado humano.

**Métrica e observação.** Três medidas, nesta ordem de importância:

1. **Correlação de Spearman** entre o ranqueamento humano e o sintético das oito opções. É o teste da hipótese principal.
2. **Faixa de ranqueamento** entre as vinte configurações: quantas ordenações distintas das oito opções aparecem, e de quanto varia a posição da opção vencedora. É o teste de robustez, e é a medida que este mapa considera decisiva.
3. **Distância distribucional** (Jensen-Shannon sobre as escolhas por par) entre humanos e agentes, para verificar *neste* caso a falha que Moon et al. e Gao et al. relatam: a média pode bater e a dispersão não.

Uma quarta observação, qualitativa e barata: comparar as justificativas de uma linha. Quantos motivos humanos **não aparecem** em nenhum dos duzentos agentes? Essa contagem é a medida mais direta de `e3.2` — o que o simulador não alcança.

**Regra de decisão, escrita antes de rodar.** A hipótese sobrevive se ρ ≥ 0,7 **e** a opção vencedora se mantiver no topo em pelo menos 16 das 20 configurações. Falha se ρ ≥ 0,7 mas a vencedora trocar em mais de 4 configurações — nesse caso a simulação "acerta" por sorte de configuração, o que é pior que errar, porque é indistinguível de acerto por dentro.

**O que me faria mudar de ideia.** Se o ranqueamento se mantiver estável entre modelos e formatos e concordar com o humano, eu reduzo o peso da seção 7: a bancada é instrumento de comparação legítimo, `e1` sobe para confiança alta e o mapa fica mais próximo do cenário desejável. **Se a ordenação virar entre as duas famílias de modelo — a mesma população, o mesmo prompt, outro modelo, outra vencedora —, D1 não é instrumento, é gerador de opinião com sotaque de dado**, e este documento inteiro deveria ser reescrito com `e1` rebaixado a hipótese. Essa é a possibilidade que me parece mais provável das duas, e é por isso que o experimento vale ser feito: ele é barato, e o resultado que eu espero é o que desmonta o meu próprio mapa.

**Limitação declarada.** Trinta pessoas não sustentam inferência sobre população. O experimento **não** foi desenhado para medir preferência humana; foi desenhado para medir **concordância de ordenação e estabilidade de instrumento**, e para isso o n humano pequeno é aceitável desde que o resultado não seja lido como achado sobre o feed. Ler como achado sobre o feed seria repetir, em escala de sala de aula, exatamente o erro que a seção 8 registra.

## 11. Fontes

Catorze fontes, todas abertas e lidas nesta execução. Nada citado de ouvida.

1. **Park, J. S.; O'Brien, J. C.; Cai, C. J.; Morris, M. R.; Liang, P.; Bernstein, M. S. — "Generative Agents: Interactive Simulacra of Human Behavior".** arXiv:2304.03442, 7/4/2023 (rev. 6/8/2023). `https://arxiv.org/abs/2304.03442`
   *Sustenta:* os 25 agentes, a festa de Dia dos Namorados organizada sem roteiro, e a arquitetura de três componentes (observação, planejamento, reflexão) validada por ablação. É o marco fundador do tema.
   *Confiabilidade:* **alta** para a existência e a arquitetura do experimento; é preprint, mas amplamente replicado e citado, e a alegação é sobre o próprio sistema dos autores.

2. **Vezhnevets, A. S.; Agapiou, J. P.; Aharon, A.; Ziv, R.; Matyas, J.; Duéñez-Guzmán, E. A.; Cunningham, W. A.; Osindero, S.; Karmon, D.; Leibo, J. Z. (Google DeepMind) — "Generative agent-based modeling with actions grounded in physical, social, or digital space using Concordia".** arXiv:2312.03664, 6/12/2023 (rev. 13/12/2023). `https://arxiv.org/abs/2312.03664`
   *Sustenta:* a distinção entre GABM e ABM clássico; a arquitetura do Game Master; e o propósito declarado de avaliar serviços digitais reais simulando usuários e gerando dado sintético — citação verbatim do resumo.
   *Confiabilidade:* **alta** para propósito declarado e arquitetura; é fonte do próprio fornecedor da biblioteca, portanto não serve como evidência de que funciona.

3. **Yang, Z.; Zhang, Z.; Zheng, Z. et al. (23 autores) — "OASIS: Open Agent Social Interaction Simulations with One Million Agents".** arXiv:2411.11581, 18/11/2024; v5 de 23/3/2025. `https://arxiv.org/abs/2411.11581`
   *Sustenta:* escala declarada de até um milhão de agentes; 21 ações; ambientes tipo X e Reddit; reprodução de difusão de informação, polarização de grupo e efeito manada; e o achado de que escala maior produz dinâmica de grupo mais acentuada.
   *Confiabilidade:* **média**. Preprint com código aberto, o que permite verificação, mas a alegação de reprodução de fenômeno social é autorreportada e o survey de 2026 (item 13) relativiza esse tipo de alegação.

4. **"AgentSociety: Large-Scale Simulation of LLM-Driven Generative Agents Advances Understanding of Human Behaviors and Society".** arXiv:2502.08691, 12/2/2025; v2 de 10/4/2026. `https://arxiv.org/abs/2502.08691`
   *Sustenta:* mais de 10 mil agentes e 5 milhões de interações; cinco casos (polarização, mensagem inflamatória, renda básica universal, choque de furacão, sustentabilidade urbana); e a alegação dos autores de alinhamento com resultados experimentais do mundo real.
   *Confiabilidade:* **média-baixa** para a alegação de alinhamento, que é autorreportada, sem detalhamento no resumo e sem limitações declaradas ali. Usei como evidência de **escala e de agenda**, não de validade.

5. **Ruan, Q.; Xu, J.; Dong, R.; Younus, A.; Mai, T. T.; O'Sullivan, B.; Leavy, S. — "ARTAI: An Evaluation Platform to Assess Societal Risk of Recommender Algorithms".** arXiv:2409.12396, 19/9/2024. `https://arxiv.org/abs/2409.12396`
   *Sustenta:* a existência de ambiente de avaliação em larga escala de algoritmos de recomendação, apresentado como habilitador de requisitos regulatórios de transparência.
   *Confiabilidade:* **média, com ressalva de leitura.** O PDF não foi convertido; li a página de abstract. O resumo **não** menciona simulação de usuários nem nomeia o DSA — ver seção 8, erro 2.

6. **Gao, Y.; Lee, D.; Burtch, G.; Fazelpour, S. — "Take caution in using LLMs as human surrogates".** *PNAS* 122(24), e2501660122, 13/6/2025. `https://pmc.ncbi.nlm.nih.gov/articles/PMC12184514/`
   *Sustenta:* os oito modelos divergindo significativamente da distribuição humana (p < 0,001) no *11-20 Money Request Game*; modelos avançados em nível 0–1 contra nível 3 humano; modelo maior não mais humano; chain-of-thought não induzindo resposta mais humana; a conclusão de usar LLM como ferramenta de ideação e não como surrogate comportamental; e a cautela explícita com autoexplicações que contradizem a saída.
   *Confiabilidade:* **alta.** É a única fonte revisada por pares em revista de alto impacto do conjunto, e é a contraevidência mais forte deste mapa — inclusive contra D3.

7. **Gupta, A.; Sheikh, F. R. — "LLM-Powered Social Digital Twins: A Framework for Simulating Population Behavioral Response to Policy Interventions".** arXiv:2601.06111, 3/1/2026. `https://arxiv.org/abs/2601.06111`
   *Sustenta:* o protocolo de gêmeo digital social (população sintética de censo/survey, LLM como motor cognitivo, camada de calibração, validação com separação temporal); 20,7% de melhora no erro macro-médio contra *gradient boosting*; e as limitações declaradas — **N = 10 personas** e ausência de identificação causal.
   *Confiabilidade:* **baixa para o resultado, alta para o protocolo.** Dez personas não sustentam alegação populacional, e os autores dizem isso. Usei pelo desenho metodológico, não pelo número.

8. **Huang, R.; Tang, N.; Xu, J. et al. — "PolicySim: An LLM-Based Agent Social Simulation Sandbox for Proactive Policy Optimization".** arXiv:2603.19649v1, 20/3/2026. `https://arxiv.org/abs/2603.19649`
   *Sustenta:* cerca de mil agentes em ambiente tipo X e Weibo para avaliar política de intervenção de plataforma antes do desfecho real; validação em nível micro e macro; foco em controle de exposição e mitigação de desinformação.
   *Confiabilidade:* **média.** Preprint, autorreportado, e **sem limitações explicitadas na conclusão** — o que por si é um sinal a descontar. É a evidência central de D2.

9. **Bougie, N.; Marconi, G.; Ye, X.; Watanabe, N. (Woven by Toyota) — "Beyond Offline A/B Testing: Context-Aware Agent Simulation for Recommender System Evaluation" (ContextSim).** arXiv:2604.09549v2, 1/6/2026. `https://arxiv.org/abs/2604.09549`
   *Sustenta:* a maior correlação de Spearman com métricas de referência em 55 experimentos históricos de recomendação; ganho medido com parâmetros otimizados por simulação (+5,68% de visualização, +12,5% de curtidas, +10,9% de satisfação); 84,1% de consistência de rastro contra 29,2%; a afirmação de que **não substitui** teste A/B; e as seis limitações declaradas.
   *Confiabilidade:* **média-alta para a capacidade, baixa para reprodutibilidade.** É a evidência mais forte de "por que agora" e, simultaneamente, fonte de parte interessada com dado proprietário não reproduzível — os próprios autores declaram isso. Precisa de triangulação que ainda não existe.

10. **Luo, S.; Arora, S.; Guirado, C. (UC Berkeley) — "We Need Strong Preconditions For Using Simulations In Policy".** arXiv:2604.07838v1, 9/4/2026; apresentado em PoliSim@CHI 2026. `https://arxiv.org/abs/2604.07838`
    *Sustenta:* as três precondições (não tratar simulação de população marginalizada como saída técnica neutra; não simular população sem participação dela; não simular sem cadeia atribuível e validação independente de quem encomendou); o risco de uso duplo; a distinção entre ferramenta de decisão e "bola 8 mágica"; e — importante — que **não citam nenhum caso real** de simulação informando decisão pública.
    *Confiabilidade:* **alta como artigo de posição, nula como evidência empírica**, o que os autores não disfarçam. É a fonte da existência do workshop PoliSim@CHI 2026, cuja página na ACM devolveu HTTP 403 e não pude ler.

11. **Ye, J.; Cao, L.; Chen, D.; Ferrara, E. — "Stop Drawing Scientific Claims from LLM Social Simulations Without Robustness Audits".** arXiv:2605.18890, 20/5/2026. `https://arxiv.org/abs/2605.18890`
    *Sustenta:* o deslocamento de **até 76 pontos percentuais** na taxa de cooperação por perturbação menor de formato de persona e enquadramento de instrução; o deslocamento consistente em polarização por homofilia e atribuição de hub; e a sensibilidade desigual entre famílias — **76 pp num modelo, 1 pp em outro**. Os dois estudos de caso são dilema do prisioneiro repetido e câmara de eco em mídia social.
    *Confiabilidade:* **alta.** Preprint, mas com abstract explícito, números verificáveis e resultado que vai **contra** o interesse do campo que o publica. É o achado mais consequente deste mapa.

12. **Moon, J.; Kim, J.; Lah, Y.; Han, Y.; Kang, Y. — "Beyond Averages: Evaluating LLMs on Human Survey Replication at the Distributional Level".** arXiv:2606.09013v2, 22/6/2026. `https://arxiv.org/abs/2606.09013`
    *Sustenta:* nove modelos de cinco famílias contra dado de consumo **não público** de 2010 (52 respondentes, 12 condições); padrão entre condições razoavelmente reproduzido e estrutura distribucional não; para quantidade comprada, **nenhum modelo bateu a linha de base insensível à condição** (0,641 contra 1,467 de Wasserstein); e raciocínio explícito degradando monotonicamente o alinhamento distribucional.
    *Confiabilidade:* **média-alta.** Preprint, e o n humano é pequeno (52) — o que limita a generalização. Mas o desenho é o mais honesto do conjunto: dado fora do treino e comparação contra linha de base trivial, que é o teste que quase ninguém faz.

13. **Cau, E.; Failla, A.; Pansanella, V.; Rossetti, G. — "Social Simulations: from Agent-Based Modeling to Digital Twins".** arXiv:2607.13693v1, 15/7/2026. `https://arxiv.org/abs/2607.13693`
    *Sustenta:* a declaração de que o campo está em estágio inicial; alta sensibilidade a design de prompt; o risco de confundir viés do modelo com fenômeno social realista; a afirmação de que modelos de agentes com LLM **não podem** fornecer alegações preditivas confiáveis sobre sistemas reais; os três níveis de validação (estrutural, comportamental, preditiva); a mudança de pergunta de "o que acontece em geral" para "o que acontece aqui e agora"; e que realismo maior não é virtude epistêmica em si.
    *Confiabilidade:* **alta.** É survey, portanto secundária por natureza, mas é a leitura mais recente e mais explícita da maturidade do campo por quem está dentro dele.

14. **Ruan, C. F.; Qin, Y. et al. (Carnegie Mellon University e NVIDIA) — "WebLLM: A High-Performance In-Browser LLM Inference Engine".** arXiv:2412.15803v2 (versão lida: 13/4/2026). `https://arxiv.org/abs/2412.15803`
    *Sustenta:* inferência de LLM inteiramente em navegador via WebGPU e WebAssembly; 41,1 tokens/s com Llama-3.1-8B e 71,1 com Phi-3.5-mini, contra 57,7 e 89,3 nativos — 71–80% do desempenho nativo, em MacBook Pro M3 Max com quantização de 4 bits.
    *Confiabilidade:* **alta para o desempenho** (medição de engenharia, reproduzível, código aberto), **nula para qualquer alegação sobre simulação social**, que este artigo não faz. Foi por isso que a "bancada pessoal" ficou como sinal fraco, e não como raiz.

**Sobre triangulação.** As duas fontes mais interessadas do conjunto são as itens 2 (fornecedor da biblioteca) e 9 (empresa que usa o instrumento em produção). A alegação central de D1 — que a bancada ordena bem — repousa hoje **sobre a item 9, sozinha**, com dado proprietário não reproduzível. Isso está declarado no veredito de D1 e é a razão pela qual a confiança geral do documento é média e não alta. O experimento da seção 10 existe, entre outras coisas, para produzir a triangulação que falta.

**Duas fontes que tentei e não pude ler**, e que por isso **não** sustentam nada aqui: a página de diretrizes da ESOMAR sobre dado sintético aumentado (`https://esomar.org/publications/5-topics-of-discussion-to-help-buyers-of-augmented-synthetic-data`), que devolveu apenas o título; e a página do workshop PoliSim@CHI 2026 na ACM Digital Library (`https://dl.acm.org/doi/10.1145/3772363.3778738`), HTTP 403.

## 12. Anexo — o levantamento bruto

Esta seção preserva a incerteza. Não foi limpa.

### 12.1 Todos os candidatos, com classificação

| # | Candidato | Maturidade | Ruptura | Veredito |
|---|---|---|---|---|
| 1 | População sintética como sujeito experimental substituível | emergente | alto | **D1 — aceita** |
| 2 | Sociedade sintética como bancada de teste de sistema social | emergente | alto | **D2 — aceita** |
| 3 | Rastro de raciocínio do agente tratado como dado | experimental | alto | **D3 — aceita, confiança baixa** |
| 4 | Simulação social barata e pessoal, rodando no navegador | emergente (o runtime), sem evidência (o uso) | alto se ocorrer | **rebaixada a sinal fraco** — nenhuma fonte lida documenta simulação social com resultado nesse regime |
| 5 | Modelagem baseada em agentes clássica (NetLogo, regra fixa) | **madura** | — | **antecedente**. Aplicada há décadas; problemas são de engenharia, não de incerteza fundamental |
| 6 | Escala de um milhão de agentes | emergente | médio | **rebaixada a evidência de "por que agora"**. Escala é capacidade de plataforma, não capacidade validada; e é declarada desde nov/2024 |
| 7 | Ambiente de auditoria de recomendador (tipo ARTAI) | emergente | médio | **tecnologia habilitadora de D2**, não raiz. Não rompe duas dimensões por si |
| 8 | Gêmeo digital de população calibrado por censo | experimental | alto se validado | **absorvida em D1 e D2**. É a forma de calibração, não capacidade distinta; e a melhor evidência lida tem N = 10 |
| 9 | Personagem autônomo em jogo | — | — | **fora de escopo** (tema 7 da disciplina) |
| 10 | Mercado de agentes com dinheiro real | — | — | **fora de escopo** (tema 5) |
| 11 | Agente corporificado no mundo físico | — | — | **fora de escopo** (tema 9) |
| 12 | Rede fechada onde agentes de autores diferentes se encontram | sem fonte lida | ? | **descartado nesta rodada** por ausência de fonte primária aberta |
| 13 | Inspeção de desigualdade em tempo real na simulação (Gini, riqueza, poder) | sem fonte lida | ? | **descartado nesta rodada**; é instrumentação, provavelmente sub-efeito de D3 |
| 14 | Replay determinístico e artefato por hash como regime de prova | sem fonte lida | médio | **descartado como raiz, retido como hipótese alternativa** (12.5) — se reprodutibilidade bit a bit se tornar norma, muda o regime de prova sem depender de correspondência com o real |

**Sobre os candidatos 12, 13 e 14** e sobre as ferramentas nomeadas no enunciado da disciplina — `Argentor`, `Luvoire`, `y-not.social`, `Rath`, `NeuroForge`, `DisasterReliefOps`, `agent-inspect`, `Gestalt Village`: **não abri fonte primária de nenhuma delas nesta execução.** Entram como insumo de turma não verificado e não sustentam nenhuma alegação deste documento. Isso é uma lacuna real: são justamente os artefatos onde se veria adoção fora do circuito acadêmico, e o mapa está mais acadêmico do que deveria por causa disso.

### 12.2 Caminhos causais cortados

| Caminho considerado | Por que foi cortado |
|---|---|
| Simulação barata → **a pesquisa de opinião acaba** | Mecanismo ausente. O que a evidência mostra é substituição na **triagem**, não na estimativa de nível — e estimativa de nível é o produto da pesquisa de opinião. O teste "se A, então B porque ____" não pôde ser completado |
| Teste com sociedade sintética → **obrigatório por lei, como teste de colisão de automóvel** | Confusão entre obrigação de **resultado** (avaliar risco) e prescrição de **método**. Nenhuma fonte lida mostra regulador prescrevendo método de simulação. Reescrito como aceitação experimental sem método prescrito (`e2.2`), rebaixado a sinal fraco e confiança baixa |
| Simulação fica boa o bastante → **a ética de pesquisa se aplica a agentes** | Sem mecanismo no horizonte 2031. Nenhuma fonte lida indica trâmite nessa direção. O que há é o inverso — ética de pesquisa sobre as **pessoas simuladas**, não sobre os agentes (Luo et al.). Movido para hipóteses alternativas |
| Rastro de raciocínio abundante → **fim do teste de usabilidade** | Extrapolação linear sem mecanismo. Teste de usabilidade mede fricção corporal e temporal que o rastro textual não produz. Cortado |
| Agentes em escala → **descoberta de lei social nova** | Isto seria um resultado científico, não um efeito de adoção; e contraria diretamente a fonte 13, que nega alegação preditiva confiável. Cortado |
| Ambiente de referência público → **fim da assimetria de informação entre plataforma e auditor** | Otimista e sem mecanismo: quem controla telemetria continua controlando a calibração. Sobrevive apenas na forma fraca de `e2.1.1`, que fala de deslocamento da negociação, não de fim da assimetria — e W3 registra o desfecho de captura |

### 12.3 Contrassinais, reunidos

1. Nenhum dos nove modelos bateu a linha de base agregada para quantidade comprada; pedir raciocínio explícito **degradou** o alinhamento distribucional (Moon et al., 2026).
2. Os oito modelos divergiram da distribuição humana (p < 0,001) em jogo econômico clássico; **modelo maior não foi mais humano**, o que remove o argumento de "espere o próximo modelo" (Gao et al., *PNAS*, 2025).
3. Autoexplicações do modelo frequentemente contradizem sua própria saída (Gao et al.) — contra D3 diretamente.
4. Até 76 pp de deslocamento por perturbação cosmética, e desigual entre famílias (Ye et al., 2026) — o que inviabiliza auditoria feita num modelo só.
5. O survey do campo afirma que alegação preditiva confiável **não** é possível hoje, e que realismo maior não é virtude epistêmica (Cau et al., 2026).
6. A maior parte dos estudos usa estrutura de rede simplificada ou ausente e interação de campo médio (Cau et al.) — isto é, o que se simula ainda não tem a topologia do que se quer estudar.
7. Nenhum caso real documentado de simulação informando decisão pública (Luo et al. não citam nenhum).
8. **Não verificado por mim:** 2 anúncios sobre simulação em 7.776 de dois grandes diretórios comerciais de IA (medição de aluno da disciplina). Se correto, é o contrassinal econômico mais limpo do conjunto.
9. Os próprios autores do único caso com ganho medido em produção dizem que **não substitui** teste A/B (ContextSim).

### 12.4 Buscas feitas, incluindo as que não deram em nada

| Busca | Resultado |
|---|---|
| `generative agents simulacra LLM social simulation 2026 arXiv` | Produtiva: AgentSociety, EconSimulacra, GATSim, EASE, o artigo de auditoria de robustez |
| `OASIS one million agents CAMEL-AI` | Produtiva: artigo, repositório, página do projeto |
| `synthetic respondents market research ESOMAR 2026` | **Enganosa.** Resumo articulado montado quase todo sobre blogs de fornecedores. Descartado — ver seção 8, erro 1 |
| `ESOMAR synthetic data guideline site:esomar.org` | **Falhou.** A página primária devolveu só o título |
| `DSA systemic risk assessment simulation testing recommender` | Parcial: levou ao ARTAI e a artigos de auditoria de recomendador, mas **nenhuma fonte que prescreva simulação** |
| `Concordia DeepMind GABM paper` | Produtiva |
| `LLM agents fail replicate human survey distributions homogeneity` | Muito produtiva: "Beyond Averages", "Take caution", e vários outros não abertos |
| `simulação social agentes LLM Brasil desinformação políticas públicas 2026` | **Não deu o que se procurava.** Voltou pesquisa brasileira sobre desinformação e política pública (Agência Pública, Ipea, ALTERJOR), **não** sobre simulação com agentes. Nenhuma dessas fontes foi aberta e nenhuma é citada |
| `"social simulation" gêmeo digital agentes LLM universidade brasileira Ipea censo população sintética` | Voltou apenas trabalho internacional (gêmeos digitais sociais, SYN-DIGITS, EconSimulacra). **Nenhum trabalho de instituição brasileira apareceu** |
| `browser local small language model agent simulation WebGPU 2026` | Produtiva para o runtime (WebLLM, WebGPU por padrão), **improdutiva para simulação social nesse regime** |
| `agent simulation pre-launch testing platform synthetic users production 2026` | Mista: muito conteúdo comercial de plataformas de teste de agente (Maxim, Cresta, FutureAGI) que **não abri**, e um achado forte que abri (ContextSim) |
| `government agency used LLM agent simulation policy decision 2026` | Produtiva em literatura (PolicySim, precondições, PoliSim@CHI), **improdutiva em caso real**: nada documentado |

**Títulos que apareceram na busca e que NÃO abri** — registrados porque são as lacunas mais prováveis deste mapa, não porque sustentem algo: `EconSimulacra` (arXiv:2606.26883), `EASE Configuration Facilitates A Reproducible Science of LLM Social Simulations` (2605.30258), `From Script to Stage` (2512.08935), `HumanStudy-Bench` (2602.00685), `Assessing the Reliability of Persona-Conditioned LLMs as Synthetic Survey Respondents` (2602.18462), `SYN-DIGITS` (2604.07513), `GATSim` (2506.23306), `Towards an LLM-powered Social Digital Twinning Platform` (2505.10681). Os dois primeiros e o `HumanStudy-Bench` atacam exatamente a reprodutibilidade e o *benchmark* de simulação de participante — se este mapa for refeito, é por onde começar.

### 12.5 Hipóteses alternativas que não entraram no mapa

1. **A reprodutibilidade substitui a validade.** Se replay determinístico e artefato identificado por hash se tornarem norma, a comunidade pode passar a aceitar resultado de simulação por ser **exatamente reproduzível**, sem nunca resolver a correspondência com o mundo. Seria uma saída sociológica, não epistêmica, para o impasse da seção 7 — e explicaria a roda inteira sem D1 precisar funcionar. Não achei fonte, mas é a hipótese que mais me incomoda.
2. **A simulação se estabelece como instrumento de *ensino*, não de investigação.** Ver uma sociedade operar por dentro é pedagogicamente poderoso mesmo sendo cientificamente inválido. Esse uso não exige validação nenhuma, e é o que mais barato escala. Nenhuma fonte lida trata disso.
3. **Ética de pesquisa aplicada a agentes.** Cortada do mapa por falta de mecanismo até 2031. Fica registrada porque é a pergunta de 3ª ordem que o enunciado da disciplina levanta, e a resposta honesta desta execução é: não achei nada que a sustente. O que achei foi o inverso — ética sobre as **populações reais representadas**, não sobre os agentes.
4. **Autorregulação setorial como freio principal.** Se associações de pesquisa de mercado definirem por código o que pode ser chamado de "respondente", o freio vem de lá e não do regulador de plataforma. **Não tenho fonte lida** — a tentativa de ler a diretriz primária falhou (seção 8, erro 1). É a lacuna que eu fecharia primeiro.
5. **O gargalo é o dado de calibração, e não o modelo.** Se isso for verdade, nada em D1 avança por melhoria de modelo, e a curva do campo é dada pela disponibilidade de painel humano recente — que é um problema de financiamento, não de IA. Aparece em `e1.2.1` e no cenário desejável, mas merecia ser raiz e não foi por falta de evidência direta.

### 12.6 Nota sobre o Brasil

Pedido: recorte global com uma nota sobre o Brasil. **A nota honesta é sobre uma ausência.** Duas buscas dirigidas a trabalho brasileiro de simulação social com agentes de LLM — inclusive procurando população sintética a partir do Censo e produção do Ipea — não devolveram nenhum trabalho de instituição brasileira sobre o método. Devolveram pesquisa brasileira robusta sobre **desinformação e políticas públicas**, que é o campo vizinho e o mais provável comprador do instrumento. Não abri essas fontes e não as cito.

O que se pode afirmar sem fonte nova, por dedução a partir das fontes lidas, e declarado como dedução: o protocolo de gêmeo digital social exige censo, survey e métrica observável de calibração (item 7 da seção 11), e o Brasil tem os três em qualidade alta. O que ele não tem, pelo que esta busca alcançou, é trabalho publicado que os use nesse regime. A assimetria a observar até 2031 é essa: **o modelo e o repertório de personas vêm de fora, e a calibração teria de vir de dentro**. Uma sociedade sintética brasileira calibrada apenas por *priors* de modelo treinado em outro lugar é o caso em que o viés do modelo mais se confunde com achado sobre o país — que é exatamente o risco nomeado por Cau et al. e por Luo et al., aqui agravado por assimetria geográfica. Isso é verificável, e barato: é a mesma medição do experimento da seção 10, rodada com população brasileira declarada e comparada a respondentes brasileiros reais.

### 12.7 Observações de processo que não couberam no mapa

- **O campo se critica melhor do que se vende.** As três fontes mais duras contra o instrumento (itens 6, 11 e 13) são de dentro dele. Isso é sinal de saúde metodológica e, ao mesmo tempo, o motivo pelo qual o mapa é mais cético que o enunciado do tema.
- **A analogia do túnel de vento é boa retoricamente e ruim tecnicamente**, e vale registrar por quê: o túnel de vento tem um referente físico — as equações de escoamento valem no túnel e na asa, e a semelhança é demonstrável por número de Reynolds. A sociedade sintética não tem análogo disso. Não existe, hoje, o "número de Reynolds" da correspondência social, e a seção 7 é basicamente uma lista de consequências dessa ausência. Se alguém construir esse critério, este documento envelhece de uma vez.
- **Tensão não resolvida entre duas fontes lidas.** OASIS reporta que escala maior produz dinâmica de grupo mais acentuada e opinião mais diversa; o survey reporta que a maior parte dos estudos usa rede simplificada ou ausente e interação de campo médio. As duas podem ser verdadeiras — a diversidade cresce na população e não na topologia —, mas se forem, então o ganho de escala é ganho de amostra e não de estrutura social, o que enfraquece a leitura de que "escala muda o fenômeno". Não resolvi, e usei a versão fraca da alegação em D2.
- **O que eu mediria primeiro se tivesse mais uma hora:** a taxa de sobrevivência das alegações de AgentSociety (item 4) sob a auditoria de Ye et al. (item 11). O item 4 alega alinhamento com resultado experimental real, sem detalhar como; o item 11 dá o procedimento para testar esse tipo de alegação. Cruzar os dois é o teste mais barato e mais consequente que ficou de fora desta execução.
