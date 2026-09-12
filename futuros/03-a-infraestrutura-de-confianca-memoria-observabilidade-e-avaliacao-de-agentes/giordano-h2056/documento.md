---
tema: "A infraestrutura de confiança: memória, observabilidade e avaliação de agentes"
slug: a-infraestrutura-de-confianca-memoria-observabilidade-e-avaliacao-de-agentes
autor_login: grec
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2056
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 14
efeitos_ordem_2: 24
efeitos_ordem_3: 21
tecnologias_citadas: [OpenTelemetry GenAI semantic conventions, Langfuse, LangSmith, Braintrust, Arize Phoenix, Dynatrace, Weights & Biases Weave, Mem0, Letta, Zep, Cognee, ByteRover, Claude Projects, ChatGPT Memory, Cursor, Model Context Protocol, agrepl, LoCoMo, LongMemEval, LongMemEval-V2, BEAM, MemoryArena, MemoryAgentBench, MPBench, AOEP-v0, SWE-bench Verified, tau-bench, pass^k, LLM-as-a-judge, MemDelta, FSFM, Portable Agent Memory, MemPoison, MINJA, prEN ISO/IEC 24970]
fontes: 29
confianca: media
experimento: "Caderno de bordo — agente de mídia com trajetória replayável e memória apagável, medido por pass^8 e por delta de esquecimento"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Se a máquina fabrica o produto, avaliar o produto mede a máquina — e a pergunta deixa de ser "o
que foi entregue?" para virar "por que isso está certo?". Este mapa trata das três rupturas que
essa virada produz num horizonte de trinta anos: a avaliação de sistemas **não determinísticos**
como disciplina que decide o que pode existir; a memória que atravessa sessões deixando de ser
cache e virando **patrimônio**, com tudo o que patrimônio implica (custódia, portabilidade,
herança, penhora, envenenamento); e o **rastro de execução** deixando de ser artefato de operação
para virar objeto de prova, com prazo legal de retenção e formato exigido. O presente é medido:
57,3% das equipes que responderam à pesquisa da LangChain já têm agentes em produção e 29,5% não
avaliam nada; as convenções GenAI do OpenTelemetry seguem em *Development*, sem cronograma de
estabilização; o artigo 12 do AI Act europeu entra em vigor em 02/12/2027; sete produtos de
memória testados em julho de 2026 travam o usuário, todos os sete; e o ganho da memória sobre
recuperação simples desaba quando se controla a baseline (47,2% × 49,8%, p = 0,34). O mapa usa
classes de referência longas — a auditoria contábil pós-1933, o gravador de voo, a portabilidade
numérica, a interoperabilidade de prontuário — porque num horizonte de 2056 o que decide não é a
velocidade da tecnologia e sim a velocidade da institucionalização, que é muito mais lenta e muito
mais conhecida. Para quem projeta mídia e interação, a consequência mais concreta não está no
backend: está em ter de projetar o **esquecimento** como se projeta o salvar, e em entregar a peça
acompanhada do rastro que a produziu.

## 2. O tema

O tema junta duas coisas que a literatura trata separadamente e que são a mesma infraestrutura: a
**memória**, que é o que o sistema sabe, e a **observabilidade e avaliação**, que é como se confere
o que ele fez. As duas existem pelo mesmo motivo — sistemas que ninguém consegue ler por inteiro —
e as duas produzem o mesmo artefato: um registro durável que sobrevive à sessão.

Onde isso encosta em mídia e interação. Primeiro, na interface: um sistema que lembra entre
sessões precisa dizer o que lembrou, e o vocabulário de interface para isso não existe — há
"salvar", "copiar" e "lixeira" para arquivo, e quase nada para memória. Segundo, na autoria: se a
peça foi fabricada por um sistema, o que se credita, o que se arquiva e o que se apresenta como
prova de autoria passa a ser a trajetória, não o arquivo final. Terceiro, no custo: guardar
trajetória e re-rodar avaliação é caro, e o que se decide guardar define o que se poderá provar
depois. Quem projeta mídia e interação vai encontrar esse tema não como assunto de infraestrutura,
mas como uma coluna nova no briefing.

Por que merece mapa de futuro e não levantamento de estado da arte. Porque o estado da arte aqui é
instável de um jeito específico: os números que sustentam as promessas do campo estão sendo
derrubados pelos próprios pesquisadores do campo, em 2026, e mais rápido do que os produtos são
lançados. Um levantamento congelaria placares que o próprio fornecedor admite não serem
comparáveis. O que tem valor de futuro não é o placar — é a pergunta de que instituição se forma
em torno de uma prova que ninguém consegue reproduzir.

**Fronteira com os vizinhos.** Conter o agente (permissão, sandbox, limite de ação) é outro tema.
O ofício de programar com agente é outro tema. Aqui o objeto é **saber o que o agente sabe e
conferir o que ele fez**.

## 3. Onde isso está hoje

Âncora feita com acesso à web em 12/09/2026; 29 fontes abertas e lidas (seção 11). Nenhum número
desta seção é estimativa minha: onde não encontrei número, está escrito que não encontrei.

### 3.1 O que já existe e funciona

**Observabilidade de agente como produto.** O mercado tem tamanho declarado: US$ 1,97 bi em 2025,
US$ 2,69 bi em 2026, projeção de US$ 9,26 bi em 2030 (CAGR 36,2%), segundo agregação publicada em
09/08/2026. Em 13/08/2026 a Dynatrace anunciou a compra da Arize por **US$ 915 milhões** (cerca de
US$ 815 mi em dinheiro) — a maior aquisição registrada na categoria —, com a justificativa
explícita de que as ferramentas que avaliam o comportamento antes do envio não conversam com as
que monitoram depois. O Arize Phoenix relatou dois milhões de downloads mensais. Langfuse,
LangSmith, Braintrust e Arize são os quatro nomes recorrentes; W&B Weave publica preço (grátis até
1 GB/mês, US$ 60/mês no Pro com 1,5 GB, US$ 0,10 por MB adicional).

**Adoção medida.** A pesquisa "State of Agent Engineering" da LangChain (1.340 respostas,
18/11 a 02/12/2025) dá: **57,3% com agentes em produção**; **89% com observabilidade** (94% entre
quem já está em produção); **62% com tracing detalhado** (71,5% em produção); 52,4% com avaliação
offline; 37,3% com avaliação online; e **29,5% sem avaliação nenhuma**. É pesquisa de fornecedor,
respondida por quem já usa ferramenta de agente — superestima o universo e está usada aqui como
teto, não como média.

**Memória como categoria de produto.** Mem0, Letta, Zep, Cognee, ByteRover, Supermemory e outros
formam uma camada com nome próprio. Os benchmarks existem e são vários: LoCoMo (~26k tokens, 1.986
pares de QA), LongMemEval (115k tokens na variante S, 500 questões), BEAM (128k a 10M tokens,
2.000 questões), MemoryAgentBench (103k a 1,44M tokens, 2.071 questões). Um guia de setembro de
2026 cataloga **18 benchmarks em quatro famílias**.

**Trajetória padronizada, em parte.** As convenções GenAI do OpenTelemetry definem as operações
`chat`/`text_completion`/`generate_content` (camada de cliente), `invoke_agent`, `execute_tool` e,
desde a v1.41, `invoke_workflow`.

**Regulação com data.** O artigo 12 do AI Act europeu exige que sistemas de alto risco "permitam
tecnicamente o registro automático de eventos (logs) ao longo da vida do sistema", e entra em
aplicação em **02/12/2027** (Anexo III) e **02/08/2028** (Anexo I). O rascunho de norma
prEN ISO/IEC 24970 vai dar a forma concreta desse registro. No Brasil, a ANPD publicou o Mapa de
Temas Prioritários 2026-2027 com IA como um dos quatro eixos de fiscalização, e desde 21/08/2026
monitora plataformas e ferramentas de IA generativa.

### 3.2 O que existe e ainda não funciona

**O padrão não é padrão.** As convenções GenAI do OpenTelemetry seguem em **Development** na
v1.41.0, com a frase literal "no public timeline for stabilization". Os spans de cliente saíram do
experimental; os spans de **agente**, não. Em 12/06/2026 (v1.42.0) os atributos `gen_ai.*` foram
movidos para um repositório próprio — mudança organizacional de cadência, não graduação.

**Os placares não se comparam.** O próprio fornecedor que publica os melhores números admite:
"None of these numbers were generated using the same model stack, judge model, or retrieval
configuration. Treat this table as a starting point for further reading, not a settled ranking."
Os números em questão são 92,5% (LoCoMo), 94,4% (LongMemEval) e 64,1% (BEAM-1M).

**O ganho da memória não sobrevive à baseline controlada.** O MemDelta (29/06/2026, LongMemEval-S,
500 questões, três famílias de modelo) mede: RAG literal empata com contexto completo
(**47,2% × 49,8%**); trocar **só o modelo de embedding** move a acurácia em **±6,2 pontos**
(p = 0,004); a **auto-memória do agente rende 42%, abaixo dos 47% da recuperação básica**; e onde o
Mem0 empata com o cloud-RAG (72,7% × 73,9%, em 2 de 6 tipos de pergunta, n = 88) ele custa **50×
mais**. Na mesma direção, o MemoryArena mostra que sistemas com placar quase perfeito em LoCoMo
caem para **40–60%** quando a memória tem de mudar a ação e não só a resposta.

**O benchmark público apodrece.** A equipe de Frontier Evals da OpenAI parou de reportar o
SWE-bench Verified no início de 2026 depois de auditar **138 tarefas** e achar que **mais de 60%
eram insolúveis como escritas** — teste estreito demais para aceitar resposta correta, ou largo
demais para rejeitar a errada. Um estudo independente achou vazamento de solução em **32,67%** dos
patches bem-sucedidos, e recuperação de caminho de arquivo a partir do treino em até **76%** dos
casos. Só a troca de *scaffolding* move o placar: 5,2 pontos entre três sistemas rodando o mesmo
Claude Opus 4.5, e 17,3 pontos entre o scaffold do fornecedor (69,2%) e o padronizado (51,9%).

**O juiz-modelo é confiável sem ser válido.** A maior avaliação sistemática publicada (junho de
2026: **21 juízes**, 9 fornecedores, 3 benchmarks, 118 rodadas, ~**541 mil julgamentos**) encontra
consistência teste-reteste altíssima (α médio 0,944 no MT-Bench) **e** um abismo de 33,8 a 41,3
pontos entre concordância bruta e κ de Cohen; dois juízes já em produção têm reprodutibilidade
acima de 0,95 **junto com** viés posicional acima de 0,10, e o ranqueamento chega a mudar 15
posições conforme o benchmark. A tese do artigo é o título: confiabilidade sem validade.

**Consistência, não acurácia.** A medida que interessa para agente é pass^k — resolver a **mesma**
tarefa em todas as k tentativas. A única medida concreta que consegui abrir é de 20/06/2024, sobre
GPT-4o: em τ-retail, o agente **cai para ~25% em pass^8**, queda de cerca de 60% em relação ao
pass^1. É um número datado, e os modelos de 2026 vão melhor; uso a **forma** da queda, não o valor.

**Reprodução ainda é pesquisa.** O `agrepl` (preprint de abril de 2026, autor único, Go, MIT)
grava toda interação externa num proxy MITM e reexecuta em isolamento: fidelidade F = 1,0 e
**−98,3%** de latência mediana por etapa, em n = 250 reproduções sobre cinco cargas. O ponto
conceitual importa mais que o número: a chamada ao modelo continua sendo a entrada
irredutivelmente não determinística.

**Memória não é portátil.** Teste de sete produtos na primeira semana de julho de 2026 — ChatGPT
Memory, Claude Projects, Claude Tag, Gemini, Cursor, Cognee, ByteRover: **nenhum** tem simetria de
importação, isto é, nenhum concorrente lê e reconstrói o arquivo de memória de outro. O protocolo
que existe para resolver isso (Portable Agent Memory, maio de 2026: grafo Merkle-DAG de
proveniência, controle por capacidade, serialização JSON/CBOR, Apache 2.0) tem **uma
implementação** e 54 testes. O Model Context Protocol, que seria o lugar natural para uma interface
de memória, publicou o roadmap 2026 em 09/03/2026 com quatro prioridades — transporte,
comunicação entre agentes, governança e prontidão empresarial — e **memória não aparece em
nenhuma**; trilhas de auditoria aparecem, como item de prontidão empresarial a ser resolvido por
extensão.

