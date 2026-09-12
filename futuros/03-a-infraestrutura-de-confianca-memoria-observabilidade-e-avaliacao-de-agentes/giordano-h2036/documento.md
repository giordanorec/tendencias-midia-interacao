---
tema: "A infraestrutura de confiança: memória, observabilidade e avaliação de agentes"
slug: a-infraestrutura-de-confianca-memoria-observabilidade-e-avaliacao-de-agentes
autor_login: grec
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2036
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 18
efeitos_ordem_2: 33
efeitos_ordem_3: 27
tecnologias_citadas: [OpenTelemetry GenAI semantic conventions, invoke_agent, execute_tool, Langfuse, LangSmith, Arize Phoenix, Braintrust, Datadog LLM Observability, W&B Weave, MLflow, Helicone, Mem0, Zep, Graphiti, Letta, LangMem, ByteRover, Cognee, Claude Memory tool, ChatGPT Dreaming V3, LoCoMo, LongMemEval, BEAM, tau-bench, tau2-bench, pass^k, SWE-bench Verified, GAIA, LLM-as-judge, Agent-as-a-Judge, AJ-Bench, AgentProp-Bench, BenchGuard, MemDelta, DEMM-Bench, agrepl, MINJA, Trojan Hippo, Merkle-DAG, EU AI Act Art. 12, EU Data Act, ISO/IEC 42001, LGPD, PL 2338/2023]
fontes: 32
confianca: media
experimento: "O espelho e o extrato — uma interface que, ao fim de cada sessão, devolve à pessoa três coisas: o que o agente anotou sobre ela, o caminho que ele percorreu e em quantas de oito execuções o resultado se repetiu"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Quando a máquina fabrica o produto, avaliar o produto mede a máquina — e a pergunta deixa de ser
"o que foi entregue?" para virar "por que isso está certo?". Este mapa persegue quatro rupturas
até 2036. A primeira é que **a avaliação de sistemas não determinísticos vira medição estatística
contínua**: o τ-bench mostrou que um agente com 61% de acerto numa tentativa cai para ~25% quando
se exige que ele acerte oito vezes seguidas, e o melhor juiz-LLM único concorda com o humano a
κ = 0,567 contra κ = 0,835 de dois anotadores humanos entre si. A segunda é que **o rastro de
execução deixa de ser artefato de depuração e vira prova**: o artigo 12 do AI Act obriga o
registro automático de eventos ao longo da vida do sistema — aplicável a alto risco do Anexo III
em 02/12/2027 e do Anexo I em 02/08/2028 —, e o DEMM-Bench mostra que **ter o rastro não é
responder à pergunta**: bases "trace-present" superestimam a própria suficiência em 75% dos
casos. A terceira é que **a memória vira ativo e o fornecedor vira insubstituível**: sete de sete
produtos de memória testados em julho de 2026 travam o usuário, e a memória acumulada mistura o
que é da pessoa, do empregador e do cliente. A quarta é que **o esquecimento vira requisito** —
"você não pode apagar o que não sabe que o agente guardou" — ao mesmo tempo em que a memória
persistente se revela o vetor de ataque que sobrevive à sessão (85% a 100% de sucesso em ataque
dormente que acorda depois de cem sessões benignas). O achado que se repete não é que os agentes
vão ficar confiáveis. É que **confiar custa registrar, registrar custa guardar, guardar colide
com apagar, e a portabilidade legal não produz portabilidade real** — e quem paga essa conta é
quem não tem orçamento de conformidade. Para quem projeta mídia e interação, a consequência
prática é que em 2036 a memória inferida, o trace e a faixa de confiabilidade são elementos de
interface tão concretos quanto o botão.

## 2. O tema

**A infraestrutura de confiança** é a camada que permite confiar num sistema que ninguém consegue
ler por inteiro. Ela tem duas faces que são a mesma: a **memória**, que faz o agente acumular
contexto, decisões e erros entre sessões, e a **observabilidade e avaliação**, que permitem
conferir o que ele fez e por quê. As duas nascem do mesmo fato: o agente ficou bom o bastante
para ninguém conferir tudo, e caro o bastante em contexto para que "lembrar" precise ser
engenharia.

**Onde isso encosta em mídia e interação**, em quatro lugares que não são "infraestrutura" no
sentido estreito:

1. **O perfil inferido virou tela.** Quando o sistema escreve sozinho o que concluiu sobre a
   pessoa — e reescreve depois, sem avisar —, alguém tem de decidir como mostrar isso. Essa é uma
   decisão editorial antes de ser decisão de produto: o que se mostra, em que ordem, com que
   palavra, e o que se esconde.
2. **A incerteza virou elemento de interface.** Um produto que acerta 7 em 10 vezes precisa dizer
   isso em algum lugar da tela. Hoje isso aparece como nota de rodapé ("a IA pode cometer erros");
   a pressão dos próximos dez anos é para que vire número.
3. **O rastro virou conteúdo.** Quando o caminho percorrido pelo agente é a justificativa da
   entrega, o trace deixa de ser log e vira um objeto que alguém tem de projetar para ser lido —
   por um auditor, por um cliente, por um juiz, por um leitor.
4. **A memória virou o que segura a pessoa no produto.** O argumento de retenção deixa de ser a
   qualidade do modelo e passa a ser o acúmulo. Isso é desenho de produto no sentido mais
   literal.

**Por que isto merece um mapa de futuro e não um levantamento de estado da arte.** Um levantamento
responderia "quais ferramentas existem" — e a resposta já está consolidando: 89% das organizações
pesquisadas pela LangChain (1.340 respostas, nov–dez de 2025) já instrumentaram observabilidade
para agentes. O que um levantamento não responde é o que acontece quando as três pernas colidem:
registrar tudo colide com apagar tudo; memória que acumula colide com trocar de fornecedor;
avaliação que custa colide com quem não pode pagar. São essas colisões — não as ferramentas — que
estruturam os próximos dez anos, e é isso que uma roda dos futuros consegue mapear.

## 3. Onde isso está hoje

Âncora feita com acesso à web em 12/09/2026, com 32 fontes abertas e lidas (seção 11). Todas as
buscas foram feitas em português e inglês; as que não deram em nada estão registradas na seção 12.

### 3.1 O que já existe e funciona

**Observabilidade de agentes é mercado, não promessa.** O mercado de plataformas de
observabilidade de LLM é dimensionado em **US$ 2,69 bilhões em 2026**, contra US$ 1,97 bilhão em
2025, com projeção de US$ 9,26 bilhões em 2030 (CAGR de 36,2%). A consolidação já começou: em
**13 de agosto de 2026 a Dynatrace anunciou a compra da Arize por US$ 915 milhões** (US$ 815
milhões em dinheiro mais equity de substituição), com a justificativa explícita de que "times de
engenharia de IA avaliam o comportamento de modelo e agente num conjunto de ferramentas, enquanto
os times que rodam as aplicações e a infraestrutura abaixo deles trabalham em outro". A **Braintrust
levantou US$ 80 milhões em Série B com avaliação reportada de US$ 800 milhões, em fevereiro de
2026**. O Arize Phoenix passa de **dois milhões de downloads mensais**.

**A instrumentação já é padrão; a avaliação, não.** Na pesquisa da LangChain (1.340 respostas,
18/11 a 02/12/2025): **57% têm agentes em produção**; **89% implementaram alguma forma de
observabilidade** e 62% têm tracing detalhado que permite inspecionar passos e chamadas de
ferramenta; entre quem está em produção, 94% têm observabilidade e 71,5% têm tracing completo.
Mas **apenas 52,4% rodam avaliação offline, só 37,3% rodam avaliação online, e 29,5% não avaliam
de forma alguma** (22,8% entre quem está em produção). O bloqueador número um citado é qualidade,
não custo. É este o descompasso que estrutura o mapa: **instrumenta-se mais rápido do que se
constrói o portão de qualidade.**

**Memória virou uma categoria com benchmark próprio.** Mem0, Zep (Graphiti), Letta (ex-MemGPT),
LangMem e ByteRover competem em três benchmarks: LoCoMo (2024, diálogo multi-sessão com média de
300 turnos em 35 sessões), LongMemEval (2024, ~115 mil tokens em 40 sessões na versão S) e BEAM
(2026, dez capacidades em escalas de um e dez milhões de tokens). Mem0 reporta **92,5 em LoCoMo e
94,4 em LongMemEval**, a cerca de 6,7–7,0 mil tokens por consulta, contra mais de 25 mil do
contexto empilhado — e P50 de latência abaixo de 1,1 s.

**A memória de consumo chegou à escala de massa.** A OpenAI começou em **4 de junho de 2026** o
lançamento do "Dreaming V3" para Plus e Pro nos EUA, com expansão para Free e Go, num ChatGPT
próximo de 900 milhões de usuários semanais. Os números que a própria OpenAI reporta: recall
factual de **82,8%** (contra 41,5% em 2024), aderência a preferência de **71,3%** (contra 31,4%)
e acerto em consulta sensível a tempo de **75,1%** (contra 9,4%). O sistema passa a **reescrever
a memória sozinho** — o exemplo da própria OpenAI é uma anotação que muda de "vai a Singapura em
julho" para "foi a Singapura em julho de 2026" depois da viagem.

**O ataque contra memória persistente é real e medido.** O *Trojan Hippo* (arXiv, maio de 2026)
planta um payload dormente na memória de longo prazo via uma única chamada de ferramenta não
confiável — um e-mail forjado — que só acorda quando o usuário fala de finanças, saúde ou
identidade: **85% a 100% de taxa de sucesso contra modelos de fronteira da OpenAI e do Google,
com memórias plantadas ativando mesmo após 100 sessões benignas**. O MINJA (janeiro de 2026)
consegue **mais de 95% de sucesso de injeção e 70% de sucesso de ataque** em condições
idealizadas, a partir de consultas de usuário comum, sem privilégio elevado.

**Quem constrói.** Quatro famílias de ator, com incentivos diferentes: (a) plataformas de
observabilidade e eval — Langfuse (núcleo MIT, auto-hospedável), LangSmith, Arize Phoenix
(Elastic License 2.0), Braintrust, Datadog, W&B Weave, MLflow, Helicone; (b) fornecedores de
memória — Mem0, Zep, Letta, ByteRover, Cognee; (c) o comitê de padrões — OpenTelemetry, cujas
convenções GenAI ganharam repositório próprio na versão v1.42.0 e definem `create_agent` e
`invoke_agent` com filhos `chat` e `execute_tool`; (d) os próprios laboratórios, que publicam os
benchmarks nos quais são avaliados.

### 3.2 O que existe e ainda não funciona

**O padrão não é padrão.** As convenções GenAI do OpenTelemetry estão em status **"development"**
— não estáveis, sem release 1.0, com nomes que ainda podem mudar entre versões. A documentação
oficial dos spans de agente **não compromete data de estabilização**. Sem nome estável de atributo
não há rastro comparável entre fornecedores, e sem rastro comparável não há auditoria
independente.

**Os números de memória não são comparáveis entre si, e os ganhos encolhem sob controle.** A
própria literatura da categoria admite que "rodar LoCoMo" não é padronizado: o modelo juiz, o
modelo respondedor e o pós-processamento mudam o resultado. Zep reivindica 94,7 em LoCoMo; um
teste independente mediu 75,1 para o mesmo sistema. Um teste independente da edição open-source
do Mem0 chegou a **32,4% em LongMemEval onde a plataforma gerenciada autorreporta 93,4%**. Pior:
o **MemDelta** (arXiv, 29/06/2026) mostra que, sob baseline controlada, boa parte do ganho
desaparece — RAG verbatim empata com contexto cheio (**47,2% contra 49,8%, p = 0,34**), a
auto-memória do agente (**42%**) fica **abaixo** de recuperação básica (**47%**), e em 2 de 6
tipos de pergunta o Mem0 empata com RAG de nuvem (72,7% contra 73,9%) **a 50× o custo**. Trocar
só o modelo de embedding desloca a acurácia em +6,2 pontos (p = 0,004); os resultados chegam a se
inverter entre modelos.

**O juiz não é confiável o bastante para ser o juiz.** No AgentProp-Bench (arXiv, abril de 2026,
revisado em agosto): julgamento por heurística de substring fica em **κ = 0,049** (nível do
acaso); um comitê de três LLMs fica em **κ = 0,432**; o melhor juiz único (GPT-4o-mini) em
**κ = 0,567** — contra **κ = 0,835** entre dois anotadores humanos. Note o contraintuitivo: **o
comitê foi pior que o juiz único.** O mesmo trabalho mede que um erro de parâmetro se propaga
para a resposta final errada com probabilidade calibrada por humano de **≈ 0,62**.

**Os próprios benchmarks têm defeito.** O BenchGuard (arXiv, 27/04/2026) auditou tarefas
científicas e encontrou **12 problemas confirmados pelos autores** do ScienceAgentBench, alguns
"fatais, tornando tarefas insolúveis", e casou **83,3%** dos problemas identificados por
especialistas no subconjunto Verified-50 do BIXBench — a um custo de **menos de US$ 15** para
auditar 50 tarefas complexas. E há mais: "Log analysis is necessary for credible evaluation of AI
agents" (arXiv, 08/05/2026) mostra que o desempenho em pass^5 do τ-Bench Airline estava
**subestimado em quase 50%** até que alguém lesse os logs.

