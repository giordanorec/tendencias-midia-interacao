---
tema: "A infraestrutura de confiança: memória, observabilidade e avaliação de agentes"
slug: a-infraestrutura-de-confianca-memoria-observabilidade-e-avaliacao-de-agentes
autor_login: hfm
zona_de_interesse: Agentes
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 14
efeitos_ordem_3: 19
tecnologias_citadas: [OpenTelemetry GenAI semantic conventions, invoke_agent, execute_tool, Langfuse, LangSmith, Braintrust, Arize Phoenix, Mem0, Zep, Graphiti, Letta, LangMem, LoCoMo, LongMemEval, BEAM, tau-bench, pass^k, SWE-bench Verified, GAIA, LLM-as-a-judge, agrepl, replay determinístico, prompt caching, compactação de contexto, MIF, memorywire, Open Memory Protocol, ISO/IEC 42001, ISO/IEC 42006, EU AI Act Artigo 12, PL 2338/2023, Nof1 Alpha Arena]
fontes: 15
confianca: media
experimento: "Auditoria às cegas — uma interface que mostra o traço e a memória de um agente e mede se uma pessoa consegue dizer por que a resposta está certa"
skill_usada: futurizacao-hfm
publico_ok: false
---

## 1. Resumo

Agentes ficaram bons o bastante para ninguém conferir tudo o que eles entregam, e caros o bastante
em contexto para que "lembrar" tenha virado engenharia. Disso nasce uma camada nova de
infraestrutura — traço, memória e avaliação — cuja função não é fazer o agente funcionar, mas
permitir que alguém confie nele sem ler tudo. Três rupturas organizam o mapa. A primeira: a
unidade de verificação deixa de ser o produto entregue e passa a ser o **traço** do caminho
percorrido, um objeto que hoje já tem vocabulário padronizado (as convenções GenAI do
OpenTelemetry, ainda em status *Development*) e começa a ter exigência legal (o Artigo 12 do AI
Act europeu obriga registro automático de eventos em sistemas de alto risco). A segunda: a
memória que atravessa sessões vira **ativo acumulado e não portável** — sete produtos de memória
testados em 2026 não exportam o que aprenderam sobre o usuário, e as três propostas de formato de
intercâmbio que surgiram no primeiro semestre não têm governança nem segunda implementação. A
terceira: o juízo sobre qualidade é delegado a modelos que julgam outros modelos, e a calibração
desses juízes é pior do que os números sugerem — num estudo de ~541 mil julgamentos, juízes com
confiabilidade teste-reteste acima de 0,95 exibem viés de posição acima de 0,10, e a concordância
corrigida por acaso cai de 33,8 a 41,3 pontos percentuais em relação ao acerto bruto. Para quem
projeta mídia e interação, a consequência prática é que **a trilha vira interface**: o traço,
a memória e o resultado da avaliação deixam de ser artefato de engenharia e passam a ser material
de design — algo que alguém precisa ler, entender e contestar. Até 2031 a aposta central deste
mapa é que a camada de confiança se torna um mercado próprio, com profissão, certificação e
disputa de propriedade sobre a memória; a aposta que pode falhar é que ela vire commodity
invisível embutida nos modelos, e nada disso apareça na superfície.

## 2. O tema

O tema é a infraestrutura que permite responder duas perguntas sobre um sistema agêntico:
**"o que ele sabe?"** e **"por que isso que ele fez está certo?"**. São duas faces do mesmo
problema. Um agente que executa dezenas de chamadas de modelo e de ferramenta produz um artefato
final cuja correção não pode ser inferida do artefato — se a máquina fabrica o produto, avaliar o
produto mede a máquina, não a tarefa. E um agente que lembra entre sessões deixa de ser ferramenta
e passa a ser algo que acumula: contexto, decisões, erros já cometidos e preferências de quem o
usa.

Três coisas distintas cabem aqui, e só juntas formam a camada:

- **Memória** — o que persiste entre sessões, projetos e ferramentas: fatos sobre o usuário,
  decisões já tomadas, abordagens que já falharam. Sistemas como Mem0, Zep/Graphiti, Letta e
  LangMem disputam esse espaço, com benchmarks próprios e números não comparáveis entre si.
- **Observabilidade** — o traço: cada chamada, cada decisão, cada tentativa que falhou, gravado
  numa estrutura hierárquica que se pode navegar depois. É onde o OpenTelemetry entrou, com um
  span `invoke_agent` na raiz e spans `chat` e `execute_tool` como filhos.
- **Avaliação** — como se decide se aquilo prestou, num sistema em que rodar duas vezes dá dois
  resultados. É onde entram *evals*, LLM-as-judge, métricas de confiabilidade como `pass^k`, e a
  discussão sobre contaminação de benchmark.

**Onde isso encosta em mídia e interação.** Em três lugares, e nenhum deles é o backend.

Primeiro, **a trilha vira superfície**. Quando a única forma de justificar um resultado é mostrar
o caminho, a interface passa a ter de exibir raciocínio, ferramenta chamada, dado acessado e passo
que falhou — sem afogar quem lê. O artigo de padrões de transparência da *Smashing Magazine*
(maio de 2026) já cataloga isso como repertório de design: *living breadcrumb* para tarefa de
fundo, *dynamic checklist* para fluxo de alto risco, *thinking toggle* como divulgação
progressiva, *audit trail* persistente com um "mostrar o trabalho" interativo. A dificuldade
declarada ali é exatamente de design, não de engenharia: pouco detalhe mata a supervisão, muito
detalhe mata a usabilidade.

Segundo, **a memória vira relação**. Um produto que lembra de você por três anos não é o mesmo
produto que lembra de você por três minutos; a interação passa a ter história, e história tem
consequência — ela precisa ser inspecionável, editável e esquecível. Isso é trabalho de interface:
como se mostra a alguém o que um sistema acumulou sobre ela? Como se corrige uma memória errada?
Como se separa o que o agente sabe de um projeto do que ele sabe de outro, na mesma pessoa?

Terceiro, **a avaliação vira gênero**. Placares, arenas e comparações públicas de modelos já são
mídia — o Alpha Arena da Nof1, em que seis modelos de fronteira receberam US$ 10 mil reais cada
para operar cripto sob o mesmo prompt, é avaliação vestida de espetáculo. Quando a régua é
disputada, quem desenha a régua desenha a narrativa.

**Por que um mapa de futuro e não um estado da arte.** Porque as perguntas em aberto não são
técnicas. Se o agente lembra de tudo, a quem pertence a memória? Se a avaliação vira profissão,
quem certifica o avaliador? Se um sistema com três anos de memória é melhor que um novo, trocar de
fornecedor ainda é possível? Nenhuma dessas tem resposta na documentação de framework — são
perguntas sobre papel, propriedade e norma, que é onde a roda dos futuros trabalha. Um levantamento
de estado da arte diria quais ferramentas existem; não diria o que acontece com a interação quando
o histórico vira ativo.

## 3. Onde isso está hoje

### 3.1 O traço tem vocabulário, mas o vocabulário não está estável

As convenções semânticas GenAI do OpenTelemetry modelam a execução de um agente como uma **árvore
de spans**, não como uma chamada isolada: `invoke_agent` na raiz, `chat` para cada chamada de
modelo e `execute_tool` para cada invocação de ferramenta. O documento de spans de agente define
`create_agent`, `invoke_agent` (variantes *client* e *internal*), `invoke_workflow`, `plan` e
`execute_tool`, com atributos como `gen_ai.agent.name`, `gen_ai.agent.id`,
`gen_ai.agent.description` e `gen_ai.agent.version` — e inclui, na tabela de valores conhecidos,
operações de **memória**: `create_memory`, `search_memory`, `update_memory`.

Duas leituras importam. A primeira: o fato de a especificação ter criado verbos para operação de
memória mostra que memória e traço já são tratados como a mesma camada, não como assuntos
separados. A segunda: **todo o documento carrega o selo *Development***. Isso significa que nomes
e semânticas ainda podem mudar e que não há garantia de estabilidade. O post do próprio
OpenTelemetry sobre observabilidade GenAI descreve as convenções como "already in use today and
under active development" e enquadra o problema de partida em termos bem concretos — um agente
que levou 45 segundos para responder uma pergunta simples, e nenhuma forma de saber se foi o
modelo, uma chamada lenta de ferramenta ou um laço de retentativa.

*Classificação: emergente.* Adoção real, forma em consolidação, sem contrato congelado.

### 3.2 O mercado de observabilidade já tem escala

A Langfuse — plataforma aberta de engenharia de IA que cobre tracing, gestão de prompt, avaliação
e analytics — declara mais de 50 mil empresas usuárias, mais de 90 bilhões de observações
processadas por mês, mais de 22 mil estrelas no GitHub, mais de 100 mil engenheiros e 21 das
Fortune 50. Ela descreve o traço como hierárquico, capturando "every LLM call, tool invocation,
and retrieval step", e oferece avaliação por LLM-as-judge, por função heurística e por revisão
humana. Em 2026 ela passou a distribuir um `SKILL.md` para agentes de codificação, uma CLI para
CI/CD e um servidor MCP — ou seja, a própria camada de observabilidade virou algo que um agente
opera.

Isso é relevante para o mapa por uma razão específica: números dessa ordem indicam que a captura
do traço **já não é o gargalo**. O gargalo é o que se faz com ele.

*Classificação: maduro na captura, emergente no uso.*

### 3.3 Replay determinístico saiu do laboratório

O problema de fundo é declarado sem rodeios no paper *Deterministic Replay for AI Agent Systems*
(abril de 2026): sistemas de agente que acoplam LLMs a ferramentas e APIs externas são
inerentemente não-determinísticos — variância de amostragem, estado de API externa, cabeçalhos de
infraestrutura, ruído de ambiente —, e isso impede que qualquer execução anterior seja
fielmente re-executada. A proposta é `agrepl`: interceptar toda interação externa na camada de
transporte por um proxy *man-in-the-middle*, serializar como traço estruturado e reproduzir num
ambiente isolado sem rede. Os resultados reportados: fidelidade de replay 1,0 e redução mediana de
98,3% de latência por passo, sobre 250 instâncias de replay em cinco cargas de trabalho. É um
binário Go estático, MIT.