**Memória é superfície de ataque.** Ataques de envenenamento por conversa alcançam taxa de sucesso
**até 0,95**, e o artigo que os propõe avalia múltiplas defesas e demonstra a limitação
fundamental delas. Um estudo sistemático de junho de 2026 organiza **seis classes de ataque** sobre
quatro canais de escrita e nove fragilidades estruturais, publica o MPBench, e conclui que as
defesas existentes contra injeção de prompt não cobrem envenenamento de memória. A detecção
forense ilustra o problema de outro ângulo: uma assinatura de trajetória atinge AUC 0,9904 — e o
mesmo artigo publica o próprio contraexemplo, uma taxa de falso positivo incondicional de
**24,7% a 52,6%**, porque o comportamento benigno produz a mesma assinatura.

**Apagar é juridicamente impossível hoje.** A análise jurídica mais direta que abri põe a tese no
título: não se pode apagar o que não se sabe que o agente guardou. O deployer hospeda os arquivos
e responde como controlador, mas é o agente que decide o que gravar, com que nome e em que
formato. E há uma colisão de deveres: apagar (GDPR art. 17, prazo de um mês pelo art. 12(3); CCPA
§1798.105) destrói a proveniência da decisão que outra norma exige guardar. A ADMT da Califórnia
vale desde 01/01/2026, com conformidade exigida a partir de 01/01/2027.

**A literatura olha para o lado errado.** Um levantamento de 29/06/2026 codifica **435 trabalhos**
sobre agentes always-on em seis eixos (autoridade, escopo, mutabilidade, proveniência,
recuperabilidade, acionabilidade) e conclui que a literatura se concentra em **acumular e
recuperar** estado muito mais do que em **governar, recuperar ou abandonar** estado. Um
levantamento de segurança de abril de 2026 mede a mesma distorção: ~55% dos ~70 trabalhos
primários caem nas fases *Write* e *Retrieve*, e **~5% em cada uma** das fases *Store* e *Forget*.

### 3.3 Quem constrói

Seis grupos, com incentivos distintos. (a) **Plataformas de observabilidade generalista** —
Dynatrace (que comprou a Arize), Datadog, Honeycomb: querem que a IA vire mais um tipo de
telemetria. (b) **Nativos de LLM** — Langfuse (dentro da ClickHouse), LangSmith, Braintrust,
Phoenix: tratam o trace como objeto primário. (c) **Camada de memória** — Mem0, Letta, Zep,
Cognee, ByteRover, MemTensor: vendem o estado. (d) **Laboratórios de fronteira**, que publicam o
próprio placar e decidem na prática o que conta como boa avaliação. (e) **Comunidade aberta de
padrão** — OpenTelemetry (GenAI SIG), Model Context Protocol na Linux Foundation, e o comitê da
prEN ISO/IEC 24970. (f) **Academia**, que em 2026 é a parte do campo que mais derruba as promessas
do campo.

### 3.4 Nota sobre o Brasil

O PL 2338/2023 foi aprovado no Senado em 10/12/2024 e tramita na Câmara em Comissão Especial, com
relator designado em 20/05/2025 (dep. Aguinaldo Ribeiro) e **37 apensados**; a ficha oficial
consultada em 12/09/2026 registra situação "aguardando parecer do relator" e último despacho de
29/04/2025 (ver a divergência de data no item 2 da seção 8). O texto segue o modelo europeu de
classificação por risco, prevê sanções de até R$ 50 milhões e delega à autoridade competente a
regulamentação dos casos em que a auditoria de avaliação de impacto terá de ser conduzida por
equipe externa. Do lado prático, a EY publicou em 05/05/2026 números de escala: **50 mil** agentes
operando na própria firma, e uma mineradora brasileira cliente saindo de 30 agentes para cerca de
**1.000**, com 5.000 planejados para o fim do ano — com o argumento de que agentes passarão a
executar exatamente as atividades que já são auditadas em companhia aberta (contas a pagar, contas
a receber), sob pena de rejeição das contas. **Sem número encontrado** para adoção de ferramenta de
observabilidade de agente no Brasil.

### 3.5 Onde passa a linha da maturidade

Maduro, e portanto fora como raiz: log e métrica de aplicação (APM), teste unitário e integração
contínua, RAG como técnica, e dashboards de custo por token. Emergente: avaliação de sistemas não
determinísticos, memória que atravessa sessões e ferramentas, e o regime probatório da trajetória.

## 4. As disrupções-raiz

Três raízes. Cada uma passa pelas quatro perguntas do critério de maturidade, e as recusas estão
registradas ao final.

### R1 — A avaliação de sistemas não determinísticos vira a disciplina que decide o que pode existir

**O que rompe.** Rompe o critério de pronto. Software se aceitava por passar ou não passar: um
teste, um resultado, um gate. Um sistema que roda duas vezes e dá dois resultados não tem
passa/não-passa — tem distribuição. O que deixa de valer não é uma ferramenta, é a ideia de
*aceitação*: quem assina não assina mais "está correto", assina "está dentro da faixa, medido com
n amostras". E como só se pode publicar o que passou pela avaliação, quem define a avaliação
define o que existe.

**Por que agora, e não há cinco anos.** Três pré-condições apareceram juntas. Os agentes ficaram
bons o bastante para ninguém conferir tudo (57,3% em produção; 29,5% sem avaliação). Os benchmarks
públicos se corroeram a ponto de o maior laboratório abandonar o principal deles (138 tarefas
auditadas, >60% insolúveis como escritas). E o substituto barato — o juiz-modelo — foi medido em
escala e reprovou como *medida*, mantendo-se aprovado como *máquina*: 541 mil julgamentos,
consistência 0,944, κ desabando 33,8 a 41,3 pontos. Há cinco anos não havia nem o problema (poucos
agentes em produção) nem a evidência (esses três resultados são de 2026).

**Onde está na difusão.** Produto de nicho passando para adoção precoce. Há ferramenta comercial
madura para *rodar* avaliação, mas a prática de contratar por faixa de desempenho e de calibrar o
juiz contra conjunto-ouro humano está em minoria clara mesmo na amostra mais favorável.

**O que ainda falta acontecer.** (i) Uma medida de consistência publicada como o placar padrão, no
lugar da acurácia média. (ii) Um procedimento de calibração de juiz que alguém de fora possa
repetir. (iii) Um benchmark que envelheça sem contaminar — ou a aceitação de que benchmarks têm
validade de 2 a 5 anos e devem ser substituídos por desenho. (iv) Alguém com autoridade para dizer
que uma avaliação é insuficiente.

### R2 — A memória que atravessa sessões deixa de ser cache e vira patrimônio

**O que rompe.** Rompe o modelo de propriedade do software. Enquanto o valor está no código, trocar
de fornecedor é trocar de ferramenta: instala outro, e segue. Quando o valor está no estado
acumulado — preferências, decisões, erros já cometidos, o que não precisa mais ser explicado —,
trocar de fornecedor é perder um histórico que não existe em nenhum outro lugar. Aí deixam de
valer três coisas ao mesmo tempo: a ideia de que software se desinstala, a ideia de que o dado do
usuário é o que ele digitou (a memória é o que o sistema **inferiu**), e a ideia de que o
fornecedor é substituível. Patrimônio implica custódia, avaliação, transferência, penhora,
herança, seguro — e nenhuma dessas instituições existe para memória de agente.

**Por que agora, e não há cinco anos.** Porque contexto virou caro o bastante para que "lembrar"
precise ser engenharia e não concatenação, e porque os produtos que guardam esse estado chegaram
ao mercado em escala entre 2024 e 2026. A prova de que a ruptura é real e não retórica é o teste
de portabilidade: sete produtos, sete formas de não exportar de maneira que outro leia. Há cinco
anos não havia estado a ser trancado.

**Onde está na difusão.** Produto de nicho. Memória em produto de massa existe (ChatGPT, Gemini),
mas como recurso de conveniência e não como ativo governado — a régua da disciplina recusa o que
já é comum em produto de massa, e o que é comum aqui é a *lembrança*, não a *custódia*.

**O que ainda falta acontecer.** (i) Uma segunda implementação independente de algum formato de
memória que leia o arquivo da primeira. (ii) Evidência de ganho que sobreviva a baseline
controlada — hoje não há (47,2% × 49,8%; auto-memória 42% < RAG 47%; empate a 50× o custo).
(iii) Governo do ciclo de vida: hoje ~5% da literatura de segurança trata de *Store* e ~5% de
*Forget*. (iv) Uma resposta jurídica à colisão entre apagar e provar.

### R3 — O rastro de execução vira o objeto de prova

**O que rompe.** Rompe o regime probatório do software. Até aqui, o que se auditava era o artefato:
o código, o relatório, a peça entregue. Se a máquina fabrica o artefato, o artefato não prova nada
sobre a máquina — o que prova é o caminho: cada chamada, cada ferramenta, cada tentativa que
falhou. O log deixa de ser artefato de operação (descartável, amostrado por conveniência, com
retenção decidida pelo custo) e vira registro com prazo legal, formato exigido e cadeia de
custódia. Quem decide a amostragem passa a decidir o que poderá ser provado.

**Por que agora, e não há cinco anos.** Porque a data está marcada: 02/12/2027 e 02/08/2028 para o
artigo 12 do AI Act, com norma técnica em elaboração (prEN ISO/IEC 24970); porque existe uma
gramática comum nascendo para descrever a trajetória (`invoke_agent`, `execute_tool`,
`invoke_workflow`); e porque o capital já se moveu — US$ 915 milhões numa única aquisição,
justificada precisamente por unir o que se avalia antes com o que se observa depois. Há cinco anos
não havia nem obrigação datada nem vocabulário.

**Onde está na difusão.** Adoção precoce para a *ferramenta*, laboratório para o *regime*. É
preciso separar: emitir trace é prática difundida entre quem constrói agente (62%, 71,5% em
produção, na amostra mais favorável que existe); tratar o trace como prova admissível, com
retenção obrigatória e custódia, não tem caso consolidado.

**O que ainda falta acontecer.** (i) As convenções GenAI saírem de *Development* — hoje sem
cronograma público. (ii) Um primeiro caso em que a integridade do trace (e não o seu conteúdo)
seja o objeto da disputa. (iii) Uma política de retenção com prazo e custo declarados. (iv) Acesso
a alguma parte da trajetória interna do modelo, hoje barrada por segredo industrial.

### Candidatos recusados

- **Candidato "observabilidade de aplicação (APM), logs e métricas" recusado como raiz:** adoção em
  maioria há mais de uma década; tratado como contexto na seção 3. O que é emergente não é
  observar, é observar o que não é determinístico.
- **Candidato "teste automatizado e integração contínua" recusado como raiz:** maduro; entra como o
  regime que R1 rompe, não como ruptura.
- **Candidato "RAG" recusado como raiz:** técnica difundida e, segundo a melhor evidência
  controlada que abri, ainda a *baseline a bater* — não a ruptura.
- **Candidato "LLM-as-a-judge" recusado como raiz:** é técnica dentro de R1, já em uso amplo, e o
  que rompe não é ela e sim a descoberta de que ela é confiável sem ser válida. Entra como `e3`.