**Ter o rastro não é ter a prova.** O DEMM-Bench (arXiv, 30/05/2026, 41 páginas) mede se o
registro é **suficiente para reconstruir uma propriedade da decisão**, e não se ele existe. Os
resultados: bases "trace-present" e "schema-present" **superestimam a própria suficiência em 75%
dos casos**; "ledger-present", em 50%. O candidato redigido chega a 56,25% de PSA médio com zero
superestimação.

**A reprodução é parcial por construção.** O `agrepl` (arXiv, submetido em 30/04/2026) consegue
replay determinístico interceptando tudo na camada de transporte por um proxy MITM, com
**fidelidade F = 1,0** e **redução de 98,3% na latência mediana por passo** em cinco cargas
(n = 250). Mas ele trata **a chamada ao modelo como a entrada irredutivelmente não determinística**
— grava a saída e mede a fidelidade da reprodução. Congela-se a cola, não o miolo. A causa da não
determinação a temperatura zero, aliás, não é principalmente a não-associatividade de ponto
flutuante: é a **dependência de tamanho de lote nos kernels de redução**, uma propriedade do
servidor, não do cliente.

**Portabilidade de memória não existe.** Teste de sete produtos na primeira semana de julho de
2026 — ChatGPT Memory, Claude Projects/memória, Claude Tag, Gemini saved info, Cursor rules e
memories, Cognee 1.0, ByteRover — contra o critério de **simetria de importação** (o concorrente
consegue ler o exportado e reconstruir estrutura, atribuição, relações e validade temporal?):
**sete de sete falham**. ChatGPT não exporta as memórias salvas; Claude exporta como resumo em
texto; Gemini aceita o ZIP do rival mas só como texto achatado; Cognee e ByteRover preservam
estrutura e proveniência mas são **implementação única**, o que também reprova no critério de
simetria.

**Ninguém sabe apagar.** A análise jurídica da ferramenta de memória da Anthropic (publicada em
12/04/2026, atualizada em 04/09/2026) formula o problema com precisão: o agente escreve arquivos
em `/memories` por conta própria; um arquivo chamado `session-context-2026-04.md` contendo "o
usuário prefere estratégias conservadoras e mencionou um prazo em julho" **não tem, no nome, nada
que identifique o titular**. Inventários de dados cobrem CRM, analytics e pagamento — e passam ao
largo. O prazo do GDPR (art. 12(3)) é de um mês; a obrigação (art. 17) é apagar sem demora
indevida. E a ADMT da Califórnia começa a valer em **1º de janeiro de 2027**.

### 3.3 Quem constrói, e com que incentivo

| Ator | O que constrói | Incentivo que distorce |
|---|---|---|
| Plataformas de eval/observabilidade (Braintrust, Langfuse, LangSmith, Arize/Dynatrace) | trace, dataset, score | cobram por volume — Braintrust por score (US$ 2,50/1k no Starter, US$ 1,50 no Pro) e por GB processado; W&B a US$ 0,10/MB. Medir mais é faturar mais |
| Fornecedores de memória (Mem0, Zep, Letta, ByteRover, Cognee) | camada de contexto | publicam o próprio número no próprio arnês; portabilidade simétrica destrói o fosso |
| Laboratórios de fronteira | modelo + memória de produto | são réu e autor da prova; memória mais profunda é retenção |
| Comitê de padrões (OpenTelemetry) | nome dos atributos | move devagar por construção; em "development" desde sempre |
| Regulador (Comissão Europeia, ANPD, seguradoras) | obrigação de registrar | define suficiência sem construir nada |

### 3.4 O número que descreve a adoção hoje

- Observabilidade de agentes: **89%** das organizações pesquisadas (1.340 respostas, LangChain,
  nov–dez/2025); **94%** entre as que têm agentes em produção.
- Avaliação: **52,4%** offline, **37,3%** online, **29,5%** nenhuma.
- Mercado: **US$ 2,69 bi** em 2026 para observabilidade de LLM; AI Observability projetada em
  **mais de US$ 10 bi até 2030** (estimativa citada pela própria Dynatrace no anúncio da compra —
  fonte interessada, tratar como teto).
- Memória de consumo: rollout do Dreaming V3 iniciado em 04/06/2026; **sem número encontrado**
  para a fração de usuários com memória ativa.
- Certificação: **sem número encontrado** para quantos certificados ISO/IEC 42001 foram emitidos
  até 2026, no Brasil ou no mundo. Busca registrada na seção 12.

### 3.5 Nota sobre o Brasil

O **PL 2338/2023** foi aprovado pelo Senado em dezembro de 2024 e está na Câmara, em Comissão
Especial, **aguardando parecer do relator** (dep. Aguinaldo Ribeiro, PP-PB, designado em
20/05/2025), em regime de prioridade, com **37 proposições apensadas** — a última delas em
**2 de setembro de 2026**. Ou seja: em setembro de 2026, quase dois anos depois da aprovação no
Senado, o texto **ainda não teve parecer**. Ele reforça o papel institucional da ANPD e cria o
Sistema Nacional de Regulação e Governança de IA (SIA), com exigência de transparência e revisão
humana de decisões automatizadas. Não encontrei, nas fontes abertas, tratamento específico de
memória de agente ou de suficiência de rastro no texto brasileiro — o que, para este mapa,
significa que **o Brasil herdará a definição de suficiência escrita na Europa**, e a herdará
tarde. Isso tem consequência concreta para quem projeta aqui: a obrigação chega pelo contrato com
o cliente europeu antes de chegar pela lei brasileira.

## 4. As disrupções-raiz

Quatro raízes. Antes delas, as recusas — porque um mapa que não recusa nada está medindo mal.

### 4.0 Candidatos recusados

**Candidato recusado como raiz: logs, métricas e tracing distribuído de aplicação.** Adoção em
maioria desde meados da década de 2010; o OpenTelemetry é default de fato há anos. O que ela
rompe? Nada — faz o mesmo, melhor. Tratado como contexto na seção 3.

**Candidato recusado como raiz: teste unitário e integração contínua.** Maduro desde os anos
2000. Recusado. Aparece como *contraste* — é justamente a moldura que a raiz 1 rompe.

**Candidato recusado como raiz: memória de assistente de consumo.** Este é o caso difícil, e vale
escrever o raciocínio inteiro. O Dreaming V3 rodou para Plus e Pro em 04/06/2026 com expansão
para Free e Go, num produto de escala de centenas de milhões de usuários semanais. Pela régua da
disciplina — *"se dá para fazer com o que já é comum em produto de massa, é maduro"* —, **memória
de conversa dentro de um único produto é madura e está recusada como raiz**. O que **não** é
maduro, e por isso vira raiz 3, é a memória que **atravessa fornecedores, ferramentas e contratos,
com proveniência, atribuição e possibilidade de exportação e apagamento verificáveis** — essa
está em laboratório e demo, e sete de sete produtos reprovam no teste de simetria.

**Candidato recusado como raiz: LLM-as-judge.** Já é prática corrente em 2026 e entra como
mecanismo, não como ruptura — o que rompe não é usar um modelo para julgar, é a avaliação passar
a ser medição estatística contínua com consequência contratual (raiz 1).

### 4.1 Raiz 1 — A avaliação de sistemas não determinísticos vira medição estatística contínua

> Quando rodar duas vezes dá dois resultados, "passou no teste" deixa de significar alguma coisa.

**1. O que ela rompe.** Rompe o binário passa/falha, que é a base do teste de software, do critério
de aceite contratual e do ofício de QA. Rompe também a premissa de que se avalia o artefato: se a
máquina fabrica o artefato, avaliar o artefato mede a máquina — e a unidade de medida vira a
distribuição, não a peça. O τ-bench mostrou o tamanho do buraco: um agente com **61% em pass@1
cai para ~25% em pass^8** no domínio de varejo — "há apenas 25% de chance de o agente resolver 8
casos do mesmo problema com clientes diferentes". A diferença entre 61% e 25% é exatamente a
distância entre o que o teste mede e o que o cliente experimenta.

**2. Por que agora, e não há cinco anos.** Três pré-condições que não existiam: (a) agentes bons o
bastante para ninguém conferir tudo, e em produção em 57% das organizações; (b) juiz-LLM barato o
bastante para rodar continuamente — auditar 50 tarefas complexas custa menos de US$ 15; (c) a
constatação, publicada e medida em 2026, de que **o juiz não é confiável** (κ = 0,567 contra
κ = 0,835 humano) e de que **os benchmarks têm defeito** (12 problemas confirmados num só
benchmark científico). Há cinco anos não havia nem o volume que impede a conferência manual nem a
literatura que mede a falha do substituto.

**3. Onde está na difusão.** **Produto de nicho → adoção precoce.** A instrumentação é maioria
(89%), mas a avaliação online é minoria (37,3%) e quase um terço não avalia nada. O cargo existe e
tem faixa salarial; o mercado de ferramenta tem US$ 2,69 bi e consolidação por compra. Não é
maioria; não é laboratório.

**4. O que ainda falta acontecer.** Um juiz cuja concordância com humano seja publicável e
auditável; um padrão de reporte que obrigue a publicar o log junto do número; e a primeira
cláusula contratual que especifique faixa de confiabilidade em vez de escopo funcional. Nada disso
é impossível — por isso é raiz, e não wildcard.

**Quem bloqueia, e como.** Quem vende o modelo tem incentivo direto para ser dono do benchmark em
que é medido. A separação entre avaliador e avaliado não vai ser oferecida pelo mercado: vai ter
de ser exigida, como foi na auditoria contábil.

### 4.2 Raiz 2 — O rastro de execução deixa de ser artefato de depuração e vira prova

> O log para de ser uma escolha da engenharia e vira um requisito de terceiros.

**1. O que ela rompe.** Rompe o log como coisa descartável, amostrável e decidida por quem
escreve o código. Quando o rastro é evidência jurídica, ele ganha requisitos que a engenharia não
define: o que tem de estar lá, por quanto tempo, e com que garantia de não-adulteração. Rompe
também a prática corrente de amostragem — o guia de 2026 recomenda reter 100% dos traces com erro
e **1% a 5% dos traces saudáveis**, e essa taxa é exatamente o que deixa de ser defensável quando
a pergunta chega depois do fato.

**2. Por que agora, e não há cinco anos.** O artigo 12 do AI Act obriga o registro automático de
eventos ao longo de toda a vida do sistema de alto risco, com aplicação em **02/12/2027**
(Anexo III) e **02/08/2028** (Anexo I); o artigo 26 obriga o *deployer* a guardar os logs sob seu
controle por **no mínimo seis meses**. Isso não existia há cinco anos. E, do outro lado, apareceu
a medida de que ter o rastro não basta: o DEMM-Bench, de maio de 2026, quantifica a
**superestimação de 75%**.

**3. Onde está na difusão.** **Demo pública → produto de nicho.** Replay determinístico é artigo
de 2026 com implementação (`agrepl`); a convenção de nomes está em "development"; a exigência
legal ainda não entrou em vigor. Não há adoção precoce disseminada — há obrigação anunciada e
ferramenta nascendo.

**4. O que ainda falta acontecer.** Estabilização do vocabulário (OTel GenAI sair de
"development"); um padrão de **suficiência** — não de presença — escrito por quem cobra; e o
primeiro caso em que um rastro incompleto custa dinheiro a alguém, em público.

**Quem bloqueia, e como.** Quem opera em escala: o custo de reter rastro integral de um agente que
dá quarenta passos por tarefa é uma ordem de grandeza acima do de reter a resposta. A amostragem é
o inimigo natural da prova, e ela tem do seu lado o orçamento.

### 4.3 Raiz 3 — A memória vira ativo acumulado, e o fornecedor vira insubstituível

> Trocar de modelo era trocar uma chamada de API. Trocar de memória é perder o que o sistema
> aprendeu.

**1. O que ela rompe.** Rompe a fungibilidade do fornecedor de IA, que foi a premissa econômica de
2023 a 2026 — a ideia de que o modelo é commodity e se troca por preço. Rompe também a fronteira
entre o que é da pessoa e o que é da plataforma: a memória mistura contexto pessoal, contexto do
empregador e contexto do cliente, e nenhuma das três partes tem hoje instrumento para separá-los.
**Sete de sete produtos travam o usuário** no teste de julho de 2026.

**2. Por que agora, e não há cinco anos.** Memória deixou de ser buffer de conversa e virou sistema
com arquitetura, benchmark e preço: LoCoMo, LongMemEval e, em 2026, BEAM em escalas de 1 e 10
milhões de tokens. E o acúmulo passou a ter volume: o comprimento médio de prompt quadruplicou
entre 2024 e 2025 (de 1,5 mil para 6 mil tokens), empurrado por fluxo agêntico. Há cinco anos não
havia acúmulo suficiente para haver o que perder.

**3. Onde está na difusão.** **Laboratório/demo** para a parte que importa. A memória *dentro* de
um produto é maioria (recusada em 4.0). A memória **portável, atribuída e auditável entre
fornecedores** tem um protocolo proposto em maio de 2026 — Merkle-DAG para evidência de
adulteração, controle de acesso por capacidade, serialização JSON com CBOR opcional, SDK Python
com 54 testes passando — e **nenhuma segunda implementação**. Isso é demo. Confiança baixa em toda
a cadeia derivada, por regra.

**4. O que ainda falta acontecer.** Um formato que o concorrente leia de verdade (simetria de
importação, não botão de exportar); uma decisão — judicial ou regulatória — sobre de quem é a
memória; e uma medição honesta de quanto a memória de fato vale, já que o MemDelta mostra o ganho
evaporando sob controle.