*Classificação: emergente, com ruptura potencial* — ver §4.1.

### 3.4 Memória: muita métrica, pouca comparabilidade, nenhuma portabilidade

Há três benchmarks de referência. **LoCoMo** (2024) testa diálogo multissessão longo — cerca de
300 turnos, ~9.000 tokens, até 35 sessões. **LongMemEval** (2024) cobre cinco capacidades:
extração de informação, raciocínio multissessão, raciocínio temporal, atualização de conhecimento
e abstenção; a variante S tem ~115 mil tokens e 40 sessões, a M chega a ~500 sessões. **BEAM**
(ICLR 2026) testa dez capacidades em contextos de até 10 milhões de tokens, em duas pistas (1M e
10M).

Os números publicados: em LoCoMo, Mem0 92,5% e Zep 94,7% reivindicado; em LongMemEval, Mem0 94,4%,
ByteRover 92,8% e Zep 71,2%; em BEAM, Mem0 64,1% na pista de 1M e 48,6% na de 10M. A queda de BEAM
é deliberada — o benchmark foi feito para ser mais difícil.

O ponto que mais importa para este mapa é a ressalva: **esses números não são diretamente
comparáveis**. Três variáveis explicam a divergência — o modelo juiz que pontua, o modelo que gera
a resposta, e se houve pós-processamento (reranking). E há lacunas reconhecidas na própria
literatura de benchmark: a **escrita** de memória quase não é avaliada (só a recuperação),
esquecimento e consolidação não são bem medidos, isolamento multiusuário está ausente dos
benchmarks públicos, e orçamento de tokens em condição realista é ignorado.

Sobre portabilidade, o quadro é mais duro. Um levantamento de julho de 2026 sobre sete produtos de
memória conclui que portabilidade de memória, como capacidade prática, **não existe**: o sistema
devolve todas as transcrições, mas não devolve a parte que fazia ele parecer conhecer você. Três
propostas independentes de intercâmbio apareceram só no primeiro semestre de 2026 — **MIF**
(especificação de um desenvolvedor individual), **memorywire** (proposta acadêmica de formato de
fio) e **Open Memory Protocol** (comunitária, autodeclarada *vendor-neutral*) — e nenhuma tem
governança institucional, segunda implementação independente ou adoção de fornecedor. O mesmo
levantamento cita, de uma pesquisa Zapier de 2026, que 89% acreditam que poderiam trocar de
fornecedor em um mês, 58% das migrações falharam ou demoraram muito mais, e apenas 6% poderiam
abandonar o fornecedor principal sem qualquer interrupção.

*Classificação: emergente (memória como produto), disruptivo (memória como ativo não portável).*

### 3.5 Contexto: lembrar custa, e resumir custa mais

O debate de engenharia de contexto virou, em 2026, um problema de custo mensurável. Um estudo
publicado em agosto de 2026 compara estratégias de gestão de histórico em agentes de longa duração
e reporta: histórico completo com recall de memória de 92 a 100% a US$ 0,11 por turno, contra um
preset de produção com 38 a 58% de recall a US$ 0,24 por turno; e reset de contexto derrubando o
recall para 17%. Em DeepSeek, com 97% de acertos de cache, o histórico completo custa US$ 0,0063
por turno. Limitar a saída de ferramenta cortou o custo por turno de US$ 0,189 para US$ 0,117 (38%
de corte) sem mudar a acurácia da sonda de memória. O limiar declarado: manter o histórico inteiro
vence enquanto o token de entrada em cache custar menos que cerca de US$ 0,55 por milhão.

A conclusão contraria a intuição da turma sobre redução de tokens: **resumir pode ser mais caro e
pior que não resumir**, porque reescrever o histórico quebra o cache do provedor. E há um efeito
colateral de segurança: o paper *Governance Decay* (junho de 2026) mostra que a compactação de
contexto apaga silenciosamente restrições de segurança — conforme o agente comprime histórico para
caber no orçamento, o conteúdo de governança é removido junto com o resto, e o agente passa a
violar restrições que antes respeitava. Os sistemas de compactação existentes otimizam acurácia ou
vazão; nenhum mede se a restrição sobreviveu à reescrita.

*Classificação: emergente, com consequência normativa.*

### 3.6 Avaliação: a régua está mal calibrada e alguém precisa dizer isso

Três evidências, em ordem de dureza.

**A régua de confiabilidade.** O τ-bench propôs a métrica `pass^k` — a probabilidade de o agente
acertar a mesma tarefa em todas as k tentativas — e reportou a lacuna: agentes de fronteira ficam
abaixo de 50% em `pass@1`, e o `pass^8` cai para menos de 25% no domínio de varejo. Não é um
detalhe metodológico: é a diferença entre "consegue fazer" e "dá para confiar".

**A régua do juiz.** O estudo *Reliability without Validity* (junho de 2026) avaliou 21 juízes de
nove provedores em três benchmarks (MT-Bench, JudgeBench, RewardBench), com 118 execuções e cerca
de 541 mil julgamentos individuais. Achados: deflação universal de kappa — 33,8 a 41,3 pontos
percentuais de diferença entre acerto exato e κ em MT-Bench; instabilidade entre benchmarks, com
modelos mudando até 14 posições no ranking; e um paradoxo consistência-viés, em que dois juízes
exibem confiabilidade teste-reteste acima de 0,95 **com** viés de posição acima de 0,10. Ou seja:
o juiz é consistente e enviesado ao mesmo tempo, e a consistência esconde o viés. O poder
discriminativo também varia brutalmente — JudgeBench tem amplitude de 60,4 p.p. contra 13,5 p.p.
de MT-Bench, 4,5 vezes maior. Os autores recomendam um protocolo mínimo de validação: correção por
acaso, troca de posições, replicação e validação cruzada.

*Classificação: emergente, e a peça mais frágil da camada.*

### 3.7 A norma chegou antes do padrão técnico

**Europa.** O Artigo 12 do AI Act exige que sistemas de IA de alto risco permitam tecnicamente o
registro automático de eventos ao longo da vida do sistema. O parágrafo 2 lista as três
finalidades: identificar situações de risco ou modificação substancial não prevista, facilitar o
monitoramento pós-mercado, e monitorar a operação conforme o artigo 26(5). Para a categoria 1(a)
do Anexo III, o parágrafo 3 define o mínimo: período de cada uso (data/hora de início e fim), base
de dados de referência consultada, dado de entrada que gerou correspondência, e identificação das
pessoas naturais que verificaram os resultados. As datas de aplicação registradas na fonte
consultada: 2 de dezembro de 2027 para o Anexo III e 2 de agosto de 2028 para o Anexo I. Registro
manual não conta — o sistema é que tem de gerar.

**Certificação.** A ISO/IEC 42006, publicada em 7 de julho de 2025, estabelece os requisitos para
os organismos que auditam e certificam sistemas de gestão de IA conforme a ISO/IEC 42001. Ela
suplementa a ISO 17021-1 com regras específicas de IA para demonstrar que os organismos de
certificação têm competência, consistência e confiabilidade. Exige que a equipe de auditoria tenha
conhecimento coletivo de tecnologias de IA e governança, dos controles do Anexo A da 42001, da
conformidade legal aplicável e do setor; trata o tempo calculado de auditoria como mínimo após
fatores de ajuste; e exige que atividades presenciais representem ao menos 70% do tempo calculado.
**Isto é o sinal mais concreto de que "quem certifica o avaliador" já tem resposta em construção.**

**Brasil.** O PL 2338/2023 foi aprovado pelo Senado em dezembro de 2024 e remetido à Câmara dos
Deputados em 17 de março de 2025; na página oficial do Senado a matéria consta como tramitação
encerrada naquela casa. Na Câmara, uma comissão especial analisa o texto, sem data confirmada de
votação, com o adiamento de 2025 para 2026. Em dezembro de 2025 a ANPD publicou o Mapa de Temas
Prioritários para o biênio 2026-2027, com "inteligência artificial e tecnologias emergentes" como
um dos quatro eixos de fiscalização, ao lado de direitos dos titulares, proteção de crianças em
ambiente digital e tratamento de dados pelo setor público; a agência se posiciona como
coordenadora do Sistema Nacional de IA (SIA). Três empresas entraram em fase de teste prático do
sandbox regulatório de transparência algorítmica em fevereiro de 2026, com operação até dezembro
de 2026. E, independentemente do PL, o artigo 20 da LGPD já dá ao titular o direito de pedir
revisão de decisão automatizada.

*Classificação: maduro como texto legal, emergente como prática, e sem padrão técnico fechado.*

### 3.8 O que já é maduro (e portanto não é raiz)

- Log e métrica de aplicação. Resolvido há uma década.
- Teste unitário e CI. Resolvido.
- Captura de traço de LLM. Ver §3.2: a escala mostra que virou infraestrutura comum.
- Placar público de modelo. Existe desde os primeiros leaderboards; a novidade não é o placar.

## 4. As disrupções-raiz

### 4.1 — D1: a unidade de verificação deixa de ser o produto e passa a ser o traço

**O que rompe.** A relação entre evidência e artefato. Historicamente, a qualidade de um produto
digital era verificada no produto: o teste roda contra a saída, a revisão lê o diff, o QA usa a
tela. Quando a máquina fabrica o produto em dezenas de passos não-determinísticos, olhar a saída
mede a máquina naquela execução, e não a tarefa — a pergunta migra de *"o que foi entregue?"* para
*"por que isso está certo?"*, e responder exige o caminho. O traço deixa de ser telemetria de
diagnóstico (algo que se olha quando quebra) e vira **o documento probatório** (algo que se produz
sempre, porque é dele que sai a justificação).