- **Candidato "agentes autônomos" recusado como raiz deste mapa:** é a pré-condição comum a todos
  os temas da família, e uma raiz que serve para qualquer tema falha no teste de especificidade.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A avaliação de sistemas não determinísticos vira a disciplina que decide o que pode existir
    efeitos:
      - id: e1
        ordem: 1
        efeito: O critério de pronto deixa de ser passa/não-passa e vira faixa de desempenho com número de amostras declarado
        sinal: medio
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Contratos de fornecimento de software passam a especificar consistência (pass^k) e n de amostras em vez de lista de funcionalidades
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Compra pública deixa de contratar sistema e passa a contratar faixa de desempenho verificada por terceiro credenciado
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O custo de avaliar entra no orçamento como item visível e passa a competir com o custo de operar o produto
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Avaliação exaustiva vira privilégio de quem tem capital e equipes pequenas passam a declarar cobertura amostral em vez de garantia
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O benchmark público deixa de orientar decisão de compra e vira piso mínimo, porque contaminação e defeito de tarefa o corroem em dois a cinco anos
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Forma-se um mercado de benchmark privado e rotativo, vendido por assinatura e nunca publicado
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Provar que um sistema presta fica mais caro do que construí-lo, e quem não assina o benchmark privado perde o canal formal
                sinal: fraco
                prazo: 2045
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O placar público migra de acurácia média para consistência e custo por tarefa concluída
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Modelos passam a ser projetados para consistência em detrimento do pico de capacidade, e a fronteira deixa de ser o topo do placar
                sinal: fraco
                prazo: 2041
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O juiz-modelo é contestado como medida e passa a exigir calibração humana periódica documentada para valer como evidência
        sinal: medio
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Consolida-se a função de calibrador de juiz, responsável pelo conjunto-ouro humano e pela medição da deriva
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A rotulagem que sustenta a calibração é terceirizada para trabalho de alto volume e baixa remuneração, repetindo a economia da moderação de conteúdo
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A discordância entre juízes passa a ser publicada junto com o resultado e vira atributo comparável de produto
            sinal: fraco
            prazo: 2035
            confianca: baixa
      - id: e4
        ordem: 1
        efeito: O custo e a lentidão da avaliação séria empurram parte do mercado para avaliação por incidente, em que só se mede o que já quebrou
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Seguradoras passam a precificar apólice de software agêntico e exigem evidência de avaliação como condição de cobertura
            sinal: fraco
            prazo: 2038
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A apólice, e não a lei, passa a determinar o patamar real de qualidade exigido de um agente em produção
                sinal: fraco
                prazo: 2050
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Os laboratórios que publicam o próprio placar passam a controlar a definição do que conta como avaliação suficiente
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A avaliação independente vira função credenciada, com registro profissional e responsabilidade pessoal do avaliador
            sinal: fraco
            prazo: 2040
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O credenciamento se concentra em poucas firmas globais e reproduz o conflito da auditoria contábil, em que quem paga o auditor é o auditado
                sinal: fraco
                prazo: 2052
                confianca: media
  - disrupcao: A memória que atravessa sessões deixa de ser cache e vira patrimônio
    efeitos:
      - id: e6
        ordem: 1
        efeito: O valor de um assistente migra do modelo para o estado acumulado, e trocar de fornecedor deixa de ser troca de ferramenta e vira perda de histórico
        sinal: medio
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Portabilidade de memória entra em norma como obrigação, por analogia direta com a portabilidade numérica e com a portabilidade de dados do GDPR
            sinal: fraco
            prazo: 2038
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A portabilidade obrigatória entrega o arquivo e não o comportamento, e a norma descobre que regulou o objeto errado
                sinal: fraco
                prazo: 2048
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Aparece o custodiante de memória, terceiro que guarda o estado fora do fornecedor do modelo e responde por ele
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: O custodiante vira ponto único de falha e alvo preferencial, e sequestrar a memória de alguém passa a valer mais do que sequestrar seus arquivos
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e6.3
            ordem: 2
            efeito: Memória acumulada entra no balanço como intangível, com laudo de avaliação e critério de amortização
            sinal: fraco
            prazo: 2040
            confianca: baixa
            efeitos:
              - id: e6.3.1
                ordem: 3
                efeito: Auditoria de memória de agente entra na due diligence de fusão e aquisição, e memória comprometida vira motivo documentado de renegociação de preço
                sinal: fraco
                prazo: 2050
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Quem projeta interação passa a projetar o esquecimento, e a interface precisa mostrar o que o sistema guardou e oferecer o gesto de apagar
        sinal: fraco
        prazo: 2032
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Firma-se um vocabulário de interface para memória (fixar, esquecer, expirar, escopo) tão estável quanto o de arquivo
            sinal: fraco
            prazo: 2037
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A lixeira de memória vira a metáfora dominante e, como a lixeira de arquivo, não apaga de verdade, descolando a promessa visual do que ocorre no índice vetorial
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: O direito ao apagamento colide com a obrigação de rastro, porque apagar o que o agente lembrou destrói a prova de por que ele decidiu
            sinal: medio
            prazo: 2033
            confianca: alta
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A jurisprudência cria a categoria do registro de decisão sem dado pessoal, prova despersonalizada que preserva o rastro e enfraquece a explicação
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: O ganho da memória sobre recuperação simples segue não demonstrado, e o campo passa uma década medindo a coisa errada antes de medir a certa
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O placar de memória migra de lembrar para agir melhor por lembrar, e os números publicados caem por volta da metade
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Boa parte dos produtos de memória lançados entre 2024 e 2030 desaparece quando a medida muda, como ocorreu com os motores de recomendação quando a métrica deixou de ser clique
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: Memória persistente vira superfície de ataque de meia-vida longa, com envenenamento que fica dormente e ativa depois
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Toda escrita em memória passa a exigir proveniência assinada, com autor, entrada de origem e autoridade registrados
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A proveniência assinada torna a memória auditável e, no mesmo gesto, torna o histórico da pessoa não repudiável, tirando dela a possibilidade de negar o que o sistema registrou
                sinal: fraco
                prazo: 2045
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: Detecção forense de memória envenenada entra em produto com falso positivo alto o bastante para exigir uma rotina permanente de apelação humana
            sinal: fraco
            prazo: 2036
            confianca: media
      - id: e10
        ordem: 1
        efeito: O custo de guardar e governar memória cresce mais rápido que o ganho medido, e produtos passam a vender esquecimento agressivo como recurso
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Amnésia por padrão vira posicionamento de mercado e argumento de privacidade, invertendo a promessa de 2026
            sinal: fraco
            prazo: 2039
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Consolidam-se duas classes de serviço, o agente que lembra e o que esquece, e a diferença entre elas passa a acompanhar a diferença de renda de quem os usa
                sinal: fraco
                prazo: 2052
                confianca: baixa
  - disrupcao: O rastro de execução vira o objeto de prova
    efeitos:
      - id: e11
        ordem: 1
        efeito: O trace deixa de ser artefato de operação e vira registro com prazo legal de retenção e formato exigido
        sinal: medio
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: O custo de armazenar trajetória cruza o custo de operar o agente, e a política de amostragem deixa de ser decisão técnica para ser decisão jurídica
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Quem definiu a amostragem definiu o que pode ser provado, e a política de amostragem vira a peça mais disputada nos litígios sobre decisão automatizada
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: O formato do rastro se padroniza por força normativa antes de se estabilizar por consenso técnico
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: O padrão legal congela um modelo de agente do fim dos anos 2020 e passa a restringir arquiteturas viáveis duas décadas depois
                sinal: fraco
                prazo: 2045
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: Reprodução determinística de execução vira requisito de entrega, e não conseguir repetir uma execução passa a ser defeito e não característica
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: O replay barateia a avaliação por rodar sobre gravação em vez de chamada viva, e funde observabilidade e avaliação num produto só
            sinal: medio
            prazo: 2033
            confianca: alta
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: A gravação de trajetória vira corpus de treino e o agente passa a ser destilado do próprio rastro, aprendendo a imitar a si mesmo com a deriva que isso acarreta
                sinal: fraco
                prazo: 2043
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: Como a chamada ao modelo permanece a entrada não determinística irredutível, o replay prova o caminho e não a decisão, e o foro judicial precisa lidar com essa distinção
            sinal: fraco
            prazo: 2037
            confianca: media
      - id: e13
        ordem: 1
        efeito: A peça de mídia passa a ser entregue acompanhada do rastro que a produziu, e a autoria vira uma pergunta sobre a trajetória
        sinal: fraco
        prazo: 2035
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: O crédito de obra passa a listar ferramentas, instruções e revisões como hoje se listam as funções técnicas de um filme
            sinal: fraco
            prazo: 2040
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: O rastro vira material estético, e surgem obras que exibem o próprio processo de fabricação como parte do que são
                sinal: fraco
                prazo: 2048
                confianca: baixa
          - id: e13.2
            ordem: 2
            efeito: Plataformas de distribuição passam a exigir o rastro para aceitar a obra, e a ausência dele vira sinal de suspeita
            sinal: fraco
            prazo: 2042
            confianca: baixa
            efeitos:
              - id: e13.2.1
                ordem: 3
                efeito: Quem não dispõe da infraestrutura que produz rastro fica fora do canal formal de distribuição, e o custo de provar autoria recai sobre quem tem menos meios
                sinal: fraco
                prazo: 2050
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: Fornecedores de modelo resistem a expor a trajetória interna alegando segredo industrial, e o rastro auditável para no limite da API
        sinal: medio
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: A auditoria se acomoda ao rastro externo de entradas, saídas e ferramentas e trata essa cobertura parcial como suficiente
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: Um incidente de grande repercussão mostra que o rastro externo não explicava o ocorrido, e a exigência de registro interno se impõe décadas depois da externa, como ocorreu com o gravador de voo
                sinal: fraco
                prazo: 2053
                confianca: media