**Quem bloqueia, e como.** A plataforma, diretamente e por construção: exportar a memória é
exportar o fosso. O bloqueio aqui não é sutil — é o modelo de negócio.

### 4.4 Raiz 4 — O esquecimento vira requisito de engenharia, e a memória vira superfície de ataque persistente

> Registrar é a metade fácil. A metade difícil é provar que apagou — e garantir que o que está lá
> foi você quem escreveu.

**1. O que ela rompe.** Rompe o inventário de dados pessoais como instrumento, porque quem escreve
a memória é o agente e o inventário não sabe que aquilo existe — "você não pode apagar o que não
sabe que o agente guardou". Rompe também a premissa de que memória é benigna: o *Trojan Hippo*
mostra payload dormente sobrevivendo a **100 sessões benignas** com 85% a 100% de sucesso, e o
MINJA mostra que isso é feito por **usuário comum, sem privilégio**. E rompe a fronteira entre log
transacional e artefato de memória derivada — duas coisas com regimes jurídicos opostos guardadas
no mesmo lugar.

**2. Por que agora, e não há cinco anos.** Memória persistente virou padrão de produto (ferramenta
de memória lançada em setembro de 2025; Dreaming V3 em junho de 2026, reescrevendo sozinho); o
apagamento virou prioridade de fiscalização — 32 autoridades europeias abriram ação coordenada
para verificar se as organizações **conseguem provar** que apagam, com achados previstos para
início de 2026; e a ADMT da Califórnia entra em vigor em 01/01/2027. Nada disso existia em 2021,
quando "memória" era o histórico da janela.

**3. Onde está na difusão.** **Laboratório → produto de nicho.** As defesas existem no papel — os
autores do Trojan Hippo reduzem o ataque para 0–5% com quatro defesas inspiradas em princípios
básicos de segurança, mas registram que "o deployment eficaz no mundo real permanece um desafio
aberto" por causa do custo em utilidade. A detecção forense chega a **AUC 0,9904**, mas o estudo
pré-registrado de acompanhamento (N = 4.360, 13 modelos) encontra **100% de falso positivo
condicional** ao gatilho e **24,7% a 52,6%** de falso positivo incondicional. Ou seja: existe,
não roda em produção.

**4. O que ainda falta acontecer.** Um modo de provar o esquecimento que uma autoridade aceite; um
regime que separe log de memória derivada; e uma defesa cuja taxa de falso positivo não obrigue a
desligá-la. O terceiro item é o mais duro, e é ele que mantém esta raiz em confiança média e não
alta.

**Quem bloqueia, e como.** O próprio time de produto. Apagar piora a métrica de personalização, e
proveniência obrigatória em cada item de memória custa latência e tokens. O bloqueio vem de
dentro, e não precisa de má-fé: basta o painel de retenção.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A avaliação de sistemas não determinísticos vira medição estatística contínua
    efeitos:
      - id: e1
        ordem: 1
        efeito: O critério de aceite de software com IA deixa de ser passou-no-teste e vira uma faixa de confiabilidade declarada
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Contratos de software com IA passam a especificar faixa de confiabilidade em vez de escopo funcional fechado
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Quem escreve requisito passa a redigir a tolerância a erro, e o número de falhas aceitáveis vira cláusula negociada
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A faixa de confiabilidade vira elemento visível de interface nos produtos de mídia com IA
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O público passa a exigir o número antes de usar, como hoje exige classificação indicativa
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: Mudar uma frase de prompt passa a exigir a mesma aprovação que mudar um esquema de banco
            sinal: medio
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: O prompt deixa de ser texto de produto e vira artefato regulado internamente, fora do alcance de quem escreve conteúdo
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O juiz-LLM vira infraestrutura crítica e herda o problema que deveria resolver, porque ninguém certifica o certificador
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Passa a ser exigido em contrato que o avaliador não seja do mesmo fornecedor do avaliado
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Um punhado de avaliadores independentes concentra o mercado e o custo da avaliação vira barreira de entrada para estúdio pequeno
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Benchmarks públicos passam por auditoria automatizada e alguns leaderboards são retirados por defeito de tarefa
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Publicar número de benchmark sem o log de execução passa a valer como resultado não reproduzível
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e2.3
            ordem: 2
            efeito: O custo de julgar cresce mais rápido que o de gerar e as equipes voltam a amostrar a avaliação
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e3
        ordem: 1
        efeito: Avaliar vira cargo com carreira e faixa salarial própria, e deixa de ser tarefa de quem constrói
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Quem avalia deixa de se reportar a quem entrega, e a separação vira desenho organizacional
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A separação entre construir e avaliar vira requisito de certificação e o time que acumula os dois papéis perde contrato público
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: O portfólio de quem se candidata a vaga de produto com IA passa a incluir uma suíte de avaliação, e não só telas
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: A formação em design de interação passa a ser cobrada por evidência de teste e não por peça acabada
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: A avaliação rigorosa exclui quem não pode pagá-la, e o estúdio pequeno passa a publicar sem número
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Consolida-se um piso barato de avaliação por execução determinística, e o juiz-LLM fica restrito ao topo do mercado
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A diferença entre avaliado por execução e avaliado por julgamento vira selo visível, e o segundo é lido como mais frágil
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A inconsistência entre execuções deixa de ser defeito e vira propriedade declarada do produto
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Rodar de novo vira primitiva de interface, e comparar execuções entra no fluxo do usuário
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O leitor passa a esperar ver as variantes descartadas, e a versão única publicada perde autoridade
                sinal: fraco
                prazo: 2036
                confianca: baixa
  - disrupcao: O rastro de execução deixa de ser artefato de depuração e vira prova
    efeitos:
      - id: e6
        ordem: 1
        efeito: O log de agente sai do orçamento de engenharia e entra no de conformidade, com retenção definida por lei
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Amostrar traces vira risco jurídico e a taxa recomendada hoje deixa de ser aceitável em domínio regulado
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O custo de guardar rastro integral empurra a arquitetura para menos passos de modelo, porque a conta do log escala com o número de passos
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: O contrato com quem fornece o modelo passa a incluir acesso ao rastro, e quem não entrega log perde contrato regulado
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Modelo sem exportação de rastro fica confinado ao uso não regulado, e o aberto ganha mercado por auditabilidade e não por qualidade
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Ter o rastro deixa de bastar e a pergunta vira se ele é suficiente para reconstruir a decisão
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Um padrão de suficiência de evidência é escrito por regulador, e não por fornecedor de ferramenta
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Quem projeta interação passa a instrumentar a intenção declarada do usuário, porque sem ela o rastro não reconstrói a decisão
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Replay determinístico vira requisito de compra em serviço financeiro e de saúde
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A parte não determinística do sistema é deliberadamente encolhida, e arquiteturas com menos modelo e mais código fixo ganham por serem replicáveis
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: O rastro passa a valer dinheiro na apólice, e a seguradora cobra mais de quem não consegue reconstruir o que o agente fez
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A custódia do rastro vira serviço vendido separado do modelo, por um terceiro que não é nem fornecedor nem cliente
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Quem custodia o rastro de muitos passa a saber o que todos automatizaram, e a custódia vira posição de poder informacional
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: O mesmo sistema passa a ter obrigação legal de guardar e de esquecer, e as duas ordens colidem
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O rastro passa a ser pseudonimizado na origem, e reconstruir a decisão exige uma chave que poucos têm
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A auditoria completa passa a depender de quem reúne as chaves, e a confiança se concentra no guardião da chave
                sinal: fraco
                prazo: 2036
                confianca: baixa
  - disrupcao: A memória vira ativo acumulado e o fornecedor vira insubstituível
    efeitos:
      - id: e10
        ordem: 1
        efeito: Trocar de fornecedor de IA deixa de custar uma chamada de API e passa a custar o que o sistema aprendeu
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: O tempo de uso vira argumento de venda, e a propaganda de IA muda de capacidade para acúmulo
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: A conta antiga ganha valor de revenda, como conta de jogo com anos de progresso, e surge transferência informal
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: Empresas passam a manter a memória fora do fornecedor, e o modelo vira peça substituível abaixo dela
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: O poder de mercado se desloca do modelo para o índice de contexto, e a disputa de plataforma muda de camada
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e10.3
            ordem: 2
            efeito: Quem trabalha com IA acumula memória que não é dele, e sair do emprego passa a significar perder o contexto profissional
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e10.3.1
                ordem: 3
                efeito: O contrato de trabalho passa a tratar a memória do agente como base de clientes, e quem sai não leva
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: A memória vaza entre contextos que a pessoa mantinha separados, como projetos, clientes e empregos
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Isolamento de memória por projeto vira recurso pago, e memória compartilhada vira o padrão do plano gratuito
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Administrar vários eus de contexto vira tarefa cotidiana, como administrar perfis hoje
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: Agência e freelancer passam a ter de provar que a memória de um cliente não alimentou o trabalho de outro
            sinal: fraco
            prazo: 2031
            confianca: media
      - id: e12
        ordem: 1
        efeito: A avaliação da própria memória se mostra frágil, e o ganho declarado pelo fornecedor não sobrevive a baseline controlada
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Comprador passa a exigir a medida em orçamento de token, e acurácia sem custo declarado deixa de ser aceita
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: A comparação entre fornecedores de memória passa a ser feita em custo por decisão correta, e não em porcentagem
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: Parte do mercado conclui que memória não compensa e volta ao contexto grande com cache, freando a camada de memória
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e13
        ordem: 1
        efeito: Anos de memória acumulada passam a valer mais que a troca de modelo, e a vantagem migra do modelo para o histórico
        sinal: fraco
        prazo: 2032
        confianca: baixa
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: Entrante sem histórico compra ou sintetiza memória, e nasce um mercado de contexto pronto
            sinal: fraco
            prazo: 2033
            confianca: baixa
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: Memória comprada injeta experiência que nunca aconteceu, e auditar a proveniência da memória fica tão importante quanto auditar dado de treino
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: A portabilidade de memória é imposta por lei antes de existir tecnicamente
        sinal: fraco
        prazo: 2032
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: O que se exporta é literalmente conforme e praticamente inútil, e a portabilidade legal não produz portabilidade real
            sinal: medio
            prazo: 2033
            confianca: media
  - disrupcao: O esquecimento vira requisito de engenharia e a memória vira superfície de ataque persistente
    efeitos:
      - id: e15
        ordem: 1
        efeito: O inventário de dados pessoais deixa de saber onde os dados estão, porque quem escreve a memória é o agente
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: A escrita de memória vira operação com esquema e titular declarado, e deixa de ser texto livre
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: A liberdade de o agente anotar o que achar útil é revogada em produto regulado, e a memória livre fica restrita ao uso pessoal
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e15.2
            ordem: 2
            efeito: O pedido de apagamento passa a exigir prova de execução, e a palavra do fornecedor deixa de bastar
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e15.2.1
                ordem: 3
                efeito: Provar o esquecimento vira um problema técnico próprio, com benchmark e fornecedores, como contraparte exata da observabilidade
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e16
        ordem: 1
        efeito: A memória vira o vetor de ataque que sobrevive ao fim da sessão
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: Cada item de memória passa a carregar origem e autoridade, e memória de fonte não confiável é lida mas não obedecida
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: A diferença entre o que o agente sabe e o que ele aceita como ordem vira elemento visível de interface
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e16.2
            ordem: 2
            efeito: A detecção de envenenamento passa a rodar sobre o rastro, e observabilidade e segurança viram o mesmo produto
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e16.2.1
                ordem: 3
                efeito: O falso positivo interrompe trabalho legítimo o bastante para as equipes desligarem a defesa, e desligar vira item de auditoria
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e16.3
            ordem: 2
            efeito: O usuário comum passa a carregar memória que pode ter sido escrita por terceiros, sem ter como conferir
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e17
        ordem: 1
        efeito: A memória que se reescreve sozinha transfere para o usuário o ônus de conferir o que a máquina concluiu sobre ele
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e17.1
            ordem: 2
            efeito: A tela que mostra o que o sistema concluiu sobre a pessoa vira peça editorial, com autoria e decisão de recorte
            sinal: medio
            prazo: 2029
            confianca: alta
            efeitos:
              - id: e17.1.1
                ordem: 3
                efeito: Conferir o próprio perfil inferido vira hábito, como conferir extrato, e discordar dele vira forma de reclamação
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e17.2
            ordem: 2
            efeito: Erro silencioso de memória produz dano sem rastro de causa, e a reclamação chega sem resposta possível para o porquê
            sinal: fraco
            prazo: 2030
            confianca: media
      - id: e18
        ordem: 1
        efeito: Uma parcela do público passa a preferir deliberadamente o agente que não lembra
        sinal: fraco
        prazo: 2031
        confianca: media
        efeitos:
          - id: e18.1
            ordem: 2
            efeito: Não-lembrar vira posicionamento de produto, como sem-rastreadores foi para navegador
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e18.1.1
                ordem: 3
                efeito: O produto sem memória perde em qualidade percebida e vira nicho caro, e privacidade volta a ser bem de quem pode pagar
                sinal: fraco
                prazo: 2036
                confianca: baixa