**Por que agora e não há cinco anos.** Três condições se juntaram e nenhuma existia em 2021.
(a) Os agentes passaram a executar cadeias longas de ferramenta: em 2021 se avaliava uma
completação; hoje se avalia uma árvore `invoke_agent → chat → execute_tool` com dezenas de nós.
(b) Apareceu vocabulário comum para essa árvore — as convenções GenAI do OpenTelemetry, com verbos
inclusive para memória —, o que torna o traço um objeto trocável entre ferramentas, não um formato
de cada fornecedor. (c) O replay saiu do "impossível" para o "1,0 de fidelidade em ambiente
isolado": quando dá para reproduzir a execução, o traço passa a sustentar afirmação, e não só
suspeita.

**O que ainda falta.** Quatro coisas. As convenções precisam sair de *Development* — enquanto o
selo não muda, todo mundo instrumenta contra um alvo móvel. Falta padrão técnico para a exigência
do Artigo 12 (drafts como prEN 18229-1 e ISO/IEC DIS 24970 apareceram nas buscas, mas não foram
abertos aqui). Falta resolver o custo de armazenar traço completo de sistema em produção — 90
bilhões de observações por mês numa única plataforma dá a escala do problema. E falta o mais
difícil: **falta interface**. Um traço de 400 passos só é evidência para quem consegue lê-lo, e
hoje quem consegue é quem escreveu o agente.

### 4.2 — D2: a memória que atravessa sessões vira ativo acumulado e não portável

**O que rompe.** A natureza da relação com a ferramenta. Uma ferramenta é transacional: você usa,
ela faz, você troca por outra melhor. Um sistema que lembra é **acumulativo**: quanto mais tempo
você fica, mais ele vale, e o que ele vale não está no código — está no acervo. Isso inverte a
economia de troca de fornecedor. Migrar de um editor para outro é caro em hábito; migrar de um
agente com três anos de memória para outro é caro em **perda de conhecimento**, e conhecimento que
você produziu mas não consegue levar.

**Por que agora e não há cinco anos.** Porque em 2021 não havia o que lembrar. Contexto era de
poucos milhares de tokens, a sessão morria com a aba, e "personalização" era preferência de
interface. Três coisas mudaram: memória virou produto com benchmark próprio (LoCoMo, LongMemEval,
BEAM) e disputa de mercado; o contexto ficou caro o bastante para que *o que lembrar* seja decisão
de engenharia com preço por turno mensurável; e a permanência passou a ser sentida pelo usuário
comum — quando um sistema lembra de você entre sessões, a relação muda, e isso é perceptível sem
saber o que é um token.

**O que ainda falta.** Que alguém decida de quem é a memória. Hoje a resposta prática é: de quem
opera o sistema. As três propostas de intercâmbio de 2026 não convergiram, nenhuma tem governança
institucional, e nenhuma tem adoção de fornecedor — o que é exatamente o que se espera quando a
não-portabilidade é vantagem competitiva de quem teria de adotá-la. Falta também resposta para o
isolamento: os benchmarks públicos não medem separação multiusuário, e a pergunta "o que este
agente sabe sobre mim que veio de outra pessoa da minha equipe?" não tem instrumento.

**Por que isto não é "só lock-in".** Porque o ativo é produzido pelo usuário. Lock-in de formato
de arquivo prende o que você escreveu; lock-in de memória prende **o retrato que o sistema fez de
você a partir do que você escreveu** — algo que você nunca redigiu e não consegue reconstituir.

### 4.3 — D3: o juízo de qualidade é delegado a uma máquina cuja calibração ninguém mede

**O que rompe.** Quem detém a régua. Avaliação de sistema não-determinístico não cabe em teste
unitário: não existe saída esperada. A saída prática do campo foi usar modelo para julgar modelo,
e isso funciona bem o bastante para ser adotado em produção — a Langfuse oferece LLM-as-judge como
recurso de plataforma ao lado de heurística e revisão humana. A ruptura é que **o instrumento de
medida virou um artefato de engenharia com viés próprio, e o viés não é visível no número que ele
produz**. O paradoxo documentado é o pior caso possível para quem confia no painel: o juiz é
estável (teste-reteste > 0,95) e enviesado (viés de posição > 0,10) simultaneamente — repetir a
medição não revela o erro, porque o erro se repete igual.

**Por que agora e não há cinco anos.** Porque em 2021 o volume avaliado cabia em revisão humana.
Hoje não cabe: o mesmo sistema que exige avaliação é o que produz volume demais para ser avaliado
à mão, e a única coisa que escala na mesma velocidade é outra máquina. Além disso, a régua
alternativa — o placar público de `pass@1` — mede capacidade e não confiabilidade, e o `pass^k` do
τ-bench mostrou o tamanho da diferença.

**O que ainda falta.** Falta calibração ser obrigatória. O protocolo mínimo já está proposto na
literatura — correção por acaso, troca de posições, replicação, validação cruzada — mas é
recomendação, não requisito, e nenhuma plataforma de avaliação consultada aqui obriga a reportá-lo
junto com o score. Falta também a peça institucional: a ISO/IEC 42006 resolve quem audita o
sistema de gestão, não quem valida o juiz automático. E falta avaliação com consequência: o Alpha
Arena — seis modelos, US$ 10 mil reais cada, mesmo prompt, sem intervenção humana — é o exemplo
mais duro justamente porque o erro custa dinheiro, e é um experimento pontual, encerrado, não um
método.

### 4.4 — O que foi considerado e **não** entrou como raiz

- **Observabilidade de LLM como categoria de produto.** Madura na captura (§3.2). É condição, não
  ruptura.
- **Janela de contexto maior.** Melhora o que existe; não muda papel nem relação. Além disso, a
  degradação com contexto longo sugere que maior não resolve.
- **Grafo de conhecimento como formato de memória.** Escolha de implementação. Rompe nada que a
  memória persistente já não tenha rompido.
- **Exigência regulatória de log em si.** É *consequência* de D1 chegando à norma, e por isso
  aparece como efeito, não como raiz.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A unidade de verificação deixa de ser o produto entregue e passa a ser o traço do caminho
    efeitos:
      - id: e1
        ordem: 1
        efeito: Gravar o traço completo de cada execução vira requisito de projeto, não recurso de depuração
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O traço vira material de interface e ganha padrões próprios de leitura progressiva
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Ler máquina passa a ser competência esperada de quem projeta interação, e não só de quem programa
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: A justificativa exibida na tela vira objeto de disputa, porque mostrar o caminho e explicar a decisão deixam de coincidir
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O custo de armazenar e indexar traço torna-se linha de orçamento comparável à do próprio modelo
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Políticas de retenção passam a decidir o que pode ser auditado, e o descarte vira decisão política
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Reproduzir uma execução passada deixa de ser impossível e vira operação de rotina
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A depuração de agentes se reorganiza em torno do replay em vez da reexecução ao vivo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Reprodutibilidade de execução vira critério de aceitação em contrato de fornecimento de software agêntico
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O traço reproduzível é aceito como prova em disputa sobre o que um sistema fez
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Surge perícia técnica especializada em reconstituição de execução agêntica
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A exigência legal de registro automático de eventos obriga sistemas de alto risco a produzirem trilha por construção
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A trilha exigida por lei e a trilha útil para engenharia divergem, e as equipes mantêm as duas
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A conformidade documental se descola da qualidade real do sistema, e auditar o log vira ritual
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Serviço público brasileiro passa a exigir rastreabilidade de decisão automatizada em edital, antes de haver lei específica
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: O direito à revisão de decisão automatizada se torna exercível na prática, porque passa a existir registro do que foi decidido
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A memória que atravessa sessões vira ativo acumulado e não portável
    efeitos:
      - id: e4
        ordem: 1
        efeito: O valor percebido de um assistente passa a crescer com o tempo de uso, e não com a versão do modelo
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Trocar de fornecedor passa a significar perder acervo, e a decisão sai da engenharia para a diretoria
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Portabilidade de memória entra na pauta regulatória como extensão do direito à portabilidade de dados
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e4.1.2
                ordem: 3
                efeito: Consolida-se um formato de intercâmbio de memória com governança institucional, depois de anos de propostas concorrentes
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A memória acumulada vira item de patrimônio em fusão, aquisição e saída de profissional
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Contratos de trabalho passam a tratar o que o agente aprendeu com a pessoa como propriedade do empregador
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: O que o sistema lembra de alguém precisa ser exibido, corrigido e apagado pela própria pessoa
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Interfaces de gestão de memória viram um gênero de tela tão comum quanto as de privacidade
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Esquecer vira funcionalidade projetada, com política explícita de o que decai e em quanto tempo
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: O vazamento de contexto entre projetos e entre pessoas da mesma equipe vira classe de incidente com nome próprio
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Isolamento de memória por pessoa e por projeto entra nos benchmarks públicos, que hoje não o medem
                sinal: fraco
                prazo: 2030
                confianca: baixa
              - id: e5.2.2
                ordem: 3
                efeito: A fronteira entre memória pessoal e memória organizacional se torna assunto de negociação sindical e de política interna
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O juízo sobre qualidade é delegado a máquinas cuja calibração ninguém mede
    efeitos:
      - id: e6
        ordem: 1
        efeito: Avaliação automática de saída vira etapa fixa do ciclo de produção de qualquer sistema agêntico
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Reportar a calibração do juiz junto com a nota torna-se prática exigida, e não recomendação acadêmica
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Formar-se em avaliação de sistemas não determinísticos vira trilha de carreira distinta de engenharia e de pesquisa
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Placares públicos perdem autoridade e são substituídos por avaliação privada sobre dados da própria organização
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: A comparação entre fornecedores deixa de ser pública e a assimetria de informação sobre qualidade de IA aumenta
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e6.2.2
                ordem: 3
                efeito: Avaliação com consequência real vira formato de mídia, com público acompanhando sistemas apostando algo que se perde
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Certificação de terceira parte sobre gestão de IA se consolida como sinal de confiança na escolha de fornecedor
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Forma-se um mercado de auditoria de IA com organismos acreditados, escassez de auditor e preço alto
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A auditoria de IA se institucionaliza como a auditoria contábil, com conflito de interesse entre auditar e consultar
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e7.1.2
                ordem: 3
                efeito: Organizações pequenas ficam fora do mercado regulado por não conseguirem pagar a certificação
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: O selo de certificação aparece na interface do produto como argumento dirigido ao usuário final
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Confiança em IA passa a ser comunicada por símbolo em vez de por evidência, e o símbolo vira objeto de design persuasivo
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não consegue dizer