```

### Os mecanismos, que o bloco não carrega

**R1.** `e1` decorre de `R1` porque uma medida que só existe como distribuição não pode ser
assinada como booleano: alguém tem de escolher o corte, e escolher o corte é escrever uma faixa.
`e1.1` decorre de `e1` porque o que o comprador aceita internamente acaba virando cláusula: é o
caminho que o SLA de disponibilidade percorreu na nuvem, da prática interna ao contrato, em cerca
de oito anos — daí 2034 e não 2029. `e1.2` decorre de `e1` porque medir distribuição custa k
execuções, não uma, e k execuções aparecem na fatura; `e1.2.1` decorre daí porque custo fixo alto
sempre separa quem pode pagá-lo, e a saída de quem não pode é declarar cobertura em vez de
garantia.

`e2` decorre de `R1` porque benchmark público é alvo de treino: publicado, ele entra no corpus, e a
medida passa a medir memorização. O número que sustenta o mecanismo é o vazamento de solução em
32,67% dos patches e a recuperação de caminho de arquivo em até 76%. `e2.1` decorre de `e2` porque
a defesa contra contaminação é não publicar, e não publicar é vender por assinatura — o mesmo
movimento dos índices financeiros proprietários. `e2.1.1` decorre de `e2.1` porque o custo se
desloca da construção para a demonstração; **este é um efeito de quem perde**. `e2.2` decorre de
`e2` porque, quando a acurácia deixa de discriminar, o eixo disponível é a consistência, que é
exatamente o que pass^k mede (~25% em pass^8 contra ~61% em pass^1, τ-retail, GPT-4o, 2024).

`e3` decorre de `R1` porque o juiz é um sistema não determinístico avaliando outro, e a evidência
de 2026 separa o que se confundia: reprodutibilidade acima de 0,95 convivendo com viés posicional
acima de 0,10, e κ 33,8 a 41,3 pontos abaixo da concordância bruta. `e3.1` decorre de `e3` porque
calibrar exige conjunto-ouro humano mantido no tempo, e manter algo no tempo é cargo, não projeto.
Nomeio o cargo em vez de dizer "surge uma nova profissão": é o *evals engineer* de 2026 se
especializando, e as faixas que encontrei (US$ 230 mil a US$ 1,2 milhão de remuneração total,
segundo guia sem metodologia declarada — ver seção 8) valem como ordem de grandeza, não como dado.
`e3.1.1` decorre de `e3.1` por um mecanismo com precedente direto: a moderação de conteúdo saiu de
função interna de plataforma para indústria terceirizada de baixa remuneração em cerca de dez anos.
**Quem perde aqui é quem rotula.**

`e4` é a **retroação de R1**: o freio da própria disrupção. Avaliação séria é cara e lenta; a
resposta previsível do mercado é medir só o que já deu errado, e 29,5% de organizações sem
avaliação nenhuma é o sinal presente disso. `e4.1` decorre de `e4` porque, quando o mercado não
internaliza o risco, quem o precifica é quem o carrega: a classe de referência é o seguro
cibernético, que levou cerca de vinte anos das primeiras apólices (fim dos anos 1990) até exigir
controles técnicos como condição de cobertura (início dos anos 2020) — daí 2038.

`e5` é **quem bloqueia em R1**: o ator com incentivo para capturar a mudança é quem hoje publica o
próprio placar. `e5.1` decorre de `e5` porque a resposta institucional ao conflito de interesse em
autoavaliação é o credenciamento de terceiro. A classe de referência é a auditoria contábil: do
crash de 1929 à obrigação legal de auditoria externa foram cerca de cinco anos, mas da obrigação à
profissão consolidada e concentrada foram quatro a cinco décadas — por isso `e5.1` em 2040 e
`e5.1.1` em 2052, e não antes.

**R2.** `e6` decorre de `R2` pelo mecanismo mais simples e mais forte do mapa: o estado não é
exportável de forma que outro leia (sete produtos, sete formas de não), então o custo de troca
cresce monotonicamente com o tempo de uso. `e6.1` decorre de `e6` porque custo de troca crescente é
o gatilho histórico da regulação de portabilidade; a classe de referência é a portabilidade
numérica, que levou de sete a doze anos entre o mandato legal e a operação real (EUA 1996→2003,
Brasil 2008) — mas aqui o mandato ainda nem existe, daí 2038. `e6.1.1` decorre de `e6.1` pela
classe de referência mais dura que encontrei: a interoperabilidade de prontuário eletrônico, com
trinta anos de mandato e ainda incompleta, porque o que se transfere é o arquivo e o que importa é
o comportamento do sistema que o lê. `e6.2` decorre de `e6` porque patrimônio exige custódia
independente do emissor; `e6.2.1` decorre de `e6.2` porque concentração de valor gera alvo, e
memória concentra inferência, não só registro. `e6.3` e `e6.3.1` decorrem de `e6` pela via
contábil: o que tem valor de troca e vida útil acaba no balanço, e o que está no balanço é
auditado numa fusão.

`e7` decorre de `R2` porque um sistema que guarda sem mostrar produz modelo mental incompleto —
achado da literatura de interação —, e a resposta de projeto a modelo mental incompleto é tornar o
estado visível e manipulável. É o efeito mais diretamente endereçado ao público deste mapa. `e7.1`
decorre de `e7` porque vocabulário de interface se estabiliza quando o objeto se estabiliza, como
"salvar/copiar/lixeira" se estabilizou para arquivo. `e7.1.1` decorre de `e7.1` pelo mesmo
precedente, invertido: a lixeira de arquivo educou duas gerações a achar que apagar apaga. `e7.2`
decorre de `e7` e de `R3` ao mesmo tempo — é a **convergência** do mapa, tratada adiante.

`e8` decorre de `R2` pela negativa, e é o efeito que mais custa admitir num mapa sobre este tema: a
melhor evidência controlada de 2026 não sustenta o ganho. `e8.1` decorre de `e8` porque a correção
metodológica já está publicada (MemoryArena: queda de quase perfeito para 40–60%). `e8.1.1` decorre
de `e8.1` pela classe de referência dos motores de recomendação dos anos 2010, que sumiram em massa
quando a métrica deixou de ser clique.

`e9` decorre de `R2` porque estado durável e gravável por entrada não confiável é, por definição,
canal de persistência para um atacante — seis classes de ataque, quatro canais de escrita, nove
fragilidades estruturais, ASR até 0,95. `e9.1` decorre de `e9` porque a defesa disponível para
escrita não confiável é proveniência. `e9.1.1` decorre de `e9.1` por inversão: o mesmo registro que
protege o sistema retira da pessoa a possibilidade de negar — **quem perde é o usuário**. `e9.2`
decorre de `e9` e carrega o número que impede otimismo: AUC 0,9904 e falso positivo incondicional
de 24,7% a 52,6% no mesmo trabalho.

`e10` é a **retroação de R2**. `e10.1` decorre dele porque, quando o custo supera o ganho, o
argumento comercial se inverte, e privacidade é o argumento disponível. `e10.1.1` decorre de
`e10.1` por estratificação de preço, que é o que sempre acontece quando um recurso caro vira opção:
**quem perde é quem só pode pagar o serviço que esquece.**

**R3.** `e11` decorre de `R3` porque a obrigação já tem data e a norma técnica já está em
elaboração. `e11.1` decorre de `e11` porque trajetória completa é ordens de grandeza maior que log
de aplicação, e a resposta a volume é amostragem; quando o registro é prova, amostrar é decidir o
que se poderá provar. `e11.1.1` decorre daí diretamente. `e11.2` decorre de `e11` pelo descompasso
medido: a obrigação tem data (2027/2028) e o padrão técnico não tem cronograma público de
estabilização. A classe de referência é a convergência contábil internacional, que levou décadas e
nunca fechou; `e11.2.1` decorre de `e11.2` porque padrão escrito em lei muda na cadência da lei.

`e12` decorre de `R3` porque prova exige repetição, e a repetição de execução de agente é problema
técnico resolvido em preprint e não em produto. `e12.1` decorre de `e12` por economia: rodar sobre
gravação custa uma fração de rodar ao vivo (−98,3% de latência mediana por etapa, n = 250), e a
consolidação já começou — US$ 915 milhões pagos com exatamente esse argumento, o que justifica a
confiança alta neste efeito de segunda ordem, uma das duas do mapa. `e12.1.1` decorre de `e12.1`
porque corpus gravado é corpus de treino. `e12.2` decorre de `e12` pelo limite conceitual declarado
pela própria fonte: replay reproduz o ambiente, não a amostragem do modelo.

`e13` decorre de `R3` transposto para o público deste mapa: se o artefato não prova a máquina, o
que se arquiva junto com a peça é a trajetória. `e13.1` decorre de `e13` por analogia com o crédito
técnico de cinema, que se formou quando ficou impossível atribuir a obra a uma pessoa. `e13.1.1`
decorre de `e13.1` por um mecanismo cultural conhecido: restrição de produção vira convenção
estética, como o granulado da película e o *lo-fi*. `e13.2` decorre de `e13` porque plataforma usa
requisito de metadado como filtro barato; `e13.2.1` decorre de `e13.2` e é a linha de **quem
perde** mais relevante para o recorte global: o custo de produzir rastro recai sobre quem tem menos
infraestrutura.

`e14` é **quem bloqueia em R3**, e é o mais concreto dos três bloqueadores: a trajetória interna do
raciocínio é o ativo que nenhum fornecedor expõe. `e14.1` decorre de `e14` por acomodação
institucional — auditoria sempre se acomoda ao que é acessível. `e14.1.1` decorre de `e14.1` pela
classe de referência do gravador de voo: do primeiro protótipo (meados dos anos 1950) à
obrigatoriedade nacional (1960, Austrália) foram poucos anos, mas o registro de **parâmetros
internos** de voo, e não só de voz, levou mais duas a três décadas para se generalizar. Trinta anos
é exatamente a janela deste mapa, e por isso `e14.1.1` fica em 2053.

### Regra de parada

Parei em três ordens em todos os ramos porque, do terceiro nível em diante, os candidatos que
apareciam eram o mesmo efeito amadurecendo, sem troca de ator nem de mecanismo. Dois exemplos, para
que a decisão seja auditável: abaixo de `e5.1.1` o candidato era "o oligopólio de auditores é
questionado e surge pressão por auditoria pública" — mesmo ator, mesmo mecanismo, adiante no tempo;
abaixo de `e9.1.1` o candidato era "a não repudiabilidade é usada em processo trabalhista" — é
aplicação do mesmo efeito, não outro efeito.

### Teste da causa solta

Apliquei a cada efeito de 2ª e 3ª ordem a pergunta "isto aconteceria do mesmo jeito sem esta raiz?".
Dois não passaram e foram removidos (registro na seção 7 e texto na seção 12): "equipes adotam
versionamento de prompt" — acontece por engenharia de software comum, sem precisar de nenhuma das
três raízes — e "o custo de inferência cai e viabiliza avaliação contínua" — decorre da economia de
hardware, não da avaliação. Um terceiro foi reconectado: "surge o cargo de calibrador" estava sob
`e1` e passou para `e3`, porque o mecanismo que o produz é a invalidade do juiz-modelo, não a faixa
de desempenho.

### Cobertura STEEP e quem perde

**Social:** `e7`, `e10.1.1`, `e13.2.1`. **Tecnológico:** `e8`, `e11.2`, `e12`. **Econômico:**
`e1.2`, `e2.1`, `e4.1`, `e6.3`. **Político:** `e5.1`, `e11`, `e14`. **Ecológico: ficou vazio, e
registro isso em vez de forçar.** O custo material de reter trajetória e re-executar avaliação é
real e aparece indiretamente em `e11.1` e `e1.2`, mas não encontrei nenhum número aberto de
consumo energético atribuível a observabilidade ou avaliação de agente — sem número, não invento o
efeito.

**Quem perde** está nomeado em cinco pontos: quem rotula para calibração (`e3.1.1`), a equipe
pequena sem capital de avaliação (`e1.2.1`), quem não assina o benchmark privado (`e2.1.1`), quem
usa o serviço que esquece porque é o que cabe no bolso (`e10.1.1`), e quem produz mídia sem a
infraestrutura que gera rastro (`e13.2.1`).

### Cruzamentos

**Convergência (o achado mais valioso).** Dois ramos de raízes diferentes chegam ao mesmo objeto.
De R2 vem `e7.2`: apagar a memória destrói a explicação. De R3 vem `e11`: o rastro tem de ser
retido. O ponto de encontro é `e7.2.1` — uma categoria jurídica nova, o registro de decisão sem
dado pessoal. Ele resolve as duas obrigações e paga um preço que nenhuma das duas previa: uma prova
que mostra **que** a decisão foi tomada assim sem mostrar **sobre quem**, o que é exatamente o que
não serve para a pessoa afetada contestar. Convergência independente, em dois ramos que não se
tocam em nenhum outro ponto, é o sinal mais forte deste mapa.

**Segunda convergência.** `e2.1` (benchmark privado) e `e12.1` (replay barateia avaliação) chegam
juntos ao mesmo produto: o benchmark privado feito de **gravações de produção**, não de tarefas
sintéticas. É previsível, tem economia a favor, e transforma o cliente em fornecedor involuntário
do conjunto de teste — com todas as questões de consentimento que isso abre.

**Retroalimentação.** `e9.1` (proveniência assinada) reforça as duas raízes de que não deriva:
assinada, a memória vira auditável (alimenta R3) e, ao mesmo tempo, transferível com garantia de
integridade, o que é precondição de patrimônio (alimenta R2). É um ciclo de reforço: quanto mais
memória vale, mais se assina; quanto mais se assina, mais ela vale.

**Contradição, registrada e não resolvida.** `e10.1` (amnésia por padrão vira argumento de mercado)
e `e6.3` (memória entra no balanço como ativo) não coexistem no mesmo produto. O que decide entre
elas é uma variável que o mapa não consegue estimar: se o ganho de desempenho atribuível à memória
sobrevive à baseline controlada. Se sobreviver, vence `e6.3`; se não, vence `e10.1`. Os dois ficam
no mapa, e `e8` é o efeito que arbitra.

## 6. Sinais fracos e wildcards

### Sinais fracos

**SF1 — "Soberania mnemônica" como termo técnico.** Um levantamento de 17/04/2026 (MemTensor,
Xangai) propõe o conceito: controle verificável e recuperável de um sistema sobre o próprio estado
de memória — o que pode ser escrito, quem lê, quando se atualiza, o que pode ser deletado.
Interessa porque é vocabulário de **soberania** aplicado a memória de máquina, e vocabulário
precede norma. *Sinal observável de crescimento:* o termo, ou equivalente funcional, aparecer em
texto normativo ou em norma técnica — não em mais um survey.

**SF2 — Um protocolo de memória portátil que já existe e ninguém adotou.** Merkle-DAG de
proveniência, controle por capacidade, JSON/CBOR, Apache 2.0, 54 testes, **uma** implementação.
*Sinal observável:* uma segunda implementação independente que leia o arquivo da primeira. Isso é
literalmente a simetria de importação que nenhum dos sete produtos testados tem, e sem ela `e6.1`
não tem como se concretizar.

**SF3 — O lugar vago no MCP.** A especificação de 28/07/2026 formaliza um framework de extensões
versionadas independentemente, que é o abrigo estrutural natural para uma interface de memória. O
roadmap 2026 (09/03/2026) lista quatro prioridades e **memória não é nenhuma delas**. *Sinal
observável:* uma proposta de extensão de memória aberta no repositório, com mais de um implementador
interessado.

**SF4 — Avaliação com consequência financeira real.** O Alpha Arena deu US$ 10 mil de capital real
a cada modelo, em contratos perpétuos de cripto na Hyperliquid, com o mesmo prompt: os resultados
foram de +22,31% a −62,66%, e os próprios organizadores publicaram a ressalva de que nada ali prova
capacidade durável. Importa não pelo resultado e sim pelo desenho: consequência real em lugar de
placar. *Sinal observável:* capital institucional (não do organizador) entrando numa arena de
avaliação, ou uma seguradora usando resultado de arena para precificar apólice — seria o gatilho
precoce de `e4.1`.

**SF5 — Protocolo que pontua governança de estado em vez de qualidade da resposta.** O AOEP-v0,
proposto no levantamento de 435 trabalhos, pontua obrigações de mutação e recuperação de estado.
É a primeira tentativa que encontrei de medir o que a literatura não mede. *Sinal observável:*
adoção por um benchmark de terceiro, não dos autores.

**SF6 — Publicar o próprio contraexemplo.** O trabalho de assinaturas forenses publica AUC 0,9904 e,
no mesmo artigo, o estudo que derruba a aplicabilidade (falso positivo incondicional de 24,7% a
52,6%). É sinal fraco **cultural**, não técnico: se a prática se espalhar, a corrosão de benchmark
descrita em `e2` desacelera. *Sinal observável:* proporção de artigos de avaliação que publicam um
estudo de falseamento próprio; hoje é rara o bastante para ser notável.

### Wildcards

**W1 — Um tribunal superior declara inadmissível o rastro produzido pelo próprio réu.**
*Mecanismo:* cadeia de custódia. Se o registro que prova a conduta do agente é gerado, armazenado e
amostrado pela mesma parte que responde por ele, a defesa e a acusação podem atacar a integridade
em vez do conteúdo; a resposta institucional seria custódia notarial de trace por terceiro.
*Por que é improvável:* tribunais aceitam log próprio de empresas há décadas, com ônus de prova
invertido no máximo. *O que faria com o mapa:* mataria `e11` na forma escrita e criaria um mercado
de custódia que hoje não existe; reforçaria `e6.2` por outra via. *Sinal precoce:* o primeiro caso
em que a disputa é sobre a **integridade** do trace e não sobre o que ele contém.

**W2 — Vazamento em escala de memórias destiladas, não de conversas.** *Mecanismo:* o que a camada
de memória guarda não é o histórico e sim a inferência sobre a pessoa — preferências, padrões,
conclusões que ela nunca escreveu. Esse material é semanticamente mais denso que qualquer log, e os
canais de escrita e exfiltração já estão mapeados em seis classes. *Por que é improvável na escala:*
exigiria concentração de memória num único fornecedor grande o suficiente, o que ainda não
aconteceu. *O que faria com o mapa:* antecipa `e10.1` (amnésia por padrão) em cerca de uma década e
força `e6.1` (portabilidade obrigatória) na esteira, como o vazamento de crédito ao consumidor de
2017 acelerou legislação estadual nos EUA. *Sinal precoce:* o primeiro incidente noticiado
descrevendo exfiltração de **memória**, com essa palavra, e não de histórico de conversa.

**W3 — Um resultado formal de impossibilidade sobre avaliação amostral.** *Mecanismo:* uma
demonstração de que, para uma classe de sistema não determinístico com dependência entre execuções
(que é o caso de agente com memória), nenhum número praticável de amostras limita o risco de cauda
abaixo de um patamar. *Por que é improvável:* resultados assim costumam sair condicionais demais
para decidir política. *O que faria com o mapa:* removeria a legitimidade de R1 como garantia e
deslocaria a resposta inteira para contenção — que é o tema vizinho, não este. `e1`, `e1.1` e
`e5.1` cairiam juntos. *Sinal precoce:* o resultado ser citado em documento de política pública, e
não só em conferência.

## 7. Contra o próprio mapa

Esta seção é o relato da bateria aplicada ao mapa já pronto, e as alterações listadas ao final
foram efetivamente feitas no bloco da seção 5.

### 7.1 Pré-mortem — é 2056 e este mapa se mostrou errado

**Razão 1: a memória nunca virou patrimônio porque nunca valeu nada.** É a hipótese com mais
evidência a favor **hoje**: sob baseline controlada, RAG literal empata com contexto completo
(47,2% × 49,8%, p = 0,34), a auto-memória do agente perde para recuperação básica (42% × 47%), e
onde empata custa 50× mais. Se o campo, entre 2027 e 2032, confirmar que o ganho é de composição e
não de memória, R2 inteira vira uma nota de rodapé sobre cache caro. *Efeito:* `e6.3` rebaixado
para confiança baixa; `e8` mantido com sinal médio porque é justamente o efeito que representa esta
razão dentro do mapa.

**Razão 2: a obrigação regulatória foi cumprida no papel e não mudou nada.** O artigo 12 exige
"registro automático de eventos". Uma leitura conservadora se satisfaz com log de aplicação, que já
existe desde sempre. Se os órgãos de fiscalização aceitarem isso, R3 não rompe coisa nenhuma: vira
mais um campo em formulário de conformidade. *Efeito:* `e11.2` teve o prazo empurrado de 2031 para
2033, e `e14.1` — a acomodação ao rastro externo — ganhou peso no mapa, porque é a forma que essa
razão assume se ela estiver certa.

**Razão 3: o determinismo saiu por baixo.** Se o custo de inferência cair a ponto de rodar cada
tarefa cem vezes sair barato, a avaliação estatística vira trivial, e a instituição que o mapa
prevê (credenciamento, auditor, faixa contratual) não chega a se formar por falta de escassez. É a
razão mais desconfortável porque contraria a intuição de que "caro continua caro". *Efeito:* `e12`
rebaixado de confiança alta para média — o requisito de replay só é requisito se repetir for caro.

### 7.2 Extrapolação linear

Dois efeitos eram "mais do mesmo, maior" e foram tratados. `e1.2` (custo de avaliação visível) era
pura projeção de uma linha de custo; ganhou mecanismo de não-linearidade — a avaliação escala com
**k execuções por tarefa**, e não com número de tarefas, então o custo cresce numa dimensão
diferente da do produto. `e11.1` (custo de trajetória) recebeu o mesmo tratamento: o que o torna
não-linear é a trajetória completa ser ordens de grandeza maior que o log de aplicação, e não o
crescimento do uso. Um terceiro, "equipes adotam versionamento de prompt", **foi removido**: é
extrapolação de prática de engenharia de software que aconteceria sem nenhuma das três raízes
(reprovado no teste da causa solta).

### 7.3 Velocidade de adoção

Confrontei todos os prazos com sinal fraco contra as classes de referência. Três foram empurrados.
`e5.1` (avaliação credenciada) estava em 2036; a auditoria contábil levou quatro a cinco décadas do
marco legal à profissão consolidada, e como aqui nem marco legal de avaliação existe, foi para
**2040**. `e11.2` foi de 2031 para **2033**, porque a convergência de padrão contábil internacional
levou décadas e nunca fechou, e as convenções GenAI não têm sequer cronograma. `e8` foi de 2029
para **2031**: a correção metodológica de um campo leva o tempo de um ciclo completo de publicação
e refutação, e o primeiro trabalho de baseline controlada é de meados de 2026.

Um prazo foi mantido contra a tentação de empurrar: `e9` em **2029**, porque o efeito já é
observável — seis classes de ataque catalogadas, ASR até 0,95, entrada no catálogo de riscos de
segurança de agentes em 2026. Este não é previsão, é descrição.

### 7.4 E se a raiz não acontecer

**Sem R1** (avaliação não vira disciplina): sobram R2 e R3 quase intactas — memória continua sendo
patrimônio pela via do custo de troca, e rastro continua sendo prova pela via regulatória. Cai o
ramo `e1`–`e5` inteiro e cai `e2.1` como mercado.

**Sem R2** (memória não vira patrimônio): o mapa perde o ramo mais volumoso, mas R1 e R3 sobrevivem
inteiras — a avaliação de não determinístico e o regime probatório do rastro não dependem de o
agente lembrar. Perde-se toda a linha de interface (`e7`), que é justamente a mais relevante para o
público deste mapa.

**Sem R3** (rastro não vira prova): R1 fica enfraquecida mas viva (avaliar não exige valor
probatório), e R2 fica intacta. Perde-se a convergência de `e7.2.1`, que é o achado central.

Nenhuma raiz sustenta as outras duas, e nenhuma sobra sozinha com o mapa inteiro. **Não são três
nomes para a mesma coisa.** Mas há uma dependência assimétrica que registro: R3 depende de o
regulador levar a sério (razão 2 do pré-mortem), enquanto R1 e R2 têm motor econômico próprio.

### 7.5 Suposições escondidas

Cinco premissas que o mapa assumia sem dizer, agora ditas:

1. **Que continua havendo fornecedor externo.** Se o modelo roda no dispositivo e o estado é local,
   `e6` (custo de troca) e `e6.1` (portabilidade regulada) perdem o objeto. A premissa quebrada vira
   um wildcard que eu não escrevi e devia ter escrito.
2. **Que a regulação europeia continua sendo o vetor.** O mapa usa o AI Act como relógio. Se o
   cronograma for adiado ou esvaziado — o que já aconteceu com prazos de outras normas digitais —,
   `e11` e `e11.2` derrapam uma década.
3. **Que o arranjo cliente-fornecedor persiste.** Trinta anos é tempo suficiente para a unidade
   econômica do software mudar de forma; contrato, apólice e credenciamento pressupõem duas partes
   identificáveis.
4. **Que a avaliação é feita por alguém que quer saber.** Todo o ramo de R1 pressupõe demanda por
   verdade. `e4` é o único efeito que trata da hipótese contrária, e ele é retroação, não raiz.
5. **Que custo de armazenamento continua caindo devagar e custo de inferência continua caindo
   rápido.** Se a relação se inverter, `e11.1` (amostragem como decisão jurídica) muda de sinal.

### 7.6 Viés do autor

Dois efeitos estão no mapa porque quem escreve gosta do tema, e os nomeio. `e13.1.1` (o rastro vira
material estético) é o mais bonito do mapa e o mais frouxo: o mecanismo — restrição de produção
virando convenção estética — é real e tem precedentes, mas não há **nenhum** artefato hoje que o
sustente, e ele sobrevive porque é agradável de pensar. Fica, com sinal fraco e confiança baixa, e
com esta confissão anexada. `e7` (projetar o esquecimento) está mais destacado do que a evidência
justifica porque é o efeito que fala diretamente ao público do mapa; a evidência de base é um
trabalho de interação humano-computador cujo texto integral **não consegui abrir** (ver seção 8).

Há também um viés de recorte que declaro: este mapa lê o futuro pela institucionalização
(contrato, norma, auditoria, seguro), e não pela capacidade técnica. Essa escolha faz os prazos
longos e os efeitos conservadores. Um mapa escrito pela outra lente daria anos mais cedo.

### 7.7 Calibração

Contagem final por ordem, depois das alterações. **1ª ordem (14):** alta 7, média 7, baixa 0.
**2ª ordem (24):** alta 2, média 18, baixa 4. **3ª ordem (21):** alta 0, média 2, baixa 19. A
distribuição cai com a ordem, como deve. As duas únicas confianças altas de 2ª ordem são `e7.2` (a
colisão apagar × provar, que decorre de norma vigente com texto e prazo) e `e12.1` (fusão de
observabilidade e avaliação, que já aconteceu em transação de US$ 915 milhões). As duas médias de
3ª ordem são as que têm classe de referência histórica direta: `e5.1.1` (oligopólio de auditores) e
`e14.1.1` (registro interno décadas depois do externo).

### 7.8 Registro de alterações

A bateria derrubou coisa em todas as três raízes. Cada linha traz o valor antes e depois.

**R1**
- `e1`: prazo **2029 → 2031**, porque a classe de referência (SLA de nuvem, da prática interna à
  cláusula contratual) levou cerca de oito anos.
- `e3.2`: confiança **media → baixa**, porque não há hoje nenhum produto que publique discordância
  entre juízes; é inferência pura a partir de `e3`.
- `e5.1`: prazo **2036 → 2040**, pela classe de referência da auditoria contábil (§7.3).
- **Removido:** "cursos de computação criam disciplina de avaliação de IA" — efeito genérico
  proibido pelo critério da própria skill: serve para qualquer tema, não tem curso nomeado nem
  mecanismo que o ligue ao pai. Vai para a seção 12.

**R2**
- `e6.3`: confiança **media → baixa**, porque não encontrei nenhum caso de laudo de avaliação de
  memória de agente; o efeito é analogia contábil sem artefato.
- `e8`: prazo **2029 → 2031** (§7.3).
- `e10`: sinal **medio → fraco**, porque "esquecimento agressivo como recurso de venda" não tem
  nenhum caso hoje — tem o contrário, memória vendida como diferencial.
- **Removido:** "surge a profissão de curador de memória" — genérico e sem ator. O que sobreviveu
  foi `e6.2` (custodiante), que tem ator identificável, mecanismo e responsabilidade.

**R3**
- `e12`: confiança **alta → media**, porque a evidência de replay determinístico é um preprint de
  autor único com n = 250 em cinco cargas, e porque a razão 3 do pré-mortem ataca exatamente este
  efeito.
- `e11.2`: prazo **2031 → 2033** (§7.3).
- `e13.2`: confiança **media → baixa**, porque exigência de metadado de proveniência por plataforma
  tem precedente parcial (credenciais de conteúdo), mas nenhum caso de exigência de **trajetória**.
- **Removido:** "reguladores criam categoria nova para sistemas com memória" — genérico. Reescrito
  como `e11`, com norma, artigo e datas nomeados.
- **Removido:** "o custo de inferência cai e viabiliza avaliação contínua" — reprovado no teste da
  causa solta: decorre da economia de hardware, não de nenhuma das três raízes.

## 8. O que a máquina errou

Sou eu a máquina. Seis itens desta rodada, específicos.

1. **A fonte primária que eu queria citar me negou acesso, e por pouco eu não citei mesmo assim.**
   O post da OpenAI sobre abandonar o SWE-bench Verified devolveu HTTP 403. Eu tinha, do resumo de
   busca, "59% do lote com defeito material"; da análise secundária que consegui abrir, "mais de
   60% insolúveis como escritas". São afirmações diferentes sobre a mesma auditoria de 138 tarefas,
   e o caminho fácil era combinar as duas numa frase confortável. Uso só o número da fonte que
   abri, digo que é secundária, e registro a divergência aqui em vez de escolher a versão mais
   forte.
2. **Divergência de data que não consegui reconciliar.** A ficha de tramitação do PL 2338/2023 me
   devolveu hoje "último despacho 29/04/2025". Uma rodada anterior sobre este mesmo tema, feita
   ontem, registrou "último em 02/09/2026" a partir da mesma URL. Ou a página serve conteúdo
   diferente conforme o acesso, ou uma das duas leituras pegou outra seção da ficha. Declaro o que
   vi hoje, marco a divergência, e **não** uso a data para sustentar nenhum efeito.
3. **Um número redondo que eu ia escrever de memória.** Ao descrever o ataque de envenenamento por
   conversa, estava prestes a escrever "ativa após cerca de 100 sessões benignas". O resumo que
   abri não traz esse número — traz ASR até 0,95 e a menção a múltiplos domínios e mecanismos de
   memória, sem quantificar dormência. Cortei. Cem é exatamente o tipo de número redondo que soa
   verdadeiro por ser redondo.
4. **Usei uma fonte que a própria leitura reprovou.** As faixas salariais do *evals engineer*
   (US$ 230 mil a US$ 1,2 milhão) vêm de um guia editorial que, ao ser aberto, se revelou sem
   metodologia, sem fonte datada e sem pesquisa por trás. Mantive como ordem de grandeza na prosa
   de `e3.1` e garanti que **nenhum efeito depende dela**. Se eu tivesse citado sem abrir, teria
   apresentado isso como dado de mercado.
5. **Placar de fornecedor medindo a si mesmo.** Os números 92,5% / 94,4% / 64,1% são do Mem0 sobre
   o Mem0. Só aparecem neste documento acompanhados da admissão do próprio fornecedor de que as
   medidas não são comparáveis — que é, aliás, a parte mais útil da fonte.
6. **Um efeito relevante apoiado em fonte que não abri por inteiro.** `e7` (projetar o
   esquecimento) se apoia num trabalho de interação humano-computador sobre modelos mentais de
   memória de agente. O PDF veio corrompido, a biblioteca digital devolveu 403 e a página do
   programa da conferência só devolveu aviso de compatibilidade de navegador. O achado ("usuários
   têm modelo mental incompleto de como o agente lembra") vem de resumo de busca, não do texto.
   Por isso o trabalho **não entra na seção 11**, entra na 12 como abertura falhada, e `e7` ficou
   com sinal fraco.

Um sétimo, de tipo diferente: escrevi a primeira versão de `e13.1.1` com adjetivo no lugar de
mecanismo ("o rastro se torna uma linguagem estética fascinante"). Reescrevi e, na seção 7.6,
admiti que ele está no mapa por gosto. A frase bonita é o disfarce mais comum de um efeito sem
mecanismo.

## 9. Três cenários para 2056

**Provável.** A infraestrutura existe e quase ninguém a olha. Todo agente em serviço emite
trajetória num formato que a norma congelou por volta de 2030, e a retenção é cumprida do jeito
mais barato que passa na fiscalização: amostragem alta para o que deu errado, mínima para o resto.
A avaliação virou profissão com credenciamento, concentrada em poucas firmas globais, e reproduz o
conflito que a auditoria contábil nunca resolveu — quem paga o auditor é o auditado. Memória é
ativo e é intransferível ao mesmo tempo: a portabilidade foi regulada, entrega-se o arquivo, e
quem troca de fornecedor descobre que levou o dado e perdeu o comportamento. Quem projeta mídia
entrega a peça com o rastro anexo, como hoje se entrega com ficha técnica, e ninguém lê nenhum dos
dois até haver um processo. *Sinal precoce de que estamos aqui:* a primeira norma técnica de
formato de trace ser publicada antes de as convenções abertas saírem de *Development*.

**Desejável.** A memória é da pessoa, e isso é verificável por qualquer um: existe um formato que
mais de uma implementação independente lê e escreve, e trocar de fornecedor é levar o histórico
inteiro e continuar de onde parou. A avaliação é pública onde precisa ser — os casos de teste que
definem o que é aceitável em serviço essencial são abertos, versionados e contestáveis, e os
placares publicam consistência e custo, não acurácia média. O rastro tem custódia separada de quem
o produz, e apagar o dado pessoal não destrói a explicação, porque a explicação foi projetada para
sobreviver sem ele. Para chegar aqui, três coisas tiveram de ser feitas cedo: a segunda
implementação de um formato de memória (que em 2026 não existia), a custódia de trace por terceiro
(que ninguém propôs), e a decisão de tratar caso de teste de serviço público como norma aberta.
*Sinal precoce:* uma segunda implementação independente lendo o arquivo de memória de outra, antes
de 2032.

**Indesejável.** A confiança virou um custo fixo que só grande operação paga. Provar que um sistema
presta custa mais do que construí-lo, o benchmark que vale é privado e por assinatura, e quem não
assina não entra no canal formal — o que vale tanto para software quanto para obra de mídia. A
memória se concentrou em poucos custodiantes, e cada um deles é um alvo cujo comprometimento não
apaga registro: reescreve. A não repudiabilidade, construída para proteger o sistema, tirou da
pessoa a possibilidade de dizer "não fui eu", e a trilha de auditoria que a norma exigiu para
protegê-la é o que agora a incrimina. Há duas classes de serviço: o que lembra, caro e regulado, e
o que esquece, barato e sem histórico — e a segunda classe é onde está quase todo mundo.
*Sinal precoce:* o primeiro caso em que um registro de agente é usado como prova **contra** o
usuário e não contra o operador.

## 10. O experimento

**O que é.** *Caderno de bordo* — um agente de mídia pequeno, com três propriedades que quase
nenhum produto de 2026 tem juntas: (a) executa uma tarefa criativa curta e repetível (montar uma
sequência de imagens a partir de um roteiro, ou produzir uma variação de trilha para uma cena);
(b) grava a trajetória inteira num formato reexecutável — toda chamada externa interceptada e
serializada, de modo que a mesma execução possa ser rodada de novo sem rede; (c) tem memória
explícita, com um botão de esquecer que remove um item nomeado. Em cima disso, dois instrumentos:
um contador de pass^8 (a mesma tarefa oito vezes, quantas vezes o resultado é aceitável pelo mesmo
critério) e um **delta de esquecimento** (roda-se a tarefa com a memória inteira e com um item
removido, e mede-se a diferença contra o ruído entre execuções idênticas).

**Que pergunta sobre o futuro ele ajuda a responder.** Uma só, e é a que arbitra a contradição da
seção 5: **quanto do que o sistema entrega vem do que ele lembra?** Se o delta de esquecimento for
indistinguível do ruído entre execuções, então a memória não é o ativo que R2 supõe, e todo o ramo
`e6`–`e10` se apoia numa coisa que não existe. Se for grande e estável, a memória é patrimônio e as
perguntas de custódia, portabilidade e herança são urgentes, não especulativas.

**Que tecnologia emergente usa, e por que não dá com tecnologia madura.** Usa três: interceptação e
reexecução determinística de trajetória (hoje preprint, não produto); camada de memória externa com
escrita e remoção dirigidas; e instrumentação de trajetória com spans de agente (`invoke_agent`,
`execute_tool`), que ainda estão em *Development*. Não dá com tecnologia madura porque log de
aplicação registra o que aconteceu e não permite **repetir** o que aconteceu; e porque teste
unitário responde passou/não passou sobre uma execução, quando a pergunta é sobre a distribuição de
oito. A parte madura do experimento — rodar o agente, gerar a mídia — é a parte que não responde a
pergunta nenhuma.

**O que a turma faz ao testar em sala.** Cada pessoa recebe o mesmo agente com a mesma memória
inicial, escolhe **um** item de memória para apagar (um item diferente por pessoa), roda a tarefa
oito vezes antes e oito depois, e registra o par de números. No quadro, a sala monta a distribuição
dos deltas por tipo de item apagado — preferência declarada, fato do projeto, correção de erro
anterior, restrição de estilo. A discussão é sobre a forma da distribuição, não sobre a média: o
interessante é se há itens cuja remoção derruba tudo e itens cuja remoção não muda nada, porque é
essa assimetria que decide se "memória" é uma coisa ou quatro coisas diferentes com o mesmo nome.
Segunda parte, mais curta: cada pessoa tenta, pelo rastro gravado de outra, reconstruir qual item
foi apagado. É o teste de auditabilidade — descobrir se o rastro explica a diferença ou só a
registra.

**O resultado que me faria mudar de ideia.** Se o delta de esquecimento ficar dentro do ruído entre
execuções idênticas para **todos** os tipos de item, em tarefas que a intuição diz que dependem de
histórico, então R2 cai e este mapa perde o ramo maior. É o resultado que a melhor evidência
controlada de 2026 sugere que vai acontecer (auto-memória 42% contra 47% de recuperação básica), e
é por isso que o experimento vale: ele testa a raiz de que eu mais gosto pelo lado em que ela é
mais frágil. O resultado simétrico também conta: se o rastro gravado **não** permitir a ninguém
identificar o que foi apagado, então R3 tem um problema que este mapa subestimou — rastro completo
que não explica é só volume.

## 11. Fontes

Vinte e nove fontes, todas abertas e lidas em 12/09/2026. O que não abriu não entrou, e as
tentativas falhadas estão na seção 12.

1. `https://www.langchain.com/state-of-agent-engineering` — sustenta os números de adoção da seção
   3.1 (1.340 respostas, 18/11–02/12/2025; 57,3% em produção; 89% com observabilidade e 94% entre
   os que estão em produção; 62% com tracing e 71,5% em produção; 52,4% offline, 37,3% online,
   29,5% sem avaliação). Confiabilidade: **média-alta como dado primário, com viés de amostra
   declarado** — é pesquisa de fornecedor respondida por quem já usa ferramenta de agente.