```

### 5.1 Os mecanismos — o que o bloco não consegue dizer

O YAML dá o esqueleto. O que segura cada efeito é o mecanismo: *porque o efeito pai faz X*. Aqui
estão, ramo a ramo, com a **classe de referência** que justifica cada prazo. Prazo sem classe de
referência é chute, e este mapa não tem nenhum.

**Ramo e1 — do teste ao intervalo.** `e1` acontece **porque** a métrica pass^k torna visível uma
lacuna que pass@1 escondia (61% → ~25% em τ-retail), e uma vez visível ela não pode voltar a ser
ignorada em contrato. `e1.1` deriva **porque** quem compra precisa de um número para escrever a
cláusula de aceite, e "funciona" deixou de ser um número. `e1.2` deriva **porque** a mesma lacuna
chega à tela: um produto que erra 3 em 10 e não diz isso gera reclamação que a equipe de suporte
não consegue responder — e a saída barata é declarar. `e1.3` deriva **porque** o gate de regressão
só protege se a mudança passar por ele, e já há gate: 52,4% rodam suíte offline.
*Classe de referência:* a passagem do SLA de disponibilidade — de promessa de marketing a cláusula
com crédito em fatura — levou de 1999 (primeiros SLAs de hosting) a ~2008 (SLA de nuvem com
crédito automático), cerca de nove anos. Contando de 2026, `e1.1` em 2031 é agressivo e `e1.1.1` em
2034 é o prazo realista para a prática virar ofício.

**Ramo e2 — quem certifica o certificador.** `e2` acontece **porque** o juiz-LLM é o único
mecanismo barato o bastante para avaliar continuamente, e a medição de sua concordância
(κ = 0,567 contra κ = 0,835 humano) tornou público que ele é o elo fraco. `e2.1` deriva **porque**
o conflito de interesse já está nomeado: o fornecedor é réu e autor da prova. `e2.2` deriva
**porque** auditar benchmark ficou barato (menos de US$ 15 por 50 tarefas) e quem audita ganha
reputação ao encontrar defeito. `e2.3` é a **retroação deste ramo**: julgar custa tokens por turno
e as plataformas cobram por score — e o que é caro volta a ser amostrado.
*Classe de referência:* a separação entre auditor e consultor. O Securities Exchange Act é de
1934; a proibição de o auditor vender consultoria ao auditado só veio com a Sarbanes-Oxley de
2002, e precisou de um colapso público (Enron, 2001) para sair. Sem evento equivalente, `e2.1` em
2032 já supõe **um** escândalo de avaliação no caminho. Com ele, pode vir antes; sem ele, não vem.

**Ramo e3 — o avaliador como cargo.** `e3` acontece **porque** a função ficou distinta o bastante
para ter faixa salarial própria (US$ 230 mil a US$ 850 mil, dependendo do nível e do tipo de
empresa; ~5× a velocidade de contratação de 2024) — e "avaliação virou título de cargo em 18
meses". **Este efeito passa no filtro dos proibidos** do método: não é "surge uma nova profissão",
é um cargo com nome (*AI Evals Engineer*), faixa medida e empregadores nomeados.
*Classe de referência:* o SRE. O livro do Google é de 2016; o cargo com faixa salarial própria e
mercado líquido de contratação consolidou-se por volta de 2019–2020, três a quatro anos. Daí
`e3` em 2028 e a separação organizacional (`e3.1`) em 2031.

**Ramo e4 — quem perde.** `e4` acontece **porque** avaliação é cobrada por volume — por score, por
GB, por MB — e o custo por unidade não cai com o tamanho do estúdio. `e4.1` deriva **porque** há um
substituto barato e honesto: a avaliação por execução determinística, que é como o SWE-bench usa
teste unitário como verdade e dispensa juiz. E há o aviso: o barato *ruim* (heurística de
substring, κ = 0,049) é indistinguível de sorteio.
*Classe de referência:* certificação de segurança em software (PCI-DSS, 2004). Levou cerca de seis
anos para produzir um nível "auto-avaliação" acessível ao pequeno comerciante. Daí `e4.1` em 2031.

**Ramo e5 — a inconsistência declarada.** `e5` acontece **porque** a não-determinação não é
consertável no cliente: ela vem da dependência de tamanho de lote nos kernels de redução do
servidor, e o próprio replay determinístico trata a chamada do modelo como a entrada irredutível.
Se não dá para eliminar, resta declarar. `e5.1` deriva **porque** declarar sem oferecer a ação
correspondente é frustrante: quem vê "7 em 10" quer o botão de rodar de novo.
*Classe de referência:* o "regenerate response" já é primitiva de interface desde 2022 — o que
muda aqui não é o botão, é a **comparação** entre execuções virar parte do fluxo. Comparação de
versões levou do Track Changes (1997) ao diff visual como hábito de usuário não técnico
(~2010, Google Docs), treze anos; contando da normalização do trace em ~2026, 2030 é o piso e
`e5.1.1` em 2036 é o teto.

**Ramo e6 e e7 — o rastro como prova.** `e6` acontece **porque** o artigo 12 obriga capacidade de
registro automático e o artigo 26 obriga retenção mínima de seis meses pelo *deployer* — e uma
obrigação com data muda o orçamento antes de a data chegar. `e6.1` deriva **porque** amostragem de
1% a 5% e reconstrução de decisão específica são incompatíveis por aritmética. `e7` deriva
**porque** o DEMM-Bench já demonstrou a distância entre presença e suficiência (75% de
superestimação), e essa distância é exatamente onde uma auditoria fracassa. `e7.1.1` é o efeito
mais relevante para o público deste mapa: **reconstruir a decisão exige saber o que o usuário
queria**, e isso não está em nenhum log de sistema — quem projeta interação vai ter de instrumentar
intenção declarada.
*Classe de referência:* o gravador de voo. Recomendado em 1958, obrigatório nos EUA em 1967 — nove
anos entre a ideia e a obrigação, e mais uma década até a prática de investigação amadurecer.
Contando de 2026: obrigação em 2027–2028 (já datada), prática madura em 2034–2036. É por isso que
`e7.1.1` está em 2034 e não em 2029.

**Ramo e8 — o seguro.** `e8` acontece **porque** a seguradora precifica o que consegue verificar, e
já está fazendo perguntas de subscrição específicas sobre governança de IA, com exclusões e
sublimites em renovação. Quem não reconstrói paga mais — não por punição, por incerteza atuarial.
`e8.1` deriva **porque** custódia por terceiro é o padrão histórico quando a prova precisa ser
independente das duas partes.
*Classe de referência:* o cartório e, mais recentemente, o *escrow* de código-fonte em contrato de
software corporativo — prática estabelecida ao longo dos anos 1990. Cerca de dez anos do
surgimento à normalidade contratual; `e8.1` em 2032 assume o mesmo ritmo.

**Ramo e9 — a colisão.** `e9` acontece **porque** duas obrigações incidem sobre o mesmo objeto:
guardar por seis meses (AI Act art. 26) e apagar sem demora indevida (GDPR art. 17, prazo de um
mês pelo art. 12(3)). Não há truque: ou se separa o que é log do que é dado pessoal derivado, ou
se descumpre uma das duas. `e9.1` é a saída de engenharia; `e9.1.1` é o preço dela — a
concentração da confiança em quem guarda a chave.

**Ramo e10 — o custo de sair.** `e10` acontece **porque** a memória é o único componente do sistema
que não se reproduz comprando de novo: o modelo se troca, o prompt se reescreve, o histórico não
se refaz. `e10.2` deriva **porque** a defesa racional do comprador é deslocar a memória para fora
do fornecedor — e já há artefato nessa direção (motor de memória aberto para auto-hospedagem;
memória com semântica de git). `e10.3` é **quem perde**: a pessoa que trabalha. A memória
profissional que ela constrói é escrita numa conta corporativa; sair é começar do zero, e isso não
tem hoje nenhum instrumento contratual.
*Classe de referência:* portabilidade numérica. Mandada nos EUA em 1996, implementada em 2003 —
sete anos entre a obrigação e o funcionamento. Aplicada aqui, `e14` (a lei chega) em 2032 e `e14.1`
(a lei não resolve) em 2033 são coerentes: **o intervalo entre a obrigação e a portabilidade real é
o efeito, não o erro.**

**Ramo e11 — o vazamento entre contextos.** `e11` acontece **porque** a memória cruza sessões por
padrão e o Dreaming V3 sintetiza sem pedir licença; o isolamento é a exceção, não a regra. `e11.1`
deriva **porque** isolamento custa infraestrutura e é, portanto, candidato natural a recurso pago —
e o que é pago define o que é padrão no plano gratuito. `e11.2` deriva **porque** conflito de
interesse entre clientes de uma mesma agência é matéria contratual antiga, e agora tem um objeto
técnico novo.
*Classe de referência:* a *chinese wall* em banco de investimento (formalizada após 1968 nos EUA,
consolidada nos anos 1990 em resposta a escândalos de informação privilegiada). Cerca de vinte
anos; aqui o prazo é menor porque o contrato chega antes da lei.

**Ramo e12 — a memória medida.** `e12` acontece **porque** o MemDelta e as medições independentes
já publicaram a diferença entre o número autorreportado e o número sob controle (32,4% contra
93,4% no caso mais extremo). `e12.1` deriva **porque** o comprador que leu isso passa a exigir a
medida em orçamento de token — "acurácia sem orçamento de token é meio placar". `e12.2` é a
**retroação deste ramo**: se o ganho não se sustenta e o cache está barato, volta-se ao contexto
grande. A conta é explícita: guardar tudo ganha enquanto o token de entrada em cache custar menos
que ~US$ 0,55 por milhão; no DeepSeek, guardar tudo sai a ~US$ 0,0063 por turno contra ~US$ 0,0196
do preset que sumariza. O contra-argumento que segura a memória é o tempo até o primeiro token:
~22 s abaixo de 100 mil tokens de entrada contra ~76 s acima de 800 mil.

**Ramo e13 — o histórico como vantagem.** Este é o efeito mais fraco do mapa e está marcado como
tal (`sinal: fraco`, `confianca: baixa`). Ele acontece **porque** acúmulo produziria vantagem
composta — mas o MemDelta mostra o ganho evaporando sob baseline controlada, o que ataca o
mecanismo na raiz. Mantive-o porque a **percepção** de vantagem já move contrato mesmo sem a
vantagem existir; retirei a confiança.

**Ramo e15 e e16 — apagar e ser atacado.** `e15` acontece **porque** o inventário de dados foi
desenhado para sistemas onde o humano decide o que se escreve, e o agente decide sozinho. `e15.2`
deriva **porque** 32 autoridades europeias já escolheram justamente "você consegue provar que
apagou?" como prioridade de fiscalização. `e16` acontece **porque** a memória é lida como contexto
confiável e escrita por qualquer fonte que toque o agente — e a medição existe (85–100% de sucesso
sobrevivendo a 100 sessões). `e16.1` deriva **porque** a defesa que funciona é a de proveniência, e
ela custa. `e16.2.1` é o efeito mais desconfortável: a detecção **funciona** (AUC 0,9904) e
**é inutilizável** (24,7% a 52,6% de falso positivo incondicional; 100% condicional ao gatilho) —
e uma defesa que interrompe trabalho legítimo é desligada. **A decisão de desligar vira, ela
própria, item de auditoria.**

**Ramo e17 — o ônus da conferência.** `e17` acontece **porque** o sistema passou a reescrever a
memória sozinho e a checagem ficou com a pessoa: "o sistema se corrige sozinho; confirmar que
aquelas correções estavam certas é com você". `e17.1` é o efeito mais diretamente do público deste
mapa — **alguém tem de projetar a tela do perfil inferido**, e isso é decisão editorial: o que
mostrar, como nomear, o que omitir. `e17.2` é o custo: erro silencioso não deixa rastro de causa.
*Classe de referência:* o extrato bancário e, mais perto, o painel "Sua atividade" do Google (2016)
até virar hábito verificável (~2022): seis anos. Daí `e17.1.1` em 2034 — porque hábito cultural é
mais lento que recurso de produto.

**Ramo e18 — a reação.** `e18` acontece **porque** toda tecnologia de acúmulo produz uma parcela
que recusa o acúmulo, e o objeto da recusa já está nomeado publicamente (memória como "pesadelo de
privacidade"). `e18.1.1` é o desfecho amargo e provável: privacidade vira bem posicional.
*Classe de referência:* o navegador sem rastreadores. Do Do Not Track (2009) ao bloqueio por padrão
como argumento de venda (Safari ITP 2017, Firefox ETP 2019): oito a dez anos. Daí `e18.1` em 2032.

### 5.2 Cobertura STEEP e quem perde

| Dimensão | Efeitos | Observação |
|---|---|---|
| **Social** | e11.1.1, e17.1.1, e18, e18.1.1 | administrar múltiplos "eus" de contexto; conferir o perfil inferido como hábito; privacidade como bem posicional |
| **Tecnológico** | e5, e6.1.1, e7.2.1, e10.2.1, e15.1, e16.1 | menos passos de modelo por causa do custo do log; proveniência obrigatória na memória |
| **Econômico** | e1.1, e2.1.1, e4, e8, e10.1.1, e12.1.1, e13.1, e14.1 | concentração em poucos avaliadores; prêmio de seguro; mercado de contexto pronto |
| **Ecológico** | — | **categoria vazia, e registro isso.** Não encontrei mecanismo específico que ligue esta raiz a efeito ambiental além do óbvio "mais computação, mais energia", que serve para qualquer tema de IA e por isso foi recusado pelo teste de especificidade. A única candidata honesta seria o custo energético de reter rastro integral, mas não achei número que a sustentasse. Fica como lacuna declarada. |
| **Político/regulatório** | e6, e7.1, e9, e14, e15.2, e3.1.1 | quem escreve o padrão de suficiência; guardar × apagar; portabilidade imposta |

**Quem perde, explicitamente** — porque mapa que só lista quem ganha está incompleto:

- **O estúdio pequeno e o desenvolvedor independente** (`e4`, `e2.1.1`): avaliação cobrada por
  volume e avaliador independente concentrado viram barreira de entrada.
- **Quem trabalha com IA** (`e10.3`, `e10.3.1`): acumula memória profissional que pertence ao
  empregador e sai do emprego sem ela.
- **O usuário comum** (`e16.3`, `e17.2`): carrega memória que pode ter sido escrita por terceiros e
  sofre erro silencioso sem rastro de causa.
- **Quem escreve conteúdo dentro de produto regulado** (`e1.3.1`, `e15.1.1`): perde a liberdade de
  mexer no prompt e na anotação livre.
- **O Brasil e quem projeta a partir daqui** (seção 3.5): herda a definição de suficiência escrita
  em outro lugar, e a herda tarde — o PL 2338 está sem parecer desde maio de 2025.

### 5.3 Cruzamentos

**Convergência 1 — observabilidade e segurança viram o mesmo produto.** Dois ramos de raízes
diferentes chegam ao mesmo lugar: `e16.2` (a detecção de envenenamento roda sobre o rastro) vem da
raiz 4, e `e6.2`/`e7.2` (o rastro vira requisito de compra) vêm da raiz 2. **O trace é a única
superfície onde ataque persistente é detectável e onde a decisão é reconstruível.** Quem vende
observabilidade em 2036 vende segurança, e vice-versa — a compra da Arize pela Dynatrace já é um
primeiro movimento nessa direção. *Este é o achado mais valioso do mapa.*

**Convergência 2 — a proveniência é a mesma peça nos dois problemas.** `e16.1` (item de memória
carrega origem e autoridade, raiz 4) e `e13.1.1` (auditar de onde veio a memória comprada, raiz 3)
pedem exatamente a mesma estrutura de dados — a que o protocolo de memória portável já propõe com
Merkle-DAG. **Portabilidade e defesa contra envenenamento exigem o mesmo artefato.** Isso é raro e
é uma boa notícia: um investimento resolve dois problemas.

**Retroalimentação 1 — o log encolhe o agente.** `e6.1.1` (o custo do rastro empurra para menos
passos de modelo) realimenta a raiz 1: menos passos e mais código fixo significam **menos**
não-determinação, e portanto menos necessidade de avaliação estatística. O ciclo é negativo: a
infraestrutura de confiança, ao ficar cara, reduz a superfície que ela precisa cobrir. O mesmo
aparece em `e7.2.1`.

**Retroalimentação 2 — a memória fraca desfaz o lock-in.** `e12.2` (parte do mercado volta ao
contexto grande com cache) enfraquece diretamente a raiz 3: se a memória não compensa, não há
ativo, não há lock-in e `e10`, `e13` e `e14` perdem força. **O contra-argumento da raiz 3 está
dentro do próprio mapa**, e é por isso que `e13` está em confiança baixa.

**Contradição 1 — guardar × apagar.** `e6` (retenção legal mínima) e `e15.2` (prova de apagamento)
não podem ser satisfeitos simultaneamente sobre o mesmo objeto. Não resolvo: registro os dois. **O
que decide entre eles é a classificação jurídica do artefato** — se a memória derivada for
considerada log de operação, vence a retenção; se for considerada dado pessoal, vence o
apagamento. Essa classificação ainda não foi feita em nenhuma jurisdição que eu tenha encontrado.

**Contradição 2 — declarar a incerteza × vender confiança.** `e1.2` (a faixa de confiabilidade vai
para a interface) e `e10.1` (o tempo de uso vira argumento de venda) empurram a comunicação de
produto em direções opostas: uma expõe o erro, a outra vende o acúmulo como segurança. Quem decide
entre as duas é o departamento jurídico, não o de design — e por isso o mais provável é que a
faixa apareça em letra pequena e o acúmulo em letra grande.

## 6. Sinais fracos e wildcards

### Sinais fracos

**SF1 — a palavra "suficiência" entrando no vocabulário regulatório.** *Onde foi visto:* o
DEMM-Bench (arXiv, 30/05/2026) mede se o registro é suficiente para reconstruir uma propriedade da
decisão, e não se ele existe — e encontra 75% de superestimação em bases que só têm trace. *O que
mudaria:* se "suficiência de evidência" entrar num ato de execução da Comissão Europeia sobre o
artigo 12, o mercado inteiro de observabilidade tem de reinstrumentar, porque ninguém instrumenta
hoje pensando em reconstrução. *Sinal observável de crescimento:* a primeira minuta de padrão
técnico (CEN-CENELEC ou ato de execução) que use "sufficiency" em vez de "logging capability".

**SF2 — memória com semântica de versionamento.** *Onde foi visto:* dois produtos preservam
estrutura e proveniência — um com formato próprio, outro com histórico de git —, e ambos reprovam
no teste de simetria por serem implementação única. *O que mudaria:* se um **segundo** fornecedor
implementar o mesmo formato, a portabilidade de memória deixa de ser tese e vira fato, e a raiz 3
se inverte: o lock-in vira temporário. *Sinal observável:* uma segunda implementação independente
de qualquer formato de memória, lendo o que a primeira escreveu.

**SF3 — o comitê de juízes pior que o juiz único.** *Onde foi visto:* AgentProp-Bench — ensemble de
três LLMs em κ = 0,432 contra κ = 0,567 do melhor juiz único. *O que mudaria:* a intuição corrente
("junte vários modelos para julgar") está difundida e pode estar errada. Se replicar, toda a
arquitetura de avaliação por comitê cai, e o caminho passa a ser juiz único calibrado + análise de
log. *Sinal observável:* uma replicação independente em outro domínio.

**SF4 — a arena com dinheiro real esfriou.** *Onde foi visto:* o Alpha Arena da Nof1 deu a cada
modelo **US$ 10 mil reais** em perpétuos de cripto na Hyperliquid, com o mesmo prompt para todos.
Resultado da temporada 1: Qwen3 Max +22,3%, DeepSeek V3.1 +4,89%, Claude Sonnet 4.5 −30,81%,
Grok 4 −45,3%, Gemini 2.5 Pro −56,71%, GPT-5 −62,66%. **Mas em agosto de 2026 o próprio site
informava que os modelos não estavam mais rodando, e não houve temporada 2.** *O que mudaria:* uma
segunda temporada com capital maior, ou — muito mais importante — um regulador ou comprador
aceitando resultado de arena como evidência de aptidão. *Sinal observável:* qualquer processo de
compra que cite desempenho em arena com consequência financeira como critério. **Registro que este
sinal está hoje mais fraco do que estava em 2025**, ao contrário do que se esperaria.

**SF5 — a defesa que ninguém liga.** *Onde foi visto:* a assinatura forense de envenenamento de
memória atinge AUC 0,9904, e o estudo pré-registrado de acompanhamento encontra 24,7% a 52,6% de
falso positivo incondicional. *O que mudaria:* se uma equipe publicar que desligou a defesa e por
quê, isso estabelece precedente e `e16.2.1` acelera muito. *Sinal observável:* o primeiro
*post-mortem* público de uma equipe desligando detecção de envenenamento por falso positivo.

### Wildcards

**W1 — trilha de auditoria obrigatória para toda decisão de IA em serviço público.** *Mecanismo:*
um caso de dano em concessão de benefício social mediada por agente, com repercussão, leva um
tribunal de contas ou o Ministério Público a exigir reconstrução da decisão — e a descobrir que ela
não é reconstruível. A exigência sai por decisão administrativa, sem lei nova, e alcança todo
fornecedor do setor público. *Por que é improvável:* exige o alinhamento de um dano visível, uma
vítima identificável e um órgão disposto a agir antes da lei. *O que faria com o mapa:* acelera
`e6`, `e7.1` e `e8` em três a cinco anos e torna `e6.2.1` (modelo sem exportação de rastro sai do
mercado regulado) quase certo. *Sinal precoce:* um tribunal de contas brasileiro incluindo
"registro de operação de sistema de IA" num achado de auditoria de contrato.

**W2 — vazamento em massa de memórias inferidas.** *Mecanismo:* memória não é o que a pessoa
digitou; é o que o sistema **concluiu** sobre ela. Um vazamento de base de memórias expõe
inferências — sobre saúde, finanças, relações — que a pessoa nunca escreveu e talvez não soubesse
que existiam. O dano não tem precedente porque o objeto não tinha precedente. *Por que é
improvável:* exige que a memória esteja centralizada e mal protegida ao mesmo tempo — e a
centralização é justamente o que está sob pressão regulatória. *O que faria com o mapa:* `e18`
(preferir o agente sem memória) sai de sinal fraco e vira movimento de massa; `e15.1` (memória com
esquema e titular) vira obrigação em dois anos em vez de cinco. *Sinal precoce:* a primeira ação
judicial cujo objeto seja o **conteúdo inferido** de uma memória, e não a conversa original.

**W3 — uma decisão judicial de que a memória é do usuário.** *Mecanismo:* um tribunal aplica ao
acervo de memória a lógica da portabilidade de conta bancária ou de número de telefone, e determina
exportação em formato legível por concorrente. *Por que é improvável:* a memória não tem, hoje,
formato canônico para o qual exportar — a decisão seria juridicamente válida e tecnicamente
inexequível, que é exatamente o cenário de `e14.1`. *O que faria com o mapa:* colapsa `e10`,
`e13` e boa parte da raiz 3; e força SF2 a acontecer por decreto. *Sinal precoce:* uma decisão de
consumidor, em qualquer jurisdição, ordenando exportação de memória de assistente.

**W4 — o contexto barato o bastante para dispensar memória.** *Mecanismo:* uma queda de uma ordem
de grandeza no custo de entrada em cache, combinada com resolução do "lost in the middle", torna
economicamente racional reenviar o histórico inteiro a cada turno — e a camada de memória some.
*Por que é improvável:* o custo escala linearmente com a janela e a degradação por posição é
estrutural (acurácia caindo de ~75% para meados de 40% no meio do contexto, abaixo de não dar
documento nenhum), além do tempo até o primeiro token saltando de ~22 s para ~76 s. *O que faria
com o mapa:* apaga a raiz 3 inteira e metade da raiz 4. *Sinal precoce:* preço de token em cache
abaixo de US$ 0,10 por milhão num fornecedor de fronteira, com janela acima de 10 milhões e sem
degradação medida por posição.

## 7. Contra o próprio mapa

Esta seção é o relato da bateria, feita **sobre o mapa já pronto**, com as alterações aplicadas.
**A bateria derrubou coisa em todas as quatro raízes.**

### 7.1 Pré-mortem — é 2036 e este mapa se mostrou errado. Por quê?

**Razão 1 (a mais provável): a regulação escorregou de novo e nada foi exigido.** O AI Act já foi
adiado uma vez; as datas que uso (02/12/2027 e 02/08/2028) são as da fonte oficial aberta hoje, e
não as de agosto de 2026 que três fontes secundárias afirmavam. Se escorregar de novo, a raiz 2
perde o motor: sem obrigação com data, o log continua sendo decisão de engenharia e a amostragem
continua. *Efeito atingido:* `e6` — mantido, mas **prazo 2027 → 2028**, e a confiança de `e6.2` foi
mantida em média justamente porque depende de contrato regulado que pode não chegar.

**Razão 2: a memória não vale o que se diz, e o lock-in nunca se forma.** O MemDelta é a evidência
contra a raiz 3 *dentro do próprio mapa*: RAG verbatim empata com contexto cheio (p = 0,34), a
auto-memória do agente fica abaixo de recuperação básica, e há caso de empate a 50× o custo. Se
isso generalizar, ninguém acumula nada que valha a pena reter. *Efeito atingido:* `e13` —
**confianca media → baixa** e **sinal medio → fraco**.

**Razão 3: a avaliação é capturada por quem é avaliado, e nada muda.** A separação
avaliador/avaliado exigiu, na contabilidade, um colapso público. Sem evento equivalente, `e2.1`
não acontece e o resto do ramo cai junto. *Efeito atingido:* `e2.1` — **confianca media mantida,
mas prazo 2030 → 2032**, empurrado pela classe de referência (SOX levou dezoito anos após a lei de
base, e precisou de um escândalo).

### 7.2 Extrapolação linear — o que é só "mais do mesmo, maior"

Três efeitos foram marcados e tratados:

- `e1.3` (mudar prompt exige aprovação): era extrapolação direta de "já existe gate de regressão em
  52,4% dos times". Ganhou mecanismo de não-linearidade — o gate só vira obrigatório quando a
  mudança de prompt tiver consequência **contratual**, o que depende de `e1.1`. Mantido, com o
  vínculo declarado.
- `e6.1` (amostragem vira risco): era "mais conformidade". Ganhou o mecanismo aritmético — 1%–5% de
  retenção e reconstrução de uma decisão específica são incompatíveis, não caros. Mantido.
- `e11.1` (isolamento vira recurso pago): **é** extrapolação linear de precificação de SaaS e serve
  para qualquer tema. Sobreviveu só porque tem objeto específico (memória) e mecanismo de custo
  real (instância isolada por projeto). **Rebaixado: sinal medio mantido, mas foi o candidato mais
  próximo de ser cortado.**

### 7.3 Velocidade de adoção — prazos confrontados com a classe de referência

- `e1.1` (contrato com faixa de confiabilidade) em 2031: a classe do SLA com crédito em fatura leva
  ~9 anos. De 2026, daria 2035. Mantive 2031 **porque a obrigação regulatória chega antes e força o
  contrato**, mas **rebaixei a confiança: alta → media**.
- `e2.1` em 2032: empurrado de 2030 para 2032, pela razão 3 acima.
- `e16.1` (proveniência obrigatória na memória) em 2031: a classe de referência é a assinatura de
  e-mail (SPF 2006 → DMARC como prática dominante ~2016), dez anos. De 2026 daria 2036. Mantive
  2031 para a **adoção em produto regulado**, não para a adoção geral — e declarei isso aqui.
  **Prazo empurrado de 2030 → 2031.**
- `e17` (o ônus da conferência) em 2027: é o único prazo abaixo de três anos no mapa, e ele já
  aconteceu — o Dreaming V3 está em rollout desde 04/06/2026. Mantido com sinal forte.

### 7.4 A raiz que não acontece — o que sobra do mapa?

- **Se a raiz 1 não acontecer** (avaliação continua sendo teste binário): sobram as raízes 2, 3 e 4
  praticamente intactas — o rastro continua virando prova por obrigação legal, e a memória continua
  sendo ativo e alvo. Perdem-se `e1`–`e5` e seus filhos, 14 efeitos.
- **Se a raiz 2 não acontecer** (a regulação escorrega e o log continua opcional): as raízes 1, 3 e
  4 sobrevivem, mas `e16.2` (detecção sobre o rastro) fica sem substrato, e a Convergência 1 —
  o achado mais valioso — **desaparece**. Esta é a raiz de cuja existência mais depende o resto.
- **Se a raiz 3 não acontecer** (memória nunca vira ativo, MemDelta generaliza): as raízes 1 e 2
  sobrevivem inteiras; a raiz 4 sobrevive **parcialmente** — o ataque persistente continua
  existindo, porque não depende de a memória ser valiosa, só de ela ser lida.
- **Se a raiz 4 não acontecer** (esquecimento nunca vira requisito e o ataque não é explorado em
  escala): as demais sobrevivem; perde-se a metade "quem perde" do mapa.

**Conclusão do teste:** as quatro são separáveis, mas não simétricas. As raízes 3 e 4 dividem o
objeto (memória) e por isso foram testadas explicitamente uma contra a outra: a raiz 3 é sobre
**valor e propriedade** da memória, a raiz 4 é sobre **integridade e apagamento** — e cada uma
sobrevive sem a outra, como o parágrafo acima mostra. Não são uma raiz disfarçada em duas. Mas
registro a proximidade: um crítico pode legitimamente juntá-las, e o mapa ficaria com três raízes.

### 7.5 Suposições escondidas que o mapa assume

1. **Que o custo de inferência não despenca.** Se despencar, W4 acontece e a raiz 3 evapora.
2. **Que a regulação europeia continua sendo a régua global.** Se a Europa recuar e os EUA não
   preencherem, a raiz 2 perde a data e vira contratual apenas.
3. **Que a memória continua sendo texto legível por humano.** Se migrar para representação
   puramente vetorial, `e15.1` (esquema e titular) fica tecnicamente mais difícil e `e17.1` (a tela
   do perfil inferido) fica **impossível** — não há o que mostrar. *Esta é a suposição mais frágil e
   a mais consequente para o público deste mapa.* Ela merecia ser um wildcard e não é; registro a
   dívida.
4. **Que agentes continuam dando muitos passos.** Se a arquitetura encolher (`e6.1.1`, `e7.2.1`), o
   volume de rastro cai e a economia da observabilidade muda.
5. **Que existirá alguém com incentivo para auditar.** O mapa assume auditor independente sem
   demonstrar de onde vem a receita dele.

### 7.6 Viés do autor

Dois, e ambos empurram na mesma direção.

**O viés de quem escreve ferramenta.** O autor deste mapa opera um sistema pessoal de decantação de
decisões — registro em arquivo, índice gerado, memória entre sessões — e tem interesse pessoal na
tese de que "memória e registro são a infraestrutura que importa". Isso torna suspeitos,
especificamente, `e10.2` (empresas mantêm a memória fora do fornecedor) e `e17.1` (a tela do perfil
inferido vira peça editorial): os dois descrevem algo que o autor **gostaria** que acontecesse.
Mantive ambos, com confiança média, e nomeio o viés aqui.

**O viés da máquina que escreve.** Eu sou um agente com memória, observabilidade e avaliação; este
tema descreve a minha própria infraestrutura. Há um incentivo estrutural para eu tratar como
importante o que me constitui. O efeito mais suspeito por essa razão é `e13` (memória de anos vale
mais que trocar de modelo) — que é, não por acaso, o único efeito de 1ª ordem com confiança baixa
depois da bateria.

### 7.7 Calibração

Confiança **alta**: 10 de 18 na 1ª ordem (56%), 2 de 33 na 2ª (6%), 0 de 27 na 3ª (0%). Confiança
**baixa**: 1 na 1ª, 2 na 2ª, 27 na 3ª (100%). A distribuição cai com a ordem, como deve. Nenhum
efeito de 3ª ordem ficou com confiança alta. Todos os prazos de 1ª e 2ª ordem estão dentro do
horizonte de 2036; **nenhum efeito de 3ª ordem passou do horizonte** — seis chegam exatamente em
2036, e isso é deliberado: são os efeitos de institucionalização, que exigem a década inteira.

### 7.8 Registro de alterações — antes → depois

| id | antes | depois | por quê |
|---|---|---|---|
| `e1.1` | confianca: **alta** | confianca: **media** | a classe de referência do SLA com crédito em fatura leva ~9 anos; o prazo de 2031 só se sustenta com a regulação forçando, e isso é incerto |
| `e2.1` | prazo: **2030** | prazo: **2032** | a separação auditor/auditado exigiu 68 anos e um colapso público na contabilidade; 2030 supõe que aconteça sem evento gatilho |
| `e2.3` | prazo: **2029** | prazo: **2030** | a retroação de custo só morde depois que a avaliação contínua estiver disseminada, o que `e2` só entrega em 2029 |
| `e3.2` | confianca: **media** | confianca: **baixa** | falha parcial no teste da causa solta — portfólio de contratação muda por muitas causas além desta raiz; mantido pelo mecanismo de contratação por evidência de entrega, mas rebaixado |
| `e6` | prazo: **2027** | prazo: **2028** | a aplicação do Anexo III é 02/12/2027; o deslocamento de orçamento é consequência, não simultâneo |
| `e13` | sinal: **medio**, confianca: **media** | sinal: **fraco**, confianca: **baixa** | o MemDelta ataca o mecanismo: sob baseline controlada o ganho de memória evapora (47,2% × 49,8%, p = 0,34) |
| `e16.1` | prazo: **2030** | prazo: **2031** | a classe de referência (SPF → DMARC) leva dez anos; 2031 já é otimista mesmo restringindo a produto regulado |
| `e17.2` | sinal: **medio** | sinal: **fraco** | não achei artefato verificável de dano por erro silencioso de memória; é inferência, e `sinal` conta artefato, não plausibilidade |
| *removido* | "reguladores criam uma categoria jurídica nova para sistemas de memória" | — | efeito proibido pelo método: regulador genérico, sem nome e sem mecanismo. Vai para a seção 12 |
| *removido* | "surge a profissão de curador de memória organizacional" | — | efeito proibido pelo método: "surge uma nova profissão" sem nome, sem faixa, sem empregador. Vai para a seção 12 |
| *removido* | "o mercado de trabalho de QA se reorganiza" | — | genérico; serve para qualquer tema. Substituído por `e3` e `e3.1`, que têm nome de cargo e faixa medida. Vai para a seção 12 |
| *removido* | "cursos de computação reorganizam o currículo em torno de avaliação" | — | efeito proibido: curso sem nome. Substituído por `e3.2.1`, que tem ator (candidato/recrutador) e mecanismo | 

**Cota cumprida:** raiz 1 → `e1.1` rebaixado, `e2.1` empurrado, `e3.2` rebaixado, três efeitos
removidos. Raiz 2 → `e6` empurrado. Raiz 3 → `e13` rebaixado em sinal e confiança. Raiz 4 →
`e16.1` empurrado, `e17.2` rebaixado.

## 8. O que a máquina errou

Eu sou a máquina. O que segue é sobre esta rodada, não sobre IA em geral.

**1. Eu ia escrever que o artigo 12 do AI Act vale desde agosto de 2026 — e está errado.** Três
resultados de busca afirmavam isso com convicção, um deles no próprio título ("What AI Teams Need
to Log Before August 2026"). Ao abrir a página do artigo 12, as datas são **02/12/2027** para alto
risco do Anexo III e **02/08/2028** para o Anexo I. Se eu tivesse confiado no snippet, o mapa
inteiro teria os prazos da raiz 2 antecipados em um a dois anos. **Como percebi:** a regra de só
citar o que abri me obrigou a abrir, e a fonte primária contradisse as três secundárias.

**2. Os identificadores de arXiv que uso não fecham com as datas de submissão informadas.** O
`agrepl` aparece como arXiv:2607.16200 com submissão relatada em **30 de abril de 2026**; pela
convenção AAMM, 2607 seria julho de 2026. O mesmo desencontro aparece em 2604.24955 (submissão
relatada em 27/04/2026, o que bate) e em 2606.20634 (2606 = junho, submissão relatada em
**30 de maio**). **Não sei qual dos dois está certo** e não vou escolher: registro a divergência e
uso os dois como "primeiro semestre de 2026". Se algum aluno for verificar, é aqui que vai
tropeçar — e deve tropeçar.

**3. Metade dos números de memória que cito são autorreportados pelo interessado.** Mem0 com 94,4
em LongMemEval e Zep com 94,7 em LoCoMo vêm de material publicado pelos próprios fornecedores. A
mesma fonte que os publica **admite** que não são comparáveis — modelo juiz, modelo respondedor e
pós-processamento diferentes — e cita um caso em que um teste independente mediu 75,1 onde o
fornecedor reivindica 94,7, e outro em que a medição independente deu **32,4%** contra **93,4%**
autorreportado. Eu os uso como **evidência de que a disputa existe**, nunca como medida do
desempenho. Se em algum ponto do texto eles soarem como medida, é erro meu.

**4. O briefing da disciplina me deu uma afirmação que a verificação derrubou.** O tema diz que a
Nof1 é "o sinal mais duro: avaliação com consequência real, em dinheiro". Ao verificar, encontrei o
oposto do esperado: os resultados da temporada 1 existem e são espetaculares (de +22,3% a −62,66%),
mas **em agosto de 2026 o site informava que os modelos não estavam mais rodando, e não houve
temporada 2**. Eu teria repetido a frase do briefing sem checar — é exatamente o erro que o método
manda procurar, e ele veio da fonte mais confiável possível, que é o professor.

**5. Uma fonte que eu queria usar não abriu, e eu usei a análise secundária dela.** A reportagem
da Tech Times sobre o "Dreaming" e o encolhimento da trilha de auditoria devolveu **HTTP 403**.
Usei em seu lugar uma análise que cita os mesmos números da OpenAI. Portanto: os números de recall
factual (82,8%), aderência a preferência (71,3%) e acerto sensível a tempo (75,1%) chegam a este
documento **de segunda mão, e são autorreportados na origem**. A própria fonte que abri diz que
são "vendor-stated" e "não verificados independentemente". Não os trato como medida.

**6. O efeito `e2.3` é o mais fraco do mapa e eu não consegui sustentá-lo com número.** A afirmação
de que "o custo de julgar cresce mais rápido que o de gerar" é inferência a partir de estrutura de
preço (por score, por GB, por MB) — não achei nenhuma medição direta da razão entre custo de
avaliação e custo de inferência. O guia de observabilidade que abri explicitamente **se recusa** a
dar números de preço. Mantive o efeito porque o mecanismo é plausível e a retroação é necessária ao
mapa; mas o mecanismo é o mais fraco aqui, e é honesto dizer que ele entrou também **porque eu
precisava de uma retroação nesse ramo**.

**7. Não achei nenhum número brasileiro.** Nem quantos certificados ISO/IEC 42001 foram emitidos no
Brasil, nem adoção de observabilidade de agentes por empresa brasileira, nem tratamento de memória
de agente no PL 2338. A seção 3.5 é, por isso, mais pobre que o resto — e o que ela afirma sobre o
Brasil herdar a definição europeia é **inferência estrutural**, não medição.

## 9. Três cenários para 2036

**Provável — a conformidade venceu, e ela é cara.** Em 2036 todo sistema de IA que toca decisão com
consequência guarda rastro integral, e a discussão técnica já não é se guarda, é se o que se
guardou reconstrói a decisão — o vocabulário de "suficiência de evidência" entrou nos contratos
antes de entrar nas ferramentas. A avaliação virou função separada da construção, com cargo, faixa
salarial e, nos setores regulados, exigência de que o avaliador não pertença ao avaliado. Três ou
quatro casas concentram a avaliação independente, e o estúdio pequeno publica sem número, o que na
prática o exclui do mercado corporativo. A memória continua presa: houve obrigação legal de
portabilidade, e o que se exporta é texto achatado sem proveniência nem validade temporal — a lei
foi cumprida e nada mudou. A memória profissional de quem trabalha pertence ao empregador, e isso
está escrito em contrato. Observabilidade e segurança são o mesmo produto, vendido pelas mesmas
três empresas. *Sinal precoce de que estamos entrando aqui:* a primeira licitação pública que exija
replay determinístico como requisito técnico.

**Desejável — a proveniência virou infraestrutura comum.** Em 2036 memória e rastro compartilham a
mesma estrutura de dados: cada item carrega de onde veio, com que autoridade e desde quando — e
essa estrutura é aberta, com mais de uma implementação que lê o que a outra escreve. Isso resolveu
dois problemas de uma vez: a portabilidade entre fornecedores é real (você leva o que o sistema
aprendeu) e o envenenamento de memória é contível (o que veio de fonte não confiável é lido, mas
não obedecido). A avaliação se estratificou honestamente: existe um piso barato e determinístico,
por execução, acessível a quem publica sozinho, e um andar caro de julgamento para quem precisa. A
faixa de confiabilidade está na interface, em número, e o público aprendeu a lê-la. *O que teria
sido preciso fazer para chegar aqui:* uma segunda implementação independente de um formato de
memória com proveniência, antes de 2029 — é esse o gargalo, e ele é técnico e pequeno. *Sinal
precoce:* SF2 acontecendo.

**Indesejável — a confiança virou um serviço que poucos compram.** Em 2036 a infraestrutura de
confiança existe, funciona e é inacessível. Avaliar custa por score; guardar rastro integral custa
por gigabyte; provar apagamento custa auditoria; e o preço de cada uma dessas coisas não cai com o
tamanho de quem paga. O resultado é um mercado em dois andares: sistemas auditáveis, caros e
corporativos, e sistemas não auditáveis, baratos e usados por todo mundo. A memória ficou onde
estava, e trocar de fornecedor ficou economicamente impossível para quem tem cinco anos de
histórico. A defesa contra envenenamento foi construída e desligada, porque o falso positivo
interrompia o trabalho — e a decisão de desligar está registrada num documento que ninguém lê.
Quem quer privacidade paga por um produto sem memória, mais caro e pior. *Sinal precoce deste
cenário:* o primeiro *post-mortem* público de uma equipe desligando a detecção de envenenamento
por excesso de falso positivo, sem que isso gere consequência.

## 10. O experimento

### O espelho e o extrato

**O que é.** Uma interface fina, construída sobre qualquer agente com memória e tracing, que ao
final de cada sessão devolve à pessoa **três painéis lado a lado**:

1. **O espelho** — o que o agente anotou sobre você nesta sessão, em texto, com um botão por item:
   *está certo* / *está errado* / *não quero que lembre disso*. E, crucialmente, um segundo bloco:
   **o que ele reescreveu de anotações anteriores**, com o antes e o depois.
2. **O extrato** — o caminho que ele percorreu: cada chamada, cada ferramenta, cada tentativa que
   falhou, no vocabulário `invoke_agent` / `chat` / `execute_tool` das convenções GenAI do
   OpenTelemetry. Não um log bruto: um extrato, projetado para ser lido por quem não programa.
3. **A faixa** — o mesmo pedido rodado **oito vezes**, e o número de vezes em que o resultado foi
   equivalente. Isto é `pass^8` mostrado ao usuário final, e não ao engenheiro.

**Que pergunta sobre o futuro ele ajuda a responder.** A pergunta central deste mapa:
**a confiança em sistemas ilegíveis se constrói mostrando o caminho, ou ela terá de ser
institucional?** Se as pessoas conferem, corrigem e mudam de comportamento ao ver a faixa, o futuro
de `e1.2`, `e5.1` e `e17.1` é interfacial — e quem projeta mídia e interação tem trabalho novo pela
frente. Se ninguém abre o painel, a confiança vai ter de vir de auditor, seguro e lei — e o mapa
inteiro se desloca para as raízes 2 e 4, e o trabalho é de outra gente.

**Que tecnologia emergente ele usa, e por que não dá com a madura.** Três coisas emergentes: o
trace semântico de agente (spans `invoke_agent`/`execute_tool`, em *development* no OpenTelemetry —
log de aplicação maduro registra a chamada HTTP, não o passo de raciocínio nem a ferramenta
escolhida); a memória inspecionável e reescrita automaticamente (que só virou produto em 2026 —
antes a memória era um buffer que a pessoa não via); e `pass^k` (que teste unitário maduro não
consegue produzir, porque teste unitário pressupõe determinismo — rodar oito vezes um teste
unitário dá oito vezes o mesmo resultado, e é justamente essa a diferença).

**O que a turma faz ao testar em sala.** Duas semanas, três medições:

- **Abre?** Quantas pessoas abrem cada um dos três painéis, e quantas vezes. Instrumentar isso é
  trivial e é o dado mais importante.
- **Corrige o quê?** Das anotações marcadas como erradas, quais categorias aparecem — fato, gosto,
  intenção, inferência sobre a pessoa. E, principalmente: **quantas correções o sistema aceita e
  quantas ele reescreve de volta na sessão seguinte.** Este é o experimento dentro do experimento.
- **A faixa muda a confiança declarada?** Metade da turma vê o painel da faixa, metade não. Antes e
  depois, todo mundo responde uma pergunta só: *quanto você confiaria nisto para uma tarefa que
  importa?* Comparar as duas metades.

**O resultado que me faria mudar de ideia.** Se, nas duas semanas, **menos de um quinto** das
pessoas abrir o espelho mais de uma vez, e a confiança declarada de quem viu a faixa **não diferir**
da de quem não viu, então a tese de que a confiança se constrói na interface está errada — e eu
teria de rebaixar `e1.2`, `e5.1`, `e17.1` e `e17.1.1` de uma vez, e mover o peso do mapa para o
cenário "Provável", onde a confiança é institucional e cara. É um resultado perfeitamente possível:
a analogia mais próxima — os painéis de "sua atividade" das plataformas — levou seis anos para
virar hábito e, ainda assim, é minoria quem os abre.

Um resultado que me faria mudar de ideia no sentido oposto, e que eu não espero: se a maioria
corrigir anotações **e o sistema reescrevê-las de volta**, o efeito `e17.1.1` (discordar do perfil
vira forma de reclamação) acelera muito, e a tela do perfil inferido deixa de ser peça de
transparência para virar **campo de disputa** — o que é um objeto de projeto bem mais interessante,
e bem mais difícil.

## 11. Fontes

Todas as 32 foram abertas e lidas em 11–12/09/2026. Fonte que não abriu não entrou (ver item 5 da
seção 8).

1. `https://www.langchain.com/state-of-agent-engineering` — sustenta os números de adoção da seção
   3.1 e 3.4 (1.340 respostas, 18/11–02/12/2025; 57% em produção; 89% com observabilidade; 62% com
   tracing; 52,4% offline, 37,3% online, 29,5% sem eval). Confiabilidade: **média-alta como dado
   primário, com viés de amostra** — é pesquisa de fornecedor, respondida por quem já usa
   ferramenta de agente; superestima a adoção do universo.