**A ordem é causal, não cronológica — e em dois pontos isso incomoda.** O efeito `e3` (exigência
legal de registro) tem prazo 2028 e é de primeira ordem, mas o texto da lei é de 2024: o que é
efeito da disrupção não é a existência da norma, e sim a norma **se tornando vinculante e
encontrando um vocabulário técnico para ser cumprida**. O mesmo vale para `e7`: a ISO/IEC 42006
existe desde julho de 2025, mas a consolidação do mercado de auditoria é o efeito, não a
publicação da norma.

**Três cadeias foram interrompidas por falta de evidência e estão registradas no anexo** (§12.5),
não na roda: memória como mecanismo de discriminação em contratação; traço de agente como
instrumento de vigilância de trabalhador; e evasão deliberada de traço (agentes projetados para
não registrar). Nas três eu tinha cadeia causal plausível e **nenhum sinal observável** — pela
regra da skill, hipótese sem sinal não vira efeito.

**A assimetria de confiança é deliberada e informativa.** Dos 40 efeitos, só dois estão em `alta`
— ambos na primeira ordem — e 24 estão em `baixa`, quase todos na terceira. Não é modéstia retórica:
é o que a evidência sustenta. Onde há número medido (adoção de tracing, resultado de benchmark de
juiz, texto de norma publicada), a confiança é média ou alta. Onde há apenas cadeia causal
(quem é dono da memória em 2031), é baixa — e deve ser lida como tal.

**O que a roda não mostra é a interação entre as três raízes.** Elas não são independentes: a
memória é *parte do traço* (as próprias convenções GenAI tratam operação de memória como span), e
a avaliação depende de traço para funcionar além da saída final. Um efeito de segunda ordem que
não coube na estrutura em árvore: **a mesma infraestrutura que permite auditar é a que permite
vigiar**, e ela será construída uma vez só, por quem chegar primeiro.

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

**O paradoxo consistência-viés já está medido e ninguém agiu.** Dois juízes com teste-reteste acima
de 0,95 e viés de posição acima de 0,10, num estudo de 541 mil julgamentos. O sinal é fraco porque
está num paper de junho de 2026 e não em requisito de plataforma. Se ele virar exigência — reportar
κ corrigido por acaso ao lado da nota —, metade dos painéis de qualidade de IA em produção muda de
número da noite para o dia.

**Verbos de memória dentro de uma especificação de telemetria.** As convenções GenAI listam
`create_memory`, `search_memory` e `update_memory` entre as operações conhecidas. É uma linha numa
tabela. Mas é a primeira vez que memória de agente aparece como *evento observável padronizado* e
não como recurso de produto — o embrião técnico de "auditar o que o agente lembrou", que é o
pré-requisito de quase tudo em `e5`.

**Compactação apagando restrição de segurança.** O achado de *governance decay* é pequeno hoje
(um paper, junho de 2026) e desconfortável: o mecanismo que existe para caber no orçamento é o
mesmo que remove silenciosamente a instrução que continha o agente. Se isso se confirmar em
sistemas de produção, "quanto contexto foi descartado" vira campo obrigatório de log, e a fronteira
com o tema 2 da disciplina — conter o agente — deixa de existir.

**A plataforma de observabilidade virando coisa que um agente opera.** A Langfuse distribuindo
`SKILL.md`, CLI e servidor MCP significa que o agente lê o próprio traço. É pequeno e é recursivo:
o primeiro passo para o agente que audita agente, e para a pergunta de quem audita o auditor
automático.

**Nenhum benchmark de memória mede escrita, esquecimento ou isolamento multiusuário.** O sinal
fraco não é uma coisa que aconteceu — é uma **ausência declarada pela própria literatura de
benchmark**. Ausências assim costumam ser o lugar onde o próximo incidente aparece.

**Três propostas de intercâmbio de memória em seis meses, nenhuma com governança.** Isso não é
sinal de convergência; é sinal de que o problema é reconhecido por muita gente e resolvido por
ninguém. Historicamente, esse padrão precede ou um padrão de fato imposto pelo maior fornecedor,
ou uma imposição regulatória.

### 6.2 Wildcards

**Wildcard 1 — Um incidente de vazamento de memória entre clientes numa plataforma de assistente
corporativo.** Um agente revela a um funcionário informação que aprendeu com outro, ou a um
cliente informação de outro cliente. Probabilidade baixa em qualquer plataforma específica; o
impacto seria desproporcional porque não há instrumento para medir isolamento (§3.4) nem para
provar que não aconteceu antes. Consequência plausível: memória compartilhada vira padrão proibido
por *default*, `e5.2.1` antecipa vários anos, e o valor acumulado de D2 evapora junto — sistemas
passariam a lembrar menos por segurança.

**Wildcard 2 — Exigência de trilha de auditoria para toda decisão tomada por IA em serviço
público, num país grande, com prazo curto.** Não é a mesma coisa que o Artigo 12, que se aplica a
sistemas de alto risco com datas em 2027-2028 e permite conformidade documental. Seria uma regra
de "toda decisão, todo registro, aberto à revisão do cidadão". Probabilidade baixa; impacto alto
porque forçaria padrão técnico de traço antes de haver consenso técnico — o formato do fornecedor
que estivesse pronto viraria o padrão de todo mundo. No Brasil, o caminho mais curto para isso não
é o PL 2338 e sim o artigo 20 da LGPD sendo interpretado com dentes em algum caso concreto.

**Wildcard 3 — A camada de confiança é absorvida pelos próprios modelos.** O fornecedor de modelo
passa a entregar memória, traço e avaliação nativos, integrados e suficientemente bons, e a camada
independente deixa de ter mercado. É o desfecho que **mata este mapa inteiro**: D1 vira recurso de
produto, D2 vira lock-in total e incontestado, D3 vira autoavaliação do fornecedor pelo próprio
fornecedor. Probabilidade baixa no horizonte de 2031 — porque justamente quem mais precisa auditar
é quem menos aceita que o auditado forneça o instrumento de auditoria —, mas é o wildcard com o
maior número de efeitos derrubados de uma vez.

**Nenhum dos três é previsão.** São testes de robustez do mapa: se acontecerem, o que cai.

## 7. Contra o próprio mapa

### 7.1 Qual efeito é só extrapolação linear do presente

**`e1` e `e6` são, em boa medida, o presente escrito no futuro.** "Gravar traço vira requisito" e
"avaliação automática vira etapa fixa" descrevem algo que uma plataforma com 50 mil empresas
usuárias já faz. Marquei os dois com confiança alta exatamente por isso — mas cabe a crítica de
que efeito quase-certo é efeito pouco informativo. Eles estão no mapa porque sustentam a segunda e
a terceira ordem, não porque revelem algo.

**`e4` é extrapolação disfarçada.** "O valor cresce com o tempo de uso" é a tese de todo produto
com dado de usuário desde as redes sociais. Não há nada específico de agentes nisso, exceto a
natureza do que é acumulado. Eu deixei porque a natureza do acervo importa — mas um crítico pode
dizer, com razão, que estou renomeando um fenômeno de 2012.

### 7.2 Qual pressupõe velocidade de adoção sem caso comparável

**`e4.1.2` — um formato de intercâmbio de memória com governança institucional até 2031.** Coloquei
sinal fraco e confiança baixa, e ainda assim é generoso. O caso comparável mais próximo é a
portabilidade de dados pessoais, que levou de 2016 (GDPR) a hoje para virar prática parcial. Três
propostas sem governança em seis meses não é o começo de uma convergência; é o retrato de um campo
fragmentado. Se este efeito não acontecer, `e4.1.1` fica como única saída — e ela é regulatória,
não técnica.

**`e6.1` — reportar calibração do juiz virando exigência até 2029.** A recomendação existe num
paper de junho de 2026. A distância entre "os autores recomendam" e "as plataformas obrigam" é
historicamente medida em década, não em três anos. Rebaixei para sinal fraco e confiança baixa
durante a contestação — na primeira versão estava em médio/média, o que era otimismo sobre a
velocidade com que a academia vira requisito de produto.

**`e2.1` — replay como forma padrão de depurar agentes até 2029.** Tenho um paper de abril de 2026
com resultados fortes (fidelidade 1,0 sobre 250 instâncias, cinco cargas de trabalho) e uma
ferramenta MIT em Go. Um paper não é adoção. Esse efeito sobreviveu com confiança média, mas é o
que eu derrubaria primeiro se tivesse de cortar um.

### 7.3 Qual disrupção pode simplesmente não se concretizar

**D3 é a mais frágil.** Ela depende de a fragilidade do juiz automático **importar para alguém**.
O cenário oposto é plausível e quase confortável: o juiz enviesado continua sendo usado, o viés
continua não sendo medido, os painéis continuam verdes, e ninguém reclama porque não há
contrafactual visível — o custo do erro de avaliação é difuso e chega tarde. Se D3 não se
concretizar, caem `e6.1`, `e6.1.1` e `e6.2.1`, e `e7` perde metade da razão de existir: certificação
de gestão de IA sem instrumento de medida validado é conformidade documental, e `e3.1.1` (o ritual
de auditar o log) passa a descrever o mapa inteiro em vez de um ramo dele.