2. `https://artificialintelligenceact.eu/article/12/` — sustenta o texto do artigo 12 e as datas de
   aplicação (02/12/2027 Anexo III; 02/08/2028 Anexo I) e a menção à prEN ISO/IEC 24970.
   Confiabilidade: **alta** — reprodução comentada do texto normativo.
3. `https://greptime.com/blogs/2026-05-09-opentelemetry-genai-semantic-conventions` — sustenta o
   status *Development* das convenções GenAI na v1.41.0, a frase "no public timeline for
   stabilization", as operações `chat`/`invoke_agent`/`execute_tool`/`invoke_workflow` e o histórico
   de versões. Confiabilidade: **média-alta** — análise técnica de terceiro com citação direta da
   especificação; não é a especificação.
4. `https://www.dynatrace.com/news/press-release/dynatrace-to-acquire-arize/` — sustenta a compra da
   Arize (US$ 915 mi, ~US$ 815 mi em dinheiro, 13/08/2026), a justificativa estratégica e a projeção
   de mercado de US$ 10 bi até 2030. Confiabilidade: **alta para o fato da transação, interessada
   para a projeção**.
5. `https://www.marktechpost.com/2026/08/09/top-llm-observability-and-evaluation-platforms-in-2026-langfuse-langsmith-braintrust-arize-and-more-compared/`
   — sustenta o tamanho do mercado (US$ 1,97 bi em 2025, US$ 2,69 bi em 2026, US$ 9,26 bi em 2030,
   CAGR 36,2%), os dois milhões de downloads mensais do Phoenix e o preço do W&B Weave.
   Confiabilidade: **média** — agregador que cita fontes terceiras que não abri.