2. `https://www.marktechpost.com/2026/08/09/top-llm-observability-and-evaluation-platforms-in-2026-langfuse-langsmith-braintrust-arize-and-more-compared/` — sustenta o tamanho do mercado (US$ 2,69 bi
   em 2026 → US$ 9,26 bi em 2030, CAGR 36,2%), os downloads do Phoenix e a estrutura de preço de
   W&B Weave. Confiabilidade: **média** — agregador, cita fontes terceiras que não abri.
3. `https://guptadeepak.com/ai-agent-observability-evaluation-governance-the-2026-market-reality-check/`
   — sustenta números complementares de adoção e governança. Confiabilidade: **baixa-média** —
   mistura fontes sem distinguir; usei só o que cruza com a fonte 1.
4. `https://www.dynatrace.com/news/press-release/dynatrace-to-acquire-arize/` — sustenta a compra
   da Arize (US$ 915 mi, US$ 815 mi em dinheiro, 13/08/2026) e a projeção de mercado.
   Confiabilidade: **alta para o fato da transação, interessada para a projeção de mercado**.
5. `https://opentelemetry.io/blog/2026/genai-observability/` — sustenta a estrutura de spans
   (`invoke_agent` → `chat` / `execute_tool`) e quais ferramentas emitem trace. Confiabilidade:
   **alta** (fonte do próprio projeto), mas é material promocional: não traz número de adoção.