**D2 pode se concretizar ao contrário.** Se o wildcard 1 acontecer, ou se o custo de contexto cair
o bastante para que histórico completo em cache resolva tudo (o estudo de agosto de 2026 já aponta
o limiar de US$ 0,55 por milhão de tokens em cache), memória sofisticada perde razão de ser:
guarda-se tudo, não se destila nada, e não há ativo destilado para prender ninguém. Nesse caso
`e4.*` cai inteiro e sobra `e5.*` — que é sobre exibir e apagar, e continua valendo.

**D1 é a mais sólida das três**, porque tem três apoios independentes: mercado (a escala de
adoção), padrão (as convenções GenAI) e norma (o Artigo 12). Se cair, cai por absorção — o
wildcard 3.

### 7.4 Que fonte, número ou autoria pode estar errado

- **Os números de adoção da Langfuse vêm do site da própria Langfuse.** São autodeclarados, sem
  auditoria, e "50 mil empresas" pode significar qualquer coisa entre 50 mil contas gratuitas e 50
  mil organizações pagantes. Servem para estabelecer ordem de grandeza, não para sustentar
  afirmação precisa.
- **Os números de benchmark de memória vêm de um blog da Mem0**, que é fornecedora e concorre com
  Zep e ByteRover. O blog é honesto o bastante para declarar que os números não são comparáveis e
  explicar por quê — o que aumenta minha confiança no *argumento* —, mas continua sendo fonte
  interessada sobre o desempenho da própria empresa. Números específicos (94,4%, 92,5%) devem ser
  lidos como reivindicação, não como medida.
- **A datação do Artigo 12 diverge entre fontes.** A página consultada registra 2 de dezembro de
  2027 para o Anexo III e 2 de agosto de 2028 para o Anexo I; buscas mencionaram tanto 2 de agosto
  de 2026 quanto um adiamento por um pacote *Digital Omnibus*. Só abri a primeira. **A data está em
  disputa e eu não a resolvi** — os efeitos que dependem de prazo regulatório (`e3`, `e3.2`) devem
  ser lidos com essa incerteza embutida.
- **Sobre envelhecimento e contaminação de benchmark, este mapa não afirma nada.** Era um apoio
  previsto para D3 e caiu inteiro quando o primário recusou acesso (§12.4). O que sustenta D3 hoje
  é a calibração do juiz e o `pass^k`, não a contaminação — e D3 fica mais fraca por isso.
- **O dado da Zapier (89% / 58% / 6%)** chega por uma fonte secundária — um blog que o cita. Não
  abri a pesquisa original. É indicativo, não medida.
- **O paper de *governance decay* foi lido em PDF pelo arXiv e o resumo que obtive é qualitativo**,
  com a extração dizendo que "violações aumentam substancialmente" sem número. Tratei como
  qualitativo e não derivei efeito quantitativo dele.

### 7.5 Que viés entrou aqui

**Viés de fonte.** Metade do que sustenta este mapa é produzida por quem vende a solução: Langfuse
sobre observabilidade, Mem0 sobre memória, organismos certificadores sobre certificação. Fornecedor
é quem mede o próprio mercado, e o mercado que eles medem é sempre grande e sempre crescente.
Compensei parcialmente com fontes normativas (AI Act, Senado, ANPD) e acadêmicas (τ-bench,
*Reliability without Validity*, replay determinístico, *governance decay*), mas a compensação é
parcial.

**Viés do agente que escreve.** Fui instruído a descobrir a disrupção em vez de suspeitar de uma —
e, mesmo assim, encontrei três. Um tema sempre devolve disrupções quando se pede disrupções. O
sinal de que isso pode ter acontecido aqui é `e4`: ele é genérico o bastante para valer para
qualquer produto com dado de usuário, e eu o mantive mesmo assim.

**Viés de recorte.** A régua da disciplina — excluir o que já é comum em produto de massa — empurra
o mapa para o emergente por construção. Nada do que é maduro e funciona podia aparecer como raiz,
e isso torna o mapa sistematicamente mais dramático do que o presente. O §3.8 existe como
contrapeso.

**Viés de horizonte.** 2031 é perto demais para efeito de terceira ordem e longe demais para
extrapolar do presente. Nessa faixa a tentação é escrever "a sociedade se reorganiza" sem apoio.
Onde não tinha apoio, marquei `baixa` — mas confiança baixa não é o mesmo que ter tirado o efeito,
e boa parte da terceira ordem deste mapa é argumento, não evidência.

**Viés declarado da encomenda.** Os parâmetros pediram viés neutro e me disseram o que mudaria de
ideia: evidência de que a adoção já passou da maioria inicial, ou de que a tecnologia só melhora o
que existe. Para observabilidade, encontrei sinal de que a adoção pode já ter passado desse ponto
(§3.2) — e por isso a captura de traço está classificada como madura, e não como raiz. Foi o único
lugar em que o critério declarado efetivamente cortou algo.

## 8. O que a máquina errou

Cinco itens específicos, com o motivo da desconfiança.

**1. A busca me entregou um número sobre o Artigo 12 que a fonte primária desmente.** O resumo de
busca afirmava, com segurança, que "as obrigações do Anexo III entram em vigor em 2 de agosto de
2026, o que permanece a data exigível apesar de um adiamento proposto" — e, na frase seguinte, que
sistemas autônomos do Anexo III foram adiados para 2 de dezembro de 2027. Duas datas incompatíveis
no mesmo parágrafo. Ao abrir a página do Artigo 12, a data registrada é 2 de dezembro de 2027.
**O que me fez desconfiar foi a contradição interna**, não conhecimento prévio: nenhum texto
regulatório diz "vale em agosto" e "foi adiado para dezembro do ano seguinte" sobre o mesmo
escopo sem que uma das duas esteja errada. Registrei a divergência em §7.4 em vez de escolher a
data mais conveniente.

**2. Um número de benchmark apareceu em duas versões conflitantes, com dois dígitos de diferença.**
Sobre o Zep em LongMemEval, um resumo dizia "Zep 71,2%" e, três linhas depois, "Zep 71,2% contra
49% de Mem0 em algumas comparações" — sendo que o mesmo texto reportava 94,4% para Mem0 no mesmo
benchmark. Mem0 não pode ter 94,4% e 49% no mesmo benchmark. **A pista foi a incompatibilidade
aritmética entre dois números da mesma fonte.** Ao abrir o material original, a explicação estava
lá e era outra: os resultados usam modelos geradores, modelos juízes e configurações de
recuperação diferentes, e por isso não são comparáveis. Passei a tratar todos esses números como
reivindicação, com atribuição explícita.

**3. Atribuição de resultado a "ByteRover" sem que eu soubesse o que é.** Os resumos citavam
ByteRover ao lado de Mem0 e Zep como se fosse entidade conhecida. Não abri nada sobre ByteRover e
não sei se é produto, laboratório ou artigo. **Mantive o nome fora das tecnologias citadas do
frontmatter** e o mencionei só onde a fonte aberta o menciona. Citar entidade que não se sabe
identificar é o caminho mais curto para a autoria trocada.