6. `https://mem0.ai/blog/ai-memory-benchmarks-in-2026` — sustenta a descrição de LoCoMo,
   LongMemEval e BEAM, os placares 92,5% / 94,4% / 64,1% e, sobretudo, a admissão literal de que os
   números não foram gerados com o mesmo *stack*, juiz ou configuração de recuperação.
   Confiabilidade: **baixa como medida (fornecedor medindo a si mesmo), alta como confissão**.
7. `https://www.cognee.ai/ai-memory-benchmarks` — sustenta o catálogo de 18 benchmarks em quatro
   famílias, os tamanhos (LoCoMo ~26k tokens e 1.986 QA; LongMemEval-S 115k e 500 questões; BEAM
   128k–10M e 2.000 questões; MemoryAgentBench 103k–1,44M e 2.071 questões), a queda do LoCoMo para
   o MemoryArena e a observação sobre custo operacional ausente dos benchmarks. Confiabilidade:
   **média** — material de fornecedor, mas o conteúdo é catálogo verificável e contraria o interesse
   comercial de quem publica.
8. `https://arxiv.org/abs/2606.29914` — MemDelta. Sustenta o colapso dos ganhos sob baseline
   controlada (47,2% × 49,8%; ±6,2 pp por troca de embedding, p = 0,004; auto-memória 42% < RAG 47%;
   72,7% × 73,9% em 2 de 6 tipos, n = 88, a 50× o custo). Confiabilidade: **alta metodologicamente,
   com a ressalva de ser preprint não revisado por pares**. É a fonte que mais derrubou efeito neste
   mapa.