6. `https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-agent-spans.md`
   — sustenta o status **"development"** (não estável) e os nomes `create_agent`/`invoke_agent`.
   Confiabilidade: **alta** — é a especificação.
7. `https://artificialintelligenceact.eu/article/12/` — sustenta o conteúdo do artigo 12 e as datas
   de aplicação (02/12/2027 Anexo III; 02/08/2028 Anexo I). Confiabilidade: **alta**; é a base que
   corrigiu o erro descrito no item 1 da seção 8.
8. `https://mem0.ai/blog/state-of-ai-agent-memory-2026` — sustenta os placares LoCoMo/LongMemEval/
   BEAM e as projeções de adoção citadas. Confiabilidade: **baixa para os placares (fornecedor
   medindo a si mesmo), média para a descrição do campo**.
9. `https://mem0.ai/blog/ai-memory-benchmarks-in-2026` — sustenta a descrição dos três benchmarks,
   os números de token por consulta e — o mais útil — a **própria admissão de que os placares não
   são comparáveis**. Confiabilidade: **baixa como medida, alta como confissão**.
10. `https://arxiv.org/abs/2606.29914` (MemDelta) — sustenta o colapso dos ganhos sob baseline
    controlada (47,2% × 49,8%, p = 0,34; auto-memória 42% < RAG 47%; empate a 50× o custo; ±6,2 pp
    por troca de embedding). Confiabilidade: **alta metodologicamente, com a ressalva de que é
    preprint não revisado por pares**. É a fonte que mais derrubou efeito neste mapa.