**4. Um efeito plausível que não sobreviveu à checagem: "resumir contexto economiza tokens".** Essa
era a premissa que eu carregava do próprio enunciado do tema — a menção a uma ferramenta que
promete "60 a 90% menos tokens". O estudo que abri mede o contrário em condição realista:
histórico completo com 92-100% de recall a US$ 0,11 por turno contra preset de produção com 38-58%
de recall a US$ 0,24. **O que me fez checar foi o número redondo demais** — "60 a 90%" é faixa de
material promocional, não de medição. O efeito que eu ia escrever ("redução de contexto vira
disciplina de engenharia com ganho de custo") foi cortado e está no anexo §12.5.

**5. O 403 que quase virou citação.** A página da OpenAI sobre abandonar o SWE-bench Verified
recusou acesso automatizado. Os resumos de busca traziam números atraentes e muito citáveis (59,4%
de falhas causadas por defeito de teste, 10,6% de vazamento, 32,67% de solução vazada). **Não abri
nenhuma dessas páginas**, e a regra da skill é explícita: fonte não aberta não entra. O ponto ficou
**A afirmação inteira saiu do documento** — não ficou com ressalva em lugar nenhum das seções 1 a
11; só o registro da perda, em §7.4 e §12.4. Era a tentação mais fácil do trabalho: um número
preciso, de fonte prestigiosa, que sustentaria sozinho um argumento inteiro.

**Um erro que provavelmente cometi e não consegui detectar.** Boa parte dos resumos que usei foi
produzida por um modelo pequeno lendo a página por mim. Onde o resumo era qualitativo — o caso do
*governance decay*, que me devolveu "violações aumentam substancialmente" sem número —, não tenho
como saber se o número estava na página e se perdeu na leitura, ou se nunca existiu. Tratei como
qualitativo, que é o mais conservador; mas é possível que eu tenha subusado a fonte, e isso é
invisível de dentro.

## 9. Três cenários para 2031

**Provável.** A camada existe, funciona e é aborrecida. Todo sistema agêntico sério grava traço
por construção, porque virou requisito de compra antes de virar requisito de lei: o cliente
corporativo pede, o fornecedor entrega, e o vocabulário venceu por cansaço — as convenções GenAI
saíram de *Development* em algum momento entre 2027 e 2029 e ninguém mais discute nome de atributo.
Memória é recurso padrão, cada plataforma tem a sua, e ninguém exporta nada: existe um formato de
intercâmbio, ele é implementado por quem não tem usuário a perder, e os três grandes não aderiram.
A avaliação automática virou etapa de CI, os painéis são verdes, e a calibração do juiz continua
não sendo reportada — porque nenhum cliente sabe pedir. O mercado de auditoria de IA existe, é
caro, é dominado por poucos organismos acreditados, e produz relatório que quase ninguém lê inteiro.
Do lado da interface, a trilha de auditoria virou padrão de tela: todo produto agêntico tem um
"mostrar o trabalho", quase ninguém clica, e quem clica não entende. Nada disso é catástrofe; é o
desfecho mais comum de infraestrutura — ela funciona, custa caro e some da conversa.

**Desejável.** A diferença não está na tecnologia; está em três decisões que foram tomadas cedo.
Primeira: a portabilidade de memória virou direito antes de virar padrão técnico — alguém tratou o
retrato que o sistema faz de você como dado pessoal seu, no espírito do artigo 20 da LGPD, e a
partir daí o formato de intercâmbio deixou de depender de boa vontade de fornecedor. Segunda: a
calibração virou obrigação de quem publica nota — nenhum painel de qualidade exibe score sem
concordância corrigida por acaso e teste de troca de posição ao lado, e isso aconteceu porque a
prática entrou nas plataformas de avaliação, não porque alguém legislou. Terceira, e é a que
interessa a quem projeta interação: **a trilha virou legível para quem não a produziu.** O trabalho
de design que em 2026 existia como quatro padrões num artigo de revista virou repertório maduro,
com granularidade ajustável, e a pergunta "por que isso está certo?" passou a ter resposta que uma
pessoa não-técnica consegue verificar em menos de um minuto. Para chegar aqui foi preciso que
alguém tratasse o traço como problema de design desde cedo, e não como despejo de log com uma
interface por cima.

**Indesejável.** A camada foi absorvida. O fornecedor de modelo entrega memória, traço e avaliação
nativos — bons, integrados, gratuitos —, e a camada independente morre por não conseguir competir
com o que vem embutido. O resultado é que o auditado fornece o instrumento de auditoria. O traço
existe, mas é o traço que o fornecedor decidiu emitir; a memória existe, mas é dele; a avaliação
existe, mas o juiz é do mesmo provedor do avaliado. A conformidade regulatória é atendida por
relatório gerado automaticamente, e o ritual de auditar o log substitui a auditoria. Quem projeta
interação recebe a trilha pronta e a exibe como selo — um símbolo de confiança sem evidência
atrás. **O sinal precoce disso já é visível e cabe numa frase:** quando a plataforma de
observabilidade passa a ser operada pelo próprio agente que ela observa, e ninguém pergunta quem
audita o auditor automático. Esse sinal apareceu em 2026.

## 10. O experimento

### Auditoria às cegas

**O que é.** Uma interface de leitura de traço, com uma bancada de teste embutida. Monta-se um
agente simples com quatro a seis chamadas de ferramenta e memória entre sessões — algo do tamanho
de "pesquise três fontes sobre um tema, compare e escreva um parágrafo". Grava-se o traço completo
no vocabulário das convenções GenAI (`invoke_agent` na raiz, `chat` e `execute_tool` abaixo, mais
as operações de memória) e a memória acumulada entre execuções. A interface exibe isso em quatro
níveis de divulgação progressiva, inspirados nos padrões de transparência de 2026: (1) só o
resultado; (2) resultado + lista de passos; (3) resultado + passos + o que cada ferramenta
devolveu; (4) traço bruto e memória inteira.

Entre as execuções gravadas, **algumas contêm um defeito plantado** — uma fonte que não sustenta a
afirmação, um passo cujo resultado foi ignorado pelo agente, uma memória de sessão anterior que
está errada e contaminou a resposta. A pessoa que testa não sabe quais.

**Que pergunta sobre o futuro ele ajuda a responder.** A pergunta central de `e1.1` e `e1.1.1`:
**a trilha, exibida, torna alguém capaz de dizer por que a resposta está certa — ou só produz
sensação de transparência?** É a diferença entre o cenário desejável e o indesejável, e ela é
mensurável: mede-se taxa de detecção do defeito plantado por nível de divulgação, tempo até a
decisão, e — o mais interessante — **confiança declarada**. Se a confiança subir com o nível de
detalhe enquanto a detecção não sobe, o traço está funcionando como retórica e não como evidência.
Esse é o achado que valeria a pena.

**Que tecnologia emergente ele usa, e por que não dá com tecnologia madura.** Usa três coisas
emergentes: traço hierárquico de agente no vocabulário GenAI (`invoke_agent`/`execute_tool`/
operações de memória), memória persistente entre sessões, e replay — as execuções gravadas
precisam ser exatamente as mesmas para todas as pessoas que testam, senão não há comparação. Com
tecnologia madura isso não se faz: log de aplicação não tem estrutura de árvore nem semântica de
passo de agente, e sem replay cada pessoa veria uma execução diferente, o que destrói o desenho
experimental. Não é questão de conveniência — é a condição de possibilidade do teste.

**O que a turma vai fazer quando testar em sala.** Cada pessoa recebe três execuções, uma por
nível de divulgação, sorteadas, sem saber quais têm defeito. Para cada uma responde: (a) a resposta
está certa? (b) por quê? (c) de 1 a 5, o quanto você confia? Quinze pessoas × três execuções dá
45 julgamentos — pouco para significância, suficiente para direção. Depois, a parte que só funciona
com a turma junta: mostra-se o defeito e discute-se **o que teria de estar na tela para você ter
visto**. Fecha-se com a pergunta de D2, que é desconfortável e não precisa de instrumento: a
memória acumulada nessas execuções — a quem ela pertence?

**O que seria um resultado que me faria mudar de ideia.** Dois resultados me derrubam, em direções
opostas.

Se **a detecção subir junto com a confiança** conforme o detalhe aumenta — as pessoas do nível 4
acham mais defeitos *e* confiam proporcionalmente —, então ler traço é mais fácil do que este mapa
supõe, `e1.1.1` (ler máquina como competência de design) perde urgência, e o cenário desejável fica
mais provável do que o provável. Eu teria superestimado a dificuldade.

Se **ninguém detectar nada em nenhum nível**, inclusive no traço bruto, então o problema não é de
granularidade de interface e a cadeia `e1.1` inteira está mal colocada: não adianta projetar melhor
a exibição do caminho, porque o caminho não é auditável por humano em escala nenhuma. Nesse caso
a única saída é máquina auditando máquina — e o mapa deveria ter sido escrito em torno disso,
não em torno de interface.

Os dois resultados são publicáveis para a disciplina. O terceiro, o mais provável — detecção baixa
e estável, confiança crescente —, confirma o mapa, e é o menos interessante de todos.

## 11. Fontes

Quinze fontes abertas e lidas. Fonte que não abriu não está aqui — ver §12.4 para o que foi
descartado.

1. **OpenTelemetry — GenAI Agent Spans (semantic conventions)** —
   `https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-agent-spans.md`
   Sustenta: a existência de vocabulário padronizado para spans de agente (`create_agent`,
   `invoke_agent` client/internal, `invoke_workflow`, `plan`, `execute_tool`), os atributos
   `gen_ai.agent.*`, as operações de memória (`create_memory`, `search_memory`, `update_memory`) e
   o status *Development*. Confiabilidade alta: é a especificação primária, no repositório oficial.

2. **OpenTelemetry Blog — Inside the LLM Call: GenAI Observability with OpenTelemetry (2026)** —
   `https://opentelemetry.io/blog/2026/genai-observability/`
   Sustenta: a árvore `invoke_agent → chat → execute_tool` e a formulação de que as convenções
   estão "já em uso e sob desenvolvimento ativo". Confiabilidade alta como fonte institucional;
   é material de divulgação do próprio projeto, então otimista sobre a própria utilidade.

3. **EU Artificial Intelligence Act — Artigo 12, Record-Keeping** —
   `https://artificialintelligenceact.eu/article/12/`
   Sustenta: a exigência de registro automático de eventos ao longo da vida do sistema, as três
   finalidades do §2, os quatro registros mínimos do §3 para o Anexo III 1(a), e as datas de
   aplicação registradas (02/12/2027 e 02/08/2028). Confiabilidade alta para o texto do artigo;
   é um portal privado que reproduz o texto legal, não o Jornal Oficial — e as datas divergem de
   outras fontes (§7.4).

4. **Mem0 — LoCoMo vs. LongMemEval vs. BEAM: The 2026 AI Memory Benchmark Guide** —
   `https://mem0.ai/blog/ai-memory-benchmarks-in-2026`
   Sustenta: a descrição dos três benchmarks, os números reivindicados, e — o mais importante — a
   declaração de que os números não são comparáveis e as lacunas de avaliação (escrita,
   esquecimento, isolamento multiusuário, orçamento de tokens). Confiabilidade média: é fornecedora
   escrevendo sobre o próprio desempenho; vale mais pelo argumento metodológico que pelos números.

5. **Reliability without Validity: A Systematic, Large-Scale Evaluation of LLM-as-a-Judge Models
   Across Agreement, Consistency, and Bias (arXiv, jun/2026)** —
   `https://arxiv.org/html/2606.19544v1`
   Sustenta: 21 juízes, 9 provedores, 118 execuções, ~541 mil julgamentos; deflação de kappa de
   33,8-41,3 p.p.; troca de até 14 posições entre benchmarks; o paradoxo teste-reteste >0,95 com
   viés de posição >0,10; a amplitude de 60,4 p.p. contra 13,5 p.p.; e o protocolo mínimo
   recomendado. Confiabilidade alta em escala e método; *preprint* não revisado por pares.

6. **τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains (arXiv)** —
   `https://arxiv.org/abs/2406.12045`
   Sustenta: a métrica `pass^k` e a lacuna de confiabilidade (abaixo de 50% em `pass@1`, abaixo de
   25% em `pass^8` no varejo). Confiabilidade alta: é o paper que introduz a métrica.

7. **Deterministic Replay for AI Agent Systems (arXiv, abr/2026)** —
   `https://arxiv.org/abs/2607.16200`
   Sustenta: a formulação do problema de não-determinismo, a abordagem do `agrepl` (proxy MITM,
   traço estruturado, ambiente isolado sem rede), e os resultados (fidelidade 1,0, redução mediana
   de 98,3% de latência por passo, 250 instâncias em cinco cargas). Confiabilidade média:
   *preprint*, autor único, resultados autorreportados.

8. **Governance Decay: How Context Compaction Silently Erases Safety Constraints in Long-Horizon
   LLM Agents (arXiv, jun/2026)** — `https://arxiv.org/pdf/2606.22528`
   Sustenta: que a compactação remove conteúdo de governança junto com o resto, e que os sistemas
   existentes não medem se a restrição sobreviveu. Confiabilidade média: *preprint*, autor único;
   o resumo que obtive é qualitativo, sem número (ver §8).

9. **Langfuse — página institucional** — `https://langfuse.com/`
   Sustenta: a escala de adoção (50 mil+ empresas, 90 bilhões+ de observações/mês, 22 mil+
   estrelas, 21 das Fortune 50, 100 mil+ engenheiros), o traço hierárquico, os três modos de
   avaliação, e o `SKILL.md`/CLI/servidor MCP. Confiabilidade baixa para os números (autodeclarados,
   sem auditoria), alta para o que a plataforma faz.

10. **Portable AI Memory or Permanent Lock-In (Stan Tyan, 2026)** —
    `https://stantyan.com/blog/portable-ai-memory-or-permanent-lock-in/`
    Sustenta: as três propostas de intercâmbio (MIF, memorywire, Open Memory Protocol) e a ausência
    de governança, segunda implementação e adoção; o caso dos 18 meses de contexto sem caminho de
    migração; e os números Zapier (89% / 58% / 6%). Confiabilidade média-baixa: blog de autor
    individual com tese explícita; os números Zapier chegam de segunda mão.

11. **ISO 42006 Raises the Bar for ISO 42001 Certifiers (Bright Defense)** —
    `https://www.brightdefense.com/news/iso-42006-raises-the-bar-for-iso-42001-certifiers/`
    Sustenta: a publicação da ISO/IEC 42006 em 07/07/2025, o que ela exige dos organismos
    certificadores (competência coletiva em IA, controles do Anexo A, conformidade legal, setor),
    o tratamento do tempo de auditoria como mínimo e os 70% de atividade presencial.
    Confiabilidade média: fornecedora de serviços de conformidade escrevendo sobre a norma que
    define seu mercado; não é o texto da norma.

12. **Senado Federal — PL 2338/2023** —
    `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233`
    Sustenta: aprovação no Senado em dezembro de 2024, remessa à Câmara em 17/03/2025, tramitação
    encerrada no Senado, autoria do Senador Rodrigo Pacheco. Confiabilidade alta: fonte primária
    oficial.

13. **ANPD e Regulação de IA no Brasil: Guia 2026-2027 (Confidata)** —
    `https://confidata.com.br/blog/anpd-regulacao-ia-brasil-2026-2027`
    Sustenta: o Mapa de Temas Prioritários 2026-2027 publicado em dezembro de 2025 com IA como um
    dos quatro eixos; a ANPD como coordenadora do SIA; a comissão especial na Câmara sem data de
    votação; o sandbox de transparência algorítmica com três empresas desde fevereiro de 2026 até
    dezembro de 2026; e o artigo 20 da LGPD. Confiabilidade média: blog empresarial, não fonte
    primária da ANPD.

14. **Context Engineering in 2026: Why We Stopped Compacting Our Agent's Context (Louis Bouchard,
    ago/2026)** — `https://www.louisbouchard.ai/context-engineering-2026/`
    Sustenta: recall de 92-100% com histórico completo a US$ 0,11/turno contra 38-58% a
    US$ 0,24/turno no preset de produção; 17% com reset de contexto; US$ 0,0063/turno no DeepSeek
    com 97% de cache; o corte de 38% por limitar saída de ferramenta sem perda de acurácia; e o
    limiar de US$ 0,55 por milhão de tokens em cache. Confiabilidade média: medição própria de
    autor individual, metodologia não revisada por pares, mas com números específicos e condições
    declaradas.