9. `https://arxiv.org/abs/2605.12493` — LongMemEval-V2. Sustenta a existência de avaliação de
   memória em escala de 115M tokens e 500 trajetórias, as cinco competências e o contraste 72,5% ×
   48,5% × 69,3%. Confiabilidade: **média-alta** — preprint com autoria acadêmica identificável.
10. `https://arxiv.org/abs/2605.11032` — Portable Agent Memory. Sustenta o protocolo proposto
    (Merkle-DAG de proveniência, capacidade, JSON/CBOR, Apache 2.0, 54 testes, 8 páginas) e o
    diagnóstico de lock-in. Confiabilidade: **média** — preprint curto com implementação única; é o
    próprio SF2.
11. `https://dev.to/stantyan/i-tested-7-ai-memory-products-for-portability-all-7-lock-you-in-31pm`
    — sustenta o teste de simetria de importação nos sete produtos (ChatGPT Memory, Claude Projects,
    Claude Tag, Gemini, Cursor, Cognee, ByteRover), na primeira semana de julho de 2026.
    Confiabilidade: **média-baixa** — teste individual, não replicado, e a própria leitura revelou
    que o método é revisão de documentação e comportamento, não protocolo formal. Uso o resultado
    qualitativo (nenhum tem simetria), não uma medida.
12. `https://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/` — sustenta o roadmap 2026
    (publicado em 09/03/2026), as quatro prioridades, a ausência de memória entre elas e o
    tratamento de trilhas de auditoria como item de prontidão empresarial a resolver por extensão.
    Confiabilidade: **alta** — é o blog do próprio projeto.
13. `https://arxiv.org/abs/2605.29960` — Hijacking Agent Memory / MemPoison. Sustenta a taxa de
    sucesso até 0,95 e a limitação demonstrada das defesas avaliadas. Confiabilidade: **alta para o
    ataque**; o resumo não traz dormência nem lista de backends, e por isso não cito nenhum dos dois
    (item 3 da seção 8).
14. `https://arxiv.org/abs/2606.04329` — estudo sistemático de envenenamento de memória. Sustenta as
    seis classes de ataque sobre quatro canais de escrita, as nove fragilidades estruturais, a
    conclusão de que defesas contra injeção de prompt não cobrem envenenamento, e o MPBench.
    Confiabilidade: **alta** — preprint com autoria múltipla e benchmark publicado; não traz ASR no
    resumo, e não invento um.
15. `https://arxiv.org/abs/2606.30566` — Forensic Trajectory Signatures. Sustenta AUC 0,9563 (regra
    simples), 0,9904 (floresta aleatória com 19 atributos), 1,000 em 6 de 9 modelos **e** a taxa de
    falso positivo incondicional de 24,7% a 52,6%. Confiabilidade: **alta** — é raro um trabalho
    publicar o próprio falseamento, e usei os dois números juntos.
16. `https://arxiv.org/abs/2606.30306` — Always-On Agents. Sustenta o corpus codificado de 435
    trabalhos, os seis eixos, o AOEP-v0 e a conclusão de que a literatura acumula e recupera muito
    mais do que governa, recupera ou abandona estado. Confiabilidade: **média-alta** — os próprios
    autores o chamam de mapa escopado, não censo.