11. `https://dev.to/stantyan/i-tested-7-ai-memory-products-for-portability-all-7-lock-you-in-31pm`
    — sustenta o teste de simetria de importação em sete produtos (primeira semana de julho de
    2026). Confiabilidade: **média** — teste individual, não replicado, mas com método declarado e
    resultado por produto.
12. `https://arxiv.org/abs/2605.11032` (Portable Agent Memory) — sustenta a existência de um
    protocolo proposto com Merkle-DAG, capacidade e serialização JSON/CBOR, SDK com 54 testes.
    Confiabilidade: **média** — preprint de 8 páginas com implementação única; é o próprio SF2.
13. `https://arxiv.org/abs/2605.01970` (Trojan Hippo) — sustenta 85–100% de ASR, ativação após 100
    sessões benignas, quatro *backends* de memória, e as defesas que levam a 0–5% com custo em
    utilidade. Confiabilidade: **alta** — ataque reproduzível, com defesas medidas.
14. `https://arxiv.org/abs/2601.05504` (MINJA) — sustenta >95% de injeção e 70% de ataque por
    usuário sem privilégio, em GPT-4o-mini, Gemini-2.0-Flash e Llama-3.1-8B sobre agentes de
    prontuário. Confiabilidade: **alta**, com a ressalva explícita dos próprios autores de que
    condições realistas reduzem muito a eficácia.
15. `https://arxiv.org/abs/2606.30566` (Forensic Trajectory Signatures) — sustenta AUC 0,9904 **e**
    o estudo pré-registrado de acompanhamento com 24,7%–52,6% de falso positivo incondicional.
    Confiabilidade: **alta** — é raro um trabalho publicar o próprio falseamento; usei os dois
    números juntos.
16. `https://arxiv.org/abs/2606.30306` (Always-On Agents) — sustenta a afirmação de que a
    literatura se concentra em acumular e recuperar estado, e não em governar, recuperar ou
    abandoná-lo (corpus codificado de 435 trabalhos, seis eixos). Confiabilidade: **média-alta**
    como levantamento; os próprios autores o chamam de mapa escopado, não censo.
17. `https://arxiv.org/abs/2607.16200` (agrepl) — sustenta o replay determinístico com F = 1,0,
    −98,3% de latência mediana, n = 250 em cinco cargas, e o ponto conceitual de que a chamada ao
    modelo é a entrada irredutivelmente não determinística. Confiabilidade: **alta**, com a
    divergência de data registrada no item 2 da seção 8.
18. `https://arxiv.org/abs/2606.20634` (DEMM-Bench) — sustenta a distinção presença × suficiência e
    os 75% / 50% de superestimação, com 56,25% de PSA médio. Confiabilidade: **média-alta** —
    41 páginas, dados e código publicados, mas autor único e sem revisão por pares.
19. `https://arxiv.org/abs/2604.24955` (BenchGuard) — sustenta os 12 problemas confirmados pelos
    autores do ScienceAgentBench, os 83,3% de casamento no BIXBench Verified-50 e o custo abaixo de
    US$ 15. Confiabilidade: **alta** — os defeitos foram confirmados pelos autores do benchmark
    auditado, o que é a melhor validação possível.
20. `https://arxiv.org/abs/2604.16706` (AgentProp-Bench) — sustenta os κ (0,049 / 0,432 / 0,567 /
    0,835) e a propagação de erro de parâmetro com p ≈ 0,62. Confiabilidade: **alta**; é o número
    mais importante da raiz 1.
21. `https://arxiv.org/abs/2604.18240` (AJ-Bench) — sustenta a existência do Agent-as-a-Judge como
    alternativa medida (155 tarefas, 516 trajetórias anotadas, aceito em ACL 2026 Findings).
    Confiabilidade: **alta**; mas o resumo não traz os números comparativos que eu queria, e por
    isso não os cito.