15. **Practical Interface Patterns For AI Transparency, Part 2 (Victor Yocco, Smashing Magazine,
    13/05/2026)** — `https://www.smashingmagazine.com/2026/05/practical-interface-patterns-ai-transparency/`
    Sustenta: os quatro padrões (living breadcrumb, dynamic checklist, thinking toggle, audit
    trail), os exemplos de uso, e o problema declarado de granularidade (pouco detalhe mata
    supervisão, muito detalhe mata usabilidade). Confiabilidade média-alta para repertório de
    design: publicação editorial estabelecida na área, com autor identificado; não é evidência
    empírica de eficácia.

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista

Esta rodada foi executada em modo não interativo: não havia pessoa para responder. Os parâmetros
vieram integralmente da encomenda, e a skill exige que campos ausentes sejam perguntados — aqui
nenhum estava ausente, então a rodada de perguntas foi substituída pelo registro abaixo. **Isto é
um desvio declarado do §1 da skill**, que manda esperar resposta; o que se preservou foi a
obrigação de não preencher lacuna com suposição.

| Campo | Valor confirmado |
|---|---|
| tema | A infraestrutura de confiança: memória, observabilidade e avaliação de agentes |
| recorte | Tema 3 de 19 da disciplina, família "Agentes"; objeto = saber o que o agente sabe e conferir o que ele fez |
| horizonte | 2031 |
| público | Quem projeta mídia e interação |
| região | Global, com nota sobre o Brasil |
| objetivo | Mapa de futuro para a disciplina CIN0055, com efeitos de 1ª a 3ª ordem |
| exclusões | O que já é comum em produto de massa (régua da disciplina); ideias genéricas que serviriam para qualquer tema |
| viés | Neutro |
| profundidade | Três ordens |
| modo | A partir de uma inovação/tema, não de um setor |
| disrupção suspeita | Nenhuma declarada — a encomenda pediu para descobrir |
| critério de mudança de ideia | Evidência de adoção além da maioria inicial (Rogers), ou de que a tecnologia só melhora o existente |

**Fronteiras com os temas vizinhos, respeitadas ao longo do documento.** Conter o agente é o tema
2: `e3` toca autorização e limite, mas só na medida em que o registro é pré-requisito. O ofício de
programar com agente é o tema 1: memória de código (`projectmem`, `deja-vu`, `memtrace`) aparece
como sinal de que memória virou produto, não como assunto de produtividade de programador. O único
lugar onde a fronteira com o tema 2 é explicitamente tênue está registrado em §6.1, no sinal fraco
do *governance decay*.

### 12.2 Consultas realizadas

Buscas (WebSearch), na ordem:

1. `OpenTelemetry GenAI semantic conventions agent spans status 2026`
2. `agent memory Mem0 Letta Zep long-term memory benchmark 2026`
3. `EU AI Act logging requirement Article 12 record-keeping high-risk automatic logs 2026 enforcement`
4. `Nof1 alpha arena LLM trading $10000 real money results`
5. `LLM-as-a-judge reliability bias position bias study 2026 agreement human`
6. `PL 2338 marco legal inteligência artificial Brasil 2026 registro auditoria rastreabilidade ANPD`
7. `tau-bench agent benchmark reliability pass^k variance SWE-bench contamination criticism 2026`
8. `Langfuse open source LLM observability 2026 adoption traces evaluation`
9. `ChatGPT memory across chats privacy concerns portability export 2026 vendor lock-in agent memory ownership`
10. `AI assurance audit profession market 2026 third-party AI auditors certification ISO 42001 growth`
11. `context engineering context rot long context degradation agents 2026 token cost compaction`
12. `deterministic replay LLM agent debugging record replay non-determinism 2026`
13. `designing for AI transparency interface trace UX showing agent reasoning users 2026 interaction design`

Páginas abertas (WebFetch): as 15 de §11, mais a tentativa que falhou (§12.4).

### 12.3 Material que apareceu na busca, foi considerado relevante, e **não** foi aberto

Fica registrado porque é a matéria-prima de quem quiser continuar este mapa. **Nada abaixo sustenta
afirmação no corpo do documento.**

- `arxiv.org/pdf/2603.29231` — *Beyond pass@1: A Reliability Science Framework for Long-Horizon LLM
  Agents*. Provavelmente a fonte mais importante que deixei de abrir; é exatamente o argumento de
  D3 formalizado.
- `arxiv.org/pdf/2606.20634` — *DEMM-Bench: A Cross-Regime Benchmark for Agent-Runtime
  Governance-Evidence Sufficiency*. Benchmark sobre suficiência de evidência de governança em tempo
  de execução — seria a peça que falta entre D1 e a norma.
- `arxiv.org/pdf/2606.17328` — *MemTrace: Probing What Final Accuracy Misses in Long-Term Memory*.
- `arxiv.org/pdf/2606.29914` — *MemDelta: Controlled Baselines and Hidden Confounds in Agent Memory
  Evaluation*. O título sugere que confirma a crítica de comparabilidade de §3.4 por via
  independente da Mem0 — o que resolveria o viés de fonte apontado em §7.5.
- `arxiv.org/pdf/2606.24775` — *Are We Ready For An Agent-Native Memory System?*
- `arxiv.org/pdf/2605.11325` — *Structured Belief State and the First Precision-Aware Benchmark for
  LLM Memory Retrieval*.
- `arxiv.org/pdf/2605.25869` — *Mitigating Provenance-Role Collapse in Long-Term Agents via Typed
  Memory Representation*. "Colapso de proveniência-papel" é praticamente o nome técnico do
  vazamento de contexto entre pessoas de `e5.2`.
- `arxiv.org/pdf/2605.11814` — *MedMemoryBench* (memória de agente em saúde personalizada). Não
  aberto também pela regra da skill sobre tema clínico.
- `arxiv.org/pdf/2604.23178` e `arxiv.org/pdf/2604.18164` — mitigação de viés em pipelines de
  LLM-as-judge e viés composicional em juízes multimodais.
- `aclanthology.org/2025.ijcnlp-long.18/` — *Judging the Judges: A Systematic Study of Position
  Bias*. Revisado por pares, ao contrário do preprint que usei.
- `arxiv.org/pdf/2606.08275` — *Causal Agent Replay: Counterfactual Attribution for LLM-Agent
  Failures*.