17. `https://arxiv.org/html/2604.16548v1` — segurança de memória de longo prazo / soberania
    mnemônica. Sustenta a definição do conceito, as seis fases do ciclo de vida, os quatro objetivos
    de segurança e a distribuição do corpus (~70 trabalhos primários; ~55% em *Write*/*Retrieve*;
    ~5% em *Store* e ~5% em *Forget*). Confiabilidade: **média-alta** como levantamento; é o SF1.
18. `https://arxiv.org/pdf/2604.20300` — FSFM, esquecimento seletivo. Sustenta a existência de
    trabalho dedicado a projetar o esquecimento (28 páginas, abril de 2026). Confiabilidade:
    **média** — abri e confirmei o objeto e a data, mas os números de desempenho não estavam
    acessíveis no que consegui extrair, e por isso não cito nenhum.
19. `https://arxiv.org/pdf/2604.20006` — From Recall to Forgetting / Memora. Sustenta a existência
    de benchmark dedicado a esquecimento em agentes personalizados (abril de 2026) e a lacuna que
    ele declara. Confiabilidade: **média** — mesma ressalva do item 18: confirmei objeto e data, não
    consegui extrair os números.
20. `https://astraea.law/insights/ai-agent-memory-tool-privacy-compliance` — sustenta a tese de que
    não se pode apagar o que não se sabe que o agente guardou, as citações normativas (GDPR arts. 17
    e 12(3); CCPA §1798.105 e §1798.140(v)(1); ADMT da Califórnia vigente em 01/01/2026 com
    conformidade em 01/01/2027; AI Act art. 27 em 02/12/2027) e a tensão entre apagamento e
    proveniência. Confiabilidade: **alta** — análise jurídica com citação verificável; publicada em
    12/04/2026 e atualizada em 04/09/2026.
21. `https://www.digitalapplied.com/blog/swe-bench-verified-june-2026-benchmark-vs-scaffolding-analysis`
    — sustenta o abandono do SWE-bench Verified pela OpenAI (138 tarefas auditadas, >60% insolúveis
    como escritas), o vazamento de solução em 32,67% dos patches, a recuperação de caminho em até
    76%, e os efeitos de scaffolding (5,2 pontos; 17,3 pontos entre 69,2% e 51,9%). Confiabilidade:
    **média** — é análise secundária, e a fonte primária me negou acesso (item 1 da seção 8).
22. `https://arxiv.org/html/2606.19544v1` — Reliability without Validity. Sustenta a escala (21
    juízes, 9 fornecedores, 3 benchmarks, 118 rodadas, ~541 mil julgamentos), a deflação de κ de
    33,8 a 41,3 pontos, α de 0,944 e 0,913, viés posicional de 0,002 a 0,192, e os dois juízes de
    produção com reprodutibilidade >0,95 junto de viés >0,10. Confiabilidade: **alta** — é o
    trabalho mais bem desenhado que abri nesta rodada.
23. `https://arxiv.org/pdf/2606.13685` — The Coin Flip Judge. Sustenta apenas a existência de uma
    segunda linha independente de crítica à confiabilidade do juiz-modelo (junho de 2026).
    Confiabilidade: **baixa nesta rodada** — a extração do PDF não me deu números, e por isso não
    cito nenhum; entra só como corroboração de que o item 22 não é caso isolado.
24. `https://sierra.ai/blog/benchmarking-ai-agents` — sustenta a definição de pass^k contra pass@k e
    a queda de ~61% (pass^1) para ~25% (pass^8) em τ-retail. Confiabilidade: **alta para o método,
    datada para os números** — o post é de 20/06/2024 e mede GPT-4o; é a única medida concreta de
    pass^k que consegui abrir, e uso a forma da queda, não o valor.
25. `https://arxiv.org/abs/2607.16200` — agrepl, replay determinístico. Sustenta F = 1,0, −98,3% de
    latência mediana por etapa, n = 250 em cinco cargas, a formalização de K(s), e o ponto de que a
    chamada ao modelo é a entrada não determinística irredutível. Confiabilidade: **média** —
    preprint de autor único; é a base de `e12`, que por isso foi rebaixado de alta para média.
26. `https://jobsbyculture.com/blog/ai-evals-engineer-career-guide-2026` — sustenta as faixas de
    remuneração por nível (US$ 230 mil a US$ 1,2 milhão) e a ordem de grandeza de aceleração de
    contratação (~5× em relação a 2024). Confiabilidade: **baixa** — guia editorial de junho de
    2026, sem metodologia nem fonte declarada, como a própria leitura revelou (item 4 da seção 8).
    Nenhum efeito depende dela.
27. `https://www.iweaver.ai/blog/alpha-arena-ai-trading-season-1-results/` — sustenta o desenho do
    Alpha Arena (US$ 10 mil por modelo, perpétuos na Hyperliquid, mesmo prompt), os resultados
    (+22,31% a −62,66%, seis modelos nomeados) e as ressalvas dos organizadores. Confiabilidade:
    **média** — análise de terceiro sobre experimento público, publicada em 04/08/2026.
28. `https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2487262` — sustenta o
    estado do PL 2338/2023: Comissão Especial, relator designado em 20/05/2025, aguardando parecer,
    37 apensados, último despacho registrado em 29/04/2025. Confiabilidade: **alta** — é a ficha
    oficial; ver a divergência de data no item 2 da seção 8.
29. `https://www.ey.com/pt_br/newsroom/2026/05/gerir-milhares-agentes-ia-empresas-adotam-novo-modelo-governanca`
    — sustenta os números brasileiros de escala (50 mil agentes na própria firma; mineradora de 30
    para ~1.000, com 5.000 planejados) e o argumento de que agentes passarão a executar atividades
    auditadas em companhia aberta. Publicado em 05/05/2026. Confiabilidade: **média** — é material
    institucional de consultoria que vende governança, com interesse declarado no diagnóstico.

## 12. Anexo — o levantamento bruto

### 12.1 O briefing e o que ele não cobriu

Rodada não interativa, com bloco `briefing:` completo: modo MAPA, tema, slug, autor (`grec`), zona
de interesse (Agentes), horizonte 2056, público (quem projeta mídia e interação), recorte global
com nota sobre o Brasil, descartado ("o que já é comum em produto de massa"), raiz suspeita
(nenhuma), viés neutro, busca web ativa. Conforme a regra da skill, briefing completo substitui a
entrevista sem rebaixamento de confiança.

**Premissas assumidas e declaradas**, porque o briefing não as cobria:

- **Classes de referência.** O briefing não dizia como calibrar prazos em horizonte de trinta anos.
  Assumi que, num horizonte assim, o fator limitante é a velocidade de **institucionalização** e não
  a de desenvolvimento técnico, e usei classes de referência institucionais (auditoria contábil,
  gravador de voo, portabilidade numérica, interoperabilidade de prontuário, seguro cibernético,
  convergência contábil internacional, moderação de conteúdo terceirizada). Isso torna os prazos
  deste mapa mais longos do que seriam sob a lente da capacidade técnica, e a escolha está declarada
  em 7.6.
- **Ordens de efeito.** Três ordens, como pedido.
- **Efeitos além do horizonte.** Nenhum efeito de 3ª ordem ultrapassou 2056 — o mais tardio é 2053.
  Não é frouxidão: as classes de referência usadas colocam as consequências estruturais entre o fim
  dos anos 2040 e o início dos 2050, e empurrar qualquer coisa para além de 2056 exigiria uma
  referência mais lenta do que as que encontrei.
- **"Descartado: o que já é comum em produto de massa"** foi aplicado como critério de recusa de
  raiz, não de efeito. Memória em produto de massa existe (ChatGPT, Gemini) e por isso a **lembrança**
  não é a raiz; a **custódia** é.

### 12.2 Efeitos cortados no §6, com o motivo

Nada de corte silencioso. Estes cinco estavam no rascunho e não estão no bloco `roda:`.

1. **"Cursos de computação criam disciplina de avaliação de IA"** (era filho de `e1`). Removido por
   ser um dos efeitos genéricos que a própria skill proíbe: serve para qualquer tema da disciplina,
   não nomeia curso nem instituição, e o mecanismo que o ligaria ao pai é "as coisas importantes
   viram matéria", o que não é mecanismo.
2. **"Surge a profissão de curador de memória"** (era filho de `e6`). Removido pelo mesmo critério
   ("surge uma nova profissão" está na lista de proibidos). O que sobreviveu foi `e6.2`, custodiante
   de memória, que tem ator, responsabilidade e mecanismo — e que, note-se, não é uma profissão e sim
   uma função institucional, o que é diferente.
3. **"Reguladores criam categoria nova para sistemas com memória persistente"** (era `e11` na
   primeira versão). Removido como genérico e reescrito: a versão que ficou nomeia a norma (AI Act
   art. 12), o artigo, as duas datas de aplicação e a norma técnica em elaboração.
4. **"Equipes adotam versionamento de prompt como prática padrão"** (era filho de `e12`). Removido
   no teste da causa solta: acontece por higiene de engenharia de software, sem precisar de nenhuma
   das três raízes. Já é prática difundida, aliás, o que o torna também maduro.
5. **"O custo de inferência cai e viabiliza avaliação contínua"** (era filho de `e1.2`). Removido no
   teste da causa solta: decorre da economia de hardware. Sobreviveu como **razão 3 do pré-mortem**,
   que é o lugar certo dele — é uma ameaça ao mapa, não um efeito do mapa.

Além dos cinco, dois candidatos de 4ª ordem foram descartados pela regra de parada, com o motivo
registrado na seção 5 ("o oligopólio de auditores é questionado"; "a não repudiabilidade é usada em
processo trabalhista").

### 12.3 As buscas desta rodada

Dezesseis buscas, em português e inglês. As que renderam estão refletidas na seção 11; registro as
que renderam pouco ou nada.

Buscas feitas: `agent memory benchmark 2026 long-term memory LLM agents evaluation`; `LLM
observability market 2026 Langfuse LangSmith Braintrust Arize adoption`; `EU AI Act article 12
logging record-keeping high-risk AI traceability 2027 2028`; `OpenTelemetry GenAI semantic
conventions agent spans stable 2026`; `agent memory portability lock-in export standard protocol
2026`; `"AI evals engineer" profession certification auditing AI 2026 job market`; `PL 2338 2023
regulamentação inteligência artificial Brasil rastreabilidade registro auditoria 2026`; `agent
memory poisoning attack backdoor persistent memory 2026 arxiv`; `deterministic replay LLM agent
trace reproducibility non-deterministic evaluation 2026`; `benchmark contamination agent benchmark
flawed tasks SWE-bench tau-bench criticism 2026`; `Nof1 Alpha Arena season 2 2026 real money AI
trading evaluation results`; `agent memory GDPR right to erasure delete what agent remembers
compliance 2026`; `"lifelong agents" OR "always-on agents" survey 2026 governing agent state
forgetting arxiv`; `LLM-as-a-judge agreement kappa unreliable agent evaluation 2026
inter-annotator`; `Dynatrace acquires Arize AI 2026 observability consolidation acquisition`;
`memory-driven personalization media interaction design agents remember users creative tools 2026`;
`MemoryArena benchmark agentic memory LoCoMo near-perfect collapse 40-60% 2026`; `MCP Model Context
Protocol roadmap 2026 memory extension governance enterprise`; `observabilidade de agentes de IA
Brasil 2026 adoção empresas auditoria ANPD`; `Users' Expectations and Practices with Agent Memory
CHI 2025 mental models forgetting`.

**Buscas que não deram no que eu procurava:**

- **Alpha Arena temporada 2.** Procurei resultado de uma segunda temporada com desenho corrigido
  (busca na web, capacidade de raciocínio mais longa, mais fontes). Achei o anúncio das melhorias
  planejadas e uma temporada 1.5 em ações americanas com US$ 320 mil, mas **nenhum resultado
  publicado de temporada 2**. Não cito o que não achei; SF4 fala do desenho, não de um placar novo.
- **Adoção de observabilidade de agente no Brasil.** Procurei número — percentual de empresas,
  gasto, base instalada. Achei fiscalização da ANPD, análise de conformidade e material de
  consultoria, nenhum com número de adoção. Registrado como "sem número encontrado" em 3.4, em vez
  de estimar.
- **Custo energético ou ambiental de observabilidade e avaliação de agente.** Nenhuma fonte aberta
  com número. É a razão de o eixo ecológico do STEEP estar declarado vazio na seção 5, em vez de
  preenchido com um efeito inventado.
- **Formato normativo de trace.** Procurei o conteúdo da prEN ISO/IEC 24970 e só achei menção a ela
  como norma em elaboração. `e11.2` está escrito sem supor o que a norma vai dizer.

**Aberturas que falharam (e o que isso custou ao mapa):**

- `https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/` — **HTTP 403**. Custo:
  os números do abandono do SWE-bench vêm de análise secundária (fonte 21), com a divergência
  registrada no item 1 da seção 8.
- `https://dl.acm.org/doi/10.1145/3706599.3720158` — **HTTP 403**;
  `https://younghokim.net/files/papers/jones-agent-memory-chi25lbw.pdf` — **PDF ilegível na
  extração**; `https://programs.sigchi.org/chi/2025/program/content/194614` — devolveu apenas aviso
  de compatibilidade de navegador. São três tentativas de abrir o mesmo trabalho de interação
  humano-computador sobre modelos mentais de memória de agente. Custo: `e7` ficou com sinal fraco,
  o trabalho **não** entra na seção 11, e a limitação está no item 6 da seção 8.
- `https://arxiv.org/pdf/2606.13685` e `https://arxiv.org/pdf/2604.20006` e
  `https://arxiv.org/pdf/2604.20300` — abriram, mas a extração não devolveu os números. Entram na
  seção 11 pelo que confirmam (existência, objeto, data, autoria) e não por medida nenhuma.

### 12.4 A tabela de classes de referência usada para calibrar prazos

| Classe de referência | Janela observada | Onde foi usada |
|---|---|---|
| Auditoria contábil: crash de 1929 → obrigação legal de auditoria externa | ~5 anos | `e5.1` como piso |
| Auditoria contábil: obrigação → profissão consolidada e concentrada | ~40–55 anos | `e5.1` (2040), `e5.1.1` (2052) |
| Gravador de voo: protótipo → obrigatoriedade nacional | poucos anos | `e11` (2030) |
| Gravador de voo: registro de voz → registro de parâmetros internos generalizado | ~25–30 anos | `e14.1.1` (2053) |
| Portabilidade numérica: mandato legal → operação real | ~7–12 anos | `e6.1` (2038) |
| Interoperabilidade de prontuário eletrônico: mandato → interoperabilidade real | >30 anos, incompleta | `e6.1.1` (2048) |
| Seguro cibernético: primeiras apólices → exigência de controles como condição | ~20–25 anos | `e4.1` (2038) |
| SLA de nuvem: prática interna → cláusula contratual | ~8 anos | `e1.1` (2034), e o empurrão de `e1` |
| Convergência contábil internacional | décadas, nunca fechada | `e11.2` (2033), `e11.2.1` (2045) |
| Moderação de conteúdo: função interna → indústria terceirizada | ~10 anos | `e3.1.1` (2040) |
| Motores de recomendação dos anos 2010: mudança de métrica → extinção de produtos | ~5 anos | `e8.1.1` (2042) |

### 12.5 O que ficou de fora por escolha de recorte

Registro o que **não** está no mapa e poderia estar, para que a ausência seja escolha e não
esquecimento. Ficaram de fora: (a) a contenção do agente — permissão, sandbox, limite de ação —,
que é o tema vizinho; (b) a economia de tokens e a engenharia de contexto como disciplina de custo,
que encosta em memória mas tem motor próprio; (c) o uso de memória para personalização comercial e
publicidade, que é um ramo inteiro que este recorte (quem projeta mídia e interação) tocaria só de
raspão; (d) a governança multiagente — memória compartilhada entre agentes de donos diferentes —,
que aparece na literatura de segurança como fase *Share & Propagate* e que eu não desenvolvi por
falta de evidência aberta de prática; (e) modelos rodando no dispositivo, que é a premissa escondida
número 1 da seção 7.5 e que, se virar dominante, exige um mapa diferente.

### 12.6 Saída do verificador

Saída integral de
`python3 futurizacao-giordano/references/verificar.py tendencia-a-infraestrutura-de-confianca-memoria-observabilidade-e-avaliacao-de-agentes.md --links`,
rodada em 12/09/2026, colada sem edição — os números, não a palavra "passou":

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 14 (frontmatter diz 14)
efeitos ordem 2: 24 (frontmatter diz 24)
efeitos ordem 3: 21 (frontmatter diz 21)
prazo > horizonte (2056) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 7 · media 7 · baixa 0
confiança ordem 2: alta 2 · media 18 · baixa 4
confiança ordem 3: alta 0 · media 2 · baixa 19
links da seção 11: 29/29 respondem (frontmatter diz fontes: 29)
RESULTADO: ok
```

Três leituras dessa saída, porque o número sozinho não diz o que interessa. **Primeira:** nenhum
efeito de 3ª ordem passa de 2056 — o mais tardio é `e14.1.1`, em 2053. A explicação está em 12.1 e
não é folga, é consequência das classes de referência escolhidas. **Segunda:** a calibração cai
como deve (alta 50% → 8% → 0%), e as duas confianças médias de 3ª ordem são exatamente as duas que
têm precedente histórico direto. **Terceira:** 29 de 29 links respondem porque a seção 11 só tem o
que foi aberto nesta rodada; as quatro URLs que falharam estão em 12.3 e fora da contagem, que é a
razão de `fontes: 29` e não 33.