22. `https://arxiv.org/abs/2605.08545` (Log analysis is necessary) — sustenta que o pass^5 do
    τ-Bench Airline estava subestimado em quase 50% até alguém ler os logs. Confiabilidade:
    **alta**; é o elo que liga observabilidade e avaliação num argumento só.
23. `https://sierra.ai/blog/benchmarking-ai-agents` — sustenta pass^k e a queda de 61% (pass@1) para
    ~25% (pass^8) em τ-retail. Confiabilidade: **alta para o método, datada para os números** — o
    post é de 20/06/2024 e mede GPT-4o; **é a única medida concreta de pass^k que consegui abrir**,
    e os modelos de 2026 certamente vão melhor. Uso a **forma** da queda, não o valor absoluto.
24. `https://prefactor.tech/learn/agent-benchmarks` — sustenta a definição de pass^k como medida de
    consistência (tarefa resolvida só se todas as k tentativas passarem) e o contraste com pass@k.
    Confiabilidade: **média** — material didático de fornecedor, sem números próprios.
25. `https://astraea.law/insights/ai-agent-memory-tool-privacy-compliance` — sustenta o problema do
    apagamento ("você não pode apagar o que não sabe que o agente guardou"), as citações de CCPA
    §1798.105, GDPR arts. 17 e 12(3) e a ADMT da Califórnia a partir de 01/01/2027. Confiabilidade:
    **alta** — análise jurídica com citação normativa verificável; publicada em 12/04/2026,
    atualizada em 04/09/2026.
26. `https://www.digitalapplied.com/blog/chatgpt-memory-dreaming-v3-openai-2026-guide` — sustenta o
    rollout de 04/06/2026, os números autorreportados pela OpenAI (82,8% / 71,3% / 75,1%) e a frase
    decisiva para `e17`: "o sistema se corrige sozinho; confirmar que aquelas correções estavam
    certas é com você". Confiabilidade: **média** — análise secundária; ela própria adverte que os
    números são do fornecedor e não verificados.
27. `https://www.digitalapplied.com/blog/agent-observability-2026-evals-traces-cost-guide` —
    sustenta a prática de amostragem (100% dos traces com erro, 1%–5% dos saudáveis) e as três
    camadas de avaliação. Confiabilidade: **média**; explicitamente **se recusa a dar preços**, o
    que é honesto e é a razão de `e2.3` ter ficado sem número (item 6 da seção 8).
28. `https://www.louisbouchard.ai/context-engineering-2026/` — sustenta os números de degradação
    por posição (~75% caindo para meados de 40%, abaixo do baseline sem documento), o ponto de
    virada do cache (~US$ 0,55 por milhão), o custo por turno no DeepSeek e o tempo até o primeiro
    token (~22 s × ~76 s). Confiabilidade: **média-alta** — medições próprias, com método descrito,
    mas não replicadas.
29. `https://jobsbyculture.com/blog/ai-evals-engineer-career-guide-2026` — sustenta as faixas
    salariais por nível (US$ 230 mil a US$ 1,2 milhão), a velocidade de contratação (~5× a de 2024)
    e os empregadores nomeados. Confiabilidade: **baixa-média** — agregação de vagas, sem
    metodologia publicada; usei as **ordens de grandeza**, não os valores exatos.
30. `https://www.iweaver.ai/blog/alpha-arena-ai-trading-season-1-results/` — sustenta o desenho do
    Alpha Arena (US$ 10 mil por modelo, perpétuos na Hyperliquid, mesmo prompt) e os resultados
    (+22,3% a −62,66%), além da ressalva dos próprios organizadores. Confiabilidade: **média** —
    análise de terceiro sobre experimento público; a interrupção da arena em 2026 vem de resultado
    de busca e está declarada como tal em SF4.
31. `https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2487262` — sustenta o
    estado do PL 2338/2023 na Câmara: Comissão Especial, relator designado em 20/05/2025,
    **aguardando parecer**, 37 apensados, último em 02/09/2026. Confiabilidade: **alta** — é a
    ficha oficial de tramitação.
32. `https://www.demarest.com.br/en/inteligencia-artificial-reacende-debates-na-camara-dos-deputados/`
    — sustenta a leitura do conteúdo do PL 2338 (abordagem por risco, papel da ANPD, transparência
    e revisão humana de decisão automatizada). Confiabilidade: **média-alta** — análise de
    escritório de advocacia, datada de 10/03/2026.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

Comando executado:

`python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2036/03-a-infraestrutura-de-confianca-memoria-observabilidade-e-avaliacao-de-agentes/tendencia-a-infraestrutura-de-confianca-memoria-observabilidade-e-avaliacao-de-agentes.md --links`

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 18 (frontmatter diz 18)
efeitos ordem 2: 33 (frontmatter diz 33)
efeitos ordem 3: 27 (frontmatter diz 27)
prazo > horizonte (2036) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 10 · media 7 · baixa 1
confiança ordem 2: alta 2 · media 29 · baixa 2
confiança ordem 3: alta 0 · media 0 · baixa 27
links da seção 11: 32/32 respondem (frontmatter diz fontes: 32)
RESULTADO: ok
```

### 12.2 Premissas assumidas — o que o briefing não cobriu

O briefing veio completo (modo MAPA, tema, horizonte 2036, público, recorte global com nota sobre o
Brasil, descartado, viés neutro, busca web ligada, falseador declarado). Não houve rebaixamento de
confiança por ausência de entrevista. O que o briefing **não** cobriu e eu assumi, declarado aqui:

1. **Profundidade de volume.** O briefing pediu três ordens, não quantidade. Assumi 18 / 33 / 27,
   calibrado pelo mapa vizinho da mesma rodada (tema 2, 18 / 34 / 24), para que os dois sejam
   comparáveis quando a turma cruzar os blocos `roda:`.
2. **Fronteira com os vizinhos.** O tema declara que conter o agente é o tema 2 e o ofício de
   programar é o tema 1. Assumi a fronteira ao pé da letra e **não** derivei efeitos de contenção,
   sandbox, identidade de agente ou economia de agente-para-agente, ainda que eles apareçam
   naturalmente a partir de `e16`. Onde encostei (`e16.2`, observabilidade e segurança como mesmo
   produto), declarei a convergência em vez de desenvolvê-la.
3. **"Ideias óbvias a excluir: as que servem para qualquer tema."** Apliquei isto como filtro duro,
   e ele custou quatro efeitos (registrados em 12.3). Assumi que o filtro se aplica **também** aos
   efeitos que a lista de proibidos do método já nomeia (regulador genérico, nova profissão, curso
   reorganiza currículo, mercado de trabalho muda).
4. **Interpretação do falseador.** O briefing diz: mudaria de ideia com evidência de que a adoção já
   passou da maioria inicial, ou de que a tecnologia só melhora o que existe. Apliquei isso em 4.0,
   e ele **derrubou** a memória de assistente de consumo como raiz — o que é, provavelmente, a
   decisão mais discutível deste mapa.
5. **Ano-base da nota sobre o Brasil.** Assumi que "nota sobre o Brasil" significa uma subseção na
   âncora (3.5) e efeitos brasileiros apenas onde o mecanismo for específico — o que resultou em
   nenhum efeito exclusivamente brasileiro na roda, e sim numa entrada em "quem perde". Se a
   intenção era outra, é aqui que se corrige.

### 12.3 Efeitos cortados no §6, com o motivo

Nada foi cortado em silêncio. Estes quatro saíram da roda:

- **"Reguladores criam uma categoria jurídica nova para sistemas de memória persistente"**
  (era filho de `e15`). *Motivo:* efeito proibido pelo método — regulador sem nome, sem mecanismo
  que o ligue ao pai. Substituído por `e15.2` (prova de apagamento), que tem ator concreto (32
  autoridades europeias, EDPB) e mecanismo (fiscalização já priorizada).
- **"Surge a profissão de curador de memória organizacional"** (era filho de `e10.2`). *Motivo:*
  "surge uma nova profissão" sem nome de cargo, sem faixa e sem empregador é exatamente o
  anti-padrão nomeado no método. Contraste: `e3` sobreviveu **porque** tem nome (*AI Evals
  Engineer*), faixa medida e empregadores nomeados.
- **"O mercado de trabalho de QA se reorganiza"** (era filho de `e1`). *Motivo:* genérico; serve
  para qualquer tema de automação. Substituído por `e3.1` (quem avalia deixa de se reportar a quem
  entrega), que é uma afirmação específica e falseável sobre organograma.
- **"Cursos de computação reorganizam o currículo em torno de avaliação"** (era filho de `e3`).
  *Motivo:* curso sem nome — proibido. Substituído por `e3.2.1`, que tem ator (candidato,
  recrutador), mecanismo (contratação por evidência de entrega, já documentado) e é verificável.

Um quinto candidato foi **mantido a contragosto**: `e11.1` (isolamento de memória vira recurso
pago) é extrapolação linear de precificação de SaaS e passaria para qualquer produto. Sobreviveu
por ter objeto específico e mecanismo de custo real, mas é o efeito mais frágil do ramo e está
declarado em 7.2.

### 12.4 Caminhos abandonados

**Uma quinta raiz que não sobreviveu ao próprio teste: "a auditoria de IA vira profissão
regulamentada, como a auditoria contábil".** A pergunta do tema é boa e eu tentei transformá-la em
raiz. Falhou no critério 2 (por que agora): a ISO/IEC 42001 é de novembro de 2023, o curso de
auditor líder existe, a certificação vale três anos — e nada disso é *novo*. É a difusão de um
instrumento maduro de gestão da qualidade aplicado a um objeto novo, o que é melhoria sustentadora
por definição. Virou o efeito `e2.1` + `e3.1.1`, onde o mecanismo específico (separação entre
avaliador e avaliado) faz o trabalho que a palavra "profissão" não fazia.

**Uma sexta raiz descartada: "o benchmark público morre e é substituído por avaliação privada".**
Falhou no critério 4: a lista do que falta acontecer para ela se concretizar contém um item que não
achei caminho para resolver — quem compra precisa de comparação entre fornecedores, e comparação
exige um referencial comum. Virou `e2.2` e `e2.2.1`, que é o que a evidência sustenta: o benchmark
público não morre, ele passa a ser auditado.

**Um ramo que não abri, deliberadamente: a economia de tokens e a energia.** Há um fio real ligando
retenção integral de rastro a custo computacional e a consumo, e ele apareceu na tentativa de
preencher a coluna ecológica do STEEP. Não achei nenhum número que ligasse especificamente
*observabilidade de agente* a consumo energético — só números gerais de IA, que servem para
qualquer tema. Preferi declarar a categoria vazia (5.2) a preencher com genérico.

### 12.5 Buscas que não deram em nada

- **Número de certificados ISO/IEC 42001 emitidos**, no mundo ou no Brasil, até 2026. Busca em
  português retornou apenas material comercial de certificadoras, cursos de auditor líder e
  explicações da norma. Nenhum número. A afirmação "a certificação virou passaporte" aparece em
  material de quem vende certificação e não foi usada.
- **ANPD ou LGPD tratando especificamente de memória de agente.** Nada. A busca cruzada
  (apagamento × memória de agente × ANPD/LGPD) retorna material europeu e nenhum brasileiro. É a
  base da lacuna declarada em 3.5.
- **Temporada 2 do Alpha Arena / Nof1.** Não existe. O achado de que a arena parou é, em si, o
  resultado — está em SF4.
- **Números de pass^k para modelos de 2026** em τ-bench ou τ²-bench. A única medida concreta que
  consegui abrir é de 2024, com GPT-4o. Usei a forma da queda e declarei a limitação na fonte 23.
  Este é o buraco mais incômodo do levantamento: **o mapa afirma que a lacuna pass@1 → pass^k é
  estrutural, e a medida que o sustenta tem dois anos.**
- **Custo de avaliação como fração do custo de inferência.** Nenhuma medição encontrada; o guia
  aberto explicitamente se recusa a dar preços. É a razão de `e2.3` ser o efeito mais fraco do mapa
  (item 6 da seção 8).
- **Fração de usuários do ChatGPT com memória ativa.** Não encontrada. A escala do rollout está
  documentada; a adoção efetiva do recurso, não.
- **Adoção de observabilidade de agentes por empresa brasileira.** Nada. Todas as pesquisas
  encontradas são de fornecedores com amostra global e majoritariamente norte-americana.

### 12.6 Divergências não resolvidas, registradas

1. **Datas de aplicação do artigo 12 do AI Act.** Três fontes secundárias afirmam agosto de 2026;
   a página do próprio artigo diz 02/12/2027 (Anexo III) e 02/08/2028 (Anexo I). **Adotei a fonte
   primária.** Se as secundárias estiverem certas por alguma via que não encontrei, os prazos da
   raiz 2 antecipam um a dois anos, e `e6` e `e6.1` ficam mais agressivos do que estão.
2. **Identificadores de arXiv × datas de submissão.** Descrito no item 2 da seção 8. Não resolvido;
   usei "primeiro semestre de 2026" onde a precisão importava.
3. **Placares de memória.** Zep reivindica 94,7 em LoCoMo; medição independente dá 75,1. Mem0
   gerenciado autorreporta 93,4 em LongMemEval; edição open-source medida independentemente dá
   32,4. **Não arbitro.** Ambos os pares estão no texto, como evidência de que a disputa existe.
4. **"O comitê de juízes é melhor que o juiz único"** — intuição corrente contra medição
   (κ = 0,432 do ensemble contra κ = 0,567 do melhor juiz único). Uma medição não derruba uma
   prática; está registrado como sinal fraco (SF3), não como fato.