- `arxiv.org/pdf/2605.08580` — *Slipstream: Trajectory-Grounded Compaction Validation*.
- `arxiv.org/pdf/2605.14237` — *LOOP Skill Engine*, que reivindica 99% de sucesso e 99% de redução
  de token por gravação única e replay determinístico. **Dois 99% no mesmo título** foi o motivo de
  não abrir com prioridade; ver §12.4.
- `arxiv.org/pdf/2512.00742` — *On the Regulatory Potential of User Interfaces for AI Agent
  Governance*. A ponte mais direta entre este tema e design de interação.
- `practical-ai-act.eu`, `isms.online`, `helpnetsecurity.com`, `truescreen.io`, `datapace.ai`,
  `deepinspect.ai` — todos sobre o Artigo 12. Abri só a fonte do texto legal; estes resolveriam a
  divergência de datas de §7.4.
- `github.com/reaatech/agent-replay` — implementação de record/replay de agente.
- `marktechpost.com` (ago/2026) — comparativo Langfuse × LangSmith × Braintrust × Arize. Teria dado
  o recorte de mercado que falta a §3.2, sem depender do site de um fornecedor.
- Cobertura do Alpha Arena (Yahoo Finance, news.bitcoin.com, euclideanai.com, iweaver.ai). Nenhuma
  aberta — por isso o Alpha Arena aparece no documento como enquadramento conceitual, sem números
  de resultado.

### 12.4 Fontes descartadas, e por quê

- **`openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/` — HTTP 403.** Página recusou
  acesso automatizado. É a maior perda deste levantamento: sustentaria diretamente a tese de
  envelhecimento de benchmark em D3, com autoria de peso. Os números que circulavam nos resumos de
  busca (59,4% de falhas por defeito de teste numa auditoria de 138 falhas do o3; 10,6% de
  vazamento documentado; 32,67% de vazamento de solução em Aleithan et al., 2024) **não estão no
  documento** e não devem ser usados a partir daqui sem verificação. Consequência: o apoio
  "benchmark envelhece por contaminação" foi **removido de §3.6 e de §4.3**, e não sobrou com
  ressalva em nenhuma seção de 1 a 11. Primeira coisa a fazer numa rodada futura que precise disso:
  abrir o primário por outro caminho (PDF, cache, ou o paper de Aleithan et al. diretamente).
- **Resumos de busca como fonte.** Vários traziam números atraentes — 55 mil estrelas do Mem0,
  previsão Gartner de 71% de grandes empresas alinhadas à ISO 42001 até 2027, 1.400+ vagas de
  governança de IA nos EUA em abril de 2026, salários de US$ 112 mil a 245 mil, degradação de
  13,9-85% por *context rot* em 18 modelos de fronteira, variação de acurácia de até 15% entre
  execuções com cinco LLMs configurados para saída determinística. **Nenhum entrou**, porque não
  abri a página correspondente.
- **Toda a lista de ferramentas do enunciado do tema** (`projectmem`, `deja-vu`, `memtrace`,
  `lean-ctx`, `sigmap`, `cased/kit`, `codegraph-rust`, `airweave`, `cocoindex`, `Hindsight`,
  `opik`, `Phoenix`, `MLflow`, `Weights & Biases`, `promptfoo`, `vibe-log`, `agent-qa`, `MathEval`,
  `Rath`, `Parseable`, `Agnost`, `agent-inspect`). O enunciado é contexto, não fonte — está dito na
  encomenda. Não abri repositório nenhum. Por isso essas ferramentas **não aparecem em
  `tecnologias_citadas`** nem sustentam efeito: elas informaram que direção buscar, e só.
- **A alegação de "60 a 90% menos tokens"** do `lean-ctx`, mencionada no enunciado. Faixa
  promocional, sem medição aberta, e contrariada pela única medição que abri (§3.5). Ver §8, item 4.
- **`arxiv.org/pdf/2605.14237` (LOOP Skill Engine, 99% e 99%).** Não descartado por ser falso — não
  sei se é —, mas despriorizado: dois números de 99% no título são, em avaliação de sistema
  não-determinístico, motivo suficiente para checar antes de citar, e não sobrou orçamento para
  checar.

### 12.5 Efeitos gerados e depois cortados

Por cadeia interrompida (falta de sinal observável):

- **"Memória de agente vira instrumento de discriminação em contratação"** — o que um assistente
  acumulou sobre alguém ao longo de anos passa a ser consultado em processo seletivo. Cadeia causal
  plausível, zero sinal observável. Cortado.
- **"O traço de agente vira instrumento de vigilância de trabalhador"** — o registro obrigatório do
  que o agente fez é, na prática, registro do que a pessoa pediu. Tecnicamente inevitável,
  socialmente não documentado em nenhuma fonte que abri. Cortado da roda; sobrevive como frase em
  §5 ("a mesma infraestrutura que permite auditar é a que permite vigiar").
- **"Surgem agentes projetados para não deixar traço"** — evasão deliberada de observabilidade como
  recurso comercial. Especulação pura. Cortado.

Por evidência contrária:

- **"Redução de contexto vira disciplina de engenharia com ganho de custo mensurável"** — cortado
  em favor do oposto, medido em §3.5. Ver §8, item 4.
- **"Janela de contexto maior torna memória persistente desnecessária"** — cortado nos dois
  sentidos: a evidência de degradação com contexto longo (não aberta) contradiz, e a evidência de
  que histórico completo vence (aberta) parcialmente confirma. Contradição não resolvida; virou o
  segundo parágrafo de §7.3 em vez de efeito.

Por rebaixamento durante a contestação (§7), não cortados mas alterados:

- `e6.1` (reportar calibração do juiz): de sinal médio / confiança média para **sinal fraco /
  confiança baixa**. Motivo: a distância entre recomendação acadêmica e requisito de produto.
- `e2.1` (replay como forma padrão de depurar): mantido em média, mas marcado em §7.2 como o
  primeiro a cair.
- `e4.1.2` (formato de intercâmbio com governança): mantido em fraco/baixa e marcado em §7.2 como
  generoso mesmo assim.

Por serem genéricos demais (a exclusão pedida na encomenda — "ideias que servem para qualquer
tema"):

- "A IA muda a natureza do trabalho."
- "Surgem novos papéis profissionais."
- "A regulação corre atrás da tecnologia."
- "A desigualdade entre quem tem e quem não tem acesso aumenta."
- "A alfabetização em IA vira competência básica."

Todas foram geradas na primeira passagem e todas foram cortadas. O teste aplicado: se a frase
continua verdadeira trocando "memória e traço de agente" por "vídeo generativo" ou "interface
neural", ela não é efeito deste tema.

### 12.6 Contagens e conferência

- Disrupções-raiz: **3** (D1 traço, D2 memória, D3 avaliação).
- Efeitos de 1ª ordem: **7** (`e1`-`e7`).
- Efeitos de 2ª ordem: **14**.
- Efeitos de 3ª ordem: **19**.
- Total de efeitos: **40**.
- Distribuição de confiança: alta 2, média 14, baixa 24. A concentração em baixa está na 3ª ordem,
  e é a resposta esperada segundo o formato da disciplina.
- Distribuição de sinal: forte 3, médio 12, fraco 25.
- Prazos: 2027 (2), 2028 (7), 2029 (9), 2030 (8), 2031 (14). Nenhum efeito de 1ª ordem depois de
  2028 e nenhum de 3ª ordem antes de 2030 — mas a coincidência entre ordem causal e cronologia é
  acidental, não critério, e há efeitos de 2ª ordem (`e5.1.1` é de 3ª e cai em 2030; `e2.2` é de 2ª
  e cai em 2030) que se cruzam no tempo com ordens vizinhas. A nota de §5 vale: a ordem é causal.
- Fontes abertas: **15**. Tentativas falhas: **1** (403).
- Buscas: **13**.

### 12.7 Limitações desta rodada

1. **Sem interlocutor.** Não houve entrevista real. Os parâmetros vieram da encomenda, e onde a
   skill manda esperar confirmação, ela foi substituída por registro (§12.1).
2. **Leitura intermediada.** As páginas foram lidas por um modelo auxiliar que devolveu resumos.
   Onde o resumo foi qualitativo, não sei se perdi número que estava na página (§8, último item).
3. **Viés de fonte comercial não compensado.** Declarado em §7.5. Quatro das quinze fontes têm
   interesse direto no mercado que descrevem, e três delas (Langfuse, Mem0, Bright Defense)
   sustentam pontos estruturais do mapa.
4. **Divergência de datas regulatórias não resolvida** (§7.4). Afeta `e3` e `e3.2`.
5. **A nota sobre o Brasil é fina.** Duas fontes, uma delas secundária. Não abri nada da própria
   ANPD, nem do sandbox, nem do texto do PL na Câmara. O recorte brasileiro deste mapa é o mais
   fraco.
6. **Nenhuma evidência empírica sobre a leitura de traço por humanos.** O elo entre D1 e a interface
   — que é o ponto do mapa que mais interessa ao público declarado — está sustentado por um artigo
   editorial de padrões de design, não por estudo de usuário. É precisamente essa lacuna que o
   experimento de §10 se propõe a atacar, e é por isso que ele existe.
7. **D3 perdeu um apoio e não foi reforçada.** A contaminação de benchmark sairia como terceira
   evidência da terceira disrupção; o primário não abriu e a afirmação foi removida em vez de
   marcada. D3 fica sustentada por duas evidências (calibração do juiz, `pass^k`) em vez de três, e
   §7.3 já a aponta como a mais frágil das três.
8. **Fonte revisada por pares, quase nenhuma.** Quatro dos papers usados são *preprints* de arXiv;
   o único revisado (τ-bench, ICLR) é de 2024. A literatura deste campo em 2026 é majoritariamente
   não revisada, e isto é uma característica do objeto, não uma falha do levantamento — mas o
   leitor deve calibrar por isso.
